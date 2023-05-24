import { newE2EPage } from "@stencil/core/testing";

const DIALOG_DELAY_MS = 300;

describe("ic-dialog", () => {
  it("should test focus and tab key press", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `
      <script>
        function showDialog() {
          dialog = document.querySelector("ic-dialog");
          dialog.showDialog();
        }
      </script>
      <ic-button id="showBtn" variant="primary" onclick="showDialog()"
        >Launch dialog</ic-button
      >
      <ic-dialog
        heading="This dialog has slotted interactive content"
        label="slotted"
        dismiss-label="Close"
        size="medium"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
        <ic-text-field id="text-field" label="What is your favourite coffee?">
        </ic-text-field>
        <ic-select
        id="sel1"
          label="What is your favourite coffee?"
          placeholder="Placeholder goes here"
        ></ic-select>
        <ic-checkbox-group
          style="margin: 8px 0"
          hide-label
          label="confirm"
          name="confirm-checkbox"
        >
          <ic-checkbox label="Option" value="confirm" id="checkbox1"></ic-checkbox>
        </ic-checkbox-group>
       </ic-dialog>
    `
    );

    const btn = await page.find("#showBtn");
    btn.click();

    await page.waitForChanges();
    await page.waitForTimeout(DIALOG_DELAY_MS);

    let activeElement = await page.evaluate(() => document.activeElement.id);
    expect(activeElement).toEqual("text-field");

    await page.keyboard.press("Tab");
    await page.waitForChanges();

    activeElement = await page.evaluate(() => document.activeElement.id);
    expect(activeElement).toEqual("sel1");

    await page.keyboard.press("Tab");
    await page.waitForChanges();

    activeElement = await page.evaluate(() => document.activeElement.id);
    expect(activeElement).toEqual("checkbox1");

    await page.keyboard.press("Tab");
    await page.waitForChanges();

    activeElement = await page.evaluate(() => document.activeElement.id);
    expect(activeElement).toEqual("");

    await page.keyboard.press("Tab");
    await page.waitForChanges();

    activeElement = await page.evaluate(() => document.activeElement.id);
    expect(activeElement).toEqual("");

    await page.keyboard.press("Tab");
    await page.waitForChanges();

    activeElement = await page.evaluate(() => document.activeElement.id);
    expect(activeElement).toEqual("");

    await page.keyboard.press("Tab");
    await page.waitForChanges();

    activeElement = await page.evaluate(() => document.activeElement.id);
    expect(activeElement).toEqual("text-field");
  });

  it("should hide dialog when background clicked", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `
      <script>
        function showDialog() {
          dialog = document.querySelector("ic-dialog");
          dialog.showDialog();
        }
      </script>
      <ic-button id="showBtn" variant="primary" onclick="showDialog()"
        >Launch dialog</ic-button
      >
      <ic-dialog
        heading="This dialog has slotted interactive content"
        label="slotted"
        size="medium"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.        
       </ic-dialog>
    `
    );

    const dialog = await page.find("ic-dialog");

    let dialogDisplay = (await dialog.getComputedStyle()).display;
    expect(dialogDisplay).toBe("none");

    const btn = await page.find("#showBtn");
    btn.click();

    await page.waitForChanges();
    await page.waitForTimeout(DIALOG_DELAY_MS);

    dialogDisplay = (await dialog.getComputedStyle()).display;
    expect(dialogDisplay).toBe("flex");

    await page.mouse.click(10, 10);
    await page.waitForChanges();
    await page.waitForTimeout(DIALOG_DELAY_MS);

    dialogDisplay = (await dialog.getComputedStyle()).display;
    expect(dialogDisplay).toBe("none");
  });

  it("should not hide dialog when background clicked", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `
      <script>
        function showDialog() {
          dialog = document.querySelector("ic-dialog");
          dialog.showDialog();
        }
      </script>
      <ic-button id="showBtn" variant="primary" onclick="showDialog()"
        >Launch dialog</ic-button
      >
      <ic-dialog
        heading="This dialog has slotted interactive content"
        label="slotted"
        size="medium"
        close-on-backdrop-click="false"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.        
       </ic-dialog>
    `
    );

    const dialog = await page.find("ic-dialog");

    let dialogDisplay = (await dialog.getComputedStyle()).display;
    expect(dialogDisplay).toBe("none");

    const btn = await page.find("#showBtn");
    btn.click();

    await page.waitForChanges();
    await page.waitForTimeout(DIALOG_DELAY_MS);

    dialogDisplay = (await dialog.getComputedStyle()).display;
    expect(dialogDisplay).toBe("flex");

    await page.mouse.click(10, 10);
    await page.waitForChanges();
    await page.waitForTimeout(DIALOG_DELAY_MS);

    dialogDisplay = (await dialog.getComputedStyle()).display;
    expect(dialogDisplay).toBe("flex");
  });

  it("should test dialog content overflow", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `
      <script>
        function showDialog() {
          dialog = document.querySelector("ic-dialog");
          dialog.showDialog();
        }
      </script>
      <ic-button id="showBtn" variant="primary" onclick="showDialog()"
        >Launch dialog</ic-button
      >
      <ic-dialog
        heading="This dialog has slotted interactive content"
        label="slotted"
        dismiss-label="Close"
        size="medium"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
        <ic-text-field id="text-field" label="What is your favourite coffee?">
        </ic-text-field>
        <ic-select
        id="sel1"
          label="What is your favourite coffee?"
          placeholder="Placeholder goes here"
        ></ic-select>
        <ic-checkbox-group
          style="margin: 8px 0"
          hide-label
          label="confirm"
          name="confirm-checkbox"
        >
          <ic-checkbox label="Option" value="confirm" id="checkbox1"></ic-checkbox>
        </ic-checkbox-group>
       </ic-dialog>
    `
    );

    await page.setViewport({
      width: 800,
      height: 480,
    });

    const btn = await page.find("#showBtn");
    btn.click();

    await page.waitForChanges();
    await page.waitForTimeout(DIALOG_DELAY_MS);

    let dialog = await page.find("ic-dialog");

    let overflow = dialog.getAttribute("data-overflow");
    expect(overflow).toBe("true");

    await page.setViewport({
      width: 800,
      height: 800,
    });

    await page.waitForChanges();
    await page.waitForTimeout(DIALOG_DELAY_MS);

    dialog = await page.find("ic-dialog");

    overflow = dialog.getAttribute("data-overflow");
    expect(overflow).toBe("false");
  });
});
