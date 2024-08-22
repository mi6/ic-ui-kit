/// <reference types="Cypress" />

import { mount } from "@cypress/react";
import React from "react";
import { IcSelect } from "../../components";
import {
  BE_VISIBLE,
  CONTAIN_TEXT,
  CONTAIN_VALUE,
  HAVE_ATTR,
  HAVE_BEEN_CALLED,
  HAVE_BEEN_CALLED_WITH,
  HAVE_CLASS,
  HAVE_LENGTH,
  HAVE_VALUE,
  NOT_BE_VISIBLE,
  NOT_HAVE_BEEN_CALLED,
  HAVE_TEXT,
} from "../utils/constants";
import {
  ARIA_SELECTED,
  DATA_VALUE_CAP,
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
  IC_SELECT,
} from "./IcSelectConstants";
import {
  ControlledSearchableSelect,
  LoadingSelectSearchable,
  LoadingSelectSearchableNoTimeout,
  UncontrolledSearchableSelect,
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
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const DEFAULT_TEST_THRESHOLD = 0.044;

describe("IcSelect searchable end-to-end, visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should open searchable menu and filter options when character is entered in input field", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated(IC_SELECT);

    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.checkShadowElVisible(IC_SELECT, IC_MENU_LI);
    cy.get(IC_SELECT).shadow().find("input").type("ca");

    cy.findShadowEl(IC_SELECT, IC_MENU_LI).should(HAVE_LENGTH, "3");
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).eq(0).contains("Cappuccino");
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).eq(1).contains("Americano");
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).eq(2).contains("Café au lait");
  });

  it("should keep the same options when characters are entered and the menu is closed and reopened", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
      />
    );

    cy.checkHydrated(IC_SELECT);
    cy.get(IC_SELECT).shadow().find("input").type("foo");
    cy.checkShadowElVisible(IC_SELECT, IC_MENU_LI).should(HAVE_LENGTH, 1);
    cy.checkShadowElVisible(IC_SELECT, IC_MENU_LI).should(
      HAVE_TEXT,
      NO_RESULTS_FOUND
    );

    cy.get(IC_SELECT).shadow().find("input").click();
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).should(NOT_BE_VISIBLE);

    cy.get(IC_SELECT).shadow().find("input").click();
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).should(BE_VISIBLE);
    cy.checkShadowElVisible(IC_SELECT, IC_MENU_LI).should(HAVE_LENGTH, 1);
    cy.checkShadowElVisible(IC_SELECT, IC_MENU_LI).should(
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

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.checkShadowElVisible(IC_SELECT, IC_MENU_LI);
    cy.get(IC_SELECT).shadow().find("input").click();
    cy.get(IC_SELECT).shadow().find("input").type("zZ");
    cy.findShadowEl(IC_SELECT, IC_MENU_LI)
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

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.checkShadowElVisible(IC_SELECT, IC_MENU_LI);
    cy.findShadowEl(IC_SELECT, "input").click();
    cy.findShadowEl(IC_SELECT, "input").type("fi");
    cy.findShadowEl(IC_SELECT, "input").type(TYPE_BACKSPACE);
    cy.findShadowEl(IC_SELECT, "input").click();
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).should(HAVE_LENGTH, "2");
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).eq(0).contains("Flat white");
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).eq(1).contains("Café au lait");
  });

  it("should include option descriptions in search", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableDescriptionsCoffeeOption}
        searchable
      />
    );

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type("mo");
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.get(IC_SELECT).shadow().find(".expand-icon").should("exist").click();
    cy.findShadowEl(IC_SELECT, IC_MENU_LI)
      .should(HAVE_LENGTH, "1")
      .should(HAVE_TEXT, "MochaCoffee with chocolate");
  });

  it("should not include group titles in search", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableGroupCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated(IC_SELECT);
    cy.get(IC_SELECT).shadow().find("input").type("b");

    cy.findShadowEl(IC_SELECT, IC_MENU_LI).should(HAVE_LENGTH, 1);
    cy.checkShadowElVisible(IC_SELECT, IC_MENU_LI).should(
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

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type("b");
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).should(HAVE_LENGTH, "4");
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).eq(0).contains("Filter");
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).eq(1).contains("Latte");
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).eq(2).contains("Americano");
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).eq(3).contains("Espresso");
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

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type("{upArrow}");
    cy.findShadowEl(IC_SELECT, IC_MENU_UL).type(TYPE_ENTER);
    cy.clickOnShadowEl(IC_SELECT, ID_CLEAR_BUTTON);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type("a");
    cy.clickOnShadowEl(IC_SELECT, ID_CLEAR_BUTTON);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).should("not.have.text");
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

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type("{upArrow}");
    cy.get(IC_SELECT).invoke("on", "icChange", cy.stub().as("icChanges"));
    cy.findShadowEl(IC_SELECT, IC_MENU_UL)
      .find(DATA_VALUE_CAP)
      .click({ force: true });
    cy.findShadowEl(IC_SELECT, DATA_VALUE_CAP)
      .contains("Cappuccino")
      .should(HAVE_TEXT, "Cappuccino");
    cy.clickOnShadowEl(IC_SELECT, ID_CLEAR_BUTTON);
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

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type("{upArrow}");
    cy.findShadowEl(IC_SELECT, IC_MENU_UL)
      .find(DATA_VALUE_CAP)
      .click({ force: true });
    cy.findShadowEl(IC_SELECT, IC_MENU_UL)
      .contains("Cappuccino")
      .should(HAVE_TEXT, "Cappuccino");

    for (let i = 0; i <= 7; i++) {
      cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_BACKSPACE);
    }

    cy.findShadowEl(IC_SELECT, IC_MENU_LI).should(HAVE_LENGTH, "3");
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).eq(0).contains("Cappuccino");
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).eq(1).contains("Americano");
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).eq(2).contains("Café au lait");
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

    cy.checkHydrated(IC_SELECT);
    cy.get(IC_SELECT).invoke("on", "icChange", cy.stub().as("icChange"));
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type("foo");
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

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type("bar");
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
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

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type("cap");
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.get(INPUT_TYPE_HIDDEN).should(HAVE_VALUE, "cap");
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
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

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type("o");
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.get(INPUT_TYPE_HIDDEN).should(HAVE_VALUE, "o");
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).should(HAVE_LENGTH, "7");
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_ENTER);
    cy.findShadowEl(IC_SELECT, IC_MENU_UL)
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

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type("o");
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.get(INPUT_TYPE_HIDDEN).should(HAVE_VALUE, "o");
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).should(HAVE_LENGTH, "7");
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_ENTER);
    cy.findShadowEl(IC_SELECT, IC_MENU_UL)
      .find(DATA_VALUE_CAP)
      .contains("Cappuccino")
      .should(HAVE_TEXT, "Cappuccino");
    cy.get(IC_SELECT).shadow().find(IC_INPUT_CONTAINER).type("1");
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

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, 'input[role="combobox"]')
      .invoke("prop", "value")
      .should("eq", "");
    cy.get(IC_SELECT).invoke("attr", "value", "foo");
    cy.findShadowEl(IC_SELECT, 'input[role="combobox"]')
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

    cy.checkHydrated(IC_SELECT);
    cy.get(IC_SELECT).invoke("on", "icChange", cy.stub().as("icChanges"));
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type("f");
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER)
      .as("foo")
      .invoke("val", "f")
      .trigger("icChanges");
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type("o");
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER)
      .should(BE_VISIBLE)
      .as("foo")
      .invoke("val", "f")
      .trigger("icChanges");
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type("o");
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER)
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

    cy.checkHydrated(IC_SELECT);
    cy.get(IC_SELECT).invoke("on", "icChange", cy.stub().as("icChange"));

    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER).realPress("ArrowDown");
    cy.get("@icChange").should(NOT_HAVE_BEEN_CALLED);
  });

  it("should not select a menu option when typing into the searchable input field", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
      />
    );

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type("cap");
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).should(
      HAVE_ATTR,
      ARIA_SELECTED,
      "false"
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

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type("Lat");
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_ENTER);
    cy.get(IC_SELECT).shadow().find('[data-label="Latte"]').should("exist");
    for (let i = 0; i <= 5; i++) {
      cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_BACKSPACE);
    }
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).should(
      HAVE_ATTR,
      ARIA_SELECTED,
      "false"
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

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type("Lat");
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_ENTER);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).should(BE_VISIBLE);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.findShadowEl(IC_SELECT, "li[data-value='Lat']").should(
      HAVE_ATTR,
      ARIA_SELECTED,
      "true"
    );
  });

  it("should retry loading and keep the menu open when retry button is pressed with Spacebar", () => {
    mount(<LoadingSelectSearchable />);
    cy.checkHydrated(IC_SELECT);
    cy.get(IC_SELECT).invoke("on", "icRetryLoad", cy.stub().as("icRetryLoad"));

    cy.get("ic-button").click();
    cy.wait(600);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.checkShadowElVisible(IC_SELECT, IC_MENU_UL);
    cy.findShadowEl(IC_SELECT, "ic-menu ul li ic-typography")
      .should(BE_VISIBLE)
      .should(HAVE_TEXT, "Loading Error");

    cy.findShadowEl(IC_SELECT, RETRY_BUTTON)
      .shadow()
      .find("button")
      .focus()
      .type(" ");
    cy.get("@icRetryLoad").should(HAVE_BEEN_CALLED);
    cy.findShadowEl(IC_SELECT, IC_TYPOGRAPHY).should(
      CONTAIN_TEXT,
      LOADING_MESSAGE
    );
  });

  it("should cancel loading if the clear button is pressed mid-load", () => {
    mount(<LoadingSelectSearchableNoTimeout />);

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type("foo");
    cy.get("ic-button").click();
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);
    cy.findShadowEl(IC_SELECT, IC_TYPOGRAPHY).should(
      CONTAIN_TEXT,
      LOADING_MESSAGE
    );

    cy.clickOnShadowEl(IC_SELECT, ID_CLEAR_BUTTON);
    cy.findShadowEl(IC_SELECT, IC_TYPOGRAPHY).should(
      CONTAIN_TEXT,
      NO_RESULTS_FOUND
    );
  });

  it("should not display menu on initial load if setting default value and disable filter is set", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        searchable
        disableAutoFiltering
        value="Test Value"
      />
    );

    cy.checkHydrated(IC_SELECT);
    cy.findShadowEl(IC_SELECT, IC_MENU_LI).should(NOT_BE_VISIBLE);
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

    cy.checkHydrated(IC_SELECT);
    cy.get(".ic-input").should(HAVE_VALUE, "");

    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type("foo");
    cy.get(".ic-input").should(HAVE_VALUE, "foo");

    cy.get("#resetButton").click();
    cy.get(".ic-input").should(HAVE_VALUE, "");
  });

  it("should render with a default value", () => {
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
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.005),
    });

    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).click();

    cy.checkA11yWithWait(undefined, 1000);
    cy.compareSnapshot({
      name: "searchable-default-value-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.033),
    });
  });

  it("should render with filtering at the start", () => {
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
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "searchable-search-match-position-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.005),
    });
  });

  it("should render with descriptions", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptionsDescriptions}
        searchable
      />
    );

    cy.checkHydrated("ic-select");

    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type("ca");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "searchable-descriptions-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.041),
    });
  });

  it("should render with descriptions included in filter", () => {
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

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "searchable-descriptions-in-filter-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.05),
    });
  });

  it("should render with custom placeholder", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        placeholder="Placeholder goes here"
        searchable
      />
    );

    cy.checkHydrated("ic-select");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "searchable-custom-placeholder",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.005),
    });
  });

  it("should render with custom elements", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeCustomElements}
        searchable
      />
    );

    cy.checkHydrated("ic-select");

    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type("ca");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "searchable-custom-elements-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
    });
  });

  it("should render small", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        size="small"
        searchable
      />
    );

    cy.checkHydrated("ic-select");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "searchable-small",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.002),
    });

    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);

    cy.compareSnapshot({
      name: "searchable-small-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.031),
    });
  });

  it("should render large", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        size="large"
        searchable
      />
    );

    cy.checkHydrated("ic-select");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "searchable-large",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.002),
    });

    cy.clickOnShadowEl("ic-select", IC_INPUT_CONTAINER);
    cy.wait(1000);

    cy.compareSnapshot({
      name: "searchable-large-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.031),
    });
  });

  it("should render disabled", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        disabled
        searchable
      />
    );

    cy.checkHydrated("ic-select");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "searchable-disabled",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.002),
    });
  });

  it("should render with disabled options", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeDisabledOption}
        searchable
      />
    );

    cy.checkHydrated("ic-select");

    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type("ca");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "searchable-disabled-options-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.005),
    });
  });

  it("should render full width", () => {
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
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.002),
    });

    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type("ca");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "searchable-full-width-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
    });
  });

  it("should render with groups", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={groupCoffeeOption}
        searchable
      />
    );

    cy.checkHydrated("ic-select");

    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type("ca");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "searchable-groups-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.006),
    });
  });

  it("should render with groups included in search", () => {
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

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "searchable-groups-in-filter-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.009),
    });
  });

  it("should render with recommendations", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={recommendedCoffeeOption}
        searchable
      />
    );

    cy.checkHydrated("ic-select");

    cy.get("ic-select").shadow().find(IC_INPUT_CONTAINER).type("ca");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "searchable-recommended-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
    });
  });

  it("should render as a controlled component", () => {
    mount(<ControlledSearchableSelect />);

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

  it("should render as an uncontrolled component", () => {
    mount(<UncontrolledSearchableSelect />);

    cy.spy(window.console, "log").as("spyWinConsoleLog");
    cy.get(IC_SELECT).shadow().find(IC_INPUT_CONTAINER).type("cap");
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_DOWN_ARROW);
    cy.findShadowEl(IC_SELECT, IC_INPUT_CONTAINER).type(TYPE_ENTER);
    cy.get("@spyWinConsoleLog").should(HAVE_BEEN_CALLED_WITH, "cappuccino");
  });

  it.skip("should not clear input if select is disabled", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeDisabledOption}
        disabled
        value="cappuccino"
        searchable
      />
    );

    cy.checkHydrated(IC_SELECT);
    cy.get(IC_SELECT).should(HAVE_CLASS, "disabled searchable hydrated");
    cy.get(".ic-input").should(CONTAIN_VALUE, "cappuccino");
    cy.clickOnShadowEl(IC_SELECT, ID_CLEAR_BUTTON);
    cy.get(".ic-input").should(CONTAIN_VALUE, "cappuccino");
  });

  it("should render default searchable select", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={searchableCoffeeOption}
          searchable
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "searchable-default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render default searchable select - open", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={searchableCoffeeOption}
          searchable
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);
    cy.get(IC_SELECT).shadow().find(IC_INPUT_CONTAINER).click();

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "searchable-default-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.045),
    });
  });

  it("should render with a default value", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          value="cappuccino"
          searchable
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);
    cy.get(IC_SELECT).shadow().find(IC_INPUT_CONTAINER).click();

    cy.checkA11yWithWait(undefined, 1000);
    cy.compareSnapshot({
      name: "searchable-default-value-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.03),
    });
  });

  it("should render with filtering at the start", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          searchable
          searchMatchPosition="start"
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);

    cy.get(IC_SELECT).shadow().find(IC_INPUT_CONTAINER).type("ca");
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "searchable-search-match-position-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.003),
    });
  });

  it("should render with descriptions", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptionsDescriptions}
          searchable
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);

    cy.get(IC_SELECT).shadow().find(IC_INPUT_CONTAINER).type("ca");

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "searchable-descriptions-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.039),
    });
  });

  it("should render with descriptions included in filter", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptionsDescriptions}
          searchable
          includeDescriptionsInSearch
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);
    cy.get(IC_SELECT).shadow().find(IC_INPUT_CONTAINER).type("coff");

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "searchable-descriptions-in-filter-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.048),
    });
  });

  it("should render with custom placeholder", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          placeholder="Placeholder goes here"
          searchable
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "searchable-custom-placeholder",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.002),
    });
  });

  it("should render with custom elements", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeCustomElements}
          searchable
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);

    cy.get(IC_SELECT).shadow().find(IC_INPUT_CONTAINER).type("ca");

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "searchable-custom-elements-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.009),
    });
  });

  it("should render small", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          size="small"
          searchable
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "searchable-small",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render small - open", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          size="small"
          searchable
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "searchable-small-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.029),
    });
  });

  it("should render large", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          size="large"
          searchable
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "searchable-large",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render large - open", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          size="large"
          searchable
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);
    cy.clickOnShadowEl(IC_SELECT, IC_INPUT_CONTAINER);

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "searchable-large-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.029),
    });
  });

  it("should render disabled", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          disabled
          searchable
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "searchable-disabled",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render with disabled options", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeDisabledOption}
          searchable
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);

    cy.get(IC_SELECT).shadow().find(IC_INPUT_CONTAINER).type("ca");

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "searchable-disabled-options-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.003),
    });
  });

  it("should render full width", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          fullWidth
          searchable
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "searchable-full-width",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render full width - open", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          fullWidth
          searchable
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);
    cy.get(IC_SELECT).shadow().find(IC_INPUT_CONTAINER).type("ca");

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "searchable-full-width-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.009),
    });
  });

  it("should render with groups", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={groupCoffeeOption}
          searchable
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);

    cy.get(IC_SELECT).shadow().find(IC_INPUT_CONTAINER).type("ca");

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "searchable-groups-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.004),
    });
  });

  it("should render with groups included in search", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={groupCoffeeOption}
          searchable
          includeGroupTitlesInSearch
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);

    cy.get(IC_SELECT).shadow().find(IC_INPUT_CONTAINER).type("bo");

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "searchable-groups-in-filter-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.007),
    });
  });

  it("should render with recommendations", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={recommendedCoffeeOption}
          searchable
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);

    cy.get(IC_SELECT).shadow().find(IC_INPUT_CONTAINER).type("ca");

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "searchable-recommended-open",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.009),
    });
  });
});

