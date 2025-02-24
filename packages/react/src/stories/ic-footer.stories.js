/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-no-bind */
import {
  IcFooter,
  IcFooterLink,
  IcFooterLinkGroup,
  IcClassificationBanner,
  IcSectionContainer,
  IcTypography,
  IcButton,
  IcTheme,
} from "../components";
import React, { useState } from "react";
import { NavLink, MemoryRouter, Route, Routes } from "react-router-dom";

const defaultArgs = {
  aligned: "left",
  breakpoint: "medium",
  caption:
    "All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence.",
  copyright: true,
  description:
    "The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, please get in touch.",
  groupLinks: true,
};

const HomePage = () => (
  <IcSectionContainer>
    <IcTypography variant="h1">Hi there!</IcTypography>
    <IcTypography>
      This example is demonstrating the Footer component with React Router
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

export default {
  title: "Footer",
  component: "IcFooter",
};

export const Playground = {
  render: (args) => (
    <IcFooter
      aligned={args.aligned}
      breakpoint={args.breakpoint}
      caption={args.caption}
      copyright={args.copyright}
      description={args.description}
      groupLinks={args.groupLinks}
    >
      <IcFooterLinkGroup slot="link" groupTitle="Links 1">
        <IcFooterLink href="/">Get Started</IcFooterLink>
        <IcFooterLink href="/">Accessibility</IcFooterLink>
        <IcFooterLink href="/">Styles</IcFooterLink>
      </IcFooterLinkGroup>
      <IcFooterLinkGroup slot="link" groupTitle="Links 2">
        <IcFooterLink href="/">Get Started</IcFooterLink>
        <IcFooterLink href="/">Accessibility</IcFooterLink>
        <IcFooterLink href="/">Styles</IcFooterLink>
      </IcFooterLinkGroup>
      <IcFooterLinkGroup slot="link" groupTitle="Links 3">
        <IcFooterLink href="/">Get Started</IcFooterLink>
        <IcFooterLink href="/">Accessibility</IcFooterLink>
        <IcFooterLink href="/">Styles</IcFooterLink>
      </IcFooterLinkGroup>
      <div
        slot="logo"
        style={{
          width: "100px",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--ic-theme-primary)",
          color: "var(--ic-theme-text)",
        }}
      >
        Logo
      </div>
    </IcFooter>
  ),

  args: defaultArgs,
  name: "Playground",

  argTypes: {
    aligned: {
      options: ["center", "full-width", "left"],

      control: {
        type: "select",
      },
    },

    breakpoint: {
      options: ["extra large", "extra small", "large", "medium", "small"],

      control: {
        type: "select",
      },
    },
  },
};

export const UngroupedLinks = {
  render: () => (
    <IcFooter
      description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, \nplease get in touch."
      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
    >
      <IcFooterLink slot="link" href="/">
        Get Started
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Accessibility
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Styles
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Components
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Patterns
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Design toolkit
      </IcFooterLink>
      <div
        slot="logo"
        style={{
          width: "100px",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--ic-theme-primary)",
          color: "var(--ic-theme-text)",
        }}
      >
        Logo
      </div>
    </IcFooter>
  ),

  name: "Ungrouped links",
};

