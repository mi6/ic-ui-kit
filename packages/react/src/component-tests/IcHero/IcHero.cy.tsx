/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
import { IcButton, IcCard, IcHero, IcSearchBar } from "../../components";
import { mount } from "cypress/react";
import { SlottedSVG } from "../../react-component-lib/slottedSVG";

const DEFAULT_TEST_THRESHOLD = 0.05;

describe("IcHero e2e, A11y and visual regression tests", () => {
  beforeEach(() => {
    cy.injectAxe();
    cy.viewport(1500, 500);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("IcHero", () => {
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
    cy.compareSnapshot("default", DEFAULT_TEST_THRESHOLD + 0.05);
    cy.checkA11yWithWait();
  });

  it("render center alignment of Hero Component ", () => {
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
    cy.compareSnapshot("centerHero", DEFAULT_TEST_THRESHOLD + 0.05);
    cy.checkA11yWithWait();
  });

  it("render centering content alignment", () => {
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
    cy.compareSnapshot("centerContentHero", DEFAULT_TEST_THRESHOLD + 0.05);
    cy.checkA11yWithWait();
  });

  it("render small size", () => {
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
    cy.compareSnapshot("small", DEFAULT_TEST_THRESHOLD + 0.05);
    cy.checkA11yWithWait();
  });

  it("render Secondary heading and searchbar", () => {
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
    cy.wait(500).compareSnapshot(
      "secondaryHeading_Serch",
      DEFAULT_TEST_THRESHOLD + 0.05
    );
    cy.checkA11yWithWait();
  });

  it("render Card on right", () => {
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
    cy.compareSnapshot("cardContent", DEFAULT_TEST_THRESHOLD + 0.05);
    cy.checkA11yWithWait();
  });

  it("render image on right", () => {
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
    cy.compareSnapshot("imageRight", DEFAULT_TEST_THRESHOLD + 0.05);
    cy.checkA11yWithWait();
  });

  it("rendering backgroundImage", () => {
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
    cy.compareSnapshot("backgroundImage", DEFAULT_TEST_THRESHOLD + 0.05);
    cy.checkA11yWithWait();
  });

  it("render search Bar within Hero Component", () => {
    mount(
      <IcHero
        heading="Everything I brew, I brew it for you"
        subheading="This news is hot off the French press."
      >
        <IcSearchBar slot="interaction" label="Search for coffee" hideLabel />
      </IcHero>
    );
    cy.wait(500).compareSnapshot("searchbar", DEFAULT_TEST_THRESHOLD + 0.05);
    cy.checkA11yWithWait();
  });
});
