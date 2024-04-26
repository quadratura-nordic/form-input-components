<template>
  <div
    class="calendar-component"
    :class="{
      'calendar-component-opened': show,
    }">
    <InputComponent
      :read-only="true"
      @click="openCalendar"
      v-model="valueString"
      :place-holder="placeHolder"
      :error-message="errorMessage" />

    <div class="calendar-container" v-if="show" v-click-outside="close">
      <div class="calendar-header">
        <div class="calendar-arrow left" @click="monthClick(-1)"></div>
        <p v-if="!monthDropdown" class="date-text">{{ months[now.month - 1] }} {{ now.year }}</p>
        <DropdownComponent
          v-if="monthDropdown"
          :options="monthsArray"
          :place-holder="'Month'"
          v-model="selectedMonth" />
        <DropdownComponent v-if="yearDropdown" :options="yearsArray" :place-holder="'Year'" v-model="selectedYear" />
        <div class="calendar-arrow right" @click="monthClick(1)"></div>
      </div>
      <div class="calendar-days">
        <p class="calendar-day day-name" v-for="day in days" :key="day">
          {{ day }}
        </p>
      </div>
      <div class="calendar-days" v-for="i in 6" :key="i">
        <p
          class="calendar-day"
          v-for="j in 7"
          :key="j"
          :class="date[(i - 1) * 7 + (j - 1)] && date[(i - 1) * 7 + (j - 1)].status"
          @click="pickDate((i - 1) * 7 + (j - 1))">
          {{ date[(i - 1) * 7 + (j - 1)] && date[(i - 1) * 7 + (j - 1)].text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, withDefaults, onMounted, computed, ref, watch, nextTick } from 'vue';

import InputComponent from '../input-component/InputComponent.vue';
import QDateTime from './QDateTime';
import type { DateTime } from './QDateTime';
import DropdownComponent from '../dropdown-component/DropdownComponent.vue';
import type { WritableComputedRef } from 'vue';
type mapType = {
  YYYY: number;
  MMM: string;
  MM: string;
  M: number;
  DD: string;
  D: number;
};

type dateType = {
  text: number;
  status: string;
  time:
    | {
        year: number;
        month: number;
        day: number;
        hour: number;
        minute: number;
      }
    | any;
};

const emit = defineEmits(['update:modelValue']);

const props = withDefaults(
  defineProps<{
    modelValue?: DateTime | null;
    format?: string;
    errorMessage?: string;
    disableFutureDates?: boolean;
    disablePastDates?: boolean;
    monthDropdown?: boolean;
    yearDropdown?: boolean;
    placeHolder?: string;
  }>(),
  {
    format: 'YYYY-MM-DD',
    disableFutureDates: false,
    disablePastDates: false,
    monthDropdown: false,
    yearDropdown: false,
    placeHolder: 'Select Date',
  }
);

const show = ref(false);
const now = ref(QDateTime.locationTime());
const date = ref([] as dateType[]);
const months = ref(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
const days = ref(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
const monthsArray = ref([
  {
    name: 'January',
    value: 0,
  },
  {
    name: 'February',
    value: 1,
  },
  {
    name: 'March',
    value: 2,
  },
  {
    name: 'April',
    value: 3,
  },
  {
    name: 'May',
    value: 4,
  },
  {
    name: 'June',
    value: 5,
  },
  {
    name: 'July',
    value: 6,
  },
  {
    name: 'August',
    value: 7,
  },
  {
    name: 'September',
    value: 8,
  },
  {
    name: 'October',
    value: 9,
  },
  {
    name: 'November',
    value: 10,
  },
  {
    name: 'December',
    value: 11,
  },
]);

const yearsArray = computed(() => {
  const years = [];
  for (let i = 1900; i <= 2100; i++) {
    years.push({
      name: i.toString(),
      value: i,
    });
  }
  return years;
});

const selectedYear = computed({
  get: () => now.value.year,
  set: (value) => {
    now.value = now.value.set({ year: value });
  },
});
const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

const valueString = computed(() => {
  let stringValue = '';
  if (value.value == null) {
    stringValue = '--.--.----';
  } else {
    let stringifyVar = stringify(QDateTime.parse(value.value.toString()) || QDateTime.locationTime());
    let day = stringifyVar.substring(8, 10);
    let month = stringifyVar.substring(5, 7);
    let year = stringifyVar.substring(0, 4);
    stringValue = day + '.' + month + '.' + year;
  }

  return stringValue;
  // return this.stringify(this.value);
});

const selectedMonth = computed({
  get: () => {
    const month = now.value.month - 1;
    return month;
  },
  set: (value) => {
    console.log(value);
    now.value = now.value.set({ month: value + 1 });
  },
});

onMounted(() => {
  if (value.value && value.value.toString() == 'Invalid DateTime') {
    now.value = QDateTime.locationTime();
  } else {
    if (value.value) {
      now.value = QDateTime.parse(value.value.toString()) || QDateTime.locationTime();
    }
  }
});

watch(now, () => {
  update();
});

watch(show, () => {
  update();
});

function openCalendar() {
  show.value = true;
}
function close() {
  show.value = false;
}

function update() {
  let arr = [];
  let time = now.value.set({ day: 1 });
  let curFirstDay = time.weekday;
  // curFirstDay === 0 && (curFirstDay = 7);
  time = time.minus({ months: 1 }).endOf('month'); // the last day
  let lastDayCount = time.day;
  for (let i = curFirstDay - 1; i > 0; i--) {
    arr.push({
      text: lastDayCount - i + 1,
      time: time.set({ day: lastDayCount - i + 1 }),
      status: 'date-pass',
    });
  }
  time = time.plus({ months: 1 }).endOf('month');
  let curDayCount = time.day;
  let value = valueString.value || stringify(QDateTime.locationTime());
  for (let i = 0; i < curDayCount; i++) {
    let tmpTime = time.set({ day: i + 1 });
    let status = '';
    let valueMod = value.split('.');
    let valueModArr = valueMod[2] + '-' + valueMod[1] + '-' + valueMod[0];
    stringify(tmpTime) === valueModArr && (status = 'date-active');
    stringify(QDateTime.locationTime()) === stringify(tmpTime) && (status += ' date-current');
    arr.push({
      text: i + 1,
      time: tmpTime,
      status: status,
    });
  }

  let j = 1;
  while (arr.length < 42) {
    arr.push({
      text: j,
      time: time.plus({ months: 1 }).set({ day: j }),
      status: 'date-future',
    });
    j++;
  }

  if (props.disableFutureDates) {
    arr.forEach((item) => {
      if (item.time > QDateTime.locationTime()) {
        item.status += ' date-disabled';
      }
    });
  }

  if (props.disablePastDates) {
    arr.forEach((item) => {
      if (item.time < QDateTime.locationTime()) {
        item.status += ' date-disabled';
      }
    });
  }

  date.value = arr;
}

function monthClick(flag: number) {
  now.value = now.value.set({ month: now.value.month + flag });
}

function pickDate(index: number) {
  if (date.value[index].status.includes('date-disabled')) return;
  now.value = date.value[index].time.set({ hour: 7, minute: 0 });
  emit('update:modelValue', now.value);
  show.value = false;
}

function stringify(time = now.value, format = props.format) {
  let year = time.year;
  let month = time.month;
  let date = time.day;
  let monthName = months.value[time.month - 1];

  const map = {
    YYYY: year,
    MMM: monthName,
    MM: ('0' + month).slice(-2),
    M: month,
    DD: ('0' + date).slice(-2),
    D: date,
  };

  return format.replace(/Y+|M+|D+/g, (str: any) => {
    if (str in map) {
      return map[str as keyof mapType];
    }
    return str;
  });
}
</script>

<script lang="ts">
import styles from './_calendarComponent.scss?inline';

function injectCss(css: string) {
  const style = document.createElement('style');
  style.setAttribute('type', 'text/css');
  style.setAttribute('id', 'styles-calendar-component');
  document.head.firstChild
    ? document.head.insertBefore(style, document.head.firstChild)
    : document.head.appendChild(style);
  style.appendChild(document.createTextNode(css));
  return css;
}

injectCss(styles);
</script>
