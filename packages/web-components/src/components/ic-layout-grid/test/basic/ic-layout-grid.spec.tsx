import { LayoutGrid } from "../../ic-layout-grid";
import { newSpecPage } from "@stencil/core/testing";

const COL_WIDTH_CSS_PROP = "--ic-layout-grid-col-width";

describe("ic-layout-grid", () => {
  it("should render with left-aligned by default", async () => {
    const page = await newSpecPage({
      components: [LayoutGrid],
      html: `<ic-layout-grid>
        <div>Test div 1</div>
        <div>Test div 2</div>
        <div>Test div 3</div>
        <div>Test div 4</div>
      </ic-layout-grid>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render full-width", async () => {
    const page = await newSpecPage({
      components: [LayoutGrid],
      html: `<ic-layout-grid aligned="full-width">
      <div>Test div 1</div>
      <div>Test div 2</div>
      <div>Test div 3</div>
      <div>Test div 4</div>
      </ic-layout-grid>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render centered", async () => {
    const page = await newSpecPage({
      components: [LayoutGrid],
      html: `<ic-layout-grid aligned="center">
      <div>Test div 1</div>
      <div>Test div 2</div>
      <div>Test div 3</div>
      <div>Test div 4</div>
      </ic-layout-grid>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should remove vertical padding when full-height", async () => {
    const page = await newSpecPage({
      components: [LayoutGrid],
      html: `<ic-layout-grid full-height>
      <div>Test div 1</div>
      <div>Test div 2</div>
      <div>Test div 3</div>
      <div>Test div 4</div>
      </ic-layout-grid>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with columns set", async () => {
    const page = await newSpecPage({
      components: [LayoutGrid],
      html: `<ic-layout-grid columns="3">
      <div>Test div 1</div>
      <div>Test div 2</div>
      <div>Test div 3</div>
      <div>Test div 4</div>
      </ic-layout-grid>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with rows set", async () => {
    const page = await newSpecPage({
      components: [LayoutGrid],
      html: `<ic-layout-grid rows="2">
      <div>Test div 1</div>
      <div>Test div 2</div>
      <div>Test div 3</div>
      <div>Test div 4</div>
      </ic-layout-grid>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with defaultColSpan as a number", async () => {
    const page = await newSpecPage({
      components: [LayoutGrid],
      html: `<ic-layout-grid default-col-span="2">
      <div>Test div 1</div>
      <div>Test div 2</div>
      <div>Test div 3</div>
      <div>Test div 4</div>
      </ic-layout-grid>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with defaultColSpan as an object", async () => {
    const page = await newSpecPage({
      components: [LayoutGrid],
      html: `<ic-layout-grid>
      <div>Test div 1</div>
      <div>Test div 2</div>
      <div>Test div 3</div>
      <div>Test div 4</div>
      </ic-layout-grid>`,
    });

    page.rootInstance.defaultColSpan = { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 };

    expect(page.root).toMatchSnapshot();
  });

  it("should set CSS variables for columns at breakpoints", async () => {
    const columns = { xs: 2, sm: 4, md: 8, lg: 12, xl: 16 };
    const page = await newSpecPage({
      components: [LayoutGrid],
      html: `<ic-layout-grid>
        <div>Test div 1</div>
        <div>Test div 2</div>
        <div>Test div 3</div>
        <div>Test div 4</div>
      </ic-layout-grid>`,
    });
    page.rootInstance.columns = columns;
    await page.rootInstance.getColumns();
    await page.waitForChanges();

    Object.entries(columns).forEach(([breakpoint, value]) => {
      expect(
        page.root?.style.getPropertyValue(
          `--ic-layout-grid-columns-${breakpoint}`
        )
      ).toBe(value.toString());
    });
  });

  it("should set CSS variables for defaultColSpan at breakpoints", async () => {
    const defaultColSpan = { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 };
    const page = await newSpecPage({
      components: [LayoutGrid],
      html: `<ic-layout-grid>
        <div>Test div 1</div>
        <div>Test div 2</div>
        <div>Test div 3</div>
        <div>Test div 4</div>
      </ic-layout-grid>`,
    });
    page.rootInstance.defaultColSpan = defaultColSpan;
    await page.rootInstance.getColSpan();
    await page.waitForChanges();

    Object.entries(defaultColSpan).forEach(([breakpoint, value]) => {
      expect(
        page.root?.style.getPropertyValue(
          `--ic-layout-grid-col-span-${breakpoint}`
        )
      ).toBe(value.toString());
    });
  });

  it("should update --ic-layout-grid-rows when rows changes", async () => {
    const page = await newSpecPage({
      components: [LayoutGrid],
      html: `<ic-layout-grid></ic-layout-grid>`,
    });
    page.rootInstance.rows = 5;
    await page.waitForChanges();
    expect(page.root!.style.getPropertyValue("--ic-layout-grid-rows")).toBe(
      "5"
    );
  });

  it("should update --ic-layout-grid-row-span when defaultRowSpan changes", async () => {
    const page = await newSpecPage({
      components: [LayoutGrid],
      html: `<ic-layout-grid></ic-layout-grid>`,
    });
    page.rootInstance.defaultRowSpan = 5;
    await page.waitForChanges();
    expect(page.root!.style.getPropertyValue("--ic-layout-grid-row-span")).toBe(
      "5"
    );
  });

  it("should update --ic-layout-grid-col-width when defaultColWidth changes", async () => {
    const page = await newSpecPage({
      components: [LayoutGrid],
      html: `<ic-layout-grid type="fixed"></ic-layout-grid>`,
    });
    page.rootInstance.defaultColWidth = 5;
    await page.waitForChanges();
    expect(page.root!.style.getPropertyValue(COL_WIDTH_CSS_PROP)).toBe("5");
  });

  it("should set and remove --ic-layout-grid-col-width when type changes", async () => {
    const page = await newSpecPage({
      components: [LayoutGrid],
      html: `<ic-layout-grid type="fixed" default-col-width="100px"></ic-layout-grid>`,
    });

    const grid = page.root;
    expect(grid!.style.getPropertyValue(COL_WIDTH_CSS_PROP)).toBe("100px");

    grid!.type = "fluid";
    await page.waitForChanges();
    expect(grid!.style.getPropertyValue(COL_WIDTH_CSS_PROP)).toBe("");

    grid!.type = "fixed";
    await page.waitForChanges();
    expect(grid!.style.getPropertyValue(COL_WIDTH_CSS_PROP)).toBe("100px");
  });
});
