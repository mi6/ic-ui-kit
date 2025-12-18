import React from "react";
import { mount } from "cypress/react";
import {
  DefaultTimeSelector,
  DarkThemeTimeSelector,
  ValueTimeSelector,
  DateObjectTimeSelector,
  ZuluTimeSelector,
  SmallTimeSelector,
  LargeTimeSelector,
  HHMMTimeSelector,
  MinTimeSelector,
  MaxTimeSelector,
  DisableTimesTimeSelector,
  ClearingValueTimeSelector,
} from "./IcTimeSelectorTestData";
import { setThresholdBasedOnEnv } from "@ukic/react/cypress/utils/helpers";
import {
  HAVE_FOCUS,
  HAVE_LENGTH,
  NOT_HAVE_FOCUS,
} from "@ukic/react/src/component-tests/utils/constants";

const TIME_SELECTOR = "ic-time-selector";
const SELECTED_ITEM = ".ic-time-selector-item.selected";
const COLUMN = ".ic-time-selector-column";
const CLEAR_BTN = ".ic-time-selector-clear-btn";

const DEFAULT_TEST_THRESHOLD = 0.009;

describe("IcTimeSelector e2e tests", () => {
  it("should clear the input value when clicking the clear button", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <ClearingValueTimeSelector />
      </div>
    );

    cy.checkHydrated(TIME_SELECTOR);

    cy.findShadowEl(TIME_SELECTOR, SELECTED_ITEM).should(HAVE_LENGTH, 3);

    cy.findShadowEl(TIME_SELECTOR, CLEAR_BTN).click();

    cy.findShadowEl(TIME_SELECTOR, SELECTED_ITEM).should(HAVE_LENGTH, 0);
  });

  it("should clear the input value when setting value to null", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <ClearingValueTimeSelector />
      </div>
    );

    cy.checkHydrated(TIME_SELECTOR);

    cy.findShadowEl(TIME_SELECTOR, SELECTED_ITEM).should(HAVE_LENGTH, 3);

    cy.get('ic-button[id="update-null"]').click();

    cy.findShadowEl(TIME_SELECTOR, SELECTED_ITEM).should(HAVE_LENGTH, 0);
  });

  it("should clear the input value when setting value to an empty string", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <ClearingValueTimeSelector />
      </div>
    );

    cy.checkHydrated(TIME_SELECTOR);

    cy.findShadowEl(TIME_SELECTOR, SELECTED_ITEM).should(HAVE_LENGTH, 3);

    cy.get('ic-button[id="update-empty"]').click();

    cy.findShadowEl(TIME_SELECTOR, SELECTED_ITEM).should(HAVE_LENGTH, 0);
  });

  it("should clear the input value when setting value to undefined", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <ClearingValueTimeSelector />
      </div>
    );

    cy.checkHydrated(TIME_SELECTOR);

    cy.findShadowEl(TIME_SELECTOR, SELECTED_ITEM).should(HAVE_LENGTH, 3);

    cy.get('ic-button[id="update-undefined"]').click();

    cy.findShadowEl(TIME_SELECTOR, SELECTED_ITEM).should(HAVE_LENGTH, 0);
  });

  it("should select the hour value if arrow down is pressed", () => {
    mount(<DefaultTimeSelector />);

    cy.checkHydrated(TIME_SELECTOR);

    cy.findShadowEl(TIME_SELECTOR, SELECTED_ITEM).should(HAVE_LENGTH, 0);

    cy.findShadowEl(TIME_SELECTOR, COLUMN).eq(0).focus().realPress("ArrowDown");

    cy.findShadowEl(TIME_SELECTOR, SELECTED_ITEM)
      .should(HAVE_LENGTH, 1)
      .contains("01");
  });

  it("should select the hour value if tab is pressed", () => {
    mount(<DefaultTimeSelector />);

    cy.checkHydrated(TIME_SELECTOR);

    cy.findShadowEl(TIME_SELECTOR, SELECTED_ITEM).should(HAVE_LENGTH, 0);

    cy.findShadowEl(TIME_SELECTOR, COLUMN).eq(0).focus().realPress("Tab");

    cy.findShadowEl(TIME_SELECTOR, SELECTED_ITEM)
      .should(HAVE_LENGTH, 1)
      .contains("00");
  });

  it("should select the hour value if arrow right is pressed", () => {
    mount(<DefaultTimeSelector />);

    cy.checkHydrated(TIME_SELECTOR);

    cy.findShadowEl(TIME_SELECTOR, SELECTED_ITEM).should(HAVE_LENGTH, 0);

    cy.findShadowEl(TIME_SELECTOR, COLUMN)
      .eq(0)
      .focus()
      .realPress("ArrowRight");

    cy.findShadowEl(TIME_SELECTOR, SELECTED_ITEM)
      .should(HAVE_LENGTH, 1)
      .contains("00");
  });

  it("should put focus back on the hour column if arrow left is pressed from the minute column", () => {
    mount(<DefaultTimeSelector />);

    cy.checkHydrated(TIME_SELECTOR);

    cy.findShadowEl(TIME_SELECTOR, COLUMN).eq(1).focus().realPress("ArrowLeft");

    cy.findShadowEl(TIME_SELECTOR, COLUMN).eq(0).should(HAVE_FOCUS);
  });

  it("should focus each column and then the select button when tabbing through", () => {
    mount(<DefaultTimeSelector />);

    cy.checkHydrated(TIME_SELECTOR);

    cy.realPress("Tab");
    cy.findShadowEl(TIME_SELECTOR, COLUMN).eq(0).should(HAVE_FOCUS);

    cy.realPress("Tab");
    cy.findShadowEl(TIME_SELECTOR, COLUMN).eq(1).should(HAVE_FOCUS);

    cy.realPress("Tab");
    cy.findShadowEl(TIME_SELECTOR, COLUMN).eq(2).should(HAVE_FOCUS);

    cy.realPress("Tab");
    cy.findShadowEl(TIME_SELECTOR, CLEAR_BTN).should(HAVE_FOCUS);
  });

  it("should focus each column and stop at the last column when using arrow right to move through", () => {
    mount(<DefaultTimeSelector />);

    cy.checkHydrated(TIME_SELECTOR);

    cy.realPress("Tab");
    cy.findShadowEl(TIME_SELECTOR, COLUMN).eq(0).should(HAVE_FOCUS);

    cy.realPress("ArrowRight");
    cy.findShadowEl(TIME_SELECTOR, COLUMN).eq(1).should(HAVE_FOCUS);

    cy.realPress("ArrowRight");
    cy.findShadowEl(TIME_SELECTOR, COLUMN).eq(2).should(HAVE_FOCUS);

    cy.realPress("ArrowRight");
    cy.findShadowEl(TIME_SELECTOR, CLEAR_BTN).should(NOT_HAVE_FOCUS);
  });
});

