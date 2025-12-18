/// <reference types="Cypress" />

import React from "react";
import { IcPagination } from "../../components";
import { mount } from "cypress/react";
import {
  NOT_BE_CALLED_ONCE,
  NOT_EXIST,
  NOT_HAVE_CLASS,
} from "../utils/constants";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const PAGINATION_SELECTOR = "ic-pagination";
const BUTTON_SELECTOR = "ic-button";
const NEXT_PAGE_SELECTOR = "#next-page-button";
const PREV_PAGE_SELECTOR = "#previous-page-button";
const LAST_PAGE_SELECTOR = "#last-page-button";
const FIRST_PAGE_SELECTOR = "#first-page-button";
const DEFAULT_TEST_THRESHOLD = 0;
const PAGE_CHANGE_EVENT = "@icPageChanged";

describe("IcPagination end-to-end, visual regression and a11y tests", () => {
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
      name: "/simple",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
    });
  });

  it("should render simple type pagination with focus", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination pages={15} aria-label="Simple pagination " />
      </div>
    );
    cy.checkHydrated(PAGINATION_SELECTOR);

    cy.wait(500)
      .findShadowEl(PAGINATION_SELECTOR, BUTTON_SELECTOR)
      .each(($button) => {
        $button.focus();
      });

    cy.checkA11yWithWait(undefined, 300);
    cy.compareSnapshot({
      name: "/focus-simple",
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
      name: "/complex",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.017),
    });
  });

  it("should render dark complex type pagination", () => {
    mount(
      <div
        style={{
          margin: "16px",
          backgroundColor: "var(--ic-color-page-background-dark)",
        }}
      >
        <IcPagination
          pages={15}
          type="complex"
          aria-label="Complex pagination"
          theme="dark"
        />
      </div>
    );
    cy.checkHydrated(PAGINATION_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/complex-dark-theme",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.014),
    });
  });

  it("should render dark monochrome complex type pagination", () => {
    mount(
      <div
        style={{
          margin: "16px",
          backgroundColor: "var(--ic-color-page-background-dark)",
        }}
      >
        <IcPagination
          pages={15}
          type="complex"
          aria-label="Complex pagination"
          theme="dark"
          monochrome
        />
      </div>
    );
    cy.checkHydrated(PAGINATION_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/complex-monochrome-dark-theme",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.018),
    });
  });

  it("should render light monochrome complex type pagination", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination
          pages={15}
          type="complex"
          aria-label="Complex pagination"
          monochrome
        />
      </div>
    );
    cy.checkHydrated(PAGINATION_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/complex-monochrome",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
    });
  });

  it("should render complex type pagination with focus", () => {
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

    cy.wait(500)
      .findShadowEl(PAGINATION_SELECTOR, BUTTON_SELECTOR)
      .each(($button) => {
        $button.focus();
      });

    cy.checkA11yWithWait(undefined, 300);
    cy.compareSnapshot({
      name: "/focus-complex",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.033),
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
      name: "/boundary-adjacent-items",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
    });
  });

  it("should render with boundary and adjacent parameters set - on page 8", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination
          type="complex"
          adjacentPageCount={2}
          boundaryPageCount={2}
          pages={15}
          currentPage={8}
        />
      </div>
    );
    cy.checkHydrated(PAGINATION_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/boundary-adjacent-items-centre-page",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
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
      name: "/hide-first-last-page-buttons",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
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
      name: "/hide-current-page",
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
      name: "/disabled-with-complex",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.009),
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
    cy.wait(500);
    cy.compareSnapshot({
      name: "/disabled-with-simple",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.008),
    });
  });

  it("should not be able to interact with complex pagination in a disabled state", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination type="complex" disabled pages={12} />
      </div>
    );
    cy.checkHydrated(PAGINATION_SELECTOR);

    cy.get(PAGINATION_SELECTOR).invoke(
      "on",
      "icPageChange",
      cy.stub().as("icPageChanged")
    );

    cy.findShadowEl(PAGINATION_SELECTOR, NEXT_PAGE_SELECTOR).click({
      force: true,
    });

    cy.get(PAGE_CHANGE_EVENT).should(NOT_BE_CALLED_ONCE);
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
      name: "/label",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.016),
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
      name: "/default-page-4",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
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

    cy.findShadowEl(PAGINATION_SELECTOR, NEXT_PAGE_SELECTOR).click();
    cy.findShadowEl(PAGINATION_SELECTOR, NEXT_PAGE_SELECTOR).click();
    cy.findShadowEl(PAGINATION_SELECTOR, NEXT_PAGE_SELECTOR).click();

    cy.get(PAGE_CHANGE_EVENT).should((stub) => {
      expect(stub.getCall(0).args[0].detail.value).to.equal(2);
      expect(stub.getCall(1).args[0].detail.value).to.equal(3);
      expect(stub.getCall(2).args[0].detail.value).to.equal(4);
    });

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/simple-after-click-next-page-1",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.035),
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

    cy.findShadowEl(PAGINATION_SELECTOR, NEXT_PAGE_SELECTOR).click();

    cy.get(PAGE_CHANGE_EVENT).should((stub) => {
      expect(stub.getCall(0).args[0].detail.value).to.equal(2);
    });

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/complex-after-click-next-page-1",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.034),
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
      name: "/complex-after-click-page-3",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.017),
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

    cy.findShadowEl(PAGINATION_SELECTOR, NEXT_PAGE_SELECTOR).click();
    cy.findShadowEl(PAGINATION_SELECTOR, NEXT_PAGE_SELECTOR).click();
    cy.get(PAGE_CHANGE_EVENT).should((stub) => {
      expect(stub.getCall(1).args[0].detail.value).to.equal(3);
    });

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/simple-after-click-page-3",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
    });
  });

  it("should emit the correct page value when the last page is navigated to for complex pagination", () => {
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
      name: "/complex-after-click-lastPage-button",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.034),
    });
  });

  it("should emit the correct page value when the last page is navigated to for complex pagination", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination pages={15} type="complex" />
      </div>
    );

    cy.get("ic-pagination").invoke(
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
      name: "/complex-after-click-lastPage-button",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.034),
    });
  });

  it("should emit the correct page value when 'page 13' is navigated to for complex pagination", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination pages={15} type="complex" />
      </div>
    );

    cy.get("ic-pagination").invoke(
      "on",
      "icPageChange",
      cy.stub().as("icPageChanged")
    );

    cy.findShadowEl(PAGINATION_SELECTOR, LAST_PAGE_SELECTOR).click();
    cy.get(PAGE_CHANGE_EVENT).should((stub) => {
      expect(stub.getCall(0).args[0].detail.value).to.equal(15);
    });

    cy.findShadowEl(PAGINATION_SELECTOR, "#pagination-item-13").click();
    cy.get(PAGE_CHANGE_EVENT).should((stub) => {
      expect(stub.getCall(1).args[0].detail.value).to.equal(13);
    });

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/complex-after-click-page-13-button",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.016),
    });
  });

  it("should emit the correct page value when the last page is navigated to for simple pagination", () => {
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
      name: "/simple-after-click-lastPage-button",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.034),
    });
  });

  it("should emit the correct page value when 'page 13' is navigated to for complex pagination", () => {
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
    cy.findShadowEl(PAGINATION_SELECTOR, PREV_PAGE_SELECTOR).click();
    cy.findShadowEl(PAGINATION_SELECTOR, PREV_PAGE_SELECTOR).click();
    cy.get(PAGE_CHANGE_EVENT).should((stub) => {
      expect(stub.getCall(0).args[0].detail.value).to.equal(15);
      expect(stub.getCall(1).args[0].detail.value).to.equal(14);
    });

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/simple-after-click-page-13-button",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.017),
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

    cy.get(PAGE_CHANGE_EVENT).should((stub) => {
      expect(stub.getCall(0).args[0].detail.value).to.equal(15);
      expect(stub.getCall(1).args[0].detail.value).to.equal(14);
    });

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/simple-previous-page-button-clicked",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.037),
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
    cy.findShadowEl(PAGINATION_SELECTOR, PREV_PAGE_SELECTOR).click();

    cy.get(PAGE_CHANGE_EVENT).should((stub) => {
      expect(stub.getCall(0).args[0].detail.value).to.equal(15);
      expect(stub.getCall(1).args[0].detail.value).to.equal(14);
    });

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/complex-previous-page-button-clicked",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.037),
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
      name: "/simple-first-page-button-clicked",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.034),
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
    cy.findShadowEl(PAGINATION_SELECTOR, FIRST_PAGE_SELECTOR).click();

    cy.get(PAGE_CHANGE_EVENT).should((stub) => {
      expect(stub.getCall(0).args[0].detail.value).to.equal(15);
      expect(stub.getCall(1).args[0].detail.value).to.equal(1);
    });

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/complex-first-page-button-clicked",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.033),
    });
  });

  it("should emit the correct value when adjacent and boundary count set, middle-state navigated to and page '7' clicked for complex pagination", () => {
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
      name: "/complex-middle-state-page-7",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.014),
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
    cy.findShadowEl(PAGINATION_SELECTOR, "#end-ellipsis").click();
    cy.findShadowEl(PAGINATION_SELECTOR, "#end-ellipsis").should(
      NOT_HAVE_CLASS,
      "active"
    );
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
      .realPress("Enter");
    cy.findShadowEl(PAGINATION_SELECTOR, NEXT_PAGE_SELECTOR)
      .shadow()
      .find("button")
      .realPress(["Shift", "Tab"]);
    cy.findShadowEl(PAGINATION_SELECTOR, NEXT_PAGE_SELECTOR)
      .shadow()
      .find("button")
      .realPress("Space");
    cy.findShadowEl(PAGINATION_SELECTOR, NEXT_PAGE_SELECTOR)
      .shadow()
      .find("button")
      .realPress(["Shift", "Tab"]);
    cy.findShadowEl(PAGINATION_SELECTOR, NEXT_PAGE_SELECTOR)
      .shadow()
      .find("button")
      .realPress(["Shift", "Tab"]);
    cy.findShadowEl(PAGINATION_SELECTOR, NEXT_PAGE_SELECTOR)
      .shadow()
      .find("button")
      .realPress("Enter");

    cy.get(PAGE_CHANGE_EVENT).should((stub) => {
      expect(stub.getCall(0).args[0].detail.value).to.equal(2);
      expect(stub.getCall(1).args[0].detail.value).to.equal(15);
      expect(stub.getCall(2).args[0].detail.value).to.equal(13);
    });
  });

  it("should have no accessibility violations with more than one pagination component on the page", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination
          pages={10}
          currentPage={2}
          accessibleLabel="First pagination"
        />
        <IcPagination
          pages={20}
          currentPage={2}
          type="complex"
          accessibleLabel="Second pagination"
        />
      </div>
    );
    cy.checkHydrated(PAGINATION_SELECTOR);

    cy.checkA11yWithWait();
  });
});

