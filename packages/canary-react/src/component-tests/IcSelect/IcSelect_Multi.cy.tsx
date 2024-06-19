/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />
import "./IcSelect.css";
import React from "react";
import { mount } from "cypress/react";
import { MultiSelectDefault } from "./IcSelectTestData";
import { setThresholdBasedOnEnv } from "../../../../react/cypress/utils/helpers";

const MULTI_SELECT = "ic-select-with-multi";
const DROPDOWN_ARROW = "button.select-input";

const DEFAULT_TEST_THRESHOLD = 0.076;
const SCREENSHOT_DELAY = 300;

describe("IcSelect - Multi", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render default multi select variant", () => {
    mount(<MultiSelectDefault />);

    cy.checkHydrated(MULTI_SELECT);

    cy.findShadowEl(MULTI_SELECT, DROPDOWN_ARROW).focus().click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.compareSnapshot({
      name: "default-multi-select",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.006),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should select multiple when shift and arrow down pressed", () => {
    mount(<MultiSelectDefault />);

    cy.findShadowEl(MULTI_SELECT, DROPDOWN_ARROW)
      .focus()
      .click()
      .realPress("ArrowDown")
      .realPress(["Shift", "ArrowDown"]);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "multi-select-shift-arrow-down",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should select multiple when shift and arrow up pressed", () => {
    mount(<MultiSelectDefault />);

    cy.findShadowEl(MULTI_SELECT, DROPDOWN_ARROW)
      .focus()
      .click()
      .realPress("ArrowUp")
      .realPress(["Shift", "ArrowUp"]);

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.compareSnapshot({
      name: "multi-select-shift-arrow-up",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should select all when shift+ctrl+end pressed", () => {
    mount(<MultiSelectDefault />);

    cy.findShadowEl(MULTI_SELECT, DROPDOWN_ARROW)
      .focus()
      .realPress(["Shift", "ArrowDown"])
      .realPress(["Shift", "Control", "End"]);
    //menu currently closes (in cypress only) so need to reopen to check selections
    cy.findShadowEl(MULTI_SELECT, DROPDOWN_ARROW).focus().click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.compareSnapshot({
      name: "multi-select-shift-ctrl-end",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.021),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should select all when shift+ctrl+home pressed", () => {
    mount(<MultiSelectDefault />);

    cy.findShadowEl(MULTI_SELECT, DROPDOWN_ARROW)
      .focus()
      .realPress(["Shift", "ArrowUp"])
      .realPress(["Shift", "Control", "Home"]);
    //menu currently closes (in cypress only) so need to reopen to check selections
    cy.findShadowEl(MULTI_SELECT, DROPDOWN_ARROW).focus().click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.compareSnapshot({
      name: "multi-select-shift-ctrl-home",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.021),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should select multiple when pressing shift and clicking", () => {
    mount(<MultiSelectDefault />);

    cy.findShadowEl(MULTI_SELECT, DROPDOWN_ARROW)
      .focus()
      .type("{shift}", { release: false })
      .type("{downArrow}");
    cy.findShadowEl(MULTI_SELECT, "li[data-label='Filter']").click({
      shiftKey: true,
    });

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.compareSnapshot({
      name: "multi-select-shift-click",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should select multiple when pressing shift and clicking - from bottom item", () => {
    mount(<MultiSelectDefault />);

    cy.findShadowEl(MULTI_SELECT, DROPDOWN_ARROW)
      .focus()
      .type("{shift}", { release: false })
      .type("{upArrow}");
    cy.findShadowEl(MULTI_SELECT, "li[data-label='Filter']").click({
      shiftKey: true,
    });

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.compareSnapshot({
      name: "multi-select-shift-click-from-bottom",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });
});
