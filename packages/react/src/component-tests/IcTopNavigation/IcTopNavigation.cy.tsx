/* eslint-disable react/jsx-no-bind */
/// <reference types='Cypress' />

import { mount } from "cypress/react";
import React from "react";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";
import {
  IcBadge,
  IcNavigationButton,
  IcNavigationGroup,
  IcNavigationItem,
  IcSearchBar,
  IcTheme,
  IcTopNavigation,
} from "../../components";
import { SlottedSVG } from "../../react-component-lib/slottedSVG";
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
  SimpleTopNav,
  TopNavWithNavItems,
  TopNavWithSearch,
} from "./IcTopNavigationTestData";

const DEFAULT_TEST_THRESHOLD = 0.02;
const DEFAULT_TEST_THRESHOLD_MOBILE = 0.04;
const MOBILE_CLIP = { x: 0, y: 0, width: 375, height: 200 };
const DESKTOP_CLIP = { x: 0, y: 0, width: 1444, height: 200 };

const TOP_NAV_SELECTOR = "ic-top-navigation";
const SEARCH_BAR_SELECTOR = "ic-search-bar";
const NAV_MENU_SELECTOR = "ic-navigation-menu";
const NAV_ITEM_SELECTOR = "ic-navigation-item";
const MOBILE_CSS_CLASS = "mobile-mode";

