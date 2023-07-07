import {
  Component,
  h,
  Prop,
  Element,
  Event,
  EventEmitter,
  Host,
  Watch,
} from "@stencil/core";
import { isSlotUsed } from "../../utils/helpers";
import chevronIcon from "../../assets/chevron-icon.svg";
import { IcThemeForeground, IcSizes } from "../../utils/types";

let accordionIds = 0;
@Component({
  tag: "ic-accordion",
  styleUrl: "ic-accordion.css",
  shadow: true,
})
export class Accordion {
  private accordionId = `ic-accordion-${accordionIds++}`;
  private animationTimer: ReturnType<typeof setTimeout>;
  private expandedContentEl: HTMLDivElement;

  @Element() el: HTMLIcAccordionElement;
  /**
   * @internal Determines whether the light or dark variant of the accordion should be displayed.
   */
  @Prop() appearance?: IcThemeForeground = "default";

  /**
   * If `true`, the accordion will be disabled.
   */
  @Prop() disabled?: boolean = false;

  /**
   * If `true`, the accordion appears expanded.
   */
  @Prop({ mutable: true }) expanded: boolean = false;

  /**
   * The section header outlining section content.
   */
  @Prop() heading?: string = "";

  /**
   * The main body message of the accordion.
   */
  @Prop() message?: string = "";

  /**
   * The size of the accordion.
   */
  @Prop() size?: IcSizes = "default";

  /**
   * @internal Emitted when accordion is clicked.
   */
  @Event() accordionClicked: EventEmitter<{ id: string }>;

  // Every time expanded is set via toggleExpanded or accordionGroup, animate to open or close
  @Watch("expanded")
  handleExpandedWatch(): void {
    this.animateExpandedContent();
  }

  disconnectedCallback(): void {
    clearTimeout(this.animationTimer);
  }

  componentDidLoad(): void {
    // So accordion opens by default if expanded set to true
    if (this.expanded) {
      this.expandedContentEl.style.height = "auto";
    }
  }

  private toggleExpanded = (): void => {
    this.expanded = !this.expanded;
    this.accordionClicked.emit({ id: this.accordionId });
  };

  // Set accordion animation
  private setAccordionAnimation = (
    el: HTMLElement,
    duration: string,
    property: string,
    delay: string
  ) => {
    el.style.transitionDuration = `${duration}ms`;
    el.style.transitionProperty = property;
    el.style.transitionDelay = delay;
  };

  private animateExpandedContent = () => {
    const elementHeight = this.expandedContentEl.scrollHeight;
    if (elementHeight > 0 && this.expanded) {
      this.expandedContentEl.style.height = `${elementHeight}px`;
      this.setAccordionAnimation(
        this.expandedContentEl,
        "300",
        "height",
        "ease-out"
      );
      this.animationTimer = setTimeout(() => {
        this.expandedContentEl.style.height = "auto";
      }, 400);
    } else if (!this.expanded) {
      this.expandedContentEl.style.height = `${this.expandedContentEl.scrollHeight}px`;
      this.animationTimer = setTimeout(() => {
        this.expandedContentEl.style.height = "0";
        this.setAccordionAnimation(
          this.expandedContentEl,
          "300",
          "height",
          "ease-in"
        );
      }, 25);
    }
  };

  render() {
    const { appearance, size, disabled, expanded } = this;
    return (
      <Host
        id={this.accordionId}
        class={{
          [`${appearance}`]: true,
          ["disabled"]: disabled,
        }}
        aria-disabled={disabled ? "true" : "false"}
      >
        <button
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
          {isSlotUsed(this.el, "icon") && (
            <div class="icon-container">
              <slot name="icon" />
            </div>
          )}
          <ic-typography variant="subtitle-large" class="section-header">
            {isSlotUsed(this.el, "heading") ? (
              <slot name="heading" />
            ) : (
              this.heading
            )}
          </ic-typography>
          <span
            class={{
              ["expand-chevron"]: true,
              ["content-expanded-chevron"]: expanded && !disabled,
            }}
            aria-hidden="true"
            innerHTML={chevronIcon}
          />
        </button>
        <div
          class={{
            ["expanded-content"]: true,
            ["expanded-content-open"]: expanded && !disabled,
          }}
          aria-labelledby={this.accordionId}
          aria-hidden={`${!expanded}`}
          id="expanded-content-area"
          ref={(el) => (this.expandedContentEl = el)}
        >
          <div class="expanded-content-inner">
            <slot />
          </div>
        </div>
      </Host>
    );
  }
}
