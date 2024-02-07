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

  it("Desktop Visual Regression Testing and A11y Testing", () => {
    mount(<BasicEmptyState />);

    cy.compareSnapshot(
      "empty-state-basic-desktop",
      DEFAULT_TEST_THRESHOLD + 0.04
    );
    cy.checkA11yWithWait();
  });

  it("should render", () => {
    mount(<IcEmptyState heading="Empty state title" />);

    cy.compareSnapshot("empty-state-title", DEFAULT_TEST_THRESHOLD);
  });

  it("should render with subheading and body text", () => {
    mount(
      <IcEmptyState
        heading="Empty state title"
        subheading="Empty state subtitle"
        body="Body text for empty state."
      />
    );

    cy.compareSnapshot("empty-state-body", DEFAULT_TEST_THRESHOLD + 0.02);
  });

  it("should render with a slotted image", () => {
    mount(<EmptyStateTitle />);

    cy.compareSnapshot("empty-state-slotted-image", DEFAULT_TEST_THRESHOLD);
  });

  it("should render with actions", () => {
    mount(<ButtonEmptyState />);

    cy.compareSnapshot("empty-state-button", DEFAULT_TEST_THRESHOLD + 0.03);
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
