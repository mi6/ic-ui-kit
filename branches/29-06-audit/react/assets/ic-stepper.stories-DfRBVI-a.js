import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{J as n,Y as r,in as i,t as a,u as o,ut as s}from"./iframe-xO3e-qV4.js";var c=e({CompactStepper:()=>b,CustomCompactStepper:()=>S,CustomConnectorWidth:()=>y,CustomStepper:()=>v,FullWidthStepper:()=>m,Internationalisation:()=>x,LeftAlignedStepper:()=>h,Playground:()=>w,SlottedHeading:()=>C,WithHiddenStepInformation:()=>g,WithoutHeadings:()=>_,__namedExportsOrder:()=>T,default:()=>p}),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E=t((()=>{i(),s(),l=a(),u={next:`Der nächste`,step:`Schritt`,steps:`Schritte`,of:`von`,lastStep:`Letzter Schritt`,completed:`abgeschlossen`,notRequired:`Nicht erforderlich`,required:`erforderlich`,optional:`wahlweise`},d={aligned:`full-width`,connectorWidth:100,variant:`default`,hideStepInfo:!1,heading:`Editable step`,type:`current`,status:`optional`,subheading:`Optional subtitle`,theme:`inherit`,icI18n:u},f=()=>(0,l.jsxs)(`div`,{children:[(0,l.jsx)(o,{class:`back-btn-compact-stepper`,style:{marginRight:`var(--ic-space-lg)`},onClick:()=>{let e=document.querySelector(`.back-btn-compact-stepper`),t=document.querySelector(`.next-btn-compact-stepper`),n=document.querySelectorAll(`#standard-compact-stepper > ic-step`),r=[`active`,`completed`,`disabled`,`completed`];for(let e=n.length-1;e>0;e--)n[e].type===`current`&&(n[e].type=r[e],n[e-1].type=`current`,e--);n[n.length-2].type===`current`&&t.setAttribute(`disabled`,`false`),n[0].type===`current`&&e.setAttribute(`disabled`,`true`)},children:`Back`}),(0,l.jsx)(o,{class:`next-btn-compact-stepper`,onClick:()=>{let e=document.querySelector(`.back-btn-compact-stepper`),t=document.querySelector(`.next-btn-compact-stepper`),n=document.querySelectorAll(`#standard-compact-stepper > ic-step`),r=[`active`,`completed`,`disabled`,`completed`];for(let e=0;e<n.length-1;e++)n[e].type===`current`&&(n[e].type=r[e],n[e+1].type=`current`,e++);n[1].type===`current`&&e.setAttribute(`disabled`,`false`),n[n.length-1].type===`current`&&t.setAttribute(`disabled`,`true`)},children:`Next`})]}),p={title:`Stepper`,component:r},m={render:()=>(0,l.jsxs)(r,{children:[(0,l.jsx)(n,{heading:`Create`,type:`completed`}),(0,l.jsx)(n,{heading:`Read`,type:`current`}),(0,l.jsx)(n,{heading:`Update`,type:`active`}),(0,l.jsx)(n,{heading:`Delete`,type:`disabled`})]}),name:`Full-width stepper`},h={render:()=>(0,l.jsxs)(r,{aligned:`left`,children:[(0,l.jsx)(n,{heading:`Create`,type:`completed`}),(0,l.jsx)(n,{heading:`Read`,type:`current`}),(0,l.jsx)(n,{heading:`Update`,type:`active`}),(0,l.jsx)(n,{heading:`Delete`,type:`disabled`})]}),name:`Left-aligned stepper`},g={render:()=>(0,l.jsxs)(r,{hideStepInfo:!0,children:[(0,l.jsx)(n,{heading:`Create`,type:`completed`}),(0,l.jsx)(n,{heading:`Read`,type:`current`}),(0,l.jsx)(n,{heading:`Update`,type:`active`}),(0,l.jsx)(n,{heading:`Delete`,type:`disabled`})]}),name:`With hidden step information`},_={render:()=>(0,l.jsxs)(r,{children:[(0,l.jsx)(n,{type:`completed`}),(0,l.jsx)(n,{type:`completed`}),(0,l.jsx)(n,{type:`current`}),(0,l.jsx)(n,{})]}),name:`Without headings`},v={render:()=>(0,l.jsxs)(r,{children:[(0,l.jsx)(n,{heading:`First`}),(0,l.jsx)(n,{heading:`Second With a Very Long Title`,subheading:`Optional subtitle that is long and should wrap`,type:`current`}),(0,l.jsx)(n,{heading:`Third`,type:`disabled`}),(0,l.jsx)(n,{heading:`Fourth title that is long and should wrap`,subheading:`Optional Subtitle`,type:`completed`})]}),name:`Custom stepper`},y={render:()=>(0,l.jsxs)(r,{aligned:`left`,connectorWidth:`200`,children:[(0,l.jsx)(n,{heading:`First`}),(0,l.jsx)(n,{heading:`Second With a Very Long Title`,subheading:`Optional subtitle that is long and should wrap`,type:`current`}),(0,l.jsx)(n,{heading:`Third`,type:`disabled`}),(0,l.jsx)(n,{heading:`Fourth title that is long and should wrap`,subheading:`Optional Subtitle`,type:`completed`})]}),name:`Custom connector width`},b={render:()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r,{variant:`compact`,id:`standard-compact-stepper`,children:[(0,l.jsx)(n,{heading:`Create`}),(0,l.jsx)(n,{heading:`Read`,type:`current`}),(0,l.jsx)(n,{heading:`Update`,status:`optional`}),(0,l.jsx)(n,{heading:`Delete`,status:`required`})]}),(0,l.jsx)(f,{})]}),name:`Compact stepper`},x={render:()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`span`,{lang:`de`,children:(0,l.jsxs)(r,{variant:`compact`,id:`standard-compact-stepper`,icI18n:u,children:[(0,l.jsx)(n,{heading:`Aktualisierung`}),(0,l.jsx)(n,{heading:`Lesen`,type:`current`}),(0,l.jsx)(n,{heading:`Aktualisierung`,status:`optional`}),(0,l.jsx)(n,{heading:`Löschen`,status:`required`})]})}),(0,l.jsx)(`p`,{children:`This stepper uses the icI18n prop to customise text elements within the stepper.`}),(0,l.jsxs)(`p`,{children:[`It is also wrapped in a `,(0,l.jsx)(`code`,{children:`<span lang="de">`}),` to change the language for assistive technology`]}),(0,l.jsx)(f,{})]}),name:`Internationalisation`},S={render:()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r,{variant:`compact`,id:`custom-compact-stepper`,children:[(0,l.jsx)(n,{heading:`First`}),(0,l.jsx)(n,{heading:`Second With a Very Long Title`,subheading:`Optional subtitle that is long and should wrap`,type:`current`}),(0,l.jsx)(n,{heading:`Third`,type:`disabled`}),(0,l.jsx)(n,{heading:`Fourth title that is long and should wrap`,subheading:`Optional Subtitle`,type:`completed`}),(0,l.jsx)(n,{heading:`Fifth and final step`,subheading:`Optional Subtitle`,status:`optional`,type:`completed`})]}),(0,l.jsx)(o,{class:`back-btn-custom-compact-stepper`,style:{marginRight:`var(--ic-space-lg)`},onClick:()=>{let e=document.querySelector(`.back-btn-custom-compact-stepper`),t=document.querySelector(`.next-btn-custom-compact-stepper`),n=document.querySelectorAll(`#custom-compact-stepper > ic-step`),r=[`active`,`completed`,`disabled`,`completed`,`disabled`];for(let e=n.length-1;e>0;e--)n[e].type===`current`&&(n[e].type=r[e],n[e-1].type=`current`,e--);n[n.length-2].type===`current`&&t.setAttribute(`disabled`,`false`),n[0].type===`current`&&e.setAttribute(`disabled`,`true`)},children:`Back`}),(0,l.jsx)(o,{class:`next-btn-custom-compact-stepper`,onClick:()=>{let e=document.querySelector(`.back-btn-custom-compact-stepper`),t=document.querySelector(`.next-btn-custom-compact-stepper`),n=document.querySelectorAll(`#custom-compact-stepper > ic-step`),r=[`active`,`completed`,`disabled`,`completed`,`disabled`];for(let e=0;e<n.length-1;e++)n[e].type===`current`&&(n[e].type=r[e],n[e+1].type=`current`,e++);n[1].type===`current`&&e.setAttribute(`disabled`,`false`),n[n.length-1].type===`current`&&t.setAttribute(`disabled`,`true`)},children:`Next`})]}),name:`Custom compact stepper`},C={render:()=>(0,l.jsxs)(r,{children:[(0,l.jsx)(n,{type:`completed`,children:(0,l.jsx)(`span`,{slot:`heading`,children:`Create`})}),(0,l.jsx)(n,{type:`current`,children:(0,l.jsx)(`span`,{slot:`heading`,children:`Read`})}),(0,l.jsx)(n,{type:`active`,children:(0,l.jsx)(`span`,{slot:`heading`,children:`Update`})}),(0,l.jsx)(n,{type:`disabled`,children:(0,l.jsx)(`span`,{slot:`heading`,children:`Delete`})})]}),name:`Slotted heading`},w={render:e=>(0,l.jsxs)(`div`,{children:[(0,l.jsxs)(r,{aligned:e.aligned,variant:e.variant,connectorWidth:e.connectorWidth,hideStepInfo:e.hideStepInfo,theme:e.theme,id:e.variant===`compact`?`standard-compact-stepper`:`default-stepper`,icI18n:e.icI18n,children:[(0,l.jsx)(n,{heading:`Create`,type:`completed`}),(0,l.jsx)(n,{heading:e.heading,subheading:e.subheading,type:e.type,status:e.status}),(0,l.jsx)(n,{heading:`Update`,type:`active`}),(0,l.jsx)(n,{heading:`Delete`,type:`disabled`})]}),e.variant===`compact`&&(0,l.jsx)(f,{})]}),name:`Playground`,args:d,argTypes:{aligned:{options:[`left`,`full-width`],control:{type:`inline-radio`}},connectorWidth:{control:{type:`range`,min:100,max:500,step:5},description:`Width of the connector, only available when IcStepper is left-aligned.`},variant:{options:[`default`,`compact`],control:{type:`inline-radio`}},heading:{control:`text`},type:{options:[`active`,`completed`,`disabled`],control:{type:`inline-radio`}},status:{options:[`optional`,`required`],control:{type:`inline-radio`}},subheading:{control:`text`},theme:{options:[`inherit`,`light`,`dark`],control:{type:`inline-radio`}}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <IcStepper>
      <IcStep heading="Create" type="completed" />
      <IcStep heading="Read" type="current" />
      <IcStep heading="Update" type="active" />
      <IcStep heading="Delete" type="disabled" />
    </IcStepper>,
  name: "Full-width stepper"
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <IcStepper aligned="left">
      <IcStep heading="Create" type="completed" />
      <IcStep heading="Read" type="current" />
      <IcStep heading="Update" type="active" />
      <IcStep heading="Delete" type="disabled" />
    </IcStepper>,
  name: "Left-aligned stepper"
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <IcStepper hideStepInfo>
      <IcStep heading="Create" type="completed" />
      <IcStep heading="Read" type="current" />
      <IcStep heading="Update" type="active" />
      <IcStep heading="Delete" type="disabled" />
    </IcStepper>,
  name: "With hidden step information"
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <IcStepper>
      <IcStep type="completed" />
      <IcStep type="completed" />
      <IcStep type="current" />
      <IcStep />
    </IcStepper>,
  name: "Without headings"
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <IcStepper>
      <IcStep heading="First" />
      <IcStep heading="Second With a Very Long Title" subheading="Optional subtitle that is long and should wrap" type="current" />
      <IcStep heading="Third" type="disabled" />
      <IcStep heading="Fourth title that is long and should wrap" subheading="Optional Subtitle" type="completed" />
    </IcStepper>,
  name: "Custom stepper"
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <IcStepper aligned="left" connectorWidth="200">
      <IcStep heading="First" />
      <IcStep heading="Second With a Very Long Title" subheading="Optional subtitle that is long and should wrap" type="current" />
      <IcStep heading="Third" type="disabled" />
      <IcStep heading="Fourth title that is long and should wrap" subheading="Optional Subtitle" type="completed" />
    </IcStepper>,
  name: "Custom connector width"
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T=[`FullWidthStepper`,`LeftAlignedStepper`,`WithHiddenStepInformation`,`WithoutHeadings`,`CustomStepper`,`CustomConnectorWidth`,`CompactStepper`,`Internationalisation`,`CustomCompactStepper`,`SlottedHeading`,`Playground`]}));E();export{b as CompactStepper,S as CustomCompactStepper,y as CustomConnectorWidth,v as CustomStepper,m as FullWidthStepper,x as Internationalisation,h as LeftAlignedStepper,w as Playground,C as SlottedHeading,g as WithHiddenStepInformation,_ as WithoutHeadings,T as __namedExportsOrder,p as default,E as n,c as t};