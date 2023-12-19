/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
import { IcButton } from "../../components";
import { CYPRESS_AXE_OPTIONS } from "../../../cypress/utils/a11y";
import { mount } from "cypress/react";
import {
  DARK_BG_STYLE,
  SlottedIcon,
  SlottedIconNoViewBox,
  SlottedRightIcon,
} from "./IcButtonTestData";

const WIN_CONSOLE_SPY = "@spyWinConsoleLog";
const NOT_BE_CALLED_ONCE = "not.be.calledOnce";
const HAVE_VALUE = "have.value";

const ID_NAME = "#name";
const TEXT_INPUT = "@textInput";

const submitForm = (ev: React.FormEvent<HTMLFormElement>) => {
  ev.preventDefault();
  console.log("foo");
};

describe("IcButton", () => {
  it("renders", () => {
    mount(<IcButton>Test</IcButton>);

    cy.get("ic-button").contains("Test").should("be.visible");
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
      "have.attr",
      "aria-describedby"
    );
    cy.clickOnButton("ic-button");
    cy.findShadowEl("ic-button", "#button-description")
      .should("exist")
      .should("have.text", "See, I told you it was amazing!");
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
    cy.get(WIN_CONSOLE_SPY).should("be.calledOnce");
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
    // Listen to icFocus being emitted by IcButton
    mount(
      <IcButton id="ic-button" onClick={() => console.log("Hello World")}>
        Primary
      </IcButton>
    );

    cy.checkHydrated("ic-button");

    cy.get("ic-button").invoke("on", "icFocus", cy.stub().as("icFocus"));

    cy.get("ic-button").shadow().find("button").focus();

    cy.get("ic-button").should("have.focus");
    cy.get("@icFocus").should("have.been.calledOnce");
  });

  it("should emit icBlur on blur event", () => {
    // Listen to icBlur being emitted by IcButton
    mount(<IcButton id="ic-button">Primary</IcButton>);
    cy.checkHydrated("ic-button");

    cy.get("ic-button").invoke("on", "icBlur", cy.stub().as("icBlur"));
    cy.get("ic-button").shadow().find("button").focus();
    cy.get("ic-button").should("have.focus");
    cy.get("ic-button").blur();
    cy.get("@icBlur").should("have.been.calledOnce");
  });
});

describe("IcButton Visual Regression Testing", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("renders text based primary buttons", () => {
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

    cy.compareSnapshot("primary");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders text based secondary buttons", () => {
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

    cy.compareSnapshot("secondary");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders text based tertiary buttons", () => {
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

    cy.compareSnapshot("tertiary");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders text based destructive buttons", () => {
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

    cy.compareSnapshot("destructive");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with-icon based buttons", () => {
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

    cy.compareSnapshot("with-icon");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders different sized buttons", () => {
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

    cy.compareSnapshot("size");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with icon buttons without viewbox", () => {
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

    cy.compareSnapshot("icon-without-viewbox");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders full width buttons", () => {
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

    cy.compareSnapshot("full-width");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders icon buttons", () => {
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

    cy.compareSnapshot("icon");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });
});
