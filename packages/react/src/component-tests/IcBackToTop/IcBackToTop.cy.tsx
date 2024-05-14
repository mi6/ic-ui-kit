/// <reference types="Cypress" />

import { mount } from "cypress/react";
import React from "react";
import {
  BE_VISIBLE,
  CONTAIN_TEXT,
  HAVE_FOCUS,
  NOT_BE_VISIBLE,
} from "../utils/constants";
import { BackToTop } from "./IcBackToTopTestData";

const DEFAULT_TEST_THRESHOLD = 0.3;

const BACK_TO_TOP_SELECTOR = "ic-back-to-top";

describe("IcBackToTop", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should be hidden when viewport is at the top of the page", () => {
    mount(<BackToTop />);

    cy.get(BACK_TO_TOP_SELECTOR)
      .shadow()
      .find("button")
      .should("exist")
      .should(NOT_BE_VISIBLE);
  });

  it("should have the correct text", () => {
    mount(<BackToTop />);

    cy.get(BACK_TO_TOP_SELECTOR)
      .shadow()
      .find("ic-typography")
      .should(CONTAIN_TEXT, "Back to top");
  });

  it("should appear when top is off screen", () => {
    mount(<BackToTop />);

    cy.scrollTo("bottom").checkHydrated(BACK_TO_TOP_SELECTOR);
    cy.get(BACK_TO_TOP_SELECTOR)
      .shadow()
      .find("button")
      .wait(500)
      .should(BE_VISIBLE);
    cy.compareSnapshot({
      name: "default",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("should appear with icon only when top is off screen", () => {
    mount(<BackToTop variant="icon" />);

    cy.scrollTo("bottom").checkHydrated(BACK_TO_TOP_SELECTOR);
    cy.get(BACK_TO_TOP_SELECTOR)
      .shadow()
      .find("ic-tooltip")
      .wait(500)
      .should(BE_VISIBLE);
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "icon",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
  });

  it("should appear when the page is scrolled", () => {
    mount(<BackToTop />);

    cy.scrollTo(0, 100).checkHydrated(BACK_TO_TOP_SELECTOR);
    cy.get(BACK_TO_TOP_SELECTOR).shadow().find("button").should(BE_VISIBLE);
  });

  it("should hide and scroll page to top when clicked", () => {
    mount(<BackToTop />);

    cy.scrollTo("bottom").checkHydrated(BACK_TO_TOP_SELECTOR);
    cy.get(BACK_TO_TOP_SELECTOR)
      .shadow()
      .find("button")
      .should(BE_VISIBLE)
      .click()
      .wait(500);
    cy.get(BACK_TO_TOP_SELECTOR).shadow().find("button").should(NOT_BE_VISIBLE);
  });

  it("should focus component", () => {
    mount(<BackToTop />);

    cy.scrollTo("bottom").checkHydrated(BACK_TO_TOP_SELECTOR);
    cy.wait(500).get(BACK_TO_TOP_SELECTOR).shadow().find("button").focus();
    cy.get(BACK_TO_TOP_SELECTOR).shadow().find("button").should(HAVE_FOCUS);
    cy.compareSnapshot({
      name: "focussed",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
  });
});
