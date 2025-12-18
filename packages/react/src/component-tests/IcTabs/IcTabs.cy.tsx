/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress/react";
import {
  BE_VISIBLE,
  HAVE_ATTR,
  CONTAIN_TEXT,
  NOT_HAVE_ATTR,
  NOT_BE_VISIBLE,
  NOT_HAVE_BEEN_CALLED,
  HAVE_BEEN_CALLED_ONCE,
  NOT_CONTAIN,
  HAVE_PROP,
} from "../utils/constants";
import {
  ChangeTabs,
  CompactTabSelector,
  ControlledModeTabs,
  DelayedTabs,
  DisabledTab,
  InlineTabGroup,
  LargerTabGroup,
  LightTabs,
  ManualActivationTabGroup,
  MinMaxTabs,
  NestedTabs,
  ResponsiveLightTextTabs,
  ResponsiveTabs,
  SimpleTabGroup,
  TabsWithIcons,
  TabsWithInlineBadges,
} from "./IcTabsTestData";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const DEFAULT_TEST_THRESHOLD = 0.033;
const ARIA_HIDDEN = "aria-hidden";
const IC_TAB_CONTEXT = "ic-tab-context";
const IC_TAB_GROUP = "ic-tab-group";
const IC_TAB = "ic-tab";
const IC_TAB_PANEL = "ic-tab-panel";
const TAB_1 = "#ic-tab-0-context-default";
const TAB_2 = "#ic-tab-1-context-default";
const TAB_3 = "#ic-tab-2-context-default";
const TAB_5 = "#ic-tab-4-context-default";
const TAB_PANEL_1 = "#ic-tab-panel-0-context-default";
const TAB_PANEL_2 = "#ic-tab-panel-1-context-default";
const TAB_PANEL_3 = "#ic-tab-panel-2-context-default";
const TAB_PANEL_5 = "#ic-tab-panel-4-context-default";

