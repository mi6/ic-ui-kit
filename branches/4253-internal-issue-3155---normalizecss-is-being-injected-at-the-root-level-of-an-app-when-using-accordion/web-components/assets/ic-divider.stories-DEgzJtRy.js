import{x as i}from"./lit-html-CWQq0DyO.js";const h={"border-style":"solid",label:"","label-placement":"none",monochrome:!1,orientation:"horizontal",theme:"inherit",weight:"thin","--ic-divider-horizontal-width":"100%","--ic-divider-vertical-height":"400px","--ic-divider-background":"","--ic-divider-background-monochrome":"","--ic-divider-label":"","--ic-divider-label-monochrome":"","--ic-divider-label-width":""},s={title:"Web Components/Divider",component:"ic-divider"},t={render:()=>i` <div
      style="display: flex; flex-direction: column; gap: var(--ic-space-md)"
    >
      <ic-divider
        theme="inherit"
        weight="medium"
        label="theme='inherit'"
        label-placement="left"
      ></ic-divider>
      <ic-divider
        theme="inherit"
        monochrome="true"
        weight="medium"
        label="theme='inherit', monochrome='true'"
        label-placement="left"
      ></ic-divider>
      <div
        style="display:flex; flex-direction: column; align-items: center; background-color: var(--ic-color-page-background-light); width: 100%; padding: var(--ic-space-xs) 0; gap: var(--ic-space-md)"
      >
        <ic-divider
          theme="light"
          weight="medium"
          label="theme='light'"
          label-placement="left"
        ></ic-divider>
        <ic-divider
          theme="light"
          monochrome="true"
          weight="medium"
          label="theme='light', monochrome='true'"
          label-placement="left"
        ></ic-divider>
      </div>
      <div
        style="display:flex; flex-direction: column; align-items: center; background-color: var(--ic-color-page-background-dark); width: 100%; padding: var(--ic-space-xs) 0; gap: var(--ic-space-md)"
      >
        <ic-divider
          theme="dark"
          weight="medium"
          label="theme='dark'"
          label-placement="left"
        ></ic-divider>
        <ic-divider
          theme="dark"
          monochrome="true"
          weight="medium"
          label="theme='dark', monochrome='true'"
          label-placement="left"
        ></ic-divider>
      </div>
    </div>`,name:"Theme"},l={render:()=>i` <div
      style="display: flex; flex-direction: column; gap: var(--ic-space-md)"
    >
      <ic-divider weight="thin"></ic-divider>
      <ic-divider weight="thin" border-style="dashed"></ic-divider>
      <ic-divider
        weight="thin"
        label="End of section"
        label-placement="center"
      ></ic-divider>
      <ic-divider weight="medium"></ic-divider>
      <ic-divider weight="medium" border-style="dashed"></ic-divider>
      <ic-divider
        weight="medium"
        label="End of section"
        label-placement="center"
      ></ic-divider>
      <ic-divider weight="thick"></ic-divider>
      <ic-divider weight="thick" border-style="dashed"></ic-divider>
      <ic-divider
        weight="thick"
        label="End of section"
        label-placement="center"
      ></ic-divider>
      <ic-divider weight="very-thick"></ic-divider>
      <ic-divider weight="very-thick" border-style="dashed"></ic-divider>
      <ic-divider
        weight="very-thick"
        label="End of section"
        label-placement="center"
      ></ic-divider>
    </div>`,name:"Weight"},r={render:()=>i` <div
      style="display: flex; flex-direction: column; gap: var(--ic-space-md)"
    >
      <ic-divider border-style="solid"></ic-divider>
      <ic-divider border-style="dashed"></ic-divider>
    </div>`,name:"Border style"},n={render:()=>i`
    <div style="display: flex; gap: var(--ic-space-lg); height: 400px">
      <ic-divider label-placement="top" orientation="vertical" weight="thin">
        <ic-typography variant="label" slot="label">
          <p style="width: max-content;">Slotted label top</p>
        </ic-typography></ic-divider
      >
      <ic-divider
        orientation="vertical"
        weight="thin"
        border-style="dashed"
      ></ic-divider>
      <ic-divider orientation="vertical" weight="medium"></ic-divider>
      <ic-divider
        label="Label center"
        label-placement="center"
        orientation="vertical"
        border-style="dashed"
        weight="medium"
      ></ic-divider>
      <ic-divider orientation="vertical" weight="thick"></ic-divider>
      <ic-divider
        orientation="vertical"
        weight="thick"
        border-style="dashed"
      ></ic-divider>
      <ic-divider orientation="vertical" weight="very-thick"></ic-divider>
      <ic-divider
        orientation="vertical"
        weight="very-thick"
        border-style="dashed"
      ></ic-divider>
    </div>
  `,name:"Vertical"},d={render:()=>i` <div
        style="display: flex; flex-direction: column; gap: var(--ic-space-lg)"
      >
        <ic-divider 
          label="🎶 Now this is a story all about how my life got brewed up and turned around. And I’d like to take a minute, just sit right there; I’ll tell you how I became the prince of a café called Bel-Air 🎶
          🎶 In west Philadelphia, born and raised; in the coffee shop was where I spent most of my days. Chillin’ out, maxin’, relaxin’ all cool, sippin’ on some cappuccinos outside of the school 🎶"
          label-placement="left"></ic-divider
        >
        <ic-divider 
          label="🎶 Now this is a story all about how my life got brewed up and turned around. And I’d like to take a minute, just sit right there; I’ll tell you how I became the prince of a café called Bel-Air 🎶
          🎶 In west Philadelphia, born and raised; in the coffee shop was where I spent most of my days. Chillin’ out, maxin’, relaxin’ all cool, sippin’ on some cappuccinos outside of the school 🎶"
          label-placement="center"></ic-divider
        >
      </div>
      <ic-divider label-placement="right">
          <ic-typography variant="label" slot="label" style="width: max-content;max-width: 100%;">
            <p style="width: inherit;">A slotted label: 🎶 Now this is a story all about how my life got brewed up and turned around. And I’d like to take a minute, just sit right there; I’ll tell you how I became the prince of a café called Bel-Air 🎶
        🎶 In west Philadelphia, born and raised; in the coffee shop was where I spent most of my days. Chillin’ out, maxin’, relaxin’ all cool, sippin’ on some cappuccinos outside of the school 🎶</p>
          </ic-typography></ic-divider
        >
      </div>
      <div
        style="display: flex; gap: var(--ic-space-lg); height: 600px; margin-top: var(--ic-space-lg)"
      >
        <ic-divider
          label="A vertical divider: 🎶 Now this is a story all about how my life got brewed up and turned around. And I’d like to take a minute, just sit right there; I’ll tell you how I became the prince of a café called Bel-Air 🎶
        🎶 In west Philadelphia, born and raised; in the coffee shop was where I spent most of my days. Chillin’ out, maxin’, relaxin’ all cool, sippin’ on some cappuccinos outside of the school 🎶"
          label-placement="top"
          orientation="vertical"
        ></ic-divider>
      </div>`,name:"Max content"},a={render:()=>i` <div
        style="display: flex; flex-direction: column; gap: var(--ic-space-lg)"
      >
        <ic-divider label="Label left" label-placement="left"></ic-divider>
        <ic-divider label="Label center" label-placement="center"></ic-divider>
        <ic-divider label="Label right" label-placement="right"></ic-divider>
        <ic-divider label-placement="left">
          <ic-typography variant="label" slot="label">
            <p style="width: max-content;">Slotted label left</p>
          </ic-typography></ic-divider
        >
        <ic-divider label-placement="center">
          <ic-typography variant="label" slot="label">
            <p style="width: max-content;">Slotted label center</p>
          </ic-typography></ic-divider
        >
        <ic-divider label-placement="right">
          <ic-typography variant="label" slot="label">
            <p style="width: max-content;">Slotted label right</p>
          </ic-typography></ic-divider
        >
      </div>
      <div
        style="display: flex; gap: var(--ic-space-lg); height: 200px; margin-top: var(--ic-space-lg)"
      >
        <ic-divider
          label="Label top"
          label-placement="top"
          orientation="vertical"
        ></ic-divider>
        <ic-divider
          label="Label center"
          label-placement="center"
          orientation="vertical"
        ></ic-divider>
        <ic-divider
          label="Label bottom"
          label-placement="bottom"
          orientation="vertical"
        ></ic-divider>
        <ic-divider label-placement="top" orientation="vertical">
          <ic-typography variant="label" slot="label">
            <p style="width: max-content;">Slotted label top</p>
          </ic-typography></ic-divider
        >
        <ic-divider label-placement="center" orientation="vertical">
          <ic-typography variant="label" slot="label">
            <p style="width: max-content;">Slotted label center</p>
          </ic-typography></ic-divider
        >
        <ic-divider label-placement="bottom" orientation="vertical">
          <ic-typography variant="label" slot="label">
            <p style="width: max-content;">Slotted label bottom</p>
          </ic-typography></ic-divider
        >
      </div>`,name:"Label placement"},o={render:e=>{const c=e.theme==="dark"?"var(--ic-color-page-background-dark)":e.theme==="light"?"var(--ic-color-background-primary-light)":"transparent";return i`<div
      style="display: flex; width: 100%; height: 100%; padding: var(--ic-space-md); background-color: ${c}; box-sizing: border-box;"
    >
      <ic-divider
        monochrome=${e.monochrome}
        orientation=${e.orientation}
        theme=${e.theme}
        border-style=${e["border-style"]}
        weight=${e.weight}
        label=${e.label}
        label-placement=${e["label-placement"]}
        style="
            --ic-divider-horizontal-width: ${e["--ic-divider-horizontal-width"]};
            --ic-divider-vertical-height: ${e["--ic-divider-vertical-height"]};
            ${e["--ic-divider-background"]!==""?`--ic-divider-background: ${e["--ic-divider-background"]};`:""}
            ${e["--ic-divider-background-monochrome"]!==""?`--ic-divider-background-monochrome: ${e["--ic-divider-background-monochrome"]};`:""}
            ${e["--ic-divider-label"]!==""?`--ic-divider-label: ${e["--ic-divider-label"]};`:""}
            ${e["--ic-divider-label-monochrome"]!==""?`--ic-divider-label-monochrome: ${e["--ic-divider-label-monochrome"]};`:""}
            ${e["--ic-divider-label-width"]!==""?`--ic-divider-label-width: ${e["--ic-divider-label-width"]};`:""}"
      ></ic-divider>
    </div>`},args:h,argTypes:{"border-style":{options:["solid","dashed"],control:{type:"inline-radio"}},label:{mapping:{none:""}},"label-placement":{options:["none","left","center","right","top","bottom"],mapping:{none:""},control:{type:"radio"}},orientation:{options:["horizontal","vertical"],control:{type:"inline-radio"}},theme:{options:["inherit","dark","light"],control:{type:"radio"}},weight:{options:["thin","medium","thick","very-thick"],control:{type:"radio"}},"--ic-divider-background":{control:{type:"color"}},"--ic-divider-background-monochrome":{control:{type:"color"}},"--ic-divider-label":{control:{type:"color"}},"--ic-divider-label-monochrome":{control:{type:"color"}}},name:"Playground"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => html\` <div
      style="display: flex; flex-direction: column; gap: var(--ic-space-md)"
    >
      <ic-divider
        theme="inherit"
        weight="medium"
        label="theme='inherit'"
        label-placement="left"
      ></ic-divider>
      <ic-divider
        theme="inherit"
        monochrome="true"
        weight="medium"
        label="theme='inherit', monochrome='true'"
        label-placement="left"
      ></ic-divider>
      <div
        style="display:flex; flex-direction: column; align-items: center; background-color: var(--ic-color-page-background-light); width: 100%; padding: var(--ic-space-xs) 0; gap: var(--ic-space-md)"
      >
        <ic-divider
          theme="light"
          weight="medium"
          label="theme='light'"
          label-placement="left"
        ></ic-divider>
        <ic-divider
          theme="light"
          monochrome="true"
          weight="medium"
          label="theme='light', monochrome='true'"
          label-placement="left"
        ></ic-divider>
      </div>
      <div
        style="display:flex; flex-direction: column; align-items: center; background-color: var(--ic-color-page-background-dark); width: 100%; padding: var(--ic-space-xs) 0; gap: var(--ic-space-md)"
      >
        <ic-divider
          theme="dark"
          weight="medium"
          label="theme='dark'"
          label-placement="left"
        ></ic-divider>
        <ic-divider
          theme="dark"
          monochrome="true"
          weight="medium"
          label="theme='dark', monochrome='true'"
          label-placement="left"
        ></ic-divider>
      </div>
    </div>\`,
  name: "Theme"
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\` <div
      style="display: flex; flex-direction: column; gap: var(--ic-space-md)"
    >
      <ic-divider weight="thin"></ic-divider>
      <ic-divider weight="thin" border-style="dashed"></ic-divider>
      <ic-divider
        weight="thin"
        label="End of section"
        label-placement="center"
      ></ic-divider>
      <ic-divider weight="medium"></ic-divider>
      <ic-divider weight="medium" border-style="dashed"></ic-divider>
      <ic-divider
        weight="medium"
        label="End of section"
        label-placement="center"
      ></ic-divider>
      <ic-divider weight="thick"></ic-divider>
      <ic-divider weight="thick" border-style="dashed"></ic-divider>
      <ic-divider
        weight="thick"
        label="End of section"
        label-placement="center"
      ></ic-divider>
      <ic-divider weight="very-thick"></ic-divider>
      <ic-divider weight="very-thick" border-style="dashed"></ic-divider>
      <ic-divider
        weight="very-thick"
        label="End of section"
        label-placement="center"
      ></ic-divider>
    </div>\`,
  name: "Weight"
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\` <div
      style="display: flex; flex-direction: column; gap: var(--ic-space-md)"
    >
      <ic-divider border-style="solid"></ic-divider>
      <ic-divider border-style="dashed"></ic-divider>
    </div>\`,
  name: "Border style"
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; gap: var(--ic-space-lg); height: 400px">
      <ic-divider label-placement="top" orientation="vertical" weight="thin">
        <ic-typography variant="label" slot="label">
          <p style="width: max-content;">Slotted label top</p>
        </ic-typography></ic-divider
      >
      <ic-divider
        orientation="vertical"
        weight="thin"
        border-style="dashed"
      ></ic-divider>
      <ic-divider orientation="vertical" weight="medium"></ic-divider>
      <ic-divider
        label="Label center"
        label-placement="center"
        orientation="vertical"
        border-style="dashed"
        weight="medium"
      ></ic-divider>
      <ic-divider orientation="vertical" weight="thick"></ic-divider>
      <ic-divider
        orientation="vertical"
        weight="thick"
        border-style="dashed"
      ></ic-divider>
      <ic-divider orientation="vertical" weight="very-thick"></ic-divider>
      <ic-divider
        orientation="vertical"
        weight="very-thick"
        border-style="dashed"
      ></ic-divider>
    </div>
  \`,
  name: "Vertical"
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\` <div
        style="display: flex; flex-direction: column; gap: var(--ic-space-lg)"
      >
        <ic-divider 
          label="🎶 Now this is a story all about how my life got brewed up and turned around. And I’d like to take a minute, just sit right there; I’ll tell you how I became the prince of a café called Bel-Air 🎶
          🎶 In west Philadelphia, born and raised; in the coffee shop was where I spent most of my days. Chillin’ out, maxin’, relaxin’ all cool, sippin’ on some cappuccinos outside of the school 🎶"
          label-placement="left"></ic-divider
        >
        <ic-divider 
          label="🎶 Now this is a story all about how my life got brewed up and turned around. And I’d like to take a minute, just sit right there; I’ll tell you how I became the prince of a café called Bel-Air 🎶
          🎶 In west Philadelphia, born and raised; in the coffee shop was where I spent most of my days. Chillin’ out, maxin’, relaxin’ all cool, sippin’ on some cappuccinos outside of the school 🎶"
          label-placement="center"></ic-divider
        >
      </div>
      <ic-divider label-placement="right">
          <ic-typography variant="label" slot="label" style="width: max-content;max-width: 100%;">
            <p style="width: inherit;">A slotted label: 🎶 Now this is a story all about how my life got brewed up and turned around. And I’d like to take a minute, just sit right there; I’ll tell you how I became the prince of a café called Bel-Air 🎶
        🎶 In west Philadelphia, born and raised; in the coffee shop was where I spent most of my days. Chillin’ out, maxin’, relaxin’ all cool, sippin’ on some cappuccinos outside of the school 🎶</p>
          </ic-typography></ic-divider
        >
      </div>
      <div
        style="display: flex; gap: var(--ic-space-lg); height: 600px; margin-top: var(--ic-space-lg)"
      >
        <ic-divider
          label="A vertical divider: 🎶 Now this is a story all about how my life got brewed up and turned around. And I’d like to take a minute, just sit right there; I’ll tell you how I became the prince of a café called Bel-Air 🎶
        🎶 In west Philadelphia, born and raised; in the coffee shop was where I spent most of my days. Chillin’ out, maxin’, relaxin’ all cool, sippin’ on some cappuccinos outside of the school 🎶"
          label-placement="top"
          orientation="vertical"
        ></ic-divider>
      </div>\`,
  name: "Max content"
}`,...d.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\` <div
        style="display: flex; flex-direction: column; gap: var(--ic-space-lg)"
      >
        <ic-divider label="Label left" label-placement="left"></ic-divider>
        <ic-divider label="Label center" label-placement="center"></ic-divider>
        <ic-divider label="Label right" label-placement="right"></ic-divider>
        <ic-divider label-placement="left">
          <ic-typography variant="label" slot="label">
            <p style="width: max-content;">Slotted label left</p>
          </ic-typography></ic-divider
        >
        <ic-divider label-placement="center">
          <ic-typography variant="label" slot="label">
            <p style="width: max-content;">Slotted label center</p>
          </ic-typography></ic-divider
        >
        <ic-divider label-placement="right">
          <ic-typography variant="label" slot="label">
            <p style="width: max-content;">Slotted label right</p>
          </ic-typography></ic-divider
        >
      </div>
      <div
        style="display: flex; gap: var(--ic-space-lg); height: 200px; margin-top: var(--ic-space-lg)"
      >
        <ic-divider
          label="Label top"
          label-placement="top"
          orientation="vertical"
        ></ic-divider>
        <ic-divider
          label="Label center"
          label-placement="center"
          orientation="vertical"
        ></ic-divider>
        <ic-divider
          label="Label bottom"
          label-placement="bottom"
          orientation="vertical"
        ></ic-divider>
        <ic-divider label-placement="top" orientation="vertical">
          <ic-typography variant="label" slot="label">
            <p style="width: max-content;">Slotted label top</p>
          </ic-typography></ic-divider
        >
        <ic-divider label-placement="center" orientation="vertical">
          <ic-typography variant="label" slot="label">
            <p style="width: max-content;">Slotted label center</p>
          </ic-typography></ic-divider
        >
        <ic-divider label-placement="bottom" orientation="vertical">
          <ic-typography variant="label" slot="label">
            <p style="width: max-content;">Slotted label bottom</p>
          </ic-typography></ic-divider
        >
      </div>\`,
  name: "Label placement"
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const backgroundColor = args.theme === "dark" ? "var(--ic-color-page-background-dark)" : args.theme === "light" ? "var(--ic-color-background-primary-light)" : "transparent";
    return html\`<div
      style="display: flex; width: 100%; height: 100%; padding: var(--ic-space-md); background-color: \${backgroundColor}; box-sizing: border-box;"
    >
      <ic-divider
        monochrome=\${args.monochrome}
        orientation=\${args.orientation}
        theme=\${args.theme}
        border-style=\${args["border-style"]}
        weight=\${args.weight}
        label=\${args.label}
        label-placement=\${args["label-placement"]}
        style="
            --ic-divider-horizontal-width: \${args["--ic-divider-horizontal-width"]};
            --ic-divider-vertical-height: \${args["--ic-divider-vertical-height"]};
            \${args["--ic-divider-background"] !== "" ? \`--ic-divider-background: \${args["--ic-divider-background"]};\` : ""}
            \${args["--ic-divider-background-monochrome"] !== "" ? \`--ic-divider-background-monochrome: \${args["--ic-divider-background-monochrome"]};\` : ""}
            \${args["--ic-divider-label"] !== "" ? \`--ic-divider-label: \${args["--ic-divider-label"]};\` : ""}
            \${args["--ic-divider-label-monochrome"] !== "" ? \`--ic-divider-label-monochrome: \${args["--ic-divider-label-monochrome"]};\` : ""}
            \${args["--ic-divider-label-width"] !== "" ? \`--ic-divider-label-width: \${args["--ic-divider-label-width"]};\` : ""}"
      ></ic-divider>
    </div>\`;
  },
  args: defaultArgs,
  argTypes: {
    "border-style": {
      options: ["solid", "dashed"],
      control: {
        type: "inline-radio"
      }
    },
    label: {
      mapping: {
        none: ""
      }
    },
    "label-placement": {
      options: ["none", "left", "center", "right", "top", "bottom"],
      mapping: {
        none: ""
      },
      control: {
        type: "radio"
      }
    },
    orientation: {
      options: ["horizontal", "vertical"],
      control: {
        type: "inline-radio"
      }
    },
    theme: {
      options: ["inherit", "dark", "light"],
      control: {
        type: "radio"
      }
    },
    weight: {
      options: ["thin", "medium", "thick", "very-thick"],
      control: {
        type: "radio"
      }
    },
    "--ic-divider-background": {
      control: {
        type: "color"
      }
    },
    "--ic-divider-background-monochrome": {
      control: {
        type: "color"
      }
    },
    "--ic-divider-label": {
      control: {
        type: "color"
      }
    },
    "--ic-divider-label-monochrome": {
      control: {
        type: "color"
      }
    }
  },
  name: "Playground"
}`,...o.parameters?.docs?.source}}};const p=["Theme","Weight","BorderStyle","Vertical","MaxContent","LabelPlacement","Playground"],v=Object.freeze(Object.defineProperty({__proto__:null,BorderStyle:r,LabelPlacement:a,MaxContent:d,Playground:o,Theme:t,Vertical:n,Weight:l,__namedExportsOrder:p,default:s},Symbol.toStringTag,{value:"Module"}));export{v as I};
