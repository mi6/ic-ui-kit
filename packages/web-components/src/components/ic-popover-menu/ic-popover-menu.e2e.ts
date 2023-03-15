import { newE2EPage } from "@stencil/core/testing";

describe("ic-popover-menu component", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-button id="button-1">Anchor button</ic-button><ic-popover-menu anchor="button-1" menu-aria-label="popover" open="true"><ic-menu-button label="Test button" id="test-button"></ic-menu-button></ic-popover-menu>`
    );

    const element = await page.find("ic-popover-menu");

    expect(element).toHaveClass("hydrated");
  });

  it("should emit triggerPopoverMenuInstance when submenu trigger button is clicked", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-button id="button-1">Anchor button</ic-button><ic-popover-menu anchor="button-1" menu-aria-label="popover" open="true"><ic-menu-button label="Test button" id="test-button" submenu-trigger-for="submenu"></ic-menu-button></ic-popover-menu>`
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

  it("should emit handleMenuButtonClick when menu button is clicked", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-button id="button-1">Anchor button</ic-button><ic-popover-menu anchor="button-1" menu-aria-label="popover" open="true"><ic-menu-button label="Test button" id="test-button"></ic-menu-button></ic-popover-menu>`
    );

    await page.waitForChanges();

    const triggerButton = await page.find("#test-button");

    const handleMenuButtonClick = await page.spyOnEvent(
      "handleMenuButtonClick"
    );

    await triggerButton.click();

    await page.waitForChanges();

    expect(handleMenuButtonClick).toHaveReceivedEvent();
  });
});
