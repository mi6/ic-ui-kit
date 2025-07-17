// IcCardVerticalSinglePage displays a single vertical card for the purpose of performance testing of the IcCardVertical component.
import React from "react";
import {
  IcCardVertical,
  IcButton,
  IcStatusTag,
  IcTypography,
  IcTheme,
} from "../../../../components";
import { SlottedSVG } from "../../../../react-component-lib/slottedSVG";

type PageProps = {
  theme: "light" | "dark";
};

const IcCardVerticalSinglePage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <div style={{ padding: "var(--ic-space-md)" }}>
        <IcTypography variant="subtitle-small">
          <h1>Vertical Card Page</h1>
        </IcTypography>
        <IcCardVertical
          heading="This is the card heading"
          subheading="This is the subheading"
          message="This is an example of a card component with text included."
          expandable
          clickable
        >
          <IcStatusTag slot="adornment" label="Neutral" size="small" />
          <IcButton
            variant="icon"
            title="More information"
            aria-label="More information"
            slot="interaction-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-three-dots-vertical"
              viewBox="0 0 16 16"
            >
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
          </IcButton>
          <SlottedSVG
            slot="image-mid"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1600 900"
          >
            <rect fill="#ff7700" width="1600" height="1600" y="-350" />
            <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
            <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
            <polygon fill="#c50022" points="-60 900 398 662 816 900" />
            <polygon fill="#a3001b" points="337 900 398 662 816 900" />
            <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
            <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
            <polygon fill="#b80066" points="641 695 886 900 367 900" />
            <polygon fill="#960052" points="587 900 641 695 886 900" />
            <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
            <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
            <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
            <polygon fill="#880088" points="943 900 1210 900 971 687" />
          </SlottedSVG>
          <SlottedSVG
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </SlottedSVG>
          <IcButton slot="interaction-controls" variant="primary">
            Learn more
          </IcButton>
          <IcButton slot="interaction-controls" variant="secondary">
            Hide
          </IcButton>
          <IcTypography slot="expanded-content" variant="body">
            This is an example of text within the expanded content area.
          </IcTypography>
        </IcCardVertical>
      </div>
    </IcTheme>
  );
};

export default IcCardVerticalSinglePage;
