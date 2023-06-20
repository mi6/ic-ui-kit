import { newSpecPage } from "@stencil/core/testing";
import { Divider } from "../../ic-divider";

describe("ic-divider", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [Divider],
      html: `<ic-divider></ic-divider>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("correctly sets foregroundColor on theme change", async () => {
    const page = await newSpecPage({
      components: [Divider],
      html: `<ic-divider></ic-divider>`,
    });

    await page.rootInstance.themeChangeHandler({
      detail: { mode: "light" },
    });
    await page.waitForChanges();
    expect(page.root).toMatchSnapshot();

    expect(page.rootInstance.foregroundColor).toEqual("light");
  });
});
