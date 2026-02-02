import{t as c,R as e,u as r,v as a,w as n,l as b,r as w,f as P}from"./iframe-CFjuv6ZO.js";import{S as M}from"./slottedSVG-BI70ZJiZ.js";const V=()=>{const[l,T]=w.useState(0);return e.createElement(e.Fragment,null,e.createElement(c,{selectedTabIndex:l,onIcTabSelect:v=>T(v.detail.tabIndex)},e.createElement(r,{label:"Example tab group"},e.createElement(a,null,"One"),e.createElement(a,null,"Two"),e.createElement(a,null,"Three")),e.createElement(n,null,"Tab One"),e.createElement(n,null,"Tab Two"),e.createElement(n,null,"Tab Three")))},z=()=>{const[l,T]=w.useState([]);w.useEffect(()=>{setTimeout(()=>{T([{label:"Ingredients"},{label:"Method"},{label:"History"}])},3e3)},[]);const v=()=>{const t="abcdefghijklmnopqrstuvwxyz";let o="";for(let x=0;x<3;x++)o+=t.charAt(Math.floor(Math.random()*t.length));return o},f=()=>{T([...l,{label:v()}])},H=()=>{l.pop(),T([...l])};return e.createElement("div",{className:"wrapper"},e.createElement(P,{onClick:f},"Add Tab"),e.createElement(P,{onClick:H},"Remove Tab"),e.createElement(c,{onIcTabSelect:t=>console.log({tabIndex:t.detail.tabIndex,tabLabel:t.detail.tabLabel})},e.createElement(r,{label:"Example tab group"},l.map((t,o)=>e.createElement(a,{key:`${t.label}-${o}`},o===2&&e.createElement(M,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},e.createElement("path",{d:"M9,21V22H7V21A2,2 0 0,1 5,19V4A2,2 0 0,1 7,2H17A2,2 0 0,1 19,4V19A2,2 0 0,1 17,21V22H15V21H9M7,4V9H17V4H7M7,19H17V11H7V19M8,12H10V15H8V12M8,6H10V8H8V6Z"})),t.label))),e.createElement("span",null),l.map((t,o)=>e.createElement(n,{key:`${t.label}-${o}`},e.createElement("p",null,"Tab ",o," - ",t.label)))))},O={activationType:"automatic",disabled:!1,inline:!1,groupLabel:"Example tab group",theme:"inherit",monochrome:!1},y={title:"Tabs",component:c},i={render:()=>e.createElement(c,{onIcTabSelect:l=>console.log(l.detail)},e.createElement(r,{label:"Example tab group"},e.createElement(a,null,"One"),e.createElement(a,null,"Two"),e.createElement(a,null,"Three")),e.createElement(n,null,"Tab One"),e.createElement(n,null,"Tab Two"),e.createElement(n,null,"Tab Three")),name:"Default"},s={render:()=>e.createElement(c,null,e.createElement(r,{label:"Example tab group"},e.createElement(a,null,"One",e.createElement("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},e.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.createElement("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}))),e.createElement(a,null,"Two",e.createElement("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},e.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.createElement("path",{d:"M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"}))),e.createElement(a,null,"Three",e.createElement("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},e.createElement("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"})))),e.createElement(n,null,"Tab One"),e.createElement(n,null,"Tab Two"),e.createElement(n,null,"Tab Three")),name:"With icons"},m={render:()=>e.createElement(c,null,e.createElement(r,{label:"Example tab group"},e.createElement(a,null,"Near",e.createElement(b,{label:"2",slot:"badge",variant:"info",position:"near"})),e.createElement(a,null,"Far",e.createElement(b,{label:"2",slot:"badge",variant:"info",position:"far"})),e.createElement(a,null,"Inline",e.createElement(b,{label:"2",slot:"badge",variant:"info",position:"inline"})),e.createElement(a,null,"Near",e.createElement("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},e.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.createElement("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"})),e.createElement(b,{label:"2",slot:"badge",variant:"info",position:"near"})),e.createElement(a,null,"Far",e.createElement("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},e.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.createElement("path",{d:"M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"})),e.createElement(b,{label:"2",slot:"badge",variant:"info",position:"far"})),e.createElement(a,null,"Inline",e.createElement("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},e.createElement("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"})),e.createElement(b,{label:"2",slot:"badge",variant:"info",position:"inline"}))),e.createElement(n,null,"Tab Near"),e.createElement(n,null,"Tab Far"),e.createElement(n,null,"Tab Inline"),e.createElement(n,null,"Tab Near"),e.createElement(n,null,"Tab Far"),e.createElement(n,null,"Tab Inline")),name:"With icons and badges"},p={render:()=>e.createElement(c,null,e.createElement(r,{label:"Example tab group"},e.createElement(a,null,"One"),e.createElement(a,{disabled:!0},"Two"),e.createElement(a,null,"Three")),e.createElement(n,null,"Tab One"),e.createElement(n,null,"Tab Two"),e.createElement(n,null,"Tab Three")),name:"Disabled"},I={render:()=>e.createElement(c,null,e.createElement(r,{label:"Example tab group",inline:!0},e.createElement(a,null,"One"),e.createElement(a,null,"Two"),e.createElement(a,null,"Three")),e.createElement(n,null,"Tab One"),e.createElement(n,null,"Tab Two"),e.createElement(n,null,"Tab Three")),name:"Inline"},u={render:()=>e.createElement(V,null),name:"Controlled"},d={render:()=>e.createElement(c,{activationType:"manual"},e.createElement(r,{label:"Example tab group"},e.createElement(a,null,"One"),e.createElement(a,null,"Two"),e.createElement(a,null,"Three")),e.createElement(n,null,"Tab One"),e.createElement(n,null,"Tab Two"),e.createElement(n,null,"Tab Three")),name:"Manual activation"},h={render:()=>e.createElement(c,null,e.createElement(r,{label:"Example tab group"},e.createElement(a,null,"One"),e.createElement(a,null,"Two"),e.createElement(a,null,"Three"),e.createElement(a,null,"Four"),e.createElement(a,null,"Five"),e.createElement(a,null,"Six"),e.createElement(a,null,"Seven"),e.createElement(a,null,"Eight"),e.createElement(a,null,"Nine"),e.createElement(a,null,"Ten"),e.createElement(a,null,"Eleven"),e.createElement(a,null,"Twelve")),e.createElement(n,null,"Tab One"),e.createElement(n,null,"Tab Two"),e.createElement(n,null,"Tab Three"),e.createElement(n,null,"Tab Four"),e.createElement(n,null,"Tab Five"),e.createElement(n,null,"Tab Six"),e.createElement(n,null,"Tab Seven"),e.createElement(n,null,"Tab Eight"),e.createElement(n,null,"Tab Nine"),e.createElement(n,null,"Tab Ten"),e.createElement(n,null,"Tab Eleven"),e.createElement(n,null,"Tab Twelve")),name:"Responsive"},E={render:()=>e.createElement(z,null),name:"Dynamic rendering"},g={render:l=>e.createElement("div",null,e.createElement(c,{activationType:l.activationType,theme:l.theme,monochrome:l.monochrome},e.createElement(r,{label:l.groupLabel,inline:l.inline},e.createElement(a,{disabled:l.disabled},"One"),e.createElement(a,null,"Two",e.createElement(b,{label:"1",slot:"badge",position:"inline",accessibleLabel:"1 notification found"})),e.createElement(a,null,"Three",e.createElement("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},e.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.createElement("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}))),e.createElement(a,null,"Four")),e.createElement(n,null,"Tab One"),e.createElement(n,null,"Tab Two"),e.createElement(n,null,"Tab Three"),e.createElement(n,null,"Tab Four"))),args:O,argTypes:{activationType:{options:["automatic","manual"],control:{type:"inline-radio"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <IcTabContext onIcTabSelect={ev => console.log(ev.detail)}>
      <IcTabGroup label="Example tab group">
        <IcTab>One</IcTab>
        <IcTab>Two</IcTab>
        <IcTab>Three</IcTab>
      </IcTabGroup>
      <IcTabPanel>Tab One</IcTabPanel>
      <IcTabPanel>Tab Two</IcTabPanel>
      <IcTabPanel>Tab Three</IcTabPanel>
    </IcTabContext>,
  name: "Default"
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <IcTabContext>
      <IcTabGroup label="Example tab group">
        <IcTab>
          One
          <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
          </svg>
        </IcTab>
        <IcTab>
          Two
          <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z" />
          </svg>
        </IcTab>
        <IcTab>
          Three
          <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
          </svg>
        </IcTab>
      </IcTabGroup>
      <IcTabPanel>Tab One</IcTabPanel>
      <IcTabPanel>Tab Two</IcTabPanel>
      <IcTabPanel>Tab Three</IcTabPanel>
    </IcTabContext>,
  name: "With icons"
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <IcTabContext>
      <IcTabGroup label="Example tab group">
        <IcTab>
          Near
          <IcBadge label="2" slot="badge" variant="info" position="near" />
        </IcTab>
        <IcTab>
          Far
          <IcBadge label="2" slot="badge" variant="info" position="far" />
        </IcTab>
        <IcTab>
          Inline
          <IcBadge label="2" slot="badge" variant="info" position="inline" />
        </IcTab>
        <IcTab>
          Near
          <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
          </svg>
          <IcBadge label="2" slot="badge" variant="info" position="near" />
        </IcTab>
        <IcTab>
          Far
          <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z" />
          </svg>
          <IcBadge label="2" slot="badge" variant="info" position="far" />
        </IcTab>
        <IcTab>
          Inline
          <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
          </svg>
          <IcBadge label="2" slot="badge" variant="info" position="inline" />
        </IcTab>
      </IcTabGroup>
      <IcTabPanel>Tab Near</IcTabPanel>
      <IcTabPanel>Tab Far</IcTabPanel>
      <IcTabPanel>Tab Inline</IcTabPanel>
      <IcTabPanel>Tab Near</IcTabPanel>
      <IcTabPanel>Tab Far</IcTabPanel>
      <IcTabPanel>Tab Inline</IcTabPanel>
    </IcTabContext>,
  name: "With icons and badges"
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <IcTabContext>
      <IcTabGroup label="Example tab group">
        <IcTab>One</IcTab>
        <IcTab disabled>Two</IcTab>
        <IcTab>Three</IcTab>
      </IcTabGroup>
      <IcTabPanel>Tab One</IcTabPanel>
      <IcTabPanel>Tab Two</IcTabPanel>
      <IcTabPanel>Tab Three</IcTabPanel>
    </IcTabContext>,
  name: "Disabled"
}`,...p.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <IcTabContext>
      <IcTabGroup label="Example tab group" inline>
        <IcTab>One</IcTab>
        <IcTab>Two</IcTab>
        <IcTab>Three</IcTab>
      </IcTabGroup>
      <IcTabPanel>Tab One</IcTabPanel>
      <IcTabPanel>Tab Two</IcTabPanel>
      <IcTabPanel>Tab Three</IcTabPanel>
    </IcTabContext>,
  name: "Inline"
}`,...I.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledTabsExample />,
  name: "Controlled"
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <IcTabContext activationType="manual">
      <IcTabGroup label="Example tab group">
        <IcTab>One</IcTab>
        <IcTab>Two</IcTab>
        <IcTab>Three</IcTab>
      </IcTabGroup>
      <IcTabPanel>Tab One</IcTabPanel>
      <IcTabPanel>Tab Two</IcTabPanel>
      <IcTabPanel>Tab Three</IcTabPanel>
    </IcTabContext>,
  name: "Manual activation"
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <IcTabContext>
      <IcTabGroup label="Example tab group">
        <IcTab>One</IcTab>
        <IcTab>Two</IcTab>
        <IcTab>Three</IcTab>
        <IcTab>Four</IcTab>
        <IcTab>Five</IcTab>
        <IcTab>Six</IcTab>
        <IcTab>Seven</IcTab>
        <IcTab>Eight</IcTab>
        <IcTab>Nine</IcTab>
        <IcTab>Ten</IcTab>
        <IcTab>Eleven</IcTab>
        <IcTab>Twelve</IcTab>
      </IcTabGroup>
      <IcTabPanel>Tab One</IcTabPanel>
      <IcTabPanel>Tab Two</IcTabPanel>
      <IcTabPanel>Tab Three</IcTabPanel>
      <IcTabPanel>Tab Four</IcTabPanel>
      <IcTabPanel>Tab Five</IcTabPanel>
      <IcTabPanel>Tab Six</IcTabPanel>
      <IcTabPanel>Tab Seven</IcTabPanel>
      <IcTabPanel>Tab Eight</IcTabPanel>
      <IcTabPanel>Tab Nine</IcTabPanel>
      <IcTabPanel>Tab Ten</IcTabPanel>
      <IcTabPanel>Tab Eleven</IcTabPanel>
      <IcTabPanel>Tab Twelve</IcTabPanel>
    </IcTabContext>,
  name: "Responsive"
}`,...h.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <DynamicRender />,
  name: "Dynamic rendering"
}`,...E.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div>
      <IcTabContext activationType={args.activationType} theme={args.theme} monochrome={args.monochrome}>
        <IcTabGroup label={args.groupLabel} inline={args.inline}>
          <IcTab disabled={args.disabled}>One</IcTab>
          <IcTab>
            Two
            <IcBadge label="1" slot="badge" position="inline" accessibleLabel="1 notification found" />
          </IcTab>
          <IcTab>
            Three
            <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
            </svg>
          </IcTab>
          <IcTab>Four</IcTab>
        </IcTabGroup>
        <IcTabPanel>Tab One</IcTabPanel>
        <IcTabPanel>Tab Two</IcTabPanel>
        <IcTabPanel>Tab Three</IcTabPanel>
        <IcTabPanel>Tab Four</IcTabPanel>
      </IcTabContext>
    </div>,
  args: defaultArgs,
  argTypes: {
    activationType: {
      options: ["automatic", "manual"],
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
}`,...g.parameters?.docs?.source}}};const S=["Default","WithIcons","WithIconsAndBadges","Disabled","Inline","Controlled","ManualActivation","Responsive","DynamicRendering","Playground"],B=Object.freeze(Object.defineProperty({__proto__:null,Controlled:u,Default:i,Disabled:p,DynamicRendering:E,Inline:I,ManualActivation:d,Playground:g,Responsive:h,WithIcons:s,WithIconsAndBadges:m,__namedExportsOrder:S,default:y},Symbol.toStringTag,{value:"Module"}));export{B as I};
