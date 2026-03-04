import{B as a,R as e}from"./iframe-BhRVrEvB.js";const o={announced:!1,label:"Status tag label",size:"medium",status:"neutral",variant:"filled",theme:"inherit",uppercase:!0},m={title:"Status tag",component:a},n={render:()=>e.createElement(e.Fragment,null,e.createElement(a,{label:"Neutral"}),e.createElement(a,{label:"Neutral",variant:"outlined"})),name:"Neutral"},r={render:()=>e.createElement(e.Fragment,null,e.createElement(a,{label:"Success",status:"success"}),e.createElement(a,{label:"Success",status:"success",variant:"outlined"})),name:"Success"},s={render:()=>e.createElement(e.Fragment,null,e.createElement(a,{label:"Warning",status:"warning"}),e.createElement(a,{label:"Warning",status:"warning",variant:"outlined"})),name:"Warning"},l={render:()=>e.createElement(e.Fragment,null,e.createElement(a,{label:"Danger",status:"danger"}),e.createElement(a,{label:"Danger",status:"danger",variant:"outlined"})),name:"Danger"},c={render:()=>e.createElement(e.Fragment,null,e.createElement(a,{label:"Uppercase status tag"}),e.createElement(a,{label:"Uppercase status tag",variant:"outlined"}),e.createElement(a,{label:"Sentence case status tag",uppercase:"false"}),e.createElement(a,{label:"Sentence case status tag",variant:"outlined",uppercase:"false"})),name:"Letter case"},u={render:()=>e.createElement(e.Fragment,null,e.createElement(a,{label:"Small",size:"small"}),e.createElement(a,{label:"Small",variant:"outlined",size:"small"}),e.createElement(a,{label:"Medium",size:"medium"}),e.createElement(a,{label:"Medium",variant:"outlined",size:"medium"}),e.createElement(a,{label:"large",size:"large"}),e.createElement(a,{label:"large",variant:"outlined",size:"large"})),name:"Size"},i={render:t=>e.createElement(a,{label:t.label,size:t.size,status:t.status,variant:t.variant,announced:t.announced,theme:t.theme,uppercase:t.uppercase}),args:o,argTypes:{size:{options:["default","small","large"],control:{type:"inline-radio"}},status:{options:["neutral","success","warning","danger"],control:{type:"select"}},variant:{options:["filled","outlined"],control:{type:"inline-radio"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <>
          <IcStatusTag label="Neutral" />
          <IcStatusTag label="Neutral" variant="outlined" />
    </>,
  name: "Neutral"
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <>
          <IcStatusTag label="Success" status="success" />
          <IcStatusTag label="Success" status="success" variant="outlined" />
    </>,
  name: "Success"
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <>
          <IcStatusTag label="Warning" status="warning" />
          <IcStatusTag label="Warning" status="warning" variant="outlined" />
    </>,
  name: "Warning"
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <>
          <IcStatusTag label="Danger" status="danger" />
          <IcStatusTag label="Danger" status="danger" variant="outlined" />
    </>,
  name: "Danger"
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <>
    <IcStatusTag label="Uppercase status tag"></IcStatusTag>
    <IcStatusTag label="Uppercase status tag" variant="outlined"></IcStatusTag>
    <IcStatusTag label="Sentence case status tag" uppercase="false"></IcStatusTag>
    <IcStatusTag label="Sentence case status tag" variant="outlined" uppercase="false"></IcStatusTag>
    </>,
  name: "Letter case"
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <>
          <IcStatusTag label="Small" size="small" />
    <IcStatusTag label="Small" variant="outlined" size="small" />
    <IcStatusTag label="Medium" size="medium" />
    <IcStatusTag label="Medium" variant="outlined" size="medium" />
    <IcStatusTag label="large" size="large" />
    <IcStatusTag label="large" variant="outlined" size="large" />
    </>,
  name: "Size"
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <IcStatusTag label={args.label} size={args.size} status={args.status} variant={args.variant} announced={args.announced} theme={args.theme} uppercase={args.uppercase}></IcStatusTag>,
  args: defaultArgs,
  argTypes: {
    size: {
      options: ["default", "small", "large"],
      control: {
        type: "inline-radio"
      }
    },
    status: {
      options: ["neutral", "success", "warning", "danger"],
      control: {
        type: "select"
      }
    },
    variant: {
      options: ["filled", "outlined"],
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
}`,...i.parameters?.docs?.source}}};const g=["Neutral","Success","Warning","Danger","LetterCase","Size","Playground"],p=Object.freeze(Object.defineProperty({__proto__:null,Danger:l,LetterCase:c,Neutral:n,Playground:i,Size:u,Success:r,Warning:s,__namedExportsOrder:g,default:m},Symbol.toStringTag,{value:"Module"}));export{p as I};
