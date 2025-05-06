import React from "react";
import { IcButton, IcTheme, IcTypography } from "../../../../components";
import { SlottedSVG } from "../../../../react-component-lib/slottedSVG";

type PageProps = {
  theme: "light" | "dark";
};

export const ReusableIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      fill="#000000"
    >
      <path d="M0 0h24v24H0V0z" fill="none"></path>
      <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path>
    </svg>
  );
};

const IcButtonVariantsPage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <IcTypography variant="subtitle-small">
        <h1>Button Variants Page</h1>
      </IcTypography>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          margin: "1rem",
          width: "fit-content",
          padding: "6px",
        }}
      >
        <IcButton variant="primary">Primary</IcButton>
        <IcButton variant="primary" size="small">
          Primary Small
        </IcButton>
        <IcButton variant="primary" size="large">
          Primary Large
        </IcButton>
        <IcButton variant="secondary">Secondary</IcButton>
        <IcButton variant="secondary" fullWidth={true}>
          Secondary full width
        </IcButton>
        <IcButton variant="tertiary">Tertiary</IcButton>
        <IcButton variant="destructive">Destructive</IcButton>
        <IcButton variant="primary" disabled>
          Primary - disabled
        </IcButton>
        <IcButton variant="secondary" loading>
          Loading button
        </IcButton>
        <IcButton variant="primary" dropdown>
          Dropdown
        </IcButton>
        <IcButton variant="primary">
          <SlottedSVG
            slot="left-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none"></path>
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path>
          </SlottedSVG>
          With icon
        </IcButton>
        <IcButton variant="icon-primary" aria-label="refresh">
          <ReusableIcon />
        </IcButton>
        <IcButton variant="icon-secondary" aria-label="refresh">
          <ReusableIcon />
        </IcButton>
        <IcButton variant="icon-tertiary" aria-label="refresh">
          <ReusableIcon />
        </IcButton>
        <IcButton variant="icon-destructive" aria-label="refresh">
          <ReusableIcon />
        </IcButton>
        <IcButton
          variant="icon"
          aria-label="you can disable tooltips on icon buttons"
          disableTooltip
        >
          <ReusableIcon />
        </IcButton>
        <IcButton
          variant="primary"
          fileUpload
          accept=".doc, text/plain, .json, .png"
          onIcFileSelection={(event) =>
            console.log("Single file upload", event.detail)
          }
        >
          Upload file button
        </IcButton>
        <IcButton
          variant="primary"
          fileUpload
          multiple
          accept=".doc, text/plain, .json, .png"
          onIcFileSelection={(event) =>
            console.log("Multiple files upload", event.detail)
          }
        >
          Upload multiple files button
        </IcButton>
        <IcButton variant="primary" monochrome>
          Monochrome
        </IcButton>
        <IcButton variant="primary" theme="dark" monochrome>
          Monochrome dark theme
        </IcButton>
      </div>
    </IcTheme>
  );
};

export default IcButtonVariantsPage;
