/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React, { ReactElement } from "react";
import { mount } from "cypress/react";
import { IcDrawer } from "../../components";
// import { SlottedSVG } from "@ukic/react";
// import {
//   BE_VISIBLE,
//   HAVE_FOCUS,
// } from "@ukic/react/src/component-tests/utils/constants";
import { setThresholdBasedOnEnv } from "@ukic/react/cypress/utils/helpers";
import { HAVE_ATTR } from "@ukic/react/src/component-tests/utils/constants";

const DEFAULT_TEST_THRESHOLD = 0;

const DRAWER_SELECTOR = "ic-drawer";

describe("IcDrawer", () => {
  beforeEach(() => {
    cy.injectAxe();
    cy.viewport(1024, 768);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render on the right by default", () => {
    mount(<IcDrawer heading="Menu" message="test" expanded />);

    cy.checkHydrated(DRAWER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "right-position-closed",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });

    cy.get(DRAWER_SELECTOR).invoke("prop", "expanded", true);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "right-position-expanded",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render on the left", () => {
    mount(<IcDrawer heading="Menu" message="test" position="left" expanded />);

    cy.checkHydrated(DRAWER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "left-position-closed",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });

    cy.get(DRAWER_SELECTOR).invoke("prop", "expanded", true);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "left-position-expanded",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render at the top of the viewport", () => {
    mount(<IcDrawer heading="Menu" message="test" position="left" expanded />);

    cy.checkHydrated(DRAWER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "top-position-closed",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });

    cy.get(DRAWER_SELECTOR).invoke("prop", "expanded", true);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "top-position-expanded",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render a small-sized drawer", () => {
    mount(<IcDrawer heading="Menu" message="test" expanded size="small" />);

    cy.checkHydrated(DRAWER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "small-size-expanded",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render a large-sized drawer", () => {
    mount(<IcDrawer heading="Menu" message="test" expanded size="large" />);

    cy.checkHydrated(DRAWER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "large-size-expanded",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render at the bottom of the viewport", () => {
    mount(
      <IcDrawer heading="Menu" message="test" position="bottom" expanded />
    );

    cy.checkHydrated(DRAWER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "bottom-position-closed",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });

    cy.get(DRAWER_SELECTOR).invoke("prop", "expanded", true);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "bottom-position-expanded",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should not set expanded as false when the backdrop is clicked when closeOnBackdropClick is set to true", () => {
    mount(
      <IcDrawer
        heading="Menu"
        message="test"
        position="right"
        expanded
        closeOnBackdropClick={true}
      />
    );

    cy.checkHydrated(DRAWER_SELECTOR);

    // Simulate clicking the backdrop
    cy.get(DRAWER_SELECTOR)
      .shadow()
      .find(".ic-drawer-overlay")
      .click({ force: true });

    // Assert that the expanded state does not change
    cy.get(DRAWER_SELECTOR).should(HAVE_ATTR, "expanded", "true");
  });

  it("should not set expanded as false when the backdrop is clicked when closeOnBackdropClick is set to false", () => {
    mount(
      <IcDrawer
        heading="Menu"
        message="test"
        position="right"
        expanded
        closeOnBackdropClick={false}
      />
    );

    cy.checkHydrated(DRAWER_SELECTOR);

    // Simulate clicking the backdrop
    cy.get(DRAWER_SELECTOR)
      .shadow()
      .find(".ic-drawer-overlay")
      .click({ force: true });

    // Assert that the expanded state does not change
    cy.get(DRAWER_SELECTOR).should(HAVE_ATTR, "expanded", "true");
  });
});
