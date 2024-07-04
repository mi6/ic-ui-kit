/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import { mount } from "cypress/react";
import React from "react";
import {
  BE_VISIBLE,
  CONTAIN_TEXT,
  HAVE_ATTR,
  HAVE_VALUE,
  HAVE_BEEN_CALLED,
  NOT_BE_VISIBLE,
  NOT_HAVE_ATTR,
  NOT_CONTAIN,
  NOT_HAVE_BEEN_CALLED,
  NOT_EXIST,
  HAVE_BEEN_CALLED_ONCE,
  HAVE_FOCUS,
  HAVE_BEEN_CALLED_WITH,
  HAVE_PROP,
} from "../utils/constants";
import {
  CustomSizeTextField,
  DisabledTextField,
  FullWidthTextField,
  HiddenLabelTextField,
  MultiLineTextAreaWithResize,
  ReadonlyTextField,
  SimpleTextField,
  SmallTextField,
  TextFieldNotRequired,
  TextFieldWithDebounce,
  TextFieldWithHelperTextPlaceholderIconRequired,
  TextFieldWithIconValueMaxCharacters,
  TextFieldWithInlineValidation,
  TextFieldWithHiddenCharCount,
  TextFieldWithMinMaxCharacters,
  TextFieldWithMinMaxValue,
  TextFieldWithValidation,
  TextFieldWithinForm,
  Controlled,
  Uncontrolled,
  TextFieldWithMaxLengthMessage,
} from "./IcTextFieldTestData";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const IC_TEXTFIELD = "ic-text-field";
const TEXTFIELD_INPUT = 'input[type="text"]';
const DEFAULT_TEST_THRESHOLD = 0.03;

