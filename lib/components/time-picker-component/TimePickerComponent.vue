<template>
  <div
    class="time-picker-component"
    :class="{
      'time-picker-component-opened': showDropdown,
      'time-picker-component-up-side-down': upSideDown,
    }"
    ref="timePicker">
    <InputComponent
      :model-value="displayTime"
      @click="openDropdown"
      :read-only="true"
      :place-holder="errorMessage ? placeHolder + ' - ' + errorMessage : placeHolder" />
    <div
      class="time-picker-dropdowns"
      ref="timePickerComponentDropdowns"
      v-click-outside="closeDropdown"
      v-if="showDropdown">
      <TimePickerDropdownComponent v-model="selectedHour" :options="hours" :place-holder="'HH'" />
      <TimePickerDropdownComponent v-model="selectedMinute" :options="minutes" :place-holder="'MM'" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineEmits, onMounted, onBeforeUnmount, defineProps, withDefaults, nextTick, computed, ref } from 'vue';

import InputComponent from '../input-component/InputComponent.vue';
import TimePickerDropdownComponent from './TimePickerDropdownComponent.vue';

const emit = defineEmits(['update:modelValue']);

const props = withDefaults(
  defineProps<{
    modelValue: { hour: number; minute: number } | null;
    minuteInterval?: number;
    timeTo?: number;
    timeFrom?: number;
    errorMessage?: string;
    placeHolder?: string;
  }>(),
  {
    timeTo: 24,
    timeFrom: 0,
    placeHolder: 'Please select',
  }
);

const showDropdown = ref(false);
const timePickerComponentDropdowns = ref<HTMLElement | null>();
const timePicker = ref<HTMLElement | null>();
const upSideDown = ref(false);

const hours = computed(() => {
  const hoursArray = [];
  for (let i = props.timeFrom; i < props.timeTo; i++) {
    hoursArray.push({ value: formatValue(i), name: formatValue(i) });
  }
  return hoursArray;
});

const minutes = computed(() => {
  const minutesArray = [];
  let interval = props.minuteInterval;
  if (interval === 0) {
    interval = 60;
  } else if (!interval) {
    interval = 1;
  }
  for (let i = 0; i < 60; i += interval) {
    minutesArray.push({ value: formatValue(i), name: formatValue(i) });
  }
  return minutesArray;
});

const selectedHour = computed({
  get() {
    return props.modelValue?.hour ?? '--';
  },
  set(value) {
    emit('update:modelValue', {
      hour: value,
      minute: props.modelValue?.minute ?? 0,
    });
  },
});

const selectedMinute = computed({
  get: () => props.modelValue?.minute ?? '--',
  set: (value) => {
    emit('update:modelValue', {
      hour: props.modelValue?.hour ?? 0,
      minute: value,
    });
  },
});

const displayTime = computed(() => {
  return `${selectedHour.value}:${selectedMinute.value}`;
});

onMounted(() => {
  window.addEventListener('resize', heightCalculation);

  window.addEventListener('scroll', handleScroll, true);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', heightCalculation);

  window.removeEventListener('scroll', handleScroll, true);
});

function handleScroll(e: Event) {
  const scrolledElement = e.target as HTMLElement;
  if (scrolledElement.contains(timePicker.value as Node)) {
    closeDropdown();
  }
}

function formatValue(i: number) {
  return i < 10 ? `0${i}` : String(i);
}

function openDropdown() {
  showDropdown.value = true;
  heightCalculation();
}

function closeDropdown() {
  showDropdown.value = false;
  upSideDown.value = false;
}
function heightCalculation() {
  nextTick(() => {
    const dropdown = timePickerComponentDropdowns.value;
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

  nextTick(() => {
    const dropdownComponentListPosition = timePickerComponentDropdowns.value?.getBoundingClientRect();
    const dropdownPosition = timePicker.value?.getBoundingClientRect();
    const MIN_HEIGHT = 100;
    const MIN_GAP = 50;

    if (!dropdownComponentListPosition || !dropdownPosition) {
      return;
    }

    let parentElement = timePickerComponentDropdowns.value?.parentElement;
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
      upSideDown.value = false;
    } else {
      upSideDown.value = true;
      top = 'auto';
      const spaceToBottom = window.innerHeight - dropdownPosition.bottom;
      bottom = spaceToBottom + dropdownPosition.height + 'px';
      maxHeight = Math.max(dropdownPosition.top, MIN_HEIGHT) - MIN_GAP;
    }

    timePickerComponentDropdowns.value?.setAttribute(
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
</script>

<script lang="ts">
import styles from './_timePickerComponent.scss?inline';

function injectCss(css: string) {
  const style = document.createElement('style');
  style.setAttribute('type', 'text/css');
  style.setAttribute('id', 'styles-time-picker-component');
  document.head.firstChild
    ? document.head.insertBefore(style, document.head.firstChild)
    : document.head.appendChild(style);
  style.appendChild(document.createTextNode(css));
  return css;
}

injectCss(styles);
</script>
