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

const DEFAULT_TEST_THRESHOLD = 0.05;

const DISMISS_BUTTON_SELECTOR = "#dismiss-button";
const OPEN_BUTTON_SELECTOR = "ic-button#open-toast-btn";

describe("IcToast", () => {
  it("renders", () => {
    mount(<SimpleToast />);
    cy.get("ic-toast").should("exist");
  });

  it("should close on dismiss icon click", () => {
    mount(<SimpleToast />);
    cy.get("ic-button").click();
    cy.get("ic-toast").should(NOT_HAVE_CLASS, "hidden");
    cy.clickOnShadowEl("ic-toast", DISMISS_BUTTON_SELECTOR);
    cy.get("ic-toast").should(HAVE_CLASS, "hidden");
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
});

describe("IcToast Visual Regression and A11y Testing", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("renders default toast", () => {
    mount(<HeadingOnlyToast />);
    cy.get("ic-button").click();

    cy.wait(100).compareSnapshot("default", DEFAULT_TEST_THRESHOLD + 0.01);
    cy.checkA11yWithWait();
  });

  it("renders message and variant", () => {
    mount(<SimpleToast />);
    cy.get("ic-button").click();

    cy.wait(100).compareSnapshot(
      "message-variant",
      DEFAULT_TEST_THRESHOLD + 0.02
    );
    cy.checkA11yWithWait();
  });

  it("renders multiline message", () => {
    mount(<MultilineMessageToast />);
    cy.get("ic-button").click();

    cy.wait(100).compareSnapshot("multiline", DEFAULT_TEST_THRESHOLD + 0.07);
    cy.checkA11yWithWait();
  });

  it("renders slotted button", () => {
    mount(<SlottedActionToast />);
    cy.get(OPEN_BUTTON_SELECTOR).click();

    cy.wait(100).compareSnapshot(
      "slotted-button",
      DEFAULT_TEST_THRESHOLD + 0.02
    );
    cy.checkA11yWithWait();
  });

  it("renders slotted link", () => {
    mount(<SlottedLinkToast />);
    cy.get("ic-button").click();

    cy.wait(100).compareSnapshot("slotted-link", DEFAULT_TEST_THRESHOLD + 0.02);
    cy.checkA11yWithWait();
  });

  it("renders auto dismiss", () => {
    mount(<SimpleAutoDismissToast />);
    cy.get("ic-button").click();

    cy.wait(100).compareSnapshot("auto-dismiss", DEFAULT_TEST_THRESHOLD);
    cy.checkA11yWithWait();
  });

  it("renders custom neutral icon", () => {
    mount(<SlottedIconToast />);
    cy.get("ic-button").click();

    cy.wait(100).compareSnapshot("custom-icon", DEFAULT_TEST_THRESHOLD + 0.02);
    cy.checkA11yWithWait();
  });

  it("renders custom dismiss button aria label", () => {
    mount(<DismissAriaLabelToast />);
    cy.get("ic-button").click();

    cy.wait(100).compareSnapshot(
      "custom-aria-label",
      DEFAULT_TEST_THRESHOLD + 0.02
    );
    cy.checkA11yWithWait();
  });
});
