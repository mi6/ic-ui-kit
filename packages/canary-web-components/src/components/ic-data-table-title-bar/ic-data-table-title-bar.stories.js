import { html } from "lit-html";
import readme from "./readme.md";

export default {
  title: "Web Components/Data Table Title Bar",
  component: "ic-data-table-title-bar",

  parameters: {
    componentAPI: {
      data: readme,
    },
  },
};

export const Basic = {
  render: () =>
    html`<ic-data-table-title-bar
      heading="Title Bar"
    ></ic-data-table-title-bar>`,

  name: "Basic",
  height: "220px",
};

export const Slots = {
  render: () => html`
    <ic-data-table-title-bar>
      <ic-typography slot="heading" variant="h1"
        ><h3>Title Bar</h3></ic-typography
      >
      <div slot="description">
        <ic-chip label="Chip"></ic-chip>
        <ic-chip label="Chip"></ic-chip>
      </div>
    </ic-data-table-title-bar>
  `,

  name: "Slots",
  height: "220px",
};

export const WithMetadataAndDescription = {
  render: () =>
    html`<ic-data-table-title-bar
      heading="Title Bar"
      metadata="128 items | 32gb | Updated: 01/02/03"
      description="Data table description that describes the purpose of the table."
    ></ic-data-table-title-bar>`,

  name: "With metadata and description",
  height: "220px",
};

export const HideDensitySelector = {
  render: () =>
    html`<ic-data-table-title-bar
      hide-density-select="true"
      heading="Title Bar"
      metadata="128 items | 32gb | Updated: 01/02/03"
      description="Data table description that describes the purpose of the table."
    ></ic-data-table-title-bar>`,

  name: "Hide density selector",
};

export const CustomActions = {
  render: () =>
    html`<ic-data-table-title-bar
      heading="Title Bar"
      metadata="128 items | 32gb | Updated: 01/02/03"
      description="Data table description that describes the purpose of the table."
    >
      <ic-button slot="primary-action" size="small">Primary</ic-button>
      <ic-button slot="custom-actions" variant="icon" aria-label="Icon Button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Z"
          />
        </svg>
      </ic-button>
    </ic-data-table-title-bar>`,

  name: "Custom actions",
  height: "220px",
};
