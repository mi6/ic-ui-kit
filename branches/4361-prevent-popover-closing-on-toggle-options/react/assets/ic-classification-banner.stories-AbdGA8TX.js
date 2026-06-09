import{q as e,R as i}from"./iframe-Bevd7f6N.js";const f={additionalSelectors:"",classification:"official",country:"uk",customClassificationText:"",inline:!0,upTo:!1},u={title:"Classification banner",component:e},t={render:()=>i.createElement(i.Fragment,null,i.createElement(e,{inline:"true"}),i.createElement(e,{classification:"official",inline:"true"}),i.createElement(e,{classification:"official-sensitive",inline:"true"}),i.createElement(e,{classification:"secret",inline:"true"}),i.createElement(e,{classification:"top-secret",inline:"true"})),name:"Classifications"},a={render:()=>i.createElement(i.Fragment,null,i.createElement(e,{inline:"true"}),i.createElement(e,{classification:"official",inline:"true","up-to":"true"}),i.createElement(e,{classification:"official-sensitive",inline:"true","up-to":"true"}),i.createElement(e,{classification:"secret",inline:"true","up-to":"true"}),i.createElement(e,{classification:"top-secret",inline:"true","up-to":"true"})),name:"Up to"},s={render:()=>i.createElement(e,{classification:"official"}),name:"Bottom of page"},c={render:()=>i.createElement(i.Fragment,null,i.createElement(e,{classification:"official",inline:"true",country:"us"}),i.createElement(e,{classification:"official",inline:"true",country:""})),name:"Country"},o={render:()=>i.createElement(e,{classification:"official",inline:"true","additional-selectors":"UKIC"}),name:"Additional selectors"},r={render:()=>i.createElement(i.Fragment,null,i.createElement(e,{inline:"true",customClassificationText:"Custom Unknown classification"}),i.createElement(e,{classification:"official",inline:"true",customClassificationText:"Custom Official classification"}),i.createElement(e,{classification:"official-sensitive",inline:"true",customClassificationText:"Custom Official-Sensitive classification"}),i.createElement(e,{classification:"secret",inline:"true",customClassificationText:"Custom Secret classification"}),i.createElement(e,{classification:"top-secret",inline:"true",customClassificationText:"Custom Top Secret classification"})),name:"Custom Classifications"},l={render:n=>i.createElement(e,{classification:n.classification,inline:n.inline,"up-to":n.upTo,country:n.country,"additional-selectors":n.additionalSelectors,"custom-classification-text":n.customClassificationText}),args:f,argTypes:{classification:{options:["default","official","secret","official-sensitive","top-secret"],control:{type:"select"}}},name:"Playground"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcClassificationBanner inline="true" />
      <IcClassificationBanner classification="official" inline="true" />
      <IcClassificationBanner classification="official-sensitive" inline="true" />
      <IcClassificationBanner classification="secret" inline="true" />
      <IcClassificationBanner classification="top-secret" inline="true" />
    </>,
  name: "Classifications"
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcClassificationBanner inline="true" />
      <IcClassificationBanner classification="official" inline="true" up-to="true" />
      <IcClassificationBanner classification="official-sensitive" inline="true" up-to="true" />
      <IcClassificationBanner classification="secret" inline="true" up-to="true" />
      <IcClassificationBanner classification="top-secret" inline="true" up-to="true" />
    </>,
  name: "Up to"
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <IcClassificationBanner classification="official" />,
  name: "Bottom of page"
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcClassificationBanner classification="official" inline="true" country="us" />
      <IcClassificationBanner classification="official" inline="true" country="" />
    </>,
  name: "Country"
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <IcClassificationBanner classification="official" inline="true" additional-selectors="UKIC" />,
  name: "Additional selectors"
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcClassificationBanner inline="true" customClassificationText="Custom Unknown classification" />
      <IcClassificationBanner classification="official" inline="true" customClassificationText="Custom Official classification" />
      <IcClassificationBanner classification="official-sensitive" inline="true" customClassificationText="Custom Official-Sensitive classification" />
      <IcClassificationBanner classification="secret" inline="true" customClassificationText="Custom Secret classification" />
      <IcClassificationBanner classification="top-secret" inline="true" customClassificationText="Custom Top Secret classification" />
    </>,
  name: "Custom Classifications"
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <IcClassificationBanner classification={args.classification} inline={args.inline} up-to={args.upTo} country={args.country} additional-selectors={args.additionalSelectors} custom-classification-text={args.customClassificationText}></IcClassificationBanner>,
  args: defaultArgs,
  argTypes: {
    classification: {
      options: ["default", "official", "secret", "official-sensitive", "top-secret"],
      control: {
        type: "select"
      }
    }
  },
  name: "Playground"
}`,...l.parameters?.docs?.source}}};const m=["Classifications","UpTo","BottomOfPage","Country","AdditionalSelectors","CustomClassificationStrings","Playground"],p=Object.freeze(Object.defineProperty({__proto__:null,AdditionalSelectors:o,BottomOfPage:s,Classifications:t,Country:c,CustomClassificationStrings:r,Playground:l,UpTo:a,__namedExportsOrder:m,default:u},Symbol.toStringTag,{value:"Module"}));export{p as I};
