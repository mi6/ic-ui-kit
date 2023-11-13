import { newE2EPage } from "@stencil/core/testing";

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(jest.fn());
});

const DIALOG_DELAY_MS = 300;

describe("ic-dialog", () => {
  it("should test focus and tab key press", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `
      <script>
        function showDialog() {
          dialog = document.querySelector("ic-dialog");
          dialog.open = true;
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
          dialog.open = true;
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
          dialog.open = true;
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

  it("should be able to tab to dynamically added interactive element", async () => {
    const page = await newE2EPage();
    await page.setContent(`<script>
      function showSmallDialog() {
        dialog = document.querySelector("#small-dialog");
        dialog.showDialog();
      }
      function showNewBtn() {
        var el = document.createElement("ic-button");
        el.innerText = "foo";
        var base = document.querySelector("#base");
        base.after(el);
      }
    </script>
    <ic-button variant="primary" id='showBtn' onclick="showSmallDialog()">
      Launch small dialog
    </ic-button>
    <ic-dialog
      heading="This is a small dialog"
      label="Small"
      id="small-dialog"
    >
      <ic-typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </ic-typography>
      <ic-button class="show" onclick="showNewBtn();">Show</ic-button>
      <div id="base"></div>
    </ic-dialog>
    `);

    const btn = await page.find("#showBtn");
    btn.click();

    await page.waitForChanges();
    await page.waitForTimeout(DIALOG_DELAY_MS);

    let focusedEl = await page.evaluate(() => {
      const el = document.activeElement;
      return {
        tagName: el.tagName,
        textContent: el.textContent,
      };
    });

    expect(focusedEl.tagName).toBe("IC-BUTTON");
    expect(focusedEl.textContent).toBe("Show");

    await page.keyboard.press("Tab");
    await page.waitForChanges();

    focusedEl = await page.evaluate(() => {
      const dialog = document.querySelector("ic-dialog");
      const el = dialog.shadowRoot.activeElement;
      return {
        tagName: el.tagName,
        textContent: el.textContent,
      };
    });

    expect(focusedEl.tagName).toBe("IC-BUTTON");
    expect(focusedEl.textContent).toBe("Cancel");

    const showBtn = await page.find(".show");
    await showBtn.click();
    await page.waitForChanges();

    await page.keyboard.press("Tab");
    await page.waitForChanges();

    focusedEl = await page.evaluate(() => {
      const el = document.activeElement;
      return {
        tagName: el.tagName,
        textContent: el.textContent,
      };
    });

    expect(focusedEl.tagName).toBe("IC-BUTTON");
    expect(focusedEl.textContent).toBe("foo");
  });

  it("should not tab to interactive button when hidden and tab to cancel button", async () => {
    const page = await newE2EPage();
    await page.setContent(`<script>
      function showSmallDialog() {
        dialog = document.querySelector("#small-dialog");
        dialog.showDialog();
      }
      function hideNewBtn() {
        var btn = document.querySelector("#hide-btn");
        btn.remove();
      }
    </script>
    <ic-button variant="primary" id='showBtn' onclick="showSmallDialog()">
      Launch small dialog
    </ic-button>
    <ic-dialog
      heading="This is a small dialog"
      label="Small"
      id="small-dialog"
    >
      <ic-typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </ic-typography>
      <ic-button class="hide" onclick="hideNewBtn();">Hide</ic-button>
      <ic-button id='hide-btn'>foo</ic-button>
      <div id="base"></div>
    </ic-dialog>
    `);

    const btn = await page.find("#showBtn");
    await btn.click();

    await page.waitForChanges();
    await page.waitForTimeout(DIALOG_DELAY_MS);

    let focusedEl = await page.evaluate(() => {
      const el = document.activeElement;
      return {
        tagName: el.tagName,
        textContent: el.textContent,
      };
    });

    expect(focusedEl.tagName).toBe("IC-BUTTON");
    expect(focusedEl.textContent).toBe("Hide");

    await page.keyboard.press("Tab");
    await page.waitForChanges();

    focusedEl = await page.evaluate(() => {
      const el = document.activeElement;
      return {
        tagName: el.tagName,
        textContent: el.textContent,
      };
    });

    expect(focusedEl.tagName).toBe("IC-BUTTON");
    expect(focusedEl.textContent).toBe("foo");

    const hideBtn = await page.find(".hide");
    await hideBtn.click();
    await page.waitForChanges();

    await page.keyboard.press("Tab");
    await page.waitForChanges();

    focusedEl = await page.evaluate(() => {
      const dialog = document.querySelector("ic-dialog");
      const el = dialog.shadowRoot.activeElement;
      return {
        tagName: el.tagName,
        textContent: el.textContent,
      };
    });

    expect(focusedEl.tagName).toBe("IC-BUTTON");
    expect(focusedEl.textContent).toBe("Cancel");
  });
});
