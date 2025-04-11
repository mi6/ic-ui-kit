/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React, { ReactElement } from "react";
import { mount } from "cypress/react";
import { IcCardHorizontal } from "../../components";
import { IcTypography, SlottedSVG } from "@ukic/react";
import {
  BE_VISIBLE,
  HAVE_FOCUS,
} from "@ukic/react/src/component-tests/utils/constants";
import { setThresholdBasedOnEnv } from "@ukic/react/cypress/utils/helpers";
import { IcThemeMode } from "../../../../web-components/dist/types/utils/types";

const DEFAULT_TEST_THRESHOLD = 0.005;

const CARD_SELECTOR = "ic-card-horizontal";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export const BasicCardHorizontal = (cardProps?: any): ReactElement => (
  <IcCardHorizontal heading="Card heading" {...cardProps} />
);

export const Icon = (): ReactElement => (
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
);

export const Image = (): ReactElement => (
  <SlottedSVG
    slot="image"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1600 900"
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
);

export const Theme = (
  clickable?: boolean,
  disabled?: boolean
): ReactElement => {
  const ThemeCard = (theme: IcThemeMode = "inherit") => {
    return (
      <IcCardHorizontal
        heading="Americano order"
        message="Extras: Double espresso shot and oat milk."
        clickable={clickable}
        theme={theme}
        disabled={disabled}
      >
        <Image />
      </IcCardHorizontal>
    );
  };
  return (
    <div style={{ padding: "16px" }}>
      <div style={{ margin: "16px" }}>
        <IcTypography style={{ marginBottom: "8px" }}>Inherit</IcTypography>
        {ThemeCard()}
      </div>
      <div style={{ margin: "16px" }}>
        <IcTypography style={{ marginBottom: "8px" }}>Light</IcTypography>
        {ThemeCard("light")}
      </div>
      <div style={{ backgroundColor: "#121212", margin: "16px" }}>
        <IcTypography style={{ color: "white", marginBottom: "8px" }}>
          Dark
        </IcTypography>
        {ThemeCard("dark")}
      </div>
    </div>
  );
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
    mount(<BasicCardHorizontal />);

    cy.checkHydrated(CARD_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.007),
    });
  });

  it("should render with a message", () => {
    mount(<BasicCardHorizontal message="Card message" />);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/with-message",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.012),
    });
  });

  it("should render with an icon", () => {
    mount(
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
    mount(
      <div style={{ margin: "16px" }}>
        <BasicCardHorizontal clickable />
      </div>
    );

    cy.get(CARD_SELECTOR).click("topLeft").should(HAVE_FOCUS);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/clickable",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.004),
    });
  });

  it("should render clickable as a link", () => {
    mount(<BasicCardHorizontal clickable href="#" />);

    cy.get('[href="#"]').should(BE_VISIBLE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/clickable-link",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.004),
    });
  });

  it("should render with image small", () => {
    mount(
      <BasicCardHorizontal
        size="small"
        message="This card is used for small bits of text."
      >
        <Image />
      </BasicCardHorizontal>
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/with-image-small",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.017),
    });
  });

  it("should render with image medium", () => {
    mount(
      <BasicCardHorizontal
        size="medium"
        message="This card is used for small to medium bits of text. It's slightly bigger."
      >
        <Image />
      </BasicCardHorizontal>
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/with-image-default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.025),
    });
  });

  it("should render with image large", () => {
    mount(
      <BasicCardHorizontal
        size="large"
        message="This card is used for medium to large bits of text. This will take up more space on the page."
      >
        <Image />
      </BasicCardHorizontal>
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/with-image-large",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.026),
    });
  });

  it("should render with image extra large", () => {
    mount(
      <BasicCardHorizontal
        size="extra-large"
        message="This card is used for large bits of text. It's the biggest card size option so will take up the most space on the application's page."
      >
        <Image />
      </BasicCardHorizontal>
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/with-image-extra-large",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.031),
    });
  });

  it("should render disabled", () => {
    mount(<BasicCardHorizontal disabled clickable />);

    cy.get('[disabled="true"]').should("exist");

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/disabled",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render with slotted heading and message", () => {
    mount(
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
    mount(
      <IcCardHorizontal
        heading="Card heading that should truncate when it reaches the max width of the card"
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae vulputate justo. Maecenas id metus interdum, volutpat libero in, eleifend est. Phasellus iaculis auctor est imperdiet fringilla. Suspendisse libero leo, luctus sit amet fermentum sit amet, porttitor eu urna. Nam dignissim massa eget nisl tristique, pharetra tincidunt mi porta."
      >
        <Image />
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
    mount(Theme());

    cy.checkA11yWithWait();

    cy.compareSnapshot({
      name: "/theme",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.037),
    });
  });

  it("should render clickable with theme prop", () => {
    mount(Theme(true));

    cy.checkA11yWithWait();

    cy.compareSnapshot({
      name: "/theme-clickable",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.035),
    });
  });

  it("should render disabled with theme prop", () => {
    mount(Theme(true, true));

    cy.checkA11yWithWait();

    cy.compareSnapshot({
      name: "/theme-disabled",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.018),
    });
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
    mount(<BasicCardHorizontal />);

    cy.checkHydrated(CARD_SELECTOR);

    // cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/default-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.009),
    });
  });

  it("should render clickable", () => {
    mount(
      <div style={{ margin: "16px" }}>
        <BasicCardHorizontal clickable />
      </div>
    );

    cy.get(CARD_SELECTOR).click("topLeft").should(HAVE_FOCUS);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/clickable-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
    });
  });

  it("should render clickable as a link", () => {
    mount(<BasicCardHorizontal clickable href="#" />);

    cy.get('[href="#"]').should(BE_VISIBLE);

    // cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/clickable-link-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.015),
    });
  });

  it("should render disabled", () => {
    mount(<BasicCardHorizontal disabled clickable />);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/disabled-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.012),
    });
  });
});
