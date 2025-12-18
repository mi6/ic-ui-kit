/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { html } from "lit-html";
import readme from "./readme.md";

export default {
  title: "Web Components/Time Input",
  component: "ic-time-input",
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
  render: () => html`<ic-time-input
    label="What time would you like to collect your coffee?"
  ></ic-time-input>`,
  name: "Default",
};

/**
 * Retrieving the time input value via `icTimeChange` returns the time as a Date object.
 *
 * The event returns the Date object once hour, minute and second have been entered.
 */
export const IcTimeChangeEvent = {
  render: () => html`<ic-time-input
      label="What time would you like to collect your coffee?"
    ></ic-time-input>
    <script>
      var timeInput = document.querySelector("ic-time-input");
      timeInput.addEventListener("icTimeChange", function (event) {
        console.log(event.detail.value, event.detail.utcValue);
      });
    </script>`,
  name: "icTimeChange event",
};

/**
 * To set a value to the time input, pass the time value in the relevant time format.
 */
export const WithValue = {
  render: () => html`<ic-time-input
    id="time-input-default-time-with-value"
    label="What time would you like to collect your coffee?"
    time-format="HH:MM:SS"
    value="13:45:00"
  ></ic-time-input>`,
  name: "With value",
};

/**
 * The time input also accepts a number of different time formats within the value attribute:
 * - [Date object](#date-object)
 * - [Zulu time](#zulu-time)
 */
export const DateObject = {
  render: () => html`<ic-time-input
      id="time-input-default-time-date"
      label="What time would you like to collect your coffee?"
    ></ic-time-input>
    <script>
      var timeInputDate = document.querySelector(
        "#time-input-default-time-date"
      );
      timeInputDate.value = new Date("2025-07-14T15:30:45");
    </script>`,
  name: "Date object",
};

export const ZuluTime = {
  render: () => html`<div>
      <ic-time-input
        id="time-input-default-zulu-time"
        label="What time would you like to collect your coffee?"
      ></ic-time-input>
    </div>
    <script>
      var timeInputDate = document.querySelector(
        "#time-input-default-zulu-time"
      );
      timeInputDate.value = "15:30:45Z";
    </script>`,
  name: "Zulu time",
};

/**
 * To set the time input as a required field, set the `required` attribute to `true`. This will add an asterisk at the end of the time input label.
 */
export const Required = {
  render: () => html`<ic-time-input
    label="What time would you like to collect your coffee?"
    required="true"
  ></ic-time-input>`,
  name: "Required",
};

/**
 * To hide the label, set the `hide-label` attribute to `true`. The required `label` will still be read out by screen readers.
 */
export const HideLabel = {
  render: () => html`<ic-time-input
    label="What time would you like to collect your coffee?"
    hide-label="true"
  ></ic-time-input>`,
  name: "Hide label",
};

/**
 * Set the `disabled` attribute to `true` to prevent interaction with the time input.
 */
export const Disabled = {
  render: () => html`<ic-time-input
    label="What time would you like to collect your coffee?"
    disabled="true"
  ></ic-time-input>`,
};

/**
 * The time input is available in three different sizes:
 * - `small`
 * - `medium` (default)
 * - `large`
 */
export const Sizes = {
  render: () => html`<ic-time-input
      label="What time would you like to collect your coffee?"
      size="small"
    ></ic-time-input>
    <br />
    <ic-time-input
      label="What time would you like to collect your coffee?"
    ></ic-time-input>
    <br />
    <ic-time-input
      label="What time would you like to collect your coffee?"
      size="large"
    ></ic-time-input>`,
  name: "Sizes",
};

/**
 * Use the helper text to add additional detail for the time input. Display custom content using the `helper-text` slot.
 */
export const CustomHelperText = {
  render: () => html`<ic-time-input
      label="What time would you like to collect your coffee?"
      helper-text="We will have your order ready for you at this time"
    ></ic-time-input>
    <br />
    <ic-time-input label="What time would you like to collect your coffee?"
      ><ic-typography variant="caption" slot="helper-text">
        <span>
          For special requests,
          <ic-link href="#">contact us</ic-link> before choosing a time
        </span>
      </ic-typography></ic-time-input
    >`,
  name: "Custom helper text",
};

export const HideHelperText = {
  render: () => html`<ic-time-input
    label="What time would you like to collect your coffee?"
    helper-text="You cannot see me, but you can hear me"
    hide-helper-text="true"
  ></ic-time-input>`,
  name: "Hide helper text",
};

