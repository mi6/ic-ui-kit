import { html } from "lit-html";

const defaultArgs = {
  label: "Custom Switch",
  helperText: "Custom helper text",
  disabled: false,
  checked: false,
  hideLabel: false,
  size: "medium",
  theme: "inherit",
};

export default {
  title: "Web Components/Switch",
  component: "ic-switch",
};

export const Default = {
  render: () => html` <ic-switch label="Label"></ic-switch> `,
  name: "Default",
};

export const Name = {
  render: () => html` <ic-switch label="Label"></ic-switch> `,
  name: "Name",
};

export const Checked = {
  render: () => html` <ic-switch checked="true" label="Label"></ic-switch> `,
  name: "Checked",
};

export const Small = {
  render: () => html` <ic-switch size="small" label="Label"></ic-switch> `,
  name: "Small",
};

export const Disabled = {
  render: () => html` <ic-switch disabled="true" label="Label"></ic-switch> `,
  name: "Disabled",
};

export const DisabledAndName = {
  render: () => html` <ic-switch disabled="true" label="Label"></ic-switch> `,
  name: "Disabled and name",
};

export const DisabledNameAndChecked = {
  render: () => html`
    <ic-switch disabled="true" label="Label" checked="true"></ic-switch>
  `,

  name: "Disabled, name and checked",
};

export const AriaLabel = {
  render: () => html`
    <ic-switch label="Custom label" hide-label="true"></ic-switch>
  `,
  name: "ARIA label",
};

export const HelperText = {
  render: () =>
    html`<ic-switch label="Label" helper-text="Helper Text"></ic-switch>
      <ic-switch label="Label">
        <ic-typography variant="caption" slot="helper-text">
          <span>
            Slotted helper text with a <ic-link href="#">link</ic-link>
          </span>
        </ic-typography>
      </ic-switch>`,
  name: "Helper text",
};

export const RightAdornment = {
  render: () =>
    html` <ic-switch label="Right adornment">
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
        />
      </svg>
    </ic-switch>`,

  name: "Right adornment",
};

export const DefaultInForm = {
  render: () =>
    html` <form id="form" aria-label="test form">
      <ic-switch id="switch" label="custom label" hide-label="true"></ic-switch>
      <br />
      <br />
      <input type="submit" value="Submit" />
      <input type="reset" value="Reset" />
      <form>
        <script>
          const tcForm = document.getElementById("form");
          tcForm.addEventListener("submit", handleSubmit);
          function handleSubmit(e) {
            e.preventDefault();
            var data = "HTML Form Data (name: value): \\n";
            for (const element of document.getElementById("form").elements) {
              data += element.name + ": " + element.value + "\\n";
            }
            alert(data);
          }
        </script>
      </form>
    </form>`,

  name: "Default in form",
};

export const Playground = {
  render: (args) =>
    html`<ic-switch
      disabled=${args.disabled}
      label=${args.label}
      checked=${args.checked}
      hide-label=${args.hideLabel}
      helper-text=${args.helperText}
      size=${args.size}
      theme=${args.theme}
    ></ic-switch>`,

  args: defaultArgs,

  argTypes: {
    size: {
      options: ["medium", "small"],

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
