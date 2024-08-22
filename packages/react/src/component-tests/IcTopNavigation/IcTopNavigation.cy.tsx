/* eslint-disable react/jsx-no-bind */
/// <reference types='Cypress' />

import { mount } from "cypress/react";
import React from "react";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";
import { IcSearchBar, IcTheme, IcTopNavigation } from "../../components";
import {
  BE_VISIBLE,
  HAVE_ATTR,
  HAVE_CLASS,
  HAVE_CSS,
  HAVE_FOCUS,
  NOT_BE_VISIBLE,
  NOT_EXIST,
  NOT_HAVE_ATTR,
  NOT_HAVE_CLASS,
} from "../utils/constants";
import {
  CentreAligned,
  HorizontalScroll,
  IconAndTitle,
  IconButtons,
  LeftAligned,
  LongText,
  LongWordAppTitle,
  SimpleTopNav,
  Theme,
  TopNavWithNavItems,
  TopNavWithSearch,
  WithNavGroup,
  WithNavigationButton,
  WithNavItems,
  WithSlottedNavItems,
} from "./IcTopNavigationTestData";

const DEFAULT_TEST_THRESHOLD = 0.009;
const DEFAULT_TEST_THRESHOLD_MOBILE = 0.025;

const TOP_NAV_SELECTOR = "ic-top-navigation";
const SEARCH_BAR_SELECTOR = "ic-search-bar";
const NAV_MENU_SELECTOR = "ic-navigation-menu";
const NAV_ITEM_SELECTOR = "ic-navigation-item";
const MOBILE_CSS_CLASS = "mobile-mode";

describe("IcTopNavigation end-to-end tests", () => {
  describe("mobile", () => {
    beforeEach(() => {
      cy.viewport("iphone-6");
    });

    it("renders", () => {
      mount(<SimpleTopNav />);

      cy.get(TOP_NAV_SELECTOR).shadow().contains("AppName");
    });

    it("should open and close menu", () => {
      mount(<SimpleTopNav />);

      cy.clickOnShadowEl(TOP_NAV_SELECTOR, "ic-button");
      cy.findShadowEl(TOP_NAV_SELECTOR, NAV_MENU_SELECTOR)
        .shadow()
        .find("ic-button")
        .click();

      cy.findShadowEl(TOP_NAV_SELECTOR, NAV_MENU_SELECTOR).should(NOT_EXIST);
    });

    it("should hide tooltip when escape pressed on close button", () => {
      mount(<TopNavWithNavItems />);

      cy.clickOnShadowEl(TOP_NAV_SELECTOR, "ic-button");
      cy.findShadowEl(TOP_NAV_SELECTOR, NAV_MENU_SELECTOR)
        .shadow()
        .find("#menu-close-button")
        .shadow()
        .find("ic-tooltip")
        .shadow()
        .find(".ic-tooltip-container")
        .should(BE_VISIBLE);

      // first press of Escape should hide tooltip on button
      cy.findShadowEl(TOP_NAV_SELECTOR, NAV_MENU_SELECTOR)
        .shadow()
        .find("#menu-close-button")
        .realPress("Escape");
      cy.findShadowEl(TOP_NAV_SELECTOR, NAV_MENU_SELECTOR)
        .shadow()
        .find("#menu-close-button")
        .should(BE_VISIBLE);
      cy.findShadowEl(TOP_NAV_SELECTOR, NAV_MENU_SELECTOR)
        .shadow()
        .find("#menu-close-button")
        .shadow()
        .find("ic-tooltip")
        .shadow()
        .find(".ic-tooltip-container")
        .should(NOT_BE_VISIBLE);

      // second press should hide menu
      cy.findShadowEl(TOP_NAV_SELECTOR, NAV_MENU_SELECTOR)
        .shadow()
        .find("#menu-close-button")
        .realPress("Escape");
      cy.findShadowEl(TOP_NAV_SELECTOR, NAV_MENU_SELECTOR).should(NOT_EXIST);
    });

    it("should toggle search bar when clicking on button", () => {
      mount(<TopNavWithSearch />);

      cy.findShadowEl(TOP_NAV_SELECTOR, "ic-button").first().click();
      cy.get(SEARCH_BAR_SELECTOR).should(HAVE_CSS, "height", "40px");
      cy.findShadowEl(TOP_NAV_SELECTOR, "ic-button").first().click();
      cy.get(SEARCH_BAR_SELECTOR).should(HAVE_CSS, "height", "0px");
    });

    it("should hide search bar when loses focus", () => {
      mount(<TopNavWithSearch />);

      cy.findShadowEl(TOP_NAV_SELECTOR, "ic-button").first().click();
      cy.get(SEARCH_BAR_SELECTOR).should(HAVE_CSS, "height", "40px");
      cy.get(SEARCH_BAR_SELECTOR).should(BE_VISIBLE).should(HAVE_FOCUS).blur();
      cy.get(SEARCH_BAR_SELECTOR).should(HAVE_CSS, "height", "0px");
    });
  });

  describe("desktop", () => {
    beforeEach(() => {
      cy.viewport(1024, 750);
    });

    it("should render", () => {
      mount(<SimpleTopNav />);

      cy.get(TOP_NAV_SELECTOR).shadow().contains("ApplicationName");
    });

    it("should hide dropdown menu when nav item clicked", () => {
      mount(<TopNavWithNavItems />);

      cy.checkHydrated("ic-navigation-group");
      cy.get(TOP_NAV_SELECTOR)
        .find("ic-navigation-group")
        .trigger("mouseenter");
      cy.get(TOP_NAV_SELECTOR).find(NAV_ITEM_SELECTOR).should(BE_VISIBLE);
      cy.get(TOP_NAV_SELECTOR).find(NAV_ITEM_SELECTOR).click();
      cy.get(TOP_NAV_SELECTOR).find(NAV_ITEM_SELECTOR).should(NOT_BE_VISIBLE);
    });

    it("should toggle to short title at small screen sizes", () => {
      mount(<SimpleTopNav />);

      cy.viewport(1024, 750);
      cy.findShadowEl(TOP_NAV_SELECTOR, "h1").contains("ApplicationName");
      cy.viewport("iphone-6");
      cy.findShadowEl(TOP_NAV_SELECTOR, "h1").contains("AppName");
    });

    it("should switch to mobile mode at a different breakpoint when customMobileBreakpoint is set", () => {
      mount(
        <IcTopNavigation
          app-title="ApplicationName"
          status="alpha"
          version="v0.0.7"
          shortAppTitle="AppName"
          customMobileBreakpoint={768} // Medium
        >
          <IcSearchBar slot="search" label="Search" placeholder="Search" />
        </IcTopNavigation>
      );

      cy.get(TOP_NAV_SELECTOR).should(NOT_HAVE_CLASS, MOBILE_CSS_CLASS);
      cy.viewport(992, 750);
      cy.get(TOP_NAV_SELECTOR).should(NOT_HAVE_CLASS, MOBILE_CSS_CLASS);
      cy.viewport(768, 750);
      cy.get(TOP_NAV_SELECTOR).should(HAVE_CLASS, MOBILE_CSS_CLASS);
    });
  });
});

