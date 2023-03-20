<template>
  <div class="date-input-component" ref="parentComponent">
    <p class="date-input-component-title">
      {{ placeHolder }} <template v-if="errorMessage">- {{ errorMessage }}</template>
    </p>
    <div class="date-input-components">
      <InputComponent :input-type="'number'" v-model="day" :place-holder="'D'" />
      <InputComponent :input-type="'number'" ref="monthRef" v-model="month" :place-holder="'M'" />
      <InputComponent :input-type="'number'" ref="yearRef" v-model="year" :place-holder="'Y'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, ref, withDefaults, computed, nextTick, onMounted } from "vue";
import InputComponent from "../input-component/InputComponent.vue";

const emit = defineEmits(["update:modelValue"]);

const props = withDefaults(
  defineProps<{
    placeHolder?: string;
    errorMessage?: string;
    modelValue?: string | number;
  }>(),
  {
    placeHolder: "Date",
  }
);

const yearRef = ref<typeof InputComponent | null>(null);
const monthRef = ref<typeof InputComponent | null>(null);
const parentComponent = ref<HTMLElement | null>();

let dayLocal = ref<string>(props.modelValue ? props.modelValue.toString().split("-")[2] : "");

let monthLocal = ref<string>(props.modelValue ? props.modelValue.toString().split("-")[1] : "");

let yearLocal = ref<string>(props.modelValue ? props.modelValue.toString().split("-")[0] : "");

const day = computed({
  get: () => {
    return dayLocal.value;
  },
  set: (value: string) => {
    const dayValue = parseInt(value, 10);
    dayLocal.value = "0";
    nextTick(() => {
      if (dayValue > 31) {
        value = "31";
      }
      dayLocal.value = value;
      updateValue();
    });
    if (value && dayValue > 4) {
      if (monthRef.value) {
        monthRef.value.focusInput();
      }
    }
    updateValue();
  },
});

const month = computed({
  get: () => {
    return monthLocal.value;
  },
  set: (value: string) => {
    const monthValue = parseInt(value, 10);
    monthLocal.value = "0";
    nextTick(() => {
      if (monthValue > 12) {
        value = "12";
      }
      monthLocal.value = value;
      updateValue();
    });

    if (value && monthValue > 2) {
      if (yearRef.value) {
        yearRef.value.focusInput();
      }
    }
    updateValue();
  },
});

const year = computed({
  get: () => {
    return yearLocal.value;
  },
  set: (value: string) => {
    const yearValue = parseInt(value, 10);
    if (yearValue < 1000) return;
    const prevValue = yearLocal.value;
    yearLocal.value = "0";
    nextTick(() => {
      if (yearValue > 9999) {
        value = prevValue;
      }

      yearLocal.value = value;
      updateValue();
    });

    updateValue();
  },
});

function updateValue() {
  const yearVar = parseInt(year.value, 10);
  const monthVar = parseInt(month.value, 10) - 1;
  const dayVar = parseInt(day.value, 10);
  const timestamp = new Date(yearVar, monthVar, dayVar, 0, 0, 0);
  if (!day.value || !month.value || !year.value) return;
  if (Number.isNaN(timestamp)) return;
  const yearDate = timestamp.getFullYear();
  const monthDate = timestamp.getMonth() + 1;
  const monthDateStr = monthDate < 10 ? "0" + monthDate : monthDate;
  const dayDate = timestamp.getDate();
  const dayDateStr = dayDate < 10 ? "0" + dayDate : dayDate;
  const date = `${yearDate}-${monthDateStr}-${dayDateStr}`;
  // const emitValue =
  //   year.value.toString().padStart(4, "0") +
  //   "-" +
  //   month.value.toString().padStart(2, "0") +
  //   "-" +
  //   day.value.toString().padStart(2, "0");
  emit("update:modelValue", date);
}
</script>

<script lang="ts">
import styles from "./_inputDateComponent.scss?inline";

function injectCss(css: string) {
  const style = document.createElement("style");
  style.setAttribute("type", "text/css");
  style.setAttribute("id", "styles-input-date-component");
  document.head.firstChild
    ? document.head.insertBefore(style, document.head.firstChild)
    : document.head.appendChild(style);
  style.appendChild(document.createTextNode(css));
  return css;
}

injectCss(styles);
</script>