/**
 * Validation on time input is set via `validation-status` and `validation-text`.
 *
 * `validation-status` will set the style of the validation message. `validation-status` accepts:
 * - `error`
 * - `warning`
 * - `success`
 *
 * `validation-status` is required for the `validation-text` to appear.
 */
export const Validation = {
  render: () => html`<ic-time-input
      label="What time would you like to collect your coffee?"
      validation-status="error"
      validation-text="There is a coffee shortage forecast for that time. Please choose a different time."
    ></ic-time-input>
    <br />
    <ic-time-input
      label="What time would you like to collect your coffee?"
      validation-status="warning"
      validation-text="Please be aware that there may be a coffee shortage at that time."
    ></ic-time-input>
    <br />
    <ic-time-input
      label="What time would you like to collect your coffee?"
      validation-status="success"
      validation-text="Your coffee will be available for you to collect at this time."
    ></ic-time-input>`,
  name: "Custom validation",
};

export const AriaLiveBehaviour = {
  render: (args) =>
    html`<ic-time-input
        id="field-1"
        label="What time would you like to collect your coffee?"
        helper-text="Error already set on page load and aria-live overridden as 'assertive'"
        validation-status="error"
        validation-text="First error message"
        validation-aria-live="assertive"
      ></ic-time-input>
      <br />
      <ic-time-input
        id="field-2"
        label="What time would you like to collect your coffee?"
        helper-text="Error set after page load and aria-live overridden as 'assertive'"
        validation-aria-live="assertive"
      ></ic-time-input>
      <br />
      <ic-button id="toggle-btn-1">Toggle errors</ic-button>
      <script>
        let showErrors1 = false;
        const btn1 = document.getElementById("toggle-btn-1");
        const field1 = document.getElementById("field-1");
        const field2 = document.getElementById("field-2");

        btn1.addEventListener("click", () => {
          showErrors1 = !showErrors1;

          field1.setAttribute("validation-status", showErrors1 ? "" : "error");
          field1.setAttribute(
            "validation-text",
            showErrors1 ? "" : "First error message"
          );

          field2.setAttribute("validation-status", showErrors1 ? "error" : "");
          field2.setAttribute(
            "validation-text",
            showErrors1 ? "Second error message" : ""
          );
        });
      </script>
      <br />
      <br />
      <br />
      <br />
      <ic-time-input
        id="field-3"
        label="What time would you like to collect your coffee?"
        helper-text="Default aria-live behaviour (i.e. 'polite')"
      ></ic-time-input>
      <br />
      <ic-time-input
        id="field-4"
        label="What time would you like to collect your coffee?"
        helper-text="Default aria-live behaviour (i.e. 'polite')"
      ></ic-time-input>
      <br />
      <ic-button id="toggle-btn-2">Toggle errors</ic-button>
      <script>
        let showErrors2 = false;
        const btn2 = document.getElementById("toggle-btn-2");
        const field3 = document.getElementById("field-3");
        const field4 = document.getElementById("field-4");

        btn2.addEventListener("click", () => {
          showErrors2 = !showErrors2;

          field3.setAttribute("validation-status", showErrors2 ? "error" : "");
          field3.setAttribute(
            "validation-text",
            showErrors2 ? "Third error message" : ""
          );

          field4.setAttribute("validation-status", showErrors2 ? "error" : "");
          field4.setAttribute(
            "validation-text",
            showErrors2 ? "Fourth error message" : ""
          );
        });
      </script>`,

  name: "Aria-live behaviour",
};

/**
 * The `IcTimeChange` event is emitted by the time input every time an input field is changed.
 */
export const IcTimeChangeEmitTimePartChanges = {
  render: () => html`<ic-time-input
      emit-time-part-change="true"
      label="What time would you like to collect your coffee?"
    ></ic-time-input>
    <script>
      var timeInput = document.querySelector("ic-time-input");
      timeInput.addEventListener("icTimeChange", function (event) {
        console.log("icTimeChange", event.detail);
      });
    </script>`,
  name: "IcTimeChange with emitTimePartChange",
};

/**
 * Demonstrates the `time-period` prop for 12-hour and 24-hour time selection.
 */
export const TimePeriod = {
  render: () => html`
    <ic-time-input label="12-hour time" time-period="12"></ic-time-input>
  `,
  name: "Time period",
};

