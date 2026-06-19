import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{O as r,in as i,lt as a,t as o,tt as s,u as c,ut as l}from"./iframe-rUldN8B1.js";import{n as u,t as d}from"./slottedSVG-DpuzQl4q.js";var f=e({AriaLiveBehaviour:()=>P,Autofocus:()=>C,Controlled:()=>I,Default:()=>S,Disabled:()=>j,FullWidth:()=>A,HelperText:()=>T,HiddenInput_:()=>B,Internationalisation:()=>H,LoggingIcKeydown:()=>V,MaximumAndMinimumCharacters:()=>z,MinAndMax:()=>R,PlaceholderAndRequired:()=>w,Playground:()=>U,ReadOnly:()=>M,TextAreaWithResize:()=>F,Uncontrolled_:()=>L,Validation:()=>N,WithIcon:()=>E,WithNullValue:()=>O,WithUndefinedValue:()=>k,WithValue:()=>D,__namedExportsOrder:()=>W,default:()=>x}),p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G=t((()=>{p=n(i()),l(),u(),m=o(),h=()=>(0,m.jsxs)(d,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,m.jsx)(`path`,{d:`M0 0h24v24H0z`,fill:`none`}),(0,m.jsx)(`path`,{d:`M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z`})]}),g=()=>{let[e,t]=(0,p.useState)(``);return(0,m.jsx)(s,{placeholder:`Controlled`,label:`Controlled`,value:e,onIcChange:e=>{console.log(e.detail.value),t(e.detail.value)}})},_=()=>{let e=(0,p.useRef)();return(0,m.jsx)(s,{ref:e,placeholder:`Uncontrolled`,label:`Uncontrolled`,onIcChange:()=>{console.log(e.current.value)}})},v=()=>{let[e,t]=(0,p.useState)(!0),n=()=>{t(!e)};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{label:`my label`,hiddenInput:e}),(0,m.jsx)(c,{onClick:()=>n(),children:`Toggle hidden input`})]})},y=()=>{let[e,t]=(0,p.useState)(!1),[n,r]=(0,p.useState)(!1);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{label:`What is your favourite coffee?`,helperText:`Error already set on page load`,validationStatus:e?``:`error`,validationText:e?``:`First error message`}),(0,m.jsx)(`br`,{}),(0,m.jsx)(s,{label:`What is your favourite coffee?`,helperText:`Error set after page load`,validationStatus:e?`error`:``,validationText:e?`Second error message`:``}),(0,m.jsx)(`br`,{}),(0,m.jsx)(c,{onClick:()=>t(!e),children:`Toggle errors`}),(0,m.jsx)(`br`,{}),(0,m.jsx)(`br`,{}),(0,m.jsx)(`br`,{}),(0,m.jsx)(`br`,{}),(0,m.jsx)(s,{label:`What is your favourite coffee?`,helperText:`aria-live overridden as 'polite'`,validationAriaLive:`polite`,validationStatus:n?`error`:``,validationText:n?`Third error message`:``}),(0,m.jsx)(`br`,{}),(0,m.jsx)(s,{label:`What is your favourite coffee?`,helperText:`aria-live overridden as 'polite'`,validationAriaLive:`polite`,validationStatus:n?`error`:``,validationText:n?`Fourth error message`:``}),(0,m.jsx)(`br`,{}),(0,m.jsx)(c,{onClick:()=>r(!n),children:`Toggle errors`})]})},b={debounce:0,disabled:!1,fullWidth:!1,helperText:``,hideCharCount:!1,hideLabel:!1,inputId:`ic-text-field-input-0`,inputmode:`text`,label:`Text Field`,max:0,maxCharacters:0,maxCharactersMessage:`Custom max characters validation message`,maxMessage:`Custom max validation message`,min:0,minCharacters:0,minCharactersMessage:`Custom min characters validation message`,minMessage:`Custom min validation message`,name:`0`,placeholder:``,readonly:!1,required:!1,resize:!1,rows:1,size:`medium`,spellcheck:!1,theme:`inherit`,type:`text`,validationAriaLive:`default`,validationInline:!1,validationStatus:`no status`,validationText:``,value:``},x={title:`Text field`,component:s},S={render:()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{label:`What is your favourite coffee?`}),(0,m.jsx)(s,{rows:`6`,label:`What is your favourite coffee?`})]}),name:`Default`},C={render:()=>(0,m.jsx)(s,{label:`What is your favourite coffee?`,autofocus:!0}),name:`Autofocus`},w={render:()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{label:`What is your favourite coffee?`,required:!0,placeholder:`Placeholder`}),(0,m.jsx)(s,{rows:`6`,label:`What is your favourite coffee?`,required:!0,placeholder:`Placeholder`})]}),name:`Placeholder and required`},T={render:()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{label:`What is your favourite coffee?`,required:!0,placeholder:`Placeholder`,helperText:`Such as Arabica, Robusta or Liberica`}),(0,m.jsx)(s,{rows:`6`,label:`What is your favourite coffee?`,required:!0,placeholder:`Placeholder`,helperText:`Such as Arabica, Robusta or Liberica`}),(0,m.jsx)(s,{label:`What is your favourite coffee?`,required:!0,placeholder:`Placeholder`,children:(0,m.jsx)(a,{variant:`caption`,slot:`helper-text`,children:(0,m.jsxs)(`span`,{children:[`Slotted helper text with a `,(0,m.jsx)(r,{href:`#`,children:`link`})]})})})]}),name:`Helper text`},E={render:()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{label:`What is your favourite coffee?`,required:!0,placeholder:`Placeholder`,helperText:`Such as Arabica, Robusta or Liberica`,children:(0,m.jsx)(h,{})}),(0,m.jsx)(s,{rows:`6`,label:`What is your favourite coffee?`,required:!0,placeholder:`Placeholder`,helperText:`Such as Arabica, Robusta or Liberica`,children:(0,m.jsx)(h,{})})]}),name:`With icon`},D={render:()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{value:`Arabica`,label:`What is your favourite coffee?`,required:!0,placeholder:`Placeholder`,helperText:`Such as Arabica, Robusta or Liberica`,children:(0,m.jsx)(h,{})}),(0,m.jsx)(s,{rows:`6`,value:`Arabica`,label:`What is your favourite coffee?`,required:!0,placeholder:`Placeholder`,helperText:`Such as Arabica, Robusta or Liberica`,children:(0,m.jsx)(h,{})})]}),name:`With value`},O={render:()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{value:null,label:`What is your favourite coffee?`,required:!0,placeholder:`Placeholder`,helperText:`Such as Arabica, Robusta or Liberica`,children:(0,m.jsx)(h,{})}),(0,m.jsx)(s,{rows:`6`,value:null,label:`What is your favourite coffee?`,required:!0,placeholder:`Placeholder`,helperText:`Such as Arabica, Robusta or Liberica`,children:(0,m.jsx)(h,{})})]}),name:`With null value`},k={render:()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{value:void 0,label:`What is your favourite coffee?`,required:!0,placeholder:`Placeholder`,helperText:`Such as Arabica, Robusta or Liberica`,children:(0,m.jsx)(h,{})}),(0,m.jsx)(s,{rows:`6`,value:void 0,label:`What is your favourite coffee?`,required:!0,placeholder:`Placeholder`,helperText:`Such as Arabica, Robusta or Liberica`,children:(0,m.jsx)(h,{})})]}),name:`With undefined value`},A={render:()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{fullWidth:`true`,maxCharacters:`25`,value:`Arabica`,label:`What is your favourite coffee?`,required:!0,placeholder:`Placeholder`,helperText:`Such as Arabica, Robusta or Liberica`}),(0,m.jsx)(s,{fullWidth:`true`,rows:`6`,maxCharacters:`25`,value:`Arabica`,label:`What is your favourite coffee?`,required:!0,placeholder:`Placeholder`,helperText:`Such as Arabica, Robusta or Liberica`})]}),name:`Full width`},j={render:()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{disabled:!0,maxCharacters:`25`,value:`Arabica`,label:`What is your favourite coffee?`,required:!0,placeholder:`Placeholder`,helperText:`Such as Arabica, Robusta or Liberica`}),(0,m.jsx)(s,{rows:`6`,disabled:!0,maxCharacters:`25`,value:`Arabica`,label:`What is your favourite coffee?`,required:!0,placeholder:`Placeholder`,helperText:`Such as Arabica, Robusta or Liberica`})]}),name:`Disabled`},M={render:()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{readonly:!0,maxCharacters:`25`,value:`Arabica`,label:`What is your favourite coffee?`,required:!0,placeholder:`Placeholder`,helperText:`Such as Arabica, Robusta or Liberica`}),(0,m.jsx)(s,{rows:`6`,readonly:!0,maxCharacters:`25`,value:`Arabica`,label:`What is your favourite coffee?`,required:!0,placeholder:`Placeholder`,helperText:`Such as Arabica, Robusta or Liberica`})]}),name:`Read only`},N={render:()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{maxCharacters:`25`,value:`Arabica`,label:`What is your favourite coffee?`,required:!0,helperText:`Such as Arabica, Robusta or Liberica`,validationStatus:`success`,validationText:`Good choice!`,children:(0,m.jsx)(h,{})}),(0,m.jsx)(s,{rows:`6`,maxCharacters:`25`,value:`Arabica`,label:`What is your favourite coffee?`,required:!0,helperText:`Such as Arabica, Robusta or Liberica`,validationStatus:`success`,validationText:`Good choice!`,children:(0,m.jsx)(h,{})}),(0,m.jsx)(s,{maxCharacters:`25`,value:`Arabica`,label:`What is your favourite coffee?`,required:!0,helperText:`Such as Arabica, Robusta or Liberica`,validationStatus:`success`,validationText:`Good choice!`,validationInline:!0,children:(0,m.jsx)(h,{})}),(0,m.jsx)(s,{maxCharacters:`25`,size:`small`,value:`Arabica`,label:`What is your favourite coffee?`,required:!0,helperText:`Such as Arabica, Robusta or Liberica`,validationStatus:`success`,validationText:`Good choice!`,validationInline:!0,children:(0,m.jsx)(h,{})}),(0,m.jsx)(s,{maxCharacters:`25`,value:`Arabica`,label:`What is your favourite coffee?`,required:!0,helperText:`Such as Arabica, Robusta or Liberica`,validationStatus:`warning`,validationText:`A very long warning message to test if wrapping works`,children:(0,m.jsx)(h,{})}),(0,m.jsx)(s,{rows:`6`,maxCharacters:`25`,value:`Arabica`,label:`What is your favourite coffee?`,required:!0,helperText:`Such as Arabica, Robusta or Liberica`,validationStatus:`warning`,validationText:`A very long warning message to test if wrapping works`,children:(0,m.jsx)(h,{})}),(0,m.jsx)(s,{maxCharacters:`25`,value:`Tea`,label:`What is your favourite coffee?`,required:!0,helperText:`Such as Arabica, Robusta or Liberica`,validationStatus:`error`,validationText:`Now it has really gone to (coffee) pot`,children:(0,m.jsx)(h,{})}),(0,m.jsx)(s,{rows:`6`,maxCharacters:`25`,value:`Tea`,label:`What is your favourite coffee?`,required:!0,helperText:`Such as Arabica, Robusta or Liberica`,validationStatus:`error`,validationText:`Now it has really gone to (coffee) pot`,children:(0,m.jsx)(h,{})}),(0,m.jsx)(s,{validationStatus:`error`,validationText:`now it has really gone to (coffee) pot`,value:`6`,inputmode:`numeric`,label:`How many coffees do you want?`,helperText:`Our coffee machines have a maximum capacity of 4 coffees at a time.`,type:`number`,min:`1`,max:`4`,required:!0,children:(0,m.jsx)(h,{})}),(0,m.jsx)(s,{validationStatus:`error`,validationText:`now it has really gone to (coffee) pot`,value:`0`,inputmode:`numeric`,label:`How many coffees do you want?`,helperText:`Our coffee machines have a maximum capacity of 4 coffees at a time.`,type:`number`,min:`1`,max:`4`,required:!0,children:(0,m.jsx)(h,{})}),(0,m.jsx)(s,{validationStatus:`error`,validationText:`I'm not familiar with this type of coffee`,validationInlineInternal:`true`,value:`Milkshake`,label:`What is your favourite coffee?`,required:!0,hideLabel:!0,size:`small`,placeholder:`Placeholder`,helperText:`Such as Arabica, Robusta or Liberica`,children:(0,m.jsx)(h,{})}),(0,m.jsx)(s,{validationStatus:`error`,label:`What is your favourite slotted coffee?`,placeholder:`Placeholder`,children:(0,m.jsxs)(a,{variant:`caption`,slot:`validation-text`,children:[`Slotted validation text with a `,(0,m.jsx)(r,{href:`#`,children:`link`})]})})]}),name:`Validation`},P={render:()=>(0,m.jsx)(y,{}),name:`Aria-live behaviour`},F={render:()=>(0,m.jsx)(s,{rows:`6`,maxCharacters:`25`,value:`Arabica`,label:`What is your favourite coffee?`,required:!0,placeholder:`Placeholder`,helperText:`Such as Arabica, Robusta or Liberica`,resize:!0,size:`small`}),name:`Text area with resize`},I={render:()=>(0,m.jsx)(g,{}),name:`Controlled`},L={render:()=>(0,m.jsx)(_,{}),name:`Uncontrolled`},R={render:()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{inputmode:`numeric`,label:`How many coffees do you want?`,type:`number`,min:1,max:4,helperText:`Our coffee machines have a maximum capacity of 4 coffees at a time.`}),(0,m.jsx)(`br`,{}),(0,m.jsx)(s,{inputmode:`numeric`,label:`How many coffees do you want?`,type:`number`,min:1,max:4,minMessage:`You must order at least 1 coffee`,maxMessage:`You cannot order more than 4 coffees`,helperText:`With custom validation messages.`})]}),name:`Min and max`},z={render:()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{maxCharacters:2,label:`What is your favourite coffee?`,helperText:`Short answers only.`}),(0,m.jsx)(s,{maxCharacters:2,label:`What is your favourite coffee?`,helperText:`Short answers only. The character count is hidden.`,hideCharCount:!0}),(0,m.jsx)(s,{minCharacters:3,label:`What is your favourite coffee?`,helperText:`Long answer please.`}),(0,m.jsx)(`br`,{}),(0,m.jsx)(s,{minCharacters:2,maxCharacters:5,minCharactersMessage:`Too short - please type at least 2 characters`,maxCharactersMessage:`5 characters is long enough`,label:`What is your favourite coffee?`,helperText:`Long answer please. (With custom validation messages)`})]}),name:`Maximum and minimum characters`},B={render:()=>(0,m.jsx)(v,{}),name:`Hidden input`},V={render:()=>(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(s,{label:`What is your favourite coffee?`,onIcKeydown:({detail:{event:e,cursorPosition:t,selectionEnd:n}})=>{console.log(`Key: ${e.code}, Cursor position: ${t}, Selection end: ${n}`)}})}),name:`Logging IcKeydown`},H={render:()=>(0,m.jsx)(`span`,{lang:`fr`,children:(0,m.jsx)(s,{label:`Boisson préférée`,placeholder:`Boisson`,"helper-text":`This textfield will read in french to assistive technologies`})}),name:`Internationalisation`},U={render:e=>(0,m.jsx)(`div`,{style:{backgroundColor:e.theme===`light`?`white`:e.theme===`dark`?`var(--ic-color-background-primary-dark)`:`transparent`},children:(0,m.jsx)(s,{debounce:e.debounce,disabled:e.disabled,fullWidth:e.fullWidth,helperText:e.helperText,hideCharCount:e.hideCharCount,hideLabel:e.hideLabel,inputId:e.inputId,inputmode:e.inputmode,label:e.label,max:e.max,maxCharacters:e.maxCharacters,maxCharactersMessage:e.maxCharactersMessage,maxMessage:e.maxMessage,min:e.min,minCharacters:e.minCharacters,minCharactersMessage:e.minCharactersMessage,minMessage:e.minMessage,name:e.name,placeholder:e.placeholder,readonly:e.readonly,required:e.required,resize:e.resize,rows:e.rows,size:e.size,spellcheck:e.spellcheck,theme:e.theme,type:e.type,validationAriaLive:e.validationAriaLive,validationInline:e.validationInline,validationStatus:e.validationStatus===`no status`?``:e.validationStatus,validationText:e.validationText,value:e.value,onIcChange:e=>console.log(e.detail.value),children:e.showIconSlot&&(0,m.jsxs)(d,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,m.jsx)(`path`,{d:`M0 0h24v24H0z`,fill:`none`}),(0,m.jsx)(`path`,{d:`M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z`})]})})}),args:b,argTypes:{inputmode:{options:[`none`,`text`,`tel`,`url`,`email`,`numeric`,`decimal`,`search`],control:{type:`select`}},size:{options:[`medium`,`small`],control:{type:`inline-radio`}},type:{options:[`email`,`password`,`tel`,`text`,`url`,`number`,`search`],control:{type:`select`}},validationAriaLive:{options:[`default`,`polite`,`assertive`,`off`],control:{type:`inline-radio`}},validationStatus:{options:[`no status`,`warning`,`error`,`success`],control:{type:`select`}},showIconSlot:{control:{type:`boolean`}},theme:{options:[`inherit`,`light`,`dark`],control:{type:`inline-radio`}}},name:`Playground`},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <>
          <IcTextField label="What is your favourite coffee?" />
          <IcTextField rows="6" label="What is your favourite coffee?" />
    </>,
  name: "Default"
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <IcTextField label="What is your favourite coffee?" autofocus />,
  name: "Autofocus"
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcTextField label="What is your favourite coffee?" required placeholder="Placeholder" />
    <IcTextField rows="6" label="What is your favourite coffee?" required placeholder="Placeholder" />
    </>,
  name: "Placeholder and required"
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcTextField label="What is your favourite coffee?" required placeholder="Placeholder" helperText="Such as Arabica, Robusta or Liberica">
      <SlottedIcon />
    </IcTextField>
    <IcTextField rows="6" label="What is your favourite coffee?" required placeholder="Placeholder" helperText="Such as Arabica, Robusta or Liberica">
      <SlottedIcon />
    </IcTextField>
    </>,
  name: "With icon"
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcTextField value="Arabica" label="What is your favourite coffee?" required placeholder="Placeholder" helperText="Such as Arabica, Robusta or Liberica">
      <SlottedIcon />
    </IcTextField>
    <IcTextField rows="6" value="Arabica" label="What is your favourite coffee?" required placeholder="Placeholder" helperText="Such as Arabica, Robusta or Liberica">
      <SlottedIcon />
    </IcTextField>
    </>,
  name: "With value"
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcTextField value={null} label="What is your favourite coffee?" required placeholder="Placeholder" helperText="Such as Arabica, Robusta or Liberica">
      <SlottedIcon />
    </IcTextField>
    <IcTextField rows="6" value={null} label="What is your favourite coffee?" required placeholder="Placeholder" helperText="Such as Arabica, Robusta or Liberica">
      <SlottedIcon />
    </IcTextField>
    </>,
  name: "With null value"
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcTextField value={undefined} label="What is your favourite coffee?" required placeholder="Placeholder" helperText="Such as Arabica, Robusta or Liberica">
      <SlottedIcon />
    </IcTextField>
    <IcTextField rows="6" value={undefined} label="What is your favourite coffee?" required placeholder="Placeholder" helperText="Such as Arabica, Robusta or Liberica">
      <SlottedIcon />
    </IcTextField>
    </>,
  name: "With undefined value"
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcTextField fullWidth="true" maxCharacters="25" value="Arabica" label="What is your favourite coffee?" required placeholder="Placeholder" helperText="Such as Arabica, Robusta or Liberica" />
    <IcTextField fullWidth="true" rows="6" maxCharacters="25" value="Arabica" label="What is your favourite coffee?" required placeholder="Placeholder" helperText="Such as Arabica, Robusta or Liberica" />
    </>,
  name: "Full width"
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcTextField disabled maxCharacters="25" value="Arabica" label="What is your favourite coffee?" required placeholder="Placeholder" helperText="Such as Arabica, Robusta or Liberica" />
    <IcTextField rows="6" disabled maxCharacters="25" value="Arabica" label="What is your favourite coffee?" required placeholder="Placeholder" helperText="Such as Arabica, Robusta or Liberica" />
    </>,
  name: "Disabled"
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcTextField readonly maxCharacters="25" value="Arabica" label="What is your favourite coffee?" required placeholder="Placeholder" helperText="Such as Arabica, Robusta or Liberica" />
    <IcTextField rows="6" readonly maxCharacters="25" value="Arabica" label="What is your favourite coffee?" required placeholder="Placeholder" helperText="Such as Arabica, Robusta or Liberica" />
    </>,
  name: "Read only"
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <AriaLiveBehaviourExample />,
  name: "Aria-live behaviour"
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <IcTextField rows="6" maxCharacters="25" value="Arabica" label="What is your favourite coffee?" required placeholder="Placeholder" helperText="Such as Arabica, Robusta or Liberica" resize size="small" />,
  name: "Text area with resize"
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledExample />,
  name: "Controlled"
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <Uncontrolled />,
  name: "Uncontrolled"
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcTextField inputmode="numeric" label="How many coffees do you want?" type="number" min={1} max={4} helperText="Our coffee machines have a maximum capacity of 4 coffees at a time." />
      <br />
      <IcTextField inputmode="numeric" label="How many coffees do you want?" type="number" min={1} max={4} minMessage="You must order at least 1 coffee" maxMessage="You cannot order more than 4 coffees" helperText="With custom validation messages." />
    </>,
  name: "Min and max"
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcTextField maxCharacters={2} label="What is your favourite coffee?" helperText="Short answers only."></IcTextField>
    <IcTextField maxCharacters={2} label="What is your favourite coffee?" helperText="Short answers only. The character count is hidden." hideCharCount></IcTextField>
    <IcTextField minCharacters={3} label="What is your favourite coffee?" helperText="Long answer please."></IcTextField>
    <br />
    <IcTextField minCharacters={2} maxCharacters={5} minCharactersMessage="Too short - please type at least 2 characters" maxCharactersMessage="5 characters is long enough" label="What is your favourite coffee?" helperText="Long answer please. (With custom validation messages)"></IcTextField>
    </>,
  name: "Maximum and minimum characters"
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <HiddenInput />,
  name: "Hidden input"
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <span lang="fr">
      <IcTextField label="Boisson préférée" placeholder="Boisson" helper-text="This textfield will read in french to assistive technologies">
      </IcTextField>
    </span>,
  name: "Internationalisation"
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W=[`Default`,`Autofocus`,`PlaceholderAndRequired`,`HelperText`,`WithIcon`,`WithValue`,`WithNullValue`,`WithUndefinedValue`,`FullWidth`,`Disabled`,`ReadOnly`,`Validation`,`AriaLiveBehaviour`,`TextAreaWithResize`,`Controlled`,`Uncontrolled_`,`MinAndMax`,`MaximumAndMinimumCharacters`,`HiddenInput_`,`LoggingIcKeydown`,`Internationalisation`,`Playground`]}));G();export{P as AriaLiveBehaviour,C as Autofocus,I as Controlled,S as Default,j as Disabled,A as FullWidth,T as HelperText,B as HiddenInput_,H as Internationalisation,V as LoggingIcKeydown,z as MaximumAndMinimumCharacters,R as MinAndMax,w as PlaceholderAndRequired,U as Playground,M as ReadOnly,F as TextAreaWithResize,L as Uncontrolled_,N as Validation,E as WithIcon,O as WithNullValue,k as WithUndefinedValue,D as WithValue,W as __namedExportsOrder,x as default,G as n,f as t};