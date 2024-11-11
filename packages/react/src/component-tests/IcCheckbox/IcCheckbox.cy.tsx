/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress/react";
import {
  Checkbox,
  CheckboxForm,
  Controlled,
  DynamicLoading,
  Uncontrolled,
  IndeterminateCheckbox,
  NativeIndeterminateCheckbox,
  IndeterminateWithChildren,
  HelperText,
  DifferentSizes,
  Conditional,
  ConditionalDynamic,
  Validation,
  DifferentSizedCheckboxes,
  HiddenCheckboxLabel,
  HiddenGroupLabel,
  Disabled,
  Required,
  ThemeDark,
} from "./IcCheckboxTestData";
import { IcCheckbox, IcCheckboxGroup, IcTextField } from "../../components";
import {
  BE_DISABLED,
  BE_VISIBLE,
  HAVE_ATTR,
  HAVE_BEEN_CALLED_ONCE,
  HAVE_BEEN_CALLED_WITH,
  HAVE_CLASS,
  HAVE_FOCUS,
  HAVE_PROP,
  NOT_BE_VISIBLE,
  NOT_EXIST,
} from "../utils/constants";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const DEFAULT_TEST_THRESHOLD = 0;

const CHECKBOX_SELECTOR = "ic-checkbox";
const CONTAINER_SELECTOR = ".container";
const TEXT_FIELD_SELECTOR = "ic-text-field";
const CHECKBOX_GROUP_SELECTOR = "ic-checkbox-group";
const INDETERMINATE_SYMBOL_SELECTOR = ".indeterminate-symbol";

