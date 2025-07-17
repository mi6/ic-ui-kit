// IcDataListSinglePage displays a data list for the purpose of performance testing of the IcDataList component.
import React from "react";
import {
  IcDataList,
  IcDataRow,
  IcLink,
  IcButton,
  IcTheme,
  IcTypography,
} from "../../../../components";
import { SlottedSVG } from "../../../../react-component-lib/slottedSVG";

type PageProps = {
  theme: "light" | "dark";
};

const IcDataListSinglePage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <div style={{ padding: "var(--ic-space-md)" }}>
        <IcTypography variant="subtitle-small">
          <h1>Data List Page</h1>
        </IcTypography>
        <IcDataList
          heading="Order details"
          style={{ "--data-row-label-width": "30rem" }}
        >
          <IcDataRow label="Order name" value="Michael">
            <IcLink href="#" slot="end-component">
              Edit
            </IcLink>
          </IcDataRow>
          <IcDataRow label="Drink" value="Americano">
            <IcLink href="#" slot="end-component">
              Edit
            </IcLink>
          </IcDataRow>
          <IcDataRow label="Milk option" value="Soya milk">
            <IcLink href="#" slot="end-component">
              Edit
            </IcLink>
          </IcDataRow>
          <IcDataRow label="Price" value="£3.25">
            <IcLink href="#" slot="end-component">
              Edit
            </IcLink>
          </IcDataRow>
          <IcDataRow label="Payment method">
            <IcTypography variant="body" slot="value">
              VISA ending 5896
            </IcTypography>
            <IcLink href="#" slot="end-component">
              Edit
            </IcLink>
          </IcDataRow>
          <IcDataRow label="Download receipt" value="CoffeeOrder_X46w32.pdf">
            <IcButton variant="icon" aria-label="Download" slot="end-component">
              <SlottedSVG viewBox="0 0 24 24" height="24" width="24">
                <path
                  d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"
                  fill="currentColor"
                />
              </SlottedSVG>
            </IcButton>
          </IcDataRow>
        </IcDataList>
      </div>
    </IcTheme>
  );
};

export default IcDataListSinglePage;
