/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress/react";
import {
  NoBackgroundClickDialog,
  SimpleDialog,
  SlottedContentDialog,
  NoHeightConstraintDialog,
  SlottedContentDialogAccordian,
  SlottedContentDialogAccordianGroup,
  SlottedContentDialogAccordianGroupSingleExpansion,
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
  NOT_BE_VISIBLE,
  NOT_EXIST,
} from "../utils/constants";

const DEFAULT_TEST_THRESHOLD = 0.07;

const DYNAMIC_SHOW_BUTTON = "ic-button#show-btn";

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
    cy.get("ic-button").click();
    cy.get("ic-dialog").should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "default",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });

    cy.get("body").click(0, 0);

    cy.get("ic-dialog").should(NOT_BE_VISIBLE);
  });

  it("should focus on slotted content", () => {
    mount(<SlottedContentDialog />);
    cy.get("ic-dialog").should("exist");
    cy.get("ic-button#slotted-dialog-btn").click();

    cy.checkHydrated("ic-dialog");
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "slotted-content",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
    });

    cy.get("ic-select").click();
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "slotted-content-clicked",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
  });

  it("should focus on slotted content with height constraint disabled", () => {
    mount(<NoHeightConstraintDialog />);
    cy.get("ic-dialog").should("exist");
    cy.get("ic-button#slotted-dialog-btn").click();

    cy.get("ic-select").click();
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "disable-height-constraint",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
  });

  it("should focus on slotted content - accordion", () => {
    mount(<SlottedContentDialogAccordian />);
    cy.get("ic-dialog").should("exist");
    cy.get("ic-button#slotted-dialog-btn").click();

    cy.checkHydrated("ic-dialog");
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "slotted-content-accordian",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
  });

  it("should focus on slotted content - accordion group", () => {
    mount(<SlottedContentDialogAccordianGroup />);
    cy.get("ic-dialog").should("exist");
    cy.get("ic-button#slotted-dialog-btn").click();

    cy.checkHydrated("ic-dialog");
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "slotted-content-accordian-group",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
  });

  it("should focus slotted content - accordion group with singleExpansion", () => {
    mount(<SlottedContentDialogAccordianGroupSingleExpansion />);
    cy.get("ic-dialog").should("exist");
    cy.get("ic-button#slotted-dialog-btn").click();

    cy.checkHydrated("ic-dialog");
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "slotted-content-accordian-group-single-expansion",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
  });

  it("should not hide when background click is disabled", () => {
    mount(<NoBackgroundClickDialog />);
    cy.get("ic-button").click();
    cy.get("ic-dialog").should(BE_VISIBLE);

    cy.get("body").click(0, 0);

    cy.get("ic-dialog").should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "background-click-disabled",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
  });

  it("should render neutral alert dialog", () => {
    mount(alertDialog("neutral"));

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "neutral-alert",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
    });
  });

  it("should render info alert dialog", () => {
    mount(alertDialog("info"));

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "info-alert",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.04,
    });
  });

  it("should render warning alert dialog", () => {
    mount(alertDialog("warning"));

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "warning-alert",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
    });
  });

  it("should render error alert dialog", () => {
    mount(alertDialog("error"));

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "error-alert",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.04,
    });
  });

  it("should render success alert dialog", () => {
    mount(alertDialog("success"));

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "success-alert",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.03,
    });
  });

  it("should render small dialog", () => {
    mount(sizeDialog("small"));

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "small",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.01,
    });
  });

  it("should render large dialog", () => {
    mount(sizeDialog("large"));

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "large",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.01,
    });
  });

  it("should render no dialog controls", () => {
    mount(<NoButtonDialog />);

    cy.get("ic-button").click();
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "no-dialog-controls",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
  });

  it("should render destructive dialog controls", () => {
    mount(<DestructiveButtonDialog />);

    cy.get("ic-button").click();
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "destructive-dialog-controls",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
  });

  it("should render custom dialog controls", () => {
    mount(<CustomButtonDialog />);

    cy.get("ic-button#custom-dialog-btn").click();
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "custom-dialog-controls",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.01,
    });
  });

  it("should render with hidden close button", () => {
    mount(<HideCloseDialog />);

    cy.get("ic-button").click();
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "hide-close-button",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
  });

  it("should scroll within the dialog", () => {
    mount(<ScrollableDialog />);

    cy.get("ic-button").click();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "scroll-before",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
    });

    cy.findShadowEl("ic-dialog", ".content-area").scrollTo("bottom");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "scroll-after",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
    });
  });

  it("should focus dynamically added element when shown and skips when hidden", () => {
    mount(<DynamicDialog />);

    cy.get("ic-button#dynamic-dialog-btn").click();

    cy.get(DYNAMIC_SHOW_BUTTON).click();

    cy.findShadowEl(DYNAMIC_SHOW_BUTTON, "button").focus();

    cy.focused().next().next().shadow().find("button").focus();

    cy.findShadowEl("ic-button#tab-btn", "button").should(HAVE_FOCUS);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "tab-dynamic-content",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
    });

    cy.get("ic-button#hide-btn").click();

    cy.findShadowEl(DYNAMIC_SHOW_BUTTON, "button").focus();

    cy.focused().next().next().should(NOT_EXIST);
  });
});
