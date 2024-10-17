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
  InAForm,
  ThemeDark,
} from "./IcSwitchTestData";
import {
  HAVE_ATTR,
  HAVE_BEEN_CALLED_ONCE,
  HAVE_BEEN_CALLED_WITH,
  HAVE_PROP,
  HAVE_VALUE,
} from "../utils/constants";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const SWITCH_SELECTOR = "ic-switch";
const DEFAULT_TEST_THRESHOLD = 0.001;

describe("IcSwitch end-to-end tests", () => {
  it("should render as a controlled component", () => {
    mount(<Controlled />);

    cy.checkHydrated(SWITCH_SELECTOR);

    cy.get("ic-button#uncheck-btn").click();
    cy.get(SWITCH_SELECTOR).eq(0).should(HAVE_PROP, "checked", false);
    cy.get("ic-button#check-btn").click();
    cy.get(SWITCH_SELECTOR).eq(0).should(HAVE_PROP, "checked", true);
  });

  //No test for uncontrolled as it always returns false

  it("should be selected and unselected using the space bar key when focused", () => {
    mount(<Default />);

    cy.checkHydrated(SWITCH_SELECTOR);

    cy.findShadowEl(SWITCH_SELECTOR, ".ic-switch-input").focus();
    cy.realPress("Space");
    cy.findShadowEl(SWITCH_SELECTOR, ".ic-switch-input").should(
      HAVE_ATTR,
      "aria-checked",
      "true"
    );
    cy.realPress("Space");
    cy.findShadowEl(SWITCH_SELECTOR, ".ic-switch-input").should(
      HAVE_ATTR,
      "aria-checked",
      "false"
    );
  });

  it("should not be able to click switch when disabled", () => {
    mount(<Disabled />);

    cy.checkHydrated(SWITCH_SELECTOR);

    cy.get(SWITCH_SELECTOR).eq(0).should(HAVE_PROP, "disabled", true);
    cy.get(SWITCH_SELECTOR).eq(0).should(HAVE_PROP, "checked", false);
    cy.get(SWITCH_SELECTOR).eq(0).click({ force: true });
    cy.get(SWITCH_SELECTOR).eq(0).should(HAVE_PROP, "checked", false);
  });

  it("should emit icFocus and icBlur events", () => {
    mount(<Default />);

    cy.checkHydrated(SWITCH_SELECTOR);
    cy.get(SWITCH_SELECTOR).invoke("on", "icFocus", cy.stub().as("icFocus"));
    cy.get(SWITCH_SELECTOR).invoke("on", "icBlur", cy.stub().as("icBlur"));

    cy.findShadowEl(SWITCH_SELECTOR, ".ic-switch-input").focus();
    cy.get("@icFocus").should(HAVE_BEEN_CALLED_ONCE);
    cy.get(SWITCH_SELECTOR).blur();
    cy.get("@icBlur").should(HAVE_BEEN_CALLED_ONCE);
  });

  it("should emit icChange event when selected and unselected", () => {
    mount(<Default />);

    cy.checkHydrated(SWITCH_SELECTOR);
    cy.get(SWITCH_SELECTOR).invoke("on", "icChange", cy.stub().as("icChange"));
    cy.spy(window.console, "log").as("spyWinConsoleLog");

    cy.get(".ic-input").should(HAVE_VALUE, "");
    cy.get(SWITCH_SELECTOR).click();
    cy.get(".ic-input").should(HAVE_VALUE, "on");
    cy.get("@icChange").should(HAVE_BEEN_CALLED_ONCE);
    cy.get("@spyWinConsoleLog").should(HAVE_BEEN_CALLED_WITH, {
      checked: true,
    });
    cy.get(SWITCH_SELECTOR).click();
    cy.get(".ic-input").should(HAVE_VALUE, "");
    cy.get("@spyWinConsoleLog").should(HAVE_BEEN_CALLED_WITH, {
      checked: false,
    });
  });

  it("should work in a form", () => {
    mount(<InAForm />);

    cy.checkHydrated(SWITCH_SELECTOR);
    cy.spy(window.console, "log").as("spyWinConsoleLog");

    cy.get(SWITCH_SELECTOR).click();
    cy.get("input[type='submit']").click();
    cy.get("@spyWinConsoleLog").should(
      HAVE_BEEN_CALLED_WITH,
      "Form data: test-name = on"
    );
  });

  it("should reset to initial state on form reset event", () => {
    mount(<InAForm />);

    cy.checkHydrated(SWITCH_SELECTOR);

    cy.findShadowEl(SWITCH_SELECTOR, ".ic-switch-input").should(
      HAVE_ATTR,
      "aria-checked",
      "false"
    );
    cy.get(SWITCH_SELECTOR).click();
    cy.findShadowEl(SWITCH_SELECTOR, ".ic-switch-input").should(
      HAVE_ATTR,
      "aria-checked",
      "true"
    );
    cy.get("input[type='reset']").click();
    cy.findShadowEl(SWITCH_SELECTOR, ".ic-switch-input").should(
      HAVE_ATTR,
      "aria-checked",
      "false"
    );
  });
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
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.033),
    });
  });

  it("should render a switch with hidden label", () => {
    mount(<HiddenLabel />);

    cy.checkHydrated(SWITCH_SELECTOR);
    cy.findShadowEl(SWITCH_SELECTOR, ".ic-switch-input").should(
      HAVE_ATTR,
      "aria-label",
      "Label"
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "hidden-label",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render with focus", () => {
    mount(<Default />);

    cy.checkHydrated(SWITCH_SELECTOR);
    cy.findShadowEl(SWITCH_SELECTOR, ".ic-switch-input").focus().wait(200);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "focus",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.015),
    });
  });

  it("should render a switch in dark theme", () => {
    mount(<ThemeDark />);

    cy.checkHydrated(SWITCH_SELECTOR);

    // cy.checkA11yWithWait(); A11y failure for colour contrast
    cy.compareSnapshot({
      name: "theme-dark",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
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
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.038),
    });
  });
});
