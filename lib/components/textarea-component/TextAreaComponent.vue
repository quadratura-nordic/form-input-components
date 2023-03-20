<template>
  <div
    class="textarea-component"
    :class="{
      'read-only-textarea-disabled-movement': readOnly && !modelValue,
      'resize-textarea': shouldResize,
    }"
  >
    <textarea
      placeholder=" "
      :id="'textarea' + id"
      v-model="val"
      @input="resize()"
      ref="textAreaComponent"
      :readonly="readOnly"
    />
    <label :for="'textarea' + id"
      >{{ placeHolder }} <template v-if="errorMessage">- {{ errorMessage }}</template></label
    >
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, ref, computed, onMounted } from "vue";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps<{
  placeHolder?: string;
  errorMessage?: string;
  modelValue?: string | string[];
  shouldResize?: boolean;
  readOnly?: boolean;
}>();
const id = Math.random().toString(36).slice(2);
const textAreaComponent = ref<HTMLElement | null>(null);

const val = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit("update:modelValue", val);
  },
});

onMounted(() => {
  resize();
});

function resize(): void {
  if (props.shouldResize) {
    if (textAreaComponent.value) {
      textAreaComponent.value.style.height = "42px";
      textAreaComponent.value.style.height = textAreaComponent.value.scrollHeight + 2 + "px";
      console.log(textAreaComponent.value.scrollHeight);
      if (textAreaComponent.value.scrollHeight > textAreaComponent.value.offsetHeight) {
        textAreaComponent.value.style.height = textAreaComponent.value.scrollHeight + 2 + "px";
      }
      if (props.modelValue === "") {
        textAreaComponent.value.style.height = "42px";
      }
    }
  }
}
</script>

<script lang="ts">
import styles from "./_textAreaComponent.scss?inline";

function injectCss(css: string) {
  const style = document.createElement("style");
  style.setAttribute("type", "text/css");
  style.setAttribute("id", "styles-text-area-component");
  document.head.firstChild
    ? document.head.insertBefore(style, document.head.firstChild)
    : document.head.appendChild(style);
  style.appendChild(document.createTextNode(css));
  return css;
}

injectCss(styles);
</script>
