import {
  Component,
  Host,
  Element,
  Listen,
  Prop,
  h,
  State,
} from "@stencil/core";
import {
  DEVICE_SIZES,
  getThemeForegroundColor,
  onComponentRequiredPropUndefined,
} from "../../utils/helpers";
import {
  IcTheme,
  IcThemeForeground,
  IcThemeForegroundNoDefault,
} from "../../utils/types";

@Component({
  tag: "ic-footer-link-group",
  styleUrl: "ic-footer-link-group.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class FooterLinkGroup {
  @Element() el: HTMLIcFooterLinkGroupElement;

  @State() expanded: boolean = false;
  @State() deviceSize: number = DEVICE_SIZES.XL;
  @State() dropdownIconStyle: IcThemeForegroundNoDefault | IcThemeForeground =
    getThemeForegroundColor();
  @State() small: boolean = false;

  /**
   * The title of the link group to be displayed.
   */
  @Prop() label!: string;

  componentWillLoad(): void {
    this.small = this.isSmall(this.el);
  }

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Footer Link Group"
    );
  }

  @Listen("footerResized", { target: "document" })
  footerResizeHandler(): void {
    this.small = this.isSmall(this.el);
  }

  @Listen("themeChange", { target: "document" })
  footerThemeChangeHandler(ev: CustomEvent): void {
    const theme: IcTheme = ev.detail;
    this.dropdownIconStyle = theme.mode;
  }

  private isSmall(e: HTMLElement): boolean {
    if (e.parentElement !== null) {
      if (e.parentElement.classList.contains("ic-footer")) {
        return e.parentElement.classList.contains("ic-footer-small");
      } else {
        return this.isSmall(e.parentElement);
      }
    } else {
      return false;
    }
  }

  private handleKeydown = (event: KeyboardEvent): void => {
    if (event.key === " " || event.key === "Enter") {
      this.toggleExpanded();
    }
  };

  private toggleExpanded = (): void => {
    this.expanded = !this.expanded;
  };

  render() {
    const { small, label } = this;

    return !small ? (
      <Host
        class={{
          ["footer-link-group footer-link-group-sparse"]: true,
          [`footer-link-group-${this.dropdownIconStyle}`]: true,
        }}
        role="listitem"
      >
        <div class="footer-link-label">
          <ic-typography variant="subtitle-small">{label}</ic-typography>
        </div>
        <div class="footer-link-group-links" role="list">
          <slot />
        </div>
      </Host>
    ) : (
      <Host
        class={{
          ["footer-link-group footer-link-group-small"]: true,
          [`footer-link-group-${this.dropdownIconStyle}`]: true,
        }}
        tabIndex="1"
        onClick={this.toggleExpanded}
        onKeydown={this.handleKeydown}
        aria-expanded={this.expanded}
      >
        <ic-section-container fullHeight={true}>
          <div class="footer-link-group-header">
            <div class="footer-link-label">
              <ic-typography variant="label">{label}</ic-typography>
            </div>
            {this.expanded ? (
              <svg
                class="footer-link-group-toggle"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 1200 1200"
              >
                <path
                  fill="currentColor"
                  d="M600.002 210.605L421.285 389.336L0 810.559l178.721 178.836l421.281-421.341l421.281 421.341L1200 810.559L778.733 389.336L600.002 210.605z"
                />
              </svg>
            ) : (
              <svg
                class="footer-link-group-toggle"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 1200 1200"
              >
                <g transform="translate(0 1200) scale(1 -1)">
                  <path
                    fill="currentColor"
                    d="M600.002 210.605L421.285 389.336L0 810.559l178.721 178.836l421.281-421.341l421.281 421.341L1200 810.559L778.733 389.336L600.002 210.605z"
                  />
                </g>
              </svg>
            )}
          </div>
          {this.expanded && (
            <div class="footer-link-group-links" role="list">
              <slot />
            </div>
          )}
        </ic-section-container>
      </Host>
    );
  }
}
