import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{O as r,X as i,in as a,lt as o,t as s,u as c,ut as l}from"./iframe-C08mFgC2.js";var u=e({AriaLabel:()=>w,Checked:()=>v,CheckedUpdated:()=>y,Default:()=>g,Disabled:()=>x,DisabledAndLabel:()=>S,DisabledLabelAndChecked:()=>C,HelperText:()=>E,Name:()=>_,Playground:()=>D,RightAdornment:()=>T,Sizes:()=>b,__namedExportsOrder:()=>O,default:()=>h}),d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k=t((()=>{d=n(a()),l(),f=s(),p={label:`Custom Switch`,helperText:`Custom helper text`,disabled:!1,checked:!1,hideLabel:!1,size:`medium`,theme:`inherit`},m=()=>{let[e,t]=(0,d.useState)(!0);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{checked:e,label:`Label`}),(0,f.jsx)(c,{variant:`primary`,onClick:()=>{t(!1)},children:`Unchecked`}),(0,f.jsx)(c,{variant:`primary`,onClick:()=>{t(!0)},children:`Checked`})]})},h={title:`Switch`,component:i},g={render:()=>(0,f.jsx)(i,{label:`Label`}),name:`Default`},_={render:()=>(0,f.jsx)(i,{label:`Label`}),name:`Name`},v={render:()=>(0,f.jsx)(i,{checked:!0,label:`Label`}),name:`Checked`},y={render:()=>(0,f.jsx)(m,{}),name:`Checked updated`},b={render:()=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{size:`small`,label:`Label`}),(0,f.jsx)(i,{label:`Label`}),(0,f.jsx)(i,{size:`large`,label:`Label`})]}),name:`Sizes`},x={render:()=>(0,f.jsx)(i,{disabled:!0,label:`Label`}),name:`Disabled`},S={render:()=>(0,f.jsx)(i,{disabled:!0,label:`Label`}),name:`Disabled and label`},C={render:()=>(0,f.jsx)(i,{disabled:!0,label:`Label`,checked:!0}),name:`Disabled, label and checked`},w={render:()=>(0,f.jsx)(i,{label:`Custom label`}),name:`ARIA label`},T={render:()=>(0,f.jsx)(i,{label:`Right adornment`,children:(0,f.jsx)(`svg`,{slot:`right-adornment`,width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,f.jsx)(`path`,{d:`M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z`,fill:`black`})})}),name:`Right adornment`},E={render:()=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{label:`Helper text`,helperText:`This is some helper text`}),(0,f.jsx)(i,{label:`Label`,children:(0,f.jsx)(o,{variant:`caption`,slot:`helper-text`,children:(0,f.jsxs)(`span`,{children:[`Slotted helper text with a `,(0,f.jsx)(r,{href:`#`,children:`link`})]})})})]}),name:`Helper text`},D={render:e=>(0,f.jsx)(i,{disabled:e.disabled,label:e.label,checked:e.checked,"hide-label":e.hideLabel,"helper-text":e.helperText,size:e.size,theme:e.theme}),args:p,argTypes:{size:{options:[`small`,`medium`,`large`],control:{type:`inline-radio`}},theme:{options:[`inherit`,`light`,`dark`],control:{type:`inline-radio`}}},name:`Playground`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <IcSwitch label="Label" />,
  name: "Default"
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <IcSwitch label="Label" />,
  name: "Name"
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <IcSwitch checked label="Label" />,
  name: "Checked"
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Controlled />,
  name: "Checked updated"
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <>
    <IcSwitch size="small" label="Label" />
    <IcSwitch label="Label" />
    <IcSwitch size="large" label="Label" />
  </>,
  name: "Sizes"
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <IcSwitch disabled label="Label" />,
  name: "Disabled"
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <IcSwitch disabled label="Label" />,
  name: "Disabled and label"
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <IcSwitch disabled label="Label" checked />,
  name: "Disabled, label and checked"
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <IcSwitch label="Custom label" />,
  name: "ARIA label"
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <IcSwitch label="Right adornment">
      <svg slot="right-adornment" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z" fill="black" />
      </svg>
    </IcSwitch>,
  name: "Right adornment"
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => <IcSwitch disabled={args.disabled} label={args.label} checked={args.checked} hide-label={args.hideLabel} helper-text={args.helperText} size={args.size} theme={args.theme}></IcSwitch>,
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
    }
  },
  name: "Playground"
}`,...D.parameters?.docs?.source}}},O=[`Default`,`Name`,`Checked`,`CheckedUpdated`,`Sizes`,`Disabled`,`DisabledAndLabel`,`DisabledLabelAndChecked`,`AriaLabel`,`RightAdornment`,`HelperText`,`Playground`]}));k();export{w as AriaLabel,v as Checked,y as CheckedUpdated,g as Default,x as Disabled,S as DisabledAndLabel,C as DisabledLabelAndChecked,E as HelperText,_ as Name,D as Playground,T as RightAdornment,b as Sizes,O as __namedExportsOrder,h as default,k as n,u as t};