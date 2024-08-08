/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React, { ReactElement } from "react";
import { mount } from "cypress/react";
import { IcTreeView, IcTreeItem } from "../../components";
import { SlottedSVG } from "@ukic/react";
import { setThresholdBasedOnEnv } from "@ukic/react/cypress/utils/helpers";
import {
  HAVE_CSS,
  HAVE_FOCUS,
  HAVE_PROP,
} from "@ukic/react/src/component-tests/utils/constants";

const TREE_VIEW = "ic-tree-view";
const TREE_ITEM = "ic-tree-item";
const TREE_ITEM_CONTENT = ".tree-item-content";

const DEFAULT_TEST_THRESHOLD = 0.026;

export const BasicTreeView = (
  props?: any,
  treeItemProps?: any
): ReactElement => (
  <div
    style={{
      width: "250px",
      padding: "16px",
      backgroundColor: props.appearance === "light" ? "black" : "white",
    }}
  >
    <IcTreeView heading="Menu" {...props}>
      <IcTreeItem label="Coffee" {...treeItemProps} />
      <IcTreeItem label="Tea">
        <IcTreeItem label="Earl Grey" />
        <IcTreeItem label="Chai" />
      </IcTreeItem>
      <IcTreeItem label="Hot Chocolate" />
    </IcTreeView>
  </div>
);

export const Icon = (): ReactElement => (
  <SlottedSVG
    slot="icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <title>file</title>
    <path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" />
  </SlottedSVG>
);

describe("IcTreeView", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render", () => {
    mount(<BasicTreeView />);

    cy.checkHydrated(TREE_VIEW);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.01),
    });
  });

  it("should render with icons", () => {
    mount(
      <div
        style={{
          width: "250px",
          padding: "16px",
        }}
      >
        <IcTreeView heading="Menu">
          <Icon />
          <IcTreeItem label="Coffee">
            <Icon />
          </IcTreeItem>
          <IcTreeItem label="Tea">
            <Icon />
            <IcTreeItem label="Earl Grey">
              <Icon />
            </IcTreeItem>
          </IcTreeItem>
        </IcTreeView>
      </div>
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "with-icons",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render small", () => {
    mount(BasicTreeView({ size: "small" }));

    cy.checkHydrated(TREE_VIEW);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "small",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.01),
    });
  });

  it("should render large", () => {
    mount(BasicTreeView({ size: "large" }));

    cy.checkHydrated(TREE_VIEW);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "large",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.01),
    });
  });

  it("should render light", () => {
    mount(BasicTreeView({ appearance: "light" }));

    cy.checkHydrated(TREE_VIEW);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "light",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.015),
    });
  });

  it("should render with disabled tree item", () => {
    mount(BasicTreeView({}, { disabled: true }));

    cy.checkHydrated(TREE_VIEW);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "disabled-tree-item",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.006),
    });
  });

  it("should render with selected tree item", () => {
    mount(BasicTreeView({}, { selected: true }));

    cy.checkHydrated(TREE_VIEW);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "selected-tree-item",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.01),
    });
  });

  it("should render with tree item as link", () => {
    mount(BasicTreeView({}, { href: "#" }));

    cy.checkHydrated(TREE_VIEW);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "link-tree-item",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.01),
    });
  });

  it("should render with expanded tree item", () => {
    mount(<BasicTreeView />);

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT).eq(1).click();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "expanded-tree-item",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.016),
    });
  });

  it("should render with truncated text", () => {
    mount(
      <div
        style={{
          width: "200px",
          padding: "16px",
        }}
      >
        <IcTreeView heading="Limited edition menu with extras">
          <IcTreeItem label="Coffee with lots of extra milk" />
          <IcTreeItem label="Tea">
            <IcTreeItem label="Earl Grey with milk on the side" />
            <IcTreeItem label="Chai" />
          </IcTreeItem>
          <IcTreeItem label="Hot Chocolate" />
        </IcTreeView>
      </div>
    );

    const TEXT_OVERFLOW = "text-overflow";
    const ELLIPSIS = "ellipsis";

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT).eq(1).click();

    cy.findShadowEl("ic-tree-view", ".tree-view-header").should(
      HAVE_CSS,
      TEXT_OVERFLOW,
      ELLIPSIS
    );

    cy.findShadowEl(TREE_ITEM, ".tree-item-label")
      .eq(0)
      .should(HAVE_CSS, TEXT_OVERFLOW, ELLIPSIS);

    cy.findShadowEl(TREE_ITEM, ".tree-item-label")
      .eq(2)
      .should(HAVE_CSS, TEXT_OVERFLOW, ELLIPSIS);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "truncated-text",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.032),
    });

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT).eq(0).realHover("mouse");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "truncated-text-hover",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.036),
    });
  });

  it("should expand and collapse parent tree items on click", () => {
    mount(<BasicTreeView />);

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT).eq(1).click();

    cy.get(TREE_ITEM).eq(1).should(HAVE_PROP, "expanded", true);

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT).eq(1).click();

    cy.get(TREE_ITEM).eq(1).should(HAVE_PROP, "expanded", false);
  });

  it("should expand and collapse parent tree items on enter", () => {
    mount(<BasicTreeView />);

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT)
      .eq(1)
      .focus()
      .realPress("Enter");

    cy.get(TREE_ITEM).eq(1).should(HAVE_PROP, "expanded", true);

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT).eq(1).realPress("Enter");

    cy.get(TREE_ITEM).eq(1).should(HAVE_PROP, "expanded", false);
  });

  it("should expand and collapse parent tree items on space", () => {
    mount(<BasicTreeView />);

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT)
      .eq(1)
      .focus()
      .realPress("Space");

    cy.get(TREE_ITEM).eq(1).should(HAVE_PROP, "expanded", true);

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT).eq(1).realPress("Space");

    cy.get(TREE_ITEM).eq(1).should(HAVE_PROP, "expanded", false);
  });

  it("should expand parent tree items on right arrow and collapse on left arrow", () => {
    mount(<BasicTreeView />);

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT)
      .eq(1)
      .focus()
      .realPress("ArrowRight");

    cy.get(TREE_ITEM).eq(1).should(HAVE_PROP, "expanded", true);

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT).eq(1).realPress("ArrowLeft");

    cy.get(TREE_ITEM).eq(1).should(HAVE_PROP, "expanded", false);
  });

  it("should navigate to first child tree item on right arrow when tree item is expanded", () => {
    mount(<BasicTreeView />);

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT)
      .eq(1)
      .focus()
      .realPress("ArrowRight")
      .realPress("ArrowRight");

    cy.get(TREE_ITEM).eq(2).should(HAVE_FOCUS);
  });

  it("should navigate through unexpanded tree items using tab", () => {
    mount(<BasicTreeView />);

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT)
      .eq(0)
      .focus()
      .realPress("Tab");

    cy.get(TREE_ITEM).eq(1).should(HAVE_FOCUS).realPress("Tab");

    cy.get(TREE_ITEM).eq(4).should(HAVE_FOCUS);
  });

  it("should navigate through unexpanded tree items using arrow down", () => {
    mount(<BasicTreeView />);

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT)
      .eq(0)
      .focus()
      .realPress("ArrowDown");

    cy.get(TREE_ITEM).eq(1).should(HAVE_FOCUS).realPress("ArrowDown");

    cy.get(TREE_ITEM).eq(4).should(HAVE_FOCUS);
  });

  it("should navigate through expanded tree items using tab", () => {
    mount(<BasicTreeView />);

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT)
      .eq(0)
      .focus()
      .realPress("Tab");

    cy.get(TREE_ITEM)
      .eq(1)
      .should(HAVE_FOCUS)
      .realPress("Enter")
      .realPress("Tab");

    cy.get(TREE_ITEM).eq(2).should(HAVE_FOCUS);
  });

  it("should navigate through expanded tree items using arrow down", () => {
    mount(<BasicTreeView />);

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT)
      .eq(0)
      .focus()
      .realPress("ArrowDown");

    cy.get(TREE_ITEM)
      .eq(1)
      .should(HAVE_FOCUS)
      .realPress("Enter")
      .realPress("ArrowDown");

    cy.get(TREE_ITEM).eq(2).should(HAVE_FOCUS);
  });

  it("should have hover state", () => {
    mount(<BasicTreeView />);

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT).eq(0).realHover("mouse");

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT)
      .eq(0)
      .should(HAVE_CSS, "background-color", "rgba(65, 70, 77, 0.1)");
  });
});

