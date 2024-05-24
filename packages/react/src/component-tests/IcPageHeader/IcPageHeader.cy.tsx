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
} from "./IcPageHeaderTestData";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

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
    cy.checkHydrated("ic-page-header");
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "default",
      testThreshold: setThresholdBasedOnEnv(0.042),
    });
  });

  it("should stay at the top of the page if the sticky variant is used", () => {
    cy.viewport(1050, 450);
    mount(<ScrollStickyPageHeader />);
    cy.checkA11yWithWait();
    cy.scrollTo("bottom").checkHydrated("ic-button#end");
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "stickyVariant",
      testThreshold: setThresholdBasedOnEnv(0.13),
      cypressScreenshotOptions: {
        clip: { x: 0, y: 450, width: 1050, height: 600 },
      },
    });
  });

  it("should not stay on top for viewport extra small if stickyDesktopOnly prop is used", () => {
    cy.viewport("iphone-6");
    mount(<DesktopScrollablePageVariant />);

    cy.checkHydrated("ic-page-header");

    cy.scrollTo("bottom");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "desktopOnlyAfterScroll",
      testThreshold: setThresholdBasedOnEnv(0.3),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render center aligned", () => {
    mount(PageheaderAlign("center"));
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "centerPageHeader",
      testThreshold: setThresholdBasedOnEnv(0.047),
    });
  });

  it("should render small", () => {
    mount(<PageHeaderSmallSize />);
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "smallSize",
      testThreshold: setThresholdBasedOnEnv(0.042),
    });
  });

  it("should render full width", () => {
    mount(PageheaderAlign("full-width"));
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "fullWidthPageHeader",
      testThreshold: setThresholdBasedOnEnv(0.048),
    });
  });

  it("should render without border", () => {
    mount(<PageHeaderWithoutBorder />);
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "withoutBorder",
      testThreshold: setThresholdBasedOnEnv(0.048),
    });
  });

  it("should render with actions, input and tabs", () => {
    mount(<PageHeaderWithActionsInputTabs />);
    cy.checkA11yWithWait();
    cy.get("ic-navigation-item").should(BE_VISIBLE);
    cy.compareSnapshot({
      name: "withActionInputTab",
      testThreshold: setThresholdBasedOnEnv(0.052),
    });
  });

  it("should render with actions, input and stepper", () => {
    mount(<PageHeaderWithStepper />);
    cy.get("ic-chip").should(BE_VISIBLE);
    cy.get("ic-button").should(BE_VISIBLE).should(HAVE_LENGTH, "2");
    cy.get("ic-text-field").should(BE_VISIBLE);
    cy.compareSnapshot({
      name: "withActionInputStep",
      testThreshold: setThresholdBasedOnEnv(0.054),
    });
  });

  it("should render with breadcrumbs", () => {
    mount(<PageHeaderWithBreadcrumbNav />);
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "withBreadcrumb",
      testThreshold: setThresholdBasedOnEnv(0.044),
    });
  });

  it("should render with slotted headings", () => {
    mount(<PageHeaderSlottedHeadings />);
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "withSlottedHeadings",
      testThreshold: setThresholdBasedOnEnv(0.042),
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
        name: "defaultHighContrast",
        testThreshold: setThresholdBasedOnEnv(0.04),
      });
    });

    it("should render with actions, input and tabs", () => {
      mount(<PageHeaderWithActionsInputTabs />);
      cy.compareSnapshot({
        name: "actionsInputTabsHighContrast",
        testThreshold: setThresholdBasedOnEnv(0.04),
      });
    });

    it("should render with breadcrumbs", () => {
      mount(<PageHeaderWithBreadcrumbNav />);
      cy.compareSnapshot({
        name: "breadcrumbsHighContrast",
        testThreshold: setThresholdBasedOnEnv(0.041),
      });
    });

    it("should render with stepper", () => {
      mount(<PageHeaderWithStepper />);
      cy.compareSnapshot({
        name: "stepperHighContrast",
        testThreshold: setThresholdBasedOnEnv(0.044),
      });
    });
  });
});
