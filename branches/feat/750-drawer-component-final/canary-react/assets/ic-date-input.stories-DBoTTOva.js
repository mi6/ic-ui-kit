import{r as C,R as e,I as n,a as F,b as B}from"./iframe-CVTEl_h5.js";import{i as a}from"./components-Dp2Ii5GV.js";const L=""+new URL("readme-CzF6pt5i.md",import.meta.url).href,{useArgs:P}=__STORYBOOK_MODULE_PREVIEW_API__,A={title:"React Components/Date Input",component:a,parameters:{componentAPI:{data:L}}},s={render:()=>e.createElement(e.Fragment,null,e.createElement(a,{label:"When would you like to collect your coffee?",onIcChange:t=>console.log(t.detail.value)}),e.createElement("br",null),e.createElement(a,{label:"When would you like to collect your coffee?",dateFormat:"MM/DD/YYYY"}),e.createElement("br",null),e.createElement(a,{label:"When would you like to collect your coffee?",dateFormat:"YYYY/MM/DD"})),name:"Basic"},i={render:()=>e.createElement(a,{label:"When would you like to collect your coffee?",onIcChange:t=>console.log(t.detail.value,t.detail.utcValue)}),name:"onIcChange event"},c={render:()=>e.createElement(a,{id:"date-input-default-date-with-value",label:"When would you like to collect your coffee?",value:"21/01/2001"}),name:"With value"},I={render:()=>e.createElement(a,{label:"When would you like to collect your coffee?",value:new Date("28 November 2021")}),name:"Date object"},E={render:()=>e.createElement(a,{label:"When would you like to collect your coffee?",value:new Date("28 November 2021").toISOString()}),name:"Zulu datetime"},S={render:()=>e.createElement(a,{label:"When would you like to collect your coffee?",value:"25-05-2005"}),name:"With hyphens"},k={render:()=>e.createElement(a,{label:"When would you like to collect your coffee?",value:Date.now()}),name:"Epoch time"},u={render:()=>e.createElement(a,{label:"When would you like to collect your coffee?",hideLabel:!0}),name:"Hide label"},d={render:()=>e.createElement(a,{label:"When would you like to collect your coffee?",required:!0}),name:"Required"},p={render:()=>e.createElement(a,{label:"When would you like to collect your coffee?",disabled:!0}),name:"Disabled"},m={render:()=>e.createElement(e.Fragment,null,e.createElement(a,{label:"When would you like to collect your coffee?",size:"small"}),e.createElement("br",null),e.createElement(a,{label:"When would you like to collect your coffee?"}),e.createElement("br",null),e.createElement(a,{label:"When would you like to collect your coffee?",size:"large"})),name:"Sizes"},h={render:()=>e.createElement(e.Fragment,null,e.createElement(a,{label:"When would you like to collect your coffee?",helperText:"We will have your order ready for you on this date"}),e.createElement("br",null),e.createElement(a,{label:"When would you like to collect your coffee?"},e.createElement(F,{variant:"caption",slot:"helper-text"},e.createElement("span",null,"For special requests, ",e.createElement(B,{href:"#"},"contact us")," before choosing a date")))),name:"Custom helper text"},x={render:()=>e.createElement(a,{label:"When would you like to collect your coffee?",helperText:"You cannot see me, but you can hear me",hideHelperText:"true"}),name:"Hide helper text"},f={render:()=>e.createElement(e.Fragment,null,e.createElement(a,{label:"When would you like to collect your coffee?",validationStatus:"error",validationText:"There is a coffee shortage forecast for that day. Please choose a different date."}),e.createElement("br",null),e.createElement(a,{label:"When would you like to collect your coffee?",validationStatus:"warning",validationText:"Please be aware that there may be a coffee shortage on that day."}),e.createElement("br",null),e.createElement(a,{label:"When would you like to collect your coffee?",validationStatus:"success",validationText:"Your coffee will be available for you to collect on this day."})),name:"Custom validation"},T={render:()=>{const[t,r]=C.useState(!1),[o,l]=C.useState(!1);return e.createElement(e.Fragment,null,e.createElement(a,{label:"When would you like to collect your coffee?",helperText:"Error already set on page load and aria-live overridden as 'assertive'",validationStatus:t?"":"error",validationText:t?"":"First error message",validationAriaLive:"assertive"}),e.createElement("br",null),e.createElement(a,{label:"When would you like to collect your coffee?",helperText:"Error set after page load and aria-live overridden as 'assertive'",validationStatus:t?"error":"",validationText:t?"Second error message":"",validationAriaLive:"assertive"}),e.createElement("br",null),e.createElement(n,{onClick:()=>r(!t)},"Toggle errors"),e.createElement("br",null),e.createElement("br",null),e.createElement("br",null),e.createElement("br",null),e.createElement(a,{label:"When would you like to collect your coffee?",helperText:"Default aria-live behaviour (i.e. 'polite')",validationStatus:o?"error":"",validationText:o?"Third error message":""}),e.createElement("br",null),e.createElement(a,{label:"When would you like to collect your coffee?",helperText:"Default aria-live behaviour (i.e. 'polite')",validationStatus:o?"error":"",validationText:o?"Fourth error message":""}),e.createElement("br",null),e.createElement(n,{onClick:()=>l(!o)},"Toggle errors"))},name:"Aria-live behaviour"},b={render:()=>e.createElement(a,{label:"When would you like to collect your coffee?",disablePast:!0}),name:"Disabled past dates"},y={render:()=>e.createElement(a,{label:"When would you like to collect your coffee?",disableFuture:!0}),name:"Disabled future dates"},v={render:()=>e.createElement(a,{label:"When would you like to collect your coffee?",min:"02-01-2023",max:"20/07/2023"}),name:"Min and max"},g={render:()=>{const t=r=>{console.log(r)};return e.createElement("form",{onSubmit:t},e.createElement(a,{label:"When would you like to collect your coffee?",value:new Date("13 March 1951")}),e.createElement(n,{type:"submit"},"Submit"),e.createElement(n,{type:"reset"},"Reset"))}},D={render:()=>{const[t,r]=C.useState("21/01/2001"),o=()=>{r(new Date("05 May 2005"))},l=Y=>{r(Y)};return e.createElement(e.Fragment,null,e.createElement(a,{label:"When would you like to collect your coffee?",value:t}),e.createElement("br",null),e.createElement("div",{style:{display:"flex",gap:"8px"}},e.createElement(n,{onClick:()=>o()},"Update date"),e.createElement(n,{onClick:()=>l(null)},"Set null"),e.createElement(n,{onClick:()=>l("")},"Set Empty String"),e.createElement(n,{onClick:()=>l(void 0)},"Set undefined")))},name:"With clearing value"},H={dateFormat:"DD/MM/YYYY",disabled:!1,disableDays:[],disableDaysMessage:"This day is not available",disableFuture:!1,disableFutureMessage:"This date is in the future",disablePast:!1,disablePastMessage:"This date is in the past",helperText:"Choose a date",hideHelperText:!1,hideLabel:!1,invalidDateMessage:"Invalid date",label:"When would you like to collect your coffee?",max:"",min:"",required:!1,showClearButton:!0,size:"medium",theme:"inherit",validationAriaLive:"polite",validationStatus:"no status",validationText:"",value:""},w={render:t=>{const[{value:r},o]=P(),l=Y=>{const W=Y.detail.value;let M;W===null?M="":M=`${W.getDate()}-${W.getMonth()+1}-${W.getFullYear()}`,o({value:M})};return e.createElement(a,{dateFormat:t.dateFormat,disabled:t.disabled,disableDays:t.disableDays,disableDaysMessage:t.disableDaysMessage,disableFuture:t.disableFuture,disableFutureMessage:t.disableFutureMessage,disablePast:t.disablePast,disablePastMessage:t.disablePastMessage,helperText:t.helperText,hideHelperText:t.hideHelperText,hideLabel:t.hideLabel,invalidDateMessage:t.invalidDateMessage,label:t.label,max:t.max,min:t.min,required:t.required,showClearButton:t.showClearButton,size:t.size,startOfWeek:t.startOfWeek,theme:t.theme,validationAriaLive:t.validationAriaLive,validationStatus:t.validationStatus==="no status"?"":t.validationStatus,validationText:t.validationText,value:r,onIcChange:l})},args:H,argTypes:{dateFormat:{options:["DD/MM/YYYY","MM/DD/YYYY","YYYY/MM/DD"],control:{type:"inline-radio"}},validationAriaLive:{options:["polite","assertive","off"],control:{type:"inline-radio"}},validationStatus:{options:["no status","error","success","warning"],control:{type:"inline-radio"}},size:{options:["small","medium","large"],control:{type:"inline-radio"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcDateInput label="When would you like to collect your coffee?" onIcChange={ev => console.log(ev.detail.value)} />
      <br />
      <IcDateInput label="When would you like to collect your coffee?" dateFormat="MM/DD/YYYY" />
      <br />
      <IcDateInput label="When would you like to collect your coffee?" dateFormat="YYYY/MM/DD" />
    </>,
  name: "Basic"
}`,...s.parameters?.docs?.source},description:{story:`Use the date input component to manually type in a date in different formats.

The input \`label\` is the only required prop for date input.

Click the 'Component API' tab to view all the available props, events and slots for date input.

To use the date input component, import \`@ukic/canary-react\` into your application.

Each example below demonstrates the date input in three different date formats:
- DD/MM/YYYY (Default date format)
- MM/DD/YYYY
- YYYY/MM/DD

Dates can be added by manually typing into the input or using the up and down arrow keys.

To move between day, month and year using the keyboard, provide the required values based on the placeholders or use \`/\` or \`-\`.

By default, the helper text displays the date format.`,...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <IcDateInput label="When would you like to collect your coffee?" onIcChange={ev => console.log(ev.detail.value, ev.detail.utcValue)} />,
  name: "onIcChange event"
}`,...i.parameters?.docs?.source},description:{story:"Retrieving the date input value via `onIcChange` returns the date as a Date object.\n\nThe event returns the Date object when day, month and year have been entered.",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <IcDateInput id="date-input-default-date-with-value" label="When would you like to collect your coffee?" value="21/01/2001" />,
  name: "With value"
}`,...c.parameters?.docs?.source},description:{story:`To set a value to the date input, pass the date value in the relevant date format.

The date input also accepts a number of different date formats within the value prop:
- [Date object](#date-object)
- [Zulu datetime](#zulu-datetime)
- [With hyphens (DD-MM-YYYY)](#with-hyphens)
- [Epoch time](#epoch-time)`,...c.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <IcDateInput label="When would you like to collect your coffee?" value={new Date("28 November 2021")} />,
  name: "Date object"
}`,...I.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <IcDateInput label="When would you like to collect your coffee?" value={new Date("28 November 2021").toISOString()} />,
  name: "Zulu datetime"
}`,...E.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <IcDateInput label="When would you like to collect your coffee?" value="25-05-2005" />,
  name: "With hyphens"
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <IcDateInput label="When would you like to collect your coffee?" value={Date.now()} />,
  name: "Epoch time"
}`,...k.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <IcDateInput label="When would you like to collect your coffee?" hideLabel />,
  name: "Hide label"
}`,...u.parameters?.docs?.source},description:{story:"To hide the label, set the `hideLabel` prop to `true`. The required `label` will still be read out by screen readers.",...u.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <IcDateInput label="When would you like to collect your coffee?" required />,
  name: "Required"
}`,...d.parameters?.docs?.source},description:{story:"To set the date input as a required field, add the `required` prop. This will add an asterisk at the end of the date input label.",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <IcDateInput label="When would you like to collect your coffee?" disabled />,
  name: "Disabled"
}`,...p.parameters?.docs?.source},description:{story:"Set the `disabled`, to prevent interaction with the date input.",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcDateInput label="When would you like to collect your coffee?" size="small" />
      <br />
      <IcDateInput label="When would you like to collect your coffee?" />
      <br />
      <IcDateInput label="When would you like to collect your coffee?" size="large" />
    </>,
  name: "Sizes"
}`,...m.parameters?.docs?.source},description:{story:"The date input is available in three different sizes:\n\n- `small`\n- `medium` (default)\n- `large`",...m.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <>
    <IcDateInput label="When would you like to collect your coffee?" helperText="We will have your order ready for you on this date" />
    <br />
    <IcDateInput label="When would you like to collect your coffee?">
      <IcTypography variant="caption" slot="helper-text">
        <span>
          For special requests, <IcLink href="#">contact us</IcLink> before choosing a date
        </span>
      </IcTypography>
    </IcDateInput>
    </>,
  name: "Custom helper text"
}`,...h.parameters?.docs?.source},description:{story:"Use the helper text to add additional detail for the date input. Display custom content using the `helper-text` slot.",...h.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <IcDateInput label="When would you like to collect your coffee?" helperText="You cannot see me, but you can hear me" hideHelperText="true" />,
  name: "Hide helper text"
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcDateInput label="When would you like to collect your coffee?" validationStatus="error" validationText="There is a coffee shortage forecast for that day. Please choose a different date." />
      <br />
      <IcDateInput label="When would you like to collect your coffee?" validationStatus="warning" validationText="Please be aware that there may be a coffee shortage on that day." />
      <br />
      <IcDateInput label="When would you like to collect your coffee?" validationStatus="success" validationText="Your coffee will be available for you to collect on this day." />
    </>,
  name: "Custom validation"
}`,...f.parameters?.docs?.source},description:{story:"Validation on date input is set via `validationStatus` and `validationText`.\n\n`validationStatus` will set the style of the validation message. `validationStatus` accepts:\n- `error`\n- `warning`\n- `success`\n\n`validationStatus` is required for the `validationText` to appear.",...f.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [showErrors1, setShowErrors1] = useState(false);
    const [showErrors2, setShowErrors2] = useState(false);
    return <>
          <IcDateInput label="When would you like to collect your coffee?" helperText="Error already set on page load and aria-live overridden as 'assertive'" validationStatus={showErrors1 ? "" : "error"} validationText={showErrors1 ? "" : "First error message"} validationAriaLive="assertive" />
          <br />
          <IcDateInput label="When would you like to collect your coffee?" helperText="Error set after page load and aria-live overridden as 'assertive'" validationStatus={showErrors1 ? "error" : ""} validationText={showErrors1 ? "Second error message" : ""} validationAriaLive="assertive" />
          <br />
          <IcButton onClick={() => setShowErrors1(!showErrors1)}>
            Toggle errors
          </IcButton>
          <br />
          <br />
          <br />
          <br />
          <IcDateInput label="When would you like to collect your coffee?" helperText="Default aria-live behaviour (i.e. 'polite')" validationStatus={showErrors2 ? "error" : ""} validationText={showErrors2 ? "Third error message" : ""} />
          <br />
          <IcDateInput label="When would you like to collect your coffee?" helperText="Default aria-live behaviour (i.e. 'polite')" validationStatus={showErrors2 ? "error" : ""} validationText={showErrors2 ? "Fourth error message" : ""} />
          <br />
          <IcButton onClick={() => setShowErrors2(!showErrors2)}>
            Toggle errors
          </IcButton>
        </>;
  },
  name: "Aria-live behaviour"
}`,...T.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <IcDateInput label="When would you like to collect your coffee?" disablePast />,
  name: "Disabled past dates"
}`,...b.parameters?.docs?.source},description:{story:"Validation can be set on the date input if a date in the past has been set by setting the `disablePast` prop.\n\nEnter a date in the past to view the validation message.",...b.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <IcDateInput label="When would you like to collect your coffee?" disableFuture />,
  name: "Disabled future dates"
}`,...y.parameters?.docs?.source},description:{story:"Validation can be set on the date input if a date in the future has been set by setting the `disableFuture` prop.\n\nEnter a date in the future to view the validation message.",...y.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <IcDateInput label="When would you like to collect your coffee?" min="02-01-2023" max="20/07/2023" />,
  name: "Min and max"
}`,...v.parameters?.docs?.source},description:{story:`It is possible to set a min and max date range. If a date is set and it is before the min or after the max date, a validation error will appear.

