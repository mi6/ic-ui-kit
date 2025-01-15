/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress/react";
import { BE_VISIBLE, HAVE_ATTR, HAVE_LENGTH } from "../utils/constants";
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
const FOOTER_LINK_GROUP_SELECTOR = "ic-footer-link-group";
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
      name: "IcFooter/default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.027),
    });
  });

  it("should render with grouped links", () => {
    mount(<GroupedLinks />);

    cy.checkHydrated(FOOTER_SELECTOR);
    cy.get(FOOTER_LINK_GROUP_SELECTOR)
      .should(BE_VISIBLE)
      .should(HAVE_LENGTH, "3");
    cy.get("ic-footer-link").should(BE_VISIBLE).should(HAVE_LENGTH, "12");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "IcFooter/group-links",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
    });
  });

  it("should focus grouped link in mobile viewport", () => {
    mount(<GroupedLinks />);
    cy.viewport(600, 750);

    cy.checkHydrated(FOOTER_SELECTOR);

    cy.get(FOOTER_LINK_GROUP_SELECTOR)
      .should(BE_VISIBLE)
      .should(HAVE_LENGTH, "3");

    cy.get(FOOTER_LINK_GROUP_SELECTOR).last().click();
    cy.realPress(["Shift", "Tab"])
      .realPress(["Shift", "Tab"])
      .realPress("Space");
    cy.get(FOOTER_LINK_GROUP_SELECTOR).should(HAVE_ATTR, "aria-expanded");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "IcFooter/group-links-mobile",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.043),
    });
  });

  it("should toggle the link groups when clicked - before click", () => {
    mount(<ToggleGroupLinks />);
    cy.viewport(600, 750);

    cy.checkHydrated(FOOTER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "IcFooter/before-click",
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

    cy.checkA11yWithWait();
    cy.wait(500).compareSnapshot({
      name: "IcFooter/after-click",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.006),
    });
  });

  it("should render footer with center alignment", () => {
    mount(<CenterAlignment />);

    cy.checkHydrated(FOOTER_SELECTOR);
    cy.get(FOOTER_SELECTOR).invoke("prop", "aligned").should("eq", "center");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "IcFooter/center",
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
      name: "IcFooter/full-width",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.017),
    });
  });

  it("should verify footer display for extra small screen size", () => {
    mount(<ExtraSmall />);
    cy.viewport(450, 790);

    cy.checkHydrated(FOOTER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "IcFooter/extra-small",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.059),
    });
  });

  it("should verify footer display for extra large screen sizes", () => {
    mount(<ExtraLarge />);

    cy.checkHydrated(FOOTER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "IcFooter/extra-large",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.017),
    });
  });

  it("should render logo with links", () => {
    mount(<LogoLinks />);
    cy.viewport(1024, 750);

    cy.checkHydrated(FOOTER_SELECTOR);

    cy.checkA11yWithWait("svg", 500);
    cy.compareSnapshot({
      name: "IcFooter/logo-with-links",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
    });
  });

  it("should render with layout", () => {
    mount(<Layout />);
    cy.viewport(1024, 750);

    cy.checkHydrated(FOOTER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "IcFooter/layout-link",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.058),
    });
  });

  it("should not display the crown copyright", () => {
    mount(<NoCaptionCopyright />);
    cy.viewport(1024, 750);

    cy.checkHydrated(FOOTER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "IcFooter/no-copyright",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.024),
    });
  });

  it("should render without description", () => {
    mount(<NoDescription />);
    cy.viewport(1024, 750);

    cy.checkHydrated(FOOTER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "IcFooter/no-description",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.018),
    });
  });

  it("should render with no caption or copyright", () => {
    mount(<NoCaption />);
    cy.viewport(1024, 750);

    cy.checkHydrated(FOOTER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "IcFooter/no-caption-copyright",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.006),
    });
  });

  it("should render a footer with no links", () => {
    mount(<NoLinks />);
    cy.viewport(1024, 750);

    cy.checkHydrated(FOOTER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "IcFooter/no-links",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
    });
  });

  it("should render a footer with slotted description and caption", () => {
    mount(<SlottedContent />);
    cy.viewport(1024, 750);

    cy.checkHydrated(FOOTER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "IcFooter/slotted-description-caption",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
    });
  });

  it("should render with classification banner", () => {
    mount(<WithClassificationBanner />);

    cy.checkHydrated(FOOTER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "IcFooter/classification-banner",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
    });
  });

  it("should render with theming", () => {
    mount(<Theme />);

    cy.checkHydrated(FOOTER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "IcFooter/theme",
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
      name: "IcFooter/default-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.018),
    });
  });

  it("should render with slotted content in high contrast mode", () => {
    mount(<SlottedContent />);

    cy.checkHydrated(FOOTER_SELECTOR);

    cy.compareSnapshot({
      name: "IcFooter/slotted-content-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.015),
    });
  });

  it("should render logo with links in high contrast mode", () => {
    mount(<LogoLinks />);
    cy.viewport(1024, 750);

    cy.checkHydrated(FOOTER_SELECTOR);

    cy.compareSnapshot({
      name: "IcFooter/logo-links-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
    });
  });
});
