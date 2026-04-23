// IcTextFieldMultiplePage displays Multiple text fields for the purpose of performance testing of the IcTextField component.
import React from "react";
import { IcTextField, IcTheme, IcTypography } from "../../../../components";

type PageProps = {
  theme: "light" | "dark";
};

const TextField = () => (
  <IcTextField
    maxCharacters={25}
    label="What is your favourite coffee?"
    required
    placeholder="Please enter…"
    helperText="Such as Arabica, Robusta or Liberica"
    onIcChange={(ev) => console.log("Value changed: ", ev.detail.value)}
    onIcInput={(ev) => console.log("icInput: ", ev.detail.value)}
    onIcBlur={() => console.log("Text field blurred")}
    onIcFocus={() => console.log("Text field focused")}
    onIcKeydown={(ev) => console.log("Key down: ", ev)}
  />
);

const IcTextFieldMultiplePage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <div style={{ padding: "var(--ic-space-md)" }}>
        <IcTypography variant="subtitle-small">
          <h1>Text Field Multiple Page</h1>
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
          {Array.from({ length: 20 }, (_, i) => (
            <TextField key={i} />
          ))}
        </div>
      </div>
    </IcTheme>
  );
};

export default IcTextFieldMultiplePage;
