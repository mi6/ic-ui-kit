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
  DarkModeColours,
  LightMonochrome,
} from "./IcLoadingIndicatorTestData";

const ICON_CLIP = { x: 0, y: 0, width: 50, height: 50 };
const MULTI_CLIP = { x: 0, y: 0, width: 500, height: 350 };
const INNER_LABEL_CLIP = { x: 200, y: 0, width: 100, height: 100 };

const defaultArgs = {
  progress: 30,
  min: 0,
  max: 100,
};

const LOADING_INDICATOR_SELECTOR = "ic-loading-indicator";
const LOADING_LABEL_SELECTOR = "ic-typography#ic-loading-label";
const DEFAULT_TEST_THRESHOLD = 0;

describe("IcLoadingIndicator end-to-end, visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render indeterminate circular loading indicator", () => {
    mount(<IndeterminateCircularLoadingIndWithLabel />);

    cy.findShadowEl("ic-loading-indicator", LOADING_LABEL_SELECTOR).should(
      HAVE_TEXT,
      "Loading..."
    );

    cy.checkA11yWithWait();
  });

  it("should render determinate circular loading indicators with different sizes", () => {
    mount(
      <DeterminateCircularLoadingIndWithLabelSizeSmallDefaultLarge
        progress={defaultArgs.progress}
        max={defaultArgs.max}
        min={defaultArgs.min}
      />
    );

    cy.checkHydrated(LOADING_INDICATOR_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "determinate-circulars-with-3-sizes",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.026),
    });
  });

  it("should render determinate circular loading indicator icon variant", () => {
    mount(
      <DeterminateCircularLoadingIndWithIcon
        progress={defaultArgs.progress}
        max={defaultArgs.max}
        min={defaultArgs.min}
      />
    );

    cy.checkHydrated(LOADING_INDICATOR_SELECTOR);
    cy.get(LOADING_INDICATOR_SELECTOR)
      .invoke("prop", "size")
      .should("eq", "icon");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "determinate-circular-with-icon",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
      cypressScreenshotOptions: {
        clip: ICON_CLIP,
      },
    });
  });

  it("should render determinate linear loading indicators with different sizes", () => {
    mount(
      <DeterminateLinearLoadingIndWithLabelSizeSmallDefaultLargeFull
        progress={defaultArgs.progress}
        max={defaultArgs.max}
        min={defaultArgs.min}
      />
    );

    cy.checkHydrated(LOADING_INDICATOR_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "determinate-linears-with-3-sizes",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.042),
      cypressScreenshotOptions: {
        clip: MULTI_CLIP,
      },
    });
  });

  it("should render determinate light circular loading indicators with different sizes", () => {
    mount(
      <DeterminateCircularLightLoadingIndSizeSmallDefaultLarge
        progress={defaultArgs.progress}
        max={defaultArgs.max}
        min={defaultArgs.min}
      />
    );

    cy.checkHydrated(LOADING_INDICATOR_SELECTOR);
    cy.get(LOADING_INDICATOR_SELECTOR)
      .invoke("prop", "theme")
      .should("eq", "dark");

    cy.get(LOADING_INDICATOR_SELECTOR)
      .invoke("prop", "monochrome")
      .should("eq", true);

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

    cy.checkHydrated(LOADING_INDICATOR_SELECTOR);
    cy.get(LOADING_INDICATOR_SELECTOR)
      .invoke("prop", "theme")
      .should("eq", "dark");

    cy.get(LOADING_INDICATOR_SELECTOR)
      .invoke("prop", "monochrome")
      .should("eq", true);

    cy.get(LOADING_INDICATOR_SELECTOR)
      .invoke("prop", "size")
      .should("eq", "icon");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "determinate-circular-light-with-icon",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
      cypressScreenshotOptions: {
        clip: ICON_CLIP,
      },
    });
  });

  it("should render dark mode colours", () => {
    mount(<DarkModeColours />);

    cy.checkHydrated(LOADING_INDICATOR_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "dark-mode-colours",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render light monochrome colours", () => {
    mount(<LightMonochrome />);

    cy.checkHydrated(LOADING_INDICATOR_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "light-monochrome-colours",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render determinate linear light loading indicators with different sizes", () => {
    mount(
      <DeterminateLinearLightLoadingIndSizeDefaultLargeFull
        progress={defaultArgs.progress}
        max={defaultArgs.max}
        min={defaultArgs.min}
      />
    );

    cy.checkHydrated(LOADING_INDICATOR_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "determinate-linears-light-with-3-sizes",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.024),
      cypressScreenshotOptions: {
        clip: MULTI_CLIP,
      },
    });
  });

  it("should render determinate loading indicators with no label but description", () => {
    mount(
      <DeterminateLoadingIndWithNameNoLabel
        progress={defaultArgs.progress}
        max={defaultArgs.max}
        min={defaultArgs.min}
      />
    );

    cy.checkHydrated(LOADING_INDICATOR_SELECTOR);
    cy.get(LOADING_INDICATOR_SELECTOR)
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

  it("should render determinate circular loading indicator with inner label", () => {
    mount(
      <DeterminateCircularLoadingIndWithInnerLabel
        progress={defaultArgs.progress}
        max={defaultArgs.max}
        min={defaultArgs.min}
      />
    );

    cy.checkHydrated(LOADING_INDICATOR_SELECTOR);
    cy.get(LOADING_INDICATOR_SELECTOR)
      .invoke("prop", "inner-label")
      .should("eq", "3");
    cy.get(LOADING_INDICATOR_SELECTOR).invoke("prop", "min").should("eq", 0);

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

    cy.findShadowEl(LOADING_INDICATOR_SELECTOR, LOADING_LABEL_SELECTOR)
      .find("p")
      .should(HAVE_TEXT, "First label");
    cy.wait(250);
    cy.findShadowEl(LOADING_INDICATOR_SELECTOR, LOADING_LABEL_SELECTOR)
      .find("p")
      .should(HAVE_TEXT, "Second label");
  });
});

