import { newSpecPage } from "@stencil/core/testing";
import { Step } from "./ic-step";
import { Typography } from "../ic-typography/ic-typography";

describe("ic-step component", () => {
  it("should render basic step with no title", async () => {
    const page = await newSpecPage({
      components: [Step, Typography],
      html: `<ic-step></ic-step>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-step aria-label="Step undefined" role="listitem">
        <mock:shadow-root>
          <div class="active step">
            <div class="step-top">
              <div class="step-icon">
                <ic-typography class="ic-typography-subtitle-small">
                  <mock:shadow-root>
                    <slot></slot>
                  </mock:shadow-root>
                  <span aria-hidden="true" class="step-icon-inner"></span>
                </ic-typography>
              </div>
              <div class="step-connect"></div>
            </div>
          </div>
        </mock:shadow-root>
      </ic-step>`);
  });
  it("should render step with correct title", async () => {
    const page = await newSpecPage({
      components: [Step, Typography],
      html: `<ic-step step-title="First"></ic-step>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-step aria-label="Step undefined" role="listitem" step-title="First">
      <mock:shadow-root>
        <div class="active step">
          <div class="step-top">
            <div class="step-icon">
              <ic-typography class="ic-typography-subtitle-small">
                <mock:shadow-root>
                  <slot></slot>
                </mock:shadow-root>
                <span aria-hidden="true" class="step-icon-inner"></span>
              </ic-typography>
            </div>
            <div class="step-connect"></div>
          </div>
          <div class="step-title-area">
            <ic-typography class="ic-typography-subtitle-large step-title">
              <mock:shadow-root>
                <slot></slot>
              </mock:shadow-root>
              First
            </ic-typography>
          </div>
        </div>
      </mock:shadow-root>
    </ic-step>`);
  });

  it("should render full step with correct title, subtitle and current state", async () => {
    const page = await newSpecPage({
      components: [Step, Typography],
      html: `<ic-step
      step-title="Second With a Very Long Title"
      step-subtitle="Optional Subtitle"
      step-type="current"
    ></ic-step>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-step aria-current="step" aria-label="Step undefined" role="listitem" step-subtitle="Optional Subtitle" step-title="Second With a Very Long Title" step-type="current">
        <mock:shadow-root>
          <div class="current step">
            <div class="step-top">
              <div class="step-icon">
                <ic-typography class="ic-typography-subtitle-small">
                  <mock:shadow-root>
                    <slot></slot>
                  </mock:shadow-root>
                  <span aria-hidden="true" class="step-icon-inner"></span>
                </ic-typography>
              </div>
              <div class="step-connect">
                <div class="step-connect-inner"></div>
              </div>
            </div>
            <div class="step-title-area">
              <ic-typography class="ic-typography-subtitle-large step-title">
                <mock:shadow-root>
                  <slot></slot>
                </mock:shadow-root>
                Second With a Very Long Title
              </ic-typography>
              <ic-typography class="ic-typography-caption step-subtitle">
                <mock:shadow-root>
                  <slot></slot>
                </mock:shadow-root>
                Optional Subtitle
              </ic-typography>
            </div>
          </div>
        </mock:shadow-root>
      </ic-step>`);
  });

  it("should render disabled stepType", async () => {
    const page = await newSpecPage({
      components: [Step, Typography],
      html: `<ic-step
      step-type="disabled"
    ></ic-step>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-step aria-label="Step undefined. Disabled step" role="listitem" step-type="disabled">
        <mock:shadow-root>
          <div class="disabled step">
            <div class="step-top">
              <div class="step-icon">
                <ic-typography class="ic-typography-subtitle-small">
                  <mock:shadow-root>
                    <slot></slot>
                  </mock:shadow-root>
                  <span aria-hidden="true" class="step-icon-inner"></span>
                </ic-typography>
              </div>
              <div class="step-connect"></div>
            </div>
          </div>
        </mock:shadow-root>
      </ic-step>`);
  });

  it("should render completed stepType", async () => {
    const page = await newSpecPage({
      components: [Step, Typography],
      html: `<ic-step
      step-type="completed"
    ></ic-step>`,
    });

    expect(page.root).toEqualHtml(`
        <ic-step aria-label="Step undefined. Completed step" role="listitem" step-type="completed">
          <mock:shadow-root>
            <div class="completed step">
              <div class="step-top">
                <div class="step-icon">
                  <div aria-hidden="true" class="step-icon-inner">
                    <span class="check-icon">
                      svg
                    </span>
                  </div>
                </div>
                <div class="step-connect"></div>
              </div>
            </div>
          </mock:shadow-root>
      </ic-step>`);
  });
});
