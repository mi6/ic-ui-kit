import {
  Component,
  Element,
  Event,
  EventEmitter,
  FunctionalComponent,
  h,
  Host,
  Method,
  Prop,
  Watch,
} from "@stencil/core";

interface IcTableOfContentsItemElement {
  label: string;
  target: string;
  variant: string;
  truncate?: boolean;
  selected: boolean;
  handleTruncation: (el: Element) => void;
  setItemLevelOffset: (el: Element) => void;
}

const ItemHook = (variant: string) => {
  const setItemLevelOffset = (el: Element): void => {
    const href = el.shadowRoot.querySelector(
      ".table-of-contents-item-content"
    ) as HTMLIcTypographyElement;
    //4 12 20 28
    href.style.setProperty(
      "padding-left",
      `${4 + 8 * (parseInt(variant.split("")[1]) - 2)}px`
    );
  };

  const handleTruncation = (el: Element): void => {
    const label = el.shadowRoot.querySelector(
      "#table-of-contents-item-label"
    ) as HTMLIcTypographyElement;
    label.style.overflow = "hidden";
    label.style.textOverflow = "ellipsis";
    label.style.whiteSpace = "nowrap";
  };

  return { handleTruncation, setItemLevelOffset };
};

const ItemComponent: FunctionalComponent<IcTableOfContentsItemElement> = (
  itemProps
) => {
  const { label, target, selected } = itemProps;

  return (
    <div>
      <a
        onClick={() => {}}
        class={`${
          selected && "table-of-contents-item-content-selected"
        } table-of-contents-item-content`}
        href={`#${target}`}
      >
        <ic-typography
          id={"table-of-contents-item-label"}
          bold={selected}
          variant={"h5"}
        >
          {label}
        </ic-typography>
      </a>
    </div>
  );
};

interface TOCItemProps {
  variant: string;
  label: string;
  target: string;
  truncate?: boolean;
  selected: boolean;
}

export const TableOfContentsItem = (props: TOCItemProps) => {
  const innerProps = ItemHook(props.variant);
  return <ItemComponent {...props} {...innerProps} />;
};
// //Make FunctionalComponent
// @Component({
//   tag: "ic-table-of-contents-item",
//   styleUrl: "ic-table-of-contents-item.css",
//   shadow: true,
// })
// export class TableOfContentsItem {
//   @Element() el: HTMLIcTableOfContentsItemElement;

//   // Prop to set the label of the item
//   @Prop() label: string;
//   // Prop to target element ID to skip to
//   @Prop() target: string;

//   @Prop() variant: string = "h3";
//   @Prop() truncate: boolean = false;

//   @Prop() active: boolean = false;
//   @Prop() position: number = 0;

//   @Prop() selected: boolean = false;

//   @Event({
//     eventName: "contentsScroll",
//   })
//   contentsScroll: EventEmitter<number>;

//   @Watch("selected")
//   handleSelectedChange() {
//     this.handleTruncation();
//   }

//   @Method()
//   async setFocus() {
//     const href = this.el.shadowRoot.querySelector(
//       ".table-of-contents-item-content"
//     ) as HTMLIcTypographyElement;

//     href.focus();
//   }

//   private emitSelectedOption() {
//     this.selected = true;
//     this.contentsScroll.emit(this.position);
//   }

//   private setItemLevelOffset(): void {
//     const href = this.el.shadowRoot.querySelector(
//       ".table-of-contents-item-content"
//     ) as HTMLIcTypographyElement;
//     //4 12 20 28
//     href.style.setProperty(
//       "padding-left",
//       `${4 + 8 * (parseInt(this.variant.split("")[1]) - 2)}px`
//     );
//   }

//   private handleTruncation(): void {
//     const label = this.el.shadowRoot.querySelector(
//       "#table-of-contents-item-label"
//     ) as HTMLIcTypographyElement;
//     label.style.overflow = "hidden";
//     label.style.textOverflow = "ellipsis";
//     label.style.whiteSpace = "nowrap";
//   }

//   componentWillLoad() {}

//   componentDidLoad() {
//     this.setItemLevelOffset();
//     if (this.truncate) this.handleTruncation();
//   }

//   render() {
//     const { target, label } = this;

//     return (
//       <Host class={"table-of-contents-item"}>
//         <a
//           onClick={() => this.emitSelectedOption()}
//           class={`${
//             this.selected && "table-of-contents-item-content-selected"
//           } table-of-contents-item-content`}
//           href={`#${target}`}
//         >
//           <ic-typography
//             id={"table-of-contents-item-label"}
//             bold={this.selected}
//             variant={"h5"}
//           >
//             {label}
//           </ic-typography>
//         </a>
//         <slot></slot>
//       </Host>
//     );
//   }
// }
