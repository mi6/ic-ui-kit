import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./lit-html-CMAkC4Hj.js";var i=e({AdditionalSelectors:()=>d,BottomOfPage:()=>l,Classifications:()=>s,Country:()=>u,CustomClassificationStrings:()=>f,Playground:()=>p,UpTo:()=>c,__namedExportsOrder:()=>m,default:()=>o}),a,o,s,c,l,u,d,f,p,m,h=t((()=>{n(),a={additionalSelectors:``,classification:`official`,country:`uk`,customClassificationText:``,inline:!0,upTo:!1},o={title:`Web Components/Classification banner`,component:`ic-classification-banner`},s={render:()=>r`<ic-classification-banner inline="true"></ic-classification-banner>
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
      ></ic-classification-banner>`,name:`Classifications`},c={render:()=>r`<ic-classification-banner inline="true"></ic-classification-banner>
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
      ></ic-classification-banner>`,name:`Up to`},l={render:()=>r`<ic-classification-banner
      classification="official"
    ></ic-classification-banner>`,name:`Bottom of page`},u={render:()=>r`<ic-classification-banner
        classification="official"
        inline="true"
        country="us"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="official"
        inline="true"
        country=""
      ></ic-classification-banner>`,name:`Country`},d={render:()=>r`<ic-classification-banner
      classification="official"
      inline="true"
      additional-selectors="ukic"
    />`,name:`Additional selectors`},f={render:()=>r`<ic-classification-banner
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
      ></ic-classification-banner>`,name:`Custom Classifications`},p={render:e=>r`<ic-classification-banner
      classification=${e.classification}
      inline=${e.inline}
      up-to=${e.upTo}
      country=${e.country}
      additional-selectors=${e.additionalSelectors}
      custom-classification-text=${e.customClassificationText}
    ></ic-classification-banner>`,args:a,argTypes:{classification:{options:[`default`,`official`,`secret`,`official-sensitive`,`top-secret`],control:{type:`select`}}},name:`Playground`},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-classification-banner
      classification="official"
    ></ic-classification-banner>\`,
  name: "Bottom of page"
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-classification-banner
      classification="official"
      inline="true"
      additional-selectors="ukic"
    />\`,
  name: "Additional selectors"
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`Classifications`,`UpTo`,`BottomOfPage`,`Country`,`AdditionalSelectors`,`CustomClassificationStrings`,`Playground`]}));h();export{d as AdditionalSelectors,l as BottomOfPage,s as Classifications,u as Country,f as CustomClassificationStrings,p as Playground,c as UpTo,m as __namedExportsOrder,o as default,h as n,i as t};