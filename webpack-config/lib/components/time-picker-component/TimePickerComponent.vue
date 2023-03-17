<template>
  <div
    class="time-picker-component"
    :class="{
      'time-picker-component-opened': showDropdown,
      'time-picker-component-up-side-down': upSideDown,
    }"
  >
    <InputComponent
      :model-value="displayTime"
      @click="openDropdown"
      :read-only="true"
      :place-holder="errorMessage ? placeHolder + ' - ' + errorMessage : placeHolder"
    />
    <div
      class="time-picker-dropdowns"
      ref="timePickerComponentDropdowns"
      v-click-outside="closeDropdown"
      v-if="showDropdown"
    >
      <TimePickerDropdownComponent v-model="selectedHour" :options="hours" :place-holder="'HH'" />
      <TimePickerDropdownComponent v-model="selectedMinute" :options="minutes" :place-holder="'MM'" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineEmits, defineProps, withDefaults, nextTick, computed, ref } from "vue";

import InputComponent from "../input-component/InputComponent.vue";
import TimePickerDropdownComponent from "./TimePickerDropdownComponent.vue";

const emit = defineEmits(["update:modelValue"]);

const props = withDefaults(
  defineProps<{
    modelValue?: { hour: number; minute: number } | null;
    minuteInterval: number;
    timeTo: number;
    timeFrom: number;
    errorMessage?: string;
    placeHolder?: string;
  }>(),
  {
    timeTo: 24,
    timeFrom: 0,
    placeHolder: "Please select",
  }
);

const showDropdown = ref(false);
const timePickerComponentDropdowns = ref<HTMLElement | null>();
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
    return props.modelValue?.hour ?? "--";
  },
  set(value) {
    emit("update:modelValue", {
      hour: value,
      minute: props.modelValue?.minute,
    });
  },
});

const selectedMinute = computed({
  get: () => props.modelValue?.minute ?? "--",
  set: (value) => {
    emit("update:modelValue", {
      hour: props.modelValue?.hour,
      minute: value,
    });
  },
});

const displayTime = computed(() => {
  return `${selectedHour.value}:${selectedMinute.value}`;
});

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
}
</script>

<style lang="scss">
.time-picker-component {
  display: flex;
  flex-direction: column;
  position: relative;
  .time-picker-dropdowns {
    display: flex;
    position: absolute;
    top: 40px;
    width: 100%;
    .time-picker-dropdown-component {
      width: 50%;
      &:first-child {
        ul {
          border-radius: 0 0 0 8px;
        }
      }
      &:last-child {
        ul {
          border-radius: 0 0 8px 0;
        }
      }
    }
  }
  &.time-picker-component-opened {
    .input-component {
      input {
        border-radius: 8px 8px 0 0;
      }
    }
  }
  &.time-picker-component-up-side-down {
    .time-picker-dropdowns {
      top: auto;
      bottom: 40px;
      .time-picker-dropdown-component {
        &:first-child {
          .time-picker-dropdown-component-title {
            border-radius: 8px 0 0 0;
          }
          ul {
            border-radius: 0 0 0 0;
          }
        }
        &:last-child {
          .time-picker-dropdown-component-title {
            border-radius: 0 8px 0 0;
          }
          ul {
            border-radius: 0 0 0 0;
          }
        }
      }
    }
    .input-component {
      input {
        border-radius: 0 0 8px 8px;
      }
      input:not(:placeholder-shown) + label,
      input:focus + label {
        transform: translate(10px, 25px) scale(1);
      }
    }
  }

  &.is-invalid {
    .time-picker-dropdowns {
      .time-picker-dropdown-component {
        &:first-child {
          .time-picker-dropdown-component-title {
            border-left: 1px solid var(--error-color);
          }
          ul {
            border-left: 1px solid var(--error-color);
            border-bottom: 1px solid var(--error-color);
          }
        }
        &:last-child {
          .time-picker-dropdown-component-title {
            border-right: 1px solid var(--error-color);
          }
          ul {
            border-right: 1px solid var(--error-color);
            border-bottom: 1px solid var(--error-color);
          }
        }
      }
    }
    .input-component {
      input {
        border: 1px solid var(--error-color);

        &:focus {
          border: 1px solid var(--error-color);
        }
      }
      label {
        color: var(--error-color);
      }
      input:focus + label {
        color: var(--error-color);
      }
      input:not(:placeholder-shown) + label {
        color: var(--error-color);
      }
    }
  }
}
</style>
