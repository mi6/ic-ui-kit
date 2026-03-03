import{R as e,r as C,I as h}from"./iframe-ChRL-4V8.js";import{r as P}from"./readme-svjI2Lnt.js";import{a as t}from"./components-jHLr2lA2.js";const D={title:"React Components/Time Selector",component:t,parameters:{componentAPI:{data:P}}},a={render:()=>e.createElement(t,null),name:"Default"},n={render:()=>e.createElement(t,{onIcChange:r=>console.log("icChange",r.detail.value)}),name:"icChange event"},o={render:()=>e.createElement(t,{value:"13:45"}),name:"With value"},i={render:()=>e.createElement(t,{value:new Date("2025-07-14T15:30")}),name:"Date object"},S={render:()=>e.createElement(t,{value:"15:30Z"}),name:"Zulu time"},s={render:()=>e.createElement(t,{timePeriod:"12"}),name:"Time period"},T={render:()=>e.createElement(t,{timePeriod:"12",onIcChange:r=>console.log("icChange",r.detail)}),name:"icChange event - with time period"},b={render:()=>e.createElement(t,{value:"14:30",timePeriod:"12"}),name:"Default value - 12 hour"},c={render:()=>e.createElement(t,{min:"09:00"}),name:"Min time"},l={render:()=>e.createElement(t,{max:"18:00"}),name:"Max time"},m={render:()=>e.createElement(t,{disableTimes:[{start:"08:00",end:"10:00"}]}),name:"Disable times"},d={render:()=>e.createElement(t,{size:"small",timePeriod:"12"}),name:"Small"},y={render:()=>e.createElement(t,{size:"large",timePeriod:"12"}),name:"Large"},u={render:()=>{const[r,g]=C.useState("08:30"),I=()=>{g("08:30")},v=E=>{g(E)};return e.createElement(e.Fragment,null,e.createElement(t,{value:r}),e.createElement("br",null),e.createElement("div",{style:{display:"flex",gap:"8px"}},e.createElement(h,{onClick:()=>I()},"Update time"),e.createElement(h,{onClick:()=>v(null)},"Set null"),e.createElement(h,{onClick:()=>v("")},"Set Empty String"),e.createElement(h,{onClick:()=>v(void 0)},"Set undefined")))},name:"With clearing value"},f={render:()=>{const[r,g]=C.useState("08:30"),I=()=>{g("08:30")},v=()=>{g("10:45")};return e.createElement(e.Fragment,null,e.createElement(t,{value:r}),e.createElement("br",null),e.createElement("div",{style:{display:"flex",gap:"8px"}},e.createElement(h,{onClick:()=>I()},"Reset time"),e.createElement(h,{onClick:()=>v()},"Set new time")))},name:"Updating value"},x={disableTimes:[{start:"08:00",end:"10:00"}],max:"",min:"",size:"medium",theme:"inherit",timePeriod:"24",value:"12:00"},p={render:r=>e.createElement(t,{disableTimes:r.disableTimes,max:r.max,min:r.min,size:r.size,theme:r.theme,timePeriod:r.timePeriod,value:r.value}),args:x,argTypes:{size:{options:["small","medium","large"],control:{type:"inline-radio"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}},timePeriod:{options:["24","12"],control:{type:"inline-radio"}}},name:"Playground"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeSelector />,
  name: "Default"
}`,...a.parameters?.docs?.source},description:{story:`Use the time selector component to manually select a time in different formats.

Click the 'Component API' tab to view all the available attributes, events and slots for time selector.

