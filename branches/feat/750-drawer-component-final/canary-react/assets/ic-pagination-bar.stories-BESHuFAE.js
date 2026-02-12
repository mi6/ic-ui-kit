import{R as e}from"./iframe-CVTEl_h5.js";import{l as a}from"./components-Dp2Ii5GV.js";const f=""+new URL("readme-CYUzrl7-.md",import.meta.url).href,{useArgs:L}=__STORYBOOK_MODULE_PREVIEW_API__,x={title:"React Components/Pagination Bar",component:a,parameters:{componentAPI:{data:f}}},r={render:()=>e.createElement(a,{totalItems:100}),name:"Basic"},n={render:()=>e.createElement("div",{style:{height:"120px"}},e.createElement(a,{totalItems:100,showItemsPerPageControl:!0,itemsPerPageOptions:[{label:"50",value:"50"},{label:"100",value:"100"},{label:"250",value:"250"}]})),name:"Items per page control"},o={render:()=>e.createElement("div",{style:{height:"120px"}},e.createElement(a,{totalItems:100,showGoToPageControl:!0})),name:"Go to page control"},s={render:()=>e.createElement("div",{style:{height:"150px"}},e.createElement(a,{totalItems:100,showItemsPerPageControl:!0,showGoToPageControl:!0,rangeLabelType:"data"})),name:"Pagination range label type"},i={render:()=>e.createElement("div",{style:{height:"150px"}},e.createElement(a,{totalItems:100,showItemsPerPageControl:!0,showGoToPageControl:!0,rangeLabelType:"data",itemLabel:"Image"})),name:"Pagination item label"},l={render:()=>e.createElement("div",{style:{height:"150px"}},e.createElement(a,{totalItems:100,showItemsPerPageControl:!0,type:"complex"})),name:"Pagination type"},g={render:()=>e.createElement("div",{style:{height:"150px"}},e.createElement(a,{totalItems:100,alignment:"left",showItemsPerPageControl:!0,showGoToPageControl:!0})),name:"Alignment left"},w={render:()=>e.createElement("div",{style:{height:"150px"}},e.createElement(a,{totalItems:100,alignment:"space-between",showItemsPerPageControl:!0,showGoToPageControl:!0})),name:"Alignment space-between"},p={render:()=>e.createElement("div",{style:{height:"150px"}},e.createElement(a,{totalItems:100,hideRangeLabel:!0,showItemsPerPageControl:!0,showGoToPageControl:!0})),name:"Hide range label"},m={render:()=>e.createElement("div",{style:{height:"150px"}},e.createElement(a,{totalItems:"100",showItemsPerPageControl:!0,showGoToPageControl:!0,hideAllFromItemsPerPage:!0})),name:"Hide 'All' from items per page"},c={render:()=>e.createElement("div",{style:{height:"150px"}},e.createElement(a,{totalItems:"100",showItemsPerPageControl:!0,showGoToPageControl:!0,setToFirstPageOnPaginationChange:!0})),name:"Set to first page when items per page changes"},d={render:()=>e.createElement("div",{style:{height:"150px"}},e.createElement(a,{totalItems:"100",showItemsPerPageControl:!0,showGoToPageControl:!0,selectedItemsPerPage:"25"})),name:"Set the selected items per page"},h={render:()=>e.createElement("div",{style:{height:"150px"}},e.createElement(a,{totalItems:"100",showItemsPerPageControl:!0,showGoToPageControl:!0,selectedItemsPerPage:"99"})),name:"Set the selected items per page to an invalid value"},P={render:()=>e.createElement("div",{style:{height:"150px"}},e.createElement(a,{totalItems:"100",showItemsPerPageControl:!0,showGoToPageControl:!0,currentPage:"3"})),name:"Set the current page"},u={render:()=>e.createElement("div",{style:{height:"150px"}},e.createElement(a,{totalItems:"100",showItemsPerPageControl:!0,showGoToPageControl:!0,currentPage:"-1"})),name:"Set the current page to an invalid value"},I={render:()=>e.createElement("div",{style:{height:"150px"}},e.createElement(a,{totalItems:"100",showItemsPerPageControl:!0,showGoToPageControl:!0,hideFirstAndLastPageButton:!0})),name:"Hide first and last page buttons"},b={render:()=>e.createElement("div",{style:{height:"150px"}},e.createElement(a,{totalItems:"100",showItemsPerPageControl:!0,showGoToPageControl:!0,hideCurrentPage:!0})),name:"Hide current page label"},S={accessibleLabel:"Pagination Navigation",alignment:"right",currentPage:1,hideCurrentPage:!1,hideFirstAndLastPageButton:!1,hideRangeLabel:!1,itemLabel:"Item",itemsPerPageOptions:[{label:"10",value:"10"},{label:"25",value:"25"},{label:"50",value:"50"}],monochrome:!1,pageLabel:"Page",rangeLabelType:"page",selectedItemsPerPage:"10",selectItemsPerPageOnEnter:!0,setToFirstPageOnPaginationChange:!1,showItemsPerPageControl:!0,showGoToPageControl:!0,totalItems:100,type:"simple",theme:"inherit"},y={render:t=>{const[C]=L(),v=T=>{C({currentPage:T.detail.value})};return e.createElement(a,{accessibleLabel:t.accessibleLabel,alignment:t.alignment,currentPage:t.currentPage,hideCurrentPage:t.hideCurrentPage,hideFirstAndLastPageButton:t.hideFirstAndLastPageButton,hideRangeLabel:t.hideRangeLabel,itemLabel:t.itemLabel,itemsPerPageOptions:t.itemsPerPageOptions,pageLabel:t.pageLabel,rangeLabelType:t.rangeLabelType,selectedItemsPerPage:t.selectedItemsPerPage,selectItemsPerPageOnEnter:t.selectItemsPerPageOnEnter,setToFirstPageOnPaginationChange:t.setToFirstPageOnPaginationChange,showItemsPerPageControl:t.showItemsPerPageControl,showGoToPageControl:t.showGoToPageControl,totalItems:t.totalItems,type:t.type,onIcPageChange:v,monochrome:t.monochrome,theme:t.theme})},args:S,argTypes:{alignment:{options:["left","right","space-between"],control:{type:"inline-radio"}},rangeLabelType:{options:["page","data"],control:{type:"inline-radio"}},type:{options:["simple","complex"],control:{type:"inline-radio"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <IcPaginationBar totalItems={100} />,
  name: "Basic"
}`,...r.parameters?.docs?.source},description:{story:`Use the pagination bar when large amounts of content are split across multiple pages and various pagination options are required.

There is one required prop for the pagination bar:
- totalItems: \`number\`

Click the 'Component API' tab to view all the available props, events and slots for pagination bar.

To use the pagination bar component, import \`@ukic/canary-react\` into your application.`,...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "120px"
  }}>
      <IcPaginationBar totalItems={100} showItemsPerPageControl itemsPerPageOptions={[{
      label: "50",
      value: "50"
    }, {
      label: "100",
      value: "100"
    }, {
      label: "250",
      value: "250"
    }]} />
    </div>,
  name: "Items per page control"
}`,...n.parameters?.docs?.source},description:{story:"Pagination bar will display the number of pages out of the total number of pages as well as the `simple` pagination type.\n\nBy default, the items per page is set to 10. If the total items is greater than 100, the default items per page is set to 25.\n\nTo display the items per page control, set the `showItemsPerPageControl`.\n\nThe items per page control will display a dropdown with options to select the number of items to display per page. Customize the options by setting the `itemsPerPageOptions` property.\n`itemsPerPageOptions` is an array of objects with `label` and `value` properties. If more than three options are provided, the dropdown will display the first three options and an 'All' option.",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "120px"
  }}>
      <IcPaginationBar totalItems={100} showGoToPageControl />
    </div>,
  name: "Go to page control"
}`,...o.parameters?.docs?.source},description:{story:"To display the go to page control, set `showGoToPageControl`. 'Go to page' allows the user to jump to a specific page. If the page number is invalid, the input will be styled in the `ic-status-error` colour with a tooltip detailing the error.",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems={100} showItemsPerPageControl showGoToPageControl rangeLabelType="data" />
    </div>,
  name: "Pagination range label type"
}`,...s.parameters?.docs?.source},description:{story:"The pagination range label type can be set to two types:\n- `simple`: [default]: Display the total number of pages and the current page number.\n- `data`: Displays the total number of items and the items range.\n\nThe example below uses the `data` pagination range label type. The range is updated when the page is changed.",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems={100} showItemsPerPageControl showGoToPageControl rangeLabelType="data" itemLabel="Image" />
    </div>,
  name: "Pagination item label"
}`,...i.parameters?.docs?.source},description:{story:"'Item' can be changed to a custom label by setting the `itemLabel` prop. Any occurrences of 'Item' in the pagination bar will be replaced with the custom label.",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems={100} showItemsPerPageControl type="complex" />
    </div>,
  name: "Pagination type"
}`,...l.parameters?.docs?.source},description:{story:"The pagination type can be set to two types:\n- `simple`: [default]: Display the current page as a label with back and next buttons.\n- `complex`: Displays all the page numbers as buttons with back and next buttons.\n\nThe `complex` pagination type is useful when there are many pages to navigate through.",...l.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems={100} alignment="left" showItemsPerPageControl showGoToPageControl />
    </div>,
  name: "Alignment left"
}`,...g.parameters?.docs?.source},description:{story:"The pagination elements can be aligned to the `right` (default), `left` or `space-between`. The default alignment is `right`.",...g.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems={100} alignment="space-between" showItemsPerPageControl showGoToPageControl />
    </div>,
  name: "Alignment space-between"
}`,...w.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems={100} hideRangeLabel showItemsPerPageControl showGoToPageControl />
    </div>,
  name: "Hide range label"
}`,...p.parameters?.docs?.source},description:{story:"If the pagination bar becomes cluttered due to the number of pagination elements displayed, the range label can be hidden by setting the `hideRangeLabel` prop to `true`.",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems="100" showItemsPerPageControl showGoToPageControl hideAllFromItemsPerPage />
    </div>,
  name: "Hide 'All' from items per page"
}`,...m.parameters?.docs?.source},description:{story:"If you have a predefined list of items you want in the itemsPerPage select, the 'All' option can be hidden by setting `hideAllFromItemsPerPage` to `true`.",...m.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems="100" showItemsPerPageControl showGoToPageControl setToFirstPageOnPaginationChange />
    </div>,
  name: "Set to first page when items per page changes"
}`,...c.parameters?.docs?.source},description:{story:"When the 'items per page' value changes, setting `setToFirstPageOnPaginationChange` to `true` will set the pagination to the first page.",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems="100" showItemsPerPageControl showGoToPageControl selectedItemsPerPage="25" />
    </div>,
  name: "Set the selected items per page"
}`,...d.parameters?.docs?.source},description:{story:"The `selectedItemsPerPage` prop can be used to programmatically set the items per page dropdown option.",...d.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems="100" showItemsPerPageControl showGoToPageControl selectedItemsPerPage="99" />
    </div>,
  name: "Set the selected items per page to an invalid value"
}`,...h.parameters?.docs?.source},description:{story:"The `selectedItemsPerPage` prop can be used to programmatically set the selected items per page dropdown option. If provided, this prop must match one of the items per page dropdown options, otherwise an error appears on the console and the prop is ignored.",...h.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems="100" showItemsPerPageControl showGoToPageControl currentPage="3" />
    </div>,
  name: "Set the current page"
}`,...P.parameters?.docs?.source},description:{story:"The `currentPage` prop can be used to programmatically set the current page.",...P.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems="100" showItemsPerPageControl showGoToPageControl currentPage="-1" />
    </div>,
  name: "Set the current page to an invalid value"
}`,...u.parameters?.docs?.source},description:{story:"The `currentPage` prop can be used to programmatically set the current page. If provided, this prop must be greater than 0 and less than or equal to the total number of pages, otherwise an error appears on the console and the prop is ignored.",...u.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems="100" showItemsPerPageControl showGoToPageControl hideFirstAndLastPageButton />
    </div>,
  name: "Hide first and last page buttons"
}`,...I.parameters?.docs?.source},description:{story:"The buttons to go to the first and last pages can be hidden by setting the `hideFirstAndLastPageButton` prop to `true`.",...I.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems="100" showItemsPerPageControl showGoToPageControl hideCurrentPage />
    </div>,
  name: "Hide current page label"
}`,...b.parameters?.docs?.source},description:{story:"When using the `simple` pagination type, the current page label can be hidden by setting the `hideCurrentPage` prop to `true`.",...b.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [updateArgs] = useArgs();
    const updatePageNum = ev => {
      updateArgs({
        currentPage: ev.detail.value
      });
    };
    return <IcPaginationBar accessibleLabel={args.accessibleLabel} alignment={args.alignment} currentPage={args.currentPage} hideCurrentPage={args.hideCurrentPage} hideFirstAndLastPageButton={args.hideFirstAndLastPageButton} hideRangeLabel={args.hideRangeLabel} itemLabel={args.itemLabel} itemsPerPageOptions={args.itemsPerPageOptions} pageLabel={args.pageLabel} rangeLabelType={args.rangeLabelType} selectedItemsPerPage={args.selectedItemsPerPage} selectItemsPerPageOnEnter={args.selectItemsPerPageOnEnter} setToFirstPageOnPaginationChange={args.setToFirstPageOnPaginationChange} showItemsPerPageControl={args.showItemsPerPageControl} showGoToPageControl={args.showGoToPageControl} totalItems={args.totalItems} type={args.type} onIcPageChange={updatePageNum} monochrome={args.monochrome} theme={args.theme}></IcPaginationBar>;
  },
  args: defaultArgs,
  argTypes: {
    alignment: {
      options: ["left", "right", "space-between"],
      control: {
        type: "inline-radio"
      }
    },
    rangeLabelType: {
      options: ["page", "data"],
      control: {
        type: "inline-radio"
      }
    },
    type: {
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
  },
  name: "Playground"
}`,...y.parameters?.docs?.source},description:{story:'Go to the <ic-link href="/?path=/story/react-components-pagination-bar--playground">separate page for the playground example</ic-link> to view the prop controls.',...y.parameters?.docs?.description}}};const E=["Basic","ItemsPerPageControl","GoToPageControl","PaginationRangeLabelType","PaginationItemLabel","PaginationType","AlignmentLeft","AlignmentSpaceBetween","HideRangeLabel","HideAllFromItemsPerPage","SetToFirstPage","SelectedItemsPerPage","SelectedItemsPerPageToInvalidValue","SetCurrentPage","SetCurrentPageToInvalidValue","HideFirstAndLastPageButtons","HideCurrentPage","Playground"],A=Object.freeze(Object.defineProperty({__proto__:null,AlignmentLeft:g,AlignmentSpaceBetween:w,Basic:r,GoToPageControl:o,HideAllFromItemsPerPage:m,HideCurrentPage:b,HideFirstAndLastPageButtons:I,HideRangeLabel:p,ItemsPerPageControl:n,PaginationItemLabel:i,PaginationRangeLabelType:s,PaginationType:l,Playground:y,SelectedItemsPerPage:d,SelectedItemsPerPageToInvalidValue:h,SetCurrentPage:P,SetCurrentPageToInvalidValue:u,SetToFirstPage:c,__namedExportsOrder:E,default:x},Symbol.toStringTag,{value:"Module"}));export{A as I};
