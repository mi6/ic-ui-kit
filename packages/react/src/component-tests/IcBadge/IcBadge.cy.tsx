/// <reference types="Cypress" />

import React from "react";
import { HAVE_ATTR, HAVE_CLASS, NOT_HAVE_ATTR } from "../utils/constants";
import { mount } from "cypress/react";
import {
  ShowHideBadge,
  BadgeTypes,
  AccessibleLabel,
  Default,
  MaxNumber,
  PositionNear,
  PositionInline,
  ThemeDark,
} from "./IcBadgeTestData";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const IC_BADGE_SELECTOR = "ic-badge";
const ARIA_LABEL = "aria-label";
const DEFAULT_TEST_THRESHOLD = 0.048;

describe("IcBadge end-to-end tests", () => {
  it("should show and hide the badge", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <ShowHideBadge />
      </div>
    );

    cy.checkHydrated(IC_BADGE_SELECTOR);
    cy.get("ic-button").click();
    cy.get("ic-badge").should(HAVE_CLASS, "ic-badge-hide");
    cy.get("ic-button").click();
    cy.get("ic-badge").should(HAVE_CLASS, "ic-badge-show");
  });

  it("should have more descriptive aria-label if prop set", () => {
    mount(<AccessibleLabel />);

    cy.checkHydrated(IC_BADGE_SELECTOR);
    cy.get("ic-button").should(HAVE_ATTR, ARIA_LABEL, " 1 notification found");
  });

  it("should remove ariaLabel from parent when the badge is not visible", () => {
    mount(<Default />);

    cy.checkHydrated(IC_BADGE_SELECTOR);
    cy.get("ic-button").should(HAVE_ATTR, ARIA_LABEL, " 1");

    cy.get("ic-badge").invoke("prop", "visible", false);

    cy.get("ic-button").should(NOT_HAVE_ATTR, ARIA_LABEL);
  });
});

describe("IcBadge visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render success variant", () => {
    mount(BadgeTypes("success"));

    cy.checkHydrated(IC_BADGE_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "success",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.012),
    });
  });

  it("should render error variant", () => {
    mount(BadgeTypes("error"));

    cy.checkHydrated(IC_BADGE_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "error",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.012),
    });
  });

  it("should render warning variant", () => {
    mount(BadgeTypes("warning"));

    cy.checkHydrated(IC_BADGE_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "warning",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.012),
    });
  });

  it("should render neutral variant", () => {
    mount(BadgeTypes("neutral"));

    cy.checkHydrated(IC_BADGE_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "neutral",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.012),
    });
  });

  it("should render light variant", () => {
    mount(BadgeTypes("light"));

    cy.checkHydrated(IC_BADGE_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "light",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.012),
    });
  });

  it("should render info variant", () => {
    mount(BadgeTypes("info"));

    cy.checkHydrated(IC_BADGE_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "info",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.012),
    });
  });

  it("should render custom variant", () => {
    mount(BadgeTypes("custom", "#F8C8DC"));

    cy.checkHydrated(IC_BADGE_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "custom",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.012),
    });
  });

  it("should render max number badge", () => {
    mount(<MaxNumber />);

    cy.checkHydrated(IC_BADGE_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "max-number",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.002),
    });
  });

  it("should render badge with position near", () => {
    mount(<PositionNear />);

    cy.checkHydrated(IC_BADGE_SELECTOR);

    cy.wait(500);
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "position-near",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.003),
    });
  });

  it("should render badge with position inline", () => {
    cy.viewport(700, 500);
    mount(<PositionInline />);

    cy.checkHydrated(IC_BADGE_SELECTOR);

    cy.wait(500);
    cy.checkA11yWithWait(undefined, 100);
    cy.compareSnapshot({
      name: "position-inline",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render badge with dark theme", () => {
    mount(<ThemeDark />);

    cy.checkHydrated(IC_BADGE_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "theme-dark",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });
});

describe.skip("IcBadge visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  after(() => {
    cy.disableForcedColors();
  });

  it("should render success variant in high contrast mode", () => {
    mount(BadgeTypes("success"));

    cy.checkHydrated(IC_BADGE_SELECTOR);

    cy.wait(500).compareSnapshot({
      name: "success-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render error variant in high contrast mode", () => {
    mount(BadgeTypes("error"));

    cy.checkHydrated(IC_BADGE_SELECTOR);

    cy.compareSnapshot({
      name: "error-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
    });
  });

  it("should render warning variant in high contrast mode", () => {
    mount(BadgeTypes("warning"));

    cy.checkHydrated(IC_BADGE_SELECTOR);

    cy.compareSnapshot({
      name: "warning-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
    });
  });

  it("should render neutral variant in high contrast mode", () => {
    mount(BadgeTypes("neutral"));

    cy.checkHydrated(IC_BADGE_SELECTOR);

    cy.compareSnapshot({
      name: "neutral-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
    });
  });

  it("should render light variant in high contrast mode", () => {
    mount(BadgeTypes("light"));

    cy.checkHydrated(IC_BADGE_SELECTOR);

    cy.compareSnapshot({
      name: "light-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
    });
  });

  it("should render info variant in high contrast mode", () => {
    mount(BadgeTypes("info"));

    cy.checkHydrated(IC_BADGE_SELECTOR);

    cy.compareSnapshot({
      name: "info-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
    });
  });
});
