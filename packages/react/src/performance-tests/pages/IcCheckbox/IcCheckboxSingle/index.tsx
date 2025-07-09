// IcCheckboxSinglePage displays a single checkbox group for the purpose of performance testing of the IcCheckbox component.
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

const IcCheckboxSinglePage: React.FC<PageProps> = ({ theme }) => {
  const handleCheckboxGroupChange = (ev: any) => {
    console.log("onIcChange", ev.detail.value);
  };

  const handleCheckboxCheck = (ev: any) => {
    console.log("onIcCheck", ev);
  };

  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <div style={{ padding: "var(--ic-space-md)" }}>
        <IcTypography variant="subtitle-small">
          <h1>Checkbox Page</h1>
        </IcTypography>
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
            <IcTextField
              slot="additional-field"
              label="Please let us know..."
            />
          </IcCheckbox>
          <IcCheckbox
            additionalFieldDisplay="dynamic"
            value="other"
            label="Other"
          >
            <IcTextField
              slot="additional-field"
              label="Please let us know..."
            />
          </IcCheckbox>
        </IcCheckboxGroup>
      </div>
    </IcTheme>
  );
};

export default IcCheckboxSinglePage;
