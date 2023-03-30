import { E2EPage, newE2EPage } from "@stencil/core/testing";
import { KeyInput } from "puppeteer";

const options = `[
  { label: 'Test label 1', value: 'Test value 1' },
  { label: 'Test label 2', value: 'Test value 2' },
  { label: 'Test label 3', value: 'Test value 3' },
]`;

const largeOptions = `[
  { label: 'Test label 1', value: 'Test value 1' },
  { label: 'Test label 2', value: 'Test value 2' },
  { label: 'Test label 3', value: 'Test value 3' },
  { label: 'Test label 4', value: 'Test value 4' },
  { label: 'Test label 5', value: 'Test value 5' },
  { label: 'Test label 6', value: 'Test value 6' },
  { label: 'Test label 7', value: 'Test value 7' },
  { label: 'Test label 8', value: 'Test value 8' },
  { label: 'Test label 9', value: 'Test value 9' },
  { label: 'Test label 10', value: 'Test value 10' },
]`;

const searchableOptions = `[
  { label: "Cappuccino", value: "Cap" },
  { label: "Latte", value: "Lat" },
  { label: "Americano", value: "Ame" },
  { label: "Filter", value: "Fil" },
  { label: "Flat white", value: "Fla" },
  { label: "Mocha", value: "Moc" },
  { label: "Macchiato", value: "Mac" },
]`;

const getTestSelect = (
  options: string
) => `<ic-select label="IC Select Test"></ic-select>
  <script>
    var select = document.querySelector('ic-select');
    var option = 'Test value 1';
    select.options = ${options};
    select.addEventListener('icChange', function (event) {
      option = event.detail.value;
      select.value = option;
    });
  </script>`;

const getTestSelectFormReset = (
  options: string
) => `<form><ic-select label="IC Select Test"></ic-select><button type="reset" id="resetButton">Reset</button></form>
    <script>
      var select = document.querySelector('ic-select');
      var option = 'Test value 1';
      select.options = ${options};
      select.addEventListener('icChange', function (event) {
        option = event.detail.value;
        select.value = option;
      });
    </script>`;

const getTestSelectSearchableFormReset = (
  options: string
) => `<form><ic-select label="IC Select Test" searchable='true'></ic-select><button type="reset" id="resetButton">Reset</button></form>
    <script>
      var select = document.querySelector('ic-select');
      var option = 'Test value 1';
      select.options = ${options};
      select.value = 'Test value 1';
      select.addEventListener('icChange', function (event) {
        option = event.detail.value;
        select.value = option;
      });
    </script>`;

const getTestSearchableSelect = (
  options: string
) => `<ic-select label="IC Select Test" searchable></ic-select>
    <script>
      var select = document.querySelector('ic-select');
      var option = 'Cappuccino';
      select.options = ${options};
      select.addEventListener('icChange', function (event) {
        option = event.detail.value;
        select.value = option;
      });
    </script>`;

const getTestSearchableSelectAsync = () =>
  `<ic-select label="IC Select Test" searchable="true" disable-filter="true" value="Test value"></ic-select>
    <script>
      var select = document.querySelector('ic-select');
      select.options = [];
      window.setTimeout(() => {
        select.options = []
      }, 800)
    </script>`;

const getTestSelectAsync = (firstDataset: string, secondDataset: string) =>
  `<ic-select label="IC Select Test" value="Test value"></ic-select>
      <script>
        var select = document.querySelector('ic-select');
        select.options = ${firstDataset};
        window.setTimeout(() => {
          select.options = ${secondDataset}
        }, 1500)
      </script>`;

const getMenuVisibility = async (page: E2EPage) => {
  const menuVisibility = await page.evaluate(() => {
    const menu = document
      .querySelector("ic-select")
      .shadowRoot.querySelector("ic-menu")
      .shadowRoot.querySelector("#ic-select-input-0-menu");
    return window.getComputedStyle(menu).visibility;
  });
  return menuVisibility;
};

const focusAndTypeIntoInput = async (value: string, page: E2EPage) => {
  await page.$eval("ic-select", (el) => {
    const input = el.shadowRoot.querySelector("input") as HTMLInputElement;
    input.focus();
  });

  await value.split("").forEach(async (char: KeyInput) => {
    await page.keyboard.press(char);
  });
};

