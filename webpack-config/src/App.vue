<template>
  <div class="form-inputs">
    <p class="form-inputs-title">Form Inputs List</p>
    <div class="form-input-box">
      <p class="form-input-box-title">Input Component</p>
      <InputComponent v-model="firstName" :placeHolder="'First Name'" />
      <p class="form-input-box-title">Input Component Disabled</p>
      <InputComponent v-model="firstName" :placeHolder="'First Name'" :read-only="true" />
      <p class="form-input-box-title">Input Component Error</p>
      <InputComponent
        v-model="firstName"
        :placeHolder="'First Name'"
        :errorMessage="errorPreview ? 'Required' : ''"
        :class="{
          'is-invalid': true,
        }"
      />
      <p class="form-input-value">Value: {{ firstName }}</p>
    </div>

    <div class="form-input-box">
      <p class="form-input-box-title">Input Component Border Bottom</p>
      <InputComponent v-model="firstName" :placeHolder="'First Name'" class="input-component-border-bottom" />
      <p class="form-input-box-title">Input Component Border Bottom Disabled</p>
      <InputComponent
        v-model="firstName"
        :placeHolder="'First Name'"
        class="input-component-border-bottom"
        :read-only="true"
      />
      <p class="form-input-box-title">Input Component Border Bottom Error</p>
      <InputComponent
        v-model="firstName"
        :placeHolder="'First Name'"
        class="input-component-border-bottom"
        :errorMessage="errorPreview ? 'Required' : ''"
        :class="{
          'is-invalid': true,
        }"
      />
      <p class="form-input-value">Value: {{ firstName }}</p>
    </div>

    <div class="form-input-box">
      <p class="form-input-box-title">Input Component Full Border</p>
      <InputComponent v-model="firstName" :placeHolder="'First Name'" class="input-component-full-border" />
      <p class="form-input-box-title">Input Component Full Border Disabled</p>
      <InputComponent
        v-model="firstName"
        :placeHolder="'First Name'"
        class="input-component-full-border"
        :read-only="true"
      />
      <p class="form-input-box-title">Input Component Full Border Error</p>
      <InputComponent
        v-model="firstName"
        :placeHolder="'First Name'"
        class="input-component-full-border"
        :errorMessage="errorPreview ? 'Required' : ''"
        :class="{
          'is-invalid': true,
        }"
      />
      <p class="form-input-value">Value: {{ firstName }}</p>
    </div>

    <div class="form-input-box">
      <p class="form-input-box-title">TextArea Component No Resize</p>
      <TextAreaComponent v-model="textAreaValue" :should-resize="false" :placeHolder="'TextArea'" />

      <p class="form-input-box-title">TextArea Component With Resize</p>
      <TextAreaComponent v-model="textAreaValue" :should-resize="true" :placeHolder="'TextArea'" />

      <p class="form-input-box-title">TextArea Component Disabled</p>
      <TextAreaComponent v-model="textAreaValue" :placeHolder="'TextArea'" :read-only="true" />
      <p class="form-input-box-title">TextArea Component Error</p>
      <TextAreaComponent
        v-model="textAreaValue"
        :placeHolder="'TextArea'"
        :errorMessage="errorPreview ? 'Required' : ''"
        :class="{
          'is-invalid': true,
        }"
      />
      <p class="form-input-value">Value: {{ textAreaValue }}</p>
    </div>

    <div class="form-input-box">
      <p class="form-input-box-title">Checkbox Slider Component</p>
      <CheckBoxSliderComponent v-model="checkboxSlider" :value-key="'1'" />

      <p class="form-input-box-title">TextArea Component Error</p>
      <CheckBoxSliderComponent
        v-model="checkboxSlider"
        :value-key="true"
        :errorMessage="errorPreview ? 'Required' : ''"
        :class="{
          'is-invalid': true,
        }"
      />
      <p class="form-input-value">Value: {{ checkboxSlider }}</p>
    </div>

    <div class="form-input-box">
      <p class="form-input-box-title">Dropdown Component</p>
      <DropdownComponent v-model="dropdownValue" placeHolder="Dropdown" :options="dropdownOptions" />

      <p class="form-input-box-title">Dropdown Component Error</p>
      <DropdownComponent
        v-model="dropdownValue"
        placeHolder="Dropdown"
        :options="dropdownOptions"
        :errorMessage="errorPreview ? 'Required' : ''"
        :class="{
          'is-invalid': true,
        }"
      />
      <p class="form-input-value">Value: {{ dropdownValue }}</p>
    </div>

    <div class="form-input-box">
      <p class="form-input-box-title">Dropdown Component Multiselect</p>
      <DropdownComponent
        v-model="dropdownValueMultiSelect"
        placeHolder="Dropdown"
        :options="dropdownOptions"
        :multi-select="true"
      />
      <p class="form-input-box-title">Dropdown Component Multiselect Error</p>
      <DropdownComponent
        v-model="dropdownValueMultiSelect"
        placeHolder="Dropdown"
        :options="dropdownOptions"
        :multi-select="true"
        :errorMessage="errorPreview ? 'Required' : ''"
        :class="{
          'is-invalid': true,
        }"
      />

      <p class="form-input-value">Value: {{ dropdownValueMultiSelect }}</p>
    </div>

    <div class="form-input-box">
      <p class="form-input-box-title">Dropdown Component Search</p>
      <DropdownComponent v-model="dropdownValue" placeHolder="Dropdown" :options="dropdownOptions" :search-box="true" />
      <p class="form-input-box-title">Dropdown Component Search Multiselect Error</p>
      <DropdownComponent
        v-model="dropdownValueMultiSelect"
        placeHolder="Dropdown"
        :options="dropdownOptions"
        :search-box="true"
        :multi-select="true"
        :errorMessage="errorPreview ? 'Required' : ''"
        :class="{
          'is-invalid': true,
        }"
      />

      <p class="form-input-value">Value: {{ dropdownValueMultiSelect }}</p>
    </div>

    <div class="form-input-box">
      <p class="form-input-box-title">Input Component With Suggestions</p>
      <InputComponentWithSuggestions
        v-model="inputSuggestions"
        placeHolder="Input with suggestions"
        :suggestions="suggestions"
      />

      <p class="form-input-box-title">Input Component With Suggestions Errors</p>
      <InputComponentWithSuggestions
        v-model="inputSuggestions"
        placeHolder="Input with suggestions"
        :suggestions="suggestions"
        :errorMessage="errorPreview ? 'Required' : ''"
        :class="{
          'is-invalid': true,
        }"
      />
      <p class="form-input-value">Value: {{ inputSuggestions }}</p>
    </div>

    <div class="form-input-box">
      <p class="form-input-box-title">Input Date Component</p>
      <InputDateComponent v-model="inputDate" placeHolder="Date input" />

      <p class="form-input-box-title">Input Date Component Error</p>
      <InputDateComponent
        v-model="inputDate"
        placeHolder="Date input"
        :errorMessage="errorPreview ? 'Required' : ''"
        :class="{
          'is-invalid': true,
        }"
      />
      <p class="form-input-value">Value: {{ inputDate }}</p>
    </div>

    <div class="form-input-box">
      <p class="form-input-box-title">Time Picker Component</p>
      <TimePickerComponent
        v-model="timeSelected"
        :time-from="7"
        :time-to="22"
        :minute-interval="5"
        :place-holder="'Select time'"
      />

      <p class="form-input-box-title">Time Picker Component Error</p>
      <TimePickerComponent
        v-model="timeSelected"
        :time-from="7"
        :time-to="22"
        :minute-interval="5"
        :place-holder="'Select time'"
        :errorMessage="errorPreview ? 'Required' : ''"
        :class="{
          'is-invalid': true,
        }"
      />
      <p class="form-input-value">Value: {{ timeSelected }}</p>
    </div>

    <div class="form-input-box">
      <p class="form-input-box-title">Date Picker Component</p>
      <CalendarComponent v-model="dateSelected" />

      <p class="form-input-box-title">Date Picker Component disabled future dates</p>
      <CalendarComponent v-model="dateSelected" :disable-future-dates="true" />

      <p class="form-input-box-title">Date Picker Component disabled past dates</p>
      <CalendarComponent v-model="dateSelected" :disable-past-dates="true" />

      <p class="form-input-box-title">Date Picker Component month dropdown</p>
      <CalendarComponent v-model="dateSelected" :month-dropdown="true" />

      <p class="form-input-box-title">Date Picker Component month and year dropdowns</p>
      <CalendarComponent v-model="dateSelected" :month-dropdown="true" :year-dropdown="true" />

      <p class="form-input-box-title">Date Picker Component Error</p>
      <CalendarComponent
        v-model="dateSelected"
        :errorMessage="errorPreview ? 'Required' : ''"
        :class="{
          'is-invalid': true,
        }"
      />
      <p class="form-input-value">Value: {{ dateSelected }}</p>
    </div>
    <div class="form-input-box">
      <p class="form-input-box-title">Slider Component</p>
      <SliderComponent v-model="sliderValue" :display-value="sliderValue" />
      <p class="form-input-value">Value: {{ sliderValue }}</p>

      <p class="form-input-box-title">Slider Component 10-100</p>
      <SliderComponent v-model="sliderValue2" :min="10" :max="100" />
      <p class="form-input-value">Value: {{ sliderValue2 }}</p>

      <p class="form-input-box-title">Slider Component 3 Steps</p>
      <SliderComponent v-model="sliderValue3" :steps="[1, 50, 100]" />
      <p class="form-input-value">Value: {{ sliderValue3 }}</p>

      <p class="form-input-box-title">Slider Component Error</p>
      <SliderComponent
        v-model="sliderValue"
        :class="{
          'is-invalid': true,
        }"
      />
    </div>
  </div>
  <!-- multiple slider, calendar with dropdowns -->
