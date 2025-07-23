import { html } from "lit-html";

export default {
  title: "Web Components/Text field",
  component: "ic-text-field",
};

const defaultArgs = {
  debounce: 0,
  disabled: false,
  fullWidth: false,
  helperText: "",
  hideCharCount: false,
  hideLabel: false,
  inputId: "ic-text-field-input-0",
  inputmode: "text",
  label: "Text Field",
  max: 0,
  maxCharacters: 0,
  maxCharactersMessage: "Custom max characters validation message",
  maxMessage: "Custom max validation message",
  min: 0,
  minCharacters: 0,
  minCharactersMessage: "Custom min characters validation message",
  minMessage: "Custom min validation message",
  name: "0",
  placeholder: "",
  readonly: false,
  required: false,
  resize: false,
  rows: 1,
  size: "medium",
  spellcheck: false,
  theme: "inherit",
  type: "text",
  validationInline: false,
  validationStatus: "no status",
  validationText: "",
  value: "",
};

export const Default = {
  render: (args) =>
    html`<ic-text-field label="What is your favourite coffee?"> </ic-text-field>
      <ic-text-field rows="6" label="What is your favourite coffee?">
      </ic-text-field>`,

  name: "Default",
};

export const Autofocus = {
  render: (args) =>
    html`<ic-text-field autofocus label="What is your favourite coffee?">
    </ic-text-field>`,

  name: "Autofocus",
};

export const PlaceholderAndRequired = {
  render: (args) =>
    html`<ic-text-field
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
      >
      </ic-text-field>
      <ic-text-field
        rows="6"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
      >
      </ic-text-field> `,

  name: "Placeholder and required",
};

export const HelperText = {
  render: (args) =>
    html`<ic-text-field
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
      </ic-text-field>
      <ic-text-field
        rows="6"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
      </ic-text-field>
      <ic-text-field
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
      >
        <ic-typography variant="caption" slot="helper-text">
          <span>
            Slotted helper text with a <ic-link href="#">link</ic-link>
          </span>
        </ic-typography>
      </ic-text-field>`,

  name: "Helper text",
};

export const WithIcon = {
  render: (args) =>
    html`<ic-text-field
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        rows="6"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field> `,

  name: "With icon",
};

export const WithValue = {
  render: (args) =>
    html`<ic-text-field
        value="Arabica"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        rows="6"
        value="Arabica"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field> `,

  name: "With value",
};

export const CustomWidth = {
  render: (args) =>
    html`<style>
        ic-text-field {
          --input-width: 400px;
        }
      </style>
      <ic-text-field
        value="Arabica"
        max-characters="25"
        label="What is your favourite coffee?"
        size="small"
        required="true"
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        rows="6"
        value="Arabica"
        max-characters="25"
        resize
        label="What is your favourite coffee?"
        size="small"
        required="true"
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field> `,

  name: "Custom width",
};

export const FullWidth = {
  render: (args) =>
    html`<div style="display: flex">
        <ic-text-field
          full-width="true"
          value="Arabica"
          max-characters="25"
          label="What is your favourite coffee?"
          size="small"
          required="true"
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
      </div>
      <ic-text-field
        full-width="true"
        rows="6"
        value="Arabica"
        max-characters="25"
        resize
        label="What is your favourite coffee?"
        size="small"
        required="true"
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field> `,

  name: "Full width",
};

export const Disabled = {
  render: (args) =>
    html`<ic-text-field
        value="Arabica"
        label="What is your favourite coffee?"
        disabled
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        value="Arabica"
        rows="6"
        label="What is your favourite coffee?"
        disabled
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        value="Arabica"
        max-characters="25"
        label="What is your favourite coffee?"
        disabled
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        rows="6"
        value="Arabica"
        max-characters="25"
        label="What is your favourite coffee?"
        disabled
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field> `,

  name: "Disabled",
};

