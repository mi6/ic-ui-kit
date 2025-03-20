import { newSpecPage } from "@stencil/core/testing";
import { TableOfContents } from "../../ic-table-of-contents";

describe("ic-table-of-contents", () => {
  beforeAll(() => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: jest.fn().mockReturnValue(null),
      unobserve: jest.fn().mockReturnValue(null),
      disconnect: jest.fn().mockReturnValue(null),
    });

    Object.defineProperty(global, "IntersectionObserver", {
      value: mockIntersectionObserver,
    });
  });

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
