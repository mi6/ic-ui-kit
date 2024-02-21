/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
// import { IcToggleButtonGroup, IcToggleButton } from "../../components";
import { CYPRESS_AXE_OPTIONS } from "../../../cypress/utils/a11y";
import { mount } from "cypress/react";
import * as test from "./IcToggleButtonGroupTestData";
import {
  HAVE_ATTR,
  NOT_HAVE_ATTR,
  NOT_HAVE_BEEN_CALLED,
} from "../utils/constants";

const DEFAULT_TEST_THRESHOLD = 0.02;
const IC_TOGGLE_BUTTON_GROUP = "ic-toggle-button-group";
const IC_TOGGLE_BUTTON = "ic-toggle-button";

const getToggle = (number: number) => {
  return cy.get(IC_TOGGLE_BUTTON_GROUP).find(IC_TOGGLE_BUTTON).eq(number);
};

/**
 * Justification for additional rule: in the browser this is
 * not reported as an issue by axe Devtools, but it upsets cypress
 */
const TOGGLE_BUTTON_AXE_OPTIONS = {
  rules: {
    ...CYPRESS_AXE_OPTIONS.rules,
    "nested-interactive": { enabled: false },
  },
};

const WIN_CONSOLE_SPY = "@spyWinConsoleLog";

describe("IcToggleButtonGroup", () => {
  describe("E2E", () => {
    it("Single/manual should check only one toggle", () => {
      mount(<test.ToggleGroupSingle />);
      cy.checkHydrated(IC_TOGGLE_BUTTON_GROUP);

      cy.get(IC_TOGGLE_BUTTON_GROUP).focus();
      getToggle(0).should(HAVE_ATTR, "toggle-checked");
      getToggle(2).click();
      getToggle(0).should(NOT_HAVE_ATTR, "toggle-checked");
      getToggle(2).should(HAVE_ATTR, "toggle-checked");
    });
    it("Multi should check several toggles", () => {
      mount(<test.ToggleGroupMulti />);
      cy.checkHydrated(IC_TOGGLE_BUTTON_GROUP);

      cy.get(IC_TOGGLE_BUTTON_GROUP).focus();
      getToggle(0).should(NOT_HAVE_ATTR, "toggle-checked");
      getToggle(2).click();
      getToggle(2).should(HAVE_ATTR, "toggle-checked");
      getToggle(1).click();
      getToggle(1).should(HAVE_ATTR, "toggle-checked");
    });
    it("should focus parent but not interact with toggle when disabled", () => {
      cy.spy(window.console, "log").as("spyWinConsoleLog");
      mount(<test.ToggleGroupDisabled />);
      cy.checkHydrated(IC_TOGGLE_BUTTON_GROUP);

      cy.get(IC_TOGGLE_BUTTON_GROUP).focus();
      getToggle(0).should(NOT_HAVE_ATTR, "toggle-checked");
      getToggle(1).click({ force: true });
      cy.get(WIN_CONSOLE_SPY).should(NOT_HAVE_BEEN_CALLED);
    });
    it("should focus toggle but not check with toggle when loading", () => {
      cy.spy(window.console, "log").as("spyWinConsoleLog");
      mount(<test.ToggleGroupLoading />);
      cy.checkHydrated(IC_TOGGLE_BUTTON_GROUP);

      cy.get(IC_TOGGLE_BUTTON_GROUP).focus();
      getToggle(0).should(NOT_HAVE_ATTR, "toggle-checked");
      getToggle(1).click({ force: true });
      cy.get(WIN_CONSOLE_SPY).should(NOT_HAVE_BEEN_CALLED);
    });
  });
  describe("screenshots", () => {
    beforeEach(() => {
      cy.injectAxe();
    });

    afterEach(() => {
      cy.task("generateReport");
    });

    it("renders default", () => {
      mount(<test.ToggleGroupSingle />);

      cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
      cy.compareSnapshot("default", DEFAULT_TEST_THRESHOLD);

      getToggle(0).click();
      cy.wait(200).compareSnapshot("default clicked", DEFAULT_TEST_THRESHOLD);
    });
    it("renders multiple checked", () => {
      mount(<ToggleGroupMulti />);

      getToggle(1).click();
      getToggle(0).click();
      cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
      cy.compareSnapshot({
        name: "multiple",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.03),
      });
    });
    it("renders small", () => {
      mount(<test.ToggleGroupSmall />);

      cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
      cy.compareSnapshot("small", DEFAULT_TEST_THRESHOLD);

      getToggle(0).click();
      cy.wait(200).compareSnapshot("small clicked", DEFAULT_TEST_THRESHOLD);
    });
    it("renders large", () => {
      mount(<test.ToggleGroupLarge />);

      cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
      cy.compareSnapshot("large", DEFAULT_TEST_THRESHOLD);

      getToggle(0).click();
      cy.wait(200).compareSnapshot("large clicked", DEFAULT_TEST_THRESHOLD);
    });
    it("renders light", () => {
      mount(
        <div style={{ backgroundColor: "black", padding: "1rem" }}>
          <test.ToggleGroupLight />
        </div>
      );

      cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
      cy.compareSnapshot("light", DEFAULT_TEST_THRESHOLD);

      getToggle(0).click();
      cy.wait(200).compareSnapshot("light clicked", DEFAULT_TEST_THRESHOLD);
    });
    it("renders dark", () => {
      mount(<test.ToggleGroupDark />);

      cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
      cy.compareSnapshot("dark", DEFAULT_TEST_THRESHOLD);

      getToggle(0).click();
      cy.wait(200).compareSnapshot("dark clicked", DEFAULT_TEST_THRESHOLD);
    });
    it("renders disabled", () => {
      mount(<test.ToggleGroupDisabled />);

      cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
      cy.compareSnapshot("disabled", DEFAULT_TEST_THRESHOLD);
    });
    it("renders full-width", () => {
      mount(<test.ToggleGroupFullWidth />);

      cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
      cy.compareSnapshot("full-width", DEFAULT_TEST_THRESHOLD);

      getToggle(0).click();
      cy.wait(200).compareSnapshot(
        "full-width clicked",
        DEFAULT_TEST_THRESHOLD
      );
    });
    it("renders icons", () => {
      mount(
        <div>
          <test.ToggleGroupIconOnly />
          <test.ToggleGroupIconRight />
          <test.ToggleGroupIconLeft />
          <test.ToggleGroupIconTop />
        </div>
      );

      cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
      cy.compareSnapshot("icons", DEFAULT_TEST_THRESHOLD);
    });
  });
});
