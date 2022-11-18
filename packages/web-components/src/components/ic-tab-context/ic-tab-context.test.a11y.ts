import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";

describe("ic-tab-context", () => {
  it("passes accessibility", async () => {
    const el = await fixture(`<ic-tab-context>
    <ic-tab-group>
      <ic-tab>One</ic-tab>
      <ic-tab>Two</ic-tab>
      <ic-tab>Three</ic-tab>
    </ic-tab-group>
    <ic-tab-panel> Tab One </ic-tab-panel>
    <ic-tab-panel> Tab Two </ic-tab-panel>
    <ic-tab-panel> Tab Three </ic-tab-panel>
  </ic-tab-context>`);

    expect(el.getAttribute("context-id")).toBe("default");
    expect(await axe(el)).toHaveNoViolations();
  });
});
