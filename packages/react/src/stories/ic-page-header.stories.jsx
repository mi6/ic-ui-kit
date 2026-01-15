/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import {
  IcBreadcrumb,
  IcBreadcrumbGroup,
  IcButton,
  IcCardVertical,
  IcChip,
  IcFooter,
  IcFooterLink,
  IcNavigationItem,
  IcPageHeader,
  IcSectionContainer,
  IcStatusTag,
  IcStep,
  IcStepper,
  IcTextField,
  IcTopNavigation,
  IcTypography,
  IcBadge,
} from "../components";

import { MemoryRouter, NavLink, Route, Routes } from "react-router-dom";

const defaultArgs = {
  aligned: "left",
  border: true,
  heading: "Page Header Title",
  reverseOrder: false,
  size: "medium",
  sticky: false,
  stickyDesktopOnly: false,
  subheading:
    "A Latte is a popular Italian coffee, made with espresso, steamed milk and a thin layer of foam.",
  theme: "inherit",
  ["--ic-page-header-text-primary"]: "",
  ["--ic-page-header-background"]: "",
  ["--ic-page-header-border"]: "",
  ["--ic-page-header-text-tertiary"]: "",
  ["--ic-page-header-placeholder-text-field"]: "",
};

const AllRecipes = () => (
  <>
    <IcTypography variant="h3">All Recipes</IcTypography>
    <div
      style={{
        display: "grid",
        gap: "16px",
        gridTemplateColumns: "auto auto auto",
        marginTop: "24px",
      }}
    >
      <IcCardVertical
        heading="Macchiato"
        message="Put your coffee machine to work and brew an easy macchiato. Ideal for breakfast, brunch or whenever you need a pick-me-up."
      />
      <IcCardVertical
        heading="Mocha"
        message="If you have a coffee machine, treat yourself to a comforting, chocolatey mocha. You don't need to be a trained barista with our..."
      />
      <IcCardVertical
        heading="Espresso"
        message="Capture the classic taste of espresso without the hassle of expensive brewing equipment! For best flavor, serve espresso immediately. Pour..."
      />
    </div>
  </>
);

const Favourites = () => (
  <>
    <IcTypography variant="h3">Favourites</IcTypography>
    <div
      style={{
        display: "grid",
        gap: "16px",
        gridTemplateColumns: "auto auto auto",
        marginTop: "24px",
      }}
    >
      <IcCardVertical
        heading="Macchiato"
        message="Put your coffee machine to work and brew an easy macchiato. Ideal for breakfast, brunch or whenever you need a pick-me-up."
      />
      <IcCardVertical
        heading="Mocha"
        message="If you have a coffee machine, treat yourself to a comforting, chocolatey mocha. You don't need to be a trained barista with our..."
      />
      <IcCardVertical
        heading="Latte"
        message="Dust off that coffee machine and learn a few barista skills to make a creamy latte. Our easy recipe takes breakfast, or brunch, to the next..."
      />
    </div>
  </>
);

export default {
  title: "Page header",
  component: IcPageHeader,

  parameters: {
    layout: "fullscreen",
  },
};

