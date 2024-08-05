/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress/react";
import {
  NoBackgroundClickDialog,
  SimpleDialog,
  SlottedContentDialog,
  NoHeightConstraintDialog,
  AlertDialog,
  SizeDialog,
  NoButtonDialog,
  DestructiveButtonDialog,
  CustomButtonDialog,
  HideCloseDialog,
  ScrollableDialog,
  DynamicDialog,
  DialogAccordion,
  DialogAccordionGroup,
  DialogAccordionGroupSingleExpansion,
  NoWidthConstraintDialog,
} from "./IcDialogTestData";
import {
  BE_VISIBLE,
  HAVE_FOCUS,
  NOT_EXIST,
  HAVE_ATTR,
  NOT_HAVE_ATTR,
  NOT_BE_VISIBLE,
  HAVE_BEEN_CALLED_ONCE,
  NOT_HAVE_BEEN_CALLED,
} from "../utils/constants";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const DYNAMIC_SHOW_BUTTON = "ic-button#show-btn";
const DIALOG = "ic-dialog";
const BUTTON = "ic-button";

const DEFAULT_TEST_THRESHOLD = 0;

describe("IcDialog end-to-end tests", () => {
  beforeEach(() => {
    cy.viewport(1024, 750);
  });

  it("should hide dialog when background is clicked", () => {
    mount(<SimpleDialog />);

    cy.get(DIALOG).should("exist");
    cy.get(BUTTON).click().wait(300);
    cy.get(DIALOG).should(HAVE_ATTR, "open");
    cy.get("body").click(0, 0);
    cy.get(DIALOG).should(NOT_HAVE_ATTR, "open");
  });

  it("should render with slotted content and focus interactive content", () => {
    mount(<SlottedContentDialog />);

    cy.get(DIALOG).should("exist");
    cy.get("ic-button#slotted-dialog-btn").click().wait(500);
    cy.get(DIALOG).should(HAVE_ATTR, "open");
    cy.get("ic-select").should(HAVE_FOCUS);
    cy.get("ic-select").click();
    cy.findShadowEl("ic-select", "ic-menu ul")
      .should(BE_VISIBLE)
      .should(HAVE_FOCUS);
  });

  it("should focus all interactive content", () => {
    mount(<SlottedContentDialog />);

    cy.get(DIALOG).should("exist");
    cy.get("ic-button#slotted-dialog-btn").click().wait(300);
    cy.get(DIALOG).should(HAVE_ATTR, "open");
    cy.get("ic-select").should(HAVE_FOCUS).realPress("Tab");
    cy.get("ic-text-field").should(HAVE_FOCUS).realPress("Tab");
    cy.get("ic-checkbox").should(HAVE_FOCUS).realPress("Tab");
    cy.get("ic-button#test-button").should(HAVE_FOCUS);
  });

  it("should not hide dialog on background click when background click is disabled", () => {
    mount(<NoBackgroundClickDialog />);

    cy.get(DIALOG).should("exist");
    cy.get(BUTTON).click().wait(1000);
    cy.get(DIALOG).should(BE_VISIBLE);
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.get("body").click(0, 0).wait(1000);

    cy.get(DIALOG).should(HAVE_ATTR, "open");
    cy.get(DIALOG).should(BE_VISIBLE);
  });

  it("should focus dynamically added element when shown and skip when hidden", () => {
    mount(<DynamicDialog />);

    cy.get("ic-button#dynamic-dialog-btn").click();
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.get(DYNAMIC_SHOW_BUTTON).click();

    cy.findShadowEl(DYNAMIC_SHOW_BUTTON, "button")
      .focus()
      .realPress("Tab")
      .realPress("Tab");

    cy.findShadowEl("ic-button#tab-btn", "button").should(HAVE_FOCUS);

    cy.get("ic-button#hide-btn").click();

    cy.findShadowEl(DYNAMIC_SHOW_BUTTON, "button").focus();
    cy.focused().next().next().should(NOT_EXIST);
  });

  it("should hide dialog on pressing escape on dialog", () => {
    mount(<SimpleDialog />);

    cy.get(BUTTON).click().wait(300);
    cy.get(DIALOG).should(HAVE_ATTR, "open");
    cy.get(DIALOG).should(BE_VISIBLE);

    cy.get(BUTTON).realPress("Escape");

    cy.get(DIALOG).should(NOT_HAVE_ATTR, "open");
    cy.get(DIALOG).should(NOT_BE_VISIBLE);
  });

  it("should hide tooltip and then hide dialog on pressing escape on close button", () => {
    mount(<SimpleDialog />);

    cy.get(BUTTON).click().wait(300);
    cy.get(DIALOG).should(HAVE_ATTR, "open");
    cy.get(DIALOG).should(BE_VISIBLE);

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

    cy.get(DIALOG).should(NOT_HAVE_ATTR, "open");
    cy.get(DIALOG).should(NOT_BE_VISIBLE);
  });

  it("should emit icDialogOpened when dialog has opened and icDialogClosed when dialog has closed", () => {
    mount(<SimpleDialog />);

    cy.get(DIALOG).invoke(
      "on",
      "icDialogOpened",
      cy.stub().as("icDialogOpened")
    );
    cy.get(DIALOG).invoke(
      "on",
      "icDialogClosed",
      cy.stub().as("icDialogClosed")
    );

    cy.get("@icDialogOpened").should(NOT_HAVE_BEEN_CALLED);

    cy.get(BUTTON).click().wait(300);
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.get("@icDialogOpened").should(HAVE_BEEN_CALLED_ONCE);
    cy.get("@icDialogClosed").should(NOT_HAVE_BEEN_CALLED);

    cy.get(DIALOG).realPress("Escape");
    cy.get(DIALOG).should(NOT_HAVE_ATTR, "open");
    cy.get("@icDialogClosed").should(HAVE_BEEN_CALLED_ONCE);
  });

  it("should emit icDialogCancelled when default cancel button is clicked", () => {
    mount(<SimpleDialog />);

    cy.get(DIALOG).invoke(
      "on",
      "icDialogCancelled",
      cy.stub().as("icDialogCancelled")
    );

    cy.get(BUTTON).click().wait(300);
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.get("@icDialogCancelled").should(NOT_HAVE_BEEN_CALLED);
    cy.findShadowEl(DIALOG, "ic-button.button-variant-tertiary")
      .shadow()
      .find("button")
      .focus()
      .realPress("Enter");

    cy.get(DIALOG).should(NOT_HAVE_ATTR, "open");
    cy.get("@icDialogCancelled").should(HAVE_BEEN_CALLED_ONCE);
  });
});