describe("IcLoadingIndicator visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  after(() => {
    cy.disableForcedColors();
  });

  it("should render determinate circular loading indicators with different sizes in high contrast mode", () => {
    mount(
      <DeterminateCircularLoadingIndWithLabelSizeSmallDefaultLarge
        progress={defaultArgs.progress}
        max={defaultArgs.max}
        min={defaultArgs.min}
      />
    );

    cy.checkHydrated(LOADING_INDICATOR_SELECTOR);

    cy.compareSnapshot({
      name: "determinate-circulars-with-3-sizes-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.026),
    });
  });

  it("should render determinate circular loading indicator icon variant in high contrast mode", () => {
    mount(
      <DeterminateCircularLoadingIndWithIcon
        progress={defaultArgs.progress}
        max={defaultArgs.max}
        min={defaultArgs.min}
      />
    );

    cy.checkHydrated(LOADING_INDICATOR_SELECTOR);

    cy.compareSnapshot({
      name: "determinate-circular-with-icon-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
      cypressScreenshotOptions: {
        clip: ICON_CLIP,
      },
    });
  });

  it("should render determinate linear loading indicators with different sizes in high contrast mode", () => {
    mount(
      <DeterminateLinearLoadingIndWithLabelSizeSmallDefaultLargeFull
        progress={defaultArgs.progress}
        max={defaultArgs.max}
        min={defaultArgs.min}
      />
    );

    cy.checkHydrated(LOADING_INDICATOR_SELECTOR);

    cy.compareSnapshot({
      name: "determinate-linears-with-3-sizes-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.042),
      cypressScreenshotOptions: {
        clip: MULTI_CLIP,
      },
    });
  });

  it("should render determinate light circular loading indicators with different sizes in high contrast mode", () => {
    mount(
      <DeterminateCircularLightLoadingIndSizeSmallDefaultLarge
        progress={defaultArgs.progress}
        max={defaultArgs.max}
        min={defaultArgs.min}
      />
    );

    cy.checkHydrated(LOADING_INDICATOR_SELECTOR);

    cy.compareSnapshot({
      name: "determinate-light-circular-with-3-sizes-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.025),
    });
  });

  it("should render determinate circular loading indicator with inner label in high contrast mode", () => {
    mount(
      <DeterminateCircularLoadingIndWithInnerLabel
        progress={defaultArgs.progress}
        max={defaultArgs.max}
        min={defaultArgs.min}
      />
    );

    cy.checkHydrated(LOADING_INDICATOR_SELECTOR);

    cy.compareSnapshot({
      name: "determinate-circular-with-inner-label-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.031),
      cypressScreenshotOptions: {
        clip: INNER_LABEL_CLIP,
      },
    });
  });
});
