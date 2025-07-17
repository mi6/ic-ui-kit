/// <reference types="cypress" />

import React from "react";
import { mount } from "cypress/react";
import { IcActionChip, IcBadge } from "../../components";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";
import { NOT_EXIST } from "../utils/constants";
import {
  HideIconExample,
  ThemeMonochromeExample,
  UserIcon,
} from "./IcActionChipTestData";

const ACTION_CHIP_SELECTOR = "ic-action-chip";

const DEFAULT_TEST_THRESHOLD = 0.013;

describe("IcActionChip visual regression & e2e tests", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render in different sizes", () => {
    mount(
      <>
        <IcActionChip label="Small" size="small" />
        <IcActionChip label="Medium" />
        <IcActionChip label="Large" size="large" />
      </>
    );

    cy.checkHydrated(ACTION_CHIP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/sizes",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.016),
    });
  });

  it("should render as an `outlined` variant", () => {
    mount(
      <>
        <IcActionChip label="Outlined" variant="outlined" />
        <IcActionChip
          label="Non transparent"
          variant="outlined"
          transparentBackground={false}
        />
      </>
    );

    cy.checkHydrated(ACTION_CHIP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/outlined",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
    });
  });

  it("should render each variant as `disabled`", () => {
    mount(
      <>
        <IcActionChip label="Default" disabled />
        <IcActionChip label="Outlined" disabled variant="outlined" />
        <IcActionChip
          label="Non transparent"
          disabled
          variant="outlined"
          transparentBackground={false}
        />
      </>
    );

    cy.checkHydrated(ACTION_CHIP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/disabled",
      testThreshold: setThresholdBasedOnEnv(0),
    });
  });

  it("should not render as disabled if the chip is a link", () => {
    mount(
      <>
        <IcActionChip label="Button" disabled />
        <IcActionChip label="Link" disabled href="#" />
      </>
    );

    cy.checkHydrated(ACTION_CHIP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/disabled-as-link",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render with an icon", () => {
    mount(
      <IcActionChip label="Default">
        <UserIcon />
      </IcActionChip>
    );

    cy.checkHydrated(ACTION_CHIP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/with-icon",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.004),
    });
  });

  it("should dynamically render icons after initial render", () => {
    mount(<HideIconExample />);

    cy.checkHydrated(ACTION_CHIP_SELECTOR);

    cy.findShadowEl(ACTION_CHIP_SELECTOR, ".icon").should(NOT_EXIST);

    cy.wait(5000);

    cy.findShadowEl(ACTION_CHIP_SELECTOR, ".icon").should("exist");

    cy.wait(5000);

    cy.findShadowEl(ACTION_CHIP_SELECTOR, ".icon").should(NOT_EXIST);
  });

  it("should render with a badge", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcActionChip label="Default">
          <IcBadge label="1" slot="badge" position="near" variant="success" />
        </IcActionChip>
      </div>
    );

    cy.checkHydrated(ACTION_CHIP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/with-badge",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.005),
    });
  });

  it("should dynamically render slotted content after initial render", () => {
    mount(<HideIconExample />);

    cy.checkHydrated(ACTION_CHIP_SELECTOR);

    cy.findShadowEl(ACTION_CHIP_SELECTOR, ".icon").should(NOT_EXIST);

    cy.wait(5000);

    cy.findShadowEl(ACTION_CHIP_SELECTOR, ".icon").should("exist");

    cy.wait(5000);

    cy.findShadowEl(ACTION_CHIP_SELECTOR, ".icon").should(NOT_EXIST);
  });

  it("should render as a link and display the 'Open in new window' icon when relevant link props are provided", () => {
    mount(<IcActionChip label="Link" href="#" target="_blank" />);

    cy.checkHydrated(ACTION_CHIP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/as-link",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should not render the 'Open in new window' icon if the element is not rendered as a link", () => {
    mount(<IcActionChip label="Label" target="_blank" />);

    cy.checkHydrated(ACTION_CHIP_SELECTOR);

    cy.findShadowEl(ACTION_CHIP_SELECTOR, ".open-in-new-icon").should(
      NOT_EXIST
    );
  });

  it("should receive focus as a link and a button", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcActionChip label="Button" id="button-chip" />
        <IcActionChip label="Link" href="#" id="link-chip" />
      </div>
    );

    cy.checkHydrated(ACTION_CHIP_SELECTOR);

    cy.findShadowEl("#button-chip", "button").focus();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/focused-button",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.007),
    });

    cy.findShadowEl("#link-chip", "a").focus();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/focused-link",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.007),
    });
  });

  it("should render in dark theme and monochrome", () => {
    mount(<ThemeMonochromeExample />);

    cy.checkHydrated(ACTION_CHIP_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/theme-monochrome",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.061),
    });
  });
});
