import { newSpecPage } from "@stencil/core/testing";
import { TabPanel } from "../../ic-tab-panel";

describe("ic-tab-panel component", () => {
  it("should render correctly when it is the active tab panel", async () => {
    const page = await newSpecPage({
      components: [TabPanel],
      html: `<ic-tab-panel active>IC Tab Test</ic-tab-panel>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render correctly when not the active tab panel", async () => {
    const page = await newSpecPage({
      components: [TabPanel],
      html: `<ic-tab-panel>IC Tab Test</ic-tab-panel>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
