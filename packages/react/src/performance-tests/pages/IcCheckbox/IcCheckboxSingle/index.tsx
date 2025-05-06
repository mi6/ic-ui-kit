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

const IcCheckboxPage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <IcTypography variant="subtitle-small">
        <h1>Checkbox Page</h1>
      </IcTypography>
      <IcCheckboxGroup
        label="Select your extras"
        name="default"
        onIcChange={(ev) => console.log("onIcChange", ev.detail.value)}
      >
        <IcCheckbox
          value="extra"
          label="Extra shot (50p)"
          onIcCheck={(ev) => console.log("onIcCheck", ev)}
        />
        <IcCheckbox value="Soya milk" label="Soya milk" checked />
        <IcCheckbox value="keep cup" label="Takeaway cup" disabled />
        <IcCheckbox value="other" label="Other">
          <IcTextField slot="additional-field" label="Please let us know..." />
        </IcCheckbox>
        <IcCheckbox
          additionalFieldDisplay="dynamic"
          value="other"
          label="Other"
        >
          <IcTextField slot="additional-field" label="Please let us know..." />
        </IcCheckbox>
      </IcCheckboxGroup>
    </IcTheme>
  );
};

export default IcCheckboxPage;
