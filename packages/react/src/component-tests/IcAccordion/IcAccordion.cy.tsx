/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress/react";
import {
  AccordionsWithDisabled,
  GroupWithOneExpanded,
  SimpleAccordion,
  SimpleExpandedAccordion,
  TwoAccordions,
  TwoAccordionsWithOneExpanded,
} from "./IcAccordionTestData";
import { IcAccordion, IcAccordionGroup } from "../../components";
import { BE_VISIBLE, CONTAIN_TEXT } from "../utils/constants";
import { CYPRESS_AXE_OPTIONS } from "../../../cypress/utils/a11y";
import { SlottedSVG } from "../../react-component-lib/slottedSVG";

const DEFAULT_TEST_THRESHOLD = 0.03;

const IC_ACCORDION = "ic-accordion";
const IC_ACCORDION_GROUP = "ic-accordion-group";
const getAccordionSelector = (index: number) =>
  `ic-accordion[heading="Accordion ${index}"]`;

describe("IcAccordion", () => {
  it("renders", () => {
    mount(<SimpleAccordion />);

    cy.get(IC_ACCORDION).contains("Text").should(BE_VISIBLE);
  });

  it("should expand when clicked", () => {
    mount(<SimpleAccordion />);
    cy.get(IC_ACCORDION).invoke(
      "on",
      "accordionClicked",
      cy.stub().as("isClicked")
    );

    cy.get(IC_ACCORDION).click();
    cy.get("@isClicked").should("have.been.calledOnce");
    cy.findShadowEl(IC_ACCORDION, "button")
      .invoke("attr", "aria-expanded")
      .should("eq", "true");
  });

  it("should expand when space bar pressed", () => {
    mount(<SimpleAccordion />);
    cy.get(IC_ACCORDION).invoke("prop", "expanded").should("eq", false);

    cy.findShadowEl(IC_ACCORDION, "button").type(" ");
    cy.get(IC_ACCORDION).invoke("prop", "expanded").should("eq", true);
  });

  it("should skip disabled accordion when using tab", () => {
    mount(<AccordionsWithDisabled />);

    cy.findShadowEl('ic-accordion[heading="accordion1"]', "button").should(
      "have.attr",
      "tabindex",
      0
    );
    cy.findShadowEl('ic-accordion[heading="accordion2"]', "button").should(
      "have.attr",
      "tabindex",
      -1
    );
    cy.findShadowEl('ic-accordion[heading="accordion3"]', "button").should(
      "have.attr",
      "tabindex",
      0
    );
  });
});

describe("IcAccordionGroup", () => {
  it("renders", () => {
    mount(
      <IcAccordionGroup groupTitle="Group">
        <TwoAccordions />
      </IcAccordionGroup>
    );

    cy.get(IC_ACCORDION_GROUP).should(BE_VISIBLE);
  });

  it("button text should change to 'See all' when expanded accordion clicked", () => {
    mount(
      <IcAccordionGroup>
        <SimpleExpandedAccordion />
      </IcAccordionGroup>
    );

    cy.findShadowEl(IC_ACCORDION_GROUP, "ic-button").should(
      CONTAIN_TEXT,
      "Hide all"
    );
    cy.findShadowEl(IC_ACCORDION_GROUP, "ic-button").click();
    cy.findShadowEl(IC_ACCORDION_GROUP, "ic-button").should(
      CONTAIN_TEXT,
      "See all"
    );
  });

  it("should open accordion when 'See all' clicked", () => {
    mount(
      <IcAccordionGroup>
        <IcAccordion></IcAccordion>
      </IcAccordionGroup>
    );

    cy.findShadowEl(IC_ACCORDION_GROUP, "ic-button").click();
    cy.findShadowEl(IC_ACCORDION, ".section-button-open").should("not.be.null");
  });

  it("should test the See all/ Hide all function", () => {
    mount(<GroupWithOneExpanded />);
    cy.get(getAccordionSelector(1))
      .invoke("prop", "expanded")
      .should("eq", false);
    cy.get(getAccordionSelector(2))
      .invoke("prop", "expanded")
      .should("eq", true);
    cy.findShadowEl(IC_ACCORDION_GROUP, "ic-button").should(
      CONTAIN_TEXT,
      "See all"
    );

    cy.findShadowEl(IC_ACCORDION_GROUP, "ic-button").click();
    cy.get(getAccordionSelector(1))
      .invoke("prop", "expanded")
      .should("eq", true);
    cy.get(getAccordionSelector(2))
      .invoke("prop", "expanded")
      .should("eq", true);
    cy.findShadowEl(IC_ACCORDION_GROUP, "ic-button").should(
      CONTAIN_TEXT,
      "Hide all"
    );

    cy.findShadowEl(IC_ACCORDION_GROUP, "ic-button").click();
    cy.get(getAccordionSelector(1))
      .invoke("prop", "expanded")
      .should("eq", false);
    cy.get(getAccordionSelector(2))
      .invoke("prop", "expanded")
      .should("eq", false);
    cy.findShadowEl(IC_ACCORDION_GROUP, "ic-button").should(
      CONTAIN_TEXT,
      "See all"
    );
  });

  it("should open second accordion and close first accordion on single expansion", () => {
    mount(
      <IcAccordionGroup singleExpansion groupTitle="Title">
        <TwoAccordionsWithOneExpanded />
      </IcAccordionGroup>
    );
    cy.get(getAccordionSelector(1))
      .invoke("prop", "expanded")
      .should("eq", false);
    cy.get(getAccordionSelector(2))
      .invoke("prop", "expanded")
      .should("eq", true);

    cy.get(getAccordionSelector(1)).click();
    cy.get(getAccordionSelector(1))
      .invoke("prop", "expanded")
      .should("eq", true);
    cy.get(getAccordionSelector(2))
      .invoke("prop", "expanded")
      .should("eq", false);
  });

  it("both accordions should open when single expansion is false", () => {
    mount(<GroupWithOneExpanded />);
    cy.get(getAccordionSelector(1))
      .invoke("prop", "expanded")
      .should("eq", false);
    cy.get(getAccordionSelector(2))
      .invoke("prop", "expanded")
      .should("eq", true);

    cy.findShadowEl(IC_ACCORDION_GROUP, "ic-button").click();
    cy.get(getAccordionSelector(1))
      .invoke("prop", "expanded")
      .should("eq", true);
    cy.get(getAccordionSelector(2))
      .invoke("prop", "expanded")
      .should("eq", true);
  });
});

