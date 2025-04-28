import { simpleTestComparison } from "../sections/simple-test-comparison";

describe("compareTest", () => {
  it("should replace old props with new props simple", () => {
    const stringArray = `
const stepOne = container.querySelector(
'ic-step[step-title="Choose coffee"]',
) as HTMLIcStepElement;
expect(stepOne.stepType).toBe(stepStates.current);
      `.trim();
    const result = simpleTestComparison(stringArray);
    expect(result).toBe(
      `
const stepOne = container.querySelector(
'ic-step[heading="Choose coffee"]',
) as HTMLIcStepElement;
expect(stepOne.type).toBe(stepStates.current);`.trim()
    );
  });

  it("should replace old type with new type simple", () => {
    const stringArray =
      `const select = dialog?.children[2] as HTMLIcSelectWithMultiElement;`.trim();
    const result = simpleTestComparison(stringArray);
    expect(result).toBe(
      `const select = dialog?.children[2] as HTMLIcSelectElement;`.trim()
    );
  });

  it("should replace old component with new component simple", () => {
    const stringArray =
      `expect(container.querySelectorAll("ic-data-entity")).toHaveLength(1);`.trim();
    const result = simpleTestComparison(stringArray);
    expect(result).toBe(
      `expect(container.querySelectorAll("ic-data-list")).toHaveLength(1);`.trim()
    );
  });
});
