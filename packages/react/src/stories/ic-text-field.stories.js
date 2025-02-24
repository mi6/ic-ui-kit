/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-no-bind */
import React, { useState, useRef } from "react";
import { IcTextField, IcButton } from "../components";
import { SlottedSVG } from "../react-component-lib/slottedSVG";

const SlottedIcon = () => (
  <SlottedSVG
    slot="icon"
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
  </SlottedSVG>
);

const ControlledExample = () => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    console.log(event.detail.value);
    setValue(event.detail.value);
  };
  return (
    <IcTextField
      placeholder="Controlled"
      label="Controlled"
      value={value}
      onIcChange={handleChange}
    />
  );
};

const Uncontrolled = () => {
  const textFieldEl = useRef();
  const handleChange = () => {
    console.log(textFieldEl.current.value);
  };
  return (
    <IcTextField
      ref={textFieldEl}
      placeholder="Uncontrolled"
      label="Uncontrolled"
      onIcChange={handleChange}
    />
  );
};

const HiddenInput = () => {
  const [renderHidden, setRenderHidden] = useState(true);
  const handleChange = () => {
    setRenderHidden(!renderHidden);
  };
  return (
    <>
      <IcTextField label="my label" hiddenInput={renderHidden} />
      <IcButton onClick={() => handleChange()}>Toggle hidden input</IcButton>
    </>
  );
};

const defaultArgs = {
  disabled: false,
  fullWidth: false,
  helperText: "",
  hideLabel: false,
  inputId: "ic-text-field-input-0",
  inputmode: "text",
  label: "Text Field",
  maxCharacters: 0,
  maxLength: 0,
  maxLengthMessage: "Too many characters",
  minCharacters: 0,
  name: "0",
  placeholder: "",
  readonly: false,
  required: false,
  resize: false,
  rows: 1,
  size: "default",
  spellcheck: false,
  type: "text",
  validationInline: false,
  validationStatus: "none",
  validationText: "",
  debounce: 0,
};

export default {
  title: "Text field",
  component: IcTextField,
};

export const Default = {
  render: () => (
    <>
          <IcTextField label="What is your favourite coffee?" />
          <IcTextField rows="6" label="What is your favourite coffee?" />
    </>
  ),
  name: "Default",
};

export const PlaceholderAndRequired = {
  render: () => (
    <>
      <IcTextField
      label="What is your favourite coffee?"
      required
      placeholder="Placeholder"
    />
    <IcTextField
      rows="6"
      label="What is your favourite coffee?"
      required
      placeholder="Placeholder"
    />
    </>
  ),
  name: "Placeholder and required",
};

export const HelperText = {
  render: () => (
    <>
      <IcTextField
      label="What is your favourite coffee?"
      required
      placeholder="Placeholder"
      helperText="Such as Arabica, Robusta or Liberica"
    />
    <IcTextField
      rows="6"
      label="What is your favourite coffee?"
      required
      placeholder="Placeholder"
      helperText="Such as Arabica, Robusta or Liberica"
    />
    </>
  ),

  name: "Helper text",
};

export const WithIcon = {
  render: () => (
    <>
      <IcTextField
      label="What is your favourite coffee?"
      required
      placeholder="Placeholder"
      helperText="Such as Arabica, Robusta or Liberica"
    >
      <SlottedIcon />
    </IcTextField>
    <IcTextField
      rows="6"
      label="What is your favourite coffee?"
      required
      placeholder="Placeholder"
      helperText="Such as Arabica, Robusta or Liberica"
    >
      <SlottedIcon />
    </IcTextField>
    </>
  ),

  name: "With icon",
};

export const WithValue = {
  render: () => (
    <>
      <IcTextField
      value="Arabica"
      label="What is your favourite coffee?"
      required
      placeholder="Placeholder"
      helperText="Such as Arabica, Robusta or Liberica"
    >
      <SlottedIcon />
    </IcTextField>
    <IcTextField
      rows="6"
      value="Arabica"
      label="What is your favourite coffee?"
      required
      placeholder="Placeholder"
      helperText="Such as Arabica, Robusta or Liberica"
    >
      <SlottedIcon />
    </IcTextField>
    </>
  ),

  name: "With value",
};

export const WithNullValue = {
  render: () => (
    <>
      <IcTextField
      value={null}
      label="What is your favourite coffee?"
      required
      placeholder="Placeholder"
      helperText="Such as Arabica, Robusta or Liberica"
    >
      <SlottedIcon />
    </IcTextField>
    <IcTextField
      rows="6"
      value={null}
      label="What is your favourite coffee?"
      required
      placeholder="Placeholder"
      helperText="Such as Arabica, Robusta or Liberica"
    >
      <SlottedIcon />
    </IcTextField>
    </>
  ),

  name: "With null value",
};

