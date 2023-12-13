import { newSpecPage } from "@stencil/core/testing";
import { h } from "@stencil/core";
import { TitleBar } from "../../ic-title-bar";

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(jest.fn());
});

describe("ic-title-bar", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [TitleBar],
      template: () => <ic-title-bar header="header"></ic-title-bar>,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with description and metadata", async () => {
    const page = await newSpecPage({
      components: [TitleBar],
      template: () => (
        <ic-title-bar
          header="header"
          metadata="metadata"
          description="desc"
        ></ic-title-bar>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with slotted actions", async () => {
    const page = await newSpecPage({
      components: [TitleBar],
      template: () => (
        <ic-title-bar header="header">
          <ic-button slot="primary-action">1</ic-button>
          <ic-button slot="custom-actions">2</ic-button>
          <ic-button slot="custom-actions">3</ic-button>
        </ic-title-bar>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with slotted header and description", async () => {
    const page = await newSpecPage({
      components: [TitleBar],
      template: () => (
        <ic-title-bar>
          <ic-typography slot="header">slotted header</ic-typography>
          <ic-typography slot="description">slotted desc</ic-typography>
        </ic-title-bar>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should not render the actions area if hideDensitySelect is true and there are no slotted elements", async () => {
    const page = await newSpecPage({
      components: [TitleBar],
      template: () => (
        <ic-title-bar header="header" hideDensitySelect={true}></ic-title-bar>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render the description area if the description is slotted and there is no action area", async () => {
    const page = await newSpecPage({
      components: [TitleBar],
      template: () => (
        <ic-title-bar header="header" hideDensitySelect={true}>
          <ic-typography slot="description">slotted desc</ic-typography>
        </ic-title-bar>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should emit the icTableDensityUpdate when the density select is updated", async () => {
    const page = await newSpecPage({
      components: [TitleBar],
      template: () => <ic-title-bar header="header"></ic-title-bar>,
    });

    const eventSpy = jest.fn();
    page.root.addEventListener("icTableDensityUpdate", eventSpy);

    const icChange = new CustomEvent("icChange", {
      detail: { value: "dense" },
    });
    const icSelect = page.root.shadowRoot.querySelector("ic-select");
    icSelect.dispatchEvent(icChange);

    await page.waitForChanges();
    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          value: "dense",
        }),
      })
    );
  });
});
