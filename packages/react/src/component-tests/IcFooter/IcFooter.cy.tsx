/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress/react";
import { BE_VISIBLE, HAVE_LENGTH } from "../utils/constants";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";
import {
  CenterAlignment,
  Default,
  ExtraLarge,
  ExtraSmall,
  FullWidth,
  GroupedLinks,
  Layout,
  LogoLinks,
  NoCaption,
  NoCaptionCopyright,
  NoDescription,
  NoLinks,
  SlottedContent,
  Theme,
  ToggleGroupLinks,
  WithClassificationBanner,
} from "./IcFooterTestData";

const FOOTER_SELECTOR = "ic-footer";
const DEFAULT_TEST_THRESHOLD = 0.034;

describe("IcFooter end-to-end, visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.injectAxe();
    cy.viewport(1440, 750);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render with description, caption, copyright and slotted links", () => {
    mount(<Default />);
    cy.viewport(1024, 750);

    cy.checkHydrated(FOOTER_SELECTOR);
    cy.findShadowEl(FOOTER_SELECTOR, "div.footer-description").should(
      BE_VISIBLE
    );
    cy.findShadowEl(FOOTER_SELECTOR, ".footer-caption").should(BE_VISIBLE);
    cy.findShadowEl(FOOTER_SELECTOR, ".footer-copyright").should(BE_VISIBLE);
    cy.get("ic-footer-link").should(BE_VISIBLE).should(HAVE_LENGTH, "4");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.027),
    });
  });

  it("should render with grouped links", () => {
    mount(<GroupedLinks />);

    cy.checkHydrated(FOOTER_SELECTOR);
    cy.get("ic-footer-link-group").should(BE_VISIBLE).should(HAVE_LENGTH, "3");
    cy.get("ic-footer-link").should(BE_VISIBLE).should(HAVE_LENGTH, "12");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "group-links",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
    });
  });

  it("should toggle the link groups when clicked - before click", () => {
    mount(<ToggleGroupLinks />);
    cy.viewport(600, 750);

    cy.checkHydrated(FOOTER_SELECTOR);

    //cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "before-click",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should toggle the link groups when clicked - after click", () => {
    mount(<ToggleGroupLinks />);
    cy.viewport(600, 750);

    cy.checkHydrated(FOOTER_SELECTOR);

    cy.wait(500)
      .get('ic-footer-link-group[slot="link"]')
      .each(($linkGroup) => {
        cy.wrap($linkGroup).click({ force: true });
      });

    //cy.checkA11yWithWait();
    cy.wait(500).compareSnapshot({
      name: "after-click",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.006),
    });
  });

  it("should render footer with center alignment", () => {
    mount(<CenterAlignment />);

    cy.checkHydrated(FOOTER_SELECTOR);
    cy.get(FOOTER_SELECTOR).invoke("prop", "aligned").should("eq", "center");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "center",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.017),
    });
  });

  it("should display full-width footer ", () => {
    mount(<FullWidth />);

    cy.checkHydrated(FOOTER_SELECTOR);
    cy.get(FOOTER_SELECTOR)
      .invoke("prop", "aligned")
      .should("eq", "full-width");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "full-width",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.017),
    });
  });

  it("should verify footer display for extra small screen size", () => {
    mount(<ExtraSmall />);
    cy.viewport(450, 790);

    cy.checkHydrated(FOOTER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "extra-small",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.059),
    });
  });

  it("should verify footer display for extra large screen sizes", () => {
    mount(<ExtraLarge />);

    cy.checkHydrated(FOOTER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "extra-large",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.017),
    });
  });

  it("should render logo with links", () => {
    mount(<LogoLinks />);
    cy.viewport(1024, 750);

    cy.checkHydrated(FOOTER_SELECTOR);

    cy.checkA11yWithWait("svg", 500);
    cy.compareSnapshot({
      name: "logo-with-links",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
    });
  });

  it("should render with layout", () => {
    mount(<Layout />);
    cy.viewport(1024, 750);

    cy.checkHydrated(FOOTER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "layout-link",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.058),
    });
  });

  it("should not display the crown copyright", () => {
    mount(<NoCaptionCopyright />);
    cy.viewport(1024, 750);

    cy.checkHydrated(FOOTER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "no-copyright",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.024),
    });
  });

  it("should render without description", () => {
    mount(<NoDescription />);
    cy.viewport(1024, 750);

    cy.checkHydrated(FOOTER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "no-description",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.018),
    });
  });

  it("should render with no caption or copyright", () => {
    mount(<NoCaption />);
    cy.viewport(1024, 750);

    cy.checkHydrated(FOOTER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "no-caption-copyright",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.006),
    });
  });

  it("should render a footer with no links", () => {
    mount(<NoLinks />);
    cy.viewport(1024, 750);

    cy.checkHydrated(FOOTER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "no-links",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
    });
  });

  it("should render a footer with slotted description and caption", () => {
    mount(<SlottedContent />);
    cy.viewport(1024, 750);

    cy.checkHydrated(FOOTER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "slotted-description-caption",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
    });
  });

  it("should render with classification banner", () => {
    mount(<WithClassificationBanner />);

    cy.checkHydrated(FOOTER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "classification-banner",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
    });
  });

  it("should render with theming", () => {
    mount(<Theme />);

    cy.checkHydrated(FOOTER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "theme",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.034),
    });
  });
});

describe("IcFooter visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  beforeEach(() => {
    cy.viewport(1440, 750);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  after(() => {
    cy.disableForcedColors();
  });

  it("should render default in high contrast mode", () => {
    mount(<Default />);

    cy.checkHydrated(FOOTER_SELECTOR);

    cy.compareSnapshot({
      name: "default-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.018),
    });
  });

  it("should render with slotted content in high contrast mode", () => {
    mount(<SlottedContent />);

    cy.checkHydrated(FOOTER_SELECTOR);

    cy.compareSnapshot({
      name: "slotted-content-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.015),
    });
  });

  it("should render logo with links in high contrast mode", () => {
    mount(<LogoLinks />);
    cy.viewport(1024, 750);

    cy.checkHydrated(FOOTER_SELECTOR);

    cy.compareSnapshot({
      name: "logo-links-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
    });
  });
});