describe("IcTopNavigation", () => {
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
    mount(
      <IcTopNavigation
        appTitle="ApplicationName"
        status="alpha"
        version="v0.0.7"
      >
        <IcNavigationButton label="Button One" slot="buttons">
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
      </IcTopNavigation>
    );
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

describe("IcTopNavigation Desktop Visual Regression Testing", () => {
  beforeEach(() => {
    cy.viewport(1444, 750);
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render app icon and title", () => {
    mount(
      <IcTopNavigation appTitle="ApplicationName">
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
      </IcTopNavigation>
    );

    cy.compareSnapshot({
      name: "app-icon-title",
      testThreshold: DEFAULT_TEST_THRESHOLD,
      cypressScreenshotOptions: {
        clip: DESKTOP_CLIP,
      },
    });
    cy.checkA11yWithWait();
  });

  it("should render status and version", () => {
    mount(<SimpleTopNav />);

    cy.compareSnapshot({
      name: "status-version",
      testThreshold: DEFAULT_TEST_THRESHOLD,
      cypressScreenshotOptions: {
        clip: DESKTOP_CLIP,
      },
    });
    cy.checkA11yWithWait();
  });

  it("should render search", () => {
    mount(<TopNavWithSearch />);

    cy.compareSnapshot({
      name: "search",
      testThreshold: DEFAULT_TEST_THRESHOLD,
      cypressScreenshotOptions: {
        clip: DESKTOP_CLIP,
      },
    });
    cy.checkA11yWithWait();
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
          <IcBadge textLabel="1" slot="badge" position="near" variant="light" />
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

    cy.compareSnapshot({
      name: "icon-buttons",
      testThreshold: DEFAULT_TEST_THRESHOLD,
      cypressScreenshotOptions: {
        clip: DESKTOP_CLIP,
      },
    });
    cy.checkA11yWithWait();
  });

  it("should render with long text values", () => {
    mount(
      <IcTopNavigation
        appTitle="Application With a Long Name"
        status="alpha-beta-gamma-delta-epsilon"
        version="v0.0.7-current-release-name-that-is-long"
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
        </IcNavigationButton>
      </IcTopNavigation>
    );

    cy.compareSnapshot({
      name: "long-text",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
      cypressScreenshotOptions: {
        clip: DESKTOP_CLIP,
      },
    });
    cy.checkA11yWithWait();
  });

  it("should render with long single-word app title", () => {
    mount(
      <IcTopNavigation
        appTitle="Applicationwithareallyreallylongsinglewordname"
        shortAppTitle="Short App"
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
        </IcNavigationButton>
      </IcTopNavigation>
    );

    cy.compareSnapshot({
      name: "long-single-word-app-title",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
      cypressScreenshotOptions: {
        clip: DESKTOP_CLIP,
      },
    });
    cy.checkA11yWithWait();
  });

  it("should render with navigation items", () => {
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
        </IcNavigationButton>
        <IcNavigationItem slot="navigation" label="One" href="/" />
        <IcNavigationItem
          slot="navigation"
          label="Two"
          href="/"
          target="_blank"
        />
        <IcNavigationItem slot="navigation" label="Three" href="/" selected />
      </IcTopNavigation>
    );

    cy.compareSnapshot({
      name: "navigation-items",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
      cypressScreenshotOptions: {
        clip: { x: 0, y: 0, width: 1444, height: 300 },
      },
    });
    cy.checkA11yWithWait();
  });

  it("should render with slotted navigation items", () => {
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
        </IcNavigationButton>
        <IcNavigationItem slot="navigation">
          <a href="/">One</a>
        </IcNavigationItem>
        <IcNavigationItem slot="navigation">
          <a href="/">Two</a>
        </IcNavigationItem>
        <IcNavigationItem slot="navigation">
          <a href="/">Three</a>
        </IcNavigationItem>
      </IcTopNavigation>
    );

    cy.compareSnapshot({
      name: "slotted-navigation-items",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
      cypressScreenshotOptions: {
        clip: { x: 0, y: 0, width: 1444, height: 300 },
      },
    });
    cy.checkA11yWithWait();
  });

  it("should render with navigation group", () => {
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
        </IcNavigationButton>
        <IcNavigationGroup slot="navigation" label="Navigation Group">
          <IcNavigationItem label="One" href="/" selected />
          <IcNavigationItem label="Two" href="/" target="_blank" />
        </IcNavigationGroup>
      </IcTopNavigation>
    );

    cy.compareSnapshot({
      name: "navigation-group",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
      cypressScreenshotOptions: {
        clip: { x: 0, y: 0, width: 1444, height: 300 },
      },
    });
    cy.checkA11yWithWait();
  });

  it("should render with content centre aligned", () => {
    mount(
      <IcTopNavigation
        appTitle="ApplicationName"
        status="alpha"
        version="v0.0.7"
        contentAligned="center"
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
        </IcNavigationButton>
        <IcNavigationItem slot="navigation" label="One" href="/" />
        <IcNavigationItem
          slot="navigation"
          label="Two"
          href="/"
          target="_blank"
        />
        <IcNavigationItem slot="navigation" label="Three" href="/" selected />
      </IcTopNavigation>
    );

    cy.compareSnapshot({
      name: "content-centre",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.03,
      cypressScreenshotOptions: {
        clip: { x: 0, y: 0, width: 1444, height: 300 },
      },
    });
    cy.checkA11yWithWait();
  });

  it("should render with content left aligned", () => {
    mount(
      <IcTopNavigation
        appTitle="ApplicationName"
        status="alpha"
        version="v0.0.7"
        contentAligned="left"
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
        </IcNavigationButton>
        <IcNavigationItem slot="navigation" label="One" href="/" />
        <IcNavigationItem
          slot="navigation"
          label="Two"
          href="/"
          target="_blank"
        />
        <IcNavigationItem slot="navigation" label="Three" href="/" selected />
      </IcTopNavigation>
    );

    cy.compareSnapshot({
      name: "content-left",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
      cypressScreenshotOptions: {
        clip: { x: 0, y: 0, width: 1444, height: 300 },
      },
    });
    cy.checkA11yWithWait();
  });

  it("should render IcNavigationGroup correctly when it is included in IcHorizontalScroll", () => {
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
        <IcNavigationGroup slot="navigation" label="Navigation Group">
          <IcNavigationItem label="One" href="/" selected />
          <IcNavigationItem label="Two" href="/" target="_blank" />
        </IcNavigationGroup>
        <IcNavigationItem
          slot="navigation"
          label="Really Long Label"
          href="/"
        />
        <IcNavigationItem
          slot="navigation"
          label="Really Long Label"
          href="/"
        />
        <IcNavigationItem
          slot="navigation"
          label="Really Long Label"
          href="/"
        />
        <IcNavigationItem
          slot="navigation"
          label="Really Long Label"
          href="/"
        />
        <IcNavigationItem
          slot="navigation"
          label="Really Long Label"
          href="/"
        />
      </IcTopNavigation>
    );

    cy.compareSnapshot({
      name: "nav-group-in-horizontal-scroll",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
      cypressScreenshotOptions: {
        clip: { x: 0, y: 0, width: 1444, height: 300 },
      },
    });
    cy.checkA11yWithWait();
  });

  it("should render with different theme colour", () => {
    mount(
      <div>
        <IcTheme color="rgb(255, 201, 60)" />
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
          </IcNavigationButton>
          <IcNavigationItem slot="navigation" label="One" href="/" />
          <IcNavigationItem
            slot="navigation"
            label="Two"
            href="/"
            target="_blank"
          />
          <IcNavigationItem slot="navigation" label="Three" href="/" selected />
        </IcTopNavigation>
      </div>
    );

    cy.compareSnapshot({
      name: "theme",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
      cypressScreenshotOptions: {
        clip: { x: 0, y: 0, width: 1444, height: 300 },
      },
    });
    cy.checkA11yWithWait();
  });
});

