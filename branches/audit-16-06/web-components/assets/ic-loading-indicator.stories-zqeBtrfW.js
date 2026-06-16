import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{n,t as r}from"./lit-html-CwvQb_NC.js";import{n as i,t as a}from"./taggedTemplateLiteral-pWa2IaV6.js";var o=e({ChangingLabel:()=>D,CircularDarkMode:()=>S,CircularDeterminate:()=>f,CircularIndeterminate:()=>d,CircularLongLabel:()=>p,CircularVariantsDeterminate:()=>h,CircularVariantsIndeterminate:()=>m,Icon:()=>g,IconDarkMode:()=>C,LinearDarkMode:()=>w,LinearDeterminate:()=>v,LinearIndeterminate:()=>_,LinearLongLabel:()=>y,LinearVariantsDeterminate:()=>x,LinearVariantsIndeterminate:()=>b,Monochrome:()=>T,NoLabel:()=>E,PlaygroundDeterminate:()=>A,PlaygroundIndeterminate:()=>k,ProgressIndicatorForCompactStep:()=>O,__namedExportsOrder:()=>j,default:()=>u}),s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M=t((()=>{n(),i(),c={monochrome:!1,description:`Loading`,fullWidth:!1,labelDuration:8e3,size:`medium`,type:`linear`,label:null,theme:`inherit`},l={label:{control:{type:`text`}},size:{options:[`small`,`medium`,`large`,`icon`],control:{type:`radio`}},theme:{options:[`inherit`,`light`,`dark`],control:{type:`inline-radio`}},type:{options:[`circular`,`linear`],control:{type:`radio`}}},u={title:`Web Components/Loading`,component:`ic-loading-indicator`},d={render:()=>r`<ic-loading-indicator label="Loading..."></ic-loading-indicator>`,name:`Circular (indeterminate)`},f={render:()=>r`<ic-loading-indicator
      progress="30"
      min="0"
      max="100"
      label="Loading..."
    ></ic-loading-indicator>`,name:`Circular (determinate)`},p={render:()=>r`<ic-loading-indicator
      label="This is a label for a loading indicator that is indeterminate and should wrap onto more than one line when it gets too long"
    ></ic-loading-indicator>`,name:`Circular long label`},m={render:()=>r`<div style="display: grid; gap: 50px;">
      <ic-loading-indicator label="Small" size="small"></ic-loading-indicator>
      <ic-loading-indicator label="Default"></ic-loading-indicator>
      <ic-loading-indicator label="Large" size="large"></ic-loading-indicator>
    </div>`,name:`Circular variants (indeterminate)`},h={render:()=>r`<div style="display: grid; gap: 50px;">
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Small"
        size="small"
      ></ic-loading-indicator>
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Default"
      ></ic-loading-indicator>
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Large"
        size="large"
      ></ic-loading-indicator>
    </div>`,name:`Circular variants (determinate)`},g={render:()=>r`<ic-loading-indicator size="icon"></ic-loading-indicator>`,name:`Icon`},_={render:()=>r`<ic-loading-indicator
      label="Loading..."
      type="linear"
    ></ic-loading-indicator>`,name:`Linear (indeterminate)`},v={render:()=>r`<ic-loading-indicator
      progress="30"
      min="0"
      max="100"
      label="Progress"
      type="linear"
    ></ic-loading-indicator>`,name:`Linear (determinate)`},y={render:()=>r`<ic-loading-indicator
      type="linear"
      label="This is a label for a loading indicator that is indeterminate and should wrap onto more than one line when it gets too long"
    ></ic-loading-indicator>`,name:`Linear long label`},b={render:()=>r`<div style="display: grid; gap: 50px;">
      <ic-loading-indicator
        label="Small"
        size="small"
        type="linear"
      ></ic-loading-indicator>
      <ic-loading-indicator
        label="Default"
        type="linear"
      ></ic-loading-indicator>
      <ic-loading-indicator
        label="Large"
        size="large"
        type="linear"
      ></ic-loading-indicator>
      <ic-loading-indicator
        label="Full-width"
        size="medium"
        type="linear"
        full-width="true"
      ></ic-loading-indicator>
    </div>`,name:`Linear variants (indeterminate)`},x={render:()=>r`<div style="display: grid; gap: 50px;">
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Small"
        size="small"
        type="linear"
      ></ic-loading-indicator>
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Default"
        type="linear"
      ></ic-loading-indicator>
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Large"
        size="large"
        type="linear"
      ></ic-loading-indicator>
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Full-width"
        size="medium"
        type="linear"
        full-width="true"
      ></ic-loading-indicator>
    </div>`,name:`Linear variants (determinate)`},S={render:()=>r`<div style="display: grid; gap: 50px;">
      <ic-loading-indicator
        label="Small"
        size="small"
        theme="dark"
      ></ic-loading-indicator>
      <ic-loading-indicator label="Default" theme="dark"></ic-loading-indicator>
      <ic-loading-indicator
        label="Large"
        size="large"
        theme="dark"
      ></ic-loading-indicator>
    </div>`,name:`Circular dark mode`,parameters:{backgrounds:{default:`dark`}}},C={render:()=>r`<ic-loading-indicator
      size="icon"
      theme="dark"
    ></ic-loading-indicator>`,name:`Icon dark mode`,parameters:{backgrounds:{default:`dark`}}},w={render:()=>r`<div style="display: grid; gap: 50px;">
      <ic-loading-indicator
        label="Default"
        type="linear"
        theme="dark"
      ></ic-loading-indicator>
      <ic-loading-indicator
        label="Large"
        size="large"
        type="linear"
        theme="dark"
      ></ic-loading-indicator>
      <ic-loading-indicator
        label="Full-width"
        type="linear"
        full-width="true"
        theme="dark"
      ></ic-loading-indicator>
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Default"
        type="linear"
        theme="dark"
      ></ic-loading-indicator>
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Large"
        size="large"
        type="linear"
        theme="dark"
      ></ic-loading-indicator>
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Full-width"
        type="linear"
        full-width="true"
        theme="dark"
      ></ic-loading-indicator>
    </div>`,name:`Linear dark mode`,parameters:{backgrounds:{default:`dark`}}},T={render:()=>r`<div style="display: grid; gap: 50px;">
      <ic-loading-indicator
        label="Light"
        monochrome="true"
      ></ic-loading-indicator>
      <div style="background-color: black">
        <ic-loading-indicator
          label="Dark"
          theme="dark"
          monochrome="true"
        ></ic-loading-indicator>
      </div>
      <ic-loading-indicator
        size="icon"
        monochrome="true"
      ></ic-loading-indicator>
      <div
        style="background-color: black; display: flex; justify-content: center"
      >
        <ic-loading-indicator
          size="icon"
          theme="dark"
          monochrome="true"
        ></ic-loading-indicator>
      </div>
      <ic-loading-indicator
        label="Light"
        type="linear"
        monochrome="true"
      ></ic-loading-indicator>
      <div style="background-color: black; padding: var(--ic-space-xs)">
        <ic-loading-indicator
          label="Dark"
          type="linear"
          theme="dark"
          monochrome="true"
        ></ic-loading-indicator>
      </div>
    </div>`,name:`Monochrome`},E={render:()=>r`<div style="display: grid; gap: 50px;">
      <ic-loading-indicator description="Loading"></ic-loading-indicator
      ><ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        description="Loading"
      ></ic-loading-indicator
      ><ic-loading-indicator
        description="Loading"
        type="linear"
      ></ic-loading-indicator
      ><ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        description="Loading"
        type="linear"
      ></ic-loading-indicator>
    </div>`,name:`No label`},D={render:()=>r(s||=a([`<ic-loading-indicator label-duration="4000"></ic-loading-indicator>
      <script>
        document.querySelector("ic-loading-indicator").label = [
          "Loading...",
          "Still loading...",
        ];
      <\/script> `])),name:`Changing label`},O={render:e=>r`<ic-loading-indicator
      size="small"
      inner-label="3"
      progress="30"
      min="0"
      max="100"
    ></ic-loading-indicator>`,name:`Progress indicator for compact step`,args:c,argTypes:l},k={render:e=>r`<div
      style="background-color: ${e.theme===`dark`?`var(--ic-color-page-background-dark)`:`var(--ic-color-page-background-light)`}; padding: 16px;"
    >
      <ic-loading-indicator
        monochrome=${e.monochrome}
        theme=${e.theme}
        description=${e.description}
        full-width=${e.fullWidth}
        label-duration=${e.labelDuration}
        size=${e.size}
        type=${e.type}
        label=${e.label}
      >
      </ic-loading-indicator>
    </div>`,args:c,argTypes:l,name:`Playground - indeterminate`},A={render:e=>r`<div
      style="background-color: ${e.theme===`dark`?`var(--ic-color-page-background-dark)`:`var(--ic-color-page-background-light)`}; padding: 16px;"
    >
      <ic-loading-indicator
        monochrome=${e.monochrome}
        theme=${e.theme}
        description=${e.description}
        full-width=${e.fullWidth}
        label-duration=${e.labelDuration}
        size=${e.size}
        type=${e.type}
        label=${e.label}
        progress=${e.progress}
        min=${e.min}
        max=${e.max}
      >
      </ic-loading-indicator>
    </div>`,args:{...c,max:100,min:0,progress:30},argTypes:l,name:`Playground - determinate`},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-loading-indicator label="Loading..."></ic-loading-indicator>\`,
  name: "Circular (indeterminate)"
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-loading-indicator
      progress="30"
      min="0"
      max="100"
      label="Loading..."
    ></ic-loading-indicator>\`,
  name: "Circular (determinate)"
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-loading-indicator
      label="This is a label for a loading indicator that is indeterminate and should wrap onto more than one line when it gets too long"
    ></ic-loading-indicator>\`,
  name: "Circular long label"
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="display: grid; gap: 50px;">
      <ic-loading-indicator label="Small" size="small"></ic-loading-indicator>
      <ic-loading-indicator label="Default"></ic-loading-indicator>
      <ic-loading-indicator label="Large" size="large"></ic-loading-indicator>
    </div>\`,
  name: "Circular variants (indeterminate)"
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="display: grid; gap: 50px;">
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Small"
        size="small"
      ></ic-loading-indicator>
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Default"
      ></ic-loading-indicator>
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Large"
        size="large"
      ></ic-loading-indicator>
    </div>\`,
  name: "Circular variants (determinate)"
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-loading-indicator size="icon"></ic-loading-indicator>\`,
  name: "Icon"
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-loading-indicator
      label="Loading..."
      type="linear"
    ></ic-loading-indicator>\`,
  name: "Linear (indeterminate)"
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-loading-indicator
      progress="30"
      min="0"
      max="100"
      label="Progress"
      type="linear"
    ></ic-loading-indicator>\`,
  name: "Linear (determinate)"
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-loading-indicator
      type="linear"
      label="This is a label for a loading indicator that is indeterminate and should wrap onto more than one line when it gets too long"
    ></ic-loading-indicator>\`,
  name: "Linear long label"
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="display: grid; gap: 50px;">
      <ic-loading-indicator
        label="Small"
        size="small"
        type="linear"
      ></ic-loading-indicator>
      <ic-loading-indicator
        label="Default"
        type="linear"
      ></ic-loading-indicator>
      <ic-loading-indicator
        label="Large"
        size="large"
        type="linear"
      ></ic-loading-indicator>
      <ic-loading-indicator
        label="Full-width"
        size="medium"
        type="linear"
        full-width="true"
      ></ic-loading-indicator>
    </div>\`,
  name: "Linear variants (indeterminate)"
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="display: grid; gap: 50px;">
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Small"
        size="small"
        type="linear"
      ></ic-loading-indicator>
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Default"
        type="linear"
      ></ic-loading-indicator>
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Large"
        size="large"
        type="linear"
      ></ic-loading-indicator>
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Full-width"
        size="medium"
        type="linear"
        full-width="true"
      ></ic-loading-indicator>
    </div>\`,
  name: "Linear variants (determinate)"
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="display: grid; gap: 50px;">
      <ic-loading-indicator
        label="Small"
        size="small"
        theme="dark"
      ></ic-loading-indicator>
      <ic-loading-indicator label="Default" theme="dark"></ic-loading-indicator>
      <ic-loading-indicator
        label="Large"
        size="large"
        theme="dark"
      ></ic-loading-indicator>
    </div>\`,
  name: "Circular dark mode",
  parameters: {
    backgrounds: {
      default: "dark"
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-loading-indicator
      size="icon"
      theme="dark"
    ></ic-loading-indicator>\`,
  name: "Icon dark mode",
  parameters: {
    backgrounds: {
      default: "dark"
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="display: grid; gap: 50px;">
      <ic-loading-indicator
        label="Default"
        type="linear"
        theme="dark"
      ></ic-loading-indicator>
      <ic-loading-indicator
        label="Large"
        size="large"
        type="linear"
        theme="dark"
      ></ic-loading-indicator>
      <ic-loading-indicator
        label="Full-width"
        type="linear"
        full-width="true"
        theme="dark"
      ></ic-loading-indicator>
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Default"
        type="linear"
        theme="dark"
      ></ic-loading-indicator>
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Large"
        size="large"
        type="linear"
        theme="dark"
      ></ic-loading-indicator>
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Full-width"
        type="linear"
        full-width="true"
        theme="dark"
      ></ic-loading-indicator>
    </div>\`,
  name: "Linear dark mode",
  parameters: {
    backgrounds: {
      default: "dark"
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="display: grid; gap: 50px;">
      <ic-loading-indicator
        label="Light"
        monochrome="true"
      ></ic-loading-indicator>
      <div style="background-color: black">
        <ic-loading-indicator
          label="Dark"
          theme="dark"
          monochrome="true"
        ></ic-loading-indicator>
      </div>
      <ic-loading-indicator
        size="icon"
        monochrome="true"
      ></ic-loading-indicator>
      <div
        style="background-color: black; display: flex; justify-content: center"
      >
        <ic-loading-indicator
          size="icon"
          theme="dark"
          monochrome="true"
        ></ic-loading-indicator>
      </div>
      <ic-loading-indicator
        label="Light"
        type="linear"
        monochrome="true"
      ></ic-loading-indicator>
      <div style="background-color: black; padding: var(--ic-space-xs)">
        <ic-loading-indicator
          label="Dark"
          type="linear"
          theme="dark"
          monochrome="true"
        ></ic-loading-indicator>
      </div>
    </div>\`,
  name: "Monochrome"
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="display: grid; gap: 50px;">
      <ic-loading-indicator description="Loading"></ic-loading-indicator
      ><ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        description="Loading"
      ></ic-loading-indicator
      ><ic-loading-indicator
        description="Loading"
        type="linear"
      ></ic-loading-indicator
      ><ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        description="Loading"
        type="linear"
      ></ic-loading-indicator>
    </div>\`,
  name: "No label"
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-loading-indicator label-duration="4000"></ic-loading-indicator>
      <script>
        document.querySelector("ic-loading-indicator").label = [
          "Loading...",
          "Still loading...",
        ];
      <\/script> \`,
  name: "Changing label"
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => html\`<ic-loading-indicator
      size="small"
      inner-label="3"
      progress="30"
      min="0"
      max="100"
    ></ic-loading-indicator>\`,
  name: "Progress indicator for compact step",
  args: defaultArgs,
  argTypes: defaultArgTypes
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => html\`<div
      style="background-color: \${args.theme === "dark" ? "var(--ic-color-page-background-dark)" : "var(--ic-color-page-background-light)"}; padding: 16px;"
    >
      <ic-loading-indicator
        monochrome=\${args.monochrome}
        theme=\${args.theme}
        description=\${args.description}
        full-width=\${args.fullWidth}
        label-duration=\${args.labelDuration}
        size=\${args.size}
        type=\${args.type}
        label=\${args.label}
      >
      </ic-loading-indicator>
    </div>\`,
  args: defaultArgs,
  argTypes: defaultArgTypes,
  name: "Playground - indeterminate"
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => html\`<div
      style="background-color: \${args.theme === "dark" ? "var(--ic-color-page-background-dark)" : "var(--ic-color-page-background-light)"}; padding: 16px;"
    >
      <ic-loading-indicator
        monochrome=\${args.monochrome}
        theme=\${args.theme}
        description=\${args.description}
        full-width=\${args.fullWidth}
        label-duration=\${args.labelDuration}
        size=\${args.size}
        type=\${args.type}
        label=\${args.label}
        progress=\${args.progress}
        min=\${args.min}
        max=\${args.max}
      >
      </ic-loading-indicator>
    </div>\`,
  args: {
    ...defaultArgs,
    max: 100,
    min: 0,
    progress: 30
  },
  argTypes: defaultArgTypes,
  name: "Playground - determinate"
}`,...A.parameters?.docs?.source}}},j=[`CircularIndeterminate`,`CircularDeterminate`,`CircularLongLabel`,`CircularVariantsIndeterminate`,`CircularVariantsDeterminate`,`Icon`,`LinearIndeterminate`,`LinearDeterminate`,`LinearLongLabel`,`LinearVariantsIndeterminate`,`LinearVariantsDeterminate`,`CircularDarkMode`,`IconDarkMode`,`LinearDarkMode`,`Monochrome`,`NoLabel`,`ChangingLabel`,`ProgressIndicatorForCompactStep`,`PlaygroundIndeterminate`,`PlaygroundDeterminate`]}));M();export{D as ChangingLabel,S as CircularDarkMode,f as CircularDeterminate,d as CircularIndeterminate,p as CircularLongLabel,h as CircularVariantsDeterminate,m as CircularVariantsIndeterminate,g as Icon,C as IconDarkMode,w as LinearDarkMode,v as LinearDeterminate,_ as LinearIndeterminate,y as LinearLongLabel,x as LinearVariantsDeterminate,b as LinearVariantsIndeterminate,T as Monochrome,E as NoLabel,A as PlaygroundDeterminate,k as PlaygroundIndeterminate,O as ProgressIndicatorForCompactStep,j as __namedExportsOrder,u as default,M as n,o as t};