describe("IcTextField end-to-end tests", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render as a controlled component", () => {
    mount(<Controlled />);

    cy.get(IC_TEXTFIELD).eq(0).should(HAVE_PROP, "value", "");
    cy.findShadowEl(IC_TEXTFIELD, "ic-input-component-container").type("Test");
    cy.get(IC_TEXTFIELD).eq(0).should(HAVE_PROP, "value", "Test");
  });

  it("should render as an uncontrolled component", () => {
    mount(<Uncontrolled />);

    cy.spy(window.console, "log").as("spyWinConsoleLog");
    cy.findShadowEl(IC_TEXTFIELD, "ic-input-component-container").type("Test");
    cy.get("@spyWinConsoleLog").should(HAVE_BEEN_CALLED_WITH, "Test");
  });

  it("should render IcTextField", () => {
    mount(<SimpleTextField />);

    cy.checkHydrated(IC_TEXTFIELD);

    cy.get(IC_TEXTFIELD)
      .should(BE_VISIBLE)
      .and(HAVE_ATTR, "label", "Test TextField Label");
  });

  it("should display helper text", () => {
    mount(<TextFieldWithHelperTextPlaceholderIconRequired />);

    cy.checkHydrated(IC_TEXTFIELD);

    cy.findShadowEl(IC_TEXTFIELD, ".helpertext").should(
      CONTAIN_TEXT,
      "Such as Arabica, Robusta or Liberica"
    );
  });

  it("should display placeholder text", () => {
    mount(<TextFieldWithHelperTextPlaceholderIconRequired />);

    cy.checkHydrated(IC_TEXTFIELD);

    cy.get(IC_TEXTFIELD).should(HAVE_ATTR, "placeholder", "Please enter…");
  });

  it("should emit icChange events when the value has changed", () => {
    mount(<TextFieldWithHelperTextPlaceholderIconRequired />);

    cy.checkHydrated(IC_TEXTFIELD);

    cy.get(IC_TEXTFIELD).invoke("on", "icChange", cy.stub().as("icChange"));

    cy.findShadowEl(IC_TEXTFIELD, TEXTFIELD_INPUT)
      .type("Test Text")
      .should(HAVE_VALUE, "Test Text");
    cy.get("@icChange").should(HAVE_BEEN_CALLED);
  });

  it("should show as required when prop set to true", () => {
    mount(<TextFieldWithHelperTextPlaceholderIconRequired />);

    cy.checkHydrated(IC_TEXTFIELD);

    cy.get(IC_TEXTFIELD)
      .shadow()
      .contains("What is your favourite coffee? *")
      .should(BE_VISIBLE);
    cy.get('[required="true"]').should(BE_VISIBLE);
  });

  it("should not show as required when prop set to false", () => {
    mount(<TextFieldNotRequired />);

    cy.checkHydrated(IC_TEXTFIELD);

    cy.get(IC_TEXTFIELD).should(NOT_HAVE_ATTR, "required");
    cy.findShadowEl(IC_TEXTFIELD, "label").should(
      NOT_CONTAIN,
      "What is your favourite coffee? *"
    );
  });

  it("should be disabled when the disabled prop is set", () => {
    mount(<DisabledTextField />);

    cy.checkHydrated(IC_TEXTFIELD);

    cy.get(IC_TEXTFIELD).should(HAVE_ATTR, "disabled");
  });

  it("should not have label visible when hideLabel prop is set", () => {
    mount(<HiddenLabelTextField />);

    cy.checkHydrated(IC_TEXTFIELD);

    cy.get(IC_TEXTFIELD).should(HAVE_ATTR, "hide-label");
    cy.get(IC_TEXTFIELD).shadow().find("ic-input-label").should(NOT_EXIST);
    cy.findShadowEl(IC_TEXTFIELD, TEXTFIELD_INPUT).should(
      HAVE_ATTR,
      "aria-label",
      "What is your favourite coffee?"
    );
  });

  it("should trigger min / max character validation when shorter / longer value set", () => {
    mount(<TextFieldWithMinMaxCharacters />);

    cy.checkHydrated(IC_TEXTFIELD);

    const maxInput = cy.findShadowEl("#max", "input");
    const minInput = cy.findShadowEl("#min", "input");

    maxInput.type("Test Text").wait(100).should(HAVE_VALUE, "Test Text");
    cy.findShadowEl(IC_TEXTFIELD, ".char-count-text").should(
      CONTAIN_TEXT,
      "9/20"
    );
    cy.get(IC_TEXTFIELD)
      .shadow()
      .find('[id$="validation-text"]')
      .should(NOT_BE_VISIBLE);
    cy.findShadowEl(IC_TEXTFIELD, ".icon-warning").should(NOT_EXIST);
    cy.findShadowEl(IC_TEXTFIELD, ".remaining-char-count-desc").should(
      CONTAIN_TEXT,
      "11 characters remaining."
    );

    maxInput.realType("{backspace}".repeat(9));
    maxInput.realType("This string is too long").wait(200);
    cy.get(IC_TEXTFIELD)
      .shadow()
      .find('[id$="validation-text"]')
      .should(CONTAIN_TEXT, "Maximum input is 20 characters");
    cy.findShadowEl(IC_TEXTFIELD, ".char-count-text").should(
      CONTAIN_TEXT,
      "20/20"
    );
    cy.findShadowEl(IC_TEXTFIELD, ".remaining-char-count-desc").should(
      CONTAIN_TEXT,
      "0 characters remaining."
    );

    cy.findShadowEl(IC_TEXTFIELD, ".icon-warning").should(BE_VISIBLE);
    cy.get(IC_TEXTFIELD).should(HAVE_VALUE, "This string is too l");

    minInput.type("A").should(HAVE_VALUE, "A");
    cy.realPress("Tab").wait(200);
    cy.get(IC_TEXTFIELD)
      .shadow()
      .find('[id$="validation-text"]')
      .should(CONTAIN_TEXT, "Minimum input is 5 characters");
    cy.findShadowEl(IC_TEXTFIELD, ".icon-error").should(BE_VISIBLE);
  });

  it("should not show character count when maxCharacters and hideCharCount props are set", () => {
    mount(<TextFieldWithHiddenCharCount />);

    cy.checkHydrated(IC_TEXTFIELD);

    cy.findShadowEl(IC_TEXTFIELD, ".char-count-text").should(NOT_EXIST);
    cy.findShadowEl(IC_TEXTFIELD, ".remaining-char-count-desc").should("exist");
  });

  it("should trigger min / max value validation when lower / higher value set", () => {
    mount(<TextFieldWithMinMaxValue />);

    cy.checkHydrated(IC_TEXTFIELD);

    const input = cy.findShadowEl(IC_TEXTFIELD, 'input[type="number"]');

    input.type("2").wait(200).should(HAVE_VALUE, "2");
    cy.get(IC_TEXTFIELD)
      .shadow()
      .find('[id$="validation-text"]')
      .should(NOT_EXIST);
    cy.findShadowEl(IC_TEXTFIELD, ".icon-error").should(NOT_EXIST);

    input.clear();
    input.type("5").wait(200).should(HAVE_VALUE, "5");
    cy.get(IC_TEXTFIELD)
      .shadow()
      .find('[id$="validation-text"]')
      .should(CONTAIN_TEXT, "Maximum value of 4 exceeded");
    cy.findShadowEl(IC_TEXTFIELD, ".icon-error").should(BE_VISIBLE);

    input.clear();
    input.type("0").wait(200).should(HAVE_VALUE, "0");
    cy.get(IC_TEXTFIELD)
      .shadow()
      .find('[id$="validation-text"]')
      .should(CONTAIN_TEXT, "Minimum value of 1 not met");
    cy.findShadowEl(IC_TEXTFIELD, ".icon-error").should(BE_VISIBLE);
  });

  it("should not be able to input text string when input type is set as number", () => {
    mount(<TextFieldWithMinMaxValue />);

    cy.checkHydrated(IC_TEXTFIELD);

    cy.get(IC_TEXTFIELD).invoke("on", "icChange", cy.stub().as("icChanges"));

    cy.findShadowEl(IC_TEXTFIELD, 'input[type="number"]').type(
      "Inputting text should not be possible"
    );
    cy.get("@icChanges").should(NOT_HAVE_BEEN_CALLED);
    cy.get(IC_TEXTFIELD).should(
      "not.have.value",
      "Inputting text should not be possible"
    );
  });

  it("should emit icFocus and icBlur on focus events", () => {
    mount(<SimpleTextField />);

    cy.checkHydrated(IC_TEXTFIELD);

    cy.get(IC_TEXTFIELD).invoke("on", "icFocus", cy.stub().as("icFocus"));

    cy.get(IC_TEXTFIELD).invoke("on", "icBlur", cy.stub().as("icBlur"));

    cy.findShadowEl(IC_TEXTFIELD, TEXTFIELD_INPUT).click();
    cy.get(IC_TEXTFIELD).should(HAVE_FOCUS);
    cy.get(IC_TEXTFIELD).blur();
    cy.get("@icFocus").should(HAVE_BEEN_CALLED_ONCE);
    cy.get("@icBlur").should(HAVE_BEEN_CALLED_ONCE);
  });

  it("should emit icInput on input event", () => {
    mount(<SimpleTextField />);

    cy.checkHydrated(IC_TEXTFIELD);

    cy.get(IC_TEXTFIELD).invoke("on", "icInput", cy.stub().as("icInput"));

    cy.get("@icInput").should(NOT_HAVE_BEEN_CALLED);
    cy.findShadowEl(IC_TEXTFIELD, TEXTFIELD_INPUT).click().realPress("Space");
    cy.get("@icInput").should(HAVE_BEEN_CALLED_ONCE);
  });

  it("should emit icChange on delay", () => {
    mount(<TextFieldWithDebounce />);

    cy.checkHydrated(IC_TEXTFIELD);

    cy.get(IC_TEXTFIELD).invoke("on", "icChange", cy.stub().as("icChange"));

    cy.findShadowEl(IC_TEXTFIELD, TEXTFIELD_INPUT).type("Test text");
    cy.get("@icChange").should(HAVE_BEEN_CALLED_ONCE);
  });

  it("should work on a form", () => {
    mount(<TextFieldWithinForm />);

    cy.checkHydrated(IC_TEXTFIELD);

    cy.findShadowEl(IC_TEXTFIELD, TEXTFIELD_INPUT)
      .type("Test text")
      .should(HAVE_VALUE, "Test text");
    cy.get("input[name=formInputEl]").should(NOT_BE_VISIBLE);
    cy.get("input[name=formInputEl]").should(HAVE_VALUE, "Test text");
    cy.get("#resetButton").click();
    cy.findShadowEl(IC_TEXTFIELD, TEXTFIELD_INPUT).should(HAVE_VALUE, "");
  });

  it("should update any attributes inherited from the root element when they are mutated", () => {
    mount(<SimpleTextField />);

    let input = cy.findShadowEl(IC_TEXTFIELD, TEXTFIELD_INPUT);

    input.should(NOT_HAVE_ATTR, "title");

    cy.get(IC_TEXTFIELD).invoke("attr", "title", "new-input-title");

    input.should(HAVE_ATTR, "title", "new-input-title");
  });
});

