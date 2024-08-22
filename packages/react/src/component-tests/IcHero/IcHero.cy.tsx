/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress/react";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";
import {
  Default,
  SlottedHeadings,
  CenterAlignment,
  CenteredContent,
  Small,
  SecondaryHeadingSearchbar,
  WithCard,
  WithImageRight,
  BackgroundImage,
  LongHeading,
  FullWidth,
  Theme,
} from "./IcHeroTestData";
import { BE_VISIBLE } from "../utils/constants";

const DEFAULT_TEST_THRESHOLD = 0.022;
const IC_HERO_SELECTOR = "ic-hero";

describe("IcHero end-to-end, visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.injectAxe();
    cy.viewport(1500, 500);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render default hero", () => {
    mount(<Default />);

    cy.checkHydrated(IC_HERO_SELECTOR);

    cy.checkA11yWithWait(undefined, 200);
    cy.compareSnapshot({
      name: "default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.009),
    });
  });

  it("should render with slotted heading and subheading", () => {
    mount(<SlottedHeadings />);

    cy.checkHydrated(IC_HERO_SELECTOR);
    cy.get('ic-typography[slot="heading"]').should(BE_VISIBLE);
    cy.get('ic-typography[slot="subheading"]').should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "slotted-headings",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render center alignment", () => {
    mount(<CenterAlignment />);

    cy.checkHydrated(IC_HERO_SELECTOR);
    cy.get(IC_HERO_SELECTOR).invoke("prop", "aligned").should("eq", "center");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "centered",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.009),
    });
  });

  it("should render with centered content alignment", () => {
    mount(<CenteredContent />);

    cy.checkHydrated(IC_HERO_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "centered-content",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.008),
    });
  });

  it("should render small size", () => {
    mount(<Small />);

    cy.checkHydrated(IC_HERO_SELECTOR);
    cy.get(IC_HERO_SELECTOR).invoke("prop", "size").should("eq", "small");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "small",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.017),
    });
  });

  it("should render secondary heading and searchbar", () => {
    mount(<SecondaryHeadingSearchbar />);

    cy.checkHydrated(IC_HERO_SELECTOR);
    cy.get(".secondary-heading").should(BE_VISIBLE);
    cy.get('ic-search-bar[slot="interaction"]').should(BE_VISIBLE);

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "secondary-heading-search",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.008),
    });

    cy.findShadowEl("ic-search-bar", "ic-text-field")
      .shadow()
      .find("ic-input-component-container")
      .type("Search text");
  });

  it("should render card on right", () => {
    mount(<WithCard />);

    cy.checkHydrated(IC_HERO_SELECTOR);
    cy.get('ic-card[slot="secondary"]').should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "card-content",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.016),
    });
  });

  it("should render image on right", () => {
    mount(<WithImageRight />);

    cy.checkHydrated(IC_HERO_SELECTOR);
    cy.get('svg[slot="secondary"]').should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "image-right",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.009),
    });
  });

  it("should render background image", () => {
    mount(<BackgroundImage />);

    cy.checkHydrated(IC_HERO_SELECTOR);

    cy.checkA11yWithWait(undefined, 300);
    cy.compareSnapshot({
      name: "background-image",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.009),
    });
  });

  it("should render with long heading", () => {
    mount(<LongHeading />);

    cy.checkHydrated(IC_HERO_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "long-heading",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.023),
    });
  });

  it("should render full width", () => {
    mount(<FullWidth />);

    cy.checkHydrated(IC_HERO_SELECTOR);
    cy.get(IC_HERO_SELECTOR)
      .invoke("prop", "aligned")
      .should("eq", "full-width");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "full-width",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.009),
    });
  });

  it("should render with theming", () => {
    mount(<Theme />);

    cy.checkHydrated(IC_HERO_SELECTOR);
    cy.get("ic-theme").should("exist");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "theme",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.028),
    });
  });
});

describe("IcHero visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  beforeEach(() => {
    cy.viewport(1500, 500);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  after(() => {
    cy.disableForcedColors();
  });

  it("should render default hero in high contrast mode", () => {
    mount(<Default />);

    cy.checkHydrated(IC_HERO_SELECTOR);

    cy.wait(500).compareSnapshot({
      name: "default-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.01),
    });
  });

  it("should render with slotted heading and subheading in high contrast mode", () => {
    mount(<SlottedHeadings />);

    cy.checkHydrated(IC_HERO_SELECTOR);

    cy.wait(500).compareSnapshot({
      name: "slotted-headings-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.001),
    });
  });

  it("should render with card on right in high contrast mode", () => {
    mount(<WithCard />);

    cy.checkHydrated(IC_HERO_SELECTOR);

    cy.wait(500).compareSnapshot({
      name: "card-content-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.017),
    });
  });

  it("should render with background image in high contrast mode", () => {
    mount(<BackgroundImage />);

    cy.checkHydrated(IC_HERO_SELECTOR);

    cy.wait(500).compareSnapshot({
      name: "background-image-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.01),
    });
  });
});
