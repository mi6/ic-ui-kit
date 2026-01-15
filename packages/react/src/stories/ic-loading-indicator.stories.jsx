/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { IcLoadingIndicator } from "../components";

const defaultArgs = {
  description: "Loading",
  fullWidth: false,
  labelDuration: 8000,
  size: "medium",
  type: "circular",
  label: [],
  theme: "inherit",
  monochrome: false,
};

const defaultArgTypes = {
  size: {
    options: ["small", "medium", "large", "icon"],
    control: { type: "radio" },
  },
  type: {
    options: ["circular", "linear"],
    control: { type: "radio" },
  },
  theme: {
    options: ["inherit", "light", "dark"],
    control: { type: "inline-radio" },
  },
  label: {
    control: { type: "array" },
  },
};

export default {
  title: "Loading",
  component: IcLoadingIndicator,
};

export const CircularIndeterminate = {
  render: () => <IcLoadingIndicator label="Loading..." />,
  name: "Circular (indeterminate)",
};

export const CircularDeterminate = {
  render: () => (
    <IcLoadingIndicator progress="30" min="0" max="100" label="Loading..." />
  ),
  name: "Circular (determinate)",
};

export const CircularLongLabel = {
  render: () => (
    <IcLoadingIndicator label="This is a label for a loading indicator that is indeterminate and should wrap onto more than one line when it gets too long" />
  ),

  name: "Circular long label",
};

export const CircularVariantsIndeterminate = {
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "50px",
      }}
    >
      <IcLoadingIndicator label="Small" size="small" />
      <IcLoadingIndicator label="Default" />
      <IcLoadingIndicator label="Large" size="large" />
    </div>
  ),

  name: "Circular variants (indeterminate)",
};

export const CircularVariantsDeterminate = {
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "50px",
      }}
    >
      <IcLoadingIndicator
        progress="30"
        min="0"
        max="100"
        label="Small"
        size="small"
      />
      <IcLoadingIndicator progress="30" min="0" max="100" label="Default" />
      <IcLoadingIndicator
        progress="30"
        min="0"
        max="100"
        label="Large"
        size="large"
      />
    </div>
  ),

  name: "Circular variants (determinate)",
};

export const IconCircular = {
  render: () => <IcLoadingIndicator size="icon" />,
  name: "Icon (circular)",
};

export const LinearIndeterminate = {
  render: () => <IcLoadingIndicator label="Loading..." type="linear" />,
  name: "Linear (indeterminate)",
};

export const LinearDeterminate = {
  render: () => (
    <IcLoadingIndicator
      progress="30"
      min="0"
      max="100"
      label="Loading..."
      type="linear"
    />
  ),
  name: "Linear (determinate)",
};

export const LinearLongLabel = {
  render: () => (
    <IcLoadingIndicator
      type="linear"
      label="This is a label for a loading indicator that is indeterminate and should wrap onto more than one line when it gets too long"
    />
  ),

  name: "Linear long label",
};

export const LinearVariantsIndeterminate = {
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "50px",
      }}
    >
      <IcLoadingIndicator label="Small" size="small" type="linear" />
      <IcLoadingIndicator label="Default" type="linear" />
      <IcLoadingIndicator label="Large" size="large" type="linear" />
      <IcLoadingIndicator
        label="Full-width"
        size="medium"
        type="linear"
        fullWidth={true}
      />
    </div>
  ),

  name: "Linear variants (indeterminate)",
};

export const LinearVariantsDeterminate = {
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "50px",
      }}
    >
      <IcLoadingIndicator
        progress="30"
        min="0"
        max="100"
        label="Small"
        size="small"
        type="linear"
      />
      <IcLoadingIndicator
        progress="30"
        min="0"
        max="100"
        label="Default"
        type="linear"
      />
      <IcLoadingIndicator
        progress="30"
        min="0"
        max="100"
        label="Large"
        size="large"
        type="linear"
      />
      <IcLoadingIndicator
        progress="30"
        min="0"
        max="100"
        label="Full-width"
        size="medium"
        type="linear"
        fullWidth={true}
      />
    </div>
  ),

  name: "Linear variants (determinate)",
};

