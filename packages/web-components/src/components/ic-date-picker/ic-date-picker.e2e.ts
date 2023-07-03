import { newE2EPage } from "@stencil/core/testing";

describe("ic-date-picker component", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-date-picker></ic-date-picker>`);

    const element = await page.find("ic-date-picker");

    expect(element).toHaveClass("hydrated");
  });
});
