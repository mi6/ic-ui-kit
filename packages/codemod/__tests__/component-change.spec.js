import { convertComponents } from "../sections/component-changes.js";

describe("React style changes", () => {
  it("should replace component name change", () => {
    const stringArray = `
        <IcDataEntity prop="value" />
      `;

    const result = convertComponents(stringArray);
    expect(result.trim()).toBe('<IcDataList prop="value" />');
  });

  it("should replace old props with new prop name", () => {
    const stringArray = `<IcEmptyState bodyMaxLines={50} />`;

    const result = convertComponents(stringArray);
    expect(result.trim()).toBe("<IcEmptyState maxLines={50} />");
  });

  it("should replace old props with new prop name and value", () => {
    const stringArray = `<IcSelect size="default" />`;

    const result = convertComponents(stringArray);
    expect(result.trim()).toBe(`<IcSelect size="medium" />`);
  });

  it("should replace old props with new prop name and value single quotes", () => {
    const stringArray = `<IcSearchBar size={'default'} />`;

    const result = convertComponents(stringArray);
    expect(result.trim()).toBe(`<IcSearchBar size="medium" />`);
  });

  it("should not replace props that are not part of component", () => {
    const stringArray = `<IcStatusTag size="default" ><IcEmptyState /></IcStatusTag>`;

    const result = convertComponents(stringArray);
    expect(result).toBe(
      `<IcStatusTag size="medium" ><IcEmptyState /></IcStatusTag>`
    );
  });

  it("should replace old props with new prop name and value binary switch", () => {
    const stringArray = `<icDialog buttons="true" />`;

    const result = convertComponents(stringArray);
    expect(result.trim()).toBe(`<icDialog hideDefaultControls="false" />`);
  });
});

describe("web-component style changes", () => {
  it("should replace component name change", () => {
    const stringArray = `
    <ic-data-entity prop="value" ></ic-data-entity>
  `;

    const result = convertComponents(stringArray);
    expect(result.trim()).toBe('<ic-data-list prop="value" ></ic-data-list>');
  });

  it("should replace component name change and ignore similar name", () => {
    const stringArray = `<ic-card heading="test"></ic-card>
    <ic-card-horizontal heading="test"></ic-card-horizontal>
  `;

    const result = convertComponents(stringArray);
    expect(result.trim())
      .toBe(`<ic-card-vertical heading="test"></ic-card-vertical>
    <ic-card-horizontal heading="test"></ic-card-horizontal>`);
  });

  it("should replace old props with new prop name", () => {
    const stringArray = `<ic-empty-state body-max-lines="50" />`;

    const result = convertComponents(stringArray);
    expect(result.trim()).toBe(`<ic-empty-state max-lines="50" />`);
  });

  it("should replace old props with new props simple Component not self closing", () => {
    const stringArray = `<ic-badge text-label="value1" >
        <div>Test</div>
      </ic-badge>`;

    const result = convertComponents(stringArray);
    expect(result).toBe(
      `<ic-badge label="value1" >
        <div>Test</div>
      </ic-badge>`
    );
  });

  it("should replace old props with new prop name and value", () => {
    const stringArray = `<ic-accordion size="default" />`;

    const result = convertComponents(stringArray);
    expect(result.trim()).toBe(`<ic-accordion size="medium" />`);
  });

  it("should replace old props with new prop name and value multiple", () => {
    const stringArray = `<ic-button appearance="dark" />`;

    const result = convertComponents(stringArray);
    expect(result.trim()).toBe(`<ic-button theme="light" monochrome />`);
  });

  it("should replace old props with new prop name and value binary switch", () => {
    const stringArray = `<ic-dialog buttons="true" />`;

    const result = convertComponents(stringArray);
    expect(result.trim()).toBe(`<ic-dialog hide-default-controls="false" />`);
  });
});
