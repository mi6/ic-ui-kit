/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress/react";
import { IcNavigationItem, IcPageHeader } from "../../components";

const NAVIGATION_ITEM = "ic-navigation-item";

describe("IcNavigationItem page header tab height", () => {
  it("matches the tab height when href is omitted", () => {
    mount(
      <IcPageHeader heading="Page heading">
        <IcNavigationItem slot="tabs" label="Linked tab" href="#" />
        <IcNavigationItem slot="tabs" label="Router tab" />
      </IcPageHeader>
    );

    cy.checkHydrated("ic-page-header");
    cy.get(NAVIGATION_ITEM).should("have.length", 2);

    cy.get(NAVIGATION_ITEM)
      .eq(0)
      .shadow()
      .find("a.link")
      .then(($linkedTab) => {
        const linkedTabHeight = $linkedTab[0].getBoundingClientRect().height;
        expect(linkedTabHeight).to.be.greaterThan(0);

        cy.get(NAVIGATION_ITEM)
          .eq(1)
          .shadow()
          .find("div.link")
          .should(($routerTab) => {
            expect($routerTab[0].getBoundingClientRect().height).to.equal(
              linkedTabHeight
            );
          });
      });
  });
});
