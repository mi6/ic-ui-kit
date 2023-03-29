import { newSpecPage } from "@stencil/core/testing";
import { DEVICE_SIZES } from "../../utils/helpers";
import { Button } from "../ic-button/ic-button";
import { NavigationGroup } from "../ic-navigation-group/ic-navigation-group";
import { NavigationItem } from "../ic-navigation-item/ic-navigation-item";
import { SideNavigation } from "./ic-side-navigation";

describe("ic-side-navigation", () => {
  it("renders with app-title", async () => {
    const page = await newSpecPage({
      components: [SideNavigation],
      html: `<ic-side-navigation app-title="ACME"></ic-side-navigation>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-app-title");
  });

  it("renders with app title, version and status", async () => {
    const page = await newSpecPage({
      components: [SideNavigation],
      html: `<ic-side-navigation version="v0.0.0" status="BETA" app-title="ACME" status="BETA"></ic-side-navigation>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-app-title-version-status");
  });

  it("renders with primary navigation items", async () => {
    const page = await newSpecPage({
      components: [SideNavigation, NavigationItem],
      html: `
        <ic-side-navigation version="v0.0.0" app-title="ACME" status="BETA">
          <ic-navigation-item slot="primary-navigation" href="/" label="Home">
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
        </ic-side-navigation>
      `,
    });

    expect(page.root).toMatchSnapshot("renders-with-primary-navigation-items");
  });

  it("renders with secondary navigation items", async () => {
    const page = await newSpecPage({
      components: [SideNavigation, NavigationItem],
      html: `
        <ic-side-navigation version="v0.0.0" status="BETA" app-title="ACME">
        <ic-navigation-item slot="secondary-navigation" href="/" label="a11y">
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9H15V22H13V16H11V22H9V9H3V7H21V9Z"
              fill="currentColor"
            />
          </svg>
        </ic-navigation-item>
        </ic-side-navigation>
      `,
    });

    expect(page.root).toMatchSnapshot(
      "renders-with-secondary-navigation-items"
    );
  });

  it("renders with slotted navigation item", async () => {
    const page = await newSpecPage({
      components: [SideNavigation, NavigationItem],
      html: `<ic-side-navigation app-title="ACME">
        <ic-navigation-item slot="primary-navigation">
            <a
              slot="navigation-item"
              class="active"
              href="/child-item-2"
              aria-label="Daily Tippers"
            >
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              Daily Tippers
            </a>
          </ic-navigation-item>
      </ic-side-navigation>`,
    });

    expect(page.root).toMatchSnapshot("slotted-navigation-item");
  });

  it("renders with slotted navigation item - collapsed icon labels true", async () => {
    const page = await newSpecPage({
      components: [SideNavigation, NavigationItem],
      html: `<ic-side-navigation app-title="ACME" collapsed-icon-labels="true">
        <ic-navigation-item slot="primary-navigation">
            <a
              slot="navigation-item"
              class="active"
              href="/child-item-2"
              aria-label="Daily Tippers"
            >
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              Daily Tippers
            </a>
          </ic-navigation-item>
          <ic-navigation-item slot="secondary-navigation" href="/" label="a11y">
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9H15V22H13V16H11V22H9V9H3V7H21V9Z"
              fill="currentColor"
            />
          </svg>
        </ic-navigation-item>
      </ic-side-navigation>`,
    });

    expect(page.root).toMatchSnapshot(
      "slotted-navigation-item-collapsed-icon-labels"
    );

    expect(page.rootInstance.menuExpanded).toBe(false);
    await page.rootInstance.toggleMenuExpanded();
    await page.waitForChanges();
    await new Promise((r) => setTimeout(r, 2000));
    expect(page.rootInstance.menuExpanded).toBe(true);
    expect(page.root).toMatchSnapshot(
      "slotted-navigation-item-collapsed-icon-labels-menu-toggle"
    );
  });

  it("tests menu toggle slotted nav items - collapsed icon labels false", async () => {
    const page = await newSpecPage({
      components: [SideNavigation, NavigationItem],
      html: `<ic-side-navigation app-title="ACME" collapsed-icon-labels="false">
        <ic-navigation-item slot="primary-navigation">
            <a
              slot="navigation-item"
              class="active"
              href="/child-item-2"
              aria-label="Daily Tippers"
            >
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              Daily Tippers
            </a>
          </ic-navigation-item>
      </ic-side-navigation>`,
    });

    expect(page.rootInstance.menuExpanded).toBe(false);
    await page.rootInstance.toggleMenuExpanded();
    await page.waitForChanges();
    await new Promise((r) => setTimeout(r, 2000));
    expect(page.rootInstance.menuExpanded).toBe(true);
  });

  it("renders expanded", async () => {
    const page = await newSpecPage({
      components: [SideNavigation, NavigationItem],
      html: `<ic-side-navigation app-title="ACME" expanded="true"></ic-side-navigation>`,
    });

    await page.waitForChanges();
    await new Promise((r) => setTimeout(r, 2000));
    expect(page.root).toMatchSnapshot("renders-expanded");
  });

  it("renders with primary navigation items and collapsed icon labels", async () => {
    const page = await newSpecPage({
      components: [SideNavigation, NavigationItem],
      html: `
        <ic-side-navigation version="v0.0.0" app-title="ACME" status="BETA" collapsed-icon-labels="true">
          <ic-navigation-item slot="primary-navigation" href="/" label="Home">
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
        </ic-side-navigation>
      `,
    });

    expect(page.root).toMatchSnapshot(
      "primary-navigation-items-and-collapsed-icon-labels"
    );
  });

  it("should test resizing", async () => {
    const page = await newSpecPage({
      components: [SideNavigation],
      html: `<ic-side-navigation version="v0.0.0" status="BETA" app-title="ACME" collapsed-icon-labels="true">
    </ic-side-navigation>`,
    });

    await page.rootInstance.resizeObserverCallback(DEVICE_SIZES.S);
    expect(page.rootInstance.deviceSize).toBe(DEVICE_SIZES.S);

    await page.rootInstance.resizeObserverCallback(DEVICE_SIZES.M);
    expect(page.rootInstance.deviceSize).toBe(DEVICE_SIZES.M);

    await page.rootInstance.resizeObserverCallback(DEVICE_SIZES.XL);
    expect(page.rootInstance.deviceSize).toBe(DEVICE_SIZES.XL);
  });

  it("tests menu toggle", async () => {
    const page = await newSpecPage({
      components: [SideNavigation, NavigationItem, Button],
      html: `<ic-side-navigation app-title="ACME" version="v0.0.0" status="BETA">
      <ic-navigation-item slot="primary-navigation">
      <a
        slot="navigation-item"
        class="active"
        href="/child-item-2"
        aria-label="Daily Tippers"
      >
        <svg
          slot="icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
            fill="currentColor"
          ></path>
        </svg>
        Daily Tippers
      </a>
    </ic-navigation-item></ic-side-navigation>`,
    });

    await page.rootInstance.resizeObserverCallback(DEVICE_SIZES.S);
    expect(page.rootInstance.deviceSize).toBe(DEVICE_SIZES.S);
    await page.waitForChanges();
    expect(page.rootInstance.menuOpen).toBe(false);
    await page.rootInstance.toggleMenu();
    await page.waitForChanges();
    expect(page.rootInstance.menuOpen).toBe(true);
    await page.rootInstance.toggleMenu();
    await page.waitForChanges();
    await new Promise((r) => setTimeout(r, 2000));
    expect(page.rootInstance.menuOpen).toBe(false);
  });

  it("should test resizing - collapsed icon labels false", async () => {
    const page = await newSpecPage({
      components: [SideNavigation, NavigationItem],
      html: `<ic-side-navigation version="v0.0.0" status="BETA" app-title="ACME" collapsed-icon-labels="false">
      <ic-navigation-item slot="primary-navigation">
      <a
        slot="navigation-item"
        class="active"
        href="/child-item-2"
        aria-label="Daily Tippers"
      >
        <svg
          slot="icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
            fill="currentColor"
          ></path>
        </svg>
        Daily Tippers
      </a>
    </ic-navigation-item>
    </ic-side-navigation>`,
    });

    await page.rootInstance.resizeObserverCallback(DEVICE_SIZES.M);
    expect(page.rootInstance.deviceSize).toBe(DEVICE_SIZES.M);
  });

  it("should test transitionend event", async () => {
    const page = await newSpecPage({
      components: [SideNavigation, NavigationItem],
      html: `
        <ic-side-navigation version="v0.0.0" status="BETA" app-title="ACME" collapsed-icon-labels="true">
        <ic-navigation-item slot="primary-navigation" href="/" label="Home">
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
        <ic-navigation-item slot="secondary-navigation" href="/" label="a11y">
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9H15V22H13V16H11V22H9V9H3V7H21V9Z"
              fill="currentColor"
            />
          </svg>
        </ic-navigation-item>
        </ic-side-navigation>
      `,
    });

    expect(page.rootInstance.menuExpanded).toBe(false);
    await page.rootInstance.toggleMenuExpanded();
    await new Promise((r) => setTimeout(r, 2000));

    page.root.dispatchEvent(
      new window.window.Event("transitionend", {
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();
    expect(page.rootInstance.menuExpanded).toBe(true);
  });

  it("should test theme change", async () => {
    const page = await newSpecPage({
      components: [SideNavigation],
      html: `<ic-side-navigation version="v0.0.0" status="BETA" app-title="ACME">
    </ic-side-navigation>`,
    });

    await page.rootInstance.themeChangeHandler({ detail: { mode: "dark" } });
    await page.waitForChanges();
    expect(page.rootInstance.foregroundColor).toBe("dark");

    await page.rootInstance.themeChangeHandler({ detail: { mode: "light" } });
    await page.waitForChanges();
    expect(page.rootInstance.foregroundColor).toBe("light");

    //call runResizeObserver
    await page.rootInstance.runResizeObserver();

    // test disconnected callback
    page.setContent("");
  });

  it("renders with slotted primary secondary navigation and expanded", async () => {
    const page = await newSpecPage({
      components: [SideNavigation, NavigationItem, NavigationGroup],
      html: `<ic-side-navigation app-title="Application Name" version="v0.0.0" status="BETA" expanded="true">
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
      <ic-navigation-item slot="primary-navigation">
        <a
          slot="navigation-item"
          class="active"
          href="/child-item-2"
          aria-label="Daily Tippers"
        >
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
              fill="currentColor"
            ></path>
          </svg>
          Daily Tippers
        </a>
      </ic-navigation-item>
      <ic-navigation-group
        slot="primary-navigation"
        label="Second navigation group"
        expandable="true"
      >
        <ic-navigation-item>
          <a
            slot="navigation-item"
            href="/child-item-2"
            aria-label="Daily Tippers"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              ></path>
            </svg>
            Daily Tippers
          </a>
        </ic-navigation-item>
      </ic-navigation-group>
      <ic-navigation-item slot="secondary-navigation">
        <a
          slot="navigation-item"
          href="/bar"
          aria-label="bar"
        >
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
              fill="currentColor"
            ></path>
          </svg>
          bar
        </a>
      </ic-navigation-item>
    </ic-side-navigation>
    `,
    });

    expect(page.root).toMatchSnapshot(
      "renders-with-slotted-primary-secondary-navigation-and-expanded"
    );
  });
});
