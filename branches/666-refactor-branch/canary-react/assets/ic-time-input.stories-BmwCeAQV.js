import{r as A,R as e,I,a as F,b as L}from"./iframe-CdIx3MDa.js";import{r as B}from"./readme-CaDEba5C.js";import{I as a}from"./components-xUzzyKli.js";const z={title:"React Components/Time Input",component:a,parameters:{componentAPI:{data:B}}},o={render:()=>e.createElement(a,{label:"What time would you like to collect your coffee?"}),name:"Default"},i={render:()=>e.createElement(a,{label:"What time would you like to collect your coffee?",onIcTimeChange:t=>console.log("icTimeChange",t.detail.value)}),name:"icTimeChange event"},n={render:()=>e.createElement(a,{id:"time-input-default-time-with-value",label:"What time would you like to collect your coffee?",value:"13:45:00"}),name:"With value"},l={render:()=>e.createElement(a,{id:"time-input-default-time-date",label:"What time would you like to collect your coffee?",value:new Date("2025-07-14T15:30:45")}),name:"Date object"},k={render:()=>e.createElement(a,{id:"time-input-default-zulu-time",label:"What time would you like to collect your coffee?",value:"15:30:45Z"}),name:"Zulu time"},s={render:()=>e.createElement(a,{label:"What time would you like to collect your coffee?",hideLabel:!0}),name:"Hide label"},c={render:()=>e.createElement(a,{label:"What time would you like to collect your coffee?",required:"true"}),name:"Required"},m={render:()=>e.createElement(a,{label:"What time would you like to collect your coffee?",disabled:!0})},u={render:()=>e.createElement(e.Fragment,null,e.createElement(a,{label:"What time would you like to collect your coffee?",size:"small"}),e.createElement("br",null),e.createElement(a,{label:"What time would you like to collect your coffee?"}),e.createElement("br",null),e.createElement(a,{label:"What time would you like to collect your coffee?",size:"large"})),name:"Sizes"},d={render:()=>e.createElement(e.Fragment,null,e.createElement(a,{label:"What time would you like to collect your coffee?",helperText:"We will have your order ready for you at this time"}),e.createElement("br",null),e.createElement(a,{label:"What time would you like to collect your coffee?"},e.createElement(F,{variant:"caption",slot:"helper-text"},e.createElement("span",null,"For special requests,",e.createElement(L,{href:"#"},"contact us")," before choosing a time")))),name:"Custom helper text"},C={render:()=>e.createElement(a,{label:"What time would you like to collect your coffee?",helperText:"You cannot see me, but you can hear me",hideHelperText:!0}),name:"Hide helper text"},p={render:()=>e.createElement(e.Fragment,null,e.createElement(a,{label:"What time would you like to collect your coffee?",validationStatus:"error",validationText:"There is a coffee shortage forecast for that time. Please choose a different time."}),e.createElement("br",null),e.createElement(a,{label:"What time would you like to collect your coffee?",validationStatus:"warning",validationText:"Please be aware that there may be a coffee shortage at that time."}),e.createElement("br",null),e.createElement(a,{label:"What time would you like to collect your coffee?",validationStatus:"success",validationText:"Your coffee will be available for you to collect at this time."})),name:"Custom validation"},x={render:()=>{const[t,P]=A.useState(!1),[r,E]=A.useState(!1);return e.createElement(e.Fragment,null,e.createElement(a,{label:"What time would you like to collect your coffee?",helperText:"Error already set on page load and aria-live overridden as 'assertive'",validationStatus:t?"":"error",validationText:t?"":"First error message",validationAriaLive:"assertive"}),e.createElement("br",null),e.createElement(a,{label:"What time would you like to collect your coffee?",helperText:"Error set after page load and aria-live overridden as 'assertive'",validationStatus:t?"error":"",validationText:t?"Second error message":"",validationAriaLive:"assertive"}),e.createElement("br",null),e.createElement(I,{onClick:()=>P(!t)},"Toggle errors"),e.createElement("br",null),e.createElement("br",null),e.createElement("br",null),e.createElement("br",null),e.createElement(a,{label:"What time would you like to collect your coffee?",helperText:"Default aria-live behaviour (i.e. 'polite')",validationStatus:r?"error":"",validationText:r?"Third error message":""}),e.createElement("br",null),e.createElement(a,{label:"What time would you like to collect your coffee?",helperText:"Default aria-live behaviour (i.e. 'polite')",validationStatus:r?"error":"",validationText:r?"Fourth error message":""}),e.createElement("br",null),e.createElement(I,{onClick:()=>E(!r)},"Toggle errors"))},name:"Aria-live behaviour"},h={render:()=>e.createElement(a,{emitTimePartChange:!0,label:"What time would you like to collect your coffee?",onIcTimeChange:t=>console.log("icTimeChange with time parts",t.detail)}),name:"IcTimeChange with emitTimePartChange"},f={render:()=>e.createElement(a,{label:"12-hour time",timePeriod:"12"}),name:"Time period"},M={render:()=>e.createElement(a,{label:"12-hour time",timePeriod:"12",showAmPmToggle:!0}),name:"Time period - with AM/PM toggle"},W={render:()=>e.createElement(a,{emitTimePartChange:!0,label:"What time would you like to collect your coffee?",timePeriod:"12",showAmPmToggle:!0,onIcTimeChange:t=>console.log("icTimeChange with time parts",t.detail)}),name:"IcTimeChange with emitTimePartChange - 12 hour"},T={render:()=>e.createElement(a,{label:"What time would you like to collect your coffee?",timeFormat:"HH:MM"}),name:"Time format HH:MM"},y={render:()=>e.createElement(a,{label:"What time would you like to collect your coffee?",timeFormat:"HH:MM:SS.SSS"}),name:"Time format HH:MM:SS.SSS"},H={render:()=>e.createElement(a,{emitTimePartChange:!0,label:"What time would you like to collect your coffee?",timeFormat:"HH:MM:SS.SSS",onIcTimeChange:t=>console.log("icTimeChange with time parts",t.detail)}),name:"IcTimeChange with emitTimePartChange - Milliseconds"},b={render:()=>e.createElement(a,{label:"What time would you like to collect your coffee? We are closed before 08:00.",min:"08:00:00"}),name:"Min time"},g={render:()=>e.createElement(a,{label:"What time would you like to collect your coffee? We are closed after 16:00.",max:"16:00:00"}),name:"Max time"},v={render:()=>e.createElement(a,{id:"time-input-default-disable-time",label:"What time would you like to collect your coffee? We are closed between 08:00 and 10:00.",disableTimes:[{start:"08:00",end:"10:00"}]}),name:"Disable times"},S={render:()=>{const[t,P]=A.useState("08:30:00"),r=()=>{P("08:30:00")},E=D=>{P(D)};return e.createElement(e.Fragment,null,e.createElement(a,{label:"When would you like to collect your coffee?",value:t}),e.createElement("br",null),e.createElement("div",{style:{display:"flex",gap:"8px"}},e.createElement(I,{onClick:()=>r()},"Update time"),e.createElement(I,{onClick:()=>E(null)},"Set null"),e.createElement(I,{onClick:()=>E("")},"Set Empty String"),e.createElement(I,{onClick:()=>E(void 0)},"Set undefined")))},name:"With clearing value"},q={disabled:!1,disableTimes:[{start:"08:00",end:"10:00"}],helperText:"Please enter a time in HH:MM:SS format.",hideLabel:!1,hideHelperText:!1,invalidTimeMessage:"Please enter a different time.",label:"What time would you like to collect your coffee?",max:"",min:"",required:!1,showClearButton:!0,showAmPmToggle:!1,size:"medium",theme:"inherit",timeFormat:"HH:MM:SS",timePeriod:"24",value:"",validationAriaLive:"polite",validationStatus:"no status",validationText:""},w={render:t=>e.createElement(a,{disabled:t.disabled,disableTimes:t.disableTimes,helperText:t.helperText,hideLabel:t.hideLabel,hideHelperText:t.hideHelperText,invalidTimeMessage:t.invalidTimeMessage,label:t.label,max:t.max,min:t.min,required:t.required,showAmPmToggle:t.showAmPmToggle,showClearButton:t.showClearButton,size:t.size,theme:t.theme,timeFormat:t.timeFormat,timePeriod:t.timePeriod,validationAriaLive:t.validationAriaLive,validationStatus:t.validationStatus==="no status"?"":t.validationStatus,validationText:t.validationText,value:t.value}),args:q,argTypes:{validationAriaLive:{options:["polite","assertive","off"],control:{type:"inline-radio"}},validationStatus:{options:["no status","error","success","warning"],control:{type:"inline-radio"}},size:{options:["small","medium","large"],control:{type:"inline-radio"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}},timeFormat:{options:["HH:MM:SS","HH:MM","HH:MM:SS.SSS"],control:{type:"inline-radio"}},timePeriod:{options:["24","12"],control:{type:"inline-radio"}}},name:"Playground"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput label="What time would you like to collect your coffee?" />,
  name: "Default"
}`,...o.parameters?.docs?.source},description:{story:`Use the time input component to manually type in a time in different formats.

