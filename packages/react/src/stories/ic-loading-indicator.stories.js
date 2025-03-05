/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { IcLoadingIndicator } from "../components";

const defaultArgs = {
  appearance: "dark",
  description: "Loading",
  fullWidth: false,
  labelDuration: 8000,
  size: "default",
  type: "circular",
  label: null,
};

const defaultArgTypes = {
  appearance: {
    options: ["dark", "light"],
    control: { type: "radio" },
  },
  label: {
    control: { type: "text" },
  },
  size: {
    options: ["small", "default", "large", "icon"],
    control: { type: "radio" },
  },
  type: {
    options: ["circular", "linear"],
    control: { type: "radio" },
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
        size="default"
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
        size="default"
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
      <IcLoadingIndicator label="Small" size="small" dark />
      <IcLoadingIndicator label="Default" dark />
      <IcLoadingIndicator label="Large" size="large" dark />
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
  render: () => <IcLoadingIndicator size="icon" dark />,
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
      <IcLoadingIndicator label="Default" type="linear" dark />
      <IcLoadingIndicator label="Large" size="large" type="linear" dark />
      <IcLoadingIndicator
        label="Full-width"
        type="linear"
        fullWidth={true}
        dark
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
      label="Loading.../Still loading..."
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
        backgroundColor: args.appearance === "light" ? "#393939" : "#FFFFFF",
        padding: "16px",
      }}
    >
      <IcLoadingIndicator
        appearance={args.appearance}
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
        backgroundColor: args.appearance === "light" ? "#393939" : "#FFFFFF",
        padding: "16px",
      }}
    >
      <IcLoadingIndicator
        appearance={args.appearance}
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
