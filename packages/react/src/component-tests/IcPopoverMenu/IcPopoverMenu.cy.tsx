/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress/react";
import {
  HAVE_BEEN_CALLED_ONCE,
  NOT_BE_CALLED_ONCE,
  HAVE_ATTR,
  BE_VISIBLE,
  NOT_BE_VISIBLE,
  NOT_HAVE_BEEN_CALLED,
} from "../utils/constants";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";
import {
  DisabledPopoverMenu,
  MaxHeight,
  PopoverDropdown,
  PopoverMenuDescription,
  PopoverMenuWithVariants,
  PopoverTheme,
  PopoverWithMenuGroups,
} from "./IcPopoverMenuData";

const POPOVER_SELECTOR = "ic-popover-menu";
const BUTTON_SELECTOR = "ic-button";
const DEFAULT_TEST_THRESHOLD = 0.016;

describe("IcPopoverMenu end-to-end, visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render default", () => {
    mount(<PopoverDropdown />);

    cy.checkHydrated(POPOVER_SELECTOR);
    cy.get(BUTTON_SELECTOR).click().wait(500);

    //cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "default-after-click-button",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
    });
  });

  it.only("should render 'inherit' theme", () => {
    mount(<PopoverTheme theme="inherit" />);

    cy.checkHydrated(POPOVER_SELECTOR);
    cy.get(BUTTON_SELECTOR).click().wait(500);

    cy.compareSnapshot({
      name: "inherit-theme",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
    });
  });

  it.only("should render 'light' theme", () => {
    mount(<PopoverTheme theme="light" />);

    cy.checkHydrated(POPOVER_SELECTOR);
    cy.get(BUTTON_SELECTOR).click().wait(500);

    cy.compareSnapshot({
      name: "light-theme",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
    });
  });

  it.only("should render 'dark' theme", () => {
    mount(<PopoverTheme theme="dark" />);

    cy.checkHydrated(POPOVER_SELECTOR);
    cy.get(BUTTON_SELECTOR).click().wait(500);

    cy.compareSnapshot({
      name: "dark-theme",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
    });
  });

  it("should render with description", () => {
    mount(<PopoverMenuDescription />);

    cy.checkHydrated(POPOVER_SELECTOR);
    cy.get(BUTTON_SELECTOR).click().wait(500);

    // cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "description",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.033),
    });
  });

  it("should not be clickable when disabled", () => {
    mount(<DisabledPopoverMenu />);

    cy.checkHydrated(POPOVER_SELECTOR);

    cy.get(POPOVER_SELECTOR).invoke(
      "on",
      "handleMenuItemClick",
      cy.stub().as("handleMenuItemClick")
    );

    cy.get(POPOVER_SELECTOR).invoke(
      "on",
      "triggerPopoverMenuInstance",
      cy.stub().as("triggerPopoverMenuInstance")
    );

    cy.get(BUTTON_SELECTOR).click();
    cy.get("ic-menu-item").eq(0).click({ force: true });
    cy.get("ic-menu-item").eq(1).click({ force: true });
    cy.get("ic-menu-item").eq(2).click({ force: true });

    cy.get("@handleMenuItemClick").should(NOT_HAVE_BEEN_CALLED);
    cy.get("@triggerPopoverMenuInstance").should(NOT_BE_CALLED_ONCE);

    // cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "disabled",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("disabled menu items should be focussable", () => {
    mount(<DisabledPopoverMenu />);

    cy.checkHydrated(POPOVER_SELECTOR);

    cy.get(BUTTON_SELECTOR).click();
    cy.realPress("ArrowDown").wait(250);

    //cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "disabled-focused",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.002),
    });
  });

  it("should render with button variations", () => {
    mount(<PopoverMenuWithVariants />);

    cy.checkHydrated(POPOVER_SELECTOR);
    cy.get(BUTTON_SELECTOR).click().wait(500);

    // cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "variants",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.045),
    });
  });

  it("should render with menu group", () => {
    mount(<PopoverWithMenuGroups />);

    cy.checkHydrated(POPOVER_SELECTOR);
    cy.get(BUTTON_SELECTOR).click().wait(500);

    // cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "menu-group",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.023),
    });
  });

  it("should render with scrollbar when max height is set", () => {
    mount(<MaxHeight />);

    cy.checkHydrated(POPOVER_SELECTOR);
    cy.get(BUTTON_SELECTOR).click().wait(500);

    // cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "max-height",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.029),
    });
  });

  it("should focus submenu when submenu is opened", () => {
    mount(<PopoverDropdown />);

    cy.checkHydrated(POPOVER_SELECTOR);

    cy.get(BUTTON_SELECTOR).click();
    cy.get("#submenu-trigger-actions").click().wait(250);

    //checkA11yWithWait();
    cy.compareSnapshot({
      name: "submenu-focused",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.018),
    });
  });

  it("should emit icPopoverClosed when document body is clicked", () => {
    mount(<PopoverDropdown />);

    cy.checkHydrated(POPOVER_SELECTOR);
    // cy.checkA11yWithWait();

    cy.get(POPOVER_SELECTOR).invoke(
      "on",
      "icPopoverClosed",
      cy.stub().as("icPopoverClosed")
    );

    cy.get(BUTTON_SELECTOR).click();
    cy.get("body").click("bottomRight");

    cy.get("@icPopoverClosed").should(HAVE_BEEN_CALLED_ONCE);
  });

  it("should emit triggerPopoverMenuInstance when submenu trigger button is clicked", () => {
    mount(<PopoverDropdown />);

    cy.checkHydrated(POPOVER_SELECTOR);
    // cy.checkA11yWithWait();

    cy.get(POPOVER_SELECTOR).invoke(
      "on",
      "triggerPopoverMenuInstance",
      cy.stub().as("triggerPopoverMenuInstance")
    );

    cy.get(BUTTON_SELECTOR).click();
    cy.get("#submenu-trigger-actions").click();

    cy.get("@triggerPopoverMenuInstance").should(HAVE_BEEN_CALLED_ONCE);
  });

  it("should navigate through menu items and submenu items using keyboard", () => {
    mount(<PopoverDropdown />);

    cy.checkHydrated(POPOVER_SELECTOR);

    cy.get(POPOVER_SELECTOR).invoke(
      "on",
      "triggerPopoverMenuInstance",
      cy.stub().as("triggerPopoverMenuInstance")
    );

    cy.get(POPOVER_SELECTOR).invoke(
      "on",
      "icPopoverClosed",
      cy.stub().as("icPopoverClosed")
    );

    cy.get(BUTTON_SELECTOR).click();

    // navigate to submenu trigger and open submenu
    Cypress._.times(2, () => cy.realPress("ArrowDown"));
    cy.focused().as("activeElement");
    cy.get("@activeElement").should(HAVE_ATTR, "label", "Actions");
    cy.realPress("Enter");
    cy.get(POPOVER_SELECTOR + '[submenu-id="actions"]').should(BE_VISIBLE);
    cy.get("@triggerPopoverMenuInstance").should(HAVE_BEEN_CALLED_ONCE);

    // navigate through submenu to back button and close submenu
    Cypress._.times(4, () => cy.realPress("ArrowDown"));
    cy.realPress("Enter");
    cy.get(POPOVER_SELECTOR + '[submenu-id="actions"]').should(NOT_BE_VISIBLE);

    //close popover menu
    Cypress._.times(2, () => cy.realPress("Escape"));
    cy.get(POPOVER_SELECTOR).should(NOT_BE_VISIBLE);
    cy.get("@icPopoverClosed").should(HAVE_BEEN_CALLED_ONCE);
  });

  it("should emit icPopoverClosed when popover menu closes on menu item click", () => {
    mount(<PopoverDropdown />);

    cy.checkHydrated(POPOVER_SELECTOR);

    cy.get(POPOVER_SELECTOR).invoke(
      "on",
      "icPopoverClosed",
      cy.stub().as("icPopoverClosed")
    );

    cy.get(BUTTON_SELECTOR).click();
    cy.get("ic-menu-item").eq(0).click();

    cy.get("@icPopoverClosed").should(HAVE_BEEN_CALLED_ONCE);
  });

  it("should emit handleMenuItemClick when user clicks a menu item", () => {
    mount(<PopoverMenuDescription />);

    cy.checkHydrated(POPOVER_SELECTOR);
    // cy.checkA11yWithWait();

    cy.get(POPOVER_SELECTOR).invoke(
      "on",
      "handleMenuItemClick",
      cy.stub().as("handleMenuItemClick")
    );

    cy.get(BUTTON_SELECTOR).click();
    cy.get("ic-menu-item").eq(0).click();

    cy.get("@handleMenuItemClick").should(HAVE_BEEN_CALLED_ONCE);
  });
});

