import { newE2EPage } from "@stencil/core/testing";

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(jest.fn());
});

describe("ic-typograpghy", () => {
  it("should test truncation", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-typography max-lines="3">
      Body of text that is truncated to three lines. Click the 'See more' link to
      expand the text, then click 'See less' to truncate the text once more!
      <br>
      This is the text that should appear on a second line but may extend further depending on the viewport size.
      <br>
      And this text should be on a third line.
    </ic-typography>`);

    await page.waitForChanges();

    await page.setViewport({
      width: 640,
      height: 480,
    });

    let truncBtn = await page.find("ic-typography >>> button.trunc-btn");

    let btnText = (truncBtn as unknown as HTMLButtonElement).innerText;

    expect(truncBtn).not.toBeNull();
    expect(btnText).toBe("See more");

    truncBtn.click();
    await page.waitForChanges();

    btnText = (truncBtn as unknown as HTMLButtonElement).innerText;
    expect(btnText).toBe("See less");

    await page.waitForChanges();

    await page.setViewport({
      width: 1600,
      height: 480,
    });

    await page.waitForChanges();
    truncBtn = await page.find("ic-typography >>> button.trunc-btn");

    expect(truncBtn).toBeNull();
  });
});
