/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import { mount } from "cypress/react";
import React from "react";
import {
  CharactersUntilSuggestion,
  Controlled,
  EmptyOptionListText,
  IC_INPUT_CONTAINER,
  IC_MENU_LI,
  LongOptionLabel,
  Uncontrolled,
  Default,
  Disabled,
  FullWidth,
  HelperText,
  HiddenLabel,
  Small,
  OptionsNoFiltering,
  InAForm,
  QuerySearchMode,
  ExternalFilteringSearchBar,
  WithButton,
  ThemeDark,
} from "./IcSearchBarTestData";
import {
  BE_VISIBLE,
  CONTAIN_TEXT,
  HAVE_ATTR,
  HAVE_BEEN_CALLED,
  HAVE_BEEN_CALLED_ONCE,
  HAVE_BEEN_CALLED_WITH,
  HAVE_CLASS,
  HAVE_FOCUS,
  HAVE_LENGTH,
  HAVE_VALUE,
  NOT_BE_VISIBLE,
  NOT_CONTAIN,
  NOT_EXIST,
  NOT_HAVE_ATTR,
  NOT_HAVE_BEEN_CALLED,
  NOT_HAVE_CLASS,
} from "../utils/constants";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";
import "cypress-axe";
import { IcSearchBar } from "../../components";

const SEARCH_SELECTOR = "ic-search-bar";
const SEARCH_INPUT = 'input[type="text"]';
const TEXT_FIELD_SELECTOR = "ic-text-field";
const DEFAULT_TEST_THRESHOLD = 0.02;

