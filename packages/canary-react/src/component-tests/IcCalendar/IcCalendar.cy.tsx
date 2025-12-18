/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />
import "./IcCalendar.css";
import React from "react";
import { mount } from "cypress/react";
import { IcCalendar } from "../../components";
import { setThresholdBasedOnEnv } from "@ukic/react/cypress/utils/helpers";

import {
  BE_DISABLED,
  NOT_BE_DISABLED,
  NOT_EXIST,
  HAVE_CLASS,
  HAVE_TEXT,
  HAVE_ATTR,
  BE_VISIBLE,
} from "@ukic/react/src/component-tests/utils/constants";

const CALENDAR = "ic-calendar";
const BUTTON = "button";
const DEFAULT_VALUE = "15/12/2023";
const NEW_VALUE = "04/11/2024";
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

const DEFAULT_TEST_THRESHOLD = 0;
const SCREENSHOT_DELAY = 500;

describe("IcCalendar end-to-end, visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.injectAxe();
    cy.viewport(500, 700);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render default variant", () => {
    mount(<IcCalendar value={DEFAULT_VALUE} />);

    cy.checkHydrated(CALENDAR);

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);

    cy.compareSnapshot({
      name: "/default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.037),
    });
  });

  it("should render default variant in dark mode", () => {
    mount(
      <div style={{ padding: "10px", backgroundColor: "#000000" }}>
        <IcCalendar value={DEFAULT_VALUE} theme="dark" />
      </div>
    );

    cy.checkHydrated(CALENDAR);

    // cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.wait(SCREENSHOT_DELAY);

    cy.compareSnapshot({
      name: "/default-dark-mode",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.037),
    });
  });

  it("should render default variant - month view", () => {
    mount(<IcCalendar value={DEFAULT_VALUE} />);

    cy.checkHydrated(CALENDAR);

    cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);

    cy.compareSnapshot({
      name: "/default-month-view",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.035),
    });
  });

  it("should render default variant in dark mode - month view", () => {
    mount(
      <div style={{ padding: "10px", backgroundColor: "#000000" }}>
        <IcCalendar value={DEFAULT_VALUE} theme="dark" />
      </div>
    );

    cy.checkHydrated(CALENDAR);

    cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).click();

    // cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.wait(SCREENSHOT_DELAY);

    cy.compareSnapshot({
      name: "/default-month-view-dark-mode",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
    });
  });

  it("should render default variant - year view", () => {
    mount(<IcCalendar value={DEFAULT_VALUE} />);

    cy.checkHydrated(CALENDAR);

    cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.compareSnapshot({
      name: "/default-year-view",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.029),
    });
  });

  it("should render default variant in dark mode - year view", () => {
    mount(
      <div style={{ padding: "10px", backgroundColor: "#000000" }}>
        <IcCalendar value={DEFAULT_VALUE} theme="dark" />
      </div>
    );

    cy.checkHydrated(CALENDAR);

    cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).click();

    //cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);
    cy.wait(SCREENSHOT_DELAY);

    cy.compareSnapshot({
      name: "/default-year-view-dark-mode",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
    });
  });

  it("should render small variant", () => {
    mount(<IcCalendar value={DEFAULT_VALUE} size="small" />);

    cy.checkHydrated(CALENDAR);

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);

    cy.compareSnapshot({
      name: "/small",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.035),
    });
  });

  it("should render small variant - month view", () => {
    mount(<IcCalendar value={DEFAULT_VALUE} size="small" />);

    cy.checkHydrated(CALENDAR);

    cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);

    cy.compareSnapshot({
      name: "/small-month-view",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.035),
    });
  });

  it("should render small variant - year view", () => {
    mount(<IcCalendar value={DEFAULT_VALUE} size="small" />);

    cy.checkHydrated(CALENDAR);

    cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);

    cy.compareSnapshot({
      name: "/small-year-view",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.029),
    });
  });

  it("should render large variant", () => {
    mount(<IcCalendar value={DEFAULT_VALUE} size="large" />);

    cy.checkHydrated(CALENDAR);

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);

    cy.compareSnapshot({
      name: "/large",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.053),
    });
  });

  it("should render large variant - month view", () => {
    mount(<IcCalendar value={DEFAULT_VALUE} size="large" />);

    cy.checkHydrated(CALENDAR);

    cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);

    cy.compareSnapshot({
      name: "/large-month-view",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.034),
    });
  });

  it("should render large variant - year view", () => {
    mount(<IcCalendar value={DEFAULT_VALUE} size="large" />);

    cy.checkHydrated(CALENDAR);

    cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).click();

    cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);

    cy.compareSnapshot({
      name: "/large-year-view",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.03),
    });
  });

  it("should hide go to today button", () => {
    mount(<IcCalendar value={DEFAULT_VALUE} showTodayButton={false} />);

    cy.checkHydrated(CALENDAR);

    cy.wait(SCREENSHOT_DELAY).compareSnapshot({
      name: "/go-to-today-hidden",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.034),
    });
  });

  it("should hide clear button", () => {
    mount(<IcCalendar value={DEFAULT_VALUE} showClearButton={false} />);

    cy.checkHydrated(CALENDAR);

    cy.wait(SCREENSHOT_DELAY).compareSnapshot({
      name: "/clear-hidden",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.035),
    });
  });

  it("should navigate to today when button pressed", () => {
    mount(<IcCalendar value={DEFAULT_VALUE} />);

    cy.checkHydrated(CALENDAR);
    cy.findShadowEl(CALENDAR, TODAY_BUTTON_ID);

    cy.findShadowEl(CALENDAR, TODAY_BUTTON_ID).click();

    cy.findShadowEl(CALENDAR, TODAY_BUTTON_ID).should(
      HAVE_CLASS,
      "ic-button-disabled"
    );

    cy.findShadowEl(CALENDAR, TODAY_BUTTON_ID)
      .shadow()
      .find(BUTTON)
      .should(BE_DISABLED);

    cy.findShadowEl(CALENDAR, FOCUSSED_DAY_BTN_CLASS).click();
  });

  it("should clear date when calendar clear button pressed", () => {
    mount(<IcCalendar value={DEFAULT_VALUE} />);

    cy.checkHydrated(CALENDAR);

    cy.findShadowEl(CALENDAR, CLEAR_BUTTON_ID).click();

    cy.findShadowEl(CALENDAR, CLEAR_BUTTON_ID).should(
      HAVE_CLASS,
      "ic-button-disabled"
    );
    cy.findShadowEl(CALENDAR, CLEAR_BUTTON_ID)
      .shadow()
      .find(BUTTON)
      .should(BE_DISABLED);

    cy.findShadowEl(CALENDAR, FOCUSSED_DAY_BTN_CLASS)
      .should(BE_VISIBLE)
      .and(HAVE_ATTR, ATTR_ARIA_LABEL, "Choose Friday, 15 December 2023");
  });

  it("should navigate to previous month when button pressed - day view", () => {
    mount(<IcCalendar value={DEFAULT_VALUE} />);

    cy.checkHydrated(CALENDAR);

    cy.findShadowEl(CALENDAR, PREV_MONTH_BUTTON_ID).click();
    cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "November"
    );
  });

  it("should navigate to next month when button pressed - day view", () => {
    mount(<IcCalendar value={DEFAULT_VALUE} />);

    cy.checkHydrated(CALENDAR);

    cy.findShadowEl(CALENDAR, NEXT_MONTH_BUTTON_ID).click();
    cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "January"
    );
    cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).should(HAVE_TEXT, "2024");
  });

  it("should navigate to previous year when button pressed - day view", () => {
    mount(<IcCalendar value={DEFAULT_VALUE} />);

    cy.checkHydrated(CALENDAR);

    cy.findShadowEl(CALENDAR, PREV_YEAR_BUTTON_ID).click();
    cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).should(HAVE_TEXT, "2022");
  });

  it("should navigate to next year when button pressed - day view", () => {
    mount(<IcCalendar value={DEFAULT_VALUE} />);

    cy.checkHydrated(CALENDAR);

    cy.findShadowEl(CALENDAR, NEXT_YEAR_BUTTON_ID).click();
    cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).should(HAVE_TEXT, "2024");
  });

  it("should navigate to previous month when left arrow key pressed - day view", () => {
    mount(<IcCalendar value={DEFAULT_VALUE} />);

    cy.checkHydrated(CALENDAR);

    cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ARROW_LEFT_KEY);
    cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "November"
    );
  });

  it("should navigate to previous month whenup arrow key pressed - day view", () => {
    mount(<IcCalendar value={DEFAULT_VALUE} />);

    cy.checkHydrated(CALENDAR);

    cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ARROW_UP_KEY);
    cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "November"
    );
  });

  it("should navigate to next month when right arrow key pressed - day view", () => {
    mount(<IcCalendar value={DEFAULT_VALUE} />);

    cy.checkHydrated(CALENDAR);

    cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ARROW_RIGHT_KEY);
    cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "January"
    );
  });

  it("should navigate to next month when down arrow key pressed - day view", () => {
    mount(<IcCalendar value={DEFAULT_VALUE} />);

    cy.checkHydrated(CALENDAR);

    cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ARROW_DOWN_KEY);
    cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "January"
    );
  });

  it("should navigate to previous year when left arrow key pressed - day view", () => {
    mount(<IcCalendar value={DEFAULT_VALUE} />);

    cy.checkHydrated(CALENDAR);

    cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ARROW_LEFT_KEY);
    cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).should(HAVE_TEXT, "2022");
  });

  it("should navigate to previous year when up arrow key pressed - day view", () => {
    mount(<IcCalendar value={DEFAULT_VALUE} />);

    cy.checkHydrated(CALENDAR);

    cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ARROW_UP_KEY);
    cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).should(HAVE_TEXT, "2022");
  });

  it("should navigate to next year when right arrow key pressed - day view", () => {
    mount(<IcCalendar value={DEFAULT_VALUE} />);

    cy.checkHydrated(CALENDAR);

    cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ARROW_RIGHT_KEY);
    cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).should(HAVE_TEXT, "2024");
  });

  it("should navigate to next year when down arrow key pressed - day view", () => {
    mount(<IcCalendar value={DEFAULT_VALUE} />);

    cy.checkHydrated(CALENDAR);

    cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS)
      .shadow()
      .find(BUTTON)
      .focus()
      .type(ARROW_DOWN_KEY);
    cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).should(HAVE_TEXT, "2024");
  });

  it("should test keyboard interaction in day view - rightArrow", () => {
    mount(<IcCalendar value="31/12/2023" />);

    cy.checkHydrated(CALENDAR);

    cy.findShadowEl(CALENDAR, FOCUSSED_DAY_BTN_CLASS)
      .focus()
      .type(ARROW_RIGHT_KEY);
    cy.findShadowEl(CALENDAR, FOCUSSED_DAY_BTN_CLASS)
      .should(HAVE_TEXT, "1")
      .and(HAVE_ATTR, ATTR_ARIA_LABEL, "Choose Monday, 1 January 2024");
  });

  it("should test keyboard interaction in day view - leftArrow", () => {
    mount(<IcCalendar value="01/12/2023" />);

    cy.checkHydrated(CALENDAR);

    cy.findShadowEl(CALENDAR, FOCUSSED_DAY_BTN_CLASS)
      .focus()
      .type(ARROW_LEFT_KEY);
    cy.findShadowEl(CALENDAR, FOCUSSED_DAY_BTN_CLASS)
      .should(HAVE_TEXT, "30")
      .and(HAVE_ATTR, ATTR_ARIA_LABEL, "Choose Thursday, 30 November 2023");
  });

  it("should test keyboard interaction in day view - upArrow", () => {
    mount(<IcCalendar value={DEFAULT_VALUE} />);

    cy.checkHydrated(CALENDAR);

    cy.findShadowEl(CALENDAR, FOCUSSED_DAY_BTN_CLASS)
      .focus()
      .type(ARROW_UP_KEY);
    cy.findShadowEl(CALENDAR, FOCUSSED_DAY_BTN_CLASS).should(HAVE_TEXT, "8");
  });

  it("should test keyboard interaction in day view - downArrow", () => {
    mount(<IcCalendar value={DEFAULT_VALUE} />);

    cy.checkHydrated(CALENDAR);

    cy.findShadowEl(CALENDAR, FOCUSSED_DAY_BTN_CLASS)
      .focus()
      .type(ARROW_DOWN_KEY);
    cy.findShadowEl(CALENDAR, FOCUSSED_DAY_BTN_CLASS).should(HAVE_TEXT, "22");
  });

  it("should test keyboard interaction in day view - Home", () => {
    mount(<IcCalendar value={DEFAULT_VALUE} />);

    cy.checkHydrated(CALENDAR);

    cy.findShadowEl(CALENDAR, FOCUSSED_DAY_BTN_CLASS).focus().type(HOME_KEY);
    cy.findShadowEl(CALENDAR, FOCUSSED_DAY_BTN_CLASS).should(HAVE_TEXT, "1");
  });

  it("should test keyboard interaction in day view - End", () => {
    mount(<IcCalendar value={DEFAULT_VALUE} />);

    cy.checkHydrated(CALENDAR);

    cy.findShadowEl(CALENDAR, FOCUSSED_DAY_BTN_CLASS).focus().type(END_KEY);
    cy.findShadowEl(CALENDAR, FOCUSSED_DAY_BTN_CLASS).should(HAVE_TEXT, "31");
  });

  it("should test keyboard interaction in day view - PageUp", () => {
    mount(<IcCalendar value={DEFAULT_VALUE} />);

    cy.checkHydrated(CALENDAR);

    cy.findShadowEl(CALENDAR, FOCUSSED_DAY_BTN_CLASS).focus().type(PAGE_UP_KEY);
    cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "November"
    );
  });

  it("should test keyboard interaction in day view - PageDown", () => {
    mount(<IcCalendar value={DEFAULT_VALUE} />);

    cy.checkHydrated(CALENDAR);

    cy.findShadowEl(CALENDAR, FOCUSSED_DAY_BTN_CLASS)
      .focus()
      .type(PAGE_DOWN_KEY);
    cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).should(
      HAVE_TEXT,
      "January"
    );
  });

  it("should test keyboard interaction in day view - Shift + PageUp", () => {
    mount(<IcCalendar value={DEFAULT_VALUE} />);

    cy.checkHydrated(CALENDAR);

    cy.findShadowEl(CALENDAR, FOCUSSED_DAY_BTN_CLASS)
      .focus()
      .type("{shift}{PageUp}");
    cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).should(HAVE_TEXT, "2022");
  });

  it("should test keyboard interaction in day view - Shift + PageDown", () => {
    mount(<IcCalendar value={DEFAULT_VALUE} />);

    cy.checkHydrated(CALENDAR);

    cy.findShadowEl(CALENDAR, FOCUSSED_DAY_BTN_CLASS)
      .focus()
      .type("{shift}{PageDown}");
    cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).should(HAVE_TEXT, "2024");
  });

  describe("Month view tests", () => {
    it("should navigate to next month when arrow right key pressed - month view", () => {
      mount(<IcCalendar value={DEFAULT_VALUE} />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS)
        .shadow()
        .find(BUTTON)
        .focus()
        .type(ARROW_RIGHT_KEY);
      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "January"
      );
      cy.findShadowEl(CALENDAR, SELECTED_MONTH_BTN_CLASS).should(
        HAVE_TEXT,
        "January"
      );
    });

    it("should navigate to next month when arrow down key pressed - month view", () => {
      mount(<IcCalendar value={DEFAULT_VALUE} />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS)
        .shadow()
        .find(BUTTON)
        .focus()
        .type(ARROW_DOWN_KEY);
      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "January"
      );
      cy.findShadowEl(CALENDAR, SELECTED_MONTH_BTN_CLASS).should(
        HAVE_TEXT,
        "January"
      );
    });

    it("should navigate to previous month when arrow left key pressed - month view", () => {
      mount(<IcCalendar value={DEFAULT_VALUE} />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS)
        .shadow()
        .find(BUTTON)
        .focus()
        .type(ARROW_LEFT_KEY);
      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "November"
      );
      cy.findShadowEl(CALENDAR, SELECTED_MONTH_BTN_CLASS).should(
        HAVE_TEXT,
        "November"
      );
    });

    it("should navigate to previous month when arrow up key pressed - month view", () => {
      mount(<IcCalendar value={DEFAULT_VALUE} />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS)
        .shadow()
        .find(BUTTON)
        .focus()
        .type(ARROW_UP_KEY);
      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "November"
      );
      cy.findShadowEl(CALENDAR, SELECTED_MONTH_BTN_CLASS).should(
        HAVE_TEXT,
        "November"
      );
    });

    it("should focus and select January button when Home key pressed - month view", () => {
      mount(<IcCalendar value={DEFAULT_VALUE} />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS)
        .shadow()
        .find(BUTTON)
        .focus()
        .type(HOME_KEY);
      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "January"
      );
      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "2023"
      );
      cy.findShadowEl(CALENDAR, FOCUSSED_MONTH_BTN_CLASS).should(
        HAVE_TEXT,
        "January"
      );
    });

    it("should focus & select December button when End key pressed - month view", () => {
      mount(<IcCalendar value="01/01/2023" />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS)
        .shadow()
        .find(BUTTON)
        .focus()
        .type(END_KEY);
      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "December"
      );
      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "2023"
      );
      cy.findShadowEl(CALENDAR, FOCUSSED_MONTH_BTN_CLASS).should(
        HAVE_TEXT,
        "December"
      );
    });

    it("should return to day view when escape pressed - month view", () => {
      mount(<IcCalendar value={DEFAULT_VALUE} />);

      cy.checkHydrated(CALENDAR);
      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS)
        .shadow()
        .find(BUTTON)
        .focus()
        .type(ESCAPE_KEY);
      cy.findShadowEl(CALENDAR, SELECTED_DAY_BTN_CLASS)
        .should(BE_VISIBLE)
        .and(HAVE_ATTR, ATTR_ARIA_LABEL, "Choose Friday, 15 December 2023");
    });

    it("should return to day view when month picker button clicked - month view", () => {
      mount(<IcCalendar value={DEFAULT_VALUE} />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, SELECTED_DAY_BTN_CLASS)
        .should(BE_VISIBLE)
        .and(HAVE_ATTR, ATTR_ARIA_LABEL, "Choose Friday, 15 December 2023");
    });

    it("should select month when enter pressed - month view", () => {
      mount(<IcCalendar value={DEFAULT_VALUE} />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS)
        .shadow()
        .find(BUTTON)
        .focus()
        .type(ARROW_RIGHT_KEY + ENTER_KEY);
      cy.findShadowEl(CALENDAR, FOCUSSED_DAY_BTN_CLASS)
        .should(BE_VISIBLE)
        .and(HAVE_ATTR, ATTR_ARIA_LABEL, "Choose Monday, 15 January 2024");
    });

    it("should select month when a month clicked - month view", () => {
      mount(<IcCalendar value={DEFAULT_VALUE} />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, "ic-button[data-month='0']")
        .shadow()
        .find(BUTTON)
        .click();
      cy.findShadowEl(CALENDAR, FOCUSSED_DAY_BTN_CLASS)
        .should(BE_VISIBLE)
        .and(HAVE_ATTR, ATTR_ARIA_LABEL, "Choose Sunday, 15 January 2023");
    });

    it("should update year when moving from December - month view", () => {
      mount(<IcCalendar value={DEFAULT_VALUE} />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS)
        .shadow()
        .find(BUTTON)
        .focus()
        .type(ARROW_RIGHT_KEY);
      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "January"
      );
      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "2024"
      );
    });

    it("should update year when moving from January - month view", () => {
      mount(<IcCalendar value="01/01/2024" />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS)
        .shadow()
        .find(BUTTON)
        .focus()
        .type(ARROW_LEFT_KEY);
      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "December"
      );
      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "2023"
      );
    });

    it("should not update year when moving from December - month view", () => {
      mount(<IcCalendar value="01/12/2023" />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, SELECTED_MONTH_BTN_CLASS)
        .shadow()
        .find(BUTTON)
        .focus()
        .type(ARROW_RIGHT_KEY);
      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "December"
      );
      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "2023"
      );
      cy.findShadowEl(CALENDAR, FOCUSSED_MONTH_BTN_CLASS).should(
        HAVE_TEXT,
        "January"
      );
    });

    it("should not update year when moving from January - month view", () => {
      mount(<IcCalendar value="01/01/2024" />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, SELECTED_MONTH_BTN_CLASS)
        .shadow()
        .find(BUTTON)
        .focus()
        .type(ARROW_LEFT_KEY);
      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "January"
      );
      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "2024"
      );
      cy.findShadowEl(CALENDAR, FOCUSSED_MONTH_BTN_CLASS).should(
        HAVE_TEXT,
        "December"
      );
    });

    it("should focus January button when Home key pressed - month view", () => {
      mount(<IcCalendar value={DEFAULT_VALUE} />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, SELECTED_MONTH_BTN_CLASS)
        .shadow()
        .find(BUTTON)
        .focus()
        .type(HOME_KEY);
      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "December"
      );
      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "2023"
      );
      cy.findShadowEl(CALENDAR, FOCUSSED_MONTH_BTN_CLASS).should(
        HAVE_TEXT,
        "January"
      );
    });

    it("should focus December button when End key pressed - month view", () => {
      mount(<IcCalendar value={DEFAULT_VALUE} />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, SELECTED_MONTH_BTN_CLASS)
        .shadow()
        .find(BUTTON)
        .focus()
        .type(END_KEY);
      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "December"
      );
      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "2023"
      );
      cy.findShadowEl(CALENDAR, FOCUSSED_MONTH_BTN_CLASS).should(
        HAVE_TEXT,
        "December"
      );
    });
  });

  describe("Year view tests", () => {
    it("should navigate to next year when arrow right key pressed - year view", () => {
      mount(<IcCalendar value="01/01/2029" />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS)
        .shadow()
        .find(BUTTON)
        .focus()
        .type(ARROW_RIGHT_KEY);
      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "2030"
      );
      cy.findShadowEl(CALENDAR, SELECTED_YEAR_BTN_CLASS).should(
        HAVE_TEXT,
        "2030"
      );
      cy.findShadowEl(CALENDAR, PREV_DECADE_BUTTON_ID).should(
        HAVE_TEXT,
        "2020s"
      );
      cy.findShadowEl(CALENDAR, NEXT_DECADE_BUTTON_ID).should(
        HAVE_TEXT,
        "2040s"
      );
    });

    it("should navigate to next year when arrow down key pressed - year view", () => {
      mount(<IcCalendar value="01/01/2029" />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS)
        .shadow()
        .find(BUTTON)
        .focus()
        .type(ARROW_DOWN_KEY);
      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "2030"
      );
      cy.findShadowEl(CALENDAR, SELECTED_YEAR_BTN_CLASS).should(
        HAVE_TEXT,
        "2030"
      );
      cy.findShadowEl(CALENDAR, PREV_DECADE_BUTTON_ID).should(
        HAVE_TEXT,
        "2020s"
      );
      cy.findShadowEl(CALENDAR, NEXT_DECADE_BUTTON_ID).should(
        HAVE_TEXT,
        "2040s"
      );
    });

    it("should navigate to previous year when arrow left key pressed - year view", () => {
      mount(<IcCalendar value="01/12/2020" />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS)
        .shadow()
        .find(BUTTON)
        .focus()
        .type(ARROW_LEFT_KEY);
      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "2019"
      );
      cy.findShadowEl(CALENDAR, SELECTED_YEAR_BTN_CLASS).should(
        HAVE_TEXT,
        "2019"
      );
      cy.findShadowEl(CALENDAR, PREV_DECADE_BUTTON_ID).should(
        HAVE_TEXT,
        "2000s"
      );
      cy.findShadowEl(CALENDAR, NEXT_DECADE_BUTTON_ID).should(
        HAVE_TEXT,
        "2020s"
      );
    });

    it("should navigate to previous year when arrow up key pressed - year view", () => {
      mount(<IcCalendar value="01/12/2020" />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS)
        .shadow()
        .find(BUTTON)
        .focus()
        .type(ARROW_UP_KEY);
      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "2019"
      );
      cy.findShadowEl(CALENDAR, SELECTED_YEAR_BTN_CLASS).should(
        HAVE_TEXT,
        "2019"
      );
      cy.findShadowEl(CALENDAR, PREV_DECADE_BUTTON_ID).should(
        HAVE_TEXT,
        "2000s"
      );
      cy.findShadowEl(CALENDAR, NEXT_DECADE_BUTTON_ID).should(
        HAVE_TEXT,
        "2020s"
      );
    });

    it("should focus & select 2020 button when Home key pressed - year view", () => {
      mount(<IcCalendar value={DEFAULT_VALUE} />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS)
        .shadow()
        .find(BUTTON)
        .focus()
        .type(HOME_KEY);
      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "2020"
      );
      cy.findShadowEl(CALENDAR, SELECTED_YEAR_BTN_CLASS).should(
        HAVE_TEXT,
        "2020"
      );
      cy.findShadowEl(CALENDAR, FOCUSSED_YEAR_BTN_CLASS).should(
        HAVE_TEXT,
        "2020"
      );
    });

    it("should focus & select 2029 button when End key pressed - year view", () => {
      mount(<IcCalendar value={DEFAULT_VALUE} />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS)
        .shadow()
        .find(BUTTON)
        .focus()
        .type(END_KEY);
      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "2029"
      );
      cy.findShadowEl(CALENDAR, SELECTED_YEAR_BTN_CLASS).should(
        HAVE_TEXT,
        "2029"
      );
      cy.findShadowEl(CALENDAR, FOCUSSED_YEAR_BTN_CLASS).should(
        HAVE_TEXT,
        "2029"
      );
    });

    it("should focus & select 2013 button when PageUp key pressed - year view", () => {
      mount(<IcCalendar value={DEFAULT_VALUE} />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS)
        .shadow()
        .find(BUTTON)
        .focus()
        .type(PAGE_UP_KEY);
      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "2013"
      );
      cy.findShadowEl(CALENDAR, SELECTED_YEAR_BTN_CLASS).should(
        HAVE_TEXT,
        "2013"
      );
      cy.findShadowEl(CALENDAR, FOCUSSED_YEAR_BTN_CLASS).should(
        HAVE_TEXT,
        "2013"
      );
    });

    it("should focus & select 2013 button when PageDown key pressed - year view", () => {
      mount(<IcCalendar value={DEFAULT_VALUE} />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS)
        .shadow()
        .find(BUTTON)
        .focus()
        .type(PAGE_DOWN_KEY);
      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "2033"
      );
      cy.findShadowEl(CALENDAR, SELECTED_YEAR_BTN_CLASS).should(
        HAVE_TEXT,
        "2033"
      );
      cy.findShadowEl(CALENDAR, FOCUSSED_YEAR_BTN_CLASS).should(
        HAVE_TEXT,
        "2033"
      );
    });

    it("should return to day view when escape pressed - year view", () => {
      mount(<IcCalendar value={DEFAULT_VALUE} />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS)
        .shadow()
        .find(BUTTON)
        .focus()
        .type(ESCAPE_KEY);
      cy.findShadowEl(CALENDAR, SELECTED_DAY_BTN_CLASS)
        .should(BE_VISIBLE)
        .and(HAVE_ATTR, ATTR_ARIA_LABEL, "Choose Friday, 15 December 2023");
    });

    it("should return to day view when year picker button clicked - year view", () => {
      mount(<IcCalendar value={DEFAULT_VALUE} />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, SELECTED_DAY_BTN_CLASS)
        .should(BE_VISIBLE)
        .and(HAVE_ATTR, ATTR_ARIA_LABEL, "Choose Friday, 15 December 2023");
    });

    it("should select year when enter pressed - year view", () => {
      mount(<IcCalendar value={DEFAULT_VALUE} />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS)
        .shadow()
        .find(BUTTON)
        .focus()
        .type(ARROW_RIGHT_KEY + ENTER_KEY);
      cy.findShadowEl(CALENDAR, FOCUSSED_DAY_BTN_CLASS)
        .should(BE_VISIBLE)
        .and(HAVE_ATTR, ATTR_ARIA_LABEL, "Choose Sunday, 15 December 2024");
    });

    it("should select year when a year clicked - year view", () => {
      mount(<IcCalendar value={DEFAULT_VALUE} />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, "ic-button[data-year='2027']")
        .shadow()
        .find(BUTTON)
        .click();
      cy.findShadowEl(CALENDAR, FOCUSSED_DAY_BTN_CLASS)
        .should(BE_VISIBLE)
        .and(HAVE_ATTR, ATTR_ARIA_LABEL, "Choose Wednesday, 15 December 2027");
    });

    it("should move decades when buttons clicked - year view", () => {
      mount(<IcCalendar value={DEFAULT_VALUE} />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, PREV_DECADE_BUTTON_ID)
        .shadow()
        .find(BUTTON)
        .click();
      cy.findShadowEl(CALENDAR, PREV_DECADE_BUTTON_ID).should(
        HAVE_TEXT,
        "2000s"
      );

      cy.findShadowEl(CALENDAR, NEXT_DECADE_BUTTON_ID)
        .shadow()
        .find(BUTTON)
        .click();
      cy.findShadowEl(CALENDAR, NEXT_DECADE_BUTTON_ID).should(
        HAVE_TEXT,
        "2030s"
      );
    });

    it("should update focussed year, but not selected year when arrow right key pressed - year view", () => {
      mount(<IcCalendar value={DEFAULT_VALUE} />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, SELECTED_YEAR_BTN_CLASS)
        .shadow()
        .find(BUTTON)
        .focus()
        .type(ARROW_RIGHT_KEY);
      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "2023"
      );
      cy.findShadowEl(CALENDAR, SELECTED_YEAR_BTN_CLASS).should(
        HAVE_TEXT,
        "2023"
      );
      cy.findShadowEl(CALENDAR, FOCUSSED_YEAR_BTN_CLASS).should(
        HAVE_TEXT,
        "2024"
      );
    });

    it("should update focussed year, but not selected year when arrow down key pressed - year view", () => {
      mount(<IcCalendar value={DEFAULT_VALUE} />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, SELECTED_YEAR_BTN_CLASS)
        .shadow()
        .find(BUTTON)
        .focus()
        .type(ARROW_DOWN_KEY);
      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "2023"
      );
      cy.findShadowEl(CALENDAR, SELECTED_YEAR_BTN_CLASS).should(
        HAVE_TEXT,
        "2023"
      );
      cy.findShadowEl(CALENDAR, FOCUSSED_YEAR_BTN_CLASS).should(
        HAVE_TEXT,
        "2024"
      );
    });

    it("should update focussed year, but not selected year when arrow left key pressed - year view", () => {
      mount(<IcCalendar value={DEFAULT_VALUE} />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, SELECTED_YEAR_BTN_CLASS)
        .shadow()
        .find(BUTTON)
        .focus()
        .type(ARROW_LEFT_KEY);
      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "2023"
      );
      cy.findShadowEl(CALENDAR, SELECTED_YEAR_BTN_CLASS).should(
        HAVE_TEXT,
        "2023"
      );
      cy.findShadowEl(CALENDAR, FOCUSSED_YEAR_BTN_CLASS).should(
        HAVE_TEXT,
        "2022"
      );
    });

    it("should update focussed year, but not selected year when arrow up key pressed - year view", () => {
      mount(<IcCalendar value={DEFAULT_VALUE} />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, SELECTED_YEAR_BTN_CLASS)
        .shadow()
        .find(BUTTON)
        .focus()
        .type(ARROW_UP_KEY);
      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "2023"
      );
      cy.findShadowEl(CALENDAR, SELECTED_YEAR_BTN_CLASS).should(
        HAVE_TEXT,
        "2023"
      );
      cy.findShadowEl(CALENDAR, FOCUSSED_YEAR_BTN_CLASS).should(
        HAVE_TEXT,
        "2022"
      );
    });

    it("should update focussed year, but not selected year when Home key pressed - year view", () => {
      mount(<IcCalendar value={DEFAULT_VALUE} />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, SELECTED_YEAR_BTN_CLASS)
        .shadow()
        .find(BUTTON)
        .focus()
        .type(HOME_KEY);
      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "2023"
      );
      cy.findShadowEl(CALENDAR, SELECTED_YEAR_BTN_CLASS).should(
        HAVE_TEXT,
        "2023"
      );
      cy.findShadowEl(CALENDAR, FOCUSSED_YEAR_BTN_CLASS).should(
        HAVE_TEXT,
        "2020"
      );
    });

    it("should update focussed year, but not selected year when End key pressed - year view", () => {
      mount(<IcCalendar value={DEFAULT_VALUE} />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, SELECTED_YEAR_BTN_CLASS)
        .shadow()
        .find(BUTTON)
        .focus()
        .type(END_KEY);
      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "2023"
      );
      cy.findShadowEl(CALENDAR, SELECTED_YEAR_BTN_CLASS).should(
        HAVE_TEXT,
        "2023"
      );
      cy.findShadowEl(CALENDAR, FOCUSSED_YEAR_BTN_CLASS).should(
        HAVE_TEXT,
        "2029"
      );
    });

    it("should go back a decade and but not select year when moving back from first year in view", () => {
      mount(<IcCalendar value="01/01/2020" />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, SELECTED_YEAR_BTN_CLASS)
        .shadow()
        .find(BUTTON)
        .focus()
        .type(ARROW_LEFT_KEY);
      cy.findShadowEl(CALENDAR, PREV_DECADE_BUTTON_ID).should(
        HAVE_TEXT,
        "2000s"
      );
      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "2020"
      );
      cy.findShadowEl(CALENDAR, FOCUSSED_YEAR_BTN_CLASS).should(
        HAVE_TEXT,
        "2019"
      );
      cy.findShadowEl(CALENDAR, NEXT_DECADE_BUTTON_ID).should(
        HAVE_TEXT,
        "2020s"
      );
    });

    it("should go forward a decade and but not select year when moving forward from last year in view", () => {
      mount(<IcCalendar value="01/01/2029" />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, SELECTED_YEAR_BTN_CLASS)
        .shadow()
        .find(BUTTON)
        .focus()
        .type(ARROW_RIGHT_KEY);
      cy.findShadowEl(CALENDAR, PREV_DECADE_BUTTON_ID).should(
        HAVE_TEXT,
        "2020s"
      );
      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "2029"
      );
      cy.findShadowEl(CALENDAR, FOCUSSED_YEAR_BTN_CLASS).should(
        HAVE_TEXT,
        "2030"
      );
      cy.findShadowEl(CALENDAR, NEXT_DECADE_BUTTON_ID).should(
        HAVE_TEXT,
        "2040s"
      );
    });

    it("should move back a decade and update focussed year when PageUp key pressed - year view", () => {
      mount(<IcCalendar value={DEFAULT_VALUE} />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, SELECTED_YEAR_BTN_CLASS)
        .shadow()
        .find(BUTTON)
        .focus()
        .type(PAGE_UP_KEY);
      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "2023"
      );
      cy.findShadowEl(CALENDAR, FOCUSSED_YEAR_BTN_CLASS).should(
        HAVE_TEXT,
        "2013"
      );
    });

    it("should move forward a decade and update focussed year when PageDown key pressed - year view", () => {
      mount(<IcCalendar value={DEFAULT_VALUE} />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).click();
      cy.findShadowEl(CALENDAR, SELECTED_YEAR_BTN_CLASS)
        .shadow()
        .find(BUTTON)
        .focus()
        .type(PAGE_DOWN_KEY);
      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).should(
        HAVE_TEXT,
        "2023"
      );
      cy.findShadowEl(CALENDAR, FOCUSSED_YEAR_BTN_CLASS).should(
        HAVE_TEXT,
        "2033"
      );
    });
  });

  describe("Testing IcCalendar props", () => {
    it("should test 'value' prop", () => {
      mount(<IcCalendar value={DEFAULT_VALUE} />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, FOCUSSED_DAY_BTN_CLASS)
        .should(BE_VISIBLE)
        .and(HAVE_ATTR, ATTR_ARIA_LABEL, "Choose Friday, 15 December 2023");
      cy.findShadowEl(CALENDAR, SELECTED_DAY_BTN_CLASS);

      cy.get(CALENDAR)
        .invoke("prop", "value", NEW_VALUE)
        .then(() => {
          cy.findShadowEl(CALENDAR, FOCUSSED_DAY_BTN_CLASS)
            .should(BE_VISIBLE)
            .and(HAVE_ATTR, ATTR_ARIA_LABEL, "Choose Monday, 4 November 2024");
          cy.findShadowEl(CALENDAR, SELECTED_DAY_BTN_CLASS);
        });
    });

    it("should test 'openAtDate' prop", () => {
      mount(<IcCalendar openAtDate={DEFAULT_VALUE} />);

      cy.checkHydrated(CALENDAR);

      cy.wait(SCREENSHOT_DELAY).compareSnapshot({
        name: "/open-at-date",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.035),
      });

      cy.findShadowEl(CALENDAR, FOCUSSED_DAY_BTN_CLASS)
        .should(BE_VISIBLE)
        .and(HAVE_ATTR, ATTR_ARIA_LABEL, "Choose Friday, 15 December 2023");
      cy.findShadowEl(CALENDAR, SELECTED_DAY_BTN_CLASS).should(NOT_EXIST);
    });

    it("should test month first date format prop", () => {
      mount(<IcCalendar value={DEFAULT_VALUE} dateFormat="MM/DD/YYYY" />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, FOCUSSED_DAY_BTN_CLASS).click();

      // check aria label
    });

    it("should test year first date format prop", () => {
      mount(<IcCalendar value={DEFAULT_VALUE} dateFormat="YYYY/MM/DD" />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, FOCUSSED_DAY_BTN_CLASS).click();

      // check aria label
    });

    it("should test 'disableDays' prop", () => {
      mount(<IcCalendar value="02/12/2023" disableDays={[0, 6]} />);

      cy.checkHydrated(CALENDAR);

      cy.wait(SCREENSHOT_DELAY).compareSnapshot({
        name: "/disable-weekends",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.033),
      });
    });

    it("should test 'disableFuture' prop", () => {
      mount(<IcCalendar value="02/12/2223" disableFuture />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, FOCUSSED_DAY_BTN_CLASS)
        .parent()
        .parent()
        .then(($td) => {
          // Check if td is the last child in its row
          // If yes, find the last td in the next row
          if ($td.is("td:last-child")) {
            cy.wrap($td)
              .parent()
              .next()
              .find("td:first-child")
              .find(DAY_BTN_CLASS)
              .should(BE_DISABLED);
          } else {
            cy.wrap($td).next().find(DAY_BTN_CLASS).should(BE_DISABLED);
          }
        });

      cy.findShadowEl(CALENDAR, FOCUSSED_DAY_BTN_CLASS)
        .parent()
        .parent()
        .then(($td) => {
          // Check if td is the first child in its row
          if ($td.is("td:nth-child(1)")) {
            cy.wrap($td)
              .parent()
              .then(($tr) => {
                // Check if tr is the first row in tbody
                // If yes, find the second to last row in the previous month
                if ($tr.is("tr:nth-child(1)")) {
                  cy.findShadowEl(CALENDAR, PREV_MONTH_BUTTON_ID).click();

                  // Find the second to last row and last td in that row
                  cy.findShadowEl(
                    CALENDAR,
                    "tbody tr:nth-child(5) td:last-child"
                  ).then(($prevTd) => {
                    cy.wrap($prevTd)
                      .find(DAY_BTN_CLASS)
                      .should(NOT_BE_DISABLED);
                  });
                } else {
                  // Find the last td in the previous row
                  cy.wrap($td)
                    .parent() // tr
                    .prev()
                    .find("td:last-child")
                    .find(DAY_BTN_CLASS)
                    .should(NOT_BE_DISABLED);
                }
              });
          } else {
            // If td is not the first in its row
            cy.wrap($td).prev().find(DAY_BTN_CLASS).should(NOT_BE_DISABLED);
          }
        });

      // change prop to allow future dates
      cy.get(CALENDAR)
        .invoke("prop", "disableFuture", false)
        .then(() => {
          cy.findShadowEl(CALENDAR, FOCUSSED_DAY_BTN_CLASS)
            .parent()
            .parent()
            .then(($td) => {
              // Check if td is the last child in its row
              // If yes, find the last td in the next row
              if ($td.is("td:last-child")) {
                cy.wrap($td)
                  .parent()
                  .next()
                  .find("td:first-child")
                  .find(DAY_BTN_CLASS)
                  .click();
              } else {
                cy.wrap($td).next().find(DAY_BTN_CLASS).click();
              }
            });
        });
    });

    it("should test 'disablePast' prop", () => {
      mount(<IcCalendar value={DEFAULT_VALUE} disablePast />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, FOCUSSED_DAY_BTN_CLASS)
        .parent()
        .parent()
        .then(($td) => {
          // Check if td is the first child in its row
          if ($td.is("td:nth-child(1)")) {
            cy.wrap($td)
              .parent()
              .then(($tr) => {
                // Check if tr is the first row in tbody
                // If yes, find the second to last row in the previous month
                if ($tr.is("tr:nth-child(1)")) {
                  cy.findShadowEl(CALENDAR, PREV_MONTH_BUTTON_ID).click();

                  // Find the second to last row and last td in that row
                  cy.findShadowEl(
                    CALENDAR,
                    "tbody tr:nth-child(5) td:last-child"
                  ).then(($prevTd) => {
                    cy.wrap($prevTd).find(DAY_BTN_CLASS).should(BE_DISABLED);
                  });
                } else {
                  // Find the last td in the previous row
                  cy.wrap($td)
                    .parent() // tr
                    .prev()
                    .find("td:last-child")
                    .find(DAY_BTN_CLASS)
                    .should(BE_DISABLED);
                }
              });
          } else {
            // If td is not the first in its row
            cy.wrap($td).prev().find(DAY_BTN_CLASS).should(BE_DISABLED);
          }
        });
      cy.findShadowEl(CALENDAR, FOCUSSED_DAY_BTN_CLASS)
        .parent()
        .parent()
        .then(($td) => {
          // Check if td is the last child in its row
          // If yes, find the last td in the next row
          if ($td.is("td:last-child")) {
            cy.wrap($td)
              .parent()
              .next()
              .find("td:first-child")
              .find(DAY_BTN_CLASS)
              .should(NOT_BE_DISABLED);
          } else {
            cy.wrap($td).next().find(DAY_BTN_CLASS).should(NOT_BE_DISABLED);
          }
        });

      // change prop to allow past dates
      cy.get(CALENDAR)
        .invoke("prop", "disablePast", false)
        .then(() => {
          cy.findShadowEl(CALENDAR, FOCUSSED_DAY_BTN_CLASS)
            .parent()
            .parent()
            .then(($td) => {
              // Check if td is the first child in its row
              if ($td.is("td:nth-child(1)")) {
                cy.wrap($td)
                  .parent()
                  .then(($tr) => {
                    // Check if tr is the first row in tbody
                    // If yes, find the second to last row in the previous month
                    if ($tr.is("tr:nth-child(1)")) {
                      cy.findShadowEl(CALENDAR, PREV_MONTH_BUTTON_ID).click();

                      // Find the second to last row and last td in that row
                      cy.findShadowEl(
                        CALENDAR,
                        "tbody tr:nth-child(5) td:last-child"
                      ).then(($prevTd) => {
                        cy.wrap($prevTd).find(DAY_BTN_CLASS).click();
                      });
                    } else {
                      // Find the last td in the previous row
                      cy.wrap($td)
                        .parent() // tr
                        .prev()
                        .find("td:last-child")
                        .find(DAY_BTN_CLASS)
                        .click();
                    }
                  });
              } else {
                // If td is not the first in its row
                cy.wrap($td).prev().find(DAY_BTN_CLASS).click();
              }
            });
        });
    });

    it("should test 'showDaysOutsideMonth' and 'startOfWeek' props", () => {
      mount(
        <IcCalendar
          openAtDate={DEFAULT_VALUE}
          showDaysOutsideMonth={false}
          startOfWeek={0}
        />
      );

      cy.checkHydrated(CALENDAR);

      cy.wait(SCREENSHOT_DELAY).compareSnapshot({
        name: "/days-outside-month-hidden",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.034),
      });

      cy.get(CALENDAR)
        .invoke("prop", "startOfWeek", "4")
        .then(() => {
          cy.wait(SCREENSHOT_DELAY).compareSnapshot({
            name: "/start-of-week",
            testThreshold: setThresholdBasedOnEnv(
              DEFAULT_TEST_THRESHOLD + 0.046
            ),
          });
        });
    });

    it("should test 'min' and 'max' props", () => {
      mount(<IcCalendar min="2023-07-01" max="2023-07-31" />);

      cy.checkHydrated(CALENDAR);

      cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);

      cy.compareSnapshot({
        name: "/min-max",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.034),
      });
    });

    it("should test 'min' and 'max' props - month view", () => {
      mount(<IcCalendar min="2023-07-01" max="2023-07-31" />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).click();

      cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);

      cy.compareSnapshot({
        name: "/min-max-month-view",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.017),
      });
    });

    it("should test 'min' and 'max' props - year view", () => {
      mount(<IcCalendar min="2023-07-01" max="2023-07-31" />);

      cy.checkHydrated(CALENDAR);

      cy.findShadowEl(CALENDAR, YEAR_PICKER_BTN_CLASS).click();

      cy.checkA11yWithWait(undefined, SCREENSHOT_DELAY);

      cy.compareSnapshot({
        name: "/min-max-year-view",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.016),
      });
    });
  });
});

