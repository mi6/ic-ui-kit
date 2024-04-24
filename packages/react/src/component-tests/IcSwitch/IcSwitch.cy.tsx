/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress/react";
import { Controlled, Uncontrolled } from "./IcSwitchTestData";
import { HAVE_BEEN_CALLED_WITH, HAVE_PROP } from "../utils/constants";

describe("IcSwitch", () => {
  it("renders as a controlled component", () => {
    mount(<Controlled />);

    cy.get("ic-button#uncheck-btn").click();
    cy.get("ic-switch").eq(0).should(HAVE_PROP, "checked", false);
    cy.get("ic-button#check-btn").click();
    cy.get("ic-switch").eq(0).should(HAVE_PROP, "checked", true);
  });

  //No test for uncontrolled as it always returns false
});
