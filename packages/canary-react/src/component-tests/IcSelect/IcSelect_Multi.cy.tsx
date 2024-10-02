/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />
import "./IcSelect.css";
import React from "react";
import { mount } from "cypress/react";
import {
  MultiSelectDefault,
  MultiSelectDisabledOptions,
  MultiSelectGroups,
  MultiSelectLarge,
  MultiSelectReadOnly,
  MultiSelectSmall,
  MultiSelectWithAllValues,
  MultiSelectWithDescriptions,
  MultiSelectDefaultValue,
  MultiSelectWithClearButton,
} from "./IcSelectTestData";
import { setThresholdBasedOnEnv } from "../../../../react/cypress/utils/helpers";

import {
  HAVE_ATTR,
  HAVE_BEEN_CALLED_ONCE,
  HAVE_FOCUS,
  NOT_EXIST,
} from "@ukic/react/src/component-tests/utils/constants";
import {
  ARIA_SELECTED,
  DATA_VALUE_CAP,
  IC_INPUT_CONTAINER,
} from "@ukic/react/src/component-tests/IcSelect/IcSelectConstants";

const MULTI_SELECT = "ic-select-with-multi";
const MULTI_SELECT_MENU = "ic-menu-with-multi ul";
const DROPDOWN_ARROW = "button.select-input";
const SELECT_ALL_BUTTON = "ic-menu-with-multi .select-all-button";

