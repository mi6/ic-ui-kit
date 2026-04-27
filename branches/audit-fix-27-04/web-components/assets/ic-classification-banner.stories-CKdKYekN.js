import{b as i}from"./lit-html-B6sBSybp.js";const l={additionalSelectors:"",classification:"official",country:"uk",customClassificationText:"",inline:!0,upTo:!1},f={title:"Web Components/Classification banner",component:"ic-classification-banner"},a={render:()=>i`<ic-classification-banner inline="true"></ic-classification-banner>
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
      ></ic-classification-banner>`,name:"Up to"},s={render:()=>i`<ic-classification-banner
      classification="official"
    ></ic-classification-banner>`,name:"Bottom of page"},t={render:()=>i`<ic-classification-banner
        classification="official"
        inline="true"
        country="us"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="official"
        inline="true"
        country=""
      ></ic-classification-banner>`,name:"Country"},e={render:()=>i`<ic-classification-banner
      classification="official"
      inline="true"
      additional-selectors="ukic"
    />`,name:"Additional selectors"},o={render:()=>i`<ic-classification-banner
        inline="true"
        custom-classification-text="Custom Unknown classification"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="official"
        inline="true"
        custom-classification-text="Custom Official classification"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="official-sensitive"
        inline="true"
        custom-classification-text="Custom Official-Sensitive classification"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="secret"
        inline="true"
        custom-classification-text="Custom Secret classification"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="top-secret"
        inline="true"
        custom-classification-text="Custom Top Secret classification"
      ></ic-classification-banner>`,name:"Custom Classifications"},r={render:n=>i`<ic-classification-banner
      classification=${n.classification}
      inline=${n.inline}
      up-to=${n.upTo}
      country=${n.country}
      additional-selectors=${n.additionalSelectors}
      custom-classification-text=${n.customClassificationText}
    ></ic-classification-banner>`,args:l,argTypes:{classification:{options:["default","official","secret","official-sensitive","top-secret"],control:{type:"select"}}},name:"Playground"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-classification-banner
      classification="official"
    ></ic-classification-banner>\`,
  name: "Bottom of page"
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-classification-banner
      classification="official"
      inline="true"
      additional-selectors="ukic"
    />\`,
  name: "Additional selectors"
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-classification-banner
        inline="true"
        custom-classification-text="Custom Unknown classification"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="official"
        inline="true"
        custom-classification-text="Custom Official classification"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="official-sensitive"
        inline="true"
        custom-classification-text="Custom Official-Sensitive classification"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="secret"
        inline="true"
        custom-classification-text="Custom Secret classification"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="top-secret"
        inline="true"
        custom-classification-text="Custom Top Secret classification"
      ></ic-classification-banner>\`,
  name: "Custom Classifications"
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => html\`<ic-classification-banner
      classification=\${args.classification}
      inline=\${args.inline}
      up-to=\${args.upTo}
      country=\${args.country}
      additional-selectors=\${args.additionalSelectors}
      custom-classification-text=\${args.customClassificationText}
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
}`,...r.parameters?.docs?.source}}};const u=["Classifications","UpTo","BottomOfPage","Country","AdditionalSelectors","CustomClassificationStrings","Playground"],b=Object.freeze(Object.defineProperty({__proto__:null,AdditionalSelectors:e,BottomOfPage:s,Classifications:a,Country:t,CustomClassificationStrings:o,Playground:r,UpTo:c,__namedExportsOrder:u,default:f},Symbol.toStringTag,{value:"Module"}));export{b as I};
