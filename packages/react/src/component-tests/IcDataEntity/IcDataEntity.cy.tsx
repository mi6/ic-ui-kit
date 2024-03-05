/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
import {
  IcButton,
  IcDataEntity,
  IcDataRow,
  IcLink,
  IcStatusTag,
  IcTextField,
  IcTypography,
} from "../../components";
import { SlottedSVG } from "../..";
import { mount } from "cypress/react";
import {
  BE_VISIBLE,
  HAVE_LENGTH,
  HAVE_TEXT,
  HAVE_VALUE,
} from "../utils/constants";
import { CYPRESS_AXE_OPTIONS } from "../../../cypress/utils/a11y";

const DEFAULT_TEST_THRESHOLD = 0.05;

const DATA_ENTITY_SELECTOR = "ic-data-entity";
const ORDER_DETAILS_HEADING_SELECTOR = '[heading="Order details"]';
const DATA_ROW_SELECTOR = "ic-data-row";
const TYPOGRAPHY_SELECTOR = "ic-typography";
const TEXT_FIELD_SELECTOR = "ic-text-field";
const LARGE_SPACING_CSS = "var(--ic-space-lg)";

describe("IcDataEntity E2E ,visual and a11y testing", () => {
  beforeEach(() => {
    cy.injectAxe();
    cy.viewport(1024, 750);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("data entity visual and a11y testing", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcDataEntity heading="Order details">
          <IcDataRow label="Order name" value="Michael">
            <IcLink href="#" slot="end-component">
              Edit
            </IcLink>
          </IcDataRow>
          <IcDataRow label="Drink" value="Americano">
            <IcLink href="#" slot="end-component">
              Edit
            </IcLink>
          </IcDataRow>
          <IcDataRow label="Milk option" value="Soya milk">
            <IcLink href="#" slot="end-component">
              Edit
            </IcLink>
          </IcDataRow>
          <IcDataRow label="Price" value="£3.25">
            <IcLink href="#" slot="end-component">
              Edit
            </IcLink>
          </IcDataRow>
          <IcDataRow label="Payment method">
            <IcTypography variant="body" slot="value">
              VISA ending 5896
            </IcTypography>
            <IcLink href="#" slot="end-component">
              Edit
            </IcLink>
          </IcDataRow>
          <IcDataRow label="Download receipt" value="CoffeeOrder_X46w32.pdf">
            <IcButton variant="icon" aria-label="Download" slot="end-component">
              <SlottedSVG viewBox="0 0 24 24" height="24px" width="24px">
                <path
                  d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"
                  fill="currentColor"
                />
              </SlottedSVG>
            </IcButton>
          </IcDataRow>
        </IcDataEntity>
      </div>
    );
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "alldata",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
    });
  });

  it("should display only one data row e2e and visual testing", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcDataEntity heading="Order details">
          <IcDataRow label="Order name" value="Michael">
            <IcLink href="#" slot="end-component">
              Edit
            </IcLink>
          </IcDataRow>
        </IcDataEntity>
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
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
    });
  });

  it("display last data row e2e and visual testing", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcDataEntity heading="Order details">
          <IcDataRow label="Download receipt" value="CoffeeOrder_X46w32.pdf">
            <IcButton variant="icon" aria-label="Download" slot="end-component">
              <SlottedSVG viewBox="0 0 24 24" height="24px" width="24px">
                <path
                  d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"
                  fill="currentColor"
                />
              </SlottedSVG>
            </IcButton>
          </IcDataRow>
        </IcDataEntity>
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
      name: "downloadReceipt",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
    });
  });

  it("render data entity with status tags visual and a11y testing", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcDataEntity heading="Order details">
          <IcDataRow label="Order name" value="Michael"></IcDataRow>
          <IcDataRow label="Drink" value="Americano">
            <IcStatusTag
              status="warning"
              label="In Progress"
              variant="filled"
              slot="end-component"
            />
          </IcDataRow>
          <IcDataRow label="Milk option" value="Soya milk"></IcDataRow>
          <IcDataRow label="Price" value="£3.25"></IcDataRow>
          <IcDataRow label="Payment method">
            <IcTypography variant="body" slot="value">
              VISA ending 5896
            </IcTypography>
            <IcStatusTag
              label="Not Confirmed"
              variant="filled"
              slot="end-component"
            />
          </IcDataRow>
        </IcDataEntity>
      </div>
    );
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "statusTag",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
    });
  });

  it("should display in Progress status tag data row e2e and visual testing", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcDataEntity heading="Order details">
          <IcDataRow label="Drink" value="Americano">
            <IcStatusTag
              status="warning"
              label="In Progress"
              variant="filled"
              slot="end-component"
            />
          </IcDataRow>
        </IcDataEntity>
      </div>
    );
    cy.checkHydrated(DATA_ENTITY_SELECTOR);
    cy.get(ORDER_DETAILS_HEADING_SELECTOR).should(BE_VISIBLE);
    cy.get('[label="Drink"]').should(BE_VISIBLE);
    cy.get(DATA_ROW_SELECTOR).should(HAVE_VALUE, "Americano");
    cy.findShadowEl("ic-status-tag", TYPOGRAPHY_SELECTOR).should(
      HAVE_TEXT,
      "In Progress"
    );
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "inProgresssTag",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
    });
  });

  it("render size small Data a11y and visual testing", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcDataEntity heading="Personal details" size="small">
          <IcDataRow label="Name" value="Michael Johnson"></IcDataRow>
          <IcDataRow label="Date of birth" value="16 October 1995"></IcDataRow>
          <IcDataRow label="Telephone" value="07449 7654873"></IcDataRow>
          <IcDataRow label="Email" value="mjohnson@coffee.gov"></IcDataRow>
          <IcDataRow label="Address">
            <IcTypography variant="body" slot="value">
              383 Coffee Drive
              <br />
              London
              <br />
              SW7 988
              <br />
              United Kingdom
            </IcTypography>
          </IcDataRow>
        </IcDataEntity>
      </div>
    );
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "sizeToSmall",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
  });

  it("should display size small data row with not confirm status tag e2e and visual testing", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcDataEntity heading="Personal details" size="small">
          <IcDataRow label="Address">
            <IcTypography variant="body" slot="value">
              383 Coffee Drive
              <br />
              London
              <br />
              SW7 988
              <br />
              United Kingdom
            </IcTypography>
            <IcStatusTag
              label="not confirmed"
              variant="filled"
              slot="end-component"
              size="small"
            />
          </IcDataRow>
        </IcDataEntity>
      </div>
    );
    cy.checkHydrated(DATA_ENTITY_SELECTOR);
    cy.get('[heading="Personal details"]').should(BE_VISIBLE);
    cy.get('[label="Address"]').should(BE_VISIBLE);
    cy.get(TYPOGRAPHY_SELECTOR).each(($el) => {
      cy.wrap($el)
        .invoke("text")
        .then((address) => {
          cy.log(address);
        });
    });
    cy.findShadowEl("ic-status-tag", TYPOGRAPHY_SELECTOR).should(
      HAVE_TEXT,
      "not confirmed"
    );
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "smallSizeLastRow",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
    });
  });

  it("render editable data entity visual and a11y testing", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <>
          <IcDataEntity heading="Order details">
            <IcDataRow label="Order name">
              <IcTextField
                slot="value"
                label="Order name"
                value="Michael"
                hide-label
                full-width
              />
            </IcDataRow>
            <IcDataRow label="Drink" value="Americano">
              <IcTextField
                slot="value"
                label="Drink"
                value="Americano"
                hide-label
                full-width
              />
            </IcDataRow>
            <IcDataRow label="Milk option" value="Soya milk">
              <IcTextField
                slot="value"
                label="Milk option"
                value="Soya milk"
                hide-label
                full-width
              />
            </IcDataRow>
            <IcDataRow label="Price" value="£3.25">
              <IcTextField
                slot="value"
                label="Price"
                value="£3.25"
                hide-label
                full-width
              />
            </IcDataRow>
            <IcDataRow label="Payment method">
              <IcTextField
                slot="value"
                label="Payment method"
                value="VISA ending 5896"
                hide-label
                full-width
              />
            </IcDataRow>
          </IcDataEntity>
          <IcButton
            onClick={() => {
              const textFields = document.querySelectorAll(TEXT_FIELD_SELECTOR);
              textFields.forEach((textField) => {
                textField.setAttribute("readonly", "");
              });
            }}
            style={{
              marginRight: "var(--ic-space-md)",
              marginTop: LARGE_SPACING_CSS,
            }}
          >
            Confirm
          </IcButton>
          <IcButton
            onClick={() => {
              const textFields = document.querySelectorAll(TEXT_FIELD_SELECTOR);
              textFields.forEach((textField) => {
                textField.removeAttribute("readonly");
              });
            }}
            variant="secondary"
            style={{ marginTop: LARGE_SPACING_CSS }}
          >
            Edit
          </IcButton>
        </>
      </div>
    );
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "editableData",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
    });
  });

  it("should display editable first row data e2e and visual testing", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <>
          <IcDataEntity heading="Order details">
            <IcDataRow label="Order name">
              <IcTextField
                slot="value"
                label="Order name"
                value="Michael"
                hide-label
                full-width
              />
            </IcDataRow>
          </IcDataEntity>
          <IcButton
            onClick={() => {
              const textFields = document.querySelectorAll(TEXT_FIELD_SELECTOR);
              textFields.forEach((textField) => {
                textField.setAttribute("readonly", "");
              });
            }}
            style={{
              marginRight: "var(--ic-space-md)",
              marginTop: LARGE_SPACING_CSS,
            }}
          >
            Confirm
          </IcButton>
          <IcButton
            onClick={() => {
              const textFields = document.querySelectorAll(TEXT_FIELD_SELECTOR);
              textFields.forEach((textField) => {
                textField.removeAttribute("readonly");
              });
            }}
            variant="secondary"
            style={{ marginTop: LARGE_SPACING_CSS }}
          >
            Edit
          </IcButton>
        </>
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
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
    });
  });
});