describe("IcCheckbox end-to-end tests", () => {
  it("should render", () => {
    mount(<Checkbox />);

    cy.checkHydrated(CHECKBOX_GROUP_SELECTOR);
  });

  it("should not be interactable when disabled", () => {
    mount(<Checkbox />);

    cy.checkHydrated(CHECKBOX_GROUP_SELECTOR);

    cy.get(CHECKBOX_SELECTOR).eq(2).should(BE_VISIBLE);
    cy.get(CHECKBOX_SELECTOR).eq(2).should(HAVE_CLASS, "ic-checkbox-disabled");
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

    cy.checkHydrated(CHECKBOX_GROUP_SELECTOR);

    cy.get(CHECKBOX_SELECTOR).eq(0).should(HAVE_PROP, "checked", false);
    cy.get(CHECKBOX_SELECTOR).eq(0).shadow().find(CONTAINER_SELECTOR).click();
    cy.get(CHECKBOX_SELECTOR).eq(0).should(HAVE_PROP, "checked", true);
  });

  it("should select multiple checkboxes and set to checked when clicked", () => {
    mount(<Checkbox />);

    cy.checkHydrated(CHECKBOX_GROUP_SELECTOR);

    cy.get(CHECKBOX_SELECTOR).eq(0).should(HAVE_PROP, "checked", false);
    cy.get(CHECKBOX_SELECTOR).eq(0).shadow().find(CONTAINER_SELECTOR).click();

    cy.get(CHECKBOX_SELECTOR).eq(3).should(HAVE_PROP, "checked", false);
    cy.get(CHECKBOX_SELECTOR).eq(3).shadow().find(CONTAINER_SELECTOR).click();

    cy.get(CHECKBOX_SELECTOR).eq(4).should(HAVE_PROP, "checked", false);
    cy.get(CHECKBOX_SELECTOR).eq(4).shadow().find(CONTAINER_SELECTOR).click();

    cy.get(CHECKBOX_SELECTOR).eq(0).should(HAVE_PROP, "checked", true);
    cy.get(CHECKBOX_SELECTOR).eq(1).should(HAVE_PROP, "checked", true);
    cy.get(CHECKBOX_SELECTOR).eq(3).should(HAVE_PROP, "checked", true);
    cy.get(CHECKBOX_SELECTOR).eq(4).should(HAVE_PROP, "checked", true);
  });

  it("should enable static text field when associated checkbox is checked", () => {
    mount(<Checkbox />);

    cy.checkHydrated(CHECKBOX_GROUP_SELECTOR);

    cy.get(TEXT_FIELD_SELECTOR).eq(0).should(HAVE_PROP, "disabled", true);
    cy.get(CHECKBOX_SELECTOR).eq(3).should(HAVE_PROP, "checked", false);
    cy.get(CHECKBOX_SELECTOR).eq(3).shadow().find(CONTAINER_SELECTOR).click();
    cy.get(CHECKBOX_SELECTOR).eq(3).should(HAVE_PROP, "checked", true);
    cy.get(TEXT_FIELD_SELECTOR).eq(0).should(HAVE_PROP, "disabled", false);
  });

  it("should display dynamic text field when associated checkbox is checked", () => {
    mount(<Checkbox />);

    cy.checkHydrated(CHECKBOX_GROUP_SELECTOR);

    cy.get(TEXT_FIELD_SELECTOR).eq(1).should(NOT_BE_VISIBLE);
    cy.get(CHECKBOX_SELECTOR).eq(4).should(HAVE_PROP, "checked", false);
    cy.get(CHECKBOX_SELECTOR).eq(4).shadow().find(CONTAINER_SELECTOR).click();
    cy.get(CHECKBOX_SELECTOR).eq(4).should(HAVE_PROP, "checked", true);
    cy.get(TEXT_FIELD_SELECTOR).eq(1).should(BE_VISIBLE);
    cy.get(TEXT_FIELD_SELECTOR).eq(1).should(HAVE_PROP, "disabled", false);
  });

  it("should emit icChange event when checkbox is checked", () => {
    mount(<Checkbox />);

    cy.checkHydrated(CHECKBOX_GROUP_SELECTOR);

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
    cy.get(CHECKBOX_SELECTOR).eq(0).should(HAVE_PROP, "checked", false);
    cy.get(CHECKBOX_SELECTOR).eq(0).shadow().find(CONTAINER_SELECTOR).click();
    cy.get(CHECKBOX_SELECTOR).eq(0).should(HAVE_PROP, "checked", true);
    cy.get("@icChecked").should(HAVE_BEEN_CALLED_ONCE);
    cy.get("@icChanges").should(HAVE_BEEN_CALLED_ONCE);
  });

  it("should set checkbox to checked when space is pressed", () => {
    mount(<Checkbox />);

    cy.checkHydrated(CHECKBOX_GROUP_SELECTOR);

    cy.get(CHECKBOX_SELECTOR).invoke(
      "on",
      "icCheck",
      cy.stub().as("icChecked")
    );
    cy.get(CHECKBOX_SELECTOR).eq(0).should(HAVE_PROP, "checked", false);
    cy.get(CHECKBOX_SELECTOR).eq(0).shadow().find(CONTAINER_SELECTOR).type(" ");
    cy.get(CHECKBOX_SELECTOR).eq(0).should(HAVE_PROP, "checked", true);
    cy.get("@icChecked").should(HAVE_BEEN_CALLED_ONCE);
  });

  it("should work in a form", () => {
    mount(<CheckboxForm />);

    cy.checkHydrated(CHECKBOX_GROUP_SELECTOR);

    cy.spy(window.console, "log").as("spyWinConsoleLog");
    cy.get(CHECKBOX_SELECTOR).eq(0).shadow().find(CONTAINER_SELECTOR).click();
    cy.get('input[type="submit"]').click();
    cy.get("@spyWinConsoleLog").should(HAVE_BEEN_CALLED_WITH, "extra");
  });

  it("should pass the value of checkboxes correctly when already selected", () => {
    mount(<Checkbox />);

    cy.checkHydrated(CHECKBOX_GROUP_SELECTOR);

    cy.get(CHECKBOX_SELECTOR).eq(1).should(HAVE_PROP, "checked", true);
    cy.get(CHECKBOX_SELECTOR).eq(1).should(HAVE_PROP, "value", "Soya milk");
  });

  it("should test default indeterminate checkbox behaviour", () => {
    mount(<IndeterminateCheckbox />);

    cy.checkHydrated(CHECKBOX_SELECTOR);

    cy.get(CHECKBOX_SELECTOR).should(HAVE_PROP, "checked", true);
    cy.get(CHECKBOX_SELECTOR)
      .shadow()
      .find(INDETERMINATE_SYMBOL_SELECTOR)
      .should(BE_VISIBLE);

    cy.get(CHECKBOX_SELECTOR).shadow().find("input").click();

    cy.get(CHECKBOX_SELECTOR).should(HAVE_PROP, "checked", false);
    cy.get(CHECKBOX_SELECTOR)
      .shadow()
      .find(INDETERMINATE_SYMBOL_SELECTOR)
      .should(NOT_EXIST);

    cy.get(CHECKBOX_SELECTOR).shadow().find("input").click();
    cy.get(CHECKBOX_SELECTOR).should(HAVE_PROP, "checked", true);
    cy.get(CHECKBOX_SELECTOR)
      .shadow()
      .find(INDETERMINATE_SYMBOL_SELECTOR)
      .should(BE_VISIBLE);

    cy.get(CHECKBOX_SELECTOR)
      .invoke("prop", "indeterminate", "false")
      .then(() => {
        cy.get(CHECKBOX_SELECTOR).should(HAVE_PROP, "checked", true);
        cy.get(CHECKBOX_SELECTOR)
          .shadow()
          .find(INDETERMINATE_SYMBOL_SELECTOR)
          .should(NOT_EXIST);

        cy.get(CHECKBOX_SELECTOR).shadow().find("input").click();
        cy.get(CHECKBOX_SELECTOR).should(HAVE_PROP, "checked", false);
        cy.get(CHECKBOX_SELECTOR)
          .shadow()
          .find(INDETERMINATE_SYMBOL_SELECTOR)
          .should(NOT_EXIST);

        cy.get(CHECKBOX_SELECTOR)
          .invoke("prop", "indeterminate", "true")
          .then(() => {
            cy.get(CHECKBOX_SELECTOR).should(HAVE_PROP, "checked", false);
            cy.get(CHECKBOX_SELECTOR)
              .shadow()
              .find(INDETERMINATE_SYMBOL_SELECTOR)
              .should(NOT_EXIST);
            cy.get(CHECKBOX_SELECTOR).shadow().find("input").click();
            cy.get(CHECKBOX_SELECTOR).should(HAVE_PROP, "checked", true);
            cy.get(CHECKBOX_SELECTOR)
              .shadow()
              .find(INDETERMINATE_SYMBOL_SELECTOR)
              .should(BE_VISIBLE);
          });
      });
  });

  it("should test native indeterminate checkbox behaviour", () => {
    mount(<NativeIndeterminateCheckbox />);

    cy.checkHydrated(CHECKBOX_SELECTOR);

    cy.get(CHECKBOX_SELECTOR).should(HAVE_PROP, "checked", false);
    cy.get(CHECKBOX_SELECTOR)
      .shadow()
      .find(INDETERMINATE_SYMBOL_SELECTOR)
      .should(BE_VISIBLE);

    cy.get(CHECKBOX_SELECTOR)
      .invoke("prop", "indeterminate", "false")
      .then(() => {
        cy.get(CHECKBOX_SELECTOR).should(HAVE_PROP, "checked", false);
        cy.get(CHECKBOX_SELECTOR)
          .shadow()
          .find(INDETERMINATE_SYMBOL_SELECTOR)
          .should(NOT_EXIST);

        cy.get(CHECKBOX_SELECTOR).shadow().find("input").click();
        cy.get(CHECKBOX_SELECTOR).should(HAVE_PROP, "checked", true);
        cy.get(CHECKBOX_SELECTOR)
          .shadow()
          .find(INDETERMINATE_SYMBOL_SELECTOR)
          .should(NOT_EXIST);

        cy.get(CHECKBOX_SELECTOR).shadow().find("input").click();
        cy.get(CHECKBOX_SELECTOR).should(HAVE_PROP, "checked", false);
        cy.get(CHECKBOX_SELECTOR)
          .shadow()
          .find(INDETERMINATE_SYMBOL_SELECTOR)
          .should(NOT_EXIST);

        cy.get(CHECKBOX_SELECTOR)
          .invoke("prop", "indeterminate", "true")
          .then(() => {
            cy.get(CHECKBOX_SELECTOR).should(HAVE_PROP, "checked", false);
            cy.get(CHECKBOX_SELECTOR)
              .shadow()
              .find(INDETERMINATE_SYMBOL_SELECTOR)
              .should(BE_VISIBLE);

            cy.get(CHECKBOX_SELECTOR).shadow().find("input").click();
            cy.get(CHECKBOX_SELECTOR).should(HAVE_PROP, "checked", true);
            cy.get(CHECKBOX_SELECTOR)
              .shadow()
              .find(INDETERMINATE_SYMBOL_SELECTOR)
              .should(NOT_EXIST);

            cy.get(CHECKBOX_SELECTOR).shadow().find("input").click();
            cy.get(CHECKBOX_SELECTOR).should(HAVE_PROP, "checked", false);
            cy.get(CHECKBOX_SELECTOR)
              .shadow()
              .find(INDETERMINATE_SYMBOL_SELECTOR)
              .should(NOT_EXIST);
          });
      });
  });

  it("should reset checked state on form reset", () => {
    mount(<CheckboxForm />);

    cy.checkHydrated(CHECKBOX_GROUP_SELECTOR);

    cy.get(CHECKBOX_SELECTOR).eq(0).shadow().find(CONTAINER_SELECTOR).click();
    cy.get(CHECKBOX_SELECTOR).eq(0).should(HAVE_PROP, "checked", true);
    cy.get('button[type="reset"]').click();
    cy.get(CHECKBOX_SELECTOR).eq(0).should(HAVE_PROP, "checked", false);
  });

  it("should test indeterminate behaviour with children", () => {
    mount(<IndeterminateWithChildren />);

    cy.checkHydrated(CHECKBOX_GROUP_SELECTOR);

    // check parent checkbox
    cy.get(CHECKBOX_SELECTOR).eq(0).shadow().find("input").click();
    cy.get(CHECKBOX_SELECTOR).eq(0).should(HAVE_PROP, "checked", true);
    cy.get(CHECKBOX_SELECTOR).eq(1).should(HAVE_PROP, "checked", true);
    cy.get(CHECKBOX_SELECTOR).eq(2).should(HAVE_PROP, "checked", true);
    cy.get(CHECKBOX_SELECTOR).eq(3).should(HAVE_PROP, "checked", true);

    // clear child checkboxes
    cy.get(CHECKBOX_SELECTOR).eq(1).shadow().find("input").click();
    cy.get(CHECKBOX_SELECTOR).eq(0).should(HAVE_PROP, "checked", true);
    cy.get(CHECKBOX_SELECTOR)
      .eq(0)
      .shadow()
      .find(INDETERMINATE_SYMBOL_SELECTOR)
      .should(BE_VISIBLE);

    cy.get(CHECKBOX_SELECTOR).eq(2).shadow().find("input").click();
    cy.get(CHECKBOX_SELECTOR).eq(0).should(HAVE_PROP, "checked", true);
    cy.get(CHECKBOX_SELECTOR)
      .eq(0)
      .shadow()
      .find(INDETERMINATE_SYMBOL_SELECTOR)
      .should(BE_VISIBLE);

    cy.get(CHECKBOX_SELECTOR).eq(3).shadow().find("input").click();
    cy.get(CHECKBOX_SELECTOR).eq(0).should(HAVE_PROP, "checked", false);
    cy.get(CHECKBOX_SELECTOR)
      .eq(0)
      .shadow()
      .find(INDETERMINATE_SYMBOL_SELECTOR)
      .should(NOT_EXIST);

    // re-check each child checkbox
    cy.get(CHECKBOX_SELECTOR).eq(3).shadow().find("input").click();
    cy.get(CHECKBOX_SELECTOR).eq(0).should(HAVE_PROP, "checked", false);
    cy.get(CHECKBOX_SELECTOR)
      .eq(0)
      .shadow()
      .find(INDETERMINATE_SYMBOL_SELECTOR)
      .should(BE_VISIBLE);

    cy.get(CHECKBOX_SELECTOR).eq(2).shadow().find("input").click();
    cy.get(CHECKBOX_SELECTOR).eq(0).should(HAVE_PROP, "checked", false);
    cy.get(CHECKBOX_SELECTOR)
      .eq(0)
      .shadow()
      .find(INDETERMINATE_SYMBOL_SELECTOR)
      .should(BE_VISIBLE);

    cy.get(CHECKBOX_SELECTOR).eq(1).shadow().find("input").click();
    cy.get(CHECKBOX_SELECTOR).eq(0).should(HAVE_PROP, "checked", true);
    cy.get(CHECKBOX_SELECTOR)
      .eq(0)
      .shadow()
      .find(INDETERMINATE_SYMBOL_SELECTOR)
      .should(NOT_EXIST);

    //clear parent checkbox
    cy.get(CHECKBOX_SELECTOR).eq(0).shadow().find("input").click();

    cy.get(CHECKBOX_SELECTOR).eq(0).should(HAVE_PROP, "checked", false);
    cy.get(CHECKBOX_SELECTOR).eq(1).should(HAVE_PROP, "checked", false);
    cy.get(CHECKBOX_SELECTOR).eq(2).should(HAVE_PROP, "checked", false);
    cy.get(CHECKBOX_SELECTOR).eq(3).should(HAVE_PROP, "checked", false);
  });

  it("should render checkboxes dynamically in a group", () => {
    mount(<DynamicLoading />);

    cy.checkHydrated(CHECKBOX_GROUP_SELECTOR);

    cy.get("ic-button").click();
    cy.findShadowEl(CHECKBOX_SELECTOR, "input").should(
      HAVE_ATTR,
      "id",
      "ic-checkbox-Item-1-What-is-your-favourite-coffee?"
    );
  });

  it("should pass down the name and label to child checkboxes when they update", () => {
    mount(
      <IcCheckboxGroup
        label="What is your favourite coffee?"
        name="checkbox-group-1"
      >
        <IcCheckbox value="Item 1" label="Item 1" />
        <IcCheckbox value="Item 2" label="Item 2" name="Item 2 name" />
      </IcCheckboxGroup>
    );

    cy.checkHydrated(CHECKBOX_GROUP_SELECTOR);

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

  it("should render as a controlled component", () => {
    mount(<Controlled />);

    cy.checkHydrated(CHECKBOX_SELECTOR);

    cy.get("ic-button#uncheck-btn").click();
    cy.get(CHECKBOX_SELECTOR).eq(0).should(HAVE_PROP, "checked", false);
    cy.get("ic-button#check-btn").click();
    cy.get(CHECKBOX_SELECTOR).eq(0).should(HAVE_PROP, "checked", true);
  });

  it("should render as an uncontrolled component", () => {
    mount(<Uncontrolled />);

    cy.checkHydrated(CHECKBOX_SELECTOR);

    cy.spy(window.console, "log").as("spyWinConsoleLog");
    cy.get(CHECKBOX_SELECTOR).eq(0).shadow().find(CONTAINER_SELECTOR).click();
    cy.get("@spyWinConsoleLog").should(HAVE_BEEN_CALLED_WITH, true);
  });
});

describe("IcCheckbox visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render default", () => {
    mount(<Checkbox />);

    cy.checkHydrated(CHECKBOX_GROUP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.063),
    });
  });

  it("should render disabled", () => {
    mount(<Disabled />);

    cy.checkHydrated(CHECKBOX_GROUP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "disabled",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.028),
    });
  });

  it("should render with hidden group label", () => {
    mount(<HiddenGroupLabel />);

    cy.checkHydrated(CHECKBOX_GROUP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "hide-label",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.035),
    });
  });

  it("should render with hidden checkbox label", () => {
    mount(<HiddenCheckboxLabel />);

    cy.checkHydrated(CHECKBOX_GROUP_SELECTOR);

    cy.compareSnapshot({
      name: "hide-checkbox-label",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
    cy.checkA11yWithWait(undefined, 1000);
  });

  it("should render helper text", () => {
    mount(<HelperText />);

    cy.checkHydrated(CHECKBOX_GROUP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "helper",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.06),
    });
  });

  it("should render with required prop", () => {
    mount(<Required />);

    cy.checkHydrated(CHECKBOX_GROUP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "required",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.053),
    });
  });

  it("should render different sizes", () => {
    mount(<DifferentSizes />);

    cy.checkHydrated(CHECKBOX_GROUP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "sizes",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.084),
    });
  });

  it("should render different checkbox sizes", () => {
    mount(<DifferentSizedCheckboxes />);

    cy.checkHydrated(CHECKBOX_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "checkbox-sizes",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.046),
    });
  });

  it("should render conditional input", () => {
    mount(<Conditional />);

    cy.checkHydrated(CHECKBOX_GROUP_SELECTOR);

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "conditional",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.075),
    });
  });

  it("should render conditional input dynamically", () => {
    mount(<ConditionalDynamic />);

    cy.checkHydrated(CHECKBOX_GROUP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "dynamic",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.087),
    });
  });

  it("should render with validation", () => {
    mount(<Validation />);

    cy.checkHydrated(CHECKBOX_GROUP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "validation",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.06),
    });
  });

  it("should render with focus", () => {
    mount(<Checkbox />);

    cy.checkHydrated(CHECKBOX_GROUP_SELECTOR);
    cy.wait(500)
      .get(CHECKBOX_SELECTOR)
      .eq(0)
      .shadow()
      .find("input")
      .eq(0)
      .focus()
      .should(HAVE_FOCUS);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "focus",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.063),
    });
  });

  it("should render with theme dark", () => {
    mount(<ThemeDark />);

    cy.checkHydrated(CHECKBOX_GROUP_SELECTOR);
    cy.get(CHECKBOX_SELECTOR).eq(4).shadow().find(CONTAINER_SELECTOR).click();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "theme-dark",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.065),
    });
  });
});

