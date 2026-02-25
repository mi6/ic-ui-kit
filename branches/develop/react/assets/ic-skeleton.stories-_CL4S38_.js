import{a0 as a,R as e,a as t}from"./iframe-D9vSpFJ1.js";const h={theme:"inherit",variant:"rectangle",height:"93px",width:"260px"},y={title:"Skeleton",component:a},n={render:()=>e.createElement(e.Fragment,null,e.createElement(t,{variant:"h4"},"Default"),e.createElement(a,null),e.createElement(t,{variant:"h4"},"Inherited from child"),e.createElement(a,null,e.createElement("div",{style:{height:"200px",width:"450px"}},"Test text")),e.createElement(t,{variant:"h4"},"Height and width set with styles"),e.createElement(a,{style:{height:"200px",width:"200px"}}),e.createElement(t,{variant:"h4"},"Height set with styles"),e.createElement(a,{style:{height:"75px"}}),e.createElement(t,{variant:"h4"},"Width set with styles"),e.createElement(a,{style:{width:"450px"}})),name:"Rectangle"},r={render:()=>e.createElement(a,{variant:"circle"}),name:"Circle"},c={render:()=>e.createElement(e.Fragment,null,e.createElement(t,{variant:"h1"},"h1"),e.createElement(t,{variant:"h1"},e.createElement(a,{variant:"text"})),e.createElement(t,{variant:"h2"},"h2"),e.createElement(t,{variant:"h2"},e.createElement(a,{variant:"text"})),e.createElement(t,{variant:"h3"},"h3"),e.createElement(t,{variant:"h3"},e.createElement(a,{variant:"text"})),e.createElement(t,{variant:"h4"},"h4"),e.createElement(t,{variant:"h4"},e.createElement(a,{variant:"text"})),e.createElement(t,{variant:"subtitle-large"},"subtitle-large"),e.createElement(t,{variant:"subtitle-large"},e.createElement(a,{variant:"text"})),e.createElement(t,{variant:"subtitle-small"},"subtitle-small"),e.createElement(t,{variant:"subtitle-small"},e.createElement(a,{variant:"text"})),e.createElement(t,{variant:"body"},"body"),e.createElement(t,{variant:"body"},e.createElement(a,{variant:"text"})),e.createElement(t,{variant:"caption"},"caption"),e.createElement(t,{variant:"caption"},e.createElement(a,{variant:"text"})),e.createElement(t,{variant:"label"},"label"),e.createElement(t,{variant:"subtitle-small"},e.createElement(a,{variant:"text"})),e.createElement(t,{variant:"caption-uppercase"},"caption uppercase"),e.createElement(t,{variant:"caption-uppercase"},e.createElement(a,{variant:"text"})),e.createElement(t,{variant:"label-uppercase"},"label uppercase"),e.createElement(t,{variant:"subtitle-small"},e.createElement(a,{variant:"text"}))),name:"Text"},i={render:()=>e.createElement(e.Fragment,null,e.createElement(a,{variant:"circle",height:"20"}),e.createElement("div",{style:{height:"8px"}}),e.createElement(t,{variant:"caption"},e.createElement(a,{variant:"text"})),e.createElement("div",{style:{height:"8px"}}),e.createElement(a,null)),name:"Example"},l={render:()=>e.createElement("div",{style:{backgroundColor:"black"}},e.createElement(a,{variant:"circle",height:"20",theme:"dark"}),e.createElement("div",{style:{height:"8px"}}),e.createElement(t,{variant:"caption"},e.createElement(a,{variant:"text",theme:"dark"})),e.createElement("div",{style:{height:"8px"}}),e.createElement(a,{theme:"dark"})),name:"Dark mode"},p={render:o=>e.createElement("div",null,e.createElement(a,{theme:o.theme,variant:o.variant,height:o.height,width:o.width})),args:h,argTypes:{theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}},variant:{options:["rectangle","circle","text"],control:{type:"radio"}}},name:"Playground"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcTypography variant="h4">Default</IcTypography>
    <IcSkeleton />
    <IcTypography variant="h4">Inherited from child</IcTypography>
    <IcSkeleton>
      <div style={{
        height: "200px",
        width: "450px"
      }}>Test text</div>
    </IcSkeleton>
    <IcTypography variant="h4">Height and width set with styles</IcTypography>
    <IcSkeleton style={{
      height: "200px",
      width: "200px"
    }} />
    <IcTypography variant="h4">Height set with styles</IcTypography>
    <IcSkeleton style={{
      height: "75px"
    }} />
    <IcTypography variant="h4">Width set with styles</IcTypography>
    <IcSkeleton style={{
      width: "450px"
    }} />
    </>,
  name: "Rectangle"
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <IcSkeleton variant="circle" />,
  name: "Circle"
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcTypography variant="h1">h1</IcTypography>
    <IcTypography variant="h1">
      <IcSkeleton variant="text" />
    </IcTypography>
    <IcTypography variant="h2">h2</IcTypography>
    <IcTypography variant="h2">
      <IcSkeleton variant="text" />
    </IcTypography>
    <IcTypography variant="h3">h3</IcTypography>
    <IcTypography variant="h3">
      <IcSkeleton variant="text" />
    </IcTypography>
    <IcTypography variant="h4">h4</IcTypography>
    <IcTypography variant="h4">
      <IcSkeleton variant="text" />
    </IcTypography>
    <IcTypography variant="subtitle-large">subtitle-large</IcTypography>
    <IcTypography variant="subtitle-large">
      <IcSkeleton variant="text" />
    </IcTypography>
    <IcTypography variant="subtitle-small">subtitle-small</IcTypography>
    <IcTypography variant="subtitle-small">
      <IcSkeleton variant="text" />
    </IcTypography>
    <IcTypography variant="body">body</IcTypography>
    <IcTypography variant="body">
      <IcSkeleton variant="text" />
    </IcTypography>
    <IcTypography variant="caption">caption</IcTypography>
    <IcTypography variant="caption">
      <IcSkeleton variant="text" />
    </IcTypography>
    <IcTypography variant="label">label</IcTypography>
    <IcTypography variant="subtitle-small">
      <IcSkeleton variant="text" />
    </IcTypography>
    <IcTypography variant="caption-uppercase">caption uppercase</IcTypography>
    <IcTypography variant="caption-uppercase">
      <IcSkeleton variant="text" />
    </IcTypography>
    <IcTypography variant="label-uppercase">label uppercase</IcTypography>
    <IcTypography variant="subtitle-small">
      <IcSkeleton variant="text" />
    </IcTypography>
    </>,
  name: "Text"
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcSkeleton variant="circle" height="20" />
    <div style={{
      height: "8px"
    }}></div>
    <IcTypography variant="caption">
      <IcSkeleton variant="text" />
    </IcTypography>
    <div style={{
      height: "8px"
    }}></div>
    <IcSkeleton />
    </>,
  name: "Example"
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    backgroundColor: "black"
  }}>
      <IcSkeleton variant="circle" height="20" theme="dark" />
      <div style={{
      height: "8px"
    }} />
      <IcTypography variant="caption">
        <IcSkeleton variant="text" theme="dark" />
      </IcTypography>
      <div style={{
      height: "8px"
    }} />
      <IcSkeleton theme="dark" />
    </div>,
  name: "Dark mode"
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div>
      <IcSkeleton theme={args.theme} variant={args.variant} height={args.height} width={args.width}></IcSkeleton>
    </div>,
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
}`,...p.parameters?.docs?.source}}};const s=["Rectangle","Circle","Text","Example","DarkMode","Playground"],g=Object.freeze(Object.defineProperty({__proto__:null,Circle:r,DarkMode:l,Example:i,Playground:p,Rectangle:n,Text:c,__namedExportsOrder:s,default:y},Symbol.toStringTag,{value:"Module"}));export{g as I};
