/* eslint-disable @typescript-eslint/no-namespace */
import React, { ReactElement } from "react";
import {
  IcNavigationGroup,
  IcNavigationItem,
  IcBadge,
  IcNavigationButton,
  IcTopNavigation,
  IcSideNavigation,
} from "../../components";
import { SlottedSVG } from "../..";

const ReusableIcon = () => {
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

const handleClick = () => {
  console.log("Navigation item clicked");
};

export const WithExpandableNavGroupAndNavItemsTopNav = (): ReactElement => {
  return (
    <IcTopNavigation status="Beta" version="v1.0.0">
      <IcNavigationGroup
        slot="navigation"
        label="Navigation group 1"
        expandable={true}
      >
        <IcNavigationItem label="Navigation 1" onClick={handleClick} />
        <IcNavigationItem label="Navigation 2" href="/" />
      </IcNavigationGroup>
      <IcNavigationGroup
        slot="navigation"
        label="Navigation group with a very very very long title"
        expandable={true}
      >
        <IcNavigationItem label="Navigation 3" href="/" />
        <IcNavigationItem label="Navigation 4" href="/" />
      </IcNavigationGroup>
    </IcTopNavigation>
  );
};

export const WithNavGroupAndNavItemsTopNav = (): ReactElement => {
  return (
    <IcTopNavigation status="Beta" version="v1.0.0">
      <IcNavigationGroup slot="navigation" label="Navigation group 1">
        <IcNavigationItem label="Navigation 1" href="/" />
        <IcNavigationItem label="Navigation 2" href="/" />
      </IcNavigationGroup>
      <IcNavigationGroup
        slot="navigation"
        label="Navigation group with a very very very very very long title"
      >
        <IcNavigationItem label="Navigation 3" href="/" />
        <IcNavigationItem label="Navigation 4" href="/" />
      </IcNavigationGroup>
    </IcTopNavigation>
  );
};

export const WithNavItemsTopNav = (): ReactElement => {
  return (
    <IcTopNavigation status="Beta" version="v1.0.0">
      <IcNavigationItem slot="navigation" label="Navigation 1">
        <ReusableIcon />
        <IcBadge slot="badge" label="1" position="near" />
      </IcNavigationItem>
      <IcNavigationItem
        slot="navigation"
        label="Navigation 2"
        href="/"
        selected={true}
      >
        <ReusableIcon />
      </IcNavigationItem>
    </IcTopNavigation>
  );
};

export const WithNavButtonsTopNav = (): ReactElement => {
  return (
    <IcTopNavigation status="Beta" version="v1.0.0">
      <IcNavigationButton label="Button One" slot="buttons">
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
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z" />
        </SlottedSVG>
      </IcNavigationButton>
      <IcNavigationItem slot="navigation" label="Navigation 1" href="/" />
      <IcNavigationItem slot="navigation" label="Navigation 2" href="/" />
    </IcTopNavigation>
  );
};

export const WithExpandableNavGroupAndNavItemsSideNav = (): ReactElement => {
  return (
    <IcSideNavigation status="Beta" version="v1.0.0">
      <IcNavigationGroup
        slot="primary-navigation"
        label="Navigation group 1"
        expandable={true}
      >
        <IcNavigationItem label="Navigation 1" href="/">
          <IcBadge label="1" slot="badge" variant="light" position="far" />
          <ReusableIcon />
        </IcNavigationItem>
        <IcNavigationItem label="Navigation 2" href="/">
          <ReusableIcon />
        </IcNavigationItem>
      </IcNavigationGroup>
      <IcNavigationGroup
        slot="primary-navigation"
        label="Navigation group with a very very very long title"
        expandable={true}
      >
        <IcNavigationItem label="Navigation 3" href="/">
          <ReusableIcon />
        </IcNavigationItem>
        <IcNavigationItem label="Navigation 4" href="/">
          <ReusableIcon />
        </IcNavigationItem>
      </IcNavigationGroup>
    </IcSideNavigation>
  );
};

export const WithExpandableNotExpandedNavGroupSideNav = (): ReactElement => {
  return (
    <IcSideNavigation status="Beta" version="v1.0.0">
      <IcNavigationGroup
        slot="primary-navigation"
        label="Navigation group 1"
        expandable={true}
        expanded={false}
      >
        <IcNavigationItem label="Navigation 1" href="/">
          <IcBadge label="1" slot="badge" variant="light" position="far" />
          <ReusableIcon />
        </IcNavigationItem>
        <IcNavigationItem label="Navigation 2" href="/">
          <ReusableIcon />
        </IcNavigationItem>
      </IcNavigationGroup>
      <IcNavigationGroup
        slot="primary-navigation"
        label="Navigation group with a very very very long title"
        expandable={true}
      >
        <IcNavigationItem label="Navigation 3" href="/">
          <ReusableIcon />
        </IcNavigationItem>
        <IcNavigationItem label="Navigation 4" href="/">
          <ReusableIcon />
        </IcNavigationItem>
      </IcNavigationGroup>
    </IcSideNavigation>
  );
};

export const WithNavGroupAndNavItemsSideNav = (): ReactElement => {
  return (
    <IcSideNavigation status="Beta" version="v1.0.0">
      <IcNavigationGroup slot="primary-navigation" label="Navigation group 1">
        <IcNavigationItem label="Navigation 1" href="/">
          <IcBadge label="1" slot="badge" variant="light" position="far" />
          <ReusableIcon />
        </IcNavigationItem>
        <IcNavigationItem label="Navigation 2" href="/">
          <ReusableIcon />
        </IcNavigationItem>
      </IcNavigationGroup>
      <IcNavigationGroup
        slot="primary-navigation"
        label="Navigation group with a very very very very very long title"
      >
        <IcNavigationItem label="Navigation 3" href="/">
          <ReusableIcon />
        </IcNavigationItem>
        <IcNavigationItem label="Navigation 4" href="/">
          <ReusableIcon />
        </IcNavigationItem>
      </IcNavigationGroup>
    </IcSideNavigation>
  );
};

export const WithNavItemsSideNav = (): ReactElement => {
  return (
    <IcSideNavigation status="Beta" version="v1.0.0">
      <IcNavigationItem slot="primary-navigation" label="Navigation 1" href="/">
        <ReusableIcon />
        <IcBadge slot="badge" label="1" position="near" />
      </IcNavigationItem>
      <IcNavigationItem slot="primary-navigation" label="Navigation 2" href="/">
        <ReusableIcon />
      </IcNavigationItem>
      <IcNavigationItem
        slot="secondary-navigation"
        label="Navigation 3"
        href="/"
        selected={true}
      >
        <ReusableIcon />
      </IcNavigationItem>
    </IcSideNavigation>
  );
};

export const AllNavTypesTopNav = (): ReactElement => {
  return (
    <IcTopNavigation status="Beta" version="v1.0.0">
      <IcNavigationGroup
        slot="navigation"
        label="Navigation group 1"
        expandable={true}
      >
        <IcNavigationItem label="Navigation 1" href="/" />
        <IcNavigationItem label="Navigation 2" href="/" />
      </IcNavigationGroup>
      <IcNavigationGroup
        slot="navigation"
        label="Navigation group 2"
        expandable={true}
      >
        <IcNavigationItem label="Navigation 3" href="/" />
        <IcNavigationItem label="Navigation 4" href="/" />
      </IcNavigationGroup>
      <IcNavigationGroup slot="navigation" label="Navigation group 3">
        <IcNavigationItem label="Navigation 5" href="/" />
        <IcNavigationItem label="Navigation 6" href="/" />
      </IcNavigationGroup>
      <IcNavigationGroup slot="navigation" label="Navigation group 4">
        <IcNavigationItem label="Navigation 7" href="/" />
        <IcNavigationItem label="Navigation 8" href="/" />
      </IcNavigationGroup>
      <IcNavigationItem slot="navigation" label="Navigation 9" href="/">
        <ReusableIcon />
        <IcBadge slot="badge" label="1" position="near" />
      </IcNavigationItem>
      <IcNavigationItem
        slot="navigation"
        label="Navigation 10"
        href="/"
        selected={true}
      >
        <ReusableIcon />
      </IcNavigationItem>
      <IcNavigationButton label="Button One" slot="buttons">
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
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z" />
        </SlottedSVG>
      </IcNavigationButton>
    </IcTopNavigation>
  );
};

export const AllNavTypesSideNav = (): ReactElement => {
  return (
    <IcSideNavigation status="Beta" version="v1.0.0">
      <IcNavigationGroup
        slot="primary-navigation"
        label="Navigation group 1"
        expandable={true}
      >
        <IcNavigationItem label="Navigation 1" href="/">
          <IcBadge label="1" slot="badge" variant="light" position="far" />
          <ReusableIcon />
        </IcNavigationItem>
        <IcNavigationItem label="Navigation 2" href="/">
          <ReusableIcon />
        </IcNavigationItem>
      </IcNavigationGroup>
      <IcNavigationGroup
        slot="primary-navigation"
        label="Navigation group 2"
        expandable={true}
      >
        <IcNavigationItem label="Navigation 3" href="/">
          <ReusableIcon />
        </IcNavigationItem>
        <IcNavigationItem label="Navigation 4" href="/">
          <ReusableIcon />
        </IcNavigationItem>
      </IcNavigationGroup>
      <IcNavigationGroup slot="primary-navigation" label="Navigation group 3">
        <IcNavigationItem label="Navigation 5" href="/">
          <IcBadge label="1" slot="badge" variant="light" position="far" />
          <ReusableIcon />
        </IcNavigationItem>
        <IcNavigationItem label="Navigation 6" href="/">
          <ReusableIcon />
        </IcNavigationItem>
      </IcNavigationGroup>
      <IcNavigationGroup slot="primary-navigation" label="Navigation group 4">
        <IcNavigationItem label="Navigation 7" href="/">
          <ReusableIcon />
        </IcNavigationItem>
        <IcNavigationItem label="Navigation 8" href="/">
          <ReusableIcon />
        </IcNavigationItem>
      </IcNavigationGroup>
      <IcNavigationItem slot="primary-navigation" label="Navigation 9" href="/">
        <ReusableIcon />
        <IcBadge slot="badge" label="1" position="near" />
      </IcNavigationItem>
      <IcNavigationItem
        slot="primary-navigation"
        label="Navigation 10"
        href="/"
      >
        <ReusableIcon />
      </IcNavigationItem>
      <IcNavigationItem
        slot="secondary-navigation"
        label="Navigation 11"
        href="/"
        selected={true}
      >
        <ReusableIcon />
      </IcNavigationItem>
    </IcSideNavigation>
  );
};

export const ThemeDarkTopNav = (): ReactElement => {
  return (
    <IcTopNavigation status="Beta" version="v1.0.0" theme="dark">
      <IcNavigationGroup
        slot="navigation"
        label="Navigation group 1"
        expandable={true}
      >
        <IcNavigationItem label="Navigation 1" href="/" />
        <IcNavigationItem label="Navigation 2" href="/" />
      </IcNavigationGroup>
      <IcNavigationGroup
        slot="navigation"
        label="Navigation group 2"
        expandable={true}
      >
        <IcNavigationItem label="Navigation 3" href="/" />
        <IcNavigationItem label="Navigation 4" href="/" />
      </IcNavigationGroup>
      <IcNavigationGroup slot="navigation" label="Navigation group 3">
        <IcNavigationItem label="Navigation 5" href="/" />
        <IcNavigationItem label="Navigation 6" href="/" />
      </IcNavigationGroup>
      <IcNavigationGroup slot="navigation" label="Navigation group 4">
        <IcNavigationItem label="Navigation 7" href="/" />
        <IcNavigationItem label="Navigation 8" href="/" />
      </IcNavigationGroup>
      <IcNavigationItem slot="navigation" label="Navigation 9" href="/">
        <ReusableIcon />
        <IcBadge slot="badge" label="1" position="near" />
      </IcNavigationItem>
      <IcNavigationItem
        slot="navigation"
        label="Navigation 10"
        href="/"
        selected={true}
      >
        <ReusableIcon />
      </IcNavigationItem>
      <IcNavigationButton label="Button One" slot="buttons">
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
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z" />
        </SlottedSVG>
      </IcNavigationButton>
    </IcTopNavigation>
  );
};
