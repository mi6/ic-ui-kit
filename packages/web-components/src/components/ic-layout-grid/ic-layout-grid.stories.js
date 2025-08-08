import { html } from "lit-html";

export default {
  title: "Web Components/Layout grid",
  component: "ic-layout-grid",
};

export const Default = {
  render: () => html`
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
  `,

  name: "Default",

  parameters: {
    layout: "fullscreen",
  },
};

export const Fluid = {
  render: () => html`
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
  `,

  name: "Fluid",

  parameters: {
    layout: "fullscreen",
  },
};

export const Columns = {
  render: () => html`
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
  `,

  name: "Columns",

  parameters: {
    layout: "fullscreen",
  },
};

export const Rows = {
  render: () => html`
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
  `,

  name: "Rows",

  parameters: {
    layout: "fullscreen",
  },
};

export const AlignedCenter = {
  render: () => html`
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
  `,

  name: "Aligned center",

  parameters: {
    layout: "fullscreen",
  },
};

export const FullWidth = {
  render: () => html`
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
  `,

  name: "Aligned full width",

  parameters: {
    layout: "fullscreen",
  },
};

export const FullHeight = {
  render: () => html`
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
  `,

  name: "Full height",

  parameters: {
    layout: "fullscreen",
  },
};

export const ColumnObject = {
  render: () => html`
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
    </script>
  `,

  name: "Column object",

  parameters: {
    layout: "fullscreen",
  },
};

export const DefaultColWidth = {
  render: () => html`
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
  `,

  name: "Default col width",

  parameters: {
    layout: "fullscreen",
  },
};

export const DefaultColSpan = {
  render: () => html`
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
  `,

  name: "Default col span",

  parameters: {
    layout: "fullscreen",
  },
};

export const DefaultColSpanObject = {
  render: () => html`
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
    </script>
  `,

  name: "Default col span object",

  parameters: {
    layout: "fullscreen",
  },
};

export const DefaultRowSpan = {
  render: () => html`
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
  `,

  name: "Default row span",

  parameters: {
    layout: "fullscreen",
  },
};

export const GridItem = {
  render: () => html`
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
  `,

  name: "Grid item",

  parameters: {
    layout: "fullscreen",
  },
};

const defaultArgs = {
  aligned: null,
  fullHeight: false,
  columns: 4,
  defaultColSpan: 1,
  defaultColWidth: "64px",
  defaultRowSpan: 1,
  gridSpacing: 2,
  rows: 1,
  type: "fixed",
  gridItemColSpan: 1,
  gridItemColStart: 1,
  gridItemRowSpan: 1,
  gridItemRowStart: 1,
  gridItemHideInMobileMode: false,
};

export const Playground = {
  render: (args) =>
    html`<ic-layout-grid
      style="border: 1px solid black;"
      columns=${args.columns}
      aligned=${args.aligned}
      full-height=${args.fullHeight}
      default-col-span=${args.defaultColSpan}
      default-col-width=${args.defaultColWidth}
      default-row-span=${args.defaultRowSpan}
      grid-spacing=${args.gridSpacing}
      rows=${args.rows}
      type=${args.type}
    >
      <ic-layout-grid-item
        col-span=${args.gridItemColSpan}
        col-start=${args.gridItemColStart}
        row-span=${args.gridItemRowSpan}
        row-start=${args.gridItemRowStart}
        hide-in-mobile-mode=${args.gridItemHideInMobileMode}
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
    </ic-layout-grid>`,

  name: "Playground",
  args: defaultArgs,

  argTypes: {
    aligned: {
      options: [null, "left", "center", "full-width"],

      control: {
        type: "inline-radio",
      },
    },

    type: {
      options: ["fixed", "fluid"],

      control: {
        type: "inline-radio",
      },
    },
  },
};
