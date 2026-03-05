/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useArgs } from "storybook/preview-api";
import React from "react";
import { IcPaginationBar } from "../components";

export default {
  title: "Pagination Bar",
  component: IcPaginationBar,
};

export const Basic = {
  render: () => <IcPaginationBar totalItems={100} />,
  name: "Basic",
};

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
