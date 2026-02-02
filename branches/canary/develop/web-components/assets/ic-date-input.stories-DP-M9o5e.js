var Y=Object.freeze,P=Object.defineProperty;var t=(n,a)=>Y(P(n,"raw",{value:Y(a||n.slice())}));import{x as e}from"./lit-html-DDAUtwXN.js";const j=""+new URL("readme-CzF6pt5i.md",import.meta.url).href,V=()=>{const n=document.createElement("form"),a=document.createElement("ic-date-input"),x=document.createElement("ic-button"),I=document.createElement("ic-button"),r=document.createElement("div");return r.style.display="flex",r.style.gap="var(--ic-space-xs)",r.style.marginTop="var(--ic-space-xs)",x.type="submit",x.textContent="Submit",I.type="reset",I.textContent="Reset",n.id="date-input-form",a.value="13/03/1951",a.label="When would you like to collect your coffee?",n.appendChild(a),n.appendChild(r),r.appendChild(x),r.appendChild(I),n.addEventListener("submit",H=>{H.preventDefault(),console.log(a.querySelector('input[name^="ic-date-input-"]')?.value)}),n},O={title:"Web Components/Date Input",component:"ic-date-input",parameters:{componentAPI:{data:j}}};var C;const i={render:()=>e(C||(C=t([`<ic-date-input
      label="When would you like to collect your coffee?"
    ></ic-date-input>
    <script>
      var dateInput = document.querySelector("ic-date-input");
      {
        dateInput.addEventListener("icChange", function (event) {
          console.log("icChange", event.detail.value);
        });
      }
    <\/script>
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
    ></ic-date-input>`]))),name:"Default"};var q;const o={render:()=>e(q||(q=t([`<ic-date-input
      label="When would you like to collect your coffee?"
    ></ic-date-input>
    <script>
      var dateInput = document.querySelector("ic-date-input");
      dateInput.addEventListener("icChange", function (event) {
        console.log(event.detail.value, event.detail.utcValue);
      });
    <\/script>`]))),name:"icChange event"},l={render:()=>e`<ic-date-input
    id="date-input-default-date-with-value"
    label="When would you like to collect your coffee?"
    date-format="DD/MM/YYYY"
    value="21/01/2001"
  ></ic-date-input>`,name:"With value"};var M;const d={render:()=>e(M||(M=t([`<ic-date-input
      id="date-input-default-date-date"
      label="When would you like to collect your coffee?"
    ></ic-date-input>
    <script>
      var dateInputDate = document.querySelector(
        "#date-input-default-date-date"
      );
      dateInputDate.value = new Date("28 November 2021");
    <\/script>`]))),name:"Date object"};var T;const D={render:()=>e(T||(T=t([`<div>
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
    <\/script>`]))),name:"Zulu datetime"};var L;const k={render:()=>e(L||(L=t([`<ic-date-input
      id="date-input-default-date-string"
      label="When would you like to collect your coffee?"
    ></ic-date-input>
    <script>
      var dateInputString = document.querySelector(
        "#date-input-default-date-string"
      );
      dateInputString.value = "25-05-2005";
    <\/script>`]))),name:"With hyphens"};var A;const E={render:()=>e(A||(A=t([`<ic-date-input
      id="date-input-default-date-epoch"
      label="When would you like to collect your coffee?"
    ></ic-date-input>
    <script>
      var dateInputString = document.querySelector(
        "#date-input-default-date-epoch"
      );
      dateInputString.value = Date.now();
    <\/script>`]))),name:"Epoch time"},u={render:()=>e`<ic-date-input
    label="When would you like to collect your coffee?"
    required="true"
  ></ic-date-input>`,name:"Required"},c={render:()=>e`<ic-date-input
    label="When would you like to collect your coffee?"
    hide-label="true"
  ></ic-date-input>`,name:"Hide label"},s={render:()=>e`<ic-date-input
    label="When would you like to collect your coffee?"
    disabled="true"
  ></ic-date-input>`},p={render:()=>e`<ic-date-input
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
    ></ic-date-input>`,name:"Sizes"},m={render:()=>e`<ic-date-input
      label="When would you like to collect your coffee?"
      helper-text="We will have your order ready for you on this date"
    ></ic-date-input>
    <br />
    <ic-date-input label="When would you like to collect your coffee?"
      ><ic-typography variant="caption" slot="helper-text">
        <span>
          For special requests,
          <ic-link href="#">contact us</ic-link> before choosing a date
        </span>
      </ic-typography></ic-date-input
    >`,name:"Custom helper text"},W={render:()=>e`<ic-date-input
    label="When would you like to collect your coffee?"
    helper-text="You cannot see me, but you can hear me"
    hide-helper-text="true"
  ></ic-date-input>`,name:"Hide helper text"},h={render:()=>e`<ic-date-input
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
    ></ic-date-input>`,name:"Custom validation"};var z;const S={render:n=>e(z||(z=t([`<ic-date-input
        id="field-1"
        label="When would you like to collect your coffee?"
        helper-text="Error already set on page load and aria-live overridden as 'assertive'"
        validation-status="error"
        validation-text="First error message"
        validation-aria-live="assertive"
      ></ic-date-input>
      <br />
      <ic-date-input
        id="field-2"
        label="When would you like to collect your coffee?"
        helper-text="Error set after page load and aria-live overridden as 'assertive'"
        validation-aria-live="assertive"
      ></ic-date-input>
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
      <ic-date-input
        id="field-3"
        label="When would you like to collect your coffee?"
        helper-text="Default aria-live behaviour (i.e. 'polite')"
      ></ic-date-input>
      <br />
      <ic-date-input
        id="field-4"
        label="When would you like to collect your coffee?"
        helper-text="Default aria-live behaviour (i.e. 'polite')"
      ></ic-date-input>
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
      <\/script>`]))),name:"Aria-live behaviour"},f={render:()=>e`<ic-date-input
    label="When would you like to collect your coffee?"
    disable-past="true"
  ></ic-date-input>`,name:"Disable past dates"},b={render:()=>e`<ic-date-input
    label="When would you like to collect your coffee?"
    disable-future="true"
  ></ic-date-input>`,name:"Disable future dates"},y={render:()=>e`<ic-date-input
    label="When would you like to collect your coffee?"
    min="02/01/2023"
    max="20-07-2023"
  ></ic-date-input>`,name:"Min and max"},v={render:()=>V(),name:"Form"};var B;const g={render:()=>e(B||(B=t([`<ic-date-input
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
    <\/script>`]))),name:"With clearing value"};var F;const w={render:()=>e(F||(F=t([`<ic-date-input
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
    <\/script>`]))),name:"IcChange with emitDatePartChange"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-date-input
      label="When would you like to collect your coffee?"
    ></ic-date-input>
    <script>
      var dateInput = document.querySelector("ic-date-input");
      {
        dateInput.addEventListener("icChange", function (event) {
          console.log("icChange", event.detail.value);
        });
      }
    <\/script>
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
    ></ic-date-input>\`,
  name: "Default"
}`,...i.parameters?.docs?.source},description:{story:`Use the date input component to manually type in a date in different formats.

The input \`label\` is the only required attribute for date input.

Click the 'Component API' tab to view all the available attributes, events and slots for date input.

To use the date input component, import \`@ukic/canary-web-components\` into your application.

Each example below demonstrates the date input in three different date formats:
- DD/MM/YYYY (Default date format)
- MM/DD/YYYY
- YYYY/MM/DD

Dates can be added by manually typing into the input or using the up and down arrow keys.

To move between day, month and year using the keyboard, provide the required values based on the placeholders or use \`/\` or \`-\`.

By default, the helper text displays the date format.`,...i.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-date-input
      label="When would you like to collect your coffee?"
    ></ic-date-input>
    <script>
      var dateInput = document.querySelector("ic-date-input");
      dateInput.addEventListener("icChange", function (event) {
        console.log(event.detail.value, event.detail.utcValue);
      });
    <\/script>\`,
  name: "icChange event"
}`,...o.parameters?.docs?.source},description:{story:"Retrieving the date input value via `icChange` returns the date as a Date object.\n\nThe event returns the Date object once day, month and year have been entered.",...o.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-date-input
    id="date-input-default-date-with-value"
    label="When would you like to collect your coffee?"
    date-format="DD/MM/YYYY"
    value="21/01/2001"
  ></ic-date-input>\`,
  name: "With value"
}`,...l.parameters?.docs?.source},description:{story:"To set a value to the date input, pass the date value in the relevant date format.",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-date-input
      id="date-input-default-date-date"
      label="When would you like to collect your coffee?"
    ></ic-date-input>
    <script>
      var dateInputDate = document.querySelector(
        "#date-input-default-date-date"
      );
      dateInputDate.value = new Date("28 November 2021");
    <\/script>\`,
  name: "Date object"
}`,...d.parameters?.docs?.source},description:{story:`The date input also accepts a number of different date formats within the value attribute:
- Date object
- [Zulu datetime](#zulu-datetime)
- [With hyphens (DD-MM-YYYY)](#with-hyphens)
- [Epoch time](#epoch-time)`,...d.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div>
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
    <\/script>\`,
  name: "Zulu datetime"
}`,...D.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-date-input
      id="date-input-default-date-string"
      label="When would you like to collect your coffee?"
    ></ic-date-input>
    <script>
      var dateInputString = document.querySelector(
        "#date-input-default-date-string"
      );
      dateInputString.value = "25-05-2005";
    <\/script>\`,
  name: "With hyphens"
}`,...k.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-date-input
      id="date-input-default-date-epoch"
      label="When would you like to collect your coffee?"
    ></ic-date-input>
    <script>
      var dateInputString = document.querySelector(
        "#date-input-default-date-epoch"
      );
      dateInputString.value = Date.now();
    <\/script>\`,
  name: "Epoch time"
}`,...E.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-date-input
    label="When would you like to collect your coffee?"
    required="true"
  ></ic-date-input>\`,
  name: "Required"
}`,...u.parameters?.docs?.source},description:{story:"To set the date input as a required field, set the `required` attribute to `true`. This will add an asterisk at the end of the date input label.",...u.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-date-input
    label="When would you like to collect your coffee?"
    hide-label="true"
  ></ic-date-input>\`,
  name: "Hide label"
}`,...c.parameters?.docs?.source},description:{story:"To hide the label, set the `hide-label` attribute to `true`. The required `label` will still be read out by screen readers.",...c.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-date-input
    label="When would you like to collect your coffee?"
    disabled="true"
  ></ic-date-input>\`
}`,...s.parameters?.docs?.source},description:{story:"Set the `disabled` attribute to `true` to prevent interaction with the date input.",...s.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-date-input
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
    ></ic-date-input>\`,
  name: "Sizes"
}`,...p.parameters?.docs?.source},description:{story:"The date input is available in three different sizes:\n- `small`\n- `medium` (default)\n- `large`",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-date-input
      label="When would you like to collect your coffee?"
      helper-text="We will have your order ready for you on this date"
    ></ic-date-input>
    <br />
    <ic-date-input label="When would you like to collect your coffee?"
      ><ic-typography variant="caption" slot="helper-text">
        <span>
          For special requests,
          <ic-link href="#">contact us</ic-link> before choosing a date
        </span>
      </ic-typography></ic-date-input
    >\`,
  name: "Custom helper text"
}`,...m.parameters?.docs?.source},description:{story:"Use the helper text to add additional detail for the date input. Display custom content using the `helper-text` slot.",...m.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-date-input
    label="When would you like to collect your coffee?"
    helper-text="You cannot see me, but you can hear me"
    hide-helper-text="true"
  ></ic-date-input>\`,
  name: "Hide helper text"
}`,...W.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-date-input
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
    ></ic-date-input>\`,
  name: "Custom validation"
}`,...h.parameters?.docs?.source},description:{story:"Validation on date input is set via `validation-status` and `validation-text`.\n\n`validation-status` will set the style of the validation message. `validation-status` accepts:\n- `error`\n- `warning`\n- `success`\n\n`validation-status` is required for the `validation-text` to appear.",...h.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => html\`<ic-date-input
        id="field-1"
        label="When would you like to collect your coffee?"
        helper-text="Error already set on page load and aria-live overridden as 'assertive'"
        validation-status="error"
        validation-text="First error message"
        validation-aria-live="assertive"
      ></ic-date-input>
      <br />
      <ic-date-input
        id="field-2"
        label="When would you like to collect your coffee?"
        helper-text="Error set after page load and aria-live overridden as 'assertive'"
        validation-aria-live="assertive"
      ></ic-date-input>
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
      <ic-date-input
        id="field-3"
        label="When would you like to collect your coffee?"
        helper-text="Default aria-live behaviour (i.e. 'polite')"
      ></ic-date-input>
      <br />
      <ic-date-input
        id="field-4"
        label="When would you like to collect your coffee?"
        helper-text="Default aria-live behaviour (i.e. 'polite')"
      ></ic-date-input>
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
}`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-date-input
    label="When would you like to collect your coffee?"
    disable-past="true"
  ></ic-date-input>\`,
  name: "Disable past dates"
}`,...f.parameters?.docs?.source},description:{story:"Validation can be set on the date input if a date in the past has been set by setting the `disable-past` attribute to `true`.\n\nEnter a date in the past to view the validation message.",...f.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-date-input
    label="When would you like to collect your coffee?"
    disable-future="true"
  ></ic-date-input>\`,
  name: "Disable future dates"
}`,...b.parameters?.docs?.source},description:{story:"Validation can be set on the date input if a date in the future has been set by setting the `disable-future` attribute to `true`.\n\nEnter a date in the future to view the validation message.",...b.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-date-input
    label="When would you like to collect your coffee?"
    min="02/01/2023"
    max="20-07-2023"
  ></ic-date-input>\`,
  name: "Min and max"
}`,...y.parameters?.docs?.source},description:{story:`It is possible to set a min and max date range. If a date is set and it is before the min or after the max date, a validation error will appear.

The min or max dates accept the following date formats:
- [Date string](#with-value) (with slashes i.e. DD/MM/YYYY)
- [Date string with hyphens](#with-hyphens) (i.e. DD-MM-YYYY)
- [Date object](#date-object)
- [Zulu time](#zulu-datetime)

Enter a date after 2nd Jan 2023 and before 20th July to view the validation message.

In this code snippet, the min and max have been set using two different date formats to demonstrate its flexibility.`,...y.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => createDateInputForm(),
  name: "Form"
}`,...v.parameters?.docs?.source},description:{story:`When the date input component is used within a form, the date value is returned as an ISO string.

