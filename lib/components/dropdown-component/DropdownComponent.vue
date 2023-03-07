<template>
  <div class="dropdown-component">
    <div
      class="dropdown-component-outside"
      @click="open"
      :class="{ 'up-side-down': upSideDown && opened, 'dropdown-list-opened': opened }"
    >
      <p class="dropdown-component-outside-text" v-if="multiSelect ? getMultiSelectNames() : value">
        {{ errorMessage ? placeHolder + " - " + errorMessage : placeHolder }}
      </p>
      <p
        class="dropdown-component-outside-title"
        :class="{ 'normal-color': multiSelect ? getMultiSelectNames() : value }"
      >
        {{
          multiSelect
            ? getMultiSelectNames()
              ? getMultiSelectNames()
              : errorMessage
              ? placeHolder + " - " + errorMessage
              : placeHolder
            : value && displaySelected()
            ? displaySelected()
            : errorMessage
            ? placeHolder + " - " + errorMessage
            : placeHolder
        }}
      </p>
      <div class="dropdown-arrow-box"></div>
    </div>
    <div
      class="dropdown-component-opened"
      v-if="opened"
      v-click-outside="close"
      ref="dropdownComponent"
      :class="{ 'up-side-down': upSideDown }"
    >
      <div class="search-box" v-if="searchBox">
        <InputComponent v-model="searchValue" placeHolder="Search" />
      </div>
      <ul>
        <li v-for="(option, index) in filteredOptions" :key="index">
          <div class="checkbox" v-if="multiSelect">
            <input type="checkbox" :value="option" :id="valueFunction(option) + '_' + index" v-model="value" />
            <label
              :for="valueFunction(option) + '_' + index"
              :title="displayFunction(option)"
              class="body-text radio-label"
              >{{ displayFunction(option) }}</label
            >
          </div>
          <template v-else>
            <input type="radio" :value="option" :id="valueFunction(option) + '_' + index" v-model="value" />
            <label :for="valueFunction(option) + '_' + index" :title="displayFunction(option)">{{
              displayFunction(option)
            }}</label>
          </template>
        </li>
        <li v-if="filteredOptions.length == 0">
          <label>No results found</label>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { withDefaults, onMounted, computed, ref, nextTick } from "vue";
import InputComponent from "../input-component/InputComponent.vue";

type Option =
  | {
      name: string;
      value: string;
    }
  | unknown;

const emit = defineEmits(["update:modelValue"]);

const props = withDefaults(
  defineProps<{
    placeHolder?: string;
    errorMessage?: string;
    modelValue: unknown | unknown[];
    options: Option[] | null;
    displayFunction?: (option: Option) => string;
    valueFunction?: (option: Option) => string;
    multiSelect?: boolean;
    searchBox?: boolean;
  }>(),
  {
    displayFunction: (option: any) => {
      return option.name ?? "--";
    },
    valueFunction: (option: any) => {
      return option.value ?? "--";
    },
    placeHolder: "Please select",
    multiSelect: false,
    searchBox: false,
  }
);

const opened = ref(false);
const upSideDown = ref(false);
const dropdownComponent = ref<HTMLElement | null>();
const searchValue = ref("");

const value = computed({
  get(): unknown | null | unknown[] {
    if (!props.options) {
      return null;
    }
    if (props.multiSelect) {
      return props.modelValue ?? [];
    }
    for (let i = 0; i < props.options.length; i++) {
      if (props.valueFunction(props.options[i]) === props.modelValue) {
        return props.options[i];
      }
    }

    return null;
  },
  set(val: unknown | null | unknown[]) {
    if (val) {
      if (props.multiSelect) {
        emit("update:modelValue", val);
      } else {
        emit("update:modelValue", props.valueFunction(val));
        close();
      }
    }
  },
});

const filteredOptions = computed(() => {
  if (!props.options) {
    return [];
  }
  if (searchValue.value) {
    return props.options.filter((option) => {
      return props.displayFunction(option).toLowerCase().includes(searchValue.value.toLowerCase());
    });
  }
  return props.options;
});

onMounted(() => {
  checkLength();
});

function checkLength() {
  if (props.options && props.options.length == 1) {
    value.value = props.options[0];
  }
}

function displaySelected() {
  if (value.value) {
    return props.displayFunction(value.value);
  }
  return props.placeHolder;
}

function open() {
  opened.value = true;
  heightCalculation();
}
function close() {
  opened.value = false;
  upSideDown.value = false;
  searchValue.value = "";
}
function heightCalculation() {
  nextTick(() => {
    const dropdown = dropdownComponent.value;
    if (!dropdown) {
      return;
    }
    const dropdownHeight = dropdown.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const diffrence = windowHeight - dropdownHeight.bottom;

    if (diffrence > 0) {
      upSideDown.value = false;
    } else {
      upSideDown.value = true;
    }
  });
}

