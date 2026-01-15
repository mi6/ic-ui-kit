/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react';
import { IcLayoutGrid, IcLayoutGridItem } from "../components";

export default {
  title: "Layout Grid",
  component: IcLayoutGrid,
};

export const Default = {
  render: () => 
    <IcLayoutGrid>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 1
      </div>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 2
      </div>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 3
      </div>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 4
      </div>
    </IcLayoutGrid>
  ,

  name: "Default",

  parameters: {
    layout: "fullscreen",
  },
};

export const Fluid = {
  render: () => 
    <IcLayoutGrid type="fluid">
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 1
      </div>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 2
      </div>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 3
      </div>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 4
      </div>
    </IcLayoutGrid>
  ,

  name: "Fluid",

  parameters: {
    layout: "fullscreen",
  },
};

export const Columns = {
  render: () => 
    <IcLayoutGrid columns={4}>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 1
      </div>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 2
      </div>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 3
      </div>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 4
      </div>
    </IcLayoutGrid>
  ,

  name: "Columns",

  parameters: {
    layout: "fullscreen",
  },
};

export const Rows = {
  render: () => 
    <IcLayoutGrid columns={3} rows={2}>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 1
      </div>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 2
      </div>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 3
      </div>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 4
      </div>
    </IcLayoutGrid>
  ,

  name: "Rows",

  parameters: {
    layout: "fullscreen",
  },
};

export const AlignedCenter = {
  render: () => 
    <IcLayoutGrid columns={4} aligned="center">
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 1
      </div>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 2
      </div>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 3
      </div>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 4
      </div>
    </IcLayoutGrid>
  ,

  name: "Aligned center",

  parameters: {
    layout: "fullscreen",
  },
};

export const FullWidth = {
  render: () => 
    <IcLayoutGrid columns={4} aligned="full-width">
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 1
      </div>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 2
      </div>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 3
      </div>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 4
      </div>
    </IcLayoutGrid>
  ,

  name: "Aligned full width",

  parameters: {
    layout: "fullscreen",
  },
};

export const FullHeight = {
  render: () => 
    <IcLayoutGrid fullHeight="true" columns={4}>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 1
      </div>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 2
      </div>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 3
      </div>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 4
      </div>
    </IcLayoutGrid>
  ,

  name: "Full height",

  parameters: {
    layout: "fullscreen",
  },
};

export const ColumnObject = {
  render: () => 
    <IcLayoutGrid columns={{ xs: 1, sm: 2, md: 4, lg: 8, xl: 12 }}>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 1
      </div>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 2
      </div>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 3
      </div>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 4
      </div>
    </IcLayoutGrid>
  ,

  name: "Column object",

  parameters: {
    layout: "fullscreen",
  },
};

export const DefaultColWidth = {
  render: () => 
    <IcLayoutGrid columns={4} defaultColWidth="150px">
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 1
      </div>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 2
      </div>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 3
      </div>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 4
      </div>
    </IcLayoutGrid>
  ,

  name: "Default col width",

  parameters: {
    layout: "fullscreen",
  },
};

export const DefaultColSpan = {
  render: () => 
    <IcLayoutGrid defaultColSpan={2}>
      <div style={{width: "100px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 1
      </div>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 2
      </div>
      <div style={{width: "80px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 3
      </div>
      <div style={{width: "80px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 4
      </div>
    </IcLayoutGrid>
  ,

  name: "Default col span",

  parameters: {
    layout: "fullscreen",
  },
};

export const DefaultColSpanObject = {
  render: () => 
    <IcLayoutGrid defaultColSpan={{ xs: 1, sm: 2, md: 2, lg: 4, xl: 4 }}>
      <div style={{width: "100px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 1
      </div>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 2
      </div>
      <div style={{width: "80px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 3
      </div>
      <div style={{width: "80px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 4
      </div>
    </IcLayoutGrid>
  ,

  name: "Default col span object",

  parameters: {
    layout: "fullscreen",
  },
};

export const DefaultRowSpan = {
  render: () => 
    <IcLayoutGrid defaultRowSpan={2} rows="2">
      <div style={{width: "50px", height: "100px", backgroundColor: "lightblue"}}>
        Grid item 1
      </div>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 2
      </div>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 3
      </div>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 4
      </div>
    </IcLayoutGrid>
  ,

  name: "Default row span",

  parameters: {
    layout: "fullscreen",
  },
};

export const GridItem = {
  render: () => 
    <IcLayoutGrid style={{ border: "1px solid black" }} columns={4}>
      <IcLayoutGridItem colStart={2} colSpan={2} rowSpan={2}>
        <div style={{width: "50px", height: "100px", backgroundColor: "lightblue"}}>
          Grid item 1
        </div>
      </IcLayoutGridItem>
      <IcLayoutGridItem hideInMobileMode>
        <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
          Grid item 2
        </div>
      </IcLayoutGridItem>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 3
      </div>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 4
      </div>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 5
      </div>
    </IcLayoutGrid>,

  name: "Grid item",

  parameters: {
    layout: "fullscreen",
  },
}

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
}

export const Playground = {
  render: (args) => (
    <IcLayoutGrid 
      style={{ border: "1px solid black" }}
      columns={args.columns}
      aligned={args.aligned}
      fullHeight={args.fullHeight}
      defaultColSpan={args.defaultColSpan}
      defaultColWidth={args.defaultColWidth}
      defaultRowSpan={args.defaultRowSpan}
      gridSpacing={args.gridSpacing}
      rows={args.rows}
      type={args.type}
    >
      <IcLayoutGridItem
        colSpan={args.gridItemColSpan}
        colStart={args.gridItemColStart}
        rowSpan={args.gridItemRowSpan}
        rowStart={args.gridItemRowStart}
        hideInMobileMode={args.gridItemHideInMobileMode}
      >
        <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
          Grid item 1
        </div>
      </IcLayoutGridItem>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 2
      </div>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 3
      </div>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 4
      </div>
      <div style={{width: "50px", height: "50px", backgroundColor: "lightblue"}}>
        Grid item 5
      </div>
    </IcLayoutGrid>
  ),

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