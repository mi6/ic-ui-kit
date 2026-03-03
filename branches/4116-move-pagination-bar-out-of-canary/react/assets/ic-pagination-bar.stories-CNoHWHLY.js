import{_ as a,R as e}from"./iframe-DaC165F9.js";const{useArgs:L}=__STORYBOOK_MODULE_PREVIEW_API__,S={title:"Pagination Bar",component:a},r={render:()=>e.createElement(a,{totalItems:100}),name:"Basic"},n={render:()=>e.createElement("div",{style:{height:"120px"}},e.createElement(a,{totalItems:100,showItemsPerPageControl:!0,itemsPerPageOptions:[{label:"50",value:"50"},{label:"100",value:"100"},{label:"250",value:"250"}]})),name:"Items per page control"},o={render:()=>e.createElement("div",{style:{height:"120px"}},e.createElement(a,{totalItems:100,showGoToPageControl:!0})),name:"Go to page control"},s={render:()=>e.createElement("div",{style:{height:"150px"}},e.createElement(a,{totalItems:100,showItemsPerPageControl:!0,showGoToPageControl:!0,rangeLabelType:"data"})),name:"Pagination range label type"},l={render:()=>e.createElement("div",{style:{height:"150px"}},e.createElement(a,{totalItems:100,showItemsPerPageControl:!0,showGoToPageControl:!0,rangeLabelType:"data",itemLabel:"Image"})),name:"Pagination item label"},i={render:()=>e.createElement("div",{style:{height:"150px"}},e.createElement(a,{totalItems:100,showItemsPerPageControl:!0,type:"complex"})),name:"Pagination type"},g={render:()=>e.createElement("div",{style:{height:"150px"}},e.createElement(a,{totalItems:100,alignment:"left",showItemsPerPageControl:!0,showGoToPageControl:!0})),name:"Alignment left"},m={render:()=>e.createElement("div",{style:{height:"150px"}},e.createElement(a,{totalItems:100,alignment:"space-between",showItemsPerPageControl:!0,showGoToPageControl:!0})),name:"Alignment space-between"},c={render:()=>e.createElement("div",{style:{height:"150px"}},e.createElement(a,{totalItems:100,hideRangeLabel:!0,showItemsPerPageControl:!0,showGoToPageControl:!0})),name:"Hide range label"},P={render:()=>e.createElement("div",{style:{height:"150px"}},e.createElement(a,{totalItems:"100",showItemsPerPageControl:!0,showGoToPageControl:!0,hideAllFromItemsPerPage:!0})),name:"Hide 'All' from items per page"},d={render:()=>e.createElement("div",{style:{height:"150px"}},e.createElement(a,{totalItems:"100",showItemsPerPageControl:!0,showGoToPageControl:!0,setToFirstPageOnPaginationChange:!0})),name:"Set to first page when items per page changes"},p={render:()=>e.createElement("div",{style:{height:"150px"}},e.createElement(a,{totalItems:"100",showItemsPerPageControl:!0,showGoToPageControl:!0,selectedItemsPerPage:"25"})),name:"Set the selected items per page"},h={render:()=>e.createElement("div",{style:{height:"150px"}},e.createElement(a,{totalItems:"100",showItemsPerPageControl:!0,showGoToPageControl:!0,selectedItemsPerPage:"99"})),name:"Set the selected items per page to an invalid value"},u={render:()=>e.createElement("div",{style:{height:"150px"}},e.createElement(a,{totalItems:"100",showItemsPerPageControl:!0,showGoToPageControl:!0,currentPage:"3"})),name:"Set the current page"},I={render:()=>e.createElement("div",{style:{height:"150px"}},e.createElement(a,{totalItems:"100",showItemsPerPageControl:!0,showGoToPageControl:!0,currentPage:"-1"})),name:"Set the current page to an invalid value"},C={render:()=>e.createElement("div",{style:{height:"150px"}},e.createElement(a,{totalItems:"100",showItemsPerPageControl:!0,showGoToPageControl:!0,hideFirstAndLastPageButton:!0})),name:"Hide first and last page buttons"},w={render:()=>e.createElement("div",{style:{height:"150px"}},e.createElement(a,{totalItems:"100",showItemsPerPageControl:!0,showGoToPageControl:!0,hideCurrentPage:!0})),name:"Hide current page label"},E={accessibleLabel:"Pagination Navigation",alignment:"right",currentPage:1,hideCurrentPage:!1,hideFirstAndLastPageButton:!1,hideRangeLabel:!1,itemLabel:"Item",itemsPerPageOptions:[{label:"10",value:"10"},{label:"25",value:"25"},{label:"50",value:"50"}],monochrome:!1,pageLabel:"Page",rangeLabelType:"page",selectedItemsPerPage:"10",selectItemsPerPageOnEnter:!0,setToFirstPageOnPaginationChange:!1,showItemsPerPageControl:!0,showGoToPageControl:!0,totalItems:100,type:"simple",theme:"inherit"},y={render:t=>{const[v]=L(),b=T=>{v({currentPage:T.detail.value})};return e.createElement(a,{accessibleLabel:t.accessibleLabel,alignment:t.alignment,currentPage:t.currentPage,hideCurrentPage:t.hideCurrentPage,hideFirstAndLastPageButton:t.hideFirstAndLastPageButton,hideRangeLabel:t.hideRangeLabel,itemLabel:t.itemLabel,itemsPerPageOptions:t.itemsPerPageOptions,pageLabel:t.pageLabel,rangeLabelType:t.rangeLabelType,selectedItemsPerPage:t.selectedItemsPerPage,selectItemsPerPageOnEnter:t.selectItemsPerPageOnEnter,setToFirstPageOnPaginationChange:t.setToFirstPageOnPaginationChange,showItemsPerPageControl:t.showItemsPerPageControl,showGoToPageControl:t.showGoToPageControl,totalItems:t.totalItems,type:t.type,onIcPageChange:b,monochrome:t.monochrome,theme:t.theme})},args:E,argTypes:{alignment:{options:["left","right","space-between"],control:{type:"inline-radio"}},rangeLabelType:{options:["page","data"],control:{type:"inline-radio"}},type:{options:["simple","complex"],control:{type:"inline-radio"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <IcPaginationBar totalItems={100} />,
  name: "Basic"
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "120px"
  }}>
      <IcPaginationBar totalItems={100} showGoToPageControl />
    </div>,
  name: "Go to page control"
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems={100} showItemsPerPageControl showGoToPageControl rangeLabelType="data" />
    </div>,
  name: "Pagination range label type"
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems={100} showItemsPerPageControl showGoToPageControl rangeLabelType="data" itemLabel="Image" />
    </div>,
  name: "Pagination item label"
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems={100} showItemsPerPageControl type="complex" />
    </div>,
  name: "Pagination type"
}`,...i.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems={100} alignment="left" showItemsPerPageControl showGoToPageControl />
    </div>,
  name: "Alignment left"
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems={100} alignment="space-between" showItemsPerPageControl showGoToPageControl />
    </div>,
  name: "Alignment space-between"
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems={100} hideRangeLabel showItemsPerPageControl showGoToPageControl />
    </div>,
  name: "Hide range label"
}`,...c.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems="100" showItemsPerPageControl showGoToPageControl hideAllFromItemsPerPage />
    </div>,
  name: "Hide 'All' from items per page"
}`,...P.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems="100" showItemsPerPageControl showGoToPageControl setToFirstPageOnPaginationChange />
    </div>,
  name: "Set to first page when items per page changes"
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems="100" showItemsPerPageControl showGoToPageControl selectedItemsPerPage="25" />
    </div>,
  name: "Set the selected items per page"
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems="100" showItemsPerPageControl showGoToPageControl selectedItemsPerPage="99" />
    </div>,
  name: "Set the selected items per page to an invalid value"
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems="100" showItemsPerPageControl showGoToPageControl currentPage="3" />
    </div>,
  name: "Set the current page"
}`,...u.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems="100" showItemsPerPageControl showGoToPageControl currentPage="-1" />
    </div>,
  name: "Set the current page to an invalid value"
}`,...I.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems="100" showItemsPerPageControl showGoToPageControl hideFirstAndLastPageButton />
    </div>,
  name: "Hide first and last page buttons"
}`,...C.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems="100" showItemsPerPageControl showGoToPageControl hideCurrentPage />
    </div>,
  name: "Hide current page label"
}`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const B=["Basic","ItemsPerPageControl","GoToPageControl","PaginationRangeLabelType","PaginationItemLabel","PaginationType","AlignmentLeft","AlignmentSpaceBetween","HideRangeLabel","HideAllFromItemsPerPage","SetToFirstPage","SelectedItemsPerPage","SelectedItemsPerPageToInvalidValue","SetCurrentPage","SetCurrentPageToInvalidValue","HideFirstAndLastPageButtons","HideCurrentPage","Playground"],G=Object.freeze(Object.defineProperty({__proto__:null,AlignmentLeft:g,AlignmentSpaceBetween:m,Basic:r,GoToPageControl:o,HideAllFromItemsPerPage:P,HideCurrentPage:w,HideFirstAndLastPageButtons:C,HideRangeLabel:c,ItemsPerPageControl:n,PaginationItemLabel:l,PaginationRangeLabelType:s,PaginationType:i,Playground:y,SelectedItemsPerPage:p,SelectedItemsPerPageToInvalidValue:h,SetCurrentPage:u,SetCurrentPageToInvalidValue:I,SetToFirstPage:d,__namedExportsOrder:B,default:S},Symbol.toStringTag,{value:"Module"}));export{G as I};