describe("IcTab end-to-end tests", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  const checkTab = (tab: string, assertion: boolean) => {
    cy.get(tab).should(assertion ? HAVE_ATTR : NOT_HAVE_ATTR, "selected");
  };

  it("should render IcTabs", () => {
    mount(<SimpleTabGroup />);

    cy.checkHydrated(IC_TAB_GROUP);

    cy.get(IC_TAB_CONTEXT);
    cy.get(IC_TAB_GROUP);
    cy.get(IC_TAB);
    cy.get(IC_TAB_PANEL);
    cy.get(IC_TAB_GROUP).should(HAVE_ATTR, "label", "Example tab group");
  });

  it("should display a tab panel when its corresponding tab is clicked", () => {
    mount(<SimpleTabGroup />);

    cy.checkHydrated(IC_TAB_GROUP);

    checkTab(TAB_1, true);
    checkTab(TAB_2, false);

    cy.get(TAB_PANEL_1)
      .should(CONTAIN_TEXT, "Tab One - Ingredients")
      .and(HAVE_PROP, "active", true)
      .and(HAVE_ATTR, ARIA_HIDDEN, "false");

    cy.get(TAB_PANEL_2)
      .should(CONTAIN_TEXT, "Tab Two - Method")
      .and(HAVE_PROP, "active", false)
      .and(HAVE_ATTR, ARIA_HIDDEN, "true");
    cy.get(TAB_PANEL_2).should(NOT_BE_VISIBLE);

    cy.get(TAB_2).click();

    checkTab(TAB_1, false);
    checkTab(TAB_2, true);

    cy.get(TAB_PANEL_1)
      .should(CONTAIN_TEXT, "Tab One - Ingredients")
      .and(HAVE_PROP, "active", false)
      .and(HAVE_ATTR, ARIA_HIDDEN, "true");
    cy.get(TAB_PANEL_2)
      .should(CONTAIN_TEXT, "Tab Two - Method")
      .and(HAVE_PROP, "active", true)
      .and(HAVE_ATTR, ARIA_HIDDEN, "false");
    cy.get(TAB_PANEL_2).should(BE_VISIBLE);
  });

  it("should hide the other tab panels when a tab is clicked", () => {
    mount(<SimpleTabGroup />);

    cy.checkHydrated(IC_TAB_GROUP);

    checkTab(TAB_1, true);
    checkTab(TAB_2, false);
    checkTab(TAB_3, false);

    cy.get(TAB_PANEL_1).should(BE_VISIBLE).and(HAVE_PROP, "active", true);
    cy.get(TAB_PANEL_2).should(NOT_BE_VISIBLE).and(HAVE_PROP, "active", false);
    cy.get(TAB_PANEL_3).should(NOT_BE_VISIBLE).and(HAVE_PROP, "active", false);

    cy.get(TAB_2).click();
    cy.get(TAB_2).should(HAVE_ATTR, "selected");
    checkTab(TAB_1, false);
    checkTab(TAB_3, false);

    cy.get(TAB_PANEL_1).should(NOT_BE_VISIBLE).and(HAVE_PROP, "active", false);
    cy.get(TAB_PANEL_2).should(BE_VISIBLE).and(HAVE_PROP, "active", true);
    cy.get(TAB_PANEL_3).should(NOT_BE_VISIBLE).and(HAVE_PROP, "active", false);
  });

  it("should emit icTabSelect event when a user selects a tab", () => {
    mount(<SimpleTabGroup />);

    cy.checkHydrated(IC_TAB_GROUP);

    cy.get(IC_TAB_CONTEXT).invoke(
      "on",
      "icTabSelect",
      cy.stub().as("icTabSelect")
    );

    cy.get("@icTabSelect").should(NOT_HAVE_BEEN_CALLED);
    cy.get(TAB_2).click();
    cy.get(TAB_2).should(HAVE_ATTR, "selected");
    cy.get("@icTabSelect").should(HAVE_BEEN_CALLED_ONCE);
  });

  it("should move focus to the next tab when the right arrow key is pressed and when using automatic activation", () => {
    mount(<SimpleTabGroup />);

    cy.checkHydrated(IC_TAB_GROUP);

    cy.get(TAB_1).click();
    cy.focused().as("activeElement");
    cy.get("@activeElement")
      .should(CONTAIN_TEXT, "Ingredients")
      .and(HAVE_ATTR, "selected");
    checkTab(TAB_2, false);
    checkTab(TAB_3, false);

    cy.realPress("ArrowRight");
    cy.focused().as("activeElement");
    cy.get("@activeElement")
      .should(CONTAIN_TEXT, "Method")
      .and(HAVE_ATTR, "selected");
    cy.get(TAB_PANEL_2).should(BE_VISIBLE).and(HAVE_PROP, "active", true);
  });

  it("should move focus to the previous tab when the left arrow key is pressed and when using automatic activation", () => {
    mount(<SimpleTabGroup />);

    cy.checkHydrated(IC_TAB_GROUP);

    cy.get(TAB_2).click();
    cy.focused().as("activeElement");
    cy.get("@activeElement")
      .should(CONTAIN_TEXT, "Method")
      .and(HAVE_ATTR, "selected");
    checkTab(TAB_1, false);
    checkTab(TAB_3, false);

    cy.realPress("ArrowLeft");
    cy.focused().as("activeElement");
    cy.get("@activeElement")
      .should(CONTAIN_TEXT, "Ingredients")
      .and(HAVE_ATTR, "selected");
    cy.get(TAB_PANEL_1).should(BE_VISIBLE).and(HAVE_PROP, "active", true);
  });

  it("should move focus to the first tab when the right arrow key is pressed if currently on the last tab", () => {
    mount(<SimpleTabGroup />);

    cy.checkHydrated(IC_TAB_GROUP);

    cy.get(TAB_3).click();
    cy.focused().as("activeElement");
    cy.get("@activeElement")
      .should(CONTAIN_TEXT, "History")
      .and(HAVE_ATTR, "selected");
    checkTab(TAB_1, false);
    checkTab(TAB_2, false);

    cy.realPress("ArrowRight");
    cy.focused().as("activeElement");
    cy.get("@activeElement")
      .should(CONTAIN_TEXT, "Ingredients")
      .and(HAVE_ATTR, "selected");
    cy.get(TAB_PANEL_1).should(BE_VISIBLE).and(HAVE_PROP, "active", true);
  });

  it("should move focus to the last tab when the left arrow key is pressed if currently on the first tab", () => {
    mount(<SimpleTabGroup />);

    cy.checkHydrated(IC_TAB_GROUP);

    cy.get(TAB_1).click();
    cy.focused().as("activeElement");
    cy.get("@activeElement")
      .should(CONTAIN_TEXT, "Ingredients")
      .and(HAVE_ATTR, "selected");
    checkTab(TAB_2, false);
    checkTab(TAB_3, false);

    cy.realPress("ArrowLeft");
    cy.focused().as("activeElement");
    cy.get("@activeElement")
      .should(CONTAIN_TEXT, "History")
      .and(HAVE_ATTR, "selected");
    cy.get(TAB_PANEL_3).should(BE_VISIBLE).and(HAVE_PROP, "active", true);
  });

  it("should move focus to the first tab when the Home key is pressed", () => {
    mount(<LargerTabGroup />);

    cy.checkHydrated(IC_TAB_GROUP);

    cy.get(TAB_3).click();
    cy.focused().as("activeElement");
    cy.get("@activeElement")
      .should(CONTAIN_TEXT, "History")
      .and(HAVE_ATTR, "selected");
    checkTab(TAB_1, false);

    cy.realPress("Home");
    cy.focused().as("activeElement");
    cy.get("@activeElement")
      .should(CONTAIN_TEXT, "Ingredients")
      .and(HAVE_ATTR, "selected");
    cy.get(TAB_PANEL_1).should(BE_VISIBLE).and(HAVE_PROP, "active", true);
  });

  it("should move focus to the last tab when the End key is pressed", () => {
    mount(<LargerTabGroup />);

    cy.checkHydrated(IC_TAB_GROUP);

    cy.get(TAB_3).click();
    cy.focused().as("activeElement");
    cy.get("@activeElement")
      .should(CONTAIN_TEXT, "History")
      .and(HAVE_ATTR, "selected");
    checkTab(TAB_5, false);

    cy.realPress("End");
    cy.focused().as("activeElement");
    cy.get("@activeElement")
      .should(CONTAIN_TEXT, "Recipes")
      .and(HAVE_ATTR, "selected");
    cy.get(TAB_PANEL_5).should(BE_VISIBLE).and(HAVE_PROP, "active", true);
  });

  it("should not display the tab panels automatically using the arrow keys when using manual activation", () => {
    mount(<ManualActivationTabGroup />);

    cy.checkHydrated(IC_TAB_GROUP);

    cy.get(TAB_1).click();
    cy.focused().as("activeElement");
    cy.get("@activeElement")
      .should(CONTAIN_TEXT, "Ingredients")
      .and(HAVE_ATTR, "selected");
    checkTab(TAB_2, false);

    cy.realPress("ArrowRight");
    cy.focused().as("activeElement");
    cy.get("@activeElement")
      .should(CONTAIN_TEXT, "Method")
      .and(NOT_HAVE_ATTR, "selected");
    cy.get(TAB_PANEL_2).should(NOT_BE_VISIBLE).and(HAVE_PROP, "active", false);

    cy.realPress("Enter");
    cy.focused().as("activeElement");
    cy.get("@activeElement")
      .should(CONTAIN_TEXT, "Method")
      .and(HAVE_ATTR, "selected");
    cy.get(TAB_PANEL_2).should(BE_VISIBLE).and(HAVE_PROP, "active", true);
  });

  it("should move focus to next tab if focused tab is removed", () => {
    let childTabs = [
      { label: "Method", content: "Tab Two - Method" },
      { label: "History", content: "Tab Three - History" },
    ];

    mount(<ChangeTabs childTabs={childTabs} />);

    cy.checkHydrated(IC_TAB_GROUP);

    cy.get(TAB_1).click();
    cy.focused().as("activeElement");
    cy.get("@activeElement")
      .should(CONTAIN_TEXT, "Ingredients")
      .and(HAVE_ATTR, "selected");

    cy.wait(2000);

    cy.focused().as("activeElement");
    cy.get("@activeElement")
      .should(CONTAIN_TEXT, "Method")
      .and(HAVE_ATTR, "selected");
  });

  it.skip("should move focus to first tab if last tab is focused and removed", () => {
    let childTabs = [
      { label: "Ingredients", content: "Tab One - Ingredients" },
      { label: "Method", content: "Tab Two - Method" },
    ];

    mount(<ChangeTabs childTabs={childTabs} />);

    cy.checkHydrated(IC_TAB_GROUP);

    cy.get(TAB_3).click();
    cy.focused().as("activeElement");
    cy.get("@activeElement")
      .should(CONTAIN_TEXT, "History")
      .and(HAVE_ATTR, "selected");

    cy.wait(2000);

    cy.focused().as("activeElement");
    cy.get("@activeElement")
      .should(CONTAIN_TEXT, "Ingredients")
      .and(HAVE_ATTR, "selected");
  });

  it("should not allow a disabled tab to be selected", () => {
    mount(<DisabledTab />);

    cy.checkHydrated(IC_TAB_GROUP);

    cy.get(TAB_2).should(HAVE_ATTR, "disabled");

    cy.get(TAB_1).click();
    cy.focused().as("activeElement");
    cy.get("@activeElement")
      .should(CONTAIN_TEXT, "Ingredients")
      .and(HAVE_ATTR, "selected");

    cy.realPress("ArrowRight");
    cy.focused().as("activeElement");
    cy.get("@activeElement").should(NOT_CONTAIN, "Method");

    cy.get("@activeElement")
      .should(CONTAIN_TEXT, "History")
      .and(HAVE_ATTR, "selected");
  });

  it("should not trigger icTabSelect event in parent tab", () => {
    mount(<NestedTabs />);

    cy.checkHydrated(IC_TAB_GROUP);

    const defaultContext = "ic-tab-context[context-id='default']";
    const nestedContext = "ic-tab-context[context-id='context-nested']";
    const nestedTab2 = "#ic-tab-1-context-context-nested";
    const nestedTab2Panel = "#ic-tab-panel-1-context-context-nested";

    cy.get(defaultContext).invoke(
      "on",
      "icTabSelect",
      cy.stub().as("icTabSelectDefault")
    );

    cy.get(nestedContext).invoke(
      "on",
      "icTabSelect",
      cy.stub().as("icTabSelectNested")
    );

    cy.get("@icTabSelectNested").should(NOT_HAVE_BEEN_CALLED);
    cy.get(nestedTab2).click();
    cy.get(nestedTab2).should(HAVE_ATTR, "selected");
    cy.get(nestedTab2Panel)
      .should(BE_VISIBLE)
      .and(CONTAIN_TEXT, "Nested Tab Panel Two - Water");
    cy.get("@icTabSelectNested").should(HAVE_BEEN_CALLED_ONCE);
    cy.get("@icTabSelectDefault").should(NOT_HAVE_BEEN_CALLED);
  });

  it("should set the selected tab in controlled mode to be the value that is passed in", () => {
    mount(<ControlledModeTabs />);

    cy.checkHydrated(IC_TAB_GROUP);

    cy.get(TAB_PANEL_2).should(BE_VISIBLE).and(HAVE_PROP, "active", true);
  });

  it("should call icTabSelect event in controlled mode when clicked", () => {
    mount(<ControlledModeTabs />);

    cy.checkHydrated(IC_TAB_GROUP);

    cy.get(IC_TAB_CONTEXT).invoke(
      "on",
      "icTabSelect",
      cy.stub().as("icTabSelect")
    );

    cy.get("@icTabSelect").should(NOT_HAVE_BEEN_CALLED);
    cy.get(TAB_2).click();
    cy.get(TAB_2).should(HAVE_ATTR, "selected");
    cy.get("@icTabSelect").should(HAVE_BEEN_CALLED_ONCE);
  });

  it("should select tab and load content when clicked - responsive tabs", () => {
    mount(<ResponsiveTabs />);

    cy.checkHydrated(IC_TAB_GROUP);

    cy.get(TAB_3).click();
    checkTab(TAB_3, true);
  });
});

