import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";

describe("ic-text-field", () => {
  it("passes accessibility", async () => {
    const el = await fixture(`<ic-text-field
    validation-status="erro"
    validation-text="now it has really gone to pot"
    value="Tea"
    max-length="25"
    label="What is your favourite coffee?"
    required
    placeholder="Placeholder"
    helper-text="Such as Arabica, Robusta or Liberica"
  >
    <svg
      slot="icon"
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#000000"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
      />
    </svg>
  </ic-text-field>`);
    expect(el.shadowRoot.innerHTML).not.toBe("");
    expect(await axe(el)).toHaveNoViolations();
  });
});
