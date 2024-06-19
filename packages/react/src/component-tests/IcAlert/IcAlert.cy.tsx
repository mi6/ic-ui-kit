/// <reference types="Cypress" />
import { mount } from "@cypress/react";
import React from "react";
import { IcAlert, IcButton, IcLink } from "../../components";
import { BE_VISIBLE, NOT_BE_VISIBLE } from "../utils/constants";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const DEFAULT_TEST_THRESHOLD = 0;

const TYPOGRAPHY_SELECTOR = "ic-typography";

describe("IcAlert", () => {
  beforeEach(() => {
    cy.injectAxe();
    cy.viewport(1024, 750);
  });
  afterEach(() => {
    cy.task("generateReport");
  });
  it("should render neutral alert with message and icon", () => {
    mount(
      <IcAlert
        heading="Neutral"
        message="This alert is for displaying miscellaneous messages."
      />
    );

    cy.checkHydrated("ic-alert");
    cy.findShadowEl("ic-alert", "svg").should(BE_VISIBLE);
    cy.get('[heading="Neutral"]').should(BE_VISIBLE);
    cy.findShadowEl("ic-alert", TYPOGRAPHY_SELECTOR)
      .find("p")
      .should(BE_VISIBLE)
      .contains("Neutral");
    cy.findShadowEl("ic-alert", TYPOGRAPHY_SELECTOR)
      .contains("This alert is for displaying miscellaneous messages.")
      .should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "neutral",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.033),
      delay: 500,
    });
  });
  it("should render info alert with message and icon", () => {
    mount(
      <IcAlert
        variant="info"
        heading="Info"
        message="This alert is for displaying information."
      />
    );

    cy.checkHydrated("ic-alert");
    cy.findShadowEl("ic-alert", "svg").should(BE_VISIBLE);
    cy.get('[heading="Info"]').should(BE_VISIBLE);
    cy.findShadowEl("ic-alert", TYPOGRAPHY_SELECTOR)
      .find("p")
      .should(BE_VISIBLE)
      .contains("Info");
    cy.findShadowEl("ic-alert", TYPOGRAPHY_SELECTOR)
      .contains("This alert is for displaying information.")
      .should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "info",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.028),
      delay: 500,
    });
  });

  it("should render error alert with message and icon", () => {
    mount(
      <IcAlert
        variant="error"
        heading="Error"
        message="This alert is for displaying errors."
      />
    );

    cy.checkHydrated("ic-alert");
    cy.findShadowEl("ic-alert", "svg").should(BE_VISIBLE);
    cy.get('[heading="Error"]').should(BE_VISIBLE);
    cy.findShadowEl("ic-alert", TYPOGRAPHY_SELECTOR)
      .find("p")
      .should(BE_VISIBLE)
      .contains("Error");
    cy.findShadowEl("ic-alert", TYPOGRAPHY_SELECTOR)
      .contains("This alert is for displaying errors.")
      .should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "error",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.026),
      delay: 500,
    });
  });

  it("should render warning alert with message and icon", () => {
    mount(
      <IcAlert
        variant="warning"
        heading="Warning"
        message="This alert is for displaying warnings."
      />
    );

    cy.checkHydrated("ic-alert");
    cy.findShadowEl("ic-alert", "svg").should(BE_VISIBLE);
    cy.get('[heading="Warning"]').should(BE_VISIBLE);
    cy.findShadowEl("ic-alert", TYPOGRAPHY_SELECTOR)
      .find("p")
      .should(BE_VISIBLE)
      .contains("Warning");
    cy.findShadowEl("ic-alert", TYPOGRAPHY_SELECTOR)
      .contains("This alert is for displaying warnings.")
      .should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "warning",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.03),
      delay: 500,
    });
  });

  it("should render success alert with message and icon", () => {
    mount(
      <IcAlert
        variant="success"
        heading="Success"
        message="This alert is for displaying success messages."
      />
    );

    cy.checkHydrated("ic-alert");
    cy.findShadowEl("ic-alert", "svg").should(BE_VISIBLE);
    cy.get('[heading="Success"]').should(BE_VISIBLE);
    cy.findShadowEl("ic-alert", TYPOGRAPHY_SELECTOR)
      .find("p")
      .should(BE_VISIBLE)
      .contains("Success");
    cy.findShadowEl("ic-alert", TYPOGRAPHY_SELECTOR)
      .contains("This alert is for displaying success messages.")
      .should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "success",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.03),
      delay: 500,
    });
  });

  it("should close when dismiss button is pressed on dismissible alert", () => {
    mount(
      <IcAlert
        heading="Dismissible"
        message="This alert is dismissible."
        dismissible
      />
    );

    cy.checkHydrated("ic-alert");
    cy.get("ic-alert").should("exist");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "dismissible",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
      delay: 500,
    });

    cy.findShadowEl("ic-alert", "ic-button").should(BE_VISIBLE).click();
    cy.get("ic-alert").should(NOT_BE_VISIBLE);
  });
  it("should display title above message responsively", () => {
    mount(
      <IcAlert
        heading="This title is very long so should force the alert to add 'title-above'"
        message="This alert does not have 'title-above' added as a prop but it's forced to add it due to the length of the title."
      />
    );

    cy.checkHydrated("ic-alert");
    cy.findShadowEl("ic-alert", "svg").should(BE_VISIBLE);
    cy.findShadowEl("ic-alert", TYPOGRAPHY_SELECTOR)
      .find("p")
      .should(BE_VISIBLE)
      .contains(
        "This title is very long so should force the alert to add 'title-above"
      )
      .should(BE_VISIBLE);
    cy.findShadowEl("ic-alert", TYPOGRAPHY_SELECTOR)
      .contains(
        "This alert does not have 'title-above' added as a prop but it's forced to add it due to the length of the title."
      )
      .should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "responsive",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.051),
      delay: 500,
    });
  });

  it("should display title above message when title-above is true", () => {
    mount(
      <IcAlert
        heading="Title displayed above the message"
        message="This alert has the title at the top of the alert and the message below it."
        title-above="true"
      />
    );

    cy.checkHydrated("ic-alert");
    cy.findShadowEl("ic-alert", "svg").should(BE_VISIBLE);
    cy.get('[heading="Title displayed above the message"]').should(BE_VISIBLE);
    cy.findShadowEl("ic-alert", TYPOGRAPHY_SELECTOR)
      .find("p")
      .should(BE_VISIBLE)
      .contains("Title displayed above the message");
    cy.findShadowEl("ic-alert", TYPOGRAPHY_SELECTOR)
      .contains(
        "This alert has the title at the top of the alert and the message below it."
      )
      .should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "title-above-set",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.043),
      delay: 500,
    });
  });
  it("should render with custom message slot and link", () => {
    mount(
      <IcAlert heading="This alert uses a custom message slot">
        <span slot="message">
          This is some text and <IcLink href="/">this is an inline link</IcLink>{" "}
          within the text.
        </span>
      </IcAlert>
    );

    cy.checkHydrated("ic-alert");
    cy.findShadowEl("ic-alert", "svg").should(BE_VISIBLE);
    cy.findShadowEl("ic-alert", TYPOGRAPHY_SELECTOR)
      .find("p")
      .contains("This alert uses a custom message slot")
      .should(BE_VISIBLE);
    cy.get("ic-link").click();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "custom-message",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.038),
      delay: 500,
    });
  });

  it("should render with action in button slot", () => {
    mount(
      <IcAlert heading="With action" message="This alert has an action.">
        <IcButton
          type="button"
          slot="action"
          variant="secondary"
          appearance="dark"
        >
          Button
        </IcButton>
      </IcAlert>
    );

    cy.checkHydrated("ic-alert");
    cy.findShadowEl("ic-alert", "svg").should(BE_VISIBLE);
    cy.findShadowEl("ic-alert", TYPOGRAPHY_SELECTOR)
      .find("p")
      .contains("With action")
      .should(BE_VISIBLE);
    cy.findShadowEl("ic-alert", TYPOGRAPHY_SELECTOR)
      .contains("This alert has an action.")
      .should(BE_VISIBLE);
    cy.get("ic-button").should(BE_VISIBLE).click();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "with-action",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.027),
      delay: 500,
    });
  });
});
