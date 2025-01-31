import { html } from "lit-html";

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
  title: "Web Components/Loading",
  component: "ic-loading-indicator",
};

export const CircularIndeterminate = {
  render: (args) =>
    html`<ic-loading-indicator label="Loading..."></ic-loading-indicator>`,
  name: "Circular (indeterminate)",
};

export const CircularDeterminate = {
  render: (args) =>
    html`<ic-loading-indicator
      progress="30"
      min="0"
      max="100"
      label="Loading..."
    ></ic-loading-indicator>`,

  name: "Circular (determinate)",
};

export const CircularLongLabel = {
  render: (args) =>
    html`<ic-loading-indicator
      label="This is a label for a loading indicator that is indeterminate and should wrap onto more than one line when it gets too long"
    ></ic-loading-indicator>`,

  name: "Circular long label",
};

export const CircularVariantsIndeterminate = {
  render: (args) =>
    html`<div style="display: grid; gap: 50px;">
      <ic-loading-indicator label="Small" size="small"></ic-loading-indicator>
      <ic-loading-indicator label="Default"></ic-loading-indicator>
      <ic-loading-indicator label="Large" size="large"></ic-loading-indicator>
    </div>`,

  name: "Circular variants (indeterminate)",
};

export const CircularVariantsDeterminate = {
  render: (args) =>
    html`<div style="display: grid; gap: 50px;">
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Small"
        size="small"
      ></ic-loading-indicator>
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Default"
      ></ic-loading-indicator>
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Large"
        size="large"
      ></ic-loading-indicator>
    </div>`,

  name: "Circular variants (determinate)",
};

export const Icon = {
  render: (args) =>
    html`<ic-loading-indicator size="icon"></ic-loading-indicator>`,
  name: "Icon",
};

export const LinearIndeterminate = {
  render: (args) =>
    html`<ic-loading-indicator
      label="Loading..."
      type="linear"
    ></ic-loading-indicator>`,

  name: "Linear (indeterminate)",
};

export const LinearDeterminate = {
  render: (args) =>
    html`<ic-loading-indicator
      progress="30"
      min="0"
      max="100"
      label="Progress"
      type="linear"
    ></ic-loading-indicator>`,

  name: "Linear (determinate)",
};

export const LinearLongLabel = {
  render: (args) =>
    html`<ic-loading-indicator
      type="linear"
      label="This is a label for a loading indicator that is indeterminate and should wrap onto more than one line when it gets too long"
    ></ic-loading-indicator>`,

  name: "Linear long label",
};

export const LinearVariantsIndeterminate = {
  render: (args) =>
    html`<div style="display: grid; gap: 50px;">
      <ic-loading-indicator
        label="Small"
        size="small"
        type="linear"
      ></ic-loading-indicator>
      <ic-loading-indicator
        label="Default"
        type="linear"
      ></ic-loading-indicator>
      <ic-loading-indicator
        label="Large"
        size="large"
        type="linear"
      ></ic-loading-indicator>
      <ic-loading-indicator
        label="Full-width"
        size="default"
        type="linear"
        full-width="true"
      ></ic-loading-indicator>
    </div>`,

  name: "Linear variants (indeterminate)",
};

export const LinearVariantsDeterminate = {
  render: (args) =>
    html`<div style="display: grid; gap: 50px;">
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Small"
        size="small"
        type="linear"
      ></ic-loading-indicator>
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Default"
        type="linear"
      ></ic-loading-indicator>
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Large"
        size="large"
        type="linear"
      ></ic-loading-indicator>
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Full-width"
        size="default"
        type="linear"
        full-width="true"
      ></ic-loading-indicator>
    </div>`,

  name: "Linear variants (determinate)",
};

export const CircularLight = {
  render: (args) =>
    html`<div style="display: grid; gap: 50px;">
      <ic-loading-indicator
        label="Small"
        size="small"
        appearance="light"
      ></ic-loading-indicator>
      <ic-loading-indicator
        label="Default"
        appearance="light"
      ></ic-loading-indicator>
      <ic-loading-indicator
        label="Large"
        size="large"
        appearance="light"
      ></ic-loading-indicator>
    </div>`,

  name: "Circular light",

  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const IconLight = {
  render: (args) =>
    html`<ic-loading-indicator
      size="icon"
      appearance="light"
    ></ic-loading-indicator>`,

  name: "Icon light",

  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const LinearLight = {
  render: (args) =>
    html`<div style="display: grid; gap: 50px;">
      <ic-loading-indicator
        label="Default"
        type="linear"
        appearance="light"
      ></ic-loading-indicator>
      <ic-loading-indicator
        label="Large"
        size="large"
        type="linear"
        appearance="light"
      ></ic-loading-indicator>
      <ic-loading-indicator
        label="Full-width"
        type="linear"
        full-width="true"
        appearance="light"
      ></ic-loading-indicator>
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Default"
        type="linear"
        appearance="light"
      ></ic-loading-indicator>
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Large"
        size="large"
        type="linear"
        appearance="light"
      ></ic-loading-indicator>
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Full-width"
        type="linear"
        full-width="true"
        appearance="light"
      ></ic-loading-indicator>
    </div>`,

  name: "Linear light",

  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const NoLabel = {
  render: (args) =>
    html`<div style="display: grid; gap: 50px;">
      <ic-loading-indicator description="Loading"></ic-loading-indicator
      ><ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        description="Loading"
      ></ic-loading-indicator
      ><ic-loading-indicator
        description="Loading"
        type="linear"
      ></ic-loading-indicator
      ><ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        description="Loading"
        type="linear"
      ></ic-loading-indicator>
    </div>`,

  name: "No label",
};

export const ChangingLabel = {
  render: (args) =>
    html`<ic-loading-indicator
      label="Loading.../Still loading..."
      label-duration="4000"
    ></ic-loading-indicator>`,

  name: "Changing label",
};

export const ProgressIndicatorForCompactStep = {
  render: (args) =>
    html`<ic-loading-indicator
      size="small"
      inner-label="3"
      progress="30"
      min="0"
      max="100"
    ></ic-loading-indicator>`,

  name: "Progress indicator for compact step",
  args: defaultArgs,
  argTypes: defaultArgTypes,
};

export const PlaygroundIndeterminate = {
  render: (args) =>
    html`<div
      style="background-color: ${args.appearance === "light"
        ? "#393939"
        : "#FFFFFF"}; padding: 16px;"
    >
      <ic-loading-indicator
        appearance=${args.appearance}
        description=${args.description}
        full-width=${args.fullWidth}
        label-duration=${args.labelDuration}
        size=${args.size}
        type=${args.type}
        label=${args.label}
      >
      </ic-loading-indicator>
    </div>`,

  args: defaultArgs,
  argTypes: defaultArgTypes,
  name: "Playground - indeterminate",
};

export const PlaygroundDeterminate = {
  render: (args) =>
    html`<div
      style="background-color: ${args.appearance === "light"
        ? "#393939"
        : "#FFFFFF"}; padding: 16px;"
    >
      <ic-loading-indicator
        appearance=${args.appearance}
        description=${args.description}
        full-width=${args.fullWidth}
        label-duration=${args.labelDuration}
        size=${args.size}
        type=${args.type}
        label=${args.label}
        progress=${args.progress}
        min=${args.min}
        max=${args.max}
      >
      </ic-loading-indicator>
    </div>`,

  args: {
    ...defaultArgs,
    max: 100,
    min: 0,
    progress: 30,
  },

  argTypes: defaultArgTypes,
  name: "Playground - determinate",
};
