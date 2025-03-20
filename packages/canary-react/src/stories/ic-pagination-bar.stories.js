/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useArgs } from "@storybook/preview-api";
import React from "react";
import readme from "../../../canary-web-components/src/components/ic-pagination-bar/readme.md";
import { IcPaginationBar } from "../components";

const defaultArgs = {
  alignment: "right",
  appearance: "default",
  currentPage: 1,
  hideAllFromItemsPerPage: false,
  hideRangeLabel: false,
  itemLabel: "Item",
  itemsPerPageOptions: [
    { label: "10", value: "10" },
    { label: "25", value: "25" },
    { label: "50", value: "50" },
  ],
  pageLabel: "Page",
  rangeLabelType: "page",
  setToFirstPageOnPaginationChange: false,
  showItemsPerPageControl: true,
  showGoToPageControl: true,
  totalItems: 100,
  type: "simple",
};

export default {
  title: "React Components/Pagination Bar",
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
 * There is one required prop for the pagination bar:
 * - totalItems: `number`
 * 
 * Click the 'Component API' tab to view all the available props, events and slots for pagination bar.
 * 
 * To use the pagination bar component, import `@ukic/canary-react` into your application.
 */
export const Basic = {
  render: () => (
    <div
      style={{
        height: "120px",
      }}
    >
      <IcPaginationBar totalItems={100} />
    </div>
  ),

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
      <IcPaginationBar totalItems={100} showItemsPerPageControl />
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
 * - `simple`: \[default]: Display the total number of pages and the current page number.
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
 * - `simple`: \[default]: Display the current page as a label with back and next buttons.
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

  name: "Alignment space between",
};

/**
 * The background colour of the pagination bar can be customized by adding a background colour to the parent element. The `appearance` prop can be set to `light` or `dark` to change the appearance of the pagination bar labels.
 */
export const Appearance = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        height: "220px",
      }}
    >
      <div
        style={{
          backgroundColor: "var(--ic-architectural-black)",
        }}
      >
        <IcPaginationBar
          totalItems={100}
          appearance="light"
          showItemsPerPageControl
          showGoToPageControl
        />
      </div>
      <div
        style={{
          backgroundColor: "var(--ic-status-info-contrast)",
        }}
      >
        <IcPaginationBar
          totalItems={100}
          appearance="dark"
          showItemsPerPageControl
          showGoToPageControl
        />
      </div>
    </div>
  ),

  name: "Appearance",
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
      <div
        style={{
          backgroundColor: "var(--ic-architectural-100)",
        }}
      >
        <IcPaginationBar
          totalItems={100}
          appearance="dark"
          hideRangeLabel
          showItemsPerPageControl
          showGoToPageControl
        />
      </div>
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

  name: "Hide all from items per page",
};

/**
 * If you would prefer to reset to the first page when changing the itemsPerPage, the set `setToFirstPageOnPaginationChange` to `true`.
 */
export const SetToFirstPageWhenItemsPerPageChanges = {
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
export const SetTheSelectedItemsPerPage = {
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
 * If provided, this prop must match one of the items per page dropdown options, otherwise an error appears on the console and the prop is ignored.
 */
export const SetTheSelectedItemsPerPageToInvalidValue = {
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
export const SetTheCurrentPage = {
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
 * If provided, this prop must be greater than 0 and less than or equal to the total number of pages, otherwise an error appears on the console and the prop is ignored.
 */
export const SetTheCurrentPageToInvalidValue = {
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
 * Go to the <ic-link href="/?path=/story/react-components-pagination-bar--playground">separate page for the playground example</ic-link> to view the prop controls.
 */
export const Playground = {
  render: () => {
    const [args, updateArgs] = useArgs();

    const updatePageNum = (ev) => {
      updateArgs({
        currentPage: ev.detail.value,
      });
    };

    return (
      <IcPaginationBar
          alignment={args.alignment}
          appearance={args.appearance}
          currentPage={args.currentPage}
          hideAllFromItemsPerPage={args.hideAllFromItemsPerPage}
          hideRangeLabel={args.hideRangeLabel}
          itemLabel={args.itemLabel}
          itemsPerPageOptions={args.itemsPerPageOptions}
          pageLabel={args.pageLabel}
          rangeLabelType={args.rangeLabelType}
          selectedItemsPerPage={args.selectedItemsPerPage}
          setToFirstPageOnPaginationChange={args.setToFirstPageOnPaginationChange}
          showItemsPerPageControl={args.showItemsPerPageControl}
          showGoToPageControl={args.showGoToPageControl}
          totalItems={args.totalItems}
          type={args.type}
          onIcPageChange={updatePageNum}
      ></IcPaginationBar>
    );
  },

  args: defaultArgs,

  argTypes: {
    alignment: {
      options: ["left", "right", "space-between"],

      control: {
        type: "inline-radio",
      },
    },

    appearance: {
      options: ["default", "dark", "light"],

      control: {
        type: "inline-radio",
      },
    },

    rangeLabelType: {
      options: ["page", "data"],

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
