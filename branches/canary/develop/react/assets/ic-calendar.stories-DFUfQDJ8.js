import{R as e,r as I,a as v}from"./iframe-D8e34F7o.js";import{b as a}from"./components-DAKgJXFz.js";const M=""+new URL("readme-DTzgCK20.md",import.meta.url).href,T={title:"React Components/Calendar",component:a,parameters:{componentAPI:{data:M}}},r={render:()=>{const[n,f]=I.useState(null);return e.createElement(e.Fragment,null,e.createElement(a,{onIcChange:t=>f(t.detail.value)}),e.createElement("span",null,e.createElement(v,{style:{top:"420px"}},n?`Selected date: ${n}`:"No date selected")))},name:"Default"},s={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"var(--ic-space-md)"}},e.createElement(a,{id:"small-size-calendar",size:"small"}),e.createElement(a,{id:"medium-size-calendar",size:"medium"}),e.createElement(a,{id:"large-size-calendar",size:"large"})),name:"Sizes"},d={render:()=>e.createElement(a,{id:"value",value:"01/01/2000"}),name:"Value"},o={render:()=>e.createElement(a,{id:"open-at-date",openAtDate:"31/12/1999"}),name:"Open at date"},i={render:()=>e.createElement(a,{id:"min-max",min:"01/08/2008",max:"31/08/2008"}),name:"Min & max"},c={render:()=>e.createElement(a,{id:"js-dates",value:new Date(2024,6,1),min:new Date(2024,6,31),max:new Date(2024,6,31)}),name:"JavaScript dates"},l={render:()=>e.createElement(a,{id:"date-formats",dateFormat:"MM/DD/YYYY"}),name:"Date formats"},p={render:()=>e.createElement(a,{id:"start-of-week",startOfWeek:6}),name:"Start of week"},m={render:()=>e.createElement(a,{id:"disable-weekends",disableDays:[0,6]}),name:"Disable days of the week"},u={render:()=>e.createElement(a,{id:"disable-past",disablePast:!0}),name:"Disable dates in past"},y={render:()=>e.createElement(a,{id:"disable-future",disableFuture:!0}),name:"Disable dates in future"},h={render:()=>e.createElement(a,{id:"days-outside-month-hidden",showDaysOutsideMonth:!1}),name:"Days outside month hidden"},D={render:()=>e.createElement(a,{id:"buttons-hidden",showTodayButton:!1,showClearButton:!1}),name:"Today & clear buttons hidden"},b={render:()=>{const[n,f]=e.useState(null),[t,Y]=e.useState(null),C=S=>{f(S.detail.value),Y(S.detail)};return e.createElement("div",{style:{display:"flex",flexDirection:"column"}},e.createElement(a,{id:"ic-change-event",onIcChange:C}),e.createElement("span",null,e.createElement(v,{id:"selected-date-display",style:{top:"420px"}},n?`Selected date: ${n}`:"No date selected"),e.createElement(v,{id:"icchange-event-display",style:{top:"428px"}},t&&t.value?e.createElement("span",null,"icChange event emitted: ","{",e.createElement("br",null),"value: ",String(t.value),",",e.createElement("br",null),"utcValue: ",String(t.utcValue),",",e.createElement("br",null),"dateObject: ","{","day: ",t.dateObject.day,", month: ",t.dateObject.month,", year: ",t.dateObject.year,"}",e.createElement("br",null),"}"):"No icChange event emitted")))},name:"IcChange event"},E={dateFormat:"DD/MM/YYYY",disabled:!1,disableDays:[],disableFuture:!1,disablePast:!1,max:null,min:null,openAtDate:null,showClearButton:!0,showDaysOutsideMonth:!0,showTodayButton:!0,size:"medium",startOfWeek:1,theme:"inherit",value:null},w={Sunday:0,Monday:1,Tuesday:2,Wednesday:3,Thursday:4,Friday:5,Saturday:6},g={render:n=>e.createElement(a,{...n}),name:"Playground",args:E,argTypes:{dateFormat:{options:["DD/MM/YYYY","MM/DD/YYYY","YYYY/MM/DD"],control:{type:"inline-radio"}},size:{options:["small","medium","large"],control:{type:"inline-radio"}},startOfWeek:{options:Object.keys(w),mapping:w,control:{type:"inline-radio",labels:{Sunday:"Sunday",Monday:"Monday",Tuesday:"Tuesday",Wednesday:"Wednesday",Thursday:"Thursday",Friday:"Friday",Saturday:"Saturday"}}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:`Use a calendar to select a single date where visualising that date could be useful.

Click the 'Component API' tab to view all the available props and events for calendars.

To use the calendar component, import \`@ukic/canary-web-components\` into your application.

The default calendar uses the date format of \`DD/MM/YYYY\`.`,...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:"Set the size of the calendar by using the `size` prop. This prop takes the values `small`, `medium` (default) or `large`. Depending on the chosen size, the prop will apply styling to increase or decrease the amount of spacing within the component.",...s.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <IcCalendar id="value" value="01/01/2000" />,
  name: "Value"
}`,...d.parameters?.docs?.source},description:{story:"The `value` prop sets the selected date in the calendar. The value can be in any format supported by the `date-format` prop, in ISO 8601 date string format (yyyy-mm-dd) or as a JavaScript Date object.",...d.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <IcCalendar id="open-at-date" openAtDate="31/12/1999" />,
  name: "Open at date"
}`,...o.parameters?.docs?.source},description:{story:"The `openAtDate` prop can be used to specify the date in view. This prop can be in any format supported by the `dateFormat` prop, in ISO 8601 date string format (yyyy-mm-dd) or as a JavaScript Date object.\n\nIf the `value` prop is set, the date set using the `value` prop will take precedence and the calendar will open to that date instead.",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <IcCalendar id="min-max" min="01/08/2008" max="31/08/2008" />,
  name: "Min & max"
}`,...i.parameters?.docs?.source},description:{story:"The `min` and `max` props set the minimum and maximum selectable dates in the calendar. The values can be in any format supported by the `date-format` prop, in ISO 8601 date string format (yyyy-mm-dd) or as a JavaScript Date object.",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <IcCalendar id="js-dates" value={new Date(2024, 6, 1)} min={new Date(2024, 6, 31)} max={new Date(2024, 6, 31)} />,
  name: "JavaScript dates"
}`,...c.parameters?.docs?.source},description:{story:"Any prop that accepts a date value can be set to a Javascript Date object. The following example sets the `value`, `max` and `min` props.",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <IcCalendar id="date-formats" dateFormat="MM/DD/YYYY" />,
  name: "Date formats"
}`,...l.parameters?.docs?.source},description:{story:"The `dateFormat` prop determines how dates are displayed. The supported formats are `DD/MM/YYYY`, `MM/DD/YYYY` or `YYYY/MM/DD`.",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <IcCalendar id="start-of-week" startOfWeek={6} />,
  name: "Start of week"
}`,...p.parameters?.docs?.source},description:{story:"The `startOfWeek` prop sets the first day of the week in the calendar. This prop takes a number between 0 and 6, where 0 is Sunday and 6 is Saturday. By default, the first day of the week is set to Monday (1).",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <IcCalendar id="disable-weekends" disableDays={[0, 6]} />,
  name: "Disable days of the week"
}`,...m.parameters?.docs?.source},description:{story:"Disable specific days of the week by using the `disableDays` prop. This prop takes an array of numbers between 0 and 6, where 0 is Sunday and 6 is Saturday.",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <IcCalendar id="disable-past" disablePast />,
  name: "Disable dates in past"
}`,...u.parameters?.docs?.source},description:{story:"Dates before today can be disabled with the `disablePast` prop.",...u.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <IcCalendar id="disable-future" disableFuture />,
  name: "Disable dates in future"
}`,...y.parameters?.docs?.source},description:{story:"Dates after today can be disabled with the `disableFuture` prop.",...y.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <IcCalendar id="days-outside-month-hidden" showDaysOutsideMonth={false} />,
  name: "Days outside month hidden"
}`,...h.parameters?.docs?.source},description:{story:"Days outside of the current month in view can be hidden by setting the `showDaysOutsideMonth` prop to `false`.",...h.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <IcCalendar id="buttons-hidden" showTodayButton={false} showClearButton={false} />,
  name: "Today & clear buttons hidden"
}`,...D.parameters?.docs?.source},description:{story:'The "Go to today" and "Clear" buttons can be hidden from the calendar view by setting the `showTodayButton` and `showClearButton` props to `false`.',...D.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:"The `onIcChange` event is emitted by the calendar when the selected date changes.",...b.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const O=["Default","Sizes","Value","OpenAtDate","MinMax","JavascriptDates","DateFormats","StartOfWeek","DisableDaysOfWeek","DisablePast","DisableFuture","DaysOutsideMonthHidden","ButtonsHidden","IcChangeEvent","Playground"],z=Object.freeze(Object.defineProperty({__proto__:null,ButtonsHidden:D,DateFormats:l,DaysOutsideMonthHidden:h,Default:r,DisableDaysOfWeek:m,DisableFuture:y,DisablePast:u,IcChangeEvent:b,JavascriptDates:c,MinMax:i,OpenAtDate:o,Playground:g,Sizes:s,StartOfWeek:p,Value:d,__namedExportsOrder:O,default:T},Symbol.toStringTag,{value:"Module"}));export{z as I};
