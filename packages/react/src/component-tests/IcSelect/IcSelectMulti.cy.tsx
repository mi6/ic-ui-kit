/// <reference types="Cypress" />

import { mount } from "@cypress/react";
import React from "react";
import {
  HAVE_ATTR,
  HAVE_BEEN_CALLED_ONCE,
  HAVE_CALL_COUNT,
  HAVE_FOCUS,
  NOT_EXIST,
} from "../utils/constants";
import {
  ARIA_SELECTED,
  DATA_LABEL_CAPPUCCINO,
  DATA_VALUE_ESPRESSO,
  IC_INPUT_CONTAINER,
  IC_MENU_UL,
  IC_SELECT,
  OPTION_DESELECT_STUB,
  OPTION_SELECT_STUB,
} from "./IcSelectConstants";
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
  DarkThemeMulti,
  NotMultiSelect,
} from "./IcSelectTestData";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const DROPDOWN_ARROW = "button.select-input";
const SELECT_ALL_BUTTON = "ic-menu .select-all-button";

const DEFAULT_TEST_THRESHOLD = 0.04;
const SCREENSHOT_DELAY = 300;

describe("IcSelect multi end-to-end, visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render default multi select variant", () => {
    mount(<MultiSelectDefault />);

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).focus().click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.compareSnapshot({
      name: "/default-multi-select",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with default value set", () => {
    mount(<MultiSelectDefaultValue />);

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).focus().click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.compareSnapshot({
      name: "/multi-select-default-value",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.03),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render options with descriptions", () => {
    mount(<MultiSelectWithDescriptions />);

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).focus().click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.compareSnapshot({
      name: "/multi-select-descriptions",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.04),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render small", () => {
    mount(<MultiSelectSmall />);

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).focus().click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.compareSnapshot({
      name: "/multi-select-small",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render large", () => {
    mount(<MultiSelectLarge />);

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).focus().click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.compareSnapshot({
      name: "/multi-select-large",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with disabled options", () => {
    mount(<MultiSelectDisabledOptions />);

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).focus().click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.compareSnapshot({
      name: "/multi-select-disabled-options",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.01),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render as read-only", () => {
    mount(<MultiSelectReadOnly />);

    cy.checkHydrated(IC_SELECT);
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/multi-select-read-only",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render options as groups", () => {
    mount(<MultiSelectGroups />);

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).focus().click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.compareSnapshot({
      name: "/multi-select-groups",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.015),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should emit icChange and icOptionSelect when an option is selected", () => {
    mount(<MultiSelectDefault />);

    cy.checkHydrated(IC_SELECT);
    cy.get(IC_SELECT).invoke("on", "icChange", cy.stub().as("icChange"));
    cy.get(IC_SELECT).invoke(
      "on",
      "icOptionSelect",
      cy.stub().as("icOptionSelect")
    );

    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).click();
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).realPress("ArrowDown");
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).realPress("Enter");

    cy.get("@icChange").should(HAVE_BEEN_CALLED_ONCE);
    cy.get("@icChange").should((stub) => {
      expect(stub.getCall(0).args[0].detail.value.length).to.equal(1);
      expect(stub.getCall(0).args[0].detail.value[0]).to.equal("espresso");
    });
    cy.get(OPTION_SELECT_STUB).should(HAVE_BEEN_CALLED_ONCE);
    cy.get(OPTION_SELECT_STUB).should((stub) => {
      expect(stub.getCall(0).args[0].detail.value).to.equal("espresso");
    });
  });

  it("should deselect an option correctly - emit icChange and icOptionDeselect, and remove check icon and aria-selected", () => {
    mount(<MultiSelectDefault />);

    cy.checkHydrated(IC_SELECT);
    cy.get(IC_SELECT).invoke("on", "icChange", cy.stub().as("icChange"));
    cy.get(IC_SELECT).invoke(
      "on",
      "icOptionDeselect",
      cy.stub().as("icOptionDeselect")
    );

    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).click();
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).realPress("ArrowDown");
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).realPress("Enter");

    cy.findShadowEl(IC_SELECT, DATA_VALUE_ESPRESSO).should(
      HAVE_ATTR,
      ARIA_SELECTED,
      "true"
    );
    cy.findShadowEl(IC_SELECT, `${DATA_VALUE_ESPRESSO} .check-icon`);

    cy.realPress("ArrowDown");
    cy.realPress("Enter");

    cy.findShadowEl(IC_SELECT, DATA_VALUE_ESPRESSO).should(
      HAVE_ATTR,
      ARIA_SELECTED,
      "false"
    );
    cy.findShadowEl(IC_SELECT, `${DATA_VALUE_ESPRESSO} .check-icon`).should(
      NOT_EXIST
    );
    cy.get("@icChange").should((stub) => {
      expect(stub.getCall(1).args[0].detail.value).to.equal(null);
    });
    cy.get(OPTION_DESELECT_STUB).should(HAVE_BEEN_CALLED_ONCE);
    cy.get(OPTION_DESELECT_STUB).should((stub) => {
      expect(stub.getCall(0).args[0].detail.value).to.equal("espresso");
    });
  });

  it("should select multiple when shift and arrow down pressed", () => {
    mount(<MultiSelectDefault />);

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).focus().click();
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).realPress("ArrowDown");
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).realPress([
      "Shift",
      "ArrowDown",
    ]);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/multi-select-shift-arrow-down",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.029),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should select multiple when shift and arrow up pressed", () => {
    mount(<MultiSelectDefault />);

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).focus().click();
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).realPress("ArrowUp");
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).realPress(["Shift", "ArrowUp"]);

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.compareSnapshot({
      name: "/multi-select-shift-arrow-up",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.026),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should select all when shift+ctrl+end pressed", () => {
    mount(<MultiSelectDefault />);

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW)
      .focus()
      .realPress(["Shift", "ArrowDown"]);
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).realPress([
      "Shift",
      "Control",
      "End",
    ]);
    //menu currently closes (in cypress only) so need to reopen to check selections
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).focus().click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.compareSnapshot({
      name: "/multi-select-shift-ctrl-end",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.03),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should select all when shift+ctrl+home pressed", () => {
    mount(<MultiSelectDefault />);

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW)
      .focus()
      .realPress(["Shift", "ArrowUp"]);
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).realPress([
      "Shift",
      "Control",
      "Home",
    ]);
    //menu currently closes (in cypress only) so need to reopen to check selections
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).focus().click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.compareSnapshot({
      name: "/multi-select-shift-ctrl-home",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.03),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should select multiple when pressing shift and clicking", () => {
    mount(<MultiSelectDefault />);

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW)
      .focus()
      .type("{shift}", { release: false });
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).type("{downArrow}");
    cy.findShadowEl(IC_SELECT, `li${DATA_LABEL_CAPPUCCINO}`).click({
      shiftKey: true,
    });

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.compareSnapshot({
      name: "/multi-select-shift-click",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.03),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should select multiple when pressing shift and clicking - from bottom item", () => {
    mount(<MultiSelectDefault />);

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW)
      .focus()
      .type("{shift}", { release: false });
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).type("{upArrow}");
    cy.findShadowEl(IC_SELECT, `li${DATA_LABEL_CAPPUCCINO}`).click({
      shiftKey: true,
    });

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.compareSnapshot({
      name: "/multi-select-shift-click-from-bottom",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.028),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should focus select all button", () => {
    mount(<MultiSelectDefault />);

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).focus().click();
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).realPress("Tab");

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.compareSnapshot({
      name: "/multi-select-select-all-button-focused",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should focus clear button", () => {
    mount(<MultiSelectWithClearButton />);

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).focus().click();
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).click();
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).realPress("Tab");

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.compareSnapshot({
      name: "/multi-select-clear-button-focused",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.009),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render a single select when 'multiple' is false", () => {
    mount(<NotMultiSelect />);

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).focus().click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.wait(SCREENSHOT_DELAY);

    cy.compareSnapshot({
      name: "/multi-select-false",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.017),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render dark theme multi select variant", () => {
    mount(<DarkThemeMulti />);

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).focus().click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.wait(SCREENSHOT_DELAY);

    cy.compareSnapshot({
      name: "/dark-theme-multi-select",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.033),
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

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).focus().click();
    cy.wait(500);

    cy.compareSnapshot({
      name: "/default-multi-select-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.036),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with options selected in high contrast mode", () => {
    mount(<MultiSelectDefault />);

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW)
      .focus()
      .type("{shift}", { release: false });
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).type("{upArrow}");
    cy.findShadowEl(IC_SELECT, `li${DATA_LABEL_CAPPUCCINO}`).click({
      shiftKey: true,
    });

    cy.wait(300).compareSnapshot({
      name: "/multi-select-partially-selected-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.041),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with option highlighted in high contrast mode", () => {
    mount(<MultiSelectDefault />);

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).focus().click();
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).realPress("ArrowUp");
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).realPress(["Shift", "ArrowUp"]);

    cy.wait(300).compareSnapshot({
      name: "/multi-select-option-highlighted-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.036),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should focus select all button in high contrast mode", () => {
    mount(<MultiSelectDefault />);

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).focus().click();
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).realPress("Tab");

    cy.wait(300).compareSnapshot({
      name: "/multi-select-select-all-button-focused-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.036),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should focus clear button in high contrast mode", () => {
    mount(<MultiSelectWithClearButton />);

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).focus().click();
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).click();
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).realPress("Tab");

    cy.wait(300).compareSnapshot({
      name: "/multi-select-clear-button-focused-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
      delay: SCREENSHOT_DELAY,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should move focus to select all button and back again", () => {
    mount(<MultiSelectDefault />);

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).click();
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).realPress("Tab");

    cy.findShadowEl(IC_SELECT, SELECT_ALL_BUTTON).should(HAVE_FOCUS);

    cy.realPress(["Shift", "Tab"]);

    cy.findShadowEl(IC_SELECT, IC_MENU_UL).should(HAVE_FOCUS);
  });

  it("should move focus from option (i.e. when option is highlighted) to select all button", () => {
    mount(<MultiSelectDefault />);

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).click();
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).realPress("ArrowDown");

    cy.findShadowEl(IC_SELECT, DATA_VALUE_ESPRESSO).should(HAVE_FOCUS);

    cy.realPress("Tab");

    cy.findShadowEl(IC_SELECT, SELECT_ALL_BUTTON).should(HAVE_FOCUS);
  });

  it("should emit icChange when the select all button is pressed, and emit icOptionSelect only for unselected options", () => {
    mount(<MultiSelectDefaultValue />);

    cy.checkHydrated(IC_SELECT);
    cy.get(IC_SELECT).invoke("on", "icChange", cy.stub().as("icChange"));
    cy.get(IC_SELECT).invoke(
      "on",
      "icOptionSelect",
      cy.stub().as("icOptionSelect")
    );

    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).click();
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).realPress("Tab");
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).realPress("Enter");

    cy.get("@icChange").should((stub) => {
      expect(stub.getCall(0).args[0].detail.value.length).to.equal(6);
    });
    cy.get(OPTION_SELECT_STUB).should(HAVE_CALL_COUNT, 3);
  });

  it("should emit icChange and icClear when the clear all button is pressed, and emit icOptionDeselect for all options", () => {
    mount(<MultiSelectWithAllValues />);

    cy.checkHydrated(IC_SELECT);
    cy.get(IC_SELECT).invoke("on", "icChange", cy.stub().as("icChange"));
    cy.get(IC_SELECT).invoke("on", "icClear", cy.stub().as("icClear"));
    cy.get(IC_SELECT).invoke(
      "on",
      "icOptionDeselect",
      cy.stub().as("icOptionDeselect")
    );

    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).click();
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).realPress("Tab");
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).realPress("Enter");

    cy.get("@icChange").should((stub) => {
      expect(stub.getCall(0).args[0].detail.value).to.equal(null);
    });
    cy.get("@icClear").should(HAVE_BEEN_CALLED_ONCE);
    cy.get(OPTION_DESELECT_STUB).should(HAVE_CALL_COUNT, 6);
  });

  it("should select and clear all options on Ctrl+A", () => {
    mount(<MultiSelectDefault />);

    cy.checkHydrated(IC_SELECT);
    cy.get(IC_SELECT).invoke("on", "icChange", cy.stub().as("icChange"));
    cy.get(IC_SELECT).invoke(
      "on",
      "icOptionSelect",
      cy.stub().as("icOptionSelect")
    );
    cy.get(IC_SELECT).invoke(
      "on",
      "icOptionDeselect",
      cy.stub().as("icOptionDeselect")
    );

    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).click();
    cy.findShadowEl(IC_SELECT, DROPDOWN_ARROW).type("{ctrl}a");

    cy.get("@icChange").should(HAVE_BEEN_CALLED_ONCE);
    cy.get(OPTION_SELECT_STUB).should(HAVE_CALL_COUNT, 6);

    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type("{ctrl}a");

    cy.get("@icChange").should((stub) => {
      expect(stub.getCall(1).args[0].detail.value).to.equal(null);
    });
    cy.get(OPTION_DESELECT_STUB).should(HAVE_CALL_COUNT, 6);
  });
});
