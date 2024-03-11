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
  IcSizes,
} from "@ukic/web-components/dist/types/utils/types";
import { IcValueEventDetail } from "../../utils/types";
import Check from "../../assets/check-icon.svg";
import {
  getOptionsWithoutGroupTitlesCount,
  isMacDevice,
  onComponentRequiredPropUndefined,
} from "../../utils/helpers";
import {
  IcOptionSelectEventDetail,
  IcMenuChangeEventDetail,
  IcMenuOptionIdEventDetail,
} from "@ukic/web-components/dist/types/components";
import { IcSearchBarSearchModes } from "@ukic/web-components/dist/types/components";

@Component({
  tag: "ic-menu-with-multi",
  styleUrl: "ic-menu.css",
  scoped: true,
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class Menu {
  private clearButtonId = "clear-button"; // Prevent duplicate literal string lint error
  private disabledOptionSelected: boolean = false;
  private hasPreviouslyBlurred: boolean = false;
  private hasTimedOut: boolean = false;
  private isLoading: boolean = false;
  private isMultiSelect: boolean = false;
  private isSearchBar: boolean = false;
  private isSearchableSelect: boolean = false;
  private menu: HTMLUListElement;
  private multiOptionClicked: string = null;
  private popperInstance: PopperInstance;
  private preventClickOpen: boolean = false; // Prevents menu re-opening immediately after it is closed on blur when clicking input.
  private preventMenuFocus: boolean = false; // (When multiple) ensures focus moves straight to select all button from menu.
  private selectAllButton: HTMLIcButtonElement;
  private ungroupedOptions: IcMenuOption[] = [];

  @Element() el: HTMLIcMenuWithMultiElement;

  @State() focusFromSearchKeypress: boolean = false;
  @State() initialOptionsListRender: boolean = false;
  @State() keyboardNav: boolean = false;
  @State() optionHighlighted: string;
  @State() preventIncorrectTabOrder: boolean = false;
  @State() menuOptions: IcMenuOption[];

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
   *  If `true`, the menu will close when an option is selected.
   */
  @Prop() closeOnSelect: boolean = true;

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

  @Watch("open")
  watchOpenHandler(): void {
    if (!this.open && this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = null;
    }
  }

  /**
   * @internal - The parent element if ic-menu is nested inside another component.
   */
  @Prop() parentEl?: HTMLElement;

  /**
   * Specify the mode search bar uses to search. `navigation` allows for quick lookups of a set of values, `query` allows for more general searches.
   */
  @Prop() searchMode?: IcSearchBarSearchModes = "navigation";

  /**
   * @internal If `true`, the icOptionSelect event will be fired on enter instead of ArrowUp and ArrowDown.
   */
  @Prop() selectOnEnter?: boolean = false;

  /**
   * The size of the menu.
   */
  @Prop() size?: IcSizes = "default";

  /**
   * @deprecated This prop should not be used anymore. Set prop `size` to "small" instead.
   */
  @Prop() small?: boolean = false;

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
   * The value of the currently selected option - or array of values (if multiple options allowed).
   */
  @Prop({ mutable: true }) value!: string | string[];

  /**
   * The custom name for the value field for IcMenuOption.
   */
  @Prop() valueField: string = "value";

  /**
   * @internal Emitted when key is pressed while menu is open
   */
  @Event() menuKeyPress: EventEmitter<{ isNavKey: boolean; key: string }>;

  /**
   * @internal Emitted when an option has been highlighted.
   */
  @Event() menuOptionId: EventEmitter<IcMenuOptionIdEventDetail>;

  /**
   * @internal Emitted when an option is selected.
   */
  @Event() menuOptionSelect!: EventEmitter<IcOptionSelectEventDetail>;

  /**
   * @internal Emitted when all options are selected or deselected.
   */
  @Event() menuOptionSelectAll!: EventEmitter<{ select: boolean }>;

  /**
   * @internal Emitted when state of menu changes (i.e. open or close).
   */
  @Event() menuStateChange!: EventEmitter<IcMenuChangeEventDetail>;

  /**
   * @internal Emitted when the retry button is clicked.
   */
  @Event() retryButtonClicked: EventEmitter<IcValueEventDetail>;

  /**
   * @internal Emitted when the timeout menu loses focus.
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
    if (this.popperInstance) {
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

    if (this.open && this.options.length !== 0 && !this.preventMenuFocus) {
      if (
        this.value &&
        this.keyboardNav &&
        inputValueInOptions &&
        this.autoFocusOnSelected &&
        !this.isSearchableSelect
      ) {
        this.scrollToSelected(this.menu);
      } else if (
        optionHighlightedIsSet &&
        !this.focusFromSearchKeypress &&
        !this.preventIncorrectTabOrder
      ) {
        const highlightedEl = this.el.querySelector(
          `li[data-value="${this.optionHighlighted}"]`
        ) as HTMLElement;

        if (highlightedEl) {
          highlightedEl.focus();
        }
      } else if (
        this.inputEl.tagName !== "IC-TEXT-FIELD" &&
        this.inputEl.tagName !== "INPUT"
      ) {
        this.menu.focus();
      }
    }

    if (this.open && !this.value && this.selectOnEnter) {
      this.scrollToSelected(this.menu);
    }

    this.preventMenuFocus = false;
  }

  componentDidRender(): void {
    if (this.open && !this.popperInstance && this.anchorEl) {
      this.initPopperJs(this.anchorEl);
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
      this.manualSetInputValueKeyboardOpen(event);
    }
  }

  /**
   * @internal Used to highlight the first option in the menu.
   */
  @Method()
  async handleSetFirstOption(): Promise<void> {
    this.setHighlightedOption(0);
  }

  /**
   * @internal Used to initialize popperJS with an anchor element.
   * 5/12/2023: Tested with Floating UI, however, discovered inconsistent
   * boundary behaviour so sticking with PopperJS.
   */
  @Method()
  async initPopperJs(anchor: HTMLElement): Promise<void> {
    // Placements set to "-start" to accommodate for custom menu width - menu should always be aligned to the left
    this.popperInstance = createPopper(anchor, this.el, {
      placement: "bottom-start",
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
            fallbackPlacements: ["top-start"],
            rootBoundary: "viewport",
          },
        },
      ],
    });
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

    if (!open) {
      if (focusInput !== false) {
        this.inputEl.focus();
        this.preventClickOpen = false;
      }

      // Reset optionHighlighted so previously highlighted option doesn't get reselected when Enter pressed
      if (this.isMultiSelect) {
        this.optionHighlighted = undefined;
        this.multiOptionClicked = null;
      }
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
      parent.tagName === "IC-SELECT" ||
      parent.tagName === "IC-SELECT-WITH-MULTI"
    ) {
      if (
        parent.getAttribute("searchable") !== null &&
        parent.getAttribute("searchable") !== undefined
      ) {
        this.isSearchableSelect = true;
      } else if (
        parent.getAttribute("multiple") !== null &&
        parent.getAttribute("multiple") !== undefined
      ) {
        this.isMultiSelect = true;
      }
    }
  };

  // Open menu when up or down arrow keys are pressed
  private arrowBehaviour = (event: KeyboardEvent): void => {
    event.preventDefault();

    this.handleMenuChange(true);
  };

  private getMenuOptions = () =>
    this.isSearchBar ? this.options : this.ungroupedOptions;

  // Set option that is focused and so should show focus state
  private setHighlightedOption = (highlightedIndex: number): void => {
    const menuOptions = this.getMenuOptions();

    menuOptions[highlightedIndex] &&
      !menuOptions[highlightedIndex].timedOut &&
      (this.optionHighlighted =
        menuOptions[highlightedIndex][this.valueField] || undefined);
  };

  // Determines keyboard behaviour when selection is automatic
  // (i.e. you don't have to press Enter select an option - just focus on it)
  // and menu is closed
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
        if ((event.target as HTMLElement).id !== this.clearButtonId) {
          this.handleMenuChange(true);
        }
        break;
    }
  };

  private selectHighlightedOption = (
    target: EventTarget,
    options: IcMenuOption[],
    highlightedOptionIndex: number
  ) => {
    if (!this.isLoading && !this.hasTimedOut) {
      this.keyboardNav = true;
    }

    const isOpen: boolean =
      this.isSearchBar || this.isSearchableSelect || this.open;

    if (isOpen) {
      if (highlightedOptionIndex >= 0) {
        if (options[highlightedOptionIndex] !== undefined) {
          if (
            this.isSearchBar &&
            options[highlightedOptionIndex].disabled === true
          ) {
            this.disabledOptionSelected = true;
          } else {
            this.setInputValue(highlightedOptionIndex);
            this.value = options[highlightedOptionIndex][this.valueField];
          }
        }
      } else {
        this.setInputValue(highlightedOptionIndex);
      }
    } else if (
      (target as HTMLElement).id !== this.clearButtonId &&
      this.isMultiSelect
    ) {
      this.handleMenuChange(true);
    }
  };

  // Determines keyboard behaviour when selection is manual (i.e. when you have to press Enter to select an option)
  private manualSetInputValueKeyboardOpen = (event: KeyboardEvent) => {
    const menuOptions = this.getMenuOptions();

    this.keyboardNav = false;

    const highlightedOptionIndex = menuOptions.findIndex(
      (option) => option[this.valueField] === this.optionHighlighted
    );

    const clickedMultiOptionIndex = menuOptions.findIndex(
      (option) => option[this.valueField] === this.multiOptionClicked
    );

    const getOptionId = (index: number): string =>
      Array.from(this.el.querySelectorAll("li"))[index]?.id;

    // Space press should be equivalent to Enter when multi-select
    if (event.key === " " && this.isMultiSelect) {
      this.selectHighlightedOption(
        event.target,
        menuOptions,
        highlightedOptionIndex
      );
    } else {
      switch (event.key) {
        case "ArrowDown":
          this.keyboardNav = true;
          this.arrowBehaviour(event);
          if (this.multiOptionClicked) {
            // Set focus to option last clicked
            // Prevents it resetting to the top of the menu when user switches to using keyboard
            this.setHighlightedOption(clickedMultiOptionIndex);
            this.multiOptionClicked = null;
          } else if (highlightedOptionIndex < menuOptions.length - 1) {
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
          if (this.multiOptionClicked) {
            // Set focus to option last clicked
            // Prevents it resetting to the bottom of the menu when user switches to using keyboard
            this.setHighlightedOption(clickedMultiOptionIndex);
            this.multiOptionClicked = null;
          } else if (
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
        case " ":
          if (this.isSearchBar || this.isSearchableSelect) {
            break;
          } else {
            if ((event.target as HTMLElement).id !== this.clearButtonId) {
              this.handleMenuChange(true);
            }
          }
          break;
        case "Enter":
          event.preventDefault();
          this.selectHighlightedOption(
            event.target,
            menuOptions,
            highlightedOptionIndex
          );
          break;
        case "Escape":
          if (this.open) {
            event.stopImmediatePropagation();
          }
          this.handleMenuChange(false);
          this.menuOptionId.emit({ optionId: undefined });
          break;
        case "a":
          // Checks if Cmd (meta) key is pressed if Mac device (while excluding meta key on Windows)
          // Otherwise, if a different OS, checks Ctrl key
          if (
            (isMacDevice() && event.metaKey) ||
            (!isMacDevice() && event.ctrlKey)
          ) {
            this.emitSelectAll();
          }
          break;
        case "Shift":
        case "Tab":
          if (this.isSearchBar) {
            this.keyboardNav = true;
          }
          if (this.isMultiSelect) {
            if (this.open && !event.shiftKey && this.selectAllButton) {
              event.preventDefault();
              this.selectAllButton.focus(); // Move focus to select all button instead of focused option
              this.preventMenuFocus = true;
              this.preventClickOpen = true;
              this.optionHighlighted = undefined; // Stop any option focus states showing when focus moved to select all button
            }
          } else {
            this.preventIncorrectTabOrder = true;
          }
          break;
        case "Backspace":
          if (this.isSearchBar) {
            (this.parentEl as HTMLIcSearchBarElement).setFocus();
            if (this.searchMode === "navigation") this.setHighlightedOption(0);
          } else if (this.isSearchableSelect) {
            (this.parentEl as HTMLIcSelectWithMultiElement).setFocus();
          }
          this.focusFromSearchKeypress = true;
          break;
        default:
          if (event.key !== "Tab") {
            if (this.isSearchBar) {
              (this.parentEl as HTMLIcSearchBarElement).setFocus();
              if (this.searchMode === "navigation")
                this.setHighlightedOption(0);
            } else if (this.isSearchableSelect) {
              (this.parentEl as HTMLIcSelectWithMultiElement).setFocus();
            }
            this.focusFromSearchKeypress = true;
            break;
          }
      }
    }
  };

  private setInputValue = (highlightedOptionIndex: number) => {
    const menuOptions = this.getMenuOptions();

    if (menuOptions[highlightedOptionIndex] !== undefined) {
      this.menuOptionSelect.emit({
        value: menuOptions[highlightedOptionIndex][this.valueField],
      });

      if (this.closeOnSelect) {
        this.optionHighlighted = undefined;
        this.menuOptionId.emit({ optionId: undefined });
      }
    }

    if (this.closeOnSelect) {
      if (!this.hasTimedOut) {
        this.handleMenuChange(false);
      } else {
        (this.parentEl as HTMLIcSearchBarElement).setFocus();
      }
    }
  };

  private handleOptionClick = (event: Event): void => {
    const { value, label } = (event.target as HTMLLIElement).dataset;
    this.menuOptionSelect.emit({ value, label });
    this.optionHighlighted = undefined;

    if (this.isMultiSelect) {
      this.multiOptionClicked = value;
    } else {
      this.handleMenuChange(false);
    }
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
      if (
        !(
          this.menu.contains(event.relatedTarget as HTMLElement) ||
          event.relatedTarget === this.selectAllButton
        )
      ) {
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
    } else if (this.activationType === "manual" && !this.isSearchBar) {
      this.manualSetInputValueKeyboardOpen(event);
    }
  };

  private handleMenuKeyUp = (event: KeyboardEvent): void => {
    if (event.key === "Tab" && event.shiftKey) {
      this.preventClickOpen = false;
    }
    if (event.key === "Enter" && this.disabledOptionSelected) {
      this.disabledOptionSelected = false;
      event.stopImmediatePropagation();
    }
  };

  private handleSelectAllClick = () => {
    this.keyboardNav = false;
    this.menu.focus();
    this.emitSelectAll();
  };

  private handleSelectAllBlur = (event: FocusEvent) => {
    this.el.classList.remove("select-all-focused");
    if (!this.menu.contains(event.relatedTarget as HTMLElement)) {
      this.handleMenuChange(false, false);
    }
  };

  private handleSelectAllFocus = () => {
    this.el.classList.add("select-all-focused");
  };

  // Fix for Safari - select all button click was causing menu to close
  private handleSelectAllMouseDown = (event: Event) => {
    event.preventDefault();
  };

  private emitSelectAll = () => {
    // Select all if there is either no value or not all options are selected
    // 'true' means select all, 'false' means clear all
    this.menuOptionSelectAll.emit({
      select:
        !this.value || !(this.value?.length === this.ungroupedOptions.length),
    });
  };

  private emitMenuKeyPress = (isNavKey: boolean, key: string) => {
    this.menuKeyPress.emit({ isNavKey: isNavKey, key: key });
  };

  // Determines keyboard behaviour when selection is automatic
  // (i.e. you don't have to press Enter select an option - just focus on it)
  // and menu is focused
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
    const selectedOption = this.selectOnEnter
      ? (this.el.querySelector(
          `li[data-value="${this.optionHighlighted}"]`
        ) as HTMLElement)
      : (menu.querySelector(".option[aria-selected='true']") as HTMLElement);

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

  // Set 'ungroupedOptions' variable and emit its value
  // - this is all the options with disabled options and group titles removed
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
    this.el
      .querySelectorAll(".option")
      .forEach((option) => (optionsHeight += option.clientHeight));

    if (optionsHeight >= 320) {
      this.menu.classList.add("menu-scroll");
    }
  };

  private handleTimeoutBlur = (ev: FocusEvent) => {
    this.timeoutBlur.emit({ ev });
  };

  private optionContent = (option: IcMenuOption, selected: boolean) => {
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
          selected &&
          this.parentEl.tagName !== "IC-SEARCH-BAR" && (
            <span class="check-icon" innerHTML={Check} />
          )}
      </Fragment>
    );
  };

  private displayOption = (
    option: IcMenuOption,
    selected: boolean,
    index?: number,
    parentOption?: IcMenuOption
  ): HTMLLIElement => {
    const {
      open,
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
            : keyboardNav && selected,
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
          (selected || option[this.valueField] === optionHighlighted) &&
          keyboardNav
            ? "0"
            : "-1"
        }
        aria-label={this.getOptionAriaLabel(option, parentOption)}
        aria-selected={selected ? "true" : "false"}
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
                <g id="close-octagon">
                  <path
                    id="Vector"
                    d="M8.77 3L3.5 8.27V15.73L8.77 21H16.23L21.5 15.73V8.27L16.23 3M8.91 7L12.5 10.59L16.09 7L17.5 8.41L13.91 12L17.5 15.59L16.09 17L12.5 13.41L8.91 17L7.5 15.59L11.09 12L7.5 8.41"
                  />
                </g>
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
          this.optionContent(option, selected)
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
      size,
      small,
      open,
      inputEl,
      keyboardNav,
    } = this;

    const selectAllButtonText = `${
      value?.length === this.ungroupedOptions.length ? "Clear" : "Select"
    } all`;

    const hasNoResults = this.el.classList.contains("no-results");

    return (
      <Host
        class={{
          "full-width": fullWidth,
          "no-focus":
            inputEl?.tagName === "INPUT" ||
            hasTimedOut ||
            isLoading ||
            hasNoResults,
          small: small,
          [size]: true,
          open: open && options.length !== 0,
          multiple: this.isMultiSelect,
        }}
      >
        {options.length !== 0 && (
          <ul
            id={menuId}
            class="menu"
            role="listbox"
            aria-label={`${inputLabel} pop-up`}
            aria-multiselectable={this.isMultiSelect ? "true" : "false"}
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
                      {option.children.map(
                        (childOption) =>
                          childOption.label &&
                          this.displayOption(
                            childOption,
                            this.isMultiSelect
                              ? value?.includes(childOption[this.valueField])
                              : childOption[this.valueField] === value,
                            index,
                            option
                          )
                      )}
                    </div>
                  );
                } else {
                  return null;
                }
              } else {
                // Display option only if it has a label (rather than displaying an empty space)
                return (
                  option.label &&
                  this.displayOption(
                    option,
                    this.isMultiSelect
                      ? value?.includes(option[this.valueField])
                      : option[this.valueField] === value,
                    index
                  )
                );
              }
            })}
          </ul>
        )}
        {options.length !== 0 &&
          this.isMultiSelect &&
          !isLoading &&
          !hasTimedOut &&
          !hasNoResults && (
            <div class="option-bar">
              <ic-typography>
                <p>{`${
                  value ? value.length : 0
                }/${getOptionsWithoutGroupTitlesCount(
                  this.options
                )} selected`}</p>
              </ic-typography>
              <ic-button
                class="select-all-button"
                aria-label={`${selectAllButtonText} options for ${inputLabel}`}
                ref={(el: HTMLIcButtonElement) => (this.selectAllButton = el)}
                variant="tertiary"
                onClick={this.handleSelectAllClick}
                onMouseDown={this.handleSelectAllMouseDown}
                onBlur={this.handleSelectAllBlur}
                onFocus={this.handleSelectAllFocus}
                size={size === "small" ? "small" : "default"}
              >
                {selectAllButtonText}
              </ic-button>
            </div>
          )}
      </Host>
    );
  }
}
