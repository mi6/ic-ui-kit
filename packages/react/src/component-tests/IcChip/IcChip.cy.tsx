/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
import { IcChip } from "../../components";
import { mount } from "cypress/react";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";
import {
  SwitchColour,
  CustomColour,
  LongLabel,
  Disabled,
  Dismissible,
  WithIcon,
  WithBadgeSlot,
  InAGGrid,
  AllSizes,
  SingleDismissible,
  DismissibleWithIcon,
  Transparency,
} from "./IcChipTestData";
import {
  HAVE_BEEN_CALLED_ONCE,
  HAVE_PROP,
  NOT_BE_VISIBLE,
} from "../utils/constants";

const CHIP_SELECTOR = "ic-chip";
const DEFAULT_TEST_THRESHOLD = 0.032;

describe("IcChip end-to-end tests", () => {
  it("should switch custom colour after initial render", () => {
    mount(<SwitchColour />);

    cy.checkHydrated(CHIP_SELECTOR);
    cy.get(CHIP_SELECTOR).should(HAVE_PROP, "customColor", "#F8C8DC");
    cy.get("ic-button").click();
    cy.get(CHIP_SELECTOR).should(HAVE_PROP, "customColor", "#00008B");
  });

  it("should emit icDismiss event when chip is dismissed", () => {
    mount(<SingleDismissible />);

    cy.checkHydrated(CHIP_SELECTOR);

    cy.get(CHIP_SELECTOR).invoke("on", "icDismiss", cy.stub().as("icDismiss"));
    cy.get(CHIP_SELECTOR).shadow().find("button").click();
    cy.get("@icDismiss").should(HAVE_BEEN_CALLED_ONCE);
    cy.get(CHIP_SELECTOR).should(NOT_BE_VISIBLE);
  });
});

describe("IcChip visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render chip with icon", () => {
    mount(<WithIcon />);

    cy.checkHydrated(CHIP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "with-icon",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.035),
    });
  });

  it("should render chips of different sizes", () => {
    mount(<AllSizes />);

    cy.checkHydrated(CHIP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "sizes",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.037),
    });
  });

  it("should render dismissible chips", () => {
    mount(<Dismissible />);

    cy.checkHydrated(CHIP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "dismissible",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.035),
    });
  });

  it("should render dismissible chip with focus", () => {
    mount(<SingleDismissible />);

    cy.checkHydrated(CHIP_SELECTOR);

    cy.findShadowEl(CHIP_SELECTOR, "button").eq(0).focus().wait(500);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "dismissible-focus",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.004),
    });
  });

  it("should render dismissible chip with icon", () => {
    mount(<DismissibleWithIcon />);

    cy.checkHydrated(CHIP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "dismissible-with-icon",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.035),
    });
  });

  it("should render disabled chip", () => {
    mount(<Disabled />);

    cy.checkHydrated(CHIP_SELECTOR);

    /* currently fails due to disabled colors not meeting contrast ratios */
    // cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "disabled",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render chip with long label", () => {
    mount(<LongLabel />);

    cy.checkHydrated(CHIP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "long-label",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.047),
    });
  });

  it("should render with a custom colour", () => {
    mount(<CustomColour />);

    cy.checkHydrated(CHIP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "custom-colour",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.023),
    });
  });

  it("should render with a badge slot", () => {
    mount(<WithBadgeSlot />);

    cy.checkHydrated(CHIP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "badge-slot",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.01),
    });
  });

  it("should render with and without transparent background", () => {
    mount(<Transparency />);

    cy.checkHydrated(CHIP_SELECTOR);

    cy.compareSnapshot({
      name: "transparency",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.01),
    });
  });

  it("should render as truncated in an AG Grid when there is not enough space", () => {
    mount(<InAGGrid />);

    cy.checkHydrated(CHIP_SELECTOR);

    cy.compareSnapshot({
      name: "in-ag-grid",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.062),
    });
  });
});

describe("IcChip visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  after(() => {
    cy.disableForcedColors();
  });

  it("should render with a custom colour in high contrast mode", () => {
    mount(<CustomColour />);

    cy.checkHydrated(CHIP_SELECTOR);

    cy.compareSnapshot({
      name: "custom-colour-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.024),
    });
  });

  it("should render disabled chip in high contrast mode", () => {
    mount(<Disabled />);

    cy.checkHydrated(CHIP_SELECTOR);

    cy.compareSnapshot({
      name: "disabled-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
    });
  });

  it("should render dismissible chip with focus in high contrast mode", () => {
    mount(<SingleDismissible />);

    cy.checkHydrated(CHIP_SELECTOR);
    cy.findShadowEl(CHIP_SELECTOR, "button").eq(0).focus().wait(500);

    cy.compareSnapshot({
      name: "dismissible-focus-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.009),
    });
  });
});
