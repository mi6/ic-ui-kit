/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { IcButton } from "@ukic/react";
import React, { useState } from "react";
import readme from "../../../canary-web-components/src/components/ic-time-input/readme.md";
import { IcTimeSelector } from "../components";

export default {
  title: "React Components/Time Selector",
  component: IcTimeSelector,
  parameters: {
    componentAPI: {
      data: readme,
    },
  },
};

/**
 * Use the time selector component to manually select a time in different formats.
 *
 * Click the 'Component API' tab to view all the available attributes, events and slots for time selector.
 *
 * To use the time selector component, import `@ukic/canary-web-components` into your application.
 *
 * Times can be selected by scrolling through each column or using the up and down arrow keys.
 *
 * To move between hour, minute and second using the keyboard, provide the required values based on the placeholders or use `:`.
 *
 */
export const Default = {
  render: () => (
    <IcTimeSelector />
),
  name: "Default",
};

/**
 * Retrieving the time selector value via `icChange` returns the time as a Date object.
 *
 * The event returns the Date object once hour, minute and second have been selected by clicking the tick icon button.
 */
export const IcChangeEvent = {
  render: () => (
  <IcTimeSelector
      onIcChange={(event) => console.log("icChange", event.detail.value)}
    />
),
  name: "icChange event",
};

/**
 * To set a value to the time selector, pass the time value in the relevant time format.
 */
export const WithValue = {
  render: () => (
  <IcTimeSelector
    value="13:45:00"
  />
),
  name: "With value",
};

/**
 * The time selector also accepts a number of different time formats within the value attribute:
 * - [Date object](#date-object)
 * - [Zulu time](#zulu-time)
 */
export const DateObject = {
  render: () => (
  <IcTimeSelector
      value={new Date("2025-07-14T15:30:45")}
    />
),
  name: "Date object",
};

export const ZuluTime = {
  render: () => (
      <IcTimeSelector
        value="15:30:45Z"
      />
    ),
  name: "Zulu time",
};

/**
 * Demonstrates the `timePeriod` prop for 12-hour selection.
 */
export const TimePeriod = {
  render: () => (
    <IcTimeSelector timePeriod="12"/>
  ),
  name: "Time period",
};

export const IcChangeEventTimePeriod = {
  render: () => (
  <IcTimeSelector
      timePeriod="12"
      onIcChange={(event) => console.log("icChange", event.detail)}
    />
),
  name: "icChange event - with time period",
};

export const DefaultValue12Hour = {
  render: () => (
  <IcTimeSelector
    value="14:30:40"
    timePeriod="12"
  />
),
  name: "Default value - 12 hour",
};

/**
 * Demonstrates the time format HH:MM.
 */
export const HHMM = {
  render: () => (
  <IcTimeSelector
    timeFormat="HH:MM"
  />
),
  name: "Time format HH:MM",
};

export const DefaultValueHHMM = {
  render: () => (
  <IcTimeSelector
    value="14:30"
    timeFormat="HH:MM"
  />
),
  name: "Default value - Time format HH:MM",
};

/**
 * Setting min time allows you to restrict the earliest time that can be selected.
 * The value can be in any format supported as `timeFormat`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.
 */
export const MinTime = {
  render: () => (
  <IcTimeSelector
    min="09:00:00"
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
  <IcTimeSelector
    max="18:00:00"
  />
),
  name: "Max time",
};

/**
 * To disable specific times in the time selector, set the `disableTimes` prop.
 * The `disableTimes` prop accepts an array of time objects or strings.
 * Each time object can have a `start` and `end` property to define a range of disabled times, or it can be a single time string to disable that specific time.
 * The time can be in any format supported as `timeFormat`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.
 */
export const DisableTimes = {
  render: () => (
      <IcTimeSelector
        disableTimes={[{ start: "08:00", end: "10:00" }]}
      />
),
  name: "Disable times",
};

/**
 * Demonstrates the size options for the time selector component.
 */
export const Small = {
  render: () => (
    <IcTimeSelector size="small" timePeriod="12" />
  ),
  name: "Small",
};

export const Large = {
  render: () => (
    <IcTimeSelector size="large" timePeriod="12" />
  ),
  name: "Large",
};

/**
 * The time selector can be cleared by setting the the value attribute to one of the following:
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
        <IcTimeSelector
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

export const UpdatingValue = {
  render: () => {
    const [value, setValue] = useState("08:30:00");
    const handleReset = () => {
      setValue("08:30:00");
    };
    const handleNewValue = () => {
      setValue("10:45:15");
    }
    return (
      <>
        <IcTimeSelector
          value={value}
        />
        <br />
        <div style={{ display: "flex", gap: "8px" }}>
          <IcButton onClick={() => handleReset()}>Reset time</IcButton>
          <IcButton onClick={() => handleNewValue()}>Set new time</IcButton>
        </div>
      </>
    );
  },
  name: "Updating value",
};

const defaultArgs = {
  disableTimes: [{ start: "08:00", end: "10:00" }],
  max: "",
  min: "",
  size: "medium",
  theme: "inherit",
  timeFormat: "HH:MM:SS",
  timePeriod: "24",
  value: "12:00:00",
};

/**
 * Go to the <ic-link href="/?path=/story/react-components-time-selector--playground">separate page for the playground example</ic-link> to view the prop controls.
 */

export const Playground = {
  render: (args) => {
    return (
      <IcTimeSelector
        disableTimes={args.disableTimes}
        max={args.max}
        min={args.min}
        size={args.size}
        theme={args.theme}
        timeFormat={args.timeFormat}
        timePeriod={args.timePeriod}
        value={args.value}
      />
    );
  },
  args: defaultArgs,
  argTypes: {
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
      options: ["HH:MM:SS", "HH:MM"],
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