export const TimePeriodAMPMToggle = {
  render: () => html`
    <ic-time-input
      label="12-hour time"
      time-period="12"
      show-am-pm-toggle="true"
    ></ic-time-input>
  `,
  name: "Time period - with AM/PM toggle",
};

export const IcTimeChangeTimeParts12Hour = {
  render: () => html`<ic-time-input
      emit-time-part-change="true"
      label="What time would you like to collect your coffee?"
      time-period="12"
      show-am-pm-toggle="true"
    ></ic-time-input>
    <script>
      var timeInput = document.querySelector("ic-time-input");
      timeInput.addEventListener("icTimeChange", function (event) {
        console.log("icTimeChange", event.detail);
      });
    </script>`,
  name: "IcTimeChange with emitTimePartChange - 12 hour",
};

/**
 * Demonstrates the time format HH:MM.
 */
export const HHMM = {
  render: () => html`<ic-time-input
    label="What time would you like to collect your coffee?"
    time-format="HH:MM"
  ></ic-time-input>`,
  name: "Time format HH:MM",
};

/**
 * Demonstrates the time format HH:MM:SS.SSS.
 */
export const Milliseconds = {
  render: () => html`<ic-time-input
    label="What time would you like to collect your coffee?"
    time-format="HH:MM:SS.SSS"
  ></ic-time-input>`,
  name: "Time format HH:MM:SS.SSS",
};

export const IcTimeChangeTimePartsMilliseconds = {
  render: () => html`<ic-time-input
      emit-time-part-change="true"
      label="What time would you like to collect your coffee?"
      time-format="HH:MM:SS.SSS"
    ></ic-time-input>
    <script>
      var timeInput = document.querySelector("ic-time-input");
      timeInput.addEventListener("icTimeChange", function (event) {
        console.log("icTimeChange", event.detail);
      });
    </script>`,
  name: "IcTimeChange with emitTimePartChange - Milliseconds",
};

/**
 * Setting min time allows you to restrict the earliest time that can be selected.
 * The value can be in any format supported as `time-format`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.
 */
export const MinTime = {
  render: () => html`<ic-time-input
    label="What time would you like to collect your coffee? We are closed before 08:00"
    min="08:00:00"
  ></ic-time-input>`,
  name: "Min time",
};

/**
 * Setting max time allows you to restrict the latest time that can be selected.
 * The value can be in any format supported as `time-format`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.
 */
export const MaxTime = {
  render: () => html`<ic-time-input
    label="What time would you like to collect your coffee? We are closed after 16:00"
    max="16:00:00"
  ></ic-time-input>`,
  name: "Max time",
};

/**
 * To disable specific times in the time input, set the `disable-times` prop.
 * The `disable-times` prop accepts an array of time objects or strings.
 * Each time object can have a `start` and `end` property to define a range of disabled times, or it can be a single time string to disable that specific time.
 * The time can be in any format supported as `time-format`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.
 */
export const DisableTimes = {
  render: () => html`<div>
      <ic-time-input
        id="time-input-default-disable-time"
        label="What time would you like to collect your coffee? We are closed between 08:00 and 10:00."
      ></ic-time-input>
    </div>
    <script>
      var timeInputDate = document.querySelector(
        "#time-input-default-disable-time"
      );
      timeInputDate.disableTimes = [{ start: "08:00", end: "10:00" }];
    </script>`,
  name: "Disable times",
};

/**
 * The time input can be cleared by setting the the value attribute to one of the following:
 * - empty string
 * - `null`
 * - `undefined`
 */
export const WithClearingValue = {
  render: () => html`<ic-time-input
      id="time-input-clear-value"
      label="What time you like to collect your coffee?"
      value="08:30:00"
    ></ic-time-input>
    <br />
    <ic-button id="update">Update time</ic-button>
    <ic-button id="null-btn">set null</ic-button>
    <ic-button id="empty-btn">set empty string</ic-button>
    <ic-button id="undef-btn">set undefined</ic-button>
    <script>
      var input = document.querySelector("#time-input-clear-value");
      var btn = document.querySelector("#update");
      btn.addEventListener("click", () => {
        input.value = "08:30:00";
      });
      var btn2 = document.querySelector("#null-btn");
      btn2.addEventListener("click", () => {
        input.value = null;
      });
      var btn3 = document.querySelector("#empty-btn");
      btn3.addEventListener("click", () => {
        input.value = "";
      });
      var btn4 = document.querySelector("#undef-btn");
      btn4.addEventListener("click", () => {
        input.value = undefined;
      });
    </script>`,
  name: "With clearing value",
};
