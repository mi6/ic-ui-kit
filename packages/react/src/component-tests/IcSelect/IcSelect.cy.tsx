/// <reference types="Cypress" />

import { mount } from "@cypress/react";
import React from "react";
import { IcSelect } from "../../components";
import { SlottedSVG } from "../../react-component-lib/slottedSVG";
import {
  BE_DISABLED,
  BE_VISIBLE,
  CONTAIN_TEXT,
  CONTAIN_VALUE,
  HAVE_ATTR,
  HAVE_BEEN_CALLED,
  HAVE_BEEN_CALLED_ONCE,
  HAVE_BEEN_CALLED_WITH,
  HAVE_CLASS,
  HAVE_FOCUS,
  HAVE_LENGTH,
  HAVE_TEXT,
  HAVE_VALUE,
  NOT_BE_FOCUSED,
  NOT_BE_VISIBLE,
  NOT_HAVE_BEEN_CALLED,
} from "../utils/constants";
import {
  ARIA_SELECTED,
  DATA_LABEL_CAPPUCCINO,
  DATA_LABEL_ESPRESSO,
  DATA_VALUE_ESPRESSO,
  DEFAULT_TEST_THRESHOLD,
  DISABLED_OPTION_MENU,
  IC_INPUT_CONTAINER,
  IC_MENU_LI,
  IC_MENU_UL,
  IC_TYPOGRAPHY,
  ID_CLEAR_BUTTON,
  LOADING_MESSAGE,
  RETRY_BUTTON,
  SC_IC_MENU_TYPOGRAPHY,
  TYPE_BACKSPACE,
  TYPE_DOWN_ARROW,
  TYPE_ENTER,
} from "./IcSelectConstants";
import {
  ControlledSelect,
  LoadingSelect,
  LoadingSelectNoTimeout,
  UncontrolledSelect,
  coffeeCustomElements,
  coffeeDisabledOption,
  coffeeOptions,
  coffeeOptionsDescriptions,
  coffeeOptionsReadonly,
  groupAndDescriptionCoffeeOption,
  groupCoffeeOption,
  manyOptions,
  recommendedCoffeeOption,
  searchableCoffeeOption,
  validationCoffeeOption,
} from "./IcSelectTestData";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

