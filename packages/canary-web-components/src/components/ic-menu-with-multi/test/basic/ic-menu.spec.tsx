import { newSpecPage } from "@stencil/core/testing";
import { Menu } from "../../ic-menu";
import { IcInputComponentContainer } from "@ukic/web-components/dist/components/ic-input-component-container";
import { testKeyboardEvent as keyboardEvent } from "@ukic/web-components/dist/types/testspec.setup";
import { h } from "@stencil/core";
import * as helpers from "@ukic/web-components/dist/types/utils/helpers";

// These tests still use 'ic-select' and not 'ic-select-with-multi'
// It does not matter as unit tests in the canary branch do not run anyway
// And it saves converting them back when the multi-select is merged into the main branch
// (Check the original multi-select branch, i.e. where the changes were added straight to the web-components folder, to see the tests working)

const menuOptions = [
  { label: "Espresso", value: "espresso" },
  { label: "Double Espresso", value: "doubleespresso" },
  { label: "Flat White", value: "flatwhite" },
  {
    label: "Cappuccino",
    value: "cappuccino",
    description: "with chocolate is best!",
  },
  { label: "Americano", value: "americano" },
  { label: "Ameno", value: "ameno" },
  {
    label: "Tea",
    value: "tea",
    children: [{ label: "green", value: "green" }],
  },
  {
    label: "Aicano",
    value: "acano",
    icon: `<svg aria-labelledby="warning-title" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><g id="warning"><path id="Vector" d="M4.47 20.5037H19.53C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49375C12.96 3.16375 11.04 3.16375 10.27 4.49375L2.74 17.5037C1.97 18.8337 2.93 20.5037 4.47 20.5037ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95375 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95375 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM13 17.5037H11V15.5037H13V17.5037Z" /></g></svg>`,
  },
  {
    label: "Mocha",
    value: "mocha",
    element: {
      component: `<ic-status-tag label="Neutral status"></ic-status-tag>`,
      ariaLabel: "Neutral status tag",
    },
  },
];

const menuIdEspresso = "menu-id-espresso";
const menuIdMocha = "menu-id-mocha";
const IcSearchBar = "IC-SEARCH-BAR";

const createMenu = () => {
  // create necessary elements before the page is created
  const div = window.document.createElement("div");
  const input = window.document.createElement("input");

  return newSpecPage({
    components: [Menu, IcInputComponentContainer],
    template: () => (
      <ic-menu
        open
        activationType="automatic"
        options={menuOptions}
        menuId="menu-id"
        inputLabel="input-label"
        inputEl={input}
        anchorEl={div}
        value={menuOptions[0].value}
        parentEl={div}
      ></ic-menu>
    ),
  });
};

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(jest.fn());
});

