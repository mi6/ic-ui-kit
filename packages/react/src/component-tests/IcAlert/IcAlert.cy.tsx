/// <reference types="Cypress" />
import { mount } from "@cypress/react";
import React from "react";
import {
  BE_VISIBLE,
  HAVE_ATTR,
  NOT_BE_VISIBLE,
  NOT_EXIST,
} from "../utils/constants";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";
import {
  Neutral,
  Info,
  Error,
  Warning,
  Success,
  Variants,
  Dismissible,
  Responsive,
  TitleAbove,
  CustomMessage,
  WithAction,
  MessageOnly,
  NoIcon,
  SlottedIcon,
} from "./IcAlertTestData";
import { IcAlert } from "../../components";

const ALERT_SELECTOR = "ic-alert";
const TYPOGRAPHY_SELECTOR = "ic-typography";
const DEFAULT_TEST_THRESHOLD = 0.026;

describe("IcAlert end-to-end tests", () => {
  beforeEach(() => {
    cy.viewport(1024, 750);
  });

  it("should render neutral alert with message and icon", () => {
    mount(<Neutral />);

    cy.checkHydrated(ALERT_SELECTOR);
    cy.findShadowEl(ALERT_SELECTOR, "svg").should(BE_VISIBLE);
    cy.get('[heading="Neutral"]').should(BE_VISIBLE);
    cy.findShadowEl(ALERT_SELECTOR, TYPOGRAPHY_SELECTOR)
      .find("p")
      .should(BE_VISIBLE)
      .contains("Neutral");
    cy.findShadowEl(ALERT_SELECTOR, TYPOGRAPHY_SELECTOR)
      .contains("This alert is for displaying miscellaneous messages.")
      .should(BE_VISIBLE);
  });

  it("should render info alert with message and icon", () => {
    mount(<Info />);

    cy.checkHydrated(ALERT_SELECTOR);
    cy.findShadowEl(ALERT_SELECTOR, "svg").should(BE_VISIBLE);
    cy.get('[heading="Info"]').should(BE_VISIBLE);
    cy.findShadowEl(ALERT_SELECTOR, TYPOGRAPHY_SELECTOR)
      .find("p")
      .should(BE_VISIBLE)
      .contains("Info");
    cy.findShadowEl(ALERT_SELECTOR, TYPOGRAPHY_SELECTOR)
      .contains("This alert is for displaying information.")
      .should(BE_VISIBLE);
  });

  it("should render error alert with message and icon", () => {
    mount(<Error />);

    cy.checkHydrated(ALERT_SELECTOR);
    cy.findShadowEl(ALERT_SELECTOR, "svg").should(BE_VISIBLE);
    cy.get('[heading="Error"]').should(BE_VISIBLE);
    cy.findShadowEl(ALERT_SELECTOR, TYPOGRAPHY_SELECTOR)
      .find("p")
      .should(BE_VISIBLE)
      .contains("Error");
    cy.findShadowEl(ALERT_SELECTOR, TYPOGRAPHY_SELECTOR)
      .contains("This alert is for displaying errors.")
      .should(BE_VISIBLE);
  });

  it("should render warning alert with message and icon", () => {
    mount(<Warning />);

    cy.checkHydrated(ALERT_SELECTOR);
    cy.findShadowEl(ALERT_SELECTOR, "svg").should(BE_VISIBLE);
    cy.get('[heading="Warning"]').should(BE_VISIBLE);
    cy.findShadowEl(ALERT_SELECTOR, TYPOGRAPHY_SELECTOR)
      .find("p")
      .should(BE_VISIBLE)
      .contains("Warning");
    cy.findShadowEl(ALERT_SELECTOR, TYPOGRAPHY_SELECTOR)
      .contains("This alert is for displaying warnings.")
      .should(BE_VISIBLE);
  });

  it("should render success alert with message and icon", () => {
    mount(<Success />);

    cy.checkHydrated(ALERT_SELECTOR);
    cy.findShadowEl(ALERT_SELECTOR, "svg").should(BE_VISIBLE);
    cy.get('[heading="Success"]').should(BE_VISIBLE);
    cy.findShadowEl(ALERT_SELECTOR, TYPOGRAPHY_SELECTOR)
      .find("p")
      .should(BE_VISIBLE)
      .contains("Success");
    cy.findShadowEl(ALERT_SELECTOR, TYPOGRAPHY_SELECTOR)
      .contains("This alert is for displaying success messages.")
      .should(BE_VISIBLE);
  });

  it("should close alert when dismiss button is pressed on dismissible alert", () => {
    mount(<Dismissible />);

    cy.checkHydrated(ALERT_SELECTOR);
    cy.get(ALERT_SELECTOR).should("exist");
    cy.findShadowEl(ALERT_SELECTOR, "ic-button").should(BE_VISIBLE).click();
    cy.get(ALERT_SELECTOR).should(NOT_BE_VISIBLE);
  });

  it("should render alert with custom message slot and link", () => {
    mount(<CustomMessage />);

    cy.checkHydrated(ALERT_SELECTOR);
    cy.findShadowEl(ALERT_SELECTOR, "svg").should(BE_VISIBLE);
    cy.findShadowEl(ALERT_SELECTOR, TYPOGRAPHY_SELECTOR)
      .find("p")
      .contains("This alert uses a custom message slot")
      .should(BE_VISIBLE);
    cy.get("ic-link").click();
  });

  it("should render alert with action in button slot", () => {
    mount(<WithAction />);

    cy.checkHydrated(ALERT_SELECTOR);
    cy.findShadowEl(ALERT_SELECTOR, "svg").should(BE_VISIBLE);
    cy.findShadowEl(ALERT_SELECTOR, TYPOGRAPHY_SELECTOR)
      .find("p")
      .contains("With action")
      .should(BE_VISIBLE);
    cy.findShadowEl(ALERT_SELECTOR, TYPOGRAPHY_SELECTOR)
      .contains("This alert has an action.")
      .should(BE_VISIBLE);
    cy.get("ic-button").should(BE_VISIBLE).click();
  });

  it("should render icon when showDefaultIcon is set to false on an alert that is not neutral", () => {
    mount(
      <IcAlert
        variant="info"
        message="This alert does not have an icon"
        showDefaultIcon={false}
      />
    );

    cy.checkHydrated(ALERT_SELECTOR);
    cy.findShadowEl(ALERT_SELECTOR, "svg")
      .should(BE_VISIBLE)
      .and(HAVE_ATTR, "aria-labelledby", "info-title");
  });
});

