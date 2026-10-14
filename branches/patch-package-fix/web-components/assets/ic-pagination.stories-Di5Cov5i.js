import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./lit-html-CMAkC4Hj.js";var i=e({Complex:()=>c,ComplexAdjacentBoundaryItemsSet:()=>l,Playground:()=>u,Simple:()=>s,__namedExportsOrder:()=>d,default:()=>o}),a,o,s,c,l,u,d,f=t((()=>{n(),a={accessibleLabel:`Pagination Navigation`,adjacentPageCount:1,boundaryPageCount:1,currentPage:1,defaultPage:1,disabled:!1,hideCurrentPage:!1,hideFirstAndLastPageButton:!1,label:`Page`,monochrome:!1,pages:15,theme:`inherit`,type:`simple`},o={title:`Web Components/Pagination`,component:`Pagination`},s={render:()=>r`
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
  `,name:`Simple`},c={render:()=>r`
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
  `,name:`Complex`},l={render:()=>r`
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
     `,name:`Complex - Adjacent & Boundary Items Set`},u={render:e=>r`<ic-pagination
      accessible-label=${e.accessibleLabel}
      adjacent-page-count=${e.adjacentPageCount}
      boundary-page-count=${e.boundaryPageCount}
      current-page=${e.currentPage}
      default-page=${e.defaultPage}
      disabled=${e.disabled}
      hide-current-page=${e.hideCurrentPage}
      hide-first-and-last-page-button=${e.hideFirstAndLastPageButton}
      label=${e.label}
      monochrome=${e.monochrome}
      pages=${e.pages}
      theme=${e.theme}
      type=${e.type}
    ></ic-pagination>`,args:a,argTypes:{theme:{options:[`inherit`,`light`,`dark`],control:{type:`inline-radio`}},type:{options:[`simple`,`complex`],control:{type:`inline-radio`}}},name:`Playground`},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`Simple`,`Complex`,`ComplexAdjacentBoundaryItemsSet`,`Playground`]}));f();export{c as Complex,l as ComplexAdjacentBoundaryItemsSet,u as Playground,s as Simple,d as __namedExportsOrder,o as default,f as n,i as t};