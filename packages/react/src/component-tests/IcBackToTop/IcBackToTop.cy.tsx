/// <reference types="Cypress" />

import { mount } from "cypress/react";
import React from "react";
import {
  BE_VISIBLE,
  CONTAIN_TEXT,
  HAVE_FOCUS,
  NOT_BE_VISIBLE,
  NOT_CONTAIN,
} from "../utils/constants";
import { BackToTop } from "./IcBackToTopTestData";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";
import { IcBackToTop, IcFooter, IcFooterLink } from "../../components";
import { delay } from "cypress/types/bluebird";

const BACK_TO_TOP_SELECTOR = "ic-back-to-top";
const DEFAULT_TEST_THRESHOLD = 0.061;

describe("IcBackToTop end-to-end tests", () => {
  it("should be hidden when viewport is at the top of the page", () => {
    mount(<BackToTop />);

    cy.checkHydrated(BACK_TO_TOP_SELECTOR);

    cy.get(BACK_TO_TOP_SELECTOR)
      .shadow()
      .find("ic-button")
      .should(NOT_BE_VISIBLE);
  });

  it("should have the correct text", () => {
    mount(<BackToTop />);

    cy.checkHydrated(BACK_TO_TOP_SELECTOR);

    cy.get(BACK_TO_TOP_SELECTOR).shadow().should(CONTAIN_TEXT, "Back to top");
  });

  it("should appear when top is off screen", () => {
    mount(<BackToTop />);

    cy.scrollTo("bottom").checkHydrated(BACK_TO_TOP_SELECTOR);
    cy.get(BACK_TO_TOP_SELECTOR)
      .shadow()
      .find("ic-button")
      .wait(500)
      .should(BE_VISIBLE)
      .and(CONTAIN_TEXT, "Back to top");
  });

  it("should appear with icon only when top is off screen", () => {
    mount(<BackToTop variant="icon" />);

    cy.scrollTo("bottom").checkHydrated(BACK_TO_TOP_SELECTOR);
    cy.get(BACK_TO_TOP_SELECTOR)
      .shadow()
      .find("ic-button")
      .wait(500)
      .should(BE_VISIBLE)
      .and(NOT_CONTAIN, "Back to top");
  });

  it("should appear when the page is scrolled", () => {
    mount(<BackToTop />);

    cy.scrollTo(0, 100).checkHydrated(BACK_TO_TOP_SELECTOR);
    cy.get(BACK_TO_TOP_SELECTOR).shadow().find("ic-button").should(BE_VISIBLE);
  });

  it("should hide and scroll page to top when clicked", () => {
    mount(<BackToTop />);

    cy.scrollTo("bottom").checkHydrated(BACK_TO_TOP_SELECTOR);
    cy.get(BACK_TO_TOP_SELECTOR)
      .shadow()
      .find("ic-button")
      .should(BE_VISIBLE)
      .click();
    cy.wait(500);
    cy.get(BACK_TO_TOP_SELECTOR)
      .shadow()
      .find("ic-button")
      .should(NOT_BE_VISIBLE);
  });

  it("should focus component", () => {
    mount(<BackToTop />);

    cy.scrollTo("bottom").checkHydrated(BACK_TO_TOP_SELECTOR);
    cy.wait(500)
      .get(BACK_TO_TOP_SELECTOR)
      .shadow()
      .find("ic-button")
      .shadow()
      .find("button")
      .focus();
    cy.get(BACK_TO_TOP_SELECTOR).shadow().find("ic-button").should(HAVE_FOCUS);
  });
});

