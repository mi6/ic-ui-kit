/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress/react";
import { IcDateInput } from "../../components";
import {
  DateInputUpdateValue,
  DateInputUpdateHelperText,
  DateInputHideHelperText,
} from "./IcDateInputTestData";
import { setThresholdBasedOnEnv } from "@ukic/react/cypress/utils/helpers";
import {
  HAVE_TEXT,
  HAVE_VALUE,
} from "@ukic/react/src/component-tests/utils/constants";

const DATE_INPUT = "ic-date-input";
const DAY_INPUT_CLASS = ".day-input";

const YEAR_INPUT_ARIA_LABEL = 'input[aria-label="year"]';
const ARROW_UP_KEY = "{upArrow}";
const ARROW_DOWN_KEY = "{downArrow}";
const DAY_INPUT_ARIA_LABEL = 'input[aria-label="day"]';
const MONTH_INPUT_ARIA_LABEL = 'input[aria-label="month"]';
const CUSTOM_DISABLE_DAY_MESSAGE = "Date disabled";
const LONG_CUSTOM_DISABLE_DAY_MESSAGE =
  "This is a very long message to test the validation message";
const STATUS_TEXT_SPAN = ".statustext";
const DEFAULT_HELPER_TEXT = "Use format DD/MM/YYYY";
const DEFAULT_THRESHOLD = 0.04;

