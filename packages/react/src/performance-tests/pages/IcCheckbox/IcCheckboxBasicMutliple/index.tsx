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

const Checkbox = () => (
  <IcCheckboxGroup
    label="Select a colour or colours"
    name="default"
    onIcChange={(ev) => console.log("onIcChange", ev.detail.value)}
  >
    {COLOURS.map((colour) => (
      <IcCheckbox
        key={colour.value}
        value={colour.value}
        label={colour.label}
        onIcCheck={(ev) => console.log("onIcCheck", ev)}
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
      <IcTypography variant="subtitle-small">
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
