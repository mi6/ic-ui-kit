import { useArgs } from "@storybook/preview-api";
import React, { useState } from "react";
import readme from "../../../canary-web-components/src/components/ic-date-picker/readme.md";
import { IcDatePicker } from "../components";

const disabledDaysOfWeek = [0, 6];

const DatePickerWithIcChange = () => {
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
  size: "default",
  startOfWeek: 1,
  validationStatus: "",
  validationText: "",
  value: "",
};

export default {
  title: "React Components/Date Picker",
  component: IcDatePicker,

  parameters: {
    componentAPI: {
      data: readme,
    },
  },
};

export const Default = {
  render: () => (
    <IcDatePicker label="When would you like to collect your coffee?" />
  ),
  name: "Default",
  height: "540px",
};

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
        style={{
          "--input-width": "500px",
        }}
        label="When would you like to collect your coffee?"
        size="small"
      />
      <IcDatePicker
        style={{
          "--input-width": "500px",
        }}
        label="When would you like to collect your coffee?"
      />
      <IcDatePicker
        style={{
          "--input-width": "500px",
        }}
        label="When would you like to collect your coffee?"
        size="large"
      />
    </div>
  ),

  name: "Max width",
};

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

export const DateFormats = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
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

export const DisableDaysOfWeek = {
  render: () => (
    <IcDatePicker
      label="When would you like to collect your coffee?"
      disableDays={disabledDaysOfWeek}
    />
  ),

  name: "Disable days of week",
  height: "540px",
};

export const MaxMin = {
  render: () => (
    <IcDatePicker
      label="When would you like to collect your coffee?"
      helperText="Choose a date between the 1st and 31st of July"
      min="2024-07-01"
      max="2024-07-31"
      showPickerTodayButton="false"
    />
  ),

  name: "Max & Min",
  height: "500px",
};

export const DisableDatesInPast = {
  render: () => (
    <IcDatePicker
      label="When would you like to collect your coffee?"
      disablePast
    />
  ),
  name: "Disable dates in past",
  height: "540px",
};

export const DisableDatesInFuture = {
  render: () => (
    <IcDatePicker
      label="When would you like to collect your coffee?"
      disableFuture
    />
  ),
  name: "Disable dates in future",
  height: "540px",
};

export const DaysOutsideMonthHidden = {
  render: () => (
    <IcDatePicker
      label="When would you like to collect your coffee?"
      showDaysOutsideMonth="false"
    />
  ),

  name: "Days outside month hidden",
  height: "540px",
};

export const TodayClearButtonsHidden = {
  render: () => (
    <IcDatePicker
      label="When would you like to collect your coffee?"
      showPickerTodayButton="false"
      showPickerClearButton="false"
    />
  ),

  name: "Today & clear buttons hidden",
  height: "480px",
};

export const JavaScriptDates = {
  render: () => (
    <IcDatePicker
      label="When would you like to collect your coffee?"
      min={new Date(2024, 6, 1)}
      max={new Date(2024, 6, 31)}
      value={new Date(2024, 6, 15)}
      helperText="Choose a date between the 1st and 31st of July"
      showPickerTodayButton="false"
    />
  ),

  name: "JavaScript dates",
  height: "500px",
};

export const IcChangeEvent = {
  render: () => <DatePickerWithIcChange />,
  name: "IcChange event",
  height: "540px",
};

export const PlaygroundExample = {
  render: (args) => {
    const [{ value }, updateArgs] = useArgs();

    const updateDate = (ev) => {
      const date = ev.detail.value;
      let formattedDate;
      date === null
        ? (formattedDate = "")
        : (formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`);

      updateArgs({
        value: formattedDate,
      });
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
        validationStatus={args.validationStatus}
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
        type: "radio",
      },
    },

    validationStatus: {
      options: ["", "error", "success", "warning"],

      control: {
        type: "radio",
      },
    },

    size: {
      options: ["small", "default", "large"],

      control: {
        type: "radio",
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
  },

  name: "Playground example",
};
