import { newE2EPage } from "@stencil/core/testing";

describe("ic-card", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<a href="/"><ic-card heading="Card" message="This is a static card"></ic-card></a>`
    );
    await page.waitForChanges();

    const element = await page.find("ic-card");
    expect(element).toHaveClass("hydrated");

    const link = await page.find("a");
    expect(link).toHaveClass("ic-card-wrapper-link");
  });

  it("should get focussed class applied when parent link focussed", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<a href="/"><ic-card heading="Card" message="This is a static card"></ic-card></a>`
    );
    await page.waitForChanges();

    const link = await page.find("a");
    link.focus();

    await page.waitForChanges();

    const element = await page.find("ic-card >>> div.focussed");
    expect(element).not.toBeNull;
  });
});
