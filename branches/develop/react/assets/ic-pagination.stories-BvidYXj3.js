import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{I as n,in as r,t as i,ut as a}from"./iframe-xO3e-qV4.js";var o=e({Complex:()=>d,ComplexAdjacentBoundaryItemsSet:()=>f,Playground:()=>p,Simple:()=>u,__namedExportsOrder:()=>m,default:()=>l}),s,c,l,u,d,f,p,m,h=t((()=>{r(),a(),s=i(),c={accessibleLabel:`Pagination Navigation`,adjacentPageCount:1,boundaryPageCount:1,defaultPage:1,disabled:!1,hideCurrentPage:!1,hideFirstAndLastPageButton:!1,label:``,monochrome:!1,pages:15,paginationType:`simple`,theme:`inherit`},l={title:`Pagination`,component:n},u={render:()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(`p`,{children:`Default appearance`}),(0,s.jsx)(n,{pages:`15`}),(0,s.jsx)(`br`,{}),(0,s.jsx)(`p`,{children:`Hidden current page`}),(0,s.jsx)(n,{pages:`15`,hideCurrentPage:!0}),(0,s.jsx)(`br`,{}),(0,s.jsx)(`p`,{children:`Hidden first and last buttons`}),(0,s.jsx)(n,{pages:`15`,hideFirstAndLastPageButton:!0}),(0,s.jsx)(`br`,{}),(0,s.jsx)(`p`,{children:`Default page`}),(0,s.jsx)(n,{pages:`15`,defaultPage:`3`}),(0,s.jsx)(`br`,{}),(0,s.jsx)(`p`,{children:`Disabled`}),(0,s.jsx)(n,{pages:`15`,defaultPage:`3`,disabled:!0}),(0,s.jsx)(`br`,{}),(0,s.jsx)(`p`,{children:`Label set`}),(0,s.jsx)(n,{pages:`15`,label:`Label`})]}),name:`Simple`},d={render:()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(`p`,{children:`Default appearance`}),(0,s.jsx)(n,{pages:`15`,type:`complex`}),(0,s.jsx)(`br`,{}),(0,s.jsx)(`p`,{children:`Hidden first and last buttons`}),(0,s.jsx)(n,{pages:`15`,type:`complex`,hideFirstAndLastPageButton:!0}),(0,s.jsx)(`br`,{}),(0,s.jsx)(`p`,{children:`Default page`}),(0,s.jsx)(n,{pages:`15`,type:`complex`,defaultPage:7}),(0,s.jsx)(`br`,{}),(0,s.jsx)(`p`,{children:`Disabled`}),(0,s.jsx)(n,{pages:`15`,type:`complex`,disabled:!0})]}),name:`Complex`},f={render:()=>(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{style:{padding:10},children:`Adjacent: 0, Boundary: 0`}),(0,s.jsx)(n,{pages:`15`,type:`complex`,adjacentPageCount:`0`,boundaryPageCount:`0`}),(0,s.jsx)(`br`,{}),(0,s.jsx)(`p`,{style:{padding:10},children:`Adjacent: 0, Boundary: 1`}),(0,s.jsx)(n,{pages:`15`,type:`complex`,adjacentPageCount:`0`,boundaryPageCount:`1`}),(0,s.jsx)(`br`,{}),(0,s.jsx)(`p`,{style:{padding:10},children:`Adjacent: 0, Boundary: 2`}),(0,s.jsx)(n,{pages:`15`,type:`complex`,adjacentPageCount:`0`,boundaryPageCount:`2`}),(0,s.jsx)(`br`,{}),(0,s.jsx)(`p`,{style:{padding:10},children:`Adjacent: 1, Boundary: 0`}),(0,s.jsx)(n,{pages:`15`,type:`complex`,adjacentPageCount:`1`,boundaryPageCount:`0`}),(0,s.jsx)(`br`,{}),(0,s.jsx)(`p`,{style:{padding:10},children:`Adjacent: 2, Boundary: 0`}),(0,s.jsx)(n,{pages:`15`,type:`complex`,adjacentPageCount:`2`,boundaryPageCount:`0`}),(0,s.jsx)(`br`,{}),(0,s.jsx)(`p`,{style:{padding:10},children:`Adjacent: 1, Boundary: 1`}),(0,s.jsx)(n,{pages:`15`,type:`complex`}),(0,s.jsx)(`br`,{}),(0,s.jsx)(`p`,{style:{padding:10},children:`Adjacent: 2, Boundary: 2`}),(0,s.jsx)(n,{pages:`15`,type:`complex`,adjacentPageCount:`2`,boundaryPageCount:`2`})]}),name:`Complex - Adjacent & Boundary Items Set`},p={render:e=>(0,s.jsx)(n,{accessibleLabel:e.accessibleLabel,pages:e.pages,type:e.paginationType,adjacentPageCount:e.adjacentPageCount,boundaryPageCount:e.boundaryPageCount,label:e.label,disabled:e.disabled,defaultPage:e.defaultPage,hideFirstAndLastPageButton:e.hideFirstAndLastPageButton,hideCurrentPage:e.hideCurrentPage,theme:e.theme,monochrome:e.monochrome}),name:`Playground`,args:c,argTypes:{paginationType:{options:[`simple`,`complex`],control:{type:`inline-radio`}},theme:{options:[`inherit`,`light`,`dark`],control:{type:`inline-radio`}}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`Simple`,`Complex`,`ComplexAdjacentBoundaryItemsSet`,`Playground`]}));h();export{d as Complex,f as ComplexAdjacentBoundaryItemsSet,p as Playground,u as Simple,m as __namedExportsOrder,l as default,h as n,o as t};