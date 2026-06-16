import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{n,t as r}from"./lit-html-CwvQb_NC.js";var i=e({Back:()=>l,Collapsed:()=>d,Default:()=>s,Icon:()=>u,Playground:()=>p,SlottedLinks:()=>c,SlottedLinksCollapsed:()=>f,__namedExportsOrder:()=>m,default:()=>o}),a,o,s,c,l,u,d,f,p,m,h=t((()=>{n(),a={backBreadcrumbOnly:!1,collapsed:!1,current:!1,href:`/`,pageTitle:`Home`,iconSlot:!0,theme:`inherit`,monochrome:!1},o={title:`Web Components/Breadcrumb`,component:`ic-breadcrumb-group`},s={render:()=>r`
    <ic-breadcrumb-group>
      <ic-breadcrumb
        page-title="Breadcrumb 1"
        href="/breadcrumb-1"
      ></ic-breadcrumb>
    </ic-breadcrumb-group>
    <ic-breadcrumb-group>
      <ic-breadcrumb
        current="true"
        page-title="Breadcrumb 1"
        href="/breadcrumb-1"
      ></ic-breadcrumb>
    </ic-breadcrumb-group>
    <ic-breadcrumb-group>
      <ic-breadcrumb
        page-title="Breadcrumb 1"
        href="/breadcrumb-1"
      ></ic-breadcrumb>
      <ic-breadcrumb
        current="true"
        page-title="Breadcrumb 2"
        href="/breadcrumb-2"
      ></ic-breadcrumb>
    </ic-breadcrumb-group>
    <ic-breadcrumb-group>
      <ic-breadcrumb
        page-title="Breadcrumb 1"
        href="/breadcrumb-1"
      ></ic-breadcrumb>
      <ic-breadcrumb
        page-title="Breadcrumb 2"
        href="/breadcrumb-2"
      ></ic-breadcrumb>
      <ic-breadcrumb
        current="true"
        page-title="Breadcrumb 3"
        href="/breadcrumb-3"
      ></ic-breadcrumb>
    </ic-breadcrumb-group>
  `,name:`Default`},c={render:()=>r`
    <ic-breadcrumb-group>
      <ic-breadcrumb page-title="breadcrumb-1">
        <ic-link>
          <a slot="router-item" href="/breadcrumb-1">Breadcrumb 1</a>
        </ic-link>
      </ic-breadcrumb>
    </ic-breadcrumb-group>
    <ic-breadcrumb-group>
      <ic-breadcrumb current="true" page-title="breadcrumb 1">
        <ic-link href="/breadcrumb-1">Breadcrumb 1</ic-link>
      </ic-breadcrumb>
    </ic-breadcrumb-group>
    <ic-breadcrumb-group>
      <ic-breadcrumb page-title="breadcrumb-1">
        <ic-link>
          <a slot="router-item" href="/breadcrumb-1">Breadcrumb 1</a>
        </ic-link>
      </ic-breadcrumb>
      <ic-breadcrumb current="true" page-title="breadcrumb 2">
        <a href="/breadcrumb-2">Breadcrumb 2</a>
      </ic-breadcrumb>
    </ic-breadcrumb-group>
    <ic-breadcrumb-group>
      <ic-breadcrumb page title="breadcrumb 1">
        <ic-link>
          <a slot="router-item" href="/breadcrumb-1">Breadcrumb 1</a>
        </ic-link>
      </ic-breadcrumb>
      <ic-breadcrumb page-title="breadcrumb 2">
        <ic-link>
          <a slot="router-item" href="/breadcrumb-2">Breadcrumb 2</a>
        </ic-link>
      </ic-breadcrumb>
      <ic-breadcrumb current="true" page-title="breadcrumb 3">
        <ic-link>
          <a href="/breadcrumb-3">Breadcrumb 3</a>
        </ic-link>
      </ic-breadcrumb>
    </ic-breadcrumb-group>
  `,name:`Slotted links`},l={render:()=>r`
    <ic-breadcrumb-group back-breadcrumb-only="true">
      <ic-breadcrumb
        page-title="Breadcrumb 1"
        href="/breadcrumb-1"
      ></ic-breadcrumb>
    </ic-breadcrumb-group>
    <ic-breadcrumb-group back-breadcrumb-only="true">
      <ic-breadcrumb
        page-title="Breadcrumb 1"
        href="/breadcrumb-1"
      ></ic-breadcrumb>
      <ic-breadcrumb
        current="true"
        page-title="Breadcrumb 2"
        href="/breadcrumb-2"
      ></ic-breadcrumb>
    </ic-breadcrumb-group>
    <ic-breadcrumb-group back-breadcrumb-only="true">
      <ic-breadcrumb
        page-title="Breadcrumb 1"
        href="/breadcrumb-1"
      ></ic-breadcrumb>
      <ic-breadcrumb
        page-title="Breadcrumb 2"
        href="/breadcrumb-2"
      ></ic-breadcrumb>
      <ic-breadcrumb
        current="true"
        page-title="Breadcrumb 3"
        href="/breadcrumb-3"
      ></ic-breadcrumb>
    </ic-breadcrumb-group>
  `,name:`Back`},u={render:()=>r`
    <ic-breadcrumb-group>
      <ic-breadcrumb
        page-title="Breadcrumb 1"
        href="/breadcrumb-1"
        current="true"
      >
        <svg
          slot="icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
            fill="currentColor"
          ></path>
        </svg>
      </ic-breadcrumb>
    </ic-breadcrumb-group>
    <ic-breadcrumb-group>
      <ic-breadcrumb page-title="Breadcrumb 1" href="/breadcrumb-1">
        <svg
          slot="icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
            fill="currentColor"
          ></path>
        </svg>
      </ic-breadcrumb>
      <ic-breadcrumb page-title="Breadcrumb 2" href="/breadcrumb-2">
        <svg
          slot="icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
            fill="currentColor"
          ></path>
        </svg>
      </ic-breadcrumb>
    </ic-breadcrumb-group>
    <ic-breadcrumb-group>
      <ic-breadcrumb page-title="Breadcrumb 1" href="/breadcrumb-1">
        <svg
          slot="icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
            fill="currentColor"
          ></path>
        </svg>
      </ic-breadcrumb>
      <ic-breadcrumb page-title="Breadcrumb 2" current="true" href="/">
        <svg
          slot="icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
            fill="currentColor"
          ></path>
        </svg>
      </ic-breadcrumb>
    </ic-breadcrumb-group>
  `,name:`Icon`},d={render:()=>r`
    <ic-breadcrumb-group collapsed="true">
      <ic-breadcrumb
        page-title="Breadcrumb 1"
        href="/breadcrumb-1"
      ></ic-breadcrumb>
    </ic-breadcrumb-group>
    <ic-breadcrumb-group collapsed="true">
      <ic-breadcrumb
        page-title="Breadcrumb 1"
        href="/breadcrumb-1"
      ></ic-breadcrumb>
      <ic-breadcrumb
        current="page"
        page-title="Breadcrumb 2"
        href="/breadcrumb-2"
      ></ic-breadcrumb>
    </ic-breadcrumb-group>
    <ic-breadcrumb-group collapsed="true">
      <ic-breadcrumb
        page-title="Breadcrumb 1"
        href="/breadcrumb-1"
      ></ic-breadcrumb>
      <ic-breadcrumb
        page-title="Breadcrumb 2"
        href="/breadcrumb-2"
      ></ic-breadcrumb>
      <ic-breadcrumb
        current="page"
        page-title="Breadcrumb 3"
        href="/breadcrumb-3"
      ></ic-breadcrumb>
    </ic-breadcrumb-group>
  `,name:`Collapsed`},f={render:()=>r`
    <ic-breadcrumb-group collapsed="true">
      <ic-breadcrumb page-title="breadcrumb 1">
        <ic-link
          ><a slot="router-item" href="/breadcrumb-1">Breadcrumb 1</a></ic-link
        >
      </ic-breadcrumb>
      <ic-breadcrumb page-title="breadcrumb 2">
        <ic-link
          ><a slot="router-item" href="/breadcrumb-2">Breadcrumb 2</a></ic-link
        >
      </ic-breadcrumb>
      <ic-breadcrumb current="page" page-title="breadcrumb 3">
        <ic-link
          ><a slot="router-item" href="/breadcrumb-3">Breadcrumb 3</a></ic-link
        >
      </ic-breadcrumb>
    </ic-breadcrumb-group>
  `,name:`Slotted links collapsed`},p={render:e=>r`<ic-breadcrumb-group
      back-breadcrumb-only=${e.backBreadcrumbOnly}
      collapsed=${e.collapsed}
      theme=${e.theme}
      monochrome=${e.monochrome}
    >
      <ic-breadcrumb
        current=${e.current}
        page-title=${e.pageTitle}
        href=${e.href}
      >
        <svg
          slot=${e.iconSlot}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
            fill="currentColor"
          ></path>
        </svg>
      </ic-breadcrumb>
      <ic-breadcrumb
        page-title="Breadcrumb 2"
        href="/breadcrumb-2"
      ></ic-breadcrumb>
      <ic-breadcrumb
        page-title="Breadcrumb 3"
        href="/breadcrumb-3"
      ></ic-breadcrumb>
    </ic-breadcrumb-group>`,args:a,argTypes:{iconSlot:{mapping:{true:`icon`,false:``}},theme:{options:[`inherit`,`light`,`dark`],control:{type:`inline-radio`}}},name:`Playground`},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-breadcrumb-group>
      <ic-breadcrumb
        page-title="Breadcrumb 1"
        href="/breadcrumb-1"
      ></ic-breadcrumb>
    </ic-breadcrumb-group>
    <ic-breadcrumb-group>
      <ic-breadcrumb
        current="true"
        page-title="Breadcrumb 1"
        href="/breadcrumb-1"
      ></ic-breadcrumb>
    </ic-breadcrumb-group>
    <ic-breadcrumb-group>
      <ic-breadcrumb
        page-title="Breadcrumb 1"
        href="/breadcrumb-1"
      ></ic-breadcrumb>
      <ic-breadcrumb
        current="true"
        page-title="Breadcrumb 2"
        href="/breadcrumb-2"
      ></ic-breadcrumb>
    </ic-breadcrumb-group>
    <ic-breadcrumb-group>
      <ic-breadcrumb
        page-title="Breadcrumb 1"
        href="/breadcrumb-1"
      ></ic-breadcrumb>
      <ic-breadcrumb
        page-title="Breadcrumb 2"
        href="/breadcrumb-2"
      ></ic-breadcrumb>
      <ic-breadcrumb
        current="true"
        page-title="Breadcrumb 3"
        href="/breadcrumb-3"
      ></ic-breadcrumb>
    </ic-breadcrumb-group>
  \`,
  name: "Default"
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-breadcrumb-group>
      <ic-breadcrumb page-title="breadcrumb-1">
        <ic-link>
          <a slot="router-item" href="/breadcrumb-1">Breadcrumb 1</a>
        </ic-link>
      </ic-breadcrumb>
    </ic-breadcrumb-group>
    <ic-breadcrumb-group>
      <ic-breadcrumb current="true" page-title="breadcrumb 1">
        <ic-link href="/breadcrumb-1">Breadcrumb 1</ic-link>
      </ic-breadcrumb>
    </ic-breadcrumb-group>
    <ic-breadcrumb-group>
      <ic-breadcrumb page-title="breadcrumb-1">
        <ic-link>
          <a slot="router-item" href="/breadcrumb-1">Breadcrumb 1</a>
        </ic-link>
      </ic-breadcrumb>
      <ic-breadcrumb current="true" page-title="breadcrumb 2">
        <a href="/breadcrumb-2">Breadcrumb 2</a>
      </ic-breadcrumb>
    </ic-breadcrumb-group>
    <ic-breadcrumb-group>
      <ic-breadcrumb page title="breadcrumb 1">
        <ic-link>
          <a slot="router-item" href="/breadcrumb-1">Breadcrumb 1</a>
        </ic-link>
      </ic-breadcrumb>
      <ic-breadcrumb page-title="breadcrumb 2">
        <ic-link>
          <a slot="router-item" href="/breadcrumb-2">Breadcrumb 2</a>
        </ic-link>
      </ic-breadcrumb>
      <ic-breadcrumb current="true" page-title="breadcrumb 3">
        <ic-link>
          <a href="/breadcrumb-3">Breadcrumb 3</a>
        </ic-link>
      </ic-breadcrumb>
    </ic-breadcrumb-group>
  \`,
  name: "Slotted links"
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-breadcrumb-group back-breadcrumb-only="true">
      <ic-breadcrumb
        page-title="Breadcrumb 1"
        href="/breadcrumb-1"
      ></ic-breadcrumb>
    </ic-breadcrumb-group>
    <ic-breadcrumb-group back-breadcrumb-only="true">
      <ic-breadcrumb
        page-title="Breadcrumb 1"
        href="/breadcrumb-1"
      ></ic-breadcrumb>
      <ic-breadcrumb
        current="true"
        page-title="Breadcrumb 2"
        href="/breadcrumb-2"
      ></ic-breadcrumb>
    </ic-breadcrumb-group>
    <ic-breadcrumb-group back-breadcrumb-only="true">
      <ic-breadcrumb
        page-title="Breadcrumb 1"
        href="/breadcrumb-1"
      ></ic-breadcrumb>
      <ic-breadcrumb
        page-title="Breadcrumb 2"
        href="/breadcrumb-2"
      ></ic-breadcrumb>
      <ic-breadcrumb
        current="true"
        page-title="Breadcrumb 3"
        href="/breadcrumb-3"
      ></ic-breadcrumb>
    </ic-breadcrumb-group>
  \`,
  name: "Back"
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-breadcrumb-group>
      <ic-breadcrumb
        page-title="Breadcrumb 1"
        href="/breadcrumb-1"
        current="true"
      >
        <svg
          slot="icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
            fill="currentColor"
          ></path>
        </svg>
      </ic-breadcrumb>
    </ic-breadcrumb-group>
    <ic-breadcrumb-group>
      <ic-breadcrumb page-title="Breadcrumb 1" href="/breadcrumb-1">
        <svg
          slot="icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
            fill="currentColor"
          ></path>
        </svg>
      </ic-breadcrumb>
      <ic-breadcrumb page-title="Breadcrumb 2" href="/breadcrumb-2">
        <svg
          slot="icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
            fill="currentColor"
          ></path>
        </svg>
      </ic-breadcrumb>
    </ic-breadcrumb-group>
    <ic-breadcrumb-group>
      <ic-breadcrumb page-title="Breadcrumb 1" href="/breadcrumb-1">
        <svg
          slot="icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
            fill="currentColor"
          ></path>
        </svg>
      </ic-breadcrumb>
      <ic-breadcrumb page-title="Breadcrumb 2" current="true" href="/">
        <svg
          slot="icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
            fill="currentColor"
          ></path>
        </svg>
      </ic-breadcrumb>
    </ic-breadcrumb-group>
  \`,
  name: "Icon"
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-breadcrumb-group collapsed="true">
      <ic-breadcrumb
        page-title="Breadcrumb 1"
        href="/breadcrumb-1"
      ></ic-breadcrumb>
    </ic-breadcrumb-group>
    <ic-breadcrumb-group collapsed="true">
      <ic-breadcrumb
        page-title="Breadcrumb 1"
        href="/breadcrumb-1"
      ></ic-breadcrumb>
      <ic-breadcrumb
        current="page"
        page-title="Breadcrumb 2"
        href="/breadcrumb-2"
      ></ic-breadcrumb>
    </ic-breadcrumb-group>
    <ic-breadcrumb-group collapsed="true">
      <ic-breadcrumb
        page-title="Breadcrumb 1"
        href="/breadcrumb-1"
      ></ic-breadcrumb>
      <ic-breadcrumb
        page-title="Breadcrumb 2"
        href="/breadcrumb-2"
      ></ic-breadcrumb>
      <ic-breadcrumb
        current="page"
        page-title="Breadcrumb 3"
        href="/breadcrumb-3"
      ></ic-breadcrumb>
    </ic-breadcrumb-group>
  \`,
  name: "Collapsed"
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-breadcrumb-group collapsed="true">
      <ic-breadcrumb page-title="breadcrumb 1">
        <ic-link
          ><a slot="router-item" href="/breadcrumb-1">Breadcrumb 1</a></ic-link
        >
      </ic-breadcrumb>
      <ic-breadcrumb page-title="breadcrumb 2">
        <ic-link
          ><a slot="router-item" href="/breadcrumb-2">Breadcrumb 2</a></ic-link
        >
      </ic-breadcrumb>
      <ic-breadcrumb current="page" page-title="breadcrumb 3">
        <ic-link
          ><a slot="router-item" href="/breadcrumb-3">Breadcrumb 3</a></ic-link
        >
      </ic-breadcrumb>
    </ic-breadcrumb-group>
  \`,
  name: "Slotted links collapsed"
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => html\`<ic-breadcrumb-group
      back-breadcrumb-only=\${args.backBreadcrumbOnly}
      collapsed=\${args.collapsed}
      theme=\${args.theme}
      monochrome=\${args.monochrome}
    >
      <ic-breadcrumb
        current=\${args.current}
        page-title=\${args.pageTitle}
        href=\${args.href}
      >
        <svg
          slot=\${args.iconSlot}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
            fill="currentColor"
          ></path>
        </svg>
      </ic-breadcrumb>
      <ic-breadcrumb
        page-title="Breadcrumb 2"
        href="/breadcrumb-2"
      ></ic-breadcrumb>
      <ic-breadcrumb
        page-title="Breadcrumb 3"
        href="/breadcrumb-3"
      ></ic-breadcrumb>
    </ic-breadcrumb-group>\`,
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
}`,...p.parameters?.docs?.source}}},m=[`Default`,`SlottedLinks`,`Back`,`Icon`,`Collapsed`,`SlottedLinksCollapsed`,`Playground`]}));h();export{l as Back,d as Collapsed,s as Default,u as Icon,p as Playground,c as SlottedLinks,f as SlottedLinksCollapsed,m as __namedExportsOrder,o as default,h as n,i as t};