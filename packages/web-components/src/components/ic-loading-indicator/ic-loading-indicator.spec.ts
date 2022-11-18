import { newSpecPage } from "@stencil/core/testing";
import { LoadingIndicator } from "./ic-loading-indicator";
import { Typography } from "../ic-typography/ic-typography";
import { waitForTimeout } from "../../testspec.setup";

describe("ic-loading-indicator component", () => {
  it("should render an indeterminate loading indicator with the correct label and set aria-labelledby", async () => {
    const page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator label="IC Loading Indicator Test"></ic-loading-indicator>`,
    });

    expect(page.root)
      .toEqualHtml(`<ic-loading-indicator label="IC Loading Indicator Test" size="default" type="circular">
    <mock:shadow-root>
      <div class="ic-loading-container">
        <div aria-label="Loading" aria-labelledby="ic-loading-label" aria-valuemax="100" aria-valuemin="0" class="ic-loading-circular-outer indeterminate" role="progressbar">
          <div class="ic-loading-circular-inner"></div>
        </div>
        <ic-typography class="ic-loading-label ic-typography-h4" id="ic-loading-label" role="status">
          <mock:shadow-root>
            <slot></slot>
          </mock:shadow-root>
          <p>
            IC Loading Indicator Test
          </p>
        </ic-typography>
      </div>
    </mock:shadow-root>
  </ic-loading-indicator>`);
  });

  it("should render a determinate loading indicator with the correct label and aria", async () => {
    const page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator progress="30" label="IC Loading Indicator Test"></ic-loading-indicator>`,
    });

    expect(page.root)
      .toEqualHtml(`<ic-loading-indicator label="IC Loading Indicator Test" progress="30" size="default" type="circular">
    <mock:shadow-root>
      <div class="ic-loading-container">
        <div aria-label="Loading" aria-labelledby="ic-loading-label" aria-valuemax="100" aria-valuemin="0" aria-valuenow="30" class="ic-loading-circular-outer determinate" role="progressbar">
          <div class="clip ic-loading-circular-inner" style="--circular-rotation: 108deg; --linear-width: 30%;">
            <div class="left"></div>
            <div class="right"></div>
          </div>
        </div>
        <ic-typography class="ic-loading-label ic-typography-h4" id="ic-loading-label" role="status">
          <mock:shadow-root>
            <slot></slot>
          </mock:shadow-root>
          <p>
            IC Loading Indicator Test
          </p>
        </ic-typography>
      </div>
    </mock:shadow-root>
  </ic-loading-indicator>`);
  });

  it("should not display a label is the size is 'icon'", async () => {
    const page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator label="IC Loading Indicator Test" size="icon"></ic-loading-indicator>`,
    });

    expect(page.root)
      .toEqualHtml(`<ic-loading-indicator label="IC Loading Indicator Test" size="icon" type="circular">
    <mock:shadow-root>
      <div class="ic-loading-container">
        <div aria-label="Loading" aria-valuemax="100" aria-valuemin="0" class="ic-loading-circular-outer indeterminate" role="progressbar">
          <div class="ic-loading-circular-inner"></div>
        </div>
      </div>
    </mock:shadow-root>
  </ic-loading-indicator>`);
  });

  it("should set the typography variant for the label to 'label' for the 'small' size", async () => {
    const page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator label="IC Loading Indicator Test" size="small"></ic-loading-indicator>`,
    });

    expect(page.root)
      .toEqualHtml(`<ic-loading-indicator label="IC Loading Indicator Test" size="small" type="circular">
    <mock:shadow-root>
      <div class="ic-loading-container">
        <div aria-label="Loading" aria-labelledby="ic-loading-label" aria-valuemax="100" aria-valuemin="0" class="ic-loading-circular-outer indeterminate" role="progressbar">
          <div class="ic-loading-circular-inner"></div>
        </div>
        <ic-typography class="ic-loading-label ic-typography-label" id="ic-loading-label" role="status">
          <mock:shadow-root>
            <slot></slot>
          </mock:shadow-root>
          <p>
            IC Loading Indicator Test
          </p>
        </ic-typography>
      </div>
    </mock:shadow-root>
  </ic-loading-indicator>`);
  });

  it("should set the typography variant for the label to 'h4' for the 'default' size", async () => {
    const page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator label="IC Loading Indicator Test"></ic-loading-indicator>`,
    });

    expect(page.root)
      .toEqualHtml(`<ic-loading-indicator label="IC Loading Indicator Test" size="default" type="circular">
    <mock:shadow-root>
      <div class="ic-loading-container">
        <div aria-label="Loading" aria-labelledby="ic-loading-label" aria-valuemax="100" aria-valuemin="0" class="ic-loading-circular-outer indeterminate" role="progressbar">
          <div class="ic-loading-circular-inner"></div>
        </div>
        <ic-typography class="ic-loading-label ic-typography-h4" id="ic-loading-label" role="status">
          <mock:shadow-root>
            <slot></slot>
          </mock:shadow-root>
          <p>
            IC Loading Indicator Test
          </p>
        </ic-typography>
      </div>
    </mock:shadow-root>
  </ic-loading-indicator>`);
  });

  it("should set the typography variant for the label to 'h2' for the 'large' size", async () => {
    const page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator label="IC Loading Indicator Test" size="large"></ic-loading-indicator>`,
    });

    expect(page.root)
      .toEqualHtml(`<ic-loading-indicator label="IC Loading Indicator Test" size="large" type="circular">
    <mock:shadow-root>
      <div class="ic-loading-container">
        <div aria-label="Loading" aria-labelledby="ic-loading-label" aria-valuemax="100" aria-valuemin="0" class="ic-loading-circular-outer indeterminate" role="progressbar">
          <div class="ic-loading-circular-inner"></div>
        </div>
        <ic-typography class="ic-loading-label ic-typography-h2" id="ic-loading-label" role="status">
          <mock:shadow-root>
            <slot></slot>
          </mock:shadow-root>
          <p>
            IC Loading Indicator Test
          </p>
        </ic-typography>
      </div>
    </mock:shadow-root>
  </ic-loading-indicator>`);
  });

  it("should apply the description prop as an aria-label", async () => {
    const page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator description="IC Loading Indicator Test"></ic-loading-indicator>`,
    });

    expect(page.root)
      .toEqualHtml(`<ic-loading-indicator description="IC Loading Indicator Test" size="default" type="circular">
    <mock:shadow-root>
      <div class="ic-loading-container">
        <div aria-label="IC Loading Indicator Test" aria-valuemax="100" aria-valuemin="0" class="ic-loading-circular-outer indeterminate" role="progressbar">
          <div class="ic-loading-circular-inner"></div>
        </div>
      </div>
    </mock:shadow-root>
  </ic-loading-indicator>`);
  });

  it("should be styled correctly by setting the class names for the chosen indicator type", async () => {
    const page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator type="linear"></ic-loading-indicator>`,
    });

    expect(page.root)
      .toEqualHtml(`<ic-loading-indicator size="default" type="linear">
    <mock:shadow-root>
      <div class="ic-loading-container">
        <div aria-label="Loading" aria-valuemax="100" aria-valuemin="0" class="ic-loading-linear-outer indeterminate" role="progressbar">
          <div class="ic-loading-linear-inner"></div>
        </div>
      </div>
    </mock:shadow-root>
  </ic-loading-indicator>`);
  });

  it("should set the correct aria if min and max are provided", async () => {
    const page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator progress="30" min="10" max="50"></ic-loading-indicator>`,
    });

    expect(page.root)
      .toEqualHtml(`<ic-loading-indicator max="50" min="10" progress="30" size="default" type="circular">
    <mock:shadow-root>
      <div class="ic-loading-container">
        <div aria-label="Loading" aria-valuemax="50" aria-valuemin="10" aria-valuenow="30" class="ic-loading-circular-outer determinate" role="progressbar">
          <div class="clip ic-loading-circular-inner" style="--circular-rotation: 180deg; --linear-width: 50%;">
            <div class="left"></div>
            <div class="right"></div>
          </div>
        </div>
      </div>
    </mock:shadow-root>
  </ic-loading-indicator>`);
  });

  it("should update label after label-duration passed", async () => {
    const page = await newSpecPage({
      components: [LoadingIndicator, Typography],
      html: `<ic-loading-indicator label="waiting/still waiting" label-duration="2000"></ic-loading-indicator>`,
    });

    expect(page.rootInstance.indicatorLabel).toEqual("waiting");

    await waitForTimeout(2001);
    await page.waitForChanges();

    expect(page.rootInstance.indicatorLabel).toEqual("still waiting");
  });
});
