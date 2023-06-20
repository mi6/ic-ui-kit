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

describe("ic-horizontal-scroll", () => {
  it("passes accessibility", async () => {
    const div = document.createElement("div");
    div.setAttribute("style", "width: 320px;");
    const el = await fixture(
      `
      <ic-horizontal-scroll>
        <ul>
          <ic-navigation-item label="Test nav item 1"></ic-navigation-item>
          <ic-navigation-item label="Test nav item 2"></ic-navigation-item>
          <ic-navigation-item label="Test nav item 3"></ic-navigation-item>
          <ic-navigation-item label="Test nav item 4"></ic-navigation-item>
          <ic-navigation-item label="Test nav item 5"></ic-navigation-item>
          <ic-navigation-item label="Test nav item 6"></ic-navigation-item>
        </ul>
      </ic-horizontal-scroll>
    `,
      { parentNode: div }
    );
    checkShadowElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});
