/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useArgs } from "@storybook/preview-api";
import {
  IcLink,
  IcTypography,
} from "@ukic/react";
import React, { useState } from "react";
import readme from "../../../canary-web-components/src/components/ic-date-picker/readme.md";
import { IcDatePicker } from "../components";

export default {
  title: "React Components/Date Picker",
  component: IcDatePicker,
  parameters: {
    componentAPI: {
      data: readme,
    },
  },
};

/**
 * Use a date picker to select a single date where visualising that date could be useful.
 *
 * There is one required prop for a date picker:
 * - label: `string`
 *
 * The default date picker uses the date format of `DD/MM/YYYY`.
 *
 * Click the 'Component API' tab to view all the available props and events for date pickers.
 *
 * To use the date picker component, import `@ukic/canary-react` into your application.
 *
 */
export const Default = {
  render: () => (
    <IcDatePicker label="When would you like to collect your coffee?" />
  ),
  name: "Default",
  height: "540px",
};

/**
 * Set the size of the date picker by using the `size` prop. This prop takes the values `small`, `medium` or `large`. Depending on the chosen size, the prop will apply styling to increase or decrease the amount of spacing within the component.
 */
export const Sizes = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        height: "790px",
      }}
    >
      <IcDatePicker
        label="When would you like to collect your coffee?"
        size="small"
      />
      <IcDatePicker label="When would you like to collect your coffee?" />
      <IcDatePicker
        label="When would you like to collect your coffee?"
        size="large"
      />
    </div>
  ),
  name: "Sizes",
};

/**
 * Set the size of the input field by using the `--input-width` CSS custom property. The picker will grow, but not exceed its maximum supported width.
 */
export const MaxWidth = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        height: "790px",
      }}
    >
      <IcDatePicker
        style={{ "--input-width": "500px" }}
        label="When would you like to collect your coffee?"
        size="small"
      />
      <IcDatePicker
        style={{ "--input-width": "500px" }}
        label="When would you like to collect your coffee?"
      />
      <IcDatePicker
        style={{ "--input-width": "500px" }}
        label="When would you like to collect your coffee?"
        size="large"
      />
    </div>
  ),
  name: "Max width",
};

/**
 * Use the helper text to add additional detail for the date input. Display custom content using the `helper-text` slot.
 */
export const HelperText = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        height: "790px",
      }}
    >
      <IcDatePicker
        label="When would you like to collect your coffee?"
        helperText="We will have your order ready for you on this date"
      />
      <IcDatePicker
        label="When would you like to collect your coffee?"
      >
        <IcTypography variant="caption" slot="helper-text">
          <span>
            For special requests, <IcLink href="#" >contact us</IcLink> before choosing a date
          </span>
        </IcTypography>
      </IcDatePicker>
    </div>
  ),
  name: "Custom helper text",
  height: "540px",
};

/**
 * Disable the date picker and prevent user interaction by using the `disabled` prop.
 */
export const Disabled = {
  render: () => (
    <IcDatePicker
      label="When would you like to collect your coffee?"
      disabled
    />
  ),
  name: "Disabled",
  height: "100px",
};

/**
 * The `dateFormat` prop determines how dates are displayed. The supported formats are `DD/MM/YYYY`, `MM/DD/YYYY` or `YYYY/MM/DD`.
 */
export const DateFormats = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <IcDatePicker label="When would you like to collect your coffee?" />
      <IcDatePicker
        label="When would you like to collect your coffee?"
        dateFormat="MM/DD/YYYY"
      />
      <IcDatePicker
        label="When would you like to collect your coffee?"
        dateFormat="YYYY/MM/DD"
      />
    </div>
  ),
  name: "Date formats",
  height: "760px",
};

/**
 * The `value` prop sets the date in the input field. The value can be in any format supported by the `dateFormat` prop, in ISO 8601 date string format (yyyy-mm-dd) or as a JavaScript Date object.
 */
