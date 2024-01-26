/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress/react";
import { IcDataTable } from "../../components";

import {
  COLS,
  DATA,
} from "../../../../canary-web-components/src/components/ic-data-table/story-data";

describe("IcDataTables", () => {
  it("renders", () => {
    mount(<IcDataTable columns={COLS} data={DATA} caption="Data Tables" />);

    cy.checkHydrated("ic-data-table");

    cy.get("ic-data-table").should("to.be.visible");
  });
});
