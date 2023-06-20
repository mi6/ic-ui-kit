import { newE2EPage } from "@stencil/core/testing";

const pageWidth = 1200;
const pageHeight = 600;

describe("ic-top-navigation", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-top-navigation app-title="ApplicationName" status="alpha"
    version="v0.0.7"></ic-top-navigation>`);

    const element = await page.find("ic-top-navigation");

    expect(element).toHaveClass("hydrated");
  });

  it("should hide dropdown menu when nav item clicked", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-top-navigation app-title="ApplicationName" status="alpha"
    version="v0.0.7">
    <ic-navigation-group slot="navigation" label="Navigation group" expandable="true">
        <ic-navigation-item
          label="Navigation"
          slot="navigation"
        ></ic-navigation-item>
      </ic-navigation-group>
    </ic-top-navigation>`);

    await page.setViewport({
      width: pageWidth,
      height: pageHeight,
    });

    await page.waitForChanges();

    const navGroup = await page.find("ic-top-navigation ic-navigation-group");

    await navGroup.press("Enter");

    await page.waitForChanges();

    let dropDownDiv = await page.find(
      "ic-navigation-group >>> .navigation-group-dropdown"
    );
    expect(dropDownDiv).not.toBeNull();

    await page.evaluate(() => {
      const navItemComp = document.querySelector("ic-navigation-item");
      navItemComp.click();
    });

    await page.waitForChanges();

    dropDownDiv = await page.find(
      "ic-navigation-group >>> .navigation-group-dropdown"
    );
    expect(dropDownDiv).toBeNull();
  });
});
