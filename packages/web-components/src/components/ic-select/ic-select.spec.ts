import { newSpecPage } from "@stencil/core/testing";
import { Menu } from "../ic-menu/ic-menu";
import { Select } from "./ic-select";
import * as helpers from "../../utils/helpers";
import { Button } from "../ic-button/ic-button";
import { waitForTimeout } from "../../testspec.setup";
import { InputComponentContainer } from "../ic-input-component-container/ic-input-component-container";

const menuOptions = [
  { label: "Test label 1", value: "Test value 1" },
  { label: "Test label 2", value: "Test value 2" },
  { label: "Test label 3", value: "Test value 3" },
];

const menuOptionsWithDescriptions = [
  {
    label: "Cappuccino",
    value: "Cap",
    description: "Coffee frothed up with pressurised steam",
  },
  {
    label: "Latte",
    value: "Lat",
    description: "A milkier coffee than a cappuccino",
  },
  {
    label: "Americano",
    value: "Ame",
    description: "Espresso coffee diluted with hot water",
  },
];

const menuOptionsNoValues = [
  { label: "Test label 1" },
  { label: "Test label 2" },
  { label: "Test label 3" },
];

const menuOptionsWithGroups = [
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
];

const getTestSelect = (props: string) =>
  `<ic-select label="IC Select Test" ${props}></ic-select>
  <script>
    var select = document.querySelector('ic-select');
    var option = 'Test value 1';
    select.options = ${menuOptions}
    select.addEventListener('icChange', function (event) {
      option = event.detail.value;
      select.value = option;
    });
  </script>`;

