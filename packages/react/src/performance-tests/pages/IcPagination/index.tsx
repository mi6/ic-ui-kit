// IcPaginationPage displays pagination components for the purpose of performance testing of IcPagination.
import React from "react";
import { IcPagination, IcTheme, IcTypography } from "../../../components";

type PageProps = {
  theme: "light" | "dark";
};

const IcPaginationPage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <IcTypography
        variant="subtitle-small"
        style={{ padding: "var(--ic-space-md)" }}
      >
        <h1>Pagination Page</h1>
      </IcTypography>
      <IcPagination pages={20} />
      <IcPagination
        pages={20}
        type="complex"
        adjacentPageCount={2}
        boundaryPageCount={2}
      />
    </IcTheme>
  );
};

export default IcPaginationPage;
