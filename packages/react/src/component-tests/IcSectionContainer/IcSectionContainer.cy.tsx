/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import { mount } from "cypress/react";
import React from "react";
import { IcSectionContainer, IcButton } from "../../components";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const DEFAULT_TEST_THRESHOLD = 0.016;
const SECTION_CONTAINER_SELECTOR = "ic-section-container";

describe("IcSectionContainer visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.viewport(1024, 750);
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render default left aligned section container", () => {
    mount(
      <IcSectionContainer style={{ border: "1px solid black" }}>
        <main>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <IcButton>Start</IcButton>
            <IcButton>End</IcButton>
          </div>
        </main>
      </IcSectionContainer>
    );

    cy.checkHydrated(SECTION_CONTAINER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/left-aligned",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render center aligned section container", () => {
    mount(
      <IcSectionContainer
        aligned="center"
        style={{ border: "1px solid black" }}
      >
        <main>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <IcButton>Start</IcButton>
            <IcButton>End</IcButton>
          </div>
        </main>
      </IcSectionContainer>
    );

    cy.checkHydrated(SECTION_CONTAINER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/center-aligned",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render full width section container", () => {
    mount(
      <IcSectionContainer
        aligned="full-width"
        style={{ border: "1px solid black" }}
      >
        <main>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <IcButton>Start</IcButton>
            <IcButton>End</IcButton>
          </div>
        </main>
      </IcSectionContainer>
    );

    cy.checkHydrated(SECTION_CONTAINER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/full-width",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render full width section container", () => {
    mount(
      <IcSectionContainer
        aligned="full-width"
        fullHeight="true"
        style={{ border: "1px solid black" }}
      >
        <main>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <IcButton>Start</IcButton>
            <IcButton>End</IcButton>
          </div>
        </main>
      </IcSectionContainer>
    );

    cy.checkHydrated(SECTION_CONTAINER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/full-height",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });
});
