/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress/react";
import {
  FullWidth,
  Compact,
  LeftAligned,
  CustomConnectorWidth,
  CustomCompact,
  WithoutHeadings,
  WithHiddenStepInformation,
  Light,
  SmallConnectorWidth,
} from "./IcStepperTestData";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const STEPPER_SELECTOR = "ic-stepper";
const DEFAULT_TEST_THRESHOLD = 0.007;

describe("IcStepper visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.viewport(1024, 500);
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render a compact stepper", () => {
    mount(<Compact />);

    cy.checkHydrated(STEPPER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "compact",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.021),
    });
  });

  it("should render a custom compact stepper", () => {
    mount(<CustomCompact />);

    cy.checkHydrated(STEPPER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "custom-compact",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.041),
    });
  });

  it("should render a full width stepper", () => {
    mount(<FullWidth />);

    cy.checkHydrated(STEPPER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "full-width",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.015),
    });
  });

  it("should render a left aligned stepper", () => {
    mount(<LeftAligned />);

    cy.checkHydrated(STEPPER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "left-aligned",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.015),
    });
  });

  it("should render a custom stepper with custom connector width", () => {
    cy.mockResizeObserver(1024, 500);

    mount(<CustomConnectorWidth />);

    cy.checkHydrated(STEPPER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "custom-connector-width",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.05),
    });
  });

  it("should render a stepper without headings", () => {
    mount(<WithoutHeadings />);

    cy.checkHydrated(STEPPER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "without-step-titles",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.001),
    });
  });

  it("should render a stepper with hidden step information", () => {
    cy.mockResizeObserver(1024, 500);

    mount(<WithHiddenStepInformation />);

    cy.checkHydrated(STEPPER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "with-hidden-step-information",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render a light stepper", () => {
    mount(<Light />);

    cy.checkHydrated(STEPPER_SELECTOR);

    //cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "light",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.009),
    });
  });

  it("should render a stepper with step connect length of 100px if a connectorWidth under 100px is given", () => {
    cy.mockResizeObserver(1024, 500);

    mount(<SmallConnectorWidth />);

    cy.checkHydrated(STEPPER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "small-connector-width",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.05),
    });
  });
});

describe("IcStepper visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  beforeEach(() => {
    cy.viewport(1024, 500);
  });

  after(() => {
    cy.disableForcedColors();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render a compact stepper in high contrast mode", () => {
    mount(<Compact />);

    cy.checkHydrated(STEPPER_SELECTOR);

    cy.compareSnapshot({
      name: "compact-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
    });
  });

  it("should render a full width stepper in high contrast mode", () => {
    mount(<FullWidth />);

    cy.checkHydrated(STEPPER_SELECTOR);

    cy.compareSnapshot({
      name: "full-width-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.015),
    });
  });

  it("should render a stepper with subtitles in high contrast mode", () => {
    cy.mockResizeObserver(1024, 500);

    mount(<CustomConnectorWidth />);

    cy.checkHydrated(STEPPER_SELECTOR);

    cy.compareSnapshot({
      name: "custom-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.049),
    });
  });
});
