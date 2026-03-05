/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { html } from "lit-html";
import readme from "./readme.md";

export default {
  title: "Web Components/Pagination bar",
  component: "ic-pagination-bar",
  parameters: {
    componentAPI: {
      data: readme,
    },
  },
};

export const Basic = {
  render: () => html`<ic-pagination-bar total-items="100"></ic-pagination-bar>`,
  name: "Basic",
};

export const ItemsPerPageControl = {
  render: () => html`<div style="height: 150px;">
      <ic-pagination-bar
        total-items="100"
        show-items-per-page-control="true"
      ></ic-pagination-bar>
    </div>
    <script>
      var paginationBar = document.querySelector("ic-pagination-bar");
      paginationBar.itemsPerPageOptions = [
        { label: "50", value: "50" },
        { label: "100", value: "100" },
        { label: "250", value: "250" },
      ];
    </script>`,
  name: "Items per page control",
};

export const GoToPageControl = {
  render: () => html`<div style="height: 120px;">
    <ic-pagination-bar
      total-items="100"
      show-go-to-page-control="true"
    ></ic-pagination-bar>
  </div>`,
  name: "Go to page control",
};

export const PaginationRangeLabelType = {
  render: () => html`<div style="height: 150px;">
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
  render: () => html`<div style="height: 150px;">
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
  render: () => html`<div style="height: 150px;">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      type="complex"
    ></ic-pagination-bar>
  </div>`,
  name: "Pagination type",
};

export const AlignmentLeft = {
  render: () => html`<div style="height: 150px;">
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
  render: () => html`<div style="height: 150px;">
    <ic-pagination-bar
      total-items="100"
      alignment="space-between"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
    ></ic-pagination-bar>
  </div>`,
  name: "Alignment space-between",
};

export const HideRangeLabel = {
  render: () => html`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      hide-range-label="true"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
    ></ic-pagination-bar>
  </div>`,
  name: "Hide range label",
};

export const HideAllFromItemsPerPage = {
  render: () => html`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      hide-all-from-items-per-page="true"
    ></ic-pagination-bar>
  </div>`,
  name: "Hide 'All' from items per page",
};

export const SetToFirstPage = {
  render: () => html`<div style="height:150px">
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

export const SelectedItemsPerPage = {
  render: () => html`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      selected-items-per-page="25"
    ></ic-pagination-bar>
  </div>`,
  name: "Set the selected items per page",
};

export const SelectedItemsPerPageToInvalidValue = {
  render: () => html`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      selected-items-per-page="25"
    ></ic-pagination-bar>
  </div>`,
  name: "Set the selected items per page to an invalid value",
};

export const SetCurrentPage = {
  render: () => html`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      current-page="3"
    ></ic-pagination-bar>
  </div>`,
  name: "Set the current page",
};

export const SetCurrentPageToInvalidValue = {
  render: () => html`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      current-page="-1"
    ></ic-pagination-bar>
  </div>`,
  name: "Set the current page to an invalid value",
};

export const HideFirstAndLastPageButtons = {
  render: () => html`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      hide-first-and-last-page-button="true"
    ></ic-pagination-bar>
  </div>`,
  name: "Hide first and last page buttons",
};

export const HideCurrentPage = {
  render: () => html`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      hide-current-page="true"
    ></ic-pagination-bar>
  </div>`,
  name: "Hide current page label",
};
