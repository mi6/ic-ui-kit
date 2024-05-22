/* eslint-disable react/jsx-no-bind */
/// <reference types='Cypress' />

import { mount } from "cypress/react";
import React from "react";
import { CYPRESS_AXE_OPTIONS } from "../../../cypress/utils/a11y";
import { IcTheme } from "../../components";
import {
  BE_VISIBLE,
  CONTAIN_TEXT,
  HAVE_CSS,
  HAVE_LENGTH,
  NOT_BE_VISIBLE,
  NOT_EXIST,
} from "../utils/constants";
import {
  BasicSideNav,
  DynamicExpandedSideNav,
  ExpandedSideNav,
  GroupedSideNav,
  LongPropsSideNav,
  SlottedAppTitleSideNav,
  SlottedItemsExpandedSideNav,
  StaticSideNav,
  checkSideNavSize,
} from "./IcSideNavigationTestData";
import _ from "cypress/types/lodash";

const DEFAULT_HEIGHT = 1171;
const DEFAULT_TEST_THRESHOLD = 0.06;

const SIDE_NAV_LABEL = "ic-side-navigation";
const EXPAND_BUTTON_SELECTOR = ".side-navigation button.menu-expand-button";
const TITLE_SELECTOR = ".title-link ic-typography";
const NAV_GROUP_SELECTOR = `${SIDE_NAV_LABEL} ic-navigation-group`;
const NAV_GROUP_WRAPPER_SELECTOR = ".grouped-links-wrapper";
const NAV_ITEM_SELECTOR = `${SIDE_NAV_LABEL} ic-navigation-item`;
const TOOLTIP_SELECTOR = "ic-tooltip";
const TOOLTIP_CONTAINER_SELECTOR = ".ic-tooltip-container";
const NAV_ITEM_TYPOGRAPHY_SELECTOR = "ic-navigation-item ic-typography";
const INNER_SIDE_NAV_SELECTOR = ".side-navigation-inner";
const MENU_BUTTON_SELECTOR = "#menu-button";
const ARIA_LABEL_ATTR = "aria-label";

Cypress.Commands.add("checkSideNavSize", checkSideNavSize);