export const WithUndefinedValue = {
  render: () => (
    <>
      <IcTextField
      value={undefined}
      label="What is your favourite coffee?"
      required
      placeholder="Placeholder"
      helperText="Such as Arabica, Robusta or Liberica"
    >
      <SlottedIcon />
    </IcTextField>
    <IcTextField
      rows="6"
      value={undefined}
      label="What is your favourite coffee?"
      required
      placeholder="Placeholder"
      helperText="Such as Arabica, Robusta or Liberica"
    >
      <SlottedIcon />
    </IcTextField>
    </>
  ),

  name: "With undefined value",
};

export const MaxLength = {
  render: () => (
    <>
      <IcTextField
      maxLength="25"
      value="Arabica"
      label="What is your favourite coffee?"
      required
      placeholder="Placeholder"
      helperText="Such as Arabica, Robusta or Liberica"
    />
    <IcTextField
      rows="6"
      maxLength="25"
      value="Arabica"
      label="What is your favourite coffee?"
      required
      placeholder="Placeholder"
      helperText="Such as Arabica, Robusta or Liberica"
    />
    </>
  ),

  name: "Max length",
};

export const MaxLengthMessage = {
  render: () => (
    <>
      <IcTextField
      maxLength="25"
      value="Arabica"
      label="What is your favourite coffee?"
      required
      placeholder="Placeholder"
      helperText="Such as Arabica, Robusta or Liberica"
      maxLengthMessage="You have exceeded the maximum length"
    />
    <IcTextField
      rows="6"
      maxLength="25"
      value="Arabica"
      label="What is your favourite coffee?"
      required
      placeholder="Placeholder"
      helperText="Such as Arabica, Robusta or Liberica"
      maxLengthMessage="You have exceeded the maximum length"
    />
    </>
  ),

  name: "Max length message",
};

export const FullWidth = {
  render: () => (
    <>
      <IcTextField
      fullWidth="true"
      maxLength="25"
      value="Arabica"
      label="What is your favourite coffee?"
      required
      placeholder="Placeholder"
      helperText="Such as Arabica, Robusta or Liberica"
    />
    <IcTextField
      fullWidth="true"
      true="6"
      maxLength="25"
      value="Arabica"
      label="What is your favourite coffee?"
      required
      placeholder="Placeholder"
      helperText="Such as Arabica, Robusta or Liberica"
    />
    </>
  ),

  name: "Full width",
};

export const Disabled = {
  render: () => (
    <>
      <IcTextField
      disabled
      maxLength="25"
      value="Arabica"
      label="What is your favourite coffee?"
      required
      placeholder="Placeholder"
      helperText="Such as Arabica, Robusta or Liberica"
    />
    <IcTextField
      rows="6"
      disabled
      maxLength="25"
      value="Arabica"
      label="What is your favourite coffee?"
      required
      placeholder="Placeholder"
      helperText="Such as Arabica, Robusta or Liberica"
    />
    </>
  ),

  name: "Disabled",
};

export const ReadOnly = {
  render: () => (
    <>
      <IcTextField
      readonly
      maxLength="25"
      value="Arabica"
      label="What is your favourite coffee?"
      required
      placeholder="Placeholder"
      helperText="Such as Arabica, Robusta or Liberica"
    />
    <IcTextField
      rows="6"
      readonly
      maxLength="25"
      value="Arabica"
      label="What is your favourite coffee?"
      required
      placeholder="Placeholder"
      helperText="Such as Arabica, Robusta or Liberica"
    />
    </>
  ),

  name: "Read only",
};

