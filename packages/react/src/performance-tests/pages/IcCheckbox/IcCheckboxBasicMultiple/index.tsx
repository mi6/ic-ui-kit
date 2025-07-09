// IcCheckboxBasicMultiplePage displays multiple basic checkbox groups for the purpose of performance testing of the IcCheckbox component.
import React from "react";
import {
  IcCheckbox,
  IcCheckboxGroup,
  IcTheme,
  IcTypography,
} from "../../../../components";

type PageProps = {
  theme: "light" | "dark";
};

const COLOURS = [
  { value: "black", label: "Black" },
  { value: "grey", label: "Grey" },
  { value: "blue", label: "Blue" },
  { value: "navy", label: "Navy" },
  { value: "purple", label: "Purple" },
  { value: "pink", label: "Pink" },
  { value: "orange", label: "Orange" },
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "yellow", label: "Yellow" },
  { value: "cream", label: "Cream" },
  { value: "white", label: "White" },
  { value: "brown", label: "Brown" },
  { value: "silver", label: "Silver" },
  { value: "gold", label: "Gold" },
  { value: "multi", label: "Multi" },
];

const handleCheckboxGroupChange = (ev: any) => {
  console.log("onIcChange", ev.detail.value);
};
const handleCheckboxCheck = (ev: any) => {
  console.log("onIcCheck", ev);
};

const Checkbox = () => (
  <IcCheckboxGroup
    label="Select a colour or colours"
    name="default"
    onIcChange={handleCheckboxGroupChange}
  >
    {COLOURS.map((colour) => (
      <IcCheckbox
        key={colour.value}
        value={colour.value}
        label={colour.label}
        onIcCheck={handleCheckboxCheck}
      />
    ))}
  </IcCheckboxGroup>
);

const IcCheckboxBasicMultiplePage: React.FC<PageProps> = ({ theme }) => {
  const checkboxes = Array.from({ length: 10 }, (_, index) => (
    <Checkbox key={index} />
  ));

  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <IcTypography
        variant="subtitle-small"
        style={{ padding: "var(--ic-space-md)" }}
      >
        <h1>Checkbox Basic Multiple Page</h1>
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

export default IcCheckboxBasicMultiplePage;
