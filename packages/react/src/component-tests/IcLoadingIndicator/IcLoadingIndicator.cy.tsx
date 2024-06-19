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

const DEFAULT_TEST_THRESHOLD = 0;

describe("IcLoadingIndicator", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render", () => {
    mount(<IndeterminateCircularLoadingIndWithLabel />);

    cy.findShadowEl(
      "ic-loading-indicator",
      "ic-typography#ic-loading-label"
    ).should(HAVE_TEXT, "Loading...");

    cy.checkA11yWithWait();
  });

  it("should render lots of determinate with many sizes", () => {
    mount(
      <DeterminateCircularLoadingIndWithLabelSizeSmallDefaultLarge
        progress={defaultArgs.progress}
        max={defaultArgs.max}
        min={defaultArgs.min}
      />
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "determinate-circulars-with-3-sizes",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.026),
    });
  });

  it("should render determinate with icon", () => {
    mount(
      <DeterminateCircularLoadingIndWithIcon
        progress={defaultArgs.progress}
        max={defaultArgs.max}
        min={defaultArgs.min}
      />
    );

    cy.get("ic-loading-indicator").invoke("prop", "size").should("eq", "icon");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "determinate-circular-with-icon",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
      cypressScreenshotOptions: {
        clip: ICON_CLIP,
      },
    });
  });

  it("should render lots of determinate linear with many sizes", () => {
    mount(
      <DeterminateLinearLoadingIndWithLabelSizeSmallDefaultLargeFull
        progress={defaultArgs.progress}
        max={defaultArgs.max}
        min={defaultArgs.min}
      />
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "determinate-linears-with-3-sizes",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.042),
      cypressScreenshotOptions: {
        clip: MULTI_CLIP,
      },
    });
  });

  it("should render determinate light circular with many sizes", () => {
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

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "determinate-light-circular-with-3-sizes",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.023),
    });
  });

  it("should render determinate light circular icon size", () => {
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

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "determinate-circular-light-with-icon",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
      cypressScreenshotOptions: {
        clip: ICON_CLIP,
      },
    });
  });

  it("should render lots of determinate linear light with many sizes", () => {
    mount(
      <DeterminateLinearLightLoadingIndSizeDefaultLargeFull
        progress={defaultArgs.progress}
        max={defaultArgs.max}
        min={defaultArgs.min}
      />
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "determinate-linears-light-with-3-sizes",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.024),
      cypressScreenshotOptions: {
        clip: MULTI_CLIP,
      },
    });
  });

  it("should render lots of determinate with no label but description", () => {
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

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "determinate-circular-with-desc-no-label",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
      cypressScreenshotOptions: {
        clip: MULTI_CLIP,
      },
    });
  });

  it("should render determinate circular with inner label", () => {
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

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "determinate-circular-with-inner-label",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.025),
      cypressScreenshotOptions: {
        clip: INNER_LABEL_CLIP,
      },
    });
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