describe("ic-select", () => {
  it("should render a native select on a mobile device", async () => {
    const page = await newE2EPage();
    await page.setUserAgent(
      "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1"
    );
    await page.setViewport({
      width: 375,
      height: 667,
      isMobile: true,
      hasTouch: true,
    });
    await page.setContent(getTestSelect(options));
    await page.waitForChanges();

    const select = await page.find("ic-select");

    expect(select.shadowRoot).toEqualHtml(`<ic-input-container class="hydrated">
      <!---->
        <div class="component-container">
          <ic-input-label class="hydrated">
            <ic-typography class="hydrated ic-typography-label">
              <label for="ic-select-input-0">
                IC Select Test
              </label>
            </ic-typography>
          </ic-input-label>
          <ic-input-component-container class="hydrated">
            <!---->
            <div class="focus-indicator">
              <select aria-describedby="" aria-invalid="false" aria-label="IC Select Test" id="ic-select-input-0" class="placeholder">
                <option disabled="" value="">
                  Select an option
                </option>
                <option value="Test value 1">
                  Test label 1
                </option>
                <option value="Test value 2">
                  Test label 2
                </option>
                <option value="Test value 3">
                  Test label 3
                </option>
              </select>
            </div>
          </ic-input-component-container>
        </div>
      </ic-input-container>`);
  });

  describe("custom", () => {
    it("should render", async () => {
      const page = await newE2EPage();
      await page.setContent(getTestSelect(options));
      await page.waitForChanges();

      const select = await page.find("ic-select");

      expect(select.shadowRoot)
        .toEqualHtml(`<ic-input-container class="hydrated">
      <!---->
      <div class="component-container">
        <ic-input-label class="hydrated">
          <ic-typography class="hydrated ic-typography-label">
            <label for="ic-select-input-0">
              IC Select Test
            </label>
          </ic-typography>
        </ic-input-label>
        <ic-input-component-container class="hydrated">
          <!---->
          <div class="focus-indicator">
            <div class="select-container">
              <button aria-controls="ic-select-input-0-menu" aria-describedby="" aria-expanded="false" aria-haspopup="listbox" aria-invalid="false" aria-label="IC Select Test, Select an option" aria-owns="ic-select-input-0-menu" class="select-input" id="ic-select-input-0">
                <ic-typography class="hydrated ic-typography-body placeholder value-text">
                  <p>
                    Select an option
                  </p>
                </ic-typography>
                <div class="select-input-end">
                  <span aria-hidden="true" class="expand-icon">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 9.5L12 14.5L17 9.5H7Z" fill="currentColor"></path>
                    </svg>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </ic-input-component-container>
        <ic-menu class="hydrated"></ic-menu>
      </div>
    </ic-input-container>
      `);
    });

    it("should render when no options are provided", async () => {
      const page = await newE2EPage();
      await page.setContent(`<ic-select label="IC Select Test"></ic-select>`);
      await page.waitForChanges();

      const select = await page.find("ic-select");

      expect(select.shadowRoot).toEqualHtml(`
        <ic-input-container class="hydrated">
      <!---->
      <div class="component-container">
        <ic-input-label class="hydrated">
          <ic-typography class="hydrated ic-typography-label">
            <label for="ic-select-input-0">
              IC Select Test
            </label>
          </ic-typography>
        </ic-input-label>
        <ic-input-component-container class="hydrated">
          <!---->
          <div class="focus-indicator">
            <div class="select-container">
              <button aria-controls="ic-select-input-0-menu" aria-describedby="" aria-expanded="false" aria-haspopup="listbox" aria-invalid="false" aria-label="IC Select Test, Select an option" aria-owns="ic-select-input-0-menu" class="select-input" id="ic-select-input-0">
                <ic-typography class="hydrated ic-typography-body placeholder value-text">
                  <p>
                    Select an option
                  </p>
                </ic-typography>
                <div class="select-input-end">
                  <span aria-hidden="true" class="expand-icon">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 9.5L12 14.5L17 9.5H7Z" fill="currentColor"></path>
                    </svg>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </ic-input-component-container>
        <ic-menu class="hydrated"></ic-menu>
      </div>
    </ic-input-container>
      `);
    });

    it("should open, set focus on menu and set aria-expanded to 'true' when input clicked", async () => {
      const page = await newE2EPage();
      await page.setContent(getTestSelect(options));
      await page.waitForChanges();

      const menuVisibility = await page.evaluate(() => {
        const menu = document
          .querySelector("ic-select")
          .shadowRoot.querySelector("ic-menu")
          .shadowRoot.querySelector("#ic-select-input-0-menu");
        return window.getComputedStyle(menu).visibility;
      });
      expect(menuVisibility).toBe("hidden");

      const select = await page.find("ic-select >>> #ic-select-input-0");
      await select.click();
      await page.waitForChanges();

      const newMenuVisibility = await page.evaluate(() => {
        const menu = document
          .querySelector("ic-select")
          .shadowRoot.querySelector("ic-menu")
          .shadowRoot.querySelector("#ic-select-input-0-menu");
        return window.getComputedStyle(menu).visibility;
      });
      expect(newMenuVisibility).toBe("visible");
      expect(await select.getAttribute("aria-expanded")).toBeTruthy();

      const activeElId = await page.$eval(
        "ic-select",
        (el) =>
          el.shadowRoot.querySelector("ic-menu").shadowRoot.activeElement.id
      );
      expect(activeElId).toBe("ic-select-input-0-menu");
    });

    it("should render options correctly", async () => {
      const page = await newE2EPage();
      await page.setContent(getTestSelect(options));
      await page.waitForChanges();

      const select = await page.find("ic-select >>> #ic-select-input-0");
      await select.click();
      await page.waitForChanges();

      const menu = await page.find(
        "ic-select >>> ic-menu >>> #ic-select-input-0-menu"
      );
      const menuOptions = await menu.shadowRoot.querySelectorAll("li");
      expect(menuOptions).toHaveLength(3);
      expect(menuOptions[0]).toEqualText("Test label 1");
      expect(menuOptions[1]).toEqualText("Test label 2");
      expect(menuOptions[2]).toEqualText("Test label 3");
    });

    it("should call icChange when the selected option is changed", async () => {
      const page = await newE2EPage();
      await page.setContent(getTestSelect(options));
      await page.waitForChanges();

      const icChange = await page.spyOnEvent("icChange");
      const select = await page.find("ic-select >>> #ic-select-input-0");
      await select.press("ArrowDown");
      await select.press("Enter");
      await page.waitForChanges();

      expect(icChange).toHaveReceivedEventDetail({
        value: "Test value 1",
      });
    });

    describe("when no option is selected", () => {
      it("should open menu, apply focus style on first option and set as value when Down Arrow is pressed", async () => {
        const page = await newE2EPage();
        await page.setContent(getTestSelect(options));
        await page.waitForChanges();

        const select = await page.find("ic-select >>> #ic-select-input-0");
        await select.press("ArrowDown");
        await page.waitForChanges();

        const menu = await page.find(
          "ic-select >>> ic-menu >>> #ic-select-input-0-menu"
        );
        expect(await getMenuVisibility(page)).toBe("visible");

        const firstOption = await menu.shadowRoot.querySelectorAll("li")[0];
        expect(firstOption).toHaveClass("focused-option");
        expect(select).toEqualText("Test label 1");
      });

      it("should open menu when Space is pressed", async () => {
        const page = await newE2EPage();
        await page.setContent(getTestSelect(options));
        await page.waitForChanges();

        const select = await page.find("ic-select >>> #ic-select-input-0");
        await select.press(" ");
        await page.waitForChanges();

        expect(await getMenuVisibility(page)).toBe("visible");
      });

      it("should open menu when Enter is pressed", async () => {
        const page = await newE2EPage();
        await page.setContent(getTestSelect(options));
        await page.waitForChanges();

        const select = await page.find("ic-select >>> #ic-select-input-0");
        await select.press("Enter");
        await page.waitForChanges();

        await page.waitForTimeout(1000);
        expect(await getMenuVisibility(page)).toBe("visible");
      });

      it("should open menu, apply focus style on last option and set as value when Up Arrow is pressed", async () => {
        const page = await newE2EPage();
        await page.setContent(getTestSelect(options));
        await page.waitForChanges();

        const select = await page.find("ic-select >>> #ic-select-input-0");
        await select.press("ArrowUp");
        await page.waitForChanges();

        const menu = await page.find(
          "ic-select >>> ic-menu >>> #ic-select-input-0-menu"
        );
        expect(await getMenuVisibility(page)).toBe("visible");

        const lastOption = await menu.shadowRoot.querySelectorAll("li")[2];
        expect(lastOption).toHaveClass("focused-option");
        expect(select).toEqualText("Test label 3");
      });
    });

    describe("when an option is selected", () => {
      it("should move focus to next option and set as value when Down Arrow is pressed", async () => {
        const page = await newE2EPage();
        await page.setContent(getTestSelect(options));
        await page.waitForChanges();

        const select = await page.find("ic-select >>> #ic-select-input-0");
        await select.press("ArrowDown");
        await select.press("ArrowDown");
        await page.waitForChanges();

        const menu = await page.find(
          "ic-select >>> ic-menu >>> #ic-select-input-0-menu"
        );
        const secondOption = await menu.shadowRoot.querySelectorAll("li")[1];
        expect(secondOption).toHaveClass("focused-option");
        expect(select).toEqualText("Test label 2");
      });

      it("should move focus to first option and set as value when focus is on last option and Down Arrow is pressed", async () => {
        const page = await newE2EPage();
        await page.setContent(getTestSelect(options));
        await page.waitForChanges();

        const select = await page.find("ic-select >>> #ic-select-input-0");
        await select.press("ArrowUp");
        await select.press("ArrowDown");
        await page.waitForChanges();

        const menu = await page.find(
          "ic-select >>> ic-menu >>> #ic-select-input-0-menu"
        );
        const firstOption = await menu.shadowRoot.querySelectorAll("li")[0];
        expect(firstOption).toHaveClass("focused-option");
        expect(select).toEqualText("Test label 1");
      });

      it("should move focus to previous option and set as value when Up Arrow is pressed", async () => {
        const page = await newE2EPage();
        await page.setContent(getTestSelect(options));
        await page.waitForChanges();

        const select = await page.find("ic-select >>> #ic-select-input-0");
        await select.press("ArrowUp");
        await select.press("ArrowUp");
        await page.waitForChanges();

        const menu = await page.find(
          "ic-select >>> ic-menu >>> #ic-select-input-0-menu"
        );
        const secondOption = await menu.shadowRoot.querySelectorAll("li")[1];
        expect(secondOption).toHaveClass("focused-option");
        expect(select).toEqualText("Test label 2");
      });

      it("should move focus to last option and set as value when focus is on first option and Up Arrow is pressed", async () => {
        const page = await newE2EPage();
        await page.setContent(getTestSelect(options));
        await page.waitForChanges();

        const select = await page.find("ic-select >>> #ic-select-input-0");
        await select.press("ArrowDown");
        await select.press("ArrowUp");
        await page.waitForChanges();

        const menu = await page.find(
          "ic-select >>> ic-menu >>> #ic-select-input-0-menu"
        );
        const lastOption = await menu.shadowRoot.querySelectorAll("li")[2];
        expect(lastOption).toHaveClass("focused-option");
        expect(select).toEqualText("Test label 3");
      });

      it("should move focus to first option and set as value when Home is pressed", async () => {
        const page = await newE2EPage();
        await page.setContent(getTestSelect(options));
        await page.waitForChanges();

        const select = await page.find("ic-select >>> #ic-select-input-0");
        await select.press("ArrowUp");
        await page.keyboard.press("Home");
        await page.waitForChanges();

        const menu = await page.find(
          "ic-select >>> ic-menu >>> #ic-select-input-0-menu"
        );
        const firstOption = await menu.shadowRoot.querySelectorAll("li")[0];
        expect(firstOption).toHaveClass("focused-option");
        expect(select).toEqualText("Test label 1");
      });

      it("should move focus to last option and set as value when End is pressed", async () => {
        const page = await newE2EPage();
        await page.setContent(getTestSelect(options));
        await page.waitForChanges();

        const select = await page.find("ic-select >>> #ic-select-input-0");
        await select.press("ArrowDown");
        await page.keyboard.press("End");
        await page.waitForChanges();

        const menu = await page.find(
          "ic-select >>> ic-menu >>> #ic-select-input-0-menu"
        );
        const lastOption = await menu.shadowRoot.querySelectorAll("li")[2];
        expect(lastOption).toHaveClass("focused-option");
        expect(select).toEqualText("Test label 3");
      });

      it("should display a check next to the selected option and set aria-selected", async () => {
        const page = await newE2EPage();
        await page.setContent(getTestSelect(options));
        await page.waitForChanges();

        const select = await page.find("ic-select >>> #ic-select-input-0");
        await select.press("ArrowDown");
        await page.waitForChanges();

        const menu = await page.find(
          "ic-select >>> ic-menu >>> #ic-select-input-0-menu"
        );
        const firstOption = await menu.shadowRoot.querySelectorAll("li")[0];
        const checkIcon = await menu.shadowRoot
          .querySelectorAll("li")[0]
          .querySelector(".check-icon");
        expect(firstOption).toHaveAttribute("aria-selected");
        expect(checkIcon).not.toBeNull();
      });

      it("should display clear button if the 'show-clear-button' prop is supplied and an option is selected", async () => {
        const page = await newE2EPage();
        await page.setContent(getTestSelect(options));
        const icSelect = await page.find("ic-select");
        await icSelect.setAttribute("show-clear-button", true);
        await page.waitForChanges();

        const select = await page.find("ic-select >>> #ic-select-input-0");
        await select.press("ArrowDown");
        await page.keyboard.press("Enter");
        await page.waitForChanges();

        const clearButton = await page.find("ic-select >>> .clear-button");
        expect(clearButton).not.toBeNull();
      });

      it("should not display a clear button if the 'show-clear-button' prop is not supplied", async () => {
        const page = await newE2EPage();
        await page.setContent(getTestSelect(options));
        await page.waitForChanges();

        const select = await page.find("ic-select >>> #ic-select-input-0");
        await select.press("ArrowDown");
        await page.keyboard.press("Enter");
        await page.waitForChanges();

        const clearButton = await page.find("ic-select >>> .clear-button");
        expect(clearButton).toBeNull();
      });

      it("should clear the input if the clear button is clicked", async () => {
        const page = await newE2EPage();
        await page.setContent(getTestSelect(options));
        const icSelect = await page.find("ic-select");
        await icSelect.setAttribute("show-clear-button", true);
        await page.waitForChanges();

        const icChange = await page.spyOnEvent("icChange");
        const select = await page.find("ic-select >>> #ic-select-input-0");
        await select.press("ArrowDown");
        await page.keyboard.press("Enter");
        await page.waitForChanges();

        const clearButton = await page.find("ic-select >>> .clear-button");
        await clearButton.click();
        await page.waitForChanges();

        expect(select).toEqualText("Select an option");
        expect(icChange).toHaveReceivedEventDetail({
          value: null,
        });
      });
    });

    it("should close menu when input is clicked while open and set focus on it", async () => {
      const page = await newE2EPage();
      await page.setContent(getTestSelect(options));
      await page.waitForChanges();

      const select = await page.find("ic-select >>> #ic-select-input-0");
      await select.click();
      await page.waitForChanges();

      await select.click();
      await page.waitForChanges();

      await page.waitForTimeout(1000);
      const menuVisibility = await page.evaluate(() => {
        const menu = document
          .querySelector("ic-select")
          .shadowRoot.querySelector("ic-menu")
          .shadowRoot.querySelector("#ic-select-input-0-menu");
        return window.getComputedStyle(menu).visibility;
      });
      expect(menuVisibility).toBe("hidden");

      const activeElId = await page.$eval(
        "ic-select",
        (el) => el.shadowRoot.activeElement.id
      );
      expect(activeElId).toBe("ic-select-input-0");
    });

    it("should close menu when an option is clicked, set as value and move focus onto the input", async () => {
      const page = await newE2EPage();
      await page.setContent(getTestSelect(options));
      await page.waitForChanges();

      const select = await page.find("ic-select >>> #ic-select-input-0");
      await select.click();
      await page.waitForChanges();

      const icChange = await page.spyOnEvent("icChange");
      const menu = await page.find(
        "ic-select >>> ic-menu >>> #ic-select-input-0-menu"
      );
      await menu.click();
      await page.waitForChanges();

      await page.waitForTimeout(1000);
      const menuVisibility = await page.evaluate(() => {
        const menu = document
          .querySelector("ic-select")
          .shadowRoot.querySelector("ic-menu")
          .shadowRoot.querySelector("#ic-select-input-0-menu");
        return window.getComputedStyle(menu).visibility;
      });
      expect(menuVisibility).toBe("hidden");
      expect(icChange).toHaveReceivedEventDetail({
        value: "Test value 2",
      });
      expect(select).toEqualText("Test label 2");

      const activeElId = await page.$eval(
        "ic-select",
        (el) => el.shadowRoot.activeElement.id
      );
      expect(activeElId).toBe("ic-select-input-0");
    });

    it("should close menu when Space is pressed", async () => {
      const page = await newE2EPage();
      await page.setContent(getTestSelect(options));
      await page.waitForChanges();

      const select = await page.find("ic-select >>> #ic-select-input-0");
      await select.press("ArrowDown");
      await page.waitForChanges();

      await page.keyboard.press(" ");
      await page.waitForChanges();

      await page.waitForTimeout(1000);
      const menuVisibility = await page.evaluate(() => {
        const menu = document
          .querySelector("ic-select")
          .shadowRoot.querySelector("ic-menu")
          .shadowRoot.querySelector("#ic-select-input-0-menu");
        return window.getComputedStyle(menu).visibility;
      });
      expect(menuVisibility).toBe("hidden");
    });

    it("should close menu when Enter is pressed", async () => {
      const page = await newE2EPage();
      await page.setContent(getTestSelect(options));
      await page.waitForChanges();

      const select = await page.find("ic-select >>> #ic-select-input-0");
      await select.press("ArrowDown");
      await page.waitForChanges();

      await page.keyboard.press("Enter");
      await page.waitForChanges();

      await page.waitForTimeout(1000);
      const menuVisibility = await page.evaluate(() => {
        const menu = document
          .querySelector("ic-select")
          .shadowRoot.querySelector("ic-menu")
          .shadowRoot.querySelector("#ic-select-input-0-menu");
        return window.getComputedStyle(menu).visibility;
      });
      expect(menuVisibility).toBe("hidden");
    });

    it("should close menu when Escape is pressed", async () => {
      const page = await newE2EPage();
      await page.setContent(getTestSelect(options));
      await page.waitForChanges();

      const select = await page.find("ic-select >>> #ic-select-input-0");
      await select.press("ArrowDown");
      await page.waitForChanges();

      await page.keyboard.press("Escape");
      await page.waitForChanges();

      await page.waitForTimeout(1000);
      const menuVisibility = await page.evaluate(() => {
        const menu = document
          .querySelector("ic-select")
          .shadowRoot.querySelector("ic-menu")
          .shadowRoot.querySelector("#ic-select-input-0-menu");
        return window.getComputedStyle(menu).visibility;
      });
      expect(menuVisibility).toBe("hidden");
    });

    it("should close menu when another element on the page is clicked", async () => {
      const page = await newE2EPage();
      await page.setContent(
        `${getTestSelect(options)}<button>Test button</button>`
      );
      await page.waitForChanges();

      const select = await page.find("ic-select >>> #ic-select-input-0");
      await select.press("ArrowDown");
      await page.waitForChanges();

      const button = await page.find("button");
      await button.click();
      await page.waitForChanges();

      await page.waitForTimeout(1000);
      const menuVisibility = await page.evaluate(() => {
        const menu = document
          .querySelector("ic-select")
          .shadowRoot.querySelector("ic-menu")
          .shadowRoot.querySelector("#ic-select-input-0-menu");
        return window.getComputedStyle(menu).visibility;
      });
      expect(menuVisibility).toBe("hidden");
    });

    it("should close menu when Tab is pressed to move focus onto the next element on the page", async () => {
      const page = await newE2EPage();
      await page.setContent(
        `${getTestSelect(options)}<button>Test button</button>`
      );
      await page.waitForChanges();

      const select = await page.find("ic-select >>> #ic-select-input-0");
      await select.press("ArrowDown");
      await page.waitForChanges();

      await page.keyboard.press("Tab");
      await page.waitForChanges();

      await page.waitForTimeout(1000);
      const menuVisibility = await page.evaluate(() => {
        const menu = document
          .querySelector("ic-select")
          .shadowRoot.querySelector("ic-menu")
          .shadowRoot.querySelector("#ic-select-input-0-menu");
        return window.getComputedStyle(menu).visibility;
      });
      expect(menuVisibility).toBe("hidden");
    });

    it("should close menu when Shift + Tab is pressed to move focus onto the input", async () => {
      const page = await newE2EPage();
      await page.setContent(
        `${getTestSelect(options)}<button>Test button</button>`
      );
      await page.waitForChanges();

      const select = await page.find("ic-select >>> #ic-select-input-0");
      await select.press("ArrowDown");
      await page.waitForChanges();
      await page.waitForTimeout(1000);

      await page.keyboard.down("Shift");
      await page.keyboard.press("Tab");
      await page.keyboard.up("Shift");
      await page.waitForChanges();

      await page.waitForTimeout(1000);
      const menuVisibility = await page.evaluate(() => {
        const menu = document
          .querySelector("ic-select")
          .shadowRoot.querySelector("ic-menu")
          .shadowRoot.querySelector("#ic-select-input-0-menu");
        return window.getComputedStyle(menu).visibility;
      });
      expect(menuVisibility).toBe("hidden");

      const activeElId = await page.$eval(
        "ic-select",
        (el) => el.shadowRoot.activeElement.id
      );
      expect(activeElId).toBe("ic-select-input-0");
    });

    it("should display the label of the value passed in using the 'value' prop as the selected option", async () => {
      const page = await newE2EPage();
      await page.setContent(getTestSelect(options));
      const icSelect = await page.find("ic-select");
      await icSelect.setAttribute("value", "Test value 2");
      await page.waitForChanges();

      const select = await page.find("ic-select >>> #ic-select-input-0");
      expect(select).toEqualText("Test label 2");
    });

    it("should render options with descriptions", async () => {
      const page = await newE2EPage();
      const optionsWithDescription = `[
        { label: 'Test label 1', value: 'Test value 1', description: 'Test description 1' },
        { label: 'Test label 2', value: 'Test value 2' },
        { label: 'Test label 3', value: 'Test value 3' },
      ]`;
      await page.setContent(getTestSelect(optionsWithDescription));
      await page.waitForChanges();

      const select = await page.find("ic-select >>> #ic-select-input-0");
      await select.press("ArrowDown");
      await page.waitForChanges();

      const menu = await page.find(
        "ic-select >>> ic-menu >>> #ic-select-input-0-menu"
      );
      const firstOptionDescription = await menu.shadowRoot
        .querySelectorAll("li")[0]
        .querySelector(".option-description");
      expect(firstOptionDescription).toEqualText("Test description 1");
    });

    it("should render the placeholder", async () => {
      const page = await newE2EPage();
      await page.setContent(getTestSelect(options));
      const icSelect = await page.find("ic-select");
      await icSelect.setAttribute("placeholder", "Test placeholder");
      await page.waitForChanges();

      const select = await page.find("ic-select >>> #ic-select-input-0");
      expect(select).toEqualText("Test placeholder");
    });

    it("should render as disabled correctly", async () => {
      const page = await newE2EPage();
      await page.setContent(getTestSelect(options));
      const icSelect = await page.find("ic-select");
      await icSelect.setAttribute("disabled", true);
      await page.waitForChanges();

      const select = await page.find("ic-select >>> #ic-select-input-0");
      expect(select).toHaveAttribute("disabled");

      await select.click();
      await page.waitForChanges();

      const menuVisibility = await page.evaluate(() => {
        const menu = document
          .querySelector("ic-select")
          .shadowRoot.querySelector("ic-menu")
          .shadowRoot.querySelector("#ic-select-input-0-menu");
        return window.getComputedStyle(menu).visibility;
      });
      expect(menuVisibility).toBe("hidden");
    });

    it("should prevent click on disabled options", async () => {
      const page = await newE2EPage();
      const optionsWithDisabled = `[
        { label: 'Test label 1', value: 'Test value 1' },
        { label: 'Test label 2', value: 'Test value 2', disabled: true },
        { label: 'Test label 3', value: 'Test value 3' },
      ]`;
      await page.setContent(getTestSelect(optionsWithDisabled));
      await page.waitForChanges();

      const select = await page.find("ic-select >>> #ic-select-input-0");
      await select.press("ArrowDown");
      await page.waitForChanges();

      const menu = await page.find(
        "ic-select >>> ic-menu >>> #ic-select-input-0-menu"
      );
      await menu.click();
      await page.waitForChanges();

      expect(await getMenuVisibility(page)).toBe("visible");
    });

    it("should set aria-disabled and skip focus when option disabled", async () => {
      const page = await newE2EPage();
      const optionsWithDisabled = `[
        { label: 'Test label 1', value: 'Test value 1', disabled: true },
        { label: 'Test label 2', value: 'Test value 2' },
        { label: 'Test label 3', value: 'Test value 3' },
      ]`;
      await page.setContent(getTestSelect(optionsWithDisabled));
      await page.waitForChanges();

      const select = await page.find("ic-select >>> #ic-select-input-0");
      await select.press("ArrowDown");
      await page.waitForChanges();

      const menu = await page.find(
        "ic-select >>> ic-menu >>> #ic-select-input-0-menu"
      );
      const menuOptions = await menu.shadowRoot.querySelectorAll("li");
      expect(menuOptions[0]).toHaveAttribute("aria-disabled");
      expect(menuOptions[1]).toHaveClass("focused-option");
    });

    it("should render as required correctly", async () => {
      const page = await newE2EPage();
      await page.setContent(getTestSelect(options));
      const icSelect = await page.find("ic-select");
      icSelect.setAttribute("required", true);
      await page.waitForChanges();

      const label = await page.find("ic-select >>> ic-input-label");
      expect(label).toEqualText("IC Select Test *");

      const select = await page.find("ic-select >>> #ic-select-input-0");
      expect(
        select.getAttribute("aria-label").includes("required")
      ).toBeTruthy();
    });

    it("should render selected value as text when read-only", async () => {
      const page = await newE2EPage();
      await page.setContent(getTestSelect(options));
      const icSelect = await page.find("ic-select");
      icSelect.setAttribute("value", "Test value 1");
      icSelect.setAttribute("readonly", true);
      await page.waitForChanges();

      const select = await page.find("ic-select >>> #ic-select-input-0");
      const typography = await page.evaluate(() =>
        Array.from(
          document
            .querySelector("ic-select")
            .shadowRoot.querySelectorAll("ic-typography"),
          (typography) => typography.innerText
        )
      );

      expect(select).toBe(null);
      expect(typography[1]).toBe("Test label 1");
    });

    it("should render options as groups if they have children", async () => {
      const page = await newE2EPage();
      const groupedOptions = `[
        {
          label: 'Test group',
          children: [
            { label: 'Test label 1', value: 'Test value 1' },
            { label: 'Test label 2', value: 'Test value 2' },
            { label: 'Test label 3', value: 'Test value 3' },
          ],
        },
      ]`;
      await page.setContent(getTestSelect(groupedOptions));
      await page.waitForChanges();

      const select = await page.find("ic-select >>> #ic-select-input-0");
      await select.press("ArrowDown");
      await page.waitForChanges();

      const optionGroupTitle = await page.find(
        "ic-select >>> ic-menu >>> .option-group-title"
      );
      expect(optionGroupTitle).not.toBeNull();

      const optionsText = await page.evaluate(() =>
        Array.from(
          document
            .querySelector("ic-select")
            .shadowRoot.querySelector("ic-menu")
            .shadowRoot.querySelectorAll("ic-typography"),
          (typography) => typography.innerText
        )
      );
      expect(optionsText[0]).toBe("Test group");
    });

    it("should render and focus child options correctly", async () => {
      const page = await newE2EPage();
      const groupedOptions = `[
        {
          label: 'Test group',
          children: [
            { label: 'Test label 1', value: 'Test value 1' },
            { label: 'Test label 2', value: 'Test value 2' },
            { label: 'Test label 3', value: 'Test value 3' },
          ],
        },
      ]`;
      await page.setContent(getTestSelect(groupedOptions));
      await page.waitForChanges();

      const select = await page.find("ic-select >>> #ic-select-input-0");
      await select.press("ArrowDown");
      await page.waitForChanges();

      const menu = await page.find(
        "ic-select >>> ic-menu >>> #ic-select-input-0-menu"
      );
      const childOptions = await menu.shadowRoot.querySelectorAll("li");
      expect(childOptions).toHaveLength(3);
      expect(childOptions[0]).toEqualText("Test label 1");
      expect(childOptions[1]).toEqualText("Test label 2");
      expect(childOptions[2]).toEqualText("Test label 3");
      expect(childOptions[0]).toHaveClass("focused-option");
    });

    it("should render options at the top of the menu if they are recommended", async () => {
      const page = await newE2EPage();
      const optionsWithDisabled = `[
        { label: 'Test label 1', value: 'Test value 1' },
        { label: 'Test label 2', value: 'Test value 2', recommended: true },
        { label: 'Test label 3', value: 'Test value 3' },
      ]`;
      await page.setContent(getTestSelect(optionsWithDisabled));
      await page.waitForChanges();

      const select = await page.find("ic-select >>> #ic-select-input-0");
      await select.press("ArrowDown");
      await page.waitForChanges();

      const menu = await page.find(
        "ic-select >>> ic-menu >>> #ic-select-input-0-menu"
      );
      const firstOption = await menu.shadowRoot.querySelectorAll("li")[0];
      expect(firstOption).toEqualText("Test label 2");
    });

    it("should set aria-invalid if validation status is 'error'", async () => {
      const page = await newE2EPage();
      await page.setContent(getTestSelect(options));
      const icSelect = await page.find("ic-select");
      icSelect.setAttribute("validation-status", "error");
      await page.waitForChanges();

      const select = await page.find("ic-select >>> #ic-select-input-0");
      expect(select).toHaveAttribute("aria-invalid");
    });

    it("should set the aria-label correctly if an option has a description", async () => {
      const page = await newE2EPage();
      const optionsWithDescription = `[
        { label: 'Test label 1', value: 'Test value 1', description: 'Test description 1' },
        { label: 'Test label 2', value: 'Test value 2' },
        { label: 'Test label 3', value: 'Test value 3' },
      ]`;
      await page.setContent(getTestSelect(optionsWithDescription));
      await page.waitForChanges();

      const select = await page.find("ic-select >>> #ic-select-input-0");
      await select.press("ArrowDown");
      await page.waitForChanges();

      const menu = await page.find(
        "ic-select >>> ic-menu >>> #ic-select-input-0-menu"
      );
      const firstOption = await menu.shadowRoot.querySelectorAll("li")[0];
      expect(firstOption.getAttribute("aria-label")).toBe(
        "Test label 1, Test description 1"
      );
    });

    it("should set the aria-label correctly if an option is within a group", async () => {
      const page = await newE2EPage();
      const optionsWithDescription = `[
        {
          label: 'Test group',
          children: [
            { label: 'Test label 1', value: 'Test value 1' },
            { label: 'Test label 2', value: 'Test value 2' },
            { label: 'Test label 3', value: 'Test value 3' },
          ],
        },
      ]`;
      await page.setContent(getTestSelect(optionsWithDescription));
      await page.waitForChanges();

      const select = await page.find("ic-select >>> #ic-select-input-0");
      await select.press("ArrowDown");
      await page.waitForChanges();

      const menu = await page.find(
        "ic-select >>> ic-menu >>> #ic-select-input-0-menu"
      );
      const firstOption = await menu.shadowRoot.querySelectorAll("li")[0];
      expect(firstOption.getAttribute("aria-label")).toBe(
        "Test label 1, Test group group"
      );
    });

    it("should set the aria-label correctly if an option has a description and is within a group", async () => {
      const page = await newE2EPage();
      const optionsWithDescription = `[
        {
          label: 'Test group',
          children: [
            { label: 'Test label 1', value: 'Test value 1', description: 'Test description 1' },
            { label: 'Test label 2', value: 'Test value 2' },
            { label: 'Test label 3', value: 'Test value 3' },
          ],
        },
      ]`;
      await page.setContent(getTestSelect(optionsWithDescription));
      await page.waitForChanges();

      const select = await page.find("ic-select >>> #ic-select-input-0");
      await select.press("ArrowDown");
      await page.waitForChanges();

      const menu = await page.find(
        "ic-select >>> ic-menu >>> #ic-select-input-0-menu"
      );
      const firstOption = await menu.shadowRoot.querySelectorAll("li")[0];
      expect(firstOption.getAttribute("aria-label")).toBe(
        "Test label 1, Test description 1, Test group group"
      );
    });

    it("should call icFocus when focused", async () => {
      const page = await newE2EPage();
      await page.setContent(
        `<button>Test button</button>${getTestSelect(options)}`
      );
      await page.waitForChanges();

      const button = await page.find("button");
      await button.focus();
      await page.waitForChanges();

      const icFocus = await page.spyOnEvent("icFocus");
      await page.keyboard.down("Tab");
      await page.waitForChanges();

      expect(icFocus).toHaveReceivedEvent();
    });

    it("should call icBlur when it loses focus", async () => {
      const page = await newE2EPage();
      await page.setContent(getTestSelect(options));
      await page.waitForChanges();

      const icBlur = await page.spyOnEvent("icBlur");

      await page.keyboard.down("Tab");
      await page.keyboard.down("Tab");
      await page.waitForChanges();

      expect(icBlur).toHaveReceivedEvent();
    });
  });

  describe("searchable", () => {
    it("should open menu when character is entered in input field and filter options", async () => {
      const page = await newE2EPage();
      await page.setContent(getTestSearchableSelect(searchableOptions));
      await page.waitForChanges();

      const select = await page.find("ic-select >>> #ic-select-input-0");
      await select.press("c");
      await page.waitForChanges();

      expect(await getMenuVisibility(page)).toBe("visible");

      const menu = await page.find(
        "ic-select >>> ic-menu >>> #ic-select-input-0-menu"
      );
      const menuOptions = await menu.shadowRoot.querySelectorAll("li");
      expect(menuOptions).toHaveLength(4);
      expect(menuOptions[0]).toEqualText("Cappuccino");
      expect(menuOptions[1]).toEqualText("Americano");
      expect(menuOptions[2]).toEqualText("Mocha");
      expect(menuOptions[3]).toEqualText("Macchiato");
    });

    it("should display no results state when search term matches none of the options", async () => {
      const page = await newE2EPage();
      await page.setContent(getTestSearchableSelect(searchableOptions));
      await page.waitForChanges();

      const select = await page.find("ic-select >>> #ic-select-input-0");
      await select.press("z");
      await page.waitForChanges();

      const menu = await page.find(
        "ic-select >>> ic-menu >>> #ic-select-input-0-menu"
      );
      const menuOptions = await menu.shadowRoot.querySelectorAll("li");
      expect(menuOptions).toHaveLength(1);
      expect(menuOptions[0]).toEqualText("No results found");
    });

    it("should filter options accordingly when Backspace is pressed", async () => {
      const page = await newE2EPage();
      await page.setContent(getTestSearchableSelect(searchableOptions));
      await page.waitForChanges();

      const select = await page.find("ic-select >>> #ic-select-input-0");
      await select.press("f");
      await page.waitForChanges();
      await select.press("i");
      await page.waitForChanges();
      await select.press("Backspace");
      await page.waitForChanges();

      const menu = await page.find(
        "ic-select >>> ic-menu >>> #ic-select-input-0-menu"
      );
      const menuOptions = await menu.shadowRoot.querySelectorAll("li");
      expect(menuOptions).toHaveLength(2);
      expect(menuOptions[0]).toEqualText("Filter");
      expect(menuOptions[1]).toEqualText("Flat white");
    });

    it("should filter options when search match position is set to start", async () => {
      const page = await newE2EPage();
      await page.setContent(getTestSearchableSelect(searchableOptions));
      const icSelect = await page.find("ic-select");
      await icSelect.setAttribute("search-match-position", "start");
      await page.waitForChanges();

      const select = await page.find("ic-select >>> #ic-select-input-0");
      await select.press("l");
      await page.waitForChanges();

      const menu = await page.find(
        "ic-select >>> ic-menu >>> #ic-select-input-0-menu"
      );
      const menuOptions = await menu.shadowRoot.querySelectorAll("li");
      expect(menuOptions).toHaveLength(1);
      expect(menuOptions[0]).toEqualText("Latte");
    });

    it("should include option descriptions in search", async () => {
      const page = await newE2EPage();
      const optionsWithDescription = `[
        { label: "Cappuccino", value: "Cap" },
        { label: "Latte", value: "Lat", description: "A milkier coffee than a cappuccino" },
        { label: "Americano", value: "Ame" },
        { label: "Filter", value: "Fil" },
        { label: "Flat white", value: "Fla" },
        { label: "Mocha", value: "Moc" },
        { label: "Macchiato", value: "Mac" },
      ]`;
      await page.setContent(getTestSearchableSelect(optionsWithDescription));
      const icSelect = await page.find("ic-select");
      await icSelect.setAttribute("include-descriptions-in-search", "start");
      await page.waitForChanges();

      const select = await page.find("ic-select >>> #ic-select-input-0");
      await select.press("m");
      await page.waitForChanges();
      await select.press("i");
      await page.waitForChanges();

      const menu = await page.find(
        "ic-select >>> ic-menu >>> #ic-select-input-0-menu"
      );
      const menuOptions = await menu.shadowRoot.querySelectorAll("li");
      expect(menuOptions).toHaveLength(1);
      expect(menuOptions[0].textContent.substring(0, 5)).toEqualText("Latte");
    });

    it("should not include group titles in search", async () => {
      const page = await newE2EPage();
      const groupedOptions = `[
        {
          label: "Fancy",
          children: [
            { label: "Cappuccino", value: "Cap" },
            { label: "Flat white", value: "Flat" },
          ],
        },
        {
          label: "Boring",
          children: [
            { label: "Filter", value: "Fil" },
            { label: "Latte", value: "Lat" },
          ],
        },
      ]`;
      await page.setContent(getTestSearchableSelect(groupedOptions));
      await page.waitForChanges();

      const select = await page.find("ic-select >>> #ic-select-input-0");
      await select.press("b");
      await page.waitForChanges();

      const menu = await page.find(
        "ic-select >>> ic-menu >>> #ic-select-input-0-menu"
      );
      const menuOptions = await menu.shadowRoot.querySelectorAll("li");
      expect(menuOptions).toHaveLength(1);
      expect(menuOptions[0]).toEqualText("No results found");
    });

    it("should display whole group when group titles included in search", async () => {
      const page = await newE2EPage();
      const groupedOptions = `[
        {
          label: "Fancy",
          children: [
            { label: "Cappuccino", value: "Cap" },
            { label: "Flat white", value: "Flat" },
          ],
        },
        {
          label: "Boring",
          children: [
            { label: "Filter", value: "Fil" },
            { label: "Latte", value: "Lat" },
          ],
        },
      ]`;
      await page.setContent(getTestSearchableSelect(groupedOptions));
      const icSelect = await page.find("ic-select");
      await icSelect.setAttribute("include-group-titles-in-search", "true");
      await page.waitForChanges();

      const select = await page.find("ic-select >>> #ic-select-input-0");
      await select.press("b");
      await page.waitForChanges();

      const menu = await page.find(
        "ic-select >>> ic-menu >>> #ic-select-input-0-menu"
      );
      const menuOptions = await menu.shadowRoot.querySelectorAll("li");
      expect(menuOptions).toHaveLength(2);
      expect(menuOptions[0]).toEqualText("Filter");
      expect(menuOptions[1]).toEqualText("Latte");
    });

    it("should display a clear button which clears the input when clicked", async () => {
      const page = await newE2EPage();
      await page.setContent(getTestSearchableSelect(searchableOptions));
      await page.waitForChanges();

      const icChange = await page.spyOnEvent("icChange");
      const select = await page.find("ic-select >>> #ic-select-input-0");
      await select.press("a");
      await page.waitForChanges();

      const clearButton = await page.find("ic-select >>> .clear-button");
      expect(clearButton).not.toBeNull();

      await clearButton.click();
      expect(select.textContent).toBe("");
      expect(icChange).toHaveReceivedEventDetail({
        value: null,
      });
    });

    it("should emit the value as null when the input is changed after selecting an option", async () => {
      const page = await newE2EPage();
      await page.setContent(getTestSearchableSelect(searchableOptions));
      await page.waitForChanges();

      const icChange = await page.spyOnEvent("icChange");
      const select = await page.find("ic-select >>> #ic-select-input-0");
      await select.press("Enter");
      await page.waitForChanges();
      await select.press("ArrowDown");
      await page.waitForChanges();

      expect(icChange).toHaveReceivedEventDetail({
        value: "Cap",
      });

      const clearButton = await page.find("ic-select >>> .clear-button");
      await clearButton.click();
      await page.waitForChanges();

      expect(icChange).toHaveReceivedEventDetail({
        value: null,
      });
    });

    it("should close menu on blur", async () => {
      const page = await newE2EPage();
      await page.setContent(getTestSearchableSelect(searchableOptions));
      await page.waitForChanges();

      const select = await page.find("ic-select >>> #ic-select-input-0");
      await select.click();
      await page.waitForChanges();

      expect(await getMenuVisibility(page)).toBe("visible");

      await select.press("Tab");

      expect(await getMenuVisibility(page)).toBe("hidden");
    });

    it("should emit icChange on delay", async () => {
      const page = await newE2EPage();
      await page.setContent(
        `<ic-select label="IC Select Test" debounce="500" searchable disable-filter></ic-select>`
      );

      await page.waitForChanges();

      const icChange = await page.spyOnEvent("icChange");

      await focusAndTypeIntoInput("foo", page);

      await page.waitForTimeout(600);
      expect(icChange).toHaveReceivedEventDetail({
        value: "foo",
      });

      await focusAndTypeIntoInput("bar", page);
      await page.waitForChanges();
      await page.waitForTimeout(100);
      expect(icChange).toHaveReceivedEventDetail({
        value: "foo",
      });
      await page.waitForTimeout(500);
      expect(icChange).toHaveReceivedEventDetail({
        value: "foobar",
      });
    });
  });

  it("should reset to initial value on form reset", async () => {
    const page = await newE2EPage();
    await page.setContent(getTestSelectFormReset(options));
    await page.waitForChanges();

    let value = await page.$eval("ic-select", (el) => {
      const select = el as unknown as HTMLIcSelectElement;
      return select.value;
    });
    expect(value).toBe(undefined);
    const select = await page.find("ic-select >>> #ic-select-input-0");

    await select.press("Enter");
    await page.waitForChanges();
    await select.press("ArrowDown");
    await page.waitForChanges();

    value = await page.$eval("ic-select", (el) => {
      const select = el as unknown as HTMLIcSelectElement;
      return select.value;
    });
    expect(value).toBe("Test value 1");

    await page.$eval("#resetButton", (el) => {
      const reset = el as unknown as HTMLButtonElement;
      reset.click();
    });
    await page.waitForChanges();

    value = await page.$eval("ic-select", (el) => {
      const select = el as unknown as HTMLIcSelectElement;
      return select.value;
    });
    expect(value).toBe(undefined);
  });

  it("should not display 'no results found' on initial load if setting default value and disable filter is set", async () => {
    const page = await newE2EPage();
    await page.setContent(getTestSearchableSelectAsync());
    await page.waitForChanges();
    await page.waitForTimeout(900);

    expect(await getMenuVisibility(page)).toBe("hidden");
  });

  it("should reset to initial value on form reset with searchable", async () => {
    const page = await newE2EPage();
    await page.setContent(getTestSelectSearchableFormReset(options));
    await page.waitForChanges();

    let value = await page.$eval("ic-select", (el) => {
      const select = el as unknown as HTMLIcSelectElement;
      return select.value;
    });
    expect(value).toBe("Test value 1");

    const select = await page.find("ic-select >>> #ic-select-input-0");

    await select.press("Enter");
    await page.waitForChanges();
    await select.press("ArrowDown");
    await page.waitForChanges();
    await select.press("Enter");
    await page.waitForChanges();

    value = await page.$eval("ic-select", (el) => {
      const select = el as unknown as HTMLIcSelectElement;
      return select.value;
    });
    expect(value).toBe("Test value 2");

    await page.$eval("#resetButton", (el) => {
      const reset = el as unknown as HTMLButtonElement;
      reset.click();
    });
    await page.waitForChanges();

    value = await page.$eval("ic-select", (el) => {
      const select = el as unknown as HTMLIcSelectElement;
      return select.value;
    });
    expect(value).toBe("Test value 1");
  });

  let page: E2EPage;

  describe("native", () => {
    beforeEach(async () => {
      page = await newE2EPage();
      await page.setUserAgent(
        "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1"
      );
      await page.setViewport({
        width: 375,
        height: 667,
        isMobile: true,
        hasTouch: true,
      });
    });

    it("should render", async () => {
      await page.setContent(getTestSelect(options));
      await page.waitForChanges();

      const select = await page.find("ic-select");

      expect(select.shadowRoot)
        .toEqualHtml(`<ic-input-container class="hydrated">
      <!---->
        <div class="component-container">
          <ic-input-label class="hydrated">
            <ic-typography class="hydrated ic-typography-label">
              <label for="ic-select-input-0">
                IC Select Test
              </label>
            </ic-typography>
          </ic-input-label>
          <ic-input-component-container class="hydrated">
            <!---->
            <div class="focus-indicator">
              <select aria-describedby="" aria-invalid="false" aria-label="IC Select Test" id="ic-select-input-0" class="placeholder">
                <option disabled="" value="">
                  Select an option
                </option>
                <option value="Test value 1">
                  Test label 1
                </option>
                <option value="Test value 2">
                  Test label 2
                </option>
                <option value="Test value 3">
                  Test label 3
                </option>
              </select>
            </div>
          </ic-input-component-container>
        </div>
      </ic-input-container>`);
    });

    it("should render when no options are provided", async () => {
      await page.setContent(`<ic-select label="IC Select Test"></ic-select>`);
      await page.waitForChanges();

      const select = await page.find("ic-select");

      expect(select.shadowRoot).toEqualHtml(`
        <ic-input-container class="hydrated">
      <!---->
      <div class="component-container">
        <ic-input-label class="hydrated">
          <ic-typography class="hydrated ic-typography-label">
            <label for="ic-select-input-0">
              IC Select Test
            </label>
          </ic-typography>
        </ic-input-label>
        <ic-input-component-container class="hydrated">
          <!---->
          <div class="focus-indicator">
            <select aria-describedby="" aria-invalid="false" aria-label="IC Select Test" class="placeholder" id="ic-select-input-0">
              <option disabled="" value="">
                Select an option
              </option>
            </select>
          </div>
        </ic-input-component-container>
      </div>
    </ic-input-container>
      `);
    });

    it("should disable options correctly", async () => {
      const optionsWithDisabled = `[
        { label: 'Test label 1', value: 'Test value 1', disabled: true },
        { label: 'Test label 2', value: 'Test value 2' },
        { label: 'Test label 3', value: 'Test value 3' },
      ]`;
      await page.setContent(getTestSelect(optionsWithDisabled));
      await page.waitForChanges();

      const optionsDisabled = await page.evaluate(() =>
        Array.from(
          document
            .querySelector("ic-select")
            .shadowRoot.querySelectorAll("option"),
          (option) => option.disabled
        )
      );

      expect(optionsDisabled[0]).toBe(true);
    });

    it("should render options as <optgroup>s if they have children", async () => {
      const groupedOptions = `[
        {
          label: 'Test group',
          children: [
            { label: 'Test label 1', value: 'Test value 1' },
            { label: 'Test label 2', value: 'Test value 2' },
            { label: 'Test label 3', value: 'Test value 3' },
          ],
        },
      ]`;
      await page.setContent(getTestSelect(groupedOptions));
      await page.waitForChanges();

      const optGroup = await page.evaluate(() =>
        document.querySelector("ic-select").shadowRoot.querySelector("optgroup")
      );

      expect(optGroup).toBeTruthy();
    });

    it("should render a required <select> when required", async () => {
      await page.setContent(getTestSelect(options));
      const icSelect = await page.find("ic-select");
      icSelect.setAttribute("required", true);
      await page.waitForChanges();

      const select = await page.find("ic-select >>> select");

      expect(select).toHaveAttribute("required");
    });

    it("should not render a label when the 'hide-label' prop is supplied", async () => {
      await page.setContent(getTestSelect(options));
      const icSelect = await page.find("ic-select");
      icSelect.setAttribute("hide-label", true);
      await page.waitForChanges();

      const label = await page.find("ic-select >>> ic-input-label");

      expect(label).toBeNull();
    });

    it("should render a disabled <select> when the 'disabled' prop is supplied", async () => {
      await page.setContent(getTestSelect(options));
      const icSelect = await page.find("ic-select");
      icSelect.setAttribute("disabled", true);
      await page.waitForChanges();

      const select = await page.find("ic-select >>> select");

      expect(select).toHaveAttribute("disabled");
    });

    it("should render the selected value as text instead of rendering a <select> when read-only", async () => {
      await page.setContent(getTestSelect(options));
      const icSelect = await page.find("ic-select");
      icSelect.setAttribute("value", "Test value 1");
      icSelect.setAttribute("readonly", true);
      await page.waitForChanges();

      const select = await page.find("ic-select >>> select");
      const typography = await page.evaluate(() =>
        Array.from(
          document
            .querySelector("ic-select")
            .shadowRoot.querySelectorAll("ic-typography"),
          (typography) => typography.innerText
        )
      );

      expect(select).toBe(null);
      expect(typography[1]).toBe("Test label 1");
    });

    it("should render the correct placeholder", async () => {
      await page.setContent(getTestSelect(options));
      const icSelect = await page.find("ic-select");
      icSelect.setAttribute("placeholder", "Test placeholder");
      await page.waitForChanges();

      const optionLabels = await page.evaluate(() =>
        Array.from(
          document
            .querySelector("ic-select")
            .shadowRoot.querySelectorAll("option"),
          (option) => option.innerText
        )
      );

      expect(optionLabels[0]).toEqual("Test placeholder");
    });

    it("should set aria-invalid if validation status is 'error'", async () => {
      await page.setContent(getTestSelect(options));
      const icSelect = await page.find("ic-select");
      icSelect.setAttribute("validation-status", "error");
      await page.waitForChanges();

      const select = await page.find("ic-select >>> select");
      expect(select).toHaveAttribute("aria-invalid");
    });

    it("should display the value passed in using the 'value' prop as the selected option", async () => {
      await page.setContent(getTestSelect(options));
      const icSelect = await page.find("ic-select");
      icSelect.setAttribute("value", "Test value 1");
      await page.waitForChanges();

      const optionsSelected = await page.evaluate(() =>
        Array.from(
          document
            .querySelector("ic-select")
            .shadowRoot.querySelectorAll("option"),
          (option) => option.selected
        )
      );

      expect(optionsSelected[1]).toBe(true);
    });

    it("should set the correct name on the hidden input", async () => {
      await page.setContent(getTestSelect(options));
      const icSelect = await page.find("ic-select");
      icSelect.setAttribute("name", "Test name");
      await page.waitForChanges();

      const hiddenInput = await page.find("input");
      const hiddenInputName = await hiddenInput.getProperty("name");

      expect(hiddenInputName).toEqual("Test name");
    });

    it("should call icChange when the selected option is changed", async () => {
      await page.setContent(getTestSelect(options));
      await page.waitForChanges();

      const icChange = await page.spyOnEvent("icChange");

      const select = await page.find("ic-select >>> select");
      await select.press("ArrowDown");
      await select.press("Enter");
      await page.waitForChanges();

      expect(icChange).toHaveReceivedEventDetail({
        value: "Test value 1",
      });
    });

    it("should call icFocus when focused", async () => {
      await page.setContent(getTestSelect(options));
      await page.waitForChanges();

      const icFocus = await page.spyOnEvent("icFocus");

      await page.keyboard.down("Tab");
      await page.waitForChanges();

      expect(icFocus).toHaveReceivedEvent();
    });

    it("should call icBlur when it loses focus", async () => {
      await page.setContent(getTestSelect(options));
      await page.waitForChanges();

      const icBlur = await page.spyOnEvent("icBlur");

      await page.keyboard.down("Tab");
      await page.keyboard.down("Tab");
      await page.waitForChanges();

      expect(icBlur).toHaveReceivedEvent();
    });

    it("should set the 'placeholder' class name if no option is selected", async () => {
      await page.setContent(getTestSelect(options));
      await page.waitForChanges();

      const selectClassName = await page.evaluate(
        () =>
          document.querySelector("ic-select").shadowRoot.querySelector("select")
            .className
      );

      expect(selectClassName).toBe("placeholder");
    });

    it("should set the text colour to the primary text colour if an option is selected", async () => {
      await page.setContent(getTestSelect(options));
      const icSelect = await page.find("ic-select");
      icSelect.setAttribute("value", "Test value 1");
      await page.waitForChanges();

      const selectClassName = await page.evaluate(
        () =>
          document.querySelector("ic-select").shadowRoot.querySelector("select")
            .className
      );

      expect(selectClassName).toBe("select-option-selected");
    });

    it("should change the text colour to the primary text colour when an option is selected", async () => {
      await page.setContent(getTestSelect(options));
      await page.waitForChanges();

      const select = await page.find("ic-select >>> select");
      await select.press("ArrowDown");
      await select.press("Enter");
      await page.waitForChanges();

      const selectClassName = await page.evaluate(
        () =>
          document.querySelector("ic-select").shadowRoot.querySelector("select")
            .className
      );

      expect(selectClassName).toBe("select-option-selected");
    });

    it("should add .menu-scroll to menu components when options height is over 320", async () => {
      const page = await newE2EPage();
      await page.setContent(getTestSelect(largeOptions));
      await page.waitForChanges();

      const select = await page.find("ic-select >>> button.select-input");
      await select.click();
      await page.waitForChanges();

      const menuClasses = await page.evaluate(() => {
        const menu = document
          .querySelector("ic-select")
          .shadowRoot.querySelector("ic-menu")
          .shadowRoot.querySelector(".menu");
        return menu.classList;
      });

      expect(Object.values(menuClasses).includes("menu-scroll")).toBeTruthy();
    });

    it("should add .menu-scroll to menu components when options are initially set and then populated with large data set", async () => {
      const page = await newE2EPage();
      await page.setContent(getTestSelectAsync(options, largeOptions));
      await page.waitForChanges();

      const select = await page.find("ic-select >>> button.select-input");
      await select.click();
      await page.waitForChanges();

      let menuClasses = await page.evaluate(() => {
        const menu = document
          .querySelector("ic-select")
          .shadowRoot.querySelector("ic-menu")
          .shadowRoot.querySelector(".menu");
        return menu.classList;
      });

      expect(Object.values(menuClasses).includes("menu-scroll")).toBeFalsy();

      await page.waitForTimeout(1200);

      menuClasses = await page.evaluate(() => {
        const menu = document
          .querySelector("ic-select")
          .shadowRoot.querySelector("ic-menu")
          .shadowRoot.querySelector(".menu");
        return menu.classList;
      });

      expect(Object.values(menuClasses).includes("menu-scroll")).toBeTruthy();
    });
  });
});
