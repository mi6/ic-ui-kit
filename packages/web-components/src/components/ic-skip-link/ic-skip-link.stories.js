import { html } from "lit-html";

export default {
  title: "Web Components/Skip link",
  component: "ic-skip-link",
};

export const Default = {
  render: () =>
    html`<ic-skip-link target="#page-content"></ic-skip-link>
      <ic-top-navigation app-title="Application Name">
        <svg
          slot="app-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
          />
        </svg>
      </ic-top-navigation>
      <main id="page-content">Target element</main>
      <ic-button>Should receive next focus</ic-button>`,
  name: "Default",
};

export const FullWidth = {
  render: () =>
    html`<ic-skip-link target="#page-content" full-width="true"></ic-skip-link>
      <ic-top-navigation app-title="Application Name">
        <svg
          slot="app-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
          />
        </svg>
      </ic-top-navigation>
      <main id="page-content">Target element</main>
      <ic-button>Should receive next focus</ic-button>`,
  name: "Full width",
};

export const Inline = {
  render: () =>
    html`<ic-skip-link target="#page-content"></ic-skip-link>
      <ic-top-navigation app-title="Application Name">
        <svg
          slot="app-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
          />
        </svg>
      </ic-top-navigation>
      <br />
      <br />
      <br />
      <main id="page-content">Target element</main>
      <ic-skip-link target="#next-content" inline="true"></ic-skip-link>
      <br />
      <br />
      <br />
      <main id="next-content">Next target element</main>
      <ic-button>Should receive last focus</ic-button>`,
  name: "Inline",
};

export const HideBackground = {
  render: () =>
    html`<ic-skip-link
        target="#page-content"
        transparent-background="true"
      ></ic-skip-link>
      <ic-top-navigation app-title="Application Name">
        <svg
          slot="app-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
          />
        </svg>
      </ic-top-navigation>
      <main id="page-content">Target element</main>
      <ic-button>Should receive next focus</ic-button>`,
  name: "Hide background",
};

const defaultArgs = {
  fullWidth: false,
  inline: false,
  label: "Skip to main content",
  monochrome: false,
  target: "#",
  theme: "inherit",
  transparentBackground: false,
};

export const Playground = {
  render: (args) =>
    html`<ic-skip-link
        full-width=${args.fullWidth}
        inline=${args.inline}
        label=${args.label}
        monochrome=${args.monochrome}
        target=${args.target}
        theme=${args.theme}
        transparent-background=${args.transparentBackground}
      ></ic-skip-link>
      <ic-top-navigation app-title="Application Name">
        <svg
          slot="app-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
          />
        </svg>
      </ic-top-navigation>
      <main id=${args.target.replace("#", "")}>Target element</main>
      <ic-button>Should receive next focus</ic-button>`,

  args: defaultArgs,

  argTypes: {
    theme: {
      options: ["inherit", "light", "dark"],
      control: { type: "inline-radio" },
    },
  },

  name: "Playground",
};
