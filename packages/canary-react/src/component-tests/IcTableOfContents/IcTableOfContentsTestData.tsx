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
        <div>
          <div style={{ height: "80vh" }}>
            <h2 id="subtitle">SubTitle</h2>
          </div>
          <div style={{ height: "80vh" }}>
            <h3 id="subtitle">Sub Sub title</h3>
          </div>
        </div>
      </div>
    </IcTableOfContents>
  </div>
);

export const NestedTableOfContents = (): ReactElement => (
    <div>
        <IcTableOfContents position="right" maximumHeadingLevel={3}>
        <div id="content" style={{width:'100%'}}>
            <div style={{height:'50vh', background:'gray'}}>
            <IcTypography variant="h2" color="primary">
                <h2>A Latte</h2>
            </IcTypography>
                <p>This Table of Contents is configured with a maximum heading level of 3</p>
            </div>
            <div style={{height:'50vh', background:'darkgray'}}>
            <IcTypography variant="h3" color="primary">
                <h3>The Esspresso</h3>
            </IcTypography>
            </div>
            <div style={{height:'50vh', background:'gray'}}>
            <IcTypography variant="h3" color="primary">
                <h4>Flat White</h4>
            </IcTypography>
                <p>This section will not appear in the Table of Contents because its heading is H4</p>
            </div>
            <div style={{height:'50vh', background:'darkgray'}}>
            <IcTypography variant="h3" color="primary">
                <h5>Latte</h5>
            </IcTypography>
            <p>This section will not appear in the Table of Contents because its heading is H5</p>
            </div>
        </div>
        </IcTableOfContents>
    </div>
);