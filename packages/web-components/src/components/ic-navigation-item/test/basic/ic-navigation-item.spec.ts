import { newSpecPage } from "@stencil/core/testing";
import { DEVICE_SIZES } from "../../../../utils/helpers";
import { NavigationItem } from "../../ic-navigation-item";
import { TopNavigation } from "../../../ic-top-navigation/ic-top-navigation";
import { PageHeader } from "../../../ic-page-header/ic-page-header";
import * as helpers from "../../../../utils/helpers";

describe("ic-navigation-item", () => {
  it("should render with label", async () => {
    const page = await newSpecPage({
      components: [NavigationItem],
      html: `<ic-navigation-item label="Item label"></ic-navigation-item>`,
    });
    expect(page.root).toMatchSnapshot("renders-with-label");
  });

  it("should render with aria-label", async () => {
    const page = await newSpecPage({
      components: [NavigationItem],
      html: `<ic-navigation-item href="#link" label="Item label" aria-label="navigation item description"></ic-navigation-item>`,
    });
    expect(page.root).toMatchSnapshot("renders-with-aria-label");

    page.root?.setAttribute("aria-label", "New item description");
    await page.waitForChanges();

    page.rootInstance.hostMutationCallback([{ attributeName: "aria-label" }]);
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot("renders-with-new-aria-label");
  });

  it("should render with open in new window icon", async () => {
    const page = await newSpecPage({
      components: [NavigationItem],
      html: `<ic-navigation-item href="#link" label="Item label" target="_blank"></ic-navigation-item>`,
    });
    expect(page.root).toMatchSnapshot("renders-with-open-in-new-window-icon");
  });

  it("should test setFocus when using a slotted link", async () => {
    const page = await newSpecPage({
      components: [NavigationItem],
      html: `<ic-navigation-item><a href="#">Item label</a></ic-navigation-item>`,
    });

    await page.rootInstance.setFocus();
    expect(page.root).toMatchSnapshot("renders-with-slotted-link");
  });

  it("should render with an unnamed slot if neither a label or the navigation-item slot is used", async () => {
    const page = await newSpecPage({
      components: [NavigationItem],
      html: `<ic-navigation-item><div></div></ic-navigation-item>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-unnamed-slot");

    document.querySelector("div")?.setAttribute("textContent", "Test label");
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot(
      "renders-with-unnamed-slot-and-tooltip-label"
    );
  });

  it("should test brand change", async () => {
    const page = await newSpecPage({
      components: [NavigationItem],
      html: `<ic-navigation-item label="Item label"></ic-navigation-item>`,
    });

    await page.rootInstance.brandChangeHandler({ detail: { mode: "dark" } });
    await page.waitForChanges();
    expect(page.rootInstance.focusStyle).toBe("dark");

    await page.rootInstance.brandChangeHandler({ detail: { mode: "light" } });
    await page.waitForChanges();
    expect(page.rootInstance.focusStyle).toBe("light");
  });

  it("should test top nav resize handler", async () => {
    const page = await newSpecPage({
      components: [NavigationItem],
      html: `<ic-navigation-item label="Item label"></ic-navigation-item>`,
    });

    await page.rootInstance.topNavResizedHandler({
      detail: { size: DEVICE_SIZES.S },
    });
    await page.waitForChanges();
    expect(page.rootInstance.deviceSize).toBe(DEVICE_SIZES.S);
    expect(page.rootInstance.inTopNavSideMenu).toBe(true);
  });

  it("should test side nav expand handler", async () => {
    const page = await newSpecPage({
      components: [NavigationItem],
      html: `<ic-navigation-item label="Item label"></ic-navigation-item>`,
    });

    await page.rootInstance.setFocus();
    await page.rootInstance.sideNavExpandHandler({
      detail: { sideNavExpanded: true, sideNavMobile: true },
    });
    await page.waitForChanges();
    expect(page.rootInstance.sideNavExpanded).toBe(true);
    expect(page.rootInstance.isSideNavMobile).toBe(true);
  });

  it("should test private methods", async () => {
    const page = await newSpecPage({
      components: [NavigationItem],
      html: `<ic-navigation-item label="Item label"></ic-navigation-item>`,
    });

    page.root?.click();
  });

  it("should emit navItemClicked on click", async () => {
    const page = await newSpecPage({
      components: [NavigationItem],
      html: `<ic-navigation-item label="Item label"></ic-navigation-item>`,
    });

    const eventSpy = jest.fn();
    page.win.addEventListener("navItemClicked", eventSpy);

    page.root?.click();
    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
  });

  it("should emit navItemClicked on Enter key press", async () => {
    const page = await newSpecPage({
      components: [NavigationItem],
      html: `<ic-navigation-item label="Item label"></ic-navigation-item>`,
    });

    const eventSpy = jest.fn();
    page.win.addEventListener("navItemClicked", eventSpy);

    const event = new KeyboardEvent("keydown", {
      key: "Enter",
      bubbles: true,
      cancelable: true,
    });
    page.root?.dispatchEvent(event);
    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
  });

  it("should test inside side navigation", async () => {
    const page = await newSpecPage({
      components: [TopNavigation, NavigationItem],
      html: `<ic-side-navigation version="v0.0.0" app-title="ACME" status="BETA" collapsed-icon-labels="true">
      <ic-navigation-item slot="primary-navigation" href="/" label="Home">
      </ic-navigation-item>
    </ic-side-navigation>`,
    });
    await page.waitForChanges();
    await new Promise((r) => setTimeout(r, 2000));

    // test disconnected callback
    page.setContent("");
  });

  it("should render inside page header", async () => {
    const page = await newSpecPage({
      components: [PageHeader, NavigationItem],
      html: `
      <ic-page-header heading="Coffee recipes" subheading="This is a simple page header component and this is the text.">
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
        <ic-navigation-item
          slot="tabs"
          label="All recipes"
          href="/all-recipes"
          selected
        ></ic-navigation-item>
        <ic-navigation-item
          slot="tabs"
          label="Favourites"
          href="/favourites"
        ></ic-navigation-item>
      </ic-page-header>`,
    });

    await page.waitForChanges();
    await new Promise((r) => setTimeout(r, 2000));

    // test disconnected callback
    page.setContent("");
  });

  // NOTE: This must go last as mocks getCurrentDeviceSize function, which will apply to all subsequent tests
  it("should test inside top navigation", async () => {
    const myfunc = jest.fn().mockReturnValue(DEVICE_SIZES.S);
    Object.defineProperty(helpers, "getCurrentDeviceSize", {
      value: myfunc,
    });

    const page = await newSpecPage({
      components: [TopNavigation, NavigationItem],
      html: `<ic-top-navigation
        app-title="ApplicationName"
        status="alpha"
        version="v0.0.7"
      >
        <ic-navigation-item slot="navigation" label="Navigation 1" href="/"></ic-navigation-item>
      </ic-top-navigation>`,
    });
    await page.waitForChanges();
    await new Promise((r) => setTimeout(r, 2000));

    // test disconnected callback
    page.setContent("");
  });
});
