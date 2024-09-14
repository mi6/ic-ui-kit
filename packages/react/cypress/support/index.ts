/// <reference types="cypress" />
/// <reference types="@cypress-audit/lighthouse" />

import "./component";
import "cypress-real-events";

import Commands from "./commands";

Cypress.Commands.add("checkHydrated", Commands.checkHydrated);
Cypress.Commands.add("clickOnShadowEl", Commands.clickOnShadowEl);
Cypress.Commands.add("checkShadowElVisible", Commands.checkShadowElVisible);
Cypress.Commands.add("disableForcedColors", Commands.disableForcedColors);
Cypress.Commands.add("enableForcedColors", Commands.enableForcedColors);
Cypress.Commands.add("findShadowEl", Commands.findShadowEl);
Cypress.Commands.add("clickOnButton", Commands.clickOnButton);
Cypress.Commands.add("checkA11yWithWait", Commands.checkA11yWithWait);
Cypress.Commands.add("mockResizeObserver", Commands.mockResizeObserver);
