import{c as o,R as a,a as M,o as A,r as x}from"./iframe-DaC165F9.js";import{S as D}from"./slottedSVG-CP3I5H6y.js";const T={disabled:!1,fullWidth:!1,helperText:"Select some options from the list",hideLabel:!1,loading:!1,loadingLabel:"Loading...",label:"What are your favourite types of coffee?",placeholder:"Select an option",readonly:!1,required:!1,size:"medium",validationAriaLive:"polite",validationStatus:"no status",validationText:"",showClearButton:!1,theme:"inherit"},t=[{label:"Cappuccino",value:"Cap"},{label:"Latte",value:"Lat"},{label:"Americano",value:"Ame"},{label:"Filter",value:"Fil"},{label:"Flat white",value:"Fla"},{label:"Mocha",value:"Moc"},{label:"Macchiato",value:"Mac"}],O=[{label:"Cappuccino",value:"Cap"},{label:"Latte",value:"Lat",element:{component:'<ic-status-tag label="Neutral status"></ic-status-tag>',ariaLabel:"Neutral status tag"}},{label:"Americano",value:"Ame",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><g><path d="M4.47 20.5037H19.53C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49375C12.96 3.16375 11.04 3.16375 10.27 4.49375L2.74 17.5037C1.97 18.8337 2.93 20.5037 4.47 20.5037ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95375 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95375 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM13 17.5037H11V15.5037H13V17.5037Z" /></g></svg>'},{label:"Filter",value:"Fil"},{label:"Flat white",value:"Fla"},{label:"Mocha",value:"Moc"},{label:"Macchiato",value:"Mac"}],k=[{label:"Cappuccino",value:"Cap"},{label:"Latte",value:"Lat",disabled:!0},{label:"Americano",value:"Ame"},{label:"Filter",value:"Fil",disabled:!0},{label:"Flat white",value:"Fla",disabled:!0},{label:"Mocha",value:"Moc"},{label:"Macchiato",value:"Mac"}],R=[{label:"Cappuccino",value:"Cap",description:"An espresso-based drink traditionally composed of equal parts espresso, steamed milk, and milk foam, creating a balanced flavor and velvety texture"},{label:"Latte",value:"Lat",description:"A milkier coffee than a cappuccino"},{label:"Americano",value:"Ame",description:"Espresso coffee diluted with hot water"},{label:"Filter",value:"Fil",description:"Coffee filtered using paper or a mesh"},{label:"Flat white",value:"Fla",description:"Coffee without froth made with espresso and hot steamed milk"},{label:"Mocha",value:"Moc",description:"A mixture of coffee and chocolate"},{label:"Macchiato",value:"Mac",description:"Espresso coffee with a dash of frothy steamed milk"}],z=[{label:"Fancy",children:[{label:"Cappuccino",value:"Cap"},{label:"Flat white",value:"Fla"}]},{label:"Boring",children:[{label:"Filter",value:"Fil"},{label:"Latte",value:"Lat"}]}],V=[{label:"Cappuccino",value:"Cap"},{label:"Latte",value:"Lat"},{label:"Americano",value:"Ame",recommended:!0},{label:"Filter",value:"Fil"},{label:"Flat white",value:"Fla",recommended:!0},{label:"Mocha",value:"Moc"},{label:"Macchiato",value:"Mac"}],B=[{label:"Cappuccino",value:"Cap"},{label:"Latte",value:"Lat"},{label:"Americano",value:"Ame"},{label:"Filter",value:"Fil"},{label:"Flat white",value:"Fla"},{label:"Mocha",value:"Moc"},{label:"Macchiato",value:"Mac"},{label:"Café au lait",value:"Caf"},{label:"Espresso",value:"Esp"},{label:"Cortado",value:"Cor"},{label:"Ristretto",value:"Ris"},{label:"Latte macchiato",value:"Lam"}],H=[{label:"Cappuccino",value:"Cap",description:"An espresso-based drink traditionally composed of equal parts espresso, steamed milk, and milk foam, creating a balanced flavor and velvety texture"},{label:"Boring",children:[{label:"Latte",value:"Lat",description:"A milkier coffee than a cappuccino"},{label:"Filter",value:"Fil",description:"Coffee filtered using paper or a mesh"}]},{label:"Fancy",children:[{label:"Flat white",value:"Fla",description:"Coffee without froth made with espresso and hot steamed milk"},{label:"Macchiato",value:"Mac",description:"Espresso coffee with a dash of frothy steamed milk"}]},{label:"Americano",value:"Ame",description:"Espresso coffee diluted with hot water"},{label:"Mocha",value:"Moc",description:"A mixture of coffee and chocolate"}],_=()=>{const e=x.useRef();return a.createElement(o,{ref:e,label:"What are your favourite types of coffee?",options:t,multiple:!0,loading:!0,timeout:"1000",onIcChange:l=>console.log(`icChange: ${l.detail.value}`),onIcRetryLoad:()=>e.current.loading=!0})},q=()=>{const[e,l]=x.useState(["Cap"]),F=$=>{console.log($.detail.value),l($.detail.value)};return a.createElement(o,{placeholder:"Controlled",label:"Controlled",options:t,multiple:!0,value:e,onIcChange:F})},P=()=>{const e=x.useRef(),l=()=>{console.log(e.current.value)};return a.createElement(a.Fragment,null,a.createElement(o,{ref:e,placeholder:"Uncontrolled",label:"Uncontrolled",options:t,multiple:!0,onIcChange:l}))},U={title:"Select/Multi",component:o},n={render:()=>a.createElement(o,{label:"What are your favourite types of coffee?",options:t,multiple:!0,onIcClear:()=>console.log("clear all clicked"),onIcChange:e=>console.log(`icChange: ${e.detail.value}`),onIcOptionSelect:e=>console.log(`icOptionSelect: ${e.detail.value}`),onIcOptionDeselect:e=>console.log(`icOptionDeselect: ${e.detail.value}`),onIcOpen:()=>console.log("select dropdown opened"),onIcClose:()=>console.log("select dropdown closed")}),name:"Default"},r={render:()=>a.createElement(o,{label:"What are your favourite types of coffee?",options:t,multiple:!0,value:["Ame","Fil","Moc"],onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:"Default value"},i={render:()=>a.createElement(o,{label:"What are your favourite types of coffee?",options:t,multiple:!0,showClearButton:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:"With clear button"},c={render:()=>a.createElement(o,{label:"What are your favourite types of coffee?",options:R,multiple:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:"With descriptions"},s={render:()=>a.createElement(a.Fragment,null,a.createElement(o,{label:"What are your favourite types of coffee?",options:t,multiple:!0,helperText:"Select some options from the list",onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),a.createElement("br",null),a.createElement(o,{label:"What are your favourite types of coffee?",options:t,multiple:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)},a.createElement(M,{variant:"caption",slot:"helper-text"},a.createElement("span",null,"Slotted helper text with a ",a.createElement(A,{href:"#"},"link"))))),name:"Helper text"},u={render:()=>a.createElement(o,{label:"What are your favourite types of coffee?",options:t,multiple:!0,placeholder:"Placeholder goes here",onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:"Custom placeholder"},d={render:()=>a.createElement(o,{label:"What are your favourite types of coffee?",options:O,multiple:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:"Custom elements"},p={render:()=>a.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},a.createElement(o,{label:"What are your favourite types of coffee?",options:t,multiple:!0,size:"small",onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),a.createElement(o,{label:"What are your favourite types of coffee?",options:t,multiple:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),a.createElement(o,{label:"What are your favourite types of coffee?",options:t,multiple:!0,size:"large",onIcChange:e=>console.log(`icChange: ${e.detail.value}`)})),name:"Sizes"},m={render:()=>a.createElement(o,{label:"What are your favourite types of coffee?",options:t,multiple:!0,disabled:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:"Disabled"},h={render:()=>a.createElement(o,{label:"What are your favourite types of coffee?",options:k,multiple:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:"Disabled options"},f={render:()=>a.createElement(o,{label:"What are your favourite types of coffee?",options:t,multiple:!0,fullWidth:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:"Full width"},v={render:()=>a.createElement(o,{label:"What are your favourite types of coffee?",options:t,multiple:!0,hideLabel:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:"Hidden label"},g={render:()=>a.createElement(o,{label:"What are your favourite types of coffee?",options:t,multiple:!0,required:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:"Required"},b={render:()=>a.createElement(o,{label:"What are your favourite types of coffee?",options:t,multiple:!0,readonly:!0,value:["Cap","Fla","Moc"],onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:"Read-only"},C={render:()=>a.createElement(o,{label:"What are your favourite types of coffee?",options:z,multiple:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:"Groups"},y={render:()=>a.createElement(o,{label:"What are your favourite types of coffee?",options:V,multiple:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:"Recommended"},I={render:()=>a.createElement("div",null,a.createElement(o,{label:"What are your favourite types of coffee?",validationStatus:"success",validationText:"Coffee available",options:t,multiple:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),a.createElement(o,{label:"What are your favourite types of coffee?",validationStatus:"warning",validationText:"Only a few left",options:t,multiple:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),a.createElement(o,{label:"What are your favourite types of coffee?",validationStatus:"error",validationText:"Coffee unavailable",options:t,multiple:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)})),name:"Validation"},S={render:()=>a.createElement(o,{label:"What are your favourite types of coffee?",options:B,multiple:!0,onIcChange:e=>console.log(`icChange: ${e.detail.value}`)}),name:"Scroll behaviour"},W={render:()=>a.createElement(_,null),name:"Loading with error"},w={render:()=>a.createElement(q,null),name:"Controlled"},E={render:()=>a.createElement(P,null),name:"Uncontrolled"},L={render:e=>a.createElement(o,{multiple:!0,options:H,disabled:e.disabled,fullWidth:e.fullWidth,helperText:e.helperText,hideLabel:e.hideLabel,loading:e.loading,loadingLabel:e.loadingLabel,label:e.label,placeholder:e.placeholder,readonly:e.readonly,required:e.required,showClearButton:e.showClearButton,size:e.size,validationAriaLive:e.validationAriaLive,validationStatus:e.validationStatus==="no status"?"":e.validationStatus,validationText:e.validationText,theme:e.theme},e.showIcon&&a.createElement(D,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"currentColor"},a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),a.createElement("path",{d:"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"}))),name:"Playground",args:T,argTypes:{size:{options:["medium","large","small"],control:{type:"inline-radio"}},validationAriaLive:{options:["polite","assertive","off"],control:{type:"inline-radio"}},validationStatus:{defaultValue:"no status",options:["no status","error","success","warning"],control:{type:"select"}},showIcon:{control:{type:"boolean"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return <IcSelect label="What are your favourite types of coffee?" options={options} multiple onIcClear={() => console.log("clear all clicked")} onIcChange={event => console.log(`icChange: ${event.detail.value}`)} onIcOptionSelect={event => console.log(`icOptionSelect: ${event.detail.value}`)} onIcOptionDeselect={event => console.log(`icOptionDeselect: ${event.detail.value}`)} onIcOpen={() => console.log("select dropdown opened")} onIcClose={() => console.log("select dropdown closed")} />;\n  },\n  name: "Default"\n}',...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What are your favourite types of coffee?" options={options} multiple value={["Ame", "Fil", "Moc"]} onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Default value"
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What are your favourite types of coffee?" options={options} multiple showClearButton onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "With clear button"
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What are your favourite types of coffee?" options={optionsWithDescriptions} multiple onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "With descriptions"
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What are your favourite types of coffee?" options={options} multiple placeholder="Placeholder goes here" onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Custom placeholder"
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What are your favourite types of coffee?" options={optionsWithCustomElements} multiple onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Custom elements"
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What are your favourite types of coffee?" options={options} multiple disabled onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Disabled"
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What are your favourite types of coffee?" options={optionsWithDisabled} multiple onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Disabled options"
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What are your favourite types of coffee?" options={options} multiple fullWidth onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Full width"
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What are your favourite types of coffee?" options={options} multiple hideLabel onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Hidden label"
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What are your favourite types of coffee?" options={options} multiple required onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Required"
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What are your favourite types of coffee?" options={options} multiple readonly value={["Cap", "Fla", "Moc"]} onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Read-only"
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What are your favourite types of coffee?" options={groupedOptions} multiple onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Groups"
}`,...C.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What are your favourite types of coffee?" options={optionsWithRecommended} multiple onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Recommended"
}`,...y.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return <div>\n        <IcSelect label="What are your favourite types of coffee?" validationStatus="success" validationText="Coffee available" options={options} multiple onIcChange={event => console.log(`icChange: ${event.detail.value}`)} />\n        <IcSelect label="What are your favourite types of coffee?" validationStatus="warning" validationText="Only a few left" options={options} multiple onIcChange={event => console.log(`icChange: ${event.detail.value}`)} />\n        <IcSelect label="What are your favourite types of coffee?" validationStatus="error" validationText="Coffee unavailable" options={options} multiple onIcChange={event => console.log(`icChange: ${event.detail.value}`)} />\n      </div>;\n  },\n  name: "Validation"\n}',...I.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcSelect label="What are your favourite types of coffee?" options={manyOptions} multiple onIcChange={event => console.log(\`icChange: \${event.detail.value}\`)} />;
  },
  name: "Scroll behaviour"
}`,...S.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <LoadingWithError />,
  name: "Loading with error"
}`,...W.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledExample />,
  name: "Controlled"
}`,...w.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <Uncontrolled />,
  name: "Uncontrolled"
}`,...E.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};const G=["Default","DefaultValue","WithClearButton","WithDescriptions","HelperText","CustomPlaceholder","CustomElements","Sizes","Disabled","DisabledOptions","FullWidth","HiddenLabel","Required","ReadOnly","Groups","Recommended","Validation","ScrollBehaviour","LoadingWithError_","Controlled","Uncontrolled_","Playground"],N=Object.freeze(Object.defineProperty({__proto__:null,Controlled:w,CustomElements:d,CustomPlaceholder:u,Default:n,DefaultValue:r,Disabled:m,DisabledOptions:h,FullWidth:f,Groups:C,HelperText:s,HiddenLabel:v,LoadingWithError_:W,Playground:L,ReadOnly:b,Recommended:y,Required:g,ScrollBehaviour:S,Sizes:p,Uncontrolled_:E,Validation:I,WithClearButton:i,WithDescriptions:c,__namedExportsOrder:G,default:U},Symbol.toStringTag,{value:"Module"}));export{N as I};
