import { SectionContainer } from "../../ic-section-container";
import { newSpecPage } from "@stencil/core/testing";

describe("ic-section-container", () => {
  it("should render with left-aligned by default", async () => {
    const page = await newSpecPage({
      components: [SectionContainer],
      html: `<ic-section-container>
      <p>Test container</p>
      </ic-section-container>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render full-width", async () => {
    const page = await newSpecPage({
      components: [SectionContainer],
      html: `<ic-section-container aligned="full-width">
      <p>Test container</p>
      </ic-section-container>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render centered", async () => {
    const page = await newSpecPage({
      components: [SectionContainer],
      html: `<ic-section-container aligned="center">
      <p>Test container</p>
      </ic-section-container>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should remove vertical padding when full-height", async () => {
    const page = await newSpecPage({
      components: [SectionContainer],
      html: `<ic-section-container full-height>
      <p>Test container</p>
      </ic-section-container>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
