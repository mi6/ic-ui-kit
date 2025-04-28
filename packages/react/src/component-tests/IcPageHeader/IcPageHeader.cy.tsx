/// <reference types="Cypress" />

import React from "react";

import { mount } from "cypress/react";
import { BE_VISIBLE, HAVE_LENGTH } from "../utils/constants";
import {
  DesktopScrollablePageVariant,
  PageHeaderWithBreadcrumbNav,
  PageHeaderDefault,
  PageHeaderSmallSize,
  PageHeaderWithActionsInputTabs,
  PageHeaderWithStepper,
  PageHeaderWithoutBorder,
  PageheaderAlign,
  ScrollStickyPageHeader,
  PageHeaderSlottedHeadings,
  PageheaderDarkTheme,
} from "./IcPageHeaderTestData";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const DEFAULT_TEST_THRESHOLD = 0.015;
const PAGE_HEADER_SELECTOR = "ic-page-header";

describe("IcPageHeader", () => {
  beforeEach(() => {
    cy.injectAxe();
    cy.viewport(1450, 500);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render default", () => {
    mount(<PageHeaderDefault />);

    cy.checkHydrated(PAGE_HEADER_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.017),
    });
  });

  it("should stay at the top of the page if the sticky variant is used", () => {
    cy.viewport(1050, 450);
    mount(<ScrollStickyPageHeader />);

    cy.scrollTo("bottom").checkHydrated("ic-button#end");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/sticky-variant",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.086),
      cypressScreenshotOptions: {
        clip: { x: 0, y: 450, width: 1050, height: 600 },
      },
    });
  });

  it("should not stay on top for viewport extra small if stickyDesktopOnly prop is used", () => {
    cy.viewport("iphone-6");
    mount(<DesktopScrollablePageVariant />);

    cy.checkHydrated(PAGE_HEADER_SELECTOR);

    cy.scrollTo("bottom");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/desktop-only-after-scroll",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.173),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render center aligned", () => {
    mount(PageheaderAlign("center"));

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/center-page-header",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
    });
  });

  it("should render small", () => {
    mount(<PageHeaderSmallSize />);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/small-size",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.018),
    });
  });

  it("should render full width", () => {
    mount(PageheaderAlign("full-width"));

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/full-width-page-header",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
    });
  });

  it("should render without border", () => {
    mount(<PageHeaderWithoutBorder />);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/without-border",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
    });
  });

  it("should render with actions, input and tabs", () => {
    mount(<PageHeaderWithActionsInputTabs />);

    cy.get("ic-navigation-item").should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/with-action-input-tab",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.025),
    });
  });

  it("should render with actions, input and stepper", () => {
    mount(<PageHeaderWithStepper />);

    cy.get("ic-chip").should(BE_VISIBLE);
    cy.get("ic-button").should(BE_VISIBLE).should(HAVE_LENGTH, "2");
    cy.get("ic-text-field").should(BE_VISIBLE);

    cy.compareSnapshot({
      name: "/with-action-input-step",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.024),
    });
  });

  it("should render with breadcrumbs", () => {
    mount(<PageHeaderWithBreadcrumbNav />);
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/with-breadcrumb",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
    });
  });

  it("should render with slotted headings", () => {
    mount(<PageHeaderSlottedHeadings />);
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/with-slotted-headings",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render in dark mode", () => {
    mount(<PageheaderDarkTheme />);
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/dark-theme",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.026),
    });
  });

  describe("IcPageHeader visual regression in high contrast mode", () => {
    before(() => {
      cy.enableForcedColors();
    });

    after(() => {
      cy.disableForcedColors();
    });

    afterEach(() => {
      cy.task("generateReport");
    });

    it("should render", () => {
      mount(<PageHeaderDefault />);
      cy.compareSnapshot({
        name: "/default-high-contrast",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
      });
    });

    it("should render with actions, input and tabs", () => {
      mount(<PageHeaderWithActionsInputTabs />);
      cy.compareSnapshot({
        name: "/actions-input-tabs-high-contrast",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.033),
      });
    });

    it("should render with breadcrumbs", () => {
      mount(<PageHeaderWithBreadcrumbNav />);
      cy.compareSnapshot({
        name: "/breadcrumbs-high-contrast",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.026),
      });
    });

    it("should render with stepper", () => {
      mount(<PageHeaderWithStepper />);
      cy.compareSnapshot({
        name: "/stepper-high-contrast",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.039),
      });
    });
  });

  it("should render with slotted headings", () => {
    mount(<PageHeaderSlottedHeadings />);
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/with-slotted-headings",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });
});
