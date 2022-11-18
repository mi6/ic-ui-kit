import { newE2EPage } from "@stencil/core/testing";

describe("ic-theme", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-theme></ic-theme>`);

    const element = await page.find("ic-theme");
    expect(element).toHaveClass("hydrated");
  });

  it("should emit icThemeChange when setThemeRGB method called", async () => {
    const page = await newE2EPage();

    await page.setContent(`<ic-theme></ic-theme>`);

    const spy = await page.spyOnEvent("icThemeChange");

    await page.$eval("ic-theme", (elm: HTMLIcThemeElement) => {
      elm.color = "rgb(255, 201, 60)";
    });

    await page.waitForChanges();

    expect(spy).toHaveReceivedEventDetail({
      mode: "dark",
      color: {
        b: 60,
        g: 201,
        r: 255,
      },
    });

    await page.$eval("ic-theme", (elm: HTMLIcThemeElement) => {
      elm.color = "rgb(35, 81, 142)";
    });

    await page.waitForChanges();

    expect(spy).toHaveReceivedEventDetail({
      mode: "light",
      color: {
        b: 142,
        g: 81,
        r: 35,
      },
    });
  });

  it("should emit correct textColor when rgb values invalid", async () => {
    const page = await newE2EPage();
    await page.setContent("<ic-theme></ic-theme>");

    const spy = await page.spyOnEvent("icThemeChange");

    await page.$eval("ic-theme", (elm: HTMLIcThemeElement) => {
      elm.color = "rgb(1000, 1000, 1000)";
    });

    await page.waitForChanges();

    expect(spy).toHaveReceivedEventDetail({
      mode: "dark",
      color: {
        b: 1000,
        g: 1000,
        r: 1000,
      },
    });

    await page.$eval("ic-theme", (elm: HTMLIcThemeElement) => {
      elm.color = "rgb(-1, -1, -1)";
    });

    await page.waitForChanges();

    expect(spy).toHaveReceivedEventDetail({
      mode: "light",
      color: {
        b: -1,
        g: -1,
        r: -1,
      },
    });
  });
});
