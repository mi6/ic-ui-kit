/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { IcStatusTag } from "../components";

const defaultArgs = {
  announced: false,
  label: "Status tag label",
  size: "default",
  status: "neutral",
  variant: "filled",
};

export default {
  title: "Status tag",
  component: IcStatusTag,
};

export const Neutral = {
  render: () => (
    <>
      <IcStatusTag label="Neutral" />
      <IcStatusTag label="Neutral" variant="outlined" />
    </>
  ),
  name: "Neutral",
};

export const Success = {
  render: () => (
    <>
          <IcStatusTag label="Success" status="success" />
          <IcStatusTag label="Success" status="success" variant="outlined" />
    </>
  ),
  name: "Success",
};

export const Warning = {
  render: () => (
    <>
          <IcStatusTag label="Warning" status="warning" />
          <IcStatusTag label="Warning" status="warning" variant="outlined" />
    </>
  ),
  name: "Warning",
};

export const Danger = {
  render: () => (
    <>
          <IcStatusTag label="Danger" status="danger" />
          <IcStatusTag label="Danger" status="danger" variant="outlined" />
    </>
  ),
  name: "Danger",
};

export const Size = {
  render: () => (
    <>
          <IcStatusTag label="Small" size="small" />
    <IcStatusTag label="Small" variant="outlined" size="small" />
    <IcStatusTag label="default" size="default" />
    <IcStatusTag label="default" variant="outlined" size="default" />
    <IcStatusTag label="large" size="large" />
    <IcStatusTag label="large" variant="outlined" size="large" />
    </>
  ),
  name: "Size",
};

export const DeprecatedSmall = {
  render: () => (
    <>
          <IcStatusTag label="Small" small />
          <IcStatusTag label="Small" variant="outlined" small />
    </>
  ),
  name: "Deprecated - small",
};

export const DeprecatedAppearance = {
  render: () => (
    <>
          <IcStatusTag label="Neutral" />
          <IcStatusTag label="Neutral" appearance="outlined" />
    </>
  ),
  name: "Deprecated - appearance",
};

export const Playground = {
  render: (args) => (
    <IcStatusTag
      label={args.label}
      size={args.size}
      status={args.status}
      variant={args.variant}
      announced={args.announced}
    ></IcStatusTag>
  ),

  args: defaultArgs,

  argTypes: {
    size: {
      options: ["default", "small", "large"],

      control: {
        type: "inline-radio",
      },
    },

    status: {
      options: ["neutral", "success", "warning", "danger"],

      control: {
        type: "select",
      },
    },

    variant: {
      options: ["filled", "outlined"],

      control: {
        type: "inline-radio",
      },
    },
  },

  name: "Playground",
};
