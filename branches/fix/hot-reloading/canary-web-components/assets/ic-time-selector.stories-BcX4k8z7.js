var b=Object.freeze,z=Object.defineProperty;var r=(t,C)=>b(z(t,"raw",{value:b(C||t.slice())}));import{x as e}from"./lit-html-DDAUtwXN.js";const E=""+new URL("readme-ycdO7Zb8.md",import.meta.url).href,S="inline-radio",P={title:"Web Components/Time Selector",component:"ic-time-selector",parameters:{componentAPI:{data:E}}},i={render:()=>e`<ic-time-selector></ic-time-selector>`,name:"Default"};var f;const o={render:()=>e(f||(f=r([`<ic-time-selector></ic-time-selector>
    <script>
      var timeSelector = document.querySelector("ic-time-selector");
      timeSelector.addEventListener("icChange", (event) => {
        console.log("icChange event detail:", event.detail);
      });
    <\/script>`]))),name:"icChange Event"},a={render:()=>e`<ic-time-selector value="14:30:40"></ic-time-selector>`,name:"With value"};var y;const s={render:()=>e(y||(y=r([`<ic-time-selector
      id="time-selector-default-time-date"
    ></ic-time-selector>
    <script>
      var timeSelectorDate = document.querySelector(
        "#time-selector-default-time-date"
      );
      timeSelectorDate.value = new Date("2025-07-14T15:30");
    <\/script>`]))),name:"Date object"};var T;const u={render:()=>e(T||(T=r([`<div>
      <ic-time-selector id="time-selector-default-zulu-time"></ic-time-selector>
    </div>
    <script>
      var timeSelectorZulu = document.querySelector(
        "#time-selector-default-zulu-time"
      );
      timeSelectorZulu.value = "15:30:45Z";
    <\/script>`]))),name:"Zulu time"},c={render:()=>e`<ic-time-selector time-period="12"></ic-time-selector>`,name:"12-Hour"};var D;const p={render:()=>e(D||(D=r([`<ic-time-selector time-period="12"></ic-time-selector>
    <script>
      var icTimeSelector = document.querySelector("ic-time-selector");
      icTimeSelector.addEventListener("icChange", (event) => {
        console.log("icChange event detail:", event.detail);
      });
    <\/script>`]))),name:"icChange Event - with time period"},h={render:()=>e`<ic-time-selector
      value="14:30:40"
      time-period="12"
    ></ic-time-selector>`,name:"Default value - 12 hour"},n={render:()=>e`<ic-time-selector min="09:30"></ic-time-selector>`,name:"Min time (09:30)"},m={render:()=>e`<ic-time-selector max="18:00"></ic-time-selector>`,name:"Max time (18:00)"};var I;const l={render:()=>e(I||(I=r([`<ic-time-selector
      id="time-selector-default-disable-time"
    ></ic-time-selector>
    <script>
      var timeSelectorDisable = document.querySelector(
        "#time-selector-default-disable-time"
      );
      timeSelectorDisable.disableTimes = [{ start: "08:00", end: "10:00" }];
    <\/script>`]))),name:"Disabled times (08:00-10:00)"},d={render:()=>e`<ic-time-selector size="small" time-period="12"></ic-time-selector>`,name:"Small"},v={render:()=>e`<ic-time-selector size="large" time-period="12"></ic-time-selector>`,name:"Large"},j={disableTimes:[{start:"08:00",end:"10:00"}],max:"",min:"",size:"medium",theme:"inherit",timePeriod:"24",value:"12:00"},g={render:t=>e`<ic-time-selector
      disable-times=${t.disableTimes}
      max=${t.max}
      min=${t.min}
      size=${t.size}
      theme=${t.theme}
      time-period=${t.timePeriod}
      value=${t.value}
    />`,args:j,argTypes:{size:{options:["small","medium","large"],control:{type:S}},theme:{options:["inherit","light","dark"],control:{type:S}},timePeriod:{options:["24","12"],control:{type:S}}},name:"Playground"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-selector></ic-time-selector>\`,
  name: "Default"
}`,...i.parameters?.docs?.source},description:{story:`Use the time selector component to manually select a time in different formats.

Click the 'Component API' tab to view all the available attributes, events and slots for time selector.

To use the time selector component, import \`@ukic/canary-web-components\` into your application.

Times can be selected by scrolling through each column or using the up and down arrow keys.

To move between hour, minute and second using the keyboard, provide the required values based on the placeholders or use \`:\`.`,...i.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-selector></ic-time-selector>
    <script>
      var timeSelector = document.querySelector("ic-time-selector");
      timeSelector.addEventListener("icChange", (event) => {
        console.log("icChange event detail:", event.detail);
      });
    <\/script>\`,
  name: "icChange Event"
}`,...o.parameters?.docs?.source},description:{story:"Retrieving the time selector value via `icChange` returns the time as a Date object.\n\nThe event returns the Date object once hour, minute and second have been selected by clicking the tick icon button.",...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-selector value="14:30:40"></ic-time-selector>\`,
  name: "With value"
}`,...a.parameters?.docs?.source},description:{story:"To set a value to the time selector, pass the time value in the relevant time format.",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-selector
      id="time-selector-default-time-date"
    ></ic-time-selector>
    <script>
      var timeSelectorDate = document.querySelector(
        "#time-selector-default-time-date"
      );
      timeSelectorDate.value = new Date("2025-07-14T15:30");
    <\/script>\`,
  name: "Date object"
}`,...s.parameters?.docs?.source},description:{story:`The time selector also accepts a number of different time formats within the value attribute:
- [Date object](#date-object)
- [Zulu time](#zulu-time)`,...s.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div>
      <ic-time-selector id="time-selector-default-zulu-time"></ic-time-selector>
    </div>
    <script>
      var timeSelectorZulu = document.querySelector(
        "#time-selector-default-zulu-time"
      );
      timeSelectorZulu.value = "15:30:45Z";
    <\/script>\`,
  name: "Zulu time"
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-selector time-period="12"></ic-time-selector>\`,
  name: "12-Hour"
}`,...c.parameters?.docs?.source},description:{story:"Demonstrates the `time-period` prop for 12-hour selection.",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-selector time-period="12"></ic-time-selector>
    <script>
      var icTimeSelector = document.querySelector("ic-time-selector");
      icTimeSelector.addEventListener("icChange", (event) => {
        console.log("icChange event detail:", event.detail);
      });
    <\/script>\`,
  name: "icChange Event - with time period"
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-selector
      value="14:30:40"
      time-period="12"
    ></ic-time-selector>\`,
  name: "Default value - 12 hour"
}`,...h.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-selector min="09:30"></ic-time-selector>\`,
  name: "Min time (09:30)"
}`,...n.parameters?.docs?.source},description:{story:"Setting min time allows you to restrict the earliest time that can be selected.\nThe value can be in any format supported as `time-format`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.",...n.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-selector max="18:00"></ic-time-selector>\`,
  name: "Max time (18:00)"
}`,...m.parameters?.docs?.source},description:{story:"Setting max time allows you to restrict the latest time that can be selected.\nThe value can be in any format supported as `time-format`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.",...m.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-selector
      id="time-selector-default-disable-time"
    ></ic-time-selector>
    <script>
      var timeSelectorDisable = document.querySelector(
        "#time-selector-default-disable-time"
      );
      timeSelectorDisable.disableTimes = [{ start: "08:00", end: "10:00" }];
    <\/script>\`,
  name: "Disabled times (08:00-10:00)"
}`,...l.parameters?.docs?.source},description:{story:"To disable specific times in the time selector, set the `disable-times` prop.\nThe `disable-times` prop accepts an array of time objects or strings.\nEach time object can have a `start` and `end` property to define a range of disabled times, or it can be a single time string to disable that specific time.\nThe time can be in any format supported as `time-format`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-selector size="small" time-period="12"></ic-time-selector>\`,
  name: "Small"
}`,...d.parameters?.docs?.source},description:{story:"Demonstrates the size options for the time selector component.",...d.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-selector size="large" time-period="12"></ic-time-selector>\`,
  name: "Large"
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => html\`<ic-time-selector
      disable-times=\${args.disableTimes}
      max=\${args.max}
      min=\${args.min}
      size=\${args.size}
      theme=\${args.theme}
      time-period=\${args.timePeriod}
      value=\${args.value}
    />\`,
  args: defaultArgs,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: {
        type: INLINE_RADIO
      }
    },
    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: INLINE_RADIO
      }
    },
    timePeriod: {
      options: ["24", "12"],
      control: {
        type: INLINE_RADIO
      }
    }
  },
  name: "Playground"
}`,...g.parameters?.docs?.source}}};const x=["Default","IcChangeEvent","WithValue","DateObject","ZuluTime","TimePeriod","IcChangeEventTimePeriod","DefaultValue12Hour","MinTime","MaxTime","DisableTimes","Small","Large","Playground"],w=Object.freeze(Object.defineProperty({__proto__:null,DateObject:s,Default:i,DefaultValue12Hour:h,DisableTimes:l,IcChangeEvent:o,IcChangeEventTimePeriod:p,Large:v,MaxTime:m,MinTime:n,Playground:g,Small:d,TimePeriod:c,WithValue:a,ZuluTime:u,__namedExportsOrder:x,default:P},Symbol.toStringTag,{value:"Module"}));export{w as I};
