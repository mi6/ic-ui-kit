import { E2EPage, newE2EPage } from "@stencil/core/testing";
import { KeyInput } from "puppeteer";

describe("ic-search-bar", () => {
  const options = [
    { label: "foo", value: "foo" },
    { label: "bar", value: "bar" },
    { label: "baz", value: "qux" },
  ];

  const focusAndTypeIntoInput = async (value: string, page: E2EPage) => {
    await page.$eval("ic-search-bar", (el) => {
      const textfield = el.shadowRoot.querySelector("ic-text-field");
      const input = textfield.shadowRoot.querySelector(
        "#ic-search-bar-input-0"
      ) as HTMLInputElement;
      input.focus();
    });

    await value.split("").forEach(async (char: KeyInput) => {
      await page.keyboard.press(char);
    });
  };

  it("renders clear button when value present", async () => {
    const page = await newE2EPage();
    await page.setContent('<ic-search-bar label="Test Label"></ic-search-bar>');

    await page.waitForChanges();

    let clearButton = await page.find(
      "ic-search-bar >>> ic-text-field .clear-button"
    );
    expect(await clearButton.isVisible()).toBeFalsy();

    await focusAndTypeIntoInput("foo", page);

    await page.waitForChanges();

    clearButton = await page.find(
      "ic-search-bar >>> ic-text-field .clear-button"
    );
    expect(await clearButton.isVisible()).toBeTruthy();
  });

  it("should clear value when clear button pressed", async () => {
    const page = await newE2EPage();
    await page.setContent('<ic-search-bar label="Test Label"></ic-search-bar>');

    const searchBar = await page.find("ic-search-bar");

    await focusAndTypeIntoInput("foo", page);

    await page.waitForChanges();

    const clearButton = await page.find(
      "ic-search-bar >>> ic-text-field .clear-button"
    );

    await clearButton.click();

    await page.waitForChanges();

    expect(await searchBar.getProperty("value")).toBe("");
  });

  it("should emit icSubmitSearch when submit is clicked", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-search-bar label="Test Label"></ic-search-bar>`);

    await page.waitForChanges();

    await focusAndTypeIntoInput("foo", page);

    const searchSubmitButton = await page.find(
      "ic-search-bar >>> ic-text-field ic-button.search-submit-button"
    );
    const icSubmitSearch = await page.spyOnEvent("icSubmitSearch");
    await searchSubmitButton.click();

    expect(icSubmitSearch).toHaveReceivedEventDetail({
      value: "foo",
    });
  });

  it("should invoke submit event when search textfield is in a form", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <form>
        <ic-search-bar label="Test Label" name="search01"></ic-search-bar>
      </form>
      <p id="text">idle</p>
      <script>
        document.querySelector('form').addEventListener('submit', (ev) => {
          ev.preventDefault();
          document.querySelector('#text').innerText = 'submitted';
        })
      </script>
    `);
    const icSubmitSearch = await page.spyOnEvent("icSubmitSearch");

    await focusAndTypeIntoInput("foo", page);

    await page.waitForChanges();

    const searchSubmitButton = await page.find(
      "ic-search-bar >>> ic-text-field ic-button.search-submit-button"
    );

    await searchSubmitButton.click();

    await page.waitForChanges();

    expect(icSubmitSearch).toHaveReceivedEventDetail({
      value: "foo",
    });

    const p = await page.find("#text");

    expect(p.innerText).toBe("submitted");
  });

  it("should render options", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ic-search-bar label="Test Label"></ic-search-bar>
    `);

    const searchBar = await page.find("ic-search-bar");
    searchBar.setProperty("options", options);

    await page.waitForChanges();

    let menu = await page.find("ic-search-bar >>> ic-text-field ic-menu");
    expect(menu).toBeNull();

    await focusAndTypeIntoInput("ba", page);

    await page.waitForChanges();

    menu = await page.find("ic-search-bar >>> ic-text-field ic-menu");

    await page.waitForChanges();

    await page.waitForTimeout(500);

    const menuItems = menu.shadowRoot.querySelectorAll("li");

    expect(await menuItems.length).toBe(2);
    expect(await menu.isVisible()).toBeTruthy();
  });

  it("should focus on input when menu is initially displayed", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ic-search-bar label="Test Label"></ic-search-bar>
    `);

    await page.waitForChanges();

    const searchBar = await page.find("ic-search-bar");
    searchBar.setProperty("options", options);

    await page.waitForChanges();

    await focusAndTypeIntoInput("ba", page);

    await page.waitForChanges();

    await page.waitForTimeout(500);

    const menu = await page.find("ic-search-bar >>> ic-text-field ic-menu");
    const activeElId = await page.$eval("ic-search-bar", (el) => {
      const textfield = el.shadowRoot.querySelector("ic-text-field");
      return textfield.shadowRoot.activeElement.id;
    });

    expect(await menu.isVisible()).toBeTruthy();
    expect(activeElId).toBe("ic-search-bar-input-0");
  });

  it("should remove menu when input value is cleared", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ic-search-bar label="Test Label"></ic-search-bar>
    `);

    const searchBar = await page.find("ic-search-bar");
    searchBar.setProperty("options", options);

    await page.waitForChanges();

    await focusAndTypeIntoInput("ba", page);

    await page.waitForTimeout(500);

    let menu = await page.find("ic-search-bar >>> ic-text-field ic-menu");
    expect(await menu.isVisible()).toBeTruthy();

    const clearButton = await page.find(
      "ic-search-bar >>> ic-text-field .clear-button"
    );

    await clearButton.click();

    menu = await page.find("ic-search-bar >>> ic-text-field ic-menu");

    expect(menu).toBeNull();
  });

  it("should not update value when options are highlighted", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ic-search-bar label="Test Label"></ic-search-bar>
    `);

    const searchBar = await page.find("ic-search-bar");
    searchBar.setProperty("options", options);

    await page.waitForChanges();

    await focusAndTypeIntoInput("ba", page);

    await page.waitForChanges();

    await searchBar.press("ArrowDown");

    await page.waitForChanges();

    expect(await searchBar.getProperty("value")).toBe("ba");
  });

  it("should focus on menu on ArrowDown from input", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ic-search-bar label="Test Label"></ic-search-bar>
    `);

    const searchBar = await page.find("ic-search-bar");
    searchBar.setProperty("options", options);

    await page.waitForChanges();

    await focusAndTypeIntoInput("ba", page);

    await page.waitForChanges();

    await searchBar.press("ArrowDown");

    await page.waitForChanges();

    const activeElId = await page.$eval("ic-search-bar", (el) => {
      const textfield = el.shadowRoot.querySelector("ic-text-field");
      return textfield.querySelector("ic-menu").shadowRoot.activeElement.id;
    });

    expect(activeElId).toBe("ic-search-bar-input-0-menu-qux");
  });

  it("should focus on menu on ArrowUp from input", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ic-search-bar label="Test Label"></ic-search-bar>
    `);

    const searchBar = await page.find("ic-search-bar");
    searchBar.setProperty("options", options);

    await page.waitForChanges();

    await focusAndTypeIntoInput("ba", page);

    await page.waitForChanges();

    await searchBar.press("ArrowUp");

    await page.waitForChanges();

    const activeElId = await page.$eval("ic-search-bar", (el) => {
      const textfield = el.shadowRoot.querySelector("ic-text-field");
      return textfield.querySelector("ic-menu").shadowRoot.activeElement.id;
    });

    expect(activeElId).toBe("ic-search-bar-input-0-menu-qux");
  });

  it("should select first option and update value as label on Enter", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ic-search-bar label="Test Label"></ic-search-bar>
    `);

    await page.waitForChanges();

    const searchBar = await page.find("ic-search-bar");
    searchBar.setProperty("options", options);

    await page.waitForChanges();

    await focusAndTypeIntoInput("ba", page);

    await page.waitForChanges();

    // await searchBar.press("ArrowDown");

    const menu = await page.find("ic-search-bar >>> ic-text-field ic-menu");
    await menu.press("Enter");

    expect(await searchBar.getProperty("value")).toBe("bar");
  });

  it("should select first option and update value as label on Space", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ic-search-bar label="Test Label"></ic-search-bar>
    `);

    await page.waitForChanges();

    const searchBar = await page.find("ic-search-bar");
    searchBar.setProperty("options", options);

    await page.waitForChanges();

    await focusAndTypeIntoInput("ba", page);

    await page.waitForChanges();

    // await searchBar.press("ArrowDown");

    const menu = await page.find("ic-search-bar >>> ic-text-field ic-menu");
    await menu.press("Space");

    expect(await searchBar.getProperty("value")).toBe("bar");
  });

  it("should set value to last option when pressing up on input", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ic-search-bar label="Test Label"></ic-search-bar>
    `);

    await page.waitForChanges();

    const searchBar = await page.find("ic-search-bar");
    searchBar.setProperty("options", options);

    await page.waitForChanges();

    await focusAndTypeIntoInput("ba", page);

    await page.waitForChanges();

    await searchBar.press("ArrowUp");

    const menu = await page.find("ic-search-bar >>> ic-text-field ic-menu");
    await menu.press("Enter");

    expect(await searchBar.getProperty("value")).toBe("qux");
  });

  it("menu should close on Escape", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ic-search-bar label="Test Label"></ic-search-bar>
    `);

    await page.waitForChanges();

    const searchBar = await page.find("ic-search-bar");
    searchBar.setProperty("options", options);

    await page.waitForChanges();

    await focusAndTypeIntoInput("ba", page);

    await page.waitForChanges();

    await page.keyboard.press("ArrowUp");

    let menu = await page.find("ic-search-bar >>> ic-text-field ic-menu");
    expect(await menu.isVisible()).toBeTruthy();

    await menu.press("Escape");

    menu = await page.find("ic-search-bar >>> ic-text-field ic-menu");
    expect(menu).toBeNull();
  });

  it("should emit icOptionSelect when a menu option has been selected", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ic-search-bar search label="Test Label"></ic-search-bar>
    `);
    const icOptionSelect = await page.spyOnEvent("icOptionSelect");

    const searchBar = await page.find("ic-search-bar");
    searchBar.setProperty("options", options);

    await page.waitForChanges();

    await focusAndTypeIntoInput("fo", page);

    await page.waitForChanges();

    await searchBar.press("ArrowDown");

    await page.waitForChanges();

    const menu = await page.find("ic-search-bar >>> ic-text-field ic-menu");
    await menu.press("Enter");

    expect(icOptionSelect).toHaveReceivedEventDetail({
      value: "foo",
    });
  });

  it("should emit icMenuChange when opening/closing menu", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ic-search-bar label="Test Label"></ic-search-bar>
    `);
    const icMenuChange = await page.spyOnEvent("icMenuChange");

    const searchBar = await page.find("ic-search-bar");
    searchBar.setProperty("options", options);

    await page.waitForChanges();

    await focusAndTypeIntoInput("ba", page);

    await page.waitForChanges();

    expect(icMenuChange).toHaveReceivedEventDetail({
      open: true,
    });

    await page.keyboard.press("Enter");

    await page.waitForChanges();

    expect(icMenuChange).toHaveReceivedEventDetail({
      open: false,
    });
  });

  it("should prepopulate textfield with value in search mode", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ic-search-bar label="Test Label" value="test value"></ic-search-bar>
    `);

    const input = await page.find(
      "ic-search-bar >>> ic-text-field >>> #ic-search-bar-input-0"
    );
    expect(await input.getProperty("value")).toBe("test value");
  });

  it("should filter options", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ic-search-bar label="Test Label"></ic-search-bar>
    `);

    const searchBar = await page.find("ic-search-bar");
    searchBar.setProperty("options", options);

    await page.waitForChanges();

    let menu = await page.find("ic-search-bar >>> ic-text-field ic-menu");
    expect(menu).toBeNull();

    await focusAndTypeIntoInput("ba", page);

    await page.waitForChanges();

    menu = await page.find("ic-search-bar >>> ic-text-field ic-menu");

    await page.waitForChanges();

    let menuItems = menu.shadowRoot.querySelectorAll("li");

    expect(await menuItems.length).toBe(2);

    await page.keyboard.press("r");

    await page.waitForChanges();

    menuItems = menu.shadowRoot.querySelectorAll("li");

    expect(await menuItems.length).toBe(1);
  });

  it("should prevent form submit event when clear is invoked using Enter", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <form>
        <ic-search-bar label="Test Label" name="search01"></ic-search-bar>
      </form>
      <p id="text">idle</p>
      <script>
        document.querySelector('form').addEventListener('submit', () => {
          document.getElementById('text').innerText = 'submitted';
        })
      </script>
    `);
    const icClear = await page.spyOnEvent("icClear");
    const p = await page.find("#text");

    await focusAndTypeIntoInput("foo", page);

    await page.waitForChanges();

    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");

    expect(icClear).toHaveReceivedEvent();

    expect(p.innerText).toBe("idle");
  });

  it("should clear the value when clear is invoked using Space - should not add a whitespace", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-search-bar label="Test Label"></ic-search-bar>`);
    const icClear = await page.spyOnEvent("icClear");
    const searchBar = await page.find("ic-search-bar");

    await focusAndTypeIntoInput("foo", page);

    await page.waitForChanges();

    await page.keyboard.press("Tab");
    await page.keyboard.press("Space");

    await page.waitForChanges();

    expect(icClear).toHaveReceivedEvent();

    expect(searchBar.getAttribute("value")).toBe("");
    expect(searchBar.getAttribute("value").length).toBe(0);
  });

  it("should update value and move focus back to input when focus previously on ic-menu", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ic-search-bar label="Test Label"></ic-search-bar>
    `);

    const searchBar = await page.find("ic-search-bar");
    searchBar.setProperty("options", options);

    await page.waitForChanges();

    await focusAndTypeIntoInput("ba", page);

    await page.waitForChanges();

    await page.keyboard.press("ArrowDown");

    await page.waitForChanges();

    const focusedElement = await page.evaluate(() => {
      const el = document
        .querySelector("ic-search-bar")
        .shadowRoot.querySelector("ic-menu");
      return el.shadowRoot.activeElement.id;
    });

    expect(focusedElement).toBe("ic-search-bar-input-0-menu-qux");

    await page.keyboard.press("r");

    const inputEl = await page.evaluate(() => {
      const el = document
        .querySelector("ic-search-bar")
        .shadowRoot.querySelector("ic-text-field");
      return {
        focusedEl: el.shadowRoot.activeElement.id,
        inputValue: el.value,
      };
    });

    expect(inputEl.focusedEl).toBe("ic-search-bar-input-0");
    expect(inputEl.inputValue).toBe("bar");
  });

  it("should render suggestions after number of characters in value set to 3", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ic-search-bar label="Test Label"></ic-search-bar>
    `);

    const searchBar = await page.find("ic-search-bar");
    searchBar.setProperty("options", options);

    await page.waitForChanges();

    searchBar.setProperty("charactersUntilSuggestion", 3);

    await page.waitForChanges();

    await focusAndTypeIntoInput("ba", page);

    await page.waitForChanges();

    let menu = await page.find("ic-search-bar >>> ic-text-field ic-menu");
    expect(menu).toBeNull();

    await page.waitForChanges();

    await focusAndTypeIntoInput("r", page);

    await page.waitForChanges();

    menu = await page.find("ic-search-bar >>> ic-text-field ic-menu");

    expect(await menu.isVisible()).toBeTruthy();
  });

  it("should render no results available if no matches", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ic-search-bar label="Test Label"></ic-search-bar>
    `);

    const searchBar = await page.find("ic-search-bar");
    searchBar.setProperty("options", options);

    await page.waitForChanges();

    await focusAndTypeIntoInput("zzz", page);

    await page.waitForChanges();

    const noOptionsLabel = await page.evaluate(() => {
      const menuEl = document
        .querySelector("ic-search-bar")
        .shadowRoot.querySelector("ic-menu");
      const noOptionsItem = menuEl.shadowRoot.querySelectorAll("li")[0];

      return noOptionsItem.innerText;
    });

    expect(noOptionsLabel).toBe("No results found");
  });

  it("should render 0 results if no matches (updated no options text)", async () => {
    const NO_OPTIONS = "0 results";
    const page = await newE2EPage();
    await page.setContent(`
      <ic-search-bar label="Test Label"></ic-search-bar>
    `);

    const searchBar = await page.find("ic-search-bar");
    searchBar.setProperty("options", options);
    searchBar.setProperty("emptyOptionListText", NO_OPTIONS);

    await page.waitForChanges();

    await focusAndTypeIntoInput("zzz", page);

    await page.waitForChanges();

    const noOptionsLabel = await page.evaluate(() => {
      const menuEl = document
        .querySelector("ic-search-bar")
        .shadowRoot.querySelector("ic-menu");
      const noOptionsItem = menuEl.shadowRoot.querySelectorAll("li")[0];

      return noOptionsItem.innerText;
    });

    expect(noOptionsLabel).toBe(NO_OPTIONS);
  });

  it("should disable search button on 0 results", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ic-search-bar label="Test Label"></ic-search-bar>
    `);

    const searchBar = await page.find("ic-search-bar");
    searchBar.setProperty("options", options);

    await page.waitForChanges();

    await focusAndTypeIntoInput("zzz", page);

    await page.waitForChanges();

    const searchSubmitBtn = await page.find(
      "ic-search-bar >>> ic-text-field ic-button.search-submit-button"
    );

    expect(await searchSubmitBtn.getProperty("disabled")).toBeTruthy();
  });

  it("should focus on first option when ic-menu rendered and Enter should select option", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ic-search-bar label="Test Label"></ic-search-bar>
    `);

    const searchBar = await page.find("ic-search-bar");
    searchBar.setProperty("options", options);

    await page.waitForChanges();

    await focusAndTypeIntoInput("ba", page);

    await page.waitForChanges();

    const FirstOptionClassIsFocusedOption = await page.evaluate(() => {
      const menuEl = document
        .querySelector("ic-search-bar")
        .shadowRoot.querySelector("ic-menu");
      const firstMenuItem = menuEl.shadowRoot.querySelectorAll("li")[0];

      return firstMenuItem.classList.contains("focused-option");
    });

    expect(FirstOptionClassIsFocusedOption).toBeTruthy();

    await page.keyboard.press("Enter");

    await page.waitForChanges();

    const input = await page.find(
      "ic-search-bar >>> ic-text-field >>> #ic-search-bar-input-0"
    );
    expect(await input.getProperty("value")).toBe("bar");
  });

  it("should be able to select second menu item after selecting an initial menu item", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-search-bar label="Test Label"></ic-search-bar>`);
    const searchBar = await page.find("ic-search-bar");
    searchBar.setProperty("options", options);

    await page.waitForChanges();

    await focusAndTypeIntoInput("ba", page);

    await page.waitForChanges();

    let menu = await page.find("ic-search-bar >>> ic-text-field ic-menu");
    let firstOption = menu.shadowRoot.querySelectorAll("li")[0];
    expect(firstOption).toHaveClass("focused-option");

    await searchBar.press("Enter");

    await page.waitForChanges();

    const value = await searchBar.getProperty("value");

    await page.waitForChanges();

    expect(value).toBe("bar");

    await page.keyboard.press("Backspace");

    await page.waitForChanges();

    await searchBar.press("ArrowDown");

    await page.waitForChanges();

    menu = await page.find("ic-search-bar >>> ic-text-field ic-menu");
    firstOption = menu.shadowRoot.querySelectorAll("li")[0];
    const lastOption = menu.shadowRoot.querySelectorAll("li")[1];

    expect(firstOption).not.toHaveClass("focused-option");
    expect(lastOption).toHaveClass("focused-option");

    await searchBar.press("Enter");

    await page.waitForChanges();

    expect(await searchBar.getProperty("value")).toBe("qux");
  });

  it("should tab through search bar from input > clear > submit > ic-menu when options are available", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-search-bar label="Test Label"></ic-search-bar>`);
    const searchBar = await page.find("ic-search-bar");
    searchBar.setProperty("options", options);

    await page.waitForChanges();

    await focusAndTypeIntoInput("ba", page);

    await page.waitForChanges();

    let focusedElement = await page.evaluate(() => {
      const el = document
        .querySelector("ic-search-bar")
        .shadowRoot.querySelector("ic-text-field");
      return el.shadowRoot.activeElement.id;
    });

    expect(focusedElement).toBe("ic-search-bar-input-0");

    await page.waitForChanges();

    await page.keyboard.press("Tab");

    await page.waitForChanges();

    focusedElement = await page.evaluate(() => {
      const el = document.querySelector("ic-search-bar");
      return el.shadowRoot.activeElement.id;
    });

    expect(focusedElement).toBe("clear-button");

    await page.keyboard.press("Tab");

    await page.waitForChanges();

    focusedElement = await page.evaluate(() => {
      const el = document.querySelector("ic-search-bar");
      return el.shadowRoot.activeElement.id;
    });

    expect(focusedElement).toBe("search-submit-button");

    await page.keyboard.press("Tab");

    await page.waitForChanges();

    focusedElement = await page.evaluate(() => {
      const el = document
        .querySelector("ic-search-bar")
        .shadowRoot.querySelector("ic-menu");
      return el.shadowRoot.activeElement.id;
    });

    expect(focusedElement).toBe("ic-search-bar-input-0-menu-bar");
  });

  it("menu is still rendered when Shift is pressed while focus on input", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-search-bar label="Test Label"></ic-search-bar>`);
    const searchBar = await page.find("ic-search-bar");
    searchBar.setProperty("options", options);

    await page.waitForChanges();

    await focusAndTypeIntoInput("ba", page);

    await page.waitForChanges();

    await page.keyboard.press("Shift");

    const menu = await page.find("ic-search-bar >>> ic-menu");

    expect(await menu.isVisible()).toBeTruthy();
  });

  it("focuses back onto search bar from menu", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-search-bar label="Test Label"></ic-search-bar>`);
    const searchBar = await page.find("ic-search-bar");
    searchBar.setProperty("options", options);

    await page.waitForChanges();

    await focusAndTypeIntoInput("ba", page);

    await page.waitForChanges();

    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");

    await page.waitForChanges();

    let focusedElement = await page.evaluate(() => {
      const el = document
        .querySelector("ic-search-bar")
        .shadowRoot.querySelector("ic-menu");
      return el.shadowRoot.activeElement.id;
    });

    expect(focusedElement).toBe("ic-search-bar-input-0-menu-bar");

    await page.waitForChanges();

    await page.keyboard.down("Shift");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");

    await page.waitForChanges();

    focusedElement = await page.$eval("ic-search-bar", (el) => {
      const textfield = el.shadowRoot.querySelector("ic-text-field");
      return textfield.shadowRoot.activeElement.id;
    });

    expect(focusedElement).toBe("ic-search-bar-input-0");
  });

  it("displays tooltip on search buttons when enabled", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-search-bar label="Test Label"></ic-search-bar>`);

    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");

    await page.waitForChanges();

    let submitSearchTooltipDisplay = await page.evaluate(() => {
      const tooltip = document
        .querySelector("ic-search-bar")
        .shadowRoot.querySelector("#search-submit-button")
        .shadowRoot.querySelector("ic-tooltip")
        .shadowRoot.querySelector(".ic-tooltip-container");
      return window.getComputedStyle(tooltip).display;
    });

    expect(submitSearchTooltipDisplay).toBe("none");

    await focusAndTypeIntoInput("ba", page);

    await page.waitForChanges();

    await page.keyboard.press("Tab");

    await page.waitForTimeout(300);

    const clearTooltipDisplay = await page.evaluate(() => {
      const tooltip = document
        .querySelector("ic-search-bar")
        .shadowRoot.querySelector("#clear-button")
        .shadowRoot.querySelector("ic-tooltip")
        .shadowRoot.querySelector(".ic-tooltip-container");

      return window.getComputedStyle(tooltip).display;
    });

    expect(clearTooltipDisplay).toBe("block");

    await page.keyboard.press("Tab");

    await page.waitForTimeout(300);

    submitSearchTooltipDisplay = await page.evaluate(() => {
      const tooltip = document
        .querySelector("ic-search-bar")
        .shadowRoot.querySelector("#search-submit-button")
        .shadowRoot.querySelector("ic-tooltip")
        .shadowRoot.querySelector(".ic-tooltip-container");

      return window.getComputedStyle(tooltip).display;
    });

    expect(submitSearchTooltipDisplay).toBe("block");
  });

  it("should highlight first option again after no results found", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ic-search-bar label="Test Label"></ic-search-bar>
    `);

    const searchBar = await page.find("ic-search-bar");
    searchBar.setProperty("options", options);

    await page.waitForChanges();

    await focusAndTypeIntoInput("barr", page);

    await page.waitForChanges();

    const noOptionsLabel = await page.evaluate(() => {
      const menuEl = document
        .querySelector("ic-search-bar")
        .shadowRoot.querySelector("ic-menu");
      const noOptionsItem = menuEl.shadowRoot.querySelectorAll("li")[0];

      return noOptionsItem.innerText;
    });

    expect(noOptionsLabel).toBe("No results found");

    await page.waitForChanges();

    await page.keyboard.press("Backspace");

    await page.waitForTimeout(500);

    const firstOptionFocused = await page.evaluate(() => {
      const menuEl = document
        .querySelector("ic-search-bar")
        .shadowRoot.querySelector("ic-menu");
      const firstOptionItem = menuEl.shadowRoot.querySelectorAll("li")[0];

      return firstOptionItem.classList.contains("focused-option");
    });

    expect(firstOptionFocused).toBeTruthy();
  });

  it("focuses onto button from search bar", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ic-search-bar label="Test Label"></ic-search-bar>
      <ic-button id="button">Foo</ic-button>
    `);
    const searchBar = await page.find("ic-search-bar");
    searchBar.setProperty("options", options);

    await page.waitForChanges();

    await focusAndTypeIntoInput("ba", page);

    await page.waitForChanges();

    await page.keyboard.press("ArrowDown");

    await page.waitForChanges();

    let focusedElement = await page.evaluate(() => {
      const el = document
        .querySelector("ic-search-bar")
        .shadowRoot.querySelector("ic-menu");
      return el.shadowRoot.activeElement.id;
    });

    expect(focusedElement).toBe("ic-search-bar-input-0-menu-qux");

    await page.waitForChanges();

    await page.keyboard.press("Tab");

    await page.waitForChanges();

    focusedElement = await page.evaluate(() => {
      return document.activeElement.id;
    });

    expect(focusedElement).toBe("button");
  });
});
