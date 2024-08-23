<template>
  <div
    class="dropdown-component"
    id="dropdown-component"
    ref="dropdownComponent"
    tabindex="0"
    @keydown="handleKeyDown"
    @focusin="open"
    @focusout="closeViaBlur($event)">
    <div
      class="dropdown-component-outside"
      @mousedown.prevent="opened ? close() : open()"
      :class="{ 'up-side-down': dropdownUpsideDown && opened, 'dropdown-list-opened': opened }">
      <p class="dropdown-component-outside-text" v-if="multiSelect ? getMultiSelectNames() : value">
        {{ errorMessage ? placeHolder + ' - ' + errorMessage : placeHolder }}
      </p>
      <p
        class="dropdown-component-outside-title"
        :class="{ 'normal-color': multiSelect ? getMultiSelectNames() : value }">
        {{
          multiSelect
            ? getMultiSelectNames()
              ? getMultiSelectNames()
              : errorMessage
              ? placeHolder + ' - ' + errorMessage
              : placeHolder
            : value && displaySelected()
            ? displaySelected()
            : errorMessage
            ? placeHolder + ' - ' + errorMessage
            : placeHolder
        }}
      </p>
      <div class="dropdown-arrow-box"></div>
    </div>
    <div
      class="dropdown-component-opened"
      v-if="opened"
      ref="dropdownComponentList"
      :class="{ 'up-side-down': dropdownUpsideDown }">
      <div class="search-box" v-if="searchBox">
        <InputComponent ref="inputComponent" v-model="searchValue" placeHolder="Search" />
      </div>
      <ul>
        <li v-if="!multiSelect && deselectAvailable">
          <input type="radio" :value="null" id="deselect_option" v-model="value" />
          <label for="deselect_option">{{ deselectPlaceHolder }}</label>
        </li>
        <li
          v-for="(option, index) in filteredOptions"
          :key="index"
          @mouseenter="focusedItemIndex = index"
          :class="{
            highlighted: focusedItemIndex === index,
          }">
          <div class="checkbox" v-if="multiSelect">
            <input type="checkbox" :value="option" :id="valueFunction(option) + '_' + index" v-model="value" />
            <label
              :for="valueFunction(option) + '_' + index"
              :title="displayFunction(option)"
              class="body-text radio-label"
              >{{ displayFunction(option) }}</label
            >
          </div>
          <template v-else>
            <input type="radio" :value="option" :id="valueFunction(option) + '_' + index" v-model="value" />
            <label :for="valueFunction(option) + '_' + index" :title="displayFunction(option)">{{
              displayFunction(option)
            }}</label>
          </template>
        </li>
        <li v-if="filteredOptions.length == 0">
          <label>No results found</label>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { withDefaults, onMounted, computed, ref, nextTick, defineEmits, defineProps, onBeforeUnmount } from 'vue';
import InputComponent from '../input-component/InputComponent.vue';

type Option =
  | {
      name: string;
      value: string;
    }
  | unknown;

const emit = defineEmits(['update:modelValue']);

const props = withDefaults(
  defineProps<{
    placeHolder?: string;
    errorMessage?: string;
    modelValue: unknown;
    options: Option[] | null;
    displayFunction?: (option: Option) => string;
    valueFunction?: (option: Option) => string;
    multiSelect?: boolean;
    searchBox?: boolean;
    deselectAvailable?: boolean;
    deselectPlaceHolder?: string;
  }>(),
  {
    displayFunction: (option: any) => {
      return option.name ?? '--';
    },
    valueFunction: (option: any) => {
      return option.value ?? '--';
    },
    placeHolder: 'Please select',
    multiSelect: false,
    searchBox: false,
    deselectAvailable: false,
    deselectPlaceHolder: 'De select',
  }
);

const opened = ref(false);
const dropdownUpsideDown = ref(false);
const searchValue = ref('');
const inputComponent = ref<typeof InputComponent | null>();
const dropdownComponent = ref<HTMLElement | null>();
const dropdownComponentList = ref<HTMLElement | null>();

