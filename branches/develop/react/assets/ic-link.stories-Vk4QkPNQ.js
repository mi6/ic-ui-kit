import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{H as r,O as i,in as a,lt as o,t as s,u as c,ut as l}from"./iframe-CBY1Fz5o.js";import{a as u,i as d,n as f,o as p,r as m}from"./dist-Bay15gfg.js";var h=e({Default:()=>S,DownloadLink:()=>T,Playground:()=>D,WithIcon:()=>C,WithReactRouter:()=>E,__namedExportsOrder:()=>O,default:()=>x}),g,_,v,y,b,x,S,C,w,T,E,D,O,k=t((()=>{g=n(a()),l(),m(),_=s(),v=()=>(0,_.jsxs)(r,{children:[(0,_.jsx)(o,{variant:`h1`,children:`Hi there!`}),(0,_.jsx)(o,{children:`This example is demonstrating the link component with React Router`})]}),y=()=>(0,_.jsxs)(r,{children:[(0,_.jsx)(o,{variant:`h1`,children:`Daily tippers`}),(0,_.jsx)(o,{children:`Lorem ipsum doloe sit amet, consectetur adipiscing`})]}),b={href:`/`,target:``,download:!1,theme:`inherit`,monochrome:!1},x={title:`Link`,component:i},S={render:()=>(0,_.jsx)(i,{href:`/`,children:`This is a link`}),name:`Default`,href:`/`},C={render:()=>(0,_.jsx)(i,{href:`/`,target:`_blank`,children:`This is a link`}),name:`With icon`},w=()=>{let e=(0,g.useRef)(),t=()=>{e.current.download=!0},n=()=>{e.current.download=!1},r=()=>{e.current.download=`downloaded-file`};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(i,{href:`/`,download:`downloaded-file`,ref:e,children:`Download File`}),(0,_.jsx)(`br`,{}),(0,_.jsx)(`br`,{}),(0,_.jsx)(c,{onClick:()=>t(),children:`Set to true`}),(0,_.jsx)(c,{onClick:()=>n(),children:`Set to false`}),(0,_.jsx)(c,{onClick:()=>r(),children:`Set to normal`})]})},T={render:()=>(0,_.jsx)(w,{}),name:`Download Link`},E={render:()=>(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(i,{style:{paddingRight:`var(--ic-space-xs)`},children:(0,_.jsx)(f,{to:`/`,slot:`router-item`,children:`Home`})}),(0,_.jsx)(i,{children:(0,_.jsx)(f,{to:`/daily-tippers`,slot:`router-item`,children:`Daily Tippers`})}),(0,_.jsxs)(p,{children:[(0,_.jsx)(u,{path:`/`,element:(0,_.jsx)(v,{})}),(0,_.jsx)(u,{path:`/daily-tippers`,element:(0,_.jsx)(y,{})})]})]}),name:`With React Router`,decorators:[e=>(0,_.jsx)(d,{initialEntries:[`/`],children:(0,_.jsx)(e,{})})]},D={render:e=>(0,_.jsx)(i,{href:e.href,target:e.target,download:e.download===!0,theme:e.theme,monochrome:e.monochrome,children:`This is a link`}),args:b,argTypes:{target:{options:[`_blank`,`_self`,`_parent`,`_top`,``],control:{type:`radio`}},theme:{options:[`inherit`,`light`,`dark`],control:{type:`inline-radio`}}},name:`Playground`},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <IcLink href="/">This is a link</IcLink>,
  name: "Default",
  href: "/"
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <IcLink href="/" target="_blank">
      This is a link
    </IcLink>,
  name: "With icon"
}`,...C.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Download />,
  name: "Download Link"
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O=[`Default`,`WithIcon`,`DownloadLink`,`WithReactRouter`,`Playground`]}));k();export{S as Default,T as DownloadLink,D as Playground,C as WithIcon,E as WithReactRouter,O as __namedExportsOrder,x as default,k as n,h as t};