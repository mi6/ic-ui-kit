/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress/react";
import {
  NoBackgroundClickDialog,
  SimpleDialog,
  SlottedContentDialog,
  NoHeightConstraintDialog,
  SlottedContentDialogAccordion,
  SlottedContentDialogAccordionGroup,
  SlottedContentDialogAccordionGroupSingleExpansion,
  alertDialog,
  sizeDialog,
  NoButtonDialog,
  DestructiveButtonDialog,
  CustomButtonDialog,
  HideCloseDialog,
  ScrollableDialog,
  DynamicDialog,
} from "./IcDialogTestData";
import {
  BE_VISIBLE,
  HAVE_FOCUS,
  NOT_EXIST,
  HAVE_ATTR,
  NOT_HAVE_ATTR,
  NOT_BE_VISIBLE,
} from "../utils/constants";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const DEFAULT_TEST_THRESHOLD = 0;

const DYNAMIC_SHOW_BUTTON = "ic-button#show-btn";
const DIALOG = "ic-dialog";
const BUTTON = "ic-button";

describe("IcDialog", () => {
  beforeEach(() => {
    cy.injectAxe();
    cy.viewport(1024, 750);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render and hide when background is clicked", () => {
    mount(<SimpleDialog />);

    cy.get(BUTTON).click().wait(300);
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.053),
      delay: 500,
    });

    cy.get("body").click(0, 0);
    cy.get(DIALOG).should(NOT_HAVE_ATTR, "open");
  });

  it("should focus on slotted content", () => {
    mount(<SlottedContentDialog />);

    cy.get(DIALOG).should("exist");
    cy.get("ic-button#slotted-dialog-btn").click().wait(300);

    cy.checkA11yWithWait(undefined, 200);
    cy.compareSnapshot({
      name: "slotted-content",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.066),
      delay: 1100,
    });

    cy.get("ic-select").click();

    cy.checkA11yWithWait(undefined, 1100);
    cy.compareSnapshot({
      name: "slotted-content-clicked",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.062),
      delay: 1100,
    });
  });

  it("should focus on slotted content with height constraint disabled", () => {
    mount(<NoHeightConstraintDialog />);

    cy.get(DIALOG).should("exist");
    cy.get("ic-button#slotted-dialog-btn").click();

    cy.get("ic-select").click();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "disable-height-constraint",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.048),
      delay: 1100,
    });
  });

  it("should focus on slotted content - accordion", () => {
    mount(<SlottedContentDialogAccordion />);

    cy.get(DIALOG).should("exist");
    cy.get("ic-button#slotted-dialog-btn").click();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "slotted-content-accordion",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.06),
      delay: 1100,
    });
  });

  it("should focus on slotted content - accordion group", () => {
    mount(<SlottedContentDialogAccordionGroup />);

    cy.get(DIALOG).should("exist");
    cy.get("ic-button#slotted-dialog-btn").click();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "slotted-content-accordion-group",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.038),
      delay: 1100,
    });
  });

  it("should focus slotted content - accordion group with singleExpansion", () => {
    mount(<SlottedContentDialogAccordionGroupSingleExpansion />);

    cy.get(DIALOG).should("exist");
    cy.get("ic-button#slotted-dialog-btn").click();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "slotted-content-accordion-group-single-expansion",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.037),
      delay: 1100,
    });
  });

  it("should not hide when background click is disabled", () => {
    mount(<NoBackgroundClickDialog />);

    cy.get(BUTTON).click().wait(1000);
    cy.get(DIALOG).should(BE_VISIBLE);

    cy.get("body").click(0, 0).wait(1000);

    cy.get(DIALOG).should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "background-click-disabled",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.053),
      delay: 1100,
    });
  });

  it("should render neutral alert dialog", () => {
    mount(alertDialog("neutral"));
    cy.checkHydrated(DIALOG);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "neutral-alert",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.063),
      delay: 1100,
    });
  });

  it("should render info alert dialog", () => {
    mount(alertDialog("info"));
    cy.checkHydrated(DIALOG);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "info-alert",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.074),
      delay: 1100,
    });
  });

  it("should render warning alert dialog", () => {
    mount(alertDialog("warning"));
    cy.checkHydrated(DIALOG);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "warning-alert",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.075),
      delay: 1100,
    });
  });

  it("should render error alert dialog", () => {
    mount(alertDialog("error"));
    cy.checkHydrated(DIALOG);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "error-alert",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.074),
      delay: 1100,
    });
  });

  it("should render success alert dialog", () => {
    mount(alertDialog("success"));
    cy.checkHydrated(DIALOG);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "success-alert",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.063),
      delay: 1100,
    });
  });

  it("should render small dialog", () => {
    mount(sizeDialog("small"));
    cy.checkHydrated(DIALOG);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "small",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.053),
      delay: 1100,
    });
  });

  it("should render large dialog", () => {
    mount(sizeDialog("large"));
    cy.checkHydrated(DIALOG);

    cy.checkA11yWithWait(undefined, 1100);
    cy.compareSnapshot({
      name: "large",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.055),
      delay: 1100,
    });
  });

  it("should render no dialog controls", () => {
    mount(<NoButtonDialog />);

    cy.get(BUTTON).click();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "no-dialog-controls",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.053),
      delay: 1100,
    });
  });

  it("should render destructive dialog controls", () => {
    mount(<DestructiveButtonDialog />);

    cy.get(BUTTON).click();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "destructive-dialog-controls",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.055),
      delay: 1100,
    });
  });

  it("should render custom dialog controls", () => {
    mount(<CustomButtonDialog />);

    cy.get("ic-button#custom-dialog-btn").click();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "custom-dialog-controls",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.055),
      delay: 1100,
    });
  });

  it("should render with hidden close button", () => {
    mount(<HideCloseDialog />);

    cy.get(BUTTON).click();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "hide-close-button",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.053),
      delay: 1100,
    });
  });

  it("should scroll within the dialog", () => {
    mount(<ScrollableDialog />);

    cy.get(BUTTON).click().wait(1000);

    cy.compareSnapshot({
      name: "scroll-before",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.098),
      delay: 1100,
    });

    cy.findShadowEl("ic-dialog", ".content-area").scrollTo("bottom").wait(1000);

    cy.compareSnapshot({
      name: "scroll-after",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.106),
      delay: 1100,
    });
  });

  it("should focus dynamically added element when shown and skips when hidden", () => {
    mount(<DynamicDialog />);

    cy.get("ic-button#dynamic-dialog-btn").click();

    cy.get(DYNAMIC_SHOW_BUTTON).click();

    cy.findShadowEl(DYNAMIC_SHOW_BUTTON, "button")
      .focus()
      .realPress("Tab")
      .realPress("Tab");

    cy.findShadowEl("ic-button#tab-btn", "button").should(HAVE_FOCUS);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "tab-dynamic-content",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.104),
      delay: 1100,
    });

    cy.get("ic-button#hide-btn").click();

    cy.findShadowEl(DYNAMIC_SHOW_BUTTON, "button").focus();

    cy.focused().next().next().should(NOT_EXIST);
  });

  it("should test pressing escape on dialog", () => {
    mount(<SimpleDialog />);

    cy.get(BUTTON).click().wait(300);
    cy.get(BUTTON).realPress("Escape");

    cy.findShadowEl(DIALOG, ".dialog").should(NOT_BE_VISIBLE);
  });

  it("should test pressing escape on close button", () => {
    mount(<SimpleDialog />);

    cy.get(BUTTON).click().wait(300);

    cy.findShadowEl(DIALOG, "ic-button.close-icon")
      .shadow()
      .find("button")
      .focus();

    cy.findShadowEl(DIALOG, "ic-button.close-icon")
      .shadow()
      .find("ic-tooltip")
      .shadow()
      .find(".ic-tooltip-container")
      .should(BE_VISIBLE);

    cy.findShadowEl(DIALOG, "ic-button.close-icon").realPress("Escape");

    // first press of Escape should hide tooltip on button
    cy.findShadowEl(DIALOG, "ic-button.close-icon")
      .shadow()
      .find("ic-tooltip")
      .shadow()
      .find(".ic-tooltip-container")
      .should(NOT_BE_VISIBLE);

    // second press should hide dialog
    cy.findShadowEl(DIALOG, "ic-button.close-icon").realPress("Escape");

    cy.findShadowEl(DIALOG, ".dialog").should(NOT_BE_VISIBLE);
  });
});