export const Value = {
  render: () => (
    <IcDatePicker
      label="When would you like to collect your coffee?"
      value="01/01/2024"
    />
  ),
  name: "Value",
  height: "540px",
};

/**
 * If no `value` is set, the `openAtDate` prop can be used to specify the date in view when the calendar view is opened. If not set to a value, the calendar will default to showing the current date.
 *
 * The supported formats are the same as for the `value` prop.
 */
export const OpenAtDate = {
  render: () => (
    <IcDatePicker
      label="When would you like to collect your coffee?"
      helperText="The calendar will open showing 25th December 2024, if no date selected"
      openAtDate="2024-12-25"
    />
  ),
  name: "Open at date",
  height: "540px",
};

/**
 * The first day of the week can be changed by setting the `startOfWeek` prop. This is a numeric value where 0 = Sunday, 1 = Monday, etc up to 6 = Saturday.
 */
export const StartOfWeek = {
  render: () => (
    <IcDatePicker
      label="When would you like to collect your coffee?"
      startOfWeek="0"
    />
  ),
  name: "Start of week",
  height: "540px",
};

/**
 * Specific days of the week can be disabled from selection by setting the `disableDays` prop. The value can be set as an array of numeric values where where 0 = Sunday, 1 = Monday, etc up to 6 = Saturday.
 */
export const DisableDaysOfWeek = {
  render: () => (
    <IcDatePicker
      label="When would you like to collect your coffee?"
      disableDays={[0, 6]}
    />
  ),
  name: "Disable days of week",
  height: "540px",
};

/**
 * The `max` and `min` props can be used to limit the range of dates available for selection. Values can be in any format supported by the `dateFormat` prop, in ISO 8601 date string format (yyyy-mm-dd) or as a JavaScript Date object.
 */
export const MinMax = {
  render: () => (
    <IcDatePicker
      label="When would you like to collect your coffee?"
      helperText="Choose a date between the 1st and 31st of July"
      min="2024-07-01"
      max="2024-07-31"
      showPickerTodayButton={false}
    />
  ),
  name: "Max and min",
  height: "500px",
};

/**
 * Dates before today can be disabled with the `disablePast` prop.
 */
export const DisablePastDates = {
  render: () => (
    <IcDatePicker
      label="When would you like to collect your coffee?"
      disablePast
    />
  ),
  name: "Disable dates in past",
  height: "540px",
};

/**
 * Dates after today can be disabled with the `disableFuture` prop.
 */
export const DisableFutureDates = {
  render: () => (
    <IcDatePicker
      label="When would you like to collect your coffee?"
      disableFuture
    />
  ),
  name: "Disable dates in future",
  height: "540px",
};

/**
 * Days outside of the current month in view can be hidden by setting the `showDaysOutsideMonth` prop to `false`.
 */
export const DatesOutsideMonthHidden = {
  render: () => (
    <IcDatePicker
      label="When would you like to collect your coffee?"
      showDaysOutsideMonth={false}
    />
  ),
  name: "Days outside month hidden",
  height: "540px",
};

/**
 * The "Go to today" and "Clear" buttons can be hidden from the calendar view by setting the `showPickerTodayButton` and `showPickerClearButton` props to `false`.
 */
export const TodayClearButtonsHidden = {
  render: () => (
    <IcDatePicker
      label="When would you like to collect your coffee?"
      showPickerTodayButton={false}
      showPickerClearButton={false}
    />
  ),
  name: "Today and clear buttons hidden",
  height: "480px",
};

/**
 * Any prop that accepts a date value can be set to a Javascript Date object. The following example sets the `value`, `max` and `min` props.
 */
export const JavaScriptDates = {
  render: () => (
    <IcDatePicker
      label="When would you like to collect your coffee?"
      min={new Date(2024, 6, 1)}
      max={new Date(2024, 6, 31)}
      value={new Date(2024, 6, 15)}
      helperText="Choose a date between the 1st and 31st of July"
      showPickerTodayButton={false}
    />
  ),
  name: "JavaScript dates",
  height: "500px",
};

