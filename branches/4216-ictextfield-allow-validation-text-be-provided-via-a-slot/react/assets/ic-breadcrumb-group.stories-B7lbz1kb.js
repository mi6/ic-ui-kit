import{x as n,R as e,y as r,a as l,o as a,z as g}from"./iframe-CFjuv6ZO.js";import{M as f,R as E,a as d,L as h,u as B,N as b}from"./index-BypeJuab.js";const I=()=>e.createElement(g,null,e.createElement(l,{variant:"h1"},"Hi there!"),e.createElement(l,null,"This example is demonstrating the breadcrumb and breadcrumb group components with React Router")),v=()=>e.createElement(g,null,e.createElement(l,{variant:"h1"},"Daily tippers"),e.createElement(l,null,"Lorem ipsum doloe sit amet, consectetur adipiscing")),T=()=>e.createElement(g,null,e.createElement(l,{variant:"h1"},"About"),e.createElement(l,null,"Lorem ipsum doloe sit amet, consectetur adipiscing")),z=()=>{const t=B();return e.createElement(n,null,e.createElement(r,{pageTitle:"Home",current:t.pathname==="/"},e.createElement(a,null,e.createElement(b,{to:"/",slot:"router-item"},"Home"))),e.createElement(r,{pageTitle:"Daily Tippers",current:t.pathname==="/daily-tippers"},e.createElement(a,null,e.createElement(b,{to:"/daily-tippers",slot:"router-item"},"Daily Tippers"))),e.createElement(r,{pageTitle:"About",current:t.pathname==="/about"},e.createElement(a,null,e.createElement(b,{to:"/about",slot:"router-item"},"About"))))},w={backBreadcrumbOnly:!1,collapsed:!1,current:!1,href:"/",pageTitle:"Home",iconSlot:!0,theme:"inherit",monochrome:!1},x={title:"Breadcrumb",component:n},c={render:()=>e.createElement("div",null,e.createElement(n,null,e.createElement(r,{pageTitle:"foo",href:"/foo"}),e.createElement(r,{pageTitle:"bar",href:"/bar"}),e.createElement(r,{pageTitle:"baz",href:"/baz",current:!0}))),name:"Default"},o={render:()=>e.createElement("div",null,e.createElement(n,null,e.createElement(r,null,e.createElement(a,null,e.createElement("a",{slot:"router-item",href:"/foo"},"Foo"))),e.createElement(r,null,e.createElement(a,null,e.createElement("a",{slot:"router-item",href:"/bar"},"Bar"))),e.createElement(r,{current:!0},e.createElement(a,null,e.createElement("a",{slot:"router-item",href:"/baz"},"Baz"))))),name:"Slotted links"},m={render:()=>e.createElement("div",null,e.createElement(n,{backBreadcrumbOnly:!0},e.createElement(r,{pageTitle:"foo",href:"/foo"}),e.createElement(r,{pageTitle:"bar",href:"/bar"}),e.createElement(r,{pageTitle:"baz",href:"/baz",current:!0}))),name:"Back"},i={render:()=>e.createElement("div",null,e.createElement(n,null,e.createElement(r,{pageTitle:"foo",href:"/foo"},e.createElement("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},e.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"}))),e.createElement(r,{pageTitle:"bar",href:"/bar"},e.createElement("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},e.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"}))),e.createElement(r,{pageTitle:"baz",href:"/baz",current:!0},e.createElement("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},e.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"}))))),name:"Icon"},s={render:()=>e.createElement("div",null,e.createElement(n,{collapsed:!0},e.createElement(r,{pageTitle:"foo",href:"/foo"}),e.createElement(r,{pageTitle:"bar",href:"/bar"}),e.createElement(r,{pageTitle:"baz",href:"/baz"}),e.createElement(r,{pageTitle:"qux",href:"/qux"}),e.createElement(r,{pageTitle:"quxx",href:"/quxx",current:!0}))),name:"Collapsed"},u={render:()=>e.createElement("div",null,e.createElement(z,null),e.createElement(E,null,e.createElement(d,{path:"/",element:e.createElement(I,null)}),e.createElement(d,{path:"/daily-tippers",element:e.createElement(v,null)}),e.createElement(d,{path:"/about",element:e.createElement(T,null)})),e.createElement("div",{style:{display:"flex",gap:"10px",marginTop:"16px"}},e.createElement(l,null,"Click the links to switch pages and update breadcrumb states:"),e.createElement(a,null,e.createElement(h,{slot:"router-item",to:"/"},"Home")),e.createElement(a,null,e.createElement(h,{slot:"router-item",to:"/daily-tippers"},"Daily Tippers")),e.createElement(a,null,e.createElement(h,{slot:"router-item",to:"/about"},"About")))),name:"React Router",decorators:[t=>e.createElement(f,{initialEntries:["/"]},e.createElement(t,null))]},p={render:t=>e.createElement(n,{backBreadcrumbOnly:t.backBreadcrumbOnly,collapsed:t.collapsed,theme:t.theme,monochrome:t.monochrome},e.createElement(r,{current:t.current,pageTitle:t.pageTitle,href:t.href},e.createElement("svg",{slot:t.iconSlot,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z",fill:"currentColor"}))),e.createElement(r,{pageTitle:"Breadcrumb 2",href:"/breadcrumb-2"}),e.createElement(r,{pageTitle:"Breadcrumb 3",href:"/breadcrumb-3"})),args:w,argTypes:{iconSlot:{mapping:{true:"icon",false:""}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <IcBreadcrumbGroup>
        <IcBreadcrumb pageTitle="foo" href="/foo" />
        <IcBreadcrumb pageTitle="bar" href="/bar" />
        <IcBreadcrumb pageTitle="baz" href="/baz" current />
      </IcBreadcrumbGroup>
    </div>,
  name: "Default"
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <IcBreadcrumbGroup>
        <IcBreadcrumb>
          <IcLink>
            <a slot="router-item" href="/foo">
              Foo
            </a>
          </IcLink>
        </IcBreadcrumb>
        <IcBreadcrumb>
          <IcLink>
            <a slot="router-item" href="/bar">
              Bar
            </a>
          </IcLink>
        </IcBreadcrumb>
        <IcBreadcrumb current>
          <IcLink>
            <a slot="router-item" href="/baz">
              Baz
            </a>
          </IcLink>
        </IcBreadcrumb>
      </IcBreadcrumbGroup>
    </div>,
  name: "Slotted links"
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <IcBreadcrumbGroup backBreadcrumbOnly>
        <IcBreadcrumb pageTitle="foo" href="/foo" />
        <IcBreadcrumb pageTitle="bar" href="/bar" />
        <IcBreadcrumb pageTitle="baz" href="/baz" current />
      </IcBreadcrumbGroup>
    </div>,
  name: "Back"
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <IcBreadcrumbGroup>
        <IcBreadcrumb pageTitle="foo" href="/foo">
          <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
          </svg>
        </IcBreadcrumb>
        <IcBreadcrumb pageTitle="bar" href="/bar">
          <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
          </svg>
        </IcBreadcrumb>
        <IcBreadcrumb pageTitle="baz" href="/baz" current>
          <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
          </svg>
        </IcBreadcrumb>
      </IcBreadcrumbGroup>
    </div>,
  name: "Icon"
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <IcBreadcrumbGroup collapsed>
        <IcBreadcrumb pageTitle="foo" href="/foo" />
        <IcBreadcrumb pageTitle="bar" href="/bar" />
        <IcBreadcrumb pageTitle="baz" href="/baz" />
        <IcBreadcrumb pageTitle="qux" href="/qux" />
        <IcBreadcrumb pageTitle="quxx" href="/quxx" current />
      </IcBreadcrumbGroup>
    </div>,
  name: "Collapsed"
}`,...s.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <Breadcrumbs />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/daily-tippers" element={<DailyTippers />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <div style={{
      display: "flex",
      gap: "10px",
      marginTop: "16px"
    }}>
        <IcTypography>
          Click the links to switch pages and update breadcrumb states:
        </IcTypography>
        <IcLink>
          <Link slot="router-item" to="/">
            Home
          </Link>
        </IcLink>
        <IcLink>
          <Link slot="router-item" to="/daily-tippers">
            Daily Tippers
          </Link>
        </IcLink>
        <IcLink>
          <Link slot="router-item" to="/about">
            About
          </Link>
        </IcLink>
      </div>
    </div>,
  name: "React Router",
  decorators: [Story => <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>]
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <IcBreadcrumbGroup backBreadcrumbOnly={args.backBreadcrumbOnly} collapsed={args.collapsed} theme={args.theme} monochrome={args.monochrome}>
      <IcBreadcrumb current={args.current} pageTitle={args.pageTitle} href={args.href}>
        <svg slot={args.iconSlot} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z" fill="currentColor"></path>
        </svg>
      </IcBreadcrumb>
      <IcBreadcrumb pageTitle="Breadcrumb 2" href="/breadcrumb-2" />
      <IcBreadcrumb pageTitle="Breadcrumb 3" href="/breadcrumb-3" />
    </IcBreadcrumbGroup>,
  args: defaultArgs,
  argTypes: {
    iconSlot: {
      mapping: {
        true: "icon",
        false: ""
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
}`,...p.parameters?.docs?.source}}};const y=["Default","SlottedLinks","Back","Icon","Collapsed","ReactRouter","Playground"],H=Object.freeze(Object.defineProperty({__proto__:null,Back:m,Collapsed:s,Default:c,Icon:i,Playground:p,ReactRouter:u,SlottedLinks:o,__namedExportsOrder:y,default:x},Symbol.toStringTag,{value:"Module"}));export{H as I};
