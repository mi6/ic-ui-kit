// IcAccordionSinglePage displays a single nested accordion group for the purpose of performance testing of the IcAccordion component.
import React from "react";
import {
  IcAccordion,
  IcAccordionGroup,
  IcTypography,
  IcTheme,
} from "../../../../components";

type PageProps = {
  theme: "light" | "dark";
};

const IcAccordionSinglePage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <div style={{ padding: "var(--ic-space-md)" }}>
        <IcAccordionGroup label="Coffee">
          <IcAccordion heading="Cappuccino">
            <IcTypography variant="body">
              An espresso-based drink that is traditionally prepared with
              steamed milk foam.
            </IcTypography>
          </IcAccordion>
          <IcAccordion heading="Other coffees" expanded>
            <IcAccordion heading="Americano" expanded>
              <IcTypography variant="body">
                An espresso-based drink that is diluted with hot water.
              </IcTypography>
            </IcAccordion>
            <IcAccordion heading="Latte" expanded>
              <IcTypography variant="body">
                A milkier coffee than a cappuccino.
              </IcTypography>
            </IcAccordion>
          </IcAccordion>
        </IcAccordionGroup>
      </div>
    </IcTheme>
  );
};

export default IcAccordionSinglePage;
