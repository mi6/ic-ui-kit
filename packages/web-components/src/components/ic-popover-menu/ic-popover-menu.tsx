import {
  Component,
  Element,
  Host,
  h,
  Prop,
  Listen,
  Watch,
  State,
  Method,
} from "@stencil/core";
import { getSlotElements } from "../../utils/helpers";
import { createPopper } from "@popperjs/core";
import { IcPopoverMenuClickEnum } from "./ic-popover-menu.types";

@Component({
  tag: "ic-popover-menu",
  styleUrl: "ic-popover-menu.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class PopoverMenu {
  private ARIA_LABEL: string = "aria-label";
  private anchorEl: HTMLElement;
  private backButton: HTMLIcMenuItemElement;
  private currentFocus: number;
  private popoverMenuEls: HTMLIcMenuItemElement[] = [];

  @Element() host: HTMLIcPopoverMenuElement;

  /**
   * The ID of the element the popover menu will anchor itself to. This is required unless the popover is a submenu.
   */
  @Prop() anchor: string;

  /**
   * The ID of the element that can open the popover menu if mouseAnchor is set to `true`.
   * If `null`, then use the root element.
   */
  @Prop() clickEventEle: string = document.documentElement.id;

  /**
   *  Absolute screen X co-ordinate for popover menu render position.
   */
  @Prop() renderX: number = null;
  /**
   *  Absolute screen Y co-ordinate for popover menu render position.
   */
  @Prop() renderY: number = null;

  /**
   * The MouseEvent.button values that can trigger an ic-popover-menu open.
   * Defaults to `IcPopoverMenuClickEnum.Right` only.
   */
  @Prop() mouseEventOpenButtonPressVals: IcPopoverMenuClickEnum[] = [
    IcPopoverMenuClickEnum.Right,
  ];

  /**
   * The MouseEvent.button values that can trigger an ic-popover-menu close.
   * Defaults to `IcPopoverMenuClickEnum.Left` only.
   */
  @Prop() mouseEventCloseButtonPressVals: IcPopoverMenuClickEnum[] = [
    IcPopoverMenuClickEnum.Left,
  ];

  /**
   * If `true`, the popover menu will be displayed.
   */
  @Prop({ reflect: true, mutable: true }) open: boolean = undefined;

  /**
   * If `true`, the ic-popover-menu will open when a MouseEvent button press occurs.
   * If the "anchor" property element id is defined, this will only happen when clicking
   * within the bounds of the anchor element.
   * ButtonPressVals can be used to define which mouse buttons
   * can trigger this behaviour: by default this is a left click.
   */
  @Prop({ reflect: true }) openOnMouseEventButtonPress: boolean = false;

  /**
   * @internal The parent popover menu of a child popover menu.
   */
  @Prop() parentLabel?: string;

  /**
   * @internal The parent popover menu of a child popover menu.
   */
  @Prop() parentPopover?: HTMLIcPopoverMenuElement;

  /**
   * The unique identifier for a popover submenu.
   */
  @Prop() submenuId?: string;

  /**
   * @internal The level of menu being displayed.
   */
  @Prop() submenuLevel: number = 1;

  @State() openingFromChild: boolean = false;

  @State() openingFromParent: boolean = false;

  @Listen("handleMenuItemClick")
  handleMenuItemClick(ev: CustomEvent): void {
    if (!ev.detail.hasSubMenu && ev.detail.label !== "Back") {
      this.closeMenu();
    }
  }

  // This is listening for the event emitted when a menu item is acting as a trigger button
  @Listen("triggerPopoverMenuInstance", { capture: true })
  handleSubmenuChange(ev: Event): void {
    // Finds the trigger menu item that has emitted the event
    const target = ev.target as HTMLIcMenuItemElement;
    this.open = false;

    // Find the popover menu that the menu item triggers (i.e. submenu-trigger-for === submenu-id).
    const childEl = document.querySelector(
      `ic-popover-menu[submenu-id=${target.submenuTriggerFor}]`
    ) as HTMLIcPopoverMenuElement;
    // Set the parent popover menu of the submenu and open the submenu
    childEl.parentPopover = this.host;
    childEl.anchor = this.anchor;
    childEl.ariaLabel = this.host.getAttribute(this.ARIA_LABEL);
    childEl.openFromParent(this.host.renderX, this.host.renderY);
    childEl.submenuLevel = this.submenuLevel + 1;
    // Set the label in the submenu using the label of the menu item that has emitted the event
    childEl.parentLabel = target.label;
  }

  @Watch("open")
  watchOpenHandler(): void {
    if (this.open) {
      if (
        this.parentPopover !== undefined &&
        !this.popoverMenuEls.some((menuItem) => menuItem.id)
      ) {
        this.popoverMenuEls.unshift(this.backButton);
      }

      this.currentFocus = this.submenuId !== undefined ? 1 : 0;
      // Needed so that anchorEl isn't always focused
      setTimeout(this.setButtonFocus, 50);
    }
  }

  @Listen("click", { target: "document" })
  handleClick(ev: MouseEvent): void {
    ev.preventDefault();
    if (
      this.open &&
      this.isNotPopoverMenuEl(ev) &&
      this.mouseEventCloseButtonPressVals.includes(
        ev.button as IcPopoverMenuClickEnum
      )
    ) {
      // If menu is open and the next click on the document is
      // not a popover El, close the popover
      this.closeMenu();
    } else if (
      this.openOnMouseEventButtonPress &&
      !this.open &&
      this.isClickEventEle(ev) &&
      this.mouseEventOpenButtonPressVals.includes(
        ev.button as IcPopoverMenuClickEnum
      )
    ) {
      // If the menu is not open and the next click on document is
      // the specified click element (root element by default), then open the popover
      this.renderX = ev.clientX;
      this.renderY = ev.clientY;
      this.open = true;
    }
  }

  @Listen("contextmenu", { target: "document" })
  handleContextMenu(ev: MouseEvent): void {
    if (this.isClickEventEle(ev)) {
      ev.preventDefault();
      if (!this.open) {
        const new_ev = new MouseEvent("click", {
          bubbles: true,
          button: ev.button ?? IcPopoverMenuClickEnum.Right.valueOf(), // default if we can't propagate existing mouse click id
          clientX: ev.clientX,
          clientY: ev.clientY,
        });
        ev.target.dispatchEvent(new_ev);
      }
    }
  }

  // Manages the keyboard navigation in the popover menu
  @Listen("keydown", { target: "document" })
  handleKeyDown(ev: KeyboardEvent): void {
    switch (ev.key) {
      case "ArrowDown":
        ev.preventDefault();
        this.currentFocus = this.getNextItemToSelect(this.currentFocus, true);
        this.setButtonFocus();
        break;
      case "ArrowUp":
        ev.preventDefault();
        this.currentFocus = this.getNextItemToSelect(this.currentFocus, false);
        this.setButtonFocus();
        break;
      case "Home":
        //Sets home focus as first element, or back button
        this.currentFocus = 0;
        this.setButtonFocus();
        break;
      case "End":
        //Sets end focus as last element
        this.currentFocus = this.popoverMenuEls.length - 1;
        this.setButtonFocus();
        break;
      case "Escape":
      case "Tab":
        if (this.open) {
          this.closeMenu();
          this.host.blur();
        }
        break;
    }
  }

  /**
   * @internal Opens the menu from the child menu.
   */
  @Method()
  async openFromChild(
    renderX: number = null,
    renderY: number = null
  ): Promise<void> {
    this.open = true;
    this.openingFromChild = true;
    this.renderX = renderX;
    this.renderY = renderY;
    setTimeout(() => (this.openingFromChild = false), 1000);
  }

  /**
   * @internal Opens the menu from the parent menu.
   */
  @Method()
  async openFromParent(
    renderX: number = null,
    renderY: number = null
  ): Promise<void> {
    this.open = true;
    this.openingFromParent = true;
    this.renderX = renderX;
    this.renderY = renderY;
    setTimeout(() => (this.openingFromParent = false), 1000);
  }

  componentDidLoad(): void {
    const slotWrapper = this.host.shadowRoot.querySelector("ul.button");
    const popoverMenuElements = getSlotElements(slotWrapper);

    if (popoverMenuElements !== null) {
      this.addMenuItems(popoverMenuElements);
    }

    if (
      this.submenuId === undefined &&
      this.host.getAttribute(this.ARIA_LABEL) === null
    ) {
      console.error(
        `No aria-label specified for popover menu component - aria-label required`
      );
    }
  }

  componentDidRender(): void {
    if (this.open) {
      let anchorElRef;
      if (this.renderX != null && this.renderY != null) {
        // use mouse pos
        anchorElRef = {
          getBoundingClientRect: this.generateBoundingClientRectForMouse(),
        };
      } else {
        // use anchorEle
        anchorElRef = this.anchorEl;
      }
      createPopper(anchorElRef, this.host, {
        placement: "bottom-start",
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 4],
            },
          },
        ],
      });
    } else {
      // set render pos to null on close so .open does not use the last MouseEvent pos
      this.renderX = null;
      this.renderY = null;
    }
  }

  componentWillRender(): void {
    this.anchorEl = this.findAnchorEl(this.anchor);
  }

  private addMenuItems = (elements: Element[] | NodeListOf<ChildNode>) => {
    for (let i = 0; i < elements.length; i++) {
      const el = elements[i] as HTMLIcMenuItemElement;
      if (el.tagName === "IC-MENU-ITEM") {
        this.popoverMenuEls.push(el);
      } else if (el.tagName === "IC-MENU-GROUP") {
        const groupSlotWrapper = el.shadowRoot.querySelector("ul");
        const menuGroupElements = getSlotElements(groupSlotWrapper);

        this.addMenuItems(menuGroupElements);
      }
    }
  };

  private closeMenu = () => {
    this.open = false;
    this.anchorEl?.focus();
  };

  // Checks that the popover menu has an anchor
  private findAnchorEl = (anchor: string): HTMLElement => {
    let anchorElement: HTMLElement = null;
    if (anchor === null || anchor === undefined || anchor.length === 0) {
      this.submenuId === undefined &&
        console.error("No anchor specified for popover component");
    } else {
      anchorElement = document.querySelector(
        anchor.indexOf("#") === 0 ? anchor : "#" + anchor
      );
      if (anchorElement === null) {
        console.error(`Popover anchor element '${anchor}' not found`);
      }
    }
    return anchorElement;
  };

  private generateBoundingClientRectForMouse = (): (() => DOMRect) => {
    return () => ({
      width: 0,
      height: 0,
      top: this.renderY,
      right: this.renderX,
      bottom: this.renderY,
      left: this.renderX,
      x: this.renderX,
      y: this.renderY,
      toJSON: (): string | null => null,
    });
  };

  private getMenuAriaLabel = (): string => {
    const ariaLabel = this.host.getAttribute(this.ARIA_LABEL);

    if (this.submenuId !== undefined) {
      return `${ariaLabel}, within nested level ${this.submenuLevel} ${this.parentLabel} submenu,`;
    } else {
      return ariaLabel;
    }
  };

  private getNextItemToSelect = (
    currentItem: number,
    movingDown: boolean
  ): number => {
    const numButtons = this.popoverMenuEls.length - 1;

    if (currentItem < 1) {
      currentItem = 0;
    }

    let nextItem = movingDown ? currentItem + 1 : currentItem - 1;

    // Check if wrap around necessary
    if (nextItem < 0) {
      nextItem = numButtons;
    } else if (nextItem > numButtons) {
      nextItem = 0;
    }

    return nextItem;
  };

  private handleBackButtonClick = (): void => {
    this.parentPopover.openFromChild(this.renderX, this.renderY);
    this.open = false;
  };

  private isClickEventEle = (ev: MouseEvent) => {
    const target = ev.target as HTMLElement;
    const clickEventRect: DOMRect = this.findAnchorEl(
      this.clickEventEle
    )?.getBoundingClientRect?.();
    if (clickEventRect == null) {
      return false;
    } else {
      return (
        target.id === this.clickEventEle ||
        (ev.clientX &&
          ev.clientX > clickEventRect.left &&
          ev.clientX < clickEventRect.right &&
          ev.clientY &&
          ev.clientY > clickEventRect.top &&
          ev.clientY < clickEventRect.bottom)
      );
    }
  };

  private isNotPopoverMenuEl = (ev: Event) => {
    const target = ev.target as HTMLElement;
    return (
      target.id !== this.anchor &&
      target.tagName !== "IC-MENU-ITEM" &&
      target.tagName !== "IC-MENU-GROUP" &&
      target.tagName !== "IC-POPOVER-MENU"
    );
  };

  private setButtonFocus = () => {
    this.popoverMenuEls[this.currentFocus]?.focus();
  };

  render() {
    return (
      <Host class={{ open: this.open }}>
        <div
          id={
            this.parentPopover === undefined
              ? `ic-popover-submenu-${this.submenuId}`
              : ""
          }
          class={{
            menu: true,
          }}
          tabindex={open ? "0" : "-1"}
        >
          <div
            class={{
              "opening-from-parent": this.openingFromParent,
              "opening-from-child": this.openingFromChild,
            }}
          >
            {this.submenuId !== undefined && (
              <div>
                <ic-menu-item
                  class="ic-popover-submenu-back-button"
                  ref={(el) => (this.backButton = el)}
                  label="Back"
                  onClick={this.handleBackButtonClick}
                  id={`ic-popover-submenu-back-button-${this.submenuLevel}`}
                >
                  <svg
                    slot="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="submenu-back-icon"
                  >
                    <path
                      d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                      fill="currentColor"
                    />
                  </svg>
                </ic-menu-item>
                <ic-typography variant="subtitle-small" class="parent-label">
                  {this.parentLabel}
                </ic-typography>
              </div>
            )}
            <ul
              class="button"
              aria-label={this.getMenuAriaLabel()}
              role="menu"
              aria-owns={
                this.submenuId !== undefined
                  ? `ic-popover-submenu-back-button-${this.submenuLevel}`
                  : false
              }
              aria-controls={
                this.submenuId !== undefined
                  ? `ic-popover-submenu-back-button-${this.submenuLevel}`
                  : false
              }
            >
              <slot></slot>
            </ul>
          </div>
        </div>
      </Host>
    );
  }
}
