/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-no-bind */
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
  const clearHelperText = () => {
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

/**
 * Use the date input component to manually type in a date in different formats.
 * 
 * The input `label` is the only required prop for date input.
 * 
 * Click the 'Component API' tab to view all the available props, events and slots for date input.
 * 
 * To use the date input component, import `@ukic/canary-react` into your application.
 * 
 * Each example below demonstrates the date input in three different date formats:
 * - DD/MM/YYYY (Default date format)
 * - MM/DD/YYYY
 * - YYYY/MM/DD
 * 
 * By default, the helper text displays the date format.
 * 
 * Dates can be added by manually typing into the input or using the up and down arrow keys.
 * 
 * To move between day, month and year using the keyboard, provide the required values based on the placeholders or use `/` or `-`.
 */
export const Basic = {
  render: () => (
    <>
      <IcDateInput
      label="When would you like to collect your coffee?"
      onIcChange={(ev) => console.log(ev.detail.value)}
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

/**
 * Retrieving the date input value via `onIcChange` returns the date as a Date object.
 * 
 * The event returns the Date object when day, month and year have been entered.
 */
export const OnIcChangeEvent = {
  render: () => (
    <IcDateInput
      label="When would you like to collect your coffee?"
      onIcChange={(ev) => console.log(ev.detail.value)}
    />
  ),

  name: "onIcChange event",
};

/**
 * To set a value to the date input, pass the date value in the relevant date format.
 */
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

/**
 * The date input also accepts a number of different date formats within the value prop:
 * - [Date object](#date-object)
 * - [Zulu datetime](#zulu-datetime)
 * - [With hyphens (DD-MM-YYYY)](#with-hyphens)
 * - [Epoch time](#epoch-time)
 */
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

/**
 * To hide the label, set the `hideLabel` prop to `true`. The required `label` will still be read out by screen readers.
 */
export const HideLabel = {
  render: () => (
    <IcDateInput
      label="When would you like to collect your coffee?"
      hideLabel
    />
  ),
  name: "Hide label",
};

/**
 * To set the date input as a required field, add the `required` prop. This will add an asterisk at the end of the date input label.
 */
export const Required = {
  render: () => (
    <IcDateInput label="When would you like to collect your coffee?" required />
  ),
  name: "Required",
};

/**
 * Set the `disabled`, to prevent interaction with the date input.
 */
export const Disabled = {
  render: () => (
    <IcDateInput label="When would you like to collect your coffee?" disabled />
  ),
  name: "Disabled",
};

/**
 * The date input is available in three different sizes:
 * - `small`
 * - `default`
 * - `large`
 */
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

/**
 * Use the helper text to add additional detail for the date input.
 */
export const CustomHelperText = {
  render: () => <UpdatingHelperText />,
  name: "Custom Helper Text",
};

/**
 * Hide visible helper text using the `hideHelperText` prop.
 */
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

/**
 * Validation on date input is set via `validationStatus` and `validationText`.
 * 
 * `validationStatus` will set the style of the validation message. `validationStatus` accepts:
 * - `error`
 * - `warning`
 * - `success`
 * 
 * `validationStatus` is required for the `validationText` to appear.
 */
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

/**
 * Validation can be set on the date input if a date in the past has been set by setting the `disablePast` prop.
 * 
 * Enter a date in the past to view the validation message.
 */
export const DisabledPastDates = {
  render: () => (
    <IcDateInput
      label="When would you like to collect your coffee?"
      disablePast
    />
  ),
  name: "Disabled past dates",
};

/**
 * Validation can be set on the date input if a date in the future has been set by setting the `disableFuture` prop.
 * 
 * Enter a date in the future to view the validation message.
 */
export const DisabledFutureDates = {
  render: () => (
    <IcDateInput
      label="When would you like to collect your coffee?"
      disableFuture
    />
  ),
  name: "Disabled future dates",
};

/**
 * It is possible to set a min and max date range. If a date is set and it is before the min or after the max date, a validation error will appear.
 * 
 * The min or max dates accept the following date formats:
 * - [Date string](#with-value) (with slashes i.e. DD/MM/YYYY)
 * - [Date string](#with-hyphens) (with hyphens i.e. DD-MM-YYYY)
 * - [Date object](#date-object)
 * - [Zulu datetime](#zulu-datetime)
 * 
 * `min` and `max` can be set to different date formats if desired.
 * 
 * Enter a date after 2nd Jan 2023 and before 20th July to view the validation message.
 */
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

/**
 * When the date input component is used within a form, the date value is returned as an ISO string.
 * 
 * The value is console logged to the browser dev tools.
 */
export const Form_ = {
  render: () => <Form />,
  name: "Form",
};

/**
 * The date input can be cleared by setting the the value attribute to one of the following:
 * - empty string
 * - `null`
 * - `undefined`
 */
export const WithClearingValue = {
  render: () => <ClearDateInput />,
  name: "With clearing value",
};

/**
 * Go to the <ic-link href="/?path=/story/react-components-date-input--playground-example">separate page for the playground example</ic-link> to view the prop controls.
 */
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
