/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { IcStatusTag } from "../components";

const defaultArgs = {
  announced: false,
  label: "Status tag label",
  size: "medium",
  status: "neutral",
  variant: "filled",
  theme: "inherit",
  uppercase: true,
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

export const LetterCase = {
  render: () => (
    <>
    <IcStatusTag label="Uppercase status tag"></IcStatusTag>
    <IcStatusTag label="Uppercase status tag" variant="outlined"></IcStatusTag>
    <IcStatusTag label="Sentence case status tag" uppercase="false"></IcStatusTag>
    <IcStatusTag label="Sentence case status tag" variant="outlined" uppercase="false"></IcStatusTag>
    </>
  ),
  name: "Letter case",
};

export const Size = {
  render: () => (
    <>
          <IcStatusTag label="Small" size="small" />
    <IcStatusTag label="Small" variant="outlined" size="small" />
    <IcStatusTag label="Medium" size="medium" />
    <IcStatusTag label="Medium" variant="outlined" size="medium" />
    <IcStatusTag label="large" size="large" />
    <IcStatusTag label="large" variant="outlined" size="large" />
    </>
  ),
  name: "Size",
};

export const Playground = {
  render: (args) => (
    <IcStatusTag
      label={args.label}
      size={args.size}
      status={args.status}
      variant={args.variant}
      announced={args.announced}
      theme={args.theme}
      uppercase={args.uppercase}
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

    theme: {
      options: ["inherit", "light", "dark"],

      control: {
        type: "inline-radio",
      },
    },
  },

  name: "Playground",
};
