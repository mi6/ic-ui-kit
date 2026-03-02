import{x as i}from"./lit-html-CWQq0DyO.js";const o={accessibleLabel:"Pagination Navigation",adjacentPageCount:1,boundaryPageCount:1,currentPage:1,defaultPage:1,disabled:!1,hideCurrentPage:!1,hideFirstAndLastPageButton:!1,label:"Page",monochrome:!1,pages:15,theme:"inherit",type:"simple"},c={title:"Web Components/Pagination",component:"Pagination"},n={render:()=>i`
    <p>Default appearance</p>
    <ic-pagination pages="15"></ic-pagination>
    <br />
    <p>Hidden current page</p>
    <ic-pagination pages="15" hide-current-page></ic-pagination>
    <br />
    <p>Hidden first and last page buttons</p>
    <ic-pagination pages="15" hide-first-and-last-page-button></ic-pagination>
    <br />
    <p>Default page</p>
    <ic-pagination pages="15" default-page="3"></ic-pagination>
    <br />
    <p>Disabled</p>
    <ic-pagination pages="15" disabled></ic-pagination>
    <br />
    <p>Label set</p>
    <ic-pagination pages="15" label="Label"></ic-pagination>
  `,name:"Simple"},e={render:()=>i`
    <p>Default appearance</p>
    <ic-pagination pages="15" type="complex"></ic-pagination>
    <br />
    <p>Hidden first and last buttons</p>
    <ic-pagination
      pages="15"
      type="complex"
      hide-first-and-last-page-button
    ></ic-pagination>
    <br />
    <p>Default page</p>
    <ic-pagination pages="15" type="complex" default-page="7"></ic-pagination>
    <br />
    <p>Disabled</p>
    <ic-pagination pages="15" type="complex" disabled></ic-pagination>
  `,name:"Complex"},p={render:()=>i`
  <p style={{ padding: 10 }}>Adjacent: 0, Boundary: 0</p>
      <ic-pagination
        pages="15"
        type="complex"
        adjacent-page-count="0"
        boundary-page-count="0"
      ></ic-pagination>
      <br/>
      <p style={{ padding: 10 }}>Adjacent: 0, Boundary: 1</p>
      <ic-pagination
        pages="15"
        type="complex"
        adjacent-page-count="0"
        boundary-page-count="1"
      ></ic-pagination>
      <br/>
      <p style={{ padding: 10 }}>Adjacent: 0, Boundary: 2</p>
      <ic-pagination
        pages="15"
        type="complex"
        adjacent-page-count="0"
        boundary-page-count="2"
      ></ic-pagination>
      <br/>
      <p style={{ padding: 10 }}>Adjacent: 1, Boundary: 0</p>
      <ic-pagination
        pages="15"
        type="complex"
        adjacent-page-count="1"
        boundary-page-count="0"
      ></ic-pagination>
      <br/>
      <p style={{ padding: 10 }}>Adjacent: 2, Boundary: 0</p>
      <ic-pagination
        pages="15"
        type="complex"
        adjacent-page-count="2"
        boundary-page-count="0"
      ></ic-pagination>
      <br/>
      <p style={{ padding: 10 }}>Adjacent: 1, Boundary: 1</p>
      <ic-pagination pages="15" type="complex" ></ic-pagination>
      <br/>
      <p style={{ padding: 10 }}>Adjacent: 2, Boundary: 2</p>
      <ic-pagination
        pages="15"
        type="complex"
        adjacent-page-count="2"
        boundary-page-count="2"
      ></ic-pagination>
     `,name:"Complex - Adjacent & Boundary Items Set"},t={render:a=>i`<ic-pagination
      accessible-label=${a.accessibleLabel}
      adjacent-page-count=${a.adjacentPageCount}
      boundary-page-count=${a.boundaryPageCount}
      current-page=${a.currentPage}
      default-page=${a.defaultPage}
      disabled=${a.disabled}
      hide-current-page=${a.hideCurrentPage}
      hide-first-and-last-page-button=${a.hideFirstAndLastPageButton}
      label=${a.label}
      monochrome=${a.monochrome}
      pages=${a.pages}
      theme=${a.theme}
      type=${a.type}
    ></ic-pagination>`,args:o,argTypes:{theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}},type:{options:["simple","complex"],control:{type:"inline-radio"}}},name:"Playground"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <p>Default appearance</p>
    <ic-pagination pages="15"></ic-pagination>
    <br />
    <p>Hidden current page</p>
    <ic-pagination pages="15" hide-current-page></ic-pagination>
    <br />
    <p>Hidden first and last page buttons</p>
    <ic-pagination pages="15" hide-first-and-last-page-button></ic-pagination>
    <br />
    <p>Default page</p>
    <ic-pagination pages="15" default-page="3"></ic-pagination>
    <br />
    <p>Disabled</p>
    <ic-pagination pages="15" disabled></ic-pagination>
    <br />
    <p>Label set</p>
    <ic-pagination pages="15" label="Label"></ic-pagination>
  \`,
  name: "Simple"
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <p>Default appearance</p>
    <ic-pagination pages="15" type="complex"></ic-pagination>
    <br />
    <p>Hidden first and last buttons</p>
    <ic-pagination
      pages="15"
      type="complex"
      hide-first-and-last-page-button
    ></ic-pagination>
    <br />
    <p>Default page</p>
    <ic-pagination pages="15" type="complex" default-page="7"></ic-pagination>
    <br />
    <p>Disabled</p>
    <ic-pagination pages="15" type="complex" disabled></ic-pagination>
  \`,
  name: "Complex"
}`,...e.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`
  <p style={{ padding: 10 }}>Adjacent: 0, Boundary: 0</p>
      <ic-pagination
        pages="15"
        type="complex"
        adjacent-page-count="0"
        boundary-page-count="0"
      ></ic-pagination>
      <br/>
      <p style={{ padding: 10 }}>Adjacent: 0, Boundary: 1</p>
      <ic-pagination
        pages="15"
        type="complex"
        adjacent-page-count="0"
        boundary-page-count="1"
      ></ic-pagination>
      <br/>
      <p style={{ padding: 10 }}>Adjacent: 0, Boundary: 2</p>
      <ic-pagination
        pages="15"
        type="complex"
        adjacent-page-count="0"
        boundary-page-count="2"
      ></ic-pagination>
      <br/>
      <p style={{ padding: 10 }}>Adjacent: 1, Boundary: 0</p>
      <ic-pagination
        pages="15"
        type="complex"
        adjacent-page-count="1"
        boundary-page-count="0"
      ></ic-pagination>
      <br/>
      <p style={{ padding: 10 }}>Adjacent: 2, Boundary: 0</p>
      <ic-pagination
        pages="15"
        type="complex"
        adjacent-page-count="2"
        boundary-page-count="0"
      ></ic-pagination>
      <br/>
      <p style={{ padding: 10 }}>Adjacent: 1, Boundary: 1</p>
      <ic-pagination pages="15" type="complex" ></ic-pagination>
      <br/>
      <p style={{ padding: 10 }}>Adjacent: 2, Boundary: 2</p>
      <ic-pagination
        pages="15"
        type="complex"
        adjacent-page-count="2"
        boundary-page-count="2"
      ></ic-pagination>
     \`,
  name: "Complex - Adjacent & Boundary Items Set"
}`,...p.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => html\`<ic-pagination
      accessible-label=\${args.accessibleLabel}
      adjacent-page-count=\${args.adjacentPageCount}
      boundary-page-count=\${args.boundaryPageCount}
      current-page=\${args.currentPage}
      default-page=\${args.defaultPage}
      disabled=\${args.disabled}
      hide-current-page=\${args.hideCurrentPage}
      hide-first-and-last-page-button=\${args.hideFirstAndLastPageButton}
      label=\${args.label}
      monochrome=\${args.monochrome}
      pages=\${args.pages}
      theme=\${args.theme}
      type=\${args.type}
    ></ic-pagination>\`,
  args: defaultArgs,
  argTypes: {
    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: "inline-radio"
      }
    },
    type: {
      options: ["simple", "complex"],
      control: {
        type: "inline-radio"
      }
    }
  },
  name: "Playground"
}`,...t.parameters?.docs?.source}}};const g=["Simple","Complex","ComplexAdjacentBoundaryItemsSet","Playground"],d=Object.freeze(Object.defineProperty({__proto__:null,Complex:e,ComplexAdjacentBoundaryItemsSet:p,Playground:t,Simple:n,__namedExportsOrder:g,default:c},Symbol.toStringTag,{value:"Module"}));export{d as I};
