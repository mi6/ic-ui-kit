/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress/react";
import {
  Checkbox,
  CheckboxForm,
  Controlled,
  DynamicLoading,
  Uncontrolled,
} from "./IcCheckboxTestData";
import { IcCheckbox, IcCheckboxGroup, IcTextField } from "../../components";
import {
  BE_DISABLED,
  BE_VISIBLE,
  HAVE_ATTR,
  HAVE_BEEN_CALLED_ONCE,
  HAVE_BEEN_CALLED_WITH,
  HAVE_CLASS,
  HAVE_PROP,
} from "../utils/constants";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const DEFAULT_TEST_THRESHOLD = 0.2;

const CHECKBOX_SELECTOR = "ic-checkbox";
const CONTAINER_SELECTOR = ".container";
const TEXT_FIELD_SELECTOR = "ic-text-field";
const CHECKBOX_GROUP_SELECTOR = "ic-checkbox-group";

describe("IcCheckbox", () => {
  it("should render", () => {
    mount(<Checkbox />);

    cy.checkHydrated(CHECKBOX_GROUP_SELECTOR);
  });

  it("should not be interactable when disabled", () => {
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

  it("should set checkbox to checked when clicked", () => {
    mount(<Checkbox />);

    cy.get(CHECKBOX_SELECTOR).eq(0).should(HAVE_PROP, "checked", false);
    cy.get(CHECKBOX_SELECTOR).eq(0).shadow().find(CONTAINER_SELECTOR).click();
    cy.get(CHECKBOX_SELECTOR).eq(0).should(HAVE_PROP, "checked", true);
  });

  it("should enable static text field when associated checkbox is checked", () => {
    mount(<Checkbox />);

    cy.get(TEXT_FIELD_SELECTOR).should(HAVE_PROP, "disabled", true);
    cy.get(CHECKBOX_SELECTOR).eq(3).should(HAVE_PROP, "checked", false);
    cy.get(CHECKBOX_SELECTOR).eq(3).shadow().find(CONTAINER_SELECTOR).click();
    cy.get(CHECKBOX_SELECTOR).eq(3).should(HAVE_PROP, "checked", true);
    cy.get(TEXT_FIELD_SELECTOR).should(BE_VISIBLE);
  });

  it("should display dynamic textfield when associated checkbox is checked", () => {
    mount(<Checkbox />);

    cy.get(TEXT_FIELD_SELECTOR).should(HAVE_PROP, "disabled", true);
    cy.get(CHECKBOX_SELECTOR).eq(4).should(HAVE_PROP, "checked", false);
    cy.get(CHECKBOX_SELECTOR).eq(4).shadow().find(CONTAINER_SELECTOR).click();
    cy.get(CHECKBOX_SELECTOR).eq(4).should(HAVE_PROP, "checked", true);
    cy.get(TEXT_FIELD_SELECTOR).should(BE_VISIBLE);
  });

  it("should emit icChange event when checkbox is checked", () => {
    mount(<Checkbox />);

    cy.get(CHECKBOX_SELECTOR).invoke(
      "on",
      "icCheck",
      cy.stub().as("icChecked")
    );
    cy.get(CHECKBOX_GROUP_SELECTOR).invoke(
      "on",
      "icChange",
      cy.stub().as("icChanges")
    );
    cy.get(CHECKBOX_SELECTOR).eq(0).shadow().find(CONTAINER_SELECTOR).click();
    cy.get("@icChecked").should(HAVE_BEEN_CALLED_ONCE);
    cy.get("@icChanges").should(HAVE_BEEN_CALLED_ONCE);
  });

  it("should set checkbox to checked when space is pressed", () => {
    mount(<Checkbox />);

    cy.get(CHECKBOX_SELECTOR).invoke(
      "on",
      "icCheck",
      cy.stub().as("icChecked")
    );
    cy.get(CHECKBOX_SELECTOR).eq(0).shadow().find(CONTAINER_SELECTOR).type(" ");
    cy.get("@icChecked").should(HAVE_BEEN_CALLED_ONCE);
  });

  it("should work in a form", () => {
    mount(<CheckboxForm />);

    cy.spy(window.console, "log").as("spyWinConsoleLog");
    cy.get(CHECKBOX_SELECTOR).eq(0).shadow().find(CONTAINER_SELECTOR).click();
    cy.get('input[type="submit"]').click();
    cy.get("@spyWinConsoleLog").should(HAVE_BEEN_CALLED_WITH, "extra");
  });

  it("should pass the value of checkboxes correctly when already selected", () => {
    mount(<Checkbox />);

    cy.get(CHECKBOX_SELECTOR).eq(1).should(HAVE_PROP, "checked", true);
    cy.get(CHECKBOX_SELECTOR).eq(1).should(HAVE_PROP, "value", "Soya milk");
  });

  it("should reset checked state on form reset", () => {
    mount(<CheckboxForm />);

    cy.get(CHECKBOX_SELECTOR).eq(0).shadow().find(CONTAINER_SELECTOR).click();
    cy.get(CHECKBOX_SELECTOR).eq(0).should(HAVE_PROP, "checked", true);
    cy.get('button[type="reset"]').click();
    cy.get(CHECKBOX_SELECTOR).eq(0).should(HAVE_PROP, "checked", false);
  });

  it("renders checkboxes dynamically in a group", () => {
    mount(<DynamicLoading />);

    cy.get("ic-button").click();
    cy.findShadowEl(CHECKBOX_SELECTOR, "input").should(
      HAVE_ATTR,
      "id",
      "ic-checkbox-Item-1-What-is-your-favourite-coffee?"
    );
  });

  it("passes down the name and label to child checkboxes when they update", () => {
    mount(
      <IcCheckboxGroup
        label="What is your favourite coffee?"
        name="checkbox-group-1"
      >
        <IcCheckbox value="Item 1" label="Item 1" />
        <IcCheckbox value="Item 2" label="Item 2" name="Item 2 name" />
      </IcCheckboxGroup>
    );

    cy.get(CHECKBOX_SELECTOR).each((item, index) => {
      const wrappedItem = cy.wrap(item);
      wrappedItem.should(
        HAVE_PROP,
        "groupLabel",
        "What is your favourite coffee?"
      );
      wrappedItem.should(
        HAVE_PROP,
        "name",
        index === 0 ? "checkbox-group-1" : "Item 2 name"
      );
    });

    cy.get(CHECKBOX_GROUP_SELECTOR).invoke("prop", "label", "new-label");
    cy.get(CHECKBOX_SELECTOR).each((item) => {
      cy.wrap(item).should(HAVE_PROP, "groupLabel", "new-label");
    });

    cy.get(CHECKBOX_GROUP_SELECTOR).invoke("prop", "name", "new-name");
    cy.get(CHECKBOX_SELECTOR).each((item, index) => {
      cy.wrap(item).should(
        HAVE_PROP,
        "name",
        index === 0 ? "new-name" : "Item 2 name"
      );
    });
  });
});

describe("A11y and visual regression tests", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });
  it("should render default", () => {
    mount(<Checkbox />);

    cy.compareSnapshot({
      name: "default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
    cy.checkA11yWithWait();
  });

  it("should render with hidden group label", () => {
    mount(
      <IcCheckboxGroup label="Select your extras" hideLabel name="1">
        <IcCheckbox value="valueName1" label="Extra shot (50p)" />
        <IcCheckbox value="valueName2" label="Soya milk" checked />
      </IcCheckboxGroup>
    );

    cy.compareSnapshot({
      name: "hideLabel",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
    cy.checkA11yWithWait(undefined, 1000);
  });

  it("should render with hidden checkbox label", () => {
    mount(
      <IcCheckboxGroup label="Select your extras" hideLabel name="1">
        <IcCheckbox value="valueName1" label="Extra shot (50p)" hideLabel />
        <IcCheckbox value="valueName2" label="Soya milk" checked hideLabel />
      </IcCheckboxGroup>
    );

    cy.compareSnapshot({
      name: "hideCheckboxLabel",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
    cy.checkA11yWithWait(undefined, 1000);
  });

  it("should render helper text", () => {
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
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
    cy.checkA11yWithWait();
  });

  it("should render different sizes", () => {
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
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
    cy.checkA11yWithWait();
  });

  it("should render different checkbox sizes", () => {
    mount(
      <div>
        <IcCheckbox value="valueName1" label="Extra shot (50p)" size="small" />
        <IcCheckbox value="valueName2" label="Extra shot (50p)" />
        <IcCheckbox value="valueName3" label="Extra shot (50p)" size="large" />
      </div>
    );

    cy.compareSnapshot({
      name: "checkboxSizes",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
    cy.checkA11yWithWait();
  });

  it("should render conditional input", () => {
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
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
    cy.checkA11yWithWait();
  });

  it("should render conditional input dynamically", () => {
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
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
    cy.checkA11yWithWait();
  });

  it("should render with validation", () => {
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
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
    cy.checkA11yWithWait();
  });

  it("should render with indeterminate boxes", () => {
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
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
    cy.checkA11yWithWait();
  });

  it("should render with focus", () => {
    mount(<Checkbox />);

    cy.get(CHECKBOX_SELECTOR).eq(0).shadow().find("input").eq(0).focus();
    cy.compareSnapshot({
      name: "focus",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
    cy.checkA11yWithWait();
  });

  it("should render as a controlled component", () => {
    mount(<Controlled />);

    cy.get("ic-button#uncheck-btn").click();
    cy.get(CHECKBOX_SELECTOR).eq(0).should(HAVE_PROP, "checked", false);
    cy.get("ic-button#check-btn").click();
    cy.get(CHECKBOX_SELECTOR).eq(0).should(HAVE_PROP, "checked", true);
  });

  it("should render as an uncontrolled component", () => {
    mount(<Uncontrolled />);

    cy.spy(window.console, "log").as("spyWinConsoleLog");
    cy.get(CHECKBOX_SELECTOR).eq(0).shadow().find(CONTAINER_SELECTOR).click();
    cy.get("@spyWinConsoleLog").should(HAVE_BEEN_CALLED_WITH, true);
  });
});
