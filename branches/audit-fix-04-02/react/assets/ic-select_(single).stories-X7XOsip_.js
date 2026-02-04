import{c as o,R as a,a as B,o as H,r as F,f as z}from"./iframe-CHj_GJ12.js";import{S as R}from"./slottedSVG-DZgSkS84.js";const M={disabled:!1,fullWidth:!1,helperText:"Select one option from the list",hideLabel:!1,loading:!1,loadingLabel:"Loading...",label:"What is your favourite coffee?",placeholder:"Select an option",readonly:!1,required:!1,size:"medium",validationAriaLive:"polite",validationStatus:"no status",validationText:"",showClearButton:!1,theme:"inherit"},t=[{label:"Cappuccino",value:"Cap"},{label:"Latte",value:"Lat"},{label:"Americano",value:"Ame"}],V=[{label:"Chocolat Chaud",value:"choc"},{label:"Jus",value:"jus"},{label:"Limonade",value:"lim"}],k=[{label:"Cappuccino",value:"Cap"},{label:"Latte",value:"Lat",element:{component:'<ic-status-tag label="Success status" status="success"></ic-status-tag>',ariaLabel:"Success status tag"}},{label:"Americano",value:"Ame",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><g><path d="M4.47 20.5037H19.53C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49375C12.96 3.16375 11.04 3.16375 10.27 4.49375L2.74 17.5037C1.97 18.8337 2.93 20.5037 4.47 20.5037ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95375 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95375 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM13 17.5037H11V15.5037H13V17.5037Z" /></g></svg>'}],P=[{label:"Small",value:"s",element:{component:'<ic-chip label="Small" size="small"></ic-chip>',ariaLabel:"small chip"},hideLabel:!0},{label:"Medium size",value:"m",element:{component:'<ic-chip label="Medium"></ic-chip>',ariaLabel:"medium chip"},hideLabel:!0},{label:"Large",value:"l",element:{component:'<ic-chip label="Large" size="large"></ic-chip>',ariaLabel:"large chip"},hideLabel:!0},{label:"Extra Large",value:"xl"}],_=[{label:"Cappuccino",value:"Cap"},{label:"Latte",value:"Lat",disabled:!0},{label:"Americano",value:"Ame"}],q=[{label:"Cappuccino",value:"Cap",description:"An espresso-based drink traditionally composed of equal parts espresso, steamed milk, and milk foam, creating a balanced flavor and velvety texture"},{label:"Latte",value:"Lat",description:"A milkier coffee than a cappuccino"},{label:"Americano",value:"Ame",description:"Espresso coffee diluted with hot water"}],G=[{label:"Fancy",children:[{label:"Cappuccino",value:"Cap"},{label:"Flat white",value:"Fla"},{label:"Macchiato",value:"Mac"}]},{label:"Boring",children:[{label:"Filter",value:"Fil"},{label:"Latte",value:"Lat"},{label:"Americano",value:"Ame"}]}],U=[{label:"Cappuccino",value:"Cappuccino"},{label:"Flat white",value:"Flat white",recommended:!0},{label:"Latte",value:"Latte"},{label:"Americano",value:"Americano",recommended:!0},{label:"Filter",value:"Fil"}],j=[{label:"Cappuccino",value:"Cap"},{label:"Latte",value:"Lat"},{label:"Americano",value:"Ame"},{label:"Filter",value:"Fil"},{label:"Flat white",value:"Fla"},{label:"Mocha",value:"Moc"},{label:"Macchiato",value:"Mac"},{label:"Café au lait",value:"Caf"},{label:"Espresso",value:"Esp"},{label:"Cortado",value:"Cor"},{label:"Ristretto",value:"Ris"},{label:"Latte macchiato",value:"Lam"}],Z=[{label:"Flat White",value:"Fla",htmlProps:{lang:"en-GB"}},{label:"Cappuccino",value:"Cap",htmlProps:{lang:"it"}},{label:"Latte",value:"Lat",htmlProps:{lang:"it"}},{label:"Americano",value:"Ame",htmlProps:{lang:"it"}}],J=[{label:"Cappuccino",value:"Cap",description:"An espresso-based drink traditionally composed of equal parts espresso, steamed milk, and milk foam, creating a balanced flavor and velvety texture"},{label:"Boring",children:[{label:"Latte",value:"Lat",description:"A milkier coffee than a cappuccino"},{label:"Filter",value:"Fil",description:"Coffee filtered using paper or a mesh"}]},{label:"Fancy",children:[{label:"Flat white",value:"Fla",description:"Coffee without froth made with espresso and hot steamed milk"},{label:"Macchiato",value:"Mac",description:"Espresso coffee with a dash of frothy steamed milk"}]},{label:"Americano",value:"Ame",description:"Espresso coffee diluted with hot water"},{label:"Mocha",value:"Moc",description:"A mixture of coffee and chocolate"}],K=()=>{const e=F.useRef();return a.createElement(o,{ref:e,label:"What are your favourite types of coffee?",options:t,loading:!0,timeout:"1000",onIcChange:n=>console.log(`icChange: ${n.detail.value}`),onIcRetryLoad:()=>e.current.loading=!0})},N=()=>{const[e,n]=F.useState("Cap"),l=D=>{console.log(D.detail.value),n(D.detail.value)};return a.createElement(o,{placeholder:"Controlled",label:"Controlled",options:t,value:e,onIcChange:l})},Q=()=>{const e=F.useRef(),n=()=>{console.log(e.current.value)};return a.createElement(a.Fragment,null,a.createElement(o,{ref:e,placeholder:"Uncontrolled",label:"Uncontrolled",options:t,onIcChange:n}))},X=()=>{const[e,n]=F.useState(!1),[l,D]=F.useState(!1);return a.createElement(a.Fragment,null,a.createElement(o,{label:"What is your favourite coffee?",helperText:"Error already set on page load and aria-live overridden as 'assertive'",validationStatus:e?"":"error",validationText:e?"":"First error message",validationAriaLive:"assertive"}),a.createElement("br",null),a.createElement(o,{label:"What is your favourite coffee?",helperText:"Error set after page load and aria-live overridden as 'assertive'",validationStatus:e?"error":"",validationText:e?"Second error message":"",validationAriaLive:"assertive"}),a.createElement("br",null),a.createElement(z,{onClick:()=>n(!e)},"Toggle errors"),a.createElement("br",null),a.createElement("br",null),a.createElement("br",null),a.createElement("br",null),a.createElement(o,{label:"What is your favourite coffee?",helperText:"Default aria-live behaviour (i.e. 'polite')",validationStatus:l?"error":"",validationText:l?"Third error message":""}),a.createElement("br",null),a.createElement(o,{label:"What is your favourite coffee?",helperText:"Default aria-live behaviour (i.e. 'polite')",validationStatus:l?"error":"",validationText:l?"Fourth error message":""}),a.createElement("br",null),a.createElement(z,{onClick:()=>D(!l)},"Toggle errors"))},Y={title:"Select/Single",component:o},r={render:()=>a.createElement(o,{label:"What is your favourite coffee?",options:t,onIcChange:e=>console.log(`icChange: ${e.detail.value}`),onIcOptionSelect:e=>console.log(`icOptionSelect: ${e.detail.value}`),onIcOpen:()=>console.log("select dropdown opened"),onIcClose:()=>console.log("select dropdown closed")}),name:"Default"},i={render:()=>a.createElement(o,{label:"What is your favourite coffee?",options:t,value:"Cap",onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:"Default value"},s={render:()=>a.createElement(o,{label:"What is your favourite coffee?",showClearButton:!0,options:t,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:"With clear button"},c={render:()=>a.createElement(o,{label:"What is your favourite coffee?",options:q,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:"With descriptions"},u={render:()=>a.createElement(a.Fragment,null,a.createElement(o,{label:"What is your favourite coffee?",helperText:"Select one option from the list",options:t,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),a.createElement("br",null),a.createElement(o,{label:"What is your favourite coffee?",options:t,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)},a.createElement(B,{variant:"caption",slot:"helper-text"},a.createElement("span",null,"Slotted helper text with a ",a.createElement(H,{href:"#"},"link"))))),name:"Helper text"},d={render:()=>a.createElement(o,{label:"What is your favourite coffee?",placeholder:"Placeholder goes here",options:t,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:"Custom placeholder"},p={render:()=>a.createElement(o,{label:"What is your favourite coffee?",options:k,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:"Custom elements"},h={render:()=>a.createElement(o,{label:"What is your favourite coffee size?",options:P,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:"Hidden menu option labels"},m={render:()=>a.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},a.createElement(o,{label:"What is your favourite coffee?",options:t,size:"small",onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),a.createElement(o,{label:"What is your favourite coffee?",options:t,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),a.createElement(o,{label:"What is your favourite coffee?",options:t,size:"large",onIcChange:e=>console.log(`icChange: ${e.detail.value}`)})),name:"Sizes"},v={render:()=>a.createElement(o,{label:"What is your favourite coffee?",disabled:!0,options:t,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:"Disabled"},g={render:()=>a.createElement(o,{label:"What is your favourite coffee?",options:_,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:"Disabled options"},f={render:()=>a.createElement(o,{label:"What is your favourite coffee?",fullWidth:!0,options:t,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:"Full width"},b={render:()=>a.createElement(o,{label:"What is your favourite coffee?",hideLabel:!0,options:t,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:"Hidden label"},C={render:()=>a.createElement(o,{label:"What is your favourite coffee?",required:!0,options:t,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:"Required"},S={render:()=>a.createElement(o,{label:"What is your favourite coffee?",readonly:!0,options:t,value:"Cap",onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:"Read-only"},y={render:()=>a.createElement(o,{label:"What is your favourite coffee?",options:G,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:"Groups"},I={render:()=>a.createElement(o,{label:"What is your favourite coffee?",options:U,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:"Recommended"},E={render:()=>a.createElement("div",null,a.createElement(o,{label:"What is your favourite coffee?",validationStatus:"success",validationText:"Coffee available",options:t,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),a.createElement(o,{label:"What is your favourite coffee?",validationStatus:"warning",validationText:"Only a few left",options:t,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),a.createElement(o,{label:"What is your favourite coffee?",validationStatus:"error",validationText:"Coffee unavailable",options:t,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)})),name:"Validation"},W={render:()=>a.createElement(X,null),name:"Aria-live behaviour"},L={render:()=>a.createElement(o,{label:"What is your favourite coffee?",options:j,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:"Scroll behaviour"},w={render:()=>a.createElement(K,null),name:"Loading with error"},x={render:()=>a.createElement(o,{label:"What is your favourite coffee?",options:t,selectOnEnter:!0,onIcOptionSelect:e=>console.log(`icOptionSelect: ${e.detail.value}`)}),name:"Emitting icOptionSelect on enter"},$={render:()=>a.createElement(N,null),name:"Controlled"},A={render:()=>a.createElement(Q,null),name:"Uncontrolled"},T={render:()=>a.createElement(a.Fragment,null,a.createElement("p",null,"The first select is wrapped in a ",a.createElement("code",null,'<span lang="fr">')," to change the language. All options will read in french, which can be tested using a screen reader."),a.createElement("span",{lang:"fr"},a.createElement(o,{label:"Boisson Préférée",options:V})),a.createElement("hr",null),a.createElement(o,{label:"What is your favourite coffee?",options:Z}),a.createElement("br",null),a.createElement("p",null,a.createElement("code",null,'lang="it"')," has been set on some of the"," ",a.createElement("code",null,"<li>")," elements. This can be tested using a screen reader.")),name:"Internationalisation (+ options with htmlProps)"},O={render:e=>a.createElement(o,{options:e.options?J:[],disabled:e.disabled,fullWidth:e.fullWidth,helperText:e.helperText,hideLabel:e.hideLabel,loading:e.loading,loadingLabel:e.loadingLabel,label:e.label,placeholder:e.placeholder,readonly:e.readonly,required:e.required,showClearButton:e.showClearButton,size:e.size,validationAriaLive:e.validationAriaLive,validationStatus:e.validationStatus==="no status"?"":e.validationStatus,validationText:e.validationText,theme:e.theme},e.showIcon&&a.createElement(R,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"currentColor"},a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),a.createElement("path",{d:"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"}))),name:"Playground",args:M,argTypes:{size:{options:["medium","large","small"],control:{type:"inline-radio"}},validationAriaLive:{options:["polite","assertive","off"],control:{type:"inline-radio"}},validationStatus:{defaultValue:"no status",options:["no status","error","success","warning"],control:{type:"select"}},showIcon:{control:{type:"boolean"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}},options:{defaultValue:!0,control:{type:"boolean"}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return <IcSelect label="What is your favourite coffee?" options={options} onIcChange={event => console.log(`icChange: ${event.detail.value}`)} onIcOptionSelect={event => console.log(`icOptionSelect: ${event.detail.value}`)} onIcOpen={() => console.log("select dropdown opened")} onIcClose={() => console.log("select dropdown closed")} />;\n  },\n  name: "Default"\n}',...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" options={options} value="Cap" onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Default value"
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" showClearButton options={options} onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "With clear button"
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" options={optionsWithDescriptions} onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "With descriptions"
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" placeholder="Placeholder goes here" options={options} onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Custom placeholder"
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" options={optionsWithCustomElements} onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Custom elements"
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee size?" options={optionsWithHiddenLabels} onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Hidden menu option labels"
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" disabled options={options} onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Disabled"
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" options={optionsWithDisabled} onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Disabled options"
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" fullWidth options={options} onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Full width"
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" hideLabel options={options} onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Hidden label"
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" required options={options} onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Required"
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" readonly options={options} value="Cap" onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Read-only"
}`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" options={groupedOptions} onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Groups"
}`,...y.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" options={optionsWithRecommended} onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Recommended"
}`,...I.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return <div>\n        <IcSelect label="What is your favourite coffee?" validationStatus="success" validationText="Coffee available" options={options} onIcChange={event => console.log(`icChange: ${event.detail.value}`)} />\n        <IcSelect label="What is your favourite coffee?" validationStatus="warning" validationText="Only a few left" options={options} onIcChange={event => console.log(`icChange: ${event.detail.value}`)} />\n        <IcSelect label="What is your favourite coffee?" validationStatus="error" validationText="Coffee unavailable" options={options} onIcChange={event => console.log(`icChange: ${event.detail.value}`)} />\n      </div>;\n  },\n  name: "Validation"\n}',...E.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <AriaLiveBehaviourExample />,
  name: "Aria-live behaviour"
}`,...W.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" options={manyOptions} onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Scroll behaviour"
}`,...L.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <LoadingWithError />,
  name: "Loading with error"
}`,...w.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What is your favourite coffee?" options={options} selectOnEnter onIcOptionSelect={event => console.log(\`icOptionSelect: \${event.detail.value}\`)} />;
  },
  name: "Emitting icOptionSelect on enter"
}`,...x.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledExample />,
  name: "Controlled"
}`,...$.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <Uncontrolled />,
  name: "Uncontrolled"
}`,...A.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};const ee=["Default","DefaultValue","WithClearButton","WithDescriptions","HelperText","CustomPlaceholder","CustomElements","HiddenOptionLabels","Sizes","Disabled","DisabledOptions","FullWidth","HiddenLabel","Required","ReadOnly","Groups","Recommended","Validation","AriaLiveBehaviour","ScrollBehaviour","LoadingWithError_","EmittingIcOptionSelectOnEnter","Controlled","Uncontrolled_","Internationalisation","Playground"],te=Object.freeze(Object.defineProperty({__proto__:null,AriaLiveBehaviour:W,Controlled:$,CustomElements:p,CustomPlaceholder:d,Default:r,DefaultValue:i,Disabled:v,DisabledOptions:g,EmittingIcOptionSelectOnEnter:x,FullWidth:f,Groups:y,HelperText:u,HiddenLabel:b,HiddenOptionLabels:h,Internationalisation:T,LoadingWithError_:w,Playground:O,ReadOnly:S,Recommended:I,Required:C,ScrollBehaviour:L,Sizes:m,Uncontrolled_:A,Validation:E,WithClearButton:s,WithDescriptions:c,__namedExportsOrder:ee,default:Y},Symbol.toStringTag,{value:"Module"}));export{te as I};
