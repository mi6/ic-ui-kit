import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "@ukic/web-components/dist/core/ag-theme-icds.css";
import { IcTheme } from "../../components";

const rowData = [
  { make: "Tesla", model: "Model Y", price: 64950, electric: true },
  { make: "Ford", model: "F-Series", price: 33850, electric: false },
  { make: "Toyota", model: "Corolla", price: 29600, electric: false },
];

const colDefs = [
  {
    headerName: "Car details",
    children: [
      { columnGroupShow: "closed", field: "price" },
      {
        columnGroupShow: "open",
        field: "make",
        filter: true,
        filterParams: {
          filterOptions: ["contains", "startsWith"],
        },
      },
      {
        columnGroupShow: "open",
        field: "model",
        editable: true,
        cellEditor: "agLargeTextCellEditor",
        cellEditorPopup: true,
      },
    ],
  },
  {
    headerName: "Car specs",
    headerTooltip: "Specs of the car",
    children: [{ field: "electric", pinned: "left" }],
  },
];

export const AGGridLight = () => {
  return (
    <>
      <div className="ag-theme-icds" style={{ height: 500 }}>
        <AgGridReact rowData={rowData} columnDefs={colDefs} pagination />
      </div>
    </>
  );
};

export const AGGridDark = () => {
  return (
    <IcTheme theme="dark">
      <div className="ag-theme-icds" style={{ height: 500 }}>
        <AgGridReact rowData={rowData} columnDefs={colDefs} pagination />
      </div>
    </IcTheme>
  );
};
