import { newSpecPage } from "@stencil/core/testing";
import { waitForNavGroupLoad } from "../../../../testspec.setup";
import { NavigationGroup } from "../../ic-navigation-group";

describe("ic-navigation-group document keydown listener", () => {
  it("removes the listener when Enter closes a top navigation group", async () => {
    const page = await newSpecPage({
      components: [NavigationGroup],
      html: `<ic-navigation-group label="Group label"></ic-navigation-group>`,
    });
    await waitForNavGroupLoad();

    const instance = page.rootInstance;
    instance.navigationType = "top";
    instance.dropdownOpen = true;

    document.addEventListener("keydown", instance.handleKeydown);

    instance.handleKeydown(new KeyboardEvent("keydown", { key: "Enter" }));
    await page.waitForChanges();
    expect(instance.dropdownOpen).toBe(false);

    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
    await page.waitForChanges();
    expect(instance.dropdownOpen).toBe(false);

    document.removeEventListener("keydown", instance.handleKeydown);
  });
});
