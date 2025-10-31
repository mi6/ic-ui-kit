import React from "react";
import { mount } from "cypress/react";
import {
  DefaultTimeInput,
  CustomHelperTextTimeInput,
  ValidationStatusTimeInput,
  DisableTimesTimeInput,
  ClearingValueTimeInput,
} from "./IcTimeInputTestData";
import { setThresholdBasedOnEnv } from "@ukic/react/cypress/utils/helpers";
import {
  BE_FOCUSED,
  HAVE_CLASS,
  HAVE_TEXT,
  HAVE_VALUE,
} from "@ukic/react/src/component-tests/utils/constants";

const TIME_INPUT = "ic-time-input";
const HOUR_INPUT = 'input[id="hour-input"]';
const MINUTE_INPUT = 'input[id="minute-input"]';
const SECOND_INPUT = 'input[id="second-input"]';
const STATUS_TEXT_SPAN = ".statustext span";
const AM_PM_TOGGLE = "ic-toggle-button-group.am-pm-toggle";
const BACKSPACE = "{backspace}";
const INVALID_TIME_TEXT = "Please enter a valid time.";

const DEFAULT_TEST_THRESHOLD = 0.008;

const paddedMount = (component: any) => {
  return mount(<div style={{ padding: "10px" }}>{component}</div>);
};

