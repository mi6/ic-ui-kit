/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { IcToggleButton, IcToggleButtonGroup, IcTypography } from "../components";
import { SlottedSVG } from "../react-component-lib/slottedSVG";

const defaultArgs = {
  accessibleLabel: "",
  disabled: false,
  fullWidth: false,
  iconPlacement: "left",
  loading: false,
  monochrome: false,
  selectMethod: "manual",
  selectType: "single",
  size: "medium",
  theme: "inherit",
  variant: "default",
  toggleAccessibleLabel: "",
  toggleDisabled: false,
  toggleFullWidth: false,
  toggleIconPlacement: "left",
  toggleLabel: "Custom Toggle",
  toggleLoading: false,
  toggleMonochrome: false,
  toggleSize: "medium",
  toggleTheme: "inherit",
  toggleChecked: false,
  toggleVariant: "default",
};

export default {
  title: "Toggle button group",
  component: IcToggleButtonGroup,
};

export const Default = {
  render: () => (
    <>
      <IcTypography>Single and manual</IcTypography>
      <IcToggleButtonGroup
        selectType="single"
        accessibleLabel="Single and manual select toggle group"
      >
        <IcToggleButton label="First toggle" />
        <IcToggleButton label="Second toggle" />
        <IcToggleButton label="Third toggle" />
      </IcToggleButtonGroup>
      <br />
      <IcTypography>Single and auto</IcTypography>
      <IcToggleButtonGroup
        selectType="single"
        selectMethod="auto"
        accessibleLabel="Single and auto select toggle group"
      >
        <IcToggleButton label="First toggle" />
        <IcToggleButton label="Second toggle" />
        <IcToggleButton label="Third toggle" />
      </IcToggleButtonGroup>
      <br />
      <IcTypography>Multi and manual</IcTypography>
      <IcToggleButtonGroup
        selectType="multi"
        accessibleLabel="Multi and manual select toggle group"
      >
        <IcToggleButton label="First toggle" />
        <IcToggleButton label="Second toggle" />
        <IcToggleButton label="Third toggle" />
      </IcToggleButtonGroup>
      <br />
    </>
  ),

  name: "Default",
};

export const Sizes = {
  render: () => (
    <>
      <IcTypography>Default</IcTypography>
      <IcToggleButtonGroup accessibleLabel="Single and manual select toggle group">
        <IcToggleButton label="First toggle" />
        <IcToggleButton label="Second toggle" />
        <IcToggleButton label="Third toggle" />
      </IcToggleButtonGroup>
      <br />
      <IcTypography>Small</IcTypography>
      <IcToggleButtonGroup
        size="small"
        accessibleLabel="Single and manual select toggle group"
      >
        <IcToggleButton label="First toggle" />
        <IcToggleButton label="Second toggle" />
        <IcToggleButton label="Third toggle" />
      </IcToggleButtonGroup>
      <br />
      <IcTypography>Large</IcTypography>
      <IcToggleButtonGroup
        size="large"
        accessibleLabel="Single and manual select toggle group"
      >
        <IcToggleButton label="First toggle" />
        <IcToggleButton label="Second toggle" />
        <IcToggleButton label="Third toggle" />
      </IcToggleButtonGroup>
      <br />
      <IcTypography>Full width</IcTypography>
      <IcToggleButtonGroup
        fullWidth
        accessibleLabel="Single and manual select toggle group"
      >
        <IcToggleButton label="First toggle" />
        <IcToggleButton label="Second toggle" />
        <IcToggleButton label="Third toggle" />
      </IcToggleButtonGroup>
      <br />
      <IcTypography>Custom width</IcTypography>
      <IcToggleButtonGroup
        style={{
          width: "50%",
        }}
        accessibleLabel="Single and manual select toggle group"
      >
        <IcToggleButton label="First toggle" />
        <IcToggleButton label="Second toggle" />
        <IcToggleButton label="Third toggle" />
      </IcToggleButtonGroup>
      <br />
      <IcTypography>Large label</IcTypography>
      <IcToggleButtonGroup
        style={{
          width: "50%",
        }}
        accessibleLabel="Single and manual select toggle group"
      >
        <IcToggleButton label="toggle" />
        <IcToggleButton label="a very very very long toggle button label" />
      </IcToggleButtonGroup>
      <br />
    </>
  ),

  name: "Sizes",
};

export const Monochrome = {
  render: () => (
    <IcToggleButtonGroup
      monochrome
      accessibleLabel="Single and manual select toggle group"
    >
      <IcToggleButton label="First toggle" />
      <IcToggleButton label="Second toggle" />
      <IcToggleButton label="Third toggle" />
    </IcToggleButtonGroup>
  ),

  name: "Monochrome",
};

export const Disabled = {
  render: () => (
    <>
      <IcTypography>Disabled</IcTypography>
      <IcToggleButtonGroup
        disabled
        accessibleLabel="Single and manual select toggle group"
      >
        <IcToggleButton label="First toggle" />
        <IcToggleButton label="Second toggle" />
        <IcToggleButton label="Third toggle" />
      </IcToggleButtonGroup>
    </>
  ),

  name: "Disabled",
};

export const Loading = {
  render: () => (
    <>
      <IcTypography>Loading</IcTypography>
      <IcToggleButtonGroup
        loading
        accessibleLabel="Single and manual select toggle group"
      >
        <IcToggleButton label="First toggle" />
        <IcToggleButton label="Second toggle" />
        <IcToggleButton label="Third toggle" />
      </IcToggleButtonGroup>
    </>
  ),

  name: "Loading",
};

