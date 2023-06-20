import { newSpecPage } from "@stencil/core/testing";
import { DataRow } from "../../ic-data-row";

describe("ic-data-row", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [DataRow],
      html: `<ic-data-row label="label" value="value"></ic-data-row>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-data-row label="label" role="listitem" value="value">
      <mock:shadow-root>
        <div class="data">
          <div class="text-cells">
            <div class="label">
              <slot name="label">
                <ic-typography variant="subtitle-large">
                  label
                </ic-typography>
              </slot>
            </div>
            <div class="value">
              <slot name="value">
                <ic-typography variant="body">
                  value
                </ic-typography>
              </slot>
            </div>
          </div>
        </div>
        <div class="divider"></div>
      </mock:shadow-root>
    </ic-data-row>`);
  });

  it("should render slotted content in the label slot", async () => {
    const page = await newSpecPage({
      components: [DataRow],
      html: `<ic-data-row value="value"><ic-typography slot="label">Label</ic-typography></ic-data-row>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-data-row role="listitem" value="value">
      <mock:shadow-root>
        <div class="data">
          <div class="text-cells">
            <div class="label">
              <slot name="label">
                <ic-typography variant="subtitle-large"></ic-typography>
              </slot>
            </div>
            <div class="value">
              <slot name="value">
                <ic-typography variant="body">
                  value
                </ic-typography>
              </slot>
            </div>
          </div>
        </div>
        <div class="divider"></div>
      </mock:shadow-root>
      <ic-typography slot="label">
        Label
      </ic-typography>
    </ic-data-row>`);
  });

  it("should render slotted content in the value slot", async () => {
    const page = await newSpecPage({
      components: [DataRow],
      html: `<ic-data-row label="label"><ic-status-tag variant="success" label="success" slot="value"></ic-status-tag></ic-data-row>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-data-row role="listitem" label="label">
      <mock:shadow-root>
        <div class="data">
          <div class="text-cells">
            <div class="label">
              <slot name="label">
                <ic-typography variant="subtitle-large">
                  label
                </ic-typography>
              </slot>
            </div>
            <div class="value">
              <slot name="value">
                <ic-typography variant="body"></ic-typography>
              </slot>
            </div>
          </div>
        </div>
        <div class="divider"></div>
      </mock:shadow-root>
      <ic-status-tag variant="success" label="success" slot="value"></ic-status-tag>
    </ic-data-row>`);
  });

  it("should render slotted content in the end-component slot", async () => {
    const page = await newSpecPage({
      components: [DataRow],
      html: `<ic-data-row label="label" value="test value"><ic-status-tag variant="success" label="success" slot="end-component"></ic-status-tag></ic-data-row>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-data-row role="listitem" label="label" value="test value">
      <mock:shadow-root>
        <div class="data">
          <div class="text-cells">
            <div class="label">
              <slot name="label">
                <ic-typography variant="subtitle-large">
                  label
                </ic-typography>
              </slot>
            </div>
            <div class="value">
              <slot name="value">
                <ic-typography variant="body">test value</ic-typography>
              </slot>
            </div>
          </div>
          <div class="end-component">
            <div role="cell">
              <slot aria-label="for label row" name="end-component"></slot>
            </div>
          </div>
        </div>
        <div class="divider"></div>
      </mock:shadow-root>
      <ic-status-tag variant="success" label="success" slot="end-component"></ic-status-tag>
    </ic-data-row>`);
  });

  it("should render the label variant of typography when entity size is xs", async () => {
    const page = await newSpecPage({
      components: [DataRow],
      html: `<ic-data-row label="label"><ic-status-tag variant="success" label="success" slot="value"></ic-status-tag></ic-data-row>`,
    });

    page.rootInstance.entitySize = "xs";
    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
    <ic-data-row class="breakpoint-xs" role="listitem" label="label">
      <mock:shadow-root>
        <div class="data">
          <div class="text-cells">
            <div class="label">
              <slot name="label">
                <ic-typography variant="label">
                  label
                </ic-typography>
              </slot>
            </div>
            <div class="value">
              <slot name="value">
                <ic-typography variant="body"></ic-typography>
              </slot>
            </div>
          </div>
        </div>
        <div class="divider"></div>
      </mock:shadow-root>
      <ic-status-tag variant="success" label="success" slot="value"></ic-status-tag>
    </ic-data-row>`);
  });

  it("should call runResizeObserver", async () => {
    const page = await newSpecPage({
      components: [DataRow],
      html: `<ic-data-row label="label" value="value"></ic-data-row>`,
    });

    await page.rootInstance.runResizeObserver();
    page.waitForChanges();

    const resize = new ResizeObserver(() => {
      page.rootInstance.checkLabelAbove();
    });

    expect(page.rootInstance.resizeObserver).toBe(resize);

    page.setContent("");
  });

  it("should change entity size depending on screen size", async () => {
    const page = await newSpecPage({
      components: [DataRow],
      html: `<ic-data-row label="label" value="value"></ic-data-row>`,
    });

    Object.defineProperty(
      page.root.shadowRoot.querySelector(".data"),
      "clientWidth",
      {
        value: 200,
      }
    );

    page.waitForChanges();

    page.rootInstance.checkLabelAbove();

    expect(page.rootInstance.entitySize).toBe("xs");
  });
});