describe("IcAlert visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.injectAxe();
    cy.viewport(1024, 750);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render all variants of alert with message and icon", () => {
    mount(<Variants />);

    cy.checkHydrated(ALERT_SELECTOR);
    cy.wait(500);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "variants",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.054),
    });
  });

  it("should render a dismissible alert", () => {
    mount(<Dismissible />);

    cy.checkHydrated(ALERT_SELECTOR);
    cy.wait(500);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "dismissible",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.001),
    });
  });

  it("should render alert with title displayed above message responsively", () => {
    mount(<Responsive />);

    cy.checkHydrated(ALERT_SELECTOR);
    cy.wait(500);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "responsive",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.025),
    });
  });

  it("should render alert with title displayed above message when title-above is true", () => {
    mount(<TitleAbove />);

    cy.checkHydrated(ALERT_SELECTOR);
    cy.wait(500);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "title-above-set",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.017),
    });
  });

  it("should render alert with custom message slot and link", () => {
    mount(<CustomMessage />);

    cy.checkHydrated(ALERT_SELECTOR);
    cy.wait(500);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "custom-message",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.012),
    });
  });

  it("should render alert with action in button slot", () => {
    mount(<WithAction />);

    cy.checkHydrated(ALERT_SELECTOR);
    cy.wait(500);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "with-action",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.001),
    });
  });

  it("should render alert with message only", () => {
    mount(<MessageOnly />);

    cy.checkHydrated(ALERT_SELECTOR);
    cy.wait(500);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "message-only",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.005),
    });
  });

  it("should render neutral alert with no icon", () => {
    mount(<NoIcon />);

    cy.checkHydrated(ALERT_SELECTOR);
    cy.findShadowEl(ALERT_SELECTOR, "svg").should(NOT_EXIST);
    cy.wait(500);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "no-icon",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render neutral alert with a slotted icon", () => {
    mount(<SlottedIcon />);

    cy.checkHydrated(ALERT_SELECTOR);
    cy.wait(500);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "slotted-icon",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.008),
    });
  });
});

describe("IcAlert visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  beforeEach(() => {
    cy.viewport(1024, 626);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  after(() => {
    cy.disableForcedColors();
  });

  it("should render all variants of alert with message and icon in high contrast mode", () => {
    mount(<Variants />);

    cy.checkHydrated(ALERT_SELECTOR);
    cy.wait(500);

    cy.compareSnapshot({
      name: "variants-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.052),
    });
  });

  it("should render alert with action in button slot in high contrast mode", () => {
    mount(<WithAction />);

    cy.checkHydrated(ALERT_SELECTOR);
    cy.wait(500);

    cy.compareSnapshot({
      name: "with-action-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.001),
    });
  });

  it("should render alert with custom message slot and link in high contrast mode", () => {
    mount(<CustomMessage />);

    cy.checkHydrated(ALERT_SELECTOR);
    cy.wait(500);

    cy.compareSnapshot({
      name: "custom-message-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.012),
    });
  });

  it("should render a dismissible alert in high contrast mode", () => {
    mount(<Dismissible />);

    cy.checkHydrated(ALERT_SELECTOR);
    cy.wait(500);

    cy.compareSnapshot({
      name: "dismissible-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render neutral alert with a slotted icon in high contrast mode", () => {
    mount(<SlottedIcon />);

    cy.checkHydrated(ALERT_SELECTOR);
    cy.wait(500);

    cy.compareSnapshot({
      name: "slotted-icon-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.007),
    });
  });
});
