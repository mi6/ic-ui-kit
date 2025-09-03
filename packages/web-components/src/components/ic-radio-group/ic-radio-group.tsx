import {
  Component,
  Host,
  h,
  Prop,
  State,
  Listen,
  Element,
  Event,
  EventEmitter,
  Watch,
} from "@stencil/core";
import {
  hasValidationStatus,
  slotHasContent,
  onComponentRequiredPropUndefined,
  removeDisabledFalse,
  checkResizeObserver,
} from "../../utils/helpers";
import {
  IcInformationStatusOrEmpty,
  IcOrientation,
  IcSizesNoLarge,
  IcThemeMode,
  IcValueEventDetail,
} from "../../utils/types";
import { IcChangeEventDetail } from "./ic-radio-group.types";

/**
 * @slot helper-text - Content is set as the helper text for the radio group.
 */
@Component({
  tag: "ic-radio-group",
  styleUrl: "ic-radio-group.css",
  shadow: true,
})
export class RadioGroup {
  private radioContainer?: HTMLDivElement;
  private radioOptions: HTMLIcRadioOptionElement[];
  private resizeObserver: ResizeObserver | null = null;
  private ADDITIONAL_FIELD = "additional-field";
  private RADIO_HORIZONTAL: IcOrientation = "horizontal";
  private RADIO_VERTICAL: IcOrientation = "vertical";

  @Element() el: HTMLIcRadioGroupElement;

  @State() checkedValue: string = "";
  @State() currentOrientation: IcOrientation;
  @State() initialOrientation: IcOrientation;
  @State() selectedChild: number = -1;

  /**
   * If `true`, the disabled state will be set.
   */
  @Prop() disabled?: boolean = false;

  @Watch("disabled")
  watchDisabledHandler(newValue: boolean): void {
    this.radioOptions.forEach(
      (radioOption) => (radioOption.disabled = newValue)
    );
    removeDisabledFalse(this.disabled, this.el);
  }

  /**
   * The helper text that will be displayed for additional field guidance.
   */
  @Prop() helperText?: string;

  /**
   * If `true`, the label will be hidden and the required label value will be applied as an aria-label.
   */
  @Prop() hideLabel?: boolean = false;

  /**
   * The label for the radio group to be displayed.
   */
  @Prop() label!: string;

  /**
   * The name for the radio group to differentiate from other groups.
   */
  @Prop() name!: string;

  /**
   * The orientation of the radio buttons in the radio group. If there are more than two radio buttons in a radio group or either of the radio buttons use the `additional-field` slot, then the orientation will always be vertical.
   */
  @Prop() orientation?: IcOrientation = "vertical";

  /**
   * If `true`, the radio group will require a value.
   */
  @Prop() required?: boolean = false;

  /**
   * The size of the radio group component.
   */
  @Prop() size?: IcSizesNoLarge = "medium";

  /**
   * The validation status - e.g. 'error' | 'warning' | 'success'.
   */
  @Prop() validationStatus?: IcInformationStatusOrEmpty = "";

  /**
   * The text to display as the validation message.
   */
  @Prop() validationText?: string = "";

  @Watch("orientation")
  orientationChangeHandler(): void {
    this.initialOrientation = this.orientation!;
    this.checkOrientation();
  }

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme?: IcThemeMode = "inherit";
  @Watch("theme")
  watchThemeHandler(newValue: IcThemeMode): void {
    this.radioOptions.forEach((radioOption) => (radioOption.theme = newValue));
  }

  /**
   * Emitted when a user selects a radio.
   */
  @Event() icChange: EventEmitter<IcChangeEventDetail>;

  disconnectedCallback(): void {
    this.resizeObserver?.disconnect();
    this.radioContainer?.removeEventListener(
      "slotchange",
      this.setRadioOptions
    );
  }

  componentWillLoad(): void {
    removeDisabledFalse(this.disabled, this.el);

    this.orientationChangeHandler();
    this.currentOrientation = this.initialOrientation;
  }

  componentDidLoad(): void {
    this.setRadioOptions();
    checkResizeObserver(this.runResizeObserver);
    this.addSlotChangeListener();

    onComponentRequiredPropUndefined(
      [
        { prop: this.label, propName: "label" },
        { prop: this.name, propName: "name" },
      ],
      "Radio Group"
    );

    this.watchThemeHandler(this.theme!);
  }

  @Listen("icCheck")
  selectHandler({ detail, target }: CustomEvent<IcValueEventDetail>): void {
    const selectedOption = target as HTMLIcRadioOptionElement;
    if (selectedOption.parentElement === this.el) {
      this.checkedValue = detail.value as string;
      this.icChange.emit({
        value: this.checkedValue,
        selectedOption: {
          radio: selectedOption,
          textFieldValue: selectedOption?.querySelector("ic-text-field")?.value,
        },
      });

      if (this.radioOptions !== undefined) {
        this.radioOptions.forEach((radioOption, index) => {
          radioOption.selected = selectedOption === radioOption;
          if (radioOption.selected) {
            this.selectedChild = index;
          }
        });
        this.setFirstRadioOptionTabIndex(this.selectedChild > 0 ? -1 : 0);
      }
    }
  }

  @Listen("icSelectedChange")
  changeHandler(): void {
    const selectedOption = this.radioOptions?.findIndex(
      (radioOption) => radioOption.selected
    );
    if (selectedOption < 0) {
      this.setFirstRadioOptionTabIndex(0);
      this.selectedChild = selectedOption;
    }
  }

  private runResizeObserver = () => {
    this.resizeObserver = new ResizeObserver(() => {
      this.checkOrientation();
    });

    this.resizeObserver.observe(this.el);
  };

