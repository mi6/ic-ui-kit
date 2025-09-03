import { InputValidation } from "../../ic-input-validation";
import { newSpecPage } from "@stencil/core/testing";

describe("ic-input-validation", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [InputValidation],
      html: `<ic-input-validation for="test-id" message="validation message"></ic-input-validation>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-validation for="test-id" message="validation message">
      <ic-typography class="statustext" variant="caption">
        <span aria-live="polite" id="test-id-validation-text">
          validation message
        </span>
      </ic-typography>
    </ic-input-validation>
    `);
  });

  it("should render with success status", async () => {
    const page = await newSpecPage({
      components: [InputValidation],
      html: `<ic-input-validation for="test-id" message="validation message" status="success"></ic-input-validation>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-validation class="ic-input-validation-success" for="test-id" message="validation message" status="success">
      <span class="icon-success status-icon">
        svg
      </span>
      <ic-typography class="statustext" variant="caption">
        <span aria-live="polite" id="test-id-validation-text">
          validation message
        </span>
      </ic-typography>
    </ic-input-validation>
    `);
  });

  it("should render with warning status", async () => {
    const page = await newSpecPage({
      components: [InputValidation],
      html: `<ic-input-validation for="test-id" message="validation message" status="warning"></ic-input-validation>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-validation class="ic-input-validation-warning" for="test-id" message="validation message" status="warning">
      <span class="icon-warning status-icon">
        svg
      </span>
      <ic-typography class="statustext" variant="caption">
        <span aria-live="polite" id="test-id-validation-text">
          validation message
        </span>
      </ic-typography>
    </ic-input-validation>
    `);
  });

  it("should render with error status", async () => {
    const page = await newSpecPage({
      components: [InputValidation],
      html: `<ic-input-validation for="test-id" message="validation message" status="error"></ic-input-validation>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-validation class="ic-input-validation-error" for="test-id" message="validation message" status="error">
      <span class="icon-error status-icon">
        svg
      </span>
      <ic-typography class="statustext" variant="caption">
        <span aria-live="polite" id="test-id-validation-text">
          validation message
        </span>
      </ic-typography>
    </ic-input-validation>
    `);
  });

  it("should render with full width", async () => {
    const page = await newSpecPage({
      components: [InputValidation],
      html: `<ic-input-validation for="test-id" message="validation message" full-width=true></ic-input-validation>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-validation for="test-id" class="ic-input-validation-full-width" full-width="true" message="validation message">
      <ic-typography class="statustext" variant="caption">
        <span aria-live="polite" id="test-id-validation-text">
          validation message
        </span>
      </ic-typography>
    </ic-input-validation>
    `);
  });
});
