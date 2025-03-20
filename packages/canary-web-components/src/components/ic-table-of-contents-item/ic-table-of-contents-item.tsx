import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Method,
  Prop,
} from "@stencil/core";

@Component({
  tag: "ic-table-of-contents-item",
  styleUrl: "ic-table-of-contents-item.css",
  shadow: true,
})
export class TableOfContentsItem {
  @Element() el: HTMLIcTableOfContentsItemElement;

  // Prop to set the label of the item
  @Prop() label: string;
  // Prop to target element ID to skip to
  @Prop() target: string;

  @Prop() variant: string = "h3";
  @Prop() truncate: boolean = false;

  @Prop() active: boolean = false;
  @Prop() position: number = 0;

  @Event({
    eventName: "contentsScroll",
  })
  contentsScroll: EventEmitter<number>;

  @Method()
  setFocus() {
    const href = this.el.shadowRoot.querySelector(
      ".table-of-contents-item-content"
    ) as HTMLIcTypographyElement;
    console.log("Setting focus to: ", href);
    href.focus();
  }

  private emitSelectedOption() {
    this.contentsScroll.emit(this.position);
  }

  private setItemLevelOffset(): void {
    this.el.style.setProperty(
      "padding-left",
      `${16 * parseInt(this.variant.split("")[1])}px`
    );
  }

  private handleTruncation(): void {
    const label = this.el.shadowRoot.querySelector(
      "#table-of-contents-item-label"
    ) as HTMLIcTypographyElement;
    label.style.overflow = "hidden";
    label.style.textOverflow = "ellipsis";
    label.style.whiteSpace = "nowrap";
  }

  componentWillLoad() {
    this.setItemLevelOffset();
  }

  componentDidLoad() {
    if (this.truncate) this.handleTruncation();
  }

  render() {
    const { target, label } = this;

    return (
      <Host>
        <a
          onClick={() => this.emitSelectedOption()}
          class={"table-of-contents-item-content"}
          href={`#${target}`}
        >
          <ic-typography
            id={"table-of-contents-item-label"}
            bold
            variant={"h5"}
          >
            {label}
          </ic-typography>
        </a>

        <slot></slot>
      </Host>
    );
  }
}
