import { h, Component, Host, Prop, Element } from "@stencil/core";

import { IcEmptyStateAlignment } from "./ic-empty-state.types";
import {
  isSlotUsed,
  onComponentRequiredPropUndefined,
} from "../../utils/helpers";
import { IcSizes } from "../../utils/types";

/**
 * @slot image - Content is placed at the top above all other content.
 * @slot actions - Content is placed at the bottom below all other content.
 * @slot heading - Content will be rendered in place of the heading prop.
 * @slot subheading - Content will be rendered in place of the subheading prop.
 * @slot body - Content will be rendered in place of the body prop.
 */
@Component({
  tag: "ic-empty-state",
  styleUrl: "ic-empty-state.css",
  shadow: true,
})
export class EmptyState {
  @Element() el: HTMLIcEmptyStateElement;

  /**
   * The alignment of the empty state container.
   */
  @Prop() aligned?: IcEmptyStateAlignment = "left";

  /**
   * The body text rendered in the empty state container.
   */
  @Prop() body?: string;

  /**
   * The number of lines of body text to display before truncating.
   */
  @Prop() maxLines?: number;

  /**
   * The title rendered in the empty state container.
   */
  @Prop() heading?: string;

  /**
   * The size of the image or icon used in the image slot.
   */
  @Prop() imageSize?: IcSizes = "default";

  /**
   * The subtitle rendered in the empty state container.
   */
  @Prop() subheading?: string;

  componentDidLoad(): void {
    !isSlotUsed(this.el, "heading") &&
      onComponentRequiredPropUndefined(
        [{ prop: this.heading, propName: "heading" }],
        "Empty State"
      );
  }

  render() {
    const { aligned, body, maxLines, heading, imageSize, subheading } = this;
    return (
      <Host
        class={{
          [`ic-empty-state-${aligned}`]: true,
          [`image-${imageSize}`]: isSlotUsed(this.el, "image"),
        }}
      >
        {isSlotUsed(this.el, "image") && <slot name="image"></slot>}
        <div>
          <slot name="heading">
            <ic-typography variant="h4">{heading}</ic-typography>
          </slot>
          <slot name="subheading">
            <ic-typography variant="subtitle-small">{subheading}</ic-typography>
          </slot>
          <slot name="body">
            <ic-typography maxLines={maxLines}>{body}</ic-typography>
          </slot>
        </div>
        {isSlotUsed(this.el, "actions") && (
          <div class="action-area">
            <slot name="actions" />
          </div>
        )}
      </Host>
    );
  }
}
