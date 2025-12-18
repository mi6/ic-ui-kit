/// <reference types="cypress" />

import React from "react";
import { mount } from "cypress/react";
import {
  Default,
  RadioOptionsEmptyInitial,
  RadioOptionsChanging,
  Controlled,
  Uncontrolled,
  Horizontal,
  HelperText,
  Disabled,
  DisabledGroup,
  Small,
  Validation,
  ConditionalStatic,
  ConditionalDynamic,
  Tabbable,
  TabbableSelected,
  ConditionalDynamicTextFieldValue,
  InAForm,
  ThemeDark,
  RadioGroupInAdditionalField,
  StaticChildRadioGroup,
  HelperTextSlot,
  SmallConditionalStatic,
  SmallConditionalDynamic,
} from "./IcRadioTestData";
import {
  HAVE_PROP,
  HAVE_VALUE,
  HAVE_FOCUS,
  HAVE_BEEN_CALLED_WITH,
  HAVE_CLASS,
  NOT_HAVE_CLASS,
  HAVE_ATTR,
  NOT_BE_VISIBLE,
  HAVE_BEEN_CALLED,
  BE_VISIBLE,
} from "../utils/constants";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";
import { CYPRESS_AXE_OPTIONS } from "../../../cypress/utils/a11y";

const RADIO_GROUP_SELECTOR = "ic-radio-group";
const RADIO_SELECTOR = "ic-radio-option";
const IC_BUTTON = "ic-button";
const BUTTON = "button";
const INPUT = "input";
const TEXT_FIELD_SELECTOR = "ic-text-field";
const CONTAINER_CLASS = ".radio-option-container";
const CONSOLE_LOG_SPY_ALIAS = "@spyWinConsoleLog";
const DEFAULT_TEST_THRESHOLD = 0.006;

const DISABLED_RADIO_AXE_OPTIONS = {
  rules: {
    ...CYPRESS_AXE_OPTIONS.rules,
    "color-contrast": { enabled: false },
  },
};

