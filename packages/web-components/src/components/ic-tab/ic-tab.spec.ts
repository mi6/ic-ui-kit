import { newSpecPage } from "@stencil/core/testing";
import { Button } from "../ic-button/ic-button";
import { Tab } from "./ic-tab";
import { Typography } from "../ic-typography/ic-typography";

describe("ic-tab component", () => {
  it("should render with correct label", async () => {
    const page = await newSpecPage({
      components: [Button, Tab, Typography],
      html: `<ic-tab tab-position=1>IC Tab Test</ic-tab>`,
    });

    expect(page.root)
      .toEqualHtml(`<ic-tab aria-disabled="false" aria-selected="false" context-id="default" role="tab" tabindex="-1" tab-position="1">
    <mock:shadow-root>
      <ic-typography class="ic-tab-label ic-typography-label">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
        <span>
          <slot></slot>
        </span>
      </ic-typography>
    </mock:shadow-root>
    IC Tab Test
  </ic-tab>`);
  });

  it("should set the correct attributes when selected", async () => {
    const page = await newSpecPage({
      components: [Button, Tab, Typography],
      html: `<ic-tab selected tab-position=1>IC Tab Test</ic-tab>`,
      supportsShadowDom: true,
    });

    expect(page.root)
      .toEqualHtml(`<ic-tab aria-disabled="false" aria-selected="true" context-id="default" role="tab" selected="" tabindex="0" tab-position="1">
    <mock:shadow-root>
      <ic-typography class="ic-tab-label ic-typography-label">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
        <span>
          <slot></slot>
        </span>
      </ic-typography>
    </mock:shadow-root>
    IC Tab Test
  </ic-tab>`);
  });

  it("should set the disabled attribute on the button", async () => {
    const page = await newSpecPage({
      components: [Button, Tab, Typography],
      html: `<ic-tab disabled tab-position=1>IC Tab Test</ic-tab>`,
      supportsShadowDom: true,
    });

    expect(page.root)
      .toEqualHtml(`<ic-tab aria-disabled="true" aria-selected="false" context-id="default" disabled="" role="tab" tabindex="-1" tab-position="1">
    <mock:shadow-root>
      <ic-typography class="ic-tab-label ic-typography-label">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
        <span>
          <slot></slot>
        </span>
      </ic-typography>
    </mock:shadow-root>
    IC Tab Test
  </ic-tab>`);
  });

  it("should display an icon", async () => {
    const page = await newSpecPage({
      components: [Button, Tab, Typography],
      html: `<ic-tab tab-position=1>IC Tab Test<svg slot="icon"></svg></ic-tab>`,
      supportsShadowDom: true,
    });

    expect(page.root)
      .toEqualHtml(`<ic-tab aria-disabled="false" aria-selected="false" context-id="default" role="tab" tabindex="-1" tab-position="1">
    <mock:shadow-root>
    <slot name="icon"></slot>
      <ic-typography class="ic-tab-label ic-typography-label">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
        <span>
          <slot></slot>
        </span>
      </ic-typography>
    </mock:shadow-root>
    IC Tab Test
    <svg slot="icon"></svg>
  </ic-tab>`);
  });

  it("should set focus to true on mouse down", async () => {
    const page = await newSpecPage({
      components: [Button, Tab, Typography],
      html: `<ic-tab tab-position=1>IC Tab Test</ic-tab>`,
      supportsShadowDom: true,
    });

    page.rootInstance.handleMouseDown();
    page.waitForChanges();

    expect(page.rootInstance.focusFromClick).toBe(true);
  });

  it("should set isInitialRender to false on component update", async () => {
    const page = await newSpecPage({
      components: [Button, Tab, Typography],
      html: `<ic-tab tab-position=1>IC Tab Test</ic-tab>`,
      supportsShadowDom: true,
    });

    page.rootInstance.componentDidUpdate();
    page.waitForChanges();

    expect(page.rootInstance.isInitialRender).toBe(false);
  });

  it("should emit tabFocus on handleFocus", async () => {
    const page = await newSpecPage({
      components: [Button, Tab, Typography],
      html: `<ic-tab tab-position=1>IC Tab Test</ic-tab>`,
      supportsShadowDom: true,
    });

    const callbackFn = jest.fn();
    page.doc.addEventListener("tabFocus", callbackFn);
    page.rootInstance.handleFocus();
    page.waitForChanges();

    expect(callbackFn).toHaveBeenCalled();
  });

  it("should emit tabClick on handleClick", async () => {
    const page = await newSpecPage({
      components: [Button, Tab, Typography],
      html: `<ic-tab tab-position=1>IC Tab Test</ic-tab>`,
      supportsShadowDom: true,
    });

    const callbackFn = jest.fn();
    page.doc.addEventListener("tabClick", callbackFn);
    page.rootInstance.handleClick();
    page.waitForChanges();

    expect(callbackFn).toHaveBeenCalled();
  });

  it("should emit tabFocus on handleClick when focusFromClick is true", async () => {
    const page = await newSpecPage({
      components: [Button, Tab, Typography],
      html: `<ic-tab tab-position=1>IC Tab Test</ic-tab>`,
      supportsShadowDom: true,
    });

    page.rootInstance.focusFromClick = true;
    page.waitForChanges();

    const callbackFn = jest.fn();
    page.doc.addEventListener("tabFocus", callbackFn);
    page.rootInstance.handleClick();
    page.waitForChanges();

    expect(callbackFn).toHaveBeenCalled();
    expect(page.rootInstance.focusFromClick).toBe(false);
  });
});
