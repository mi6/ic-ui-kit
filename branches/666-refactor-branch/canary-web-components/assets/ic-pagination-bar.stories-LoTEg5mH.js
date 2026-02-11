var v=Object.freeze,x=Object.defineProperty;var f=(w,S)=>v(x(w,"raw",{value:v(S||w.slice())}));import{x as e}from"./lit-html-DDAUtwXN.js";const I=""+new URL("readme-CQDRlfdA.md",import.meta.url).href,T={title:"Web Components/Pagination bar",component:"ic-pagination-bar",parameters:{componentAPI:{data:I}}},t={render:()=>e`<ic-pagination-bar total-items="100"></ic-pagination-bar>`,name:"Basic"};var P;const a={render:()=>e(P||(P=f([`<div style="height: 150px;">
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
  </div>`,name:"Alignment left"},y={render:()=>e`<div style="height: 150px;">
    <ic-pagination-bar
      total-items="100"
      alignment="space-between"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
    ></ic-pagination-bar>
  </div>`,name:"Alignment space-between"},p={render:()=>e`<div style="height:150px">
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
  </div>`,name:"Set to first page when items per page changes"},g={render:()=>e`<div style="height:150px">
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
  </div>`,name:"Set the selected items per page to an invalid value"},m={render:()=>e`<div style="height:150px">
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
  </div>`,name:"Set the current page to an invalid value"},u={render:()=>e`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      hide-first-and-last-page-button="true"
    ></ic-pagination-bar>
  </div>`,name:"Hide first and last page buttons"},b={render:()=>e`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      hide-current-page="true"
    ></ic-pagination-bar>
  </div>`,name:"Hide current page label"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-pagination-bar total-items="100"></ic-pagination-bar>\`,
  name: "Basic"
}`,...t.parameters?.docs?.source},description:{story:`Use the pagination bar when large amounts of content are split across multiple pages and various pagination options are required.

There is one required attribute for the pagination bar:
- total-items: \`number\`

Click the 'Component API' tab to view all the available attributes, events and slots for pagination bar.

To use the pagination bar component, import \`@ukic/canary-web-components\` into your application.`,...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source},description:{story:"Pagination bar will display the number of pages out of the total number of pages as well as the `simple` pagination type.\n\nBy default, the items per page is set to 10. If the total items is greater than 100, the default items per page is set to 25.\n\nTo display the items per page control, set the `show-items-per-page-control` attribute to `true`.\n\nThe items per page control will display a dropdown with options to select the number of items to display per page. Customize the options by setting the `itemsPerPageOptions` property.\n`itemsPerPageOptions` is an array of objects with `label` and `value` properties. If more than three options are provided, the dropdown will display the first three options and an 'All' option.",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height: 120px;">
    <ic-pagination-bar
      total-items="100"
      show-go-to-page-control="true"
    ></ic-pagination-bar>
  </div>\`,
  name: "Go to page control"
}`,...r.parameters?.docs?.source},description:{story:"To display the go to page control, set the `show-go-to-page-control` attribute to `true`. 'Go to page' allows the user to jump to a specific page. If the page number is invalid, the input will be styled in the `ic-status-error` colour with a tooltip detailing the error.",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height: 150px;">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      range-label-type="data"
    ></ic-pagination-bar>
  </div>\`,
  name: "Pagination range label type"
}`,...n.parameters?.docs?.source},description:{story:"The pagination range label type can be set to two types:\n- `simple`: [default]: Display the total number of pages and the current page number.\n- `data`: Displays the total number of items and the items range.\n\nThe example below uses the `data` pagination range label type. The range is updated when the page is changed.",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:"'Item' can be changed to a custom label by setting the `item-label` attribute. Any occurrences of 'Item' in the pagination bar will be replaced with the custom label.",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height: 150px;">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      type="complex"
    ></ic-pagination-bar>
  </div>\`,
  name: "Pagination type"
}`,...i.parameters?.docs?.source},description:{story:"The pagination type can be set to two types:\n- `simple`: [default]: Display the current page as a label with back and next buttons.\n- `complex`: Displays all the page numbers as buttons with back and next buttons.\n\nThe `complex` pagination type is useful when there are many pages to navigate through.",...i.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height: 150px;">
    <ic-pagination-bar
      total-items="100"
      alignment="left"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
    ></ic-pagination-bar>
  </div>\`,
  name: "Alignment left"
}`,...s.parameters?.docs?.source},description:{story:"The pagination elements can be aligned to the `right` (default), `left` or `space-between`. The default alignment is right.",...s.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height: 150px;">
    <ic-pagination-bar
      total-items="100"
      alignment="space-between"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
    ></ic-pagination-bar>
  </div>\`,
  name: "Alignment space-between"
}`,...y.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      hide-range-label="true"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
    ></ic-pagination-bar>
  </div>\`,
  name: "Hide range label"
}`,...p.parameters?.docs?.source},description:{story:"If the pagination bar becomes cluttered due to the number of pagination elements displayed, the range label can be hidden by setting the `hide-range-label` attribute to `true`.",...p.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      hide-all-from-items-per-page="true"
    ></ic-pagination-bar>
  </div>\`,
  name: "Hide 'All' from items per page"
}`,...c.parameters?.docs?.source},description:{story:"If you have a predefined list of items you want in the itemsPerPage select, the 'All' option can be hidden by setting `hide-all-from-items-per-page` to `true`.",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source},description:{story:"When the 'items per page' value changes, setting `set-to-first-page-on-pagination-change` to `true` will set the pagination to the first page.",...l.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      selected-items-per-page="25"
    ></ic-pagination-bar>
  </div>\`,
  name: "Set the selected items per page"
}`,...g.parameters?.docs?.source},description:{story:"The `selected-items-per-page` prop can be used to programmatically set the items per page dropdown option.",...g.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      selected-items-per-page="25"
    ></ic-pagination-bar>
  </div>\`,
  name: "Set the selected items per page to an invalid value"
}`,...d.parameters?.docs?.source},description:{story:"The `selected-items-per-page` prop can be used to programmatically set the items per page dropdown option. If provided, this prop must match one of the items per page dropdown options, otherwise an error appears on the console and the prop is ignored.",...d.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      current-page="3"
    ></ic-pagination-bar>
  </div>\`,
  name: "Set the current page"
}`,...m.parameters?.docs?.source},description:{story:"The `current-page` prop can be used to programmatically set the current page.",...m.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      current-page="-1"
    ></ic-pagination-bar>
  </div>\`,
  name: "Set the current page to an invalid value"
}`,...h.parameters?.docs?.source},description:{story:"The `current-page` prop can be used to programmatically set the current page. If provided, this prop must be greater than 0 and less than or equal to the total number of pages, otherwise an error appears on the console and the prop is ignored.",...h.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      hide-first-and-last-page-button="true"
    ></ic-pagination-bar>
  </div>\`,
  name: "Hide first and last page buttons"
}`,...u.parameters?.docs?.source},description:{story:"The buttons to go to the first and last pages can be hidden by setting the `hide-first-and-last-page-button` prop to `true`.",...u.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      hide-current-page="true"
    ></ic-pagination-bar>
  </div>\`,
  name: "Hide current page label"
}`,...b.parameters?.docs?.source},description:{story:"When using the `simple` pagination type, the current page label can be hidden by setting the `hide-current-page` prop to `true`.",...b.parameters?.docs?.description}}};const A=["Basic","ItemsPerPageControl","GoToPageControl","PaginationRangeLabelType","PaginationItemLabel","PaginationType","AlignmentLeft","AlignmentSpaceBetween","HideRangeLabel","HideAllFromItemsPerPage","SetToFirstPage","SelectedItemsPerPage","SelectedItemsPerPageToInvalidValue","SetCurrentPage","SetCurrentPageToInvalidValue","HideFirstAndLastPageButtons","HideCurrentPage"],C=Object.freeze(Object.defineProperty({__proto__:null,AlignmentLeft:s,AlignmentSpaceBetween:y,Basic:t,GoToPageControl:r,HideAllFromItemsPerPage:c,HideCurrentPage:b,HideFirstAndLastPageButtons:u,HideRangeLabel:p,ItemsPerPageControl:a,PaginationItemLabel:o,PaginationRangeLabelType:n,PaginationType:i,SelectedItemsPerPage:g,SelectedItemsPerPageToInvalidValue:d,SetCurrentPage:m,SetCurrentPageToInvalidValue:h,SetToFirstPage:l,__namedExportsOrder:A,default:T},Symbol.toStringTag,{value:"Module"}));export{C as I};
