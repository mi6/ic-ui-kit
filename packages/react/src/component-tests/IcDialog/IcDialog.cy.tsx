/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress/react";
import {
  NoBackgroundClickDialog,
  SimpleDialog,
  SlottedContentDialog,
  NoHeightConstraintDialog,
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

  it("renders and hides when background is clicked", () => {
    mount(<SimpleDialog />);
    cy.get("ic-button").click();
    cy.get("ic-dialog").should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot("default", DEFAULT_TEST_THRESHOLD);

    cy.get("body").click(0, 0);

    cy.get("ic-dialog").should(NOT_BE_VISIBLE);
  });

  it("focuses slotted content", () => {
    mount(<SlottedContentDialog />);
    cy.get("ic-dialog").should("exist");
    cy.get("ic-button#slotted-dialog-btn").click();

    cy.checkHydrated("ic-dialog");
    cy.checkA11yWithWait();
    cy.compareSnapshot("slotted-content", DEFAULT_TEST_THRESHOLD + 0.02);

    cy.get("ic-select").click();
    cy.checkA11yWithWait();
    cy.compareSnapshot("slotted-content-clicked", DEFAULT_TEST_THRESHOLD);
  });

  it("focuses slotted content with height constraint disabled", () => {
    mount(<NoHeightConstraintDialog />);
    cy.get("ic-dialog").should("exist");
    cy.get("ic-button#slotted-dialog-btn").click();

    cy.get("ic-select").click();
    cy.checkA11yWithWait();
    cy.compareSnapshot("disable-height-constraint", DEFAULT_TEST_THRESHOLD);
  });

  it("should not hide when background click is disabled", () => {
    mount(<NoBackgroundClickDialog />);
    cy.get("ic-button").click();
    cy.get("ic-dialog").should(BE_VISIBLE);

    cy.get("body").click(0, 0);

    cy.get("ic-dialog").should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot("background-click-disabled", DEFAULT_TEST_THRESHOLD);
  });

  it("renders neutral alert dialog", () => {
    mount(alertDialog("neutral"));

    cy.checkA11yWithWait();
    cy.compareSnapshot("neutral-alert", DEFAULT_TEST_THRESHOLD + 0.02);
  });

  it("renders info alert dialog", () => {
    mount(alertDialog("info"));

    cy.checkA11yWithWait();
    cy.compareSnapshot("info-alert", DEFAULT_TEST_THRESHOLD + 0.04);
  });

  it("renders warning alert dialog", () => {
    mount(alertDialog("warning"));

    cy.checkA11yWithWait();
    cy.compareSnapshot("warning-alert", DEFAULT_TEST_THRESHOLD + 0.02);
  });

  it("renders error alert dialog", () => {
    mount(alertDialog("error"));

    cy.checkA11yWithWait();
    cy.compareSnapshot("error-alert", DEFAULT_TEST_THRESHOLD + 0.04);
  });

  it("renders success alert dialog", () => {
    mount(alertDialog("success"));

    cy.checkA11yWithWait();
    cy.compareSnapshot("success-alert", DEFAULT_TEST_THRESHOLD + 0.03);
  });

  it("renders small dialog", () => {
    mount(sizeDialog("small"));

    cy.checkA11yWithWait();
    cy.compareSnapshot("small", DEFAULT_TEST_THRESHOLD + 0.01);
  });

  it("renders large dialog", () => {
    mount(sizeDialog("large"));

    cy.checkA11yWithWait();
    cy.compareSnapshot("large", DEFAULT_TEST_THRESHOLD + 0.01);
  });

  it("renders no dialog controls", () => {
    mount(<NoButtonDialog />);

    cy.get("ic-button").click();
    cy.checkA11yWithWait();
    cy.compareSnapshot("no-dialog-controls", DEFAULT_TEST_THRESHOLD);
  });

  it("renders destructive dialog controls", () => {
    mount(<DestructiveButtonDialog />);

    cy.get("ic-button").click();
    cy.checkA11yWithWait();
    cy.compareSnapshot("destructive-dialog-controls", DEFAULT_TEST_THRESHOLD);
  });

  it("renders custom dialog controls", () => {
    mount(<CustomButtonDialog />);

    cy.get("ic-button#custom-dialog-btn").click();
    cy.checkA11yWithWait();
    cy.compareSnapshot("custom-dialog-controls", DEFAULT_TEST_THRESHOLD + 0.01);
  });

  it("renders with hidden close button", () => {
    mount(<HideCloseDialog />);

    cy.get("ic-button").click();
    cy.checkA11yWithWait();
    cy.compareSnapshot("hide-close-button", DEFAULT_TEST_THRESHOLD);
  });

  it("scrolls within the dialog", () => {
    mount(<ScrollableDialog />);

    cy.get("ic-button").click();

    cy.checkA11yWithWait();
    cy.compareSnapshot("scroll-before", DEFAULT_TEST_THRESHOLD + 0.05);

    cy.findShadowEl("ic-dialog", ".content-area").scrollTo("bottom");

    cy.checkA11yWithWait();
    cy.compareSnapshot("scroll-after", DEFAULT_TEST_THRESHOLD + 0.05);
  });

  it("focuses dynamically added element when shown and skips when hidden", () => {
    mount(<DynamicDialog />);

    cy.get("ic-button#dynamic-dialog-btn").click();

    cy.get(DYNAMIC_SHOW_BUTTON).click();

    cy.findShadowEl(DYNAMIC_SHOW_BUTTON, "button").focus();

    cy.focused().next().next().shadow().find("button").focus();

    cy.findShadowEl("ic-button#tab-btn", "button").should(HAVE_FOCUS);

    cy.checkA11yWithWait();
    cy.compareSnapshot("tab-dynamic-content", DEFAULT_TEST_THRESHOLD + 0.05);

    cy.get("ic-button#hide-btn").click();

    cy.findShadowEl(DYNAMIC_SHOW_BUTTON, "button").focus();

    cy.focused().next().next().should(NOT_EXIST);
  });
});
