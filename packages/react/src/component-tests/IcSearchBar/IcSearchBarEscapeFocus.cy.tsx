/// <reference types="cypress" />

import { mount } from "cypress/react";
import React from "react";
import { IcSearchBar } from "../../components";
import { HAVE_FOCUS, NOT_EXIST } from "../utils/constants";

const SEARCH_SELECTOR = "ic-search-bar";
const SEARCH_INPUT = 'input[inputmode="search"]';
const MENU_OPTION = "li[role='option']";

const options = [
  { label: "Espresso", value: "espresso" },
  { label: "Double Espresso", value: "doubleespresso" },
];

describe("IcSearchBar Escape focus regression", () => {
  it("returns focus to the input when Escape closes the options menu", () => {
    mount(<IcSearchBar label="Search" options={options} />);

    cy.checkHydrated(SEARCH_SELECTOR);
    cy.findShadowEl(SEARCH_SELECTOR, SEARCH_INPUT).type("Es");

    cy.realPress("ArrowDown");
    cy.findShadowEl(SEARCH_SELECTOR, MENU_OPTION)
      .eq(0)
      .should(HAVE_FOCUS);

    cy.realPress("Escape");

    cy.findShadowEl(SEARCH_SELECTOR, MENU_OPTION).should(NOT_EXIST);
    cy.findShadowEl(SEARCH_SELECTOR, SEARCH_INPUT).should(HAVE_FOCUS);
  });
});
