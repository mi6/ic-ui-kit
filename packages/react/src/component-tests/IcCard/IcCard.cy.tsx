/// <reference types="Cypress" />

import React from "react";
import {
  IcBadge,
  IcButton,
  IcCard,
  IcStatusTag,
  IcTypography,
} from "../../components";
import {
  BE_VISIBLE,
  HAVE_CLASS,
  HAVE_CSS,
  HAVE_FOCUS,
  HAVE_LENGTH,
  NOT_HAVE_CLASS,
} from "../utils/constants";
import { mount } from "cypress/react";
import { SlottedSVG } from "../../react-component-lib/slottedSVG";

const DEFAULT_TEST_THRESHOLD = 0.05;

describe("IcCard", () => {
  beforeEach(() => {
    cy.injectAxe();
  });
  afterEach(() => {
    cy.task("generateReport");
  });

  it("renders Card", () => {
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
    cy.compareSnapshot("cardFocus", DEFAULT_TEST_THRESHOLD + 0.05);
    cy.checkA11yWithWait();
    cy.get("a").blur();
    cy.get("ic-card").shadow().find(".card").should(NOT_HAVE_CLASS, "focussed");
    cy.compareSnapshot("cardBlur", DEFAULT_TEST_THRESHOLD + 0.05);
  });

  it("verify text should be match", () => {
    mount(
      <a href="/">
        <IcCard heading="Card" message="This is a static card"></IcCard>
      </a>
    );
    cy.checkHydrated("ic-card");
    cy.findShadowEl("ic-card", "ic-typography")
      .contains("This is a static card")
      .should(BE_VISIBLE);
    cy.compareSnapshot("cardTextVerify", DEFAULT_TEST_THRESHOLD + 0.05);
    cy.checkA11yWithWait();
  });

  it("render three variants of cards", () => {
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
        <SlottedSVG
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-three-dots-vertical"
          viewBox="0 0 16 16"
        >
          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
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
    cy.findShadowEl("ic-card", "ic-typography")
      .contains("Americano order")
      .should(BE_VISIBLE);
    cy.get('[slot="image-mid"]').should(BE_VISIBLE);
    cy.get("ic-status-tag").should(BE_VISIBLE);
    cy.get("ic-button").should(BE_VISIBLE).should(HAVE_LENGTH, "2");
    cy.compareSnapshot("renderThreeCard", DEFAULT_TEST_THRESHOLD + 0.05);
    cy.checkA11yWithWait();
  });

  it("render With icon", () => {
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
    cy.compareSnapshot("withIcon", DEFAULT_TEST_THRESHOLD + 0.05);
    cy.checkA11yWithWait();
  });

  it("should render with Heading only ", () => {
    mount(<IcCard heading="Americano order"></IcCard>);
    cy.checkHydrated("ic-card");
    cy.findShadowEl("ic-card", "ic-typography")
      .contains("Americano order")
      .should(BE_VISIBLE);
    cy.compareSnapshot("headingOnly", DEFAULT_TEST_THRESHOLD + 0.05);
    cy.checkA11yWithWait();
  });

  it("should render with Message", () => {
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
    cy.findShadowEl("ic-card", "ic-typography")
      .contains("Extras: Double espresso shot and oat milk.")
      .should(BE_VISIBLE);
    cy.compareSnapshot("message", DEFAULT_TEST_THRESHOLD + 0.05);
    cy.checkA11yWithWait();
  });

  it("render with a subheading ", () => {
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
    cy.findShadowEl("ic-card", "ic-typography")
      .contains("Name: Michael")
      .should(BE_VISIBLE);
    cy.compareSnapshot("subHeadingCard", DEFAULT_TEST_THRESHOLD + 0.05);
    cy.checkA11yWithWait();
  });

  it("render Interaction button", () => {
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
            class="bi bi-three-dots-vertical"
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
    cy.compareSnapshot("interaction", DEFAULT_TEST_THRESHOLD + 0.07);
    cy.checkA11yWithWait();
  });

  it("render Adornment", () => {
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
    cy.compareSnapshot("adornmentCard", DEFAULT_TEST_THRESHOLD + 0.05);
    cy.checkA11yWithWait();
  });

  it("render with Top image  ", () => {
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
            class="bi bi-three-dots-vertical"
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
    cy.compareSnapshot("topImageCard", DEFAULT_TEST_THRESHOLD + 0.05);
    cy.checkA11yWithWait();
  });

  it("render with middle image", () => {
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
            class="bi bi-three-dots-vertical"
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
    cy.compareSnapshot("midImageCard", DEFAULT_TEST_THRESHOLD + 0.05);
    cy.checkA11yWithWait();
  });

  it("render with Interaction controls", () => {
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
    cy.compareSnapshot("interaction-controls", DEFAULT_TEST_THRESHOLD + 0.05);
    cy.checkA11yWithWait();
  });

  it("should render Clickable link ", () => {
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
    cy.compareSnapshot("clickableLink", DEFAULT_TEST_THRESHOLD + 0.05);
    cy.checkA11yWithWait();
  });

  it("should render Clickable button ", () => {
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
    cy.compareSnapshot("clickableButtonCard", DEFAULT_TEST_THRESHOLD + 0.05);
    cy.checkA11yWithWait();
  });

  it("should render With badge", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <IcCard
          heading="Americano order"
          subheading="Name: Michael"
          message="Extras: Double espresso shot and oat milk."
          clickable
          href="#"
        >
          <IcBadge size="large" text-label="New" slot="badge" variant="info" />
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
    cy.compareSnapshot("badgeCard", DEFAULT_TEST_THRESHOLD + 0.05);
    cy.checkA11yWithWait();
  });

  it("render Disabled", () => {
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
    cy.compareSnapshot("disabledCard", DEFAULT_TEST_THRESHOLD + 0.05);
    cy.checkA11yWithWait();
  });

  it("render full width variant ", () => {
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
    cy.findShadowEl("ic-card", "ic-typography")
      .contains("This is a full width card")
      .should(BE_VISIBLE);
    cy.compareSnapshot("widthCard", DEFAULT_TEST_THRESHOLD + 0.05);
    cy.checkA11yWithWait();
  });

  it("should toggle expanded content when expansion toggle is clicked", () => {
    mount(
      <IcCard
        id="test-card"
        heading="Card"
        message="This is a clickable card"
        expandable
      >
        <IcTypography slot="expanded-content">Expanded</IcTypography>
      </IcCard>
    );
    cy.checkHydrated("ic-card");
    cy.findShadowEl("ic-card", "ic-button").shadow().find("button").click();
    cy.get("ic-typography").contains("Expanded").should(BE_VISIBLE);
    cy.compareSnapshot("expandedCliked", DEFAULT_TEST_THRESHOLD + 0.05);
  });

  it("should render as expandable", () => {
    mount(
      <IcCard
        heading="Americano order"
        subheading="Name: Michael"
        message="Extras: Double espresso shot and oat milk."
        expandable={true}
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
        <IcTypography slot="expanded-content" variant="body">
          To cancel your order click cancel.
        </IcTypography>
      </IcCard>
    );
    cy.checkHydrated("ic-card");
    cy.findShadowEl("ic-card", ".toggle-button")
      .shadow()
      .find("button")
      .click();
    cy.compareSnapshot("expandable", DEFAULT_TEST_THRESHOLD + 0.05);
  });
});
