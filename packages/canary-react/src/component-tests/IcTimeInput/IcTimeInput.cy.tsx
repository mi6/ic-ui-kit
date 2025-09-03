import React from "react";
import { mount } from "cypress/react";
import {
  DefaultTimeInput,
  DarkThemeTimeInput,
  ValueTimeInput,
  DateObjectTimeInput,
  ZuluTimeInput,
  HideLabelTimeInput,
  RequiredTimeInput,
  DisabledTimeInput,
  SmallTimeInput,
  LargeTimeInput,
  CustomHelperTextTimeInput,
  HideHelperTextTimeInput,
  ValidationStatusTimeInput,
  TimePeriodTimeInput,
  HHMMTimeInput,
  MinTimeInput,
  MaxTimeInput,
  DisableTimesTimeInput,
  ClearingValueTimeInput,
} from "./IcTimeInputTestData";
import { setThresholdBasedOnEnv } from "@ukic/react/cypress/utils/helpers";
import {
  BE_FOCUSED,
  HAVE_TEXT,
  HAVE_VALUE,
  NOT_EXIST,
} from "@ukic/react/src/component-tests/utils/constants";

const TIME_INPUT = "ic-time-input";
const HOUR_INPUT = 'input[id="hour-input"]';
const MINUTE_INPUT = 'input[id="minute-input"]';
const SECOND_INPUT = 'input[id="second-input"]';
const STATUS_TEXT_SPAN = ".statustext span";

const DEFAULT_TEST_THRESHOLD = 0.008;

