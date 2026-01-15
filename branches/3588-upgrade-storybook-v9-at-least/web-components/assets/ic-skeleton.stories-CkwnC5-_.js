import{x as t}from"./lit-html-CWQq0DyO.js";const c={theme:"inherit",variant:"rectangle"},y={title:"Web Components/Skeleton",component:"ic-skeleton"},e={render:()=>t` <ic-typography variant="h4">Default</ic-typography>
      <ic-skeleton></ic-skeleton>
      <ic-typography variant="h4">Inherited from child</ic-typography>
      <ic-skeleton
        ><div style="height:200px;width:450px;">Test text</div></ic-skeleton
      >
      <ic-typography variant="h4"
        >Height and width set with styles</ic-typography
      >
      <ic-skeleton style="height:200px;width:200px;"></ic-skeleton>
      <ic-typography variant="h4">Height set with styles</ic-typography>
      <ic-skeleton style="height:75px;"></ic-skeleton>
      <ic-typography variant="h4">Width set with styles</ic-typography>
      <ic-skeleton style="width:450px;"></ic-skeleton>`,name:"Rectangle"},a={render:()=>t`<ic-skeleton variant="circle" />`,name:"Circle"},i={render:()=>t` <ic-typography variant="h1">h1</ic-typography>
      <ic-typography variant="h1"><ic-skeleton variant="text" /></ic-typography>
      <ic-typography variant="h2">h2</ic-typography>
      <ic-typography variant="h2"><ic-skeleton variant="text" /></ic-typography>
      <ic-typography variant="h3">h3</ic-typography>
      <ic-typography variant="h3"><ic-skeleton variant="text" /></ic-typography>
      <ic-typography variant="h4">h4</ic-typography>
      <ic-typography variant="h4"><ic-skeleton variant="text" /></ic-typography>
      <ic-typography variant="subtitle-large">subtitle-large</ic-typography>
      <ic-typography variant="subtitle-large"
        ><ic-skeleton variant="text"
      /></ic-typography>
      <ic-typography variant="subtitle-small">subtitle-small</ic-typography>
      <ic-typography variant="subtitle-small"
        ><ic-skeleton variant="text"
      /></ic-typography>
      <ic-typography variant="body">body</ic-typography>
      <ic-typography variant="body"
        ><ic-skeleton variant="text"
      /></ic-typography>
      <ic-typography variant="caption">caption</ic-typography>
      <ic-typography variant="caption"
        ><ic-skeleton variant="text"
      /></ic-typography>
      <ic-typography variant="label">label</ic-typography>
      <ic-typography variant="subtitle-small"
        ><ic-skeleton variant="text"
      /></ic-typography>
      <ic-typography variant="caption-uppercase"
        >caption uppercase</ic-typography
      >
      <ic-typography variant="caption-uppercase"
        ><ic-skeleton variant="text"
      /></ic-typography>
      <ic-typography variant="label-uppercase">label uppercase</ic-typography>
      <ic-typography variant="subtitle-small"
        ><ic-skeleton variant="text"
      /></ic-typography>`,name:"Text"},r={render:()=>t` <ic-skeleton variant="circle" height="20"></ic-skeleton>
      <div style="height:8px"></div>
      <ic-typography variant="caption"
        ><ic-skeleton variant="text"
      /></ic-typography>
      <div style="height:8px"></div>
      <ic-skeleton></ic-skeleton>`,name:"Example"},n={render:()=>t` <div style="background-color:black;">
      <ic-skeleton variant="circle" height="20" theme="dark"></ic-skeleton>
      <div style="height:8px"></div>
      <ic-typography variant="caption"
        ><ic-skeleton variant="text" theme="dark"
      /></ic-typography>
      <div style="height:8px"></div>
      <ic-skeleton theme="dark"></ic-skeleton>
    </div>`,name:"Dark mode"},p={render:o=>t` <div>
      <ic-skeleton
        theme=${o.theme}
        variant=${o.variant}
        style="height: ${o.variant=="circle"?"20px":""};width:${o.variant=="circle"?"20px":""};"
      ></ic-skeleton>
    </div>`,args:c,argTypes:{theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}},variant:{options:["rectangle","circle","text"],control:{type:"radio"}}},name:"Playground"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-typography variant="h4">Default</ic-typography>
      <ic-skeleton></ic-skeleton>
      <ic-typography variant="h4">Inherited from child</ic-typography>
      <ic-skeleton
        ><div style="height:200px;width:450px;">Test text</div></ic-skeleton
      >
      <ic-typography variant="h4"
        >Height and width set with styles</ic-typography
      >
      <ic-skeleton style="height:200px;width:200px;"></ic-skeleton>
      <ic-typography variant="h4">Height set with styles</ic-typography>
      <ic-skeleton style="height:75px;"></ic-skeleton>
      <ic-typography variant="h4">Width set with styles</ic-typography>
      <ic-skeleton style="width:450px;"></ic-skeleton>\`,
  name: "Rectangle"
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-skeleton variant="circle" />\`,
  name: "Circle"
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-typography variant="h1">h1</ic-typography>
      <ic-typography variant="h1"><ic-skeleton variant="text" /></ic-typography>
      <ic-typography variant="h2">h2</ic-typography>
      <ic-typography variant="h2"><ic-skeleton variant="text" /></ic-typography>
      <ic-typography variant="h3">h3</ic-typography>
      <ic-typography variant="h3"><ic-skeleton variant="text" /></ic-typography>
      <ic-typography variant="h4">h4</ic-typography>
      <ic-typography variant="h4"><ic-skeleton variant="text" /></ic-typography>
      <ic-typography variant="subtitle-large">subtitle-large</ic-typography>
      <ic-typography variant="subtitle-large"
        ><ic-skeleton variant="text"
      /></ic-typography>
      <ic-typography variant="subtitle-small">subtitle-small</ic-typography>
      <ic-typography variant="subtitle-small"
        ><ic-skeleton variant="text"
      /></ic-typography>
      <ic-typography variant="body">body</ic-typography>
      <ic-typography variant="body"
        ><ic-skeleton variant="text"
      /></ic-typography>
      <ic-typography variant="caption">caption</ic-typography>
      <ic-typography variant="caption"
        ><ic-skeleton variant="text"
      /></ic-typography>
      <ic-typography variant="label">label</ic-typography>
      <ic-typography variant="subtitle-small"
        ><ic-skeleton variant="text"
      /></ic-typography>
      <ic-typography variant="caption-uppercase"
        >caption uppercase</ic-typography
      >
      <ic-typography variant="caption-uppercase"
        ><ic-skeleton variant="text"
      /></ic-typography>
      <ic-typography variant="label-uppercase">label uppercase</ic-typography>
      <ic-typography variant="subtitle-small"
        ><ic-skeleton variant="text"
      /></ic-typography>\`,
  name: "Text"
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-skeleton variant="circle" height="20"></ic-skeleton>
      <div style="height:8px"></div>
      <ic-typography variant="caption"
        ><ic-skeleton variant="text"
      /></ic-typography>
      <div style="height:8px"></div>
      <ic-skeleton></ic-skeleton>\`,
  name: "Example"
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => html\` <div style="background-color:black;">
      <ic-skeleton variant="circle" height="20" theme="dark"></ic-skeleton>
      <div style="height:8px"></div>
      <ic-typography variant="caption"
        ><ic-skeleton variant="text" theme="dark"
      /></ic-typography>
      <div style="height:8px"></div>
      <ic-skeleton theme="dark"></ic-skeleton>
    </div>\`,
  name: "Dark mode"
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => html\` <div>
      <ic-skeleton
        theme=\${args.theme}
        variant=\${args.variant}
        style="height: \${args.variant == "circle" ? "20px" : ""};width:\${args.variant == "circle" ? "20px" : ""};"
      ></ic-skeleton>
    </div>\`,
  args: defaultArgs,
  argTypes: {
    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: "inline-radio"
      }
    },
    variant: {
      options: ["rectangle", "circle", "text"],
      control: {
        type: "radio"
      }
    }
  },
  name: "Playground"
}`,...p.parameters?.docs?.source}}};const h=["Rectangle","Circle","Text","Example","DarkMode","Playground"],l=Object.freeze(Object.defineProperty({__proto__:null,Circle:a,DarkMode:n,Example:r,Playground:p,Rectangle:e,Text:i,__namedExportsOrder:h,default:y},Symbol.toStringTag,{value:"Module"}));export{l as I};
