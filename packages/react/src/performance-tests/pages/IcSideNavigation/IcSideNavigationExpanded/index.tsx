import React from "react";
import {
  IcSideNavigation,
  IcNavigationGroup,
  IcNavigationItem,
  IcBadge,
  IcTheme,
  IcTypography,
} from "../../../../components";
import { SlottedSVG } from "../../../../react-component-lib/slottedSVG";

type PageProps = {
  theme: "light" | "dark";
};

const ReusableSlottedSVG = () => {
  return (
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
};

const IcSideNavigationExpandedPage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <IcTypography variant="subtitle-small">
        <h1>Side Navigation Expanded Page</h1>
      </IcTypography>
      <IcSideNavigation
        appTitle="ACME"
        version="v0.0.0"
        status="BETA"
        expanded={true}
        onIcSideNavExpanded={(event) =>
          console.log("Side nav expanded: ", event.detail.sideNavExpanded)
        }
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
        <IcNavigationItem
          slot="primary-navigation"
          href="/"
          label="Item 1 with a very, very long label"
        >
          <ReusableSlottedSVG />
        </IcNavigationItem>
        <IcNavigationItem
          slot="primary-navigation"
          href="/"
          label="Item 2"
          selected
        >
          <IcBadge label="1" slot="badge" variant="light" position="far" />
          <ReusableSlottedSVG />
        </IcNavigationItem>
        <IcNavigationGroup
          slot="primary-navigation"
          label="Expandable navigation group"
          expandable={true}
        >
          <IcNavigationItem href="/" label="Item 3">
            <ReusableSlottedSVG />
          </IcNavigationItem>
        </IcNavigationGroup>
        <IcNavigationGroup
          slot="primary-navigation"
          label="Non-expandable navigation group"
        >
          <IcNavigationItem href="/" label="Item 4">
            <ReusableSlottedSVG />
          </IcNavigationItem>
          <IcNavigationItem href="/" label="Item 5">
            <ReusableSlottedSVG />
          </IcNavigationItem>
          <IcNavigationItem href="/" label="Item 6">
            <ReusableSlottedSVG />
          </IcNavigationItem>
          <IcNavigationItem href="/" label="Item 7">
            <ReusableSlottedSVG />
          </IcNavigationItem>
          <IcNavigationItem href="/" label="Item 8">
            <ReusableSlottedSVG />
          </IcNavigationItem>
        </IcNavigationGroup>
        <IcNavigationItem slot="secondary-navigation" href="/" label="Settings">
          <ReusableSlottedSVG />
        </IcNavigationItem>
      </IcSideNavigation>
    </IcTheme>
  );
};

export default IcSideNavigationExpandedPage;
