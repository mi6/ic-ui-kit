/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useArgs } from "@storybook/preview-api";
import React from "react";
import readme from "../../../canary-web-components/src/components/ic-pagination-bar/readme.md";
import { IcPaginationBar } from "../components";

export default {
  title: "React Components/Pagination Bar",
  component: IcPaginationBar,
  parameters: {
    componentAPI: {
      data: readme,
    },
  },
};

/**
 * Use the pagination bar when large amounts of content are split across multiple pages and various pagination options are required.
 *
 * There is one required prop for the pagination bar:
 * - totalItems: `number`
 *
 * Click the 'Component API' tab to view all the available props, events and slots for pagination bar.
 *
 * To use the pagination bar component, import `@ukic/canary-react` into your application.
 */
export const Basic = {
  render: () => <IcPaginationBar totalItems={100} />,
  name: "Basic",
};

/**
 * Pagination bar will display the number of pages out of the total number of pages as well as the `simple` pagination type.
 *
 * By default, the items per page is set to 10. If the total items is greater than 100, the default items per page is set to 25.
 *
 * To display the items per page control, set the `showItemsPerPageControl`.
 *
 * The items per page control will display a dropdown with options to select the number of items to display per page. Customize the options by setting the `itemsPerPageOptions` property.
 * `itemsPerPageOptions` is an array of objects with `label` and `value` properties. If more than three options are provided, the dropdown will display the first three options and an 'All' option.
 */
export const ItemsPerPageControl = {
  render: () => (
    <div
      style={{
        height: "120px",
      }}
    >
      <IcPaginationBar
        totalItems={100}
        showItemsPerPageControl
        itemsPerPageOptions={[
          { label: "50", value: "50" },
          { label: "100", value: "100" },
          { label: "250", value: "250" },
        ]}
      />
    </div>
  ),
  name: "Items per page control",
};

/**
 * To display the go to page control, set `showGoToPageControl`. 'Go to page' allows the user to jump to a specific page. If the page number is invalid, the input will be styled in the `ic-status-error` colour with a tooltip detailing the error.
 */
export const GoToPageControl = {
  render: () => (
    <div
      style={{
        height: "120px",
      }}
    >
      <IcPaginationBar totalItems={100} showGoToPageControl />
    </div>
  ),
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
  render: () => (
    <div
      style={{
        height: "150px",
      }}
    >
      <IcPaginationBar
        totalItems={100}
        showItemsPerPageControl
        showGoToPageControl
        rangeLabelType="data"
      />
    </div>
  ),
  name: "Pagination range label type",
};

/**
 * 'Item' can be changed to a custom label by setting the `itemLabel` prop. Any occurrences of 'Item' in the pagination bar will be replaced with the custom label.
 */
export const PaginationItemLabel = {
  render: () => (
    <div
      style={{
        height: "150px",
      }}
    >
      <IcPaginationBar
        totalItems={100}
        showItemsPerPageControl
        showGoToPageControl
        rangeLabelType="data"
        itemLabel="Image"
      />
    </div>
  ),
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
  render: () => (
    <div
      style={{
        height: "150px",
      }}
    >
      <IcPaginationBar
        totalItems={100}
        showItemsPerPageControl
        type="complex"
      />
    </div>
  ),
  name: "Pagination type",
};

/**
 * The pagination elements can be aligned to the `right` (default), `left` or `space-between`. The default alignment is `right`.
 */
export const AlignmentLeft = {
  render: () => (
    <div
      style={{
        height: "150px",
      }}
    >
      <IcPaginationBar
        totalItems={100}
        alignment="left"
        showItemsPerPageControl
        showGoToPageControl
      />
    </div>
  ),
  name: "Alignment left",
};

export const AlignmentSpaceBetween = {
  render: () => (
    <div
      style={{
        height: "150px",
      }}
    >
      <IcPaginationBar
        totalItems={100}
        alignment="space-between"
        showItemsPerPageControl
        showGoToPageControl
      />
    </div>
  ),
  name: "Alignment space-between",
};

/**
 * If the pagination bar becomes cluttered due to the number of pagination elements displayed, the range label can be hidden by setting the `hideRangeLabel` prop to `true`.
 */
export const HideRangeLabel = {
  render: () => (
    <div
      style={{
        height: "150px",
      }}
    >
      <IcPaginationBar
        totalItems={100}
        hideRangeLabel
        showItemsPerPageControl
        showGoToPageControl
      />
    </div>
  ),
  name: "Hide range label",
};

/**
 * If you have a predefined list of items you want in the itemsPerPage select, the 'All' option can be hidden by setting `hideAllFromItemsPerPage` to `true`.
 */
export const HideAllFromItemsPerPage = {
  render: () => (
    <div
      style={{
        height: "150px",
      }}
    >
      <IcPaginationBar
        totalItems="100"
        showItemsPerPageControl
        showGoToPageControl
        hideAllFromItemsPerPage
      />
    </div>
  ),
  name: "Hide 'All' from items per page",
};

/**
 * When the 'items per page' value changes, setting `setToFirstPageOnPaginationChange` to `true` will set the pagination to the first page.
 */
export const SetToFirstPage = {
  render: () => (
    <div
      style={{
        height: "150px",
      }}
    >
      <IcPaginationBar
        totalItems="100"
        showItemsPerPageControl
        showGoToPageControl
        setToFirstPageOnPaginationChange
      />
    </div>
  ),
  name: "Set to first page when items per page changes",
};

/**
 * The `selectedItemsPerPage` prop can be used to programmatically set the items per page dropdown option.
 */
