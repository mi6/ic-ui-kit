/// <reference types="cypress" />

import { mount } from "cypress/react";
import { setThresholdBasedOnEnv } from "@ukic/react/cypress/utils/helpers";
import {
  BasicTableOfContents,
  DarkThemeTableOfContents,
  MonochromeTableOfContents,
  NestedTableOfContents,
} from "./IcTableOfContentsTestData";
import React from "react";
import {
  EQUAL,
  NOT_EQUAL,
} from "@ukic/react/src/component-tests/utils/constants";

const TABLE_OF_CONTENTS = "ic-table-of-contents";
const DEFAULT_TEST_THRESHOLD = 0.025;

describe("IcTableOfContents", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render", () => {
    mount(<BasicTableOfContents />);

    cy.checkHydrated(TABLE_OF_CONTENTS);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.007),
    });
  });

  it("should scroll to associated heading when table-of-contents-item is clicked", () => {
    mount(<BasicTableOfContents />);

    cy.checkHydrated(TABLE_OF_CONTENTS);

    cy.window().its("scrollY").should(EQUAL, 0);

    cy.findShadowEl(TABLE_OF_CONTENTS, "#toc_subtitle").click();

    cy.on("url:changed", (newUrl) => {
      expect(newUrl).to.contain("#subtitle");
      cy.window().its("scrollY").should(NOT_EQUAL, 0);
    });
  });

  it("should render nested elements", () => {
    mount(<NestedTableOfContents />);

    cy.checkHydrated(TABLE_OF_CONTENTS);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/nested",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.007),
    });
  });

  it("should render monochrome", () => {
    mount(<MonochromeTableOfContents />);

    cy.checkHydrated(TABLE_OF_CONTENTS);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/monochrome",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.007),
    });
  });

  it("should render when using dark theme", () => {
    mount(<DarkThemeTableOfContents />);

    cy.checkHydrated(TABLE_OF_CONTENTS);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/dark-theme",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.007),
    });
  });
});

describe("IcTableOfContents visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  beforeEach(() => {
    cy.viewport(1024, 768);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  after(() => {
    cy.disableForcedColors();
  });

  it("should render in high contrast mode", () => {
    mount(<BasicTableOfContents />);

    cy.wait;

    cy.checkHydrated(TABLE_OF_CONTENTS);

    cy.compareSnapshot({
      name: "/default-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.007),
    });
  });

  it("should render nested elements in high contrast mode", () => {
    mount(<NestedTableOfContents />);

    cy.wait;

    cy.checkHydrated(TABLE_OF_CONTENTS);

    cy.compareSnapshot({
      name: "/nested-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.007),
    });
  });
});