describe("ic-menu in isolation", () => {
  it("should render", async () => {
    const page = await createMenu();

    expect(page).toMatchSnapshot();
  });
  it("should set open prop to true by default", async () => {
    const page = await createMenu();

    expect(page.root.open).toBe(true);
  });
  it("should test ungroupedOptionsSet emitter", async () => {
    const page = await createMenu();

    const eventSpy = jest.fn();

    page.root.addEventListener("ungroupedOptionsSet", eventSpy);

    page.root.options = [];

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          options: [],
        }),
      })
    );
  });
  it("should test menuOptionSelect emitter", async () => {
    const page = await createMenu();

    const eventSpy = jest.fn();

    page.root.addEventListener("menuOptionSelect", eventSpy);

    await page.waitForChanges();

    page.rootInstance.setInputValue(2);

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          value: "flatwhite",
        }),
      })
    );
  });
  it("should test menuStateChange emitter", async () => {
    const page = await createMenu();

    const eventSpy = jest.fn();

    page.root.addEventListener("menuStateChange", eventSpy);

    await page.waitForChanges();

    const click = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    });

    page.rootInstance.arrowBehaviour(click);

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          open: true,
        }),
      })
    );
  });
  it("should test menuOptionId emitter", async () => {
    const page = await createMenu();

    const eventSpy = jest.fn();

    page.root.addEventListener("menuOptionId", eventSpy);

    await page.waitForChanges();

    page.rootInstance.manualSetInputValueKeyboardOpen(
      keyboardEvent("ArrowDown")
    );

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          optionId: menuIdEspresso,
        }),
      })
    );
  });
  it("should test menuKeyPress emitter", async () => {
    const page = await createMenu();

    const eventSpy = jest.fn();

    page.root.addEventListener("menuKeyPress", eventSpy);

    await page.waitForChanges();

    page.rootInstance.autoSetValueOnMenuKeyDown(keyboardEvent("Home"));

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          isNavKey: true,
          key: "Home",
        }),
      })
    );
  });
  it("should test setNextOptionValue function", async () => {
    const page = await createMenu();

    const eventSpy = jest.fn();

    page.root.addEventListener("menuOptionSelect", eventSpy);

    page.rootInstance.setNextOptionValue(15);

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          value: "espresso",
        }),
      })
    );
  });
  it("should test setPreviousOptionValue function", async () => {
    const page = await createMenu();

    const eventSpy = jest.fn();

    page.root.addEventListener("menuOptionSelect", eventSpy);

    await page.waitForChanges();

    page.rootInstance.setPreviousOptionValue(4);

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          value: "cappuccino",
        }),
      })
    );
  });
  it("should test handleClickOpen function", async () => {
    const page = await createMenu();

    const eventSpy = jest.fn();

    page.root.addEventListener("menuStateChange", eventSpy);

    page.root.open = false;

    await page.waitForChanges();

    await page.rootInstance.handleClickOpen();

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          open: true,
        }),
      })
    );
  });
  it("should test handleKeyboardOpen function", async () => {
    const page = await createMenu();

    page.root.open = false;

    const eventSpy = jest.fn();

    page.root.addEventListener("menuStateChange", eventSpy);
    page.root.addEventListener("menuOptionId", eventSpy);

    await page.waitForChanges();

    await page.rootInstance.handleKeyboardOpen(keyboardEvent("ArrowDown"));

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          open: true,
        }),
      })
    );

    page.root.open = false;

    page.root.activationType = "manual";

    await page.waitForChanges();

    await page.rootInstance.handleKeyboardOpen(keyboardEvent("ArrowDown"));

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          optionId: menuIdEspresso,
        }),
      })
    );
  });
  it("should test autoSetInputValueKeyboardOpen function", async () => {
    const page = await createMenu();

    const eventSpy = jest.fn();

    const inputEl = page.rootInstance.inputEl;

    page.root.addEventListener("menuOptionSelect", eventSpy);
    page.root.addEventListener("menuStateChange", eventSpy);
    inputEl.addEventListener("focus", eventSpy);

    page.root.open = false;

    await page.waitForChanges();

    await page.rootInstance.autoSetInputValueKeyboardOpen(
      keyboardEvent("ArrowUp")
    );

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          optionId: menuIdMocha,
        }),
      })
    );

    page.rootInstance.open = false;

    await page.waitForChanges();

    await page.rootInstance.autoSetInputValueKeyboardOpen(
      keyboardEvent("Enter")
    );

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          open: true,
          focusInput: undefined,
        }),
      })
    );

    page.rootInstance.open = false;

    await page.waitForChanges();

    await page.rootInstance.autoSetInputValueKeyboardOpen(keyboardEvent(" "));

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          open: true,
          focusInput: undefined,
        }),
      })
    );
  });
  it("should test autoSetInputValueKeyboardOpen function with character keys", async () => {
    const page = await createMenu();

    page.root.options = menuOptions;

    await page.waitForChanges();

    page.rootInstance.autoSetInputValueKeyboardOpen(keyboardEvent("e"));
    page.rootInstance.autoSetInputValueKeyboardOpen(keyboardEvent("s"));

    await page.waitForChanges();

    expect(page.root.value).toBe("espresso");
  });
  it("should test manualSetInputValueKeyboardOpen function", async () => {
    const searchBar = window.document.createElement(
      IcSearchBar
    ) as HTMLIcSearchBarElement;
    const input = window.document.createElement("input");

    const searchMenuOptions = JSON.parse(JSON.stringify(menuOptions));
    searchMenuOptions[3].disabled = true;

    searchBar.setFocus = jest.fn();

    const page = await newSpecPage({
      components: [Menu, IcInputComponentContainer],
      template: () => (
        <ic-menu
          open
          activationType="automatic"
          options={searchMenuOptions}
          menuId="menu-id"
          inputLabel="input-label"
          inputEl={input}
          anchorEl={searchBar}
          value={searchMenuOptions[0].value}
          parentEl={searchBar}
        ></ic-menu>
      ),
    });

    const eventSpy = jest.fn();

    page.root.addEventListener("menuOptionId", eventSpy);
    page.root.addEventListener("menuOptionSelect", eventSpy);

    page.rootInstance.manualSetInputValueKeyboardOpen(keyboardEvent("ArrowUp"));

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          optionId: menuIdMocha,
        }),
      })
    );

    page.rootInstance.setHighlightedOption(3);

    await page.waitForChanges();

    page.rootInstance.manualSetInputValueKeyboardOpen(keyboardEvent("ArrowUp"));

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          optionId: "menu-id-flatwhite",
        }),
      })
    );

    page.rootInstance.setHighlightedOption(0);

    await page.waitForChanges();

    page.rootInstance.manualSetInputValueKeyboardOpen(
      keyboardEvent("ArrowDown")
    );

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          optionId: "menu-id-doubleespresso",
        }),
      })
    );

    page.rootInstance.setHighlightedOption(8);

    await page.waitForChanges();

    page.rootInstance.manualSetInputValueKeyboardOpen(
      keyboardEvent("ArrowDown")
    );

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          optionId: menuIdEspresso,
        }),
      })
    );

    page.rootInstance.setHighlightedOption(2);

    await page.waitForChanges();

    page.rootInstance.manualSetInputValueKeyboardOpen(keyboardEvent("Enter"));

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          value: "flatwhite",
        }),
      })
    );

    page.rootInstance.setHighlightedOption(2);

    await page.waitForChanges();

    const eventSpy2 = jest.fn();
    page.root.addEventListener("menuOptionId", eventSpy2);

    page.rootInstance.manualSetInputValueKeyboardOpen(
      keyboardEvent("ArrowDown")
    );

    await page.waitForChanges();

    expect(eventSpy2).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          optionId: "menu-id-cappuccino",
        }),
      })
    );

    page.rootInstance.manualSetInputValueKeyboardOpen(keyboardEvent("Enter"));

    await page.waitForChanges();

    expect(page.rootInstance.disabledOptionSelected).toBe(true);

    page.rootInstance.manualSetInputValueKeyboardOpen(keyboardEvent("Escape"));

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          optionId: undefined,
        }),
      })
    );

    page.rootInstance.preventIncorrectTabOrder = false;

    await page.waitForChanges();

    page.rootInstance.manualSetInputValueKeyboardOpen(keyboardEvent("Shift"));

    await page.waitForChanges();

    expect(page.rootInstance.preventIncorrectTabOrder).toBe(true);

    page.rootInstance.preventIncorrectTabOrder = false;

    await page.waitForChanges();

    page.rootInstance.manualSetInputValueKeyboardOpen(keyboardEvent("Tab"));

    await page.waitForChanges();

    expect(page.rootInstance.preventIncorrectTabOrder).toBe(true);

    page.rootInstance.preventIncorrectTabOrder = false;

    page.rootInstance.isSearchBar = true;

    page.rootInstance.setHighlightedOption(4);

    page.rootInstance.manualSetInputValueKeyboardOpen(
      keyboardEvent("Backspace")
    );

    await page.waitForChanges();

    expect(page.rootInstance.optionHighlighted).toBe("espresso");

    page.rootInstance.setHighlightedOption(6);

    await page.waitForChanges();

    page.rootInstance.manualSetInputValueKeyboardOpen(keyboardEvent("KeyF"));

    await page.waitForChanges();

    expect(page.rootInstance.optionHighlighted).toBe("espresso");

    page.rootInstance.setHighlightedOption(2);

    await page.waitForChanges();

    page.rootInstance.manualSetInputValueKeyboardOpen(keyboardEvent("Home"));

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          optionId: menuIdEspresso,
        }),
      })
    );

    await page.waitForChanges();

    page.rootInstance.manualSetInputValueKeyboardOpen(keyboardEvent("End"));

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          optionId: menuIdMocha,
        }),
      })
    );
  });
  it("should test manualSetInputValueKeyboardOpen function when searchable select", async () => {
    const searchableSelect = window.document.createElement(
      "IC-SELECT"
    ) as HTMLIcSelectElement;
    const input = window.document.createElement("input");

    searchableSelect.setFocus = jest.fn();
    searchableSelect.searchable = true;

    const page = await newSpecPage({
      components: [Menu, IcInputComponentContainer],
      template: () => (
        <ic-menu
          open
          activationType="automatic"
          options={menuOptions}
          menuId="menu-id"
          inputLabel="input-label"
          inputEl={input}
          anchorEl={searchableSelect}
          value={menuOptions[0].value}
          parentEl={searchableSelect}
        ></ic-menu>
      ),
    });

    page.rootInstance.isSearchableSelect = true;

    page.rootInstance.manualSetInputValueKeyboardOpen(
      keyboardEvent("Backspace")
    );

    await page.waitForChanges();

    expect(searchableSelect.setFocus).toHaveBeenCalled();
  });
  it("should test manualSetInputValueKeyboardOpen function when searchbar", async () => {
    const select = window.document.createElement(
      "IC-SELECT"
    ) as HTMLIcSelectElement;
    const input = window.document.createElement("input");

    select.setFocus = jest.fn();

    const page = await newSpecPage({
      components: [Menu, IcInputComponentContainer],
      template: () => (
        <ic-menu
          open
          activationType="automatic"
          options={menuOptions}
          menuId="menu-id"
          inputLabel="input-label"
          inputEl={input}
          anchorEl={select}
          value={menuOptions[0].value}
          parentEl={select}
        ></ic-menu>
      ),
    });

    page.rootInstance.isSearchBar = true;

    page.rootInstance.manualSetInputValueKeyboardOpen(
      keyboardEvent("Backspace")
    );

    await page.waitForChanges();

    expect(select.setFocus).toHaveBeenCalled();
  });
  it("should test manualSetInputValueKeyboardOpen function when default parameter passed", async () => {
    const select = window.document.createElement(
      "IC-SELECT"
    ) as HTMLIcSelectElement;
    const input = window.document.createElement("input");

    select.setFocus = jest.fn();

    const page = await newSpecPage({
      components: [Menu, IcInputComponentContainer],
      template: () => (
        <ic-menu
          open
          activationType="automatic"
          options={menuOptions}
          menuId="menu-id"
          inputLabel="input-label"
          inputEl={input}
          anchorEl={select}
          value={menuOptions[0].value}
          parentEl={select}
        ></ic-menu>
      ),
    });

    page.rootInstance.isSearchBar = false;
    page.rootInstance.isSearchableSelect = true;

    page.rootInstance.manualSetInputValueKeyboardOpen(keyboardEvent("KeyR"));

    await page.waitForChanges();

    expect(page.rootInstance.value).toBe(menuOptions[0].value);
  });
  it("should test manualSetInputValueKeyboardOpen function when multi-select", async () => {
    const multiSelect = window.document.createElement(
      "IC-SELECT"
    ) as HTMLIcSelectElement;
    const input = window.document.createElement("input");

    const page = await newSpecPage({
      components: [Menu, IcInputComponentContainer],
      template: () => (
        <ic-menu
          open
          activationType="automatic"
          options={menuOptions}
          menuId="menu-id"
          inputLabel="input-label"
          inputEl={input}
          anchorEl={multiSelect}
          value={menuOptions[0].value}
          parentEl={multiSelect}
        ></ic-menu>
      ),
    });

    jest
      .spyOn(page.rootInstance, "selectHighlightedOption")
      .mockImplementation();
    jest
      .spyOn(page.rootInstance, "getMenuOptions")
      .mockImplementation(() => menuOptions);

    page.rootInstance.isMultiSelect = true;

    await page.rootInstance.manualSetInputValueKeyboardOpen(keyboardEvent(" "));

    await page.waitForChanges();

    expect(page.rootInstance.selectHighlightedOption).toHaveBeenCalledWith(
      {
        id: "key-id",
      },
      menuOptions,
      -1
    );

    jest.spyOn(page.rootInstance, "setHighlightedOption").mockImplementation();

    page.rootInstance.multiOptionClicked = menuOptions[0].value;

    await page.waitForChanges();

    await page.rootInstance.manualSetInputValueKeyboardOpen(
      keyboardEvent("ArrowDown")
    );

    await page.waitForChanges();

    expect(page.rootInstance.setHighlightedOption).toHaveBeenCalledWith(0);
    expect(page.rootInstance.multiOptionClicked).toBe(null);

    page.rootInstance.multiOptionClicked = menuOptions[0].value;

    await page.waitForChanges();

    await page.rootInstance.manualSetInputValueKeyboardOpen(
      keyboardEvent("ArrowUp")
    );

    await page.waitForChanges();

    expect(page.rootInstance.setHighlightedOption).toHaveBeenCalledWith(0);
    expect(page.rootInstance.multiOptionClicked).toBe(null);

    jest.spyOn(page.rootInstance, "emitSelectAll").mockImplementation();
    jest.spyOn(helpers, "isMacDevice").mockImplementation(() => true);

    await page.rootInstance.manualSetInputValueKeyboardOpen({
      key: "a",
      preventDefault: (): void => null,
      stopImmediatePropagation: (): void => null,
      metaKey: true,
      target: {
        id: "key-id",
      },
    });

    await page.waitForChanges();

    expect(page.rootInstance.emitSelectAll).toHaveBeenCalled();

    jest.spyOn(helpers, "isMacDevice").mockImplementation(() => false);

    await page.rootInstance.manualSetInputValueKeyboardOpen({
      key: "a",
      preventDefault: (): void => null,
      stopImmediatePropagation: (): void => null,
      ctrlKey: true,
      target: {
        id: "key-id",
      },
    });

    await page.waitForChanges();

    expect(page.rootInstance.emitSelectAll).toHaveBeenCalledTimes(2);

    page.rootInstance.optionHighlighted = "doubleespresso";
    page.rootInstance.multiOptionClicked = null;
    await page.rootInstance.manualSetInputValueKeyboardOpen({
      key: "ArrowDown",
      preventDefault: (): void => null,
      stopImmediatePropagation: (): void => null,
      shiftKey: true,
      target: {
        id: "key-id",
      },
    });

    await page.waitForChanges();

    expect(page.rootInstance.selectHighlightedOption).toHaveBeenCalledWith(
      {
        id: "key-id",
      },
      menuOptions,
      1
    );

    const eventSpy = jest.fn();

    page.rootInstance.selectAllButton.addEventListener("focus", eventSpy);

    await page.rootInstance.manualSetInputValueKeyboardOpen(
      keyboardEvent("Tab")
    );

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
    expect(page.rootInstance.menu.tabIndex).toBe(-1);
    expect(page.rootInstance.preventClickOpen).toBe(true);
    expect(page.rootInstance.optionHighlighted).toBe(undefined);
  });
  it("should test manualSetInputValueKeyboardOpen function when select on enter", async () => {
    const select = window.document.createElement(
      "IC-SELECT"
    ) as HTMLIcSelectElement;
    const input = window.document.createElement("input");
    select.selectOnEnter = true;
    const page = await newSpecPage({
      components: [Menu, IcInputComponentContainer],
      template: () => (
        <ic-menu
          open
          activationType="automatic"
          options={menuOptions}
          menuId="menu-id"
          inputLabel="input-label"
          inputEl={input}
          anchorEl={select}
          value={menuOptions[0].value}
          parentEl={select}
        ></ic-menu>
      ),
    });
    const eventSpy = jest.fn();
    page.root.addEventListener("menuOptionSelect", eventSpy);
    page.rootInstance.manualSetInputValueKeyboardOpen(
      keyboardEvent("ArrowDown")
    );
    await page.waitForChanges();
    expect(eventSpy).not.toHaveBeenCalled();
    page.rootInstance.manualSetInputValueKeyboardOpen(keyboardEvent("Enter"));
    await page.waitForChanges();
    expect(eventSpy).toHaveBeenCalled();
  });
  it("should test setInputValue function when default parameter passed", async () => {
    const select = window.document.createElement(
      "IC-SELECT"
    ) as HTMLIcSelectElement;
    const input = window.document.createElement("input");

    select.setFocus = jest.fn();

    const page = await newSpecPage({
      components: [Menu, IcInputComponentContainer],
      template: () => (
        <ic-menu
          open
          activationType="automatic"
          options={menuOptions}
          menuId="menu-id"
          inputLabel="input-label"
          inputEl={input}
          anchorEl={select}
          value={menuOptions[0].value}
          parentEl={select}
        ></ic-menu>
      ),
    });

    page.rootInstance.hasTimedOut = true;

    page.rootInstance.setInputValue(35);

    await page.waitForChanges();

    expect(select.setFocus).toHaveBeenCalled();
  });
  it("should test handleSubmitSearch function", async () => {
    const page = await createMenu();

    const eventSpy = jest.fn();

    page.root.addEventListener("menuOptionSelect", eventSpy);

    page.rootInstance.optionHighlighted = "americano";

    await page.waitForChanges();

    const event = new CustomEvent("icSubmitSearch", {
      detail: {
        value: "americano",
      },
    });

    page.root.parentEl.dispatchEvent(event);

    await page.waitForChanges();

    page.rootInstance.autoSetValueOnMenuKeyDown(keyboardEvent("Enter"));

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
  });
  it("should test handleSetFirstOption function", async () => {
    const page = await createMenu();

    const eventSpy = jest.fn();

    page.root.addEventListener("menuOptionSelect", eventSpy);

    page.root.options = menuOptions;

    await page.waitForChanges();

    page.rootInstance.optionHighlighted = "americano";

    await page.waitForChanges();

    await page.rootInstance.handleSetFirstOption();

    await page.waitForChanges();

    page.rootInstance.autoSetValueOnMenuKeyDown(keyboardEvent("Enter"));

    await page.waitForChanges();

    expect(page.rootInstance.optionHighlighted).toBe("espresso");
  });
  it("should test handleClearListener function", async () => {
    const page = await createMenu();

    const eventSpy = jest.fn();

    page.root.addEventListener("menuOptionSelect", eventSpy);

    page.rootInstance.optionHighlighted = "americano";

    await page.waitForChanges();

    await page.rootInstance.handleClearListener();

    await page.waitForChanges();

    expect(page.rootInstance.optionHighlighted).toBe("");
  });
  it("should test handleOptionClick function", async () => {
    const page = await createMenu();

    const eventSpy = jest.fn();

    page.root.addEventListener("menuOptionSelect", eventSpy);

    const el = page.rootInstance.menu.childNodes[1];

    const event = { target: el, shiftKey: false };

    await page.waitForChanges();

    page.rootInstance.handleOptionClick(event);

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: {
          value: "doubleespresso",
          label: "Double Espresso",
        },
      })
    );

    page.rootInstance.isMultiSelect = true;

    await page.waitForChanges();

    await page.rootInstance.handleOptionClick(event);

    expect(page.rootInstance.multiOptionClicked).toBe("doubleespresso");

    page.rootInstance.value = ["espresso", "flatwhite", "cappuccino"];
    page.rootInstance.isMultiSelect = true;
    page.rootInstance.multiOptionClicked = null;
    event.shiftKey = true;

    await page.waitForChanges();

    await page.rootInstance.handleOptionClick(event);

    expect(page.rootInstance.multiOptionClicked).toBe("doubleespresso");
  });
  it("should test handleBlur function", async () => {
    const page = await createMenu();

    const eventSpy = jest.fn();

    const event = new FocusEvent("blur");

    page.root.addEventListener("menuStateChange", eventSpy);

    page.rootInstance.handleBlur(event);

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: {
          open: false,
          focusInput: false,
        },
      })
    );

    const inputEl = page.root.inputEl;

    const eventTwo = new FocusEvent("blur", { relatedTarget: inputEl });

    page.rootInstance.handleBlur(eventTwo);

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: {
          open: false,
          focusInput: undefined,
        },
      })
    );
  });
  it("should test handleMouseDown function", async () => {
    const page = await createMenu();

    const eventSpy = jest.fn();

    page.root.addEventListener("preventDefault", eventSpy);

    const event = new Event("click");

    event.preventDefault = eventSpy;

    await page.waitForChanges();

    page.rootInstance.handleMouseDown(event);

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
  });
  it("should test handleMenuKeyDown function", async () => {
    const page = await createMenu();

    const eventSpy = jest.fn();

    page.root.addEventListener("menuOptionSelect", eventSpy);

    page.rootInstance.handleMenuKeyDown(keyboardEvent("ArrowDown"));

    await page.waitForChanges();

    page.rootInstance.handleMenuKeyDown(keyboardEvent("ArrowDown"));

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          value: "doubleespresso",
        }),
      })
    );
  });
  it("should test searchMode=`query", async () => {
    const page = await createMenu();

    page.rootInstance.searchMode = "query";

    await page.waitForChanges();

    page.rootInstance.handleMenuKeyDown(keyboardEvent("F"));

    expect(page.rootInstance.optionHighlighted).toBeUndefined;
  });
  it("should test handleMenuKeyDown function as searchableSelect", async () => {
    const page = await createMenu();

    page.rootInstance.activationType = "manual";
    page.rootInstance.isSearchableSelect = true;

    const eventSpy = jest.fn();

    page.root.addEventListener("menuOptionId", eventSpy);

    page.rootInstance.handleMenuKeyDown(keyboardEvent("ArrowDown"));

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
  });
  it("should test handleRetry function", async () => {
    const page = await createMenu();

    const eventSpy = jest.fn();

    page.root.addEventListener("retryButtonClicked", eventSpy);

    page.rootInstance.handleRetry();

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          value: "espresso",
        }),
      })
    );
  });
  it("should test handleRetryKeyDown function", async () => {
    const page = await createMenu();

    const eventSpy = jest.fn();

    page.root.addEventListener("retryButtonClicked", eventSpy);

    page.rootInstance.handleRetryKeyDown(keyboardEvent("Enter"));

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          value: "espresso",
          keyPressed: "Enter",
        }),
      })
    );
  });
  it("should test autoSetValueOnMenuKeyDown - Shift - function", async () => {
    const page = await createMenu();

    const inputEl = page.rootInstance.inputEl;

    const eventSpy = jest.fn();

    page.root.addEventListener("menuOptionSelect", eventSpy);
    inputEl.addEventListener("focus", eventSpy);

    await page.waitForChanges();

    await page.rootInstance.autoSetValueOnMenuKeyDown(keyboardEvent("Shift"));

    await page.waitForChanges();

    expect(eventSpy).not.toHaveBeenCalled();
  });
  it("should test autoSetValueOnMenuKeyDown function", async () => {
    const page = await createMenu();

    const inputEl = page.rootInstance.inputEl;

    const eventSpy = jest.fn();

    page.root.addEventListener("menuOptionSelect", eventSpy);
    inputEl.addEventListener("focus", eventSpy);
    page.root.addEventListener("menuStateChange", eventSpy);

    page.rootInstance.autoSetValueOnMenuKeyDown(keyboardEvent("ArrowUp"));

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          value: "mocha",
        }),
      })
    );

    page.rootInstance.autoSetValueOnMenuKeyDown(keyboardEvent("End"));

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          value: "mocha",
        }),
      })
    );

    page.rootInstance.autoSetValueOnMenuKeyDown(keyboardEvent("Backspace"));

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();

    page.rootInstance.autoSetValueOnMenuKeyDown(keyboardEvent("d"));

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledTimes(4);

    const preDef = jest.fn();

    const spaceKey = {
      key: ` `,
      preventDefault: preDef,
      shiftKey: false,
      target: {
        id: "key-id",
      },
    };

    await page.rootInstance.autoSetValueOnMenuKeyDown(spaceKey);

    await page.waitForChanges();

    expect(spaceKey.preventDefault).toHaveBeenCalled();

    page.rootInstance.autoSetValueOnMenuKeyDown(keyboardEvent("Escape"));

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          open: false,
          focusInput: undefined,
        }),
      })
    );
  });
  it("should test handleMenukeyUp function", async () => {
    const page = await createMenu();

    page.rootInstance.preventClickOpen = true;

    let key = keyboardEvent("Tab");

    key.shiftKey = true;

    await page.waitForChanges();

    page.rootInstance.handleMenuKeyUp(key);

    await page.waitForChanges();

    expect(page.rootInstance.preventClickOpen).toBe(false);

    page.rootInstance.disabledOptionSelected = true;
    key = keyboardEvent("Enter");
    await page.waitForChanges();

    page.rootInstance.handleMenuKeyUp(key);

    await page.waitForChanges();

    expect(page.rootInstance.disabledOptionSelected).toBe(false);

    key = keyboardEvent("Shift");
    await page.waitForChanges();

    page.rootInstance.handleMenuKeyUp(key);

    await page.waitForChanges();

    expect(page.rootInstance.shiftPressed).toBe(false);
  });
  it("should test connectedCallback function", async () => {
    const searchBar = window.document.createElement(IcSearchBar);
    const input = window.document.createElement("input");

    const page = await newSpecPage({
      components: [Menu, IcInputComponentContainer],
      template: () => (
        <ic-menu
          open
          activationType="automatic"
          options={menuOptions}
          menuId="menu-id"
          inputLabel="input-label"
          inputEl={input}
          anchorEl={searchBar}
          value={menuOptions[0].value}
          parentEl={searchBar as HTMLIcSearchBarElement}
        ></ic-menu>
      ),
    });

    expect(page.rootInstance.optionHighlighted).toBe("espresso");
  });
  it("should test disconnectedCallback function", async () => {
    const page = await createMenu();

    await page.waitForChanges();

    expect(page.rootInstance.parentEl.__listeners[1].type).toBe(
      "icSubmitSearch"
    );

    page.rootInstance.disconnectedCallback();

    await page.waitForChanges();

    expect(page.rootInstance.parentEl.__listeners.length).toBe(0);
  });
  it("should test componentDidLoad function", async () => {
    const searchBar = window.document.createElement(
      IcSearchBar
    ) as HTMLIcSearchBarElement;
    const input = window.document.createElement("input");
    searchBar.disableAutoFiltering = true;

    const page = await newSpecPage({
      components: [Menu, IcInputComponentContainer],
      template: () => (
        <ic-menu
          open
          activationType="automatic"
          options={menuOptions}
          menuId="menu-id"
          inputLabel="input-label"
          inputEl={input}
          anchorEl={searchBar}
          value={menuOptions[0].value}
          parentEl={searchBar}
        ></ic-menu>
      ),
    });

    page.rootInstance.focusFromSearchKeypress = false;

    page.rootInstance.componentDidLoad();

    await page.waitForChanges();

    expect(page.rootInstance.focusFromSearchKeypress).toBe(true);
  });
  it("should test getParentEl function", async () => {
    const select = window.document.createElement(
      "ic-select"
    ) as HTMLIcSelectElement;
    select.searchable = true;
    select.setAttribute("searchable", "true");

    const page = await createMenu();

    page.rootInstance.getParentEl(select);

    await page.waitForChanges();

    expect(page.rootInstance.isSearchableSelect).toBe(true);
  });
  it("should test handleTimeoutBlur function", async () => {
    const page = await createMenu();

    const eventSpy = jest.fn();

    page.root.addEventListener("timeoutBlur", eventSpy);

    const event = new FocusEvent("blur");

    page.rootInstance.handleTimeoutBlur(event);

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          ev: expect.objectContaining({
            type: "blur",
          }),
        }),
      })
    );
  });
  it("should test handleMenuChange function when multi-select", async () => {
    const page = await createMenu();

    page.rootInstance.optionHighlighted = "espresso";
    page.rootInstance.isMultiSelect = true;

    await page.waitForChanges();

    expect(page.rootInstance.optionHighlighted).toBe("espresso");

    await page.rootInstance.handleMenuChange(false);

    await page.waitForChanges();

    expect(page.rootInstance.optionHighlighted).toBe(undefined);
  });
  it("should test selectHighlightedOption function when multi-select", async () => {
    const page = await createMenu();

    page.rootInstance.open = false;
    page.rootInstance.isMultiSelect = true;

    jest.spyOn(page.rootInstance, "handleMenuChange").mockImplementation();

    await page.waitForChanges();

    await page.rootInstance.selectHighlightedOption(
      { target: "test-id" },
      menuOptions,
      0
    );

    await page.waitForChanges();

    expect(page.rootInstance.handleMenuChange).toHaveBeenCalledWith(true);
  });
  it("should test selectHighlightedOption function when multi-select", async () => {
    const page = await createMenu();

    page.rootInstance.open = false;
    page.rootInstance.isMultiSelect = true;

    jest.spyOn(page.rootInstance, "handleMenuChange").mockImplementation();

    await page.waitForChanges();

    await page.rootInstance.selectHighlightedOption(
      { target: "test-id" },
      menuOptions,
      0
    );

    await page.waitForChanges();

    expect(page.rootInstance.handleMenuChange).toHaveBeenCalledWith(true);
  });
  it("should test handleSelectAllClick function", async () => {
    const page = await createMenu();

    page.rootInstance.menu.tabIndex = -1;

    const eventSpy = jest.fn();

    page.rootInstance.menu.addEventListener("focus", eventSpy);

    jest.spyOn(page.rootInstance, "emitSelectAll").mockImplementation();

    await page.rootInstance.handleSelectAllClick();

    expect(eventSpy).toHaveBeenCalled();
    expect(page.rootInstance.emitSelectAll).toHaveBeenCalled();
  });
  it("should test handleSelectAllBlur function", async () => {
    const multiSelect = window.document.createElement(
      "IC-SELECT"
    ) as HTMLIcSelectElement;
    const input = window.document.createElement("input");

    const page = await newSpecPage({
      components: [Menu, IcInputComponentContainer],
      template: () => (
        <ic-menu
          open
          activationType="automatic"
          options={menuOptions}
          menuId="menu-id"
          inputLabel="input-label"
          inputEl={input}
          anchorEl={multiSelect}
          value={menuOptions[0].value}
          parentEl={multiSelect}
        ></ic-menu>
      ),
    });

    jest.spyOn(page.rootInstance, "handleMenuChange").mockImplementation();

    const option = await page.root.querySelector("li");

    await page.rootInstance.handleSelectAllBlur({ relatedTarget: option });

    await page.waitForChanges();

    expect(page.rootInstance.handleMenuChange).not.toHaveBeenCalled();

    await page.rootInstance.handleSelectAllBlur({ relatedTarget: input });

    await page.waitForChanges();

    expect(page.rootInstance.handleMenuChange).toHaveBeenCalledWith(
      false,
      false
    );
  });
  it("should test handleSelectAllFocus function", async () => {
    const page = await createMenu();

    await page.rootInstance.handleSelectAllFocus();

    expect(page.root).toMatchSnapshot();
  });
  it("should test emitSelectAll function", async () => {
    const page = await createMenu();

    const eventSpy = jest.fn();

    page.root.addEventListener("menuOptionSelectAll", eventSpy);

    await page.rootInstance.emitSelectAll();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          select: true,
        }),
      })
    );

    page.rootInstance.value = ["espresso"];

    await page.waitForChanges();

    await page.rootInstance.emitSelectAll();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          select: true,
        }),
      })
    );

    page.rootInstance.value = [
      "espresso",
      "doubleespresso",
      "flatwhite",
      "cappuccino",
      "americano",
      "ameno",
      "green",
      "acano",
      "mocha",
    ];

    await page.waitForChanges();

    await page.rootInstance.emitSelectAll();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          select: false,
        }),
      })
    );
  });
  it("should test handleSelectAllMouseDown", async () => {
    const page = await createMenu();

    const eventSpy = jest.fn();

    page.root.addEventListener("preventDefault", eventSpy);

    const event = new Event("click");

    event.preventDefault = eventSpy;

    await page.rootInstance.handleSelectAllMouseDown(event);

    expect(eventSpy).toHaveBeenCalled();
  });
  it("tests deselection of options when pressing ArrowDown after Shift", async () => {
    const multiSelect = window.document.createElement(
      "IC-SELECT"
    ) as HTMLIcSelectElement;
    const input = window.document.createElement("input");

    const page = await newSpecPage({
      components: [Menu, IcInputComponentContainer],
      template: () => (
        <ic-menu
          open
          activationType="automatic"
          options={menuOptions}
          menuId="menu-id"
          inputLabel="input-label"
          inputEl={input}
          anchorEl={multiSelect}
          value={menuOptions[0].value}
          parentEl={multiSelect}
        ></ic-menu>
      ),
    });

    page.rootInstance.isMultiSelect = true;

    jest
      .spyOn(page.rootInstance, "deselectSelectedOptions")
      .mockImplementation();

    page.rootInstance.value = [
      "espresso",
      "doubleespresso",
      "flatwhite",
      "cappuccino",
      "americano",
      "ameno",
      "green",
      "acano",
      "mocha",
    ];

    await page.waitForChanges();

    await page.rootInstance.manualSetInputValueKeyboardOpen(
      keyboardEvent("Shift")
    );

    await page.waitForChanges();

    await page.rootInstance.manualSetInputValueKeyboardOpen(
      keyboardEvent("ArrowDown")
    );

    await page.waitForChanges();

    expect(page.rootInstance.deselectSelectedOptions).toHaveBeenCalledWith([
      -1, 0,
    ]);
  });
  it("tests deselection of options when pressing ArrowUp after Shift", async () => {
    const multiSelect = window.document.createElement(
      "IC-SELECT"
    ) as HTMLIcSelectElement;
    const input = window.document.createElement("input");

    const page = await newSpecPage({
      components: [Menu, IcInputComponentContainer],
      template: () => (
        <ic-menu
          open
          activationType="automatic"
          options={menuOptions}
          menuId="menu-id"
          inputLabel="input-label"
          inputEl={input}
          anchorEl={multiSelect}
          value={menuOptions[0].value}
          parentEl={multiSelect}
        ></ic-menu>
      ),
    });

    page.rootInstance.isMultiSelect = true;

    jest
      .spyOn(page.rootInstance, "deselectSelectedOptions")
      .mockImplementation();

    page.rootInstance.value = [
      "espresso",
      "doubleespresso",
      "flatwhite",
      "cappuccino",
      "americano",
      "ameno",
      "green",
      "acano",
      "mocha",
    ];

    await page.waitForChanges();

    await page.rootInstance.manualSetInputValueKeyboardOpen(
      keyboardEvent("Shift")
    );

    await page.waitForChanges();

    await page.rootInstance.manualSetInputValueKeyboardOpen(
      keyboardEvent("ArrowUp")
    );

    await page.waitForChanges();

    expect(page.rootInstance.deselectSelectedOptions).toHaveBeenCalledWith([
      -1, 8,
    ]);
  });
  it("tests selection of options when pressing Home or End with Shift & Ctrl", async () => {
    const multiSelect = window.document.createElement(
      "IC-SELECT"
    ) as HTMLIcSelectElement;
    const input = window.document.createElement("input");

    const page = await newSpecPage({
      components: [Menu, IcInputComponentContainer],
      template: () => (
        <ic-menu
          open
          activationType="automatic"
          options={menuOptions}
          menuId="menu-id"
          inputLabel="input-label"
          inputEl={input}
          anchorEl={multiSelect}
          value={menuOptions[0].value}
          parentEl={multiSelect}
        ></ic-menu>
      ),
    });

    page.rootInstance.isMultiSelect = true;

    jest
      .spyOn(page.rootInstance, "handleMultipleShiftSelect")
      .mockImplementation();

    page.rootInstance.value = [
      "espresso",
      "doubleespresso",
      "flatwhite",
      "cappuccino",
      "americano",
      "ameno",
      "green",
      "acano",
      "mocha",
    ];

    await page.waitForChanges();

    await page.rootInstance.manualSetInputValueKeyboardOpen({
      key: "End",
      preventDefault: (): void => null,
      stopImmediatePropagation: (): void => null,
      ctrlKey: true,
      shiftKey: true,
      target: {
        id: "key-id",
      },
    });

    expect(page.rootInstance.handleMultipleShiftSelect).toHaveBeenCalledWith(8);

    await page.rootInstance.manualSetInputValueKeyboardOpen({
      key: "Home",
      preventDefault: (): void => null,
      stopImmediatePropagation: (): void => null,
      ctrlKey: true,
      shiftKey: true,
      target: {
        id: "key-id",
      },
    });

    expect(page.rootInstance.handleMultipleShiftSelect).toHaveBeenCalledWith(0);
  });
  it("tests isOptionSelected", async () => {
    const multiSelect = window.document.createElement(
      "IC-SELECT"
    ) as HTMLIcSelectElement;
    const input = window.document.createElement("input");

    const page = await newSpecPage({
      components: [Menu, IcInputComponentContainer],
      template: () => (
        <ic-menu
          open
          activationType="automatic"
          options={menuOptions}
          menuId="menu-id"
          inputLabel="input-label"
          inputEl={input}
          anchorEl={multiSelect}
          value={menuOptions[0].value}
          parentEl={multiSelect}
        ></ic-menu>
      ),
    });

    page.rootInstance.value = ["espresso", "doubleespresso"];

    await page.waitForChanges();

    let isSelected = await page.rootInstance.isOptionSelected([1]);
    expect(isSelected).toBe(true);

    isSelected = await page.rootInstance.isOptionSelected([3]);
    expect(isSelected).toBe(false);

    page.rootInstance.value = "";
    await page.waitForChanges();

    isSelected = await page.rootInstance.isOptionSelected([0]);
    expect(isSelected).toBe(false);
  });
  it("tests handleMultipleShiftSelect with optional params using default values", async () => {
    const multiSelect = window.document.createElement(
      "IC-SELECT"
    ) as HTMLIcSelectElement;
    const input = window.document.createElement("input");

    const page = await newSpecPage({
      components: [Menu, IcInputComponentContainer],
      template: () => (
        <ic-menu
          open
          activationType="automatic"
          options={menuOptions}
          menuId="menu-id"
          inputLabel="input-label"
          inputEl={input}
          anchorEl={multiSelect}
          value={menuOptions[0].value}
          parentEl={multiSelect}
        ></ic-menu>
      ),
    });

    page.rootInstance.value = ["espresso", "doubleespresso", "flatwhite"];

    jest
      .spyOn(page.rootInstance, "deselectSelectedOptions")
      .mockImplementation();
    page.rootInstance.lastOptionSelected = 1;
    await page.waitForChanges();
    page.rootInstance.handleMultipleShiftSelect(3);

    await page.waitForChanges();

    expect(page.rootInstance.deselectSelectedOptions).toHaveBeenCalledWith([
      1, 2, 3,
    ]);
  });
});
