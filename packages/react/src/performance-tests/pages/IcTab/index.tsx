// IcTabPage displays the tab component for the purpose of performance testing of IcTab.
import React from "react";
import {
  IcTabContext,
  IcTabGroup,
  IcTab,
  IcTabPanel,
  IcTheme,
  IcTypography,
} from "../../../components";
import { SlottedSVG } from "../../../react-component-lib/slottedSVG";

type PageProps = {
  theme: "light" | "dark";
};

const IcTabPage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <div style={{ padding: "var(--ic-space-md)" }}>
        <IcTypography variant="subtitle-small">
          <h1>Tab Page</h1>
        </IcTypography>
        <IcTabContext
          onIcTabSelect={(ev) =>
            console.log({
              tabIndex: ev.detail.tabIndex,
              tabLabel: ev.detail.tabLabel,
            })
          }
        >
          <IcTabGroup label="Example tab group">
            <IcTab>
              Ingredients
              <SlottedSVG
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                fill="#000000"
              >
                <path d="M9,21V22H7V21A2,2 0 0,1 5,19V4A2,2 0 0,1 7,2H17A2,2 0 0,1 19,4V19A2,2 0 0,1 17,21V22H15V21H9M7,4V9H17V4H7M7,19H17V11H7V19M8,12H10V15H8V12M8,6H10V8H8V6Z" />
              </SlottedSVG>
            </IcTab>
            <IcTab>
              Method
              <SlottedSVG
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                fill="#000000"
              >
                <path d="M3,5H9V11H3V5M5,7V9H7V7H5M11,7H21V9H11V7M11,15H21V17H11V15M5,20L1.5,16.5L2.91,15.09L5,17.17L9.59,12.59L11,14L5,20Z" />
              </SlottedSVG>
            </IcTab>
            <IcTab disabled>
              History
              <SlottedSVG
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                fill="#000000"
              >
                <path d="M13.5,8H12V13L16.28,15.54L17,14.33L13.5,12.25V8M13,3A9,9 0 0,0 4,12H1L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3" />
              </SlottedSVG>
            </IcTab>
            <IcTab>Tab Four</IcTab>
            <IcTab>Tab Five</IcTab>
            <IcTab>Tab Six</IcTab>
            <IcTab>Tab Seven</IcTab>
          </IcTabGroup>
          <IcTabPanel>
            <IcTabContext
              contextId="context-nested"
              onIcTabSelect={(ev) =>
                console.log({
                  tabIndex: ev.detail.tabIndex,
                  tabLabel: ev.detail.tabLabel,
                })
              }
            >
              <IcTabGroup label="Example tab group">
                <IcTab>Espresso</IcTab>
                <IcTab>Water</IcTab>
                <IcTab>Milk</IcTab>
              </IcTabGroup>
              <IcTabPanel>Nested Tab Panel One - Espresso</IcTabPanel>
              <IcTabPanel>Nested Tab Panel Two - Water</IcTabPanel>
              <IcTabPanel>Nested Tab Panel Three - Milk</IcTabPanel>
            </IcTabContext>
          </IcTabPanel>
          <IcTabPanel>Outer Tab Panel Two - Method</IcTabPanel>
          <IcTabPanel>Outer Tab Panel Three - History</IcTabPanel>
          <IcTabPanel>Outer Tab Panel Four</IcTabPanel>
          <IcTabPanel>Outer Tab Panel Five</IcTabPanel>
          <IcTabPanel>Outer Tab Panel Six</IcTabPanel>
          <IcTabPanel>Outer Tab Panel Seven</IcTabPanel>
        </IcTabContext>
      </div>
    </IcTheme>
  );
};

export default IcTabPage;
