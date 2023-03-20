import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  Method,
  State,
  Watch,
} from "@stencil/core";
import { createPopper, Instance as PopperInstance } from "@popperjs/core";

import { IcActivationTypes, IcMenuOption } from "../../utils/types";
import Check from "../../assets/check-icon.svg";
import { onComponentRequiredPropUndefined } from "../../utils/helpers";
import {
  IcOptionSelectEventDetail,
  IcMenuChangeEventDetail,
  IcMenuOptionIdEventDetail,
} from "./ic-menu.types";

@Component({
  tag: "ic-menu",
  styleUrl: "ic-menu.css",
  shadow: true,
})
export class Menu {
  @Element() host: HTMLIcMenuElement;

  /**
   * If `true`, the menu will be displayed open.
   */
  @Prop({ reflect: true }) open!: boolean;

  /**
   * The possible menu selection options.
   */
  @Prop() options!: IcMenuOption[];

  /**
   * If `true`, the small styling will be applied to the menu.
   */
  @Prop({ reflect: true }) small?: boolean = false;

  /**
   * The ID of the menu.
   */
  @Prop() menuId!: string;

  /**
   * The value of the currently selected option.
   */
  @Prop() value!: string;

  /**
   * Determines whether options manually set as values (by pressing 'Enter') when they receive focus using keyboard navigation.
   */
  @Prop() activationType?: IcActivationTypes = "automatic";

  /**
   * The reference to the input element.
   */
  @Prop() inputEl!: HTMLElement;

  /**
   * @internal - The parent element if ic-menu is nested inside another component.
   */
  @Prop() parentEl?: HTMLElement;

  /**
   * The label for the input element.
   */
  @Prop() inputLabel!: string;

  /**
   * The reference to an anchor element the menu will position itself from when rendered.
   */
  @Prop() anchorEl!: HTMLElement;

  /**
   *  If `true`, the menu will fill the width of the container.
   */
  @Prop() fullWidth: boolean = false;

  /**
   * @internal If `true`, autofocus will be applied on selected item when menu is open.
   */
  @Prop() autoFocusOnSelected: boolean = true;

  @State() keyboardNav: boolean = false;
  @State() optionHighlighted: string;
  @State() focusFromSearchKeypress: boolean = false;
  @State() initialOptionsListRender: boolean = false;
  @State() preventIncorrectTabOrder: boolean = false;

  @Watch("options")
  watchOptionsHandler(): void {
    this.ungroupedOptions = [];
    this.loadUngroupedOptions();
  }

  /**
   * @internal Emitted when an option is selected.
   */
  @Event() menuOptionSelect!: EventEmitter<IcOptionSelectEventDetail>;

  /**
   * @internal Emitted when state of menu changes (i.e. open or close).
   */
  @Event() menuStateChange!: EventEmitter<IcMenuChangeEventDetail>;

  /**
   * @internal Emitted when an option has been highlighted
   */
  @Event() menuOptionId: EventEmitter<IcMenuOptionIdEventDetail>;

  /**
   * @internal Emitted when key is pressed while menu is open
   */
  @Event() menuKeyPress: EventEmitter<{ isNavKey: boolean; key: string }>;

  /**
   * @internal Emitted when the ungrouped options have been set.
   */
  @Event() ungroupedOptionsSet: EventEmitter<{ options: IcMenuOption[] }>;

  private handleClearListener = (): void => {
    this.optionHighlighted = "";
  };

  private handleSubmitSearch = (): void => {
    const highlightedOptionIndex = this.options.findIndex(
      (option) => option.value === this.optionHighlighted
    );

    this.setInputValue(highlightedOptionIndex);
  };

  private menu: HTMLUListElement;
  private ungroupedOptions: IcMenuOption[] = [];
  private popperInstance: PopperInstance;

  // Prevents menu re-opening immediately after it is closed on blur when clicking input
  private preventClickOpen: boolean = false;
  private isSearchBar: boolean = false;

  private handleMenuChange = (open: boolean, focusInput?: boolean): void => {
    if (!open) this.popperInstance.destroy();
    this.menuStateChange.emit({ open, focusInput });

    if (!open && focusInput !== false) {
      this.inputEl.focus();
      this.preventClickOpen = false;
    }
  };

