/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import { mount } from "cypress/react";
import React from "react";
import { IcButton } from "../../components";
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
  TextPrimaryButton,
  TextSecondaryButton,
  TextTertiaryButton,
  TextDestructiveButton,
  WithIcons,
  DifferentSizes,
  IconNoViewbox,
  FullWidth,
  DropdownButtons,
  IconButtonGroup,
  IconBtnWithTooltip,
  CustomHeightMinWidth,
  FileUpload,
} from "./IcButtonTestData";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const WIN_CONSOLE_SPY = "@spyWinConsoleLog";

const IC_BUTTON_SELECTOR = "ic-button";
const ID_NAME = "#name";
const TEXT_INPUT = "@textInput";

const DEFAULT_TEST_THRESHOLD = 0.009;

const submitForm = (ev: React.FormEvent<HTMLFormElement>) => {
  ev.preventDefault();
  console.log("foo");
};

describe("IcButton end-to-end tests", () => {
  it("should render", () => {
    mount(<IcButton>Test</IcButton>);

    cy.checkHydrated(IC_BUTTON_SELECTOR);
    cy.get(IC_BUTTON_SELECTOR).contains("Test").should(BE_VISIBLE);
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

    cy.checkHydrated(IC_BUTTON_SELECTOR);
    cy.clickOnButton(IC_BUTTON_SELECTOR);
    cy.get(IC_BUTTON_SELECTOR).should(CONTAIN_TEXT, "clicked");
  });

  it("should not be clickable when disabled", () => {
    cy.spy(window.console, "log").as("spyWinConsoleLog");
    mount(
      <IcButton disabled onClick={() => console.log("foo")}>
        Disabled
      </IcButton>
    );

    cy.checkHydrated(IC_BUTTON_SELECTOR);
    cy.clickOnButton(IC_BUTTON_SELECTOR);

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

    cy.checkHydrated(IC_BUTTON_SELECTOR);

    cy.findShadowEl(IC_BUTTON_SELECTOR, "button").should(
      HAVE_ATTR,
      "aria-describedby"
    );
    cy.findShadowEl(IC_BUTTON_SELECTOR, "#button-description")
      .should("exist")
      .should(CONTAIN_TEXT, "This button does something amazing");
    cy.clickOnButton(IC_BUTTON_SELECTOR);
    cy.findShadowEl(IC_BUTTON_SELECTOR, "#button-description")
      .should("exist")
      .should(CONTAIN_TEXT, "See, I told you it was amazing!");
  });

  it("should have loading bar when loading", () => {
    mount(<IcButton loading>Loading</IcButton>);

    cy.checkHydrated(IC_BUTTON_SELECTOR);
    cy.findShadowEl(IC_BUTTON_SELECTOR, "ic-loading-indicator").should("exist");
  });

  it("should not be clickable when loading", () => {
    cy.spy(window.console, "log").as("spyWinConsoleLog");
    mount(<IcButton loading>Loading</IcButton>);

    cy.checkHydrated(IC_BUTTON_SELECTOR);
    cy.findShadowEl(IC_BUTTON_SELECTOR, "ic-loading-indicator").should("exist");
    cy.clickOnButton(IC_BUTTON_SELECTOR);
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

    cy.checkHydrated(IC_BUTTON_SELECTOR);
    cy.clickOnButton(IC_BUTTON_SELECTOR);

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

    cy.checkHydrated(IC_BUTTON_SELECTOR);
    cy.clickOnButton(IC_BUTTON_SELECTOR);

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

    cy.checkHydrated(IC_BUTTON_SELECTOR);
    cy.clickOnButton(IC_BUTTON_SELECTOR);
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

    cy.checkHydrated(IC_BUTTON_SELECTOR);
    cy.clickOnButton(IC_BUTTON_SELECTOR);

    cy.get(TEXT_INPUT).should(HAVE_VALUE, "foo");
    cy.get(WIN_CONSOLE_SPY).should(NOT_BE_CALLED_ONCE);
  });

  it("should emit icFocus on focus event", () => {
    mount(
      <IcButton id="ic-button" onClick={() => console.log("Hello World")}>
        Primary
      </IcButton>
    );

    cy.checkHydrated(IC_BUTTON_SELECTOR);

    cy.get(IC_BUTTON_SELECTOR).invoke("on", "icFocus", cy.stub().as("icFocus"));
    cy.get(IC_BUTTON_SELECTOR).shadow().find("button").focus();
    cy.get(IC_BUTTON_SELECTOR).should(HAVE_FOCUS);
    cy.get("@icFocus").should(HAVE_BEEN_CALLED_ONCE);
  });

  it("should emit icBlur on blur event", () => {
    mount(<IcButton id="ic-button">Primary</IcButton>);

    cy.checkHydrated(IC_BUTTON_SELECTOR);

    cy.get(IC_BUTTON_SELECTOR).invoke("on", "icBlur", cy.stub().as("icBlur"));
    cy.get(IC_BUTTON_SELECTOR).shadow().find("button").focus();
    cy.get(IC_BUTTON_SELECTOR).should(HAVE_FOCUS);
    cy.get(IC_BUTTON_SELECTOR).blur();
    cy.get("@icBlur").should(HAVE_BEEN_CALLED_ONCE);
  });

  it("should change to have dropdownExpanded on click of dropdown button", () => {
    mount(
      <IcButton dropdown variant="primary">
        Button
      </IcButton>
    );

    cy.checkHydrated(IC_BUTTON_SELECTOR);

    cy.clickOnButton(IC_BUTTON_SELECTOR);
    cy.get(IC_BUTTON_SELECTOR).should(HAVE_PROP, "dropdownExpanded");
  });

  it("should upload files from fixtures", () => {
    mount(<FileUpload />);

    cy.checkHydrated(IC_BUTTON_SELECTOR);
    cy.get(IC_BUTTON_SELECTOR).invoke(
      "on",
      "icFileSelection",
      cy.stub().as("icFileSelection")
    );
    cy.get(IC_BUTTON_SELECTOR + '[file-upload="true"]').should("exist");
    cy.findShadowEl(IC_BUTTON_SELECTOR, "button").should(
      HAVE_ATTR,
      "aria-describedby"
    );

    cy.clickOnButton(IC_BUTTON_SELECTOR);
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
    cy.findShadowEl(IC_BUTTON_SELECTOR, "#selected-file")
      .should("exist")
      .should(CONTAIN_TEXT, "C:\\fakepath\\ICDSFileUpload.json");
    cy.get("@icFileSelection").should(HAVE_BEEN_CALLED_ONCE);
  });

  it("download link should exist on the DOM", () => {
    mount(
      <IcButton download href="/components/button/code">
        Download
      </IcButton>
    );

    cy.checkHydrated(IC_BUTTON_SELECTOR);
    cy.get(IC_BUTTON_SELECTOR + '[download="true"]').should("exist");
  });
});

