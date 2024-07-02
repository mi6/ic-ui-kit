/// <reference types="Cypress" />

import React from "react";
import {
  IcBadge,
  IcButton,
  IcChip,
  IcTab,
  IcTabContext,
  IcTabGroup,
  IcTabPanel,
} from "../../components";
import { HAVE_ATTR, HAVE_CLASS, NOT_HAVE_ATTR } from "../utils/constants";
import { mount } from "cypress/react";
import { ShowHideBadge, badgeTypes } from "./IcBadgeTestData";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const DEFAULT_TEST_THRESHOLD = 0.049;

const ARIA_LABEL = "aria-label";

describe("IcBadge", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should show and hide the badge", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <ShowHideBadge />
      </div>
    );

    cy.get("ic-button").click();
    cy.get("ic-badge").should(HAVE_CLASS, "hide");
    cy.get("ic-button").click();
    cy.get("ic-badge").should(HAVE_CLASS, "show");
  });

  it("should have more descriptive aria-label if prop set", () => {
    mount(
      <IcButton variant="secondary" style={{ margin: "16px" }}>
        <IcBadge
          label="1"
          slot="badge"
          size="large"
          accessible-label="1 notification found"
        />
        Default
      </IcButton>
    );

    cy.get("ic-button").should(HAVE_ATTR, ARIA_LABEL, " 1 notification found");
  });

  it("should remove ariaLabel from parent when the badge is not visible", () => {
    mount(
      <IcButton variant="secondary" style={{ margin: "16px" }}>
        <IcBadge label="1" slot="badge" size="large" />
        Default
      </IcButton>
    );

    cy.get("ic-button").should(HAVE_ATTR, ARIA_LABEL, " 1");

    cy.get("ic-badge").invoke("prop", "visible", false);

    cy.get("ic-button").should(NOT_HAVE_ATTR, ARIA_LABEL);
  });

  it("should render success", () => {
    mount(badgeTypes("success"));

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "success",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
    });
  });

  it("should render error", () => {
    mount(badgeTypes("error"));

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "error",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
    });
  });

  it("should render warning", () => {
    mount(badgeTypes("warning"));

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "warning",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
    });
  });

  it("should render neutral", () => {
    mount(badgeTypes("neutral"));

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "neutral",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
    });
  });

  it("should render light", () => {
    mount(badgeTypes("light"));

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "light",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
    });
  });

  it("should render info", () => {
    mount(badgeTypes("info"));

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "info",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
    });
  });

  it("should render custom", () => {
    mount(badgeTypes("custom", "#F8C8DC"));

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "custom",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
    });
  });

  it("should render max number", () => {
    mount(
      <div>
        <div style={{ padding: "16px" }}>
          <IcButton variant="secondary" style={{ marginRight: "16px" }}>
            <IcBadge
              label="1000"
              slot="badge"
              size="small"
              max-number="9"
              variant="success"
            />
            Small
          </IcButton>
          <IcButton variant="secondary" style={{ marginRight: "16px" }}>
            <IcBadge
              label="1000"
              max-number="9"
              slot="badge"
              variant="success"
            />
            Default
          </IcButton>
          <IcButton variant="secondary">
            <IcBadge
              label="1000"
              slot="badge"
              size="large"
              max-number="9"
              variant="success"
            />
            Large
          </IcButton>
        </div>
        <div style={{ padding: "16px" }}>
          <IcButton variant="secondary" style={{ marginRight: "16px" }}>
            <IcBadge
              label="1000"
              slot="badge"
              size="small"
              max-number="99"
              variant="success"
            />
            Small
          </IcButton>
          <IcButton variant="secondary" style={{ marginRight: "16px" }}>
            <IcBadge
              label="1000"
              max-number="99"
              slot="badge"
              variant="success"
            />
            Default
          </IcButton>
          <IcButton variant="secondary">
            <IcBadge
              label="1000"
              slot="badge"
              size="large"
              max-number="99"
              variant="success"
            />
            Large
          </IcButton>
        </div>
      </div>
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "max-number",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.001),
    });
  });

  it("should render position near", () => {
    mount(
      <div>
        <div style={{ padding: "16px" }}>
          <IcChip label="Small" style={{ marginRight: "16px" }}>
            <IcBadge label="1" slot="badge" position="near" size="small" />
          </IcChip>
          <IcChip label="Default" style={{ marginRight: "16px" }}>
            <IcBadge label="1" slot="badge" position="near" />
          </IcChip>
          <IcChip label="Large">
            <IcBadge label="1" slot="badge" position="near" size="large" />
          </IcChip>
        </div>
        <div style={{ padding: "16px" }}>
          <IcChip label="Small Dot" style={{ marginRight: "16px" }}>
            <IcBadge type="dot" slot="badge" position="near" size="small" />
          </IcChip>
          <IcChip label="Default Dot" style={{ marginRight: "16px" }}>
            <IcBadge type="dot" slot="badge" position="near" />
          </IcChip>
          <IcChip label="Large Dot">
            <IcBadge type="dot" slot="badge" position="near" size="large" />
          </IcChip>
        </div>
      </div>
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "position-near",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.002),
    });
  });

  it("should render position inline", () => {
    cy.viewport(700, 500);
    mount(
      <IcTabContext>
        <IcTabGroup label="Example tab group">
          <IcTab>
            Small
            <IcBadge
              label="1"
              slot="badge"
              position="inline"
              size="small"
              accessibleLabel="1 notification found"
            />
          </IcTab>
          <IcTab>
            Default
            <IcBadge
              label="1"
              slot="badge"
              position="inline"
              accessibleLabel="1 notification found"
            />
          </IcTab>
          <IcTab>
            Large
            <IcBadge
              label="1"
              slot="badge"
              position="inline"
              size="large"
              accessibleLabel="1 notification found"
            />
          </IcTab>
          <IcTab>
            Small Dot
            <IcBadge type="dot" slot="badge" position="inline" size="small" />
          </IcTab>
          <IcTab>
            Dot
            <IcBadge type="dot" slot="badge" position="inline" />
          </IcTab>
          <IcTab>
            Large Dot
            <IcBadge type="dot" slot="badge" position="inline" size="large" />
          </IcTab>
        </IcTabGroup>
        <IcTabPanel>Default badge</IcTabPanel>
        <IcTabPanel>Small badge</IcTabPanel>
        <IcTabPanel>Large badge</IcTabPanel>
        <IcTabPanel>Small dot badge</IcTabPanel>
        <IcTabPanel>Default dot badge</IcTabPanel>
        <IcTabPanel>Large dot badge</IcTabPanel>
      </IcTabContext>
    );

    cy.checkA11yWithWait(undefined, 100);
    cy.compareSnapshot({
      name: "position-inline",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });
});
