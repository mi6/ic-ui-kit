/// <reference types="Cypress" />
/* eslint-disable cypress/no-unnecessary-waiting */

import React from "react";
import { mount } from "@cypress/react";
import { IcSelect } from "../../components";
import { CYPRESS_AXE_OPTIONS } from "../../../cypress/utils/a11y";
import {
  coffeeOptions,
  coffeeOptionsDescriptions,
  coffeeDisabledOption,
  groupCoffeeOption,
  recommendedCoffeeOption,
  validationCoffeeOption,
  groupAndDescriptionCoffeeOption,
  searchableCoffeeOption,
  searchableDescriptionsCoffeeOption,
  searchableGroupCoffeeOption,
  coffeeOptionsReadonly,
  coffeeCustomElements,
} from "./IcSelectTestData";

const IC_INPUT_CONTAINER = "ic-input-component-container";
const IC_MENU_LI = "ic-menu ul li";
const IC_MENU_UL = "ic-menu ul";
const SC_IC_MENU_TYPOGRAPHY = ".sc-ic-menu ic-typography";
const DISABLED_OPTION_MENU = "option disabled-option sc-ic-menu";
const IC_TYPOGRAPHY = "ic-typography";
const ID_CLEAR_BUTTON = "#clear-button";
const ARIA_SELECTED = "aria-selected";
const SEARCHABLE_DEFAULT = "searchable-default";

const HAVE_LENGTH = "have.length";
const HAVE_BEEN_CALLED_ONCE = "have.been.calledOnce";
const HAVE_VALUE = "have.value";
const HAVE_CLASS = "have.class";
const BE_VISIBLE = "be.visible";
const HAVE_FOCUS = "have.focus";
const HAVE_ATTR = "have.attr";
const CONTAIN_VALUE = "contain.value";
const NOT_BE_VISIBLE = "not.be.visible";

const TYPE_DOWN_ARROW = "{downArrow}";
const TYPE_ENTER = "{enter}";
const TYPE_BACKSPACE = "{backspace}";
const DATA_VALUE_ESPRESSO = "[data-value='espresso']";
const DATA_VALUE_CAP = '[data-value="Cap"]';
const DATA_LABEL_CAPUCCINO = '[data-label="Cappuccino"]';
const DATA_LABEL_ESPRESSO = '[data-label="Espresso"]';
const INPUT_TYPE_HIDDEN = "input[type='hidden']";
const NO_RESULTS_FOUND = "No results found";