describe("IcTextField visual regression tests", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render a text field with icon, value and max characters", () => {
    mount(<TextFieldWithIconValueMaxCharacters />);

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "icon-value-max-characters",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.03),
    });
  });

  it("should render a small text field", () => {
    mount(<SmallTextField />);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "small-text-field",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.03),
    });
  });

  it("should render a full width text field", () => {
    mount(<FullWidthTextField />);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "full-width-text-field",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.03),
    });
  });

  it("should render a multiline text field", () => {
    mount(<MultiLineTextAreaWithResize />);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "multiline-text-area-with-resize",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.028),
    });
  });

  it("should render text field with inline validation with status of success", () => {
    mount(<TextFieldWithInlineValidation />);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "inline-validation-text-field",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.03),
    });
  });

  it("should render validation status and text", () => {
    mount(<TextFieldWithValidation />);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "validation-text-field",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.098),
    });
  });

  it("should render a readonly text field", () => {
    mount(<ReadonlyTextField />);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "readonly-text-field",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.028),
    });
  });

  it("should render a custom text field", () => {
    mount(<CustomSizeTextField />);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "custom-text-field",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.03),
    });
  });

  it("should render a text field with input focused", () => {
    mount(<SimpleTextField />);

    cy.checkA11yWithWait();

    cy.findShadowEl(IC_TEXTFIELD, TEXTFIELD_INPUT).click();
    cy.get(IC_TEXTFIELD).should(HAVE_FOCUS);

    cy.compareSnapshot({
      name: "focused-input-text-field",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.005),
    });
  });

  it("should render with min and max characters", () => {
    mount(<TextFieldWithMinMaxCharacters />);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "min-max-characters-text-field",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.03),
    });
  });
});

describe("IcTextField visual regression in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  after(() => {
    cy.disableForcedColors();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("renders a text field with input focused", () => {
    mount(<SimpleTextField />);

    cy.findShadowEl(IC_TEXTFIELD, TEXTFIELD_INPUT).click();
    cy.get(IC_TEXTFIELD).should(HAVE_FOCUS);

    cy.compareSnapshot({
      name: "focused-input-text-field-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("renders disabled", () => {
    mount(<DisabledTextField />);

    cy.wait(100).compareSnapshot({
      name: "disabled-text-field-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.027),
    });
  });

  it("renders a readonly text field", () => {
    mount(<ReadonlyTextField />);

    cy.wait(100).compareSnapshot({
      name: "readonly-text-field-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.031),
    });
  });

  it("renders validation status and text", () => {
    mount(<TextFieldWithValidation />);

    cy.wait(100).compareSnapshot({
      name: "validation-text-field-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.115),
    });
  });
});