describe("IcPagination visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  after(() => {
    cy.disableForcedColors();
  });

  it("should render simple type pagination in high contrast mode", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination pages={15} aria-label="Simple pagination " />
      </div>
    );
    cy.checkHydrated(PAGINATION_SELECTOR);

    cy.compareSnapshot({
      name: "/simple-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
    });
  });

  it("should render complex type pagination in high contrast mode", () => {
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

    cy.compareSnapshot({
      name: "/complex-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.018),
    });
  });

  it("should render simple pagination with focus in high contrast mode", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination pages={15} aria-label="Simple pagination " />
      </div>
    );
    cy.checkHydrated(PAGINATION_SELECTOR);

    cy.wait(500)
      .findShadowEl(PAGINATION_SELECTOR, BUTTON_SELECTOR)
      .each(($button) => {
        $button.focus();
      });

    cy.wait(500).compareSnapshot({
      name: "/focus-simple-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.036),
    });
  });

  it("should render complex pagination with focus in high contrast mode", () => {
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

    cy.wait(500)
      .findShadowEl(PAGINATION_SELECTOR, BUTTON_SELECTOR)
      .each(($button) => {
        $button.focus();
      });

    cy.wait(500).compareSnapshot({
      name: "/focus-complex-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.035),
    });
  });
});
