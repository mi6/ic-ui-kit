/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import {
  IcBreadcrumbGroup,
  IcBreadcrumb,
  IcLink,
  IcTypography,
  IcSectionContainer,
} from "../components";

import {
  NavLink,
  MemoryRouter,
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";

const HomePage = () => {
  return (
    <IcSectionContainer>
      <IcTypography variant="h1">Hi there!</IcTypography>
      <IcTypography>
        This example is demonstrating the breadcrumb and breadcrumb group
        components with React Router
      </IcTypography>
    </IcSectionContainer>
  );
};

const DailyTippers = () => (
  <IcSectionContainer>
    <IcTypography variant="h1">Daily tippers</IcTypography>
    <IcTypography>
      Lorem ipsum doloe sit amet, consectetur adipiscing
    </IcTypography>
  </IcSectionContainer>
);

const About = () => (
  <IcSectionContainer>
    <IcTypography variant="h1">About</IcTypography>
    <IcTypography>
      Lorem ipsum doloe sit amet, consectetur adipiscing
    </IcTypography>
  </IcSectionContainer>
);

const Breadcrumbs = () => {
  const location = useLocation();
  return (
    <IcBreadcrumbGroup>
      <IcBreadcrumb pageTitle="Home" current={location.pathname === "/"}>
        <IcLink>
          <NavLink to="/" slot="router-item">
            Home
          </NavLink>
        </IcLink>
      </IcBreadcrumb>
      <IcBreadcrumb
        pageTitle="Daily Tippers"
        current={location.pathname === "/daily-tippers"}
      >
        <IcLink>
          <NavLink to="/daily-tippers" slot="router-item">
            Daily Tippers
          </NavLink>
        </IcLink>
      </IcBreadcrumb>
      <IcBreadcrumb pageTitle="About" current={location.pathname === "/about"}>
        <IcLink>
          <NavLink to="/about" slot="router-item">
            About
          </NavLink>
        </IcLink>
      </IcBreadcrumb>
    </IcBreadcrumbGroup>
  );
};

const defaultArgs = {
  appearance: "default",
  backBreadcrumbOnly: false,
  collapsed: false,
  current: false,
  href: "/",
  pageTitle: "Home",
  iconSlot: true,
};

export default {
  title: "Breadcrumb",
  component: IcBreadcrumbGroup,
};

export const Default = {
  render: () => (
    <div>
      <IcBreadcrumbGroup>
        <IcBreadcrumb pageTitle="foo" href="/foo" />
        <IcBreadcrumb pageTitle="bar" href="/bar" />
        <IcBreadcrumb pageTitle="baz" href="/baz" current />
      </IcBreadcrumbGroup>
    </div>
  ),

  name: "Default",
};

export const SlottedLinks = {
  render: () => (
    <div>
      <IcBreadcrumbGroup>
        <IcBreadcrumb>
          <IcLink>
            <a slot="router-item" href="/foo">
              Foo
            </a>
          </IcLink>
        </IcBreadcrumb>
        <IcBreadcrumb>
          <IcLink>
            <a slot="router-item" href="/bar">
              Bar
            </a>
          </IcLink>
        </IcBreadcrumb>
        <IcBreadcrumb current>
          <IcLink>
            <a slot="router-item" href="/baz">
              Baz
            </a>
          </IcLink>
        </IcBreadcrumb>
      </IcBreadcrumbGroup>
    </div>
  ),

  name: "Slotted links",
};

export const Back = {
  render: () => (
    <div>
      <IcBreadcrumbGroup backBreadcrumbOnly>
        <IcBreadcrumb pageTitle="foo" href="/foo" />
        <IcBreadcrumb pageTitle="bar" href="/bar" />
        <IcBreadcrumb pageTitle="baz" href="/baz" current />
      </IcBreadcrumbGroup>
    </div>
  ),

  name: "Back",
};

export const Appearance = {
  render: () => (
    <>
      <IcBreadcrumbGroup>
      <IcBreadcrumb pageTitle="Breadcrumb 1" href="/breadcrumb-1">
        <svg
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
          ></path>
        </svg>
      </IcBreadcrumb>
      <IcBreadcrumb pageTitle="Breadcrumb 2" current="true" href="/">
        <svg
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
          ></path>
        </svg>
      </IcBreadcrumb>
    </IcBreadcrumbGroup>
    <IcBreadcrumbGroup backBreadcrumbOnly="true">
      <IcBreadcrumb
        pageTitle="Breadcrumb 1"
        href="/breadcrumb-1"
      ></IcBreadcrumb>
      <IcBreadcrumb
        current="true"
        pageTitle="Breadcrumb 2"
        href="/breadcrumb-2"
      ></IcBreadcrumb>
    </IcBreadcrumbGroup>
    <IcBreadcrumbGroup appearance="dark">
      <IcBreadcrumb pageTitle="Breadcrumb 1" href="/breadcrumb-1">
        <svg
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
          ></path>
        </svg>
      </IcBreadcrumb>
      <IcBreadcrumb pageTitle="Breadcrumb 2" current="true" href="/">
        <svg
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
          ></path>
        </svg>
      </IcBreadcrumb>
    </IcBreadcrumbGroup>
    <IcBreadcrumbGroup appearance="dark" backBreadcrumbOnly="true">
      <IcBreadcrumb
        pageTitle="Breadcrumb 1"
        href="/breadcrumb-1"
      ></IcBreadcrumb>
      <IcBreadcrumb
        current="true"
        pageTitle="Breadcrumb 2"
        href="/breadcrumb-2"
      ></IcBreadcrumb>
    </IcBreadcrumbGroup>
    <div style={{ backgroundColor: "black", width: "fit-content" }}>
      <IcBreadcrumbGroup appearance="light">
        <IcBreadcrumb pageTitle="Breadcrumb 1" href="/breadcrumb-1">
          <svg
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
            ></path>
          </svg>
        </IcBreadcrumb>
        <IcBreadcrumb pageTitle="Breadcrumb 2" current="true" href="/">
          <svg
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
            ></path>
          </svg>
        </IcBreadcrumb>
      </IcBreadcrumbGroup>
    </div>
    <div style={{ backgroundColor: "black", width: "fit-content" }}>
      <IcBreadcrumbGroup appearance="light" backBreadcrumbOnly="true">
        <IcBreadcrumb
          pageTitle="Breadcrumb 1"
          href="/breadcrumb-1"
        ></IcBreadcrumb>
        <IcBreadcrumb
          current="true"
          pageTitle="Breadcrumb 2"
          href="/breadcrumb-2"
        ></IcBreadcrumb>
      </IcBreadcrumbGroup>
    </div>
    </>
  ),

  name: "Appearance",
};

export const Icon = {
  render: () => (
    <div>
      <IcBreadcrumbGroup>
        <IcBreadcrumb pageTitle="foo" href="/foo">
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
        </IcBreadcrumb>
        <IcBreadcrumb pageTitle="bar" href="/bar">
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
        </IcBreadcrumb>
        <IcBreadcrumb pageTitle="baz" href="/baz" current>
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
        </IcBreadcrumb>
      </IcBreadcrumbGroup>
    </div>
  ),

  name: "Icon",
};

export const Collapsed = {
  render: () => (
    <div>
      <IcBreadcrumbGroup collapsed>
        <IcBreadcrumb pageTitle="foo" href="/foo" />
        <IcBreadcrumb pageTitle="bar" href="/bar" />
        <IcBreadcrumb pageTitle="baz" href="/baz" />
        <IcBreadcrumb pageTitle="qux" href="/qux" />
        <IcBreadcrumb pageTitle="quxx" href="/quxx" current />
      </IcBreadcrumbGroup>
    </div>
  ),

  name: "Collapsed",
};

export const ReactRouter = {
  render: () => (
    <div>
      <Breadcrumbs />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/daily-tippers" element={<DailyTippers />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "16px",
        }}
      >
        <IcTypography>
          Click the links to switch pages and update breadcrumb states:
        </IcTypography>
        <IcLink>
          <Link slot="router-item" to="/">
            Home
          </Link>
        </IcLink>
        <IcLink>
          <Link slot="router-item" to="/daily-tippers">
            Daily Tippers
          </Link>
        </IcLink>
        <IcLink>
          <Link slot="router-item" to="/about">
            About
          </Link>
        </IcLink>
      </div>
    </div>
  ),

  name: "React Router",

  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Playground = {
  render: (args) => (
    <div
      style={{
        backgroundColor: args.appearance == "light" ? "black" : null,
        width: "fit-content",
      }}
    >
      <IcBreadcrumbGroup
        appearance={args.appearance}
        backBreadcrumbOnly={args.backBreadcrumbOnly}
        collapsed={args.collapsed}
      >
        <IcBreadcrumb
          current={args.current}
          pageTitle={args.pageTitle}
          href={args.href}
        >
          <svg
            slot={args.iconSlot}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </IcBreadcrumb>
        <IcBreadcrumb pageTitle="Breadcrumb 2" href="/breadcrumb-2" />
        <IcBreadcrumb pageTitle="Breadcrumb 3" href="/breadcrumb-3" />
      </IcBreadcrumbGroup>
    </div>
  ),

  args: defaultArgs,

  argTypes: {
    appearance: {
      options: ["default", "dark", "light"],

      control: {
        type: "radio",
      },
    },

    iconSlot: {
      mapping: {
        true: "icon",
        false: "",
      },
    },
  },

  name: "Playground",
};
