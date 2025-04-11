import React, { ReactElement, useState } from "react";
import {
  IcTheme,
  IcTopNavigation,
  IcSearchBar,
  IcNavigationButton,
  IcNavigationItem,
  IcHero,
  IcTextField,
  IcButton,
  IcLink,
  IcSectionContainer,
  IcCheckbox,
  IcAlert,
  IcTypography,
  IcCardVertical,
  IcFooter,
  IcFooterLink,
  IcSwitch,
} from "../../components";
import { SlottedSVG } from "../../react-component-lib/slottedSVG";

export const ThemeWithComponentThemeProps = (args: {
  color: "rgba(27, 60, 121, 1)";
  theme: "light" | "dark" | "system";
  backgroundColor: string;
}): ReactElement => {
  return (
    <>
      <div style={{ backgroundColor: args.backgroundColor }}>
        <IcTheme brandColor={args.color} theme={args.theme}>
          <IcTopNavigation
            appTitle="ApplicationName"
            status="alpha"
            version="v0.0.7"
          >
            <SlottedSVG
              slot="app-icon"
              xmlns="http://www.w3.org/2000/SlottedSVG"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
            </SlottedSVG>
            <IcSearchBar slot="search" placeholder="Search" label="Search" />
            <IcNavigationButton
              label="button1"
              slot="buttons"
              onClick={() => alert("test")}
            >
              <SlottedSVG
                slot="icon"
                xmlns="http://www.w3.org/2000/SlottedSVG"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
              </SlottedSVG>
            </IcNavigationButton>
            <IcNavigationItem label="Navigation" href="/" slot="navigation" />
            <IcNavigationItem label="Navigation" href="/" slot="navigation" />
            <IcNavigationItem label="Navigation" href="/" slot="navigation" />
            <IcNavigationItem
              label="Navigation"
              href="/"
              selected={true}
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
              <IcTextField
                placeholder="Filter display"
                label="Filter display"
                hide-label
              ></IcTextField>
              <IcButton variant="primary" style={{ marginLeft: 16 }}>
                Filter
              </IcButton>
            </div>
            <IcButton variant="secondary" slot="interaction">
              See all
            </IcButton>
            <IcLink
              href="https://google.com"
              slot="interaction"
              style={{ marginTop: 10 }}
            >
              Help
            </IcLink>
          </IcHero>
          <IcSectionContainer
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <IcCheckbox
              value="valueName1"
              label="Unselected / Default"
            ></IcCheckbox>
            <IcTextField
              label="What is your favourite coffee?"
              required
              placeholder="Placeholder"
              helperText="Such as Arabica, Robusta or Liberica"
            ></IcTextField>
            <IcAlert
              heading="This alert uses a custom message slot"
              dismissible={true}
            >
              <IcButton slot="action" variant="secondary" monochrome>
                Button
              </IcButton>
              <IcTypography variant="body" slot="message">
                <p>
                  This is some text and
                  <IcLink href="/"> this is an inline link IcLink </IcLink>
                  within the text
                </p>
              </IcTypography>
            </IcAlert>
            <IcCardVertical heading="This is the card heading"></IcCardVertical>
            <div
              style={{
                padding: "10px",
                display: "flex",
                gap: "10px",
                backgroundColor: "#17191C",
              }}
            >
              <IcSwitch label="Label" theme="dark" />
              <IcSwitch label="Label" checked theme="dark" />
              <IcSwitch label="Label" disabled theme="dark" />
              <IcSwitch label="Label" disabled checked theme="dark" />
              <IcTypography variant="body" theme="dark">
                The component theme prop should override the IcTheme theme prop
              </IcTypography>
            </div>
          </IcSectionContainer>
          <IcFooter
            aligned="full-width"
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
                gap: "var(--ic-space-sm)",
              }}
            >
              <IcButton>Slotted Button</IcButton>
            </div>
          </IcFooter>
        </IcTheme>
      </div>
    </>
  );
};

