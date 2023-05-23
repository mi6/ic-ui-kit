import { E2EPage, newE2EPage } from "@stencil/core/testing";
import { KeyInput } from "puppeteer";

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(jest.fn());
});

describe("ic-search-bar", () => {
  const options = [
    { label: "foo", value: "foo" },
    { label: "bar", value: "bar" },
    { label: "baz", value: "qux" },
  ];

  const longOptions = [
    { label: "item 1", value: "item-1" },
    { label: "item 2", value: "item-2" },
    { label: "item 3", value: "item-3" },
    { label: "item 4", value: "item-4" },
    { label: "item 5", value: "item-5" },
  ];

  const focusAndTypeIntoInput = async (value: string, page: E2EPage) => {
    await page.$eval("ic-search-bar", (el) => {
      const textfield = el.shadowRoot.querySelector("ic-text-field");
      const input = textfield.shadowRoot.querySelector(
        "#ic-search-bar-input-0"
      ) as HTMLInputElement;
      input.focus();
    });

    value.split("").forEach(async (char: KeyInput) => {
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
    const icClear = await page.spyOnEvent("icClear");

    await focusAndTypeIntoInput("foo", page);

    await page.waitForChanges();

    const clearButton = await page.find(
      "ic-search-bar >>> ic-text-field .clear-button"
    );

    await clearButton.click();

    await page.waitForChanges();

    const activeElId = await page.$eval(
      "ic-search-bar",
      (el) =>
        el.shadowRoot.querySelector("ic-text-field").shadowRoot.activeElement.id
    );

    expect(await searchBar.getProperty("value")).toBe("");
    expect(activeElId).toBe("ic-search-bar-input-0");
    expect(icClear).toHaveReceivedEvent;
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

    const menuItems = menu.findAll("li");

    expect((await menuItems).length).toBe(2);
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
      return el.shadowRoot.activeElement.id;
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
      return el.shadowRoot.activeElement.id;
    });

    expect(activeElId).toBe("ic-search-bar-input-0-menu-qux");
  });

  it("should highlight first and last options using Home and End and move focus to menu", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ic-search-bar label="Test Label"></ic-search-bar>
    `);

    const searchBar = await page.find("ic-search-bar");
    searchBar.setProperty("options", options);
    await page.waitForChanges();

    await focusAndTypeIntoInput("ba", page);
    await page.waitForChanges();

    await page.keyboard.press("End");
    await page.waitForChanges();

    let menuOptions = await page.findAll(
      "ic-search-bar >>> ic-text-field ic-menu li"
    );
    expect(menuOptions[0]).not.toHaveClass("focused-option");
    expect(menuOptions[1]).toHaveClass("focused-option");
    let activeElId = await page.$eval("ic-search-bar", (el) => {
      return el.shadowRoot.activeElement.id;
    });
    expect(activeElId).toBe("ic-search-bar-input-0-menu-qux");

    await page.keyboard.press("Home");
    await page.waitForChanges();

    menuOptions = await page.findAll(
      "ic-search-bar >>> ic-text-field ic-menu li"
    );
    expect(menuOptions[0]).toHaveClass("focused-option");
    expect(menuOptions[1]).not.toHaveClass("focused-option");
    activeElId = await page.$eval("ic-search-bar", (el) => {
      return el.shadowRoot.activeElement.id;
    });
    expect(activeElId).toBe("ic-search-bar-input-0-menu-bar");
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

    const menu = await page.find("ic-search-bar >>> ic-text-field ic-menu");
    await menu.press("Enter");

    expect(await searchBar.getProperty("value")).toBe("bar");
  });

  it("should add a space to value on Space", async () => {
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

    const menu = await page.find("ic-search-bar >>> ic-text-field ic-menu");
    await menu.press("Space");

    expect(await searchBar.getProperty("value")).toBe("ba ");
  });

  it("should remove a character from value on Backspace", async () => {
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

    const menu = await page.find("ic-search-bar >>> ic-text-field ic-menu");
    await menu.press("Backspace");

    expect(await searchBar.getProperty("value")).toBe("b");
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

  it("menu should close when blurred and open when focused", async () => {
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

    // Will focus clear button then blur
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.waitForChanges();

    let menu = await page.find("ic-search-bar >>> ic-text-field ic-menu");
    expect(menu).toBeNull;

    await page.keyboard.down("Shift");
    await page.keyboard.press("Tab");
    await page.waitForChanges();
    menu = await page.find("ic-search-bar >>> ic-text-field ic-menu");
    expect(await menu.isVisible()).toBeTruthy();
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

    let menuItems = menu.findAll("li");

    expect((await menuItems).length).toBe(2);

    await page.keyboard.press("r");

    await page.waitForChanges();

    menuItems = menu.findAll("li");

    expect((await menuItems).length).toBe(1);
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

  it("should emit icSubmitSearch when search button pressed with Space", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-search-bar label="Test Label"></ic-search-bar>`);
    const icSubmitSearch = await page.spyOnEvent("icSubmitSearch");

    await focusAndTypeIntoInput("foo", page);

    await page.waitForChanges();

    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Space");

    await page.waitForChanges();

    expect(icSubmitSearch).toHaveReceivedEventDetail({
      value: "foo",
    });
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
      const el = document.querySelector("ic-search-bar").shadowRoot;
      return el.activeElement.id;
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
      const noOptionsItem = menuEl.querySelectorAll("li")[0];

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
      const noOptionsItem = menuEl.querySelectorAll("li")[0];

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
      const firstMenuItem = menuEl.querySelectorAll("li")[0];

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
    let firstOption = (await menu.findAll("li"))[0];
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
    firstOption = (await menu.findAll("li"))[0];
    const lastOption = (await menu.findAll("li"))[1];

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
      const el = document.querySelector("ic-search-bar").shadowRoot;
      return el.activeElement.id;
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
      const el = document.querySelector("ic-search-bar").shadowRoot;
      return el.activeElement.id;
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
      const noOptionsItem = menuEl.querySelectorAll("li")[0];

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
      const firstOptionItem = menuEl.querySelectorAll("li")[0];

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
      const el = document.querySelector("ic-search-bar").shadowRoot;
      return el.activeElement.id;
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

  it("should emit icChange on delay", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-search-bar label="Test Label" debounce="500"></ic-search-bar>`
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

  it("should highlight the menu option items in the correct order with arrowDown", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ic-search-bar label="Test Label"></ic-search-bar>
    `);

    const searchBar = await page.find("ic-search-bar");
    searchBar.setProperty("options", longOptions);

    await page.waitForChanges();

    await focusAndTypeIntoInput("it", page);
    await page.waitForChanges();

    const menu = await page.find("ic-search-bar >>> ic-text-field ic-menu");

    // First option has focused-option
    let option = (await menu.findAll("li"))[0];
    expect(option).toHaveClass("focused-option");

    // Other options should not
    for (let i = 1; i < longOptions.length; i++) {
      option = (await menu.findAll("li"))[i];
      expect(option).not.toHaveClass("focused-option");
    }

    // Highlight the next option
    await page.keyboard.press("ArrowDown");
    await page.waitForChanges();

    option = (await menu.findAll("li"))[1];
    expect(option).toHaveClass("focused-option");

    for (let i = 2; i < longOptions.length; i++) {
      option = (await menu.findAll("li"))[i];
      expect(option).not.toHaveClass("focused-option");
    }

    await page.keyboard.press("ArrowDown");
    await page.waitForChanges();

    option = (await menu.findAll("li"))[2];
    expect(option).toHaveClass("focused-option");

    for (let i = 3; i < longOptions.length; i++) {
      option = (await menu.findAll("li"))[i];
      expect(option).not.toHaveClass("focused-option");
    }
  });

  it("should highlight the menu option items in the correct order with arrowUp", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ic-search-bar label="Test Label"></ic-search-bar>
    `);

    const searchBar = await page.find("ic-search-bar");
    searchBar.setProperty("options", longOptions);

    await page.waitForChanges();

    await focusAndTypeIntoInput("it", page);
    await page.waitForChanges();

    const menu = await page.find("ic-search-bar >>> ic-text-field ic-menu");

    // First option has focused-option class
    let option = (await menu.findAll("li"))[0];
    expect(option).toHaveClass("focused-option");

    // Other options should not have focused-option class
    for (let i = 1; i < longOptions.length; i++) {
      option = (await menu.findAll("li"))[i];
      expect(option).not.toHaveClass("focused-option");
    }

    // Highlight the last option
    await page.keyboard.press("ArrowUp");
    await page.waitForChanges();

    option = (await menu.findAll("li"))[longOptions.length - 1];
    expect(option).toHaveClass("focused-option");

    for (let i = longOptions.length - 2; i >= 0; i--) {
      option = (await menu.findAll("li"))[i];
      expect(option).not.toHaveClass("focused-option");
    }

    await page.keyboard.press("ArrowUp");
    await page.waitForChanges();

    option = (await menu.findAll("li"))[longOptions.length - 2];
    expect(option).toHaveClass("focused-option");

    for (let i = longOptions.length - 3; i >= 0; i--) {
      option = (await menu.findAll("li"))[i];
      expect(option).not.toHaveClass("focused-option");
    }
  });

  it("should reverse tab to submit button", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-search-bar label="Test Label"></ic-search-bar>`);

    const searchBar = await page.find("ic-search-bar");
    searchBar.setProperty("options", options);
    await page.waitForChanges();

    await focusAndTypeIntoInput("foo", page);

    await page.waitForChanges();

    await page.keyboard.down("ArrowDown");
    await page.waitForChanges();

    await page.keyboard.down("Shift");
    await page.keyboard.press("Tab");

    await page.waitForChanges();

    const activeElId = await page.$eval("ic-search-bar", (el) => {
      return el.shadowRoot.activeElement.id;
    });

    expect(activeElId).toBe("search-submit-button");
  });

  it("should not filter options when disable-filter is set to true", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-search-bar label="Test Label" disable-filter="true"></ic-search-bar>`
    );

    const searchBar = await page.find("ic-search-bar");
    searchBar.setProperty("options", options);
    await page.waitForChanges();

    await focusAndTypeIntoInput("foo", page);
    await page.waitForChanges();

    const menuOptions = await page.findAll(
      "ic-search-bar >>> ic-text-field ic-menu li"
    );
    expect(menuOptions).toHaveLength(options.length);
  });

  it("should select the highlighted option when submit search is clicked", async () => {
    const page = await newE2EPage();
    await page.setContent(`<ic-search-bar label="Test Label"></ic-search-bar>`);
    const searchBar = await page.find("ic-search-bar");
    const searchSubmitButton = await page.find(
      "ic-search-bar >>> ic-text-field ic-button.search-submit-button"
    );
    searchBar.setProperty("options", options);
    await page.waitForChanges();

    // Select first filtered option
    await focusAndTypeIntoInput("ba", page);
    await page.waitForChanges();

    let menuOption = (
      await page.findAll("ic-search-bar >>> ic-text-field ic-menu li")
    )[0];
    expect(menuOption).toHaveClass("focused-option");
    expect(menuOption).toEqualText("bar");
    await searchSubmitButton.click();
    await page.waitForChanges();
    expect(await searchBar.getProperty("value")).toBe("bar");

    // Select second filtered option
    const clearButton = await page.find(
      "ic-search-bar >>> ic-text-field ic-button.clear-button"
    );
    await clearButton.click();
    await page.waitForChanges();

    await focusAndTypeIntoInput("ba", page);
    await page.waitForChanges();

    await page.keyboard.press("ArrowUp");
    await page.waitForChanges();

    menuOption = (
      await page.findAll("ic-search-bar >>> ic-text-field ic-menu li")
    )[1];
    expect(menuOption).toHaveClass("focused-option");
    expect(menuOption).toEqualText("baz");
    await searchSubmitButton.click();
    await page.waitForChanges();
    expect(await searchBar.getProperty("value")).toBe("qux");
  });

  it("should display the loading option in the menu when loading then cancel loading when options provided", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-search-bar label="Test Label" loading-label="load" disable-filter="true"></ic-search-bar>`
    );
    const searchBar = await page.find("ic-search-bar");
    searchBar.setProperty("options", options);
    await page.waitForChanges();
    await focusAndTypeIntoInput("ba", page);
    searchBar.setProperty("loading", true);
    await page.waitForChanges();

    let menuOptions = await page.findAll(
      "ic-search-bar >>> ic-text-field ic-menu li"
    );
    expect(menuOptions).toHaveLength(1);
    expect(menuOptions[0]).toHaveClass("loading-option");
    expect(menuOptions[0]).toEqualText("load");

    searchBar.setProperty("options", options);
    await page.waitForChanges();
    menuOptions = await page.findAll(
      "ic-search-bar >>> ic-text-field ic-menu li"
    );
    expect(menuOptions).toHaveLength(3);
    expect(menuOptions[0]).not.toHaveClass("loading-option");
    expect(searchBar.getProperty("loading")).toBeFalsy;
  });

  it("should display the timeout state in the menu when timed out and should not update the options", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-search-bar label="Test Label" loading-error-label="error message" timeout="1000" disable-filter="true"></ic-search-bar>`
    );
    const searchBar = await page.find("ic-search-bar");
    searchBar.setProperty("options", options);
    await page.waitForChanges();
    await focusAndTypeIntoInput("ba", page);
    searchBar.setProperty("loading", true);
    await page.waitForChanges();
    await page.waitForTimeout(1000);

    const menuOptions = await page.findAll(
      "ic-search-bar >>> ic-text-field ic-menu li"
    );
    expect(menuOptions).toHaveLength(1);
    expect(menuOptions[0]).toHaveClass("timeout");
    expect(await menuOptions[0].find("ic-typography")).toEqualText(
      "error message"
    );
    expect(await menuOptions[0].find("#retry-button")).not.toBeNull;
    const searchSubmitButton = await page.find(
      "ic-search-bar >>> ic-text-field ic-button.search-submit-button"
    );
    expect(await searchSubmitButton.getProperty("disabled")).toBeTruthy;

    searchBar.setProperty("options", options);
    await page.waitForChanges();
    expect(menuOptions).toHaveLength(1);
    expect(menuOptions[0]).toHaveClass("timeout");
  });

  it("should be able to focus retry button using tab and should keep loading state when menu closed", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-search-bar label="Test Label" timeout="1000" disable-filter="true"></ic-search-bar>`
    );
    const searchBar = await page.find("ic-search-bar");
    searchBar.setProperty("options", options);
    await page.waitForChanges();
    await focusAndTypeIntoInput("ba", page);
    searchBar.setProperty("loading", true);
    await page.waitForChanges();
    await page.waitForTimeout(1000);

    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.waitForChanges();

    const activeElId = await page.$eval(
      "ic-search-bar",
      (el) => el.shadowRoot.activeElement.id
    );
    expect(activeElId).toBe("retry-button");

    await page.keyboard.press("Tab");
    await page.waitForChanges();
    let menu = await page.find("ic-search-bar >>> ic-text-field ic-menu");
    expect(menu).toBeNull;

    await page.keyboard.down("Shift");
    await page.keyboard.press("Tab");
    await page.waitForChanges();
    menu = await page.find("ic-search-bar >>> ic-text-field ic-menu");
    expect(await menu.isVisible()).toBeTruthy;
    expect(await menu.findAll("li")).toHaveLength(1);
  });

  it("should trigger a retry when the retry button is pressed using space and enter", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-search-bar label="Test Label" timeout="1000" disable-filter="true"></ic-search-bar>`
    );
    const searchBar = await page.find("ic-search-bar");
    searchBar.setProperty("options", options);
    await page.waitForChanges();
    await focusAndTypeIntoInput("ba", page);
    searchBar.setProperty("loading", true);
    await page.waitForChanges();
    await page.waitForTimeout(1000);

    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    const retryButton = await page.find(
      "ic-search-bar >>> ic-text-field ic-menu #retry-button"
    );
    await retryButton.press("Enter");
    await page.waitForChanges();

    let menuOptions = await page.findAll(
      "ic-search-bar >>> ic-text-field ic-menu li"
    );
    expect(menuOptions[0]).toEqualText("Loading...");
    await page.waitForTimeout(1000);

    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await retryButton.press(" ");
    await page.waitForChanges();

    menuOptions = await page.findAll(
      "ic-search-bar >>> ic-text-field ic-menu li"
    );
    expect(menuOptions[0]).toEqualText("Loading...");
  });

  it("should cancel loading when clear button is pressed", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ic-search-bar label="Test Label" timeout="1000"></ic-search-bar>`
    );
    const searchBar = await page.find("ic-search-bar");
    searchBar.setProperty("options", options);
    await page.waitForChanges();
    await focusAndTypeIntoInput("ba", page);
    searchBar.setProperty("loading", true);
    await page.waitForChanges();
    await page.waitForTimeout(1000);

    const clearButton = await page.find(
      "ic-search-bar >>> ic-text-field .clear-button"
    );
    await clearButton.click();
    await page.waitForChanges();
    await focusAndTypeIntoInput("ba", page);
    searchBar.setProperty("loading", true);
    await page.waitForChanges();

    let menuOption = await page.find(
      "ic-search-bar >>> ic-text-field ic-menu li"
    );
    expect(menuOption).toEqualText("Loading...");
    await clearButton.click();
    await page.waitForChanges();

    //Check that the timeout was cancelled
    await page.waitForTimeout(1000);
    await searchBar.click();
    await page.waitForChanges();
    expect(await page.find("ic-search-bar >>> ic-text-field ic-menu")).toBeNull;

    await focusAndTypeIntoInput("ba", page);
    searchBar.setProperty("loading", true);
    await page.waitForChanges();
    menuOption = await page.find("ic-search-bar >>> ic-text-field ic-menu li");
    expect(menuOption).toEqualText("Loading...");
  });
});
