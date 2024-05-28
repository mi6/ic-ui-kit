/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress/react";
import {
  BE_VISIBLE,
  HAVE_LENGTH,
  HAVE_TEXT,
  HAVE_VALUE,
} from "../utils/constants";
import { CYPRESS_AXE_OPTIONS } from "../../../cypress/utils/a11y";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";
import {
  Default,
  Editable,
  EditableRow,
  OneDataRow,
  SlottedHeadingLabel,
  Small,
  WithButton,
  WithLinks,
  WithStatusTags,
} from "./IcDataEntityTestData";

const DEFAULT_TEST_THRESHOLD = 0.05;

const DATA_ENTITY_SELECTOR = "ic-data-entity";
const ORDER_DETAILS_HEADING_SELECTOR = '[heading="Order details"]';
const DATA_ROW_SELECTOR = "ic-data-row";
const TEXT_FIELD_SELECTOR = "ic-text-field";

describe("IcDataEntity E2E, visual and a11y testing", () => {
  beforeEach(() => {
    cy.injectAxe();
    cy.viewport(1024, 750);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <Default />
      </div>
    );

    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
    });
  });

  it("should render with links in the end component slot", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <WithLinks />
      </div>
    );

    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "links",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.05),
    });
  });

  it("should render slotted heading and label", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <SlottedHeadingLabel />
      </div>
    );

    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "slottedHeadingLabel",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render with only one data row", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <OneDataRow />
      </div>
    );

    cy.checkHydrated(DATA_ENTITY_SELECTOR);
    cy.get(ORDER_DETAILS_HEADING_SELECTOR).should(BE_VISIBLE);
    cy.get('[label="Order name"]').should(BE_VISIBLE);
    cy.get(DATA_ROW_SELECTOR).should(HAVE_VALUE, "Michael");
    cy.get("ic-link").should(BE_VISIBLE).should(HAVE_TEXT, "Edit");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "oneDataRow",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.05),
    });
  });

  it("should render with button in end component slot", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <WithButton />
      </div>
    );

    cy.checkHydrated(DATA_ENTITY_SELECTOR);
    cy.get(ORDER_DETAILS_HEADING_SELECTOR).should(BE_VISIBLE);
    cy.get('[label="Download receipt"]').should(BE_VISIBLE);
    cy.get(DATA_ROW_SELECTOR).should(HAVE_VALUE, "CoffeeOrder_X46w32.pdf");
    cy.get("ic-button").should(BE_VISIBLE);
    cy.get("ic-button")
      .shadow()
      .find('[aria-label="Download"]')
      .should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "button",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.05),
    });
  });

  it("should render with status tags in the end component slot", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <WithStatusTags />
      </div>
    );

    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "statusTag",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.07),
    });
  });

  it("should render size small", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <Small />
      </div>
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "sizeSmall",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render editable", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <Editable />
      </div>
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "editableData",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.05),
    });
  });

  it("should render editable first row", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <EditableRow />
      </div>
    );

    cy.checkHydrated(DATA_ENTITY_SELECTOR);
    cy.get(ORDER_DETAILS_HEADING_SELECTOR).should(BE_VISIBLE);
    cy.get('[label="Order name"]').should(BE_VISIBLE);
    cy.get("input").should(HAVE_VALUE, "Michael");
    cy.get("ic-button").should(HAVE_LENGTH, "2");
    cy.get("ic-button").contains("Edit").click();
    cy.findShadowEl(TEXT_FIELD_SELECTOR, "input")
      .clear()
      .type("Matt")
      .should(HAVE_VALUE, "Matt");
    cy.get("ic-button").contains("Confirm").click();
    cy.checkA11yWithWait();

    cy.compareSnapshot({
      name: "editableNameData",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.05),
    });
  });
});
