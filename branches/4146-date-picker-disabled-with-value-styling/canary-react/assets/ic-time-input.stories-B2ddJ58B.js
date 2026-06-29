import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{F as r,kt as i,n as a,p as o,s,t as c}from"./iframe-HARvPdsv.js";import{c as l,f as u}from"./components-OPxZkikh.js";import{n as d,t as f}from"./readme-Dv84jsKm.js";var p=e({AriaLiveBehaviour:()=>k,CustomHelperText:()=>E,DateObject:()=>b,Default:()=>_,DisableTimes:()=>B,Disabled:()=>w,HHMM:()=>F,HideHelperText:()=>D,HideLabel:()=>S,IcTimeChangeEmitTimePartChanges:()=>A,IcTimeChangeEmitTimePartChanges12Hour:()=>N,IcTimeChangeEmitTimePartChanges12HourMilliseconds:()=>P,IcTimeChangeEmitTimePartChangesMilliseconds:()=>L,IcTimeChangeEvent:()=>v,MaxTime:()=>z,Milliseconds:()=>I,MinTime:()=>R,Playground:()=>U,Required:()=>C,Sizes:()=>T,TimePeriod:()=>j,TimePeriodAMPMToggle:()=>M,Validation:()=>O,WithClearingValue:()=>V,WithValue:()=>y,ZuluTime:()=>x,__namedExportsOrder:()=>W,default:()=>g}),m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G=t((()=>{a(),m=n(i()),f(),u(),h=c(),g={title:`React Components/Time Input`,component:l,parameters:{componentAPI:{data:d}}},_={render:()=>(0,h.jsx)(l,{label:`What time would you like to collect your coffee?`}),name:`Default`},v={render:()=>(0,h.jsx)(l,{label:`What time would you like to collect your coffee?`,onIcTimeChange:e=>console.log(`icTimeChange`,e.detail.value)}),name:`icTimeChange event`},y={render:()=>(0,h.jsx)(l,{id:`time-input-default-time-with-value`,label:`What time would you like to collect your coffee?`,value:`13:45:00`}),name:`With value`},b={render:()=>(0,h.jsx)(l,{id:`time-input-default-time-date`,label:`What time would you like to collect your coffee?`,value:new Date(`2025-07-14T15:30:45`)}),name:`Date object`},x={render:()=>(0,h.jsx)(l,{id:`time-input-default-zulu-time`,label:`What time would you like to collect your coffee?`,value:`15:30:45Z`}),name:`Zulu time`},S={render:()=>(0,h.jsx)(l,{label:`What time would you like to collect your coffee?`,hideLabel:!0}),name:`Hide label`},C={render:()=>(0,h.jsx)(l,{label:`What time would you like to collect your coffee?`,required:`true`}),name:`Required`},w={render:()=>(0,h.jsx)(l,{label:`What time would you like to collect your coffee?`,disabled:!0})},T={render:()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l,{label:`What time would you like to collect your coffee?`,size:`small`}),(0,h.jsx)(`br`,{}),(0,h.jsx)(l,{label:`What time would you like to collect your coffee?`}),(0,h.jsx)(`br`,{}),(0,h.jsx)(l,{label:`What time would you like to collect your coffee?`,size:`large`})]}),name:`Sizes`},E={render:()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l,{label:`What time would you like to collect your coffee?`,helperText:`We will have your order ready for you at this time`}),(0,h.jsx)(`br`,{}),(0,h.jsx)(l,{label:`What time would you like to collect your coffee?`,children:(0,h.jsx)(r,{variant:`caption`,slot:`helper-text`,children:(0,h.jsxs)(`span`,{children:[`For special requests,`,(0,h.jsx)(o,{href:`#`,children:`contact us`}),` before choosing a time`]})})})]}),name:`Custom helper text`},D={render:()=>(0,h.jsx)(l,{label:`What time would you like to collect your coffee?`,helperText:`You cannot see me, but you can hear me`,hideHelperText:!0}),name:`Hide helper text`},O={render:()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l,{label:`What time would you like to collect your coffee?`,validationStatus:`error`,validationText:`There is a coffee shortage forecast for that time. Please choose a different time.`}),(0,h.jsx)(`br`,{}),(0,h.jsx)(l,{label:`What time would you like to collect your coffee?`,validationStatus:`warning`,validationText:`Please be aware that there may be a coffee shortage at that time.`}),(0,h.jsx)(`br`,{}),(0,h.jsx)(l,{label:`What time would you like to collect your coffee?`,validationStatus:`success`,validationText:`Your coffee will be available for you to collect at this time.`})]}),name:`Custom validation`},k={render:()=>{let[e,t]=(0,m.useState)(!1),[n,r]=(0,m.useState)(!1);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l,{label:`What time would you like to collect your coffee?`,helperText:`Error already set on page load and aria-live overridden as 'assertive'`,validationStatus:e?``:`error`,validationText:e?``:`First error message`,validationAriaLive:`assertive`}),(0,h.jsx)(`br`,{}),(0,h.jsx)(l,{label:`What time would you like to collect your coffee?`,helperText:`Error set after page load and aria-live overridden as 'assertive'`,validationStatus:e?`error`:``,validationText:e?`Second error message`:``,validationAriaLive:`assertive`}),(0,h.jsx)(`br`,{}),(0,h.jsx)(s,{onClick:()=>t(!e),children:`Toggle errors`}),(0,h.jsx)(`br`,{}),(0,h.jsx)(`br`,{}),(0,h.jsx)(`br`,{}),(0,h.jsx)(`br`,{}),(0,h.jsx)(l,{label:`What time would you like to collect your coffee?`,helperText:`Default aria-live behaviour (i.e. 'polite')`,validationStatus:n?`error`:``,validationText:n?`Third error message`:``}),(0,h.jsx)(`br`,{}),(0,h.jsx)(l,{label:`What time would you like to collect your coffee?`,helperText:`Default aria-live behaviour (i.e. 'polite')`,validationStatus:n?`error`:``,validationText:n?`Fourth error message`:``}),(0,h.jsx)(`br`,{}),(0,h.jsx)(s,{onClick:()=>r(!n),children:`Toggle errors`})]})},name:`Aria-live behaviour`},A={render:()=>(0,h.jsx)(l,{emitTimePartChange:!0,label:`What time would you like to collect your coffee?`,onIcTimeChange:e=>console.log(`icTimeChange with time parts`,e.detail)}),name:`IcTimeChange with emitTimePartChange`},j={render:()=>(0,h.jsx)(l,{label:`12-hour time`,timePeriod:`12`}),name:`Time period`},M={render:()=>(0,h.jsx)(l,{label:`12-hour time`,timePeriod:`12`,showAmPmToggle:!0}),name:`Time period - with AM/PM toggle`},N={render:()=>(0,h.jsx)(l,{emitTimePartChange:!0,label:`What time would you like to collect your coffee?`,timePeriod:`12`,showAmPmToggle:!0,onIcTimeChange:e=>console.log(`icTimeChange with time parts`,e.detail)}),name:`IcTimeChange with emitTimePartChange - 12 hour`},P={render:()=>(0,h.jsx)(l,{emitTimePartChange:!0,label:`What time would you like to collect your coffee?`,timePeriod:`12`,showAmPmToggle:!0,timeFormat:`HH:MM:SS.SSS`,onIcTimeChange:e=>console.log(`icTimeChange with time parts`,e.detail)}),name:`IcTimeChange with emitTimePartChange - 12 hour milliseconds`},F={render:()=>(0,h.jsx)(l,{label:`What time would you like to collect your coffee?`,timeFormat:`HH:MM`}),name:`Time format HH:MM`},I={render:()=>(0,h.jsx)(l,{label:`What time would you like to collect your coffee?`,timeFormat:`HH:MM:SS.SSS`}),name:`Time format HH:MM:SS.SSS`},L={render:()=>(0,h.jsx)(l,{emitTimePartChange:!0,label:`What time would you like to collect your coffee?`,timeFormat:`HH:MM:SS.SSS`,onIcTimeChange:e=>console.log(`icTimeChange with time parts`,e.detail)}),name:`IcTimeChange with emitTimePartChange - Milliseconds`},R={render:()=>(0,h.jsx)(l,{label:`What time would you like to collect your coffee? We are closed before 08:00.`,min:`08:00:00`}),name:`Min time`},z={render:()=>(0,h.jsx)(l,{label:`What time would you like to collect your coffee? We are closed after 16:00.`,max:`16:00:00`}),name:`Max time`},B={render:()=>(0,h.jsx)(l,{id:`time-input-default-disable-time`,label:`What time would you like to collect your coffee? We are closed between 08:00 and 10:00.`,disableTimes:[{start:`08:00`,end:`10:00`}]}),name:`Disable times`},V={render:()=>{let[e,t]=(0,m.useState)(`08:30:00`),n=()=>{t(`08:30:00`)},r=e=>{t(e)};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l,{label:`When would you like to collect your coffee?`,value:e}),(0,h.jsx)(`br`,{}),(0,h.jsxs)(`div`,{style:{display:`flex`,gap:`8px`},children:[(0,h.jsx)(s,{onClick:()=>n(),children:`Update time`}),(0,h.jsx)(s,{onClick:()=>r(null),children:`Set null`}),(0,h.jsx)(s,{onClick:()=>r(``),children:`Set Empty String`}),(0,h.jsx)(s,{onClick:()=>r(void 0),children:`Set undefined`})]})]})},name:`With clearing value`},H={disabled:!1,disableTimes:[{start:`08:00`,end:`10:00`}],helperText:`Please enter a time in HH:MM:SS format.`,hideLabel:!1,hideHelperText:!1,invalidTimeMessage:`Please enter a different time.`,label:`What time would you like to collect your coffee?`,max:``,min:``,required:!1,showClearButton:!0,showAmPmToggle:!1,size:`medium`,theme:`inherit`,timeFormat:`HH:MM:SS`,timePeriod:`24`,value:``,validationAriaLive:`polite`,validationStatus:`no status`,validationText:``},U={render:e=>(0,h.jsx)(l,{disabled:e.disabled,disableTimes:e.disableTimes,helperText:e.helperText,hideLabel:e.hideLabel,hideHelperText:e.hideHelperText,invalidTimeMessage:e.invalidTimeMessage,label:e.label,max:e.max,min:e.min,required:e.required,showAmPmToggle:e.showAmPmToggle,showClearButton:e.showClearButton,size:e.size,theme:e.theme,timeFormat:e.timeFormat,timePeriod:e.timePeriod,validationAriaLive:e.validationAriaLive,validationStatus:e.validationStatus===`no status`?``:e.validationStatus,validationText:e.validationText,value:e.value}),args:H,argTypes:{validationAriaLive:{options:[`polite`,`assertive`,`off`],control:{type:`inline-radio`}},validationStatus:{options:[`no status`,`error`,`success`,`warning`],control:{type:`inline-radio`}},size:{options:[`small`,`medium`,`large`],control:{type:`inline-radio`}},theme:{options:[`inherit`,`light`,`dark`],control:{type:`inline-radio`}},timeFormat:{options:[`HH:MM:SS`,`HH:MM`,`HH:MM:SS.SSS`],control:{type:`inline-radio`}},timePeriod:{options:[`24`,`12`],control:{type:`inline-radio`}}},name:`Playground`},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput label="What time would you like to collect your coffee?" />,
  name: "Default"
}`,..._.parameters?.docs?.source},description:{story:`Use the time input component to manually type in a time in different formats.

