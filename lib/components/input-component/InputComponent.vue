<template>
  <div
    class="input-component"
    :class="{
      'read-only-input-disabled-movement': readOnly && !modelValue,
    }"
  >
    <input :type="inputType" placeholder=" " :id="'input' + id" v-model="val" :readonly="readOnly" />
    <label :for="'input' + id"
      >{{ placeHolder }} <template v-if="errorMessage">- {{ errorMessage }}</template></label
    >
    <div class="clear-input" v-if="!readOnly" :class="{ show: modelValue }" @click="clearModelValue"></div>
  </div>
</template>
<script setup lang="ts">
import { computed, defineEmits, defineProps, withDefaults } from "vue";

const emit = defineEmits(["update:modelValue"]);

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
</script>

<style lang="scss">
.input-component {
  display: flex;
  flex-flow: column-reverse;
  width: 100%;
  align-items: flex-start;
  transition: all 0.2s ease-in-out;
  position: relative;
  height: 40px;

  --error-color: #ff6565;
  --primary-color: #1a2c51;
  --secondary-color: #8d96a8;
  --hover-color: #223a6b;
  --black-color: #000;
  --white-color: #fff;

  & > * {
    box-sizing: border-box;
  }

  //   &.price-input {
  //     .clear-input {
  //       display: none;
  //     }
  //     &::after {
  //       content: "SEK";
  //       position: absolute;
  //       right: 15px;
  //       top: 50%;
  //       transform: translateY(-50%);
  //       color: var(--secondary-color);
  //       font-weight: 400;
  //       font-size: 15px;
  //       line-height: 15px;
  //     }
  //   }

  &.read-only-input-disabled-movement {
    input:not(:placeholder-shown) + label,
    input:focus + label {
      color: var(--secondary-color);
      font-size: 15px;
      transform: translate(10px, 2.5px) scale(1);
    }
  }

  &.is-invalid {
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
  .clear-input {
    opacity: 0;
    position: absolute;
    right: 0;
    width: 40px;
    height: calc(100% - 1px);
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    &.show {
      opacity: 1;
      cursor: pointer;
      background-color: transparent;
      animation: fadeIn 0.2s ease-in-out;
      z-index: 2;

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      &:before,
      &::after {
        position: absolute;
        content: "";
        width: 50%;
        height: 1px;
        background-color: var(--black-color);
      }

      &::before {
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(-45deg);
      }
      &:hover {
        &:before,
        &::after {
          background-color: var(--hover-color);
        }
      }
    }
  }

  input {
    width: 100%;
    height: 100%;
    border: 1px solid var(--secondary-color);
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border-radius: 8px;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: var(--black-color);
    padding: 10px 15px;
    padding-right: 40px;
    background-color: transparent;

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

    &:read-only {
      padding-right: 0;
    }
  }

  label {
    font-weight: 400;
    font-size: 15px;
    line-height: 100%;
    display: inline-block;
    flex-shrink: 1;
    flex-grow: 0;
    color: var(--secondary-color);
    background-color: var(--white-color);
    padding: 5px;
    position: absolute;
    top: 5px;
    &:hover {
      cursor: pointer;
    }
  }

  input:placeholder-shown + label {
    transform: translate(10px, 2.5px) scale(1);
  }

  input:focus + label {
    font-weight: 400;
    font-size: 12px;
    color: var(--black-color);
  }

  ::-webkit-input-placeholder {
    opacity: 0;
    transition: inherit;
  }
  input:not(:placeholder-shown) + label {
    font-weight: 400;
    font-size: 12px;
    color: var(--black-color);
  }

  input:not(:placeholder-shown) + label,
  input:focus + label {
    color: var(--black-color);
    font-size: 12px;
    transform: translate(10px, -15px) scale(1);
  }
  label,
  input {
    transition: all 0.2s;
    touch-action: manipulation;
  }

  &.input-component-border-bottom {
    &.is-invalid {
      input {
        border: 0;
        border-bottom: 1px solid var(--error-color);
        &:focus {
          border: 0;
          border-bottom: 1px solid var(--error-color);
        }
      }
    }
    &.read-only-input-disabled-movement {
      input:not(:placeholder-shown) + label,
      input:focus + label {
        transform: translate(-5px, 8px) scale(1);
      }
    }
    input {
      border: 0;
      border-bottom: 0.1rem solid var(--secondary-color);
      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;
      border-radius: 0;
      padding: 10px 40px 5px 10px;

      &:focus,
      &:hover {
        cursor: pointer;
        outline: none;
      }

      &:hover {
        border-bottom: 0.01rem solid var(--hover-color);
      }
      &:focus {
        border-bottom: 0.01rem solid var(--primary-color);
      }
    }

    input:placeholder-shown + label {
      transform: translate(-5px, 8px) scale(1);
    }

    input:not(:placeholder-shown) + label,
    input:focus + label {
      transform: translate(-5px, -15px) scale(1);
    }
  }
}
</style>