describe("IcTimeInput e2e tests", () => {
  describe("Clear the input", () => {
    it("should clear the input value when the clear button is clicked", () => {
      paddedMount(<ClearingValueTimeInput />);

      cy.checkHydrated(TIME_INPUT);

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("12");
      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).type("30");
      cy.findShadowEl(TIME_INPUT, SECOND_INPUT).type("45");

      cy.findShadowEl(TIME_INPUT, 'ic-button[id="clear-button"]').click();

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).should(HAVE_VALUE, "");
      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).should(HAVE_VALUE, "");
      cy.findShadowEl(TIME_INPUT, SECOND_INPUT).should(HAVE_VALUE, "");
    });

    it("should clear the input value when setting value to null", () => {
      paddedMount(<ClearingValueTimeInput />);

      cy.checkHydrated(TIME_INPUT);

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("12");
      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).type("30");
      cy.findShadowEl(TIME_INPUT, SECOND_INPUT).type("45");

      cy.get('ic-button[id="update-null"]').click();

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).should(HAVE_VALUE, "");
      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).should(HAVE_VALUE, "");
      cy.findShadowEl(TIME_INPUT, SECOND_INPUT).should(HAVE_VALUE, "");
    });

    it("should clear the input value when setting value to an empty string", () => {
      paddedMount(<ClearingValueTimeInput />);

      cy.checkHydrated(TIME_INPUT);

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("12");
      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).type("30");
      cy.findShadowEl(TIME_INPUT, SECOND_INPUT).type("45");

      cy.get('ic-button[id="update-empty"]').click();

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).should(HAVE_VALUE, "");
      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).should(HAVE_VALUE, "");
      cy.findShadowEl(TIME_INPUT, SECOND_INPUT).should(HAVE_VALUE, "");
    });

    it("should clear the input value when setting value to undefined", () => {
      paddedMount(<ClearingValueTimeInput />);

      cy.checkHydrated(TIME_INPUT);

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("12");
      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).type("30");
      cy.findShadowEl(TIME_INPUT, SECOND_INPUT).type("45");

      cy.get('ic-button[id="update-undefined"]').click();

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).should(HAVE_VALUE, "");
      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).should(HAVE_VALUE, "");
      cy.findShadowEl(TIME_INPUT, SECOND_INPUT).should(HAVE_VALUE, "");
    });
  });

  describe("ArrowUp and ArrowDown keys", () => {
    it("should increment the hour when ArrowUp is pressed on the hour input", () => {
      paddedMount(<DefaultTimeInput />);

      cy.checkHydrated(TIME_INPUT);

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("{uparrow}");

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).should(HAVE_VALUE, "01");
    });

    it("should increment the hour to 00 when ArrowUp is pressed on the hour input, timePeriod is 24 and the hour input value is 23", () => {
      paddedMount(<DefaultTimeInput />);

      cy.checkHydrated(TIME_INPUT);

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("23");

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("{uparrow}");

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).should(HAVE_VALUE, "00");
    });

    it("should increment the hour to 01 when ArrowUp is pressed on the hour input, timePeriod is 12 and the hour input value is 12", () => {
      paddedMount(<DefaultTimeInput timePeriod="12" />);

      cy.checkHydrated(TIME_INPUT);

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("12");

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("{uparrow}");

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).should(HAVE_VALUE, "01");
    });

    it("should decrement the hour when ArrowDown is pressed on the hour input", () => {
      paddedMount(<DefaultTimeInput />);

      cy.checkHydrated(TIME_INPUT);

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("{downarrow}");

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).should(HAVE_VALUE, "23");
    });

    it("should decrement the hour to 12 when ArrowDown is pressed on the hour input and timePeriod is 12", () => {
      paddedMount(<DefaultTimeInput timePeriod="12" />);

      cy.checkHydrated(TIME_INPUT);

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("{downarrow}");

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).should(HAVE_VALUE, "12");
    });
  });

  describe("ArrowLeft and ArrowRight keys", () => {
    it("should focus the minute input when ArrowRight is pressed on the hour input", () => {
      paddedMount(<DefaultTimeInput />);

      cy.checkHydrated(TIME_INPUT);

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("{rightarrow}");

      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).should(BE_FOCUSED);
    });

    it("should focus the second input when ArrowRight is pressed on the minute input", () => {
      paddedMount(<DefaultTimeInput />);

      cy.checkHydrated(TIME_INPUT);

      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).type("{rightarrow}");

      cy.findShadowEl(TIME_INPUT, SECOND_INPUT).should(BE_FOCUSED);
    });

    it("should focus the hour input when ArrowLeft is pressed on the minute input", () => {
      paddedMount(<DefaultTimeInput />);

      cy.checkHydrated(TIME_INPUT);

      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).type("{leftarrow}");

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).should(BE_FOCUSED);
    });

    it("should focus the minute input when ArrowLeft is pressed on the second input", () => {
      paddedMount(<DefaultTimeInput />);

      cy.checkHydrated(TIME_INPUT);

      cy.findShadowEl(TIME_INPUT, SECOND_INPUT).type("{leftarrow}");

      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).should(BE_FOCUSED);
    });

    it("should select the PM toggle when ArrowRight is pressed on AM toggle, and focus the AM toggle when ArrowLeft is pressed", () => {
      paddedMount(<DefaultTimeInput timePeriod="12" showAmPmToggle />);

      cy.checkHydrated(TIME_INPUT);

      cy.findShadowEl(TIME_INPUT, AM_PM_TOGGLE)
        .click()
        .realPress(["ArrowRight"]);

      cy.findShadowEl(TIME_INPUT, AM_PM_TOGGLE)
        .find("ic-toggle-button")
        .eq(1)
        .should(HAVE_CLASS, "ic-toggle-button-checked")
        .focus();

      cy.realPress(["ArrowLeft"]);

      cy.findShadowEl(TIME_INPUT, AM_PM_TOGGLE)
        .find("ic-toggle-button")
        .eq(0)
        .should(HAVE_CLASS, "ic-toggle-button-checked");
    });
  });

  describe("Tab and backspace keys", () => {
    it("should focus the minute input when Tab is pressed on the hour input", () => {
      paddedMount(<DefaultTimeInput />);

      cy.checkHydrated(TIME_INPUT);

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).click().realPress("Tab");

      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).should(BE_FOCUSED);
    });

    it("should focus the minute input when Shift + Tab is pressed on the second input", () => {
      paddedMount(<DefaultTimeInput />);

      cy.checkHydrated(TIME_INPUT);

      cy.findShadowEl(TIME_INPUT, SECOND_INPUT)
        .click()
        .realPress(["Shift", "Tab"]);

      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).should(BE_FOCUSED);
    });

    /* Commented out due to Cypress focus issues (https://github.com/mi6/ic-ui-kit/issues/1463) */
    // it("should focus the AM/PM toggle when Tab is pressed on the second input with timePeriod 12 and showAmPmToggle true", () => {
    //   paddedMount(<DefaultTimeInput timePeriod="12" showAmPmToggle />);

    //   cy.checkHydrated(TIME_INPUT);

    //   cy.findShadowEl(TIME_INPUT, SECOND_INPUT).click().realPress("Tab");

    //   cy.findShadowEl(TIME_INPUT, AM_PM_TOGGLE)
    //     .find("ic-toggle-button")
    //     .eq(0)
    //     .should(HAVE_FOCUS);
    // });

    it("should focus the second input when Shift + Tab is pressed on the AM/PM toggle with timePeriod 12 and showAmPmToggle true", () => {
      paddedMount(<DefaultTimeInput timePeriod="12" showAmPmToggle />);

      cy.checkHydrated(TIME_INPUT);

      cy.findShadowEl(TIME_INPUT, AM_PM_TOGGLE)
        .click()
        .realPress(["Shift", "Tab"]);

      cy.findShadowEl(TIME_INPUT, SECOND_INPUT).should(BE_FOCUSED);
    });

    it("should clear the hour input when backspace is pressed on the hour input", () => {
      paddedMount(<DefaultTimeInput />);

      cy.checkHydrated(TIME_INPUT);

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("12").type(BACKSPACE);

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).should(HAVE_VALUE, "");
    });

    it("should clear the minute input and focus the hour input when backspace is pressed on the minute input", () => {
      paddedMount(<DefaultTimeInput />);

      cy.checkHydrated(TIME_INPUT);

      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT)
        .type("30")
        .type(BACKSPACE)
        .type(BACKSPACE);

      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).should(HAVE_VALUE, "");
      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).should(BE_FOCUSED);
    });
  });

  describe("Validation", () => {
    it("should show validation error when the hour input is invalid", () => {
      paddedMount(<DefaultTimeInput />);

      cy.checkHydrated(TIME_INPUT);
      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("25");
      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).type("30");
      cy.findShadowEl(TIME_INPUT, SECOND_INPUT).type("45");

      cy.get(TIME_INPUT)
        .shadow()
        .find(STATUS_TEXT_SPAN)
        .eq(0)
        .should(HAVE_TEXT, INVALID_TIME_TEXT);
    });

    it("should show validation error when the hour input is invalid with 12 hour time period", () => {
      paddedMount(<DefaultTimeInput timePeriod="12" />);

      cy.checkHydrated(TIME_INPUT);
      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("13");
      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).type("30");
      cy.findShadowEl(TIME_INPUT, SECOND_INPUT).type("45");

      cy.get(TIME_INPUT)
        .shadow()
        .find(STATUS_TEXT_SPAN)
        .eq(0)
        .should(HAVE_TEXT, INVALID_TIME_TEXT);
    });

    it("should show validation error when a time is entered before the min time", () => {
      paddedMount(<DefaultTimeInput min="08:00:00" />);

      cy.checkHydrated(TIME_INPUT);
      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("02");
      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).type("00");
      cy.findShadowEl(TIME_INPUT, SECOND_INPUT).type("00");

      cy.get(TIME_INPUT)
        .shadow()
        .find(STATUS_TEXT_SPAN)
        .eq(0)
        .should(HAVE_TEXT, "Please enter a time after 08:00:00.");
    });

    it("should show validation error when a time is entered after the max time", () => {
      paddedMount(<DefaultTimeInput max="16:00:00" />);

      cy.checkHydrated(TIME_INPUT);
      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("21");
      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).type("00");
      cy.findShadowEl(TIME_INPUT, SECOND_INPUT).type("00");

      cy.get(TIME_INPUT)
        .shadow()
        .find(STATUS_TEXT_SPAN)
        .eq(0)
        .should(HAVE_TEXT, "Please enter a time before 16:00:00.");
    });

    it("should show validation error when a time is entered that is a disabled time", () => {
      paddedMount(<DisableTimesTimeInput />);

      cy.checkHydrated(TIME_INPUT);
      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("13");
      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).type("20");
      cy.findShadowEl(TIME_INPUT, SECOND_INPUT).type("00");

      cy.get(TIME_INPUT)
        .shadow()
        .find(STATUS_TEXT_SPAN)
        .eq(0)
        .should(HAVE_TEXT, INVALID_TIME_TEXT);
    });

    it("should show validation error when a time is entered that is within a disabled time", () => {
      paddedMount(<DisableTimesTimeInput />);

      cy.checkHydrated(TIME_INPUT);
      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("09");
      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).type("00");
      cy.findShadowEl(TIME_INPUT, SECOND_INPUT).type("00");

      cy.get(TIME_INPUT)
        .shadow()
        .find(STATUS_TEXT_SPAN)
        .eq(0)
        .should(HAVE_TEXT, INVALID_TIME_TEXT);
    });

    it("should show validation error and remove it when an acceptable time has been entered", () => {
      paddedMount(<DisableTimesTimeInput />);

      cy.checkHydrated(TIME_INPUT);
      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("09");
      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).type("00");
      cy.findShadowEl(TIME_INPUT, SECOND_INPUT).type("00");

      cy.get(TIME_INPUT)
        .shadow()
        .find(STATUS_TEXT_SPAN)
        .eq(0)
        .should(HAVE_TEXT, INVALID_TIME_TEXT);

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("10");
      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).type("30");
      cy.findShadowEl(TIME_INPUT, SECOND_INPUT).type("00");

      cy.get(TIME_INPUT)
        .shadow()
        .find(STATUS_TEXT_SPAN)
        .eq(0)
        .should(HAVE_TEXT, "");
    });
  });
});

