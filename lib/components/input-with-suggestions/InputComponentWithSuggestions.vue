<template>
  <div
    class="input-with-suggestions-component"
    v-click-outside="close"
    :class="{
      'input-with-suggestions-component-opened': opened,
      'input-with-suggestions-component-upside-down': upSideDown,
    }"
  >
    <InputComponent :placeHolder="placeHolder" v-model="inputValue" :error-message="errorMessage" @click="open" />

    <ul class="input-with-suggestions-component-list" v-if="opened" ref="dropdownComponent">
      <li v-for="(option, index) in filteredOptions" :key="index">
        <input type="radio" :value="option" :id="index + ''" v-model="value" />
        <label :for="index + ''" :title="option + ''">{{ option }}</label>
      </li>
      <li v-if="filteredOptions.length == 0">
        <label>No results found</label>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import InputComponent from "../input-component/InputComponent.vue";
import { defineEmits, defineProps, withDefaults, computed, ref, nextTick } from "vue";

const emit = defineEmits(["update:modelValue"]);

const props = withDefaults(
  defineProps<{
    placeHolder?: string;
    errorMessage?: string;
    modelValue: unknown;
    suggestions: unknown[] | null;
    valueKey?: string;
    displayKey?: string;
  }>(),
  {
    placeHolder: "Please select",
  }
);

const opened = ref(false);
const upSideDown = ref(false);
const dropdownComponent = ref<HTMLElement | null>();

const value = computed({
  get(): any {
    return inputValue.value;
  },
  set(val) {
    inputValue.value = val;
  },
});

let inputValue = computed({
  get(): any {
    return props.modelValue;
  },
  set(val) {
    emit("update:modelValue", val);
  },
});

const filteredOptions = computed(() => {
  if (!props.suggestions) {
    return [];
  }
  if (inputValue.value) {
    return props.suggestions.filter((suggestion) => {
      if (typeof suggestion === "string") {
        return suggestion.toLowerCase().includes(inputValue.value.toLowerCase());
      }
    });
  }
  return props.suggestions;
});

function open() {
  opened.value = true;
  heightCalculation();
}
function close() {
  opened.value = false;
  upSideDown.value = false;
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
</script>

<style lang="scss">
.input-with-suggestions-component {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  position: relative;

  --error-color: #ff6565;
  --primary-color: #1a2c51;
  --secondary-color: #8d96a8;
  --hover-color: #223a6b;
  --black-color: #000;
  --white-color: #fff;

  * {
    box-sizing: border-box;
  }
  input[type="checkbox"],
  input[type="radio"] {
    position: absolute;
    opacity: 0;
    left: -99999px;
  }
  &.is-invalid {
    .input-with-suggestions-component-list {
      border: 0.1rem solid var(--error-color);
      border-top: 0 none;
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

  &.input-with-suggestions-component-opened {
    .input-component {
      input {
        border-radius: 8px 8px 0 0;
      }
    }
  }
  &.input-with-suggestions-component-upside-down {
    .input-with-suggestions-component-list {
      top: auto;
      bottom: 40px;
      flex-direction: column-reverse;
      border-radius: 8px 8px 0 0;
      border-top: 1px solid var(--secondary-color);
      border-bottom: none;
      li {
        border-bottom: none;
        border-top: 1px solid var(--secondary-color);

        &:last-child {
          border-top: none;
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

  .input-with-suggestions-component-list {
    display: flex;
    flex-direction: column;
    background-color: var(--white-color);
    border-radius: 0 0 8px 8px;
    height: auto;
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    border: 1px solid var(--secondary-color);
    border-top: none;
    z-index: 6;
    overflow: hidden;
    list-style: none;
    margin: 0;
    overflow-y: auto;
    padding: 0 10px;
    max-height: 40vh;

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

      label {
        display: inline-block;
        font-weight: 400;
        font-size: 15px;
        line-height: 22px;
        color: var(--black-color);
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 10px 0;
        height: 100%;
        &:hover {
          cursor: pointer;
          color: var(--hover-color);
        }
      }
    }
  }
}
</style>
