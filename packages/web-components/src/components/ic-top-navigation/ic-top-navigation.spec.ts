import { newSpecPage } from "@stencil/core/testing";
import { DEVICE_SIZES } from "../../utils/helpers";
import { Button } from "../ic-button/ic-button";
import { NavigationItem } from "../ic-navigation-item/ic-navigation-item";
import { NavigationMenu } from "../ic-navigation-menu/ic-navigation-menu";
import { SearchBar } from "../ic-search-bar/ic-search-bar";
import { TopNavigation } from "./ic-top-navigation";
import { TextField } from "../ic-text-field/ic-text-field";
import { waitForTimeout } from "../../testspec.setup";

const waitForSearchFocus = async () => {
  //delay to account for 100ms delay in search bar focus
  await waitForTimeout(200);
};

describe("ic-top-navigation", () => {
  it("renders with app title", async () => {
    const page = await newSpecPage({
      components: [TopNavigation],
      html: `<ic-top-navigation app-title="ApplicationName"></ic-top-navigation>`,
    });
    expect(page.root).toMatchSnapshot("renders-with-app-title");
  });

  it("renders with app icon & title", async () => {
    const page = await newSpecPage({
      components: [TopNavigation],
      html: `<ic-top-navigation app-title="ApplicationName">
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
      </ic-top-navigation>`,
    });
    expect(page.root).toMatchSnapshot("renders-with-app-icon-and-title");
  });

  it("renders with custom title link url", async () => {
    const page = await newSpecPage({
      components: [TopNavigation],
      html: `<ic-top-navigation app-title="ApplicationName" href="https://www.google.co.uk/">
      </ic-top-navigation>`,
    });
    expect(page.root).toMatchSnapshot("renders-with-custom-title-link-url");
  });

  it("renders with Title, Version & Status", async () => {
    const page = await newSpecPage({
      components: [TopNavigation],
      html: `<ic-top-navigation
        app-title="ApplicationName"
        status="alpha"
        version="v0.0.7"
      ></ic-top-navigation>`,
    });
    expect(page.root).toMatchSnapshot("renders-with-title-version-status");
  });

  it("renders with search", async () => {
    const page = await newSpecPage({
      components: [TopNavigation],
      html: `<ic-top-navigation
        app-title="ApplicationName"
        status="alpha"
        version="v0.0.7"
      >
      <ic-search-bar slot="search" label="Search" placeholder="Search">
      </ic-top-navigation>`,
    });
    expect(page.root).toMatchSnapshot("renders-with-search");
  });

  it("renders with buttons", async () => {
    const page = await newSpecPage({
      components: [TopNavigation],
      html: `<ic-top-navigation
        app-title="ApplicationName"
        status="alpha"
        version="v0.0.7"
      >
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
      </ic-top-navigation>`,
    });
    expect(page.root).toMatchSnapshot("renders-with-buttons");
  });

  it("renders with navigation", async () => {
    const page = await newSpecPage({
      components: [TopNavigation, NavigationItem],
      html: `<ic-top-navigation
        app-title="ApplicationName"
        status="alpha"
        version="v0.0.7"
      >
        <ic-navigation-item label="Navigation 1" slot=navigation href="/"></ic-navigation-item>
      </ic-top-navigation>`,
    });
    expect(page.root).toMatchSnapshot("renders-with-navigation");
  });

  it("tests app title updates", async () => {
    const page = await newSpecPage({
      components: [TopNavigation],
      html: `<ic-top-navigation app-title="ApplicationName"></ic-top-navigation>`,
    });
    const appTitle = await page.root.shadowRoot.querySelector("h1");

    expect(appTitle.textContent).toEqual("ApplicationName");
    page.root.appTitle = "New Application Name";
    await page.waitForChanges();

    expect(appTitle.textContent).toEqual("New Application Name");
  });

  it("tests form in search slot", async () => {
    const page = await newSpecPage({
      components: [TopNavigation],
      html: `<ic-top-navigation app-title="ApplicationName">
      <form role="search" slot="search">
        <ic-search-bar slot="search" label="Search" placeholder="Search">
        </ic-search-bar>
      </form>
      </ic-top-navigation>`,
    });

    expect(page.root).toMatchSnapshot("form-in-search-slot");
  });

  it("renders with slotted app-title content", async () => {
    const page = await newSpecPage({
      components: [TopNavigation],
      html: `<ic-top-navigation
        status="alpha"
        version="v0.0.7"
      >
      <a slot="app-title" href="/">App Title</a>
      </ic-top-navigation>`,
    });
    expect(page.root).toMatchSnapshot("renders-with-slotted-app-title-content");
  });

  it("tests behaviour on small device", async () => {
    const page = await newSpecPage({
      components: [TopNavigation, Button, NavigationMenu, SearchBar, TextField],
      html: `<ic-top-navigation
      app-title="ApplicationName"
      status="alpha"
      version="v0.0.7"
    >
    <ic-search-bar label="Search" placeholder="Search" slot="search"></ic-search-bar>
    </ic-top-navigation>`,
    });

    await page.rootInstance.resizeObserverCallback(DEVICE_SIZES.S);
    await page.waitForChanges();

    let searchBtn = page.root.shadowRoot.querySelector(
      "#search-toggle-button"
    ) as HTMLElement;
    expect(searchBtn).not.toBeNull();

    searchBtn.click();
    await page.waitForChanges();
    await waitForSearchFocus();

    let menuButton = page.root.shadowRoot.querySelector(
      "#menu-button"
    ) as HTMLElement;
    expect(menuButton).not.toBeNull();
    expect(page.rootInstance.searchButtonClick).toBe(false);
    page.rootInstance.searchButtonMouseDownHandler();
    expect(page.rootInstance.searchButtonClick).toBe(true);

    searchBtn.click();
    await page.waitForChanges();
    await waitForSearchFocus();
    expect(page.rootInstance.searchButtonClick).toBe(false);

    menuButton.click();
    await page.waitForChanges();

    let menu = page.root.shadowRoot.querySelector("ic-navigation-menu");
    expect(menu).not.toBeNull();

    await page.rootInstance.resizeObserverCallback(DEVICE_SIZES.XL);
    await page.waitForChanges();

    menu = page.root.shadowRoot.querySelector("ic-navigation-menu");
    expect(menu).toBeNull();

    searchBtn = page.root.shadowRoot.querySelector(
      "#search-toggle-button"
    ) as HTMLElement;
    expect(searchBtn).toBeNull();
    menuButton = page.root.shadowRoot.querySelector(
      "#menu-button"
    ) as HTMLElement;
    expect(menuButton).toBeNull();
  });

  it("tests hiding of mobile search bar on resize", async () => {
    const page = await newSpecPage({
      components: [TopNavigation, Button, NavigationMenu, SearchBar, TextField],
      html: `<ic-top-navigation
      app-title="ApplicationName"
      status="alpha"
      version="v0.0.7"
    >
    <ic-search-bar label="Search" placeholder="Search" slot="search"></ic-search-bar>
    </ic-top-navigation>`,
    });

    await page.rootInstance.resizeObserverCallback(DEVICE_SIZES.S);
    await page.waitForChanges();
    const searchBtn = page.root.shadowRoot.querySelector(
      "#search-toggle-button"
    ) as HTMLElement;
    expect(searchBtn).not.toBeNull();

    searchBtn.click();
    await page.waitForChanges();
    await waitForSearchFocus();
    expect(page.rootInstance.mobileSearchBarVisible).toBe(true);

    await page.rootInstance.resizeObserverCallback(DEVICE_SIZES.XL);
    await page.waitForChanges();
    await waitForSearchFocus();
    expect(page.rootInstance.mobileSearchBarVisible).toBe(false);
  });

  it("should test nav bar menu visibility", async () => {
    const page = await newSpecPage({
      components: [TopNavigation, Button, NavigationMenu, SearchBar, TextField],
      html: `<ic-top-navigation
      app-title="ApplicationName"
      status="alpha"
      version="v0.0.7"
    >
    <ic-search-bar label="Search" placeholder="Search" slot="search"></ic-search-bar>
    </ic-top-navigation>`,
    });

    await page.rootInstance.resizeObserverCallback(DEVICE_SIZES.S);
    await page.waitForChanges();

    const menuButton = page.root.shadowRoot.querySelector(
      "#menu-button"
    ) as HTMLElement;
    expect(menuButton).not.toBeNull();
    expect(page.rootInstance.navMenuVisible).toBe(false);
    menuButton.click();
    await page.waitForChanges();
    expect(page.rootInstance.navMenuVisible).toBe(true);
    await page.rootInstance.navBarMenuCloseHandler();
    await page.waitForChanges();
    expect(page.rootInstance.navMenuVisible).toBe(false);
  });

  it("should test search value change", async () => {
    const page = await newSpecPage({
      components: [TopNavigation],
      html: `<ic-top-navigation
      app-title="ApplicationName"
      status="alpha"
      version="v0.0.7"
    >
    </ic-top-navigation>`,
    });

    //test search value change
    await page.rootInstance.searchValueChangeHandler({
      detail: { value: "hi!" },
    });
    expect(page.rootInstance.searchValue).toBe("hi!");

    //test search input blur
    page.rootInstance.mobileSearchBarVisible = true;
    page.rootInstance.searchButtonClick = false;
    await page.rootInstance.searchInputBlurHandler({
      detail: { value: "hi again!" },
    });
    expect(page.rootInstance.searchValue).toBe("hi again!");
  });

  it("should test theme change", async () => {
    const page = await newSpecPage({
      components: [TopNavigation],
      html: `<ic-top-navigation
      app-title="ApplicationName"
      status="alpha"
      version="v0.0.7"
    >
    </ic-top-navigation>`,
    });

    await page.rootInstance.themeChangeHandler({ detail: { mode: "dark" } });
    await page.waitForChanges();
    expect(page.rootInstance.foregroundColor).toBe("dark");

    await page.rootInstance.themeChangeHandler({ detail: { mode: "light" } });
    await page.waitForChanges();
    expect(page.rootInstance.foregroundColor).toBe("light");

    //call runResizeObserver
    await page.rootInstance.runResizeObserver();

    //test disconnected callback
    page.setContent("");
  });
});
