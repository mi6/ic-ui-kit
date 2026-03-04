import{W as c,R as e,X as t,f as I}from"./iframe-ByaUd-TL.js";const E={next:"Der nächste",step:"Schritt",steps:"Schritte",of:"von",lastStep:"Letzter Schritt",completed:"abgeschlossen",notRequired:"Nicht erforderlich",required:"erforderlich",optional:"wahlweise"},C={aligned:"full-width",connectorWidth:100,variant:"default",hideStepInfo:!1,heading:"Editable step",type:"current",status:"optional",subheading:"Optional subtitle",theme:"inherit",icI18n:E},f=()=>e.createElement("div",null,e.createElement(I,{class:"back-btn-compact-stepper",style:{marginRight:"var(--ic-space-lg)"},onClick:()=>{const r=document.querySelector(".back-btn-compact-stepper"),p=document.querySelector(".next-btn-compact-stepper"),n=document.querySelectorAll("#standard-compact-stepper > ic-step"),o=["active","completed","disabled","completed"];for(let a=n.length-1;a>0;a--)n[a].type==="current"&&(n[a].type=o[a],n[a-1].type="current",a--);n[n.length-2].type==="current"&&p.setAttribute("disabled","false"),n[0].type==="current"&&r.setAttribute("disabled","true")}},"Back"),e.createElement(I,{class:"next-btn-compact-stepper",onClick:()=>{const r=document.querySelector(".back-btn-compact-stepper"),p=document.querySelector(".next-btn-compact-stepper"),n=document.querySelectorAll("#standard-compact-stepper > ic-step"),o=["active","completed","disabled","completed"];for(let a=0;a<n.length-1;a++)n[a].type==="current"&&(n[a].type=o[a],n[a+1].type="current",a++);n[1].type==="current"&&r.setAttribute("disabled","false"),n[n.length-1].type==="current"&&p.setAttribute("disabled","true")}},"Next")),v={title:"Stepper",component:c},s={render:()=>e.createElement(c,null,e.createElement(t,{heading:"Create",type:"completed"}),e.createElement(t,{heading:"Read",type:"current"}),e.createElement(t,{heading:"Update",type:"active"}),e.createElement(t,{heading:"Delete",type:"disabled"})),name:"Full-width stepper"},i={render:()=>e.createElement(c,{aligned:"left"},e.createElement(t,{heading:"Create",type:"completed"}),e.createElement(t,{heading:"Read",type:"current"}),e.createElement(t,{heading:"Update",type:"active"}),e.createElement(t,{heading:"Delete",type:"disabled"})),name:"Left-aligned stepper"},d={render:()=>e.createElement(c,{hideStepInfo:!0},e.createElement(t,{heading:"Create",type:"completed"}),e.createElement(t,{heading:"Read",type:"current"}),e.createElement(t,{heading:"Update",type:"active"}),e.createElement(t,{heading:"Delete",type:"disabled"})),name:"With hidden step information"},l={render:()=>e.createElement(c,null,e.createElement(t,{type:"completed"}),e.createElement(t,{type:"completed"}),e.createElement(t,{type:"current"}),e.createElement(t,null)),name:"Without headings"},m={render:()=>e.createElement(c,null,e.createElement(t,{heading:"First"}),e.createElement(t,{heading:"Second With a Very Long Title",subheading:"Optional subtitle that is long and should wrap",type:"current"}),e.createElement(t,{heading:"Third",type:"disabled"}),e.createElement(t,{heading:"Fourth title that is long and should wrap",subheading:"Optional Subtitle",type:"completed"})),name:"Custom stepper"},u={render:()=>e.createElement(c,{aligned:"left",connectorWidth:"200"},e.createElement(t,{heading:"First"}),e.createElement(t,{heading:"Second With a Very Long Title",subheading:"Optional subtitle that is long and should wrap",type:"current"}),e.createElement(t,{heading:"Third",type:"disabled"}),e.createElement(t,{heading:"Fourth title that is long and should wrap",subheading:"Optional Subtitle",type:"completed"})),name:"Custom connector width"},h={render:()=>e.createElement(e.Fragment,null,e.createElement(c,{variant:"compact",id:"standard-compact-stepper"},e.createElement(t,{heading:"Create"}),e.createElement(t,{heading:"Read",type:"current"}),e.createElement(t,{heading:"Update",status:"optional"}),e.createElement(t,{heading:"Delete",status:"required"})),e.createElement(f,null)),name:"Compact stepper"},g={render:()=>e.createElement(e.Fragment,null,e.createElement("span",{lang:"de"},e.createElement(c,{variant:"compact",id:"standard-compact-stepper",icI18n:E},e.createElement(t,{heading:"Aktualisierung"}),e.createElement(t,{heading:"Lesen",type:"current"}),e.createElement(t,{heading:"Aktualisierung",status:"optional"}),e.createElement(t,{heading:"Löschen",status:"required"}))),e.createElement("p",null,"This stepper uses the icI18n prop to customise text elements within the stepper."),e.createElement("p",null,"It is also wrapped in a ",e.createElement("code",null,'<span lang="de">')," to change the language for assistive technology"),e.createElement(f,null)),name:"Internationalisation"},S={render:()=>e.createElement(e.Fragment,null,e.createElement(c,{variant:"compact",id:"custom-compact-stepper"},e.createElement(t,{heading:"First"}),e.createElement(t,{heading:"Second With a Very Long Title",subheading:"Optional subtitle that is long and should wrap",type:"current"}),e.createElement(t,{heading:"Third",type:"disabled"}),e.createElement(t,{heading:"Fourth title that is long and should wrap",subheading:"Optional Subtitle",type:"completed"}),e.createElement(t,{heading:"Fifth and final step",subheading:"Optional Subtitle",status:"optional",type:"completed"})),e.createElement(I,{class:"back-btn-custom-compact-stepper",style:{marginRight:"var(--ic-space-lg)"},onClick:()=>{const r=document.querySelector(".back-btn-custom-compact-stepper"),p=document.querySelector(".next-btn-custom-compact-stepper"),n=document.querySelectorAll("#custom-compact-stepper > ic-step"),o=["active","completed","disabled","completed","disabled"];for(let a=n.length-1;a>0;a--)n[a].type==="current"&&(n[a].type=o[a],n[a-1].type="current",a--);n[n.length-2].type==="current"&&p.setAttribute("disabled","false"),n[0].type==="current"&&r.setAttribute("disabled","true")}},"Back"),e.createElement(I,{class:"next-btn-custom-compact-stepper",onClick:()=>{const r=document.querySelector(".back-btn-custom-compact-stepper"),p=document.querySelector(".next-btn-custom-compact-stepper"),n=document.querySelectorAll("#custom-compact-stepper > ic-step"),o=["active","completed","disabled","completed","disabled"];for(let a=0;a<n.length-1;a++)n[a].type==="current"&&(n[a].type=o[a],n[a+1].type="current",a++);n[1].type==="current"&&r.setAttribute("disabled","false"),n[n.length-1].type==="current"&&p.setAttribute("disabled","true")}},"Next")),name:"Custom compact stepper"},y={render:()=>e.createElement(c,null,e.createElement(t,{type:"completed"},e.createElement("span",{slot:"heading"},"Create")),e.createElement(t,{type:"current"},e.createElement("span",{slot:"heading"},"Read")),e.createElement(t,{type:"active"},e.createElement("span",{slot:"heading"},"Update")),e.createElement(t,{type:"disabled"},e.createElement("span",{slot:"heading"},"Delete"))),name:"Slotted heading"},b={render:r=>e.createElement("div",null,e.createElement(c,{aligned:r.aligned,variant:r.variant,connectorWidth:r.connectorWidth,hideStepInfo:r.hideStepInfo,theme:r.theme,id:r.variant==="compact"?"standard-compact-stepper":"default-stepper",icI18n:r.icI18n},e.createElement(t,{heading:"Create",type:"completed"}),e.createElement(t,{heading:r.heading,subheading:r.subheading,type:r.type,status:r.status}),e.createElement(t,{heading:"Update",type:"active"}),e.createElement(t,{heading:"Delete",type:"disabled"})),r.variant==="compact"&&e.createElement(f,null)),name:"Playground",args:C,argTypes:{aligned:{options:["left","full-width"],control:{type:"inline-radio"}},connectorWidth:{control:{type:"range",min:100,max:500,step:5},description:"Width of the connector, only available when IcStepper is left-aligned."},variant:{options:["default","compact"],control:{type:"inline-radio"}},heading:{control:"text"},type:{options:["active","completed","disabled"],control:{type:"inline-radio"}},status:{options:["optional","required"],control:{type:"inline-radio"}},subheading:{control:"text"},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <IcStepper>
      <IcStep heading="Create" type="completed" />
      <IcStep heading="Read" type="current" />
      <IcStep heading="Update" type="active" />
      <IcStep heading="Delete" type="disabled" />
    </IcStepper>,
  name: "Full-width stepper"
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <IcStepper aligned="left">
      <IcStep heading="Create" type="completed" />
      <IcStep heading="Read" type="current" />
      <IcStep heading="Update" type="active" />
      <IcStep heading="Delete" type="disabled" />
    </IcStepper>,
  name: "Left-aligned stepper"
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <IcStepper hideStepInfo>
      <IcStep heading="Create" type="completed" />
      <IcStep heading="Read" type="current" />
      <IcStep heading="Update" type="active" />
      <IcStep heading="Delete" type="disabled" />
    </IcStepper>,
  name: "With hidden step information"
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <IcStepper>
      <IcStep type="completed" />
      <IcStep type="completed" />
      <IcStep type="current" />
      <IcStep />
    </IcStepper>,
  name: "Without headings"
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <IcStepper>
      <IcStep heading="First" />
      <IcStep heading="Second With a Very Long Title" subheading="Optional subtitle that is long and should wrap" type="current" />
      <IcStep heading="Third" type="disabled" />
      <IcStep heading="Fourth title that is long and should wrap" subheading="Optional Subtitle" type="completed" />
    </IcStepper>,
  name: "Custom stepper"
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <IcStepper aligned="left" connectorWidth="200">
      <IcStep heading="First" />
      <IcStep heading="Second With a Very Long Title" subheading="Optional subtitle that is long and should wrap" type="current" />
      <IcStep heading="Third" type="disabled" />
      <IcStep heading="Fourth title that is long and should wrap" subheading="Optional Subtitle" type="completed" />
    </IcStepper>,
  name: "Custom connector width"
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcStepper variant="compact" id="standard-compact-stepper">
      <IcStep heading="Create" />
      <IcStep heading="Read" type="current" />
      <IcStep heading="Update" status="optional" />
      <IcStep heading="Delete" status="required" />
    </IcStepper>
    <CompactButtons />
    </>,
  name: "Compact stepper"
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <>
    <span lang="de">
      <IcStepper variant="compact" id="standard-compact-stepper" icI18n={ICI18N}>
        <IcStep heading="Aktualisierung" />
        <IcStep heading="Lesen" type="current" />
        <IcStep heading="Aktualisierung" status="optional" />
        <IcStep heading="Löschen" status="required" />
      </IcStepper>
    </span>
    <p>This stepper uses the icI18n prop to customise text elements within the stepper.</p>
    <p>It is also wrapped in a <code>&lt;span lang="de"&gt;</code> to change the language for assistive technology</p>
    <CompactButtons />
    </>,
  name: "Internationalisation"
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcStepper variant="compact" id="custom-compact-stepper">
      <IcStep heading="First" />
      <IcStep heading="Second With a Very Long Title" subheading="Optional subtitle that is long and should wrap" type="current" />
      <IcStep heading="Third" type="disabled" />
      <IcStep heading="Fourth title that is long and should wrap" subheading="Optional Subtitle" type="completed" />
      <IcStep heading="Fifth and final step" subheading="Optional Subtitle" status="optional" type="completed" />
    </IcStepper>
    <IcButton class="back-btn-custom-compact-stepper" style={{
      marginRight: "var(--ic-space-lg)"
    }} onClick={() => {
      const backBtnCustomCompactStepper = document.querySelector(".back-btn-custom-compact-stepper");
      const nextBtnCustomCompactStepper = document.querySelector(".next-btn-custom-compact-stepper");
      const customSteps = document.querySelectorAll("#custom-compact-stepper > ic-step");
      const customCompactStepTypes = ["active", "completed", "disabled", "completed", "disabled"];
      for (let i = customSteps.length - 1; i > 0; i--) {
        if (customSteps[i].type === "current") {
          customSteps[i].type = customCompactStepTypes[i];
          customSteps[i - 1].type = "current";
          i--;
        }
      }
      if (customSteps[customSteps.length - 2].type === "current") {
        nextBtnCustomCompactStepper.setAttribute("disabled", "false");
      }
      if (customSteps[0].type === "current") {
        backBtnCustomCompactStepper.setAttribute("disabled", "true");
      }
    }}>
      Back
    </IcButton>
    <IcButton class="next-btn-custom-compact-stepper" onClick={() => {
      const backBtnCustomCompactStepper = document.querySelector(".back-btn-custom-compact-stepper");
      const nextBtnCustomCompactStepper = document.querySelector(".next-btn-custom-compact-stepper");
      const customSteps = document.querySelectorAll("#custom-compact-stepper > ic-step");
      const customCompactStepTypes = ["active", "completed", "disabled", "completed", "disabled"];
      for (let i = 0; i < customSteps.length - 1; i++) {
        if (customSteps[i].type === "current") {
          customSteps[i].type = customCompactStepTypes[i];
          customSteps[i + 1].type = "current";
          i++;
        }
      }
      if (customSteps[1].type === "current") {
        backBtnCustomCompactStepper.setAttribute("disabled", "false");
      }
      if (customSteps[customSteps.length - 1].type === "current") {
        nextBtnCustomCompactStepper.setAttribute("disabled", "true");
      }
    }}>
      Next
    </IcButton>
    </>,
  name: "Custom compact stepper"
}`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <IcStepper>
      <IcStep type="completed">
        <span slot="heading">Create</span>
      </IcStep>
      <IcStep type="current">
        <span slot="heading">Read</span>
      </IcStep>
      <IcStep type="active">
        <span slot="heading">Update</span>
      </IcStep>
      <IcStep type="disabled">
        <span slot="heading">Delete</span>
      </IcStep>
    </IcStepper>,
  name: "Slotted heading"
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div>
      <IcStepper aligned={args.aligned} variant={args.variant} connectorWidth={args.connectorWidth} hideStepInfo={args.hideStepInfo} theme={args.theme} id={args.variant === "compact" ? "standard-compact-stepper" : "default-stepper"} icI18n={args.icI18n}>
        <IcStep heading="Create" type="completed" />
        <IcStep heading={args.heading} subheading={args.subheading} type={args.type} status={args.status} />
        <IcStep heading="Update" type="active" />
        <IcStep heading="Delete" type="disabled" />
      </IcStepper>
      {args.variant === "compact" && <CompactButtons />}
    </div>,
  name: "Playground",
  args: defaultArgs,
  argTypes: {
    aligned: {
      options: ["left", "full-width"],
      control: {
        type: "inline-radio"
      }
    },
    connectorWidth: {
      control: {
        type: "range",
        min: 100,
        max: 500,
        step: 5
      },
      description: "Width of the connector, only available when IcStepper is left-aligned."
    },
    variant: {
      options: ["default", "compact"],
      control: {
        type: "inline-radio"
      }
    },
    heading: {
      control: "text"
    },
    type: {
      options: ["active", "completed", "disabled"],
      control: {
        type: "inline-radio"
      }
    },
    status: {
      options: ["optional", "required"],
      control: {
        type: "inline-radio"
      }
    },
    subheading: {
      control: "text"
    },
    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: "inline-radio"
      }
    }
  }
}`,...b.parameters?.docs?.source}}};const k=["FullWidthStepper","LeftAlignedStepper","WithHiddenStepInformation","WithoutHeadings","CustomStepper","CustomConnectorWidth","CompactStepper","Internationalisation","CustomCompactStepper","SlottedHeading","Playground"],W=Object.freeze(Object.defineProperty({__proto__:null,CompactStepper:h,CustomCompactStepper:S,CustomConnectorWidth:u,CustomStepper:m,FullWidthStepper:s,Internationalisation:g,LeftAlignedStepper:i,Playground:b,SlottedHeading:y,WithHiddenStepInformation:d,WithoutHeadings:l,__namedExportsOrder:k,default:v},Symbol.toStringTag,{value:"Module"}));export{W as I};
