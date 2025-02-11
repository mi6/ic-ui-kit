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

  name: "Alignment space between",
};

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

export const Playground = {
  render: (args) => {
    const [{ value }, updateArgs] = useArgs();

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
