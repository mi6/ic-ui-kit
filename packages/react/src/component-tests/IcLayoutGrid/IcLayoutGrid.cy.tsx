/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import { mount } from "cypress/react";
import React from "react";
import {
  DefaultLayoutGrid,
  LayoutGridWithLayoutGridItem,
} from "./IcLayoutGridData";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const DEFAULT_TEST_THRESHOLD = 0.012;
const LAYOUT_GRID_SELECTOR = "ic-layout-grid";

describe("IcLayoutGrid visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.viewport(1024, 750);
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render default left aligned layout grid", () => {
    mount(<DefaultLayoutGrid columns={4} />);

    cy.checkHydrated(LAYOUT_GRID_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/default-left-aligned",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render center aligned layout grid", () => {
    mount(<DefaultLayoutGrid aligned="center" columns={4} />);

    cy.checkHydrated(LAYOUT_GRID_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/center-aligned",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
    });
  });

  it("should render full width layout grid", () => {
    mount(<DefaultLayoutGrid aligned="full-width" columns={4} />);

    cy.checkHydrated(LAYOUT_GRID_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/full-width",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
    });
  });

  it("should render full height layout grid", () => {
    mount(<DefaultLayoutGrid fullHeight columns={4} />);

    cy.checkHydrated(LAYOUT_GRID_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/full-height",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.04),
    });
  });

  it("should render with default column width", () => {
    mount(<DefaultLayoutGrid columns={4} defaultColWidth="100px" />);

    cy.checkHydrated(LAYOUT_GRID_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/default-column-width",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.03),
    });
  });

  it("should render with default column span", () => {
    mount(<DefaultLayoutGrid columns={4} defaultColSpan={2} />);

    cy.checkHydrated(LAYOUT_GRID_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/default-column-span",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
    });
  });

  it("should render with different columns at different breakpoints", () => {
    mount(
      <DefaultLayoutGrid
        columns={{
          xs: 1,
          sm: 2,
          md: 2,
          lg: 4,
          xl: 4,
        }}
        type="fixed"
      />
    );

    cy.checkHydrated(LAYOUT_GRID_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/responsive-4-columns",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });

    cy.viewport(770, 750);

    cy.compareSnapshot({
      name: "/responsive-2-columns",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });

    cy.viewport(550, 750);

    cy.compareSnapshot({
      name: "/responsive-1-column",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render with different col spans at different breakpoints", () => {
    mount(
      <DefaultLayoutGrid
        columns={4}
        defaultColSpan={{
          xs: 4,
          sm: 2,
          md: 2,
          lg: 1,
          xl: 1,
        }}
        type="fixed"
      />
    );

    cy.checkHydrated(LAYOUT_GRID_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/responsive-col-span-1",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.03),
    });

    cy.viewport(770, 750);

    cy.compareSnapshot({
      name: "/responsive-col-span-2",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
    });

    cy.viewport(550, 750);

    cy.compareSnapshot({
      name: "/responsive-col-span-4",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
    });
  });

  it("should render with rows", () => {
    mount(<DefaultLayoutGrid columns={3} rows={2} />);

    cy.checkHydrated(LAYOUT_GRID_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/with-rows",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.01),
    });
  });

  it("should render with layout grid items", () => {
    mount(<LayoutGridWithLayoutGridItem />);

    cy.checkHydrated(LAYOUT_GRID_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/with-layout-grid-items",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
    });
  });

  it("should render with layout grid items hidden in mobile mode", () => {
    mount(<LayoutGridWithLayoutGridItem />);

    cy.viewport(550, 750);

    cy.checkHydrated(LAYOUT_GRID_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/with-layout-grid-items-hidden-in-mobile-mode",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.05),
    });
  });
});
