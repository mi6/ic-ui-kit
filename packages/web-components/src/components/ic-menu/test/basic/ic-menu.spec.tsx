import { newSpecPage } from "@stencil/core/testing";
import { Menu } from "../../ic-menu";
import { InputComponentContainer } from "../../../ic-input-component-container/ic-input-component-container";
import { testKeyboardEvent as keyboardEvent } from "../../../../testspec.setup";
import { h } from "@stencil/core";

const menuOptions = [
  { label: "Espresso", value: "espresso" },
  { label: "Double Espresso", value: "doubleespresso" },
  { label: "Flat White", value: "flatwhite" },
  {
    label: "Cappuccino",
    value: "cappucino",
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
    components: [Menu, InputComponentContainer],
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
  it("sets open prop to true by default", async () => {
    const page = await createMenu();

    expect(page.root.open).toBe(true);
  });
  it("tests ungroupedOptionsSet emitter", async () => {
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
  it("tests menuOptionSelect emitter", async () => {
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
  it("tests menuStateChange emitter", async () => {
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
  it("tests menuOptionId emitter", async () => {
    const page = await createMenu();

    const eventSpy = jest.fn();

    page.root.addEventListener("menuOptionId", eventSpy);

    await page.waitForChanges();

    page.rootInstance.manSetInputValueKeyboardOpen(keyboardEvent("ArrowDown"));

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          optionId: menuIdEspresso,
        }),
      })
    );
  });
  it("tests menuKeyPress emitter", async () => {
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
  it("tests setNextOptionValue function", async () => {
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
  it("tests setPreviousOptionValue function", async () => {
    const page = await createMenu();

    const eventSpy = jest.fn();

    page.root.addEventListener("menuOptionSelect", eventSpy);

    await page.waitForChanges();

    page.rootInstance.setPreviousOptionValue(4);

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          value: "cappucino",
        }),
      })
    );
  });
  it("tests handleClickOpen function", async () => {
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
  it("tests handleKeyboardOpen function", async () => {
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
  it("tests autoSetInputValueKeyboardOpen function", async () => {
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
  it("tests autoSetInputValueKeyboardOpen function with character keys", async () => {
    const page = await createMenu();

    page.root.options = menuOptions;

    await page.waitForChanges();

    page.rootInstance.autoSetInputValueKeyboardOpen(keyboardEvent("e"));
    page.rootInstance.autoSetInputValueKeyboardOpen(keyboardEvent("s"));

    await page.waitForChanges();

    expect(page.root.value).toBe("espresso");
  });
  it("tests manSetInputValueKeyboardOpen function", async () => {
    const searchBar = window.document.createElement(
      IcSearchBar
    ) as HTMLIcSearchBarElement;
    const input = window.document.createElement("input");

    searchBar.setFocus = jest.fn();

    const page = await newSpecPage({
      components: [Menu, InputComponentContainer],
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

    const eventSpy = jest.fn();

    page.root.addEventListener("menuOptionId", eventSpy);
    page.root.addEventListener("menuOptionSelect", eventSpy);

    page.rootInstance.manSetInputValueKeyboardOpen(keyboardEvent("ArrowUp"));

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

    page.rootInstance.manSetInputValueKeyboardOpen(keyboardEvent("ArrowUp"));

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

    page.rootInstance.manSetInputValueKeyboardOpen(keyboardEvent("ArrowDown"));

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

    page.rootInstance.manSetInputValueKeyboardOpen(keyboardEvent("ArrowDown"));

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

    page.rootInstance.manSetInputValueKeyboardOpen(keyboardEvent("Enter"));

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          value: "flatwhite",
        }),
      })
    );

    page.rootInstance.manSetInputValueKeyboardOpen(keyboardEvent("Escape"));

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

    page.rootInstance.manSetInputValueKeyboardOpen(keyboardEvent("Shift"));

    await page.waitForChanges();

    expect(page.rootInstance.preventIncorrectTabOrder).toBe(true);

    page.rootInstance.preventIncorrectTabOrder = false;

    await page.waitForChanges();

    page.rootInstance.manSetInputValueKeyboardOpen(keyboardEvent("Tab"));

    await page.waitForChanges();

    expect(page.rootInstance.preventIncorrectTabOrder).toBe(true);

    page.rootInstance.preventIncorrectTabOrder = false;

    page.rootInstance.isSearchBar = true;

    page.rootInstance.setHighlightedOption(4);

    page.rootInstance.manSetInputValueKeyboardOpen(keyboardEvent("Backspace"));

    await page.waitForChanges();

    expect(page.rootInstance.optionHighlighted).toBe("espresso");

    page.rootInstance.setHighlightedOption(6);

    await page.waitForChanges();

    page.rootInstance.manSetInputValueKeyboardOpen(keyboardEvent("KeyF"));

    await page.waitForChanges();

    expect(page.rootInstance.optionHighlighted).toBe("espresso");

    page.rootInstance.setHighlightedOption(2);

    await page.waitForChanges();

    page.rootInstance.manSetInputValueKeyboardOpen(keyboardEvent("Home"));

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          optionId: menuIdEspresso,
        }),
      })
    );

    await page.waitForChanges();

    page.rootInstance.manSetInputValueKeyboardOpen(keyboardEvent("End"));

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          optionId: menuIdMocha,
        }),
      })
    );
  });
  it("tests manSetInputValueKeyboardOpen function when searchable select", async () => {
    const searchableSelect = window.document.createElement(
      "IC-SELECT"
    ) as HTMLIcSelectElement;
    const input = window.document.createElement("input");

    searchableSelect.setFocus = jest.fn();
    searchableSelect.searchable = true;

    const page = await newSpecPage({
      components: [Menu, InputComponentContainer],
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

    page.rootInstance.manSetInputValueKeyboardOpen(keyboardEvent("Backspace"));

    await page.waitForChanges();

    expect(searchableSelect.setFocus).toHaveBeenCalled();
  });
  it("tests manSetInputValueKeyboardOpen function when searchbar", async () => {
    const select = window.document.createElement(
      "IC-SELECT"
    ) as HTMLIcSelectElement;
    const input = window.document.createElement("input");

    select.setFocus = jest.fn();

    const page = await newSpecPage({
      components: [Menu, InputComponentContainer],
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

    page.rootInstance.manSetInputValueKeyboardOpen(keyboardEvent("Backspace"));

    await page.waitForChanges();

    expect(select.setFocus).toHaveBeenCalled();
  });
  it("tests manSetInputValueKeyboardOpen function when default parameter passed", async () => {
    const select = window.document.createElement(
      "IC-SELECT"
    ) as HTMLIcSelectElement;
    const input = window.document.createElement("input");

    select.setFocus = jest.fn();

    const page = await newSpecPage({
      components: [Menu, InputComponentContainer],
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

    page.rootInstance.manSetInputValueKeyboardOpen(keyboardEvent("KeyR"));

    await page.waitForChanges();

    expect(page.rootInstance.value).toBe(menuOptions[0].value);
  });
  it("tests setInputValue function when default parameter passed", async () => {
    const select = window.document.createElement(
      "IC-SELECT"
    ) as HTMLIcSelectElement;
    const input = window.document.createElement("input");

    select.setFocus = jest.fn();

    const page = await newSpecPage({
      components: [Menu, InputComponentContainer],
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
  it("tests handleSubmitSearch function", async () => {
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
  it("tests handleSetFirstOption function", async () => {
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
  it("tests handleClearListener function", async () => {
    const page = await createMenu();

    const eventSpy = jest.fn();

    page.root.addEventListener("menuOptionSelect", eventSpy);

    page.rootInstance.optionHighlighted = "americano";

    await page.waitForChanges();

    await page.rootInstance.handleClearListener();

    await page.waitForChanges();

    expect(page.rootInstance.optionHighlighted).toBe("");
  });
  it("tests handleOptionClick function", async () => {
    const page = await createMenu();

    const eventSpy = jest.fn();

    page.root.addEventListener("menuOptionSelect", eventSpy);

    const el = page.rootInstance.menu.childNodes[1];

    const event = { target: el };

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
  });
  it("tests handleBlur function", async () => {
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
  it("tests handleMouseDown function", async () => {
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
  it("tests handleMenuKeyDown function", async () => {
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
  it("tests searchMode=`query", async () => {
    const page = await createMenu();

    page.rootInstance.searchMode = "query";

    await page.waitForChanges();

    page.rootInstance.handleMenuKeyDown(keyboardEvent("F"));

    expect(page.rootInstance.optionHighlighted).toBeUndefined;
  });
  it("tests handleMenuKeyDown function as searchableSelect", async () => {
    const page = await createMenu();

    page.rootInstance.activationType = "manual";
    page.rootInstance.isSearchableSelect = true;

    const eventSpy = jest.fn();

    page.root.addEventListener("menuOptionId", eventSpy);

    page.rootInstance.handleMenuKeyDown(keyboardEvent("ArrowDown"));

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          optionId: menuIdEspresso,
        }),
      })
    );
  });
  it("tests handleRetry function", async () => {
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
  it("tests handleRetryKeyDown function", async () => {
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
  it("tests autoSetValueOnMenuKeyDown - Shift - function", async () => {
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
  it("tests autoSetValueOnMenuKeyDown function", async () => {
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
  it("tests handleMenukeyUp function", async () => {
    const page = await createMenu();

    page.rootInstance.preventClickOpen = true;

    const key = keyboardEvent("Tab");

    key.shiftKey = true;

    await page.waitForChanges();

    page.rootInstance.handleMenuKeyUp(key);

    await page.waitForChanges();

    expect(page.rootInstance.preventClickOpen).toBe(false);
  });
  it("tests connectedCallback function", async () => {
    const searchBar = window.document.createElement(IcSearchBar);
    const input = window.document.createElement("input");

    const page = await newSpecPage({
      components: [Menu, InputComponentContainer],
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
  it("tests disconnectedCallback function", async () => {
    const page = await createMenu();

    await page.waitForChanges();

    expect(page.rootInstance.parentEl.__listeners[1].type).toBe(
      "icSubmitSearch"
    );

    page.rootInstance.disconnectedCallback();

    await page.waitForChanges();

    expect(page.rootInstance.parentEl.__listeners.length).toBe(0);
  });
  it("tests componentDidLoad function", async () => {
    const searchBar = window.document.createElement(
      IcSearchBar
    ) as HTMLIcSearchBarElement;
    const input = window.document.createElement("input");
    searchBar.disableFilter = true;

    const page = await newSpecPage({
      components: [Menu, InputComponentContainer],
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
  it("tests getParentEl function", async () => {
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
  it("tests handleTimeoutBlur function", async () => {
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
});
