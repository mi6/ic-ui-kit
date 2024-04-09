/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
import { IcChip } from "../../components";
import { mount } from "cypress/react";
import { SlottedSVG } from "../../";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";
import { SwitchColour } from "./IcChipTestData";
import { HAVE_PROP } from "../utils/constants";

const DEFAULT_TEST_THRESHOLD = 0.03;

describe("IcChip visual and a11y testing", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("renders static", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcChip label="Default" />
      </div>
    );

    cy.compareSnapshot({
      name: "static",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("renders outlined", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcChip label="Default" variant="outlined" />
      </div>
    );

    cy.compareSnapshot({
      name: "outlined",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("renders with icon", () => {
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

    cy.compareSnapshot({
      name: "with-icon",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("renders sizes", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcChip label="Small" size="small" />
        <IcChip label="Default" />
        <IcChip label="Large" size="large" />
      </div>
    );

    cy.compareSnapshot({
      name: "sizes",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("renders dismissible", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcChip id="small-chip" label="Small" size="small" dismissible />
        <IcChip label="Default" dismissible />
        <IcChip label="Large" size="large" dismissible />
      </div>
    );

    cy.compareSnapshot({
      name: "dismissible",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();

    cy.findShadowEl("ic-chip#small-chip", "button").focus();

    cy.compareSnapshot({
      name: "dismissible-focus",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.01,
    });
    cy.checkA11yWithWait();
  });

  it("renders disabled", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcChip label="Default" disabled />
        <IcChip label="Default" variant="outlined" disabled />
      </div>
    );

    cy.compareSnapshot({
      name: "disabled",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
  });

  it("renders with long label", () => {
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

    cy.compareSnapshot({
      name: "long-label",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
    });
    cy.checkA11yWithWait();
  });

  it("renders with white background for outlined variant", () => {
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

    cy.compareSnapshot({
      name: "white-background",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("renders with a custom colour", () => {
    mount(
      <div style={{ padding: "8px", gap: "8px" }}>
        <IcChip label="Default" customColor="#F8C8DC" />
        <IcChip label="Default" customColor="#F8C8DC" variant="outlined" />
        <IcChip label="Default" customColor="#00008B" />
      </div>
    );

    cy.compareSnapshot({
      name: "custom-colour",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
    cy.checkA11yWithWait();
  });

  it("switches custom colour after initial render", () => {
    mount(<SwitchColour />);

    cy.get("ic-button").click();

    cy.get("ic-chip").should(HAVE_PROP, "customColor", "#00008B");
  });
});
