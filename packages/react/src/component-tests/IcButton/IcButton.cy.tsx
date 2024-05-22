/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import { mount } from "cypress/react";
import React from "react";
import { IcButton } from "../../components";
import { SlottedSVG } from "../../react-component-lib/slottedSVG";
import {
  BE_VISIBLE,
  CONTAIN_TEXT,
  HAVE_ATTR,
  HAVE_BEEN_CALLED_ONCE,
  HAVE_FOCUS,
  HAVE_PROP,
  HAVE_VALUE,
  NOT_BE_CALLED_ONCE,
} from "../utils/constants";
import {
  DARK_BG_STYLE,
  PopoverDropdown,
  SlottedIcon,
  SlottedIconNoViewBox,
  SlottedRightIcon,
} from "./IcButtonTestData";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const DEFAULT_TEST_THRESHOLD = 0.03;

const WIN_CONSOLE_SPY = "@spyWinConsoleLog";

const ID_NAME = "#name";
const TEXT_INPUT = "@textInput";

const submitForm = (ev: React.FormEvent<HTMLFormElement>) => {
  ev.preventDefault();
  console.log("foo");
};

describe("IcButton", () => {
  it("should render", () => {
    mount(<IcButton>Test</IcButton>);

    cy.get("ic-button").contains("Test").should(BE_VISIBLE);
  });

  it("should pass onclick method", () => {
    mount(
      <IcButton
        onClick={(e) => {
          e.currentTarget.innerText = "clicked";
        }}
      >
        Test
      </IcButton>
    );
    cy.checkHydrated("ic-button");
    cy.clickOnButton("ic-button");
    cy.get("ic-button").should(CONTAIN_TEXT, "clicked");
  });

  it("should not be clickable when disabled", () => {
    cy.spy(window.console, "log").as("spyWinConsoleLog");
    mount(
      <IcButton disabled onClick={() => console.log("foo")}>
        Disabled
      </IcButton>
    );

    cy.checkHydrated("ic-button");
    cy.clickOnButton("ic-button");

    cy.get(WIN_CONSOLE_SPY).should(NOT_BE_CALLED_ONCE);
  });

  it("should test aria-describedby being updated", () => {
    mount(
      <div>
        <span id="button-description">This button does something amazing</span>
        <IcButton
          onClick={() => {
            const descEl = document.querySelector(
              "#button-description"
            ) as HTMLSpanElement;
            if (descEl) {
              descEl.innerText = "See, I told you it was amazing!";
            }
          }}
          aria-describedby="button-description"
        >
          Button
        </IcButton>
      </div>
    );

    cy.checkHydrated("ic-button");

    cy.findShadowEl("ic-button", "button").should(
      HAVE_ATTR,
      "aria-describedby"
    );
    cy.clickOnButton("ic-button");
    cy.findShadowEl("ic-button", "#button-description")
      .should("exist")
      .should(CONTAIN_TEXT, "See, I told you it was amazing!");
  });

  it("should have loading bar when loading", () => {
    mount(<IcButton loading>Loading</IcButton>);

    cy.checkHydrated("ic-button");
    cy.findShadowEl("ic-button", "ic-loading-indicator").should("exist");
  });

  it("should not be clickable when loading", () => {
    cy.spy(window.console, "log").as("spyWinConsoleLog");
    mount(<IcButton loading>Loading</IcButton>);

    cy.checkHydrated("ic-button");
    cy.findShadowEl("ic-button", "ic-loading-indicator").should("exist");
    cy.clickOnButton("ic-button");
    cy.get(WIN_CONSOLE_SPY).should(NOT_BE_CALLED_ONCE);
  });

  it("should clear text field value when reset button inside form tag", () => {
    mount(
      <form>
        <input type="text" id="name" />
        <IcButton id="ic-button" type="reset">
          Reset
        </IcButton>
      </form>
    );
    cy.get(ID_NAME).as("textInput");
    cy.get(TEXT_INPUT).type("foo");

    cy.get(TEXT_INPUT).should(HAVE_VALUE, "foo");

    cy.checkHydrated("ic-button");
    cy.clickOnButton("ic-button");

    cy.get(TEXT_INPUT).should(HAVE_VALUE, "");
  });

  it("should not clear text field value if reset button outside of form tag", () => {
    mount(
      <div>
        <form>
          <input type="text" id="name" />
        </form>
        <IcButton id="ic-button" type="reset">
          Reset
        </IcButton>
      </div>
    );
    cy.get(ID_NAME).as("textInput");
    cy.get(TEXT_INPUT).type("foo");

    cy.get(TEXT_INPUT).should(HAVE_VALUE, "foo");

    cy.checkHydrated("ic-button");
    cy.clickOnButton("ic-button");

    cy.get(TEXT_INPUT).should(HAVE_VALUE, "foo");
  });

  it("should submit form on button click if submit button inside form tag", () => {
    cy.spy(window.console, "log").as("spyWinConsoleLog");
    mount(
      <form onSubmit={submitForm}>
        <input type="text" id="name" />
        <IcButton id="ic-button" type="submit">
          Submit
        </IcButton>
      </form>
    );

    cy.checkHydrated("ic-button");
    cy.clickOnButton("ic-button");
    cy.get(WIN_CONSOLE_SPY).should(HAVE_BEEN_CALLED_ONCE);
  });

  it("should not submit form on button click if submit button outside form tag", () => {
    cy.spy(window.console, "log").as("spyWinConsoleLog");
    mount(
      <div>
        <form onSubmit={submitForm}>
          <input type="text" id="name" />
        </form>
        <IcButton id="ic-button" type="submit">
          Submit
        </IcButton>
      </div>
    );

    cy.get(ID_NAME).as("textInput");
    cy.get(TEXT_INPUT).type("foo");

    cy.get(TEXT_INPUT).should(HAVE_VALUE, "foo");
    cy.checkHydrated("ic-button");

    cy.clickOnButton("ic-button");

    cy.get(TEXT_INPUT).should(HAVE_VALUE, "foo");
    cy.get(WIN_CONSOLE_SPY).should(NOT_BE_CALLED_ONCE);
  });

  it("should emit icFocus on focus event", () => {
    mount(
      <IcButton id="ic-button" onClick={() => console.log("Hello World")}>
        Primary
      </IcButton>
    );

    cy.checkHydrated("ic-button");

    cy.get("ic-button").invoke("on", "icFocus", cy.stub().as("icFocus"));

    cy.get("ic-button").shadow().find("button").focus();

    cy.get("ic-button").should(HAVE_FOCUS);
    cy.get("@icFocus").should(HAVE_BEEN_CALLED_ONCE);
  });

  it("should emit icBlur on blur event", () => {
    mount(<IcButton id="ic-button">Primary</IcButton>);
    cy.checkHydrated("ic-button");

    cy.get("ic-button").invoke("on", "icBlur", cy.stub().as("icBlur"));
    cy.get("ic-button").shadow().find("button").focus();
    cy.get("ic-button").should(HAVE_FOCUS);
    cy.get("ic-button").blur();
    cy.get("@icBlur").should(HAVE_BEEN_CALLED_ONCE);
  });

  it("should change to have dropdownExpanded on click of dropdown button", () => {
    mount(
      <IcButton dropdown variant="primary">
        Button
      </IcButton>
    );
    cy.checkHydrated("ic-button");

    cy.clickOnButton("ic-button");
    cy.get("ic-button").should(HAVE_PROP, "dropdownExpanded");
  });

  it("should upload files from fixtures", () => {
    mount(
      <>
        <span id="selected-file">No File Selected</span>
        <IcButton
          fileUpload={true}
          accept=".doc, text/plain, .json"
          aria-describedby="selected-file"
        >
          Test
        </IcButton>
      </>
    );
    cy.checkHydrated("ic-button");
    cy.findShadowEl("ic-button", "button").should(
      HAVE_ATTR,
      "aria-describedby"
    );
    cy.clickOnButton("ic-button");
    cy.get('input[type="file"]').attachFile(
      "IcButton/fixtures/ICDSFileUpload.json"
    );
    cy.get('input[type="file"]')
      .invoke("val")
      .then((value) => {
        const descEl = document.querySelector(
          "#selected-file"
        ) as HTMLSpanElement;
        if (descEl) {
          descEl.innerText = value as string;
        }
      });
    cy.findShadowEl("ic-button", "#selected-file")
      .should("exist")
      .should(CONTAIN_TEXT, "C:\\fakepath\\ICDSFileUpload.json");
  });
});

