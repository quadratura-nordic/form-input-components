<template>
  <div class="dropdown-component">
    <div
      class="dropdown-component-outside"
      @click="open"
      :class="{ 'up-side-down': upSideDown && opened, 'dropdown-list-opened': opened }"
    >
      <p class="dropdown-component-outside-text" v-if="multiSelect ? getMultiSelectNames() : value">
        {{ errorMessage ? placeHolder + " - " + errorMessage : placeHolder }}
      </p>
      <p
        class="dropdown-component-outside-title"
        :class="{ 'normal-color': multiSelect ? getMultiSelectNames() : value }"
      >
        {{
          multiSelect
            ? getMultiSelectNames()
              ? getMultiSelectNames()
              : errorMessage
              ? placeHolder + " - " + errorMessage
              : placeHolder
            : value && displaySelected()
            ? displaySelected()
            : errorMessage
            ? placeHolder + " - " + errorMessage
            : placeHolder
        }}
      </p>
      <div class="dropdown-arrow-box"></div>
    </div>
    <div
      class="dropdown-component-opened"
      v-if="opened"
      v-click-outside="close"
      ref="dropdownComponent"
      :class="{ 'up-side-down': upSideDown }"
    >
      <div class="search-box" v-if="searchBox">
        <InputComponent ref="inputComponent" v-model="searchValue" placeHolder="Search" />
      </div>
      <ul>
        <li v-if="!multiSelect && deselectAvailable">
          <input type="radio" :value="null" id="deselect_option" v-model="value" />
          <label for="deselect_option">{{ deselectPlaceHolder }}</label>
        </li>
        <li v-for="(option, index) in filteredOptions" :key="index">
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
import { withDefaults, onMounted, computed, ref, nextTick, defineEmits, defineProps } from "vue";
import InputComponent from "../input-component/InputComponent.vue";

type Option =
  | {
      name: string;
      value: string;
    }
  | unknown;

const emit = defineEmits(["update:modelValue"]);

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
      return option.name ?? "--";
    },
    valueFunction: (option: any) => {
      return option.value ?? "--";
    },
    placeHolder: "Please select",
    multiSelect: false,
    searchBox: false,
    deselectAvailable: false,
    deselectPlaceHolder: "De select",
  }
);

const opened = ref(false);
const upSideDown = ref(false);
const dropdownComponent = ref<HTMLElement | null>();
const searchValue = ref("");
const inputComponent = ref<typeof InputComponent | null>();

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
        emit("update:modelValue", val);
      } else {
        emit("update:modelValue", props.valueFunction(val));
        close();
      }
    } else if (props.deselectAvailable && !props.multiSelect && val === null) {
      emit("update:modelValue", val);
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
});

function checkLength() {
  if (props.options && props.options.length == 1) {
    value.value = props.options[0];
  }
}

function displaySelected() {
  if (value.value) {
    return props.displayFunction(value.value);
  }
  return props.placeHolder;
}

function open() {
  opened.value = true;
  heightCalculation();
  if (props.searchBox) {
    nextTick(() => {
      inputComponent.value?.focusInput();
    });
  }
}
function close() {
  opened.value = false;
  upSideDown.value = false;
  searchValue.value = "";
}
function heightCalculation() {
  nextTick(() => {
    const dropdown = dropdownComponent.value;
    if (!dropdown) {
      return;
    }
    const dropdownHeight = dropdown.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const diffrence = windowHeight - dropdownHeight.bottom;

    if (diffrence > 0) {
      upSideDown.value = false;
    } else {
      upSideDown.value = true;
    }
  });
}

function getMultiSelectNames() {
  const selectedValue = value.value as unknown[];
  if (props.multiSelect && selectedValue && selectedValue?.length > 0) {
    let names = "";
    for (let i = 0; i < selectedValue?.length; i++) {
      if (!props.options) return null;
      for (let j = 0; j < props.options.length; j++) {
        if (props.options[j] === selectedValue[i]) {
          names += props.displayFunction(props.options[j]) + ", ";
        }
      }
      names = names.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }
    names = names.slice(0, -2);
    if (selectedValue?.length > 3) {
      names = selectedValue?.length + " " + props.placeHolder + "s" + " selected ";
    }
    return names;
  }
  return null;
}
</script>

<script lang="ts">
import styles from "./_dropdownComponent.scss?inline";

function injectCss(css: string) {
  const style = document.createElement("style");
  style.setAttribute("type", "text/css");
  style.setAttribute("id", "styles-dropdown-component");
  document.head.firstChild
    ? document.head.insertBefore(style, document.head.firstChild)
    : document.head.appendChild(style);
  style.appendChild(document.createTextNode(css));
  return css;
}

injectCss(styles);
</script>
