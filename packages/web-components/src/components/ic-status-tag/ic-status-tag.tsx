import { Component, Host, h, Prop } from "@stencil/core";
import { onComponentRequiredPropUndefined } from "../../utils/helpers";
import {
  IcStatusTagStatuses,
  IcStatusTagAppearance,
} from "./ic-status-tag.types";
import { IcEmphasisType, IcSizesNoLarge } from "../../utils/types";

@Component({
  tag: "ic-status-tag",
  styleUrl: "ic-status-tag.css",
  shadow: true,
})
export class StatusTag {
  /**
   * If `true`, role='status' is added to the component and it will act as an 'aria-live' region.
   * Screen readers will announce changes to the `label`, but not the initial value.
   */
  @Prop() announced?: boolean = false;

  /**
   * @deprecated This prop should not be used anymore. Use variant prop instead.
   */
  @Prop() appearance?: IcStatusTagAppearance;

  /**
   * The content rendered within the status tag.
   */
  @Prop() label!: string;

  /**
   * The size of the status tag component.
   */
  @Prop() size?: IcSizesNoLarge = "default";

  /**
   * @deprecated This prop should not be used anymore. Set prop `size` to "small" instead.
   */
  @Prop() small?: boolean = false;

  /**
   * The colour of the status tag.
   */
  @Prop() status?: IcStatusTagStatuses = "neutral";

  /**
   * The emphasis of the status tag.
   */
  @Prop() variant?: IcEmphasisType = "filled";

  componentWillLoad(): void {
    if (this.appearance === "outlined") {
      this.variant = "outlined";
    }
  }

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Status Tag"
    );
  }

  render() {
    const { label, status, appearance, variant, small, size, announced } = this;
    return (
      <Host role={announced ? "status" : null} aria-label="Status">
        <strong
          class={{
            ["tag"]: true,
            [`${appearance}-${status}`]: appearance !== undefined,
            [`${variant}-${status}`]: true,
            ["outlined"]: variant === "outlined",
            ["small"]: small || size === "small",
          }}
        >
          <ic-typography
            variant="label-uppercase"
            apply-vertical-margins={false}
          >
            <span>{label}</span>
          </ic-typography>
        </strong>
      </Host>
    );
  }
}
