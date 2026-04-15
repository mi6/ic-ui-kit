var $=Object.freeze,w=Object.defineProperty;var D=(i,C)=>$(w(i,"raw",{value:$(C||i.slice())}));import{x as a}from"./lit-html-CWQq0DyO.js";const f={monochrome:!1,description:"Loading",fullWidth:!1,labelDuration:8e3,size:"medium",type:"linear",label:null,theme:"inherit"},z={label:{control:{type:"text"}},size:{options:["small","medium","large","icon"],control:{type:"radio"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}},type:{options:["circular","linear"],control:{type:"radio"}}},I={title:"Web Components/Loading",component:"ic-loading-indicator"},n={render:()=>a`<ic-loading-indicator label="Loading..."></ic-loading-indicator>`,name:"Circular (indeterminate)"},e={render:()=>a`<ic-loading-indicator
      progress="30"
      min="0"
      max="100"
      label="Loading..."
    ></ic-loading-indicator>`,name:"Circular (determinate)"},r={render:()=>a`<ic-loading-indicator
      label="This is a label for a loading indicator that is indeterminate and should wrap onto more than one line when it gets too long"
    ></ic-loading-indicator>`,name:"Circular long label"},o={render:()=>a`<div style="display: grid; gap: 50px;">
      <ic-loading-indicator label="Small" size="small"></ic-loading-indicator>
      <ic-loading-indicator label="Default"></ic-loading-indicator>
      <ic-loading-indicator label="Large" size="large"></ic-loading-indicator>
    </div>`,name:"Circular variants (indeterminate)"},d={render:()=>a`<div style="display: grid; gap: 50px;">
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
    </div>`,name:"Circular variants (determinate)"},l={render:()=>a`<ic-loading-indicator size="icon"></ic-loading-indicator>`,name:"Icon"},t={render:()=>a`<ic-loading-indicator
      label="Loading..."
      type="linear"
    ></ic-loading-indicator>`,name:"Linear (indeterminate)"},c={render:()=>a`<ic-loading-indicator
      progress="30"
      min="0"
      max="100"
      label="Progress"
      type="linear"
    ></ic-loading-indicator>`,name:"Linear (determinate)"},s={render:()=>a`<ic-loading-indicator
      type="linear"
      label="This is a label for a loading indicator that is indeterminate and should wrap onto more than one line when it gets too long"
    ></ic-loading-indicator>`,name:"Linear long label"},g={render:()=>a`<div style="display: grid; gap: 50px;">
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
    </div>`,name:"Linear variants (indeterminate)"},m={render:()=>a`<div style="display: grid; gap: 50px;">
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
    </div>`,name:"Linear variants (determinate)"},p={render:()=>a`<div style="display: grid; gap: 50px;">
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
    </div>`,name:"Circular dark mode",parameters:{backgrounds:{default:"dark"}}},u={render:()=>a`<ic-loading-indicator
      size="icon"
      theme="dark"
    ></ic-loading-indicator>`,name:"Icon dark mode",parameters:{backgrounds:{default:"dark"}}},b={render:()=>a`<div style="display: grid; gap: 50px;">
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
    </div>`,name:"Linear dark mode",parameters:{backgrounds:{default:"dark"}}},h={render:()=>a`<div style="display: grid; gap: 50px;">
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
    </div>`,name:"Monochrome"},y={render:()=>a`<div style="display: grid; gap: 50px;">
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
    </div>`,name:"No label"};var S;const k={render:()=>a(S||(S=D([`<ic-loading-indicator label-duration="4000"></ic-loading-indicator>
      <script>
        document.querySelector("ic-loading-indicator").label = [
          "Loading...",
          "Still loading...",
        ];
      <\/script> `]))),name:"Changing label"},L={render:i=>a`<ic-loading-indicator
      size="small"
      inner-label="3"
      progress="30"
      min="0"
      max="100"
    ></ic-loading-indicator>`,name:"Progress indicator for compact step",args:f,argTypes:z},v={render:i=>a`<div
      style="background-color: ${i.theme==="dark"?"var(--ic-color-page-background-dark)":"var(--ic-color-page-background-light)"}; padding: 16px;"
    >
      <ic-loading-indicator
        monochrome=${i.monochrome}
        theme=${i.theme}
        description=${i.description}
        full-width=${i.fullWidth}
        label-duration=${i.labelDuration}
        size=${i.size}
        type=${i.type}
        label=${i.label}
      >
      </ic-loading-indicator>
    </div>`,args:f,argTypes:z,name:"Playground - indeterminate"},x={render:i=>a`<div
      style="background-color: ${i.theme==="dark"?"var(--ic-color-page-background-dark)":"var(--ic-color-page-background-light)"}; padding: 16px;"
    >
      <ic-loading-indicator
        monochrome=${i.monochrome}
        theme=${i.theme}
        description=${i.description}
        full-width=${i.fullWidth}
        label-duration=${i.labelDuration}
        size=${i.size}
        type=${i.type}
        label=${i.label}
        progress=${i.progress}
        min=${i.min}
        max=${i.max}
      >
      </ic-loading-indicator>
    </div>`,args:{...f,max:100,min:0,progress:30},argTypes:z,name:"Playground - determinate"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-loading-indicator label="Loading..."></ic-loading-indicator>\`,
  name: "Circular (indeterminate)"
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-loading-indicator
      progress="30"
      min="0"
      max="100"
      label="Loading..."
    ></ic-loading-indicator>\`,
  name: "Circular (determinate)"
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-loading-indicator
      label="This is a label for a loading indicator that is indeterminate and should wrap onto more than one line when it gets too long"
    ></ic-loading-indicator>\`,
  name: "Circular long label"
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="display: grid; gap: 50px;">
      <ic-loading-indicator label="Small" size="small"></ic-loading-indicator>
      <ic-loading-indicator label="Default"></ic-loading-indicator>
      <ic-loading-indicator label="Large" size="large"></ic-loading-indicator>
    </div>\`,
  name: "Circular variants (indeterminate)"
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-loading-indicator size="icon"></ic-loading-indicator>\`,
  name: "Icon"
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-loading-indicator
      label="Loading..."
      type="linear"
    ></ic-loading-indicator>\`,
  name: "Linear (indeterminate)"
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-loading-indicator
      progress="30"
      min="0"
      max="100"
      label="Progress"
      type="linear"
    ></ic-loading-indicator>\`,
  name: "Linear (determinate)"
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-loading-indicator
      type="linear"
      label="This is a label for a loading indicator that is indeterminate and should wrap onto more than one line when it gets too long"
    ></ic-loading-indicator>\`,
  name: "Linear long label"
}`,...s.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-loading-indicator label-duration="4000"></ic-loading-indicator>
      <script>
        document.querySelector("ic-loading-indicator").label = [
          "Loading...",
          "Still loading...",
        ];
      <\/script> \`,
  name: "Changing label"
}`,...k.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const P=["CircularIndeterminate","CircularDeterminate","CircularLongLabel","CircularVariantsIndeterminate","CircularVariantsDeterminate","Icon","LinearIndeterminate","LinearDeterminate","LinearLongLabel","LinearVariantsIndeterminate","LinearVariantsDeterminate","CircularDarkMode","IconDarkMode","LinearDarkMode","Monochrome","NoLabel","ChangingLabel","ProgressIndicatorForCompactStep","PlaygroundIndeterminate","PlaygroundDeterminate"],F=Object.freeze(Object.defineProperty({__proto__:null,ChangingLabel:k,CircularDarkMode:p,CircularDeterminate:e,CircularIndeterminate:n,CircularLongLabel:r,CircularVariantsDeterminate:d,CircularVariantsIndeterminate:o,Icon:l,IconDarkMode:u,LinearDarkMode:b,LinearDeterminate:c,LinearIndeterminate:t,LinearLongLabel:s,LinearVariantsDeterminate:m,LinearVariantsIndeterminate:g,Monochrome:h,NoLabel:y,PlaygroundDeterminate:x,PlaygroundIndeterminate:v,ProgressIndicatorForCompactStep:L,__namedExportsOrder:P,default:I},Symbol.toStringTag,{value:"Module"}));export{F as I};
