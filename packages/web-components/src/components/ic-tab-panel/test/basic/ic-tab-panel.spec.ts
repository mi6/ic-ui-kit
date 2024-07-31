import { newSpecPage } from "@stencil/core/testing";
import { TabPanel } from "../../ic-tab-panel";

describe("ic-tab component", () => {
  it("should not be hidden if the corresponding tab is selected", async () => {
    const page = await newSpecPage({
      components: [TabPanel],
      html: `<ic-tab-panel panel-id="1" selected-tab="1" tab-position=1>IC Tab Test</ic-tab-panel>`,
    });

    expect(page.root)
      .toEqualHtml(`<ic-tab-panel panel-id="1" selected-tab="1" role="tabpanel" tab-position="1">
    <mock:shadow-root>
      <div>
        <slot></slot>
      </div>
    </mock:shadow-root>
    IC Tab Test
  </ic-tab-panel>`);
  });

  it("should be hidden if the corresponding tab is not selected", async () => {
    const page = await newSpecPage({
      components: [TabPanel],
      html: `<ic-tab-panel panel-id="1" selected-tab="2" tab-position=1>IC Tab Test</ic-tab-panel>`,
    });

    expect(page.root)
      .toEqualHtml(`<ic-tab-panel panel-id="1" selected-tab="2" hidden="" role="tabpanel" tab-position="1">
    <mock:shadow-root>
      <div>
        <slot></slot>
      </div>
    </mock:shadow-root>
    IC Tab Test
  </ic-tab-panel>`);
  });

  it("should be hidden if selectedTab and panelId are undefined", async () => {
    const page = await newSpecPage({
      components: [TabPanel],
      html: `<ic-tab-panel tab-position=1>IC Tab Test</ic-tab-panel>`,
    });

    expect(page.root)
      .toEqualHtml(`<ic-tab-panel hidden="" role="tabpanel" tab-position="1">
    <mock:shadow-root>
      <div>
        <slot></slot>
      </div>
    </mock:shadow-root>
    IC Tab Test
  </ic-tab-panel>`);
  });
});
