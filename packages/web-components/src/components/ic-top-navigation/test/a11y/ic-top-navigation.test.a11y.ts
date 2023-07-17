import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
import { checkShadowElementRendersCorrectly } from "../../../../utils/testa11y.helpers";

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockResizeObserver = jest.fn();
  mockResizeObserver.mockReturnValue({
    observe: jest.fn().mockReturnValue(null),
    unobserve: jest.fn().mockReturnValue(null),
    disconnect: jest.fn().mockReturnValue(null),
  });
  window.ResizeObserver = mockResizeObserver;
});

describe("ic-top-navigation", () => {
  it("passes accessibility", async () => {
    const el = await fixture(`
      <ic-top-navigation app-title="A11y test title"/>
    `);
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });

  it("passes accessibility with short title prop set", async () => {
    const el = await fixture(`
      <ic-top-navigation app-title="A11y test title" short-title="A11y"/>
    `);
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});
