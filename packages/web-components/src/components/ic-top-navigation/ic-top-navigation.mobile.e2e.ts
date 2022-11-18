import { newE2EPage } from "@stencil/core/testing";

const pageWidth = 640;
const pageHeight = 480;
const searchBarVisibleHeight = 40;
const searchBarHiddenHeight = 0;

describe("ic-top-navigation on mobile", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-top-navigation app-title="ApplicationName" status="alpha"
    version="v0.0.7"></ic-top-navigation>`);

    await page.setViewport({
      width: pageWidth,
      height: pageHeight,
    });

    const menuBtn = await page.find(
      "ic-top-navigation >>> .menu-button-container ic-button"
    );
    expect(menuBtn).not.toBeNull();
  });

  it("should open and close menu", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-top-navigation app-title="ApplicationName" status="alpha"
    version="v0.0.7"></ic-top-navigation>`);

    await page.setViewport({
      width: pageWidth,
      height: pageHeight,
    });

    const menuBtn = await page.find(
      "ic-top-navigation >>> .menu-button-container ic-button"
    );
    expect(menuBtn).not.toBeNull();

    const icNavigationMenuOpened = await page.spyOnEvent(
      "icNavigationMenuOpened"
    );
    await menuBtn.click();
    await page.waitForChanges();
    let menu = await page.find("ic-top-navigation >>> ic-navigation-menu");
    expect(menu).not.toBeNull();
    expect(icNavigationMenuOpened).toHaveReceivedEvent();

    const activeElId = await page.$eval("ic-top-navigation", (el) => {
      const menu = el.shadowRoot.querySelector("ic-navigation-menu");
      return menu.shadowRoot.activeElement.id;
    });

    expect(activeElId).toBe("menu-close-button");

    const icNavigationMenuClosed = await page.spyOnEvent(
      "icNavigationMenuClosed"
    );

    await page.evaluate(() => {
      const navbar = document.querySelector("ic-top-navigation");
      const menu = navbar.shadowRoot.querySelector("ic-navigation-menu");
      const closeBtn = menu.shadowRoot.querySelector("ic-button");
      closeBtn.click();
    });

    await page.waitForChanges();
    menu = await page.find("ic-top-navigation >>> ic-navigation-menu");
    expect(menu).toBeNull();
    expect(icNavigationMenuClosed).toHaveReceivedEvent();
  });

  it("should close menu when nav item clicked", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-top-navigation app-title="ApplicationName" status="alpha"
    version="v0.0.7">
      <ic-navigation-item
        label="Navigation"
        slot="navigation"
      ></ic-navigation-item>
    </ic-top-navigation>`);

    await page.setViewport({
      width: pageWidth,
      height: pageHeight,
    });

    const menuBtn = await page.find(
      "ic-top-navigation >>> .menu-button-container ic-button"
    );
    expect(menuBtn).not.toBeNull();

    const icNavigationMenuOpened = await page.spyOnEvent(
      "icNavigationMenuOpened"
    );
    await menuBtn.click();
    await page.waitForChanges();

    let menu = await page.find("ic-top-navigation >>> ic-navigation-menu");
    expect(menu).not.toBeNull();
    expect(icNavigationMenuOpened).toHaveReceivedEvent();

    const icNavigationMenuClosed = await page.spyOnEvent(
      "icNavigationMenuClosed"
    );

    const navItem = await page.find("ic-navigation-item");

    await navItem.click();
    await page.waitForChanges();

    menu = await page.find("ic-top-navigation >>> ic-navigation-menu");
    expect(menu).toBeNull();
    expect(icNavigationMenuClosed).toHaveReceivedEvent();
  });

  it("should keep tab focus in menu - button as last el", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-top-navigation app-title="ApplicationName" status="alpha"
    version="v0.0.7">
      <ic-navigation-button
        label="button1"
        slot="buttons"
        onclick="alert('test')"
      >
        <svg
          slot="icon"
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
      </ic-navigation-button>
    </ic-top-navigation>`);

    await page.setViewport({
      width: pageWidth,
      height: pageHeight,
    });

    const menuBtn = await page.find(
      "ic-top-navigation >>> .menu-button-container ic-button"
    );
    expect(menuBtn).not.toBeNull();

    await menuBtn.click();
    await page.waitForChanges();
    const menu = await page.find("ic-top-navigation >>> ic-navigation-menu");
    expect(menu).not.toBeNull();

    let activeElId = await page.$eval("ic-top-navigation", (el) => {
      const menu = el.shadowRoot.querySelector("ic-navigation-menu");
      return menu.shadowRoot.activeElement.id;
    });

    expect(activeElId).toBe("menu-close-button");

    await page.keyboard.press("Tab");
    await page.waitForChanges();

    activeElId = await page.$eval("ic-navigation-button", (el) => {
      const button = el.shadowRoot.querySelector("ic-button");
      return button.shadowRoot.activeElement.getAttribute("aria-label");
    });

    expect(activeElId).toBe("button1");

    await page.keyboard.press("Tab");
    await page.waitForChanges();

    activeElId = await page.$eval("ic-top-navigation", (el) => {
      const menu = el.shadowRoot.querySelector("ic-navigation-menu");
      return menu.shadowRoot.activeElement.id;
    });

    expect(activeElId).toBe("menu-close-button");

    page.keyboard.down("Shift");
    await page.keyboard.press("Tab");
    await page.waitForChanges();

    activeElId = await page.$eval("ic-navigation-button", (el) => {
      const button = el.shadowRoot.querySelector("ic-button");
      return button.shadowRoot.activeElement.getAttribute("aria-label");
    });

    expect(activeElId).toBe("button1");
  });

  it("should keep tab focus in menu - nav item as last el", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-top-navigation app-title="ApplicationName" status="alpha"
    version="v0.0.7">
    <ic-navigation-item
      label="Navigation"
      href="/"
      slot="navigation"
    ></ic-navigation-item>  
    </ic-top-navigation>`);

    await page.setViewport({
      width: pageWidth,
      height: pageHeight,
    });

    const menuBtn = await page.find(
      "ic-top-navigation >>> .menu-button-container ic-button"
    );
    expect(menuBtn).not.toBeNull();

    await menuBtn.click();
    await page.waitForChanges();
    const menu = await page.find("ic-top-navigation >>> ic-navigation-menu");
    expect(menu).not.toBeNull();

    let activeElId = await page.$eval("ic-top-navigation", (el) => {
      const menu = el.shadowRoot.querySelector("ic-navigation-menu");
      return menu.shadowRoot.activeElement.id;
    });

    expect(activeElId).toBe("menu-close-button");

    await page.keyboard.press("Tab");
    await page.waitForChanges();

    activeElId = await page.$eval("ic-navigation-item", (el) => {
      return el.shadowRoot.activeElement.textContent;
    });

    expect(activeElId).toBe("Navigation");

    await page.keyboard.press("Tab");
    await page.waitForChanges();

    activeElId = await page.$eval("ic-top-navigation", (el) => {
      const menu = el.shadowRoot.querySelector("ic-navigation-menu");
      return menu.shadowRoot.activeElement.id;
    });

    expect(activeElId).toBe("menu-close-button");

    page.keyboard.down("Shift");
    await page.keyboard.press("Tab");
    await page.waitForChanges();

    activeElId = await page.$eval("ic-navigation-item", (el) => {
      return el.shadowRoot.activeElement.textContent;
    });

    expect(activeElId).toBe("Navigation");
  });

  it("should toggle search bar when clicking on button", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-top-navigation app-title="ApplicationName" status="alpha"
    version="v0.0.7">
    <ic-search-bar slot="search" label="Search" placeholder="Search" focusOnLoad="true"></ic-search-bar>
    </ic-top-navigation>`);

    await page.setViewport({
      width: pageWidth,
      height: pageHeight,
    });

    const searchBtn = await page.find(
      "ic-top-navigation >>> .search-actions-container ic-button"
    );
    expect(searchBtn).not.toBeNull();

    await searchBtn.click();
    await page.waitForChanges();

    let searchBarHeight = await page.$eval("ic-search-bar", (el) => {
      return el.clientHeight;
    });

    expect(searchBarHeight).toBe(searchBarVisibleHeight);

    await searchBtn.click();
    await page.waitForChanges();

    searchBarHeight = await page.$eval("ic-search-bar", (el) => {
      return el.clientHeight;
    });

    expect(searchBarHeight).toBe(searchBarHiddenHeight);
  });

  it("should hide search bar when loses focus", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-top-navigation app-title="ApplicationName" status="alpha"
      version="v0.0.7">
        <ic-search-bar slot="search" label="Search" placeholder="Search" focusOnLoad="true"></ic-search-bar>
      </ic-top-navigation>
      <span id='othercontent'>some other content</span>`);

    await page.setViewport({
      width: pageWidth,
      height: pageHeight,
    });

    const searchBtn = await page.find(
      "ic-top-navigation >>> .search-actions-container ic-button"
    );
    expect(searchBtn).not.toBeNull();

    await searchBtn.click();
    await page.waitForChanges();

    let searchBarHeight = await page.$eval("ic-search-bar", (el) => {
      return el.clientHeight;
    });

    expect(searchBarHeight).toBe(searchBarVisibleHeight);

    // Test hides when another page element clicked
    const spanEl = await page.find("#othercontent");
    await spanEl.click();
    await page.waitForChanges();

    searchBarHeight = await page.$eval("ic-search-bar", (el) => {
      return el.clientHeight;
    });

    expect(searchBarHeight).toBe(searchBarHiddenHeight);
  });
});