describe("IcSelect", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render when no options are provided", () => {
    mount(<IcSelect label="What is your favourite coffee?" />);

    cy.checkHydrated("ic-select");

    cy.compareSnapshot({
      name: "default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.002),
    });

    cy.get("ic-select").should("exist");
  });

  it("should render options correctly", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "default-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.031),
    });

    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    cy.findShadowEl("ic-select", SC_IC_MENU_TYPOGRAPHY)
      .should(HAVE_LENGTH, "6")
      .each(($t1) => {
        cy.log($t1.text());
      });
  });

  it("should render with an icon", () => {
    mount(
      <IcSelect label="What is your favourite coffee?">
        <SlottedSVG
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
        </SlottedSVG>
      </IcSelect>
    );

    cy.checkHydrated("ic-select");

    cy.compareSnapshot({
      name: "with-icon",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.005),
    });
  });

  it("should open, set focus on menu and set aria-expanded to 'true' when input clicked", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", "button").should(HAVE_ATTR, "aria-expanded");
    cy.findShadowEl("ic-select", IC_MENU_UL)
      .should(BE_VISIBLE)
      .should(HAVE_FOCUS);
  });

  it("should call icChange when an option is selected it and when select is focused and downArrow pressed", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated("ic-select");
    cy.get("ic-select").invoke("on", "icChange", cy.stub().as("icChanges"));
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.get(".ic-input").should(CONTAIN_VALUE, "espresso");
  });

  it("should open menu when no option is selected, apply focus style on first option and set as value when clicked and have expanded icon", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", DATA_VALUE_ESPRESSO)
      .contains("Espresso")
      .should(HAVE_TEXT, "Espresso");
    cy.findShadowEl("ic-select", ".expand-icon")
      .should("exist")
      .should(HAVE_CLASS, "expand-icon expand-icon-open");
  });

  it("should open menu when an option is selected and when enter is pressed ", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_ENTER);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
  });

  it("should open menu, apply focus style on last option and set as value when Up Arrow is pressed", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated("ic-select");
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("{upArrow}");
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    cy.get(".ic-input").should(CONTAIN_VALUE, "mocha");
  });

  it("should keep menu closed when Backspace, Home, End and Escape are pressed", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_BACKSPACE);
    cy.get("ic-select").shadow().find(IC_MENU_LI).should(NOT_BE_VISIBLE);
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_BACKSPACE);
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("{esc}");
    cy.get("ic-select").shadow().find(IC_MENU_LI).should(NOT_BE_VISIBLE);
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("{Home}");
    cy.get("ic-select").shadow().find(IC_MENU_LI).should(NOT_BE_VISIBLE);
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("{End}");
    cy.get("ic-select").shadow().find(IC_MENU_LI).should(NOT_BE_VISIBLE);
  });

  it("should open menu when an option is selected, apply focus style on first option and set as value when Down Arrow is pressed", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.clickOnShadowEl("ic-select", '[data-value="doubleespresso"]');
    cy.get(".ic-input").should(CONTAIN_VALUE, "doubleespresso");
  });

  it("should move focus to first option when an option is selected and set as value when focus is on last option and Down Arrow is pressed", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("{upArrow}");
    cy.get(".ic-input").should(CONTAIN_VALUE, "mocha");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.get(".ic-input").should(CONTAIN_VALUE, "espresso");
  });

  it("should move focus to previous option and set as value when Up Arrow is pressed", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("{upArrow}");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("{upArrow}");
    cy.get(".ic-input").should(CONTAIN_VALUE, "americano");
  });

  it("should move focus to last option and set as value when focus is on first option and Up Arrow is pressed", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("{upArrow}");
    cy.get(".ic-input").should(CONTAIN_VALUE, "mocha");
  });

  it("should move focus to first option and set as value when Home is pressed", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("{Home}");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.get(".ic-input").should(CONTAIN_VALUE, "espresso");
  });

  it("should move focus to last option and set as value when End is pressed", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("{upArrow}");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("{End}");
    cy.get(".ic-input").should(CONTAIN_VALUE, "mocha");
  });

  it("should display a check next to the selected option and set aria-selected", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.findShadowEl("ic-select", DATA_VALUE_ESPRESSO).should(
      HAVE_ATTR,
      ARIA_SELECTED,
      "true"
    );
    cy.findShadowEl("ic-select", "[data-value='espresso'] span").should(
      HAVE_CLASS,
      "check-icon"
    );
  });

  it("should display a check next to the selected option and set aria-selected when a default value is applied", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        value="espresso"
      />
    );

    cy.checkHydrated("ic-select");

    cy.compareSnapshot({
      name: "default-value",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.004),
    });

    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "default-value-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.032),
    });

    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    cy.clickOnShadowEl("ic-select", DATA_VALUE_ESPRESSO);
    cy.findShadowEl("ic-select", DATA_VALUE_ESPRESSO);
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", DATA_VALUE_ESPRESSO).should(
      HAVE_ATTR,
      ARIA_SELECTED,
      "true"
    );
    cy.findShadowEl("ic-select", `${DATA_VALUE_ESPRESSO} span`).should(
      HAVE_CLASS,
      "check-icon"
    );
  });

  it("should render with a clear button", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        value="cappuccino"
        showClearButton
      />
    );

    cy.checkHydrated("ic-select");
    cy.compareSnapshot({
      name: "clear-button",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.004),
    });

    cy.clickOnShadowEl("ic-select", "ic-button#clear-button");
    cy.compareSnapshot({
      name: "clear-button-cleared",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.002),
    });
    cy.checkA11yWithWait();
  });

  it("should display clear button if the 'show-clear-button' prop is supplied and an option is selected", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        showClearButton
      />
    );

    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_ENTER);
    cy.findShadowEl("ic-select", ID_CLEAR_BUTTON).should(BE_VISIBLE);
  });

  it("should clear the input if the clear button is clicked", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        showClearButton
      />
    );

    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_ENTER);
    cy.clickOnShadowEl("ic-select", ID_CLEAR_BUTTON);
    cy.findShadowEl("ic-select", IC_MENU_LI).should(NOT_BE_VISIBLE);
  });

  it("should close menu when input is clicked while open and set focus on it", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        showClearButton
      />
    );

    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.clickOnShadowEl("ic-select", DATA_VALUE_ESPRESSO);
    cy.findShadowEl("ic-select", IC_MENU_LI).should(NOT_BE_VISIBLE);
  });

  it("should close menu when an option is clicked, set as value and move focus onto the input", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        showClearButton
      />
    );

    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    cy.clickOnShadowEl("ic-select", DATA_VALUE_ESPRESSO);
    cy.findShadowEl("ic-select", IC_MENU_LI).should(NOT_BE_VISIBLE);
    cy.focused().should(HAVE_ATTR, "class", "hydrated");
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER)
      .contains("Espresso")
      .should(BE_VISIBLE);
  });

  it("should close menu when Space is pressed and move focus to the input", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        showClearButton
      />
    );

    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(" ");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.get("ic-select").shadow().find(IC_MENU_LI).should(NOT_BE_VISIBLE);
    cy.focused().should(HAVE_ATTR, "class", "hydrated");
  });

  it("should close menu when Enter is pressed and set focus to the input", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.findShadowEl("ic-select", DATA_VALUE_ESPRESSO).type(TYPE_ENTER);
    cy.get("ic-select").shadow().find(IC_MENU_LI).should(NOT_BE_VISIBLE);
    cy.focused().should(HAVE_ATTR, "class", "hydrated");
  });

  it("should close menu when Escape is pressed and set focus to the input", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        showClearButton
      />
    );

    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("{upArrow}");
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("{esc}");
    cy.get("ic-select").shadow().find(IC_MENU_LI).should(NOT_BE_VISIBLE);
    cy.focused().should(HAVE_ATTR, "class", "hydrated");
  });

  it("should close menu when another element on the page is clicked", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        showClearButton
      />
    );

    cy.checkHydrated("ic-select");
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.findShadowEl("ic-select", ID_CLEAR_BUTTON).should(BE_VISIBLE);
    cy.clickOnShadowEl("ic-select", ID_CLEAR_BUTTON);
    cy.get("ic-select").shadow().find(IC_MENU_LI).should(NOT_BE_VISIBLE);
  });

  it("should display the label of the value passed in using the 'value' prop as the selected option", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        value="espresso"
      />
    );

    cy.checkHydrated("ic-select");
    cy.get("ic-select").shadow().find(IC_MENU_LI).should(NOT_BE_VISIBLE);
    cy.get("input").should(HAVE_VALUE, "espresso");
  });

  it("should render options with descriptions", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptionsDescriptions}
      />
    );

    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    cy.get("ic-select")
      .shadow()
      .contains("What is your favourite coffee?")
      .should(BE_VISIBLE);
    cy.findShadowEl("ic-select", IC_MENU_LI)
      .should(BE_VISIBLE)
      .should(HAVE_LENGTH, "3")
      .each(($t1) => {
        cy.log($t1.text());
      });

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "descriptions-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.05),
    });
  });

  it("should render the placeholder", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptionsDescriptions}
        placeholder="Placeholder goes here"
      />
    );

    cy.checkHydrated("ic-select");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "custom-placeholder",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.004),
    });

    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER)
      .contains("Placeholder goes here")
      .should(BE_VISIBLE);
  });

  it("should render as disabled correctly", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeDisabledOption}
        disabled
      />
    );

    cy.checkHydrated("ic-select");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "disabled",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.002),
    });

    cy.get("ic-select").should(HAVE_CLASS, "ic-select-disabled hydrated");
    cy.findShadowEl("ic-select", "button").should(BE_DISABLED);
  });

  it("should prevent click on disabled options", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeDisabledOption}
      />
    );

    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "disabled-options-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
    });
  });

  it("should set aria-disabled and skip focus when option disabled", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeDisabledOption}
      />
    );

    cy.checkHydrated("ic-select");
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    cy.findShadowEl("ic-select", "[aria-disabled='true']").should(
      NOT_BE_FOCUSED
    );
  });

  it("should render as required correctly", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        required
      />
    );

    cy.checkHydrated("ic-select");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "required",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.003),
    });

    cy.get("ic-select")
      .shadow()
      .contains("What is your favourite coffee? *")
      .should(BE_VISIBLE);
    cy.get('[required="true"]').should(BE_VISIBLE);
  });

  it("should render selected value as text when read-only", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        value="cappuccino"
        readonly
      />
    );

    cy.checkHydrated("ic-select");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "readonly",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });

    cy.get("ic-select")
      .shadow()
      .contains("What is your favourite coffee?")
      .should(BE_VISIBLE);
    cy.findShadowEl("ic-select", IC_TYPOGRAPHY).should(
      HAVE_CLASS,
      "readonly-label ic-typography-label hydrated"
    );
    cy.get(".ic-input").should(HAVE_VALUE, "cappuccino");
  });

  it("should render options as groups if they have children", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={groupCoffeeOption}
      />
    );

    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    cy.findShadowEl("ic-select", SC_IC_MENU_TYPOGRAPHY)
      .should(HAVE_LENGTH, "6")
      .each(($e1) => {
        cy.wrap($e1)
          .invoke("text")
          .then((group) => {
            cy.log(group);
          });
      });

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "groups-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.021),
    });
  });

  it("should render and focus child options correctly", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={groupCoffeeOption}
      />
    );

    cy.checkHydrated("ic-select");
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    cy.findShadowEl("ic-select", SC_IC_MENU_TYPOGRAPHY)
      .should(HAVE_LENGTH, "6")
      .each(($e1) => {
        cy.wrap($e1)
          .invoke("text")
          .then((childgroup) => {
            cy.log(childgroup);
          });
        cy.findShadowEl("ic-select", DATA_LABEL_CAPPUCCINO)
          .focused()
          .should(HAVE_FOCUS);
        cy.findShadowEl("ic-select", '[data-label="Flat white"]')
          .focused()
          .should(HAVE_FOCUS);
        cy.findShadowEl("ic-select", '[data-label="Filter"]')
          .focused()
          .should(HAVE_FOCUS);
        cy.findShadowEl("ic-select", '[data-label="Latte"]')
          .focused()
          .should(HAVE_FOCUS);
      });

    it("should render options at the top of the menu if they are recommended", () => {
      mount(
        <IcSelect
          label="What is your favourite coffee?"
          options={recommendedCoffeeOption}
        />
      );

      cy.checkHydrated("ic-select");
      cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);

      cy.checkA11yWithWait();
      cy.compareSnapshot({
        name: "recommended-open",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
      });

      cy.checkShadowElVisible("ic-select", IC_MENU_LI);
      cy.findShadowEl("ic-select", ".last-recommended-option ").should("exist");
    });
  });

  it("should set aria-invalid if validation status is 'error'", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={validationCoffeeOption}
        validationStatus="error"
        validationText="Error message"
      />
    );

    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    cy.get("ic-select").shadow().find('[aria-invalid="true"]').should("exist");
  });

  it("should set the aria-label correctly if an option has a description", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptionsDescriptions}
      />
    );

    cy.checkHydrated("ic-select");
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    cy.findShadowEl(
      "ic-select",
      '[aria-label="Cappuccino, Coffee frothed up with pressurised steam"]'
    ).should("exist");
    cy.findShadowEl(
      "ic-select",
      '[aria-label="Americano, Espresso coffee diluted with hot water"]'
    ).should("exist");
    cy.findShadowEl(
      "ic-select",
      '[aria-label="Mocha, Coffee with chocolate"]'
    ).should("exist");
  });

  it("should set the aria-label correctly if an option is within a group", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={groupCoffeeOption}
      />
    );

    cy.checkHydrated("ic-select");
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    cy.findShadowEl(
      "ic-select",
      '[aria-label="Cappuccino, Fancy group"]'
    ).should("exist");
    cy.findShadowEl(
      "ic-select",
      '[aria-label="Flat white, Fancy group"]'
    ).should("exist");
    cy.findShadowEl("ic-select", '[aria-label="Filter, Boring group"]').should(
      "exist"
    );
    cy.findShadowEl("ic-select", '[aria-label="Latte, Boring group"]').should(
      "exist"
    );
  });

  it("should set the aria-label correctly if an option has a description and is within a group", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={groupAndDescriptionCoffeeOption}
      />
    );

    cy.checkHydrated("ic-select");
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    cy.findShadowEl(
      "ic-select",
      '[aria-label="Cappuccino, Coffee frothed up with pressurised steam, Fancy group"]'
    ).should("exist");
  });

  it("should call icFocus when focused", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated("ic-select");
    cy.get("ic-select").invoke("on", "icFocus", cy.stub().as("icFocus"));
    cy.get("ic-select").shadow().find(IC_MENU_UL).should(NOT_BE_FOCUSED);
    cy.findShadowEl("ic-select", "button").focus();
    cy.findShadowEl("ic-select", "button").last().should(HAVE_FOCUS);
    cy.get("@icFocus").should(HAVE_BEEN_CALLED_ONCE);
  });

  it("should call icBlur when it loses focus", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.get("ic-select").invoke("on", "icBlur", cy.stub().as("icBlur"));
    cy.findShadowEl("ic-select", "button").focus();
    cy.findShadowEl("ic-select", "button").should(HAVE_FOCUS);
    cy.get("ic-select").blur();
    cy.get("@icBlur").should(HAVE_BEEN_CALLED);
  });

  it("should display a loading message and then the options when fetching options externally", () => {
    mount(<LoadingSelectNoTimeout />);

    cy.checkHydrated("ic-select");
    cy.get("ic-button").click();
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", "ic-loading-indicator").should("exist");
    cy.get("ic-select").invoke("prop", "options", coffeeOptions);
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", DATA_LABEL_ESPRESSO).should(BE_VISIBLE);
  });

  it("should display a retry button and a custom loading error when it times out and should not update the options", () => {
    mount(<LoadingSelect />);

    cy.checkHydrated("ic-select");
    cy.get("ic-button").click();
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.get("ic-select").shadow().find(IC_TYPOGRAPHY).contains(LOADING_MESSAGE);
    cy.wait(600);
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.get("ic-select").shadow().find(RETRY_BUTTON).should(BE_VISIBLE);
    cy.get("ic-select").shadow().find(IC_TYPOGRAPHY).contains("Loading Error");
  });

  it("should focus the retry button on tab and emit icBlur and close the menu when blurring", () => {
    mount(<LoadingSelect />);

    cy.get("ic-select").invoke("on", "icFocus", cy.stub().as("icFocus"));

    cy.get("ic-button").click();
    cy.wait(600);
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", RETRY_BUTTON).shadow().find("button").focus();
    cy.get("@icFocus").should(HAVE_BEEN_CALLED_ONCE);
    cy.checkShadowElVisible("ic-select", IC_MENU_UL);

    cy.get("ic-select").invoke("on", "icBlur", cy.stub().as("icBlur"));
    cy.get("ic-select").blur();
    cy.get("@icBlur").should(HAVE_BEEN_CALLED);
    cy.findShadowEl("ic-select", IC_MENU_UL).should(NOT_BE_VISIBLE);
  });

  it("should retry loading and keep the menu open when retry button is clicked", () => {
    mount(<LoadingSelect />);

    cy.get("ic-select").invoke(
      "on",
      "icRetryLoad",
      cy.stub().as("icRetryLoad")
    );

    cy.get("ic-button").click();
    cy.wait(600);
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.checkShadowElVisible("ic-select", IC_MENU_UL);

    cy.findShadowEl("ic-select", RETRY_BUTTON).click();
    cy.get("@icRetryLoad").should(HAVE_BEEN_CALLED);
    cy.findShadowEl("ic-select", IC_TYPOGRAPHY).should(
      CONTAIN_TEXT,
      LOADING_MESSAGE
    );
  });

  it("should retry loading and keep the menu open when retry button is pressed with Enter", () => {
    mount(<LoadingSelect />);

    cy.get("ic-select").invoke(
      "on",
      "icRetryLoad",
      cy.stub().as("icRetryLoad")
    );

    cy.get("ic-button").click();
    cy.wait(600);
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.checkShadowElVisible("ic-select", IC_MENU_UL);

    cy.findShadowEl("ic-select", RETRY_BUTTON)
      .shadow()
      .find("button")
      .focus()
      .type(TYPE_ENTER);
    cy.get("@icRetryLoad").should(HAVE_BEEN_CALLED);
    cy.findShadowEl("ic-select", IC_TYPOGRAPHY).should(
      CONTAIN_TEXT,
      LOADING_MESSAGE
    );
  });

  it("should filter options when search match position is set to start", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchMatchPosition="start"
      />
    );

    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("c");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    cy.findShadowEl("ic-select", "ic-menu")
      .contains("Cappuccino")
      .should(HAVE_TEXT, "Cappuccino");
  });

  it("should render hidden input value when on initial load with default value", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", DATA_LABEL_ESPRESSO).should(
      HAVE_TEXT,
      "Espresso"
    );
  });

  it("should submit hidden input value when updating value, pressing reset to initial value and then submitting ", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        showClearButton
      />
    );

    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", DATA_LABEL_ESPRESSO).should(
      HAVE_TEXT,
      "Espresso"
    );
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_BACKSPACE);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_ENTER);
    cy.get("ic-select").shadow().find(IC_MENU_LI).should(BE_VISIBLE);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_ENTER);
    cy.findShadowEl("ic-select", '[data-label="Double Espresso"]')
      .should(BE_VISIBLE)
      .should(HAVE_ATTR, ARIA_SELECTED);
    cy.findShadowEl("ic-select", ID_CLEAR_BUTTON).should(BE_VISIBLE);
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", DATA_LABEL_ESPRESSO)
      .should(HAVE_TEXT, "Espresso")
      .should("exist");
  });

  it("should scroll menu", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
      />
    );

    cy.checkHydrated("ic-select");
    cy.get("ic-select").should(HAVE_CLASS, "hydrated");
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("Ko");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.get("ic-select").shadow().find(IC_MENU_LI).should(BE_VISIBLE);
    cy.findShadowEl(
      "ic-select",
      '[aria-label="Latte macchiato"]'
    ).scrollIntoView();
    cy.findShadowEl("ic-select", DATA_LABEL_CAPPUCCINO).scrollIntoView();
  });

  it("should only highlight and select enabled options in searchable with arrowDown", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeDisabledOption}
      />
    );

    cy.checkHydrated("ic-select");
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("Test");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.findShadowEl("ic-select", DATA_LABEL_CAPPUCCINO).should(
      HAVE_CLASS,
      "option sc-ic-menu"
    );
    cy.findShadowEl("ic-select", '[aria-label="Americano"]').should(
      HAVE_CLASS,
      DISABLED_OPTION_MENU
    );
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_ENTER);
    cy.get(".ic-input").should(HAVE_VALUE, "cappuccino");
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_ENTER);
    cy.get(".ic-input").should(HAVE_VALUE, "mocha");
  });

  it("should only highlight and select enabled options in searchable with arrowUp", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeDisabledOption}
      />
    );

    cy.checkHydrated("ic-select");
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("Test");
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("{upArrow}");
    cy.findShadowEl("ic-select", DATA_LABEL_CAPPUCCINO).should(
      HAVE_CLASS,
      "option sc-ic-menu"
    );
    cy.findShadowEl("ic-select", '[aria-label="Americano"]').should(
      HAVE_CLASS,
      DISABLED_OPTION_MENU
    );
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_ENTER);
    cy.get(".ic-input").should(HAVE_VALUE, "mocha");
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("{upArrow}");
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_ENTER);
    cy.get(".ic-input").should(HAVE_VALUE, "cappuccino");
  });

  it("should reset to initial value on form reset", () => {
    mount(
      <>
        <form>
          <button type="reset" id="resetButton">
            Reset
          </button>
          <IcSelect
            label="What is your favourite coffee?"
            options={coffeeOptions}
          />
        </form>
      </>
    );

    cy.checkHydrated("ic-select");
    cy.get(".ic-input").should(HAVE_VALUE, "");

    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_ENTER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.get(".ic-input").should(HAVE_VALUE, "espresso");

    cy.get("#resetButton").click();
    cy.get(".ic-input").should(HAVE_VALUE, "");
  });

  it("should render", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
  });

  it("should render a native select when searchable is applied on mobile", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated("ic-select");
    cy.viewport(320, 480);
    cy.viewport("iphone-5");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
  });

  it("should render when options are disabled", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeDisabledOption}
      />
    );

    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_MENU_LI).should(
      HAVE_CLASS,
      DISABLED_OPTION_MENU
    );
  });

  it("should render options as <optgroup>s if they have children", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={groupCoffeeOption}
      />
    );

    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", SC_IC_MENU_TYPOGRAPHY)
      .should(HAVE_LENGTH, "6")
      .each(($e1) => {
        cy.wrap($e1)
          .invoke("text")
          .then((childgroup) => {
            cy.log(childgroup);
          });
      });
  });

  it("should render a required <select> when required", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        required
      />
    );

    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.get('[required="true"]').should("exist");
  });

  it("should not render a label when the 'hide-label' prop is supplied", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        hide-label
      />
    );

    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.get('[hide-label="true"]').should("exist");
    cy.get(".ic-input").should(HAVE_VALUE, "");
  });

  it("should render a disabled <select> when the 'disabled' prop is supplied", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeDisabledOption}
        disabled
      />
    );

    cy.get("ic-select").should(HAVE_CLASS, "ic-select-disabled hydrated");
    cy.findShadowEl("ic-select", "button").should(BE_DISABLED);
  });

  it("should render the selected value as text instead of rendering a <select> when read-only", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptionsReadonly}
        readonly
      />
    );

    cy.checkHydrated("ic-select");
    cy.get('[readonly="true"]').should("exist");
    cy.get("ic-select").shadow().find(IC_MENU_LI).should("exist");
  });

  it("should render the correct placeholder", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        placeholder="Test placeholder"
      />
    );

    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", "button ic-typography").should(
      HAVE_TEXT,
      "Test placeholder"
    );
  });

  it("should display the value passed in using the 'value' prop as the selected option", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        value="espresso"
      />
    );

    cy.checkHydrated("ic-select");
    cy.get("ic-select").shadow().find(IC_MENU_LI).should(NOT_BE_VISIBLE);
    cy.get("input").should(HAVE_VALUE, "espresso");
  });

  it("should set the correct name on the hidden input", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated("ic-select");
    cy.get("ic-select").invoke("attr", "name", "test-input-name");
    cy.get("input").invoke("prop", "name").should("eq", "test-input-name");
  });

  it("should call icChange when the selected option is changed", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated("ic-select");
    cy.get("ic-select").invoke("on", "icChange", cy.stub().as("icChanges"));
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_ENTER);
    cy.get(".ic-input").should(HAVE_VALUE, "espresso");
  });

  it("should call icFocus when focusing the select and icBlur when it loses focus", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated("ic-select");
    cy.get("ic-select").invoke("on", "icFocus", cy.stub().as("icFocus"));
    cy.get("ic-select").invoke("on", "icBlur", cy.stub().as("icBlur"));
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_ENTER);
    cy.get("@icFocus").should(HAVE_BEEN_CALLED_ONCE);
    cy.get("ic-select").blur();
    cy.get("@icBlur").should(HAVE_BEEN_CALLED);
  });

  it("should not call icBlur when menu is focused", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.get("ic-select").invoke("on", "icBlur", cy.stub().as("icBlur"));
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.get("@icBlur").should(NOT_HAVE_BEEN_CALLED);
  });

  it("should set the 'placeholder' class name if no option is selected", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated("ic-select");
    cy.findShadowEl("ic-select", "button ic-typography").should(
      HAVE_CLASS,
      "value-text placeholder ic-typography-body hydrated"
    );
  });

  it("should add .menu-scroll to menu components when options height is over 320", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={manyOptions}
        value="espresso"
      />
    );

    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_MENU_UL).should(HAVE_CLASS, "menu-scroll");
  });

  it("should add .menu-scroll to menu components when options are initially set and then populated with large data set", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        value="espresso"
      />
    );

    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", "button.select-input").should(BE_VISIBLE);
    cy.get("ic-select").shadow().find("ic-menu").should(BE_VISIBLE);
    cy.findShadowEl("ic-select", IC_MENU_UL)
      .should(HAVE_CLASS, "menu sc-ic-menu menu-scroll")
      .should("exist");
  });

  it("should render with helper text", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        helperText="Enter your favourite coffee"
      />
    );

    cy.checkHydrated("ic-select");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "helper-text",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.015),
    });
  });

  it("should render with custom elements", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeCustomElements}
      />
    );

    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "custom-elements-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.018),
    });
  });

  it("should render small", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        size="small"
      />
    );

    cy.checkHydrated("ic-select");
    cy.compareSnapshot({
      name: "small",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.002),
    });

    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);

    cy.compareSnapshot({
      name: "small-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.031),
    });
  });

  it("should render large", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        size="large"
      />
    );

    cy.checkHydrated("ic-select");

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "large",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.002),
      delay: 1000,
    });

    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "large-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.031),
      delay: 1000,
    });
  });

  it("should render full width", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        fullWidth
      />
    );

    cy.checkHydrated("ic-select");

    cy.compareSnapshot({
      name: "full-width",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.002),
    });

    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "full-width-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.031),
    });
  });

  it("should render with hidden label", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        hideLabel
      />
    );

    cy.checkHydrated("ic-select");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "hidden-label",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render validation", () => {
    mount(
      <div>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          validationStatus="success"
          validationText="Success message!"
        />
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          validationStatus="warning"
          validationText="Warning message!"
        />
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          validationStatus="error"
          validationText="Error message!"
        />
      </div>
    );

    cy.checkHydrated("ic-select");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "validation",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.053),
    });
  });

  it("should render as an controlled component", () => {
    mount(<ControlledSelect />);

    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_MENU_LI)
      .should(BE_VISIBLE)
      .should(HAVE_LENGTH, "6");

    cy.get("ic-button#update-opt").click();

    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_MENU_LI)
      .should(BE_VISIBLE)
      .should(HAVE_LENGTH, "12");
  });

  it("should render as an uncontrolled component", () => {
    mount(<UncontrolledSelect />);

    cy.spy(window.console, "log").as("spyWinConsoleLog");
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.get("@spyWinConsoleLog").should(HAVE_BEEN_CALLED_WITH, "espresso");
  });
});