describe("IcCalendar visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  beforeEach(() => {
    cy.viewport(500, 700);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  after(() => {
    cy.disableForcedColors();
  });

  it("should render default variant in high contrast mode", () => {
    mount(<IcCalendar value={DEFAULT_VALUE} />);

    cy.checkHydrated(CALENDAR);

    cy.wait(SCREENSHOT_DELAY).compareSnapshot({
      name: "/default-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.051),
    });
  });

  it("should render default variant displaying month view in high contrast mode", () => {
    mount(<IcCalendar value={DEFAULT_VALUE} />);

    cy.checkHydrated(CALENDAR);

    cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).click();

    cy.wait(SCREENSHOT_DELAY).compareSnapshot({
      name: "/default-month-view-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.057),
    });
  });

  it("should render with 'disableDays' prop in high contrast mode", () => {
    mount(<IcCalendar value="02/12/2023" disableDays={[0, 6]} />);

    cy.checkHydrated(CALENDAR);

    cy.wait(SCREENSHOT_DELAY).compareSnapshot({
      name: "/disable-weekends-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.049),
    });
  });

  it("should render with 'min' and 'max' props in high contrast mode", () => {
    mount(<IcCalendar min="2023-07-01" max="2023-07-31" />);

    cy.checkHydrated(CALENDAR);

    cy.findShadowEl(CALENDAR, MONTH_PICKER_BTN_CLASS).click();

    cy.wait(SCREENSHOT_DELAY).compareSnapshot({
      name: "/min-max-month-view-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.043),
    });
  });
});
