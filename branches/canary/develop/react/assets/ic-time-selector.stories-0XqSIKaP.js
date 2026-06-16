import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{kt as r,n as i,s as a,t as o}from"./iframe-Bx8C_hwt.js";import{f as s,l as c}from"./components-CDP33u_Y.js";import{n as l,t as u}from"./readme-Dv84jsKm.js";var d=e({DateObject:()=>v,Default:()=>h,DefaultValue12Hour:()=>S,DisableTimes:()=>T,IcChangeEvent:()=>g,IcChangeEventTimePeriod:()=>x,Large:()=>D,MaxTime:()=>w,MinTime:()=>C,Playground:()=>j,Small:()=>E,TimePeriod:()=>b,UpdatingValue:()=>k,WithClearingValue:()=>O,WithValue:()=>_,ZuluTime:()=>y,__namedExportsOrder:()=>M,default:()=>m}),f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N=t((()=>{i(),f=n(r()),u(),s(),p=o(),m={title:`React Components/Time Selector`,component:c,parameters:{componentAPI:{data:l}}},h={render:()=>(0,p.jsx)(c,{}),name:`Default`},g={render:()=>(0,p.jsx)(c,{onIcChange:e=>console.log(`icChange`,e.detail.value)}),name:`icChange event`},_={render:()=>(0,p.jsx)(c,{value:`13:45`}),name:`With value`},v={render:()=>(0,p.jsx)(c,{value:new Date(`2025-07-14T15:30`)}),name:`Date object`},y={render:()=>(0,p.jsx)(c,{value:`15:30Z`}),name:`Zulu time`},b={render:()=>(0,p.jsx)(c,{timePeriod:`12`}),name:`Time period`},x={render:()=>(0,p.jsx)(c,{timePeriod:`12`,onIcChange:e=>console.log(`icChange`,e.detail)}),name:`icChange event - with time period`},S={render:()=>(0,p.jsx)(c,{value:`14:30`,timePeriod:`12`}),name:`Default value - 12 hour`},C={render:()=>(0,p.jsx)(c,{min:`09:00`}),name:`Min time`},w={render:()=>(0,p.jsx)(c,{max:`18:00`}),name:`Max time`},T={render:()=>(0,p.jsx)(c,{disableTimes:[{start:`08:00`,end:`10:00`}]}),name:`Disable times`},E={render:()=>(0,p.jsx)(c,{size:`small`,timePeriod:`12`}),name:`Small`},D={render:()=>(0,p.jsx)(c,{size:`large`,timePeriod:`12`}),name:`Large`},O={render:()=>{let[e,t]=(0,f.useState)(`08:30`),n=()=>{t(`08:30`)},r=e=>{t(e)};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c,{value:e}),(0,p.jsx)(`br`,{}),(0,p.jsxs)(`div`,{style:{display:`flex`,gap:`8px`},children:[(0,p.jsx)(a,{onClick:()=>n(),children:`Update time`}),(0,p.jsx)(a,{onClick:()=>r(null),children:`Set null`}),(0,p.jsx)(a,{onClick:()=>r(``),children:`Set Empty String`}),(0,p.jsx)(a,{onClick:()=>r(void 0),children:`Set undefined`})]})]})},name:`With clearing value`},k={render:()=>{let[e,t]=(0,f.useState)(`08:30`),n=()=>{t(`08:30`)},r=()=>{t(`10:45`)};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c,{value:e}),(0,p.jsx)(`br`,{}),(0,p.jsxs)(`div`,{style:{display:`flex`,gap:`8px`},children:[(0,p.jsx)(a,{onClick:()=>n(),children:`Reset time`}),(0,p.jsx)(a,{onClick:()=>r(),children:`Set new time`})]})]})},name:`Updating value`},A={disableTimes:[{start:`08:00`,end:`10:00`}],max:``,min:``,size:`medium`,theme:`inherit`,timePeriod:`24`,value:`12:00`},j={render:e=>(0,p.jsx)(c,{disableTimes:e.disableTimes,max:e.max,min:e.min,size:e.size,theme:e.theme,timePeriod:e.timePeriod,value:e.value}),args:A,argTypes:{size:{options:[`small`,`medium`,`large`],control:{type:`inline-radio`}},theme:{options:[`inherit`,`light`,`dark`],control:{type:`inline-radio`}},timePeriod:{options:[`24`,`12`],control:{type:`inline-radio`}}},name:`Playground`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeSelector />,
  name: "Default"
}`,...h.parameters?.docs?.source},description:{story:`Use the time selector component to manually select a time in different formats.

