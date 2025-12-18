/// <reference types="Cypress" />

import { mount } from "cypress/react";
import React from "react";
import {
  Default,
  BackBreadcrumb,
  WithIcons,
  WithCurrentPage,
  Collapsed,
  Appearance,
  ToggleCollapsed,
  ToggleBackBreadcrumb,
  SlottedLinks,
  SlottedLinksWithBackBreadCrumbOnly,
} from "./IcBreadcrumbTestData";
import {
  BE_VISIBLE,
  HAVE_ATTR,
  HAVE_FOCUS,
  NOT_BE_VISIBLE,
  NOT_HAVE_ATTR,
  NOT_EXIST,
  HAVE_LENGTH,
} from "../utils/constants";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const IC_BREADCRUMB_LABEL = "ic-breadcrumb";
const DEFAULT_TEST_THRESHOLD = 0.009;

describe("IcBreadcrumb end-to-end tests", () => {
  beforeEach(() => {
    cy.viewport(1024, 750);
  });

  it("should render default breadcrumb with page-title and href", () => {
    mount(<Default />);

    cy.checkHydrated(IC_BREADCRUMB_LABEL);
    cy.get("ic-breadcrumb-group").should(BE_VISIBLE);
    cy.findShadowEl(IC_BREADCRUMB_LABEL, ".chevron").should(BE_VISIBLE);
    cy.get('[page-title="Beverages"]').should(BE_VISIBLE);
    cy.get('[page-title="Home"]').should(BE_VISIBLE);
    cy.get('[page-title="Coffee"]').should(BE_VISIBLE);
    cy.get(IC_BREADCRUMB_LABEL).should(HAVE_ATTR, "href", "#");
  });

  it("should render with backBreadcrumbOnly", () => {
    mount(<BackBreadcrumb />);

    cy.checkHydrated(IC_BREADCRUMB_LABEL);
    cy.findShadowEl(IC_BREADCRUMB_LABEL, "svg").should(BE_VISIBLE);
    cy.get('ic-breadcrumb[page-title="Beverages"]').should(
      HAVE_ATTR,
      "show-back-icon",
      "true"
    );
    cy.get('[page-title="Beverages"]').should(BE_VISIBLE);
    cy.findShadowEl(IC_BREADCRUMB_LABEL, ".chevron").should(NOT_BE_VISIBLE);
    cy.get('[page-title="Home"]').should(NOT_BE_VISIBLE);
    cy.get('[page-title="Coffee"]').should(NOT_BE_VISIBLE);
  });

  it("should switch from default view to back arrow with parent breadcrumb when backBreadcrumbOnly prop is set on IcBreadcrumbGroup and revert when prop is removed", () => {
    mount(<ToggleBackBreadcrumb />);

    cy.checkHydrated(IC_BREADCRUMB_LABEL);
    cy.get("ic-button").click();
    cy.get('ic-breadcrumb[page-title="Beverages"]').should(
      HAVE_ATTR,
      "show-back-icon"
    );
    cy.get("ic-button").click();
    cy.get('ic-breadcrumb[page-title="Beverages"]').should(
      HAVE_ATTR,
      "show-back-icon",
      "false"
    );
  });

  it("should render breadcrumb with icons", () => {
    mount(<WithIcons />);

    cy.checkHydrated(IC_BREADCRUMB_LABEL);
    cy.findShadowEl(IC_BREADCRUMB_LABEL, ".chevron").should(BE_VISIBLE);
    cy.findShadowEl(IC_BREADCRUMB_LABEL, "svg").should(BE_VISIBLE);
    cy.get('[page-title="Home"]').should(BE_VISIBLE);
  });

  it("should add 'aria-current' when current prop is true and remove it when changed to false", () => {
    mount(<WithCurrentPage />);

    cy.checkHydrated(IC_BREADCRUMB_LABEL);
    cy.get('[page-title="Coffee"]').should(HAVE_ATTR, "current", "true");
    cy.get('[page-title="Coffee"]').should(HAVE_ATTR, "aria-current", "page");
    cy.get('[page-title="Home"]').should(NOT_HAVE_ATTR, "current", "true");
    cy.get('[page-title="Beverages"]').should(NOT_HAVE_ATTR, "current", "true");

    cy.get('[page-title="Coffee"]').invoke("prop", "current", false);
    cy.get('[page-title="Coffee"]').should(NOT_HAVE_ATTR, "aria-current");
  });

  it("should call 'setFocus' when breadcrumb is focused", () => {
    mount(<Default />);

    cy.checkHydrated(IC_BREADCRUMB_LABEL);
    cy.wait(500)
      .get(IC_BREADCRUMB_LABEL)
      .shadow()
      .find("ic-link")
      .shadow()
      .find("a")
      .each(($el) => {
        cy.wrap($el).focus().should(HAVE_FOCUS);
      });
  });

  it("should only allow focus on slotted links when not within current page breadcrumbs", () => {
    mount(<SlottedLinks />);

    cy.checkHydrated(IC_BREADCRUMB_LABEL);
    cy.get("ic-button").eq(0).shadow().find("button").focus();
    cy.realPress("Tab");
    cy.get("ic-button").eq(1).shadow().find("button").should(HAVE_FOCUS);

    cy.get(IC_BREADCRUMB_LABEL).eq(0).invoke("prop", "current", false);

    cy.get("ic-button").eq(0).shadow().find("button").focus();
    cy.realPress("Tab");
    cy.realPress("Tab");
    cy.get("ic-button").eq(1).shadow().find("button").should(HAVE_FOCUS);
  });

  it("should render collapsed breadcrumb", () => {
    mount(<Collapsed />);

    cy.checkHydrated(IC_BREADCRUMB_LABEL);
    cy.get("#collapsed-ellipsis").should(BE_VISIBLE);
    cy.get('[page-title="Beverages"]').should(NOT_BE_VISIBLE);
    cy.get("#collapsed-ellipsis").click();
    cy.get('[page-title="Beverages"]').should(BE_VISIBLE);
    cy.get("#collapsed-ellipsis").should(NOT_EXIST);
  });

  it("should render collapsed breadcrumb when toggled", () => {
    mount(<ToggleCollapsed />);

    cy.checkHydrated(IC_BREADCRUMB_LABEL);
    cy.get("ic-button").click();
    cy.get("ic-button").click();
    cy.get("ic-button").click();
    cy.get(".collapsed-breadcrumb").should(HAVE_LENGTH, 1);
  });

  it("should expand collapsed state then render all breadcrumbs when narrowing the viewport", () => {
    mount(<Collapsed />);

    cy.checkHydrated(IC_BREADCRUMB_LABEL);
    cy.get("#collapsed-ellipsis").click();
    cy.get('[page-title="Beverages"]').should(BE_VISIBLE);

    cy.viewport(768, 750);

    cy.get('[page-title="Beverages"]').should(BE_VISIBLE);
  });
});

