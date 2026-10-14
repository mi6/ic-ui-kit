import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./lit-html-CMAkC4Hj.js";import{n as i,t as a}from"./taggedTemplateLiteral-2dP4OITE.js";var o,s=t((()=>{o=``+new URL(`readme-92snEs-t.md`,import.meta.url).href})),c=e({AriaLiveBehaviour:()=>M,CustomHelperText:()=>k,DateObject:()=>C,Default:()=>b,DisableTimes:()=>U,Disabled:()=>D,HHMM:()=>R,HideHelperText:()=>A,HideLabel:()=>E,IcTimeChangeEmitTimePartChanges:()=>N,IcTimeChangeEvent:()=>x,IcTimeChangeTimeParts12Hour:()=>I,IcTimeChangeTimeParts12HourMilliseconds:()=>L,IcTimeChangeTimePartsMilliseconds:()=>B,MaxTime:()=>H,Milliseconds:()=>z,MinTime:()=>V,Required:()=>T,Sizes:()=>O,TimePeriod:()=>P,TimePeriodAMPMToggle:()=>F,Validation:()=>j,WithClearingValue:()=>W,WithValue:()=>S,ZuluTime:()=>w,__namedExportsOrder:()=>G,default:()=>y}),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K=t((()=>{n(),s(),i(),y={title:`Web Components/Time Input`,component:`ic-time-input`,parameters:{componentAPI:{data:o}}},b={render:()=>r`<ic-time-input
    label="What time would you like to collect your coffee?"
  ></ic-time-input>`,name:`Default`},x={render:()=>r(l||=a([`<ic-time-input
      label="What time would you like to collect your coffee?"
    ></ic-time-input>
    <script>
      var timeInput = document.querySelector("ic-time-input");
      timeInput.addEventListener("icTimeChange", function (event) {
        console.log(event.detail.value, event.detail.utcValue);
      });
    <\/script>`])),name:`icTimeChange event`},S={render:()=>r`<ic-time-input
    id="time-input-default-time-with-value"
    label="What time would you like to collect your coffee?"
    time-format="HH:MM:SS"
    value="13:45:00"
  ></ic-time-input>`,name:`With value`},C={render:()=>r(u||=a([`<ic-time-input
      id="time-input-default-time-date"
      label="What time would you like to collect your coffee?"
    ></ic-time-input>
    <script>
      var timeInputDate = document.querySelector(
        "#time-input-default-time-date"
      );
      timeInputDate.value = new Date("2025-07-14T15:30:45");
    <\/script>`])),name:`Date object`},w={render:()=>r(d||=a([`<div>
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
    <\/script>`])),name:`Zulu time`},T={render:()=>r`<ic-time-input
    label="What time would you like to collect your coffee?"
    required="true"
  ></ic-time-input>`,name:`Required`},E={render:()=>r`<ic-time-input
    label="What time would you like to collect your coffee?"
    hide-label="true"
  ></ic-time-input>`,name:`Hide label`},D={render:()=>r`<ic-time-input
    label="What time would you like to collect your coffee?"
    disabled="true"
  ></ic-time-input>`},O={render:()=>r`<ic-time-input
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
    ></ic-time-input>`,name:`Sizes`},k={render:()=>r`<ic-time-input
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
    >`,name:`Custom helper text`},A={render:()=>r`<ic-time-input
    label="What time would you like to collect your coffee?"
    helper-text="You cannot see me, but you can hear me"
    hide-helper-text="true"
  ></ic-time-input>`,name:`Hide helper text`},j={render:()=>r`<ic-time-input
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
    ></ic-time-input>`,name:`Custom validation`},M={render:e=>r(f||=a([`<ic-time-input
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
      <\/script>`])),name:`Aria-live behaviour`},N={render:()=>r(p||=a([`<ic-time-input
      emit-time-part-change="true"
      label="What time would you like to collect your coffee?"
    ></ic-time-input>
    <script>
      var timeInput = document.querySelector("ic-time-input");
      timeInput.addEventListener("icTimeChange", function (event) {
        console.log("icTimeChange", event.detail);
      });
    <\/script>`])),name:`IcTimeChange with emitTimePartChange`},P={render:()=>r`
    <ic-time-input label="12-hour time" time-period="12"></ic-time-input>
  `,name:`Time period`},F={render:()=>r`
    <ic-time-input
      label="12-hour time"
      time-period="12"
      show-am-pm-toggle="true"
    ></ic-time-input>
  `,name:`Time period - with AM/PM toggle`},I={render:()=>r(m||=a([`<ic-time-input
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
    <\/script>`])),name:`IcTimeChange with emitTimePartChange - 12 hour`},L={render:()=>r(h||=a([`<ic-time-input
      emit-time-part-change="true"
      label="What time would you like to collect your coffee?"
      time-period="12"
      show-am-pm-toggle="true"
      time-format="HH:MM:SS.SSS"
    ></ic-time-input>
    <script>
      var timeInput = document.querySelector("ic-time-input");
      timeInput.addEventListener("icTimeChange", function (event) {
        console.log("icTimeChange", event.detail);
      });
    <\/script>`])),name:`IcTimeChange with emitTimePartChange - 12 hour milliseconds`},R={render:()=>r`<ic-time-input
    label="What time would you like to collect your coffee?"
    time-format="HH:MM"
  ></ic-time-input>`,name:`Time format HH:MM`},z={render:()=>r`<ic-time-input
    label="What time would you like to collect your coffee?"
    time-format="HH:MM:SS.SSS"
  ></ic-time-input>`,name:`Time format HH:MM:SS.SSS`},B={render:()=>r(g||=a([`<ic-time-input
      emit-time-part-change="true"
      label="What time would you like to collect your coffee?"
      time-format="HH:MM:SS.SSS"
    ></ic-time-input>
    <script>
      var timeInput = document.querySelector("ic-time-input");
      timeInput.addEventListener("icTimeChange", function (event) {
        console.log("icTimeChange", event.detail);
      });
    <\/script>`])),name:`IcTimeChange with emitTimePartChange - Milliseconds`},V={render:()=>r`<ic-time-input
    label="What time would you like to collect your coffee? We are closed before 08:00"
    min="08:00:00"
  ></ic-time-input>`,name:`Min time`},H={render:()=>r`<ic-time-input
    label="What time would you like to collect your coffee? We are closed after 16:00"
    max="16:00:00"
  ></ic-time-input>`,name:`Max time`},U={render:()=>r(_||=a([`<div>
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
    <\/script>`])),name:`Disable times`},W={render:()=>r(v||=a([`<ic-time-input
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
    <\/script>`])),name:`With clearing value`},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-input
    label="What time would you like to collect your coffee?"
  ></ic-time-input>\`,
  name: "Default"
}`,...b.parameters?.docs?.source},description:{story:`Use the time input component to manually type in a time in different formats.

The input \`label\` is the only required attribute for time input.

Click the 'Component API' tab to view all the available attributes, events and slots for time input.

To use the time input component, import \`@ukic/canary-web-components\` into your application.

Times can be added by manually typing into the input or using the up and down arrow keys.

To move between hour, minute and second using the keyboard, provide the required values based on the placeholders or use \`:\`.

By default, the helper text displays the time format.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`Retrieving the time input value via \`icTimeChange\` returns the time as a Date object.

The event returns the Date object once hour, minute and second have been entered.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-input
    id="time-input-default-time-with-value"
    label="What time would you like to collect your coffee?"
    time-format="HH:MM:SS"
    value="13:45:00"
  ></ic-time-input>\`,
  name: "With value"
}`,...S.parameters?.docs?.source},description:{story:`To set a value to the time input, pass the time value in the relevant time format.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:`The time input also accepts a number of different time formats within the value attribute:
- [Date object](#date-object)
- [Zulu time](#zulu-time)`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-input
    label="What time would you like to collect your coffee?"
    required="true"
  ></ic-time-input>\`,
  name: "Required"
}`,...T.parameters?.docs?.source},description:{story:"To set the time input as a required field, set the `required` attribute to `true`. This will add an asterisk at the end of the time input label.",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-input
    label="What time would you like to collect your coffee?"
    hide-label="true"
  ></ic-time-input>\`,
  name: "Hide label"
}`,...E.parameters?.docs?.source},description:{story:"To hide the label, set the `hide-label` attribute to `true`. The required `label` will still be read out by screen readers.",...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-input
    label="What time would you like to collect your coffee?"
    disabled="true"
  ></ic-time-input>\`
}`,...D.parameters?.docs?.source},description:{story:"Set the `disabled` attribute to `true` to prevent interaction with the time input.",...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:"The time input is available in three different sizes:\n- `small`\n- `medium` (default)\n- `large`",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:"Use the helper text to add additional detail for the time input. Display custom content using the `helper-text` slot.",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-input
    label="What time would you like to collect your coffee?"
    helper-text="You cannot see me, but you can hear me"
    hide-helper-text="true"
  ></ic-time-input>\`,
  name: "Hide helper text"
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:"Validation on time input is set via `validation-status` and `validation-text`.\n\n`validation-status` will set the style of the validation message. `validation-status` accepts:\n- `error`\n- `warning`\n- `success`\n\n`validation-status` is required for the `validation-text` to appear.",...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source},description:{story:"The `IcTimeChange` event is emitted by the time input every time an input field is changed.",...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-time-input label="12-hour time" time-period="12"></ic-time-input>
  \`,
  name: "Time period"
}`,...P.parameters?.docs?.source},description:{story:"Demonstrates the `time-period` prop for 12-hour and 24-hour time selection.",...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-time-input
      label="12-hour time"
      time-period="12"
      show-am-pm-toggle="true"
    ></ic-time-input>
  \`,
  name: "Time period - with AM/PM toggle"
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-input
      emit-time-part-change="true"
      label="What time would you like to collect your coffee?"
      time-period="12"
      show-am-pm-toggle="true"
      time-format="HH:MM:SS.SSS"
    ></ic-time-input>
    <script>
      var timeInput = document.querySelector("ic-time-input");
      timeInput.addEventListener("icTimeChange", function (event) {
        console.log("icTimeChange", event.detail);
      });
    <\/script>\`,
  name: "IcTimeChange with emitTimePartChange - 12 hour milliseconds"
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-input
    label="What time would you like to collect your coffee?"
    time-format="HH:MM"
  ></ic-time-input>\`,
  name: "Time format HH:MM"
}`,...R.parameters?.docs?.source},description:{story:`Demonstrates the time format HH:MM.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-input
    label="What time would you like to collect your coffee?"
    time-format="HH:MM:SS.SSS"
  ></ic-time-input>\`,
  name: "Time format HH:MM:SS.SSS"
}`,...z.parameters?.docs?.source},description:{story:`Demonstrates the time format HH:MM:SS.SSS.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-input
    label="What time would you like to collect your coffee? We are closed before 08:00"
    min="08:00:00"
  ></ic-time-input>\`,
  name: "Min time"
}`,...V.parameters?.docs?.source},description:{story:"Setting min time allows you to restrict the earliest time that can be selected.\nThe value can be in any format supported as `time-format`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.",...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-input
    label="What time would you like to collect your coffee? We are closed after 16:00"
    max="16:00:00"
  ></ic-time-input>\`,
  name: "Max time"
}`,...H.parameters?.docs?.source},description:{story:"Setting max time allows you to restrict the latest time that can be selected.\nThe value can be in any format supported as `time-format`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.",...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source},description:{story:"To disable specific times in the time input, set the `disable-times` prop.\nThe `disable-times` prop accepts an array of time objects or strings.\nEach time object can have a `start` and `end` property to define a range of disabled times, or it can be a single time string to disable that specific time.\nThe time can be in any format supported as `time-format`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.",...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source},description:{story:"The time input can be cleared by setting the the value attribute to one of the following:\n- empty string\n- `null`\n- `undefined`",...W.parameters?.docs?.description}}},G=[`Default`,`IcTimeChangeEvent`,`WithValue`,`DateObject`,`ZuluTime`,`Required`,`HideLabel`,`Disabled`,`Sizes`,`CustomHelperText`,`HideHelperText`,`Validation`,`AriaLiveBehaviour`,`IcTimeChangeEmitTimePartChanges`,`TimePeriod`,`TimePeriodAMPMToggle`,`IcTimeChangeTimeParts12Hour`,`IcTimeChangeTimeParts12HourMilliseconds`,`HHMM`,`Milliseconds`,`IcTimeChangeTimePartsMilliseconds`,`MinTime`,`MaxTime`,`DisableTimes`,`WithClearingValue`]}));K();export{M as AriaLiveBehaviour,k as CustomHelperText,C as DateObject,b as Default,U as DisableTimes,D as Disabled,R as HHMM,A as HideHelperText,E as HideLabel,N as IcTimeChangeEmitTimePartChanges,x as IcTimeChangeEvent,I as IcTimeChangeTimeParts12Hour,L as IcTimeChangeTimeParts12HourMilliseconds,B as IcTimeChangeTimePartsMilliseconds,H as MaxTime,z as Milliseconds,V as MinTime,T as Required,O as Sizes,P as TimePeriod,F as TimePeriodAMPMToggle,j as Validation,W as WithClearingValue,S as WithValue,w as ZuluTime,G as __namedExportsOrder,y as default,K as n,c as t};