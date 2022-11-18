import { newE2EPage } from "@stencil/core/testing";

describe("ic-back-to-top", () => {
  it("should be hidden", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<div id="topEl" style="height:1200px"></div>
        <ic-back-to-top target="topEl"></ic-back-to-top>
      `
    );
    await page.waitForChanges();
    const backToTop = await page.find(
      "ic-back-to-top >>> .ic-back-to-top-link"
    );

    expect(await backToTop.isVisible()).toBe(false);
  });

  it("should have correct text", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<div id="topEl"></div>
        <ic-back-to-top target="topEl"></ic-back-to-top>
      `
    );
    await page.waitForChanges();
    const backToTop = await page.find("ic-back-to-top >>> ic-typography");
    const text = await backToTop.innerText;

    expect(text).toBe("Back to top");
  });

  it("should appear when top is off screen", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<div id="topEl" style="margin-top:-20px;">
          <ic-typography variant="h2">Top of the page</ic-typography>
        </div>
        <div style="height:1200px;"></div>
        <ic-back-to-top target="topEl"></ic-back-to-top>
    `
    );
    await page.waitForChanges();
    const backToTop = await page.find(
      "ic-back-to-top >>> .ic-back-to-top-link"
    );

    expect(await backToTop.isVisible()).toBe(true);
  });

  it("should appear when page scrolled", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<div id="topEl">
          <ic-typography variant="h2">Top of the page</ic-typography>
        </div>
        <div style="height:1200px;"></div>
        <button style="bottom:0px; left:0px">Test Button</button>
        <ic-back-to-top target="topEl"></ic-back-to-top>
    `
    );
    await page.waitForChanges();

    const backToTop = await page.find(
      "ic-back-to-top >>> .ic-back-to-top-link"
    );
    const button = await page.find("button");

    expect(await backToTop.isVisible()).toBe(false);

    await button.focus();

    expect(await backToTop.isVisible()).toBe(true);
  });

  it("should hide and scroll page to top when clicked", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<div id="topEl">
          <ic-typography variant="h2">Top of the page</ic-typography>
        </div>
        <div style="height:1200px;"></div>
        <button style="bottom:0px; left:0px">Test Button</button>
        <ic-back-to-top target="topEl"></ic-back-to-top>
    `
    );
    await page.waitForChanges();

    const backToTop = await page.find(
      "ic-back-to-top >>> .ic-back-to-top-link"
    );
    const button = await page.find("button");

    await button.focus();
    await backToTop.click();
    await page.waitForTimeout(300);

    expect(await backToTop.isVisible()).toBe(false);
  });
});
