import { newSpecPage } from "@stencil/core/testing";
import { MenuItem } from "../../../ic-menu-item/ic-menu-item";
import { PopoverMenu } from "../../ic-popover-menu";
import { waitForTimeout } from "../../../../testspec.setup";
import { MenuGroup } from "../../../ic-menu-group/ic-menu-group";
import { Dialog } from "../../../ic-dialog/ic-dialog";

describe("ic-popover-menu", () => {
  it("should render with anchor", async () => {
    const page = await newSpecPage({
      components: [PopoverMenu, MenuItem],
      html: `<ic-button id="anchorEl"></ic-button><ic-popover-menu anchor="anchorEl" aria-label="popover-menu"><ic-menu-item label="Button 1"></ic-menu-item></ic-popover-menu>`,
    });

    expect(page.root).toMatchSnapshot("should render with anchor");
  });

  it("should render when anchor starts with #", async () => {
    const page = await newSpecPage({
      components: [PopoverMenu, MenuItem],
      html: `<ic-button id="anchorEl"></ic-button><ic-popover-menu anchor="#anchorEl" aria-label="popover-menu"><ic-menu-item label="Button 1"></ic-menu-item></ic-popover-menu>`,
    });

    expect(page.root).toMatchSnapshot(
      "should render when target starts with #"
    );
  });

  it("should render a menu item and menu group", async () => {
    const page = await newSpecPage({
      components: [PopoverMenu, MenuItem, MenuGroup],
      html: `<ic-button id="anchorEl"></ic-button>
      <ic-popover-menu anchor="#anchorEl" aria-label="popover-menu">
      <ic-menu-item label="Button 1"></ic-menu-item>
      <ic-menu-group label="Button group">
      <ic-menu-item label="Group button 1" variant="destructive"></ic-menu-item>
      <ic-menu-item label="Group button 2"></ic-menu-item>
      </ic-menu-group>
      </ic-popover-menu>
      `,
    });

    expect(page.root).toMatchSnapshot(
      "should render a menu item and menu group"
    );
  });

  it("should render a back button when submenu-id is set", async () => {
    const page = await newSpecPage({
      components: [PopoverMenu, MenuItem],
      html: `<ic-button id="anchorEl"></ic-button>
      <ic-popover-menu anchor="#anchorEl" aria-label="popover-menu" submenu-id="submenu">
      <ic-menu-item label="Button 1"></ic-menu-item>
      <ic-menu-item label="Button 2"></ic-menu-item>
      </ic-popover-menu>`,
    });

    expect(page.root).toMatchSnapshot(
      "should render a back button when submenu-id is set"
    );
  });

  it("should render on a dialog", async () => {
    const page = await newSpecPage({
      components: [PopoverMenu, MenuItem, Dialog],
      html: `<ic-dialog>
      <ic-button id="anchorEl"></ic-button>
      <ic-popover-menu anchor="#anchorEl" aria-label="popover-menu" open="true">
      <ic-menu-item label="Button 1"></ic-menu-item>
      <ic-menu-item label="Button 2"></ic-menu-item>
      </ic-popover-menu>
      </ic-dialog>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should set openingFromChild to true when openFromChild method is called", async () => {
    const page = await newSpecPage({
      components: [PopoverMenu, MenuItem],
      html: `<ic-button id="anchorEl"></ic-button>
      <ic-popover-menu anchor="#anchorEl" aria-label="popover-menu" submenu-id="submenu">
      <ic-menu-item label="Button 1"></ic-menu-item>
      <ic-menu-item label="Button 2"></ic-menu-item>
      </ic-popover-menu>`,
    });

    await page.root?.openFromChild();
    await page.waitForChanges();
    expect(page.rootInstance.openingFromChild).toBeTruthy();
    expect(page.rootInstance.open).toBeTruthy();

    await waitForTimeout(1000);

    expect(page.rootInstance.openingFromChild).toBeFalsy();
  });

  it("should set openingFromParent to true when openFromParent method is called", async () => {
    const page = await newSpecPage({
      components: [PopoverMenu, MenuItem],
      html: `<ic-button id="anchorEl"></ic-button>
      <ic-popover-menu anchor="#anchorEl" aria-label="popover-menu">
      <ic-menu-item label="Button 1" submenu-trigger-for="submenu" id="trigger-button"></ic-menu-item>
      <ic-menu-item label="Button 2"></ic-menu-item>
      </ic-popover-menu>
      <ic-popover-menu submenu-id="submenu">
      <ic-menu-item label="Button 1"></ic-menu-item>
      <ic-menu-item label="Button 2"></ic-menu-item>
      </ic-popover-menu>`,
    });

    await page.root?.openFromParent();
    await page.waitForChanges();
    expect(page.rootInstance.openingFromParent).toBeTruthy();
    expect(page.rootInstance.open).toBeTruthy();

    await waitForTimeout(1000);

    expect(page.rootInstance.openingFromParent).toBeFalsy();
  });

  it("should add focusable menu items to the list of focusable elements", async () => {
    const page = await newSpecPage({
      components: [PopoverMenu, MenuItem],
      html: `<ic-button id="anchorEl"></ic-button>
      <ic-popover-menu anchor="#anchorEl" aria-label="popover-menu">
      <ic-menu-item label="Button 1"></ic-menu-item>
      <ic-menu-item label="Button 2"></ic-menu-item>
      </ic-popover-menu>`,
    });

    page.rootInstance.popoverMenuEls = [];

    const menuItems = document.querySelectorAll("ic-menu-item");

    await page.rootInstance.addMenuItems(menuItems);
    await page.waitForChanges();

    expect(page.rootInstance.popoverMenuEls).toEqual(menuItems);
  });

  it("should get the next item to select going up and down", async () => {
    const page = await newSpecPage({
      components: [PopoverMenu, MenuItem],
      html: `<ic-button id="anchorEl"></ic-button>
      <ic-popover-menu anchor="#anchorEl" aria-label="popover-menu">
      <ic-menu-item label="Button 1"></ic-menu-item>
      <ic-menu-item label="Button 2"></ic-menu-item>
      </ic-popover-menu>`,
    });

    //populating popoverEls before calling getNextItemToSelect
    const menuItems = document.querySelectorAll("ic-menu-item");
    await page.rootInstance.addMenuItems(menuItems);
    await page.waitForChanges();

    const nextItemCalc = page.rootInstance.getNextItemToSelect(0, true);

    await page.waitForChanges();
    expect(nextItemCalc).toBe(1);

    const prevItemCalc = page.rootInstance.getNextItemToSelect(
      nextItemCalc,
      false
    );

    await page.waitForChanges();
    expect(prevItemCalc).toBe(0);
  });

  it("should get the next item to select as last item if next item < 0 and select first item if next item > items length", async () => {
    const page = await newSpecPage({
      components: [PopoverMenu, MenuItem],
      html: `<ic-button id="anchorEl"></ic-button>
      <ic-popover-menu anchor="#anchorEl" aria-label="popover-menu">
      <ic-menu-item label="Button 1"></ic-menu-item>
      <ic-menu-item label="Button 2"></ic-menu-item>
      <ic-menu-item label="Button 3"></ic-menu-item>
      </ic-popover-menu>`,
    });

    page.rootInstance.popoverMenuEls = [];

    //populating popoverEls before calling getNextItemToSelect
    const menuItems = document.querySelectorAll("ic-menu-item");
    await page.rootInstance.addMenuItems(menuItems);
    await page.waitForChanges();

    const lastItemCalc = page.rootInstance.getNextItemToSelect(0, false);

    await page.waitForChanges();
    expect(lastItemCalc).toBe(2);

    const firstItemCalc = page.rootInstance.getNextItemToSelect(2, true);

    await page.waitForChanges();
    expect(firstItemCalc).toBe(0);
  });

  it("should console error if an anchor can't be found", async () => {
    console.error = jest.fn();
    const page = await newSpecPage({
      components: [PopoverMenu, MenuItem],
      html: `<ic-button id="anchorEl"></ic-button><ic-popover-menu anchor="wrongAnchor" aria-label="popover-menu"><ic-menu-item label="Button 1"></ic-menu-item></ic-popover-menu>`,
    });
    await page.waitForChanges();

    expect(console.error).toHaveBeenCalledWith(
      "Popover anchor element 'wrongAnchor' not found"
    );
  });

  it("should console error if no anchor is specified for an original popover menu", async () => {
    console.error = jest.fn();
    const page = await newSpecPage({
      components: [PopoverMenu, MenuItem],
      html: `<ic-button id="anchorEl"></ic-button><ic-popover-menu aria-label="popover-menu"><ic-menu-item label="Button 1"></ic-menu-item></ic-popover-menu>`,
    });
    await page.waitForChanges();

    expect(console.error).toHaveBeenCalledWith(
      "No anchor specified for popover component"
    );
  });

  it("should set focus on ArrowDown", async () => {
    const page = await newSpecPage({
      components: [PopoverMenu, MenuItem],
      html: `<ic-button id="anchorEl"></ic-button>
      <ic-popover-menu anchor="#anchorEl" aria-label="popover-menu">
      <ic-menu-item label="Button 1"></ic-menu-item>
      <ic-menu-item label="Button 2"></ic-menu-item>
      <ic-menu-item label="Button 3"></ic-menu-item>
      </ic-popover-menu>`,
    });

    jest.spyOn(page.rootInstance, "setButtonFocus").mockImplementation();

    await page.rootInstance.handleKeyDown({
      key: "ArrowDown",
      preventDefault: (): null => null,
    });
    await page.waitForChanges();

    expect(page.rootInstance.setButtonFocus).toHaveBeenCalled();
  });

  it("should set focus on ArrowUp", async () => {
    const page = await newSpecPage({
      components: [PopoverMenu, MenuItem],
      html: `<ic-button id="anchorEl"></ic-button>
      <ic-popover-menu anchor="#anchorEl" aria-label="popover-menu">
      <ic-menu-item label="Button 1"></ic-menu-item>
      <ic-menu-item label="Button 2"></ic-menu-item>
      <ic-menu-item label="Button 3"></ic-menu-item>
      </ic-popover-menu>`,
    });

    jest.spyOn(page.rootInstance, "setButtonFocus").mockImplementation();

    await page.rootInstance.handleKeyDown({
      key: "ArrowUp",
      preventDefault: (): null => null,
    });
    await page.waitForChanges();

    expect(page.rootInstance.setButtonFocus).toHaveBeenCalled();
  });

  it("should set focus on first element for home key", async () => {
    const page = await newSpecPage({
      components: [PopoverMenu, MenuItem],
      html: `<ic-button id="anchorEl"></ic-button>
      <ic-popover-menu anchor="#anchorEl" aria-label="popover-menu">
      <ic-menu-item label="Button 1"></ic-menu-item>
      <ic-menu-item label="Button 2"></ic-menu-item>
      <ic-menu-item label="Button 3"></ic-menu-item>
      </ic-popover-menu>`,
    });

    jest.spyOn(page.rootInstance, "setButtonFocus").mockImplementation();

    await page.rootInstance.handleKeyDown({
      key: "Home",
      preventDefault: (): null => null,
    });
    await page.waitForChanges();

    expect(page.rootInstance.currentFocus).toBe(0);
    expect(page.rootInstance.setButtonFocus).toHaveBeenCalled();
  });

  it("should set focus on last element for end key", async () => {
    const page = await newSpecPage({
      components: [PopoverMenu, MenuItem],
      html: `<ic-button id="anchorEl"></ic-button>
      <ic-popover-menu anchor="#anchorEl" aria-label="popover-menu">
      <ic-menu-item label="Button 1"></ic-menu-item>
      <ic-menu-item label="Button 2"></ic-menu-item>
      <ic-menu-item label="Button 3"></ic-menu-item>
      </ic-popover-menu>`,
    });

    jest.spyOn(page.rootInstance, "setButtonFocus").mockImplementation();

    page.rootInstance.popoverMenuEls = [];
    //populating popoverEls before handleKeyDown
    const menuItems = document.querySelectorAll("ic-menu-item");
    await page.rootInstance.addMenuItems(menuItems);
    await page.waitForChanges();

    await page.rootInstance.handleKeyDown({
      key: "End",
      preventDefault: (): null => null,
    });
    await page.waitForChanges();

    expect(page.rootInstance.currentFocus).toBe(2);
    expect(page.rootInstance.setButtonFocus).toHaveBeenCalled();
  });

  it("should set close menu on Escape", async () => {
    const page = await newSpecPage({
      components: [PopoverMenu, MenuItem],
      html: `<ic-button id="anchorEl"></ic-button>
      <ic-popover-menu anchor="#anchorEl" aria-label="popover-menu">
      <ic-menu-item label="Button 1"></ic-menu-item>
      <ic-menu-item label="Button 2"></ic-menu-item>
      </ic-popover-menu>`,
    });

    jest.spyOn(page.rootInstance, "closeMenu").mockImplementation();

    // Menu should be open before it can be closed
    document.querySelector("ic-popover-menu")?.setAttribute("open", "true");
    await page.waitForChanges();

    await page.rootInstance.handleKeyDown({
      key: "Escape",
      preventDefault: (): null => null,
    });
    await page.waitForChanges();
    expect(page.rootInstance.closeMenu).toHaveBeenCalled();
    //TODO: When we move to cypress, make sure the AnchorEl is focused (backing out of menu should return focus to button)
  });

  it("should set close menu on Tab", async () => {
    const page = await newSpecPage({
      components: [PopoverMenu, MenuItem],
      html: `<ic-button id="anchorEl"></ic-button>
      <ic-popover-menu anchor="#anchorEl" aria-label="popover-menu">
      <ic-menu-item label="Button 1"></ic-menu-item>
      <ic-menu-item label="Button 2"></ic-menu-item>
      </ic-popover-menu>`,
    });

    jest.spyOn(page.rootInstance, "closeMenu").mockImplementation();

    // Menu should be open before it can be closed
    document.querySelector("ic-popover-menu")?.setAttribute("open", "true");

    await page.waitForChanges();

    await page.rootInstance.handleKeyDown({
      key: "Tab",
      preventDefault: (): null => null,
    });
    await page.waitForChanges();
    expect(page.rootInstance.closeMenu).toHaveBeenCalled();
    //TODO: When we move to cypress, make sure that an element after the AnchorEl is focused (tabbing out of menu onto next element)
  });

  it("should set the current popover's open prop to false when submenu is triggered", async () => {
    const page = await newSpecPage({
      components: [PopoverMenu, MenuItem],
      html: `<ic-button id="anchorEl"></ic-button>
      <ic-popover-menu anchor="#anchorEl" aria-label="popover-menu" id="initial-popover">
      <ic-menu-item label="Button 1" submenu-trigger-for="submenu" id="trigger-button"></ic-menu-item>
      <ic-menu-item label="Button 2"></ic-menu-item>
      </ic-popover-menu>
      <ic-popover-menu submenu-id="submenu">
      <ic-menu-item label="Button 1"></ic-menu-item>
      <ic-menu-item label="Button 2"></ic-menu-item>
      </ic-popover-menu>`,
    });

    const trigger = document.querySelector("#trigger-button");

    const event = new Event("click", {
      bubbles: true,
      cancelable: true,
    });

    expect(page.rootInstance.open).toBeFalsy();

    // Make sure the event has a target for handleSubmenuChange
    trigger?.dispatchEvent(event);

    page.rootInstance.handleSubmenuChange(event);
    await page.waitForChanges();
    await waitForTimeout(1000);
    expect(page.rootInstance.open).toBeFalsy();
  });

  it("should set the current popover's open prop to false when submenu is triggered", async () => {
    const page = await newSpecPage({
      components: [PopoverMenu, MenuItem],
      html: `<ic-button id="anchorEl"></ic-button>
      <ic-popover-menu anchor="#anchorEl" aria-label="popover-menu" id="initial-popover">
      <ic-menu-item label="Button 1" id="trigger-button"></ic-menu-item>
      <ic-menu-item label="Button 2"></ic-menu-item>
      </ic-popover-menu>`,
    });

    const trigger = document.querySelector("#trigger-button");

    const event = new CustomEvent("click", {
      bubbles: true,
      cancelable: true,
      detail: { hasSubmenu: false, label: "Button 1" },
    });

    expect(page.rootInstance.open).toBeFalsy();

    // Make sure the event has a target for handleMenuItemClick
    trigger?.dispatchEvent(event);

    page.rootInstance.handleMenuItemClick(event);
    await page.waitForChanges();
    expect(page.rootInstance.open).toBeFalsy();
  });

  it("should close menu when an element that isn't in the popover is clicked", async () => {
    const page = await newSpecPage({
      components: [PopoverMenu, MenuItem],
      html: `<ic-button id="anchorEl"></ic-button>
      <ic-popover-menu anchor="#anchorEl" aria-label="popover-menu" id="initial-popover" open="true">
      <ic-menu-item label="Button 1" submenu-trigger-for="submenu" id="trigger-button"></ic-menu-item>
      <ic-menu-item label="Button 2"></ic-menu-item>
      </ic-popover-menu>
      <ic-popover-menu submenu-id="submenu">
      <ic-menu-item label="Button 1"></ic-menu-item>
      <ic-menu-item label="Button 2"></ic-menu-item>
      </ic-popover-menu>`,
    });

    jest.spyOn(page.rootInstance, "closeMenu").mockImplementation();

    const notPopover = document.body;

    const event = new Event("click", {
      bubbles: true,
      cancelable: true,
    });

    // Make sure the event has a target for handleSubmenuChange
    notPopover.dispatchEvent(event);

    await page.rootInstance.handleClick(event);
    await page.waitForChanges();
    expect(page.rootInstance.closeMenu).toHaveBeenCalled();
    //TODO: When we move to cypress, make sure the AnchorEl is not focused (clicking off popover should focus whatever has been clicked instead)
  });

  it("should close submenu when an element that isn't in the popover is clicked", async () => {
    const page = await newSpecPage({
      components: [PopoverMenu, MenuItem],
      html: `<ic-button id="anchorEl"></ic-button>
      <ic-popover-menu anchor="#anchorEl" aria-label="popover-menu" id="initial-popover">
      <ic-menu-item label="Button 1" submenu-trigger-for="submenu" id="trigger-button"></ic-menu-item>
      <ic-menu-item label="Button 2"></ic-menu-item>
      </ic-popover-menu>
      <ic-popover-menu submenu-id="submenu">
      <ic-menu-item label="Button 1"></ic-menu-item>
      <ic-menu-item label="Button 2"></ic-menu-item>
      </ic-popover-menu>`,
    });

    const trigger = document.querySelector("#trigger-button");

    const event = new Event("click", {
      bubbles: true,
      cancelable: true,
    });

    trigger?.dispatchEvent(event);
    await page.waitForChanges();

    page.rootInstance.handleSubmenuChange(event);
    await page.waitForChanges();

    await waitForTimeout(1000);

    const submenu = document.querySelectorAll("ic-popover-menu")[1];

    expect(submenu.open).toBeTruthy();

    const notPopover = document.body;
    notPopover?.dispatchEvent(event);
    await page.waitForChanges();

    expect(submenu.open).toBeFalsy();
  });

  it("should set current popover's open prop to false when back button is clicked", async () => {
    const page = await newSpecPage({
      components: [PopoverMenu, MenuItem],
      html: `<ic-button id="anchorEl"></ic-button>
      <ic-popover-menu anchor="#anchorEl" aria-label="popover-menu" submenu-id="submenu">
      <ic-menu-item label="Button 1"></ic-menu-item>
      <ic-menu-item label="Button 2"></ic-menu-item>
      </ic-popover-menu>`,
    });

    const back = page.root?.shadowRoot?.querySelector(
      ".ic-popover-submenu-back-button"
    );

    const event = new Event("click", {
      bubbles: true,
      cancelable: true,
    });

    back?.dispatchEvent(event);
    await page.waitForChanges();
    expect(page.rootInstance.open).toBeFalsy();
  });

  it("should set open to false when menu is closed", async () => {
    const page = await newSpecPage({
      components: [PopoverMenu, MenuItem],
      html: `<ic-button id="anchorEl"></ic-button>
      <ic-popover-menu anchor="#anchorEl" aria-label="popover-menu" open="true">
      <ic-menu-item label="Button 1"></ic-menu-item>
      <ic-menu-item label="Button 2"></ic-menu-item>
      </ic-popover-menu>`,
    });

    expect(page.rootInstance.open).toBeTruthy();

    page.rootInstance.closeMenu();
    await page.waitForChanges();
    expect(page.rootInstance.open).toBeFalsy();
  });
});