describe("IcSelect", () => {
  it("should render when no options are provided", () => {
    mount(<IcSelect label="What is your favourite coffee?" />);
    cy.checkHydrated("ic-select");
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
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    cy.findShadowEl("ic-select", SC_IC_MENU_TYPOGRAPHY)
      .should(HAVE_LENGTH, "6")
      .each(($t1) => {
        cy.log($t1.text());
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

  it("when an option is selected it should call icChange when select is focused and downArrow pressed", () => {
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

  it("when no option is selected it should open menu, apply focus style on first option and set as value when clicked and have expanded icon", () => {
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
      .should("have.text", "Espresso");
    cy.findShadowEl("ic-select", ".expand-icon")
      .should("exist")
      .should(HAVE_CLASS, "expand-icon expand-icon-open");
  });

  it("when an option is selected it should open menu when Enter is pressed ", () => {
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

  it("when an option is selected it should open menu, apply focus style on first option and set as value when Down Arrow is pressed", () => {
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

  it("when an option is selected it should move focus to first option and set as value when focus is on last option and Down Arrow is pressed", () => {
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
      ARIA_SELECTED
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
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    cy.clickOnShadowEl("ic-select", DATA_VALUE_ESPRESSO);
    cy.findShadowEl("ic-select", DATA_VALUE_ESPRESSO);
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", DATA_VALUE_ESPRESSO).should(
      HAVE_ATTR,
      ARIA_SELECTED
    );
    // cy.findShadowEl("ic-select", DATA_VALUE_ESPRESSO).should(HAVE_CLASS, "check-icon");
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

  // not sure
  it.skip("should close menu when an option is clicked, set as value and move focus onto the input", () => {
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
    cy.getWhatIsFavCoffeeQueTitle("ic-select");
    cy.findShadowEl("ic-select", IC_MENU_LI)
      .should(BE_VISIBLE)
      .should(HAVE_LENGTH, "3")
      .each(($t1) => {
        cy.log($t1.text());
      });
  });

  it("should render the placeholder", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptionsDescriptions}
        placeholder="Cappuccino"
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER)
      .contains("Cappuccino")
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
    cy.get("ic-select").should(HAVE_CLASS, "disabled hydrated");
    cy.get("ic-select").shadow().find("button").should("be.disabled");
  });

  it("should prevent click on disabled options", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeDisabledOption}
      />
    );
    cy.checkHydrated("ic-select");
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
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
      "not.be.focused"
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
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
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
        cy.findShadowEl("ic-select", DATA_LABEL_CAPUCCINO)
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
    cy.get("ic-select").shadow().find(IC_MENU_UL).should("have.not.be.focus");
    cy.findShadowEl("ic-select", "button").focus();
    cy.findShadowEl("ic-select", "button").last().should(HAVE_FOCUS);
    cy.get("@icFocus").should(HAVE_BEEN_CALLED_ONCE);
  });
  // flakey- passes when run with .only()
  it.skip("should call icBlur when it loses focus", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );
    cy.get("ic-select").invoke("on", "icBlur", cy.stub().as("icBlur"));
    cy.findShadowEl("ic-select", "button").as("btn");
    cy.findShadowEl("ic-select", "button").as("btn").should(HAVE_FOCUS);
    cy.get("ic-select").blur();
    cy.get("@icBlur").should("have.been.called");
  });

  it.skip("Loading should display a loading message and then the options when fetching options externally", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={[]}
        loading
        timeout={5000}
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.get("ic-select").shadow().find("ic-loading-indicator").should("exist");
    cy.document().invoke(
      "addEventListener",
      "icChange",
      cy.stub().as("icChange")
    );
    cy.get("@icChange").should(HAVE_BEEN_CALLED_ONCE);
    // //cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW).type(TYPE_ENTER);
    // cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    // cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    // cy.get("ic-select").shadow().find("ic-loading-indicator").should("exist");
    // cy.get("ic-select").invoke("on", "icChange", cy.stub().as("icChange"));
  });

  // only  pass when run as .only() but in group run it fails
  it.skip("should display a retry button and a custom loading error when it times out and should not update the options", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        loading
        timeout={500}
        loadingErrorLabel="Loading Error"
        options={[]}
      />
    );

    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.get("ic-select").shadow().find(IC_TYPOGRAPHY).contains("Loading...");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.get("ic-select").shadow().find("#retry-button").should(BE_VISIBLE);
    cy.get("ic-select").shadow().find(IC_TYPOGRAPHY).contains("Error");
    cy.get("ic-select").shadow().find(IC_TYPOGRAPHY).contains("Error");
  });

  // not sure
  it.skip("should focus the retry button on tab and emit icBlur and close the menu when blurring", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        loading
        timeout={5000}
        loading-error-label="Loading Error"
        options={[]}
      />
    );
    // cy.get("ic-select")
    //   .shadow()
    //   .find(IC_INPUT_CONTAINER)
    //   .should("exist");
    //   .click()
    //   .should(BE_VISIBLE);
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    //cy.get('ic-select').shadow().find('ic-loading-indicator').should('exist')

    // cy.get("ic-select")
    //   .shadow()
    //   .find("button")
    //   .focus()
    //   .last()
    //   .should(HAVE_FOCUS);
    // cy.get("@icFocus").should(HAVE_BEEN_CALLED_ONCE);
    // cy.get("ic-select").invoke("on", "icBlur", cy.stub().as("icBlur"));
    // //cy.get("ic-select").shadow().find("button").as('btn').focus().should('have.focus')
    // cy.get("ic-select").blur();
    // cy.get("@icBlur").should("have.been.called");
  });

  // retry button not working
  it.skip("should retry loading and keep the menu open when retry button is clicked", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        loading
        timeout={5000}
        loading-error-label="Loading Error"
      />
    );
    cy.get("ic-select").invoke(
      "on",
      "icRetryLoads",
      cy.stub().as("icRetryLoad")
    );
  });

  it.skip("should retry loading and keep the menu open when retry button is pressed with Enter", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        loading
        timeout={5000}
        loading-error-label="Loading Error"
      />
    );
    cy.get("ic-select").invoke(
      "on",
      "icRetryLoads",
      cy.stub().as("icRetryLoad")
    );
  });

  it("searchable should open menu when character is entered in input field and filter options", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    cy.get("ic-select").shadow().find("input").type("ca");
    cy.findShadowEl("ic-select", IC_MENU_LI)
      .should(HAVE_LENGTH, "3")
      .contains("Café au lait")
      .each(($e1) => {
        cy.wrap($e1)
          .invoke("text")
          .then((filterOption) => {
            cy.log(filterOption);
          });
      });
  });

  it("searchable should keep the same options when characters are entered and the menu is reopened", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    cy.get("ic-select").shadow().find("input").click();
    cy.get("ic-select").shadow().find("input").type("foo");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_MENU_LI)
      .contains(NO_RESULTS_FOUND)
      .should(BE_VISIBLE);
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_MENU_LI)
      .contains(NO_RESULTS_FOUND)
      .should(BE_VISIBLE);
  });

  it("should display no results state when search term matches none of the options", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    cy.get("ic-select").shadow().find("input").click();
    cy.get("ic-select").shadow().find("input").type("zZ");
    cy.findShadowEl("ic-select", IC_MENU_LI)
      .contains(NO_RESULTS_FOUND)
      .should(BE_VISIBLE);
  });

  it("should filter options accordingly when Backspace is pressed", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    cy.findShadowEl("ic-select", "input").click();
    cy.findShadowEl("ic-select", "input").type("fi");
    cy.findShadowEl("ic-select", "input").type(TYPE_BACKSPACE);
    cy.findShadowEl("ic-select", "input").click();
    cy.findShadowEl("ic-select", IC_MENU_LI)
      .should(HAVE_LENGTH, "2")
      .each(($e1) => {
        cy.wrap($e1)
          .invoke("text")
          .then((filterOp) => {
            cy.log(filterOp);
          });
      });
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
      .should("have.text", "Cappuccino");
  });

  it("should include option descriptions in search", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableDescriptionsCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("mo");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.get("ic-select").shadow().find(".expand-icon").should("exist").click();
    cy.findShadowEl("ic-select", IC_MENU_LI)
      .should(HAVE_LENGTH, "1")
      .should("have.text", "MochaCoffee with chocolate")
      .each(($e1) => {
        cy.wrap($e1)
          .invoke("text")
          .then((filterOp) => {
            cy.log(filterOp);
          });
      });
  });

  it("should not include group titles in search", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableGroupCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("b");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_MENU_LI)
      .contains(NO_RESULTS_FOUND)
      .should(BE_VISIBLE);
  });

  it("should display whole group when group titles included in search", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableGroupCoffeeOption}
        searchable
        includeGroupTitlesInSearch
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("b");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_MENU_LI)
      .should(HAVE_LENGTH, "4")
      .contains("Latte")
      .each(($e1) => {
        cy.wrap($e1)
          .invoke("text")
          .then((filterOp) => {
            cy.log(filterOp);
          });
      });
  });

  it("should display a clear button which clears the input when clicked", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
        showClearButton
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("{upArrow}");
    cy.findShadowEl("ic-select", IC_MENU_UL).type(TYPE_ENTER);
    cy.clickOnShadowEl("ic-select", ID_CLEAR_BUTTON);
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("a");
    cy.clickOnShadowEl("ic-select", ID_CLEAR_BUTTON);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).should("not.have.text");
  });

  it("should emit the value as null when the input is changed after selecting an option", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
        showClearButton
      />
    );
    cy.checkHydrated("ic-select");
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("{upArrow}");
    cy.get("ic-select").invoke("on", "icChange", cy.stub().as("icChanges"));
    cy.findShadowEl("ic-select", IC_MENU_UL)
      .find(DATA_VALUE_CAP)
      .click({ force: true });
    cy.findShadowEl("ic-select", DATA_VALUE_CAP)
      .contains("Cappuccino")
      .should("have.text", "Cappuccino");
    cy.clickOnShadowEl("ic-select", ID_CLEAR_BUTTON);
  });

  it("should still filter the options when the input is changed after selecting an option", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
        showClearButton
      />
    );
    cy.checkHydrated("ic-select");
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("{upArrow}");
    cy.findShadowEl("ic-select", IC_MENU_UL)
      .find(DATA_VALUE_CAP)
      .click({ force: true });
    cy.findShadowEl("ic-select", IC_MENU_UL)
      .contains("Cappuccino")
      .should("have.text", "Cappuccino");
    for (let i = 0; i <= 3; i++) {
      cy.findShadowEl("ic-select", IC_INPUT_CONTAINER);
      cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
      cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_BACKSPACE);
      cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
      cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_BACKSPACE);
      cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    }
    cy.findShadowEl("ic-select", IC_MENU_LI)
      .should(HAVE_LENGTH, "3")
      .contains("Americano")
      .should(BE_VISIBLE)
      .each(($e1) => {
        cy.wrap($e1)
          .invoke("text")
          .then((filterOp) => {
            cy.log(filterOp);
          });
      });
  });

  it("should close menu on blur", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_ENTER);
    cy.get("ic-select").shadow().find(IC_MENU_LI).should(NOT_BE_VISIBLE);
  });

  it.skip("should emit icChange on delay", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        debounce={500}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.get("ic-select").invoke("on", "icChange", cy.stub().as("icChanges"));
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("foo");
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER)
      .wait(600)
      .find("foo")
      .should(BE_VISIBLE);
    cy.get(".ic-input").should(HAVE_VALUE, "foo");
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("bar");
    cy.get(".ic-input").should(HAVE_VALUE, "foobar");
  });

  it("should update hidden input to value typed in select searchable input", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("bar");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.get(INPUT_TYPE_HIDDEN).should(HAVE_VALUE, "bar");
  });

  it("should keep typed in hidden input value when highlighting menu options", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("cap");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.get(INPUT_TYPE_HIDDEN).should(HAVE_VALUE, "cap");
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.get(INPUT_TYPE_HIDDEN).should(HAVE_VALUE, "cap");
  });

  it("should update hidden value from typed to selected", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("o");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.get(INPUT_TYPE_HIDDEN).should(HAVE_VALUE, "o");
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.findShadowEl("ic-select", IC_MENU_LI).should(HAVE_LENGTH, "7");
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_ENTER);
    cy.findShadowEl("ic-select", IC_MENU_UL)
      .find(DATA_VALUE_CAP)
      .contains("Cappuccino")
      .should("have.text", "Cappuccino");
  });

  it("should update hidden value from typed to selected to typed", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("o");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.get(INPUT_TYPE_HIDDEN).should(HAVE_VALUE, "o");
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.findShadowEl("ic-select", IC_MENU_LI).should(HAVE_LENGTH, "7");
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_ENTER);
    cy.findShadowEl("ic-select", IC_MENU_UL)
      .find(DATA_VALUE_CAP)
      .contains("Cappuccino")
      .should("have.text", "Cappuccino");
    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type("1");
    cy.get(".ic-input").should(HAVE_VALUE, "Cappuccino1");
  });

  //not sure
  it("should update the value of the input and options when passing the value directly", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("foo");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.get(".ic-input").should(CONTAIN_VALUE, "foo");
  });

  it("should trigger icChange on input for each typed value", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.get("ic-select").invoke("on", "icChange", cy.stub().as("icChanges"));
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("f");
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER)
      .as("foo")
      .invoke("val", "f")
      .trigger("icChanges");
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("o");
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER)
      .should(BE_VISIBLE)
      .as("foo")
      .invoke("val", "f")
      .trigger("icChanges");
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("o");
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER)
      .should(BE_VISIBLE)
      .as("foo")
      .invoke("val", "f")
      .trigger("icChanges");
    cy.get(".ic-input")
      .as("foo")
      .invoke("val", "foo")
      .trigger("icChanges", { force: true });
    cy.get("@foo").should(HAVE_VALUE, "foo");
  });

  it("should not trigger icChange on highlighting menu items", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.get("ic-select").invoke("on", "icChange", cy.stub().as("icChanges"));
    cy.window().then((win) => {
      cy.spy(win, "alert").as("menuItemHighlighted");
    });
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).trigger("icChanges");
    cy.findShadowEl("ic-select", IC_MENU_UL)
      .eq(0)
      .trigger("icChanges", { force: true });
    cy.get("@menuItemHighlighted").should("not.be.called");
  });

  it("should not select a menu option when typing into the searchable input field", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("cap");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_MENU_LI).should(
      "not.have.property",
      "[aria-selected]"
    );
    cy.findShadowEl("ic-select", IC_MENU_LI).should(
      "have.not.attr",
      ARIA_SELECTED
    );
  });

  it("should not selet a menu option when one has previously been set and backspace is pressed", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("Lat");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_ENTER);
    cy.get("ic-select").shadow().find('[data-label="Latte"]').should("exist");
    for (let i = 0; i <= 5; i++) {
      cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_BACKSPACE);
    }
    cy.findShadowEl("ic-select", IC_MENU_LI).should(
      "have.not.attr",
      ARIA_SELECTED
    );
  });

  it("should display selected option when selecting a menu option and then opening and closing the menu", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("Lat");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_ENTER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).should(BE_VISIBLE);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.findShadowEl("ic-select", "li[data-value='Lat']").should(
      HAVE_ATTR,
      ARIA_SELECTED
    );
  });

  it("hidden input value when on initial load with default value ", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", DATA_LABEL_ESPRESSO).should(
      "have.text",
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
      "have.text",
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
      .should("have.text", "Espresso")
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
    cy.findShadowEl("ic-select", DATA_LABEL_CAPUCCINO).scrollIntoView();
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
    cy.findShadowEl("ic-select", DATA_LABEL_CAPUCCINO).should(
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
    cy.findShadowEl("ic-select", DATA_LABEL_CAPUCCINO).should(
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

  // can't mount reset button component
  it.skip("loading should retry loading and keep the menu open when retry button is pressed with Spacebar", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={[]}
        searchable
        loading
        timeout={500}
      />
    );
    cy.checkHydrated("ic-select");
    cy.get("ic-select").invoke(
      "on",
      "icRetryLoads",
      cy.stub().as("icRetryLoad")
    );
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", "ic-menu ul li ic-typography")
      .should(BE_VISIBLE)
      .should("have.text", "Loading Error");
    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER);
  });

  // can't mount clear button component
  it.skip("should cancel loading if the clear button is pressed mid-load", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={[]}
        searchable
        loading
        timeout={500}
        showClearButton
      />
    );
    cy.checkHydrated("ic-select");
    cy.get("ic-select").invoke("on", "icChange", cy.stub().as("icChanges"));
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", "ic-menu ul li ic-typography")
      .should(BE_VISIBLE)
      .should("have.text", "Loading Error");
  });

  // can't mount reset button component
  it.skip("should reset to initial value on form reset", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );
    cy.checkHydrated("ic-select");
    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_ENTER);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.get(".ic-input").should(HAVE_VALUE, "espresso");
  });

  it.skip("menu should not be visible on initial load if setting default value and disable filter is set", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={[]}
        searchable
        timeout={800}
      />
    );
    cy.checkHydrated("ic-select");
    cy.get("ic-select").shadow().find(IC_MENU_LI).should("not.exist");
  });

  // can't mount reset button component
  it.skip("should reset to initial value on form reset with searchable", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.get("ic-select").shadow().find(IC_MENU_LI).should(BE_VISIBLE);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_ENTER);
    cy.get(".ic-input").should(HAVE_VALUE, "Lat");
  });

  //not sure
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

  //select tag not working
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
    cy.get("ic-select").should(HAVE_CLASS, "disabled hydrated");
    cy.findShadowEl("ic-select", "button").should("be.disabled");
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
      "have.text",
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

  //not sure how to set Attribute
  it("should set the correct name on the hidden input", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );
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

  it("should call icFocus when focuseicFocus", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );
    cy.checkHydrated("ic-select");
    cy.get("ic-select").invoke("on", "icFocus", cy.stub().as("icFocus"));
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_ENTER);
    cy.get("@icFocus").should(HAVE_BEEN_CALLED_ONCE);
  });

  //not working
  it.skip("should call icBlur when it loses focus", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );
    cy.checkHydrated("ic-select");
    cy.get("ic-select").invoke("on", "icBlur", cy.stub().as("icBlur"));
    cy.findShadowEl("ic-select", "button").focus();
    cy.findShadowEl("ic-select", "button").should(HAVE_FOCUS).type(TYPE_ENTER);
    cy.findShadowEl("ic-select", "button").focus();
    cy.findShadowEl("ic-select", "button").should(HAVE_FOCUS).type(TYPE_ENTER);
    cy.get("@icFocus").should(HAVE_BEEN_CALLED_ONCE);
    cy.get("ic-select").blur();
    cy.get("@icBlur").should("have.been.called");
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

  // not sure
  it.skip("should set the text colour to the primary text colour if an option is selected", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        value="espresso"
      />
    );
    // cy.checkHydrated("ic-select");
    // cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).click()
    // cy.get("ic-select").shadow().find(IC_MENU_LI).should('be.visible');
    // .should("have.attr2, ARIA_SELECTED);
  });

  // not sure
  it.skip("should change the text colour to the primary text colour when an option is selected", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        value="espresso"
      />
    );
  });

  // not sure
  it.skip("should add .menu-scroll to menu components when options height is over 320", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        value="espresso"
      />
    );
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
      .should("be.exist");
  });
});