/**
 * The `IcChange` event is emitted by the date picker when the selected date changes.
 */
export const IcChangeEvent = {
  render: () => {
    const [selectedDate, setSelectedDate] = useState();
    const [value, setValue] = useState();
    const dateChangedHandler = (event) => {
      setValue(event.detail.value);
      setSelectedDate(event.detail.value);
    };
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
        <IcDatePicker
          label="When would you like to collect your coffee?"
          onIcChange={dateChangedHandler}
          value={value}
        />
        <span>{`Selected date: ${selectedDate}`}</span>
      </div>
    );
  },
  name: "IcChange event",
  height: "540px",
};

const defaultArgs = {
  dateFormat: "DD/MM/YYYY",
  disabled: false,
  disableDays: [],
  disableDaysMessage: "This day is not available",
  disableFuture: false,
  disableFutureMessage: "This date is in the future",
  disablePast: false,
  disablePastMessage: "This date is in the past",
  helperText: "Choose a date",
  hideHelperText: false,
  hideLabel: false,
  invalidDateMessage: "Invalid date",
  label: "When would you like to collect your coffee?",
  max: "",
  min: "",
  openAtDate: "",
  required: false,
  showDaysOutsideMonth: true,
  showPickerClearButton: true,
  showPickerTodayButton: true,
  size: "medium",
  startOfWeek: 1,
  theme: "inherit",
  validationStatus: "no status",
  validationText: "",
  value: "",
};

/**
 * Go to the <ic-link href="/?path=/story/react-components-date-picker--playground">separate page for the playground example</ic-link> to view the prop controls.
 */
export const Playground = {
  render: (args) => {
    const [{ value }, updateArgs] = useArgs();

    const updateDate = (ev) => {
      const date = ev.detail.value;
      let formattedDate;
      date === null
        ? (formattedDate = "")
        : (formattedDate = `${date.getDate()}-${
            date.getMonth() + 1
          }-${date.getFullYear()}`);
      updateArgs({ value: formattedDate });
    };

    return (
      <IcDatePicker
        dateFormat={args.dateFormat}
        disabled={args.disabled}
        disableDays={args.disableDays}
        disableDaysMessage={args.disableDaysMessage}
        disableFuture={args.disableFuture}
        disableFutureMessage={args.disableFutureMessage}
        disablePast={args.disablePast}
        disablePastMessage={args.disablePastMessage}
        helperText={args.helperText}
        hideHelperText={args.hideHelperText}
        hideLabel={args.hideLabel}
        invalidDateMessage={args.invalidDateMessage}
        label={args.label}
        max={args.max}
        min={args.min}
        openAtDate={args.openAtDate}
        required={args.required}
        showDaysOutsideMonth={args.showDaysOutsideMonth}
        showPickerClearButton={args.showPickerClearButton}
        showPickerTodayButton={args.showPickerTodayButton}
        size={args.size}
        startOfWeek={args.startOfWeek}
        theme={args.theme}
        validationStatus={args.validationStatus === "no status" ? "" : args.validationStatus}
        validationText={args.validationText}
        value={value}
        onIcChange={updateDate}
      />
    );
  },
  args: defaultArgs,
  argTypes: {
    dateFormat: {
      options: ["DD/MM/YYYY", "MM/DD/YYYY", "YYYY/MM/DD"],
      control: {
        type: "inline-radio",
      },
    },
    validationStatus: {
      options: ["no status", "error", "success", "warning"],
      control: {
        type: "inline-radio",
      },
    },
    size: {
      options: ["small", "medium", "large"],
      control: {
        type: "inline-radio",
      },
    },
    startOfWeek: {
      options: [0, 1, 2, 3, 4, 5, 6],
      control: {
        type: "select",
      },
    },
    openAtDate: {
      control: {
        type: "text",
      },
    },
    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: "inline-radio",
      },
    },
  },
  name: "Playground",
};