describe("IcTopNavigation Mobile Visual Regression Testing", () => {
  beforeEach(() => {
    cy.viewport("iphone-6");
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render app icon and title", () => {
    mount(
      <div>
        <IcTheme color="rgb(27, 60, 121)" />
        <IcTopNavigation appTitle="ApplicationName">
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
        </IcTopNavigation>
      </div>
    );

    cy.compareSnapshot({
      name: "mobile-app-icon-title",
      testThreshold: DEFAULT_TEST_THRESHOLD_MOBILE,
      cypressScreenshotOptions: {
        clip: MOBILE_CLIP,
      },
    });
    cy.checkA11yWithWait();
  });

  it("should render status and version", () => {
    mount(<SimpleTopNav />);

    cy.compareSnapshot({
      name: "mobile-status-version",
      testThreshold: DEFAULT_TEST_THRESHOLD_MOBILE,
      cypressScreenshotOptions: {
        clip: MOBILE_CLIP,
      },
    });
    cy.checkA11yWithWait();
  });

  it("should render search", () => {
    mount(<TopNavWithSearch />);

    cy.compareSnapshot({
      name: "mobile-search",
      testThreshold: DEFAULT_TEST_THRESHOLD_MOBILE,
      cypressScreenshotOptions: {
        clip: MOBILE_CLIP,
      },
    });
    cy.checkA11yWithWait();
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
          <IcBadge textLabel="1" slot="badge" position="near" variant="light" />
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

    cy.compareSnapshot({
      name: "mobile-icon-buttons",
      testThreshold: DEFAULT_TEST_THRESHOLD_MOBILE,
      cypressScreenshotOptions: {
        clip: MOBILE_CLIP,
      },
    });
    cy.checkA11yWithWait();
  });

  it("should render with long text values", () => {
    mount(
      <IcTopNavigation
        appTitle="Application With a Long Name"
        status="alpha-beta-gamma-delta-epsilon"
        version="v0.0.7-current-release-name-that-is-long"
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
        </IcNavigationButton>
      </IcTopNavigation>
    );

    cy.compareSnapshot({
      name: "mobile-long-text",
      testThreshold: DEFAULT_TEST_THRESHOLD_MOBILE + 0.01,
      cypressScreenshotOptions: {
        clip: MOBILE_CLIP,
      },
    });
    cy.checkA11yWithWait();
  });

  it("should render with long single-word app title", () => {
    mount(
      <IcTopNavigation
        appTitle="Applicationwithareallyreallylongsinglewordname"
        shortAppTitle="Short App"
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
        </IcNavigationButton>
      </IcTopNavigation>
    );

    cy.compareSnapshot({
      name: "mobile-long-single-word-app-title",
      testThreshold: DEFAULT_TEST_THRESHOLD_MOBILE,
      cypressScreenshotOptions: {
        clip: MOBILE_CLIP,
      },
    });
    cy.checkA11yWithWait();
  });

  it("should render with navigation items", () => {
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
        </IcNavigationButton>
        <IcNavigationItem slot="navigation" label="One" href="/" />
        <IcNavigationItem
          slot="navigation"
          label="Two"
          href="/"
          target="_blank"
        />
        <IcNavigationItem slot="navigation" label="Three" href="/" selected />
      </IcTopNavigation>
    );

    cy.compareSnapshot({
      name: "mobile-navigation-items",
      testThreshold: DEFAULT_TEST_THRESHOLD_MOBILE,
      cypressScreenshotOptions: {
        clip: MOBILE_CLIP,
      },
    });
    cy.checkA11yWithWait();
  });

  it("should render with slotted navigation items", () => {
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
        </IcNavigationButton>
        <IcNavigationItem slot="navigation">
          <a href="/">One</a>
        </IcNavigationItem>
        <IcNavigationItem slot="navigation">
          <a href="/">Two</a>
        </IcNavigationItem>
        <IcNavigationItem slot="navigation">
          <a href="/">Three</a>
        </IcNavigationItem>
      </IcTopNavigation>
    );

    cy.compareSnapshot({
      name: "mobile-slotted-navigation-items",
      testThreshold: DEFAULT_TEST_THRESHOLD_MOBILE,
      cypressScreenshotOptions: {
        clip: MOBILE_CLIP,
      },
    });
    cy.checkA11yWithWait();
  });

  it("should render with navigation group", () => {
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
        </IcNavigationButton>
        <IcNavigationGroup slot="navigation" label="Navigation Group">
          <IcNavigationItem label="One" href="/" selected />
          <IcNavigationItem label="Two" href="/" target="_blank" />
        </IcNavigationGroup>
      </IcTopNavigation>
    );

    cy.compareSnapshot({
      name: "mobile-navigation-group",
      testThreshold: DEFAULT_TEST_THRESHOLD_MOBILE,
      cypressScreenshotOptions: {
        clip: MOBILE_CLIP,
      },
    });
    cy.checkA11yWithWait();
  });

  it("should render with menu open", () => {
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
        </IcNavigationButton>
        <IcNavigationGroup slot="navigation" label="Navigation Group">
          <IcNavigationItem label="One" href="/" selected />
          <IcNavigationItem label="Two" href="/" target="_blank" />
        </IcNavigationGroup>
      </IcTopNavigation>
    );

    cy.clickOnShadowEl(TOP_NAV_SELECTOR, "ic-button#menu-button");
    cy.compareSnapshot({
      name: "mobile-open-menu",
      testThreshold: DEFAULT_TEST_THRESHOLD_MOBILE + 0.02,
      cypressScreenshotOptions: {
        clip: { x: 0, y: 0, width: 375, height: 500 },
      },
    });
    cy.checkA11yWithWait();
  });

  it("should render with content centre aligned", () => {
    mount(
      <IcTopNavigation
        appTitle="ApplicationName"
        status="alpha"
        version="v0.0.7"
        contentAligned="center"
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
        </IcNavigationButton>
        <IcNavigationItem slot="navigation" label="One" href="/" />
        <IcNavigationItem
          slot="navigation"
          label="Two"
          href="/"
          target="_blank"
        />
        <IcNavigationItem slot="navigation" label="Three" href="/" selected />
      </IcTopNavigation>
    );

    cy.compareSnapshot({
      name: "mobile-content-centre",
      testThreshold: DEFAULT_TEST_THRESHOLD_MOBILE,
      cypressScreenshotOptions: {
        clip: MOBILE_CLIP,
      },
    });
    cy.checkA11yWithWait();
  });

  it("should render with content left aligned", () => {
    mount(
      <IcTopNavigation
        appTitle="ApplicationName"
        status="alpha"
        version="v0.0.7"
        contentAligned="left"
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
        </IcNavigationButton>
        <IcNavigationItem slot="navigation" label="One" href="/" />
        <IcNavigationItem
          slot="navigation"
          label="Two"
          href="/"
          target="_blank"
        />
        <IcNavigationItem slot="navigation" label="Three" href="/" selected />
      </IcTopNavigation>
    );

    cy.compareSnapshot({
      name: "mobile-content-left",
      testThreshold: DEFAULT_TEST_THRESHOLD_MOBILE,
      cypressScreenshotOptions: {
        clip: MOBILE_CLIP,
      },
    });
    cy.checkA11yWithWait();
  });

  it("should render with different theme colour", () => {
    mount(
      <div>
        <IcTheme color="rgb(255, 201, 60)" />
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
          </IcNavigationButton>
          <IcNavigationItem slot="navigation" label="One" href="/" />
          <IcNavigationItem
            slot="navigation"
            label="Two"
            href="/"
            target="_blank"
          />
          <IcNavigationItem slot="navigation" label="Three" href="/" selected />
        </IcTopNavigation>
      </div>
    );

    cy.compareSnapshot({
      name: "mobile-theme",
      testThreshold: DEFAULT_TEST_THRESHOLD_MOBILE,
      cypressScreenshotOptions: {
        clip: MOBILE_CLIP,
      },
    });
    cy.checkA11yWithWait();
  });
});