  private setNextOptionValue = (selectedOptionIndex: number): void => {
    if (this.ungroupedOptions[selectedOptionIndex + 1]) {
      this.menuOptionSelect.emit({
        value: this.ungroupedOptions[selectedOptionIndex + 1].value,
        optionId: this.getOptionId(
          this.ungroupedOptions[selectedOptionIndex + 1].value
        ),
      });
    } else {
      this.menuOptionSelect.emit({
        value: this.ungroupedOptions[0].value,
        optionId: this.getOptionId(this.ungroupedOptions[0].value),
      });
    }
  };

  private setPreviousOptionValue = (selectedOptionIndex: number): void => {
    if (this.ungroupedOptions[selectedOptionIndex - 1]) {
      this.menuOptionSelect.emit({
        value: this.ungroupedOptions[selectedOptionIndex - 1].value,
        optionId: this.getOptionId(
          this.ungroupedOptions[selectedOptionIndex - 1].value
        ),
      });
    } else {
      this.menuOptionSelect.emit({
        value: this.ungroupedOptions[this.ungroupedOptions.length - 1].value,
        optionId: this.getOptionId(
          this.ungroupedOptions[this.ungroupedOptions.length - 1].value
        ),
      });
    }
  };

  /**
   * @internal If menu is opened with the mouse, emit menuStateChange custom event.
   */
  @Method()
  async handleClickOpen(): Promise<void> {
    if (!this.preventClickOpen) {
      this.menuStateChange.emit({ open: !this.open });
      this.keyboardNav = false;
    }
    this.preventClickOpen = false;
  }

  /**
   * Used alongside activationType
   * If menu is opened via keyboard navigation (i.e. Enter, ArrowUp or ArrowDown), emit optionSelect custom event.
   * @param {KeyboardEvent} event - keyboard event
   */
  @Method()
  async handleKeyboardOpen(event: KeyboardEvent): Promise<void> {
    this.keyboardNav = false;

    if (this.activationType === "automatic") {
      this.autoSetInputValueKeyboardOpen(event);
    } else {
      this.keyboardNav = true;
      this.manSetInputValueKeyboardOpen(event);
    }
  }

  /**
   * @internal Used to highlight the first option in the menu.
   */
  @Method()
  async handleSetFirstOption(): Promise<void> {
    this.setHighlightedOption(0);
  }

  private arrowBehaviour = (event: KeyboardEvent): void => {
    event.preventDefault();
    this.handleMenuChange(true);
  };

  private setHighlightedOption = (highlightedIndex: number): void => {
    this.optionHighlighted = this.options[highlightedIndex].value || undefined;
  };

  private autoSetInputValueKeyboardOpen = (event: KeyboardEvent) => {
    const selectedOptionIndex = this.ungroupedOptions.findIndex(
      (option) => option.value === this.value
    );

    this.keyboardNav = false;

    const isSearchableSelect = this.inputEl?.tagName === "INPUT";

    switch (event.key) {
      case "ArrowDown":
        this.keyboardNav = true;
        this.arrowBehaviour(event);
        this.setNextOptionValue(selectedOptionIndex);
        break;
      case "ArrowUp":
        this.keyboardNav = true;
        this.arrowBehaviour(event);
        this.setPreviousOptionValue(selectedOptionIndex);
        break;
      case " ":
      case "Enter":
        if ((event.target as HTMLElement).id !== "clear-button") {
          this.handleMenuChange(true);
        }
        break;
      case "Backspace":
        if (isSearchableSelect) {
          this.inputEl.focus();
        }
        break;
      default:
        if (isSearchableSelect && event.key !== "Tab") {
          this.inputEl.focus();
        }
        break;
    }
  };

