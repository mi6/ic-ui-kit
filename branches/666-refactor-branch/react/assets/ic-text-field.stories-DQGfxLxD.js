import{E as r,R as e,a as q,o as R,r as C,f as L}from"./iframe-B8kO3GDv.js";import{S as P}from"./slottedSVG-CTeeA603.js";const t=()=>e.createElement(P,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},e.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),e.createElement("path",{d:"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"})),M=()=>{const[a,l]=C.useState(""),o=F=>{console.log(F.detail.value),l(F.detail.value)};return e.createElement(r,{placeholder:"Controlled",label:"Controlled",value:a,onIcChange:o})},k=()=>{const a=C.useRef(),l=()=>{console.log(a.current.value)};return e.createElement(r,{ref:a,placeholder:"Uncontrolled",label:"Uncontrolled",onIcChange:l})},z=()=>{const[a,l]=C.useState(!0),o=()=>{l(!a)};return e.createElement(e.Fragment,null,e.createElement(r,{label:"my label",hiddenInput:a}),e.createElement(L,{onClick:()=>o()},"Toggle hidden input"))},H=()=>{const[a,l]=C.useState(!1),[o,F]=C.useState(!1);return e.createElement(e.Fragment,null,e.createElement(r,{label:"What is your favourite coffee?",helperText:"Error already set on page load",validationStatus:a?"":"error",validationText:a?"":"First error message"}),e.createElement("br",null),e.createElement(r,{label:"What is your favourite coffee?",helperText:"Error set after page load",validationStatus:a?"error":"",validationText:a?"Second error message":""}),e.createElement("br",null),e.createElement(L,{onClick:()=>l(!a)},"Toggle errors"),e.createElement("br",null),e.createElement("br",null),e.createElement("br",null),e.createElement("br",null),e.createElement(r,{label:"What is your favourite coffee?",helperText:"aria-live overridden as 'polite'",validationAriaLive:"polite",validationStatus:o?"error":"",validationText:o?"Third error message":""}),e.createElement("br",null),e.createElement(r,{label:"What is your favourite coffee?",helperText:"aria-live overridden as 'polite'",validationAriaLive:"polite",validationStatus:o?"error":"",validationText:o?"Fourth error message":""}),e.createElement("br",null),e.createElement(L,{onClick:()=>F(!o)},"Toggle errors"))},V={debounce:0,disabled:!1,fullWidth:!1,helperText:"",hideCharCount:!1,hideLabel:!1,inputId:"ic-text-field-input-0",inputmode:"text",label:"Text Field",max:0,maxCharacters:0,maxCharactersMessage:"Custom max characters validation message",maxMessage:"Custom max validation message",min:0,minCharacters:0,minCharactersMessage:"Custom min characters validation message",minMessage:"Custom min validation message",name:"0",placeholder:"",readonly:!1,required:!1,resize:!1,rows:1,size:"medium",spellcheck:!1,theme:"inherit",type:"text",validationAriaLive:"default",validationInline:!1,validationStatus:"no status",validationText:"",value:""},B={title:"Text field",component:r},i={render:()=>e.createElement(e.Fragment,null,e.createElement(r,{label:"What is your favourite coffee?"}),e.createElement(r,{rows:"6",label:"What is your favourite coffee?"})),name:"Default"},n={render:()=>e.createElement(r,{label:"What is your favourite coffee?",autofocus:!0}),name:"Autofocus"},c={render:()=>e.createElement(e.Fragment,null,e.createElement(r,{label:"What is your favourite coffee?",required:!0,placeholder:"Placeholder"}),e.createElement(r,{rows:"6",label:"What is your favourite coffee?",required:!0,placeholder:"Placeholder"})),name:"Placeholder and required"},s={render:()=>e.createElement(e.Fragment,null,e.createElement(r,{label:"What is your favourite coffee?",required:!0,placeholder:"Placeholder",helperText:"Such as Arabica, Robusta or Liberica"}),e.createElement(r,{rows:"6",label:"What is your favourite coffee?",required:!0,placeholder:"Placeholder",helperText:"Such as Arabica, Robusta or Liberica"}),e.createElement(r,{label:"What is your favourite coffee?",required:!0,placeholder:"Placeholder"},e.createElement(q,{variant:"caption",slot:"helper-text"},e.createElement("span",null,"Slotted helper text with a ",e.createElement(R,{href:"#"},"link"))))),name:"Helper text"},u={render:()=>e.createElement(e.Fragment,null,e.createElement(r,{label:"What is your favourite coffee?",required:!0,placeholder:"Placeholder",helperText:"Such as Arabica, Robusta or Liberica"},e.createElement(t,null)),e.createElement(r,{rows:"6",label:"What is your favourite coffee?",required:!0,placeholder:"Placeholder",helperText:"Such as Arabica, Robusta or Liberica"},e.createElement(t,null))),name:"With icon"},d={render:()=>e.createElement(e.Fragment,null,e.createElement(r,{value:"Arabica",label:"What is your favourite coffee?",required:!0,placeholder:"Placeholder",helperText:"Such as Arabica, Robusta or Liberica"},e.createElement(t,null)),e.createElement(r,{rows:"6",value:"Arabica",label:"What is your favourite coffee?",required:!0,placeholder:"Placeholder",helperText:"Such as Arabica, Robusta or Liberica"},e.createElement(t,null))),name:"With value"},h={render:()=>e.createElement(e.Fragment,null,e.createElement(r,{value:null,label:"What is your favourite coffee?",required:!0,placeholder:"Placeholder",helperText:"Such as Arabica, Robusta or Liberica"},e.createElement(t,null)),e.createElement(r,{rows:"6",value:null,label:"What is your favourite coffee?",required:!0,placeholder:"Placeholder",helperText:"Such as Arabica, Robusta or Liberica"},e.createElement(t,null))),name:"With null value"},m={render:()=>e.createElement(e.Fragment,null,e.createElement(r,{value:void 0,label:"What is your favourite coffee?",required:!0,placeholder:"Placeholder",helperText:"Such as Arabica, Robusta or Liberica"},e.createElement(t,null)),e.createElement(r,{rows:"6",value:void 0,label:"What is your favourite coffee?",required:!0,placeholder:"Placeholder",helperText:"Such as Arabica, Robusta or Liberica"},e.createElement(t,null))),name:"With undefined value"},p={render:()=>e.createElement(e.Fragment,null,e.createElement(r,{fullWidth:"true",maxCharacters:"25",value:"Arabica",label:"What is your favourite coffee?",required:!0,placeholder:"Placeholder",helperText:"Such as Arabica, Robusta or Liberica"}),e.createElement(r,{fullWidth:"true",rows:"6",maxCharacters:"25",value:"Arabica",label:"What is your favourite coffee?",required:!0,placeholder:"Placeholder",helperText:"Such as Arabica, Robusta or Liberica"})),name:"Full width"},f={render:()=>e.createElement(e.Fragment,null,e.createElement(r,{disabled:!0,maxCharacters:"25",value:"Arabica",label:"What is your favourite coffee?",required:!0,placeholder:"Placeholder",helperText:"Such as Arabica, Robusta or Liberica"}),e.createElement(r,{rows:"6",disabled:!0,maxCharacters:"25",value:"Arabica",label:"What is your favourite coffee?",required:!0,placeholder:"Placeholder",helperText:"Such as Arabica, Robusta or Liberica"})),name:"Disabled"},b={render:()=>e.createElement(e.Fragment,null,e.createElement(r,{readonly:!0,maxCharacters:"25",value:"Arabica",label:"What is your favourite coffee?",required:!0,placeholder:"Placeholder",helperText:"Such as Arabica, Robusta or Liberica"}),e.createElement(r,{rows:"6",readonly:!0,maxCharacters:"25",value:"Arabica",label:"What is your favourite coffee?",required:!0,placeholder:"Placeholder",helperText:"Such as Arabica, Robusta or Liberica"})),name:"Read only"},x={render:()=>e.createElement(e.Fragment,null,e.createElement(r,{maxCharacters:"25",value:"Arabica",label:"What is your favourite coffee?",required:!0,helperText:"Such as Arabica, Robusta or Liberica",validationStatus:"success",validationText:"Good choice!"},e.createElement(t,null)),e.createElement(r,{rows:"6",maxCharacters:"25",value:"Arabica",label:"What is your favourite coffee?",required:!0,helperText:"Such as Arabica, Robusta or Liberica",validationStatus:"success",validationText:"Good choice!"},e.createElement(t,null)),e.createElement(r,{maxCharacters:"25",value:"Arabica",label:"What is your favourite coffee?",required:!0,helperText:"Such as Arabica, Robusta or Liberica",validationStatus:"success",validationText:"Good choice!",validationInline:!0},e.createElement(t,null)),e.createElement(r,{maxCharacters:"25",size:"small",value:"Arabica",label:"What is your favourite coffee?",required:!0,helperText:"Such as Arabica, Robusta or Liberica",validationStatus:"success",validationText:"Good choice!",validationInline:!0},e.createElement(t,null)),e.createElement(r,{maxCharacters:"25",value:"Arabica",label:"What is your favourite coffee?",required:!0,helperText:"Such as Arabica, Robusta or Liberica",validationStatus:"warning",validationText:"A very long warning message to test if wrapping works"},e.createElement(t,null)),e.createElement(r,{rows:"6",maxCharacters:"25",value:"Arabica",label:"What is your favourite coffee?",required:!0,helperText:"Such as Arabica, Robusta or Liberica",validationStatus:"warning",validationText:"A very long warning message to test if wrapping works"},e.createElement(t,null)),e.createElement(r,{maxCharacters:"25",value:"Tea",label:"What is your favourite coffee?",required:!0,helperText:"Such as Arabica, Robusta or Liberica",validationStatus:"error",validationText:"Now it has really gone to (coffee) pot"},e.createElement(t,null)),e.createElement(r,{rows:"6",maxCharacters:"25",value:"Tea",label:"What is your favourite coffee?",required:!0,helperText:"Such as Arabica, Robusta or Liberica",validationStatus:"error",validationText:"Now it has really gone to (coffee) pot"},e.createElement(t,null)),e.createElement(r,{validationStatus:"error",validationText:"now it has really gone to (coffee) pot",value:"6",inputmode:"numeric",label:"How many coffees do you want?",helperText:"Our coffee machines have a maximum capacity of 4 coffees at a time.",type:"number",min:"1",max:"4",required:!0},e.createElement(t,null)),e.createElement(r,{validationStatus:"error",validationText:"now it has really gone to (coffee) pot",value:"0",inputmode:"numeric",label:"How many coffees do you want?",helperText:"Our coffee machines have a maximum capacity of 4 coffees at a time.",type:"number",min:"1",max:"4",required:!0},e.createElement(t,null)),e.createElement(r,{validationStatus:"error",validationText:"I'm not familiar with this type of coffee",validationInlineInternal:"true",value:"Milkshake",label:"What is your favourite coffee?",required:!0,hideLabel:!0,size:"small",placeholder:"Placeholder",helperText:"Such as Arabica, Robusta or Liberica"},e.createElement(t,null)),e.createElement(r,{validationStatus:"error",label:"What is your favourite slotted coffee?",placeholder:"Placeholder"},e.createElement(q,{variant:"caption",slot:"validation-text"},"Slotted validation text with a ",e.createElement(R,{href:"#"},"link")))),name:"Validation"},v={render:()=>e.createElement(H,null),name:"Aria-live behaviour"},T={render:()=>e.createElement(r,{rows:"6",maxCharacters:"25",value:"Arabica",label:"What is your favourite coffee?",required:!0,placeholder:"Placeholder",helperText:"Such as Arabica, Robusta or Liberica",resize:!0,size:"small"}),name:"Text area with resize"},y={render:()=>e.createElement(M,null),name:"Controlled"},g={render:()=>e.createElement(k,null),name:"Uncontrolled"},S={render:()=>e.createElement(e.Fragment,null,e.createElement(r,{inputmode:"numeric",label:"How many coffees do you want?",type:"number",min:1,max:4,helperText:"Our coffee machines have a maximum capacity of 4 coffees at a time."}),e.createElement("br",null),e.createElement(r,{inputmode:"numeric",label:"How many coffees do you want?",type:"number",min:1,max:4,minMessage:"You must order at least 1 coffee",maxMessage:"You cannot order more than 4 coffees",helperText:"With custom validation messages."})),name:"Min and max"},I={render:()=>e.createElement(e.Fragment,null,e.createElement(r,{maxCharacters:2,label:"What is your favourite coffee?",helperText:"Short answers only."}),e.createElement(r,{maxCharacters:2,label:"What is your favourite coffee?",helperText:"Short answers only. The character count is hidden.",hideCharCount:!0}),e.createElement(r,{minCharacters:3,label:"What is your favourite coffee?",helperText:"Long answer please."}),e.createElement("br",null),e.createElement(r,{minCharacters:2,maxCharacters:5,minCharactersMessage:"Too short - please type at least 2 characters",maxCharactersMessage:"5 characters is long enough",label:"What is your favourite coffee?",helperText:"Long answer please. (With custom validation messages)"})),name:"Maximum and minimum characters"},E={render:()=>e.createElement(z,null),name:"Hidden input"},w={render:()=>e.createElement(e.Fragment,null,e.createElement(r,{label:"What is your favourite coffee?",onIcKeydown:({detail:{event:a,cursorPosition:l,selectionEnd:o}})=>{console.log(`Key: ${a.code}, Cursor position: ${l}, Selection end: ${o}`)}})),name:"Logging IcKeydown"},A={render:()=>e.createElement("span",{lang:"fr"},e.createElement(r,{label:"Boisson préférée",placeholder:"Boisson","helper-text":"This textfield will read in french to assistive technologies"})),name:"Internationalisation"},W={render:a=>e.createElement("div",{style:{backgroundColor:a.theme==="light"?"white":a.theme==="dark"?"var(--ic-color-background-primary-dark)":"transparent"}},e.createElement(r,{debounce:a.debounce,disabled:a.disabled,fullWidth:a.fullWidth,helperText:a.helperText,hideCharCount:a.hideCharCount,hideLabel:a.hideLabel,inputId:a.inputId,inputmode:a.inputmode,label:a.label,max:a.max,maxCharacters:a.maxCharacters,maxCharactersMessage:a.maxCharactersMessage,maxMessage:a.maxMessage,min:a.min,minCharacters:a.minCharacters,minCharactersMessage:a.minCharactersMessage,minMessage:a.minMessage,name:a.name,placeholder:a.placeholder,readonly:a.readonly,required:a.required,resize:a.resize,rows:a.rows,size:a.size,spellcheck:a.spellcheck,theme:a.theme,type:a.type,validationAriaLive:a.validationAriaLive,validationInline:a.validationInline,validationStatus:a.validationStatus==="no status"?"":a.validationStatus,validationText:a.validationText,value:a.value,onIcChange:l=>console.log(l.detail.value)},a.showIconSlot&&e.createElement(P,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},e.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),e.createElement("path",{d:"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"})))),args:V,argTypes:{inputmode:{options:["none","text","tel","url","email","numeric","decimal","search"],control:{type:"select"}},size:{options:["medium","small"],control:{type:"inline-radio"}},type:{options:["email","password","tel","text","url","number","search"],control:{type:"select"}},validationAriaLive:{options:["default","polite","assertive","off"],control:{type:"inline-radio"}},validationStatus:{options:["no status","warning","error","success"],control:{type:"select"}},showIconSlot:{control:{type:"boolean"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <>
          <IcTextField label="What is your favourite coffee?" />
          <IcTextField rows="6" label="What is your favourite coffee?" />
    </>,
  name: "Default"
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <IcTextField label="What is your favourite coffee?" autofocus />,
  name: "Autofocus"
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcTextField label="What is your favourite coffee?" required placeholder="Placeholder" />
    <IcTextField rows="6" label="What is your favourite coffee?" required placeholder="Placeholder" />
    </>,
  name: "Placeholder and required"
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcTextField label="What is your favourite coffee?" required placeholder="Placeholder" helperText="Such as Arabica, Robusta or Liberica" />
      <IcTextField rows="6" label="What is your favourite coffee?" required placeholder="Placeholder" helperText="Such as Arabica, Robusta or Liberica" />
      <IcTextField label="What is your favourite coffee?" required placeholder="Placeholder"><IcTypography variant="caption" slot="helper-text">
          <span>
            Slotted helper text with a <IcLink href="#">link</IcLink>
          </span>
        </IcTypography></IcTextField>
    </>,
  name: "Helper text"
}`,...s.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcTextField label="What is your favourite coffee?" required placeholder="Placeholder" helperText="Such as Arabica, Robusta or Liberica">
      <SlottedIcon />
    </IcTextField>
    <IcTextField rows="6" label="What is your favourite coffee?" required placeholder="Placeholder" helperText="Such as Arabica, Robusta or Liberica">
      <SlottedIcon />
    </IcTextField>
    </>,
  name: "With icon"
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcTextField value="Arabica" label="What is your favourite coffee?" required placeholder="Placeholder" helperText="Such as Arabica, Robusta or Liberica">
      <SlottedIcon />
    </IcTextField>
    <IcTextField rows="6" value="Arabica" label="What is your favourite coffee?" required placeholder="Placeholder" helperText="Such as Arabica, Robusta or Liberica">
      <SlottedIcon />
    </IcTextField>
    </>,
  name: "With value"
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcTextField value={null} label="What is your favourite coffee?" required placeholder="Placeholder" helperText="Such as Arabica, Robusta or Liberica">
      <SlottedIcon />
    </IcTextField>
    <IcTextField rows="6" value={null} label="What is your favourite coffee?" required placeholder="Placeholder" helperText="Such as Arabica, Robusta or Liberica">
      <SlottedIcon />
    </IcTextField>
    </>,
  name: "With null value"
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcTextField value={undefined} label="What is your favourite coffee?" required placeholder="Placeholder" helperText="Such as Arabica, Robusta or Liberica">
      <SlottedIcon />
    </IcTextField>
    <IcTextField rows="6" value={undefined} label="What is your favourite coffee?" required placeholder="Placeholder" helperText="Such as Arabica, Robusta or Liberica">
      <SlottedIcon />
    </IcTextField>
    </>,
  name: "With undefined value"
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcTextField fullWidth="true" maxCharacters="25" value="Arabica" label="What is your favourite coffee?" required placeholder="Placeholder" helperText="Such as Arabica, Robusta or Liberica" />
    <IcTextField fullWidth="true" rows="6" maxCharacters="25" value="Arabica" label="What is your favourite coffee?" required placeholder="Placeholder" helperText="Such as Arabica, Robusta or Liberica" />
    </>,
  name: "Full width"
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcTextField disabled maxCharacters="25" value="Arabica" label="What is your favourite coffee?" required placeholder="Placeholder" helperText="Such as Arabica, Robusta or Liberica" />
    <IcTextField rows="6" disabled maxCharacters="25" value="Arabica" label="What is your favourite coffee?" required placeholder="Placeholder" helperText="Such as Arabica, Robusta or Liberica" />
    </>,
  name: "Disabled"
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcTextField readonly maxCharacters="25" value="Arabica" label="What is your favourite coffee?" required placeholder="Placeholder" helperText="Such as Arabica, Robusta or Liberica" />
    <IcTextField rows="6" readonly maxCharacters="25" value="Arabica" label="What is your favourite coffee?" required placeholder="Placeholder" helperText="Such as Arabica, Robusta or Liberica" />
    </>,
  name: "Read only"
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcTextField maxCharacters="25" value="Arabica" label="What is your favourite coffee?" required helperText="Such as Arabica, Robusta or Liberica" validationStatus="success" validationText="Good choice!">
      <SlottedIcon />
    </IcTextField>
    <IcTextField rows="6" maxCharacters="25" value="Arabica" label="What is your favourite coffee?" required helperText="Such as Arabica, Robusta or Liberica" validationStatus="success" validationText="Good choice!">
      <SlottedIcon />
    </IcTextField>
    <IcTextField maxCharacters="25" value="Arabica" label="What is your favourite coffee?" required helperText="Such as Arabica, Robusta or Liberica" validationStatus="success" validationText="Good choice!" validationInline>
      <SlottedIcon />
    </IcTextField>
    <IcTextField maxCharacters="25" size="small" value="Arabica" label="What is your favourite coffee?" required helperText="Such as Arabica, Robusta or Liberica" validationStatus="success" validationText="Good choice!" validationInline>
      <SlottedIcon />
    </IcTextField>
    <IcTextField maxCharacters="25" value="Arabica" label="What is your favourite coffee?" required helperText="Such as Arabica, Robusta or Liberica" validationStatus="warning" validationText="A very long warning message to test if wrapping works">
      <SlottedIcon />
    </IcTextField>
    <IcTextField rows="6" maxCharacters="25" value="Arabica" label="What is your favourite coffee?" required helperText="Such as Arabica, Robusta or Liberica" validationStatus="warning" validationText="A very long warning message to test if wrapping works">
      <SlottedIcon />
    </IcTextField>
    <IcTextField maxCharacters="25" value="Tea" label="What is your favourite coffee?" required helperText="Such as Arabica, Robusta or Liberica" validationStatus="error" validationText="Now it has really gone to (coffee) pot">
      <SlottedIcon />
    </IcTextField>
    <IcTextField rows="6" maxCharacters="25" value="Tea" label="What is your favourite coffee?" required helperText="Such as Arabica, Robusta or Liberica" validationStatus="error" validationText="Now it has really gone to (coffee) pot">
      <SlottedIcon />
    </IcTextField>
    <IcTextField validationStatus="error" validationText="now it has really gone to (coffee) pot" value="6" inputmode="numeric" label="How many coffees do you want?" helperText="Our coffee machines have a maximum capacity of 4 coffees at a time." type="number" min="1" max="4" required>
      <SlottedIcon />
    </IcTextField>
    <IcTextField validationStatus="error" validationText="now it has really gone to (coffee) pot" value="0" inputmode="numeric" label="How many coffees do you want?" helperText="Our coffee machines have a maximum capacity of 4 coffees at a time." type="number" min="1" max="4" required>
      <SlottedIcon />
    </IcTextField>
    <IcTextField validationStatus="error" validationText="I'm not familiar with this type of coffee" validationInlineInternal="true" value="Milkshake" label="What is your favourite coffee?" required hideLabel size="small" placeholder="Placeholder" helperText="Such as Arabica, Robusta or Liberica">
      <SlottedIcon />
    </IcTextField>
    <IcTextField validationStatus="error" label="What is your favourite slotted coffee?" placeholder="Placeholder">
      <IcTypography variant="caption" slot="validation-text">
            Slotted validation text with a <IcLink href="#">link</IcLink>
        </IcTypography>
    </IcTextField>
    </>,
  name: "Validation"
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <AriaLiveBehaviourExample />,
  name: "Aria-live behaviour"
}`,...v.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <IcTextField rows="6" maxCharacters="25" value="Arabica" label="What is your favourite coffee?" required placeholder="Placeholder" helperText="Such as Arabica, Robusta or Liberica" resize size="small" />,
  name: "Text area with resize"
}`,...T.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledExample />,
  name: "Controlled"
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Uncontrolled />,
  name: "Uncontrolled"
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcTextField inputmode="numeric" label="How many coffees do you want?" type="number" min={1} max={4} helperText="Our coffee machines have a maximum capacity of 4 coffees at a time." />
      <br />
      <IcTextField inputmode="numeric" label="How many coffees do you want?" type="number" min={1} max={4} minMessage="You must order at least 1 coffee" maxMessage="You cannot order more than 4 coffees" helperText="With custom validation messages." />
    </>,
  name: "Min and max"
}`,...S.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcTextField maxCharacters={2} label="What is your favourite coffee?" helperText="Short answers only."></IcTextField>
    <IcTextField maxCharacters={2} label="What is your favourite coffee?" helperText="Short answers only. The character count is hidden." hideCharCount></IcTextField>
    <IcTextField minCharacters={3} label="What is your favourite coffee?" helperText="Long answer please."></IcTextField>
    <br />
    <IcTextField minCharacters={2} maxCharacters={5} minCharactersMessage="Too short - please type at least 2 characters" maxCharactersMessage="5 characters is long enough" label="What is your favourite coffee?" helperText="Long answer please. (With custom validation messages)"></IcTextField>
    </>,
  name: "Maximum and minimum characters"
}`,...I.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <HiddenInput />,
  name: "Hidden input"
}`,...E.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcTextField label="What is your favourite coffee?" onIcKeydown={({
      detail: {
        event,
        cursorPosition,
        selectionEnd
      }
    }) => {
      console.log(\`Key: \${event.code}, Cursor position: \${cursorPosition}, Selection end: \${selectionEnd}\`);
    }} />
    </>,
  name: "Logging IcKeydown"
}`,...w.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <span lang="fr">
      <IcTextField label="Boisson préférée" placeholder="Boisson" helper-text="This textfield will read in french to assistive technologies">
      </IcTextField>
    </span>,
  name: "Internationalisation"
}`,...A.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    backgroundColor: args.theme === "light" ? "white" : args.theme === "dark" ? "var(--ic-color-background-primary-dark)" : "transparent"
  }}>
      <IcTextField debounce={args.debounce} disabled={args.disabled} fullWidth={args.fullWidth} helperText={args.helperText} hideCharCount={args.hideCharCount} hideLabel={args.hideLabel} inputId={args.inputId} inputmode={args.inputmode} label={args.label} max={args.max} maxCharacters={args.maxCharacters} maxCharactersMessage={args.maxCharactersMessage} maxMessage={args.maxMessage} min={args.min} minCharacters={args.minCharacters} minCharactersMessage={args.minCharactersMessage} minMessage={args.minMessage} name={args.name} placeholder={args.placeholder} readonly={args.readonly} required={args.required} resize={args.resize} rows={args.rows} size={args.size} spellcheck={args.spellcheck} theme={args.theme} type={args.type} validationAriaLive={args.validationAriaLive} validationInline={args.validationInline} validationStatus={args.validationStatus === "no status" ? "" : args.validationStatus} validationText={args.validationText} value={args.value} onIcChange={ev => console.log(ev.detail.value)}>
        {args.showIconSlot && <SlottedSVG slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
          </SlottedSVG>}
      </IcTextField>
    </div>,
  args: defaultArgs,
  argTypes: {
    inputmode: {
      options: ["none", "text", "tel", "url", "email", "numeric", "decimal", "search"],
      control: {
        type: "select"
      }
    },
    size: {
      options: ["medium", "small"],
      control: {
        type: "inline-radio"
      }
    },
    type: {
      options: ["email", "password", "tel", "text", "url", "number", "search"],
      control: {
        type: "select"
      }
    },
    validationAriaLive: {
      options: ["default", "polite", "assertive", "off"],
      control: {
        type: "inline-radio"
      }
    },
    validationStatus: {
      options: ["no status", "warning", "error", "success"],
      control: {
        type: "select"
      }
    },
    showIconSlot: {
      control: {
        type: "boolean"
      }
    },
    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: "inline-radio"
      }
    }
  },
  name: "Playground"
}`,...W.parameters?.docs?.source}}};const G=["Default","Autofocus","PlaceholderAndRequired","HelperText","WithIcon","WithValue","WithNullValue","WithUndefinedValue","FullWidth","Disabled","ReadOnly","Validation","AriaLiveBehaviour","TextAreaWithResize","Controlled","Uncontrolled_","MinAndMax","MaximumAndMinimumCharacters","HiddenInput_","LoggingIcKeydown","Internationalisation","Playground"],U=Object.freeze(Object.defineProperty({__proto__:null,AriaLiveBehaviour:v,Autofocus:n,Controlled:y,Default:i,Disabled:f,FullWidth:p,HelperText:s,HiddenInput_:E,Internationalisation:A,LoggingIcKeydown:w,MaximumAndMinimumCharacters:I,MinAndMax:S,PlaceholderAndRequired:c,Playground:W,ReadOnly:b,TextAreaWithResize:T,Uncontrolled_:g,Validation:x,WithIcon:u,WithNullValue:h,WithUndefinedValue:m,WithValue:d,__namedExportsOrder:G,default:B},Symbol.toStringTag,{value:"Module"}));export{U as I};
