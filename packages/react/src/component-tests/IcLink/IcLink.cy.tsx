/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
import { IcLink } from "../../components";
import { mount } from "cypress/react";
import { HAVE_ATTR } from "../utils/constants";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const DEFAULT_TEST_THRESHOLD = 0.026;

describe("IcLink e2e, A11y and visual regression tests", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render IcLink", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcLink href="/components/link/code">About our coffees</IcLink>
      </div>
    );

    cy.checkHydrated("ic-link");

    cy.compareSnapshot({
      name: "default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });

    cy.get("ic-link").shadow().find("a").focus();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "default-focus",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render dark IcLink", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcLink appearance={"dark"} href="/components/link/code">
          About our coffees
        </IcLink>
      </div>
    );

    cy.compareSnapshot({
      name: "dark",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.005),
    });

    cy.get("ic-link").shadow().find("a").focus();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "dark-focus",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.003),
    });
  });

  it("should render light IcLink", () => {
    mount(
      <div
        style={{ backgroundColor: "black", margin: "16px", minHeight: "50px" }}
      >
        <IcLink href="/" appearance="light">
          About our coffees
        </IcLink>
      </div>
    );

    cy.compareSnapshot({
      name: "light",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.005),
    });

    cy.get("ic-link").shadow().find("a").focus();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "light-focus",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.002),
    });
  });

  it("should verify download link existence on DOM", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcLink download href="/components/link/code">
          About our coffees
        </IcLink>
      </div>
    );

    cy.get('[download="true"]').should("exist");

    cy.checkA11yWithWait();
  });

  it("should render link with icon", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcLink href="/" target="_blank">
          About our coffees
        </IcLink>
      </div>
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "icon",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render multiline links", () => {
    mount(
      <div style={{ width: "100px", margin: "16px", minHeight: "50px" }}>
        <IcLink href="/">
          This is a link with a long label so it goes multiline
        </IcLink>
        <br />
        <br />
        <IcLink id="focusLink" href="/">
          This is a focussed link with a long label so it goes multiline
        </IcLink>
      </div>
    );

    cy.get("#focusLink").shadow().find("a").focus();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "multiline",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.045),
    });
  });

  it("should update any attributes that are inherited from the root element", () => {
    const ARIA_LABEL_ATTR = "aria-label";
    mount(
      <IcLink href="/components/link/code" aria-label="first-label">
        About our coffees
      </IcLink>
    );

    cy.findShadowEl("ic-link", "a").should(
      HAVE_ATTR,
      ARIA_LABEL_ATTR,
      "first-label"
    );

    cy.get("ic-link").invoke("attr", ARIA_LABEL_ATTR, "second-label");
    cy.findShadowEl("ic-link", "a").should(
      HAVE_ATTR,
      ARIA_LABEL_ATTR,
      "second-label"
    );
  });
});
