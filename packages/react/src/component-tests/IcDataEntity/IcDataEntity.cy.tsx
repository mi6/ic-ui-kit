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
  LongTextValues,
  OneDataRow,
  SlottedHeadingLabel,
  Small,
  WithButton,
  WithLinks,
  WithStatusTags,
  WithStatusTagsAsValue,
} from "./IcDataEntityTestData";

const DEFAULT_TEST_THRESHOLD = 0.025;

const DATA_ENTITY_SELECTOR = "ic-data-entity";
const ORDER_DETAILS_HEADING_SELECTOR = '[heading="Order details"]';
const DATA_ROW_SELECTOR = "ic-data-row";
const TEXT_FIELD_SELECTOR = "ic-text-field";

describe("IcDataEntity end-to-end, visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.injectAxe();
    cy.viewport(1024, 750);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render default", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <Default />
      </div>
    );

    cy.checkHydrated(DATA_ENTITY_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.017),
    });
  });

  it("should render with links in the end component slot", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <WithLinks />
      </div>
    );

    cy.checkHydrated(DATA_ENTITY_SELECTOR);

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

    cy.checkHydrated(DATA_ENTITY_SELECTOR);

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

    cy.checkHydrated(DATA_ENTITY_SELECTOR);
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
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.005),
    });
  });

  it("should render with status tags in the end component slot", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <WithStatusTags />
      </div>
    );

    cy.checkHydrated(DATA_ENTITY_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "status-tag",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
    });
  });

  it("should render with status tags as value", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <WithStatusTagsAsValue />
      </div>
    );

    cy.checkHydrated(DATA_ENTITY_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "status-tag-as-value",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.016),
    });
  });

  it("should render size small", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <Small />
      </div>
    );

    cy.checkHydrated(DATA_ENTITY_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "size-small",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.026),
    });
  });

  it("should render with long text values", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <LongTextValues />
      </div>
    );

    cy.checkHydrated(DATA_ENTITY_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "long-text-values",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.06),
    });
  });

  it("should render editable - before edit", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <Editable />
      </div>
    );

    cy.checkHydrated(DATA_ENTITY_SELECTOR);

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "editable-data",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.018),
    });
  });

  it("should render editable - during edit", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <Editable />
      </div>
    );

    cy.checkHydrated(DATA_ENTITY_SELECTOR);
    cy.get("ic-button").contains("Edit").click();

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "editable-data-clicked",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
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
    cy.get("input").should(HAVE_VALUE, "Matt");

    cy.checkA11yWithWait();

    cy.compareSnapshot({
      name: "editable-name-data",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.001),
    });
  });
});

describe("IcDataEntity visual regression tests in high contrast mode", () => {
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

  it("should render default in high contrast mode", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <Default />
      </div>
    );

    cy.checkHydrated(DATA_ENTITY_SELECTOR);

    cy.compareSnapshot({
      name: "default-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.014),
    });
  });

  it("should render with links in the end component slot in high contrast mode", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <WithLinks />
      </div>
    );

    cy.checkHydrated(DATA_ENTITY_SELECTOR);

    cy.compareSnapshot({
      name: "links-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
    });
  });

  it("should render with button in end component slot in high contrast mode", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <WithButton />
      </div>
    );

    cy.checkHydrated(DATA_ENTITY_SELECTOR);

    cy.compareSnapshot({
      name: "button-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.002),
    });
  });

  it("should render with status tags in the end component slot in high contrast mode", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <WithStatusTags />
      </div>
    );

    cy.checkHydrated(DATA_ENTITY_SELECTOR);

    cy.compareSnapshot({
      name: "status-tag-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
    });
  });

  it("should render editable in high contrast mode - before edit", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <Editable />
      </div>
    );

    cy.checkHydrated(DATA_ENTITY_SELECTOR);

    cy.compareSnapshot({
      name: "editable-data-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
    });
  });

  it("should render editable in high contrast mode - during edit", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <Editable />
      </div>
    );

    cy.checkHydrated(DATA_ENTITY_SELECTOR);
    cy.get("ic-button").contains("Edit").click().wait(500);

    cy.compareSnapshot({
      name: "editable-data-clicked-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.018),
    });
  });
});
