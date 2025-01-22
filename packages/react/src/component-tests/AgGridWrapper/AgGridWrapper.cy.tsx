/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import { mount } from "cypress/react";
import React from "react";
import { AGGridLight, AGGridDark } from "./AgGridWrapperTestData";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const DEFAULT_TEST_THRESHOLD = 0.033;

describe("Visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.injectAxe();
    cy.viewport(1024, 768);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render", () => {
    mount(<AGGridLight />);

    cy.get("span.ag-header-expand-icon-collapsed").eq(1).click();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/ag-grid-light",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.003),
    });
  });

  it("should render dark", () => {
    mount(<AGGridDark />);

    cy.get("span.ag-header-expand-icon-collapsed").eq(1).click();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/ag-grid-dark",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });
});
