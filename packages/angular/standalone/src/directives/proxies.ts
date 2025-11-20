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

import type { Components } from "@ukic/web-components/components";

import { defineCustomElement as defineIcAccordion } from "@ukic/web-components/components/ic-accordion.js";
import { defineCustomElement as defineIcAccordionGroup } from "@ukic/web-components/components/ic-accordion-group.js";
import { defineCustomElement as defineIcActionChip } from "@ukic/web-components/components/ic-action-chip.js";
import { defineCustomElement as defineIcAlert } from "@ukic/web-components/components/ic-alert.js";
import { defineCustomElement as defineIcBackToTop } from "@ukic/web-components/components/ic-back-to-top.js";
import { defineCustomElement as defineIcBadge } from "@ukic/web-components/components/ic-badge.js";
import { defineCustomElement as defineIcBreadcrumb } from "@ukic/web-components/components/ic-breadcrumb.js";
import { defineCustomElement as defineIcBreadcrumbGroup } from "@ukic/web-components/components/ic-breadcrumb-group.js";
import { defineCustomElement as defineIcButton } from "@ukic/web-components/components/ic-button.js";
import { defineCustomElement as defineIcCardVertical } from "@ukic/web-components/components/ic-card-vertical.js";
import { defineCustomElement as defineIcCheckbox } from "@ukic/web-components/components/ic-checkbox.js";
import { defineCustomElement as defineIcCheckboxGroup } from "@ukic/web-components/components/ic-checkbox-group.js";
import { defineCustomElement as defineIcChip } from "@ukic/web-components/components/ic-chip.js";
import { defineCustomElement as defineIcClassificationBanner } from "@ukic/web-components/components/ic-classification-banner.js";
import { defineCustomElement as defineIcDataList } from "@ukic/web-components/components/ic-data-list.js";
import { defineCustomElement as defineIcDataRow } from "@ukic/web-components/components/ic-data-row.js";
import { defineCustomElement as defineIcDialog } from "@ukic/web-components/components/ic-dialog.js";
import { defineCustomElement as defineIcDivider } from "@ukic/web-components/components/ic-divider.js";
import { defineCustomElement as defineIcEmptyState } from "@ukic/web-components/components/ic-empty-state.js";
import { defineCustomElement as defineIcFooter } from "@ukic/web-components/components/ic-footer.js";
import { defineCustomElement as defineIcFooterLink } from "@ukic/web-components/components/ic-footer-link.js";
import { defineCustomElement as defineIcFooterLinkGroup } from "@ukic/web-components/components/ic-footer-link-group.js";
import { defineCustomElement as defineIcHero } from "@ukic/web-components/components/ic-hero.js";
import { defineCustomElement as defineIcHorizontalScroll } from "@ukic/web-components/components/ic-horizontal-scroll.js";
import { defineCustomElement as defineIcInputComponentContainer } from "@ukic/web-components/components/ic-input-component-container.js";
import { defineCustomElement as defineIcInputContainer } from "@ukic/web-components/components/ic-input-container.js";
import { defineCustomElement as defineIcInputLabel } from "@ukic/web-components/components/ic-input-label.js";
import { defineCustomElement as defineIcInputValidation } from "@ukic/web-components/components/ic-input-validation.js";
import { defineCustomElement as defineIcLayoutGrid } from "@ukic/web-components/components/ic-layout-grid.js";
import { defineCustomElement as defineIcLayoutGridItem } from "@ukic/web-components/components/ic-layout-grid-item.js";
import { defineCustomElement as defineIcLink } from "@ukic/web-components/components/ic-link.js";
import { defineCustomElement as defineIcLoadingIndicator } from "@ukic/web-components/components/ic-loading-indicator.js";
import { defineCustomElement as defineIcMenu } from "@ukic/web-components/components/ic-menu.js";
import { defineCustomElement as defineIcMenuGroup } from "@ukic/web-components/components/ic-menu-group.js";
import { defineCustomElement as defineIcMenuItem } from "@ukic/web-components/components/ic-menu-item.js";
import { defineCustomElement as defineIcNavigationButton } from "@ukic/web-components/components/ic-navigation-button.js";
import { defineCustomElement as defineIcNavigationGroup } from "@ukic/web-components/components/ic-navigation-group.js";
import { defineCustomElement as defineIcNavigationItem } from "@ukic/web-components/components/ic-navigation-item.js";
import { defineCustomElement as defineIcNavigationMenu } from "@ukic/web-components/components/ic-navigation-menu.js";
import { defineCustomElement as defineIcPageHeader } from "@ukic/web-components/components/ic-page-header.js";
import { defineCustomElement as defineIcPagination } from "@ukic/web-components/components/ic-pagination.js";
import { defineCustomElement as defineIcPaginationItem } from "@ukic/web-components/components/ic-pagination-item.js";
import { defineCustomElement as defineIcPopoverMenu } from "@ukic/web-components/components/ic-popover-menu.js";
import { defineCustomElement as defineIcRadioGroup } from "@ukic/web-components/components/ic-radio-group.js";
import { defineCustomElement as defineIcRadioOption } from "@ukic/web-components/components/ic-radio-option.js";
import { defineCustomElement as defineIcSearchBar } from "@ukic/web-components/components/ic-search-bar.js";
import { defineCustomElement as defineIcSectionContainer } from "@ukic/web-components/components/ic-section-container.js";
import { defineCustomElement as defineIcSelect } from "@ukic/web-components/components/ic-select.js";
import { defineCustomElement as defineIcSideNavigation } from "@ukic/web-components/components/ic-side-navigation.js";
import { defineCustomElement as defineIcSkeleton } from "@ukic/web-components/components/ic-skeleton.js";
import { defineCustomElement as defineIcSkipLink } from "@ukic/web-components/components/ic-skip-link.js";
import { defineCustomElement as defineIcStatusTag } from "@ukic/web-components/components/ic-status-tag.js";
import { defineCustomElement as defineIcStep } from "@ukic/web-components/components/ic-step.js";
import { defineCustomElement as defineIcStepper } from "@ukic/web-components/components/ic-stepper.js";
import { defineCustomElement as defineIcSwitch } from "@ukic/web-components/components/ic-switch.js";
import { defineCustomElement as defineIcTab } from "@ukic/web-components/components/ic-tab.js";
import { defineCustomElement as defineIcTabContext } from "@ukic/web-components/components/ic-tab-context.js";
import { defineCustomElement as defineIcTabGroup } from "@ukic/web-components/components/ic-tab-group.js";
import { defineCustomElement as defineIcTabPanel } from "@ukic/web-components/components/ic-tab-panel.js";
import { defineCustomElement as defineIcTextField } from "@ukic/web-components/components/ic-text-field.js";
import { defineCustomElement as defineIcTheme } from "@ukic/web-components/components/ic-theme.js";
import { defineCustomElement as defineIcToast } from "@ukic/web-components/components/ic-toast.js";
import { defineCustomElement as defineIcToastRegion } from "@ukic/web-components/components/ic-toast-region.js";
import { defineCustomElement as defineIcToggleButton } from "@ukic/web-components/components/ic-toggle-button.js";
import { defineCustomElement as defineIcToggleButtonGroup } from "@ukic/web-components/components/ic-toggle-button-group.js";
import { defineCustomElement as defineIcTooltip } from "@ukic/web-components/components/ic-tooltip.js";
import { defineCustomElement as defineIcTopNavigation } from "@ukic/web-components/components/ic-top-navigation.js";
import { defineCustomElement as defineIcTypography } from "@ukic/web-components/components/ic-typography.js";
@ProxyCmp({
  defineCustomElementFn: defineIcAccordion,
  inputs: ["disabled", "expanded", "heading", "message", "size", "theme"],
  methods: ["setFocus"],
})
@Component({
  selector: "ic-accordion",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["disabled", "expanded", "heading", "message", "size", "theme"],
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
  defineCustomElementFn: defineIcAccordionGroup,
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
  defineCustomElementFn: defineIcActionChip,
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
  defineCustomElementFn: defineIcAlert,
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
  defineCustomElementFn: defineIcBackToTop,
  inputs: ["position", "target", "theme", "variant"],
})
@Component({
  selector: "ic-back-to-top",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["position", { name: "target", required: true }, "theme", "variant"],
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
  defineCustomElementFn: defineIcBadge,
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
  defineCustomElementFn: defineIcBreadcrumb,
  inputs: ["current", "href", "pageTitle"],
  methods: ["setFocus"],
})
@Component({
  selector: "ic-breadcrumb",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["current", "href", { name: "pageTitle", required: true }],
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
  defineCustomElementFn: defineIcBreadcrumbGroup,
  inputs: ["backBreadcrumbOnly", "collapsed", "monochrome", "theme"],
})
@Component({
  selector: "ic-breadcrumb-group",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["backBreadcrumbOnly", "collapsed", "monochrome", "theme"],
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
  defineCustomElementFn: defineIcButton,
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
  defineCustomElementFn: defineIcCardVertical,
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
  defineCustomElementFn: defineIcCheckbox,
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
  defineCustomElementFn: defineIcCheckboxGroup,
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

import type { IcChangeEventDetail as IIcCheckboxGroupIcChangeEventDetail } from "@ukic/web-components/components";

export declare interface IcCheckboxGroup extends Components.IcCheckboxGroup {
  /**
   * Emitted when a checkbox is checked.
   */
  icChange: EventEmitter<CustomEvent<IIcCheckboxGroupIcChangeEventDetail>>;
}

@ProxyCmp({
  defineCustomElementFn: defineIcChip,
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
  defineCustomElementFn: defineIcClassificationBanner,
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
  defineCustomElementFn: defineIcDataList,
  inputs: ["heading", "size", "theme"],
})
@Component({
  selector: "ic-data-list",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["heading", "size", "theme"],
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
  defineCustomElementFn: defineIcDataRow,
  inputs: ["label", "size", "theme", "value"],
})
@Component({
  selector: "ic-data-row",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["label", "size", "theme", "value"],
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
  defineCustomElementFn: defineIcDialog,
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
  defineCustomElementFn: defineIcDivider,
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
  defineCustomElementFn: defineIcEmptyState,
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
  defineCustomElementFn: defineIcFooter,
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
  defineCustomElementFn: defineIcFooterLink,
  inputs: ["download", "href", "hreflang", "referrerpolicy", "rel", "target"],
})
@Component({
  selector: "ic-footer-link",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["download", "href", "hreflang", "referrerpolicy", "rel", "target"],
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
  defineCustomElementFn: defineIcFooterLinkGroup,
  inputs: ["label"],
})
@Component({
  selector: "ic-footer-link-group",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [{ name: "label", required: true }],
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
  defineCustomElementFn: defineIcHero,
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
  defineCustomElementFn: defineIcHorizontalScroll,
  inputs: ["appearance"],
})
@Component({
  selector: "ic-horizontal-scroll",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["appearance"],
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
  defineCustomElementFn: defineIcInputComponentContainer,
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
  defineCustomElementFn: defineIcInputContainer,
  inputs: ["disabled", "readonly"],
})
@Component({
  selector: "ic-input-container",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["disabled", "readonly"],
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
  defineCustomElementFn: defineIcInputLabel,
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
  defineCustomElementFn: defineIcInputValidation,
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
  defineCustomElementFn: defineIcLayoutGrid,
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
  defineCustomElementFn: defineIcLayoutGridItem,
  inputs: ["colSpan", "colStart", "hideInMobileMode", "rowSpan", "rowStart"],
})
@Component({
  selector: "ic-layout-grid-item",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["colSpan", "colStart", "hideInMobileMode", "rowSpan", "rowStart"],
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
  defineCustomElementFn: defineIcLink,
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
  defineCustomElementFn: defineIcLoadingIndicator,
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
  defineCustomElementFn: defineIcMenu,
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
  defineCustomElementFn: defineIcMenuGroup,
  inputs: ["label"],
})
@Component({
  selector: "ic-menu-group",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["label"],
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
  defineCustomElementFn: defineIcMenuItem,
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
  defineCustomElementFn: defineIcNavigationButton,
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
  defineCustomElementFn: defineIcNavigationGroup,
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
  defineCustomElementFn: defineIcNavigationItem,
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
  defineCustomElementFn: defineIcNavigationMenu,
  inputs: ["status", "theme", "version"],
})
@Component({
  selector: "ic-navigation-menu",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["status", "theme", "version"],
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
  defineCustomElementFn: defineIcPageHeader,
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
  defineCustomElementFn: defineIcPagination,
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

import type { IcChangeEventDetail as IIcPaginationIcChangeEventDetail } from "@ukic/web-components/components";

export declare interface IcPagination extends Components.IcPagination {
  /**
   * Emitted when a page is selected.
   */
  icPageChange: EventEmitter<CustomEvent<IIcPaginationIcChangeEventDetail>>;
}

@ProxyCmp({
  defineCustomElementFn: defineIcPaginationItem,
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
  defineCustomElementFn: defineIcPopoverMenu,
  inputs: ["anchor", "fixedPositioning", "open", "submenuId", "theme"],
})
@Component({
  selector: "ic-popover-menu",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["anchor", "fixedPositioning", "open", "submenuId", "theme"],
  outputs: ["icPopoverClosed"],
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
  defineCustomElementFn: defineIcRadioGroup,
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

import type { IcChangeEventDetail as IIcRadioGroupIcChangeEventDetail } from "@ukic/web-components/components";

export declare interface IcRadioGroup extends Components.IcRadioGroup {
  /**
   * Emitted when a user selects a radio.
   */
  icChange: EventEmitter<CustomEvent<IIcRadioGroupIcChangeEventDetail>>;
}

@ProxyCmp({
  defineCustomElementFn: defineIcRadioOption,
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

import type { IcValueEventDetail as IIcRadioOptionIcValueEventDetail } from "@ukic/web-components/components";

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
  defineCustomElementFn: defineIcSearchBar,
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

import type { IcValueEventDetail as IIcSearchBarIcValueEventDetail } from "@ukic/web-components/components";
import type { IcOptionSelectEventDetail as IIcSearchBarIcOptionSelectEventDetail } from "@ukic/web-components/components";
import type { IcMenuChangeEventDetail as IIcSearchBarIcMenuChangeEventDetail } from "@ukic/web-components/components";
import type { IcMultiValueEventDetail as IIcSearchBarIcMultiValueEventDetail } from "@ukic/web-components/components";
import type { IcSearchBarBlurEventDetail as IIcSearchBarIcSearchBarBlurEventDetail } from "@ukic/web-components/components";

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
  defineCustomElementFn: defineIcSectionContainer,
  inputs: ["aligned", "fullHeight"],
})
@Component({
  selector: "ic-section-container",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["aligned", "fullHeight"],
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
  defineCustomElementFn: defineIcSelect,
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

import type { IcMultiValueEventDetail as IIcSelectIcMultiValueEventDetail } from "@ukic/web-components/components";
import type { IcOptionSelectEventDetail as IIcSelectIcOptionSelectEventDetail } from "@ukic/web-components/components";

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
  defineCustomElementFn: defineIcSideNavigation,
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

import type { IcExpandedDetail as IIcSideNavigationIcExpandedDetail } from "@ukic/web-components/components";

export declare interface IcSideNavigation extends Components.IcSideNavigation {
  /**
   * Emitted when the side navigation is collapsed and expanded.
   */
  icSideNavExpanded: EventEmitter<
    CustomEvent<IIcSideNavigationIcExpandedDetail>
  >;
}

@ProxyCmp({
  defineCustomElementFn: defineIcSkeleton,
  inputs: ["theme", "variant"],
})
@Component({
  selector: "ic-skeleton",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["theme", "variant"],
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
  defineCustomElementFn: defineIcSkipLink,
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
  defineCustomElementFn: defineIcStatusTag,
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
  defineCustomElementFn: defineIcStep,
  inputs: ["heading", "icI18n", "status", "subheading", "type"],
})
@Component({
  selector: "ic-step",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["heading", "icI18n", "status", "subheading", "type"],
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
  defineCustomElementFn: defineIcStepper,
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
  defineCustomElementFn: defineIcSwitch,
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

import type { IcSwitchChangeEventDetail as IIcSwitchIcSwitchChangeEventDetail } from "@ukic/web-components/components";

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
  defineCustomElementFn: defineIcTab,
  inputs: ["disabled"],
  methods: ["setFocus"],
})
@Component({
  selector: "ic-tab",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["disabled"],
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
  defineCustomElementFn: defineIcTabContext,
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

import type { IcTabSelectEventDetail as IIcTabContextIcTabSelectEventDetail } from "@ukic/web-components/components";

export declare interface IcTabContext extends Components.IcTabContext {
  /**
   * Emitted when a user selects a tab.
   */
  icTabSelect: EventEmitter<CustomEvent<IIcTabContextIcTabSelectEventDetail>>;
}

@ProxyCmp({
  defineCustomElementFn: defineIcTabGroup,
  inputs: ["inline", "label"],
})
@Component({
  selector: "ic-tab-group",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["inline", { name: "label", required: true }],
})
export class IcTabGroup {
  protected el: HTMLIcTabGroupElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcTabGroup extends Components.IcTabGroup {}

@ProxyCmp({
  defineCustomElementFn: defineIcTabPanel,
})
@Component({
  selector: "ic-tab-panel",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
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
  defineCustomElementFn: defineIcTextField,
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

import type { IcValueEventDetail as IIcTextFieldIcValueEventDetail } from "@ukic/web-components/components";

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
  defineCustomElementFn: defineIcTheme,
  inputs: ["brandColor", "theme"],
})
@Component({
  selector: "ic-theme",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["brandColor", "theme"],
  outputs: ["icThemeChange"],
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

import type { IcThemeSettings as IIcThemeIcThemeSettings } from "@ukic/web-components/components";

export declare interface IcTheme extends Components.IcTheme {
  /**
   * Emitted when the theme is changed.
   */
  icThemeChange: EventEmitter<CustomEvent<IIcThemeIcThemeSettings>>;
}

@ProxyCmp({
  defineCustomElementFn: defineIcToast,
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
  defineCustomElementFn: defineIcToastRegion,
  inputs: ["openToast"],
})
@Component({
  selector: "ic-toast-region",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["openToast"],
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
  defineCustomElementFn: defineIcToggleButton,
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
  defineCustomElementFn: defineIcToggleButtonGroup,
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

import type { IcChangeEventDetail as IIcToggleButtonGroupIcChangeEventDetail } from "@ukic/web-components/components";

export declare interface IcToggleButtonGroup
  extends Components.IcToggleButtonGroup {
  /**
   * Emitted when a toggle button is selected.
   */
  icChange: EventEmitter<CustomEvent<IIcToggleButtonGroupIcChangeEventDetail>>;
}

@ProxyCmp({
  defineCustomElementFn: defineIcTooltip,
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
  defineCustomElementFn: defineIcTopNavigation,
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
  defineCustomElementFn: defineIcTypography,
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
})
export class IcTypography {
  protected el: HTMLIcTypographyElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IcTypography extends Components.IcTypography {}
