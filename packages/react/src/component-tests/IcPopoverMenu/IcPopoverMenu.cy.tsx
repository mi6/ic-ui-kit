/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress/react";
import { HAVE_BEEN_CALLED_ONCE, NOT_BE_CALLED_ONCE } from "../utils/constants";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";
import {
  DisabledPopoverMenu,
  PopoverDropdown,
  PopoverMenuDescription,
  PopoverMenuWithVariants,
  PopoverWithMenuGroups,
} from "./IcPopoverMenuData";

describe("IcPopoverMenu", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("renders default", () => {
    mount(<PopoverDropdown />);

    cy.checkHydrated("ic-popover-menu");
    cy.checkA11yWithWait();

    cy.get("ic-button").click();

    cy.compareSnapshot({
      name: "default_afterclick_button",
      testThreshold: setThresholdBasedOnEnv(0.037),
    });
  });

  it("renders with description", () => {
    mount(<PopoverMenuDescription />);

    cy.checkA11yWithWait();

    cy.get("ic-button").click();

    cy.compareSnapshot({
      name: "popovermenu_with_description",
      testThreshold: setThresholdBasedOnEnv(0.049),
    });
  });

  it("should not be clickable when disabled", () => {
    mount(<DisabledPopoverMenu />);

    cy.checkA11yWithWait();
    cy.checkHydrated("ic-popover-menu");

    cy.get("ic-popover-menu").invoke(
      "on",
      "triggerPopoverMenuInstance",
      cy.stub().as("triggerPopoverMenuInstance")
    );

    cy.get("ic-button").click();
    cy.get("ic-menu-item").eq(0).click({ force: true });
    cy.get("ic-menu-item").eq(1).click({ force: true });
    cy.get("ic-menu-item").eq(2).click({ force: true });

    cy.get("@triggerPopoverMenuInstance").should(NOT_BE_CALLED_ONCE);

    cy.compareSnapshot({
      name: "disabled_dropdown",
      testThreshold: setThresholdBasedOnEnv(0.017),
    });
  });

  it("renders with button variations", () => {
    mount(<PopoverMenuWithVariants />);

    cy.checkA11yWithWait();

    cy.get("ic-button").click();

    cy.compareSnapshot({
      name: "popoverMenu_with_variants",
      testThreshold: setThresholdBasedOnEnv(0.061),
    });
  });

  it("render PopoverMenu with menu group", () => {
    mount(<PopoverWithMenuGroups />);

    cy.checkA11yWithWait();

    cy.get("ic-button").click();

    cy.compareSnapshot({
      name: "popoverMenu_with_menu_group",
      testThreshold: setThresholdBasedOnEnv(0.039),
    });
  });

  it("should emit icPopoverClosed when document body is clicked", () => {
    mount(<PopoverDropdown />);

    cy.checkA11yWithWait();

    cy.get("ic-popover-menu").invoke(
      "on",
      "icPopoverClosed",
      cy.stub().as("icPopoverClosed")
    );
    cy.get("ic-button").click();
    cy.get("body").click("bottomRight");

    cy.get("@icPopoverClosed").should(HAVE_BEEN_CALLED_ONCE);
  });

  it("should emit triggerPopoverMenuInstance when submenu trigger button is clicked", () => {
    mount(<PopoverDropdown />);

    cy.checkA11yWithWait();

    cy.get("ic-popover-menu").invoke(
      "on",
      "triggerPopoverMenuInstance",
      cy.stub().as("triggerPopoverMenuInstance")
    );

    cy.get("ic-button").click();
    cy.get("#submenu-trigger-actions").click();

    cy.get("@triggerPopoverMenuInstance").should(HAVE_BEEN_CALLED_ONCE);
  });

  it("should emit triggerPopoverMenuInstance when handleMenuItemClick", () => {
    mount(<PopoverMenuDescription />);

    cy.checkA11yWithWait();

    cy.get("ic-popover-menu").invoke(
      "on",
      "handleMenuItemClick",
      cy.stub().as("handleMenuItemClick")
    );

    cy.get("ic-button").click();
    cy.get("ic-menu-item").eq(0).click();

    cy.get("@handleMenuItemClick").should(HAVE_BEEN_CALLED_ONCE);
  });
});
