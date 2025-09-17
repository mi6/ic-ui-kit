/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState } from "react";
import { IcTopNavigation, IcNavigationItem, IcPageHeader, IcTypography, IcButton } from "@ukic/react";
import { IcTableOfContents } from '../components';
import readme from "../../../canary-web-components/src/components/ic-table-of-contents/readme.md";

export default {
  title: "React Components/Table of Contents",
  component: IcTableOfContents,
  parameters: {
    componentAPI: {
      data: readme,
    },
  },
};

export const Default = {
  render: () => (
    <div>
      <IcTopNavigation app-title="ICDS" status="Coffee">
        <svg
          slot="app-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
          />
        </svg>
        <IcNavigationItem
          slot="navigation"
          label="Latte recipe"
          href="#"
        ></IcNavigationItem>
      </IcTopNavigation>

      <div style={{ height:'100%', display:'flex', flexDirection:'column'}}>
        <IcPageHeader
          heading="Latte recipe"
          subheading="A Latte is a popular Italian coffee, made with espresso, steamed milk and a thin layer of foam."
          reverseOrder="true"
          sticky="true"
        ></IcPageHeader>
        <IcTableOfContents position="right">
          <div id="content" style={{width:'100%'}}>
            <div style={{height:'100vh', background:'gray'}}>
              <h2>What is a Latte</h2>
              <p>Lorum ipsum etcetera</p>
            </div>
            <div style={{height:'100vh', background:'darkgray'}}>
              <h2>Choosing the right milk</h2>
              <p>
                There is an interactive element here to test focus shifting with
              </p>
              <IcButton>Test Button</IcButton>
              <div style={{height:'500px'}}></div>
              <div><h3>How to correctly steam milk</h3></div>
            </div>
            <div style={{height:'100vh', background:'gray'}}>
              <h2>Coffee art</h2>
              <p>Another interactive element shows up.</p>
              <IcButton>Second Button</IcButton>
            </div>
            <div style={{height:'100vh', background:'lightgray'}}>
              <h2>Putting it all together</h2>
            </div>
          </div>
        </IcTableOfContents>
      </div>
    </div>
  ),
  name: "Default",
};

export const Nested = {
  render: () => (
    <div>
      <IcTableOfContents position="right" maximumHeadingLevel="3">
        <div style={{width:'100%'}}>
          <div style={{height:'50vh', background:'gray'}}>
            <IcTypography variant="h2" color="primary">
              <h2>A Latte</h2>
            </IcTypography>
              <p>This Table of Contents is configured with a maximum heading level of 3</p>
          </div>
          <div style={{height:'50vh', background:'darkgray'}}>
            <IcTypography variant="h3" color="primary">
              <h3>The Espresso</h3>
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
  ),
  name: "Nested Table of Contents",
};

export const Monochrome = {
  render: () => (
    <div>
      <IcTableOfContents monochrome>
        <div
          id="content"
          style={{width:'fit-content', display:'flex', flexDirection:'column'}}
        >
          <div
            style={{height:'100vh', maxWidth:'1200px', minWidth:'600px', background:'gray'}}
          >
            <h2>Latte</h2>
          </div>
          <div style={{height:'100vh', background:'darkgray'}}>
            <h2>Americano</h2>
          </div>
        </div>
      </IcTableOfContents>
    </div>
  ),
  name: "Monochrome",
};

export const DefaultTop = {
  render: () => (
    <IcTableOfContents position="top">
      <div style={{width:'100%'}}>
        <div style={{height:'100vh', background:'gray'}}>
          <h2>How to make coffee</h2>
        </div>
        <div style={{height:'100vh', background:'darkgray'}}>
          <h3>Why you make coffee</h3>
        </div>
        <div style={{height:'100vh', background:'lightgray'}}>
          <h2>The dark truth of coffee</h2>
        </div>
      </div>
    </IcTableOfContents>
  ),
  name: "Default Top",
};

export const DarkTheme = {
  render: () => (
      <div
        style={{backgroundColor:'#17191C'}}
        >
      <IcTableOfContents theme="dark">
            <div id="content" style={{width:'100%'}}>
              <div style={{height:'100vh'}}>
                <h2>Test something</h2>
              </div>
              <div style={{height:'100vh', color: "white", backgroundColor: "black"}}>
                <h2>another test with long label that should truncate</h2>
                <div style={{height:'500px'}}>
                  <h3>another heading sub</h3>
                </div>
              </div>
              <div style={{height:'100vh', backgroundColor: "black"}}>
                <h2>test</h2>
              </div>
            </div>
          </IcTableOfContents>
    </div>
  ),
  name: "Dark theme",
};

const defaultArgs = {
  monochrome: false,
  theme: "inherit",
  truncate: true,
  size: "medium",
  position: "right",
  heading: "Contents",
  setScrollHeight: 50,
  maximumHeadingLevel: 3
}

export const Playground = {
  render: (args) => (
  <div style={{ height:'100%', display:'flex', flexDirection:'column'}}>
    <IcTableOfContents 
    monochrome={args.monochrome}
    theme={args.theme}
    truncate={args.truncate}
    size={args.size}
    position={args.position}
    heading={args.heading}
    setScrollHeight={args.setScrollHeight}
    maximumHeadingLevel={args.maximumHeadingLevel}
    >
        <div id="content" style={{width:'100%'}}>
          <div style={{height:'50vh', background:'gray'}}>
            <IcTypography variant="h2" color="primary">
              <h2>H2: A Latte and a really long heading label that should truncate</h2>
            </IcTypography>
          </div>
          <div style={{height:'50vh', background:'darkgray'}}>
            <IcTypography variant="h3" color="primary">
              <h3>H3: The Espresso</h3>
            </IcTypography>
          </div>
          <div style={{height:'50vh', background:'gray'}}>
            <IcTypography variant="h3" color="primary">
              <h4>H4: Flat White</h4>
            </IcTypography>
          </div>
          <div style={{height:'50vh', background:'darkgray'}}>
            <IcTypography variant="h3" color="primary">
              <h5>H5: Latte</h5>
            </IcTypography>
          </div>
          <div style={{height:'50vh', background:'gray'}}>
            <IcTypography variant="h2" color="primary">
              <h2>H2: Other Drinks</h2>
            </IcTypography>
          </div>
          <div style={{height:'50vh', background:'darkgray'}}>
            <IcTypography variant="h3" color="primary">
              <h3>H3: Just Tea</h3>
            </IcTypography>
          </div>
        </div>
      </IcTableOfContents>
  </div>
  ),
  args: defaultArgs,
  argTypes: {
    size: {
      options: ["medium", "large"],
      control: { type: "inline-radio" },
    },
    position: {
      options: ["right", "top"],
      control: { type: "inline-radio" },
    },
    theme: {
      options: ["inherit", "light", "dark"],
      control: { type: "inline-radio" },
    },
  },
  name: "Playground",
}