describe("IcAccordion & IcAccordionGroup Visual Regression and A11y Testing", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  describe("IcAccordion", () => {
    it("renders an accordion with a heading and body", () => {
      mount(<SimpleAccordion />);

      cy.compareSnapshot("headingBody", DEFAULT_TEST_THRESHOLD + 0.01);
      cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
    });

    it("renders an expanded accordion", () => {
      mount(<SimpleExpandedAccordion />);

      cy.compareSnapshot("expanded", DEFAULT_TEST_THRESHOLD + 0.01);
      cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
    });

    it("renders an accordion with an icon", () => {
      mount(
        <IcAccordion heading="Accordion 1">
          <SlottedSVG
            slot="icon"
            width="20"
            height="1em"
            viewBox="0 0 512 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
          </SlottedSVG>
          Text
        </IcAccordion>
      );

      cy.compareSnapshot("withIcon", DEFAULT_TEST_THRESHOLD + 0.01);
      cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
    });

    it("renders when disabled", () => {
      mount(<AccordionsWithDisabled />);

      cy.compareSnapshot("disabled", DEFAULT_TEST_THRESHOLD + 0.01);
      cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
    });

    it("renders with children", () => {
      mount(
        <IcAccordion expanded heading="Accordion">
          <IcAccordion heading="Child Accordion 1">Text</IcAccordion>
          <IcAccordion heading="Child Accordion 2">Text</IcAccordion>
          <IcAccordion heading="Child Accordion 3">Text</IcAccordion>
        </IcAccordion>
      );

      cy.compareSnapshot("withChildren", DEFAULT_TEST_THRESHOLD + 0.03);
      cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
    });

    it("renders accordions at different sizes", () => {
      mount(
        <>
          <IcAccordion heading="Small" size="small">
            Text
          </IcAccordion>
          <IcAccordion heading="Default">Text</IcAccordion>
          <IcAccordion heading="Large" size="large">
            Text
          </IcAccordion>
        </>
      );

      cy.compareSnapshot("individualSizes", DEFAULT_TEST_THRESHOLD + 0.01);
      cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
    });
  });

  describe("IcAccordionGroup", () => {
    it("renders a custom groupTitle", () => {
      mount(
        <IcAccordionGroup groupTitle="Custom Group Title">
          <TwoAccordions />
        </IcAccordionGroup>
      );

      cy.compareSnapshot("groupTitle", DEFAULT_TEST_THRESHOLD + 0.04);
      cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
    });

    it("renders a single expansion accordion-group", () => {
      mount(
        <IcAccordionGroup singleExpansion groupTitle="Single Expansion">
          <TwoAccordions />
        </IcAccordionGroup>
      );

      cy.compareSnapshot("singleExpansion", DEFAULT_TEST_THRESHOLD + 0.01);
      cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
    });

    it("renders accordion groups at different sizes", () => {
      mount(
        <>
          <IcAccordionGroup size="small" groupTitle="Small">
            <TwoAccordions />
          </IcAccordionGroup>
          <IcAccordionGroup groupTitle="Default">
            <TwoAccordions />
          </IcAccordionGroup>
          <IcAccordionGroup size="large" groupTitle="Large">
            <TwoAccordions />
          </IcAccordionGroup>
        </>
      );

      cy.compareSnapshot("groupSizes", DEFAULT_TEST_THRESHOLD + 0.06);
      cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
    });

    it("renders accordion-groups with a light theme", () => {
      mount(
        <div style={{ backgroundColor: "black" }}>
          <IcAccordionGroup appearance="light" groupTitle="Light theme">
            <TwoAccordions />
          </IcAccordionGroup>
        </div>
      );

      cy.compareSnapshot("lightGroupTheme", DEFAULT_TEST_THRESHOLD + 0.03);
      cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
    });
  });
});
