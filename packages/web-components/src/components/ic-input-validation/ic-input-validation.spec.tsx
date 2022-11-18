import { InputValidation } from "./ic-input-validation";
import { newSpecPage } from "@stencil/core/testing";

describe("ic-input-validation", () => {
  it("renders", async () => {
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

  it("renders with success status", async () => {
    const page = await newSpecPage({
      components: [InputValidation],
      html: `<ic-input-validation for="test-id" message="validation message" status="success"></ic-input-validation>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-validation class="success" for="test-id" message="validation message" status="success">
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

  it("renders with warning status", async () => {
    const page = await newSpecPage({
      components: [InputValidation],
      html: `<ic-input-validation for="test-id" message="validation message" status="warning"></ic-input-validation>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-validation class="warning" for="test-id" message="validation message" status="warning">
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

  it("renders with error status", async () => {
    const page = await newSpecPage({
      components: [InputValidation],
      html: `<ic-input-validation for="test-id" message="validation message" status="error"></ic-input-validation>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-validation class="error" for="test-id" message="validation message" status="error">
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

  it("renders with full width", async () => {
    const page = await newSpecPage({
      components: [InputValidation],
      html: `<ic-input-validation for="test-id" message="validation message" full-width=true></ic-input-validation>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-validation for="test-id" class="fullwidth" full-width="true" message="validation message">
      <ic-typography class="statustext" variant="caption">
        <span aria-live="polite" id="test-id-validation-text">
          validation message
        </span>
      </ic-typography>
    </ic-input-validation>
    `);
  });
});
