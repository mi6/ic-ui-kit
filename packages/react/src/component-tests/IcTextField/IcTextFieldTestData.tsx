/* eslint-disable react/jsx-no-bind */
import React, { useRef, useState, ReactElement } from "react";
import { IcButton, IcTextField, IcTypography } from "../../components";
import { SlottedSVG } from "../../react-component-lib/slottedSVG";

const style = { display: "flex", justifyContent: "center", margin: "2rem" };

const ReusableSlottedIcon = (): ReactElement => (
  <SlottedSVG
    slot="icon"
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
  >
    <path d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z" />
  </SlottedSVG>
);

export const Controlled = (): ReactElement => {
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

export const Uncontrolled = (): ReactElement => {
  const textFieldEl = useRef<HTMLIcTextFieldElement>(null);
  const handleChange = () => {
    console.log(textFieldEl?.current?.value);
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

export const SimpleTextField = (): ReactElement => (
  <div style={style}>
    <IcTextField label="Test TextField Label"></IcTextField>
  </div>
);

export const TextFieldWithHelperTextPlaceholderIconRequired =
  (): ReactElement => (
    <div style={style}>
      <IcTextField
        maxCharacters={25}
        label="What is your favourite coffee?"
        required
        placeholder="Please enter…"
        helperText="Such as Arabica, Robusta or Liberica"
      >
        <ReusableSlottedIcon />
      </IcTextField>
    </div>
  );

export const TextFieldNotRequired = (): ReactElement => (
  <div style={style}>
    <IcTextField
      maxCharacters={25}
      label="What is your favourite coffee?"
      placeholder="Please enter…"
      helperText="Such as Arabica, Robusta or Liberica"
    >
      <ReusableSlottedIcon />
    </IcTextField>
  </div>
);

export const DisabledTextField = (): ReactElement => (
  <div style={style}>
    <IcTextField
      maxCharacters={25}
      label="What is your favourite coffee?"
      required
      placeholder="Please enter…"
      helperText="Such as Arabica, Robusta or Liberica"
      disabled
    >
      <ReusableSlottedIcon />
    </IcTextField>
  </div>
);

export const HiddenLabelTextField = (): ReactElement => (
  <div style={style}>
    <IcTextField
      maxCharacters={25}
      label="What is your favourite coffee?"
      required
      placeholder="Please enter…"
      helperText="Such as Arabica, Robusta or Liberica"
      hideLabel
    >
      <ReusableSlottedIcon />
    </IcTextField>
  </div>
);

export const AutofocusTextField = (): ReactElement => (
  <div style={style}>
    <IcTextField
      maxCharacters={25}
      label="What is your favourite coffee?"
      placeholder="Please enter…"
      helperText="Such as Arabica, Robusta or Liberica"
      autofocus
    >
      <ReusableSlottedIcon />
    </IcTextField>
  </div>
);

export const TextFieldWithMinMaxCharacters = (): ReactElement => (
  <>
    <div style={style}>
      <IcTextField
        label="What is your favourite coffee?"
        helperText="Short answers only."
        placeholder="Please enter…"
        maxCharacters={20}
        type="text"
        id="max"
      ></IcTextField>
    </div>
    <div style={style}>
      <IcTextField
        label="What is your favourite coffee?"
        helperText="Short answers only. The character count is hidden."
        placeholder="Please enter…"
        maxCharacters={20}
        hideCharCount
        type="text"
      ></IcTextField>
    </div>
    <div style={style}>
      <IcTextField
        label="What is your favourite coffee?"
        helperText="Long answer please."
        placeholder="Please enter…"
        minCharacters={5}
        type="text"
        id="min"
      ></IcTextField>
    </div>
  </>
);

export const TextFieldWithHiddenCharCount = (): ReactElement => (
  <div style={style}>
    <IcTextField
      label="What is your favourite coffee?"
      helperText="Short answers only."
      placeholder="Please enter…"
      maxCharacters={20}
      hideCharCount
      type="text"
    ></IcTextField>
  </div>
);

export const TextFieldWithMinMaxValue = (): ReactElement => (
  <div style={style}>
    <IcTextField
      label="How many coffees do you want?"
      helperText="Our coffee machines have a maximum capacity of 4 coffees at a time."
      placeholder="Please enter…"
      type="number"
      min="1"
      max="4"
    ></IcTextField>
  </div>
);

export const TextFieldWithDebounce = (): ReactElement => (
  <div style={style}>
    <IcTextField
      maxCharacters={25}
      label="What is your favourite coffee?"
      required
      placeholder="Please enter…"
      helperText="Such as Arabica, Robusta or Liberica"
      debounce={500}
      onIcChange={(e) => console.log(e.target.value)}
    >
      <ReusableSlottedIcon />
    </IcTextField>
  </div>
);

export const TextFieldWithinForm = (): ReactElement => (
  <div style={style}>
    <form>
      <IcTextField label="Test label" name="formInputEl"></IcTextField>
      <IcButton id="resetButton" type="reset">
        Reset
      </IcButton>
    </form>
  </div>
);

export const TextFieldWithIconValueMaxCharacters = (): ReactElement => (
  <div style={style}>
    <IcTextField
      maxCharacters={25}
      value="Arabica"
      label="What is your favourite coffee?"
      required
      placeholder="Please enter…"
      helperText="Such as Arabica, Robusta or Liberica"
    >
      <ReusableSlottedIcon />
    </IcTextField>
  </div>
);

export const SmallTextField = (): ReactElement => (
  <div style={style}>
    <IcTextField
      maxCharacters={25}
      value="Arabica"
      label="What is your favourite coffee?"
      required
      placeholder="Please enter…"
      helperText="Such as Arabica, Robusta or Liberica"
      size="small"
    >
      <ReusableSlottedIcon />
    </IcTextField>
  </div>
);

export const FullWidthTextField = (): ReactElement => (
  <div style={style}>
    <IcTextField
      maxCharacters={25}
      value="Arabica"
      label="What is your favourite coffee?"
      required
      placeholder="Please enter…"
      helperText="Such as Arabica, Robusta or Liberica"
      fullWidth
    >
      <ReusableSlottedIcon />
    </IcTextField>
  </div>
);

export const MultiLineTextAreaWithResize = (): ReactElement => (
  <div style={style}>
    <IcTextField
      rows={6}
      resize
      label="What is your favourite coffee?"
      placeholder="Please enter…"
      helperText="Such as Arabica, Robusta or Liberica"
    ></IcTextField>
  </div>
);

export const TextFieldWithValidation = (): ReactElement => (
  <>
    <div style={style}>
      <IcTextField
        maxCharacters={25}
        value="Arabica"
        label="What is your favourite coffee?"
        required
        placeholder="Please enter…"
        helperText="Such as Arabica, Robusta or Liberica"
        validationStatus="success"
        validationText="Good choice!"
      ></IcTextField>
    </div>
    <div style={style}>
      <IcTextField
        maxCharacters={25}
        value="Arabica"
        label="What is your favourite coffee?"
        required
        placeholder="Please enter…"
        helperText="Such as Arabica, Robusta or Liberica"
        validationStatus="warning"
        validationText="There’s only a few left! Order now to avoid missing out."
      ></IcTextField>
    </div>
    <div style={style}>
      <IcTextField
        maxCharacters={25}
        value="Arabica"
        label="What is your favourite coffee?"
        required
        placeholder="Please enter…"
        helperText="Such as Arabica, Robusta or Liberica"
        validationStatus="error"
        validationText="Now it has really gone to (coffee) pot"
      ></IcTextField>
    </div>
  </>
);

export const TextFieldWithInlineValidation = (): ReactElement => (
  <div style={style}>
    <IcTextField
      maxCharacters={25}
      value="Arabica"
      label="What is your favourite coffee?"
      required
      placeholder="Please enter…"
      helperText="Such as Arabica, Robusta or Liberica"
      validationStatus="success"
      validationText="Good choice!"
      validationInline
    ></IcTextField>
  </div>
);

export const ReadonlyTextField = (): ReactElement => (
  <div style={style}>
    <IcTextField
      maxCharacters={25}
      value="Arabica"
      label="What is your favourite coffee?"
      placeholder="Please enter…"
      helperText="Such as Arabica, Robusta or Liberica"
      validationStatus="success"
      validationText="Good choice!"
      readonly
    ></IcTextField>
  </div>
);

export const CustomSizeTextField = (): ReactElement => (
  <div style={style}>
    <IcTextField
      style={{ "--input-width": "40%" }}
      label="What is your favourite coffee?"
      value="Arabica"
      maxCharacters={25}
      required
      placeholder="Placeholder"
      helper-text="Such as Arabica, Robusta or Liberica"
    ></IcTextField>
  </div>
);

export const DarkTheme = (): ReactElement => (
  <div style={{ backgroundColor: "var(--ic-color-page-background-dark)" }}>
    <IcTextField
      theme="dark"
      label="What is your favourite coffee?"
      required
      placeholder="Placeholder"
      helperText="Such as Arabica, Robusta or Liberica"
    >
      <SlottedSVG
        slot="icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
      </SlottedSVG>
    </IcTextField>
    <IcTextField
      theme="dark"
      label="What is your favourite coffee?"
      required
      helperText="Such as Arabica, Robusta or Liberica"
      value="Arabica"
      maxCharacters={25}
    />
    <IcTextField
      theme="dark"
      readonly
      value="Arabica"
      label="What is your favourite coffee?"
      required
      helperText="Such as Arabica, Robusta or Liberica"
    />
    <IcTextField
      theme="dark"
      rows={6}
      value="Arabica"
      label="What is your favourite coffee?"
      required
      helperText="Such as Arabica, Robusta or Liberica"
      resize
      size="small"
    />
  </div>
);

export const DarkThemeDisabled = (): ReactElement => (
  <div style={{ backgroundColor: "var(--ic-color-page-background-dark)" }}>
    <IcTextField
      theme="dark"
      disabled
      value="Arabica"
      label="What is your favourite coffee?"
      required
      helperText="Such as Arabica, Robusta or Liberica"
    />
  </div>
);

export const DarkThemeValidation = (): ReactElement => (
  <div style={{ backgroundColor: "var(--ic-color-page-background-dark)" }}>
    <IcTextField
      theme="dark"
      value="Arabica"
      label="What is your favourite coffee?"
      required
      helperText="Such as Arabica, Robusta or Liberica"
      validationStatus="success"
      validationText="Good choice!"
    />
    <IcTextField
      theme="dark"
      value="Arabica"
      label="What is your favourite coffee?"
      required
      helperText="Such as Arabica, Robusta or Liberica"
      validationStatus="success"
      validationText="Good choice!"
      validationInline
    />
    <IcTextField
      theme="dark"
      value="Arabica"
      label="What is your favourite coffee?"
      required
      helperText="Such as Arabica, Robusta or Liberica"
      validationStatus="warning"
      validationText="A very long warning message to test if wrapping works"
    />
    <IcTextField
      theme="dark"
      value="Tea"
      label="What is your favourite coffee?"
      required
      helperText="Such as Arabica, Robusta or Liberica"
      validationStatus="error"
      validationText="Now it has really gone to (coffee) pot"
    />
  </div>
);

export const DarkThemeReadOnly = (): ReactElement => (
  <div style={{ backgroundColor: "var(--ic-color-page-background-dark)" }}>
    <IcTextField
      theme="dark"
      maxCharacters={25}
      value="Arabica"
      label="What is your favourite coffee?"
      placeholder="Please enter…"
      helperText="Such as Arabica, Robusta or Liberica"
      validationStatus="success"
      validationText="Good choice!"
      readonly
    ></IcTextField>
  </div>
);

export const HiddenInput = (): ReactElement => (
  <div style={style}>
    <IcTextField label="my label" />
  </div>
);

export const HelperTextSlot = (): ReactElement => (
  <div style={style}>
    <IcTextField
      maxCharacters={25}
      value="Arabica"
      label="What is your favourite coffee?"
      required
      placeholder="Please enter…"
    >
      <ReusableSlottedIcon />
      <IcTypography variant="caption" slot="helper-text">
        <span>Such as Arabica, Robusta or Liberica</span>
      </IcTypography>
    </IcTextField>
  </div>
);
