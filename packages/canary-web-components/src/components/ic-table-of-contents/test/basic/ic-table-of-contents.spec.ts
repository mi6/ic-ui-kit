import { newSpecPage } from "@stencil/core/testing";
import { TableOfContents } from "../../ic-table-of-contents";

describe("ic-table-of-contents", () => {
  beforeAll(() => {});

  it("should render default", async () => {
    const page = await newSpecPage({
      components: [TableOfContents],
      html: `<ic-table-of-contents>
      <div><h1>Heading</h1></div>
      </ic-table-of-contents>
        `,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render default with multiple headings", async () => {
    const page = await newSpecPage({
      components: [TableOfContents],
      html: `<ic-table-of-contents>
      <div>
      <h1>Heading</h1>
        <h2>Subheading</h2>
      </div>
      </ic-table-of-contents>
        `,
    });

    expect(page.root).toMatchSnapshot();
  });
});
