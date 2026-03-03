import{e as l,R as e,a as n,f as U,r}from"./iframe-CZp0Z172.js";const H=()=>{const a=[{label:"Espresso",value:"espresso"},{label:"Double Espresso",value:"doubleespresso"},{label:"Flat White",value:"flatwhite"},{label:"Cappuccino",value:"cappuccino"},{label:"Americano",value:"americano"},{label:"Mocha",value:"mocha"}],[o,w]=r.useState(null),[C,L]=r.useState([]),[B,O]=r.useState(!1),[A,x]=r.useState(!1);r.useEffect(()=>{const t=o?.detail.value;t!==A&&(t?.length>1?(A||O(!0),x(!1),(D=>{const k=a.filter(T=>T.label.toLowerCase().includes(D.toLowerCase()));return new Promise(T=>setTimeout(()=>T(k),o.type==="icChange"?2e3:500))})(t).then(D=>L(D))):L([])),x(!1)},[o,A]);const M=t=>{w(t)},z=()=>{x(!0)};return e.createElement(l,{loading:B,timeout:1e3,debounce:300,placeholder:"Type to search",label:"Search for coffee",onIcChange:M,onIcRetryLoad:M,onIcOptionSelect:z,disableAutoFiltering:!0,options:C,loadingLabel:"Loading time",loadingErrorLabel:"Oops error"})},_=()=>{const[a,o]=r.useState("cap"),w=C=>{console.log(C.detail.value),o(C.detail.value)};return e.createElement(l,{placeholder:"Controlled",label:"Controlled",options:[{label:"Espresso",value:"esp"},{label:"Double Espresso",value:"dbl"},{label:"Flat White",value:"fla"},{label:"Cappuccino",value:"cap"},{label:"Americano",value:"ame"},{label:"Mocha",value:"moc"}],value:a,onIcChange:w})},P=()=>{const a=r.useRef(),o=()=>{console.log(a.current.value)};return e.createElement(e.Fragment,null,e.createElement(l,{ref:a,placeholder:"Uncontrolled",label:"Uncontrolled",options:[{label:"Espresso",value:"esp"},{label:"Double Espresso",value:"dbl"},{label:"Flat White",value:"fla"},{label:"Cappuccino",value:"cap"},{label:"Americano",value:"ame"},{label:"Mocha",value:"moc"}],onIcChange:o}))},R={autocapitalize:"off",autocorrect:"off",autofocus:!1,charactersUntilSuggestion:2,disableAutoFiltering:!1,disabled:!1,focusOnLoad:!0,fullWidth:!1,helperText:"",hideLabel:!1,label:"What is your favourite coffee?",loading:!1,placeholder:"Search",readonly:!1,required:!1,size:"medium",spellcheck:!1,theme:"inherit"},q={title:"Search bar",component:l},s={render:()=>e.createElement(l,{label:"What is your favourite coffee?",onIcSubmitSearch:()=>console.log("submit search")}),name:"Default"},c={render:()=>e.createElement(e.Fragment,null,e.createElement(l,{label:"What is your favourite coffee?",options:[{label:"Espresso",value:"espresso"},{label:"Double Espresso",value:"doubleespresso"},{label:"Flat White",value:"flatwhite"},{label:"Cappuccino",value:"cappuccino"},{label:"Americano",value:"americano"},{label:"Mocha",value:"mocha"}]}),e.createElement("br",null),e.createElement(n,null,"Suggested search options: Espresso, Double Espresso, Flat White, Cappuccino, Americano, Mocha")),name:"With options"},i={render:()=>e.createElement(e.Fragment,null,e.createElement(l,{label:"What is your favourite coffee?",disableAutoFiltering:!0,options:[{label:"Espresso",value:"espresso"},{label:"Double Espresso",value:"doubleespresso"},{label:"Flat White",value:"flatwhite"},{label:"Cappuccino",value:"cappuccino"},{label:"Americano",value:"americano"},{label:"Mocha",value:"mocha"}]}),e.createElement("br",null),e.createElement(n,null,"All options will be displayed as you type")),name:"With options (no filtering)"},u={render:()=>e.createElement("form",{onSubmit:a=>{a.preventDefault(),console.log(a)}},e.createElement(l,{label:"Submits form on search",onIcSubmitSearch:a=>console.log(a)}),e.createElement(l,{preventFormSubmitOnSearch:!0,label:"Doesn't submit form on search",onIcSubmitSearch:a=>console.log(a)}),e.createElement(U,{type:"submit"},"Submit")),name:"In a form"},p={render:()=>e.createElement(e.Fragment,null,e.createElement(l,{label:"What is your favourite coffee?",helperText:"Some helper text"}),e.createElement("br",null),e.createElement(l,{label:"What is your favourite coffee?"},e.createElement(n,{variant:"caption",slot:"helper-text"},e.createElement("span",null,"Slotted helper text with a ",e.createElement(IcLink,{href:"#"},"link"))))),name:"Helper text"},m={render:()=>e.createElement(l,{label:"What is your favourite coffee?",size:"small"}),name:"Size small"},h={render:()=>e.createElement(l,{label:"What is your favourite coffee?",hideLabel:!0}),name:"Hidden label"},b={render:()=>e.createElement(l,{label:"What is your favourite coffee?",disabled:!0}),name:"Disabled"},d={render:()=>e.createElement(e.Fragment,null,e.createElement(l,{label:"What is your favourite coffee?",fullWidth:!0,options:[{label:"Espresso",value:"espresso"},{label:"Double Espresso",value:"doubleespresso"},{label:"Flat White",value:"flatwhite"},{label:"Cappuccino",value:"cappuccino"},{label:"Americano",value:"americano"},{label:"Mocha",value:"mocha"}]}),e.createElement("br",null),e.createElement(n,null,"Suggested search options: Espresso, Double Espresso, Flat White, Cappuccino, Americano, Mocha")),name:"Full Width"},f={render:()=>e.createElement(e.Fragment,null,e.createElement(H,null),e.createElement("br",null),e.createElement(n,null,"Suggested search options: Espresso, Double Espresso, Flat White, Cappuccino, Americano, Mocha"),e.createElement("br",null),e.createElement(n,null,"The IcChange event will trigger 300ms after you finish typing. 1 second later, the options in the searchbar menu will be updated.")),name:"External filtering"},v={render:()=>e.createElement(l,{label:"What is your favourite coffee?",searchMode:"query",onIcSubmitSearch:()=>console.log("submit search"),options:[{label:"Espresso",value:"espresso"},{label:"Double Espresso",value:"doubleespresso"},{label:"Flat White",value:"flatwhite"},{label:"Cappuccino",value:"cappuccino"},{label:"Americano",value:"americano"},{label:"Mocha",value:"mocha"}]}),name:"Query search mode"},g={render:()=>e.createElement(l,{label:"What is your favourite coffee?",emptyOptionListText:"There's nothing here",options:[{label:"Espresso",value:"espresso"},{label:"Double Espresso",value:"doubleespresso"},{label:"Flat White",value:"flatwhite"},{label:"Cappuccino",value:"cappuccino"},{label:"Americano",value:"americano"},{label:"Mocha",value:"mocha"}]}),name:"Empty option list text"},E={render:()=>e.createElement(l,{label:"What is your favourite coffee?",charactersUntilSuggestion:5,options:[{label:"Espresso",value:"espresso"},{label:"Double Espresso",value:"doubleespresso"},{label:"Flat White",value:"flatwhite"},{label:"Cappuccino",value:"cappuccino"},{label:"Americano",value:"americano"},{label:"Mocha",value:"mocha"}]}),name:"Characters until suggestion"},y={render:()=>e.createElement(l,{label:"What is your favourite coffee?",assistiveHintText:"You can use up and down arrows to navigate the options when they are available, and press enter to select an option.",options:[{label:"Espresso",value:"espresso"},{label:"Double Espresso",value:"doubleespresso"},{label:"Flat White",value:"flatwhite"},{label:"Cappuccino",value:"cappuccino"},{label:"Americano",value:"americano"},{label:"Mocha",value:"mocha"}]}),name:"Hint text"},S={render:()=>e.createElement(l,{label:"What is your favourite coffee?",options:[{label:"Espresso because it tastes like coffee",value:"espresso"},{label:"Double Espresso because it tastes like double the amount of coffee",value:"doubleespresso"},{label:"Reallylongonewordanswerthatcouldbethenameofacoffee",value:"flatwhite"}]}),name:"Long option labels"},W={render:()=>e.createElement(_,null),name:"Controlled"},I={render:()=>e.createElement(P,null),name:"Uncontrolled"},F={render:a=>e.createElement(l,{autocapitalize:a.autocapitalize,autocorrect:a.autocorrect,autofocus:a.autofocus,charactersUntilSuggestion:a.charactersUntilSuggestion,disableAutoFiltering:a.disableAutoFiltering,disabled:a.disabled,focusOnLoad:a.focusOnLoad,fullWidth:a.fullWidth,helperText:a.helperText,hideLabel:a.hideLabel,label:a.label,loading:a.loading,options:[{label:"Espresso",value:"espresso"},{label:"Double Espresso",value:"doubleespresso"},{label:"Flat White",value:"flatwhite"},{label:"Cappuccino",value:"cappuccino"},{label:"Americano",value:"americano"},{label:"Mocha",value:"mocha"}],placeholder:a.placeholder,readonly:a.readonly,required:a.required,size:a.size,spellcheck:a.spellcheck,theme:a.theme}),args:R,argTypes:{autocapitalize:{options:["off","none","on","sentences","words","characters"],control:{type:"select"}},autocorrect:{options:["on","off"],control:{type:"inline-radio"}},size:{options:["medium","small"],control:{type:"inline-radio"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <IcSearchBar label="What is your favourite coffee?" onIcSubmitSearch={() => console.log("submit search")} />,
  name: "Default"
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcSearchBar label="What is your favourite coffee?" options={[{
      label: "Espresso",
      value: "espresso"
    }, {
      label: "Double Espresso",
      value: "doubleespresso"
    }, {
      label: "Flat White",
      value: "flatwhite"
    }, {
      label: "Cappuccino",
      value: "cappuccino"
    }, {
      label: "Americano",
      value: "americano"
    }, {
      label: "Mocha",
      value: "mocha"
    }]} />
    <br />
    <IcTypography>
      Suggested search options: Espresso, Double Espresso, Flat White,
      Cappuccino, Americano, Mocha
    </IcTypography>
    </>,
  name: "With options"
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <>
    <IcSearchBar label="What is your favourite coffee?" disableAutoFiltering options={[{
      label: "Espresso",
      value: "espresso"
    }, {
      label: "Double Espresso",
      value: "doubleespresso"
    }, {
      label: "Flat White",
      value: "flatwhite"
    }, {
      label: "Cappuccino",
      value: "cappuccino"
    }, {
      label: "Americano",
      value: "americano"
    }, {
      label: "Mocha",
      value: "mocha"
    }]} />
    <br />
    <IcTypography>All options will be displayed as you type</IcTypography>
    </>,
  name: "With options (no filtering)"
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <form onSubmit={ev => {
    ev.preventDefault();
    console.log(ev);
  }}>
        <IcSearchBar label="Submits form on search" onIcSubmitSearch={ev => console.log(ev)} />
        <IcSearchBar preventFormSubmitOnSearch label="Doesn't submit form on search" onIcSubmitSearch={ev => console.log(ev)} />
        <IcButton type="submit">Submit</IcButton>
    </form>,
  name: "In a form"
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <>
    <IcSearchBar label="What is your favourite coffee?" helperText="Some helper text" />
    <br />
    <IcSearchBar label="What is your favourite coffee?">
      <IcTypography variant="caption" slot="helper-text">
        <span>
          Slotted helper text with a <IcLink href="#">link</IcLink>
        </span>
      </IcTypography>
    </IcSearchBar>
    </>,
  name: "Helper text"
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <IcSearchBar label="What is your favourite coffee?" size="small" />,
  name: "Size small"
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <IcSearchBar label="What is your favourite coffee?" hideLabel />,
  name: "Hidden label"
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <IcSearchBar label="What is your favourite coffee?" disabled />,
  name: "Disabled"
}`,...b.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <>
    <IcSearchBar label="What is your favourite coffee?" fullWidth options={[{
      label: "Espresso",
      value: "espresso"
    }, {
      label: "Double Espresso",
      value: "doubleespresso"
    }, {
      label: "Flat White",
      value: "flatwhite"
    }, {
      label: "Cappuccino",
      value: "cappuccino"
    }, {
      label: "Americano",
      value: "americano"
    }, {
      label: "Mocha",
      value: "mocha"
    }]} />
    <br />
    <IcTypography>
      Suggested search options: Espresso, Double Espresso, Flat White,
      Cappuccino, Americano, Mocha
    </IcTypography>
    </>,
  name: "Full Width"
}`,...d.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <>
    <ExternalFiltering />
    <br />
    <IcTypography>
      Suggested search options: Espresso, Double Espresso, Flat White,
      Cappuccino, Americano, Mocha
    </IcTypography>
    <br />
    <IcTypography>
      The IcChange event will trigger 300ms after you finish typing. 1 second
      later, the options in the searchbar menu will be updated.
    </IcTypography>
    </>,
  name: "External filtering"
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <IcSearchBar label="What is your favourite coffee?" searchMode="query" onIcSubmitSearch={() => console.log("submit search")} options={[{
    label: "Espresso",
    value: "espresso"
  }, {
    label: "Double Espresso",
    value: "doubleespresso"
  }, {
    label: "Flat White",
    value: "flatwhite"
  }, {
    label: "Cappuccino",
    value: "cappuccino"
  }, {
    label: "Americano",
    value: "americano"
  }, {
    label: "Mocha",
    value: "mocha"
  }]} />,
  name: "Query search mode"
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <IcSearchBar label="What is your favourite coffee?" emptyOptionListText="There's nothing here" options={[{
    label: "Espresso",
    value: "espresso"
  }, {
    label: "Double Espresso",
    value: "doubleespresso"
  }, {
    label: "Flat White",
    value: "flatwhite"
  }, {
    label: "Cappuccino",
    value: "cappuccino"
  }, {
    label: "Americano",
    value: "americano"
  }, {
    label: "Mocha",
    value: "mocha"
  }]} />,
  name: "Empty option list text"
}`,...g.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <IcSearchBar label="What is your favourite coffee?" charactersUntilSuggestion={5} options={[{
    label: "Espresso",
    value: "espresso"
  }, {
    label: "Double Espresso",
    value: "doubleespresso"
  }, {
    label: "Flat White",
    value: "flatwhite"
  }, {
    label: "Cappuccino",
    value: "cappuccino"
  }, {
    label: "Americano",
    value: "americano"
  }, {
    label: "Mocha",
    value: "mocha"
  }]} />,
  name: "Characters until suggestion"
}`,...E.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <IcSearchBar label="What is your favourite coffee?" assistiveHintText="You can use up and down arrows to navigate the options when they are available, and press enter to select an option." options={[{
    label: "Espresso",
    value: "espresso"
  }, {
    label: "Double Espresso",
    value: "doubleespresso"
  }, {
    label: "Flat White",
    value: "flatwhite"
  }, {
    label: "Cappuccino",
    value: "cappuccino"
  }, {
    label: "Americano",
    value: "americano"
  }, {
    label: "Mocha",
    value: "mocha"
  }]} />,
  name: "Hint text"
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <IcSearchBar label="What is your favourite coffee?" options={[{
    label: "Espresso because it tastes like coffee",
    value: "espresso"
  }, {
    label: "Double Espresso because it tastes like double the amount of coffee",
    value: "doubleespresso"
  }, {
    label: "Reallylongonewordanswerthatcouldbethenameofacoffee",
    value: "flatwhite"
  }]} />,
  name: "Long option labels"
}`,...S.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledExample />,
  name: "Controlled"
}`,...W.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <Uncontrolled />,
  name: "Uncontrolled"
}`,...I.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => <IcSearchBar autocapitalize={args.autocapitalize} autocorrect={args.autocorrect} autofocus={args.autofocus} charactersUntilSuggestion={args.charactersUntilSuggestion} disableAutoFiltering={args.disableAutoFiltering} disabled={args.disabled} focusOnLoad={args.focusOnLoad} fullWidth={args.fullWidth} helperText={args.helperText} hideLabel={args.hideLabel} label={args.label} loading={args.loading} options={[{
    label: "Espresso",
    value: "espresso"
  }, {
    label: "Double Espresso",
    value: "doubleespresso"
  }, {
    label: "Flat White",
    value: "flatwhite"
  }, {
    label: "Cappuccino",
    value: "cappuccino"
  }, {
    label: "Americano",
    value: "americano"
  }, {
    label: "Mocha",
    value: "mocha"
  }]} placeholder={args.placeholder} readonly={args.readonly} required={args.required} size={args.size} spellcheck={args.spellcheck} theme={args.theme} />,
  args: defaultArgs,
  argTypes: {
    autocapitalize: {
      options: ["off", "none", "on", "sentences", "words", "characters"],
      control: {
        type: "select"
      }
    },
    autocorrect: {
      options: ["on", "off"],
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
    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: "inline-radio"
      }
    }
  },
  name: "Playground"
}`,...F.parameters?.docs?.source}}};const Q=["Default","WithOptions","WithOptionsNoFiltering","InAForm","HelperText","SizeSmall","HiddenLabel","Disabled","FullWidth","ExternalFiltering_","QuerySearchMode","EmptyOptionListText","CharactersUntilSuggestion","HintText","LongOptionLabels","Controlled","Uncontrolled_","Playground"],Y=Object.freeze(Object.defineProperty({__proto__:null,CharactersUntilSuggestion:E,Controlled:W,Default:s,Disabled:b,EmptyOptionListText:g,ExternalFiltering_:f,FullWidth:d,HelperText:p,HiddenLabel:h,HintText:y,InAForm:u,LongOptionLabels:S,Playground:F,QuerySearchMode:v,SizeSmall:m,Uncontrolled_:I,WithOptions:c,WithOptionsNoFiltering:i,__namedExportsOrder:Q,default:q},Symbol.toStringTag,{value:"Module"}));export{Y as I};