export const ReadOnly = {
  render: (args) =>
    html`<ic-text-field
        value="Arabica"
        max-characters="25"
        label="What is your favourite coffee?"
        readonly
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        rows="6"
        value="Arabica"
        max-characters="25"
        label="What is your favourite coffee?"
        readonly
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        value="Arabica"
        max-characters="25"
        label="What is your favourite coffee?"
        readonly
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
      </ic-text-field>
      <ic-text-field
        rows="6"
        value="Arabica"
        max-characters="25"
        label="What is your favourite coffee?"
        readonly
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
      </ic-text-field> `,

  name: "Read only",
};

export const Validation = {
  render: (args) =>
    html`<ic-text-field
        validation-status="success"
        validation-text="Good choice!"
        value="Arabica"
        max-characters="25"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        rows="6"
        validation-status="success"
        validation-text="Good choice!"
        value="Arabica"
        max-characters="25"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta, Liberica or something else to make this label long"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        validation-status="success"
        validation-text="Good choice!"
        validation-inline="true"
        value="Arabica"
        max-characters="25"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        validation-status="success"
        validation-text="Good choice!"
        validation-inline="true"
        value="Arabica"
        max-characters="25"
        label="What is your favourite coffee?"
        required
        size="small"
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        validation-status="warning"
        validation-text="A very long warning message to test if wrapping works"
        value="Arabica"
        max-characters="25"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        rows="6"
        validation-status="warning"
        validation-text="A very long warning message to test if wrapping works"
        value="Arabica"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        validation-status="error"
        validation-text="now it has really gone to (coffee) pot"
        value="Tea"
        max-characters="25"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        rows="6"
        validation-status="error"
        validation-text="now it has really gone to (coffee) pot"
        value="Tea"
        max-characters="25"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        validation-status="error"
        validation-text="now it has really gone to (coffee) pot"
        value="Tea with milk and 2 sugars"
        max-characters="25"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        rows="6"
        validation-status="error"
        validation-text="now it has really gone to (coffee) pot"
        value="Tea with milk and 2 sugars"
        max-characters="25"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        validation-status="error"
        validation-text="now it has really gone to (coffee) pot"
        value="6"
        inputmode="numeric"
        label="How many coffees do you want?"
        helper-text="Our coffee machines have a maximum capacity of 4 coffees at a time."
        type="number"
        min="1"
        max="4"
        required
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        validation-status="error"
        validation-text="now it has really gone to (coffee) pot"
        value="0"
        inputmode="numeric"
        label="How many coffees do you want?"
        helper-text="Our coffee machines have a maximum capacity of 4 coffees at a time."
        type="number"
        min="1"
        max="4"
        required
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        validation-status="error"
        validation-text="I'm not familiar with this type of coffee"
        validation-inline-internal="true"
        value="Milkshake"
        label="What is your favourite coffee?"
        required
        hide-label
        size="small"
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      ></ic-text-field>`,

  name: "Validation",
};

export const TextAreaWithResize = {
  render: (args) =>
    html`<ic-text-field
      rows="6"
      value="Arabica"
      max-characters="25"
      resize
      label="What is your favourite coffee?"
      size="small"
      required="true"
      placeholder="Placeholder"
      helper-text="Such as Arabica, Robusta or Liberica"
    >
      <svg
        slot="icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
      </svg>
    </ic-text-field> `,

  name: "Text area with resize",
};

export const Form = {
  render: (args) => html`
    <form>
      <ic-text-field label="What is your favourite coffee?"></ic-text-field>
      <br />
      <br />
      <input type="submit" value="Submit" />
      <input type="reset" value="Reset" />
    </form>
    <script>
      document.querySelector("form").addEventListener("submit", (ev) => {
        ev.preventDefault();
        console.log(
          document.querySelector('input[name="ic-text-field-input-0"]').value
        );
      });
    </script>
  `,

  name: "Form",
};

