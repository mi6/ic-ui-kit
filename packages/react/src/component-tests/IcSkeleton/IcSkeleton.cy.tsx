/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress/react";
import { IcSkeleton } from "../../components";
import { HAVE_CSS } from "../utils/constants";

const SKELETON_SELECTOR = "ic-skeleton";

describe("IcSkeleton end-to-end tests", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("keeps circle dimensions equal when only width is provided", () => {
    mount(<IcSkeleton variant="circle" width="48px" />);

    cy.checkHydrated(SKELETON_SELECTOR);
    cy.get(SKELETON_SELECTOR)
      .should(HAVE_CSS, "width", "48px")
      .and(HAVE_CSS, "height", "48px");
    cy.checkA11yWithWait();
  });

  it("keeps circle dimensions equal when only height is provided", () => {
    mount(<IcSkeleton variant="circle" height="32px" />);

    cy.checkHydrated(SKELETON_SELECTOR);
    cy.get(SKELETON_SELECTOR)
      .should(HAVE_CSS, "width", "32px")
      .and(HAVE_CSS, "height", "32px");
    cy.checkA11yWithWait();
  });

  it("honours custom rectangle dimensions", () => {
    mount(<IcSkeleton variant="rectangle" width="180px" height="72px" />);

    cy.checkHydrated(SKELETON_SELECTOR);
    cy.get(SKELETON_SELECTOR)
      .should(HAVE_CSS, "width", "180px")
      .and(HAVE_CSS, "height", "72px");
    cy.checkA11yWithWait();
  });
});
