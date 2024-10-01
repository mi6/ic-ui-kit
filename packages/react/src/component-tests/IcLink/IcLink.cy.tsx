/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
import { IcLink, IcTypography } from "../../components";
import { mount } from "cypress/react";
import { HAVE_ATTR } from "../utils/constants";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const LINK_SELECTOR = "ic-link";
const DEFAULT_TEST_THRESHOLD = 0.026;

describe("IcLink end-to-end, visual regression and a11y tests", () => {
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

    cy.checkHydrated(LINK_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render default IcLink with focus", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcLink href="/components/link/code">About our coffees</IcLink>
      </div>
    );

    cy.checkHydrated(LINK_SELECTOR);

    cy.get(LINK_SELECTOR).shadow().find("a").focus();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "default-focus",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render dark IcLink", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcLink theme="light" monochrome={true} href="/components/link/code">
          About our coffees
        </IcLink>
      </div>
    );

    cy.checkHydrated(LINK_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "dark",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.005),
    });
  });

  it("should render dark IcLink with focus", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcLink theme="light" monochrome={true} href="/components/link/code">
          About our coffees
        </IcLink>
      </div>
    );

    cy.checkHydrated(LINK_SELECTOR);

    cy.get(LINK_SELECTOR).shadow().find("a").focus();

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
        <IcLink href="/" theme="dark" monochrome={true}>
          About our coffees
        </IcLink>
      </div>
    );

    cy.checkHydrated(LINK_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "light",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.005),
    });
  });

  it("should render light IcLink with focus", () => {
    mount(
      <div
        style={{ backgroundColor: "black", margin: "16px", minHeight: "50px" }}
      >
        <IcLink href="/" theme="dark" monochrome={true}>
          About our coffees
        </IcLink>
      </div>
    );

    cy.checkHydrated(LINK_SELECTOR);

    cy.get(LINK_SELECTOR).shadow().find("a").focus();

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

    cy.checkHydrated(LINK_SELECTOR);

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

    cy.checkHydrated(LINK_SELECTOR);

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

    cy.checkHydrated(LINK_SELECTOR);

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

    cy.findShadowEl(LINK_SELECTOR, "a").should(
      HAVE_ATTR,
      ARIA_LABEL_ATTR,
      "first-label"
    );

    cy.get(LINK_SELECTOR).invoke("attr", ARIA_LABEL_ATTR, "second-label");
    cy.findShadowEl(LINK_SELECTOR, "a").should(
      HAVE_ATTR,
      ARIA_LABEL_ATTR,
      "second-label"
    );
  });

  it("should render inline IcLink", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcTypography>
          Return to the <IcLink href="/components/link">café homepage</IcLink>
        </IcTypography>
      </div>
    );

    cy.checkHydrated(LINK_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "inline",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });
});

describe("IcLink visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  after(() => {
    cy.disableForcedColors();
  });

  it("should render default IcLink in high contrast mode", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcLink href="/components/link/code">About our coffees</IcLink>
      </div>
    );

    cy.checkHydrated(LINK_SELECTOR);

    cy.compareSnapshot({
      name: "default-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render default IcLink with focus in high contrast mode", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcLink href="/components/link/code">About our coffees</IcLink>
      </div>
    );

    cy.checkHydrated(LINK_SELECTOR);

    cy.get(LINK_SELECTOR).shadow().find("a").focus();

    cy.compareSnapshot({
      name: "default-focus-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render inline IcLink in high contrast mode", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcTypography>
          Return to the <IcLink href="/components/link">café homepage</IcLink>
        </IcTypography>
      </div>
    );

    cy.checkHydrated(LINK_SELECTOR);

    cy.compareSnapshot({
      name: "inline-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render link with icon in high contrast mode", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcLink href="/" target="_blank">
          About our coffees
        </IcLink>
      </div>
    );

    cy.checkHydrated(LINK_SELECTOR);

    cy.compareSnapshot({
      name: "icon-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });
});
