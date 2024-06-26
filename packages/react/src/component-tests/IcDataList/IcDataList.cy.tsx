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
} from "./IcDataListTestData";

const DEFAULT_TEST_THRESHOLD = 0.025;

const DATA_LIST_SELECTOR = "ic-data-list";
const ORDER_DETAILS_HEADING_SELECTOR = '[heading="Order details"]';
const DATA_ROW_SELECTOR = "ic-data-row";
const TEXT_FIELD_SELECTOR = "ic-text-field";

describe("IcDataList E2E, visual and a11y testing", () => {
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

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.017),
      delay: 200,
    });
  });

  it("should render with links in the end component slot", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <WithLinks />
      </div>
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "links",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
    });
  });

  it("should render slotted heading and label", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <SlottedHeadingLabel />
      </div>
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "slotted-heading-label",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.007),
    });
  });

  it("should render with only one data row", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <OneDataRow />
      </div>
    );

    cy.checkHydrated(DATA_LIST_SELECTOR);
    cy.get(ORDER_DETAILS_HEADING_SELECTOR).should(BE_VISIBLE);
    cy.get('[label="Order name"]').should(BE_VISIBLE);
    cy.get(DATA_ROW_SELECTOR).should(HAVE_VALUE, "Michael");
    cy.get("ic-link").should(BE_VISIBLE).should(HAVE_TEXT, "Edit");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "one-data-row",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render with button in end component slot", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <WithButton />
      </div>
    );

    cy.checkHydrated(DATA_LIST_SELECTOR);
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
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.005),
    });
  });

  it("should render with status tags in the end component slot", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <WithStatusTags />
      </div>
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "status-tag",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
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
      name: "size-small",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.026),
    });
  });

  it("should render editable", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <Editable />
      </div>
    );

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "editable-data",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
      delay: 500,
    });
  });

  it("should render editable first row", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <EditableRow />
      </div>
    );

    cy.checkHydrated(DATA_LIST_SELECTOR);
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
      name: "editable-name-data",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.01),
    });
  });
});
