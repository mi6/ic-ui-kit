import { IcBadge, IcButton, IcChip, IcTheme } from "../../";
import React, { ReactElement, useRef } from "react";
import { AgGridReact, CustomCellRendererProps } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const ReusableSlottedIcon = (): ReactElement => (
  <svg
    slot="icon"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="account"
  >
    <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z" />
  </svg>
);

const DefaultChip = (props, children) => {
  return (
    <IcChip label="Medium" {...props}>
      {...children}
    </IcChip>
  );
};

export const SwitchColour = () => {
  const chipEl = useRef<any>();
  return (
    <div style={{ padding: "8px", gap: "8px" }}>
      <IcChip label="Default" customColor="#F8C8DC" ref={chipEl} />
      <IcButton onClick={() => (chipEl.current.customColor = "#00008B")}>
        Switch colour
      </IcButton>
    </div>
  );
};

const ColouredChips = () => {
  return (
    <>
      <DefaultChip customColor="#F8C8DC">
        <ReusableSlottedIcon />
      </DefaultChip>
      <DefaultChip variant="outlined" customColor="#F8C8DC">
        <ReusableSlottedIcon />
      </DefaultChip>
      <DefaultChip customColor="#00008B">
        <ReusableSlottedIcon />
      </DefaultChip>
    </>
  );
};

export const CustomColour = () => {
  return (
    <div>
      <div style={{ padding: "8px", gap: "8px" }}>
        <IcTheme theme="light">
          <ColouredChips />
        </IcTheme>
      </div>
      <div style={{ padding: "8px", gap: "8px", backgroundColor: "black" }}>
        <IcTheme theme="dark">
          <ColouredChips />
        </IcTheme>
      </div>
    </div>
  );
};

export const Transparency = () => {
  return (
    <div
      style={{
        display: "inline-flex",
        padding: "8px",
        gap: "8px",
        backgroundColor: "#ff00ff",
      }}
    >
      <DefaultChip variant="outlined" theme="light" />
      <DefaultChip
        variant="outlined"
        theme="light"
        transparentBackground={false}
      />
      <DefaultChip variant="outlined" theme="dark" />
      <DefaultChip
        variant="outlined"
        theme="dark"
        transparentBackground={false}
      />
    </div>
  );
};

export const LongLabel = () => {
  return (
    <div style={{ padding: "8px", gap: "8px", maxWidth: "150px" }}>
      <IcChip
        id="small-chip"
        label="Really long name for a chip that should wrap"
        dismissible
        size="small"
      >
        <ReusableSlottedIcon />
      </IcChip>
      <IcChip
        id="default-chip"
        label="Really long name for a chip that should wrap"
        dismissible
      >
        <ReusableSlottedIcon />
      </IcChip>
      <IcChip
        id="large-chip"
        label="Really long name for a chip that should wrap"
        dismissible
        size="large"
      >
        <ReusableSlottedIcon />
      </IcChip>
    </div>
  );
};

const Sizes = (props) => {
  return (
    <>
      <IcChip label="Small" size="small" {...props} />
      <DefaultChip {...props} />
      <IcChip label="Large" size="large" {...props} />
    </>
  );
};

const SizesWithIcons = (props) => {
  return (
    <>
      <IcChip label="Small" size="small" {...props}>
        <ReusableSlottedIcon />
      </IcChip>
      <DefaultChip {...props}>
        <ReusableSlottedIcon />
      </DefaultChip>
      <IcChip label="Large" size="large" {...props}>
        <ReusableSlottedIcon />
      </IcChip>
    </>
  );
};

export const AllSizes = () => {
  return (
    <div>
      <div style={{ padding: "8px" }}>
        <IcTheme theme="light">
          <Sizes />
          <Sizes variant="outlined" />
        </IcTheme>
      </div>
      <div style={{ padding: "8px", backgroundColor: "black" }}>
        <IcTheme theme="dark">
          <Sizes />
          <Sizes variant="outlined" />
        </IcTheme>
      </div>
    </div>
  );
};

const DisabledChips = () => {
  return (
    <>
      <DefaultChip disabled />
      <DefaultChip variant="outlined" disabled />
      <DefaultChip dismissible disabled>
        <ReusableSlottedIcon />
      </DefaultChip>
      <DefaultChip dismissible variant="outlined" disabled>
        <ReusableSlottedIcon />
      </DefaultChip>
    </>
  );
};

