import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
import { checkShadowElementRendersCorrectly } from "../../utils/testa11y.helpers";

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

describe("ic-footer-link-group", () => {
  it("passes accessibility", async () => {
    const el = await fixture(
      `<ic-footer-link-group><ic-footer-link></ic-footer-link></ic-footer-link-group>`
    );
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});
