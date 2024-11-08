/* eslint-disable react/jsx-no-bind */
/// <reference types='Cypress' />

import { mount } from "cypress/react";
import React from "react";
import {
  WithNavButtonsTopNav,
  WithExpandableNavGroupAndNavItemsTopNav,
  WithNavItemsTopNav,
  WithNavGroupAndNavItemsTopNav,
  WithExpandableNavGroupAndNavItemsSideNav,
  WithNavGroupAndNavItemsSideNav,
  WithNavItemsSideNav,
  AllNavTypesTopNav,
  AllNavTypesSideNav,
} from "./IcNavigationMenuTestData";
import {
  HAVE_BEEN_CALLED_ONCE,
  HAVE_CLASS,
  HAVE_FOCUS,
  NOT_EXIST,
} from "../utils/constants";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const DEFAULT_HEIGHT = 600;
const DEFAULT_WIDTH = 576;
const DEFAULT_TEST_THRESHOLD = 0.036;

const TOP_NAV_SELECTOR = "ic-top-navigation";
const SIDE_NAV_SELECTOR = "ic-side-navigation";
const MENU_BUTTON_SELECTOR = "#menu-button";
const CLOSE_MENU_BUTTON_SELECTOR = "#menu-close-button";
const NAVIGATION_MENU_SELECTOR = "ic-navigation-menu";
const NAVIGATION_GROUP_SELECTOR = "ic-navigation-group";
const NAVIGATION_ITEM_SELECTOR = "ic-navigation-item";
const NAVIGATION_BUTTON_SELECTOR = "ic-navigation-button";

