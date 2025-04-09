/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import { IcButton, IcSkipLink, IcTopNavigation } from "../components";
import { SlottedSVG } from "../react-component-lib/slottedSVG";

export default {
  title: "Skip link",
  component: IcSkipLink,
};

export const Default = {
  render: () => (
    <>
      <IcSkipLink target="#page-content" />
      <IcTopNavigation app-title="Application Name">
        <SlottedSVG
          slot="app-icon"
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
        </SlottedSVG>
      </IcTopNavigation>
      <main id="page-content">Target element</main>
      <IcButton>Should receive next focus</IcButton>
    </>
  ),
  name: "Default",
};

export const FullWidth = {
  render: () => (
    <>
      <IcSkipLink target="#page-content" fullWidth />
      <IcTopNavigation app-title="Application Name">
        <SlottedSVG
          slot="app-icon"
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
        </SlottedSVG>
      </IcTopNavigation>
      <main id="page-content">Target element</main>
      <IcButton>Should receive next focus</IcButton>
    </>
  ),
  name: "Full width",
};

export const Inline = {
  render: () => (
    <>
      <IcSkipLink target="#page-content" />
      <IcTopNavigation app-title="Application Name">
        <SlottedSVG
          slot="app-icon"
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
        </SlottedSVG>
      </IcTopNavigation>
      <br/>
      <br/>
      <br/>
      <main id="page-content">Target element</main>
      <IcSkipLink target="#next-content" inline />
      <br/>
      <br/>
      <br/>
      <main id="next-content">Target element</main>
      <IcButton>Should receive next focus</IcButton>
    </>
  ),
  name: "Inline",
};

export const HideBackground = {
  render: () => (
    <>
      <IcSkipLink target="#page-content" transparentBackground />
      <IcTopNavigation app-title="Application Name">
        <SlottedSVG
          slot="app-icon"
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
        </SlottedSVG>
      </IcTopNavigation>
      <main id="page-content">Target element</main>
      <IcButton>Should receive next focus</IcButton>
    </>
  ),
  name: "Hide background",
};

const defaultArgs = {
  fullWidth: false,
  inline: false,
  label: "Skip to main content",
  monochrome: false,
  target: "#",
  theme: "inherit",
  transparentBackground: false,
};

export const Playground = {
  render: (args) => (
    <>
      <IcSkipLink 
        fullWidth={args.fullWidth}
        inline={args.inline}
        label={args.label}
        monochrome={args.monochrome}
        target={args.target}
        theme={args.theme}
        transparentBackground={args.transparentBackground}
      />
      <IcTopNavigation app-title="Application Name">
        <SlottedSVG
          slot="app-icon"
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
        </SlottedSVG>
      </IcTopNavigation>
      <main id={args.target.replace("#", "")}>Target element</main>
      <IcButton>Should receive next focus</IcButton>
    </>
  ),
  args: defaultArgs,
  argTypes: {
    theme: {
      options: ["inherit", "light", "dark"],
      control: { type: "inline-radio" },
    },
  },
  name: "Playground"
};