export const Validation = {
  render: () => (
    <>
      <IcTextField
      maxLength="25"
      value="Arabica"
      label="What is your favourite coffee?"
      required
      helperText="Such as Arabica, Robusta or Liberica"
      validationStatus="success"
      validationText="Good choice!"
    >
      <SlottedIcon />
    </IcTextField>
    <IcTextField
      rows="6"
      maxLength="25"
      value="Arabica"
      label="What is your favourite coffee?"
      required
      helperText="Such as Arabica, Robusta or Liberica"
      validationStatus="success"
      validationText="Good choice!"
    >
      <SlottedIcon />
    </IcTextField>
    <IcTextField
      maxLength="25"
      value="Arabica"
      label="What is your favourite coffee?"
      required
      helperText="Such as Arabica, Robusta or Liberica"
      validationStatus="success"
      validationText="Good choice!"
      validationInline
    >
      <SlottedIcon />
    </IcTextField>
    <IcTextField
      maxLength="25"
      size="small"
      value="Arabica"
      label="What is your favourite coffee?"
      required
      helperText="Such as Arabica, Robusta or Liberica"
      validationStatus="success"
      validationText="Good choice!"
      validationInline
    >
      <SlottedIcon />
    </IcTextField>
    <IcTextField
      maxLength="25"
      value="Arabica"
      label="What is your favourite coffee?"
      required
      helperText="Such as Arabica, Robusta or Liberica"
      validationStatus="warning"
      validationText="A very long warning message to test if wrapping works"
    >
      <SlottedIcon />
    </IcTextField>
    <IcTextField
      rows="6"
      maxLength="25"
      value="Arabica"
      label="What is your favourite coffee?"
      required
      helperText="Such as Arabica, Robusta or Liberica"
      validationStatus="warning"
      validationText="A very long warning message to test if wrapping works"
    >
      <SlottedIcon />
    </IcTextField>
    <IcTextField
      maxLength="25"
      value="Tea"
      label="What is your favourite coffee?"
      required
      helperText="Such as Arabica, Robusta or Liberica"
      validationStatus="error"
      validationText="Now it has really gone to (coffee) pot"
    >
      <SlottedIcon />
    </IcTextField>
    <IcTextField
      rows="6"
      maxLength="25"
      value="Tea"
      label="What is your favourite coffee?"
      required
      helperText="Such as Arabica, Robusta or Liberica"
      validationStatus="error"
      validationText="Now it has really gone to (coffee) pot"
    >
      <SlottedIcon />
    </IcTextField>
    <IcTextField
      validationStatus="error"
      validationText="now it has really gone to (coffee) pot"
      value="6"
      inputmode="numeric"
      label="How many coffees do you want?"
      helperText="Our coffee machines have a maximum capacity of 4 coffees at a time."
      type="number"
      min="1"
      max="4"
      required
    >
      <SlottedIcon />
    </IcTextField>
    <IcTextField
      validationStatus="error"
      validationText="now it has really gone to (coffee) pot"
      value="0"
      inputmode="numeric"
      label="How many coffees do you want?"
      helperText="Our coffee machines have a maximum capacity of 4 coffees at a time."
      type="number"
      min="1"
      max="4"
      required
    >
      <SlottedIcon />
    </IcTextField>
    <IcTextField
      validationStatus="error"
      validationText="I'm not familiar with this type of coffee"
      validationInlineInternal="true"
      value="Milkshake"
      label="What is your favourite coffee?"
      required
      hideLabel
      size="small"
      placeholder="Placeholder"
      helperText="Such as Arabica, Robusta or Liberica"
    >
      <SlottedIcon />
    </IcTextField>
    </>
  ),

  name: "Validation",
};

export const TextAreaWithResize = {
  render: () => (
    <IcTextField
      rows="6"
      maxLength="25"
      value="Arabica"
      label="What is your favourite coffee?"
      required
      placeholder="Placeholder"
      helperText="Such as Arabica, Robusta or Liberica"
      resize
      size="small"
    />
  ),

  name: "Text area with resize",
};

export const Controlled = {
  render: () => <ControlledExample />,
  name: "Controlled",
};

export const Uncontrolled_ = {
  render: () => <Uncontrolled />,
  name: "Uncontrolled",
};

export const MinAndMax = {
  render: () => (
    <IcTextField
      inputmode="numeric"
      label="How many coffees do you want?"
      type="number"
      min={1}
      max={4}
      helperText="Our coffee machines have a maximum capacity of 4 coffees at a time."
    />
  ),

  name: "Min and max",
};

export const MaximumAndMinimumCharacters = {
  render: () => (
    <>
      <IcTextField
      max-characters={2}
      label="What is your favourite coffee?"
      helper-text="Short answers only."
    ></IcTextField>
    <IcTextField
      min-characters={3}
      label="What is your favourite coffee?"
      helper-text="Long answer please."
    ></IcTextField>
    </>
  ),

  name: "Maximum and minimum characters",
};

export const HiddenInput_ = {
  render: () => <HiddenInput />,
  name: "Hidden input",
};

export const Playground = {
  render: (args) => (
    <IcTextField
      label={args.label}
      disabled={args.disabled}
      fullWidth={args.fullWidth}
      helperText={args.helperText}
      hideLabel={args.hideLabel}
      inputId={args.inputId}
      inputmode={args.inputmode}
      max={args.max}
      maxCharacters={args.maxCharacters}
      maxLength={args.maxLength}
      maxLengthMessage={args.maxLengthMessage}
      min={args.min}
      minCharacters={args.minCharacters}
      name={args.name}
      placeholder={args.placeholder}
      readonly={args.readonly}
      required={args.required}
      resize={args.resize}
      rows={args.rows}
      size={args.size}
      spellcheck={args.spellcheck}
      type={args.type}
      validationInline={args.validationInline}
      validationStatus={args.validationStatus}
      validationText={args.validationText}
      debounce={args.debounce}
      onIcChange={(ev) => console.log(ev.detail.value)}
    >
      {args.showIconSlot && (
        <SlottedSVG
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
        </SlottedSVG>
      )}
    </IcTextField>
  ),

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
      options: ["default", "small"],

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
      options: ["warning", "error", "success", "none"],

      mapping: {
        warning: "warning",
        error: "error",
        success: "success",
        none: "",
      },

      control: {
        type: "select",
      },
    },

    showIconSlot: {
      control: {
        type: "boolean",
      },
    },
  },

  name: "Playground",
};
