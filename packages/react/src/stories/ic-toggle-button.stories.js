/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react';
import { IcToggleButton, IcBadge } from "../components";
import { SlottedSVG } from "../react-component-lib/slottedSVG";

const defaultArgs = {
  label: "Custom Button",
  disabled: false,
  loading: false,
  appearance: "default",
  size: "default",
  variant: "default",
  fullWidth: false,
  toggleChecked: false,
};

const defaultWithIconArgs = {
  label: "Custom Button",
  disabled: false,
  loading: false,
  appearance: "default",
  size: "default",
  variant: "default",
  fullWidth: false,
  iconPlacement: "left",
  toggleChecked: false,
  accessibleLabel: "Custom Button Ally Label",
  hasIcon: true,
  hasBadge: false,
};

const defaultIconArgs = {
  label: "Custom Button",
  disabled: false,
  loading: false,
  appearance: "default",
  size: "default",
  variant: "icon",
  fullWidth: false,
  toggleChecked: false,
  accessibleLabel: "Custom Button Ally Label",
  tooltipPlacement: "bottom",
};

export default {
  title: "Toggle button",
  component: IcToggleButton,
};

export const Default = {
  render: () => (
    <IcToggleButton
      label="Toggle"
      onIcToggleChecked={(event) => console.log(event.detail.checked)}
    />
  ),

  name: "Default",
};

export const Checked = {
  render: () => <IcToggleButton label="Toggle" toggleChecked />,
  name: "Checked",
};

export const Disabled = {
  render: () => <IcToggleButton label="Toggle" disabled />,
  name: "Disabled",
};

export const WithIcon = {
  render: () => (
    <IcToggleButton label="Toggle">
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
  ),

  name: "With icon",
};

export const Sizes = {
  render: () => (
    <>
      <div style={{ padding: "6px" }}>
      <IcToggleButton label="Toggle" size="small" />
    </div>
    <div style={{ padding: "6px" }}>
      <IcToggleButton label="Toggle" size="default" />
    </div>
    <div style={{ padding: "6px" }}>
      <IcToggleButton label="Toggle" size="large" />
    </div>
    </>
  ),

  name: "Sizes",
};

export const WithBadge = {
  render: () => (
    <>
      <IcToggleButton label="Toggle">
      <IcBadge textLabel="1" slot="badge" variant="success" />
    </IcToggleButton>
    <IcToggleButton label="Toggle">
      <IcBadge slot="badge" variant="success" type="dot" />
    </IcToggleButton>
    </>
  ),

  name: "With badge",
};

export const AppearanceDark = {
  render: () => <IcToggleButton label="Toggle" appearance="dark" />,
  name: "Appearance dark",
};

export const AppearanceLight = {
  render: () => (
    <div
      style={{
        backgroundColor: "#2c2f34",
        padding: "6px",
        width: "fit-content",
      }}
    >
      <IcToggleButton label="Toggle" appearance="light" />
    </div>
  ),

  name: "Appearance light",
};

export const FullWidth = {
  render: () => <IcToggleButton label="Toggle" fullWidth />,
  name: "Full width",
};

export const Loading = {
  render: () => (
    <>
          <IcToggleButton label="Toggle" loading />
          <IcToggleButton label="Toggle" loading toggleChecked />
    </>
  ),
  name: "Loading",
};

export const IconOnly = {
  render: () => (
    <>
      <IcToggleButton variant="icon" accessibleLabel="Refresh the page">
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
    <IcToggleButton variant="icon" accessibleLabel="Refresh the page" disabled>
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
    </>
  ),

  name: "Icon only",
};

export const IconRight = {
  render: () => (
    <IcToggleButton label="Toggle" iconPlacement="right">
      <SlottedSVG
        xmlns="http://www.w3.org/2000/svg"
        slot="icon"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
      </SlottedSVG>
    </IcToggleButton>
  ),

  name: "Icon right",
};

export const IconTop = {
  render: () => (
    <IcToggleButton label="Toggle" iconPlacement="top">
      <SlottedSVG
        xmlns="http://www.w3.org/2000/svg"
        slot="icon"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
      </SlottedSVG>
    </IcToggleButton>
  ),

  name: "Icon top",
};

