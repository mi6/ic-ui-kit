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
} from "./IcSearchBarTestData";
import {
  BE_VISIBLE,
  CONTAIN_TEXT,
  HAVE_BEEN_CALLED_WITH,
  HAVE_LENGTH,
  NOT_EXIST,
} from "../utils/constants";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";
import "cypress-axe";

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

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("te");

    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI)
      .should(BE_VISIBLE)
      .should(HAVE_LENGTH, "1")
      .should(CONTAIN_TEXT, "Latte");
  });

  it("should render with long option labels", () => {
    mount(<LongOptionLabel />);

    cy.checkHydrated(SEARCH_SELECTOR);
    cy.wait(500);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(SEARCH_INPUT)
      .as("input");

    cy.get("@input").focus();
    cy.realType("es").wait(200);

    cy.findShadowEl(SEARCH_SELECTOR, IC_MENU_LI)
      .should(BE_VISIBLE)
      .should(HAVE_LENGTH, "3")
      .should(
        CONTAIN_TEXT,
        "Double Espresso because it tastes like double the amount of coffee"
      );
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
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
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
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.018),
    });
  });

  it("should render disabled search bar in high contrast mode", () => {
    mount(<Disabled />);

    cy.checkHydrated(SEARCH_SELECTOR);
    cy.compareSnapshot({
      name: "disabled-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.018),
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
      .find(SEARCH_INPUT)
      .as("input");

    cy.get("@input").focus();
    cy.realType("La").wait(200);

    cy.compareSnapshot({
      name: "options-no-filtering-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.042),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });
});
