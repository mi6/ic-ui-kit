import {
  IcTopNavigation,
  IcNavigationButton,
  IcNavigationItem,
  IcNavigationGroup,
  IcSearchBar,
  IcTypography,
  IcSectionContainer,
  IcButton,
  IcTheme,
  IcBadge,
} from "../components";
import React, { useState } from "react";
import readme from "../../../web-components/src/components/ic-top-navigation/readme.md";
import NavigationButton from "../../../web-components/src/components/ic-navigation-button/readme.md";
import NavigationItem from "../../../web-components/src/components/ic-navigation-item/readme.md";
import NavigationGroup from "../../../web-components/src/components/ic-navigation-group/readme.md";
import { NavLink, MemoryRouter, Switch, Route, Routes } from "react-router-dom";

const Controlled = () => {
  const [color, setColour] = useState("rgb(255, 201, 60)");
  const defaultButtonClickHandler = () => {
    setColour("rgb(35, 81, 142)");
  };
  const differentButtonClickHandler = () => {
    setColour("rgb(255, 201, 60)");
  };
  return (
    <>
      <IcTheme color={color} />
      <IcButton variant="primary" onClick={defaultButtonClickHandler}>
        Default theme
      </IcButton>
      <IcButton variant="primary" onClick={differentButtonClickHandler}>
        Sunrise theme
      </IcButton>
    </>
  );
};

const HomePage = () => (
  <IcSectionContainer>
    <IcTypography variant="h1">Hi there!</IcTypography>
    <IcTypography>
      This example is demonstrating the Top Navigation component with React
      Router
    </IcTypography>
  </IcSectionContainer>
);

const DailyTippers = () => (
  <IcSectionContainer>
    <IcTypography variant="h1">Daily tippers</IcTypography>
    <IcTypography>
      Lorem ipsum doloe sit amet, consectetur adipiscing
    </IcTypography>
  </IcSectionContainer>
);

const HomePageGrouped = () => (
  <IcSectionContainer>
    <IcTypography variant="h1">Hi there!</IcTypography>
    <IcTypography>
      This example is demonstrating the Top Navigation component with React
      Router
    </IcTypography>
  </IcSectionContainer>
);

const DailyTippersGrouped = () => (
  <IcSectionContainer>
    <IcTypography variant="h1">Daily tippers</IcTypography>
    <IcTypography>
      Lorem ipsum doloe sit amet, consectetur adipiscing
    </IcTypography>
  </IcSectionContainer>
);

const ConditionalTabsExample = () => {
  const [showTabs, setShowTabs] = useState(false);
  return (
    <>
      <IcTopNavigation
        appTitle="ApplicationName"
        status="alpha"
        version="v0.0.7"
      >
        <svg
          slot="app-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
        </svg>
        <IcNavigationItem
          label="One"
          href="/"
          selected="true"
          slot="navigation"
        />
        <IcNavigationItem label="Two" href="/" slot="navigation" />
        <IcNavigationItem label="Three" href="/" slot="navigation" />
        {showTabs && (
          <>
            <IcNavigationItem label="Four" href="/" slot="navigation" />
            <IcNavigationItem label="Five" href="/" slot="navigation" />
          </>
        )}
      </IcTopNavigation>
      <IcButton onClick={() => setShowTabs(!showTabs)}>Show/Hide tabs</IcButton>
    </>
  );
};

const defaultArgs = {
  appTitle: "Application Name",
  contentAligned: "full-width",
  customMobileBreakpoint: 992,
  href: "/",
  inline: false,
  shortAppTitle: "App Name",
  status: "alpha",
  version: "0.0.1",
  appIconSlot: "app-icon",
  searchSlot: "search",
  buttonsSlot: "buttons",
};

export default {
  title: "Top navigation",
  component: IcTopNavigation,
};

export const AppIconAndTitle = {
  render: () => (
    <IcTopNavigation appTitle="ApplicationName">
      <svg
        slot="app-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
      </svg>
    </IcTopNavigation>
  ),

  name: "App icon and title",

  parameters: {
    layout: "fullscreen",
  },
};

export const StatusAndVersion = {
  render: () => (
    <IcTopNavigation appTitle="ApplicationName" status="alpha" version="v0.0.7">
      <svg
        slot="app-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
      </svg>
    </IcTopNavigation>
  ),

  name: "Status and version",

  parameters: {
    layout: "fullscreen",
  },
};

export const WithSearch = {
  render: () => (
    <IcTopNavigation appTitle="ApplicationName" status="alpha" version="v0.0.7">
      <svg
        slot="app-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
      </svg>
      <IcSearchBar slot="search" placeholder="Search" label="Search" />
    </IcTopNavigation>
  ),

  name: "With search",

  parameters: {
    layout: "fullscreen",
  },
};