describe("IcNavigationButton", () => {
  it("should update any attributes inherited from the root element when they are mutated", () => {
    const NAV_BUTTON_SELECTOR = "ic-navigation-button";
    mount(<WithNavigationButton />);

    cy.findShadowEl(NAV_BUTTON_SELECTOR, "ic-button").should(
      NOT_HAVE_ATTR,
      "title"
    );

    cy.get(NAV_BUTTON_SELECTOR).invoke("attr", "title", "new-title");
    cy.findShadowEl(NAV_BUTTON_SELECTOR, "ic-button").should(
      HAVE_ATTR,
      "title",
      "new-title"
    );
  });
});

describe("IcTopNavigation desktop visual regression tests", () => {
  beforeEach(() => {
    cy.viewport(1444, 750);
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render app icon and title", () => {
    mount(<IconAndTitle />);
    cy.checkHydrated(TOP_NAV_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "app-icon-title",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render status and version", () => {
    mount(<SimpleTopNav />);
    cy.checkHydrated(TOP_NAV_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "status-version",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.004),
    });
  });

  it("should render search", () => {
    mount(<TopNavWithSearch />);
    cy.checkHydrated(TOP_NAV_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "search",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.004),
    });
  });

  it("should render icon buttons", () => {
    mount(
      <IcTopNavigation
        appTitle="ApplicationName"
        status="alpha"
        version="v0.0.7"
      >
        <SlottedSVG
          slot="app-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
        </SlottedSVG>
        <IcSearchBar slot="search" label="Search" placeholder="Search" />
        <IcNavigationButton label="Button One" slot="buttons">
          <SlottedSVG
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none"></path>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"></path>
          </SlottedSVG>
          <IcBadge label="1" slot="badge" position="near" variant="light" />
        </IcNavigationButton>
        <IcNavigationButton label="Button Two" slot="buttons">
          <SlottedSVG
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path>
          </SlottedSVG>
        </IcNavigationButton>
        <IcNavigationButton label="Button Three" slot="buttons">
          <SlottedSVG
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none"></path>
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
          </SlottedSVG>
        </IcNavigationButton>
      </IcTopNavigation>
    );
    cy.checkHydrated(TOP_NAV_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "icon-buttons",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.004),
    });
  });

  it("should render with long text values", () => {
    mount(<LongText />);
    cy.checkHydrated(TOP_NAV_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "long-text",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.021),
    });
  });

  it("should render with long single-word app title", () => {
    mount(<LongWordAppTitle />);
    cy.checkHydrated(TOP_NAV_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "long-single-word-app-title",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.008),
    });
  });

  it("should render with navigation items", () => {
    mount(<WithNavItems />);
    cy.checkHydrated(TOP_NAV_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "navigation-items",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.025),
    });
  });

  it("should render with slotted navigation items", () => {
    mount(<WithSlottedNavItems />);
    cy.checkHydrated(TOP_NAV_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "slotted-navigation-items",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.025),
    });
  });

  it("should render with navigation group", () => {
    mount(<WithNavGroup />);
    cy.checkHydrated(TOP_NAV_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "navigation-group",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.026),
    });
  });

  it("should render with content centre aligned", () => {
    mount(<CentreAligned />);
    cy.checkHydrated(TOP_NAV_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "content-centre",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.03),
    });
  });

  it("should render with content left aligned", () => {
    mount(<LeftAligned />);
    cy.checkHydrated(TOP_NAV_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "content-left",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.017),
    });
  });

  it("should render IcNavigationGroup correctly when it is included in IcHorizontalScroll", () => {
    mount(<HorizontalScroll />);
    cy.checkHydrated(TOP_NAV_SELECTOR);

    //cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "nav-group-in-horizontal-scroll",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.037),
    });
  });

  it("should render with different theme color", () => {
    mount(<Theme />);
    cy.checkHydrated(TOP_NAV_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "theme",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.028),
    });
  });
});