export const WithIcons = {
  render: () => (
    <>
      <IcTypography>Icon only</IcTypography>
      <IcToggleButtonGroup
        variant="icon"
        accessibleLabel="Single and manual select toggle group"
      >
        <IcToggleButton accessibleLabel="First Refresh">
          <SlottedSVG
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </SlottedSVG>
        </IcToggleButton>
        <IcToggleButton accessibleLabel="Second Refresh">
          <SlottedSVG
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </SlottedSVG>
        </IcToggleButton>
      </IcToggleButtonGroup>
      <br />
      <span>Tooltip placement</span>
      <IcToggleButtonGroup
        variant="icon"
        accessibleLabel="Single and manual select toggle group"
        tooltipPlacement="right"
      >
        <IcToggleButton variant="icon" accessibleLabel="First Refresh">
          <SlottedSVG
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </SlottedSVG>
        </IcToggleButton>
        <IcToggleButton variant="icon" accessibleLabel="Second Refresh">
          <SlottedSVG
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </SlottedSVG>
        </IcToggleButton>
      </IcToggleButtonGroup>
      <br />
      <span>Icon right</span>
      <IcToggleButtonGroup
        iconPlacement="right"
        accessibleLabel="Single and manual select toggle group"
      >
        <IcToggleButton label="First toggle">
          <SlottedSVG
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </SlottedSVG>
        </IcToggleButton>
        <IcToggleButton label="Second toggle">
          <SlottedSVG
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </SlottedSVG>
        </IcToggleButton>
      </IcToggleButtonGroup>
      <br />
      <IcTypography>Icon left</IcTypography>
      <IcToggleButtonGroup
        iconPlacement="left"
        accessibleLabel="Single and manual select toggle group"
      >
        <IcToggleButton label="First toggle">
          <SlottedSVG
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </SlottedSVG>
        </IcToggleButton>
        <IcToggleButton label="Second toggle">
          <SlottedSVG
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </SlottedSVG>
        </IcToggleButton>
      </IcToggleButtonGroup>
      <br />
      <IcTypography>Icon top</IcTypography>
      <IcToggleButtonGroup
        iconPlacement="top"
        accessibleLabel="Single and manual select toggle group"
      >
        <IcToggleButton label="First toggle">
          <SlottedSVG
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </SlottedSVG>
        </IcToggleButton>
        <IcToggleButton label="Second toggle">
          <SlottedSVG
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </SlottedSVG>
        </IcToggleButton>
      </IcToggleButtonGroup>
    </>
  ),

  name: "With icons",
};

export const Playground = {
  render: (args) => (
    <IcToggleButtonGroup
      accessibleLabel={args.accessibleLabel}
      disabled={args.disabled}
      fullWidth={args.fullWidth}
      iconPlacement={args.iconPlacement}
      loading={args.loading}
      monochrome={args.monochrome}
      selectMethod={args.selectMethod}
      selectType={args.selectType}
      size={args.size}
      theme={args.theme}
      variant={args.variant}
    >
      <IcToggleButton
        accessibleLabel={args.toggleAccessibleLabel}
        disabled={args.toggleDisabled}
        fullWidth={args.toggleFullWidth}
        iconPlacement={args.toggleIconPlacement}
        label={args.toggleLabel}
        loading={args.toggleLoading}
        monochrome={args.toggleMonochrome}
        size={args.toggleSize}
        theme={args.toggleTheme}
        checked={args.toggleChecked}
        variant={args.toggleVariant}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
          slot="icon"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
        </svg>
      </IcToggleButton>
      <IcToggleButton label="Second toggle" />
      <IcToggleButton label="Third toggle" />
    </IcToggleButtonGroup>
  ),

  args: defaultArgs,

  argTypes: {
    accessibleLabel: {
      control: {
        type: "text",
      },
    },

    disabled: {
      control: {
        type: "boolean",
      },
    },

    fullWidth: {
      control: {
        type: "boolean",
      },
    },

    iconPlacement: {
      options: ["left", "right", "top"],

      control: {
        type: "radio",
      },
    },

    loading: {
      control: {
        type: "boolean",
      },
    },

    monochrome: {
      control: {
        type: "boolean",
      },
    },

    selectMethod: {
      options: ["manual", "auto"],

      control: {
        type: "inline-radio",
      },
    },

    selectType: {
      options: ["single", "multi"],

      control: {
        type: "inline-radio",
      },
    },

    size: {
      options: ["medium", "small", "large"],

      control: {
        type: "radio",
      },
    },

    theme: {
      options: ["inherit", "light", "dark"],

      control: {
        type: "inline-radio",
      },
    },

    variant: {
      options: ["default", "icon"],

      control: {
        type: "inline-radio",
      },
    },

    toggleAccessibleLabel: {
      control: {
        type: "text",
      },
    },

    toggleDisabled: {
      control: {
        type: "boolean",
      },
    },

    toggleFullWidth: {
      control: {
        type: "boolean",
      },
    },

    toggleIconPlacement: {
      options: ["left", "right", "top"],

      control: {
        type: "radio",
      },
    },

    toggleLabel: {
      control: {
        type: "text",
      },
    },

    toggleLoading: {
      control: {
        type: "boolean",
      },
    },

    toggleMonochrome: {
      control: {
        type: "boolean",
      },
    },

    toggleSize: {
      options: ["medium", "small", "large"],

      control: {
        type: "radio",
      },
    },

    toggleTheme: {
      options: ["inherit", "light", "dark"],

      control: {
        type: "inline-radio",
      },
    },

    toggleChecked: {
      control: {
        type: "boolean",
      },
    },

    toggleVariant: {
      options: ["default", "icon"],

      control: {
        type: "inline-radio",
      },
    },
  },

  name: "Playground",
};
