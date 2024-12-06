import { newSpecPage } from "@stencil/core/testing";
import { StatusTag } from "../../ic-status-tag";

describe("ic-status-tag component renders label", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [StatusTag],
      html: `<ic-status-tag label="Neutral"></ic-status-tag>`,
    });

    expect(page.root).toMatchSnapshot(`renders label`);
  });

  it("should have the role of 'status' if announced is passed as true", async () => {
    const page = await newSpecPage({
      components: [StatusTag],
      html: `<ic-status-tag label="Neutral" announced="true"></ic-status-tag>`,
    });

    expect(page.root).toMatchSnapshot(`role of status if announced is true`);
  });

  it("should render a lowercase label when `uppercase` is set to false", async () => {
    const page = await newSpecPage({
      components: [StatusTag],
      html: `<ic-status-tag label="Neutral" uppercase="false"></ic-status-tag>`,
    });

    expect(page.root).toMatchSnapshot(
      `lowercase label when uppercase is false`
    );
  });
});
