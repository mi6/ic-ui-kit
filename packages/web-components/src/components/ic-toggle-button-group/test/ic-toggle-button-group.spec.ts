import { newSpecPage } from "@stencil/core/testing";
import { ToggleButtonGroup } from "../ic-toggle-button-group";
import { ToggleButton } from "../../ic-toggle-button/ic-toggle-button";
import { Button } from "../../ic-button/ic-button";

const keyboard = (key: string): KeyboardEvent => {
  return new KeyboardEvent("keydown", { key: key });
};

describe("ic-toggle-button-group component unit tests", () => {
  it("should getAllToggleButtons and return an array of slotted ic-toggle-buttons", async () => {
    const page = await newSpecPage({
      components: [ToggleButtonGroup, ToggleButton, Button],
      html: `<ic-toggle-button-group select-type="single" size="small">
              <ic-toggle-button label="Toggle"></ic-toggle-button>
              <ic-toggle-button label="Toggle"></ic-toggle-button>
              <ic-toggle-button label="Toggle"></ic-toggle-button>
            </ic-toggle-button-group>`,
    });

    const toggleButtonArray = page.rootInstance.getAllToggleButtons();
    await page.waitForChanges();
    expect(toggleButtonArray.length).toBe(3);
  });
  it("should test when the toggle button group receives focus, it should cause the first toggle button inside the group to get focused (when select method is 'single' and no item is already selected)", async () => {
    const page = await newSpecPage({
      components: [ToggleButtonGroup, ToggleButton, Button],
      html: `<ic-toggle-button-group select-type="single">
              <ic-toggle-button label="Toggle"></ic-toggle-button>
              <ic-toggle-button label="Toggle"></ic-toggle-button>
              <ic-toggle-button label="Toggle"></ic-toggle-button>
            </ic-toggle-button-group>`,
    });
    const toggleGroup = (await document.querySelector(
      "ic-toggle-button-group"
    )) as HTMLIcToggleButtonGroupElement;
    const buttons = await Array.from(
      toggleGroup.querySelectorAll("ic-toggle-button")
    );
    await page.waitForChanges();
    toggleGroup.focus();

    await page.waitForChanges();

    expect(buttons[0].checked).toBeFalsy();
  });
  it("should test that focusing group when an ic-toggle-button selected should not select first option", async () => {
    const page = await newSpecPage({
      components: [ToggleButtonGroup, ToggleButton, Button],
      html: `<ic-toggle-button-group select-type="single">
              <ic-toggle-button label="Toggle"></ic-toggle-button>
              <ic-toggle-button label="Toggle"></ic-toggle-button>
              <ic-toggle-button label="Toggle"></ic-toggle-button>
            </ic-toggle-button-group>`,
    });
    const toggleGroup = (await document.querySelector(
      "ic-toggle-button-group"
    )) as HTMLIcToggleButtonGroupElement;
    const buttons = await Array.from(
      toggleGroup.querySelectorAll("ic-toggle-button")
    );
    await page.waitForChanges();

    buttons[1].checked = true;

    toggleGroup.focus();

    await page.waitForChanges();

    expect(buttons[0].checked).toBeFalsy();
    expect(buttons[1].checked).toBeTruthy();
  });
  it("should test that focusing the toggle-button-group focuses, but does not not select, the first ic-toggle-button when select method is 'multi'", async () => {
    const page = await newSpecPage({
      components: [ToggleButtonGroup, ToggleButton, Button],
      html: `<ic-toggle-button-group select-type="multi">
              <ic-toggle-button label="Toggle"></ic-toggle-button>
              <ic-toggle-button label="Toggle"></ic-toggle-button>
              <ic-toggle-button label="Toggle"></ic-toggle-button>
            </ic-toggle-button-group>`,
    });

    const toggleGroup = (await document.querySelector(
      "ic-toggle-button-group"
    )) as HTMLIcToggleButtonGroupElement;
    const buttons = await Array.from(
      toggleGroup.querySelectorAll("ic-toggle-button")
    );
    await page.waitForChanges();

    toggleGroup.focus();

    await page.waitForChanges();

    expect(buttons[0].checked).toBeFalsy();
  });
  it("should test that focusing the toggle-button-group focuses, but does not not select, the first ic-toggle-button when select method is 'multi'", async () => {
    const page = await newSpecPage({
      components: [ToggleButtonGroup, ToggleButton, Button],
      html: `<ic-toggle-button-group select-type="multi">
              <ic-toggle-button label="Toggle"></ic-toggle-button>
              <ic-toggle-button label="Toggle"></ic-toggle-button>
              <ic-toggle-button label="Toggle"></ic-toggle-button>
            </ic-toggle-button-group>`,
    });

    const eventSpy = jest.fn();
    page.win.addEventListener("icChange", eventSpy);

    const toggleGroup = (await document.querySelector(
      "ic-toggle-button-group"
    )) as HTMLIcToggleButtonGroupElement;
    const buttons = await Array.from(
      toggleGroup.querySelectorAll("ic-toggle-button")
    );
    await page.waitForChanges();
    buttons[0].checked = true;
    buttons[1].checked = true;

    const customEv = new CustomEvent("icToggleChecked", {});

    page.rootInstance.selectHandler(customEv);

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
  });
  it("should test handleKeyDown function", async () => {
    const page = await newSpecPage({
      components: [ToggleButtonGroup, ToggleButton, Button],
      html: `<ic-toggle-button-group select-method="auto">
              <ic-toggle-button label="Toggle"></ic-toggle-button>
              <ic-toggle-button label="Toggle"></ic-toggle-button>
              <ic-toggle-button label="Toggle"></ic-toggle-button>
            </ic-toggle-button-group>`,
    });

    const firstButton = (await document.querySelector(
      "#0"
    )) as HTMLIcToggleButtonElement;
    const secondButton = (await document.querySelector(
      "#1"
    )) as HTMLIcToggleButtonElement;
    const thirdButton = (await document.querySelector(
      "#2"
    )) as HTMLIcToggleButtonElement;

    expect(firstButton.checked).toBeFalsy();
    await firstButton.click();
    expect(firstButton.checked).toBeTruthy();

    await page.waitForChanges();
    page.rootInstance.handleKeyDown(keyboard("ArrowLeft"));
    expect(thirdButton.checked).toBeTruthy();
    expect(firstButton.checked).toBeFalsy();

    await page.waitForChanges();
    await firstButton.click();
    page.rootInstance.handleKeyDown(keyboard("ArrowUp"));
    expect(thirdButton.checked).toBeTruthy();
    expect(firstButton.checked).toBeFalsy();

    await page.waitForChanges();
    await firstButton.click();
    page.rootInstance.handleKeyDown(keyboard("ArrowDown"));
    expect(secondButton.checked).toBeTruthy();
    expect(firstButton.checked).toBeFalsy();

    await page.waitForChanges();
    await firstButton.click();
    page.rootInstance.handleKeyDown(keyboard("ArrowLeft"));
    expect(thirdButton.checked).toBeTruthy();
    expect(firstButton.checked).toBeFalsy();

    secondButton.disabled = true;

    await page.waitForChanges();
    await firstButton.click();
    page.rootInstance.handleKeyDown(keyboard("ArrowRight"));
    expect(thirdButton.checked).toBeTruthy();
    expect(firstButton.checked).toBeFalsy();

    // for coverage
    page.rootInstance.handleKeyDown(keyboard("Tab"));
    document.dispatchEvent(keyboard("Tab"));
  });
  it("should test handleKeyDown on disabled toggle-button-group", async () => {
    const page = await newSpecPage({
      components: [ToggleButtonGroup, ToggleButton, Button],
      html: `<ic-toggle-button-group disabled>
              <ic-toggle-button label="Toggle"></ic-toggle-button>
              <ic-toggle-button label="Toggle"></ic-toggle-button>
              <ic-toggle-button label="Toggle"></ic-toggle-button>
            </ic-toggle-button-group>`,
    });

    const mockEvent = new FocusEvent("focus");

    expect(page.rootInstance.handleHostFocus(mockEvent)).toBeNull();
  });
});
