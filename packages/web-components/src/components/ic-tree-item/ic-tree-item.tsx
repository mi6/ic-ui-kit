import {
    Component,
    h,
    Prop,
    Element,
    Event,
    EventEmitter,
    Host,
    //Watch,
    Method,
  } from "@stencil/core";
  import { isSlotUsed } from "../../utils/helpers";
  import chevronIcon from "../../assets/chevron-icon.svg";
  import { IcThemeForeground, IcSizes } from "../../utils/types";
  
  let treeItemIds = 0;
  
  /**
   * @slot label - Content is placed as the tree view label.
   * @slot icon - Content is placed to the left of the label.
   */
  
  @Component({
    tag: "ic-tree-item",
    styleUrl: "ic-tree-item.css",
    shadow: true,
  })
  export class TreeItem {
    private treeItemId = `ic-tree-item-${treeItemIds++}`;
    private expandedContentEl: HTMLDivElement;
    private treeItemBtnHeading: HTMLButtonElement; 
    private CONTENT_VISIBILITY_PROPERTY = "--ic-expanded-content-visiblity";
  
    @Element() el: HTMLIcTreeItemElement;
    /**
     * @internal Determines whether the light or dark variant of the tree item should be displayed.
     */
    @Prop() appearance?: IcThemeForeground = "default";
  
    /**
     * If `true`, the tree item will be disabled.
     */
    @Prop() disabled?: boolean = false;
  
    /**
     * If `true`, the tree item appears expanded.
     */
    @Prop({ mutable: true }) expanded: boolean = false;
  
    /**
     * The section header outlining section content.
     */
    @Prop() label?: string = "";
  
    /**
     * The size of the tree item.
     */
    @Prop() size?: IcSizes = "default";
  
    /**
     * @internal Emitted when tree item is clicked.
     */
    @Event() treeItemClicked: EventEmitter<{ id: string }>;
  
    // Every time expanded is set via toggleExpanded or accordionGroup, animate to open or close
    // THINK UNNEEDED AS OF NOW DUE TO NO ANIMATION
    // @Watch("expanded")
    // handleExpandedWatch(): void {
    //   this.animateExpandedContent();
    // }
  
    /**
     * Sets focus on tree item heading.
     */
    @Method()
    async setFocus(): Promise<void> {
      if (this.treeItemBtnHeading) {
        this.treeItemBtnHeading.focus();
      }
    }
  
    // disconnectedCallback(): void {
    //   if (this.expandedContentEl) {
    //     this.expandedContentEl.removeEventListener(
    //       "transitionend",
    //       (e) => this.setExpandedContentStyle(e, this.expandedContentEl),
    //       true
    //     );
    //     this.expandedContentEl.removeEventListener(
    //       "transitionend",
    //       (e) => this.hideExpandedContent(e, this.expandedContentEl),
    //       true
    //     );
    //   }
    // }
  
    componentDidLoad(): void {
      // So tree item opens by default if expanded set to true
      if (this.expanded) {
        this.expandedContentEl.style.height = "auto";
        this.expandedContentEl.style.setProperty(
          this.CONTENT_VISIBILITY_PROPERTY,
          "visible"
        );
      }
    }
  
    private toggleExpanded = (): void => { //WILL NEED FOR PARENT STUFF
      this.expanded = !this.expanded;
      this.treeItemClicked.emit({ id: this.treeItemId });
    };
  
    // Set accordion animation
    // private setAccordionAnimation = (
    //   el: HTMLElement,
    //   duration: string,
    //   property: string,
    //   delay: string
    // ) => {
    //   el.style.transitionDuration = `${duration}ms`;
    //   el.style.transitionProperty = property;
    //   el.style.transitionDelay = delay;
    // };
  
    // private setExpandedContentStyle = (
    //   ev: TransitionEvent,
    //   expandedContent: HTMLDivElement
    // ) => {
    //   if (ev.propertyName === "height" && expandedContent.clientHeight > 0) {
    //     expandedContent.classList.add("expanded-content-opened");
    //     expandedContent.style.height = "auto";
    //   }
    // };
  
    // private hideExpandedContent = (
    //   ev: TransitionEvent,
    //   expandedContent: HTMLDivElement
    // ) => {
    //   if (ev.propertyName === "height" && expandedContent.clientHeight === 0) {
    //     expandedContent.style.setProperty(
    //       this.CONTENT_VISIBILITY_PROPERTY,
    //       "hidden"
    //     );
    //   }
    // };
  
    // private animateExpandedContent = () => {
    //   const elementHeight = this.expandedContentEl.scrollHeight;
    //   if (elementHeight > 0 && this.expanded) {
    //     this.expandedContentEl.style.setProperty(
    //       this.CONTENT_VISIBILITY_PROPERTY,
    //       "visible"
    //     );
    //     this.expandedContentEl.style.height = `${elementHeight}px`;
    //     this.setAccordionAnimation(
    //       this.expandedContentEl,
    //       "300",
    //       "height",
    //       "ease-out"
    //     );
  
    //     this.expandedContentEl.addEventListener(
    //       "transitionend",
    //       (e: TransitionEvent) => {
    //         this.setExpandedContentStyle(e, this.expandedContentEl);
    //       }
    //     );
    //   } else if (!this.expanded) {
    //     this.expandedContentEl.style.height = `${this.expandedContentEl.scrollHeight}px`;
    //     if (this.expandedContentEl.scrollHeight > 0 && !this.expanded) {
    //       this.expandedContentEl.style.height = "0";
    //       this.setAccordionAnimation(
    //         this.expandedContentEl,
    //         "300",
    //         "height",
    //         "ease-in"
    //       );
    //       this.expandedContentEl.classList.remove("expanded-content-opened");
    //     }
    //     this.expandedContentEl.addEventListener("transitionend", (e) => {
    //       this.hideExpandedContent(e, this.expandedContentEl);
    //     });
    //   }
    // };
  
    render() {
      const { appearance, size, disabled, expanded } = this;
      return (
        <Host
          id={this.treeItemId}
          class={{
            [`${appearance}`]: true,
            ["disabled"]: disabled,
          }}
          aria-disabled={disabled ? "true" : "false"}
        >
          <button
            ref={(el) => (this.treeItemBtnHeading = el)}
            id={`${this.treeItemId}-button`}
            disabled={disabled}
            tabindex={disabled ? -1 : 0}
            class={{
              [`${size}`]: true,
              ["section-button"]: true,
              ["section-button-open"]: expanded && !disabled,
            }}
            aria-expanded={`${expanded}`}
            aria-controls="expanded-content-area"
            onClick={this.toggleExpanded}
          >
            <span
              class={{
                ["expand-chevron"]: true,
                ["content-expanded-chevron"]: expanded && !disabled,
              }}
              aria-hidden="true"
              innerHTML={chevronIcon}
            />
            {isSlotUsed(this.el, "icon") && (
              <div class="icon-container">
                <slot name="icon" />
              </div>
            )}
            <ic-typography variant="subtitle-large" class="section-header">
              {isSlotUsed(this.el, "label") ? (
                <slot name="label" />
              ) : (
                this.label
              )}
            </ic-typography>
          </button>
          {/*<div
            class={{
              ["expanded-content"]: true,
            }}
            aria-labelledby={`${this.treeItemId}-button`}
            role="region"
            aria-hidden={`${!expanded}`}
            id="expanded-content-area"
            ref={(el) => (this.expandedContentEl = el)}
          >
            <div class="expanded-content-inner">
              <slot />
            </div>
          </div>*/}
        </Host>
      );
    }
  }
  