/* eslint-disable react/jsx-no-bind */
/// <reference types='Cypress' />

import { mount } from "cypress/react";
import React from "react";
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
  DisableTopBarBehaviourSideNav,
  DynamicExpandedSideNav,
  ExpandedSideNav,
  GroupedSideNav,
  LongPropsSideNav,
  SlottedAppTitleSideNav,
  SlottedItemsExpandedSideNav,
  StaticSideNav,
  checkSideNavSize,
} from "./IcSideNavigationTestData";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const DEFAULT_HEIGHT = 600;
const DEFAULT_WIDTH = 576;
const DEFAULT_TEST_THRESHOLD = 0;

const SIDE_NAV_SELECTOR = "ic-side-navigation";
const EXPAND_BUTTON_SELECTOR = ".side-navigation button.menu-expand-button";
const TITLE_SELECTOR = ".title-link ic-typography";
const NAV_GROUP_SELECTOR = `${SIDE_NAV_SELECTOR} ic-navigation-group`;
const NAV_GROUP_WRAPPER_SELECTOR = ".grouped-links-wrapper";
const NAV_ITEM_SELECTOR = `${SIDE_NAV_SELECTOR} ic-navigation-item`;
const TOOLTIP_SELECTOR = "ic-tooltip";
const TOOLTIP_CONTAINER_SELECTOR = ".ic-tooltip-container";
const NAV_ITEM_TYPOGRAPHY_SELECTOR = "ic-navigation-item ic-typography";
const INNER_SIDE_NAV_SELECTOR = ".side-navigation-inner";
const MENU_BUTTON_SELECTOR = "#menu-button";
const ARIA_LABEL_ATTR = "aria-label";

Cypress.Commands.add("checkSideNavSize", checkSideNavSize);

