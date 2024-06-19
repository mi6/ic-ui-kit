/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress/react";
import {
  Radios,
  RadioOptionsEmptyInitial,
  RadioOptionsChanging,
  Controlled,
  Uncontrolled,
} from "./IcRadioTestData";
import {
  HAVE_PROP,
  HAVE_VALUE,
  HAVE_FOCUS,
  HAVE_BEEN_CALLED_WITH,
} from "../utils/constants";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const RADIO_GROUP_SELECTOR = "ic-radio-group";
const RADIO_SELECTOR = "ic-radio-option";
const IC_BUTTON = "ic-button";
const BUTTON = "button";
const INPUT = "input";
const DEFAULT_TEST_THRESHOLD = 0;

describe("IcRadio", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render", () => {
    mount(<Radios />);

    cy.checkHydrated(RADIO_GROUP_SELECTOR);
    cy.checkA11yWithWait();
  });

  it("should test no options initially", () => {
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

  it("should update with new options", () => {
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

  it("should render as a controlled component", () => {
    mount(<Controlled />);

    cy.get("ic-button#unselect-btn").click();
    cy.get(RADIO_SELECTOR).eq(0).should(HAVE_PROP, "selected", false);
    cy.get("ic-button#select-btn").click();
    cy.get(RADIO_SELECTOR).eq(0).should(HAVE_PROP, "selected", true);
  });

  it("should render as an uncontrolled component", () => {
    mount(<Uncontrolled />);

    cy.spy(window.console, "log").as("spyWinConsoleLog");
    cy.get(RADIO_SELECTOR).eq(0).shadow().find(".container").click();
    cy.get("@spyWinConsoleLog").should(HAVE_BEEN_CALLED_WITH, true);
  });
});

describe("visual regression and a11y", () => {
  it("should render IcRadio", () => {
    mount(<Radios />);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "default-radio",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.045),
    });
  });
  it("should render IcRadio with no options initially", () => {
    mount(<RadioOptionsEmptyInitial />);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "empty-initial-radio",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.034),
    });
  });
});