describe("IcSideNavigation", () => {
  describe("mobile", () => {
    beforeEach(() => {
      cy.viewport(576, DEFAULT_HEIGHT);
    });

    it("should render", () => {
      mount(<BasicSideNav />);
      cy.checkShadowElVisible(SIDE_NAV_LABEL, MENU_BUTTON_SELECTOR);
    });

    it("should display flyout menu when menu button clicked with correct aria-expanded values", () => {
      mount(<BasicSideNav />);

      cy.findShadowEl(SIDE_NAV_LABEL, MENU_BUTTON_SELECTOR).should(
        CONTAIN_TEXT,
        "Menu"
      );

      cy.clickOnShadowEl(SIDE_NAV_LABEL, MENU_BUTTON_SELECTOR);

      cy.findShadowEl(SIDE_NAV_LABEL, INNER_SIDE_NAV_SELECTOR).should("exist");
      cy.findShadowEl(SIDE_NAV_LABEL, MENU_BUTTON_SELECTOR).should(
        CONTAIN_TEXT,
        "Close"
      );
    });

    it("should dyanmically update native button aria-label and aria-expanded", () => {
      mount(<BasicSideNav />);

      cy.findShadowEl(SIDE_NAV_LABEL, MENU_BUTTON_SELECTOR)
        .shadow()
        .find("button")
        .invoke("attr", "aria-expanded")
        .should("eq", "false");
      cy.findShadowEl(SIDE_NAV_LABEL, MENU_BUTTON_SELECTOR)
        .shadow()
        .find("button")
        .invoke("attr", ARIA_LABEL_ATTR)
        .should("eq", "Open navigation menu");

      cy.clickOnShadowEl(SIDE_NAV_LABEL, MENU_BUTTON_SELECTOR);

      cy.findShadowEl(SIDE_NAV_LABEL, INNER_SIDE_NAV_SELECTOR).should("exist");
      cy.findShadowEl(SIDE_NAV_LABEL, MENU_BUTTON_SELECTOR)
        .shadow()
        .find("button")
        .invoke("attr", "aria-expanded")
        .should("eq", "true");
      cy.findShadowEl(SIDE_NAV_LABEL, MENU_BUTTON_SELECTOR)
        .shadow()
        .find("button")
        .invoke("attr", ARIA_LABEL_ATTR)
        .should("eq", "Close navigation menu");
    });

    it("should render the correct number of navigation-items", () => {
      mount(<BasicSideNav />);

      cy.clickOnShadowEl(SIDE_NAV_LABEL, MENU_BUTTON_SELECTOR);

      cy.get(NAV_ITEM_SELECTOR).should(HAVE_LENGTH, 3);
      cy.get(NAV_ITEM_SELECTOR)
        .first()
        .shadow()
        .find(TOOLTIP_SELECTOR)
        .should(CONTAIN_TEXT, "Home");
      cy.get(NAV_ITEM_SELECTOR)
        .last()
        .shadow()
        .find(TOOLTIP_SELECTOR)
        .should(CONTAIN_TEXT, "a11y");
    });

    it("should render application name", () => {
      mount(<BasicSideNav />);

      cy.findShadowEl(SIDE_NAV_LABEL, ".top-bar ic-typography").should(
        CONTAIN_TEXT,
        "ACME"
      );
    });

    it("should render app status and version", () => {
      mount(<BasicSideNav />);

      cy.clickOnShadowEl(SIDE_NAV_LABEL, MENU_BUTTON_SELECTOR);

      cy.findShadowEl(
        SIDE_NAV_LABEL,
        ".app-status-wrapper .app-status-text"
      ).should(CONTAIN_TEXT, "alpha");
      cy.findShadowEl(
        SIDE_NAV_LABEL,
        ".app-status-wrapper .app-version"
      ).should(CONTAIN_TEXT, "v0.0.0");
    });

    it("should not render menu expand button", () => {
      mount(<BasicSideNav />);

      cy.clickOnShadowEl(SIDE_NAV_LABEL, MENU_BUTTON_SELECTOR);

      cy.findShadowEl(SIDE_NAV_LABEL, INNER_SIDE_NAV_SELECTOR).should("exist");
      cy.findShadowEl(SIDE_NAV_LABEL, EXPAND_BUTTON_SELECTOR).should(NOT_EXIST);
    });

    describe("IcSideNavigation mobile Visual Regression and A11y Testing", () => {
      beforeEach(() => {
        cy.viewport(576, DEFAULT_HEIGHT);
        cy.injectAxe();
      });

      afterEach(() => {
        cy.task("generateReport");
      });

      it("should render a default IcSideNavigation", () => {
        mount(<BasicSideNav />);

        cy.compareSnapshot({
          name: "basic",
          testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
        });
        cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);

        cy.clickOnShadowEl(SIDE_NAV_LABEL, MENU_BUTTON_SELECTOR);
        cy.wait(300);

        cy.compareSnapshot({
          name: "basicOpen",
          testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
        });
        cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
      });

      it("should render a long status and version", () => {
        mount(<LongPropsSideNav />);

        cy.clickOnShadowEl(SIDE_NAV_LABEL, MENU_BUTTON_SELECTOR);
        cy.wait(300);

        cy.compareSnapshot({
          name: "longPropsOpen",
          testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
        });
        cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
      });

      it("should render with an IcNavigationGroup", () => {
        mount(<GroupedSideNav />);

        cy.clickOnShadowEl(SIDE_NAV_LABEL, MENU_BUTTON_SELECTOR);
        cy.wait(300);

        cy.compareSnapshot({
          name: "withNavGroupOpen",
          testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
        });
        cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
      });

      it("should render with a slotted app-title", () => {
        mount(<SlottedAppTitleSideNav />);

        cy.compareSnapshot({
          name: "slottedAppTitle",
          testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
        });
        cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);

        cy.clickOnShadowEl(SIDE_NAV_LABEL, MENU_BUTTON_SELECTOR);
        cy.wait(300);

        cy.compareSnapshot({
          name: "slottedAppTitleOpen",
          testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
        });
        cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
      });

      it("should render with a different theme", () => {
        mount(
          <>
            <IcTheme color="rgb(131, 166, 195)" />
            <BasicSideNav />
          </>
        );

        cy.compareSnapshot({
          name: "withTheme",
          testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
        });
        cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);

        cy.clickOnShadowEl(SIDE_NAV_LABEL, MENU_BUTTON_SELECTOR);
        cy.wait(300);

        cy.compareSnapshot({
          name: "withThemeOpen",
          testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
        });
        cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
      });
    });
  });

  describe("desktop", () => {
    beforeEach(() => {
      cy.viewport(992, DEFAULT_HEIGHT);
    });

    it("should render collapsed initially", () => {
      mount(
        <>
          <IcTheme color="rgb(27, 60, 121)" />
          <BasicSideNav />
        </>
      );

      cy.get(SIDE_NAV_LABEL).should(BE_VISIBLE);
      cy.checkSideNavSize(false);
    });

    it("should render expanded with expanded prop", () => {
      mount(<ExpandedSideNav />);

      cy.get(SIDE_NAV_LABEL).should(BE_VISIBLE);
      cy.checkSideNavSize(true);
    });

    it("should render collapsed and expanded on menu toggle", () => {
      mount(<BasicSideNav />);

      cy.clickOnShadowEl(SIDE_NAV_LABEL, EXPAND_BUTTON_SELECTOR);
      cy.checkSideNavSize(true);

      cy.clickOnShadowEl(SIDE_NAV_LABEL, EXPAND_BUTTON_SELECTOR);
      cy.checkSideNavSize(false);
    });

    it("should expand when expand button is tabbed to and pressed", () => {
      mount(<BasicSideNav />);
      cy.checkHydrated(SIDE_NAV_LABEL);
      cy.findShadowEl("ic-side-navigation", ".title-link").focus();
      Cypress._.times(4, () => cy.realPress("Tab"));
      cy.realPress("Enter");
      cy.checkSideNavSize(true);

      cy.clickOnShadowEl(SIDE_NAV_LABEL, EXPAND_BUTTON_SELECTOR);
      cy.checkSideNavSize(false);
    });

    it("should render collapsed and expanded when expanded state is externally controlled", () => {
      mount(<DynamicExpandedSideNav />);

      cy.get("#expand-btn").click();
      cy.checkSideNavSize(true);

      cy.get("#collapse-btn").click();
      cy.checkSideNavSize(false);
    });

    it("should update aria-label on menu expand button", () => {
      mount(<BasicSideNav />);

      cy.clickOnShadowEl(SIDE_NAV_LABEL, EXPAND_BUTTON_SELECTOR);
      cy.findShadowEl(SIDE_NAV_LABEL, EXPAND_BUTTON_SELECTOR)
        .invoke("attr", ARIA_LABEL_ATTR)
        .should("eq", "Collapse side navigation");

      cy.clickOnShadowEl(SIDE_NAV_LABEL, EXPAND_BUTTON_SELECTOR);
      cy.findShadowEl(SIDE_NAV_LABEL, EXPAND_BUTTON_SELECTOR)
        .invoke("attr", ARIA_LABEL_ATTR)
        .should("eq", "Expand side navigation");
    });

    it("should display application name on expanded side navigation", () => {
      mount(<BasicSideNav />);

      cy.findShadowEl(SIDE_NAV_LABEL, TITLE_SELECTOR).should(NOT_BE_VISIBLE);

      cy.clickOnShadowEl(SIDE_NAV_LABEL, EXPAND_BUTTON_SELECTOR);

      cy.findShadowEl(SIDE_NAV_LABEL, TITLE_SELECTOR).should(BE_VISIBLE);
    });

    it("should toggle to short title at small screen sizes", () => {
      mount(<BasicSideNav />);
      cy.viewport(576, DEFAULT_HEIGHT);
      cy.findShadowEl(SIDE_NAV_LABEL, TITLE_SELECTOR).should(
        CONTAIN_TEXT,
        "ACME"
      );

      cy.viewport(1200, DEFAULT_HEIGHT);
      cy.findShadowEl(SIDE_NAV_LABEL, TITLE_SELECTOR).should(
        CONTAIN_TEXT,
        "ApplicationName"
      );
    });

    it("should collapse group nav items in collapsed side menu", () => {
      mount(<GroupedSideNav />);
      cy.findShadowEl(NAV_GROUP_SELECTOR, NAV_GROUP_WRAPPER_SELECTOR)
        .invoke("height")
        .should("eq", 56);

      cy.clickOnShadowEl(NAV_GROUP_SELECTOR, ".navigation-group");
      cy.findShadowEl(NAV_GROUP_SELECTOR, NAV_GROUP_WRAPPER_SELECTOR)
        .invoke("height")
        .should("eq", 0);

      cy.clickOnShadowEl(NAV_GROUP_SELECTOR, ".navigation-group");
      cy.findShadowEl(NAV_GROUP_SELECTOR, NAV_GROUP_WRAPPER_SELECTOR)
        .invoke("height")
        .should("eq", 56);
    });

    it("should have aria-landmarks added to side navigation nav sections", () => {
      const PRIMARY_LANDMARK_ID = "primary-navigation-landmark";
      const SECONDARY_LANDMARK_ID = "secondary-navigation-landmark";

      mount(<BasicSideNav />);

      cy.findShadowEl(SIDE_NAV_LABEL, "nav.primary-navigation")
        .invoke("attr", "aria-labelledby")
        .should("eq", PRIMARY_LANDMARK_ID);
      cy.findShadowEl(
        SIDE_NAV_LABEL,
        `nav.primary-navigation #${PRIMARY_LANDMARK_ID}`
      ).should(CONTAIN_TEXT, "Primary");

      cy.findShadowEl(SIDE_NAV_LABEL, "nav.secondary-navigation")
        .invoke("attr", "aria-labelledby")
        .should("eq", SECONDARY_LANDMARK_ID);
      cy.findShadowEl(
        SIDE_NAV_LABEL,
        `nav.secondary-navigation #${SECONDARY_LANDMARK_ID}`
      ).should(CONTAIN_TEXT, "Secondary");
    });

    it("should render app status and version", () => {
      mount(<BasicSideNav />);

      cy.clickOnShadowEl(SIDE_NAV_LABEL, EXPAND_BUTTON_SELECTOR);

      cy.findShadowEl(
        SIDE_NAV_LABEL,
        ".app-status-wrapper .app-status-text"
      ).should(CONTAIN_TEXT, "alpha");
      cy.findShadowEl(
        SIDE_NAV_LABEL,
        ".app-status-wrapper .app-version"
      ).should(CONTAIN_TEXT, "v0.0.0");
    });

    it("should render tooltip on collapsed side navigation", () => {
      mount(<BasicSideNav />);

      cy.get(NAV_ITEM_SELECTOR).first().trigger("mouseenter");
      cy.findShadowEl(NAV_ITEM_SELECTOR, TOOLTIP_SELECTOR)
        .first()
        .shadow()
        .find(TOOLTIP_CONTAINER_SELECTOR)
        .should(HAVE_CSS, "display", "block");
    });

    it("should render tooltip on expanded side navigation", () => {
      mount(<ExpandedSideNav />);

      cy.get(NAV_ITEM_SELECTOR).first().trigger("mouseenter");
      cy.findShadowEl(NAV_ITEM_SELECTOR, TOOLTIP_SELECTOR)
        .first()
        .shadow()
        .find(TOOLTIP_CONTAINER_SELECTOR)
        .should(HAVE_CSS, "display", "none");
    });

    it("should render menu expand if static prop is set to true", () => {
      mount(<StaticSideNav />);

      cy.findShadowEl(SIDE_NAV_LABEL, EXPAND_BUTTON_SELECTOR).should(NOT_EXIST);
    });

    it("should render visible labels when slotted menu items and expanded", () => {
      mount(<SlottedItemsExpandedSideNav />);

      cy.get(SIDE_NAV_LABEL)
        .find(NAV_ITEM_TYPOGRAPHY_SELECTOR)
        .should(HAVE_CSS, "visibility", "visible");
    });

    it("should render navigation item labels when using slotted app-title and side nav is expanded", () => {
      mount(<SlottedAppTitleSideNav />);

      cy.get(SIDE_NAV_LABEL)
        .find(NAV_ITEM_TYPOGRAPHY_SELECTOR)
        .should(HAVE_CSS, "visibility", "hidden");

      cy.clickOnShadowEl(SIDE_NAV_LABEL, EXPAND_BUTTON_SELECTOR);

      cy.get(SIDE_NAV_LABEL)
        .find(NAV_ITEM_TYPOGRAPHY_SELECTOR)
        .should(HAVE_CSS, "visibility", "visible");

      cy.clickOnShadowEl(SIDE_NAV_LABEL, EXPAND_BUTTON_SELECTOR);

      cy.get(SIDE_NAV_LABEL)
        .find(NAV_ITEM_TYPOGRAPHY_SELECTOR)
        .should(HAVE_CSS, "visibility", "hidden");
    });

    it("should render ic-side-navigation with theme colours", () => {
      mount(
        <>
          <IcTheme color="rgb(131, 166, 195)" />
          <BasicSideNav />
        </>
      );

      cy.findShadowEl(SIDE_NAV_LABEL, INNER_SIDE_NAV_SELECTOR).should(
        HAVE_CSS,
        "background-color",
        "rgb(131, 166, 195)"
      );
      cy.findShadowEl(SIDE_NAV_LABEL, ".ic-typography-h3").should(
        HAVE_CSS,
        "color",
        "rgb(11, 12, 12)"
      );
    });

    describe("IcSideNavigation desktop Visual Regression and A11y Testing", () => {
      beforeEach(() => {
        cy.viewport(992, DEFAULT_HEIGHT);
        cy.injectAxe();
      });

      afterEach(() => {
        cy.task("generateReport");
      });

      it("should render a default IcSideNavigation", () => {
        mount(
          <>
            <IcTheme color="rgb(27, 60, 121)" />
            <BasicSideNav />
          </>
        );

        cy.compareSnapshot({
          name: "basicDesktop",
          testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
        });
        cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);

        cy.clickOnShadowEl(SIDE_NAV_LABEL, EXPAND_BUTTON_SELECTOR);
        cy.wait(300);

        cy.compareSnapshot({
          name: "basicOpenDesktop",
          testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
        });
        cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
      });

      it("should render a long status and version", () => {
        mount(<LongPropsSideNav />);

        cy.clickOnShadowEl(SIDE_NAV_LABEL, EXPAND_BUTTON_SELECTOR);
        cy.wait(300);

        cy.compareSnapshot({
          name: "longPropsOpenDesktop",
          testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
        });
        cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
      });

      it("should render with an IcNavigationGroup", () => {
        mount(<GroupedSideNav />);

        cy.clickOnShadowEl(SIDE_NAV_LABEL, EXPAND_BUTTON_SELECTOR);
        cy.wait(300);

        cy.compareSnapshot({
          name: "withNavGroupOpenDesktop",
          testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
        });
        cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
      });

      it("should render static", () => {
        mount(<StaticSideNav />);

        cy.compareSnapshot({
          name: "staticExpandedDesktop",
          testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
        });
        cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
      });

      it("should render with slotted nav items", () => {
        mount(<SlottedItemsExpandedSideNav />);

        cy.compareSnapshot({
          name: "slottedNavItemsExpandedDesktop",
          testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
        });
        cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
      });

      it("should render with a slotted app-title", () => {
        mount(<SlottedAppTitleSideNav />);

        cy.compareSnapshot({
          name: "slottedAppTitleDesktop",
          testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
        });
        cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);

        cy.clickOnShadowEl(SIDE_NAV_LABEL, EXPAND_BUTTON_SELECTOR);
        cy.wait(300);

        cy.compareSnapshot({
          name: "slottedAppTitleOpenDesktop",
          testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
        });
        cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
      });

      it("should render with a different theme", () => {
        mount(
          <>
            <IcTheme color="rgb(131, 166, 195)" />
            <BasicSideNav />
          </>
        );

        cy.compareSnapshot({
          name: "withThemeDesktop",
          testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
        });
        cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);

        cy.clickOnShadowEl(SIDE_NAV_LABEL, EXPAND_BUTTON_SELECTOR);
        cy.wait(300);

        cy.compareSnapshot({
          name: "withThemeOpenDesktop",
          testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
        });
        cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
      });
    });
  });
});
