import { fixture } from "@open-wc/testing-helpers";
import { axe } from "jest-axe";
import { checkLightElementRendersCorrectly } from "../../../../utils/testa11y.helpers";

describe("ic-tooltip", () => {
  it("passes accessibility", async () => {
    const el = await fixture(`<ic-tooltip
    label="This is a description of the button"
    target="test-button"
    ><button aria-describedby="ic-tooltip-test-button">Default</button></ic-tooltip
  >`);
    checkLightElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });

  it("passes accessibility with an icon and alt text", async () => {
    const el = await fixture(`<ic-tooltip
    label="This is a description of the button"
    target="test-button"
    icon-alt-text="An icon"
    ><button aria-describedby="ic-tooltip-test-button">Default</button><svg
    slot="icon"
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
    >
    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
  </svg></ic-tooltip
  >`);
    checkLightElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });

  it("passes accessibility with an icon and no alt text", async () => {
    const el = await fixture(`<ic-tooltip
    label="This is a description of the button"
    target="test-button"
    ><button aria-describedby="ic-tooltip-test-button">Default</button><svg
    slot="icon"
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
    >
    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
  </svg></ic-tooltip
  >`);
    checkLightElementRendersCorrectly(el);
    expect(await axe(el)).toHaveNoViolations();
  });
});