The value is console logged to the browser dev tools.`,...v.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-date-input
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
    <\/script>\`,
  name: "With clearing value"
}`,...g.parameters?.docs?.source},description:{story:"The date input can be cleared by setting the the value attribute to one of the following:\n- empty string\n- `null`\n- `undefined`",...g.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-date-input
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
    <\/script>\`,
  name: "IcChange with emitDatePartChange"
}`,...w.parameters?.docs?.source},description:{story:"The `IcChange` event is emitted by the date input every time an input field is changed.",...w.parameters?.docs?.description}}};const R=["Default","IcChangeEvent","WithValue","DateObject","ZuluDatetime","WithHyphens","EpochTime","Required","HideLabel","Disabled","Sizes","CustomHelperText","HideHelperText","Validation","AriaLiveBehaviour","DisablePastDates","DisableFutureDates","MinMax","Form","WithClearingValue","IcChangeEmitDatePartChanges"],U=Object.freeze(Object.defineProperty({__proto__:null,AriaLiveBehaviour:S,CustomHelperText:m,DateObject:d,Default:i,DisableFutureDates:b,DisablePastDates:f,Disabled:s,EpochTime:E,Form:v,HideHelperText:W,HideLabel:c,IcChangeEmitDatePartChanges:w,IcChangeEvent:o,MinMax:y,Required:u,Sizes:p,Validation:h,WithClearingValue:g,WithHyphens:k,WithValue:l,ZuluDatetime:D,__namedExportsOrder:R,default:O},Symbol.toStringTag,{value:"Module"}));export{U as I};
