/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import { mount } from "cypress/react";
import React from "react";
import { IcAccordion, IcAccordionGroup } from "../../components";
import {
  BE_VISIBLE,
  CONTAIN_TEXT,
  HAVE_ATTR,
  HAVE_BEEN_CALLED_ONCE,
} from "../utils/constants";
import {
  AccordionsWithDisabled,
  GroupWithOneExpanded,
  SimpleAccordion,
  SimpleExpandedAccordion,
  SlottedHeadingAccordion,
  TwoAccordions,
  TwoAccordionsWithOneExpanded,
  WithIcon,
  WithChildren,
  DifferentSizes,
  DifferentSizesGroup,
} from "./IcAccordionTestData";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const IC_ACCORDION = "ic-accordion";
const IC_ACCORDION_GROUP = "ic-accordion-group";
const getAccordionSelector = (index: number) =>
  `ic-accordion[heading="Accordion ${index}"]`;

const DEFAULT_TEST_THRESHOLD = 0.02;

describe("End-to-end tests", () => {
  describe("IcAccordion", () => {
    it("should render a simple accordion", () => {
      mount(<SimpleAccordion />);

      cy.checkHydrated(IC_ACCORDION);
      cy.get(IC_ACCORDION).contains("Text").should(BE_VISIBLE);
    });

    it("should expand when clicked", () => {
      mount(<SimpleAccordion />);

      cy.checkHydrated(IC_ACCORDION);
      cy.get(IC_ACCORDION).invoke(
        "on",
        "accordionClicked",
        cy.stub().as("isClicked")
      );

      cy.get(IC_ACCORDION).click();
      cy.get("@isClicked").should(HAVE_BEEN_CALLED_ONCE);
      cy.findShadowEl(IC_ACCORDION, "button")
        .invoke("attr", "aria-expanded")
        .should("eq", "true");
    });

    it("should expand when space bar pressed", () => {
      mount(<SimpleAccordion />);

      cy.checkHydrated(IC_ACCORDION);
      cy.get(IC_ACCORDION).invoke("prop", "expanded").should("eq", false);

      cy.findShadowEl(IC_ACCORDION, "button").type(" ");
      cy.get(IC_ACCORDION).invoke("prop", "expanded").should("eq", true);
    });

    it("should skip disabled accordion when using tab", () => {
      mount(<AccordionsWithDisabled />);

      cy.checkHydrated(IC_ACCORDION);
      cy.findShadowEl('ic-accordion[heading="accordion1"]', "button").should(
        HAVE_ATTR,
        "tabindex",
        0
      );
      cy.findShadowEl('ic-accordion[heading="accordion2"]', "button").should(
        HAVE_ATTR,
        "tabindex",
        -1
      );
      cy.findShadowEl('ic-accordion[heading="accordion3"]', "button").should(
        HAVE_ATTR,
        "tabindex",
        0
      );
    });
  });
  describe("IcAccordionGroup", () => {
    it("should render an accordion group", () => {
      mount(
        <IcAccordionGroup label="Group">
          <TwoAccordions />
        </IcAccordionGroup>
      );

      cy.checkHydrated(IC_ACCORDION_GROUP);
      cy.get(IC_ACCORDION_GROUP).should(BE_VISIBLE);
    });

    it("should have changed button text to 'See all' when expanded accordion clicked", () => {
      mount(
        <IcAccordionGroup expanded={true}>
          <SimpleExpandedAccordion />
        </IcAccordionGroup>
      );

      cy.checkHydrated(IC_ACCORDION_GROUP);
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

      cy.checkHydrated(IC_ACCORDION_GROUP);
      cy.findShadowEl(IC_ACCORDION_GROUP, "ic-button").click();
      cy.findShadowEl(IC_ACCORDION, ".section-button-open").should(
        "not.be.null"
      );
    });

    it("the See all/ Hide all function should work as expected", () => {
      mount(<GroupWithOneExpanded />);

      cy.checkHydrated(IC_ACCORDION_GROUP);
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
        <IcAccordionGroup singleExpansion label="Title">
          <TwoAccordionsWithOneExpanded />
        </IcAccordionGroup>
      );
      cy.checkHydrated(IC_ACCORDION_GROUP);

      cy.get(getAccordionSelector(1))
        .invoke("prop", "expanded")
        .should("eq", false);
      cy.get(getAccordionSelector(2))
        .invoke("prop", "expanded")
        .should("eq", true);
      it("should open second accordion and close first accordion on single expansion", () => {
        mount(
          <IcAccordionGroup singleExpansion label="Title">
            <TwoAccordionsWithOneExpanded />
          </IcAccordionGroup>
        );
        cy.checkHydrated(IC_ACCORDION_GROUP);

        cy.get(getAccordionSelector(1))
          .invoke("prop", "expanded")
          .should("eq", false);
        cy.get(getAccordionSelector(2))
          .invoke("prop", "expanded")
          .should("eq", true);

        cy.findShadowEl(getAccordionSelector(1), "button")
          .focus()
          .realPress("Space");
        cy.get(getAccordionSelector(1))
          .invoke("prop", "expanded")
          .should("eq", true);
        cy.get(getAccordionSelector(2))
          .invoke("prop", "expanded")
          .should("eq", false);

        cy.realPress("Tab").realPress("Space");
        cy.get(getAccordionSelector(1))
          .invoke("prop", "expanded")
          .should("eq", false);
        cy.get(getAccordionSelector(2))
          .invoke("prop", "expanded")
          .should("eq", true);
      });

      it("should have both accordions open when single expansion is false", () => {
        mount(<GroupWithOneExpanded />);

        cy.checkHydrated(IC_ACCORDION_GROUP);
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
  });
});

describe("Visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  describe("IcAccordion", () => {
    it("should render an accordion with a heading and body", () => {
      mount(<SimpleAccordion />);

      cy.checkHydrated(IC_ACCORDION);

      cy.checkA11yWithWait();
      cy.compareSnapshot({
        name: "heading-body",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.004),
      });
    });

    it("should render an expanded accordion", () => {
      mount(<SimpleExpandedAccordion />);

      cy.checkHydrated(IC_ACCORDION);

      cy.checkA11yWithWait();
      cy.compareSnapshot({
        name: "expanded",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.007),
      });
    });

    it("should render an accordion with an icon", () => {
      mount(<WithIcon />);

      cy.checkHydrated(IC_ACCORDION);

      cy.checkA11yWithWait();
      cy.compareSnapshot({
        name: "icon",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.004),
      });
    });

    it("should render a disabled accordion", () => {
      mount(<AccordionsWithDisabled />);

      cy.checkHydrated(IC_ACCORDION);

      cy.checkA11yWithWait();
      cy.compareSnapshot({
        name: "disabled",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
      });
    });

    it("should render a focused accordion", () => {
      mount(
        <div style={{ padding: "10px" }}>
          <SimpleAccordion />
        </div>
      );

      cy.checkHydrated(IC_ACCORDION);
      cy.findShadowEl(getAccordionSelector(1), "button")
        .focus()
        .realPress("Space");

      cy.checkA11yWithWait();
      cy.compareSnapshot({
        name: "focused",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.007),
      });
    });

    it("should render with children", () => {
      mount(<WithChildren />);

      cy.checkHydrated(IC_ACCORDION);

      cy.checkA11yWithWait();
      cy.compareSnapshot({
        name: "children",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.035),
      });
    });

    it("should render accordions at different sizes", () => {
      mount(<DifferentSizes />);

      cy.checkHydrated(IC_ACCORDION);

      cy.checkA11yWithWait();
      cy.compareSnapshot({
        name: "individual-sizes",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.017),
      });
    });
  });

  describe("IcAccordionGroup", () => {
    it("should render a custom label", () => {
      mount(
        <IcAccordionGroup label="Custom Group Title">
          <TwoAccordions />
        </IcAccordionGroup>
      );

      cy.checkHydrated(IC_ACCORDION_GROUP);

      cy.checkA11yWithWait();
      cy.compareSnapshot({
        name: "group-title",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.026),
      });
    });

    it("should render a single expansion accordion-group", () => {
      mount(
        <IcAccordionGroup singleExpansion label="Single Expansion">
          <TwoAccordions />
        </IcAccordionGroup>
      );

      cy.checkHydrated(IC_ACCORDION_GROUP);

      cy.checkA11yWithWait();
      cy.compareSnapshot({
        name: "single-expansion",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.023),
      });
    });

    it("should render accordion groups at different sizes", () => {
      mount(<DifferentSizesGroup />);

      cy.checkHydrated(IC_ACCORDION_GROUP);

      cy.checkA11yWithWait();
      cy.compareSnapshot({
        name: "group-sizes",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.051),
      });
    });

    it("should render accordion-groups with a light theme", () => {
      mount(
        <div style={{ backgroundColor: "black" }}>
          <IcAccordionGroup appearance="light" label="Light theme">
            <TwoAccordions />
          </IcAccordionGroup>
        </div>
      );

      cy.checkHydrated(IC_ACCORDION_GROUP);

      cy.checkA11yWithWait();
      cy.compareSnapshot({
        name: "light-group-theme",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.021),
      });
    });

    it("should render an accordion group and accordion with slotted headings", () => {
      mount(<SlottedHeadingAccordion />);

      cy.checkHydrated(IC_ACCORDION_GROUP);

      cy.checkA11yWithWait();
      cy.compareSnapshot({
        name: "slotted-heading",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.016),
      });
    });
  });
});

