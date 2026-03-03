var y=Object.freeze,f=Object.defineProperty;var P=(w,x)=>y(f(w,"raw",{value:y(x||w.slice())}));import{x as e}from"./lit-html-CWQq0DyO.js";const I=""+new URL("readme-CAb69xJr.md",import.meta.url).href,A={title:"Web Components/Pagination bar",component:"ic-pagination-bar",parameters:{componentAPI:{data:I}}},t={render:()=>e`<ic-pagination-bar total-items="100"></ic-pagination-bar>`,name:"Basic"};var S;const a={render:()=>e(S||(S=P([`<div style="height: 150px;">
      <ic-pagination-bar
        total-items="100"
        show-items-per-page-control="true"
      ></ic-pagination-bar>
    </div>
    <script>
      var paginationBar = document.querySelector("ic-pagination-bar");
      paginationBar.itemsPerPageOptions = [
        { label: "50", value: "50" },
        { label: "100", value: "100" },
        { label: "250", value: "250" },
      ];
    <\/script>`]))),name:"Items per page control"},r={render:()=>e`<div style="height: 120px;">
    <ic-pagination-bar
      total-items="100"
      show-go-to-page-control="true"
    ></ic-pagination-bar>
  </div>`,name:"Go to page control"},n={render:()=>e`<div style="height: 150px;">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      range-label-type="data"
    ></ic-pagination-bar>
  </div>`,name:"Pagination range label type"},o={render:()=>e`<div style="height: 150px;">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      range-label-type="data"
      item-label="Image"
    ></ic-pagination-bar>
  </div>`,name:"Pagination item label"},i={render:()=>e`<div style="height: 150px;">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      type="complex"
    ></ic-pagination-bar>
  </div>`,name:"Pagination type"},s={render:()=>e`<div style="height: 150px;">
    <ic-pagination-bar
      total-items="100"
      alignment="left"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
    ></ic-pagination-bar>
  </div>`,name:"Alignment left"},p={render:()=>e`<div style="height: 150px;">
    <ic-pagination-bar
      total-items="100"
      alignment="space-between"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
    ></ic-pagination-bar>
  </div>`,name:"Alignment space-between"},g={render:()=>e`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      hide-range-label="true"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
    ></ic-pagination-bar>
  </div>`,name:"Hide range label"},c={render:()=>e`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      hide-all-from-items-per-page="true"
    ></ic-pagination-bar>
  </div>`,name:"Hide 'All' from items per page"},l={render:()=>e`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      hide-all-from-items-per-page="true"
      set-to-first-page-on-pagination-change="true"
    ></ic-pagination-bar>
  </div>`,name:"Set to first page when items per page changes"},m={render:()=>e`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      selected-items-per-page="25"
    ></ic-pagination-bar>
  </div>`,name:"Set the selected items per page"},d={render:()=>e`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      selected-items-per-page="25"
    ></ic-pagination-bar>
  </div>`,name:"Set the selected items per page to an invalid value"},u={render:()=>e`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      current-page="3"
    ></ic-pagination-bar>
  </div>`,name:"Set the current page"},h={render:()=>e`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      current-page="-1"
    ></ic-pagination-bar>
  </div>`,name:"Set the current page to an invalid value"},b={render:()=>e`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      hide-first-and-last-page-button="true"
    ></ic-pagination-bar>
  </div>`,name:"Hide first and last page buttons"},v={render:()=>e`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      hide-current-page="true"
    ></ic-pagination-bar>
  </div>`,name:"Hide current page label"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-pagination-bar total-items="100"></ic-pagination-bar>\`,
  name: "Basic"
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height: 150px;">
      <ic-pagination-bar
        total-items="100"
        show-items-per-page-control="true"
      ></ic-pagination-bar>
    </div>
    <script>
      var paginationBar = document.querySelector("ic-pagination-bar");
      paginationBar.itemsPerPageOptions = [
        { label: "50", value: "50" },
        { label: "100", value: "100" },
        { label: "250", value: "250" },
      ];
    <\/script>\`,
  name: "Items per page control"
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height: 120px;">
    <ic-pagination-bar
      total-items="100"
      show-go-to-page-control="true"
    ></ic-pagination-bar>
  </div>\`,
  name: "Go to page control"
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height: 150px;">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      range-label-type="data"
    ></ic-pagination-bar>
  </div>\`,
  name: "Pagination range label type"
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height: 150px;">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      range-label-type="data"
      item-label="Image"
    ></ic-pagination-bar>
  </div>\`,
  name: "Pagination item label"
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height: 150px;">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      type="complex"
    ></ic-pagination-bar>
  </div>\`,
  name: "Pagination type"
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height: 150px;">
    <ic-pagination-bar
      total-items="100"
      alignment="left"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
    ></ic-pagination-bar>
  </div>\`,
  name: "Alignment left"
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height: 150px;">
    <ic-pagination-bar
      total-items="100"
      alignment="space-between"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
    ></ic-pagination-bar>
  </div>\`,
  name: "Alignment space-between"
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      hide-range-label="true"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
    ></ic-pagination-bar>
  </div>\`,
  name: "Hide range label"
}`,...g.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      hide-all-from-items-per-page="true"
    ></ic-pagination-bar>
  </div>\`,
  name: "Hide 'All' from items per page"
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      hide-all-from-items-per-page="true"
      set-to-first-page-on-pagination-change="true"
    ></ic-pagination-bar>
  </div>\`,
  name: "Set to first page when items per page changes"
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      selected-items-per-page="25"
    ></ic-pagination-bar>
  </div>\`,
  name: "Set the selected items per page"
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      selected-items-per-page="25"
    ></ic-pagination-bar>
  </div>\`,
  name: "Set the selected items per page to an invalid value"
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      current-page="3"
    ></ic-pagination-bar>
  </div>\`,
  name: "Set the current page"
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      current-page="-1"
    ></ic-pagination-bar>
  </div>\`,
  name: "Set the current page to an invalid value"
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      hide-first-and-last-page-button="true"
    ></ic-pagination-bar>
  </div>\`,
  name: "Hide first and last page buttons"
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      hide-current-page="true"
    ></ic-pagination-bar>
  </div>\`,
  name: "Hide current page label"
}`,...v.parameters?.docs?.source}}};const H=["Basic","ItemsPerPageControl","GoToPageControl","PaginationRangeLabelType","PaginationItemLabel","PaginationType","AlignmentLeft","AlignmentSpaceBetween","HideRangeLabel","HideAllFromItemsPerPage","SetToFirstPage","SelectedItemsPerPage","SelectedItemsPerPageToInvalidValue","SetCurrentPage","SetCurrentPageToInvalidValue","HideFirstAndLastPageButtons","HideCurrentPage"],C=Object.freeze(Object.defineProperty({__proto__:null,AlignmentLeft:s,AlignmentSpaceBetween:p,Basic:t,GoToPageControl:r,HideAllFromItemsPerPage:c,HideCurrentPage:v,HideFirstAndLastPageButtons:b,HideRangeLabel:g,ItemsPerPageControl:a,PaginationItemLabel:o,PaginationRangeLabelType:n,PaginationType:i,SelectedItemsPerPage:m,SelectedItemsPerPageToInvalidValue:d,SetCurrentPage:u,SetCurrentPageToInvalidValue:h,SetToFirstPage:l,__namedExportsOrder:H,default:A},Symbol.toStringTag,{value:"Module"}));export{C as I};
