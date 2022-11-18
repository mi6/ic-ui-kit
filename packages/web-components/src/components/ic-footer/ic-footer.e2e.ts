import { newE2EPage } from "@stencil/core/testing";

const pageWidth = 700;
const pageHeight = 600;

describe("ic-footer", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-footer description="Description">
            <ic-footer-link-group slot="link" group-title="Link group 1">
                <ic-footer-link href="/">Link 1</ic-footer-link>
                <ic-footer-link href="/">Link 2</ic-footer-link>
            </ic-footer-link-group>
            <ic-footer-link-group slot="link" group-title="Link group 2">
                <ic-footer-link href="/">Link 1</ic-footer-link>
                <ic-footer-link href="/">Link 2</ic-footer-link>
            </ic-footer-link-group>
        </ic-footer>`
    );

    const element = await page.find("ic-footer");

    expect(element).toHaveClass("hydrated");
  });

  it("should toggle the link groups when clicked", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-footer description="Description">
            <ic-footer-link-group slot="link" group-title="Link group 1">
                <ic-footer-link href="/">Link 1</ic-footer-link>
                <ic-footer-link href="/">Link 2</ic-footer-link>
            </ic-footer-link-group>
            <ic-footer-link-group slot="link" group-title="Link group 2">
                <ic-footer-link href="/">Link 1</ic-footer-link>
                <ic-footer-link href="/">Link 2</ic-footer-link>
            </ic-footer-link-group>
        </ic-footer>`
    );

    await page.setViewport({
      width: pageWidth,
      height: pageHeight,
    });

    await page.waitForChanges();

    const element = await page.find("ic-footer");
    let dropdownListLinks = await page.find(
      "ic-footer-link-group >>> .footer-link-group-links"
    );

    expect(element).not.toBeNull();
    expect(dropdownListLinks).toBeNull();

    await page.evaluate(() => {
      const footerLinkGroup = document.querySelector("ic-footer-link-group");
      footerLinkGroup.click();
    });

    await page.waitForChanges();

    dropdownListLinks = await page.find(
      "ic-footer-link-group >>> .footer-link-group-links"
    );

    expect(dropdownListLinks).not.toBeNull();
  });
});