describe("Visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  after(() => {
    cy.disableForcedColors();
  });

  describe("IcAccordion", () => {
    it("should render an accordion with a heading and body in high contrast mode", () => {
      mount(<SimpleAccordion />);

      cy.checkHydrated(IC_ACCORDION);

      cy.compareSnapshot({
        name: "heading-body-high-contrast",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
      });
    });

    it("should render an expanded accordion in high contrast mode", () => {
      mount(<SimpleExpandedAccordion />);

      cy.checkHydrated(IC_ACCORDION);

      cy.compareSnapshot({
        name: "expanded-high-contrast",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.002),
      });
    });

    it("should render a disabled accordion in high contrast mode", () => {
      mount(<AccordionsWithDisabled />);

      cy.checkHydrated(IC_ACCORDION);

      cy.compareSnapshot({
        name: "disabled-high-contrast",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.014),
      });
    });

    it("should render with children in high contrast mode", () => {
      mount(<WithChildren />);

      cy.checkHydrated(IC_ACCORDION);

      cy.compareSnapshot({
        name: "children-high-contrast",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.026),
      });
    });

    it.skip("should render a focused accordion in high contrast mode", () => {
      mount(
        <div style={{ padding: "10px" }}>
          <SimpleAccordion />
        </div>
      );

      cy.checkHydrated(IC_ACCORDION);
      cy.findShadowEl(getAccordionSelector(1), "button")
        .focus()
        .realPress("Space");

      cy.compareSnapshot({
        name: "focused-high-contrast",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
      });
    });
  });

  describe("IcAccordionGroup", () => {
    it("should render a single expansion accordion-group in high contrast mode", () => {
      mount(
        <IcAccordionGroup singleExpansion label="Single Expansion">
          <TwoAccordions />
        </IcAccordionGroup>
      );

      cy.checkHydrated(IC_ACCORDION_GROUP);

      cy.compareSnapshot({
        name: "single-expansion-high-contrast",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.018),
      });
    });

    it("should render accordion groups at different sizes in high contrast mode", () => {
      mount(<DifferentSizesGroup />);

      cy.checkHydrated(IC_ACCORDION_GROUP);

      cy.compareSnapshot({
        name: "group-sizes-high-contrast",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.047),
      });
    });
  });
});
