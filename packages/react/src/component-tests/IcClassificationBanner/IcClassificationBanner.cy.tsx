/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
import { IcClassificationBanner } from "../../components";
import { mount } from "cypress/react";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const DEFAULT_TEST_THRESHOLD = 0.02;
const BANNER = "ic-classification-banner";

describe("IcClassificationButton visual and a11y testing", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should test default banner", () => {
    mount(<IcClassificationBanner></IcClassificationBanner>);
    cy.checkHydrated(BANNER);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.013),
    });
  });

  it("should test official classification banner", () => {
    mount(
      <IcClassificationBanner classification="official"></IcClassificationBanner>
    );
    cy.checkHydrated(BANNER);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "official",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should test official-sensitive classification banner", () => {
    mount(
      <IcClassificationBanner classification="official-sensitive"></IcClassificationBanner>
    );
    cy.checkHydrated(BANNER);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "official-sensitive",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.005),
    });
  });

  it("should test secret classification banner", () => {
    mount(
      <IcClassificationBanner classification="secret"></IcClassificationBanner>
    );
    cy.checkHydrated(BANNER);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "secret",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.001),
    });
  });

  it("should test top-secret classification banner", () => {
    mount(
      <IcClassificationBanner classification="top-secret"></IcClassificationBanner>
    );
    cy.checkHydrated(BANNER);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "top-secret",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.004),
    });
  });

  it("should test classification banner with country prop", () => {
    mount(
      <IcClassificationBanner
        classification="official"
        country="uk"
      ></IcClassificationBanner>
    );
    cy.checkHydrated(BANNER);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "country-official",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should test classification banner with up-to prop", () => {
    mount(
      <IcClassificationBanner
        classification="official"
        upTo={true}
      ></IcClassificationBanner>
    );
    cy.checkHydrated(BANNER);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "up-to-official",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should test classification banner with inline prop", () => {
    mount(
      <div>
        <div
          style={{
            height: "10vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Container to show inline banner
        </div>
        <IcClassificationBanner
          classification="official"
          inline={true}
        ></IcClassificationBanner>
      </div>
    );
    cy.checkHydrated(BANNER);

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "inline-official",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.026),
    });
  });
});
