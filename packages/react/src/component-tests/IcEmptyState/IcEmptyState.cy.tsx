/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import { mount } from "cypress/react";
import React from "react";
import {
  BasicEmptyState,
  EmptyStateTitle,
  ButtonEmptyState,
  EmptyStateAligned,
  EmptyStateImage,
  TruncatedText,
  SlottedContent,
  EmptyStateTheme,
} from "./IcEmptyStateTestData";
import { HAVE_ATTR, BE_VISIBLE } from "../utils/constants";
import { IcEmptyState } from "../..";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const EMPTY_STATE = "ic-empty-state";

const DEFAULT_TEST_THRESHOLD = 0.016;

describe("IcEmptyState end-to-end, visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.viewport(1024, 750);
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render basic empty state", () => {
    mount(<BasicEmptyState />);

    cy.checkHydrated(EMPTY_STATE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "basic-desktop",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
    });
  });

  it("should render with heading", () => {
    mount(<IcEmptyState heading="Empty state title" />);

    cy.checkHydrated(EMPTY_STATE);
    cy.get(EMPTY_STATE).should(HAVE_ATTR, "heading", "Empty state title");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "title",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render with subheading and body text", () => {
    mount(
      <IcEmptyState
        heading="Empty state title"
        subheading="Empty state subtitle"
        body="Body text for empty state."
      />
    );

    cy.checkHydrated(EMPTY_STATE);
    cy.get(EMPTY_STATE).should(HAVE_ATTR, "subheading", "Empty state subtitle");
    cy.get(EMPTY_STATE).should(HAVE_ATTR, "body", "Body text for empty state.");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "body",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.015),
    });
  });

  it("should render with a slotted image", () => {
    mount(<EmptyStateTitle />);

    cy.checkHydrated(EMPTY_STATE);
    cy.get("svg").should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "slotted-image",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render with actions", () => {
    mount(<ButtonEmptyState />);

    cy.checkHydrated(EMPTY_STATE);
    cy.get("ic-button").shadow().find("button").should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "button",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.002),
    });
  });

  it("should render right aligned", () => {
    mount(EmptyStateAligned("right"));

    cy.checkHydrated(EMPTY_STATE);
    cy.get(EMPTY_STATE).invoke("prop", "aligned").should("eq", "right");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "right-aligned",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.016),
    });
  });

  it("should render center aligned", () => {
    mount(EmptyStateAligned("center"));

    cy.checkHydrated(EMPTY_STATE);
    cy.get(EMPTY_STATE).invoke("prop", "aligned").should("eq", "center");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "center-aligned",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.015),
    });
  });

  it("should render with a small image size", () => {
    mount(EmptyStateImage("small"));

    cy.checkHydrated(EMPTY_STATE);
    cy.get(EMPTY_STATE).invoke("prop", "imageSize").should("eq", "small");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "small-image",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.015),
    });
  });

  it("should render with a large image size", () => {
    mount(EmptyStateImage("large"));

    cy.checkHydrated(EMPTY_STATE);
    cy.get(EMPTY_STATE).invoke("prop", "imageSize").should("eq", "large");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "large-image",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.015),
    });
  });

  it("should render with truncated text when maxLines prop is set - before click", () => {
    mount(<TruncatedText />);

    cy.checkHydrated(EMPTY_STATE);
    cy.get(EMPTY_STATE).invoke("prop", "maxLines").should("eq", 2);
    cy.findShadowEl(EMPTY_STATE, "ic-typography")
      .shadow()
      .find(".trunc-btn")
      .contains("See more");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "truncated-text",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.052),
    });
  });

  it("should render with truncated text when maxLines prop is set - after click", () => {
    mount(<TruncatedText />);

    cy.checkHydrated(EMPTY_STATE);
    cy.findShadowEl(EMPTY_STATE, "ic-typography")
      .shadow()
      .find(".trunc-btn")
      .click();
    cy.findShadowEl(EMPTY_STATE, "ic-typography")
      .shadow()
      .find(".trunc-btn")
      .contains("See less");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "truncated-text-after-click",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.083),
    });
  });

  it("should render with slotted content", () => {
    mount(<SlottedContent />);

    cy.checkHydrated(EMPTY_STATE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "slotted-content",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
    });
  });

  it("should render with slotted content", () => {
    mount(<EmptyStateTheme />);

    cy.checkHydrated(EMPTY_STATE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "theme-prop",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.04),
    });
  });
});

describe("IcEmptyState visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  beforeEach(() => {
    cy.viewport(1024, 750);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  after(() => {
    cy.disableForcedColors();
  });

  it("should render basic empty state in high contrast mode", () => {
    mount(<BasicEmptyState />);

    cy.checkHydrated(EMPTY_STATE);

    cy.compareSnapshot({
      name: "basic-desktop-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.015),
    });
  });

  it("should render with truncated text when maxLines prop is set - before click", () => {
    mount(<TruncatedText />);

    cy.checkHydrated(EMPTY_STATE);

    cy.compareSnapshot({
      name: "truncated-text-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.042),
    });
  });
});
