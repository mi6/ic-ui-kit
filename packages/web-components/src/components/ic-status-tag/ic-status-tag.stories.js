import { html } from "lit-html";

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
  title: "Web Components/Status tag",
  component: "ic-status-tag",
};

export const Neutral = {
  render: () => html`
    <ic-status-tag label="Neutral"></ic-status-tag>
    <ic-status-tag label="Neutral" variant="outlined"></ic-status-tag>
  `,

  name: "Neutral",
};

export const Success = {
  render: () => html`
    <ic-status-tag label="Success" status="success"></ic-status-tag>
    <ic-status-tag
      label="Success"
      status="success"
      variant="outlined"
    ></ic-status-tag>
  `,

  name: "Success",
};

export const Warning = {
  render: () => html`
    <ic-status-tag label="Warning" status="warning"></ic-status-tag>
    <ic-status-tag
      label="Warning"
      status="warning"
      variant="outlined"
    ></ic-status-tag>
  `,

  name: "Warning",
};

export const Danger = {
  render: () => html`
    <ic-status-tag label="Danger" status="danger"></ic-status-tag>
    <ic-status-tag
      label="Danger"
      status="danger"
      variant="outlined"
    ></ic-status-tag>
  `,

  name: "Danger",
};

export const LetterCase = {
  render: () => html`
    <ic-status-tag label="Uppercase status tag"></ic-status-tag>
    <ic-status-tag
      label="Uppercase status tag"
      variant="outlined"
    ></ic-status-tag>
    <ic-status-tag
      label="Sentence case status tag"
      uppercase="false"
    ></ic-status-tag>
    <ic-status-tag
      label="Sentence case status tag"
      variant="outlined"
      uppercase="false"
    ></ic-status-tag>
  `,

  name: "Letter case",
};

export const Size = {
  render: () => html`
    <ic-status-tag label="Small" size="small"></ic-status-tag>
    <ic-status-tag
      label="Small"
      variant="outlined"
      size="small"
    ></ic-status-tag>
    <ic-status-tag label="Default" size="medium"></ic-status-tag>
    <ic-status-tag
      label="Default"
      variant="outlined"
      size="medium"
    ></ic-status-tag>
    <ic-status-tag label="Large" size="large"></ic-status-tag>
    <ic-status-tag
      label="Large"
      variant="outlined"
      size="large"
    ></ic-status-tag>
  `,

  name: "Size",
};

export const Announced = {
  render: () => html`
    <ic-status-tag
      label="Warning"
      status="warning"
      id="tag"
      announced="false"
    ></ic-status-tag>
    <br />
    <br />
    <ic-button variant="primary" size="small" onClick="onClick()" id="btn"
      >Toggle announced prop</ic-button
    >
    <script>
      const tag = document.getElementById("tag");
      const btn = document.getElementById("btn");
      btn.addEventListener("click", onClick);
      function onClick(e) {
        e.preventDefault();
        tag.announced
          ? ((tag.announced = "false"),
            (tag.status = "warning"),
            (tag.label = "Warning"))
          : ((tag.announced = "true"),
            (tag.status = "success"),
            (tag.label = "Success"));
      }
    </script>
  `,

  name: "Announced",
};

const inlineRadioSelector = "inline-radio";

export const Playground = {
  render: (args) =>
    html`<ic-status-tag
      label=${args.label}
      size=${args.size}
      status=${args.status}
      variant=${args.variant}
      announced=${args.announced}
      theme=${args.theme}
      uppercase=${args.uppercase}
    ></ic-status-tag>`,

  args: defaultArgs,

  argTypes: {
    size: {
      options: ["medium", "small", "large"],

      control: {
        type: inlineRadioSelector,
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
        type: inlineRadioSelector,
      },
    },

    theme: {
      options: ["inherit", "light", "dark"],

      control: {
        type: inlineRadioSelector,
      },
    },
  },

  name: "Playground",
};
