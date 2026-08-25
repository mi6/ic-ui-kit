import { newSpecPage } from "@stencil/core/testing";
import { RadioGroup } from "../../ic-radio-group";
import { RadioOption } from "../../../ic-radio-option/ic-radio-option";

describe("ic-radio-group orientation updates", () => {
  it("updates from horizontal back to vertical at runtime", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption],
      html: `<ic-radio-group label="test label" name="test" orientation="vertical">
        <ic-radio-option value="one" label="One"></ic-radio-option>
        <ic-radio-option value="two" label="Two"></ic-radio-option>
      </ic-radio-group>`,
    });

    const radioGroup = page.root as HTMLIcRadioGroupElement;

    radioGroup.orientation = "horizontal";
    await page.waitForChanges();
    expect(page.rootInstance.currentOrientation).toBe("horizontal");

    radioGroup.orientation = "vertical";
    await page.waitForChanges();
    expect(page.rootInstance.currentOrientation).toBe("vertical");
  });
});
