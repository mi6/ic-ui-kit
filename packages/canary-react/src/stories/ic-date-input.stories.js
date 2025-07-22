/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useArgs } from "@storybook/preview-api";
import { IcButton, IcLink, IcTypography } from "@ukic/react";
import React, { useState } from "react";
import readme from "../../../canary-web-components/src/components/ic-date-input/readme.md";
import { IcDateInput } from "../components";

export default {
  title: "React Components/Date Input",
  component: IcDateInput,
  parameters: {
    componentAPI: {
      data: readme,
    },
  },
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
 * Dates can be added by manually typing into the input or using the up and down arrow keys.
 *
 * To move between day, month and year using the keyboard, provide the required values based on the placeholders or use `/` or `-`.
 *
 * By default, the helper text displays the date format.
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
export const IcChangeEvent = {
  render: () => (
    <IcDateInput
      label="When would you like to collect your coffee?"
      onIcChange={(ev) => console.log(ev.detail.value, ev.detail.utcValue)}
    />
  ),
  name: "onIcChange event",
};

/**
 * To set a value to the date input, pass the date value in the relevant date format.
 *
 * The date input also accepts a number of different date formats within the value prop:
 * - [Date object](#date-object)
 * - [Zulu datetime](#zulu-datetime)
 * - [With hyphens (DD-MM-YYYY)](#with-hyphens)
 * - [Epoch time](#epoch-time)
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

- `small`
- `medium` (default)
- `large`
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
 * Use the helper text to add additional detail for the date input. Display custom content using the `helper-text` slot.
 */
export const HelperText = {
  render: () => (
    <>
    <IcDateInput
      label="When would you like to collect your coffee?"
      helperText="We will have your order ready for you on this date"
    />
    <br />
    <IcDateInput
      label="When would you like to collect your coffee?"
    >
      <IcTypography variant="caption" slot="helper-text">
        <span>
          For special requests, <IcLink href="#" >contact us</IcLink> before choosing a date
        </span>
      </IcTypography>
    </IcDateInput>
    </>
  ),
  name: "Custom helper text",
};

export const HideHelperText = {
  render: () => (
    <IcDateInput
      label="When would you like to collect your coffee?"
      helperText="You cannot see me, but you can hear me"
      hideHelperText="true"
    />
  ),
  name: "Hide helper text",
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
 * - [Date string with hyphens](#with-hyphens) (i.e. DD-MM-YYYY)
 * - [Date object](#date-object)
 * - [Zulu datetime](#zulu-datetime)
 *
 * Enter a date after 2nd Jan 2023 and before 20th July to view the validation message.
 *
 * In this code snippet, the min and max have been set using two different date formats to demonstrate its flexibility.
 */
export const MinMax = {
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
export const Form = {
  render: () => {
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
  },
};

/**
 * The date input can be cleared by setting the the value attribute to one of the following:
 * - empty string
 * - `null`
 * - `undefined`
 */
export const WithClearingValue = {
  render: () => {
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
  },
  name: "With clearing value",
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
  size: "medium",
  theme: "inherit",
  validationStatus: "",
  validationText: "",
  value: "",
};

/**
 * Go to the <ic-link href="/?path=/story/react-components-date-input--playground">separate page for the playground example</ic-link> to view the prop controls.
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
        required={args.required}
        showClearButton={args.showClearButton}
        size={args.size}
        startOfWeek={args.startOfWeek}
        theme={args.theme}
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
        type: "inline-radio",
      },
    },
    validationStatus: {
      options: ["", "error", "success", "warning"],
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
    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: "inline-radio",
      },
    },
  },
  name: "Playground",
};