export const ThemeWithComponentWithinSeparateIcTheme = (args: {
  color: "rgba(27, 60, 121, 1)";
  theme: "light" | "dark" | "system";
  backgroundColor: "white" | "black";
}): ReactElement => {
  return (
    <>
      <div style={{ backgroundColor: args.backgroundColor }}>
        <IcTheme brandColor={args.color} theme={args.theme}>
          <IcTopNavigation
            appTitle="ApplicationName"
            status="alpha"
            version="v0.0.7"
          >
            <SlottedSVG
              slot="app-icon"
              xmlns="http://www.w3.org/2000/SlottedSVG"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
            </SlottedSVG>
            <IcSearchBar slot="search" placeholder="Search" label="Search" />
            <IcNavigationButton
              label="button1"
              slot="buttons"
              onClick={() => alert("test")}
            >
              <SlottedSVG
                slot="icon"
                xmlns="http://www.w3.org/2000/SlottedSVG"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
              </SlottedSVG>
            </IcNavigationButton>
            <IcNavigationItem label="Navigation" href="/" slot="navigation" />
            <IcNavigationItem label="Navigation" href="/" slot="navigation" />
            <IcNavigationItem label="Navigation" href="/" slot="navigation" />
            <IcNavigationItem
              label="Navigation"
              href="/"
              selected={true}
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
              <IcTextField
                placeholder="Filter display"
                label="Filter display"
                hide-label
              ></IcTextField>
              <IcButton variant="primary" style={{ marginLeft: 16 }}>
                Filter
              </IcButton>
            </div>
            <IcButton variant="secondary" slot="interaction">
              See all
            </IcButton>
            <IcLink
              href="https://google.com"
              slot="interaction"
              style={{ marginTop: 10 }}
            >
              Help
            </IcLink>
          </IcHero>
          <IcSectionContainer
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <IcCheckbox
              value="valueName1"
              label="Unselected / Default"
            ></IcCheckbox>
            <IcTextField
              label="What is your favourite coffee?"
              required
              placeholder="Placeholder"
              helperText="Such as Arabica, Robusta or Liberica"
            ></IcTextField>
            <IcAlert
              heading="This alert uses a custom message slot"
              dismissible={true}
            >
              <IcButton slot="action" variant="secondary" monochrome="true">
                Button
              </IcButton>
              <IcTypography variant="body" slot="message">
                <p>
                  This is some text and
                  <IcLink href="/"> this is an inline link IcLink </IcLink>
                  within the text
                </p>
              </IcTypography>
            </IcAlert>
            <IcCardVertical heading="This is the card heading"></IcCardVertical>
            <div
              style={{
                border: "1px solid #ffffff",
                padding: "0.25rem",
                margin: "0.25rem",
                backgroundColor: "black",
              }}
            >
              <span style={{ color: "#ffffff" }}>
                This content is in an IcTheme component with dark mode set
              </span>
              <IcTheme theme="dark">
                <IcCardVertical heading="This is the card heading"></IcCardVertical>
                <IcTextField
                  label="What is your favourite coffee?"
                  required
                  placeholder="Placeholder"
                  helperText="Such as Arabica, Robusta or Liberica"
                ></IcTextField>
              </IcTheme>
            </div>
          </IcSectionContainer>
          <IcFooter
            aligned="full-width"
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
                gap: "var(--ic-space-sm)",
              }}
            >
              <IcButton>Slotted Button</IcButton>
            </div>
          </IcFooter>
        </IcTheme>
      </div>
    </>
  );
};

