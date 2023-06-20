import { newSpecPage } from "@stencil/core/testing";
import { StatusTag } from "../../ic-status-tag";

describe("ic-status-tag component renders label", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [StatusTag],
      html: `<ic-status-tag label="Neutral"></ic-status-tag>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-status-tag aria-label="Status" label="Neutral">
    <mock:shadow-root>
      <strong class="tag filled-neutral" >
        <ic-typography variant="label-uppercase">
          <span>
            Neutral
          </span>
        </ic-typography>
      </strong>
      </mock:shadow-root>
    </ic-status-tag>
    `);
  }),
    it("should have the role of 'status' if announced is passed as true", async () => {
      const page = await newSpecPage({
        components: [StatusTag],
        html: `<ic-status-tag label="Neutral" announced="true"></ic-status-tag>`,
      });

      expect(page.root).toEqualHtml(`
    <ic-status-tag announced="true" aria-label="Status" label="Neutral" role="status">
    <mock:shadow-root>
      <strong class="tag filled-neutral" >
        <ic-typography variant="label-uppercase">
          <span>
            Neutral
          </span>
        </ic-typography>
      </strong>
      </mock:shadow-root>
    </ic-status-tag>
    `);
    });
});
