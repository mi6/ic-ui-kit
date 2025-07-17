// IcClassificationPage displays classification banners for the purpose of performance testing of the IcClassificationBanner component.
import React from "react";
import {
  IcClassificationBanner,
  IcTheme,
  IcTypography,
} from "../../../components";

type PageProps = {
  theme: "light" | "dark";
};

const IcClassificationBannerPage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <div style={{ padding: "var(--ic-space-md)" }}>
        <IcTypography variant="subtitle-small">
          <h1>Classification Banner Page</h1>
        </IcTypography>
        <>
          <IcClassificationBanner inline />
          <IcClassificationBanner inline classification="official" />
          <IcClassificationBanner inline classification="official-sensitive" />
          <IcClassificationBanner inline classification="secret" />
          <IcClassificationBanner inline classification="top-secret" />
        </>
      </div>
    </IcTheme>
  );
};

export default IcClassificationBannerPage;