export const MinAndMax = {
  render: (args) =>
    html`<ic-text-field
        inputmode="numeric"
        label="How many coffees do you want?"
        helper-text="Our coffee machines have a maximum capacity of 4 coffees at a time."
        type="number"
        min="1"
        max="4"
      >
      </ic-text-field>
      <ic-text-field
        inputmode="numeric"
        label="How many coffees do you want?"
        helper-text="With custom validation messages."
        type="number"
        min-message="You must order at least 1 coffee"
        max-message="You cannot order more than 4 coffees"
      >
      </ic-text-field>`,

  name: "Min and max",
};

export const LoggingIcChange = {
  render: (args) =>
    html`<script>
        function handleIcChange(ev) {
          console.log(ev.detail.value, "icChange");
        }
        document
          .querySelector("ic-text-field")
          .addEventListener("icChange", handleIcChange);
      </script>
      <ic-text-field label="What is your favourite coffee?"> </ic-text-field>`,

  name: "Logging icChange",
};

export const MaximumAndMinimumCharacters = {
  render: (args) =>
    html`<ic-text-field
        max-characters="2"
        label="What is your favourite coffee?"
        helper-text="Short answers only."
      >
      </ic-text-field>
      <ic-text-field
        max-characters="2"
        label="What is your favourite coffee?"
        helper-text="Short answers only. The character count is hidden."
        hide-char-count
      >
      </ic-text-field>
      <ic-text-field
        min-characters="3"
        label="What is your favourite coffee?"
        helper-text="Long answer please."
      >
      </ic-text-field>
      <br />
      <ic-text-field
        min-characters="{2}"
        max-characters="{5}"
        min-characters-message="Too short - please type at least 2 characters"
        max-characters-message="5 characters is long enough"
        label="What is your favourite coffee?"
        helper-text="Long answer please. (With custom validation messages)"
      ></ic-text-field>`,

  name: "Maximum and minimum characters",
};

export const Playground = {
  render: (args) =>
    html`<div
        style="background-color: ${args.theme === "light"
          ? "white"
          : args.theme === "dark"
          ? "var(--ic-color-background-primary-dark)"
          : "transparent"};
          "
      >
        <ic-text-field
          debounce=${args.debounce}
          disabled=${args.disabled}
          full-width=${args.fullWidth}
          helper-text=${args.helperText}
          hide-char-count=${args.hideCharCount}
          hide-label=${args.hideLabel}
          input-id=${args.inputId}
          inputmode=${args.inputmode}
          label=${args.label}
          max=${args.max}
          max-characters=${args.maxCharacters}
          max-characters-message=${args.maxCharactersMessage}
          max-message=${args.maxMessage}
          min=${args.min}
          min-characters=${args.minCharacters}
          min-characters-message=${args.minCharactersMessage}
          min-message=${args.minMessage}
          name=${args.name}
          placeholder=${args.placeholder}
          readonly=${args.readonly}
          required=${args.required}
          resize=${args.resize}
          rows=${args.rows}
          size=${args.size}
          spellcheck=${args.spellcheck}
          theme=${args.theme}
          type=${args.type}
          validation-inline=${args.validationInline}
          validation-status=${args.validationStatus === "no status"
            ? ""
            : args.validationStatus}
          validation-text=${args.validationText}
          value=${args.value}
        >
          ${args.showIconSlot &&
          html`<svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>`}
        </ic-text-field>
      </div>
      <script>
        document
          .querySelector("ic-text-field")
          .addEventListener("icChange", (ev) => console.log(ev.detail.value));
      </script>`,

  args: defaultArgs,

  argTypes: {
    inputmode: {
      options: [
        "none",
        "text",
        "tel",
        "url",
        "email",
        "numeric",
        "decimal",
        "search",
      ],

      control: {
        type: "select",
      },
    },

    size: {
      options: ["medium", "small"],

      control: {
        type: "inline-radio",
      },
    },

    type: {
      options: ["email", "password", "tel", "text", "url", "number", "search"],

      control: {
        type: "select",
      },
    },

    validationStatus: {
      options: ["no status", "warning", "error", "success"],

      control: {
        type: "select",
      },
    },

    showIconSlot: {
      control: {
        type: "boolean",
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
