<template>
  <div class="form-inputs">
    <p class="form-inputs-title">Form Inputs List</p>
    <div class="form-input-box">
      <p class="form-input-box-title">Input Component</p>
      <InputComponent v-model="firstName" placeHolder="First Name" />
      <p class="form-input-box-title">Input Component Disabled</p>
      <InputComponent v-model="firstName" placeHolder="First Name" :read-only="true" />
      <p class="form-input-box-title">Input Component Error</p>
      <InputComponent
        v-model="firstName"
        placeHolder="First Name"
        :errorMessage="errorPreview ? 'Required' : ''"
        :class="{
          'is-invalid': true,
        }"
      />
      <p class="form-input-value">Value: {{ firstName }}</p>
    </div>

    <div class="form-input-box">
      <p class="form-input-box-title">Input Component Border Bottom</p>
      <InputComponent v-model="firstName" placeHolder="First Name" class="input-component-border-bottom" />
      <p class="form-input-box-title">Input Component Border Bottom Disabled</p>
      <InputComponent
        v-model="firstName"
        placeHolder="First Name"
        class="input-component-border-bottom"
        :read-only="true"
      />
      <p class="form-input-box-title">Input Component Border Bottom Error</p>
      <InputComponent
        v-model="firstName"
        placeHolder="First Name"
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
      <InputComponent v-model="firstName" placeHolder="First Name" class="input-component-full-border" />
      <p class="form-input-box-title">Input Component Full Border Disabled</p>
      <InputComponent
        v-model="firstName"
        placeHolder="First Name"
        class="input-component-full-border"
        :read-only="true"
      />
      <p class="form-input-box-title">Input Component Full Border Error</p>
      <InputComponent
        v-model="firstName"
        placeHolder="First Name"
        class="input-component-full-border"
        :errorMessage="errorPreview ? 'Required' : ''"
        :class="{
          'is-invalid': true,
        }"
      />
      <p class="form-input-value">Value: {{ firstName }}</p>
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
      <DropdownComponent
        v-model="dropdownValue"
        placeHolder="Dropdown"
        :options="dropdownOptions"
        :search-box="true"
      />
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
  </div>
</template>

<script setup lang="ts">
import InputComponent from "../lib/components/input-component/InputComponent.vue";
import DropdownComponent from "../lib/components/dropdown-component/DropdownComponent.vue";

import { ref } from "vue";

const firstName = ref("");
const dropdownValue = ref("");
const dropdownValueMultiSelect = ref([]);
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
