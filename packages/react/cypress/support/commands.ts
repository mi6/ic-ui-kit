/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />

import { BE_VISIBLE, HAVE_CLASS } from "../../src/component-tests/utils/constants";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const compareSnapshotCommand = require("cypress-image-diff-js/dist/command");
compareSnapshotCommand();

// Create the typing for the compareSnapshot command
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Compare the mounted component against the named snapshot
       * @param {string} snapName the name of the snapshot to capture and compare with
      */
      compareSnapshot: typeof compareSnapshotCommand;
      /**
       * Check that the provided element has the hydrated class applied
       * @param {string} element identifier of the element to check
       */
      checkHydrated: typeof Commands.checkHydrated;
      /**
       * Click the selector inside an element's shadow root
       * @param {string} element identifier of the parent element
       * @param {string} selector identifier of the selector to be clicked 
       */
      clickOnShadowEl: typeof Commands.clickOnShadowEl;
      /**
       * Check the selector inside the shadow root of an element is visible
       * @param {string} element identifier of the parent element
       * @param {string} selector identifier of the selector to be clicked 
       */
      checkShadowElVisible: typeof Commands.checkShadowElVisible;
      /**
       * Check the selector inside the shadow root of an element is visible
       * @param {string} element identifier of the parent element
       * @param {string} selector identifier of the selector to be clicked 
       * @returns the selector
       */
      findShadowEl: typeof Commands.findShadowEl;
      /**
       * Used by the IcSelect tests. Checks that the 'what is your favourite coffee' question is visible on provided element
       * @param {string} element identifier of the element to check
       */
      getWhatIsFavCoffeeQueTitle: typeof Commands.getWhatIsFavCoffeeQueTitle;
      /**
       * Force-click the provided element
       * @param {string} element identifier of the element to check
       */
      clickOnButton :typeof Commands.clickOnButton;
    }
  }
}

const checkHydrated = (element: string): void => {
  cy.get(`${element}`).should(HAVE_CLASS, 'hydrated');
}

const clickOnShadowEl = (element: string, selector: string): void => {
  cy.get(element).shadow().find(selector).click();
}

const checkShadowElVisible = (element: string, selector: string): Cypress.Chainable<JQuery<HTMLElement>> => (
  cy.get(`${element}`).shadow().find(`${selector}`).should(BE_VISIBLE)
);

const findShadowEl = (element: string, selector: string): Cypress.Chainable<JQuery<HTMLElement>> => (
  cy.get(`${element}`).shadow().find(`${selector}`)
);

const getWhatIsFavCoffeeQueTitle = (element: string): void => {
  cy
    .get(`${element}`)
    .shadow()
    .contains("What is your favourite coffee?")
    .should(BE_VISIBLE);
};

const clickOnButton = (element: string): void => {
  cy.get(`${element}`).click({ force: true });
};

const Commands = {
  checkHydrated,
  clickOnShadowEl,
  checkShadowElVisible,
  findShadowEl,
  getWhatIsFavCoffeeQueTitle,
  clickOnButton,
};

export default Commands;