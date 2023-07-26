import { newE2EPage } from "@stencil/core/testing";

describe("ic-date-picker component", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-date-picker label="Date picker label"></ic-date-picker>`
    );

    const element = await page.find("ic-date-picker");

    expect(element).toHaveClass("hydrated");
  });

  // it.only("should open calendar when button clicked", async () => {
  //   const page = await newE2EPage();
  //   await page.setContent(
  //     `<ic-date-picker label="Date picker label"></ic-date-picker>`
  //   );

  //   // const element = await page.find("ic-date-picker >>> ic-date-input");

  //   const element = await page.find(
  //     "ic-date-picker >>> ic-button.calendar-button"
  //   );

  //   //
  //  await page.evaluate(() => {
  //     // this function will run in the browser context, not
  //     // in the Node.js context that the test is executed in.
  //     const datepicker = document.querySelector('ic-date-picker').shadowRoot.querySelector("ic-date-input").shadowRoot.querySelector("ic-button.calendar-button") as HTMLIcButtonElement;

  //     datepicker.click();
  //   });

  //   // console.log(input)
  //   // console.log(el)
  //   await page.waitForChanges();

  //   // const IcButton = element.shadowRoot.querySelectorAll("ic-button");
  //   // // const IcButton = element.shadowRoot.querySelector("#calendar-button")
  //   // console.log(IcButton[1]);
  //   // const tooltip = IcButton[1].querySelector("ic-tooltip") as HTMLElement
  //     //  const calButton = IcButton[1] as HTMLIcButtonElement
  //   // console.log(tooltip);

  //   // const button = tooltip.shadowRoot.querySelector("button") as HTMLElement

  //   // await element.click();
  //   await page.waitForChanges();
  //   await page.waitForTimeout(10000);

  //   expect(element).toHaveClass("hydrated");
  // });
});
