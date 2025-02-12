import { html } from "lit-html";

const defaultArgs = {
  appearance: "default",
  href: "/",
  target: "",
};

export default {
  title: "Web Components/Link",
  component: "ic-link",
};

export const Default = {
  render: () =>
    html`<div>
      <ic-link href="/">This is a link</ic-link>
      <br />
      <br />
      <div style="width: 100px">
        <ic-link href="/"
          >This is a very very long link that goes multi-line</ic-link
        >
      </div>
    </div>`,

  name: "Default",

  parameters: {
    layout: "fullscreen",
  },
};

export const WithIcon = {
  render: () => html`<ic-link href="/" show-icon>This is a link</ic-link>`,
  name: "With icon",

  parameters: {
    layout: "fullscreen",
  },
};

export const DownloadLink = {
  render: () => html`<ic-link href="/" download>Download File</ic-link>`,
  name: "Download link",

  parameters: {
    layout: "fullscreen",
  },
};

export const Dark = {
  render: () =>
    html`<ic-link href="/" appearance="dark" target="_blank"
      >This is a link</ic-link
    >`,

  name: "Dark",

  parameters: {
    layout: "fullscreen",
  },
};

export const Light = {
  render: () =>
    html` <ic-link href="/" appearance="light" show-icon
      >This is a link</ic-link
    >`,

  name: "Light",

  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const Playground = {
  render: (args) =>
    html` <div
      style="background-color: ${args.appearance == "light" ? "black" : ""}"
    >
      <ic-link
        href=${args.href}
        appearance=${args.appearance}
        target=${args.target}
        >This is a link</ic-link
      >
    </div>`,

  args: defaultArgs,

  argTypes: {
    appearance: {
      options: ["default", "light", "dark"],

      control: {
        type: "radio",
      },
    },

    target: {
      options: ["_blank", "_self", "_parent", "_top", ""],

      control: {
        type: "radio",
      },
    },
  },

  name: "Playground",
};
