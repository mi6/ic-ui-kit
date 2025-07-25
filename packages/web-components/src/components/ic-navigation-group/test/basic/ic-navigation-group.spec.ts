import { newSpecPage } from "@stencil/core/testing";
import { waitForNavGroupLoad } from "../../../../testspec.setup";
import { NavigationItem } from "../../../ic-navigation-item/ic-navigation-item";
import { SideNavigation } from "../../../ic-side-navigation/ic-side-navigation";
import { TopNavigation } from "../../../ic-top-navigation/ic-top-navigation";
import { DEVICE_SIZES } from "../../../../utils/helpers";
import { NavigationGroup } from "./../../ic-navigation-group";
import * as helpers from "../../../../utils/helpers";
import { waitForTimeout } from "../../../../testspec.setup";

const ev = {
  relatedTarget: {
    nodeName: "IC-NAVIGATION-GROUP",
  },
  target: {
    nodeName: "IC-NAVIGATION-GROUP",
  },
};

const timeOut = 1000;
const ariaExpanded = "aria-expanded";

describe("ic-navigation-group", () => {
  it("should render with label", async () => {
    const page = await newSpecPage({
      components: [NavigationGroup],
      html: `<ic-navigation-group label="Group label"></ic-navigation-group>`,
    });
    await waitForNavGroupLoad();
    expect(page.root).toMatchSnapshot("renders-with-label");
  });

  it("should render as expandable", async () => {
    const page = await newSpecPage({
      components: [NavigationGroup],
      html: `<ic-navigation-group label="Group label" expandable="true"></ic-navigation-group>`,
    });
    await waitForNavGroupLoad();
    expect(page.root).toMatchSnapshot("renders-expandable");
  });

  it("should render as expandable and collapsed", async () => {
    const page = await newSpecPage({
      components: [NavigationGroup],
      html: `<ic-navigation-group label="Group label" expandable="true" expanded="false"></ic-navigation-group>`,
    });
    await waitForNavGroupLoad();
    expect(page.root).toMatchSnapshot("renders-expanded-false");
  });

  it("should render correctly when in a top navigation when not expandable", async () => {
    const page = await newSpecPage({
      components: [NavigationGroup],
      html: `<ic-navigation-group label="Group label"></ic-navigation-group>`,
    });
    await waitForNavGroupLoad();
    page.rootInstance.navigationType = "top";
    await page.waitForChanges();
    expect(page.root).toMatchSnapshot("renders-in-desktop-top-nav");

    page.rootInstance.inTopNavSideMenu = true;
    await page.waitForChanges();
    expect(page.root).toMatchSnapshot("renders-in-mobile-top-nav");
  });

  it("should test handleMouseEnter", async () => {
    const page = await newSpecPage({
      components: [NavigationGroup],
      html: `<ic-navigation-group label="Group label"></ic-navigation-group>`,
    });
    await waitForNavGroupLoad();
    page.rootInstance.mouseGate = true;
    expect(page.rootInstance.dropdownOpen).toBe(false);
    await page.rootInstance.handleMouseEnter(ev);
    await waitForTimeout(timeOut);
    await page.waitForChanges();
    expect(page.rootInstance.dropdownOpen).toBe(true);
    await page.rootInstance.hideDropdown();
    await page.waitForChanges();
    expect(page.rootInstance.dropdownOpen).toBe(false);

    ev.relatedTarget.nodeName = "ANOTHER-NAME";
    page.rootInstance.mouseGate = false;
    await page.rootInstance.handleMouseEnter(ev);
    await waitForTimeout(timeOut);
    await page.waitForChanges();
    expect(page.rootInstance.mouseGate).toBe(true);

    jest.spyOn(document, "addEventListener");

    await page.rootInstance.handleMouseEnter(ev);
    await waitForTimeout(timeOut);
    await page.waitForChanges();

    expect(document.addEventListener).toHaveBeenCalledTimes(1);

    await page.rootInstance.showDropdown();
    await page.waitForChanges();

    await page.rootInstance.childBlurHandler();
    await page.waitForChanges();
    expect(page.rootInstance.dropdownOpen).toBe(false);

    await page.rootInstance.showDropdown();
    await page.waitForChanges();
    expect(page.rootInstance.dropdownOpen).toBe(true);

    await page.rootInstance.navItemClickHandler();
    await page.waitForChanges();
    expect(page.rootInstance.dropdownOpen).toBe(false);
    ev.relatedTarget.nodeName = "IC-NAVIGATION-GROUP";
  });

  it("should test toggleExpanded", async () => {
    const page = await newSpecPage({
      components: [NavigationGroup, NavigationItem],
      html: `<ic-navigation-group label="Group label">
        <ic-navigation-item href="/" label="Home"></ic-navigation-item>
      </ic-navigation-group>`,
    });
    await waitForNavGroupLoad();

    expect(page.rootInstance.expanded).toBe(true);
    await page.rootInstance.toggleExpanded();
    await page.waitForChanges();
    expect(page.rootInstance.expanded).toBe(false);
    await page.rootInstance.toggleExpanded();
    await page.waitForChanges();
    expect(page.rootInstance.expanded).toBe(true);
  });

  it("should test click handler", async () => {
    const page = await newSpecPage({
      components: [NavigationGroup, NavigationItem],
      html: `<ic-navigation-group label="Group label">
        <ic-navigation-item href="/" label="Home"></ic-navigation-item>
      </ic-navigation-group>`,
    });
    await waitForNavGroupLoad();

    expect(page.rootInstance.expanded).toBe(true);
    await page.rootInstance.handleClick();
    await page.waitForChanges();
    expect(page.rootInstance.expanded).toBe(false);

    expect(page.rootInstance.dropdownOpen).toBe(false);
    page.rootInstance.navigationType = "top";
    await page.rootInstance.handleClick({ detail: { something: "set" } });
    await page.waitForChanges();
    expect(page.rootInstance.dropdownOpen).toBe(true);
  });

  it("should test top nav key down handler", async () => {
    const page = await newSpecPage({
      components: [NavigationGroup, NavigationItem],
      html: `<ic-navigation-group label="Group label">
        <ic-navigation-item href="/" label="Home"></ic-navigation-item>
      </ic-navigation-group>`,
    });
    await waitForNavGroupLoad();

    expect(page.rootInstance.dropdownOpen).toBe(false);
    await page.rootInstance.showDropdown();
    await page.waitForChanges();
    expect(page.rootInstance.dropdownOpen).toBe(true);

    page.rootInstance.navigationType = "top";
    await page.waitForChanges();
    await page.rootInstance.handleKeydown({ key: "Escape" });
    await page.waitForChanges();
    expect(page.rootInstance.dropdownOpen).toBe(false);
    await page.rootInstance.handleKeydown({ key: "Enter" });
    await page.waitForChanges();
    expect(page.rootInstance.dropdownOpen).toBe(true);
  });

  it("should test handleBlur function", async () => {
    const page = await newSpecPage({
      components: [NavigationGroup, NavigationItem],
      html: `<ic-navigation-group label="Group label">
      <ic-navigation-item href="/" label="Home"></ic-navigation-item>
      <ic-navigation-item href="/" label="andAway"></ic-navigation-item>
      <ic-navigation-item href="/" label="closerEachDay"></ic-navigation-item>
      </ic-navigation-group>`,
    });

    await waitForNavGroupLoad();
    await page.rootInstance.showDropdown();
    await page.waitForChanges();
    expect(page.rootInstance.dropdownOpen).toBe(true);
    await page.rootInstance.handleBlur(ev);
    await page.waitForChanges();
    expect(page.rootInstance.dropdownOpen).toBe(false);
  });

  it("should test handleMouseLeave function", async () => {
    const page = await newSpecPage({
      components: [NavigationGroup, NavigationItem],
      html: `<ic-navigation-group label="Group label">
        <ic-navigation-item href="/" label="Home"></ic-navigation-item>
        <ic-navigation-item href="/" label="andAway"></ic-navigation-item>
      </ic-navigation-group>`,
    });
    await waitForNavGroupLoad();
    ev.target.nodeName = "IC-NOT-NAV-GROUP";

    await page.rootInstance.showDropdown();
    await page.waitForChanges();
    expect(page.rootInstance.dropdownOpen).toBe(true);
    await page.rootInstance.handleMouseLeave(ev);
    await waitForTimeout(600);
    await page.waitForChanges();
    expect(page.rootInstance.dropdownOpen).toBe(false);
    // check other branch of 'if'
    ev.relatedTarget.nodeName = "IC-NOT-NAV-GROUP";
    await page.rootInstance.showDropdown();
    await page.waitForChanges();
    expect(page.rootInstance.dropdownOpen).toBe(true);
    await page.rootInstance.handleMouseLeave(ev);
    await waitForTimeout(timeOut);
    await page.waitForChanges();
    expect(page.rootInstance.dropdownOpen).toBe(false);
    // check if null value called
    await page.rootInstance.handleMouseLeave(ev);
    await waitForTimeout(timeOut);
    await page.waitForChanges();
    expect(page.rootInstance.dropdownOpen).toBe(false);
    ev.relatedTarget.nodeName = "IC-NAVIGATION-GROUP";
    ev.target.nodeName = "IC-NAVIGATION-GROUP";
  });

  it("should test key down handler", async () => {
    const page = await newSpecPage({
      components: [NavigationGroup, NavigationItem],
      html: `<ic-navigation-group label="Group label">
        <ic-navigation-item href="/" label="Home"></ic-navigation-item>
      </ic-navigation-group>`,
    });
    await waitForNavGroupLoad();

    expect(page.rootInstance.expanded).toBe(true);
    await page.rootInstance.handleKeydown({ key: "Enter" });
    await page.waitForChanges();
    expect(page.rootInstance.expanded).toBe(false);

    page.rootInstance.navigationType = "side";
    await page.rootInstance.handleKeydown({
      key: " ",
      preventDefault: (): null => null,
    });
    await page.waitForChanges();
    await waitForTimeout(600);
    expect(page.rootInstance.expanded).toBe(true);

    expect(page.rootInstance.dropdownOpen).toBe(false);
    page.rootInstance.navigationType = "top";
    await page.waitForChanges();
    await page.rootInstance.handleKeydown({ key: "Enter" });
    await page.waitForChanges();
    expect(page.rootInstance.dropdownOpen).toBe(true);
  });

  it("should test brand change", async () => {
    const page = await newSpecPage({
      components: [NavigationGroup],
      html: `<ic-navigation-group label="Group label"></ic-navigation-group>`,
    });
    await waitForNavGroupLoad();
    await page.rootInstance.brandChangeHandler({ detail: { mode: "dark" } });
    await page.waitForChanges();
    expect(page.rootInstance.focusStyle).toBe("dark");

    await page.rootInstance.brandChangeHandler({ detail: { mode: "light" } });
    await page.waitForChanges();
    expect(page.rootInstance.focusStyle).toBe("light");
  });

  it("should test inside side navigation", async () => {
    const page = await newSpecPage({
      components: [SideNavigation, NavigationGroup, NavigationItem],
      html: `<ic-side-navigation version="v0.0.0" app-title="ACME" status="BETA" collapsed-icon-labels="true">
      <ic-navigation-group
            slot="primary-navigation"
            label="Second navigation group"
            expandable="true"
          >
        <ic-navigation-item href="/" label="Home"></ic-navigation-item>
      </ic-navigation-group>
    </ic-side-navigation>`,
    });
    await waitForNavGroupLoad();

    // test disconnected callback
    page.setContent("");
  });

  it("should test top nav resize handler", async () => {
    const page = await newSpecPage({
      components: [NavigationGroup],
      html: `<ic-navigation-group label="Group label"></ic-navigation-group>`,
    });
    await waitForNavGroupLoad();

    await page.rootInstance.topNavResizedHandler({
      detail: { size: DEVICE_SIZES.S },
    });
    await page.waitForChanges();
    expect(page.rootInstance.deviceSize).toBe(DEVICE_SIZES.S);
    expect(page.rootInstance.inTopNavSideMenu).toBe(true);
  });

  it("should test side nav expand handler", async () => {
    const page = await newSpecPage({
      components: [NavigationGroup],
      html: `<ic-navigation-group label="Group label"></ic-navigation-group>`,
    });
    const eventSpy = jest.fn();
    page.win.addEventListener("waitForNavGroupLoad", eventSpy);
    await page.waitForChanges();
    await waitForNavGroupLoad();
    const style = page.root?.shadowRoot
      ?.querySelector(".grouped-links-wrapper")
      ?.getAttribute("style");
    expect(style).toBe("--navigation-child-items-height: 0px;");
  });

  it("should test setting nav item tab index", async () => {
    const page = await newSpecPage({
      components: [NavigationGroup, NavigationItem],
      html: `<ic-navigation-group
            label="Navigation group"
          >
        <ic-navigation-item href="/" label="Home"></ic-navigation-item>
      </ic-navigation-group>`,
    });
    await waitForNavGroupLoad();

    let navItemLink = page.root
      ?.querySelector("ic-navigation-item")
      ?.shadowRoot?.querySelector("a");
    expect(navItemLink?.tabIndex).toBe(-1);

    page.rootInstance.expanded = false;
    await page.rootInstance.toggleExpanded();
    await page.waitForChanges();
    navItemLink = page.root
      ?.querySelector("ic-navigation-item")
      ?.shadowRoot?.querySelector("a");

    expect(navItemLink?.tabIndex).toBe(0);
  });

  it("should call other methods ", async () => {
    const page = await newSpecPage({
      components: [NavigationGroup],
      html: `<ic-navigation-group label="Group label"></ic-navigation-group>`,
    });
    await waitForNavGroupLoad();
    await page.rootInstance.setFocus();
  });

  it("should not be displayed when not expandable in a collapsed side navigation ", async () => {
    const page = await newSpecPage({
      components: [NavigationGroup],
      html: `<ic-navigation-group label="Group label"></ic-navigation-group>`,
    });
    await waitForNavGroupLoad();
    expect(
      page.root?.shadowRoot?.querySelector(".navigation-group")
    ).not.toBeNull();

    page.rootInstance.navigationType = "side";
    await page.waitForChanges();
    expect(
      page.root?.shadowRoot?.querySelector(".navigation-group")
    ).toBeNull();
  });

  it("should set aria-expanded correctly inside a side navigation", async () => {
    const page = await newSpecPage({
      components: [NavigationGroup, NavigationItem],
      html: `<ic-navigation-group label="Group label" expandable="true">
        <ic-navigation-item href="/" label="Home"></ic-navigation-item>
      </ic-navigation-group>`,
    });
    await waitForNavGroupLoad();

    page.rootInstance.navigationType = "side";
    await page.waitForChanges();

    const navGroup = page.root?.shadowRoot?.querySelector("button");
    expect(navGroup?.getAttribute(ariaExpanded)).toBe("true");

    page.rootInstance.expanded = false;
    await page.waitForChanges();
    expect(navGroup?.getAttribute(ariaExpanded)).toBe("false");
  });

  it("should set aria-expanded correctly inside a top navigation", async () => {
    const page = await newSpecPage({
      components: [NavigationGroup, NavigationItem],
      html: `<ic-navigation-group label="Group label">
        <ic-navigation-item href="/" label="Home"></ic-navigation-item>
      </ic-navigation-group>`,
    });
    await waitForNavGroupLoad();

    page.rootInstance.navigationType = "top";
    await page.waitForChanges();

    const navGroup = page.root?.shadowRoot?.querySelector("button");
    expect(navGroup?.getAttribute(ariaExpanded)).toBe("false");

    page.rootInstance.dropdownOpen = true;
    await page.waitForChanges();
    expect(navGroup?.getAttribute(ariaExpanded)).toBe("true");

    page.rootInstance.inTopNavSideMenu = true;
    page.root?.setAttribute("expandable", "true");
    await page.waitForChanges();
    expect(navGroup?.getAttribute(ariaExpanded)).toBe("true");

    page.rootInstance.dropdownOpen = false;
    await page.waitForChanges();
    expect(navGroup?.getAttribute(ariaExpanded)).toBe("false");
  });

  // NOTE: This must go last as mocks getCurrentDeviceSize function, which will apply to all subsequent tests
  it("should test inside top navigation", async () => {
    const myfunc = jest.fn().mockReturnValue(DEVICE_SIZES.S);
    Object.defineProperty(helpers, "getCurrentDeviceSize", {
      value: myfunc,
    });

    const page = await newSpecPage({
      components: [TopNavigation, NavigationGroup, NavigationItem],
      html: `<ic-top-navigation
        app-title="ApplicationName"
      >
        <ic-navigation-group
          slot="navigation"
          label="Navigation group"
          expandable="true"
        >
          <ic-navigation-item label="Navigation 1" href="/"></ic-navigation-item>
        </ic-navigation-group>
      </ic-top-navigation>`,
    });
    await waitForNavGroupLoad();

    // test disconnected callback
    page.setContent("");
  });
});
