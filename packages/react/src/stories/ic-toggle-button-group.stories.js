/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { IcToggleButton, IcToggleButtonGroup } from "../components";
import { SlottedSVG } from "../react-component-lib/slottedSVG";

const defaultArgs = {
  accessibleLabel: "",
  appearance: "default",
  disabled: false,
  fullWidth: false,
  iconPlacement: "left",
  loading: false,
  selectMethod: "manual",
  selectType: "single",
  size: "default",
  variant: "default",
  toggleAccessibleLabel: "",
  toggleAppearance: "default",
  toggleDisabled: false,
  toggleFullWidth: false,
  toggleIconPlacement: "left",
  label: "Toggle",
  toggleLoading: false,
  toggleSize: "default",
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
      <span>Single and manual</span>
      <IcToggleButtonGroup
        selectType="single"
        accessibleLabel="Single and manual select toggle group"
      >
        <IcToggleButton label="First toggle" />
        <IcToggleButton label="Second toggle" />
        <IcToggleButton label="Third toggle" />
      </IcToggleButtonGroup>
      <br />
      <span>Single and auto</span>
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
      <span>Multi and manual</span>
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
      <span>Default</span>
      <IcToggleButtonGroup accessibleLabel="Single and manual select toggle group">
        <IcToggleButton label="First toggle" />
        <IcToggleButton label="Second toggle" />
        <IcToggleButton label="Third toggle" />
      </IcToggleButtonGroup>
      <br />
      <span>Small</span>
      <IcToggleButtonGroup
        size="small"
        accessibleLabel="Single and manual select toggle group"
      >
        <IcToggleButton label="First toggle" />
        <IcToggleButton label="Second toggle" />
        <IcToggleButton label="Third toggle" />
      </IcToggleButtonGroup>
      <br />
      <span>Large</span>
      <IcToggleButtonGroup
        size="large"
        accessibleLabel="Single and manual select toggle group"
      >
        <IcToggleButton label="First toggle" />
        <IcToggleButton label="Second toggle" />
        <IcToggleButton label="Third toggle" />
      </IcToggleButtonGroup>
      <br />
      <span>Full width</span>
      <IcToggleButtonGroup
        fullWidth
        accessibleLabel="Single and manual select toggle group"
      >
        <IcToggleButton label="First toggle" />
        <IcToggleButton label="Second toggle" />
        <IcToggleButton label="Third toggle" />
      </IcToggleButtonGroup>
      <br />
      <span>Custom width</span>
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
      <span>Large label</span>
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

export const Appearance = {
  render: () => (
    <>
      <span>Light</span>
      <div
        style={{
          backgroundColor: "#2c2f34",
          padding: "6px 10px",
          width: "fit-content",
        }}
      >
        <IcToggleButtonGroup
          appearance="light"
          accessibleLabel="Single and manual select toggle group"
        >
          <IcToggleButton label="First toggle" appearance="light" />
          <IcToggleButton label="Second toggle" appearance="light" />
          <IcToggleButton label="Third toggle" appearance="light" />
        </IcToggleButtonGroup>
      </div>
      <br />
      <span>Dark</span>
      <IcToggleButtonGroup
        appearance="dark"
        accessibleLabel="Single and manual select toggle group"
      >
        <IcToggleButton label="First toggle" appearance="dark" />
        <IcToggleButton label="Second toggle" appearance="dark" />
        <IcToggleButton label="Third toggle" appearance="dark" />
      </IcToggleButtonGroup>
      <br />
    </>
  ),

  name: "Appearance",
};

export const Disabled = {
  render: () => (
    <>
      <span>Disabled</span>
      <IcToggleButtonGroup
        disabled
        accessibleLabel="Single and manual select toggle group"
      >
        <IcToggleButton label="First toggle" disabled />
        <IcToggleButton label="Second toggle" disabled />
        <IcToggleButton label="Third toggle" disabled />
      </IcToggleButtonGroup>
    </>
  ),

  name: "Disabled",
};

export const Loading = {
  render: () => (
    <>
      <span>Loading</span>
      <IcToggleButtonGroup
        loading
        accessibleLabel="Single and manual select toggle group"
      >
        <IcToggleButton label="First toggle" loading />
        <IcToggleButton label="Second toggle" loading />
        <IcToggleButton label="Third toggle" loading />
      </IcToggleButtonGroup>
    </>
  ),

  name: "Loading",
};

export const WithIcons = {
  render: () => (
    <>
      <span>Icon only</span>
      <IcToggleButtonGroup
        variant="icon"
        accessibleLabel="Single and manual select toggle group"
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
      <span>Icon left</span>
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
      <span>Icon top</span>
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
      appearance={args.appearance}
      disabled={args.disabled}
      fullWidth={args.fullWidth}
      iconPlacement={args.iconPlacement}
      loading={args.loading}
      selectMethod={args.selectMethod}
      selectType={args.selectType}
      size={args.size}
      variant={args.variant}
    >
      <IcToggleButton
        accessibleLabel={args.toggleAccessibleLabel}
        appearance={args.toggleAppearance}
        disabled={args.toggleDisabled}
        fullWidth={args.toggleFullWidth}
        iconPlacement={args.toggleIconPlacement}
        loading={args.toggleLoading}
        size={args.toggleSize}
        toggleChecked={args.toggleChecked}
        variant={args.toggleVariant}
        label={args.label}
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
    appearance: {
      options: ["default", "dark", "light"],

      control: {
        type: "radio",
      },
    },

    iconPlacement: {
      options: ["left", "right", "top"],

      control: {
        type: "radio",
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
      options: ["default", "small", "large"],

      control: {
        type: "radio",
      },
    },

    variant: {
      options: ["default", "icon"],

      control: {
        type: "inline-radio",
      },
    },

    toggleAppearance: {
      options: ["default", "dark", "light"],

      control: {
        type: "radio",
      },
    },

    toggleIconPlacement: {
      options: ["left", "right", "top"],

      control: {
        type: "radio",
      },
    },

    toggleSize: {
      options: ["default", "small", "large"],

      control: {
        type: "radio",
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
