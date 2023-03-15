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
import {
  getSlotElements,
  onComponentRequiredPropUndefined,
} from "../../utils/helpers";
import { createPopper } from "@popperjs/core";

@Component({
  tag: "ic-popover-menu",
  styleUrl: "ic-popover-menu.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class PopoverMenu {
  @Element() host: HTMLIcPopoverMenuElement;

  /**
   * The ID of the element the popover menu will anchor itself to. This is required unless the popover is a submenu.
   */
  @Prop() anchor: string;

  /**
   * The aria label for each popover menu/submenu.
   */
  @Prop() menuAriaLabel!: string;

  /**
   * The unique identifier for a popover submenu.
   */
  @Prop() submenuId?: string;

  /**
   * If `true`, the popover menu will be displayed.
   */
  @Prop({ reflect: true, mutable: true }) open: boolean = undefined;

  /**
   * @internal The parent popover menu of a child popover menu.
   */
  @Prop() parentPopover?: HTMLIcPopoverMenuElement;

  /**
   * @internal The level of menu being displayed.
   */
  @Prop() submenuLevel: number = 1;

  /**
   * @internal The parent popover menu of a child popover menu.
   */
  @Prop() parentLabel?: string;

  @State() openingFromChild: boolean = false;

  @State() openingFromParent: boolean = false;

  @Listen("handleMenuButtonClick")
  handleMenuButtonClick(ev: CustomEvent): void {
    if (!ev.detail.hasSubMenu && ev.detail.label !== "Back") {
      this.closeMenu();
    }
  }

  // This is listening for the event emitted when a menu button is acting as a trigger button
  @Listen("triggerPopoverMenuInstance", { capture: true })
  handleSubmenuChange(ev: Event): void {
    // Finds the trigger menu button that has emitted the event
    const target = ev.target as HTMLIcMenuButtonElement;
    this.open = false;

    // Find the popover menu that the menu button triggers (i.e. submenu-trigger-for === submenu-id).
    const childEl = document.querySelector(
      `ic-popover-menu[submenu-id=${target.submenuTriggerFor}]`
    ) as HTMLIcPopoverMenuElement;
    // Set the parent popover menu of the submenu and open the submenu
    childEl.parentPopover = this.host;
    childEl.anchor = this.anchor;
    childEl.menuAriaLabel = this.menuAriaLabel;
    childEl.openFromParent();
    childEl.submenuLevel = this.submenuLevel + 1;
    // Set the label in the submenu using the label of the menu button that has emitted the event
    childEl.parentLabel = target.label;
  }

  @Watch("open")
  watchOpenHandler(): void {
    if (this.open) {
      if (this.parentPopover !== undefined) {
        this.popoverMenuEls.unshift(this.backButton);
      }

      this.currentFocus = this.submenuId !== undefined ? 1 : 0;
      // Needed so that anchorEl isn't always focused
      setTimeout(this.setButtonFocus, 50);
    }
  }

  private setButtonFocus = () => {
    this.popoverMenuEls[this.currentFocus]?.focus();
  };

  private popoverMenuEls: HTMLIcMenuButtonElement[] = [];
  private anchorEl: HTMLElement;
  private currentFocus: number;
  private backButton: HTMLIcMenuButtonElement;

  // Checks that the popover menu has an anchor
  private findAnchorEl = (anchor: string): HTMLElement => {
    let anchorElement: HTMLElement = null;
    if (anchor === null || anchor === undefined) {
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

  @Listen("click", { target: "document" })
  handleClick(ev: Event): void {
    ev.preventDefault();
    if (this.open && this.isNotPopoverMenuEl(ev)) {
      // If menu is open the next click on the document is not a popover El, close the popover
      this.closeMenu();
    }
  }

  @Method()
  async openFromChild(): Promise<void> {
    this.open = true;
    this.openingFromChild = true;

    setTimeout(() => (this.openingFromChild = false), 1000);
  }

  @Method()
  async openFromParent(): Promise<void> {
    this.open = true;
    this.openingFromParent = true;

    setTimeout(() => (this.openingFromParent = false), 1000);
  }

  private isNotPopoverMenuEl = (ev: Event) => {
    // If trigger button id doesnt not match popover anchor
    // If target tagName is not IC-MENU-BUTTON
    // If target tagName is not IC-POPOVER-MENU
    // return true
    const target = ev.target as HTMLElement;
    return (
      target.id !== this.anchor &&
      target.tagName !== "IC-MENU-BUTTON" &&
      target.tagName !== "IC-POPOVER-MENU"
    );
  };

  private closeMenu = () => {
    this.open = false;
    this.anchorEl.focus();
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
        this.closeMenu();
        this.host.blur();
        break;
    }
  }

  private addMenuButtons = (
    elements: string | any[] | NodeListOf<ChildNode>
  ) => {
    for (let i = 0; i < elements.length; i++) {
      const el = elements[i] as HTMLIcMenuButtonElement;
      if (el.tagName === "IC-MENU-BUTTON") {
        this.popoverMenuEls.push(el);
      } else if (el.tagName === "IC-MENU-GROUP") {
        const groupSlotWrapper = el.shadowRoot.querySelector("ul");
        const menuGroupElements = getSlotElements(groupSlotWrapper);

        this.addMenuButtons(menuGroupElements);
      }
    }
  };

  private getMenuAriaLabel = (): string => {
    const ariaLabel = this.menuAriaLabel;

    if (this.submenuId !== undefined) {
      return `${ariaLabel}, within nested level ${this.submenuLevel} ${this.parentLabel} submenu,`;
    } else {
      return ariaLabel;
    }
  };

  componentDidRender(): void {
    if (this.open) {
      createPopper(this.anchorEl, this.host, {
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
    }
  }

  componentWillRender(): void {
    this.anchorEl = this.findAnchorEl(this.anchor);
  }

  componentDidLoad(): void {
    const slotWrapper = this.host.shadowRoot.querySelector("ul.button");
    const popoverMenuElements = getSlotElements(slotWrapper);

    if (popoverMenuElements !== null) {
      this.addMenuButtons(popoverMenuElements);
    }

    if (this.submenuId === undefined) {
      onComponentRequiredPropUndefined(
        [{ prop: this.menuAriaLabel, propName: "menu-aria-label" }],
        "Popover Menu"
      );
    }
  }

  render() {
    return (
      <Host>
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
                <ic-menu-button
                  class="ic-popover-submenu-back-button"
                  ref={(el) => (this.backButton = el)}
                  label="Back"
                  onClick={() => {
                    this.parentPopover.openFromChild();
                    this.open = false;
                  }}
                  id="ic-popover-submenu-back-button"
                >
                  <svg
                    slot="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                      fill="currentColor"
                    />
                  </svg>
                </ic-menu-button>
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
                  ? "ic-popover-submenu-back-button"
                  : false
              }
              aria-controls={
                this.submenuId !== undefined
                  ? "ic-popover-submenu-back-button"
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
