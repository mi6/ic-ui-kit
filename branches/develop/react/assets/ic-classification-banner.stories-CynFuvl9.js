import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CqaISC1K.js";import{t as r}from"./jsx-runtime-CYvGHIMj.js";import{g as i,ut as a}from"./iframe-BYwLIcHr.js";var o=t({AdditionalSelectors:()=>m,BottomOfPage:()=>f,Classifications:()=>u,Country:()=>p,CustomClassificationStrings:()=>h,Playground:()=>g,UpTo:()=>d,__namedExportsOrder:()=>_,default:()=>l}),s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),a(),s=r(),c={additionalSelectors:``,classification:`official`,country:`uk`,customClassificationText:``,inline:!0,upTo:!1},l={title:`Classification banner`,component:i},u={render:()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{inline:`true`}),(0,s.jsx)(i,{classification:`official`,inline:`true`}),(0,s.jsx)(i,{classification:`official-sensitive`,inline:`true`}),(0,s.jsx)(i,{classification:`secret`,inline:`true`}),(0,s.jsx)(i,{classification:`top-secret`,inline:`true`})]}),name:`Classifications`},d={render:()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{inline:`true`}),(0,s.jsx)(i,{classification:`official`,inline:`true`,"up-to":`true`}),(0,s.jsx)(i,{classification:`official-sensitive`,inline:`true`,"up-to":`true`}),(0,s.jsx)(i,{classification:`secret`,inline:`true`,"up-to":`true`}),(0,s.jsx)(i,{classification:`top-secret`,inline:`true`,"up-to":`true`})]}),name:`Up to`},f={render:()=>(0,s.jsx)(i,{classification:`official`}),name:`Bottom of page`},p={render:()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{classification:`official`,inline:`true`,country:`us`}),(0,s.jsx)(i,{classification:`official`,inline:`true`,country:``})]}),name:`Country`},m={render:()=>(0,s.jsx)(i,{classification:`official`,inline:`true`,"additional-selectors":`UKIC`}),name:`Additional selectors`},h={render:()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{inline:`true`,customClassificationText:`Custom Unknown classification`}),(0,s.jsx)(i,{classification:`official`,inline:`true`,customClassificationText:`Custom Official classification`}),(0,s.jsx)(i,{classification:`official-sensitive`,inline:`true`,customClassificationText:`Custom Official-Sensitive classification`}),(0,s.jsx)(i,{classification:`secret`,inline:`true`,customClassificationText:`Custom Secret classification`}),(0,s.jsx)(i,{classification:`top-secret`,inline:`true`,customClassificationText:`Custom Top Secret classification`})]}),name:`Custom Classifications`},g={render:e=>(0,s.jsx)(i,{classification:e.classification,inline:e.inline,"up-to":e.upTo,country:e.country,"additional-selectors":e.additionalSelectors,"custom-classification-text":e.customClassificationText}),args:c,argTypes:{classification:{options:[`default`,`official`,`secret`,`official-sensitive`,`top-secret`],control:{type:`select`}}},name:`Playground`},_=[`Classifications`,`UpTo`,`BottomOfPage`,`Country`,`AdditionalSelectors`,`CustomClassificationStrings`,`Playground`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcClassificationBanner inline="true" />
      <IcClassificationBanner classification="official" inline="true" />
      <IcClassificationBanner classification="official-sensitive" inline="true" />
      <IcClassificationBanner classification="secret" inline="true" />
      <IcClassificationBanner classification="top-secret" inline="true" />
    </>,
  name: "Classifications"
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcClassificationBanner inline="true" />
      <IcClassificationBanner classification="official" inline="true" up-to="true" />
      <IcClassificationBanner classification="official-sensitive" inline="true" up-to="true" />
      <IcClassificationBanner classification="secret" inline="true" up-to="true" />
      <IcClassificationBanner classification="top-secret" inline="true" up-to="true" />
    </>,
  name: "Up to"
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <IcClassificationBanner classification="official" />,
  name: "Bottom of page"
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcClassificationBanner classification="official" inline="true" country="us" />
      <IcClassificationBanner classification="official" inline="true" country="" />
    </>,
  name: "Country"
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <IcClassificationBanner classification="official" inline="true" additional-selectors="UKIC" />,
  name: "Additional selectors"
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcClassificationBanner inline="true" customClassificationText="Custom Unknown classification" />
      <IcClassificationBanner classification="official" inline="true" customClassificationText="Custom Official classification" />
      <IcClassificationBanner classification="official-sensitive" inline="true" customClassificationText="Custom Official-Sensitive classification" />
      <IcClassificationBanner classification="secret" inline="true" customClassificationText="Custom Secret classification" />
      <IcClassificationBanner classification="top-secret" inline="true" customClassificationText="Custom Top Secret classification" />
    </>,
  name: "Custom Classifications"
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}}})))()}export{v as n,o as t};