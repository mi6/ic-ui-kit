/// <reference types="Cypress" />

import { mount } from "@cypress/react";
import React from "react";
import { IcSelect, IcTypography } from "../../components";
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
  HAVE_VALUE,
  NOT_BE_FOCUSED,
  NOT_BE_VISIBLE,
  NOT_HAVE_BEEN_CALLED,
  NOT_HAVE_ATTR,
  NOT_EXIST,
  NOT_HAVE_CLASS,
  EQUAL,
} from "../utils/constants";
import {
  ARIA_SELECTED,
  DATA_LABEL_CAPPUCCINO,
  DATA_LABEL_ESPRESSO,
  DATA_VALUE_CAPPUCCINO,
  DATA_VALUE_ESPRESSO,
  DATA_VALUE_AMERICANO,
  DISABLED_OPTION_MENU,
  IC_INPUT_CONTAINER,
  IC_MENU_LI,
  IC_MENU_UL,
  IC_TYPOGRAPHY,
  ID_CLEAR_BUTTON,
  LOADING_MESSAGE,
  RETRY_BUTTON,
  SC_IC_MENU_TYPOGRAPHY,
  TYPE_DOWN_ARROW,
  TYPE_ENTER,
  IC_SELECT,
  OPTION_SELECT_STUB,
  OPTION_GROUP_TITLE,
  MENU_SCROLL_CLASS,
} from "./IcSelectConstants";
import {
  ControlledSelect,
  DarkTheme,
  DarkThemeGroupDescription,
  DarkThemeReadonlyDisabled,
  DarkThemeValidation,
  DarkThemeLoadingError,
  LoadingSelect,
  LoadingSelectNoTimeout,
  UncontrolledSelect,
  coffeeCustomElements,
  coffeeDisabledOption,
  coffeeOptions,
  coffeeOptionsDescriptions,
  groupAndDescriptionCoffeeOption,
  groupCoffeeOption,
  manyOptions,
  optionsWithHiddenLabels,
  recommendedCoffeeOption,
  validationCoffeeOption,
} from "./IcSelectTestData";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const DEFAULT_TEST_THRESHOLD = 0.0;

