import { html } from "lit-html";

const defaultArgs = {
  accessibleLabel: "",
  appearance: "default",
  disabled: false,
  fullWidth: false,
  iconPlacement: "left",
  loading: false,
  selectMethod: "manual",
  selectType: "single",
  size: "default",
  variant: "default",
  toggleAccessibleLabel: "",
  toggleAppearance: "default",
  toggleDisabled: false,
  toggleFullWidth: false,
  toggleIconPlacement: "left",
  label: "Toggle",
  toggleLoading: false,
  toggleSize: "default",
  toggleChecked: false,
  toggleVariant: "default",
};

export default {
  title: "Web Components/Toggle Button Group",
  component: "Toggle Button Group",
};

export const SelectType = {
  render: (args) => html`
    <span>Single and manual</span>
    <ic-toggle-button-group
      select-type="single"
      accessible-label="Single and manual select toggle group"
    >
      <ic-toggle-button label="First toggle"></ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>
    <br />
    <span>Single and auto</span>
    <ic-toggle-button-group
      select-method="auto"
      accessible-label="Single and auto select toggle group"
    >
      <ic-toggle-button label="First toggle"></ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>
    <br />
    <span>Multi and manual</span>
    <ic-toggle-button-group
      select-type="multi"
      accessible-label="Multi and manual select toggle group"
    >
      <ic-toggle-button label="First toggle"></ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>
  `,

  name: "Select type",
};

export const Sizes = {
  render: (args) => html`
    <span>Default</span>
    <ic-toggle-button-group
      label="Label for single and manual"
      accessible-label="Single and manual select toggle group"
    >
      <ic-toggle-button label="First toggle"></ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>
    <br />
    <span>Small</span>
    <ic-toggle-button-group
      size="small"
      accessible-label="Single and manual select toggle group"
    >
      <ic-toggle-button label="First toggle" size="small"></ic-toggle-button>
      <ic-toggle-button label="Second toggle" size="small"></ic-toggle-button>
      <ic-toggle-button label="Third toggle" size="small"></ic-toggle-button>
    </ic-toggle-button-group>
    <br />
    <span>Large</span>
    <ic-toggle-button-group
      size="large"
      accessible-label="Single and manual select toggle group"
    >
      <ic-toggle-button label="First toggle" size="large"></ic-toggle-button>
      <ic-toggle-button label="Second toggle" size="large"></ic-toggle-button>
      <ic-toggle-button label="Third toggle" size="large"></ic-toggle-button>
    </ic-toggle-button-group>
    <br />
    <span>Full width</span>
    <ic-toggle-button-group
      full-width="true"
      accessible-label="Single and manual select toggle group"
    >
      <ic-toggle-button
        label="First toggle"
        full-width="true"
      ></ic-toggle-button>
      <ic-toggle-button
        label="Second toggle"
        full-width="true"
      ></ic-toggle-button>
      <ic-toggle-button
        label="Third toggle"
        full-width="true"
      ></ic-toggle-button>
    </ic-toggle-button-group>
    <br />
    <span>Custom width</span>
    <ic-toggle-button-group
      style="width: 75%;"
      label="Label for single and manual"
      accessible-label="Single and manual select toggle group"
    >
      <ic-toggle-button
        label="First toggle"
        class="expand-toggle-group-child"
      ></ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>
    <br />
    <span>Large label</span>
    <ic-toggle-button-group
      style="width: 40%;"
      accessible-label="Single and manual select toggle group"
    >
      <ic-toggle-button label="Toggle"></ic-toggle-button>
      <ic-toggle-button
        label="Toggle with a very very long label"
      ></ic-toggle-button>
    </ic-toggle-button-group>
  `,

  name: "Sizes",
};

export const Appearance = {
  render: (args) =>
    html`<span>Light</span>
      <div
        style="background-color:#2c2f34; padding:6px 10px; width:fit-content"
      >
        <ic-toggle-button-group
          appearance="light"
          accessible-label="Single and manual select toggle group"
        >
          <ic-toggle-button
            label="First toggle"
            appearance="light"
          ></ic-toggle-button>
          <ic-toggle-button
            label="Second toggle"
            appearance="light"
          ></ic-toggle-button>
          <ic-toggle-button
            label="Third toggle"
            appearance="light"
          ></ic-toggle-button>
        </ic-toggle-button-group>
      </div>
      <br />
      <span>Dark</span>
      <ic-toggle-button-group
        appearance="dark"
        accessible-label="Single and manual select toggle group"
      >
        <ic-toggle-button
          label="First toggle"
          appearance="dark"
        ></ic-toggle-button>
        <ic-toggle-button
          label="Second toggle"
          appearance="dark"
        ></ic-toggle-button>
        <ic-toggle-button
          label="Third toggle"
          appearance="dark"
        ></ic-toggle-button>
      </ic-toggle-button-group> `,

  name: "Appearance",
};

export const Disabled = {
  render: (args) =>
    html`<span>Disabled</span>
      <ic-toggle-button-group
        disabled="true"
        accessible-label="Single and manual select toggle group"
      >
        <ic-toggle-button
          label="First toggle"
          disabled="true"
        ></ic-toggle-button>
        <ic-toggle-button
          label="Second toggle"
          disabled="true"
        ></ic-toggle-button>
        <ic-toggle-button
          label="Third toggle"
          disabled="true"
        ></ic-toggle-button>
      </ic-toggle-button-group>`,

  name: "Disabled",
};

