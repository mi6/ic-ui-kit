/* eslint-disable react/jsx-no-bind */
/// <reference types="cypress" />

import React from "react";
import { mount } from "cypress/react";
import {
  NoBackgroundClickDialog,
  SimpleDialog,
  SlottedContentDialog,
  SlottedUpdatedContentDialog,
  LotsOfSlottedContentDialog,
  SlottedUnselectedRadiosDialog,
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
  DialogSearch,
  NoWidthConstraintDialog,
  ThemeDark,
  DialogWithTooltips,
  SlottedTabsDialog,
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
  NOT_HAVE_FOCUS,
} from "../utils/constants";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const DYNAMIC_SHOW_BUTTON = "ic-button#show-btn";
const DIALOG = "ic-dialog";
const BUTTON = "ic-button";
const SLOTTED_DIALOG_BUTTON = "ic-button#slotted-dialog-btn";
const CLOSE_ICON_BUTTON = "ic-button.close-icon";

const DEFAULT_TEST_THRESHOLD = 0.028;

describe("IcDialog end-to-end tests", () => {
  beforeEach(() => {
    cy.viewport(1024, 750);
  });

  it("should hide dialog when background is clicked", () => {
    mount(<SimpleDialog />);

    cy.get(DIALOG);
    cy.get(BUTTON).click();
    cy.wait(300);
    cy.get(DIALOG).should(HAVE_ATTR, "open");
    cy.get("body").click(0, 0);
    cy.wait(300);
    cy.get(DIALOG).should(NOT_HAVE_ATTR, "open");
  });

  it("should focus interactive content added after first load - including children of slotted elements", () => {
    mount(<SlottedUpdatedContentDialog />);

    cy.get(DIALOG);
    cy.get("ic-button#display-btn-1-btn").click();
    cy.wait(300);
    cy.get("ic-button#display-btn-2-btn").click();
    cy.get("ic-button#display-dialog-btn").click();
    cy.wait(300);
    cy.get(DIALOG).should(HAVE_ATTR, "open");
    cy.get("ic-button#test-button-1").should(HAVE_FOCUS).realPress("Tab");
    cy.get("ic-button#test-button-2").should(HAVE_FOCUS);
  });

  it("should not hide dialog on background click when background click is disabled", () => {
    mount(<NoBackgroundClickDialog />);

    cy.get(DIALOG);
    cy.get(BUTTON).click();
    cy.wait(1000);
    cy.get(DIALOG).should(BE_VISIBLE);
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.get("body").click(0, 0);
    cy.wait(1000);

    cy.get(DIALOG).should(HAVE_ATTR, "open");
    cy.get(DIALOG).should(BE_VISIBLE);
  });

  it("should focus dynamically added element when shown and skip when hidden", () => {
    mount(<DynamicDialog />);

    cy.get("ic-button#dynamic-dialog-btn").click();
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.get(DYNAMIC_SHOW_BUTTON).click();

    cy.findShadowEl(DYNAMIC_SHOW_BUTTON, "button").focus().realPress("Tab");
    cy.findShadowEl(DYNAMIC_SHOW_BUTTON, "button").realPress("Tab");

    cy.findShadowEl("ic-button#tab-btn", "button").should(HAVE_FOCUS);

    cy.get("ic-button#hide-btn").click();

    cy.findShadowEl(DYNAMIC_SHOW_BUTTON, "button").focus();
    cy.focused().next().next().should(NOT_EXIST);
  });

  it("should tab through slotted content", () => {
    mount(<LotsOfSlottedContentDialog />);

    cy.get(DIALOG);
    cy.wait(300);
    cy.get(DIALOG).should(HAVE_ATTR, "open");
    cy.get("ic-link").should(HAVE_FOCUS);

    // after 2 tabs, the 2nd radio option should have focus
    cy.realPress("Tab");
    cy.get("ic-button[slot=action]").should(HAVE_FOCUS);
    cy.realPress("Tab");
    cy.get("ic-radio-option[value=value2] input").should(HAVE_FOCUS);

    // after 3 more tabs, the text field should have focus
    cy.realPress("Tab");
    cy.get("ic-text-field[slot=additional-field]").should(HAVE_FOCUS);
    cy.realPress("Tab");
    cy.get("ic-search-bar").should(HAVE_FOCUS);
    cy.realPress("Tab");
    cy.get("ic-text-field#dialog-text-field").should(HAVE_FOCUS);

    // after 4 more tabs, the chip should have focus
    cy.realPress("Tab");
    cy.get("ic-select").should(HAVE_FOCUS);
    cy.realPress("Tab");
    cy.get("ic-checkbox[label=Confirm]").should(HAVE_FOCUS);
    cy.realPress("Tab");
    cy.get("ic-checkbox[label=Disagree]").should(HAVE_FOCUS);
    cy.realPress("Tab");
    cy.get("ic-chip").should(HAVE_FOCUS);
  });

  it("should tab through slotted tabs", () => {
    mount(<SlottedTabsDialog />);

    cy.get(DIALOG);
    cy.wait(300);
    cy.get(DIALOG).should(HAVE_ATTR, "open");
    cy.get("ic-tab").should(HAVE_FOCUS);

    // after 4 tabs, the tab should have focus again
    cy.realPress("Tab");
    cy.get("ic-tab").should(NOT_HAVE_FOCUS);
    cy.realPress("Tab");
    cy.realPress("Tab");
    cy.realPress("Tab");
    cy.get("ic-tab").should(HAVE_FOCUS);
  });

  it("should tab backwards through slotted content", () => {
    mount(<LotsOfSlottedContentDialog />);

    cy.get(DIALOG);
    cy.wait(300);
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    // after 4 shift + tabs, the switch should have focus
    cy.realPress(["Shift", "Tab"]);
    cy.findShadowEl(DIALOG, CLOSE_ICON_BUTTON).should(HAVE_FOCUS);
    cy.realPress(["Shift", "Tab"]);
    cy.findShadowEl(DIALOG, "ic-button.dialog-control-button").should(
      HAVE_FOCUS
    );
    cy.realPress(["Shift", "Tab"]);
    cy.findShadowEl(DIALOG, "ic-button.dialog-control-button").should(
      HAVE_FOCUS
    );
    cy.realPress(["Shift", "Tab"]);
    cy.get("ic-switch").should(HAVE_FOCUS);

    // after 4 more shift + tabs, the select should have focus
    cy.realPress(["Shift", "Tab"]);
    cy.get("ic-chip").should(HAVE_FOCUS);
    cy.realPress(["Shift", "Tab"]);
    cy.get("ic-checkbox[label=Disagree]").should(HAVE_FOCUS);
    cy.realPress(["Shift", "Tab"]);
    cy.get("ic-checkbox[label=Confirm]").should(HAVE_FOCUS);
    cy.realPress(["Shift", "Tab"]);
    cy.get("ic-select").should(HAVE_FOCUS);

    // after 4 more shift + tabs, the second radio option should have focus
    cy.realPress(["Shift", "Tab"]);
    cy.get("ic-text-field#dialog-text-field").should(HAVE_FOCUS);
    cy.realPress(["Shift", "Tab"]);
    cy.get("ic-search-bar").should(HAVE_FOCUS);
    cy.realPress(["Shift", "Tab"]);
    cy.get("ic-text-field[slot=additional-field]").should(HAVE_FOCUS);
    cy.realPress(["Shift", "Tab"]);
    cy.get("ic-radio-option[value=value2] input").should(HAVE_FOCUS);

    // after 2 more shift + tabs, the link inside the alert should have focus
    cy.realPress(["Shift", "Tab"]);
    cy.get("ic-button[slot=action]").should(HAVE_FOCUS);
    cy.realPress(["Shift", "Tab"]);
    cy.get("ic-link").should(HAVE_FOCUS);
  });

  it("should test focus of radio options when none selected", () => {
    mount(<SlottedUnselectedRadiosDialog />);

    cy.get(DIALOG);
    cy.wait(300);
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    // the first unselected radio option should have focus
    cy.wait(300);
    cy.get("ic-radio-option[value=value1] input").should(HAVE_FOCUS);

    // after tab, the text field should have focus
    cy.realPress("Tab");
    cy.wait(300);
    cy.get("ic-text-field#dialog-text-field").should(HAVE_FOCUS);

    // after shift + tab press, the first unselected radio option should have focus
    cy.realPress(["Shift", "Tab"]);
    cy.wait(300);

    cy.get("ic-radio-option[value=value1] input").should(HAVE_FOCUS);
  });

  it("should hide dialog on pressing escape on dialog", () => {
    mount(<SimpleDialog />);

    cy.get(BUTTON).click();
    cy.wait(300);
    cy.get(DIALOG).should(HAVE_ATTR, "open");
    cy.get(DIALOG).should(BE_VISIBLE);

    cy.get(BUTTON).realPress("Escape");

    cy.get(DIALOG).should(NOT_HAVE_ATTR, "open");
    cy.get(DIALOG).should(NOT_BE_VISIBLE);
  });

  it("should hide tooltip and then hide dialog on pressing escape on close button", () => {
    mount(<SimpleDialog />);

    cy.get(BUTTON).click();
    cy.wait(300);
    cy.get(DIALOG).should(HAVE_ATTR, "open");
    cy.get(DIALOG).should(BE_VISIBLE);

    cy.findShadowEl(DIALOG, CLOSE_ICON_BUTTON).shadow().find("button").focus();

    cy.findShadowEl(DIALOG, CLOSE_ICON_BUTTON)
      .shadow()
      .find("ic-tooltip")
      .shadow()
      .find(".ic-tooltip-container")
      .should(BE_VISIBLE);

    cy.findShadowEl(DIALOG, CLOSE_ICON_BUTTON).realPress("Escape");

    // first press of Escape should hide tooltip on button
    cy.findShadowEl(DIALOG, CLOSE_ICON_BUTTON)
      .shadow()
      .find("ic-tooltip")
      .shadow()
      .find(".ic-tooltip-container")
      .should(NOT_BE_VISIBLE);

    // second press should hide dialog
    cy.findShadowEl(DIALOG, CLOSE_ICON_BUTTON).realPress("Escape");

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

    cy.get(BUTTON).click();
    cy.wait(300);
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

    cy.get(BUTTON).click();
    cy.wait(300);
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.get("@icDialogCancelled").should(NOT_HAVE_BEEN_CALLED);
    cy.findShadowEl(DIALOG, "ic-button.ic-button-variant-tertiary")
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

    cy.get(DIALOG);
    cy.get(BUTTON).click();
    cy.wait(300);
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "/default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.013),
    });
  });

  it("should render with slotted content", () => {
    mount(<SlottedContentDialog />);

    cy.get(DIALOG);
    cy.get(SLOTTED_DIALOG_BUTTON).click();
    cy.wait(300);
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.checkA11yWithWait(undefined, 200);
    cy.compareSnapshot({
      name: "/slotted-content",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.026),
    });
  });

  it("should render with slotted content and focus interactive content", () => {
    mount(<SlottedContentDialog />);

    cy.get(DIALOG);
    cy.get(SLOTTED_DIALOG_BUTTON).click();
    cy.wait(300);
    cy.get(DIALOG).should(HAVE_ATTR, "open");
    cy.get("ic-select").should(HAVE_FOCUS);
    cy.get("ic-select").click();

    cy.checkA11yWithWait(undefined, 1100);
    cy.compareSnapshot({
      name: "/slotted-content-clicked",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.024),
    });
  });

  it("should render dialog with height constraint disabled", () => {
    mount(<NoHeightConstraintDialog />);

    cy.get(DIALOG);
    cy.get(SLOTTED_DIALOG_BUTTON).click();
    cy.wait(300);
    cy.get(DIALOG).should(HAVE_ATTR, "open");
    cy.get("ic-select").click();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/disable-height-constraint",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.017),
    });
  });

  it("should focus interactive content - accordion", () => {
    mount(<DialogAccordion />);

    cy.get(DIALOG);
    cy.get(SLOTTED_DIALOG_BUTTON).click();
    cy.wait(300);
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/accordion",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.018),
    });
  });

  it("should focus interactive content - accordion group", () => {
    mount(<DialogAccordionGroup />);

    cy.get(DIALOG);
    cy.get(SLOTTED_DIALOG_BUTTON).click();
    cy.wait(300);
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/accordion-group",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.001),
    });
  });

  it("should focus interactive content - accordion group with singleExpansion", () => {
    mount(<DialogAccordionGroupSingleExpansion />);

    cy.get(DIALOG);
    cy.get(SLOTTED_DIALOG_BUTTON).click();
    cy.wait(300);
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/accordion-group-single-expansion",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should focus interactive content - search bar", () => {
    mount(<DialogSearch />);

    cy.get(DIALOG);
    cy.get(SLOTTED_DIALOG_BUTTON).click();
    cy.wait(300);
    cy.get(DIALOG).should(HAVE_ATTR, "open");
    cy.wait(300);
    cy.realPress("Tab");
    cy.wait(300);
    cy.findShadowEl("ic-search-bar", "#clear-button")
      .should(HAVE_FOCUS)
      .realPress("Tab");
    cy.wait(300);
    cy.findShadowEl("ic-search-bar", "#search-submit-button")
      .should(HAVE_FOCUS)
      .realPress("Tab");
    cy.wait(300);
    cy.get("ic-text-field").should(HAVE_FOCUS);
  });

  it("should render neutral alert dialog", () => {
    mount(AlertDialog("neutral"));
    cy.checkHydrated(DIALOG);

    cy.checkA11yWithWait(undefined, 1100);
    cy.compareSnapshot({
      name: "/neutral-alert",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
    });
  });

  it("should render info alert dialog", () => {
    mount(AlertDialog("info"));
    cy.checkHydrated(DIALOG);

    cy.checkA11yWithWait(undefined, 1100);
    cy.compareSnapshot({
      name: "/info-alert",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
    });
  });

  it("should render warning alert dialog", () => {
    mount(AlertDialog("warning"));
    cy.checkHydrated(DIALOG);

    cy.checkA11yWithWait(undefined, 1100);
    cy.compareSnapshot({
      name: "/warning-alert",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.021),
    });
  });

  it("should render error alert dialog", () => {
    mount(AlertDialog("error"));
    cy.checkHydrated(DIALOG);

    cy.checkA11yWithWait(undefined, 1100);
    cy.compareSnapshot({
      name: "/error-alert",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
    });
  });

  it("should render success alert dialog", () => {
    mount(AlertDialog("success"));
    cy.checkHydrated(DIALOG);

    cy.checkA11yWithWait(undefined, 1100);
    cy.compareSnapshot({
      name: "/success-alert",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
    });
  });

  it("should render small dialog", () => {
    mount(SizeDialog("small"));
    cy.checkHydrated(DIALOG);

    cy.checkA11yWithWait(undefined, 1100);
    cy.compareSnapshot({
      name: "/small",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.013),
    });
  });

  it("should render large dialog", () => {
    mount(SizeDialog("large"));
    cy.checkHydrated(DIALOG);

    cy.checkA11yWithWait(undefined, 1100);
    cy.compareSnapshot({
      name: "/large",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.013),
    });
  });

  it("should render with no dialog controls", () => {
    mount(<NoButtonDialog />);

    cy.get(DIALOG);
    cy.get(BUTTON).click();
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/no-dialog-controls",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.013),
    });
  });

  it("should render destructive dialog controls", () => {
    mount(<DestructiveButtonDialog />);

    cy.get(DIALOG);
    cy.get(BUTTON).click();
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.checkA11yWithWait(undefined, 1000);
    cy.compareSnapshot({
      name: "/destructive-dialog-controls",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.015),
      delay: 1000,
    });
  });

  it("should render custom dialog controls, even when `hideDefaultControls` is set to `true`", () => {
    mount(<CustomButtonDialog />);

    cy.get(DIALOG);
    cy.get(DIALOG).should(HAVE_ATTR, "hide-default-controls", "true");

    cy.get("ic-button#custom-dialog-btn").click();
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/custom-dialog-controls",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.014),
    });
  });

  it("should render with hidden close button", () => {
    mount(<HideCloseDialog />);

    cy.get(DIALOG);
    cy.get(BUTTON).click();
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/hide-close-button",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.013),
    });
  });

  it("should scroll within the dialog - before scroll", () => {
    mount(<ScrollableDialog />);

    cy.get(DIALOG);
    cy.get(BUTTON).click();
    cy.wait(1000);
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/scroll-before",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.05),
    });
  });

  it("should scroll within the dialog - after scroll", () => {
    mount(<ScrollableDialog />);

    cy.get(DIALOG);
    cy.get(BUTTON).click();
    cy.wait(1000);
    cy.get(DIALOG).should(HAVE_ATTR, "open");
    cy.findShadowEl(DIALOG, ".content-area").scrollTo("bottom").wait(1000);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/scroll-after",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.057),
    });
  });

  it("should focus dynamically added element when shown", () => {
    mount(<DynamicDialog />);

    cy.get("ic-button#dynamic-dialog-btn").click();
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.get(DYNAMIC_SHOW_BUTTON).click();

    cy.findShadowEl(DYNAMIC_SHOW_BUTTON, "button").focus().realPress("Tab");
    cy.findShadowEl(DYNAMIC_SHOW_BUTTON, "button").realPress("Tab");

    cy.findShadowEl("ic-button#tab-btn", "button").should(HAVE_FOCUS);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/tab-dynamic-content",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.053),
    });
  });

  it("should render dialog with no width constraint", () => {
    mount(<NoWidthConstraintDialog />);

    cy.get(DIALOG);
    cy.get(BUTTON).click();
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/disable-width-constraint",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.033),
    });
  });

  it("should render theme dark dialog", () => {
    mount(<ThemeDark />);
    cy.checkHydrated(DIALOG);

    cy.checkA11yWithWait(undefined, 300);
    cy.compareSnapshot({
      name: "/theme-dark",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.014),
    });
  });

  it("should render tooltips correctly, e.g. flipped when there is not enough space", () => {
    mount(<DialogWithTooltips />);

    cy.get(DIALOG);
    cy.get(BUTTON).eq(0).click();
    cy.wait(300);
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/tooltip",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });

    cy.get(BUTTON).eq(2).shadow().find("button").focus();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/tooltip-shadow-dom",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
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

    cy.get(DIALOG);
    cy.get(BUTTON).click();
    cy.wait(300);
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.compareSnapshot({
      name: "/default-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
    });
  });

  it("should render with slotted content in high contrast mode", () => {
    mount(<SlottedContentDialog />);

    cy.get(DIALOG);
    cy.get(SLOTTED_DIALOG_BUTTON).click();
    cy.wait(300);
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.compareSnapshot({
      name: "/slotted-content-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.037),
    });
  });

  it("should render success alert dialog in high contrast mode", () => {
    mount(AlertDialog("success"));
    cy.checkHydrated(DIALOG);

    cy.wait(300).compareSnapshot({
      name: "/success-alert-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.029),
    });
  });

  it("should render warning alert dialog in high contrast mode", () => {
    mount(AlertDialog("warning"));
    cy.checkHydrated(DIALOG);

    cy.wait(300).compareSnapshot({
      name: "/warning-alert-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.029),
    });
  });

  it("should render with no dialog controls in high contrast mode", () => {
    mount(<NoButtonDialog />);

    cy.get(DIALOG);
    cy.get(BUTTON).click();
    cy.wait(300);
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.compareSnapshot({
      name: "/no-dialog-controls-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.018),
    });
  });

  it("should render destructive dialog controls in high contrast mode", () => {
    mount(<DestructiveButtonDialog />);

    cy.get(DIALOG);
    cy.get(BUTTON).click();
    cy.wait(300);
    cy.get(DIALOG).should(HAVE_ATTR, "open");

    cy.compareSnapshot({
      name: "/destructive-dialog-controls-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.021),
    });
  });
});
