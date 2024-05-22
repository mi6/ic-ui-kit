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
    cy.compareSnapshot({
      name: "simple_pagination",
      testThreshold: setThresholdBasedOnEnv(0.03),
    });
    cy.checkA11yWithWait();
    cy.findShadowEl(PAGINATION_SELECTOR, BUTTON_SELECTOR);
    cy.findShadowEl(PAGINATION_SELECTOR, BUTTON_SELECTOR).each(($button) => {
      $button.focus();
    });
    cy.compareSnapshot({
      name: "focus_simple_pagination",
      testThreshold: setThresholdBasedOnEnv(0.135),
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
    cy.compareSnapshot({
      name: "complex_pagination",
      testThreshold: setThresholdBasedOnEnv(0.02),
    });
    cy.checkA11yWithWait();
    cy.findShadowEl(PAGINATION_SELECTOR, BUTTON_SELECTOR).each(($button) => {
      $button.focus();
    });
    cy.compareSnapshot({
      name: "focus_complex_pagination",
      testThreshold: setThresholdBasedOnEnv(0.032),
    });
  });

  it("should render dark appearance for complex variant", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination pages={15} type="complex" />
      </div>
    );
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "dark_complex_appearance",
      testThreshold: setThresholdBasedOnEnv(0.02),
    });
    cy.findShadowEl(PAGINATION_SELECTOR, BUTTON_SELECTOR).each(($button) => {
      $button.focus();
    });
    cy.compareSnapshot({
      name: "dark_complex_focus",
      testThreshold: setThresholdBasedOnEnv(0.032),
    });
  });

  it("should render dark appearance for simple variant", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination pages={15} aria-label="Simple pagination" />
      </div>
    );
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "dark_simple_appearance",
      testThreshold: setThresholdBasedOnEnv(0.022),
    });
    cy.findShadowEl(PAGINATION_SELECTOR, BUTTON_SELECTOR).each(($button) => {
      $button.focus();
    });
    cy.compareSnapshot({
      name: "dark_simple_focus",
      testThreshold: setThresholdBasedOnEnv(0.035),
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
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "light_complex_appearance",
      testThreshold: setThresholdBasedOnEnv(0.02),
    });
    cy.findShadowEl(PAGINATION_SELECTOR, BUTTON_SELECTOR).each(($button) => {
      $button.focus();
    });
    cy.wait(1000);
    cy.compareSnapshot({
      name: "light_complex_focus",
      testThreshold: setThresholdBasedOnEnv(0.135),
    });
  });

  it("should render light appearance for simple variant", () => {
    mount(
      <div
        style={{ backgroundColor: "black", margin: "16px", minHeight: "50px" }}
      >
        {" "}
        <IcPagination appearance="light" pages={15} />
      </div>
    );

    cy.compareSnapshot({
      name: "light_simple_appearance",
      testThreshold: setThresholdBasedOnEnv(0.023),
    });
    cy.findShadowEl(PAGINATION_SELECTOR, BUTTON_SELECTOR).each(($button) => {
      $button.focus();
    });
    cy.compareSnapshot({
      name: "light_simple_focus",
      testThreshold: setThresholdBasedOnEnv(0.036),
    });
  });

  it("should render with boundary and adjacent parameters set", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination
          type="complex"
          adjacentCount={2}
          boundaryCount={2}
          pages={15}
        />
      </div>
    );
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "boundary_adjacent_items",
      testThreshold: setThresholdBasedOnEnv(0.024),
    });
  });

  it("should render with hidden first and last buttons", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination hideFirstAndLastPageButton pages={15} />
      </div>
    );
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "hide_first_last_page_buttons",
      testThreshold: setThresholdBasedOnEnv(0.022),
    });
  });

  it("should render with hide current page", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination hideCurrentPage pages={15} />
      </div>
    );
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "hide_current_page",
      testThreshold: setThresholdBasedOnEnv(0.02),
    });
  });

  it("should render complex pagination in a disabled state", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination type="complex" disabled pages={12} />
      </div>
    );
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "disabled_with_complex",
      testThreshold: setThresholdBasedOnEnv(0.02),
    });
  });

  it("should render simple pagination in a disabled state", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination disabled pages={12} />
      </div>
    );
    cy.compareSnapshot({
      name: "disabled_with_simple",
      testThreshold: setThresholdBasedOnEnv(0.02),
    });
  });

  it("should render with page label", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination label="Slide" pages={12} type="simple" />
      </div>
    );
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "label",
      testThreshold: setThresholdBasedOnEnv(0.02),
    });
  });

  it("should render with default page set to 4", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination pages={12} defaultPage={4} />
      </div>
    );
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "default_page_4",
      testThreshold: setThresholdBasedOnEnv(0.023),
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
    cy.compareSnapshot({
      name: "simple_before_click_next_page1",
      testThreshold: setThresholdBasedOnEnv(0.022),
    });
    cy.findShadowEl(PAGINATION_SELECTOR, NEXT_PAGE_SELECTOR)
      .click()
      .click()
      .click();
    cy.compareSnapshot({
      name: "simple_after_click_next_page1",
      testThreshold: setThresholdBasedOnEnv(0.023),
    });
    cy.get("@icPageChanged").should((stub) => {
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
    cy.compareSnapshot({
      name: "complex_before_click_next_page1",
      testThreshold: setThresholdBasedOnEnv(0.02),
    });
    cy.findShadowEl(PAGINATION_SELECTOR, NEXT_PAGE_SELECTOR).click();
    cy.compareSnapshot({
      name: "complex_after_click_next_page1",
      testThreshold: setThresholdBasedOnEnv(0.033),
    });
    cy.get("@icPageChanged").should((stub) => {
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
    cy.get("@icPageChanged").should((stub) => {
      expect(stub.getCall(0).args[0].detail.value).to.equal(3);
    });
    cy.compareSnapshot({
      name: "complex_after_click_page_3",
      testThreshold: setThresholdBasedOnEnv(0.068),
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
    cy.compareSnapshot({
      name: "simple_after_click_page_3",
      testThreshold: setThresholdBasedOnEnv(0.022),
    });
    cy.findShadowEl(PAGINATION_SELECTOR, NEXT_PAGE_SELECTOR).click().click();
    cy.get("@icPageChanged").should((stub) => {
      expect(stub.getCall(0).args[0].detail.value).to.equal(2);
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
    cy.get("@icPageChanged").should((stub) => {
      expect(stub.getCall(0).args[0].detail.value).to.equal(15);
    });
    cy.compareSnapshot({
      name: "complex_afterclick_lastPage_button",
      testThreshold: setThresholdBasedOnEnv(0.034),
    });
    cy.findShadowEl(PAGINATION_SELECTOR, "#pagination-item-13").click();
    cy.get("@icPageChanged").should((stub) => {
      expect(stub.getCall(1).args[0].detail.value).to.equal(13);
    });
    cy.compareSnapshot({
      name: "complex_afterclick_page_13_button",
      testThreshold: setThresholdBasedOnEnv(0.022),
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
    cy.compareSnapshot({
      name: "simple_afterclick_lastPage_button",
      testThreshold: setThresholdBasedOnEnv(0.034),
    });
    cy.findShadowEl(PAGINATION_SELECTOR, PREV_PAGE_SELECTOR).click().click();
    cy.get("@icPageChanged").should((stub) => {
      expect(stub.getCall(0).args[0].detail.value).to.equal(15);
      expect(stub.getCall(1).args[0].detail.value).to.equal(14);
    });
    cy.compareSnapshot({
      name: "simple_afterclick_page_13_button",
      testThreshold: setThresholdBasedOnEnv(0.021),
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
    cy.compareSnapshot({
      name: "simple_previous_page_button_clicked",
      testThreshold: setThresholdBasedOnEnv(0.038),
    });
    cy.get("@icPageChanged").should((stub) => {
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
    cy.get("@icPageChanged").should((stub) => {
      expect(stub.getCall(0).args[0].detail.value).to.equal(15);
    });
    cy.findShadowEl(PAGINATION_SELECTOR, PREV_PAGE_SELECTOR).click();
    cy.get("@icPageChanged").should((stub) => {
      expect(stub.getCall(1).args[0].detail.value).to.equal(14);
    });
    cy.compareSnapshot({
      name: "complex_previous_page_button_clicked",
      testThreshold: setThresholdBasedOnEnv(0.038),
    });
  });

  it("should emit the correct page value when the 'first page' button is clicked for simple pagination", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination pages={15} />
      </div>
    );
    cy.get("ic-pagination").invoke(
      "on",
      "icPageChange",
      cy.stub().as("icPageChanged")
    );
    cy.findShadowEl(PAGINATION_SELECTOR, LAST_PAGE_SELECTOR).click();
    cy.findShadowEl(PAGINATION_SELECTOR, FIRST_PAGE_SELECTOR).click();
    cy.get("@icPageChanged").should((stub) => {
      expect(stub.getCall(0).args[0].detail.value).to.equal(15);
      expect(stub.getCall(1).args[0].detail.value).to.equal(1);
    });
    cy.compareSnapshot({
      name: "simple_first_page_button_clicked",
      testThreshold: setThresholdBasedOnEnv(0.035),
    });
  });

  it("should emit the correct page value when the 'first page' button is clicked for complex pagination", () => {
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
    cy.get("@icPageChanged").should((stub) => {
      expect(stub.getCall(0).args[0].detail.value).to.equal(15);
    });
    cy.findShadowEl(PAGINATION_SELECTOR, FIRST_PAGE_SELECTOR).click();
    cy.get("@icPageChanged").should((stub) => {
      expect(stub.getCall(1).args[0].detail.value).to.equal(1);
    });
    cy.compareSnapshot({
      name: "complex_first_page_button_clicked",
      testThreshold: setThresholdBasedOnEnv(0.035),
    });
  });

  it(" should emit the correct value when adjacent and boundary count set, middle-state navigated to and page '7' clicked for complex pagination", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination
          pages={15}
          type="complex"
          adjacentCount={1}
          boundaryCount={1}
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
    cy.get("@icPageChanged").should((stub) => {
      expect(stub.getCall(0).args[0].detail.value).to.equal(2);
    });

    cy.findShadowEl(PAGINATION_SELECTOR, "#pagination-item-7").click();
    cy.get("@icPageChanged").should((stub) => {
      expect(stub.getCall(1).args[0].detail.value).to.equal(3);
    });
    cy.compareSnapshot({
      name: "complex_middle_state_page_7",
      testThreshold: setThresholdBasedOnEnv(0.02),
    });
  });

  it("should not navigate to 'page 8' when the middle state is reached and the adjacent-count for complex pagination", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcPagination
          pages={15}
          type="complex"
          adjacentCount={1}
          boundaryCount={1}
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
    cy.get("@icPageChanged").should((stub) => {
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
    cy.get("@icPageChanged").should((stub) => {
      expect(stub.getCall(0).args[0].detail.value).to.equal(2);
      expect(stub.getCall(1).args[0].detail.value).to.equal(15);
      expect(stub.getCall(2).args[0].detail.value).to.equal(13);
    });
  });
});
