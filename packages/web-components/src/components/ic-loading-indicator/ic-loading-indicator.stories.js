import { html } from "lit-html";

const defaultArgs = {
  monochrome: false,
  description: "Loading",
  fullWidth: false,
  labelDuration: 8000,
  size: "medium",
  type: "linear",
  label: null,
  theme: "inherit",
};

const defaultArgTypes = {
  label: {
    control: { type: "text" },
  },
  size: {
    options: ["small", "medium", "large", "icon"],
    control: { type: "radio" },
  },
  theme: {
    options: ["inherit", "light", "dark"],
    control: { type: "inline-radio" },
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
        size="medium"
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
        size="medium"
        type="linear"
        full-width="true"
      ></ic-loading-indicator>
    </div>`,

  name: "Linear variants (determinate)",
};

export const CircularDarkMode = {
  render: (args) =>
    html`<div style="display: grid; gap: 50px;">
      <ic-loading-indicator
        label="Small"
        size="small"
        theme="dark"
      ></ic-loading-indicator>
      <ic-loading-indicator label="Default" theme="dark"></ic-loading-indicator>
      <ic-loading-indicator
        label="Large"
        size="large"
        theme="dark"
      ></ic-loading-indicator>
    </div>`,

  name: "Circular dark mode",

  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const IconDarkMode = {
  render: (args) =>
    html`<ic-loading-indicator
      size="icon"
      theme="dark"
    ></ic-loading-indicator>`,

  name: "Icon dark mode",

  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const LinearDarkMode = {
  render: (args) =>
    html`<div style="display: grid; gap: 50px;">
      <ic-loading-indicator
        label="Default"
        type="linear"
        theme="dark"
      ></ic-loading-indicator>
      <ic-loading-indicator
        label="Large"
        size="large"
        type="linear"
        theme="dark"
      ></ic-loading-indicator>
      <ic-loading-indicator
        label="Full-width"
        type="linear"
        full-width="true"
        theme="dark"
      ></ic-loading-indicator>
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Default"
        type="linear"
        theme="dark"
      ></ic-loading-indicator>
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Large"
        size="large"
        type="linear"
        theme="dark"
      ></ic-loading-indicator>
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Full-width"
        type="linear"
        full-width="true"
        theme="dark"
      ></ic-loading-indicator>
    </div>`,

  name: "Linear dark mode",

  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const Monochrome = {
  render: (args) =>
    html`<div style="display: grid; gap: 50px;">
      <ic-loading-indicator
        label="Light"
        monochrome="true"
      ></ic-loading-indicator>
      <div style="background-color: black">
        <ic-loading-indicator
          label="Dark"
          theme="dark"
          monochrome="true"
        ></ic-loading-indicator>
      </div>
      <ic-loading-indicator
        size="icon"
        monochrome="true"
      ></ic-loading-indicator>
      <div
        style="background-color: black; display: flex; justify-content: center"
      >
        <ic-loading-indicator
          size="icon"
          theme="dark"
          monochrome="true"
        ></ic-loading-indicator>
      </div>
      <ic-loading-indicator
        label="Light"
        type="linear"
        monochrome="true"
      ></ic-loading-indicator>
      <div style="background-color: black; padding: var(--ic-space-xs)">
        <ic-loading-indicator
          label="Dark"
          type="linear"
          theme="dark"
          monochrome="true"
        ></ic-loading-indicator>
      </div>
    </div>`,

  name: "Monochrome",
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
    html`<ic-loading-indicator label-duration="4000"></ic-loading-indicator>
      <script>
        document.querySelector("ic-loading-indicator").label = [
          "Loading...",
          "Still loading...",
        ];
      </script> `,

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
      style="background-color: ${args.theme === "dark"
        ? "#393939"
        : "#FFFFFF"}; padding: 16px;"
    >
      <ic-loading-indicator
        monochrome=${args.monochrome}
        theme=${args.theme}
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
      style="background-color: ${args.theme === "dark"
        ? "#393939"
        : "#FFFFFF"}; padding: 16px;"
    >
      <ic-loading-indicator
        monochrome=${args.monochrome}
        theme=${args.theme}
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