describe("IcCheckbox visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  after(() => {
    cy.disableForcedColors();
  });

  it("should render default in high contrast mode", () => {
    mount(<Checkbox />);

    cy.checkHydrated(CHECKBOX_GROUP_SELECTOR);

    cy.compareSnapshot({
      name: "default-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.062),
    });
  });

  it("should render disabled in high contrast mode", () => {
    mount(<Disabled />);

    cy.checkHydrated(CHECKBOX_GROUP_SELECTOR);

    cy.compareSnapshot({
      name: "disabled-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.055),
    });
  });

  it("should render helper text in high contrast mode", () => {
    mount(<HelperText />);

    cy.checkHydrated(CHECKBOX_GROUP_SELECTOR);

    cy.compareSnapshot({
      name: "helper-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.056),
    });
  });

  it("should render conditional input in high contrast mode", () => {
    mount(<Conditional />);

    cy.checkHydrated(CHECKBOX_GROUP_SELECTOR);

    cy.compareSnapshot({
      name: "conditional-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.071),
    });
  });

  it("should render conditional input dynamically in high contrast mode", () => {
    mount(<ConditionalDynamic />);

    cy.checkHydrated(CHECKBOX_GROUP_SELECTOR);

    cy.compareSnapshot({
      name: "dynamic-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.084),
    });
  });

  it("should render with validation in high contrast mode", () => {
    mount(<Validation />);

    cy.checkHydrated(CHECKBOX_GROUP_SELECTOR);

    cy.compareSnapshot({
      name: "validation-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.056),
    });
  });

  it("should render with focus in high contrast mode", () => {
    mount(<Checkbox />);

    cy.checkHydrated(CHECKBOX_GROUP_SELECTOR);
    cy.get(CHECKBOX_SELECTOR).eq(1).shadow().find(CONTAINER_SELECTOR).click();
    cy.realPress(["Shift", "Tab"]);
    cy.get(CHECKBOX_SELECTOR)
      .eq(0)
      .shadow()
      .find("input")
      .eq(0)
      .should(HAVE_FOCUS);

    cy.wait(500).compareSnapshot({
      name: "focus-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.062),
    });
  });
});
