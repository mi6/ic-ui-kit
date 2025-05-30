/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useRef } from 'react';
import { IcLink, IcTypography, IcSectionContainer, IcButton } from "../components";
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
  href: "/",
  target: "",
  download: false,
  theme: "inherit",
  monochrome: false,
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
    <IcLink href="/" target="_blank">
      This is a link
    </IcLink>
  ),

  name: "With icon",
};

const Download = () => {
  const linkEl = useRef();
  const handleTrue = () => {
    linkEl.current.download = true;
  };
  const handleFalse = () => {
    linkEl.current.download = false;
  };
  const handleReset = () => {
    linkEl.current.download = "downloaded-file";
  };
  return (
    <>
      <IcLink href="/" download="downloaded-file" ref={linkEl}>
        Download File
      </IcLink>
      <br />
      <br />
      <IcButton onClick={() => handleTrue()}>Set to true</IcButton>
      <IcButton onClick={() => handleFalse()}>Set to false</IcButton>
      <IcButton onClick={() => handleReset()}>Set to normal</IcButton>
    </>
  );
};

export const DownloadLink = {
  render: () => <Download />,

  name: "Download Link",
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
    <IcLink
      href={args.href}
      target={args.target}
      download={args.download === true}
      theme={args.theme}
      monochrome={args.monochrome}
    >
      This is a link
    </IcLink>
  ),

  args: defaultArgs,

  argTypes: {
    target: {
      options: ["_blank", "_self", "_parent", "_top", ""],

      control: {
        type: "radio",
      },
    },

    theme: {
      options: ["inherit", "light", "dark"],

      control: {
        type: "inline-radio",
      },
    },
  },

  name: "Playground",
};
