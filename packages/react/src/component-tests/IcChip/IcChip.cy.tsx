/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
import { IcChip } from "../../components";
import { mount } from "cypress/react";
import { SlottedSVG } from "../../";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";
import { SwitchColour } from "./IcChipTestData";
import { HAVE_PROP } from "../utils/constants";
import { CYPRESS_AXE_OPTIONS } from "../../../cypress/utils/a11y";

const DEFAULT_TEST_THRESHOLD = 0.022;
const CHIP_SELECTOR = "ic-chip";

describe("IcChip visual and a11y testing", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render static", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcChip label="Default" />
      </div>
    );
    cy.checkHydrated(CHIP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "static",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render outlined", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcChip label="Default" variant="outlined" />
      </div>
    );
    cy.checkHydrated(CHIP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "outlined",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render with icon", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcChip label="Default">
          <SlottedSVG
            slot="icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"></path>
          </SlottedSVG>
        </IcChip>
      </div>
    );
    cy.checkHydrated(CHIP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "with-icon",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render sizes", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcChip label="Small" size="small" />
        <IcChip label="Default" />
        <IcChip label="Large" size="large" />
      </div>
    );
    cy.checkHydrated(CHIP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "sizes",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
    });
  });

  it("should render dismissible", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcChip id="small-chip" label="Small" size="small" dismissible />
        <IcChip id="default-chip" label="Default" dismissible />
        <IcChip id="large-chip" label="Large" size="large" dismissible />
      </div>
    );
    cy.checkHydrated("ic-chip#small-chip");
    cy.checkHydrated("ic-chip#default-chip");
    cy.checkHydrated("ic-chip#large-chip");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "dismissible",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
    });

    cy.findShadowEl("ic-chip#small-chip", "button").focus();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "dismissible-focus",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.017),
    });
  });

  it("should render disabled", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcChip label="Default" disabled />
        <IcChip label="Default" variant="outlined" disabled />
      </div>
    );
    cy.checkHydrated(CHIP_SELECTOR);

    // Disabled elements do not to pass contrast checks according to WCAG guidance
    const customCypressRules = {
      rules: {
        ...CYPRESS_AXE_OPTIONS.rules,
        "color-contrast": { enabled: false },
      },
    };

    cy.checkA11yWithWait(undefined, undefined, customCypressRules);
    cy.compareSnapshot({
      name: "disabled",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.001),
    });
  });

  it("should render with long label", () => {
    mount(
      <div style={{ padding: "8px", maxWidth: "150px" }}>
        <IcChip
          label="Really long name for a chip that should wrap"
          dismissible
        >
          <SlottedSVG
            slot="icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"></path>
          </SlottedSVG>
        </IcChip>
      </div>
    );
    cy.checkHydrated(CHIP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "long-label",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.025),
    });
  });

  it("should render with white background for outlined variant", () => {
    mount(
      <div
        style={{
          backgroundColor: "#2c2f34",
          padding: "8px",
          width: "fit-content",
        }}
      >
        <IcChip
          label="Default"
          variant="outlined"
          transparentBackground={false}
        />
      </div>
    );
    cy.checkHydrated(CHIP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "white-background",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render with a custom colour", () => {
    mount(
      <div style={{ padding: "8px", gap: "8px" }}>
        <IcChip label="Default" customColor="#F8C8DC" />
        <IcChip label="Default" customColor="#F8C8DC" variant="outlined" />
        <IcChip label="Default" customColor="#00008B" />
      </div>
    );
    cy.checkHydrated(CHIP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "custom-colour",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.014),
    });
  });

  it("should switch custom colour after initial render", () => {
    mount(<SwitchColour />);

    cy.get("ic-button").click();
    cy.get("ic-chip").should(HAVE_PROP, "customColor", "#00008B");
  });
});
