import{_ as a,R as e}from"./iframe-FrVc2K3M.js";const p={accessibleLabel:"Pagination Navigation",adjacentPageCount:1,boundaryPageCount:1,defaultPage:1,disabled:!1,hideCurrentPage:!1,hideFirstAndLastPageButton:!1,label:"",monochrome:!1,pages:15,paginationType:"simple",theme:"inherit"},d={title:"Pagination",component:a},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Default appearance"),e.createElement(a,{pages:"15"}),e.createElement("br",null),e.createElement("p",null,"Hidden current page"),e.createElement(a,{pages:"15",hideCurrentPage:!0}),e.createElement("br",null),e.createElement("p",null,"Hidden first and last buttons"),e.createElement(a,{pages:"15",hideFirstAndLastPageButton:!0}),e.createElement("br",null),e.createElement("p",null,"Default page"),e.createElement(a,{pages:"15",defaultPage:"3"}),e.createElement("br",null),e.createElement("p",null,"Disabled"),e.createElement(a,{pages:"15",defaultPage:"3",disabled:!0}),e.createElement("br",null),e.createElement("p",null,"Label set"),e.createElement(a,{pages:"15",label:"Label"})),name:"Simple"},r={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Default appearance"),e.createElement(a,{pages:"15",type:"complex"}),e.createElement("br",null),e.createElement("p",null,"Hidden first and last buttons"),e.createElement(a,{pages:"15",type:"complex",hideFirstAndLastPageButton:!0}),e.createElement("br",null),e.createElement("p",null,"Default page"),e.createElement(a,{pages:"15",type:"complex",defaultPage:7}),e.createElement("br",null),e.createElement("p",null,"Disabled"),e.createElement(a,{pages:"15",type:"complex",disabled:!0})),name:"Complex"},l={render:()=>e.createElement("div",null,e.createElement("p",{style:{padding:10}},"Adjacent: 0, Boundary: 0"),e.createElement(a,{pages:"15",type:"complex",adjacentPageCount:"0",boundaryPageCount:"0"}),e.createElement("br",null),e.createElement("p",{style:{padding:10}},"Adjacent: 0, Boundary: 1"),e.createElement(a,{pages:"15",type:"complex",adjacentPageCount:"0",boundaryPageCount:"1"}),e.createElement("br",null),e.createElement("p",{style:{padding:10}},"Adjacent: 0, Boundary: 2"),e.createElement(a,{pages:"15",type:"complex",adjacentPageCount:"0",boundaryPageCount:"2"}),e.createElement("br",null),e.createElement("p",{style:{padding:10}},"Adjacent: 1, Boundary: 0"),e.createElement(a,{pages:"15",type:"complex",adjacentPageCount:"1",boundaryPageCount:"0"}),e.createElement("br",null),e.createElement("p",{style:{padding:10}},"Adjacent: 2, Boundary: 0"),e.createElement(a,{pages:"15",type:"complex",adjacentPageCount:"2",boundaryPageCount:"0"}),e.createElement("br",null),e.createElement("p",{style:{padding:10}},"Adjacent: 1, Boundary: 1"),e.createElement(a,{pages:"15",type:"complex"}),e.createElement("br",null),e.createElement("p",{style:{padding:10}},"Adjacent: 2, Boundary: 2"),e.createElement(a,{pages:"15",type:"complex",adjacentPageCount:"2",boundaryPageCount:"2"})),name:"Complex - Adjacent & Boundary Items Set"},o={render:n=>e.createElement(a,{accessibleLabel:n.accessibleLabel,pages:n.pages,type:n.paginationType,adjacentPageCount:n.adjacentPageCount,boundaryPageCount:n.boundaryPageCount,label:n.label,disabled:n.disabled,defaultPage:n.defaultPage,hideFirstAndLastPageButton:n.hideFirstAndLastPageButton,hideCurrentPage:n.hideCurrentPage,theme:n.theme,monochrome:n.monochrome}),name:"Playground",args:p,argTypes:{paginationType:{options:["simple","complex"],control:{type:"inline-radio"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <p>Default appearance</p>
    <IcPagination pages="15" />
    <br />
    <p>Hidden current page</p>
    <IcPagination pages="15" hideCurrentPage />
    <br />
    <p>Hidden first and last buttons</p>
    <IcPagination pages="15" hideFirstAndLastPageButton />
    <br />
    <p>Default page</p>
    <IcPagination pages="15" defaultPage="3" />
    <br />
    <p>Disabled</p>
    <IcPagination pages="15" defaultPage="3" disabled />
    <br />
    <p>Label set</p>
    <IcPagination pages="15" label="Label" />
    </>,
  name: "Simple"
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <p>Default appearance</p>
    <IcPagination pages="15" type="complex" />
    <br />
    <p>Hidden first and last buttons</p>
    <IcPagination pages="15" type="complex" hideFirstAndLastPageButton />
    <br />
    <p>Default page</p>
    <IcPagination pages="15" type="complex" defaultPage={7} />
    <br />
    <p>Disabled</p>
    <IcPagination pages="15" type="complex" disabled />
    </>,
  name: "Complex"
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <p style={{
      padding: 10
    }}>
        Adjacent: 0, Boundary: 0
      </p>
      <IcPagination pages="15" type="complex" adjacentPageCount="0" boundaryPageCount="0" />
      <br />
      <p style={{
      padding: 10
    }}>
        Adjacent: 0, Boundary: 1
      </p>
      <IcPagination pages="15" type="complex" adjacentPageCount="0" boundaryPageCount="1" />
      <br />
      <p style={{
      padding: 10
    }}>
        Adjacent: 0, Boundary: 2
      </p>
      <IcPagination pages="15" type="complex" adjacentPageCount="0" boundaryPageCount="2" />
      <br />
      <p style={{
      padding: 10
    }}>
        Adjacent: 1, Boundary: 0
      </p>
      <IcPagination pages="15" type="complex" adjacentPageCount="1" boundaryPageCount="0" />
      <br />
      <p style={{
      padding: 10
    }}>
        Adjacent: 2, Boundary: 0
      </p>
      <IcPagination pages="15" type="complex" adjacentPageCount="2" boundaryPageCount="0" />
      <br />
      <p style={{
      padding: 10
    }}>
        Adjacent: 1, Boundary: 1
      </p>
      <IcPagination pages="15" type="complex" />
      <br />
      <p style={{
      padding: 10
    }}>
        Adjacent: 2, Boundary: 2
      </p>
      <IcPagination pages="15" type="complex" adjacentPageCount="2" boundaryPageCount="2" />
    </div>,
  name: "Complex - Adjacent & Boundary Items Set"
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <IcPagination accessibleLabel={args.accessibleLabel} pages={args.pages} type={args.paginationType} adjacentPageCount={args.adjacentPageCount} boundaryPageCount={args.boundaryPageCount} label={args.label} disabled={args.disabled} defaultPage={args.defaultPage} hideFirstAndLastPageButton={args.hideFirstAndLastPageButton} hideCurrentPage={args.hideCurrentPage} theme={args.theme} monochrome={args.monochrome} />,
  name: "Playground",
  args: defaultArgs,
  argTypes: {
    paginationType: {
      options: ["simple", "complex"],
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
  }
}`,...o.parameters?.docs?.source}}};const c=["Simple","Complex","ComplexAdjacentBoundaryItemsSet","Playground"],i=Object.freeze(Object.defineProperty({__proto__:null,Complex:r,ComplexAdjacentBoundaryItemsSet:l,Playground:o,Simple:t,__namedExportsOrder:c,default:d},Symbol.toStringTag,{value:"Module"}));export{i as I};