export const GroupedLinks = {
  render: () => (
    <IcFooter
      group-links
      description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, \nplease get in touch."
      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
    >
      <IcFooterLinkGroup slot="link" groupTitle="Links 1">
        <IcFooterLink href="/">Get Started</IcFooterLink>
        <IcFooterLink href="/">Accessibility</IcFooterLink>
        <IcFooterLink href="/">Styles</IcFooterLink>
        <IcFooterLink href="/">Components</IcFooterLink>
        <IcFooterLink href="/">Patterns</IcFooterLink>
        <IcFooterLink href="/">Design toolkit</IcFooterLink>
      </IcFooterLinkGroup>
      <IcFooterLinkGroup slot="link" groupTitle="Links 2">
        <IcFooterLink href="/">Get Started</IcFooterLink>
        <IcFooterLink href="/">Accessibility</IcFooterLink>
        <IcFooterLink href="/">Styles</IcFooterLink>
        <IcFooterLink href="/">Components</IcFooterLink>
        <IcFooterLink href="/">Patterns</IcFooterLink>
        <IcFooterLink href="/">Design toolkit</IcFooterLink>
      </IcFooterLinkGroup>
      <IcFooterLinkGroup slot="link" groupTitle="Links 3">
        <IcFooterLink href="/">Get Started</IcFooterLink>
        <IcFooterLink href="/">Accessibility</IcFooterLink>
        <IcFooterLink href="/">Styles</IcFooterLink>
        <IcFooterLink href="/">Components</IcFooterLink>
        <IcFooterLink href="/">Patterns</IcFooterLink>
        <IcFooterLink href="/">Design toolkit</IcFooterLink>
      </IcFooterLinkGroup>
      <div
        slot="logo"
        style={{
          width: "100px",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--ic-theme-primary)",
          color: "var(--ic-theme-text)",
        }}
      >
        Logo
      </div>
    </IcFooter>
  ),

  name: "Grouped links",
};

export const WithClassificationBanner = {
  render: () => (
    <>
      <IcClassificationBanner classification="official" />
    <IcFooter
      aligned="full-width"
      description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
      style={{ position: "fixed", bottom: "0", left: "0", right: "0" }}
    >
      <IcFooterLink slot="link" href="/">
        Get Started
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Accessibility
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Styles
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Components
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Patterns
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Design toolkit
      </IcFooterLink>
      <div
        slot="logo"
        style={{
          width: "100px",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--ic-theme-primary)",
          color: "var(--ic-theme-text)",
        }}
      >
        Logo
      </div>
      <div
        slot="logo"
        style={{
          width: "100px",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--ic-theme-primary)",
          color: "var(--ic-theme-text)",
        }}
      >
        Logo
      </div>
      <div
        slot="logo"
        style={{
          width: "100px",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--ic-theme-primary)",
          color: "var(--ic-theme-text)",
        }}
      >
        Logo
      </div>
    </IcFooter>
    </>
  ),
  name: "With classification banner",
};

export const WithReactRouter = {
  render: () => (
    <>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/daily-tippers" element={<DailyTippers />} />
    </Routes>
    <IcFooter
      description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
        please get in touch."
      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
      style={{ bottom: "0", left: "0", right: "0" }}
    >
      <IcFooterLink slot="link">
        <NavLink to="/" style={{ color: "var(--ic-theme-text)" }}>
          Home
        </NavLink>
      </IcFooterLink>
      <IcFooterLink slot="link">
        <NavLink to="/daily-tippers" style={{ color: "var(--ic-theme-text)" }}>
          Daily Tippers
        </NavLink>
      </IcFooterLink>
      <div
        slot="logo"
        style={{
          width: "100px",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--ic-theme-primary)",
          color: "var(--ic-theme-text)",
        }}
      >
        Logo
      </div>
    </IcFooter>
    </>
  ),

  name: "With React Router",

  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Theming = {
  render: () => (
    <>
      <Controlled />
    <IcFooter
      aligned="full-width"
      group-links
      description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
        please get in touch."
      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
      style={{ position: "fixed", bottom: "0", left: "0", right: "0" }}
    >
      <IcFooterLinkGroup slot="link" groupTitle="Links 1">
        <IcFooterLink href="/">Get Started</IcFooterLink>
        <IcFooterLink href="/">Accessibility</IcFooterLink>
        <IcFooterLink href="/">Styles</IcFooterLink>
        <IcFooterLink href="/">Components</IcFooterLink>
        <IcFooterLink href="/">Patterns</IcFooterLink>
        <IcFooterLink href="/">Design toolkit</IcFooterLink>
      </IcFooterLinkGroup>
      <IcFooterLinkGroup slot="link" groupTitle="Links 2">
        <IcFooterLink href="/">Get Started</IcFooterLink>
        <IcFooterLink href="/">Accessibility</IcFooterLink>
        <IcFooterLink href="/">Styles</IcFooterLink>
        <IcFooterLink href="/">Components</IcFooterLink>
        <IcFooterLink href="/">Patterns</IcFooterLink>
        <IcFooterLink href="/">Design toolkit</IcFooterLink>
      </IcFooterLinkGroup>
      <IcFooterLinkGroup slot="link" groupTitle="Links 3">
        <IcFooterLink href="/">Get Started</IcFooterLink>
        <IcFooterLink href="/">Accessibility</IcFooterLink>
        <IcFooterLink href="/">Styles</IcFooterLink>
        <IcFooterLink href="/">Components</IcFooterLink>
        <IcFooterLink href="/">Patterns</IcFooterLink>
        <IcFooterLink href="/">Design toolkit</IcFooterLink>
      </IcFooterLinkGroup>
      <div
        slot="logo"
        style={{
          width: "100px",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--ic-theme-primary)",
          color: "var(--ic-theme-text)",
        }}
      >
        Logo
      </div>
      <div
        slot="logo"
        style={{
          width: "100px",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--ic-theme-primary)",
          color: "var(--ic-theme-text)",
        }}
      >
        Logo
      </div>
      <div
        slot="logo"
        style={{
          width: "100px",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--ic-theme-primary)",
          color: "var(--ic-theme-text)",
        }}
      >
        Logo
      </div>
    </IcFooter>
    </>
  ),
  name: "Theming",
};

