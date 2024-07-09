import {
  Component,
  Host,
  h,
  Prop,
  Listen,
  Element,
  Event,
  EventEmitter,
  State,
} from "@stencil/core";
import {
  IcSizes,
  IcThemeForeground,
  IcSelectTypes,
  IcSelectMethodTypes,
} from "../../utils/types";
import { IcChangeEventDetail } from "./ic-toggle-button-group.types";

interface lastKey {
  key: string | null;
  shift: boolean;
}

const TOGGLE_GROUP = "IC-TOGGLE-BUTTON-GROUP";

@Component({
  tag: "ic-toggle-button-group",
  styleUrl: "ic-toggle-button-group.css",
  shadow: true,
})
export class ToggleButtonGroup {
  @Element() el: HTMLIcToggleButtonGroupElement;

  @State() lastKeyPressed: lastKey = {
    key: null,
    shift: false,
  };

  /**
   * The accessible label of the toggle button group component to provide context for screen reader users.
   */
  @Prop() accessibleLabel?: string = "Toggle button group";

  /**
   * The appearance of the toggle button group, e.g dark, or light.
   */
  @Prop() appearance: IcThemeForeground = "default";

  /**
   * If `true`, the toggle button group will be set to the disabled state.
   */
  @Prop() disabled: boolean = false;

  /**
   * If `true`, the toggle button group will fill the width of the container.
   */
  @Prop() fullWidth?: boolean = false;

  /**
   * The placement of the icons in relation to the toggle button labels.
   */
  @Prop() iconPlacement?: "left" | "right" | "top";

  /**
   * If `true`, the toggle button group will be in loading state.
   */
  @Prop() loading?: boolean = false;

  /**
   * If `auto`, controls are toggled automatically when navigated to. If `manual`, the controls must be actioned to change their toggled state. The value of this prop is ignored if `selectType` is set to`multi`.
   */
  @Prop({ mutable: true }) selectMethod?: IcSelectMethodTypes = "manual";

  /**
   * Sets whether single or multiple options can be toggled. If `multi`, then the `selectMethod` is always `manual`.
   */
  @Prop() selectType?: IcSelectTypes = "single";

  /**
   * The size of the toggle buttons to be displayed. This does not affect the font size of the accessible label.
   */
  @Prop() size?: IcSizes = "default";

  /**
   * The variant of the toggle button.
   */
  @Prop({ reflect: true }) variant: "default" | "icon" = "default";

  /**
   * Emitted when a toggle button is selected.
   */
  @Event() icChange: EventEmitter<IcChangeEventDetail>;

  @Listen("icToggleChecked")
  selectHandler(ev: CustomEvent, tabTarget?: HTMLIcToggleButtonElement): void {
    const allToggles = this.getAllToggleButtons();
    let clickedToggle = ev.target as HTMLIcToggleButtonElement;
    // tabTarget used in proxySelectHandler
    tabTarget && tabTarget.focus();
    if (this.selectType === "single") {
      if (!clickedToggle) {
        clickedToggle = tabTarget;
      }
      allToggles.forEach((el) => {
        if (el.id !== clickedToggle.id && el.checked) {
          el.checked = false;
        }
      });

      this.icChange.emit({
        checked: ev.detail.checked,
        selectedOption: clickedToggle,
      });
    } else {
      const toggledOptions = this.getAllToggleButtons().filter(
        (el) => el.checked && !el.disabled
      );

      this.icChange.emit({
        checked: toggledOptions.map((opt) => opt.checked),
        toggledOptions: toggledOptions.map((opt) => ({
          toggleButton: opt,
        })),
        selectedOption: clickedToggle,
      });
    }
  }

  componentWillLoad(): void {
    this.selectType === "multi" && (this.selectMethod = "manual");
    this.selectMethod === "auto" && this.selectType === "single";
    document.addEventListener("keydown", this.keyListener);
  }

  componentDidLoad(): void {
    this.getAllToggleButtons().forEach((el, i) => {
      this.setSlottedAria(el);
      el.size = this.size;
      el.loading = this.loading;
      el.iconPlacement = this.iconPlacement;
      el.disabled ? null : (el.disabled = this.disabled);
      el.appearance = this.appearance;
      el.variant = this.variant;
      el.fullWidth = this.fullWidth;
      el.id = i.toString();
      el.tabIndex = -1;
      el.addEventListener("keydown", (ev) => {
        this.handleKeyDown(ev);
      });
      el.classList.add("expand-toggle-group-child");
    });
  }

