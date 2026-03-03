import{U as a,R as e}from"./iframe-TsSXbcUi.js";const E={description:"Loading",fullWidth:!1,labelDuration:8e3,size:"medium",type:"circular",label:[],theme:"inherit",monochrome:!1},x={size:{options:["small","medium","large","icon"],control:{type:"radio"}},type:{options:["circular","linear"],control:{type:"radio"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}},label:{control:{type:"array"}}},z={title:"Loading",component:a},n={render:()=>e.createElement(a,{label:"Loading..."}),name:"Circular (indeterminate)"},t={render:()=>e.createElement(a,{progress:"30",min:"0",max:"100",label:"Loading..."}),name:"Circular (determinate)"},i={render:()=>e.createElement(a,{label:"This is a label for a loading indicator that is indeterminate and should wrap onto more than one line when it gets too long"}),name:"Circular long label"},l={render:()=>e.createElement("div",{style:{display:"grid",gap:"50px"}},e.createElement(a,{label:"Small",size:"small"}),e.createElement(a,{label:"Default"}),e.createElement(a,{label:"Large",size:"large"})),name:"Circular variants (indeterminate)"},o={render:()=>e.createElement("div",{style:{display:"grid",gap:"50px"}},e.createElement(a,{progress:"30",min:"0",max:"100",label:"Small",size:"small"}),e.createElement(a,{progress:"30",min:"0",max:"100",label:"Default"}),e.createElement(a,{progress:"30",min:"0",max:"100",label:"Large",size:"large"})),name:"Circular variants (determinate)"},d={render:()=>e.createElement(a,{size:"icon"}),name:"Icon (circular)"},s={render:()=>e.createElement(a,{label:"Loading...",type:"linear"}),name:"Linear (indeterminate)"},c={render:()=>e.createElement(a,{progress:"30",min:"0",max:"100",label:"Loading...",type:"linear"}),name:"Linear (determinate)"},m={render:()=>e.createElement(a,{type:"linear",label:"This is a label for a loading indicator that is indeterminate and should wrap onto more than one line when it gets too long"}),name:"Linear long label"},g={render:()=>e.createElement("div",{style:{display:"grid",gap:"50px"}},e.createElement(a,{label:"Small",size:"small",type:"linear"}),e.createElement(a,{label:"Default",type:"linear"}),e.createElement(a,{label:"Large",size:"large",type:"linear"}),e.createElement(a,{label:"Full-width",size:"medium",type:"linear",fullWidth:!0})),name:"Linear variants (indeterminate)"},p={render:()=>e.createElement("div",{style:{display:"grid",gap:"50px"}},e.createElement(a,{progress:"30",min:"0",max:"100",label:"Small",size:"small",type:"linear"}),e.createElement(a,{progress:"30",min:"0",max:"100",label:"Default",type:"linear"}),e.createElement(a,{progress:"30",min:"0",max:"100",label:"Large",size:"large",type:"linear"}),e.createElement(a,{progress:"30",min:"0",max:"100",label:"Full-width",size:"medium",type:"linear",fullWidth:!0})),name:"Linear variants (determinate)"},u={render:()=>e.createElement("div",{style:{display:"grid",gap:"50px"}},e.createElement(a,{label:"Small",size:"small",theme:"dark"}),e.createElement(a,{label:"Default",theme:"dark"}),e.createElement(a,{label:"Large",size:"large",theme:"dark"})),name:"Circular dark",parameters:{backgrounds:{default:"dark"}}},b={render:()=>e.createElement(a,{size:"icon",theme:"dark"}),name:"Icon dark (circular)",parameters:{backgrounds:{default:"dark"}}},h={render:()=>e.createElement("div",{style:{display:"grid",gap:"50px"}},e.createElement(a,{label:"Default",type:"linear",theme:"dark"}),e.createElement(a,{label:"Large",size:"large",type:"linear",theme:"dark"}),e.createElement(a,{label:"Full-width",type:"linear",fullWidth:!0,theme:"dark"})),name:"Linear dark",parameters:{backgrounds:{default:"dark"}}},y={render:()=>e.createElement("div",{style:{display:"grid",gap:"50px"}},e.createElement(a,{label:"Light",monochrome:!0}),e.createElement("div",{style:{backgroundColor:"black"}},e.createElement(a,{label:"Dark",theme:"dark",monochrome:!0})),e.createElement(a,{size:"icon",monochrome:!0}),e.createElement("div",{style:{backgroundColor:"black",display:"flex",justifyContent:"center"}},e.createElement(a,{size:"icon",theme:"dark",monochrome:!0})),e.createElement(a,{label:"Light",type:"linear",monochrome:!0}),e.createElement("div",{style:{backgroundColor:"black",padding:"var(--ic-space-xs)"}},e.createElement(a,{label:"Dark",type:"linear",theme:"dark",monochrome:!0}))),name:"Monochrome"},L={render:()=>e.createElement("div",{style:{display:"grid",gap:"50px"}},e.createElement(a,{description:"Loading"}),e.createElement(a,{description:"Loading",type:"linear"})),name:"No label"},I={render:()=>e.createElement(a,{label:["Loading...","Still loading..."],labelDuration:"4000"}),name:"Changing label"},k={render:()=>e.createElement(a,{size:"small","inner-label":"3",progress:"30",min:"0",max:"100"}),name:"Progress indicator for compact step"},v={render:r=>e.createElement("div",{style:{backgroundColor:r.theme==="dark"?"var(--ic-color-page-background-dark)":"var(--ic-color-page-background-light)",padding:"16px"}},e.createElement(a,{monochrome:r.monochrome,theme:r.theme,description:r.description,fullWidth:r.fullWidth,labelDuration:r.labelDuration,size:r.size,type:r.type,label:r.label})),name:"Playground - indeterminate",args:E,argTypes:x},f={render:r=>e.createElement("div",{style:{backgroundColor:r.theme==="dark"?"var(--ic-color-page-background-dark)":"var(--ic-color-page-background-light)",padding:"16px"}},e.createElement(a,{monochrome:r.monochrome,theme:r.theme,description:r.description,fullWidth:r.fullWidth,labelDuration:r.labelDuration,size:r.size,type:r.type,label:r.label,progress:r.progress,min:r.min,max:r.max})),name:"Playground - determinate",args:{...E,max:100,min:0,progress:30},argTypes:x};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <IcLoadingIndicator label="Loading..." />,
  name: "Circular (indeterminate)"
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <IcLoadingIndicator progress="30" min="0" max="100" label="Loading..." />,
  name: "Circular (determinate)"
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <IcLoadingIndicator label="This is a label for a loading indicator that is indeterminate and should wrap onto more than one line when it gets too long" />,
  name: "Circular long label"
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: "50px"
  }}>
      <IcLoadingIndicator label="Small" size="small" />
      <IcLoadingIndicator label="Default" />
      <IcLoadingIndicator label="Large" size="large" />
    </div>,
  name: "Circular variants (indeterminate)"
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: "50px"
  }}>
      <IcLoadingIndicator progress="30" min="0" max="100" label="Small" size="small" />
      <IcLoadingIndicator progress="30" min="0" max="100" label="Default" />
      <IcLoadingIndicator progress="30" min="0" max="100" label="Large" size="large" />
    </div>,
  name: "Circular variants (determinate)"
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <IcLoadingIndicator size="icon" />,
  name: "Icon (circular)"
}`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <IcLoadingIndicator label="Loading..." type="linear" />,
  name: "Linear (indeterminate)"
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <IcLoadingIndicator progress="30" min="0" max="100" label="Loading..." type="linear" />,
  name: "Linear (determinate)"
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <IcLoadingIndicator type="linear" label="This is a label for a loading indicator that is indeterminate and should wrap onto more than one line when it gets too long" />,
  name: "Linear long label"
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <IcLoadingIndicator size="icon" theme="dark" />,
  name: "Icon dark (circular)",
  parameters: {
    backgrounds: {
      default: "dark"
    }
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: "50px"
  }}>
      <IcLoadingIndicator description="Loading" />
      <IcLoadingIndicator description="Loading" type="linear" />
    </div>,
  name: "No label"
}`,...L.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <IcLoadingIndicator label={["Loading...", "Still loading..."]} labelDuration="4000" />,
  name: "Changing label"
}`,...I.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <IcLoadingIndicator size="small" inner-label="3" progress="30" min="0" max="100" />,
  name: "Progress indicator for compact step"
}`,...k.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    backgroundColor: args.theme === "dark" ? "var(--ic-color-page-background-dark)" : "var(--ic-color-page-background-light)",
    padding: "16px"
  }}>
      <IcLoadingIndicator monochrome={args.monochrome} theme={args.theme} description={args.description} fullWidth={args.fullWidth} labelDuration={args.labelDuration} size={args.size} type={args.type} label={args.label} />
    </div>,
  name: "Playground - indeterminate",
  args: defaultArgs,
  argTypes: defaultArgTypes
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const C=["CircularIndeterminate","CircularDeterminate","CircularLongLabel","CircularVariantsIndeterminate","CircularVariantsDeterminate","IconCircular","LinearIndeterminate","LinearDeterminate","LinearLongLabel","LinearVariantsIndeterminate","LinearVariantsDeterminate","CircularDark","IconDarkCircular","LinearDark","Monochrome","NoLabel","ChangingLabel","ProgressIndicatorForCompactStep","PlaygroundIndeterminate","PlaygroundDeterminate"],S=Object.freeze(Object.defineProperty({__proto__:null,ChangingLabel:I,CircularDark:u,CircularDeterminate:t,CircularIndeterminate:n,CircularLongLabel:i,CircularVariantsDeterminate:o,CircularVariantsIndeterminate:l,IconCircular:d,IconDarkCircular:b,LinearDark:h,LinearDeterminate:c,LinearIndeterminate:s,LinearLongLabel:m,LinearVariantsDeterminate:p,LinearVariantsIndeterminate:g,Monochrome:y,NoLabel:L,PlaygroundDeterminate:f,PlaygroundIndeterminate:v,ProgressIndicatorForCompactStep:k,__namedExportsOrder:C,default:z},Symbol.toStringTag,{value:"Module"}));export{S as I};
