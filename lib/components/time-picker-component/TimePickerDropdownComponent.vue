<template>
  <div class="time-picker-dropdown-component">
    <p class="time-picker-dropdown-component-title">{{ placeHolder }}</p>
    <ul>
      <li
        v-for="(option, index) in options"
        :key="index"
        :class="{ 'picked-value': valueFunction(option) === modelValue }"
      >
        <input type="radio" :value="option" :id="valueFunction(option) + '_' + index" v-model="value" />
        <label :for="valueFunction(option) + '_' + index" :title="displayFunction(option)">{{
          displayFunction(option)
        }}</label>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { defineEmits, defineProps, withDefaults, onMounted, computed } from "vue";

const emit = defineEmits(["update:modelValue"]);
type Option =
  | {
      name: string;
      value: string;
    }
  | unknown;
const props = withDefaults(
  defineProps<{
    placeHolder?: string;
    modelValue: unknown;
    options: Option[] | null;
    displayFunction?: (option: Option) => string;
    valueFunction?: (option: Option) => string;
  }>(),
  {
    placeHolder: "Please select",
    displayFunction: (option: any) => {
      return option.name ?? "--";
    },
    valueFunction: (option: any) => {
      return option.value ?? "--";
    },
  }
);

const value = computed({
  get(): unknown | null {
    if (!props.options) {
      return null;
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
      emit("update:modelValue", props.valueFunction(val));
    }
  },
});

onMounted(() => {
  checkLength();
});

function checkLength() {
  if (props.options && props.options.length == 1) {
    value.value = props.options[0];
  }
}
</script>

<style lang="scss">
.time-picker-dropdown-component {
  display: flex;
  flex-direction: column;
  background-color: var(--white-color);
  z-index: 3;
  overflow: hidden;
  width: 100%;
  height: auto;
  transition: all 0.2s ease-in-out;

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  --error-color: #ff6565;
  --primary-color: #1a2c51;
  --secondary-color: #8d96a8;
  --hover-color: #223a6b;
  --black-color: #000;
  --white-color: #fff;

  input[type="checkbox"],
  input[type="radio"] {
    position: absolute;
    opacity: 0;
    left: -99999px;
  }

  &.is-invalid {
    .time-picker-dropdown-component-title {
      background-color: var(--error-color);
    }
    ul {
      border: 1px solid var(--error-color);
    }
  }

  .time-picker-dropdown-component-title {
    position: sticky;
    top: 0;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--secondary-color);
    color: var(--white-color);
    font-size: 15px;
    line-height: 100%;
    z-index: 3;
    border: 1px solid transparent;
  }

  ul {
    border: 1px solid var(--secondary-color);
    border-radius: 0 0 8px 8px;
    list-style: none;
    margin: 0;
    padding: 0;
    max-height: 40vh;
    overflow-y: auto;
    padding: 0 10px;

    li {
      height: 40px;
      border-bottom: 1px solid var(--secondary-color);
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;

      &:last-child {
        border-bottom: none;
      }

      &.picked-value {
        background-color: var(--primary-color);
        label {
          color: var(--white-color);
        }
      }

      label {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 10px;
        font-size: 15px;
        line-height: 22px;
        color: var(--black-color);
        width: 100%;
        height: 100%;
        z-index: 1;
      }
      &:hover {
        &:not(.picked-value) {
          background-color: var(--secondary-color);
          label {
            cursor: pointer;
            color: var(--white-color);
          }
        }
      }
    }
  }
}
</style>
