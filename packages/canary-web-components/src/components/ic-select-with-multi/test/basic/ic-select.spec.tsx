import { h } from "@stencil/core";
import { newSpecPage } from "@stencil/core/testing";
import { Menu } from "../../../ic-menu-with-multi/ic-menu";
import { Select } from "../../ic-select";
import * as helpers from "@ukic/web-components/dist/types/utils/helpers";
import { IcButton } from "@ukic/web-components/dist/components/ic-button";
import { waitForTimeout } from "../../../../testspec.setup";
import { IcInputComponentContainer } from "@ukic/web-components/dist/components/ic-input-component-container";

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(jest.fn());
});

const label1 = "Test label 1";
const value1 = "Test value 1";
const label2 = "Test label 2";
const value2 = "Test value 2";
const label3 = "Test label 3";
const value3 = "Test value 3";
const label4 = "Test label 4";
const value4 = "Test value 4";
const groupLabel = "Test Group Label";
const testValue = "Test value";
const menuUl = "ic-menu ul";
const noResults = "No results found";
const clearButtonId = "#clear-button";
const loadingLabel = "Loading...";
const loadingErrorLabel = "Loading Error";
const retryButtonId = "#retry-button";

const menuOptions = [
  { label: label1, value: value1 },
  { label: label2, value: value2 },
  { label: label3, value: value3 },
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
  { label: label1 },
  { label: label2 },
  { label: label3 },
];

const menuOptionsWithDuplicates = [
  { label: label1, value: value1 },
  { label: label2, value: value2 },
  { label: label3, value: value3 },
  { label: label3, value: value3 },
  {
    label: groupLabel,
    children: [
      { label: label1, value: value1 },
      { label: label4, value: value4 },
    ],
  },
];