export const WithIcons = {
  render: () => (
    <IcTopNavigation appTitle="ApplicationName" status="alpha" version="v0.0.7">
      <svg
        slot="app-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
      </svg>
      <IcSearchBar slot="search" placeholder="Search" label="Search" />
      <IcNavigationButton
        label="Button One"
        slot="buttons"
        onClick={() => alert("test")}
      >
        <IcBadge label="1" slot="badge" customColor="#d4351c" variant="custom" theme="dark"/>
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
        </svg>
      </IcNavigationButton>
      <IcNavigationButton
        label="Button Two"
        slot="buttons"
        href="https://www.google.com"
        target="_blank"
      >
        <IcBadge slot="badge" customColor="#d4351c" variant="custom" type="dot" theme="dark"/>
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z" />
        </svg>
      </IcNavigationButton>
      <IcNavigationButton
        label="Button Three"
        slot="buttons"
        onClick={() => alert("test")}
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
        </svg>
      </IcNavigationButton>
    </IcTopNavigation>
  ),

  name: "With icons",

  parameters: {
    layout: "fullscreen",
  },
};

export const LongAppTitle = {
  render: () => (
    <IcTopNavigation
      appTitle="Application with a long name"
      status="alpha"
      version="v0.0.7"
    >
      <svg
        slot="app-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
      </svg>
      <IcSearchBar slot="search" placeholder="Search" label="Search" />
      <IcNavigationButton
        label="Button One"
        slot="buttons"
        onClick={() => alert("test")}
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
        </svg>
      </IcNavigationButton>
    </IcTopNavigation>
  ),

  name: "Long app title",

  parameters: {
    layout: "fullscreen",
  },
};

export const WithNavigation = {
  render: () => (
    <IcTopNavigation appTitle="ApplicationName" status="alpha" version="v0.0.7">
      <svg
        slot="app-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
      </svg>
      <IcSearchBar slot="search" placeholder="Search" label="Search" />
      <IcNavigationButton
        label="Button One"
        slot="buttons"
        onClick={() => alert("test")}
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
        </svg>
      </IcNavigationButton>
      <IcNavigationItem label="One" href="/" slot="navigation" />
      <IcNavigationItem label="Two" href="/" slot="navigation" />
      <IcNavigationItem label="Three" href="/" slot="navigation" />
      <IcNavigationItem
        label="Four"
        href="/"
        selected="true"
        slot="navigation"
      />
      <IcNavigationItem label="Five" href="/" slot="navigation" />
    </IcTopNavigation>
  ),

  name: "With navigation",

  parameters: {
    layout: "fullscreen",
  },
};

export const WithGroupNavigation = {
  render: () => (
    <IcTopNavigation appTitle="ApplicationName" status="alpha" version="v0.0.7">
      <svg
        slot="app-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
      </svg>
      <IcSearchBar slot="search" placeholder="Search" label="Search" />
      <IcNavigationButton
        label="Button One"
        slot="buttons"
        onClick={() => alert("test")}
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
        </svg>
      </IcNavigationButton>
      <IcNavigationGroup
        label="Navigation Group"
        expandable="true"
        slot="navigation"
      >
        <IcNavigationItem label="One" href="/" />
        <IcNavigationItem label="Two" href="/" />
        <IcNavigationItem label="Three" href="/" />
        <IcNavigationItem label="Four" href="/" />
      </IcNavigationGroup>
      <IcNavigationGroup
        label="Second Nav Group"
        expandable="true"
        slot="navigation"
      >
        <IcNavigationItem label="One" href="/" />
        <IcNavigationItem label="Two" href="/" />
        <IcNavigationItem label="Three" href="/" />
        <IcNavigationItem label="Four" href="/" />
        <IcNavigationItem label="Five" href="/" selected="true" />
        <IcNavigationItem label="Six" href="/" />
        <IcNavigationItem label="Seven" href="/" />
        <IcNavigationItem label="Eight" href="/" />
      </IcNavigationGroup>
    </IcTopNavigation>
  ),

  name: "With group navigation",

  parameters: {
    layout: "fullscreen",
  },
};

export const TopNavResizedEvent = {
  render: () => (
    <IcTopNavigation
      appTitle="ApplicationName"
      onTopNavResized={() => console.log(event.detail.size)}
    >
      <svg
        slot="app-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
      </svg>
    </IcTopNavigation>
  ),

  name: "Top nav resized event",

  parameters: {
    layout: "fullscreen",
  },
};

