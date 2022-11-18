import { InputComponentContainer } from "./ic-input-component-container";
import { newSpecPage } from "@stencil/core/testing";

describe("ic-input-component-container", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [InputComponentContainer],
      html: `<ic-input-component-container>content</ic-input-component-container>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-component-container>
      <div class="focus-indicator">
        content
      </div>
    </ic-input-component-container>
    `);
  });

  it("renders with validation status", async () => {
    const page = await newSpecPage({
      components: [InputComponentContainer],
      html: `<ic-input-component-container validation-status="success">content</ic-input-component-container>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-component-container validation-status="success" class="success">
      <div class="focus-indicator">
        content
      </div>
    </ic-input-component-container> 
    `);
  });

  it("renders with validation inline", async () => {
    const page = await newSpecPage({
      components: [InputComponentContainer],
      html: `<ic-input-component-container validation-status="success" validation-inline=true>content</ic-input-component-container>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-component-container class="success" validation-inline="true" validation-status="success">
      <div class="focus-indicator">
        content
        <span class="inline-success">
          svg
        </span>
      </div>
    </ic-input-component-container>
    `);
  });

  it("ignores validation inline if not success", async () => {
    const page = await newSpecPage({
      components: [InputComponentContainer],
      html: `<ic-input-component-container validation-status="error" validation-inline=true>content</ic-input-component-container>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-component-container class="error" validation-inline="true" validation-status="error">
      <div class="focus-indicator">
        content
      </div>
    </ic-input-component-container>
    `);
  });

  it("renders with small, multiline & fullwidth props set", async () => {
    const page = await newSpecPage({
      components: [InputComponentContainer],
      html: `<ic-input-component-container small=true multi-line=true full-width=true>content</ic-input-component-container>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-component-container class="small fullwidth multiline" small="true" full-width="true" multi-line="true">
      <div class="focus-indicator">
        content
      </div>
    </ic-input-component-container>
    `);
  });

  it("renders disabled", async () => {
    const page = await newSpecPage({
      components: [InputComponentContainer],
      html: `<ic-input-component-container validation-status="success" disabled=true>content</ic-input-component-container>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-component-container validation-status="success" class="disabled" disabled="true">
      <div class="focus-indicator">
        content
      </div>
    </ic-input-component-container>
    `);
  });

  it("renders readonly", async () => {
    const page = await newSpecPage({
      components: [InputComponentContainer],
      html: `<ic-input-component-container validation-status="success" readonly=true>content</ic-input-component-container>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-input-component-container class="readonly" readonly="true" validation-status="success">
        <div class="focus-indicator">
          content
        </div>
      </ic-input-component-container>
    `);
  });

  it("renders with slotted content", async () => {
    const page = await newSpecPage({
      components: [InputComponentContainer],
      html: `<ic-input-component-container validation-status="success" disabled=true><span slot="left-icon">slotted content</span>content</ic-input-component-container>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-component-container class="disabled" disabled="true" validation-status="success">
      <div class="focus-indicator">
        <div class="icon-container">
          <span slot="left-icon">
            slotted content
          </span>
        </div>
        content
      </div>
    </ic-input-component-container>
    `);
  });
});
