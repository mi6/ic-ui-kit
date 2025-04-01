/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { html } from "lit-html";
import readme from "./readme.md";
import { createDateInputForm } from "./story-data";

export default {
  title: "Web Components/Date Input",
  component: "ic-date-input",
  parameters: {
    componentAPI: {
      data: readme,
    },
  },
};

/**
 * Use the date input component to manually type in a date in different formats.
 *
 * The input `label` is the only required attribute for date input.
 *
 * Click the 'Component API' tab to view all the available attributes, events and slots for date input.
 *
 * To use the date input component, import `@ukic/canary-web-components` into your application.
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
export const Default = {
  render: () => html`<ic-date-input
      label="When would you like to collect your coffee?"
    ></ic-date-input>
    <script>
      var dateInput = document.querySelector("ic-date-input");
      {
        dateInput.addEventListener("icChange", function (event) {
          console.log("icChange", event.detail.value);
        });
      }
    </script>
    <br />
    <br />
    <ic-date-input
      label="When would you like to collect your coffee?"
      date-format="MM/DD/YYYY"
    ></ic-date-input>
    <br />
    <br />
    <ic-date-input
      label="When would you like to collect your coffee?"
      date-format="YYYY/MM/DD"
    ></ic-date-input>`,
  name: "Default",
};

/**
 * Retrieving the date input value via `icChange` returns the date as a Date object.
 *
 * The event returns the Date object once day, month and year have been entered.
 */
export const IcChangeEvent = {
  render: () => html`<ic-date-input
      label="When would you like to collect your coffee?"
    ></ic-date-input>
    <script>
      var dateInput = document.querySelector("ic-date-input");
      dateInput.addEventListener("icChange", function (event) {
        console.log(event.detail.value);
      });
    </script>`,
  name: "icChange event",
};

/**
 * To set a value to the date input, pass the date value in the relevant date format.
 */
export const WithValue = {
  render: () => html`<ic-date-input
    id="date-input-default-date-with-value"
    label="When would you like to collect your coffee?"
    date-format="DD/MM/YYYY"
    value="21/01/2001"
  ></ic-date-input>`,
  name: "With value",
};

/**
 * The date input also accepts a number of different date formats within the value attribute:
 * - Date object
 * - [Zulu datetime](#zulu-datetime)
 * - [With hyphens (DD-MM-YYYY)](#with-hyphens)
 * - [Epoch time](#epoch-time)
 */
export const DateObject = {
  render: () => html`<ic-date-input
      id="date-input-default-date-date"
      label="When would you like to collect your coffee?"
    ></ic-date-input>
    <script>
      var dateInputDate = document.querySelector(
        "#date-input-default-date-date"
      );
      dateInputDate.value = new Date("28 November 2021");
    </script>`,
  name: "Date object",
};

export const ZuluDatetime = {
  render: () => html`<div>
      <ic-date-input
        id="date-input-default-zulu-date"
        label="When would you like to collect your coffee?"
      ></ic-date-input>
    </div>
    <script>
      var dateInputDate = document.querySelector(
        "#date-input-default-zulu-date"
      );
      dateInputDate.value = new Date("1 May 1990").toISOString();
    </script>`,
  name: "Zulu datetime",
};

export const WithHyphens = {
  render: () => html`<ic-date-input
      id="date-input-default-date-string"
      label="When would you like to collect your coffee?"
    ></ic-date-input>
    <script>
      var dateInputString = document.querySelector(
        "#date-input-default-date-string"
      );
      dateInputString.value = "25-05-2005";
    </script>`,
  name: "With hyphens",
};

export const EpochTime = {
  render: () => html`<ic-date-input
      id="date-input-default-date-epoch"
      label="When would you like to collect your coffee?"
    ></ic-date-input>
    <script>
      var dateInputString = document.querySelector(
        "#date-input-default-date-epoch"
      );
      dateInputString.value = Date.now();
    </script>`,
  name: "Epoch time",
};

/**
 * To set the date input as a required field, set the `required` attribute to `true`. This will add an asterisk at the end of the date input label.
 */
export const Required = {
  render: () => html`<ic-date-input
    label="When would you like to collect your coffee?"
    required="true"
  ></ic-date-input>`,
  name: "Required",
};

/**
 * To hide the label, set the `hide-label` attribute to `true`. The required `label` will still be read out by screen readers.
 */
export const HideLabel = {
  render: () => html`<ic-date-input
    label="When would you like to collect your coffee?"
    hide-label="true"
  ></ic-date-input>`,
  name: "Hide label",
};

/**
 * Set the `disabled` attribute to `true` to prevent interaction with the date input.
 */
export const Disabled = {
  render: () => html`<ic-date-input
    label="When would you like to collect your coffee?"
    disabled="true"
  ></ic-date-input>`,
};

/**
 * The date input is available in three different sizes:
 * - `small`
 * - `medium` (default)
 * - `large`
 */
