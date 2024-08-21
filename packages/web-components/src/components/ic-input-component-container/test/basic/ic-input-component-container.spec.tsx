import { InputComponentContainer } from "../../ic-input-component-container";
import { newSpecPage } from "@stencil/core/testing";

describe("ic-input-component-container", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [InputComponentContainer],
      html: `<ic-input-component-container>content</ic-input-component-container>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-component-container class="ic-input-component-container-medium">
      <div class="focus-indicator">
        content
      </div>
    </ic-input-component-container>
    `);
  });

  it("should render with validation status", async () => {
    const page = await newSpecPage({
      components: [InputComponentContainer],
      html: `<ic-input-component-container validation-status="success">content</ic-input-component-container>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-component-container class="ic-input-component-container-medium ic-input-component-container-success" validation-status="success">
      <div class="focus-indicator">
        content
      </div>
    </ic-input-component-container> 
    `);
  });

  it("should render with validation inline", async () => {
    const page = await newSpecPage({
      components: [InputComponentContainer],
      html: `<ic-input-component-container validation-status="success" validation-inline=true>content</ic-input-component-container>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-component-container class="ic-input-component-container-medium ic-input-component-container-success" validation-inline="true" validation-status="success">
      <div class="focus-indicator">
        content
        <span class="inline-success">
          svg
        </span>
      </div>
    </ic-input-component-container>
    `);
  });

  it("should ignore validation inline if not success", async () => {
    const page = await newSpecPage({
      components: [InputComponentContainer],
      html: `<ic-input-component-container validation-status="error" validation-inline=true>content</ic-input-component-container>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-component-container class="ic-input-component-container-error ic-input-component-container-medium" validation-inline="true" validation-status="error">
      <div class="focus-indicator">
        content
      </div>
    </ic-input-component-container>
    `);
  });

  it("should render with size small, multiline & fullwidth props set", async () => {
    const page = await newSpecPage({
      components: [InputComponentContainer],
      html: `<ic-input-component-container size="small" multi-line=true full-width=true>content</ic-input-component-container>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-component-container class="ic-input-component-container-small ic-input-component-container-full-width ic-input-component-container-multiline" full-width="true" multi-line="true" size="small">
      <div class="focus-indicator">
        content
      </div>
    </ic-input-component-container>
    `);
  });

  it("should render with size large", async () => {
    const page = await newSpecPage({
      components: [InputComponentContainer],
      html: `<ic-input-component-container size=large>content</ic-input-component-container>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-component-container class="ic-input-component-container-large" size="large">
      <div class="focus-indicator">
        content
      </div>
    </ic-input-component-container>
    `);
  });

  it("should render disabled", async () => {
    const page = await newSpecPage({
      components: [InputComponentContainer],
      html: `<ic-input-component-container validation-status="success" disabled=true>content</ic-input-component-container>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-component-container aria-disabled="true" class="ic-input-component-container-disabled ic-input-component-container-medium" disabled="true" validation-status="success">
      <div class="focus-indicator">
        content
      </div>
    </ic-input-component-container>
    `);
  });

  it("should render readonly", async () => {
    const page = await newSpecPage({
      components: [InputComponentContainer],
      html: `<ic-input-component-container validation-status="success" readonly=true>content</ic-input-component-container>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-input-component-container class="ic-input-component-container-medium ic-input-component-container-readonly" readonly="true" validation-status="success">
        <div class="focus-indicator">
          content
        </div>
      </ic-input-component-container>
    `);
  });

  it("should render with slotted content", async () => {
    const page = await newSpecPage({
      components: [InputComponentContainer],
      html: `<ic-input-component-container validation-status="success" disabled=true><span slot="left-icon">slotted content</span>content</ic-input-component-container>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-component-container aria-disabled="true" class="ic-input-component-container-disabled ic-input-component-container-medium" disabled="true" validation-status="success">
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

  it("should test rendering icon after initial render", async () => {
    const page = await newSpecPage({
      components: [InputComponentContainer],
      html: `<ic-input-component-container>content</ic-input-component-container>`,
    });

    const icon = document.createElement("svg");
    icon.setAttribute("slot", "left-icon");

    page.rootInstance.hostMutationCallback([
      {
        type: "childList",
        addedNodes: [icon],
        removedNodes: [],
      },
    ]);
  });
});
