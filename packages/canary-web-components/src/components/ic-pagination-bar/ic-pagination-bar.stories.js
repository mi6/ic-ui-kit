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

/**
 * Use the pagination bar when large amounts of content are split across multiple pages and various pagination options are required.
 *
 * There is one required attribute for the pagination bar:
 * - total-items: `number`
 *
 * Click the 'Component API' tab to view all the available attributes, events and slots for pagination bar.
 *
 * To use the pagination bar component, import `@ukic/canary-web-components` into your application.
 */
export const Basic = {
  render: () => html`<ic-pagination-bar total-items="100"></ic-pagination-bar>`,
  name: "Basic",
};

/**
 * Pagination bar will display the number of pages out of the total number of pages as well as the `simple` pagination type.
 *
 * By default, the items per page is set to 10. If the total items is greater than 100, the default items per page is set to 25.
 *
 * To display the items per page control, set the `show-items-per-page-control` attribute to `true`.
 *
 * The items per page control will display a dropdown with options to select the number of items to display per page. Customize the options by setting the `itemsPerPageOptions` property.
 * `itemsPerPageOptions` is an array of objects with `label` and `value` properties. If more than three options are provided, the dropdown will display the first three options and an 'All' option.
 */
export const ItemsPerPageControl = {
  render: () => html`<div style="height: 150px;">
      <ic-pagination-bar
        total-items="100"
        show-items-per-page-control="true"
      ></ic-pagination-bar>
    </div>
    <script>
      const paginationBar = document.querySelector("ic-pagination-bar");
      paginationBar.itemsPerPageOptions = [
        { label: "50", value: "50" },
        { label: "100", value: "100" },
        { label: "250", value: "250" },
      ];
    </script>`,
  name: "Items per page control",
};

/**
 * To display the go to page control, set the `show-go-to-page-control` attribute to `true`. 'Go to page' allows the user to jump to a specific page. If the page number is invalid, the input will be styled in the `ic-status-error` colour with a tooltip detailing the error.
 */
export const GoToPageControl = {
  render: () => html`<div style="height: 120px;">
    <ic-pagination-bar
      total-items="100"
      show-go-to-page-control="true"
    ></ic-pagination-bar>
  </div>`,
  name: "Go to page control",
};

/**
 * The pagination range label type can be set to two types:
 * - `simple`: [default]: Display the total number of pages and the current page number.
 * - `data`: Displays the total number of items and the items range.
 *
 * The example below uses the `data` pagination range label type. The range is updated when the page is changed.
 */
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

/**
 * 'Item' can be changed to a custom label by setting the `item-label` attribute. Any occurrences of 'Item' in the pagination bar will be replaced with the custom label.
 */
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

/**
 * The pagination type can be set to two types:
 * - `simple`: [default]: Display the current page as a label with back and next buttons.
 * - `complex`: Displays all the page numbers as buttons with back and next buttons.
 *
 * The `complex` pagination type is useful when there are many pages to navigate through.
 */
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

/**
 * The pagination elements can be aligned to the `right` (default), `left` or `space-between`. The default alignment is right.
 */
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

/**
 * If the pagination bar becomes cluttered due to the number of pagination elements displayed, the range label can be hidden by setting the `hide-range-label` attribute to `true`.
 */
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

/**
 * If you have a predefined list of items you want in the itemsPerPage select, the 'All' option can be hidden by setting `hide-all-from-items-per-page` to `true`.
 */
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

/**
 * When the 'items per page' value changes, setting `set-to-first-page-on-pagination-change` to `true` will set the pagination to the first page.
 */
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

/**
 * The `selected-items-per-page` prop can be used to programmatically set the items per page dropdown option.
 */
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

/**
 * The `selected-items-per-page` prop can be used to programmatically set the items per page dropdown option. If provided, this prop must match one of the items per page dropdown options, otherwise an error appears on the console and the prop is ignored.
 */
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

/**
 * The `current-page` prop can be used to programmatically set the current page.
 */
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

/**
 * The `current-page` prop can be used to programmatically set the current page. If provided, this prop must be greater than 0 and less than or equal to the total number of pages, otherwise an error appears on the console and the prop is ignored.
 */
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
