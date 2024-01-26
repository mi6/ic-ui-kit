/* eslint-disable @typescript-eslint/no-namespace */
import React, { ReactElement } from "react";
import {
  IcNavigationGroup,
  IcNavigationItem,
  IcSideNavigation,
} from "../../components";
import { SlottedSVG } from "../..";

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Check the width of an `ic-side-navigation` element in the open and closed states
       * @param {boolean} open whether the side nav is expected to be open or closed
       */
      checkSideNavSize: typeof checkSideNavSize;
    }
  }
}

export const checkSideNavSize = (open: boolean): void => {
  cy.get("ic-side-navigation")
    .invoke("width")
    .should("eq", open ? 320 : 56);
};

const ReusableSlottedIcon = (): ReactElement => (
  <SlottedSVG
    slot="icon"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
      fill="currentColor"
    />
  </SlottedSVG>
);

const AppIcon = (): ReactElement => (
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
);

const SideNavChildren = (): ReactElement => (
  <>
    <AppIcon />
    <IcNavigationItem slot="primary-navigation" href="/" label="Home">
      <ReusableSlottedIcon />
    </IcNavigationItem>
    <IcNavigationItem
      slot="primary-navigation"
      href="/"
      label="This is a very very very very very long label"
    >
      <ReusableSlottedIcon />
    </IcNavigationItem>
    <IcNavigationItem slot="secondary-navigation" href="/" label="a11y">
      <SlottedSVG
        slot="icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9H15V22H13V16H11V22H9V9H3V7H21V9Z"
          fill="currentColor"
        />
      </SlottedSVG>
    </IcNavigationItem>
  </>
);

export const BasicSideNav = (): ReactElement => (
  <IcSideNavigation
    appTitle="ApplicationName"
    shortAppTitle="ACME"
    version="v0.0.0"
    status="alpha"
    disableAutoParentStyling
  >
    <SideNavChildren />
  </IcSideNavigation>
);

export const ExpandedSideNav = (): ReactElement => (
  <IcSideNavigation
    appTitle="ApplicationName"
    version="v0.0.0"
    status="alpha"
    expanded
  >
    <SideNavChildren />
  </IcSideNavigation>
);

export const GroupedSideNav = (): ReactElement => (
  <IcSideNavigation
    appTitle="ApplicationName"
    shortAppTitle="ACME"
    version="v0.0.0"
    status="alpha"
    disableAutoParentStyling
  >
    <SideNavChildren />
    <IcNavigationGroup
      slot="primary-navigation"
      label="Second navigation group"
      expandable
    >
      <IcNavigationItem label="Different navigation" href="/">
        <SlottedSVG
          slot="icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
            fill="currentColor"
          />
        </SlottedSVG>
      </IcNavigationItem>
    </IcNavigationGroup>
  </IcSideNavigation>
);

export const StaticSideNav = (): ReactElement => (
  <IcSideNavigation
    appTitle="ApplicationName"
    version="v0.0.0"
    status="alpha"
    expanded
    static
    disableAutoParentStyling
  >
    <SideNavChildren />
  </IcSideNavigation>
);

const SlottedNavItemsChildren = (): ReactElement => (
  <>
    <AppIcon />
    <IcNavigationItem slot="primary-navigation">
      <a
        slot="navigation-item"
        className="active"
        href="/child-item-2"
        aria-label="Daily Tippers"
      >
        <ReusableSlottedIcon />
        Daily Tippers
      </a>
    </IcNavigationItem>
    <IcNavigationGroup
      slot="primary-navigation"
      label="Second navigation group"
      expandable
    >
      <IcNavigationItem>
        <a
          slot="navigation-item"
          href="/child-item-2"
          aria-label="Daily Tippers"
        >
          <ReusableSlottedIcon />
          Daily Tippers
        </a>
      </IcNavigationItem>
    </IcNavigationGroup>
    <IcNavigationItem slot="secondary-navigation">
      <a slot="navigation-item" href="/bar" aria-label="bar">
        <ReusableSlottedIcon />
        bar
      </a>
    </IcNavigationItem>
  </>
);

export const SlottedItemsExpandedSideNav = (): ReactElement => (
  <IcSideNavigation
    appTitle="ApplicationName"
    version="v0.0.0"
    status="alpha"
    expanded
    disableAutoParentStyling
  >
    <SlottedNavItemsChildren />
  </IcSideNavigation>
);

export const SlottedAppTitleSideNav = (): ReactElement => (
  <IcSideNavigation version="v0.0.0" status="alpha" disableAutoParentStyling>
    <a href="/" slot="app-title">
      Application Name
    </a>
    <SlottedNavItemsChildren />
  </IcSideNavigation>
);

export const LongPropsSideNav = (): ReactElement => (
  <IcSideNavigation
    appTitle="ApplicationName"
    shortAppTitle="ACME"
    version="v0.0.0-alpha-beta-gamma-delta-release.01"
    status="Alpha-BETA-GAMMA-DELTA"
    disableAutoParentStyling
  >
    <SideNavChildren />
  </IcSideNavigation>
);
