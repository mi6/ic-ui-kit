/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress/react";
import {
  Controlled,
  Default,
  State,
  Checked,
  Disabled,
  Small,
  RightAdornment,
  HelperText,
  HiddenLabel,
} from "./IcSwitchTestData";
import { HAVE_PROP } from "../utils/constants";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const SWITCH_SELECTOR = "ic-switch";
const DEFAULT_TEST_THRESHOLD = 0.001;

describe("IcSwitch end-to-end tests", () => {
  it("should render as a controlled component", () => {
    mount(<Controlled />);

    cy.checkHydrated(SWITCH_SELECTOR);

    cy.get("ic-button#uncheck-btn").click();
    cy.get("ic-switch").eq(0).should(HAVE_PROP, "checked", false);
    cy.get("ic-button#check-btn").click();
    cy.get("ic-switch").eq(0).should(HAVE_PROP, "checked", true);
  });

  //No test for uncontrolled as it always returns false
});

describe("IcSwitch visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render a default switch", () => {
    mount(<Default />);

    cy.checkHydrated(SWITCH_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.015),
    });
  });

  it("should render a switch with state text", () => {
    mount(<State />);

    cy.checkHydrated(SWITCH_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "state",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
    });
  });

  it("should render a checked switch", () => {
    mount(<Checked />);

    cy.checkHydrated(SWITCH_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "checked",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.017),
    });
  });

  it("should render disabled checked and unchecked switches", () => {
    mount(<Disabled />);

    cy.checkHydrated(SWITCH_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "disabled",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
    });
  });

  it("should render a small switch", () => {
    mount(<Small />);

    cy.checkHydrated(SWITCH_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "small",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
    });
  });

  it("should render a switch with right adornment", () => {
    mount(<RightAdornment />);

    cy.checkHydrated(SWITCH_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "right-adornment",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.025),
    });
  });

  it("should render a switch with helper text", () => {
    mount(<HelperText />);

    cy.checkHydrated(SWITCH_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "helper-text",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.06),
    });
  });

  it("should render a switch with hidden label", () => {
    mount(<HiddenLabel />);

    cy.checkHydrated(SWITCH_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "hidden-label",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });
});

describe("IcSwitch visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  after(() => {
    cy.disableForcedColors();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render an unchecked switch in high contrast mode", () => {
    mount(<State />);

    cy.checkHydrated(SWITCH_SELECTOR);

    cy.compareSnapshot({
      name: "unchecked-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
    });
  });

  it("should render a checked switch in high contrast mode", () => {
    mount(<Checked />);

    cy.checkHydrated(SWITCH_SELECTOR);

    cy.compareSnapshot({
      name: "checked-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.018),
    });
  });

  it("should render disabled switches in high contrast mode", () => {
    mount(<Disabled />);

    cy.checkHydrated(SWITCH_SELECTOR);

    cy.compareSnapshot({
      name: "disabled-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.026),
    });
  });

  it("should render a switch with helper text in high contrast mode", () => {
    mount(<HelperText />);

    cy.checkHydrated(SWITCH_SELECTOR);

    cy.compareSnapshot({
      name: "helper-text-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.05),
    });
  });
});
