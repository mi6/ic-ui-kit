import React from "react";
import { IcLayoutGrid, IcLayoutGridItem } from "../../components";

export const DefaultLayoutGrid = (props: any) => {
  return (
    <IcLayoutGrid {...props} style={{ border: "1px solid black" }}>
      <div
        style={{ width: "50px", height: "50px", backgroundColor: "lightblue" }}
      >
        Grid item 1
      </div>
      <div
        style={{ width: "50px", height: "50px", backgroundColor: "lightblue" }}
      >
        Grid item 2
      </div>
      <div
        style={{ width: "50px", height: "50px", backgroundColor: "lightblue" }}
      >
        Grid item 3
      </div>
      <div
        style={{ width: "50px", height: "50px", backgroundColor: "lightblue" }}
      >
        Grid item 4
      </div>
    </IcLayoutGrid>
  );
};

export const LayoutGridWithLayoutGridItem = () => {
  return (
    <IcLayoutGrid style={{ border: "1px solid black" }} columns={4}>
      <IcLayoutGridItem colStart={2} colSpan={2} rowSpan={2}>
        <div
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "lightblue",
          }}
        >
          Grid item 1
        </div>
      </IcLayoutGridItem>
      <IcLayoutGridItem hideInMobileMode>
        <div
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "lightblue",
          }}
        >
          Grid item 2
        </div>
      </IcLayoutGridItem>
      <div
        style={{ width: "50px", height: "50px", backgroundColor: "lightblue" }}
      >
        Grid item 3
      </div>
      <div
        style={{ width: "50px", height: "50px", backgroundColor: "lightblue" }}
      >
        Grid item 4
      </div>
      <div
        style={{ width: "50px", height: "50px", backgroundColor: "lightblue" }}
      >
        Grid item 5
      </div>
    </IcLayoutGrid>
  );
};