describe("ic-select", () => {
  it("should not render a label when the 'hide-label' prop is supplied", async () => {
    const page = await newSpecPage({
      components: [
        Select,
        Menu,
        InputComponentContainer,
        InputComponentContainer,
      ],
      html: getTestSelect("hide-label"),
    });

    expect(page.root).toMatchSnapshot("hide-label-set");
  });

  it("should render readonly", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: getTestSelect('readonly="true"'),
    });

    expect(page.root).toMatchSnapshot("readonly");
  });

  it("should have correct validation status", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: getTestSelect('validation-status="error"'),
    });

    expect(page.root).toMatchSnapshot("with-validation-status-error");
  });

  it("should not have a validation status if disabled", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: getTestSelect('disabled validation-status="error"'),
    });

    expect(page.root).toMatchSnapshot("no-validation-status-if-disabled");
  });

  it("should render correct validation text", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: getTestSelect(
        'validation-status="error" validation-text="Test validation text"'
      ),
    });

    expect(page.root).toMatchSnapshot("with-validation-text");
  });

  it("should not render validation text if no validation status has been supplied", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: getTestSelect('validation-text="Test validation text"'),
    });

    expect(page.root).toMatchSnapshot("no-validation-text-if-no-status");
  });

  it("should not render validation text if disabled", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: getTestSelect('validation-text="Test validation text"'),
    });

    expect(page.root).toMatchSnapshot("no-validation-text-if-disabled");
  });

  it("should render as required", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: getTestSelect('required="true" searchable="true"'),
    });

    expect(page.root).toMatchSnapshot("required-searchable");
  });

  it("should test with clear button", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer, Button],
      html: `<ic-select label="IC Select Test" show-clear-button="true" value="test-value"></ic-select>`,
    });
    page.root.options = menuOptions;
    await page.waitForChanges();
    expect(page.root).toMatchSnapshot("with-clear-button");

    page.root.setFocus();
    await page.waitForChanges();

    const clearButton = page.root.shadowRoot.querySelector(
      "#clear-button"
    ) as HTMLIcButtonElement;

    clearButton.focus();
    await page.waitForChanges();
    expect(page.rootInstance.clearButtonFocused).toBe(true);

    clearButton.blur();
    await page.waitForChanges();
    expect(page.rootInstance.clearButtonFocused).toBe(false);

    clearButton.click();
    await page.waitForChanges();
    expect(page.rootInstance.searchableSelectInputValue).toBeNull;
  });

  it("should test with clear button with searchable", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer, Button],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });
    page.root.options = menuOptions;
    page.rootInstance.searchableSelectInputValue = "test value";
    await page.waitForChanges();

    const clearButton = page.root.shadowRoot.querySelector(
      "#clear-button"
    ) as HTMLIcButtonElement;

    clearButton.focus();
    await page.waitForChanges();
    expect(page.rootInstance.clearButtonFocused).toBe(true);

    clearButton.blur();
    await page.waitForChanges();
    expect(page.rootInstance.clearButtonFocused).toBe(false);

    clearButton.click();
    await page.waitForChanges();
    expect(page.rootInstance.searchableSelectInputValue).toBeNull;
  });

  it("should test menu closes when clear button clicked and characters-until-suggestions set", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer, Button],
      html: `<ic-select label="IC Select Test" searchable="true" characters-until-suggestions="3"></ic-select>`,
    });
    page.root.options = menuOptions;
    page.rootInstance.searchableSelectInputValue = "test value";
    await page.waitForChanges();

    const clearButton = page.root.shadowRoot.querySelector(
      "#clear-button"
    ) as HTMLIcButtonElement;

    clearButton.click();
    await page.waitForChanges();
    expect(page.rootInstance.open).toBe(false);
  });

  it("should test native select", async () => {
    const page = await newSpecPage({
      components: [Select],
      html: `<ic-select label="IC Select Test"></ic-select>`,
    });

    let myfunc = jest.fn().mockReturnValue(true);
    Object.defineProperty(helpers, "isMobileOrTablet", {
      value: myfunc,
    });

    page.root.options = menuOptions;
    page.root.label = "New label";
    await page.waitForChanges();
    page.root.setFocus();
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot("native-select");

    myfunc = jest.fn().mockReturnValue(false);
    Object.defineProperty(helpers, "isMobileOrTablet", {
      value: myfunc,
    });
  });

  it("should test native select with groups", async () => {
    const page = await newSpecPage({
      components: [Select],
      html: `<ic-select label="IC Select Test"></ic-select>`,
    });

    let myfunc = jest.fn().mockReturnValue(true);
    Object.defineProperty(helpers, "isMobileOrTablet", {
      value: myfunc,
    });

    page.root.options = menuOptionsWithGroups;
    page.root.label = "New label";
    await page.waitForChanges();
    page.root.setFocus();
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot("native-select-with-groups");

    let eventSpy = jest.fn();
    page.win.addEventListener("icBlur", eventSpy);

    const select = page.root.shadowRoot.querySelector("select");
    select.blur();
    await page.waitForChanges();
    expect(eventSpy).toHaveBeenCalled();

    eventSpy = jest.fn();
    page.win.addEventListener("icChange", eventSpy);

    const event = new Event("change", {
      bubbles: true,
      cancelable: true,
    });

    page.rootInstance.nativeSelectElement.selectedIndex = 0;
    select.dispatchEvent(event);
    await page.waitForChanges();
    //delay to wait for aria live update
    await waitForTimeout(900);

    expect(eventSpy).toHaveBeenCalled();

    myfunc = jest.fn().mockReturnValue(false);
    Object.defineProperty(helpers, "isMobileOrTablet", {
      value: myfunc,
    });
  });

  it("should test keydown handler", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    await page.waitForChanges();

    await page.root.setFocus();
    await page.waitForChanges();

    await page.rootInstance.handleKeyDown({
      key: "ArrowDown",
      preventDefault: (): void => null,
    });
    await page.waitForChanges();

    page.rootInstance.open = true;
    await page.waitForChanges();
    await page.rootInstance.handleKeyDown({
      key: "Enter",
      preventDefault: (): void => null,
    });
    await page.waitForChanges();

    expect(page.rootInstance.open).toBe(false);

    page.rootInstance.open = true;
    page.rootInstance.noOptions = true;
    await page.waitForChanges();
    await page.rootInstance.handleKeyDown({
      key: "Ctrl",
      preventDefault: (): void => null,
    });
    await page.waitForChanges();

    expect(page.rootInstance.open).toBe(true);

    page.rootInstance.open = true;
    page.rootInstance.noOptions = true;
    await page.waitForChanges();
    await page.rootInstance.handleKeyDown({
      key: "Backspace",
      preventDefault: (): void => null,
    });
    await page.waitForChanges();

    expect(page.rootInstance.open).toBe(true);
  });

  it("should test menu handleKeyboardOpen method - arrow down", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    page.root.value = "Test value 1";
    page.root.open = true;
    await page.waitForChanges();

    const menu = page.root.shadowRoot.querySelector("ic-menu");

    const KeyEvent = {
      key: "ArrowDown",
      preventDefault: (): void => null,
    } as KeyboardEvent;

    await menu.handleKeyboardOpen(KeyEvent);
    await page.waitForChanges();

    const input = page.root.shadowRoot.querySelector("input");
    expect(input.value).toBe("Test label 2");
  });

  it("should test menu handleKeyboardOpen method - arrow up", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    page.root.value = "Test value 1";
    page.root.open = true;
    await page.waitForChanges();

    const menu = page.root.shadowRoot.querySelector("ic-menu");

    const KeyEvent = {
      key: "ArrowUp",
      preventDefault: (): void => null,
    } as KeyboardEvent;

    await menu.handleKeyboardOpen(KeyEvent);
    await page.waitForChanges();

    const input = page.root.shadowRoot.querySelector("input");
    expect(input.value).toBe("Test label 3");
  });

  it("should test keydown handler when characters-until-suggestions set", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true" characters-until-suggestions="3"></ic-select>`,
    });

    page.root.options = menuOptions;
    await page.waitForChanges();

    await page.root.setFocus();
    await page.waitForChanges();

    await page.rootInstance.handleKeyDown({
      key: "ArrowDown",
      preventDefault: (): void => null,
    });
    await page.waitForChanges();

    expect(page.rootInstance.open).toBe(false);

    await page.rootInstance.handleKeyDown({
      key: "ArrowUp",
      preventDefault: (): void => null,
    });
    await page.waitForChanges();

    expect(page.rootInstance.open).toBe(false);

    await page.rootInstance.handleKeyDown({
      key: "Enter",
      preventDefault: (): void => null,
    });
    await page.waitForChanges();

    expect(page.rootInstance.open).toBe(false);
  });

  it("should test menu opens when characters-until-suggestions length met", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true" characters-until-suggestions="3"></ic-select>`,
    });

    page.root.options = menuOptions;
    await page.waitForChanges();

    const event = new Event("input", {
      bubbles: true,
      cancelable: true,
    });

    const input = page.root.shadowRoot.querySelector("input");
    page.rootInstance.searchableSelectInputValue = "aa";
    input.dispatchEvent(event);
    await page.waitForChanges();
    //delay to wait for aria live update
    await waitForTimeout(900);

    expect(page.rootInstance.open).toBe(false);

    page.rootInstance.searchableSelectInputValue = "aaa";
    await page.waitForChanges();
    input.dispatchEvent(event);
    await page.waitForChanges();
    //delay to wait for aria live update
    await waitForTimeout(900);

    expect(page.rootInstance.open).toBe(true);
  });

  it("should test keydown on menu - arrow up", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    page.rootInstance.open = true;
    await page.waitForChanges();
    page.root.value = "Test value 2";
    await page.waitForChanges();

    const list = page.root.shadowRoot
      .querySelector("ic-menu")
      .shadowRoot.querySelector("ul");

    list.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "ArrowUp",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();

    const input = page.root.shadowRoot.querySelector("input");
    expect(input.value).toBe("Test label 1");
  });

  it("should test keydown on menu - arrow up wrap around", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    page.rootInstance.open = true;
    await page.waitForChanges();
    page.root.value = "Test value 1";
    await page.waitForChanges();

    const list = page.root.shadowRoot
      .querySelector("ic-menu")
      .shadowRoot.querySelector("ul");

    list.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "ArrowUp",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();

    const input = page.root.shadowRoot.querySelector("input");
    expect(input.value).toBe("Test label 3");
  });

  it("should test keydown on menu - arrow down", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    page.rootInstance.open = true;
    await page.waitForChanges();
    page.root.value = "Test value 1";
    await page.waitForChanges();

    const list = page.root.shadowRoot
      .querySelector("ic-menu")
      .shadowRoot.querySelector("ul");

    list.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "ArrowDown",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();

    const input = page.root.shadowRoot.querySelector("input");
    expect(input.value).toBe("Test label 2");
  });

  it("should test keydown on menu - arrow down wrap around", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    page.rootInstance.open = true;
    await page.waitForChanges();
    page.root.value = "Test value 3";
    await page.waitForChanges();

    const list = page.root.shadowRoot
      .querySelector("ic-menu")
      .shadowRoot.querySelector("ul");

    list.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "ArrowDown",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();

    const input = page.root.shadowRoot.querySelector("input");
    expect(input.value).toBe("Test label 1");
  });

  it("should test keydown on menu - home key", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    page.rootInstance.open = true;
    await page.waitForChanges();
    page.root.value = "Test value 3";
    await page.waitForChanges();

    const list = page.root.shadowRoot
      .querySelector("ic-menu")
      .shadowRoot.querySelector("ul");

    list.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "Home",
        bubbles: true,
        cancelable: true,
      })
    );
  });

  it("should test keydown on menu - end key", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    page.rootInstance.open = true;
    await page.waitForChanges();
    page.root.value = "Test value 1";
    await page.waitForChanges();

    const list = page.root.shadowRoot
      .querySelector("ic-menu")
      .shadowRoot.querySelector("ul");

    list.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "End",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();

    const input = page.root.shadowRoot.querySelector("input");
    expect(input.value).toBe("Test label 3");
  });

  it("should test keydown on menu - backspace key", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    page.rootInstance.open = true;
    await page.waitForChanges();
    page.root.value = "Test value 3";
    await page.waitForChanges();

    const list = page.root.shadowRoot
      .querySelector("ic-menu")
      .shadowRoot.querySelector("ul");

    list.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "Backspace",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();

    const input = page.root.shadowRoot.querySelector("input");
    expect(input.value).toBe("");
  });

  it("should test keydown on menu - enter key", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    page.rootInstance.open = true;
    await page.waitForChanges();
    page.root.value = "Test value 3";
    await page.waitForChanges();

    const list = page.root.shadowRoot
      .querySelector("ic-menu")
      .shadowRoot.querySelector("ul");

    list.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "Enter",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();

    const input = page.root.shadowRoot.querySelector("input");
    expect(input.value).toBe("");
  });

  it("should test keydown on menu - other key", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    page.rootInstance.open = true;
    await page.waitForChanges();
    page.root.value = "Test value 2";
    await page.waitForChanges();

    const list = page.root.shadowRoot
      .querySelector("ic-menu")
      .shadowRoot.querySelector("ul");

    list.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "Ctrl",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();

    const input = page.root.shadowRoot.querySelector("input");
    expect(input.value).toBe("");
  });

  it("should test keyup on menu list", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    page.rootInstance.open = true;
    await page.waitForChanges();
    page.root.value = "Test value 2";
    await page.waitForChanges();

    const list = page.root.shadowRoot
      .querySelector("ic-menu")
      .shadowRoot.querySelector("ul");

    list.dispatchEvent(
      new window.window.KeyboardEvent("keyup", {
        key: "Tab",
        shiftKey: true,
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();

    const input = page.root.shadowRoot.querySelector("input");
    expect(input.value).toBe("");
  });

  it("should test click on input", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    await page.waitForChanges();

    const input = page.root.shadowRoot.querySelector("input");
    input.click();
    await page.waitForChanges();
    expect(page.rootInstance.open).toBe(true);
  });

  it("should test blur on searchable input", async () => {
    const page = await newSpecPage({
      components: [
        Select,
        Menu,
        InputComponentContainer,
        InputComponentContainer,
      ],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    await page.waitForChanges();

    const eventSpy = jest.fn();
    page.win.addEventListener("icBlur", eventSpy);

    const input = page.root.shadowRoot.querySelector("input");
    input.blur();
    await page.waitForChanges();
    expect(eventSpy).toHaveBeenCalled();
  });

  it("should test click on input when characters-until-suggestions set", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true" characters-until-suggestions="3"></ic-select>`,
    });

    page.root.options = menuOptions;
    await page.waitForChanges();

    const input = page.root.shadowRoot.querySelector("input");
    input.click();
    await page.waitForChanges();
    expect(page.rootInstance.open).toBe(false);
  });

  it("should test searchable input", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    await page.waitForChanges();

    const event = new Event("input", {
      bubbles: true,
      cancelable: true,
    });

    const input = page.root.shadowRoot.querySelector("input");
    page.rootInstance.searchableSelectInputValue = "test value";
    input.dispatchEvent(event);
    await page.waitForChanges();
    //delay to wait for aria live update
    await waitForTimeout(900);

    expect(page.rootInstance.open).toBe(true);

    page.rootInstance.searchableSelectInputValue = "";
    await page.waitForChanges();
    input.dispatchEvent(event);
    await page.waitForChanges();
    //delay to wait for aria live update
    await waitForTimeout(900);

    expect(page.rootInstance.open).toBe(true);

    page.root.options = [];
    await page.waitForChanges();

    page.rootInstance.searchableSelectInputValue = "";
    input.dispatchEvent(event);
    await page.waitForChanges();
    //delay to wait for aria live update
    await waitForTimeout(900);

    expect(page.rootInstance.open).toBe(true);
  });

  it("should test searchable input filtering", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });

    page.root.options = menuOptionsWithDescriptions;
    page.rootInstance.searchableSelectInputValue = "c";
    await page.waitForChanges();

    const input = page.root.shadowRoot.querySelector("input");

    const event = new Event("input", {
      bubbles: true,
      cancelable: true,
    });

    input.dispatchEvent(event);
    await page.waitForChanges();
    //delay to wait for aria live update
    await waitForTimeout(900);
    expect(page.rootInstance.filteredOptions.length).toBe(2);
  });

  it("should test searchable input - with search match position set to start", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true" search-match-position="start"></ic-select>`,
    });

    page.root.options = menuOptionsWithDescriptions;
    page.rootInstance.searchableSelectInputValue = "c";
    await page.waitForChanges();

    const input = page.root.shadowRoot.querySelector("input");

    const event = new Event("input", {
      bubbles: true,
      cancelable: true,
    });

    input.dispatchEvent(event);
    await page.waitForChanges();
    //delay to wait for aria live update
    await waitForTimeout(900);
    expect(page.rootInstance.filteredOptions.length).toBe(1);
  });

  it("should test searchable input - with descriptions and descriptions included in search", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true" include-descriptions-in-search="true"></ic-select>`,
    });

    page.root.options = menuOptionsWithDescriptions;
    page.rootInstance.searchableSelectInputValue = "Test description 2";
    await page.waitForChanges();

    const input = page.root.shadowRoot.querySelector("input");

    const event = new Event("input", {
      bubbles: true,
      cancelable: true,
    });

    input.dispatchEvent(event);
    await page.waitForChanges();
    //delay to wait for aria live update
    await waitForTimeout(900);
    expect(page.rootInstance.filteredOptions).not.toBeNull;
  });

  it("should test searchable input - with search match position set to start and descriptions included in search", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true" search-match-position="start" include-descriptions-in-search="true"></ic-select>`,
    });

    page.root.options = menuOptionsWithDescriptions;
    page.rootInstance.searchableSelectInputValue = "e";
    await page.waitForChanges();

    const input = page.root.shadowRoot.querySelector("input");

    const event = new Event("input", {
      bubbles: true,
      cancelable: true,
    });

    input.dispatchEvent(event);
    await page.waitForChanges();
    //delay to wait for aria live update
    await waitForTimeout(900);
    expect(page.rootInstance.filteredOptions.length).toBe(1);
  });

  it("should test searchable input - with groups", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });

    page.root.options = menuOptionsWithGroups;
    page.rootInstance.searchableSelectInputValue = "Latte";
    await page.waitForChanges();

    const input = page.root.shadowRoot.querySelector("input");

    const event = new Event("input", {
      bubbles: true,
      cancelable: true,
    });

    input.dispatchEvent(event);
    await page.waitForChanges();
    //delay to wait for aria live update
    await waitForTimeout(900);
    expect(page.rootInstance.filteredOptions).not.toBeNull;
  });

  it("should test searchable input - with groups and group titles included in search", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true" include-group-titles-in-search="true"></ic-select>`,
    });

    page.root.options = menuOptionsWithGroups;
    page.rootInstance.searchableSelectInputValue = "Fancy";
    await page.waitForChanges();

    const input = page.root.shadowRoot.querySelector("input");

    const event = new Event("input", {
      bubbles: true,
      cancelable: true,
    });

    input.dispatchEvent(event);
    await page.waitForChanges();
    //delay to wait for aria live update
    await waitForTimeout(900);
    expect(page.rootInstance.filteredOptions).not.toBeNull;
  });

  it("should test selectchange on no result found entry", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    page.rootInstance.open = true;
    page.rootInstance.searchableSelectInputValue = "test value";
    await page.waitForChanges();

    page.rootInstance.handleCustomSelectChange({
      detail: {
        label: "No results found",
      },
    });

    await page.waitForChanges();

    expect(page.rootInstance.searchableSelectInputValue).toBe("test value");
  });

  it("should test mousedown handler", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: `<ic-select label="IC Select Test"></ic-select>`,
    });

    page.root.options = menuOptions;

    const button = page.root.shadowRoot.querySelector("button.select-input");

    const event = new Event("mousedown", {
      bubbles: true,
      cancelable: true,
    });

    button.dispatchEvent(event);
    await page.waitForChanges();

    expect(page.rootInstance.open).toBe(false);
  });

  it("should test dropdown icon mousedown handler", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    page.rootInstance.handleExpandIconMouseDown({
      detail: "some value",
      preventDefault: (): void => null,
    });
    await page.waitForChanges();

    expect(page.rootInstance.open).toBe(true);
  });

  it("should use option labels if no values", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: `<ic-select label="IC Select Test"></ic-select>`,
    });
    page.root.options = menuOptionsNoValues;
    await page.waitForChanges();
    expect(page.root.options[0].value).toBe("Test label 1");
    expect(page.root.options[1].value).toBe("Test label 2");
    expect(page.root.options[2].value).toBe("Test label 3");
  });

  it("should test form reset event", async () => {
    const page = await newSpecPage({
      components: [Select],
      html: `<form>
        <ic-select label="IC Select Test" searchable="true"></ic-select>    
        <button id="resetButton" type="reset">Reset</button> 
      </form>`,
    });

    expect(page.rootInstance.searchableSelectInputValue).toBe(null);

    page.rootInstance.searchableSelectInputValue = "test value";
    await page.waitForChanges();

    expect(page.rootInstance.searchableSelectInputValue).toBe("test value");

    await page.rootInstance.handleFormReset();
    await page.waitForChanges();

    expect(page.rootInstance.searchableSelectInputValue).toBe(null);
  });

  it("should test debounce change", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true" disable-filter="true" debounce="300"></ic-select>`,
    });

    await page.waitForChanges();
    expect(page.rootInstance.currDebounce).toBe(300);
    page.root.debounce = 500;
    await page.waitForChanges();
    expect(page.rootInstance.currDebounce).toBe(500);
  });

  it("should test no results state when no options passed and filtering disabled", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true" disable-filter="true" characters-until-suggestions="3" debounce="300"></ic-select>`,
    });

    page.root.options = menuOptions;
    page.rootInstance.searchableSelectInputValue = "test";
    await page.waitForChanges();

    const input = page.root.shadowRoot.querySelector("input");

    const event = new Event("input", {
      bubbles: true,
      cancelable: true,
    });

    input.dispatchEvent(event);
    await page.waitForChanges();

    page.root.options = [];
    await page.waitForChanges();

    expect(page.rootInstance.filteredOptions).toHaveLength(1);
    expect(page.rootInstance.filteredOptions[0].label).toEqual(
      "No results found"
    );

    expect(page.rootInstance.open).toBe(true);

    input.click();
    await page.waitForChanges();
    expect(page.rootInstance.open).toBe(false);

    page.root.options = menuOptions;
    await page.waitForChanges();

    //test debounce changes to 0 when menu opened
    input.focus();
    await page.waitForChanges();
    await page.rootInstance.handleKeyDown({
      key: "ArrowDown",
      preventDefault: (): void => null,
    });
    await page.waitForChanges();

    expect(page.rootInstance.open).toBe(true);
    expect(page.rootInstance.currDebounce).toBe(0);
  });

  it("should test menus opens and closes when enter pressed - external filtering", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, InputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true" disable-filter="true" characters-until-suggestions="3" debounce="300"></ic-select>`,
    });

    page.root.options = [];
    page.rootInstance.searchableSelectInputValue = "test";
    await page.waitForChanges();

    const input = page.root.shadowRoot.querySelector("input");

    const event = new Event("input", {
      bubbles: true,
      cancelable: true,
    });

    input.dispatchEvent(event);
    await page.waitForChanges();

    //test menu displays when Enter pressed
    input.focus();
    await page.waitForChanges();
    await page.rootInstance.handleKeyDown({
      key: "Enter",
      preventDefault: (): void => null,
    });
    await page.waitForChanges();

    expect(page.rootInstance.open).toBe(false);

    await page.rootInstance.handleKeyDown({
      key: "Enter",
      target: { id: "test-event-id" },
      preventDefault: (): void => null,
    });
    await page.waitForChanges();

    expect(page.rootInstance.open).toBe(true);

    //test disconnected callback
    page.setContent("");
  });
});
