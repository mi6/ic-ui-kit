import { newSpecPage } from "@stencil/core/testing";
import { Button } from "../../../ic-button/ic-button";
import { NavigationButton } from "../../ic-navigation-button";

describe("ic-navigation-button", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [NavigationButton],
      html: `<ic-navigation-button
        label="button1"
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
    </ic-navigation-button>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render differently if mode is menu", async () => {
    const page = await newSpecPage({
      components: [NavigationButton],
      html: `<ic-navigation-button label="button1" onclick="alert('test')">
      </ic-navigation-button>`,
    });

    page.rootInstance.mode = "menu";
    const el = page.root?.shadowRoot?.querySelector("ic-button");

    await page.waitForChanges();
    expect(el?.className).toEqual("popout-menu-button");
  });

  it("should correctly set mode on menu open and close", async () => {
    const page = await newSpecPage({
      components: [NavigationButton],
      html: `<ic-navigation-button label="button1" onclick="alert('test')">
      </ic-navigation-button>`,
    });

    await page.rootInstance.navBarMenuOpenHandler();
    await page.waitForChanges();

    expect(page.rootInstance.mode).toEqual("menu");

    await page.rootInstance.navBarMenuCloseHandler();
    await page.waitForChanges();

    expect(page.rootInstance.mode).toEqual("navbar");
  });

  it("should correctly set theme on brand change", async () => {
    const page = await newSpecPage({
      components: [NavigationButton],
      html: `<ic-navigation-button label="button1" onclick="alert('test')">
      </ic-navigation-button>`,
    });
    expect(page.rootInstance.theme).toBe("dark");

    await page.rootInstance.brandChangeHandler({ detail: { mode: "dark" } });
    await page.waitForChanges();

    expect(page.rootInstance.theme).toBe("light");
  });

  it("should correctly set focus", async () => {
    const page = await newSpecPage({
      components: [NavigationButton, Button],
      html: `<ic-navigation-button label="button1" onclick="alert('test')">
      </ic-navigation-button>`,
    });

    await page.rootInstance.setFocus();
  });

  it("should update any attributes that are inherited from the root element", async () => {
    const page = await newSpecPage({
      components: [NavigationButton, Button],
      html: `<ic-navigation-button label="button1"></ic-navigation-button>`,
    });
    expect(
      page.root?.querySelector("ic-button")?.getAttribute("aria-label")
    ).toBeUndefined();

    page.root?.setAttribute("aria-label", "new-label");
    page.rootInstance.hostMutationCallback([{ attributeName: "aria-label" }]);
    await page.waitForChanges();

    expect(
      page.root?.shadowRoot
        ?.querySelector("ic-button")
        ?.getAttribute("aria-label")
    ).toBe("new-label");
  });
});
