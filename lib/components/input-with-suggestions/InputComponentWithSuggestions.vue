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
  get() {
    return inputValue.value;
  },
  set(val) {
    inputValue.value = val;
    close();
  },
});

let inputValue = computed({
  get() {
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
        if (inputValue.value && typeof inputValue.value === "string") {
          return suggestion.toLowerCase().includes(inputValue.value.toLowerCase());
        }
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

<script lang="ts">
import styles from "./_inputComponentWithSuggestions.scss?inline";

function injectCss(css: string) {
  const style = document.createElement("style");
  style.setAttribute("type", "text/css");
  style.setAttribute("id", "styles-input-component-with-suggestions");
  document.head.firstChild
    ? document.head.insertBefore(style, document.head.firstChild)
    : document.head.appendChild(style);
  style.appendChild(document.createTextNode(css));
  return css;
}

injectCss(styles);
</script>