describe("IcTopNavigation mobile visual regression tests", () => {
  beforeEach(() => {
    cy.viewport("iphone-6");
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render app icon and title", () => {
    mount(
      <div>
        <IcTheme color="rgb(27, 60, 121)" />
        <IconAndTitle />
      </div>
    );
    cy.checkHydrated(TOP_NAV_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "mobile-app-icon-title",
      testThreshold: setThresholdBasedOnEnv(
        DEFAULT_TEST_THRESHOLD_MOBILE + 0.004
      ),
    });
  });

  it("should render status and version", () => {
    mount(<SimpleTopNav />);
    cy.checkHydrated(TOP_NAV_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "mobile-status-version",
      testThreshold: setThresholdBasedOnEnv(
        DEFAULT_TEST_THRESHOLD_MOBILE + 0.004
      ),
    });
  });

  it("should render search", () => {
    mount(<TopNavWithSearch />);
    cy.checkHydrated(TOP_NAV_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "mobile-search",
      testThreshold: setThresholdBasedOnEnv(
        DEFAULT_TEST_THRESHOLD_MOBILE + 0.009
      ),
    });
  });

  it("should render icon buttons", () => {
    mount(
      <IcTopNavigation
        appTitle="ApplicationName"
        status="alpha"
        version="v0.0.7"
      >
        <SlottedSVG
          slot="app-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
        </SlottedSVG>
        <IcSearchBar slot="search" label="Search" placeholder="Search" />
        <IcNavigationButton label="Button One" slot="buttons">
          <SlottedSVG
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none"></path>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"></path>
          </SlottedSVG>
          <IcBadge label="1" slot="badge" position="near" variant="light" />
        </IcNavigationButton>
        <IcNavigationButton label="Button Two" slot="buttons">
          <SlottedSVG
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path>
          </SlottedSVG>
        </IcNavigationButton>
        <IcNavigationButton label="Button Three" slot="buttons">
          <SlottedSVG
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none"></path>
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
          </SlottedSVG>
        </IcNavigationButton>
      </IcTopNavigation>
    );
    cy.checkHydrated(TOP_NAV_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "mobile-icon-buttons",
      testThreshold: setThresholdBasedOnEnv(
        DEFAULT_TEST_THRESHOLD_MOBILE + 0.009
      ),
    });
  });

  it("should render with long text values", () => {
    mount(<LongText />);
    cy.checkHydrated(TOP_NAV_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "mobile-long-text",
      testThreshold: setThresholdBasedOnEnv(
        DEFAULT_TEST_THRESHOLD_MOBILE + 0.015
      ),
    });
  });

  it("should render with long single-word app title", () => {
    mount(<LongWordAppTitle />);
    cy.checkHydrated(TOP_NAV_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "mobile-long-single-word-app-title",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD_MOBILE),
    });
  });

  it("should render with navigation items", () => {
    mount(<WithNavItems />);
    cy.checkHydrated(TOP_NAV_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "mobile-navigation-items",
      testThreshold: setThresholdBasedOnEnv(
        DEFAULT_TEST_THRESHOLD_MOBILE + 0.009
      ),
    });
  });

  it("should render with slotted navigation items", () => {
    mount(<WithSlottedNavItems />);
    cy.checkHydrated(TOP_NAV_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "mobile-slotted-navigation-items",
      testThreshold: setThresholdBasedOnEnv(
        DEFAULT_TEST_THRESHOLD_MOBILE + 0.009
      ),
    });
  });

  it("should render with navigation group", () => {
    mount(<WithNavGroup />);
    cy.checkHydrated(TOP_NAV_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "mobile-navigation-group",
      testThreshold: setThresholdBasedOnEnv(
        DEFAULT_TEST_THRESHOLD_MOBILE + 0.009
      ),
    });
  });

  it("should render with menu open", () => {
    mount(<WithNavGroup />);
    cy.checkHydrated(TOP_NAV_SELECTOR);

    cy.clickOnShadowEl(TOP_NAV_SELECTOR, "ic-button#menu-button");

    cy.checkA11yWithWait(undefined, 800);
    cy.compareSnapshot({
      name: "mobile-open-menu",
      testThreshold: setThresholdBasedOnEnv(
        DEFAULT_TEST_THRESHOLD_MOBILE + 0.034
      ),
    });
  });

  it("should render with content centre aligned", () => {
    mount(<CentreAligned />);
    cy.checkHydrated(TOP_NAV_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "mobile-content-centre",
      testThreshold: setThresholdBasedOnEnv(
        DEFAULT_TEST_THRESHOLD_MOBILE + 0.009
      ),
    });
  });

  it("should render with content left aligned", () => {
    mount(<LeftAligned />);
    cy.checkHydrated(TOP_NAV_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "mobile-content-left",
      testThreshold: setThresholdBasedOnEnv(
        DEFAULT_TEST_THRESHOLD_MOBILE + 0.009
      ),
    });
  });

  it("should render with different theme color - mobile", () => {
    mount(<Theme />);
    cy.checkHydrated(TOP_NAV_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "mobile-theme",
      testThreshold: setThresholdBasedOnEnv(
        DEFAULT_TEST_THRESHOLD_MOBILE + 0.012
      ),
    });
  });
});