describe("IcPopoverMenu visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  after(() => {
    cy.disableForcedColors();
  });

  it("should render default popover menu in high contrast mode", () => {
    mount(<PopoverDropdown />);

    cy.checkHydrated(POPOVER_SELECTOR);
    cy.get(BUTTON_SELECTOR).click().wait(500);

    cy.compareSnapshot({
      name: "default-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
    });
  });

  it("should render disabled popover menu in high contrast mode", () => {
    mount(<DisabledPopoverMenu />);

    cy.checkHydrated(POPOVER_SELECTOR);
    cy.get(BUTTON_SELECTOR).click().wait(500);

    cy.compareSnapshot({
      name: "disabled-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.012),
    });
  });

  it("should render with button variations in high contrast mode", () => {
    mount(<PopoverMenuWithVariants />);

    cy.checkHydrated(POPOVER_SELECTOR);
    cy.get(BUTTON_SELECTOR).click().wait(500);

    cy.compareSnapshot({
      name: "variants-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.044),
    });
  });

  it("should render with menu group in high contrast mode", () => {
    mount(<PopoverWithMenuGroups />);

    cy.checkHydrated(POPOVER_SELECTOR);
    cy.get(BUTTON_SELECTOR).click().wait(500);

    cy.compareSnapshot({
      name: "menu-group-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.027),
    });
  });
});
