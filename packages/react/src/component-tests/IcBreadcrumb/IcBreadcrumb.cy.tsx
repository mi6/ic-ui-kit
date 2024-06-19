/// <reference types="Cypress" />

import { mount } from "cypress/react";
import React from "react";
import { IcBreadcrumb, IcBreadcrumbGroup } from "../../components";
import { SlottedSVG } from "../../react-component-lib/slottedSVG";
import { BE_VISIBLE, HAVE_FOCUS } from "../utils/constants";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const DEFAULT_TEST_THRESHOLD = 0.013;

const IC_BREADCRUMB_LABEL = "ic-breadcrumb";

describe("IcBreadcrumb", () => {
  beforeEach(() => {
    cy.injectAxe();
    cy.viewport(1024, 750);
  });
  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render", () => {
    mount(
      <IcBreadcrumbGroup>
        <IcBreadcrumb pageTitle="Home" href="#" />
        <IcBreadcrumb pageTitle="Beverages" href="#" />
        <IcBreadcrumb pageTitle="Coffee" href="#" />
      </IcBreadcrumbGroup>
    );
    cy.checkHydrated(IC_BREADCRUMB_LABEL);
    cy.get("ic-breadcrumb-group").should(BE_VISIBLE);
    cy.findShadowEl(IC_BREADCRUMB_LABEL, ".chevron").should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.005),
    });
  });

  it("should render with page-title and href", () => {
    mount(
      <IcBreadcrumbGroup>
        <IcBreadcrumb pageTitle="Home" href="#" />
        <IcBreadcrumb pageTitle="Beverages" href="#" />
        <IcBreadcrumb pageTitle="Coffee" href="#" />
      </IcBreadcrumbGroup>
    );
    cy.checkHydrated(IC_BREADCRUMB_LABEL);
    cy.findShadowEl(IC_BREADCRUMB_LABEL, ".chevron").should(BE_VISIBLE);
  });

  it("should render with page-title, href, currents", () => {
    mount(
      <IcBreadcrumbGroup>
        <IcBreadcrumb pageTitle="Home" href="#" />
        <IcBreadcrumb pageTitle="Beverages" href="#" />
        <IcBreadcrumb current pageTitle="Coffee" href="#" />
      </IcBreadcrumbGroup>
    );
    cy.checkHydrated(IC_BREADCRUMB_LABEL);
    cy.findShadowEl(IC_BREADCRUMB_LABEL, ".chevron").should(BE_VISIBLE);
  });

  it("should render with backBreadcrumbOnly", () => {
    mount(
      <IcBreadcrumbGroup backBreadcrumbOnly>
        <IcBreadcrumb pageTitle="Home" href="#" />
        <IcBreadcrumb pageTitle="Beverages" href="#" />
        <IcBreadcrumb current pageTitle="Coffee" href="#" />
      </IcBreadcrumbGroup>
    );
    cy.checkHydrated(IC_BREADCRUMB_LABEL);
    cy.findShadowEl(IC_BREADCRUMB_LABEL, "svg").should(BE_VISIBLE);
    cy.get('[page-title="Beverages"]').should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "back",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render breadcrumb with icon", () => {
    mount(
      <IcBreadcrumbGroup>
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
        <IcBreadcrumb pageTitle="Coffee" current href="#">
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
      </IcBreadcrumbGroup>
    );
    cy.checkHydrated(IC_BREADCRUMB_LABEL);
    cy.findShadowEl(IC_BREADCRUMB_LABEL, ".chevron").should(BE_VISIBLE);
    cy.findShadowEl(IC_BREADCRUMB_LABEL, "svg").should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "icon",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.007),
    });
  });

  it("should add the 'current-page' class when current prop is true", () => {
    mount(
      <IcBreadcrumbGroup>
        <IcBreadcrumb pageTitle="Home" href="#" />
        <IcBreadcrumb pageTitle="Beverages" href="#" />
        <IcBreadcrumb pageTitle="Coffee" href="#" />
      </IcBreadcrumbGroup>
    );
    cy.checkHydrated(IC_BREADCRUMB_LABEL);
    cy.findShadowEl(IC_BREADCRUMB_LABEL, ".chevron").should(BE_VISIBLE);
  });

  it("should call 'setFocus' when breadcrumb is focused", () => {
    mount(
      <IcBreadcrumbGroup>
        <IcBreadcrumb pageTitle="Home" href="#" />
        <IcBreadcrumb pageTitle="Beverages" href="#" />
        <IcBreadcrumb pageTitle="Coffee" href="#" />
      </IcBreadcrumbGroup>
    );
    cy.wait(500)
      .get(IC_BREADCRUMB_LABEL)
      .shadow()
      .find("ic-link")
      .shadow()
      .find("a")
      .each(($el) => {
        cy.wrap($el).focus().should(HAVE_FOCUS);
      });

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "focus",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.005),
    });
  });

  it("should render collapsed", () => {
    mount(
      <IcBreadcrumbGroup collapsed>
        <IcBreadcrumb pageTitle="Home" href="#" />
        <IcBreadcrumb pageTitle="Beverages" href="#" />
        <IcBreadcrumb pageTitle="Coffee" current href="#" />
      </IcBreadcrumbGroup>
    );
    cy.checkHydrated(IC_BREADCRUMB_LABEL);

    cy.checkA11yWithWait(undefined, 200, { includedImpacts: ["critical"] });
    cy.compareSnapshot({
      name: "collapsed",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.007),
      delay: 100,
    });
    cy.get("#collapsed-ellipsis").should(BE_VISIBLE).click();
    cy.get('[page-title="Beverages"]').should(BE_VISIBLE);
  });
});
