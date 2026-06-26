import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{O as r,U as i,in as a,lt as o,t as s,u as c,ut as l}from"./iframe-DZ0sytr6.js";import{n as u,t as d}from"./slottedSVG-jKUcuwBR.js";var f=e({Controlled:()=>q,Default:()=>O,DefaultValue:()=>k,Disabled:()=>F,DisabledOptions:()=>I,EmittingIcOptionSelectOnEnter:()=>K,ExternalFiltering_:()=>G,FilterByStartOfOptions:()=>A,Groups:()=>z,GroupsGroupTitlesIncludedInSearch:()=>B,HelperText:()=>N,HiddenLabel:()=>L,ManyOptions:()=>W,Playground:()=>Y,Recommended:()=>V,Required:()=>R,SearchableFormResetDefaultValue:()=>U,Sizes:()=>P,Uncontrolled_:()=>J,Validation:()=>H,WithDescriptions:()=>j,WithDescriptionsIncludedInSearch:()=>M,__namedExportsOrder:()=>X,default:()=>D}),p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z=t((()=>{p=n(a()),l(),u(),m=s(),h={disabled:!1,fullWidth:!1,helperText:`Select one option from the list`,hideLabel:!1,loading:!1,loadingLabel:`Loading...`,label:`What is your favourite coffee?`,placeholder:`Select an option`,readonly:!1,required:!1,size:`default`,validationAriaLive:`polite`,validationStatus:`no status`,validationText:``,includeDescriptionsInSearch:!1,includeGroupTitlesInSearch:!1,searchMatchPosition:`anywhere`,theme:`inherit`},g=[{label:`Cappuccino`,value:`Cap`},{label:`Latte`,value:`Lat`},{label:`Americano`,value:`Ame`},{label:`Filter`,value:`Fil`},{label:`Flat white`,value:`Fla`},{label:`Mocha`,value:`Moc`},{label:`Macchiato`,value:`Mac`}],_=[{label:`Fancy`,children:[{label:`Cappuccino`,value:`Cap`},{label:`Flat white`,value:`Fla`}]},{label:`Boring`,children:[{label:`Filter`,value:`Fil`},{label:`Latte`,value:`Lat`}]}],v=[{label:`Cappuccino`,value:`Cap`},{label:`Latte`,value:`Lat`},{label:`Americano`,value:`Ame`},{label:`Filter`,value:`Fil`},{label:`Flat white`,value:`Fla`},{label:`Mocha`,value:`Moc`},{label:`Macchiato`,value:`Mac`},{label:`Café au lait`,value:`Caf`},{label:`Espresso`,value:`Esp`},{label:`Cortado`,value:`Cor`},{label:`Ristretto`,value:`Ris`},{label:`Latte macchiato`,value:`Lam`}],y=[{label:`Cappuccino`,value:`Cap`,description:`An espresso-based drink traditionally composed of equal parts espresso, steamed milk, and milk foam, creating a balanced flavor and velvety texture`},{label:`Latte`,value:`Lat`,description:`A milkier coffee than a cappuccino`},{label:`Americano`,value:`Ame`,description:`Espresso coffee diluted with hot water`},{label:`Filter`,value:`Fil`,description:`Coffee filtered using paper or a mesh`},{label:`Flat white`,value:`Fla`,description:`Coffee without froth made with espresso and hot steamed milk`},{label:`Mocha`,value:`Moc`,description:`A mixture of coffee and chocolate`},{label:`Macchiato`,value:`Mac`,description:`Espresso coffee with a dash of frothy steamed milk`}],b=[{label:`Cappuccino`,value:`Cap`},{label:`Latte`,value:`Lat`},{label:`Americano`,value:`Ame`,disabled:!0},{label:`Filter`,value:`Fil`,disabled:!0},{label:`Flat white`,value:`Fla`},{label:`Mocha`,value:`Moc`},{label:`Macchiato`,value:`Mac`,disabled:!0}],x=[{label:`Cappuccino`,value:`Cappuccino`},{label:`Flat white`,value:`Flat white`,recommended:!0},{label:`Latte`,value:`Latte`},{label:`Americano`,value:`Americano`,recommended:!0},{label:`Filter`,value:`Fil`},{label:`Mocha`,value:`Moc`},{label:`Macchiato`,value:`Mac`}],S=[{label:`Cappuccino`,value:`Cap`,description:`An espresso-based drink traditionally composed of equal parts espresso, steamed milk, and milk foam, creating a balanced flavor and velvety texture`},{label:`Boring`,children:[{label:`Latte`,value:`Lat`,description:`A milkier coffee than a cappuccino`},{label:`Filter`,value:`Fil`,description:`Coffee filtered using paper or a mesh`}]},{label:`Fancy`,children:[{label:`Flat white`,value:`Fla`,description:`Coffee without froth made with espresso and hot steamed milk`},{label:`Macchiato`,value:`Mac`,description:`Espresso coffee with a dash of frothy steamed milk`}]},{label:`Americano`,value:`Ame`,description:`Espresso coffee diluted with hot water`},{label:`Mocha`,value:`Moc`,description:`A mixture of coffee and chocolate`}],C=()=>(0,m.jsxs)(`form`,{children:[(0,m.jsx)(i,{label:`What is your favourite coffee?`,required:!0,value:`Cap`,options:g,onIcChange:e=>console.log(`icChange: ${e.detail.value}`),searchable:!0,showClearButton:!0}),(0,m.jsx)(c,{type:`reset`,children:`Reset`})]}),w=()=>{let e=[{label:`Espresso`,value:`Esp`},{label:`Double Espresso`,value:`Dou`},{label:`Cappuccino`,value:`Cap`},{label:`Latte`,value:`Lat`},{label:`Americano`,value:`Ame`},{label:`Filter`,value:`Fil`},{label:`Flat white`,value:`Fla`},{label:`Mocha`,value:`Moc`},{label:`Macchiato`,value:`Mac`}],[t,n]=(0,p.useState)(),[r,a]=(0,p.useState)(null),[o,s]=(0,p.useState)([]),[c,l]=(0,p.useState)(!1);(0,p.useEffect)(()=>{let n=t?.detail.value;n!==r&&(n?(l(!0),(n=>{let r=e.filter(e=>e.label.toLowerCase().includes(n.toLowerCase()));return new Promise(e=>setTimeout(()=>e(r),t.type===`icInput`?2e3:500))})(n).then(e=>s(e))):s([]))},[t]);let u=e=>{console.log(e.detail.value),n(e)};return(0,m.jsx)(i,{loading:c,timeout:1e3,debounce:300,label:`What is your favourite coffee?`,searchable:!0,disableAutoFiltering:!0,options:o,onIcOptionSelect:e=>{a(e.detail.value)},onIcInput:u,onIcRetryLoad:u,onIcClear:()=>{s([])}})},T=()=>{let[e,t]=(0,p.useState)(`Cap`);return(0,m.jsx)(i,{searchable:!0,placeholder:`Controlled`,label:`Controlled`,options:g,value:e,onIcChange:e=>{console.log(e.detail.value),t(e.detail.value)}})},E=()=>{let e=(0,p.useRef)();return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(i,{ref:e,searchable:!0,placeholder:`Uncontrolled`,label:`Uncontrolled`,options:g,onIcChange:()=>{console.log(e.current.value)}})})},D={title:`Select/Searchable`,component:i},O={render:()=>(0,m.jsx)(i,{label:`What is your favourite coffee?`,options:g,searchable:!0,onIcInput:e=>console.log(`icInput: ${e.detail.value}`),onIcChange:e=>console.log(`icChange: ${e.detail.value}`),onIcOptionSelect:e=>console.log(`icOptionSelect: ${e.detail.value}`),onIcOpen:()=>console.log(`select dropdown opened`),onIcClose:()=>console.log(`select dropdown closed`)}),name:`Default`},k={render:()=>(0,m.jsx)(i,{label:`What is your favourite coffee?`,required:!0,value:`Lat`,options:g,onIcChange:e=>console.log(`icChange: ${e.detail.value}`),searchable:!0,showClearButton:!0}),name:`Default value`},A={render:()=>(0,m.jsx)(i,{label:`What is your favourite coffee?`,options:g,searchable:!0,filterMatchPosition:`start`,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`Filter by start of options`},j={render:()=>(0,m.jsx)(i,{label:`What is your favourite coffee?`,options:y,searchable:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`With descriptions`},M={render:()=>(0,m.jsx)(i,{label:`What is your favourite coffee?`,options:y,searchable:!0,includeDescriptionsInSearch:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`With descriptions (included in search)`},N={render:()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{label:`What is your favourite coffee?`,options:g,searchable:!0,helperText:`Select one option from the list`,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),(0,m.jsx)(`br`,{}),(0,m.jsx)(i,{label:`What is your favourite coffee?`,options:g,searchable:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`),children:(0,m.jsx)(o,{variant:`caption`,slot:`helper-text`,children:(0,m.jsxs)(`span`,{children:[`Slotted helper text with a `,(0,m.jsx)(r,{href:`#`,children:`link`})]})})})]}),name:`Helper text`},P={render:()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{label:`What is your favourite coffee?`,options:g,searchable:!0,size:`small`,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),(0,m.jsx)(i,{label:`What is your favourite coffee?`,options:g,searchable:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),(0,m.jsx)(i,{label:`What is your favourite coffee?`,options:g,searchable:!0,size:`large`,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)})]}),name:`Sizes`},F={render:()=>(0,m.jsx)(i,{label:`What is your favourite coffee?`,options:g,searchable:!0,disabled:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`Disabled`},I={render:()=>(0,m.jsx)(i,{label:`What is your favourite coffee?`,options:b,searchable:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`Disabled options`},L={render:()=>(0,m.jsx)(i,{label:`What is your favourite coffee?`,options:g,searchable:!0,hideLabel:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`Hidden label`},R={render:()=>(0,m.jsx)(i,{label:`What is your favourite coffee?`,options:g,searchable:!0,required:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`Required`},z={render:()=>(0,m.jsx)(i,{label:`What is your favourite coffee?`,options:_,searchable:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`Groups`},B={render:()=>(0,m.jsx)(i,{label:`What is your favourite coffee?`,options:_,searchable:!0,includeGroupTitlesInSearch:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`Groups (group titles included in search)`},V={render:()=>(0,m.jsx)(i,{label:`What is your favourite coffee?`,options:x,searchable:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`Recommended`},H={render:()=>(0,m.jsxs)(`div`,{children:[(0,m.jsx)(i,{label:`What is your favourite coffee?`,validationStatus:`success`,validationText:`Coffee available`,options:g,searchable:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),(0,m.jsx)(i,{label:`What is your favourite coffee?`,validationStatus:`warning`,validationText:`Only a few left`,options:g,searchable:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),(0,m.jsx)(i,{label:`What is your favourite coffee?`,validationStatus:`error`,validationText:`Coffee unavailable`,options:g,searchable:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)})]}),name:`Validation`},U={render:()=>(0,m.jsx)(C,{}),name:`Searchable form reset default value`},W={render:()=>(0,m.jsx)(i,{label:`What is your favourite coffee?`,options:v,searchable:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:`Many options`},G={render:()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(w,{}),(0,m.jsx)(`br`,{}),(0,m.jsx)(o,{children:`Suggested search options: Espresso, Double Espresso, Flat White, Filter, Cappuccino, Americano, Mocha, Macchiato.`}),(0,m.jsx)(`br`,{}),(0,m.jsx)(o,{children:`The IcChange event will trigger 300ms after you finish typing. 1 second later, the options in the select menu will be updated.`})]}),name:`External filtering`},K={render:()=>(0,m.jsx)(i,{label:`What is your favourite coffee?`,options:g,selectOnEnter:!0,searchable:!0,onIcOptionSelect:e=>console.log(`icOptionSelect: ${e.detail.value}`)}),name:`Emitting icOptionSelect on enter`},q={render:()=>(0,m.jsx)(T,{}),name:`Controlled`},J={render:()=>(0,m.jsx)(E,{}),name:`Uncontrolled`},Y={render:e=>(0,m.jsx)(i,{options:S,disabled:e.disabled,fullWidth:e.fullWidth,helperText:e.helperText,hideLabel:e.hideLabel,includeDescriptionsInSearch:e.includeDescriptionsInSearch,includeGroupTitlesInSearch:e.includeGroupTitlesInSearch,loading:e.loading,loadingLabel:e.loadingLabel,label:e.label,placeholder:e.placeholder,readonly:e.readonly,required:e.required,searchMatchPosition:e.searchMatchPosition,searchable:!0,size:e.size,validationAriaLive:e.validationAriaLive,validationStatus:e.validationStatus===`no status`?``:e.validationStatus,validationText:e.validationText,theme:e.theme,children:e.showIcon&&(0,m.jsxs)(d,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`currentColor`,children:[(0,m.jsx)(`path`,{d:`M0 0h24v24H0z`,fill:`none`}),(0,m.jsx)(`path`,{d:`M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z`})]})}),name:`Playground`,args:h,argTypes:{searchMatchPosition:{defaultValue:`anywhere`,options:[`anywhere`,`start`],control:{type:`inline-radio`}},size:{options:[`medium`,`large`,`small`],control:{type:`inline-radio`}},validationAriaLive:{options:[`polite`,`assertive`,`off`],control:{type:`inline-radio`}},validationStatus:{defaultValue:`no status`,options:[`no status`,`error`,`success`,`warning`],control:{type:`select`}},showIcon:{control:{type:`boolean`}},theme:{options:[`inherit`,`light`,`dark`],control:{type:`inline-radio`}}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return <IcSelect label="What is your favourite coffee?" options={options} searchable onIcInput={event => console.log(`icInput: ${event.detail.value}`)} onIcChange={event => console.log(`icChange: ${event.detail.value}`)} onIcOptionSelect={event => console.log(`icOptionSelect: ${event.detail.value}`)} onIcOpen={() => console.log("select dropdown opened")} onIcClose={() => console.log("select dropdown closed")} />;\n  },\n  name: "Default"\n}',...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" required value="Lat" options={options} onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} searchable showClearButton />;
  },
  name: "Default value"
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" options={options} searchable filterMatchPosition="start" onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Filter by start of options"
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" options={optionsWithDescriptions} searchable onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "With descriptions"
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" options={optionsWithDescriptions} searchable includeDescriptionsInSearch onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "With descriptions (included in search)"
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <IcSelect label="What is your favourite coffee?" options={options} searchable helperText="Select one option from the list" onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />
        <br />
        <IcSelect label="What is your favourite coffee?" options={options} searchable onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)}>
          <IcTypography variant="caption" slot="helper-text">
            <span>
              Slotted helper text with a <IcLink href="#">link</IcLink>
            </span>
          </IcTypography>
        </IcSelect>
      </>;
  },
  name: "Helper text"
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <IcSelect label="What is your favourite coffee?" options={options} searchable size="small" onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />
        <IcSelect label="What is your favourite coffee?" options={options} searchable onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />
        <IcSelect label="What is your favourite coffee?" options={options} searchable size="large" onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />
      </>;
  },
  name: "Sizes"
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" options={options} searchable disabled onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Disabled"
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" options={optionsWithDisabled} searchable onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Disabled options"
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" options={options} searchable hideLabel onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Hidden label"
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" options={options} searchable required onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Required"
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" options={groupedOptions} searchable onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Groups"
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" options={groupedOptions} searchable includeGroupTitlesInSearch onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Groups (group titles included in search)"
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" options={optionsWithRecommended} searchable onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Recommended"
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div>
        <IcSelect label="What is your favourite coffee?" validationStatus="success" validationText="Coffee available" options={options} searchable onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />
        <IcSelect label="What is your favourite coffee?" validationStatus="warning" validationText="Only a few left" options={options} searchable onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />
        <IcSelect label="What is your favourite coffee?" validationStatus="error" validationText="Coffee unavailable" options={options} searchable onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />
      </div>;
  },
  name: "Validation"
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <InForm />;
  },
  name: "Searchable form reset default value"
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" options={manyOptions} searchable onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Many options"
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <ExternalFiltering />
    <br />
    <IcTypography>
      Suggested search options: Espresso, Double Espresso, Flat White, Filter,
      Cappuccino, Americano, Mocha, Macchiato.
    </IcTypography>
    <br />
    <IcTypography>
      The IcChange event will trigger 300ms after you finish typing. 1 second
      later, the options in the select menu will be updated.
    </IcTypography>
    </>,
  name: "External filtering"
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" options={options} selectOnEnter searchable onIcOptionSelect={event => console.log(\`icOptionSelect: \${event.detail.value}\`)} />;
  },
  name: "Emitting icOptionSelect on enter"
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledExample />,
  name: "Controlled"
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <Uncontrolled />,
  name: "Uncontrolled"
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: args => <IcSelect options={playgroundOptions} disabled={args.disabled} fullWidth={args.fullWidth} helperText={args.helperText} hideLabel={args.hideLabel} includeDescriptionsInSearch={args.includeDescriptionsInSearch} includeGroupTitlesInSearch={args.includeGroupTitlesInSearch} loading={args.loading} loadingLabel={args.loadingLabel} label={args.label} placeholder={args.placeholder} readonly={args.readonly} required={args.required} searchMatchPosition={args.searchMatchPosition} searchable size={args.size} validationAriaLive={args.validationAriaLive} validationStatus={args.validationStatus === "no status" ? "" : args.validationStatus} validationText={args.validationText} theme={args.theme}>
      {args.showIcon && <SlottedSVG slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
        </SlottedSVG>}
    </IcSelect>,
  name: "Playground",
  args: defaultArgs,
  argTypes: {
    searchMatchPosition: {
      defaultValue: "anywhere",
      options: ["anywhere", "start"],
      control: {
        type: "inline-radio"
      }
    },
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
}`,...Y.parameters?.docs?.source}}},X=[`Default`,`DefaultValue`,`FilterByStartOfOptions`,`WithDescriptions`,`WithDescriptionsIncludedInSearch`,`HelperText`,`Sizes`,`Disabled`,`DisabledOptions`,`HiddenLabel`,`Required`,`Groups`,`GroupsGroupTitlesIncludedInSearch`,`Recommended`,`Validation`,`SearchableFormResetDefaultValue`,`ManyOptions`,`ExternalFiltering_`,`EmittingIcOptionSelectOnEnter`,`Controlled`,`Uncontrolled_`,`Playground`]}));Z();export{q as Controlled,O as Default,k as DefaultValue,F as Disabled,I as DisabledOptions,K as EmittingIcOptionSelectOnEnter,G as ExternalFiltering_,A as FilterByStartOfOptions,z as Groups,B as GroupsGroupTitlesIncludedInSearch,N as HelperText,L as HiddenLabel,W as ManyOptions,Y as Playground,V as Recommended,R as Required,U as SearchableFormResetDefaultValue,P as Sizes,J as Uncontrolled_,H as Validation,j as WithDescriptions,M as WithDescriptionsIncludedInSearch,X as __namedExportsOrder,D as default,Z as n,f as t};