describe("IcRadio end-to-end tests", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render default IcRadio", () => {
    mount(<Default />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);
    cy.checkA11yWithWait();
  });

  it("should render no options initially and have selectable options on clicking update button", () => {
    mount(<RadioOptionsEmptyInitial />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);
    cy.clickOnButton(IC_BUTTON);

    cy.get(RADIO_SELECTOR).last().should(HAVE_VALUE, "valueName4");
    cy.findShadowEl(IC_BUTTON, BUTTON).focus();

    cy.realPress(["Shift", "Tab"]);
    cy.get(RADIO_SELECTOR).first().should(HAVE_PROP, "selected", false);
    cy.get(RADIO_SELECTOR).eq(1).should(HAVE_PROP, "selected", false);
    cy.get(RADIO_SELECTOR).eq(2).should(HAVE_PROP, "selected", false);
    cy.get(RADIO_SELECTOR).last().should(HAVE_PROP, "selected", false);

    cy.get(RADIO_SELECTOR).find(INPUT).first().should(HAVE_FOCUS);

    cy.realPress("ArrowDown");

    cy.get(RADIO_SELECTOR).find(INPUT).eq(1).should(HAVE_FOCUS);
    cy.get(RADIO_SELECTOR).first().should(HAVE_PROP, "selected", false);
    cy.get(RADIO_SELECTOR).eq(1).should(HAVE_PROP, "selected", true);
  });

  it("should render radio group with options that update on clicking update button", () => {
    mount(<RadioOptionsChanging />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);

    cy.get(RADIO_SELECTOR).last().should(HAVE_VALUE, "valueName4");

    cy.clickOnButton(IC_BUTTON);

    cy.findShadowEl(IC_BUTTON, BUTTON).focus();
    cy.realPress(["Shift", "Tab"]);

    cy.get(RADIO_SELECTOR).find(INPUT).first().should(HAVE_FOCUS);

    cy.get(RADIO_SELECTOR)
      .first()
      .should(HAVE_VALUE, "valueName5")
      .should(HAVE_PROP, "selected", false);

    cy.get(RADIO_SELECTOR)
      .last()
      .should(HAVE_VALUE, "valueName6")
      .should(HAVE_PROP, "selected", false);

    cy.realPress("ArrowDown");

    cy.get(RADIO_SELECTOR).find(INPUT).eq(1).should(HAVE_FOCUS);
    cy.get(RADIO_SELECTOR).first().should(HAVE_PROP, "selected", false);
    cy.get(RADIO_SELECTOR).last().should(HAVE_PROP, "selected", true);
  });

  it("should render as a controlled component", () => {
    mount(<Controlled />);

    cy.get("ic-button#unselect-btn").click();
    cy.get(RADIO_SELECTOR).eq(0).should(HAVE_PROP, "selected", false);
    cy.get("ic-button#select-btn").click();
    cy.get(RADIO_SELECTOR).eq(0).should(HAVE_PROP, "selected", true);
  });

  it("should render as an uncontrolled component", () => {
    mount(<Uncontrolled />);

    cy.spy(window.console, "log").as("spyWinConsoleLog");
    cy.get(RADIO_SELECTOR).eq(0).find(CONTAINER_CLASS).click();
    cy.get(CONSOLE_LOG_SPY_ALIAS).should(HAVE_BEEN_CALLED_WITH, true);
  });

  it("should update the radio options' disabled state when the group's state is updated", () => {
    mount(<Default />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);

    cy.get(RADIO_GROUP_SELECTOR).invoke("prop", "disabled", true);
    cy.get(RADIO_SELECTOR).eq(0).should(HAVE_CLASS, "ic-radio-option-disabled");

    cy.get(RADIO_GROUP_SELECTOR).invoke("prop", "disabled", false);
    cy.get(RADIO_SELECTOR)
      .eq(0)
      .should(NOT_HAVE_CLASS, "ic-radio-option-disabled");
  });

  it("first option should have tabIndex of 0 when no options are selected", () => {
    mount(<Validation />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);

    cy.get(RADIO_SELECTOR).find(INPUT).eq(0).should(HAVE_ATTR, "tabindex", 0);
  });

  it("should not be clickable when disabled", () => {
    mount(<Disabled />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);

    cy.get(RADIO_SELECTOR).eq(0).should(HAVE_PROP, "selected", false);
    cy.get(RADIO_SELECTOR).eq(0).find(CONTAINER_CLASS).click();
    cy.get(RADIO_SELECTOR).eq(0).should(HAVE_PROP, "selected", false);

    cy.get(RADIO_SELECTOR).eq(1).find(CONTAINER_CLASS).click();
    cy.realPress("ArrowDown");
    cy.get(RADIO_SELECTOR).eq(2).should(HAVE_PROP, "selected", false);
    cy.realPress("ArrowUp");
    cy.get(RADIO_SELECTOR).eq(0).should(HAVE_PROP, "selected", false);
  });

  it("should enable textfield when associated option is selected when static", () => {
    mount(<ConditionalStatic />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);

    cy.get(TEXT_FIELD_SELECTOR).should(HAVE_PROP, "disabled", true);
    cy.get(RADIO_SELECTOR).eq(0).find(CONTAINER_CLASS).click();
    cy.get(TEXT_FIELD_SELECTOR).should(HAVE_PROP, "disabled", false);
    cy.findShadowEl(TEXT_FIELD_SELECTOR, INPUT).type("test");
    cy.get(TEXT_FIELD_SELECTOR).should(HAVE_PROP, "value", "test");
    cy.get(RADIO_SELECTOR).eq(1).find(CONTAINER_CLASS).click();
    cy.get(TEXT_FIELD_SELECTOR).should(HAVE_PROP, "disabled", true);
  });

  it("should display textfield when associated option is selected when dynamic", () => {
    mount(<ConditionalDynamic />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);

    cy.get(TEXT_FIELD_SELECTOR).eq(0).should(NOT_BE_VISIBLE);
    cy.get(TEXT_FIELD_SELECTOR).eq(1).should(NOT_BE_VISIBLE);
    cy.get(TEXT_FIELD_SELECTOR).eq(2).should(NOT_BE_VISIBLE);
    cy.get(RADIO_SELECTOR).eq(0).find(CONTAINER_CLASS).click();
    cy.get(TEXT_FIELD_SELECTOR).eq(0).should(BE_VISIBLE);
    cy.get(TEXT_FIELD_SELECTOR).eq(1).should(NOT_BE_VISIBLE);
    cy.get(TEXT_FIELD_SELECTOR).eq(2).should(NOT_BE_VISIBLE);

    cy.get(RADIO_SELECTOR).eq(1).find(CONTAINER_CLASS).click();
    cy.get(TEXT_FIELD_SELECTOR).eq(0).should(NOT_BE_VISIBLE);
    cy.get(TEXT_FIELD_SELECTOR).eq(1).should(BE_VISIBLE);
    cy.get(TEXT_FIELD_SELECTOR).eq(2).should(NOT_BE_VISIBLE);

    cy.get(RADIO_SELECTOR).eq(2).find(CONTAINER_CLASS).click();
    cy.get(TEXT_FIELD_SELECTOR).eq(0).should(NOT_BE_VISIBLE);
    cy.get(TEXT_FIELD_SELECTOR).eq(1).should(NOT_BE_VISIBLE);
    cy.get(TEXT_FIELD_SELECTOR).eq(2).should(BE_VISIBLE);
  });

  it("should call onclick function of component in additional-field slot when slotted component is clicked and not lose focus on arrow keydown", () => {
    mount(<ConditionalDynamic />);
    cy.get(RADIO_SELECTOR).eq(0).find(CONTAINER_CLASS).click();
    cy.get(TEXT_FIELD_SELECTOR).eq(0).click();
    cy.spy(window.console, "log").as("spyWinConsoleLog");
    cy.get(CONSOLE_LOG_SPY_ALIAS).should(
      HAVE_BEEN_CALLED_WITH,
      "Textfield clicked"
    );
    cy.realPress("ArrowDown");
    cy.get(TEXT_FIELD_SELECTOR).eq(0).should(HAVE_FOCUS);
  });

  it("should emit icChange and icCheck events when radio option is selected", () => {
    mount(<Default />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);
    cy.get(RADIO_GROUP_SELECTOR).invoke(
      "on",
      "icChange",
      cy.stub().as("icChange")
    );
    cy.get(RADIO_GROUP_SELECTOR).invoke(
      "on",
      "icCheck",
      cy.stub().as("icCheck")
    );

    cy.get(RADIO_SELECTOR).eq(0).find(CONTAINER_CLASS).click();
    cy.get(RADIO_SELECTOR).eq(0).should(HAVE_PROP, "selected", true);

    cy.get("@icChange").should(HAVE_BEEN_CALLED);
    cy.get("@icCheck").should(HAVE_BEEN_CALLED);
  });

  it("should select option when spacebar is pressed", () => {
    mount(<Tabbable />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);

    cy.get(BUTTON).focus();
    cy.realPress("Tab");
    cy.get(RADIO_SELECTOR).find(INPUT).eq(0).should(HAVE_FOCUS);
    cy.get(RADIO_SELECTOR).eq(0).should(HAVE_PROP, "selected", false);
    cy.realPress("Space");
    cy.get(RADIO_SELECTOR).eq(0).should(HAVE_PROP, "selected", true);
  });

  it("should select next radio option down when arrow down is used", () => {
    mount(<Tabbable />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);

    cy.get(BUTTON).focus();
    cy.realPress("Tab");
    cy.get(RADIO_SELECTOR).find(INPUT).eq(0).should(HAVE_FOCUS);
    cy.realPress("ArrowDown");
    cy.get(RADIO_SELECTOR).eq(1).should(HAVE_PROP, "selected", true);
  });

  it("should select next radio option down when arrow right is used", () => {
    mount(<Tabbable />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);

    cy.get(BUTTON).focus();
    cy.realPress("Tab");
    cy.get(RADIO_SELECTOR).find(INPUT).eq(0).should(HAVE_FOCUS);
    cy.realPress("ArrowRight");
    cy.get(RADIO_SELECTOR).eq(1).should(HAVE_PROP, "selected", true);
  });

  it("should select next radio option up when arrow up is used", () => {
    mount(<Tabbable />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);

    cy.get(BUTTON).focus();
    cy.realPress("Tab");
    cy.get(RADIO_SELECTOR).find(INPUT).eq(0).should(HAVE_FOCUS);
    cy.realPress("ArrowUp");
    cy.get(RADIO_SELECTOR).eq(3).should(HAVE_PROP, "selected", true);
  });

  it("should select next radio option up when arrow left is used", () => {
    mount(<Tabbable />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);

    cy.get(BUTTON).focus();
    cy.realPress("Tab");
    cy.get(RADIO_SELECTOR).find(INPUT).eq(0).should(HAVE_FOCUS);
    cy.realPress("ArrowLeft");
    cy.get(RADIO_SELECTOR).eq(3).should(HAVE_PROP, "selected", true);
  });

  it("should apply focus to the selected option when tabbing to a radio group with an option already selected", () => {
    mount(<TabbableSelected />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);

    cy.get(BUTTON).focus();
    cy.realPress("Tab");
    cy.get(RADIO_SELECTOR).find(INPUT).eq(1).should(HAVE_FOCUS);
  });

  it("should move focus to the dynamically displayed field when tabbing on from the radio group", () => {
    mount(<ConditionalDynamic />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);

    cy.get(RADIO_SELECTOR).eq(0).find(CONTAINER_CLASS).click();
    cy.get(RADIO_SELECTOR).eq(0).should(HAVE_PROP, "selected", true);
    cy.realPress("Tab");
    cy.get(TEXT_FIELD_SELECTOR).eq(0).should(HAVE_FOCUS);
  });

  it("should move focus to the next radio option when pressing arrow keys when on radio option with a textfield", () => {
    mount(<ConditionalStatic />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);

    cy.get(RADIO_SELECTOR).eq(0).find(CONTAINER_CLASS).click();
    cy.get(RADIO_SELECTOR).eq(0).should(HAVE_PROP, "selected", true);
    cy.get(TEXT_FIELD_SELECTOR).should(HAVE_PROP, "disabled", false);
    cy.realPress("ArrowDown");
    cy.get(RADIO_SELECTOR).find(INPUT).eq(1).should(HAVE_FOCUS);
  });

  it("should pass the value of radio button correctly when already selected", () => {
    mount(<Default />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);

    cy.get(RADIO_SELECTOR).eq(1).should(HAVE_VALUE, "valueName2");
  });

  it("should pass the value of radio button and textfield correctly when textfield value is set and option is already selected", () => {
    mount(<ConditionalDynamicTextFieldValue />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);

    cy.get(RADIO_SELECTOR).eq(0).should(HAVE_VALUE, "valueName1");
    cy.get(TEXT_FIELD_SELECTOR).eq(0).should(HAVE_PROP, "value", "testValue1");
  });

  it("should work in a form", () => {
    mount(<InAForm />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);
    cy.spy(window.console, "log").as("spyWinConsoleLog");

    cy.get(RADIO_SELECTOR).eq(0).find(CONTAINER_CLASS).click();
    cy.get(RADIO_SELECTOR).eq(0).should(HAVE_PROP, "selected", true);
    cy.get("input[type='submit']").click();
    cy.get(CONSOLE_LOG_SPY_ALIAS).should(
      HAVE_BEEN_CALLED_WITH,
      "Form value: valueName1"
    );
  });

  it("should reset to initial state on form reset event", () => {
    mount(<InAForm />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);

    cy.get(RADIO_SELECTOR).eq(0).find(CONTAINER_CLASS).click();
    cy.get(RADIO_SELECTOR).eq(0).should(HAVE_PROP, "selected", true);

    cy.get("input[type='reset']").click();

    cy.get(RADIO_SELECTOR).eq(0).should(HAVE_PROP, "selected", false);
  });

  it("should handle keyboard navigation of a slotted radio-group within an additional-field", () => {
    mount(<RadioGroupInAdditionalField />);

    cy.get("#ic-radio-option-option1-Parent").focus();
    cy.realPress("Tab");
    cy.realPress("ArrowDown");

    cy.get(`${RADIO_SELECTOR}[label="child-option-2"]`).should(
      HAVE_PROP,
      "selected",
      true
    );
    cy.get(`${RADIO_SELECTOR}[label="option2"]`).should(
      HAVE_PROP,
      "selected",
      false
    );
  });

  it("should select parent radio if a child radio is selected when additionFieldDisplay is static", () => {
    mount(<StaticChildRadioGroup />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);

    cy.get(`${RADIO_SELECTOR}[label="option2"]`).should(
      HAVE_PROP,
      "selected",
      false
    );

    cy.get(`${RADIO_SELECTOR}[label="child-option-1"]`).find("input").focus();
    cy.realPress("Space");

    cy.get(`${RADIO_SELECTOR}[label="child-option-1"]`).should(
      HAVE_PROP,
      "selected",
      true
    );
    cy.get(`${RADIO_SELECTOR}[label="option2"]`).should(
      HAVE_PROP,
      "selected",
      true
    );
  });
});