describe("IcButton visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render text-based primary buttons", () => {
    mount(<TextPrimaryButton />);

    cy.checkHydrated(IC_BUTTON_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "primary",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.021),
    });
  });

  it("should render text-based secondary buttons", () => {
    mount(<TextSecondaryButton />);

    cy.checkHydrated(IC_BUTTON_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "secondary",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.03),
    });
  });

  it("should render text-based tertiary buttons", () => {
    mount(<TextTertiaryButton />);

    cy.checkHydrated(IC_BUTTON_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "tertiary",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
    });
  });

  it("should render text-based destructive buttons", () => {
    mount(<TextDestructiveButton />);

    cy.checkHydrated(IC_BUTTON_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "destructive",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.005),
    });
  });

  it("should render with-icon buttons", () => {
    mount(<WithIcons />);

    cy.checkHydrated(IC_BUTTON_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "with-icon",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.061),
    });
  });

  it("should render with-icon buttons without viewbox", () => {
    mount(<IconNoViewbox />);

    cy.checkHydrated(IC_BUTTON_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "icon-without-viewbox",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
    });
  });

  it("should render different sized buttons", () => {
    mount(<DifferentSizes />);

    cy.checkHydrated(IC_BUTTON_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "size",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.032),
    });
  });

  it("should render full width buttons", () => {
    mount(<FullWidth />);

    cy.checkHydrated(IC_BUTTON_SELECTOR);

    cy.get(IC_BUTTON_SELECTOR)
      .shadow()
      .find("button")
      .eq(0)
      .focus()
      .realPress("Enter");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "full-width",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.027),
    });
  });

  it("should render dropdown buttons", () => {
    mount(<DropdownButtons />);

    cy.checkHydrated(IC_BUTTON_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "dropdown",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.068),
    });
  });

  it("should render expanded dropdown with popover", () => {
    mount(<PopoverDropdown />);

    cy.checkHydrated(IC_BUTTON_SELECTOR);
    cy.get(IC_BUTTON_SELECTOR).click();

    cy.checkA11yWithWait(undefined, 1000);
    cy.compareSnapshot({
      name: "expanded-dropdown-popover",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.026),
    });
  });

  it("should render with slotted router item", () => {
    mount(
      <IcButton>
        <a slot="router-item" href="/">
          Slotted link
        </a>
      </IcButton>
    );

    cy.checkHydrated(IC_BUTTON_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "router-slot",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.013),
    });
  });

  it("should render with icon variant button group", () => {
    mount(<IconButtonGroup />);

    cy.checkHydrated(IC_BUTTON_SELECTOR);

    cy.checkA11yWithWait();
    cy.wait(500).compareSnapshot({
      name: "icon-variants-button-group",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.041),
    });
  });

  it("should render tooltip on a text-based button on hover", () => {
    mount(
      <IcButton
        style={{ padding: "10px" }}
        title="This is a tooltip"
        tooltip-placement="bottom"
      >
        Test
      </IcButton>
    );

    cy.checkHydrated(IC_BUTTON_SELECTOR);
    cy.get(IC_BUTTON_SELECTOR)
      .shadow()
      .find("button")
      .focus()
      .trigger("mouseover");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "tooltip-primary",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.021),
    });
  });

  it("should render tooltip on an icon button on hover", () => {
    mount(IconBtnWithTooltip("icon-primary"));

    cy.checkHydrated(IC_BUTTON_SELECTOR);
    cy.get(IC_BUTTON_SELECTOR)
      .shadow()
      .find("button")
      .focus()
      .trigger("mouseover");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "tooltip-icon",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.016),
    });
  });

  it("should render tooltip on a secondary icon button on hover", () => {
    mount(IconBtnWithTooltip("icon-secondary"));

    cy.checkHydrated(IC_BUTTON_SELECTOR);
    cy.get(IC_BUTTON_SELECTOR)
      .shadow()
      .find("button")
      .focus()
      .trigger("mouseover");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "tooltip-icon-secondary",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.016),
    });
  });

  it("should render tooltip on a tertiary icon button on hover", () => {
    mount(IconBtnWithTooltip("icon-tertiary"));

    cy.checkHydrated(IC_BUTTON_SELECTOR);
    cy.get(IC_BUTTON_SELECTOR)
      .shadow()
      .find("button")
      .focus()
      .trigger("mouseover");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "tooltip-icon-tertiary",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.016),
    });
  });

  it("should render tooltip on a destructive icon button on hover", () => {
    mount(IconBtnWithTooltip("icon-destructive"));

    cy.checkHydrated(IC_BUTTON_SELECTOR);
    cy.get(IC_BUTTON_SELECTOR)
      .shadow()
      .find("button")
      .focus()
      .trigger("mouseover");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "tooltip-icon-destructive",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.016),
    });
  });

  it("should render focused text-based primary button", () => {
    mount(<IcButton style={{ padding: "10px" }}>Test</IcButton>);

    cy.checkHydrated(IC_BUTTON_SELECTOR);
    cy.get(IC_BUTTON_SELECTOR)
      .shadow()
      .find("button")
      .focus()
      .realPress("Enter");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "focused-primary",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.003),
    });
  });

  it("should render focused text-based secondary button", () => {
    mount(
      <IcButton variant="secondary" style={{ padding: "10px" }}>
        Test
      </IcButton>
    );

    cy.checkHydrated(IC_BUTTON_SELECTOR);
    cy.get(IC_BUTTON_SELECTOR)
      .shadow()
      .find("button")
      .focus()
      .realPress("Enter");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "focused-secondary",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.005),
    });
  });

  it("should render focused text-based tertiary button", () => {
    mount(
      <IcButton variant="tertiary" style={{ padding: "10px" }}>
        Test
      </IcButton>
    );

    cy.checkHydrated(IC_BUTTON_SELECTOR);
    cy.get(IC_BUTTON_SELECTOR)
      .shadow()
      .find("button")
      .focus()
      .realPress("Enter");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "focused-tertiary",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.005),
    });
  });

  it("should render focused text-based destructive button", () => {
    mount(
      <IcButton variant="destructive" style={{ padding: "10px" }}>
        Test
      </IcButton>
    );

    cy.checkHydrated(IC_BUTTON_SELECTOR);
    cy.get(IC_BUTTON_SELECTOR)
      .shadow()
      .find("button")
      .focus()
      .realPress("Enter");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "focused-destructive",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render focused text-based primary button with light appearance", () => {
    mount(
      <div style={DARK_BG_STYLE}>
        <IcButton appearance="light">Test</IcButton>
      </div>
    );

    cy.checkHydrated(IC_BUTTON_SELECTOR);
    cy.get(IC_BUTTON_SELECTOR)
      .shadow()
      .find("button")
      .focus()
      .realPress("Enter");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "focused-primary-light",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.006),
    });
  });

  it("should render focused text-based primary button with dark appearance", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcButton appearance="dark">Test</IcButton>
      </div>
    );

    cy.checkHydrated(IC_BUTTON_SELECTOR);
    cy.get(IC_BUTTON_SELECTOR)
      .shadow()
      .find("button")
      .focus()
      .realPress("Enter");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "focused-primary-dark",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.004),
    });
  });

  it("should render button with custom height and width", () => {
    mount(<CustomHeightMinWidth />);

    cy.checkHydrated(IC_BUTTON_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "height-width",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.016),
    });
  });
});

