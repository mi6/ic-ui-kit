/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />
import "./IcDatePicker.css";
import React from "react";
import { mount } from "cypress/react";
import { IcDatePicker } from "../../components";
import { setThresholdBasedOnEnv } from "@ukic/react/cypress/utils/helpers";

import {
  BE_DISABLED,
  NOT_BE_DISABLED,
  NOT_EXIST,
  HAVE_CLASS,
  HAVE_TEXT,
  HAVE_ATTR,
  BE_VISIBLE,
  NOT_BE_VISIBLE,
  CONTAIN_TEXT,
} from "@ukic/react/src/component-tests/utils/constants";

const DATE_PICKER = "ic-date-picker";
const DATE_INPUT = "ic-date-input";
const INPUT_VALIDATION = "ic-input-validation";
const BUTTON = "button";
const DEFAULT_LABEL = "Test label";
const DEFAULT_VALUE = "15/12/2023";
const CALENDAR_BUTTON_ID = "#calendar-button";
const MONTH_PICKER_BTN_CLASS = ".month-picker-button";
const SELECTED_MONTH_BTN_CLASS = "ic-button.month-button.selected";
const FOCUSSED_MONTH_BTN_CLASS = "ic-button.month-button.focussed";
const SELECTED_YEAR_BTN_CLASS = "ic-button.year-button.selected";
const FOCUSSED_YEAR_BTN_CLASS = "ic-button.year-button.focussed";
const DAY_BTN_CLASS = ".day-button";
const SELECTED_DAY_BTN_CLASS = "button.day-button.selected";
const FOCUSSED_DAY_BTN_CLASS = "button.day-button.focussed";
const YEAR_PICKER_BTN_CLASS = ".year-picker-button";
const TODAY_BUTTON_ID = "#today-button";
const CLEAR_BUTTON_ID = "#clear-button";
const PREV_MONTH_BUTTON_ID = "#previous-month-button";
const NEXT_MONTH_BUTTON_ID = "#next-month-button";
const PREV_YEAR_BUTTON_ID = "#previous-year-button";
const NEXT_YEAR_BUTTON_ID = "#next-year-button";
const PREV_DECADE_BUTTON_ID = "#prev-decade-button";
const NEXT_DECADE_BUTTON_ID = "#next-decade-button";
const TOOLTIP = "ic-tooltip";
const TOOLTIP_CONTAINER = ".ic-tooltip-container";
const YEAR_INPUT_ARIA_LABEL = 'input[aria-label="year"]';
const DAY_INPUT_ARIA_LABEL = 'input[aria-label="day"]';
const MONTH_INPUT_ARIA_LABEL = 'input[aria-label="month"]';

const ATTR_ARIA_LABEL = "aria-label";

const ARROW_UP_KEY = "{upArrow}";
const ARROW_DOWN_KEY = "{downArrow}";
const ARROW_LEFT_KEY = "{leftArrow}";
const ARROW_RIGHT_KEY = "{rightArrow}";
const ESCAPE_KEY = "{Esc}";
const ENTER_KEY = "{Enter}";
const HOME_KEY = "{Home}";
const END_KEY = "{End}";
const PAGE_UP_KEY = "{PageUp}";
const PAGE_DOWN_KEY = "{PageDown}";

const DEFAULT_TEST_THRESHOLD = 0.038;
const SCREENSHOT_DELAY = 500;

const checkDateInputValue = (date: Date | null) => {
  const currDay = (date && date.getDate()) || 0;
  const currMon = (date && date.getMonth() + 1) || 0;
  const currYear = (date && date.getFullYear()) || 0;
  let dayVal: number;
  let monthVal: number;
  let yearVal: number;
  cy.findShadowEl(DATE_PICKER, DATE_INPUT)
    .shadow()
    .find(".day-input")
    .invoke("val")
    .then((val: string) => {
      dayVal = Number(val);
    })
    .then(() => {
      expect(dayVal).to.eq(currDay);
    });
  cy.findShadowEl(DATE_PICKER, DATE_INPUT)
    .shadow()
    .find(".month-input")
    .invoke("val")
    .then((val: string) => {
      monthVal = Number(val);
    })
    .then(() => {
      expect(monthVal).to.eq(currMon);
    });
  cy.findShadowEl(DATE_PICKER, DATE_INPUT)
    .shadow()
    .find(".year-input")
    .invoke("val")
    .then((val: string) => {
      yearVal = Number(val);
    })
    .then(() => {
      expect(yearVal).to.eq(currYear);
    });
};