describe("IcDialog visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.injectAxe();
    cy.viewport(1024, 750);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render simple dialog", () => {
    mount(<SimpleDialog />);

    cy.get(DIALOG).should("exist");
    cy.get(BUTTON).click().wait(300);
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.053),
    });
  });

  it("should render with slotted content", () => {
    mount(<SlottedContentDialog />);

    cy.get(DIALOG).should("exist");
    cy.get("ic-button#slotted-dialog-btn").click().wait(300);
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.checkA11yWithWait(undefined, 200);
    cy.compareSnapshot({
      name: "slotted-content",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.072),
    });
  });

  it("should render with slotted content and focus interactive content", () => {
    mount(<SlottedContentDialog />);

    cy.get(DIALOG).should("exist");
    cy.get("ic-button#slotted-dialog-btn").click().wait(300);
    cy.get(DIALOG).should(HAVE_ATTR, "open");
    cy.get("ic-select").click();

    cy.checkA11yWithWait(undefined, 1100);
    cy.compareSnapshot({
      name: "slotted-content-clicked",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.069),
    });
  });

  it("should render dialog with height constraint disabled", () => {
    mount(<NoHeightConstraintDialog />);

    cy.get(DIALOG).should("exist");
    cy.get("ic-button#slotted-dialog-btn").click();
    cy.get(DIALOG).should(HAVE_ATTR, "open");
    cy.get("ic-select").click();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "disable-height-constraint",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.048),
    });
  });

  it("should focus interactive content - accordion", () => {
    mount(<DialogAccordion />);

    cy.get(DIALOG).should("exist");
    cy.get("ic-button#slotted-dialog-btn").click();
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "accordion",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.06),
    });
  });

  it("should focus interactive content - accordion group", () => {
    mount(<DialogAccordionGroup />);

    cy.get(DIALOG).should("exist");
    cy.get("ic-button#slotted-dialog-btn").click();
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "accordion-group",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.038),
    });
  });

  it("should focus interactive content - accordion group with singleExpansion", () => {
    mount(<DialogAccordionGroupSingleExpansion />);

    cy.get(DIALOG).should("exist");
    cy.get("ic-button#slotted-dialog-btn").click();
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "accordion-group-single-expansion",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.037),
    });
  });

  it("should render neutral alert dialog", () => {
    mount(AlertDialog("neutral"));
    cy.checkHydrated(DIALOG);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "neutral-alert",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.063),
    });
  });

  it("should render info alert dialog", () => {
    mount(AlertDialog("info"));
    cy.checkHydrated(DIALOG);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "info-alert",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.074),
    });
  });

  it("should render warning alert dialog", () => {
    mount(AlertDialog("warning"));
    cy.checkHydrated(DIALOG);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "warning-alert",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.075),
    });
  });

  it("should render error alert dialog", () => {
    mount(AlertDialog("error"));
    cy.checkHydrated(DIALOG);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "error-alert",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.074),
    });
  });

  it("should render success alert dialog", () => {
    mount(AlertDialog("success"));
    cy.checkHydrated(DIALOG);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "success-alert",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.063),
    });
  });

  it("should render small dialog", () => {
    mount(SizeDialog("small"));
    cy.checkHydrated(DIALOG);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "small",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.053),
    });
  });

  it("should render large dialog", () => {
    mount(SizeDialog("large"));
    cy.checkHydrated(DIALOG);

    cy.checkA11yWithWait(undefined, 1100);
    cy.compareSnapshot({
      name: "large",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.055),
    });
  });

  it("should render with no dialog controls", () => {
    mount(<NoButtonDialog />);

    cy.get(DIALOG).should("exist");
    cy.get(BUTTON).click();
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "no-dialog-controls",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.053),
    });
  });

  it("should render destructive dialog controls", () => {
    mount(<DestructiveButtonDialog />);

    cy.get(DIALOG).should("exist");
    cy.get(BUTTON).click();
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "destructive-dialog-controls",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.055),
    });
  });

  it("should render custom dialog controls", () => {
    mount(<CustomButtonDialog />);

    cy.get(DIALOG).should("exist");
    cy.get("ic-button#custom-dialog-btn").click();
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "custom-dialog-controls",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.055),
    });
  });

  it("should render with hidden close button", () => {
    mount(<HideCloseDialog />);

    cy.get(DIALOG).should("exist");
    cy.get(BUTTON).click();
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "hide-close-button",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.053),
    });
  });

  it("should scroll within the dialog - before scroll", () => {
    mount(<ScrollableDialog />);

    cy.get(DIALOG).should("exist");
    cy.get(BUTTON).click().wait(1000);
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "scroll-before",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.098),
    });
  });

  it("should scroll within the dialog - after scroll", () => {
    mount(<ScrollableDialog />);

    cy.get(DIALOG).should("exist");
    cy.get(BUTTON).click().wait(1000);
    cy.get(DIALOG).should(HAVE_ATTR, "open");
    cy.findShadowEl(DIALOG, ".content-area").scrollTo("bottom").wait(1000);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "scroll-after",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.106),
    });
  });

  it("should focus dynamically added element when shown", () => {
    mount(<DynamicDialog />);

    cy.get("ic-button#dynamic-dialog-btn").click();
    cy.get(DIALOG).should(HAVE_ATTR, "open");

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
    });
  });

  it("should render dialog with no width constraint", () => {
    mount(<NoWidthConstraintDialog />);

    cy.get(DIALOG).should("exist");
    cy.get(BUTTON).click();
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "disable-width-constraint",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.08),
    });
  });
});

