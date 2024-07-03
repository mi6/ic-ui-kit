/* eslint-disable react/jsx-no-bind */
/// <reference types='Cypress' />

import { mount } from "cypress/react";
import React from "react";
import {
  Default,
  TopPlacement,
  BottomPlacement,
  RightPlacement,
  LeftPlacement,
  Truncation,
  Chip,
} from "./IcTooltipTestData";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";
import "cypress-axe";

const TOOLTIP_SELECTOR = "ic-tooltip";
const DEFAULT_TEST_THRESHOLD = 0.041;

describe("IcTooltip visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render a default IcTooltip", () => {
    mount(<Default />);

    cy.checkHydrated(TOOLTIP_SELECTOR);
    cy.get("button").realHover("mouse");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.002),
      delay: 200,
    });
  });

  it("should render a tooltip with top placement - start", () => {
    mount(<TopPlacement />);

    cy.checkHydrated(TOOLTIP_SELECTOR);
    cy.get("#test-button-top-start").realHover("mouse");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "top-placement-start",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.008),
      delay: 200,
    });
  });

  it("should render a tooltip with top placement - top", () => {
    mount(<TopPlacement />);

    cy.checkHydrated(TOOLTIP_SELECTOR);
    cy.get("#test-button-top").realHover("mouse");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "top-placement",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.008),
      delay: 200,
    });
  });

  it("should render a tooltip with top placement - end", () => {
    mount(<TopPlacement />);

    cy.checkHydrated(TOOLTIP_SELECTOR);
    cy.get("#test-button-top-end").realHover("mouse");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "top-placement-end",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.01),
      delay: 200,
    });
  });

  it("should render a tooltip with bottom placement - start", () => {
    mount(<BottomPlacement />);

    cy.checkHydrated(TOOLTIP_SELECTOR);
    cy.get("#test-button-bottom-start").realHover("mouse");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "bottom-placement-start",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.012),
      delay: 200,
    });
  });

  it("should render a tooltip with bottom placement - bottom", () => {
    mount(<BottomPlacement />);

    cy.checkHydrated(TOOLTIP_SELECTOR);
    cy.get("#test-button-bottom").realHover("mouse");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "bottom-placement",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.012),
      delay: 200,
    });
  });

  it("should render a tooltip with bottom placement - end", () => {
    mount(<BottomPlacement />);

    cy.checkHydrated(TOOLTIP_SELECTOR);
    cy.get("#test-button-bottom-end").realHover("mouse");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "bottom-placement-end",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.013),
      delay: 200,
    });
  });

  it("should render a tooltip with right placement - start", () => {
    mount(<RightPlacement />);

    cy.checkHydrated(TOOLTIP_SELECTOR);
    cy.get("#test-button-right-start").realHover("mouse");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "right-placement-start",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.004),
      delay: 200,
    });
  });

  it("should render a tooltip with right placement - right", () => {
    mount(<RightPlacement />);

    cy.checkHydrated(TOOLTIP_SELECTOR);
    cy.get("#test-button-right").realHover("mouse");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "right-placement",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.007),
      delay: 200,
    });
  });

  it("should render a tooltip with right placement - end", () => {
    mount(<RightPlacement />);

    cy.checkHydrated(TOOLTIP_SELECTOR);
    cy.get("#test-button-right-end").realHover("mouse");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "right-placement-end",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.013),
      delay: 200,
    });
  });

  it("should render a tooltip with left placement - start", () => {
    mount(<LeftPlacement />);

    cy.checkHydrated(TOOLTIP_SELECTOR);
    cy.get("#test-button-left-start").realHover("mouse");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "left-placement-start",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.01),
      delay: 200,
    });
  });

  it("should render a tooltip with left placement - left", () => {
    mount(<LeftPlacement />);

    cy.checkHydrated(TOOLTIP_SELECTOR);
    cy.get("#test-button-left").realHover("mouse");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "left-placement",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.006),
      delay: 200,
    });
  });

  it("should render a tooltip with left placement - end", () => {
    mount(<LeftPlacement />);

    cy.checkHydrated(TOOLTIP_SELECTOR);
    cy.get("#test-button-left-end").realHover("mouse");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "left-placement-end",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.004),
      delay: 200,
    });
  });

  it("should render a tooltip with dark background", () => {
    mount(
      <div style={{ backgroundColor: "#333333", height: "100px" }}>
        <Default />
      </div>
    );

    cy.checkHydrated(TOOLTIP_SELECTOR);
    cy.get("button").realHover("mouse");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "dark-background",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.002),
      delay: 200,
    });
  });

  it("should render a tooltip with truncated text", () => {
    mount(<Truncation />);

    cy.checkHydrated(TOOLTIP_SELECTOR);
    cy.get("button").realHover("mouse");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "truncated-text",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.1),
      delay: 200,
    });
  });

  it("should render a tooltip on a chip", () => {
    mount(<Chip />);

    cy.checkHydrated(TOOLTIP_SELECTOR);
    cy.get("#small-chip").realHover("mouse");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "on-chip",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
      delay: 200,
    });
  });
});

describe("IcTooltip visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  after(() => {
    cy.disableForcedColors();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render a default IcTooltip in high contrast mode", () => {
    mount(<Default />);

    cy.checkHydrated(TOOLTIP_SELECTOR);
    cy.get("button").realHover("mouse");

    cy.compareSnapshot({
      name: "default-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.003),
      delay: 200,
    });
  });

  it("should render a tooltip with left placement in high contrast mode", () => {
    mount(<LeftPlacement />);

    cy.checkHydrated(TOOLTIP_SELECTOR);
    cy.get("#test-button-left").realHover("mouse");

    cy.compareSnapshot({
      name: "left-placement-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.006),
      delay: 200,
    });
  });
});
