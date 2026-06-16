import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{B as r,O as i,in as a,lt as o,t as s,tt as c,u as l,ut as u,z as d}from"./iframe-C08mFgC2.js";var f=e({AdditionalFieldRendering:()=>z,AriaLiveBehaviour:()=>N,ConditionalDynamic:()=>O,ConditionalStatic:()=>k,Controlled_:()=>L,Default:()=>w,Disabled:()=>D,DynamicLoading:()=>F,Form_:()=>P,HelperText:()=>A,Horizontal:()=>T,Playground:()=>B,Required:()=>E,Sizes:()=>j,Uncontrolled_:()=>R,UpdatingOptions:()=>I,Validation:()=>M,__namedExportsOrder:()=>V,default:()=>C}),p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H=t((()=>{p=n(a()),u(),m=s(),h=()=>{let e=e=>{e.preventDefault(),console.log(`Form value: `,document.querySelector(`input[name='1']`).value)};return(0,m.jsxs)(`form`,{onSubmit:t=>e(t),children:[(0,m.jsxs)(d,{label:`This is a label`,name:`1`,children:[(0,m.jsx)(r,{value:`valueName1`,label:`Unselected / Default`}),(0,m.jsx)(r,{value:`valueName2`,label:`Selected / Default`}),(0,m.jsx)(r,{value:`valueName3`,label:`Unselected / Disabled`,disabled:!0})]}),(0,m.jsx)(`input`,{type:`submit`,value:`Submit`}),(0,m.jsx)(`input`,{type:`reset`,value:`Reset`})]})},g=()=>{let[e,t]=(0,p.useState)([]);return(0,p.useEffect)(()=>{setTimeout(()=>{t([{label:`Item 1`,value:`Item 1`},{label:`Item 2`,value:`Item 2`},{label:`Item 3`,value:`Item 3`},{label:`Item 4`,value:`Item 4`}])},3e3)},[]),(0,m.jsx)(d,{label:`What is your favourite coffee?`,name:`radio-group-1`,children:e.map((e,t)=>(0,m.jsx)(r,{value:e.value,label:e.label},t+e.value))})},_=()=>{let[e,t]=(0,p.useState)([{label:`Item 1`,value:`Item 1`},{label:`Item 2`,value:`Item 2`},{label:`Item 3`,value:`Item 3`},{label:`Item 4`,value:`Item 4`}]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(d,{label:`What is your favourite coffee?`,name:`radio-group-1`,children:e.map((e,t)=>(0,m.jsx)(r,{value:e.value,label:e.label},t+e.value))}),(0,m.jsx)(`br`,{}),(0,m.jsx)(l,{onClick:()=>{t([{label:`Item 5`,value:`Item 5`},{label:`Item 6`,value:`Item 6`}])},children:`Update`})]})},v=()=>{let[e,t]=(0,p.useState)(!0);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r,{selected:e,label:`Label`,value:`valueName1`}),(0,m.jsx)(l,{variant:`primary`,onClick:()=>{t(!1)},children:`Unselected`}),(0,m.jsx)(l,{variant:`primary`,onClick:()=>{t(!0)},children:`Selected`})]})},y=()=>{let e=(0,p.useRef)();return(0,m.jsxs)(d,{label:`This is a label`,name:`1`,children:[(0,m.jsx)(r,{ref:e,value:`valueName1`,label:`Unselected / Default`,onIcSelectedChange:()=>{console.log(e.current.selected)}}),(0,m.jsx)(r,{value:`valueName2`,label:`Selected / Default`,selected:!0})]})},b=()=>{let[e,t]=(0,p.useState)(!1);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(d,{label:`What is your favourite coffee?`,name:`radio-group-1`,children:[(0,m.jsx)(r,{value:`Item 1`,label:`Item 1`}),(0,m.jsx)(r,{value:`Item 2`,label:`Item 2 - has conditional field`,additionalFieldDisplay:e?`dynamic`:`static`,children:e&&(0,m.jsx)(c,{slot:`additional-field`,placeholder:`Placeholder`,label:`What is your favourite coffee?`})}),(0,m.jsx)(r,{value:`Item 3`,label:`Item 3`}),(0,m.jsx)(r,{value:`Item 4`,label:`Item 4`})]}),(0,m.jsx)(`br`,{}),(0,m.jsx)(l,{onClick:()=>{t(!e)},children:`Toggle additional`})]})},x=()=>{let[e,t]=(0,p.useState)(!1),[n,i]=(0,p.useState)(!1);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(d,{id:`field-1`,label:`This is a label`,name:`1`,helperText:`Error already set on page load and aria-live overridden as 'assertive'`,validationStatus:e?``:`error`,validationText:e?``:`First error message`,validationAriaLive:`assertive`,children:[(0,m.jsx)(r,{value:`valueName1`,label:`Unselected / Default 1`}),(0,m.jsx)(r,{value:`valueName2`,label:`Selected / Default 1`,selected:!0}),(0,m.jsx)(r,{value:`valueName3`,label:`Unselected / Disabled 1`,disabled:!0})]}),(0,m.jsx)(`br`,{}),(0,m.jsxs)(d,{id:`field-2`,label:`This is a label`,name:`2`,helperText:`Error set after page load and aria-live overridden as 'assertive'`,validationStatus:e?`error`:``,validationText:e?`Second error message`:``,validationAriaLive:`assertive`,children:[(0,m.jsx)(r,{value:`valueName1`,label:`Unselected / Default 2`}),(0,m.jsx)(r,{value:`valueName2`,label:`Selected / Default 2`,selected:!0}),(0,m.jsx)(r,{value:`valueName3`,label:`Unselected / Disabled 2`,disabled:!0})]}),(0,m.jsx)(`br`,{}),(0,m.jsx)(l,{onClick:()=>t(!e),children:`Toggle errors`}),(0,m.jsx)(`br`,{}),(0,m.jsx)(`br`,{}),(0,m.jsx)(`br`,{}),(0,m.jsx)(`br`,{}),(0,m.jsxs)(d,{id:`field-3`,label:`This is a label`,name:`3`,helperText:`Default aria-live behaviour (i.e. 'polite')`,validationStatus:n?`error`:``,validationText:n?`Third error message`:``,children:[(0,m.jsx)(r,{value:`valueName1`,label:`Unselected / Default 3`}),(0,m.jsx)(r,{value:`valueName2`,label:`Selected / Default 3`,selected:!0}),(0,m.jsx)(r,{value:`valueName3`,label:`Unselected / Disabled 3`,disabled:!0})]}),(0,m.jsx)(`br`,{}),(0,m.jsxs)(d,{id:`field-4`,label:`This is a label`,name:`4`,helperText:`Default aria-live behaviour (i.e. 'polite')`,validationStatus:n?`error`:``,validationText:n?`Fourth error message`:``,children:[(0,m.jsx)(r,{value:`valueName1`,label:`Unselected / Default 4`}),(0,m.jsx)(r,{value:`valueName2`,label:`Selected / Default 4`,selected:!0}),(0,m.jsx)(r,{value:`valueName3`,label:`Unselected / Disabled 4`,disabled:!0})]}),(0,m.jsx)(`br`,{}),(0,m.jsx)(l,{onClick:()=>i(!n),children:`Toggle errors`}),(0,m.jsx)(`br`,{}),(0,m.jsx)(`br`,{}),(0,m.jsx)(`br`,{}),(0,m.jsx)(`br`,{}),(0,m.jsx)(`br`,{})]})},S={disabled:!1,helperText:`Some helper text`,hideLabel:!1,label:`This is a label`,name:`1`,orientation:`vertical`,required:!1,size:`medium`,validationAriaLive:`polite`,validationStatus:`no status`,validationText:``,additionalFieldDisplay:`static`,radioDisabled:!1,dynamicText:`This selection requires additional answers`,radioLabel:`Radio 1`,radioName:`radio1`,value:`valueName1`,selected:!1,additionalFieldSlot:!0,theme:`inherit`},C={title:`Radio button`,component:d},w={render:()=>(0,m.jsxs)(d,{label:`This is a label`,name:`1`,children:[(0,m.jsx)(r,{value:`valueName1`,label:`Unselected / Default`}),(0,m.jsx)(r,{value:`valueName2`,label:`Selected / Default`,selected:!0}),(0,m.jsx)(r,{value:`valueName3`,label:`Unselected / Disabled`,disabled:!0})]}),name:`Default`},T={render:()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(d,{orientation:`horizontal`,label:`This should be horizontal`,name:`1`,children:[(0,m.jsx)(r,{value:`valueName1`,label:`Selected / Default`,selected:!0}),(0,m.jsx)(r,{value:`valueName2`,label:`Unselected / Default`})]}),(0,m.jsx)(`br`,{}),(0,m.jsx)(`p`,{children:`Horizontal orientation is overridden with 2 radio options`}),(0,m.jsx)(`br`,{}),(0,m.jsxs)(d,{orientation:`horizontal`,label:`This should be vertical`,name:`2`,children:[(0,m.jsx)(r,{value:`valueNameA`,label:`First`,selected:!0}),(0,m.jsx)(r,{value:`valueNameB`,label:`Second`}),(0,m.jsx)(r,{value:`valueNameC`,label:`Third`})]})]}),name:`Horizontal`},E={render:()=>(0,m.jsxs)(d,{label:`This is a label`,required:!0,name:`1`,children:[(0,m.jsx)(r,{value:`valueName1`,label:`Unselected / Default`}),(0,m.jsx)(r,{value:`valueName2`,label:`Selected / Default`,selected:!0}),(0,m.jsx)(r,{value:`valueName3`,label:`Unselected / Disabled`,disabled:!0})]}),name:`Required`},D={render:()=>(0,m.jsxs)(d,{label:`This is a label`,name:`1`,children:[(0,m.jsx)(r,{value:`valueName1`,label:`Unselected / Disabled 1`,disabled:!0}),(0,m.jsx)(r,{value:`valueName2`,label:`Unselected / Disabled 2`,disabled:!0}),(0,m.jsx)(r,{value:`valueName3`,label:`Unselected / Disabled 3`,disabled:!0}),(0,m.jsx)(r,{value:`valueName4`,label:`Selected / Disabled`,disabled:!0,selected:!0})]}),name:`Disabled`},O={render:()=>(0,m.jsxs)(d,{label:`Conditional dynamic`,name:`1`,onIcChange:e=>console.log(e.detail.selectedOption),children:[(0,m.jsx)(r,{additionalFieldDisplay:`dynamic`,value:`valueName1`,label:`Option with Radio as conditional slotted additional field`,children:(0,m.jsxs)(d,{slot:`additional-field`,helperText:`Child Group Helper Text`,label:`Children`,name:`radio-group-2`,children:[(0,m.jsx)(r,{label:`child-option-1`,value:`child-option-1`},`child-option-1`),(0,m.jsx)(r,{label:`child-option-2`,value:`child-option-2`},`child-option-2`)]})}),(0,m.jsx)(r,{additionalFieldDisplay:`dynamic`,value:`valueName2`,label:`Option with Text-field as conditional slotted additional field`,children:(0,m.jsx)(c,{validationStatus:`error`,validationText:`Now it has really gone to (coffee) pot`,slot:`additional-field`,placeholder:`Placeholder`,label:`What's your favourite type of coffee? `})}),(0,m.jsx)(r,{additionalFieldDisplay:`dynamic`,value:`valueName3`,label:`option3 - clickable component`,children:(0,m.jsx)(l,{slot:`additional-field`,onClick:()=>alert(`Button clicked!`),children:`Click me for an alert!`})})]}),name:`Conditional dynamic`},k={render:()=>(0,m.jsxs)(d,{label:`Conditional static`,name:`1`,children:[(0,m.jsx)(r,{value:`valueName1`,label:`option1`,children:(0,m.jsx)(c,{slot:`additional-field`,label:`What's your favourite type of coffee?`})}),(0,m.jsx)(r,{value:`valueName2`,label:`option2`,children:(0,m.jsxs)(d,{slot:`additional-field`,helperText:`Child Group Helper Text`,label:`Children`,name:`radio-group-2`,children:[(0,m.jsx)(r,{label:`child-option-1`,value:`child-option-1`},`child-option-1`),(0,m.jsx)(r,{label:`child-option-2`,value:`child-option-2`},`child-option-2`)]})})]}),name:`Conditional static`},A={render:()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(d,{label:`Pick your coffee`,name:`1`,helperText:`Helper text provided by prop`,children:[(0,m.jsx)(r,{value:`valueName1`,label:`Mocha`}),(0,m.jsx)(r,{value:`valueName2`,label:`Americano`,selected:!0}),(0,m.jsx)(r,{value:`valueName3`,label:`Tea`,disabled:!0})]}),(0,m.jsx)(`br`,{}),(0,m.jsxs)(d,{label:`This is a label`,name:`2`,children:[(0,m.jsx)(o,{variant:`caption`,slot:`helper-text`,children:(0,m.jsxs)(`span`,{children:[`Slotted helper text with a `,(0,m.jsx)(i,{href:`#`,children:`helpful link to guidance`})]})}),(0,m.jsx)(r,{value:`valueName1`,label:`Flat White`}),(0,m.jsx)(r,{value:`valueName2`,label:`Espresso`,selected:!0}),(0,m.jsx)(r,{value:`valueName3`,label:`Orange Juice`,disabled:!0})]})]}),name:`Helper text`},j={render:()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(d,{label:`This is a radio group with small radio options`,name:`1`,size:`small`,children:[(0,m.jsx)(r,{value:`valueName1`,label:`Unselected / Default`}),(0,m.jsx)(r,{value:`valueName2`,label:`Selected / Default`,selected:!0}),(0,m.jsx)(r,{value:`valueName3`,label:`Unselected / Disabled`,disabled:!0})]}),(0,m.jsxs)(d,{label:`This is a radio group with default-sized radio options`,name:`2`,size:`medium`,children:[(0,m.jsx)(r,{value:`valueName1`,label:`Unselected / Default`}),(0,m.jsx)(r,{value:`valueName2`,label:`Selected / Default`,selected:!0}),(0,m.jsx)(r,{value:`valueName3`,label:`Unselected / Disabled`,disabled:!0})]}),(0,m.jsxs)(d,{label:`This is a radio group with large radio options`,name:`3`,size:`large`,children:[(0,m.jsx)(r,{value:`valueName1`,label:`Unselected / Default`}),(0,m.jsx)(r,{value:`valueName2`,label:`Selected / Default`,selected:!0}),(0,m.jsx)(r,{value:`valueName3`,label:`Unselected / Disabled`,disabled:!0})]})]})},M={render:()=>(0,m.jsxs)(d,{label:`This is a label`,name:`1`,validationStatus:`error`,validationText:`Error message`,children:[(0,m.jsx)(r,{value:`valueName1`,label:`Unselected / Default`}),(0,m.jsx)(r,{value:`valueName2`,label:`Selected / Default`,selected:!0}),(0,m.jsx)(r,{value:`valueName3`,label:`Unselected / Disabled`,disabled:!0})]}),name:`Validation`},N={render:()=>(0,m.jsx)(x,{}),name:`Aria-live behaviour`},P={render:()=>(0,m.jsx)(h,{}),name:`Form`},F={render:()=>(0,m.jsx)(g,{}),name:`Dynamic loading`},I={render:()=>(0,m.jsx)(_,{}),name:`Updating options`},L={render:()=>(0,m.jsx)(v,{}),name:`Controlled`},R={render:()=>(0,m.jsx)(y,{}),name:`Uncontrolled`},z={render:()=>(0,m.jsx)(b,{}),name:`Additional field rendering`},B={render:e=>(0,m.jsxs)(d,{label:e.label,name:e.name,orientation:e.orientation,required:e.required,size:e.size,validationAriaLive:e.validationAriaLive,validationStatus:e.validationStatus===`no status`?``:e.validationStatus,validationText:e.validationText,helperText:e.helperText,disabled:e.disabled,hideLabel:e.hideLabel,theme:e.theme,children:[(0,m.jsx)(r,{additionalFieldDisplay:e.additionalFieldDisplay,value:e.value,label:e.radioLabel,name:e.radioName,selected:e.selected,disabled:e.radioDisabled,dynamicText:e.dynamicText,children:(0,m.jsx)(c,{slot:e.additionalFieldSlot,placeholder:`Placeholder`,label:`What's your favourite type of coffee?`})}),(0,m.jsx)(r,{value:`valueName2`,label:`Radio 2`})]}),args:S,argTypes:{orientation:{options:[`vertical`,`horizontal`],control:{type:`inline-radio`}},size:{options:[`small`,`medium`,`large`],control:{type:`inline-radio`}},validationAriaLive:{options:[`polite`,`assertive`,`off`],control:{type:`inline-radio`}},validationStatus:{options:[`no status`,`error`,`warning`,`success`],control:{type:`radio`}},additionalFieldDisplay:{options:[`static`,`dynamic`],control:{type:`inline-radio`}},additionalFieldSlot:{mapping:{true:`additional-field`,false:``}},theme:{options:[`inherit`,`light`,`dark`],control:{type:`inline-radio`}}},name:`Playground`},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <IcRadioGroup label="This is a label" name="1">
      <IcRadioOption value="valueName1" label="Unselected / Default" />
      <IcRadioOption value="valueName2" label="Selected / Default" selected />
      <IcRadioOption value="valueName3" label="Unselected / Disabled" disabled />
    </IcRadioGroup>,
  name: "Default"
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <IcRadioGroup label="This is a label" required name="1">
      <IcRadioOption value="valueName1" label="Unselected / Default" />
      <IcRadioOption value="valueName2" label="Selected / Default" selected />
      <IcRadioOption value="valueName3" label="Unselected / Disabled" disabled />
    </IcRadioGroup>,
  name: "Required"
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <IcRadioGroup label="This is a label" name="1">
      <IcRadioOption value="valueName1" label="Unselected / Disabled 1" disabled />
      <IcRadioOption value="valueName2" label="Unselected / Disabled 2" disabled />
      <IcRadioOption value="valueName3" label="Unselected / Disabled 3" disabled />
      <IcRadioOption value="valueName4" label="Selected / Disabled" disabled selected />
    </IcRadioGroup>,
  name: "Disabled"
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcRadioGroup label="This is a radio group with small radio options" name="1" size="small">
        <IcRadioOption value="valueName1" label="Unselected / Default" />
        <IcRadioOption value="valueName2" label="Selected / Default" selected />
        <IcRadioOption value="valueName3" label="Unselected / Disabled" disabled />
      </IcRadioGroup>
      <IcRadioGroup label="This is a radio group with default-sized radio options" name="2" size="medium">
        <IcRadioOption value="valueName1" label="Unselected / Default" />
        <IcRadioOption value="valueName2" label="Selected / Default" selected />
        <IcRadioOption value="valueName3" label="Unselected / Disabled" disabled />
      </IcRadioGroup>
      <IcRadioGroup label="This is a radio group with large radio options" name="3" size="large">
        <IcRadioOption value="valueName1" label="Unselected / Default" />
        <IcRadioOption value="valueName2" label="Selected / Default" selected />
        <IcRadioOption value="valueName3" label="Unselected / Disabled" disabled />
      </IcRadioGroup>
    </>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <IcRadioGroup label="This is a label" name="1" validationStatus="error" validationText="Error message">
      <IcRadioOption value="valueName1" label="Unselected / Default" />
      <IcRadioOption value="valueName2" label="Selected / Default" selected />
      <IcRadioOption value="valueName3" label="Unselected / Disabled" disabled />
    </IcRadioGroup>,
  name: "Validation"
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <AriaLiveBehaviourExample />,
  name: "Aria-live behaviour"
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <Form />,
  name: "Form"
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <RadioOptionsDynamic />,
  name: "Dynamic loading"
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <RadioOptionsUpdate />,
  name: "Updating options"
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <Controlled />,
  name: "Controlled"
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <Uncontrolled />,
  name: "Uncontrolled"
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <RadioOptionsAdditional />,
  name: "Additional field rendering"
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
      options: ["small", "medium", "large"],
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
}`,...B.parameters?.docs?.source}}},V=[`Default`,`Horizontal`,`Required`,`Disabled`,`ConditionalDynamic`,`ConditionalStatic`,`HelperText`,`Sizes`,`Validation`,`AriaLiveBehaviour`,`Form_`,`DynamicLoading`,`UpdatingOptions`,`Controlled_`,`Uncontrolled_`,`AdditionalFieldRendering`,`Playground`]}));H();export{z as AdditionalFieldRendering,N as AriaLiveBehaviour,O as ConditionalDynamic,k as ConditionalStatic,L as Controlled_,w as Default,D as Disabled,F as DynamicLoading,P as Form_,A as HelperText,T as Horizontal,B as Playground,E as Required,j as Sizes,R as Uncontrolled_,I as UpdatingOptions,M as Validation,V as __namedExportsOrder,C as default,H as n,f as t};