import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{n,t as r}from"./lit-html-CwvQb_NC.js";import{n as i,t as a}from"./taggedTemplateLiteral-pWa2IaV6.js";var o,s=t((()=>{o=``+new URL(`readme-CGuuFlBi.md`,import.meta.url).href})),c=e({AlignmentLeft:()=>_,AlignmentSpaceBetween:()=>v,Basic:()=>d,GoToPageControl:()=>p,HideAllFromItemsPerPage:()=>b,HideCurrentPage:()=>D,HideFirstAndLastPageButtons:()=>E,HideRangeLabel:()=>y,ItemsPerPageControl:()=>f,PaginationItemLabel:()=>h,PaginationRangeLabelType:()=>m,PaginationType:()=>g,SelectedItemsPerPage:()=>S,SelectedItemsPerPageToInvalidValue:()=>C,SetCurrentPage:()=>w,SetCurrentPageToInvalidValue:()=>T,SetToFirstPage:()=>x,__namedExportsOrder:()=>O,default:()=>u}),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k=t((()=>{n(),s(),i(),u={title:`Web Components/Pagination bar`,component:`ic-pagination-bar`,parameters:{componentAPI:{data:o}}},d={render:()=>r`<ic-pagination-bar total-items="100"></ic-pagination-bar>`,name:`Basic`},f={render:()=>r(l||=a([`<div style="height: 150px;">
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
    <\/script>`])),name:`Items per page control`},p={render:()=>r`<div style="height: 120px;">
    <ic-pagination-bar
      total-items="100"
      show-go-to-page-control="true"
    ></ic-pagination-bar>
  </div>`,name:`Go to page control`},m={render:()=>r`<div style="height: 150px;">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      range-label-type="data"
    ></ic-pagination-bar>
  </div>`,name:`Pagination range label type`},h={render:()=>r`<div style="height: 150px;">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      range-label-type="data"
      item-label="Image"
    ></ic-pagination-bar>
  </div>`,name:`Pagination item label`},g={render:()=>r`<div style="height: 150px;">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      type="complex"
    ></ic-pagination-bar>
  </div>`,name:`Pagination type`},_={render:()=>r`<div style="height: 150px;">
    <ic-pagination-bar
      total-items="100"
      alignment="left"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
    ></ic-pagination-bar>
  </div>`,name:`Alignment left`},v={render:()=>r`<div style="height: 150px;">
    <ic-pagination-bar
      total-items="100"
      alignment="space-between"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
    ></ic-pagination-bar>
  </div>`,name:`Alignment space-between`},y={render:()=>r`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      hide-range-label="true"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
    ></ic-pagination-bar>
  </div>`,name:`Hide range label`},b={render:()=>r`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      hide-all-from-items-per-page="true"
    ></ic-pagination-bar>
  </div>`,name:`Hide 'All' from items per page`},x={render:()=>r`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      hide-all-from-items-per-page="true"
      set-to-first-page-on-pagination-change="true"
    ></ic-pagination-bar>
  </div>`,name:`Set to first page when items per page changes`},S={render:()=>r`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      selected-items-per-page="25"
    ></ic-pagination-bar>
  </div>`,name:`Set the selected items per page`},C={render:()=>r`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      selected-items-per-page="25"
    ></ic-pagination-bar>
  </div>`,name:`Set the selected items per page to an invalid value`},w={render:()=>r`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      current-page="3"
    ></ic-pagination-bar>
  </div>`,name:`Set the current page`},T={render:()=>r`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      current-page="-1"
    ></ic-pagination-bar>
  </div>`,name:`Set the current page to an invalid value`},E={render:()=>r`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      hide-first-and-last-page-button="true"
    ></ic-pagination-bar>
  </div>`,name:`Hide first and last page buttons`},D={render:()=>r`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      hide-current-page="true"
    ></ic-pagination-bar>
  </div>`,name:`Hide current page label`},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-pagination-bar total-items="100"></ic-pagination-bar>\`,
  name: "Basic"
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height: 120px;">
    <ic-pagination-bar
      total-items="100"
      show-go-to-page-control="true"
    ></ic-pagination-bar>
  </div>\`,
  name: "Go to page control"
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height: 150px;">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      range-label-type="data"
    ></ic-pagination-bar>
  </div>\`,
  name: "Pagination range label type"
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height: 150px;">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      type="complex"
    ></ic-pagination-bar>
  </div>\`,
  name: "Pagination type"
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height: 150px;">
    <ic-pagination-bar
      total-items="100"
      alignment="left"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
    ></ic-pagination-bar>
  </div>\`,
  name: "Alignment left"
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height: 150px;">
    <ic-pagination-bar
      total-items="100"
      alignment="space-between"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
    ></ic-pagination-bar>
  </div>\`,
  name: "Alignment space-between"
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      hide-range-label="true"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
    ></ic-pagination-bar>
  </div>\`,
  name: "Hide range label"
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      hide-all-from-items-per-page="true"
    ></ic-pagination-bar>
  </div>\`,
  name: "Hide 'All' from items per page"
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      selected-items-per-page="25"
    ></ic-pagination-bar>
  </div>\`,
  name: "Set the selected items per page"
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      selected-items-per-page="25"
    ></ic-pagination-bar>
  </div>\`,
  name: "Set the selected items per page to an invalid value"
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      current-page="3"
    ></ic-pagination-bar>
  </div>\`,
  name: "Set the current page"
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      current-page="-1"
    ></ic-pagination-bar>
  </div>\`,
  name: "Set the current page to an invalid value"
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      hide-first-and-last-page-button="true"
    ></ic-pagination-bar>
  </div>\`,
  name: "Hide first and last page buttons"
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      hide-current-page="true"
    ></ic-pagination-bar>
  </div>\`,
  name: "Hide current page label"
}`,...D.parameters?.docs?.source}}},O=[`Basic`,`ItemsPerPageControl`,`GoToPageControl`,`PaginationRangeLabelType`,`PaginationItemLabel`,`PaginationType`,`AlignmentLeft`,`AlignmentSpaceBetween`,`HideRangeLabel`,`HideAllFromItemsPerPage`,`SetToFirstPage`,`SelectedItemsPerPage`,`SelectedItemsPerPageToInvalidValue`,`SetCurrentPage`,`SetCurrentPageToInvalidValue`,`HideFirstAndLastPageButtons`,`HideCurrentPage`]}));k();export{_ as AlignmentLeft,v as AlignmentSpaceBetween,d as Basic,p as GoToPageControl,b as HideAllFromItemsPerPage,D as HideCurrentPage,E as HideFirstAndLastPageButtons,y as HideRangeLabel,f as ItemsPerPageControl,h as PaginationItemLabel,m as PaginationRangeLabelType,g as PaginationType,S as SelectedItemsPerPage,C as SelectedItemsPerPageToInvalidValue,w as SetCurrentPage,T as SetCurrentPageToInvalidValue,x as SetToFirstPage,O as __namedExportsOrder,u as default,k as n,c as t};