describe("IcSearchBar end-to-end tests", () => {
  it("should render as a controlled component", () => {
    mount(<Controlled />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("La");
    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI)
      .should(BE_VISIBLE)
      .should(HAVE_LENGTH, "1");

    cy.clickOnShadowEl(SEARCH_SELECTOR, "#clear-button");

    cy.get("ic-button#update-opt").click();

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("La");
    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI)
      .should(BE_VISIBLE)
      .should(HAVE_LENGTH, "4");
  });

  it("should render as an uncontrolled component", () => {
    mount(<Uncontrolled />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.spy(window.console, "log").as("spyWinConsoleLog");
    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("La");
    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .realPress("Enter");
    cy.get("@spyWinConsoleLog").should(HAVE_BEEN_CALLED_WITH, "fla");
  });

  it("should render with custom empty option list text", () => {
    mount(<EmptyOptionListText />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Latte")
      .wait(200);

    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI)
      .should(BE_VISIBLE)
      .should(HAVE_LENGTH, "1")
      .should(CONTAIN_TEXT, "There's nothing here");
  });

  it("should render with characters until suggestion set", () => {
    mount(<CharactersUntilSuggestion />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Lat");

    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI).should(NOT_EXIST);
    cy.findShadowEl(SEARCH_SELECTOR, "#search-submit-button").should(
      HAVE_CLASS,
      "ic-button-disabled"
    );

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("te");

    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI)
      .should(BE_VISIBLE)
      .should(HAVE_LENGTH, "1")
      .should(CONTAIN_TEXT, "Latte");
    cy.findShadowEl(SEARCH_SELECTOR, "#search-submit-button").should(
      NOT_HAVE_CLASS,
      "disabled"
    );
  });

  it("should render with long option labels", () => {
    mount(<LongOptionLabel />);

    cy.checkHydrated(SEARCH_SELECTOR);
    cy.wait(500);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("es")
      .wait(200);

    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI)
      .should(BE_VISIBLE)
      .should(HAVE_LENGTH, "3")
      .should(
        CONTAIN_TEXT,
        "Double Espresso because it tastes like double the amount of coffee"
      );
  });

  it("should render clear button when value present", () => {
    mount(<Default />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, "#clear-button").should(NOT_BE_VISIBLE);
    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Latte");
    cy.findShadowEl(SEARCH_SELECTOR, "#clear-button").should(BE_VISIBLE);
  });

  it("should clear value when clear button pressed", () => {
    mount(<Default />);

    cy.checkHydrated(SEARCH_SELECTOR);
    cy.get(SEARCH_SELECTOR).invoke("on", "icClear", cy.stub().as("icClear"));

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Latte");
    cy.get(SEARCH_SELECTOR).should(HAVE_VALUE, "Latte");
    cy.findShadowEl(SEARCH_SELECTOR, "#clear-button").click();
    cy.get(SEARCH_SELECTOR).should(HAVE_VALUE, "");
    cy.get("@icClear").should(HAVE_BEEN_CALLED_ONCE);
  });

  it("should emit icSubmitSearch when submit is clicked and select highlighted option", () => {
    mount(<Default />);

    cy.checkHydrated(SEARCH_SELECTOR);
    cy.get(SEARCH_SELECTOR).invoke(
      "on",
      "icSubmitSearch",
      cy.stub().as("icSubmitSearch")
    );

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Es");
    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI)
      .eq(0)
      .should(HAVE_CLASS, "focused-option");
    cy.findShadowEl(SEARCH_SELECTOR, "#search-submit-button").click();
    cy.get("@icSubmitSearch").should(HAVE_BEEN_CALLED_ONCE);
    cy.get(SEARCH_SELECTOR).should(HAVE_VALUE, "espresso");
  });

  it("should invoke submit event when search textfield is in a form", () => {
    mount(<InAForm />);

    cy.checkHydrated(SEARCH_SELECTOR);
    cy.spy(window.console, "log").as("spyWinConsoleLog");
    cy.get(SEARCH_SELECTOR).invoke(
      "on",
      "icSubmitSearch",
      cy.stub().as("icSubmitSearch")
    );

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Espresso");
    cy.findShadowEl(SEARCH_SELECTOR, "#search-submit-button").click();
    cy.get("@icSubmitSearch").should(HAVE_BEEN_CALLED_ONCE);
    cy.get("@spyWinConsoleLog").should(HAVE_BEEN_CALLED_WITH, "form submit");
  });

  it("should begin with no aria-owns attribute and then add one when the menu appears", () => {
    mount(<Default />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR).should(
      NOT_HAVE_ATTR,
      "aria-owns"
    );
    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI).should(NOT_EXIST);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Es");

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR).should(
      HAVE_ATTR,
      "aria-owns"
    );
    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI)
      .should(BE_VISIBLE)
      .and(HAVE_LENGTH, "2");
  });

  it("should focus on input when menu is initially displayed", () => {
    mount(<Default />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Es");

    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI).should(BE_VISIBLE);
    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(SEARCH_INPUT)
      .should(HAVE_FOCUS);
  });

  it("should remove menu when input value is cleared", () => {
    mount(<Default />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Es");

    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI).should(BE_VISIBLE);
    cy.clickOnShadowEl(SEARCH_SELECTOR, "#clear-button");
    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI).should(NOT_EXIST);
  });

  it("should not update value when options are highlighted", () => {
    mount(<Default />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Es");
    cy.get(SEARCH_SELECTOR).should(HAVE_VALUE, "Es");
    cy.realPress("ArrowDown");
    cy.get(SEARCH_SELECTOR).should(HAVE_VALUE, "Es");
  });

  it("should focus on menu on ArrowDown from input", () => {
    mount(<Default />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Es");
    cy.realPress("ArrowDown");
    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI).should(HAVE_FOCUS);
  });

  it("should focus on menu on ArrowUp from input", () => {
    mount(<Default />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Es");
    cy.realPress("ArrowUp");
    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI).should(HAVE_FOCUS);
  });

  it("should highlight first and last options using Home and End and move focus to menu", () => {
    mount(<Default />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Es");
    cy.realPress("End");
    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI).eq(1).should(HAVE_FOCUS);
    cy.realPress("Home");
    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI).eq(0).should(HAVE_FOCUS);
  });

  it("should select first option and update value as label on Enter", () => {
    mount(<Default />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Es");

    cy.realPress("Enter");
    cy.get(SEARCH_SELECTOR).should(HAVE_VALUE, "espresso");
  });

  it("should keep the input value on Enter when searchMode is set to 'query'", () => {
    mount(<QuerySearchMode />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Es");

    cy.realPress("Enter");
    cy.get(SEARCH_SELECTOR).should(HAVE_VALUE, "Es");
  });

  it("should not highlight options when typing and searchMode is 'query'", () => {
    mount(<QuerySearchMode />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Es");
    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI)
      .eq(0)
      .should(NOT_HAVE_CLASS, "focused-option");
  });

  it("should move focus to first option after one ArrowDown press when searchMode is set to 'query'", () => {
    mount(<QuerySearchMode />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Es");
    cy.realPress("ArrowDown");
    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI).eq(0).should(HAVE_FOCUS);
  });

  it("should add a space to value on Space", () => {
    mount(<Default />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Es");
    cy.get(SEARCH_SELECTOR).should(HAVE_VALUE, "Es");
    cy.realPress("Space");
    cy.get(SEARCH_SELECTOR).should(HAVE_VALUE, "Es ");
  });

  it("should remove a character from value on Backspace", () => {
    mount(<Default />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Es");
    cy.get(SEARCH_SELECTOR).should(HAVE_VALUE, "Es");
    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .then(($input) => {
        cy.get($input).type("{backspace}");
      });
    cy.get(SEARCH_SELECTOR).should(HAVE_VALUE, "E");
  });

  it("should set value to last option when pressing up on input", () => {
    mount(<Default />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Es");
    cy.realPress("ArrowUp").realPress("Enter");
    cy.get(SEARCH_SELECTOR).should(HAVE_VALUE, "doubleespresso");
  });

  it("should close menu on escape", () => {
    mount(<Default />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Es");
    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI).should(BE_VISIBLE);
    cy.realPress("Escape");
    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI).should(NOT_EXIST);
  });

  it("should close menu when blurred and emit icBlur event", () => {
    mount(<Default />);

    cy.checkHydrated(SEARCH_SELECTOR);
    cy.get(SEARCH_SELECTOR).invoke("on", "icFocus", cy.stub().as("icFocus"));
    cy.get(SEARCH_SELECTOR).invoke("on", "icBlur", cy.stub().as("icBlur"));

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Es");
    cy.realPress("Tab").realPress("Tab").realPress("Tab");
    cy.get("@icFocus").should(HAVE_BEEN_CALLED);
    cy.checkShadowElVisible(SEARCH_SELECTOR, IC_MENU_LI);
    cy.get(SEARCH_SELECTOR).blur();
    cy.get("@icBlur").should(HAVE_BEEN_CALLED);
    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI).should(NOT_EXIST);
  });

  it("should emit icOptionSelect when a menu option has been selected", () => {
    mount(<Default />);

    cy.checkHydrated(SEARCH_SELECTOR);
    cy.get(SEARCH_SELECTOR).invoke(
      "on",
      "icOptionSelect",
      cy.stub().as("icOptionSelect")
    );

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Es");
    cy.realPress("Enter");
    cy.get("@icOptionSelect").should(HAVE_BEEN_CALLED_ONCE);
  });

  it("should emit icMenuChange when opening and closing menu", () => {
    mount(<Default />);

    cy.checkHydrated(SEARCH_SELECTOR);
    cy.get(SEARCH_SELECTOR).invoke(
      "on",
      "icMenuChange",
      cy.stub().as("icMenuChange")
    );

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Es");
    cy.get("@icMenuChange").should(HAVE_BEEN_CALLED_ONCE);
    cy.realPress("Escape");
    cy.get("@icMenuChange").should("have.been.calledTwice");
  });

  it("should prepopulate textfield with value in search mode", () => {
    mount(
      <IcSearchBar label="What is your favourite coffee?" value="Test value" />
    );

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.get(SEARCH_SELECTOR).should(HAVE_VALUE, "Test value");
  });

  it("should prevent form submit event when clear is invoked using Enter", () => {
    mount(<InAForm />);

    cy.checkHydrated(SEARCH_SELECTOR);
    cy.spy(window.console, "log").as("spyWinConsoleLog");
    cy.get(SEARCH_SELECTOR).invoke(
      "on",
      "icSubmitSearch",
      cy.stub().as("icSubmitSearch")
    );

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Espresso");
    cy.realPress("Tab").realPress("Enter");
    cy.get("@icSubmitSearch").should(NOT_HAVE_BEEN_CALLED);
    cy.get("@spyWinConsoleLog").should(
      "not.have.been.calledWith",
      "form submit"
    );
  });

  it("should clear the value when clear is invoked using Space - should not add a whitespace", () => {
    mount(<Default />);

    cy.checkHydrated(SEARCH_SELECTOR);
    cy.get(SEARCH_SELECTOR).invoke("on", "icClear", cy.stub().as("icClear"));

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Espresso");
    cy.get(SEARCH_SELECTOR).should(HAVE_VALUE, "Espresso");
    cy.realPress("Tab").realPress("Space");
    cy.get(SEARCH_SELECTOR).should(HAVE_VALUE, "");
    cy.get("@icClear").should(HAVE_BEEN_CALLED_ONCE);
  });

  it("should emit icSubmitSearch when search button pressed with Space", () => {
    mount(<Default />);

    cy.checkHydrated(SEARCH_SELECTOR);
    cy.get(SEARCH_SELECTOR).invoke(
      "on",
      "icSubmitSearch",
      cy.stub().as("icSubmitSearch")
    );

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Espresso");
    cy.realPress("Tab").realPress("Tab").realPress("Space");
    cy.get("@icSubmitSearch").should(HAVE_BEEN_CALLED_ONCE);
  });

  it("should disable search button on 0 results", () => {
    mount(<Default />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Ga");
    cy.findShadowEl(SEARCH_SELECTOR, "#search-submit-button").should(
      HAVE_CLASS,
      "ic-button-disabled"
    );
  });

  it("should be able to select second menu item after selecting an initial menu item", () => {
    mount(<Default />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Es");
    cy.realPress("Enter");
    cy.get(SEARCH_SELECTOR).should(HAVE_VALUE, "espresso");
    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .click();
    cy.realPress("ArrowDown").realPress("Enter");
    cy.get(SEARCH_SELECTOR).should(HAVE_VALUE, "doubleespresso");
  });

  it("should tab through search bar from input > clear > submit > ic-menu (when options are available) > back to search bar", () => {
    mount(<Default />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Es");
    cy.get(SEARCH_SELECTOR).should(HAVE_FOCUS);
    cy.realPress("Tab");
    cy.findShadowEl(SEARCH_SELECTOR, "#clear-button").should(HAVE_FOCUS);
    cy.realPress("Tab");
    cy.findShadowEl(SEARCH_SELECTOR, "#search-submit-button").should(
      HAVE_FOCUS
    );
    cy.realPress("Tab");
    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI).should(HAVE_FOCUS);
    cy.realPress(["Shift", "Tab"]);
    cy.findShadowEl(SEARCH_SELECTOR, "#search-submit-button").should(
      HAVE_FOCUS
    );
    cy.realPress(["Shift", "Tab"]);
    cy.findShadowEl(SEARCH_SELECTOR, "#clear-button").should(HAVE_FOCUS);
    cy.realPress(["Shift", "Tab"]);
    cy.get(SEARCH_SELECTOR).should(HAVE_FOCUS);
  });

  it("should highlight first option again after no results found", () => {
    mount(<Default />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Po");
    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI).should(
      CONTAIN_TEXT,
      "No results found"
    );
    cy.realPress("Backspace").realPress("Backspace");
    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Es");
    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI)
      .eq(0)
      .should(HAVE_CLASS, "focused-option");
  });

  it("should focus onto button from search bar", () => {
    mount(<WithButton />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Es");
    cy.realPress("ArrowDown");
    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI).should(HAVE_FOCUS);
    cy.realPress("Tab");
    cy.get("#button").should(HAVE_FOCUS);
  });

  it("should emit icChange on delay", () => {
    mount(
      <IcSearchBar label="What is your favourite coffee?" debounce={500} />
    );

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.get(SEARCH_SELECTOR).invoke("on", "icChange", cy.stub().as("icChange"));
    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Foo");
    cy.get("@icChange").should(NOT_HAVE_BEEN_CALLED);
    cy.wait(600);
    cy.get("@icChange").should(HAVE_BEEN_CALLED);
    cy.get(".ic-input").should(HAVE_VALUE, "Foo");
  });

  it("should highlight the menu option items in the correct order with arrowDown", () => {
    mount(<OptionsNoFiltering />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("La");
    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI)
      .eq(0)
      .should(HAVE_CLASS, "focused-option");
    for (let i = 1; i <= 5; i++) {
      cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI)
        .eq(i)
        .should(NOT_HAVE_CLASS, "focused-option");
    }
    cy.realPress("ArrowDown");
    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI)
      .eq(1)
      .should(HAVE_CLASS, "focused-option");
    for (let i = 2; i <= 5; i++) {
      cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI)
        .eq(i)
        .should(NOT_HAVE_CLASS, "focused-option");
    }
    cy.realPress("ArrowDown");
    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI)
      .eq(2)
      .should(HAVE_CLASS, "focused-option");
    for (let i = 3; i <= 5; i++) {
      cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI)
        .eq(i)
        .should(NOT_HAVE_CLASS, "focused-option");
    }
  });

  it("should highlight the menu option items in the correct order with arrowUp", () => {
    mount(<OptionsNoFiltering />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("La");
    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI)
      .eq(0)
      .should(HAVE_CLASS, "focused-option");
    cy.realPress("ArrowUp");
    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI)
      .eq(5)
      .should(HAVE_CLASS, "focused-option");
    for (let i = 0; i <= 4; i++) {
      cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI)
        .eq(i)
        .should(NOT_HAVE_CLASS, "focused-option");
    }
    cy.realPress("ArrowUp");
    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI)
      .eq(4)
      .should(HAVE_CLASS, "focused-option");
    for (let i = 0; i <= 3; i++) {
      cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI)
        .eq(i)
        .should(NOT_HAVE_CLASS, "focused-option");
    }
    cy.realPress("ArrowUp");
    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI)
      .eq(3)
      .should(HAVE_CLASS, "focused-option");
    for (let i = 0; i <= 2; i++) {
      cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI)
        .eq(i)
        .should(NOT_HAVE_CLASS, "focused-option");
    }
  });

  it("should focus the search bar on component load when focusOnLoad is set to true", () => {
    mount(<IcSearchBar label="What is your favourite coffee?" focusOnLoad />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.get(SEARCH_SELECTOR).should(HAVE_FOCUS);
  });

  //Cypress issue causes menu to close on typing third letter, so unable to test this
  it.skip("should update value and move focus back to input when character entered and focus previously on ic-menu", () => {
    mount(<Default />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Es");
    cy.realPress("ArrowDown");
    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI).should(HAVE_FOCUS);
    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("p");
    cy.get(SEARCH_SELECTOR).should(HAVE_FOCUS);
    cy.get(SEARCH_SELECTOR).should(HAVE_VALUE, "esp");
  });

  //External loading search bars are not working fully as expected in Cypress, so there is an additional wait between entering the first and second characters in the below tests

  it("should display the loading option in the menu when loading then cancel loading when options provided", () => {
    mount(<ExternalFilteringSearchBar />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("C")
      .wait(300)
      .type("a");
    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI).should(
      CONTAIN_TEXT,
      "Loading time"
    );
    cy.wait(1300);
    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI).should(
      NOT_CONTAIN,
      "Loading time"
    );
  });

  it("should display the timeout state in the menu when timed out", () => {
    mount(<ExternalFilteringSearchBar />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("C")
      .wait(300)
      .type("a");
    cy.wait(1300);
    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI).should(
      CONTAIN_TEXT,
      "Oops error"
    );
    cy.findShadowEl(SEARCH_SELECTOR, "#retry-button").should("exist");
    cy.findShadowEl(SEARCH_SELECTOR, "#search-submit-button").should(
      HAVE_CLASS,
      "ic-button-disabled"
    );
  });

  it("should cancel loading when clear button is pressed", () => {
    mount(<ExternalFilteringSearchBar />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("C")
      .wait(300)
      .type("a");
    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI).should(
      CONTAIN_TEXT,
      "Loading time"
    );
    cy.findShadowEl(SEARCH_SELECTOR, "#clear-button").click();
    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI).should(NOT_EXIST);
  });

  it("should be able to focus retry button using tab", () => {
    mount(<ExternalFilteringSearchBar />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("C")
      .wait(300)
      .type("a");
    cy.wait(1300);
    cy.realPress("Tab").realPress("Tab");
    cy.findShadowEl(SEARCH_SELECTOR, "#retry-button").should(HAVE_FOCUS);
  });

  it("should trigger a retry when the retry button is pressed using enter", () => {
    mount(<ExternalFilteringSearchBar />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("C")
      .wait(300)
      .type("a");
    cy.wait(1300);
    cy.realPress("Tab").realPress("Tab");
    cy.findShadowEl(SEARCH_SELECTOR, "#retry-button").should(HAVE_FOCUS);
    cy.realPress("Enter");
    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI).should(
      CONTAIN_TEXT,
      "Loading time"
    );
    cy.wait(1300);
    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI)
      .should(HAVE_LENGTH, "2")
      .and(CONTAIN_TEXT, "Cappuccino");
  });

  it("should trigger a retry when the retry button is pressed using space and emit icRetryLoad event", () => {
    mount(<ExternalFilteringSearchBar />);

    cy.checkHydrated(SEARCH_SELECTOR);
    cy.get(SEARCH_SELECTOR).invoke(
      "on",
      "icRetryLoad",
      cy.stub().as("icRetryLoad")
    );

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("C")
      .wait(300)
      .type("a");
    cy.wait(1300);
    cy.realPress("Tab").realPress("Tab");
    cy.findShadowEl(SEARCH_SELECTOR, "#retry-button").should(HAVE_FOCUS);
    cy.realPress("Space");
    cy.get("@icRetryLoad").should(HAVE_BEEN_CALLED_ONCE);
    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI).should(
      CONTAIN_TEXT,
      "Loading time"
    );
    cy.wait(1300);
    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI)
      .should(HAVE_LENGTH, "2")
      .and(CONTAIN_TEXT, "Cappuccino");
  });
});

