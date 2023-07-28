import { newSpecPage } from "@stencil/core/testing";
import { DataRow } from "../../ic-data-row";

describe("ic-data-row", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [DataRow],
      html: `<ic-data-row label="label" value="value"></ic-data-row>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render slotted content in the label slot", async () => {
    const page = await newSpecPage({
      components: [DataRow],
      html: `<ic-data-row value="value"><ic-typography slot="label">Label</ic-typography></ic-data-row>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should not render label element if no label provided", async () => {
    const page = await newSpecPage({
      components: [DataRow],
      html: `<ic-data-row value="value"></ic-data-row>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render slotted content in the value slot", async () => {
    const page = await newSpecPage({
      components: [DataRow],
      html: `<ic-data-row label="label"><ic-status-tag variant="success" label="success" slot="value"></ic-status-tag></ic-data-row>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render slotted content in the end-component slot", async () => {
    const page = await newSpecPage({
      components: [DataRow],
      html: `<ic-data-row label="label" value="test value"><ic-status-tag variant="success" label="success" slot="end-component"></ic-status-tag></ic-data-row>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render the label variant of typography when entity size is xs", async () => {
    const page = await newSpecPage({
      components: [DataRow],
      html: `<ic-data-row label="label"><ic-status-tag variant="success" label="success" slot="value"></ic-status-tag></ic-data-row>`,
    });

    page.rootInstance.entitySize = "xs";
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should call runResizeObserver", async () => {
    const page = await newSpecPage({
      components: [DataRow],
      html: `<ic-data-row label="label" value="value"></ic-data-row>`,
    });

    await page.rootInstance.runResizeObserver();
    page.waitForChanges();

    const resize = new ResizeObserver(() => {
      page.rootInstance.checkLabelAbove();
    });

    expect(page.rootInstance.resizeObserver).toBe(resize);

    page.setContent("");
  });

  it("should change entity size depending on screen size", async () => {
    const page = await newSpecPage({
      components: [DataRow],
      html: `<ic-data-row label="label" value="value"></ic-data-row>`,
    });

    Object.defineProperty(
      page.root.shadowRoot.querySelector(".data"),
      "clientWidth",
      {
        value: 200,
      }
    );

    page.waitForChanges();

    page.rootInstance.checkLabelAbove();

    expect(page.rootInstance.entitySize).toBe("xs");
  });
});
