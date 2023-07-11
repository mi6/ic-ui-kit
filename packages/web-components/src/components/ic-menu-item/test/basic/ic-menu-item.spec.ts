import { newSpecPage } from "@stencil/core/testing";
import { MenuItem } from "../../ic-menu-item";
import { Button } from "../../../ic-button/ic-button";

describe("menu item variants", () => {
  it("should render the default variant", async () => {
    const page = await newSpecPage({
      components: [MenuItem],
      html: `<ic-menu-item
            label="Default variant"
          />`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render a menu item with a description", async () => {
    const page = await newSpecPage({
      components: [MenuItem],
      html: `<ic-menu-item
            label="Default variant"
            description="This is the default variant of the menu item with a description"
          />`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with keyboard shortcut", async () => {
    const page = await newSpecPage({
      components: [MenuItem],
      html: `<ic-menu-item
              label="Toggle variant"
              keyboard-shortcut="Cmd+"
            />`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should render the toggle variant", async () => {
    const page = await newSpecPage({
      components: [MenuItem, Button],
      html: `<ic-menu-item
            variant="toggle"
            label="Toggle variant"
            id="test-menu-item"
          />`,
    });

    expect(page.root).toMatchSnapshot();
    expect(page.rootInstance.variant).toMatch("toggle");
    expect(page.rootInstance.toggleChecked).toBeFalsy();

    const button = page.root.shadowRoot
      .querySelector("li > ic-button")
      .shadowRoot.querySelector("button");

    button.click();
    await page.waitForChanges;
  });

  it("should render the destructive variant", async () => {
    const page = await newSpecPage({
      components: [MenuItem],
      html: `<ic-menu-item
            variant="destuctive"
            label="Destructive variant"
          />`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render a menu item that triggers a popover menu instance", async () => {
    const page = await newSpecPage({
      components: [MenuItem],
      html: `<ic-menu-item
            variant="destuctive"
            submenu-trigger-for="submenu-1"
            label="Destructive variant"
          />`,
    });

    expect(page.rootInstance.submenuTriggerFor).not.toBeUndefined();

    expect(page.rootInstance.variant).toMatch("default");
  });

  it('should emit the triggerPopoverMenuInstance event when the menu item has the prop: "submenu-trigger-for" and is clicked', async () => {
    const page = await newSpecPage({
      components: [MenuItem, Button],
      html: `<ic-menu-item
      id="test-menu-item"
            submenu-trigger-for="submenu-1"
            label="I emit an event"
          />`,
    });

    const eventSpy = jest.fn();
    page.win.addEventListener("triggerPopoverMenuInstance", eventSpy);
    expect(page.rootInstance.submenuTriggerFor).not.toBeUndefined();

    const element = await document.getElementById("test-menu-item");

    await element.click();

    await page.waitForChanges();

    await page.rootInstance.handleClick;
  });

  it("should prevent default action on click", async () => {
    const page = await newSpecPage({
      components: [MenuItem],
      html: `<ic-menu-item
      id="test-menu-item"
            label="I emit an event"
            submenu-trigger-for="test-submenu"
          />`,
    });

    const mockEvent = { preventDefault: jest.fn() };
    page.rootInstance.handleClick(mockEvent as unknown as MouseEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });
});
