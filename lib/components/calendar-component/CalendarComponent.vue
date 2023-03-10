<!-- <template>
  <div
    class="calendar-component"
    :class="{
      'calendar-component-opened': show,
    }"
  >
    <InputComponent
      :read-only="true"
      @click="openCalendar"
      v-model="valueString"
      :place-holder="'Select Date'"
      :error-message="errorMessage"
    />

    <div class="calendar-container" v-if="show" v-click-outside="close">
      <div class="calendar-header">
        <div class="calendar-arrow left" @click="monthClick(-1)"></div>
        <p v-if="!monthDropdown">{{ months[now.month - 1] }} {{ now.year }}</p>
        <DropdownComponent
          v-if="monthDropdown"
          :options="monthsArray"
          :place-holder="'Month'"
          v-model="selectedMonth"
        />
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
          @click="pickDate((i - 1) * 7 + (j - 1))"
        >
          {{ date[(i - 1) * 7 + (j - 1)] && date[(i - 1) * 7 + (j - 1)].text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, withDefaults, onMounted, computed, ref, watch, nextTick } from "vue";

import InputComponent from "../input-component/InputComponent.vue";
import QDateTime from "./QDateTime";
import type { DateTime } from "./QDateTime";
import DropdownComponent from "../dropdown-component/DropdownComponent.vue";
import type { WritableComputedRef } from "vue";
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

const emit = defineEmits(["update:modelValue"]);

const props = withDefaults(
  defineProps<{
    modelValue?: DateTime | null;
    format?: string;
    errorMessage?: string;
    disableFutureDates?: boolean;
    disablePastDates?: boolean;
    monthDropdown?: boolean;
    yearDropdown?: boolean;
  }>(),
  {
    format: "YYYY-MM-DD",
    disableFutureDates: false,
    disablePastDates: false,
    monthDropdown: false,
    yearDropdown: false,
  }
);

const show = ref(false);
const now = ref(QDateTime.locationTime());
const date = ref([] as dateType[]);
const months = ref(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]);
const days = ref(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]);
const monthsArray = ref([
  {
    name: "January",
    value: 0,
  },
  {
    name: "February",
    value: 1,
  },
  {
    name: "March",
    value: 2,
  },
  {
    name: "April",
    value: 3,
  },
  {
    name: "May",
    value: 4,
  },
  {
    name: "June",
    value: 5,
  },
  {
    name: "July",
    value: 6,
  },
  {
    name: "August",
    value: 7,
  },
  {
    name: "September",
    value: 8,
  },
  {
    name: "October",
    value: 9,
  },
  {
    name: "November",
    value: 10,
  },
  {
    name: "December",
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
const value: WritableComputedRef<DateTime | null | undefined> = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const valueString = computed(() => {
  let stringValue = "";
  if (value.value == null) {
    stringValue = "--.--.----";
  } else {
    let stringifyVar = stringify(value.value);
    let day = stringifyVar.substring(8, 10);
    let month = stringifyVar.substring(5, 7);
    let year = stringifyVar.substring(0, 4);
    stringValue = day + "." + month + "." + year;
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
  if (value.value  && value.value.toString() == "Invalid DateTime") {
    now.value = QDateTime.locationTime();
  } else {
    if (value.value) {
      now.value = value.value || QDateTime.locationTime();
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
  time = time.minus({ months: 1 }).endOf("month"); // the last day
  let lastDayCount = time.day;
  for (let i = curFirstDay - 1; i > 0; i--) {
    arr.push({
      text: lastDayCount - i + 1,
      time: time.set({ day: lastDayCount - i + 1 }),
      status: "date-pass",
    });
  }
  time = time.plus({ months: 1 }).endOf("month");
  let curDayCount = time.day;
  let value = valueString.value || stringify(QDateTime.locationTime());
  for (let i = 0; i < curDayCount; i++) {
    let tmpTime = time.set({ day: i + 1 });
    let status = "";
    let valueMod = value.split(".");
    let valueModArr = valueMod[2] + "-" + valueMod[1] + "-" + valueMod[0];
    stringify(tmpTime) === valueModArr && (status = "date-active");
    stringify(QDateTime.locationTime()) === stringify(tmpTime) && (status += " date-current");
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
      status: "date-future",
    });
    j++;
  }

  if (props.disableFutureDates) {
    arr.forEach((item) => {
      if (item.time > QDateTime.locationTime()) {
        item.status += " date-disabled";
      }
    });
  }

  if (props.disablePastDates) {
    arr.forEach((item) => {
      if (item.time < QDateTime.locationTime()) {
        item.status += " date-disabled";
      }
    });
  }

  date.value = arr;
}

// function yearClick(flag: number) {
//   now.value = now.value.set({ year: now.value.year + flag });
// }
function monthClick(flag: number) {
  now.value = now.value.set({ month: now.value.month + flag });
}

function pickDate(index: number) {
  if (date.value[index].status.includes("date-disabled")) return;
  now.value = date.value[index].time.set({ hour: 7, minute: 0 });
  emit("update:modelValue", now.value);
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
    MM: ("0" + month).slice(-2),
    M: month,
    DD: ("0" + date).slice(-2),
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

<style lang="scss">
.calendar-component {
  position: relative;
  display: flex;

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  --error-color: #ff6565;
  --primary-color: #1a2c51;
  --secondary-color: #8d96a8;
  --hover-color: #223a6b;
  --black-color: #000;
  --white-color: #fff;

  &.is-invalid {
    .input-component {
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
    .calendar-container {
      border: 1px solid var(--error-color);
      border-top: none 0;
    }
  }

  &.calendar-component-opened {
    .input-component {
      input {
        border-radius: 8px 8px 0 0;
      }
    }
  }

  .calendar-container {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    z-index: 10;
    background-color: var(--white-color);
    border: 1px solid var(--secondary-color);
    border-top: none;
    border-radius: 0 0 8px 8px;
    position: absolute;
    top: 40px;
    // box-shadow: 0px 0px 110px rgb(0 0 0 / 17%);
    .calendar-header {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      width: 100%;
      gap: 20px;
      .date-text {
        width: 150px;
        text-align: center;
      }
      .calendar-arrow {
        width: 11px;
        height: 18px;
        display: block;
        display: flex;
        align-items: center;
        flex-shrink: 0;
        &.left {
          background: url("./calendarIcons.svg") -0 -18px;
        }
        &.right {
          background: url("./calendarIcons.svg")-0 -0rem;
        }
        &:hover {
          cursor: pointer;
          opacity: 0.7;
        }
      }
    }
    .calendar-days {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      width: 100%;
      border-top: 1px solid var(--secondary-color);
      height: 49.5px;

      &.day-names {
        border-top: none;
      }

      .calendar-day {
        width: calc(100% / 7);
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 1px solid var(--secondary-color);
        font-weight: 400;
        font-size: 12px;
        line-height: 12px;
        color: var(--black-color);
        &:nth-child(7n) {
          border-right: none;
        }
        &:hover {
          cursor: pointer;
          background-color: var(--secondary-color);
          color: var(--white-color);
        }
        &.date-pass,
        &.date-future {
          color: var(--secondary-color);
          &:hover {
            color: var(--white-color);
          }
        }

        &.date-disabled {
          color: var(--secondary-color);
          &:hover {
            color: var(--secondary-color);
            cursor: not-allowed;
            background-color: var(--white-color);
          }
        }
        &.date-active,
        &.date-current {
          background-color: var(--primary-color);
          color: var(--white-color);
          &:hover {
            background-color: var(--primary-color);
            color: var(--white-color);
          }
        }

        &.day-name {
          border-right: none;
          &:hover {
            cursor: default;
            background-color: var(--white-color);
            color: var(--black-color);
          }
        }
      }
    }
  }
}
</style> -->
