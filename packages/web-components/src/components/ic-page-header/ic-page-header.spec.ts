import { newSpecPage } from "@stencil/core/testing";
import { PageHeader } from "./ic-page-header";
import { DEVICE_SIZES } from "../../utils/helpers";
import { mockDeviceSize } from "../../testspec.setup";
import { Button } from "../ic-button/ic-button";
import * as helpers from "../../utils/helpers";

describe("simple ic-page-header renders", () => {
  it("should render with a heading & sub-heading", async () => {
    const page = await newSpecPage({
      components: [PageHeader],
      html: `<ic-page-header heading="Page header" subheading="This is a simple page header component and this is the text."></ic-page-header>`,
    });

    expect(page.root).toMatchSnapshot(
      "should render with a heading & sub-heading"
    );
  });

  it("should return null for slot 'tabs'", async () => {
    expect(helpers.getSlot(undefined, "tabs")).toBeNull();
  });
});

describe("ic-page-header component renders additional functionality", () => {
  it("should render actions", async () => {
    const page = await newSpecPage({
      components: [PageHeader],
      html: `
      <ic-page-header
        heading="Page header"
        subheading="This is a simple page header component and this is the text."
      >
        <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>
        <ic-button slot="actions" variant="primary"
          >Create coffee
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
              fill="currentColor"
            />
          </svg>
        </ic-button>
      </ic-page-header>`,
    });

    expect(page.root).toMatchSnapshot("should render actions");
  });

  it("should render an input field", async () => {
    const page = await newSpecPage({
      components: [PageHeader],
      html: `
      <ic-page-header
        heading="Page header"
        subheading="This is a simple page header component and this is the text."
      >
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
        <ic-text-field slot="input" placeholder="Enter your input" hide-label />
      </ic-page-header>`,
    });

    expect(page.root).toMatchSnapshot("should render an input field");
  });

  it("should render a stepper", async () => {
    const page = await newSpecPage({
      components: [PageHeader],
      html: `
      <ic-page-header heading="Create a coffee">
        <ic-stepper slot="stepper">
          <ic-step step-title="Warm kettle" step-type="completed"></ic-step>
          <ic-step
            step-title="Warm milk"
            step-subtitle="Optional"
            step-type="completed"
          ></ic-step>
          <ic-step step-title="Pour milk" step-type="current"></ic-step>
        </ic-stepper>
      </ic-page-header>`,
    });

    expect(page.root).toMatchSnapshot("should render a stepper");
  });

  it("should render tabs", async () => {
    const page = await newSpecPage({
      components: [PageHeader],
      html: `
      <ic-page-header heading="Coffee recipes" subheading="This is a simple page header component and this is the text.">
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
        <ic-navigation-item
          slot="tabs"
          label="All recipes"
          href="/all-recipes"
          selected
        ></ic-navigation-item>
        <ic-navigation-item
          slot="tabs"
          label="Favourites"
          href="/favourites"
        ></ic-navigation-item>
      </ic-page-header>`,
    });

    expect(page.root).toMatchSnapshot("should render tabs");
  });

  it("should render actions, input & tabs", async () => {
    const page = await newSpecPage({
      components: [PageHeader],
      html: `
      <ic-page-header heading="Coffee recipes" subheading="This is a simple page header component and this is the text.">
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
        <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>
        <ic-button slot="actions" variant="primary"
          >Create coffee
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
              fill="currentColor"
            />
          </svg>
        </ic-button>
        <ic-text-field slot="input" placeholder="Enter your input" hide-label />
        <ic-navigation-item
          slot="tabs"
          label="All recipes"
          href="/all-recipes"
          selected
        ></ic-navigation-item>
        <ic-navigation-item
          slot="tabs"
          label="Favourites"
          href="/favourites"
        ></ic-navigation-item>
      </ic-page-header>`,
    });

    expect(page.root).toMatchSnapshot("should render actions, input & tabs");
  });

  it("should render actions, input & stepper", async () => {
    const page = await newSpecPage({
      components: [PageHeader],
      html: `
      <ic-page-header heading="Coffee recipes" subheading="This is a simple page header component and this is the text.">
        <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
        <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>
        <ic-button slot="actions" variant="primary"
          >Create coffee
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
              fill="currentColor"
            />
          </svg>
        </ic-button>
        <ic-text-field slot="input" placeholder="Enter your input" hide-label />
        <ic-stepper slot="stepper">
          <ic-step step-title="Warm kettle" step-type="completed"></ic-step>
          <ic-step
            step-title="Warm milk"
            step-subtitle="Optional"
            step-type="completed"
          ></ic-step>
          <ic-step step-title="Pour milk" step-type="current"></ic-step>
        </ic-stepper>
      </ic-page-header>`,
    });

    expect(page.root).toMatchSnapshot("should render actions, input & stepper");
  });
});

describe("resizeObserver for ic-page-header", () => {
  it("should set the deviceSize prop correctly in resizeObserver", async () => {
    const page = await newSpecPage({
      components: [PageHeader, Button],
      html: `
    <ic-page-header
        heading="Page header"
        sub-heading="This is a page header component with additional functionality and this is the text."
        reverse-order
      >
        <ic-button slot="actions" variant="primary"
          >Create coffee
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
              fill="currentColor"
            />
          </svg>
        </ic-button>
        <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>
      </ic-page-header>
    `,
    });

    await page.waitForChanges();

    mockDeviceSize(DEVICE_SIZES.S);

    await page.rootInstance.resizeObserverCallback();
    await page.waitForChanges();

    expect(page.rootInstance.deviceSize).toBe(DEVICE_SIZES.S);

    mockDeviceSize(DEVICE_SIZES.M);

    await page.rootInstance.resizeObserverCallback();
    await page.waitForChanges();
    expect(page.rootInstance.deviceSize).toBe(DEVICE_SIZES.M);

    mockDeviceSize(DEVICE_SIZES.L);

    await page.rootInstance.resizeObserverCallback();
    await page.waitForChanges();
    expect(page.rootInstance.deviceSize).toBe(DEVICE_SIZES.L);

    mockDeviceSize(DEVICE_SIZES.XL);

    await page.rootInstance.resizeObserverCallback();
    await page.waitForChanges();
    expect(page.rootInstance.deviceSize).toBe(DEVICE_SIZES.XL);
  });

  it("shouldn't call the resizeObserver if the resizeObserver is null", async () => {
    const page = await newSpecPage({
      components: [PageHeader, Button],
      html: `
    <ic-page-header
        heading="Page header"
        sub-heading="This is a page header component with additional functionality and this is the text."
        reverse-order
      >
        <ic-button slot="actions" variant="primary"
          >Create coffee
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
              fill="currentColor"
            />
          </svg>
        </ic-button>
        <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>
      </ic-page-header>
    `,
    });

    await page.rootInstance.runResizeObserver();

    page.setContent("");
  });
});