describe("IcSelect Visual Regression Testing", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("renders", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("default");

    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.compareSnapshot("default-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with a default value", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        value="cappuccino"
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("default-value");

    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.compareSnapshot("default-value-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with a clear button", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        value="cappuccino"
        showClearButton
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("clear-button");

    cy.get("ic-select").shadow().find("ic-button#clear-button").click();
    cy.compareSnapshot("clear-button-cleared");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with descriptions", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptionsDescriptions}
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("default");

    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.compareSnapshot("descriptions-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with helper text", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        helperText="Enter your favourite coffee"
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("helper-text");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with custom placeholder", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        placeholder="Placeholder goes here"
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("custom-placeholder");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with custom elements", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeCustomElements}
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("default");

    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.compareSnapshot("custom-elements-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders small", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        size="small"
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("small");

    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.compareSnapshot("small-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders small - deprecated", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        small
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("small");

    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.compareSnapshot("small-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders disabled", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        disabled
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("disabled");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with disabled options", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeDisabledOption}
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("default");

    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.compareSnapshot("disabled-options-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders full width", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        fullWidth
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("full-width");

    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.compareSnapshot("full-width-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with hidden label", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        hideLabel
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("hidden-label");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders required", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        required
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("required");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders readonly", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        readonly
        value="cappuccino"
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("readonly");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with groups", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={groupCoffeeOption}
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("default");

    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.compareSnapshot("groups-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with recommendations", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={recommendedCoffeeOption}
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("default");

    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.compareSnapshot("recommended-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders validation", () => {
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
    cy.compareSnapshot("validation");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });
});

describe("IcSelect Searchable Visual Regression Testing", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("renders", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot(SEARCHABLE_DEFAULT);

    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type("ca");
    cy.compareSnapshot("searchable-default-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with a default value", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        value="cappuccino"
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("searchable-default-value");

    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type("ca");
    cy.compareSnapshot("searchable-default-value-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with filtering at the start", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        searchable
        searchMatchPosition="start"
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot(SEARCHABLE_DEFAULT);

    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type("ca");
    cy.compareSnapshot("searchable-search-match-position-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with descriptions", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptionsDescriptions}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot(SEARCHABLE_DEFAULT);

    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type("ca");
    cy.compareSnapshot("searchable-descriptions-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with descriptions included in filter", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptionsDescriptions}
        searchable
        includeDescriptionsInSearch
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot(SEARCHABLE_DEFAULT);

    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type("coff");
    cy.compareSnapshot("searchable-descriptions-in-filter-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with helper text", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        helperText="Enter your favourite coffee"
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("searchable-helper-text");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with custom placeholder", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        placeholder="Placeholder goes here"
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("searchable-custom-placeholder");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with custom elements", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeCustomElements}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot(SEARCHABLE_DEFAULT);

    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type("ca");
    cy.compareSnapshot("searchable-custom-elements-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders small", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        size="small"
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("searchable-small");

    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.compareSnapshot("searchable-small-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders small - deprecated", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        small
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("searchable-small");

    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.compareSnapshot("searchable-small-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders disabled", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        disabled
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("searchable-disabled");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with disabled options", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeDisabledOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot(SEARCHABLE_DEFAULT);

    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type("ca");
    cy.compareSnapshot("searchable-disabled-options-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders full width", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        fullWidth
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("searchable-full-width");

    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type("ca");
    cy.compareSnapshot("searchable-full-width-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with hidden label", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        hideLabel
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("searchable-hidden-label");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders required", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        required
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("searchable-required");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with groups", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={groupCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot(SEARCHABLE_DEFAULT);

    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type("ca");
    cy.compareSnapshot("searchable-groups-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with groups included in search", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={groupCoffeeOption}
        searchable
        includeGroupTitlesInSearch
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot(SEARCHABLE_DEFAULT);

    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type("bo");
    cy.compareSnapshot("searchable-groups-in-filter-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with recommendations", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={recommendedCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot(SEARCHABLE_DEFAULT);

    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type("ca");
    cy.compareSnapshot("searchable-recommended-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders validation", () => {
    mount(
      <div>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          validationStatus="success"
          validationText="Success message!"
          searchable
        />
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          validationStatus="warning"
          validationText="Warning message!"
          searchable
        />
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          validationStatus="error"
          validationText="Error message!"
          searchable
        />
      </div>
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("searchable-validation");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });
});
