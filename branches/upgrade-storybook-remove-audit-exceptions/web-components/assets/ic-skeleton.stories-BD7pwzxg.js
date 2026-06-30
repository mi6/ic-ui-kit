import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./lit-html-CMAkC4Hj.js";var i=e({Circle:()=>c,DarkMode:()=>d,Example:()=>u,Playground:()=>f,Rectangle:()=>s,Text:()=>l,__namedExportsOrder:()=>p,default:()=>o}),a,o,s,c,l,u,d,f,p,m=t((()=>{n(),a={theme:`inherit`,variant:`rectangle`,height:`93px`,width:`260px`},o={title:`Web Components/Skeleton`,component:`ic-skeleton`},s={render:()=>r` <ic-typography variant="h4">Default</ic-typography>
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
      <ic-skeleton style="width:450px;"></ic-skeleton>`,name:`Rectangle`},c={render:()=>r`<ic-skeleton variant="circle" />`,name:`Circle`},l={render:()=>r` <ic-typography variant="h1">h1</ic-typography>
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
      /></ic-typography>`,name:`Text`},u={render:()=>r` <ic-skeleton variant="circle" height="20"></ic-skeleton>
      <div style="height:8px"></div>
      <ic-typography variant="caption"
        ><ic-skeleton variant="text"
      /></ic-typography>
      <div style="height:8px"></div>
      <ic-skeleton></ic-skeleton>`,name:`Example`},d={render:()=>r` <div style="background-color:black;">
      <ic-skeleton variant="circle" height="20" theme="dark"></ic-skeleton>
      <div style="height:8px"></div>
      <ic-typography variant="caption"
        ><ic-skeleton variant="text" theme="dark"
      /></ic-typography>
      <div style="height:8px"></div>
      <ic-skeleton theme="dark"></ic-skeleton>
    </div>`,name:`Dark mode`},f={render:e=>r` <div>
      <ic-skeleton
        theme=${e.theme}
        variant=${e.variant}
        height=${e.height}
        width=${e.width}
      ></ic-skeleton>
    </div>`,args:a,argTypes:{theme:{options:[`inherit`,`light`,`dark`],control:{type:`inline-radio`}},variant:{options:[`rectangle`,`circle`,`text`],control:{type:`radio`}}},name:`Playground`},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-skeleton variant="circle" />\`,
  name: "Circle"
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-skeleton variant="circle" height="20"></ic-skeleton>
      <div style="height:8px"></div>
      <ic-typography variant="caption"
        ><ic-skeleton variant="text"
      /></ic-typography>
      <div style="height:8px"></div>
      <ic-skeleton></ic-skeleton>\`,
  name: "Example"
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => html\` <div>
      <ic-skeleton
        theme=\${args.theme}
        variant=\${args.variant}
        height=\${args.height}
        width=\${args.width}
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
}`,...f.parameters?.docs?.source}}},p=[`Rectangle`,`Circle`,`Text`,`Example`,`DarkMode`,`Playground`]}));m();export{c as Circle,d as DarkMode,u as Example,f as Playground,s as Rectangle,l as Text,p as __namedExportsOrder,o as default,m as n,i as t};