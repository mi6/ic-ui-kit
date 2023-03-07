import { newSpecPage } from "@stencil/core/testing";
import { MenuButton } from "./ic-menu-button";

describe("menu button variants", () => {
  it("should render the default variant", async () => {
    const page = await newSpecPage({
      components: [MenuButton],
      html: `<ic-menu-button
            label="Default variant"
          />`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render a menu button with a description", async () => {
    const page = await newSpecPage({
      components: [MenuButton],
      html: `<ic-menu-button
            label="Default variant"
            description="This is the default variant of the menu button with a description"
          />`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with keyboard shortcut", async () => {
    const page = await newSpecPage({
      components: [MenuButton],
      html: `<ic-menu-button
              label="Toggle variant"
              keyboard-shortcut="Cmd+"
            />`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should render the toggle variant", async () => {
    const page = await newSpecPage({
      components: [MenuButton],
      html: `<ic-menu-button
            variant="toggle"
            label="Toggle variant"
          />`,
    });

    expect(page.root).toMatchSnapshot();
  });
  it("should render the destructive variant", async () => {
    const page = await newSpecPage({
      components: [MenuButton],
      html: `<ic-menu-button
            variant="destuctive"
            label="Destructive variant"
          />`,
    });

    expect(page.root).toMatchSnapshot();
  });
  it("should render a menu button that triggers a popover menu instance", async () => {
    const page = await newSpecPage({
      components: [MenuButton],
      html: `<ic-menu-button
            variant="destuctive"
            submenu-trigger-for="submenu-1"
            label="Destructive variant"
          />`,
    });

    expect(page.rootInstance.submenuTriggerFor).not.toBeUndefined();

    expect(page.rootInstance.variant).toMatch("default");
  });
  it('should emit the triggerPopoverMenuInstance event when the menu button has the prop: "submenu-trigger-for" and is clicked', async () => {
    const page = await newSpecPage({
      components: [MenuButton],
      html: `<ic-menu-button
      id="test-menu-button"
            submenu-trigger-for="submenu-1"
            label="I emit an event"
          />`,
    });

    const eventSpy = jest.fn();
    page.win.addEventListener("triggerPopoverMenuInstance", eventSpy);
    expect(page.rootInstance.submenuTriggerFor).not.toBeUndefined();
    const element = await document.getElementById("test-menu-button");

    await element.click();

    await page.waitForChanges();

    await page.rootInstance.handleClick;
  });
});