export const Playground = {
  render: (args) => (
    <>
      <IcPageHeader
        aligned={args.aligned}
        border={args.border}
        heading={args.heading}
        reverseOrder={args.reverseOrder}
        size={args.size}
        sticky={args.sticky}
        stickyDesktopOnly={args.stickyDesktopOnly}
        subheading={args.subheading}
        theme={args.theme}
        style={{
          "--ic-page-header-text-primary":
            args["--ic-page-header-text-primary"] !== ""
              ? args["--ic-page-header-text-primary"]
              : undefined,
          "--ic-page-header-background":
            args["--ic-page-header-background"] !== ""
              ? args["--ic-page-header-background"]
              : undefined,
          "--ic-page-header-border":
            args["--ic-page-header-border"] !== ""
              ? args["--ic-page-header-border"]
              : undefined,
          "--ic-page-header-text-tertiary":
            args["--ic-page-header-text-tertiary"] !== ""
              ? args["--ic-page-header-text-tertiary"]
              : undefined,
          "--ic-page-header-placeholder-text-field":
            args["--ic-page-header-placeholder-text-field"] !== ""
              ? args["--ic-page-header-placeholder-text-field"]
              : undefined,
        }}
      >
        <IcBreadcrumbGroup slot="breadcrumbs">
          <IcBreadcrumb current pageTitle="Drinks" href="#"></IcBreadcrumb>
          <IcBreadcrumb pageTitle="Coffees" href="#">
            {" "}
          </IcBreadcrumb>
          <IcBreadcrumb pageTitle="Latte" href="#"></IcBreadcrumb>
        </IcBreadcrumbGroup>
        <IcChip slot="heading-adornment" label="Beta" size="large" />
        <IcButton slot="actions" variant="primary">
          Create coffee
          <svg
            slot="left-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
              fill="currentColor"
            />
          </svg>
        </IcButton>
        <IcButton slot="actions" variant="tertiary">
          Filter coffee
        </IcButton>
        <IcStepper slot="stepper">
          <IcStep heading="Warm kettle" type="completed" />
          <IcStep heading="Warm milk" subheading="Optional" type="completed" />
          <IcStep heading="Pour milk" type="current" current />
        </IcStepper>
      </IcPageHeader>
      <IcSectionContainer aligned={args.aligned}>
        <IcTypography>
          Example page content to test out the sticky prop.
        </IcTypography>
        <IcTypography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor.
        </IcTypography>
        <IcTypography>
          Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper
          congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie,
          enim est eleifend mi, non fermentum diam nisl sit amet erat.
        </IcTypography>
        <IcTypography>
          Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium
          a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra
          tempor. Cras vestibulum bibendum augue.
        </IcTypography>
        <IcTypography>
          Praesent egestas leo in pede. Praesent blandit odio eu enim.
          Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia Curae;
          Aliquam nibh.
        </IcTypography>
        <IcTypography>
          Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing
          ante non diam sodales hendrerit.
        </IcTypography>
        <IcTypography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor.
        </IcTypography>
        <IcTypography>
          Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper
          congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie,
          enim est eleifend mi, non fermentum diam nisl sit amet erat.
        </IcTypography>
        <IcTypography>
          Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium
          a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra
          tempor. Cras vestibulum bibendum augue.
        </IcTypography>
        <IcTypography>
          Praesent egestas leo in pede. Praesent blandit odio eu enim.
          Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia Curae;
          Aliquam nibh.
        </IcTypography>
        <IcTypography>
          Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing
          ante non diam sodales hendrerit.
        </IcTypography>
        <IcTypography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor.
        </IcTypography>
        <IcTypography>
          Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper
          congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie,
          enim est eleifend mi, non fermentum diam nisl sit amet erat.
        </IcTypography>
        <IcTypography>
          Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium
          a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra
          tempor. Cras vestibulum bibendum augue.
        </IcTypography>
        <IcTypography>
          Praesent egestas leo in pede. Praesent blandit odio eu enim.
          Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia Curae;
          Aliquam nibh.
        </IcTypography>
        <IcTypography>
          Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing
          ante non diam sodales hendrerit.
        </IcTypography>
      </IcSectionContainer>
    </>
  ),

  args: defaultArgs,
  name: "Playground",

  parameters: {
    layout: "fullscreen",
  },

  argTypes: {
    aligned: {
      options: ["center", "full-width", "left"],

      control: {
        type: "inline-radio",
      },
    },

    size: {
      options: ["medium", "small"],

      control: {
        type: "inline-radio",
      },
    },

    theme: {
      options: ["inherit", "dark", "light"],

      control: {
        type: "radio",
      },
    },

    "--ic-page-header-text-primary": {
      control: {
        type: "color",
      },
    },

    "--ic-page-header-background": {
      control: {
        type: "color",
      },
    },

    "--ic-page-header-border": {
      control: {
        type: "color",
      },
    },

    "--ic-page-header-text-tertiary": {
      control: {
        type: "color",
      },
    },

    "--ic-page-header-placeholder-text-field": {
      control: {
        type: "color",
      },
    },
  },
};

