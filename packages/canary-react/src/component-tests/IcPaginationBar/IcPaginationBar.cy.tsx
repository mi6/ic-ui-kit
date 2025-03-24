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
import {
  PaginationBarItemsPerPage,
  PaginationBarItemsPerPageWithButtons,
} from "./IcPaginationBarTestData";

const PAGINATION_BAR = "ic-pagination-bar";
const PAGINATION = "ic-pagination";
const PAGINATION_ITEM = "ic-pagination-item";
const TYPOGRAPHY = "ic-typography";
const LAST_PAGE_BUTTON_SELECTOR = "#last-page-button";
const OPTION_LI_SELECTOR = "li[role='option']";
const PAGE_PAGINATION_LABEL_SELECTOR = ".page-pagination-label";
const NAVIGATION_PAGINATION_ITEM_SELECTOR =
  '[role="navigation"] ic-pagination-item';
const ARIA_CURRENT = "aria-current";
const ITEM_PAGINATION_LABEL_SELECTOR = ".item-pagination-label";
const TEXT_FIELD = "ic-text-field";

const DEFAULT_TEST_THRESHOLD = 0.022;

describe("IcPaginationBar end-to-end tests", () => {
  beforeEach(() => {
    cy.viewport(1024, 768);
  });

  it("should update pages label when clicking next and last page chevron", () => {
    mount(<PaginationBarItemsPerPage />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(PAGINATION_BAR, PAGINATION)
      .shadow()
      .find("#next-page-button")
      .click();

    cy.findShadowEl(PAGINATION_BAR, PAGINATION)
      .shadow()
      .find(PAGINATION_ITEM)
      .shadow()
      .find(TYPOGRAPHY)
      .should(HAVE_TEXT, "Page 2");

    cy.findShadowEl(PAGINATION_BAR, PAGINATION)
      .shadow()
      .find(LAST_PAGE_BUTTON_SELECTOR)
      .click();

    cy.findShadowEl(PAGINATION_BAR, PAGINATION)
      .shadow()
      .find(PAGINATION_ITEM)
      .shadow()
      .find(TYPOGRAPHY)
      .should(HAVE_TEXT, "Page 10");

    cy.findShadowEl(PAGINATION_BAR, PAGINATION)
      .shadow()
      .find(LAST_PAGE_BUTTON_SELECTOR)
      .shadow()
      .find("button")
      .should(BE_DISABLED);

    cy.findShadowEl(PAGINATION_BAR, PAGINATION)
      .shadow()
      .find("#next-page-button")
      .shadow()
      .find("button")
      .should(BE_DISABLED);
  });

  it("should update pages label when clicking previous and first page chevron", () => {
    mount(<PaginationBarItemsPerPage />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(PAGINATION_BAR, PAGINATION)
      .shadow()
      .find(LAST_PAGE_BUTTON_SELECTOR)
      .click();

    cy.findShadowEl(PAGINATION_BAR, PAGINATION)
      .shadow()
      .find(PAGINATION_ITEM)
      .shadow()
      .find(TYPOGRAPHY)
      .should(HAVE_TEXT, "Page 10");

    cy.findShadowEl(PAGINATION_BAR, PAGINATION)
      .shadow()
      .find("#previous-page-button")
      .click();

    cy.findShadowEl(PAGINATION_BAR, PAGINATION)
      .shadow()
      .find(PAGINATION_ITEM)
      .shadow()
      .find(TYPOGRAPHY)
      .should(HAVE_TEXT, "Page 9");

    cy.findShadowEl(PAGINATION_BAR, PAGINATION)
      .shadow()
      .find("#first-page-button")
      .click();

    cy.findShadowEl(PAGINATION_BAR, PAGINATION)
      .shadow()
      .find("#previous-page-button")
      .shadow()
      .find("button")
      .should(BE_DISABLED);

    cy.findShadowEl(PAGINATION_BAR, PAGINATION)
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
      .find(OPTION_LI_SELECTOR)
      .eq(1)
      .click();

    cy.findShadowEl(PAGINATION_BAR, PAGE_PAGINATION_LABEL_SELECTOR).should(
      HAVE_TEXT,
      "Page 1 of 5"
    );

    cy.findShadowEl(PAGINATION_BAR, "ic-select").click();

    cy.findShadowEl(PAGINATION_BAR, "ic-select")
      .shadow()
      .find(OPTION_LI_SELECTOR)
      .last()
      .click();

    cy.findShadowEl(PAGINATION_BAR, PAGE_PAGINATION_LABEL_SELECTOR).should(
      HAVE_TEXT,
      "Page 1 of 1"
    );

    cy.findShadowEl(PAGINATION_BAR, "ic-select").click();

    cy.findShadowEl(PAGINATION_BAR, "ic-select")
      .shadow()
      .find(OPTION_LI_SELECTOR)
      .eq(0)
      .click();

    cy.findShadowEl(PAGINATION_BAR, PAGE_PAGINATION_LABEL_SELECTOR).should(
      HAVE_TEXT,
      "Page 1 of 10"
    );
  });

  it("should render the complex pagination bar", () => {
    mount(<PaginationBarItemsPerPage type="complex" />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(PAGINATION_BAR, PAGINATION)
      .shadow()
      .find('[role="navigation"]')
      .should("exist");
  });

  it("should update pagination label when complex pagination button is clicked", () => {
    mount(<IcPaginationBar totalItems={100} type="complex" />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(PAGINATION_BAR, PAGINATION)
      .shadow()
      .find(NAVIGATION_PAGINATION_ITEM_SELECTOR)
      .eq(1)
      .click();

    cy.findShadowEl(PAGINATION_BAR, PAGE_PAGINATION_LABEL_SELECTOR).should(
      HAVE_TEXT,
      "Page 2 of 10"
    );

    cy.findShadowEl(PAGINATION_BAR, PAGINATION)
      .shadow()
      .find(NAVIGATION_PAGINATION_ITEM_SELECTOR)
      .last()
      .click();

    cy.findShadowEl(PAGINATION_BAR, PAGE_PAGINATION_LABEL_SELECTOR).should(
      HAVE_TEXT,
      "Page 10 of 10"
    );
  });

  it("should update pagination label when totalItems is updated", () => {
    mount(<IcPaginationBar totalItems={100} type="complex" />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.get(PAGINATION_BAR).invoke("prop", "totalItems", 50);

    cy.findShadowEl(PAGINATION_BAR, PAGE_PAGINATION_LABEL_SELECTOR).should(
      HAVE_TEXT,
      "Page 1 of 5"
    );
  });

  it("should update complex pagination when totalItems is updated", () => {
    mount(<IcPaginationBar totalItems={100} type="complex" />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.get(PAGINATION_BAR).invoke("prop", "totalItems", 50);

    cy.findShadowEl(PAGINATION_BAR, PAGINATION)
      .shadow()
      .find(NAVIGATION_PAGINATION_ITEM_SELECTOR)
      .should(HAVE_LENGTH, 5);
  });

  it("should update upper bounds when totalItems is updated", () => {
    mount(<IcPaginationBar totalItems={100} type="complex" />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(PAGINATION_BAR, PAGINATION)
      .shadow()
      .find(NAVIGATION_PAGINATION_ITEM_SELECTOR)
      .last()
      .shadow()
      .find(TYPOGRAPHY)
      .should(HAVE_TEXT, "10");

    cy.get(PAGINATION_BAR).invoke("prop", "totalItems", 50);

    cy.findShadowEl(PAGINATION_BAR, PAGINATION)
      .shadow()
      .find(NAVIGATION_PAGINATION_ITEM_SELECTOR)
      .last()
      .shadow()
      .find(TYPOGRAPHY)
      .should(HAVE_TEXT, "5");
  });

  it("should go back a page when previous page button is clicked on complex pagination bar", () => {
    mount(<IcPaginationBar totalItems={50} type="complex" />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(PAGINATION_BAR, PAGINATION)
      .shadow()
      .find(NAVIGATION_PAGINATION_ITEM_SELECTOR)
      .last()
      .click();

    cy.findShadowEl(PAGINATION_BAR, PAGINATION)
      .shadow()
      .find('[role="navigation"] #previous-page-button')
      .click();

    cy.findShadowEl(PAGINATION_BAR, PAGINATION)
      .shadow()
      .find(NAVIGATION_PAGINATION_ITEM_SELECTOR)
      .eq(3)
      .shadow()
      .find("button")
      .should(HAVE_ATTR, ARIA_CURRENT, "page");
  });

  it("should go back to page 1 when first page button is clicked on complex pagination bar", () => {
    mount(<IcPaginationBar totalItems={50} type="complex" />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(PAGINATION_BAR, PAGINATION)
      .shadow()
      .find(NAVIGATION_PAGINATION_ITEM_SELECTOR)
      .last()
      .click();

    cy.findShadowEl(PAGINATION_BAR, PAGINATION)
      .shadow()
      .find('[role="navigation"] #first-page-button')
      .click();

    cy.findShadowEl(PAGINATION_BAR, PAGINATION)
      .shadow()
      .find(NAVIGATION_PAGINATION_ITEM_SELECTOR)
      .eq(0)
      .shadow()
      .find("button")
      .should(HAVE_ATTR, ARIA_CURRENT, "page");
  });

  it("should go forward a page when next page button is clicked on complex pagination bar", () => {
    mount(<IcPaginationBar totalItems={50} type="complex" />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(PAGINATION_BAR, PAGINATION)
      .shadow()
      .find('[role="navigation"] #next-page-button')
      .click();

    cy.findShadowEl(PAGINATION_BAR, PAGINATION)
      .shadow()
      .find(NAVIGATION_PAGINATION_ITEM_SELECTOR)
      .eq(1)
      .shadow()
      .find("button")
      .should(HAVE_ATTR, ARIA_CURRENT, "page");
  });

  it("should go to the last page when last page button is clicked on complex pagination bar", () => {
    mount(<IcPaginationBar totalItems={50} type="complex" />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(PAGINATION_BAR, PAGINATION)
      .shadow()
      .find('[role="navigation"] #last-page-button')
      .click();

    cy.findShadowEl(PAGINATION_BAR, PAGINATION)
      .shadow()
      .find(NAVIGATION_PAGINATION_ITEM_SELECTOR)
      .last()
      .shadow()
      .find("button")
      .should(HAVE_ATTR, ARIA_CURRENT, "page");
  });

  it("should update the complex pagination based on the items per page dropdown", () => {
    mount(<PaginationBarItemsPerPage totalItems={50} type="complex" />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(PAGINATION_BAR, PAGINATION)
      .shadow()
      .find(NAVIGATION_PAGINATION_ITEM_SELECTOR)
      .should(HAVE_LENGTH, 5);

    cy.findShadowEl(PAGINATION_BAR, "ic-select").click();

    cy.findShadowEl(PAGINATION_BAR, "ic-select")
      .shadow()
      .find(OPTION_LI_SELECTOR)
      .eq(1)
      .click();

    cy.findShadowEl(PAGINATION_BAR, PAGINATION)
      .shadow()
      .find(NAVIGATION_PAGINATION_ITEM_SELECTOR)
      .should(HAVE_LENGTH, 3);

    cy.findShadowEl(PAGINATION_BAR, "ic-select").click();

    cy.findShadowEl(PAGINATION_BAR, "ic-select")
      .shadow()
      .find(OPTION_LI_SELECTOR)
      .eq(0)
      .click();

    cy.findShadowEl(PAGINATION_BAR, PAGINATION)
      .shadow()
      .find(NAVIGATION_PAGINATION_ITEM_SELECTOR)
      .should(HAVE_LENGTH, 5);
  });

  it("should update complex pagination to 1 when All is selected in items per page dropdown", () => {
    mount(<PaginationBarItemsPerPage totalItems={50} type="complex" />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(PAGINATION_BAR, "ic-select").click();

    cy.findShadowEl(PAGINATION_BAR, "ic-select")
      .shadow()
      .find(OPTION_LI_SELECTOR)
      .last()
      .click();

    cy.findShadowEl(PAGINATION_BAR, PAGINATION)
      .shadow()
      .find(NAVIGATION_PAGINATION_ITEM_SELECTOR)
      .should(HAVE_LENGTH, 1);
  });

  it("should reset to the first page when the setToFirstPageOnPaginationChange prop is set and the items per page is changed", () => {
    mount(
      <PaginationBarItemsPerPage
        rangeLabelType="data"
        setToFirstPageOnPaginationChange
      />
    );

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find("#next-page-button")
      .click();

    cy.findShadowEl(
      PAGINATION_BAR,
      "ic-typography.item-pagination-label"
    ).should(HAVE_TEXT, "11 - 20 of 100 items");

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find("ic-pagination-item")
      .shadow()
      .find("ic-typography")
      .should(HAVE_TEXT, "Page 2");

    cy.findShadowEl(PAGINATION_BAR, "ic-select").click();

    cy.findShadowEl(PAGINATION_BAR, "ic-select")
      .shadow()
      .find("li[role='option']")
      .eq(1)
      .click();

    cy.findShadowEl(
      PAGINATION_BAR,
      "ic-typography.item-pagination-label"
    ).should(HAVE_TEXT, "1 - 20 of 100 items");

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find("ic-pagination-item")
      .shadow()
      .find("ic-typography")
      .should(HAVE_TEXT, "Page 1");
  });

  it("should remain on the current page when the setToFirstPageOnPaginationChange prop is unset and the items per page is changed", () => {
    mount(<PaginationBarItemsPerPage rangeLabelType="data" />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find("#next-page-button")
      .click();

    cy.findShadowEl(
      PAGINATION_BAR,
      "ic-typography.item-pagination-label"
    ).should(HAVE_TEXT, "11 - 20 of 100 items");

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find("ic-pagination-item")
      .shadow()
      .find("ic-typography")
      .should(HAVE_TEXT, "Page 2");

    cy.findShadowEl(PAGINATION_BAR, "ic-select").click();

    cy.findShadowEl(PAGINATION_BAR, "ic-select")
      .shadow()
      .find("li[role='option']")
      .eq(1)
      .click();

    cy.findShadowEl(
      PAGINATION_BAR,
      "ic-typography.item-pagination-label"
    ).should(HAVE_TEXT, "21 - 40 of 100 items");

    cy.findShadowEl(PAGINATION_BAR, "ic-pagination")
      .shadow()
      .find("ic-pagination-item")
      .shadow()
      .find("ic-typography")
      .should(HAVE_TEXT, "Page 2");
  });

  it('should render the number of items instead of the page number when rangeLabelType is "data"', () => {
    mount(<PaginationBarItemsPerPage rangeLabelType="data" />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(PAGINATION_BAR, ITEM_PAGINATION_LABEL_SELECTOR).should(
      HAVE_TEXT,
      "1 - 10 of 100 items"
    );

    cy.findShadowEl(PAGINATION_BAR, "ic-select").click();

    cy.findShadowEl(PAGINATION_BAR, "ic-select")
      .shadow()
      .find(OPTION_LI_SELECTOR)
      .eq(1)
      .click();

    cy.findShadowEl(PAGINATION_BAR, ITEM_PAGINATION_LABEL_SELECTOR).should(
      HAVE_TEXT,
      "1 - 20 of 100 items"
    );
  });

  it("should hide the range label when hideRangeLabel is true", () => {
    mount(<PaginationBarItemsPerPage hideRangeLabel />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(PAGINATION_BAR, ITEM_PAGINATION_LABEL_SELECTOR).should(
      "not.exist"
    );
  });

  it("should render with custom pageLabel", () => {
    mount(<PaginationBarItemsPerPage pageLabel="screen" showGoToPageControl />);

    cy.checkHydrated(PAGINATION_BAR);
    cy.findShadowEl(PAGINATION_BAR, PAGINATION)
      .shadow()
      .find(PAGINATION_ITEM)
      .shadow()
      .find(TYPOGRAPHY)
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
      .find(TYPOGRAPHY)
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

  it("should stay set to All when manually setting the totalItems to 5 and then 30 after initially setting to All", () => {
    mount(<PaginationBarItemsPerPageWithButtons />);

    cy.checkHydrated(PAGINATION_BAR);
    cy.findShadowEl(PAGINATION_BAR, "ic-select")
      .shadow()
      .find(".select-input")
      .click();

    cy.findShadowEl(PAGINATION_BAR, "ic-select")
      .shadow()
      .find("li[role='option']")
      .last()
      .click();

    cy.get(".set-5").click();

    cy.findShadowEl(PAGINATION_BAR, "ic-select")
      .shadow()
      .find(".select-input")
      .should("contain.text", "All");

    cy.get(".set-30").click();

    cy.findShadowEl(PAGINATION_BAR, "ic-select")
      .shadow()
      .find(".select-input")
      .should("contain.text", "All");
  });

  it("should set items per page to 20 when manually setting totalItems to 5 and then 30 after initially setting to 20", () => {
    mount(<PaginationBarItemsPerPageWithButtons />);

    cy.checkHydrated(PAGINATION_BAR);
    cy.findShadowEl(PAGINATION_BAR, "ic-select")
      .shadow()
      .find(".select-input")
      .click();

    cy.findShadowEl(PAGINATION_BAR, "ic-select")
      .shadow()
      .find("li[role='option'][data-value='20']")
      .click();

    cy.get(".set-5").click();

    cy.findShadowEl(PAGINATION_BAR, "ic-select")
      .shadow()
      .find(".select-input")
      .should("contain.text", "All");

    cy.get(".set-30").click();

    cy.findShadowEl(PAGINATION_BAR, "ic-select")
      .shadow()
      .find(".select-input")
      .should("contain.text", "20");
  });
});

describe("IcPaginationBar visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.injectAxe();
    cy.viewport(1024, 768);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render right aligned", () => {
    mount(<PaginationBarItemsPerPage />);

    cy.checkHydrated(PAGINATION_BAR);
    cy.findShadowEl(
      PAGINATION_BAR,
      ".items-per-page-holder ic-typography"
    ).should(HAVE_TEXT, "Items per page");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/right-alignment",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.001),
    });
  });

  it("should render left aligned", () => {
    mount(<PaginationBarItemsPerPage />);

    cy.checkHydrated(PAGINATION_BAR);
    cy.get(PAGINATION_BAR).invoke("prop", "alignment", "left");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/left-alignment",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render with space between alignment", () => {
    mount(<PaginationBarItemsPerPage />);

    cy.checkHydrated(PAGINATION_BAR);
    cy.get(PAGINATION_BAR).invoke("prop", "alignment", "space-between");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/space-between-alignment",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render go to page input", () => {
    mount(<PaginationBarItemsPerPage showGoToPageControl />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/go-to-page",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.004),
    });
  });

  it("should not display a tooltip if the page number is valid", () => {
    mount(<PaginationBarItemsPerPage showGoToPageControl />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(PAGINATION_BAR, TEXT_FIELD)
      .shadow()
      .find("input")
      .type("10");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/go-to-page-valid",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.005),
    });
  });

  it("should display tooltip if invalid page number is entered", () => {
    mount(<PaginationBarItemsPerPage showGoToPageControl />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(PAGINATION_BAR, TEXT_FIELD)
      .shadow()
      .find("input")
      .type("11");

    cy.findShadowEl(PAGINATION_BAR, TEXT_FIELD)
      .shadow()
      .find("ic-input-component-container")
      .should(HAVE_CLASS, "ic-input-component-container-error");

    cy.findShadowEl(PAGINATION_BAR, ".go-to-page-button").click();

    cy.wait(350);

    cy.compareSnapshot({
      name: "/go-to-page-invalid-tooltip",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.012),
    });
  });

  it("should render with 'All' hidden from items per page dropdown", () => {
    mount(<PaginationBarItemsPerPage hideAllFromItemsPerPage />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(PAGINATION_BAR, ".items-per-page-input").click();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/hide-all-option",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.003),
    });
  });

  it("should select the correct option in the items per page dropdown", () => {
    mount(<PaginationBarItemsPerPage selectedItemsPerPage={20} />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(PAGINATION_BAR, "ic-select").click();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/selected-items-per-page",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should select the first option in the items per page dropdown if an invalid selectedItemsPerPage is provided", () => {
    mount(<PaginationBarItemsPerPage selectedItemsPerPage={99} />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(PAGINATION_BAR, "ic-select").click();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/selected-items-per-page-invalid-selectedItemsPerPage",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });
});

describe("IcPaginationBar visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  beforeEach(() => {
    cy.viewport(1024, 768);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  after(() => {
    cy.disableForcedColors();
  });

  it("should render go to page input in high contrast mode", () => {
    mount(<PaginationBarItemsPerPage showGoToPageControl />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.compareSnapshot({
      name: "/go-to-page-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.006),
    });
  });

  it("should display tooltip if invalid page number is entered in high contrast mode", () => {
    mount(<PaginationBarItemsPerPage showGoToPageControl />);

    cy.checkHydrated(PAGINATION_BAR);

    cy.findShadowEl(PAGINATION_BAR, TEXT_FIELD)
      .shadow()
      .find("input")
      .type("11");

    cy.findShadowEl(PAGINATION_BAR, TEXT_FIELD)
      .shadow()
      .find("ic-input-component-container")
      .should(HAVE_CLASS, "ic-input-component-container-error");

    cy.findShadowEl(PAGINATION_BAR, ".go-to-page-button").click();

    cy.wait(350);

    cy.compareSnapshot({
      name: "/go-to-page-invalid-tooltip-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.015),
    });
  });
});
