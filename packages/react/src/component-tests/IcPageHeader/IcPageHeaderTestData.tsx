/* eslint-disable react/jsx-no-bind */

import {
  IcBreadcrumb,
  IcBreadcrumbGroup,
  IcButton,
  IcChip,
  IcNavigationItem,
  IcStep,
  IcStepper,
  IcTextField,
  IcTypography,
} from "../..";
/* eslint-disable react/jsx-no-bind */
import React from "react";
import { IcPageHeader } from "../..";
export const ScrollStickyPageHeader = () => {
  return (
    <>
      <div>
        <IcPageHeader
          heading="Latte recipe"
          sticky
          subheading="A Latte is a popular Italian coffee, made with espresso, steamed milk and a thin layer of foam. "
          reverseOrder
        >
          <IcChip slot="heading-adornment" label="BETA" size="large" />
          <IcButton slot="actions" variant="primary">
            Create coffee
          </IcButton>
          <IcButton slot="actions" variant="tertiary">
            Filter coffee
          </IcButton>

          <IcTextField
            slot="input"
            placeholder="Search for ingredients…"
            label="Input"
            hideLabel
          />
        </IcPageHeader>
        <div id="page-content">
          <IcTypography>Hello world</IcTypography>

          <br />
          <IcTypography>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
            <br />
            Why do we use it?
            <br />
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </IcTypography>

          <IcTypography>Hello world</IcTypography>

          <br />
          <IcTypography>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
            <br />
            Why do we use it?
            <br />
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
            <IcTypography>Hello world</IcTypography>
            <IcTypography>Hello world</IcTypography>
            <IcTypography>Hello world</IcTypography>
            <IcTypography>Hello world</IcTypography>
            <IcTypography>Hello world</IcTypography>
            <IcTypography>Hello world</IcTypography>
            <IcTypography>Hello world</IcTypography>
            <IcTypography>Hello world</IcTypography>
            <IcTypography>Hello world</IcTypography>
            <IcTypography>Hello world</IcTypography>
            <IcTypography>Hello world</IcTypography>
            <IcTypography>Hello world</IcTypography>
            <IcTypography>Hello world</IcTypography>
            <IcTypography>Hello world</IcTypography>
            <IcTypography>Hello world.</IcTypography>
          </IcTypography>
          <IcButton id="end">end of page</IcButton>
        </div>
      </div>
    </>
  );
};

export const DesktopScrollablePageVariant = () => {
  return (
    <div>
      <IcPageHeader
        heading="Latte recipe"
        stickyDesktopOnly={true}
        subheading="A Latte is a popular Italian coffee, made with espresso, steamed milk and a thin layer of foam. "
        reverseOrder
      >
        <IcChip slot="heading-adornment" label="BETA" size="large" />
        <IcButton slot="actions" variant="primary">
          Create coffee
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
          placeholder="Search for ingredients…"
          label="Input"
          hideLabel
        />
      </IcPageHeader>
      <IcTypography>Hello world</IcTypography>

      <br />
      <IcTypography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.
        <br />
        Why do we use it?
        <br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </IcTypography>

      <IcTypography>Hello world</IcTypography>

      <br />
      <IcTypography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.
        <br />
        Why do we use it?
        <br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like). End of
        the page.
      </IcTypography>
    </div>
  );
};

export const PageHeaderDefault = () => {
  return (
    <IcPageHeader
      heading="Latte recipe"
      subheading="A Latte is a popular Italian coffee, made with espresso, steamed milk and a thin layer of foam. "
      reverseOrder
    >
      <IcChip slot="heading-adornment" label="BETA" size="large" />
    </IcPageHeader>
  );
};
export const PageheaderAlign = (align: "center" | "full-width") => {
  return (
    <IcPageHeader
      aligned={align}
      heading="Latte recipe"
      subheading="A Latte is a popular Italian coffee, made with espresso, steamed milk and a thin layer of foam. "
      reverseOrder
    >
      <IcChip slot="heading-adornment" label="BETA" size="large" />
      <IcButton slot="actions" variant="primary">
        Create coffee
      </IcButton>
      <IcButton slot="actions" variant="tertiary">
        Filter coffee
      </IcButton>
      <IcTextField
        slot="input"
        placeholder="Search for ingredients…"
        label="Input"
        hideLabel
      />
    </IcPageHeader>
  );
};

export const PageHeaderSmallSize = () => {
  return (
    <IcPageHeader
      size="small"
      heading="Latte recipe"
      subheading="A Latte is a popular Italian coffee, made with espresso, steamed milk and a thin layer of foam."
    />
  );
};
export const PageHeaderWithoutBorder = () => {
  return (
    <IcPageHeader
      heading="Latte recipe"
      subheading="A Latte is a popular Italian coffee, made with espresso, steamed milk and a thin layer of foam. "
      border={false}
    >
      <IcChip slot="heading-adornment" label="BETA" size="large" />
      <IcButton slot="actions" variant="primary">
        Create coffee
      </IcButton>
      <IcButton slot="actions" variant="tertiary">
        Filter coffee
      </IcButton>
      <IcTextField
        slot="input"
        placeholder="Search for ingredients…"
        label="Input"
        hideLabel
      />
    </IcPageHeader>
  );
};

export const PageHeaderWithActionsInputTabs = () => {
  return (
    <IcPageHeader
      heading="Latte recipe"
      subheading="A Latte is a popular Italian coffee, made with espresso, steamed milk and a thin layer of foam."
      reverseOrder
    >
      <IcChip slot="heading-adornment" label="BETA" size="large" />
      <IcButton slot="actions" variant="primary">
        Create coffee
      </IcButton>
      <IcButton slot="actions" variant="tertiary">
        Filter coffee
      </IcButton>
      <IcTextField
        slot="input"
        placeholder="Search for ingredients…"
        label="Input"
        hideLabel
      />
      <IcNavigationItem slot="tabs" label="Method" href="#" selected />
      <IcNavigationItem slot="tabs" label="Ingredients" href="#" />
    </IcPageHeader>
  );
};

export const PageHeaderWithStepper = () => {
  return (
    <IcPageHeader
      heading="latte recipe"
      subheading="A Latte is a popular Italian coffee, made with espresso, steamed milk and a thin layer of foam."
      reverseOrder
    >
      <IcChip slot="heading-adornment" label="BETA" size="large" />
      <IcButton slot="actions" variant="primary">
        Create coffee
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
        placeholder="Search for ingredients…"
        label="Input"
        hideLabel
      />
    </IcPageHeader>
  );
};

export const PageHeaderWithBreadcrumbNav = () => {
  return (
    <IcPageHeader
      heading="Latte recipe"
      subheading="A Latte is a popular Italian coffee, made with espresso, steamed milk and a thin layer of foam."
    >
      <IcChip slot="heading-adornment" label="BETA" size="large" />
      <IcBreadcrumbGroup slot="breadcrumbs">
        <IcBreadcrumb pageTitle="Drinks" href="#" />
        <IcBreadcrumb pageTitle="Coffees" href="#" />
        <IcBreadcrumb current pageTitle="Latte" href="#" />
      </IcBreadcrumbGroup>
    </IcPageHeader>
  );
};

export const PageHeaderSlottedHeadings = () => {
  return (
    <IcPageHeader>
      <IcTypography slot="heading" variant="h4">
        <h2>Heading</h2>
      </IcTypography>
      <IcTypography slot="subheading" variant="body">
        Subheading
      </IcTypography>
    </IcPageHeader>
  );
};
