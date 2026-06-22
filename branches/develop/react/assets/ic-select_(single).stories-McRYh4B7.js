import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{O as r,U as i,in as ee,lt as a,t as te,u as o,ut as ne}from"./iframe-Cvj0onjK.js";import{n as re,t as ie}from"./slottedSVG-BKHJXVFr.js";var ae=e({AriaLiveBehaviour:()=>W,Controlled:()=>J,CustomElements:()=>M,CustomPlaceholder:()=>j,Default:()=>E,DefaultValue:()=>D,Disabled:()=>F,DisabledOptions:()=>I,EmittingIcOptionSelectOnEnter:()=>q,FullWidth:()=>L,Groups:()=>V,HelperText:()=>A,HiddenLabel:()=>R,HiddenOptionLabels:()=>N,Internationalisation:()=>X,LoadingWithError_:()=>K,Playground:()=>Z,ReadOnly:()=>B,Recommended:()=>H,Required:()=>z,ScrollBehaviour:()=>G,Sizes:()=>P,Uncontrolled_:()=>Y,Validation:()=>U,WithClearButton:()=>O,WithDescriptions:()=>k,__namedExportsOrder:()=>Q,default:()=>T}),s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=t((()=>{s=n(ee()),ne(),re(),c=te(),l={disabled:!1,fullWidth:!1,helperText:`Select one option from the list`,hideLabel:!1,loading:!1,loadingLabel:`Loading...`,label:`What is your favourite coffee?`,placeholder:`Select an option`,readonly:!1,required:!1,size:`medium`,validationAriaLive:`polite`,validationStatus:`no status`,validationText:``,showClearButton:!1,theme:`inherit`},u=[{label:`Cappuccino`,value:`Cap`},{label:`Latte`,value:`Lat`},{label:`Americano`,value:`Ame`}],d=[{label:`Chocolat Chaud`,value:`choc`},{label:`Jus`,value:`jus`},{label:`Limonade`,value:`lim`}],f=[{label:`Cappuccino`,value:`Cap`},{label:`Latte`,value:`Lat`,element:{component:`<ic-status-tag label="Success status" status="success"></ic-status-tag>`,ariaLabel:`Success status tag`}},{label:`Americano`,value:`Ame`,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><g><path d="M4.47 20.5037H19.53C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49375C12.96 3.16375 11.04 3.16375 10.27 4.49375L2.74 17.5037C1.97 18.8337 2.93 20.5037 4.47 20.5037ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95375 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95375 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM13 17.5037H11V15.5037H13V17.5037Z" /></g></svg>`}],p=[{label:`Small`,value:`s`,element:{component:`<ic-chip label="Small" size="small"></ic-chip>`,ariaLabel:`small chip`},hideLabel:!0},{label:`Medium size`,value:`m`,element:{component:`<ic-chip label="Medium"></ic-chip>`,ariaLabel:`medium chip`},hideLabel:!0},{label:`Large`,value:`l`,element:{component:`<ic-chip label="Large" size="large"></ic-chip>`,ariaLabel:`large chip`},hideLabel:!0},{label:`Extra Large`,value:`xl`}],m=[{label:`Cappuccino`,value:`Cap`},{label:`Latte`,value:`Lat`,disabled:!0},{label:`Americano`,value:`Ame`}],h=[{label:`Cappuccino`,value:`Cap`,description:`An espresso-based drink traditionally composed of equal parts espresso, steamed milk, and milk foam, creating a balanced flavor and velvety texture`},{label:`Latte`,value:`Lat`,description:`A milkier coffee than a cappuccino`},{label:`Americano`,value:`Ame`,description:`Espresso coffee diluted with hot water`}],g=[{label:`Fancy`,children:[{label:`Cappuccino`,value:`Cap`},{label:`Flat white`,value:`Fla`},{label:`Macchiato`,value:`Mac`}]},{label:`Boring`,children:[{label:`Filter`,value:`Fil`},{label:`Latte`,value:`Lat`},{label:`Americano`,value:`Ame`}]}],_=[{label:`Cappuccino`,value:`Cappuccino`},{label:`Flat white`,value:`Flat white`,recommended:!0},{label:`Latte`,value:`Latte`},{label:`Americano`,value:`Americano`,recommended:!0},{label:`Filter`,value:`Fil`}],v=[{label:`Cappuccino`,value:`Cap`},{label:`Latte`,value:`Lat`},{label:`Americano`,value:`Ame`},{label:`Filter`,value:`Fil`},{label:`Flat white`,value:`Fla`},{label:`Mocha`,value:`Moc`},{label:`Macchiato`,value:`Mac`},{label:`Café au lait`,value:`Caf`},{label:`Espresso`,value:`Esp`},{label:`Cortado`,value:`Cor`},{label:`Ristretto`,value:`Ris`},{label:`Latte macchiato`,value:`Lam`}],y=[{label:`Flat White`,value:`Fla`,htmlProps:{lang:`en-GB`}},{label:`Cappuccino`,value:`Cap`,htmlProps:{lang:`it`}},{label:`Latte`,value:`Lat`,htmlProps:{lang:`it`}},{label:`Americano`,value:`Ame`,htmlProps:{lang:`it`}}],b=[{label:`Cappuccino`,value:`Cap`,description:`An espresso-based drink traditionally composed of equal parts espresso, steamed milk, and milk foam, creating a balanced flavor and velvety texture`},{label:`Boring`,children:[{label:`Latte`,value:`Lat`,description:`A milkier coffee than a cappuccino`},{label:`Filter`,value:`Fil`,description:`Coffee filtered using paper or a mesh`}]},{label:`Fancy`,children:[{label:`Flat white`,value:`Fla`,description:`Coffee without froth made with espresso and hot steamed milk`},{label:`Macchiato`,value:`Mac`,description:`Espresso coffee with a dash of frothy steamed milk`}]},{label:`Americano`,value:`Ame`,description:`Espresso coffee diluted with hot water`},{label:`Mocha`,value:`Moc`,description:`A mixture of coffee and chocolate`}],x=()=>{let e=(0,s.useRef)();return(0,c.jsx)(i,{ref:e,label:`What are your favourite types of coffee?`,options:u,loading:!0,timeout:`1000`,onIcChange:e=>console.log(`icChange: ${e.detail.value}`),onIcRetryLoad:()=>e.current.loading=!0})},S=()=>{let[e,t]=(0,s.useState)(`Cap`);return(0,c.jsx)(i,{placeholder:`Controlled`,label:`Controlled`,options:u,value:e,onIcChange:e=>{console.log(e.detail.value),t(e.detail.value)}})},C=()=>{let e=(0,s.useRef)();return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(i,{ref:e,placeholder:`Uncontrolled`,label:`Uncontrolled`,options:u,onIcChange:()=>{console.log(e.current.value)}})})},w=()=>{let[e,t]=(0,s.useState)(!1),[n,r]=(0,s.useState)(!1);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{label:`What is your favourite coffee?`,helperText:`Error already set on page load and aria-live overridden as 'assertive'`,validationStatus:e?``:`error`,validationText:e?``:`First error message`,validationAriaLive:`assertive`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(i,{label:`What is your favourite coffee?`,helperText:`Error set after page load and aria-live overridden as 'assertive'`,validationStatus:e?`error`:``,validationText:e?`Second error message`:``,validationAriaLive:`assertive`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(o,{onClick:()=>t(!e),children:`Toggle errors`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`br`,{}),(0,c.jsx)(i,{label:`What is your favourite coffee?`,helperText:`Default aria-live behaviour (i.e. 'polite')`,validationStatus:n?`error`:``,validationText:n?`Third error message`:``}),(0,c.jsx)(`br`,{}),(0,c.jsx)(i,{label:`What is your favourite coffee?`,helperText:`Default aria-live behaviour (i.e. 'polite')`,validationStatus:n?`error`:``,validationText:n?`Fourth error message`:``}),(0,c.jsx)(`br`,{}),(0,c.jsx)(o,{onClick:()=>r(!n),children:`Toggle errors`})]})},T={title:`Select/Single`,component:i},E={render:()=>(0,c.jsx)(i,{label:`What is your favourite coffee?`,options:u,onIcChange:e=>console.log(`icChange: ${e.detail.value}`),onIcOptionSelect:e=>console.log(`icOptionSelect: ${e.detail.value}`),onIcOpen:()=>console.log(`select dropdown opened`),onIcClose:()=>console.log(`select dropdown closed`)}),name:`Default`},D={render:()=>(0,c.jsx)(i,{label:`What is your favourite coffee?`,options:u,value:`Cap`,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`Default value`},O={render:()=>(0,c.jsx)(i,{label:`What is your favourite coffee?`,showClearButton:!0,options:u,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`With clear button`},k={render:()=>(0,c.jsx)(i,{label:`What is your favourite coffee?`,options:h,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`With descriptions`},A={render:()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{label:`What is your favourite coffee?`,helperText:`Select one option from the list`,options:u,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),(0,c.jsx)(`br`,{}),(0,c.jsx)(i,{label:`What is your favourite coffee?`,options:u,onIcChange:e=>console.log(`icChange: ${e.detail.value}`),children:(0,c.jsx)(a,{variant:`caption`,slot:`helper-text`,children:(0,c.jsxs)(`span`,{children:[`Slotted helper text with a `,(0,c.jsx)(r,{href:`#`,children:`link`})]})})})]}),name:`Helper text`},j={render:()=>(0,c.jsx)(i,{label:`What is your favourite coffee?`,placeholder:`Placeholder goes here`,options:u,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`Custom placeholder`},M={render:()=>(0,c.jsx)(i,{label:`What is your favourite coffee?`,options:f,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`Custom elements`},N={render:()=>(0,c.jsx)(i,{label:`What is your favourite coffee size?`,options:p,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`Hidden menu option labels`},P={render:()=>(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,c.jsx)(i,{label:`What is your favourite coffee?`,options:u,size:`small`,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),(0,c.jsx)(i,{label:`What is your favourite coffee?`,options:u,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),(0,c.jsx)(i,{label:`What is your favourite coffee?`,options:u,size:`large`,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)})]}),name:`Sizes`},F={render:()=>(0,c.jsx)(i,{label:`What is your favourite coffee?`,disabled:!0,options:u,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`Disabled`},I={render:()=>(0,c.jsx)(i,{label:`What is your favourite coffee?`,options:m,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`Disabled options`},L={render:()=>(0,c.jsx)(i,{label:`What is your favourite coffee?`,fullWidth:!0,options:u,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`Full width`},R={render:()=>(0,c.jsx)(i,{label:`What is your favourite coffee?`,hideLabel:!0,options:u,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`Hidden label`},z={render:()=>(0,c.jsx)(i,{label:`What is your favourite coffee?`,required:!0,options:u,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`Required`},B={render:()=>(0,c.jsx)(i,{label:`What is your favourite coffee?`,readonly:!0,options:u,value:`Cap`,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`Read-only`},V={render:()=>(0,c.jsx)(i,{label:`What is your favourite coffee?`,options:g,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`Groups`},H={render:()=>(0,c.jsx)(i,{label:`What is your favourite coffee?`,options:_,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`Recommended`},U={render:()=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(i,{label:`What is your favourite coffee?`,validationStatus:`success`,validationText:`Coffee available`,options:u,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),(0,c.jsx)(i,{label:`What is your favourite coffee?`,validationStatus:`warning`,validationText:`Only a few left`,options:u,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),(0,c.jsx)(i,{label:`What is your favourite coffee?`,validationStatus:`error`,validationText:`Coffee unavailable`,options:u,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)})]}),name:`Validation`},W={render:()=>(0,c.jsx)(w,{}),name:`Aria-live behaviour`},G={render:()=>(0,c.jsx)(i,{label:`What is your favourite coffee?`,options:v,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`Scroll behaviour`},K={render:()=>(0,c.jsx)(x,{}),name:`Loading with error`},q={render:()=>(0,c.jsx)(i,{label:`What is your favourite coffee?`,options:u,selectOnEnter:!0,onIcOptionSelect:e=>console.log(`icOptionSelect: ${e.detail.value}`)}),name:`Emitting icOptionSelect on enter`},J={render:()=>(0,c.jsx)(S,{}),name:`Controlled`},Y={render:()=>(0,c.jsx)(C,{}),name:`Uncontrolled`},X={render:()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(`p`,{children:[`The first select is wrapped in a `,(0,c.jsx)(`code`,{children:`<span lang="fr">`}),` to change the language. All options will read in french, which can be tested using a screen reader.`]}),(0,c.jsx)(`span`,{lang:`fr`,children:(0,c.jsx)(i,{label:`Boisson Préférée`,options:d})}),(0,c.jsx)(`hr`,{}),(0,c.jsx)(i,{label:`What is your favourite coffee?`,options:y}),(0,c.jsx)(`br`,{}),(0,c.jsxs)(`p`,{children:[(0,c.jsx)(`code`,{children:`lang="it"`}),` has been set on some of the`,` `,(0,c.jsx)(`code`,{children:`<li>`}),` elements. This can be tested using a screen reader.`]})]}),name:`Internationalisation (+ options with htmlProps)`},Z={render:e=>(0,c.jsx)(i,{options:e.options?b:[],disabled:e.disabled,fullWidth:e.fullWidth,helperText:e.helperText,hideLabel:e.hideLabel,loading:e.loading,loadingLabel:e.loadingLabel,label:e.label,placeholder:e.placeholder,readonly:e.readonly,required:e.required,showClearButton:e.showClearButton,size:e.size,validationAriaLive:e.validationAriaLive,validationStatus:e.validationStatus===`no status`?``:e.validationStatus,validationText:e.validationText,theme:e.theme,children:e.showIcon&&(0,c.jsxs)(ie,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`currentColor`,children:[(0,c.jsx)(`path`,{d:`M0 0h24v24H0z`,fill:`none`}),(0,c.jsx)(`path`,{d:`M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z`})]})}),name:`Playground`,args:l,argTypes:{size:{options:[`medium`,`large`,`small`],control:{type:`inline-radio`}},validationAriaLive:{options:[`polite`,`assertive`,`off`],control:{type:`inline-radio`}},validationStatus:{defaultValue:`no status`,options:[`no status`,`error`,`success`,`warning`],control:{type:`select`}},showIcon:{control:{type:`boolean`}},theme:{options:[`inherit`,`light`,`dark`],control:{type:`inline-radio`}},options:{defaultValue:!0,control:{type:`boolean`}}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return <IcSelect label="What is your favourite coffee?" options={options} onIcChange={event => console.log(`icChange: ${event.detail.value}`)} onIcOptionSelect={event => console.log(`icOptionSelect: ${event.detail.value}`)} onIcOpen={() => console.log("select dropdown opened")} onIcClose={() => console.log("select dropdown closed")} />;\n  },\n  name: "Default"\n}',...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" options={options} value="Cap" onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Default value"
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" showClearButton options={options} onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "With clear button"
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" options={optionsWithDescriptions} onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "With descriptions"
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
      <IcSelect label="What is your favourite coffee?" helperText="Select one option from the list" options={options} onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />
      <br />
      <IcSelect label="What is your favourite coffee?" options={options} onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)}>
        <IcTypography variant="caption" slot="helper-text">
          <span>
            Slotted helper text with a <IcLink href="#">link</IcLink>
          </span>
        </IcTypography>
      </IcSelect>
      </>;
  },
  name: "Helper text"
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" placeholder="Placeholder goes here" options={options} onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Custom placeholder"
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" options={optionsWithCustomElements} onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Custom elements"
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee size?" options={optionsWithHiddenLabels} onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Hidden menu option labels"
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>
        <IcSelect label="What is your favourite coffee?" options={options} size="small" onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />
        <IcSelect label="What is your favourite coffee?" options={options} onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />
        <IcSelect label="What is your favourite coffee?" options={options} size="large" onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />
      </div>;
  },
  name: "Sizes"
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" disabled options={options} onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Disabled"
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" options={optionsWithDisabled} onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Disabled options"
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" fullWidth options={options} onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Full width"
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" hideLabel options={options} onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Hidden label"
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" required options={options} onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Required"
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" readonly options={options} value="Cap" onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Read-only"
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" options={groupedOptions} onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Groups"
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" options={optionsWithRecommended} onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Recommended"
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div>
        <IcSelect label="What is your favourite coffee?" validationStatus="success" validationText="Coffee available" options={options} onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />
        <IcSelect label="What is your favourite coffee?" validationStatus="warning" validationText="Only a few left" options={options} onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />
        <IcSelect label="What is your favourite coffee?" validationStatus="error" validationText="Coffee unavailable" options={options} onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />
      </div>;
  },
  name: "Validation"
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <AriaLiveBehaviourExample />,
  name: "Aria-live behaviour"
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" options={manyOptions} onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Scroll behaviour"
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <LoadingWithError />,
  name: "Loading with error"
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" options={options} selectOnEnter onIcOptionSelect={event => console.log(\`icOptionSelect: \${event.detail.value}\`)} />;
  },
  name: "Emitting icOptionSelect on enter"
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledExample />,
  name: "Controlled"
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <Uncontrolled />,
  name: "Uncontrolled"
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
      <p>The first select is wrapped in a <code>&lt;span lang="fr"&gt;</code> to change the language. All options will read in french, which can be tested using a screen
        reader.</p>
      <span lang="fr">
      <IcSelect label="Boisson Préférée" options={optionsInFrench} />
      </span>
      <hr />
      <IcSelect label="What is your favourite coffee?" options={optionsWithLangProps} />
      <br />
      <p>
        <code>lang="it"</code> has been set on some of the
        {" "}<code>&lt;li&gt;</code> elements. This can be tested using a screen
        reader.
      </p>
      </>;
  },
  name: "Internationalisation (+ options with htmlProps)"
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => <IcSelect options={args.options ? playgroundOptions : []} disabled={args.disabled} fullWidth={args.fullWidth} helperText={args.helperText} hideLabel={args.hideLabel} loading={args.loading} loadingLabel={args.loadingLabel} label={args.label} placeholder={args.placeholder} readonly={args.readonly} required={args.required} showClearButton={args.showClearButton} size={args.size} validationAriaLive={args.validationAriaLive} validationStatus={args.validationStatus === "no status" ? "" : args.validationStatus} validationText={args.validationText} theme={args.theme}>
      {args.showIcon && <SlottedSVG slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
        </SlottedSVG>}
    </IcSelect>,
  name: "Playground",
  args: defaultArgs,
  argTypes: {
    size: {
      options: ["medium", "large", "small"],
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
      defaultValue: "no status",
      options: ["no status", "error", "success", "warning"],
      control: {
        type: "select"
      }
    },
    showIcon: {
      control: {
        type: "boolean"
      }
    },
    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: "inline-radio"
      }
    },
    options: {
      defaultValue: true,
      control: {
        type: "boolean"
      }
    }
  }
}`,...Z.parameters?.docs?.source}}},Q=`Default.DefaultValue.WithClearButton.WithDescriptions.HelperText.CustomPlaceholder.CustomElements.HiddenOptionLabels.Sizes.Disabled.DisabledOptions.FullWidth.HiddenLabel.Required.ReadOnly.Groups.Recommended.Validation.AriaLiveBehaviour.ScrollBehaviour.LoadingWithError_.EmittingIcOptionSelectOnEnter.Controlled.Uncontrolled_.Internationalisation.Playground`.split(`.`)}));$();export{W as AriaLiveBehaviour,J as Controlled,M as CustomElements,j as CustomPlaceholder,E as Default,D as DefaultValue,F as Disabled,I as DisabledOptions,q as EmittingIcOptionSelectOnEnter,L as FullWidth,V as Groups,A as HelperText,R as HiddenLabel,N as HiddenOptionLabels,X as Internationalisation,K as LoadingWithError_,Z as Playground,B as ReadOnly,H as Recommended,z as Required,G as ScrollBehaviour,P as Sizes,Y as Uncontrolled_,U as Validation,O as WithClearButton,k as WithDescriptions,Q as __namedExportsOrder,T as default,$ as n,ae as t};