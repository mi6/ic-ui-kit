/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from "react";
import { IcSwitch, IcButton } from "../components";

const defaultArgs = {
  label: "Custom Switch",
  helperText: "Custom helper text",
  disabled: false,
  checked: false,
  hideLabel: false,
  showState: false,
  size: "default",
};

const Controlled = () => {
  const [checked, setChecked] = useState(true);
  const defaultButtonClickHandler = () => {
    setChecked(false);
  };
  const differentButtonClickHandler = () => {
    setChecked(true);
  };
  return (
    <>
      <IcSwitch checked={checked} label="Label" />
      <IcButton variant="primary" onClick={defaultButtonClickHandler}>
        Unchecked
      </IcButton>
      <IcButton variant="primary" onClick={differentButtonClickHandler}>
        Checked
      </IcButton>
    </>
  );
};

export default {
  title: "Switch",
  component: IcSwitch,
};

export const Default = {
  render: () => <IcSwitch label="Label" />,
  name: "Default",
};

export const Name = {
  render: () => <IcSwitch label="Label" />,
  name: "Name",
};

export const State = {
  render: () => <IcSwitch showState label="Label" />,
  name: "State",
};

export const Checked = {
  render: () => <IcSwitch checked showState label="Label" />,
  name: "Checked",
};

export const CheckedUpdated = {
  render: () => <Controlled />,
  name: "Checked updated",
};

export const SizeSmall = {
  render: () => <IcSwitch size="small" showState label="Label" />,
  name: "Size small",
};

export const DeprecatedSmall = {
  render: () => <IcSwitch small showState label="Label" />,
  name: "Deprecated - small",
};

export const Disabled = {
  render: () => <IcSwitch disabled label="Label" />,
  name: "Disabled",
};

export const DisabledNameAndState = {
  render: () => <IcSwitch disabled showState label="Label" />,
  name: "Disabled, name and state",
};

export const DisabledNameStateAndChecked = {
  render: () => <IcSwitch disabled showState label="Label" checked />,
  name: "Disabled, name, state and checked",
};

export const AriaLabel = {
  render: () => <IcSwitch label="Custom label" />,
  name: "ARIA label",
};

export const RightAdornment = {
  render: () => (
    <IcSwitch label="Right adornment">
      <svg
        slot="right-adornment"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z"
          fill="black"
        />
      </svg>
    </IcSwitch>
  ),

  name: "Right adornment",
};

export const HelperText = {
  render: () => (
    <IcSwitch label="Helper text" helperText="This is some helper text" />
  ),
  name: "Helper text",
};

export const Playground = {
  render: (args) => (
    <IcSwitch
      disabled={args.disabled}
      show-state={args.showState}
      label={args.label}
      checked={args.checked}
      hide-label={args.hideLabel}
      helper-text={args.helperText}
      size={args.size}
    ></IcSwitch>
  ),

  args: defaultArgs,

  argTypes: {
    size: {
      options: ["default", "small"],

      control: {
        type: "inline-radio",
      },
    },
  },

  name: "Playground",
};
