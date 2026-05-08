// IcTextFieldVariantsPage displays text field variants for the purpose of performance testing of the IcTextField component.
import React from "react";
import { IcTextField, IcTheme, IcTypography } from "../../../../components";
import { SlottedSVG } from "../../../../react-component-lib/slottedSVG";

type PageProps = {
  theme: "light" | "dark";
};

const reusableIcon = () => (
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

const defaultProps = {
  maxCharacters: 25,
  label: "What is your favourite coffee?",
  required: true,
  placeholder: "Please enter…",
  helperText: "Such as Arabica, Robusta or Liberica",
};

const textFieldEvents = {
  onIcChange: (ev: any) => console.log("Value changed: ", ev.detail.value),
  onIcInput: (ev: any) => console.log("icInput: ", ev.detail.value),
  onIcBlur: () => console.log("Text field blurred"),
  onIcFocus: () => console.log("Text field focused"),
  onIcKeydown: (ev: any) => console.log("Key down: ", ev),
};

const IcTextFieldVariantsPage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <div style={{ padding: "var(--ic-space-md)" }}>
        <IcTypography variant="subtitle-small">
          <h1>Text Field Variants Page</h1>
        </IcTypography>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            margin: "1rem",
            width: "fit-content",
            padding: "10px",
          }}
        >
          <IcTextField {...defaultProps} {...textFieldEvents} />
          <IcTextField
            rows={4}
            label="Why do you like coffee?"
            required
            placeholder="Please enter…"
            helperText="Give as much detail as you like"
            {...textFieldEvents}
            onIcScroll={(ev) => console.log("Scroll event: ", ev)}
          />
          <IcTextField {...defaultProps} autofocus />
          <IcTextField {...defaultProps}>{reusableIcon()}</IcTextField>
          <IcTextField {...defaultProps} rows={4}>
            {reusableIcon()}
          </IcTextField>
          <IcTextField {...defaultProps} value="Arabica" />
          <IcTextField {...defaultProps} fullWidth />
          <IcTextField
            label="What is your favourite coffee?"
            rows={4}
            fullWidth
            maxCharacters={400}
          />
          <IcTextField {...defaultProps} disabled />
          <IcTextField {...defaultProps} readonly />
          <IcTextField
            rows={4}
            label="What is your favourite coffee?"
            required
            placeholder="Placeholder"
            helperText="Such as Arabica, Robusta or Liberica"
            resize
          />
          <IcTextField
            value="Arabica"
            {...defaultProps}
            validationStatus="success"
            validationText="Good choice!"
          />
          <IcTextField
            rows={4}
            value="Arabica"
            {...defaultProps}
            validationStatus="success"
            validationText="Good choice!"
          />
          <IcTextField
            value="Arabica"
            {...defaultProps}
            validationStatus="success"
            validationInline
          />
          <IcTextField
            value="Tea"
            {...defaultProps}
            validationStatus="warning"
            validationText="A very long warning message to test if wrapping works"
          />
          <IcTextField
            value="Tea"
            {...defaultProps}
            validationStatus="error"
            validationText="Now it has really gone to (coffee) pot"
          />
          <IcTextField
            rows={4}
            value="Tea"
            {...defaultProps}
            validationStatus="error"
            validationText="Now it has really gone to (coffee) pot"
          />
          <IcTextField
            validationStatus="error"
            validationText="Now it has really gone to (coffee) pot"
            value="6"
            inputmode="numeric"
            label="How many coffees do you want?"
            helperText="Maximum order of 4 coffees at a time"
            type="number"
            min="1"
            max="4"
            required
          />
          <IcTextField
            validationStatus="error"
            validationText="Now it has really gone to (coffee) pot"
            value="0"
            inputmode="numeric"
            label="How many coffees do you want?"
            helperText="Maximum order of 4 coffees at a time"
            type="number"
            min="1"
            max="4"
            required
          />
        </div>
      </div>
    </IcTheme>
  );
};

export default IcTextFieldVariantsPage;
