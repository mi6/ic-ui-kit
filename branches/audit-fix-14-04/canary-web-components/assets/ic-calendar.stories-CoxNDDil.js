var S=Object.freeze,I=Object.defineProperty;var f=(e,g)=>S(I(e,"raw",{value:S(g||e.slice())}));import{x as a}from"./lit-html-DDAUtwXN.js";const M=""+new URL("readme-DTzgCK20.md",import.meta.url).href,k={title:"Web Components/Calendar",component:"ic-calendar",parameters:{componentAPI:{data:M}}},D="inline-radio",v="selected-date-display",E="Selected date: ",w="No date selected",t={render:()=>(setTimeout(()=>{document.addEventListener("icChange",function(e){e.detail.value?document.getElementById(v).textContent=E+e.detail.value:document.getElementById(v).textContent=w})},0),a`<ic-calendar id="default"></ic-calendar>
      <span>
        <ic-typography id="selected-date-display" style="top: 420px"
          >No date selected</ic-typography
        >
      </span>`),name:"Default"},n={render:()=>a`<div
      style="display: flex; flex-direction: column; gap: var(--ic-space-md)"
    >
      <ic-calendar id="small-size-calendar" size="small"></ic-calendar>
      <ic-calendar id="medium-size-calendar" size="medium"></ic-calendar>
      <ic-calendar id="large-size-calendar" size="large"></ic-calendar>
    </div>`,name:"Sizes"},d={render:()=>a`<ic-calendar id="value" value="01/01/2000"></ic-calendar>`,name:"Value"},r={render:()=>a`<ic-calendar
      id="open-at-date"
      open-at-date="31/12/1999"
    ></ic-calendar>`,name:"Open at date"},s={render:()=>a`<ic-calendar
      id="min-max"
      min="01/08/2008"
      max="31/08/2008"
    ></ic-calendar>`,name:"Min & max"};var Y;const o={render:()=>a(Y||(Y=f([`<ic-calendar id="js-dates"></ic-calendar>
    <script>
      const calendar = document.querySelector("#js-dates");
      calendar.value = new Date(2024, 6, 1);
      calendar.min = new Date(2024, 6, 31);
      calendar.max = new Date(2024, 6, 31);
    <\/script>`]))),name:"JavaScript dates"},i={render:()=>a`<ic-calendar
      id="date-formats"
      date-format="MM/DD/YYYY"
    ></ic-calendar>`,name:"Date formats"};var C;const c={render:()=>a(C||(C=f([`<ic-calendar id="start-of-week"></ic-calendar>
      <script>
        const calendar = document.querySelector("#start-of-week");
        calendar.startOfWeek = 6;
      <\/script>`]))),name:"Start of week"};var x;const l={render:()=>a(x||(x=f([`<ic-calendar id="disable-weekends"></ic-calendar>
      <script>
        const calendar = document.querySelector("#disable-weekends");
        calendar.disableDays = [0, 6];
      <\/script>`]))),name:"Disable days of the week"},p={render:()=>a` <ic-calendar
    id="disable-past"
    disable-past="true"
  ></ic-calendar>`,name:"Disable dates in past"},m={render:()=>a`<ic-calendar id="disable-future" disable-future="true"></ic-calendar>`,name:"Disable dates in future"},u={render:()=>a`<ic-calendar
      id="days-outside-month-hidden"
      show-days-outside-month="false"
    ></ic-calendar>`,name:"Days outside month hidden"},y={render:()=>a`<ic-calendar
      id="buttons-hidden"
      show-today-button="false"
      show-clear-button="false"
    ></ic-calendar>`,name:"Today & clear buttons hidden"},h={render:()=>(setTimeout(()=>{document.addEventListener("icChange",function(e){e.detail.value?(document.getElementById(v).textContent=E+e.detail.value,document.getElementById("icchange-event-display").innerHTML=`icChange event emitted: {<br>
            value: ${e.detail.value},<br>
            utcValue: ${e.detail.utcValue},<br>
            dateObject: {day: ${e.detail.dateObject.day}, month: ${e.detail.dateObject.month}, year: ${e.detail.dateObject.year}}<br>
          }`):(document.getElementById(v).textContent=w,document.getElementById("icchange-event-display").textContent="No icChange event emitted")})},0),a`<ic-calendar id="ic-change-event"></ic-calendar>
      <span>
        <ic-typography id="selected-date-display" style="top: 420px"
          >No date selected</ic-typography
        >
        <ic-typography id="icchange-event-display" style="top: 428px">
          No icChange event emitted
        </ic-typography>
      </span>`),name:"IcChange event"},$={"date-format":"DD/MM/YYYY",disabled:!1,"disable-days":[],"disable-future":!1,"disable-past":!1,max:"",min:"","open-at-date":"","show-clear-button":!0,"show-days-outside-month":!0,"show-today-button":!0,size:"medium","start-of-week":1,theme:"inherit",value:""},T={Sunday:0,Monday:1,Tuesday:2,Wednesday:3,Thursday:4,Friday:5,Saturday:6},b={render:e=>(setTimeout(()=>{document.addEventListener("icChange",function(g){g.detail.value?document.getElementById("playground-selected-date-display").textContent=E+g.detail.value:document.getElementById("playground-selected-date-display").textContent=w})},0),a`<ic-calendar
        id="playground"
        disabled=${e.disabled}
        size=${e.size}
        date-format=${e["date-format"]}
        disable-days=${JSON.stringify(e["disable-days"])}
        disable-future=${e["disable-future"]}
        disable-past=${e["disable-past"]}
        max=${e.max}
        min=${e.min}
        open-at-date=${e["open-at-date"]}
        show-clear-button=${e["show-clear-button"]}
        show-days-outside-month=${e["show-days-outside-month"]}
        show-today-button=${e["show-today-button"]}
        start-of-week=${e["start-of-week"]}
        theme=${e.theme}
        value=${e.value}
      ></ic-calendar>
      <span>
        <ic-typography id="playground-selected-date-display" style="top: 420px"
          >No date selected</ic-typography
        >
      </span>`),name:"Playground",args:$,argTypes:{"date-format":{options:["DD/MM/YYYY","MM/DD/YYYY","YYYY/MM/DD"],control:{type:D}},size:{control:D,options:["small","medium","large"]},"start-of-week":{options:Object.keys(T),mapping:T,control:{type:D,labels:{Sunday:"Sunday",Monday:"Monday",Tuesday:"Tuesday",Wednesday:"Wednesday",Thursday:"Thursday",Friday:"Friday",Saturday:"Saturday"}}},theme:{control:D,options:["inherit","light","dark"]}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source},description:{story:`Use a calendar to select a single date where visualising that date could be useful.

Click the 'Component API' tab to view all the available props and events for calendars.

To use the calendar component, import \`@ukic/canary-web-components\` into your application.

The default calendar uses the date format of \`DD/MM/YYYY\`.`,...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div
      style="display: flex; flex-direction: column; gap: var(--ic-space-md)"
    >
      <ic-calendar id="small-size-calendar" size="small"></ic-calendar>
      <ic-calendar id="medium-size-calendar" size="medium"></ic-calendar>
      <ic-calendar id="large-size-calendar" size="large"></ic-calendar>
    </div>\`,
  name: "Sizes"
}`,...n.parameters?.docs?.source},description:{story:"Set the size of the calendar by using the `size` prop. This prop takes the values `small`, `medium` (default) or `large`. Depending on the chosen size, the prop will apply styling to increase or decrease the amount of spacing within the component.",...n.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-calendar id="value" value="01/01/2000"></ic-calendar>\`,
  name: "Value"
}`,...d.parameters?.docs?.source},description:{story:"The `value` prop sets the selected date in the calendar. The value can be in any format supported by the `date-format` prop, in ISO 8601 date string format (yyyy-mm-dd) or as a JavaScript Date object.",...d.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-calendar
      id="open-at-date"
      open-at-date="31/12/1999"
    ></ic-calendar>\`,
  name: "Open at date"
}`,...r.parameters?.docs?.source},description:{story:"The `open-at-date` prop can be used to specify the date in view. This prop can be in any format supported by the `date-format` prop, in ISO 8601 date string format (yyyy-mm-dd) or as a JavaScript Date object.\n\nIf the `value` prop is set, the date set using the `value` prop will take precedence and the calendar will open to that date instead.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-calendar
      id="min-max"
      min="01/08/2008"
      max="31/08/2008"
    ></ic-calendar>\`,
  name: "Min & max"
}`,...s.parameters?.docs?.source},description:{story:"The `min` and `max` props set the minimum and maximum selectable dates in the calendar. The values can be in any format supported by the `date-format` prop, in ISO 8601 date string format (yyyy-mm-dd) or as a JavaScript Date object.",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-calendar id="js-dates"></ic-calendar>
    <script>
      const calendar = document.querySelector("#js-dates");
      calendar.value = new Date(2024, 6, 1);
      calendar.min = new Date(2024, 6, 31);
      calendar.max = new Date(2024, 6, 31);
    <\/script>\`,
  name: "JavaScript dates"
}`,...o.parameters?.docs?.source},description:{story:"Any prop that accepts a date value can be set to a Javascript Date object. The following example sets the `value`, `max` and `min` props.",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-calendar
      id="date-formats"
      date-format="MM/DD/YYYY"
    ></ic-calendar>\`,
  name: "Date formats"
}`,...i.parameters?.docs?.source},description:{story:"The `date-format` prop determines how dates are displayed. The supported formats are `DD/MM/YYYY`, `MM/DD/YYYY` or `YYYY/MM/DD`.",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-calendar id="start-of-week"></ic-calendar>
      <script>
        const calendar = document.querySelector("#start-of-week");
        calendar.startOfWeek = 6;
      <\/script>\`,
  name: "Start of week"
}`,...c.parameters?.docs?.source},description:{story:"The `start-of-week` prop sets the first day of the week in the calendar. This prop takes a number between 0 and 6, where 0 is Sunday and 6 is Saturday. By default, the first day of the week is set to Monday (1).",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-calendar id="disable-weekends"></ic-calendar>
      <script>
        const calendar = document.querySelector("#disable-weekends");
        calendar.disableDays = [0, 6];
      <\/script>\`,
  name: "Disable days of the week"
}`,...l.parameters?.docs?.source},description:{story:"Disable specific days of the week by using the `disable-days` prop. This prop takes an array of numbers between 0 and 6, where 0 is Sunday and 6 is Saturday.",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-calendar
    id="disable-past"
    disable-past="true"
  ></ic-calendar>\`,
  name: "Disable dates in past"
}`,...p.parameters?.docs?.source},description:{story:"Dates before today can be disabled with the `disable-past` prop.",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-calendar id="disable-future" disable-future="true"></ic-calendar>\`,
  name: "Disable dates in future"
}`,...m.parameters?.docs?.source},description:{story:"Dates after today can be disabled with the `disable-future` prop.",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-calendar
      id="days-outside-month-hidden"
      show-days-outside-month="false"
    ></ic-calendar>\`,
  name: "Days outside month hidden"
}`,...u.parameters?.docs?.source},description:{story:"Days outside of the current month in view can be hidden by setting the `show-days-outside-month` prop to `false`.",...u.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-calendar
      id="buttons-hidden"
      show-today-button="false"
      show-clear-button="false"
    ></ic-calendar>\`,
  name: "Today & clear buttons hidden"
}`,...y.parameters?.docs?.source},description:{story:'The "Go to today" and "Clear" buttons can be hidden from the calendar view by setting the `show-today-button` and `show-clear-button` props to `false`.',...y.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:"The `icChange` event is emitted by the calendar when the selected date changes.",...h.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const O=["Default","Sizes","Value","OpenAtDate","MinMax","JavascriptDates","DateFormats","StartOfWeek","DisableDaysOfWeek","DisablePast","DisableFuture","DaysOutsideMonthHidden","ButtonsHidden","IcChangeEvent","Playground"],A=Object.freeze(Object.defineProperty({__proto__:null,ButtonsHidden:y,DateFormats:i,DaysOutsideMonthHidden:u,Default:t,DisableDaysOfWeek:l,DisableFuture:m,DisablePast:p,IcChangeEvent:h,JavascriptDates:o,MinMax:s,OpenAtDate:r,Playground:b,Sizes:n,StartOfWeek:c,Value:d,__namedExportsOrder:O,default:k},Symbol.toStringTag,{value:"Module"}));export{A as I};
