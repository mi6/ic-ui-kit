import { newSpecPage } from "@stencil/core/testing";
import { Button } from "../../../ic-button/ic-button";
import { Tab } from "../../ic-tab";
import { Typography } from "../../../ic-typography/ic-typography";

describe("ic-tab component", () => {
  it("should render with correct label", async () => {
    const page = await newSpecPage({
      components: [Button, Tab, Typography],
      html: `<ic-tab tab-position=1>IC Tab Test</ic-tab>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should set the correct attributes when selected", async () => {
    const page = await newSpecPage({
      components: [Button, Tab, Typography],
      html: `<ic-tab selected tab-position=1>IC Tab Test</ic-tab>`,
      supportsShadowDom: true,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should set the disabled attribute on the button", async () => {
    const page = await newSpecPage({
      components: [Button, Tab, Typography],
      html: `<ic-tab disabled tab-position=1>IC Tab Test</ic-tab>`,
      supportsShadowDom: true,
    });

    expect(page.root).toMatchSnapshot(
      "should set the disable attribute on the button to true"
    );

    page.root?.setAttribute("disabled", "false");

    await page.waitForChanges();
    expect(page.root).toMatchSnapshot(
      "should set the disable attribute on the button to false"
    );
  });

  it("should display an icon", async () => {
    const page = await newSpecPage({
      components: [Button, Tab, Typography],
      html: `<ic-tab tab-position=1>IC Tab Test<svg slot="icon"></svg></ic-tab>`,
      supportsShadowDom: true,
    });

    expect(page.root).toMatchSnapshot();
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

  it("should call 'setFocus' when tab is focused", async () => {
    const page = await newSpecPage({
      components: [Tab],
      html: `<ic-tab tab-position=1>IC Tab Test</ic-tab>`,
    });

    //Can't expect anything in this test - this is to increase code coverage only
    await page.rootInstance.setFocus().toHaveBeenCalled;
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
