/// <reference types="Cypress" />

import { mount } from "cypress/react";
import React from "react";
import { HAVE_TEXT } from "../utils/constants";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";
import {
  IndeterminateCircularLoadingIndWithLabel,
  DeterminateCircularLoadingIndWithLabelSizeSmallDefaultLarge,
  DeterminateCircularLoadingIndWithIcon,
  DeterminateLinearLoadingIndWithLabelSizeSmallDefaultLargeFull,
  DeterminateCircularLightLoadingIndSizeSmallDefaultLarge,
  DeterminateCircularLightLoadingIndIconNoLabel,
  DeterminateLinearLightLoadingIndSizeDefaultLargeFull,
  DeterminateLoadingIndWithNameNoLabel,
  DeterminateCircularLoadingIndWithInnerLabel,
  IndeterminateCircularLoadingIndE2EWithDuration,
} from "./IcLoadingIndicatorTestData";

const ICON_CLIP = { x: 0, y: 0, width: 50, height: 50 };
const MULTI_CLIP = { x: 0, y: 0, width: 500, height: 350 };
const INNER_LABEL_CLIP = { x: 200, y: 0, width: 100, height: 100 };

const defaultArgs = {
  progress: 30,
  min: 0,
  max: 100,
};

describe("IcLoadingIndicator", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("renders", () => {
    mount(<IndeterminateCircularLoadingIndWithLabel />);
    cy.findShadowEl(
      "ic-loading-indicator",
      "ic-typography#ic-loading-label"
    ).should(HAVE_TEXT, "Loading...");

    cy.checkA11yWithWait();
  });

  it("renders lots of determinate with many sizes", () => {
    mount(
      <DeterminateCircularLoadingIndWithLabelSizeSmallDefaultLarge
        progress={defaultArgs.progress}
        max={defaultArgs.max}
        min={defaultArgs.min}
      />
    );

    cy.compareSnapshot({
      name: "determinateCircularsWith3Sizes",
      testThreshold: setThresholdBasedOnEnv(0.03),
    });
    cy.checkA11yWithWait();
  });

  it("renders determinate with icon", () => {
    mount(
      <DeterminateCircularLoadingIndWithIcon
        progress={defaultArgs.progress}
        max={defaultArgs.max}
        min={defaultArgs.min}
      />
    );

    cy.get("ic-loading-indicator").invoke("prop", "size").should("eq", "icon");

    cy.compareSnapshot({
      name: "determinateCircularWithIcon",
      testThreshold: setThresholdBasedOnEnv(0.03),
      cypressScreenshotOptions: {
        clip: ICON_CLIP,
      },
    });
    cy.checkA11yWithWait();
  });

  it("renders lots of determinate linear with many sizes", () => {
    mount(
      <DeterminateLinearLoadingIndWithLabelSizeSmallDefaultLargeFull
        progress={defaultArgs.progress}
        max={defaultArgs.max}
        min={defaultArgs.min}
      />
    );

    cy.compareSnapshot({
      name: "determinateLinearsWith3Sizes",
      testThreshold: setThresholdBasedOnEnv(0.04),
      cypressScreenshotOptions: {
        clip: MULTI_CLIP,
      },
    });
    cy.checkA11yWithWait();
  });

  it("renders determinate light circular with many sizes", () => {
    mount(
      <DeterminateCircularLightLoadingIndSizeSmallDefaultLarge
        progress={defaultArgs.progress}
        max={defaultArgs.max}
        min={defaultArgs.min}
      />
    );
    cy.get("ic-loading-indicator")
      .invoke("prop", "appearance")
      .should("eq", "light");

    cy.compareSnapshot({
      name: "determinateLightCircularWith3Sizes",
      testThreshold: setThresholdBasedOnEnv(0.03),
    });

    cy.checkA11yWithWait();
  });

  it("renders determinate light circular icon size", () => {
    mount(
      <DeterminateCircularLightLoadingIndIconNoLabel
        progress={defaultArgs.progress}
        max={defaultArgs.max}
        min={defaultArgs.min}
      />
    );
    cy.get("ic-loading-indicator")
      .invoke("prop", "appearance")
      .should("eq", "light");
    cy.get("ic-loading-indicator").invoke("prop", "size").should("eq", "icon");

    cy.compareSnapshot({
      name: "determinateCircularLightWithIcon",
      testThreshold: setThresholdBasedOnEnv(0.03),
      cypressScreenshotOptions: {
        clip: ICON_CLIP,
      },
    });
    cy.checkA11yWithWait();
  });

  it("renders lots of determinate linear light with many sizes", () => {
    mount(
      <DeterminateLinearLightLoadingIndSizeDefaultLargeFull
        progress={defaultArgs.progress}
        max={defaultArgs.max}
        min={defaultArgs.min}
      />
    );

    cy.compareSnapshot({
      name: "determinateLinearsLightWith3Sizes",
      testThreshold: setThresholdBasedOnEnv(0.03),
      cypressScreenshotOptions: {
        clip: MULTI_CLIP,
      },
    });
    cy.checkA11yWithWait();
  });

  it("renders lots of determinate with no label but description", () => {
    mount(
      <DeterminateLoadingIndWithNameNoLabel
        progress={defaultArgs.progress}
        max={defaultArgs.max}
        min={defaultArgs.min}
      />
    );
    cy.get("ic-loading-indicator")
      .invoke("prop", "description")
      .should("eq", "Loading");

    cy.compareSnapshot({
      name: "determinateCircularWithDescNoLabel",
      testThreshold: setThresholdBasedOnEnv(0.03),
      cypressScreenshotOptions: {
        clip: MULTI_CLIP,
      },
    });
    cy.checkA11yWithWait();
  });

  it("renders determinate circular with inner label", () => {
    mount(
      <DeterminateCircularLoadingIndWithInnerLabel
        progress={defaultArgs.progress}
        max={defaultArgs.max}
        min={defaultArgs.min}
      />
    );
    cy.get("ic-loading-indicator")
      .invoke("prop", "inner-label")
      .should("eq", "3");
    cy.get("ic-loading-indicator").invoke("prop", "min").should("eq", 0);

    cy.compareSnapshot({
      name: "determinateCircularWithInnerLabel",
      testThreshold: setThresholdBasedOnEnv(0.03),
      cypressScreenshotOptions: {
        clip: INNER_LABEL_CLIP,
      },
    });
    cy.checkA11yWithWait();
  });

  it("should change label after specified amount of time", () => {
    mount(<IndeterminateCircularLoadingIndE2EWithDuration />);
    cy.findShadowEl("ic-loading-indicator", "ic-typography#ic-loading-label")
      .find("p")
      .should(HAVE_TEXT, "First label");
    cy.wait(250);
    cy.findShadowEl("ic-loading-indicator", "ic-typography#ic-loading-label")
      .find("p")
      .should(HAVE_TEXT, "Second label");
  });
});