describe("IcTimeInput e2e tests", () => {
  describe("Clear the input", () => {
    it("should clear the input value when the clear button is clicked", () => {
      mount(
        <div style={{ padding: "10px" }}>
          <ClearingValueTimeInput />
        </div>
      );

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
      mount(
        <div style={{ padding: "10px" }}>
          <ClearingValueTimeInput />
        </div>
      );

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
      mount(
        <div style={{ padding: "10px" }}>
          <ClearingValueTimeInput />
        </div>
      );

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
      mount(
        <div style={{ padding: "10px" }}>
          <ClearingValueTimeInput />
        </div>
      );

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
      mount(
        <div style={{ padding: "10px" }}>
          <DefaultTimeInput />
        </div>
      );

      cy.checkHydrated(TIME_INPUT);

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("{uparrow}");

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).should(HAVE_VALUE, "01");
    });

    it("should increment the hour to 00 when ArrowUp is pressed on the hour input, timePeriod is 24 and the hour input value is 23", () => {
      mount(
        <div style={{ padding: "10px" }}>
          <DefaultTimeInput />
        </div>
      );

      cy.checkHydrated(TIME_INPUT);

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("23");

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("{uparrow}");

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).should(HAVE_VALUE, "00");
    });

    it("should increment the hour to 00 when ArrowUp is pressed on the hour input, timePeriod is 12 and the hour input value is 11", () => {
      mount(
        <div style={{ padding: "10px" }}>
          <TimePeriodTimeInput />
        </div>
      );

      cy.checkHydrated(TIME_INPUT);

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("11");

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("{uparrow}");

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).should(HAVE_VALUE, "00");
    });

    it("should decrement the hour when ArrowDown is pressed on the hour input", () => {
      mount(
        <div style={{ padding: "10px" }}>
          <DefaultTimeInput />
        </div>
      );

      cy.checkHydrated(TIME_INPUT);

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("{downarrow}");

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).should(HAVE_VALUE, "23");
    });

    it("should decrement the hour to 11 when ArrowDown is pressed on the hour input and timePeriod is 12", () => {
      mount(
        <div style={{ padding: "10px" }}>
          <TimePeriodTimeInput />
        </div>
      );

      cy.checkHydrated(TIME_INPUT);

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("{downarrow}");

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).should(HAVE_VALUE, "11");
    });
  });

  describe("ArrowLeft and ArrowRight keys", () => {
    it("should focus the minute input when ArrowRight is pressed on the hour input", () => {
      mount(
        <div style={{ padding: "10px" }}>
          <DefaultTimeInput />
        </div>
      );

      cy.checkHydrated(TIME_INPUT);

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("{rightarrow}");

      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).should(BE_FOCUSED);
    });

    it("should focus the second input when ArrowRight is pressed on the minute input", () => {
      mount(
        <div style={{ padding: "10px" }}>
          <DefaultTimeInput />
        </div>
      );

      cy.checkHydrated(TIME_INPUT);

      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).type("{rightarrow}");

      cy.findShadowEl(TIME_INPUT, SECOND_INPUT).should(BE_FOCUSED);
    });

    it("should focus the hour input when ArrowLeft is pressed on the minute input", () => {
      mount(
        <div style={{ padding: "10px" }}>
          <DefaultTimeInput />
        </div>
      );

      cy.checkHydrated(TIME_INPUT);

      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).type("{leftarrow}");

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).should(BE_FOCUSED);
    });

    it("should focus the minute input when ArrowLeft is pressed on the second input", () => {
      mount(
        <div style={{ padding: "10px" }}>
          <DefaultTimeInput />
        </div>
      );

      cy.checkHydrated(TIME_INPUT);

      cy.findShadowEl(TIME_INPUT, SECOND_INPUT).type("{leftarrow}");

      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).should(BE_FOCUSED);
    });
  });

  describe("Tab and backspace keys", () => {
    it("should focus the minute input when Tab is pressed on the hour input", () => {
      mount(
        <div style={{ padding: "10px" }}>
          <DefaultTimeInput />
        </div>
      );

      cy.checkHydrated(TIME_INPUT);

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).click().realPress("Tab");

      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).should(BE_FOCUSED);
    });

    it("should focus the minute input when Shift + Tab is pressed on the second input", () => {
      mount(
        <div style={{ padding: "10px" }}>
          <DefaultTimeInput />
        </div>
      );

      cy.checkHydrated(TIME_INPUT);

      cy.findShadowEl(TIME_INPUT, SECOND_INPUT)
        .click()
        .realPress(["Shift", "Tab"]);

      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).should(BE_FOCUSED);
    });

    it("should clear the hour input when backspace is pressed on the hour input", () => {
      mount(
        <div style={{ padding: "10px" }}>
          <DefaultTimeInput />
        </div>
      );

      cy.checkHydrated(TIME_INPUT);

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("12").type("{backspace}");

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).should(HAVE_VALUE, "");
    });

    it("should clear the minute input and focus the hour input when backspace is pressed on the minute input", () => {
      mount(
        <div style={{ padding: "10px" }}>
          <DefaultTimeInput />
        </div>
      );

      cy.checkHydrated(TIME_INPUT);

      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT)
        .type("30")
        .type("{backspace}")
        .type("{backspace}");

      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).should(HAVE_VALUE, "");
      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).should(BE_FOCUSED);
    });
  });

  describe("Validation", () => {
    it("should show validation error when the hour input is invalid", () => {
      mount(
        <div style={{ padding: "10px" }}>
          <DefaultTimeInput />
        </div>
      );

      cy.checkHydrated(TIME_INPUT);
      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("25");
      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).type("30");
      cy.findShadowEl(TIME_INPUT, SECOND_INPUT).type("45");

      cy.get(TIME_INPUT)
        .shadow()
        .find(STATUS_TEXT_SPAN)
        .eq(0)
        .should(HAVE_TEXT, "Please enter a valid time.");
    });

    it("should show validation error when the hour input is invalid with 12 hour time period", () => {
      mount(
        <div style={{ padding: "10px" }}>
          <TimePeriodTimeInput />
        </div>
      );

      cy.checkHydrated(TIME_INPUT);
      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("13");
      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).type("30");
      cy.findShadowEl(TIME_INPUT, SECOND_INPUT).type("45");

      cy.get(TIME_INPUT)
        .shadow()
        .find(STATUS_TEXT_SPAN)
        .eq(0)
        .should(HAVE_TEXT, "Please enter a valid time.");
    });

    it("should show validation error when a time is entered before the min time", () => {
      mount(
        <div style={{ padding: "10px" }}>
          <MinTimeInput />
        </div>
      );

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
      mount(
        <div style={{ padding: "10px" }}>
          <MaxTimeInput />
        </div>
      );

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
      mount(
        <div style={{ padding: "10px" }}>
          <DisableTimesTimeInput />
        </div>
      );

      cy.checkHydrated(TIME_INPUT);
      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("13");
      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).type("20");
      cy.findShadowEl(TIME_INPUT, SECOND_INPUT).type("00");

      cy.get(TIME_INPUT)
        .shadow()
        .find(STATUS_TEXT_SPAN)
        .eq(0)
        .should(HAVE_TEXT, "Please enter a valid time.");
    });

    it("should show validation error when a time is entered that is within a disabled time", () => {
      mount(
        <div style={{ padding: "10px" }}>
          <DisableTimesTimeInput />
        </div>
      );

      cy.checkHydrated(TIME_INPUT);
      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("09");
      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).type("00");
      cy.findShadowEl(TIME_INPUT, SECOND_INPUT).type("00");

      cy.get(TIME_INPUT)
        .shadow()
        .find(STATUS_TEXT_SPAN)
        .eq(0)
        .should(HAVE_TEXT, "Please enter a valid time.");
    });

    it("should show validation error and remove it when an acceptable time has been entered", () => {
      mount(
        <div style={{ padding: "10px" }}>
          <DisableTimesTimeInput />
        </div>
      );

      cy.checkHydrated(TIME_INPUT);
      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("09");
      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).type("00");
      cy.findShadowEl(TIME_INPUT, SECOND_INPUT).type("00");

      cy.get(TIME_INPUT)
        .shadow()
        .find(STATUS_TEXT_SPAN)
        .eq(0)
        .should(HAVE_TEXT, "Please enter a valid time.");

      cy.findShadowEl(TIME_INPUT, HOUR_INPUT).type("10");
      cy.findShadowEl(TIME_INPUT, MINUTE_INPUT).type("30");
      cy.findShadowEl(TIME_INPUT, SECOND_INPUT).type("00");

      cy.get(TIME_INPUT).shadow().find(".statustext").should(NOT_EXIST);
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
    mount(
      <div style={{ padding: "10px" }}>
        <DefaultTimeInput />
      </div>
    );

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
        <DarkThemeTimeInput />
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
    mount(
      <div style={{ padding: "10px" }}>
        <ValueTimeInput />
      </div>
    );

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
    mount(
      <div style={{ padding: "10px" }}>
        <DateObjectTimeInput />
      </div>
    );

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
    mount(
      <div style={{ padding: "10px" }}>
        <ZuluTimeInput />
      </div>
    );

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
    mount(
      <div style={{ padding: "10px" }}>
        <HideLabelTimeInput />
      </div>
    );

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
    mount(
      <div style={{ padding: "10px" }}>
        <RequiredTimeInput />
      </div>
    );

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
    mount(
      <div style={{ padding: "10px" }}>
        <DisabledTimeInput />
      </div>
    );

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
    mount(
      <div style={{ padding: "10px" }}>
        <SmallTimeInput />
      </div>
    );

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
    mount(
      <div style={{ padding: "10px" }}>
        <LargeTimeInput />
      </div>
    );

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
    mount(
      <div style={{ padding: "10px" }}>
        <CustomHelperTextTimeInput />
      </div>
    );

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
    mount(
      <div style={{ padding: "10px" }}>
        <HideHelperTextTimeInput />
      </div>
    );

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
    mount(
      <div style={{ padding: "10px" }}>
        <ValidationStatusTimeInput />
      </div>
    );

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
    mount(
      <div style={{ padding: "10px" }}>
        <HHMMTimeInput />
      </div>
    );

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

  it("should render with a minimum time", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <MinTimeInput />
      </div>
    );

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
    mount(
      <div style={{ padding: "10px" }}>
        <MaxTimeInput />
      </div>
    );

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
    mount(
      <div style={{ padding: "10px" }}>
        <DisableTimesTimeInput />
      </div>
    );

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
