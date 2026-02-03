var M=Object.freeze,B=Object.defineProperty;var t=(I,z)=>M(B(I,"raw",{value:M(z||I.slice())}));import{x as e}from"./lit-html-DDAUtwXN.js";const V=""+new URL("readme-92snEs-t.md",import.meta.url).href,F={title:"Web Components/Time Input",component:"ic-time-input",parameters:{componentAPI:{data:V}}},i={render:()=>e`<ic-time-input
    label="What time would you like to collect your coffee?"
  ></ic-time-input>`,name:"Default"};var x;const n={render:()=>e(x||(x=t([`<ic-time-input
      label="What time would you like to collect your coffee?"
    ></ic-time-input>
    <script>
      var timeInput = document.querySelector("ic-time-input");
      timeInput.addEventListener("icTimeChange", function (event) {
        console.log(event.detail.value, event.detail.utcValue);
      });
    <\/script>`]))),name:"icTimeChange event"},r={render:()=>e`<ic-time-input
    id="time-input-default-time-with-value"
    label="What time would you like to collect your coffee?"
    time-format="HH:MM:SS"
    value="13:45:00"
  ></ic-time-input>`,name:"With value"};var H;const o={render:()=>e(H||(H=t([`<ic-time-input
      id="time-input-default-time-date"
      label="What time would you like to collect your coffee?"
    ></ic-time-input>
    <script>
      var timeInputDate = document.querySelector(
        "#time-input-default-time-date"
      );
      timeInputDate.value = new Date("2025-07-14T15:30:45");
    <\/script>`]))),name:"Date object"};var C;const w={render:()=>e(C||(C=t([`<div>
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
    <\/script>`]))),name:"Zulu time"},a={render:()=>e`<ic-time-input
    label="What time would you like to collect your coffee?"
    required="true"
  ></ic-time-input>`,name:"Required"},l={render:()=>e`<ic-time-input
    label="What time would you like to collect your coffee?"
    hide-label="true"
  ></ic-time-input>`,name:"Hide label"},c={render:()=>e`<ic-time-input
    label="What time would you like to collect your coffee?"
    disabled="true"
  ></ic-time-input>`},s={render:()=>e`<ic-time-input
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
    ></ic-time-input>`,name:"Sizes"},u={render:()=>e`<ic-time-input
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
    >`,name:"Custom helper text"},S={render:()=>e`<ic-time-input
    label="What time would you like to collect your coffee?"
    helper-text="You cannot see me, but you can hear me"
    hide-helper-text="true"
  ></ic-time-input>`,name:"Hide helper text"},m={render:()=>e`<ic-time-input
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
    ></ic-time-input>`,name:"Custom validation"};var D;const T={render:I=>e(D||(D=t([`<ic-time-input
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
      <\/script>
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
      <\/script>`]))),name:"Aria-live behaviour"};var q;const d={render:()=>e(q||(q=t([`<ic-time-input
      emit-time-part-change="true"
      label="What time would you like to collect your coffee?"
    ></ic-time-input>
    <script>
      var timeInput = document.querySelector("ic-time-input");
      timeInput.addEventListener("icTimeChange", function (event) {
        console.log("icTimeChange", event.detail);
      });
    <\/script>`]))),name:"IcTimeChange with emitTimePartChange"},p={render:()=>e`
    <ic-time-input label="12-hour time" time-period="12"></ic-time-input>
  `,name:"Time period"},k={render:()=>e`
    <ic-time-input
      label="12-hour time"
      time-period="12"
      show-am-pm-toggle="true"
    ></ic-time-input>
  `,name:"Time period - with AM/PM toggle"};var P;const W={render:()=>e(P||(P=t([`<ic-time-input
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
    <\/script>`]))),name:"IcTimeChange with emitTimePartChange - 12 hour"},h={render:()=>e`<ic-time-input
    label="What time would you like to collect your coffee?"
    time-format="HH:MM"
  ></ic-time-input>`,name:"Time format HH:MM"},f={render:()=>e`<ic-time-input
    label="What time would you like to collect your coffee?"
    time-format="HH:MM:SS.SSS"
  ></ic-time-input>`,name:"Time format HH:MM:SS.SSS"};var A;const E={render:()=>e(A||(A=t([`<ic-time-input
      emit-time-part-change="true"
      label="What time would you like to collect your coffee?"
      time-format="HH:MM:SS.SSS"
    ></ic-time-input>
    <script>
      var timeInput = document.querySelector("ic-time-input");
      timeInput.addEventListener("icTimeChange", function (event) {
        console.log("icTimeChange", event.detail);
      });
    <\/script>`]))),name:"IcTimeChange with emitTimePartChange - Milliseconds"},b={render:()=>e`<ic-time-input
    label="What time would you like to collect your coffee? We are closed before 08:00"
    min="08:00:00"
  ></ic-time-input>`,name:"Min time"},y={render:()=>e`<ic-time-input
    label="What time would you like to collect your coffee? We are closed after 16:00"
    max="16:00:00"
  ></ic-time-input>`,name:"Max time"};var L;const v={render:()=>e(L||(L=t([`<div>
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
    <\/script>`]))),name:"Disable times"};var j;const g={render:()=>e(j||(j=t([`<ic-time-input
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
    <\/script>`]))),name:"With clearing value"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-input
    label="What time would you like to collect your coffee?"
  ></ic-time-input>\`,
  name: "Default"
}`,...i.parameters?.docs?.source},description:{story:`Use the time input component to manually type in a time in different formats.

The input \`label\` is the only required attribute for time input.

Click the 'Component API' tab to view all the available attributes, events and slots for time input.

To use the time input component, import \`@ukic/canary-web-components\` into your application.

Times can be added by manually typing into the input or using the up and down arrow keys.

To move between hour, minute and second using the keyboard, provide the required values based on the placeholders or use \`:\`.

By default, the helper text displays the time format.`,...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-input
      label="What time would you like to collect your coffee?"
    ></ic-time-input>
    <script>
      var timeInput = document.querySelector("ic-time-input");
      timeInput.addEventListener("icTimeChange", function (event) {
        console.log(event.detail.value, event.detail.utcValue);
      });
    <\/script>\`,
  name: "icTimeChange event"
}`,...n.parameters?.docs?.source},description:{story:"Retrieving the time input value via `icTimeChange` returns the time as a Date object.\n\nThe event returns the Date object once hour, minute and second have been entered.",...n.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-input
    id="time-input-default-time-with-value"
    label="What time would you like to collect your coffee?"
    time-format="HH:MM:SS"
    value="13:45:00"
  ></ic-time-input>\`,
  name: "With value"
}`,...r.parameters?.docs?.source},description:{story:"To set a value to the time input, pass the time value in the relevant time format.",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-input
      id="time-input-default-time-date"
      label="What time would you like to collect your coffee?"
    ></ic-time-input>
    <script>
      var timeInputDate = document.querySelector(
        "#time-input-default-time-date"
      );
      timeInputDate.value = new Date("2025-07-14T15:30:45");
    <\/script>\`,
  name: "Date object"
}`,...o.parameters?.docs?.source},description:{story:`The time input also accepts a number of different time formats within the value attribute:
- [Date object](#date-object)
- [Zulu time](#zulu-time)`,...o.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div>
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
    <\/script>\`,
  name: "Zulu time"
}`,...w.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-input
    label="What time would you like to collect your coffee?"
    required="true"
  ></ic-time-input>\`,
  name: "Required"
}`,...a.parameters?.docs?.source},description:{story:"To set the time input as a required field, set the `required` attribute to `true`. This will add an asterisk at the end of the time input label.",...a.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-input
    label="What time would you like to collect your coffee?"
    hide-label="true"
  ></ic-time-input>\`,
  name: "Hide label"
}`,...l.parameters?.docs?.source},description:{story:"To hide the label, set the `hide-label` attribute to `true`. The required `label` will still be read out by screen readers.",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-input
    label="What time would you like to collect your coffee?"
    disabled="true"
  ></ic-time-input>\`
}`,...c.parameters?.docs?.source},description:{story:"Set the `disabled` attribute to `true` to prevent interaction with the time input.",...c.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-input
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
    ></ic-time-input>\`,
  name: "Sizes"
}`,...s.parameters?.docs?.source},description:{story:"The time input is available in three different sizes:\n- `small`\n- `medium` (default)\n- `large`",...s.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-input
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
    >\`,
  name: "Custom helper text"
}`,...u.parameters?.docs?.source},description:{story:"Use the helper text to add additional detail for the time input. Display custom content using the `helper-text` slot.",...u.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-input
    label="What time would you like to collect your coffee?"
    helper-text="You cannot see me, but you can hear me"
    hide-helper-text="true"
  ></ic-time-input>\`,
  name: "Hide helper text"
}`,...S.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-input
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
    ></ic-time-input>\`,
  name: "Custom validation"
}`,...m.parameters?.docs?.source},description:{story:"Validation on time input is set via `validation-status` and `validation-text`.\n\n`validation-status` will set the style of the validation message. `validation-status` accepts:\n- `error`\n- `warning`\n- `success`\n\n`validation-status` is required for the `validation-text` to appear.",...m.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => html\`<ic-time-input
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
      <\/script>
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
      <\/script>\`,
  name: "Aria-live behaviour"
}`,...T.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-input
      emit-time-part-change="true"
      label="What time would you like to collect your coffee?"
    ></ic-time-input>
    <script>
      var timeInput = document.querySelector("ic-time-input");
      timeInput.addEventListener("icTimeChange", function (event) {
        console.log("icTimeChange", event.detail);
      });
    <\/script>\`,
  name: "IcTimeChange with emitTimePartChange"
}`,...d.parameters?.docs?.source},description:{story:"The `IcTimeChange` event is emitted by the time input every time an input field is changed.",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-time-input label="12-hour time" time-period="12"></ic-time-input>
  \`,
  name: "Time period"
}`,...p.parameters?.docs?.source},description:{story:"Demonstrates the `time-period` prop for 12-hour and 24-hour time selection.",...p.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-time-input
      label="12-hour time"
      time-period="12"
      show-am-pm-toggle="true"
    ></ic-time-input>
  \`,
  name: "Time period - with AM/PM toggle"
}`,...k.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-input
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
    <\/script>\`,
  name: "IcTimeChange with emitTimePartChange - 12 hour"
}`,...W.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-input
    label="What time would you like to collect your coffee?"
    time-format="HH:MM"
  ></ic-time-input>\`,
  name: "Time format HH:MM"
}`,...h.parameters?.docs?.source},description:{story:"Demonstrates the time format HH:MM.",...h.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-input
    label="What time would you like to collect your coffee?"
    time-format="HH:MM:SS.SSS"
  ></ic-time-input>\`,
  name: "Time format HH:MM:SS.SSS"
}`,...f.parameters?.docs?.source},description:{story:"Demonstrates the time format HH:MM:SS.SSS.",...f.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-input
      emit-time-part-change="true"
      label="What time would you like to collect your coffee?"
      time-format="HH:MM:SS.SSS"
    ></ic-time-input>
    <script>
      var timeInput = document.querySelector("ic-time-input");
      timeInput.addEventListener("icTimeChange", function (event) {
        console.log("icTimeChange", event.detail);
      });
    <\/script>\`,
  name: "IcTimeChange with emitTimePartChange - Milliseconds"
}`,...E.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-input
    label="What time would you like to collect your coffee? We are closed before 08:00"
    min="08:00:00"
  ></ic-time-input>\`,
  name: "Min time"
}`,...b.parameters?.docs?.source},description:{story:"Setting min time allows you to restrict the earliest time that can be selected.\nThe value can be in any format supported as `time-format`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.",...b.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-input
    label="What time would you like to collect your coffee? We are closed after 16:00"
    max="16:00:00"
  ></ic-time-input>\`,
  name: "Max time"
}`,...y.parameters?.docs?.source},description:{story:"Setting max time allows you to restrict the latest time that can be selected.\nThe value can be in any format supported as `time-format`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.",...y.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div>
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
    <\/script>\`,
  name: "Disable times"
}`,...v.parameters?.docs?.source},description:{story:"To disable specific times in the time input, set the `disable-times` prop.\nThe `disable-times` prop accepts an array of time objects or strings.\nEach time object can have a `start` and `end` property to define a range of disabled times, or it can be a single time string to disable that specific time.\nThe time can be in any format supported as `time-format`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.",...v.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-input
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
    <\/script>\`,
  name: "With clearing value"
}`,...g.parameters?.docs?.source},description:{story:"The time input can be cleared by setting the the value attribute to one of the following:\n- empty string\n- `null`\n- `undefined`",...g.parameters?.docs?.description}}};const O=["Default","IcTimeChangeEvent","WithValue","DateObject","ZuluTime","Required","HideLabel","Disabled","Sizes","CustomHelperText","HideHelperText","Validation","AriaLiveBehaviour","IcTimeChangeEmitTimePartChanges","TimePeriod","TimePeriodAMPMToggle","IcTimeChangeTimeParts12Hour","HHMM","Milliseconds","IcTimeChangeTimePartsMilliseconds","MinTime","MaxTime","DisableTimes","WithClearingValue"],R=Object.freeze(Object.defineProperty({__proto__:null,AriaLiveBehaviour:T,CustomHelperText:u,DateObject:o,Default:i,DisableTimes:v,Disabled:c,HHMM:h,HideHelperText:S,HideLabel:l,IcTimeChangeEmitTimePartChanges:d,IcTimeChangeEvent:n,IcTimeChangeTimeParts12Hour:W,IcTimeChangeTimePartsMilliseconds:E,MaxTime:y,Milliseconds:f,MinTime:b,Required:a,Sizes:s,TimePeriod:p,TimePeriodAMPMToggle:k,Validation:m,WithClearingValue:g,WithValue:r,ZuluTime:w,__namedExportsOrder:O,default:F},Symbol.toStringTag,{value:"Module"}));export{R as I};
