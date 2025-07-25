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
import {
  createPopper,
  Instance as PopperInstance,
  Options,
} from "@popperjs/core";

import {
  IcActivationTypes,
  IcMenuOption,
  IcSizes,
  IcMultiValueEventDetail,
} from "../../utils/types";
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
} from "./ic-menu.types";
import { IcSearchBarSearchModes } from "../ic-search-bar/ic-search-bar.types";

@Component({
  tag: "ic-menu",
  styleUrl: "ic-menu.css",
  scoped: true,
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class Menu {
  private ACTIVE_DESCENDANT = "aria-activedescendant";
  private CLEAR_BUTTON_ID = "clear-button";
  private SEARCH_BAR_TAG = "IC-SEARCH-BAR";
  private disabledOptionSelected = false;
  private hasPreviouslyBlurred = false;
  private hasTimedOut = false;
  private isLoading = false;
  private lastOptionSelected: number | null = null; // Index of last option selected
  private lastOptionFocused: number | null = null; // Index of last option focused
  private menu?: HTMLUListElement;
  private multiOptionClicked: string | null = null;
  private popperInstance: PopperInstance | null;
  private preventClickOpen = false; // Prevents menu re-opening immediately after it is closed on blur when clicking input.
  private preventMenuFocus = false; // (When multiple) ensures focus moves straight to select all button from menu.
  private selectAllButton?: HTMLIcButtonElement;
  private shiftPressed = false;
  private ungroupedOptions: IcMenuOption[] = [];

  @Element() host: HTMLIcMenuElement;

  @State() focusFromSearchKeypress = false;
  @State() initialOptionsListRender = false;
  @State() keyboardNav = false;
  @State() optionHighlighted?: string;
  @State() preventIncorrectTabOrder = false;
  @State() menuOptions: IcMenuOption[];
  @State() popperProps: Partial<Options> = {};

  /**
   * Determines whether options manually set as values (by pressing 'Enter') when they receive focus using keyboard navigation.
   */
  @Prop() activationType: IcActivationTypes = "automatic";

  /**
   * The reference to an anchor element the menu will position itself from when rendered.
   */
  @Prop() anchorEl?: HTMLElement;

  /**
   * @internal If `true`, autofocus will be applied on selected item when menu is open.
   */
  @Prop() autofocusOnSelected = true;

  /**
   *  If `true`, the menu will close when an option is selected.
   */
  @Prop() closeOnSelect = true;

  /**
   *  If `true`, the menu will fill the width of the container.
   */
  @Prop() fullWidth = false;

  /**
   * The reference to the input element.
   */
  @Prop() inputEl?: HTMLElement;

  /**
   * The label for the input element.
   */
  @Prop() inputLabel!: string;

  /**
   * The custom name for the label field for IcMenuOption.
   */
  @Prop() labelField = "label";

  /**
   * The ID of the menu.
   */
  @Prop() menuId!: string;

  /**
   * @internal - flag to specify if menu is in a ic-select multiple.
   */
  @Prop() multiSelect = false;

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
   * @internal - flag to specify if menu is in a searchable ic-select.
   */
  @Prop() searchableSelect = false;

  /**
   * @internal - flag to specify if menu is in a ic-search-bar.
   */
  @Prop() searchBar = false;

  /**
   * Specify the mode search bar uses to search. `navigation` allows for quick lookups of a set of values, `query` allows for more general searches.
   */
  @Prop() searchMode: IcSearchBarSearchModes = "navigation";

  /**
   * @internal If `true`, the icOptionSelect event will be fired on enter instead of ArrowUp and ArrowDown.
   */
  @Prop() selectOnEnter: boolean = false;

  /**
   * The size of the menu.
   */
  @Prop() size: IcSizes = "medium";

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
  @Prop() value!: string | string[];

  /**
   * The custom name for the value field for IcMenuOption.
   */
  @Prop() valueField = "value";

  /**
   * Emitted when the clear all button is clicked.
   */
  @Event() icClear: EventEmitter<void>;

  /**
   * @internal Emitted when key is pressed while menu is open.
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
   * @internal Emitted when state of menu changes (i.e. open or closed).
   */
  @Event() menuStateChange!: EventEmitter<IcMenuChangeEventDetail>;

  /**
   * @internal Emitted when the retry button is clicked.
   */
  @Event() retryButtonClicked: EventEmitter<IcMultiValueEventDetail>;

  /**
   * @internal Emitted when the timeout menu loses focus.
   */
  @Event() timeoutBlur: EventEmitter<{ ev: FocusEvent }>;

  /**
   * @internal Emitted when the ungrouped options have been set.
   */
  @Event() ungroupedOptionsSet: EventEmitter<{ options: IcMenuOption[] }>;

  connectedCallback(): void {
    if (this.searchBar) {
      if (this.searchMode === "navigation") this.setHighlightedOption(0);
      this.initialOptionsListRender = true;
    }
  }

  disconnectedCallback(): void {
    this.popperInstance?.destroy();
    this.parentEl?.removeEventListener("icClear", this.handleClearListener);
    this.parentEl?.removeEventListener(
      "icSubmitSearch",
      this.handleSubmitSearch
    );
  }

  componentWillLoad(): void {
    this.loadUngroupedOptions();
    this.parentEl?.addEventListener("icClear", this.handleClearListener);
    this.parentEl?.addEventListener("icSubmitSearch", this.handleSubmitSearch);
    this.hasTimedOut = this.options?.some((opt) => opt.timedOut);
    this.isLoading = this.options?.some((opt) => opt.loading);
  }

  componentDidLoad(): void {
    if (
      this.searchBar &&
      (this.parentEl as HTMLIcSearchBarElement).disableAutoFiltering
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
    const inputValueInOptions = this.options.some(
      (option) => option[this.valueField] === this.value
    );

    if (
      this.menu &&
      this.open &&
      this.options.length !== 0 &&
      !this.preventMenuFocus
    ) {
      if (
        this.value &&
        this.keyboardNav &&
        inputValueInOptions &&
        this.autofocusOnSelected &&
        !this.searchableSelect
      ) {
        this.scrollToSelected(this.menu);
      } else if (this.selectOnEnter) {
        this.menu.focus();
      } else if (
        !!this.optionHighlighted &&
        !this.focusFromSearchKeypress &&
        !this.preventIncorrectTabOrder
      ) {
        const highlightedEl = this.host.querySelector(
          `li[data-value="${this.optionHighlighted}"]`
        ) as HTMLElement;

        if (highlightedEl) {
          this.menu.setAttribute(this.ACTIVE_DESCENDANT, highlightedEl.id);
          highlightedEl.focus();
        }
      } else if (this.inputEl && this.inputEl.tagName !== "INPUT") {
        this.menu.focus();
      }
    }

    if (this.menu && this.open && !this.value && this.selectOnEnter) {
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
   * @param {KeyboardEvent} event The keyboard event which is available when handleKeyboardOpen is invoked.
   */
  @Method()
  async handleKeyboardOpen(event: KeyboardEvent): Promise<void> {
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
    this.popperInstance = createPopper(anchor, this.host, {
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
      ...this.popperProps,
    });
  }

  /**
   * @internal This method allows props to be added to the PopperJS createPopper instance outside of the menu
   * @param props object - createPopper props set externally
   */
  @Method()
  async setExternalPopperProps<T extends Partial<Options>>(props: T) {
    this.popperProps = props;
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
        this.inputEl?.focus();
        this.preventClickOpen = false;
      }

      // Reset optionHighlighted so previously highlighted option doesn't get reselected when Enter pressed
      if (this.multiSelect) {
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

  // Open menu when up or down arrow keys are pressed
  private arrowBehaviour = (event: KeyboardEvent): void => {
    event.preventDefault();
    this.handleMenuChange(true);
  };

  private getMenuOptions = () =>
    this.searchBar ? this.options : this.ungroupedOptions;

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
        if ((event.target as HTMLElement).id !== this.CLEAR_BUTTON_ID) {
          this.handleMenuChange(true);
        }
        break;
    }
  };

  private selectHighlightedOption = (
    options: IcMenuOption[],
    highlightedOptionIndex: number
  ) => {
    if (!this.isLoading && !this.hasTimedOut) {
      this.keyboardNav = true;
    }

    const isOpen: boolean =
      this.searchBar || this.searchableSelect || this.open;

    if (isOpen) {
      if (highlightedOptionIndex >= 0) {
        if (options[highlightedOptionIndex] !== undefined) {
          if (
            this.searchBar &&
            options[highlightedOptionIndex].disabled === true
          ) {
            this.disabledOptionSelected = true;
          } else {
            this.setInputValue(highlightedOptionIndex);
          }
        }
      } else {
        this.setInputValue(highlightedOptionIndex);
      }
    } else {
      this.handleMenuChange(true);
    }
  };

  // Check if option is selected based on the index of the option
  private isOptionSelected = (index: number) => {
    const menuOptions = this.getMenuOptions();

    return this.value
      ? this.value.includes(menuOptions[index][this.valueField])
      : false;
  };

  // Deselect currently selected options when shift pressed, but keep certain options selected
  private deselectSelectedOptions = (optionsToKeepSelected: number[]) => {
    const menuOptions = this.getMenuOptions();

    if (this.value) {
      const selectedOptionIndexes = (this.value as string[]).map((value) => {
        return menuOptions.findIndex(
          (option) => option[this.valueField] === value
        );
      });

      // Call setInputValue (which toggles the selected state) on options that need to be deselected
      selectedOptionIndexes.forEach(
        (index) =>
          !optionsToKeepSelected.includes(index) && this.setInputValue(index)
      );
    }
  };

  // Determines keyboard behaviour when selection is manual (i.e. when you have to press Enter to select an option)
  private manualSetInputValueKeyboardOpen = (event: KeyboardEvent) => {
    const menuOptions = this.getMenuOptions();

    // For preventing focus disappearing on currently focused option when Shift / Cmd / Ctrl pressed
    // (i.e. when user is likely in the middle of executing a keyboard combination to select options)
    const isKeyboardCombination =
      event.shiftKey || event.metaKey || event.ctrlKey;

    const highlightedOptionIndex = this.getOptionHighlightedIndex();

    const clickedMultiOptionIndex = menuOptions.findIndex(
      (option) => option[this.valueField] === this.multiOptionClicked
    );

    const getOptionId = (index: number): string =>
      Array.from(this.host.querySelectorAll("li"))[index]?.id;

    // Space press should be equivalent to Enter when multi-select
    if (event.key === " " && this.multiSelect) {
      this.handleOptionSelect(event, highlightedOptionIndex);
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
          } else {
            this.handleSingleShiftSelect(
              event,
              highlightedOptionIndex,
              menuOptions
            );

            if (highlightedOptionIndex < menuOptions.length - 1) {
              this.setHighlightedOption(highlightedOptionIndex + 1);
              this.menuOptionId.emit({
                optionId: getOptionId(highlightedOptionIndex + 1),
              });

              this.handleSingleShiftSelect(
                event,
                highlightedOptionIndex + 1,
                menuOptions
              );
            } else {
              this.setHighlightedOption(0);
              this.menuOptionId.emit({
                optionId: getOptionId(0),
              });

              this.handleSingleShiftSelect(event, 0, menuOptions);
            }

            // Deselect currently selected options if arrow was pressed for first time after shift is held
            if (this.multiSelect && this.shiftPressed) {
              this.deselectSelectedOptions([
                highlightedOptionIndex,
                this.getOptionHighlightedIndex(),
              ]);
              this.shiftPressed = false;
            }
          }
          this.lastOptionFocused = this.getOptionHighlightedIndex();
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
          } else {
            this.handleSingleShiftSelect(
              event,
              highlightedOptionIndex,
              menuOptions
            );

            if (
              highlightedOptionIndex <= 0 ||
              highlightedOptionIndex > menuOptions.length + 1
            ) {
              this.setHighlightedOption(menuOptions.length - 1);
              this.menuOptionId.emit({
                optionId: getOptionId(menuOptions.length - 1),
              });

              this.handleSingleShiftSelect(
                event,
                menuOptions.length - 1,
                menuOptions
              );
            } else {
              this.setHighlightedOption(highlightedOptionIndex - 1);
              this.menuOptionId.emit({
                optionId: getOptionId(highlightedOptionIndex - 1),
              });

              this.handleSingleShiftSelect(
                event,
                highlightedOptionIndex - 1,
                menuOptions
              );
            }

            // Deselect currently selected options if arrow was pressed for first time after shift is held
            if (this.multiSelect && this.shiftPressed) {
              this.deselectSelectedOptions([
                highlightedOptionIndex,
                this.getOptionHighlightedIndex(),
              ]);
              this.shiftPressed = false;
            }
          }

          this.lastOptionFocused = this.getOptionHighlightedIndex();
          this.preventIncorrectTabOrder = false;
          this.focusFromSearchKeypress = false;
          break;
        case "Home": {
          const startOptionIndex = 0;

          this.keyboardNav = true;
          event.preventDefault();
          this.arrowBehaviour(event);
          this.setHighlightedOption(startOptionIndex);
          this.menuOptionId.emit({
            optionId: getOptionId(startOptionIndex),
          });

          if (event.shiftKey && event.ctrlKey) {
            this.handleMultipleShiftSelect(startOptionIndex);
          }

          this.lastOptionFocused = startOptionIndex;
          this.lastOptionSelected = startOptionIndex;
          break;
        }
        case "End": {
          const endOptionIndex = menuOptions.length - 1;

          this.keyboardNav = true;
          event.preventDefault();
          this.arrowBehaviour(event);
          this.setHighlightedOption(endOptionIndex);
          this.menuOptionId.emit({
            optionId: getOptionId(endOptionIndex),
          });

          if (event.shiftKey && event.ctrlKey) {
            this.handleMultipleShiftSelect(endOptionIndex);
          }

          this.lastOptionFocused = endOptionIndex;
          this.lastOptionSelected = endOptionIndex;
          break;
        }
        case " ":
          if (!isKeyboardCombination) {
            this.keyboardNav = false;
          }
          if (this.searchBar || this.searchableSelect) {
            break;
          } else {
            if ((event.target as HTMLElement).id !== this.CLEAR_BUTTON_ID) {
              this.handleMenuChange(true);
            }
          }
          break;
        case "Enter":
          event.preventDefault();
          if (!isKeyboardCombination) {
            this.keyboardNav = false;
          }
          this.handleOptionSelect(event, highlightedOptionIndex);
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
            this.emitSelectAllEvents();
            this.lastOptionFocused = null;
            this.lastOptionSelected = null;
          }
          break;
        case "Shift":
        case "Tab":
          if (event.key === "Shift") {
            this.shiftPressed = true;
          }
          if (this.searchBar) {
            this.keyboardNav = true;
          }
          if (this.multiSelect) {
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
        default:
          if (!isKeyboardCombination) {
            this.keyboardNav = false;
          }
          this.focusOnSearchOrSelectInput(menuOptions, highlightedOptionIndex);
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

  private handleOptionClick = (event: MouseEvent): void => {
    const { value, label } = (event.target as HTMLLIElement).dataset;

    if (this.multiSelect) {
      const menuOptions = this.getMenuOptions();
      const selectedOptionIndex = menuOptions.findIndex(
        (option) => option.value === value
      );

      this.handleOptionSelect(event, selectedOptionIndex, true);
      this.multiOptionClicked = value || null;
    } else {
      this.menuOptionSelect.emit({ value, label });
      this.handleMenuChange(false);
    }

    this.optionHighlighted = undefined;
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
      if (event.relatedTarget === this.selectAllButton) {
        this.menu?.removeAttribute(this.ACTIVE_DESCENDANT);
      }

      if (
        !(
          this.menu?.contains(event.relatedTarget as HTMLElement) ||
          event.relatedTarget === this.selectAllButton
        )
      ) {
        this.handleMenuChange(false, this.hasPreviouslyBlurred);
        this.menu?.removeAttribute(this.ACTIVE_DESCENDANT);
        this.lastOptionFocused = null;
        this.lastOptionSelected = null;
      }
    } else {
      this.handleMenuChange(false);
      this.preventClickOpen = true;
      this.menu?.removeAttribute(this.ACTIVE_DESCENDANT);
      this.lastOptionFocused = null;
      this.lastOptionSelected = null;
    }
    if (!this.searchBar) this.hasPreviouslyBlurred = !!event.relatedTarget;
  };

  private handleMouseDown = (event: Event): void => {
    event.preventDefault();
  };

  private handleMenuKeyDown = (event: KeyboardEvent) => {
    if (this.activationType === "automatic") {
      this.autoSetValueOnMenuKeyDown(event);
    } else if (this.activationType === "manual" && !this.searchBar) {
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

    if (event.key === "Shift") {
      this.shiftPressed = false;
    }
  };

  private handleSelectAllClick = () => {
    this.keyboardNav = false;
    this.menu?.focus();
    this.emitSelectAllEvents();
    this.lastOptionFocused = null;
    this.lastOptionSelected = null;
  };

  private handleSelectAllBlur = (event: FocusEvent) => {
    this.host.classList.remove("ic-select-select-all-focused");
    if (!this.menu?.contains(event.relatedTarget as HTMLElement)) {
      this.handleMenuChange(false, false);
    }
  };

  private handleSelectAllFocus = () => {
    this.host.classList.add("ic-select-select-all-focused");
    this.lastOptionFocused = null;
    this.lastOptionSelected = null;
  };

  // Fix for Safari - select all button click was causing menu to close
  private handleSelectAllMouseDown = (event: Event) => {
    event.preventDefault();
  };

  // When shift key is being used to select contiguous options one by one on a multi-select
  // I.e. holding shift and pressing up and down arrow keys
  private handleSingleShiftSelect = (
    event: KeyboardEvent,
    optionToSelectIndex: number,
    options: IcMenuOption[]
  ) => {
    if (
      this.multiSelect &&
      event.shiftKey &&
      !this.isOptionSelected(optionToSelectIndex)
    ) {
      this.selectHighlightedOption(options, optionToSelectIndex);
      this.lastOptionSelected = optionToSelectIndex;
    }
  };

  // When shift key is being used to select multiple options at once on a multi-select
  // I.e. holding shift when selecting another option
  private handleMultipleShiftSelect = (
    lastOptionInSelection: number,
    useFocusForSelection = false,
    firstOptionSelected: number | null = null
  ) => {
    this.shiftPressed = false;

    const firstOptionInSelection =
      firstOptionSelected === null
        ? this.getFirstOptionInSelection(useFocusForSelection)
        : firstOptionSelected;
    if (firstOptionInSelection !== null) {
      const optionsToSelect = [];

      if (firstOptionInSelection < lastOptionInSelection) {
        for (
          let i = firstOptionInSelection;
          i < lastOptionInSelection + 1;
          i++
        ) {
          optionsToSelect.push(i);
        }
      } else {
        for (
          let i = firstOptionInSelection;
          i > lastOptionInSelection - 1;
          i--
        ) {
          optionsToSelect.push(i);
        }
      }

      optionsToSelect.forEach(
        (optionIndex) =>
          !this.isOptionSelected(optionIndex) && this.setInputValue(optionIndex)
      );
      this.deselectSelectedOptions(optionsToSelect);
    }
  };

  private handleOptionSelect = (
    event: KeyboardEvent | MouseEvent,
    optionIndex: number,
    useFocusForSelection = false
  ) => {
    const menuOptions = this.getMenuOptions();
    const firstOptionInSelection =
      this.getFirstOptionInSelection(useFocusForSelection);
    if (event.shiftKey && firstOptionInSelection !== null) {
      this.handleMultipleShiftSelect(
        optionIndex,
        useFocusForSelection,
        firstOptionInSelection
      );
    } else {
      this.selectHighlightedOption(menuOptions, optionIndex);
    }

    this.lastOptionFocused = optionIndex;
    this.lastOptionSelected = optionIndex;
  };

  private getFirstOptionInSelection = (
    useFocusForSelection: boolean
  ): number | null => {
    return useFocusForSelection && this.lastOptionFocused !== null
      ? this.lastOptionFocused
      : this.lastOptionSelected !== null
      ? this.lastOptionSelected
      : null;
  };

  private emitSelectAllEvents = () => {
    // Select all if there is either no value or not all options are selected
    // 'true' means select all, 'false' means clear all
    this.menuOptionSelectAll.emit({
      select:
        !this.value || !(this.value?.length === this.ungroupedOptions.length),
    });
    // Emit clear event if all options are selected
    if (this.value?.length === this.ungroupedOptions.length) {
      this.icClear.emit();
    }
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

    const isSearchableSelect =
      !!this.inputEl && this.inputEl.tagName === "INPUT";

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
          this.inputEl?.focus();
        }
        break;
      case "Shift":
        break;
      default:
        if (isSearchableSelect && event.key !== "Tab" && !this.hasTimedOut) {
          this.inputEl?.focus();
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
    parentOption?: IcMenuOption
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

  private getOptionHighlightedIndex = () => {
    const menuOptions = this.getMenuOptions();

    return menuOptions.findIndex(
      (option) => option[this.valueField] === this.optionHighlighted
    );
  };

  private isManualMode = this.activationType === "manual";

  private scrollToSelected = (menu: HTMLUListElement) => {
    const selectedOption = this.selectOnEnter
      ? (this.host.querySelector(
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
      // 'aria-activedescendant' affects screen reader focus
      // https://www.w3.org/TR/2017/WD-wai-aria-practices-1.1-20170628/#kbd_focus_activedescendant
      this.menu?.setAttribute(this.ACTIVE_DESCENDANT, selectedOption.id);
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
    this.host
      .querySelectorAll(".option, .option-group-title")
      .forEach((option) => (optionsHeight += option.clientHeight));

    if (optionsHeight >= 320) {
      this.menu?.classList.add("menu-scroll");
    }
  };

  private handleTimeoutBlur = (ev: FocusEvent) => {
    this.timeoutBlur.emit({ ev });
  };

  private focusOnSearchOrSelectInput(
    menuOptions: IcMenuOption[],
    highlightedOptionIndex: number
  ) {
    if (!menuOptions[highlightedOptionIndex]) return;

    if (this.searchBar) {
      (this.parentEl as HTMLIcSearchBarElement).setFocus();
      if (this.searchMode === "navigation") this.setHighlightedOption(0);
    }

    if (this.searchableSelect) {
      (this.parentEl as HTMLIcSelectElement).setFocus();
    }

    this.focusFromSearchKeypress = true;
  }

  private optionContent = (option: IcMenuOption, selected: boolean) => {
    const showCheckIcon =
      !!option[this.valueField] &&
      !!this.value &&
      selected &&
      this.parentEl?.tagName !== this.SEARCH_BAR_TAG;

    return (
      <Fragment>
        {option.loading && <ic-loading-indicator size="icon" />}
        <div
          class={{
            "option-text-container": true,
            "show-check-icon": showCheckIcon,
          }}
        >
          <div class="option-label">
            {option.icon && (
              <div
                class="option-icon"
                innerHTML={option.icon}
                aria-hidden="true"
              ></div>
            )}
            <ic-typography variant="body" aria-hidden="true">
              {option[this.labelField]}
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
        {showCheckIcon && <span class="check-icon" innerHTML={Check} />}
      </Fragment>
    );
  };

  private displayOption = (
    option: IcMenuOption,
    selected: boolean,
    index: number,
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
          "last-recommended-option": !!(
            option.recommended &&
            options[index + 1] &&
            !options[index + 1].recommended
          ),
          "disabled-option": !!option.disabled,
          "loading-option": !!option.loading,
          timeout: !!option.timedOut,
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
        onClick={
          !option.timedOut && !option.loading
            ? this.handleOptionClick
            : undefined
        }
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
      open,
      inputEl,
      keyboardNav,
      parentEl,
      SEARCH_BAR_TAG,
      multiSelect,
    } = this;

    const selectAllButtonText = `${
      value?.length === this.ungroupedOptions.length ? "Clear" : "Select"
    } all`;

    const hasNoResults = this.host.classList.contains("no-results");

    return (
      <Host
        class={{
          "ic-menu-full-width": !!fullWidth,
          "ic-menu-no-focus":
            (inputEl?.tagName === "INPUT" &&
              parentEl?.tagName !== SEARCH_BAR_TAG) ||
            hasTimedOut ||
            isLoading,
          [`ic-menu-${size}`]: true,
          "ic-menu-open": open && options.length !== 0,
          "ic-menu-multiple": multiSelect,
        }}
      >
        {options.length !== 0 && (
          <ul
            id={menuId}
            class="menu"
            role="listbox"
            aria-label={`${inputLabel} pop-up`}
            aria-multiselectable={multiSelect ? "true" : "false"}
            tabindex={
              open &&
              !keyboardNav &&
              (inputEl?.tagName !== "INPUT" ||
                parentEl?.tagName === SEARCH_BAR_TAG)
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
                        <p>{option[this.labelField]}</p>
                      </ic-typography>
                      {option.children.map(
                        (childOption) =>
                          childOption.label &&
                          this.displayOption(
                            childOption,
                            multiSelect
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
                    multiSelect
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
          multiSelect &&
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
                ref={(el) => (this.selectAllButton = el)}
                variant="tertiary"
                onClick={this.handleSelectAllClick}
                onMouseDown={this.handleSelectAllMouseDown}
                onBlur={this.handleSelectAllBlur}
                onFocus={this.handleSelectAllFocus}
                size={size === "small" ? "small" : "medium"}
              >
                {selectAllButtonText}
              </ic-button>
            </div>
          )}
      </Host>
    );
  }
}
