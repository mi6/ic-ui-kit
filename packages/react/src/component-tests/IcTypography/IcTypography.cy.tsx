/* eslint-disable react/jsx-no-bind */
/// <reference types='Cypress' />

import { mount } from "cypress/react";
import React from "react";
import {
  Variants,
  Bold,
  BoldOnH2,
  Italic,
  Strikethrough,
  Underline,
  VerticalMargins,
  Restyled,
  Truncation,
  MinAndMax,
  AllPropTextStyles,
  InAGGrid,
} from "./IcTypographyTestData";
import { HAVE_TEXT } from "../utils/constants";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";
import "cypress-axe";

const TYPOGRAPHY_SELECTOR = "ic-typography";
const DEFAULT_TEST_THRESHOLD = 0.008;

describe("IcTypography visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render all variants of IcTypography", () => {
    mount(<Variants />);

    cy.checkHydrated(TYPOGRAPHY_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "variants",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.074),
    });
  });

  it("should render bold typography", () => {
    mount(<Bold />);

    cy.checkHydrated(TYPOGRAPHY_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "bold",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.069),
    });
  });

  it("bold prop should have no impact on variants that already use an equivalent or higher font weight", () => {
    mount(<BoldOnH2 />);

    cy.checkHydrated(TYPOGRAPHY_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "bold-on-h2",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render italic typography", () => {
    mount(<Italic />);

    cy.checkHydrated(TYPOGRAPHY_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "italic",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.078),
    });
  });

  it("should render strikethrough typography", () => {
    mount(<Strikethrough />);

    cy.checkHydrated(TYPOGRAPHY_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "strikethrough",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.068),
    });
  });

  it("should render underline typography", () => {
    mount(<Underline />);

    cy.checkHydrated(TYPOGRAPHY_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "underline",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.079),
    });
  });

  it("should render IcTypography with vertical margins", () => {
    mount(<VerticalMargins />);

    cy.checkHydrated(TYPOGRAPHY_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "vertical-margins",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.06),
    });
  });

  it("should render restyled typography", () => {
    mount(<Restyled />);

    cy.checkHydrated(TYPOGRAPHY_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "restyled",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render truncated typography - truncated", () => {
    mount(<Truncation />);

    cy.checkHydrated(TYPOGRAPHY_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "truncation",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.071),
    });
  });

  it("should render truncated typography - expanded", () => {
    mount(<Truncation />);

    cy.checkHydrated(TYPOGRAPHY_SELECTOR);
    cy.findShadowEl(TYPOGRAPHY_SELECTOR, ".trunc-btn").should(
      HAVE_TEXT,
      "See more"
    );
    cy.findShadowEl(TYPOGRAPHY_SELECTOR, ".trunc-btn").click();
    cy.findShadowEl(TYPOGRAPHY_SELECTOR, ".trunc-btn").should(
      HAVE_TEXT,
      "See less"
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "truncation-expanded",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.164),
    });
  });

  it("should render min and max content", () => {
    mount(<MinAndMax />);

    cy.checkHydrated(TYPOGRAPHY_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "min-and-max",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.181),
    });
  });

  it("should render all prop text styles", () => {
    mount(<AllPropTextStyles />);

    cy.checkHydrated(TYPOGRAPHY_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "all-prop-text-styles",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.074),
    });
  });

  it("should render as truncated in an AG Grid when there is not enough space", () => {
    mount(<InAGGrid />);

    cy.checkHydrated(TYPOGRAPHY_SELECTOR);

    cy.compareSnapshot({
      name: "in-ag-grid",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.046),
    });
  });
});

describe("IcTypography visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  after(() => {
    cy.disableForcedColors();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render all variants of IcTypography in high contrast mode", () => {
    mount(<Variants />);

    cy.checkHydrated(TYPOGRAPHY_SELECTOR);

    cy.compareSnapshot({
      name: "variants-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.066),
    });
  });

  it("should render truncated typography - truncated in high contrast mode", () => {
    mount(<Truncation />);

    cy.checkHydrated(TYPOGRAPHY_SELECTOR);

    cy.compareSnapshot({
      name: "truncation-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.062),
    });
  });

  it("should render all prop text styles in high contrast mode", () => {
    mount(<AllPropTextStyles />);

    cy.checkHydrated(TYPOGRAPHY_SELECTOR);

    cy.compareSnapshot({
      name: "all-prop-text-styles-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.071),
    });
  });
});
