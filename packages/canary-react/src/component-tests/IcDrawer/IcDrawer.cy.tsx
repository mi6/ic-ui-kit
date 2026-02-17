/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React, { ReactElement, useState } from "react";
import { mount } from "cypress/react";
import { IcDrawer } from "../../components";
import { setThresholdBasedOnEnv } from "@ukic/react/cypress/utils/helpers";
import {
  IcAccordion,
  IcAccordionGroup,
  IcActionChip,
  IcButton,
  IcCheckbox,
  IcCheckboxGroup,
  IcChip,
  IcRadioGroup,
  IcRadioOption,
  IcSearchBar,
  IcSelect,
  IcSwitch,
  IcTab,
  IcTabContext,
  IcTabGroup,
  IcTabPanel,
  IcTextField,
  IcTypography,
  SlottedSVG,
} from "@ukic/react";
import { mdiCoffee } from "@mdi/js";
import {
  HAVE_BEEN_CALLED_ONCE,
  HAVE_BEEN_CALLED_TWICE,
  HAVE_BEEN_CALLED_WITH,
  HAVE_FOCUS,
  HAVE_PROP,
  NOT_EXIST,
} from "@ukic/react/src/component-tests/utils/constants";

const DEFAULT_TEST_THRESHOLD = 0.01;

const CHEVRON_BUTTON_CLASS = ".chevron-btn";
const CLOSE_BUTTON_CLASS = ".close-btn";
const CONSOLE_LOG_SPY = "@spyWinConsoleLog";
const CONTENT_AREA_CLASS = ".content-area";
const DRAWER = "ic-drawer";
const DRAWER_PANEL = ".drawer-panel";
const EXPANDED = "expanded";
const IC_BUTTON = "ic-button";
const DELAY = 300; // Time taken for drawer to fully expand / collapse
const TAB_INDEX = "tabindex";

export const ControlledDrawer = (
  props?: React.ComponentProps<typeof IcDrawer> & { children?: React.ReactNode }
): ReactElement => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <IcButton onClick={() => setExpanded(!expanded)}>Toggle drawer</IcButton>
      <IcDrawer
        heading="Test heading"
        message="Test message"
        trigger="controlled"
        expanded={expanded}
        {...props}
      >
        {props?.children}
      </IcDrawer>
    </>
  );
};

export const InteractiveContentDrawer = (): ReactElement => (
  <IcDrawer heading="Test heading" message="Test message" expanded>
    <div slot="message">
      <IcRadioGroup label="Test radio group" name="1">
        <IcRadioOption value="value1" label="Unselected / Default" selected>
          <IcTextField
            slot="additional-field"
            label="Test text field"
          ></IcTextField>
        </IcRadioOption>
        <IcRadioOption
          value="value2"
          label="Selected / Default"
          additionalFieldDisplay="dynamic"
        >
          <IcTextField
            slot="additional-field"
            label="Test text field"
          ></IcTextField>
        </IcRadioOption>
        <IcRadioOption
          value="value3"
          label="Unselected / Disabled"
          disabled
        ></IcRadioOption>
      </IcRadioGroup>
      <IcSelect label="Test select" />
      <IcCheckboxGroup
        hideLabel
        label="Test checkbox group"
        name="test-checkbox-group"
      >
        <IcCheckbox
          label="Test checkbox 1"
          value="test-checkbox-1"
          additionalFieldDisplay="static"
        >
          <IcTextField slot="additional-field" label="Test text field" />
        </IcCheckbox>
        <IcCheckbox
          label="Test checkbox 2"
          value="test-checkbox-2"
          additionalFieldDisplay="dynamic"
        >
          <IcTextField slot="additional-field" label="Test text field" />
        </IcCheckbox>
        <IcCheckbox label="Disabled" value="disabled" disabled></IcCheckbox>
      </IcCheckboxGroup>
      <IcChip label="Test chip" dismissible />
      <IcActionChip label="Test action chip" />
      <IcSwitch label="Test switch"></IcSwitch>
    </div>
  </IcDrawer>
);

