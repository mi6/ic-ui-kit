/// <reference types="Cypress" />

import React from "react";
import {
  IcBreadcrumb,
  IcBreadcrumbGroup,
} from "../../components";
import {
  HAVE_CLASS,
 } from "../utils/constants";
import { CYPRESS_AXE_OPTIONS } from "../../../cypress/utils/a11y";
import { mount } from "cypress/react";
import { SlottedSVG } from "../../react-component-lib/slottedSVG";
const DEFAULT_TEST_THRESHOLD = 0.03;

describe("IcBreadcrumb", () => {
beforeEach(() => {
  cy.injectAxe();
  cy.viewport(1024, 750);
   });
   afterEach(() => {
     cy.task("generateReport");
   });

  it("renders", () => {
    mount(
  <IcBreadcrumbGroup>
  <IcBreadcrumb pageTitle="Home" href="#" />
  <IcBreadcrumb pageTitle="Beverages" href="#" />
  <IcBreadcrumb 
    pageTitle="Coffee"
    href="#"
  /></IcBreadcrumbGroup>);
  cy.checkHydrated("ic-breadcrumb");
  cy.get("ic-breadcrumb-group").should("be.visible");
  cy.findShadowEl("ic-breadcrumb",".chevron").should('be.visible');
  cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  cy.compareSnapshot("rabderBreadcrumb", DEFAULT_TEST_THRESHOLD + 0.03);
 });

 it("renders with page-title and href", () => {
    mount(
        <IcBreadcrumbGroup>
        <IcBreadcrumb pageTitle="Home" href="#" />
        <IcBreadcrumb pageTitle="Beverages" href="#" />
        <IcBreadcrumb 
          pageTitle="Coffee"
          href="#" />
      </IcBreadcrumbGroup>);
  cy.checkHydrated("ic-breadcrumb");
  cy.findShadowEl("ic-breadcrumb",".chevron").should('be.visible');
  cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  cy.compareSnapshot("randerPageTitle", DEFAULT_TEST_THRESHOLD + 0.03);
  });

  it("renders with page-title, href, currents", () => {
    mount (
    <IcBreadcrumbGroup>
    <IcBreadcrumb pageTitle="Home" href="#" />
    <IcBreadcrumb pageTitle="Beverages" href="#" />
    <IcBreadcrumb 
      current
      pageTitle="Coffee"
      href="#" />
  </IcBreadcrumbGroup> );
    cy.checkHydrated("ic-breadcrumb");
    cy.findShadowEl("ic-breadcrumb",".chevron").should('be.visible');
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
    cy.compareSnapshot("pageTitleWithCurrent", DEFAULT_TEST_THRESHOLD + 0.03);
  });

it("rendering with BackBreadcrumbOnly", () => {
 mount (
  <IcBreadcrumbGroup backBreadcrumbOnly>
  <IcBreadcrumb pageTitle="Home" href="#" />
  <IcBreadcrumb pageTitle="Beverages" href="#" />
  <IcBreadcrumb 
    current 
    pageTitle="Coffee"
    href="#"
  /></IcBreadcrumbGroup>);
cy.checkHydrated("ic-breadcrumb");
cy.findShadowEl("ic-breadcrumb", "svg").should("be.visible");
cy.get('[page-title="Beverages"]').should('be.visible');
cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
cy.compareSnapshot("backBreadcrumb", DEFAULT_TEST_THRESHOLD + 0.03);
});
 
it("renders Breadcrumb with icon", () => {
mount(<IcBreadcrumbGroup>
    <IcBreadcrumb pageTitle="Home" href="#">
    <SlottedSVG
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
              fill="currentColor"
            />
    </SlottedSVG>
    </IcBreadcrumb>
    <IcBreadcrumb pageTitle="Beverages" href="#">
    <SlottedSVG
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"
              fill="currentColor"
            />
    </SlottedSVG>
    </IcBreadcrumb>
    <IcBreadcrumb 
          pageTitle="Coffee" 
          current
          href="#"
        >
    <SlottedSVG
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.93 0 3.5-1.57 3.5-3.5S20.43 3 18.5 3zM16 5v3H6V5h10zm2.5 3H18V5h.5c.83 0 1.5.67 1.5 1.5S19.33 8 18.5 8zM4 19h16v2H4v-2z"
              fill="currentColor"
            />
    </SlottedSVG>
    </IcBreadcrumb>
    </IcBreadcrumbGroup>);
    cy.checkHydrated("ic-breadcrumb");
    cy.findShadowEl("ic-breadcrumb",".chevron").should('be.visible');
    cy.findShadowEl("ic-breadcrumb", "svg").should("be.visible");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
    cy.compareSnapshot("breadcrumWithIcon", DEFAULT_TEST_THRESHOLD + 0.03);
  });

  it("should add the 'current-page' class when current prop is true", () => {
    mount(
        <IcBreadcrumbGroup>
        <IcBreadcrumb pageTitle="Home" href="#" />
        <IcBreadcrumb pageTitle="Beverages" href="#" />
        <IcBreadcrumb 
          pageTitle="Coffee"
          href="#"
        /></IcBreadcrumbGroup>);
    cy.findShadowEl("ic-breadcrumb", ".hydrated")
    .should("exist")
    .should(HAVE_CLASS, "hydrated");
    cy.findShadowEl("ic-breadcrumb",".chevron").should('be.visible');
    cy.compareSnapshot("currentPageClassBreadcrumb", DEFAULT_TEST_THRESHOLD + 0.03);
  });

  it("should call 'setFocus' when breadcrumb is focused", () => {
    mount(
        <IcBreadcrumbGroup>
        <IcBreadcrumb pageTitle="Home" href="#" />
        <IcBreadcrumb pageTitle="Beverages" href="#" />
        <IcBreadcrumb 
          pageTitle="Coffee"
          href="#"
        /></IcBreadcrumbGroup>);
        cy.wait(500).get("ic-breadcrumb").shadow().find("ic-link").shadow().find("a").
       each(($el, index, list) => {
        cy.wrap($el).focus().should('have.focus');
    })    
    cy.compareSnapshot("focusBreadcrumb", DEFAULT_TEST_THRESHOLD+ 0.3);
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with Collapsed", () => {
    mount (
        <IcBreadcrumbGroup collapsed>
        <IcBreadcrumb pageTitle="Home" href="#" />
        <IcBreadcrumb pageTitle="Beverages" href="#" />
        <IcBreadcrumb 
          pageTitle="Coffee" 
          current
          href="#"
        />
    </IcBreadcrumbGroup>);
    cy.checkHydrated("ic-breadcrumb");
    cy.get("#collapsed-ellipsis").should('be.visible').click();
    cy.get('[page-title="Beverages"]').should('be.visible');
    cy.checkA11y(undefined,{includedImpacts:["critical"]});
    cy.compareSnapshot("collapsedBreadcrumb", DEFAULT_TEST_THRESHOLD + 0.03);
  });
}); 