export const SelectedItemsPerPage = {
  render: () => (
    <div
      style={{
        height: "150px",
      }}
    >
      <IcPaginationBar
        totalItems="100"
        showItemsPerPageControl
        showGoToPageControl
        selectedItemsPerPage="25"
      />
    </div>
  ),
  name: "Set the selected items per page",
};

/**
 * The `selectedItemsPerPage` prop can be used to programmatically set the selected items per page dropdown option. If provided, this prop must match one of the items per page dropdown options, otherwise an error appears on the console and the prop is ignored.
 */
export const SelectedItemsPerPageToInvalidValue = {
  render: () => (
    <div
      style={{
        height: "150px",
      }}
    >
      <IcPaginationBar
        totalItems="100"
        showItemsPerPageControl
        showGoToPageControl
        selectedItemsPerPage="99"
      />
    </div>
  ),
  name: "Set the selected items per page to an invalid value",
};

/**
 * The `currentPage` prop can be used to programmatically set the current page.
 */
export const SetCurrentPage = {
  render: () => (
    <div
      style={{
        height: "150px",
      }}
    >
      <IcPaginationBar
        totalItems="100"
        showItemsPerPageControl
        showGoToPageControl
        currentPage="3"
      />
    </div>
  ),
  name: "Set the current page",
};

/**
 * The `currentPage` prop can be used to programmatically set the current page. If provided, this prop must be greater than 0 and less than or equal to the total number of pages, otherwise an error appears on the console and the prop is ignored.
 */
export const SetCurrentPageToInvalidValue = {
  render: () => (
    <div
      style={{
        height: "150px",
      }}
    >
      <IcPaginationBar
        totalItems="100"
        showItemsPerPageControl
        showGoToPageControl
        currentPage="-1"
      />
    </div>
  ),
  name: "Set the current page to an invalid value",
};

/**
 * The buttons to go to the first and last pages can be hidden by setting the `hideFirstAndLastPageButton` prop to `true`.
 */
export const HideFirstAndLastPageButtons = {
  render: () => (
    <div
      style={{
        height: "150px",
      }}
    >
      <IcPaginationBar
        totalItems="100"
        showItemsPerPageControl
        showGoToPageControl
        hideFirstAndLastPageButton
      />
    </div>
  ),
  name: "Hide first and last page buttons",
};

/**
 * When using the `simple` pagination type, the current page label can be hidden by setting the `hideCurrentPage` prop to `true`.
 */
export const HideCurrentPage = {
  render: () => (
    <div
      style={{
        height: "150px",
      }}
    >
      <IcPaginationBar
        totalItems="100"
        showItemsPerPageControl
        showGoToPageControl
        hideCurrentPage
      />
    </div>
  ),
  name: "Hide current page label",
};

const defaultArgs = {
  accessibleLabel: "Pagination Navigation",
  alignment: "right",
  currentPage: 1,
  hideCurrentPage: false,
  hideFirstAndLastPageButton: false,
  hideRangeLabel: false,
  itemLabel: "Item",
  itemsPerPageOptions: [
    { label: "10", value: "10" },
    { label: "25", value: "25" },
    { label: "50", value: "50" },
  ],
  monochrome: false,
  pageLabel: "Page",
  rangeLabelType: "page",
  selectedItemsPerPage: "10",
  selectItemsPerPageOnEnter: true,
  setToFirstPageOnPaginationChange: false,
  showItemsPerPageControl: true,
  showGoToPageControl: true,
  totalItems: 100,
  type: "simple",
  theme: "inherit",
};

/**
 * Go to the <ic-link href="/?path=/story/react-components-pagination-bar--playground">separate page for the playground example</ic-link> to view the prop controls.
 */
export const Playground = {
  render: (args) => {
    const [ updateArgs] = useArgs();

    const updatePageNum = (ev) => {
      updateArgs({ currentPage: ev.detail.value });
    };
    return (
      <IcPaginationBar
        accessibleLabel={args.accessibleLabel}
        alignment={args.alignment}
        currentPage={args.currentPage}
        hideCurrentPage={args.hideCurrentPage}
        hideFirstAndLastPageButton={args.hideFirstAndLastPageButton}
        hideRangeLabel={args.hideRangeLabel}
        itemLabel={args.itemLabel}
        itemsPerPageOptions={args.itemsPerPageOptions}
        pageLabel={args.pageLabel}
        rangeLabelType={args.rangeLabelType}
        selectedItemsPerPage={args.selectedItemsPerPage}
        selectItemsPerPageOnEnter={args.selectItemsPerPageOnEnter}
        setToFirstPageOnPaginationChange={args.setToFirstPageOnPaginationChange}
        showItemsPerPageControl={args.showItemsPerPageControl}
        showGoToPageControl={args.showGoToPageControl}
        totalItems={args.totalItems}
        type={args.type}
        onIcPageChange={updatePageNum}
        monochrome={args.monochrome}
        theme={args.theme}
      ></IcPaginationBar>
    );
  },
  args: defaultArgs,
  argTypes: {
    alignment: {
      options: ["left", "right", "space-between"],
      control: { type: "inline-radio" },
    },
    rangeLabelType: {
      options: ["page", "data"],
      control: { type: "inline-radio" },
    },
    type: {
      options: ["simple", "complex"],
      control: { type: "inline-radio" },
    },
    theme: {
      options: ["inherit", "light", "dark"],
      control: { type: "inline-radio" },
    },
  },
  name: "Playground",
};
