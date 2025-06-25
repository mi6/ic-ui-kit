/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-no-bind */
import React, { useState, useRef } from "react";
import { IcButton, IcLink, IcTextField, IcTypography } from "../components";
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
  validationStatus: "none",
  validationText: "",
  value: "",
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

export const Autofocus = {
  render: () => (
    <IcTextField label="What is your favourite coffee?" autofocus />
  ),
  name: "Autofocus",
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
      <IcTextField
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
      ><IcTypography variant="caption" slot="helper-text">
          <span>
            Slotted helper text with a <IcLink href="#">link</IcLink>
          </span>
        </IcTypography></IcTextField>
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

export const FullWidth = {
  render: () => (
    <>
      <IcTextField
      fullWidth="true"
      maxCharacters="25"
      value="Arabica"
      label="What is your favourite coffee?"
      required
      placeholder="Placeholder"
      helperText="Such as Arabica, Robusta or Liberica"
    />
    <IcTextField
      fullWidth="true"
      rows="6"
      maxCharacters="25"
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
      maxCharacters="25"
      value="Arabica"
      label="What is your favourite coffee?"
      required
      placeholder="Placeholder"
      helperText="Such as Arabica, Robusta or Liberica"
    />
    <IcTextField
      rows="6"
      disabled
      maxCharacters="25"
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
      maxCharacters="25"
      value="Arabica"
      label="What is your favourite coffee?"
      required
      placeholder="Placeholder"
      helperText="Such as Arabica, Robusta or Liberica"
    />
    <IcTextField
      rows="6"
      readonly
      maxCharacters="25"
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
      maxCharacters="25"
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
      maxCharacters="25"
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
      maxCharacters="25"
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
      maxCharacters="25"
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
      maxCharacters="25"
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
      maxCharacters="25"
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
      maxCharacters="25"
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
      maxCharacters="25"
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
      maxCharacters="25"
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
    <>
      <IcTextField
        inputmode="numeric"
        label="How many coffees do you want?"
        type="number"
        min={1}
        max={4}
        helperText="Our coffee machines have a maximum capacity of 4 coffees at a time."
      />
      <br />
      <IcTextField
        inputmode="numeric"
        label="How many coffees do you want?"
        type="number"
        min={1}
        max={4}
        minMessage="You must order at least 1 coffee"
        maxMessage="You cannot order more than 4 coffees"
        helperText="With custom validation messages."
      />
    </>
  ),

  name: "Min and max",
};

export const MaximumAndMinimumCharacters = {
  render: () => (
    <>
      <IcTextField
      maxCharacters={2}
      label="What is your favourite coffee?"
      helperText="Short answers only."
    ></IcTextField>
    <IcTextField
      maxCharacters={2}
      label="What is your favourite coffee?"
      helperText="Short answers only. The character count is hidden."
      hideCharCount
    ></IcTextField>
    <IcTextField
      minCharacters={3}
      label="What is your favourite coffee?"
      helperText="Long answer please."
    ></IcTextField>
    <br />
    <IcTextField
      minCharacters={2}
      maxCharacters={5}
      minCharactersMessage="Too short - please type at least 2 characters"
      maxCharactersMessage="5 characters is long enough"
      label="What is your favourite coffee?"
      helperText="Long answer please. (With custom validation messages)"
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
    <div
      style={{
        backgroundColor:
          args.theme === "light"
            ? "white"
            : args.theme === "dark"
              ? "var(--ic-color-background-primary-dark)"
              : "transparent",
      }}
    >
      <IcTextField
        debounce={args.debounce}
        disabled={args.disabled}
        fullWidth={args.fullWidth}
        helperText={args.helperText}
        hideCharCount={args.hideCharCount}
        hideLabel={args.hideLabel}
        inputId={args.inputId}
        inputmode={args.inputmode}
        label={args.label}
        max={args.max}
        maxCharacters={args.maxCharacters}
        maxCharactersMessage={args.maxCharactersMessage}
        maxMessage={args.maxMessage}
        min={args.min}
        minCharacters={args.minCharacters}
        minCharactersMessage={args.minCharactersMessage}
        minMessage={args.minMessage}
        name={args.name}
        placeholder={args.placeholder}
        readonly={args.readonly}
        required={args.required}
        resize={args.resize}
        rows={args.rows}
        size={args.size}
        spellcheck={args.spellcheck}
        theme={args.theme}
        type={args.type}
        validationInline={args.validationInline}
        validationStatus={args.validationStatus}
        validationText={args.validationText}
        value={args.value}
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
    </div>
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

    theme: {
      options: ["inherit", "light", "dark"],

      control: {
        type: "inline-radio",
      },
    },
  },

  name: "Playground",
};
