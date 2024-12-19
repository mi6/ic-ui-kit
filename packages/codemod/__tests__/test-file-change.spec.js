const { testComparison } = require("../sections/test-comparison");

describe("compareTest", () => {
  it("should replace old props with new props simple", () => {
    const stringArray = `
const stepOne = container.querySelector(
'ic-step[step-title="Choose coffee"]',
) as HTMLIcStepElement;
expect(stepOne.stepType).toBe(stepStates.current);
      `.trim();
    const jsonData = [
      {
        componentsAffected: "ic-step",
        type: "prop",
        v2Name: "stepType",
        v3Name: "type",
      },
    ];

    const result = testComparison(stringArray, jsonData);
    expect(result).toBe(
      `
const stepOne = container.querySelector(
'ic-step[step-title="Choose coffee"]',
) as HTMLIcStepElement;
expect(stepOne.type).toBe(stepStates.current);`.trim()
    );
  });
});
