import { newSpecPage } from "@stencil/core/testing";
import { Skeleton } from "../../ic-skeleton";

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(jest.fn());
});

describe("ic-skeleton", () => {
  it("should render with default height and width", async () => {
    const page = await newSpecPage({
      components: [Skeleton],
      html: `<ic-skeleton></ic-skeleton>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with supplied height", async () => {
    const page = await newSpecPage({
      components: [Skeleton],
      html: `<ic-skeleton style="height: 100px;"></ic-skeleton>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with supplied width", async () => {
    const page = await newSpecPage({
      components: [Skeleton],
      html: `<ic-skeleton style="width: 300px;"></ic-skeleton>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with supplied height and width", async () => {
    const page = await newSpecPage({
      components: [Skeleton],
      html: `<ic-skeleton style="height: 100px; width: 300px;"></ic-skeleton>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render circular variant", async () => {
    const page = await newSpecPage({
      components: [Skeleton],
      html: `<ic-skeleton variant="circle"></ic-skeleton>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render text variant", async () => {
    const page = await newSpecPage({
      components: [Skeleton],
      html: `<ic-skeleton variant="text"><ic-typography>Test</ic-typography></ic-skeleton>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
