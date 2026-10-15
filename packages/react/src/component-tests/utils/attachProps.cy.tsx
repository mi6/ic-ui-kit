/// <reference types="Cypress" />

import { mount } from "cypress/react";
import React from "react";
import { IcButton } from "../../components";
import { HAVE_ATTR, NOT_HAVE_ATTR } from "./constants";

const IC_BUTTON_SELECTOR = "ic-button";
const XSS_FLAG = "__xss__";

describe("attachProps security", () => {
  afterEach(() => {
    delete (window as any)[XSS_FLAG];
  });

  it("should not reflect an innerHTML prop onto the DOM node", () => {
    const maliciousProps = {
      innerHTML: `<img src=x onerror="window.${XSS_FLAG} = true">`,
    };

    mount(<IcButton {...(maliciousProps as any)}>Test</IcButton>);

    cy.checkHydrated(IC_BUTTON_SELECTOR);
    cy.get(IC_BUTTON_SELECTOR).then(($el) => {
      expect($el[0].innerHTML).not.to.include("onerror");
    });
    cy.window().its(XSS_FLAG).should("be.undefined");
  });

  it("should not turn a lowercase onclick string prop into a live handler", () => {
    const maliciousProps = {
      onclick: `window.${XSS_FLAG} = true`,
    };

    mount(<IcButton {...(maliciousProps as any)}>Test</IcButton>);

    cy.checkHydrated(IC_BUTTON_SELECTOR);
    cy.get(IC_BUTTON_SELECTOR).should(NOT_HAVE_ATTR, "onclick");
    cy.get(IC_BUTTON_SELECTOR).click({ force: true });
    cy.window().its(XSS_FLAG).should("be.undefined");
  });

  it("should still apply safe string props as attributes", () => {
    mount(<IcButton id="safe-button">Test</IcButton>);

    cy.checkHydrated(IC_BUTTON_SELECTOR);
    cy.get(IC_BUTTON_SELECTOR).should(HAVE_ATTR, "id", "safe-button");
  });
});
