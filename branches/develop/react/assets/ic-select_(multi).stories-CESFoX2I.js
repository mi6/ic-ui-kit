import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{O as r,U as i,in as a,lt as o,t as s,ut as c}from"./iframe-Cvj0onjK.js";import{n as l,t as u}from"./slottedSVG-BKHJXVFr.js";var d=e({Controlled:()=>K,CustomElements:()=>N,CustomPlaceholder:()=>M,Default:()=>D,DefaultValue:()=>O,Disabled:()=>F,DisabledOptions:()=>I,FullWidth:()=>L,Groups:()=>V,HelperText:()=>j,HiddenLabel:()=>R,LoadingWithError_:()=>G,Playground:()=>J,ReadOnly:()=>B,Recommended:()=>H,Required:()=>z,ScrollBehaviour:()=>W,Sizes:()=>P,Uncontrolled_:()=>q,Validation:()=>U,WithClearButton:()=>k,WithDescriptions:()=>A,__namedExportsOrder:()=>Y,default:()=>E}),f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X=t((()=>{f=n(a()),c(),l(),p=s(),m={disabled:!1,fullWidth:!1,helperText:`Select some options from the list`,hideLabel:!1,loading:!1,loadingLabel:`Loading...`,label:`What are your favourite types of coffee?`,placeholder:`Select an option`,readonly:!1,required:!1,size:`medium`,validationAriaLive:`polite`,validationStatus:`no status`,validationText:``,showClearButton:!1,theme:`inherit`},h=[{label:`Cappuccino`,value:`Cap`},{label:`Latte`,value:`Lat`},{label:`Americano`,value:`Ame`},{label:`Filter`,value:`Fil`},{label:`Flat white`,value:`Fla`},{label:`Mocha`,value:`Moc`},{label:`Macchiato`,value:`Mac`}],g=[{label:`Cappuccino`,value:`Cap`},{label:`Latte`,value:`Lat`,element:{component:`<ic-status-tag label="Neutral status"></ic-status-tag>`,ariaLabel:`Neutral status tag`}},{label:`Americano`,value:`Ame`,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><g><path d="M4.47 20.5037H19.53C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49375C12.96 3.16375 11.04 3.16375 10.27 4.49375L2.74 17.5037C1.97 18.8337 2.93 20.5037 4.47 20.5037ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95375 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95375 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM13 17.5037H11V15.5037H13V17.5037Z" /></g></svg>`},{label:`Filter`,value:`Fil`},{label:`Flat white`,value:`Fla`},{label:`Mocha`,value:`Moc`},{label:`Macchiato`,value:`Mac`}],_=[{label:`Cappuccino`,value:`Cap`},{label:`Latte`,value:`Lat`,disabled:!0},{label:`Americano`,value:`Ame`},{label:`Filter`,value:`Fil`,disabled:!0},{label:`Flat white`,value:`Fla`,disabled:!0},{label:`Mocha`,value:`Moc`},{label:`Macchiato`,value:`Mac`}],v=[{label:`Cappuccino`,value:`Cap`,description:`An espresso-based drink traditionally composed of equal parts espresso, steamed milk, and milk foam, creating a balanced flavor and velvety texture`},{label:`Latte`,value:`Lat`,description:`A milkier coffee than a cappuccino`},{label:`Americano`,value:`Ame`,description:`Espresso coffee diluted with hot water`},{label:`Filter`,value:`Fil`,description:`Coffee filtered using paper or a mesh`},{label:`Flat white`,value:`Fla`,description:`Coffee without froth made with espresso and hot steamed milk`},{label:`Mocha`,value:`Moc`,description:`A mixture of coffee and chocolate`},{label:`Macchiato`,value:`Mac`,description:`Espresso coffee with a dash of frothy steamed milk`}],y=[{label:`Fancy`,children:[{label:`Cappuccino`,value:`Cap`},{label:`Flat white`,value:`Fla`}]},{label:`Boring`,children:[{label:`Filter`,value:`Fil`},{label:`Latte`,value:`Lat`}]}],b=[{label:`Cappuccino`,value:`Cap`},{label:`Latte`,value:`Lat`},{label:`Americano`,value:`Ame`,recommended:!0},{label:`Filter`,value:`Fil`},{label:`Flat white`,value:`Fla`,recommended:!0},{label:`Mocha`,value:`Moc`},{label:`Macchiato`,value:`Mac`}],x=[{label:`Cappuccino`,value:`Cap`},{label:`Latte`,value:`Lat`},{label:`Americano`,value:`Ame`},{label:`Filter`,value:`Fil`},{label:`Flat white`,value:`Fla`},{label:`Mocha`,value:`Moc`},{label:`Macchiato`,value:`Mac`},{label:`Café au lait`,value:`Caf`},{label:`Espresso`,value:`Esp`},{label:`Cortado`,value:`Cor`},{label:`Ristretto`,value:`Ris`},{label:`Latte macchiato`,value:`Lam`}],S=[{label:`Cappuccino`,value:`Cap`,description:`An espresso-based drink traditionally composed of equal parts espresso, steamed milk, and milk foam, creating a balanced flavor and velvety texture`},{label:`Boring`,children:[{label:`Latte`,value:`Lat`,description:`A milkier coffee than a cappuccino`},{label:`Filter`,value:`Fil`,description:`Coffee filtered using paper or a mesh`}]},{label:`Fancy`,children:[{label:`Flat white`,value:`Fla`,description:`Coffee without froth made with espresso and hot steamed milk`},{label:`Macchiato`,value:`Mac`,description:`Espresso coffee with a dash of frothy steamed milk`}]},{label:`Americano`,value:`Ame`,description:`Espresso coffee diluted with hot water`},{label:`Mocha`,value:`Moc`,description:`A mixture of coffee and chocolate`}],C=()=>{let e=(0,f.useRef)();return(0,p.jsx)(i,{ref:e,label:`What are your favourite types of coffee?`,options:h,multiple:!0,loading:!0,timeout:`1000`,onIcChange:e=>console.log(`icChange: ${e.detail.value}`),onIcRetryLoad:()=>e.current.loading=!0})},w=()=>{let[e,t]=(0,f.useState)([`Cap`]);return(0,p.jsx)(i,{placeholder:`Controlled`,label:`Controlled`,options:h,multiple:!0,value:e,onIcChange:e=>{console.log(e.detail.value),t(e.detail.value)}})},T=()=>{let e=(0,f.useRef)();return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(i,{ref:e,placeholder:`Uncontrolled`,label:`Uncontrolled`,options:h,multiple:!0,onIcChange:()=>{console.log(e.current.value)}})})},E={title:`Select/Multi`,component:i},D={render:()=>(0,p.jsx)(i,{label:`What are your favourite types of coffee?`,options:h,multiple:!0,onIcClear:()=>console.log(`clear all clicked`),onIcChange:e=>console.log(`icChange: ${e.detail.value}`),onIcOptionSelect:e=>console.log(`icOptionSelect: ${e.detail.value}`),onIcOptionDeselect:e=>console.log(`icOptionDeselect: ${e.detail.value}`),onIcOpen:()=>console.log(`select dropdown opened`),onIcClose:()=>console.log(`select dropdown closed`)}),name:`Default`},O={render:()=>(0,p.jsx)(i,{label:`What are your favourite types of coffee?`,options:h,multiple:!0,value:[`Ame`,`Fil`,`Moc`],onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`Default value`},k={render:()=>(0,p.jsx)(i,{label:`What are your favourite types of coffee?`,options:h,multiple:!0,showClearButton:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`With clear button`},A={render:()=>(0,p.jsx)(i,{label:`What are your favourite types of coffee?`,options:v,multiple:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`With descriptions`},j={render:()=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{label:`What are your favourite types of coffee?`,options:h,multiple:!0,helperText:`Select some options from the list`,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),(0,p.jsx)(`br`,{}),(0,p.jsx)(i,{label:`What are your favourite types of coffee?`,options:h,multiple:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`),children:(0,p.jsx)(o,{variant:`caption`,slot:`helper-text`,children:(0,p.jsxs)(`span`,{children:[`Slotted helper text with a `,(0,p.jsx)(r,{href:`#`,children:`link`})]})})})]}),name:`Helper text`},M={render:()=>(0,p.jsx)(i,{label:`What are your favourite types of coffee?`,options:h,multiple:!0,placeholder:`Placeholder goes here`,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`Custom placeholder`},N={render:()=>(0,p.jsx)(i,{label:`What are your favourite types of coffee?`,options:g,multiple:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`Custom elements`},P={render:()=>(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,p.jsx)(i,{label:`What are your favourite types of coffee?`,options:h,multiple:!0,size:`small`,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),(0,p.jsx)(i,{label:`What are your favourite types of coffee?`,options:h,multiple:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),(0,p.jsx)(i,{label:`What are your favourite types of coffee?`,options:h,multiple:!0,size:`large`,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)})]}),name:`Sizes`},F={render:()=>(0,p.jsx)(i,{label:`What are your favourite types of coffee?`,options:h,multiple:!0,disabled:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`Disabled`},I={render:()=>(0,p.jsx)(i,{label:`What are your favourite types of coffee?`,options:_,multiple:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`Disabled options`},L={render:()=>(0,p.jsx)(i,{label:`What are your favourite types of coffee?`,options:h,multiple:!0,fullWidth:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`Full width`},R={render:()=>(0,p.jsx)(i,{label:`What are your favourite types of coffee?`,options:h,multiple:!0,hideLabel:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`Hidden label`},z={render:()=>(0,p.jsx)(i,{label:`What are your favourite types of coffee?`,options:h,multiple:!0,required:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`Required`},B={render:()=>(0,p.jsx)(i,{label:`What are your favourite types of coffee?`,options:h,multiple:!0,readonly:!0,value:[`Cap`,`Fla`,`Moc`],onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`Read-only`},V={render:()=>(0,p.jsx)(i,{label:`What are your favourite types of coffee?`,options:y,multiple:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`Groups`},H={render:()=>(0,p.jsx)(i,{label:`What are your favourite types of coffee?`,options:b,multiple:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`Recommended`},U={render:()=>(0,p.jsxs)(`div`,{children:[(0,p.jsx)(i,{label:`What are your favourite types of coffee?`,validationStatus:`success`,validationText:`Coffee available`,options:h,multiple:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),(0,p.jsx)(i,{label:`What are your favourite types of coffee?`,validationStatus:`warning`,validationText:`Only a few left`,options:h,multiple:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),(0,p.jsx)(i,{label:`What are your favourite types of coffee?`,validationStatus:`error`,validationText:`Coffee unavailable`,options:h,multiple:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)})]}),name:`Validation`},W={render:()=>(0,p.jsx)(i,{label:`What are your favourite types of coffee?`,options:x,multiple:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`Scroll behaviour`},G={render:()=>(0,p.jsx)(C,{}),name:`Loading with error`},K={render:()=>(0,p.jsx)(w,{}),name:`Controlled`},q={render:()=>(0,p.jsx)(T,{}),name:`Uncontrolled`},J={render:e=>(0,p.jsx)(i,{multiple:!0,options:S,disabled:e.disabled,fullWidth:e.fullWidth,helperText:e.helperText,hideLabel:e.hideLabel,loading:e.loading,loadingLabel:e.loadingLabel,label:e.label,placeholder:e.placeholder,readonly:e.readonly,required:e.required,showClearButton:e.showClearButton,size:e.size,validationAriaLive:e.validationAriaLive,validationStatus:e.validationStatus===`no status`?``:e.validationStatus,validationText:e.validationText,theme:e.theme,children:e.showIcon&&(0,p.jsxs)(u,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`currentColor`,children:[(0,p.jsx)(`path`,{d:`M0 0h24v24H0z`,fill:`none`}),(0,p.jsx)(`path`,{d:`M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z`})]})}),name:`Playground`,args:m,argTypes:{size:{options:[`medium`,`large`,`small`],control:{type:`inline-radio`}},validationAriaLive:{options:[`polite`,`assertive`,`off`],control:{type:`inline-radio`}},validationStatus:{defaultValue:`no status`,options:[`no status`,`error`,`success`,`warning`],control:{type:`select`}},showIcon:{control:{type:`boolean`}},theme:{options:[`inherit`,`light`,`dark`],control:{type:`inline-radio`}}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return <IcSelect label="What are your favourite types of coffee?" options={options} multiple onIcClear={() => console.log("clear all clicked")} onIcChange={event => console.log(`icChange: ${event.detail.value}`)} onIcOptionSelect={event => console.log(`icOptionSelect: ${event.detail.value}`)} onIcOptionDeselect={event => console.log(`icOptionDeselect: ${event.detail.value}`)} onIcOpen={() => console.log("select dropdown opened")} onIcClose={() => console.log("select dropdown closed")} />;\n  },\n  name: "Default"\n}',...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What are your favourite types of coffee?" options={options} multiple value={["Ame", "Fil", "Moc"]} onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Default value"
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What are your favourite types of coffee?" options={options} multiple showClearButton onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "With clear button"
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What are your favourite types of coffee?" options={optionsWithDescriptions} multiple onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "With descriptions"
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <IcSelect label="What are your favourite types of coffee?" options={options} multiple helperText="Select some options from the list" onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />
        <br />
        <IcSelect label="What are your favourite types of coffee?" options={options} multiple onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)}>
          <IcTypography variant="caption" slot="helper-text">
            <span>
              Slotted helper text with a <IcLink href="#">link</IcLink>
            </span>
          </IcTypography>
        </IcSelect>
      </>;
  },
  name: "Helper text"
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What are your favourite types of coffee?" options={options} multiple placeholder="Placeholder goes here" onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Custom placeholder"
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What are your favourite types of coffee?" options={optionsWithCustomElements} multiple onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Custom elements"
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>
        <IcSelect label="What are your favourite types of coffee?" options={options} multiple size="small" onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />
        <IcSelect label="What are your favourite types of coffee?" options={options} multiple onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />
        <IcSelect label="What are your favourite types of coffee?" options={options} multiple size="large" onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />
      </div>;
  },
  name: "Sizes"
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What are your favourite types of coffee?" options={options} multiple disabled onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Disabled"
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What are your favourite types of coffee?" options={optionsWithDisabled} multiple onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Disabled options"
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What are your favourite types of coffee?" options={options} multiple fullWidth onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Full width"
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What are your favourite types of coffee?" options={options} multiple hideLabel onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Hidden label"
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What are your favourite types of coffee?" options={options} multiple required onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Required"
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What are your favourite types of coffee?" options={options} multiple readonly value={["Cap", "Fla", "Moc"]} onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Read-only"
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What are your favourite types of coffee?" options={groupedOptions} multiple onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Groups"
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What are your favourite types of coffee?" options={optionsWithRecommended} multiple onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Recommended"
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div>
        <IcSelect label="What are your favourite types of coffee?" validationStatus="success" validationText="Coffee available" options={options} multiple onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />
        <IcSelect label="What are your favourite types of coffee?" validationStatus="warning" validationText="Only a few left" options={options} multiple onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />
        <IcSelect label="What are your favourite types of coffee?" validationStatus="error" validationText="Coffee unavailable" options={options} multiple onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />
      </div>;
  },
  name: "Validation"
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What are your favourite types of coffee?" options={manyOptions} multiple onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Scroll behaviour"
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <LoadingWithError />,
  name: "Loading with error"
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledExample />,
  name: "Controlled"
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <Uncontrolled />,
  name: "Uncontrolled"
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: args => <IcSelect multiple options={playgroundOptions} disabled={args.disabled} fullWidth={args.fullWidth} helperText={args.helperText} hideLabel={args.hideLabel} loading={args.loading} loadingLabel={args.loadingLabel} label={args.label} placeholder={args.placeholder} readonly={args.readonly} required={args.required} showClearButton={args.showClearButton} size={args.size} validationAriaLive={args.validationAriaLive} validationStatus={args.validationStatus === "no status" ? "" : args.validationStatus} validationText={args.validationText} theme={args.theme}>
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
    }
  }
}`,...J.parameters?.docs?.source}}},Y=[`Default`,`DefaultValue`,`WithClearButton`,`WithDescriptions`,`HelperText`,`CustomPlaceholder`,`CustomElements`,`Sizes`,`Disabled`,`DisabledOptions`,`FullWidth`,`HiddenLabel`,`Required`,`ReadOnly`,`Groups`,`Recommended`,`Validation`,`ScrollBehaviour`,`LoadingWithError_`,`Controlled`,`Uncontrolled_`,`Playground`]}));X();export{K as Controlled,N as CustomElements,M as CustomPlaceholder,D as Default,O as DefaultValue,F as Disabled,I as DisabledOptions,L as FullWidth,V as Groups,j as HelperText,R as HiddenLabel,G as LoadingWithError_,J as Playground,B as ReadOnly,H as Recommended,z as Required,W as ScrollBehaviour,P as Sizes,q as Uncontrolled_,U as Validation,k as WithClearButton,A as WithDescriptions,Y as __namedExportsOrder,E as default,X as n,d as t};