describe("IcButton visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  after(() => {
    cy.disableForcedColors();
  });

  it("should render text-based primary buttons in high contrast mode", () => {
    mount(<TextPrimaryButton />);

    cy.checkHydrated(IC_BUTTON_SELECTOR);

    cy.compareSnapshot({
      name: "primary-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.031),
    });
  });

  it("should render text-based secondary buttons in high contrast mode", () => {
    mount(<TextSecondaryButton />);

    cy.checkHydrated(IC_BUTTON_SELECTOR);

    cy.compareSnapshot({
      name: "secondary-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.038),
    });
  });

  it("should render text-based tertiary buttons in high contrast mode", () => {
    mount(<TextTertiaryButton />);

    cy.checkHydrated(IC_BUTTON_SELECTOR);

    cy.compareSnapshot({
      name: "tertiary-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.031),
    });
  });

  it("should render text-based destructive buttons in high contrast mode", () => {
    mount(<TextDestructiveButton />);

    cy.checkHydrated(IC_BUTTON_SELECTOR);

    cy.compareSnapshot({
      name: "destructive-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.013),
    });
  });

  it("should render with-icon buttons in high contrast mode", () => {
    mount(<WithIcons />);

    cy.checkHydrated(IC_BUTTON_SELECTOR);

    cy.compareSnapshot({
      name: "with-icon-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.071),
    });
  });

  it("should render icon variants in high contrast mode", () => {
    mount(<IconButtonGroup />);

    cy.checkHydrated(IC_BUTTON_SELECTOR);

    cy.compareSnapshot({
      name: "icon-variants-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.047),
    });
  });

  it("should render expanded dropdown with popover in high contrast mode", () => {
    mount(<PopoverDropdown />);

    cy.checkHydrated(IC_BUTTON_SELECTOR);
    cy.get(IC_BUTTON_SELECTOR).click().wait(1000);

    cy.compareSnapshot({
      name: "expanded-dropdown-popover-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.026),
    });
  });

  it("should render tooltip on an icon button on hover in high contrast mode", () => {
    mount(IconBtnWithTooltip("icon-primary"));

    cy.checkHydrated(IC_BUTTON_SELECTOR);
    cy.get(IC_BUTTON_SELECTOR)
      .shadow()
      .find("button")
      .focus()
      .trigger("mouseover");

    cy.compareSnapshot({
      name: "tooltip-icon-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.017),
    });
  });

  it("should render focused text-based primary button in high contrast mode", () => {
    mount(<IcButton style={{ padding: "10px" }}>Test</IcButton>);

    cy.checkHydrated(IC_BUTTON_SELECTOR);
    cy.get(IC_BUTTON_SELECTOR)
      .shadow()
      .find("button")
      .focus()
      .realPress("Enter");

    cy.compareSnapshot({
      name: "focused-primary-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.004),
    });
  });

  it("should render focused text-based primary button with light appearance in high contrast mode", () => {
    mount(
      <div style={DARK_BG_STYLE}>
        <IcButton appearance="light">Test</IcButton>
      </div>
    );

    cy.checkHydrated(IC_BUTTON_SELECTOR);
    cy.get(IC_BUTTON_SELECTOR)
      .shadow()
      .find("button")
      .focus()
      .realPress("Enter");

    cy.compareSnapshot({
      name: "focused-primary-light-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.004),
    });
  });

  it("should render focused text-based primary button with dark appearance in high contrast mode", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcButton appearance="dark">Test</IcButton>
      </div>
    );

    cy.checkHydrated(IC_BUTTON_SELECTOR);
    cy.get(IC_BUTTON_SELECTOR)
      .shadow()
      .find("button")
      .focus()
      .realPress("Enter");

    cy.compareSnapshot({
      name: "focused-primary-dark-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.004),
    });
  });
});
