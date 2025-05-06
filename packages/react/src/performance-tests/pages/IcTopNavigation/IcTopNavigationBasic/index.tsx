import React from "react";
import { IcTopNavigation, IcTheme, IcTypography } from "../../../../components";
import { SlottedSVG } from "../../../../react-component-lib/slottedSVG";

type PageProps = {
  theme: "light" | "dark";
};

const IcTopNavigationBasicPage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <IcTypography variant="subtitle-small">
        <h1>Top Navigation Basic Page</h1>
      </IcTypography>
      <IcTopNavigation
        appTitle="ApplicationName"
        status="alpha"
        version="v0.0.7"
        onIcTopNavResized={(event) =>
          console.log("Top nav resized: ", event.detail.size)
        }
      >
        <SlottedSVG
          slot="app-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
        </SlottedSVG>
      </IcTopNavigation>
    </IcTheme>
  );
};

export default IcTopNavigationBasicPage;