To use the time selector component, import \`@ukic/canary-web-components\` into your application.

Times can be selected by scrolling through each column or using the up and down arrow keys.

To move between hour, minute and second using the keyboard, provide the required values based on the placeholders or use \`:\`.`,...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeSelector onIcChange={event => console.log("icChange", event.detail.value)} />,
  name: "icChange event"
}`,...n.parameters?.docs?.source},description:{story:"Retrieving the time selector value via `icChange` returns the time as a Date object.\n\nThe event returns the Date object once hour, minute and second have been selected by clicking the tick icon button.",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeSelector value="13:45" />,
  name: "With value"
}`,...o.parameters?.docs?.source},description:{story:"To set a value to the time selector, pass the time value in the relevant time format.",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeSelector value={new Date("2025-07-14T15:30")} />,
  name: "Date object"
}`,...i.parameters?.docs?.source},description:{story:`The time selector also accepts a number of different time formats within the value attribute:
- [Date object](#date-object)
- [Zulu time](#zulu-time)`,...i.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeSelector value="15:30Z" />,
  name: "Zulu time"
}`,...S.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeSelector timePeriod="12" />,
  name: "Time period"
}`,...s.parameters?.docs?.source},description:{story:"Demonstrates the `timePeriod` prop for 12-hour selection.",...s.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeSelector timePeriod="12" onIcChange={event => console.log("icChange", event.detail)} />,
  name: "icChange event - with time period"
}`,...T.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeSelector value="14:30" timePeriod="12" />,
  name: "Default value - 12 hour"
}`,...b.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeSelector min="09:00" />,
  name: "Min time"
}`,...c.parameters?.docs?.source},description:{story:"Setting min time allows you to restrict the earliest time that can be selected.\nThe value can be in any format supported as `timeFormat`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeSelector max="18:00" />,
  name: "Max time"
}`,...l.parameters?.docs?.source},description:{story:"Setting max time allows you to restrict the latest time that can be selected.\nThe value can be in any format supported as `timeFormat`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.",...l.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeSelector disableTimes={[{
    start: "08:00",
    end: "10:00"
  }]} />,
  name: "Disable times"
}`,...m.parameters?.docs?.source},description:{story:"To disable specific times in the time selector, set the `disableTimes` prop.\nThe `disableTimes` prop accepts an array of time objects or strings.\nEach time object can have a `start` and `end` property to define a range of disabled times, or it can be a single time string to disable that specific time.\nThe time can be in any format supported as `timeFormat`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.",...m.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeSelector size="small" timePeriod="12" />,
  name: "Small"
}`,...d.parameters?.docs?.source},description:{story:"Demonstrates the size options for the time selector component.",...d.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeSelector size="large" timePeriod="12" />,
  name: "Large"
}`,...y.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("08:30");
    const handleUpdate = () => {
      setValue("08:30");
    };
    const handleClearValue = value => {
      setValue(value);
    };
    return <>
        <IcTimeSelector value={value} />
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
}`,...u.parameters?.docs?.source},description:{story:"The time selector can be cleared by setting the the value attribute to one of the following:\n- empty string\n- `null`\n- `undefined`",...u.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("08:30");
    const handleReset = () => {
      setValue("08:30");
    };
    const handleNewValue = () => {
      setValue("10:45");
    };
    return <>
        <IcTimeSelector value={value} />
        <br />
        <div style={{
        display: "flex",
        gap: "8px"
      }}>
          <IcButton onClick={() => handleReset()}>Reset time</IcButton>
          <IcButton onClick={() => handleNewValue()}>Set new time</IcButton>
        </div>
      </>;
  },
  name: "Updating value"
}`,...f.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <IcTimeSelector disableTimes={args.disableTimes} max={args.max} min={args.min} size={args.size} theme={args.theme} timePeriod={args.timePeriod} value={args.value} />;
  },
  args: defaultArgs,
  argTypes: {
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
    timePeriod: {
      options: ["24", "12"],
      control: {
        type: "inline-radio"
      }
    }
  },
  name: "Playground"
}`,...p.parameters?.docs?.source},description:{story:'Go to the <ic-link href="/?path=/story/react-components-time-selector--playground">separate page for the playground example</ic-link> to view the prop controls.',...p.parameters?.docs?.description}}};const V=["Default","IcChangeEvent","WithValue","DateObject","ZuluTime","TimePeriod","IcChangeEventTimePeriod","DefaultValue12Hour","MinTime","MaxTime","DisableTimes","Small","Large","WithClearingValue","UpdatingValue","Playground"],M=Object.freeze(Object.defineProperty({__proto__:null,DateObject:i,Default:a,DefaultValue12Hour:b,DisableTimes:m,IcChangeEvent:n,IcChangeEventTimePeriod:T,Large:y,MaxTime:l,MinTime:c,Playground:p,Small:d,TimePeriod:s,UpdatingValue:f,WithClearingValue:u,WithValue:o,ZuluTime:S,__namedExportsOrder:V,default:D},Symbol.toStringTag,{value:"Module"}));export{M as I};
