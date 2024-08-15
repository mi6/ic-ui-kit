/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import { mount } from "cypress/react";
import React from "react";
import { IcCard } from "../../components";
import {
  StaticCard,
  ThreeVariants,
  WithIcon,
  WithMessage,
  WithSubheading,
  WithInteractionButton,
  WithAdornment,
  WithTopImage,
  WithMiddleImage,
  WithInteractionControls,
  ClickableLink,
  ClickableButton,
  WithBadge,
  Disabled,
  FullWidth,
  Expandable,
  WrappedByLink,
  WrappedClickable,
  WithSlottedContent,
  ReducedWidth,
  IncreasedWidth,
  AdditionalHeight,
} from "./IcCardTestData";
import {
  BE_VISIBLE,
  HAVE_CLASS,
  HAVE_FOCUS,
  HAVE_LENGTH,
  NOT_HAVE_CLASS,
  NOT_BE_VISIBLE,
} from "../utils/constants";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const CARD_SELECTOR = "ic-card";
const TYPOGRAPHY_SELECTOR = "ic-typography";

const DEFAULT_TEST_THRESHOLD = 0.027;

describe("IcCard end-to-end, visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.injectAxe();
  });
  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render card", () => {
    mount(<StaticCard />);

    cy.checkHydrated(CARD_SELECTOR);
    cy.findShadowEl(CARD_SELECTOR, TYPOGRAPHY_SELECTOR)
      .contains("This is a static card")
      .should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "static-card",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.006),
    });
  });

  it("should get focussed class applied when parent link focussed", () => {
    mount(<WrappedClickable />);

    cy.checkHydrated(CARD_SELECTOR);
    cy.get(CARD_SELECTOR)
      .shadow()
      .find(".card")
      .should(NOT_HAVE_CLASS, "focussed");
    cy.get("a").focus();
    cy.get(CARD_SELECTOR).shadow().find(".card").should(HAVE_CLASS, "focussed");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "focus",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.029),
    });
  });

  it("should lose focussed class once parent blurred", () => {
    mount(<WrappedClickable />);

    cy.checkHydrated(CARD_SELECTOR);
    cy.get("a").focus();
    cy.get(CARD_SELECTOR).shadow().find(".card").should(HAVE_CLASS, "focussed");

    cy.get("a").blur();
    cy.get(CARD_SELECTOR)
      .shadow()
      .find(".card")
      .should(NOT_HAVE_CLASS, "focussed");

    cy.checkA11yWithWait(undefined, 200);
    cy.compareSnapshot({
      name: "blur",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.031),
    });
  });

  it("should render card wrapped in <a>", () => {
    mount(<WrappedByLink />);

    cy.checkHydrated(CARD_SELECTOR);
    cy.get("a").should(HAVE_CLASS, "ic-card-wrapper-link");
    cy.get("a").focus().should(HAVE_FOCUS);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "wrapped-anchor",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.015),
    });
  });

  it("should render with icon", () => {
    mount(<WithIcon />);

    cy.checkHydrated(CARD_SELECTOR);
    cy.get("svg").should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "with-icon",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render with heading only ", () => {
    mount(<IcCard heading="Americano order"></IcCard>);

    cy.checkHydrated(CARD_SELECTOR);
    cy.findShadowEl(CARD_SELECTOR, TYPOGRAPHY_SELECTOR)
      .contains("Americano order")
      .should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "heading-only",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render with message", () => {
    mount(<WithMessage />);

    cy.checkHydrated(CARD_SELECTOR);
    cy.findShadowEl(CARD_SELECTOR, TYPOGRAPHY_SELECTOR)
      .contains("Extras: Double espresso shot and oat milk.")
      .should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "message",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.027),
    });
  });

  it("should render with a subheading", () => {
    mount(<WithSubheading />);

    cy.checkHydrated(CARD_SELECTOR);
    cy.findShadowEl(CARD_SELECTOR, TYPOGRAPHY_SELECTOR)
      .contains("Name: Michael")
      .should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "sub-heading",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.037),
    });
  });

  it("should render with slotted heading, message and subheading", () => {
    mount(<WithSlottedContent />);

    cy.checkHydrated(CARD_SELECTOR);
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "slotted-headings",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.055),
    });
  });

  it("should render interaction button", () => {
    mount(<WithInteractionButton />);

    cy.checkHydrated(CARD_SELECTOR);
    cy.get("ic-button").should(BE_VISIBLE);
    cy.wait(500).get("ic-button").shadow().find("button").focus();

    cy.checkA11yWithWait(undefined, 200);
    cy.compareSnapshot({
      name: "interaction",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.046),
    });
  });

  it("should render adornment", () => {
    mount(<WithAdornment />);

    cy.checkHydrated(CARD_SELECTOR);
    cy.findShadowEl(CARD_SELECTOR, "div")
      .find(".adornment")
      .should(HAVE_CLASS, "adornment");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "adornment",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.04),
    });
  });

  it("should render with top image", () => {
    mount(<WithTopImage />);

    cy.checkHydrated(CARD_SELECTOR);
    cy.findShadowEl(CARD_SELECTOR, ".card").find(".image-top").should("exist");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "top-image",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.04),
    });
  });

  it("should render with middle image", () => {
    mount(<WithMiddleImage />);

    cy.checkHydrated(CARD_SELECTOR);
    cy.findShadowEl(CARD_SELECTOR, ".card").find(".image-mid").should("exist");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "mid-image",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.04),
    });
  });

  it("should render with interaction controls", () => {
    mount(<WithInteractionControls />);

    cy.checkHydrated(CARD_SELECTOR);
    cy.findShadowEl(CARD_SELECTOR, ".card")
      .find(".interaction-area")
      .should("exist");
    cy.get("ic-button").should(BE_VISIBLE).should(HAVE_LENGTH, "2");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "interaction-controls",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.04),
    });
  });

  it("should render clickable link ", () => {
    mount(<ClickableLink />);

    cy.checkHydrated(CARD_SELECTOR);
    cy.get('[href="#"]').should(BE_VISIBLE);
    cy.get(CARD_SELECTOR).click();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "clickable-link",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.034),
    });
  });

  it("should should render clickable button", () => {
    mount(<ClickableButton />);

    cy.checkHydrated(CARD_SELECTOR);
    cy.get(CARD_SELECTOR).click().should(HAVE_FOCUS);

    cy.checkA11yWithWait(undefined, 100);
    cy.compareSnapshot({
      name: "clickable-button",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.034),
    });
  });

  it("should render with badge", () => {
    mount(<WithBadge />);

    cy.checkHydrated(CARD_SELECTOR);
    cy.get("ic-badge").should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "badge",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.038),
    });
  });

  it("should render disabled", () => {
    mount(<Disabled />);

    cy.checkHydrated(CARD_SELECTOR);
    cy.get('[disabled="true"]').should("exist");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "disabled",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.012),
    });
  });

  it("should render full width variant ", () => {
    mount(<FullWidth />);

    cy.checkHydrated(CARD_SELECTOR);
    cy.findShadowEl(CARD_SELECTOR, TYPOGRAPHY_SELECTOR)
      .contains("This is a full width card")
      .should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "full-width",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.028),
    });
  });

  it("should render expandable", () => {
    mount(<Expandable />);

    cy.checkHydrated(CARD_SELECTOR);
    cy.get(TYPOGRAPHY_SELECTOR).contains("Expanded").should(NOT_BE_VISIBLE);

    cy.checkA11yWithWait(undefined, 100);
    cy.compareSnapshot({
      name: "expandable",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.04),
    });
  });

  it("should toggle expanded content when expansion toggle is clicked", () => {
    mount(<Expandable />);

    cy.checkHydrated(CARD_SELECTOR);
    cy.findShadowEl(CARD_SELECTOR, "button").click({ force: true });
    cy.get(TYPOGRAPHY_SELECTOR).contains("Expanded").should(BE_VISIBLE);

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "expanded-clicked",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.052),
    });
  });

  it("should render custom width - reduced width", () => {
    cy.viewport(500, 750);
    mount(<ReducedWidth />);

    cy.checkHydrated(CARD_SELECTOR);
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "reduced-width",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.039),
    });
  });

  it("should render custom width - increased width", () => {
    cy.viewport(600, 800);
    mount(<IncreasedWidth />);

    cy.checkHydrated(CARD_SELECTOR);
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "increased-width",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.033),
    });
  });

  it("should render card with additional height", () => {
    cy.viewport(500, 750);
    mount(<AdditionalHeight />);

    cy.checkHydrated(CARD_SELECTOR);
    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "additional-height",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.039),
    });
  });

  it("should render three variants of cards", () => {
    mount(<ThreeVariants />);

    cy.checkHydrated(CARD_SELECTOR);
    cy.get("svg").should(BE_VISIBLE);
    cy.findShadowEl(CARD_SELECTOR, TYPOGRAPHY_SELECTOR)
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

  describe("Visual regression tests in high contrast mode", () => {
    before(() => {
      cy.enableForcedColors();
    });

    afterEach(() => {
      cy.task("generateReport");
    });

    after(() => {
      cy.disableForcedColors();
    });

    it("should render card wrapped in <a> in high contrast mode", () => {
      mount(<WrappedByLink />);

      cy.checkHydrated(CARD_SELECTOR);
      cy.get("a").should(HAVE_CLASS, "ic-card-wrapper-link");
      cy.get("a").focus().should(HAVE_FOCUS);

      cy.wait(300).compareSnapshot({
        name: "wrapped-anchor-high-contrast",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.001),
      });
    });

    it("should render interaction button in high contrast mode", () => {
      mount(<WithInteractionButton />);

      cy.checkHydrated(CARD_SELECTOR);
      cy.get("ic-button").should(BE_VISIBLE);
      cy.wait(1000).get("ic-button").shadow().find("button").focus();

      cy.wait(100).compareSnapshot({
        name: "interaction-high-contrast",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.039),
      });
    });

    it("should render clickable link in high contrast mode", () => {
      mount(<ClickableLink />);

      cy.checkHydrated(CARD_SELECTOR);
      cy.get('[href="#"]').should(BE_VISIBLE);
      cy.get(CARD_SELECTOR).click();

      cy.wait(200).compareSnapshot({
        name: "clickable-link-high-contrast",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.022),
      });
    });

    it("should should render clickable button in high contrast mode", () => {
      mount(<ClickableButton />);

      cy.checkHydrated(CARD_SELECTOR);
      cy.get(CARD_SELECTOR).click().should(HAVE_FOCUS);

      cy.wait(200).compareSnapshot({
        name: "clickable-button-high-contrast",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.03),
      });
    });

    it.skip("should render with badge in high contrast mode", () => {
      mount(<WithBadge />);

      cy.checkHydrated(CARD_SELECTOR);

      cy.compareSnapshot({
        name: "badge-high-contrast",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.038),
      });
    });

    it("should render disabled in high contrast mode", () => {
      mount(<Disabled />);

      cy.checkHydrated(CARD_SELECTOR);

      cy.compareSnapshot({
        name: "disabled-high-contrast",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.015),
      });
    });

    it("should render expandable in high contrast mode", () => {
      mount(<Expandable />);

      cy.checkHydrated(CARD_SELECTOR);
      cy.findShadowEl(CARD_SELECTOR, "button").click({ force: true });
      cy.get(TYPOGRAPHY_SELECTOR).contains("Expanded").should(BE_VISIBLE);

      cy.compareSnapshot({
        name: "expanded-clicked-high-contrast",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.047),
      });
    });

    it("should render three variants of cards in high contrast mode", () => {
      mount(<ThreeVariants />);

      cy.checkHydrated(CARD_SELECTOR);

      cy.compareSnapshot({
        name: "render-three-high-contrast",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.038),
      });
    });
  });
});