describe("IcSelect end-to-end, visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render when no options are provided", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect label="What is your favourite coffee?" />
      </div>
    );

    cy.checkHydrated(IC_SELECT);
    cy.get(IC_SELECT);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
    });
  });

  it("should render when no options are provided - open", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect label="What is your favourite coffee?" />
      </div>
    );

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.checkShadowElVisible(IC_SELECT, IC_MENU_LI);
    cy.findShadowEl(IC_SELECT, SC_IC_MENU_TYPOGRAPHY).contains(
      "No results found"
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/no-options-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.025),
    });
  });

  it("should render options correctly", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.checkShadowElVisible(IC_SELECT, IC_MENU_LI);
    cy.findShadowEl(IC_SELECT, SC_IC_MENU_TYPOGRAPHY).should(HAVE_LENGTH, "6");
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).eq(0).contains("Espresso");
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).eq(1).contains("Double Espresso");
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).eq(2).contains("Flat White");
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).eq(3).contains("Cappuccino");
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).eq(4).contains("Americano");
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).eq(5).contains("Mocha");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/default-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.028),
    });
  });

  it("should render with an icon", () => {
    mount(
      <div style={{ padding: "10px" }}>
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
      </div>
    );

    cy.checkHydrated(IC_SELECT);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/with-icon",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
    });
  });

  it("should render with helper text", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          helperText="Enter your favourite coffee"
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/helper-text",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.036),
    });
  });

  it("should render with slotted helper text", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
        >
          <IcTypography variant="caption" slot="helper-text">
            <span>Enter your favourite coffee</span>
          </IcTypography>
        </IcSelect>
      </div>
    );

    cy.checkHydrated(IC_SELECT);

    cy.checkA11yWithWait();

    // Check positioning matches normal helper text
    cy.compareSnapshot({
      name: "/helper-text",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.036),
    });
  });

  it("should render with custom elements", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeCustomElements}
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/custom-elements-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.03),
    });
  });

  it("should test code in custom elements", () => {
    cy.spy(window, "alert").as("spyAlert");
    const clonedOptions = JSON.parse(JSON.stringify(coffeeCustomElements));
    clonedOptions[1].element.component = `<img src=x onerror=alert(12345)//>`;
    clonedOptions[2].icon = `<img src=x onerror=alert(12345)//>`;

    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={clonedOptions}
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);
    cy.wait(2000);
    cy.get("@spyAlert").should(NOT_HAVE_BEEN_CALLED);
  });

  it("should render with option labels hidden", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee size?"
          options={optionsWithHiddenLabels}
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/hidden-option-labels",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.03),
    });
  });

  it("should render small", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          size="small"
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/small",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
    });
  });

  it("should render small - open", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          size="small"
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/small-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.028),
    });
  });

  it("should render large", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          size="large"
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "/large",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
      delay: 1000,
    });
  });

  it("should render large - open", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          size="large"
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "/large-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.028),
      delay: 1000,
    });
  });

  it("should render full width", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptionsDescriptions}
          fullWidth
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);

    cy.compareSnapshot({
      name: "/full-width",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
    });
  });

  it("should render full width - open", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptionsDescriptions}
          fullWidth
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/full-width-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.028),
    });

    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.findShadowEl(IC_SELECT, DATA_VALUE_CAPPUCCINO).should(
      HAVE_ATTR,
      ARIA_SELECTED,
      "true"
    );
    cy.findShadowEl(IC_SELECT, `${DATA_VALUE_CAPPUCCINO} span`).should(
      HAVE_CLASS,
      "check-icon"
    );
    cy.compareSnapshot({
      name: "/full-width-open-selected",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.026),
    });
  });

  it("should render with hidden label", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          hideLabel
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);
    cy.get('[hide-label="true"]');

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/hidden-label",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.003),
    });
  });

  it("should render validation", () => {
    mount(
      <div style={{ padding: "10px" }}>
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

    cy.checkHydrated(IC_SELECT);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/validation",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.058),
    });
  });

  it("should display a check next to the selected option and set aria-selected when a default value is applied", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          value="espresso"
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, DATA_VALUE_ESPRESSO).should(
      HAVE_ATTR,
      ARIA_SELECTED,
      "true"
    );
    cy.findShadowEl(IC_SELECT, `${DATA_VALUE_ESPRESSO} span`).should(
      HAVE_CLASS,
      "check-icon"
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/default-value-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.029),
    });
  });

  it("should render with a clear button", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          value="cappuccino"
          showClearButton
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);
    cy.get(".ic-input").should(CONTAIN_VALUE, "cappuccino");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/clear-button",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
    });
  });

  it("should render with clear button and clear the value when clicked", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          value="cappuccino"
          showClearButton
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);
    cy.get(".ic-input").should(CONTAIN_VALUE, "cappuccino");
    cy.clickOnShadowEl(IC_SELECT, ID_CLEAR_BUTTON);
    cy.findShadowEl(IC_SELECT, '[data-value="cappuccino"]').should(
      NOT_HAVE_ATTR,
      ARIA_SELECTED,
      "true"
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/clear-button-cleared",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
    });
  });

  it("should close menu when input is clicked while open and move focus onto input", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          showClearButton
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).should(BE_VISIBLE);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).should(NOT_BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/input-focused",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
    });
  });

  it("should render the placeholder", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptionsDescriptions}
          placeholder="Placeholder goes here"
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/custom-placeholder",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.021),
    });

    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.checkShadowElVisible(IC_SELECT, IC_MENU_LI);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER)
      .contains("Placeholder goes here")
      .should(BE_VISIBLE);
  });

  it("should render as disabled correctly", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeDisabledOption}
          disabled
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);
    cy.get(IC_SELECT).should(HAVE_CLASS, "ic-select-disabled hydrated");
    cy.findShadowEl(IC_SELECT, "button").should(BE_DISABLED);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/disabled",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.003),
    });
  });

  it("should render as disabled with a default value and hide the clear button", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          disabled
          value="cappuccino"
          showClearButton
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/disabled-default-value",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should prevent click on disabled options", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeDisabledOption}
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/disabled-options-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
    });

    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.findShadowEl(IC_SELECT, DATA_VALUE_AMERICANO).should(
      HAVE_ATTR,
      ARIA_SELECTED,
      "false"
    );
    cy.get("input").should(HAVE_VALUE, "cappuccino");
  });

  it("should render as required correctly", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          required
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);
    cy.get(IC_SELECT)
      .shadow()
      .contains("What is your favourite coffee? *")
      .should(BE_VISIBLE);
    cy.get('[required="true"]').should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/required",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.021),
    });
  });

  it("should render selected value as text when read-only", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          value="cappuccino"
          readonly
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);
    cy.get(IC_SELECT)
      .shadow()
      .contains("What is your favourite coffee?")
      .should(BE_VISIBLE);
    cy.findShadowEl(IC_SELECT, IC_TYPOGRAPHY).should(
      HAVE_CLASS,
      "readonly-label ic-typography-label hydrated"
    );
    cy.get(".ic-input").should(HAVE_VALUE, "cappuccino");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/read-only",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.017),
    });
  });

  it("should render options as groups if they have children", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={groupCoffeeOption}
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.checkShadowElVisible(IC_SELECT, IC_MENU_LI);
    cy.findShadowEl(IC_SELECT, SC_IC_MENU_TYPOGRAPHY).should(HAVE_LENGTH, "6");
    cy.findShadowEl(IC_SELECT, SC_IC_MENU_TYPOGRAPHY)
      .eq(0)
      .should(HAVE_CLASS, OPTION_GROUP_TITLE)
      .contains("Fancy");
    cy.findShadowEl(IC_SELECT, SC_IC_MENU_TYPOGRAPHY)
      .eq(1)
      .should(NOT_HAVE_CLASS, OPTION_GROUP_TITLE)
      .contains("Cappuccino");
    cy.findShadowEl(IC_SELECT, SC_IC_MENU_TYPOGRAPHY)
      .eq(2)
      .should(NOT_HAVE_CLASS, OPTION_GROUP_TITLE)
      .contains("Flat white");
    cy.findShadowEl(IC_SELECT, SC_IC_MENU_TYPOGRAPHY)
      .eq(3)
      .should(HAVE_CLASS, OPTION_GROUP_TITLE)
      .contains("Boring");
    cy.findShadowEl(IC_SELECT, SC_IC_MENU_TYPOGRAPHY)
      .eq(4)
      .should(NOT_HAVE_CLASS, OPTION_GROUP_TITLE)
      .contains("Filter");
    cy.findShadowEl(IC_SELECT, SC_IC_MENU_TYPOGRAPHY)
      .eq(5)
      .should(NOT_HAVE_CLASS, OPTION_GROUP_TITLE)
      .contains("Latte");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/groups-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.026),
    });
  });

  it("should render options at the top of the menu if they are recommended", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={recommendedCoffeeOption}
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.checkShadowElVisible(IC_SELECT, IC_MENU_LI);
    cy.findShadowEl(IC_SELECT, ".last-recommended-option ");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/recommended-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.035),
    });
  });

  it("should render options with descriptions", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptionsDescriptions}
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.checkShadowElVisible(IC_SELECT, IC_MENU_LI);
    cy.get(IC_SELECT)
      .shadow()
      .contains("What is your favourite coffee?")
      .should(BE_VISIBLE);
    cy.findShadowEl(IC_SELECT, IC_MENU_LI)
      .should(BE_VISIBLE)
      .should(HAVE_LENGTH, "3");
    cy.findShadowEl(IC_SELECT, SC_IC_MENU_TYPOGRAPHY)
      .eq(0)
      .should(HAVE_CLASS, "ic-typography-body")
      .contains("Cappuccino");
    cy.findShadowEl(IC_SELECT, SC_IC_MENU_TYPOGRAPHY)
      .eq(1)
      .should(HAVE_CLASS, "option-description")
      .contains(
        "An espresso-based drink traditionally composed of equal parts espresso, steamed milk, and milk foam, creating a balanced flavor and velvety texture"
      );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/descriptions-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.062),
    });
  });

  it("should display clear button if the 'show-clear-button' prop is supplied and an option is selected", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        showClearButton
      />
    );

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, ID_CLEAR_BUTTON).should(NOT_EXIST);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_ENTER);
    cy.findShadowEl(IC_SELECT, ID_CLEAR_BUTTON).should(BE_VISIBLE);
  });

  it("should select options with custom elements", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeCustomElements}
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).eq(1).click();
    cy.get(".ic-input").should(CONTAIN_VALUE, "Lat");
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).eq(2).click();
    cy.get(".ic-input").should(CONTAIN_VALUE, "Ame");
  });

  it("should display a check next to the selected option and set aria-selected", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptionsDescriptions}
      />
    );

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.findShadowEl(IC_SELECT, DATA_VALUE_CAPPUCCINO).should(
      HAVE_ATTR,
      ARIA_SELECTED,
      "true"
    );
    cy.findShadowEl(IC_SELECT, `${DATA_VALUE_CAPPUCCINO} span`).should(
      HAVE_CLASS,
      "check-icon"
    );
    cy.compareSnapshot({
      name: "/descriptions-open-selected",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.026),
    });
  });

  it("should open, set focus on menu and set aria-expanded to 'true' when input clicked", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, "button").should(HAVE_ATTR, "aria-expanded");
    cy.findShadowEl(IC_SELECT, IC_MENU_UL)
      .should(BE_VISIBLE)
      .should(HAVE_FOCUS);
  });

  it("should call icChange and icOptionSelect when an option is highlighted in the menu", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated(IC_SELECT);
    cy.get(IC_SELECT).invoke("on", "icChange", cy.stub().as("icChange"));
    cy.get(IC_SELECT).invoke(
      "on",
      "icOptionSelect",
      cy.stub().as("icOptionSelect")
    );

    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);

    cy.findShadowEl(IC_SELECT, IC_MENU_LI)
      .eq(0)
      .should(HAVE_ATTR, ARIA_SELECTED, "true");
    cy.get("@icChange").should(HAVE_BEEN_CALLED_ONCE);
    cy.get(OPTION_SELECT_STUB).should(HAVE_BEEN_CALLED_ONCE);
  });

  it("should call icOptionSelect on Enter when selectOnEnter prop is set to true", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        selectOnEnter
      />
    );

    cy.checkHydrated(IC_SELECT);
    cy.get(IC_SELECT).invoke(
      "on",
      "icOptionSelect",
      cy.stub().as("icOptionSelect")
    );

    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER).wait(250);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).realPress("ArrowDown");
    cy.get(OPTION_SELECT_STUB).should(NOT_HAVE_BEEN_CALLED);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER).wait(250);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).realPress("Enter");
    cy.findShadowEl(IC_SELECT, IC_MENU_LI)
      .eq(0)
      .should(HAVE_ATTR, ARIA_SELECTED, "true");
    cy.get(OPTION_SELECT_STUB).should(HAVE_BEEN_CALLED_ONCE);
  });

  it("should not accept values that aren't included in the list of options", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        value="A random value"
      />
    );
    cy.checkHydrated(IC_SELECT);

    cy.findShadowEl(IC_SELECT, IC_TYPOGRAPHY).should(
      CONTAIN_TEXT,
      "Select an option"
    );
    cy.get("input").should(HAVE_VALUE, "");
  });

  it("should apply focus on menu and display expanded icon when opened, and set option as value when clicked", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_MENU_UL).should(HAVE_FOCUS);
    cy.findShadowEl(IC_SELECT, ".expand-icon").should(
      HAVE_CLASS,
      "expand-icon expand-icon-open"
    );
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).eq(0).click();
    cy.get(".ic-input").should(CONTAIN_VALUE, "espresso");
  });

  it("should apply focus on last option and set as value when Up Arrow is pressed", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type("{upArrow}");
    cy.checkShadowElVisible(IC_SELECT, IC_MENU_LI);
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).eq(5).should(HAVE_FOCUS);
    cy.get(".ic-input").should(CONTAIN_VALUE, "mocha");
  });

  it("should open menu when an option is selected, apply focus on option and set as value when Down Arrow is pressed", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).eq(0).click();
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).eq(1).should(HAVE_FOCUS);
    cy.get(".ic-input").should(CONTAIN_VALUE, "doubleespresso");
  });

  it("should move focus to first option and set as value when focus is on last option and Down Arrow is pressed", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type("{upArrow}");
    cy.get(".ic-input").should(CONTAIN_VALUE, "mocha");
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.get(".ic-input").should(CONTAIN_VALUE, "espresso");
  });

  it("should move focus to previous option and set as value when Up Arrow is pressed", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type("{upArrow}");
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type("{upArrow}");
    cy.get(".ic-input").should(CONTAIN_VALUE, "americano");
  });

  it("should move focus to last option and set as value when focus is on first option and Up Arrow is pressed", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type("{upArrow}");
    cy.get(".ic-input").should(CONTAIN_VALUE, "mocha");
  });

  it("should open menu when enter is pressed ", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).realPress("Tab");
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).realPress("Enter");
    cy.checkShadowElVisible(IC_SELECT, IC_MENU_LI);
  });

  it("should move focus to first option and set as value when Home is pressed", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).eq(3).click();
    cy.get(".ic-input").should(CONTAIN_VALUE, "cappuccino");
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).realPress("Home");
    cy.get(".ic-input").should(CONTAIN_VALUE, "espresso");
  });

  it("should move focus to last option and set as value when End is pressed", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).eq(3).click();
    cy.get(".ic-input").should(CONTAIN_VALUE, "cappuccino");
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).realPress("End");
    cy.get(".ic-input").should(CONTAIN_VALUE, "mocha");
  });

  it("should render and focus child options correctly", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={groupCoffeeOption}
      />
    );

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.checkShadowElVisible(IC_SELECT, IC_MENU_LI);
    cy.findShadowEl(IC_SELECT, SC_IC_MENU_TYPOGRAPHY).should(HAVE_LENGTH, "6");
    cy.findShadowEl(IC_SELECT, DATA_LABEL_CAPPUCCINO)
      .focused()
      .should(HAVE_FOCUS);
    cy.findShadowEl(IC_SELECT, '[data-label="Flat white"]')
      .focused()
      .should(HAVE_FOCUS);
    cy.findShadowEl(IC_SELECT, '[data-label="Filter"]')
      .focused()
      .should(HAVE_FOCUS);
    cy.findShadowEl(IC_SELECT, '[data-label="Latte"]')
      .focused()
      .should(HAVE_FOCUS);
  });

  it("should close menu when an option is clicked and move focus onto the input", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        showClearButton
      />
    );

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.checkShadowElVisible(IC_SELECT, IC_MENU_LI);
    cy.clickOnShadowEl(IC_SELECT, DATA_VALUE_ESPRESSO);
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).should(NOT_BE_VISIBLE);
    cy.focused().should(HAVE_ATTR, "class", "hydrated");
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER)
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

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.checkShadowElVisible(IC_SELECT, IC_MENU_LI);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).realPress("Space");
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).should(NOT_BE_VISIBLE);
    cy.focused().should(HAVE_ATTR, "class", "hydrated");
  });

  it("should close menu when Enter is pressed and set focus to the input", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.findShadowEl(IC_SELECT, DATA_VALUE_ESPRESSO).realPress("Enter");
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).should(NOT_BE_VISIBLE);
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

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type("{upArrow}");
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).realPress("Escape");
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).should(NOT_BE_VISIBLE);
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

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).should(BE_VISIBLE);
    cy.findShadowEl(IC_SELECT, ID_CLEAR_BUTTON).should(BE_VISIBLE);
    cy.clickOnShadowEl(IC_SELECT, ID_CLEAR_BUTTON);
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).should(NOT_BE_VISIBLE);
  });

  it("should display the label of the value passed in using the 'value' prop as the selected option", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        value="espresso"
      />
    );

    cy.checkHydrated(IC_SELECT);
    cy.get(IC_SELECT).shadow().find(IC_MENU_LI).should(NOT_BE_VISIBLE);
    cy.get("input").should(HAVE_VALUE, "espresso");
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

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.checkShadowElVisible(IC_SELECT, IC_MENU_LI);
    cy.get(IC_SELECT).shadow().find('[aria-invalid="true"]');
  });

  it("should set the aria-label correctly if an option has a description", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptionsDescriptions}
      />
    );

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.checkShadowElVisible(IC_SELECT, IC_MENU_LI);
    cy.findShadowEl(
      IC_SELECT,
      '[aria-label="Cappuccino, An espresso-based drink traditionally composed of equal parts espresso, steamed milk, and milk foam, creating a balanced flavor and velvety texture"]'
    );
    cy.findShadowEl(
      IC_SELECT,
      '[aria-label="Americano, Espresso coffee diluted with hot water"]'
    );
    cy.findShadowEl(IC_SELECT, '[aria-label="Mocha, Coffee with chocolate"]');
  });

  it("should set the aria-label correctly if an option is within a group", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={groupCoffeeOption}
      />
    );

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.checkShadowElVisible(IC_SELECT, IC_MENU_LI);
    cy.findShadowEl(IC_SELECT, '[aria-label="Cappuccino, Fancy group"]');
    cy.findShadowEl(IC_SELECT, '[aria-label="Flat white, Fancy group"]');
    cy.findShadowEl(IC_SELECT, '[aria-label="Filter, Boring group"]');
    cy.findShadowEl(IC_SELECT, '[aria-label="Latte, Boring group"]');
  });

  it("should set the aria-label correctly if an option has a description and is within a group", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={groupAndDescriptionCoffeeOption}
      />
    );

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.checkShadowElVisible(IC_SELECT, IC_MENU_LI);
    cy.findShadowEl(
      IC_SELECT,
      '[aria-label="Cappuccino, An espresso-based drink traditionally composed of equal parts espresso, steamed milk, and milk foam, creating a balanced flavor and velvety texture, Fancy group"]'
    );
  });

  it("should display a loading message and then the options when fetching options externally", () => {
    mount(<LoadingSelectNoTimeout />);

    cy.checkHydrated(IC_SELECT);
    cy.get("ic-button").click();
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, "ic-loading-indicator");
    cy.findShadowEl(IC_SELECT, "ic-menu").should(HAVE_CLASS, "no-results");
    cy.get(IC_SELECT).invoke("prop", "options", coffeeOptions);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, DATA_LABEL_ESPRESSO).should(BE_VISIBLE);
    cy.findShadowEl(IC_SELECT, "ic-menu").should(NOT_HAVE_CLASS, "no-results");
  });

  it("should display a retry button and a custom loading error when it times out and should not update the options", () => {
    mount(<LoadingSelect />);

    cy.checkHydrated(IC_SELECT);
    cy.get("ic-button").click();
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.get(IC_SELECT).shadow().find(IC_TYPOGRAPHY).contains(LOADING_MESSAGE);
    cy.wait(600);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.get(IC_SELECT).shadow().find(RETRY_BUTTON).should(BE_VISIBLE);
    cy.get(IC_SELECT).shadow().find(IC_TYPOGRAPHY).contains("Loading Error");
    cy.compareSnapshot({
      name: "/loading-error-light-theme",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.042),
    });
  });

  it("should focus the retry button on tab and emit icBlur and close the menu when blurring", () => {
    mount(<LoadingSelect />);

    cy.get(IC_SELECT).invoke("on", "icFocus", cy.stub().as("icFocus"));

    cy.get("ic-button").click();
    cy.wait(600);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, RETRY_BUTTON).shadow().find("button").focus();
    cy.get("@icFocus").should(HAVE_BEEN_CALLED_ONCE);
    cy.checkShadowElVisible(IC_SELECT, IC_MENU_UL);

    cy.get(IC_SELECT).invoke("on", "icBlur", cy.stub().as("icBlur"));
    cy.get(IC_SELECT).blur();
    cy.get("@icBlur").should(HAVE_BEEN_CALLED);
    cy.findShadowEl(IC_SELECT, IC_MENU_UL).should(NOT_BE_VISIBLE);
  });

  it("should retry loading and keep the menu open when retry button is clicked", () => {
    mount(<LoadingSelect />);

    cy.get(IC_SELECT).invoke("on", "icRetryLoad", cy.stub().as("icRetryLoad"));

    cy.get("ic-button").click();
    cy.wait(600);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.checkShadowElVisible(IC_SELECT, IC_MENU_UL);

    cy.findShadowEl(IC_SELECT, RETRY_BUTTON).click();
    cy.get("@icRetryLoad").should(HAVE_BEEN_CALLED);
    cy.findShadowEl(IC_SELECT, IC_TYPOGRAPHY).should(
      CONTAIN_TEXT,
      LOADING_MESSAGE
    );
  });

  it("should retry loading and keep the menu open when retry button is pressed with Enter", () => {
    mount(<LoadingSelect />);

    cy.get(IC_SELECT).invoke("on", "icRetryLoad", cy.stub().as("icRetryLoad"));

    cy.get("ic-button").click();
    cy.wait(600);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.checkShadowElVisible(IC_SELECT, IC_MENU_UL);

    cy.findShadowEl(IC_SELECT, RETRY_BUTTON)
      .shadow()
      .find("button")
      .focus()
      .type(TYPE_ENTER);
    cy.get("@icRetryLoad").should(HAVE_BEEN_CALLED);
    cy.findShadowEl(IC_SELECT, IC_TYPOGRAPHY).should(
      CONTAIN_TEXT,
      LOADING_MESSAGE
    );
  });

  it("should set aria-disabled and skip focus when option disabled", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeDisabledOption}
      />
    );

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.checkShadowElVisible(IC_SELECT, IC_MENU_LI);
    cy.findShadowEl(IC_SELECT, "[aria-disabled='true']").should(NOT_BE_FOCUSED);
  });

  it("should only highlight and select enabled options with arrowDown", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeDisabledOption}
      />
    );

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.checkShadowElVisible(IC_SELECT, IC_MENU_LI);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.findShadowEl(IC_SELECT, DATA_LABEL_CAPPUCCINO).should(
      HAVE_CLASS,
      "option sc-ic-menu"
    );
    cy.findShadowEl(IC_SELECT, '[aria-label="Americano"]').should(
      HAVE_CLASS,
      DISABLED_OPTION_MENU
    );
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_ENTER);
    cy.get(".ic-input").should(HAVE_VALUE, "cappuccino");
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_ENTER);
    cy.get(".ic-input").should(HAVE_VALUE, "mocha");
  });

  it("should only highlight and select enabled options with arrowUp", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeDisabledOption}
      />
    );

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type("{upArrow}");
    cy.findShadowEl(IC_SELECT, DATA_LABEL_CAPPUCCINO).should(
      HAVE_CLASS,
      "option sc-ic-menu"
    );
    cy.findShadowEl(IC_SELECT, '[aria-label="Americano"]').should(
      HAVE_CLASS,
      DISABLED_OPTION_MENU
    );
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_ENTER);
    cy.get(".ic-input").should(HAVE_VALUE, "mocha");
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type("{upArrow}");
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_ENTER);
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

    cy.checkHydrated(IC_SELECT);
    cy.get(".ic-input").should(HAVE_VALUE, "");

    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_ENTER);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.get(".ic-input").should(HAVE_VALUE, "espresso");

    cy.get("#resetButton").click();
    cy.get(".ic-input").should(HAVE_VALUE, "");
  });

  it("should render a native select when searchable is applied on mobile", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated(IC_SELECT);
    cy.viewport(320, 480);
    cy.viewport("iphone-5");
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.checkShadowElVisible(IC_SELECT, IC_MENU_LI);
  });

  it("should set the correct name on the hidden input", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated(IC_SELECT);
    cy.get(IC_SELECT).invoke("attr", "name", "test-input-name");
    cy.get("input").invoke("prop", "name").should(EQUAL, "test-input-name");
  });

  it("should call icChange when the selected option is changed", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated(IC_SELECT);
    cy.get(IC_SELECT).invoke("on", "icChange", cy.stub().as("icChange"));
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_ENTER);
    cy.get(".ic-input").should(HAVE_VALUE, "espresso");
    cy.get("@icChange").should(HAVE_BEEN_CALLED);
  });

  it("should call icFocus when focusing the select and icBlur when it loses focus", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated(IC_SELECT);
    cy.get(IC_SELECT).invoke("on", "icFocus", cy.stub().as("icFocus"));
    cy.get(IC_SELECT).invoke("on", "icBlur", cy.stub().as("icBlur"));
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_ENTER);
    cy.get("@icFocus").should(HAVE_BEEN_CALLED_ONCE);
    cy.get(IC_SELECT).blur();
    cy.get("@icBlur").should(HAVE_BEEN_CALLED);
  });

  it("should not call icBlur when menu is focused", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.get(IC_SELECT).invoke("on", "icBlur", cy.stub().as("icBlur"));
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.get("@icBlur").should(NOT_HAVE_BEEN_CALLED);
  });

  it("should call icOpen, icClear and icClose events", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        showClearButton
        value="cappuccino"
      />
    );

    cy.checkHydrated(IC_SELECT);
    cy.get(IC_SELECT).invoke("on", "icOpen", cy.stub().as("icOpen"));
    cy.get(IC_SELECT).invoke("on", "icClear", cy.stub().as("icClear"));
    cy.get(IC_SELECT).invoke("on", "icClose", cy.stub().as("icClose"));

    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.get("@icOpen").should(HAVE_BEEN_CALLED_ONCE);
    cy.clickOnShadowEl(IC_SELECT, ID_CLEAR_BUTTON);
    cy.get("@icClear").should(HAVE_BEEN_CALLED_ONCE);
    cy.get("@icClose").should(HAVE_BEEN_CALLED_ONCE);
  });

  it("should set the 'placeholder' class name if no option is selected", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, "button ic-typography").should(
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

    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_MENU_UL).should(
      HAVE_CLASS,
      MENU_SCROLL_CLASS
    );
  });

  it("should include group titles when applying menu scrollbar", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={[
            {
              label: "Fancy",
              children: [
                { label: "Cappuccino", value: "Cap" },
                { label: "Flat white", value: "Fla" },
                {
                  label: "Macchiato",
                  value: "Mac",
                },
              ],
            },
            {
              label: "Boring",
              children: [
                { label: "Filter", value: "Fil" },
                { label: "Latte", value: "Lat" },
                {
                  label: "Americano",
                  value: "Ame",
                },
              ],
            },
          ]}
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.checkShadowElVisible(IC_SELECT, IC_MENU_LI);

    cy.findShadowEl(IC_SELECT, IC_MENU_UL).should(
      HAVE_CLASS,
      MENU_SCROLL_CLASS
    );
  });

  it("should add .menu-scroll to menu components when options are initially set and then populated with large data set", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        value="espresso"
      />
    );

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, "button.select-input").should(BE_VISIBLE);
    cy.get(IC_SELECT).shadow().find("ic-menu").should(BE_VISIBLE);
    cy.findShadowEl(IC_SELECT, IC_MENU_UL).should(
      NOT_HAVE_CLASS,
      MENU_SCROLL_CLASS
    );
    cy.get(IC_SELECT).invoke("prop", "options", manyOptions);
    cy.findShadowEl(IC_SELECT, IC_MENU_UL).should(
      HAVE_CLASS,
      "menu sc-ic-menu menu-scroll"
    );
  });

  it("should scroll menu", () => {
    mount(
      <IcSelect label="What is your favourite coffee?" options={manyOptions} />
    );

    cy.checkHydrated(IC_SELECT);
    cy.get(IC_SELECT).should(HAVE_CLASS, "hydrated");
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type("Ko");
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).should(BE_VISIBLE);
    cy.findShadowEl(
      IC_SELECT,
      '[aria-label="Latte macchiato"]'
    ).scrollIntoView();
    cy.findShadowEl(IC_SELECT, DATA_LABEL_CAPPUCCINO).scrollIntoView();
  });

  it("should render as an controlled component", () => {
    mount(<ControlledSelect />);

    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_MENU_LI)
      .should(BE_VISIBLE)
      .should(HAVE_LENGTH, "6");

    cy.get("ic-button#update-opt").click();

    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_MENU_LI)
      .should(BE_VISIBLE)
      .should(HAVE_LENGTH, "12");
  });

  it("should bring focus back to the input when 'no results' is selected", () => {
    mount(<IcSelect label="What is your favourite coffee?" options={[]} />);

    cy.checkHydrated(IC_SELECT);
    cy.get(IC_SELECT).should(HAVE_CLASS, "hydrated");
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).should(BE_VISIBLE);
    cy.realPress("{enter}");
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).should(NOT_BE_VISIBLE);
    cy.get(IC_SELECT).should(HAVE_FOCUS);
    cy.get(".ic-input").should(HAVE_VALUE, "");
  });

  it("should render as an uncontrolled component", () => {
    mount(<UncontrolledSelect />);

    cy.spy(window.console, "log").as("spyWinConsoleLog");
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.get("@spyWinConsoleLog").should(HAVE_BEEN_CALLED_WITH, "espresso");
  });

  it("should render with dark theme", () => {
    mount(<DarkTheme />);
    cy.checkHydrated(IC_SELECT);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/dark-theme",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.058),
    });
  });

  it("should render with dark theme - menu open", () => {
    mount(<DarkTheme />);
    cy.checkHydrated(IC_SELECT);

    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/dark-theme-menu-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.063),
    });
  });

  it("should render with dark theme - with value", () => {
    mount(<DarkTheme />);
    cy.checkHydrated(IC_SELECT);

    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_ENTER);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/dark-theme-with-value",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.064),
    });
  });

  it("should render groups and descriptions with dark theme", () => {
    mount(<DarkThemeGroupDescription />);

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/dark-theme-groups-descriptions",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.072),
    });
  });

  it("should render readonly and disabled with dark theme", () => {
    mount(<DarkThemeReadonlyDisabled />);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/dark-theme-readonly-disabled",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.04),
    });
  });

  it("should render validation with dark theme", () => {
    mount(<DarkThemeValidation />);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/dark-theme-validation",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.081),
    });
  });

  it("should display loading error in dark mode", () => {
    mount(<DarkThemeLoadingError />);

    cy.checkHydrated(IC_SELECT);
    cy.get("ic-button").click();
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.get(IC_SELECT).shadow().find(IC_TYPOGRAPHY).contains(LOADING_MESSAGE);
    cy.wait(300);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.get(IC_SELECT).shadow().find(RETRY_BUTTON).should(BE_VISIBLE);
    cy.get(IC_SELECT).shadow().find(IC_TYPOGRAPHY).contains("Loading Error");
    cy.compareSnapshot({
      name: "/loading-error-dark-theme",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.043),
    });
  });
});

