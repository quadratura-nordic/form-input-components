<template>
  <div
    class="input-component"
    :class="{
      'read-only-input-disabled-movement': readOnly && !modelValue,
    }"
  >
    <input
      :type="inputType"
      placeholder=" "
      :id="'input' + id"
      v-model="val"
      :readonly="readOnly"
      ref="inputComponent"
    />
    <label :for="'input' + id"
      >{{ placeHolder }} <template v-if="errorMessage">- {{ errorMessage }}</template></label
    >
    <div class="clear-input" v-if="!readOnly" :class="{ show: modelValue }" @click="clearModelValue"></div>
  </div>
</template>
<script setup lang="ts">
import { computed, defineEmits, defineProps, withDefaults, ref, defineExpose } from "vue";

const emit = defineEmits(["update:modelValue"]);
const inputComponent = ref<HTMLInputElement | null>(null);

const props = withDefaults(
  defineProps<{
    inputType?: string;
    placeHolder?: string;
    errorMessage?: string;
    modelValue?: unknown;
    readOnly?: boolean;
  }>(),
  {
    inputType: "text",
    readOnly: false,
  }
);

const id = Math.random().toString(36).slice(2);

const val = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit("update:modelValue", val);
  },
});

function clearModelValue() {
  val.value = "";
}

function focusInput() {
  inputComponent.value?.focus();
}
defineExpose({ focusInput });
</script>

<script lang="ts">
import styles from "./_inputComponent.scss?inline";

function injectCss(css: string) {
  const style = document.createElement("style");
  style.setAttribute("type", "text/css");
  style.setAttribute("id", "styles-input-component");
  document.head.firstChild
    ? document.head.insertBefore(style, document.head.firstChild)
    : document.head.appendChild(style);
  style.appendChild(document.createTextNode(css));
  return css;
}

injectCss(styles);
</script>
