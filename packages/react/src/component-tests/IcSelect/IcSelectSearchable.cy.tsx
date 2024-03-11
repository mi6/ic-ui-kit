/// <reference types="Cypress" />

import { mount } from "@cypress/react";
import React from "react";
import { IcSelect } from "../../components";
import {
  BE_VISIBLE,
  CONTAIN_TEXT,
  HAVE_ATTR,
  HAVE_BEEN_CALLED,
  HAVE_LENGTH,
  HAVE_TEXT,
  HAVE_VALUE,
  NOT_BE_VISIBLE,
  NOT_HAVE_ATTR,
  NOT_HAVE_BEEN_CALLED,
} from "../utils/constants";
import {
  ARIA_SELECTED,
  DATA_VALUE_CAP,
  DEFAULT_TEST_THRESHOLD,
  IC_INPUT_CONTAINER,
  IC_MENU_LI,
  IC_MENU_UL,
  IC_TYPOGRAPHY,
  ID_CLEAR_BUTTON,
  INPUT_TYPE_HIDDEN,
  LOADING_MESSAGE,
  NO_RESULTS_FOUND,
  RETRY_BUTTON,
  TYPE_BACKSPACE,
  TYPE_DOWN_ARROW,
  TYPE_ENTER,
} from "./IcSelectConstants";
import {
  LoadingSelectSearchable,
  LoadingSelectSearchableNoTimeout,
  coffeeCustomElements,
  coffeeDisabledOption,
  coffeeOptions,
  coffeeOptionsDescriptions,
  groupCoffeeOption,
  recommendedCoffeeOption,
  searchableCoffeeOption,
  searchableDescriptionsCoffeeOption,
  searchableGroupCoffeeOption,
} from "./IcSelectTestData";

