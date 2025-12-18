/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { IcButton, IcLink, IcTypography } from "@ukic/react";
import React, { useState } from "react";
import readme from "../../../canary-web-components/src/components/ic-time-input/readme.md";
import { IcTimeInput } from "../components";

export default {
  title: "React Components/Time Input",
  component: IcTimeInput,
  parameters: {
    componentAPI: {
      data: readme,
    },
  },
};

/**
 * Use the time input component to manually type in a time in different formats.
 *
 * The input `label` is the only required attribute for time input.
 *
 * Click the 'Component API' tab to view all the available attributes, events and slots for time input.
 *
 * To use the time input component, import `@ukic/canary-web-components` into your application.
 *
 * Times can be added by manually typing into the input or using the up and down arrow keys.
 *
 * To move between hour, minute and second using the keyboard, provide the required values based on the placeholders or use `:`.
 *
 * By default, the helper text displays the time format.
 */
export const Default = {
  render: () => (
    <IcTimeInput
      label="What time would you like to collect your coffee?"
    />
),
  name: "Default",
};

/**
 * Retrieving the time input value via `icTimeChange` returns the time as a Date object.
 *
 * The event returns the Date object once hour, minute and second have been entered.
 */
export const IcTimeChangeEvent = {
  render: () => (
  <IcTimeInput
      label="What time would you like to collect your coffee?"
      onIcTimeChange={(event) => console.log("icTimeChange", event.detail.value)}
    />
),
  name: "icTimeChange event",
};

/**
 * To set a value to the time input, pass the time value in the relevant time format.
 */
export const WithValue = {
  render: () => (
  <IcTimeInput
    id="time-input-default-time-with-value"
    label="What time would you like to collect your coffee?"
    value="13:45:00"
  />
),
  name: "With value",
};

/**
 * The time input also accepts a number of different time formats within the value attribute:
 * - [Date object](#date-object)
 * - [Zulu time](#zulu-time)
 */
export const DateObject = {
  render: () => (
  <IcTimeInput
      id="time-input-default-time-date"
      label="What time would you like to collect your coffee?"
      value={new Date("2025-07-14T15:30:45")}
    />
),
  name: "Date object",
};

export const ZuluTime = {
  render: () => (
      <IcTimeInput
        id="time-input-default-zulu-time"
        label="What time would you like to collect your coffee?"
        value="15:30:45Z"
      />
    ),
  name: "Zulu time",
};

/**
 * To hide the label, set the `hideLabel` attribute to `true`. The required `label` will still be read out by screen readers.
 */
export const HideLabel = {
  render: () => (
  <IcTimeInput
    label="What time would you like to collect your coffee?"
    hideLabel
  />
),
  name: "Hide label",
};

/**
 * To set the time input as a required field, set the `required` attribute to `true`. This will add an asterisk at the end of the time input label.
 */
export const Required = {
  render: () => (<IcTimeInput
    label="What time would you like to collect your coffee?"
    required="true"
  />),
  name: "Required",
};

/**
 * Set the `disabled` attribute to `true` to prevent interaction with the time input.
 */
export const Disabled = {
  render: () => (
  <IcTimeInput
    label="What time would you like to collect your coffee?"
    disabled
  />
),
};

/**
 * The time input is available in three different sizes:
 * - `small`
 * - `medium` (default)
 * - `large`
 */
export const Sizes = {
  render: () => (<>
  <IcTimeInput
      label="What time would you like to collect your coffee?"
      size="small"
    />
    <br />
    <IcTimeInput
      label="What time would you like to collect your coffee?"
    />
    <br />
    <IcTimeInput
      label="What time would you like to collect your coffee?"
      size="large"
    />
    </>
    ),
  name: "Sizes",
};

/**
 * Use the helper text to add additional detail for the time input. Display custom content using the `helper-text` slot.
 */
export const CustomHelperText = {
  render: () => (<>
    <IcTimeInput
      label="What time would you like to collect your coffee?"
      helperText="We will have your order ready for you at this time"
    />
    <br />
    <IcTimeInput label="What time would you like to collect your coffee?">
        <IcTypography variant="caption" slot="helper-text">
        <span>
          For special requests,
          <IcLink href="#">contact us</IcLink> before choosing a time
        </span>
      </IcTypography>
      </IcTimeInput>
      </>),
  name: "Custom helper text",
};

export const HideHelperText = {
  render: () => (
  <IcTimeInput
    label="What time would you like to collect your coffee?"
    helperText="You cannot see me, but you can hear me"
    hideHelperText
  />
  ),
  name: "Hide helper text",
};

