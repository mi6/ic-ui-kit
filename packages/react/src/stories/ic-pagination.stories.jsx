/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { IcPagination } from "../components";

const defaultArgs = {
  accessibleLabel: "Pagination Navigation",
  adjacentPageCount: 1,
  boundaryPageCount: 1,
  defaultPage: 1,
  disabled: false,
  hideCurrentPage: false,
  hideFirstAndLastPageButton: false,
  label: "",
  monochrome: false,
  pages: 15,
  paginationType: "simple",
  theme: "inherit",
};

export default {
  title: "Pagination",
  component: IcPagination,
};

export const Simple = {
  render: () => (
    <>
      <p>Default appearance</p>
    <IcPagination pages="15" />
    <br />
    <p>Hidden current page</p>
    <IcPagination pages="15" hideCurrentPage />
    <br />
    <p>Hidden first and last buttons</p>
    <IcPagination pages="15" hideFirstAndLastPageButton />
    <br />
    <p>Default page</p>
    <IcPagination pages="15" defaultPage="3" />
    <br />
    <p>Disabled</p>
    <IcPagination pages="15" defaultPage="3" disabled />
    <br />
    <p>Label set</p>
    <IcPagination pages="15" label="Label" />
    </>
  ),
  name: "Simple",
};

export const Complex = {
  render: () => (
    <>
      <p>Default appearance</p>
    <IcPagination pages="15" type="complex" />
    <br />
    <p>Hidden first and last buttons</p>
    <IcPagination pages="15" type="complex" hideFirstAndLastPageButton />
    <br />
    <p>Default page</p>
    <IcPagination pages="15" type="complex" defaultPage={7} />
    <br />
    <p>Disabled</p>
    <IcPagination pages="15" type="complex" disabled />
    </>
  ),
  name: "Complex",
};

export const ComplexAdjacentBoundaryItemsSet = {
  render: () => (
    <div>
      <p
        style={{
          padding: 10,
        }}
      >
        Adjacent: 0, Boundary: 0
      </p>
      <IcPagination
        pages="15"
        type="complex"
        adjacentPageCount="0"
        boundaryPageCount="0"
      />
      <br />
      <p
        style={{
          padding: 10,
        }}
      >
        Adjacent: 0, Boundary: 1
      </p>
      <IcPagination
        pages="15"
        type="complex"
        adjacentPageCount="0"
        boundaryPageCount="1"
      />
      <br />
      <p
        style={{
          padding: 10,
        }}
      >
        Adjacent: 0, Boundary: 2
      </p>
      <IcPagination
        pages="15"
        type="complex"
        adjacentPageCount="0"
        boundaryPageCount="2"
      />
      <br />
      <p
        style={{
          padding: 10,
        }}
      >
        Adjacent: 1, Boundary: 0
      </p>
      <IcPagination
        pages="15"
        type="complex"
        adjacentPageCount="1"
        boundaryPageCount="0"
      />
      <br />
      <p
        style={{
          padding: 10,
        }}
      >
        Adjacent: 2, Boundary: 0
      </p>
      <IcPagination
        pages="15"
        type="complex"
        adjacentPageCount="2"
        boundaryPageCount="0"
      />
      <br />
      <p
        style={{
          padding: 10,
        }}
      >
        Adjacent: 1, Boundary: 1
      </p>
      <IcPagination pages="15" type="complex" />
      <br />
      <p
        style={{
          padding: 10,
        }}
      >
        Adjacent: 2, Boundary: 2
      </p>
      <IcPagination
        pages="15"
        type="complex"
        adjacentPageCount="2"
        boundaryPageCount="2"
      />
    </div>
  ),

  name: "Complex - Adjacent & Boundary Items Set",
};

export const Playground = {
  render: (args) => (
    <IcPagination
      accessibleLabel={args.accessibleLabel}
      pages={args.pages}
      type={args.paginationType}
      adjacentPageCount={args.adjacentPageCount}
      boundaryPageCount={args.boundaryPageCount}
      label={args.label}
      disabled={args.disabled}
      defaultPage={args.defaultPage}
      hideFirstAndLastPageButton={args.hideFirstAndLastPageButton}
      hideCurrentPage={args.hideCurrentPage}
      theme={args.theme}
      monochrome={args.monochrome}
    />
  ),

  name: "Playground",
  args: defaultArgs,

  argTypes: {
    paginationType: {
      options: ["simple", "complex"],

      control: {
        type: "inline-radio",
      },
    },

    theme: {
      options: ["inherit", "light", "dark"],

      control: {
        type: "inline-radio",
      },
    },
  },
};