export const ComponentsWithInheritThemeProp = (args: {
  color: "rgba(27, 60, 121, 1)";
  theme: "light" | "dark" | "system";
  backgroundColor: "white" | "black";
}): ReactElement => {
  return (
    <>
      <div style={{ backgroundColor: args.backgroundColor }}>
        <IcTheme brandColor={args.color} theme={args.theme}>
          <IcTopNavigation
            appTitle="ApplicationName"
            status="alpha"
            version="v0.0.7"
          >
            <SlottedSVG
              slot="app-icon"
              xmlns="http://www.w3.org/2000/SlottedSVG"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
            </SlottedSVG>
            <IcSearchBar slot="search" placeholder="Search" label="Search" />
            <IcNavigationButton
              label="button1"
              slot="buttons"
              onClick={() => alert("test")}
            >
              <SlottedSVG
                slot="icon"
                xmlns="http://www.w3.org/2000/SlottedSVG"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
              </SlottedSVG>
            </IcNavigationButton>
            <IcNavigationItem label="Navigation" href="/" slot="navigation" />
            <IcNavigationItem label="Navigation" href="/" slot="navigation" />
            <IcNavigationItem label="Navigation" href="/" slot="navigation" />
            <IcNavigationItem
              label="Navigation"
              href="/"
              selected={true}
              slot="navigation"
            />
            <IcNavigationItem label="Navigation" href="/" slot="navigation" />
          </IcTopNavigation>
          <IcSectionContainer
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <IcCheckbox
              value="valueName1"
              label="Unselected / Default"
            ></IcCheckbox>
            <IcTextField
              label="What is your favourite coffee?"
              required
              placeholder="Placeholder"
              helperText="Such as Arabica, Robusta or Liberica"
            ></IcTextField>
            <div
              style={{
                padding: "10px",
                display: "flex",
                gap: "10px",
              }}
            >
              <IcSwitch label="Label" theme="inherit" />
              <IcSwitch label="Label" checked theme="inherit" />
              <IcSwitch label="Label" disabled theme="inherit" />
              <IcSwitch label="Label" disabled checked theme="inherit" />
              <IcTypography variant="body" theme="inherit">
                Components will inherit their theme colour based on IcTheme when
                theme="inherit"
              </IcTypography>
            </div>
          </IcSectionContainer>
        </IcTheme>
      </div>
    </>
  );
};

export const SwitchBrand = () => {
  const [color, setColour] = useState("rgb(255, 201, 60)");
  const defaultButtonClickHandler = () => {
    setColour("rgb(27, 60, 121)");
  };
  const differentButtonClickHandler = () => {
    setColour("rgb(255, 201, 60)");
  };
  const handleBrandChange = (e: CustomEvent) => {
    console.log(e.detail);
  };
  return (
    <>
      <IcTheme brandColor={color} onBrandChange={handleBrandChange}>
        <IcButton variant="primary" onClick={defaultButtonClickHandler}>
          Default theme
        </IcButton>
        <IcButton variant="primary" onClick={differentButtonClickHandler}>
          Sunset theme
        </IcButton>
        <br />
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
          <IcSearchBar slot="search" placeholder="Search" label="Search" />
          <IcNavigationButton label="button1" slot="buttons">
            <SlottedSVG
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
            </SlottedSVG>
          </IcNavigationButton>
          <IcNavigationItem label="Navigation" href="/" slot="navigation" />
          <IcNavigationItem label="Navigation" href="/" slot="navigation" />
          <IcNavigationItem label="Navigation" href="/" slot="navigation" />
          <IcNavigationItem
            label="Navigation"
            href="/"
            selected={true}
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
            <IcTextField
              placeholder="Filter display"
              label="Filter display"
              hide-label
            ></IcTextField>
            <IcButton variant="primary" style={{ marginLeft: 16 }}>
              Filter
            </IcButton>
          </div>
          <IcButton variant="secondary" slot="interaction">
            See all
          </IcButton>
          <IcLink
            href="https://google.com"
            slot="interaction"
            style={{ marginTop: 10 }}
          >
            Help
          </IcLink>
        </IcHero>
        <IcFooter
          aligned="full-width"
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
              gap: "var(--ic-space-sm)",
            }}
          >
            <IcButton>Slotted Button</IcButton>
            <IcFooterLink href="/">
              <SlottedSVG
                xmlns="http://www.w3.org/2000/svg"
                height="48px"
                viewBox="0 0 24 24"
                width="48px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z" />
              </SlottedSVG>
            </IcFooterLink>
          </div>
        </IcFooter>
      </IcTheme>
    </>
  );
};
