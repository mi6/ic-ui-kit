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
    const stringArray = `<IcDialog size="default" />`;

    const result = convertComponents(stringArray);
    expect(result.trim()).toBe(`<IcDialog size={'medium'} />`);
  });

  it("should replace old props with new prop name and value single quotes", () => {
    const stringArray = `<IcDialog size={'default'} />`;

    const result = convertComponents(stringArray);
    expect(result.trim()).toBe(`<IcDialog size={'medium'} />`);
  });

  it("should not replace props that are not part of component", () => {
    const stringArray = `<IcDialog size="default" ><IcEmptyState /></IcDialog>`;

    const result = convertComponents(stringArray);
    expect(result).toBe(
      `<IcDialog size={'medium'} ><IcEmptyState /></IcDialog>`
    );
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
    const stringArray = `<ic-dialog size="default" />`;

    const result = convertComponents(stringArray);
    expect(result.trim()).toBe(`<ic-dialog size="medium" />`);
  });
});