export const CircularDark = {
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "50px",
      }}
    >
      <IcLoadingIndicator label="Small" size="small" theme="dark" />
      <IcLoadingIndicator label="Default" theme="dark" />
      <IcLoadingIndicator label="Large" size="large" theme="dark" />
    </div>
  ),

  name: "Circular dark",

  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const IconDarkCircular = {
  render: () => <IcLoadingIndicator size="icon" theme="dark" />,
  name: "Icon dark (circular)",

  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const LinearDark = {
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "50px",
      }}
    >
      <IcLoadingIndicator label="Default" type="linear" theme="dark" />
      <IcLoadingIndicator
        label="Large"
        size="large"
        type="linear"
        theme="dark"
      />
      <IcLoadingIndicator
        label="Full-width"
        type="linear"
        fullWidth={true}
        theme="dark"
      />
    </div>
  ),

  name: "Linear dark",

  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const Monochrome = {
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "50px",
      }}
    >
      <IcLoadingIndicator label="Light" monochrome />
      <div
        style={{
          backgroundColor: "black",
        }}
      >
        <IcLoadingIndicator label="Dark" theme="dark" monochrome />
      </div>
      <IcLoadingIndicator size="icon" monochrome />
      <div
        style={{
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <IcLoadingIndicator size="icon" theme="dark" monochrome />
      </div>
      <IcLoadingIndicator label="Light" type="linear" monochrome />
      <div
        style={{
          backgroundColor: "black",
          padding: "var(--ic-space-xs)",
        }}
      >
        <IcLoadingIndicator
          label="Dark"
          type="linear"
          theme="dark"
          monochrome
        />
      </div>
    </div>
  ),

  name: "Monochrome",
};

export const NoLabel = {
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "50px",
      }}
    >
      <IcLoadingIndicator description="Loading" />
      <IcLoadingIndicator description="Loading" type="linear" />
    </div>
  ),

  name: "No label",
};

export const ChangingLabel = {
  render: () => (
    <IcLoadingIndicator
      label={["Loading...", "Still loading..."]}
      labelDuration="4000"
    />
  ),
  name: "Changing label",
};

export const ProgressIndicatorForCompactStep = {
  render: () => (
    <IcLoadingIndicator
      size="small"
      inner-label="3"
      progress="30"
      min="0"
      max="100"
    />
  ),
  name: "Progress indicator for compact step",
};

export const PlaygroundIndeterminate = {
  render: (args) => (
    <div
      style={{
        backgroundColor: args.theme === "dark" ? "var(--ic-color-page-background-dark)" : "var(--ic-color-page-background-light)",
        padding: "16px",
      }}
    >
      <IcLoadingIndicator
        monochrome={args.monochrome}
        theme={args.theme}
        description={args.description}
        fullWidth={args.fullWidth}
        labelDuration={args.labelDuration}
        size={args.size}
        type={args.type}
        label={args.label}
      />
    </div>
  ),

  name: "Playground - indeterminate",
  args: defaultArgs,
  argTypes: defaultArgTypes,
};

export const PlaygroundDeterminate = {
  render: (args) => (
    <div
      style={{
        backgroundColor: args.theme === "dark" ? "var(--ic-color-page-background-dark)" : "var(--ic-color-page-background-light)",
        padding: "16px",
      }}
    >
      <IcLoadingIndicator
        monochrome={args.monochrome}
        theme={args.theme}
        description={args.description}
        fullWidth={args.fullWidth}
        labelDuration={args.labelDuration}
        size={args.size}
        type={args.type}
        label={args.label}
        progress={args.progress}
        min={args.min}
        max={args.max}
      />
    </div>
  ),

  name: "Playground - determinate",

  args: {
    ...defaultArgs,
    max: 100,
    min: 0,
    progress: 30,
  },

  argTypes: defaultArgTypes,
};