export const Disabled = () => {
  return (
    <div>
      <div style={{ padding: "8px" }}>
        <IcTheme theme="light">
          <DisabledChips />
        </IcTheme>
      </div>
      <div style={{ padding: "8px", backgroundColor: "black" }}>
        <IcTheme theme="dark">
          <DisabledChips />
        </IcTheme>
      </div>
    </div>
  );
};

export const SingleDismissible = () => {
  return (
    <div style={{ padding: "8px" }}>
      <DefaultChip dismissible />
    </div>
  );
};

const DismissibleChips = () => {
  return (
    <>
      <Sizes dismissible />
      <Sizes dismissible variant="outlined" />
    </>
  );
};

export const Dismissible = () => {
  return (
    <div>
      <div style={{ padding: "8px" }}>
        <IcTheme theme="light">
          <DismissibleChips />
        </IcTheme>
      </div>
      <div style={{ padding: "8px", backgroundColor: "black" }}>
        <IcTheme theme="dark">
          <DismissibleChips />
        </IcTheme>
      </div>
    </div>
  );
};

export const WithIcon = () => {
  return (
    <div>
      <div style={{ padding: "8px" }}>
        <IcTheme theme="light">
          <SizesWithIcons />
          <SizesWithIcons variant="outlined" />
        </IcTheme>
      </div>
      <div style={{ padding: "8px", backgroundColor: "black" }}>
        <IcTheme theme="dark">
          <SizesWithIcons />
          <SizesWithIcons variant="outlined" />
        </IcTheme>
      </div>
    </div>
  );
};

export const DismissibleWithIcon = () => {
  return (
    <div>
      <div style={{ padding: "8px" }}>
        <IcTheme theme="light">
          <SizesWithIcons dismissible />
          <SizesWithIcons dismissible variant="outlined" />
        </IcTheme>
      </div>
      <div style={{ padding: "8px", backgroundColor: "black" }}>
        <IcTheme theme="dark">
          <SizesWithIcons dismissible />
          <SizesWithIcons dismissible variant="outlined" />
        </IcTheme>
      </div>
    </div>
  );
};

export const WithBadgeSlot = () => {
  return (
    <div>
      <div style={{ padding: "8px" }}>
        <IcTheme theme="light">
          <DefaultChip>
            <IcBadge label="1" slot="badge" variant="success" position="near" />
          </DefaultChip>
          <DefaultChip variant="outlined">
            <IcBadge label="1" slot="badge" variant="success" position="near" />
          </DefaultChip>
        </IcTheme>
      </div>
      <div style={{ padding: "8px", backgroundColor: "black" }}>
        <IcTheme theme="dark">
          <DefaultChip>
            <IcBadge label="1" slot="badge" variant="success" position="near" />
          </DefaultChip>
          <DefaultChip variant="outlined">
            <IcBadge label="1" slot="badge" variant="success" position="near" />
          </DefaultChip>
        </IcTheme>
      </div>
    </div>
  );
};

export const TransparentBackground = () => {
  return (
    <div
      style={{
        padding: "6px 10px",
        width: "fit-content",
      }}
    >
      <IcChip label="White background" variant="outlined" transparentBackground>
        <ReusableSlottedIcon />
      </IcChip>
      <IcChip
        label="White background"
        dismissible
        variant="outlined"
        transparentBackground
      >
        <ReusableSlottedIcon />
      </IcChip>
    </div>
  );
};

export const InAGGrid = () => {
  const JobTitleRenderer = (params: CustomCellRendererProps) => (
    <IcChip label={params.value} />
  );

  interface RowData {
    jobTitle: string;
  }

  const rowData = [
    {
      jobTitle: "Developer",
    },
    {
      jobTitle: "Analyst",
    },
    {
      jobTitle: "Senior Software Architect",
    },
  ];

  const colDefs = [
    { field: "jobTitle", cellRenderer: JobTitleRenderer },
  ] as ColDef<RowData>[];

  return (
    <>
      <div className="ag-theme-quartz">
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          domLayout="autoHeight"
        />
      </div>
    </>
  );
};