describe("IcSideNavigation", () => {
  describe("Mobile", () => {
    beforeEach(() => {
      cy.viewport(DEFAULT_WIDTH, DEFAULT_HEIGHT);
    });

    it("should render", () => {
      mount(<BasicSideNav />);
      cy.checkShadowElVisible(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR);
    });

    it("should display flyout menu when menu button clicked with correct aria-expanded values", () => {
      mount(<BasicSideNav />);

      cy.findShadowEl(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR).should(
        CONTAIN_TEXT,
        "Menu"
      );
      cy.findShadowEl(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR)
        .shadow()
        .find("button")
        .invoke("attr", "aria-expanded")
        .should("eq", "false");
      cy.clickOnShadowEl(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR);
      cy.findShadowEl(SIDE_NAV_SELECTOR, INNER_SIDE_NAV_SELECTOR).should(
        "exist"
      );
      cy.findShadowEl(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR)
        .shadow()
        .find("button")
        .invoke("attr", "aria-expanded")
        .should("eq", "true");
      cy.findShadowEl(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR).should(
        CONTAIN_TEXT,
        "Close"
      );
    });

    it("should dynamically update native button aria-label and aria-expanded", () => {
      mount(<BasicSideNav />);

      cy.findShadowEl(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR)
        .shadow()
        .find("button")
        .invoke("attr", "aria-expanded")
        .should("eq", "false");
      cy.findShadowEl(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR)
        .shadow()
        .find("button")
        .invoke("attr", ARIA_LABEL_ATTR)
        .should("eq", "Open navigation menu");

      cy.clickOnShadowEl(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR);

      cy.findShadowEl(SIDE_NAV_SELECTOR, INNER_SIDE_NAV_SELECTOR).should(
        "exist"
      );
      cy.findShadowEl(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR)
        .shadow()
        .find("button")
        .invoke("attr", "aria-expanded")
        .should("eq", "true");
      cy.findShadowEl(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR)
        .shadow()
        .find("button")
        .invoke("attr", ARIA_LABEL_ATTR)
        .should("eq", "Close navigation menu");
    });

    it("should render the correct number of navigation-items", () => {
      mount(<BasicSideNav />);

      cy.clickOnShadowEl(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR);

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

      cy.findShadowEl(SIDE_NAV_SELECTOR, ".top-bar ic-typography").should(
        CONTAIN_TEXT,
        "ACME"
      );
    });

    it("should render app status and version", () => {
      mount(<BasicSideNav />);

      cy.clickOnShadowEl(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR);

      cy.findShadowEl(
        SIDE_NAV_SELECTOR,
        ".app-status-wrapper .app-status-text"
      ).should(CONTAIN_TEXT, "alpha");
      cy.findShadowEl(
        SIDE_NAV_SELECTOR,
        ".app-status-wrapper .app-version"
      ).should(CONTAIN_TEXT, "v0.0.0");
    });

    it("should not render menu expand button", () => {
      mount(<BasicSideNav />);

      cy.clickOnShadowEl(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR);

      cy.findShadowEl(SIDE_NAV_SELECTOR, INNER_SIDE_NAV_SELECTOR).should(
        "exist"
      );
      cy.findShadowEl(SIDE_NAV_SELECTOR, EXPAND_BUTTON_SELECTOR).should(
        NOT_EXIST
      );
    });

    describe("Mobile visual regression and a11y tests", () => {
      beforeEach(() => {
        cy.viewport(DEFAULT_WIDTH, DEFAULT_HEIGHT);
        cy.injectAxe();
      });

      afterEach(() => {
        cy.task("generateReport");
      });

      it("should render a default IcSideNavigation", () => {
        mount(<BasicSideNav />);

        cy.checkHydrated(SIDE_NAV_SELECTOR);

        cy.checkA11yWithWait(undefined, 500);
        cy.compareSnapshot({
          name: "basic",
          testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.021),
        });
      });

      it("should render a default IcSideNavigation - open", () => {
        mount(<BasicSideNav />);

        cy.checkHydrated(SIDE_NAV_SELECTOR);
        cy.clickOnShadowEl(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR);

        cy.checkA11yWithWait(undefined, 500);
        cy.compareSnapshot({
          name: "basic-open",
          testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.045),
        });
      });

      it("should render a long status and version", () => {
        mount(<LongPropsSideNav />);

        cy.checkHydrated(SIDE_NAV_SELECTOR);
        cy.clickOnShadowEl(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR);

        cy.checkA11yWithWait(undefined, 300);
        cy.compareSnapshot({
          name: "long-props-open",
          testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.064),
        });
      });

      it("should render with an IcNavigationGroup", () => {
        mount(<GroupedSideNav />);

        cy.checkHydrated(SIDE_NAV_SELECTOR);
        cy.clickOnShadowEl(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR);

        cy.checkA11yWithWait(undefined, 300);
        cy.compareSnapshot({
          name: "nav-group-open",
          testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.059),
        });
      });

      it("should render with a slotted app-title", () => {
        mount(<SlottedAppTitleSideNav />);

        cy.checkHydrated(SIDE_NAV_SELECTOR);

        cy.checkA11yWithWait();
        cy.compareSnapshot({
          name: "slotted-app-title",
          testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.027),
        });
      });

      it("should render with a slotted app-title - open", () => {
        mount(<SlottedAppTitleSideNav />);

        cy.checkHydrated(SIDE_NAV_SELECTOR);
        cy.clickOnShadowEl(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR);

        cy.checkA11yWithWait(undefined, 300);
        cy.compareSnapshot({
          name: "slotted-app-title-open",
          testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.052),
        });
      });

      it("should not display as top bar when disableTopBarBehaviour prop is set", () => {
        mount(<DisableTopBarBehaviourSideNav />);

        cy.checkHydrated(SIDE_NAV_SELECTOR);

        cy.checkA11yWithWait();
        cy.compareSnapshot({
          name: "disable-top-bar-behaviour",
          testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.003),
        });
      });

      it("should render with a different theme", () => {
        mount(
          <>
            <IcTheme color="rgb(131, 166, 195)" />
            <BasicSideNav />
          </>
        );
        cy.checkHydrated(SIDE_NAV_SELECTOR);

        cy.checkA11yWithWait();
        cy.compareSnapshot({
          name: "theme",
          testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
        });
      });

      it("should render with a different theme - open", () => {
        mount(
          <>
            <IcTheme color="rgb(131, 166, 195)" />
            <BasicSideNav />
          </>
        );
        cy.checkHydrated(SIDE_NAV_SELECTOR);
        cy.clickOnShadowEl(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR);

        cy.checkA11yWithWait(undefined, 500);
        cy.compareSnapshot({
          name: "theme-open",
          testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.046),
        });
      });
    });
  });

  describe("Desktop", () => {
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

      cy.get(SIDE_NAV_SELECTOR).should(BE_VISIBLE);
      cy.checkSideNavSize(false);
    });

    it("should render expanded with expanded prop", () => {
      mount(<ExpandedSideNav />);

      cy.get(SIDE_NAV_SELECTOR).should(BE_VISIBLE);
      cy.checkSideNavSize(true);
    });

    it("should render collapsed and expanded on menu toggle", () => {
      mount(<BasicSideNav />);

      cy.clickOnShadowEl(SIDE_NAV_SELECTOR, EXPAND_BUTTON_SELECTOR);
      cy.checkSideNavSize(true);

      cy.clickOnShadowEl(SIDE_NAV_SELECTOR, EXPAND_BUTTON_SELECTOR);
      cy.checkSideNavSize(false);
    });

    it("should expand when expand button is tabbed to and pressed", () => {
      mount(<BasicSideNav />);
      cy.checkHydrated(SIDE_NAV_SELECTOR);
      cy.findShadowEl("ic-side-navigation", ".title-link").focus();
      Cypress._.times(4, () => cy.realPress("Tab"));
      cy.realPress("Enter");
      cy.checkSideNavSize(true);

      cy.clickOnShadowEl(SIDE_NAV_SELECTOR, EXPAND_BUTTON_SELECTOR);
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

      cy.clickOnShadowEl(SIDE_NAV_SELECTOR, EXPAND_BUTTON_SELECTOR);
      cy.findShadowEl(SIDE_NAV_SELECTOR, EXPAND_BUTTON_SELECTOR)
        .invoke("attr", ARIA_LABEL_ATTR)
        .should("eq", "Collapse side navigation");

      cy.clickOnShadowEl(SIDE_NAV_SELECTOR, EXPAND_BUTTON_SELECTOR);
      cy.findShadowEl(SIDE_NAV_SELECTOR, EXPAND_BUTTON_SELECTOR)
        .invoke("attr", ARIA_LABEL_ATTR)
        .should("eq", "Expand side navigation");
    });

    it("should display application name on expanded side navigation", () => {
      mount(<BasicSideNav />);

      cy.findShadowEl(SIDE_NAV_SELECTOR, TITLE_SELECTOR).should(NOT_BE_VISIBLE);

      cy.clickOnShadowEl(SIDE_NAV_SELECTOR, EXPAND_BUTTON_SELECTOR);

      cy.findShadowEl(SIDE_NAV_SELECTOR, TITLE_SELECTOR).should(BE_VISIBLE);
    });

    it("should toggle to short title at small screen sizes", () => {
      mount(<BasicSideNav />);
      cy.viewport(576, DEFAULT_HEIGHT);
      cy.findShadowEl(SIDE_NAV_SELECTOR, TITLE_SELECTOR).should(
        CONTAIN_TEXT,
        "ACME"
      );

      cy.viewport(1200, DEFAULT_HEIGHT);
      cy.findShadowEl(SIDE_NAV_SELECTOR, TITLE_SELECTOR).should(
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

      cy.findShadowEl(SIDE_NAV_SELECTOR, "nav.primary-navigation")
        .invoke("attr", "aria-labelledby")
        .should("eq", PRIMARY_LANDMARK_ID);
      cy.findShadowEl(
        SIDE_NAV_SELECTOR,
        `nav.primary-navigation #${PRIMARY_LANDMARK_ID}`
      ).should(CONTAIN_TEXT, "Primary");

      cy.findShadowEl(SIDE_NAV_SELECTOR, "nav.secondary-navigation")
        .invoke("attr", "aria-labelledby")
        .should("eq", SECONDARY_LANDMARK_ID);
      cy.findShadowEl(
        SIDE_NAV_SELECTOR,
        `nav.secondary-navigation #${SECONDARY_LANDMARK_ID}`
      ).should(CONTAIN_TEXT, "Secondary");
    });

    it("should render app status and version", () => {
      mount(<BasicSideNav />);

      cy.clickOnShadowEl(SIDE_NAV_SELECTOR, EXPAND_BUTTON_SELECTOR);

      cy.findShadowEl(
        SIDE_NAV_SELECTOR,
        ".app-status-wrapper .app-status-text"
      ).should(CONTAIN_TEXT, "alpha");
      cy.findShadowEl(
        SIDE_NAV_SELECTOR,
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

      cy.findShadowEl(SIDE_NAV_SELECTOR, EXPAND_BUTTON_SELECTOR).should(
        NOT_EXIST
      );
    });

    it("should render visible labels when slotted menu items and expanded", () => {
      mount(<SlottedItemsExpandedSideNav />);

      cy.get(SIDE_NAV_SELECTOR)
        .find(NAV_ITEM_TYPOGRAPHY_SELECTOR)
        .should(HAVE_CSS, "visibility", "visible");
    });

    it("should render navigation item labels when using slotted app-title and side nav is expanded", () => {
      mount(<SlottedAppTitleSideNav />);

      cy.get(SIDE_NAV_SELECTOR)
        .find(NAV_ITEM_TYPOGRAPHY_SELECTOR)
        .should(HAVE_CSS, "visibility", "hidden");

      cy.clickOnShadowEl(SIDE_NAV_SELECTOR, EXPAND_BUTTON_SELECTOR);

      cy.get(SIDE_NAV_SELECTOR)
        .find(NAV_ITEM_TYPOGRAPHY_SELECTOR)
        .should(HAVE_CSS, "visibility", "visible");

      cy.clickOnShadowEl(SIDE_NAV_SELECTOR, EXPAND_BUTTON_SELECTOR);

      cy.get(SIDE_NAV_SELECTOR)
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

      cy.findShadowEl(SIDE_NAV_SELECTOR, INNER_SIDE_NAV_SELECTOR).should(
        HAVE_CSS,
        "background-color",
        "rgb(131, 166, 195)"
      );
      cy.findShadowEl(SIDE_NAV_SELECTOR, ".ic-typography-h3").should(
        HAVE_CSS,
        "color",
        "rgb(11, 12, 12)"
      );
    });

    describe("Desktop visual regression and a11y tests", () => {
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
        cy.checkHydrated(SIDE_NAV_SELECTOR);

        cy.checkA11yWithWait();
        cy.compareSnapshot({
          name: "basic-desktop",
          testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
        });
      });

      it("should render a default IcSideNavigation - open", () => {
        mount(
          <>
            <IcTheme color="rgb(27, 60, 121)" />
            <BasicSideNav />
          </>
        );
        cy.checkHydrated(SIDE_NAV_SELECTOR);
        cy.clickOnShadowEl(SIDE_NAV_SELECTOR, EXPAND_BUTTON_SELECTOR);

        cy.checkA11yWithWait(undefined, 300);
        cy.compareSnapshot({
          name: "basic-open-desktop",
          testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.034),
        });
      });

      it("should render a long status and version", () => {
        mount(<LongPropsSideNav />);

        cy.checkHydrated(SIDE_NAV_SELECTOR);
        cy.clickOnShadowEl(SIDE_NAV_SELECTOR, EXPAND_BUTTON_SELECTOR);

        cy.checkA11yWithWait(undefined, 300);
        cy.compareSnapshot({
          name: "long-props-open-desktop",
          testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.049),
        });
      });

      it("should render with an IcNavigationGroup", () => {
        mount(<GroupedSideNav />);

        cy.checkHydrated(SIDE_NAV_SELECTOR);
        cy.clickOnShadowEl(SIDE_NAV_SELECTOR, EXPAND_BUTTON_SELECTOR);

        cy.checkA11yWithWait(undefined, 300);
        cy.compareSnapshot({
          name: "nav-group-open-desktop",
          testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.044),
        });
      });

      it("should render static", () => {
        mount(<StaticSideNav />);

        cy.checkHydrated(SIDE_NAV_SELECTOR);

        cy.checkA11yWithWait();
        cy.compareSnapshot({
          name: "static-expanded-desktop",
          testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.034),
        });
      });

      it("should render with slotted nav items", () => {
        mount(<SlottedItemsExpandedSideNav />);

        cy.checkHydrated(SIDE_NAV_SELECTOR);

        cy.checkA11yWithWait();
        cy.compareSnapshot({
          name: "slotted-nav-items-expanded-desktop",
          testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.037),
        });
      });

      it("should render with a slotted app-title", () => {
        mount(<SlottedAppTitleSideNav />);

        cy.checkHydrated(SIDE_NAV_SELECTOR);

        cy.checkA11yWithWait();
        cy.compareSnapshot({
          name: "slotted-app-title-desktop",
          testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
        });
      });

      it("should render with a slotted app-title - open", () => {
        mount(<SlottedAppTitleSideNav />);

        cy.checkHydrated(SIDE_NAV_SELECTOR);
        cy.clickOnShadowEl(SIDE_NAV_SELECTOR, EXPAND_BUTTON_SELECTOR);

        cy.checkA11yWithWait(undefined, 300);
        cy.compareSnapshot({
          name: "slotted-app-title-open-desktop",
          testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.037),
        });
      });

      it("should render with a different theme", () => {
        mount(
          <>
            <IcTheme color="rgb(131, 166, 195)" />
            <BasicSideNav />
          </>
        );
        cy.checkHydrated(SIDE_NAV_SELECTOR);

        cy.checkA11yWithWait();
        cy.compareSnapshot({
          name: "theme-desktop",
          testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
        });
      });

      it("should render with a different theme - open", () => {
        mount(
          <>
            <IcTheme color="rgb(131, 166, 195)" />
            <BasicSideNav />
          </>
        );
        cy.checkHydrated(SIDE_NAV_SELECTOR);
        cy.clickOnShadowEl(SIDE_NAV_SELECTOR, EXPAND_BUTTON_SELECTOR);

        cy.checkA11yWithWait(undefined, 300);
        cy.compareSnapshot({
          name: "with-theme-open-desktop",
          testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.035),
        });
      });
    });
  });
});