describe("IcTimeInput visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.injectAxe();
  });
  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render", () => {
    paddedMount(<DefaultTimeInput />);

    cy.checkHydrated(TIME_INPUT);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/time-input-default",
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
        <DefaultTimeInput theme="dark" />
      </div>
    );

    cy.checkHydrated(TIME_INPUT);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/time-input-dark-theme",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.03),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with a default value - string", () => {
    paddedMount(<DefaultTimeInput value="13:45:00" />);

    cy.checkHydrated(TIME_INPUT);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/time-input-string-value",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with a default value - date object", () => {
    paddedMount(<DefaultTimeInput value={new Date("2025-07-14T15:30:45")} />);

    cy.checkHydrated(TIME_INPUT);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/time-input-date-object-value",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with a default value - Zulu time", () => {
    paddedMount(<DefaultTimeInput value="15:30:45Z" />);

    cy.checkHydrated(TIME_INPUT);
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/time-input-zulu-time-value",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with the label hidden", () => {
    paddedMount(<DefaultTimeInput hideLabel />);

    cy.checkHydrated(TIME_INPUT);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/time-input-hide-label",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render as required", () => {
    paddedMount(<DefaultTimeInput required />);

    cy.checkHydrated(TIME_INPUT);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/time-input-required",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render as disabled", () => {
    paddedMount(<DefaultTimeInput disabled />);

    cy.checkHydrated(TIME_INPUT);

    // cy.checkA11yWithWait(); Accessibility violation
    cy.compareSnapshot({
      name: "/time-input-disabled",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.08),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render as small", () => {
    paddedMount(<DefaultTimeInput size="small" />);

    cy.checkHydrated(TIME_INPUT);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/time-input-small",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.01),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render as large", () => {
    paddedMount(<DefaultTimeInput size="large" />);

    cy.checkHydrated(TIME_INPUT);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/time-input-large",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.01),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with custom helper text", () => {
    paddedMount(<CustomHelperTextTimeInput />);

    cy.checkHydrated(TIME_INPUT);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/time-input-custom-helper-text",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.07),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with helper text hidden", () => {
    paddedMount(<DefaultTimeInput hideHelperText />);

    cy.checkHydrated(TIME_INPUT);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/time-input-hide-helper-text",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with validation", () => {
    paddedMount(<ValidationStatusTimeInput />);

    cy.checkHydrated(TIME_INPUT);
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/time-input-validation",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.05),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with a HH:MM time format", () => {
    paddedMount(<DefaultTimeInput timeFormat="HH:MM" />);

    cy.checkHydrated(TIME_INPUT);
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/time-input-hhmm-format",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with a HH:MM:SS.SSS time format", () => {
    paddedMount(<DefaultTimeInput timeFormat="HH:MM:SS.SSS" />);

    cy.checkHydrated(TIME_INPUT);
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/time-input-milliseconds-format",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.024),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with a 12 hour time period and an AM/PM toggle", () => {
    paddedMount(<DefaultTimeInput timePeriod="12" showAmPmToggle />);

    cy.checkHydrated(TIME_INPUT);
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/time-input-12-hour-period",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with a minimum time", () => {
    paddedMount(<DefaultTimeInput min="08:00:00" />);

    cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("01");
    cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).type("01");
    cy.findShadowEl(TIME_INPUT, SECOND_INPUT).type("01");

    cy.checkHydrated(TIME_INPUT);
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/time-input-min-time",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.05),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with a maximum time", () => {
    paddedMount(<DefaultTimeInput max="16:00:00" />);

    cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("17");
    cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).type("01");
    cy.findShadowEl(TIME_INPUT, SECOND_INPUT).type("01");

    cy.checkHydrated(TIME_INPUT);
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/time-input-max-time",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.05),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with disabled times", () => {
    paddedMount(<DisableTimesTimeInput />);

    cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("09");
    cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).type("30");
    cy.findShadowEl(TIME_INPUT, SECOND_INPUT).type("30");

    cy.checkHydrated(TIME_INPUT);
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/time-input-disable-times",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.04),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });
});
