/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
import { IcBadge, IcToggleButton } from "../../components";
import { CYPRESS_AXE_OPTIONS } from "../../../cypress/utils/a11y";
import { mount } from "cypress/react";
import {
  HAVE_BEEN_CALLED_ONCE,
  HAVE_CLASS,
  NOT_BE_CALLED_ONCE,
  NOT_HAVE_CLASS,
} from "../utils/constants";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";
import {
  Dark,
  IconPlacementRight,
  IconPlacementTop,
  IconVariant,
  Light,
  WithIcon,
} from "./IcToggleButtonTestData";

const DEFAULT_TEST_THRESHOLD = 0.012;
const TOGGLE_BUTTON_SELECTOR = "ic-toggle-button";

/**
 * Justification for additional rule: in the browser this is
 * not reported as an issue by axe Devtools, but it upsets cypress
 */
const TOGGLE_BUTTON_AXE_OPTIONS = {
  rules: {
    ...CYPRESS_AXE_OPTIONS.rules,
    "nested-interactive": { enabled: false },
  },
};

const WIN_CONSOLE_SPY = "@spyWinConsoleLog";

describe("IcToggleButton end-to-end tests", () => {
  it("should render", () => {
    mount(<IcToggleButton label="Test" />);

    cy.get(TOGGLE_BUTTON_SELECTOR).should("exist");
  });

  it("should switch to checked when clicked", () => {
    mount(<IcToggleButton label="Test Clickable" />);

    cy.get(IC_TOGGLE_BUTTON_SELECTOR).invoke(
      "on",
      "icToggleChecked",
      cy.stub().as("icToggleChecked")
    );
    cy.get(IC_TOGGLE_BUTTON_SELECTOR).should(
      NOT_HAVE_CLASS,
      "ic-toggle-button-checked"
    );
    cy.get(IC_TOGGLE_BUTTON_SELECTOR).click();
    cy.get(IC_TOGGLE_BUTTON_SELECTOR).should(
      HAVE_CLASS,
      "ic-toggle-button-checked"
    );
    cy.get("@icToggleChecked").should(HAVE_BEEN_CALLED_ONCE);
    cy.get(IC_TOGGLE_BUTTON_SELECTOR).click();
    cy.get(IC_TOGGLE_BUTTON_SELECTOR).should(
      NOT_HAVE_CLASS,
      "ic-toggle-button-checked"
    );
  });

  it("should not be clickable when disabled", () => {
    cy.spy(window.console, "log").as("spyWinConsoleLog");
    mount(
      <IcToggleButton
        label="Test"
        disabled
        onClick={() => console.log("foo")}
      />
    );

    cy.checkHydrated(TOGGLE_BUTTON_SELECTOR);
    cy.clickOnButton(TOGGLE_BUTTON_SELECTOR);

    cy.get(WIN_CONSOLE_SPY).should(NOT_BE_CALLED_ONCE);
  });

  it("should have loading bar when loading", () => {
    mount(<IcToggleButton label="test" loading />);

    cy.checkHydrated(TOGGLE_BUTTON_SELECTOR);
    cy.findShadowEl(TOGGLE_BUTTON_SELECTOR, "ic-button")
      .shadow()
      .find("ic-loading-indicator")
      .should("exist");
  });

  it("should not be clickable when loading", () => {
    cy.spy(window.console, "log").as("spyWinConsoleLog");
    mount(<IcToggleButton label="test" loading />);

    cy.checkHydrated(TOGGLE_BUTTON_SELECTOR);
    cy.clickOnButton(TOGGLE_BUTTON_SELECTOR);
    cy.get(WIN_CONSOLE_SPY).should(NOT_BE_CALLED_ONCE);
  });
});