const menuOptionsWithDisabled = [
  { label: label1, value: value1 },
  { label: label2, value: value2 },
  { label: label3, value: value3, disabled: true },
  { label: label4, value: value4 },
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

describe("ic-select single", () => {
  it("should not render a label when the 'hide-label' prop is supplied", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: getTestSelect("hide-label"),
    });

    expect(page.root).toMatchSnapshot("hide-label-set");
  });

  it("should test select as submit on form", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer, IcButton],
      html: `<form id="new-form"></form><ic-select id="ic-select" form="new-form" label="IC Select Test" value="test-value"></ic-select>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render readonly", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: getTestSelect('readonly="true"'),
    });

    expect(page.root).toMatchSnapshot("readonly");
  });

  it("should have correct validation status", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: getTestSelect('validation-status="error"'),
    });

    expect(page.root).toMatchSnapshot("with-validation-status-error");
  });

  it("should not have a validation status if disabled", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: getTestSelect('disabled validation-status="error"'),
    });

    expect(page.root).toMatchSnapshot("no-validation-status-if-disabled");
  });

  it("should render correct validation text", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: getTestSelect(
        'validation-status="error" validation-text="Test validation text"'
      ),
    });

    expect(page.root).toMatchSnapshot("with-validation-text");
  });

  it("should not render validation text if no validation status has been supplied", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: getTestSelect('validation-text="Test validation text"'),
    });

    expect(page.root).toMatchSnapshot("no-validation-text-if-no-status");
  });

  it("should test with clear button", async () => {
    const eventSpy = jest.fn();
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer, IcButton],
      html: `<ic-select label="IC Select Test" show-clear-button="true" value="test-value"></ic-select>`,
    });
    page.root.addEventListener("icClear", eventSpy);
    page.root.options = menuOptions;
    await page.waitForChanges();
    expect(page.root).toMatchSnapshot("with-clear-button");

    page.root.setFocus();
    await page.waitForChanges();

    const clearButton = page.root.shadowRoot.querySelector(
      clearButtonId
    ) as HTMLIcButtonElement;

    clearButton.focus();
    await page.waitForChanges();
    expect(page.rootInstance.clearButtonFocused).toBe(true);

    clearButton.blur();
    await page.waitForChanges();
    expect(page.rootInstance.clearButtonFocused).toBe(false);

    clearButton.click();
    await page.waitForChanges();
    expect(eventSpy).toHaveBeenCalled;
  });

  it("should test menu handleKeyboardOpen method - arrow down (custom select)", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test"></ic-select>`,
    });

    page.root.options = menuOptions;
    await page.waitForChanges();

    const menu = page.root.shadowRoot.querySelector("ic-menu");

    const KeyEvent = {
      key: "ArrowDown",
      preventDefault: (): void => null,
    } as KeyboardEvent;

    await menu.handleKeyboardOpen(KeyEvent);
    await page.waitForChanges();

    expect(page.rootInstance.open).toBeTruthy;
    expect(page.rootInstance.value).toBe(value1);

    await menu.handleKeyboardOpen(KeyEvent);
    await page.waitForChanges();
    await menu.handleKeyboardOpen(KeyEvent);
    await page.waitForChanges();
    await menu.handleKeyboardOpen(KeyEvent);
    await page.waitForChanges();
    expect(page.rootInstance.value).toBe(value1);
  });

  it("should test menu handleKeyboardOpen method - arrow up (custom select)", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test"></ic-select>`,
    });

    page.root.options = menuOptions;
    await page.waitForChanges();

    const menu = page.root.shadowRoot.querySelector("ic-menu");

    const KeyEvent = {
      key: "ArrowUp",
      preventDefault: (): void => null,
    } as KeyboardEvent;

    await menu.handleKeyboardOpen(KeyEvent);
    await page.waitForChanges();

    expect(page.rootInstance.open).toBeTruthy;
    expect(page.rootInstance.value).toBe(value3);

    await menu.handleKeyboardOpen(KeyEvent);
    await page.waitForChanges();
    await menu.handleKeyboardOpen(KeyEvent);
    await page.waitForChanges();
    await menu.handleKeyboardOpen(KeyEvent);
    await page.waitForChanges();
    expect(page.rootInstance.value).toBe(value3);
  });

  it("should test keydown on menu - space key (custom)", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test"></ic-select>`,
    });

    page.root.options = menuOptions;
    page.rootInstance.open = true;
    await page.waitForChanges();

    const list = page.root.shadowRoot.querySelector("ic-menu ul");

    list.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: " ",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();

    expect(page.rootInstance.open).toBe(false);
  });

  it("should test mousedown handler", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
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

  it("should use option labels if no values", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test"></ic-select>`,
    });
    page.root.options = menuOptionsNoValues;
    await page.waitForChanges();
    expect(page.root.options[0].value).toBe(label1);
    expect(page.root.options[1].value).toBe(label2);
    expect(page.root.options[2].value).toBe(label3);
  });

  it("should select the option that matches the pressed character key", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test"></ic-select>`,
    });

    page.root.options = menuOptionsWithDescriptions;
    await page.waitForChanges();

    const eventSpy = jest.fn();

    page.win.addEventListener("icChange", eventSpy);

    await page.rootInstance.handleKeyDown({
      key: "A",
      preventDefault: (): void => null,
    });
    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          value: "Ame",
        }),
      })
    );

    await waitForTimeout(1000);

    await page.rootInstance.handleKeyDown({
      key: "C",
      preventDefault: (): void => null,
    });
    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          value: "Cap",
        }),
      })
    );
  });

  it("should select the option that matches the pressed character key - grouped options", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test"></ic-select>`,
    });

    page.root.options = menuOptionsWithGroups;
    await page.waitForChanges();

    const eventSpy = jest.fn();

    page.win.addEventListener("icChange", eventSpy);

    await page.rootInstance.handleKeyDown({
      key: "F",
      preventDefault: (): void => null,
    });
    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          value: "Flat",
        }),
      })
    );
  });

  it("should test getFilteredChildMenuOptions for custom select", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test"></ic-select>`,
    });

    page.root.options = menuOptionsWithGroups;
    await page.waitForChanges();

    const result = await page.rootInstance.getFilteredChildMenuOptions(
      menuOptionsWithGroups[0]
    );
    await page.waitForChanges();

    expect(result).toEqual(page.root.options[0]);
  });

  it("should select the option that matches the character key pressed when menu is open", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test"></ic-select>`,
    });

    page.root.options = menuOptionsWithDescriptions;
    page.rootInstance.open = true;
    await page.waitForChanges();

    const eventSpy = jest.fn();

    page.win.addEventListener("icChange", eventSpy);

    const list = page.root.shadowRoot.querySelector(menuUl);

    list.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "C",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          value: "Cap",
        }),
      })
    );
  });

  it("should add to pressedCharacters as characters are pressed and then reset it after 1 second", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test"></ic-select>`,
    });

    page.root.options = menuOptionsWithDescriptions;
    await page.waitForChanges();

    await page.rootInstance.handleKeyDown({
      key: "A",
      preventDefault: (): void => null,
    });
    await page.waitForChanges();

    expect(page.rootInstance.pressedCharacters).toBe("A");

    await page.rootInstance.handleKeyDown({
      key: "B",
      preventDefault: (): void => null,
    });
    await page.waitForChanges();

    expect(page.rootInstance.pressedCharacters).toBe("AB");

    await page.rootInstance.handleKeyDown({
      key: "C",
      preventDefault: (): void => null,
    });
    await page.waitForChanges();

    await waitForTimeout(1000);
    await page.waitForChanges();

    expect(page.rootInstance.pressedCharacters).toBe("");
  });

  it("should not open the menu when space key is used as a character key", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test"></ic-select>`,
    });

    page.root.options = menuOptionsWithDescriptions;
    await page.waitForChanges();

    await page.rootInstance.handleKeyDown({
      key: "A",
      preventDefault: (): void => null,
    });
    await page.rootInstance.handleKeyDown({
      key: " ",
      preventDefault: (): void => null,
    });
    await page.waitForChanges();

    expect(page.rootInstance.pressedCharacters).toBe("A ");
    expect(page.rootInstance.open).toBe(false);
  });

  it("should not close the menu when space key is used as a character key", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test"></ic-select>`,
    });

    page.root.options = menuOptionsWithDescriptions;
    page.rootInstance.open = true;
    await page.waitForChanges();

    const eventSpy = jest.fn();

    page.win.addEventListener("icChange", eventSpy);

    const list = page.root.shadowRoot.querySelector(menuUl);

    list.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "C",
        bubbles: true,
        cancelable: true,
      })
    );
    await page.waitForChanges();

    list.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: " ",
        bubbles: true,
        cancelable: true,
      })
    );
    await page.waitForChanges();

    expect(page.rootInstance.pressedCharacters).toBe("C ");
    expect(page.rootInstance.open).toBe(true);
  });

  it("should test loading state and timeout for custom select", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test" timeout="1000"></ic-select>`,
    });
    const eventSpy = jest.fn();
    page.win.addEventListener("icBlur", eventSpy);

    page.rootInstance.loading = true;
    page.rootInstance.open = true;
    await page.waitForChanges();
    expect(page.rootInstance.uniqueOptions[0].label).toEqual(loadingLabel);

    await waitForTimeout(1000);
    expect(page.rootInstance.uniqueOptions[0].label).toEqual(loadingErrorLabel);

    await page.waitForChanges();
    const retryButton = page.root.shadowRoot
      .querySelector("ic-menu")
      .querySelector(retryButtonId) as HTMLIcButtonElement;
    retryButton.blur();
    expect(page.rootInstance.open).toBeFalsy;
    expect(eventSpy).toHaveBeenCalled;

    page.root.options = [];
    await page.waitForChanges();
    expect(page.rootInstance.uniqueOptions[0].label).toEqual(loadingErrorLabel);
  });

  it("should focus the input when escape is pressed whilst the menu is focused", async () => {
    const spy = jest.spyOn(HTMLButtonElement.prototype, "focus");
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test"></ic-select>`,
    });
    page.root.options = menuOptions;
    page.rootInstance.open = true;
    await page.waitForChanges();

    const list = page.root.shadowRoot.querySelector(menuUl);
    list.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
        cancelable: true,
      })
    );
    await page.waitForChanges();

    expect(page.rootInstance.open).toBeFalsy();
    expect(spy).toHaveBeenCalled();
  });

  it("should deduplicateOptions and log a console warning about the offending items", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test"></ic-select>`,
    });

    page.rootInstance.options = menuOptionsWithDuplicates;

    await page.waitForChanges();

    expect(page.rootInstance.uniqueOptions).toEqual([
      {
        label: label1,
        value: value1,
      },
      {
        label: label2,
        value: value2,
      },
      {
        label: label3,
        value: value3,
      },
      {
        label: groupLabel,
        value: groupLabel,
        children: [
          {
            label: label4,
            value: value4,
          },
        ],
      },
    ]);
  });
});