/**
 * Validation on time input is set via `validationStatus` and `validationText`.
 *
 * `validationStatus` will set the style of the validation message. `validationStatus` accepts:
 * - `error`
 * - `warning`
 * - `success`
 *
 * `validationStatus` is required for the `validationText` to appear.
 */
export const Validation = {
  render: () => (<>
  <IcTimeInput
      label="What time would you like to collect your coffee?"
      validationStatus="error"
      validationText="There is a coffee shortage forecast for that time. Please choose a different time."
    />
    <br />
    <IcTimeInput
      label="What time would you like to collect your coffee?"
      validationStatus="warning"
      validationText="Please be aware that there may be a coffee shortage at that time."
    />
    <br />
    <IcTimeInput
      label="What time would you like to collect your coffee?"
      validationStatus="success"
      validationText="Your coffee will be available for you to collect at this time."
    />
   </>
   ),
  name: "Custom validation",
};

export const AriaLiveBehaviour = {
  render: () => {
    const [showErrors1, setShowErrors1] = useState(false);
    const [showErrors2, setShowErrors2] = useState(false);

    return (
      <>
        <IcTimeInput
          label="What time would you like to collect your coffee?"
          helperText="Error already set on page load and aria-live overridden as 'assertive'"
          validationStatus={showErrors1 ? "" : "error"}
          validationText={showErrors1 ? "" : "First error message"}
          validationAriaLive="assertive"
        />
        <br />
        <IcTimeInput
          label="What time would you like to collect your coffee?"
          helperText="Error set after page load and aria-live overridden as 'assertive'"
          validationStatus={showErrors1 ? "error" : ""}
          validationText={showErrors1 ? "Second error message" : ""}
          validationAriaLive="assertive"
        />
        <br />
        <IcButton onClick={() => setShowErrors1(!showErrors1)}>
          Toggle errors
        </IcButton>
        <br />
        <br />
        <br />
        <br />
        <IcTimeInput
          label="What time would you like to collect your coffee?"
          helperText="Default aria-live behaviour (i.e. 'polite')"
          validationStatus={showErrors2 ? "error" : ""}
          validationText={showErrors2 ? "Third error message" : ""}
        />
        <br />
        <IcTimeInput
          label="What time would you like to collect your coffee?"
          helperText="Default aria-live behaviour (i.e. 'polite')"
          validationStatus={showErrors2 ? "error" : ""}
          validationText={showErrors2 ? "Fourth error message" : ""}
        />
        <br />
        <IcButton onClick={() => setShowErrors2(!showErrors2)}>
          Toggle errors
        </IcButton>
      </>
    );
  },
  name: "Aria-live behaviour",
}

/**
 * The `IcTimeChange` event is emitted by the time input every time an input field is changed.
 */
export const IcTimeChangeEmitTimePartChanges = {
  render: () => (
  <IcTimeInput
      emitTimePartChange
      label="What time would you like to collect your coffee?"
      onIcTimeChange={(event) => console.log("icTimeChange with time parts", event.detail)}
    />
),
  name: "IcTimeChange with emitTimePartChange",
};

/**
 * Demonstrates the `timePeriod` prop for 12-hour selection.
 */
export const TimePeriod = {
  render: () => (
    <IcTimeInput label="12-hour time" timePeriod="12"/>
  ),
  name: "Time period",
};

export const TimePeriodAMPMToggle = {
  render: () => (
    <IcTimeInput label="12-hour time" timePeriod="12" showAmPmToggle />
  ),
  name: "Time period - with AM/PM toggle",
};

export const IcTimeChangeEmitTimePartChanges12Hour = {
  render: () => (
  <IcTimeInput
      emitTimePartChange
      label="What time would you like to collect your coffee?"
      timePeriod="12"
      showAmPmToggle
      onIcTimeChange={(event) => console.log("icTimeChange with time parts", event.detail)}
    />
),
  name: "IcTimeChange with emitTimePartChange - 12 hour",
};

/**
 * Demonstrates the time format HH:MM.
 */
export const HHMM = {
  render: () => (
  <IcTimeInput
    label="What time would you like to collect your coffee?"
    timeFormat="HH:MM"
  />
),
  name: "Time format HH:MM",
};

/**
 * Demonstrates the time format HH:MM:SS.SSS.
 */
export const Milliseconds = {
  render: () => (
  <IcTimeInput
    label="What time would you like to collect your coffee?"
    timeFormat="HH:MM:SS.SSS"
  />
),
  name: "Time format HH:MM:SS.SSS",
};