describe("IcSelect visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  after(() => {
    cy.disableForcedColors();
  });

  it("should render default in high contrast mode", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          value="espresso"
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER).wait(250);

    cy.compareSnapshot({
      name: "/default-value-open-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.063),
    });
  });

  it("should render with a clear button in high contrast mode", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          value="cappuccino"
          showClearButton
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);

    cy.compareSnapshot({
      name: "/clear-button-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.041),
    });
  });

  it("should render with custom elements in high contrast mode", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeCustomElements}
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER).wait(250);

    cy.compareSnapshot({
      name: "/custom-elements-open-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.054),
    });
  });

  it("should render with placeholder in high contrast mode", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptionsDescriptions}
          placeholder="Placeholder goes here"
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);

    cy.compareSnapshot({
      name: "/custom-placeholder-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.046),
    });
  });

  it("should render options with descriptions in high contrast mode", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptionsDescriptions}
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER).wait(250);

    cy.compareSnapshot({
      name: "/descriptions-open-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.096),
    });
  });

  it("should render disabled in high contrast mode", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeDisabledOption}
          disabled
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);

    cy.compareSnapshot({
      name: "/disabled-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.038),
    });
  });

  it("should render disabled options in high contrast mode", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeDisabledOption}
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER).wait(250);

    cy.compareSnapshot({
      name: "/disabled-options-open-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.055),
    });
  });

  it("should render options as groups in high contrast mode", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={groupCoffeeOption}
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER).wait(250);

    cy.compareSnapshot({
      name: "/groups-open-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.062),
    });
  });

  it("should render with helper text in high contrast mode", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          helperText="Enter your favourite coffee"
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);

    cy.compareSnapshot({
      name: "/helper-text-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.059),
    });
  });

  it("should render focused input in high contrast mode", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          showClearButton
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER).wait(250);
    cy.checkShadowElVisible(IC_SELECT, IC_MENU_LI);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER).wait(250);

    cy.compareSnapshot({
      name: "/input-focused-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.043),
    });
  });

  it("should render with no options in high contrast mode", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect label="What is your favourite coffee?" />
      </div>
    );

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER).wait(250);

    cy.compareSnapshot({
      name: "/no-options-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.051),
    });
  });

  it("should render as ready only in high contrast mode", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          value="cappuccino"
          readonly
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);

    cy.compareSnapshot({
      name: "/read-only-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.041),
    });
  });

  it("should render recommended in high contrast mode", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={recommendedCoffeeOption}
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.wait(250);

    cy.compareSnapshot({
      name: "/recommended-open-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.066),
    });
  });

  it("should render validation in high contrast mode", () => {
    mount(
      <div style={{ padding: "10px" }}>
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

    cy.checkHydrated(IC_SELECT);

    cy.compareSnapshot({
      name: "/validation-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.093),
    });
  });

  it("should render with an icon in high contrast mode", () => {
    mount(
      <div style={{ padding: "10px" }}>
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
      </div>
    );

    cy.checkHydrated(IC_SELECT);

    cy.compareSnapshot({
      name: "/with-icon-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.043),
    });
  });
});