</template>

<script setup lang="ts">
import InputComponent from "../lib/components/input-component/InputComponent.vue";
import DropdownComponent from "../lib/components/dropdown-component/DropdownComponent.vue";
import InputComponentWithSuggestions from "../lib/components/input-with-suggestions/InputComponentWithSuggestions.vue";
import InputDateComponent from "../lib/components/input-date-component/InputDateComponent.vue";
import TimePickerComponent from "../lib/components/time-picker-component/TimePickerComponent.vue";
import CalendarComponent from "../lib/components/calendar-component/CalendarComponent.vue";
import TextAreaComponent from "../lib/components/textarea-component/TextAreaComponent.vue";
import SliderComponent from "../lib/components/slider-component/SliderComponent.vue";
import CheckBoxSliderComponent from "../lib/components/checkbox-slider-component/CheckBoxSliderComponent.vue";
import { ref } from "vue";

const firstName = ref("");
const dropdownValue = ref("");
const dropdownValueMultiSelect = ref([]);
const inputDate = ref("");
const inputSuggestions = ref("");
const timeSelected = ref(null);
const dateSelected = ref(null);
const textAreaValue = ref("");
const sliderValue = ref(0);
const sliderValue2 = ref(0);
const sliderValue3 = ref(0);
const checkboxSlider = ref([]);
const dropdownOptions = ref([
  {
    value: "1",
    name: "Option 1 very long text very long text very long text very long text very long text very long text",
  },
  {
    value: "2",
    name: "Option 2",
  },
  {
    value: "3",
    name: "Option 3",
  },
  {
    value: "4",
    name: "Option 4",
  },
]);
const suggestions = ref(["Suggestion 1", "Suggestion 2", "Suggestion 3", "Suggestion 4"]);
const errorPreview = ref(true);

</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Prompt", sans-serif;
}
.form-inputs {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 640px;
  padding: 40px 20px;
  margin: 0 auto;
  .form-inputs-title {
    font-size: 24px;
    font-weight: 600;
    color: #000;
  }
  .form-input-box {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .form-input-box-title {
      font-size: 14px;
      font-weight: 400;
      color: #000;
    }
    .form-input-value {
      font-size: 16px;
      font-weight: 400;
      color: #000;
    }
  }
}
</style>
