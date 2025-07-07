import React, { ReactElement } from "react";
import { IcTableOfContents } from "../../components";
import { IcTypography } from "@ukic/react";

export const BasicTableOfContents = (): ReactElement => (
  <div
    style={{
      width: "250px",
      padding: "16px",
    }}
  >
    <IcTableOfContents position="right">
      <div>
        <div style={{ height: "80vh" }}>
          <h2 id="title">Title</h2>
        </div>
        <div style={{ height: "80vh" }}>
          <h3 id="subtitle">Subtitle</h3>
        </div>
      </div>
    </IcTableOfContents>
  </div>
);

export const NestedTableOfContents = (): ReactElement => (
  <div>
    <IcTableOfContents position="right" maximumHeadingLevel={3}>
      <div id="content" style={{ width: "100%" }}>
        <div style={{ height: "50vh" }}>
          <IcTypography variant="h2">
            <h2>A Latte</h2>
          </IcTypography>
          <p>
            This Table of Contents is configured with a maximum heading level of
            3
          </p>
        </div>
        <div style={{ height: "50vh" }}>
          <IcTypography variant="h3">
            <h3>The Espresso</h3>
          </IcTypography>
        </div>
        <div style={{ height: "50vh" }}>
          <IcTypography variant="h3">
            <h4>Flat White</h4>
          </IcTypography>
          <p>
            This section will not appear in the Table of Contents because its
            heading is H4
          </p>
        </div>
        <div style={{ height: "50vh" }}>
          <IcTypography variant="h3">
            <h5>Latte</h5>
          </IcTypography>
          <p>
            This section will not appear in the Table of Contents because its
            heading is H5
          </p>
        </div>
      </div>
    </IcTableOfContents>
  </div>
);

export const MonochromeTableOfContents = (): ReactElement => (
  <div>
    <IcTableOfContents monochrome>
      <div
        id="content"
        style={{
          width: "fit-content",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height: "100vh",
            maxWidth: "1200px",
            minWidth: "600px",
          }}
        >
          <h2>Latte</h2>
        </div>
        <div style={{ height: "100vh" }}>
          <h2>Americano</h2>
        </div>
      </div>
    </IcTableOfContents>
  </div>
);

export const DarkThemeTableOfContents = (): ReactElement => (
  <div
    style={{
      backgroundColor: "#17191C",
    }}
  >
    <IcTableOfContents theme="dark">
      <div id="content" style={{ width: "100%" }}>
        <div id="red" style={{ height: "100vh" }}>
          <h2 style={{ color: "white" }}>Test something</h2>
        </div>
        <div id="blue" style={{ height: "100vh", backgroundColor: "#111" }}>
          <h2>another test with long label that should truncate</h2>
          <div style={{ height: "500px" }}>
            <h3 style={{ color: "white" }}>another heading sub</h3>
          </div>
        </div>
        <div id="green" style={{ height: "100vh", backgroundColor: "#000" }}>
          <h2 style={{ color: "white" }}>test</h2>
        </div>
      </div>
    </IcTableOfContents>
  </div>
);