const DEFAULT_TEST_THRESHOLD = 0.056;
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
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.026),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with default value set", () => {
    mount(<MultiSelectDefaultValue />);

    cy.checkHydrated(MULTI_SELECT);
    cy.findShadowEl(MULTI_SELECT, DROPDOWN_ARROW).focus().click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.compareSnapshot({
      name: "multi-select-default-value",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.028),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render options with descriptions", () => {
    mount(<MultiSelectWithDescriptions />);

    cy.checkHydrated(MULTI_SELECT);
    cy.findShadowEl(MULTI_SELECT, DROPDOWN_ARROW).focus().click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.compareSnapshot({
      name: "multi-select-descriptions",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render small", () => {
    mount(<MultiSelectSmall />);

    cy.checkHydrated(MULTI_SELECT);
    cy.findShadowEl(MULTI_SELECT, DROPDOWN_ARROW).focus().click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.compareSnapshot({
      name: "multi-select-small",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render large", () => {
    mount(<MultiSelectLarge />);

    cy.checkHydrated(MULTI_SELECT);
    cy.findShadowEl(MULTI_SELECT, DROPDOWN_ARROW).focus().click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.compareSnapshot({
      name: "multi-select-large",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with disabled options", () => {
    mount(<MultiSelectDisabledOptions />);

    cy.checkHydrated(MULTI_SELECT);
    cy.findShadowEl(MULTI_SELECT, DROPDOWN_ARROW).focus().click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.compareSnapshot({
      name: "multi-select-disabled-options",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.015),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render as read-only", () => {
    mount(<MultiSelectReadOnly />);

    cy.checkHydrated(MULTI_SELECT);
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "multi-select-read-only",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render options as groups", () => {
    mount(<MultiSelectGroups />);

    cy.checkHydrated(MULTI_SELECT);
    cy.findShadowEl(MULTI_SELECT, DROPDOWN_ARROW).focus().click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.compareSnapshot({
      name: "multi-select-groups",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.015),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should emit icChange and icOptionSelect when an option is selected", () => {
    mount(<MultiSelectDefault />);

    cy.checkHydrated(MULTI_SELECT);
    cy.get(MULTI_SELECT).invoke("on", "icChange", cy.stub().as("icChange"));
    cy.get(MULTI_SELECT).invoke(
      "on",
      "icOptionSelect",
      cy.stub().as("icOptionSelect")
    );

    cy.findShadowEl(MULTI_SELECT, DROPDOWN_ARROW)
      .click()
      .realPress("ArrowDown")
      .realPress("Enter");

    cy.get("@icChange").should(HAVE_BEEN_CALLED_ONCE);
    cy.get("@icChange").should((stub) => {
      expect(stub.getCall(0).args[0].detail.value.length).to.equal(1);
      expect(stub.getCall(0).args[0].detail.value[0]).to.equal("Cap");
    });
    cy.get("@icOptionSelect").should(HAVE_BEEN_CALLED_ONCE);
    cy.get("@icOptionSelect").should((stub) => {
      expect(stub.getCall(0).args[0].detail.value).to.equal("Cap");
    });
  });

  it("should deselect an option correctly - emit icChange and icOptionDeselect, and remove check icon and aria-selected", () => {
    mount(<MultiSelectDefault />);

    cy.checkHydrated(MULTI_SELECT);
    cy.get(MULTI_SELECT).invoke("on", "icChange", cy.stub().as("icChange"));
    cy.get(MULTI_SELECT).invoke(
      "on",
      "icOptionDeselect",
      cy.stub().as("icOptionDeselect")
    );

    cy.findShadowEl(MULTI_SELECT, DROPDOWN_ARROW)
      .click()
      .realPress("ArrowDown")
      .realPress("Enter");

    cy.findShadowEl(MULTI_SELECT, DATA_VALUE_CAP).should(
      HAVE_ATTR,
      ARIA_SELECTED,
      "true"
    );
    cy.findShadowEl(MULTI_SELECT, `${DATA_VALUE_CAP} .check-icon`).should(
      "exist"
    );

    cy.realPress("ArrowDown").realPress("Enter");

    cy.findShadowEl(MULTI_SELECT, DATA_VALUE_CAP).should(
      HAVE_ATTR,
      ARIA_SELECTED,
      "false"
    );
    cy.findShadowEl(MULTI_SELECT, `${DATA_VALUE_CAP} .check-icon`).should(
      NOT_EXIST
    );
    cy.get("@icChange").should((stub) => {
      expect(stub.getCall(1).args[0].detail.value).to.equal(null);
    });
    cy.get("@icOptionDeselect").should(HAVE_BEEN_CALLED_ONCE);
    cy.get("@icOptionDeselect").should((stub) => {
      expect(stub.getCall(0).args[0].detail.value).to.equal("Cap");
    });
  });

  it("should select multiple when shift and arrow down pressed", () => {
    mount(<MultiSelectDefault />);

    cy.checkHydrated(MULTI_SELECT);
    cy.findShadowEl(MULTI_SELECT, DROPDOWN_ARROW)
      .focus()
      .click()
      .realPress("ArrowDown")
      .realPress(["Shift", "ArrowDown"]);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "multi-select-shift-arrow-down",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.028),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should select multiple when shift and arrow up pressed", () => {
    mount(<MultiSelectDefault />);

    cy.checkHydrated(MULTI_SELECT);
    cy.findShadowEl(MULTI_SELECT, DROPDOWN_ARROW)
      .focus()
      .click()
      .realPress("ArrowUp")
      .realPress(["Shift", "ArrowUp"]);

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.compareSnapshot({
      name: "multi-select-shift-arrow-up",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.03),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should select all when shift+ctrl+end pressed", () => {
    mount(<MultiSelectDefault />);

    cy.checkHydrated(MULTI_SELECT);
    cy.findShadowEl(MULTI_SELECT, DROPDOWN_ARROW)
      .focus()
      .realPress(["Shift", "ArrowDown"])
      .realPress(["Shift", "Control", "End"]);
    //menu currently closes (in cypress only) so need to reopen to check selections
    cy.findShadowEl(MULTI_SELECT, DROPDOWN_ARROW).focus().click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.compareSnapshot({
      name: "multi-select-shift-ctrl-end",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.032),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should select all when shift+ctrl+home pressed", () => {
    mount(<MultiSelectDefault />);

    cy.checkHydrated(MULTI_SELECT);
    cy.findShadowEl(MULTI_SELECT, DROPDOWN_ARROW)
      .focus()
      .realPress(["Shift", "ArrowUp"])
      .realPress(["Shift", "Control", "Home"]);
    //menu currently closes (in cypress only) so need to reopen to check selections
    cy.findShadowEl(MULTI_SELECT, DROPDOWN_ARROW).focus().click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.compareSnapshot({
      name: "multi-select-shift-ctrl-home",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.032),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should select multiple when pressing shift and clicking", () => {
    mount(<MultiSelectDefault />);

    cy.checkHydrated(MULTI_SELECT);
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
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.034),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should select multiple when pressing shift and clicking - from bottom item", () => {
    mount(<MultiSelectDefault />);

    cy.checkHydrated(MULTI_SELECT);
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
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.036),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should focus select all button", () => {
    mount(<MultiSelectDefault />);

    cy.checkHydrated(MULTI_SELECT);
    cy.findShadowEl(MULTI_SELECT, DROPDOWN_ARROW)
      .focus()
      .click()
      .realPress("Tab");

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.compareSnapshot({
      name: "multi-select-select-all-button-focused",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.026),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should focus clear button", () => {
    mount(<MultiSelectWithClearButton />);

    cy.checkHydrated(MULTI_SELECT);
    cy.findShadowEl(MULTI_SELECT, DROPDOWN_ARROW)
      .focus()
      .click()
      .click()
      .realPress("Tab");

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.compareSnapshot({
      name: "multi-select-clear-button-focused",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.002),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });
});

describe("IcSelect - Multi visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  after(() => {
    cy.disableForcedColors();
  });

  it("should render with no options selected in high contrast mode", () => {
    mount(<MultiSelectDefault />);

    cy.checkHydrated(MULTI_SELECT);
    cy.findShadowEl(MULTI_SELECT, DROPDOWN_ARROW).focus().click().wait(500);

    cy.compareSnapshot({
      name: "default-multi-select-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with options selected in high contrast mode", () => {
    mount(<MultiSelectDefault />);

    cy.checkHydrated(MULTI_SELECT);
    cy.findShadowEl(MULTI_SELECT, DROPDOWN_ARROW)
      .focus()
      .type("{shift}", { release: false })
      .type("{upArrow}");
    cy.findShadowEl(MULTI_SELECT, "li[data-label='Filter']").click({
      shiftKey: true,
    });

    cy.wait(300).compareSnapshot({
      name: "multi-select-partially-selected-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.029),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with option highlighted in high contrast mode", () => {
    mount(<MultiSelectDefault />);

    cy.checkHydrated(MULTI_SELECT);
    cy.findShadowEl(MULTI_SELECT, DROPDOWN_ARROW)
      .focus()
      .click()
      .realPress("ArrowUp")
      .realPress(["Shift", "ArrowUp"]);

    cy.wait(300).compareSnapshot({
      name: "multi-select-option-highlighted-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.025),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should focus select all button in high contrast mode", () => {
    mount(<MultiSelectDefault />);

    cy.checkHydrated(MULTI_SELECT);
    cy.findShadowEl(MULTI_SELECT, DROPDOWN_ARROW)
      .focus()
      .click()
      .realPress("Tab");

    cy.wait(300).compareSnapshot({
      name: "multi-select-select-all-button-focused-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should focus clear button in high contrast mode", () => {
    mount(<MultiSelectWithClearButton />);

    cy.checkHydrated(MULTI_SELECT);
    cy.findShadowEl(MULTI_SELECT, DROPDOWN_ARROW)
      .focus()
      .click()
      .click()
      .realPress("Tab");

    cy.wait(300).compareSnapshot({
      name: "multi-select-clear-button-focused-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should move focus to select all button and back again", () => {
    mount(<MultiSelectDefault />);

    cy.checkHydrated(MULTI_SELECT);
    cy.findShadowEl(MULTI_SELECT, DROPDOWN_ARROW).click().realPress("Tab");

    cy.findShadowEl(MULTI_SELECT, SELECT_ALL_BUTTON).should(HAVE_FOCUS);

    cy.realPress(["Shift", "Tab"]);

    cy.findShadowEl(MULTI_SELECT, MULTI_SELECT_MENU).should(HAVE_FOCUS);
  });

  it("should move focus from option (i.e. when option is highlighted) to select all button", () => {
    mount(<MultiSelectDefault />);

    cy.checkHydrated(MULTI_SELECT);
    cy.findShadowEl(MULTI_SELECT, DROPDOWN_ARROW)
      .click()
      .realPress("ArrowDown");

    cy.findShadowEl(MULTI_SELECT, DATA_VALUE_CAP).should(HAVE_FOCUS);

    cy.realPress("Tab");

    cy.findShadowEl(MULTI_SELECT, SELECT_ALL_BUTTON).should(HAVE_FOCUS);
  });

  it("should emit icChange when the select all button is pressed, and emit icOptionSelect only for unselected options", () => {
    mount(<MultiSelectDefaultValue />);

    cy.checkHydrated(MULTI_SELECT);
    cy.get(MULTI_SELECT).invoke("on", "icChange", cy.stub().as("icChange"));
    cy.get(MULTI_SELECT).invoke(
      "on",
      "icOptionSelect",
      cy.stub().as("icOptionSelect")
    );

    cy.findShadowEl(MULTI_SELECT, DROPDOWN_ARROW)
      .click()
      .realPress("Tab")
      .realPress("Enter");

    cy.get("@icChange").should((stub) => {
      expect(stub.getCall(0).args[0].detail.value.length).to.equal(7);
    });
    cy.get("@icOptionSelect").should("have.callCount", 4);
  });

  it("should emit icChange when the clear all button is pressed, and emit icOptionDeselect for all options", () => {
    mount(<MultiSelectWithAllValues />);

    cy.checkHydrated(MULTI_SELECT);
    cy.get(MULTI_SELECT).invoke("on", "icChange", cy.stub().as("icChange"));
    cy.get(MULTI_SELECT).invoke(
      "on",
      "icOptionDeselect",
      cy.stub().as("icOptionDeselect")
    );

    cy.findShadowEl(MULTI_SELECT, DROPDOWN_ARROW)
      .click()
      .realPress("Tab")
      .realPress("Enter");

    cy.get("@icChange").should((stub) => {
      expect(stub.getCall(0).args[0].detail.value).to.equal(null);
    });
    cy.get("@icOptionDeselect").should("have.callCount", 7);
  });

  it("should select and clear all options on Ctrl+A", () => {
    mount(<MultiSelectDefault />);

    cy.checkHydrated(MULTI_SELECT);
    cy.get(MULTI_SELECT).invoke("on", "icChange", cy.stub().as("icChange"));
    cy.get(MULTI_SELECT).invoke(
      "on",
      "icOptionSelect",
      cy.stub().as("icOptionSelect")
    );
    cy.get(MULTI_SELECT).invoke(
      "on",
      "icOptionDeselect",
      cy.stub().as("icOptionDeselect")
    );

    cy.findShadowEl(MULTI_SELECT, DROPDOWN_ARROW).click().type("{ctrl}a");

    cy.get("@icChange").should(HAVE_BEEN_CALLED_ONCE);
    cy.get("@icOptionSelect").should("have.callCount", 7);

    cy.findShadowEl(MULTI_SELECT, IC_INPUT_CONTAINER).type("{ctrl}a");

    cy.get("@icChange").should((stub) => {
      expect(stub.getCall(1).args[0].detail.value).to.equal(null);
    });
    cy.get("@icOptionDeselect").should("have.callCount", 7);
  });
});
