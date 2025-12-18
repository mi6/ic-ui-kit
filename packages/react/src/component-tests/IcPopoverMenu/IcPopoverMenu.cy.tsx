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
  PositioningStrategy,
} from "./IcPopoverMenuData";
import { IcTheme } from "../../components";
import { CYPRESS_AXE_OPTIONS } from "../../../cypress/utils/a11y";

const BUTTON_SELECTOR = "ic-button";
const MENU_ITEM_SELECTOR = "ic-menu-item";
const POPOVER_SELECTOR = "ic-popover-menu";

const DISABLED_POPOVER_AXE_OPTIONS = {
  rules: {
    ...CYPRESS_AXE_OPTIONS.rules,
    "nested-interactive": { enabled: false },
  },
};

const DEFAULT_TEST_THRESHOLD = 0.015;

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
    cy.get(BUTTON_SELECTOR).click();
    cy.wait(500);

    //cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/default-after-click-button",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.015),
    });
  });

  it("should render 'inherit' theme", () => {
    mount(
      <IcTheme theme="light">
        <PopoverTheme theme="inherit" />
      </IcTheme>
    );

    cy.checkHydrated(POPOVER_SELECTOR);
    cy.get(BUTTON_SELECTOR).click();
    cy.wait(500);

    cy.compareSnapshot({
      name: "/inherit-theme",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.016),
    });
  });

  it("should render 'light' theme", () => {
    mount(<PopoverTheme theme="light" />);

    cy.checkHydrated(POPOVER_SELECTOR);
    cy.get(BUTTON_SELECTOR).click();
    cy.wait(500);

    cy.compareSnapshot({
      name: "/light-theme",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.016),
    });
  });

  it("should render 'dark' theme", () => {
    mount(<PopoverTheme theme="dark" />);

    cy.checkHydrated(POPOVER_SELECTOR);
    cy.get(BUTTON_SELECTOR).click();
    cy.wait(500);

    cy.compareSnapshot({
      name: "/dark-theme",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.014),
    });
  });

  it("should render with description", () => {
    mount(<PopoverMenuDescription />);

    cy.checkHydrated(POPOVER_SELECTOR);
    cy.get(BUTTON_SELECTOR).click();
    cy.wait(500);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/description",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.027),
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
    cy.get(MENU_ITEM_SELECTOR).eq(0).click({ force: true });
    cy.get(MENU_ITEM_SELECTOR).eq(1).click({ force: true });
    cy.get(MENU_ITEM_SELECTOR).eq(2).click({ force: true });

    cy.get("@handleMenuItemClick").should(NOT_HAVE_BEEN_CALLED);
    cy.get("@triggerPopoverMenuInstance").should(NOT_BE_CALLED_ONCE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/disabled",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("disabled menu items should be focussable", () => {
    mount(<DisabledPopoverMenu />);

    cy.checkHydrated(POPOVER_SELECTOR);

    cy.get(BUTTON_SELECTOR).click();
    cy.realPress("ArrowDown");
    cy.wait(250);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/disabled-focused",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.001),
    });
  });

  it("should render with button variations", () => {
    mount(<PopoverMenuWithVariants />);

    cy.checkHydrated(POPOVER_SELECTOR);
    cy.get(BUTTON_SELECTOR).click();
    cy.wait(500);

    // this accessibility check had to be modified, as the 'toggle' variant ic-menu-item triggers the nested-interactive rule
    // but in manual testing the menu items read okay to NVDA and Voiceover
    cy.checkA11yWithWait(undefined, undefined, DISABLED_POPOVER_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "/variants",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.034),
    });
  });

  it("should render with menu group", () => {
    mount(<PopoverWithMenuGroups />);

    cy.checkHydrated(POPOVER_SELECTOR);
    cy.get(BUTTON_SELECTOR).click();
    cy.wait(500);

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "/menu-group",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.016),
    });
  });

  it("should render with scrollbar when max height is set", () => {
    mount(<MaxHeight />);

    cy.checkHydrated(POPOVER_SELECTOR);
    cy.get(BUTTON_SELECTOR).click();
    cy.wait(500);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/max-height",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.028),
    });
  });

  it("should focus submenu when submenu is opened", () => {
    mount(<PopoverDropdown />);

    cy.checkHydrated(POPOVER_SELECTOR);

    cy.get(BUTTON_SELECTOR).click();
    cy.get("#submenu-trigger-actions").click();
    cy.wait(250);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/submenu-focused",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.01),
    });
  });

  it("should emit icPopoverClosed when document body is clicked", () => {
    mount(<PopoverDropdown />);

    cy.checkHydrated(POPOVER_SELECTOR);
    cy.checkA11yWithWait();

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
    cy.checkA11yWithWait();

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
    cy.get(MENU_ITEM_SELECTOR).eq(0).click();

    cy.get("@icPopoverClosed").should(HAVE_BEEN_CALLED_ONCE);
  });

  it("should correctly reopen when closed from a submenu", () => {
    mount(<PopoverDropdown />);

    cy.checkHydrated(POPOVER_SELECTOR);
    cy.checkA11yWithWait();

    cy.get(POPOVER_SELECTOR).invoke(
      "on",
      "icPopoverClosed",
      cy.stub().as("icPopoverClosed")
    );

    cy.get(BUTTON_SELECTOR).click();
    cy.get("#submenu-trigger-actions").click();
    cy.wait(250);
    cy.get("body").click("bottomRight");
    cy.get("@icPopoverClosed").should(HAVE_BEEN_CALLED_ONCE);
    cy.get(BUTTON_SELECTOR).click();

    cy.compareSnapshot({
      name: "/default-after-click-button",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.015),
    });
  });

  it("should emit handleMenuItemClick when user clicks a menu item", () => {
    mount(<PopoverMenuDescription />);

    cy.checkHydrated(POPOVER_SELECTOR);
    cy.checkA11yWithWait();

    cy.get(POPOVER_SELECTOR).invoke(
      "on",
      "handleMenuItemClick",
      cy.stub().as("handleMenuItemClick")
    );

    cy.get(BUTTON_SELECTOR).click();
    cy.get(MENU_ITEM_SELECTOR).eq(0).click();

    cy.get("@handleMenuItemClick").should(HAVE_BEEN_CALLED_ONCE);
  });

  it("should emit icToggleChecked when a user clicks a toggle menu item", () => {
    mount(<PopoverMenuWithVariants />);

    cy.checkHydrated(POPOVER_SELECTOR);

    cy.get(MENU_ITEM_SELECTOR)
      .eq(3)
      .invoke("on", "icToggleChecked", cy.stub().as("icToggleChecked"));

    cy.get(BUTTON_SELECTOR).click();
    cy.get(MENU_ITEM_SELECTOR).eq(3).click();

    cy.get("@icToggleChecked").should(HAVE_BEEN_CALLED_ONCE);
  });

  it("should show popover is cropped", () => {
    mount(<PositioningStrategy fixed={false} />);

    cy.checkHydrated(POPOVER_SELECTOR);
    cy.get(BUTTON_SELECTOR).click();
    cy.wait(500);

    cy.compareSnapshot({
      name: "/position-absolute",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.016),
    });
  });

  it("should test popover is not cropped when `fixedPositioning` set to `true`", () => {
    mount(<PositioningStrategy fixed={true} />);

    cy.checkHydrated(POPOVER_SELECTOR);
    cy.get(BUTTON_SELECTOR).click();
    cy.wait(500);

    cy.compareSnapshot({
      name: "/position-fixed",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.016),
    });
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
    cy.get(BUTTON_SELECTOR).click();
    cy.wait(500);

    cy.compareSnapshot({
      name: "/default-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.018),
    });
  });

  it("should render disabled popover menu in high contrast mode", () => {
    mount(<DisabledPopoverMenu />);

    cy.checkHydrated(POPOVER_SELECTOR);
    cy.get(BUTTON_SELECTOR).click();
    cy.wait(500);

    cy.compareSnapshot({
      name: "/disabled-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
    });
  });

  it("should render with button variations in high contrast mode", () => {
    mount(<PopoverMenuWithVariants />);

    cy.checkHydrated(POPOVER_SELECTOR);
    cy.get(BUTTON_SELECTOR).click();
    cy.wait(500);

    cy.compareSnapshot({
      name: "/variants-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.044),
    });
  });

  it("should render with menu group in high contrast mode", () => {
    mount(<PopoverWithMenuGroups />);

    cy.checkHydrated(POPOVER_SELECTOR);
    cy.get(BUTTON_SELECTOR).click();
    cy.wait(500);

    cy.compareSnapshot({
      name: "/menu-group-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.027),
    });
  });
});
