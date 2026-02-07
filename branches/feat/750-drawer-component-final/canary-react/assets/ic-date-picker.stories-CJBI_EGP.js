import{R as e,a as I,b as E,r as S}from"./iframe-CRTHPHhA.js";import{j as a}from"./components-PC38DPf9.js";const O=""+new URL("readme-C6NWB50o.md",import.meta.url).href,{useArgs:C}=__STORYBOOK_MODULE_PREVIEW_API__,F={title:"React Components/Date Picker",component:a,parameters:{componentAPI:{data:O}}},r={render:()=>e.createElement(a,{label:"When would you like to collect your coffee?"}),name:"Default",height:"540px"},n={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px",height:"790px"}},e.createElement(a,{label:"When would you like to collect your coffee?",size:"small"}),e.createElement(a,{label:"When would you like to collect your coffee?"}),e.createElement(a,{label:"When would you like to collect your coffee?",size:"large"})),name:"Sizes"},s={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px",height:"790px"}},e.createElement(a,{style:{"--input-width":"500px"},label:"When would you like to collect your coffee?",size:"small"}),e.createElement(a,{style:{"--input-width":"500px"},label:"When would you like to collect your coffee?"}),e.createElement(a,{style:{"--input-width":"500px"},label:"When would you like to collect your coffee?",size:"large"})),name:"Max width"},l={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px",height:"790px"}},e.createElement(a,{label:"When would you like to collect your coffee?",helperText:"We will have your order ready for you on this date"}),e.createElement(a,{label:"When would you like to collect your coffee?"},e.createElement(I,{variant:"caption",slot:"helper-text"},e.createElement("span",null,"For special requests, ",e.createElement(E,{href:"#"},"contact us")," before choosing a date")))),name:"Custom helper text",height:"540px"},i={render:()=>e.createElement(a,{label:"When would you like to collect your coffee?",disabled:!0}),name:"Disabled",height:"100px"},c={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},e.createElement(a,{label:"When would you like to collect your coffee?"}),e.createElement(a,{label:"When would you like to collect your coffee?",dateFormat:"MM/DD/YYYY"}),e.createElement(a,{label:"When would you like to collect your coffee?",dateFormat:"YYYY/MM/DD"})),name:"Date formats",height:"760px"},d={render:()=>e.createElement(a,{label:"When would you like to collect your coffee?",value:"01/01/2024"}),name:"Value",height:"540px"},u={render:()=>e.createElement(a,{label:"When would you like to collect your coffee?",helperText:"The calendar will open showing 25th December 2024, if no date selected",openAtDate:"2024-12-25"}),name:"Open at date",height:"540px"},p={render:()=>e.createElement(a,{label:"When would you like to collect your coffee?",startOfWeek:"0"}),name:"Start of week",height:"540px"},h={render:()=>e.createElement(a,{label:"When would you like to collect your coffee?",disableDays:[0,6]}),name:"Disable days of week",height:"540px"},y={render:()=>e.createElement(a,{label:"When would you like to collect your coffee?",helperText:"Choose a date between the 1st and 31st of July",min:"2024-07-01",max:"2024-07-31",showPickerTodayButton:!1}),name:"Max and min",height:"500px"},m={render:()=>e.createElement(a,{label:"When would you like to collect your coffee?",disablePast:!0}),name:"Disable dates in past",height:"540px"},f={render:()=>e.createElement(a,{label:"When would you like to collect your coffee?",disableFuture:!0}),name:"Disable dates in future",height:"540px"},D={render:()=>e.createElement(a,{label:"When would you like to collect your coffee?",showDaysOutsideMonth:!1}),name:"Days outside month hidden",height:"540px"},b={render:()=>e.createElement(a,{label:"When would you like to collect your coffee?",showPickerTodayButton:!1,showPickerClearButton:!1}),name:"Today and clear buttons hidden",height:"480px"},g={render:()=>e.createElement(a,{label:"When would you like to collect your coffee?",min:new Date(2024,6,1),max:new Date(2024,6,31),value:new Date(2024,6,15),helperText:"Choose a date between the 1st and 31st of July",showPickerTodayButton:!1}),name:"JavaScript dates",height:"500px"},k={render:()=>{const[t,v]=S.useState(),[W,M]=S.useState(),T=o=>{M(o.detail.value),v(o.detail.value)};return e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"50px"}},e.createElement(a,{label:"When would you like to collect your coffee?",onIcChange:T,value:W}),e.createElement("span",null,`Selected date: ${t}`))},name:"IcChange event",height:"540px"},w={render:()=>e.createElement("div",{style:{marginTop:"400px"}},e.createElement(a,{label:"When would you like to collect your coffee?",openAtDate:"2025-02-03"}),e.createElement(a,{label:"When would you like to collect your coffee?",openAtDate:"2025-02-03",size:"small",startOfWeek:0}),e.createElement(a,{label:"When would you like to collect your coffee?",openAtDate:"2025-02-03",size:"large",startOfWeek:4})),name:"Calendar opens above input"},A={dateFormat:"DD/MM/YYYY",disabled:!1,disableDays:[],disableDaysMessage:"This day is not available",disableFuture:!1,disableFutureMessage:"This date is in the future",disablePast:!1,disablePastMessage:"This date is in the past",helperText:"Choose a date",hideHelperText:!1,hideLabel:!1,invalidDateMessage:"Invalid date",label:"When would you like to collect your coffee?",max:"",min:"",openAtDate:"",required:!1,showDaysOutsideMonth:!0,showPickerClearButton:!0,showClearButton:!0,showPickerTodayButton:!0,size:"medium",startOfWeek:1,theme:"inherit",validationAriaLive:"polite",validationStatus:"no status",validationText:"",value:""},Y={Sunday:0,Monday:1,Tuesday:2,Wednesday:3,Thursday:4,Friday:5,Saturday:6},x={render:t=>{const[{value:v},W]=C(),M=T=>{const o=T.detail.value;let P;o===null?P="":P=`${o.getDate()}-${o.getMonth()+1}-${o.getFullYear()}`,W({value:P})};return e.createElement(a,{dateFormat:t.dateFormat,disabled:t.disabled,disableDays:t.disableDays,disableDaysMessage:t.disableDaysMessage,disableFuture:t.disableFuture,disableFutureMessage:t.disableFutureMessage,disablePast:t.disablePast,disablePastMessage:t.disablePastMessage,helperText:t.helperText,hideHelperText:t.hideHelperText,hideLabel:t.hideLabel,invalidDateMessage:t.invalidDateMessage,label:t.label,max:t.max,min:t.min,openAtDate:t.openAtDate,required:t.required,showDaysOutsideMonth:t.showDaysOutsideMonth,showPickerClearButton:t.showPickerClearButton,showClearButton:t.showClearButton,showPickerTodayButton:t.showPickerTodayButton,size:t.size,startOfWeek:t.startOfWeek,theme:t.theme,validationAriaLive:t.validationAriaLive,validationStatus:t.validationStatus==="no status"?"":t.validationStatus,validationText:t.validationText,value:v,onIcChange:M})},args:A,argTypes:{dateFormat:{options:["DD/MM/YYYY","MM/DD/YYYY","YYYY/MM/DD"],control:{type:"inline-radio"}},validationAriaLive:{options:["polite","assertive","off"],control:{type:"inline-radio"}},validationStatus:{options:["no status","error","success","warning"],control:{type:"inline-radio"}},size:{options:["small","medium","large"],control:{type:"inline-radio"}},startOfWeek:{options:Object.keys(Y),mapping:Y,control:{type:"inline-radio",labels:{Sunday:"Sunday",Monday:"Monday",Tuesday:"Tuesday",Wednesday:"Wednesday",Thursday:"Thursday",Friday:"Friday",Saturday:"Saturday"}}},openAtDate:{control:{type:"text"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <IcDatePicker label="When would you like to collect your coffee?" />,
  name: "Default",
  height: "540px"
}`,...r.parameters?.docs?.source},description:{story:`Use a date picker to select a single date where visualising that date could be useful.

