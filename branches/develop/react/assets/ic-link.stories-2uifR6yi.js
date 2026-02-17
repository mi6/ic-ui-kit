import{o as n,R as e,r as k,f as c,z as p,a as s}from"./iframe-nGHzOsz0.js";import{M as f,N as m,R as E,a as d}from"./index-NVTEacKM.js";const y=()=>e.createElement(p,null,e.createElement(s,{variant:"h1"},"Hi there!"),e.createElement(s,null,"This example is demonstrating the link component with React Router")),R=()=>e.createElement(p,null,e.createElement(s,{variant:"h1"},"Daily tippers"),e.createElement(s,null,"Lorem ipsum doloe sit amet, consectetur adipiscing")),L={href:"/",target:"",download:!1,theme:"inherit",monochrome:!1},w={title:"Link",component:n},r={render:()=>e.createElement(n,{href:"/"},"This is a link"),name:"Default",href:"/"},a={render:()=>e.createElement(n,{href:"/",target:"_blank"},"This is a link"),name:"With icon"},I=()=>{const t=k.useRef(),u=()=>{t.current.download=!0},h=()=>{t.current.download=!1},g=()=>{t.current.download="downloaded-file"};return e.createElement(e.Fragment,null,e.createElement(n,{href:"/",download:"downloaded-file",ref:t},"Download File"),e.createElement("br",null),e.createElement("br",null),e.createElement(c,{onClick:()=>u()},"Set to true"),e.createElement(c,{onClick:()=>h()},"Set to false"),e.createElement(c,{onClick:()=>g()},"Set to normal"))},o={render:()=>e.createElement(I,null),name:"Download Link"},l={render:()=>e.createElement(e.Fragment,null,e.createElement(n,{style:{paddingRight:"var(--ic-space-xs)"}},e.createElement(m,{to:"/",slot:"router-item"},"Home")),e.createElement(n,null,e.createElement(m,{to:"/daily-tippers",slot:"router-item"},"Daily Tippers")),e.createElement(E,null,e.createElement(d,{path:"/",element:e.createElement(y,null)}),e.createElement(d,{path:"/daily-tippers",element:e.createElement(R,null)}))),name:"With React Router",decorators:[t=>e.createElement(f,{initialEntries:["/"]},e.createElement(t,null))]},i={render:t=>e.createElement(n,{href:t.href,target:t.target,download:t.download===!0,theme:t.theme,monochrome:t.monochrome},"This is a link"),args:L,argTypes:{target:{options:["_blank","_self","_parent","_top",""],control:{type:"radio"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <IcLink href="/">This is a link</IcLink>,
  name: "Default",
  href: "/"
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <IcLink href="/" target="_blank">
      This is a link
    </IcLink>,
  name: "With icon"
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Download />,
  name: "Download Link"
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcLink style={{
      paddingRight: "var(--ic-space-xs)"
    }}>
      <NavLink to="/" slot="router-item">
        Home
      </NavLink>
    </IcLink>
    <IcLink>
      <NavLink to="/daily-tippers" slot="router-item">
        Daily Tippers
      </NavLink>
    </IcLink>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/daily-tippers" element={<DailyTippers />} />
    </Routes>
    </>,
  name: "With React Router",
  decorators: [Story => <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>]
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <IcLink href={args.href} target={args.target} download={args.download === true} theme={args.theme} monochrome={args.monochrome}>
      This is a link
    </IcLink>,
  args: defaultArgs,
  argTypes: {
    target: {
      options: ["_blank", "_self", "_parent", "_top", ""],
      control: {
        type: "radio"
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
}`,...i.parameters?.docs?.source}}};const _=["Default","WithIcon","DownloadLink","WithReactRouter","Playground"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:r,DownloadLink:o,Playground:i,WithIcon:a,WithReactRouter:l,__namedExportsOrder:_,default:w},Symbol.toStringTag,{value:"Module"}));export{S as I};