describe("IcDateInput", () => {
  beforeEach(() => {
    cy.injectAxe();
  });
  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render", () => {
    mount(<IcDateInput label="Test Label" />);

    cy.checkHydrated(DATE_INPUT);

    cy.get(DATE_INPUT).should("to.be.visible");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "date-input-render",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.004),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should update value on ArrowUp on day input", () => {
    mount(<IcDateInput label="Test Label" />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_CLASS).type(ARROW_UP_KEY);
    cy.findShadowEl(DATE_INPUT, DAY_INPUT_CLASS).type(ARROW_UP_KEY);
    cy.findShadowEl(DATE_INPUT, DAY_INPUT_CLASS).type("/");

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_CLASS).should(HAVE_VALUE, "02");
  });

  it("should update value on ArrowDown on day input", () => {
    mount(<IcDateInput label="Test Label" />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_CLASS).type(ARROW_DOWN_KEY);
    cy.findShadowEl(DATE_INPUT, DAY_INPUT_CLASS).type(ARROW_DOWN_KEY);
    cy.findShadowEl(DATE_INPUT, DAY_INPUT_CLASS).type("/");

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_CLASS).should(HAVE_VALUE, "30");
  });

  it("should display validation error if date in the past is entered while disable past date is set to true", () => {
    mount(<IcDateInput label="Test Label" disablePast />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).type("01");
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).type("01");
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type("2000");

    cy.get("ic-date-input")
      .shadow()
      .find(".statustext")
      .should(
        HAVE_TEXT,
        "Dates in the past are not allowed. Please select a date in the future."
      );
  });

  it("should display validation error if date in the past is entered while disable past date is set to true", () => {
    mount(<IcDateInput label="Test Label" disableFuture />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).type("01");
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).type("01");
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type("4000");

    cy.get("ic-date-input")
      .shadow()
      .find(".statustext")
      .should(
        HAVE_TEXT,
        "Dates in the future are not allowed. Please select a date in the past."
      );
  });

  it("should remove validation status (from now) when disabled date is updated", () => {
    mount(<IcDateInput label="Test Label" disableFuture value="31/08/2025" />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, "ic-input-validation ic-typography").should(
      HAVE_TEXT,
      "Dates in the future are not allowed. Please select a date in the past."
    );

    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type("2000");

    cy.findShadowEl(DATE_INPUT, "ic-input-validation").should("not.exist");
  });

  it("should remove validation status (until now) when disabled date is updated", () => {
    mount(<IcDateInput label="Test Label" disablePast value="10/08/2022" />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, "ic-input-validation ic-typography").should(
      HAVE_TEXT,
      "Dates in the past are not allowed. Please select a date in the future."
    );

    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type("3000");

    cy.findShadowEl(DATE_INPUT, "ic-input-validation").should("not.exist");
  });

  it("should increase day when switching between input and arrow up", () => {
    mount(<IcDateInput label="Test Label" />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).type("1{upArrow}/");

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).should(HAVE_VALUE, "02");
  });

  it("should decrease day when switching between input and arrow down", () => {
    mount(<IcDateInput label="Test Label" />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).type("2{downArrow}/");

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).should(HAVE_VALUE, "01");

    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).should("have.focus");
  });

  it("should increase month when switching between input and arrow up", () => {
    mount(<IcDateInput label="Test Label" />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).type("1{upArrow}/");

    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).should(
      HAVE_VALUE,
      "02"
    );
  });

  it("should set month to 12 when switching between input and arrow down", () => {
    mount(<IcDateInput label="Test Label" />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).type("1{downArrow}/");

    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).should(
      HAVE_VALUE,
      "12"
    );

    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).should("have.focus");
  });

  it("should increase year when switching between input and arrow up", () => {
    mount(<IcDateInput label="Test Label" />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type("2000{upArrow}");

    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).should(
      HAVE_VALUE,
      "2001"
    );
  });

  it("should decrease year when switching between input and arrow down", () => {
    mount(<IcDateInput label="Test Label" />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type("2000{downArrow}");

    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).should(
      HAVE_VALUE,
      "1999"
    );
  });

  it("should test setting date to undefined programmatically", () => {
    mount(<DateInputUpdateValue updatedValue={undefined} />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).should(HAVE_VALUE, "31");
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).should(
      HAVE_VALUE,
      "08"
    );
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).should(
      HAVE_VALUE,
      "2025"
    );

    cy.get("button").click();

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).should(HAVE_VALUE, "");
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).should(HAVE_VALUE, "");
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).should(HAVE_VALUE, "");
  });

  it("should test setting date to empty string programmatically", () => {
    mount(<DateInputUpdateValue updatedValue={""} />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).should(HAVE_VALUE, "31");
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).should(
      HAVE_VALUE,
      "08"
    );
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).should(
      HAVE_VALUE,
      "2025"
    );

    cy.get("button").click();

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).should(HAVE_VALUE, "");
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).should(HAVE_VALUE, "");
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).should(HAVE_VALUE, "");
  });

  it("should test setting date to null programmatically", () => {
    mount(<DateInputUpdateValue updatedValue={null} />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).should(HAVE_VALUE, "31");
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).should(
      HAVE_VALUE,
      "08"
    );
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).should(
      HAVE_VALUE,
      "2025"
    );

    cy.get("button").click();

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).should(HAVE_VALUE, "");
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).should(HAVE_VALUE, "");
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).should(HAVE_VALUE, "");
  });

  it("should enter complete date and check for accessibility", () => {
    mount(<IcDateInput label="Test Label" />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).type("30");
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).type("04");
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type("2000");

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "date-input-with-values",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.01),
      delay: 500,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should populate screen reader aria live when date is complete and updated", () => {
    mount(<IcDateInput label="Test Label" />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).type("30");
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).type("04");
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type("2000");

    cy.get("ic-date-input")
      .shadow()
      .find("span[role='status']")
      .should(HAVE_TEXT, "Selected date: Sunday, 30 April 2000");

    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type(
      "{Backspace}{Backspace}{Backspace}{Backspace}"
    );

    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type("2024");

    cy.get("ic-date-input")
      .shadow()
      .find("span[role='status']")
      .should(HAVE_TEXT, "Selected date: Tuesday, 30 April 2024");
  });

  it("should display validation message if date before min with date string with slashes", () => {
    mount(<IcDateInput label="Test Label" min="01/07/2001" />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).type("01");
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).type("06");
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type("2000").wait(200);

    cy.get("ic-date-input")
      .shadow()
      .find(".statustext")
      .should(HAVE_TEXT, "Please enter a date after 01/07/2001.");

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "date-input-with-min-validation",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.025),
      delay: 500,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should display validation message if date before max with date string with slashes", () => {
    mount(<IcDateInput label="Test Label" max="01/07/2024" />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).type("01");
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).type("12");
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type("2050").wait(200);

    cy.findShadowEl(DATE_INPUT, STATUS_TEXT_SPAN).should(
      HAVE_TEXT,
      "Please enter a date before 01/07/2024."
    );

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "date-input-with-max-validation",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.025),
      delay: 500,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should move the cursor to the next input when using slash. Day > Month", () => {
    mount(<IcDateInput label="Test Label" />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).type("/");

    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).should("have.focus");
  });

  it("should move the cursor to the next input when using dash. Day > Month", () => {
    mount(<IcDateInput label="Test Label" />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).type("-");

    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).should("have.focus");
  });

  it("should display custom invalidDateMessage", () => {
    mount(<IcDateInput label="Test Label" invalidDateMessage="Invalid date" />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).type("18");
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).type("14");
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type("2000").wait(200);

    cy.findShadowEl(DATE_INPUT, STATUS_TEXT_SPAN).should(
      HAVE_TEXT,
      "Invalid date"
    );

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "date-input-with-custom-invalid-date-message",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.018),
      delay: 500,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should display custom disabledDaysMessage if disabled day is set", () => {
    mount(
      <IcDateInput
        label="Test Label"
        disableDaysMessage={CUSTOM_DISABLE_DAY_MESSAGE}
        disableDays={[0]}
      />
    );

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).type("18");
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).type("02");
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type("2024").wait(200);

    cy.findShadowEl(DATE_INPUT, STATUS_TEXT_SPAN).should(
      HAVE_TEXT,
      CUSTOM_DISABLE_DAY_MESSAGE
    );

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "date-input-with-custom-disable-days-message",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.02),
      delay: 500,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should display a long custom disabledDaysMessage if disabled day is set", () => {
    mount(
      <IcDateInput
        label="Test Label"
        disableDaysMessage={LONG_CUSTOM_DISABLE_DAY_MESSAGE}
        disableDays={[0]}
      />
    );

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).type("18");
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).type("02");
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type("2024").wait(200);

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "date-input-with-long-custom-disable-days-message",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.037),
      delay: 500,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should display custom disabledFutureMessage if disabled future day is set", () => {
    mount(
      <IcDateInput
        label="Test Label"
        disableFutureMessage={CUSTOM_DISABLE_DAY_MESSAGE}
        disableFuture
      />
    );

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).type("18");
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).type("02");
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type("3024").wait(200);

    cy.findShadowEl(DATE_INPUT, STATUS_TEXT_SPAN).should(
      HAVE_TEXT,
      CUSTOM_DISABLE_DAY_MESSAGE
    );

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "date-input-with-custom-disable-future-message",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.016),
      delay: 500,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should display long custom disabledFutureMessage if disabled future day is set", () => {
    mount(
      <IcDateInput
        label="Test Label"
        disableFutureMessage={LONG_CUSTOM_DISABLE_DAY_MESSAGE}
        disableFuture
      />
    );

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).type("18");
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).type("02");
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type("3024").wait(200);

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "date-input-with-long-custom-disable-future-message",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.037),
      delay: 500,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should display custom disabledPastMessage if disabled past day is set", () => {
    mount(
      <IcDateInput
        label="Test Label"
        disablePastMessage={CUSTOM_DISABLE_DAY_MESSAGE}
        disablePast
      />
    );

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).type("18");
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).type("02");
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type("1990").wait(200);

    cy.findShadowEl(DATE_INPUT, STATUS_TEXT_SPAN).should(
      HAVE_TEXT,
      CUSTOM_DISABLE_DAY_MESSAGE
    );

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "date-input-with-custom-disable-past-message",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.016),
      delay: 500,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should display long custom disabledPastMessage if disabled past day is set", () => {
    mount(
      <IcDateInput
        label="Test Label"
        disablePastMessage={LONG_CUSTOM_DISABLE_DAY_MESSAGE}
        disablePast
      />
    );

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).type("18");
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).type("02");
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type("1990").wait(200);

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "date-input-with-long-custom-disable-past-message",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.037),
      delay: 500,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should increase day if value already set", () => {
    mount(<IcDateInput label="Test Label" value="20/01/2000" />);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).focus();
    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).type(ARROW_UP_KEY);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).should(HAVE_VALUE, "21");
  });

  it("should decrease day if value already set", () => {
    mount(<IcDateInput label="Test Label" value="20/01/2000" />);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).focus();
    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).type(ARROW_DOWN_KEY);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).should(HAVE_VALUE, "19");
  });

  it("should increase month if value already set", () => {
    mount(<IcDateInput label="Test Label" value="20/01/2000" />);

    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).focus();
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).type(ARROW_UP_KEY);

    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).should(
      HAVE_VALUE,
      "02"
    );
  });

  it("should decrease month if value already set", () => {
    mount(<IcDateInput label="Test Label" value="20/01/2000" />);

    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).focus();
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).type(ARROW_DOWN_KEY);

    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).should(
      HAVE_VALUE,
      "12"
    );
  });

  it("should increase year if value already set", () => {
    mount(<IcDateInput label="Test Label" value="20/01/2000" />);

    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).focus();
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type(ARROW_UP_KEY);

    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).should(
      HAVE_VALUE,
      "2001"
    );
  });

  it("should decrease year if value already set", () => {
    mount(<IcDateInput label="Test Label" value="20/01/2000" />);

    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).focus();
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type(ARROW_DOWN_KEY);

    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).should(
      HAVE_VALUE,
      "1999"
    );
  });

  it("should display error validation", () => {
    mount(
      <IcDateInput
        label="Test Label"
        validationStatus="error"
        validationText="Error"
      />
    );

    cy.findShadowEl(DATE_INPUT, STATUS_TEXT_SPAN).should(HAVE_TEXT, "Error");

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "date-input-with-error-validation",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.008),
      delay: 500,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should display warning validation", () => {
    mount(
      <IcDateInput
        label="Test Label"
        validationStatus="warning"
        validationText="Warning"
      />
    );

    cy.findShadowEl(DATE_INPUT, STATUS_TEXT_SPAN).should(HAVE_TEXT, "Warning");

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "date-input-with-warning-validation",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.015),
      delay: 500,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should display success validation", () => {
    mount(
      <IcDateInput
        label="Test Label"
        validationStatus="success"
        validationText="Success"
      />
    );

    cy.findShadowEl(DATE_INPUT, STATUS_TEXT_SPAN).should(HAVE_TEXT, "Success");

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "date-input-with-success-validation",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.0085),
      delay: 500,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should clear input when clear button pressed", () => {
    mount(
      <IcDateInput label="Test Label" value="20/01/2000" showClearButton />
    );

    cy.checkHydrated(DATE_INPUT);

    cy.get(DATE_INPUT).invoke("on", "icChange", cy.stub().as("icDateChanged"));

    cy.findShadowEl(DATE_INPUT, "#clear-button")
      .shadow()
      .find("button")
      .focus()
      .click();

    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).should(HAVE_VALUE, "");

    cy.get("@icDateChanged").should((stub) => {
      expect(stub.getCall(0).args[0].detail.value).to.equal(null);
    });
  });

  it("should update helper text and reset helper text to default when set to empty string", () => {
    const INITIAL_HELP = "initial helper text";
    const NEW_HELP = "new helper text";
    mount(
      <DateInputUpdateHelperText
        initialText={INITIAL_HELP}
        newText={NEW_HELP}
      />
    );
    cy.checkHydrated(DATE_INPUT);
    cy.findShadowEl(DATE_INPUT, ".helpertext").should(HAVE_TEXT, INITIAL_HELP);
    cy.get("button#changeText").focus().click();
    cy.findShadowEl(DATE_INPUT, ".helpertext").should(HAVE_TEXT, NEW_HELP);
    cy.get("button#resetText").focus().click();
    cy.findShadowEl(DATE_INPUT, ".helpertext").should(
      HAVE_TEXT,
      DEFAULT_HELPER_TEXT
    );
    cy.get("button#nullText").focus().click();
    cy.findShadowEl(DATE_INPUT, ".helpertext").should(
      HAVE_TEXT,
      DEFAULT_HELPER_TEXT
    );
  });

  it("should hide helper text when hideHelperText is true", () => {
    mount(<DateInputHideHelperText />);

    // Helper text should render initially
    cy.checkHydrated(DATE_INPUT);
    cy.findShadowEl(DATE_INPUT, ".helpertext").should(
      HAVE_TEXT,
      DEFAULT_HELPER_TEXT
    );

    // When hideHelperText is set to true, helper text should not render
    cy.get("button#hideText").focus().click();
    cy.findShadowEl(DATE_INPUT, ".helpertext").should(HAVE_TEXT, "");
  });
});
