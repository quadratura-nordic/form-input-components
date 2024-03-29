import InputComponent from "./components/input-component/InputComponent.vue";
import DropdownComponent from "./components/dropdown-component/DropdownComponent.vue";
import InputComponentWithSuggestions from "./components/input-with-suggestions/InputComponentWithSuggestions.vue";
import InputDateComponent from "./components/input-date-component/InputDateComponent.vue";
import TimePickerComponent from "./components/time-picker-component/TimePickerComponent.vue";
import TextAreaComponent from "./components/textarea-component/TextAreaComponent.vue";
import SliderComponent from "./components/slider-component/SliderComponent.vue";
import CalendarComponent from "./components/calendar-component/CalendarComponent.vue";
import CheckBoxSliderComponent from "./components/checkbox-slider-component/CheckBoxSliderComponent.vue";

const themes = [import("./themes/fullBorder"), import("./themes/modern")];

export {
  InputComponent,
  DropdownComponent,
  InputComponentWithSuggestions,
  InputDateComponent,
  TimePickerComponent,
  TextAreaComponent,
  SliderComponent,
  CalendarComponent,
  CheckBoxSliderComponent,
};
