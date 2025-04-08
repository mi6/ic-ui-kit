import { newSpecPage } from "@stencil/core/testing";
import { Link } from "../../ic-link/ic-link";
import { SkipLink } from "../ic-skip-link";

describe("ic-skip-link component", () => {
  it("should render a skip link by default with the correct text", async () => {
    const page = await newSpecPage({
      components: [SkipLink, Link],
      html: `<ic-skip-link target="page-content"></ic-skip-link>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render a skip link with a custom label", async () => {
    const page = await newSpecPage({
      components: [SkipLink, Link],
      html: `<ic-skip-link target="page-content" label="Custom skip label"></ic-skip-link>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render a skip link without a background when `transparentBackground` is true", async () => {
    const page = await newSpecPage({
      components: [SkipLink, Link],
      html: `<ic-skip-link target="page-content" transparent-background="true"></ic-skip-link>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should pass down the theme and monochrome prop to the ic-link component", async () => {
    const page = await newSpecPage({
      components: [SkipLink, Link],
      html: `<ic-skip-link target="page-content" theme="dark" monochrome="true"></ic-skip-link>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with the `inline` prop", async () => {
    const page = await newSpecPage({
      components: [SkipLink, Link],
      html: `<ic-skip-link target="page-content" inline="true"></ic-skip-link>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
