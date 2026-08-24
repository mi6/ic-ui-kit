/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress/react";
import { IcCardVertical, IcLink } from "../../components";

describe("IcCardVertical clickable heading underline", () => {
  it("matches IcLink underline styling on hover", () => {
    mount(
      <>
        <IcLink href="#">Reference link</IcLink>
        <IcCardVertical heading="Clickable card" clickable />
      </>
    );

    cy.checkHydrated("ic-link");
    cy.checkHydrated("ic-card-vertical");

    cy.get("ic-link")
      .shadow()
      .find(".link")
      .realHover()
      .then(($link) => {
        const linkStyle = getComputedStyle($link[0]);
        const expected = {
          borderBottomWidth: linkStyle.borderBottomWidth,
          marginBottom: linkStyle.marginBottom,
          textDecorationThickness: linkStyle.textDecorationThickness,
          textUnderlineOffset: linkStyle.textUnderlineOffset,
        };

        cy.get("ic-card-vertical").shadow().find(".card").realHover();
        cy.get("ic-card-vertical")
          .shadow()
          .find(".card-title")
          .should(($title) => {
            const cardStyle = getComputedStyle($title[0]);

            expect(cardStyle.borderBottomWidth).to.equal(
              expected.borderBottomWidth
            );
            expect(cardStyle.marginBottom).to.equal(expected.marginBottom);
            expect(cardStyle.textDecorationThickness).to.equal(
              expected.textDecorationThickness
            );
            expect(cardStyle.textUnderlineOffset).to.equal(
              expected.textUnderlineOffset
            );
          });
      });
  });
});
