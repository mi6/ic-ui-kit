/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
import { IcDivider, IcTheme, IcTypography } from "../../components";
import { mount } from "cypress/react";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const DEFAULT_TEST_THRESHOLD = 0.0;
const DIVIDER_SELECTOR = "ic-divider";

describe("IcDivider visual and a11y testing", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render horizontally at different weights", () => {
    mount(
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "400px",
          gap: "var(--ic-space-md)",
          padding: "var(--ic-space-lg)",
        }}
      >
        <IcDivider weight="thin" />
        <IcDivider
          weight="thin"
          label="End of section"
          labelPlacement="center"
        />
        <IcDivider weight="medium" />
        <IcDivider
          weight="medium"
          label="End of section"
          labelPlacement="center"
        />
        <IcDivider weight="thick" />
        <IcDivider
          weight="thick"
          label="End of section"
          labelPlacement="center"
        />
        <IcDivider weight="very-thick" />
        <IcDivider
          weight="very-thick"
          label="End of section"
          labelPlacement="center"
        />
      </div>
    );
    cy.checkHydrated(DIVIDER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "horizontal-weights",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.046),
    });
  });

  it("should render vertically at different weights", () => {
    cy.viewport(700, 500);
    mount(
      <div
        style={{
          display: "flex",
          height: "400px",
          gap: "var(--ic-space-md)",
          padding: "var(--ic-space-lg)",
        }}
      >
        <IcDivider orientation="vertical" weight="thin" />
        <IcDivider
          orientation="vertical"
          weight="thin"
          label="End of section"
          labelPlacement="center"
        />
        <IcDivider orientation="vertical" weight="medium" />
        <IcDivider
          orientation="vertical"
          weight="medium"
          label="End of section"
          labelPlacement="center"
        />
        <IcDivider orientation="vertical" weight="thick" />
        <IcDivider
          orientation="vertical"
          weight="thick"
          label="End of section"
          labelPlacement="center"
        />
        <IcDivider orientation="vertical" weight="very-thick" />
        <IcDivider
          orientation="vertical"
          weight="very-thick"
          label="End of section"
          labelPlacement="center"
        />
      </div>
    );
    cy.checkHydrated(DIVIDER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "vertical-weights",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.036),
    });
  });

  it("should render with different theme colors", () => {
    mount(
      <>
        <IcTheme color="#00703C" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "400px",
            gap: "var(--ic-space-md)",
            padding: "var(--ic-space-sm)",
          }}
        >
          <IcDivider theme="inherit" />
          <IcDivider theme="inherit" monochrome />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#121212",
              width: "100%",
              padding: "var(--ic-space-xs) 0",
              gap: "var(--ic-space-sm)",
            }}
          >
            <IcDivider theme="dark" />
            <IcDivider theme="dark" monochrome />
          </div>
          <IcDivider theme="light" />
          <IcDivider theme="light" monochrome />
        </div>
        <div
          style={{
            display: "flex",
            height: "300px",
            gap: "var(--ic-space-md)",
            padding: "var(--ic-space-lg)",
          }}
        >
          <IcDivider theme="inherit" orientation="vertical" />
          <IcDivider theme="inherit" orientation="vertical" monochrome />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#121212",
              height: "100%",
              gap: "var(--ic-space-sm)",
              padding: "0 var(--ic-space-xs)",
            }}
          >
            <IcDivider theme="dark" orientation="vertical" />
            <IcDivider theme="dark" orientation="vertical" monochrome />
          </div>
          <IcDivider theme="light" orientation="vertical" />
          <IcDivider theme="light" orientation="vertical" monochrome />
        </div>
      </>
    );
    cy.checkHydrated(DIVIDER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "theme",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render with different border styles", () => {
    mount(
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "400px",
            gap: "var(--ic-space-md)",
            padding: "var(--ic-space-lg)",
          }}
        >
          <IcDivider borderStyle="solid" />
          <IcDivider borderStyle="dashed" />
        </div>
        <div
          style={{
            display: "flex",
            height: "200px",
            gap: "var(--ic-space-md)",
            padding: "var(--ic-space-lg)",
          }}
        >
          <IcDivider borderStyle="solid" orientation="vertical" />
          <IcDivider borderStyle="dashed" orientation="vertical" />
        </div>
      </>
    );
    cy.checkHydrated(DIVIDER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "border-styles",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render using the label prop or a slotted label", () => {
    cy.viewport(800, 1300);
    mount(
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--ic-space-lg)",
          }}
        >
          <IcDivider
            label="🎶 Now this is a story all about how my life got brewed up and turned around. And I’d like to take a minute, just sit right there; I’ll tell you how I became the prince of a café called Bel-Air 🎶
        🎶 In west Philadelphia, born and raised; in the coffee shop was where I spent most of my days. Chillin’ out, maxin’, relaxin’ all cool, sippin’ on some cappuccinos outside of the school 🎶"
            labelPlacement="left"
          />
          <IcDivider
            label="🎶 Now this is a story all about how my life got brewed up and turned around. And I’d like to take a minute, just sit right there; I’ll tell you how I became the prince of a café called Bel-Air 🎶
        🎶 In west Philadelphia, born and raised; in the coffee shop was where I spent most of my days. Chillin’ out, maxin’, relaxin’ all cool, sippin’ on some cappuccinos outside of the school 🎶"
            labelPlacement="center"
          />
          <IcDivider
            label="🎶 Now this is a story all about how my life got brewed up and turned around. And I’d like to take a minute, just sit right there; I’ll tell you how I became the prince of a café called Bel-Air 🎶
        🎶 In west Philadelphia, born and raised; in the coffee shop was where I spent most of my days. Chillin’ out, maxin’, relaxin’ all cool, sippin’ on some cappuccinos outside of the school 🎶"
            labelPlacement="right"
          />
          <IcDivider labelPlacement="left">
            <IcTypography variant="label" slot="label">
              <p style={{ width: "max-content" }}>Slotted label left</p>
            </IcTypography>
          </IcDivider>
          <IcDivider labelPlacement="center">
            <IcTypography variant="label" slot="label">
              <p style={{ width: "max-content" }}>Slotted label center</p>
            </IcTypography>
          </IcDivider>
          <IcDivider labelPlacement="right">
            <IcTypography variant="label" slot="label">
              <p style={{ width: "max-content" }}>Slotted label right</p>
            </IcTypography>
          </IcDivider>
        </div>
        <div
          style={{
            display: "flex",
            gap: "var(--ic-space-lg)",
            height: "300px",
            marginTop: "var(--ic-space-lg)",
          }}
        >
          <IcDivider
            label="Label top"
            labelPlacement="top"
            orientation="vertical"
          />
          <IcDivider
            label="Label center"
            labelPlacement="center"
            orientation="vertical"
          />
          <IcDivider
            label="Label bottom"
            labelPlacement="bottom"
            orientation="vertical"
          />
          <IcDivider labelPlacement="top" orientation="vertical">
            <IcTypography variant="label" slot="label">
              <p style={{ width: "inherit" }}>Slotted label top</p>
            </IcTypography>
          </IcDivider>
          <IcDivider labelPlacement="center" orientation="vertical">
            <IcTypography variant="label" slot="label">
              <p style={{ width: "inherit" }}>Slotted label center</p>
            </IcTypography>
          </IcDivider>
          <IcDivider labelPlacement="bottom" orientation="vertical">
            <IcTypography variant="label" slot="label">
              <p style={{ width: "inherit" }}>Slotted label bottom</p>
            </IcTypography>
          </IcDivider>
        </div>
      </>
    );
    cy.checkHydrated(DIVIDER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "labels-and-label-placement",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.111),
    });
  });
});
