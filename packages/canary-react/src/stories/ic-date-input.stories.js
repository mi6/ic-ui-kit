import { useArgs } from "@storybook/preview-api";
import { IcButton } from "@ukic/react";
import React, { useState } from "react";
import { IcDateInput } from "../components";

const UpdatingHelperText = () => {
  const [helpText, setHelpText] = useState(
    "We will have your order ready for you on this date",
  );
  const updateHelperText = () => {
    setHelpText("this is the new helper text");
  };
  const clearHelperText = (value) => {
    setHelpText("");
  };
  return (
    <>
      <IcDateInput
        label="When would you like to collect your coffee?"
        helperText={helpText}
      />
      <br />
      <div style={{ display: "flex", gap: "8px" }}>
        <IcButton onClick={updateHelperText}>Set helper text</IcButton>
        <IcButton onClick={clearHelperText}>Clear helper text</IcButton>
      </div>
    </>
  );
};

const Form = () => {
  const formSubmit = (e) => {
    console.log(e);
  };
  return (
    <form onSubmit={formSubmit}>
      <IcDateInput
        label="When would you like to collect your coffee?"
        value={new Date("13 March 1951")}
      />
      <IcButton type="submit">Submit</IcButton>
      <IcButton type="reset">Reset</IcButton>
    </form>
  );
};

const ClearDateInput = () => {
  const [value, setValue] = useState("21/01/2001");
  const handleUpdate = () => {
    setValue(new Date("05 May 2005"));
  };
  const handleClearValue = (value) => {
    setValue(value);
  };
  return (
    <>
      <IcDateInput
        label="When would you like to collect your coffee?"
        value={value}
      />
      <br />
      <div style={{ display: "flex", gap: "8px" }}>
        <IcButton onClick={() => handleUpdate()}>Update date</IcButton>
        <IcButton onClick={() => handleClearValue(null)}>Set null</IcButton>
        <IcButton onClick={() => handleClearValue("")}>
          Set Empty String
        </IcButton>
        <IcButton onClick={() => handleClearValue(undefined)}>
          Set undefined
        </IcButton>
      </div>
    </>
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
  required: false,
  showClearButton: true,
  size: "default",
  validationStatus: "",
  validationText: "",
  value: "",
};

export default {
  title: "React Components/Date Input",
  component: IcDateInput,
};

export const Basic = {
  render: () => (
    <>
      <IcDateInput
      label="When would you like to collect your coffee?"
      onIcChange={(ev) => console.log(event.detail.value)}
    />
    <br />
    <IcDateInput
      label="When would you like to collect your coffee?"
      dateFormat="MM/DD/YYYY"
    />
    <br />
    <IcDateInput
      label="When would you like to collect your coffee?"
      dateFormat="YYYY/MM/DD"
    />
    </>
  ),

  name: "Basic",
};

export const OnIcChangeEvent = {
  render: () => (
    <IcDateInput
      label="When would you like to collect your coffee?"
      onIcChange={(ev) => console.log(event.detail.value)}
    />
  ),

  name: "onIcChange event",
};

export const WithValue = {
  render: () => (
    <IcDateInput
      id="date-input-default-date-with-value"
      label="When would you like to collect your coffee?"
      value="21/01/2001"
    />
  ),

  name: "With value",
};

export const DateObject = {
  render: () => (
    <IcDateInput
      label="When would you like to collect your coffee?"
      value={new Date("28 November 2021")}
    />
  ),

  name: "Date object",
};

export const ZuluDatetime = {
  render: () => (
    <IcDateInput
      label="When would you like to collect your coffee?"
      value={new Date("28 November 2021").toISOString()}
    />
  ),

  name: "Zulu datetime",
};

export const WithHyphens = {
  render: () => (
    <IcDateInput
      label="When would you like to collect your coffee?"
      value="25-05-2005"
    />
  ),
  name: "With hyphens",
};

export const EpochTime = {
  render: () => (
    <IcDateInput
      label="When would you like to collect your coffee?"
      value={Date.now()}
    />
  ),
  name: "Epoch time",
};

export const HideLabel = {
  render: () => (
    <IcDateInput
      label="When would you like to collect your coffee?"
      hideLabel
    />
  ),
  name: "Hide label",
};

export const Required = {
  render: () => (
    <IcDateInput label="When would you like to collect your coffee?" required />
  ),
  name: "Required",
};

export const Disabled = {
  render: () => (
    <IcDateInput label="When would you like to collect your coffee?" disabled />
  ),
  name: "Disabled",
};

export const Sizes = {
  render: () => (
    <>
      <IcDateInput
      label="When would you like to collect your coffee?"
      size="small"
    />
    <br />
    <IcDateInput label="When would you like to collect your coffee?" />
    <br />
    <IcDateInput
      label="When would you like to collect your coffee?"
      size="large"
    />
    </>
  ),
  name: "Sizes",
};

export const CustomHelperText = {
  render: () => <UpdatingHelperText />,
  name: "Custom Helper Text",
};

export const HideHelperText = {
  render: () => (
    <IcDateInput
      label="When would you like to collect your coffee?"
      helperText="You cannot see me, but you can hear me"
      hideHelperText="true"
    />
  ),

  name: "Hide Helper Text",
};

export const CustomValidation = {
  render: () => (
    <>
      <IcDateInput
      label="When would you like to collect your coffee?"
      validationStatus="error"
      validationText="There is a coffee shortage forecast for that day. Please choose a different date."
    />
    <br />
    <IcDateInput
      label="When would you like to collect your coffee?"
      validationStatus="warning"
      validationText="Please be aware that there may be a coffee shortage on that day."
    />
    <br />
    <IcDateInput
      label="When would you like to collect your coffee?"
      validationStatus="success"
      validationText="Your coffee will be available for you to collect on this day."
    />
    </>
  ),

  name: "Custom validation",
};

export const DisabledPastDates = {
  render: () => (
    <IcDateInput
      label="When would you like to collect your coffee?"
      disablePast
    />
  ),
  name: "Disabled past dates",
};

export const DisabledFutureDates = {
  render: () => (
    <IcDateInput
      label="When would you like to collect your coffee?"
      disableFuture
    />
  ),
  name: "Disabled future dates",
};

export const MinAndMax = {
  render: () => (
    <IcDateInput
      label="When would you like to collect your coffee?"
      min="02-01-2023"
      max="20/07/2023"
    />
  ),

  name: "Min and max",
};

export const Form_ = {
  render: () => <Form />,
  name: "Form",
};

export const WithClearingValue = {
  render: () => <ClearDateInput />,
  name: "With clearing value",
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
      <IcDateInput
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
  },

  name: "Playground example",
};
