import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Method,
  Prop,
  State,
  Watch,
  h,
} from "@stencil/core";
import {
  createPopper,
  Instance as PopperInstance,
  Options,
} from "@popperjs/core";
import { IcMenuOption, IcSizes } from "../../utils/types";
import Check from "../../assets/check-icon.svg";
import { Fragment } from "@stencil/core";
import { sanitizeHTMLIconString, sanitizeHTMLString } from "../../utils/common-helpers";
import { IcOptionSelectEventDetail } from "./ic-listbox.types";

@Component({
  tag: "ic-listbox",
  styleUrl: "ic-listbox.css",
  scoped: true,
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class Listbox {
  @Element() el!: HTMLIcListboxElement;
  private popperInstance: PopperInstance | null;
  private valueArr: string[] = [];

  @State() popperProps: Partial<Options> = {};

  @Prop() activedescendantIndex: number | null = null;

  /**
     * The reference to an anchor element the menu will position itself from when rendered.
  */
  @Prop() anchorEl?: HTMLElement;

  /**
   * The label for the input element.
   */
  @Prop() inputLabel!: string;

  /**
   * The ID of the menu.
   */
  @Prop() listboxId!: string;

  /**
     * The possible menu selection options.
     */
  @Prop() options!: IcMenuOption[];
  @Watch("options")
  watchOptionsHandler() {
    // this.loadFlattenedOptions();
  }

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
   * The size of the menu.
   */
  @Prop() size: IcSizes = "medium";
  
  @Prop() value: string | string[] | null = null;
  @Watch("value")
  valueChangedHandler(newValue: string | string[] | null) {
    this.valueArr = newValue ? newValue.toString().split(",") : [];
  };

  @Prop() hasSelectAll = false;

  /**
   * @internal Emitted when the flattened options have been set.
   */
  @Event() flatttenedOptionsSet: EventEmitter<{ options: IcMenuOption[] }>;

  /**
   * @internal Emitted when an option is selected.
   */
  @Event() menuOptionSelect!: EventEmitter<IcOptionSelectEventDetail>;

  /**
   * Emitted when the clear all button is clicked.
   */
  @Event() icClear: EventEmitter<void>;

  /**
   * @internal Emitted when all options are selected or deselected.
   */
  @Event() menuOptionSelectAll!: EventEmitter<{ select: boolean }>;

  disconnectedCallback(): void {
    this.popperInstance?.destroy();
  };

  componentWillLoad(): void {
    this.valueArr = this.value ? this.value.toString().split(",") : [];
  };

  componentDidRender(): void {
    if (this.open && !this.popperInstance && this.anchorEl) {
      this.initPopperJs(this.anchorEl);
    }
  };

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

  private getOptionId = (optionValue: string): string => {
    return `${this.listboxId}-${optionValue}`;
  };

  private optionHasVisualFocus = (optionValue: string): boolean => {
    const descendants: (HTMLLIElement | HTMLIcButtonElement)[] = Array.from(this.el.querySelectorAll('[role="option"]'));
    const selectAllBtn = this.el.querySelector<HTMLIcButtonElement>(`#${this.getOptionId("select-all")}`);
    if (selectAllBtn) descendants.unshift(selectAllBtn);
    // const descendants = [this.el.querySelector<HTMLIcButtonElement>(`#${this.getOptionId("select-all")}`), ...optionEls];
    return this.activedescendantIndex !== null
      ? descendants[this.activedescendantIndex]?.dataset.value === optionValue
      : false
  };

  private handleOptionClick = (event: MouseEvent) => {
    const { value, label } = (event.currentTarget as HTMLLIElement).dataset;
    this.menuOptionSelect.emit({value, label});
  };

  private handleSelectAllClick = () => {
    this.emitSelectAllEvents();
  }

  // Fix for Safari - select all button click was causing menu to close
  private handleSelectAllMouseDown = (event: Event) => {
    event.preventDefault();
  };

  private emitSelectAllEvents = () => {
    // Select all if there is either no value or not all options are selected
    // 'true' means select all, 'false' means clear all
    const optionEls: HTMLLIElement[] = Array.from(this.el.querySelectorAll('[role="option"]'));
    console.log("firing event");
    this.menuOptionSelectAll.emit({
      select:
        !this.value || !(this.valueArr.length === optionEls.length),
    });
    // Emit clear event if all options are selected
    if (this.valueArr.length === optionEls.length) {
      this.icClear.emit();
    }
  };

  private isLastRecommendedOption = (option: IcMenuOption) => {
    const optionEls: HTMLLIElement[] = Array.from(this.el.querySelectorAll('[role="option"]'));
    let optionIndex = optionEls.findIndex(el => el.dataset.value === option.value);
    const nextOptionEl = optionEls[++optionIndex];

    return !!option.recommended &&
      !!nextOptionEl &&
      nextOptionEl.dataset.recommended === undefined
  };

  private getSelectedOptionsText = () => {
    const optionEls: HTMLLIElement[] = Array.from(this.el.querySelectorAll('[role="option"]'));
    const total = optionEls.length;
    const numberSelected = optionEls.filter(el => this.valueArr.includes(el.dataset.value || "")).length || 0;
    return `${numberSelected}/${total} selected`
  }

  render () {
    const {
      hasSelectAll,
      inputLabel,
      listboxId,
      options,
      open,
      size,
      valueArr,
    } = this;

    const renderOptionContent = (option: IcMenuOption): HTMLElement => {
    const isSelected = valueArr.includes(option.value);

      return (
        <Fragment>
          {option.loading && <ic-loading-indicator size="icon" />}
          <div
            class={{
              "option-text-container": true,
              "show-check-icon": isSelected,
            }}
          >
            <div class="option-label">
              {option.icon && (
                <div
                  class="option-icon"
                  innerHTML={sanitizeHTMLIconString(option.icon)}
                ></div>
              )}
              <ic-typography variant="body">
                {option.label}
              </ic-typography>
            </div>
            {option.description && (
              <ic-typography
                id={`${this.getOptionId(option.value)}-description`}
                class="option-description"
                variant="caption"
              >
                <p>{option.description}</p>
              </ic-typography>
            )}
            {option.element && (
              <div
                class="option-element"
                innerHTML={sanitizeHTMLString(option.element.component)}
              ></div>
            )}
          </div>
          {isSelected && <span class="check-icon" innerHTML={Check} />}
        </Fragment>
      )
    };

    const renderOption = (option: IcMenuOption) => {
      if (option.children && option.children.length > 0) {
        const groupTitleId = `group-title-${option["label"].toLowerCase().replace(/\s+/g, '')}`;
        return (
          <ul role="group" aria-labelledby={groupTitleId}>
            <li role="presentation" id={groupTitleId}>
              <ic-typography
                class="option-group-title"
                role="presentation"
                variant="subtitle-small"
              >
                <p>{option["label"]}</p>
              </ic-typography>
            </li>
            {option.children.map(child => renderOption(child))}
          </ul>
        )
      } else {
        return (
          <li
            id={this.getOptionId(option.value)}
            role="option"
            onClick={this.handleOptionClick}
            class={{
              "option": true,
              "focused-option": this.optionHasVisualFocus(option.value),
              "last-recommended-option": this.isLastRecommendedOption(option),
            }}
            data-value={option["value"]}
            data-label={option["label"]}
            data-recommended={option["recommended"]}
          >
            {renderOptionContent(option)}
          </li>
        )
      }
    };

    const optionEls: HTMLLIElement[] = Array.from(this.el.querySelectorAll('[role="option"]'));
    const selectAllButtonText = `${
      valueArr.length === optionEls.length ? "Clear" : "Select"
    } all`;

    return (
      <Host
        class={{
          "ic-listbox-open": open && options.length !== 0,
        }}
      >
        <ul
          role="listbox"
          class="listbox"
          id={listboxId}
        >
          {options.map(option => {
            return renderOption(option);
          })}
        </ul>
        {options.length !== 0 &&
          hasSelectAll && (
            <div class="option-bar">
              <ic-typography>
                <p>{this.getSelectedOptionsText()}</p>
              </ic-typography>
              <ic-button
                class={{
                  "select-all-button": true,
                  "select-all-button-focus": this.optionHasVisualFocus("select-all"),
                }}
                aria-label={`${selectAllButtonText} options for ${inputLabel}`}
                id={this.getOptionId("select-all")}
                data-value="select-all"
                variant="tertiary"
                onClick={this.handleSelectAllClick}
                onMouseDown={this.handleSelectAllMouseDown}
                size={size === "small" ? "small" : "medium"}
              >
                {selectAllButtonText}
              </ic-button>
            </div>
          )}
      </Host>
    )
  }
}
