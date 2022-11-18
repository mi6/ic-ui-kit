import { newSpecPage } from "@stencil/core/testing";
import { Button } from "../ic-button/ic-button";
import { NavigationGroup } from "../ic-navigation-group/ic-navigation-group";
import { NavigationItem } from "../ic-navigation-item/ic-navigation-item";
import { NavigationMenu } from "./ic-navigation-menu";
import { NavigationButton } from "../ic-navigation-button/ic-navigation-button";
import { waitForNavGroupLoad } from "../../testspec.setup";

describe("ic-navigation-menu", () => {
  it("should render with version and status", async () => {
    const page = await newSpecPage({
      components: [NavigationMenu],
      html: `<ic-navigation-menu version="v1.0.0" status="Beta"></ic-navigation-menu>`,
    });
    expect(page.root).toMatchSnapshot("renders-with-version-and-status");
  });

  it("should test menu close emits event", async () => {
    const page = await newSpecPage({
      components: [NavigationMenu],
      html: `<ic-navigation-menu version="v1.0.0" status="Beta"></ic-navigation-menu>`,
    });

    const eventSpy = jest.fn();
    page.win.addEventListener("icNavigationMenuClose", eventSpy);
    await page.rootInstance.navItemClickHandler();
    await page.waitForChanges();
    expect(eventSpy).toHaveBeenCalled();
  });

  it("should test key down handler", async () => {
    Object.defineProperty(document, "activeElement", { value: null });

    const page = await newSpecPage({
      components: [NavigationMenu],
      html: `<ic-navigation-menu version="v1.0.0" status="Beta"></ic-navigation-menu>`,
    });

    const eventSpy = jest.fn();
    page.win.addEventListener("icNavigationMenuClose", eventSpy);
    await page.rootInstance.handleKeyDown({ key: "Escape" });
    await page.waitForChanges();
    expect(eventSpy).toHaveBeenCalled();

    await page.rootInstance.handleKeyDown({
      key: "Tab",
      preventDefault: (): void => null,
    });
    await page.waitForChanges();

    await page.rootInstance.handleKeyDown({
      key: "Tab",
      shiftKey: true,
      preventDefault: (): void => null,
    });
    await page.waitForChanges();
  });

  it("should test slotted buttons", async () => {
    const page = await newSpecPage({
      components: [NavigationMenu, NavigationButton, Button],
      html: `<ic-navigation-menu version="v1.0.0" status="Beta">
        <ic-navigation-button
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
      </ic-navigation-menu>`,
    });

    //trigger focus
    await page.rootInstance.handleKeyDown({
      key: "Tab",
      shiftKey: true,
      preventDefault: (): void => null,
    });
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot("renders-with-slotted-buttons");
  });

  it("should test slotted navigation item", async () => {
    const page = await newSpecPage({
      components: [NavigationMenu, NavigationItem],
      html: `<ic-navigation-menu version="v1.0.0" status="Beta">
        <ic-navigation-item slot="navigation" label="Navigation 1" href="/"></ic-navigation-item>
      </ic-navigation-menu>`,
    });

    //trigger focus
    await page.rootInstance.handleKeyDown({
      key: "Tab",
      shiftKey: true,
      preventDefault: (): void => null,
    });
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot("renders-with-slotted-navigation-item");
  });

  it("should test slotted navigation group", async () => {
    const page = await newSpecPage({
      components: [NavigationMenu, NavigationGroup],
      html: `<ic-navigation-menu version="v1.0.0" status="Beta">
        <ic-navigation-group
          slot="navigation"
          label="Navigation group"
          expandable="true"
        >
        </ic-navigation-group>
      </ic-navigation-menu>`,
    });
    await waitForNavGroupLoad();

    //trigger focus
    await page.rootInstance.handleKeyDown({
      key: "Tab",
      shiftKey: true,
      preventDefault: (): void => null,
    });
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot("renders-with-slotted-navigation-group");
  });

  it("should test slotted navigation and buttons", async () => {
    const page = await newSpecPage({
      components: [NavigationMenu, NavigationItem, NavigationButton, Button],
      html: `<ic-navigation-menu version="v1.0.0" status="Beta">
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
        <ic-navigation-item slot="navigation" label="Navigation 1" href="/"></ic-navigation-item>
      </ic-navigation-menu>`,
    });

    //trigger focus
    await page.rootInstance.handleKeyDown({
      key: "Tab",
      shiftKey: true,
      preventDefault: (): void => null,
    });
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot(
      "renders-with-slotted-navigation-and-buttons"
    );
  });

  it("should test slotted link", async () => {
    const page = await newSpecPage({
      components: [NavigationMenu],
      html: `<ic-navigation-menu version="v1.0.0" status="Beta">
        <a href="/"
          slot="navigation"
        >
      </ic-navigation-menu>`,
    });

    //trigger focus
    await page.rootInstance.handleKeyDown({
      key: "Tab",
      shiftKey: true,
      preventDefault: (): void => null,
    });
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot("renders-with-slotted-link");
  });
});
