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
} from "./IcEmptyStateTestData";
import { IcEmptyState } from "../..";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const DEFAULT_TEST_THRESHOLD = 0.016;

const EMPTY_STATE = "ic-empty-state";

describe("IcEmptyState", () => {
  beforeEach(() => {
    cy.viewport(1024, 750);
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render desktop visual regression testing and a11y testing", () => {
    mount(<BasicEmptyState />);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "basic-desktop",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
    });
  });

  it("should render", () => {
    mount(<IcEmptyState heading="Empty state title" />);

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

    cy.compareSnapshot({
      name: "body",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.015),
    });
  });

  it("should render with a slotted image", () => {
    mount(<EmptyStateTitle />);

    cy.compareSnapshot({
      name: "slotted-image",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render with actions", () => {
    mount(<ButtonEmptyState />);

    cy.compareSnapshot({
      name: "button",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.002),
    });
  });

  it("should render right aligned", () => {
    mount(EmptyStateAligned("right"));

    cy.get(EMPTY_STATE).invoke("prop", "aligned").should("eq", "right");
  });

  it("should render center aligned", () => {
    mount(EmptyStateAligned("center"));

    cy.get(EMPTY_STATE).invoke("prop", "aligned").should("eq", "center");
  });

  it("should render with a small image size", () => {
    mount(EmptyStateImage("small"));

    cy.get(EMPTY_STATE).invoke("prop", "imageSize").should("eq", "small");
  });

  it("should render with a large image size", () => {
    mount(EmptyStateImage("large"));

    cy.get(EMPTY_STATE).invoke("prop", "imageSize").should("eq", "large");
  });
});