const value = computed({
  get(): unknown | null {
    if (!props.options) {
      return null;
    }
    if (props.multiSelect) {
      return props.modelValue ?? [];
    }
    for (let i = 0; i < props.options.length; i++) {
      if (props.valueFunction(props.options[i]) === props.modelValue) {
        return props.options[i];
      }
    }

    return null;
  },
  set(val: unknown | null) {
    if (val) {
      if (props.multiSelect) {
        emit('update:modelValue', val);
      } else {
        emit('update:modelValue', props.valueFunction(val));
        close();
      }
    } else if (props.deselectAvailable && !props.multiSelect && val === null) {
      emit('update:modelValue', val);
      close();
    }
  },
});

const filteredOptions = computed(() => {
  if (!props.options) {
    return [];
  }
  if (searchValue.value) {
    return props.options.filter((option) => {
      return props.displayFunction(option).toLowerCase().includes(searchValue.value.toLowerCase());
    });
  }
  return props.options;
});

onMounted(() => {
  checkLength();
  window.addEventListener('resize', calculateDropdownPosition);

  window.addEventListener('scroll', handleScroll, true);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', calculateDropdownPosition);

  window.removeEventListener('scroll', handleScroll, true);
});

function handleScroll(e: Event) {
  const scrolledElement = e.target as HTMLElement;
  if (scrolledElement.contains(dropdownComponent.value as Node)) {
    close();
  }
}

function checkLength() {
  if (props.options && props.options.length == 1) {
    value.value = props.options[0];
  }
}

const typed = ref('');
const timeoutTyped = ref(0);
const focusedItemIndex = ref(-1);

function handleKeyDown(e: KeyboardEvent) {
  if (e.target !== dropdownComponent.value) {
    return;
  }

  if (e.key === 'Escape' || e.key === 'Tab') {
    close();
  } else if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (focusedItemIndex.value + 1 >= filteredOptions.value.length) {
      return;
    }
    focusedItemIndex.value++;

    const focusedItem = dropdownComponentList.value?.querySelectorAll('li')[focusedItemIndex.value];
    focusedItem?.scrollIntoView({ block: 'nearest' });
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (focusedItemIndex.value === -1) {
      focusedItemIndex.value = filteredOptions.value.length - 1;
    } else if (focusedItemIndex.value > 0) {
      focusedItemIndex.value--;
    }

    const focusedItem = dropdownComponentList.value?.querySelectorAll('li')[focusedItemIndex.value];
    focusedItem?.scrollIntoView({ block: 'nearest' });
  } else if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar' || e.key === 'Space') {
    e.preventDefault();
    if (opened.value) {
      if (focusedItemIndex.value >= 0 && filteredOptions.value[focusedItemIndex.value]) {
        if (props.multiSelect && Array.isArray(value.value)) {
          if (value.value.includes(filteredOptions.value[focusedItemIndex.value])) {
            value.value = value.value.filter((item) => item !== filteredOptions.value[focusedItemIndex.value]);
          } else {
            value.value = [...value.value, filteredOptions.value[focusedItemIndex.value]];
          }
        } else {
          value.value = filteredOptions.value[focusedItemIndex.value];
          close();
        }
      }
    } else {
      open();
    }
  } else if (
    (e.keyCode >= 48 && e.keyCode <= 57) ||
    (e.keyCode >= 65 && e.keyCode <= 90) ||
    (e.keyCode >= 96 && e.keyCode <= 105)
  ) {
    e.preventDefault();
    typed.value += e.key;
    const filteredOptions = props.options?.filter((option) => {
      return props.displayFunction(option).toLowerCase().startsWith(typed.value.toLowerCase());
    });
    if (timeoutTyped.value) {
      clearTimeout(timeoutTyped.value);
    }

    timeoutTyped.value = window.setTimeout(() => {
      typed.value = '';
    }, 1000);
    if (filteredOptions && filteredOptions?.length > 0) {
      focusedItemIndex.value = props.options?.indexOf(filteredOptions[0]) ?? -1;
      const focusedItem = dropdownComponentList.value?.querySelectorAll('li')[focusedItemIndex.value];
      focusedItem?.scrollIntoView({ block: 'nearest' });
      setTimeout(() => {
        focusedItemIndex.value = props.options?.indexOf(filteredOptions[0]) ?? -1;
      }, 10);
    }
  }
}

function displaySelected() {
  if (value.value) {
    return props.displayFunction(value.value);
  }
  return props.placeHolder;
}

