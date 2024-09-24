/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress/react";
import {
  HAVE_CLASS,
  NOT_HAVE_CLASS,
  HAVE_FOCUS,
  NOT_EXIST,
  BE_VISIBLE,
  NOT_BE_VISIBLE,
  HAVE_BEEN_CALLED_ONCE,
} from "../utils/constants";
import {
  AutoLoadToast,
  DismissAriaLabelToast,
  HeadingOnlyToast,
  MultilineMessageToast,
  SimpleAutoDismissToast,
  SimpleToast,
  SlottedActionAutoDismissToast,
  SlottedActionToast,
  SlottedIconToast,
  SlottedLinkToast,
} from "./IcToastTestData";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const DEFAULT_TEST_THRESHOLD = 0.041;

const IC_TOAST_SELECTOR = "ic-toast";
const IC_BUTTON_SELECTOR = "ic-button";
const DISMISS_BUTTON_SELECTOR = "#dismiss-button";
const OPEN_BUTTON_SELECTOR = "ic-button#open-toast-btn";

describe("IcToast end-to-end tests", () => {
  it("should render", () => {
    mount(<SimpleToast />);
    cy.get(IC_TOAST_SELECTOR).should("exist");
  });

  it("should close on dismiss icon click", () => {
    mount(<SimpleToast />);
    cy.get(IC_BUTTON_SELECTOR).click();
    cy.get(IC_TOAST_SELECTOR).should(NOT_HAVE_CLASS, "hidden");
    cy.clickOnShadowEl(IC_TOAST_SELECTOR, DISMISS_BUTTON_SELECTOR);
    cy.get(IC_TOAST_SELECTOR).should(HAVE_CLASS, "hidden");
  });

  it("should focus on dismiss button when no action is provided", () => {
    mount(<SimpleToast />);
    cy.get(IC_BUTTON_SELECTOR).click();
    cy.findShadowEl(IC_TOAST_SELECTOR, DISMISS_BUTTON_SELECTOR).should(
      HAVE_FOCUS
    );
  });

  it("should focus on slotted action when provided", () => {
    mount(<SlottedActionToast />);
    cy.get(OPEN_BUTTON_SELECTOR).click();
    cy.get("ic-button#test-button").should(HAVE_FOCUS);
  });

  it("should set the dismissMode to manual if the action slot is used on an autoDismiss toast", () => {
    mount(<SlottedActionAutoDismissToast />);
    cy.get(OPEN_BUTTON_SELECTOR).click();
    cy.findShadowEl(IC_TOAST_SELECTOR, DISMISS_BUTTON_SELECTOR).should("exist");
    cy.findShadowEl(IC_TOAST_SELECTOR, "ic-loading-indicator").should(
      NOT_EXIST
    );
  });

  it("should set the dismissMode to automatic if no action slot is specified", () => {
    mount(<SimpleAutoDismissToast />);
    cy.get(IC_BUTTON_SELECTOR).click();
    cy.findShadowEl(IC_TOAST_SELECTOR, "ic-loading-indicator").should("exist");
    cy.findShadowEl(IC_TOAST_SELECTOR, DISMISS_BUTTON_SELECTOR).should(
      NOT_EXIST
    );
  });

  it("should set the variant to neutral if the neutral-icon slot is used when the variant isn't set", () => {
    mount(<SlottedIconToast />);
    cy.get(IC_BUTTON_SELECTOR).click();
    cy.findShadowEl(IC_TOAST_SELECTOR, "div.divider-neutral").should("exist");
  });

  it("should not render an icon if the variant is neutral and the neutral-icon slot is not used", () => {
    mount(<SimpleToast />);
    cy.get(IC_BUTTON_SELECTOR).click();
    cy.findShadowEl(IC_TOAST_SELECTOR, "span.toast-icon").should(NOT_EXIST);
  });

  it("should set the autoDismissTimeout to 5000ms if the prop provided is below", () => {
    mount(<SimpleAutoDismissToast />);
    cy.get(IC_BUTTON_SELECTOR).click();
    cy.get(IC_TOAST_SELECTOR)
      .shadow()
      .wait(4900)
      .find("ic-loading-indicator")
      .should(BE_VISIBLE);
    cy.get(IC_TOAST_SELECTOR)
      .shadow()
      .wait(100)
      .find("ic-loading-indicator")
      .should(NOT_BE_VISIBLE);
  });

  it("should emit icDismiss event when toast is dismissed", () => {
    mount(<SimpleToast />);

    cy.get(IC_TOAST_SELECTOR).invoke(
      "on",
      "icDismiss",
      cy.stub().as("icDismiss")
    );
    cy.get(IC_BUTTON_SELECTOR).click();
    cy.get(IC_TOAST_SELECTOR).should(NOT_HAVE_CLASS, "hidden");
    cy.clickOnShadowEl(IC_TOAST_SELECTOR, DISMISS_BUTTON_SELECTOR);
    cy.get(IC_TOAST_SELECTOR).should(HAVE_CLASS, "hidden");
    cy.get("@icDismiss").should(HAVE_BEEN_CALLED_ONCE);
  });

  it("should render a toast on page load if openToast is set early", () => {
    mount(<AutoLoadToast />);
    cy.get(IC_TOAST_SELECTOR).should(NOT_HAVE_CLASS, "hidden");
  });

  it("should focus the new dismiss button when auto dismiss toast is tabbed to", () => {
    mount(<SimpleAutoDismissToast />);
    cy.get("ic-button").click();
    cy.checkHydrated("ic-toast");

    cy.get("ic-toast").click(60, 40);

    cy.realPress("Tab").realPress("Tab");
    cy.get("ic-toast")
      .shadow()
      .find("ic-button#dismiss-button")
      .should("exist");
  });
  
  it("should render a toast on page load if openToast is set early", () => {
    mount(<AutoLoadToast />);
    cy.get(IC_TOAST_SELECTOR).should(NOT_HAVE_CLASS, "hidden");
  });
});

