import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{G as n,in as r,lt as i,t as a,ut as o}from"./iframe-rUldN8B1.js";var s=e({Circle:()=>f,DarkMode:()=>h,Example:()=>m,Playground:()=>g,Rectangle:()=>d,Text:()=>p,__namedExportsOrder:()=>_,default:()=>u}),c,l,u,d,f,p,m,h,g,_,v=t((()=>{r(),o(),c=a(),l={theme:`inherit`,variant:`rectangle`,height:`93px`,width:`260px`},u={title:`Skeleton`,component:n},d={render:()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{variant:`h4`,children:`Default`}),(0,c.jsx)(n,{}),(0,c.jsx)(i,{variant:`h4`,children:`Inherited from child`}),(0,c.jsx)(n,{children:(0,c.jsx)(`div`,{style:{height:`200px`,width:`450px`},children:`Test text`})}),(0,c.jsx)(i,{variant:`h4`,children:`Height and width set with styles`}),(0,c.jsx)(n,{style:{height:`200px`,width:`200px`}}),(0,c.jsx)(i,{variant:`h4`,children:`Height set with styles`}),(0,c.jsx)(n,{style:{height:`75px`}}),(0,c.jsx)(i,{variant:`h4`,children:`Width set with styles`}),(0,c.jsx)(n,{style:{width:`450px`}})]}),name:`Rectangle`},f={render:()=>(0,c.jsx)(n,{variant:`circle`}),name:`Circle`},p={render:()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{variant:`h1`,children:`h1`}),(0,c.jsx)(i,{variant:`h1`,children:(0,c.jsx)(n,{variant:`text`})}),(0,c.jsx)(i,{variant:`h2`,children:`h2`}),(0,c.jsx)(i,{variant:`h2`,children:(0,c.jsx)(n,{variant:`text`})}),(0,c.jsx)(i,{variant:`h3`,children:`h3`}),(0,c.jsx)(i,{variant:`h3`,children:(0,c.jsx)(n,{variant:`text`})}),(0,c.jsx)(i,{variant:`h4`,children:`h4`}),(0,c.jsx)(i,{variant:`h4`,children:(0,c.jsx)(n,{variant:`text`})}),(0,c.jsx)(i,{variant:`subtitle-large`,children:`subtitle-large`}),(0,c.jsx)(i,{variant:`subtitle-large`,children:(0,c.jsx)(n,{variant:`text`})}),(0,c.jsx)(i,{variant:`subtitle-small`,children:`subtitle-small`}),(0,c.jsx)(i,{variant:`subtitle-small`,children:(0,c.jsx)(n,{variant:`text`})}),(0,c.jsx)(i,{variant:`body`,children:`body`}),(0,c.jsx)(i,{variant:`body`,children:(0,c.jsx)(n,{variant:`text`})}),(0,c.jsx)(i,{variant:`caption`,children:`caption`}),(0,c.jsx)(i,{variant:`caption`,children:(0,c.jsx)(n,{variant:`text`})}),(0,c.jsx)(i,{variant:`label`,children:`label`}),(0,c.jsx)(i,{variant:`subtitle-small`,children:(0,c.jsx)(n,{variant:`text`})}),(0,c.jsx)(i,{variant:`caption-uppercase`,children:`caption uppercase`}),(0,c.jsx)(i,{variant:`caption-uppercase`,children:(0,c.jsx)(n,{variant:`text`})}),(0,c.jsx)(i,{variant:`label-uppercase`,children:`label uppercase`}),(0,c.jsx)(i,{variant:`subtitle-small`,children:(0,c.jsx)(n,{variant:`text`})})]}),name:`Text`},m={render:()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{variant:`circle`,height:`20`}),(0,c.jsx)(`div`,{style:{height:`8px`}}),(0,c.jsx)(i,{variant:`caption`,children:(0,c.jsx)(n,{variant:`text`})}),(0,c.jsx)(`div`,{style:{height:`8px`}}),(0,c.jsx)(n,{})]}),name:`Example`},h={render:()=>(0,c.jsxs)(`div`,{style:{backgroundColor:`black`},children:[(0,c.jsx)(n,{variant:`circle`,height:`20`,theme:`dark`}),(0,c.jsx)(`div`,{style:{height:`8px`}}),(0,c.jsx)(i,{variant:`caption`,children:(0,c.jsx)(n,{variant:`text`,theme:`dark`})}),(0,c.jsx)(`div`,{style:{height:`8px`}}),(0,c.jsx)(n,{theme:`dark`})]}),name:`Dark mode`},g={render:e=>(0,c.jsx)(`div`,{children:(0,c.jsx)(n,{theme:e.theme,variant:e.variant,height:e.height,width:e.width})}),args:l,argTypes:{theme:{options:[`inherit`,`light`,`dark`],control:{type:`inline-radio`}},variant:{options:[`rectangle`,`circle`,`text`],control:{type:`radio`}}},name:`Playground`},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <IcSkeleton variant="circle" />,
  name: "Circle"
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`Rectangle`,`Circle`,`Text`,`Example`,`DarkMode`,`Playground`]}));v();export{f as Circle,h as DarkMode,m as Example,g as Playground,d as Rectangle,p as Text,_ as __namedExportsOrder,u as default,v as n,s as t};