export const HeadingWithAdornment = {
  render: () => (
    <IcPageHeader heading="Page header">
      <IcStatusTag slot="heading-adornment" label="Beta" />
    </IcPageHeader>
  ),

  name: "Heading with adornment",
};

export const LeftAligned = {
  render: () => (
    <IcPageHeader
      aligned="left"
      heading="Page header"
      subheading="This is a simple page header component and this is the text."
    >
      <IcStatusTag slot="heading-adornment" label="Beta" />
    </IcPageHeader>
  ),

  name: "Left aligned",
};

export const SizeSmall = {
  render: () => (
    <IcPageHeader
      aligned="left"
      heading="Page header"
      subheading="This is a simple page header component and this is the text."
      size="small"
    >
      <IcStatusTag slot="heading-adornment" label="Beta" size="small" />
    </IcPageHeader>
  ),

  name: "Size small",
};

export const WithoutBorder = {
  render: () => (
    <IcPageHeader heading="Page header" border={false}>
      <IcStatusTag slot="heading-adornment" label="Beta" />
    </IcPageHeader>
  ),

  name: "Without border",
};

export const CenterAligned = {
  render: () => (
    <IcPageHeader
      aligned="center"
      heading="Page header"
      subheading="This is a simple page header component and this is the text."
    >
      <IcStatusTag slot="heading-adornment" label="Beta" />
    </IcPageHeader>
  ),

  name: "Center aligned",
};

export const FullWidth = {
  render: () => (
    <IcPageHeader
      aligned="full-width"
      heading="Page header"
      subheading="This is a simple page header component and this is the text."
    >
      <IcStatusTag slot="heading-adornment" label="Beta" />
    </IcPageHeader>
  ),

  name: "Full width",
};

export const Sticky = {
  render: () => (
    <IcPageHeader
      sticky
      heading="Page header"
      subheading="This is a simple page header component and this is the text."
    >
      <IcStatusTag slot="heading-adornment" label="Beta" />
    </IcPageHeader>
  ),

  name: "Sticky",
};

export const StickyWithContentAndFooter = {
  render: () => (
    <>
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
    <IcPageHeader
      sticky
      heading="Page header"
      subheading="This is a simple page header component and this is the text."
    >
      <IcStatusTag slot="heading-adornment" label="Beta" />
    </IcPageHeader>
    <IcSectionContainer style={{ height: "800px" }}>
      This is an example of how the sticky variant of the page header would work
      with some content and the footer.
    </IcSectionContainer>
    <IcFooter
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
          width: "100px",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--ic-brand-color-primary)",
          color: "var(--ic-architectural-white)",
        }}
      >
        Logo
      </div>
    </IcFooter>
    </>
  ), 

  name: "Sticky with content and footer",
};

export const StickyForLargeAndExtraLargeBreakpointsOnly = {
  render: () => (
    <>
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
    <IcPageHeader
      stickyDesktopOnly
      heading="Page header"
      subheading="This is a simple page header component and this is the text. This page header is only sticky for viewport widths of 992px and above.."
    >
      <IcStatusTag slot="heading-adornment" label="Beta" />
    </IcPageHeader>
    <IcSectionContainer style={{ height: "800px" }}>
      This is an example of how the stickyDesktopOnly variant of the page header
      would work with some content and the footer.
    </IcSectionContainer>
    <IcFooter
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
          width: "100px",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--ic-brand-color-primary)",
          color: "var(--ic-architectural-white)",
        }}
      >
        Logo
      </div>
    </IcFooter>
    </>
  ),

  name: "Sticky for large and extra-large breakpoints only",
};

export const WithBreadcrumbs = {
  render: () => (
    <IcPageHeader
      heading="Page header"
      subheading="This is a page header component with additional functionality and this is the text."
      reverse-order
    >
      <IcBreadcrumbGroup slot="breadcrumbs">
        <IcBreadcrumb page-title="Breadcrumb 1" href="/breadcrumb-1" />
        <IcBreadcrumb
          current="true"
          page-title="Breadcrumb 2"
          href="/breadcrumb-2"
        />
      </IcBreadcrumbGroup>
    </IcPageHeader>
  ),

  name: "With breadcrumbs",
};

