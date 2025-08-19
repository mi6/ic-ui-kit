/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState } from 'react';
import { IcButton, IcSwitch, IcTooltip, IcTypography } from "../components";

const defaultArgs = {
  disableClick: false,
  disableHover: false,
  maxLines: 3,
  placement: "bottom",
  label: "This is a description of the button",
  theme: "inherit",
  fixedPositioning: false,
};

export default {
  title: "Tooltip",
  component: IcTooltip,
};

export const Default = {
  render: () => (
    <IcTooltip
      label="This is a description of the button"
      id="ic-tooltip-test-button-default"
      target="test-button-default"
    >
      <button
        aria-describedby="ic-tooltip-test-button-default"
        id="test-button-default"
      >
        Default
      </button>
    </IcTooltip>
  ),

  name: "Default",
};

export const UsingExternalMethod = {
  render: () => {
    let display = true;

    function func() {
      document.querySelector("ic-tooltip").displayTooltip(display, true);
      display = !display;
    }

    return (
      <>
        <button onClick={func}>Show tooltip</button>
        <IcTooltip
          label="This is a description of the button"
          id="ic-tooltip-test-button-default"
          target="test-button-default"
        >
          <button
            aria-describedby="ic-tooltip-test-button-default"
            id="test-button-default"
          >
            Default
          </button>
        </IcTooltip>
      </>
    );
  },

  name: "Using external method",
};

export const DisabledHover = {
  render: () => (
    <IcTooltip
      label="This shows 'Code' has been copied"
      id="ic-tooltip-test-button-disable-hover"
      target="test-button-disable-hover"
      disableHover
    >
      <button
        aria-describedby="ic-tooltip-test-button-disable-hover"
        id="test-button-disable-hover"
        onClick={() => navigator.clipboard.writeText("Code")}
      >
        Show tooltip
      </button>
    </IcTooltip>
  ),

  name: "Disabled Hover",
};

export const TopPlacements = {
  render: () => (
    <div
      style={{
        margin: "40px",
      }}
    >
      <IcTooltip
        placement="top-start"
        label="This is a description of the button"
        id="ic-tooltip-test-button-top-start"
        target="test-button-top-start"
      >
        <button
          id="test-button-top-start"
          aria-describedby="ic-tooltip-test-button-top-start"
        >
          Top start
        </button>
      </IcTooltip>
      <IcTooltip
        placement="top"
        label="This is a description of the button"
        id="ic-tooltip-test-button-top"
        target="test-button-top"
      >
        <button
          id="test-button-top"
          aria-describedby="ic-tooltip-test-button-top"
        >
          Top
        </button>
      </IcTooltip>
      <IcTooltip
        placement="top-end"
        label="This is a description of the button"
        id="ic-tooltip-test-button-top-end"
        target="test-button-top-end"
      >
        <button
          id="test-button-top-end"
          aria-describedby="ic-tooltip-test-button-top-end"
        >
          Top end
        </button>
      </IcTooltip>
    </div>
  ),

  name: "Top placements",
};

export const BottomPlacements = {
  render: () => (
    <div
      style={{
        margin: "40px",
      }}
    >
      <IcTooltip
        placement="bottom-start"
        label="This is a description of the button"
        id="ic-tooltip-test-button-bottom-start"
        target="test-button-bottom-start"
      >
        <button
          id="test-button-bottom-start"
          aria-describedby="ic-tooltip-test-button-bottom-start"
        >
          Bottom start
        </button>
      </IcTooltip>
      <IcTooltip
        placement="bottom"
        label="This is a description of the button"
        id="ic-tooltip-test-button-bottom"
        target="test-button-bottom"
      >
        <button
          id="test-button-bottom"
          aria-describedby="ic-tooltip-test-button-bottom"
        >
          Bottom
        </button>
      </IcTooltip>
      <IcTooltip
        placement="bottom-end"
        label="This is a description of the button"
        id="ic-tooltip-test-button-bottom-end"
        target="test-button-bottom-end"
      >
        <button
          id="test-button-bottom-end"
          aria-describedby="ic-tooltip-test-button-bottom-end"
        >
          Bottom end
        </button>
      </IcTooltip>
    </div>
  ),

  name: "Bottom placements",
};

export const RightPlacements = {
  render: () => (
    <div
      style={{
        margin: "40px",
      }}
    >
      <IcTooltip
        placement="right-start"
        label="This is a description of the button"
        id="ic-tooltip-test-button-right-start"
        target="test-button-right-start"
      >
        <button
          id="test-button-right-start"
          aria-describedby="ic-tooltip-test-button-right-start"
        >
          Right start
        </button>
      </IcTooltip>
      <IcTooltip
        placement="right"
        label="This is a description of the button"
        id="ic-tooltip-test-button-right"
        target="test-button-right"
      >
        <button
          id="test-button-right"
          aria-describedby="ic-tooltip-test-button-right"
        >
          Right
        </button>
      </IcTooltip>
      <IcTooltip
        placement="right-end"
        label="This is a description of the button"
        id="ic-tooltip-test-button-right-end"
        target="test-button-right-end"
      >
        <button
          id="test-button-right-end"
          aria-describedby="ic-tooltip-test-button-right-end"
        >
          Right end
        </button>
      </IcTooltip>
    </div>
  ),

  name: "Right placements",
};

