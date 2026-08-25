/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress/react";
import { IcPageHeader } from "../../components";

const PAGE_HEADER = "ic-page-header";
const ACTIONS = `${PAGE_HEADER} > [slot="actions"]`;

type PageHeaderElement = HTMLElement & { reverseOrder: boolean };

const expectActionOrder = (expected: string[]) => {
  cy.get(ACTIONS).should(($actions) => {
    const labels = $actions
      .toArray()
      .map((action) => action.textContent?.trim());

    expect(labels).to.deep.equal(expected);
  });
};

describe("IcPageHeader reverseOrder updates", () => {
  it("updates action order immediately when reverseOrder changes", () => {
    cy.viewport(1024, 500);

    mount(
      <IcPageHeader heading="Page heading">
        <button slot="actions" type="button">
          First action
        </button>
        <button slot="actions" type="button">
          Second action
        </button>
      </IcPageHeader>
    );

    cy.checkHydrated(PAGE_HEADER);
    expectActionOrder(["First action", "Second action"]);

    cy.get(PAGE_HEADER).then(($header) => {
      ($header[0] as PageHeaderElement).reverseOrder = true;
    });

    expectActionOrder(["Second action", "First action"]);

    cy.get(PAGE_HEADER).then(($header) => {
      ($header[0] as PageHeaderElement).reverseOrder = false;
    });

    expectActionOrder(["First action", "Second action"]);
  });
});
