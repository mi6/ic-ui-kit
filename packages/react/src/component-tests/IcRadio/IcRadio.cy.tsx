/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress/react";
import {
  Radios,
  RadioOptionsEmptyInitial,
  RadioOptionsChanging,
} from "./IcRadioTestData";
import { HAVE_PROP, HAVE_VALUE, HAVE_FOCUS } from "../utils/constants";

//const DEFAULT_TEST_THRESHOLD = 0.2;

const RADIO_GROUP_SELECTOR = "ic-radio-group";
const RADIO_SELECTOR = "ic-radio-option";
const IC_BUTTON = "ic-button";
const BUTTON = "button";
const INPUT = "input";

describe("IcRadio", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("renders", () => {
    mount(<Radios />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);
    cy.checkA11yWithWait();
  });

  it("Should test no options initially", () => {
    mount(<RadioOptionsEmptyInitial />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);
    cy.clickOnButton(IC_BUTTON);

    cy.get(RADIO_SELECTOR).last().should(HAVE_VALUE, "Item 4");
    cy.findShadowEl(IC_BUTTON, BUTTON).focus();

    cy.realPress(["Shift", "Tab"]);
    cy.get(RADIO_SELECTOR).first().should(HAVE_PROP, "selected", false);
    cy.get(RADIO_SELECTOR).eq(1).should(HAVE_PROP, "selected", false);
    cy.get(RADIO_SELECTOR).eq(2).should(HAVE_PROP, "selected", false);
    cy.get(RADIO_SELECTOR).last().should(HAVE_PROP, "selected", false);

    cy.findShadowEl(RADIO_SELECTOR, INPUT).first().should(HAVE_FOCUS);

    cy.realPress("ArrowDown");

    cy.findShadowEl(RADIO_SELECTOR, INPUT).eq(1).should(HAVE_FOCUS);
    cy.get(RADIO_SELECTOR).first().should(HAVE_PROP, "selected", false);
    cy.get(RADIO_SELECTOR).eq(1).should(HAVE_PROP, "selected", true);
  });

  it("Should update with new options", () => {
    mount(<RadioOptionsChanging />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);

    cy.get(RADIO_SELECTOR).last().should(HAVE_VALUE, "Item 4");

    cy.clickOnButton(IC_BUTTON);

    cy.findShadowEl(IC_BUTTON, BUTTON).focus();
    cy.realPress(["Shift", "Tab"]);

    cy.findShadowEl(RADIO_SELECTOR, INPUT).first().should(HAVE_FOCUS);

    cy.get(RADIO_SELECTOR)
      .first()
      .should(HAVE_VALUE, "Item 5")
      .should(HAVE_PROP, "selected", false);

    cy.get(RADIO_SELECTOR)
      .last()
      .should(HAVE_VALUE, "Item 6")
      .should(HAVE_PROP, "selected", false);

    cy.realPress("ArrowDown");

    cy.findShadowEl(RADIO_SELECTOR, INPUT).eq(1).should(HAVE_FOCUS);
    cy.get(RADIO_SELECTOR).first().should(HAVE_PROP, "selected", false);
    cy.get(RADIO_SELECTOR).last().should(HAVE_PROP, "selected", true);
  });
});
