// IcRadioMultiplePage displays multiple radio groups for the purpose of performance testing of the IcRadio component.
import React from "react";
import {
  IcRadioGroup,
  IcRadioOption,
  IcTheme,
  IcTypography,
} from "../../../../components";

type PageProps = {
  theme: "light" | "dark";
};

const handleRadioGroupChange = (index: number) => (ev: any) => {
  console.log(`Group ${index}:`, ev.detail.value);
};
const handleRadioOptionCheck = (index: number) => (ev: any) => {
  console.log(`Group ${index}: Radio option selected: `, ev.detail.value);
};

const RadioGroup = ({ index }: { index: number }) => (
  <IcRadioGroup
    name={`radio-group-${index}`}
    label={`Add a free purchase with any hot drink (Group ${index})`}
    helperText={`Helper text for group ${index}`}
    required
    onIcChange={handleRadioGroupChange(index)}
  >
    <IcRadioOption
      value="crisps"
      label={`Crisps (Group ${index})`}
      onIcCheck={handleRadioOptionCheck(index)}
    />
    <IcRadioOption
      value="cookie"
      label={`Deluxe chocolate chip cookie (Group ${index})`}
      onIcCheck={handleRadioOptionCheck(index)}
    />
    <IcRadioOption
      value="fruit"
      label={`Banana (Group ${index})`}
      onIcCheck={handleRadioOptionCheck(index)}
    />
    <IcRadioOption
      value="No item"
      label={`No thanks, just my coffee (Group ${index})`}
      selected
      onIcCheck={handleRadioOptionCheck(index)}
    />
  </IcRadioGroup>
);

const IcRadioMultiplePage: React.FC<PageProps> = ({ theme }) => (
  <IcTheme id="theme-wrapper" theme={theme}>
    <IcTypography
      variant="subtitle-small"
      style={{ padding: "var(--ic-space-md)" }}
    >
      <h1>Radio Multiple Page</h1>
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
        <RadioGroup key={i} index={i + 1} />
      ))}
    </div>
  </IcTheme>
);

export default IcRadioMultiplePage;
