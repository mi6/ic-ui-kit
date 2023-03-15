import { newE2EPage } from "@stencil/core/testing";

describe("ic-popover-menu component", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-button id="button-1">Anchor button</ic-button><ic-popover-menu anchor="button-1" aria-label="popover" open="true"><ic-menu-item label="Test button" id="test-button"></ic-menu-item></ic-popover-menu>`
    );

    const element = await page.find("ic-popover-menu");

    expect(element).toHaveClass("hydrated");
  });

  it("should emit triggerPopoverMenuInstance when submenu trigger button is clicked", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-button id="button-1">Anchor button</ic-button><ic-popover-menu anchor="button-1" aria-label="popover" open="true"><ic-menu-item label="Test button" id="test-button" submenu-trigger-for="submenu"></ic-menu-item></ic-popover-menu>`
    );

    await page.waitForChanges();

    const submenuTriggerButton = await page.find("#test-button");

    const triggerPopoverMenuInstance = await page.spyOnEvent(
      "triggerPopoverMenuInstance"
    );

    await submenuTriggerButton.click();

    await page.waitForChanges();

    expect(triggerPopoverMenuInstance).toHaveReceivedEvent();
  });

  it("should emit handleMenuItemClick when menu item is clicked", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-button id="button-1">Anchor button</ic-button><ic-popover-menu anchor="button-1" aria-label="popover" open="true"><ic-menu-item label="Test button" id="test-button"></ic-menu-item></ic-popover-menu>`
    );

    await page.waitForChanges();

    const triggerButton = await page.find("#test-button");

    const handleMenuItemClick = await page.spyOnEvent("handleMenuItemClick");

    await triggerButton.click();

    await page.waitForChanges();

    expect(handleMenuItemClick).toHaveReceivedEvent();
  });
});