  private manSetInputValueKeyboardOpen = (event: KeyboardEvent) => {
    const highlightedOptionIndex = this.options.findIndex(
      (option) => option.value === this.optionHighlighted
    );

    const getOptionId = (index: number): string =>
      Array.from(this.host.shadowRoot.querySelectorAll("li"))[index].id;

    switch (event.key) {
      case "ArrowDown":
        this.arrowBehaviour(event);
        if (highlightedOptionIndex < this.options.length - 1) {
          this.setHighlightedOption(highlightedOptionIndex + 1);
          this.menuOptionId.emit({
            optionId: getOptionId(highlightedOptionIndex + 1),
          });
        } else {
          this.setHighlightedOption(0);
          this.menuOptionId.emit({
            optionId: getOptionId(0),
          });
        }
        this.preventIncorrectTabOrder = false;
        this.focusFromSearchKeypress = false;
        break;
      case "ArrowUp":
        this.arrowBehaviour(event);
        if (
          highlightedOptionIndex <= 0 ||
          highlightedOptionIndex > this.options.length + 1
        ) {
          this.setHighlightedOption(this.options.length - 1);
          this.menuOptionId.emit({
            optionId: getOptionId(this.options.length - 1),
          });
        } else {
          this.setHighlightedOption(highlightedOptionIndex - 1);
          this.menuOptionId.emit({
            optionId: getOptionId(highlightedOptionIndex - 1),
          });
        }
        this.preventIncorrectTabOrder = false;
        this.focusFromSearchKeypress = false;
        break;
      case "Enter":
        event.preventDefault();
        this.setInputValue(highlightedOptionIndex);
        break;
      case "Escape":
        this.handleMenuChange(false);
        this.menuOptionId.emit({ optionId: undefined });
        break;
      case "Shift":
      case "Tab":
        this.preventIncorrectTabOrder = true;
        break;
      case "Backspace":
        if (this.isSearchBar) {
          (this.parentEl as HTMLIcSearchBarElement).setFocus();
          this.focusFromSearchKeypress = true;
          this.setHighlightedOption(0);
        }
        break;
      default:
        if (this.isSearchBar && event.key !== "Tab") {
          (this.parentEl as HTMLIcSearchBarElement).setFocus();
          this.focusFromSearchKeypress = true;
          this.setHighlightedOption(0);
        }
        break;
    }
  };

  private setInputValue = (highlightedOptionIndex: number) => {
    if (this.options[highlightedOptionIndex]) {
      this.menuOptionSelect.emit({
        value: this.options[highlightedOptionIndex]?.value,
      });
      this.optionHighlighted = undefined;
      this.menuOptionId.emit({ optionId: undefined });
    }
    this.handleMenuChange(false);
  };

  private handleOptionClick = (event: Event): void => {
    const { value, label } = (event.target as HTMLLIElement).dataset;
    this.menuOptionSelect.emit({ value, label });
    this.handleMenuChange(false);
  };

  private handleBlur = (event: FocusEvent): void => {
    if (event.relatedTarget !== this.inputEl) {
      if (!this.menu.contains(event.relatedTarget as HTMLElement)) {
        this.handleMenuChange(false, false);
      }
    } else {
      this.handleMenuChange(false);
      this.preventClickOpen = true;
    }
  };

  private handleMouseDown = (event: Event): void => {
    event.preventDefault();
  };

  private handleMenuKeyDown = (event: KeyboardEvent) => {
    if (this.activationType === "automatic") {
      this.autoSetValueOnMenuKeyDown(event);
    }
  };

  private emitMenuKeyPress = (isNavKey: boolean, key: string) => {
    this.menuKeyPress.emit({ isNavKey: isNavKey, key: key });
  };

  private autoSetValueOnMenuKeyDown = (event: KeyboardEvent): void => {
    event.cancelBubble = true;
    const selectedOptionIndex = this.ungroupedOptions.findIndex(
      (option) => option.value === this.value
    );

    const isSearchableSelect = this.inputEl.tagName === "INPUT";

    this.keyboardNav = false;

    switch (event.key) {
      case "ArrowUp":
        event.preventDefault();
        this.setPreviousOptionValue(selectedOptionIndex);
        this.keyboardNav = true;
        break;
      case "ArrowDown":
        event.preventDefault();
        this.setNextOptionValue(selectedOptionIndex);
        this.keyboardNav = true;
        break;
      case "Home":
        this.menuOptionSelect.emit({
          value: this.ungroupedOptions[0].value,
        });
        this.keyboardNav = true;
        break;
      case "End":
        this.menuOptionSelect.emit({
          value: this.ungroupedOptions[this.ungroupedOptions.length - 1].value,
        });
        this.keyboardNav = true;
        break;
      case "Enter":
      case "Escape":
        this.handleMenuChange(false);
        break;
      case "Backspace":
        if (isSearchableSelect) {
          this.inputEl.focus();
        }
        break;
      case "Shift":
        break;
      default:
        if (isSearchableSelect && event.key !== "Tab") {
          this.inputEl.focus();
        }
        if (event.key.length === 1) {
          this.keyboardNav = true;
        }
        break;
    }
    this.emitMenuKeyPress(this.keyboardNav, event.key);
  };

