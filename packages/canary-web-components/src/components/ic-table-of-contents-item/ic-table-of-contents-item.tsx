import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
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

  private emitSelectedOption() {
    this.contentsScroll.emit(this.position);
  }

  private shouldTruncate(): boolean {
    const label = this.el.shadowRoot.querySelector(
      "#table-of-contents-item-label"
    ) as HTMLIcTypographyElement;
    label.style.overflow = "hidden";
    label.style.textOverflow = "ellipsis";
    label.style.whiteSpace = "nowrap";

    return false;
  }

  componentWillLoad() {
    // this.getElementHeadingLevel();
  }

  componentDidLoad() {
    this.shouldTruncate();
    // this.constructHeadingText();
    // this.createElementContent();
    // this.shouldTruncate();
  }

  componentWillUpdate() {
    console.log(this.label);
  }

  render() {
    const { target, label } = this;

    return (
      <Host class={"table-of-contents-item-content"}>
        <a onClick={() => this.emitSelectedOption()} href={`#${target}`}>
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
