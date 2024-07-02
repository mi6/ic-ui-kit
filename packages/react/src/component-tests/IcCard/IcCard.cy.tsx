/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import { mount } from "cypress/react";
import React from "react";
import {
  IcBadge,
  IcButton,
  IcCard,
  IcStatusTag,
  IcTypography,
} from "../../components";
import { SlottedSVG } from "../../react-component-lib/slottedSVG";
import {
  BE_VISIBLE,
  HAVE_CLASS,
  HAVE_FOCUS,
  HAVE_LENGTH,
  NOT_HAVE_CLASS,
} from "../utils/constants";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const DEFAULT_TEST_THRESHOLD = 0.027;

const TYPOGRAPHY_SELECTOR = "ic-typography";

describe("IcCard", () => {
  beforeEach(() => {
    cy.injectAxe();
  });
  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render card", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <a href="/">
          <IcCard heading="Card" message="This is a static card"></IcCard>
        </a>
      </div>
    );

    cy.checkHydrated("ic-card");
    cy.get("a").should(HAVE_CLASS, "ic-card-wrapper-link");
    cy.get("a").focus().should(HAVE_FOCUS);

    cy.checkA11yWithWait();
  });

  it("should click on card", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcCard
          heading="Americano order"
          subheading="Name: Michael"
          message="Extras: Double espresso shot and oat milk."
          clickable
          onClick={(ev) => console.log(ev)}
        >
          <SlottedSVG
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z" />
          </SlottedSVG>
        </IcCard>
      </div>
    );

    cy.checkHydrated("ic-card");
    cy.get("ic-card").should(BE_VISIBLE).click().should(HAVE_FOCUS);

    cy.checkA11yWithWait();
  });

  it("should get focussed class applied when parent link focussed and lose class once parent blurred", () => {
    mount(
      <div style={{ padding: "5rem" }}>
        <a href="/">
          <IcCard
            heading="Americano order"
            subheading="Name: Michael"
            message="This is a full width card"
            href="/"
            clickable
          ></IcCard>
        </a>
      </div>
    );

    cy.checkHydrated("ic-card");
    cy.get("ic-card").shadow().find(".card").should(NOT_HAVE_CLASS, "focussed");
    cy.get("a").focus();
    cy.get("ic-card").shadow().find(".card").should(HAVE_CLASS, "focussed");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "focus",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.027),
    });

    cy.get("a").blur();
    cy.get("ic-card").shadow().find(".card").should(NOT_HAVE_CLASS, "focussed");

    cy.compareSnapshot({
      name: "blur",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.028),
    });
  });

  it("should render card wrapped in <a>", () => {
    mount(
      <a href="/">
        <IcCard heading="Card" message="This is a static card"></IcCard>
      </a>
    );

    cy.checkHydrated("ic-card");
    cy.findShadowEl("ic-card", TYPOGRAPHY_SELECTOR)
      .contains("This is a static card")
      .should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "wrapped-anchor",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.005),
    });
  });

  it("should render three variants of cards", () => {
    mount(
      <IcCard
        heading="Americano order"
        subheading="Name: Michael"
        message="Extras: Double espresso shot and oat milk."
        style={{ width: "360px" }}
      >
        <SlottedSVG
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z" />
        </SlottedSVG>
        <IcStatusTag slot="adornment" label="In Progress" small />
        <SlottedSVG
          slot="image-mid"
          style={{
            height: "100%",
            width: "100%",
            maxHeight: "20.375rem",
            maxWidth: "20.375rem",
          }}
          viewBox="0 0 1600 1250"
        >
          <rect fill="#ff7700" width="1600" height="1600" y="-350" />
          <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
          <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
          <polygon fill="#c50022" points="-60 900 398 662 816 900" />
          <polygon fill="#a3001b" points="337 900 398 662 816 900" />
          <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
          <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
          <polygon fill="#b80066" points="641 695 886 900 367 900" />
          <polygon fill="#960052" points="587 900 641 695 886 900" />
          <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
          <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
          <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
          <polygon fill="#880088" points="943 900 1210 900 971 687" />
        </SlottedSVG>
        <div
          slot="interaction-controls"
          style={{ display: "flex", gap: "16px" }}
        >
          <IcButton variant="primary">Accept</IcButton>
          <IcButton variant="secondary">Cancel</IcButton>
        </div>
        <IcTypography slot="expanded-content" variant="body">
          To cancel your order click cancel.
        </IcTypography>
      </IcCard>
    );

    cy.checkHydrated("ic-card");
    cy.get("svg").should(BE_VISIBLE);
    cy.findShadowEl("ic-card", TYPOGRAPHY_SELECTOR)
      .contains("Americano order")
      .should(BE_VISIBLE);
    cy.get('[slot="image-mid"]').should(BE_VISIBLE);
    cy.get("ic-status-tag").should(BE_VISIBLE);
    cy.get("ic-button").should(BE_VISIBLE).should(HAVE_LENGTH, "2");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "render-three",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.043),
    });
  });

  it("should render with icon", () => {
    mount(
      <IcCard heading="Americano order">
        <SlottedSVG
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z" />
        </SlottedSVG>
      </IcCard>
    );

    cy.checkHydrated("ic-card");
    cy.get("svg").should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "with-icon",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render with heading only ", () => {
    mount(<IcCard heading="Americano order"></IcCard>);

    cy.checkHydrated("ic-card");
    cy.findShadowEl("ic-card", TYPOGRAPHY_SELECTOR)
      .contains("Americano order")
      .should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "heading-only",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render with message", () => {
    mount(
      <IcCard
        heading="Americano order"
        message="Extras: Double espresso shot and oat milk."
      >
        <SlottedSVG
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z" />
        </SlottedSVG>
      </IcCard>
    );

    cy.checkHydrated("ic-card");
    cy.findShadowEl("ic-card", TYPOGRAPHY_SELECTOR)
      .contains("Extras: Double espresso shot and oat milk.")
      .should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "message",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.027),
    });
  });

  it("should render with a subheading", () => {
    mount(
      <IcCard
        heading="Americano order"
        subheading="Name: Michael"
        message="Extras: Double espresso shot and oat milk."
      >
        <SlottedSVG
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z" />
        </SlottedSVG>
      </IcCard>
    );

    cy.checkHydrated("ic-card");
    cy.findShadowEl("ic-card", TYPOGRAPHY_SELECTOR)
      .contains("Name: Michael")
      .should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "sub-heading",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.037),
    });
  });

  it("should render with slotted heading, message and subheading", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcCard>
          <IcTypography variant="h4" slot="heading">
            This is the slotted card heading
          </IcTypography>
          <IcTypography slot="message">
            This is an example of a new card component with slotted text
            included.
          </IcTypography>
          <IcTypography variant="subtitle-small" slot="subheading">
            This is the slotted subheading
          </IcTypography>
          <SlottedSVG
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </SlottedSVG>
        </IcCard>
      </div>
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "slotted-headings",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.055),
    });
  });

  it("should render interaction button", () => {
    mount(
      <IcCard
        heading="Americano order"
        subheading="Name: Michael"
        message="Extras: Double espresso shot and oat milk."
      >
        <SlottedSVG
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z" />
        </SlottedSVG>
        <IcButton
          variant="icon"
          aria-label="More information"
          title="More information"
          slot="interaction-button"
        >
          <SlottedSVG
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-three-dots-vertical"
            viewBox="0 0 16 16"
          >
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </SlottedSVG>
        </IcButton>
      </IcCard>
    );

    cy.checkHydrated("ic-card");
    cy.get("ic-button").should(BE_VISIBLE);
    cy.get("ic-button").shadow().find("button").focus();

    cy.checkA11yWithWait(undefined, 100);
    cy.compareSnapshot({
      name: "interaction",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.046),
    });
  });

  it("should render adornment", () => {
    mount(
      <IcCard
        heading="Americano order"
        subheading="Name: Michael"
        message="Extras: Double espresso shot and oat milk."
      >
        <SlottedSVG
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z" />
        </SlottedSVG>
        <IcStatusTag
          slot="adornment"
          status="warning"
          label="In Progress"
          size="small"
        />
      </IcCard>
    );

    cy.checkHydrated("ic-card");
    cy.findShadowEl("ic-card", "div")
      .find(".adornment")
      .should(HAVE_CLASS, "adornment");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "adornment",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.04),
    });
  });

  it("should render with top image", () => {
    mount(
      <IcCard
        heading="Americano order"
        subheading="Name: Michael"
        message="Extras: Double espresso shot and oat milk."
        style={{ width: "360px" }}
      >
        <SlottedSVG
          slot="image-top"
          style={{
            height: "100%",
            width: "100%",
            maxHeight: "20.375rem",
            maxWidth: "20.375rem",
          }}
          viewBox="0 0 1600 1250"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect fill="#ff7700" width="1600" height="1600" y="-350" />
          <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
          <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
          <polygon fill="#c50022" points="-60 900 398 662 816 900" />
          <polygon fill="#a3001b" points="337 900 398 662 816 900" />
          <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
          <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
          <polygon fill="#b80066" points="641 695 886 900 367 900" />
          <polygon fill="#960052" points="587 900 641 695 886 900" />
          <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
          <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
          <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
          <polygon fill="#880088" points="943 900 1210 900 971 687" />
        </SlottedSVG>
        <SlottedSVG>
          slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px"
          viewBox="0 0 24 24" width="24px" fill="#000000"
          <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z" />
        </SlottedSVG>
        <IcButton
          variant="icon"
          aria-label="More information"
          title="More information"
          slot="interaction-button"
        >
          <SlottedSVG
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-three-dots-vertical"
            viewBox="0 0 16 16"
          >
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </SlottedSVG>
        </IcButton>
        <IcStatusTag
          slot="adornment"
          status="warning"
          label="In Progress"
          size="small"
        />
      </IcCard>
    );

    cy.checkHydrated("ic-card");
    cy.findShadowEl("ic-card", ".card").find(".image-top").should("exist");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "top-image",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.04),
    });
  });

  it("should render with middle image", () => {
    mount(
      <IcCard
        heading="Americano order"
        subheading="Name: Michael"
        message="Extras: Double espresso shot and oat milk."
        style={{ width: "360px" }}
      >
        <SlottedSVG
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z" />
        </SlottedSVG>
        <IcButton
          variant="icon"
          aria-label="More information"
          title="More information"
          slot="interaction-button"
        >
          <SlottedSVG
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-three-dots-vertical"
            viewBox="0 0 16 16"
          >
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </SlottedSVG>
        </IcButton>
        <IcStatusTag
          slot="adornment"
          status="warning"
          label="In Progress"
          size="small"
        />
        <SlottedSVG
          slot="image-mid"
          style={{
            height: "100%",
            width: "100%",
            maxHeight: "20.375rem",
            maxWidth: "20.375rem",
          }}
          viewBox="0 0 1600 1250"
        >
          <rect fill="#ff7700" width="1600" height="1600" y="-350" />
          <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
          <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
          <polygon fill="#c50022" points="-60 900 398 662 816 900" />
          <polygon fill="#a3001b" points="337 900 398 662 816 900" />
          <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
          <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
          <polygon fill="#b80066" points="641 695 886 900 367 900" />
          <polygon fill="#960052" points="587 900 641 695 886 900" />
          <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
          <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
          <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
          <polygon fill="#880088" points="943 900 1210 900 971 687" />
        </SlottedSVG>
      </IcCard>
    );

    cy.checkHydrated("ic-card");
    cy.findShadowEl("ic-card", ".card").find(".image-mid").should("exist");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "mid-image",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.04),
    });
  });

  it("should render with interaction controls", () => {
    mount(
      <IcCard
        heading="Americano order"
        subheading="Name: Michael"
        message="Extras: Double espresso shot and oat milk."
      >
        <SlottedSVG
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
        </SlottedSVG>
        <div
          slot="interaction-controls"
          style={{ display: "flex", gap: "16px" }}
        >
          <IcButton variant="primary">Accept</IcButton>
          <IcButton variant="secondary">Cancel</IcButton>
        </div>
      </IcCard>
    );

    cy.checkHydrated("ic-card");
    cy.findShadowEl("ic-card", ".card")
      .find(".interaction-area")
      .should("exist");
    cy.get("ic-button").should(BE_VISIBLE).should(HAVE_LENGTH, "2");

    cy.compareSnapshot({
      name: "interaction-controls",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.04),
    });
    cy.checkA11yWithWait();
  });

  it("should render clickable link ", () => {
    mount(
      <IcCard
        heading="Americano order"
        subheading="Name: Michael"
        message="Extras: Double espresso shot and oat milk."
        clickable
        href="#"
      >
        <SlottedSVG
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z" />
        </SlottedSVG>
      </IcCard>
    );

    cy.checkHydrated("ic-card");
    cy.get('[href="#"]').should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "clickable-link",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.036),
    });
  });

  it("should should render clickable button", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcCard
          heading="Americano order"
          subheading="Name: Michael"
          message="Extras: Double espresso shot and oat milk."
          clickable
          onClick={(ev) => console.log(ev)}
        >
          <SlottedSVG
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z" />
          </SlottedSVG>
        </IcCard>
      </div>
    );

    cy.checkHydrated("ic-card");
    cy.get("ic-card").click();

    cy.checkA11yWithWait(undefined, 100);
    cy.compareSnapshot({
      name: "clickable-button",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.034),
    });
  });

  it("should render with badge", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcCard
          heading="Americano order"
          subheading="Name: Michael"
          message="Extras: Double espresso shot and oat milk."
          clickable
          href="#"
        >
          <IcBadge size="large" label="New" slot="badge" variant="info" />
          <SlottedSVG
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z" />
          </SlottedSVG>
        </IcCard>
      </div>
    );

    cy.checkHydrated("ic-card");
    cy.get("ic-badge").should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "badge",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.038),
    });
  });

  it("should render disabled", () => {
    mount(
      <IcCard
        heading="Americano order"
        subheading="Name: Michael"
        message="Extras: Double espresso shot and oat milk."
        clickable
        disabled
      >
        <SlottedSVG
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z" />
        </SlottedSVG>
      </IcCard>
    );

    cy.checkHydrated("ic-card");
    cy.get('[disabled="true"]').should("exist");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "disabled",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.012),
    });
  });

  it("should render full width variant ", () => {
    mount(
      <IcCard
        heading="Americano order"
        subheading="Name: Michael"
        message="This is a full width card"
        clickable
        fullWidth
      >
        <SlottedSVG
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z" />
        </SlottedSVG>
      </IcCard>
    );

    cy.checkHydrated("ic-card");
    cy.findShadowEl("ic-card", TYPOGRAPHY_SELECTOR)
      .contains("This is a full width card")
      .should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "full-width",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.028),
    });
  });

  it("should render expandable and toggle expanded content when expansion toggle is clicked", () => {
    mount(
      <IcCard
        heading="Americano order"
        subheading="Name: Michael"
        message="Extras: Double espresso shot and oat milk."
        expandable
      >
        <SlottedSVG
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z" />
        </SlottedSVG>
        <div
          slot="interaction-controls"
          style={{ display: "flex", gap: "16px" }}
        >
          <IcButton variant="primary">Accept</IcButton>
          <IcButton variant="secondary">Cancel</IcButton>
        </div>
        <IcTypography slot="expanded-content">Expanded</IcTypography>
      </IcCard>
    );

    cy.checkHydrated("ic-card");

    cy.checkA11yWithWait(undefined, 100);
    cy.compareSnapshot({
      name: "expandable",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.04),
    });

    cy.findShadowEl("ic-card", "button").click({ force: true });
    cy.get(TYPOGRAPHY_SELECTOR).contains("Expanded").should(BE_VISIBLE);

    cy.checkA11yWithWait(undefined, 100);
    cy.compareSnapshot({
      name: "expanded-clicked",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.052),
    });
  });
});