describe("IcRadio visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render default IcRadio with vertical orientation when there are more than two options", () => {
    mount(<Default />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.028),
    });
  });

  it("should render horizontal IcRadio", () => {
    mount(<Horizontal />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/horizontal",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.029),
    });
  });

  it("should render IcRadio with helper text", () => {
    mount(<HelperText />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/helper-text",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.039),
    });
  });

  it("should render IcRadio with slotted helper text", () => {
    mount(<HelperTextSlot />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);

    cy.checkA11yWithWait();

    // Check positioning matches normal helper text
    cy.compareSnapshot({
      name: "/helper-text",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.039),
    });
  });

  it("should render disabled IcRadio", () => {
    mount(<Disabled />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);

    cy.checkA11yWithWait(undefined, undefined, DISABLED_RADIO_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "/disabled-options",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
    });
  });

  it("should render disabled IcRadioGroup", () => {
    mount(<DisabledGroup />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);

    //cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/disabled-group",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render small IcRadio", () => {
    mount(<Small />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/small",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.028),
    });
  });

  it("should render conditional static IcRadio in small variant", () => {
    mount(<SmallConditionalStatic />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/small-conditional-static",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render conditional dynamic IcRadio in small variant", () => {
    mount(<SmallConditionalDynamic />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);
    cy.get(RADIO_SELECTOR).eq(0).find(CONTAINER_CLASS).click();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/small-conditional-dynamic",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render IcRadio with required prop and validation message", () => {
    mount(<Validation />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/validation",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.037),
    });
  });

  it("should render IcRadio with no options initially - before update", () => {
    mount(<RadioOptionsEmptyInitial />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/empty-initial-before-update",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
    });
  });

  it("should render IcRadio with no options initially - after update", () => {
    mount(<RadioOptionsEmptyInitial />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);
    cy.clickOnButton(IC_BUTTON);
    cy.get(RADIO_SELECTOR).last().should(HAVE_VALUE, "valueName4");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/empty-initial-after-update",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.032),
    });
  });

  it("should render IcRadio with options that update on clicking update button - before update", () => {
    mount(<RadioOptionsChanging />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/changing-before-update",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.032),
    });
  });

  it("should render IcRadio with options that update on clicking update button - after update", () => {
    mount(<RadioOptionsChanging />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);
    cy.clickOnButton(IC_BUTTON);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/changing-after-update",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.027),
    });
  });

  it("should render conditional static IcRadio", () => {
    mount(<ConditionalStatic />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/conditional-static",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.023),
    });
  });

  it("should render conditional dynamic IcRadio - first radio button selected", () => {
    mount(<ConditionalDynamic />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);
    cy.get(RADIO_SELECTOR).eq(0).find(CONTAINER_CLASS).click();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/conditional-dynamic-first-selected",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.058),
    });
  });

  it("should render conditional dynamic IcRadio - second radio button selected", () => {
    mount(<ConditionalDynamic />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);
    cy.get(RADIO_SELECTOR).eq(1).find(CONTAINER_CLASS).click();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/conditional-dynamic-second-selected",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.072),
    });
  });

  it("should render with custom dynamicText and with vertical orientation when using additional-field slot", () => {
    mount(<ConditionalDynamicTextFieldValue />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/conditional-dynamic-text",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.053),
    });
  });

  it("should render with dark theme", () => {
    mount(<ThemeDark />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/dark-theme",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.033),
    });
  });
});

describe("IcRadio visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  after(() => {
    cy.disableForcedColors();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render default IcRadio in high contrast mode", () => {
    mount(<Default />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);

    cy.compareSnapshot({
      name: "/default-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.037),
    });
  });

  it("should render conditional dynamic IcRadio in high contrast mode", () => {
    mount(<ConditionalDynamic />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);
    cy.get(RADIO_SELECTOR).eq(1).find(CONTAINER_CLASS).click();

    cy.compareSnapshot({
      name: "/conditional-dynamic-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.084),
      delay: 1000,
    });
  });
});
