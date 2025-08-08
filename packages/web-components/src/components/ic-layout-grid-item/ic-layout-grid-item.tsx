import { Component, Prop, Host, h, Element, Watch } from "@stencil/core";

@Component({
  tag: "ic-layout-grid-item",
  styleUrl: "ic-layout-grid-item.css",
  shadow: true,
})
export class LayoutGridItem {
  @Element() el: HTMLIcLayoutGridItemElement;

  /**
   * The number of columns the grid item should span.
   */
  @Prop() colSpan?: number = 1;
  @Watch("colSpan")
  watchColSpan(newValue: number) {
    this.el.style.setProperty("--ic-grid-item-col-span", `${newValue}`);
  }

  /**
   * The column the grid item should start at.
   */
  @Prop() colStart?: number = 1;
  @Watch("colStart")
  watchColStart(newValue: number) {
    this.el.style.setProperty("--ic-grid-item-col-start", `${newValue}`);
  }

  /**
   * If `true`, the grid item will be hidden on smaller screens.
   */
  @Prop() hideInMobileMode?: boolean = false;

  /**
   * The number of rows the grid item should span.
   */
  @Prop() rowSpan?: number = 1;
  @Watch("rowSpan")
  watchRowSpan(newValue: number) {
    this.el.style.setProperty("--ic-grid-item-row-span", `${newValue}`);
  }

  /**
   * The row the grid item should start at.
   */
  @Prop() rowStart?: number = 1;
  @Watch("rowStart")
  watchRowStart(newValue: number) {
    this.el.style.setProperty("--ic-grid-item-row-start", `${newValue}`);
  }

  componentWillLoad(): void {
    this.el.style.setProperty("--ic-grid-item-col-start", `${this.colStart}`);
    this.el.style.setProperty("--ic-grid-item-col-span", `${this.colSpan}`);
    this.el.style.setProperty("--ic-grid-item-row-start", `${this.rowStart}`);
    this.el.style.setProperty("--ic-grid-item-row-span", `${this.rowSpan}`);
  }

  render() {
    const { hideInMobileMode } = this;
    return (
      <Host
        class={{
          "ic-layout-grid-hide-in-mobile": !!hideInMobileMode,
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
