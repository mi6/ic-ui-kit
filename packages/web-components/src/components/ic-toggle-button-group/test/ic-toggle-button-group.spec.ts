import { newSpecPage } from "@stencil/core/testing";
import { ToggleButtonGroup } from "../ic-toggle-button-group";
import { ToggleButton } from "../../ic-toggle-button/ic-toggle-button";
import { Button } from "../../ic-button/ic-button";

const keyboard = (key: string): KeyboardEvent => {
  return new KeyboardEvent("keydown", { key: key });
};

describe("ic-toggle-button-group component snapshot tests", () => {
  it("should render and update disabled", async () => {
    const page = await newSpecPage({
      components: [ToggleButtonGroup, ToggleButton, Button],
      html: `<ic-toggle-button-group select-type="single" disabled>
              <ic-toggle-button label="Toggle"></ic-toggle-button>
              <ic-toggle-button label="Toggle"></ic-toggle-button>
              <ic-toggle-button label="Toggle"></ic-toggle-button>
            </ic-toggle-button-group>`,
    });

    expect(page.root)
      .toEqualHtml(`<ic-toggle-button-group aria-label="Toggle button group" class="ic-toggle-button-group-disabled" disabled="" role="group" select-type="single" tabindex="0" variant="default">
      <mock:shadow-root>
        <slot></slot>
      </mock:shadow-root>
      <ic-toggle-button class="expand-toggle-group-child ic-toggle-button-disabled ic-toggle-button-medium" id="0" label="Toggle" tabindex="-1" variant="default">
        <mock:shadow-root>
          <ic-button aria-pressed="false" class="ic-button-disabled ic-button-size-medium ic-button-variant-secondary" exportparts="button">
            <mock:shadow-root>
              <button aria-disabled="true" aria-label="Toggle, unticked, Toggle button group" class="button" disabled="" part="button" tabindex="0" type="button">
                <slot></slot>
              </button>
            </mock:shadow-root>
            Toggle
            <slot></slot>
          </ic-button>
        </mock:shadow-root>
      </ic-toggle-button>
      <ic-toggle-button class="expand-toggle-group-child ic-toggle-button-disabled ic-toggle-button-medium" id="1" label="Toggle" tabindex="-1" variant="default">
        <mock:shadow-root>
          <ic-button aria-pressed="false" class="ic-button-disabled ic-button-size-medium ic-button-variant-secondary" exportparts="button">
            <mock:shadow-root>
              <button aria-disabled="true" aria-label="Toggle, unticked, Toggle button group" class="button" disabled="" part="button" tabindex="0" type="button">
                <slot></slot>
              </button>
            </mock:shadow-root>
            Toggle
            <slot></slot>
          </ic-button>
        </mock:shadow-root>
      </ic-toggle-button>
      <ic-toggle-button class="expand-toggle-group-child ic-toggle-button-disabled ic-toggle-button-medium" id="2" label="Toggle" tabindex="-1" variant="default">
        <mock:shadow-root>
          <ic-button aria-pressed="false" class="ic-button-disabled ic-button-size-medium ic-button-variant-secondary" exportparts="button">
            <mock:shadow-root>
              <button aria-disabled="true" aria-label="Toggle, unticked, Toggle button group" class="button" disabled="" part="button" tabindex="0" type="button">
                <slot></slot>
              </button>
            </mock:shadow-root>
            Toggle
            <slot></slot>
          </ic-button>
        </mock:shadow-root>
      </ic-toggle-button>
    </ic-toggle-button-group>`);

    page.root?.setAttribute("disabled", "false");

    await page.waitForChanges();
    expect(page.root)
      .toEqualHtml(`<ic-toggle-button-group aria-label="Toggle button group" role="group" select-type="single" tabindex="0" variant="default">
      <mock:shadow-root>
        <slot></slot>
      </mock:shadow-root>
      <ic-toggle-button class="expand-toggle-group-child ic-toggle-button-medium" id="0" label="Toggle" tabindex="-1" variant="default">
        <mock:shadow-root>
          <ic-button aria-pressed="false" class="ic-button-size-medium ic-button-variant-secondary" exportparts="button">
            <mock:shadow-root>
              <button aria-label="Toggle, unticked, Toggle button group" class="button" part="button" tabindex="0" type="button">
                <slot></slot>
              </button>
            </mock:shadow-root>
            Toggle
            <slot></slot>
          </ic-button>
        </mock:shadow-root>
      </ic-toggle-button>
      <ic-toggle-button class="expand-toggle-group-child ic-toggle-button-medium" id="1" label="Toggle" tabindex="-1" variant="default">
        <mock:shadow-root>
          <ic-button aria-pressed="false" class="ic-button-size-medium ic-button-variant-secondary" exportparts="button">
            <mock:shadow-root>
              <button aria-label="Toggle, unticked, Toggle button group" class="button" part="button" tabindex="0" type="button">
                <slot></slot>
              </button>
            </mock:shadow-root>
            Toggle
            <slot></slot>
          </ic-button>
        </mock:shadow-root>
      </ic-toggle-button>
      <ic-toggle-button class="expand-toggle-group-child ic-toggle-button-medium" id="2" label="Toggle" tabindex="-1" variant="default">
        <mock:shadow-root>
          <ic-button aria-pressed="false" class="ic-button-size-medium ic-button-variant-secondary" exportparts="button">
            <mock:shadow-root>
              <button aria-label="Toggle, unticked, Toggle button group" class="button" part="button" tabindex="0" type="button">
                <slot></slot>
              </button>
            </mock:shadow-root>
            Toggle
            <slot></slot>
          </ic-button>
        </mock:shadow-root>
      </ic-toggle-button>
    </ic-toggle-button-group>`);
  });

  it("should render and update full-width", async () => {
    const page = await newSpecPage({
      components: [ToggleButtonGroup, ToggleButton, Button],
      html: `<ic-toggle-button-group select-type="single" full-width>
              <ic-toggle-button label="Toggle"></ic-toggle-button>
              <ic-toggle-button label="Toggle"></ic-toggle-button>
            </ic-toggle-button-group>`,
    });

    expect(page.root).toMatchSnapshot();

    page.root?.setAttribute("full-width", "false");

    await page.waitForChanges();
    expect(page.root).toMatchSnapshot();
  });

  it("should render and update loading", async () => {
    const page = await newSpecPage({
      components: [ToggleButtonGroup, ToggleButton, Button],
      html: `<ic-toggle-button-group select-type="single" loading>
              <ic-toggle-button label="Toggle"></ic-toggle-button>
              <ic-toggle-button label="Toggle"></ic-toggle-button>
            </ic-toggle-button-group>`,
    });

    expect(page.root).toMatchSnapshot();

    page.root?.setAttribute("loading", "false");

    await page.waitForChanges();
    expect(page.root).toMatchSnapshot();
  });

  it("should render and update monochrome", async () => {
    const page = await newSpecPage({
      components: [ToggleButtonGroup, ToggleButton, Button],
      html: `<ic-toggle-button-group select-type="single" monochrome>
              <ic-toggle-button label="Toggle"></ic-toggle-button>
              <ic-toggle-button label="Toggle"></ic-toggle-button>
            </ic-toggle-button-group>`,
    });

    expect(page.root).toMatchSnapshot();

    page.root?.setAttribute("monochrome", "false");

    await page.waitForChanges();
    expect(page.root).toMatchSnapshot();
  });

  it("should render and update size", async () => {
    const page = await newSpecPage({
      components: [ToggleButtonGroup, ToggleButton, Button],
      html: `<ic-toggle-button-group select-type="single" size="small">
              <ic-toggle-button label="Toggle"></ic-toggle-button>
              <ic-toggle-button label="Toggle"></ic-toggle-button>
            </ic-toggle-button-group>`,
    });

    expect(page.root).toMatchSnapshot();

    page.root?.setAttribute("size", "large");

    await page.waitForChanges();
    expect(page.root).toMatchSnapshot();
  });

  it("should render and update variant", async () => {
    const page = await newSpecPage({
      components: [ToggleButtonGroup, ToggleButton, Button],
      html: `<ic-toggle-button-group select-type="single" variant="icon">
              <ic-toggle-button label="Toggle"></ic-toggle-button>
              <ic-toggle-button label="Toggle"></ic-toggle-button>
            </ic-toggle-button-group>`,
    });

    expect(page.root).toMatchSnapshot();

    page.root?.setAttribute("variant", "default");

    await page.waitForChanges();
    expect(page.root).toMatchSnapshot();
  });
});

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

    await page.rootInstance.disconnectedCallback();
  });
  it("should test that setting the theme prop on toggle-button-group sets the theme on all toggle buttons", async () => {
    const page = await newSpecPage({
      components: [ToggleButtonGroup, ToggleButton, Button],
      html: `<ic-toggle-button-group theme="dark">
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
    await page.rootInstance.watchThemeHandler("dark");
    await page.waitForChanges();

    expect(buttons[0].theme).toBe("dark");
    expect(buttons[1].theme).toBe("dark");
    expect(buttons[2].theme).toBe("dark");
  });
});
