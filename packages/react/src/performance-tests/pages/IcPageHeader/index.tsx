import React from "react";
import {
  IcPageHeader,
  IcStatusTag,
  IcBreadcrumbGroup,
  IcBreadcrumb,
  IcButton,
  IcTextField,
  IcNavigationItem,
  IcTheme,
  IcTypography,
} from "../../../components";
import { SlottedSVG } from "../../../react-component-lib/slottedSVG";

type PageProps = {
  theme: "light" | "dark";
};

const IcPageHeaderPage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <IcTypography variant="subtitle-small">
        <h1>Page Header Page</h1>
      </IcTypography>
      <IcPageHeader
        heading="Page header"
        subheading="This is a simple page header component and this is the text. This page header is only sticky for viewport widths of 992px and above.."
        stickyDesktopOnly
        aligned="full-width"
      >
        <IcStatusTag slot="heading-adornment" label="Beta" />
        <IcBreadcrumbGroup slot="breadcrumbs">
          <IcBreadcrumb pageTitle="Breadcrumb 1" href="/breadcrumb-1" />
          <IcBreadcrumb
            current={true}
            pageTitle="Breadcrumb 2"
            href="/breadcrumb-2"
          />
        </IcBreadcrumbGroup>
        <IcButton slot="actions" variant="primary">
          Create coffee
          <SlottedSVG
            slot="left-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
              fill="currentColor"
            />
          </SlottedSVG>
        </IcButton>
        <IcButton slot="actions" variant="secondary">
          Filter coffee
        </IcButton>
        <IcTextField
          slot="input"
          placeholder="Enter your input"
          label="Input"
          hideLabel
          style={{
            "@media (maxWidth: 576px)": {
              width: "304px",
            },
          }}
        />
        <IcNavigationItem slot="tabs" label="All recipes" href="/" selected />
        <IcNavigationItem slot="tabs" label="Favourites" href="/" />
      </IcPageHeader>
    </IcTheme>
  );
};

export default IcPageHeaderPage;
