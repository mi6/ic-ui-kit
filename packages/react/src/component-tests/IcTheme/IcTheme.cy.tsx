/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import { mount } from "cypress/react";
import React from "react";
import {
  ComponentsWithInheritThemeProp,
  SwitchTheme,
  ThemeWithComponentThemeProps,
  ThemeWithComponentWithinSeparateIcTheme,
} from "./IcThemeTestData";
import {
  HAVE_ATTR,
  HAVE_BEEN_CALLED_ONCE,
  HAVE_BEEN_CALLED_WITH,
} from "../utils/constants";

const THEME_SELECTOR = "ic-theme";

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
      name: "ic-theme-light-with-dark-mode-component-overrides",
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
      name: "ic-theme-light-with-components-within-ic-theme",
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
        backgroundColor="black"
      />
    );

    cy.checkHydrated(THEME_SELECTOR);

    //Color contrast violation for button on alert in dark mode
    //cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "ic-theme-system-dark",
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
      name: "ic-theme-system-light",
    });
  });

  it("should render components with IcTheme colour when theme prop is set to inherit - dark theme", () => {
    mount(
      <ComponentsWithInheritThemeProp
        color={"rgba(27, 60, 121, 1)"}
        theme={"dark"}
        backgroundColor="black"
      />
    );

    cy.checkHydrated(THEME_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "ic-theme-inherit-dark",
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
      name: "ic-theme-inherit-light",
    });
  });

  it("should switch theme colour", () => {
    mount(<SwitchTheme />);

    cy.checkHydrated(THEME_SELECTOR);
    cy.spy(window.console, "log").as("spyWinConsoleLog");
    cy.get(THEME_SELECTOR).invoke(
      "on",
      "themeChange",
      cy.stub().as("themeChange")
    );

    cy.get(THEME_SELECTOR).should(HAVE_ATTR, "color", "rgb(255, 201, 60)");

    cy.compareSnapshot({
      name: "sunrise-theme",
    });

    cy.get("ic-button").contains("Default theme").click();
    cy.get(THEME_SELECTOR).should(HAVE_ATTR, "color", "rgb(27, 60, 121)");
    cy.get("@themeChange").should(HAVE_BEEN_CALLED_ONCE);
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
