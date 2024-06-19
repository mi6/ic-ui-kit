/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress/react";
import { Controlled } from "./IcSwitchTestData";
import { HAVE_PROP } from "../utils/constants";

describe("IcSwitch", () => {
  it("should render as a controlled component", () => {
    mount(<Controlled />);

    cy.get("ic-button#uncheck-btn").click();
    cy.get("ic-switch").eq(0).should(HAVE_PROP, "checked", false);
    cy.get("ic-button#check-btn").click();
    cy.get("ic-switch").eq(0).should(HAVE_PROP, "checked", true);
  });

  //No test for uncontrolled as it always returns false
});
