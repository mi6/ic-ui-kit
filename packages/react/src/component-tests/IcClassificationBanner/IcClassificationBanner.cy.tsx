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

  it("tests default banner", () => {
    mount(<IcClassificationBanner></IcClassificationBanner>);

    cy.compareSnapshot("default", DEFAULT_TEST_THRESHOLD + 0.02);
    cy.checkA11yWithWait();
  });

  it("tests official classification banner", () => {
    mount(
      <IcClassificationBanner classification="official"></IcClassificationBanner>
    );

    cy.compareSnapshot("official", DEFAULT_TEST_THRESHOLD);
    cy.checkA11yWithWait();
  });

  it("tests official-sensitive classification banner", () => {
    mount(
      <IcClassificationBanner classification="official-sensitive"></IcClassificationBanner>
    );

    cy.compareSnapshot("official-sensitive", DEFAULT_TEST_THRESHOLD);
    cy.checkA11yWithWait();
  });

  it("tests secret classification banner", () => {
    mount(
      <IcClassificationBanner classification="secret"></IcClassificationBanner>
    );

    cy.compareSnapshot("secret", DEFAULT_TEST_THRESHOLD);
    cy.checkA11yWithWait();
  });

  it("tests top-secret classification banner", () => {
    mount(
      <IcClassificationBanner classification="top-secret"></IcClassificationBanner>
    );

    cy.compareSnapshot("top-secret", DEFAULT_TEST_THRESHOLD);
    cy.checkA11yWithWait();
  });

  it("tests classification banner with country prop", () => {
    mount(
      <IcClassificationBanner
        classification="official"
        country="uk"
      ></IcClassificationBanner>
    );

    cy.compareSnapshot("country official", DEFAULT_TEST_THRESHOLD);
    cy.checkA11yWithWait();
  });

  it("tests classification banner with up-to prop", () => {
    mount(
      <IcClassificationBanner
        classification="official"
        upTo={true}
      ></IcClassificationBanner>
    );

    cy.compareSnapshot("up to official", DEFAULT_TEST_THRESHOLD);
    cy.checkA11yWithWait();
  });

  it("tests classification banner with inline prop", () => {
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

    cy.wait(500).compareSnapshot(
      "inline official",
      DEFAULT_TEST_THRESHOLD + 0.03
    );
    cy.checkA11yWithWait();
  });
});
