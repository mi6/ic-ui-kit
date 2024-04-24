/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress/react";
import {
  Checkbox,
  CheckboxForm,
  Controlled,
  Uncontrolled,
} from "./IcCheckboxTestData";
import { IcCheckbox, IcCheckboxGroup, IcTextField } from "../../components";
import {
  BE_DISABLED,
  BE_VISIBLE,
  HAVE_BEEN_CALLED_ONCE,
  HAVE_BEEN_CALLED_WITH,
  HAVE_CLASS,
  HAVE_PROP,
} from "../utils/constants";

const DEFAULT_TEST_THRESHOLD = 0.2;

const CHECKBOX_SELECTOR = "ic-checkbox";
const CONTAINER_SELECTOR = ".container";
const TEXT_FIELD_SELECTOR = "ic-text-field";

describe("IcCheckbox", () => {
  it("renders", () => {
    mount(<Checkbox />);

    cy.checkHydrated("ic-checkbox-group");
  });

  it("Should not be interactable when disabled", () => {
    mount(<Checkbox />);

    cy.get(CHECKBOX_SELECTOR).eq(2).should(BE_VISIBLE);
    cy.get(CHECKBOX_SELECTOR).eq(2).should(HAVE_CLASS, "disabled");
    cy.get(CHECKBOX_SELECTOR)
      .eq(2)
      .shadow()
      .find(".checkbox")
      .should(BE_DISABLED)
      .click({ force: true });
    cy.get(CHECKBOX_SELECTOR).eq(2).should(HAVE_PROP, "checked", false);
  });

  it("Should set checkbox to checked when clicked", () => {
    mount(<Checkbox />);

    cy.get(CHECKBOX_SELECTOR).eq(0).should(HAVE_PROP, "checked", false);
    cy.get(CHECKBOX_SELECTOR).eq(0).shadow().find(CONTAINER_SELECTOR).click();
    cy.get(CHECKBOX_SELECTOR).eq(0).should(HAVE_PROP, "checked", true);
  });

  it("Should enable statictextfield when associated checkbox is checked", () => {
    mount(<Checkbox />);

    cy.get(TEXT_FIELD_SELECTOR).should(HAVE_PROP, "disabled", true);
    cy.get(CHECKBOX_SELECTOR).eq(3).should(HAVE_PROP, "checked", false);
    cy.get(CHECKBOX_SELECTOR).eq(3).shadow().find(CONTAINER_SELECTOR).click();
    cy.get(CHECKBOX_SELECTOR).eq(3).should(HAVE_PROP, "checked", true);
    cy.get(TEXT_FIELD_SELECTOR).should(BE_VISIBLE);
  });

  it("Should display dynamic textfield when associated checkbox is checked", () => {
    mount(<Checkbox />);

    cy.get(TEXT_FIELD_SELECTOR).should(HAVE_PROP, "disabled", true);
    cy.get(CHECKBOX_SELECTOR).eq(4).should(HAVE_PROP, "checked", false);
    cy.get(CHECKBOX_SELECTOR).eq(4).shadow().find(CONTAINER_SELECTOR).click();
    cy.get(CHECKBOX_SELECTOR).eq(4).should(HAVE_PROP, "checked", true);
    cy.get(TEXT_FIELD_SELECTOR).should(BE_VISIBLE);
  });

  it("Should emit icChange event when checkbox is checked", () => {
    mount(<Checkbox />);

    cy.get(CHECKBOX_SELECTOR).invoke(
      "on",
      "icCheck",
      cy.stub().as("icChecked")
    );
    cy.get("ic-checkbox-group").invoke(
      "on",
      "icChange",
      cy.stub().as("icChanges")
    );
    cy.get(CHECKBOX_SELECTOR).eq(0).shadow().find(CONTAINER_SELECTOR).click();
    cy.get("@icChecked").should(HAVE_BEEN_CALLED_ONCE);
    cy.get("@icChanges").should(HAVE_BEEN_CALLED_ONCE);
  });

  it("Should set checkbox to checked when space is pressed", () => {
    mount(<Checkbox />);

    cy.get(CHECKBOX_SELECTOR).invoke(
      "on",
      "icCheck",
      cy.stub().as("icChecked")
    );
    cy.get(CHECKBOX_SELECTOR).eq(0).shadow().find(CONTAINER_SELECTOR).type(" ");
    cy.get("@icChecked").should(HAVE_BEEN_CALLED_ONCE);
  });

  it("Works on a form", () => {
    mount(<CheckboxForm />);

    cy.spy(window.console, "log").as("spyWinConsoleLog");
    cy.get(CHECKBOX_SELECTOR).eq(0).shadow().find(CONTAINER_SELECTOR).click();
    cy.get('input[type="submit"]').click();
    cy.get("@spyWinConsoleLog").should(HAVE_BEEN_CALLED_WITH, "extra");
  });

  it("Passes the value of checkboxes correctly when already selected", () => {
    mount(<Checkbox />);

    cy.get(CHECKBOX_SELECTOR).eq(1).should(HAVE_PROP, "checked", true);
    cy.get(CHECKBOX_SELECTOR).eq(1).should(HAVE_PROP, "value", "Soya milk");
  });

  it("resets checked state on form reset", () => {
    mount(<CheckboxForm />);

    cy.get(CHECKBOX_SELECTOR).eq(0).shadow().find(CONTAINER_SELECTOR).click();
    cy.get(CHECKBOX_SELECTOR).eq(0).should(HAVE_PROP, "checked", true);
    cy.get('button[type="reset"]').click();
    cy.get(CHECKBOX_SELECTOR).eq(0).should(HAVE_PROP, "checked", false);
  });
});

