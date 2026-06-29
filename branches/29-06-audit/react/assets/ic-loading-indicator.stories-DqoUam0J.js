import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{in as n,k as r,t as i,ut as a}from"./iframe-xO3e-qV4.js";var o=e({ChangingLabel:()=>D,CircularDark:()=>S,CircularDeterminate:()=>f,CircularIndeterminate:()=>d,CircularLongLabel:()=>p,CircularVariantsDeterminate:()=>h,CircularVariantsIndeterminate:()=>m,IconCircular:()=>g,IconDarkCircular:()=>C,LinearDark:()=>w,LinearDeterminate:()=>v,LinearIndeterminate:()=>_,LinearLongLabel:()=>y,LinearVariantsDeterminate:()=>x,LinearVariantsIndeterminate:()=>b,Monochrome:()=>T,NoLabel:()=>E,PlaygroundDeterminate:()=>A,PlaygroundIndeterminate:()=>k,ProgressIndicatorForCompactStep:()=>O,__namedExportsOrder:()=>j,default:()=>u}),s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M=t((()=>{n(),a(),s=i(),c={description:`Loading`,fullWidth:!1,labelDuration:8e3,size:`medium`,type:`circular`,label:[],theme:`inherit`,monochrome:!1},l={size:{options:[`small`,`medium`,`large`,`icon`],control:{type:`radio`}},type:{options:[`circular`,`linear`],control:{type:`radio`}},theme:{options:[`inherit`,`light`,`dark`],control:{type:`inline-radio`}},label:{control:{type:`array`}}},u={title:`Loading`,component:r},d={render:()=>(0,s.jsx)(r,{label:`Loading...`}),name:`Circular (indeterminate)`},f={render:()=>(0,s.jsx)(r,{progress:`30`,min:`0`,max:`100`,label:`Loading...`}),name:`Circular (determinate)`},p={render:()=>(0,s.jsx)(r,{label:`This is a label for a loading indicator that is indeterminate and should wrap onto more than one line when it gets too long`}),name:`Circular long label`},m={render:()=>(0,s.jsxs)(`div`,{style:{display:`grid`,gap:`50px`},children:[(0,s.jsx)(r,{label:`Small`,size:`small`}),(0,s.jsx)(r,{label:`Default`}),(0,s.jsx)(r,{label:`Large`,size:`large`})]}),name:`Circular variants (indeterminate)`},h={render:()=>(0,s.jsxs)(`div`,{style:{display:`grid`,gap:`50px`},children:[(0,s.jsx)(r,{progress:`30`,min:`0`,max:`100`,label:`Small`,size:`small`}),(0,s.jsx)(r,{progress:`30`,min:`0`,max:`100`,label:`Default`}),(0,s.jsx)(r,{progress:`30`,min:`0`,max:`100`,label:`Large`,size:`large`})]}),name:`Circular variants (determinate)`},g={render:()=>(0,s.jsx)(r,{size:`icon`}),name:`Icon (circular)`},_={render:()=>(0,s.jsx)(r,{label:`Loading...`,type:`linear`}),name:`Linear (indeterminate)`},v={render:()=>(0,s.jsx)(r,{progress:`30`,min:`0`,max:`100`,label:`Loading...`,type:`linear`}),name:`Linear (determinate)`},y={render:()=>(0,s.jsx)(r,{type:`linear`,label:`This is a label for a loading indicator that is indeterminate and should wrap onto more than one line when it gets too long`}),name:`Linear long label`},b={render:()=>(0,s.jsxs)(`div`,{style:{display:`grid`,gap:`50px`},children:[(0,s.jsx)(r,{label:`Small`,size:`small`,type:`linear`}),(0,s.jsx)(r,{label:`Default`,type:`linear`}),(0,s.jsx)(r,{label:`Large`,size:`large`,type:`linear`}),(0,s.jsx)(r,{label:`Full-width`,size:`medium`,type:`linear`,fullWidth:!0})]}),name:`Linear variants (indeterminate)`},x={render:()=>(0,s.jsxs)(`div`,{style:{display:`grid`,gap:`50px`},children:[(0,s.jsx)(r,{progress:`30`,min:`0`,max:`100`,label:`Small`,size:`small`,type:`linear`}),(0,s.jsx)(r,{progress:`30`,min:`0`,max:`100`,label:`Default`,type:`linear`}),(0,s.jsx)(r,{progress:`30`,min:`0`,max:`100`,label:`Large`,size:`large`,type:`linear`}),(0,s.jsx)(r,{progress:`30`,min:`0`,max:`100`,label:`Full-width`,size:`medium`,type:`linear`,fullWidth:!0})]}),name:`Linear variants (determinate)`},S={render:()=>(0,s.jsxs)(`div`,{style:{display:`grid`,gap:`50px`},children:[(0,s.jsx)(r,{label:`Small`,size:`small`,theme:`dark`}),(0,s.jsx)(r,{label:`Default`,theme:`dark`}),(0,s.jsx)(r,{label:`Large`,size:`large`,theme:`dark`})]}),name:`Circular dark`,parameters:{backgrounds:{default:`dark`}}},C={render:()=>(0,s.jsx)(r,{size:`icon`,theme:`dark`}),name:`Icon dark (circular)`,parameters:{backgrounds:{default:`dark`}}},w={render:()=>(0,s.jsxs)(`div`,{style:{display:`grid`,gap:`50px`},children:[(0,s.jsx)(r,{label:`Default`,type:`linear`,theme:`dark`}),(0,s.jsx)(r,{label:`Large`,size:`large`,type:`linear`,theme:`dark`}),(0,s.jsx)(r,{label:`Full-width`,type:`linear`,fullWidth:!0,theme:`dark`})]}),name:`Linear dark`,parameters:{backgrounds:{default:`dark`}}},T={render:()=>(0,s.jsxs)(`div`,{style:{display:`grid`,gap:`50px`},children:[(0,s.jsx)(r,{label:`Light`,monochrome:!0}),(0,s.jsx)(`div`,{style:{backgroundColor:`black`},children:(0,s.jsx)(r,{label:`Dark`,theme:`dark`,monochrome:!0})}),(0,s.jsx)(r,{size:`icon`,monochrome:!0}),(0,s.jsx)(`div`,{style:{backgroundColor:`black`,display:`flex`,justifyContent:`center`},children:(0,s.jsx)(r,{size:`icon`,theme:`dark`,monochrome:!0})}),(0,s.jsx)(r,{label:`Light`,type:`linear`,monochrome:!0}),(0,s.jsx)(`div`,{style:{backgroundColor:`black`,padding:`var(--ic-space-xs)`},children:(0,s.jsx)(r,{label:`Dark`,type:`linear`,theme:`dark`,monochrome:!0})})]}),name:`Monochrome`},E={render:()=>(0,s.jsxs)(`div`,{style:{display:`grid`,gap:`50px`},children:[(0,s.jsx)(r,{description:`Loading`}),(0,s.jsx)(r,{description:`Loading`,type:`linear`})]}),name:`No label`},D={render:()=>(0,s.jsx)(r,{label:[`Loading...`,`Still loading...`],labelDuration:`4000`}),name:`Changing label`},O={render:()=>(0,s.jsx)(r,{size:`small`,"inner-label":`3`,progress:`30`,min:`0`,max:`100`}),name:`Progress indicator for compact step`},k={render:e=>(0,s.jsx)(`div`,{style:{backgroundColor:e.theme===`dark`?`var(--ic-color-page-background-dark)`:`var(--ic-color-page-background-light)`,padding:`16px`},children:(0,s.jsx)(r,{monochrome:e.monochrome,theme:e.theme,description:e.description,fullWidth:e.fullWidth,labelDuration:e.labelDuration,size:e.size,type:e.type,label:e.label})}),name:`Playground - indeterminate`,args:c,argTypes:l},A={render:e=>(0,s.jsx)(`div`,{style:{backgroundColor:e.theme===`dark`?`var(--ic-color-page-background-dark)`:`var(--ic-color-page-background-light)`,padding:`16px`},children:(0,s.jsx)(r,{monochrome:e.monochrome,theme:e.theme,description:e.description,fullWidth:e.fullWidth,labelDuration:e.labelDuration,size:e.size,type:e.type,label:e.label,progress:e.progress,min:e.min,max:e.max})}),name:`Playground - determinate`,args:{...c,max:100,min:0,progress:30},argTypes:l},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <IcLoadingIndicator label="Loading..." />,
  name: "Circular (indeterminate)"
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <IcLoadingIndicator progress="30" min="0" max="100" label="Loading..." />,
  name: "Circular (determinate)"
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <IcLoadingIndicator label="This is a label for a loading indicator that is indeterminate and should wrap onto more than one line when it gets too long" />,
  name: "Circular long label"
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: "50px"
  }}>
      <IcLoadingIndicator label="Small" size="small" />
      <IcLoadingIndicator label="Default" />
      <IcLoadingIndicator label="Large" size="large" />
    </div>,
  name: "Circular variants (indeterminate)"
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: "50px"
  }}>
      <IcLoadingIndicator progress="30" min="0" max="100" label="Small" size="small" />
      <IcLoadingIndicator progress="30" min="0" max="100" label="Default" />
      <IcLoadingIndicator progress="30" min="0" max="100" label="Large" size="large" />
    </div>,
  name: "Circular variants (determinate)"
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <IcLoadingIndicator size="icon" />,
  name: "Icon (circular)"
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <IcLoadingIndicator label="Loading..." type="linear" />,
  name: "Linear (indeterminate)"
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <IcLoadingIndicator progress="30" min="0" max="100" label="Loading..." type="linear" />,
  name: "Linear (determinate)"
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <IcLoadingIndicator type="linear" label="This is a label for a loading indicator that is indeterminate and should wrap onto more than one line when it gets too long" />,
  name: "Linear long label"
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: "50px"
  }}>
      <IcLoadingIndicator label="Small" size="small" type="linear" />
      <IcLoadingIndicator label="Default" type="linear" />
      <IcLoadingIndicator label="Large" size="large" type="linear" />
      <IcLoadingIndicator label="Full-width" size="medium" type="linear" fullWidth={true} />
    </div>,
  name: "Linear variants (indeterminate)"
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: "50px"
  }}>
      <IcLoadingIndicator progress="30" min="0" max="100" label="Small" size="small" type="linear" />
      <IcLoadingIndicator progress="30" min="0" max="100" label="Default" type="linear" />
      <IcLoadingIndicator progress="30" min="0" max="100" label="Large" size="large" type="linear" />
      <IcLoadingIndicator progress="30" min="0" max="100" label="Full-width" size="medium" type="linear" fullWidth={true} />
    </div>,
  name: "Linear variants (determinate)"
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: "50px"
  }}>
      <IcLoadingIndicator label="Small" size="small" theme="dark" />
      <IcLoadingIndicator label="Default" theme="dark" />
      <IcLoadingIndicator label="Large" size="large" theme="dark" />
    </div>,
  name: "Circular dark",
  parameters: {
    backgrounds: {
      default: "dark"
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <IcLoadingIndicator size="icon" theme="dark" />,
  name: "Icon dark (circular)",
  parameters: {
    backgrounds: {
      default: "dark"
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: "50px"
  }}>
      <IcLoadingIndicator label="Default" type="linear" theme="dark" />
      <IcLoadingIndicator label="Large" size="large" type="linear" theme="dark" />
      <IcLoadingIndicator label="Full-width" type="linear" fullWidth={true} theme="dark" />
    </div>,
  name: "Linear dark",
  parameters: {
    backgrounds: {
      default: "dark"
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: "50px"
  }}>
      <IcLoadingIndicator label="Light" monochrome />
      <div style={{
      backgroundColor: "black"
    }}>
        <IcLoadingIndicator label="Dark" theme="dark" monochrome />
      </div>
      <IcLoadingIndicator size="icon" monochrome />
      <div style={{
      backgroundColor: "black",
      display: "flex",
      justifyContent: "center"
    }}>
        <IcLoadingIndicator size="icon" theme="dark" monochrome />
      </div>
      <IcLoadingIndicator label="Light" type="linear" monochrome />
      <div style={{
      backgroundColor: "black",
      padding: "var(--ic-space-xs)"
    }}>
        <IcLoadingIndicator label="Dark" type="linear" theme="dark" monochrome />
      </div>
    </div>,
  name: "Monochrome"
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: "50px"
  }}>
      <IcLoadingIndicator description="Loading" />
      <IcLoadingIndicator description="Loading" type="linear" />
    </div>,
  name: "No label"
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <IcLoadingIndicator label={["Loading...", "Still loading..."]} labelDuration="4000" />,
  name: "Changing label"
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <IcLoadingIndicator size="small" inner-label="3" progress="30" min="0" max="100" />,
  name: "Progress indicator for compact step"
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    backgroundColor: args.theme === "dark" ? "var(--ic-color-page-background-dark)" : "var(--ic-color-page-background-light)",
    padding: "16px"
  }}>
      <IcLoadingIndicator monochrome={args.monochrome} theme={args.theme} description={args.description} fullWidth={args.fullWidth} labelDuration={args.labelDuration} size={args.size} type={args.type} label={args.label} />
    </div>,
  name: "Playground - indeterminate",
  args: defaultArgs,
  argTypes: defaultArgTypes
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    backgroundColor: args.theme === "dark" ? "var(--ic-color-page-background-dark)" : "var(--ic-color-page-background-light)",
    padding: "16px"
  }}>
      <IcLoadingIndicator monochrome={args.monochrome} theme={args.theme} description={args.description} fullWidth={args.fullWidth} labelDuration={args.labelDuration} size={args.size} type={args.type} label={args.label} progress={args.progress} min={args.min} max={args.max} />
    </div>,
  name: "Playground - determinate",
  args: {
    ...defaultArgs,
    max: 100,
    min: 0,
    progress: 30
  },
  argTypes: defaultArgTypes
}`,...A.parameters?.docs?.source}}},j=[`CircularIndeterminate`,`CircularDeterminate`,`CircularLongLabel`,`CircularVariantsIndeterminate`,`CircularVariantsDeterminate`,`IconCircular`,`LinearIndeterminate`,`LinearDeterminate`,`LinearLongLabel`,`LinearVariantsIndeterminate`,`LinearVariantsDeterminate`,`CircularDark`,`IconDarkCircular`,`LinearDark`,`Monochrome`,`NoLabel`,`ChangingLabel`,`ProgressIndicatorForCompactStep`,`PlaygroundIndeterminate`,`PlaygroundDeterminate`]}));M();export{D as ChangingLabel,S as CircularDark,f as CircularDeterminate,d as CircularIndeterminate,p as CircularLongLabel,h as CircularVariantsDeterminate,m as CircularVariantsIndeterminate,g as IconCircular,C as IconDarkCircular,w as LinearDark,v as LinearDeterminate,_ as LinearIndeterminate,y as LinearLongLabel,x as LinearVariantsDeterminate,b as LinearVariantsIndeterminate,T as Monochrome,E as NoLabel,A as PlaygroundDeterminate,k as PlaygroundIndeterminate,O as ProgressIndicatorForCompactStep,j as __namedExportsOrder,u as default,M as n,o as t};