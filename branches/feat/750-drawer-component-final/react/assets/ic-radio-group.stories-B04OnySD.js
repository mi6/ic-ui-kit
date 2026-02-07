import{G as t,R as e,H as a,E as T,f as d,a as x,o as U,r}from"./iframe-AqfiZTAe.js";const C=()=>{const l=i=>{i.preventDefault(),console.log("Form value: ",document.querySelector("input[name='1']").value)};return e.createElement("form",{onSubmit:i=>l(i)},e.createElement(t,{label:"This is a label",name:"1"},e.createElement(a,{value:"valueName1",label:"Unselected / Default"}),e.createElement(a,{value:"valueName2",label:"Selected / Default"}),e.createElement(a,{value:"valueName3",label:"Unselected / Disabled",disabled:!0})),e.createElement("input",{type:"submit",value:"Submit"}),e.createElement("input",{type:"reset",value:"Reset"}))},F=()=>{const[l,i]=r.useState([]);return r.useEffect(()=>{setTimeout(()=>{i([{label:"Item 1",value:"Item 1"},{label:"Item 2",value:"Item 2"},{label:"Item 3",value:"Item 3"},{label:"Item 4",value:"Item 4"}])},3e3)},[]),e.createElement(t,{label:"What is your favourite coffee?",name:"radio-group-1"},l.map((n,o)=>e.createElement(a,{key:o+n.value,value:n.value,label:n.label})))},k=()=>{const[l,i]=r.useState([{label:"Item 1",value:"Item 1"},{label:"Item 2",value:"Item 2"},{label:"Item 3",value:"Item 3"},{label:"Item 4",value:"Item 4"}]),n=()=>{i([{label:"Item 5",value:"Item 5"},{label:"Item 6",value:"Item 6"}])};return e.createElement(e.Fragment,null,e.createElement(t,{label:"What is your favourite coffee?",name:"radio-group-1"},l.map((o,O)=>e.createElement(a,{key:O+o.value,value:o.value,label:o.label}))),e.createElement("br",null),e.createElement(d,{onClick:n},"Update"))},G=()=>{const[l,i]=r.useState(!0),n=()=>{i(!1)},o=()=>{i(!0)};return e.createElement(e.Fragment,null,e.createElement(a,{selected:l,label:"Label",value:"valueName1"}),e.createElement(d,{variant:"primary",onClick:n},"Unselected"),e.createElement(d,{variant:"primary",onClick:o},"Selected"))},A=()=>{const l=r.useRef(),i=()=>{console.log(l.current.selected)};return e.createElement(t,{label:"This is a label",name:"1"},e.createElement(a,{ref:l,value:"valueName1",label:"Unselected / Default",onIcSelectedChange:i}),e.createElement(a,{value:"valueName2",label:"Selected / Default",selected:!0}))},z=()=>{const[l,i]=r.useState(!1),n=()=>{i(!l)};return e.createElement(e.Fragment,null,e.createElement(t,{label:"What is your favourite coffee?",name:"radio-group-1"},e.createElement(a,{value:"Item 1",label:"Item 1"}),e.createElement(a,{value:"Item 2",label:"Item 2 - has conditional field",additionalFieldDisplay:l?"dynamic":"static"},l&&e.createElement(T,{slot:"additional-field",placeholder:"Placeholder",label:"What is your favourite coffee?"})),e.createElement(a,{value:"Item 3",label:"Item 3"}),e.createElement(a,{value:"Item 4",label:"Item 4"})),e.createElement("br",null),e.createElement(d,{onClick:n},"Toggle additional"))},L=()=>{const[l,i]=r.useState(!1),[n,o]=r.useState(!1);return e.createElement(e.Fragment,null,e.createElement(t,{id:"field-1",label:"This is a label",name:"1",helperText:"Error already set on page load and aria-live overridden as 'assertive'",validationStatus:l?"":"error",validationText:l?"":"First error message",validationAriaLive:"assertive"},e.createElement(a,{value:"valueName1",label:"Unselected / Default 1"}),e.createElement(a,{value:"valueName2",label:"Selected / Default 1",selected:!0}),e.createElement(a,{value:"valueName3",label:"Unselected / Disabled 1",disabled:!0})),e.createElement("br",null),e.createElement(t,{id:"field-2",label:"This is a label",name:"2",helperText:"Error set after page load and aria-live overridden as 'assertive'",validationStatus:l?"error":"",validationText:l?"Second error message":"",validationAriaLive:"assertive"},e.createElement(a,{value:"valueName1",label:"Unselected / Default 2"}),e.createElement(a,{value:"valueName2",label:"Selected / Default 2",selected:!0}),e.createElement(a,{value:"valueName3",label:"Unselected / Disabled 2",disabled:!0})),e.createElement("br",null),e.createElement(d,{onClick:()=>i(!l)},"Toggle errors"),e.createElement("br",null),e.createElement("br",null),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{id:"field-3",label:"This is a label",name:"3",helperText:"Default aria-live behaviour (i.e. 'polite')",validationStatus:n?"error":"",validationText:n?"Third error message":""},e.createElement(a,{value:"valueName1",label:"Unselected / Default 3"}),e.createElement(a,{value:"valueName2",label:"Selected / Default 3",selected:!0}),e.createElement(a,{value:"valueName3",label:"Unselected / Disabled 3",disabled:!0})),e.createElement("br",null),e.createElement(t,{id:"field-4",label:"This is a label",name:"4",helperText:"Default aria-live behaviour (i.e. 'polite')",validationStatus:n?"error":"",validationText:n?"Fourth error message":""},e.createElement(a,{value:"valueName1",label:"Unselected / Default 4"}),e.createElement(a,{value:"valueName2",label:"Selected / Default 4",selected:!0}),e.createElement(a,{value:"valueName3",label:"Unselected / Disabled 4",disabled:!0})),e.createElement("br",null),e.createElement(d,{onClick:()=>o(!n)},"Toggle errors"),e.createElement("br",null),e.createElement("br",null),e.createElement("br",null),e.createElement("br",null),e.createElement("br",null))},w={disabled:!1,helperText:"Some helper text",hideLabel:!1,label:"This is a label",name:"1",orientation:"vertical",required:!1,size:"medium",validationAriaLive:"polite",validationStatus:"no status",validationText:"",additionalFieldDisplay:"static",radioDisabled:!1,dynamicText:"This selection requires additional answers",radioLabel:"Radio 1",radioName:"radio1",value:"valueName1",selected:!1,additionalFieldSlot:!0,theme:"inherit"},H={title:"Radio button",component:t},c={render:()=>e.createElement(t,{label:"This is a label",name:"1"},e.createElement(a,{value:"valueName1",label:"Unselected / Default"}),e.createElement(a,{value:"valueName2",label:"Selected / Default",selected:!0}),e.createElement(a,{value:"valueName3",label:"Unselected / Disabled",disabled:!0})),name:"Default"},s={render:()=>e.createElement(e.Fragment,null,e.createElement(t,{orientation:"horizontal",label:"This should be horizontal",name:"1"},e.createElement(a,{value:"valueName1",label:"Selected / Default",selected:!0}),e.createElement(a,{value:"valueName2",label:"Unselected / Default"})),e.createElement("br",null),e.createElement("p",null,"Horizontal orientation is overridden with 2 radio options"),e.createElement("br",null),e.createElement(t,{orientation:"horizontal",label:"This should be vertical",name:"2"},e.createElement(a,{value:"valueNameA",label:"First",selected:!0}),e.createElement(a,{value:"valueNameB",label:"Second"}),e.createElement(a,{value:"valueNameC",label:"Third"}))),name:"Horizontal"},u={render:()=>e.createElement(t,{label:"This is a label",required:!0,name:"1"},e.createElement(a,{value:"valueName1",label:"Unselected / Default"}),e.createElement(a,{value:"valueName2",label:"Selected / Default",selected:!0}),e.createElement(a,{value:"valueName3",label:"Unselected / Disabled",disabled:!0})),name:"Required"},m={render:()=>e.createElement(t,{label:"This is a label",name:"1"},e.createElement(a,{value:"valueName1",label:"Unselected / Disabled 1",disabled:!0}),e.createElement(a,{value:"valueName2",label:"Unselected / Disabled 2",disabled:!0}),e.createElement(a,{value:"valueName3",label:"Unselected / Disabled 3",disabled:!0}),e.createElement(a,{value:"valueName4",label:"Selected / Disabled",disabled:!0,selected:!0})),name:"Disabled"},p={render:()=>e.createElement(t,{label:"Conditional dynamic",name:"1",onIcChange:l=>console.log(l.detail.selectedOption)},e.createElement(a,{additionalFieldDisplay:"dynamic",value:"valueName1",label:"Option with Radio as conditional slotted additional field"},e.createElement(t,{slot:"additional-field",helperText:"Child Group Helper Text",label:"Children",name:"radio-group-2"},e.createElement(a,{key:"child-option-1",label:"child-option-1",value:"child-option-1"}),e.createElement(a,{key:"child-option-2",label:"child-option-2",value:"child-option-2"}))),e.createElement(a,{additionalFieldDisplay:"dynamic",value:"valueName2",label:"Option with Text-field as conditional slotted additional field"},e.createElement(T,{validationStatus:"error",validationText:"Now it has really gone to (coffee) pot",slot:"additional-field",placeholder:"Placeholder",label:"What's your favourite type of coffee? "})),e.createElement(a,{additionalFieldDisplay:"dynamic",value:"valueName3",label:"option3 - clickable component"},e.createElement(d,{slot:"additional-field",onClick:()=>alert("Button clicked!")},"Click me for an alert!"))),name:"Conditional dynamic"},v={render:()=>e.createElement(t,{label:"Conditional static",name:"1"},e.createElement(a,{value:"valueName1",label:"option1"},e.createElement(T,{slot:"additional-field",label:"What's your favourite type of coffee?"})),e.createElement(a,{value:"valueName2",label:"option2"},e.createElement(t,{slot:"additional-field",helperText:"Child Group Helper Text",label:"Children",name:"radio-group-2"},e.createElement(a,{key:"child-option-1",label:"child-option-1",value:"child-option-1"}),e.createElement(a,{key:"child-option-2",label:"child-option-2",value:"child-option-2"})))),name:"Conditional static"},b={render:()=>e.createElement(e.Fragment,null,e.createElement(t,{label:"Pick your coffee",name:"1",helperText:"Helper text provided by prop"},e.createElement(a,{value:"valueName1",label:"Mocha"}),e.createElement(a,{value:"valueName2",label:"Americano",selected:!0}),e.createElement(a,{value:"valueName3",label:"Tea",disabled:!0})),e.createElement("br",null),e.createElement(t,{label:"This is a label",name:"2"},e.createElement(x,{variant:"caption",slot:"helper-text"},e.createElement("span",null,"Slotted helper text with a ",e.createElement(U,{href:"#"},"helpful link to guidance"))),e.createElement(a,{value:"valueName1",label:"Flat White"}),e.createElement(a,{value:"valueName2",label:"Espresso",selected:!0}),e.createElement(a,{value:"valueName3",label:"Orange Juice",disabled:!0}))),name:"Helper text"},h={render:()=>e.createElement(t,{label:"This is a label",name:"1",size:"small"},e.createElement(a,{value:"valueName1",label:"Unselected / Default"}),e.createElement(a,{value:"valueName2",label:"Selected / Default",selected:!0}),e.createElement(a,{value:"valueName3",label:"Unselected / Disabled",disabled:!0})),name:"Size small"},E={render:()=>e.createElement(t,{label:"This is a label",name:"1",validationStatus:"error",validationText:"Error message"},e.createElement(a,{value:"valueName1",label:"Unselected / Default"}),e.createElement(a,{value:"valueName2",label:"Selected / Default",selected:!0}),e.createElement(a,{value:"valueName3",label:"Unselected / Disabled",disabled:!0})),name:"Validation"},f={render:()=>e.createElement(L,null),name:"Aria-live behaviour"},I={render:()=>e.createElement(C,null),name:"Form"},y={render:()=>e.createElement(F,null),name:"Dynamic loading"},R={render:()=>e.createElement(k,null),name:"Updating options"},g={render:()=>e.createElement(G,null),name:"Controlled"},D={render:()=>e.createElement(A,null),name:"Uncontrolled"},N={render:()=>e.createElement(z,null),name:"Additional field rendering"},S={render:l=>e.createElement(t,{label:l.label,name:l.name,orientation:l.orientation,required:l.required,size:l.size,validationAriaLive:l.validationAriaLive,validationStatus:l.validationStatus==="no status"?"":l.validationStatus,validationText:l.validationText,helperText:l.helperText,disabled:l.disabled,hideLabel:l.hideLabel,theme:l.theme},e.createElement(a,{additionalFieldDisplay:l.additionalFieldDisplay,value:l.value,label:l.radioLabel,name:l.radioName,selected:l.selected,disabled:l.radioDisabled,dynamicText:l.dynamicText},e.createElement(T,{slot:l.additionalFieldSlot,placeholder:"Placeholder",label:"What's your favourite type of coffee?"})),e.createElement(a,{value:"valueName2",label:"Radio 2"})),args:w,argTypes:{orientation:{options:["vertical","horizontal"],control:{type:"inline-radio"}},size:{options:["medium","small"],control:{type:"inline-radio"}},validationAriaLive:{options:["polite","assertive","off"],control:{type:"inline-radio"}},validationStatus:{options:["no status","error","warning","success"],control:{type:"radio"}},additionalFieldDisplay:{options:["static","dynamic"],control:{type:"inline-radio"}},additionalFieldSlot:{mapping:{true:"additional-field",false:""}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <IcRadioGroup label="This is a label" name="1">
      <IcRadioOption value="valueName1" label="Unselected / Default" />
      <IcRadioOption value="valueName2" label="Selected / Default" selected />
      <IcRadioOption value="valueName3" label="Unselected / Disabled" disabled />
    </IcRadioGroup>,
  name: "Default"
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <>
    <IcRadioGroup orientation="horizontal" label="This should be horizontal" name="1">
      <IcRadioOption value="valueName1" label="Selected / Default" selected />
      <IcRadioOption value="valueName2" label="Unselected / Default" />
    </IcRadioGroup>
    <br />
    <p>Horizontal orientation is overridden with 2 radio options</p>
    <br />
    <IcRadioGroup orientation="horizontal" label="This should be vertical" name="2">
      <IcRadioOption value="valueNameA" label="First" selected />
      <IcRadioOption value="valueNameB" label="Second" />
      <IcRadioOption value="valueNameC" label="Third" />
    </IcRadioGroup>
    </>,
  name: "Horizontal"
}`,...s.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <IcRadioGroup label="This is a label" required name="1">
      <IcRadioOption value="valueName1" label="Unselected / Default" />
      <IcRadioOption value="valueName2" label="Selected / Default" selected />
      <IcRadioOption value="valueName3" label="Unselected / Disabled" disabled />
    </IcRadioGroup>,
  name: "Required"
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <IcRadioGroup label="This is a label" name="1">
      <IcRadioOption value="valueName1" label="Unselected / Disabled 1" disabled />
      <IcRadioOption value="valueName2" label="Unselected / Disabled 2" disabled />
      <IcRadioOption value="valueName3" label="Unselected / Disabled 3" disabled />
      <IcRadioOption value="valueName4" label="Selected / Disabled" disabled selected />
    </IcRadioGroup>,
  name: "Disabled"
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <IcRadioGroup label="Conditional dynamic" name="1" onIcChange={ev => console.log(ev.detail.selectedOption)}>
      <IcRadioOption additionalFieldDisplay="dynamic" value="valueName1" label="Option with Radio as conditional slotted additional field">
        <IcRadioGroup slot="additional-field" helperText="Child Group Helper Text" label="Children" name="radio-group-2">
          <IcRadioOption key="child-option-1" label="child-option-1" value="child-option-1" />
          <IcRadioOption key="child-option-2" label="child-option-2" value="child-option-2" />
        </IcRadioGroup>
      </IcRadioOption>
      <IcRadioOption additionalFieldDisplay="dynamic" value="valueName2" label="Option with Text-field as conditional slotted additional field">
        <IcTextField validationStatus="error" validationText="Now it has really gone to (coffee) pot" slot="additional-field" placeholder="Placeholder" label="What's your favourite type of coffee? " />
      </IcRadioOption>
      <IcRadioOption additionalFieldDisplay="dynamic" value="valueName3" label="option3 - clickable component">
        <IcButton slot="additional-field" onClick={() => alert("Button clicked!")}>
          Click me for an alert!
        </IcButton>
      </IcRadioOption>
    </IcRadioGroup>,
  name: "Conditional dynamic"
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <IcRadioGroup label="Conditional static" name="1">
      <IcRadioOption value="valueName1" label="option1">
        <IcTextField slot="additional-field" label="What's your favourite type of coffee?" />
      </IcRadioOption>
      <IcRadioOption value="valueName2" label="option2">
        <IcRadioGroup slot="additional-field" helperText="Child Group Helper Text" label="Children" name="radio-group-2">
          <IcRadioOption key="child-option-1" label="child-option-1" value="child-option-1" />
          <IcRadioOption key="child-option-2" label="child-option-2" value="child-option-2" />
        </IcRadioGroup>
      </IcRadioOption>
    </IcRadioGroup>,
  name: "Conditional static"
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <>
    <IcRadioGroup label="Pick your coffee" name="1" helperText="Helper text provided by prop">
      <IcRadioOption value="valueName1" label="Mocha" />
      <IcRadioOption value="valueName2" label="Americano" selected />
      <IcRadioOption value="valueName3" label="Tea" disabled />
    </IcRadioGroup>
    <br />
    <IcRadioGroup label="This is a label" name="2">
      <IcTypography variant="caption" slot="helper-text">
        <span>
          Slotted helper text with a <IcLink href="#">helpful link to guidance</IcLink>
        </span>
      </IcTypography>
      <IcRadioOption value="valueName1" label="Flat White" />
      <IcRadioOption value="valueName2" label="Espresso" selected />
      <IcRadioOption value="valueName3" label="Orange Juice" disabled />
    </IcRadioGroup>
    </>,
  name: "Helper text"
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <IcRadioGroup label="This is a label" name="1" size="small">
      <IcRadioOption value="valueName1" label="Unselected / Default" />
      <IcRadioOption value="valueName2" label="Selected / Default" selected />
      <IcRadioOption value="valueName3" label="Unselected / Disabled" disabled />
    </IcRadioGroup>,
  name: "Size small"
}`,...h.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <IcRadioGroup label="This is a label" name="1" validationStatus="error" validationText="Error message">
      <IcRadioOption value="valueName1" label="Unselected / Default" />
      <IcRadioOption value="valueName2" label="Selected / Default" selected />
      <IcRadioOption value="valueName3" label="Unselected / Disabled" disabled />
    </IcRadioGroup>,
  name: "Validation"
}`,...E.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <AriaLiveBehaviourExample />,
  name: "Aria-live behaviour"
}`,...f.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <Form />,
  name: "Form"
}`,...I.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <RadioOptionsDynamic />,
  name: "Dynamic loading"
}`,...y.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <RadioOptionsUpdate />,
  name: "Updating options"
}`,...R.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Controlled />,
  name: "Controlled"
}`,...g.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <Uncontrolled />,
  name: "Uncontrolled"
}`,...D.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <RadioOptionsAdditional />,
  name: "Additional field rendering"
}`,...N.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <IcRadioGroup label={args.label} name={args.name} orientation={args.orientation} required={args.required} size={args.size} validationAriaLive={args.validationAriaLive} validationStatus={args.validationStatus === "no status" ? "" : args.validationStatus} validationText={args.validationText} helperText={args.helperText} disabled={args.disabled} hideLabel={args.hideLabel} theme={args.theme}>
      <IcRadioOption additionalFieldDisplay={args.additionalFieldDisplay} value={args.value} label={args.radioLabel} name={args.radioName} selected={args.selected} disabled={args.radioDisabled} dynamicText={args.dynamicText}>
        <IcTextField slot={args.additionalFieldSlot} placeholder="Placeholder" label="What's your favourite type of coffee?" />
      </IcRadioOption>
      <IcRadioOption value="valueName2" label="Radio 2" />
    </IcRadioGroup>,
  args: defaultArgs,
  argTypes: {
    orientation: {
      options: ["vertical", "horizontal"],
      control: {
        type: "inline-radio"
      }
    },
    size: {
      options: ["medium", "small"],
      control: {
        type: "inline-radio"
      }
    },
    validationAriaLive: {
      options: ["polite", "assertive", "off"],
      control: {
        type: "inline-radio"
      }
    },
    validationStatus: {
      options: ["no status", "error", "warning", "success"],
      control: {
        type: "radio"
      }
    },
    additionalFieldDisplay: {
      options: ["static", "dynamic"],
      control: {
        type: "inline-radio"
      }
    },
    additionalFieldSlot: {
      mapping: {
        true: "additional-field",
        false: ""
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
}`,...S.parameters?.docs?.source}}};const q=["Default","Horizontal","Required","Disabled","ConditionalDynamic","ConditionalStatic","HelperText","SizeSmall","Validation","AriaLiveBehaviour","Form_","DynamicLoading","UpdatingOptions","Controlled_","Uncontrolled_","AdditionalFieldRendering","Playground"],_=Object.freeze(Object.defineProperty({__proto__:null,AdditionalFieldRendering:N,AriaLiveBehaviour:f,ConditionalDynamic:p,ConditionalStatic:v,Controlled_:g,Default:c,Disabled:m,DynamicLoading:y,Form_:I,HelperText:b,Horizontal:s,Playground:S,Required:u,SizeSmall:h,Uncontrolled_:D,UpdatingOptions:R,Validation:E,__namedExportsOrder:q,default:H},Symbol.toStringTag,{value:"Module"}));export{_ as I};
