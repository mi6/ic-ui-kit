/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { IcLink, IcTypography, IcSectionContainer } from "../components";
import { NavLink, MemoryRouter, Route, Routes } from "react-router-dom";

const HomePage = () => (
  <IcSectionContainer>
    <IcTypography variant="h1">Hi there!</IcTypography>
    <IcTypography>
      This example is demonstrating the link component with React Router
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

const defaultArgs = {
  appearance: "default",
  href: "/",
  target: "",
  download: false,
};

export default {
  title: "Link",
  component: IcLink,
};

export const Default = {
  render: () => <IcLink href="/">This is a link</IcLink>,
  name: "Default",
  href: "/",
};

export const WithIcon = {
  render: () => (
    <IcLink href="/" showIcon>
      This is a link
    </IcLink>
  ),

  name: "With icon",
};

export const Dark = {
  render: () => (
    <IcLink href="/" appearance="dark" showIcon>
      This is a link
    </IcLink>
  ),

  name: "Dark",
};

export const Light = {
  render: () => (
    <IcLink href="/" appearance="light" showIcon>
      This is a link
    </IcLink>
  ),

  name: "Light",

  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const WithReactRouter = {
  render: () => (
    <>
      <IcLink style={{ paddingRight: "var(--ic-space-xs)" }}>
      <NavLink to="/" slot="router-item">
        Home
      </NavLink>
    </IcLink>
    <IcLink>
      <NavLink to="/daily-tippers" slot="router-item">
        Daily Tippers
      </NavLink>
    </IcLink>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/daily-tippers" element={<DailyTippers />} />
    </Routes>
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

export const Playground = {
  render: (args) => (
    <div
      style={{
        backgroundColor: args.appearance == "light" ? "black" : "",
      }}
    >
      <IcLink
        href={args.href}
        appearance={args.appearance}
        target={args.target}
        download={args.download === true}
      >
        This is a link
      </IcLink>
    </div>
  ),

  args: defaultArgs,

  argTypes: {
    appearance: {
      options: ["default", "light", "dark"],

      control: {
        type: "radio",
      },
    },

    target: {
      options: ["_blank", "_self", "_parent", "_top", ""],

      control: {
        type: "radio",
      },
    },
  },

  name: "Playground",
};