  private checkOrientation() {
    if (this.initialOrientation === this.RADIO_HORIZONTAL) {
      let totalWidth = 0;
      if (Array.isArray(this.radioOptions) && this.radioOptions.length > 0) {
        this.radioOptions.forEach(({ clientWidth }, i, arr) => {
          totalWidth += clientWidth;
          if (i < arr.length - 1) totalWidth += 40;
        });
      } else {
        totalWidth = 0;
      }

      if (this.initialOrientation == this.RADIO_HORIZONTAL) {
        if (
          this.radioOptions !== undefined &&
          (this.radioOptions.length > 2 ||
            (this.radioOptions.length === 2 &&
              (slotHasContent(this.radioOptions[0], this.ADDITIONAL_FIELD) ||
                slotHasContent(this.radioOptions[1], this.ADDITIONAL_FIELD))))
        ) {
          this.currentOrientation = this.RADIO_VERTICAL;
        } else {
          if (this.radioContainer) {
            if (totalWidth >= this.radioContainer.clientWidth) {
              this.currentOrientation = this.RADIO_VERTICAL;
            } else if (totalWidth < this.radioContainer.clientWidth) {
              this.currentOrientation = this.RADIO_HORIZONTAL;
            }
          }
        }
      }
    }
  }

  private handleKeyDown = (event: KeyboardEvent): void => {
    const additionalFields = Array.from(
      this.el.querySelectorAll<HTMLElement>(
        'ic-text-field[slot="additional-field"]'
      )
    );
    const activeEl = document.activeElement;
    if (
      additionalFields.length > 0 &&
      this.radioOptions.map((el) =>
        slotHasContent(el, this.ADDITIONAL_FIELD)
      ) &&
      additionalFields.map((el) => el == activeEl)
    ) {
      return;
    }

    event.stopPropagation();
    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        this.radioOptions[
          this.getNextItemToSelect(this.selectedChild, true)
        ].click();
        event.preventDefault();
        break;
      case "ArrowUp":
      case "ArrowLeft":
        this.radioOptions[
          this.getNextItemToSelect(this.selectedChild, false)
        ].click();
        event.preventDefault();
    }
  };

  private getNextItemToSelect = (
    currentItem: number,
    movingDown: boolean
  ): number => {
    const numRadios = this.radioOptions.length - 1;

    if (currentItem < 1) {
      currentItem = 0;
    }

    let nextItem = movingDown ? currentItem + 1 : currentItem - 1;

    //check if wrap around necessary
    if (nextItem < 0) {
      nextItem = numRadios;
    } else if (nextItem > numRadios) {
      nextItem = 0;
    }

    //if next item is disabled then find next
    if (this.radioOptions[nextItem].disabled) {
      nextItem = this.getNextItemToSelect(nextItem, movingDown);
    }

    return nextItem;
  };

  private addSlotChangeListener = () => {
    this.radioContainer?.addEventListener("slotchange", this.setRadioOptions);
  };

  private setFirstRadioOptionTabIndex = (value: number) => {
    this.radioOptions[0].setTabIndex(value);
  };

  private setRadioOptions = () => {
    this.selectedChild = -1;
    this.checkedValue = "";
    this.radioOptions = Array.from(this.el.children).filter(
      (el) => el.tagName === "IC-RADIO-OPTION"
    ) as HTMLIcRadioOptionElement[];
    if (this.radioOptions.length > 0) {
      this.radioOptions.forEach((radioOption, index) => {
        if (!radioOption.selected) {
          radioOption.selected = this.checkedValue === radioOption.value;
        }
        radioOption.name = this.name;
        radioOption.groupLabel = this.label;
        if (radioOption.selected) {
          this.selectedChild = index;
          this.checkedValue = radioOption.value;
        }
        if (this.disabled) {
          radioOption.disabled = true;
        }
      });
      this.setFirstRadioOptionTabIndex(this.selectedChild > 0 ? -1 : 0);

      if (
        this.initialOrientation === this.RADIO_HORIZONTAL &&
        this.radioOptions !== undefined &&
        (this.radioOptions.length > 2 ||
          (this.radioOptions.length === 2 &&
            (slotHasContent(this.radioOptions[0], this.ADDITIONAL_FIELD) ||
              slotHasContent(this.radioOptions[1], this.ADDITIONAL_FIELD))))
      ) {
        this.currentOrientation = this.RADIO_VERTICAL;
      }
    }
  };

  render() {
    const {
      currentOrientation,
      disabled,
      handleKeyDown,
      helperText,
      hideLabel,
      label,
      required,
      size,
      validationStatus,
      validationText,
      theme,
    } = this;

    return (
      <Host
        onKeyDown={handleKeyDown}
        class={{
          "ic-radio-group-small": size === "small",
          [`ic-theme-${theme}`]: theme !== "inherit",
        }}
      >
        <fieldset
          role="radiogroup"
          id={this.name}
          aria-required={`${required}`}
        >
          {!hideLabel && (
            <legend>
              <ic-input-label
                class={{
                  [`${validationStatus}`]: true,
                  ["disabled"]: !!disabled,
                }}
                label={label}
                helperText={helperText}
                required={required}
                disabled={disabled}
              >
                <slot name="helper-text" slot="helper-text"></slot>
              </ic-input-label>
            </legend>
          )}
          <div
            class={{
              "radio-buttons-container": true,
              horizontal: currentOrientation === this.RADIO_HORIZONTAL,
            }}
            ref={(el) => (this.radioContainer = el)}
          >
            <slot></slot>
          </div>
        </fieldset>
        {hasValidationStatus(validationStatus, disabled) && (
          <ic-input-validation
            ariaLiveMode="polite"
            status={validationStatus}
            message={validationText!}
          ></ic-input-validation>
        )}
      </Host>
    );
  }
}
