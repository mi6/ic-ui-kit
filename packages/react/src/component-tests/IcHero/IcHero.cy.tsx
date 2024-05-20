/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
import {
  IcButton,
  IcCard,
  IcHero,
  IcSearchBar,
  IcTypography,
} from "../../components";
import { mount } from "cypress/react";
import { SlottedSVG } from "../../react-component-lib/slottedSVG";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const DEFAULT_TEST_THRESHOLD = 0.05;

describe("IcHero", () => {
  beforeEach(() => {
    cy.injectAxe();
    cy.viewport(1500, 500);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render", () => {
    mount(
      <IcHero
        heading="Everything I brew, I brew it for you"
        subheading="This news is hot off the French press."
      >
        <IcButton variant="primary" slot="interaction">
          Explore
        </IcButton>
        <IcButton variant="secondary" slot="interaction">
          Check out our new drinks
        </IcButton>
      </IcHero>
    );
    cy.checkHydrated("ic-hero");
    cy.compareSnapshot({
      name: "default",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
    });
    cy.checkA11yWithWait();
  });

  it("should render with slotted heading and subheading", () => {
    mount(
      <IcHero>
        <IcTypography slot="heading" variant="h1">
          Slotted heading
        </IcTypography>
        <IcTypography slot="subheading">Slotted subheading</IcTypography>
        <IcButton variant="primary" slot="interaction">
          Button
        </IcButton>
        <IcButton variant="secondary" slot="interaction">
          Button
        </IcButton>
      </IcHero>
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "slottedHeadings",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.05),
    });
  });

  it("should render center alignment", () => {
    mount(
      <IcHero
        aligned={"center"}
        heading="Everything I brew, I brew it for you"
        subheading="This news is hot off the French press."
      >
        <IcButton variant="primary" slot="interaction">
          Explore
        </IcButton>
        <IcButton variant="secondary" slot="interaction">
          Check out our new drinks
        </IcButton>
      </IcHero>
    );
    cy.compareSnapshot({
      name: "centerHero",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
    });
    cy.checkA11yWithWait();
  });

  it("should render centering content alignment", () => {
    mount(
      <IcHero
        contentAligned={"center"}
        heading="Everything I brew, I brew it for you"
        subheading="This news is hot off the French press."
      >
        <IcButton variant="primary" slot="interaction">
          Explore
        </IcButton>
        <IcButton variant="secondary" slot="interaction">
          Check out our new drinks
        </IcButton>
      </IcHero>
    );
    cy.compareSnapshot({
      name: "centerContentHero",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
    });
    cy.checkA11yWithWait();
  });

  it("should render small size", () => {
    mount(
      <IcHero
        heading="New coffee launches 14 September 2022"
        subheading="Brand new flavours now available! Irresistible. Caramel. Decadence. Sugary."
        size="small"
      >
        <IcButton variant="primary" slot="interaction" size="small">
          Order now
        </IcButton>
        <IcButton variant="secondary" slot="interaction" size="small">
          Submit new flavour
        </IcButton>
      </IcHero>
    );
    cy.compareSnapshot({
      name: "small",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
    });
    cy.checkA11yWithWait();
  });

  it("should render secondary heading and searchbar", () => {
    mount(
      <IcHero
        heading="Everything I brew, I brew it for you"
        subheading="This news is hot off the French press."
        secondaryHeading="The classics"
        secondarySubheading="Try our original flavours."
      >
        <IcSearchBar slot="interaction" label="Search for coffee" hideLabel />
      </IcHero>
    );
    cy.wait(500).compareSnapshot({
      name: "secondaryHeading_Serch",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
    });
    cy.checkA11yWithWait();
  });

  it("should render card on right", () => {
    mount(
      <IcHero
        heading="Everything I brew, I brew it for you"
        subheading="This news is hot off the French press."
        aligned="full-width"
      >
        <IcButton variant="primary" slot="interaction">
          Explore
        </IcButton>
        <IcButton variant="secondary" slot="interaction">
          Check out our new drinks
        </IcButton>
        <IcCard
          heading="Out now"
          message="Try our new strawberry infused tea."
          slot="secondary"
          class="hero-card"
          style={{
            color: "var(--ic-theme-text)",
            width: "300px",
          }}
        />
      </IcHero>
    );
    cy.compareSnapshot({
      name: "cardContent",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
    });
    cy.checkA11yWithWait();
  });

  it("should render image on right", () => {
    mount(
      <IcHero
        heading="Everything I brew, I brew it for you"
        subheading="This news is hot off the French press."
        aligned="full-width"
      >
        <IcButton variant="primary" slot="interaction">
          Explore
        </IcButton>
        <IcButton variant="secondary" slot="interaction">
          Check out our new drinks
        </IcButton>
        <SlottedSVG
          slot="secondary"
          style={{
            width: "300px",
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 900"
        >
          <rect fill="#ff7700" width="1600" height="900" />
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
      </IcHero>
    );
    cy.compareSnapshot({
      name: "imageRight",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
    });
    cy.checkA11yWithWait();
  });

  it("should render background image", () => {
    mount(
      <IcHero
        background-image="https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg"
        heading="Everything I brew, I brew it for you"
        subheading="This news is hot off the French press."
      >
        <IcButton variant="primary" slot="interaction">
          Explore
        </IcButton>
        <IcButton variant="secondary" slot="interaction">
          Check out our new drinks
        </IcButton>
      </IcHero>
    );
    cy.compareSnapshot({
      name: "backgroundImage",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
    });
    cy.checkA11yWithWait();
  });

  it("should render with search bar", () => {
    mount(
      <IcHero
        heading="Everything I brew, I brew it for you"
        subheading="This news is hot off the French press."
      >
        <IcSearchBar slot="interaction" label="Search for coffee" hideLabel />
      </IcHero>
    );
    cy.wait(500).compareSnapshot({
      name: "searchbar",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
    });
    cy.checkA11yWithWait();
  });
});
