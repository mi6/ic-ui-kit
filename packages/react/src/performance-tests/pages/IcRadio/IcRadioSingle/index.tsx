// IcRadioSinglePage displays a single radio group with multiple options for the purpose of performance testing of the IcRadio component.
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

const IcRadioSinglePage: React.FC<PageProps> = ({ theme }) => {
  const handleRadioGroupChange = (ev: any) => {
    console.log(ev.detail.value);
  };
  const handleRadioOptionCheck = (ev: any) => {
    console.log("Radio option selected: ", ev.detail.value);
  };

  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <div style={{ padding: "var(--ic-space-md)" }}>
        <IcTypography variant="subtitle-small">
          <h1>Radio Page</h1>
        </IcTypography>
        <IcRadioGroup
          name="radio-group-1"
          label="Add a free purchase with any hot drink"
          helperText="Helper text"
          required
          onIcChange={handleRadioGroupChange}
        >
          <IcRadioOption
            value="crisps"
            label="Crisps"
            onIcCheck={handleRadioOptionCheck}
          />
          <IcRadioOption
            value="cookie"
            label="Deluxe chocolate chip cookie (sold out)"
            disabled
          />
          <IcRadioOption
            value="fruit"
            label="Banana"
            onIcCheck={handleRadioOptionCheck}
          />
          <IcRadioOption
            value="No item"
            label="No thanks, just my coffee"
            selected
            onIcCheck={handleRadioOptionCheck}
          />
        </IcRadioGroup>
      </div>
    </IcTheme>
  );
};

export default IcRadioSinglePage;
