<template>
  <div class="slider-component">
    <div class="slider" ref="slider">
      <div class="slider-start" :style="{ width: snapPosition + 'px' }"></div>
      <div
        class="slider-dot"
        ref="dot"
        :style="{ transform: 'translateX(' + snapPosition + 'px)' }"
        :class="{ moving: moving }"
      >
        <p class="slider-display-value">
          {{ displayValue }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Hammer from "hammerjs";

import { defineEmits, defineProps, withDefaults, onMounted, computed, ref, watch, reactive } from "vue";

const props = withDefaults(
  defineProps<{
    modelValue: number;
    displayValue?: unknown;
    min?: number;
    max?: number;
    steps?: number[];
    // steps?: unkown[];
  }>(),
  {
    min: 0,
    max: 100,
  }
);

const emit = defineEmits(["update:modelValue"]);

const currentPosition = ref(0);
const lastPosition = ref(0);
const currentPercentPosition = ref(0);
const availableWidth = ref(0);
const moving = ref(true);
const currentScroll = reactive({
  right: 0,
  left: 0,
});

const slider = ref<HTMLElement | null>(null);
const dot = ref<HTMLElement | null>(null);

const acutalMin = computed((): number => {
  if (props.steps && props.steps.length > 0) {
    let min = null;
    for (let i = 0; i < props.steps.length; i++) {
      if (min === null || min > props.steps[i]) {
        min = props.steps[i];
      }
    }
    return min ?? 0;
  }
  return props.min;
});

const acutalMax = computed((): number => {
  if (props.steps && props.steps.length > 0) {
    let max = null;
    for (let i = 0; i < props.steps.length; i++) {
      if (max === null || max < props.steps[i]) {
        max = props.steps[i];
      }
    }
    return max ?? 0;
  }
  return props.max;
});

const actualValue = computed((): number => {
  let aV = acutalMin.value + currentPercentPosition.value * (acutalMax.value - acutalMin.value);
  if (props.steps && props.steps.length > 0) {
    let v = null;
    let diff = null;
    for (let i = 0; i < props.steps.length; i++) {
      if (v === null || diff == null || diff > Math.abs(props.steps[i] - aV)) {
        v = props.steps[i];
        diff = Math.abs(props.steps[i] - aV);
      }
    }
    return v ?? 0;
  }
  return aV;
});

const snapPosition = computed(() => {
  if (props.steps && props.steps.length > 0 && !moving.value) {
    return ((actualValue.value - acutalMin.value) / (acutalMax.value - acutalMin.value)) * availableWidth.value;
  }
  return currentPercentPosition.value * availableWidth.value;
});

onMounted(() => {
  init();
  initEvents();
  window.addEventListener("resize", () => {
    if (!slider.value || !dot.value) return;
    if (slider.value?.getBoundingClientRect().width > 0 && dot.value?.getBoundingClientRect().width > 0) {
      init();
    }
  });
  let val = props.modelValue;
  if (isNaN(val)) {
    val = 0;
  }
  setCurrentPosition(((val - acutalMin.value) / (acutalMax.value - acutalMin.value)) * availableWidth.value);
});

watch(
  () => currentPosition.value,
  () => {
    emit("update:modelValue", actualValue.value);
  }
);

watch(
  () => props.modelValue,
  () => {
    setCurrentPosition(
      ((props.modelValue - acutalMin.value) / (acutalMax.value - acutalMin.value)) * availableWidth.value
    );
  }
);

function init() {
  if (!slider.value || !dot.value) return;

  availableWidth.value = slider.value?.getBoundingClientRect().width - dot.value?.getBoundingClientRect().width;
  setCurrentPosition(
    ((props.modelValue - acutalMin.value) / (acutalMax.value - acutalMin.value)) * availableWidth.value
  );
}

function initEvents() {
  let clickX = 0;
  let difference = 0;
  let currentStart = 0;
  dot.value?.addEventListener("mousedown", (e) => {
    clickX = e.pageX;
    currentStart = currentPosition.value;
    document.addEventListener("mouseup", mouseUp);
    document.addEventListener("mousemove", moveMove);
  });

  let moveMove = (e: MouseEvent) => {
    moving.value = true;
    difference = e.pageX - clickX;
    setCurrentPosition(currentStart + difference);
  };

  let mouseUp = () => {
    moving.value = false;
    document.removeEventListener("mouseup", mouseUp);
    document.removeEventListener("mousemove", moveMove);
  };
  if (!dot.value) return;

  let mc = new Hammer.Manager(dot.value);
  let pan = new Hammer.Pan();
  mc.add(pan);
  mc.on("panstart", (e) => {
    clickX = e.center.x;
    currentStart = currentPosition.value;
  });

  mc.on("pan", (e) => {
    moving.value = true;
    difference = e.center.x - clickX;
    setCurrentPosition(currentStart + difference);
  });

  mc.on("panend", () => {
    moving.value = false;
  });
}

function setCurrentPosition(value: number) {
  if (!slider.value || !dot.value) return;

  currentPosition.value = value;
  if (currentPosition.value < 0) {
    currentPosition.value = 0;
  }
  if (currentPosition.value > slider.value?.getBoundingClientRect().width - dot.value?.getBoundingClientRect().width) {
    currentPosition.value = slider.value?.getBoundingClientRect().width - dot.value?.getBoundingClientRect().width;
  }
  currentPercentPosition.value = currentPosition.value / availableWidth.value;
}
</script>

<script lang="ts">
import styles from "./_sliderComponent.scss?inline";

function injectCss(css: string) {
  const style = document.createElement("style");
  style.setAttribute("type", "text/css");
  style.setAttribute("id", "styles-slider-component");
  document.head.firstChild
    ? document.head.insertBefore(style, document.head.firstChild)
    : document.head.appendChild(style);
  style.appendChild(document.createTextNode(css));
  return css;
}

injectCss(styles);
</script>
