import { newE2EPage } from "@stencil/core/testing";
import {
  icBreadcrumbGroupCollapsed,
  icBreadcrumbGroupBack,
} from "./ic-breadcrumb-group-test-examples";

describe("ic-breadcrumb-group", () => {
  it("displays collapsed breadcrumbs", async () => {
    const page = await newE2EPage();
    await page.setContent(icBreadcrumbGroupCollapsed);
    await page.waitForChanges();

    let visibleBreadcrumbs = await page.evaluate(() => {
      return Array.from(
        document.querySelectorAll(
          "ic-breadcrumb:not(.collapsed-breadcrumb-wrapper"
        )
      ).filter((b) => getComputedStyle(b).display !== "none").length;
    });

    expect(visibleBreadcrumbs).toBe(2);

    const btn = await page.find(
      "ic-breadcrumb.collapsed-breadcrumb-wrapper button"
    );

    expect(btn).not.toBeNull();

    await btn.click();

    await page.waitForChanges();

    visibleBreadcrumbs = await page.evaluate(() => {
      return Array.from(
        document.querySelectorAll(
          "ic-breadcrumb:not(.collapsed-breadcrumb-wrapper"
        )
      ).filter((b) => getComputedStyle(b).display !== "none").length;
    });

    expect(visibleBreadcrumbs).toBe(3);
  });

  it("renders aria elements when back-breadcrumb-only is set", async () => {
    const page = await newE2EPage();
    await page.setContent(icBreadcrumbGroupBack);
    await page.waitForChanges();

    const describedbySpan = await page.find(
      "ic-breadcrumb-group ic-breadcrumb[show-back-icon] >>> span.hide"
    );

    const icLinkNestedATag = await page.$eval("ic-breadcrumb-group", (el) => {
      const nestedATag = el
        .querySelector("ic-breadcrumb[show-back-icon]")
        .shadowRoot.querySelector("ic-link")
        .shadowRoot.querySelector("a");

      return {
        ariaDescribedBy: nestedATag.getAttribute("aria-describedby"),
      };
    });

    expect(describedbySpan).not.toBeNull();
    expect(describedbySpan.id).toBe("breadcrumb-2-describedby");

    expect(icLinkNestedATag.ariaDescribedBy).toBeTruthy();
    expect(icLinkNestedATag.ariaDescribedBy).toBe("breadcrumb-2-describedby");
  });
});
