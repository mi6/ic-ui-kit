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
} from "@stencil/core";
import {
  hasValidationStatus,
  onComponentRequiredPropUndefined,
  renderHiddenInput,
} from "../../utils/helpers";
import { IcInformationStatusOrEmpty } from "../../utils/types";
import { IcValueEventDetail } from "../../interface";

@Component({
  tag: "ic-radio-group",
  styleUrl: "ic-radio-group.css",
  shadow: true,
})
export class RadioGroup {
  private radioOptions: HTMLIcRadioOptionElement[];

  @Element() host: HTMLIcRadioGroupElement;

  /**
   * Provide a label for the input.
   */
  @Prop() label!: string;

  /**
   * Provide a name for the input.
   */
  @Prop() name!: string;

  /**
   * Specify if the input requires a value.
   */
  @Prop() required: boolean = false;

  /**
   * Hides the label and applies the required label value as an aria-label.
   */
  @Prop() hideLabel: boolean = false;

  /**
   * Specify whether the input is disabled.
   */
  @Prop() disabled: boolean = false;

  /**
   * Provide helper text to display additional field guidance.
   */
  @Prop() helperText: string;

  /**
   * Specify whether small styling is to be applied to the element.
   */
  @Prop() small: boolean = false;
  /**
   * Provide validation status - 'error'
   */
  @Prop() validationStatus: IcInformationStatusOrEmpty = "";
  /**
   * Provide validation text - 'error'
   */
  @Prop() validationText: string = "";
  /**
   * Provide checked state
   */
  @State() checkedValue: string = "";
  @State() selectedChild: number = -1;

  /**
   * Emitted when a user selects a radio.
   */
  @Event() icChange: EventEmitter<IcValueEventDetail>;

  @Listen("radioOptionSelect")
  selectHandler(event: CustomEvent<IcValueEventDetail>): void {
    this.checkedValue = event.detail.value;
    this.icChange.emit({ value: this.checkedValue });

    if (this.radioOptions !== undefined) {
      this.radioOptions.forEach((radioOption, index) => {
        radioOption.selected = this.checkedValue === radioOption.value;
        if (radioOption.selected) {
          this.selectedChild = index;
        }
      });
      this.radioOptions[0].shadowRoot.querySelector("input").tabIndex =
        this.selectedChild > 0 ? -1 : 0;
    }
  }

  private handleKeyDown = (event: KeyboardEvent): void => {
    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        this.radioOptions[
          this.getNextItemToSelect(this.selectedChild, true)
        ].selected = true;
        event.preventDefault();
        break;
      case "ArrowUp":
      case "ArrowLeft":
        this.radioOptions[
          this.getNextItemToSelect(this.selectedChild, false)
        ].selected = true;
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

  componentDidLoad(): void {
    this.radioOptions = Array.from(
      this.host.querySelectorAll("ic-radio-option")
    );

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
    });
    this.radioOptions[0].shadowRoot.querySelector("input").tabIndex =
      this.selectedChild > 0 ? -1 : 0;

    onComponentRequiredPropUndefined(
      [
        { prop: this.label, propName: "label" },
        { prop: this.name, propName: "name" },
      ],
      "Radio Group"
    );
  }

  render() {
    const hadValidationStatus = hasValidationStatus(
      this.validationStatus,
      this.disabled
    );

    renderHiddenInput(
      true,
      this.host,
      this.name,
      this.checkedValue,
      this.disabled
    );

    return (
      <Host onKeyDown={this.handleKeyDown}>
        <div
          role="radiogroup"
          aria-label={`${this.label}${this.required ? ", required" : ""}`}
        >
          {!this.hideLabel && (
            <ic-input-label
              class={{ [`${this.validationStatus}`]: true }}
              label={this.label}
              helperText={this.helperText}
              required={this.required}
              disabled={this.disabled}
            ></ic-input-label>
          )}
          <slot></slot>
        </div>
        <ic-input-validation
          ariaLiveMode="polite"
          status={hadValidationStatus ? this.validationStatus : ""}
          message={hadValidationStatus ? this.validationText : ""}
        ></ic-input-validation>
      </Host>
    );
  }
}