describe("IcBackToTop visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render default BackToTop", () => {
    mount(<BackToTop />);

    cy.scrollTo("bottom").checkHydrated(BACK_TO_TOP_SELECTOR).wait(500);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.018),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render back to top positioned to the left of the viewport", () => {
    mount(<BackToTop position="left" />);

    cy.scrollTo("bottom").checkHydrated(BACK_TO_TOP_SELECTOR).wait(500);

    cy.compareSnapshot({
      name: "/position-left",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render back to top positioned in the centre of the viewport", () => {
    mount(<BackToTop position="center" />);

    cy.scrollTo("bottom").checkHydrated(BACK_TO_TOP_SELECTOR).wait(500);

    cy.compareSnapshot({
      name: "/position-centre",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.018),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render icon only BackToTop", () => {
    mount(<BackToTop variant="icon" />);

    cy.scrollTo("bottom").checkHydrated(BACK_TO_TOP_SELECTOR).wait(500);

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "/icon",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.007),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render BackToTop with dark theme", () => {
    mount(
      <div
        style={{
          padding: "10px",
          backgroundColor: "var(--ic-color-page-background-dark)",
        }}
      >
        <BackToTop theme="dark" />
      </div>
    );

    cy.scrollTo("bottom").checkHydrated(BACK_TO_TOP_SELECTOR).wait(1500);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/dark-theme",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.081),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render icon only BackToTop with dark theme", () => {
    mount(
      <div
        style={{
          padding: "10px",
          backgroundColor: "var(--ic-color-page-background-dark)",
        }}
      >
        <BackToTop variant="icon" theme="dark" />
      </div>
    );

    cy.scrollTo("bottom");
    cy.get(BACK_TO_TOP_SELECTOR);

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "/icon-dark-theme",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.067),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render focused BackToTop", () => {
    mount(<BackToTop />);

    cy.scrollTo("bottom").checkHydrated(BACK_TO_TOP_SELECTOR);
    cy.wait(500)
      .get(BACK_TO_TOP_SELECTOR)
      .shadow()
      .find("ic-button")
      .shadow()
      .find("button")
      .focus()
      .wait(1500);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/focussed",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.028),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render focused icon only BackToTop", () => {
    mount(<BackToTop variant="icon" />);

    cy.scrollTo("bottom").checkHydrated(BACK_TO_TOP_SELECTOR);
    cy.wait(500)
      .get(BACK_TO_TOP_SELECTOR)
      .shadow()
      .find("ic-button")
      .shadow()
      .find("button")
      .focus()
      .wait(1000);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/focussed-icon-only",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.029),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with left and bottom values set in style", () => {
    mount(
      <div style={{ height: "200vh" }}>
        <div
          id="topEl"
          style={{
            width: "100%",
            height: "50px",
            margin: "2rem",
          }}
        >
          Top of screen
        </div>
        <main style={{ height: "100%" }}>main</main>
        <IcBackToTop
          target="topEl"
          position="left"
          style={{ "--margin-left": "5rem", "--footer-offset": "5rem" }}
        />
        <IcFooter
          aligned="full-width"
          description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback,
                  please get in touch."
          caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
        >
          <IcFooterLink id="link" slot="link" href="/">
            Get Started
          </IcFooterLink>
        </IcFooter>
      </div>
    );

    cy.get("ic-footer-link")
      .shadow()
      .find("ic-link")
      .shadow()
      .find("a")
      .focus()
      .checkHydrated(BACK_TO_TOP_SELECTOR);

    cy.wait(1000);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/left-x-y-values",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.029),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with right and bottom values set in style", () => {
    mount(
      <div style={{ height: "200vh" }}>
        <div
          id="topEl"
          style={{
            width: "100%",
            height: "50px",
            margin: "2rem",
          }}
        >
          Top of screen
        </div>
        <main style={{ height: "100%" }}>main</main>
        <IcBackToTop
          target="topEl"
          position="right"
          style={{ "--margin-right": "5rem", "--footer-offset": "5rem" }}
        />
        <IcFooter
          aligned="full-width"
          description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback,
                    please get in touch."
          caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
        >
          <IcFooterLink id="link" slot="link" href="/">
            Get Started
          </IcFooterLink>
        </IcFooter>
      </div>
    );

    cy.get("ic-footer-link")
      .shadow()
      .find("ic-link")
      .shadow()
      .find("a")
      .focus()
      .checkHydrated(BACK_TO_TOP_SELECTOR);

    cy.wait(1000);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/right-x-y-values",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.029),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });
});

describe("IcBackToTop visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  after(() => {
    cy.disableForcedColors();
  });

  it("should render default BackToTop in high contrast mode", () => {
    mount(<BackToTop />);

    cy.scrollTo("bottom").checkHydrated(BACK_TO_TOP_SELECTOR).wait(1250);

    cy.compareSnapshot({
      name: "/default-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render icon only BackToTop in high contrast mode", () => {
    mount(<BackToTop variant="icon" />);

    cy.scrollTo("bottom").checkHydrated(BACK_TO_TOP_SELECTOR).wait(500);

    cy.compareSnapshot({
      name: "/icon-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.007),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render focused BackToTop in high contrast mode", () => {
    mount(<BackToTop />);

    cy.scrollTo("bottom").checkHydrated(BACK_TO_TOP_SELECTOR);
    cy.wait(500)
      .get(BACK_TO_TOP_SELECTOR)
      .shadow()
      .find("ic-button")
      .shadow()
      .find("button")
      .focus()
      .wait(1500);

    cy.compareSnapshot({
      name: "/focussed-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render focused icon only BackToTop in high contrast mode", () => {
    mount(<BackToTop variant="icon" />);

    cy.scrollTo("bottom").checkHydrated(BACK_TO_TOP_SELECTOR);
    cy.wait(500)
      .get(BACK_TO_TOP_SELECTOR)
      .shadow()
      .find("ic-button")
      .shadow()
      .find("button")
      .focus()
      .wait(1000);

    cy.compareSnapshot({
      name: "/focussed-icon-only-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.021),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });
});
