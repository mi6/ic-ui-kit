import { newE2EPage } from "@stencil/core/testing";
import {
  icSideNavigation,
  icSideNavigationExpanded,
  icSideNavigationGroupedNav,
  icSideNavigationTheme,
  icSideNavigationStatic,
  icSideNavigationSlottedExpanded,
} from "./ic-side-navigation-test-examples";

const MOBILE_VIEWPORT = {
  width: 375,
  height: 667,
};

const ANIMATION_MS_THRESHOLD = 300;

describe("ic-side-navigation", () => {
  describe("mobile", () => {
    it("it renders", async () => {
      const page = await newE2EPage();
      await page.setContent(icSideNavigation);

      await page.setViewport({
        ...MOBILE_VIEWPORT,
      });

      await page.waitForChanges();

      const mobileMenuBtn = await page.find(
        "ic-side-navigation >>> #menu-button"
      );

      expect(mobileMenuBtn).not.toBeNull();
    });

    it("displays flyout menu when menu button clicked with correct aria-expanded values", async () => {
      const page = await newE2EPage();
      await page.setContent(icSideNavigation);

      await page.setViewport({
        ...MOBILE_VIEWPORT,
      });

      await page.waitForChanges();

      const mobileMenuBtn = await page.find(
        "ic-side-navigation >>> #menu-button"
      );

      let mobileBtnLabel = await page.evaluate(() =>
        document
          .querySelector("ic-side-navigation")
          .shadowRoot.querySelector("#menu-button")
          .textContent.trim()
      );

      expect(mobileBtnLabel).toContain("Menu");

      await mobileMenuBtn.click();

      await page.waitForChanges();

      const flyoutMenu = await page.find(
        "ic-side-navigation >>> .side-navigation-inner"
      );

      expect(flyoutMenu).not.toBeNull();

      mobileBtnLabel = await page.evaluate(() =>
        document
          .querySelector("ic-side-navigation")
          .shadowRoot.querySelector("#menu-button")
          .textContent.trim()
      );

      expect(mobileBtnLabel).toContain("Close");
    });

    it("dyanmically updated native button aria-label and aria-expanded", async () => {
      const page = await newE2EPage();
      await page.setContent(icSideNavigation);

      await page.setViewport({
        ...MOBILE_VIEWPORT,
      });

      await page.waitForChanges();

      const mobileMenuBtn = await page.find(
        "ic-side-navigation >>> #menu-button"
      );

      let mobileAriaExpanded = await page.evaluate(() =>
        document
          .querySelector("ic-side-navigation")
          .shadowRoot.querySelector("#menu-button")
          .shadowRoot.querySelector("button")
          .getAttribute("aria-expanded")
      );

      let mobileAriaLabel = await page.evaluate(() =>
        document
          .querySelector("ic-side-navigation")
          .shadowRoot.querySelector("#menu-button")
          .shadowRoot.querySelector("button")
          .getAttribute("aria-label")
      );

      expect(mobileAriaExpanded).toBe("false");
      expect(mobileAriaLabel).toBe("Open navigation menu");

      await mobileMenuBtn.click();

      await page.waitForChanges();

      const flyoutMenu = await page.find(
        "ic-side-navigation >>> .side-navigation-inner"
      );

      expect(flyoutMenu).not.toBeNull();

      mobileAriaExpanded = await page.evaluate(() =>
        document
          .querySelector("ic-side-navigation")
          .shadowRoot.querySelector("#menu-button")
          .shadowRoot.querySelector("button")
          .getAttribute("aria-expanded")
      );

      mobileAriaLabel = await page.evaluate(() =>
        document
          .querySelector("ic-side-navigation")
          .shadowRoot.querySelector("#menu-button")
          .shadowRoot.querySelector("button")
          .getAttribute("aria-label")
      );

      expect(mobileAriaExpanded).toBe("true");
      expect(mobileAriaLabel).toBe("Close navigation menu");
    });

    it("renders the correct number of navigation-items", async () => {
      const labels = ["Home", "a11y"];
      const page = await newE2EPage();
      await page.setContent(icSideNavigation);

      await page.setViewport({
        ...MOBILE_VIEWPORT,
      });

      await page.waitForChanges();

      const mobileMenuBtn = await page.find(
        "ic-side-navigation >>> #menu-button"
      );

      await mobileMenuBtn.click();

      await page.waitForChanges();

      const navigationItems = await page.evaluate(() => {
        return Array.from(
          document.querySelectorAll("ic-side-navigation ic-navigation-item")
        ).map((i) =>
          i.shadowRoot.querySelector(".ic-tooltip").textContent.slice(2)
        );
      });

      expect(navigationItems.length).toBe(2);

      navigationItems.forEach((navItem, i) => {
        expect(navItem).toBe(labels[i]);
      });
    });

    it("renders application name", async () => {
      const page = await newE2EPage();
      await page.setContent(icSideNavigation);

      await page.setViewport({
        ...MOBILE_VIEWPORT,
      });

      await page.waitForChanges();

      const applicationName = await (
        await page.find("ic-side-navigation >>> .top-bar ic-typography")
      ).innerText;

      expect(applicationName).toBe("ACME");
    });

    it("renders app status and version", async () => {
      const page = await newE2EPage();
      await page.setContent(icSideNavigation);

      await page.setViewport({
        ...MOBILE_VIEWPORT,
      });

      await page.waitForChanges();

      const mobileMenuBtn = await page.find(
        "ic-side-navigation >>> #menu-button"
      );

      await mobileMenuBtn.click();

      await page.waitForChanges();

      const applicationStatus = await (
        await page.find(
          "ic-side-navigation >>> .app-status-wrapper .app-status-text"
        )
      ).innerText;
      const applicationVersion = await (
        await page.find(
          "ic-side-navigation >>> .app-status-wrapper .app-version"
        )
      ).innerText;

      expect(applicationStatus).toBe("BETA");
      expect(applicationVersion).toBe("v0.0.0");
    });

    it("does not render menu expand button", async () => {
      const page = await newE2EPage();
      await page.setContent(icSideNavigation);

      await page.setViewport({
        ...MOBILE_VIEWPORT,
      });

      await page.waitForChanges();

      const mobileMenuBtn = await page.find(
        "ic-side-navigation >>> #menu-button"
      );

      await mobileMenuBtn.click();

      await page.waitForChanges();

      const flyoutMenu = await page.find(
        "ic-side-navigation >>> .side-navigation-inner"
      );

      expect(flyoutMenu).not.toBeNull();

      const menuExpandBtn = await page.evaluate(() =>
        document
          .querySelector("ic-side-navigation")
          .shadowRoot.querySelector(".side-navigation .menu-expand-button")
      );

      expect(menuExpandBtn).toBeNull();
    });

    it("does not render tooltips on mobile when menu is closed", async () => {
      const page = await newE2EPage();
      await page.setContent(icSideNavigation);

      await page.setViewport({
        ...MOBILE_VIEWPORT,
      });

      await page.waitForChanges();

      await page.keyboard.press("Tab");
      await page.keyboard.press("Tab");
      await page.keyboard.press("Tab");

      await page.waitForChanges();

      let sideNavInnerVisibility = await page.evaluate(() => {
        const sideNavInner = document
          .querySelector("ic-side-navigation")
          .shadowRoot.querySelector(".side-navigation-inner");

        return window.getComputedStyle(sideNavInner).visibility;
      });

      expect(sideNavInnerVisibility).toBe("hidden");

      const toolTipDisplay = await page.evaluate(() => {
        const tooltip = document
          .querySelectorAll("ic-side-navigation ic-navigation-item")[0]
          .shadowRoot.querySelector("ic-tooltip")
          .shadowRoot.querySelector(".ic-tooltip-container");

        return window.getComputedStyle(tooltip).display;
      });

      expect(toolTipDisplay).toBe("none");

      let mobileMenuBtn = await page.find(
        "ic-side-navigation >>> #menu-button"
      );

      await mobileMenuBtn.click();

      await page.waitForChanges();

      sideNavInnerVisibility = await page.evaluate(() => {
        const sideNavInner = document
          .querySelector("ic-side-navigation")
          .shadowRoot.querySelector(".side-navigation-inner");

        return window.getComputedStyle(sideNavInner).visibility;
      });

      expect(sideNavInnerVisibility).toBe("visible");

      await page.waitForChanges();

      mobileMenuBtn = await page.find("ic-side-navigation >>> #menu-button");

      await mobileMenuBtn.click();

      await page.waitForTimeout(300); // Wait for flyout menu to disappear (50ms longer than animation)

      sideNavInnerVisibility = await page.evaluate(() => {
        const sideNavInner = document
          .querySelector("ic-side-navigation")
          .shadowRoot.querySelector(".side-navigation-inner");

        return window.getComputedStyle(sideNavInner).visibility;
      });

      expect(sideNavInnerVisibility).toBe("hidden");
    });
  });

  describe("tablet/desktop", () => {
    it("renders correctly", async () => {
      const page = await newE2EPage();
      await page.setContent(icSideNavigation);

      const sideNavigation = await page.find("ic-side-navigation");

      expect(sideNavigation).not.toBeNull();
    });

    it("renders collapsed side nav on initial load", async () => {
      const page = await newE2EPage();
      await page.setContent(icSideNavigation);

      const sideNavigationWidth = await page.evaluate(() => {
        const sideNav = document.querySelector("ic-side-navigation");
        return window.getComputedStyle(sideNav).width;
      });

      expect(parseInt(sideNavigationWidth)).toBe(56);
    });

    it("renders expanded side nav on initial load", async () => {
      const page = await newE2EPage();
      await page.setContent(icSideNavigationExpanded);

      const sideNavigationWidth = await page.evaluate(() => {
        const sideNav = document.querySelector("ic-side-navigation");
        return window.getComputedStyle(sideNav).width;
      });

      expect(parseInt(sideNavigationWidth)).toBe(320);
    });

    it("renders collapsed and expanded on menu toggle", async () => {
      const page = await newE2EPage();
      await page.setContent(icSideNavigation);

      await page.waitForChanges();

      const menuExpandBtn = await page.find(
        "ic-side-navigation >>> .side-navigation button.menu-expand-button"
      );

      await menuExpandBtn.click();

      await page.waitForTimeout(ANIMATION_MS_THRESHOLD);

      let sideNavigationWidth = await page.evaluate(() => {
        const sideNav = document.querySelector("ic-side-navigation");
        return window.getComputedStyle(sideNav).width;
      });

      expect(parseInt(sideNavigationWidth)).toBe(320);

      await menuExpandBtn.click();

      await page.waitForTimeout(ANIMATION_MS_THRESHOLD);

      sideNavigationWidth = await page.evaluate(() => {
        const sideNav = document.querySelector("ic-side-navigation");
        return window.getComputedStyle(sideNav).width;
      });

      expect(parseInt(sideNavigationWidth)).toBe(56);
    });

    it("updates aria-label of menu expand button", async () => {
      const page = await newE2EPage();
      await page.setContent(icSideNavigation);

      await page.waitForChanges();

      const menuExpandBtn = await page.find(
        "ic-side-navigation >>> .side-navigation button.menu-expand-button"
      );

      await menuExpandBtn.click();

      await page.waitForChanges();

      expect(menuExpandBtn.getAttribute("aria-label")).toBe(
        "Collapse side navigation"
      );

      await menuExpandBtn.click();

      expect(menuExpandBtn.getAttribute("aria-label")).toBe(
        "Expand side navigation"
      );
    });

    it("displays application name on expanded side navigation", async () => {
      const page = await newE2EPage();
      await page.setContent(icSideNavigation);

      await page.waitForChanges();

      let applicationNameOpacity = await page.evaluate(() => {
        const applicationName = document
          .querySelector("ic-side-navigation")
          .shadowRoot.querySelector(".title-link ic-typography");

        return window.getComputedStyle(applicationName).opacity;
      });

      expect(applicationNameOpacity).toBe("0");

      const menuExpandBtn = await page.find(
        "ic-side-navigation >>> .side-navigation button.menu-expand-button"
      );

      await menuExpandBtn.click();

      await page.waitForTimeout(ANIMATION_MS_THRESHOLD);

      applicationNameOpacity = await page.evaluate(() => {
        const applicationName = document
          .querySelector("ic-side-navigation")
          .shadowRoot.querySelector(".title-link ic-typography");

        return window.getComputedStyle(applicationName).opacity;
      });

      expect(applicationNameOpacity).toBe("1");
    });

    it("collapse group nav items in collapsed side menu", async () => {
      const page = await newE2EPage();
      await page.setContent(icSideNavigationGroupedNav);

      await page.waitForChanges();

      const navigtionGroupToggleBtn = await page.find(
        "ic-side-navigation ic-navigation-group >>> .navigation-group"
      );

      let navigationGroupWrapperHeight = await page.evaluate(() => {
        const navigationGroupWrapper = document
          .querySelector("ic-side-navigation ic-navigation-group")
          .shadowRoot.querySelector(".grouped-links-wrapper");

        return window.getComputedStyle(navigationGroupWrapper).height;
      });

      expect(parseInt(navigationGroupWrapperHeight)).toBe(56);

      await navigtionGroupToggleBtn.click();

      await page.waitForTimeout(ANIMATION_MS_THRESHOLD);

      navigationGroupWrapperHeight = await page.evaluate(() => {
        const navigationGroupWrapper = document
          .querySelector("ic-side-navigation ic-navigation-group")
          .shadowRoot.querySelector(".grouped-links-wrapper");

        return window.getComputedStyle(navigationGroupWrapper).height;
      });

      expect(parseInt(navigationGroupWrapperHeight)).toBe(0);

      await navigtionGroupToggleBtn.click();

      await page.waitForTimeout(ANIMATION_MS_THRESHOLD);

      navigationGroupWrapperHeight = await page.evaluate(() => {
        const navigationGroupWrapper = document
          .querySelector("ic-side-navigation ic-navigation-group")
          .shadowRoot.querySelector(".grouped-links-wrapper");

        return window.getComputedStyle(navigationGroupWrapper).height;
      });

      expect(parseInt(navigationGroupWrapperHeight)).toBe(56);
    });

    it("aria-landmarks added to side navigation nav sections", async () => {
      const PRIMARY_LANDMARK_ID = "primary-navigation-landmark";
      const SECONDARY_LANDMARK_ID = "secondary-navigation-landmark";
      const page = await newE2EPage();
      await page.setContent(icSideNavigation);

      await page.waitForChanges();

      const primaryNavigationLandmarkValue = await (
        await page.find("ic-side-navigation >>> nav.primary-navigation")
      ).getAttribute("aria-labelledby");
      const primaryNavigationLandmarkText = await (
        await page.find(
          `ic-side-navigation >>> nav.primary-navigation #${PRIMARY_LANDMARK_ID}`
        )
      ).textContent;

      expect(primaryNavigationLandmarkValue).toBe(PRIMARY_LANDMARK_ID);
      expect(primaryNavigationLandmarkText).toBe("Primary");

      const secondaryNavigationLandmarkValue = await (
        await page.find("ic-side-navigation >>> nav.secondary-navigation")
      ).getAttribute("aria-labelledby");
      const secondaryNavigationLandmarkText = await (
        await page.find(
          `ic-side-navigation >>> nav.secondary-navigation #${SECONDARY_LANDMARK_ID}`
        )
      ).textContent;

      expect(secondaryNavigationLandmarkValue).toBe(SECONDARY_LANDMARK_ID);
      expect(secondaryNavigationLandmarkText).toBe("Secondary");
    });

    it("renders app status and version", async () => {
      const page = await newE2EPage();
      await page.setContent(icSideNavigation);

      const menuExpandBtn = await page.find(
        "ic-side-navigation >>> .side-navigation button.menu-expand-button"
      );

      await menuExpandBtn.click();

      await page.waitForTimeout(ANIMATION_MS_THRESHOLD);

      const applicationStatus = await (
        await page.find(
          "ic-side-navigation >>> .app-status-wrapper .app-status-text"
        )
      ).innerText;
      const applicationVersion = await (
        await page.find(
          "ic-side-navigation >>> .app-status-wrapper .app-version"
        )
      ).innerText;

      expect(applicationStatus).toBe("BETA");
      expect(applicationVersion).toBe("v0.0.0");
    });

    it("renders tooltip on collapsed side navigation", async () => {
      const page = await newE2EPage();
      await page.setContent(icSideNavigation);

      const navigationItems = await page.findAll(
        "ic-side-navigation ic-navigation-item"
      );

      await navigationItems[0].hover();

      await page.waitForTimeout(ANIMATION_MS_THRESHOLD);

      const toolTipDisplay = await page.evaluate(() => {
        const tooltip = document
          .querySelectorAll("ic-side-navigation ic-navigation-item")[0]
          .shadowRoot.querySelector("ic-tooltip")
          .shadowRoot.querySelector(".ic-tooltip-container");

        return window.getComputedStyle(tooltip).display;
      });

      expect(toolTipDisplay).toBe("block");
    });

    it("hides tooltip on expanded side navigation", async () => {
      const page = await newE2EPage();
      await page.setContent(icSideNavigationExpanded);

      const navigationItems = await page.findAll(
        "ic-side-navigation ic-navigation-item"
      );

      await navigationItems[0].hover();

      await page.waitForTimeout(ANIMATION_MS_THRESHOLD);

      const toolTipDisplay = await page.evaluate(() => {
        const tooltip = document
          .querySelectorAll("ic-side-navigation ic-navigation-item")[0]
          .shadowRoot.querySelector("ic-tooltip")
          .shadowRoot.querySelector(".ic-tooltip-container");

        return window.getComputedStyle(tooltip).display;
      });

      expect(toolTipDisplay).toBe("none");
    });

    it("hides menu expand if static prop is set to true", async () => {
      const page = await newE2EPage();
      await page.setContent(icSideNavigationStatic);

      const menuExpandBtn = await page.evaluate(() =>
        document
          .querySelector("ic-side-navigation")
          .shadowRoot.querySelector(".side-navigation .menu-expand-button")
      );

      expect(menuExpandBtn).toBeNull();
    });

    it("renders ic-side-navigation with theme colours", async () => {
      const page = await newE2EPage();
      await page.setContent(icSideNavigationTheme);

      const sideNavigation = await page.evaluate(() => {
        const sideNavMain = document
          .querySelector("ic-side-navigation")
          .shadowRoot.querySelector(".side-navigation-inner");

        const sideNavText = document
          .querySelector("ic-side-navigation")
          .shadowRoot.querySelector(".ic-typography-h3");

        return {
          bgColor: window.getComputedStyle(sideNavMain).backgroundColor,
          textColor: window.getComputedStyle(sideNavText).color,
        };
      });

      expect(sideNavigation.bgColor).toBe("rgb(131, 166, 195)");
      expect(sideNavigation.textColor).toBe("rgb(11, 12, 12)");
    });

    it("should render tooltip if very long label in expanded menu overflows", async () => {
      const page = await newE2EPage();
      await page.setContent(icSideNavigationExpanded);

      await page.waitForChanges();

      const sideNavInner = await page.find(
        "ic-side-navigation >>> .side-navigation-inner"
      );

      await page.waitForChanges();

      await sideNavInner.press("Tab");

      await page.waitForChanges();

      await sideNavInner.press("Tab");

      await page.waitForChanges();

      await sideNavInner.press("Tab");

      await page.waitForChanges();

      const shortLabelTooltipDisplay = await page.evaluate(() => {
        const LABEL = "Home";
        const navItems = Array.from(
          document.querySelectorAll("ic-side-navigation ic-navigation-item")
        );

        const shortLabelNavItem = navItems.filter((navItem) => {
          return (
            navItem.shadowRoot.querySelector(
              "ic-tooltip > a > .ic-typography-label"
            ).textContent === LABEL
          );
        })[0];

        return window.getComputedStyle(
          shortLabelNavItem.shadowRoot
            .querySelector("ic-tooltip")
            .shadowRoot.querySelector(".ic-tooltip-container")
        ).display;
      });

      expect(shortLabelTooltipDisplay).toBe("none");

      const longLabelTooltipDisplay = await page.evaluate(() => {
        const LABEL = "This is a very very very very very long label";
        const navItems = Array.from(
          document.querySelectorAll("ic-side-navigation ic-navigation-item")
        );

        const longLabelNavItem = navItems.filter((navItem) => {
          return (
            navItem.shadowRoot.querySelector(
              "ic-tooltip > a > .ic-typography-label"
            ).textContent === LABEL
          );
        })[0];

        return window.getComputedStyle(
          longLabelNavItem.shadowRoot
            .querySelector("ic-tooltip")
            .shadowRoot.querySelector(".ic-tooltip-container")
        ).display;
      });

      expect(longLabelTooltipDisplay).toBe("block");
    });

    it("renders visible labels when slotted menu items and expanded", async () => {
      const page = await newE2EPage();
      await page.setContent(icSideNavigationSlottedExpanded);

      await page.waitForChanges();

      const labelVisibility = await page.$eval("ic-side-navigation", (el) => {
        const navItem = el.querySelector("ic-navigation-item ic-typography");

        return window.getComputedStyle(navItem).visibility;
      });

      expect(labelVisibility).toBe("visible");
    });
  });
});
