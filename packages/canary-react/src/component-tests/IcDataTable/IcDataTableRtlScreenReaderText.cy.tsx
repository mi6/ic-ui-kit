/// <reference types="cypress" />

import React from "react";
import { mount } from "cypress/react";
import { IcDataTable } from "../../components";

const columns = [{ key: "name", title: "Name", dataType: "string" as const }];
const data = [{ name: "Ada" }];

describe("IcDataTable RTL screen-reader text", () => {
  afterEach(() => {
    cy.document().then((document) => {
      document.documentElement.removeAttribute("dir");
    });
  });

  it("keeps the sort announcement outside the viewport in RTL", () => {
    cy.document().then((document) => {
      document.documentElement.setAttribute("dir", "rtl");
    });

    mount(
      <IcDataTable
        caption="People"
        columns={columns}
        data={data}
        sortable
      />
    );

    cy.checkHydrated("ic-data-table");
    cy.get("ic-data-table")
      .shadow()
      .find(".screen-reader-sort-text")
      .should(($announcement) => {
        const { left } = $announcement[0].getBoundingClientRect();
        expect(left).to.be.greaterThan(window.innerWidth);
      });
  });
});
