import { newSpecPage } from "@stencil/core/testing";
import { Checkbox } from "../../ic-checkbox";

describe("ic-checkbox checkmark accessibility", () => {
  it("marks the visual checkmark as decorative", async () => {
    const page = await newSpecPage({
      components: [Checkbox],
      html: `<ic-checkbox label="Coffee" checked></ic-checkbox>`,
    });

    const checkmark = page.root?.shadowRoot?.querySelector("svg.checkmark");

    expect(checkmark).not.toBeNull();
    expect(checkmark?.getAttribute("aria-hidden")).toBe("true");
    expect(checkmark?.getAttribute("focusable")).toBe("false");
    expect(checkmark?.querySelector("title")).toBeNull();
  });
});
