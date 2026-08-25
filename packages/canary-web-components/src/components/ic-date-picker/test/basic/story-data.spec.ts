import { Default, Sizes } from "../../story-data";

describe("ic-date-picker Storybook render helpers", () => {
  afterEach(() => {
    document.body.replaceChildren();
  });

  it("removes the previously attached story picker before rerendering", () => {
    const unrelatedPicker = document.createElement("ic-date-picker");
    const firstRender = Default();

    document.body.append(unrelatedPicker, firstRender);

    const secondRender = Default();

    expect(firstRender.isConnected).toBe(false);
    expect(unrelatedPicker.isConnected).toBe(true);
    expect(secondRender.dataset.storyDatePicker).toBe("true");
  });

  it("preserves all date pickers created by a multi-picker story", () => {
    const firstRender = Sizes();
    document.body.append(firstRender);

    expect(firstRender.querySelectorAll("ic-date-picker")).toHaveLength(3);

    const secondRender = Sizes();

    expect(firstRender.querySelectorAll("ic-date-picker")).toHaveLength(0);
    expect(secondRender.querySelectorAll("ic-date-picker")).toHaveLength(3);
  });
});