The min or max dates accept the following date formats:
- [Date string](#with-value) (with slashes i.e. DD/MM/YYYY)
- [Date string with hyphens](#with-hyphens) (i.e. DD-MM-YYYY)
- [Date object](#date-object)
- [Zulu datetime](#zulu-datetime)

Enter a date after 2nd Jan 2023 and before 20th July to view the validation message.

In this code snippet, the min and max have been set using two different date formats to demonstrate its flexibility.`,...v.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const formSubmit = e => {
      console.log(e);
    };
    return <form onSubmit={formSubmit}>
        <IcDateInput label="When would you like to collect your coffee?" value={new Date("13 March 1951")} />
        <IcButton type="submit">Submit</IcButton>
        <IcButton type="reset">Reset</IcButton>
      </form>;
  }
}`,...g.parameters?.docs?.source},description:{story:`When the date input component is used within a form, the date value is returned as an ISO string.

The value is console logged to the browser dev tools.`,...g.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("21/01/2001");
    const handleUpdate = () => {
      setValue(new Date("05 May 2005"));
    };
    const handleClearValue = value => {
      setValue(value);
    };
    return <>
        <IcDateInput label="When would you like to collect your coffee?" value={value} />
        <br />
        <div style={{
        display: "flex",
        gap: "8px"
      }}>
          <IcButton onClick={() => handleUpdate()}>Update date</IcButton>
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
}`,...D.parameters?.docs?.source},description:{story:"The date input can be cleared by setting the the value attribute to one of the following:\n- empty string\n- `null`\n- `undefined`",...D.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [{
      value
    }, updateArgs] = useArgs();
    const updateDate = ev => {
      const date = ev.detail.value;
      let formattedDate;
      date === null ? formattedDate = "" : formattedDate = \`\${date.getDate()}-\${date.getMonth() + 1}-\${date.getFullYear()}\`;
      updateArgs({
        value: formattedDate
      });
    };
    return <IcDateInput dateFormat={args.dateFormat} disabled={args.disabled} disableDays={args.disableDays} disableDaysMessage={args.disableDaysMessage} disableFuture={args.disableFuture} disableFutureMessage={args.disableFutureMessage} disablePast={args.disablePast} disablePastMessage={args.disablePastMessage} helperText={args.helperText} hideHelperText={args.hideHelperText} hideLabel={args.hideLabel} invalidDateMessage={args.invalidDateMessage} label={args.label} max={args.max} min={args.min} required={args.required} showClearButton={args.showClearButton} size={args.size} startOfWeek={args.startOfWeek} theme={args.theme} validationAriaLive={args.validationAriaLive} validationStatus={args.validationStatus === "no status" ? "" : args.validationStatus} validationText={args.validationText} value={value} onIcChange={updateDate} />;
  },
  args: defaultArgs,
  argTypes: {
    dateFormat: {
      options: ["DD/MM/YYYY", "MM/DD/YYYY", "YYYY/MM/DD"],
      control: {
        type: "inline-radio"
      }
    },
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
    }
  },
  name: "Playground"
}`,...w.parameters?.docs?.source},description:{story:'Go to the <ic-link href="/?path=/story/react-components-date-input--playground">separate page for the playground example</ic-link> to view the prop controls.',...w.parameters?.docs?.description}}};const V=["Basic","IcChangeEvent","WithValue","DateObject","ZuluDatetime","WithHyphens","EpochTime","HideLabel","Required","Disabled","Sizes","HelperText","HideHelperText","CustomValidation","AriaLiveBehaviour","DisabledPastDates","DisabledFutureDates","MinMax","Form","WithClearingValue","Playground"],O=Object.freeze(Object.defineProperty({__proto__:null,AriaLiveBehaviour:T,Basic:s,CustomValidation:f,DateObject:I,Disabled:p,DisabledFutureDates:y,DisabledPastDates:b,EpochTime:k,Form:g,HelperText:h,HideHelperText:x,HideLabel:u,IcChangeEvent:i,MinMax:v,Playground:w,Required:d,Sizes:m,WithClearingValue:D,WithHyphens:S,WithValue:c,ZuluDatetime:E,__namedExportsOrder:V,default:A},Symbol.toStringTag,{value:"Module"}));export{O as I};