Click the 'Component API' tab to view all the available attributes, events and slots for time selector.

To use the time selector component, import \`@ukic/canary-web-components\` into your application.

Times can be selected by scrolling through each column or using the up and down arrow keys.

To move between hour, minute and second using the keyboard, provide the required values based on the placeholders or use \`:\`.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeSelector onIcChange={event => console.log("icChange", event.detail.value)} />,
  name: "icChange event"
}`,...g.parameters?.docs?.source},description:{story:`Retrieving the time selector value via \`icChange\` returns the time as a Date object.

The event returns the Date object once hour, minute and second have been selected by clicking the tick icon button.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeSelector value="13:45" />,
  name: "With value"
}`,..._.parameters?.docs?.source},description:{story:`To set a value to the time selector, pass the time value in the relevant time format.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeSelector value={new Date("2025-07-14T15:30")} />,
  name: "Date object"
}`,...v.parameters?.docs?.source},description:{story:`The time selector also accepts a number of different time formats within the value attribute:
- [Date object](#date-object)
- [Zulu time](#zulu-time)`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeSelector value="15:30Z" />,
  name: "Zulu time"
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeSelector timePeriod="12" />,
  name: "Time period"
}`,...b.parameters?.docs?.source},description:{story:"Demonstrates the `timePeriod` prop for 12-hour selection.",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeSelector timePeriod="12" onIcChange={event => console.log("icChange", event.detail)} />,
  name: "icChange event - with time period"
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeSelector value="14:30" timePeriod="12" />,
  name: "Default value - 12 hour"
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeSelector min="09:00" />,
  name: "Min time"
}`,...C.parameters?.docs?.source},description:{story:"Setting min time allows you to restrict the earliest time that can be selected.\nThe value can be in any format supported as `timeFormat`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeSelector max="18:00" />,
  name: "Max time"
}`,...w.parameters?.docs?.source},description:{story:"Setting max time allows you to restrict the latest time that can be selected.\nThe value can be in any format supported as `timeFormat`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.",...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeSelector disableTimes={[{
    start: "08:00",
    end: "10:00"
  }]} />,
  name: "Disable times"
}`,...T.parameters?.docs?.source},description:{story:"To disable specific times in the time selector, set the `disableTimes` prop.\nThe `disableTimes` prop accepts an array of time objects or strings.\nEach time object can have a `start` and `end` property to define a range of disabled times, or it can be a single time string to disable that specific time.\nThe time can be in any format supported as `timeFormat`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeSelector size="small" timePeriod="12" />,
  name: "Small"
}`,...E.parameters?.docs?.source},description:{story:`Demonstrates the size options for the time selector component.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <IcTimeSelector size="large" timePeriod="12" />,
  name: "Large"
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:"The time selector can be cleared by setting the the value attribute to one of the following:\n- empty string\n- `null`\n- `undefined`",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:`Go to the <ic-link href="/?path=/story/react-components-time-selector--playground">separate page for the playground example</ic-link> to view the prop controls.`,...j.parameters?.docs?.description}}},M=[`Default`,`IcChangeEvent`,`WithValue`,`DateObject`,`ZuluTime`,`TimePeriod`,`IcChangeEventTimePeriod`,`DefaultValue12Hour`,`MinTime`,`MaxTime`,`DisableTimes`,`Small`,`Large`,`WithClearingValue`,`UpdatingValue`,`Playground`]}));N();export{v as DateObject,h as Default,S as DefaultValue12Hour,T as DisableTimes,g as IcChangeEvent,x as IcChangeEventTimePeriod,D as Large,w as MaxTime,C as MinTime,j as Playground,E as Small,b as TimePeriod,k as UpdatingValue,O as WithClearingValue,_ as WithValue,y as ZuluTime,M as __namedExportsOrder,m as default,N as n,d as t};