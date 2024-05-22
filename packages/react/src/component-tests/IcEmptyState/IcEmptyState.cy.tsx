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

const DEFAULT_TEST_THRESHOLD = 0.05;

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

    cy.compareSnapshot({
      name: "empty-state-basic-desktop",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
    });
    cy.checkA11yWithWait();
  });

  it("should render", () => {
    mount(<IcEmptyState heading="Empty state title" />);

    cy.compareSnapshot({
      name: "empty-state-title",
      testThreshold: DEFAULT_TEST_THRESHOLD,
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
      name: "empty-state-body",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
    });
  });

  it("should render with a slotted image", () => {
    mount(<EmptyStateTitle />);

    cy.compareSnapshot({
      name: "empty-state-slotted-image",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
  });

  it("should render with actions", () => {
    mount(<ButtonEmptyState />);

    cy.compareSnapshot({
      name: "empty-state-button",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.03,
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
