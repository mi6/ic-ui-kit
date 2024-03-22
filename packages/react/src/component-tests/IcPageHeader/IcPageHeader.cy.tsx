/// <reference types="Cypress" />

import React from "react";

import { mount } from "cypress/react";
import { BE_VISIBLE, HAVE_LENGTH } from "../utils/constants";
import {
  DesktopScrollablePageVariant,
  PageHeadeWithBreadcrumbNav,
  PageHeaderDefault,
  PageHeaderSmallSize,
  PageHeaderWithActionsInputTabs,
  PageHeaderWithStepper,
  PageHeaderWithoutBorder,
  PageheaderAlign,
  ScrollStickyPageHeader,
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

  it("render default", () => {
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

  it("page header should not stay on top if prop use stickyDesktopOnly for viewport extra small", () => {
    cy.viewport("iphone-6");
    mount(<DesktopScrollablePageVariant />);

    cy.checkHydrated("ic-page-header");

    // cy.compareSnapshot({
    //   name: "desktopOnlyBeforeScroll",
    //   testThreshold: setThresholdBasedOnEnv(0.22),
    //   cypressScreenshotOptions: {
    //     capture: "viewport",
    //   },
    // });

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

  it("align page header to center", () => {
    mount(PageheaderAlign("center"));
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "centerPageHeader",
      testThreshold: setThresholdBasedOnEnv(0.047),
    });
  });

  it("small size page header", () => {
    mount(<PageHeaderSmallSize />);
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "smallSize",
      testThreshold: setThresholdBasedOnEnv(0.042),
    });
  });

  it("render fullWidth page header", () => {
    mount(PageheaderAlign("full-width"));
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "fullWidthPageHeader",
      testThreshold: setThresholdBasedOnEnv(0.048),
    });
  });

  it("render page header without border", () => {
    mount(<PageHeaderWithoutBorder />);
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "withoutBorder",
      testThreshold: setThresholdBasedOnEnv(0.048),
    });
  });

  it("render page header with actions, input and tabs", () => {
    mount(<PageHeaderWithActionsInputTabs />);
    cy.checkA11yWithWait();
    cy.get("ic-navigation-item").should(BE_VISIBLE);
    cy.compareSnapshot({
      name: "withActionInputTab",
      testThreshold: setThresholdBasedOnEnv(0.052),
    });
  });

  it("page header with actions,input and stepper", () => {
    mount(<PageHeaderWithStepper />);
    cy.get("ic-chip").should(BE_VISIBLE);
    cy.get("ic-button").should(BE_VISIBLE).should(HAVE_LENGTH, "2");
    cy.get("ic-text-field").should(BE_VISIBLE);
    cy.compareSnapshot({
      name: "withActionInputStep",
      testThreshold: setThresholdBasedOnEnv(0.054),
    });
  });

  it("page header With breadcrumb navigation", () => {
    mount(<PageHeadeWithBreadcrumbNav />);
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "withBreadcrumb",
      testThreshold: setThresholdBasedOnEnv(0.044),
    });
  });
});