export const LeftPlacements = {
  render: () => (
    <div
      style={{
        marginLeft: "40px",
      }}
    >
      <IcTooltip
        placement="left-start"
        label="This is a description of the button"
        id="ic-tooltip-test-button-left-start"
        target="test-button-left-start"
      >
        <button
          id="test-button-left-start"
          aria-describedby="ic-tooltip-test-button-left-start"
        >
          Left start
        </button>
      </IcTooltip>
      <IcTooltip
        placement="left"
        label="This is a description of the button"
        id="ic-tooltip-test-button-left"
        target="test-button-left"
      >
        <button
          id="test-button-left"
          aria-describedby="ic-tooltip-test-button-left"
        >
          Left
        </button>
      </IcTooltip>
      <IcTooltip
        placement="left-end"
        label="This is a description of the button"
        id="ic-tooltip-test-button-left-end"
        target="test-button-left-end"
      >
        <button
          id="test-button-left-end"
          aria-describedby="ic-tooltip-test-button-left-end"
        >
          Left end
        </button>
      </IcTooltip>
    </div>
  ),

  name: "Left placements",
};

export const Truncation = {
  render: () => (
    <IcTooltip
      label="This is a body of text that is truncated to three lines within a tooltip. It has been truncated based on the maxLines prop. The number of lines in the text is clamped to the number passed through the maxLines prop."
      maxLines={3}
      id="ic-tooltip-test-button-truncation"
      target="test-button-truncation"
    >
      <button
        aria-describedby="ic-tooltip-test-button-truncation"
        id="test-button-truncation"
      >
        Default
      </button>
    </IcTooltip>
  ),

  name: "Truncation",
};

export const DarkBackground = {
  render: () => (
    <div
      style={{
        backgroundColor: "#333333",
        height: "100px",
      }}
    >
      <IcTooltip
        label="This is a description of the button"
        id="ic-tooltip-test-button-dark"
        target="test-button-dark"
      >
        <button
          aria-describedby="ic-tooltip-test-button-dark"
          id="test-button-dark"
        >
          Default
        </button>
      </IcTooltip>
    </div>
  ),

  name: "Dark background",
};

export const ChangingLabel = {
  render: () => {
    const [label, setLabel] = React.useState("refresh");

    return (
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <IcButton
          aria-label={label}
          variant="icon-primary"
          onClick={() => setLabel("really long message")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </svg>
        </IcButton>
      </div>
    );
  },
  name: "Changing label",
}

export const PositioningStrategy = {
  render: () => {
    const [fixed, setFixed] = useState(false);

    return (
      <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--ic-space-xs)"
        }}
      >
        <IcTypography>Choose the tooltip position strategy and hover over the button to see it take effect</IcTypography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--ic-space-xs)",
            padding: "var(--ic-space-md)",
            border: "1px solid var(--ic-color-text-primary)",
            overflow: "hidden",
            width: "100px",
            position: "relative",
          }}
        >
          <IcTooltip
            label="This is a tooltip with a long label"
            id="ic-tooltip-test-button-1"
            target="button-1"
            fixedPositioning={fixed}
          >
            <IcButton aria-describedby="ic-tooltip-test-button-1" id="button-1">
              Button
            </IcButton>
          </IcTooltip>          
        </div>
        <IcSwitch label="Fixed tooltip positioning"
          onIcChange={(ev)=> setFixed(ev.detail.checked)}
        >
        </IcSwitch>
      </div>
    )   
  },
  name: "Positioning strategy",
};

export const Playground = {
  render: (args) => (
    <div
      style={{
        margin: "250px",
      }}
    >
      <IcTooltip
        label={args.label}
        placement={args.placement}
        maxLines={args.maxLines}
        disableClick={args.disableClick}
        disableHover={args.disableHover}
        id="ic-tooltip-test-button-default"
        target="button-id"
        theme={args.theme}
        fixedPositioning={args.fixedPositioning}
      >
        <button
          id="button-id"
          aria-describedby="ic-tooltip-test-button-default"
        >
          Button 1
        </button>
      </IcTooltip>
    </div>
  ),

  args: defaultArgs,

  argTypes: {
    placement: {
      options: [
        "bottom",
        "top-start",
        "top",
        "top-end",
        "right-start",
        "right",
        "right-end",
        "bottom-end",
        "bottom-start",
        "left-end",
        "left",
        "left-start",
      ],

      control: {
        type: "select",
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
