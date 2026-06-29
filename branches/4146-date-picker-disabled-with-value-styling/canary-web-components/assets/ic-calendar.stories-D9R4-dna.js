import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{n,t as r}from"./lit-html-CwvQb_NC.js";import{n as i,t as a}from"./taggedTemplateLiteral-pWa2IaV6.js";var o,s=t((()=>{o=``+new URL(`readme-DTzgCK20.md`,import.meta.url).href})),c=e({ButtonsHidden:()=>k,DateFormats:()=>C,DaysOutsideMonthHidden:()=>O,Default:()=>_,DisableDaysOfWeek:()=>T,DisableFuture:()=>D,DisablePast:()=>E,IcChangeEvent:()=>A,JavascriptDates:()=>S,MinMax:()=>x,OpenAtDate:()=>b,Playground:()=>N,Sizes:()=>v,StartOfWeek:()=>w,Value:()=>y,__namedExportsOrder:()=>P,default:()=>f}),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F=t((()=>{s(),n(),i(),f={title:`Web Components/Calendar`,component:`ic-calendar`,parameters:{componentAPI:{data:o}}},p=`inline-radio`,m=`selected-date-display`,h=`Selected date: `,g=`No date selected`,_={render:()=>(setTimeout(()=>{document.addEventListener(`icChange`,function(e){e.detail.value?document.getElementById(m).textContent=h+e.detail.value:document.getElementById(m).textContent=g})},0),r`<ic-calendar id="default"></ic-calendar>
      <span>
        <ic-typography id="selected-date-display" style="top: 420px"
          >No date selected</ic-typography
        >
      </span>`),name:`Default`},v={render:()=>r`<div
      style="display: flex; flex-direction: column; gap: var(--ic-space-md)"
    >
      <ic-calendar id="small-size-calendar" size="small"></ic-calendar>
      <ic-calendar id="medium-size-calendar" size="medium"></ic-calendar>
      <ic-calendar id="large-size-calendar" size="large"></ic-calendar>
    </div>`,name:`Sizes`},y={render:()=>r`<ic-calendar id="value" value="01/01/2000"></ic-calendar>`,name:`Value`},b={render:()=>r`<ic-calendar
      id="open-at-date"
      open-at-date="31/12/1999"
    ></ic-calendar>`,name:`Open at date`},x={render:()=>r`<ic-calendar
      id="min-max"
      min="01/08/2008"
      max="31/08/2008"
    ></ic-calendar>`,name:`Min & max`},S={render:()=>r(l||=a([`<ic-calendar id="js-dates"></ic-calendar>
    <script>
      const calendar = document.querySelector("#js-dates");
      calendar.value = new Date(2024, 6, 1);
      calendar.min = new Date(2024, 6, 31);
      calendar.max = new Date(2024, 6, 31);
    <\/script>`])),name:`JavaScript dates`},C={render:()=>r`<ic-calendar
      id="date-formats"
      date-format="MM/DD/YYYY"
    ></ic-calendar>`,name:`Date formats`},w={render:()=>r(u||=a([`<ic-calendar id="start-of-week"></ic-calendar>
      <script>
        const calendar = document.querySelector("#start-of-week");
        calendar.startOfWeek = 6;
      <\/script>`])),name:`Start of week`},T={render:()=>r(d||=a([`<ic-calendar id="disable-weekends"></ic-calendar>
      <script>
        const calendar = document.querySelector("#disable-weekends");
        calendar.disableDays = [0, 6];
      <\/script>`])),name:`Disable days of the week`},E={render:()=>r` <ic-calendar
    id="disable-past"
    disable-past="true"
  ></ic-calendar>`,name:`Disable dates in past`},D={render:()=>r`<ic-calendar id="disable-future" disable-future="true"></ic-calendar>`,name:`Disable dates in future`},O={render:()=>r`<ic-calendar
      id="days-outside-month-hidden"
      show-days-outside-month="false"
    ></ic-calendar>`,name:`Days outside month hidden`},k={render:()=>r`<ic-calendar
      id="buttons-hidden"
      show-today-button="false"
      show-clear-button="false"
    ></ic-calendar>`,name:`Today & clear buttons hidden`},A={render:()=>(setTimeout(()=>{document.addEventListener(`icChange`,function(e){e.detail.value?(document.getElementById(m).textContent=h+e.detail.value,document.getElementById(`icchange-event-display`).innerHTML=`icChange event emitted: {<br>
            value: ${e.detail.value},<br>
            utcValue: ${e.detail.utcValue},<br>
            dateObject: {day: ${e.detail.dateObject.day}, month: ${e.detail.dateObject.month}, year: ${e.detail.dateObject.year}}<br>
          }`):(document.getElementById(m).textContent=g,document.getElementById(`icchange-event-display`).textContent=`No icChange event emitted`)})},0),r`<ic-calendar id="ic-change-event"></ic-calendar>
      <span>
        <ic-typography id="selected-date-display" style="top: 420px"
          >No date selected</ic-typography
        >
        <ic-typography id="icchange-event-display" style="top: 428px">
          No icChange event emitted
        </ic-typography>
      </span>`),name:`IcChange event`},j={"date-format":`DD/MM/YYYY`,disabled:!1,"disable-days":[],"disable-future":!1,"disable-past":!1,max:``,min:``,"open-at-date":``,"show-clear-button":!0,"show-days-outside-month":!0,"show-today-button":!0,size:`medium`,"start-of-week":1,theme:`inherit`,value:``},M={Sunday:0,Monday:1,Tuesday:2,Wednesday:3,Thursday:4,Friday:5,Saturday:6},N={render:e=>(setTimeout(()=>{document.addEventListener(`icChange`,function(e){e.detail.value?document.getElementById(`playground-selected-date-display`).textContent=h+e.detail.value:document.getElementById(`playground-selected-date-display`).textContent=g})},0),r`<ic-calendar
        id="playground"
        disabled=${e.disabled}
        size=${e.size}
        date-format=${e[`date-format`]}
        disable-days=${JSON.stringify(e[`disable-days`])}
        disable-future=${e[`disable-future`]}
        disable-past=${e[`disable-past`]}
        max=${e.max}
        min=${e.min}
        open-at-date=${e[`open-at-date`]}
        show-clear-button=${e[`show-clear-button`]}
        show-days-outside-month=${e[`show-days-outside-month`]}
        show-today-button=${e[`show-today-button`]}
        start-of-week=${e[`start-of-week`]}
        theme=${e.theme}
        value=${e.value}
      ></ic-calendar>
      <span>
        <ic-typography id="playground-selected-date-display" style="top: 420px"
          >No date selected</ic-typography
        >
      </span>`),name:`Playground`,args:j,argTypes:{"date-format":{options:[`DD/MM/YYYY`,`MM/DD/YYYY`,`YYYY/MM/DD`],control:{type:p}},size:{control:p,options:[`small`,`medium`,`large`]},"start-of-week":{options:Object.keys(M),mapping:M,control:{type:p,labels:{Sunday:`Sunday`,Monday:`Monday`,Tuesday:`Tuesday`,Wednesday:`Wednesday`,Thursday:`Thursday`,Friday:`Friday`,Saturday:`Saturday`}}},theme:{control:p,options:[`inherit`,`light`,`dark`]}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    setTimeout(() => {
      document.addEventListener("icChange", function (event) {
        if (event.detail.value) {
          document.getElementById(SELECTED_DATE_DISPLAY).textContent = SELECTED_DATE + event.detail.value;
        } else {
          document.getElementById(SELECTED_DATE_DISPLAY).textContent = NO_DATE_SELECTED;
        }
      });
    }, 0);
    return html\`<ic-calendar id="default"></ic-calendar>
      <span>
        <ic-typography id="selected-date-display" style="top: 420px"
          >No date selected</ic-typography
        >
      </span>\`;
  },
  name: "Default"
}`,..._.parameters?.docs?.source},description:{story:`Use a calendar to select a single date where visualising that date could be useful.

Click the 'Component API' tab to view all the available props and events for calendars.

To use the calendar component, import \`@ukic/canary-web-components\` into your application.

The default calendar uses the date format of \`DD/MM/YYYY\`.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div
      style="display: flex; flex-direction: column; gap: var(--ic-space-md)"
    >
      <ic-calendar id="small-size-calendar" size="small"></ic-calendar>
      <ic-calendar id="medium-size-calendar" size="medium"></ic-calendar>
      <ic-calendar id="large-size-calendar" size="large"></ic-calendar>
    </div>\`,
  name: "Sizes"
}`,...v.parameters?.docs?.source},description:{story:"Set the size of the calendar by using the `size` prop. This prop takes the values `small`, `medium` (default) or `large`. Depending on the chosen size, the prop will apply styling to increase or decrease the amount of spacing within the component.",...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-calendar id="value" value="01/01/2000"></ic-calendar>\`,
  name: "Value"
}`,...y.parameters?.docs?.source},description:{story:"The `value` prop sets the selected date in the calendar. The value can be in any format supported by the `date-format` prop, in ISO 8601 date string format (yyyy-mm-dd) or as a JavaScript Date object.",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-calendar
      id="open-at-date"
      open-at-date="31/12/1999"
    ></ic-calendar>\`,
  name: "Open at date"
}`,...b.parameters?.docs?.source},description:{story:"The `open-at-date` prop can be used to specify the date in view. This prop can be in any format supported by the `date-format` prop, in ISO 8601 date string format (yyyy-mm-dd) or as a JavaScript Date object.\n\nIf the `value` prop is set, the date set using the `value` prop will take precedence and the calendar will open to that date instead.",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-calendar
      id="min-max"
      min="01/08/2008"
      max="31/08/2008"
    ></ic-calendar>\`,
  name: "Min & max"
}`,...x.parameters?.docs?.source},description:{story:"The `min` and `max` props set the minimum and maximum selectable dates in the calendar. The values can be in any format supported by the `date-format` prop, in ISO 8601 date string format (yyyy-mm-dd) or as a JavaScript Date object.",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-calendar id="js-dates"></ic-calendar>
    <script>
      const calendar = document.querySelector("#js-dates");
      calendar.value = new Date(2024, 6, 1);
      calendar.min = new Date(2024, 6, 31);
      calendar.max = new Date(2024, 6, 31);
    <\/script>\`,
  name: "JavaScript dates"
}`,...S.parameters?.docs?.source},description:{story:"Any prop that accepts a date value can be set to a Javascript Date object. The following example sets the `value`, `max` and `min` props.",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-calendar
      id="date-formats"
      date-format="MM/DD/YYYY"
    ></ic-calendar>\`,
  name: "Date formats"
}`,...C.parameters?.docs?.source},description:{story:"The `date-format` prop determines how dates are displayed. The supported formats are `DD/MM/YYYY`, `MM/DD/YYYY` or `YYYY/MM/DD`.",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-calendar id="start-of-week"></ic-calendar>
      <script>
        const calendar = document.querySelector("#start-of-week");
        calendar.startOfWeek = 6;
      <\/script>\`,
  name: "Start of week"
}`,...w.parameters?.docs?.source},description:{story:"The `start-of-week` prop sets the first day of the week in the calendar. This prop takes a number between 0 and 6, where 0 is Sunday and 6 is Saturday. By default, the first day of the week is set to Monday (1).",...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-calendar id="disable-weekends"></ic-calendar>
      <script>
        const calendar = document.querySelector("#disable-weekends");
        calendar.disableDays = [0, 6];
      <\/script>\`,
  name: "Disable days of the week"
}`,...T.parameters?.docs?.source},description:{story:"Disable specific days of the week by using the `disable-days` prop. This prop takes an array of numbers between 0 and 6, where 0 is Sunday and 6 is Saturday.",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-calendar
    id="disable-past"
    disable-past="true"
  ></ic-calendar>\`,
  name: "Disable dates in past"
}`,...E.parameters?.docs?.source},description:{story:"Dates before today can be disabled with the `disable-past` prop.",...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-calendar id="disable-future" disable-future="true"></ic-calendar>\`,
  name: "Disable dates in future"
}`,...D.parameters?.docs?.source},description:{story:"Dates after today can be disabled with the `disable-future` prop.",...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-calendar
      id="days-outside-month-hidden"
      show-days-outside-month="false"
    ></ic-calendar>\`,
  name: "Days outside month hidden"
}`,...O.parameters?.docs?.source},description:{story:"Days outside of the current month in view can be hidden by setting the `show-days-outside-month` prop to `false`.",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-calendar
      id="buttons-hidden"
      show-today-button="false"
      show-clear-button="false"
    ></ic-calendar>\`,
  name: "Today & clear buttons hidden"
}`,...k.parameters?.docs?.source},description:{story:'The "Go to today" and "Clear" buttons can be hidden from the calendar view by setting the `show-today-button` and `show-clear-button` props to `false`.',...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    setTimeout(() => {
      document.addEventListener("icChange", function (event) {
        if (event.detail.value) {
          document.getElementById(SELECTED_DATE_DISPLAY).textContent = SELECTED_DATE + event.detail.value;
          document.getElementById("icchange-event-display").innerHTML = \`icChange event emitted: {<br>
            value: \${event.detail.value},<br>
            utcValue: \${event.detail.utcValue},<br>
            dateObject: {day: \${event.detail.dateObject.day}, month: \${event.detail.dateObject.month}, year: \${event.detail.dateObject.year}}<br>
          }\`;
        } else {
          document.getElementById(SELECTED_DATE_DISPLAY).textContent = NO_DATE_SELECTED;
          document.getElementById("icchange-event-display").textContent = "No icChange event emitted";
        }
      });
    }, 0);
    return html\`<ic-calendar id="ic-change-event"></ic-calendar>
      <span>
        <ic-typography id="selected-date-display" style="top: 420px"
          >No date selected</ic-typography
        >
        <ic-typography id="icchange-event-display" style="top: 428px">
          No icChange event emitted
        </ic-typography>
      </span>\`;
  },
  name: "IcChange event"
}`,...A.parameters?.docs?.source},description:{story:"The `icChange` event is emitted by the calendar when the selected date changes.",...A.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => {
    setTimeout(() => {
      document.addEventListener("icChange", function (event) {
        if (event.detail.value) {
          document.getElementById("playground-selected-date-display").textContent = SELECTED_DATE + event.detail.value;
        } else {
          document.getElementById("playground-selected-date-display").textContent = NO_DATE_SELECTED;
        }
      });
    }, 0);
    return html\`<ic-calendar
        id="playground"
        disabled=\${args.disabled}
        size=\${args.size}
        date-format=\${args["date-format"]}
        disable-days=\${JSON.stringify(args["disable-days"])}
        disable-future=\${args["disable-future"]}
        disable-past=\${args["disable-past"]}
        max=\${args.max}
        min=\${args.min}
        open-at-date=\${args["open-at-date"]}
        show-clear-button=\${args["show-clear-button"]}
        show-days-outside-month=\${args["show-days-outside-month"]}
        show-today-button=\${args["show-today-button"]}
        start-of-week=\${args["start-of-week"]}
        theme=\${args.theme}
        value=\${args.value}
      ></ic-calendar>
      <span>
        <ic-typography id="playground-selected-date-display" style="top: 420px"
          >No date selected</ic-typography
        >
      </span>\`;
  },
  name: "Playground",
  args: defaultArgs,
  argTypes: {
    ["date-format"]: {
      options: ["DD/MM/YYYY", "MM/DD/YYYY", "YYYY/MM/DD"],
      control: {
        type: INLINE_RADIO
      }
    },
    size: {
      control: INLINE_RADIO,
      options: ["small", "medium", "large"]
    },
    ["start-of-week"]: {
      options: Object.keys(weekDays),
      mapping: weekDays,
      control: {
        type: INLINE_RADIO,
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
      control: INLINE_RADIO,
      options: ["inherit", "light", "dark"]
    }
  }
}`,...N.parameters?.docs?.source}}},P=[`Default`,`Sizes`,`Value`,`OpenAtDate`,`MinMax`,`JavascriptDates`,`DateFormats`,`StartOfWeek`,`DisableDaysOfWeek`,`DisablePast`,`DisableFuture`,`DaysOutsideMonthHidden`,`ButtonsHidden`,`IcChangeEvent`,`Playground`]}));F();export{k as ButtonsHidden,C as DateFormats,O as DaysOutsideMonthHidden,_ as Default,T as DisableDaysOfWeek,D as DisableFuture,E as DisablePast,A as IcChangeEvent,S as JavascriptDates,x as MinMax,b as OpenAtDate,N as Playground,v as Sizes,w as StartOfWeek,y as Value,P as __namedExportsOrder,f as default,F as n,c as t};