There is one required prop for a date picker:
- label: \`string\`

The default date picker uses the date format of \`DD/MM/YYYY\`.

Click the 'Component API' tab to view all the available props and events for date pickers.

To use the date picker component, import \`@ukic/canary-react\` into your application.`,...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    height: "790px"
  }}>
      <IcDatePicker label="When would you like to collect your coffee?" size="small" />
      <IcDatePicker label="When would you like to collect your coffee?" />
      <IcDatePicker label="When would you like to collect your coffee?" size="large" />
    </div>,
  name: "Sizes"
}`,...n.parameters?.docs?.source},description:{story:"Set the size of the date picker by using the `size` prop. This prop takes the values `small`, `medium` or `large`. Depending on the chosen size, the prop will apply styling to increase or decrease the amount of spacing within the component.",...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    height: "790px"
  }}>
      <IcDatePicker style={{
      "--input-width": "500px"
    }} label="When would you like to collect your coffee?" size="small" />
      <IcDatePicker style={{
      "--input-width": "500px"
    }} label="When would you like to collect your coffee?" />
      <IcDatePicker style={{
      "--input-width": "500px"
    }} label="When would you like to collect your coffee?" size="large" />
    </div>,
  name: "Max width"
}`,...s.parameters?.docs?.source},description:{story:"Set the size of the input field by using the `--input-width` CSS custom property. The picker will grow, but not exceed its maximum supported width.",...s.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    height: "790px"
  }}>
      <IcDatePicker label="When would you like to collect your coffee?" helperText="We will have your order ready for you on this date" />
      <IcDatePicker label="When would you like to collect your coffee?">
        <IcTypography variant="caption" slot="helper-text">
          <span>
            For special requests, <IcLink href="#">contact us</IcLink> before choosing a date
          </span>
        </IcTypography>
      </IcDatePicker>
    </div>,
  name: "Custom helper text",
  height: "540px"
}`,...l.parameters?.docs?.source},description:{story:"Use the helper text to add additional detail for the date input. Display custom content using the `helper-text` slot.",...l.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <IcDatePicker label="When would you like to collect your coffee?" disabled />,
  name: "Disabled",
  height: "100px"
}`,...i.parameters?.docs?.source},description:{story:"Disable the date picker and prevent user interaction by using the `disabled` prop.",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <IcDatePicker label="When would you like to collect your coffee?" />
      <IcDatePicker label="When would you like to collect your coffee?" dateFormat="MM/DD/YYYY" />
      <IcDatePicker label="When would you like to collect your coffee?" dateFormat="YYYY/MM/DD" />
    </div>,
  name: "Date formats",
  height: "760px"
}`,...c.parameters?.docs?.source},description:{story:"The `dateFormat` prop determines how dates are displayed. The supported formats are `DD/MM/YYYY`, `MM/DD/YYYY` or `YYYY/MM/DD`.",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <IcDatePicker label="When would you like to collect your coffee?" value="01/01/2024" />,
  name: "Value",
  height: "540px"
}`,...d.parameters?.docs?.source},description:{story:"The `value` prop sets the date in the input field. The value can be in any format supported by the `dateFormat` prop, in ISO 8601 date string format (yyyy-mm-dd) or as a JavaScript Date object.",...d.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <IcDatePicker label="When would you like to collect your coffee?" helperText="The calendar will open showing 25th December 2024, if no date selected" openAtDate="2024-12-25" />,
  name: "Open at date",
  height: "540px"
}`,...u.parameters?.docs?.source},description:{story:"If no `value` is set, the `openAtDate` prop can be used to specify the date in view when the calendar view is opened. If not set to a value, the calendar will default to showing the current date.\n\nThe supported formats are the same as for the `value` prop.",...u.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <IcDatePicker label="When would you like to collect your coffee?" startOfWeek="0" />,
  name: "Start of week",
  height: "540px"
}`,...p.parameters?.docs?.source},description:{story:"The first day of the week can be changed by setting the `startOfWeek` prop. This is a numeric value where 0 = Sunday, 1 = Monday, etc up to 6 = Saturday.",...p.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <IcDatePicker label="When would you like to collect your coffee?" disableDays={[0, 6]} />,
  name: "Disable days of week",
  height: "540px"
}`,...h.parameters?.docs?.source},description:{story:"Specific days of the week can be disabled from selection by setting the `disableDays` prop. The value can be set as an array of numeric values where where 0 = Sunday, 1 = Monday, etc up to 6 = Saturday.",...h.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <IcDatePicker label="When would you like to collect your coffee?" helperText="Choose a date between the 1st and 31st of July" min="2024-07-01" max="2024-07-31" showPickerTodayButton={false} />,
  name: "Max and min",
  height: "500px"
}`,...y.parameters?.docs?.source},description:{story:"The `max` and `min` props can be used to limit the range of dates available for selection. Values can be in any format supported by the `dateFormat` prop, in ISO 8601 date string format (yyyy-mm-dd) or as a JavaScript Date object.",...y.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <IcDatePicker label="When would you like to collect your coffee?" disablePast />,
  name: "Disable dates in past",
  height: "540px"
}`,...m.parameters?.docs?.source},description:{story:"Dates before today can be disabled with the `disablePast` prop.",...m.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <IcDatePicker label="When would you like to collect your coffee?" disableFuture />,
  name: "Disable dates in future",
  height: "540px"
}`,...f.parameters?.docs?.source},description:{story:"Dates after today can be disabled with the `disableFuture` prop.",...f.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <IcDatePicker label="When would you like to collect your coffee?" showDaysOutsideMonth={false} />,
  name: "Days outside month hidden",
  height: "540px"
}`,...D.parameters?.docs?.source},description:{story:"Days outside of the current month in view can be hidden by setting the `showDaysOutsideMonth` prop to `false`.",...D.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <IcDatePicker label="When would you like to collect your coffee?" showPickerTodayButton={false} showPickerClearButton={false} />,
  name: "Today and clear buttons hidden",
  height: "480px"
}`,...b.parameters?.docs?.source},description:{story:'The "Go to today" and "Clear" buttons can be hidden from the calendar view by setting the `showPickerTodayButton` and `showPickerClearButton` props to `false`.',...b.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <IcDatePicker label="When would you like to collect your coffee?" min={new Date(2024, 6, 1)} max={new Date(2024, 6, 31)} value={new Date(2024, 6, 15)} helperText="Choose a date between the 1st and 31st of July" showPickerTodayButton={false} />,
  name: "JavaScript dates",
  height: "500px"
}`,...g.parameters?.docs?.source},description:{story:"Any prop that accepts a date value can be set to a Javascript Date object. The following example sets the `value`, `max` and `min` props.",...g.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedDate, setSelectedDate] = useState();
    const [value, setValue] = useState();
    const dateChangedHandler = event => {
      setValue(event.detail.value);
      setSelectedDate(event.detail.value);
    };
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "50px"
    }}>
        <IcDatePicker label="When would you like to collect your coffee?" onIcChange={dateChangedHandler} value={value} />
        <span>{\`Selected date: \${selectedDate}\`}</span>
      </div>;
  },
  name: "IcChange event",
  height: "540px"
}`,...k.parameters?.docs?.source},description:{story:"The `IcChange` event is emitted by the date picker when the selected date changes.",...k.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    marginTop: "400px"
  }}>
      <IcDatePicker label="When would you like to collect your coffee?" openAtDate="2025-02-03" />
      <IcDatePicker label="When would you like to collect your coffee?" openAtDate="2025-02-03" size="small" startOfWeek={0} />
      <IcDatePicker label="When would you like to collect your coffee?" openAtDate="2025-02-03" size="large" startOfWeek={4} />
    </div>,
  name: "Calendar opens above input"
}`,...w.parameters?.docs?.source},description:{story:"Margin added so the calendar opens above the input",...w.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
    return <IcDatePicker dateFormat={args.dateFormat} disabled={args.disabled} disableDays={args.disableDays} disableDaysMessage={args.disableDaysMessage} disableFuture={args.disableFuture} disableFutureMessage={args.disableFutureMessage} disablePast={args.disablePast} disablePastMessage={args.disablePastMessage} helperText={args.helperText} hideHelperText={args.hideHelperText} hideLabel={args.hideLabel} invalidDateMessage={args.invalidDateMessage} label={args.label} max={args.max} min={args.min} openAtDate={args.openAtDate} required={args.required} showDaysOutsideMonth={args.showDaysOutsideMonth} showPickerClearButton={args.showPickerClearButton} showClearButton={args.showClearButton} showPickerTodayButton={args.showPickerTodayButton} size={args.size} startOfWeek={args.startOfWeek} theme={args.theme} validationAriaLive={args.validationAriaLive} validationStatus={args.validationStatus === "no status" ? "" : args.validationStatus} validationText={args.validationText} value={value} onIcChange={updateDate} />;
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
    openAtDate: {
      control: {
        type: "text"
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
}`,...x.parameters?.docs?.source},description:{story:'Go to the <ic-link href="/?path=/story/react-components-date-picker--playground">separate page for the playground example</ic-link> to view the prop controls.',...x.parameters?.docs?.description}}};const B=["Default","Sizes","MaxWidth","HelperText","Disabled","DateFormats","Value","OpenAtDate","StartOfWeek","DisableDaysOfWeek","MinMax","DisablePastDates","DisableFutureDates","DatesOutsideMonthHidden","TodayClearButtonsHidden","JavaScriptDates","IcChangeEvent","CalendarOpensAboveInput","Playground"],H=Object.freeze(Object.defineProperty({__proto__:null,CalendarOpensAboveInput:w,DateFormats:c,DatesOutsideMonthHidden:D,Default:r,DisableDaysOfWeek:h,DisableFutureDates:f,DisablePastDates:m,Disabled:i,HelperText:l,IcChangeEvent:k,JavaScriptDates:g,MaxWidth:s,MinMax:y,OpenAtDate:u,Playground:x,Sizes:n,StartOfWeek:p,TodayClearButtonsHidden:b,Value:d,__namedExportsOrder:B,default:F},Symbol.toStringTag,{value:"Module"}));export{H as I};
