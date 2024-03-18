import { newSpecPage } from "@stencil/core/testing";
import { ToggleButtonGroup } from "../ic-toggle-button-group";
import { ToggleButton } from "../../ic-toggle-button/ic-toggle-button";
import { Button } from "../../ic-button/ic-button";

const keyboard = (key: string): KeyboardEvent => {
  return new KeyboardEvent("keydown", { key: key });
};

describe("ic-toggle-button-group component unit tests", () => {
  it("getAllToggleButtons should return an array of slotted ic-toggle-buttons", async () => {
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
  it("focusing group should focus the first ic-toggle-button when select method is 'single' and no other selection made", async () => {
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

    expect(buttons[0].toggleChecked).toBeFalsy();
  });
  it("focusing group when an ic-toggle-button selected should not select first option", async () => {
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

    buttons[1].toggleChecked = true;

    toggleGroup.focus();

    await page.waitForChanges();

    expect(buttons[0].toggleChecked).toBeFalsy();
    expect(buttons[1].toggleChecked).toBeTruthy();
  });
  it("focusing the toggle-button-group should focus but not select the first ic-toggle-button when select method is 'multi'", async () => {
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

    expect(buttons[0].toggleChecked).toBeFalsy();
  });
  it("focusing the toggle-button-group should focus but not select the first ic-toggle-button when select method is 'multi'", async () => {
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
    buttons[0].toggleChecked = true;
    buttons[1].toggleChecked = true;

    const customEv = new CustomEvent("icToggleChecked", {});

    page.rootInstance.selectHandler(customEv);

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
  });
  it("handleKeyDown", async () => {
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

    expect(firstButton.toggleChecked).toBeFalsy();
    await firstButton.click();
    expect(firstButton.toggleChecked).toBeTruthy();

    await page.waitForChanges();
    page.rootInstance.handleKeyDown(keyboard("ArrowLeft"));
    expect(thirdButton.toggleChecked).toBeTruthy();
    expect(firstButton.toggleChecked).toBeFalsy();

    await page.waitForChanges();
    await firstButton.click();
    page.rootInstance.handleKeyDown(keyboard("ArrowUp"));
    expect(thirdButton.toggleChecked).toBeTruthy();
    expect(firstButton.toggleChecked).toBeFalsy();

    await page.waitForChanges();
    await firstButton.click();
    page.rootInstance.handleKeyDown(keyboard("ArrowDown"));
    expect(secondButton.toggleChecked).toBeTruthy();
    expect(firstButton.toggleChecked).toBeFalsy();

    await page.waitForChanges();
    await firstButton.click();
    page.rootInstance.handleKeyDown(keyboard("ArrowLeft"));
    expect(thirdButton.toggleChecked).toBeTruthy();
    expect(firstButton.toggleChecked).toBeFalsy();

    secondButton.disabled = true;

    await page.waitForChanges();
    await firstButton.click();
    page.rootInstance.handleKeyDown(keyboard("ArrowRight"));
    expect(thirdButton.toggleChecked).toBeTruthy();
    expect(firstButton.toggleChecked).toBeFalsy();

    // for coverage
    page.rootInstance.handleKeyDown(keyboard("Tab"));
    document.dispatchEvent(keyboard("Tab"));
  });
  it("handleKeyDown", async () => {
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
