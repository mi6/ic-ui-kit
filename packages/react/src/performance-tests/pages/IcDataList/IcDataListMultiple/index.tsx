// IcDataListMultiplePage displays multiple data lists for the purpose of performance testing of the IcDataList component.
import React from "react";
import {
  IcDataList,
  IcDataRow,
  IcStatusTag,
  IcTheme,
  IcTypography,
} from "../../../../components";

type PageProps = {
  theme: "light" | "dark";
};

const DataList = () => (
  <IcDataList heading="Personal details" size="small">
    <IcDataRow label="Name" value="Michael Johnson">
      <IcStatusTag
        status="success"
        label="confirmed"
        variant="filled"
        slot="end-component"
        size="small"
      />
    </IcDataRow>
    <IcDataRow label="Date of birth" value="16 October 1995">
      <IcStatusTag
        status="warning"
        label="in review"
        variant="filled"
        slot="end-component"
        size="small"
      />
    </IcDataRow>
    <IcDataRow label="Telephone" value="07449 7654873">
      <IcStatusTag
        status="warning"
        label="in review"
        variant="filled"
        slot="end-component"
        size="small"
      />
    </IcDataRow>
    <IcDataRow label="Email" value="mjohnson@coffee.gov">
      <IcStatusTag
        status="success"
        label="confirmed"
        variant="filled"
        slot="end-component"
        size="small"
      />
    </IcDataRow>
    <IcDataRow label="Address">
      <IcTypography variant="body" slot="value">
        383 Coffee Drive
        <br />
        London
        <br />
        SW7 988
        <br />
        United Kingdom
      </IcTypography>
      <IcStatusTag
        label="not confirmed"
        variant="filled"
        slot="end-component"
        size="small"
      />
    </IcDataRow>
  </IcDataList>
);

const IcDataListMultiplePage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <div style={{ padding: "var(--ic-space-md)" }}>
        <IcTypography variant="subtitle-small">
          <h1>Data List Page</h1>
        </IcTypography>
        {Array.from({ length: 20 }).map((_, i) => (
          <DataList key={i} />
        ))}
      </div>
    </IcTheme>
  );
};

export default IcDataListMultiplePage;