  disconnectedCallback(): void {
    document.removeEventListener("keydown", this.keyListener);
  }

  private keyListener = (ev: KeyboardEvent) => {
    this.lastKeyPressed = {
      key: ev.key,
      shift: ev.shiftKey,
    };
  };

  private setSlottedAria = (el: HTMLIcToggleButtonElement) => {
    const btn = el.shadowRoot
      .querySelector("ic-button")
      .shadowRoot.querySelector("button") as HTMLButtonElement;
    let aria = btn.getAttribute("aria-label");
    aria += ", ";
    aria += this.accessibleLabel;
    btn.setAttribute("aria-label", aria);
  };

  private handleHostFocus = (ev: FocusEvent): void => {
    if (this.loading || this.disabled) {
      return null;
    }
    const el = ev.target as HTMLIcToggleButtonGroupElement;
    const relEl = ev.relatedTarget as HTMLIcToggleButtonElement;
    const toggleButtons = Array.from(el.querySelectorAll("ic-toggle-button"));
    if (
      ((toggleButtons.every((el) => !el.checked) ||
        this.selectType !== "single") &&
        this.lastKeyPressed.shift === false) ||
      (toggleButtons.every((el) => !el.checked) &&
        this.lastKeyPressed.shift === true &&
        relEl.tagName == TOGGLE_GROUP)
    ) {
      toggleButtons[0].focus();
    } else if (
      this.lastKeyPressed.shift === false ||
      (this.lastKeyPressed.shift === true && relEl.tagName == TOGGLE_GROUP)
    ) {
      // if checked is true and selectMethod is "single", focus that toggle
      const toggledButton = toggleButtons.filter((el) => el.checked);
      toggledButton[0].focus();
    }
  };

  // trigger selectHandler when unable to add 'target'
  private proxySelectHandler(toggle: HTMLIcToggleButtonElement): void {
    toggle.checked = true;
    const customEv = new CustomEvent("icToggleChecked", {
      detail: {
        checked: toggle.checked,
      },
    });
    this.selectHandler(customEv, toggle);
  }

  private handleKeyDown = (event: KeyboardEvent): void => {
    const toggleButtonOptions = this.getAllToggleButtons();
    const focussedChild = toggleButtonOptions.indexOf(
      toggleButtonOptions.filter((el) => el === document.activeElement)[0]
    );
    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        this.selectMethod === "auto"
          ? this.proxySelectHandler(
              toggleButtonOptions[this.getNextItemToSelect(focussedChild, true)]
            )
          : toggleButtonOptions[
              this.getNextItemToSelect(focussedChild, true)
            ].focus();
        break;
      case "ArrowUp":
      case "ArrowLeft":
        this.selectMethod === "auto"
          ? this.proxySelectHandler(
              toggleButtonOptions[
                this.getNextItemToSelect(focussedChild, false)
              ]
            )
          : toggleButtonOptions[
              this.getNextItemToSelect(focussedChild, false)
            ].focus();
        break;
      case "Tab":
        break;
    }
  };

  private getNextItemToSelect = (
    currentItem: number,
    movingDown: boolean
  ): number => {
    const toggleButtonOptions = this.getAllToggleButtons();
    const numToggles = toggleButtonOptions.length - 1;

    if (currentItem < 1) {
      currentItem = 0;
    }

    let nextItem = movingDown ? currentItem + 1 : currentItem - 1;
    if (nextItem < 0) {
      nextItem = numToggles;
    } else if (nextItem > numToggles) {
      nextItem = 0;
    }

    if (toggleButtonOptions[nextItem].disabled) {
      nextItem = this.getNextItemToSelect(nextItem, movingDown);
    }

    return nextItem;
  };

  private getAllToggleButtons(): HTMLIcToggleButtonElement[] {
    return Array.from(this.el.querySelectorAll("ic-toggle-button"));
  }

  render() {
    return (
      <Host
        role="group"
        aria-label={this.accessibleLabel}
        aria-disabled={this.disabled ? "true" : "false"}
        tabindex={0}
        class={{
          ["ic-toggle-button-group-full-width"]: this.fullWidth,
          ["ic-toggle-button-group-loading"]: this.loading,
          ["ic-toggle-button-group-disabled"]: this.disabled,
          [`ic-toggle-button-group-${this.appearance}`]: true,
        }}
        onFocus={this.handleHostFocus}
      >
        <slot></slot>
      </Host>
    );
  }
}
