import { newSpecPage } from "@stencil/core/testing";
import { InputValidation } from "../../ic-input-validation";
import { waitForTimeout } from "../../../../testspec.setup";

describe("ic-input-validation", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [InputValidation],
      html: `<ic-input-validation for="test-id" message="validation message"></ic-input-validation>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with success status", async () => {
    const page = await newSpecPage({
      components: [InputValidation],
      html: `<ic-input-validation for="test-id" message="validation message" status="success"></ic-input-validation>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with warning status", async () => {
    const page = await newSpecPage({
      components: [InputValidation],
      html: `<ic-input-validation for="test-id" message="validation message" status="warning"></ic-input-validation>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with error status", async () => {
    const page = await newSpecPage({
      components: [InputValidation],
      html: `<ic-input-validation for="test-id" message="validation message" status="error"></ic-input-validation>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with full width", async () => {
    const page = await newSpecPage({
      components: [InputValidation],
      html: `<ic-input-validation for="test-id" message="validation message" full-width=true></ic-input-validation>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should update the text content of the aria-live region", async () => {
    const page = await newSpecPage({
      components: [InputValidation],
      html: `<ic-input-validation for="test-id" message="validation message"></ic-input-validation>`,
    });

    page.rootInstance.message = "new validation message";

    await waitForTimeout(200);
    expect(page.root).toMatchSnapshot();
  });
});
