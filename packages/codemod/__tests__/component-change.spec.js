const { regexCompareComponent } = require("../sections/component-changes");

describe("regexCompareComponent", () => {
  it("should replace old props with new props simple", () => {
    const stringArray = `
      <ExampleComponent oldProp1="value1" oldProp2="value2" />
    `;
    const jsonData = {};
    const reactData = [
      {
        componentsAffected: "ExampleComponent",
        type: "prop",
        v2Name: "oldProp1",
        v3Name: "newProp1",
      },
      {
        componentsAffected: "ExampleComponent",
        type: "prop",
        v2Name: "oldProp2",
        v3Name: "newProp2",
      },
    ];

    const result = regexCompareComponent(stringArray, jsonData, reactData);
    expect(result).toContain('newProp1="value1"');
    expect(result).toContain('newProp2="value2"');
  });

  it("should replace old props with new props simple Component", () => {
    const stringArray = `
      <ExampleComponent oldProp1="value1" oldProp2="value2" />
    `;
    const jsonData = {};
    const reactData = [
      {
        componentsAffected: "ExampleComponent",
        type: "component",
        v2Name: "ExampleComponent",
        v3Name: "ExampleComponentNew",
      },
    ];

    const result = regexCompareComponent(stringArray, jsonData, reactData);
    expect(result).toBe(
      ' <ExampleComponentNew oldProp1="value1" oldProp2="value2" />'
    );
  });
});
