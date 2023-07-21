/* istanbul ignore file */
import {
  Component,
  Element,
  h,
  Host,
  Listen,
  Prop,
  State,
} from "@stencil/core";
import { IcThemeForeground, IcSizes } from "../../utils/types";

let accordionGroupIds = 0;
@Component({
  tag: "ic-accordion-group",
  styleUrl: "ic-accordion-group.css",
  shadow: true,
})
export class AccordionGroup {
  private accordionGroupId = `ic-accordion-group-${accordionGroupIds++}`;

  @Element() el: HTMLIcAccordionGroupElement;

  @State() accordions: HTMLIcAccordionElement[];

  @State() areAllAccordionsOpen: boolean;
  /**
   * The appearance of the accordion group, e.g dark, or light.
   */
  @Prop() appearance: IcThemeForeground = "default";

  /**
   * If `true`, the accordion will load in an expanded state.
   */
  @Prop({ mutable: true }) expanded: boolean = false;

  /**
   * The header for the accordion group.
   */
  @Prop() groupTitle: string = "";

  /**
   * If `true`, only one accordion will open at a time.
   */
  @Prop() singleExpansion: boolean = false;

  /**
   * The size of the accordion.
   */
  @Prop() size?: IcSizes = "default";

  componentDidLoad(): void {
    const accordionDirectChildren = (this.el as HTMLElement).children;
    this.accordions = Array.from(accordionDirectChildren).filter(
      (child) => child.tagName === "IC-ACCORDION"
    ) as HTMLIcAccordionElement[];
    this.linkAccordions();
    this.accordions.forEach((acc) => {
      acc.appearance = this.appearance;
    });
    this.accordions.forEach((acc) => {
      acc.size = this.size;
    });
    if (this.expanded) {
      this.accordions.forEach((acc) => {
        acc.expanded = true;
      });
      this.setExpandedToAreAllAccordionsOpen();
    } else {
      this.setExpandedToAreAllAccordionsOpen();
      this.expanded = this.areAllAccordionsOpen;
    }
  }

  @Listen("accordionClicked")
  handleAccordionClicked(event: CustomEvent): void {
    if (!this.singleExpansion) {
      // 'See all' should be visible until all accordions are open, then 'Hide all' should be visible
      this.setExpandedToAreAllAccordionsOpen();
      console.log(event);
    } else {
      this.accordions.forEach((acc) => {
        if (acc.expanded && event.detail.id !== acc.id) {
          acc.expanded = false;
        }
      });
    }
  }

  private handleExpanded = () => {
    if (this.areAllAccordionsOpen) {
      this.expanded = false;
      this.accordions.forEach((acc) => {
        acc.expanded = this.expanded;
      });
    } else {
      this.expanded = true;
      this.accordions.forEach((acc) => {
        acc.expanded = this.expanded;
      });
    }
    this.setExpandedToAreAllAccordionsOpen();
  };

  private linkAccordions = () => {
    this.accordions.forEach((accordion) => {
      accordion.setAttribute("context-id", this.accordionGroupId);
    });
  };

  private setExpandedToAreAllAccordionsOpen = () => {
    this.areAllAccordionsOpen = this.accordions.every(
      (accordion) => !!accordion.expanded
    );
  };

  render() {
    const { appearance, size, groupTitle, singleExpansion } = this;
    return (
      <Host
        context-id={this.accordionGroupId}
        class={{
          [`${appearance}`]: true,
          [`${size}`]: true,
          ["accordion-group"]: true,
        }}
      >
        <div class="group-title-container">
          <ic-typography variant="h4">
            <h3>{groupTitle}</h3>
          </ic-typography>
          {!singleExpansion && (
            <ic-button
              appearance={appearance === "light" ? "light" : "default"}
              onClick={this.handleExpanded}
              variant="tertiary"
            >
              {!this.areAllAccordionsOpen ? "See all" : "Hide all"}
            </ic-button>
          )}
        </div>
        <slot></slot>
      </Host>
    );
  }
}
// add single expansion without title
