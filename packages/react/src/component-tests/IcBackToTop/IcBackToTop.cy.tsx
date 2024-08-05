/// <reference types="Cypress" />

import { mount } from "cypress/react";
import React from "react";
import {
  BE_VISIBLE,
  CONTAIN_TEXT,
  HAVE_FOCUS,
  NOT_BE_VISIBLE,
  NOT_CONTAIN,
} from "../utils/constants";
import { BackToTop } from "./IcBackToTopTestData";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const BACK_TO_TOP_SELECTOR = "ic-back-to-top";
const DEFAULT_TEST_THRESHOLD = 0.067;

describe("IcBackToTop end-to-end tests", () => {
  it("should be hidden when viewport is at the top of the page", () => {
    mount(<BackToTop />);

    cy.checkHydrated(BACK_TO_TOP_SELECTOR);

    cy.get(BACK_TO_TOP_SELECTOR)
      .shadow()
      .find("ic-button")
      .should("exist")
      .should(NOT_BE_VISIBLE);
  });

  it("should have the correct text", () => {
    mount(<BackToTop />);

    cy.checkHydrated(BACK_TO_TOP_SELECTOR);

    cy.get(BACK_TO_TOP_SELECTOR).shadow().should(CONTAIN_TEXT, "Back to top");
  });

  it("should appear when top is off screen", () => {
    mount(<BackToTop />);

    cy.scrollTo("bottom").checkHydrated(BACK_TO_TOP_SELECTOR);
    cy.get(BACK_TO_TOP_SELECTOR)
      .shadow()
      .find("ic-button")
      .wait(500)
      .should(BE_VISIBLE)
      .and(CONTAIN_TEXT, "Back to top");
  });

  it("should appear with icon only when top is off screen", () => {
    mount(<BackToTop variant="icon" />);

    cy.scrollTo("bottom").checkHydrated(BACK_TO_TOP_SELECTOR);
    cy.get(BACK_TO_TOP_SELECTOR)
      .shadow()
      .find("ic-button")
      .wait(500)
      .should(BE_VISIBLE)
      .and(NOT_CONTAIN, "Back to top");
  });

  it("should appear when the page is scrolled", () => {
    mount(<BackToTop />);

    cy.scrollTo(0, 100).checkHydrated(BACK_TO_TOP_SELECTOR);
    cy.get(BACK_TO_TOP_SELECTOR).shadow().find("ic-button").should(BE_VISIBLE);
  });

  it("should hide and scroll page to top when clicked", () => {
    mount(<BackToTop />);

    cy.scrollTo("bottom").checkHydrated(BACK_TO_TOP_SELECTOR);
    cy.get(BACK_TO_TOP_SELECTOR)
      .shadow()
      .find("ic-button")
      .should(BE_VISIBLE)
      .click()
      .wait(500);
    cy.get(BACK_TO_TOP_SELECTOR)
      .shadow()
      .find("ic-button")
      .should(NOT_BE_VISIBLE);
  });

  it("should focus component", () => {
    mount(<BackToTop />);

    cy.scrollTo("bottom").checkHydrated(BACK_TO_TOP_SELECTOR);
    cy.wait(500)
      .get(BACK_TO_TOP_SELECTOR)
      .shadow()
      .find("ic-button")
      .shadow()
      .find("button")
      .focus();
    cy.get(BACK_TO_TOP_SELECTOR).shadow().find("ic-button").should(HAVE_FOCUS);
  });
});

describe("IcBackToTop visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render default BackToTop", () => {
    mount(<BackToTop />);

    cy.scrollTo("bottom").checkHydrated(BACK_TO_TOP_SELECTOR).wait(500);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render icon only BackToTop", () => {
    mount(<BackToTop variant="icon" />);

    cy.scrollTo("bottom").checkHydrated(BACK_TO_TOP_SELECTOR).wait(500);

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "icon",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.001),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render focused BackToTop", () => {
    mount(<BackToTop />);

    cy.scrollTo("bottom").checkHydrated(BACK_TO_TOP_SELECTOR);
    cy.wait(500)
      .get(BACK_TO_TOP_SELECTOR)
      .shadow()
      .find("ic-button")
      .shadow()
      .find("button")
      .focus()
      .wait(1000);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "focussed",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render focused icon only BackToTop", () => {
    mount(<BackToTop variant="icon" />);

    cy.scrollTo("bottom").checkHydrated(BACK_TO_TOP_SELECTOR);
    cy.wait(500)
      .get(BACK_TO_TOP_SELECTOR)
      .shadow()
      .find("ic-button")
      .shadow()
      .find("button")
      .focus()
      .wait(1000);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "focussed-icon-only",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.028),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });
});

describe("IcBackToTop visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  after(() => {
    cy.disableForcedColors();
  });

  it("should render default BackToTop in high contrast mode", () => {
    mount(<BackToTop />);

    cy.scrollTo("bottom").checkHydrated(BACK_TO_TOP_SELECTOR).wait(1000);

    cy.compareSnapshot({
      name: "default-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.013),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render icon only BackToTop in high contrast mode", () => {
    mount(<BackToTop variant="icon" />);

    cy.scrollTo("bottom").checkHydrated(BACK_TO_TOP_SELECTOR).wait(500);

    cy.compareSnapshot({
      name: "icon-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.002),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render focused BackToTop in high contrast mode", () => {
    mount(<BackToTop />);

    cy.scrollTo("bottom").checkHydrated(BACK_TO_TOP_SELECTOR);
    cy.wait(500)
      .get(BACK_TO_TOP_SELECTOR)
      .shadow()
      .find("ic-button")
      .shadow()
      .find("button")
      .focus()
      .wait(1000);

    cy.compareSnapshot({
      name: "focussed-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.013),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render focused icon only BackToTop in high contrast mode", () => {
    mount(<BackToTop variant="icon" />);

    cy.scrollTo("bottom").checkHydrated(BACK_TO_TOP_SELECTOR);
    cy.wait(500)
      .get(BACK_TO_TOP_SELECTOR)
      .shadow()
      .find("ic-button")
      .shadow()
      .find("button")
      .focus()
      .wait(1000);

    cy.compareSnapshot({
      name: "focussed-icon-only-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.018),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });
});
