import { BreadcrumbGroup } from "./ic-breadcrumb-group";
import { newSpecPage } from "@stencil/core/testing";
import { Breadcrumb } from "../ic-breadcrumb/ic-breadcrumb";
import { DEVICE_SIZES } from "../../utils/helpers";
import * as helpers from "../../utils/helpers";

describe("ic-breadcrumb-group", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [BreadcrumbGroup],
      html: `<ic-breadcrumb-group></ic-breadcrumb-group>`,
    });

    expect(page.root).toMatchSnapshot("should render");
  });

  it("should render styling from props", async () => {
    const page = await newSpecPage({
      components: [BreadcrumbGroup],
      html: `<ic-breadcrumb-group collapsed="true" back-breadcrumb-only="true"></ic-breadcrumb-group>`,
    });

    expect(page.root).toMatchSnapshot("should render styling from props");
  });

  it("should render with ic-breadcrumb", async () => {
    const page = await newSpecPage({
      components: [BreadcrumbGroup, Breadcrumb],
      html: `<ic-breadcrumb-group><ic-breadcrumb></ic-breadcrumb></ic-breadcrumb-group>`,
    });

    expect(page.root).toMatchSnapshot("should render with ic-breadcrumb");
  });

  it("should render with collapse button", async () => {
    const page = await newSpecPage({
      components: [BreadcrumbGroup, Breadcrumb],
      html: `
        <ic-breadcrumb-group collapsed="true">
          <ic-breadcrumb page-title="Breadcrumb 1" href="/breadcrumb-1"></ic-breadcrumb>
          <ic-breadcrumb page-title="Breadcrumb 2" href="/breadcrumb-2"></ic-breadcrumb>
          <ic-breadcrumb current="true" page-title="Breadcrumb 3" href="/breadcrumb-3"></ic-breadcrumb>
        </ic-breadcrumb-group>`,
    });

    expect(page.root).toMatchSnapshot("should render with collapse button");
  });

  it("should set hasShadowDom", async () => {
    const page = await newSpecPage({
      components: [BreadcrumbGroup],
      html: `<ic-breadcrumb-group></ic-breadcrumb-group>`,
    });

    const element = page.root.shadowRoot.querySelector("nav");
    expect(helpers.hasShadowDom(element)).toBe(false);
  });

  it("should handle the hidden collapsed breadcrumbs", async () => {
    const page = await newSpecPage({
      components: [BreadcrumbGroup, Breadcrumb],
      html: `
        <ic-breadcrumb-group collapsed="true">
          <ic-breadcrumb page-title="Breadcrumb 1" href="/breadcrumb-1"></ic-breadcrumb>
          <ic-breadcrumb page-title="Breadcrumb 2" href="/breadcrumb-2"></ic-breadcrumb>
          <ic-breadcrumb current="true" page-title="Breadcrumb 3" href="/breadcrumb-3"></ic-breadcrumb>
        </ic-breadcrumb-group>`,
    });

    const collapsedEllipsis: HTMLElement =
      page.doc.getElementById("collapsed-ellipsis");
    collapsedEllipsis.click();

    page.waitForChanges();

    expect(page.root).toMatchSnapshot(
      "should handle the hidden collapsed breadcrumbs"
    );
  });

  it("should test collapsed behaviour on resize to small devices", async () => {
    const page = await newSpecPage({
      components: [BreadcrumbGroup, Breadcrumb],
      html: `<ic-breadcrumb-group collapsed="true">
      <ic-breadcrumb current="true" page-title="Breadcrumb 1" href="/breadcrumb-1"></ic-breadcrumb>
      <ic-breadcrumb page-title="Breadcrumb 2" href="/breadcrumb-2"></ic-breadcrumb>
      <ic-breadcrumb page-title="Breadcrumb 3" href="/breadcrumb-3"></ic-breadcrumb>
      <ic-breadcrumb page-title="Breadcrumb 4" href="/breadcrumb-4"></ic-breadcrumb>
      </ic-breadcrumb-group>`,
    });

    page.rootInstance.resizeObserverCallback(DEVICE_SIZES.S);

    expect(page.root).toMatchSnapshot(
      "should test collapsed behaviour on resize to small devices"
    );
  });

  it("should test behaviour on small devices", async () => {
    const page = await newSpecPage({
      components: [BreadcrumbGroup, Breadcrumb],
      html: `<ic-breadcrumb-group>
      <ic-breadcrumb page-title="Breadcrumb 1" href="/breadcrumb-1"></ic-breadcrumb>
      <ic-breadcrumb page-title="Breadcrumb 2" href="/breadcrumb-2"></ic-breadcrumb>
      <ic-breadcrumb current="true" page-title="Breadcrumb 3" href="/breadcrumb-3"></ic-breadcrumb>
      </ic-breadcrumb-group>`,
    });

    page.rootInstance.resizeObserverCallback(DEVICE_SIZES.S);

    expect(page.rootInstance.backBreadcrumbOnly).toBe(true);

    //call runResizeObserver
    await page.rootInstance.runResizeObserver();
  });

  it("should test behaviour on change to medium devices", async () => {
    const page = await newSpecPage({
      components: [BreadcrumbGroup, Breadcrumb],
      html: `<ic-breadcrumb-group collapsed="true">
          <ic-breadcrumb current="true" page-title="Breadcrumb 1" href="/breadcrumb-1"></ic-breadcrumb>
          <ic-breadcrumb page-title="Breadcrumb 2" href="/breadcrumb-2"></ic-breadcrumb>
          <ic-breadcrumb page-title="Breadcrumb 3" href="/breadcrumb-3"></ic-breadcrumb>
          <ic-breadcrumb page-title="Breadcrumb 4" href="/breadcrumb-4"></ic-breadcrumb>
      </ic-breadcrumb-group>`,
    });

    page.rootInstance.expandedBreadcrumbGroup = true;
    page.rootInstance.resizeObserverCallback(DEVICE_SIZES.S);

    page.rootInstance.resizeObserverCallback(DEVICE_SIZES.M);

    expect(page.rootInstance.backBreadcrumbOnly).toBe(false);

    //call runResizeObserver
    await page.rootInstance.runResizeObserver();
  });

  it("should return null for last parent breadcrumb when there is only 1 breadcrumb", async () => {
    const page = await newSpecPage({
      components: [BreadcrumbGroup, Breadcrumb],
      html: `<ic-breadcrumb-group>
          <ic-breadcrumb current="true" page-title="Breadcrumb 1" href="/breadcrumb-1"></ic-breadcrumb>
      </ic-breadcrumb-group>`,
    });

    expect(page.rootInstance.getLastParentBreadcrumb()).toBeNull();
  });

  //this test has to go last as it changes the device size
  it("should render collapse on already small devices", async () => {
    const myfunc = jest.fn().mockReturnValue(DEVICE_SIZES.S);
    Object.defineProperty(helpers, "getCurrentDeviceSize", {
      value: myfunc,
    });

    const page = await newSpecPage({
      components: [BreadcrumbGroup, Breadcrumb],
      html: `<ic-breadcrumb-group collapsed="true">
      <ic-breadcrumb current="true" page-title="Breadcrumb 1" href="/breadcrumb-1"></ic-breadcrumb>
      <ic-breadcrumb page-title="Breadcrumb 2" href="/breadcrumb-2"></ic-breadcrumb>
      <ic-breadcrumb page-title="Breadcrumb 3" href="/breadcrumb-3"></ic-breadcrumb>
      <ic-breadcrumb page-title="Breadcrumb 4" href="/breadcrumb-4"></ic-breadcrumb>
      </ic-breadcrumb-group>`,
    });

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot(
      "should render collapse on already small devices"
    );
  });
});
