/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React, { ReactElement } from "react";
import { mount } from "cypress/react";
import { IcDrawer } from "../../components";
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
      name: "right-position-collapsed",
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
      name: "left-position-collapsed",
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
      name: "top-position-collapsed",
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
      name: "bottom-position-collapsed",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });

    cy.get(DRAWER_SELECTOR).invoke("prop", "expanded", true);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "bottom-position-expanded",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should set the aria label of the chevron button to the value of chevronButtonAriaLabel when chevronButtonAriaLabel is not an empty string", () => {
    mount(
      <IcDrawer
        heading="Roasted coffee"
        message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
        position="bottom"
        chevronButtonAriaLabel="Learn more about coffee"
      />
    );

    cy.checkHydrated(DRAWER_SELECTOR);

    cy.get(DRAWER_SELECTOR)
      .shadow()
      .find(".chevron-btn")
      .shadow()
      .find("button")
      .focus();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "chevron-btn-aria-label-collapsed",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });

    cy.get(DRAWER_SELECTOR).invoke("prop", "expanded", true);

    cy.get(DRAWER_SELECTOR)
      .shadow()
      .find(".chevron-btn")
      .shadow()
      .find("button")
      .focus();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "chevron-btn-aria-label-expanded",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should set the aria label of the close button to the value of closeButtonAriaLabel when closeButtonAriaLabel is not an empty string", () => {
    mount(
      <IcDrawer
        heading="Roasted coffee"
        message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
        showCloseButton
        closeButtonAriaLabel="Click to close"
        trigger="controlled"
        expanded
      />
    );

    cy.checkHydrated(DRAWER_SELECTOR);

    cy.get(DRAWER_SELECTOR)
      .shadow()
      .find(".close-btn")
      .shadow()
      .find("button")
      .focus();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "close-btn-aria-label-expanded",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should close the drawer hen closeOnBackdropClick is set to true and the backdrop is clicked", () => {
    mount(
      <IcDrawer
        heading="Menu"
        message="test"
        position="right"
        expanded
        closeOnBackdropClick
      />
    );

    cy.checkHydrated(DRAWER_SELECTOR);

    cy.get(DRAWER_SELECTOR)
      .shadow()
      .find(".ic-drawer-overlay")
      .click({ force: true });

    cy.get(DRAWER_SELECTOR).should(HAVE_ATTR, "expanded", "false");
  });

  it("should not close the drawer when closeOnBackdropClick is set to false and the backdrop is clicked", () => {
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

    cy.get(DRAWER_SELECTOR)
      .shadow()
      .find(".ic-drawer-overlay")
      .click({ force: true });

    cy.get(DRAWER_SELECTOR).should(HAVE_ATTR, "expanded", "");
  });
});
