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

const IcRadioPage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <IcTypography variant="subtitle-small">
        <h1>Radio Page</h1>
      </IcTypography>
      <IcRadioGroup
        name="radio-group-1"
        label="Add a free purchase with any hot drink"
        helperText="Helper text"
        required
        onIcChange={(ev) => console.log(ev.detail.value)}
      >
        <IcRadioOption
          value="crisps"
          label="Crisps"
          onIcCheck={(ev) =>
            console.log("Radio option selected: ", ev.detail.value)
          }
        />
        <IcRadioOption
          value="cookie"
          label="Deluxe chocolate chip cookie (sold out)"
          disabled
        />
        <IcRadioOption
          value="fruit"
          label="Banana"
          onIcCheck={(ev) =>
            console.log("Radio option selected: ", ev.detail.value)
          }
        />
        <IcRadioOption
          value="No item"
          label="No thanks, just my coffee"
          selected
          onIcCheck={(ev) =>
            console.log("Radio option selected: ", ev.detail.value)
          }
        />
      </IcRadioGroup>
    </IcTheme>
  );
};

export default IcRadioPage;
