/// <reference types="cypress" />

import React, { ReactElement } from "react";
import { IcTableOfContents } from "../../components";
import { mount } from "cypress/react";
import { setThresholdBasedOnEnv } from "@ukic/react/cypress/utils/helpers";
import { HAVE_FOCUS } from "@ukic/react/src/component-tests/utils/constants";

const TABLE_OF_CONTENTS = "ic-table-of-contents";
const TABLE_OF_CONTENTS_ITEM = "ic-table-of-contents-item";
const TREE_ITEM_CONTENT = ".table-of-contents-item";
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
            <h2>SubTitle</h2>
          </div>
          <div style={{ height: "80vh" }}>
            <h3>Sub Sub title</h3>
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

  it("when selecting option should move to that location", () => {
    mount(<BasicTableOfContents />);

    cy.checkHydrated(TABLE_OF_CONTENTS);

    cy.findShadowEl(TABLE_OF_CONTENTS_ITEM, TREE_ITEM_CONTENT)
      .eq(1)
      .focus()
      .realPress("ArrowDown");

    cy.get(TABLE_OF_CONTENTS_ITEM).eq(2).should(HAVE_FOCUS);
  });
});