describe("IcSelect searchable", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
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
    cy.compareSnapshot({
      name: "searchable-default",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });

    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    cy.get("ic-select").shadow().find("input").type("ca");
    cy.compareSnapshot({
      name: "searchable-default-open",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.01,
    });
    cy.checkA11yWithWait();

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
    cy.get("ic-select").shadow().find("input").type("foo");
    cy.checkShadowElVisible("ic-select", IC_MENU_LI).should(HAVE_LENGTH, 1);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI).should(
      HAVE_TEXT,
      NO_RESULTS_FOUND
    );

    cy.get("ic-select").shadow().find("input").click();
    cy.findShadowEl("ic-select", IC_MENU_LI).should(NOT_BE_VISIBLE);

    cy.get("ic-select").shadow().find("input").click();
    cy.findShadowEl("ic-select", IC_MENU_LI).should(BE_VISIBLE);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI).should(HAVE_LENGTH, 1);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI).should(
      HAVE_TEXT,
      NO_RESULTS_FOUND
    );
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
      .should(HAVE_TEXT, "MochaCoffee with chocolate")
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
    cy.get("ic-select").shadow().find("input").type("b");

    cy.findShadowEl("ic-select", IC_MENU_LI).should(HAVE_LENGTH, 1);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI).should(
      HAVE_TEXT,
      NO_RESULTS_FOUND
    );
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
      .should(HAVE_TEXT, "Cappuccino");
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
      .should(HAVE_TEXT, "Cappuccino");

    for (let i = 0; i <= 7; i++) {
      cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type(TYPE_BACKSPACE);
    }

    cy.findShadowEl("ic-select", IC_MENU_LI).should(HAVE_LENGTH, "3");
    cy.findShadowEl("ic-select", IC_MENU_LI)
      .eq(0)
      .should("to.contain", "Cappuccino");
    cy.findShadowEl("ic-select", IC_MENU_LI)
      .eq(1)
      .should("to.contain", "Americano");
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

  it("should emit icChange on delay", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        debounce={500}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.get("ic-select").invoke("on", "icChange", cy.stub().as("icChange"));
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("foo");
    cy.get("@icChange").should(NOT_HAVE_BEEN_CALLED);
    cy.wait(600);
    cy.get("@icChange").should(HAVE_BEEN_CALLED);
    cy.get(".ic-input").should(HAVE_VALUE, "foo");
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
      .should(HAVE_TEXT, "Cappuccino");
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
      .should(HAVE_TEXT, "Cappuccino");
    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type("1");
    cy.get(".ic-input").should(HAVE_VALUE, "Cappuccino1");
  });

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
    cy.findShadowEl("ic-select", 'input[role="combobox"]')
      .invoke("prop", "value")
      .should("eq", "");
    cy.get("ic-select").invoke("attr", "value", "foo");
    cy.findShadowEl("ic-select", 'input[role="combobox"]')
      .invoke("prop", "value")
      .should("eq", "foo");
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
    cy.get("@menuItemHighlighted").should(NOT_HAVE_BEEN_CALLED);
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
      NOT_HAVE_ATTR,
      ARIA_SELECTED
    );
  });

  it("should not select a menu option when one has previously been set and backspace is pressed", () => {
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
      NOT_HAVE_ATTR,
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

  it("loading should retry loading and keep the menu open when retry button is pressed with Spacebar", () => {
    mount(<LoadingSelectSearchable />);
    cy.checkHydrated("ic-select");
    cy.get("ic-select").invoke(
      "on",
      "icRetryLoad",
      cy.stub().as("icRetryLoad")
    );

    cy.get("ic-button").click();
    cy.wait(600);
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.checkShadowElVisible("ic-select", IC_MENU_UL);
    cy.findShadowEl("ic-select", "ic-menu ul li ic-typography")
      .should(BE_VISIBLE)
      .should(HAVE_TEXT, "Loading Error");

    cy.findShadowEl("ic-select", RETRY_BUTTON)
      .shadow()
      .find("button")
      .focus()
      .type(" ");
    cy.get("@icRetryLoad").should(HAVE_BEEN_CALLED);
    cy.findShadowEl("ic-select", IC_TYPOGRAPHY).should(
      CONTAIN_TEXT,
      LOADING_MESSAGE
    );
  });

  it("should cancel loading if the clear button is pressed mid-load", () => {
    mount(<LoadingSelectSearchableNoTimeout />);
    cy.checkHydrated("ic-select");
    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("foo");
    cy.get("ic-button").click();
    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.findShadowEl("ic-select", IC_TYPOGRAPHY).should(
      CONTAIN_TEXT,
      LOADING_MESSAGE
    );

    cy.clickOnShadowEl("ic-select", ID_CLEAR_BUTTON);
    cy.findShadowEl("ic-select", IC_TYPOGRAPHY).should(
      CONTAIN_TEXT,
      NO_RESULTS_FOUND
    );
  });

  it("menu should not be visible on initial load if setting default value and disable filter is set", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        searchable
        disableFilter
        value="Test Value"
      />
    );
    cy.checkHydrated("ic-select");
    cy.findShadowEl("ic-select", IC_MENU_LI).should(NOT_BE_VISIBLE);
  });

  it("should reset to initial value on form reset with searchable", () => {
    mount(
      <>
        <form>
          <button type="reset" id="resetButton">
            Reset
          </button>
          <IcSelect
            label="What is your favourite coffee?"
            options={searchableCoffeeOption}
            searchable
          />
        </form>
      </>
    );
    cy.checkHydrated("ic-select");
    cy.get(".ic-input").should(HAVE_VALUE, "");

    cy.findShadowEl("ic-select", IC_INPUT_CONTAINER).type("foo");
    cy.get(".ic-input").should(HAVE_VALUE, "foo");

    cy.get("#resetButton").click();
    cy.get(".ic-input").should(HAVE_VALUE, "");
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
    cy.compareSnapshot({
      name: "searchable-default-value",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.01,
    });

    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).click();

    cy.compareSnapshot({
      name: "searchable-default-value-open",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.07,
    });

    cy.checkA11yWithWait();
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

    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type("ca");
    cy.compareSnapshot({
      name: "searchable-search-match-position-open",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.01,
    });
    cy.checkA11yWithWait();
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

    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type("ca");
    cy.compareSnapshot({
      name: "searchable-descriptions-open",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.04,
    });
    cy.checkA11yWithWait();
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
    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type("coff");
    cy.compareSnapshot({
      name: "searchable-descriptions-in-filter-open",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
    });
    cy.checkA11yWithWait();
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
    cy.compareSnapshot({
      name: "searchable-custom-placeholder",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
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

    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type("ca");
    cy.compareSnapshot({
      name: "searchable-custom-elements-open",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
    });
    cy.checkA11yWithWait();
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
    cy.compareSnapshot({
      name: "searchable-small",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });

    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.compareSnapshot({
      name: "searchable-small-open",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
    });
    cy.checkA11yWithWait();
  });

  it("renders large", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        size="large"
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("searchable-large", DEFAULT_TEST_THRESHOLD);

    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.compareSnapshot("searchable-large-open", DEFAULT_TEST_THRESHOLD + 0.05);
    cy.checkA11yWithWait();
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
    cy.compareSnapshot({
      name: "searchable-small-deprecated",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });

    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.compareSnapshot({
      name: "searchable-small-open-deprecated",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.03,
    });
    cy.checkA11yWithWait();
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
    cy.compareSnapshot({
      name: "searchable-disabled",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
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

    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type("ca");
    cy.compareSnapshot({
      name: "searchable-disabled-options-open",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
    });
    cy.checkA11yWithWait();
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
    cy.compareSnapshot({
      name: "searchable-full-width",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });

    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type("ca");
    cy.compareSnapshot({
      name: "searchable-full-width-open",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
    });
    cy.checkA11yWithWait();
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

    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type("ca");
    cy.compareSnapshot({
      name: "searchable-groups-open",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
    });
    cy.checkA11yWithWait();
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

    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type("bo");
    cy.compareSnapshot({
      name: "searchable-groups-in-filter-open",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
    });
    cy.checkA11yWithWait();
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

    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type("ca");
    cy.compareSnapshot({
      name: "searchable-recommended-open",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
    });
    cy.checkA11yWithWait();
  });
});
