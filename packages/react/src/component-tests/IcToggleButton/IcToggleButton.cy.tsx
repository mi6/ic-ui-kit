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

const DEFAULT_TEST_THRESHOLD = 0.02;

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
  it("renders", () => {
    mount(<IcToggleButton label="Test" />);

    cy.get("ic-toggle-button").should("exist");
  });

  it("switches to checked when clicked", () => {
    mount(<IcToggleButton label="Test Clickable" />);
    cy.get("ic-toggle-button").should(NOT_HAVE_CLASS, "checked");
    cy.get("ic-toggle-button").click();
    cy.get("ic-toggle-button").should(HAVE_CLASS, "checked");
    cy.get("ic-toggle-button").click();
    cy.get("ic-toggle-button").should(NOT_HAVE_CLASS, "checked");
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

    cy.checkHydrated("ic-toggle-button");
    cy.clickOnButton("ic-toggle-button");

    cy.get(WIN_CONSOLE_SPY).should(NOT_BE_CALLED_ONCE);
  });

  it("should have loading bar when loading", () => {
    mount(<IcToggleButton label="test" loading />);

    cy.checkHydrated("ic-toggle-button");
    cy.findShadowEl("ic-toggle-button", "ic-button")
      .shadow()
      .find("ic-loading-indicator")
      .should("exist");
  });

  it("should not be clickable when loading", () => {
    cy.spy(window.console, "log").as("spyWinConsoleLog");
    mount(<IcToggleButton label="test" loading />);

    cy.checkHydrated("ic-toggle-button");
    cy.clickOnButton("ic-toggle-button");
    cy.get(WIN_CONSOLE_SPY).should(NOT_BE_CALLED_ONCE);
  });
});

describe("IcToggleButton Visual Regression Testing", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("renders default", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcToggleButton label="Test" />
      </div>
    );
    cy.compareSnapshot({
      name: "default",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
  });

  it("renders checked", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcToggleButton label="Test" toggleChecked />
      </div>
    );
    cy.compareSnapshot({
      name: "checked",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
  });

  it("renders disabled", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcToggleButton label="Test" disabled />
        <IcToggleButton label="Test Checked" disabled toggleChecked />
      </div>
    );
    cy.compareSnapshot({
      name: "disabled",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
  });

  it("renders with icon", () => {
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
    cy.compareSnapshot({
      name: "with-icon",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
  });

  it("renders different sizes", () => {
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
    cy.compareSnapshot({
      name: "sizes",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
  });

  it("renders with badge", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcToggleButton label="Test">
          <IcBadge textLabel="1" slot="badge" variant="success" />
        </IcToggleButton>
      </div>
    );
    cy.wait(100).compareSnapshot({
      name: "with-badge",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
  });

  it("renders with appearance set to dark", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcToggleButton label="Test" appearance="dark" />
      </div>
    );
    cy.compareSnapshot({
      name: "appearance-dark",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);

    cy.checkHydrated("ic-toggle-button");
    cy.clickOnButton("ic-toggle-button");

    cy.compareSnapshot({
      name: "appearance-dark-checked",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
  });

  it("renders with appearance set to light", () => {
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
    cy.compareSnapshot({
      name: "appearance-light",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);

    cy.checkHydrated("ic-toggle-button");
    cy.clickOnButton("ic-toggle-button");

    cy.compareSnapshot({
      name: "appearance-light-checked",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
  });

  it("renders full width", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcToggleButton label="Test" fullWidth />
      </div>
    );
    cy.compareSnapshot({
      name: "full-width",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
  });

  it("renders loading", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcToggleButton label="Test" loading />
        <IcToggleButton label="Test" loading toggleChecked />
      </div>
    );
    cy.wait(500).compareSnapshot({
      name: "loading",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.04,
    });
    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
  });

  it("renders icon variant", () => {
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
    cy.compareSnapshot({
      name: "icon-variant",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
  });

  it("renders with icon placement right", () => {
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
    cy.compareSnapshot({
      name: "icon-right",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
    });
    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
  });

  it("renders with icon placement top", () => {
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
    cy.compareSnapshot({
      name: "icon-top",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.04,
    });
    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
  });
});
