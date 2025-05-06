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

const RadioGroup = ({ index }: { index: number }) => (
  <IcRadioGroup
    name={`radio-group-${index}`}
    label={`Add a free purchase with any hot drink (Group ${index})`}
    helperText={`Helper text for group ${index}`}
    required
    onIcChange={(ev) => console.log(`Group ${index}:`, ev.detail.value)}
  >
    <IcRadioOption
      value="crisps"
      label={`Crisps (Group ${index})`}
      onIcCheck={(ev) =>
        console.log(`Group ${index}: Radio option selected: `, ev.detail.value)
      }
    />
    <IcRadioOption
      value="cookie"
      label={`Deluxe chocolate chip cookie (Group ${index})`}
      onIcCheck={(ev) =>
        console.log(`Group ${index}: Radio option selected: `, ev.detail.value)
      }
    />
    <IcRadioOption
      value="fruit"
      label={`Banana (Group ${index})`}
      onIcCheck={(ev) =>
        console.log(`Group ${index}: Radio option selected: `, ev.detail.value)
      }
    />
    <IcRadioOption
      value="No item"
      label={`No thanks, just my coffee (Group ${index})`}
      selected
      onIcCheck={(ev) =>
        console.log(`Group ${index}: Radio option selected: `, ev.detail.value)
      }
    />
  </IcRadioGroup>
);

const IcRadioMultiplePage: React.FC<PageProps> = ({ theme }) => (
  <IcTheme id="theme-wrapper" theme={theme}>
    <IcTypography variant="subtitle-small">
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