  private handleMenuKeyUp = (event: KeyboardEvent): void => {
    if (event.key === "Tab" && event.shiftKey) {
      this.preventClickOpen = false;
    }
  };

  private getOptionId = (value: string): string => {
    return `${this.menuId}-${value}`;
  };

  private getOptionAriaLabel = (
    option: IcMenuOption,
    parentOption: IcMenuOption
  ): string => {
    let ariaLabel = option.label;

    if (option.description) {
      ariaLabel = `${ariaLabel}, ${option.description}`;
    }

    if (parentOption) {
      return `${ariaLabel}, ${parentOption.label} group`;
    } else {
      return ariaLabel;
    }
  };

  private getSortedOptions = (options: IcMenuOption[]): IcMenuOption[] => {
    return options.sort((optionA, optionB) =>
      optionA.recommended && !optionB.recommended ? -1 : 0
    );
  };

  private isManualMode = this.activationType === "manual";

  private scrollToSelected = (menu: HTMLUListElement) => {
    const selectedOption = menu.querySelector(
      ".option[aria-selected]"
    ) as HTMLElement;

    if (selectedOption) {
      const elTop = selectedOption.offsetTop + selectedOption.offsetHeight;
      if (
        elTop > menu.scrollTop + menu.offsetHeight ||
        elTop < menu.scrollTop + menu.offsetHeight
      ) {
        menu.scrollTop = selectedOption.offsetTop;
      }
      selectedOption.focus();
    }
  };

  private loadUngroupedOptions = () => {
    if (this.options.length > 0) {
      this.options.map((option) => {
        if (option.children) {
          option.children.map(
            (option) => !option.disabled && this.ungroupedOptions.push(option)
          );
        } else if (!option.disabled) {
          this.ungroupedOptions.push(option);
        }
      });
    }
    this.ungroupedOptions = this.getSortedOptions(this.ungroupedOptions);
    this.ungroupedOptionsSet.emit({ options: this.ungroupedOptions });
  };

  connectedCallback(): void {
    if (this.parentEl?.tagName === "IC-SEARCH-BAR") {
      this.setHighlightedOption(0);
      this.initialOptionsListRender = true;
    }
  }

  componentWillLoad(): void {
    this.loadUngroupedOptions();
    this.isSearchBar = this.parentEl.tagName === "IC-SEARCH-BAR";
    this.parentEl.addEventListener("icClear", this.handleClearListener);
    this.parentEl.addEventListener("icSubmitSearch", this.handleSubmitSearch);
  }

  componentDidLoad(): void {
    if (
      this.isSearchBar &&
      (this.parentEl as HTMLIcSearchBarElement).disableFilter
    ) {
      this.focusFromSearchKeypress = true;
    }
    let optionsHeight = 0;
    this.host.shadowRoot
      .querySelectorAll(".option")
      .forEach((option) => (optionsHeight += option.clientHeight));
    if (optionsHeight >= 320) {
      this.menu.classList.add("menu-scroll");
    }

    onComponentRequiredPropUndefined(
      [
        { prop: this.open, propName: "open" },
        { prop: this.options, propName: "options" },
        { prop: this.menuId, propName: "menu-id" },
        { prop: this.inputLabel, propName: "input-label" },
        //NOTE: no check for value, input-el or anchor-el as otherwise get console errors on first load of select component
      ],
      "Menu"
    );
  }

