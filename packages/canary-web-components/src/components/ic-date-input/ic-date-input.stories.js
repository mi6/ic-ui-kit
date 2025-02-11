import { createDateInputForm } from "./story-data";
import { html } from "lit-html";
import readme from "./readme.md";

export default {
  title: "Web Components/Date Input",
  component: "ic-date-input",

  parameters: {
    componentAPI: {
      data: readme,
    },
  },
};

export const Default = {
  render: () =>
    html`<ic-date-input
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
      ></ic-date-input> `,

  name: "Default",
};

export const IcChangeEvent = {
  render: () =>
    html`<ic-date-input
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

export const WithValue = {
  render: () =>
    html`<ic-date-input
      id="date-input-default-date-with-value"
      label="When would you like to collect your coffee?"
      date-format="DD/MM/YYYY"
      value="21/01/2001"
    ></ic-date-input>`,

  name: "With value",
};

export const DateObject = {
  render: () =>
    html`<ic-date-input
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

export const ZuluTime = {
  render: () =>
    html`<div>
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

  name: "Zulu time",
};

export const WithHyphens = {
  render: () =>
    html`<ic-date-input
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
  render: () =>
    html`<ic-date-input
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

export const Required = {
  render: () =>
    html`<ic-date-input
      label="When would you like to collect your coffee?"
      required
    ></ic-date-input>`,

  name: "Required",
};

export const HideLabel = {
  render: () =>
    html`<ic-date-input
      label="When would you like to collect your coffee?"
      hide-label="true"
    ></ic-date-input> `,

  name: "Hide label",
};

export const Disabled = {
  render: () =>
    html`<ic-date-input
      label="When would you like to collect your coffee?"
      disabled
    ></ic-date-input>`,

  name: "Disabled",
};

export const Sizes = {
  render: () =>
    html`<ic-date-input
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
      ></ic-date-input> `,

  name: "Sizes",
};

export const CustomHelperText = {
  render: () =>
    html`<ic-date-input
      label="When would you like to collect your coffee?"
      helper-text="We will have your order ready for you on this date"
    ></ic-date-input>`,

  name: "Custom helper text",
};

export const HideHelperText = {
  render: () =>
    html`<ic-date-input
      label="When would you like to collect your coffee?"
      helper-text="You cannot see me, but you can hear me"
      hide-helper-text="true"
    ></ic-date-input>`,

  name: "Hide helper text",
};

export const CustomValidation = {
  render: () =>
    html`<ic-date-input
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
      ></ic-date-input> `,

  name: "Custom validation",
};

export const DisabledPastDates = {
  render: () =>
    html`<ic-date-input
      label="When would you like to collect your coffee?"
      disable-past
    ></ic-date-input>`,

  name: "Disabled past dates",
};

export const DisabledFutureDates = {
  render: () =>
    html`<ic-date-input
      label="When would you like to collect your coffee?"
      disable-future
    ></ic-date-input>`,

  name: "Disabled future dates",
};

export const MinAndMax = {
  render: () =>
    html`<ic-date-input
      label="When would you like to collect your coffee?"
      min="02/01/2023"
      max="20-07-2023"
    ></ic-date-input>`,

  name: "Min and max",
};

export const Form = {
  render: () => createDateInputForm(),
  name: "Form",
};

export const WithClearingValue = {
  render: () =>
    html`<ic-date-input
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
