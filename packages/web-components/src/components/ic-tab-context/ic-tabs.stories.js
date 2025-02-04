import { html } from "lit-html";

const defaultArgs = {
  activationType: "automatic",
  disabled: false,
  inline: false,
  groupLabel: "Example tab group",
  theme: "inherit",
  monochrome: false,
};

export default {
  title: "Web Components/Tabs",
  component: "ic-tab-context",
};

export const Default = {
  render: () =>
    html`<ic-tab-context>
      <ic-tab-group label="Example tab group">
        <ic-tab>One</ic-tab>
        <ic-tab>Two</ic-tab>
        <ic-tab>Three</ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
    </ic-tab-context>`,

  name: "Default",
};

export const WithIcons = {
  render: () =>
    html` <ic-tab-context>
      <ic-tab-group label="Example tab group">
        <ic-tab
          >One
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg
        ></ic-tab>
        <ic-tab
          >Two
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"
            /></svg
        ></ic-tab>
        <ic-tab
          >Three
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path
              d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
            />
          </svg>
        </ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
    </ic-tab-context>`,

  name: "With icons",
};

export const Disabled = {
  render: () =>
    html` <ic-tab-context>
      <ic-tab-group label="Example tab group">
        <ic-tab>One</ic-tab>
        <ic-tab disabled>Two</ic-tab>
        <ic-tab>Three</ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
    </ic-tab-context>`,

  name: "Disabled",
};

export const Inline = {
  render: () =>
    html` <ic-tab-context>
      <ic-tab-group label="Example tab group" inline>
        <ic-tab>One</ic-tab>
        <ic-tab>Two</ic-tab>
        <ic-tab>Three</ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
    </ic-tab-context>`,

  name: "Inline",
};

export const ManualActivation = {
  render: () =>
    html` <ic-tab-context activation-type="manual">
      <ic-tab-group label="Example tab group">
        <ic-tab>One</ic-tab>
        <ic-tab>Two</ic-tab>
        <ic-tab>Three</ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
    </ic-tab-context>`,

  name: "Manual activation",
};

export const Responsive = {
  render: () => html`
    <ic-tab-context>
      <ic-tab-group label="Example tab group">
        <ic-tab>One</ic-tab>
        <ic-tab>Two</ic-tab>
        <ic-tab>Three</ic-tab>
        <ic-tab>Four</ic-tab>
        <ic-tab>Five</ic-tab>
        <ic-tab>Six</ic-tab>
        <ic-tab>Seven</ic-tab>
        <ic-tab>Eight</ic-tab>
        <ic-tab>Nine</ic-tab>
        <ic-tab>Ten</ic-tab>
        <ic-tab>Eleven</ic-tab>
        <ic-tab>Twelve</ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Tab One</ic-tab-panel>
      <ic-tab-panel>Tab Two</ic-tab-panel>
      <ic-tab-panel>Tab Three</ic-tab-panel>
      <ic-tab-panel>Tab Four</ic-tab-panel>
      <ic-tab-panel>Tab Five</ic-tab-panel>
      <ic-tab-panel>Tab Six</ic-tab-panel>
      <ic-tab-panel>Tab Seven</ic-tab-panel>
      <ic-tab-panel>Tab Eight</ic-tab-panel>
      <ic-tab-panel>Tab Nine</ic-tab-panel>
      <ic-tab-panel>Tab Ten</ic-tab-panel>
      <ic-tab-panel>Tab Eleven</ic-tab-panel>
      <ic-tab-panel>Tab Twelve</ic-tab-panel>
    </ic-tab-context>
  `,

  name: "Responsive",
};

export const NestedTabs = {
  render: () =>
    html`<ic-tab-context id="main">
        <ic-tab-group label="Example tab group">
          <ic-tab>Outer One</ic-tab>
          <ic-tab>Outer Two</ic-tab>
          <ic-tab>Outer Three</ic-tab>
        </ic-tab-group>
        <ic-tab-panel>
          <ic-tab-context context-id="context-nested" id="nested">
            <ic-tab-group label="Example tab group">
              <ic-tab>Nested One</ic-tab>
              <ic-tab>Nested Two</ic-tab>
              <ic-tab>Nested Three</ic-tab>
            </ic-tab-group>
            <ic-tab-panel>Nested Tab One</ic-tab-panel>
            <ic-tab-panel>Nested Tab Two</ic-tab-panel>
            <ic-tab-panel>Nested Tab Three</ic-tab-panel>
          </ic-tab-context>
        </ic-tab-panel>
        <ic-tab-panel>Outer Tab Two</ic-tab-panel>
        <ic-tab-panel>Outer Tab Three</ic-tab-panel>
      </ic-tab-context>
      <script>
        const main = document.querySelector("#main");
        const nested = document.querySelector("#nested");
        main.addEventListener("icTabSelect", () => console.log("main"));
        nested.addEventListener("icTabSelect", () => console.log("nested"));
      </script> `,

  name: "Nested tabs",
};

export const IcTabSelectEvent = {
  render: (args) =>
    html`<ic-tab-context>
        <ic-tab-group label="Example tab group">
          <ic-tab>One</ic-tab>
          <ic-tab>Two</ic-tab>
          <ic-tab>Three</ic-tab>
        </ic-tab-group>
        <ic-tab-panel>Tab One</ic-tab-panel>
        <ic-tab-panel>Tab Two</ic-tab-panel>
        <ic-tab-panel>Tab Three</ic-tab-panel>
      </ic-tab-context>
      <script>
        function handleIcTabSelect(ev) {
          console.log(ev.detail, "icTabSelect");
        }
        document
          .querySelector("ic-tab-context")
          .addEventListener("icTabSelect", handleIcTabSelect);
      </script>`,

  name: "icTabSelect event",
};

export const MinAndMaxContent = {
  render: () =>
    html`<div style="max-width:500px">
      <ic-tab-context>
        <ic-tab-group label="Example tab group">
          <ic-tab>Extremely long tab label made of plenty of words</ic-tab>
          <ic-tab>A</ic-tab>
          <ic-tab>Antidisestablishmentarianismbutmadeevenlonger</ic-tab>
        </ic-tab-group>
        <ic-tab-panel
          >Testing tab behaviour with lots of words in label</ic-tab-panel
        >
        <ic-tab-panel>Testing minimum label length</ic-tab-panel>
        <ic-tab-panel
          >Testing tab behaviour with one really long word in
          label</ic-tab-panel
        >
      </ic-tab-context>
    </div>`,

  name: "Min and max content",
};

export const Playground = {
  render: (args) =>
    html`<div>
      <ic-tab-context
        activation-type=${args.activationType}
        theme=${args.theme}
        monochrome=${args.monochrome}
      >
        <ic-tab-group label=${args.groupLabel} inline=${args.inline}>
          <ic-tab disabled=${args.disabled}>One</ic-tab>
          <ic-tab>
            Two
            <ic-badge
              label="1"
              slot="badge"
              position="inline"
              accessible-label="1 notification found"
            >
            </ic-badge>
          </ic-tab>
          <ic-tab>
            Three
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
            </svg>
          </ic-tab>
          <ic-tab>Four</ic-tab>
        </ic-tab-group>
        <ic-tab-panel>Tab One</ic-tab-panel>
        <ic-tab-panel>Tab Two</ic-tab-panel>
        <ic-tab-panel>Tab Three</ic-tab-panel>
        <ic-tab-panel>Tab Four</ic-tab-panel>
      </ic-tab-context>
    </div>`,

  args: defaultArgs,

  argTypes: {
    activationType: {
      options: ["automatic", "manual"],

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