export const Loading = {
  render: (args) =>
    html`<span>Loading default</span>
      <ic-toggle-button-group
        loading="true"
        accessible-label="Single and manual select toggle group"
      >
        <ic-toggle-button
          label="First toggle"
          loading="true"
        ></ic-toggle-button>
        <ic-toggle-button
          label="Second toggle"
          loading="true"
        ></ic-toggle-button>
        <ic-toggle-button
          label="Third toggle"
          loading="true"
        ></ic-toggle-button>
      </ic-toggle-button-group>
      <br />
      <span>Loading light</span>
      <div
        style="background-color:#2c2f34; padding:6px 10px; width:fit-content"
      >
        <ic-toggle-button-group
          loading="true"
          appearance="light"
          accessible-label="Single and manual select toggle group"
        >
          <ic-toggle-button
            label="First toggle"
            loading="true"
            appearance="light"
          ></ic-toggle-button>
          <ic-toggle-button
            label="Second toggle"
            loading="true"
            appearance="light"
          ></ic-toggle-button>
          <ic-toggle-button
            label="Third toggle"
            loading="true"
            appearance="light"
          ></ic-toggle-button>
        </ic-toggle-button-group>
      </div>
      <br />
      <span>Loading dark</span>
      <ic-toggle-button-group
        loading="true"
        appearance="dark"
        accessible-label="Single and manual select toggle group"
      >
        <ic-toggle-button
          label="First toggle"
          loading="true"
          appearance="dark"
        ></ic-toggle-button>
        <ic-toggle-button
          label="Second toggle"
          loading="true"
          appearance="dark"
        ></ic-toggle-button>
        <ic-toggle-button
          label="Third toggle"
          loading="true"
          appearance="dark"
        ></ic-toggle-button>
      </ic-toggle-button-group> `,

  name: "Loading",
};

export const WithIcons = {
  render: (args) =>
    html`<span>Icon only</span>
      <ic-toggle-button-group
        variant="icon"
        accessible-label="A group of buttons"
      >
        <ic-toggle-button variant="icon" accessible-label="refresh">
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
        </ic-toggle-button>
        <ic-toggle-button variant="icon" accessible-label="refresh">
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
        </ic-toggle-button>
      </ic-toggle-button-group>
      <br />
      <span>Tooltip placement</span>
      <ic-toggle-button-group
        variant="icon"
        accessible-label="A group of buttons"
        tooltip-placement="right"
      >
        <ic-toggle-button variant="icon" accessible-label="refresh">
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
        </ic-toggle-button>
        <ic-toggle-button variant="icon" accessible-label="refresh">
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
        </ic-toggle-button>
      </ic-toggle-button-group>
      <br />
      <span>Icon right</span>
      <ic-toggle-button-group
        icon-placement="right"
        accessible-label="Single and manual select toggle group"
      >
        <ic-toggle-button label="Toggle">
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
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-toggle-button>
        <ic-toggle-button label="Toggle">
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
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-toggle-button>
      </ic-toggle-button-group>
      <br />
      <span>Icon top</span>
      <ic-toggle-button-group
        icon-placement="top"
        accessible-label="Single and manual select toggle group"
      >
        <ic-toggle-button label="Toggle">
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
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-toggle-button>
        <ic-toggle-button label="Toggle">
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
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-toggle-button>
      </ic-toggle-button-group>
      <br />
      <span>Icon left</span>
      <ic-toggle-button-group
        icon-placement="left"
        accessible-label="Single and manual select toggle group"
      >
        <ic-toggle-button label="Toggle">
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
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-toggle-button>
        <ic-toggle-button label="Toggle">
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
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-toggle-button>
      </ic-toggle-button-group> `,

  name: "With icons",
};

const inlineRadioSelector = "inline-radio";

export const Playground = {
  render: (args) =>
    html`<ic-toggle-button-group
      accessible-label=${args.accessibleLabel}
      appearance=${args.appearance}
      disabled=${args.disabled}
      full-width=${args.fullWidth}
      icon-placement=${args.iconPlacement}
      loading=${args.loading}
      select-method=${args.selectMethod}
      select-type=${args.selectType}
      size=${args.size}
      variant=${args.variant}
    >
      <ic-toggle-button
        accessible-label=${args.toggleAccessibleLabel}
        appearance=${args.toggleAppearance}
        disabled=${args.toggleDisabled}
        full-width=${args.toggleFullWidth}
        icon-placement=${args.toggleIconPlacement}
        loading=${args.toggleLoading}
        size=${args.toggleSize}
        toggle-checked=${args.toggleChecked}
        variant=${args.toggleVariant}
        label=${args.label}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
          slot="icon"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>`,

  args: defaultArgs,

  argTypes: {
    appearance: {
      options: ["default", "dark", "light"],

      control: {
        type: "radio",
      },
    },

    iconPlacement: {
      options: ["left", "right", "top"],

      control: {
        type: "radio",
      },
    },

    selectMethod: {
      options: ["manual", "auto"],

      control: {
        type: inlineRadioSelector,
      },
    },

    selectType: {
      options: ["single", "multi"],

      control: {
        type: inlineRadioSelector,
      },
    },

    size: {
      options: ["default", "small", "large"],

      control: {
        type: "radio",
      },
    },

    variant: {
      options: ["default", "icon"],

      control: {
        type: inlineRadioSelector,
      },
    },

    toggleAppearance: {
      options: ["default", "dark", "light"],

      control: {
        type: "radio",
      },
    },

    toggleIconPlacement: {
      options: ["left", "right", "top"],

      control: {
        type: "radio",
      },
    },

    toggleSize: {
      options: ["default", "small", "large"],

      control: {
        type: "radio",
      },
    },

    toggleVariant: {
      options: ["default", "icon"],

      control: {
        type: inlineRadioSelector,
      },
    },
  },

  name: "Playground",
};