describe("IcButton Visual Regression Testing", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render text based primary buttons", () => {
    mount(
      <div>
        <div id="primary-buttons">
          <IcButton
            variant="primary"
            id="mybuttonid"
            onClick={() => alert("test")}
          >
            Button
          </IcButton>
          <IcButton variant="primary" disabled>
            Button
          </IcButton>
          <IcButton variant="primary" loading>
            Button
          </IcButton>
          <IcButton
            variant="primary"
            appearance="dark"
            onClick={() => alert("test")}
          >
            Button
          </IcButton>
          <IcButton variant="primary" disabled appearance="dark">
            Button
          </IcButton>
          <IcButton variant="primary" loading appearance="dark">
            Button
          </IcButton>
          <div style={DARK_BG_STYLE}>
            <IcButton
              variant="primary"
              appearance="light"
              onClick={() => alert("test")}
            >
              Button
            </IcButton>
            <IcButton variant="primary" disabled appearance="light">
              Button
            </IcButton>
            <IcButton variant="primary" loading appearance="light">
              Button
            </IcButton>
          </div>
        </div>
      </div>
    );

    cy.compareSnapshot({
      name: "primary",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.01,
    });
    cy.checkA11yWithWait();
  });

  it("should render text based secondary buttons", () => {
    mount(
      <div>
        <div id="secondary-buttons">
          <IcButton
            variant="secondary"
            id="mybuttonid"
            onClick={() => alert("test")}
          >
            Button
          </IcButton>
          <IcButton variant="secondary" disabled>
            Button
          </IcButton>
          <IcButton variant="secondary" loading>
            Button
          </IcButton>
          <IcButton
            variant="secondary"
            appearance="dark"
            onClick={() => alert("test")}
          >
            Button
          </IcButton>
          <IcButton variant="secondary" disabled appearance="dark">
            Button
          </IcButton>
          <IcButton variant="secondary" loading appearance="dark">
            Button
          </IcButton>
          <div style={DARK_BG_STYLE}>
            <IcButton
              variant="secondary"
              appearance="light"
              onClick={() => alert("test")}
            >
              Button
            </IcButton>
            <IcButton variant="secondary" disabled appearance="light">
              Button
            </IcButton>
            <IcButton variant="secondary" loading appearance="light">
              Button
            </IcButton>
          </div>
        </div>
      </div>
    );

    cy.compareSnapshot({
      name: "secondary",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("should render text based tertiary buttons", () => {
    mount(
      <div>
        <div id="tertiary-buttons">
          <IcButton
            variant="tertiary"
            id="mybuttonid"
            onClick={() => alert("test")}
          >
            Button
          </IcButton>
          <IcButton variant="tertiary" disabled>
            Button
          </IcButton>
          <IcButton variant="tertiary" loading>
            Button
          </IcButton>
          <IcButton
            variant="tertiary"
            appearance="dark"
            onClick={() => alert("test")}
          >
            Button
          </IcButton>
          <IcButton variant="tertiary" disabled appearance="dark">
            Button
          </IcButton>
          <IcButton variant="tertiary" loading appearance="dark">
            Button
          </IcButton>
          <div style={DARK_BG_STYLE}>
            <IcButton
              variant="tertiary"
              appearance="light"
              onClick={() => alert("test")}
            >
              Button
            </IcButton>
            <IcButton variant="tertiary" disabled appearance="light">
              Button
            </IcButton>
            <IcButton variant="tertiary" loading appearance="light">
              Button
            </IcButton>
          </div>
        </div>
      </div>
    );

    cy.compareSnapshot({
      name: "tertiary",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("should render text based destructive buttons", () => {
    mount(
      <div>
        <div id="destructive-buttons">
          <IcButton
            variant="destructive"
            id="mybuttonid"
            onClick={() => alert("test")}
          >
            Button
          </IcButton>
          <IcButton variant="destructive" disabled>
            Button
          </IcButton>
          <IcButton variant="destructive" loading>
            Button
          </IcButton>
        </div>
      </div>
    );

    cy.compareSnapshot({
      name: "destructive",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("should render with-icon based buttons", () => {
    mount(
      <div>
        <div id="left-buttons">
          <IcButton
            variant="primary"
            id="mybuttonid"
            onClick={() => alert("test")}
          >
            Button
            <SlottedIcon />
          </IcButton>
          <IcButton variant="secondary">
            Button
            <SlottedIcon />
          </IcButton>
          <IcButton variant="tertiary">
            Button
            <SlottedIcon />
          </IcButton>
          <IcButton variant="destructive">
            Button
            <SlottedIcon />
          </IcButton>
          <IcButton variant="primary" disabled>
            Button
            <SlottedIcon />
          </IcButton>
          <IcButton
            variant="primary"
            appearance="dark"
            onClick={() => alert("test")}
          >
            Button
            <SlottedIcon />
          </IcButton>
          <div style={DARK_BG_STYLE}>
            <IcButton
              variant="primary"
              appearance="light"
              onClick={() => alert("test")}
            >
              Button
              <SlottedIcon />
            </IcButton>
          </div>
        </div>
        <div id="right-buttons">
          <IcButton
            variant="primary"
            id="mybuttonid"
            onClick={() => alert("test")}
          >
            Button
            <SlottedRightIcon />
          </IcButton>
          <IcButton variant="secondary">
            Button
            <SlottedRightIcon />
          </IcButton>
          <IcButton variant="tertiary">
            Button
            <SlottedRightIcon />
          </IcButton>
          <IcButton variant="destructive">
            Button
            <SlottedRightIcon />
          </IcButton>
          <IcButton variant="primary" disabled>
            Button
            <SlottedRightIcon />
          </IcButton>
          <IcButton
            variant="primary"
            appearance="dark"
            onClick={() => alert("test")}
          >
            Button
            <SlottedRightIcon />
          </IcButton>
          <div style={DARK_BG_STYLE}>
            <IcButton
              variant="primary"
              appearance="light"
              onClick={() => alert("test")}
            >
              Button
              <SlottedRightIcon />
            </IcButton>
          </div>
        </div>
      </div>
    );

    cy.compareSnapshot({
      name: "with-icon",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.03,
    });
    cy.checkA11yWithWait();
  });

  it("should render different sized buttons", () => {
    mount(
      <div>
        <div id="primary-buttons">
          <IcButton variant="primary" size="small">
            Small
          </IcButton>
          <IcButton variant="primary">Default</IcButton>
          <IcButton variant="primary" size="large">
            Large
          </IcButton>
          <IcButton variant="primary" size="small">
            Small
            <SlottedIcon />
          </IcButton>
          <IcButton variant="primary">
            Default
            <SlottedIcon />
          </IcButton>
          <IcButton variant="primary" size="large">
            Large
            <SlottedIcon />
          </IcButton>
        </div>
      </div>
    );

    cy.compareSnapshot({
      name: "size",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.02,
    });
    cy.checkA11yWithWait();
  });

  it("should render with icon buttons without viewbox", () => {
    mount(
      <div>
        <div id="primary-buttons">
          <IcButton variant="primary" size="small">
            Small
            <SlottedIconNoViewBox />
          </IcButton>
          <IcButton variant="primary">
            Default
            <SlottedIconNoViewBox />
          </IcButton>
          <IcButton variant="primary" size="large">
            Large
            <SlottedIconNoViewBox />
          </IcButton>
        </div>
      </div>
    );

    cy.compareSnapshot({
      name: "icon-without-viewbox",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("should render full width buttons", () => {
    mount(
      <div>
        <div id="left-buttons">
          <IcButton variant="primary" fullWidth>
            Button
            <SlottedIcon />
          </IcButton>
          <IcButton variant="secondary" fullWidth>
            Button
            <SlottedIcon />
          </IcButton>
          <IcButton variant="tertiary" fullWidth>
            Button
            <SlottedIcon />
          </IcButton>
          <IcButton variant="destructive" fullWidth>
            Button
            <SlottedIcon />
          </IcButton>
          <IcButton variant="primary" disabled fullWidth>
            Button
            <SlottedIcon />
          </IcButton>
          <IcButton variant="primary" appearance="dark" fullWidth>
            Button
            <SlottedIcon />
          </IcButton>
        </div>
      </div>
    );

    cy.compareSnapshot({
      name: "full-width",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.01,
    });
    cy.checkA11yWithWait();
  });

  it("should render icon buttons", () => {
    mount(
      <div>
        <div id="icon-buttons">
          <IcButton
            aria-label="friendly button label"
            variant="icon"
            size="small"
          >
            <SlottedIcon />
          </IcButton>
          <IcButton aria-label="friendly button label" variant="icon">
            <SlottedIcon />
          </IcButton>
          <IcButton
            aria-label="friendly button label"
            variant="icon"
            size="large"
          >
            <SlottedIcon />
          </IcButton>
          <IcButton aria-label="friendly button label" variant="icon" disabled>
            <SlottedIcon />
          </IcButton>
          <IcButton
            aria-label="friendly button label"
            variant="icon"
            appearance="dark"
          >
            <SlottedIcon />
          </IcButton>
          <div style={DARK_BG_STYLE}>
            <IcButton
              aria-label="friendly button label"
              variant="icon"
              appearance="light"
            >
              <SlottedIcon />
            </IcButton>
            <IcButton
              aria-label="friendly button label"
              variant="icon"
              appearance="light"
              disabled
            >
              <SlottedIcon />
            </IcButton>
          </div>
        </div>
      </div>
    );

    cy.compareSnapshot({ name: "icon", testThreshold: 0 });
    cy.checkA11yWithWait();
  });

  it("should render dropdown buttons", () => {
    mount(
      <div>
        <div style={{ padding: "6px" }}>
          <IcButton dropdown variant="primary">
            Button
          </IcButton>
          <IcButton dropdown variant="primary">
            Button
            <SlottedSVG
              slot="left-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
            </SlottedSVG>
          </IcButton>
          <IcButton dropdown variant="secondary">
            Button
          </IcButton>
          <IcButton dropdown variant="tertiary">
            Button
          </IcButton>
        </div>
        <div style={{ padding: "6px" }}>
          <IcButton dropdown disabled variant="primary">
            Button
          </IcButton>
          <IcButton dropdown disabled variant="primary">
            Button
            <SlottedSVG
              slot="left-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
            </SlottedSVG>
          </IcButton>
          <IcButton dropdown disabled variant="secondary">
            Button
          </IcButton>
          <IcButton dropdown disabled variant="tertiary">
            Button
          </IcButton>
        </div>
        <div style={{ padding: "6px" }}>
          <IcButton dropdown variant="primary" appearance="dark">
            Button
          </IcButton>
          <IcButton dropdown appearance="dark" variant="primary">
            Button
            <SlottedSVG
              slot="left-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
            </SlottedSVG>
          </IcButton>
          <IcButton dropdown variant="secondary" appearance="dark">
            Button
          </IcButton>
          <IcButton dropdown variant="tertiary" appearance="dark">
            Button
          </IcButton>
        </div>
        <div
          style={{
            backgroundColor: "#2c2f34",
            padding: "6px 10px",
            width: "fit-content",
          }}
        >
          <IcButton dropdown variant="primary" appearance="light">
            Button
          </IcButton>
          <IcButton dropdown appearance="light" variant="primary">
            Button
            <SlottedSVG
              slot="left-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
            </SlottedSVG>
          </IcButton>
          <IcButton dropdown variant="secondary" appearance="light">
            Button
          </IcButton>
          <IcButton dropdown variant="tertiary" appearance="light">
            Button
          </IcButton>
        </div>
        <div style={{ padding: "6px" }}>
          <IcButton dropdown variant="primary" size="small">
            Button
          </IcButton>
          <IcButton dropdown size="small" variant="primary">
            Button
            <SlottedSVG
              slot="left-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
            </SlottedSVG>
          </IcButton>
          <IcButton dropdown variant="secondary" size="small">
            Button
          </IcButton>
          <IcButton dropdown variant="tertiary" size="small">
            Button
          </IcButton>
        </div>
        <div style={{ padding: "6px" }}>
          <IcButton dropdown variant="primary" size="large">
            Button
          </IcButton>
          <IcButton dropdown size="large" variant="primary">
            Button
            <SlottedSVG
              slot="left-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
            </SlottedSVG>
          </IcButton>
          <IcButton dropdown variant="secondary" size="large">
            Button
          </IcButton>
          <IcButton dropdown variant="tertiary" size="large">
            Button
          </IcButton>
        </div>
      </div>
    );

    cy.compareSnapshot({
      name: "dropdown",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.06,
    });
    cy.checkA11yWithWait();
  });

  it("should render dropdown with popover", () => {
    mount(<PopoverDropdown />);

    cy.get("ic-button").click();

    cy.wait(100).compareSnapshot(
      "dropdown-popover",
      DEFAULT_TEST_THRESHOLD + 0.06
    );
    cy.checkA11yWithWait();
  });

  it("should render with slotted router item", () => {
    mount(
      <IcButton>
        <a slot="router-item" href="/">
          Slotted link
        </a>
      </IcButton>
    );

    cy.compareSnapshot({
      name: "router-slot",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
    cy.checkA11yWithWait();
  });
});
