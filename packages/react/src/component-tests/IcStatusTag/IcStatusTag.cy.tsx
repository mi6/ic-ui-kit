/* eslint-disable react/jsx-no-bind */
/// <reference types='Cypress' />

import { mount } from "cypress/react";
import React from "react";
import {
  Neutral,
  Success,
  Warning,
  Danger,
  AllStatusesSmall,
  AllStatuses,
  AllStatusesLarge,
} from "./IcStatusTagTestData";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";
import "cypress-axe";
import { HAVE_ATTR, HAVE_TEXT, NOT_HAVE_ATTR } from "../utils/constants";

const STATUS_TAG_SELECTOR = "ic-status-tag";
const DEFAULT_TEST_THRESHOLD = 0.02;

describe("IcStatusTag end-to-end, visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render neutral status tag", () => {
    mount(<Neutral />);

    cy.checkHydrated(STATUS_TAG_SELECTOR);

    cy.get(STATUS_TAG_SELECTOR).eq(0).should(HAVE_ATTR, "label", "Neutral");
    cy.findShadowEl(STATUS_TAG_SELECTOR, "ic-typography")
      .eq(0)
      .should(HAVE_TEXT, "Neutral");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "neutral",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.005),
    });
  });

  it("should render success status tag and add role='status' when announced is set to true", () => {
    mount(<Success />);

    cy.checkHydrated(STATUS_TAG_SELECTOR);

    cy.get(STATUS_TAG_SELECTOR).eq(0).should(HAVE_ATTR, "role", "status");
    cy.get(STATUS_TAG_SELECTOR).eq(1).should(NOT_HAVE_ATTR, "role", "status");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "success",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render warning status tag", () => {
    mount(<Warning />);

    cy.checkHydrated(STATUS_TAG_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "warning",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.015),
    });
  });

  it("should render danger status tag", () => {
    mount(<Danger />);

    cy.checkHydrated(STATUS_TAG_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "danger",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.007),
    });
  });

  it("should render small status tags", () => {
    mount(<AllStatusesSmall />);

    cy.checkHydrated(STATUS_TAG_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "small",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.033),
    });
  });

  it("should render large status tags", () => {
    mount(<AllStatusesLarge />);

    cy.checkHydrated(STATUS_TAG_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "large",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.033),
    });
  });
});

describe("IcStatusTag visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  after(() => {
    cy.disableForcedColors();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render all status tags in high contrast mode", () => {
    mount(<AllStatuses />);

    cy.checkHydrated(STATUS_TAG_SELECTOR);

    cy.compareSnapshot({
      name: "high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.033),
    });
  });
});
