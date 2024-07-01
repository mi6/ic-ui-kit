import { InputLabel } from "../../ic-input-label";
import { newSpecPage } from "@stencil/core/testing";

describe("ic-input-label", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [InputLabel],
      html: `<ic-input-label for="test-input-id" label="Test label"></ic-input-label>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-label for="test-input-id" label="Test label">
      <ic-typography variant="label">
        <label htmlfor="test-input-id">
          Test label
        </label>
      </ic-typography>
    </ic-input-label>
    `);
  });

  it("should render required variant", async () => {
    const page = await newSpecPage({
      components: [InputLabel],
      html: `<ic-input-label for="test-input-id" label="Test label" required=true></ic-input-label>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-label for="test-input-id" label="Test label" required="true">
      <ic-typography variant="label">
        <label htmlfor="test-input-id">
          Test label *
        </label>
      </ic-typography>
    </ic-input-label>
    `);
  });

  it("should render disabled variant", async () => {
    const page = await newSpecPage({
      components: [InputLabel],
      html: `<ic-input-label for="test-input-id" label="Test label" required=true disabled=true></ic-input-label>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-label class="disabled" disabled="true" for="test-input-id" label="Test label" required="true">
      <ic-typography variant="label">
        <label htmlfor="test-input-id">
          Test label *
        </label>
      </ic-typography>
    </ic-input-label>
    `);
  });

  it("should render readonly variant", async () => {
    const page = await newSpecPage({
      components: [InputLabel],
      html: `<ic-input-label for="test-input-id" label="Test label" required=true readonly=true></ic-input-label>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-label class="readonly" for="test-input-id" label="Test label" readonly="true" required="true">
      <ic-typography class="readonly-label" variant="label">
        Test label *
      </ic-typography>
    </ic-input-label>
    `);
  });

  it("should render error variant", async () => {
    const page = await newSpecPage({
      components: [InputLabel],
      html: `<ic-input-label for="test-input-id" label="Test label" status="error"></ic-input-label>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-label status="error" for="test-input-id" label="Test label">
      <ic-typography class="error-label" variant="label">
        <label htmlfor="test-input-id">
          Test label
        </label>
      </ic-typography>
    </ic-input-label>
    `);
  });

  it("should render with helpertext", async () => {
    const page = await newSpecPage({
      components: [InputLabel],
      html: `<ic-input-label for="test-input-id" label="Test label" required=true helper-text="Some helper text"></ic-input-label>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-label class="with-helper" for="test-input-id" helper-text="Some helper text" label="Test label" required="true">
      <ic-typography variant="label">
        <label htmlfor="test-input-id">
          Test label *
        </label>
      </ic-typography>
      <ic-typography class="helpertext helpertext-normal" variant="caption">
        <span id="test-input-id-helper-text">
          Some helper text
        </span>
      </ic-typography>
    </ic-input-label>
    `);
  });
});
