import{K as a,R as e,a as w,o as C,r as L,f as g}from"./iframe-Dd1CmJMv.js";const x={label:"Custom Switch",helperText:"Custom helper text",disabled:!1,checked:!1,hideLabel:!1,size:"medium",theme:"inherit"},I=()=>{const[r,u]=L.useState(!0),S=()=>{u(!1)},k=()=>{u(!0)};return e.createElement(e.Fragment,null,e.createElement(a,{checked:r,label:"Label"}),e.createElement(g,{variant:"primary",onClick:S},"Unchecked"),e.createElement(g,{variant:"primary",onClick:k},"Checked"))},E={title:"Switch",component:a},t={render:()=>e.createElement(a,{label:"Label"}),name:"Default"},l={render:()=>e.createElement(a,{label:"Label"}),name:"Name"},n={render:()=>e.createElement(a,{checked:!0,label:"Label"}),name:"Checked"},s={render:()=>e.createElement(I,null),name:"Checked updated"},c={render:()=>e.createElement(a,{size:"small",label:"Label"}),name:"Size small"},o={render:()=>e.createElement(a,{disabled:!0,label:"Label"}),name:"Disabled"},d={render:()=>e.createElement(a,{disabled:!0,label:"Label"}),name:"Disabled and label"},i={render:()=>e.createElement(a,{disabled:!0,label:"Label",checked:!0}),name:"Disabled, label and checked"},m={render:()=>e.createElement(a,{label:"Custom label"}),name:"ARIA label"},p={render:()=>e.createElement(a,{label:"Right adornment"},e.createElement("svg",{slot:"right-adornment",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z",fill:"black"}))),name:"Right adornment"},h={render:()=>e.createElement(e.Fragment,null,e.createElement(a,{label:"Helper text",helperText:"This is some helper text"}),e.createElement(a,{label:"Label"},e.createElement(w,{variant:"caption",slot:"helper-text"},e.createElement("span",null,"Slotted helper text with a ",e.createElement(C,{href:"#"},"link"))))),name:"Helper text"},b={render:r=>e.createElement(a,{disabled:r.disabled,label:r.label,checked:r.checked,"hide-label":r.hideLabel,"helper-text":r.helperText,size:r.size,theme:r.theme}),args:x,argTypes:{size:{options:["medium","small"],control:{type:"inline-radio"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <IcSwitch label="Label" />,
  name: "Default"
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <IcSwitch label="Label" />,
  name: "Name"
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <IcSwitch checked label="Label" />,
  name: "Checked"
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Controlled />,
  name: "Checked updated"
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <IcSwitch size="small" label="Label" />,
  name: "Size small"
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <IcSwitch disabled label="Label" />,
  name: "Disabled"
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <IcSwitch disabled label="Label" />,
  name: "Disabled and label"
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <IcSwitch disabled label="Label" checked />,
  name: "Disabled, label and checked"
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <IcSwitch label="Custom label" />,
  name: "ARIA label"
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <IcSwitch label="Right adornment">
      <svg slot="right-adornment" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z" fill="black" />
      </svg>
    </IcSwitch>,
  name: "Right adornment"
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcSwitch label="Helper text" helperText="This is some helper text" />
      <IcSwitch label="Label">
        <IcTypography variant="caption" slot="helper-text">
          <span>
            Slotted helper text with a <IcLink href="#">link</IcLink>
          </span>
        </IcTypography>
      </IcSwitch>
    </>,
  name: "Helper text"
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <IcSwitch disabled={args.disabled} label={args.label} checked={args.checked} hide-label={args.hideLabel} helper-text={args.helperText} size={args.size} theme={args.theme}></IcSwitch>,
  args: defaultArgs,
  argTypes: {
    size: {
      options: ["medium", "small"],
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
}`,...b.parameters?.docs?.source}}};const f=["Default","Name","Checked","CheckedUpdated","SizeSmall","Disabled","DisabledAndLabel","DisabledLabelAndChecked","AriaLabel","RightAdornment","HelperText","Playground"],D=Object.freeze(Object.defineProperty({__proto__:null,AriaLabel:m,Checked:n,CheckedUpdated:s,Default:t,Disabled:o,DisabledAndLabel:d,DisabledLabelAndChecked:i,HelperText:h,Name:l,Playground:b,RightAdornment:p,SizeSmall:c,__namedExportsOrder:f,default:E},Symbol.toStringTag,{value:"Module"}));export{D as I};
