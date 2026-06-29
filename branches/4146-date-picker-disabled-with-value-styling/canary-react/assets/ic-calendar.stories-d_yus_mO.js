import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{F as r,kt as i,n as a,t as o}from"./iframe-eptu9uEx.js";import{f as s,t as c}from"./components-cUkWYGJy.js";var l,u=t((()=>{l=``+new URL(`readme-DTzgCK20.md`,import.meta.url).href})),d=e({ButtonsHidden:()=>D,DateFormats:()=>x,DaysOutsideMonthHidden:()=>E,Default:()=>h,DisableDaysOfWeek:()=>C,DisableFuture:()=>T,DisablePast:()=>w,IcChangeEvent:()=>O,JavascriptDates:()=>b,MinMax:()=>y,OpenAtDate:()=>v,Playground:()=>j,Sizes:()=>g,StartOfWeek:()=>S,Value:()=>_,__namedExportsOrder:()=>M,default:()=>m}),f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N=t((()=>{f=n(i()),s(),a(),u(),p=o(),m={title:`React Components/Calendar`,component:c,parameters:{componentAPI:{data:l}}},h={render:()=>{let[e,t]=(0,f.useState)(null);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c,{onIcChange:e=>t(e.detail.value)}),(0,p.jsx)(`span`,{children:(0,p.jsx)(r,{style:{top:`420px`},children:e?`Selected date: ${e}`:`No date selected`})})]})},name:`Default`},g={render:()=>(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--ic-space-md)`},children:[(0,p.jsx)(c,{id:`small-size-calendar`,size:`small`}),(0,p.jsx)(c,{id:`medium-size-calendar`,size:`medium`}),(0,p.jsx)(c,{id:`large-size-calendar`,size:`large`})]}),name:`Sizes`},_={render:()=>(0,p.jsx)(c,{id:`value`,value:`01/01/2000`}),name:`Value`},v={render:()=>(0,p.jsx)(c,{id:`open-at-date`,openAtDate:`31/12/1999`}),name:`Open at date`},y={render:()=>(0,p.jsx)(c,{id:`min-max`,min:`01/08/2008`,max:`31/08/2008`}),name:`Min & max`},b={render:()=>(0,p.jsx)(c,{id:`js-dates`,value:new Date(2024,6,1),min:new Date(2024,6,31),max:new Date(2024,6,31)}),name:`JavaScript dates`},x={render:()=>(0,p.jsx)(c,{id:`date-formats`,dateFormat:`MM/DD/YYYY`}),name:`Date formats`},S={render:()=>(0,p.jsx)(c,{id:`start-of-week`,startOfWeek:6}),name:`Start of week`},C={render:()=>(0,p.jsx)(c,{id:`disable-weekends`,disableDays:[0,6]}),name:`Disable days of the week`},w={render:()=>(0,p.jsx)(c,{id:`disable-past`,disablePast:!0}),name:`Disable dates in past`},T={render:()=>(0,p.jsx)(c,{id:`disable-future`,disableFuture:!0}),name:`Disable dates in future`},E={render:()=>(0,p.jsx)(c,{id:`days-outside-month-hidden`,showDaysOutsideMonth:!1}),name:`Days outside month hidden`},D={render:()=>(0,p.jsx)(c,{id:`buttons-hidden`,showTodayButton:!1,showClearButton:!1}),name:`Today & clear buttons hidden`},O={render:()=>{let[e,t]=f.useState(null),[n,i]=f.useState(null);return(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`},children:[(0,p.jsx)(c,{id:`ic-change-event`,onIcChange:e=>{t(e.detail.value),i(e.detail)}}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(r,{id:`selected-date-display`,style:{top:`420px`},children:e?`Selected date: ${e}`:`No date selected`}),(0,p.jsx)(r,{id:`icchange-event-display`,style:{top:`428px`},children:n&&n.value?(0,p.jsxs)(`span`,{children:[`icChange event emitted: `,`{`,(0,p.jsx)(`br`,{}),`value: `,String(n.value),`,`,(0,p.jsx)(`br`,{}),`utcValue: `,String(n.utcValue),`,`,(0,p.jsx)(`br`,{}),`dateObject: `,`{`,`day: `,n.dateObject.day,`, month: `,n.dateObject.month,`, year: `,n.dateObject.year,`}`,(0,p.jsx)(`br`,{}),`}`]}):`No icChange event emitted`})]})]})},name:`IcChange event`},k={dateFormat:`DD/MM/YYYY`,disabled:!1,disableDays:[],disableFuture:!1,disablePast:!1,max:null,min:null,openAtDate:null,showClearButton:!0,showDaysOutsideMonth:!0,showTodayButton:!0,size:`medium`,startOfWeek:1,theme:`inherit`,value:null},A={Sunday:0,Monday:1,Tuesday:2,Wednesday:3,Thursday:4,Friday:5,Saturday:6},j={render:e=>(0,p.jsx)(c,{...e}),name:`Playground`,args:k,argTypes:{dateFormat:{options:[`DD/MM/YYYY`,`MM/DD/YYYY`,`YYYY/MM/DD`],control:{type:`inline-radio`}},size:{options:[`small`,`medium`,`large`],control:{type:`inline-radio`}},startOfWeek:{options:Object.keys(A),mapping:A,control:{type:`inline-radio`,labels:{Sunday:`Sunday`,Monday:`Monday`,Tuesday:`Tuesday`,Wednesday:`Wednesday`,Thursday:`Thursday`,Friday:`Friday`,Saturday:`Saturday`}}},theme:{options:[`inherit`,`light`,`dark`],control:{type:`inline-radio`}}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedDate, setSelectedDate] = useState(null);
    return <>
        <IcCalendar onIcChange={ev => setSelectedDate(ev.detail.value)} />
        <span>
          <IcTypography style={{
          top: "420px"
        }}>
            {selectedDate ? \`Selected date: \${selectedDate}\` : "No date selected"}
          </IcTypography>
        </span>
      </>;
  },
  name: "Default"
}`,...h.parameters?.docs?.source},description:{story:`Use a calendar to select a single date where visualising that date could be useful.

Click the 'Component API' tab to view all the available props and events for calendars.

To use the calendar component, import \`@ukic/canary-web-components\` into your application.

The default calendar uses the date format of \`DD/MM/YYYY\`.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--ic-space-md)"
  }}>
      <IcCalendar id="small-size-calendar" size="small" />
      <IcCalendar id="medium-size-calendar" size="medium" />
      <IcCalendar id="large-size-calendar" size="large" />
    </div>,
  name: "Sizes"
}`,...g.parameters?.docs?.source},description:{story:"Set the size of the calendar by using the `size` prop. This prop takes the values `small`, `medium` (default) or `large`. Depending on the chosen size, the prop will apply styling to increase or decrease the amount of spacing within the component.",...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <IcCalendar id="value" value="01/01/2000" />,
  name: "Value"
}`,..._.parameters?.docs?.source},description:{story:"The `value` prop sets the selected date in the calendar. The value can be in any format supported by the `date-format` prop, in ISO 8601 date string format (yyyy-mm-dd) or as a JavaScript Date object.",..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <IcCalendar id="open-at-date" openAtDate="31/12/1999" />,
  name: "Open at date"
}`,...v.parameters?.docs?.source},description:{story:"The `openAtDate` prop can be used to specify the date in view. This prop can be in any format supported by the `dateFormat` prop, in ISO 8601 date string format (yyyy-mm-dd) or as a JavaScript Date object.\n\nIf the `value` prop is set, the date set using the `value` prop will take precedence and the calendar will open to that date instead.",...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <IcCalendar id="min-max" min="01/08/2008" max="31/08/2008" />,
  name: "Min & max"
}`,...y.parameters?.docs?.source},description:{story:"The `min` and `max` props set the minimum and maximum selectable dates in the calendar. The values can be in any format supported by the `date-format` prop, in ISO 8601 date string format (yyyy-mm-dd) or as a JavaScript Date object.",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <IcCalendar id="js-dates" value={new Date(2024, 6, 1)} min={new Date(2024, 6, 31)} max={new Date(2024, 6, 31)} />,
  name: "JavaScript dates"
}`,...b.parameters?.docs?.source},description:{story:"Any prop that accepts a date value can be set to a Javascript Date object. The following example sets the `value`, `max` and `min` props.",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <IcCalendar id="date-formats" dateFormat="MM/DD/YYYY" />,
  name: "Date formats"
}`,...x.parameters?.docs?.source},description:{story:"The `dateFormat` prop determines how dates are displayed. The supported formats are `DD/MM/YYYY`, `MM/DD/YYYY` or `YYYY/MM/DD`.",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <IcCalendar id="start-of-week" startOfWeek={6} />,
  name: "Start of week"
}`,...S.parameters?.docs?.source},description:{story:"The `startOfWeek` prop sets the first day of the week in the calendar. This prop takes a number between 0 and 6, where 0 is Sunday and 6 is Saturday. By default, the first day of the week is set to Monday (1).",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <IcCalendar id="disable-weekends" disableDays={[0, 6]} />,
  name: "Disable days of the week"
}`,...C.parameters?.docs?.source},description:{story:"Disable specific days of the week by using the `disableDays` prop. This prop takes an array of numbers between 0 and 6, where 0 is Sunday and 6 is Saturday.",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <IcCalendar id="disable-past" disablePast />,
  name: "Disable dates in past"
}`,...w.parameters?.docs?.source},description:{story:"Dates before today can be disabled with the `disablePast` prop.",...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <IcCalendar id="disable-future" disableFuture />,
  name: "Disable dates in future"
}`,...T.parameters?.docs?.source},description:{story:"Dates after today can be disabled with the `disableFuture` prop.",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <IcCalendar id="days-outside-month-hidden" showDaysOutsideMonth={false} />,
  name: "Days outside month hidden"
}`,...E.parameters?.docs?.source},description:{story:"Days outside of the current month in view can be hidden by setting the `showDaysOutsideMonth` prop to `false`.",...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <IcCalendar id="buttons-hidden" showTodayButton={false} showClearButton={false} />,
  name: "Today & clear buttons hidden"
}`,...D.parameters?.docs?.source},description:{story:'The "Go to today" and "Clear" buttons can be hidden from the calendar view by setting the `showTodayButton` and `showClearButton` props to `false`.',...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedDate, setSelectedDate] = React.useState(null);
    const [eventDetail, setEventDetail] = React.useState(null);
    const handleIcChange = ev => {
      setSelectedDate(ev.detail.value);
      setEventDetail(ev.detail);
    };
    return <div style={{
      display: "flex",
      flexDirection: "column"
    }}>
        <IcCalendar id="ic-change-event" onIcChange={handleIcChange} />
        <span>
          <IcTypography id="selected-date-display" style={{
          top: "420px"
        }}>
            {selectedDate ? \`Selected date: \${selectedDate}\` : "No date selected"}
          </IcTypography>
          <IcTypography id="icchange-event-display" style={{
          top: "428px"
        }}>
            {eventDetail && eventDetail.value ? <span>
                    icChange event emitted: {'{'}<br />
                    value: {String(eventDetail.value)},<br />
                    utcValue: {String(eventDetail.utcValue)},<br />
                    dateObject: {'{'}day: {eventDetail.dateObject.day}, month: {eventDetail.dateObject.month}, year: {eventDetail.dateObject.year}{'}'}<br />
                    {'}'}
                  </span> : "No icChange event emitted"}
          </IcTypography>
        </span>
      </div>;
  },
  name: "IcChange event"
}`,...O.parameters?.docs?.source},description:{story:"The `onIcChange` event is emitted by the calendar when the selected date changes.",...O.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <IcCalendar {...args} />,
  name: "Playground",
  args: defaultArgs,
  argTypes: {
    dateFormat: {
      options: ["DD/MM/YYYY", "MM/DD/YYYY", "YYYY/MM/DD"],
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
    startOfWeek: {
      options: Object.keys(weekDays),
      mapping: weekDays,
      control: {
        type: "inline-radio",
        labels: {
          Sunday: "Sunday",
          Monday: "Monday",
          Tuesday: "Tuesday",
          Wednesday: "Wednesday",
          Thursday: "Thursday",
          Friday: "Friday",
          Saturday: "Saturday"
        }
      }
    },
    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: "inline-radio"
      }
    }
  }
}`,...j.parameters?.docs?.source}}},M=[`Default`,`Sizes`,`Value`,`OpenAtDate`,`MinMax`,`JavascriptDates`,`DateFormats`,`StartOfWeek`,`DisableDaysOfWeek`,`DisablePast`,`DisableFuture`,`DaysOutsideMonthHidden`,`ButtonsHidden`,`IcChangeEvent`,`Playground`]}));N();export{D as ButtonsHidden,x as DateFormats,E as DaysOutsideMonthHidden,h as Default,C as DisableDaysOfWeek,T as DisableFuture,w as DisablePast,O as IcChangeEvent,b as JavascriptDates,y as MinMax,v as OpenAtDate,j as Playground,g as Sizes,S as StartOfWeek,_ as Value,M as __namedExportsOrder,m as default,N as n,d as t};