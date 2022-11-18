import { Component, Element, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "ic-data-entity",
  styleUrl: "ic-data-entity.css",
  shadow: true,
})
export class DataEntity {
  @Element() el: HTMLIcDataEntityElement;

  /**
   * Title for the data entity
   */
  @Prop() heading: string;

  /**
   * Set the data heading and all child data rows to small styling
   */
  @Prop() small: boolean = false;

  render() {
    const { heading, small } = this;

    const children = this.el.children;

    if (small) {
      for (let i = 0; i < children.length; i++) {
        children[i].setAttribute("small", "true");
      }
    }

    return (
      <Host class={{ ["small"]: small }}>
        <div class="heading" id="data-entity-heading">
          <slot name="heading">
            <ic-typography variant="h3">{heading}</ic-typography>
          </slot>
        </div>
        <div class="divider" />
        <ul aria-labelledby="data-entity-heading" class="rows">
          <slot></slot>
        </ul>
      </Host>
    );
  }
}