export const DynamicContentDrawer = (): ReactElement => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleShow = () => {
    setShow1(!show1);
    setTimeout(() => setShow2(!show2), 100); // Delay prevents false positive by ensuring the two slot updates happen at separate times
  };

  return (
    <IcDrawer heading="Test heading" expanded>
      <IcButton slot="message" onClick={handleShow} id="toggle-btn">
        Toggle button
      </IcButton>
      {show1 && (
        <IcButton id="btn" slot="message">
          Test button 1
        </IcButton>
      )}
      <div slot="message">
        {/* For testing child of already rendered slotted element */}
        {show2 && <IcButton id="child-btn">Test button 2</IcButton>}
      </div>
    </IcDrawer>
  );
};

describe("IcDrawer", () => {
  beforeEach(() => {
    cy.injectAxe();
    cy.viewport(1024, 768);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  // Snapshots

  it("should render on the right by default", () => {
    mount(<IcDrawer heading="Test heading" message="Test message" />);

    cy.checkHydrated(DRAWER);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/right-collapsed",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });

    cy.get(DRAWER).invoke("prop", "expanded", true);

    cy.checkA11yWithWait(undefined, DELAY);
    cy.compareSnapshot({
      name: "/right-expanded",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });

    // Check content area not focusable when not scrollable
    cy.findShadowEl(DRAWER, CONTENT_AREA_CLASS).should(
      HAVE_PROP,
      TAB_INDEX,
      -1
    );
  });

  it("should render on the left", () => {
    mount(
      <IcDrawer heading="Test heading" message="Test message" position="left" />
    );

    cy.checkHydrated(DRAWER);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/left-collapsed",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });

    cy.get(DRAWER).invoke("prop", "expanded", true);

    cy.checkA11yWithWait(undefined, DELAY);
    cy.compareSnapshot({
      name: "/left-expanded",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.023),
    });
  });

  it("should render at the top", () => {
    mount(
      <IcDrawer heading="Test heading" message="Test message" position="top" />
    );

    cy.checkHydrated(DRAWER);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/top-collapsed",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });

    cy.get(DRAWER).invoke("prop", "expanded", true);

    cy.checkA11yWithWait(undefined, DELAY);
    cy.compareSnapshot({
      name: "/top-expanded",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render at the bottom", () => {
    mount(
      <IcDrawer
        heading="Test heading"
        message="Test message"
        position="bottom"
      />
    );

    cy.checkHydrated(DRAWER);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/bottom-collapsed",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });

    cy.get(DRAWER).invoke("prop", "expanded", true);

    cy.checkA11yWithWait(undefined, DELAY);
    cy.compareSnapshot({
      name: "/bottom-expanded",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render small variant - right", () => {
    mount(
      <IcDrawer
        heading="Test heading"
        message="Test message"
        size="small"
        expanded
      />
    );

    cy.checkHydrated(DRAWER);

    cy.checkA11yWithWait(undefined, DELAY);
    cy.compareSnapshot({
      name: "/small-right",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render small variant - left", () => {
    mount(
      <IcDrawer
        heading="Test heading"
        message="Test message"
        size="small"
        position="left"
        expanded
      />
    );

    cy.checkHydrated(DRAWER);

    cy.checkA11yWithWait(undefined, DELAY);
    cy.compareSnapshot({
      name: "/small-left",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render small variant - top", () => {
    mount(
      <IcDrawer
        heading="Test heading"
        message="Test message"
        size="small"
        position="top"
        expanded
      />
    );

    cy.checkHydrated(DRAWER);

    cy.checkA11yWithWait(undefined, DELAY);
    cy.compareSnapshot({
      name: "/small-top",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render small variant - bottom", () => {
    mount(
      <IcDrawer
        heading="Test heading"
        message="Test message"
        size="small"
        position="bottom"
        expanded
      />
    );

    cy.checkHydrated(DRAWER);

    cy.checkA11yWithWait(undefined, DELAY);
    cy.compareSnapshot({
      name: "/small-bottom",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render large variant - right", () => {
    mount(
      <IcDrawer
        heading="Test heading"
        message="Test message"
        size="large"
        expanded
      />
    );

    cy.checkHydrated(DRAWER);

    cy.checkA11yWithWait(undefined, DELAY);
    cy.compareSnapshot({
      name: "/large-right",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render large variant - left", () => {
    mount(
      <IcDrawer
        heading="Test heading"
        message="Test message"
        size="large"
        position="left"
        expanded
      />
    );

    cy.checkHydrated(DRAWER);

    cy.checkA11yWithWait(undefined, DELAY);
    cy.compareSnapshot({
      name: "/large-left",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render large variant - top", () => {
    mount(
      <IcDrawer
        heading="Test heading"
        message="Test message"
        size="large"
        position="top"
        expanded
      />
    );

    cy.checkHydrated(DRAWER);

    cy.checkA11yWithWait(undefined, DELAY);
    cy.compareSnapshot({
      name: "/large-top",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render large variant - bottom", () => {
    mount(
      <IcDrawer
        heading="Test heading"
        message="Test message"
        size="large"
        position="bottom"
        expanded
      />
    );

    cy.checkHydrated(DRAWER);

    cy.checkA11yWithWait(undefined, DELAY);
    cy.compareSnapshot({
      name: "/large-bottom",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render with boundary prop set to 'parent'", () => {
    mount(
      <div
        style={{
          position: "relative",
          display: "flex",
          border: "1px solid lightgrey",
          flex: 1,
          margin: "32px",
          height: "calc(100vh - 66px)",
        }}
      >
        <IcDrawer
          heading="Test heading"
          message="Test message"
          boundary="parent"
        />
      </div>
    );

    cy.checkHydrated(DRAWER);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/boundary-parent-collapsed",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });

    cy.get(DRAWER).invoke("prop", "expanded", true);

    cy.checkA11yWithWait(undefined, DELAY);
    cy.compareSnapshot({
      name: "/boundary-parent-expanded",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render with slotted heading and message", () => {
    mount(
      <IcDrawer expanded>
        <IcTypography slot="heading" variant="h4">
          <h4>Test heading</h4>
        </IcTypography>
        <IcTypography slot="message">
          <p>Test message</p>
        </IcTypography>
      </IcDrawer>
    );

    cy.checkHydrated(DRAWER);

    cy.checkA11yWithWait(undefined, DELAY);
    cy.compareSnapshot({
      name: "/right-expanded", // Check slotted content looks the same as prop content
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render with slotted icon and button", () => {
    mount(
      <IcDrawer heading="Test heading" message="Test message" expanded>
        <SlottedSVG
          path={mdiCoffee}
          slot="heading-adornment"
          viewBox="0 0 24 24"
        />
        <IcButton slot="actions">Test button</IcButton>
      </IcDrawer>
    );

    cy.checkHydrated(DRAWER);

    cy.checkA11yWithWait(undefined, DELAY);
    cy.compareSnapshot({
      name: "/slotted-icon-and-button",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render with trigger prop set to 'controlled'", () => {
    mount(<ControlledDrawer />);

    cy.checkHydrated(DRAWER);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/controlled-trigger-collapsed",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });

    cy.get(IC_BUTTON).click();

    cy.checkA11yWithWait(undefined, DELAY);
    cy.compareSnapshot({
      name: "/controlled-trigger-expanded",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.008),
    });

    cy.findShadowEl(DRAWER, CLOSE_BUTTON_CLASS)
      .shadow()
      .find("button")
      .should(HAVE_FOCUS);
  });

  it("should render with hidden close button", () => {
    mount(<ControlledDrawer hideCloseButton />);

    cy.checkHydrated(DRAWER);

    cy.get(IC_BUTTON).click();

    cy.checkA11yWithWait(undefined, DELAY);
    cy.compareSnapshot({
      name: "/hidden-close-button",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });

    cy.findShadowEl(DRAWER, CLOSE_BUTTON_CLASS).should(NOT_EXIST);
  });

  it("should render with long content", () => {
    mount(
      <IcDrawer
        heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        expanded
      >
        <IcTypography slot="message">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
            dictum lacus, ut eleifend lectus. Duis egestas, odio quis malesuada
            ultricies, eros lectus suscipit lorem, rutrum auctor orci tortor sed
            turpis. Sed dapibus purus ac dolor tempus aliquet.
            <br />
            <br />
            <br />
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. In tincidunt fringilla ligula non
            ullamcorper. Sed suscipit dictum ex ut laoreet. Nullam interdum,
            tortor nec interdum auctor, felis nulla blandit est, non volutpat
            ligula urna ut tortor.
            <br />
            <br />
            <br />
            Praesent pharetra viverra dui et consequat. Nam vehicula massa
            felis, in dignissim elit lobortis vel. Curabitur suscipit faucibus
            sagittis. Donec a pulvinar quam, at vestibulum ipsum. Proin congue
            metus erat, a consectetur neque consequat quis. Fusce commodo neque
            in diam tristique, eu auctor leo ultricies.
            <br />
            <br />
            <br />
            Curabitur rutrum libero quam, imperdiet blandit turpis condimentum
            vitae. Donec luctus lacinia malesuada. Etiam mi ipsum, rhoncus vitae
            ipsum congue, varius luctus diam. In sollicitudin nisl faucibus
            ultrices luctus. Ut vitae libero nisi. Proin ut purus libero.
          </p>
        </IcTypography>
      </IcDrawer>
    );

    cy.checkHydrated(DRAWER);

    cy.wait(DELAY);
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/long-content",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });

    cy.findShadowEl(DRAWER, CONTENT_AREA_CLASS).should(HAVE_PROP, TAB_INDEX, 0);
  });

  it("should render with long content, with slotted icon and buttons", () => {
    mount(
      <IcDrawer
        heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        expanded
      >
        <SlottedSVG
          path={mdiCoffee}
          slot="heading-adornment"
          viewBox="0 0 24 24"
        />
        <IcTypography slot="message">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
            dictum lacus, ut eleifend lectus. Duis egestas, odio quis malesuada
            ultricies, eros lectus suscipit lorem, rutrum auctor orci tortor sed
            turpis. Sed dapibus purus ac dolor tempus aliquet.
            <br />
            <br />
            <br />
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. In tincidunt fringilla ligula non
            ullamcorper. Sed suscipit dictum ex ut laoreet. Nullam interdum,
            tortor nec interdum auctor, felis nulla blandit est, non volutpat
            ligula urna ut tortor.
            <br />
            <br />
            <br />
            Praesent pharetra viverra dui et consequat. Nam vehicula massa
            felis, in dignissim elit lobortis vel. Curabitur suscipit faucibus
            sagittis. Donec a pulvinar quam, at vestibulum ipsum. Proin congue
            metus erat, a consectetur neque consequat quis. Fusce commodo neque
            in diam tristique, eu auctor leo ultricies.
            <br />
            <br />
            <br />
            Curabitur rutrum libero quam, imperdiet blandit turpis condimentum
            vitae. Donec luctus lacinia malesuada. Etiam mi ipsum, rhoncus vitae
            ipsum congue, varius luctus diam. In sollicitudin nisl faucibus
            ultrices luctus. Ut vitae libero nisi. Proin ut purus libero.
          </p>
        </IcTypography>
        <IcButton slot="actions" variant="secondary">
          Test button 1
        </IcButton>
        <IcButton slot="actions">Test button 2</IcButton>
      </IcDrawer>
    );

    cy.checkHydrated(DRAWER);

    cy.wait(DELAY);
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/long-content-with-icon-and-buttons",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should move action area to above chevron button when there is not enough space (top position)", () => {
    mount(
      <IcDrawer
        heading="Test heading"
        message="Test message"
        position="top"
        expanded
      >
        <IcButton slot="actions">Test button 1</IcButton>
        <IcButton slot="actions">Test button 2</IcButton>
      </IcDrawer>
    );
    cy.viewport(450, 790);

    cy.checkHydrated(DRAWER);

    cy.checkA11yWithWait(undefined, DELAY);
    cy.compareSnapshot({
      name: "/responsive-action-area-top",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should move action area to above chevron button when there is not enough space (bottom position)", () => {
    mount(
      <IcDrawer
        heading="Test heading"
        message="Test message"
        position="bottom"
        expanded
      >
        <IcButton slot="actions">Test button 1</IcButton>
        <IcButton slot="actions">Test button 2</IcButton>
      </IcDrawer>
    );
    cy.viewport(450, 790);

    cy.checkHydrated(DRAWER);

    cy.checkA11yWithWait(undefined, DELAY);
    cy.compareSnapshot({
      name: "/responsive-action-area-bottom",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render in dark mode", () => {
    mount(
      <IcDrawer
        heading="Test heading"
        message="Test message"
        theme="dark"
        expanded
      >
        <SlottedSVG
          path={mdiCoffee}
          slot="heading-adornment"
          viewBox="0 0 24 24"
        />
        <IcButton slot="actions">Test button</IcButton>
      </IcDrawer>
    );

    cy.checkHydrated(DRAWER);

    cy.checkA11yWithWait(undefined, DELAY);
    cy.compareSnapshot({
      name: "/dark-mode",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  // Functionality

  it("should expand and collapse when the chevron button is clicked", () => {
    mount(
      <IcDrawer
        heading="Test heading"
        message="Test message"
        onIcDrawerExpanded={(ev) => console.log(ev.detail)}
      />
    );

    cy.checkHydrated(DRAWER);

    cy.spy(window.console, "log").as("spyWinConsoleLog");

    cy.findShadowEl(DRAWER, CHEVRON_BUTTON_CLASS).click();

    cy.get(DRAWER).should(HAVE_PROP, EXPANDED, true);
    cy.get(CONSOLE_LOG_SPY).should(HAVE_BEEN_CALLED_ONCE);
    cy.get(CONSOLE_LOG_SPY).should(HAVE_BEEN_CALLED_WITH, {
      expanded: true,
    });

    cy.findShadowEl(DRAWER, CHEVRON_BUTTON_CLASS).click();

    cy.get(DRAWER).should(HAVE_PROP, EXPANDED, false);
    cy.get(CONSOLE_LOG_SPY).should(HAVE_BEEN_CALLED_TWICE);
    cy.get(CONSOLE_LOG_SPY).should(HAVE_BEEN_CALLED_WITH, {
      expanded: false,
    });
  });

  it("should expand when clicked while collapsed", () => {
    mount(<IcDrawer heading="Test heading" message="Test message" />);

    cy.checkHydrated(DRAWER);

    cy.findShadowEl(DRAWER, DRAWER_PANEL).click();

    cy.get(DRAWER).should(HAVE_PROP, EXPANDED, true);
  });

  it("should not collapse when clicked while expanded", () => {
    mount(<IcDrawer heading="Test heading" message="Test message" expanded />);

    cy.checkHydrated(DRAWER);

    cy.findShadowEl(DRAWER, DRAWER_PANEL).click();

    cy.get(DRAWER).should(HAVE_PROP, EXPANDED, true);
  });

  it("should expand and collapse when using the keyboard", () => {
    mount(<IcDrawer heading="Test heading" message="Test message" />);

    cy.checkHydrated(DRAWER);

    cy.findShadowEl(DRAWER, CHEVRON_BUTTON_CLASS)
      .shadow()
      .find("button")
      .focus()
      .realPress("Enter");

    cy.get(DRAWER).should(HAVE_PROP, EXPANDED, true);
    cy.findShadowEl(DRAWER, CHEVRON_BUTTON_CLASS)
      .shadow()
      .find("button")
      .should(HAVE_FOCUS);

    cy.wait(DELAY);
    cy.realPress("Enter");

    cy.get(DRAWER).should(HAVE_PROP, EXPANDED, false);
  });

  it("should collapse when the Escape key is pressed", () => {
    mount(<IcDrawer heading="Test heading" message="Test message" expanded />);

    cy.checkHydrated(DRAWER);

    cy.findShadowEl(DRAWER, CHEVRON_BUTTON_CLASS)
      .shadow()
      .find("button")
      .focus()
      .realPress("Escape"); // Close tooltip
    cy.realPress("Escape");

    cy.get(DRAWER).should(HAVE_PROP, EXPANDED, false);
  });

  it("should collapse when backdrop is clicked", () => {
    mount(<IcDrawer heading="Test heading" message="Test message" expanded />);

    cy.checkHydrated(DRAWER);

    cy.findShadowEl(DRAWER, ".overlay").click();

    cy.get(DRAWER).should(HAVE_PROP, EXPANDED, false);
  });

  it("should not collapse when backdrop is clicked when closeOnBackdropClick prop is set to false", () => {
    mount(
      <IcDrawer
        heading="Test heading"
        message="Test message"
        expanded
        closeOnBackdropClick={false}
      />
    );

    cy.checkHydrated(DRAWER);

    cy.wait(DELAY);

    cy.findShadowEl(DRAWER, ".overlay").click();

    cy.get(DRAWER).should(HAVE_PROP, EXPANDED, true);
  });

  it("should focus the first interactive element when close button is hidden", () => {
    mount(
      <ControlledDrawer hideCloseButton>
        <IcButton slot="actions">Test button</IcButton>
      </ControlledDrawer>
    );

    cy.checkHydrated(DRAWER);

    cy.get(IC_BUTTON).contains("Toggle drawer").click();

    cy.wait(DELAY);
    cy.get(IC_BUTTON).contains("Test button").should(HAVE_FOCUS);
  });

  it("should focus the drawer panel when there are no interactive elements", () => {
    mount(<ControlledDrawer hideCloseButton />);

    cy.checkHydrated(DRAWER);

    cy.get(IC_BUTTON).contains("Toggle drawer").click();

    cy.wait(DELAY);
    cy.findShadowEl(DRAWER, DRAWER_PANEL).should(HAVE_FOCUS);
  });

  it("should trap focus", () => {
    mount(
      <IcDrawer heading="Test heading" message="Test message" expanded>
        <IcButton slot="actions">Test button</IcButton>
      </IcDrawer>
    );

    cy.checkHydrated(DRAWER);

    cy.wait(DELAY);

    const chevronButton = cy
      .findShadowEl(DRAWER, CHEVRON_BUTTON_CLASS)
      .shadow()
      .find("button");

    chevronButton.focus();

    cy.realPress("Tab");

    cy.get(IC_BUTTON)
      .contains("Test button")
      .shadow()
      .find("button")
      .should(HAVE_FOCUS);

    cy.realPress("Tab");

    chevronButton.should(HAVE_FOCUS);

    cy.realPress(["Shift", "Tab"]);

    cy.get(IC_BUTTON)
      .contains("Test button")
      .shadow()
      .find("button")
      .should(HAVE_FOCUS);

    cy.realPress(["Shift", "Tab"]);

    chevronButton.should(HAVE_FOCUS);
  });

  it("should focus interactive content and trap focus - accordion", () => {
    mount(
      <IcDrawer heading="Test heading" message="Test message" expanded>
        <IcAccordion slot="message" heading="Test accordion">
          Test accordion
        </IcAccordion>
      </IcDrawer>
    );

    cy.checkHydrated(DRAWER);

    cy.wait(DELAY);

    const chevronButton = cy
      .findShadowEl(DRAWER, CHEVRON_BUTTON_CLASS)
      .shadow()
      .find("button");
    const accordion = cy.get("ic-accordion");

    chevronButton.focus();

    cy.realPress("Tab");

    accordion.should(HAVE_FOCUS);

    cy.realPress("Tab");

    chevronButton.should(HAVE_FOCUS);

    cy.realPress(["Shift", "Tab"]);

    accordion.should(HAVE_FOCUS);

    cy.realPress(["Shift", "Tab"]);

    chevronButton.should(HAVE_FOCUS);
  });

  it("should focus interactive content and trap focus - accordion group", () => {
    mount(
      <IcDrawer heading="Test heading" message="Test message" expanded>
        <IcAccordionGroup slot="message" label="Test accordion group">
          <IcAccordion heading="Test accordion">Test accordion</IcAccordion>
        </IcAccordionGroup>
      </IcDrawer>
    );

    cy.checkHydrated(DRAWER);

    cy.wait(DELAY);

    const chevronButton = cy
      .findShadowEl(DRAWER, CHEVRON_BUTTON_CLASS)
      .shadow()
      .find("button");
    const accordion = cy.get("ic-accordion");
    const accordionGroup = cy.get("ic-accordion-group");

    chevronButton.focus();

    cy.realPress("Tab");

    accordionGroup.should(HAVE_FOCUS);

    cy.realPress("Tab");

    accordion.should(HAVE_FOCUS);

    cy.realPress("Tab");

    chevronButton.should(HAVE_FOCUS);

    cy.realPress(["Shift", "Tab"]);

    accordion.should(HAVE_FOCUS);

    cy.realPress(["Shift", "Tab"]);

    accordionGroup.should(HAVE_FOCUS);

    cy.realPress(["Shift", "Tab"]);

    chevronButton.should(HAVE_FOCUS);
  });

  it("should focus interactive content and trap focus - checkbox", () => {
    mount(
      <IcDrawer heading="Test heading" message="Test message" expanded>
        <IcCheckbox slot="message" label="Test checkbox" />
      </IcDrawer>
    );

    cy.checkHydrated(DRAWER);

    cy.wait(DELAY);

    const chevronButton = cy
      .findShadowEl(DRAWER, CHEVRON_BUTTON_CLASS)
      .shadow()
      .find("button");
    const checkbox = cy.get("ic-checkbox");

    chevronButton.focus();

    cy.realPress("Tab");

    checkbox.should(HAVE_FOCUS);

    cy.realPress("Tab");

    chevronButton.should(HAVE_FOCUS);

    cy.realPress(["Shift", "Tab"]);

    checkbox.should(HAVE_FOCUS);

    cy.realPress(["Shift", "Tab"]);

    chevronButton.should(HAVE_FOCUS);
  });

  // Focus trap not currently working in this test - https://github.com/mi6/ic-ui-kit/issues/4247 raised
  it.skip("should focus interactive content and trap focus - search bar", () => {
    mount(
      <IcDrawer heading="Test heading" message="Test message" expanded>
        <IcSearchBar slot="message" label="Test search bar" />
      </IcDrawer>
    );

    cy.checkHydrated(DRAWER);

    cy.wait(DELAY);

    const chevronButton = cy
      .findShadowEl(DRAWER, CHEVRON_BUTTON_CLASS)
      .shadow()
      .find("button");
    const searchBar = cy.get("ic-search-bar");

    chevronButton.focus();

    cy.realPress("Tab");

    searchBar.should(HAVE_FOCUS);

    cy.realPress("Tab");

    chevronButton.should(HAVE_FOCUS);

    cy.realPress(["Shift", "Tab"]);

    searchBar.should(HAVE_FOCUS);

    cy.realPress(["Shift", "Tab"]);

    chevronButton.should(HAVE_FOCUS);
  });

  it("should focus interactive content and trap focus - tabs", () => {
    mount(
      <IcDrawer heading="Test heading" message="Test message" expanded>
        <IcTabContext slot="message">
          <IcTabGroup label="Example tab group">
            <IcTab>Test tab 1</IcTab>
            <IcTab>Test tab 2</IcTab>
            <IcTab>Test tab 3</IcTab>
          </IcTabGroup>
          <IcTabPanel>Test tab panel 1</IcTabPanel>
          <IcTabPanel>Test tab panel 2</IcTabPanel>
          <IcTabPanel>Test tab panel 3</IcTabPanel>
        </IcTabContext>
      </IcDrawer>
    );

    cy.checkHydrated(DRAWER);

    cy.wait(DELAY);

    const chevronButton = cy
      .findShadowEl(DRAWER, CHEVRON_BUTTON_CLASS)
      .shadow()
      .find("button");
    const tab = cy.get("ic-tab").eq(0);

    chevronButton.focus();

    cy.realPress("Tab");

    tab.should(HAVE_FOCUS);

    cy.realPress("Tab");

    chevronButton.should(HAVE_FOCUS);

    // Shift + Tab not currently working - https://github.com/mi6/ic-ui-kit/issues/4246 raised

    // cy.realPress(["Shift", "Tab"]);

    // tab.should(HAVE_FOCUS);

    // cy.realPress(["Shift", "Tab"]);

    // chevronButton.should(HAVE_FOCUS);
  });

  it("should focus interactive content and trap focus - text field", () => {
    mount(
      <IcDrawer heading="Test heading" message="Test message" expanded>
        <IcTextField slot="message" label="What is your favourite coffee?" />
      </IcDrawer>
    );

    cy.checkHydrated(DRAWER);

    cy.wait(DELAY);

    const chevronButton = cy
      .findShadowEl(DRAWER, CHEVRON_BUTTON_CLASS)
      .shadow()
      .find("button");
    const textField = cy.get("ic-text-field");

    chevronButton.focus();

    cy.realPress("Tab");

    textField.should(HAVE_FOCUS);

    cy.realPress("Tab");

    chevronButton.should(HAVE_FOCUS);

    cy.realPress(["Shift", "Tab"]);

    textField.should(HAVE_FOCUS);

    cy.realPress(["Shift", "Tab"]);

    chevronButton.should(HAVE_FOCUS);
  });

  it("should focus interactive content and trap focus - multiple components", () => {
    mount(<InteractiveContentDrawer />);

    cy.checkHydrated(DRAWER);

    cy.wait(DELAY);

    const chevronButton = cy
      .findShadowEl(DRAWER, CHEVRON_BUTTON_CLASS)
      .shadow()
      .find("button");

    chevronButton.focus();

    cy.realPress("Tab");

    cy.get("ic-radio-option input").eq(0).should(HAVE_FOCUS);

    cy.realPress("Tab");

    cy.get("ic-text-field").eq(0).should(HAVE_FOCUS);

    cy.realPress("Tab");
    cy.realPress("Tab");

    cy.get("ic-checkbox").eq(0).should(HAVE_FOCUS);

    cy.realPress("Tab");
    cy.realPress("Tab");

    cy.get("ic-chip").should(HAVE_FOCUS);

    cy.realPress("Tab");
    cy.realPress("Tab");

    cy.get("ic-switch").should(HAVE_FOCUS);

    cy.realPress("Tab");

    chevronButton.should(HAVE_FOCUS);
  });

  it("should focus interactive content backwards and trap focus - multiple components", () => {
    mount(<InteractiveContentDrawer />);

    cy.checkHydrated(DRAWER);

    cy.wait(DELAY);

    const chevronButton = cy
      .findShadowEl(DRAWER, CHEVRON_BUTTON_CLASS)
      .shadow()
      .find("button");

    chevronButton.focus();

    for (let i = 0; i < 5; i++) {
      cy.realPress(["Shift", "Tab"]);
    }

    cy.get("ic-checkbox").eq(0).should(HAVE_FOCUS);

    for (let i = 0; i < 5; i++) {
      cy.realPress(["Shift", "Tab"]);
    }

    cy.get("ic-switch").should(HAVE_FOCUS);
  });

  it("should focus dynamically rendered content", () => {
    mount(<DynamicContentDrawer />);

    cy.wait(DELAY);

    cy.get("#toggle-btn").shadow().find("button").focus();
    cy.realPress("Enter");

    cy.wait(100);

    cy.realPress("Tab");

    cy.get("#btn").should(HAVE_FOCUS);

    cy.realPress("Tab");

    cy.get("#child-btn").should(HAVE_FOCUS);

    cy.realPress("Tab");
    cy.realPress("Tab");
    cy.realPress("Enter");

    cy.wait(100);

    cy.realPress("Tab");

    cy.findShadowEl(DRAWER, CHEVRON_BUTTON_CLASS)
      .shadow()
      .find("button")
      .should(HAVE_FOCUS);
  });
});

describe("IcDrawer - high contrast", () => {
  before(() => {
    cy.enableForcedColors();
  });

  beforeEach(() => {
    cy.viewport(1024, 768);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  after(() => {
    cy.disableForcedColors();
  });

  it("should render in high contrast mode", () => {
    mount(
      <IcDrawer heading="Test heading" message="Test message" expanded>
        <SlottedSVG
          path={mdiCoffee}
          slot="heading-adornment"
          viewBox="0 0 24 24"
        />
        <IcButton slot="actions">Test button</IcButton>
      </IcDrawer>
    );

    cy.checkHydrated(DRAWER);

    cy.wait(DELAY);

    cy.compareSnapshot({
      name: "/high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });
});