  componentDidRender(): void {
    if (this.open) {
      this.popperInstance = createPopper(this.anchorEl, this.host, {
        placement: "bottom",
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 7],
            },
          },
          {
            name: "flip",
            options: {
              fallbackPlacements: ["top"],
              rootBoundary: "viewport",
            },
          },
        ],
      });
    }
  }

  componentDidUpdate(): void {
    const inputValueInOptions: boolean = this.options.some(
      (option) => option.value === this.value
    );

    const optionHighlightedIsSet =
      this.optionHighlighted !== null &&
      this.optionHighlighted !== undefined &&
      this.optionHighlighted !== "";

    if (this.open && this.options.length !== 0) {
      if (
        this.value &&
        this.keyboardNav &&
        inputValueInOptions &&
        this.autoFocusOnSelected
      ) {
        this.scrollToSelected(this.menu);
      } else if (
        this.inputEl.tagName !== "IC-TEXT-FIELD" &&
        this.inputEl.tagName !== "INPUT"
      ) {
        this.menu.focus();
      } else if (
        optionHighlightedIsSet &&
        !this.focusFromSearchKeypress &&
        !this.preventIncorrectTabOrder
      ) {
        const highlightedEl = this.host.shadowRoot.querySelector(
          `li[data-value="${this.optionHighlighted}"]`
        ) as HTMLElement;

        if (highlightedEl) {
          highlightedEl.focus();
        }
      }
    }
  }

  disconnectedCallback(): void {
    this.parentEl.removeEventListener("icClear", this.handleClearListener);
    this.parentEl.removeEventListener(
      "icSubmitSearch",
      this.handleSubmitSearch
    );
  }

  private displayOption = (
    option: IcMenuOption,
    index?: number,
    parentOption?: IcMenuOption
  ): HTMLLIElement => {
    const { open, value } = this;

    return (
      <li
        id={this.getOptionId(option.value)}
        class={{
          option: true,
          "focused-option": this.isManualMode
            ? (this.keyboardNav || this.initialOptionsListRender) &&
              option.value === this.optionHighlighted
            : this.keyboardNav && option.value === value,
          "last-recommended-option":
            option.recommended &&
            this.options[index + 1] &&
            !this.options[index + 1].recommended,
          "disabled-option": option.disabled,
        }}
        role="option"
        tabindex={
          open &&
          (option.value === value || option.value === this.optionHighlighted) &&
          this.keyboardNav
            ? "0"
            : "-1"
        }
        aria-label={this.getOptionAriaLabel(option, parentOption)}
        aria-selected={option.value === value}
        aria-disabled={option.disabled ? "true" : "false"}
        onClick={this.handleOptionClick}
        onBlur={this.handleBlur}
        onMouseDown={this.handleMouseDown}
        data-value={option.value}
        data-label={option.label}
      >
        <div class="option-text-container">
          <ic-typography variant="body" aria-hidden="true">
            <p>{option.label}</p>
          </ic-typography>
          {option.description && (
            <ic-typography
              id={`${this.getOptionId(option.value)}-description`}
              class="option-description"
              variant="caption"
              aria-hidden="true"
            >
              <p>{option.description}</p>
            </ic-typography>
          )}
        </div>
        {option?.value.toLowerCase() === value?.toLowerCase() &&
          this.parentEl.tagName !== "IC-SEARCH-BAR" && (
            <span class="check-icon" innerHTML={Check} />
          )}
      </li>
    );
  };

  render() {
    const { inputLabel, options, menuId, value, fullWidth } = this;

    return (
      <Host
        class={{
          "full-width": fullWidth,
          "no-focus": this.inputEl?.tagName === "INPUT",
        }}
      >
        {options.length !== 0 && (
          <ul
            id={menuId}
            class="menu"
            role="listbox"
            aria-label={inputLabel}
            aria-activedescendant={
              value != null && value !== "" ? this.getOptionId(value) : ""
            }
            tabindex={
              open && !this.keyboardNav && this.inputEl?.tagName !== "INPUT"
                ? "0"
                : "-1"
            }
            ref={(el) => (this.menu = el)}
            onKeyDown={this.handleMenuKeyDown}
            onKeyUp={this.handleMenuKeyUp}
            onBlur={this.handleBlur}
          >
            {this.getSortedOptions(options).map((option, index) => {
              if (option.children) {
                if (option.children.length > 0) {
                  return (
                    <div>
                      <ic-typography
                        class="option-group-title"
                        role="presentation"
                        variant="subtitle-small"
                      >
                        <p>{option.label}</p>
                      </ic-typography>
                      {option.children.map((childOption) =>
                        this.displayOption(childOption, index, option)
                      )}
                    </div>
                  );
                } else {
                  return null;
                }
              } else {
                return this.displayOption(option, index);
              }
            })}
          </ul>
        )}
      </Host>
    );
  }
}
