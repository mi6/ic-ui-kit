/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress/react";
import {
  Controlled,
  IC_INPUT_CONTAINER,
  IC_MENU_LI,
  Uncontrolled,
} from "./IcSearchBarTestData";
import {
  BE_VISIBLE,
  HAVE_BEEN_CALLED_WITH,
  HAVE_LENGTH,
} from "../utils/constants";

const SEARCH_SELECTOR = "ic-search-bar";
const TEXT_FIELD_SELECTOR = "ic-text-field";

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
});
