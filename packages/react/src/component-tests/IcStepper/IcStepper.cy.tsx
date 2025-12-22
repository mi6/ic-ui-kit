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
  LightCompact,
  Disabled,
  Internationalisation,
  ICI18N,
  SlottedHeading,
} from "./IcStepperTestData";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";
import {
  BE_VISIBLE,
  HAVE_ATTR,
  HAVE_CSS,
  HAVE_LENGTH,
  HAVE_TEXT,
  NOT_BE_VISIBLE,
} from "../utils/constants";
import { CYPRESS_AXE_OPTIONS } from "../../../cypress/utils/a11y";

const STEPPER_SELECTOR = "ic-stepper";
const DEFAULT_TEST_THRESHOLD = 0.005;

const DISABLED_STEP_AXE_OPTIONS = {
  rules: {
    ...CYPRESS_AXE_OPTIONS.rules,
    "color-contrast": { enabled: false },
  },
};

describe("IcStepper end-to-end, visual regression and a11y tests", () => {
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
    cy.get("ic-step[type='current']").should(BE_VISIBLE);
    cy.get("ic-step:not([type='current'])").should(NOT_BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/compact",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
    });
  });

  it("should render a custom compact stepper", () => {
    mount(<CustomCompact />);

    cy.checkHydrated(STEPPER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/custom-compact",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.033),
    });
  });

  it("should render translated compact stepper", () => {
    mount(<Internationalisation />);

    cy.checkHydrated(STEPPER_SELECTOR);

    // Check that the translations have been applied
    cy.findShadowEl("ic-step", ".current .next-step").should(
      HAVE_TEXT,
      `${ICI18N.next} ${ICI18N.step}: Update`
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/i18n-compact",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.033),
    });
  });

  it("should render a full width stepper", () => {
    mount(<FullWidth />);

    cy.checkHydrated(STEPPER_SELECTOR);
    cy.get("ic-step").should(HAVE_LENGTH, 3);
    cy.findShadowEl("ic-step", ".step-connect").should(HAVE_LENGTH, 2);

    cy.findShadowEl("ic-step", ".step-icon-inner")
      .eq(0)
      .find(".check-icon")
      .should(BE_VISIBLE);
    cy.findShadowEl("ic-step", ".step-icon-inner").eq(1).should(HAVE_TEXT, "2");
    cy.findShadowEl("ic-step", ".step-icon-inner").eq(2).should(HAVE_TEXT, "3");

    cy.checkA11yWithWait();

    cy.compareSnapshot({
      name: "/full-width",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.012),
    });
  });

  it("should render a left aligned stepper", () => {
    mount(<LeftAligned />);

    cy.checkHydrated(STEPPER_SELECTOR);

    cy.checkA11yWithWait();

    cy.compareSnapshot({
      name: "/left-aligned",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.012),
    });
  });

  it("should render a custom stepper with custom connector width", () => {
    cy.mockResizeObserver(1024, 500);

    mount(<CustomConnectorWidth />);

    cy.checkHydrated(STEPPER_SELECTOR);

    cy.checkA11yWithWait();

    cy.compareSnapshot({
      name: "/custom-connector-width",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.041),
    });
  });

  it("should render a stepper without headings", () => {
    mount(<WithoutHeadings />);

    cy.checkHydrated(STEPPER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/without-step-titles",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.002),
    });
  });

  it("should render a stepper with hidden step information", () => {
    cy.mockResizeObserver(1024, 500);

    mount(<WithHiddenStepInformation />);

    cy.checkHydrated(STEPPER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/with-hidden-step-information",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render a stepper with slotted headings", () => {
    mount(<SlottedHeading />);

    cy.checkHydrated(STEPPER_SELECTOR);

    cy.compareSnapshot({
      name: "/with-slotted-headings",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.003),
    });
  });

  it("should render a stepper with slotted headings - compact", () => {
    cy.viewport(500, 700);
    mount(<SlottedHeading />);

    cy.checkHydrated(STEPPER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/with-slotted-headings-compact",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.006),
    });
  });

  it("should render a light stepper in dark mode", () => {
    cy.mockResizeObserver(1024, 500);

    mount(<Light />);

    cy.checkHydrated(STEPPER_SELECTOR);

    cy.checkA11yWithWait();

    cy.compareSnapshot({
      name: "/light",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.036),
    });
  });

  it("should render a light compact stepper in dark mode", () => {
    mount(<LightCompact />);

    cy.checkHydrated(STEPPER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/light-compact",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.037),
    });
  });

  it("should render a stepper with step connect length of 100px if a connectorWidth under 100px is given", () => {
    cy.mockResizeObserver(1024, 500);

    mount(<SmallConnectorWidth />);

    cy.checkHydrated(STEPPER_SELECTOR);
    cy.get(STEPPER_SELECTOR).should(HAVE_ATTR, "connector-width", "80");
    cy.findShadowEl("ic-step", ".step-connect").should(
      HAVE_CSS,
      "width",
      "100px"
    );

    cy.checkA11yWithWait();

    cy.compareSnapshot({
      name: "/small-connector-width",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.04),
    });
  });

  it("should render a stepper with disabled steps", () => {
    mount(<Disabled />);

    cy.checkHydrated(STEPPER_SELECTOR);

    cy.checkA11yWithWait(undefined, undefined, DISABLED_STEP_AXE_OPTIONS);

    cy.compareSnapshot({
      name: "/disabled-steps",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.08),
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
      name: "/compact-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
    });
  });

  it("should render a full width stepper in high contrast mode", () => {
    mount(<FullWidth />);

    cy.checkHydrated(STEPPER_SELECTOR);

    cy.compareSnapshot({
      name: "/full-width-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.018),
    });
  });

  it("should render a stepper with disabled steps in high contrast mode", () => {
    mount(<Disabled />);

    cy.checkHydrated(STEPPER_SELECTOR);

    cy.compareSnapshot({
      name: "/disabled-steps-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
    });
  });

  it("should render a stepper with subtitles in high contrast mode", () => {
    cy.mockResizeObserver(1024, 500);

    mount(<CustomConnectorWidth />);

    cy.checkHydrated(STEPPER_SELECTOR);

    cy.compareSnapshot({
      name: "/custom-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.06),
    });
  });
});
