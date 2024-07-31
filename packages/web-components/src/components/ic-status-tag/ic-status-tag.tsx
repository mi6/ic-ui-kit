import { Component, Host, h, Prop } from "@stencil/core";
import { onComponentRequiredPropUndefined } from "../../utils/helpers";
import { IcStatusTagStatuses } from "./ic-status-tag.types";
import { IcEmphasisType, IcSizes } from "../../utils/types";

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
   * The content rendered within the status tag.
   */
  @Prop() label!: string;

  /**
   * The size of the status tag component.
   */
  @Prop() size?: IcSizes = "default";

  /**
   * The colour of the status tag.
   */
  @Prop() status?: IcStatusTagStatuses = "neutral";

  /**
   * The emphasis of the status tag.
   */
  @Prop() variant?: IcEmphasisType = "filled";

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Status Tag"
    );
  }

  render() {
    const { label, status, variant, size, announced } = this;
    return (
      <Host role={announced ? "status" : null} aria-label="Status">
        <strong
          class={{
            ["tag"]: true,
            [`${variant}-${status}`]: true,
            ["outlined"]: variant === "outlined",
            [`${size}`]: true,
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