describe("IcSelect searchable visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  after(() => {
    cy.disableForcedColors();
  });

  it("should render with recommendations in high contrast mode", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={recommendedCoffeeOption}
          searchable
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);

    cy.get(IC_SELECT).shadow().find(IC_INPUT_CONTAINER).type("ca").wait(500);

    cy.compareSnapshot({
      name: "searchable-recommended-open-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.002),
    });
  });

  it("should render with groups included in search in high contrast mode", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={groupCoffeeOption}
          searchable
          includeGroupTitlesInSearch
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);

    cy.get(IC_SELECT).shadow().find(IC_INPUT_CONTAINER).type("bo").wait(500);

    cy.compareSnapshot({
      name: "searchable-groups-in-filter-open-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.003),
    });
  });

  it.skip("should render with disabled options in high contrast mode", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeDisabledOption}
          searchable
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);

    cy.get(IC_SELECT).shadow().find(IC_INPUT_CONTAINER).type("ca").wait(500);

    cy.compareSnapshot({
      name: "searchable-disabled-options-open-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.005),
    });
  });

  it("should render with descriptions in high contrast mode", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptionsDescriptions}
          searchable
        />
      </div>
    );

    cy.checkHydrated(IC_SELECT);

    cy.get(IC_SELECT).shadow().find(IC_INPUT_CONTAINER).type("ca").wait(500);

    cy.compareSnapshot({
      name: "searchable-descriptions-open-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.037),
    });
  });
});
