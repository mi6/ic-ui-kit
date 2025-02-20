/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";

import { IcBadge, IcChip, IcTheme, IcTypography } from "../components";

const UserIcon = () => {
  return (
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
};

const AGGrid = () => {
  const JobTitleRenderer = (params) => <IcChip label={params.value} />;

  const rowData = [
    {
      firstName: "Joe",
      lastName: "Bloggs",
      jobTitle: "Developer",
      age: 30,
    },
    {
      firstName: "Sarah",
      lastName: "Smith",
      jobTitle: "Analyst",
      age: 28,
    },
    {
      firstName: "Mark",
      lastName: "Owens",
      jobTitle: "Team Lead",
      age: 45,
    },
    {
      firstName: "Naomi",
      lastName: "Thomas",
      jobTitle: "Senior Software Architect",
      age: 32,
    },
    {
      firstName: "Luke",
      lastName: "Ashford",
      jobTitle: "Junior Developer",
      age: 18,
    },
  ];

  const colDefs = [
    { field: "firstName" },
    { field: "lastName" },
    { field: "jobTitle", cellRenderer: JobTitleRenderer },
    { field: "age" },
  ];

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

const defaultArgs = {
  customColor: null,
  disabled: false,
  dismissible: false,
  dismissLabel: "Dismiss",
  label: "Chip label",
  size: "medium",
  theme: "inherit",
  transparentBackground: true,
  variant: "filled",
  badgeSlot: "badge",
};

export default {
  title: "Chip",
  component: IcChip,
};

export const Static = {
  render: () => (
    <div
      style={{
        display: "flex",
        "flex-direction": "column",
      }}
    >
      <div
        style={{
          "background-color": "white",
          padding: "8px",
        }}
      >
        <IcTheme theme="light">
          <IcTypography variant="body">Light</IcTypography>
          <IcChip label="Small" size="small">
            <UserIcon />
          </IcChip>
          <IcChip label="Medium">
            <UserIcon />
          </IcChip>
          <IcChip label="Large" size="large">
            <UserIcon />
          </IcChip>
        </IcTheme>
      </div>
      <div
        style={{
          "background-color": "black",
          padding: "8px",
        }}
      >
        <IcTheme theme="dark">
          <IcTypography variant="body">Dark</IcTypography>
          <IcChip label="Small" size="small">
            <UserIcon />
          </IcChip>
          <IcChip label="Medium">
            <UserIcon />
          </IcChip>
          <IcChip label="Large" size="large">
            <UserIcon />
          </IcChip>
        </IcTheme>
      </div>
    </div>
  ),

  name: "Static",
};

export const Outlined = {
  render: () => (
    <div
      style={{
        display: "flex",
        "flex-direction": "column",
      }}
    >
      <div
        style={{
          "background-color": "white",
          padding: "8px",
        }}
      >
        <IcTheme theme="light">
          <IcTypography variant="body">Light</IcTypography>
          <IcChip label="Small" size="small" variant="outlined">
            <UserIcon />
          </IcChip>
          <IcChip label="Medium" variant="outlined">
            <UserIcon />
          </IcChip>
          <IcChip label="Large" size="large" variant="outlined">
            <UserIcon />
          </IcChip>
        </IcTheme>
      </div>
      <div
        style={{
          "background-color": "black",
          padding: "8px",
        }}
      >
        <IcTheme theme="dark">
          <IcTypography variant="body">Dark</IcTypography>
          <IcChip label="Small" size="small" variant="outlined">
            <UserIcon />
          </IcChip>
          <IcChip label="Medium" variant="outlined">
            <UserIcon />
          </IcChip>
          <IcChip label="Large" size="large" variant="outlined">
            <UserIcon />
          </IcChip>
        </IcTheme>
      </div>
    </div>
  ),

  name: "Outlined",
};

export const Dismissible = {
  render: () => (
    <div
      style={{
        display: "flex",
        "flex-direction": "column",
      }}
    >
      <div
        style={{
          "background-color": "white",
          padding: "8px",
        }}
      >
        <IcTheme theme="light">
          <IcTypography variant="body">Light</IcTypography>
          <IcChip label="Small" size="small" dismissible>
            <UserIcon />
          </IcChip>
          <IcChip label="Medium" dismissible>
            <UserIcon />
          </IcChip>
          <IcChip label="Large" size="large" dismissible>
            <UserIcon />
          </IcChip>
          <IcChip label="Small" size="small" variant="outlined" dismissible>
            <UserIcon />
          </IcChip>
          <IcChip label="Medium" variant="outlined" dismissible>
            <UserIcon />
          </IcChip>
          <IcChip label="Large" size="large" variant="outlined" dismissible>
            <UserIcon />
          </IcChip>
        </IcTheme>
      </div>
      <div
        style={{
          "background-color": "black",
          padding: "8px",
        }}
      >
        <IcTheme theme="dark">
          <IcTypography variant="body">Dark</IcTypography>
          <IcChip label="Small" size="small" dismissible>
            <UserIcon />
          </IcChip>
          <IcChip label="Medium" dismissible>
            <UserIcon />
          </IcChip>
          <IcChip label="Large" size="large" dismissible>
            <UserIcon />
          </IcChip>
          <IcChip label="Small" size="small" variant="outlined" dismissible>
            <UserIcon />
          </IcChip>
          <IcChip label="Medium" variant="outlined" dismissible>
            <UserIcon />
          </IcChip>
          <IcChip label="Large" size="large" variant="outlined" dismissible>
            <UserIcon />
          </IcChip>
        </IcTheme>
      </div>
    </div>
  ),

  name: "Dismissible",
};

export const Disabled = {
  render: () => (
    <div
      style={{
        display: "flex",
        "flex-direction": "column",
      }}
    >
      <div
        style={{
          "background-color": "white",
          padding: "8px",
        }}
      >
        <IcTheme theme="light">
          <IcTypography variant="body">Light</IcTypography>
          <IcChip label="Small" size="small" dismissible disabled>
            <UserIcon />
          </IcChip>
          <IcChip label="Medium" dismissible disabled>
            <UserIcon />
          </IcChip>
          <IcChip label="Large" size="large" dismissible disabled>
            <UserIcon />
          </IcChip>
          <IcChip
            label="Small"
            size="small"
            variant="outlined"
            dismissible
            disabled
          >
            <UserIcon />
          </IcChip>
          <IcChip label="Medium" variant="outlined" dismissible disabled>
            <UserIcon />
          </IcChip>
          <IcChip
            label="Large"
            size="large"
            variant="outlined"
            dismissible
            disabled
          >
            <UserIcon />
          </IcChip>
        </IcTheme>
      </div>
      <div
        style={{
          "background-color": "black",
          padding: "8px",
        }}
      >
        <IcTheme theme="dark">
          <IcTypography variant="body">Dark</IcTypography>
          <IcChip label="Small" size="small" dismissible disabled>
            <UserIcon />
          </IcChip>
          <IcChip label="Medium" dismissible disabled>
            <UserIcon />
          </IcChip>
          <IcChip label="Large" size="large" dismissible disabled>
            <UserIcon />
          </IcChip>
          <IcChip
            label="Small"
            size="small"
            variant="outlined"
            dismissible
            disabled
          >
            <UserIcon />
          </IcChip>
          <IcChip label="Medium" variant="outlined" dismissible disabled>
            <UserIcon />
          </IcChip>
          <IcChip
            label="Large"
            size="large"
            variant="outlined"
            dismissible
            disabled
          >
            <UserIcon />
          </IcChip>
        </IcTheme>
      </div>
    </div>
  ),

  name: "Disabled",
};

export const WithoutIcons = {
  render: () => (
    <>
      <IcChip label="Label" />
      <IcChip label="Label" variant="outlined" />
      <IcChip label="Label" dismissible />
      <IcChip label="Label" variant="outlined" dismissible />
    </>
  ),
  name: "Without icons",
};

export const CustomColour = {
  render: () => (
    <>
      <IcChip label="Label" customColor="#F8C8DC">
      <UserIcon />
    </IcChip>
    <IcChip label="Label" variant="outlined" customColor="#F8C8DC">
      <UserIcon />
    </IcChip>
    <IcChip
      label="Label"
      variant="outlined"
      transparentBackground={false}
      customColor="#F8C8DC"
    >
      <UserIcon />
    </IcChip>
    </>
  ),

  name: "Custom colour",
};

export const InAnAgGrid = {
  render: () => <AGGrid />,
  name: "In an AG Grid",
};

export const Playground = {
  render: (args) => (
    <IcChip
      label={args.label}
      customColor={args.customColor}
      dismissible={args.dismissible}
      dismissLabel={args.dismissLabel}
      disabled={args.disabled}
      size={args.size}
      theme={args.theme}
      variant={args.variant}
      transparentBackground={args.transparentBackground}
    >
      <UserIcon />
      <IcBadge
        label="1"
        slot={args.badgeSlot}
        variant="success"
        position="near"
      />
    </IcChip>
  ),

  args: defaultArgs,

  argTypes: {
    customColor: {
      control: {
        type: "text",
      },
    },

    size: {
      options: ["small", "medium", "large"],

      control: {
        type: "inline-radio",
      },
    },

    theme: {
      options: ["inherit", "light", "dark"],

      control: {
        type: "inline-radio",
      },
    },

    variant: {
      options: ["filled", "outlined"],

      control: {
        type: "inline-radio",
      },
    },

    badgeSlot: {
      options: ["badge", ""],

      control: {
        type: "select",
      },
    },
  },

  name: "Playground",
};
