/// <reference types="Cypress" />
/* eslint-disable cypress/no-unnecessary-waiting */

import React from "react";
import { mount } from "@cypress/react";
import { IcSelect } from "../../components";
import { CYPRESS_AXE_OPTIONS } from "../../../cypress/utils/a11y";
import {
  IC_INPUT_CONTAINER,
  IC_MENU_LI,
  IC_MENU_UL,
  ID_CLEAR_BUTTON,
  ARIA_SELECTED,
  TYPE_DOWN_ARROW,
  TYPE_ENTER,
  TYPE_BACKSPACE,
  DATA_VALUE_CAP,
  NO_RESULTS_FOUND,
  INPUT_TYPE_HIDDEN,
  DEFAULT_TEST_THRESHOLD,
} from "./IcSelectConstants";
import {
  HAVE_LENGTH,
  HAVE_VALUE,
  BE_VISIBLE,
  HAVE_ATTR,
  CONTAIN_VALUE,
  NOT_BE_VISIBLE,
} from "../utils/constants";
import {
  coffeeOptions,
  coffeeOptionsDescriptions,
  coffeeDisabledOption,
  groupCoffeeOption,
  recommendedCoffeeOption,
  searchableCoffeeOption,
  searchableDescriptionsCoffeeOption,
  searchableGroupCoffeeOption,
  coffeeCustomElements,
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

    // Screenshot: IcSelect searchable in idle state
    cy.compareSnapshot("searchable-default", DEFAULT_TEST_THRESHOLD);

    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.checkShadowElVisible("ic-select", IC_MENU_LI);
    cy.get("ic-select").shadow().find("input").type("ca");

    // Screenshot: IcSelect searchable with filtered options
    cy.compareSnapshot(
      "searchable-default-open",
      DEFAULT_TEST_THRESHOLD + 0.01
    );

    // A11y
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);

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
    cy.compareSnapshot(
      "searchable-default-value",
      DEFAULT_TEST_THRESHOLD + 0.01
    );

    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).click();

    cy.compareSnapshot(
      "searchable-default-value-open",
      DEFAULT_TEST_THRESHOLD + 0.07
    );

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

    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type("ca");

    // Screenshot: IcSelect searchable with match position
    cy.compareSnapshot(
      "searchable-search-match-position-open",
      DEFAULT_TEST_THRESHOLD + 0.01
    );

    // A11y
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

    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type("ca");

    // Screenshot: IcSelect searchable / IcMenu options with descriptions
    cy.compareSnapshot(
      "searchable-descriptions-open",
      DEFAULT_TEST_THRESHOLD + 0.04
    );

    // A11y
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
    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type("coff");

    // Screenshot: IcSelect searchable with descriptions included in filter
    cy.compareSnapshot(
      "searchable-descriptions-in-filter-open",
      DEFAULT_TEST_THRESHOLD + 0.05
    );

    // A11y
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

    // Screenshot: IcSelect searchable with custom placeholder
    cy.compareSnapshot("searchable-custom-placeholder", DEFAULT_TEST_THRESHOLD);

    // A11y
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

    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type("ca");

    // Screenshot: IcSelect searchable with custom elements
    cy.compareSnapshot(
      "searchable-custom-elements-open",
      DEFAULT_TEST_THRESHOLD + 0.02
    );

    // A11y
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

    // Screenshot: IcSelect searchable with small variant
    cy.compareSnapshot("searchable-small", DEFAULT_TEST_THRESHOLD);

    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);

    // Screenshot: IcSelect searchable small variant with small IcMenu
    cy.compareSnapshot("searchable-small-open", DEFAULT_TEST_THRESHOLD + 0.05);

    // A11y
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

    // Screenshot: IcSelect searchable with small variant
    cy.compareSnapshot("searchable-small-deprecated", DEFAULT_TEST_THRESHOLD);

    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);

    // Screenshot: IcSelect searchable small variant with small IcMenu
    cy.compareSnapshot(
      "searchable-small-open-deprecated",
      DEFAULT_TEST_THRESHOLD + 0.03
    );
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

    // Screenshot: IcSelect searchable with disable state
    cy.compareSnapshot("searchable-disabled", DEFAULT_TEST_THRESHOLD);

    // A11y
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

    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type("ca");

    // Screenshot: IcSelect searchable with filtered disabled options
    cy.compareSnapshot(
      "searchable-disabled-options-open",
      DEFAULT_TEST_THRESHOLD + 0.02
    );

    // A11y
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

    // Screenshot: IcSelect searchable with full width
    cy.compareSnapshot("searchable-full-width", DEFAULT_TEST_THRESHOLD);

    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type("ca");

    // Screenshot: IcSelect searchable with IcMenu open at full width
    cy.compareSnapshot(
      "searchable-full-width-open",
      DEFAULT_TEST_THRESHOLD + 0.02
    );

    // A11y
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

    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type("ca");

    // Screenshot: IcSelect searchable with grouped options
    cy.compareSnapshot("searchable-groups-open", DEFAULT_TEST_THRESHOLD + 0.02);

    // A11y
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

    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type("bo");

    // Screenshot: IcSelect searchable with filtered grouped options
    cy.compareSnapshot(
      "searchable-groups-in-filter-open",
      DEFAULT_TEST_THRESHOLD + 0.02
    );

    // A11y
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

    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type("ca");

    // Screenshot: IcSelect searchable with recommended suggestions
    cy.compareSnapshot(
      "searchable-recommended-open",
      DEFAULT_TEST_THRESHOLD + 0.02
    );

    // A11y
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });
});
