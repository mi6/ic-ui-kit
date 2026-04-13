import{x as e}from"./lit-html-CWQq0DyO.js";const m={backBreadcrumbOnly:!1,collapsed:!1,current:!1,href:"/",pageTitle:"Home",iconSlot:!0,theme:"inherit",monochrome:!1},t={title:"Web Components/Breadcrumb",component:"ic-breadcrumb-group"},c={render:()=>e`
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
  `,name:"Default"},b={render:()=>e`
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
  `,name:"Slotted links"},a={render:()=>e`
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
  `,name:"Back"},u={render:()=>e`
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
  `,name:"Icon"},n={render:()=>e`
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
  `,name:"Collapsed"},i={render:()=>e`
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
  `,name:"Slotted links collapsed"},d={render:r=>e`<ic-breadcrumb-group
      back-breadcrumb-only=${r.backBreadcrumbOnly}
      collapsed=${r.collapsed}
      theme=${r.theme}
      monochrome=${r.monochrome}
    >
      <ic-breadcrumb
        current=${r.current}
        page-title=${r.pageTitle}
        href=${r.href}
      >
        <svg
          slot=${r.iconSlot}
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
    </ic-breadcrumb-group>`,args:m,argTypes:{iconSlot:{mapping:{true:"icon",false:""}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const o=["Default","SlottedLinks","Back","Icon","Collapsed","SlottedLinksCollapsed","Playground"],p=Object.freeze(Object.defineProperty({__proto__:null,Back:a,Collapsed:n,Default:c,Icon:u,Playground:d,SlottedLinks:b,SlottedLinksCollapsed:i,__namedExportsOrder:o,default:t},Symbol.toStringTag,{value:"Module"}));export{p as I};
