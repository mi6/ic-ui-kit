import { Component, Element, Host, Prop, h, State } from "@stencil/core";
import { IcSkeletonVariants } from "./ic-skeleton.types";

@Component({
  tag: "ic-skeleton",
  styleUrl: "ic-skeleton.css",
  shadow: true,
})
export class Skeleton {
  @Element() el: HTMLIcSkeletonElement;
  /**
   * The variant of the skeleton that will be displayed
   */
  @Prop() variant?: IcSkeletonVariants = "rectangle";
  /**
   * Set the skeleton to the light variant
   */
  @Prop() light?: boolean = false;

  @State() hasChild: boolean;

  @State() default: boolean;

  @State() heightOnly: boolean;

  @State() widthOnly: boolean;

  componentWillLoad(): void {
    if (this.el.style.height === "" && this.el.style.width === "") {
      this.default = true;
    } else if (!(this.el.style.height === "") && this.el.style.width === "") {
      this.heightOnly = true;
    } else if (!(this.el.style.width === "") && this.el.style.height === "") {
      this.widthOnly = true;
    }
  }

  render() {
    const { variant, light } = this;

    this.hasChild = !!this.el.firstElementChild;

    const defaultSkeletonStyle = {
      height: variant == "text" ? "1em" : variant == "circle" ? "25px" : "93px",
      width: variant == "circle" ? "25px" : "260px",
    };

    const heightSetStyle = {
      height: this.el.style.height,
      width: variant == "circle" ? "25px" : "260px",
    };

    const widthSetStyle = {
      height: variant == "text" ? "1em" : variant == "circle" ? "25px" : "93px",
      width: this.el.style.width,
    };

    return (
      <Host
        class={{
          ["skeleton"]: true,
          ["circle"]: variant == "circle",
          ["light"]: light,
        }}
        style={
          (!this.hasChild && this.default && defaultSkeletonStyle) ||
          (this.heightOnly && heightSetStyle) ||
          (this.widthOnly && widthSetStyle)
        }
        aria-disabled="true"
      >
        <slot />
      </Host>
    );
  }
}