describe("ic-select single native", () => {
  beforeEach(() => {
    Object.defineProperty(helpers, "isMobileOrTablet", {
      value: jest.fn().mockReturnValue(true),
    });
  });
  afterEach(() => {
    Object.defineProperty(helpers, "isMobileOrTablet", {
      value: jest.fn().mockReturnValue(false),
    });
  });

  it("should test native select", async () => {
    const page = await newSpecPage({
      components: [Select],
      html: `<ic-select label="IC Select Test"></ic-select>`,
    });

    page.root.options = menuOptions;
    page.root.label = "New label";
    await page.waitForChanges();
    page.root.setFocus();
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot("native-select");
  });

  it("should test native select with groups", async () => {
    const page = await newSpecPage({
      components: [Select],
      html: `<ic-select label="IC Select Test"></ic-select>`,
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
  });

  it("should test native select keydown", async () => {
    const page = await newSpecPage({
      components: [Select],
      html: `<ic-select label="IC Select Test"></ic-select>`,
    });

    page.root.options = menuOptions;
    page.root.setFocus();
    await page.waitForChanges();

    await page.rootInstance.handleNativeSelectKeyDown({
      key: "ArrowDown",
      preventDefault: (): void => null,
    });
    await page.waitForChanges();

    expect(page.rootInstance.open).toBeFalsy;
  });
});

describe("ic-select searchable", () => {
  it("should render as required", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: getTestSelect('required="true" searchable="true"'),
    });

    expect(page.root).toMatchSnapshot("required-searchable");
  });

  it("should test with clear button with searchable", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer, IcButton],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });
    page.root.options = menuOptions;
    page.rootInstance.searchableSelectInputValue = "test value";
    await page.waitForChanges();

    const clearButton = page.root.shadowRoot.querySelector(
      clearButtonId
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

  it("should test keydown handler searchable", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });
    jest.spyOn(page.rootInstance, "setFocus").mockImplementation();
    page.root.options = menuOptions;
    await page.waitForChanges();

    await page.root.setFocus();
    await page.waitForChanges();

    await page.rootInstance.handleKeyDown({
      key: "ArrowDown",
      preventDefault: (): void => null,
    });
    await page.waitForChanges();

    const menu = page.root.shadowRoot.querySelector("ic-menu");
    expect(menu.options).toEqual(menuOptions);
    expect(page.rootInstance.open).toBeTruthy;

    await page.waitForChanges();
    await page.rootInstance.handleKeyDown({
      key: "Enter",
      preventDefault: (): void => null,
    });
    await page.waitForChanges();

    expect(page.rootInstance.open).toBeFalsy;

    page.rootInstance.open = true;
    page.rootInstance.noOptions = true;
    await page.waitForChanges();
    await page.rootInstance.handleKeyDown({
      key: "Ctrl",
      preventDefault: (): void => null,
    });
    await page.waitForChanges();

    expect(page.rootInstance.setFocus).toHaveBeenCalledTimes(2);

    page.rootInstance.open = true;
    page.rootInstance.noOptions = true;
    await page.waitForChanges();
    await page.rootInstance.handleKeyDown({
      key: "Backspace",
      preventDefault: (): void => null,
    });
    await page.waitForChanges();

    expect(page.rootInstance.setFocus).toHaveBeenCalledTimes(3);
  });

  it("should test keydown on menu - arrow up (searchable)", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    page.root.value = value2;
    await page.waitForChanges();

    const list = page.root.shadowRoot.querySelector(menuUl);

    list.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "ArrowUp",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();

    const input = page.root.shadowRoot.querySelector("input");
    expect(input.value).toBe(label2);
    expect(page.rootInstance.open).toBeTruthy;
  });

  it("should test keydown on menu - arrow up wrap around (searchable)", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    page.rootInstance.open = true;
    await page.waitForChanges();
    page.root.value = value1;
    await page.waitForChanges();

    const list = page.root.shadowRoot.querySelector(menuUl);

    list.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "ArrowUp",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();

    const input = page.root.shadowRoot.querySelector("input");
    expect(input.value).toBe(label1);
  });

  it("should test keydown on menu - arrow down", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    page.rootInstance.open = true;
    await page.waitForChanges();
    page.root.value = value1;
    await page.waitForChanges();

    const list = page.root.shadowRoot.querySelector(menuUl);

    list.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "ArrowDown",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();

    const input = page.root.shadowRoot.querySelector("input");
    expect(input.value).toBe(label1);
  });

  it("should test keydown on menu - arrow down wrap around", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    page.rootInstance.open = true;
    await page.waitForChanges();
    page.root.value = value3;
    await page.waitForChanges();

    const list = page.root.shadowRoot.querySelector(menuUl);

    list.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "ArrowDown",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();

    const input = page.root.shadowRoot.querySelector("input");
    expect(input.value).toBe(label3);
  });

  it("should test keydown on menu - home key", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    page.rootInstance.open = true;
    await page.waitForChanges();
    page.root.value = value3;
    await page.waitForChanges();

    const list = page.root.shadowRoot.querySelector(menuUl);

    list.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "Home",
        bubbles: true,
        cancelable: true,
      })
    );
    expect(page.rootInstance.open).toBeTruthy;
  });

  it("should test keydown on menu - end key", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    page.root.value = value1;
    await page.waitForChanges();

    const list = page.root.shadowRoot.querySelector(menuUl);

    list.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "End",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();

    const input = page.root.shadowRoot.querySelector("input");
    expect(input.value).toBe(label1);
    expect(page.rootInstance.open).toBeTruthy;
  });

  it("should test keydown on menu - backspace key", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    page.rootInstance.open = true;
    await page.waitForChanges();
    page.root.value = value3;
    await page.waitForChanges();

    const list = page.root.shadowRoot.querySelector(menuUl);

    list.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "Backspace",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();

    const input = page.root.shadowRoot.querySelector("input");
    expect(input.value).toBe(label3);
  });

  it("should test keydown on menu - enter key", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    page.rootInstance.open = true;
    await page.waitForChanges();
    page.root.value = value3;
    await page.waitForChanges();

    const list = page.root.shadowRoot.querySelector(menuUl);

    list.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "ArrowDown",
        bubbles: true,
        cancelable: true,
      })
    );

    list.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "Enter",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();

    const input = page.root.shadowRoot.querySelector("input");
    expect(input.value).toBe(label1);

    input.click();
    await page.waitForChanges();

    expect(page.rootInstance.filteredOptions).toHaveLength(3);
  });

  it("should test keydown on menu - space key", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    page.rootInstance.open = true;
    await page.waitForChanges();

    const list = page.root.shadowRoot.querySelector(menuUl);

    list.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: " ",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();

    expect(page.rootInstance.open).toBe(true);
  });

  it("should test keydown on menu - other key", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    page.rootInstance.open = true;
    await page.waitForChanges();
    page.root.value = value2;
    await page.waitForChanges();

    const list = page.root.shadowRoot.querySelector(menuUl);

    list.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "Ctrl",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();

    const input = page.root.shadowRoot.querySelector("input");
    expect(input.value).toBe(label2);
  });

  it("should test keyup on menu list", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    page.rootInstance.open = true;
    await page.waitForChanges();
    page.root.value = value2;
    await page.waitForChanges();

    const list = page.root.shadowRoot.querySelector(menuUl);

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
    expect(input.value).toBe(label2);
  });

  it("should test click on input", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    await page.waitForChanges();

    const input = page.root.shadowRoot.querySelector("input");
    input.click();
    await page.waitForChanges();
    expect(page.rootInstance.open).toBe(true);
  });

  it("should test click on input with external filtering", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true" disable-auto-filtering="true"></ic-select>`,
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
      components: [Select, Menu, IcInputComponentContainer],
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

  it("should test blur on searchable input where target is an element of the menu but not a menu option", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    await page.waitForChanges();

    const target = page.root.shadowRoot.querySelector("ul.menu");

    const event = new FocusEvent("blur", {
      bubbles: true,
      cancelable: true,
      relatedTarget: target,
    });

    const eventSpy = jest.fn();
    page.win.addEventListener("icBlur", eventSpy);

    await page.rootInstance.onBlur(event);

    await page.waitForChanges();
    expect(eventSpy).not.toHaveBeenCalled();
  });

  it("should test searchable input", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    await page.waitForChanges();

    const event = new Event("input", {
      bubbles: true,
      cancelable: true,
    });

    const input = page.root.shadowRoot.querySelector("input");
    page.rootInstance.searchableSelectInputValue = testValue;
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
      components: [Select, Menu, IcInputComponentContainer],
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
      components: [Select, Menu, IcInputComponentContainer],
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
      components: [Select, Menu, IcInputComponentContainer],
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
      components: [Select, Menu, IcInputComponentContainer],
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
      components: [Select, Menu, IcInputComponentContainer],
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
      components: [Select, Menu, IcInputComponentContainer],
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
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    page.rootInstance.open = true;
    page.rootInstance.searchableSelectInputValue = testValue;
    await page.waitForChanges();

    page.rootInstance.handleCustomSelectChange({
      detail: {
        label: noResults,
      },
    });

    await page.waitForChanges();

    expect(page.rootInstance.searchableSelectInputValue).toBe(testValue);
  });

  it("should test dropdown icon mousedown handler", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
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

  it("should test form reset event", async () => {
    const page = await newSpecPage({
      components: [Select],
      html: `<form>
        <ic-select label="IC Select Test" searchable="true"></ic-select>
        <button id="resetButton" type="reset">Reset</button>
      </form>`,
    });

    expect(page.rootInstance.searchableSelectInputValue).toBe(null);

    page.rootInstance.searchableSelectInputValue = testValue;
    await page.waitForChanges();

    expect(page.rootInstance.searchableSelectInputValue).toBe(testValue);

    await page.rootInstance.handleFormReset();
    await page.waitForChanges();

    expect(page.rootInstance.searchableSelectInputValue).toBe(null);
  });

  it("should test debounce change", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true" disable-auto-filtering="true" debounce="300"></ic-select>`,
    });

    await page.waitForChanges();
    expect(page.rootInstance.currDebounce).toBe(300);
    page.root.debounce = 500;
    await page.waitForChanges();
    expect(page.rootInstance.currDebounce).toBe(500);
  });

  it("should test no results state when no options passed and filtering disabled", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true" disable-auto-filtering="true" debounce="300"></ic-select>`,
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
    expect(page.rootInstance.filteredOptions[0].label).toEqual(noResults);

    expect(page.rootInstance.open).toBe(true);

    input.click();
    await page.waitForChanges();
    expect(page.rootInstance.open).toBe(false);

    page.root.options = menuOptions;
    await page.waitForChanges();
  });

  it("should test menu opens and closes when enter pressed - external filtering", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true" disable-auto-filtering="true" debounce="300"></ic-select>`,
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

    expect(page.rootInstance.open).toBe(false);
  });

  it("should test adding and removing form reset listener on connect and disconnect", async () => {
    const page = await newSpecPage({
      components: [Select],
      html: `<form>
        <ic-select label="IC Select Test" searchable="true"></ic-select>
        <button id="resetButton" type="reset">Reset</button>
      </form>`,
    });
    const addSpy = jest.spyOn(page.root, "addEventListener");
    const removeSpy = jest.spyOn(page.root, "removeEventListener");

    expect(addSpy).toHaveBeenCalled;

    page.setContent("");
    await page.waitForChanges();
    expect(removeSpy).toHaveBeenCalled;
  });

  it("should set the default value of searchable as custom value when not matching options", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label='Select test' searchable='true' value='Test value 01'></ic-select>`,
    });

    page.root.options = [];
    await page.waitForChanges();

    expect(page.rootInstance.searchableSelectInputValue).toBe("Test value 01");

    const input = page.root.shadowRoot.querySelector("input");
    expect(input.value).toBe("Test value 01");
  });

  it("should set the default value of searchable as option label if matching label/value exists", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      template: () => (
        <ic-select
          label="select test"
          searchable
          options={menuOptions}
          value={value1}
        ></ic-select>
      ),
    });

    expect(page.rootInstance.searchableSelectInputValue).toBe(label1);

    const input = page.root.shadowRoot.querySelector("input");
    expect(input.value).toBe(label1);
  });

  it("should set the default value of searchable as option label when options initially set to [] then populated", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      template: () => (
        <ic-select
          label="select test"
          searchable
          options={[]}
          value={value1}
        ></ic-select>
      ),
    });

    page.root.options = menuOptions;
    await page.waitForChanges();

    expect(page.rootInstance.searchableSelectInputValue).toBe(label1);

    const input = page.root.shadowRoot.querySelector("input");
    expect(input.value).toBe(label1);
  });

  it("should set the default value to custom value when options initially set to [] then set to [] again", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      template: () => (
        <ic-select
          label="select test"
          searchable
          options={[]}
          value={value1}
        ></ic-select>
      ),
    });

    page.root.options = [];
    await page.waitForChanges();

    expect(page.rootInstance.searchableSelectInputValue).toBe(value1);

    const input = page.root.shadowRoot.querySelector("input");
    expect(input.value).toBe(value1);
  });

  it("should test loading state and timeout for searchable select with external filtering", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true" disable-auto-filtering="true" debounce="300" timeout="1000"></ic-select>`,
    });

    page.rootInstance.searchableSelectInputValue = "test";
    await page.waitForChanges();

    const input = page.root.shadowRoot.querySelector("input");
    const event = new Event("input", {
      bubbles: true,
      cancelable: true,
    });
    input.dispatchEvent(event);
    page.rootInstance.loading = true;
    await page.waitForChanges();
    expect(page.rootInstance.filteredOptions[0].label).toEqual(loadingLabel);

    await waitForTimeout(1000);
    expect(page.rootInstance.filteredOptions[0].label).toEqual(
      loadingErrorLabel
    );

    await page.waitForChanges();
    const retryButton = page.root.shadowRoot
      .querySelector("ic-menu")
      .querySelector(retryButtonId) as HTMLIcButtonElement;
    retryButton.click();
    page.rootInstance.loading = true;
    await page.waitForChanges();
    expect(page.rootInstance.filteredOptions[0].label).toEqual(loadingLabel);

    page.root.options = [];
    await page.waitForChanges();
    expect(page.rootInstance.filteredOptions[0].label).toEqual(noResults);
  });

  it("should focus the input when escape is pressed whilst the menu is focused (searchable)", async () => {
    const spy = jest.spyOn(HTMLInputElement.prototype, "focus");
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });
    page.root.options = menuOptions;
    page.rootInstance.open = true;
    await page.waitForChanges();

    const list = page.root.shadowRoot.querySelector(menuUl);
    list.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
        cancelable: true,
      })
    );
    await page.waitForChanges();

    expect(page.rootInstance.open).toBeFalsy();
    expect(spy).toHaveBeenCalled();
  });

  it("should test keydown on loading retry button", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true" disable-auto-filtering="true" debounce="300" timeout="1000"></ic-select>`,
    });
    const input = page.root.shadowRoot.querySelector("input");
    const spy = jest.spyOn(input, "focus");

    page.rootInstance.searchableSelectInputValue = "test";
    await page.waitForChanges();

    let event = new Event("input", {
      bubbles: true,
      cancelable: true,
    });
    input.dispatchEvent(event);
    page.rootInstance.loading = true;
    await page.waitForChanges();

    await waitForTimeout(1000);
    await page.waitForChanges();
    event = new KeyboardEvent("keyDown", {
      key: "Enter",
    });
    const retryButton = page.root.shadowRoot
      .querySelector("ic-menu")
      .querySelector(retryButtonId) as HTMLIcButtonElement;
    retryButton.dispatchEvent(event);
    expect(spy).toHaveBeenCalled;
  });

  it("should stop the timeout if clear button is clicked before timeout", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true" timeout="1000"></ic-select>`,
    });
    page.rootInstance.searchableSelectInputValue = "test";
    await page.waitForChanges();

    const event = new Event("input", {
      bubbles: true,
      cancelable: true,
    });
    const input = page.root.shadowRoot.querySelector("input");
    input.dispatchEvent(event);
    page.rootInstance.loading = true;
    await page.waitForChanges();
    expect(page.rootInstance.filteredOptions).toHaveLength(1);

    const clearButton = page.root.shadowRoot.querySelector(
      clearButtonId
    ) as HTMLIcButtonElement;
    clearButton.click();
    await page.waitForChanges();
    expect(page.rootInstance.filteredOptions).toHaveLength(1);
    expect(page.rootInstance.filteredOptions[0]).toMatchObject({
      label: noResults,
      value: "",
    });
    await waitForTimeout(1000);
    expect(page.rootInstance.filteredOptions).toHaveLength(1);
    expect(page.rootInstance.filteredOptions[0]).toMatchObject({
      label: noResults,
      value: "",
    });
  });

  it("should clear the searchable input if the value is programmatically set to undefined", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer],
      html: `<ic-select label="IC Select Test" searchable="true"></ic-select>`,
    });
    page.rootInstance.searchableSelectInputValue = "test";
    await page.waitForChanges();

    const event = new Event("input", {
      bubbles: true,
      cancelable: true,
    });
    const input = page.root.shadowRoot.querySelector("input");
    input.dispatchEvent(event);
    page.rootInstance.loading = true;
    await page.waitForChanges();
    expect(page.rootInstance.filteredOptions).toHaveLength(1);

    page.rootInstance.value = undefined;
    await page.waitForChanges();
    expect(page.rootInstance.searchableSelectInputValue).toBeUndefined;
  });
});