function open() {
  if (opened.value) {
    return;
  }
  opened.value = true;

  nextTick(() => {
    dropdownComponent.value?.focus();
    calculateDropdownPosition();
    nextTick(() => {
      if (props.options) {
        if (props.multiSelect) {
          for (let i = 0; i < props.options.length; i++) {
            if (Array.isArray(props.modelValue) && props.modelValue.includes(props.options[i])) {
              focusedItemIndex.value = i;
              const focusedItem = dropdownComponentList.value?.querySelectorAll('li')[focusedItemIndex.value];
              focusedItem?.scrollIntoView({ block: 'start' });
              break;
            }
          }
        } else {
          for (let i = 0; i < props.options?.length; i++) {
            if (props.valueFunction(props.options[i]) === props.modelValue) {
              focusedItemIndex.value = i;
              const focusedItem = dropdownComponentList.value?.querySelectorAll('li')[focusedItemIndex.value];
              focusedItem?.scrollIntoView({ block: 'start' });
            }
          }
        }
      }
      if (props.searchBox) {
        inputComponent.value?.focusInput();
      }
    });
  });
}

function close() {
  if (!opened.value) {
    return;
  }
  opened.value = false;
  dropdownUpsideDown.value = false;
  searchValue.value = '';
  focusedItemIndex.value = -1;
}

function calculateDropdownPosition() {
  nextTick(() => {
    const dropdownComponentListPosition = dropdownComponentList.value?.getBoundingClientRect();
    const dropdownPosition = dropdownComponent.value?.getBoundingClientRect();
    const MIN_HEIGHT = 100;
    const MIN_GAP = 50;

    if (!dropdownComponentListPosition || !dropdownPosition) {
      return;
    }

    let parentElement = dropdownComponentList.value?.parentElement;
    let height = 0;
    while (parentElement) {
      if (parentElement === document.body) {
        height = window.innerHeight;
        break;
      }
      if (parentElement.scrollHeight > parentElement.clientHeight) {
        height = parentElement.getBoundingClientRect().bottom;
        break;
      }

      parentElement = parentElement.parentElement;
    }

    const spaceToBottom = height - dropdownPosition.bottom;

    const spaceRequired = dropdownComponentListPosition.height;
    let top = dropdownPosition.bottom + 'px';
    const left = dropdownPosition.left + 'px';
    let bottom = 'auto';
    let maxHeight = Math.max(spaceToBottom, MIN_HEIGHT) - MIN_GAP;

    if (Math.min(spaceRequired, 250) <= spaceToBottom) {
      dropdownUpsideDown.value = false;
    } else {
      dropdownUpsideDown.value = true;
      top = 'auto';
      const spaceToBottom = window.innerHeight - dropdownPosition.bottom;
      bottom = spaceToBottom + dropdownPosition.height + 'px';
      maxHeight = Math.max(dropdownPosition.top, MIN_HEIGHT) - MIN_GAP;
    }

    dropdownComponentList.value?.setAttribute(
      'style',
      `top: ${top};
       left: ${left};
       bottom: ${bottom};
       width: ${dropdownPosition.width}px;
       max-height: ${maxHeight}px;
      `
    );
  });
}

function getMultiSelectNames() {
  const selectedValue = value.value as unknown[];
  if (props.multiSelect && selectedValue && selectedValue?.length > 0) {
    let names = '';
    for (let i = 0; i < selectedValue?.length; i++) {
      if (!props.options) return null;
      for (let j = 0; j < props.options.length; j++) {
        if (props.options[j] === selectedValue[i]) {
          names += props.displayFunction(props.options[j]) + ', ';
        }
      }
      names = names.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }
    names = names.slice(0, -2);
    if (selectedValue?.length > 3) {
      names = selectedValue?.length + ' ' + props.placeHolder + 's' + ' selected ';
    }
    return names;
  }
  return null;
}

function closeViaBlur(e: FocusEvent) {
  if (
    !dropdownComponent.value?.contains(e.relatedTarget as Node) &&
    !dropdownComponentList.value?.contains(e.relatedTarget as Node)
  ) {
    close();
  }
}
</script>

<script lang="ts">
import styles from './_dropdownComponent.scss?inline';

function injectCss(css: string) {
  const style = document.createElement('style');
  style.setAttribute('type', 'text/css');
  style.setAttribute('id', 'styles-dropdown-component');
  document.head.firstChild
    ? document.head.insertBefore(style, document.head.firstChild)
    : document.head.appendChild(style);
  style.appendChild(document.createTextNode(css));
  return css;
}

injectCss(styles);
</script>
