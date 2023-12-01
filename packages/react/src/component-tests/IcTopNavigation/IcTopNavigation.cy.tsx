/* eslint-disable react/jsx-no-bind */
/// <reference types='Cypress' />

import React from "react";
import {
  SimpleTopNav,
  TopNavWithNavItems,
  TopNavWithSearch,
} from "./IcTopNavigationTestData";
import { CYPRESS_AXE_OPTIONS } from "../../../cypress/utils/a11y";
import { mount } from "cypress/react";
import {
  IcTopNavigation,
  IcSearchBar,
  IcNavigationButton,
  IcBadge,
  IcNavigationItem,
  IcNavigationGroup,
  IcTheme,
} from "../../components";
import { SlottedSVG } from "../..";

const TOP_NAV_LABEL = "ic-top-navigation";
const SEARCH_BAR_LABEL = "ic-search-bar";

describe("IcTopNavigation", () => {
  describe("mobile", () => {
    beforeEach(() => {
      cy.viewport("iphone-6");
    });

    it("renders", () => {
      mount(<SimpleTopNav />);
      cy.get(TOP_NAV_LABEL).shadow().contains("AppName");
    });

    it("should open and close menu", () => {
      mount(<SimpleTopNav />);
      cy.clickOnShadowEl(TOP_NAV_LABEL, "ic-button");
      cy.findShadowEl(TOP_NAV_LABEL, "ic-navigation-menu")
        .shadow()
        .find("ic-button")
        .click();
    });

    it("should close menu when nav item clicked", () => {
      mount(<SimpleTopNav />);
      cy.clickOnShadowEl(TOP_NAV_LABEL, "ic-button");
      cy.findShadowEl(TOP_NAV_LABEL, "ic-navigation-menu")
        .shadow()
        .find("ic-button")
        .click();
    });

    it("should toggle search bar when clicking on button", () => {
      mount(<TopNavWithSearch />);
      cy.findShadowEl(TOP_NAV_LABEL, "ic-button").first().click();
      cy.get(SEARCH_BAR_LABEL).should("have.css", "height", "40px");
      cy.findShadowEl(TOP_NAV_LABEL, "ic-button").first().click();
      cy.get(SEARCH_BAR_LABEL).should("have.css", "height", "0px");
    });

    it("should hide search bar when loses focus", () => {
      mount(<TopNavWithSearch />);
      cy.findShadowEl(TOP_NAV_LABEL, "ic-button").first().click();
      cy.get(SEARCH_BAR_LABEL).should("have.css", "height", "40px");
      cy.get(SEARCH_BAR_LABEL).should("be.visible").should("have.focus").blur();
      cy.get(SEARCH_BAR_LABEL).should("have.css", "height", "0px");
    });

    /// Need to check if the following two tests are still required- is tabbing functionality required for mobile test?

    // 'should keep tab focus in menu - button as last el'
    // "should keep tab focus in menu - nav item as last el"
  });
});
describe("desktop", () => {
  beforeEach(() => {
    cy.viewport(1024, 750);
  });

  it("renders", () => {
    mount(<SimpleTopNav />);
    cy.get(TOP_NAV_LABEL).shadow().contains("ApplicationName");
  });

  it.skip("should hide dropdown menu when nav item clicked", () => {
    mount(<TopNavWithNavItems />);
    cy.checkHydrated("ic-navigation-group");
    cy.clickOnShadowEl(TOP_NAV_LABEL, "ic-navigation-group");
  });

  it("should toggle to short title at small screen sizes", () => {
    mount(<SimpleTopNav />);
    cy.viewport(1024, 750);
    cy.findShadowEl(TOP_NAV_LABEL, "h1").contains("ApplicationName");
    cy.viewport("iphone-6");
    cy.findShadowEl(TOP_NAV_LABEL, "h1").contains("AppName");
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

  it("renders app icon and title", () => {
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

    cy.compareSnapshot("app-icon-title");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders status and version", () => {
    mount(<SimpleTopNav />);

    cy.compareSnapshot("status-version");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders search", () => {
    mount(<TopNavWithSearch />);

    cy.compareSnapshot("search");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders icon buttons", () => {
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

    cy.compareSnapshot("icon-buttons");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with long text values", () => {
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

    cy.compareSnapshot("long-text");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with long single-word app title", () => {
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

    cy.compareSnapshot("long-single-word-app-title");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with navigation items", () => {
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

    cy.compareSnapshot("navigation-items");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with slotted navigation items", () => {
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

    cy.compareSnapshot("slotted-navigation-items");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with navigation group", () => {
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

    cy.compareSnapshot("navigation-group");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with content centre aligned", () => {
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

    cy.compareSnapshot("content-centre");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with content left aligned", () => {
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

    cy.compareSnapshot("content-left");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with different theme colour", () => {
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

    cy.compareSnapshot("theme");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });
});

describe("IcTopNavigation Mobile Visual Regression Testing", () => {
  beforeEach(() => {
    cy.viewport("iphone-6");
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("renders app icon and title", () => {
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

    cy.compareSnapshot("mobile-app-icon-title");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders status and version", () => {
    mount(<SimpleTopNav />);

    cy.compareSnapshot("mobile-status-version");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders search", () => {
    mount(<TopNavWithSearch />);

    cy.compareSnapshot("mobile-search");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders icon buttons", () => {
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

    cy.compareSnapshot("mobile-icon-buttons");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with long text values", () => {
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

    cy.compareSnapshot("mobile-long-text");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with long single-word app title", () => {
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

    cy.compareSnapshot("mobile-long-single-word-app-title");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with navigation items", () => {
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

    cy.compareSnapshot("mobile-navigation-items");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with slotted navigation items", () => {
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

    cy.compareSnapshot("mobile-slotted-navigation-items");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with navigation group", () => {
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

    cy.compareSnapshot("mobile-navigation-group");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with menu open", () => {
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

    cy.clickOnShadowEl(TOP_NAV_LABEL, "ic-button#menu-button");
    cy.compareSnapshot("mobile-open-menu");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with content centre aligned", () => {
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

    cy.compareSnapshot("mobile-content-centre");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with content left aligned", () => {
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

    cy.compareSnapshot("mobile-content-left");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with different theme colour", () => {
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

    cy.compareSnapshot("mobile-theme");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });
});