describe("IcDatePickers", () => {
  beforeEach(() => {
    cy.injectAxe();
    cy.viewport(500, 700);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render default variant", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);

    cy.compareSnapshot({
      name: "default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.03),
    });
  });

  it("should render default variant at max width", () => {
    mount(
      <IcDatePicker
        class="max-width"
        label={DEFAULT_LABEL}
        value={DEFAULT_VALUE}
      />
    );

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);

    cy.compareSnapshot({
      name: "default-max-width",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.03),
    });
  });

  it("should render default variant - month view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);

    cy.compareSnapshot({
      name: "default-month-view",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.033),
    });
  });

  it("should render default variant at max width - month view", () => {
    mount(
      <IcDatePicker
        class="max-width"
        label={DEFAULT_LABEL}
        value={DEFAULT_VALUE}
      />
    );

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);

    cy.compareSnapshot({
      name: "default-max-width-month-view",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.033),
    });
  });

  it("should render default variant - year view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.compareSnapshot({
      name: "default-year-view",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.023),
    });
  });

  it("should render default variant at max width - year view", () => {
    mount(
      <IcDatePicker
        class="max-width"
        label={DEFAULT_LABEL}
        value={DEFAULT_VALUE}
      />
    );

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.compareSnapshot({
      name: "default-max-width-year-view",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.023),
    });
  });

  it("should render small variant", () => {
    mount(
      <IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} size="small" />
    );

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);

    cy.compareSnapshot({
      name: "small",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.031),
    });
  });

  it("should render small variant at max width", () => {
    mount(
      <IcDatePicker
        class="max-width"
        label={DEFAULT_LABEL}
        value={DEFAULT_VALUE}
        size="small"
      />
    );

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);

    cy.compareSnapshot({
      name: "small-max-width",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.031),
    });
  });

  it("should render small variant - month view", () => {
    mount(
      <IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} size="small" />
    );

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();

    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);

    cy.compareSnapshot({
      name: "small-month-view",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.033),
    });
  });

  it("should render small variant at max width - month view", () => {
    mount(
      <IcDatePicker
        class="max-width"
        label={DEFAULT_LABEL}
        value={DEFAULT_VALUE}
        size="small"
      />
    );

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();

    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);

    cy.compareSnapshot({
      name: "small-max-width-month-view",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.033),
    });
  });

  it("should render small variant - year view", () => {
    mount(
      <IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} size="small" />
    );

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();

    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);

    cy.compareSnapshot({
      name: "small-year-view",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.024),
    });
  });

  it("should render small variant at max width - year view", () => {
    mount(
      <IcDatePicker
        class="max-width"
        label={DEFAULT_LABEL}
        value={DEFAULT_VALUE}
        size="small"
      />
    );

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();

    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);

    cy.compareSnapshot({
      name: "small-max-width-year-view",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.024),
    });
  });

  it("should render large variant", () => {
    mount(
      <IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} size="large" />
    );

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);

    cy.compareSnapshot({
      name: "large",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.031),
    });
  });

  it("should render large variant at max width", () => {
    mount(
      <IcDatePicker
        class="max-width"
        label={DEFAULT_LABEL}
        value={DEFAULT_VALUE}
        size="large"
      />
    );

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);

    cy.compareSnapshot({
      name: "large-max-width",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.031),
    });
  });

  it("should render large variant - month view", () => {
    mount(
      <IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} size="large" />
    );

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();

    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);

    cy.compareSnapshot({
      name: "large-month-view",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.033),
    });
  });

  it("should render large variant at max width - month view", () => {
    mount(
      <IcDatePicker
        class="max-width"
        label={DEFAULT_LABEL}
        value={DEFAULT_VALUE}
        size="large"
      />
    );

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();

    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);

    cy.compareSnapshot({
      name: "large-max-width-month-view",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.033),
    });
  });

  it("should render large variant - year view", () => {
    mount(
      <IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} size="large" />
    );

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();

    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);

    cy.compareSnapshot({
      name: "large-year-view",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.025),
    });
  });

  it("should render large variant at max width - year view", () => {
    mount(
      <IcDatePicker
        class="max-width"
        label={DEFAULT_LABEL}
        value={DEFAULT_VALUE}
        size="large"
      />
    );

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();

    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);

    cy.compareSnapshot({
      name: "large-max-width-year-view",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.025),
    });
  });

  it("should hide go to today button", () => {
    mount(
      <IcDatePicker
        label={DEFAULT_LABEL}
        openAtDate={DEFAULT_VALUE}
        showPickerTodayButton={false}
      />
    );

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();

    cy.wait(SCREENSHOT_DELAY).compareSnapshot({
      name: "goto-today-hidden",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.027),
    });
  });

  it("should hide clear button", () => {
    mount(
      <IcDatePicker
        label={DEFAULT_LABEL}
        openAtDate={DEFAULT_VALUE}
        showPickerClearButton={false}
      />
    );

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();

    cy.wait(SCREENSHOT_DELAY).compareSnapshot({
      name: "clear-hidden",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.028),
    });
  });

  it("should navigate to today when button pressed", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, TODAY_BUTTON_ID).click();

    cy.findShadowEl(DATE_PICKER, TODAY_BUTTON_ID).should(
      HAVE_CLASS,
      "ic-button-disabled"
    );
    cy.findShadowEl(DATE_PICKER, TODAY_BUTTON_ID)
      .shadow()
      .find(BUTTON)
      .should(BE_DISABLED);

    cy.findShadowEl(DATE_PICKER, FOCUSSED_DAY_BTN_CLASS).click();

    checkDateInputValue(new Date());
  });

  it("should clear date when calendar clear button pressed", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();

    cy.get(DATE_PICKER).invoke("on", "icChange", cy.stub().as("icDateChanged"));

    cy.findShadowEl(DATE_PICKER, CLEAR_BUTTON_ID).click();

    cy.get("@icDateChanged").should((stub) => {
      expect(stub.getCall(0).args[0].detail.value).to.equal(null);
    });

    cy.findShadowEl(DATE_PICKER, CLEAR_BUTTON_ID).should(
      HAVE_CLASS,
      "ic-button-disabled"
    );
    cy.findShadowEl(DATE_PICKER, CLEAR_BUTTON_ID)
      .shadow()
      .find(BUTTON)
      .should(BE_DISABLED);

    checkDateInputValue(null);
    cy.findShadowEl(DATE_PICKER, FOCUSSED_DAY_BTN_CLASS)
      .should(BE_VISIBLE)
      .and(HAVE_ATTR, ATTR_ARIA_LABEL, "Choose Friday, 15 December 2023");
  });

  it("should navigate to previous month when button pressed - day view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, PREV_MONTH_BUTTON_ID).click();
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "November"
    );
  });

  it("should navigate to next month when button pressed - day view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, NEXT_MONTH_BUTTON_ID).click();
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "January"
    );
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "2024"
    );
  });

  it("should navigate to previous year when button pressed - day view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, PREV_YEAR_BUTTON_ID).click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "2022"
    );
  });

  it("should navigate to next year when button pressed - day view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, NEXT_YEAR_BUTTON_ID).click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "2024"
    );
  });

  it("should navigate to previous month when left arrow key pressed - day view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ARROW_LEFT_KEY);
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "November"
    );
  });

  it("should navigate to previous month whenup arrow key pressed - day view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ARROW_UP_KEY);
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "November"
    );
  });

  it("should navigate to next month when right arrow key pressed - day view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ARROW_RIGHT_KEY);
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "January"
    );
  });

  it("should navigate to next month when down arrow key pressed - day view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ARROW_DOWN_KEY);
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "January"
    );
  });

  it("should navigate to previous year when left arrow key pressed - day view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ARROW_LEFT_KEY);
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "2022"
    );
  });

  it("should navigate to previous year when up arrow key pressed - day view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ARROW_UP_KEY);
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "2022"
    );
  });

  it("should navigate to next year when right arrow key pressed - day view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ARROW_RIGHT_KEY);
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "2024"
    );
  });

  it("should navigate to next year when down arrow key pressed - day view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ARROW_DOWN_KEY);
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "2024"
    );
  });

  it("should test keyboard interaction in day view - rightArrow", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value="31/12/2023" />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, FOCUSSED_DAY_BTN_CLASS)
      .focus()
      .type(ARROW_RIGHT_KEY);
    cy.findShadowEl(DATE_PICKER, FOCUSSED_DAY_BTN_CLASS)
      .should(HAVE_TEXT, "1")
      .and(HAVE_ATTR, ATTR_ARIA_LABEL, "Choose Monday, 1 January 2024");
  });

  it("should test keyboard interaction in day view - leftArrow", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value="01/12/2023" />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, FOCUSSED_DAY_BTN_CLASS)
      .focus()
      .type(ARROW_LEFT_KEY);
    cy.findShadowEl(DATE_PICKER, FOCUSSED_DAY_BTN_CLASS)
      .should(HAVE_TEXT, "30")
      .and(HAVE_ATTR, ATTR_ARIA_LABEL, "Choose Thursday, 30 November 2023");
  });

  it("should test keyboard interaction in day view - upArrow", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, FOCUSSED_DAY_BTN_CLASS)
      .focus()
      .type(ARROW_UP_KEY);
    cy.findShadowEl(DATE_PICKER, FOCUSSED_DAY_BTN_CLASS).should(HAVE_TEXT, "8");
  });

  it("should test keyboard interaction in day view - downArrow", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, FOCUSSED_DAY_BTN_CLASS)
      .focus()
      .type(ARROW_DOWN_KEY);
    cy.findShadowEl(DATE_PICKER, FOCUSSED_DAY_BTN_CLASS).should(
      HAVE_TEXT,
      "22"
    );
  });

  it("should test keyboard interaction in day view - Home", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, FOCUSSED_DAY_BTN_CLASS).focus().type(HOME_KEY);
    cy.findShadowEl(DATE_PICKER, FOCUSSED_DAY_BTN_CLASS).should(HAVE_TEXT, "1");
  });

  it("should test keyboard interaction in day view - End", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, FOCUSSED_DAY_BTN_CLASS).focus().type(END_KEY);
    cy.findShadowEl(DATE_PICKER, FOCUSSED_DAY_BTN_CLASS).should(
      HAVE_TEXT,
      "31"
    );
  });

  it("should test keyboard interaction in day view - PageUp", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, FOCUSSED_DAY_BTN_CLASS)
      .focus()
      .type(PAGE_UP_KEY);
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "November"
    );
  });

  it("should test keyboard interaction in day view - PageDown", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, FOCUSSED_DAY_BTN_CLASS)
      .focus()
      .type(PAGE_DOWN_KEY);
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "January"
    );
  });

  it("should test keyboard interaction in day view - Shift + PageUp", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, FOCUSSED_DAY_BTN_CLASS)
      .focus()
      .type("{shift}{PageUp}");
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "2022"
    );
  });

  it("should test keyboard interaction in day view - Shift + PageDown", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, FOCUSSED_DAY_BTN_CLASS)
      .focus()
      .type("{shift}{PageDown}");
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "2024"
    );
  });

  it("should close picker when Escape pressed", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, FOCUSSED_DAY_BTN_CLASS)
      .focus()
      .type(ESCAPE_KEY);

    cy.compareSnapshot({
      name: "escape-to-close",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should not move focus to calendar button when Escape key pressed in input", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(".day-input")
      .type(ESCAPE_KEY);

    cy.compareSnapshot({
      name: "escape-pressed-in-input",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.002),
    });
  });

  it("should hide tooltip on calendar button when focused and Escape key pressed", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .shadow()
      .find(BUTTON)
      .focus();

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .shadow()
      .find(TOOLTIP)
      .shadow()
      .find(TOOLTIP_CONTAINER)
      .should(BE_VISIBLE);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .shadow()
      .find(BUTTON)
      .type(ESCAPE_KEY);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .shadow()
      .find(TOOLTIP)
      .shadow()
      .find(TOOLTIP_CONTAINER)
      .should(NOT_BE_VISIBLE);
  });

  it("should hide tooltip on clear button when focused and Escape key pressed", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CLEAR_BUTTON_ID)
      .shadow()
      .find(BUTTON)
      .focus();

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CLEAR_BUTTON_ID)
      .shadow()
      .find(TOOLTIP)
      .shadow()
      .find(TOOLTIP_CONTAINER)
      .should(BE_VISIBLE);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CLEAR_BUTTON_ID)
      .shadow()
      .find(BUTTON)
      .type(ESCAPE_KEY);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CLEAR_BUTTON_ID)
      .shadow()
      .find(TOOLTIP)
      .shadow()
      .find(TOOLTIP_CONTAINER)
      .should(NOT_BE_VISIBLE);
  });

  it("should close on document click", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.get("body").click();

    cy.compareSnapshot({
      name: "click-to-close",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should select the focussed date when Enter pressed", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} />);

    cy.checkHydrated(DATE_PICKER);

    cy.get(DATE_PICKER).invoke("on", "icChange", cy.stub().as("icDateChanged"));

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, FOCUSSED_DAY_BTN_CLASS)
      .focus()
      .type(ENTER_KEY);

    const expectedDate = new Date();

    cy.get("@icDateChanged").should((stub) => {
      expect(stub.getCall(0).args[0].detail.value.getDay()).to.equal(
        expectedDate.getDay()
      );
      expect(stub.getCall(0).args[0].detail.value.getMonth()).to.equal(
        expectedDate.getMonth()
      );
      expect(stub.getCall(0).args[0].detail.value.getFullYear()).to.equal(
        expectedDate.getFullYear()
      );
    });

    checkDateInputValue(expectedDate);
  });

  // Month view tests

  it("should navigate to next month when arrow right key pressed - month view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ARROW_RIGHT_KEY);
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "January"
    );
    cy.findShadowEl(DATE_PICKER, SELECTED_MONTH_BTN_CLASS).should(
      HAVE_TEXT,
      "January"
    );
  });

  it("should navigate to next month when arrow down key pressed - month view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ARROW_DOWN_KEY);
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "January"
    );
    cy.findShadowEl(DATE_PICKER, SELECTED_MONTH_BTN_CLASS).should(
      HAVE_TEXT,
      "January"
    );
  });

  it("should navigate to previous month when arrow left key pressed - month view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ARROW_LEFT_KEY);
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "November"
    );
    cy.findShadowEl(DATE_PICKER, SELECTED_MONTH_BTN_CLASS).should(
      HAVE_TEXT,
      "November"
    );
  });

  it("should navigate to previous month when arrow up key pressed - month view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ARROW_UP_KEY);
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "November"
    );
    cy.findShadowEl(DATE_PICKER, SELECTED_MONTH_BTN_CLASS).should(
      HAVE_TEXT,
      "November"
    );
  });

  it("should focus and select January button when Home key pressed - month view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(HOME_KEY);
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "January"
    );
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "2023"
    );
    cy.findShadowEl(DATE_PICKER, FOCUSSED_MONTH_BTN_CLASS).should(
      HAVE_TEXT,
      "January"
    );
  });

  it("should focus & select December button when End key pressed - month view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value="01/01/2023" />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(END_KEY);
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "December"
    );
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "2023"
    );
    cy.findShadowEl(DATE_PICKER, FOCUSSED_MONTH_BTN_CLASS).should(
      HAVE_TEXT,
      "December"
    );
  });

  it("should return to day view when escape pressed - month view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ESCAPE_KEY);
    cy.findShadowEl(DATE_PICKER, SELECTED_DAY_BTN_CLASS)
      .should(BE_VISIBLE)
      .and(HAVE_ATTR, ATTR_ARIA_LABEL, "Choose Friday, 15 December 2023");
  });

  it("should return to day view when month picker button clicked - month view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, SELECTED_DAY_BTN_CLASS)
      .should(BE_VISIBLE)
      .and(HAVE_ATTR, ATTR_ARIA_LABEL, "Choose Friday, 15 December 2023");
  });

  it("should select month when enter pressed - month view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ARROW_RIGHT_KEY + ENTER_KEY);
    cy.findShadowEl(DATE_PICKER, FOCUSSED_DAY_BTN_CLASS)
      .should(BE_VISIBLE)
      .and(HAVE_ATTR, ATTR_ARIA_LABEL, "Choose Monday, 15 January 2024");
  });

  it("should select month when a month clicked - month view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, "ic-button[data-month='0']")
      .shadow()
      .find(BUTTON)
      .click();
    cy.findShadowEl(DATE_PICKER, FOCUSSED_DAY_BTN_CLASS)
      .should(BE_VISIBLE)
      .and(HAVE_ATTR, ATTR_ARIA_LABEL, "Choose Sunday, 15 January 2023");
  });

  it("should update year when moving from December - month view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ARROW_RIGHT_KEY);
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "January"
    );
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "2024"
    );
  });

  it("should update year when moving from January - month view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value="01/01/2024" />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ARROW_LEFT_KEY);
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "December"
    );
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "2023"
    );
  });

  it("should not update year when moving from December - month view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value="01/12/2023" />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, SELECTED_MONTH_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ARROW_RIGHT_KEY);
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "December"
    );
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "2023"
    );
    cy.findShadowEl(DATE_PICKER, FOCUSSED_MONTH_BTN_CLASS).should(
      HAVE_TEXT,
      "January"
    );
  });

  it("should not update year when moving from January - month view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value="01/01/2024" />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, SELECTED_MONTH_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ARROW_LEFT_KEY);
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "January"
    );
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "2024"
    );
    cy.findShadowEl(DATE_PICKER, FOCUSSED_MONTH_BTN_CLASS).should(
      HAVE_TEXT,
      "December"
    );
  });

  it("should focus January button when Home key pressed - month view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, SELECTED_MONTH_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(HOME_KEY);
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "December"
    );
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "2023"
    );
    cy.findShadowEl(DATE_PICKER, FOCUSSED_MONTH_BTN_CLASS).should(
      HAVE_TEXT,
      "January"
    );
  });

  it("should focus December button when End key pressed - month view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, SELECTED_MONTH_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(END_KEY);
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "December"
    );
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "2023"
    );
    cy.findShadowEl(DATE_PICKER, FOCUSSED_MONTH_BTN_CLASS).should(
      HAVE_TEXT,
      "December"
    );
  });

  // Year view tests

  it("should navigate to next year when arrow right key pressed - year view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value="01/01/2029" />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ARROW_RIGHT_KEY);
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "2030"
    );
    cy.findShadowEl(DATE_PICKER, SELECTED_YEAR_BTN_CLASS).should(
      HAVE_TEXT,
      "2030"
    );
    cy.findShadowEl(DATE_PICKER, PREV_DECADE_BUTTON_ID).should(
      HAVE_TEXT,
      "2020s"
    );
    cy.findShadowEl(DATE_PICKER, NEXT_DECADE_BUTTON_ID).should(
      HAVE_TEXT,
      "2040s"
    );
  });

  it("should navigate to next year when arrow down key pressed - year view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value="01/01/2029" />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ARROW_DOWN_KEY);
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "2030"
    );
    cy.findShadowEl(DATE_PICKER, SELECTED_YEAR_BTN_CLASS).should(
      HAVE_TEXT,
      "2030"
    );
    cy.findShadowEl(DATE_PICKER, PREV_DECADE_BUTTON_ID).should(
      HAVE_TEXT,
      "2020s"
    );
    cy.findShadowEl(DATE_PICKER, NEXT_DECADE_BUTTON_ID).should(
      HAVE_TEXT,
      "2040s"
    );
  });

  it("should navigate to previous year when arrow left key pressed - year view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value="01/12/2020" />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ARROW_LEFT_KEY);
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "2019"
    );
    cy.findShadowEl(DATE_PICKER, SELECTED_YEAR_BTN_CLASS).should(
      HAVE_TEXT,
      "2019"
    );
    cy.findShadowEl(DATE_PICKER, PREV_DECADE_BUTTON_ID).should(
      HAVE_TEXT,
      "2000s"
    );
    cy.findShadowEl(DATE_PICKER, NEXT_DECADE_BUTTON_ID).should(
      HAVE_TEXT,
      "2020s"
    );
  });

  it("should navigate to previous year when arrow up key pressed - year view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value="01/12/2020" />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ARROW_UP_KEY);
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "2019"
    );
    cy.findShadowEl(DATE_PICKER, SELECTED_YEAR_BTN_CLASS).should(
      HAVE_TEXT,
      "2019"
    );
    cy.findShadowEl(DATE_PICKER, PREV_DECADE_BUTTON_ID).should(
      HAVE_TEXT,
      "2000s"
    );
    cy.findShadowEl(DATE_PICKER, NEXT_DECADE_BUTTON_ID).should(
      HAVE_TEXT,
      "2020s"
    );
  });

  it("should focus & select 2020 button when Home key pressed - year view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(HOME_KEY);
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "2020"
    );
    cy.findShadowEl(DATE_PICKER, SELECTED_YEAR_BTN_CLASS).should(
      HAVE_TEXT,
      "2020"
    );
    cy.findShadowEl(DATE_PICKER, FOCUSSED_YEAR_BTN_CLASS).should(
      HAVE_TEXT,
      "2020"
    );
  });

  it("should focus & select 2029 button when End key pressed - year view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(END_KEY);
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "2029"
    );
    cy.findShadowEl(DATE_PICKER, SELECTED_YEAR_BTN_CLASS).should(
      HAVE_TEXT,
      "2029"
    );
    cy.findShadowEl(DATE_PICKER, FOCUSSED_YEAR_BTN_CLASS).should(
      HAVE_TEXT,
      "2029"
    );
  });

  it("should focus & select 2013 button when PageUp key pressed - year view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(PAGE_UP_KEY);
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "2013"
    );
    cy.findShadowEl(DATE_PICKER, SELECTED_YEAR_BTN_CLASS).should(
      HAVE_TEXT,
      "2013"
    );
    cy.findShadowEl(DATE_PICKER, FOCUSSED_YEAR_BTN_CLASS).should(
      HAVE_TEXT,
      "2013"
    );
  });

  it("should focus & select 2013 button when PageDown key pressed - year view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(PAGE_DOWN_KEY);
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "2033"
    );
    cy.findShadowEl(DATE_PICKER, SELECTED_YEAR_BTN_CLASS).should(
      HAVE_TEXT,
      "2033"
    );
    cy.findShadowEl(DATE_PICKER, FOCUSSED_YEAR_BTN_CLASS).should(
      HAVE_TEXT,
      "2033"
    );
  });

  it("should return to day view when escape pressed - year view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ESCAPE_KEY);
    cy.findShadowEl(DATE_PICKER, SELECTED_DAY_BTN_CLASS)
      .should(BE_VISIBLE)
      .and(HAVE_ATTR, ATTR_ARIA_LABEL, "Choose Friday, 15 December 2023");
  });

  it("should return to day view when year picker button clicked - year view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, SELECTED_DAY_BTN_CLASS)
      .should(BE_VISIBLE)
      .and(HAVE_ATTR, ATTR_ARIA_LABEL, "Choose Friday, 15 December 2023");
  });

  it("should select year when enter pressed - year view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ARROW_RIGHT_KEY + ENTER_KEY);
    cy.findShadowEl(DATE_PICKER, FOCUSSED_DAY_BTN_CLASS)
      .should(BE_VISIBLE)
      .and(HAVE_ATTR, ATTR_ARIA_LABEL, "Choose Sunday, 15 December 2024");
  });

  it("should select year when a year clicked - year view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, "ic-button[data-year='2027']")
      .shadow()
      .find(BUTTON)
      .click();
    cy.findShadowEl(DATE_PICKER, FOCUSSED_DAY_BTN_CLASS)
      .should(BE_VISIBLE)
      .and(HAVE_ATTR, ATTR_ARIA_LABEL, "Choose Wednesday, 15 December 2027");
  });

  it("should move decades when buttons clicked - year view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, PREV_DECADE_BUTTON_ID)
      .shadow()
      .find(BUTTON)
      .click();
    cy.findShadowEl(DATE_PICKER, PREV_DECADE_BUTTON_ID).should(
      HAVE_TEXT,
      "2000s"
    );

    cy.findShadowEl(DATE_PICKER, NEXT_DECADE_BUTTON_ID)
      .shadow()
      .find(BUTTON)
      .click();
    cy.findShadowEl(DATE_PICKER, NEXT_DECADE_BUTTON_ID).should(
      HAVE_TEXT,
      "2030s"
    );
  });

  it("should update focussed year, but not selected year when arrow right key pressed - year view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, SELECTED_YEAR_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ARROW_RIGHT_KEY);
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "2023"
    );
    cy.findShadowEl(DATE_PICKER, SELECTED_YEAR_BTN_CLASS).should(
      HAVE_TEXT,
      "2023"
    );
    cy.findShadowEl(DATE_PICKER, FOCUSSED_YEAR_BTN_CLASS).should(
      HAVE_TEXT,
      "2024"
    );
  });

  it("should update focussed year, but not selected year when arrow down key pressed - year view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, SELECTED_YEAR_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ARROW_DOWN_KEY);
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "2023"
    );
    cy.findShadowEl(DATE_PICKER, SELECTED_YEAR_BTN_CLASS).should(
      HAVE_TEXT,
      "2023"
    );
    cy.findShadowEl(DATE_PICKER, FOCUSSED_YEAR_BTN_CLASS).should(
      HAVE_TEXT,
      "2024"
    );
  });

  it("should update focussed year, but not selected year when arrow left key pressed - year view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, SELECTED_YEAR_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ARROW_LEFT_KEY);
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "2023"
    );
    cy.findShadowEl(DATE_PICKER, SELECTED_YEAR_BTN_CLASS).should(
      HAVE_TEXT,
      "2023"
    );
    cy.findShadowEl(DATE_PICKER, FOCUSSED_YEAR_BTN_CLASS).should(
      HAVE_TEXT,
      "2022"
    );
  });

  it("should update focussed year, but not selected year when arrow up key pressed - year view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, SELECTED_YEAR_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ARROW_UP_KEY);
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "2023"
    );
    cy.findShadowEl(DATE_PICKER, SELECTED_YEAR_BTN_CLASS).should(
      HAVE_TEXT,
      "2023"
    );
    cy.findShadowEl(DATE_PICKER, FOCUSSED_YEAR_BTN_CLASS).should(
      HAVE_TEXT,
      "2022"
    );
  });

  it("should update focussed year, but not selected year when Home key pressed - year view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, SELECTED_YEAR_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(HOME_KEY);
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "2023"
    );
    cy.findShadowEl(DATE_PICKER, SELECTED_YEAR_BTN_CLASS).should(
      HAVE_TEXT,
      "2023"
    );
    cy.findShadowEl(DATE_PICKER, FOCUSSED_YEAR_BTN_CLASS).should(
      HAVE_TEXT,
      "2020"
    );
  });

  it("should update focussed year, but not selected year when End key pressed - year view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, SELECTED_YEAR_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(END_KEY);
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "2023"
    );
    cy.findShadowEl(DATE_PICKER, SELECTED_YEAR_BTN_CLASS).should(
      HAVE_TEXT,
      "2023"
    );
    cy.findShadowEl(DATE_PICKER, FOCUSSED_YEAR_BTN_CLASS).should(
      HAVE_TEXT,
      "2029"
    );
  });

  it("should go back a decade and but not select year when moving back from first year in view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value="01/01/2020" />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, SELECTED_YEAR_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ARROW_LEFT_KEY);
    cy.findShadowEl(DATE_PICKER, PREV_DECADE_BUTTON_ID).should(
      HAVE_TEXT,
      "2000s"
    );
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "2020"
    );
    cy.findShadowEl(DATE_PICKER, FOCUSSED_YEAR_BTN_CLASS).should(
      HAVE_TEXT,
      "2019"
    );
    cy.findShadowEl(DATE_PICKER, NEXT_DECADE_BUTTON_ID).should(
      HAVE_TEXT,
      "2020s"
    );
  });

  it("should go forward a decade and but not select year when moving forward from last year in view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value="01/01/2029" />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, SELECTED_YEAR_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ARROW_RIGHT_KEY);
    cy.findShadowEl(DATE_PICKER, PREV_DECADE_BUTTON_ID).should(
      HAVE_TEXT,
      "2020s"
    );
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "2029"
    );
    cy.findShadowEl(DATE_PICKER, FOCUSSED_YEAR_BTN_CLASS).should(
      HAVE_TEXT,
      "2030"
    );
    cy.findShadowEl(DATE_PICKER, NEXT_DECADE_BUTTON_ID).should(
      HAVE_TEXT,
      "2040s"
    );
  });

  it("should move back a decade and update focussed year when PageUp key pressed - year view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, SELECTED_YEAR_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(PAGE_UP_KEY);
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "2023"
    );
    cy.findShadowEl(DATE_PICKER, FOCUSSED_YEAR_BTN_CLASS).should(
      HAVE_TEXT,
      "2013"
    );
  });

  it("should move forward a decade and update focussed year when PageDown key pressed - year view", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} value={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).click();
    cy.findShadowEl(DATE_PICKER, SELECTED_YEAR_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(PAGE_DOWN_KEY);
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "2023"
    );
    cy.findShadowEl(DATE_PICKER, FOCUSSED_YEAR_BTN_CLASS).should(
      HAVE_TEXT,
      "2033"
    );
  });

  // testing props

  it("should test 'openAtDate' prop", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} openAtDate={DEFAULT_VALUE} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();

    cy.wait(SCREENSHOT_DELAY).compareSnapshot({
      name: "open-at-date",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.029),
    });

    cy.findShadowEl(DATE_PICKER, FOCUSSED_DAY_BTN_CLASS)
      .should(BE_VISIBLE)
      .and(HAVE_ATTR, ATTR_ARIA_LABEL, "Choose Friday, 15 December 2023");
    cy.findShadowEl(DATE_PICKER, SELECTED_DAY_BTN_CLASS).should(NOT_EXIST);
  });

  it("should test month first date format prop", () => {
    mount(
      <IcDatePicker
        label={DEFAULT_LABEL}
        openAtDate={DEFAULT_VALUE}
        dateFormat="MM/DD/YYYY"
      />
    );

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, FOCUSSED_DAY_BTN_CLASS).click();

    checkDateInputValue(new Date(2023, 11, 15));
  });

  it("should test year first date format prop", () => {
    mount(
      <IcDatePicker
        label={DEFAULT_LABEL}
        openAtDate={DEFAULT_VALUE}
        dateFormat="YYYY/MM/DD"
      />
    );

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, FOCUSSED_DAY_BTN_CLASS).click();

    checkDateInputValue(new Date(2023, 11, 15));
  });

  it("should test disabled variant", () => {
    mount(<IcDatePicker label={DEFAULT_LABEL} disabled />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .shadow()
      .find(BUTTON)
      .should("be.disabled");

    cy.compareSnapshot({
      name: "disabled",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.002),
    });

    // check input becomes enabled when prop changed
    cy.get(DATE_PICKER)
      .invoke("prop", "disabled", false)
      .then(() => {
        cy.findShadowEl(DATE_PICKER, DATE_INPUT)
          .shadow()
          .find(CALENDAR_BUTTON_ID)
          .shadow()
          .find(BUTTON)
          .should("not.be.disabled");
      });
  });

  it("should test 'invalidDateMessage' prop", () => {
    const msg = "Invalid date.";
    mount(<IcDatePicker label={DEFAULT_LABEL} invalidDateMessage={msg} />);

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(DAY_INPUT_ARIA_LABEL)
      .type("18");
    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(MONTH_INPUT_ARIA_LABEL)
      .type("14");
    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(YEAR_INPUT_ARIA_LABEL)
      .type("2000")
      .wait(200);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(INPUT_VALIDATION)
      .should(CONTAIN_TEXT, msg);
  });

  it("should test 'disableDays' prop", () => {
    mount(
      <IcDatePicker
        label={DEFAULT_LABEL}
        openAtDate="02/12/2023"
        disableDays={[0, 6]}
      />
    );

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();

    cy.wait(SCREENSHOT_DELAY).compareSnapshot({
      name: "disable-weekends",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.026),
    });
  });

  it("should test 'disableDays' and 'disableDaysMessage' props", () => {
    const msg = "Saturdays and Sundays are not allowed.";
    mount(
      <IcDatePicker
        label={DEFAULT_LABEL}
        value="02/12/2023"
        disableDays={[0, 6]}
        disableDaysMessage={msg}
      />
    );

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(INPUT_VALIDATION)
      .should(CONTAIN_TEXT, msg);

    // change props to not allow mondays and change message text
    const newMsg = "Mondays are not allowed.";
    cy.get(DATE_PICKER)
      .invoke("prop", "value", "04/12/2023")
      .then(() => {
        cy.get(DATE_PICKER)
          .invoke("prop", "disableDays", [1])
          .then(() => {
            cy.get(DATE_PICKER)
              .invoke("prop", "disableDaysMessage", newMsg)
              .then(() => {
                cy.findShadowEl(DATE_PICKER, DATE_INPUT)
                  .shadow()
                  .find(INPUT_VALIDATION)
                  .should(CONTAIN_TEXT, newMsg);
              });
          });
      });
  });

  it("should test 'disableFuture' and 'disableFutureMessage' props", () => {
    const msg = "Days in the future are not allowed.";
    mount(
      <IcDatePicker
        label={DEFAULT_LABEL}
        value="02/12/2223"
        disableFuture
        disableFutureMessage={msg}
      />
    );

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(INPUT_VALIDATION)
      .should(CONTAIN_TEXT, msg);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();

    cy.findShadowEl(DATE_PICKER, FOCUSSED_DAY_BTN_CLASS)
      .parent()
      .next()
      .find(DAY_BTN_CLASS)
      .should(BE_DISABLED);
    cy.findShadowEl(DATE_PICKER, FOCUSSED_DAY_BTN_CLASS)
      .parent()
      .prev()
      .find(DAY_BTN_CLASS)
      .should(NOT_BE_DISABLED);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();

    // change prop to allow future dates
    cy.get(DATE_PICKER)
      .invoke("prop", "disableFuture", false)
      .then(() => {
        cy.findShadowEl(DATE_PICKER, DATE_INPUT)
          .shadow()
          .find(CALENDAR_BUTTON_ID)
          .click();
        cy.findShadowEl(DATE_PICKER, FOCUSSED_DAY_BTN_CLASS)
          .parent()
          .next()
          .find(DAY_BTN_CLASS)
          .click();

        const day = new Date();
        day.setDate(day.getDate() + 1);
        checkDateInputValue(day);

        cy.findShadowEl(DATE_PICKER, DATE_INPUT)
          .shadow()
          .find(INPUT_VALIDATION)
          .should(NOT_EXIST);
      });
  });

  it("should test 'disablePast' and 'disablePastMessage' props", () => {
    const msg = "Days in the past are not allowed.";
    mount(
      <IcDatePicker
        label={DEFAULT_LABEL}
        value={DEFAULT_VALUE}
        disablePast
        disablePastMessage={msg}
      />
    );

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(INPUT_VALIDATION)
      .should(CONTAIN_TEXT, msg);
    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, FOCUSSED_DAY_BTN_CLASS)
      .parent()
      .prev()
      .find(DAY_BTN_CLASS)
      .should(BE_DISABLED);
    cy.findShadowEl(DATE_PICKER, FOCUSSED_DAY_BTN_CLASS)
      .parent()
      .next()
      .find(DAY_BTN_CLASS)
      .should(NOT_BE_DISABLED);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();

    // change prop to allow past dates
    cy.get(DATE_PICKER)
      .invoke("prop", "disablePast", false)
      .then(() => {
        cy.findShadowEl(DATE_PICKER, DATE_INPUT)
          .shadow()
          .find(CALENDAR_BUTTON_ID)
          .click();
        cy.findShadowEl(DATE_PICKER, FOCUSSED_DAY_BTN_CLASS)
          .parent()
          .prev()
          .find(DAY_BTN_CLASS)
          .click();

        const day = new Date();
        day.setDate(day.getDate() - 1);
        checkDateInputValue(day);

        cy.findShadowEl(DATE_PICKER, DATE_INPUT)
          .shadow()
          .find(INPUT_VALIDATION)
          .should(NOT_EXIST);
      });
  });

  it("should test 'helperText' and 'required' props", () => {
    const text = "This is some custom helper text.";
    mount(
      <IcDatePicker
        label={DEFAULT_LABEL}
        value={DEFAULT_VALUE}
        helperText={text}
        required
      />
    );

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find("ic-input-label")
      .should(CONTAIN_TEXT, text);
    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find("ic-input-label")
      .should(CONTAIN_TEXT, DEFAULT_LABEL + " *");

    // change prop to not be required
    cy.get(DATE_PICKER)
      .invoke("prop", "required", false)
      .then(() => {
        cy.findShadowEl(DATE_PICKER, DATE_INPUT)
          .shadow()
          .find("ic-input-label")
          .should(`not.${CONTAIN_TEXT}`, "*");
      });
  });

  it("should test 'showDaysOutsideMonth' and 'startOfWeek' props", () => {
    mount(
      <IcDatePicker
        label={DEFAULT_LABEL}
        openAtDate={DEFAULT_VALUE}
        showDaysOutsideMonth={false}
        startOfWeek={0}
      />
    );

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();

    cy.wait(SCREENSHOT_DELAY).compareSnapshot({
      name: "days-outside-month-hidden",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.026),
    });

    cy.get(DATE_PICKER)
      .invoke("prop", "startOfWeek", "4")
      .then(() => {
        cy.wait(SCREENSHOT_DELAY).compareSnapshot({
          name: "start-of-week",
          testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.026),
        });
      });
  });

  it("should test 'min' and 'max' props", () => {
    mount(
      <IcDatePicker label={DEFAULT_LABEL} min="2023-07-01" max="2023-07-31" />
    );

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);

    cy.compareSnapshot({
      name: "min-max",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.027),
    });
  });

  it("should test 'min' and 'max' props - month view", () => {
    mount(
      <IcDatePicker label={DEFAULT_LABEL} min="2023-07-01" max="2023-07-31" />
    );

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, MONTH_PICKER_BTN_CLASS).click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);

    cy.compareSnapshot({
      name: "min-max-month-view",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.012),
    });
  });

  it("should test 'min' and 'max' props - year view", () => {
    mount(
      <IcDatePicker label={DEFAULT_LABEL} min="2023-07-01" max="2023-07-31" />
    );

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();
    cy.findShadowEl(DATE_PICKER, YEAR_PICKER_BTN_CLASS).click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);

    cy.compareSnapshot({
      name: "min-max-year-view",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.009),
    });
  });

  it("should test validation props", () => {
    const msg = "warning text";
    mount(
      <IcDatePicker
        label={DEFAULT_LABEL}
        min="2023-07-01"
        max="2023-07-31"
        validationStatus="warning"
        validationText={msg}
      />
    );

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(INPUT_VALIDATION)
      .should(CONTAIN_TEXT, msg);
    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find("ic-input-component-container")
      .should(HAVE_CLASS, "ic-input-component-container-warning");
  });

  it("should test picker opens above input when not enough room below", () => {
    mount(
      <div style={{ overflow: "none", height: "700px" }}>
        <IcDatePicker
          style={{ position: "absolute", bottom: "60px" }}
          label={DEFAULT_LABEL}
          openAtDate={DEFAULT_VALUE}
          showDaysOutsideMonth={false}
          startOfWeek={0}
        />
      </div>
    );

    cy.checkHydrated(DATE_PICKER);

    cy.findShadowEl(DATE_PICKER, DATE_INPUT)
      .shadow()
      .find(CALENDAR_BUTTON_ID)
      .click();

    cy.wait(SCREENSHOT_DELAY).compareSnapshot({
      name: "position-above",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.016),
    });
  });
});