export const IcTimeChangeEmitTimePartChangesMilliseconds = {
  render: () => (
  <IcTimeInput
      emitTimePartChange
      label="What time would you like to collect your coffee?"
      timeFormat="HH:MM:SS.SSS"
      onIcTimeChange={(event) => console.log("icTimeChange with time parts", event.detail)}
    />
),
  name: "IcTimeChange with emitTimePartChange - Milliseconds",
};

/**
 * Setting min time allows you to restrict the earliest time that can be selected.
 * The value can be in any format supported as `timeFormat`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.
 */
export const MinTime = {
  render: () => (
  <IcTimeInput
    label="What time would you like to collect your coffee? We are closed before 08:00."
    min="08:00:00"
  />
),
  name: "Min time",
};

/**
 * Setting max time allows you to restrict the latest time that can be selected.
 * The value can be in any format supported as `timeFormat`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.
 */
export const MaxTime = {
  render: () => (
  <IcTimeInput
    label="What time would you like to collect your coffee? We are closed after 16:00."
    max="16:00:00"
  />
),
  name: "Max time",
};

/**
 * To disable specific times in the time input, set the `disableTimes` prop.
 * The `disableTimes` prop accepts an array of time objects or strings.
 * Each time object can have a `start` and `end` property to define a range of disabled times, or it can be a single time string to disable that specific time.
 * The time can be in any format supported as `timeFormat`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.
 */
export const DisableTimes = {
  render: () => (
      <IcTimeInput
        id="time-input-default-disable-time"
        label="What time would you like to collect your coffee? We are closed between 08:00 and 10:00."
        disableTimes={[{ start: "08:00", end: "10:00" }]}
      />
),
  name: "Disable times",
};

/**
 * The time input can be cleared by setting the the value attribute to one of the following:
 * - empty string
 * - `null`
 * - `undefined`
 */
export const WithClearingValue = {
  render: () => {
    const [value, setValue] = useState("08:30:00");
    const handleUpdate = () => {
      setValue("08:30:00");
    };
    const handleClearValue = (value) => {
      setValue(value);
    };
    return (
      <>
        <IcTimeInput
          label="When would you like to collect your coffee?"
          value={value}
        />
        <br />
        <div style={{ display: "flex", gap: "8px" }}>
          <IcButton onClick={() => handleUpdate()}>Update time</IcButton>
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
  disabled: false,
  disableTimes: [{ start: "08:00", end: "10:00" }],
  helperText: "Please enter a time in HH:MM:SS format.",
  hideLabel: false,
  hideHelperText: false,
  invalidTimeMessage: "Please enter a different time.",
  label: "What time would you like to collect your coffee?",
  max: "",
  min: "",
  required: false,
  showClearButton: true,
  showAmPmToggle: false,
  size: "medium",
  theme: "inherit",
  timeFormat: "HH:MM:SS",
  timePeriod: "24",
  value: "",
  validationAriaLive: "polite",
  validationStatus: "no status",
  validationText: ""
};

/**
 * Go to the <ic-link href="/?path=/story/react-components-time-input--playground">separate page for the playground example</ic-link> to view the prop controls.
 */

export const Playground = {
  render: (args) => {
    return (
      <IcTimeInput
        disabled={args.disabled}
        disableTimes={args.disableTimes}
        helperText={args.helperText}
        hideLabel={args.hideLabel}
        hideHelperText={args.hideHelperText}
        invalidTimeMessage={args.invalidTimeMessage}
        label={args.label}
        max={args.max}
        min={args.min}
        required={args.required}
        showAmPmToggle={args.showAmPmToggle}
        showClearButton={args.showClearButton}
        size={args.size}
        theme={args.theme}
        timeFormat={args.timeFormat}
        timePeriod={args.timePeriod}
        validationAriaLive={args.validationAriaLive}
        validationStatus={args.validationStatus === "no status" ? "" : args.validationStatus}
        validationText={args.validationText}
        value={args.value}
      />
    );
  },
  args: defaultArgs,
  argTypes: {
    validationAriaLive: {
      options: ["polite", "assertive", "off"],

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
    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: "inline-radio",
      },
    },
    timeFormat: {
      options: ["HH:MM:SS", "HH:MM", "HH:MM:SS.SSS"],
      control: {
        type: "inline-radio",
      },
    },
    timePeriod: {
      options: ["24", "12"],
      control: {
        type: "inline-radio",
      },
    },
  },
  name: "Playground",
};