function getMultiSelectNames() {
  const selectedValue = value.value as unknown[];
  if (props.multiSelect && selectedValue && selectedValue?.length > 0) {
    let names = "";
    for (let i = 0; i < selectedValue?.length; i++) {
      if (!props.options) return null;
      for (let j = 0; j < props.options.length; j++) {
        if (props.options[j] === selectedValue[i]) {
          names += props.displayFunction(props.options[j]) + ", ";
        }
      }
      names = names.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }
    names = names.slice(0, -2);
    if (selectedValue?.length > 3) {
      names = selectedValue?.length + " " + props.placeHolder + "s" + " selected ";
    }
    return names;
  }
  return null;
}
</script>

<style lang="scss">
.dropdown-component {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  position: relative;

  --error-color: #ff6565;
  --primary-color: #1a2c51;
  --secondary-color: #8d96a8;
  --hover-color: #223a6b;
  --black-color: #000;
  --white-color: #fff;

  * {
    box-sizing: border-box;
  }

  input[type="checkbox"],
  input[type="radio"] {
    position: absolute;
    opacity: 0;
    left: -99999px;
  }

  &.is-invalid {
    .dropdown-component-outside {
      border: 1px solid var(--error-color);
      .dropdown-arrow-box {
        border-left: 1px solid var(--error-color);
      }
      p {
        color: var(--error-color);
      }
    }
    .dropdown-component-opened {
      border: 1px solid var(--error-color);
      border-top: none;
      &.up-side-down {
        border: 1px solid var(--error-color);
        border-bottom: none;
      }
    }
  }

  .dropdown-component-outside {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    width: 100%;
    background: var(--white-color);
    border: 1px solid var(--secondary-color);
    border-radius: 8px;

    &.dropdown-list-opened {
      border-radius: 8px 8px 0 0;
      .dropdown-arrow-box {
        &::before {
          margin-top: 5px;
          transform: rotate(135deg);
        }
      }
      &.up-side-down {
        border-radius: 0 0 8px 8px;
        .dropdown-component-outside-text {
          top: auto;
          bottom: -10px;
        }
      }
    }

    .dropdown-component-outside-title {
      font-weight: 400;
      font-size: 15px;
      line-height: 22px;
      color: var(--secondary-color);
      width: calc(100% - 40px);
      padding: 0 10px;
      flex: 1;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;

      &.normal-color {
        color: var(--black-color);
      }
    }
    .dropdown-arrow-box {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 7px 10px;
      border-left: 1px solid var(--secondary-color);
      height: 100%;
      box-sizing: border-box;
      width: 40px;
      &::before {
        content: "";
        display: inline-block;
        width: 11.5px;
        height: 11.5px;
        margin-top: -5px;
        border-bottom: 2px solid var(--primary-color);
        border-left: 2px solid var(--primary-color);
        transform: rotate(-45deg);
      }
    }
    .dropdown-component-outside-text {
      height: auto;
      position: absolute;
      top: -10px;
      left: 10px;
      font-weight: 400;
      font-size: 12px;
      line-height: 100%;
      color: var(--black-color);
      padding: 5px;
      z-index: 5;
      margin: 0;
      background-color: var(--white-color);
    }
    &:hover {
      cursor: pointer;
      border: 1px solid var(--primary-color);
      .dropdown-arrow-box {
        border-left: 1px solid var(--primary-color);
      }
    }
  }
  .dropdown-component-opened {
    display: flex;
    flex-direction: column;
    background-color: var(--white-color);
    border-radius: 0 0 8px 8px;
    height: auto;
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    border: 1px solid var(--secondary-color);
    border-top: none;
    z-index: 6;
    padding: 0;

    &.up-side-down {
      top: auto;
      bottom: 40px;
      flex-direction: column-reverse;
      border-radius: 8px 8px 0 0;
      border-top: 1px solid var(--secondary-color);
      border-bottom: none;
      .search-box {
        border-bottom: none;
        border-top: 1px solid var(--secondary-color);
      }
    }

    .search-box {
      padding: 10px;
      border-bottom: 1px solid var(--secondary-color);
    }
    ul {
      overflow: hidden;
      display: flex;
      flex-direction: column;
      list-style: none;
      margin: 0;
      overflow-y: auto;
      padding: 0 10px;
      width: 100%;
      max-height: 40vh;
      height: auto;

      li {
        height: 40px;
        border-bottom: 1px solid var(--secondary-color);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;

        .checkbox {
          display: flex;
          align-items: center;
          width: 100%;
          height: 100%;

          input[type="checkbox"] + label::before {
            content: "";
            display: inline-block;
            width: 17px;
            height: 17px;
            background: url("./checkboxIcons.svg") 0 0;
            background-repeat: no-repeat;
            margin-right: 6px;
            margin-bottom: -3px;
            flex-shrink: 0;
          }

          input[type="checkbox"]:checked + label::before {
            background: url("./checkboxIcons.svg") 0 -19px;
            background-repeat: no-repeat;
          }
        }

        &:last-child {
          border-bottom: none;
        }

        label {
          display: inline-block;
          font-weight: 400;
          font-size: 15px;
          line-height: 22px;
          color: var(--black-color);
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          padding: 10px 0;
          height: 100%;
          &:hover {
            cursor: pointer;
            color: var(--hover-color);
          }
        }
      }
    }
  }
}
</style>
