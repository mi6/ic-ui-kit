import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: jest.fn().mockReturnValue(null),
    unobserve: jest.fn().mockReturnValue(null),
    disconnect: jest.fn().mockReturnValue(null),
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

describe("ic-back-to-top", () => {
  it("passes accessibility", async () => {
    const el = await fixture(`
      <div>
        <div id="topEl" style="margin-top:-20px;">
          <ic-typography variant="h2">Top of the page</ic-typography>
        </div>
        <div style="height:1000px;"></div>
        <ic-back-to-top target="topEl"></ic-back-to-top>
      </div>`);
    const backToTop = el.lastElementChild as Element;
    expect(backToTop.shadowRoot.innerHTML).not.toBe("");
    expect(await axe(backToTop)).toHaveNoViolations();
  });
});
