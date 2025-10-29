import { html } from "lit-html";

const defaultArgs = {
  disableHover: false,
  maxLines: 3,
  placement: "bottom",
  label: "This is a description of the button",
  theme: "inherit",
  fixedPositioning: false,
};

export default {
  title: "Web Components/Tooltip",
  component: "ic-tooltip",
};

export const Default = {
  render: (args) =>
    html`<ic-tooltip
        label="This is a description of the button"
        id="ic-tooltip-1"
        ><button aria-describedby="ic-tooltip-1">Default</button></ic-tooltip
      >
      <ic-tooltip label="This is a description of the button" id="ic-tooltip-2"
        ><ic-button aria-describedby="ic-tooltip-2">
          Default
        </ic-button></ic-tooltip
      > `,

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
        id="ic-tooltip-test-button-default"
        ><button aria-describedby="ic-tooltip-test-button-default">
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
      id="ic-tooltip-test-button-disable-hover"
      disable-hover="true"
      ><button
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
      >
        <button aria-describedby="ic-tooltip-test-button-top-start">
          Top start
        </button>
      </ic-tooltip>
      <ic-tooltip
        placement="top"
        label="This is a description of the button"
        id="ic-tooltip-test-button-top"
      >
        <button aria-describedby="ic-tooltip-test-button-top">Top</button>
      </ic-tooltip>
      <ic-tooltip
        placement="top-end"
        label="This is a description of the button"
        id="ic-tooltip-test-button-top-end"
      >
        <button aria-describedby="ic-tooltip-test-button-top-end">
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
      >
        <button aria-describedby="ic-tooltip-test-button-bottom-start">
          Bottom start
        </button>
      </ic-tooltip>
      <ic-tooltip
        placement="bottom"
        label="This is a description of the button"
        id="ic-tooltip-test-button-bottom"
      >
        <button aria-describedby="ic-tooltip-test-button-bottom">Bottom</button>
      </ic-tooltip>
      <ic-tooltip
        placement="bottom-end"
        label="This is a description of the button"
        id="ic-tooltip-test-button-bottom-end"
      >
        <button aria-describedby="ic-tooltip-test-button-bottom-end">
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
      >
        <button aria-describedby="ic-tooltip-test-button-right-start">
          Right start
        </button>
      </ic-tooltip>
      <ic-tooltip
        placement="right"
        label="This is a description of the button"
        id="ic-tooltip-test-button-right"
      >
        <button aria-describedby="ic-tooltip-test-button-right">Right</button>
      </ic-tooltip>
      <ic-tooltip
        placement="right-end"
        label="This is a description of the button"
        id="ic-tooltip-test-button-right-end"
      >
        <button aria-describedby="ic-tooltip-test-button-right-end">
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
      >
        <button aria-describedby="ic-tooltip-test-button-left-start">
          Left start
        </button>
      </ic-tooltip>
      <ic-tooltip
        placement="left"
        label="This is a description of the button"
        id="ic-tooltip-test-button-left"
      >
        <button aria-describedby="ic-tooltip-test-button-left">Left</button>
      </ic-tooltip>
      <ic-tooltip
        placement="left-end"
        label="This is a description of the button"
        id="ic-tooltip-test-button-left-end"
      >
        <button aria-describedby="ic-tooltip-test-button-left-end">
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
      max-lines="3"
      id="ic-tooltip-test-button-truncation"
      ><button aria-describedby="ic-tooltip-test-button-truncation">
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
      >
        <button aria-describedby="ic-tooltip-test-button-dark">Default</button>
      </ic-tooltip>
    </div>`,

  name: "Dark background",
};

export const ChangingLabel = {
  render: (args) =>
    html`<script>
        var icButton = document.querySelector("#testbutton");
        function handleClick() {
          icButton.ariaLabel = "really long message";
        }
      </script>
      <div style="display: flex;justify-content:flex-end;">
        <ic-button
          variant="icon-primary"
          aria-label="refresh"
          id="testbutton"
          onclick="handleClick()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
      </div> `,

  name: "Changing label",
};

export const PositioningStrategy = {
  render: (args) =>
    html` <script>
        var switchEl = document.querySelector("ic-switch");
        var tooltipEl = document.querySelector("ic-tooltip");
        switchEl.addEventListener("icChange", (ev) => {
          tooltipEl.fixedPositioning = ev.detail.checked;
        });
      </script>
      <div style="display:flex; flex-direction:column; gap:var(--ic-space-xs)">
        <ic-typography>
          Toggle the fixed positioning switch and hover over the button to see
          it take effect
        </ic-typography>
        <div
          style="display:flex; flex-direction:column; gap:var(--ic-space-xs); padding:var(--ic-space-md); border:1px solid var(--ic-color-text-primary); overflow:hidden; width:100px; position:relative"
        >
          <ic-tooltip
            label="This is a tooltip with a long label"
            id="ic-tooltip-test-button-1"
          >
            <ic-button aria-describedby="ic-tooltip-test-button-1">
              Button
            </ic-button>
          </ic-tooltip>
        </div>
        <ic-switch label="Fixed tooltip positioning"></ic-switch>
      </div>`,

  name: "Positioning strategy",
};

export const Playground = {
  render: (args) =>
    html`<div style="margin: 250px">
      <ic-tooltip
        label=${args.label}
        placement=${args.placement}
        max-lines=${args.maxLines}
        disable-hover=${args.disableHover}
        id="ic-tooltip-1"
        theme=${args.theme}
        fixed-positioning=${args.fixedPositioning}
      >
        <button aria-describedby="ic-tooltip-1">Native</button>
      </ic-tooltip>
      <ic-tooltip
        label=${args.label}
        placement=${args.placement}
        max-lines=${args.maxLines}
        disable-hover=${args.disableHover}
        id="ic-tooltip-2"
        theme=${args.theme}
        fixed-positioning=${args.fixedPositioning}
      >
        <ic-button aria-describedby="ic-tooltip-2"> ICDS </ic-button>
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
