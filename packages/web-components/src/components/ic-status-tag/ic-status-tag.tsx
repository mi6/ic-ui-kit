import { Component, Host, h, Prop } from "@stencil/core";
import { onComponentRequiredPropUndefined } from "../../utils/helpers";
import {
  IcStatusTagStatuses,
  IcStatusTagAppearance,
} from "./ic-status-tag.types";

@Component({
  tag: "ic-status-tag",
  styleUrl: "ic-status-tag.css",
  shadow: true,
})
export class StatusTag {
  /**
   * The content rendered within the status tag.
   */
  @Prop() label!: string;
  /**
   * The colour of the status tag.
   */
  @Prop() status?: IcStatusTagStatuses = "neutral";
  /**
   * The emphasis of the status tag.
   */
  @Prop() appearance?: IcStatusTagAppearance = "filled";
  /**
   * The size of the status tag.
   */
  @Prop() small?: boolean = false;

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Status Tag"
    );
  }

  render() {
    const { label, status, appearance, small } = this;
    return (
      <Host role="status">
        <strong
          class={{
            ["tag"]: true,
            [`${appearance}-${status}`]: true,
            ["small"]: small,
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