The input \`label\` is the only required attribute for time input.

Click the 'Component API' tab to view all the available attributes, events and slots for time input.

To use the time input component, import \`@ukic/canary-web-components\` into your application.

Times can be added by manually typing into the input or using the up and down arrow keys.

To move between hour, minute and second using the keyboard, provide the required values based on the placeholders or use \`:\`.

By default, the helper text displays the time format.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput label="What time would you like to collect your coffee?" onIcTimeChange={event => console.log("icTimeChange", event.detail.value)} />,
  name: "icTimeChange event"
}`,...v.parameters?.docs?.source},description:{story:`Retrieving the time input value via \`icTimeChange\` returns the time as a Date object.

The event returns the Date object once hour, minute and second have been entered.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput id="time-input-default-time-with-value" label="What time would you like to collect your coffee?" value="13:45:00" />,
  name: "With value"
}`,...y.parameters?.docs?.source},description:{story:`To set a value to the time input, pass the time value in the relevant time format.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput id="time-input-default-time-date" label="What time would you like to collect your coffee?" value={new Date("2025-07-14T15:30:45")} />,
  name: "Date object"
}`,...b.parameters?.docs?.source},description:{story:`The time input also accepts a number of different time formats within the value attribute:
- [Date object](#date-object)
- [Zulu time](#zulu-time)`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput id="time-input-default-zulu-time" label="What time would you like to collect your coffee?" value="15:30:45Z" />,
  name: "Zulu time"
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput label="What time would you like to collect your coffee?" hideLabel />,
  name: "Hide label"
}`,...S.parameters?.docs?.source},description:{story:"To hide the label, set the `hideLabel` attribute to `true`. The required `label` will still be read out by screen readers.",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput label="What time would you like to collect your coffee?" required="true" />,
  name: "Required"
}`,...C.parameters?.docs?.source},description:{story:"To set the time input as a required field, set the `required` attribute to `true`. This will add an asterisk at the end of the time input label.",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput label="What time would you like to collect your coffee?" disabled />
}`,...w.parameters?.docs?.source},description:{story:"Set the `disabled` attribute to `true` to prevent interaction with the time input.",...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <>
  <IcTimeInput label="What time would you like to collect your coffee?" size="small" />
    <br />
    <IcTimeInput label="What time would you like to collect your coffee?" />
    <br />
    <IcTimeInput label="What time would you like to collect your coffee?" size="large" />
    </>,
  name: "Sizes"
}`,...T.parameters?.docs?.source},description:{story:"The time input is available in three different sizes:\n- `small`\n- `medium` (default)\n- `large`",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <>
    <IcTimeInput label="What time would you like to collect your coffee?" helperText="We will have your order ready for you at this time" />
    <br />
    <IcTimeInput label="What time would you like to collect your coffee?">
        <IcTypography variant="caption" slot="helper-text">
        <span>
          For special requests,
          <IcLink href="#">contact us</IcLink> before choosing a time
        </span>
      </IcTypography>
      </IcTimeInput>
      </>,
  name: "Custom helper text"
}`,...E.parameters?.docs?.source},description:{story:"Use the helper text to add additional detail for the time input. Display custom content using the `helper-text` slot.",...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput label="What time would you like to collect your coffee?" helperText="You cannot see me, but you can hear me" hideHelperText />,
  name: "Hide helper text"
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <>
  <IcTimeInput label="What time would you like to collect your coffee?" validationStatus="error" validationText="There is a coffee shortage forecast for that time. Please choose a different time." />
    <br />
    <IcTimeInput label="What time would you like to collect your coffee?" validationStatus="warning" validationText="Please be aware that there may be a coffee shortage at that time." />
    <br />
    <IcTimeInput label="What time would you like to collect your coffee?" validationStatus="success" validationText="Your coffee will be available for you to collect at this time." />
   </>,
  name: "Custom validation"
}`,...O.parameters?.docs?.source},description:{story:"Validation on time input is set via `validationStatus` and `validationText`.\n\n`validationStatus` will set the style of the validation message. `validationStatus` accepts:\n- `error`\n- `warning`\n- `success`\n\n`validationStatus` is required for the `validationText` to appear.",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [showErrors1, setShowErrors1] = useState(false);
    const [showErrors2, setShowErrors2] = useState(false);
    return <>
        <IcTimeInput label="What time would you like to collect your coffee?" helperText="Error already set on page load and aria-live overridden as 'assertive'" validationStatus={showErrors1 ? "" : "error"} validationText={showErrors1 ? "" : "First error message"} validationAriaLive="assertive" />
        <br />
        <IcTimeInput label="What time would you like to collect your coffee?" helperText="Error set after page load and aria-live overridden as 'assertive'" validationStatus={showErrors1 ? "error" : ""} validationText={showErrors1 ? "Second error message" : ""} validationAriaLive="assertive" />
        <br />
        <IcButton onClick={() => setShowErrors1(!showErrors1)}>
          Toggle errors
        </IcButton>
        <br />
        <br />
        <br />
        <br />
        <IcTimeInput label="What time would you like to collect your coffee?" helperText="Default aria-live behaviour (i.e. 'polite')" validationStatus={showErrors2 ? "error" : ""} validationText={showErrors2 ? "Third error message" : ""} />
        <br />
        <IcTimeInput label="What time would you like to collect your coffee?" helperText="Default aria-live behaviour (i.e. 'polite')" validationStatus={showErrors2 ? "error" : ""} validationText={showErrors2 ? "Fourth error message" : ""} />
        <br />
        <IcButton onClick={() => setShowErrors2(!showErrors2)}>
          Toggle errors
        </IcButton>
      </>;
  },
  name: "Aria-live behaviour"
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput emitTimePartChange label="What time would you like to collect your coffee?" onIcTimeChange={event => console.log("icTimeChange with time parts", event.detail)} />,
  name: "IcTimeChange with emitTimePartChange"
}`,...A.parameters?.docs?.source},description:{story:"The `IcTimeChange` event is emitted by the time input every time an input field is changed.",...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput label="12-hour time" timePeriod="12" />,
  name: "Time period"
}`,...j.parameters?.docs?.source},description:{story:"Demonstrates the `timePeriod` prop for 12-hour selection.",...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput label="12-hour time" timePeriod="12" showAmPmToggle />,
  name: "Time period - with AM/PM toggle"
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput emitTimePartChange label="What time would you like to collect your coffee?" timePeriod="12" showAmPmToggle onIcTimeChange={event => console.log("icTimeChange with time parts", event.detail)} />,
  name: "IcTimeChange with emitTimePartChange - 12 hour"
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput emitTimePartChange label="What time would you like to collect your coffee?" timePeriod="12" showAmPmToggle timeFormat="HH:MM:SS.SSS" onIcTimeChange={event => console.log("icTimeChange with time parts", event.detail)} />,
  name: "IcTimeChange with emitTimePartChange - 12 hour milliseconds"
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput label="What time would you like to collect your coffee?" timeFormat="HH:MM" />,
  name: "Time format HH:MM"
}`,...F.parameters?.docs?.source},description:{story:`Demonstrates the time format HH:MM.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput label="What time would you like to collect your coffee?" timeFormat="HH:MM:SS.SSS" />,
  name: "Time format HH:MM:SS.SSS"
}`,...I.parameters?.docs?.source},description:{story:`Demonstrates the time format HH:MM:SS.SSS.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput emitTimePartChange label="What time would you like to collect your coffee?" timeFormat="HH:MM:SS.SSS" onIcTimeChange={event => console.log("icTimeChange with time parts", event.detail)} />,
  name: "IcTimeChange with emitTimePartChange - Milliseconds"
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput label="What time would you like to collect your coffee? We are closed before 08:00." min="08:00:00" />,
  name: "Min time"
}`,...R.parameters?.docs?.source},description:{story:"Setting min time allows you to restrict the earliest time that can be selected.\nThe value can be in any format supported as `timeFormat`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.",...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput label="What time would you like to collect your coffee? We are closed after 16:00." max="16:00:00" />,
  name: "Max time"
}`,...z.parameters?.docs?.source},description:{story:"Setting max time allows you to restrict the latest time that can be selected.\nThe value can be in any format supported as `timeFormat`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.",...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput id="time-input-default-disable-time" label="What time would you like to collect your coffee? We are closed between 08:00 and 10:00." disableTimes={[{
    start: "08:00",
    end: "10:00"
  }]} />,
  name: "Disable times"
}`,...B.parameters?.docs?.source},description:{story:"To disable specific times in the time input, set the `disableTimes` prop.\nThe `disableTimes` prop accepts an array of time objects or strings.\nEach time object can have a `start` and `end` property to define a range of disabled times, or it can be a single time string to disable that specific time.\nThe time can be in any format supported as `timeFormat`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.",...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("08:30:00");
    const handleUpdate = () => {
      setValue("08:30:00");
    };
    const handleClearValue = value => {
      setValue(value);
    };
    return <>
        <IcTimeInput label="When would you like to collect your coffee?" value={value} />
        <br />
        <div style={{
        display: "flex",
        gap: "8px"
      }}>
          <IcButton onClick={() => handleUpdate()}>Update time</IcButton>
          <IcButton onClick={() => handleClearValue(null)}>Set null</IcButton>
          <IcButton onClick={() => handleClearValue("")}>
            Set Empty String
          </IcButton>
          <IcButton onClick={() => handleClearValue(undefined)}>
            Set undefined
          </IcButton>
        </div>
      </>;
  },
  name: "With clearing value"
}`,...V.parameters?.docs?.source},description:{story:"The time input can be cleared by setting the the value attribute to one of the following:\n- empty string\n- `null`\n- `undefined`",...V.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <IcTimeInput disabled={args.disabled} disableTimes={args.disableTimes} helperText={args.helperText} hideLabel={args.hideLabel} hideHelperText={args.hideHelperText} invalidTimeMessage={args.invalidTimeMessage} label={args.label} max={args.max} min={args.min} required={args.required} showAmPmToggle={args.showAmPmToggle} showClearButton={args.showClearButton} size={args.size} theme={args.theme} timeFormat={args.timeFormat} timePeriod={args.timePeriod} validationAriaLive={args.validationAriaLive} validationStatus={args.validationStatus === "no status" ? "" : args.validationStatus} validationText={args.validationText} value={args.value} />;
  },
  args: defaultArgs,
  argTypes: {
    validationAriaLive: {
      options: ["polite", "assertive", "off"],
      control: {
        type: "inline-radio"
      }
    },
    validationStatus: {
      options: ["no status", "error", "success", "warning"],
      control: {
        type: "inline-radio"
      }
    },
    size: {
      options: ["small", "medium", "large"],
      control: {
        type: "inline-radio"
      }
    },
    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: "inline-radio"
      }
    },
    timeFormat: {
      options: ["HH:MM:SS", "HH:MM", "HH:MM:SS.SSS"],
      control: {
        type: "inline-radio"
      }
    },
    timePeriod: {
      options: ["24", "12"],
      control: {
        type: "inline-radio"
      }
    }
  },
  name: "Playground"
}`,...U.parameters?.docs?.source},description:{story:`Go to the <ic-link href="/?path=/story/react-components-time-input--playground">separate page for the playground example</ic-link> to view the prop controls.`,...U.parameters?.docs?.description}}},W=`Default.IcTimeChangeEvent.WithValue.DateObject.ZuluTime.HideLabel.Required.Disabled.Sizes.CustomHelperText.HideHelperText.Validation.AriaLiveBehaviour.IcTimeChangeEmitTimePartChanges.TimePeriod.TimePeriodAMPMToggle.IcTimeChangeEmitTimePartChanges12Hour.IcTimeChangeEmitTimePartChanges12HourMilliseconds.HHMM.Milliseconds.IcTimeChangeEmitTimePartChangesMilliseconds.MinTime.MaxTime.DisableTimes.WithClearingValue.Playground`.split(`.`)}));G();export{k as AriaLiveBehaviour,E as CustomHelperText,b as DateObject,_ as Default,B as DisableTimes,w as Disabled,F as HHMM,D as HideHelperText,S as HideLabel,A as IcTimeChangeEmitTimePartChanges,N as IcTimeChangeEmitTimePartChanges12Hour,P as IcTimeChangeEmitTimePartChanges12HourMilliseconds,L as IcTimeChangeEmitTimePartChangesMilliseconds,v as IcTimeChangeEvent,z as MaxTime,I as Milliseconds,R as MinTime,U as Playground,C as Required,T as Sizes,j as TimePeriod,M as TimePeriodAMPMToggle,O as Validation,V as WithClearingValue,y as WithValue,x as ZuluTime,W as __namedExportsOrder,g as default,G as n,p as t};