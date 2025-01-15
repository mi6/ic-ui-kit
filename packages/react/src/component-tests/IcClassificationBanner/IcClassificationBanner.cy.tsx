/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
import { IcClassificationBanner } from "../../components";
import { mount } from "cypress/react";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const DEFAULT_TEST_THRESHOLD = 0.02;
const BANNER = "ic-classification-banner";

describe("IcClassificationBanner visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render default banner", () => {
    mount(<IcClassificationBanner></IcClassificationBanner>);
    cy.checkHydrated(BANNER);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "IcClassificationBanner/default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.013),
    });
  });

  it("should render undefined props to default design", () => {
    mount(
      <IcClassificationBanner
        classification={undefined}
        country={undefined}
        additionalSelectors={undefined}
      ></IcClassificationBanner>
    );
    cy.checkHydrated(BANNER);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "IcClassificationBanner/undefined",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.013),
    });
  });

  it("should render official classification banner", () => {
    mount(
      <IcClassificationBanner classification="official"></IcClassificationBanner>
    );
    cy.checkHydrated(BANNER);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "IcClassificationBanner/official",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render official-sensitive classification banner", () => {
    mount(
      <IcClassificationBanner classification="official-sensitive"></IcClassificationBanner>
    );
    cy.checkHydrated(BANNER);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "IcClassificationBanner/official-sensitive",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.005),
    });
  });

  it("should render secret classification banner", () => {
    mount(
      <IcClassificationBanner classification="secret"></IcClassificationBanner>
    );
    cy.checkHydrated(BANNER);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "IcClassificationBanner/secret",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.001),
    });
  });

  it("should render top-secret classification banner", () => {
    mount(
      <IcClassificationBanner classification="top-secret"></IcClassificationBanner>
    );
    cy.checkHydrated(BANNER);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "IcClassificationBanner/top-secret",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.004),
    });
  });

  it("should render classification banner with country prop", () => {
    mount(
      <IcClassificationBanner
        classification="official"
        country="uk"
      ></IcClassificationBanner>
    );
    cy.checkHydrated(BANNER);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "IcClassificationBanner/country-official",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render classification banner with up-to prop", () => {
    mount(
      <IcClassificationBanner
        classification="official"
        upTo={true}
      ></IcClassificationBanner>
    );
    cy.checkHydrated(BANNER);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "IcClassificationBanner/up-to-official",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render classification banner with inline prop", () => {
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
      name: "IcClassificationBanner/inline-official",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.026),
    });
  });
});

describe("IcClassificationBanner visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  after(() => {
    cy.disableForcedColors();
  });

  it("should render classification banner with up-to prop in high contrast mode", () => {
    mount(
      <IcClassificationBanner
        classification="official"
        upTo={true}
      ></IcClassificationBanner>
    );
    cy.checkHydrated(BANNER);

    cy.compareSnapshot({
      name: "IcClassificationBanner/up-to-official-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });
});
