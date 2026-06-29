import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{n,t as r}from"./lit-html-CwvQb_NC.js";import{n as i,t as a}from"./taggedTemplateLiteral-pWa2IaV6.js";var o=e({AlignedCenter:()=>m,ColumnObject:()=>_,Columns:()=>f,Default:()=>u,DefaultColSpan:()=>y,DefaultColSpanObject:()=>b,DefaultColWidth:()=>v,DefaultRowSpan:()=>x,Fluid:()=>d,FullHeight:()=>g,FullWidth:()=>h,GridItem:()=>S,Playground:()=>w,Rows:()=>p,__namedExportsOrder:()=>T,default:()=>l}),s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E=t((()=>{n(),i(),l={title:`Web Components/Layout grid`,component:`ic-layout-grid`},u={render:()=>r`
    <ic-layout-grid>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 1
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 2
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 3
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 4
      </div>
    </ic-layout-grid>
  `,name:`Default`,parameters:{layout:`fullscreen`}},d={render:()=>r`
    <ic-layout-grid type="fluid">
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 1
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 2
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 3
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 4
      </div>
    </ic-layout-grid>
  `,name:`Fluid`,parameters:{layout:`fullscreen`}},f={render:()=>r`
    <ic-layout-grid columns="4">
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 1
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 2
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 3
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 4
      </div>
    </ic-layout-grid>
  `,name:`Columns`,parameters:{layout:`fullscreen`}},p={render:()=>r`
    <ic-layout-grid columns="3" rows="2">
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 1
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 2
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 3
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 4
      </div>
    </ic-layout-grid>
  `,name:`Rows`,parameters:{layout:`fullscreen`}},m={render:()=>r`
    <ic-layout-grid columns="4" aligned="center">
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 1
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 2
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 3
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 4
      </div>
    </ic-layout-grid>
  `,name:`Aligned center`,parameters:{layout:`fullscreen`}},h={render:()=>r`
    <ic-layout-grid columns="4" aligned="full-width">
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 1
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 2
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 3
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 4
      </div>
    </ic-layout-grid>
  `,name:`Aligned full width`,parameters:{layout:`fullscreen`}},g={render:()=>r`
    <ic-layout-grid full-height="true" columns="4">
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 1
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 2
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 3
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 4
      </div>
    </ic-layout-grid>
  `,name:`Full height`,parameters:{layout:`fullscreen`}},_={render:()=>r(s||=a([`
    <ic-layout-grid>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 1
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 2
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 3
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 4
      </div>
    </ic-layout-grid>
    <script>
      const grid = document.querySelector("ic-layout-grid");
      grid.columns = { xs: 1, sm: 2, md: 4, lg: 8, xl: 12 };
    <\/script>
  `])),name:`Column object`,parameters:{layout:`fullscreen`}},v={render:()=>r`
    <ic-layout-grid columns="4" default-col-width="150px">
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 1
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 2
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 3
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 4
      </div>
    </ic-layout-grid>
  `,name:`Default col width`,parameters:{layout:`fullscreen`}},y={render:()=>r`
    <ic-layout-grid default-col-span="2">
      <div style="width: 100px; height: 50px; background-color: lightblue;">
        Grid item 1
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 2
      </div>
      <div style="width: 80px; height: 50px; background-color: lightblue;">
        Grid item 3
      </div>
      <div style="width: 80px; height: 50px; background-color: lightblue;">
        Grid item 4
      </div>
    </ic-layout-grid>
  `,name:`Default col span`,parameters:{layout:`fullscreen`}},b={render:()=>r(c||=a([`
    <ic-layout-grid default-col-span="2">
      <div style="width: 100px; height: 50px; background-color: lightblue;">
        Grid item 1
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 2
      </div>
      <div style="width: 80px; height: 50px; background-color: lightblue;">
        Grid item 3
      </div>
      <div style="width: 80px; height: 50px; background-color: lightblue;">
        Grid item 4
      </div>
    </ic-layout-grid>
    <script>
      const grid = document.querySelector("ic-layout-grid");
      grid.defaultColSpan = { xs: 1, sm: 2, md: 2, lg: 4, xl: 4 };
    <\/script>
  `])),name:`Default col span object`,parameters:{layout:`fullscreen`}},x={render:()=>r`
    <ic-layout-grid default-row-span="2" rows="2">
      <div style="width: 50px; height: 100px; background-color: lightblue;">
        Grid item 1
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 2
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 3
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 4
      </div>
    </ic-layout-grid>
  `,name:`Default row span`,parameters:{layout:`fullscreen`}},S={render:()=>r`
    <ic-layout-grid columns="4">
      <ic-layout-grid-item
        col-start="2"
        col-span="2"
        row-start="1"
        row-span="2"
      >
        <div style="width: 50px; height: 50px; background-color: lightblue;">
          Grid item 1
        </div>
      </ic-layout-grid-item>
      <ic-layout-grid-item hide-in-mobile-mode="true">
        <div style="width: 50px; height: 50px; background-color: lightblue;">
          Grid item 2
        </div>
      </ic-layout-grid-item>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 3
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 4
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 5
      </div>
    </ic-layout-grid>
  `,name:`Grid item`,parameters:{layout:`fullscreen`}},C={aligned:null,fullHeight:!1,columns:4,defaultColSpan:1,defaultColWidth:`64px`,defaultRowSpan:1,gridSpacing:2,rows:1,type:`fixed`,gridItemColSpan:1,gridItemColStart:1,gridItemRowSpan:1,gridItemRowStart:1,gridItemHideInMobileMode:!1},w={render:e=>r`<ic-layout-grid
      style="border: 1px solid black;"
      columns=${e.columns}
      aligned=${e.aligned}
      full-height=${e.fullHeight}
      default-col-span=${e.defaultColSpan}
      default-col-width=${e.defaultColWidth}
      default-row-span=${e.defaultRowSpan}
      grid-spacing=${e.gridSpacing}
      rows=${e.rows}
      type=${e.type}
    >
      <ic-layout-grid-item
        col-span=${e.gridItemColSpan}
        col-start=${e.gridItemColStart}
        row-span=${e.gridItemRowSpan}
        row-start=${e.gridItemRowStart}
        hide-in-mobile-mode=${e.gridItemHideInMobileMode}
      >
        <div style="width: 50px; height: 50px; background-color: lightblue;">
          Grid item 1
        </div>
      </ic-layout-grid-item>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 2
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 3
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 4
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 5
      </div>
    </ic-layout-grid>`,name:`Playground`,args:C,argTypes:{aligned:{options:[null,`left`,`center`,`full-width`],control:{type:`inline-radio`}},type:{options:[`fixed`,`fluid`],control:{type:`inline-radio`}}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-layout-grid>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 1
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 2
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 3
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 4
      </div>
    </ic-layout-grid>
  \`,
  name: "Default",
  parameters: {
    layout: "fullscreen"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-layout-grid type="fluid">
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 1
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 2
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 3
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 4
      </div>
    </ic-layout-grid>
  \`,
  name: "Fluid",
  parameters: {
    layout: "fullscreen"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-layout-grid columns="4">
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 1
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 2
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 3
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 4
      </div>
    </ic-layout-grid>
  \`,
  name: "Columns",
  parameters: {
    layout: "fullscreen"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-layout-grid columns="3" rows="2">
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 1
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 2
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 3
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 4
      </div>
    </ic-layout-grid>
  \`,
  name: "Rows",
  parameters: {
    layout: "fullscreen"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-layout-grid columns="4" aligned="center">
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 1
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 2
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 3
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 4
      </div>
    </ic-layout-grid>
  \`,
  name: "Aligned center",
  parameters: {
    layout: "fullscreen"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-layout-grid columns="4" aligned="full-width">
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 1
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 2
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 3
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 4
      </div>
    </ic-layout-grid>
  \`,
  name: "Aligned full width",
  parameters: {
    layout: "fullscreen"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-layout-grid full-height="true" columns="4">
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 1
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 2
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 3
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 4
      </div>
    </ic-layout-grid>
  \`,
  name: "Full height",
  parameters: {
    layout: "fullscreen"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-layout-grid>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 1
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 2
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 3
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 4
      </div>
    </ic-layout-grid>
    <script>
      const grid = document.querySelector("ic-layout-grid");
      grid.columns = { xs: 1, sm: 2, md: 4, lg: 8, xl: 12 };
    <\/script>
  \`,
  name: "Column object",
  parameters: {
    layout: "fullscreen"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-layout-grid columns="4" default-col-width="150px">
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 1
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 2
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 3
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 4
      </div>
    </ic-layout-grid>
  \`,
  name: "Default col width",
  parameters: {
    layout: "fullscreen"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-layout-grid default-col-span="2">
      <div style="width: 100px; height: 50px; background-color: lightblue;">
        Grid item 1
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 2
      </div>
      <div style="width: 80px; height: 50px; background-color: lightblue;">
        Grid item 3
      </div>
      <div style="width: 80px; height: 50px; background-color: lightblue;">
        Grid item 4
      </div>
    </ic-layout-grid>
  \`,
  name: "Default col span",
  parameters: {
    layout: "fullscreen"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-layout-grid default-col-span="2">
      <div style="width: 100px; height: 50px; background-color: lightblue;">
        Grid item 1
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 2
      </div>
      <div style="width: 80px; height: 50px; background-color: lightblue;">
        Grid item 3
      </div>
      <div style="width: 80px; height: 50px; background-color: lightblue;">
        Grid item 4
      </div>
    </ic-layout-grid>
    <script>
      const grid = document.querySelector("ic-layout-grid");
      grid.defaultColSpan = { xs: 1, sm: 2, md: 2, lg: 4, xl: 4 };
    <\/script>
  \`,
  name: "Default col span object",
  parameters: {
    layout: "fullscreen"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-layout-grid default-row-span="2" rows="2">
      <div style="width: 50px; height: 100px; background-color: lightblue;">
        Grid item 1
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 2
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 3
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 4
      </div>
    </ic-layout-grid>
  \`,
  name: "Default row span",
  parameters: {
    layout: "fullscreen"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-layout-grid columns="4">
      <ic-layout-grid-item
        col-start="2"
        col-span="2"
        row-start="1"
        row-span="2"
      >
        <div style="width: 50px; height: 50px; background-color: lightblue;">
          Grid item 1
        </div>
      </ic-layout-grid-item>
      <ic-layout-grid-item hide-in-mobile-mode="true">
        <div style="width: 50px; height: 50px; background-color: lightblue;">
          Grid item 2
        </div>
      </ic-layout-grid-item>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 3
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 4
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 5
      </div>
    </ic-layout-grid>
  \`,
  name: "Grid item",
  parameters: {
    layout: "fullscreen"
  }
}`,...S.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => html\`<ic-layout-grid
      style="border: 1px solid black;"
      columns=\${args.columns}
      aligned=\${args.aligned}
      full-height=\${args.fullHeight}
      default-col-span=\${args.defaultColSpan}
      default-col-width=\${args.defaultColWidth}
      default-row-span=\${args.defaultRowSpan}
      grid-spacing=\${args.gridSpacing}
      rows=\${args.rows}
      type=\${args.type}
    >
      <ic-layout-grid-item
        col-span=\${args.gridItemColSpan}
        col-start=\${args.gridItemColStart}
        row-span=\${args.gridItemRowSpan}
        row-start=\${args.gridItemRowStart}
        hide-in-mobile-mode=\${args.gridItemHideInMobileMode}
      >
        <div style="width: 50px; height: 50px; background-color: lightblue;">
          Grid item 1
        </div>
      </ic-layout-grid-item>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 2
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 3
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 4
      </div>
      <div style="width: 50px; height: 50px; background-color: lightblue;">
        Grid item 5
      </div>
    </ic-layout-grid>\`,
  name: "Playground",
  args: defaultArgs,
  argTypes: {
    aligned: {
      options: [null, "left", "center", "full-width"],
      control: {
        type: "inline-radio"
      }
    },
    type: {
      options: ["fixed", "fluid"],
      control: {
        type: "inline-radio"
      }
    }
  }
}`,...w.parameters?.docs?.source}}},T=[`Default`,`Fluid`,`Columns`,`Rows`,`AlignedCenter`,`FullWidth`,`FullHeight`,`ColumnObject`,`DefaultColWidth`,`DefaultColSpan`,`DefaultColSpanObject`,`DefaultRowSpan`,`GridItem`,`Playground`]}));E();export{m as AlignedCenter,_ as ColumnObject,f as Columns,u as Default,y as DefaultColSpan,b as DefaultColSpanObject,v as DefaultColWidth,x as DefaultRowSpan,d as Fluid,g as FullHeight,h as FullWidth,S as GridItem,w as Playground,p as Rows,T as __namedExportsOrder,l as default,E as n,o as t};