export const WithActions = {
  render: () => (
    <IcPageHeader
      heading="Page header"
      subheading="This is a page header component with additional functionality and this is the text."
      reverseOrder
    >
      <IcButton slot="actions" variant="primary">
        Create coffee
        <svg
          slot="left-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
            fill="currentColor"
          />
        </svg>
      </IcButton>
      <IcButton slot="actions" variant="tertiary">
        Filter coffee
      </IcButton>
    </IcPageHeader>
  ),

  name: "With actions",
};

export const WithInput = {
  render: () => (
    <IcPageHeader
      heading="Page header"
      subheading="This is a page header component with additional functionality and this is the text."
    >
      <IcStatusTag slot="heading-adornment" label="Beta" />
      <IcTextField
        slot="input"
        placeholder="Enter your input"
        hide-label
        style={{
          "@media (maxWidth: 576px)": {
            width: "304px",
          },
        }}
      />
    </IcPageHeader>
  ),

  name: "With input",
};

export const WithStepper = {
  render: () => (
    <IcPageHeader
      heading="Create a coffee"
      subheading="This is a page header component with additional functionality and this is the text."
    >
      <IcStepper slot="stepper">
        <IcStep heading="Warm kettle" type="completed" />
        <IcStep heading="Warm milk" subheading="Optional" type="completed" />
        <IcStep heading="Pour milk" type="current" />
      </IcStepper>
    </IcPageHeader>
  ),

  name: "With stepper",
};

export const WithTabs = {
  render: () => (
    <IcPageHeader
      heading="Coffee recipes"
      subheading="This is a page header component with additional functionality and this is the text."
    >
      <IcStatusTag slot="heading-adornment" label="Beta" />
      <IcNavigationItem
        slot="tabs"
        label="All recipes"
        href="?path=/story/web-components-page-header--with-tabs"
        selected
        aria-label="This page shows all the recipes"
      />
      <IcNavigationItem
        slot="tabs"
        label="Favourites"
        href="?path=/story/web-components-page-header--with-tabs"
        aria-label="Show your favourite recipes"
      />
      <IcNavigationItem
        slot="tabs"
        label="Section Three"
        href="?path=/story/web-components-page-header--with-tabs"
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
        <IcBadge label="3" slot="badge" size="small" position="near"/>
      </IcNavigationItem>
      <IcNavigationItem
        slot="tabs"
        label="Section Four"
        href="?path=/story/web-components-page-header--with-tabs"
      />
      <IcNavigationItem
        slot="tabs"
        label="Section Five"
        href="?path=/story/web-components-page-header--with-tabs"
      />
      <IcNavigationItem
        slot="tabs"
        label="Section Six"
        href="?path=/story/web-components-page-header--with-tabs"
      />
      <IcNavigationItem
        slot="tabs"
        label="Section Seven"
        href="?path=/story/web-components-page-header--with-tabs"
      />
      <IcNavigationItem
        slot="tabs"
        label="Section Eight"
        href="?path=/story/web-components-page-header--with-tabs"
      />
      <IcNavigationItem
        slot="tabs"
        label="Section Nine"
        href="?path=/story/web-components-page-header--with-tabs"
      />
      <IcNavigationItem
        slot="tabs"
        label="Section Ten"
        href="?path=/story/web-components-page-header--with-tabs"
      />
    </IcPageHeader>
  ),

  name: "With tabs",
};

