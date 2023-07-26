import { newSpecPage } from "@stencil/core/testing";
import { DatePicker } from "../../ic-date-picker";
// import { waitForTimeout } from "../../testspec.setup";

describe("ic-date-picker", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [DatePicker],
      html: `<ic-date-picker label="Date picker label"></ic-date-picker>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
