import { newSpecPage } from "@stencil/core/testing";
import { Divider } from "../../ic-divider";
import { Typography } from "../../../ic-typography/ic-typography";

describe("ic-divider", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [Divider],
      html: `<ic-divider></ic-divider>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with a slotted label", async () => {
    const page = await newSpecPage({
      components: [Divider],
      html: `<ic-divider label-placement="left">
        <ic-typography variant="label" slot="label">
          <p style="width: max-content;">Slotted label left</p>
        </ic-typography>
      </ic-divider>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render a label with the label typography variant when weight is not set to thick or very-thick and a label is provided", async () => {
    const page = await newSpecPage({
      components: [Divider, Typography],
      html: `<ic-divider weight="medium" label="Test label"></ic-divider>`,
    });

    const label = page.root.querySelector("ic-typography");

    expect(label.variant).toBe("label");

    expect(page.root).toMatchSnapshot();
  });

  it("should render a label with the subtitle-large typography variant when weight is set to thick and a label is provided", async () => {
    const page = await newSpecPage({
      components: [Divider, Typography],
      html: `<ic-divider weight="thick" label="Test label"></ic-divider>`,
    });

    const label = page.root.querySelector("ic-typography");

    expect(label.variant).toBe("subtitle-large");

    expect(page.root).toMatchSnapshot();
  });

  it("should render a label with the h4 typography variant when weight is set to very-thick and a label is provided", async () => {
    const page = await newSpecPage({
      components: [Divider, Typography],
      html: `<ic-divider weight="very-thick" label="Test label"></ic-divider>`,
    });

    const label = page.root.querySelector("ic-typography");

    expect(label.variant).toBe("h4");

    expect(page.root).toMatchSnapshot();
  });

  it("should console error if there's an invalid prop combination of the placement prop and the orientation", async () => {
    console.error = jest.fn();
    const page = await newSpecPage({
      components: [Divider],
      html: `<ic-divider orientation="vertical" label-placement="left" label="Test label"></ic-divider>`,
    });

    await page.waitForChanges();

    expect(console.error).toHaveBeenCalledWith(
      "Left label placement is not applicable for a vertical ic-divider (web-components) / IcDivider (react)"
    );
  });

  it("correctly sets foregroundColor on theme change", async () => {
    const page = await newSpecPage({
      components: [Divider],
      html: `<ic-side-navigation version="v0.0.0" status="BETA" app-title="ACME">
      <ic-navigation-item slot="primary-navigation" href="/" label="Home">
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
      <ic-divider slot="primary-navigation"></ic-divider>
        <ic-navigation-item slot="primary-navigation" href="/" label="a11y">
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9H15V22H13V16H11V22H9V9H3V7H21V9Z"
              fill="currentColor"
            />
          </svg>
        </ic-navigation-item>
        </ic-side-navigation>`,
    });

    expect(page.rootInstance.foregroundColor).toEqual("light");
    expect(page.rootInstance.theme).toEqual("dark");

    expect(page.root).toMatchSnapshot("theme-change-light");

    await page.rootInstance.themeChangeHandler({
      detail: { mode: "dark" },
    });

    await page.rootInstance.updateMonochromeState();
    await page.waitForChanges();

    expect(page.rootInstance.foregroundColor).toEqual("dark");
    expect(page.rootInstance.theme).toEqual("light");

    expect(page.root).toMatchSnapshot("theme-change-dark");
  });
});
