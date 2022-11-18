import { newE2EPage } from "@stencil/core/testing";

describe("ic-navigation-menu", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-navigation-menu version="v0.0.7" status="alpha"></ic-navigation-menu>`
    );

    const element = await page.find("ic-navigation-menu");

    expect(element).toHaveClass("hydrated");
  });

  it("should emit icNavigationMenuClose when close button is clicked", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-navigation-menu version="v0.0.7" status="alpha"></ic-navigation-menu>`
    );

    await page.waitForChanges();

    const closeBtn = await page.find("ic-navigation-menu >>> ic-button");

    const icNavigationMenuClose = await page.spyOnEvent(
      "icNavigationMenuClose"
    );
    await closeBtn.click();

    await page.waitForChanges();

    expect(icNavigationMenuClose).toHaveReceivedEvent();
  });

  it("should emit icNavigationMenuClose when escape key pressed", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-navigation-menu version="v0.0.7" status="alpha"></ic-navigation-menu>`
    );

    await page.waitForChanges();
    const icNavigationMenuClose = await page.spyOnEvent(
      "icNavigationMenuClose"
    );
    await page.keyboard.press("Escape");
    await page.waitForChanges();

    expect(icNavigationMenuClose).toHaveReceivedEvent();
  });
});
