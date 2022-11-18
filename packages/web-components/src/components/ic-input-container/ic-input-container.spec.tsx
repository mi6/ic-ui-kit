import { InputContainer } from "./ic-input-container";
import { newSpecPage } from "@stencil/core/testing";

describe("ic-input-container", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [InputContainer],
      html: `<ic-input-container></ic-input-container>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-container>
      <div class="component-container"></div>
    </ic-input-container>
    `);
  });

  it("renders disabled", async () => {
    const page = await newSpecPage({
      components: [InputContainer],
      html: `<ic-input-container disabled=true></ic-input-container>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-input-container disabled="true">
        <div class="component-container disabled"></div>
      </ic-input-container>
    `);
  });

  it("renders readonly", async () => {
    const page = await newSpecPage({
      components: [InputContainer],
      html: `<ic-input-container readonly=true></ic-input-container>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-input-container readonly="true">
        <div class="component-container readonly"></div>
      </ic-input-container>
    `);
  });
});
