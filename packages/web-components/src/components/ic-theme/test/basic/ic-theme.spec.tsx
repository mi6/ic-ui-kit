import { newSpecPage, SpecPage } from "@stencil/core/testing";
import { Theme } from "../../ic-theme";
import * as helpers from "../../../../utils/helpers";
import {
  BLACK_MIN_COLOR_BRIGHTNESS,
  WHITE_MAX_COLOR_BRIGHTNESS,
} from "../../../../utils/constants";

//mocked as getThemeColorBrightness is NaN when run in test context
//instead we return a value which will trigger the console warning about theme color contrast
const mockThemeColorContrastFail = () => {
  const func = jest.fn(() => {
    return (BLACK_MIN_COLOR_BRIGHTNESS + WHITE_MAX_COLOR_BRIGHTNESS) / 2;
  });

  Object.defineProperty(helpers, "getThemeColorBrightness", {
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
    "--ic-theme-primary-r"
  );
  const g = page.doc.documentElement.style.getPropertyValue(
    "--ic-theme-primary-g"
  );
  const b = page.doc.documentElement.style.getPropertyValue(
    "--ic-theme-primary-b"
  );

  expect(r).toBe(expectR);
  expect(g).toBe(expectG);
  expect(b).toBe(expectB);
};

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(jest.fn());
});

describe("ic-theme", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [Theme],
      html: `<ic-theme></ic-theme>`,
    });
    expect(page.root).toEqualHtml(`
      <ic-theme>
        <mock:shadow-root></mock:shadow-root>
      </ic-theme>
    `);
  });

  it("should set theme colour with hex", async () => {
    const page = await newSpecPage({
      components: [Theme],
      html: `<ic-theme color="#FFC0CB"></ic-theme>`,
    });

    expectRGBToBe(page, "255", "192", "203");
  });

  it("should set theme colour with 3 character hex", async () => {
    const page = await newSpecPage({
      components: [Theme],
      html: `<ic-theme color="#FFF"></ic-theme>`,
    });

    expectRGBToBe(page, "255", "255", "255");
  });

  it("should set theme colour with rgb", async () => {
    const page = await newSpecPage({
      components: [Theme],
      html: `<ic-theme color="rgb(159, 43, 104)"></ic-theme>`,
    });

    expectRGBToBe(page, "159", "43", "104");
  });

  it("should set theme colour with rgba", async () => {
    const page = await newSpecPage({
      components: [Theme],
      html: `<ic-theme color="rgba(159, 43, 104, 1)"></ic-theme>`,
    });
    expectRGBToBe(page, "159", "43", "104");
  });

  it("should test updating theme color", async () => {
    mockThemeColorContrastFail();

    const page = await newSpecPage({
      components: [Theme],
      html: `<ic-theme color="rgba(159, 43, 104)"></ic-theme>`,
    });

    page.root.color = "rgba(133, 133, 133, 1)";
    await page.waitForChanges();

    expectRGBToBe(page, "133", "133", "133");
  });
});
