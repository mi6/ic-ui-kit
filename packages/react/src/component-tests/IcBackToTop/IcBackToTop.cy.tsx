/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress/react";
import { NOT_BE_VISIBLE, CONTAIN_TEXT, BE_VISIBLE } from "../utils/constants";
import { BackToTop } from "./IcBackToTopTestData";
import { CYPRESS_AXE_OPTIONS } from "../../../cypress/utils/a11y";

const DEFAULT_TEST_THRESHOLD = 0.3;

describe("IcBackToTop", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should be hidden when viewport is at the top of the page", () => {
    mount(<BackToTop />);

    cy.get("ic-back-to-top")
      .shadow()
      .find("button")
      .should("exist")
      .should(NOT_BE_VISIBLE);
  });

  it("should have the correct text", () => {
    mount(<BackToTop />);

    cy.get("ic-back-to-top")
      .shadow()
      .find("ic-typography")
      .should(CONTAIN_TEXT, "Back to top");
  });

  it("should appear when top is off screen", () => {
    mount(<BackToTop />);

    cy.scrollTo("bottom").checkHydrated("ic-back-to-top");
    cy.get("ic-back-to-top")
      .shadow()
      .find("button")
      .wait(500)
      .should(BE_VISIBLE);
    cy.compareSnapshot("default", DEFAULT_TEST_THRESHOLD);
    cy.checkA11yWithWait();
  });

  it("should appear when the page is scrolled", () => {
    mount(<BackToTop />);

    cy.scrollTo(0, 100).checkHydrated("ic-back-to-top");
    cy.get("ic-back-to-top").shadow().find("button").should(BE_VISIBLE);
  });

  it("should hide and scroll page to top when clicked", () => {
    mount(<BackToTop />);

    cy.scrollTo("bottom").checkHydrated("ic-back-to-top");
    cy.get("ic-back-to-top")
      .shadow()
      .find("button")
      .should(BE_VISIBLE)
      .click()
      .wait(500);
    cy.get("ic-back-to-top").shadow().find("button").should(NOT_BE_VISIBLE);
  });

  it("should focus component", () => {
    mount(<BackToTop />);

    cy.scrollTo("bottom").checkHydrated("ic-back-to-top");
    cy.wait(500).get("ic-back-to-top").shadow().find("button").focus();
    cy.get("ic-back-to-top").shadow().find("button").should("have.focus");
    cy.compareSnapshot("focussed", DEFAULT_TEST_THRESHOLD);
  });
});
