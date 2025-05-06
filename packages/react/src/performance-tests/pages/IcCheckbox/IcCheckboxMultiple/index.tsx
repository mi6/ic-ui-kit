// IcCheckboxMultiplePage displays multiple checkbox groups for the purpose of performance testing of the IcCheckbox component.
import React from "react";
import {
  IcCheckbox,
  IcCheckboxGroup,
  IcTextField,
  IcTheme,
  IcTypography,
} from "../../../../components";

type PageProps = {
  theme: "light" | "dark";
};

const handleCheckboxGroupChange = (ev: any) => {
  console.log("onIcChange", ev.detail.value);
};
const handleCheckboxCheck = (ev: any) => {
  console.log("onIcCheck", ev);
};

const Checkbox = () => (
  <IcCheckboxGroup
    label="Select your extras"
    name="default"
    onIcChange={handleCheckboxGroupChange}
  >
    <IcCheckbox
      value="extra"
      label="Extra shot (50p)"
      onIcCheck={handleCheckboxCheck}
    />
    <IcCheckbox value="Soya milk" label="Soya milk" checked />
    <IcCheckbox value="keep cup" label="Takeaway cup" disabled />
    <IcCheckbox value="other" label="Other">
      <IcTextField slot="additional-field" label="Please let us know..." />
    </IcCheckbox>
    <IcCheckbox additionalFieldDisplay="dynamic" value="other" label="Other">
      <IcTextField slot="additional-field" label="Please let us know..." />
    </IcCheckbox>
  </IcCheckboxGroup>
);

const IcCheckboxMultiplePage: React.FC<PageProps> = ({ theme }) => {
  const checkboxes = Array.from({ length: 20 }, (_, index) => (
    <Checkbox key={index} />
  ));

  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <IcTypography
        variant="subtitle-small"
        style={{ padding: "var(--ic-space-md)" }}
      >
        <h1>Checkbox Multiple Page</h1>
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
        {checkboxes}
      </div>
    </IcTheme>
  );
};

export default IcCheckboxMultiplePage;
