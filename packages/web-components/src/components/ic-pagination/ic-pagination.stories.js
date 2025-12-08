import { html } from "lit-html";

const defaultArgs = {
  accessibleLabel: "Pagination Navigation",
  adjacentPageCount: 1,
  boundaryPageCount: 1,
  currentPage: 1,
  defaultPage: 1,
  disabled: false,
  hideCurrentPage: false,
  hideFirstAndLastPageButton: false,
  label: "Page",
  monochrome: false,
  pages: 15,
  theme: "inherit",
  type: "simple",
};

export default {
  title: "Web Components/Pagination",
  component: "Pagination",
};

export const Simple = {
  render: () => html`
    <p>Default appearance</p>
    <ic-pagination pages="15"></ic-pagination>
    <br />
    <p>Hidden current page</p>
    <ic-pagination pages="15" hide-current-page></ic-pagination>
    <br />
    <p>Hidden first and last page buttons</p>
    <ic-pagination pages="15" hide-first-and-last-page-button></ic-pagination>
    <br />
    <p>Default page</p>
    <ic-pagination pages="15" default-page="3"></ic-pagination>
    <br />
    <p>Disabled</p>
    <ic-pagination pages="15" disabled></ic-pagination>
    <br />
    <p>Label set</p>
    <ic-pagination pages="15" label="Label"></ic-pagination>
  `,

  name: "Simple",
};

export const Complex = {
  render: () => html`
    <p>Default appearance</p>
    <ic-pagination pages="15" type="complex"></ic-pagination>
    <br />
    <p>Hidden first and last buttons</p>
    <ic-pagination
      pages="15"
      type="complex"
      hide-first-and-last-page-button
    ></ic-pagination>
    <br />
    <p>Default page</p>
    <ic-pagination pages="15" type="complex" default-page="7"></ic-pagination>
    <br />
    <p>Disabled</p>
    <ic-pagination pages="15" type="complex" disabled></ic-pagination>
  `,

  name: "Complex",
};

export const ComplexAdjacentBoundaryItemsSet = {
  render: () => html`
  <p style={{ padding: 10 }}>Adjacent: 0, Boundary: 0</p>
      <ic-pagination
        pages="15"
        type="complex"
        adjacent-page-count="0"
        boundary-page-count="0"
      ></ic-pagination>
      <br/>
      <p style={{ padding: 10 }}>Adjacent: 0, Boundary: 1</p>
      <ic-pagination
        pages="15"
        type="complex"
        adjacent-page-count="0"
        boundary-page-count="1"
      ></ic-pagination>
      <br/>
      <p style={{ padding: 10 }}>Adjacent: 0, Boundary: 2</p>
      <ic-pagination
        pages="15"
        type="complex"
        adjacent-page-count="0"
        boundary-page-count="2"
      ></ic-pagination>
      <br/>
      <p style={{ padding: 10 }}>Adjacent: 1, Boundary: 0</p>
      <ic-pagination
        pages="15"
        type="complex"
        adjacent-page-count="1"
        boundary-page-count="0"
      ></ic-pagination>
      <br/>
      <p style={{ padding: 10 }}>Adjacent: 2, Boundary: 0</p>
      <ic-pagination
        pages="15"
        type="complex"
        adjacent-page-count="2"
        boundary-page-count="0"
      ></ic-pagination>
      <br/>
      <p style={{ padding: 10 }}>Adjacent: 1, Boundary: 1</p>
      <ic-pagination pages="15" type="complex" ></ic-pagination>
      <br/>
      <p style={{ padding: 10 }}>Adjacent: 2, Boundary: 2</p>
      <ic-pagination
        pages="15"
        type="complex"
        adjacent-page-count="2"
        boundary-page-count="2"
      ></ic-pagination>
     `,

  name: "Complex - Adjacent & Boundary Items Set",
};

export const Playground = {
  render: (args) =>
    html`<ic-pagination
      accessible-label=${args.accessibleLabel}
      adjacent-page-count=${args.adjacentPageCount}
      boundary-page-count=${args.boundaryPageCount}
      current-page=${args.currentPage}
      default-page=${args.defaultPage}
      disabled=${args.disabled}
      hide-current-page=${args.hideCurrentPage}
      hide-first-and-last-page-button=${args.hideFirstAndLastPageButton}
      label=${args.label}
      monochrome=${args.monochrome}
      pages=${args.pages}
      theme=${args.theme}
      type=${args.type}
    ></ic-pagination>`,

  args: defaultArgs,

  argTypes: {
    theme: {
      options: ["inherit", "light", "dark"],

      control: {
        type: "inline-radio",
      },
    },

    type: {
      options: ["simple", "complex"],

      control: {
        type: "inline-radio",
      },
    },
  },

  name: "Playground",
};
