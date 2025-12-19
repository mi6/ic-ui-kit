/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress/react";
import { IcCardHorizontal } from "../../components";
import {
  BE_VISIBLE,
  HAVE_FOCUS,
  NOT_BE_VISIBLE,
  NOT_EXIST,
} from "@ukic/react/src/component-tests/utils/constants";
import { setThresholdBasedOnEnv } from "@ukic/react/cypress/utils/helpers";
import {
  Adornment,
  BasicCardHorizontal,
  Icon,
  ImageLeft,
  ImageRight,
  InteractionButton,
  Theme,
} from "./IcCardHorizontalTestData";

const DEFAULT_TEST_THRESHOLD = 0.005;

const CARD_SELECTOR = "ic-card-horizontal";

const paddedMount = (component: any) => {
  return mount(<div style={{ margin: "16px" }}>{component}</div>);
};

describe("IcCardHorizontal", () => {
  beforeEach(() => {
    cy.injectAxe();
    cy.viewport(1024, 768);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render", () => {
    paddedMount(<BasicCardHorizontal />);

    cy.checkHydrated(CARD_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.007),
    });
  });

  it("should render with a message", () => {
    paddedMount(<BasicCardHorizontal message="Card message" />);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/with-message",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.012),
    });
  });

  it("should render with an icon", () => {
    paddedMount(
      <BasicCardHorizontal message="Card message">
        <Icon />
      </BasicCardHorizontal>
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/with-icon",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.012),
    });
  });

  it("should render clickable", () => {
    paddedMount(<BasicCardHorizontal clickable />);

    cy.get(CARD_SELECTOR).click("topLeft");
    cy.get(CARD_SELECTOR).should(HAVE_FOCUS);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/clickable",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.004),
    });
  });

  it("should render clickable as a link", () => {
    paddedMount(<BasicCardHorizontal clickable href="#" />);

    cy.get('[href="#"]').should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/clickable-link",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.004),
    });
  });

  it("should render with image small", () => {
    paddedMount(
      <BasicCardHorizontal
        size="small"
        message="This card is used for small bits of text."
      >
        <ImageLeft />
      </BasicCardHorizontal>
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/with-image-small",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.017),
    });
  });

  it("should render with image medium", () => {
    paddedMount(
      <BasicCardHorizontal
        size="medium"
        message="This card is used for small to medium bits of text. It's slightly bigger."
      >
        <ImageLeft />
      </BasicCardHorizontal>
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/with-image-default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.025),
    });
  });

  it("should render with image large", () => {
    paddedMount(
      <BasicCardHorizontal
        size="large"
        message="This card is used for medium to large bits of text. This will take up more space on the page."
      >
        <ImageLeft />
      </BasicCardHorizontal>
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/with-image-large",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.026),
    });
  });

  it("should render with image on the right", () => {
    paddedMount(
      <BasicCardHorizontal
        size="medium"
        message="This card is used to show the image on the right of the card content."
      >
        <ImageRight />
      </BasicCardHorizontal>
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/with-image-right",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.018),
    });
  });

  it("should render with an interaction button", () => {
    paddedMount(
      <BasicCardHorizontal message="This card has an interaction button.">
        <InteractionButton />
      </BasicCardHorizontal>
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/with-interaction-button",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.014),
    });
  });

  it("should render with spacious layout", () => {
    paddedMount(
      <BasicCardHorizontal
        size="medium"
        message="This card is used to show the spacious layout with some slotted content."
        density="spacious"
        subheading="This is a subheading"
      >
        <ImageLeft />
        <InteractionButton />
        <Adornment />
      </BasicCardHorizontal>
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/with-spacious-layout",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.021),
    });
  });

  it("should render disabled", () => {
    paddedMount(<BasicCardHorizontal disabled clickable />);

    cy.get('[disabled="true"]');

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/disabled",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render with slotted heading and message", () => {
    paddedMount(
      <IcCardHorizontal>
        <h4 slot="heading">Card heading</h4>
        <p slot="message">Card message</p>
        <Icon />
      </IcCardHorizontal>
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/slotted-heading-message",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.012),
    });
  });

  it("should render with truncated text", () => {
    paddedMount(
      <IcCardHorizontal
        heading="Card heading that should truncate when it reaches the max width of the card"
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae vulputate justo. Maecenas id metus interdum, volutpat libero in, eleifend est. Phasellus iaculis auctor est imperdiet fringilla. Suspendisse libero leo, luctus sit amet fermentum sit amet, porttitor eu urna. Nam dignissim massa eget nisl tristique, pharetra tincidunt mi porta."
      >
        <ImageLeft />
      </IcCardHorizontal>
    );

    cy.findShadowEl(CARD_SELECTOR, "p").should(
      "have.css",
      "text-overflow",
      "ellipsis"
    );
    cy.findShadowEl(CARD_SELECTOR, ".card-message > ic-typography").should(
      "have.css",
      "line-clamp",
      "2"
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/with-truncated-text",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.032),
    });
  });

  it("should render with theme prop", () => {
    paddedMount(Theme());

    cy.checkA11yWithWait();

    cy.compareSnapshot({
      name: "/theme",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.037),
    });
  });

  it("should render clickable with theme prop", () => {
    paddedMount(Theme(true));

    cy.checkA11yWithWait();

    cy.compareSnapshot({
      name: "/theme-clickable",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.035),
    });
  });

  it("should render disabled with theme prop", () => {
    paddedMount(Theme(true, true));

    cy.checkA11yWithWait();

    cy.compareSnapshot({
      name: "/theme-disabled",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.018),
    });
  });

  it("should not render the status tag adornment or subheading if density is default", () => {
    paddedMount(
      <BasicCardHorizontal
        size="medium"
        message="This card is used to show the spacious layout with some slotted content."
        density="default"
        subheading="This is a subheading"
      >
        <ImageLeft />
        <InteractionButton />
        <Adornment />
      </BasicCardHorizontal>
    );

    cy.findShadowEl(CARD_SELECTOR, "ic-status-tag").should(NOT_EXIST);
    cy.findShadowEl(CARD_SELECTOR, ".subheading").should(NOT_EXIST);
  });
});

describe("IcCardHorizontal visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  before(() => {
    cy.viewport(1024, 768);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  after(() => {
    cy.disableForcedColors();
  });

  it("should render", () => {
    paddedMount(<BasicCardHorizontal />);

    cy.checkHydrated(CARD_SELECTOR);

    // cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/default-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.009),
    });
  });

  it("should render clickable", () => {
    paddedMount(<BasicCardHorizontal clickable />);

    cy.get(CARD_SELECTOR).click("topLeft");
    cy.get(CARD_SELECTOR).should(HAVE_FOCUS);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/clickable-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
    });
  });

  it("should render clickable as a link", () => {
    paddedMount(<BasicCardHorizontal clickable href="#" />);

    cy.get('[href="#"]').should(BE_VISIBLE);

    // cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/clickable-link-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.015),
    });
  });

  it("should render disabled", () => {
    paddedMount(<BasicCardHorizontal disabled clickable />);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/disabled-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.012),
    });
  });
});