describe("Mobile visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  beforeEach(() => {
    cy.viewport(DEFAULT_WIDTH, DEFAULT_HEIGHT);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  after(() => {
    cy.disableForcedColors();
  });

  it("should render a default IcSideNavigation in high contrast mode", () => {
    mount(
      <>
        <IcTheme color="rgb(27, 60, 121)" />
        <BasicSideNav />
      </>
    );
    cy.checkHydrated(SIDE_NAV_SELECTOR);

    cy.compareSnapshot({
      name: "basic-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
    });
  });

  it("should render a default IcSideNavigation in high contrast mode - open", () => {
    mount(<BasicSideNav />);

    cy.checkHydrated(SIDE_NAV_SELECTOR);
    cy.clickOnShadowEl(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR).wait(500);

    cy.compareSnapshot({
      name: "basic-open-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.044),
    });
  });

  it("should render with an IcNavigationGroup in high contrast mode", () => {
    mount(<GroupedSideNav />);

    cy.checkHydrated(SIDE_NAV_SELECTOR);
    cy.clickOnShadowEl(SIDE_NAV_SELECTOR, MENU_BUTTON_SELECTOR).wait(300);

    cy.compareSnapshot({
      name: "nav-group-open-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.059),
    });
  });

  it("should render with a slotted app-title in high contrast mode", () => {
    mount(<SlottedAppTitleSideNav />);

    cy.checkHydrated(SIDE_NAV_SELECTOR);

    cy.compareSnapshot({
      name: "slotted-app-title-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.026),
    });
  });
});

describe("Desktop visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  beforeEach(() => {
    cy.viewport(992, DEFAULT_HEIGHT);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  after(() => {
    cy.disableForcedColors();
  });

  it("should render a default IcSideNavigation in high contrast mode", () => {
    mount(<BasicSideNav />);

    cy.checkHydrated(SIDE_NAV_SELECTOR);

    cy.compareSnapshot({
      name: "basic-desktop-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render a default IcSideNavigation in high contrast mode - open", () => {
    mount(<BasicSideNav />);

    cy.checkHydrated(SIDE_NAV_SELECTOR);
    cy.clickOnShadowEl(SIDE_NAV_SELECTOR, EXPAND_BUTTON_SELECTOR).wait(300);

    cy.compareSnapshot({
      name: "basic-open-desktop-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.032),
    });
  });

  it("should render with slotted nav items in high contrast mode", () => {
    mount(<SlottedItemsExpandedSideNav />);

    cy.checkHydrated(SIDE_NAV_SELECTOR);

    cy.compareSnapshot({
      name: "slotted-nav-items-expanded-desktop-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.037),
    });
  });
});
