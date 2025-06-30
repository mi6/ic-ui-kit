import { newSpecPage, SpecPage } from "@stencil/core/testing";
import { Theme } from "../../ic-theme";
import * as helpers from "../../../../utils/helpers";
import {
  BLACK_MIN_COLOR_BRIGHTNESS,
  WHITE_MAX_COLOR_BRIGHTNESS,
} from "../../../../utils/constants";

//mocked as getBrandColorBrightness is NaN when run in test context
//instead we return a value which will trigger the console warning about theme color contrast
const mockThemeColorContrastFail = () => {
  const func = jest.fn(() => {
    return (BLACK_MIN_COLOR_BRIGHTNESS + WHITE_MAX_COLOR_BRIGHTNESS) / 2;
  });

  Object.defineProperty(helpers, "getBrandColorBrightness", {
    value: func,
  });
};

const expectRGBToBe = (
  page: SpecPage,
  expectR: string,
  expectG: string,
  expectB: string
) => {
  const r = page.doc.documentElement.style.getPropertyValue(
    "--ic-brand-color-primary-r"
  );
  const g = page.doc.documentElement.style.getPropertyValue(
    "--ic-brand-color-primary-g"
  );
  const b = page.doc.documentElement.style.getPropertyValue(
    "--ic-brand-color-primary-b"
  );

  expect(r).toBe(expectR);
  expect(g).toBe(expectG);
  expect(b).toBe(expectB);
};

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(jest.fn());
});

describe("ic-theme", () => {
  it("should set brand colour with hex", async () => {
    const page = await newSpecPage({
      components: [Theme],
      html: `<ic-theme brand-color="#FFC0CB"></ic-theme>`,
    });

    expectRGBToBe(page, "255", "192", "203");
  });

  it("should set brand colour with 3 character hex", async () => {
    const page = await newSpecPage({
      components: [Theme],
      html: `<ic-theme brand-color="#FFF"></ic-theme>`,
    });

    expectRGBToBe(page, "255", "255", "255");
  });

  it("should set brand colour with rgb", async () => {
    const page = await newSpecPage({
      components: [Theme],
      html: `<ic-theme brand-color="rgb(159, 43, 104)"></ic-theme>`,
    });

    expectRGBToBe(page, "159", "43", "104");
  });

  it("should set brand colour with rgba", async () => {
    const page = await newSpecPage({
      components: [Theme],
      html: `<ic-theme brand-color="rgba(159, 43, 104, 1)"></ic-theme>`,
    });
    expectRGBToBe(page, "159", "43", "104");
  });

  it("should test updating brand color", async () => {
    mockThemeColorContrastFail();

    const page = await newSpecPage({
      components: [Theme],
      html: `<ic-theme brand-color="rgba(159, 43, 104)"></ic-theme>`,
    });

    page.rootInstance.brandColor = "rgba(133, 133, 133, 1)";
    await page.waitForChanges();

    expectRGBToBe(page, "133", "133", "133");
  });

  it("should test 'theme' prop", async () => {
    const page = await newSpecPage({
      components: [Theme],
      html: `<ic-theme theme="dark"></ic-theme>`,
    });

    expect(page.root).toHaveClass("ic-theme-dark");

    page.rootInstance.theme = "light";

    await page.waitForChanges();

    expect(page.root).toHaveClass("ic-theme-light");

    page.rootInstance.theme = "system";

    await page.waitForChanges();

    expect(page.root).toHaveClass("ic-theme-light");
  });

  it("should emit brandChange event when brandColor is changed", async () => {
    const page = await newSpecPage({
      components: [Theme],
      html: `<ic-theme></ic-theme>`,
    });

    Object.defineProperty(page.rootInstance, "checkBrandColorContrast", {
      value: jest.fn(),
    });

    const appearanceFunc = jest.fn(() => {
      return "dark";
    });

    Object.defineProperty(helpers, "getBrandForegroundAppearance", {
      value: appearanceFunc,
    });

    const component = document.querySelector("ic-theme");
    const eventSpy = jest.fn();

    component?.addEventListener("brandChange", eventSpy);

    page.rootInstance.brandColor = "rgba(133, 133, 133, 1)";
    await page.waitForChanges();

    expect(eventSpy).toBeCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          mode: "dark",
          color: {
            a: 1,
            b: 133,
            g: 133,
            r: 133,
          },
        }),
      })
    );
  });
});