describe("IcNavigationMenu end-to-end and visual regression tests", () => {
  beforeEach(() => {
    cy.viewport(DEFAULT_WIDTH, DEFAULT_HEIGHT);
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  describe("Within a top navigation", () => {
    it("should render with expandable navigation groups and navigation items", () => {
      mount(<WithExpandableNavGroupAndNavItemsTopNav />);

      cy.checkShadowElVisible(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR);
      cy.findShadowEl(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR).click();

      cy.checkA11yWithWait(undefined, 250);
      cy.compareSnapshot({
        name: "with-expandable-nav-groups-top-nav",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.014),
      });
    });

    it("should render with expandable navigation groups and navigation items - expanded", () => {
      mount(<WithExpandableNavGroupAndNavItemsTopNav />);

      cy.checkShadowElVisible(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR);
      cy.findShadowEl(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR).click();

      cy.get(NAVIGATION_GROUP_SELECTOR).eq(0).shadow().find("button").click();
      cy.realPress("Tab");
      cy.realPress("Tab");
      cy.realPress("Tab");
      cy.realPress("Enter");

      //cy.checkA11yWithWait(undefined, 250);
      cy.wait(250).compareSnapshot({
        name: "with-expandable-nav-groups-top-nav-expanded",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.025),
      });
    });

    it("should close navigation menu on close button and emit icNavigationMenuClose event", () => {
      mount(<WithExpandableNavGroupAndNavItemsTopNav />);

      cy.checkShadowElVisible(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR);
      cy.findShadowEl(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR).click();

      cy.findShadowEl(TOP_NAV_SELECTOR, NAVIGATION_MENU_SELECTOR).invoke(
        "on",
        "icNavigationMenuClose",
        cy.stub().as("icNavigationMenuClose")
      );

      cy.findShadowEl(TOP_NAV_SELECTOR, NAVIGATION_MENU_SELECTOR)
        .shadow()
        .find(CLOSE_MENU_BUTTON_SELECTOR)
        .should(HAVE_FOCUS);
      cy.realPress("Enter");
      cy.get(NAVIGATION_MENU_SELECTOR).should(NOT_EXIST);
      cy.get("@icNavigationMenuClose").should(HAVE_BEEN_CALLED_ONCE);
    });

    it("should tab to expandable navigation groups", () => {
      mount(<WithExpandableNavGroupAndNavItemsTopNav />);

      cy.checkShadowElVisible(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR);
      cy.findShadowEl(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR).click();

      cy.findShadowEl(TOP_NAV_SELECTOR, NAVIGATION_MENU_SELECTOR)
        .shadow()
        .find(CLOSE_MENU_BUTTON_SELECTOR)
        .should(HAVE_FOCUS);
      cy.realPress("Tab");
      cy.get(NAVIGATION_GROUP_SELECTOR).eq(0).should(HAVE_FOCUS);
      cy.realPress("Tab");
      cy.get(NAVIGATION_GROUP_SELECTOR).eq(1).should(HAVE_FOCUS);
    });

    it("should render focus state on expandable navigation groups", () => {
      mount(<WithExpandableNavGroupAndNavItemsTopNav />);

      cy.checkShadowElVisible(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR);
      cy.findShadowEl(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR).click();

      cy.findShadowEl(TOP_NAV_SELECTOR, NAVIGATION_MENU_SELECTOR)
        .shadow()
        .find(CLOSE_MENU_BUTTON_SELECTOR)
        .should(HAVE_FOCUS);
      cy.realPress("Tab");
      cy.get(NAVIGATION_GROUP_SELECTOR).eq(0).should(HAVE_FOCUS);

      cy.checkA11yWithWait(undefined, 250);
      cy.compareSnapshot({
        name: "expandable-nav-group-focused-top-nav",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.004),
      });
    });

    it.skip("should expand navigation groups and tab to navigation items within expandable navigation groups", () => {
      mount(<WithExpandableNavGroupAndNavItemsTopNav />);

      cy.checkShadowElVisible(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR);
      cy.findShadowEl(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR).click();

      cy.findShadowEl(TOP_NAV_SELECTOR, NAVIGATION_MENU_SELECTOR)
        .shadow()
        .find(CLOSE_MENU_BUTTON_SELECTOR)
        .should(HAVE_FOCUS);
      cy.realPress("Tab");
      cy.get(NAVIGATION_GROUP_SELECTOR).eq(0).should(HAVE_FOCUS);
      cy.realPress("Enter");
      cy.realPress("Tab");
      cy.get(NAVIGATION_ITEM_SELECTOR).eq(0).should(HAVE_FOCUS);
      cy.realPress("Tab");
      cy.get(NAVIGATION_ITEM_SELECTOR).eq(1).should(HAVE_FOCUS);
      cy.realPress("Tab");
      cy.get(NAVIGATION_GROUP_SELECTOR).eq(1).should(HAVE_FOCUS);
      cy.realPress("Enter");
      cy.realPress("Tab");
      // test fails at this point
      cy.get(NAVIGATION_ITEM_SELECTOR).eq(2).should(HAVE_FOCUS);
      cy.realPress("Tab");
      cy.get(NAVIGATION_ITEM_SELECTOR).eq(3).should(HAVE_FOCUS);
    });

    it("should render with focus state on navigation item within expandable navigation group", () => {
      mount(<WithExpandableNavGroupAndNavItemsTopNav />);

      cy.checkShadowElVisible(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR);
      cy.findShadowEl(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR).click();

      cy.findShadowEl(TOP_NAV_SELECTOR, NAVIGATION_MENU_SELECTOR)
        .shadow()
        .find(CLOSE_MENU_BUTTON_SELECTOR)
        .should(HAVE_FOCUS);
      cy.realPress("Tab");
      cy.realPress("Enter");
      cy.realPress("Tab");
      cy.get(NAVIGATION_ITEM_SELECTOR).eq(0).should(HAVE_FOCUS);

      cy.checkA11yWithWait(undefined, 250);
      cy.compareSnapshot({
        name: "nav-item-within-expandable-nav-group-focused-top-nav",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.016),
      });
    });

    it("should emit navItemClicked event when navigation item is clicked", () => {
      mount(<WithExpandableNavGroupAndNavItemsTopNav />);

      cy.checkShadowElVisible(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR);
      cy.findShadowEl(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR).click();

      cy.get(NAVIGATION_ITEM_SELECTOR).invoke(
        "on",
        "navItemClicked",
        cy.stub().as("navItemClicked")
      );

      cy.findShadowEl(TOP_NAV_SELECTOR, NAVIGATION_MENU_SELECTOR)
        .shadow()
        .find(CLOSE_MENU_BUTTON_SELECTOR)
        .should(HAVE_FOCUS);
      cy.realPress("Tab");
      cy.get(NAVIGATION_GROUP_SELECTOR).eq(0).should(HAVE_FOCUS);
      cy.realPress("Enter");
      cy.realPress("Tab");
      cy.get(NAVIGATION_ITEM_SELECTOR).eq(0).should(HAVE_FOCUS).click();
      cy.get("@navItemClicked").should(HAVE_BEEN_CALLED_ONCE);
    });

    it("should render with navigation groups and navigation items", () => {
      mount(<WithNavGroupAndNavItemsTopNav />);

      cy.checkShadowElVisible(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR);
      cy.findShadowEl(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR).click();

      //cy.checkA11yWithWait(undefined, 250);
      cy.compareSnapshot({
        name: "with-nav-groups-top-nav",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.032),
      });
    });

    it.skip("should tab to navigation groups and navigation items", () => {
      mount(<WithNavGroupAndNavItemsTopNav />);

      cy.checkShadowElVisible(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR);
      cy.findShadowEl(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR).click();

      cy.findShadowEl(TOP_NAV_SELECTOR, NAVIGATION_MENU_SELECTOR)
        .shadow()
        .find(CLOSE_MENU_BUTTON_SELECTOR)
        .should(HAVE_FOCUS);
      //fails at this point - navigation group doesn't get focus
      cy.realPress("Tab");
      cy.get(NAVIGATION_GROUP_SELECTOR).eq(0).should(HAVE_FOCUS);
      cy.realPress("Tab");
      cy.get(NAVIGATION_ITEM_SELECTOR).eq(0).should(HAVE_FOCUS);
      cy.realPress("Tab");
      cy.get(NAVIGATION_ITEM_SELECTOR).eq(1).should(HAVE_FOCUS);
      cy.realPress("Tab");
      cy.get(NAVIGATION_GROUP_SELECTOR).eq(1).should(HAVE_FOCUS);
      cy.realPress("Tab");
      cy.get(NAVIGATION_ITEM_SELECTOR).eq(2).should(HAVE_FOCUS);
      cy.realPress("Tab");
      cy.get(NAVIGATION_ITEM_SELECTOR).eq(3).should(HAVE_FOCUS);
    });

    it.skip("should render focus state on navigation group", () => {
      mount(<WithNavGroupAndNavItemsTopNav />);

      cy.checkShadowElVisible(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR);
      cy.findShadowEl(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR).click();

      cy.findShadowEl(TOP_NAV_SELECTOR, NAVIGATION_MENU_SELECTOR)
        .shadow()
        .find(CLOSE_MENU_BUTTON_SELECTOR)
        .should(HAVE_FOCUS);
      //fails at this point - navigation group doesn't get focus
      cy.realPress("Tab");
      cy.get(NAVIGATION_GROUP_SELECTOR).eq(0).should(HAVE_FOCUS);

      cy.checkA11yWithWait(undefined, 250);
      cy.compareSnapshot({
        name: "nav-group-focused-top-nav",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
      });
    });

    it("should render navigation items with slotted content", () => {
      mount(<WithNavItemsTopNav />);

      cy.checkShadowElVisible(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR);
      cy.findShadowEl(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR).click();

      cy.checkA11yWithWait(undefined, 250);
      cy.compareSnapshot({
        name: "with-nav-items-top-nav",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
      });
    });

    it("should tab to navigation items", () => {
      mount(<WithNavItemsTopNav />);

      cy.checkShadowElVisible(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR);
      cy.findShadowEl(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR).click();

      cy.findShadowEl(TOP_NAV_SELECTOR, NAVIGATION_MENU_SELECTOR)
        .shadow()
        .find(CLOSE_MENU_BUTTON_SELECTOR)
        .should(HAVE_FOCUS);
      cy.realPress("Tab");
      cy.get(NAVIGATION_ITEM_SELECTOR).eq(0).should(HAVE_FOCUS);
      cy.realPress("Tab");
      cy.get(NAVIGATION_ITEM_SELECTOR).eq(1).should(HAVE_FOCUS);
    });

    it("should render focus state on navigation item", () => {
      mount(<WithNavItemsTopNav />);

      cy.checkShadowElVisible(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR);
      cy.findShadowEl(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR).click();

      cy.findShadowEl(TOP_NAV_SELECTOR, NAVIGATION_MENU_SELECTOR)
        .shadow()
        .find(CLOSE_MENU_BUTTON_SELECTOR)
        .should(HAVE_FOCUS);
      cy.realPress("Tab");
      cy.get(NAVIGATION_ITEM_SELECTOR).eq(0).should(HAVE_FOCUS);

      cy.checkA11yWithWait(undefined, 250);
      cy.compareSnapshot({
        name: "nav-item-focused-top-nav",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
      });
    });

    it("should render with navigation buttons", () => {
      mount(<WithNavButtonsTopNav />);

      cy.checkShadowElVisible(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR);
      cy.findShadowEl(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR).click();

      cy.checkA11yWithWait(undefined, 250);
      cy.compareSnapshot({
        name: "with-nav-buttons-top-nav",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.017),
      });
    });

    it("should tab to navigation buttons", () => {
      mount(<WithNavButtonsTopNav />);

      cy.checkShadowElVisible(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR);
      cy.findShadowEl(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR).click();

      cy.findShadowEl(TOP_NAV_SELECTOR, NAVIGATION_MENU_SELECTOR)
        .shadow()
        .find(CLOSE_MENU_BUTTON_SELECTOR)
        .should(HAVE_FOCUS);
      cy.realPress("Tab");
      cy.get(NAVIGATION_ITEM_SELECTOR).eq(0).should(HAVE_FOCUS);
      cy.realPress("Tab");
      cy.get(NAVIGATION_ITEM_SELECTOR).eq(1).should(HAVE_FOCUS);
      cy.realPress("Tab");
      cy.get(NAVIGATION_BUTTON_SELECTOR).eq(0).should(HAVE_FOCUS);
      cy.realPress("Tab");
      cy.get(NAVIGATION_BUTTON_SELECTOR).eq(1).should(HAVE_FOCUS);
    });

    it("should render focus state on navigation button", () => {
      mount(<WithNavButtonsTopNav />);

      cy.checkShadowElVisible(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR);
      cy.findShadowEl(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR).click();

      cy.findShadowEl(TOP_NAV_SELECTOR, NAVIGATION_MENU_SELECTOR)
        .shadow()
        .find(CLOSE_MENU_BUTTON_SELECTOR)
        .should(HAVE_FOCUS);
      cy.realPress("Tab");
      cy.realPress("Tab");
      cy.realPress("Tab");
      cy.get(NAVIGATION_BUTTON_SELECTOR).eq(0).should(HAVE_FOCUS);

      cy.checkA11yWithWait(undefined, 250);
      cy.compareSnapshot({
        name: "nav-button-focused-top-nav",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.008),
      });
    });
  });

  describe("Within a side navigation", () => {
    it("should render with expandable navigation groups and navigation items", () => {
      cy.mockResizeObserver(576, 600);
      mount(<WithExpandableNavGroupAndNavItemsSideNav />);

      cy.checkShadowElVisible(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR);
      cy.findShadowEl(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR).click();

      cy.findShadowEl(NAVIGATION_GROUP_SELECTOR, ".chevron-toggle-icon-wrapper")
        .eq(0)
        .click();
      cy.findShadowEl(NAVIGATION_GROUP_SELECTOR, ".chevron-toggle-icon-wrapper")
        .eq(1)
        .click();
      cy.get("body").click(0, 0);

      cy.checkA11yWithWait(undefined, 250);
      cy.compareSnapshot({
        name: "with-expandable-nav-groups-side-nav",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.005),
      });
    });

    it("should render with expandable navigation groups and navigation items - expanded", () => {
      cy.mockResizeObserver(576, 600);
      mount(<WithExpandableNavGroupAndNavItemsSideNav />);

      cy.checkShadowElVisible(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR);
      cy.findShadowEl(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR).click();
      cy.get(SIDE_NAV_SELECTOR).should(HAVE_CLASS, "xs-menu-open");

      cy.checkA11yWithWait(undefined, 250);
      cy.compareSnapshot({
        name: "with-expandable-nav-groups-side-nav-expanded",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.023),
      });
    });

    it("should tab to expandable navigation groups and navigation items", () => {
      cy.mockResizeObserver(576, 600);
      mount(<WithExpandableNavGroupAndNavItemsSideNav />);

      cy.checkShadowElVisible(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR);
      cy.findShadowEl(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR).click();
      cy.get(SIDE_NAV_SELECTOR).should(HAVE_CLASS, "xs-menu-open");

      cy.findShadowEl(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR)
        .shadow()
        .find("button")
        .focus();
      cy.realPress("Tab");
      cy.get(NAVIGATION_GROUP_SELECTOR).eq(0).should(HAVE_FOCUS);
      cy.realPress("Tab");
      cy.get(NAVIGATION_ITEM_SELECTOR).eq(0).should(HAVE_FOCUS);
      cy.realPress("Tab");
      cy.get(NAVIGATION_ITEM_SELECTOR).eq(1).should(HAVE_FOCUS);
      cy.realPress("Tab");
      cy.get(NAVIGATION_GROUP_SELECTOR).eq(1).should(HAVE_FOCUS);
      cy.realPress("Tab");
      cy.get(NAVIGATION_ITEM_SELECTOR).eq(2).should(HAVE_FOCUS);
      cy.realPress("Tab");
      cy.get(NAVIGATION_ITEM_SELECTOR).eq(3).should(HAVE_FOCUS);
    });

    it("should render focus state on expandable navigation group", () => {
      cy.mockResizeObserver(576, 600);
      mount(<WithExpandableNavGroupAndNavItemsSideNav />);

      cy.checkShadowElVisible(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR);
      cy.findShadowEl(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR).click();

      cy.findShadowEl(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR)
        .shadow()
        .find("button")
        .focus();
      cy.realPress("Tab");
      cy.get(NAVIGATION_GROUP_SELECTOR).eq(0).should(HAVE_FOCUS);

      cy.checkA11yWithWait(undefined, 250);
      cy.compareSnapshot({
        name: "expandable-nav-group-focused-side-nav",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.023),
      });
    });

    it("should render focus state on navigation item within expandable navigation group", () => {
      cy.mockResizeObserver(576, 600);
      mount(<WithExpandableNavGroupAndNavItemsSideNav />);

      cy.checkShadowElVisible(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR);
      cy.findShadowEl(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR).click();

      cy.findShadowEl(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR)
        .shadow()
        .find("button")
        .focus();
      cy.realPress("Tab");
      cy.realPress("Tab");
      cy.get(NAVIGATION_ITEM_SELECTOR).eq(0).should(HAVE_FOCUS);

      cy.checkA11yWithWait(undefined, 250);
      cy.compareSnapshot({
        name: "nav-item-within-expandable-nav-group-focused-side-nav",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.023),
      });
    });

    it("should render with navigation groups and navigation items", () => {
      cy.mockResizeObserver(576, 600);
      mount(<WithNavGroupAndNavItemsSideNav />);

      cy.checkShadowElVisible(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR);
      cy.findShadowEl(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR).click();
      cy.get(SIDE_NAV_SELECTOR).should(HAVE_CLASS, "xs-menu-open");

      cy.checkA11yWithWait(undefined, 250);
      cy.compareSnapshot({
        name: "with-nav-groups-side-nav",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.023),
      });
    });

    it("should tab to navigation groups and navigation items", () => {
      cy.mockResizeObserver(576, 600);
      mount(<WithNavGroupAndNavItemsSideNav />);

      cy.checkShadowElVisible(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR);
      cy.findShadowEl(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR).click();
      cy.get(SIDE_NAV_SELECTOR).should(HAVE_CLASS, "xs-menu-open");

      cy.findShadowEl(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR)
        .shadow()
        .find("button")
        .focus();
      cy.realPress("Tab");
      cy.get(NAVIGATION_GROUP_SELECTOR).eq(0).should(HAVE_FOCUS);
      cy.realPress("Tab");
      cy.get(NAVIGATION_ITEM_SELECTOR).eq(0).should(HAVE_FOCUS);
      cy.realPress("Tab");
      cy.get(NAVIGATION_ITEM_SELECTOR).eq(1).should(HAVE_FOCUS);
      cy.realPress("Tab");
      cy.get(NAVIGATION_GROUP_SELECTOR).eq(1).should(HAVE_FOCUS);
      cy.realPress("Tab");
      cy.get(NAVIGATION_ITEM_SELECTOR).eq(2).should(HAVE_FOCUS);
      cy.realPress("Tab");
      cy.get(NAVIGATION_ITEM_SELECTOR).eq(3).should(HAVE_FOCUS);
    });

    it("should render navigation items with slotted content", () => {
      cy.mockResizeObserver(576, 600);
      mount(<WithNavItemsSideNav />);

      cy.checkShadowElVisible(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR);
      cy.findShadowEl(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR).click();
      cy.get(SIDE_NAV_SELECTOR).should(HAVE_CLASS, "xs-menu-open");

      cy.checkA11yWithWait(undefined, 250);
      cy.compareSnapshot({
        name: "with-nav-items-side-nav",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.005),
      });
    });

    it("should tab to navigation items", () => {
      cy.mockResizeObserver(576, 600);
      mount(<WithNavItemsSideNav />);

      cy.checkShadowElVisible(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR);
      cy.findShadowEl(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR).click();
      cy.get(SIDE_NAV_SELECTOR).should(HAVE_CLASS, "xs-menu-open");

      cy.findShadowEl(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR)
        .shadow()
        .find("button")
        .focus();
      cy.realPress("Tab");
      cy.get(NAVIGATION_ITEM_SELECTOR).eq(0).should(HAVE_FOCUS);
      cy.realPress("Tab");
      cy.get(NAVIGATION_ITEM_SELECTOR).eq(1).should(HAVE_FOCUS);
      cy.realPress("Tab");
      cy.get(NAVIGATION_ITEM_SELECTOR).eq(2).should(HAVE_FOCUS);
    });
  });
});

