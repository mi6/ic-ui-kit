var x=Object.freeze,G=Object.defineProperty;var b=(i,w)=>x(G(i,"raw",{value:x(w||i.slice())}));import{x as e}from"./lit-html-CWQq0DyO.js";const k={title:"Web Components/Layout grid",component:"ic-layout-grid"},t={render:()=>e`
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
  `,name:"Default",parameters:{layout:"fullscreen"}},l={render:()=>e`
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
  `,name:"Fluid",parameters:{layout:"fullscreen"}},d={render:()=>e`
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
  `,name:"Columns",parameters:{layout:"fullscreen"}},r={render:()=>e`
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
  `,name:"Rows",parameters:{layout:"fullscreen"}},o={render:()=>e`
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
  `,name:"Aligned center",parameters:{layout:"fullscreen"}},n={render:()=>e`
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
  `,name:"Aligned full width",parameters:{layout:"fullscreen"}},a={render:()=>e`
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
  `,name:"Full height",parameters:{layout:"fullscreen"}};var y;const c={render:()=>e(y||(y=b([`
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
  `]))),name:"Column object",parameters:{layout:"fullscreen"}},u={render:()=>e`
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
  `,name:"Default col width",parameters:{layout:"fullscreen"}},h={render:()=>e`
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
  `,name:"Default col span",parameters:{layout:"fullscreen"}};var v;const g={render:()=>e(v||(v=b([`
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
  `]))),name:"Default col span object",parameters:{layout:"fullscreen"}},s={render:()=>e`
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
  `,name:"Default row span",parameters:{layout:"fullscreen"}},p={render:()=>e`
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
  `,name:"Grid item",parameters:{layout:"fullscreen"}},f={aligned:null,fullHeight:!1,columns:4,defaultColSpan:1,defaultColWidth:"64px",defaultRowSpan:1,gridSpacing:2,rows:1,type:"fixed",gridItemColSpan:1,gridItemColStart:1,gridItemRowSpan:1,gridItemRowStart:1,gridItemHideInMobileMode:!1},m={render:i=>e`<ic-layout-grid
      style="border: 1px solid black;"
      columns=${i.columns}
      aligned=${i.aligned}
      full-height=${i.fullHeight}
      default-col-span=${i.defaultColSpan}
      default-col-width=${i.defaultColWidth}
      default-row-span=${i.defaultRowSpan}
      grid-spacing=${i.gridSpacing}
      rows=${i.rows}
      type=${i.type}
    >
      <ic-layout-grid-item
        col-span=${i.gridItemColSpan}
        col-start=${i.gridItemColStart}
        row-span=${i.gridItemRowSpan}
        row-start=${i.gridItemRowStart}
        hide-in-mobile-mode=${i.gridItemHideInMobileMode}
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
    </ic-layout-grid>`,name:"Playground",args:f,argTypes:{aligned:{options:[null,"left","center","full-width"],control:{type:"inline-radio"}},type:{options:["fixed","fluid"],control:{type:"inline-radio"}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const S=["Default","Fluid","Columns","Rows","AlignedCenter","FullWidth","FullHeight","ColumnObject","DefaultColWidth","DefaultColSpan","DefaultColSpanObject","DefaultRowSpan","GridItem","Playground"],I=Object.freeze(Object.defineProperty({__proto__:null,AlignedCenter:o,ColumnObject:c,Columns:d,Default:t,DefaultColSpan:h,DefaultColSpanObject:g,DefaultColWidth:u,DefaultRowSpan:s,Fluid:l,FullHeight:a,FullWidth:n,GridItem:p,Playground:m,Rows:r,__namedExportsOrder:S,default:k},Symbol.toStringTag,{value:"Module"}));export{I};
