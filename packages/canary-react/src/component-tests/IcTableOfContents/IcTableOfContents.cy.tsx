/// <reference types="cypress" />

import { mount } from "cypress/react";
import { setThresholdBasedOnEnv } from "@ukic/react/cypress/utils/helpers";
import { BasicTableOfContents } from "./IcTableOfContentsTestData";
import React from "react";

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
      name: "default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.007),
    });
  });
});
