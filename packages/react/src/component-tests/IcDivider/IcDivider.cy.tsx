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
          gap: "16px",
          padding: "24px",
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
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render vertically at different weights", () => {
    mount(
      <div
        style={{
          display: "flex",
          height: "400px",
          gap: "16px",
          padding: "24px",
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
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render with different appearances", () => {
    mount(
      <>
        <IcTheme color="#00703C"></IcTheme>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "400px",
            gap: "16px",
            padding: "24px",
          }}
        >
          <IcDivider appearance="default" />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#121212",
              height: "var(--ic-space-md)",
              width: "100%",
            }}
          >
            <IcDivider appearance="light" />
          </div>
          <IcDivider appearance="dark" />
          <IcDivider appearance="theme" />
        </div>
        <div
          style={{
            display: "flex",
            height: "300px",
            gap: "16px",
            padding: "24px",
          }}
        >
          <IcDivider appearance="default" orientation="vertical" />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#121212",
              width: "var(--ic-space-md)",
              height: "100%",
            }}
          >
            <IcDivider appearance="light" orientation="vertical" />
          </div>
          <IcDivider appearance="dark" orientation="vertical" />
          <IcDivider appearance="theme" orientation="vertical" />
        </div>
      </>
    );
    cy.checkHydrated(DIVIDER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "appearance",
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
            gap: "16px",
            padding: "24px",
          }}
        >
          <IcDivider borderStyle="solid" />
          <IcDivider borderStyle="dashed" />
        </div>
        <div
          style={{
            display: "flex",
            height: "200px",
            gap: "16px",
            padding: "24px",
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
    mount(
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--ic-space-lg)",
          }}
        >
          <IcDivider label="Label left" labelPlacement="left" />
          <IcDivider label="Label center" labelPlacement="center" />
          <IcDivider label="Label right" labelPlacement="right" />
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
              <p style={{ width: "max-content" }}>Slotted label top</p>
            </IcTypography>
          </IcDivider>
          <IcDivider labelPlacement="center" orientation="vertical">
            <IcTypography variant="label" slot="label">
              <p style={{ width: "max-content" }}>Slotted label center</p>
            </IcTypography>
          </IcDivider>
          <IcDivider labelPlacement="bottom" orientation="vertical">
            <IcTypography variant="label" slot="label">
              <p style={{ width: "max-content" }}>Slotted label bottom</p>
            </IcTypography>
          </IcDivider>
        </div>
      </>
    );
    cy.checkHydrated(DIVIDER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "labels-and-label-placement",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });
});
