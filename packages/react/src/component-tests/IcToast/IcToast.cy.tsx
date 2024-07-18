/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress/react";
import {
  HAVE_CLASS,
  NOT_HAVE_CLASS,
  HAVE_FOCUS,
  NOT_EXIST,
} from "../utils/constants";
import {
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

const DEFAULT_TEST_THRESHOLD = 0.035;

const DISMISS_BUTTON_SELECTOR = "#dismiss-button";
const OPEN_BUTTON_SELECTOR = "ic-button#open-toast-btn";

describe("IcToast", () => {
  it("should render", () => {
    mount(<SimpleToast />);
    cy.get("ic-toast").should("exist");
  });

  it("should close on dismiss icon click", () => {
    mount(<SimpleToast />);
    cy.get("ic-button").click();
    cy.get("ic-toast").should(NOT_HAVE_CLASS, "ic-toast-hidden");
    cy.clickOnShadowEl("ic-toast", DISMISS_BUTTON_SELECTOR);
    cy.get("ic-toast").should(HAVE_CLASS, "ic-toast-hidden");
  });

  it("should focus on dismiss button when no action is provided", () => {
    mount(<SimpleToast />);
    cy.get("ic-button").click();
    cy.findShadowEl("ic-toast", DISMISS_BUTTON_SELECTOR).should(HAVE_FOCUS);
  });

  it("should focus on slotted action when provided", () => {
    mount(<SlottedActionToast />);
    cy.get(OPEN_BUTTON_SELECTOR).click();
    cy.get("ic-button#test-button").should(HAVE_FOCUS);
  });

  it("should set the dismissMode to manual if the action slot is used on an autoDismiss toast", () => {
    mount(<SlottedActionAutoDismissToast />);
    cy.get(OPEN_BUTTON_SELECTOR).click();
    cy.findShadowEl("ic-toast", DISMISS_BUTTON_SELECTOR).should("exist");
  });

  it("should set the dismissMode to automatic if no action slot is specified", () => {
    mount(<SimpleAutoDismissToast />);
    cy.get("ic-button").click();
    cy.findShadowEl("ic-toast", "ic-loading-indicator").should("exist");
  });

  it("should set the variant to neutral if the neutral-icon slot is used when the variant isn't set", () => {
    mount(<SlottedIconToast />);
    cy.get("ic-button").click();
    cy.findShadowEl("ic-toast", "div.divider-neutral").should("exist");
  });

  it("should not render an icon if the variant is neutral and the neutral-icon slot is not used", () => {
    mount(<SimpleToast />);
    cy.get("ic-button").click();
    cy.findShadowEl("ic-toast", "span.toast-icon").should(NOT_EXIST);
  });

  it("should set the autoDismissTimeout to 5000ms if the prop provided is below", () => {
    mount(<SimpleAutoDismissToast />);
    cy.get("ic-button").click();
    cy.get("ic-toast")
      .shadow()
      .wait(4900)
      .find("ic-loading-indicator")
      .should("exist");
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
});

describe("IcToast Visual Regression and A11y Testing", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render default toast", () => {
    mount(<HeadingOnlyToast />);
    cy.get("ic-button").click();

    // cy.checkA11yWithWait(undefined, 100);
    cy.compareSnapshot({
      name: "default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
      delay: 500,
    });
  });

  it("should render message and variant", () => {
    mount(<SimpleToast />);
    cy.get("ic-button").click();

    // cy.checkA11yWithWait(undefined, 100);
    cy.compareSnapshot({
      name: "message-variant",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
      delay: 500,
    });
  });

  it("should render multiline message", () => {
    mount(<MultilineMessageToast />);
    cy.get("ic-button").click().wait(200);

    // cy.checkA11yWithWait(undefined, 100);
    cy.compareSnapshot({
      name: "multiline",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.056),
      delay: 500,
    });
  });

  it("should render slotted button", () => {
    mount(<SlottedActionToast />);
    cy.get(OPEN_BUTTON_SELECTOR).click();

    // cy.checkA11yWithWait(undefined, 100);
    cy.compareSnapshot({
      name: "slotted-button",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.012),
      delay: 500,
    });
  });

  it("should render slotted link", () => {
    mount(<SlottedLinkToast />);
    cy.get("ic-button").click().wait(200);

    // cy.checkA11yWithWait(undefined, 100);
    cy.compareSnapshot({
      name: "slotted-link",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.012),
      delay: 500,
    });
  });

  it("should render auto dismiss", () => {
    mount(<SimpleAutoDismissToast />);
    cy.get("ic-button").click();

    // cy.checkA11yWithWait(undefined, 100);
    cy.compareSnapshot({
      name: "auto-dismiss",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
      delay: 500,
    });
  });

  it("should render custom neutral icon", () => {
    mount(<SlottedIconToast />);
    cy.get("ic-button").click().wait(200);

    // cy.checkA11yWithWait(undefined, 100);
    cy.compareSnapshot({
      name: "custom-icon",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.016),
      delay: 500,
    });
  });

  it("should render custom dismiss button aria label", () => {
    mount(<DismissAriaLabelToast />);
    cy.get("ic-button").click().wait(200);

    // cy.checkA11yWithWait(undefined, 100);
    cy.compareSnapshot({
      name: "custom-aria-label",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.018),
      delay: 1000,
    });
  });
});
