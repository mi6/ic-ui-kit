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
  Fragment,
} from "@stencil/core";
import { createPopper, Instance as PopperInstance } from "@popperjs/core";

import {
  IcActivationTypes,
  IcMenuOption,
  IcValueEventDetail,
} from "../../utils/types";
import Check from "../../assets/check-icon.svg";
import { onComponentRequiredPropUndefined } from "../../utils/helpers";
import {
  IcOptionSelectEventDetail,
  IcMenuChangeEventDetail,
  IcMenuOptionIdEventDetail,
} from "./ic-menu.types";
import { IcSearchBarSearchModes } from "../ic-search-bar/ic-search-bar.types";

@Component({
  tag: "ic-menu",
  styleUrl: "ic-menu.css",
  scoped: true,
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class Menu {
  private firstRender: boolean = true;
  private hasPreviouslyBlurred: boolean = false;
  private hasTimedOut: boolean = false;
  private isLoading: boolean = false;
  private isSearchBar: boolean = false;
  private isSearchableSelect: boolean = false;
  private menu: HTMLUListElement;
  private popperInstance: PopperInstance;
  // Prevents menu re-opening immediately after it is closed on blur when clicking input.
  private preventClickOpen: boolean = false;
  private ungroupedOptions: IcMenuOption[] = [];

  @Element() host: HTMLIcMenuElement;

  @State() focusFromSearchKeypress: boolean = false;
  @State() initialOptionsListRender: boolean = false;
  @State() keyboardNav: boolean = false;
  @State() optionHighlighted: string;
  @State() preventIncorrectTabOrder: boolean = false;

  /**
   * Determines whether options manually set as values (by pressing 'Enter') when they receive focus using keyboard navigation.
   */
  @Prop() activationType?: IcActivationTypes = "automatic";

  /**
   * The reference to an anchor element the menu will position itself from when rendered.
   */
  @Prop() anchorEl!: HTMLElement;

  /**
   * @internal If `true`, autofocus will be applied on selected item when menu is open.
   */
  @Prop() autoFocusOnSelected: boolean = true;

  /**
   *  If `true`, the menu will fill the width of the container.
   */
  @Prop() fullWidth: boolean = false;

  /**
   * The reference to the input element.
   */
  @Prop() inputEl!: HTMLElement;

  /**
   * The label for the input element.
   */
  @Prop() inputLabel!: string;

  /**
   * The custom name for the label field for IcMenuOption.
   */
  @Prop() labelField: string = "label";

  /**
   * The ID of the menu.
   */
  @Prop() menuId!: string;

  /**
   * If `true`, the menu will be displayed open.
   */
  @Prop({ reflect: true }) open!: boolean;

  /**
   * @internal - The parent element if ic-menu is nested inside another component.
   */
  @Prop() parentEl?: HTMLElement;

  /**
   * Specify the mode search bar uses to search. `navigation` allows for quick lookups of a set of values, `query` allows for more general searches.
   */
  @Prop() searchMode?: IcSearchBarSearchModes = "navigation";

  /**
   * If `true`, the small styling will be applied to the menu.
   */
  @Prop({ reflect: true }) small?: boolean = false;

  /**
   * The possible menu selection options.
   */
  @Prop() options!: IcMenuOption[];

  @Watch("options")
  watchOptionsHandler(newOptions: IcMenuOption[]): void {
    this.hasTimedOut = newOptions.some((opt) => opt.timedOut);
    this.isLoading = newOptions.some((opt) => opt.loading);
    this.ungroupedOptions = [];
    this.loadUngroupedOptions();
  }

  /**
   * The value of the currently selected option.
   */
  @Prop({ mutable: true }) value!: string;

  @Watch("value")
  watchValueHandler(): void {
    this.menuValueChange.emit({ value: this.value });
  }

  /**
   * The custom name for the value field for IcMenuOption.
   */
  @Prop() valueField: string = "value";

  /**
   * @internal Emitted when key is pressed while menu is open
   */
  @Event() menuKeyPress: EventEmitter<{ isNavKey: boolean; key: string }>;

  /**
   * @internal Emitted when an option has been highlighted
   */
  @Event() menuOptionId: EventEmitter<IcMenuOptionIdEventDetail>;

  /**
   * @internal Emitted when an option is selected.
   */
  @Event() menuOptionSelect!: EventEmitter<IcOptionSelectEventDetail>;

  /**
   * @internal Emitted when state of menu changes (i.e. open or close).
   */
  @Event() menuStateChange!: EventEmitter<IcMenuChangeEventDetail>;

  /**
   * @internal Emitted when menu value changes.
   */
  @Event() menuValueChange: EventEmitter<IcValueEventDetail>;

  /**
   * @internal Emitted when the retry button is clicked
   */
  @Event() retryButtonClicked: EventEmitter<IcValueEventDetail>;

  /**
   * @internal Emitted when the timeout menu loses focus
   */
  @Event() timeoutBlur: EventEmitter<{ ev: FocusEvent }>;

  /**
   * @internal Emitted when the ungrouped options have been set.
   */
  @Event() ungroupedOptionsSet: EventEmitter<{ options: IcMenuOption[] }>;

  connectedCallback(): void {
    this.getParentEl(this.parentEl);

    if (this.isSearchBar) {
      if (this.searchMode === "navigation") this.setHighlightedOption(0);
      this.initialOptionsListRender = true;
    }
  }

  disconnectedCallback(): void {
    if (this.popperInstance !== undefined) {
      this.popperInstance.destroy();
    }
    this.parentEl.removeEventListener("icClear", this.handleClearListener);
    this.parentEl.removeEventListener(
      "icSubmitSearch",
      this.handleSubmitSearch
    );
  }

  componentWillLoad(): void {
    this.loadUngroupedOptions();
    this.parentEl.addEventListener("icClear", this.handleClearListener);
    this.parentEl.addEventListener("icSubmitSearch", this.handleSubmitSearch);
    this.hasTimedOut = this.options?.some((opt) => opt.timedOut);
    this.isLoading = this.options?.some((opt) => opt.loading);
  }

  componentDidLoad(): void {
    if (
      this.isSearchBar &&
      (this.parentEl as HTMLIcSearchBarElement).disableFilter
    ) {
      this.focusFromSearchKeypress = true;
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

  componentDidUpdate(): void {
    const inputValueInOptions: boolean = this.options.some(
      (option) => option[this.valueField] === this.value
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
        this.autoFocusOnSelected &&
        !this.isSearchableSelect
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
        const highlightedEl = this.host.querySelector(
          `li[data-value="${this.optionHighlighted}"]`
        ) as HTMLElement;

        if (highlightedEl) {
          highlightedEl.focus();
        }
      }
    }
  }

  componentDidRender(): void {
    if (this.firstRender && this.open) {
      this.firstRender = false;
      let adjust = false;

      const dialogEl = this.parentEl.closest("ic-dialog");

      const onDialog = dialogEl !== null;
      if (onDialog) {
        this.host.classList.add("on-dialog");
        if (dialogEl.getAttribute("data-overflow") === "false") {
          const menuTop = this.host.getBoundingClientRect().top;
          const menuHeight = this.host.getBoundingClientRect().height;
          const dialogHeight = dialogEl.getBoundingClientRect().bottom;
          if (menuTop + menuHeight > dialogHeight) {
            adjust = true;
          }
        }
        if (adjust === false) {
          this.host.classList.add("on-dialog-fix-translate");
        }
      }

      if (adjust) {
        this.popperInstance = createPopper(this.anchorEl, this.host, {
          placement: "top",
        });
      } else {
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
    } else if (this.open) {
      this.popperInstance.update();
    }

    if (this.open && !!this.options.length) {
      this.setMenuScrollbar();
    }
  }

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

  private handleClearListener = (): void => {
    this.optionHighlighted = "";
  };

  private handleSubmitSearch = (): void => {
    const highlightedOptionIndex = this.options.findIndex(
      (option) => option[this.valueField] === this.optionHighlighted
    );

    this.setInputValue(highlightedOptionIndex);
  };

  private handleMenuChange = (open: boolean, focusInput?: boolean): void => {
    this.menuStateChange.emit({ open, focusInput });

    if (!open && focusInput !== false) {
      this.inputEl.focus();
      this.preventClickOpen = false;
    }
  };

  private setNextOptionValue = (selectedOptionIndex: number): void => {
    if (this.ungroupedOptions[selectedOptionIndex + 1]) {
      this.menuOptionSelect.emit({
        value: this.ungroupedOptions[selectedOptionIndex + 1][this.valueField],
        optionId: this.getOptionId(
          this.ungroupedOptions[selectedOptionIndex + 1][this.valueField]
        ),
      });
    } else {
      this.menuOptionSelect.emit({
        value: this.ungroupedOptions[0][this.valueField],
        optionId: this.getOptionId(this.ungroupedOptions[0][this.valueField]),
      });
    }
  };

  private setPreviousOptionValue = (selectedOptionIndex: number): void => {
    if (this.ungroupedOptions[selectedOptionIndex - 1]) {
      this.menuOptionSelect.emit({
        value: this.ungroupedOptions[selectedOptionIndex - 1][this.valueField],
        optionId: this.getOptionId(
          this.ungroupedOptions[selectedOptionIndex - 1][this.valueField]
        ),
      });
    } else {
      this.menuOptionSelect.emit({
        value:
          this.ungroupedOptions[this.ungroupedOptions.length - 1][
            this.valueField
          ],
        optionId: this.getOptionId(
          this.ungroupedOptions[this.ungroupedOptions.length - 1][
            this.valueField
          ]
        ),
      });
    }
  };

  private getParentEl = (parent: HTMLElement) => {
    if (parent.tagName === "IC-SEARCH-BAR") {
      this.isSearchBar = true;
    } else if (
      parent.tagName === "IC-SELECT" &&
      parent.getAttribute("searchable") !== null &&
      parent.getAttribute("searchable") !== undefined
    ) {
      this.isSearchableSelect = true;
    }
  };

  private arrowBehaviour = (event: KeyboardEvent): void => {
    event.preventDefault();
    this.handleMenuChange(true);
  };

  private setMenuOptions = () =>
    this.isSearchBar ? this.options : this.ungroupedOptions;

  private setHighlightedOption = (highlightedIndex: number): void => {
    const menuOptions = this.setMenuOptions();

    menuOptions[highlightedIndex] &&
      !menuOptions[highlightedIndex].timedOut &&
      (this.optionHighlighted =
        menuOptions[highlightedIndex][this.valueField] || undefined);
  };

  private autoSetInputValueKeyboardOpen = (event: KeyboardEvent) => {
    const selectedOptionIndex = this.ungroupedOptions.findIndex(
      (option) => option[this.valueField] === this.value
    );

    this.keyboardNav = false;

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
    }
  };

  private manSetInputValueKeyboardOpen = (event: KeyboardEvent) => {
    const menuOptions = this.setMenuOptions();

    this.keyboardNav = false;

    const highlightedOptionIndex = menuOptions.findIndex(
      (option) => option[this.valueField] === this.optionHighlighted
    );

    const getOptionId = (index: number): string =>
      Array.from(this.host.querySelectorAll("li"))[index]?.id;

    switch (event.key) {
      case "ArrowDown":
        this.keyboardNav = true;
        this.arrowBehaviour(event);
        if (highlightedOptionIndex < menuOptions.length - 1) {
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
        this.keyboardNav = true;
        this.arrowBehaviour(event);
        if (
          highlightedOptionIndex <= 0 ||
          highlightedOptionIndex > menuOptions.length + 1
        ) {
          this.setHighlightedOption(menuOptions.length - 1);
          this.menuOptionId.emit({
            optionId: getOptionId(menuOptions.length - 1),
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
      case "Home":
        this.keyboardNav = true;
        event.preventDefault();
        this.arrowBehaviour(event);
        this.setHighlightedOption(0);
        this.menuOptionId.emit({
          optionId: getOptionId(0),
        });
        break;
      case "End":
        this.keyboardNav = true;
        event.preventDefault();
        this.arrowBehaviour(event);
        this.setHighlightedOption(menuOptions.length - 1);
        this.menuOptionId.emit({
          optionId: getOptionId(menuOptions.length - 1),
        });
        break;
      case "Enter":
        event.preventDefault();
        this.setInputValue(highlightedOptionIndex);
        if (menuOptions[highlightedOptionIndex] !== undefined) {
          this.value = menuOptions[highlightedOptionIndex][this.valueField];
        }
        break;
      case "Escape":
        if (this.open) {
          event.stopImmediatePropagation();
        }
        this.handleMenuChange(false);
        this.menuOptionId.emit({ optionId: undefined });
        break;
      case "Shift":
      case "Tab":
        if (this.isSearchBar) {
          this.keyboardNav = true;
        }
        this.preventIncorrectTabOrder = true;
        break;
      case "Backspace":
        if (this.isSearchBar) {
          (this.parentEl as HTMLIcSearchBarElement).setFocus();
          if (this.searchMode === "navigation") this.setHighlightedOption(0);
        } else if (this.isSearchableSelect) {
          (this.parentEl as HTMLIcSelectElement).setFocus();
        }
        this.focusFromSearchKeypress = true;
        break;
      default:
        if (event.key !== "Tab") {
          if (this.isSearchBar) {
            (this.parentEl as HTMLIcSearchBarElement).setFocus();
            if (this.searchMode === "navigation") this.setHighlightedOption(0);
          } else if (this.isSearchableSelect) {
            (this.parentEl as HTMLIcSelectElement).setFocus();
          }
          this.focusFromSearchKeypress = true;
        }
        break;
    }
  };

  private setInputValue = (highlightedOptionIndex: number) => {
    const menuOptions = this.setMenuOptions();

    if (menuOptions[highlightedOptionIndex] !== undefined) {
      this.menuOptionSelect.emit({
        value: menuOptions[highlightedOptionIndex][this.valueField],
      });
      this.optionHighlighted = undefined;
      this.menuOptionId.emit({ optionId: undefined });
    }
    if (!this.hasTimedOut) this.handleMenuChange(false);
    else (this.parentEl as HTMLIcSearchBarElement).setFocus();
  };

  private handleOptionClick = (event: Event): void => {
    const { value, label } = (event.target as HTMLLIElement).dataset;
    this.menuOptionSelect.emit({ value, label });
    this.handleMenuChange(false);
  };

  private handleRetry = (): void => {
    this.retryButtonClicked.emit({ value: this.value });
  };

  private handleRetryKeyDown = (ev: KeyboardEvent): void => {
    if (ev.key === "Enter" || ev.key === " ") {
      ev.preventDefault();
      this.retryButtonClicked.emit({ value: this.value, keyPressed: ev.key });
    }
  };

  private handleBlur = (event: FocusEvent): void => {
    if (event.relatedTarget !== this.inputEl) {
      if (!this.menu.contains(event.relatedTarget as HTMLElement)) {
        this.handleMenuChange(false, this.hasPreviouslyBlurred);
      }
    } else {
      this.handleMenuChange(false);
      this.preventClickOpen = true;
    }
    if (!this.isSearchBar) this.hasPreviouslyBlurred = !!event.relatedTarget;
  };

  private handleMouseDown = (event: Event): void => {
    event.preventDefault();
  };

  private handleMenuKeyDown = (event: KeyboardEvent) => {
    if (this.activationType === "automatic") {
      this.autoSetValueOnMenuKeyDown(event);
    } else if (this.activationType === "manual" && this.isSearchableSelect) {
      this.manSetInputValueKeyboardOpen(event);
    }
  };

  private emitMenuKeyPress = (isNavKey: boolean, key: string) => {
    this.menuKeyPress.emit({ isNavKey: isNavKey, key: key });
  };

  private autoSetValueOnMenuKeyDown = (event: KeyboardEvent): void => {
    event.cancelBubble = true;
    const selectedOptionIndex = this.ungroupedOptions.findIndex(
      (option) => option[this.valueField] === this.value
    );

    const isSearchableSelect = this.inputEl.tagName === "INPUT";

    this.keyboardNav = false;

    switch (event.key) {
      case " ":
        event.preventDefault();
        break;
      case "ArrowUp":
        if (!this.hasTimedOut) {
          event.preventDefault();
          this.setPreviousOptionValue(selectedOptionIndex);
          this.keyboardNav = true;
        }
        break;
      case "ArrowDown":
        if (!this.hasTimedOut) {
          event.preventDefault();
          this.setNextOptionValue(selectedOptionIndex);
          this.keyboardNav = true;
        }
        break;
      case "Home":
        this.menuOptionSelect.emit({
          value: this.ungroupedOptions[0][this.valueField],
        });
        this.keyboardNav = true;
        break;
      case "End":
        this.menuOptionSelect.emit({
          value:
            this.ungroupedOptions[this.ungroupedOptions.length - 1][
              this.valueField
            ],
        });
        this.keyboardNav = true;
        break;
      case "Enter":
        !this.hasTimedOut && this.handleMenuChange(false);
        break;
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
        if (isSearchableSelect && event.key !== "Tab" && !this.hasTimedOut) {
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
    let ariaLabel = option[this.labelField];

    if (option.description) {
      ariaLabel = `${ariaLabel}, ${option.description}`;
    }

    if (option.element) {
      ariaLabel = `${ariaLabel}, ${option.element.ariaLabel}`;
    }

    if (parentOption) {
      return `${ariaLabel}, ${parentOption[this.labelField]} group`;
    } else {
      return ariaLabel;
    }
  };

  private getSortedOptions = (options: IcMenuOption[]): IcMenuOption[] => {
    let sorted: IcMenuOption[] = [];
    if (options.sort) {
      sorted = options.sort((optionA, optionB) =>
        optionA.recommended && !optionB.recommended ? -1 : 0
      );
    }
    return sorted;
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
    if (this.options.length > 0 && this.options.map) {
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

  private setMenuScrollbar = () => {
    let optionsHeight = 0;
    this.host
      .querySelectorAll(".option")
      .forEach((option) => (optionsHeight += option.clientHeight));

    if (optionsHeight >= 320) {
      this.menu.classList.add("menu-scroll");
    }
  };

  private handleTimeoutBlur = (ev: FocusEvent) => {
    this.timeoutBlur.emit({ ev });
  };

  private optionContent = (option: IcMenuOption) => {
    return (
      <Fragment>
        {option.loading && <ic-loading-indicator size="icon" />}
        <div class="option-text-container">
          <div class="option-label">
            {option.icon && (
              <div
                class="option-icon"
                innerHTML={option.icon}
                aria-hidden="true"
              ></div>
            )}
            <ic-typography variant="body" aria-hidden="true">
              <p>{option[this.labelField]}</p>
            </ic-typography>
          </div>
          {option.description && (
            <ic-typography
              id={`${this.getOptionId(option[this.valueField])}-description`}
              class="option-description"
              variant="caption"
              aria-hidden="true"
            >
              <p>{option.description}</p>
            </ic-typography>
          )}
          {option.element && (
            <div
              class="option-element"
              innerHTML={option.element.component}
              aria-hidden="true"
            ></div>
          )}
        </div>
        {!!option[this.valueField] &&
          !!this.value &&
          option[this.valueField].toLowerCase() === this.value?.toLowerCase() &&
          this.parentEl.tagName !== "IC-SEARCH-BAR" && (
            <span class="check-icon" innerHTML={Check} />
          )}
      </Fragment>
    );
  };

  private displayOption = (
    option: IcMenuOption,
    index?: number,
    parentOption?: IcMenuOption
  ): HTMLLIElement => {
    const {
      open,
      value,
      keyboardNav,
      isManualMode,
      initialOptionsListRender,
      optionHighlighted,
      options,
    } = this;

    return (
      <li
        id={this.getOptionId(option[this.valueField])}
        class={{
          option: true,
          "focused-option": isManualMode
            ? (keyboardNav || initialOptionsListRender) &&
              option[this.valueField] === optionHighlighted
            : keyboardNav && option[this.valueField] === value,
          "last-recommended-option":
            option.recommended &&
            options[index + 1] &&
            !options[index + 1].recommended,
          "disabled-option": option.disabled,
          "loading-option": option.loading,
          timeout: option.timedOut,
        }}
        role="option"
        tabindex={
          open &&
          (option[this.valueField] === value ||
            option[this.valueField] === optionHighlighted) &&
          keyboardNav
            ? "0"
            : "-1"
        }
        aria-label={this.getOptionAriaLabel(option, parentOption)}
        aria-selected={option[this.valueField] === value}
        aria-disabled={option.disabled ? "true" : "false"}
        onClick={!option.timedOut && !option.loading && this.handleOptionClick}
        onBlur={this.handleBlur}
        onMouseDown={this.handleMouseDown}
        data-value={option[this.valueField]}
        data-label={option[this.labelField]}
      >
        {option.timedOut ? (
          <Fragment>
            <div class="loading-error-info">
              <svg
                class="error-icon-svg"
                aria-labelledby="error-title"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#000000"
              >
                <title id="error-title">Error</title>
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
              </svg>
              <ic-typography variant="label">
                {option[this.labelField]}
              </ic-typography>
            </div>
            <ic-button
              size="small"
              variant="tertiary"
              onClick={this.handleRetry}
              onKeyDown={this.handleRetryKeyDown}
              onBlur={this.handleTimeoutBlur}
              id="retry-button"
            >
              Retry
            </ic-button>
          </Fragment>
        ) : (
          this.optionContent(option)
        )}
      </li>
    );
  };

  render() {
    const {
      inputLabel,
      options,
      menuId,
      value,
      fullWidth,
      hasTimedOut,
      isLoading,
      small,
      open,
      inputEl,
      keyboardNav,
    } = this;

    return (
      <Host
        class={{
          "full-width": fullWidth,
          "no-focus": inputEl?.tagName === "INPUT" || hasTimedOut || isLoading,
          small: small,
          open: open,
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
              open && !keyboardNav && inputEl?.tagName !== "INPUT" ? "0" : "-1"
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
                        <p>{option[this.labelField]}</p>
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
