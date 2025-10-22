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
  Watch,
  Method,
} from "@stencil/core";
import {
  IcSizes,
  IcSelectTypes,
  IcSelectMethodTypes,
  IcThemeMode,
  IcButtonTooltipPlacement,
  IcIconPlacementOptions,
} from "../../utils/types";
import { IcChangeEventDetail } from "./ic-toggle-button-group.types";
import { removeDisabledFalse } from "../../utils/helpers";

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
  @State() externallySetActiveToggle: HTMLIcToggleButtonElement | null = null;

  /**
   * The accessible label of the toggle button group component to provide context for screen reader users.
   */
  @Prop() accessibleLabel = "Toggle button group";

  /**
   * If `true`, the toggle button group will be set to the disabled state.
   */
  @Prop() disabled = false;
  @Watch("disabled")
  watchDisabledHandler(): void {
    this.getAllToggleButtons().forEach((el) => {
      el.disabled = this.disabled;
    });
    removeDisabledFalse(this.disabled, this.el);
  }

  /**
   * If `true`, the toggle button group will fill the width of the container.
   */
  @Prop() fullWidth = false;
  @Watch("fullWidth")
  watchFullWidthHandler(): void {
    this.getAllToggleButtons().forEach((el) => {
      el.fullWidth = this.fullWidth;
    });
  }

  /**
   * The placement of the icons in relation to the toggle button labels.
   */
  @Prop() iconPlacement?: IcIconPlacementOptions;

  /**
   * If `true`, the toggle button group will be in loading state.
   */
  @Prop() loading = false;
  @Watch("loading")
  watchLoadingHandler(): void {
    this.getAllToggleButtons().forEach((el) => {
      el.loading = this.loading;
    });
  }

  /**
   * If `true`, the toggle button group will display as black in the light theme, and white in dark theme.
   */
  @Prop() monochrome = false;
  @Watch("monochrome")
  watchMonochromeHandler(): void {
    this.getAllToggleButtons().forEach((el) => {
      el.monochrome = this.monochrome;
    });
  }

  /**
   * If `true`, the toggle button group will display with an outline.
   */
  @Prop() outline = true;
  @Watch("outline")
  watchOutlineHandler(): void {
    this.getAllToggleButtons().forEach((el) => {
      el.outline = this.outline;
    });
  }

  /**
   * If `auto`, controls are toggled automatically when navigated to. If `manual`, the controls must be actioned to change their toggled state. The value of this prop is ignored if `selectType` is set to`multi`.
   */
  @Prop({ mutable: true }) selectMethod: IcSelectMethodTypes = "manual";

  /**
   * Sets whether single or multiple options can be toggled. If `multi`, then the `selectMethod` is always `manual`.
   */
  @Prop() selectType: IcSelectTypes = "single";

  /**
   * The size of the toggle buttons to be displayed. This does not affect the font size of the accessible label.
   */
  @Prop() size: IcSizes = "medium";
  @Watch("size")
  watchSizeHandler(): void {
    this.getAllToggleButtons().forEach((el) => {
      el.size = this.size;
    });
  }

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme: IcThemeMode = "inherit";
  @Watch("theme")
  watchThemeHandler(): void {
    this.getAllToggleButtons().forEach((el) => {
      el.theme = this.theme;
    });
  }

  /**
   * The position of the tooltip in relation to the toggle buttons.
   */
  @Prop() tooltipPlacement: IcButtonTooltipPlacement = "bottom";
  @Watch("tooltipPlacement")
  watchTooltipPlacementHandler(): void {
    this.getAllToggleButtons().forEach((el) => {
      el.tooltipPlacement = this.tooltipPlacement;
    });
  }

  /**
   * The variant of the toggle button.
   */
  @Prop({ reflect: true }) variant: "default" | "icon" = "default";
  @Watch("variant")
  watchVariantHandler(): void {
    this.getAllToggleButtons().forEach((el) => {
      el.variant = this.variant;
    });
  }

  /**
   * Emitted when a toggle button is selected.
   */
  @Event() icChange: EventEmitter<IcChangeEventDetail>;

  @Listen("icToggleChecked")
  selectHandler(ev: CustomEvent, tabTarget?: HTMLIcToggleButtonElement): void {
    const allToggles = this.getAllToggleButtons();
    let clickedToggle = ev.target as HTMLIcToggleButtonElement;

    if (tabTarget) tabTarget.focus(); // tabTarget used in proxySelectHandler

    if (this.selectType === "single") {
      if (!clickedToggle && tabTarget) {
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
      const toggledOptions = allToggles.filter(
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

  /**
   * @internal Used to enable other components to set the active toggle button when toggle button group is in a shadow dom.
   */
  @Method()
  async setActiveToggle(toggle: HTMLIcToggleButtonElement): Promise<void> {
    this.externallySetActiveToggle = toggle;
  }

  componentWillLoad(): void {
    if (this.selectType === "multi") this.selectMethod = "manual";
    if (this.selectMethod === "auto") this.selectType === "single";
    document.addEventListener("keydown", this.keyListener);
    removeDisabledFalse(this.disabled, this.el);
  }

  componentDidLoad(): void {
    this.getAllToggleButtons().forEach((el, i) => {
      const btn = el.shadowRoot
        ?.querySelector("ic-button")
        ?.shadowRoot?.querySelector("button");
      if (btn) {
        const btnAriaLabel = btn.getAttribute("aria-label");
        const aria = btnAriaLabel ? `${btnAriaLabel}, ` : "";
        btn.setAttribute("aria-label", `${aria}${this.accessibleLabel}`);
      }

      el.id = i.toString();
      el.tabIndex = -1;
      el.addEventListener("keydown", (ev) => {
        this.handleKeyDown(ev);
      });
      el.classList.add("expand-toggle-group-child");
    });
  }

  disconnectedCallback(): void {
    document?.removeEventListener("keydown", this.keyListener);
  }

  private keyListener = (ev: KeyboardEvent) => {
    this.lastKeyPressed = {
      key: ev.key,
      shift: ev.shiftKey,
    };
  };

  private handleHostFocus = ({ target, relatedTarget }: FocusEvent) => {
    if (this.disabled) {
      (target as HTMLElement)?.blur();
      return;
    }
    if (this.loading) return;
    const el = target as HTMLIcToggleButtonGroupElement | null;
    const relEl = relatedTarget as HTMLIcToggleButtonElement | null;
    const toggleButtons = Array.from(
      el?.querySelectorAll("ic-toggle-button") || []
    );
    const noToggleButtonsChecked = toggleButtons.every((el) => !el.checked);
    const { shift } = this.lastKeyPressed;
    if (
      ((noToggleButtonsChecked || this.selectType !== "single") && !shift) ||
      (noToggleButtonsChecked && shift && relEl?.tagName == TOGGLE_GROUP)
    ) {
      toggleButtons[0]?.focus();
    } else if (!shift || relEl?.tagName == TOGGLE_GROUP) {
      // if checked is true and selectMethod is "single", focus that toggle
      toggleButtons.filter((el) => el.checked)[0].focus();
    }
  };

  private handleKeyDown = ({ key }: KeyboardEvent) => {
    if (
      key !== "ArrowDown" &&
      key !== "ArrowRight" &&
      key !== "ArrowLeft" &&
      key !== "ArrowUp"
    )
      return;

    const toggleButtonOptions = this.getAllToggleButtons();
    let targetToggle: HTMLIcToggleButtonElement;
    if (this.externallySetActiveToggle) {
      targetToggle =
        toggleButtonOptions[
          this.getNextItemToSelect(
            toggleButtonOptions.indexOf(
              toggleButtonOptions.filter(
                (el) => el === this.externallySetActiveToggle
              )[0]
            ),
            key === "ArrowDown" || key === "ArrowRight"
          )
        ];
    } else {
      targetToggle =
        toggleButtonOptions[
          this.getNextItemToSelect(
            toggleButtonOptions.indexOf(
              toggleButtonOptions.filter(
                (el) => el === document.activeElement
              )[0]
            ),
            key === "ArrowDown" || key === "ArrowRight"
          )
        ];
    }

    if (this.selectMethod === "auto") {
      // trigger selectHandler when unable to add 'target'
      targetToggle.checked = true;
      this.selectHandler(
        new CustomEvent("icToggleChecked", {
          detail: {
            checked: targetToggle.checked,
          },
        }),
        targetToggle
      );
    } else {
      targetToggle.focus();
    }
  };

  private getNextItemToSelect = (currentItem: number, movingDown: boolean) => {
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

  private getAllToggleButtons = () =>
    Array.from(this.el.querySelectorAll("ic-toggle-button"));

  render() {
    const {
      accessibleLabel,
      disabled,
      fullWidth,
      loading,
      monochrome,
      outline,
      theme,
    } = this;

    return (
      <Host
        role="group"
        aria-label={accessibleLabel}
        tabindex={disabled ? -1 : 0}
        class={{
          "ic-toggle-button-group-disabled": disabled,
          "ic-toggle-button-group-full-width": fullWidth,
          "ic-toggle-button-group-loading": loading,
          "ic-toggle-button-group-monochrome": monochrome,
          "ic-toggle-button-group-hide-outline": !outline,
          [`ic-theme-${theme}`]: theme !== "inherit",
        }}
        onFocus={this.handleHostFocus}
      >
        <slot></slot>
      </Host>
    );
  }
}
