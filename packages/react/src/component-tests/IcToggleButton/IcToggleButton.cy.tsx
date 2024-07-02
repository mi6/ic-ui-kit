/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
import { IcBadge, IcToggleButton } from "../../components";
import { CYPRESS_AXE_OPTIONS } from "../../../cypress/utils/a11y";
import { mount } from "cypress/react";
import { SlottedSVG } from "../../";
import {
  HAVE_CLASS,
  NOT_BE_CALLED_ONCE,
  NOT_HAVE_CLASS,
} from "../utils/constants";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

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

describe("IcToggleButton", () => {
  it("should render", () => {
    mount(<IcToggleButton label="Test" />);

    cy.get(TOGGLE_BUTTON_SELECTOR).should("exist");
  });

  it("should switch to checked when clicked", () => {
    mount(<IcToggleButton label="Test Clickable" />);
    cy.get(TOGGLE_BUTTON_SELECTOR).should(NOT_HAVE_CLASS, "checked");
    cy.get(TOGGLE_BUTTON_SELECTOR).click();
    cy.get(TOGGLE_BUTTON_SELECTOR).should(HAVE_CLASS, "checked");
    cy.get(TOGGLE_BUTTON_SELECTOR).click();
    cy.get(TOGGLE_BUTTON_SELECTOR).should(NOT_HAVE_CLASS, "checked");
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

describe("IcToggleButton visual regression tests", () => {
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

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.002),
    });
  });

  it("should render checked", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcToggleButton label="Test" checked />
      </div>
    );

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "checked",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render disabled", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcToggleButton label="Test" disabled />
        <IcToggleButton label="Test Checked" disabled checked />
      </div>
    );

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "disabled",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.005),
    });
  });

  it("should render with icon", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcToggleButton label="Test">
          <SlottedSVG
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </SlottedSVG>
        </IcToggleButton>
      </div>
    );

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "with-icon",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.002),
    });
  });

  it("should render different sizes", () => {
    mount(
      <div>
        <div style={{ padding: "8px" }}>
          <IcToggleButton label="Test" size="small" />
        </div>
        <div style={{ padding: "8px" }}>
          <IcToggleButton label="Test" size="default" />
        </div>
        <div style={{ padding: "8px" }}>
          <IcToggleButton label="Test" size="large" />
        </div>
      </div>
    );

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "sizes",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.012),
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

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "full-width",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.002),
    });
  });

  it("should render loading", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcToggleButton label="Test" loading />
        <IcToggleButton label="Test" loading checked />
      </div>
    );

    cy.checkA11yWithWait(undefined, 0, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "loading",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
      delay: 500,
    });
  });

  it("should render icon variant", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcToggleButton variant="icon" accessibleLabel="Refresh the page">
          <SlottedSVG
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </SlottedSVG>
        </IcToggleButton>
        <IcToggleButton
          variant="icon"
          accessibleLabel="Refresh the page"
          disabled
        >
          <SlottedSVG
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </SlottedSVG>
        </IcToggleButton>
      </div>
    );

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "icon-variant",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render with icon placement right", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcToggleButton label="Test" iconPlacement="right">
          <SlottedSVG
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </SlottedSVG>
        </IcToggleButton>
      </div>
    );

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "icon-right",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.003),
    });
  });

  it("should render with icon placement top", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcToggleButton label="Test" iconPlacement="top">
          <SlottedSVG
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </SlottedSVG>
        </IcToggleButton>
      </div>
    );

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "icon-top",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.002),
    });
  });
});
