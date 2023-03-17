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

<style lang="scss">
.textarea-component {
  display: flex;
  flex-flow: column-reverse;
  width: 100%;
  align-items: flex-start;
  transition: all 0.2s ease-in-out;
  height: 100%;
  position: relative;

  --error-color: #ff6565;
  --primary-color: #1a2c51;
  --secondary-color: #8d96a8;
  --hover-color: #223a6b;
  --black-color: #000;
  --white-color: #fff;

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  &.read-only-textarea-disabled-movement {
    textarea:not(:placeholder-shown) + label,
    textarea:focus + label {
      color: var(--secondary-color);
      font-size: 15px;
      transform: translate(10px, 4px) scale(1);
    }
  }

  &.resize-textarea {
    height: auto;
  }

  &.is-invalid {
    textarea {
      border: 1px solid var(--error-color);

      &:focus {
        border: 1px solid var(--error-color);
      }
    }
    label {
      color: var(--error-color);
    }
    textarea:focus + label {
      color: var(--error-color);
    }
    textarea:not(:placeholder-shown) + label {
      color: var(--error-color);
    }
  }

  textarea {
    width: 100%;
    height: 42px;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: var(--black-color);
    border: 1px solid var(--secondary-color);
    border-radius: 8px;
    padding: 9px 15px;
    background: var(--white-color);
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    resize: none;
    // overflow: hidden;
    &:focus,
    &:hover {
      cursor: pointer;
      outline: none;
    }
    &:hover {
      border: 0.01rem solid var(--hover-color);
    }
    &:focus {
      border: 0.01rem solid var(--primary-color);
    }
  }

  label {
    display: inline-block;
    flex-shrink: 1;
    flex-grow: 0;
    font-weight: 400;
    font-size: 15px;
    line-height: 100%;
    color: var(--secondary-color);
    background-color: var(--white-color);
    padding: 5px;
    position: absolute;
    top: 5px;
    // height: 0;
    &:hover {
      cursor: pointer;
    }
  }
  textarea:placeholder-shown + label {
    transform: translate(10px, 4px) scale(1);
  }
  ::-webkit-input-placeholder {
    opacity: 0;
    transition: inherit;
  }
  textarea:not(:placeholder-shown) + label {
    font-weight: 400;
    font-size: 12px;
    color: var(--black-color);
  }

  textarea:not(:placeholder-shown) + label,
  textarea:focus + label {
    color: var(--black-color);
    font-size: 12px;
    transform: translate(10px, -15px) scale(1);
  }
  label,
  textarea {
    transition: all 0.2s;
    touch-action: manipulation;
  }
}
</style>
