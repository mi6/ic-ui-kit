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
import { HAVE_ATTR, HAVE_CLASS } from "../utils/constants";
import { mount } from "cypress/react";
import { ShowHideBadge, badgeTypes } from "./IcBadgeTestData";

const DEFAULT_TEST_THRESHOLD = 0.06;

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
          text-label="1"
          slot="badge"
          size="large"
          accessible-label="1 notification found"
        />
        Default
      </IcButton>
    );

    cy.get("ic-button").should(
      HAVE_ATTR,
      "aria-label",
      " 1 notification found"
    );
  });

  it("renders success", () => {
    mount(badgeTypes("success"));

    cy.compareSnapshot({
      name: "success",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("renders error", () => {
    mount(badgeTypes("error"));

    cy.compareSnapshot({
      name: "error",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("renders warning", () => {
    mount(badgeTypes("warning"));

    cy.compareSnapshot({
      name: "warning",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("renders neutral", () => {
    mount(badgeTypes("neutral"));

    cy.compareSnapshot({
      name: "neutral",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("renders light", () => {
    mount(badgeTypes("light"));

    cy.compareSnapshot({
      name: "light",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("renders info", () => {
    mount(badgeTypes("info"));

    cy.compareSnapshot({ name: "info", testThreshold: DEFAULT_TEST_THRESHOLD });
    cy.checkA11yWithWait();
  });

  it("renders custom", () => {
    mount(badgeTypes("custom", "#F8C8DC"));

    cy.compareSnapshot({
      name: "custom",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("renders max number", () => {
    mount(
      <div>
        <div style={{ padding: "16px" }}>
          <IcButton variant="secondary" style={{ marginRight: "16px" }}>
            <IcBadge
              text-label="1000"
              slot="badge"
              size="small"
              max-number="9"
              variant="success"
            />
            Small
          </IcButton>
          <IcButton variant="secondary" style={{ marginRight: "16px" }}>
            <IcBadge
              text-label="1000"
              max-number="9"
              slot="badge"
              variant="success"
            />
            Default
          </IcButton>
          <IcButton variant="secondary">
            <IcBadge
              text-label="1000"
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
              text-label="1000"
              slot="badge"
              size="small"
              max-number="99"
              variant="success"
            />
            Small
          </IcButton>
          <IcButton variant="secondary" style={{ marginRight: "16px" }}>
            <IcBadge
              text-label="1000"
              max-number="99"
              slot="badge"
              variant="success"
            />
            Default
          </IcButton>
          <IcButton variant="secondary">
            <IcBadge
              text-label="1000"
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

    cy.compareSnapshot({
      name: "max-number",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("renders position near", () => {
    mount(
      <div>
        <div style={{ padding: "16px" }}>
          <IcChip label="Small" style={{ marginRight: "16px" }}>
            <IcBadge text-label="1" slot="badge" position="near" size="small" />
          </IcChip>
          <IcChip label="Default" style={{ marginRight: "16px" }}>
            <IcBadge text-label="1" slot="badge" position="near" />
          </IcChip>
          <IcChip label="Large">
            <IcBadge text-label="1" slot="badge" position="near" size="large" />
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

    cy.compareSnapshot({
      name: "position-near",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });

  it("renders position inline", () => {
    cy.viewport(700, 500);
    mount(
      <IcTabContext>
        <IcTabGroup label="Example tab group">
          <IcTab>
            Small
            <IcBadge
              text-label="1"
              slot="badge"
              position="inline"
              size="small"
              accessibleLabel="1 notification found"
            />
          </IcTab>
          <IcTab>
            Default
            <IcBadge
              text-label="1"
              slot="badge"
              position="inline"
              accessibleLabel="1 notification found"
            />
          </IcTab>
          <IcTab>
            Large
            <IcBadge
              text-label="1"
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

    cy.wait(100).compareSnapshot({
      name: "position-inline",
      testThreshold: DEFAULT_TEST_THRESHOLD,
    });
    cy.checkA11yWithWait();
  });
});
