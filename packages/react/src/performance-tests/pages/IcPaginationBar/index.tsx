// IcPaginationPage displays pagination components for the purpose of performance testing of IcPagination.
import React from "react";
import { IcPaginationBar, IcTheme, IcTypography } from "../../../components";

type PageProps = {
  theme: "light" | "dark";
};

const IcPaginationBarPage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <IcTypography
        variant="subtitle-small"
        style={{ padding: "var(--ic-space-md)" }}
      >
        <h1>Pagination Bar Page</h1>
      </IcTypography>
      <IcPaginationBar
        totalItems={20}
        showItemsPerPageControl
        itemsPerPageOptions={[
          { value: "5", label: "5" },
          { value: "10", label: "10" },
        ]}
      />
      <IcPaginationBar
        totalItems={20}
        type="complex"
        showItemsPerPageControl
        itemsPerPageOptions={[
          { value: "5", label: "5" },
          { value: "10", label: "10" },
        ]}
      />
    </IcTheme>
  );
};

export default IcPaginationBarPage;
