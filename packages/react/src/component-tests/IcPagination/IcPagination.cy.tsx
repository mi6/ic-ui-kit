/// <reference types="Cypress" />

import React from "react";
import { IcPagination } from "../../components";
import { mount } from "cypress/react";
import { NOT_EXIST, NOT_HAVE_CLASS } from "../utils/constants";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const PAGINATION_SELECTOR = "ic-pagination";
const BUTTON_SELECTOR = "ic-button";
const NEXT_PAGE_SELECTOR = "#next-page-button";
const PREV_PAGE_SELECTOR = "#previous-page-button";
const LAST_PAGE_SELECTOR = "#last-page-button";
const FIRST_PAGE_SELECTOR = "#first-page-button";
const DEFAULT_TEST_THRESHOLD = 0;
const PAGE_CHANGE_EVENT = "@icPageChanged";

describe("IcPagination", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render simple type pagination", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination pages={15} aria-label="Simple pagination " />
      </div>
    );
    cy.checkHydrated(PAGINATION_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "simple",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
    });

    cy.findShadowEl(PAGINATION_SELECTOR, BUTTON_SELECTOR);
    cy.findShadowEl(PAGINATION_SELECTOR, BUTTON_SELECTOR).each(($button) => {
      $button.focus();
    });

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "focus-simple",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.034),
    });
  });

  it("should render complex type pagination", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination
          pages={15}
          type="complex"
          aria-label="Complex pagination"
        />
      </div>
    );
    cy.checkHydrated(PAGINATION_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "complex",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
    });

    cy.findShadowEl(PAGINATION_SELECTOR, BUTTON_SELECTOR).each(($button) => {
      $button.focus();
    });

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "focus-complex",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.033),
    });
  });

  it("should render dark appearance for complex variant", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination pages={15} type="complex" />
      </div>
    );
    cy.checkHydrated(PAGINATION_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "dark-complex-appearance",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
    });

    cy.findShadowEl(PAGINATION_SELECTOR, BUTTON_SELECTOR).each(($button) => {
      $button.focus();
    });

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "dark-complex-focus",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.032),
    });
  });

  it("should render dark appearance for simple variant", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination pages={15} aria-label="Simple pagination" />
      </div>
    );
    cy.checkHydrated(PAGINATION_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "dark-simple-appearance",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
    });
    cy.findShadowEl(PAGINATION_SELECTOR, BUTTON_SELECTOR).each(($button) => {
      $button.focus();
    });

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "dark-simple-focus",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.034),
    });
  });

  it("should render light appearance for complex variant", () => {
    mount(
      <div
        style={{ backgroundColor: "black", margin: "16px", minHeight: "50px" }}
      >
        <IcPagination appearance="light" pages={15} type="complex" />
      </div>
    );
    cy.checkHydrated(PAGINATION_SELECTOR);

    cy.checkA11yWithWait(undefined, 300);
    cy.compareSnapshot({
      name: "light-complex-appearance",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.021),
    });

    cy.findShadowEl(PAGINATION_SELECTOR, BUTTON_SELECTOR).each(($button) => {
      $button.focus();
    });

    cy.checkA11yWithWait(undefined, 300);
    cy.compareSnapshot({
      name: "light-complex-focus",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.033),
    });
  });

  it("should render light appearance for simple variant", () => {
    mount(
      <div
        style={{ backgroundColor: "black", margin: "16px", minHeight: "50px" }}
      >
        <IcPagination appearance="light" pages={15} />
      </div>
    );
    cy.checkHydrated(PAGINATION_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "light-simple-appearance",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.023),
    });

    cy.findShadowEl(PAGINATION_SELECTOR, BUTTON_SELECTOR).each(($button) => {
      $button.focus();
    });

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "light-simple-focus",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.035),
    });
  });

  it("should render with boundary and adjacent parameters set", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination
          type="complex"
          adjacentPageCount={2}
          boundaryPageCount={2}
          pages={15}
        />
      </div>
    );
    cy.checkHydrated(PAGINATION_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "boundary-adjacent-items",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.024),
    });
  });

  it("should render with hidden first and last buttons", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination hideFirstAndLastPageButton pages={15} />
      </div>
    );
    cy.checkHydrated(PAGINATION_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "hide-first-last-page-buttons",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
    });
  });

  it("should render with hide current page", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination hideCurrentPage pages={15} />
      </div>
    );
    cy.checkHydrated(PAGINATION_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "hide-current-page",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render complex pagination in a disabled state", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination type="complex" disabled pages={12} />
      </div>
    );
    cy.checkHydrated(PAGINATION_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "disabled-with-complex",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.007),
    });
  });

  it("should render simple pagination in a disabled state", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination disabled pages={12} />
      </div>
    );
    cy.checkHydrated(PAGINATION_SELECTOR);

    // cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "disabled-with-simple",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.006),
    });
  });

  it("should render with page label", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination label="Slide" pages={12} type="simple" />
      </div>
    );
    cy.checkHydrated(PAGINATION_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "label",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
    });
  });

  it("should render with default page set to 4", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination pages={12} defaultPage={4} />
      </div>
    );
    cy.checkHydrated(PAGINATION_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "default-page-4",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.023),
    });
  });

  it("should emit the correct page value when 'next page' is clicked for simple pagination", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination pages={15} />
      </div>
    );

    cy.get(PAGINATION_SELECTOR).invoke(
      "on",
      "icPageChange",
      cy.stub().as("icPageChanged")
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "simple-before-click-next-page-1",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
    });

    cy.findShadowEl(PAGINATION_SELECTOR, NEXT_PAGE_SELECTOR)
      .click()
      .click()
      .click();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "simple-after-click-next-page-1",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.035),
    });

    cy.get(PAGE_CHANGE_EVENT).should((stub) => {
      expect(stub.getCall(0).args[0].detail.value).to.equal(2);
      expect(stub.getCall(1).args[0].detail.value).to.equal(3);
      expect(stub.getCall(2).args[0].detail.value).to.equal(4);
    });
  });

  it("should emit the correct page value when 'next page' is clicked for complex pagination", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination pages={15} type="complex" />
      </div>
    );

    cy.get(PAGINATION_SELECTOR).invoke(
      "on",
      "icPageChange",
      cy.stub().as("icPageChanged")
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "complex-before-click-next-page-1",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
    });

    cy.findShadowEl(PAGINATION_SELECTOR, NEXT_PAGE_SELECTOR).click();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "complex-after-click-next-page-1",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.033),
    });

    cy.get(PAGE_CHANGE_EVENT).should((stub) => {
      expect(stub.getCall(0).args[0].detail.value).to.equal(2);
    });
  });

  it("should emit the correct page value when 'page 3' is clicked for complex pagination", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination pages={15} type="complex" />
      </div>
    );

    cy.checkHydrated(PAGINATION_SELECTOR);
    cy.get(PAGINATION_SELECTOR).invoke(
      "on",
      "icPageChange",
      cy.stub().as("icPageChanged")
    );
    cy.findShadowEl(PAGINATION_SELECTOR, "#pagination-item-3").click();
    cy.get(PAGE_CHANGE_EVENT).should((stub) => {
      expect(stub.getCall(0).args[0].detail.value).to.equal(3);
    });

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "complex-after-click-page-3",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
    });
  });

  it("should emit the correct page value when 'page 3' is navigated to for simple pagination ", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination pages={15} />
      </div>
    );

    cy.get(PAGINATION_SELECTOR).invoke(
      "on",
      "icPageChange",
      cy.stub().as("icPageChanged")
    );

    cy.findShadowEl(PAGINATION_SELECTOR, NEXT_PAGE_SELECTOR).click().click();
    cy.get(PAGE_CHANGE_EVENT).should((stub) => {
      expect(stub.getCall(1).args[0].detail.value).to.equal(3);
    });

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "simple-after-click-page-3",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
    });
  });

  it("should emit the correct page value when 'page 13' is navigated to for complex pagination", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination pages={15} type="complex" />
      </div>
    );

    cy.get(PAGINATION_SELECTOR).invoke(
      "on",
      "icPageChange",
      cy.stub().as("icPageChanged")
    );

    cy.findShadowEl(PAGINATION_SELECTOR, LAST_PAGE_SELECTOR).click();
    cy.get(PAGE_CHANGE_EVENT).should((stub) => {
      expect(stub.getCall(0).args[0].detail.value).to.equal(15);
    });

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "complex-after-click-lastPage-button",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.034),
    });

    cy.findShadowEl(PAGINATION_SELECTOR, "#pagination-item-13").click();
    cy.get(PAGE_CHANGE_EVENT).should((stub) => {
      expect(stub.getCall(1).args[0].detail.value).to.equal(13);
    });

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "complex-after-click-page-13-button",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
    });
  });

  it("should emit the correct page value when 'page 13' is navigated to for simple pagination", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination pages={15} />
      </div>
    );

    cy.get(PAGINATION_SELECTOR).invoke(
      "on",
      "icPageChange",
      cy.stub().as("icPageChanged")
    );
    cy.findShadowEl(PAGINATION_SELECTOR, "#last-page-button").click();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "simple-after-click-lastPage-button",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.034),
    });

    cy.findShadowEl(PAGINATION_SELECTOR, PREV_PAGE_SELECTOR).click().click();
    cy.get(PAGE_CHANGE_EVENT).should((stub) => {
      expect(stub.getCall(0).args[0].detail.value).to.equal(15);
      expect(stub.getCall(1).args[0].detail.value).to.equal(14);
    });

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "simple-after-click-page-13-button",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.021),
    });
  });

  it("should emit the correct page value when the 'previous page' button is clicked for simple pagination", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination pages={15} />
      </div>
    );

    cy.get(PAGINATION_SELECTOR).invoke(
      "on",
      "icPageChange",
      cy.stub().as("icPageChanged")
    );
    cy.findShadowEl(PAGINATION_SELECTOR, LAST_PAGE_SELECTOR).click();
    cy.findShadowEl(PAGINATION_SELECTOR, PREV_PAGE_SELECTOR).click();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "simple-previous-page-button-clicked",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.038),
    });

    cy.get(PAGE_CHANGE_EVENT).should((stub) => {
      expect(stub.getCall(0).args[0].detail.value).to.equal(15);
      expect(stub.getCall(1).args[0].detail.value).to.equal(14);
    });
  });

  it("should emit the correct page value when the 'previous page' button is clicked for complex pagination", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination pages={15} type="complex" />
      </div>
    );

    cy.get(PAGINATION_SELECTOR).invoke(
      "on",
      "icPageChange",
      cy.stub().as("icPageChanged")
    );
    cy.findShadowEl(PAGINATION_SELECTOR, LAST_PAGE_SELECTOR).click();
    cy.get(PAGE_CHANGE_EVENT).should((stub) => {
      expect(stub.getCall(0).args[0].detail.value).to.equal(15);
    });
    cy.findShadowEl(PAGINATION_SELECTOR, PREV_PAGE_SELECTOR).click();
    cy.get(PAGE_CHANGE_EVENT).should((stub) => {
      expect(stub.getCall(1).args[0].detail.value).to.equal(14);
    });

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "complex-previous-page-button-clicked",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.038),
    });
  });

  it("should emit the correct page value when the 'first page' button is clicked for simple pagination", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination pages={15} />
      </div>
    );

    cy.get(PAGINATION_SELECTOR).invoke(
      "on",
      "icPageChange",
      cy.stub().as("icPageChanged")
    );
    cy.findShadowEl(PAGINATION_SELECTOR, LAST_PAGE_SELECTOR).click();
    cy.findShadowEl(PAGINATION_SELECTOR, FIRST_PAGE_SELECTOR).click();
    cy.get(PAGE_CHANGE_EVENT).should((stub) => {
      expect(stub.getCall(0).args[0].detail.value).to.equal(15);
      expect(stub.getCall(1).args[0].detail.value).to.equal(1);
    });

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "simple-first-page-button-clicked",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.035),
    });
  });

  it("should emit the correct page value when the 'first page' button is clicked for complex pagination", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination pages={15} type="complex" />
      </div>
    );

    cy.get(PAGINATION_SELECTOR).invoke(
      "on",
      "icPageChange",
      cy.stub().as("icPageChanged")
    );
    cy.findShadowEl(PAGINATION_SELECTOR, LAST_PAGE_SELECTOR).click();
    cy.get(PAGE_CHANGE_EVENT).should((stub) => {
      expect(stub.getCall(0).args[0].detail.value).to.equal(15);
    });
    cy.findShadowEl(PAGINATION_SELECTOR, FIRST_PAGE_SELECTOR).click();
    cy.get(PAGE_CHANGE_EVENT).should((stub) => {
      expect(stub.getCall(1).args[0].detail.value).to.equal(1);
    });

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "complex-first-page-button-clicked",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.033),
    });
  });

  it(" should emit the correct value when adjacent and boundary count set, middle-state navigated to and page '7' clicked for complex pagination", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination
          pages={15}
          type="complex"
          adjacentPageCount={1}
          boundaryPageCount={1}
        />
      </div>
    );

    cy.get(PAGINATION_SELECTOR).invoke(
      "on",
      "icPageChange",
      cy.stub().as("icPageChanged")
    );

    for (let i = 1; i < 6; i++) {
      cy.findShadowEl(PAGINATION_SELECTOR, NEXT_PAGE_SELECTOR).click();
    }
    cy.get(PAGE_CHANGE_EVENT).should((stub) => {
      expect(stub.getCall(0).args[0].detail.value).to.equal(2);
    });

    cy.findShadowEl(PAGINATION_SELECTOR, "#pagination-item-7").click();
    cy.get(PAGE_CHANGE_EVENT).should((stub) => {
      expect(stub.getCall(1).args[0].detail.value).to.equal(3);
    });

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "complex-middle-state-page-7",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.017),
    });
  });

  it("should not navigate to 'page 8' when the middle state is reached and the adjacent-page-count for complex pagination", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination
          pages={15}
          type="complex"
          adjacentPageCount={1}
          boundaryPageCount={1}
        />
      </div>
    );

    cy.get(PAGINATION_SELECTOR).invoke(
      "on",
      "icPageChange",
      cy.stub().as("icPageChanged")
    );

    for (let i = 1; i < 6; i++) {
      cy.findShadowEl(PAGINATION_SELECTOR, NEXT_PAGE_SELECTOR).click();
    }
    cy.get(PAGE_CHANGE_EVENT).should((stub) => {
      expect(stub.getCall(0).args[0].detail.value).to.equal(2);
    });
    cy.findShadowEl(PAGINATION_SELECTOR, "#end-ellipsis")
      .click()
      .should(NOT_HAVE_CLASS, "active");
    cy.findShadowEl(PAGINATION_SELECTOR, "#pagination-item-8").should(
      NOT_EXIST
    );
  });
  it("should be navigated with keyboard only", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination pages={15} type="complex" />
      </div>
    );

    cy.checkHydrated(PAGINATION_SELECTOR);
    cy.get(PAGINATION_SELECTOR).invoke(
      "on",
      "icPageChange",
      cy.stub().as("icPageChanged")
    );

    cy.findShadowEl(PAGINATION_SELECTOR, NEXT_PAGE_SELECTOR)
      .shadow()
      .find("button")
      .focus()
      .realPress("Enter")
      .realPress(["Shift", "Tab"])
      .realPress("Space")
      .realPress(["Shift", "Tab"])
      .realPress(["Shift", "Tab"])
      .realPress("Enter");
    cy.get(PAGE_CHANGE_EVENT).should((stub) => {
      expect(stub.getCall(0).args[0].detail.value).to.equal(2);
      expect(stub.getCall(1).args[0].detail.value).to.equal(15);
      expect(stub.getCall(2).args[0].detail.value).to.equal(13);
    });
  });
});
