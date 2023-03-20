<template>
  <div class="checkbox-slider">
    <label class="checkbox-switch" :for="'switch_' + id">
      <input type="checkbox" v-model="val" :value="valueKey" :id="'switch_' + id" />
      <span class="slider"></span>
    </label>
    <label :for="'switch_' + id" class="checkbox-slider-label"
      >{{ placeHolder }} <template v-if="errorMessage">- {{ errorMessage }}</template></label
    >
  </div>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps, withDefaults } from "vue";

const emit = defineEmits(["update:modelValue"]);

const props = withDefaults(
  defineProps<{
    valueKey: unknown;
    placeHolder?: string;
    errorMessage?: string;
    modelValue: unknown | unknown[];
  }>(),
  {
    placeHolder: "Checkbox",
  }
);
const id: string = Math.random().toString(36).slice(2);

const val = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit("update:modelValue", val);
  },
});
</script>

<script lang="ts">
import styles from "./_checkboxSliderComponent.scss?inline";

function injectCss(css: string) {
  const style = document.createElement("style");
  style.setAttribute("type", "text/css");
  style.setAttribute("id", "styles-checkbox-slider-component");
  document.head.firstChild
    ? document.head.insertBefore(style, document.head.firstChild)
    : document.head.appendChild(style);
  style.appendChild(document.createTextNode(css));
  return css;
}

injectCss(styles);
</script>
