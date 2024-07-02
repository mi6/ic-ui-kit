/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
// import { IcToggleButtonGroup, IcToggleButton } from "../../components";
import { CYPRESS_AXE_OPTIONS } from "../../../cypress/utils/a11y";
import { mount } from "cypress/react";
import {
  ToggleGroupCustomWidth,
  ToggleGroupDark,
  ToggleGroupDisabled,
  ToggleGroupFullWidth,
  ToggleGroupIconLeft,
  ToggleGroupIconOnly,
  ToggleGroupIconRight,
  ToggleGroupIconTop,
  ToggleGroupLarge,
  ToggleGroupLargeLabel,
  ToggleGroupLight,
  ToggleGroupLoading,
  ToggleGroupLoadingDark,
  ToggleGroupLoadingLight,
  ToggleGroupMulti,
  ToggleGroupSingle,
  ToggleGroupSmall,
} from "./IcToggleButtonGroupTestData";
import {
  HAVE_ATTR,
  HAVE_FOCUS,
  NOT_HAVE_ATTR,
  NOT_HAVE_BEEN_CALLED,
} from "../utils/constants";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const DEFAULT_TEST_THRESHOLD = 0.023;
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
    it("should check single/manual on only one toggle", () => {
      mount(<ToggleGroupSingle />);
      cy.checkHydrated(IC_TOGGLE_BUTTON_GROUP);

      cy.get(IC_TOGGLE_BUTTON_GROUP).focus();
      getToggle(0).should(HAVE_FOCUS);
      getToggle(2).click();
      getToggle(0).should(NOT_HAVE_ATTR, "checked");
      getToggle(2).should(HAVE_ATTR, "checked");
    });
    it("should check multi on several toggles", () => {
      mount(<ToggleGroupMulti />);
      cy.checkHydrated(IC_TOGGLE_BUTTON_GROUP);

      cy.get(IC_TOGGLE_BUTTON_GROUP).focus();
      getToggle(0).should(NOT_HAVE_ATTR, "checked");
      getToggle(2).click();
      getToggle(2).should(HAVE_ATTR, "checked");
      getToggle(1).click();
      getToggle(1).should(HAVE_ATTR, "checked");
    });
    it("should focus parent but not interact with toggle when disabled", () => {
      cy.spy(window.console, "log").as("spyWinConsoleLog");
      mount(<ToggleGroupDisabled />);
      cy.checkHydrated(IC_TOGGLE_BUTTON_GROUP);

      cy.get(IC_TOGGLE_BUTTON_GROUP).focus();
      getToggle(0).should(NOT_HAVE_ATTR, "checked");
      getToggle(1).click({ force: true });
      cy.get(WIN_CONSOLE_SPY).should(NOT_HAVE_BEEN_CALLED);
    });
    it("should focus toggle but not check with toggle when loading", () => {
      cy.spy(window.console, "log").as("spyWinConsoleLog");
      mount(<ToggleGroupLoading />);
      cy.checkHydrated(IC_TOGGLE_BUTTON_GROUP);

      cy.get(IC_TOGGLE_BUTTON_GROUP).focus();
      getToggle(0).should(NOT_HAVE_ATTR, "checked");
      getToggle(1).click({ force: true });
      cy.get(WIN_CONSOLE_SPY).should(NOT_HAVE_BEEN_CALLED);
    });
    it("should tab through toggles and check focus and selection state", () => {
      mount(<ToggleGroupSingle />);
      cy.checkHydrated(IC_TOGGLE_BUTTON_GROUP);

      getToggle(2).focus().realPress(["Shift", "Tab"]);
      cy.get(IC_TOGGLE_BUTTON_GROUP).should(HAVE_FOCUS);
    });
  });
  describe("screenshots", () => {
    beforeEach(() => {
      cy.injectAxe();
      cy.viewport(500, 500);
    });

    afterEach(() => {
      cy.task("generateReport");
    });

    it("should render default", () => {
      mount(<ToggleGroupSingle />);

      getToggle(0).click();

      cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
      cy.compareSnapshot({
        name: "default",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
      });
    });

    it("should render multiple checked", () => {
      mount(<ToggleGroupMulti />);

      getToggle(1).click();
      getToggle(0).click();

      cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
      cy.compareSnapshot({
        name: "multiple",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.018),
      });
    });

    it("should render small", () => {
      mount(<ToggleGroupSmall />);

      getToggle(0).click();

      cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
      cy.compareSnapshot({
        name: "small",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
      });
    });

    it("should render large", () => {
      mount(<ToggleGroupLarge />);

      getToggle(0).click();

      cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
      cy.compareSnapshot({
        name: "large",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
      });
    });

    it("should render full-width", () => {
      mount(<ToggleGroupFullWidth />);

      getToggle(0).click();

      cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
      cy.compareSnapshot({
        name: "full-width",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.021),
      });
    });

    it("should render custom width", () => {
      mount(<ToggleGroupCustomWidth />);

      getToggle(0).click();

      cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
      cy.compareSnapshot({
        name: "custom-width",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
      });
    });

    it("should render toggle with large label", () => {
      mount(<ToggleGroupLargeLabel />);

      getToggle(0).click();

      cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
      cy.compareSnapshot({
        name: "large-label",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.025),
      });
    });

    it("should render light", () => {
      mount(
        <div style={{ backgroundColor: "black", padding: "1rem" }}>
          <ToggleGroupLight />
        </div>
      );

      getToggle(0).click();

      cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
      cy.compareSnapshot({
        name: "light",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.025),
      });
    });

    it("should render dark", () => {
      mount(<ToggleGroupDark />);

      getToggle(0).click();

      cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
      cy.compareSnapshot({
        name: "dark",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.024),
      });
    });

    it("should render disabled", () => {
      mount(<ToggleGroupDisabled />);

      cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
      cy.compareSnapshot({
        name: "disabled",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
      });
    });

    it("should render loading", () => {
      mount(<ToggleGroupLoading />);

      cy.checkA11yWithWait(undefined, 200, TOGGLE_BUTTON_AXE_OPTIONS);
      cy.compareSnapshot({
        name: "loading",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
        delay: 500,
      });
    });

    it("should render loading light", () => {
      mount(
        <div style={{ backgroundColor: "black", padding: "1rem" }}>
          <ToggleGroupLoadingLight />
        </div>
      );

      cy.checkA11yWithWait(undefined, 200, TOGGLE_BUTTON_AXE_OPTIONS);
      cy.compareSnapshot({
        name: "loading-light",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.0),
        delay: 500,
      });
    });

    it("should render loading dark", () => {
      mount(<ToggleGroupLoadingDark />);

      cy.checkA11yWithWait(undefined, 200, TOGGLE_BUTTON_AXE_OPTIONS);
      cy.compareSnapshot({
        name: "loading-dark",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.0),
        delay: 500,
      });
    });

    it("should render icons", () => {
      mount(
        <div>
          <ToggleGroupIconRight />
          <ToggleGroupIconLeft />
          <ToggleGroupIconTop />
        </div>
      );

      getToggle(0).click();

      cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
      cy.compareSnapshot({
        name: "icons",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.051),
        delay: 1000,
      });
    });

    it("should render icon only", () => {
      mount(
        <div>
          <ToggleGroupIconOnly />
        </div>
      );

      getToggle(0).click();

      cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    });
  });
});

describe("IcToggleButtonGroup visual regression in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  after(() => {
    cy.disableForcedColors();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("renders a toggle-button group with first button checked and second button focussed", () => {
    mount(<ToggleGroupSingle />);
    const toggle = getToggle(0);
    toggle.click();
    cy.realPress("ArrowDown");
    getToggle(1).should(HAVE_FOCUS).wait(200);

    cy.compareSnapshot({
      name: "focused-toggle-checked-toggle-group-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.036),
      delay: 200,
    });
  });

  it("renders disabled", () => {
    mount(<ToggleGroupDisabled />);
    cy.wait(100);

    cy.compareSnapshot({
      name: "disabled-toggle-group-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.012),
    });
  });
});
