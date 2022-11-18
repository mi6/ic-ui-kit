import { newE2EPage } from "@stencil/core/testing";

describe("ic-page-header component", () => {
  it("shouldn't render tooltips on the navigation items in the page header", async () => {
    const page = await newE2EPage();

    await page.setContent(
      `<ic-page-header
        heading="Coffee recipes"
        sub-heading="This is a page header component with additional functionality and this is the text."
      >
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
        <ic-navigation-item
          slot="tabs"
          label="All recipes"
          href="?path=/story/web-components-page-header--with-tabs"
          selected
        ></ic-navigation-item>
        <ic-navigation-item
          slot="tabs"
          label="Favourites"
          href="?path=/story/web-components-page-header--with-tabs"
        ></ic-navigation-item>
      </ic-page-header>`
    );

    await page.waitForChanges();

    await page.keyboard.press("Tab");

    await page.waitForChanges();

    const tooltipDisplay = await page.evaluate(() => {
      const tooltip = document
        .querySelectorAll("ic-navigation-item")[0]
        .shadowRoot.querySelector("ic-tooltip")
        .shadowRoot.querySelector(".ic-tooltip-container");

      return window.getComputedStyle(tooltip).display;
    });

    expect(tooltipDisplay).toBe("none");
  });

  it("should stay at the top of the page if the sticky variant is used", async () => {
    const page = await newE2EPage();

    await page.setContent(
      `<ic-top-navigation app-title="ApplicationName">
        <svg
          slot="app-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
          />
        </svg>
      </ic-top-navigation>
      <ic-page-header
        sticky
        heading="Page header"
        sub-heading="This is a simple page header component and this is the text."
      >
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      </ic-page-header>
      <ic-section-container style="height:800px">
        This is an example of how the sticky variant of the page header would
        work with some content and the footer.
      </ic-section-container>
      <ic-footer
        description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
      >
        <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
        <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
        <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
        <ic-footer-link slot="link" href="/">Components</ic-footer-link>
        <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
        <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
        <div
          slot="logo"
          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
          background-color:var(--ic-personality-primary);color:var(--ic-personality-text);"
        >
          Logo
        </div>
      </ic-footer>`
    );

    await page.waitForChanges();

    const pageHeaderPosition = await page.evaluate(() => {
      const pageHeader = document.querySelector("ic-page-header");

      return window.getComputedStyle(pageHeader).position;
    });

    expect(pageHeaderPosition).toBe("sticky");

    const pageHeaderTopValue = await page.evaluate(() => {
      const pageHeader = document.querySelector("ic-page-header");
      window.scrollTo({ top: 700 });

      return pageHeader.offsetTop;
    });

    expect(pageHeaderTopValue).toEqual(700);
  });

  it("should not stay at the top of the page on extra small to medium device sizes if the sticky-desktop-only variant is used", async () => {
    const page = await newE2EPage();

    await page.setViewport({
      width: 375,
      height: 667,
      isMobile: true,
      hasTouch: true,
    });

    await page.waitForChanges();

    await page.setContent(
      `<ic-top-navigation app-title="ApplicationName">
        <svg
          slot="app-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
          />
        </svg>
      </ic-top-navigation>
      <ic-page-header
        sticky-desktop-only
        heading="Page header"
        sub-heading="This is a simple page header component and this is the text. This page header is only sticky for viewport widths of 992px and above."
      >
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      </ic-page-header>
      <ic-section-container style="height:1000px">
        This is an example of how the sticky-desktop-only variant of the page
        header would work with some content and the footer.
      </ic-section-container>
      <ic-footer
        description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
      >
        <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
        <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
        <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
        <ic-footer-link slot="link" href="/">Components</ic-footer-link>
        <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
        <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
        <div
          slot="logo"
          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
          background-color:var(--ic-personality-primary);color:var(--ic-personality-text);"
        >
          Logo
        </div>
      </ic-footer>`
    );

    await page.waitForChanges();

    let pageHeaderPosition = await page.evaluate(() => {
      const pageHeader = document.querySelector("ic-page-header");
      return window.getComputedStyle(pageHeader).position;
    });

    expect(pageHeaderPosition).toBe("static");

    const pageHeaderTopValueOnMobile = await page.evaluate(() => {
      const pageHeader = document.querySelector("ic-page-header");
      window.scrollBy({ top: 700 });

      return pageHeader.offsetTop;
    });

    await page.waitForChanges();

    const topNavHeightOnMobile = await page.evaluate(() => {
      const topNav = document.querySelector("ic-top-navigation");

      return topNav.offsetHeight;
    });

    expect(pageHeaderTopValueOnMobile).toEqual(0 + topNavHeightOnMobile);

    await page.evaluate(() => {
      window.scrollBy({ top: -700 });
    });

    await page.waitForChanges();

    await page.setViewport({
      width: 1920,
      height: 800,
    });

    await page.waitForChanges();

    pageHeaderPosition = await page.evaluate(() => {
      const pageHeader = document.querySelector("ic-page-header");
      return window.getComputedStyle(pageHeader).position;
    });

    await page.waitForChanges();

    expect(pageHeaderPosition).toBe("sticky");

    const pageHeaderTopValueOnLargeDesktops = await page.evaluate(() => {
      const pageHeader = document.querySelector("ic-page-header");
      window.scrollBy({ top: 700 });

      return pageHeader.offsetTop;
    });

    expect(pageHeaderTopValueOnLargeDesktops).toEqual(700);
  });
});