describe("IcSearchBar visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render default search bar", () => {
    mount(<Default />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.021),
    });
  });

  it("should render disabled search bar", () => {
    mount(<Disabled />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "disabled",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.021),
    });
  });

  it("should render full width search bar", () => {
    mount(<FullWidth />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "full-width",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.061),
    });
  });

  it("should render search bar with helper text", () => {
    mount(<HelperText />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "helper-text",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.045),
    });
  });

  it("should render search bar with hidden label", () => {
    mount(<HiddenLabel />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "hidden-label",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.002),
    });
  });

  it("should render search bar with options - no filtering", () => {
    mount(<OptionsNoFiltering />);

    cy.checkHydrated(SEARCH_SELECTOR);
    cy.wait(500);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("La");

    // cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "options-no-filtering",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.05),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render search bar with custom empty option list text", () => {
    mount(<EmptyOptionListText />);

    cy.checkHydrated(SEARCH_SELECTOR);
    cy.wait(500);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Macchiato");

    // cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "empty-option-list-text",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.038),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render search bar with characters until suggestion set - no show", () => {
    mount(<CharactersUntilSuggestion />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Lat");

    // cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "characters-until-suggestion-no-show",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
    });
  });

  it("should render search bar with characters until suggestion set - show", () => {
    mount(<CharactersUntilSuggestion />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Latte");

    // cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "characters-until-suggestion-show",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.025),
    });
  });

  it("should render small search bar", () => {
    mount(<Small />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "small",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.021),
    });
  });

  it("should render search bar with long option labels", () => {
    mount(<LongOptionLabel />);

    cy.checkHydrated(SEARCH_SELECTOR);
    cy.wait(500);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("es");

    // cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "long-option-label",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.078),
      delay: 500,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should display tooltip on search button when enabled", () => {
    mount(<Default />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(SEARCH_INPUT)
      .type("Es");
    cy.realPress("Tab").realPress("Tab");
    cy.findShadowEl(SEARCH_SELECTOR, "#search-submit-button").should(
      HAVE_FOCUS
    );

    //cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "search-submit-tooltip",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.035),
    });
  });

  it("should render readonly", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSearchBar label="What is your favourite coffee?" readonly />
      </div>
    );

    cy.checkHydrated(SEARCH_SELECTOR);

    //cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "readonly",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.016),
    });
  });

  it("should display red lines under incorrect spelling when spellcheck is on", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcSearchBar label="What is your favourite coffee?" spellcheck={true} />
      </div>
    );

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Spelcheck");

    //cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "spellcheck",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.027),
    });
  });

  it("should render dark theme search bar", () => {
    mount(<ThemeDark />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Lat");

    // cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "theme-dark",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.024),
    });
  });
});

describe("IcSearchBar visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  after(() => {
    cy.disableForcedColors();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render default search bar in high contrast mode", () => {
    mount(<Default />);

    cy.checkHydrated(SEARCH_SELECTOR);
    cy.compareSnapshot({
      name: "default-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
    });
  });

  it("should render disabled search bar in high contrast mode", () => {
    mount(<Disabled />);

    cy.checkHydrated(SEARCH_SELECTOR);
    cy.compareSnapshot({
      name: "disabled-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
    });
  });

  it("should render focused search bar in high contrast mode", () => {
    mount(<Default />);

    cy.checkHydrated(SEARCH_SELECTOR);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(SEARCH_INPUT)
      .focus();

    cy.compareSnapshot({
      name: "focused-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.016),
    });
  });

  it("should render search bar with options in high contrast mode", () => {
    mount(<OptionsNoFiltering />);

    cy.checkHydrated(SEARCH_SELECTOR);
    cy.wait(500);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("La")
      .wait(200);

    cy.compareSnapshot({
      name: "options-no-filtering-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.042),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });
});