describe("IcBreadcrumb visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.injectAxe();
    cy.viewport(1024, 750);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render default breadcrumb", () => {
    mount(<Default />);

    cy.checkHydrated(IC_BREADCRUMB_LABEL);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.003),
    });
  });

  it("should render the backBreadcrumbOnly prop when using react router", () => {
    mount(<SlottedLinksWithBackBreadCrumbOnly />);

    cy.checkHydrated(IC_BREADCRUMB_LABEL);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/back-react-router",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.024),
    });
  });

  it("should render with backBreadcrumbOnly", () => {
    mount(<BackBreadcrumb />);

    cy.checkHydrated(IC_BREADCRUMB_LABEL);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/back",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render breadcrumb with icons", () => {
    mount(<WithIcons />);

    cy.checkHydrated(IC_BREADCRUMB_LABEL);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/icon",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.004),
    });
  });

  it("should render collapsed breadcrumb", () => {
    mount(<Collapsed />);

    cy.checkHydrated(IC_BREADCRUMB_LABEL);

    cy.checkA11yWithWait(undefined, 200, { includedImpacts: ["critical"] });
    cy.compareSnapshot({
      name: "/collapsed",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.002),
    });
  });

  it("should render with current page", () => {
    mount(<WithCurrentPage />);

    cy.checkHydrated(IC_BREADCRUMB_LABEL);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/current",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.004),
    });
  });

  it("should render focused breadcrumb", () => {
    mount(<Default />);

    cy.checkHydrated(IC_BREADCRUMB_LABEL);
    cy.wait(500)
      .get('ic-breadcrumb[page-title="Coffee"]')
      .shadow()
      .find("ic-link")
      .shadow()
      .find("a")
      .focus()
      .should(HAVE_FOCUS);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/focussed",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.003),
    });
  });

  it("should render breadcrumb with different appearances", () => {
    mount(<Appearance />);

    cy.checkHydrated(IC_BREADCRUMB_LABEL);

    cy.compareSnapshot({
      name: "/appearance",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.033),
    });
  });
});

describe("IcBreadcrumb visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  beforeEach(() => {
    cy.viewport(1024, 626);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  after(() => {
    cy.disableForcedColors();
  });

  it("should render breadcrumb with icons in high contrast mode", () => {
    mount(<WithIcons />);

    cy.checkHydrated(IC_BREADCRUMB_LABEL);

    cy.compareSnapshot({
      name: "/icon-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
    });
  });

  it("should render collapsed breadcrumb in high contrast mode", () => {
    mount(<Collapsed />);

    cy.checkHydrated(IC_BREADCRUMB_LABEL);

    cy.compareSnapshot({
      name: "/collapsed-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.006),
    });
  });

  it("should render with current page in high contrast mode", () => {
    mount(<WithCurrentPage />);

    cy.checkHydrated(IC_BREADCRUMB_LABEL);

    cy.compareSnapshot({
      name: "/current-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
    });
  });

  it("should render focused breadcrumb in high contrast mode", () => {
    mount(<Default />);

    cy.checkHydrated(IC_BREADCRUMB_LABEL);
    cy.wait(500)
      .get('ic-breadcrumb[page-title="Coffee"]')
      .shadow()
      .find("ic-link")
      .shadow()
      .find("a")
      .focus()
      .should(HAVE_FOCUS);

    cy.compareSnapshot({
      name: "/focussed-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.009),
    });
  });
});
