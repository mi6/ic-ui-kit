import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{L as n,in as r,t as i,ut as a}from"./iframe-Cvj0onjK.js";var o=e({AlignmentLeft:()=>g,AlignmentSpaceBetween:()=>_,Basic:()=>u,GoToPageControl:()=>f,HideAllFromItemsPerPage:()=>y,HideCurrentPage:()=>E,HideFirstAndLastPageButtons:()=>T,HideRangeLabel:()=>v,ItemsPerPageControl:()=>d,PaginationItemLabel:()=>m,PaginationRangeLabelType:()=>p,PaginationType:()=>h,Playground:()=>O,SelectedItemsPerPage:()=>x,SelectedItemsPerPageToInvalidValue:()=>S,SetCurrentPage:()=>C,SetCurrentPageToInvalidValue:()=>w,SetToFirstPage:()=>b,__namedExportsOrder:()=>k,default:()=>l}),s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A=t((()=>{r(),a(),s=i(),{useArgs:c}=__STORYBOOK_MODULE_PREVIEW_API__,l={title:`Pagination Bar`,component:n},u={render:()=>(0,s.jsx)(n,{totalItems:100}),name:`Basic`},d={render:()=>(0,s.jsx)(`div`,{style:{height:`120px`},children:(0,s.jsx)(n,{totalItems:100,showItemsPerPageControl:!0,itemsPerPageOptions:[{label:`50`,value:`50`},{label:`100`,value:`100`},{label:`250`,value:`250`}]})}),name:`Items per page control`},f={render:()=>(0,s.jsx)(`div`,{style:{height:`120px`},children:(0,s.jsx)(n,{totalItems:100,showGoToPageControl:!0})}),name:`Go to page control`},p={render:()=>(0,s.jsx)(`div`,{style:{height:`150px`},children:(0,s.jsx)(n,{totalItems:100,showItemsPerPageControl:!0,showGoToPageControl:!0,rangeLabelType:`data`})}),name:`Pagination range label type`},m={render:()=>(0,s.jsx)(`div`,{style:{height:`150px`},children:(0,s.jsx)(n,{totalItems:100,showItemsPerPageControl:!0,showGoToPageControl:!0,rangeLabelType:`data`,itemLabel:`Image`})}),name:`Pagination item label`},h={render:()=>(0,s.jsx)(`div`,{style:{height:`150px`},children:(0,s.jsx)(n,{totalItems:100,showItemsPerPageControl:!0,type:`complex`})}),name:`Pagination type`},g={render:()=>(0,s.jsx)(`div`,{style:{height:`150px`},children:(0,s.jsx)(n,{totalItems:100,alignment:`left`,showItemsPerPageControl:!0,showGoToPageControl:!0})}),name:`Alignment left`},_={render:()=>(0,s.jsx)(`div`,{style:{height:`150px`},children:(0,s.jsx)(n,{totalItems:100,alignment:`space-between`,showItemsPerPageControl:!0,showGoToPageControl:!0})}),name:`Alignment space-between`},v={render:()=>(0,s.jsx)(`div`,{style:{height:`150px`},children:(0,s.jsx)(n,{totalItems:100,hideRangeLabel:!0,showItemsPerPageControl:!0,showGoToPageControl:!0})}),name:`Hide range label`},y={render:()=>(0,s.jsx)(`div`,{style:{height:`150px`},children:(0,s.jsx)(n,{totalItems:`100`,showItemsPerPageControl:!0,showGoToPageControl:!0,hideAllFromItemsPerPage:!0})}),name:`Hide 'All' from items per page`},b={render:()=>(0,s.jsx)(`div`,{style:{height:`150px`},children:(0,s.jsx)(n,{totalItems:`100`,showItemsPerPageControl:!0,showGoToPageControl:!0,setToFirstPageOnPaginationChange:!0})}),name:`Set to first page when items per page changes`},x={render:()=>(0,s.jsx)(`div`,{style:{height:`150px`},children:(0,s.jsx)(n,{totalItems:`100`,showItemsPerPageControl:!0,showGoToPageControl:!0,selectedItemsPerPage:`25`})}),name:`Set the selected items per page`},S={render:()=>(0,s.jsx)(`div`,{style:{height:`150px`},children:(0,s.jsx)(n,{totalItems:`100`,showItemsPerPageControl:!0,showGoToPageControl:!0,selectedItemsPerPage:`99`})}),name:`Set the selected items per page to an invalid value`},C={render:()=>(0,s.jsx)(`div`,{style:{height:`150px`},children:(0,s.jsx)(n,{totalItems:`100`,showItemsPerPageControl:!0,showGoToPageControl:!0,currentPage:`3`})}),name:`Set the current page`},w={render:()=>(0,s.jsx)(`div`,{style:{height:`150px`},children:(0,s.jsx)(n,{totalItems:`100`,showItemsPerPageControl:!0,showGoToPageControl:!0,currentPage:`-1`})}),name:`Set the current page to an invalid value`},T={render:()=>(0,s.jsx)(`div`,{style:{height:`150px`},children:(0,s.jsx)(n,{totalItems:`100`,showItemsPerPageControl:!0,showGoToPageControl:!0,hideFirstAndLastPageButton:!0})}),name:`Hide first and last page buttons`},E={render:()=>(0,s.jsx)(`div`,{style:{height:`150px`},children:(0,s.jsx)(n,{totalItems:`100`,showItemsPerPageControl:!0,showGoToPageControl:!0,hideCurrentPage:!0})}),name:`Hide current page label`},D={accessibleLabel:`Pagination Navigation`,alignment:`right`,currentPage:1,hideCurrentPage:!1,hideFirstAndLastPageButton:!1,hideRangeLabel:!1,itemLabel:`Item`,itemsPerPageOptions:[{label:`10`,value:`10`},{label:`25`,value:`25`},{label:`50`,value:`50`}],monochrome:!1,pageLabel:`Page`,rangeLabelType:`page`,selectedItemsPerPage:`10`,selectItemsPerPageOnEnter:!0,setToFirstPageOnPaginationChange:!1,showItemsPerPageControl:!0,showGoToPageControl:!0,totalItems:100,type:`simple`,theme:`inherit`},O={render:e=>{let[t]=c();return(0,s.jsx)(n,{accessibleLabel:e.accessibleLabel,alignment:e.alignment,currentPage:e.currentPage,hideCurrentPage:e.hideCurrentPage,hideFirstAndLastPageButton:e.hideFirstAndLastPageButton,hideRangeLabel:e.hideRangeLabel,itemLabel:e.itemLabel,itemsPerPageOptions:e.itemsPerPageOptions,pageLabel:e.pageLabel,rangeLabelType:e.rangeLabelType,selectedItemsPerPage:e.selectedItemsPerPage,selectItemsPerPageOnEnter:e.selectItemsPerPageOnEnter,setToFirstPageOnPaginationChange:e.setToFirstPageOnPaginationChange,showItemsPerPageControl:e.showItemsPerPageControl,showGoToPageControl:e.showGoToPageControl,totalItems:e.totalItems,type:e.type,onIcPageChange:e=>{t({currentPage:e.detail.value})},monochrome:e.monochrome,theme:e.theme})},args:D,argTypes:{alignment:{options:[`left`,`right`,`space-between`],control:{type:`inline-radio`}},rangeLabelType:{options:[`page`,`data`],control:{type:`inline-radio`}},type:{options:[`simple`,`complex`],control:{type:`inline-radio`}},theme:{options:[`inherit`,`light`,`dark`],control:{type:`inline-radio`}}},name:`Playground`},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <IcPaginationBar totalItems={100} />,
  name: "Basic"
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "120px"
  }}>
      <IcPaginationBar totalItems={100} showGoToPageControl />
    </div>,
  name: "Go to page control"
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems={100} showItemsPerPageControl showGoToPageControl rangeLabelType="data" />
    </div>,
  name: "Pagination range label type"
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems={100} showItemsPerPageControl showGoToPageControl rangeLabelType="data" itemLabel="Image" />
    </div>,
  name: "Pagination item label"
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems={100} showItemsPerPageControl type="complex" />
    </div>,
  name: "Pagination type"
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems={100} alignment="left" showItemsPerPageControl showGoToPageControl />
    </div>,
  name: "Alignment left"
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems={100} alignment="space-between" showItemsPerPageControl showGoToPageControl />
    </div>,
  name: "Alignment space-between"
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems={100} hideRangeLabel showItemsPerPageControl showGoToPageControl />
    </div>,
  name: "Hide range label"
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems="100" showItemsPerPageControl showGoToPageControl hideAllFromItemsPerPage />
    </div>,
  name: "Hide 'All' from items per page"
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems="100" showItemsPerPageControl showGoToPageControl setToFirstPageOnPaginationChange />
    </div>,
  name: "Set to first page when items per page changes"
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems="100" showItemsPerPageControl showGoToPageControl selectedItemsPerPage="25" />
    </div>,
  name: "Set the selected items per page"
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems="100" showItemsPerPageControl showGoToPageControl selectedItemsPerPage="99" />
    </div>,
  name: "Set the selected items per page to an invalid value"
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems="100" showItemsPerPageControl showGoToPageControl currentPage="3" />
    </div>,
  name: "Set the current page"
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems="100" showItemsPerPageControl showGoToPageControl currentPage="-1" />
    </div>,
  name: "Set the current page to an invalid value"
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems="100" showItemsPerPageControl showGoToPageControl hideFirstAndLastPageButton />
    </div>,
  name: "Hide first and last page buttons"
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "150px"
  }}>
      <IcPaginationBar totalItems="100" showItemsPerPageControl showGoToPageControl hideCurrentPage />
    </div>,
  name: "Hide current page label"
}`,...E.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k=[`Basic`,`ItemsPerPageControl`,`GoToPageControl`,`PaginationRangeLabelType`,`PaginationItemLabel`,`PaginationType`,`AlignmentLeft`,`AlignmentSpaceBetween`,`HideRangeLabel`,`HideAllFromItemsPerPage`,`SetToFirstPage`,`SelectedItemsPerPage`,`SelectedItemsPerPageToInvalidValue`,`SetCurrentPage`,`SetCurrentPageToInvalidValue`,`HideFirstAndLastPageButtons`,`HideCurrentPage`,`Playground`]}));A();export{g as AlignmentLeft,_ as AlignmentSpaceBetween,u as Basic,f as GoToPageControl,y as HideAllFromItemsPerPage,E as HideCurrentPage,T as HideFirstAndLastPageButtons,v as HideRangeLabel,d as ItemsPerPageControl,m as PaginationItemLabel,p as PaginationRangeLabelType,h as PaginationType,O as Playground,x as SelectedItemsPerPage,S as SelectedItemsPerPageToInvalidValue,C as SetCurrentPage,w as SetCurrentPageToInvalidValue,b as SetToFirstPage,k as __namedExportsOrder,l as default,A as n,o as t};