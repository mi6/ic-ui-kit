/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { IcPagination } from "../components";

const defaultArgs = {
  pages: 15,
  paginationType: "simple",
  appearance: "default",
  hideCurrentPage: false,
  hideFirstAndLastPageButton: false,
  defaultPage: 1,
  disabled: false,
  label: "",
  adjacentCount: 1,
  boundaryCount: 1,
};

export default {
  title: "Pagination",
  component: IcPagination,
};

export const Simple = {
  render: () => (
    <>
      <p>Default/Dark/Light appearance</p>
    <IcPagination pages="15" />
    <br />
    <IcPagination pages="20" appearance="dark" />
    <br />
    <div
      style={{
        backgroundColor: "#2c2f34",
        width: "fit-content",
        padding: "6px 8px",
      }}
    >
      <IcPagination pages="15" appearance="light" />
    </div>
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
      <p>Default/Dark/Light appearance</p>
    <IcPagination pages="15" type="complex" />
    <IcPagination pages="15" type="complex" appearance="dark" />
    <div
      style={{
        backgroundColor: "#2c2f34",
        width: "fit-content",
        padding: "6px 8px",
      }}
    >
      <IcPagination pages="15" type="complex" appearance="light" />
    </div>
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
        adjacentCount="0"
        boundaryCount="0"
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
        adjacentCount="0"
        boundaryCount="1"
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
        adjacentCount="0"
        boundaryCount="2"
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
        adjacentCount="1"
        boundaryCount="0"
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
        adjacentCount="2"
        boundaryCount="0"
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
        adjacentCount="2"
        boundaryCount="2"
      />
    </div>
  ),

  name: "Complex - Adjacent & Boundary Items Set",
};

export const Playground = {
  render: (args) => (
    <div
      style={{
        backgroundColor: args.appearance == "light" ? "black" : null,
        width: "fit-content",
      }}
    >
      <IcPagination
        pages={args.pages}
        type={args.paginationType}
        adjacentCount={args.adjacentCount}
        boundaryCount={args.boundaryCount}
        label={args.label}
        disabled={args.disabled}
        defaultPage={args.defaultPage}
        hideFirstAndLastPageButton={args.hideFirstAndLastPageButton}
        hideCurrentPage={args.hideCurrentPage}
        appearance={args.appearance}
      />
    </div>
  ),

  name: "Playground",
  args: defaultArgs,

  argTypes: {
    paginationType: {
      control: {
        type: "inline-radio",
      },

      options: ["simple", "complex"],
    },

    appearance: {
      control: {
        type: "inline-radio",
      },

      options: ["default", "dark", "light"],
    },
  },
};
