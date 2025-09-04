/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import readme from "./readme.md";
import { html } from "lit-html";
import {
  CustomHelperText,
  DateFormats,
  Default,
  Disabled,
  DisableFuture,
  DisablePast,
  HideButtons,
  HideOutsideMonth,
  IcChangeDate,
  IcChangeDateEmitDatePartChanges,
  JSDates,
  MaxMin,
  MaxWidth,
  OpenAbove,
  OpenAt,
  Sizes,
  Value,
  WeekStart,
  WorkingWeek,
} from "./story-data";

export default {
  title: "Web Components/Date Picker",
  component: "ic-date-picker",
  parameters: {
    componentAPI: {
      data: readme,
    },
  },
};

const INLINE_RADIO = "inline-radio"

/**
 * Use a date picker to select a single date where visualising that date could be useful.
 *
 * There is one required prop for a date picker:
 * - label: `string`
 *
 * Click the 'Component API' tab to view all the available props and events for date pickers.
 *
 * To use the date picker component, import `@ukic/canary-web-components` into your application.
 *
 * The default date picker uses the date format of `DD/MM/YYYY`.
 */
export const DefaultExample = {
  render: () => Default(),
  name: "Default",
  height: "540px",
};

/**
 * Set the size of the date picker by using the `size` prop. This prop takes the values `small`, `medium` (default) or `large`. Depending on the chosen size, the prop will apply styling to increase or decrease the amount of spacing within the component.
 */
export const SizesExample = {
  render: () => Sizes(),
  name: "Sizes",
  height: "790px",
};

/**
 * Set the size of the input field by using the `--input-width` CSS custom property. The picker will grow, but not exceed its maximum supported width.
 */
export const MaxWidthExample = {
  render: () => MaxWidth(),
  name: "Max width",
  height: "790px",
};

/**
 * Use the helper text to add additional detail for the date input. Display custom content using the `helper-text` slot.
 */
export const CustomHelperTextExample = {
  render: () => CustomHelperText(),
  name: "Custom helper text",
  height: "790px",
};

/**
 * Disable the date picker and prevent user interaction by using the `disabled` prop.
 */
export const DisabledExample = {
  render: () => Disabled(),
  name: "Disabled",
  height: "100px",
};

/**
 * The `date-format` prop determines how dates are displayed. The supported formats are `DD/MM/YYYY`, `MM/DD/YYYY` or `YYYY/MM/DD`.
 */
export const DateFormatsExample = {
  render: () => DateFormats(),
  name: "Date formats",
  height: "750px",
};

/**
 * The `value` prop sets the date in the input field. The value can be in any format supported by the `date-format` prop, in ISO 8601 date string format (yyyy-mm-dd) or as a JavaScript Date object.
 */
export const ValueExample = {
  render: () => Value(),
  name: "Value",
  height: "540px",
};

/**
 * If no `value` is set, the `open-at-date` prop can be used to specify the date in view when the calendar view is opened. If not set to a value, the calendar will default to showing the current date.
 *
 * The supported formats are the same as for the `value` prop.
 */
export const OpenAtDate = {
  render: () => OpenAt(),
  name: "Open at date",
  height: "540px",
};

/**
 * The first day of the week can be changed by setting the `start-of-week` prop. This is a numeric value where 0 = Sunday, 1 = Monday, etc up to 6 = Saturday.
 */
export const StartOfWeek = {
  render: () => WeekStart(),
  name: "Start of week",
  height: "540px",
};

/**
 * Specific days of the week can be disabled from selection by setting the `disable-days` prop. The value can be set as an array of numeric values where where 0 = Sunday, 1 = Monday, etc up to 6 = Saturday.
 */
export const DisableDaysOfWeek = {
  render: () => WorkingWeek(),
  name: "Disable days of week",
  height: "540px",
};

/**
 * The `max` and `min` props can be used to limit the range of dates available for selection. Values can be in any format supported by the `date-format` prop, in ISO 8601 date string format (yyyy-mm-dd) or as a JavaScript Date object.
 */
export const MinMax = {
  render: () => MaxMin(),
  name: "Min and max",
  height: "540px",
};

/**
 * Dates before today can be disabled with the `disable-past` prop.
 */
export const DisablePastExample = {
  render: () => DisablePast(),
  name: "Disable dates in past",
  height: "540px",
};

/**
 * Dates after today can be disabled with the `disable-future` prop.
 */
export const DisableFutureExample = {
  render: () => DisableFuture(),
  name: "Disable dates in future",
  height: "540px",
};

/**
 * Days outside of the current month in view can be hidden by setting the `show-days-outside-month` prop to `false`.
 */
