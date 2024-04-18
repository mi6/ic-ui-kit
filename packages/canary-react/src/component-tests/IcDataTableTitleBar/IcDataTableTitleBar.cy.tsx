/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress/react";
import { IcDataTableTitleBar } from "../../components";
import { setThresholdBasedOnEnv } from "@ukic/react/cypress/utils/helpers";
import { IcLink, IcTypography } from "@ukic/react";
import { HAVE_LENGTH } from "@ukic/react/src/component-tests/utils/constants";

const TITLE_BAR = "ic-data-table-title-bar";
const DEFAULT_THRESHOLD = 0.04;

describe("IcDataTableTitleBar", () => {
  beforeEach(() => {
    cy.injectAxe();
    cy.viewport(1024, 768);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("renders", () => {
    mount(<IcDataTableTitleBar />);

    cy.checkHydrated(TITLE_BAR);

    cy.checkA11yWithWait();

    cy.compareSnapshot({
      name: "default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD),
    });

    cy.findShadowEl(TITLE_BAR, ".density-input").click();

    cy.checkA11yWithWait();

    cy.findShadowEl(TITLE_BAR, ".density-input")
      .shadow()
      .find("ic-menu li")
      .should(HAVE_LENGTH, 3);
  });

  it('should hide density options when "hideDensityOptions" is true', () => {
    mount(<IcDataTableTitleBar hideDensitySelect />);

    cy.checkHydrated(TITLE_BAR);

    cy.findShadowEl(TITLE_BAR, ".density-input").should("not.exist");
  });

  it("should render slotted header and description as links", () => {
    mount(
      <IcDataTableTitleBar>
        <IcTypography slot="heading" variant="h3">
          <IcLink href="#">Title</IcLink>
        </IcTypography>
        <div slot="description">
          This is some text and <IcLink href="#">this is an inline link</IcLink>{" "}
          within the text.
        </div>
      </IcDataTableTitleBar>
    );

    cy.checkHydrated(TITLE_BAR);

    cy.checkA11yWithWait();

    cy.compareSnapshot({
      name: "slotted-header-and-description",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD),
    });
  });
});
