/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { IcClassificationBanner } from "../components";

const defaultArgs = {
  additionalSelectors: "",
  classification: "official",
  country: "uk",
  inline: true,
  upTo: false,
};

export default {
  title: "Classification banner",
  component: IcClassificationBanner,
};

export const Classifications = {
  render: () => (
    <>
          <IcClassificationBanner inline="true" />
    <IcClassificationBanner classification="official" inline="true" />
    <IcClassificationBanner classification="official-sensitive" inline="true" />
    <IcClassificationBanner classification="secret" inline="true" />
    <IcClassificationBanner classification="top-secret" inline="true" />
    </>
  ),
  name: "Classifications",
};

export const UpTo = {
  render: () => (
    <>
      <IcClassificationBanner inline="true" />
    <IcClassificationBanner
      classification="official"
      inline="true"
      up-to="true"
    />
    <IcClassificationBanner
      classification="official-sensitive"
      inline="true"
      up-to="true"
    />
    <IcClassificationBanner
      classification="secret"
      inline="true"
      up-to="true"
    />
    <IcClassificationBanner
      classification="top-secret"
      inline="true"
      up-to="true"
    />
    </>
  ),
  name: "Up to",
};

export const BottomOfPage = {
  render: () => <IcClassificationBanner classification="official" />,
  name: "Bottom of page",
};

export const Country = {
  render: () => (
    <>
      <IcClassificationBanner
      classification="official"
      inline="true"
      country="us"
    />
    <IcClassificationBanner
      classification="official"
      inline="true"
      country=""
    />
    </>
  ),
  name: "Country",
};

export const AdditionalSelectors = {
  render: () => (
    <IcClassificationBanner
      classification="official"
      inline="true"
      additional-selectors="UKIC"
    />
  ),
  name: "Additional selectors",
};

export const Playground = {
  render: (args) => (
    <IcClassificationBanner
      classification={args.classification}
      inline={args.inline}
      up-to={args.upTo}
      country={args.country}
      additional-selectors={args.additionalSelectors}
    ></IcClassificationBanner>
  ),

  args: defaultArgs,

  argTypes: {
    classification: {
      options: [
        "default",
        "official",
        "secret",
        "official-sensitive",
        "top-secret",
      ],

      control: {
        type: "select",
      },
    },
  },

  name: "Playground",
};