export const DaysOutsideMonthHidden = {
  render: () => HideOutsideMonth(),
  name: "Days outside month hidden",
  height: "540px",
};

/**
 * The "Go to today" and "Clear" buttons can be hidden from the calendar view by setting the `show-picker-today-button` and `show-picker-clear-button` props to `false`.
 */
export const ButtonsHidden = {
  render: () => HideButtons(),
  name: "Today & clear buttons hidden",
  height: "480px",
};

/**
 * Any prop that accepts a date value can be set to a Javascript Date object. The following example sets the `value`, `max` and `min` props.
 */
export const JavascriptDates = {
  render: () => JSDates(),
  name: "JavaScript dates",
  height: "500px",
};

/**
 * The `IcChange` event is emitted by the date picker when the selected date changes.
 */
export const IcChangeEvent = {
  render: () => IcChangeDate(),
  name: "IcChange event",
  height: "540px",
};

/**
 * The `IcChange` event is emitted by the date picker every time an input field is changed.
 */
export const IcChangeEventEmitDatePartChange = {
  render: () => IcChangeDateEmitDatePartChanges(),
  name: "IcChange event with emitDatePartChange",
  height: "540px",
};

/**
 * Margin added so the calendar opens above the input
 */
export const CalendarOpensAboveInput = {
  render: () => OpenAbove(),
  name: "Calendar opens above input",
  height: "540px",
};

const defaultArgs = {
  ["date-format"]: "DD/MM/YYYY",
  disabled: false,
  ["disable-days"]: [],
  ["disable-days-message"]: "This day is not available",
  ["disable-future"]: false,
  ["disable-future-message"]: "This date is in the future",
  ["disable-past"]: false,
  ["disable-past-message"]: "This date is in the past",
  ["helper-text"]: "Choose a date",
  ["hide-label"]: false,
  ["invalid-date-message"]: "Invalid date",
  label: "When would you like to collect your coffee?",
  max: "",
  min: "",
  required: false,
  ["show-days-outside-month"]: true,
  ["show-picker-clear-button"]: true,
  ["show-picker-today-button"]: true,
  size: "medium",
  ["start-of-week"]: 1,
  theme: "inherit",
  ["validation-status"]: "",
  ["validation-text"]: "",
  value: "",
};

const weekDays = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};

export const Playground = {
  render: (args) =>
    html`<ic-date-picker
      id="playground"
      date-format=${args["date-format"]}
      disabled=${args.disabled}
      disable-days=${JSON.stringify(args["disable-days"])}
      disable-days-message=${args["disable-days-message"]}
      disable-future=${args["disable-future"]}
      disable-future-message=${args["disable-future-message"]}
      disable-past=${args["disable-past"]}
      disable-past-message=${args["disable-past-message"]}
      helper-text=${args["helper-text"]}
      hide-helper-text=${args["hide-helper-text"]}
      hide-label=${args["hide-label"]}
      invalid-date-message=${args["invalid-date-message"]}
      label=${args.label}
      max=${args.max}
      min=${args.min}
      open-at-date=${args["open-at-date"]}
      required=${args.required}
      show-days-outside-month=${args["show-days-outside-month"]}
      show-picker-clear-button=${args["show-picker-clear-button"]}
      show-picker-today-button=${args["show-picker-today-button"]}
      size=${args.size}
      start-of-week=${args["start-of-week"]}
      theme=${args.theme}
      validation-status=${args["validation-status"]}
      validation-text=${args["validation-text"]}
      value=${args.value}
    ></ic-date-picker>`,
  name: "Playground",
  args: defaultArgs,
  argTypes: {
    ["date-format"]: {
      options: ["DD/MM/YYYY", "MM/DD/YYYY", "YYYY/MM/DD"],
      control: {
        type: INLINE_RADIO,
      },
    },
    size: {
      control: INLINE_RADIO,
      options: ["small", "medium", "large"],
    },
    ["start-of-week"]: {
      options: Object.keys(weekDays),
      mapping: weekDays,
      control: {
        type: INLINE_RADIO,
        labels: {
          Sunday: "Sunday",
          Monday: "Monday",
          Tuesday: "Tuesday",
          Wednesday: "Wednesday",
          Thursday: "Thursday",
          Friday: "Friday",
          Saturday: "Saturday",
        },
      },
    },
    theme: {
      control: INLINE_RADIO,
      options: ["inherit", "light", "dark"],
    },
    ["validation-status"]: {
      options: ["", "error", "success", "warning"],
      control: {
        type: INLINE_RADIO,
      },
    },
  },
};