describe("IcTopNavigation desktop visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  beforeEach(() => {
    cy.viewport(1444, 750);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  after(() => {
    cy.disableForcedColors();
  });

  it("should render with navigation items in high contrast mode", () => {
    mount(<WithNavItems />);
    cy.checkHydrated(TOP_NAV_SELECTOR);

    cy.compareSnapshot({
      name: "navigation-items-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.029),
    });
  });

  it("should render with slotted navigation items in high contrast mode", () => {
    mount(<WithSlottedNavItems />);
    cy.checkHydrated(TOP_NAV_SELECTOR);

    cy.compareSnapshot({
      name: "slotted-navigation-items-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.029),
    });
  });

  it("should render icon buttons in high contrast mode", () => {
    mount(<IconButtons />);
    cy.checkHydrated(TOP_NAV_SELECTOR);

    cy.compareSnapshot({
      name: "icon-buttons-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.004),
    });
  });

  it("should render IcNavigationGroup correctly when it is included in IcHorizontalScroll in high contrast mode", () => {
    mount(<HorizontalScroll />);
    cy.checkHydrated(TOP_NAV_SELECTOR);

    cy.compareSnapshot({
      name: "nav-group-in-horizontal-scroll-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.034),
    });
  });
});

describe("IcTopNavigation mobile visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  beforeEach(() => {
    cy.viewport("iphone-6");
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  after(() => {
    cy.disableForcedColors();
  });

  it.skip("should render with navigation items in high contrast mode", () => {
    mount(<WithNavItems />);
    cy.checkHydrated(TOP_NAV_SELECTOR);

    cy.compareSnapshot({
      name: "mobile-navigation-items-high-contrast",
      testThreshold: setThresholdBasedOnEnv(
        DEFAULT_TEST_THRESHOLD_MOBILE + 0.006
      ),
    });
  });

  it("should render with menu open in high contrast mode", () => {
    mount(<WithNavGroup />);
    cy.checkHydrated(TOP_NAV_SELECTOR);

    cy.clickOnShadowEl(TOP_NAV_SELECTOR, "ic-button#menu-button").wait(800);

    cy.compareSnapshot({
      name: "mobile-open-menu-high-contrast",
      testThreshold: setThresholdBasedOnEnv(
        DEFAULT_TEST_THRESHOLD_MOBILE + 0.037
      ),
    });
  });
});
