import React, { ReactElement } from "react";
import {
  IcNavigationGroup,
  IcNavigationItem,
  IcSearchBar,
  IcTopNavigation,
  SlottedSVG,
  IcNavigationButton,
  IcBadge,
  IcTheme,
} from "../..";

const ReusableAppIcon = (): ReactElement => (
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

const ReusableIcon = (): ReactElement => (
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
);

export const TopNavWithNavItems = (): ReactElement => {
  return (
    <IcTopNavigation appTitle="ICDS" status="alpha" version="v0.0.7">
      <ReusableAppIcon />
      <IcNavigationGroup slot="navigation" label="Navigation group">
        <IcNavigationItem label="Navigation" />
      </IcNavigationGroup>
    </IcTopNavigation>
  );
};

export const SimpleTopNav = (): ReactElement => {
  return (
    <IcTopNavigation
      app-title="ApplicationName"
      status="alpha"
      version="v0.0.7"
      shortAppTitle="AppName"
    />
  );
};

export const TopNavWithSearch = (): ReactElement => {
  return (
    <IcTopNavigation
      app-title="ApplicationName"
      status="alpha"
      version="v0.0.7"
    >
      <IcSearchBar slot="search" label="Search" placeholder="Search" />
    </IcTopNavigation>
  );
};

export const WithNavigationButton = (): ReactElement => {
  return (
    <IcTopNavigation appTitle="ApplicationName" status="alpha" version="v0.0.7">
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
};

export const IconAndTitle = (): ReactElement => {
  return (
    <IcTopNavigation appTitle="ApplicationName">
      <ReusableAppIcon />
    </IcTopNavigation>
  );
};

export const IconButtons = (): ReactElement => {
  return (
    <IcTopNavigation appTitle="ApplicationName" status="alpha" version="v0.0.7">
      <ReusableAppIcon />
      <IcSearchBar slot="search" label="Search" placeholder="Search" />
      <IcNavigationButton label="Button One" slot="buttons">
        <ReusableIcon />
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
};

export const LongText = (): ReactElement => {
  return (
    <IcTopNavigation
      appTitle="Application With a Long Name"
      status="alpha-beta-gamma-delta-epsilon"
      version="v0.0.7-current-release-name-that-is-long"
    >
      <ReusableAppIcon />
      <IcSearchBar slot="search" label="Search" placeholder="Search" />
      <IcNavigationButton label="Button One" slot="buttons">
        <ReusableIcon />
      </IcNavigationButton>
    </IcTopNavigation>
  );
};

export const LongWordAppTitle = (): ReactElement => {
  return (
    <IcTopNavigation
      appTitle="Applicationwithareallyreallylongsinglewordname"
      shortAppTitle="Short App"
      status="alpha"
      version="v0.0.7"
    >
      <ReusableAppIcon />
      <IcSearchBar slot="search" label="Search" placeholder="Search" />
      <IcNavigationButton label="Button One" slot="buttons">
        <ReusableIcon />
      </IcNavigationButton>
    </IcTopNavigation>
  );
};

export const WithNavItems = (): ReactElement => {
  return (
    <IcTopNavigation appTitle="ApplicationName" status="alpha" version="v0.0.7">
      <ReusableAppIcon />
      <IcSearchBar slot="search" label="Search" placeholder="Search" />
      <IcNavigationButton label="Button One" slot="buttons">
        <ReusableIcon />
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
};

export const WithSlottedNavItems = (): ReactElement => {
  return (
    <IcTopNavigation appTitle="ApplicationName" status="alpha" version="v0.0.7">
      <ReusableAppIcon />
      <IcSearchBar slot="search" label="Search" placeholder="Search" />
      <IcNavigationButton label="Button One" slot="buttons">
        <ReusableIcon />
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
};

export const WithNavGroup = (): ReactElement => {
  return (
    <IcTopNavigation appTitle="ApplicationName" status="alpha" version="v0.0.7">
      <ReusableAppIcon />
      <IcSearchBar slot="search" label="Search" placeholder="Search" />
      <IcNavigationButton label="Button One" slot="buttons">
        <ReusableIcon />
      </IcNavigationButton>
      <IcNavigationGroup slot="navigation" label="Navigation Group">
        <IcNavigationItem label="One" href="/" selected />
        <IcNavigationItem label="Two" href="/" target="_blank" />
      </IcNavigationGroup>
    </IcTopNavigation>
  );
};

export const CentreAligned = (): ReactElement => {
  return (
    <IcTopNavigation
      appTitle="ApplicationName"
      status="alpha"
      version="v0.0.7"
      contentAligned="center"
    >
      <ReusableAppIcon />
      <IcSearchBar slot="search" label="Search" placeholder="Search" />
      <IcNavigationButton label="Button One" slot="buttons">
        <ReusableIcon />
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
};

export const LeftAligned = (): ReactElement => {
  return (
    <IcTopNavigation
      appTitle="ApplicationName"
      status="alpha"
      version="v0.0.7"
      contentAligned="left"
    >
      <ReusableAppIcon />
      <IcSearchBar slot="search" label="Search" placeholder="Search" />
      <IcNavigationButton label="Button One" slot="buttons">
        <ReusableIcon />
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
};

export const HorizontalScroll = (): ReactElement => {
  return (
    <IcTopNavigation appTitle="ApplicationName" status="alpha" version="v0.0.7">
      <ReusableAppIcon />
      <IcNavigationGroup slot="navigation" label="Navigation Group">
        <IcNavigationItem label="One" href="/" selected />
        <IcNavigationItem label="Two" href="/" target="_blank" />
      </IcNavigationGroup>
      <IcNavigationItem slot="navigation" label="Really Long Label" href="/" />
      <IcNavigationItem slot="navigation" label="Really Long Label" href="/" />
      <IcNavigationItem slot="navigation" label="Really Long Label" href="/" />
      <IcNavigationItem slot="navigation" label="Really Long Label" href="/" />
      <IcNavigationItem slot="navigation" label="Really Long Label" href="/" />
      <IcNavigationItem slot="navigation" label="Really Long Label" href="/" />
      <IcNavigationItem slot="navigation" label="Really Long Label" href="/" />
      <IcNavigationItem slot="navigation" label="Really Long Label" href="/" />
      <IcNavigationItem slot="navigation" label="Really Long Label" href="/" />
    </IcTopNavigation>
  );
};

export const Theme = (): ReactElement => {
  return (
    <div>
      <IcTheme color="rgb(255, 201, 60)" />
      <IcTopNavigation
        appTitle="ApplicationName"
        status="alpha"
        version="v0.0.7"
      >
        <ReusableAppIcon />
        <IcSearchBar slot="search" label="Search" placeholder="Search" />
        <IcNavigationButton label="Button One" slot="buttons">
          <ReusableIcon />
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
};