describe("ic-select multi", () => {
  it("should not render a native select on a mobile / tablet screen", async () => {
    Object.defineProperty(helpers, "isMobileOrTablet", {
      value: jest.fn().mockReturnValue(true),
    });

    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer, IcButton],
      html: `<ic-select label="IC Select Test" multiple="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should test handleKeyboardOpen method on menu - arrow down", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer, IcButton],
      html: `<ic-select label="IC Select Test" multiple="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    await page.waitForChanges();

    const menu = page.root.shadowRoot.querySelector("ic-menu");

    const KeyEvent = {
      key: "ArrowDown",
      preventDefault: (): void => null,
    } as KeyboardEvent;

    await menu.handleKeyboardOpen(KeyEvent);
    await page.waitForChanges();

    expect(page.rootInstance.open).toBeTruthy;

    // Test option is not selected by automatic selection
    expect(page.rootInstance.value).toBe(undefined);
  });

  it("should test menu handleKeyboardOpen method - arrow up", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer, IcButton],
      html: `<ic-select label="IC Select Test" multiple="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    await page.waitForChanges();

    const menu = page.root.shadowRoot.querySelector("ic-menu");

    const KeyEvent = {
      key: "ArrowUp",
      preventDefault: (): void => null,
    } as KeyboardEvent;

    await menu.handleKeyboardOpen(KeyEvent);
    await page.waitForChanges();

    expect(page.rootInstance.open).toBeTruthy;

    // Test option is not selected by automatic selection
    expect(page.rootInstance.value).toBe(undefined);
  });

  it("should test keydown on menu - arrow down, up, and enter", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer, IcButton],
      html: `<ic-select label="IC Select Test" multiple="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    page.rootInstance.open = true;
    await page.waitForChanges();

    const menu = page.root.shadowRoot.querySelector(menuUl);

    menu.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "ArrowDown",
        bubbles: true,
        cancelable: true,
      })
    );
    await page.waitForChanges();

    menu.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "Enter",
        bubbles: true,
        cancelable: true,
      })
    );
    await page.waitForChanges();

    expect(page.rootInstance.value).toEqual([value1]);
    expect(page.root).toMatchSnapshot();

    menu.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "ArrowDown",
        bubbles: true,
        cancelable: true,
      })
    );
    await page.waitForChanges();

    menu.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "Enter",
        bubbles: true,
        cancelable: true,
      })
    );
    await page.waitForChanges();

    expect(page.rootInstance.value).toEqual([value1, value2]);
    expect(page.root).toMatchSnapshot();

    menu.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "ArrowUp",
        bubbles: true,
        cancelable: true,
      })
    );
    await page.waitForChanges();

    menu.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "Enter",
        bubbles: true,
        cancelable: true,
      })
    );
    await page.waitForChanges();

    expect(page.rootInstance.value).toEqual([value2]);
  });

  it("should select all options - handleSelectAllChange", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer, IcButton],
      html: `<ic-select label="IC Select Test" multiple="true"></ic-select>`,
    });

    const eventSpy = jest.fn();
    page.win.addEventListener("icOptionSelect", eventSpy);

    page.root.options = menuOptionsWithDisabled;
    await page.waitForChanges();

    page.rootInstance.handleSelectAllChange({ detail: { select: true } });

    // Test disabled option not selected
    expect(page.rootInstance.value).toEqual([value1, value2, value4]);
    expect(eventSpy).toHaveBeenCalledTimes(3);
  });

  it("should emit icOptionSelect only for unselected options - handleSelectAllChange", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer, IcButton],
      html: `<ic-select label="IC Select Test" multiple="true"></ic-select>`,
    });

    const eventSpy = jest.fn();
    page.win.addEventListener("icOptionSelect", eventSpy);

    page.root.options = menuOptionsWithDisabled;
    page.root.value = [value1];
    await page.waitForChanges();

    page.rootInstance.handleSelectAllChange({ detail: { select: true } });

    expect(eventSpy).toHaveBeenCalledTimes(2);
  });

  it("should deselect all options - handleSelectAllChange", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer, IcButton],
      html: `<ic-select label="IC Select Test" multiple="true"></ic-select>`,
    });

    page.root.options = menuOptionsWithDisabled;
    page.root.value = [value1, value2, value4];
    await page.waitForChanges();

    page.rootInstance.handleSelectAllChange({ detail: { select: false } });

    expect(page.rootInstance.value).toEqual([]);
  });

  it("should sort the selected options by the order of the options in the menu", async () => {
    const page = await newSpecPage({
      components: [Select, Menu, IcInputComponentContainer, IcButton],
      html: `<ic-select label="IC Select Test" multiple="true"></ic-select>`,
    });

    page.root.options = menuOptions;
    page.root.value = [value1];
    await page.waitForChanges();

    page.root.value = [value2, value1];
    await page.waitForChanges();

    const button = page.root.shadowRoot.querySelector("button.select-input");

    expect(page.rootInstance.currValue).toEqual([value1, value2]);
    expect(button.textContent).toContain(`${label1}, ${label2}`);
  });
});
