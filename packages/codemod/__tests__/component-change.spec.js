const { compareComponent } = require("../sections/component-changes");

describe("compareComponent", () => {
  describe("React style changes", () => {
    it("should replace old props with new props simple", () => {
      const stringArray = `
        <ExampleComponent oldProp1="value1" oldProp2="value2" />
      `;
      const jsonData = [
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

      const result = compareComponent(stringArray, jsonData);
      expect(result).toContain('newProp1="value1"');
      expect(result).toContain('newProp2="value2"');
    });

    it("should replace old props with new props absolute varient", () => {
      const stringArray = `<ExampleComponent oldProp1 oldProp2="oldProp1" />`;
      const jsonData = [
        {
          componentsAffected: "ExampleComponent",
          type: "absolute",
          v2Name: "oldProp1",
          v3Name: "newProp1",
        },
      ];

      const result = compareComponent(stringArray, jsonData);
      expect(result).toBe('<ExampleComponent newProp1 oldProp2="oldProp1" />');
    });

    it("should replace old props with new props simple Component", () => {
      const stringArray = `<ExampleComponent oldProp1="value1" oldProp2="value2" />`;
      const jsonData = [
        {
          componentsAffected: "ExampleComponent",
          type: "component",
          v2Name: "ExampleComponent",
          v3Name: "ExampleComponentNew",
        },
      ];

      const result = compareComponent(stringArray, jsonData);
      expect(result).toBe(
        '<ExampleComponentNew oldProp1="value1" oldProp2="value2" />'
      );
    });

    it("should replace old props with new props simple Component not self closing", () => {
      const stringArray = `<ExampleComponent oldProp1="value1" oldProp2="value2" >
        <div>Test</div>
      </ExampleComponent>`;
      const jsonData = [
        {
          componentsAffected: "ExampleComponent",
          type: "component",
          v2Name: "ExampleComponent",
          v3Name: "ExampleComponentNew",
        },
      ];

      const result = compareComponent(stringArray, jsonData);
      expect(result).toBe(
        `<ExampleComponentNew oldProp1="value1" oldProp2="value2" >
        <div>Test</div>
      </ExampleComponentNew>`
      );
    });

    it("should not replace old props with new props simple Component", () => {
      const stringArray = `<ExampleComponentDifferent oldProp1="value1" oldProp2="value2" />`;
      const jsonData = [
        {
          componentsAffected: "ExampleComponent",
          type: "component",
          v2Name: "ExampleComponent",
          v3Name: "ExampleComponentNew",
        },
      ];

      const result = compareComponent(stringArray, jsonData);
      expect(result).toBe(
        '<ExampleComponentDifferent oldProp1="value1" oldProp2="value2" />'
      );
    });
  });

  describe("web-component style changes", () => {
    it("should replace old props with new props simple", () => {
      const stringArray = `
        <example-component oldProp1="value1" oldProp2="value2" />
      `;
      const jsonData = [
        {
          componentsAffected: "example-component",
          type: "prop",
          v2Name: "oldProp1",
          v3Name: "newProp1",
        },
        {
          componentsAffected: "example-component",
          type: "prop",
          v2Name: "oldProp2",
          v3Name: "newProp2",
        },
      ];

      const result = compareComponent(stringArray, jsonData);
      expect(result).toContain('newProp1="value1"');
      expect(result).toContain('newProp2="value2"');
    });

    it("should replace old props with new props simple Component", () => {
      const stringArray = `<example-component oldProp1="value1" oldProp2="value2" />`;
      const jsonData = [
        {
          componentsAffected: "example-component",
          type: "web-component",
          v2Name: "example-component",
          v3Name: "example-component-new",
        },
      ];

      const result = compareComponent(stringArray, jsonData);
      expect(result).toBe(
        '<example-component-new oldProp1="value1" oldProp2="value2" />'
      );
    });

    it("should replace old props with new props simple Component not self closing", () => {
      const stringArray = `<example-component oldProp1="value1" oldProp2="value2" >
        <div>Test</div>
      </example-component>`;
      const jsonData = [
        {
          componentsAffected: "example-component",
          type: "web-component",
          v2Name: "example-component",
          v3Name: "example-component-new",
        },
      ];

      const result = compareComponent(stringArray, jsonData);
      expect(result).toBe(
        `<example-component-new oldProp1="value1" oldProp2="value2" >
        <div>Test</div>
      </example-component-new>`
      );
    });

    it("should not replace old props with new props simple Component", () => {
      const stringArray = `<example-component-different oldProp1="value1" oldProp2="value2" />`;
      const jsonData = [
        {
          componentsAffected: "example-component",
          type: "web-component",
          v2Name: "example-component",
          v3Name: "example-component-new",
        },
      ];

      const result = compareComponent(stringArray, jsonData);
      expect(result).toBe(
        '<example-component-different oldProp1="value1" oldProp2="value2" />'
      );
    });
  });
});