describe("IcTab visual regression tests", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render default IcTab", () => {
    mount(<SimpleTabGroup />);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.01),
    });
  });

  it("should render disabled tab", () => {
    mount(<DisabledTab />);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/disabled",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.007),
    });
  });

  it("should render responsive tabs", () => {
    mount(<ResponsiveTabs />);

    //cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/responsive",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render responsive tabs with light text", () => {
    mount(
      <div style={{ backgroundColor: "var(--ic-color-page-background-dark)" }}>
        <ResponsiveLightTextTabs />
      </div>
    );

    // cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/responsive-light",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.004),
    });
  });

  it("should render IcTab with light appearance", () => {
    mount(
      <div style={{ backgroundColor: "var(--ic-color-page-background-dark)" }}>
        <LightTabs />
      </div>
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/light",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.013),
    });
  });

  it("should render IcTab with icons", () => {
    mount(<TabsWithIcons />);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/with-icons",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.01),
    });
  });

  it("should render IcTab with inline badges", () => {
    mount(<TabsWithInlineBadges />);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/with-inline-badges",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.004),
    });
  });

  it("should render IcTab correctly with Inline prop set to true", () => {
    mount(<InlineTabGroup />);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/with-inline-prop",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.01),
    });
  });

  it("should render compact tab selector with horizontal scroll", () => {
    mount(<CompactTabSelector />);

    //cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/compact",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.014),
    });
  });

  it("should render nested tabs", () => {
    mount(<NestedTabs />);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/nested",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
    });
  });

  it("should render manual activation IcTab", () => {
    mount(<ManualActivationTabGroup />);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/manual-activation",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.01),
    });
  });

  it("should render focused tab", () => {
    mount(<SimpleTabGroup />);

    cy.get(TAB_2).click();
    cy.focused().as("activeElement");
    cy.get("@activeElement").should(CONTAIN_TEXT, "Method");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/focused",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.008),
      delay: 500,
    });
  });

  it("should render focused light tab", () => {
    mount(
      <div style={{ backgroundColor: "var(--ic-color-page-background-dark)" }}>
        <LightTabs />
      </div>
    );

    cy.get(TAB_2).click();
    cy.focused().as("activeElement");
    cy.get("@activeElement").should(CONTAIN_TEXT, "Method");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/focused-light",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.014),
      delay: 500,
    });
  });

  it("should render min and max content tabs", () => {
    mount(<MinMaxTabs />);

    // cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/min-max",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.023),
    });
  });

  it("should render tabs correctly when created after a delay", () => {
    mount(<DelayedTabs />);

    cy.wait(2000);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/delayed-tabs",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.007),
    });
  });
});

describe("IcTabs visual regression in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  after(() => {
    cy.disableForcedColors();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render a tab group with tab focussed", () => {
    mount(<SimpleTabGroup />);

    cy.get(TAB_2).click();
    cy.focused().as("activeElement");
    cy.get("@activeElement").should(CONTAIN_TEXT, "Method");

    cy.compareSnapshot({
      name: "/focused-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.014),
    });
  });

  it("should render disabled tab", () => {
    mount(<DisabledTab />);

    cy.compareSnapshot({
      name: "/disabled-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.01),
    });
  });

  it("should render inline tab group", () => {
    mount(<InlineTabGroup />);

    cy.compareSnapshot({
      name: "/inline-prop-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.013),
    });
  });
});
