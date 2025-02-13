import readme from "./readme.md";
import { html } from "lit-html";

export default {
  title: "Web Components/Pagination Bar",
  component: "ic-pagination-bar",

  parameters: {
    componentAPI: {
      data: readme,
    },
  },
};

export const Basic = {
  render: () =>
    html`<div style="height: 120px;">
      <ic-pagination-bar total-items="100"></ic-pagination-bar>
    </div>`,
  name: "Basic",
};

export const ItemsPerPageControl = {
  render: () =>
    html`<div style="height: 150px;">
      <ic-pagination-bar
        total-items="100"
        show-items-per-page-control="true"
      ></ic-pagination-bar>
    </div>`,

  name: "Items per page control",
};

export const GoToPageControl = {
  render: () =>
    html`<div style="height: 120px;">
      <ic-pagination-bar
        total-items="100"
        show-go-to-page-control="true"
      ></ic-pagination-bar>
    </div>`,

  name: "Go to page control",
};

export const PaginationRangeLabelType = {
  render: () =>
    html`<div style="height: 150px;">
      <ic-pagination-bar
        total-items="100"
        show-items-per-page-control="true"
        show-go-to-page-control="true"
        range-label-type="data"
      ></ic-pagination-bar>
    </div>`,

  name: "Pagination range label type",
};

export const PaginationItemLabel = {
  render: () =>
    html`<div style="height: 150px;">
      <ic-pagination-bar
        total-items="100"
        show-items-per-page-control="true"
        show-go-to-page-control="true"
        range-label-type="data"
        item-label="Image"
      ></ic-pagination-bar>
    </div>`,

  name: "Pagination item label",
};

export const PaginationType = {
  render: () =>
    html`<div style="height: 150px;">
      <ic-pagination-bar
        total-items="100"
        show-items-per-page-control="true"
        type="complex"
      ></ic-pagination-bar>
    </div>`,

  name: "Pagination type",
};

export const AlignmentLeft = {
  render: () =>
    html`<div style="height: 150px;">
      <ic-pagination-bar
        total-items="100"
        alignment="left"
        show-items-per-page-control="true"
        show-go-to-page-control="true"
      ></ic-pagination-bar>
    </div>`,

  name: "Alignment left",
};

export const AlignmentSpaceBetween = {
  render: () =>
    html`<div style="height: 150px;">
      <ic-pagination-bar
        total-items="100"
        alignment="space-between"
        show-items-per-page-control="true"
        show-go-to-page-control="true"
      ></ic-pagination-bar>
    </div>`,

  name: "Alignment space between",
};

export const Appearance = {
  render: () =>
    html`<div
      style="display: flex; flex-direction: column; gap: 8px; height: 220px"
    >
      <div style="background-color: var(--ic-architectural-black)">
        <ic-pagination-bar
          total-items="100"
          appearance="light"
          show-items-per-page-control="true"
          show-go-to-page-control="true"
        ></ic-pagination-bar>
      </div>
      <div style="background-color: var(--ic-status-info-contrast)">
        <ic-pagination-bar
          total-items="100"
          appearance="dark"
          show-items-per-page-control="true"
          show-go-to-page-control="true"
        ></ic-pagination-bar>
      </div>
    </div>`,

  name: "Appearance",
};

export const HideRangeLabel = {
  render: () =>
    html`<div style="height:150px">
      <div style="background-color: var(--ic-architectural-100)">
        <ic-pagination-bar
          total-items="100"
          appearance="dark"
          hide-range-label="true"
          show-items-per-page-control="true"
          show-go-to-page-control="true"
        ></ic-pagination-bar>
      </div>
    </div>`,

  name: "Hide range label",
};

export const HideAllFromItemsPerPage = {
  render: () =>
    html`<div style="height:150px">
      <ic-pagination-bar
        total-items="100"
        show-items-per-page-control="true"
        show-go-to-page-control="true"
        hide-all-from-items-per-page="true"
      ></ic-pagination-bar>
    </div>`,

  name: "Hide all from items per page",
};

export const SetToFirstPageWhenItemsPerPageChanges = {
  render: () =>
    html`<div style="height:150px">
      <ic-pagination-bar
        total-items="100"
        show-items-per-page-control="true"
        show-go-to-page-control="true"
        hide-all-from-items-per-page="true"
        set-to-first-page-on-pagination-change="true"
      ></ic-pagination-bar>
    </div>`,

  name: "Set to first page when items per page changes",
};