describe("IcToast visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render default toast", () => {
    mount(<HeadingOnlyToast />);

    cy.checkHydrated(IC_TOAST_SELECTOR);
    cy.get(IC_BUTTON_SELECTOR).click().wait(500);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render message and variant", () => {
    mount(<SimpleToast />);

    cy.checkHydrated(IC_TOAST_SELECTOR);
    cy.get(IC_BUTTON_SELECTOR).click().wait(500);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "message-variant",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.01),
    });
  });

  it("should render multiline message", () => {
    mount(<MultilineMessageToast />);

    cy.checkHydrated(IC_TOAST_SELECTOR);
    cy.get(IC_BUTTON_SELECTOR).click().wait(500);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "multiline",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.056),
    });
  });

  it("should render slotted button and success status", () => {
    mount(<SlottedActionToast />);

    cy.checkHydrated(IC_TOAST_SELECTOR);
    cy.get(OPEN_BUTTON_SELECTOR).click().wait(500);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "slotted-button",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.012),
    });
  });

  it("should render slotted link", () => {
    mount(<SlottedLinkToast />);

    cy.checkHydrated(IC_TOAST_SELECTOR);
    cy.get(IC_BUTTON_SELECTOR).click().wait(500);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "slotted-link",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.012),
    });
  });

  it("should render auto dismiss", () => {
    mount(<SimpleAutoDismissToast />);

    cy.checkHydrated(IC_TOAST_SELECTOR);
    cy.get(IC_BUTTON_SELECTOR).click().wait(500);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "auto-dismiss",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
    });
  });

  it("should render custom neutral icon", () => {
    mount(<SlottedIconToast />);

    cy.checkHydrated(IC_TOAST_SELECTOR);
    cy.get(IC_BUTTON_SELECTOR).click().wait(500);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "custom-icon",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.016),
    });
  });

  it("should render custom dismiss button aria label", () => {
    mount(<DismissAriaLabelToast />);

    cy.checkHydrated(IC_TOAST_SELECTOR);
    cy.get(IC_BUTTON_SELECTOR).click().wait(500);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "custom-aria-label",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.018),
    });
  });
});

describe("IcToast visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  after(() => {
    cy.disableForcedColors();
  });

  it("should render auto dismiss in high contrast mode", () => {
    mount(<SimpleAutoDismissToast />);

    cy.checkHydrated(IC_TOAST_SELECTOR);
    cy.get(IC_BUTTON_SELECTOR).click().wait(500);

    cy.compareSnapshot({
      name: "auto-dismiss-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.009),
    });
  });

  it("should render custom neutral icon in high contrast mode", () => {
    mount(<SlottedIconToast />);

    cy.checkHydrated(IC_TOAST_SELECTOR);
    cy.get(IC_BUTTON_SELECTOR).click().wait(500);

    cy.compareSnapshot({
      name: "custom-icon-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.014),
    });
  });

  it("should render slotted button and success status in high contrast mode", () => {
    mount(<SlottedActionToast />);

    cy.checkHydrated(IC_TOAST_SELECTOR);
    cy.get(OPEN_BUTTON_SELECTOR).click().wait(500);

    cy.compareSnapshot({
      name: "slotted-button-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
    });
  });

  it("should render slotted link in high contrast mode", () => {
    mount(<SlottedLinkToast />);

    cy.checkHydrated(IC_TOAST_SELECTOR);
    cy.get(IC_BUTTON_SELECTOR).click().wait(500);

    cy.compareSnapshot({
      name: "slotted-link-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.01),
    });
  });
});
