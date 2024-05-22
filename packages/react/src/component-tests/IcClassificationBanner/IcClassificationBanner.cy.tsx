/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
import { IcClassificationBanner } from "../../components";
import { mount } from "cypress/react";

const DEFAULT_TEST_THRESHOLD = 0.03;

describe("IcClassificationButton visual and a11y testing", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should test default banner", () => {
    mount(<IcClassificationBanner></IcClassificationBanner>);

    cy.compareSnapshot({
      name: "default",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
    });
    cy.checkA11yWithWait();
  });

  it("should test official classification banner", () => {
    mount(
      <IcClassificationBanner classification="official"></IcClassificationBanner>
    );

    cy.compareSnapshot({
      name: "official",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("should test official-sensitive classification banner", () => {
    mount(
      <IcClassificationBanner classification="official-sensitive"></IcClassificationBanner>
    );

    cy.compareSnapshot({
      name: "official-sensitive",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("should test secret classification banner", () => {
    mount(
      <IcClassificationBanner classification="secret"></IcClassificationBanner>
    );

    cy.compareSnapshot({
      name: "secret",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("should test top-secret classification banner", () => {
    mount(
      <IcClassificationBanner classification="top-secret"></IcClassificationBanner>
    );

    cy.compareSnapshot({
      name: "top-secret",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("should test classification banner with country prop", () => {
    mount(
      <IcClassificationBanner
        classification="official"
        country="uk"
      ></IcClassificationBanner>
    );

    cy.compareSnapshot({
      name: "country official",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("should test classification banner with up-to prop", () => {
    mount(
      <IcClassificationBanner
        classification="official"
        upTo={true}
      ></IcClassificationBanner>
    );

    cy.compareSnapshot({
      name: "up to official",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
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

    cy.wait(500).compareSnapshot({
      name: "inline official",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.03,
    });
    cy.checkA11yWithWait();
  });
});
