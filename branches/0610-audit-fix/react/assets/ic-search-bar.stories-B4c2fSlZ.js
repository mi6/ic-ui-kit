import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-CqaISC1K.js";import{t as i}from"./jsx-runtime-CYvGHIMj.js";import{V as a,lt as o,u as s,ut as c}from"./iframe-D5omIgdX.js";var l=n({CharactersUntilSuggestion:()=>k,Controlled:()=>M,Default:()=>_,Disabled:()=>w,EmptyOptionListText:()=>O,ExternalFiltering_:()=>E,FullWidth:()=>T,HelperText:()=>x,HiddenLabel:()=>C,HintText:()=>A,InAForm:()=>b,LongOptionLabels:()=>j,Playground:()=>P,QuerySearchMode:()=>D,SizeSmall:()=>S,Uncontrolled_:()=>N,WithOptions:()=>v,WithOptionsNoFiltering:()=>y,__namedExportsOrder:()=>F,default:()=>g}),u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=t((()=>{u=e(r()),c(),d=i(),f=()=>{let e=[{label:`Espresso`,value:`espresso`},{label:`Double Espresso`,value:`doubleespresso`},{label:`Flat White`,value:`flatwhite`},{label:`Cappuccino`,value:`cappuccino`},{label:`Americano`,value:`americano`},{label:`Mocha`,value:`mocha`}],[t,n]=(0,u.useState)(null),[r,i]=(0,u.useState)([]),[o,s]=(0,u.useState)(!1),[c,l]=(0,u.useState)(!1);(0,u.useEffect)(()=>{let n=t?.detail.value;n!==c&&(n?.length>1?(c||s(!0),l(!1),(n=>{let r=e.filter(e=>e.label.toLowerCase().includes(n.toLowerCase()));return new Promise(e=>setTimeout(()=>e(r),t.type===`icChange`?2e3:500))})(n).then(e=>i(e))):i([])),l(!1)},[t,c]);let f=e=>{n(e)};return(0,d.jsx)(a,{loading:o,timeout:1e3,debounce:300,placeholder:`Type to search`,label:`Search for coffee`,onIcChange:f,onIcRetryLoad:f,onIcOptionSelect:()=>{l(!0)},disableAutoFiltering:!0,options:r,loadingLabel:`Loading time`,loadingErrorLabel:`Oops error`})},p=()=>{let[e,t]=(0,u.useState)(`cap`);return(0,d.jsx)(a,{placeholder:`Controlled`,label:`Controlled`,options:[{label:`Espresso`,value:`esp`},{label:`Double Espresso`,value:`dbl`},{label:`Flat White`,value:`fla`},{label:`Cappuccino`,value:`cap`},{label:`Americano`,value:`ame`},{label:`Mocha`,value:`moc`}],value:e,onIcChange:e=>{console.log(e.detail.value),t(e.detail.value)}})},m=()=>{let e=(0,u.useRef)();return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(a,{ref:e,placeholder:`Uncontrolled`,label:`Uncontrolled`,options:[{label:`Espresso`,value:`esp`},{label:`Double Espresso`,value:`dbl`},{label:`Flat White`,value:`fla`},{label:`Cappuccino`,value:`cap`},{label:`Americano`,value:`ame`},{label:`Mocha`,value:`moc`}],onIcChange:()=>{console.log(e.current.value)}})})},h={autocapitalize:`off`,autocorrect:`off`,autofocus:!1,charactersUntilSuggestion:2,disableAutoFiltering:!1,disabled:!1,focusOnLoad:!0,fullWidth:!1,helperText:``,hideLabel:!1,label:`What is your favourite coffee?`,loading:!1,placeholder:`Search`,readonly:!1,required:!1,size:`medium`,spellcheck:!1,theme:`inherit`},g={title:`Search bar`,component:a},_={render:()=>(0,d.jsx)(a,{label:`What is your favourite coffee?`,onIcSubmitSearch:()=>console.log(`submit search`)}),name:`Default`},v={render:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{label:`What is your favourite coffee?`,options:[{label:`Espresso`,value:`espresso`},{label:`Double Espresso`,value:`doubleespresso`},{label:`Flat White`,value:`flatwhite`},{label:`Cappuccino`,value:`cappuccino`},{label:`Americano`,value:`americano`},{label:`Mocha`,value:`mocha`}]}),(0,d.jsx)(`br`,{}),(0,d.jsx)(o,{children:`Suggested search options: Espresso, Double Espresso, Flat White, Cappuccino, Americano, Mocha`})]}),name:`With options`},y={render:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{label:`What is your favourite coffee?`,disableAutoFiltering:!0,options:[{label:`Espresso`,value:`espresso`},{label:`Double Espresso`,value:`doubleespresso`},{label:`Flat White`,value:`flatwhite`},{label:`Cappuccino`,value:`cappuccino`},{label:`Americano`,value:`americano`},{label:`Mocha`,value:`mocha`}]}),(0,d.jsx)(`br`,{}),(0,d.jsx)(o,{children:`All options will be displayed as you type`})]}),name:`With options (no filtering)`},b={render:()=>(0,d.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),console.log(e)},children:[(0,d.jsx)(a,{label:`Submits form on search`,onIcSubmitSearch:e=>console.log(e)}),(0,d.jsx)(a,{preventFormSubmitOnSearch:!0,label:`Doesn't submit form on search`,onIcSubmitSearch:e=>console.log(e)}),(0,d.jsx)(s,{type:`submit`,children:`Submit`})]}),name:`In a form`},x={render:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{label:`What is your favourite coffee?`,helperText:`Some helper text`}),(0,d.jsx)(`br`,{}),(0,d.jsx)(a,{label:`What is your favourite coffee?`,children:(0,d.jsx)(o,{variant:`caption`,slot:`helper-text`,children:(0,d.jsxs)(`span`,{children:[`Slotted helper text with a `,(0,d.jsx)(IcLink,{href:`#`,children:`link`})]})})})]}),name:`Helper text`},S={render:()=>(0,d.jsx)(a,{label:`What is your favourite coffee?`,size:`small`}),name:`Size small`},C={render:()=>(0,d.jsx)(a,{label:`What is your favourite coffee?`,hideLabel:!0}),name:`Hidden label`},w={render:()=>(0,d.jsx)(a,{label:`What is your favourite coffee?`,disabled:!0}),name:`Disabled`},T={render:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{label:`What is your favourite coffee?`,fullWidth:!0,options:[{label:`Espresso`,value:`espresso`},{label:`Double Espresso`,value:`doubleespresso`},{label:`Flat White`,value:`flatwhite`},{label:`Cappuccino`,value:`cappuccino`},{label:`Americano`,value:`americano`},{label:`Mocha`,value:`mocha`}]}),(0,d.jsx)(`br`,{}),(0,d.jsx)(o,{children:`Suggested search options: Espresso, Double Espresso, Flat White, Cappuccino, Americano, Mocha`})]}),name:`Full Width`},E={render:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(f,{}),(0,d.jsx)(`br`,{}),(0,d.jsx)(o,{children:`Suggested search options: Espresso, Double Espresso, Flat White, Cappuccino, Americano, Mocha`}),(0,d.jsx)(`br`,{}),(0,d.jsx)(o,{children:`The IcChange event will trigger 300ms after you finish typing. 1 second later, the options in the searchbar menu will be updated.`})]}),name:`External filtering`},D={render:()=>(0,d.jsx)(a,{label:`What is your favourite coffee?`,searchMode:`query`,onIcSubmitSearch:()=>console.log(`submit search`),options:[{label:`Espresso`,value:`espresso`},{label:`Double Espresso`,value:`doubleespresso`},{label:`Flat White`,value:`flatwhite`},{label:`Cappuccino`,value:`cappuccino`},{label:`Americano`,value:`americano`},{label:`Mocha`,value:`mocha`}]}),name:`Query search mode`},O={render:()=>(0,d.jsx)(a,{label:`What is your favourite coffee?`,emptyOptionListText:`There's nothing here`,options:[{label:`Espresso`,value:`espresso`},{label:`Double Espresso`,value:`doubleespresso`},{label:`Flat White`,value:`flatwhite`},{label:`Cappuccino`,value:`cappuccino`},{label:`Americano`,value:`americano`},{label:`Mocha`,value:`mocha`}]}),name:`Empty option list text`},k={render:()=>(0,d.jsx)(a,{label:`What is your favourite coffee?`,charactersUntilSuggestion:5,options:[{label:`Espresso`,value:`espresso`},{label:`Double Espresso`,value:`doubleespresso`},{label:`Flat White`,value:`flatwhite`},{label:`Cappuccino`,value:`cappuccino`},{label:`Americano`,value:`americano`},{label:`Mocha`,value:`mocha`}]}),name:`Characters until suggestion`},A={render:()=>(0,d.jsx)(a,{label:`What is your favourite coffee?`,assistiveHintText:`You can use up and down arrows to navigate the options when they are available, and press enter to select an option.`,options:[{label:`Espresso`,value:`espresso`},{label:`Double Espresso`,value:`doubleespresso`},{label:`Flat White`,value:`flatwhite`},{label:`Cappuccino`,value:`cappuccino`},{label:`Americano`,value:`americano`},{label:`Mocha`,value:`mocha`}]}),name:`Hint text`},j={render:()=>(0,d.jsx)(a,{label:`What is your favourite coffee?`,options:[{label:`Espresso because it tastes like coffee`,value:`espresso`},{label:`Double Espresso because it tastes like double the amount of coffee`,value:`doubleespresso`},{label:`Reallylongonewordanswerthatcouldbethenameofacoffee`,value:`flatwhite`}]}),name:`Long option labels`},M={render:()=>(0,d.jsx)(p,{}),name:`Controlled`},N={render:()=>(0,d.jsx)(m,{}),name:`Uncontrolled`},P={render:e=>(0,d.jsx)(a,{autocapitalize:e.autocapitalize,autocorrect:e.autocorrect,autofocus:e.autofocus,charactersUntilSuggestion:e.charactersUntilSuggestion,disableAutoFiltering:e.disableAutoFiltering,disabled:e.disabled,focusOnLoad:e.focusOnLoad,fullWidth:e.fullWidth,helperText:e.helperText,hideLabel:e.hideLabel,label:e.label,loading:e.loading,options:[{label:`Espresso`,value:`espresso`},{label:`Double Espresso`,value:`doubleespresso`},{label:`Flat White`,value:`flatwhite`},{label:`Cappuccino`,value:`cappuccino`},{label:`Americano`,value:`americano`},{label:`Mocha`,value:`mocha`}],placeholder:e.placeholder,readonly:e.readonly,required:e.required,size:e.size,spellcheck:e.spellcheck,theme:e.theme}),args:h,argTypes:{autocapitalize:{options:[`off`,`none`,`on`,`sentences`,`words`,`characters`],control:{type:`select`}},autocorrect:{options:[`on`,`off`],control:{type:`inline-radio`}},size:{options:[`medium`,`small`],control:{type:`inline-radio`}},theme:{options:[`inherit`,`light`,`dark`],control:{type:`inline-radio`}}},name:`Playground`},F=[`Default`,`WithOptions`,`WithOptionsNoFiltering`,`InAForm`,`HelperText`,`SizeSmall`,`HiddenLabel`,`Disabled`,`FullWidth`,`ExternalFiltering_`,`QuerySearchMode`,`EmptyOptionListText`,`CharactersUntilSuggestion`,`HintText`,`LongOptionLabels`,`Controlled`,`Uncontrolled_`,`Playground`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <IcSearchBar label="What is your favourite coffee?" onIcSubmitSearch={() => console.log("submit search")} />,
  name: "Default"
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <form onSubmit={ev => {
    ev.preventDefault();
    console.log(ev);
  }}>
        <IcSearchBar label="Submits form on search" onIcSubmitSearch={ev => console.log(ev)} />
        <IcSearchBar preventFormSubmitOnSearch label="Doesn't submit form on search" onIcSubmitSearch={ev => console.log(ev)} />
        <IcButton type="submit">Submit</IcButton>
    </form>,
  name: "In a form"
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <IcSearchBar label="What is your favourite coffee?" size="small" />,
  name: "Size small"
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <IcSearchBar label="What is your favourite coffee?" hideLabel />,
  name: "Hidden label"
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <IcSearchBar label="What is your favourite coffee?" disabled />,
  name: "Disabled"
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledExample />,
  name: "Controlled"
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <Uncontrolled />,
  name: "Uncontrolled"
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}}})))()}export{I as n,l as t};