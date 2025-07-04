/// <reference types="cypress" />

import React, { ReactElement } from "react";
import { IcTableOfContents } from "../../components";
import { mount } from "cypress/react";
import { setThresholdBasedOnEnv } from "@ukic/react/cypress/utils/helpers";

const TABLE_OF_CONTENTS = "ic-table-of-contents";
const DEFAULT_TEST_THRESHOLD = 0.025;

export const BasicTableOfContents = (): ReactElement => (
  <div
    style={{
      width: "250px",
      padding: "16px",
    }}
  >
    <IcTableOfContents position="right">
      <div>
        <div>
          <div style={{ height: "80vh" }}>
            <h2 id="subtitle">SubTitle</h2>
          </div>
          <div style={{ height: "80vh" }}>
            <h3 id="subtitle">Sub Sub title</h3>
          </div>
        </div>
      </div>
    </IcTableOfContents>
  </div>
);

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
