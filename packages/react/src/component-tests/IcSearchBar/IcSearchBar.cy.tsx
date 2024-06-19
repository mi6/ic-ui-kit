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
} from "./IcSearchBarTestData";
import {
  BE_VISIBLE,
  HAVE_BEEN_CALLED_WITH,
  HAVE_LENGTH,
} from "../utils/constants";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";
import "cypress-axe";

const SEARCH_SELECTOR = "ic-search-bar";
const TEXT_FIELD_SELECTOR = "ic-text-field";
const DEFAULT_TEST_THRESHOLD = 0.042;

describe("IcSearchBar", () => {
  it("should render as a controlled component", () => {
    mount(<Controlled />);

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

    cy.compareSnapshot({
      name: "controlled",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.01),
    });
  });

  it("should render as an uncontrolled component", () => {
    mount(<Uncontrolled />);

    cy.spy(window.console, "log").as("spyWinConsoleLog");
    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("La");
    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("{enter}");
    cy.get("@spyWinConsoleLog").should(HAVE_BEEN_CALLED_WITH, "fla");
  });

  it("should render with custom empty option list text", () => {
    mount(<EmptyOptionListText />);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Latte");

    cy.compareSnapshot({
      name: "empty-option-list-text",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.013),
    });
  });

  it("should render with characters until suggestion set", () => {
    mount(<CharactersUntilSuggestion />);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("Lat");

    cy.compareSnapshot({
      name: "characters-until-suggestion-no-show",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("te");

    cy.compareSnapshot({
      name: "characters-until-suggestion-show",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.03),
    });
  });

  it("should render with long option labels", () => {
    mount(<LongOptionLabel />);

    cy.findShadowEl(SEARCH_SELECTOR, TEXT_FIELD_SELECTOR)
      .shadow()
      .find(IC_INPUT_CONTAINER)
      .type("esp")
      .click()
      .wait(300);

    cy.compareSnapshot({
      name: "long-option-label",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.001),
      delay: 500,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });
});