export const WithBreadcrumbsInputActionsAndTabs = {
  render: () => (
    <IcPageHeader
      heading="Coffee recipes"
      subheading="This is a page header component that has breadcrumbs, an input area, actions and tabs."
      reverseOrder
    >
      <IcStatusTag slot="heading-adornment" label="Beta" />
      <IcBreadcrumbGroup slot="breadcrumbs">
        <IcBreadcrumb page-title="Breadcrumb 1" href="/breadcrumb-1" />
        <IcBreadcrumb
          current="true"
          page-title="Breadcrumb 2"
          href="/breadcrumb-2"
        />
      </IcBreadcrumbGroup>
      <IcButton slot="actions" variant="primary">
        Create coffee
        <svg
          slot="left-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
            fill="currentColor"
          />
        </svg>
      </IcButton>
      <IcButton slot="actions" variant="tertiary">
        Filter coffee
      </IcButton>
      <IcNavigationItem
        slot="tabs"
        label="All recipes"
        href="?path=/story/web-components-page-header--with-tabs"
        selected
      />
      <IcNavigationItem
        slot="tabs"
        label="Favourites"
        href="?path=/story/web-components-page-header--with-tabs"
      />
      <IcTextField
        slot="input"
        placeholder="Enter your input"
        hide-label
        style={{
          "@media (maxWidth: 576px)": {
            width: "304px",
          },
        }}
      />
    </IcPageHeader>
  ),

  name: "With breadcrumbs, input, actions and tabs",
};

export const WithBreadcrumbsInputActionsAndStepper = {
  render: () => (
    <IcPageHeader
      heading="Coffee recipes"
      subheading="This is a page header component that has breadcrumbs, an input area, actions and stepper."
      reverseOrder
    >
      <IcStatusTag slot="heading-adornment" label="Beta" />
      <IcBreadcrumbGroup slot="breadcrumbs">
        <IcBreadcrumb page-title="Breadcrumb 1" href="/breadcrumb-1" />
        <IcBreadcrumb
          current="true"
          page-title="Breadcrumb 2"
          href="/breadcrumb-2"
        />
      </IcBreadcrumbGroup>
      <IcButton slot="actions" variant="primary">
        Create coffee
        <svg
          slot="left-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
            fill="currentColor"
          />
        </svg>
      </IcButton>
      <IcButton slot="actions" variant="tertiary">
        Filter coffee
      </IcButton>
      <IcStepper slot="stepper">
        <IcStep heading="Warm kettle" type="completed" />
        <IcStep heading="Warm milk" subheading="Optional" type="completed" />
        <IcStep heading="Pour milk" type="current" />
      </IcStepper>
      <IcTextField
        slot="input"
        placeholder="Enter your input"
        hide-label
        style={{
          "@media (maxWidth: 576px)": {
            width: "304px",
          },
        }}
      />
    </IcPageHeader>
  ),

  name: "With breadcrumbs, input, actions and stepper",
};

export const WithReactRouter = {
  render: () => (
    <>
       <IcPageHeader
      heading="Coffee recipes"
      subheading="This is a page header component that has an input area, actions and tabs."
      reverseOrder
    >
      <IcStatusTag slot="heading-adornment" label="Beta" />
      <IcButton slot="actions" variant="primary">
        Create coffee
        <svg
          slot="left-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
            fill="currentColor"
          />
        </svg>
      </IcButton>
      <IcButton slot="actions" variant="tertiary">
        Filter coffee
      </IcButton>
      <IcNavigationItem slot="tabs" selected>
        <NavLink slot="navigation-item" to="/">
          All recipes
        </NavLink>
      </IcNavigationItem>
      <IcNavigationItem slot="tabs">
        <NavLink slot="navigation-item" to="/favourites">
          Favourites
        </NavLink>
      </IcNavigationItem>
      <IcTextField
        slot="input"
        placeholder="Enter your input"
        hide-label
        style={{ "@media (maxWidth: 576px)": { width: "304px" } }}
      />
    </IcPageHeader>
    <IcSectionContainer>
      <Routes>
        <Route path="/" element={<AllRecipes />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </IcSectionContainer>
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

export const ComponentOverrides = {
  render: () => (
    <IcPageHeader>
      <IcTypography slot="heading" variant="h4">
        <h2>heading</h2>
      </IcTypography>
      <IcTypography slot="subheading" variant="body">
        subheading
      </IcTypography>
    </IcPageHeader>
  ),

  name: "Component overrides",
};
