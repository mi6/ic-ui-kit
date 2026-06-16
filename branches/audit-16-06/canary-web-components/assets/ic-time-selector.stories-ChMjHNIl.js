import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{n,t as r}from"./lit-html-CwvQb_NC.js";import{n as i,t as a}from"./taggedTemplateLiteral-pWa2IaV6.js";var o,s=t((()=>{o=``+new URL(`readme-ycdO7Zb8.md`,import.meta.url).href})),c=e({DateObject:()=>y,Default:()=>g,DefaultValue12Hour:()=>C,DisableTimes:()=>E,IcChangeEvent:()=>_,IcChangeEventTimePeriod:()=>S,Large:()=>O,MaxTime:()=>T,MinTime:()=>w,Playground:()=>A,Small:()=>D,TimePeriod:()=>x,WithValue:()=>v,ZuluTime:()=>b,__namedExportsOrder:()=>j,default:()=>h}),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M=t((()=>{n(),s(),i(),m=`inline-radio`,h={title:`Web Components/Time Selector`,component:`ic-time-selector`,parameters:{componentAPI:{data:o}}},g={render:()=>r`<ic-time-selector></ic-time-selector>`,name:`Default`},_={render:()=>r(l||=a([`<ic-time-selector></ic-time-selector>
    <script>
      var timeSelector = document.querySelector("ic-time-selector");
      timeSelector.addEventListener("icChange", (event) => {
        console.log("icChange event detail:", event.detail);
      });
    <\/script>`])),name:`icChange Event`},v={render:()=>r`<ic-time-selector value="14:30:40"></ic-time-selector>`,name:`With value`},y={render:()=>r(u||=a([`<ic-time-selector
      id="time-selector-default-time-date"
    ></ic-time-selector>
    <script>
      var timeSelectorDate = document.querySelector(
        "#time-selector-default-time-date"
      );
      timeSelectorDate.value = new Date("2025-07-14T15:30");
    <\/script>`])),name:`Date object`},b={render:()=>r(d||=a([`<div>
      <ic-time-selector id="time-selector-default-zulu-time"></ic-time-selector>
    </div>
    <script>
      var timeSelectorZulu = document.querySelector(
        "#time-selector-default-zulu-time"
      );
      timeSelectorZulu.value = "15:30:45Z";
    <\/script>`])),name:`Zulu time`},x={render:()=>r`<ic-time-selector time-period="12"></ic-time-selector>`,name:`12-Hour`},S={render:()=>r(f||=a([`<ic-time-selector time-period="12"></ic-time-selector>
    <script>
      var icTimeSelector = document.querySelector("ic-time-selector");
      icTimeSelector.addEventListener("icChange", (event) => {
        console.log("icChange event detail:", event.detail);
      });
    <\/script>`])),name:`icChange Event - with time period`},C={render:()=>r`<ic-time-selector
      value="14:30:40"
      time-period="12"
    ></ic-time-selector>`,name:`Default value - 12 hour`},w={render:()=>r`<ic-time-selector min="09:30"></ic-time-selector>`,name:`Min time (09:30)`},T={render:()=>r`<ic-time-selector max="18:00"></ic-time-selector>`,name:`Max time (18:00)`},E={render:()=>r(p||=a([`<ic-time-selector
      id="time-selector-default-disable-time"
    ></ic-time-selector>
    <script>
      var timeSelectorDisable = document.querySelector(
        "#time-selector-default-disable-time"
      );
      timeSelectorDisable.disableTimes = [{ start: "08:00", end: "10:00" }];
    <\/script>`])),name:`Disabled times (08:00-10:00)`},D={render:()=>r`<ic-time-selector size="small" time-period="12"></ic-time-selector>`,name:`Small`},O={render:()=>r`<ic-time-selector size="large" time-period="12"></ic-time-selector>`,name:`Large`},k={disableTimes:[{start:`08:00`,end:`10:00`}],max:``,min:``,size:`medium`,theme:`inherit`,timePeriod:`24`,value:`12:00`},A={render:e=>r`<ic-time-selector
      disable-times=${e.disableTimes}
      max=${e.max}
      min=${e.min}
      size=${e.size}
      theme=${e.theme}
      time-period=${e.timePeriod}
      value=${e.value}
    />`,args:k,argTypes:{size:{options:[`small`,`medium`,`large`],control:{type:m}},theme:{options:[`inherit`,`light`,`dark`],control:{type:m}},timePeriod:{options:[`24`,`12`],control:{type:m}}},name:`Playground`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-selector></ic-time-selector>\`,
  name: "Default"
}`,...g.parameters?.docs?.source},description:{story:`Use the time selector component to manually select a time in different formats.

Click the 'Component API' tab to view all the available attributes, events and slots for time selector.

To use the time selector component, import \`@ukic/canary-web-components\` into your application.

Times can be selected by scrolling through each column or using the up and down arrow keys.

To move between hour, minute and second using the keyboard, provide the required values based on the placeholders or use \`:\`.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-selector></ic-time-selector>
    <script>
      var timeSelector = document.querySelector("ic-time-selector");
      timeSelector.addEventListener("icChange", (event) => {
        console.log("icChange event detail:", event.detail);
      });
    <\/script>\`,
  name: "icChange Event"
}`,..._.parameters?.docs?.source},description:{story:`Retrieving the time selector value via \`icChange\` returns the time as a Date object.

The event returns the Date object once hour, minute and second have been selected by clicking the tick icon button.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-selector value="14:30:40"></ic-time-selector>\`,
  name: "With value"
}`,...v.parameters?.docs?.source},description:{story:`To set a value to the time selector, pass the time value in the relevant time format.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`The time selector also accepts a number of different time formats within the value attribute:
- [Date object](#date-object)
- [Zulu time](#zulu-time)`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-selector time-period="12"></ic-time-selector>\`,
  name: "12-Hour"
}`,...x.parameters?.docs?.source},description:{story:"Demonstrates the `time-period` prop for 12-hour selection.",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-selector time-period="12"></ic-time-selector>
    <script>
      var icTimeSelector = document.querySelector("ic-time-selector");
      icTimeSelector.addEventListener("icChange", (event) => {
        console.log("icChange event detail:", event.detail);
      });
    <\/script>\`,
  name: "icChange Event - with time period"
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-selector
      value="14:30:40"
      time-period="12"
    ></ic-time-selector>\`,
  name: "Default value - 12 hour"
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-selector min="09:30"></ic-time-selector>\`,
  name: "Min time (09:30)"
}`,...w.parameters?.docs?.source},description:{story:"Setting min time allows you to restrict the earliest time that can be selected.\nThe value can be in any format supported as `time-format`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.",...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-selector max="18:00"></ic-time-selector>\`,
  name: "Max time (18:00)"
}`,...T.parameters?.docs?.source},description:{story:"Setting max time allows you to restrict the latest time that can be selected.\nThe value can be in any format supported as `time-format`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:"To disable specific times in the time selector, set the `disable-times` prop.\nThe `disable-times` prop accepts an array of time objects or strings.\nEach time object can have a `start` and `end` property to define a range of disabled times, or it can be a single time string to disable that specific time.\nThe time can be in any format supported as `time-format`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.",...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-selector size="small" time-period="12"></ic-time-selector>\`,
  name: "Small"
}`,...D.parameters?.docs?.source},description:{story:`Demonstrates the size options for the time selector component.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-time-selector size="large" time-period="12"></ic-time-selector>\`,
  name: "Large"
}`,...O.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j=[`Default`,`IcChangeEvent`,`WithValue`,`DateObject`,`ZuluTime`,`TimePeriod`,`IcChangeEventTimePeriod`,`DefaultValue12Hour`,`MinTime`,`MaxTime`,`DisableTimes`,`Small`,`Large`,`Playground`]}));M();export{y as DateObject,g as Default,C as DefaultValue12Hour,E as DisableTimes,_ as IcChangeEvent,S as IcChangeEventTimePeriod,O as Large,T as MaxTime,w as MinTime,A as Playground,D as Small,x as TimePeriod,v as WithValue,b as ZuluTime,j as __namedExportsOrder,h as default,M as n,c as t};