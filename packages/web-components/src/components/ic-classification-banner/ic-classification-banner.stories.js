import { html } from "lit-html";

const defaultArgs = {
  additionalSelectors: "",
  classification: "official",
  country: "uk",
  inline: true,
  upTo: false,
};

export default {
  title: "Web Components/Classification banner",
  component: "ic-classification-banner",
};

export const Classifications = {
  render: () =>
    html`<ic-classification-banner inline="true"></ic-classification-banner>
      <ic-classification-banner
        classification="official"
        inline="true"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="official-sensitive"
        inline="true"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="secret"
        inline="true"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="top-secret"
        inline="true"
      ></ic-classification-banner>`,

  name: "Classifications",
};

export const UpTo = {
  render: () =>
    html`<ic-classification-banner inline="true"></ic-classification-banner>
      <ic-classification-banner
        classification="official"
        inline="true"
        up-to="true"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="official-sensitive"
        inline="true"
        up-to="true"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="secret"
        inline="true"
        up-to="true"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="top-secret"
        inline="true"
        up-to="true"
      ></ic-classification-banner>`,

  name: "Up to",
};

export const BottomOfPage = {
  render: () =>
    html`<ic-classification-banner
      classification="official"
    ></ic-classification-banner>`,

  name: "Bottom of page",
};

export const Country = {
  render: () =>
    html`<ic-classification-banner
        classification="official"
        inline="true"
        country="us"
      ></ic-classification-banner>
      <ic-classification-banner
        classification="official"
        inline="true"
        country=""
      ></ic-classification-banner>`,

  name: "Country",
};

export const AdditionalSelectors = {
  render: () =>
    html`<ic-classification-banner
      classification="official"
      inline="true"
      additional-selectors="ukic"
    />`,

  name: "Additional selectors",
};

export const Playground = {
  render: (args) =>
    html`<ic-classification-banner
      classification=${args.classification}
      inline=${args.inline}
      up-to=${args.upTo}
      country=${args.country}
      additional-selectors=${args.additionalSelectors}
    ></ic-classification-banner>`,

  args: defaultArgs,

  argTypes: {
    classification: {
      options: [
        "default",
        "official",
        "secret",
        "official-sensitive",
        "top-secret",
      ],

      control: {
        type: "select",
      },
    },
  },

  name: "Playground",
};
