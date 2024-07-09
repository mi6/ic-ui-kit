/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress/react";
import { IcPaginationBar } from "../../components";
import {
  BE_DISABLED,
  HAVE_ATTR,
  HAVE_CLASS,
  HAVE_LENGTH,
  HAVE_TEXT,
} from "@ukic/react/src/component-tests/utils/constants";
import { setThresholdBasedOnEnv } from "@ukic/react/cypress/utils/helpers";
import { PaginationBarItemsPerPage } from "./IcPaginationBarTestData";

const PAGINATION_BAR = "ic-pagination-bar";
const DEFAULT_TEST_THRESHOLD = 0.027;

describe("IcPaginationBar", () => {
  beforeEach(() => {
    cy.injectAxe();
    cy.viewport(1024, 768);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render", () => {
    mount(<PaginationBarItemsPerPage />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(
      PAGINATION_BAR,
      ".items-per-page-holder ic-typography"
    ).should(HAVE_TEXT, "Items per page");

    cy.compareSnapshot({
      name: "right-alignment",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });

    cy.get(PAGINATION_BAR).invoke("prop", "alignment", "left");

    cy.compareSnapshot({
      name: "left-alignment",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });

    cy.get(PAGINATION_BAR).invoke("prop", "alignment", "space-between");

    cy.compareSnapshot({
      name: "space-between-alignment",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should update pages label when clicking next and last page chevron", () => {
    mount(<PaginationBarItemsPerPage />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find("#next-page-button")
      .click();

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find("ic-pagination-item")
      .shadow()
      .find("ic-typography")
      .should(HAVE_TEXT, "Page 2");

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find("#last-page-button")
      .click();

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find("ic-pagination-item")
      .shadow()
      .find("ic-typography")
      .should(HAVE_TEXT, "Page 10");

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find("#last-page-button")
      .shadow()
      .find("button")
      .should(BE_DISABLED);

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find("#next-page-button")
      .shadow()
      .find("button")
      .should(BE_DISABLED);
  });

  it("should update pages label when clicking previous and first page chevron", () => {
    mount(<PaginationBarItemsPerPage />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find("#last-page-button")
      .click();

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find("ic-pagination-item")
      .shadow()
      .find("ic-typography")
      .should(HAVE_TEXT, "Page 10");

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find("#previous-page-button")
      .click();

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find("ic-pagination-item")
      .shadow()
      .find("ic-typography")
      .should(HAVE_TEXT, "Page 9");

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find("#first-page-button")
      .click();

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find("#previous-page-button")
      .shadow()
      .find("button")
      .should(BE_DISABLED);

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find("#first-page-button")
      .shadow()
      .find("button")
      .should(BE_DISABLED);
  });

  it("should update page x of n when updating items per page dropdown", () => {
    mount(<PaginationBarItemsPerPage />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(PAGINATION_BAR, "ic-select").click();

    cy.findShadowEl(PAGINATION_BAR, "ic-select")
      .shadow()
      .find("li[role='option']")
      .eq(1)
      .click();

    cy.findShadowEl(PAGINATION_BAR, ".page-pagination-label").should(
      HAVE_TEXT,
      "Page 1 of 5"
    );

    cy.findShadowEl(PAGINATION_BAR, "ic-select").click();

    cy.findShadowEl(PAGINATION_BAR, "ic-select")
      .shadow()
      .find("li[role='option']")
      .last()
      .click();

    cy.findShadowEl(PAGINATION_BAR, ".page-pagination-label").should(
      HAVE_TEXT,
      "Page 1 of 1"
    );

    cy.findShadowEl(PAGINATION_BAR, "ic-select").click();

    cy.findShadowEl(PAGINATION_BAR, "ic-select")
      .shadow()
      .find("li[role='option']")
      .eq(0)
      .click();

    cy.findShadowEl(PAGINATION_BAR, ".page-pagination-label").should(
      HAVE_TEXT,
      "Page 1 of 10"
    );
  });

  it("should render go to page input", () => {
    mount(<PaginationBarItemsPerPage showGoToPageControl />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.compareSnapshot({
      name: "go-to-page",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
    });
  });

  it("should display tooltip if invalid page number is entered", () => {
    mount(<PaginationBarItemsPerPage showGoToPageControl />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(PAGINATION_BAR, "ic-text-field")
      .shadow()
      .find("input")
      .type("11");

    cy.findShadowEl(PAGINATION_BAR, "ic-text-field")
      .shadow()
      .find("ic-input-component-container")
      .should(HAVE_CLASS, "ic-input-component-container-error");

    cy.findShadowEl(PAGINATION_BAR, ".go-to-page-button").click();

    cy.wait(350);

    cy.compareSnapshot({
      name: "go-to-page-invalid-tooltip",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.01),
    });
  });

  it("should not display a tooltip if the page number is valid", () => {
    mount(<PaginationBarItemsPerPage showGoToPageControl />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(PAGINATION_BAR, "ic-text-field")
      .shadow()
      .find("input")
      .type("10");

    cy.checkA11yWithWait();

    cy.compareSnapshot({
      name: "go-to-page-valid",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.004),
    });
  });

  it("should render the complex pagination bar", () => {
    mount(<PaginationBarItemsPerPage type="complex" />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find('[role="navigation"]')
      .should("exist");
  });

  it("should update pagination label when complex pagination button is clicked", () => {
    mount(<IcPaginationBar totalItems={100} type="complex" />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find('[role="navigation"] ic-pagination-item')
      .eq(1)
      .click();

    cy.findShadowEl(PAGINATION_BAR, ".page-pagination-label").should(
      HAVE_TEXT,
      "Page 2 of 10"
    );

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find('[role="navigation"] ic-pagination-item')
      .last()
      .click();

    cy.findShadowEl(PAGINATION_BAR, ".page-pagination-label").should(
      HAVE_TEXT,
      "Page 10 of 10"
    );
  });

  it("should update pagination label when totalItems is updated", () => {
    mount(<IcPaginationBar totalItems={100} type="complex" />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.get(PAGINATION_BAR).invoke("prop", "totalItems", 50);

    cy.findShadowEl(PAGINATION_BAR, ".page-pagination-label").should(
      HAVE_TEXT,
      "Page 1 of 5"
    );
  });

  it("should update complex pagination when totalItems is updated", () => {
    mount(<IcPaginationBar totalItems={100} type="complex" />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.get(PAGINATION_BAR).invoke("prop", "totalItems", 50);

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find('[role="navigation"] ic-pagination-item')
      .should(HAVE_LENGTH, 5);
  });

  it("should update upper bounds when totalItems is updated", () => {
    mount(<IcPaginationBar totalItems={100} type="complex" />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find('[role="navigation"] ic-pagination-item')
      .last()
      .shadow()
      .find("ic-typography")
      .should(HAVE_TEXT, "10");

    cy.get(PAGINATION_BAR).invoke("prop", "totalItems", 50);

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find('[role="navigation"] ic-pagination-item')
      .last()
      .shadow()
      .find("ic-typography")
      .should(HAVE_TEXT, "5");
  });

  it("should go back a page when previous page button is clicked on complex pagination bar", () => {
    mount(<IcPaginationBar totalItems={50} type="complex" />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find('[role="navigation"] ic-pagination-item')
      .last()
      .click();

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find('[role="navigation"] #previous-page-button')
      .click();

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find('[role="navigation"] ic-pagination-item')
      .eq(3)
      .shadow()
      .find("button")
      .should(HAVE_ATTR, "aria-current", "page");
  });

  it("should go back to page 1 when first page button is clicked on complex pagination bar", () => {
    mount(<IcPaginationBar totalItems={50} type="complex" />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find('[role="navigation"] ic-pagination-item')
      .last()
      .click();

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find('[role="navigation"] #first-page-button')
      .click();

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find('[role="navigation"] ic-pagination-item')
      .eq(0)
      .shadow()
      .find("button")
      .should(HAVE_ATTR, "aria-current", "page");
  });

  it("should go forward a page when next page button is clicked on complex pagination bar", () => {
    mount(<IcPaginationBar totalItems={50} type="complex" />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find('[role="navigation"] #next-page-button')
      .click();

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find('[role="navigation"] ic-pagination-item')
      .eq(1)
      .shadow()
      .find("button")
      .should(HAVE_ATTR, "aria-current", "page");
  });

  it("should go to the last page when last page button is clicked on complex pagination bar", () => {
    mount(<IcPaginationBar totalItems={50} type="complex" />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find('[role="navigation"] #last-page-button')
      .click();

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find('[role="navigation"] ic-pagination-item')
      .last()
      .shadow()
      .find("button")
      .should(HAVE_ATTR, "aria-current", "page");
  });

  it("should update the complex pagination based on the items per page dropdown", () => {
    mount(<PaginationBarItemsPerPage totalItems={50} type="complex" />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find('[role="navigation"] ic-pagination-item')
      .should(HAVE_LENGTH, 5);

    cy.findShadowEl(PAGINATION_BAR, "ic-select").click();

    cy.findShadowEl(PAGINATION_BAR, "ic-select")
      .shadow()
      .find("li[role='option']")
      .eq(1)
      .click();

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find('[role="navigation"] ic-pagination-item')
      .should(HAVE_LENGTH, 3);

    cy.findShadowEl(PAGINATION_BAR, "ic-select").click();

    cy.findShadowEl(PAGINATION_BAR, "ic-select")
      .shadow()
      .find("li[role='option']")
      .eq(0)
      .click();

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find('[role="navigation"] ic-pagination-item')
      .should(HAVE_LENGTH, 5);
  });

  it("should update complex pagination to 1 when All is selected in items per page dropdown", () => {
    mount(<PaginationBarItemsPerPage totalItems={50} type="complex" />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(PAGINATION_BAR, "ic-select").click();

    cy.findShadowEl(PAGINATION_BAR, "ic-select")
      .shadow()
      .find("li[role='option']")
      .last()
      .click();

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find('[role="navigation"] ic-pagination-item')
      .should(HAVE_LENGTH, 1);
  });

  it('should render the number of items instead of the page number when rangeLabelType is "data"', () => {
    mount(<PaginationBarItemsPerPage rangeLabelType="data" />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(PAGINATION_BAR, ".item-pagination-label").should(
      HAVE_TEXT,
      "1 - 10 of 100 items"
    );

    cy.findShadowEl(PAGINATION_BAR, "ic-select").click();

    cy.findShadowEl(PAGINATION_BAR, "ic-select")
      .shadow()
      .find("li[role='option']")
      .eq(1)
      .click();

    cy.findShadowEl(PAGINATION_BAR, ".item-pagination-label").should(
      HAVE_TEXT,
      "1 - 20 of 100 items"
    );
  });

  it("should hide the range label when hideRangeLabel is true", () => {
    mount(<PaginationBarItemsPerPage hideRangeLabel />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(PAGINATION_BAR, ".item-pagination-label").should(
      "not.exist"
    );
  });

  it("should render with custom pageLabel", () => {
    mount(<PaginationBarItemsPerPage pageLabel="screen" showGoToPageControl />);

    cy.checkHydrated(PAGINATION_BAR);
    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find("ic-pagination-item")
      .shadow()
      .find("ic-typography")
      .should(HAVE_TEXT, "Screen 1");
    cy.findShadowEl(
      PAGINATION_BAR,
      "ic-typography.items-per-page-control-label"
    ).should(HAVE_TEXT, "Items per screen");
    cy.findShadowEl(
      PAGINATION_BAR,
      "ic-typography.page-pagination-label"
    ).should(HAVE_TEXT, "Screen 1 of 10");
    cy.findShadowEl(PAGINATION_BAR, ".go-to-page-holder")
      .find("ic-typography")
      .should(HAVE_TEXT, "Go to screen");
  });

  it("should render with custom itemLabel", () => {
    mount(
      <PaginationBarItemsPerPage
        pageLabel="screen"
        itemLabel="row"
        rangeLabelType="data"
      />
    );

    cy.checkHydrated(PAGINATION_BAR);
    cy.findShadowEl(
      PAGINATION_BAR,
      "ic-typography.items-per-page-control-label"
    ).should(HAVE_TEXT, "Rows per screen");
    cy.findShadowEl(
      PAGINATION_BAR,
      "ic-typography.item-pagination-label"
    ).should(HAVE_TEXT, "1 - 10 of 100 rows");
  });
});
