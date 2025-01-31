import { html } from "lit-html";

const defaultArgs = {
  label: "Custom Switch",
  helperText: "Custom helper text",
  disabled: false,
  checked: false,
  hideLabel: false,
  showState: false,
  size: "default",
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

export const State = {
  render: () =>
    html`<div style="display:flex; justify-content: center">
      <ic-switch show-state="true" label="Label"></ic-switch>
    </div>`,

  name: "State",
};

export const Checked = {
  render: () => html`
    <ic-switch checked="true" label="Label" show-state="true"></ic-switch>
  `,

  name: "Checked",
};

export const Small = {
  render: () => html`
    <ic-switch size="small" show-state="true" label="Label"></ic-switch>
  `,

  name: "Small",
};

export const DeprecatedSmall = {
  render: () => html`
    <ic-switch small show-state="true" label="Label"></ic-switch>
  `,
  name: "Deprecated - small",
};

export const Disabled = {
  render: () => html` <ic-switch disabled="true" label="Label"></ic-switch> `,
  name: "Disabled",
};

export const DisabledNameAndState = {
  render: () => html`
    <ic-switch disabled="true" show-state="true" label="Label"></ic-switch>
  `,

  name: "Disabled, name and state",
};

export const DisabledNameStateAndChecked = {
  render: () => html`
    <ic-switch
      disabled="true"
      show-state="true"
      label="Label"
      checked="true"
    ></ic-switch>
  `,

  name: "Disabled, name, state and checked",
};

export const AriaLabel = {
  render: () => html`
    <ic-switch label="Custom label" hide-label="true"></ic-switch>
  `,
  name: "ARIA label",
};

export const HelperText = {
  render: () =>
    html` <ic-switch label="Label" helper-text="Helper Text"></ic-switch>`,
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
      show-state=${args.showState}
      label=${args.label}
      checked=${args.checked}
      hide-label=${args.hideLabel}
      helper-text=${args.helperText}
      size=${args.size}
    ></ic-switch>`,

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
