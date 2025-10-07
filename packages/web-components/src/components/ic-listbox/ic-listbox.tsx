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
import { IcMenuOption } from "../../utils/types";
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
  private flattenedOptions: IcMenuOption[] = [];
  private valueArr: string[] = [];

  @State() popperProps: Partial<Options> = {};

  @Prop() activedescendantIndex: number | null = null;

  /**
     * The reference to an anchor element the menu will position itself from when rendered.
  */
  @Prop() anchorEl?: HTMLElement;

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
  
  @Prop() value: string | string[] | null = null;
  @Watch("value")
  valueChangedHandler(newValue: string | string[] | null) {
    this.valueArr = newValue ? newValue.toString().split(",") : [];
  };

  /**
   * @internal Emitted when the flattened options have been set.
   */
  @Event() flatttenedOptionsSet: EventEmitter<{ options: IcMenuOption[] }>;

  /**
   * @internal Emitted when an option is selected.
   */
  @Event() menuOptionSelect!: EventEmitter<IcOptionSelectEventDetail>;

  disconnectedCallback(): void {
    this.popperInstance?.destroy();
  }

  componentWillLoad(): void {
    // this.loadFlattenedOptions();
    this.valueArr = this.value ? this.value.toString().split(",") : [];
  }

  componentDidRender(): void {
    if (this.open && !this.popperInstance && this.anchorEl) {
      this.initPopperJs(this.anchorEl);
    }
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

  /**
   * Flattens options with children so they can be referenced by index
   * Sorts options and removes disabled options
   */
  // private loadFlattenedOptions = () => {
  //   const flattenedOptions: IcMenuOption[] = [];
  //   if (this.options.length > 0 && this.options.map) {
  //       this.options.map((option) => {
  //         if (option.children) {
  //           option.children.map(
  //             (option) => !option.disabled && flattenedOptions.push(option)
  //           );
  //         } else if (!option.disabled) {
  //           flattenedOptions.push(option);
  //         }
  //       });
  //     }
  //   // this.flattenedOptions = this.getSortedOptions(flattenedOptions);
  //   // this.flatttenedOptionsSet.emit({ options: this.flattenedOptions });
  //   this.flattenedOptions = flattenedOptions;
  // };

  // private getSortedOptions = (options: IcMenuOption[]): IcMenuOption[] => {
  //   let sorted: IcMenuOption[] = [];
  //   if (options.sort) {
  //     sorted = options.sort((optionA, optionB) =>
  //       optionA.recommended && !optionB.recommended ? -1 : 0
  //     );
  //   }
  //   return sorted;
  // };

  private getOptionId = (optionValue: string): string => {
    return `${this.listboxId}-${optionValue}`;
  };

  private optionHasVisualFocus = (optionValue: string): boolean => {
    return this.activedescendantIndex !== null
      ? this.flattenedOptions[this.activedescendantIndex].value === optionValue
      : false
  };

  private handleOptionClick = (event: MouseEvent) => {
    const { value, label } = (event.currentTarget as HTMLLIElement).dataset;
    this.menuOptionSelect.emit({value, label});
  };

  render () {
    const {
      listboxId,
      options,
      open,
      valueArr,
    } = this;

    console.log(options);

    const renderOptionContent = (option: IcMenuOption) => {
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
          {options.map((option, index) => {
            return (
              <li
                id={this.getOptionId(option.value)}
                role="option"
                onClick={this.handleOptionClick}
                class={{
                  "option": true,
                  "focused-option": this.optionHasVisualFocus(option.value),
                  "last-recommended-option": !!(
                    option.recommended &&
                    options[index + 1] &&
                    !options[index + 1].recommended
                  ),
                }}
                data-value={option["value"]}
                data-label={option["label"]}
              >
                {renderOptionContent(option)}
              </li>
            )
          })}

        </ul>
      </Host>
    )
  }
}
