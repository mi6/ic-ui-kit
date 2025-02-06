import { html } from "lit-html";

export default {
  title: "Web Components/Pagination",
  component: "Pagination",
};

export const Simple = {
  render: (args) => html`
    <p>Default/Dark/Light appearance</p>
    <ic-pagination pages="15"></ic-pagination>
    <br />
    <ic-pagination pages="15" appearance="dark"></ic-pagination>
    <br />
    <div style="background-color: black; width: fit-content; padding: 6px 8px;">
      <ic-pagination pages="15" appearance="light"></ic-pagination>
    </div>
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
  render: (args) => html`
    <p>Default/Dark/Light appearance</p>
    <ic-pagination pages="15" type="complex"></ic-pagination>
    <br />
    <ic-pagination pages="15" type="complex" appearance="dark"></ic-pagination>
    <br />
    <div style="background-color: black; width: fit-content; padding: 6px 8px;">
      <ic-pagination
        pages="15"
        type="complex"
        appearance="light"
      ></ic-pagination>
    </div>
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
  render: (args) => html`
  <p style={{ padding: 10 }}>Adjacent: 0, Boundary: 0</p>
      <ic-pagination
        pages="15"
        type="complex"
        adjacent-count="0"
        boundary-count="0"
      ></ic-pagination>
      <br/>
      <p style={{ padding: 10 }}>Adjacent: 0, Boundary: 1</p>
      <ic-pagination
        pages="15"
        type="complex"
        adjacent-count="0"
        boundary-count="1"
      ></ic-pagination>
      <br/>
      <p style={{ padding: 10 }}>Adjacent: 0, Boundary: 2</p>
      <ic-pagination
        pages="15"
        type="complex"
        adjacent-count="0"
        boundary-count="2"
      ></ic-pagination>
      <br/>
      <p style={{ padding: 10 }}>Adjacent: 1, Boundary: 0</p>
      <ic-pagination
        pages="15"
        type="complex"
        adjacent-count="1"
        boundary-count="0"
      ></ic-pagination>
      <br/>
      <p style={{ padding: 10 }}>Adjacent: 2, Boundary: 0</p>
      <ic-pagination
        pages="15"
        type="complex"
        adjacent-count="2"
        boundary-count="0"
      ></ic-pagination>
      <br/>
      <p style={{ padding: 10 }}>Adjacent: 1, Boundary: 1</p>
      <ic-pagination pages="15" type="complex" ></ic-pagination>
      <br/>
      <p style={{ padding: 10 }}>Adjacent: 2, Boundary: 2</p>
      <ic-pagination
        pages="15"
        type="complex"
        adjacent-count="2"
        boundary-count="2"
      ></ic-pagination>
     `,

  name: "Complex - Adjacent & Boundary Items Set",
};