The input \`label\` is the only required attribute for time input.

Click the 'Component API' tab to view all the available attributes, events and slots for time input.

To use the time input component, import \`@ukic/canary-web-components\` into your application.

Times can be added by manually typing into the input or using the up and down arrow keys.

To move between hour, minute and second using the keyboard, provide the required values based on the placeholders or use \`:\`.

By default, the helper text displays the time format.`,...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput label="What time would you like to collect your coffee?" onIcTimeChange={event => console.log("icTimeChange", event.detail.value)} />,
  name: "icTimeChange event"
}`,...i.parameters?.docs?.source},description:{story:"Retrieving the time input value via `icTimeChange` returns the time as a Date object.\n\nThe event returns the Date object once hour, minute and second have been entered.",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput id="time-input-default-time-with-value" label="What time would you like to collect your coffee?" value="13:45:00" />,
  name: "With value"
}`,...n.parameters?.docs?.source},description:{story:"To set a value to the time input, pass the time value in the relevant time format.",...n.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput id="time-input-default-time-date" label="What time would you like to collect your coffee?" value={new Date("2025-07-14T15:30:45")} />,
  name: "Date object"
}`,...l.parameters?.docs?.source},description:{story:`The time input also accepts a number of different time formats within the value attribute:
- [Date object](#date-object)
- [Zulu time](#zulu-time)`,...l.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput id="time-input-default-zulu-time" label="What time would you like to collect your coffee?" value="15:30:45Z" />,
  name: "Zulu time"
}`,...k.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput label="What time would you like to collect your coffee?" hideLabel />,
  name: "Hide label"
}`,...s.parameters?.docs?.source},description:{story:"To hide the label, set the `hideLabel` attribute to `true`. The required `label` will still be read out by screen readers.",...s.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput label="What time would you like to collect your coffee?" required="true" />,
  name: "Required"
}`,...c.parameters?.docs?.source},description:{story:"To set the time input as a required field, set the `required` attribute to `true`. This will add an asterisk at the end of the time input label.",...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput label="What time would you like to collect your coffee?" disabled />
}`,...m.parameters?.docs?.source},description:{story:"Set the `disabled` attribute to `true` to prevent interaction with the time input.",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <>
  <IcTimeInput label="What time would you like to collect your coffee?" size="small" />
    <br />
    <IcTimeInput label="What time would you like to collect your coffee?" />
    <br />
    <IcTimeInput label="What time would you like to collect your coffee?" size="large" />
    </>,
  name: "Sizes"
}`,...u.parameters?.docs?.source},description:{story:"The time input is available in three different sizes:\n- `small`\n- `medium` (default)\n- `large`",...u.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:"Use the helper text to add additional detail for the time input. Display custom content using the `helper-text` slot.",...d.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput label="What time would you like to collect your coffee?" helperText="You cannot see me, but you can hear me" hideHelperText />,
  name: "Hide helper text"
}`,...C.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <>
  <IcTimeInput label="What time would you like to collect your coffee?" validationStatus="error" validationText="There is a coffee shortage forecast for that time. Please choose a different time." />
    <br />
    <IcTimeInput label="What time would you like to collect your coffee?" validationStatus="warning" validationText="Please be aware that there may be a coffee shortage at that time." />
    <br />
    <IcTimeInput label="What time would you like to collect your coffee?" validationStatus="success" validationText="Your coffee will be available for you to collect at this time." />
   </>,
  name: "Custom validation"
}`,...p.parameters?.docs?.source},description:{story:"Validation on time input is set via `validationStatus` and `validationText`.\n\n`validationStatus` will set the style of the validation message. `validationStatus` accepts:\n- `error`\n- `warning`\n- `success`\n\n`validationStatus` is required for the `validationText` to appear.",...p.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput emitTimePartChange label="What time would you like to collect your coffee?" onIcTimeChange={event => console.log("icTimeChange with time parts", event.detail)} />,
  name: "IcTimeChange with emitTimePartChange"
}`,...h.parameters?.docs?.source},description:{story:"The `IcTimeChange` event is emitted by the time input every time an input field is changed.",...h.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput label="12-hour time" timePeriod="12" />,
  name: "Time period"
}`,...f.parameters?.docs?.source},description:{story:"Demonstrates the `timePeriod` prop for 12-hour selection.",...f.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput label="12-hour time" timePeriod="12" showAmPmToggle />,
  name: "Time period - with AM/PM toggle"
}`,...M.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput emitTimePartChange label="What time would you like to collect your coffee?" timePeriod="12" showAmPmToggle onIcTimeChange={event => console.log("icTimeChange with time parts", event.detail)} />,
  name: "IcTimeChange with emitTimePartChange - 12 hour"
}`,...W.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput label="What time would you like to collect your coffee?" timeFormat="HH:MM" />,
  name: "Time format HH:MM"
}`,...T.parameters?.docs?.source},description:{story:"Demonstrates the time format HH:MM.",...T.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput label="What time would you like to collect your coffee?" timeFormat="HH:MM:SS.SSS" />,
  name: "Time format HH:MM:SS.SSS"
}`,...y.parameters?.docs?.source},description:{story:"Demonstrates the time format HH:MM:SS.SSS.",...y.parameters?.docs?.description}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput emitTimePartChange label="What time would you like to collect your coffee?" timeFormat="HH:MM:SS.SSS" onIcTimeChange={event => console.log("icTimeChange with time parts", event.detail)} />,
  name: "IcTimeChange with emitTimePartChange - Milliseconds"
}`,...H.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput label="What time would you like to collect your coffee? We are closed before 08:00." min="08:00:00" />,
  name: "Min time"
}`,...b.parameters?.docs?.source},description:{story:"Setting min time allows you to restrict the earliest time that can be selected.\nThe value can be in any format supported as `timeFormat`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.",...b.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput label="What time would you like to collect your coffee? We are closed after 16:00." max="16:00:00" />,
  name: "Max time"
}`,...g.parameters?.docs?.source},description:{story:"Setting max time allows you to restrict the latest time that can be selected.\nThe value can be in any format supported as `timeFormat`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.",...g.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeInput id="time-input-default-disable-time" label="What time would you like to collect your coffee? We are closed between 08:00 and 10:00." disableTimes={[{
    start: "08:00",
    end: "10:00"
  }]} />,
  name: "Disable times"
}`,...v.parameters?.docs?.source},description:{story:"To disable specific times in the time input, set the `disableTimes` prop.\nThe `disableTimes` prop accepts an array of time objects or strings.\nEach time object can have a `start` and `end` property to define a range of disabled times, or it can be a single time string to disable that specific time.\nThe time can be in any format supported as `timeFormat`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.",...v.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:"The time input can be cleared by setting the the value attribute to one of the following:\n- empty string\n- `null`\n- `undefined`",...S.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:'Go to the <ic-link href="/?path=/story/react-components-time-input--playground">separate page for the playground example</ic-link> to view the prop controls.',...w.parameters?.docs?.description}}};const V=["Default","IcTimeChangeEvent","WithValue","DateObject","ZuluTime","HideLabel","Required","Disabled","Sizes","CustomHelperText","HideHelperText","Validation","AriaLiveBehaviour","IcTimeChangeEmitTimePartChanges","TimePeriod","TimePeriodAMPMToggle","IcTimeChangeEmitTimePartChanges12Hour","HHMM","Milliseconds","IcTimeChangeEmitTimePartChangesMilliseconds","MinTime","MaxTime","DisableTimes","WithClearingValue","Playground"],U=Object.freeze(Object.defineProperty({__proto__:null,AriaLiveBehaviour:x,CustomHelperText:d,DateObject:l,Default:o,DisableTimes:v,Disabled:m,HHMM:T,HideHelperText:C,HideLabel:s,IcTimeChangeEmitTimePartChanges:h,IcTimeChangeEmitTimePartChanges12Hour:W,IcTimeChangeEmitTimePartChangesMilliseconds:H,IcTimeChangeEvent:i,MaxTime:g,Milliseconds:y,MinTime:b,Playground:w,Required:c,Sizes:u,TimePeriod:f,TimePeriodAMPMToggle:M,Validation:p,WithClearingValue:S,WithValue:n,ZuluTime:k,__namedExportsOrder:V,default:z},Symbol.toStringTag,{value:"Module"}));export{U as I};