export const Theming = {
  render: () => (
    <>
      <Controlled />
    <IcTopNavigation appTitle="ApplicationName" status="alpha" version="v0.0.7">
      <svg
        slot="app-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
      </svg>
      <IcSearchBar slot="search" placeholder="Search" label="Search" />
      <IcNavigationButton
        label="Button One"
        slot="buttons"
        onClick={() => alert("test")}
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
        </svg>
      </IcNavigationButton>
      <IcNavigationItem label="One" href="/" slot="navigation" />
      <IcNavigationItem label="Two" href="/" slot="navigation" />
      <IcNavigationItem label="Three" href="/" slot="navigation" />
      <IcNavigationItem
        label="Four"
        href="/"
        selected="true"
        slot="navigation"
      />
      <IcNavigationItem label="Five" href="/" slot="navigation" />
      <IcNavigationItem label="Six" href="/" slot="navigation" />
      <IcNavigationItem label="Seven" href="/" slot="navigation" />
      <IcNavigationItem label="Eight" href="/" slot="navigation" />
      <IcNavigationItem label="Nine" href="/" slot="navigation" />
      <IcNavigationItem label="Ten" href="/" slot="navigation" />
      <IcNavigationItem label="Eleven" href="/" slot="navigation" />
    </IcTopNavigation>
    </>
  ),
  name: "Theming",

  parameters: {
    layout: "fullscreen",
  },
};

