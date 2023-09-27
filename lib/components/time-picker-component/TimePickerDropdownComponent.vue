<template>
  <div class="time-picker-dropdown-component">
    <p class="time-picker-dropdown-component-title">{{ placeHolder }}</p>
    <ul>
      <li
        v-for="(option, index) in options"
        :key="index"
        :class="{ 'picked-value': valueFunction(option) === modelValue }">
        <input type="radio" :value="option" :id="valueFunction(option) + '_' + index + placeHolder" v-model="value" />
        <label :for="valueFunction(option) + '_' + index + placeHolder" :title="displayFunction(option)">{{
          displayFunction(option)
        }}</label>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { defineEmits, defineProps, withDefaults, onMounted, computed } from 'vue';

const emit = defineEmits(['update:modelValue']);
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
    placeHolder: 'Please select',
    displayFunction: (option: any) => {
      return option.name ?? '--';
    },
    valueFunction: (option: any) => {
      return option.value ?? '--';
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
      emit('update:modelValue', props.valueFunction(val));
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