describe("IcTimeSelector visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.injectAxe();
  });
  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <DefaultTimeSelector />
      </div>
    );

    cy.checkHydrated(TIME_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/time-selector-default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render in dark theme", () => {
    mount(
      <div
        style={{
          padding: "10px",
          backgroundColor: "var(--ic-color-page-background-dark)",
        }}
      >
        <DarkThemeTimeSelector />
      </div>
    );

    cy.checkHydrated(TIME_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/time-selector-dark-theme",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.03),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with a default value - string", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <ValueTimeSelector />
      </div>
    );

    cy.checkHydrated(TIME_SELECTOR);

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "/time-selector-string-value",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with a default value - date object", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <DateObjectTimeSelector />
      </div>
    );

    cy.checkHydrated(TIME_SELECTOR);

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "/time-selector-date-object-value",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with a default value - Zulu time", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <ZuluTimeSelector />
      </div>
    );

    cy.checkHydrated(TIME_SELECTOR);
    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "/time-selector-zulu-time-value",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render as small", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <SmallTimeSelector />
      </div>
    );

    cy.checkHydrated(TIME_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/time-selector-small",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.01),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render as large", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <LargeTimeSelector />
      </div>
    );

    cy.checkHydrated(TIME_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/time-selector-large",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.01),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with a HH:MM time format", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <HHMMTimeSelector />
      </div>
    );

    cy.checkHydrated(TIME_SELECTOR);
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/time-selector-hhmm-format",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with a minimum time", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <MinTimeSelector />
      </div>
    );

    cy.checkHydrated(TIME_SELECTOR);

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "/time-selector-min-time",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.05),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with a maximum time", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <MaxTimeSelector />
      </div>
    );

    cy.checkHydrated(TIME_SELECTOR);
    cy.findShadowEl(TIME_SELECTOR, COLUMN).eq(0).scrollTo(0, 450);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/time-selector-max-time",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.05),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with disabled times", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <DisableTimesTimeSelector />
      </div>
    );

    cy.checkHydrated(TIME_SELECTOR);

    cy.findShadowEl(TIME_SELECTOR, COLUMN).eq(0).scrollTo(0, 250);
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/time-selector-disable-times",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.04),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with column focus", () => {
    mount(<DefaultTimeSelector />);

    cy.checkHydrated(TIME_SELECTOR);

    cy.realPress("Tab");
    cy.findShadowEl(TIME_SELECTOR, COLUMN).eq(0).should(HAVE_FOCUS);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/time-selector-column-focus",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });
});

describe("IcTimeSelector visual regression tests in high contrast mode", () => {
  beforeEach(() => {
    cy.enableForcedColors();
    cy.wait(500);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  after(() => {
    cy.disableForcedColors();
  });

  it("should render", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <DefaultTimeSelector />
      </div>
    );

    cy.checkHydrated(TIME_SELECTOR);

    cy.compareSnapshot({
      name: "/time-selector-default-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with value selected", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <ValueTimeSelector />
      </div>
    );

    cy.checkHydrated(TIME_SELECTOR);

    cy.wait(700);
    cy.compareSnapshot({
      name: "/time-selector-string-value-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with time selector items disabled", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <MinTimeSelector />
      </div>
    );

    cy.checkHydrated(TIME_SELECTOR);

    cy.wait(500);
    cy.compareSnapshot({
      name: "/time-selector-min-time-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.05),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });
});