export const Sizes = {
  render: () => html`<ic-date-input
      label="When would you like to collect your coffee?"
      size="small"
    ></ic-date-input>
    <br />
    <br />
    <ic-date-input
      label="When would you like to collect your coffee?"
    ></ic-date-input>
    <br />
    <br />
    <ic-date-input
      label="When would you like to collect your coffee?"
      size="large"
    ></ic-date-input>`,
  name: "Sizes",
};

/**
 * Use the helper text to add additional detail for the date input.
 */
export const CustomHelperText = {
  render: () => html`<ic-date-input
    label="When would you like to collect your coffee?"
    helper-text="We will have your order ready for you on this date"
  ></ic-date-input>`,
  name: "Custom helper text",
};

export const HideHelperText = {
  render: () => html`<ic-date-input
    label="When would you like to collect your coffee?"
    helper-text="You cannot see me, but you can hear me"
    hide-helper-text="true"
  ></ic-date-input>`,
  name: "Hide helper text",
};

/**
 * Validation on date input is set via `validation-status` and `validation-text`.
 *
 * `validation-status` will set the style of the validation message. `validation-status` accepts:
 * - `error`
 * - `warning`
 * - `success`
 *
 * `validation-status` is required for the `validation-text` to appear.
 */
export const Validation = {
  render: () => html`<ic-date-input
      label="When would you like to collect your coffee?"
      validation-status="error"
      validation-text="There is a coffee shortage forecast for that day. Please choose a different date."
    ></ic-date-input>
    <br />
    <br />
    <ic-date-input
      label="When would you like to collect your coffee?"
      validation-status="warning"
      validation-text="Please be aware that there may be a coffee shortage on that day."
    ></ic-date-input>
    <br />
    <br />
    <ic-date-input
      label="When would you like to collect your coffee?"
      validation-status="success"
      validation-text="Your coffee will be available for you to collect on this day."
    ></ic-date-input>`,
  name: "Custom validation",
};

/**
 * Validation can be set on the date input if a date in the past has been set by setting the `disable-past` attribute to `true`.
 *
 * Enter a date in the past to view the validation message.
 */
export const DisablePastDates = {
  render: () => html`<ic-date-input
    label="When would you like to collect your coffee?"
    disable-past="true"
  ></ic-date-input>`,
  name: "Disable past dates",
};

/**
 * Validation can be set on the date input if a date in the future has been set by setting the `disable-future` attribute to `true`.
 *
 * Enter a date in the future to view the validation message.
 */
export const DisableFutureDates = {
  render: () => html`<ic-date-input
    label="When would you like to collect your coffee?"
    disable-future="true"
  ></ic-date-input>`,
  name: "Disable future dates",
};

/**
 * It is possible to set a min and max date range. If a date is set and it is before the min or after the max date, a validation error will appear.
 *
 * The min or max dates accept the following date formats:
 * - [Date string](#with-value) (with slashes i.e. DD/MM/YYYY)
 * - [Date string with hyphens](#with-hyphens) (i.e. DD-MM-YYYY)
 * - [Date object](#date-object)
 * - [Zulu time](#zulu-datetime)
 *
 * Enter a date after 2nd Jan 2023 and before 20th July to view the validation message.
 *
 * In this code snippet, the min and max have been set using two different date formats to demonstrate its flexibility.
 */
export const MinMax = {
  render: () => html`<ic-date-input
    label="When would you like to collect your coffee?"
    min="02/01/2023"
    max="20-07-2023"
  ></ic-date-input>`,
  name: "Min and max",
};

/**
 * When the date input component is used within a form, the date value is returned as an ISO string.
 *
 * The value is console logged to the browser dev tools.
 */
export const Form = {
  render: () => createDateInputForm(),
  name: "Form",
};

/**
 * The date input can be cleared by setting the the value attribute to one of the following:
 * - empty string
 * - `null`
 * - `undefined`
 */
export const WithClearingValue = {
  render: () => html`<ic-date-input
      id="date-input-clear-value"
      label="When would you like to collect your coffee?"
      date-format="DD/MM/YYYY"
      value="21/01/2001"
    ></ic-date-input>
    <br />
    <ic-button id="update">Update date</ic-button>
    <ic-button id="null-btn">set null</ic-button>
    <ic-button id="empty-btn">set empty string</ic-button>
    <ic-button id="undef-btn">set undefined</ic-button>
    <script>
      var input = document.querySelector("#date-input-clear-value");
      var btn = document.querySelector("#update");
      btn.addEventListener("click", () => {
        input.value = new Date("05 May 2005");
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

/**
 * The `IcChange` event is emitted by the date input every time an input field is changed.
 */
export const IcChangeEmitDatePartChanges = {
  render: () => html`<ic-date-input
      emit-date-part-change="true"
      label="When would you like to collect your coffee?"
    ></ic-date-input>
    <script>
      var dateInput = document.querySelector("ic-date-input");
      {
        dateInput.addEventListener("icChange", function (event) {
          console.log("icChange", event.detail);
        });
      }
    </script>`,
  name: "IcChange with emitDatePartChange",
};
