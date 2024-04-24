/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress/react";
import { Controlled, Uncontrolled } from "./IcTextFieldTestData";
import { HAVE_BEEN_CALLED_WITH, HAVE_PROP } from "../utils/constants";

const TEXT_FIELD_SELECTOR = "ic-text-field";

describe("IcTextField", () => {
  it("renders as a controlled component", () => {
    mount(<Controlled />);

    cy.get(TEXT_FIELD_SELECTOR).eq(0).should(HAVE_PROP, "value", "");
    cy.findShadowEl(TEXT_FIELD_SELECTOR, "ic-input-component-container").type(
      "Test"
    );
    cy.get(TEXT_FIELD_SELECTOR).eq(0).should(HAVE_PROP, "value", "Test");
  });

  it("renders as an uncontrolled component", () => {
    mount(<Uncontrolled />);

    cy.spy(window.console, "log").as("spyWinConsoleLog");
    cy.findShadowEl(TEXT_FIELD_SELECTOR, "ic-input-component-container").type(
      "Test"
    );
    cy.get("@spyWinConsoleLog").should(HAVE_BEEN_CALLED_WITH, "Test");
  });
});
