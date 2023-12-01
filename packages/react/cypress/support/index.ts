
/// <reference types="cypress" />

import './component';

import Commands from './commands';

Cypress.Commands.add('checkHydrated', Commands.checkHydrated);
Cypress.Commands.add('clickOnShadowEl', Commands.clickOnShadowEl);
Cypress.Commands.add('checkShadowElVisible', Commands.checkShadowElVisible);
Cypress.Commands.add('findShadowEl', Commands.findShadowEl);
Cypress.Commands.add('getWhatIsFavCoffeeQueTitle', Commands.getWhatIsFavCoffeeQueTitle);
Cypress.Commands.add('clickOnButton',Commands.clickOnButton );