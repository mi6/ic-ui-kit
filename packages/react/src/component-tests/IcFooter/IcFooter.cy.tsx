/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
import {
  IcFooter,
  IcFooterLink,
  IcFooterLinkGroup,
  IcSectionContainer,
  IcTopNavigation,
  IcTypography,
} from "../../components";
import { mount } from "cypress/react";
import { SlottedSVG } from "../../react-component-lib/slottedSVG";
import { BE_VISIBLE, HAVE_LENGTH } from "../utils/constants";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";

const DEFAULT_TEST_THRESHOLD = 0.05;

describe("IcFooter", () => {
  it("should render", () => {
    mount(
      <IcFooter
        description="The UK Intelligence Community Design System (ICDS) is a joint project by MI6, GCHQ, MI5, and partners."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
      >
        <IcFooterLink slot="link" href="/">
          Accessibility
        </IcFooterLink>
        <IcFooterLink slot="link" href="/">
          Styles
        </IcFooterLink>
        <IcFooterLink slot="link" href="/">
          Components
        </IcFooterLink>
        <IcFooterLink slot="link" href="/">
          Patterns
        </IcFooterLink>
      </IcFooter>
    );
    cy.checkHydrated("ic-footer");
  });

  it("should display caption and description and copyright ", () => {
    mount(
      <IcFooter
        description="The UK Intelligence Community Design System (ICDS) is a joint project by MI6, GCHQ, MI5, and partners."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
      >
        <IcFooterLink slot="link" href="/">
          Accessibility
        </IcFooterLink>
        <IcFooterLink slot="link" href="/">
          Styles
        </IcFooterLink>
        <IcFooterLink slot="link" href="/">
          Components
        </IcFooterLink>
        <IcFooterLink slot="link" href="/">
          Patterns
        </IcFooterLink>
      </IcFooter>
    );
    cy.findShadowEl("ic-footer", "div.footer-description").should(BE_VISIBLE);
    cy.findShadowEl("ic-footer", ".footer-caption").should(BE_VISIBLE);
    cy.findShadowEl("ic-footer", ".footer-copyright").should(BE_VISIBLE);
  });

  it("should display grouplinks", () => {
    mount(
      <IcFooter
        groupLinks
        description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
            please get in touch."
      >
        <IcFooterLinkGroup slot="link" groupTitle="Grouped heading">
          <IcFooterLink href="/">Accessibility</IcFooterLink>
          <IcFooterLink href="/">Styles</IcFooterLink>
          <IcFooterLink href="/">Components</IcFooterLink>
          <IcFooterLink href="/">Patterns</IcFooterLink>
        </IcFooterLinkGroup>
        <IcFooterLinkGroup slot="link" groupTitle="Grouped heading">
          <IcFooterLink href="/">Accessibility</IcFooterLink>
          <IcFooterLink href="/">Styles</IcFooterLink>
          <IcFooterLink href="/">Components</IcFooterLink>
          <IcFooterLink href="/">Patterns</IcFooterLink>
        </IcFooterLinkGroup>
        <IcFooterLinkGroup slot="link" groupTitle="Grouped heading">
          <IcFooterLink href="/">Accessibility</IcFooterLink>
          <IcFooterLink href="/">Styles</IcFooterLink>
          <IcFooterLink href="/">Components</IcFooterLink>
          <IcFooterLink href="/">Patterns</IcFooterLink>
        </IcFooterLinkGroup>
      </IcFooter>
    );
    cy.viewport(1440, 750);
    cy.get("ic-footer-link-group").should(BE_VISIBLE).should(HAVE_LENGTH, "3");
    cy.get("ic-footer-link").should(BE_VISIBLE).should(HAVE_LENGTH, "12");
  });

  it("should toggle the link groups when clicked ", () => {
    mount(
      <IcFooter description="Description" groupLinks>
        <IcFooterLinkGroup slot="link" groupTitle="Link group 1">
          <IcFooterLink href="/">Link 1</IcFooterLink>
          <IcFooterLink href="/">Link 2</IcFooterLink>
        </IcFooterLinkGroup>
        <IcFooterLinkGroup slot="link" groupTitle="Link group 2">
          <IcFooterLink href="/">Link 1</IcFooterLink>
          <IcFooterLink href="/">Link 2</IcFooterLink>
        </IcFooterLinkGroup>
      </IcFooter>
    );
    cy.viewport(600, 750);
    cy.checkHydrated("ic-footer");
    cy.compareSnapshot({
      name: "beforeClick",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
    });
    cy.get('ic-footer-link-group[slot="link"]').each(($linkGroup) => {
      cy.wrap($linkGroup).click({ force: true });
    });
    cy.wait(500).compareSnapshot({
      name: "afterClick",
      testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
    });
  });

  describe("IcFooter A11y and visual regression tests", () => {
    beforeEach(() => {
      cy.injectAxe();
      cy.viewport(1024, 750);
    });

    afterEach(() => {
      cy.task("generateReport");
    });

    it("should render default footer", () => {
      mount(
        <IcFooter
          description="The UK Intelligence Community Design System (ICDS) is a joint project by MI6, GCHQ, MI5, and partners."
          caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
        >
          <IcFooterLink slot="link" href="/">
            Accessibility
          </IcFooterLink>
          <IcFooterLink slot="link" href="/">
            Styles
          </IcFooterLink>
          <IcFooterLink slot="link" href="/">
            Components
          </IcFooterLink>
          <IcFooterLink slot="link" href="/">
            Patterns
          </IcFooterLink>
        </IcFooter>
      );
      cy.compareSnapshot({
        name: "default",
        testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
      });
      cy.checkA11yWithWait();
    });

    it("should verify center alignment of footer ", () => {
      mount(
        <IcFooter
          aligned="center"
          description="The UK Intelligence Community Design System (ICDS) is a joint project by MI6, GCHQ, MI5, and partners."
          caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
        >
          <IcFooterLink slot="link" href="/">
            Accessibility
          </IcFooterLink>
          <IcFooterLink slot="link" href="/">
            Styles
          </IcFooterLink>
          <IcFooterLink slot="link" href="/">
            Components
          </IcFooterLink>
          <IcFooterLink slot="link" href="/">
            Patterns
          </IcFooterLink>
        </IcFooter>
      );
      cy.viewport(1440, 750);
      cy.compareSnapshot({
        name: "centerFooter",
        testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
      });
      cy.checkA11yWithWait();
    });

    it("should display full-width footer ", () => {
      mount(
        <IcFooter
          aligned="full-width"
          description="The UK Intelligence Community Design System (ICDS) is a joint project by MI6, GCHQ, MI5, and partners."
          caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
        >
          <IcFooterLink slot="link" href="/">
            Accessibility
          </IcFooterLink>
          <IcFooterLink slot="link" href="/">
            Styles
          </IcFooterLink>
          <IcFooterLink slot="link" href="/">
            Components
          </IcFooterLink>
          <IcFooterLink slot="link" href="/">
            Patterns
          </IcFooterLink>
        </IcFooter>
      );
      cy.viewport(1440, 750);
      cy.compareSnapshot({
        name: "fullWidthFooter",
        testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
      });
      cy.checkA11yWithWait();
    });

    it("should verify footer display for extra large screen sizes", () => {
      mount(
        <IcFooter
          breakpoint="extra large"
          description="The UK Intelligence Community Design System (ICDS) is a joint project by MI6, GCHQ, MI5, and partners."
          caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
        >
          <IcFooterLink slot="link" href="/">
            Accessibility
          </IcFooterLink>
          <IcFooterLink slot="link" href="/">
            Styles
          </IcFooterLink>
          <IcFooterLink slot="link" href="/">
            Components
          </IcFooterLink>
          <IcFooterLink slot="link" href="/">
            Patterns
          </IcFooterLink>
        </IcFooter>
      );
      cy.viewport(1440, 750);
      cy.compareSnapshot({
        name: "extraLargeFooter",
        testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
      });
      cy.checkA11yWithWait();
    });

    it("should verify footer display for extra small screen size", () => {
      mount(
        <IcFooter
          breakpoint="extra small"
          description="The UK Intelligence Community Design System (ICDS) is a joint project by MI6, GCHQ, MI5, and partners."
          caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
        >
          <IcFooterLink slot="link" href="/">
            Accessibility
          </IcFooterLink>
          <IcFooterLink slot="link" href="/">
            Styles
          </IcFooterLink>
          <IcFooterLink slot="link" href="/">
            Components
          </IcFooterLink>
          <IcFooterLink slot="link" href="/">
            Patterns
          </IcFooterLink>
        </IcFooter>
      );
      cy.viewport(450, 790);
      cy.compareSnapshot({
        name: "extraSmallFooter",
        testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
      });
      cy.checkA11yWithWait();
    });

    it("should render grouped links", () => {
      mount(
        <IcFooter
          groupLinks
          description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
            please get in touch."
        >
          <IcFooterLinkGroup slot="link" groupTitle="Grouped heading">
            <IcFooterLink href="/">Accessibility</IcFooterLink>
            <IcFooterLink href="/">Styles</IcFooterLink>
            <IcFooterLink href="/">Components</IcFooterLink>
            <IcFooterLink href="/">Patterns</IcFooterLink>
          </IcFooterLinkGroup>
          <IcFooterLinkGroup slot="link" groupTitle="Grouped heading">
            <IcFooterLink href="/">Accessibility</IcFooterLink>
            <IcFooterLink href="/">Styles</IcFooterLink>
            <IcFooterLink href="/">Components</IcFooterLink>
            <IcFooterLink href="/">Patterns</IcFooterLink>
          </IcFooterLinkGroup>
          <IcFooterLinkGroup slot="link" groupTitle="Grouped heading">
            <IcFooterLink href="/">Accessibility</IcFooterLink>
            <IcFooterLink href="/">Styles</IcFooterLink>
            <IcFooterLink href="/">Components</IcFooterLink>
            <IcFooterLink href="/">Patterns</IcFooterLink>
          </IcFooterLinkGroup>
        </IcFooter>
      );
      cy.viewport(1440, 750);
      cy.compareSnapshot({
        name: "groupLinks",
        testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
      });
      cy.checkA11yWithWait();
    });

    it("should render logo with links", () => {
      mount(
        <IcFooter description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, please get in touch.">
          {" "}
          <IcFooterLink slot="link" href="/">
            Accessibility
          </IcFooterLink>
          <IcFooterLink slot="link" href="/">
            Styles
          </IcFooterLink>
          <IcFooterLink slot="link" href="/">
            Components
          </IcFooterLink>
          <IcFooterLink slot="link" href="/">
            Patterns
          </IcFooterLink>
          <div slot="logo" style={{ display: "flex" }}>
            <IcFooterLink href="/">
              <SlottedSVG
                xmlns="http://www.w3.org/2000/svg"
                height="48px"
                viewBox="0 0 24 24"
                width="48px"
                fill="#FFFFFF"
              >
                <path
                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                  fill="currentColor"
                />
              </SlottedSVG>
            </IcFooterLink>
            <IcFooterLink href="/">
              <SlottedSVG
                xmlns="http://www.w3.org/2000/svg"
                height="48px"
                viewBox="0 0 24 24"
                width="48px"
                fill="#FFFFFF"
              >
                <path
                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                  fill="currentColor"
                />
              </SlottedSVG>
            </IcFooterLink>
          </div>
        </IcFooter>
      );
      cy.compareSnapshot({
        name: "logoWithLinks",
        testThreshold: DEFAULT_TEST_THRESHOLD + 0.5,
      });
      cy.checkA11yWithWait("svg", 500);
    });

    it("should render with layout", () => {
      mount(
        <div className="footer-layout-root">
          <div style={{ minHeight: "100vh" }}>
            <IcTopNavigation appTitle="ICDS" status="alpha" version="v0.0.7">
              <SlottedSVG
                slot="app-icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
              </SlottedSVG>
            </IcTopNavigation>
            <main>
              <IcSectionContainer>
                <IcTypography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vestibulum venenatis facilisis. Nam tortor felis, auctor vel
                  ante quis, tempor interdum libero. In dictum sodales velit, eu
                  egestas arcu dignissim ac. Aliquam facilisis eros dolor, id
                  laoreet orci sagittis ut. Sed tempus, lacus in pretium
                  molestie, lectus magna interdum risus, vel fringilla libero ex
                  eu dui. Suspendisse ullamcorper vehicula lacinia. Phasellus
                  congue velit nisl, vitae congue ligula rutrum id.
                </IcTypography>
              </IcSectionContainer>
            </main>
          </div>
          <IcFooter
            description="The UK Intelligence Community Design System (ICDS) is a joint project by MI6, GCHQ, MI5, and partners."
            caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
          >
            <IcFooterLink slot="link" href="/">
              Accessibility
            </IcFooterLink>
            <IcFooterLink slot="link" href="/">
              Styles
            </IcFooterLink>
            <IcFooterLink slot="link" href="/">
              Components
            </IcFooterLink>
            <IcFooterLink slot="link" href="/">
              Patterns
            </IcFooterLink>
          </IcFooter>
        </div>
      );
      cy.compareSnapshot({
        name: "layoutLink",
        testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
      });
      cy.checkA11yWithWait();
    });

    it("should not display the crown copyright", () => {
      mount(
        <div style={{ padding: "5rem" }}>
          <IcFooter
            copyright={false}
            description="The UK Intelligence Community Design System (ICDS) is a joint project by MI6, GCHQ, MI5, and partners."
            caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
          >
            <IcFooterLink slot="link" href="/">
              Accessibility
            </IcFooterLink>
            <IcFooterLink slot="link" href="/">
              Styles
            </IcFooterLink>
            <IcFooterLink slot="link" href="/">
              Components
            </IcFooterLink>
            <IcFooterLink slot="link" href="/">
              Patterns
            </IcFooterLink>
          </IcFooter>
        </div>
      );
      cy.compareSnapshot({
        name: "notDisplayCopyRight",
        testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
      });
      cy.checkA11yWithWait();
    });

    it("should render without description", () => {
      mount(
        <IcFooter caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence.">
          <IcFooterLink slot="link" href="/">
            Accessibility
          </IcFooterLink>
          <IcFooterLink slot="link" href="/">
            Styles
          </IcFooterLink>
          <IcFooterLink slot="link" href="/">
            Components
          </IcFooterLink>
          <IcFooterLink slot="link" href="/">
            Patterns
          </IcFooterLink>
        </IcFooter>
      );
      cy.checkA11yWithWait();
      cy.compareSnapshot({
        name: "withoutDescription",
        testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
      });
    });

    it("should render with no caption or copyright", () => {
      mount(
        <IcFooter
          description="The UK Intelligence Community Design System (ICDS) is a joint project by MI6, GCHQ, MI5, and partners."
          copyright={false}
        >
          <IcFooterLink slot="link" href="/">
            Accessibility
          </IcFooterLink>
          <IcFooterLink slot="link" href="/">
            Styles
          </IcFooterLink>
          <IcFooterLink slot="link" href="/">
            Components
          </IcFooterLink>
          <IcFooterLink slot="link" href="/">
            Patterns
          </IcFooterLink>
        </IcFooter>
      );
      cy.checkA11yWithWait();
      cy.compareSnapshot({
        name: "noCaptionCopyright",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.05),
      });
    });

    it("should render a footer with no links", () => {
      mount(
        <IcFooter
          description="The UK Intelligence Community Design System (ICDS) is a joint project by MI6, GCHQ, MI5, and partners."
          caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
        ></IcFooter>
      );
      cy.checkA11yWithWait();
      cy.compareSnapshot({
        name: "noLinks",
        testThreshold: DEFAULT_TEST_THRESHOLD + 0.05,
      });
    });

    it("should render a footer with slotted description and caption", () => {
      mount(
        <IcFooter>
          <IcTypography slot="description">
            The UK Intelligence Community Design System (ICDS) is a joint
            project by MI6, GCHQ, MI5, and partners.
          </IcTypography>
          <IcTypography slot="caption">
            All content is available under the Open Government Licence v3.0,
            except source code and code examples which are available under the
            MIT Licence.
          </IcTypography>
        </IcFooter>
      );
      cy.checkA11yWithWait();
      cy.compareSnapshot({
        name: "slottedDescriptionCaption",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.05),
      });
    });
  });
});
