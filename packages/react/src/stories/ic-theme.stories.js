/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from "react";
import {
  IcFooter,
  IcFooterLink,
  IcButton,
  IcTopNavigation,
  IcNavigationItem,
  IcNavigationButton,
  IcTheme,
  IcSearchBar,
  IcTypography,
  IcHero,
  IcAlert,
} from "../components";

const Controlled = () => {
  const [color, setColour] = useState("rgb(255, 201, 60)");
  const defaultButtonClickHandler = () => {
    setColour("rgb(27, 60, 121)");
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
        Sunset theme
      </IcButton>
    </>
  );
};

export default {
  title: "Theme",
  component: "IcTheme",
};

export const SwitchTheme = {
  render: () => (
    <>
      <Controlled />
    <div>
      <br />
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
        <IcSearchBar slot="search" placeholder="Search" label="Search" />
        <IcNavigationButton
          label="button1"
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
        <IcNavigationItem label="Navigation" href="/" slot="navigation" />
        <IcNavigationItem label="Navigation" href="/" slot="navigation" />
        <IcNavigationItem label="Navigation" href="/" slot="navigation" />
        <IcNavigationItem
          label="Navigation"
          href="/"
          selected="true"
          slot="navigation"
        />
        <IcNavigationItem label="Navigation" href="/" slot="navigation" />
      </IcTopNavigation>
      <IcHero
        heading="Hero heading"
        subheading="Hero description. This is a Hero component, it should be used as a page heading."
        secondary-heading="Secondary Heading"
        secondary-subheading="This is a secondary description."
        full-width
      >
        <div slot="interaction" style={{ display: "flex" }}>
          <ic-text-field
            placeholder="Filter display"
            label="Filter display"
            hide-label
          ></ic-text-field>
          <IcButton variant="primary" style={{ marginLeft: 16 }}>
            Filter
          </IcButton>
        </div>
        <IcButton variant="secondary" slot="interaction">
          See all
        </IcButton>
        <ic-link
          href="https://google.com"
          slot="interaction"
          style={{ marginTop: 10 }}
        >
          Help
        </ic-link>
      </IcHero>
      <IcAlert
        heading="This alert uses a custom message slot"
        dismissible="true"
      >
        <IcButton slot="action" variant="secondary">
          Button
        </IcButton>
        <IcTypography variant="body" slot="message">
          <p>
            This is some text and
            <ic-link href="/"> this is an inline link ic-link</ic-link>
            within the text
          </p>
        </IcTypography>
      </IcAlert>
      <IcFooter
        align="full-width"
        description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
            please get in touch."
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
            alignItems: "center",
            gap: "var(--ic-space-sm);",
          }}
        >
          <IcButton>Slotted Button</IcButton>
          <IcFooterLink href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 0 24 24"
              width="48px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z" />
            </svg>
          </IcFooterLink>
        </div>
      </IcFooter>
    </div>
    </>
  ),
  name: "Switch theme",

  parameters: {
    layout: "fullscreen",
  },
};