export const WithReactRouter = {
  render: () => (
    <>
      <IcTopNavigation status="alpha" version="v0.0.7">
      <NavLink to="/" slot="app-title">
        ApplicationName
      </NavLink>
      <svg
        slot="app-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
      </svg>
      <IcSearchBar slot="search" placeholder="Search" label="Search" />
      <IcNavigationButton
        label="Button One"
        slot="buttons"
        onClick={() => alert("test")}
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
        </svg>
      </IcNavigationButton>
      <IcNavigationItem slot="navigation">
        <NavLink to="/" slot="navigation-item">
          Home
        </NavLink>
      </IcNavigationItem>
      <IcNavigationItem slot="navigation">
        <NavLink to="/daily-tippers" slot="navigation-item">
          Daily Tippers
        </NavLink>
      </IcNavigationItem>
    </IcTopNavigation>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/daily-tippers" element={<DailyTippers />} />
    </Routes>
    </>
  ),

  name: "With React Router",

  parameters: {
    layout: "fullscreen",
  },

  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const WithReactRouterGrouped = {
  render: () => (
    <>
       <IcTopNavigation appTitle="ApplicationName" status="alpha" version="v0.0.7">
      <svg
        slot="app-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
      </svg>
      <IcSearchBar slot="search" placeholder="Search" label="Search" />
      <IcNavigationButton
        label="Button One"
        slot="buttons"
        onClick={() => alert("test")}
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
        </svg>
      </IcNavigationButton>
      <IcNavigationGroup label="Navigation Grouped" slot="navigation">
        <IcNavigationItem>
          <NavLink to="/" slot="navigation-item">
            Home
          </NavLink>
        </IcNavigationItem>
        <IcNavigationItem>
          <NavLink to="/daily-tippers" slot="navigation-item">
            Daily Tippers
          </NavLink>
        </IcNavigationItem>
      </IcNavigationGroup>
    </IcTopNavigation>
    <Routes>
      <Route path="/" element={<HomePageGrouped />} />
      <Route path="/daily-tippers" element={<DailyTippersGrouped />} />
    </Routes>
    </>
  ),

  name: "With React Router - grouped",

  parameters: {
    layout: "fullscreen",
  },

  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const LongSingleWordAppTitle = {
  render: () => (
    <IcTopNavigation
      appTitle="Applicationwithareallyreallylongsinglewordname"
      status="alpha"
      version="v0.0.7"
    >
      <svg
        slot="app-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
      </svg>
      <IcSearchBar slot="search" placeholder="Search" label="Search" />
      <IcNavigationButton
        label="Button One"
        slot="buttons"
        onClick={() => alert("test")}
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
        </svg>
      </IcNavigationButton>
    </IcTopNavigation>
  ),

  name: "Long single-word app title",

  parameters: {
    layout: "fullscreen",
  },
};

export const ShortTitle = {
  render: () => (
    <IcTopNavigation appTitle="Application Name" shortAppTitle="App Name">
      <svg
        slot="app-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
      </svg>
    </IcTopNavigation>
  ),

  name: "Short title",

  parameters: {
    layout: "fullscreen",
  },
};

export const SlottedTitleLink = {
  render: () => (
    <IcTopNavigation>
      <a slot="app-title" href="/">
        Application Name
      </a>
      <a slot="short-app-title" href="/">
        App name
      </a>
      <a slot="app-icon" href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="inherit"
          viewBox="0 0 24 24"
          width="inherit"
          fill="inherit"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
        </svg>
      </a>
    </IcTopNavigation>
  </Story>
</Canvas>

### Conditional tabs

export const ConditionalTabsExample = () => {
  const [showTabs, setShowTabs] = useState(false);
  return (
    <>
      <IcTopNavigation appTitle="ApplicationName" status="alpha" version="v0.0.7">
        <svg
          slot="app-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
        </svg>
        <IcNavigationItem 
          label="One"
          href="/"
          selected="true"
          slot="navigation"
        />
        <IcNavigationItem label="Two" href="/" slot="navigation" />
        <IcNavigationItem label="Three" href="/" slot="navigation" />
        {showTabs && (
          <>
            <IcNavigationItem label="Four" href="/" slot="navigation" />
            <IcNavigationItem label="Five" href="/" slot="navigation" />
          </>
        )}
      </IcTopNavigation>
      <IcButton onClick={() => setShowTabs(!showTabs)}>Show/Hide tabs</IcButton>
    </>
  );
}

<Canvas>
  <Story name="Conditional tabs" parameters={{ layout: "fullscreen" }}>
    <ConditionalTabsExample />
  </Story>
</Canvas>

### Playground

export const defaultArgs = {
  appTitle: "Application Name",
  contentAligned: "full-width",
  customMobileBreakpoint: 992,
  href: "/",
  inline: false,
  shortAppTitle: "App Name",
  status: "alpha",
  version: "0.0.1",
  appIconSlot: "app-icon",
  searchSlot: "search",
  buttonsSlot: "buttons",
  theme: "inherit",
};

<Canvas>
  <Story
    args={defaultArgs}
    argTypes={{
      contentAligned: {
        options: [
          "full-width",
          "left",
          "center",
        ],
        control: { type: "select" },
      },
      customMobileBreakpoint: {
        options: [
          0,
          576,
          768,
          992,
          1200,
        ],
        control: { type: "select" },
      },
      appIconSlot: {
        options: [
          "app-icon",
          ""
        ],
        control: { type: "select" },
      },
      searchSlot: {
        options: [
          "search",
          ""
        ],
        control: { type: "select" },
      },
      buttonsSlot: {
        options: [
          "buttons",
          ""
        ],
        control: { type: "select" },
      },
      theme: {
        options: ["inherit", "light", "dark"],
        control: { type: "select" },
      }
    }}
    name="Playground"
  >
    {(args) => (
      <IcTopNavigation
        appTitle={args.appTitle}
        contentAligned={args.contentAligned}
        customMobileBreakpoint={args.customMobileBreakpoint}
        href={args.href}
        inline={args.inline}
        shortAppTitle={args.shortAppTitle}
        status={args.status}
        version={args.version}
      >
        <svg
          slot={args.appIconSlot}
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
          />
        </svg>
        <IcSearchBar
            slot={args.searchSlot}
            placeholder="Search"
            label="Search"
          ></IcSearchBar>
        <IcNavigationButton
          label="Button One"
          slot={args.buttonsSlot}
          href="https://www.google.com"
          target="_blank"
          title="Google 1"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
            />
          </svg>
          <IcBadge
            label="1"
            slot="badge"
            customColor="#d4351c"
            variant="custom"
            theme="dark"
          ></IcBadge>
        </IcNavigationButton>
        <IcNavigationButton
          label="Button Two"
          slot={args.buttonsSlot}
          href="https://www.google.com"
          target="_blank"
          title="Google 2"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"
            />
          </svg>
          <IcBadge
            slot="badge"
            customColor="#d4351c"
            variant="custom"
            type="dot"
            theme="dark"
          ></IcBadge>
        </IcNavigationButton>
        <IcNavigationButton
          label="Button Three"
          slot={args.buttonsSlot}
          onclick="alert('test')"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
            />
          </svg>
        </IcNavigationButton>
        <IcNavigationGroup slot="navigation" label="Navigation group">
          <IcNavigationItem label="Another One" href="/"></IcNavigationItem>
          <IcNavigationItem label="Another Two" href="/"></IcNavigationItem>
          <IcNavigationItem
            label="Another Three"
            href="/"
          ></IcNavigationItem>
          <IcNavigationItem
            label="Another Four"
            href="/"
          ></IcNavigationItem>
          <IcNavigationItem
            label="Another Five"
            href="/"
          ></IcNavigationItem>
          <IcNavigationItem label="Another Six" href="/"></IcNavigationItem>
          <IcNavigationItem
            label="Another Seven"
            href="/"
          ></IcNavigationItem>
          <IcNavigationItem
            label="Another Eight"
            href="/"
          ></IcNavigationItem>
        </IcNavigationGroup>
        <IcNavigationItem
          slot="navigation"
          label="Two thousand five hundred and sixty three"
          href="/"
        ></IcNavigationItem>
        <IcNavigationItem
          slot="navigation"
          label="Three"
          href="/"
          target="_blank"
        ></IcNavigationItem>
        <IcNavigationItem
          slot="navigation"
          label="Four"
          href="/"
          selected="true"
        ></IcNavigationItem>
      </IcTopNavigation>
    )}
  </Story>
</Canvas>