export const TooltipPlacement = {
  render: () => (
    <div
      style={{
        padding: "100px 10px",
      }}
    >
      <IcToggleButton
        variant="icon"
        tooltipPlacement="right"
        accessibleLabel="Refresh the page"
      >
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
      <IcToggleButton
        variant="icon"
        tooltipPlacement="top"
        accessibleLabel="Refresh the page"
      >
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
      <IcToggleButton
        variant="icon"
        tooltipPlacement="left"
        accessibleLabel="Refresh the page"
      >
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
    </div>
  ),

  name: "Tooltip placement",
};

export const Playground = {
  render: (args) => (
    <div
      style={{
        backgroundColor: args.appearance === "light" ? "#393939" : "#FFFFFF",
        width: args.fullWidth ? "95%" : "fit-content",
        padding: "1rem",
      }}
    >
      <IcToggleButton
        label={args.label}
        disabled={args.disabled}
        variant={args.variant}
        size={args.size}
        loading={args.loading}
        appearance={args.appearance}
        fullWidth={args.fullWidth}
        toggleChecked={args.toggleChecked}
      />
    </div>
  ),

  args: defaultArgs,

  argTypes: {
    size: {
      options: ["default", "large", "small"],

      control: {
        type: "inline-radio",
      },
    },

    appearance: {
      options: ["default", "dark", "light"],

      control: {
        type: "inline-radio",
      },
    },

    toggleChecked: {
      control: {
        type: "boolean",
      },
    },

    fullWidth: {
      control: {
        type: "boolean",
      },
    },
  },

  name: "Playground",
};

export const PlaygroundDefaultWithIcon = {
  render: (args) => (
    <div
      style={{
        backgroundColor: args.appearance === "light" ? "#393939" : "#FFFFFF",
        width: args.fullWidth ? "95%" : "fit-content",
        padding: "1rem",
      }}
    >
      <IcToggleButton
        label={args.label}
        disabled={args.disabled}
        variant={args.variant}
        size={args.size}
        loading={args.loading}
        appearance={args.appearance}
        fullWidth={args.fullWidth}
        toggleChecked={args.toggleChecked}
        iconPlacement={args.iconPlacement}
      >
        {args.hasIcon && (
          <SlottedSVG
            xmlns="http://www.w3.org/2000/svg"
            slot="icon"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </SlottedSVG>
        )}
        {args.hasBadge && (
          <IcBadge textLabel="9+" slot="badge" variant="info" />
        )}
      </IcToggleButton>
    </div>
  ),

  args: defaultWithIconArgs,

  argTypes: {
    size: {
      options: ["default", "large", "small"],

      control: {
        type: "inline-radio",
      },
    },

    appearance: {
      options: ["default", "dark", "light"],

      control: {
        type: "inline-radio",
      },
    },

    toggleChecked: {
      control: {
        type: "boolean",
      },
    },

    iconPlacement: {
      options: ["left", "right", "top"],

      control: {
        type: "inline-radio",
      },
    },

    fullWidth: {
      control: {
        type: "boolean",
      },
    },

    hasIcon: {
      control: {
        type: "boolean",
      },
    },

    hasBadge: {
      control: {
        type: "boolean",
      },
    },
  },

  name: "Playground - default with icon",
};

export const PlaygroundIconVariant = {
  render: (args) => (
    <div
      style={{
        backgroundColor: args.appearance === "light" ? "#393939" : "#FFFFFF",
        width: args.fullWidth ? "95%" : "fit-content",
        padding: "1rem",
      }}
    >
      <IcToggleButton
        label={args.label}
        disabled={args.disabled}
        variant={args.variant}
        size={args.size}
        loading={args.loading}
        appearance={args.appearance}
        fullWidth={args.fullWidth}
        toggleChecked={args.toggleChecked}
        accessibleLabel={args.accessibleLabel}
        tooltipPlacement={args.tooltipPlacement}
      >
        <SlottedSVG
          xmlns="http://www.w3.org/2000/svg"
          slot="icon"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
        </SlottedSVG>
      </IcToggleButton>
    </div>
  ),

  args: defaultIconArgs,

  argTypes: {
    size: {
      options: ["default", "large", "small"],

      control: {
        type: "inline-radio",
      },
    },

    appearance: {
      options: ["default", "dark", "light"],

      control: {
        type: "inline-radio",
      },
    },

    toggleChecked: {
      control: {
        type: "boolean",
      },
    },

    fullWidth: {
      control: {
        type: "boolean",
      },
    },

    tooltipPlacement: {
      options: ["bottom", "top", "left", "right"],

      control: {
        type: "radio",
      },
    },
  },

  name: "Playground - icon variant",
};