describe("A11y and visual regression tests", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });
  it("renders default", () => {
    mount(<Checkbox />);

    cy.compareSnapshot({
      name: "default",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("renders with hidden label", () => {
    mount(
      <IcCheckboxGroup label="Select your extras" hideLabel name="1">
        <IcCheckbox value="valueName1" label="Extra shot (50p)" />
        <IcCheckbox value="valueName2" label="Soya milk" checked />
      </IcCheckboxGroup>
    );

    cy.compareSnapshot({
      name: "hideLabel",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait(undefined, 1000);
  });

  it("renders helper text", () => {
    mount(
      <IcCheckboxGroup
        label="Select your extras"
        name="1"
        helperText="Additional charges may apply."
      >
        <IcCheckbox value="valueName1" label="Extra shot (50p)" />
        <IcCheckbox value="valueName2" label="Soya milk" checked />
      </IcCheckboxGroup>
    );

    cy.compareSnapshot({
      name: "helper",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("renders different sizes", () => {
    mount(
      <div>
        <IcCheckboxGroup label="Select your extras" name="1" size="small">
          <IcCheckbox value="valueName1" label="Extra shot (50p)" />
          <IcCheckbox value="valueName2" label="Soya milk" checked />
        </IcCheckboxGroup>
        <IcCheckboxGroup label="Select your extras" name="2">
          <IcCheckbox value="valueName1" label="Extra shot (50p)" />
          <IcCheckbox value="valueName2" label="Soya milk" checked />
        </IcCheckboxGroup>
        <IcCheckboxGroup label="Select your extras" name="3" size="large">
          <IcCheckbox value="valueName1" label="Extra shot (50p)" />
          <IcCheckbox value="valueName2" label="Soya milk" checked />
        </IcCheckboxGroup>
      </div>
    );

    cy.compareSnapshot({
      name: "sizes",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("renders different checkbox sizes", () => {
    mount(
      <div>
        <IcCheckbox value="valueName1" label="Extra shot (50p)" size="small" />
        <IcCheckbox value="valueName2" label="Extra shot (50p)" />
        <IcCheckbox value="valueName3" label="Extra shot (50p)" size="large" />
      </div>
    );

    cy.compareSnapshot({
      name: "checkboxSizes",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("renders different conditional input", () => {
    mount(
      <IcCheckboxGroup
        label="Which coffee do you like best?"
        name="conditional"
      >
        <IcCheckbox value="americano" label="Americano" />
        <IcCheckbox value="espresso" label="Espresso" />
        <IcCheckbox value="flatwhite" label="Flat white" />
        <IcCheckbox value="latte" label="Latte" />
        <IcCheckbox value="cappuccino" label="Cappuccino" />
        <IcCheckbox value="other" label="Other">
          <IcTextField slot="additional-field" label="Please let us know..." />
        </IcCheckbox>
      </IcCheckboxGroup>
    );

    cy.wait(500).compareSnapshot({
      name: "conditional",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("renders different conditional input dynamically", () => {
    mount(
      <IcCheckboxGroup label="Which coffee do you like best?" name="dynamic">
        <IcCheckbox value="americano" label="Americano" />
        <IcCheckbox value="espresso" label="Espresso" />
        <IcCheckbox value="flatwhite" label="Flat white" />
        <IcCheckbox value="latte" label="Latte" />
        <IcCheckbox value="cappuccino" label="Cappuccino" />
        <IcCheckbox
          checked
          additionalFieldDisplay="dynamic"
          value="other"
          label="Other"
        >
          <IcTextField slot="additional-field" label="Please let us know..." />
        </IcCheckbox>
      </IcCheckboxGroup>
    );

    cy.compareSnapshot({
      name: "dynamic",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("renders different with validation", () => {
    mount(
      <IcCheckboxGroup
        label="Select your extras"
        name="1"
        validationStatus="error"
        validationText="Sorry, this is currently unavailable."
      >
        <IcCheckbox value="valueName1" label="Extra shot (50p)" />
        <IcCheckbox value="valueName2" label="Soya milk" checked />
      </IcCheckboxGroup>
    );

    cy.compareSnapshot({
      name: "validation",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("renders different with indeterminate boxes", () => {
    mount(
      <IcCheckboxGroup label="Select your preferred drinks" name="1">
        <IcCheckbox value="drinks" label="Drinks" checked indeterminate>
          <IcCheckboxGroup
            name="2"
            label="Coffee"
            hideLabel
            slot="additional-field"
          >
            <IcCheckbox value="tea" label="Tea" />
            <IcCheckbox value="coffee" label="Coffee" checked indeterminate>
              <IcCheckboxGroup
                label="Coffees"
                hideLabel
                slot="additional-field"
                name="3"
              >
                <IcCheckbox value="mocha" label="Mocha" />
                <IcCheckbox value="espresso" label="Espresso" checked />
                <IcCheckbox value="cappuccino" label="Cappuccino" />
              </IcCheckboxGroup>
            </IcCheckbox>
            <IcCheckbox value="juice" label="Juice" />
          </IcCheckboxGroup>
        </IcCheckbox>
      </IcCheckboxGroup>
    );

    cy.compareSnapshot({
      name: "indeterminate",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("renders with focus", () => {
    mount(<Checkbox />);

    cy.get(CHECKBOX_SELECTOR).eq(0).shadow().find("input").eq(0).focus();
    cy.compareSnapshot({
      name: "focus",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("renders as a controlled component", () => {
    mount(<Controlled />);

    cy.get("ic-button#uncheck-btn").click();
    cy.get(CHECKBOX_SELECTOR).eq(0).should(HAVE_PROP, "checked", false);
    cy.get("ic-button#check-btn").click();
    cy.get(CHECKBOX_SELECTOR).eq(0).should(HAVE_PROP, "checked", true);
  });

  it("renders as an uncontrolled component", () => {
    mount(<Uncontrolled />);

    cy.spy(window.console, "log").as("spyWinConsoleLog");
    cy.get(CHECKBOX_SELECTOR).eq(0).shadow().find(CONTAINER_SELECTOR).click();
    cy.get("@spyWinConsoleLog").should(HAVE_BEEN_CALLED_WITH, true);
  });
});
