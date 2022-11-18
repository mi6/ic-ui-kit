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
  getInputDescribedByText,
  hasValidationStatus,
  onComponentRequiredPropUndefined,
} from "../../utils/helpers";
import { IcInformationStatusOrEmpty } from "../../utils/types";
import { IcChangeEventDetail } from "./ic-checkbox-group.types";

@Component({
  tag: "ic-checkbox-group",
  styleUrl: "ic-checkbox-group.css",
  shadow: true,
})
export class CheckboxGroup {
  @Element() host: HTMLIcCheckboxGroupElement;

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
  @Prop() helperText: string = "";

  /**
   * Specify whether small styling to be applied to element.
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
   * Emitted when a checkbox is checked.
   */
  @Event() icChange: EventEmitter<IcChangeEventDetail>;

  private checkboxOptions: HTMLIcCheckboxElement[];

  @State() checkedOptions: string[] = [];

  @Listen("checkboxChecked")
  selectHandler(): void {
    this.checkboxOptions = Array.from(
      this.host.querySelectorAll("ic-checkbox")
    );
    this.checkboxOptions.forEach((checkbox) => {
      if (
        checkbox.checked &&
        this.checkedOptions.indexOf(checkbox.value) === -1
      ) {
        this.checkedOptions.push(checkbox.value);
      }
    });
    this.icChange.emit({ value: this.checkedOptions });
  }

  componentDidLoad(): void {
    this.checkboxOptions = Array.from(
      this.host.querySelectorAll("ic-checkbox")
    );
    this.checkboxOptions.forEach((checkbox) => {
      if (
        checkbox.checked &&
        this.checkedOptions.indexOf(checkbox.value) === -1
      ) {
        this.checkedOptions.push(checkbox.value);
      }
      if (!checkbox.name) checkbox.name = this.name;
      checkbox.groupLabel = this.label;
    });

    onComponentRequiredPropUndefined(
      [
        { prop: this.label, propName: "label" },
        { prop: this.name, propName: "name" },
      ],
      "Checkbox Group"
    );
  }

  render() {
    const describedBy = getInputDescribedByText(
      this.name,
      this.helperText !== "",
      this.validationStatus !== ""
    );
    const hadValidationStatus = hasValidationStatus(
      this.validationStatus,
      this.disabled
    );

    return (
      <Host>
        {(this.validationStatus === "error" ||
          this.required ||
          this.hideLabel) && (
          <span
            id="screenReaderOnlyText"
            class="screen-reader-only-text"
            aria-hidden="true"
          >
            {this.label}{" "}
            {this.validationStatus === "error" ? "invalid data " : null}{" "}
            {this.required ? "required" : null}
          </span>
        )}
        <fieldset
          id={this.name}
          aria-labelledby={`${
            this.validationStatus === "error" || this.required || this.hideLabel
              ? "screenReaderOnlyText"
              : ""
          } ${describedBy}`.trim()}
          disabled={this.disabled}
        >
          {!this.hideLabel && (
            <legend>
              <ic-input-label
                class={{ [`${this.validationStatus}`]: true }}
                label={this.label}
                helperText={this.helperText}
                required={this.required}
                disabled={this.disabled}
                for={this.name}
              ></ic-input-label>
            </legend>
          )}
          <div class="list-items">
            <slot></slot>
          </div>
        </fieldset>
        {hadValidationStatus && (
          <ic-input-validation
            for={this.name}
            ariaLiveMode="polite"
            status={this.validationStatus}
            message={this.validationText}
          ></ic-input-validation>
        )}
      </Host>
    );
  }
}