describe("IcTreeView visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  after(() => {
    cy.disableForcedColors();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render", () => {
    mount(<BasicTreeView />);

    cy.checkHydrated(TREE_VIEW);

    cy.compareSnapshot({
      name: "default-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.015),
    });
  });

  it("should render with disabled tree item", () => {
    mount(BasicTreeView({}, { disabled: true }));

    cy.checkHydrated(TREE_VIEW);

    cy.compareSnapshot({
      name: "disabled-tree-item-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.015),
    });
  });

  it("should render with expanded tree item", () => {
    mount(<BasicTreeView />);

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT).eq(1).click();

    cy.compareSnapshot({
      name: "expanded-tree-item-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
    });
  });

  it("should render with selected tree item", () => {
    mount(BasicTreeView({}, { selected: true }));

    cy.checkHydrated(TREE_VIEW);

    cy.compareSnapshot({
      name: "selected-tree-item-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.018),
    });
  });

  it("should render with icons", () => {
    mount(
      <div
        style={{
          width: "250px",
          padding: "16px",
        }}
      >
        <IcTreeView heading="Menu">
          <Icon />
          <IcTreeItem label="Coffee">
            <Icon />
          </IcTreeItem>
          <IcTreeItem label="Tea">
            <Icon />
            <IcTreeItem label="Earl Grey">
              <Icon />
            </IcTreeItem>
          </IcTreeItem>
        </IcTreeView>
      </div>
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "with-icons-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.014),
    });
  });
});