export const WithLogoLinks = {
  render: () => (
    <IcFooter
      description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, \nplease get in touch."
      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
    >
      <IcFooterLink slot="link" href="/">
        Get Started
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Accessibility
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Styles
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Components
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Patterns
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Design toolkit
      </IcFooterLink>
      <div
        slot="logo"
        style={{
          display: "flex",
          gap: "var(--ic-space-lg)",
        }}
      >
        <IcFooterLink href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 0 24 24"
            width="48px"
            fill="#FFFFFF"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z" />
          </svg>
        </IcFooterLink>
        <IcFooterLink href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 0 24 24"
            width="48px"
            fill="#FFFFFF"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z" />
          </svg>
        </IcFooterLink>
        <IcFooterLink href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 0 24 24"
            width="48px"
            fill="#FFFFFF"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z" />
          </svg>
        </IcFooterLink>
      </div>
    </IcFooter>
  ),

  name: "With logo links",
};

export const FooterWithNoCaptionOrLogoOrCopyright = {
  render: () => (
    <IcFooter
      description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, \nplease get in touch."
      copyright={false}
    >
      <IcFooterLink slot="link" href="/">
        Get Started
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Accessibility
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Styles
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Components
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Patterns
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Design toolkit
      </IcFooterLink>
    </IcFooter>
  ),

  name: "Footer with no caption or logo or copyright",
};

export const FooterWithNoLinks = {
  render: () => (
    <IcFooter
      description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, \nplease get in touch."
      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
    />
  ),

  name: "Footer with no links",
};

export const Breakpoint = {
  render: () => (
    <IcFooter
      description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, \nplease get in touch."
      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
      breakpoint="extra large"
    >
      <IcFooterLink slot="link" href="/">
        Get Started
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Accessibility
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Styles
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Components
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Patterns
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Design toolkit
      </IcFooterLink>
      <div
        slot="logo"
        style={{
          display: "flex",
          gap: "var(--ic-space-lg)",
        }}
      >
        <IcFooterLink href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 0 24 24"
            width="48px"
            fill="#FFFFFF"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z" />
          </svg>
        </IcFooterLink>
        <IcFooterLink href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 0 24 24"
            width="48px"
            fill="#FFFFFF"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z" />
          </svg>
        </IcFooterLink>
        <IcFooterLink href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 0 24 24"
            width="48px"
            fill="#FFFFFF"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z" />
          </svg>
        </IcFooterLink>
      </div>
    </IcFooter>
  ),

  name: "Breakpoint",
};

export const SlottedDescriptionAndCaption = {
  render: () => (
    <IcFooter>
      <IcTypography slot="description">
        The ICDS is maintained by the Design Practice Team. If you've got a
        question or want to feedback, please get in touch.
      </IcTypography>
      <IcTypography slot="caption">
        All content is available under the Open Government Licence v3.0, except
        source code and code examples which are available under the MIT Licence.
      </IcTypography>
    </IcFooter>
  ),

  name: "Slotted description and caption",
};
