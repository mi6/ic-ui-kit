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

const DEFAULT_TEST_THRESHOLD = 0.016;

describe("IcPopoverMenu", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render default", () => {
    mount(<PopoverDropdown />);

    cy.checkHydrated("ic-popover-menu");

    cy.get("ic-button").click().wait(500);

    // cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "default-after-click-button",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
    });
  });

  it("should render with description", () => {
    mount(<PopoverMenuDescription />);

    cy.get("ic-button").click().wait(500);

    // cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "description",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.033),
    });
  });

  it("should not be clickable when disabled", () => {
    mount(<DisabledPopoverMenu />);

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

    // cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "disabled",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render with button variations", () => {
    mount(<PopoverMenuWithVariants />);

    cy.get("ic-button").click().wait(500);

    // cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "variants",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.045),
    });
  });

  it("should render with menu group", () => {
    mount(<PopoverWithMenuGroups />);

    cy.get("ic-button").click().wait(500);

    // cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "menu-group",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.023),
      delay: 1000,
    });
  });

  it("should emit icPopoverClosed when document body is clicked", () => {
    mount(<PopoverDropdown />);

    // cy.checkA11yWithWait();

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

    // cy.checkA11yWithWait();

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

    // cy.checkA11yWithWait();

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
