/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import { mount } from "cypress/react";
import React from "react";
import {
  ComponentsWithInheritThemeProp,
  SwitchBrand,
  ThemeWithComponentThemeProps,
  ThemeWithComponentWithinSeparateIcTheme,
} from "./IcThemeTestData";
import {
  HAVE_ATTR,
  HAVE_BEEN_CALLED_ONCE,
  HAVE_BEEN_CALLED_WITH,
} from "../utils/constants";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const THEME_SELECTOR = "ic-theme";
const DEFAULT_TEST_THRESHOLD = 0.042;

describe("IcTheme end-to-end and visual regression tests", () => {
  beforeEach(() => {
    cy.injectAxe();
    cy.viewport(1440, 900);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render in light mode when IcTheme theme is set to light with components with theme prop set to dark rendered in dark mode", () => {
    mount(
      <ThemeWithComponentThemeProps
        color={"rgba(27, 60, 121, 1)"}
        theme={"light"}
        backgroundColor="white"
      />
    );

    cy.checkHydrated(THEME_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/ic-theme-light-with-dark-mode-component-overrides",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.031),
    });
  });

  it("should render in light mode when IcTheme theme is set to light with components within another IcTheme component with theme set to dark rendered in dark mode", () => {
    mount(
      <ThemeWithComponentWithinSeparateIcTheme
        color={"rgba(27, 60, 121, 1)"}
        theme={"light"}
        backgroundColor="white"
      />
    );

    cy.checkHydrated(THEME_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/ic-theme-light-with-components-within-ic-theme",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.03),
    });
  });

  it("should render according to dark mode system settings when IcTheme theme is set to system", () => {
    cy.wrap(
      Cypress.automation("remote:debugger:protocol", {
        command: "Emulation.setEmulatedMedia",
        params: {
          features: [
            {
              name: "prefers-color-scheme",
              value: "dark",
            },
          ],
        },
      })
    );

    mount(
      <ThemeWithComponentThemeProps
        color={"rgba(27, 60, 121, 1)"}
        theme={"system"}
        backgroundColor="#17191C"
      />
    );

    cy.checkHydrated(THEME_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/ic-theme-system-dark",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.033),
    });
  });

  it("should render according to light mode system settings when IcTheme theme is set to system", () => {
    cy.wrap(
      Cypress.automation("remote:debugger:protocol", {
        command: "Emulation.setEmulatedMedia",
        params: {
          features: [
            {
              name: "prefers-color-scheme",
              value: "light",
            },
          ],
        },
      })
    );

    mount(
      <ThemeWithComponentThemeProps
        color={"rgba(27, 60, 121, 1)"}
        theme={"system"}
        backgroundColor="white"
      />
    );

    cy.checkHydrated(THEME_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/ic-theme-system-light",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.031),
    });
  });

  it("should render components with IcTheme colour when theme prop is set to inherit - dark theme", () => {
    mount(
      <ComponentsWithInheritThemeProp
        color={"rgba(27, 60, 121, 1)"}
        theme={"dark"}
        backgroundColor="#17191C"
      />
    );

    cy.checkHydrated(THEME_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/ic-theme-inherit-dark",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.005),
    });
  });

  it("should render components with IcTheme colour when theme prop is set to inherit - light theme", () => {
    mount(
      <ComponentsWithInheritThemeProp
        color={"rgba(27, 60, 121, 1)"}
        theme={"light"}
        backgroundColor="white"
      />
    );

    cy.checkHydrated(THEME_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/ic-theme-inherit-light",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should switch brand colour", () => {
    mount(<SwitchBrand />);

    cy.checkHydrated(THEME_SELECTOR);
    cy.spy(window.console, "log").as("spyWinConsoleLog");
    cy.get(THEME_SELECTOR).invoke(
      "on",
      "brandChange",
      cy.stub().as("brandChange")
    );

    cy.get(THEME_SELECTOR).should(
      HAVE_ATTR,
      "brand-color",
      "rgb(255, 201, 60)"
    );

    cy.compareSnapshot({
      name: "/sunrise-brand",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.012),
    });

    cy.get("ic-button").contains("Default theme").click();
    cy.get(THEME_SELECTOR).should(HAVE_ATTR, "brand-color", "rgb(27, 60, 121)");
    cy.get("@brandChange").should(HAVE_BEEN_CALLED_ONCE);
    cy.get("@spyWinConsoleLog").should(HAVE_BEEN_CALLED_WITH, {
      mode: "light",
      color: {
        r: 27,
        g: 60,
        b: 121,
        a: 1,
      },
    });
  });
});
