import{q as i,R as e}from"./iframe-BzKgjAAY.js";const l={additionalSelectors:"",classification:"official",country:"uk",inline:!0,upTo:!1},f={title:"Classification banner",component:i},a={render:()=>e.createElement(e.Fragment,null,e.createElement(i,{inline:"true"}),e.createElement(i,{classification:"official",inline:"true"}),e.createElement(i,{classification:"official-sensitive",inline:"true"}),e.createElement(i,{classification:"secret",inline:"true"}),e.createElement(i,{classification:"top-secret",inline:"true"})),name:"Classifications"},t={render:()=>e.createElement(e.Fragment,null,e.createElement(i,{inline:"true"}),e.createElement(i,{classification:"official",inline:"true","up-to":"true"}),e.createElement(i,{classification:"official-sensitive",inline:"true","up-to":"true"}),e.createElement(i,{classification:"secret",inline:"true","up-to":"true"}),e.createElement(i,{classification:"top-secret",inline:"true","up-to":"true"})),name:"Up to"},s={render:()=>e.createElement(i,{classification:"official"}),name:"Bottom of page"},r={render:()=>e.createElement(e.Fragment,null,e.createElement(i,{classification:"official",inline:"true",country:"us"}),e.createElement(i,{classification:"official",inline:"true",country:""})),name:"Country"},c={render:()=>e.createElement(i,{classification:"official",inline:"true","additional-selectors":"UKIC"}),name:"Additional selectors"},o={render:n=>e.createElement(i,{classification:n.classification,inline:n.inline,"up-to":n.upTo,country:n.country,"additional-selectors":n.additionalSelectors}),args:l,argTypes:{classification:{options:["default","official","secret","official-sensitive","top-secret"],control:{type:"select"}}},name:"Playground"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcClassificationBanner inline="true" />
      <IcClassificationBanner classification="official" inline="true" />
      <IcClassificationBanner classification="official-sensitive" inline="true" />
      <IcClassificationBanner classification="secret" inline="true" />
      <IcClassificationBanner classification="top-secret" inline="true" />
    </>,
  name: "Classifications"
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcClassificationBanner inline="true" />
      <IcClassificationBanner classification="official" inline="true" up-to="true" />
      <IcClassificationBanner classification="official-sensitive" inline="true" up-to="true" />
      <IcClassificationBanner classification="secret" inline="true" up-to="true" />
      <IcClassificationBanner classification="top-secret" inline="true" up-to="true" />
    </>,
  name: "Up to"
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <IcClassificationBanner classification="official" />,
  name: "Bottom of page"
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcClassificationBanner classification="official" inline="true" country="us" />
      <IcClassificationBanner classification="official" inline="true" country="" />
    </>,
  name: "Country"
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <IcClassificationBanner classification="official" inline="true" additional-selectors="UKIC" />,
  name: "Additional selectors"
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <IcClassificationBanner classification={args.classification} inline={args.inline} up-to={args.upTo} country={args.country} additional-selectors={args.additionalSelectors}></IcClassificationBanner>,
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
}`,...o.parameters?.docs?.source}}};const u=["Classifications","UpTo","BottomOfPage","Country","AdditionalSelectors","Playground"],d=Object.freeze(Object.defineProperty({__proto__:null,AdditionalSelectors:c,BottomOfPage:s,Classifications:a,Country:r,Playground:o,UpTo:t,__namedExportsOrder:u,default:f},Symbol.toStringTag,{value:"Module"}));export{d as I};