describe("IcDialog visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  beforeEach(() => {
    cy.viewport(1024, 750);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  after(() => {
    cy.disableForcedColors();
  });

  it("should render simple dialog in high contrast mode", () => {
    mount(<SimpleDialog />);

    cy.get(DIALOG).should("exist");
    cy.get(BUTTON).click().wait(300);
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.compareSnapshot({
      name: "default-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.047),
    });
  });

  it("should render with slotted content in high contrast mode", () => {
    mount(<SlottedContentDialog />);

    cy.get(DIALOG).should("exist");
    cy.get("ic-button#slotted-dialog-btn").click().wait(300);
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.compareSnapshot({
      name: "slotted-content-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.063),
    });
  });

  it("should render success alert dialog in high contrast mode", () => {
    mount(AlertDialog("success"));
    cy.checkHydrated(DIALOG);

    cy.wait(300).compareSnapshot({
      name: "success-alert-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.055),
    });
  });

  it("should render warning alert dialog in high contrast mode", () => {
    mount(AlertDialog("warning"));
    cy.checkHydrated(DIALOG);

    cy.wait(300).compareSnapshot({
      name: "warning-alert-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.055),
    });
  });

  it("should render with no dialog controls in high contrast mode", () => {
    mount(<NoButtonDialog />);

    cy.get(DIALOG).should("exist");
    cy.get(BUTTON).click().wait(300);
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.compareSnapshot({
      name: "no-dialog-controls-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.046),
    });
  });

  it("should render destructive dialog controls in high contrast mode", () => {
    mount(<DestructiveButtonDialog />);

    cy.get(DIALOG).should("exist");
    cy.get(BUTTON).click().wait(300);
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.compareSnapshot({
      name: "destructive-dialog-controls-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.048),
    });
  });
});
