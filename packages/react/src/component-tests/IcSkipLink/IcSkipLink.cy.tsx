/// <reference types="cypress" />

import { mount } from "cypress/react";
import React from "react";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";
import {
  IcButton,
  IcSkipLink,
  IcTopNavigation,
  IcTypography,
} from "../../components";
import { SlottedSVG } from "../../react-component-lib/slottedSVG";
import { HAVE_FOCUS } from "../utils/constants";

const SKIP_LINK_SELECTOR = "ic-skip-link";
const LINK_SELECTOR = "ic-link";
const DEFAULT_TEST_THRESHOLD = 0.01;

describe("IcSkipLink e2e, visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render IcSkipLink", () => {
    mount(
      <>
        <IcSkipLink target="page-content" />
        <a id="page-content" tabIndex={-1}>
          {" "}
        </a>
      </>
    );

    cy.checkHydrated(SKIP_LINK_SELECTOR);

    cy.findShadowEl(SKIP_LINK_SELECTOR, LINK_SELECTOR)
      .shadow()
      .find("a")
      .focus();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.006),
    });
  });

  it("should render IcSkipLink with a custom label", () => {
    mount(
      <>
        <IcSkipLink target="page-content" label="Custom skip label" />
        <a id="page-content" tabIndex={-1}>
          {" "}
        </a>
      </>
    );

    cy.checkHydrated(SKIP_LINK_SELECTOR);

    cy.findShadowEl(SKIP_LINK_SELECTOR, LINK_SELECTOR)
      .shadow()
      .find("a")
      .focus();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/custom-label",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.005),
    });
  });

  it("should render IcSkipLink with a transparent background", () => {
    mount(
      <div
        style={{
          backgroundColor: "var(--ic-architectural-100)",
          paddingBottom: "100px",
        }}
      >
        <IcSkipLink target="page-content" transparentBackground />
        <a id="page-content" tabIndex={-1}>
          {" "}
        </a>
      </div>
    );

    cy.checkHydrated(SKIP_LINK_SELECTOR);

    cy.findShadowEl(SKIP_LINK_SELECTOR, LINK_SELECTOR)
      .shadow()
      .find("a")
      .focus();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/transparent-background",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.003),
    });
  });

  it("should render IcSkipLink at the full width of the page", () => {
    mount(
      <>
        <IcSkipLink target="page-content" fullWidth />
        <a id="page-content" tabIndex={-1}>
          {" "}
        </a>
      </>
    );

    cy.checkHydrated(SKIP_LINK_SELECTOR);

    cy.findShadowEl(SKIP_LINK_SELECTOR, LINK_SELECTOR)
      .shadow()
      .find("a")
      .focus();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/full-width",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.006),
    });
  });

  it("should render IcSkipLink inline with other page content", () => {
    mount(
      <>
        <IcTopNavigation app-title="Application Name">
          <SlottedSVG
            slot="app-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
          </SlottedSVG>
        </IcTopNavigation>
        <IcSkipLink
          target="page-content"
          inline
          style={{ marginLeft: "var(--ic-space-xs)" }}
        />
        <a id="page-content" tabIndex={-1}>
          {" "}
        </a>
      </>
    );

    cy.checkHydrated(SKIP_LINK_SELECTOR);

    cy.findShadowEl(SKIP_LINK_SELECTOR, LINK_SELECTOR)
      .shadow()
      .find("a")
      .focus();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/inline",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
    });
  });

  it("should render IcSkipLink in dark theme", () => {
    mount(
      <>
        <IcSkipLink target="page-content" theme="dark" />
        <a id="page-content" tabIndex={-1}>
          {" "}
        </a>
      </>
    );

    cy.checkHydrated(SKIP_LINK_SELECTOR);

    cy.findShadowEl(SKIP_LINK_SELECTOR, LINK_SELECTOR)
      .shadow()
      .find("a")
      .focus();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/dark-theme",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render IcSkipLink in monochrome", () => {
    mount(
      <>
        <IcSkipLink target="page-content" monochrome />
        <a id="page-content" tabIndex={-1}>
          {" "}
        </a>
      </>
    );

    cy.checkHydrated(SKIP_LINK_SELECTOR);

    cy.findShadowEl(SKIP_LINK_SELECTOR, LINK_SELECTOR)
      .shadow()
      .find("a")
      .focus();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/monochrome",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.012),
    });
  });

  it("should move focus to the target element when the link is clicked", () => {
    mount(
      <>
        <IcSkipLink target="page-content" />
        <main id="page-content">Target element</main>
        <IcButton>Should receive next focus</IcButton>
      </>
    );

    cy.checkHydrated(SKIP_LINK_SELECTOR);

    cy.findShadowEl(SKIP_LINK_SELECTOR, LINK_SELECTOR)
      .shadow()
      .find("a")
      .focus()
      .click();

    cy.realPress("Tab");

    cy.get("ic-button").should(HAVE_FOCUS);
  });
});

describe("IcSkipLink visual regression high-contrast", () => {
  before(() => {
    cy.enableForcedColors();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  after(() => {
    cy.disableForcedColors();
  });

  it("should render IcSkipLink with a custom label", () => {
    mount(
      <>
        <IcSkipLink target="page-content" label="Custom skip label" />
        <a id="page-content" tabIndex={-1}>
          {" "}
        </a>
      </>
    );

    cy.checkHydrated(SKIP_LINK_SELECTOR);

    cy.findShadowEl(SKIP_LINK_SELECTOR, LINK_SELECTOR)
      .shadow()
      .find("a")
      .focus();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/custom-label-hc",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.013),
    });
  });
});
