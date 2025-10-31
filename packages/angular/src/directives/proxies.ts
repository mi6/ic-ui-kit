/* tslint:disable */
/* auto-generated angular directive proxies */
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  NgZone,
} from "@angular/core";

import { ProxyCmp } from "./angular-component-lib/utils";

import { Components } from "@ukic/web-components";

@ProxyCmp({
  inputs: ["disabled", "expanded", "heading", "message", "size", "theme"],
  methods: ["setFocus"],
})
@Component({
  selector: "ic-accordion",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["disabled", "expanded", "heading", "message", "size", "theme"],
  standalone: false,
})
export class IcAccordion {
  protected el: HTMLIcAccordionElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcAccordion extends Components.IcAccordion {}

@ProxyCmp({
  inputs: [
    "accessibleButtonLabel",
    "expanded",
    "label",
    "singleExpansion",
    "size",
    "theme",
  ],
  methods: ["setFocus"],
})
@Component({
  selector: "ic-accordion-group",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "accessibleButtonLabel",
    "expanded",
    "label",
    "singleExpansion",
    "size",
    "theme",
  ],
  standalone: false,
})
export class IcAccordionGroup {
  protected el: HTMLIcAccordionGroupElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcAccordionGroup extends Components.IcAccordionGroup {}

@ProxyCmp({
  inputs: [
    "disabled",
    "download",
    "form",
    "formaction",
    "formenctype",
    "formmethod",
    "formnovalidate",
    "formtarget",
    "href",
    "hreflang",
    "label",
    "monochrome",
    "referrerpolicy",
    "rel",
    "size",
    "target",
    "theme",
    "transparentBackground",
    "type",
    "variant",
  ],
  methods: ["setFocus"],
})
@Component({
  selector: "ic-action-chip",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "disabled",
    "download",
    "form",
    "formaction",
    "formenctype",
    "formmethod",
    "formnovalidate",
    "formtarget",
    "href",
    "hreflang",
    { name: "label", required: true },
    "monochrome",
    "referrerpolicy",
    "rel",
    "size",
    "target",
    "theme",
    "transparentBackground",
    "type",
    "variant",
  ],
  standalone: false,
})
export class IcActionChip {
  protected el: HTMLIcActionChipElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcActionChip extends Components.IcActionChip {}

@ProxyCmp({
  inputs: [
    "announced",
    "dismissible",
    "heading",
    "message",
    "showDefaultIcon",
    "theme",
    "titleAbove",
    "variant",
  ],
})
@Component({
  selector: "ic-alert",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "announced",
    "dismissible",
    "heading",
    "message",
    "showDefaultIcon",
    "theme",
    "titleAbove",
    "variant",
  ],
  outputs: ["icDismiss"],
  standalone: false,
})
export class IcAlert {
  protected el: HTMLIcAlertElement;
  @Output() icDismiss = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcAlert extends Components.IcAlert {
  /**
   * Is emitted when the user dismisses the alert.
   */
  icDismiss: EventEmitter<CustomEvent<void>>;
}

@ProxyCmp({
  inputs: ["position", "target", "theme", "variant"],
})
@Component({
  selector: "ic-back-to-top",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["position", { name: "target", required: true }, "theme", "variant"],
  standalone: false,
})
export class IcBackToTop {
  protected el: HTMLIcBackToTopElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcBackToTop extends Components.IcBackToTop {}

@ProxyCmp({
  inputs: [
    "accessibleLabel",
    "customColor",
    "label",
    "maxNumber",
    "position",
    "size",
    "theme",
    "type",
    "variant",
    "visible",
  ],
})
@Component({
  selector: "ic-badge",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "accessibleLabel",
    "customColor",
    "label",
    "maxNumber",
    "position",
    "size",
    "theme",
    "type",
    "variant",
    "visible",
  ],
  standalone: false,
})
export class IcBadge {
  protected el: HTMLIcBadgeElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcBadge extends Components.IcBadge {}

@ProxyCmp({
  inputs: ["current", "href", "pageTitle"],
  methods: ["setFocus"],
})
@Component({
  selector: "ic-breadcrumb",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["current", "href", { name: "pageTitle", required: true }],
  standalone: false,
})
export class IcBreadcrumb {
  protected el: HTMLIcBreadcrumbElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcBreadcrumb extends Components.IcBreadcrumb {}

@ProxyCmp({
  inputs: ["backBreadcrumbOnly", "collapsed", "monochrome", "theme"],
})
@Component({
  selector: "ic-breadcrumb-group",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["backBreadcrumbOnly", "collapsed", "monochrome", "theme"],
  standalone: false,
})
export class IcBreadcrumbGroup {
  protected el: HTMLIcBreadcrumbGroupElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcBreadcrumbGroup
  extends Components.IcBreadcrumbGroup {}

@ProxyCmp({
  inputs: [
    "accept",
    "disableTooltip",
    "disabled",
    "download",
    "dropdown",
    "dropdownExpanded",
    "fileInputName",
    "fileUpload",
    "form",
    "formaction",
    "formenctype",
    "formmethod",
    "formnovalidate",
    "formtarget",
    "fullWidth",
    "href",
    "hreflang",
    "loading",
    "monochrome",
    "multiple",
    "referrerpolicy",
    "rel",
    "selectedFiles",
    "size",
    "target",
    "theme",
    "tooltipFixedPositioning",
    "tooltipPlacement",
    "transparentBackground",
    "type",
    "variant",
  ],
  methods: ["setFocus"],
})
@Component({
  selector: "ic-button",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "accept",
    "disableTooltip",
    "disabled",
    "download",
    "dropdown",
    "dropdownExpanded",
    "fileInputName",
    "fileUpload",
    "form",
    "formaction",
    "formenctype",
    "formmethod",
    "formnovalidate",
    "formtarget",
    "fullWidth",
    "href",
    "hreflang",
    "loading",
    "monochrome",
    "multiple",
    "referrerpolicy",
    "rel",
    "selectedFiles",
    "size",
    "target",
    "theme",
    "tooltipFixedPositioning",
    "tooltipPlacement",
    "transparentBackground",
    "type",
    "variant",
  ],
  outputs: ["icBlur", "icFileSelection", "icFocus"],
  standalone: false,
})
export class IcButton {
  protected el: HTMLIcButtonElement;
  @Output() icBlur = new EventEmitter<CustomEvent<void>>();
  @Output() icFileSelection = new EventEmitter<CustomEvent<FileList>>();
  @Output() icFocus = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcButton extends Components.IcButton {
  /**
   * Emitted when button has blur
   */
  icBlur: EventEmitter<CustomEvent<void>>;
  /**
   * If `fileUpload` is set to `true`, this will be emitted when a file is selected in the native explorer.
   */
  icFileSelection: EventEmitter<CustomEvent<FileList>>;
  /**
   * Emitted when button has focus
   */
  icFocus: EventEmitter<CustomEvent<void>>;
}

@ProxyCmp({
  inputs: [
    "clickable",
    "disabled",
    "expandable",
    "fullWidth",
    "heading",
    "href",
    "hreflang",
    "message",
    "referrerpolicy",
    "rel",
    "subheading",
    "target",
    "theme",
  ],
  methods: ["setFocus"],
})
@Component({
  selector: "ic-card-vertical",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "clickable",
    "disabled",
    "expandable",
    "fullWidth",
    "heading",
    "href",
    "hreflang",
    "message",
    "referrerpolicy",
    "rel",
    "subheading",
    "target",
    "theme",
  ],
  standalone: false,
})
export class IcCardVertical {
  protected el: HTMLIcCardVerticalElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcCardVertical extends Components.IcCardVertical {}

@ProxyCmp({
  inputs: [
    "additionalFieldDisplay",
    "checked",
    "disabled",
    "dynamicText",
    "form",
    "groupLabel",
    "hideLabel",
    "indeterminate",
    "label",
    "name",
    "nativeIndeterminateBehaviour",
    "size",
    "theme",
    "value",
  ],
  methods: ["setFocus"],
})
@Component({
  selector: "ic-checkbox",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "additionalFieldDisplay",
    "checked",
    "disabled",
    "dynamicText",
    "form",
    "groupLabel",
    "hideLabel",
    "indeterminate",
    { name: "label", required: true },
    "name",
    "nativeIndeterminateBehaviour",
    "size",
    "theme",
    "value",
  ],
  outputs: ["icCheck"],
  standalone: false,
})
export class IcCheckbox {
  protected el: HTMLIcCheckboxElement;
  @Output() icCheck = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcCheckbox extends Components.IcCheckbox {
  /**
   * Emitted when a checkbox has been checked.
   */
  icCheck: EventEmitter<CustomEvent<void>>;
}

@ProxyCmp({
  inputs: [
    "disabled",
    "helperText",
    "hideLabel",
    "label",
    "name",
    "required",
    "size",
    "theme",
    "validationAriaLive",
    "validationStatus",
    "validationText",
  ],
})
@Component({
  selector: "ic-checkbox-group",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "disabled",
    "helperText",
    "hideLabel",
    { name: "label", required: true },
    { name: "name", required: true },
    "required",
    "size",
    "theme",
    "validationAriaLive",
    "validationStatus",
    "validationText",
  ],
  outputs: ["icChange"],
  standalone: false,
})
export class IcCheckboxGroup {
  protected el: HTMLIcCheckboxGroupElement;
  @Output() icChange = new EventEmitter<
    CustomEvent<IIcCheckboxGroupIcChangeEventDetail>
  >();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { IcChangeEventDetail as IIcCheckboxGroupIcChangeEventDetail } from "@ukic/web-components";

export declare interface IcCheckboxGroup extends Components.IcCheckboxGroup {
  /**
   * Emitted when a checkbox is checked.
   */
  icChange: EventEmitter<CustomEvent<IIcCheckboxGroupIcChangeEventDetail>>;
}

@ProxyCmp({
  inputs: [
    "customColor",
    "disabled",
    "dismissLabel",
    "dismissible",
    "label",
    "size",
    "theme",
    "transparentBackground",
    "variant",
  ],
  methods: ["setFocus"],
})
@Component({
  selector: "ic-chip",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "customColor",
    "disabled",
    "dismissLabel",
    "dismissible",
    { name: "label", required: true },
    "size",
    "theme",
    "transparentBackground",
    "variant",
  ],
  outputs: ["icDismiss"],
  standalone: false,
})
export class IcChip {
  protected el: HTMLIcChipElement;
  @Output() icDismiss = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcChip extends Components.IcChip {
  /**
   * Is emitted when the user dismisses the chip.
   */
  icDismiss: EventEmitter<CustomEvent<void>>;
}

@ProxyCmp({
  inputs: [
    "additionalSelectors",
    "classification",
    "country",
    "inline",
    "upTo",
  ],
})
@Component({
  selector: "ic-classification-banner",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "additionalSelectors",
    "classification",
    "country",
    "inline",
    "upTo",
  ],
  standalone: false,
})
export class IcClassificationBanner {
  protected el: HTMLIcClassificationBannerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcClassificationBanner
  extends Components.IcClassificationBanner {}

@ProxyCmp({
  inputs: ["heading", "size", "theme"],
})
@Component({
  selector: "ic-data-list",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["heading", "size", "theme"],
  standalone: false,
})
export class IcDataList {
  protected el: HTMLIcDataListElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcDataList extends Components.IcDataList {}

@ProxyCmp({
  inputs: ["label", "size", "theme", "value"],
})
@Component({
  selector: "ic-data-row",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["label", "size", "theme", "value"],
  standalone: false,
})
export class IcDataRow {
  protected el: HTMLIcDataRowElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcDataRow extends Components.IcDataRow {}

@ProxyCmp({
  inputs: [
    "closeOnBackdropClick",
    "destructive",
    "disableHeightConstraint",
    "disableWidthConstraint",
    "dismissLabel",
    "heading",
    "hideCloseButton",
    "hideDefaultControls",
    "label",
    "open",
    "size",
    "theme",
  ],
  methods: ["cancelDialog", "confirmDialog"],
})
@Component({
  selector: "ic-dialog",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "closeOnBackdropClick",
    "destructive",
    "disableHeightConstraint",
    "disableWidthConstraint",
    "dismissLabel",
    "heading",
    "hideCloseButton",
    "hideDefaultControls",
    "label",
    "open",
    "size",
    "theme",
  ],
  outputs: [
    "icDialogCancelled",
    "icDialogClosed",
    "icDialogConfirmed",
    "icDialogOpened",
  ],
  standalone: false,
})
export class IcDialog {
  protected el: HTMLIcDialogElement;
  @Output() icDialogCancelled = new EventEmitter<CustomEvent<void>>();
  @Output() icDialogClosed = new EventEmitter<CustomEvent<void>>();
  @Output() icDialogConfirmed = new EventEmitter<CustomEvent<void>>();
  @Output() icDialogOpened = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcDialog extends Components.IcDialog {
  /**
   * Cancellation event emitted when default 'Cancel' button clicked or 'cancelDialog' method is called.
   */
  icDialogCancelled: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when dialog has closed.
   */
  icDialogClosed: EventEmitter<CustomEvent<void>>;
  /**
   * Confirmation event emitted when default 'Confirm' primary button clicked or 'confirmDialog' method is called.
   */
  icDialogConfirmed: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when dialog has opened.
   */
  icDialogOpened: EventEmitter<CustomEvent<void>>;
}

@ProxyCmp({
  inputs: [
    "borderStyle",
    "label",
    "labelPlacement",
    "monochrome",
    "orientation",
    "theme",
    "weight",
  ],
})
@Component({
  selector: "ic-divider",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "borderStyle",
    "label",
    "labelPlacement",
    "monochrome",
    "orientation",
    "theme",
    "weight",
  ],
  standalone: false,
})
export class IcDivider {
  protected el: HTMLIcDividerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcDivider extends Components.IcDivider {}

@ProxyCmp({
  inputs: [
    "aligned",
    "body",
    "heading",
    "imageSize",
    "maxLines",
    "subheading",
    "theme",
  ],
})
@Component({
  selector: "ic-empty-state",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "aligned",
    "body",
    "heading",
    "imageSize",
    "maxLines",
    "subheading",
    "theme",
  ],
  standalone: false,
})
export class IcEmptyState {
  protected el: HTMLIcEmptyStateElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcEmptyState extends Components.IcEmptyState {}

@ProxyCmp({
  inputs: [
    "aligned",
    "breakpoint",
    "caption",
    "copyright",
    "description",
    "groupLinks",
  ],
})
@Component({
  selector: "ic-footer",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "aligned",
    "breakpoint",
    "caption",
    "copyright",
    "description",
    "groupLinks",
  ],
  standalone: false,
})
export class IcFooter {
  protected el: HTMLIcFooterElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcFooter extends Components.IcFooter {}

@ProxyCmp({
  inputs: ["download", "href", "hreflang", "referrerpolicy", "rel", "target"],
})
@Component({
  selector: "ic-footer-link",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["download", "href", "hreflang", "referrerpolicy", "rel", "target"],
  standalone: false,
})
export class IcFooterLink {
  protected el: HTMLIcFooterLinkElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcFooterLink extends Components.IcFooterLink {}

@ProxyCmp({
  inputs: ["label"],
})
@Component({
  selector: "ic-footer-link-group",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [{ name: "label", required: true }],
  standalone: false,
})
export class IcFooterLinkGroup {
  protected el: HTMLIcFooterLinkGroupElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcFooterLinkGroup
  extends Components.IcFooterLinkGroup {}

@ProxyCmp({
  inputs: [
    "aligned",
    "backgroundImage",
    "contentAligned",
    "disableBackgroundParallax",
    "heading",
    "secondaryHeading",
    "secondarySubheading",
    "size",
    "subheading",
  ],
})
@Component({
  selector: "ic-hero",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "aligned",
    "backgroundImage",
    "contentAligned",
    "disableBackgroundParallax",
    "heading",
    "secondaryHeading",
    "secondarySubheading",
    "size",
    "subheading",
  ],
  standalone: false,
})
export class IcHero {
  protected el: HTMLIcHeroElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcHero extends Components.IcHero {}

@ProxyCmp({
  inputs: ["appearance"],
})
@Component({
  selector: "ic-horizontal-scroll",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["appearance"],
  standalone: false,
})
export class IcHorizontalScroll {
  protected el: HTMLIcHorizontalScrollElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcHorizontalScroll
  extends Components.IcHorizontalScroll {}

@ProxyCmp({
  inputs: [
    "disabled",
    "fullWidth",
    "multiLine",
    "readonly",
    "size",
    "validationInline",
    "validationStatus",
  ],
})
@Component({
  selector: "ic-input-component-container",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "disabled",
    "fullWidth",
    "multiLine",
    "readonly",
    "size",
    "validationInline",
    "validationStatus",
  ],
  standalone: false,
})
export class IcInputComponentContainer {
  protected el: HTMLIcInputComponentContainerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcInputComponentContainer
  extends Components.IcInputComponentContainer {}

@ProxyCmp({
  inputs: ["disabled", "readonly"],
})
@Component({
  selector: "ic-input-container",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["disabled", "readonly"],
  standalone: false,
})
export class IcInputContainer {
  protected el: HTMLIcInputContainerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcInputContainer extends Components.IcInputContainer {}

@ProxyCmp({
  inputs: [
    "disabled",
    "for",
    "helperText",
    "hideLabel",
    "label",
    "readonly",
    "required",
    "status",
  ],
})
@Component({
  selector: "ic-input-label",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "disabled",
    "for",
    "helperText",
    "hideLabel",
    { name: "label", required: true },
    "readonly",
    "required",
    "status",
  ],
  standalone: false,
})
export class IcInputLabel {
  protected el: HTMLIcInputLabelElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcInputLabel extends Components.IcInputLabel {}

@ProxyCmp({
  inputs: ["ariaLiveMode", "for", "fullWidth", "message", "status"],
})
@Component({
  selector: "ic-input-validation",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "ariaLiveMode",
    "for",
    "fullWidth",
    { name: "message", required: true },
    "status",
  ],
  standalone: false,
})
export class IcInputValidation {
  protected el: HTMLIcInputValidationElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcInputValidation
  extends Components.IcInputValidation {}

@ProxyCmp({
  inputs: [
    "aligned",
    "columns",
    "defaultColSpan",
    "defaultColWidth",
    "defaultRowSpan",
    "fullHeight",
    "gridSpacing",
    "rows",
    "type",
  ],
})
@Component({
  selector: "ic-layout-grid",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "aligned",
    "columns",
    "defaultColSpan",
    "defaultColWidth",
    "defaultRowSpan",
    "fullHeight",
    "gridSpacing",
    "rows",
    "type",
  ],
  standalone: false,
})
export class IcLayoutGrid {
  protected el: HTMLIcLayoutGridElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcLayoutGrid extends Components.IcLayoutGrid {}

@ProxyCmp({
  inputs: ["colSpan", "colStart", "hideInMobileMode", "rowSpan", "rowStart"],
})
@Component({
  selector: "ic-layout-grid-item",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["colSpan", "colStart", "hideInMobileMode", "rowSpan", "rowStart"],
  standalone: false,
})
export class IcLayoutGridItem {
  protected el: HTMLIcLayoutGridItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcLayoutGridItem extends Components.IcLayoutGridItem {}

@ProxyCmp({
  inputs: [
    "download",
    "href",
    "hreflang",
    "monochrome",
    "referrerpolicy",
    "rel",
    "target",
    "theme",
  ],
  methods: ["setFocus"],
})
@Component({
  selector: "ic-link",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "download",
    "href",
    "hreflang",
    "monochrome",
    "referrerpolicy",
    "rel",
    "target",
    "theme",
  ],
  standalone: false,
})
export class IcLink {
  protected el: HTMLIcLinkElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcLink extends Components.IcLink {}

@ProxyCmp({
  inputs: [
    "description",
    "fullWidth",
    "label",
    "labelDuration",
    "max",
    "min",
    "monochrome",
    "progress",
    "size",
    "theme",
    "type",
  ],
})
@Component({
  selector: "ic-loading-indicator",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "description",
    "fullWidth",
    "label",
    "labelDuration",
    "max",
    "min",
    "monochrome",
    "progress",
    "size",
    "theme",
    "type",
  ],
  standalone: false,
})
export class IcLoadingIndicator {
  protected el: HTMLIcLoadingIndicatorElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcLoadingIndicator
  extends Components.IcLoadingIndicator {}

@ProxyCmp({
  inputs: [
    "activationType",
    "anchorEl",
    "closeOnSelect",
    "fullWidth",
    "inputEl",
    "inputLabel",
    "labelField",
    "menuId",
    "open",
    "options",
    "searchMode",
    "size",
    "value",
    "valueField",
  ],
  methods: ["handleKeyboardOpen"],
})
@Component({
  selector: "ic-menu",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "activationType",
    "anchorEl",
    "closeOnSelect",
    "fullWidth",
    "inputEl",
    { name: "inputLabel", required: true },
    "labelField",
    { name: "menuId", required: true },
    { name: "open", required: true },
    { name: "options", required: true },
    "searchMode",
    "size",
    { name: "value", required: true },
    "valueField",
  ],
  outputs: ["icClear"],
  standalone: false,
})
export class IcMenu {
  protected el: HTMLIcMenuElement;
  @Output() icClear = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcMenu extends Components.IcMenu {
  /**
   * Emitted when the clear all button is clicked.
   */
  icClear: EventEmitter<CustomEvent<void>>;
}

@ProxyCmp({
  inputs: ["label"],
})
@Component({
  selector: "ic-menu-group",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["label"],
  standalone: false,
})
export class IcMenuGroup {
  protected el: HTMLIcMenuGroupElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcMenuGroup extends Components.IcMenuGroup {}

@ProxyCmp({
  inputs: [
    "checked",
    "description",
    "disabled",
    "href",
    "hreflang",
    "keyboardShortcutLabel",
    "label",
    "referrerpolicy",
    "rel",
    "submenuTriggerFor",
    "target",
    "variant",
  ],
})
@Component({
  selector: "ic-menu-item",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "checked",
    "description",
    "disabled",
    "href",
    "hreflang",
    "keyboardShortcutLabel",
    { name: "label", required: true },
    "referrerpolicy",
    "rel",
    "submenuTriggerFor",
    "target",
    "variant",
  ],
  outputs: ["icToggleChecked"],
  standalone: false,
})
export class IcMenuItem {
  protected el: HTMLIcMenuItemElement;
  @Output() icToggleChecked = new EventEmitter<
    CustomEvent<{ checked: boolean }>
  >();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcMenuItem extends Components.IcMenuItem {
  /**
   * Emitted when the user clicks a menu item that is set to the toggle variant.
   */
  icToggleChecked: EventEmitter<CustomEvent<{ checked: boolean }>>;
}

@ProxyCmp({
  inputs: [
    "download",
    "href",
    "hreflang",
    "label",
    "referrerpolicy",
    "rel",
    "target",
    "theme",
  ],
  methods: ["setFocus"],
})
@Component({
  selector: "ic-navigation-button",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "download",
    "href",
    "hreflang",
    { name: "label", required: true },
    "referrerpolicy",
    "rel",
    "target",
    "theme",
  ],
  standalone: false,
})
export class IcNavigationButton {
  protected el: HTMLIcNavigationButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcNavigationButton
  extends Components.IcNavigationButton {}

@ProxyCmp({
  inputs: ["expandable", "expanded", "label", "theme"],
  methods: ["setFocus"],
})
@Component({
  selector: "ic-navigation-group",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "expandable",
    "expanded",
    { name: "label", required: true },
    "theme",
  ],
  standalone: false,
})
export class IcNavigationGroup {
  protected el: HTMLIcNavigationGroupElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcNavigationGroup
  extends Components.IcNavigationGroup {}

@ProxyCmp({
  inputs: [
    "download",
    "href",
    "hreflang",
    "label",
    "referrerpolicy",
    "rel",
    "selected",
    "target",
    "theme",
  ],
  methods: ["setFocus"],
})
@Component({
  selector: "ic-navigation-item",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "download",
    "href",
    "hreflang",
    "label",
    "referrerpolicy",
    "rel",
    "selected",
    "target",
    "theme",
  ],
  standalone: false,
})
export class IcNavigationItem {
  protected el: HTMLIcNavigationItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcNavigationItem extends Components.IcNavigationItem {}

@ProxyCmp({
  inputs: ["status", "theme", "version"],
})
@Component({
  selector: "ic-navigation-menu",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["status", "theme", "version"],
  standalone: false,
})
export class IcNavigationMenu {
  protected el: HTMLIcNavigationMenuElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcNavigationMenu extends Components.IcNavigationMenu {}

@ProxyCmp({
  inputs: [
    "aligned",
    "border",
    "heading",
    "reverseOrder",
    "size",
    "sticky",
    "stickyDesktopOnly",
    "subheading",
    "theme",
  ],
})
@Component({
  selector: "ic-page-header",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "aligned",
    "border",
    "heading",
    "reverseOrder",
    "size",
    "sticky",
    "stickyDesktopOnly",
    "subheading",
    "theme",
  ],
  standalone: false,
})
export class IcPageHeader {
  protected el: HTMLIcPageHeaderElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcPageHeader extends Components.IcPageHeader {}

@ProxyCmp({
  inputs: [
    "adjacentPageCount",
    "boundaryPageCount",
    "currentPage",
    "defaultPage",
    "disabled",
    "hideCurrentPage",
    "hideFirstAndLastPageButton",
    "label",
    "monochrome",
    "pages",
    "theme",
    "type",
  ],
  methods: ["setCurrentPage"],
})
@Component({
  selector: "ic-pagination",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "adjacentPageCount",
    "boundaryPageCount",
    "currentPage",
    "defaultPage",
    "disabled",
    "hideCurrentPage",
    "hideFirstAndLastPageButton",
    "label",
    "monochrome",
    { name: "pages", required: true },
    "theme",
    "type",
  ],
  outputs: ["icPageChange"],
  standalone: false,
})
export class IcPagination {
  protected el: HTMLIcPaginationElement;
  @Output() icPageChange = new EventEmitter<
    CustomEvent<IIcPaginationIcChangeEventDetail>
  >();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { IcChangeEventDetail as IIcPaginationIcChangeEventDetail } from "@ukic/web-components";

export declare interface IcPagination extends Components.IcPagination {
  /**
   * Emitted when a page is selected.
   */
  icPageChange: EventEmitter<CustomEvent<IIcPaginationIcChangeEventDetail>>;
}

@ProxyCmp({
  inputs: [
    "disabled",
    "label",
    "monochrome",
    "page",
    "selected",
    "theme",
    "type",
  ],
})
@Component({
  selector: "ic-pagination-item",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "disabled",
    "label",
    "monochrome",
    "page",
    "selected",
    "theme",
    "type",
  ],
  standalone: false,
})
export class IcPaginationItem {
  protected el: HTMLIcPaginationItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcPaginationItem extends Components.IcPaginationItem {}

@ProxyCmp({
  inputs: ["anchor", "fixedPositioning", "open", "submenuId", "theme"],
})
@Component({
  selector: "ic-popover-menu",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["anchor", "fixedPositioning", "open", "submenuId", "theme"],
  outputs: ["icPopoverClosed"],
  standalone: false,
})
export class IcPopoverMenu {
  protected el: HTMLIcPopoverMenuElement;
  @Output() icPopoverClosed = new EventEmitter<
    CustomEvent<HTMLIcMenuItemElement>
  >();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcPopoverMenu extends Components.IcPopoverMenu {
  /**
   * Emitted when the popover menu is closed.
   */
  icPopoverClosed: EventEmitter<CustomEvent<HTMLIcMenuItemElement>>;
}

@ProxyCmp({
  inputs: [
    "disabled",
    "helperText",
    "hideLabel",
    "label",
    "name",
    "orientation",
    "required",
    "size",
    "theme",
    "validationAriaLive",
    "validationStatus",
    "validationText",
  ],
})
@Component({
  selector: "ic-radio-group",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "disabled",
    "helperText",
    "hideLabel",
    { name: "label", required: true },
    { name: "name", required: true },
    "orientation",
    "required",
    "size",
    "theme",
    "validationAriaLive",
    "validationStatus",
    "validationText",
  ],
  outputs: ["icChange"],
  standalone: false,
})
export class IcRadioGroup {
  protected el: HTMLIcRadioGroupElement;
  @Output() icChange = new EventEmitter<
    CustomEvent<IIcRadioGroupIcChangeEventDetail>
  >();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { IcChangeEventDetail as IIcRadioGroupIcChangeEventDetail } from "@ukic/web-components";

export declare interface IcRadioGroup extends Components.IcRadioGroup {
  /**
   * Emitted when a user selects a radio.
   */
  icChange: EventEmitter<CustomEvent<IIcRadioGroupIcChangeEventDetail>>;
}

@ProxyCmp({
  inputs: [
    "additionalFieldDisplay",
    "disabled",
    "dynamicText",
    "form",
    "groupLabel",
    "label",
    "name",
    "selected",
    "theme",
    "value",
  ],
  methods: ["setFocus"],
})
@Component({
  selector: "ic-radio-option",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "additionalFieldDisplay",
    "disabled",
    "dynamicText",
    "form",
    "groupLabel",
    "label",
    "name",
    "selected",
    "theme",
    { name: "value", required: true },
  ],
  outputs: ["icCheck", "icSelectedChange"],
  standalone: false,
})
export class IcRadioOption {
  protected el: HTMLIcRadioOptionElement;
  @Output() icCheck = new EventEmitter<
    CustomEvent<IIcRadioOptionIcValueEventDetail>
  >();
  @Output() icSelectedChange = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { IcValueEventDetail as IIcRadioOptionIcValueEventDetail } from "@ukic/web-components";

export declare interface IcRadioOption extends Components.IcRadioOption {
  /**
   * Emitted when the radio option is selected.
   */
  icCheck: EventEmitter<CustomEvent<IIcRadioOptionIcValueEventDetail>>;
  /**
   * Emitted when the radio option is selected or deselected.
   */
  icSelectedChange: EventEmitter<CustomEvent<void>>;
}

@ProxyCmp({
  inputs: [
    "assistiveHintText",
    "autocapitalize",
    "autocomplete",
    "autocorrect",
    "autofocus",
    "charactersUntilSuggestion",
    "debounce",
    "disableAutoFiltering",
    "disabled",
    "emptyOptionListText",
    "focusOnLoad",
    "fullWidth",
    "helperText",
    "hideLabel",
    "label",
    "labelField",
    "loading",
    "loadingErrorLabel",
    "loadingLabel",
    "name",
    "options",
    "placeholder",
    "preventFormSubmitOnSearch",
    "readonly",
    "required",
    "searchMode",
    "size",
    "spellcheck",
    "theme",
    "timeout",
    "value",
    "valueField",
  ],
  methods: ["setFocus"],
})
@Component({
  selector: "ic-search-bar",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "assistiveHintText",
    "autocapitalize",
    "autocomplete",
    "autocorrect",
    "autofocus",
    "charactersUntilSuggestion",
    "debounce",
    "disableAutoFiltering",
    "disabled",
    "emptyOptionListText",
    "focusOnLoad",
    "fullWidth",
    "helperText",
    "hideLabel",
    { name: "label", required: true },
    "labelField",
    "loading",
    "loadingErrorLabel",
    "loadingLabel",
    "name",
    "options",
    "placeholder",
    "preventFormSubmitOnSearch",
    "readonly",
    "required",
    "searchMode",
    "size",
    "spellcheck",
    "theme",
    "timeout",
    "value",
    "valueField",
  ],
  outputs: [
    "icChange",
    "icClear",
    "icInput",
    "icOptionSelect",
    "icMenuChange",
    "icRetryLoad",
    "icSubmitSearch",
    "icSearchBarBlur",
    "icSearchBarFocus",
    "icKeydown",
  ],
  standalone: false,
})
export class IcSearchBar {
  protected el: HTMLIcSearchBarElement;
  @Output() icChange = new EventEmitter<
    CustomEvent<IIcSearchBarIcValueEventDetail>
  >();
  @Output() icClear = new EventEmitter<CustomEvent<void>>();
  @Output() icInput = new EventEmitter<
    CustomEvent<IIcSearchBarIcValueEventDetail>
  >();
  @Output() icOptionSelect = new EventEmitter<
    CustomEvent<IIcSearchBarIcOptionSelectEventDetail>
  >();
  @Output() icMenuChange = new EventEmitter<
    CustomEvent<IIcSearchBarIcMenuChangeEventDetail>
  >();
  @Output() icRetryLoad = new EventEmitter<
    CustomEvent<IIcSearchBarIcMultiValueEventDetail>
  >();
  @Output() icSubmitSearch = new EventEmitter<
    CustomEvent<IIcSearchBarIcValueEventDetail>
  >();
  @Output() icSearchBarBlur = new EventEmitter<
    CustomEvent<IIcSearchBarIcSearchBarBlurEventDetail>
  >();
  @Output() icSearchBarFocus = new EventEmitter<
    CustomEvent<IIcSearchBarIcValueEventDetail>
  >();
  @Output() icKeydown = new EventEmitter<
    CustomEvent<{ event: KeyboardEvent }>
  >();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { IcValueEventDetail as IIcSearchBarIcValueEventDetail } from "@ukic/web-components";
import type { IcOptionSelectEventDetail as IIcSearchBarIcOptionSelectEventDetail } from "@ukic/web-components";
import type { IcMenuChangeEventDetail as IIcSearchBarIcMenuChangeEventDetail } from "@ukic/web-components";
import type { IcMultiValueEventDetail as IIcSearchBarIcMultiValueEventDetail } from "@ukic/web-components";
import type { IcSearchBarBlurEventDetail as IIcSearchBarIcSearchBarBlurEventDetail } from "@ukic/web-components";

export declare interface IcSearchBar extends Components.IcSearchBar {
  /**
   * Emitted when the value has changed.
   */
  icChange: EventEmitter<CustomEvent<IIcSearchBarIcValueEventDetail>>;
  /**
   * Emitted when value is cleared with clear button
   */
  icClear: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when a keyboard input occurred.
   */
  icInput: EventEmitter<CustomEvent<IIcSearchBarIcValueEventDetail>>;
  /**
   * Emitted when option is highlighted within the menu
   */
  icOptionSelect: EventEmitter<
    CustomEvent<IIcSearchBarIcOptionSelectEventDetail>
  >;
  /**
   * Emitted when the state of the menu changes (i.e. open or close)
   */
  icMenuChange: EventEmitter<CustomEvent<IIcSearchBarIcMenuChangeEventDetail>>;
  /**
   * Emitted when the 'retry loading' button is clicked
   */
  icRetryLoad: EventEmitter<CustomEvent<IIcSearchBarIcMultiValueEventDetail>>;
  /**
   * Emitted when the search value has been submitted
   */
  icSubmitSearch: EventEmitter<CustomEvent<IIcSearchBarIcValueEventDetail>>;
  /**
   * Emitted when blur is invoked from ic-search-bar
   */
  icSearchBarBlur: EventEmitter<
    CustomEvent<IIcSearchBarIcSearchBarBlurEventDetail>
  >;
  /**
   * Emitted when focus is invoked from ic-search-bar
   */
  icSearchBarFocus: EventEmitter<CustomEvent<IIcSearchBarIcValueEventDetail>>;
  /**
   * Emitted when a keydown event occurred.
   */
  icKeydown: EventEmitter<CustomEvent<{ event: KeyboardEvent }>>;
}

@ProxyCmp({
  inputs: ["aligned", "fullHeight"],
})
@Component({
  selector: "ic-section-container",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["aligned", "fullHeight"],
  standalone: false,
})
export class IcSectionContainer {
  protected el: HTMLIcSectionContainerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcSectionContainer
  extends Components.IcSectionContainer {}

@ProxyCmp({
  inputs: [
    "debounce",
    "disableAutoFiltering",
    "disabled",
    "emptyOptionListText",
    "form",
    "fullWidth",
    "helperText",
    "hideLabel",
    "includeDescriptionsInSearch",
    "includeGroupTitlesInSearch",
    "label",
    "loading",
    "loadingErrorLabel",
    "loadingLabel",
    "multiple",
    "name",
    "options",
    "placeholder",
    "readonly",
    "required",
    "searchMatchPosition",
    "searchable",
    "selectOnEnter",
    "showClearButton",
    "size",
    "theme",
    "timeout",
    "validationAriaLive",
    "validationStatus",
    "validationText",
    "value",
  ],
  methods: ["setFocus"],
})
@Component({
  selector: "ic-select",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "debounce",
    "disableAutoFiltering",
    "disabled",
    "emptyOptionListText",
    "form",
    "fullWidth",
    "helperText",
    "hideLabel",
    "includeDescriptionsInSearch",
    "includeGroupTitlesInSearch",
    { name: "label", required: true },
    "loading",
    "loadingErrorLabel",
    "loadingLabel",
    "multiple",
    "name",
    "options",
    "placeholder",
    "readonly",
    "required",
    "searchMatchPosition",
    "searchable",
    "selectOnEnter",
    "showClearButton",
    "size",
    "theme",
    "timeout",
    "validationAriaLive",
    "validationStatus",
    "validationText",
    "value",
  ],
  outputs: [
    "icBlur",
    "icChange",
    "icClear",
    "icClose",
    "icFocus",
    "icInput",
    "icOpen",
    "icOptionSelect",
    "icOptionDeselect",
    "icRetryLoad",
  ],
  standalone: false,
})
export class IcSelect {
  protected el: HTMLIcSelectElement;
  @Output() icBlur = new EventEmitter<CustomEvent<void>>();
  @Output() icChange = new EventEmitter<
    CustomEvent<IIcSelectIcMultiValueEventDetail>
  >();
  @Output() icClear = new EventEmitter<CustomEvent<void>>();
  @Output() icClose = new EventEmitter<CustomEvent<void>>();
  @Output() icFocus = new EventEmitter<CustomEvent<void>>();
  @Output() icInput = new EventEmitter<
    CustomEvent<IIcSelectIcMultiValueEventDetail>
  >();
  @Output() icOpen = new EventEmitter<CustomEvent<void>>();
  @Output() icOptionSelect = new EventEmitter<
    CustomEvent<IIcSelectIcOptionSelectEventDetail>
  >();
  @Output() icOptionDeselect = new EventEmitter<
    CustomEvent<IIcSelectIcOptionSelectEventDetail>
  >();
  @Output() icRetryLoad = new EventEmitter<
    CustomEvent<IIcSelectIcMultiValueEventDetail>
  >();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { IcMultiValueEventDetail as IIcSelectIcMultiValueEventDetail } from "@ukic/web-components";
import type { IcOptionSelectEventDetail as IIcSelectIcOptionSelectEventDetail } from "@ukic/web-components";

export declare interface IcSelect extends Components.IcSelect {
  /**
   * Emitted when the select loses focus.
   */
  icBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the value changes.
   */
  icChange: EventEmitter<CustomEvent<IIcSelectIcMultiValueEventDetail>>;
  /**
   * Emitted when the clear or clear all button is clicked.
   */
  icClear: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the select options menu is closed.
   */
  icClose: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the select gains focus.
   */
  icFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when a keyboard input occurred.
   */
  icInput: EventEmitter<CustomEvent<IIcSelectIcMultiValueEventDetail>>;
  /**
   * Emitted when the select options menu is opened.
   */
  icOpen: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when an option is selected.
Selecting an option will also trigger an `icChange/onIcChange` due to the value being updated.
   */
  icOptionSelect: EventEmitter<CustomEvent<IIcSelectIcOptionSelectEventDetail>>;
  /**
   * Emitted when `multiple` is `true` and an option is deselected.
   */
  icOptionDeselect: EventEmitter<
    CustomEvent<IIcSelectIcOptionSelectEventDetail>
  >;
  /**
   * Emitted when the 'retry loading' button is clicked for a searchable variant.
   */
  icRetryLoad: EventEmitter<CustomEvent<IIcSelectIcMultiValueEventDetail>>;
}

@ProxyCmp({
  inputs: [
    "appTitle",
    "closeOnNavItemClick",
    "collapsedIconLabels",
    "disableAutoParentStyling",
    "disableTopBarBehaviour",
    "expanded",
    "href",
    "shortAppTitle",
    "static",
    "status",
    "version",
  ],
})
@Component({
  selector: "ic-side-navigation",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "appTitle",
    "closeOnNavItemClick",
    "collapsedIconLabels",
    "disableAutoParentStyling",
    "disableTopBarBehaviour",
    "expanded",
    "href",
    "shortAppTitle",
    "static",
    "status",
    "version",
  ],
  outputs: ["icSideNavExpanded"],
  standalone: false,
})
export class IcSideNavigation {
  protected el: HTMLIcSideNavigationElement;
  @Output() icSideNavExpanded = new EventEmitter<
    CustomEvent<IIcSideNavigationIcExpandedDetail>
  >();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { IcExpandedDetail as IIcSideNavigationIcExpandedDetail } from "@ukic/web-components";

export declare interface IcSideNavigation extends Components.IcSideNavigation {
  /**
   * Emitted when the side navigation is collapsed and expanded.
   */
  icSideNavExpanded: EventEmitter<
    CustomEvent<IIcSideNavigationIcExpandedDetail>
  >;
}

@ProxyCmp({
  inputs: ["theme", "variant"],
})
@Component({
  selector: "ic-skeleton",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["theme", "variant"],
  standalone: false,
})
export class IcSkeleton {
  protected el: HTMLIcSkeletonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcSkeleton extends Components.IcSkeleton {}

@ProxyCmp({
  inputs: [
    "fullWidth",
    "inline",
    "label",
    "monochrome",
    "target",
    "theme",
    "transparentBackground",
  ],
  methods: ["setFocus"],
})
@Component({
  selector: "ic-skip-link",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "fullWidth",
    "inline",
    "label",
    "monochrome",
    { name: "target", required: true },
    "theme",
    "transparentBackground",
  ],
  standalone: false,
})
export class IcSkipLink {
  protected el: HTMLIcSkipLinkElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcSkipLink extends Components.IcSkipLink {}

@ProxyCmp({
  inputs: [
    "announced",
    "label",
    "size",
    "status",
    "theme",
    "uppercase",
    "variant",
  ],
})
@Component({
  selector: "ic-status-tag",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "announced",
    { name: "label", required: true },
    "size",
    "status",
    "theme",
    "uppercase",
    "variant",
  ],
  standalone: false,
})
export class IcStatusTag {
  protected el: HTMLIcStatusTagElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcStatusTag extends Components.IcStatusTag {}

@ProxyCmp({
  inputs: ["heading", "icI18n", "status", "subheading", "type"],
})
@Component({
  selector: "ic-step",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["heading", "icI18n", "status", "subheading", "type"],
  standalone: false,
})
export class IcStep {
  protected el: HTMLIcStepElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcStep extends Components.IcStep {}

@ProxyCmp({
  inputs: [
    "aligned",
    "connectorWidth",
    "hideStepInfo",
    "icI18n",
    "theme",
    "variant",
  ],
})
@Component({
  selector: "ic-stepper",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "aligned",
    "connectorWidth",
    "hideStepInfo",
    "icI18n",
    "theme",
    "variant",
  ],
  standalone: false,
})
export class IcStepper {
  protected el: HTMLIcStepperElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcStepper extends Components.IcStepper {}

@ProxyCmp({
  inputs: [
    "checked",
    "disabled",
    "helperText",
    "hideLabel",
    "label",
    "name",
    "size",
    "theme",
    "value",
  ],
  methods: ["setFocus"],
})
@Component({
  selector: "ic-switch",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "checked",
    "disabled",
    "helperText",
    "hideLabel",
    { name: "label", required: true },
    "name",
    "size",
    "theme",
    "value",
  ],
  outputs: ["icBlur", "icChange", "icFocus"],
  standalone: false,
})
export class IcSwitch {
  protected el: HTMLIcSwitchElement;
  @Output() icBlur = new EventEmitter<CustomEvent<void>>();
  @Output() icChange = new EventEmitter<
    CustomEvent<IIcSwitchIcSwitchChangeEventDetail>
  >();
  @Output() icFocus = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { IcSwitchChangeEventDetail as IIcSwitchIcSwitchChangeEventDetail } from "@ukic/web-components";

export declare interface IcSwitch extends Components.IcSwitch {
  /**
   * Emitted when the toggle loses focus.
   */
  icBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the value property has changed.
   */
  icChange: EventEmitter<CustomEvent<IIcSwitchIcSwitchChangeEventDetail>>;
  /**
   * Emitted when the toggle has focus.
   */
  icFocus: EventEmitter<CustomEvent<void>>;
}

@ProxyCmp({
  inputs: ["disabled"],
  methods: ["setFocus"],
})
@Component({
  selector: "ic-tab",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["disabled"],
  standalone: false,
})
export class IcTab {
  protected el: HTMLIcTabElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcTab extends Components.IcTab {}

@ProxyCmp({
  inputs: [
    "activationType",
    "contextId",
    "monochrome",
    "selectedTabIndex",
    "theme",
  ],
  methods: ["setFocus"],
})
@Component({
  selector: "ic-tab-context",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "activationType",
    "contextId",
    "monochrome",
    "selectedTabIndex",
    "theme",
  ],
  outputs: ["icTabSelect"],
  standalone: false,
})
export class IcTabContext {
  protected el: HTMLIcTabContextElement;
  @Output() icTabSelect = new EventEmitter<
    CustomEvent<IIcTabContextIcTabSelectEventDetail>
  >();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { IcTabSelectEventDetail as IIcTabContextIcTabSelectEventDetail } from "@ukic/web-components";

export declare interface IcTabContext extends Components.IcTabContext {
  /**
   * Emitted when a user selects a tab.
   */
  icTabSelect: EventEmitter<CustomEvent<IIcTabContextIcTabSelectEventDetail>>;
}

@ProxyCmp({
  inputs: ["inline", "label"],
})
@Component({
  selector: "ic-tab-group",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["inline", { name: "label", required: true }],
  standalone: false,
})
export class IcTabGroup {
  protected el: HTMLIcTabGroupElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcTabGroup extends Components.IcTabGroup {}

@ProxyCmp({})
@Component({
  selector: "ic-tab-panel",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false,
})
export class IcTabPanel {
  protected el: HTMLIcTabPanelElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcTabPanel extends Components.IcTabPanel {}

@ProxyCmp({
  inputs: [
    "autocapitalize",
    "autocomplete",
    "autocorrect",
    "autofocus",
    "debounce",
    "disabled",
    "fullWidth",
    "helperText",
    "hideCharCount",
    "hideLabel",
    "inputId",
    "inputmode",
    "label",
    "max",
    "maxCharacters",
    "maxCharactersMessage",
    "maxMessage",
    "min",
    "minCharacters",
    "minCharactersMessage",
    "minMessage",
    "name",
    "placeholder",
    "readonly",
    "required",
    "resize",
    "rows",
    "size",
    "spellcheck",
    "theme",
    "type",
    "validationAriaLive",
    "validationInline",
    "validationStatus",
    "validationText",
    "value",
  ],
  methods: ["setFocus"],
})
@Component({
  selector: "ic-text-field",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "autocapitalize",
    "autocomplete",
    "autocorrect",
    "autofocus",
    "debounce",
    "disabled",
    "fullWidth",
    "helperText",
    "hideCharCount",
    "hideLabel",
    "inputId",
    "inputmode",
    { name: "label", required: true },
    "max",
    "maxCharacters",
    "maxCharactersMessage",
    "maxMessage",
    "min",
    "minCharacters",
    "minCharactersMessage",
    "minMessage",
    "name",
    "placeholder",
    "readonly",
    "required",
    "resize",
    "rows",
    "size",
    "spellcheck",
    "theme",
    "type",
    "validationAriaLive",
    "validationInline",
    "validationStatus",
    "validationText",
    "value",
  ],
  outputs: [
    "icBlur",
    "icChange",
    "icFocus",
    "icInput",
    "icKeydown",
    "icScroll",
  ],
  standalone: false,
})
export class IcTextField {
  protected el: HTMLIcTextFieldElement;
  @Output() icBlur = new EventEmitter<
    CustomEvent<IIcTextFieldIcValueEventDetail>
  >();
  @Output() icChange = new EventEmitter<
    CustomEvent<IIcTextFieldIcValueEventDetail>
  >();
  @Output() icFocus = new EventEmitter<
    CustomEvent<IIcTextFieldIcValueEventDetail>
  >();
  @Output() icInput = new EventEmitter<
    CustomEvent<IIcTextFieldIcValueEventDetail>
  >();
  @Output() icKeydown = new EventEmitter<
    CustomEvent<{ event: KeyboardEvent }>
  >();
  @Output() icScroll = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { IcValueEventDetail as IIcTextFieldIcValueEventDetail } from "@ukic/web-components";

export declare interface IcTextField extends Components.IcTextField {
  /**
   * Emitted when input loses focus.
   */
  icBlur: EventEmitter<CustomEvent<IIcTextFieldIcValueEventDetail>>;
  /**
   * Emitted when the value has changed.
   */
  icChange: EventEmitter<CustomEvent<IIcTextFieldIcValueEventDetail>>;
  /**
   * Emitted when input gains focus.
   */
  icFocus: EventEmitter<CustomEvent<IIcTextFieldIcValueEventDetail>>;
  /**
   * Emitted when a keyboard input occurred.
   */
  icInput: EventEmitter<CustomEvent<IIcTextFieldIcValueEventDetail>>;
  /**
   * Emitted when a keydown event occurred.
   */
  icKeydown: EventEmitter<CustomEvent<{ event: KeyboardEvent }>>;
  /**
   * Emitted when the textarea variant is scrolled.
   */
  icScroll: EventEmitter<CustomEvent<any>>;
}

@ProxyCmp({
  inputs: ["brandColor", "theme"],
})
@Component({
  selector: "ic-theme",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["brandColor", "theme"],
  outputs: ["icThemeChange"],
  standalone: false,
})
export class IcTheme {
  protected el: HTMLIcThemeElement;
  @Output() icThemeChange = new EventEmitter<
    CustomEvent<IIcThemeIcThemeSettings>
  >();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { IcThemeSettings as IIcThemeIcThemeSettings } from "@ukic/web-components";

export declare interface IcTheme extends Components.IcTheme {
  /**
   * Emitted when the theme is changed.
   */
  icThemeChange: EventEmitter<CustomEvent<IIcThemeIcThemeSettings>>;
}

@ProxyCmp({
  inputs: [
    "autoDismissTimeout",
    "dismissButtonAriaLabel",
    "dismissMode",
    "heading",
    "message",
    "neutralIconAriaLabel",
    "variant",
  ],
})
@Component({
  selector: "ic-toast",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "autoDismissTimeout",
    "dismissButtonAriaLabel",
    "dismissMode",
    { name: "heading", required: true },
    "message",
    "neutralIconAriaLabel",
    "variant",
  ],
  outputs: ["icDismiss"],
  standalone: false,
})
export class IcToast {
  protected el: HTMLIcToastElement;
  @Output() icDismiss = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcToast extends Components.IcToast {
  /**
   * Is emitted when the user dismisses the toast
   */
  icDismiss: EventEmitter<CustomEvent<void>>;
}

@ProxyCmp({
  inputs: ["openToast"],
})
@Component({
  selector: "ic-toast-region",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["openToast"],
  standalone: false,
})
export class IcToastRegion {
  protected el: HTMLIcToastRegionElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcToastRegion extends Components.IcToastRegion {}

@ProxyCmp({
  inputs: [
    "accessibleLabel",
    "checked",
    "disabled",
    "fullWidth",
    "iconPlacement",
    "label",
    "loading",
    "monochrome",
    "outline",
    "size",
    "theme",
    "tooltipPlacement",
    "variant",
  ],
})
@Component({
  selector: "ic-toggle-button",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "accessibleLabel",
    "checked",
    "disabled",
    "fullWidth",
    "iconPlacement",
    "label",
    "loading",
    "monochrome",
    "outline",
    "size",
    "theme",
    "tooltipPlacement",
    "variant",
  ],
  outputs: ["icToggleChecked"],
  standalone: false,
})
export class IcToggleButton {
  protected el: HTMLIcToggleButtonElement;
  @Output() icToggleChecked = new EventEmitter<
    CustomEvent<{ checked: boolean }>
  >();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcToggleButton extends Components.IcToggleButton {
  /**
   * Emitted when the user clicks a toggle button.
   */
  icToggleChecked: EventEmitter<CustomEvent<{ checked: boolean }>>;
}

@ProxyCmp({
  inputs: [
    "accessibleLabel",
    "disabled",
    "fullWidth",
    "iconPlacement",
    "loading",
    "monochrome",
    "outline",
    "selectMethod",
    "selectType",
    "size",
    "theme",
    "tooltipPlacement",
    "variant",
  ],
})
@Component({
  selector: "ic-toggle-button-group",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "accessibleLabel",
    "disabled",
    "fullWidth",
    "iconPlacement",
    "loading",
    "monochrome",
    "outline",
    "selectMethod",
    "selectType",
    "size",
    "theme",
    "tooltipPlacement",
    "variant",
  ],
  outputs: ["icChange"],
  standalone: false,
})
export class IcToggleButtonGroup {
  protected el: HTMLIcToggleButtonGroupElement;
  @Output() icChange = new EventEmitter<
    CustomEvent<IIcToggleButtonGroupIcChangeEventDetail>
  >();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { IcChangeEventDetail as IIcToggleButtonGroupIcChangeEventDetail } from "@ukic/web-components";

export declare interface IcToggleButtonGroup
  extends Components.IcToggleButtonGroup {
  /**
   * Emitted when a toggle button is selected.
   */
  icChange: EventEmitter<CustomEvent<IIcToggleButtonGroupIcChangeEventDetail>>;
}

@ProxyCmp({
  inputs: [
    "disableClick",
    "disableHover",
    "fixedPositioning",
    "label",
    "maxLines",
    "placement",
    "target",
    "theme",
  ],
  methods: ["displayTooltip"],
})
@Component({
  selector: "ic-tooltip",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "disableClick",
    "disableHover",
    "fixedPositioning",
    { name: "label", required: true },
    "maxLines",
    "placement",
    "target",
    "theme",
  ],
  standalone: false,
})
export class IcTooltip {
  protected el: HTMLIcTooltipElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcTooltip extends Components.IcTooltip {}

@ProxyCmp({
  inputs: [
    "appTitle",
    "contentAligned",
    "customMobileBreakpoint",
    "href",
    "inline",
    "shortAppTitle",
    "status",
    "theme",
    "version",
  ],
})
@Component({
  selector: "ic-top-navigation",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "appTitle",
    "contentAligned",
    "customMobileBreakpoint",
    "href",
    "inline",
    "shortAppTitle",
    "status",
    "theme",
    "version",
  ],
  outputs: ["icTopNavResized"],
  standalone: false,
})
export class IcTopNavigation {
  protected el: HTMLIcTopNavigationElement;
  @Output() icTopNavResized = new EventEmitter<CustomEvent<{ size: number }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcTopNavigation extends Components.IcTopNavigation {
  /**
   * Emitted when the top navigation is resized.
   */
  icTopNavResized: EventEmitter<CustomEvent<{ size: number }>>;
}

@ProxyCmp({
  inputs: [
    "applyVerticalMargins",
    "bold",
    "italic",
    "maxLines",
    "strikethrough",
    "theme",
    "underline",
    "variant",
  ],
})
@Component({
  selector: "ic-typography",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    "applyVerticalMargins",
    "bold",
    "italic",
    "maxLines",
    "strikethrough",
    "theme",
    "underline",
    "variant",
  ],
  standalone: false,
})
export class IcTypography {
  protected el: HTMLIcTypographyElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcTypography extends Components.IcTypography {}