describe("IcToggleButton visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render default", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcToggleButton label="Test" />
      </div>
    );
    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.014),
    });
  });

  it("should render checked", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcToggleButton label="Test" checked />
      </div>
    );
    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "checked",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.012),
    });
  });

  it("should render disabled", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcToggleButton label="Test" disabled />
        <IcToggleButton label="Test Checked" disabled checked />
      </div>
    );
    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "disabled",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.017),
    });
  });

  it("should render with icon", () => {
    mount(<WithIcon />);

    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "with-icon",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.014),
    });
  });

  it("should render different sizes", () => {
    mount(
      <div>
        <div style={{ padding: "8px" }}>
          <IcToggleButton label="Test" size="small" />
        </div>
        <div style={{ padding: "8px" }}>
          <IcToggleButton label="Test" size="medium" />
        </div>
        <div style={{ padding: "8px" }}>
          <IcToggleButton label="Test" size="large" />
        </div>
      </div>
    );
    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "sizes",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.024),
    });
  });

  it("should render with badge", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcToggleButton label="Test">
          <IcBadge label="1" slot="badge" variant="success" />
        </IcToggleButton>
      </div>
    );
    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.checkA11yWithWait(undefined, 100, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "with-badge",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.002),
    });
  });

  it("should render with appearance set to dark", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcToggleButton label="Test" appearance="dark" />
      </div>
    );

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "appearance-dark",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.003),
    });

    cy.checkHydrated(TOGGLE_BUTTON_SELECTOR);
    cy.clickOnButton(TOGGLE_BUTTON_SELECTOR);

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "appearance-dark-checked",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.001),
    });
  });

  it("should render with appearance set to light", () => {
    mount(
      <div
        style={{
          padding: "8px",
          backgroundColor: "#2c2f34",
          width: "fit-content",
        }}
      >
        <IcToggleButton label="Test" appearance="light" />
      </div>
    );

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "appearance-light",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });

    cy.checkHydrated(TOGGLE_BUTTON_SELECTOR);
    cy.clickOnButton(TOGGLE_BUTTON_SELECTOR);

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "appearance-light-checked",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.003),
    });
  });

  it("should render full width", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcToggleButton label="Test" fullWidth />
      </div>
    );
    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "full-width",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.014),
    });
  });

  it("should render loading", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcToggleButton label="Test" loading />
        <IcToggleButton label="Test" loading checked />
      </div>
    );
    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "loading",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
    });
  });

  it("should render icon variant", () => {
    mount(<IconVariant />);

    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "icon-variant",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render with icon placement right", () => {
    mount(<IconPlacementRight />);

    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "icon-right",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.015),
    });
  });

  it("should render with icon placement top", () => {
    mount(<IconPlacementTop />);

    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "icon-top",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.014),
    });
  });

  it("should render with appearance set to dark", () => {
    mount(<Dark />);
    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "appearance-dark",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.029),
    });
  });

  it("should render with appearance set to light", () => {
    mount(<Light />);
    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "appearance-light",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.029),
    });
  });
});

describe("IcToggleButton visual regression tests in high contrast mode", () => {
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
    mount(
      <div style={{ padding: "8px" }}>
        <IcToggleButton label="Test" />
      </div>
    );
    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.compareSnapshot({
      name: "default-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.013),
    });
  });

  it("should render checked in high contrast mode", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcToggleButton label="Test" checked />
      </div>
    );
    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.compareSnapshot({
      name: "checked-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.013),
    });
  });

  it("should render disabled in high contrast mode", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcToggleButton label="Test" disabled />
        <IcToggleButton label="Test Checked" disabled checked />
      </div>
    );
    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.compareSnapshot({
      name: "disabled-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.023),
    });
  });

  it("should render loading in high contrast mode", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcToggleButton label="Test" loading />
        <IcToggleButton label="Test" loading checked />
      </div>
    );
    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.compareSnapshot({
      name: "loading-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
    });
  });

  it("should render icon variant in high contrast mode", () => {
    mount(<IconVariant />);

    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.compareSnapshot({
      name: "icon-variant-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });
});
