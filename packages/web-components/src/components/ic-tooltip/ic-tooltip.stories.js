import { html } from "lit-html";

const defaultArgs = {
  disableHover: false,
  maxLines: 3,
  placement: "bottom",
  label: "This is a description of the button",
  theme: "inherit",
};

export default {
  title: "Web Components/Tooltip",
  component: "ic-tooltip",
};

export const Default = {
  render: (args) =>
    html`<ic-tooltip
      label="This is a description of the button"
      target="test-button-default"
      id="ic-tooltip-test-button-default"
      ><button
        id="test-button-default"
        aria-describedby="ic-tooltip-test-button-default"
      >
        Default
      </button></ic-tooltip
    >`,

  name: "Default",
  height: "100px",
};

export const UsingExternalMethod = {
  render: (args) =>
    html`<script>
        let display = true;
        document
          .querySelector("#clickMe")
          .addEventListener("click", handleDisplay);
        const tooltip = document.querySelector("ic-tooltip");
        function handleDisplay() {
          tooltip.displayTooltip(display, display);
          display = !display;
        }
      </script>
      <button id="clickMe">Show tooltip</button>
      <ic-tooltip
        label="This is a description of the button"
        target="test-button-default"
        id="ic-tooltip-test-button-default"
        ><button
          id="test-button-default"
          aria-describedby="ic-tooltip-test-button-default"
        >
          Default
        </button></ic-tooltip
      >`,

  name: "Using external method",
  height: "100px",
};

export const DisabledHover = {
  render: (args) =>
    html`<ic-tooltip
      label="This shows 'Code' has been copied"
      target="test-button-disable-hover"
      id="ic-tooltip-test-button-disable-hover"
      disable-hover="true"
      ><button
        id="test-button-disable-hover"
        aria-labelledby="ic-tooltip-test-button-disable-hover"
        onclick="navigator.clipboard.writeText('Code')"
      >
        Show tooltip
      </button></ic-tooltip
    >`,

  name: "Disabled Hover",
  height: "100px",
};

export const TopPlacements = {
  render: (args) =>
    html` <div style="margin: 40px">
      <ic-tooltip
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
      </ic-tooltip>
      <ic-tooltip
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
      </ic-tooltip>
      <ic-tooltip
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
        </button></ic-tooltip
      >
    </div>`,

  name: "Top placements",
};

export const BottomPlacements = {
  render: (args) =>
    html` <div style="margin: 40px">
      <ic-tooltip
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
      </ic-tooltip>
      <ic-tooltip
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
      </ic-tooltip>
      <ic-tooltip
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
        </button></ic-tooltip
      >
    </div>`,

  name: "Bottom placements",
};

export const RightPlacements = {
  render: (args) =>
    html` <div style="margin: 40px">
      <ic-tooltip
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
      </ic-tooltip>
      <ic-tooltip
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
      </ic-tooltip>
      <ic-tooltip
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
        </button></ic-tooltip
      >
    </div>`,

  name: "Right placements",
};

export const LeftPlacements = {
  render: (args) =>
    html` <div style="margin-left: 400px">
      <ic-tooltip
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
      </ic-tooltip>
      <ic-tooltip
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
      </ic-tooltip>
      <ic-tooltip
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
        </button></ic-tooltip
      >
    </div>`,

  name: "Left placements",
};

export const Truncation = {
  render: (args) =>
    html`<ic-tooltip
      label="This is a body of text that is truncated to three lines within a tooltip. It has been truncated based on the max-lines property. The number of lines in the text is clamped to the number passed through the max-lines property."
      target="test-button-truncation"
      max-lines="3"
      id="ic-tooltip-test-button-truncation"
      ><button
        id="test-button-truncation"
        aria-describedby="ic-tooltip-test-button-truncation"
      >
        Default
      </button></ic-tooltip
    >`,

  name: "Truncation",
  height: "100px",
};

export const DarkBackground = {
  render: (args) =>
    html`<div style="height: 100px;background-color:#333333;">
      <ic-tooltip
        label="This is a description of the button"
        id="ic-tooltip-test-button-dark"
        target="test-button-dark"
      >
        <button
          id="test-button-dark"
          aria-describedby="ic-tooltip-test-button-dark"
        >
          Default
        </button>
      </ic-tooltip>
    </div>`,

  name: "Dark background",
};

export const Playground = {
  render: (args) =>
    html`<div style="margin: 250px">
      <ic-tooltip
        label=${args.label}
        placement=${args.placement}
        max-lines=${args.maxLines}
        disable-hover=${args.disableHover}
        id="ic-tooltip-test-button-default"
        target="button-id"
        theme=${args.theme}
      >
        <button
          id="button-id"
          aria-describedby="ic-tooltip-test-button-default"
        >
          Button 1
        </button>
      </ic-tooltip>
    </div> `,

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
