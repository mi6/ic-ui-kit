import { html } from "lit-html";

const defaultArgs = {
  href: "/",
  target: "",
  monochrome: false,
  theme: "inherit",
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
  render: () =>
    html`<ic-link href="/" target="_blank">This is a link</ic-link>`,
  name: "With icon",

  parameters: {
    layout: "fullscreen",
  },
};

export const DownloadLink = {
  render: () =>
    html`<div>
        <ic-link href="/" download="downloaded-file">Download File</ic-link>
        <br />
        <br />
        <ic-button variant="primary" onclick="handleTrue()"
          >Set to true</ic-button
        >
        <ic-button variant="primary" onclick="handleFalse()"
          >Set to false</ic-button
        >
        <ic-button variant="primary" onclick="handleReset()"
          >Set to normal</ic-button
        >
      </div>
      <script>
        var link = document.querySelector("ic-link");
        function handleTrue() {
          link.download = true;
        }
        function handleFalse() {
          link.download = false;
        }
        function handleReset() {
          link.download = "downloaded-file";
        }
      </script>`,

  name: "Download link",
};

export const Playground = {
  render: (args) =>
    html` <ic-link
      href=${args.href}
      target=${args.target}
      monochrome=${args.monochrome}
      theme=${args.theme}
      >This is a link</ic-link
    >`,

  args: defaultArgs,

  argTypes: {
    target: {
      options: ["_blank", "_self", "_parent", "_top", ""],

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
  },

  name: "Playground",
};