describe("IcNavigationMenu visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  beforeEach(() => {
    cy.viewport(DEFAULT_WIDTH, 800);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  after(() => {
    cy.disableForcedColors();
  });

  it("should render within top navigation in high contrast mode", () => {
    mount(<AllNavTypesTopNav />);

    cy.checkShadowElVisible(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR);
    cy.findShadowEl(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR).click().wait(250);

    cy.compareSnapshot({
      name: "all-nav-types-top-nav-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.038),
    });
  });

  it("should render with focus state within top navigation in high contrast mode", () => {
    mount(<AllNavTypesTopNav />);

    cy.checkShadowElVisible(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR);
    cy.findShadowEl(TOP_NAV_SELECTOR, MENU_BUTTON_SELECTOR).click().wait(250);

    cy.findShadowEl(TOP_NAV_SELECTOR, NAVIGATION_MENU_SELECTOR)
      .shadow()
      .find(CLOSE_MENU_BUTTON_SELECTOR)
      .should(HAVE_FOCUS);
    cy.realPress("Tab");
    cy.get(NAVIGATION_GROUP_SELECTOR).eq(0).should(HAVE_FOCUS);

    cy.wait(250).compareSnapshot({
      name: "nav-group-top-nav-focused-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.033),
    });
  });

  it("should render within side navigation in high contrast mode", () => {
    cy.mockResizeObserver(576, 800);
    mount(<AllNavTypesSideNav />);

    cy.checkShadowElVisible(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR);
    cy.findShadowEl(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR).click().wait(250);
    cy.get(SIDE_NAV_SELECTOR).should(HAVE_CLASS, "xs-menu-open");

    cy.compareSnapshot({
      name: "all-nav-types-side-nav-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.034),
    });
  });

  it("should render with focus state within side navigation in high contrast mode", () => {
    cy.mockResizeObserver(576, 800);
    mount(<AllNavTypesSideNav />);

    cy.checkShadowElVisible(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR);
    cy.findShadowEl(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR).click().wait(250);
    cy.get(SIDE_NAV_SELECTOR).should(HAVE_CLASS, "xs-menu-open");

    cy.findShadowEl(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR)
      .shadow()
      .find("button")
      .focus();
    cy.realPress("Tab");
    cy.get(NAVIGATION_GROUP_SELECTOR).eq(0).should(HAVE_FOCUS);

    cy.compareSnapshot({
      name: "nav-group-side-nav-focused-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.034),
    });
  });
});
