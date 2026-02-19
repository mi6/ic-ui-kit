import{x as i}from"./lit-html-CWQq0DyO.js";const r={additionalSelectors:"",classification:"official",country:"uk",inline:!0,upTo:!1},l={title:"Web Components/Classification banner",component:"ic-classification-banner"},a={render:()=>i`<ic-classification-banner inline="true"></ic-classification-banner>
      <ic-classification-banner
        classification="official"
        inline="true"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="official-sensitive"
        inline="true"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="secret"
        inline="true"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="top-secret"
        inline="true"
      ></ic-classification-banner>`,name:"Classifications"},c={render:()=>i`<ic-classification-banner inline="true"></ic-classification-banner>
      <ic-classification-banner
        classification="official"
        inline="true"
        up-to="true"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="official-sensitive"
        inline="true"
        up-to="true"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="secret"
        inline="true"
        up-to="true"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="top-secret"
        inline="true"
        up-to="true"
      ></ic-classification-banner>`,name:"Up to"},e={render:()=>i`<ic-classification-banner
      classification="official"
    ></ic-classification-banner>`,name:"Bottom of page"},s={render:()=>i`<ic-classification-banner
        classification="official"
        inline="true"
        country="us"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="official"
        inline="true"
        country=""
      ></ic-classification-banner>`,name:"Country"},t={render:()=>i`<ic-classification-banner
      classification="official"
      inline="true"
      additional-selectors="ukic"
    />`,name:"Additional selectors"},o={render:n=>i`<ic-classification-banner
      classification=${n.classification}
      inline=${n.inline}
      up-to=${n.upTo}
      country=${n.country}
      additional-selectors=${n.additionalSelectors}
    ></ic-classification-banner>`,args:r,argTypes:{classification:{options:["default","official","secret","official-sensitive","top-secret"],control:{type:"select"}}},name:"Playground"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-classification-banner inline="true"></ic-classification-banner>
      <ic-classification-banner
        classification="official"
        inline="true"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="official-sensitive"
        inline="true"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="secret"
        inline="true"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="top-secret"
        inline="true"
      ></ic-classification-banner>\`,
  name: "Classifications"
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-classification-banner inline="true"></ic-classification-banner>
      <ic-classification-banner
        classification="official"
        inline="true"
        up-to="true"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="official-sensitive"
        inline="true"
        up-to="true"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="secret"
        inline="true"
        up-to="true"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="top-secret"
        inline="true"
        up-to="true"
      ></ic-classification-banner>\`,
  name: "Up to"
}`,...c.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-classification-banner
      classification="official"
    ></ic-classification-banner>\`,
  name: "Bottom of page"
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-classification-banner
        classification="official"
        inline="true"
        country="us"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="official"
        inline="true"
        country=""
      ></ic-classification-banner>\`,
  name: "Country"
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-classification-banner
      classification="official"
      inline="true"
      additional-selectors="ukic"
    />\`,
  name: "Additional selectors"
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => html\`<ic-classification-banner
      classification=\${args.classification}
      inline=\${args.inline}
      up-to=\${args.upTo}
      country=\${args.country}
      additional-selectors=\${args.additionalSelectors}
    ></ic-classification-banner>\`,
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
}`,...o.parameters?.docs?.source}}};const f=["Classifications","UpTo","BottomOfPage","Country","AdditionalSelectors","Playground"],d=Object.freeze(Object.defineProperty({__proto__:null,AdditionalSelectors:t,BottomOfPage:e,Classifications:a,Country:s,Playground:o,UpTo:c,__namedExportsOrder:f,default:l},Symbol.toStringTag,{value:"Module"}));export{d as I};
