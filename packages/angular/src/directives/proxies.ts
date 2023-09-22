/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@ukic/web-components';


@ProxyCmp({
  inputs: ['announced', 'dismissible', 'heading', 'message', 'titleAbove', 'variant']
})
@Component({
  selector: 'ic-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['announced', 'dismissible', 'heading', 'message', 'titleAbove', 'variant'],
})
export class IcAlert {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dismiss', 'icDismiss']);
  }
}


export declare interface IcAlert extends Components.IcAlert {
  /**
   *  @deprecated This event should not be used anymore. Use icDismiss instead.
   */
  dismiss: EventEmitter<CustomEvent<void>>;
  /**
   * Is emitted when the user dismisses the alert.
   */
  icDismiss: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['target']
})
@Component({
  selector: 'ic-back-to-top',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['target'],
})
export class IcBackToTop {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcBackToTop extends Components.IcBackToTop {}


@ProxyCmp({
  inputs: ['current', 'href', 'pageTitle'],
  methods: ['setFocus']
})
@Component({
  selector: 'ic-breadcrumb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['current', 'href', 'pageTitle'],
})
export class IcBreadcrumb {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcBreadcrumb extends Components.IcBreadcrumb {}


@ProxyCmp({
  inputs: ['backBreadcrumbOnly', 'collapsed']
})
@Component({
  selector: 'ic-breadcrumb-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['backBreadcrumbOnly', 'collapsed'],
})
export class IcBreadcrumbGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcBreadcrumbGroup extends Components.IcBreadcrumbGroup {}


@ProxyCmp({
  inputs: ['appearance', 'disableTooltip', 'disabled', 'download', 'form', 'formaction', 'formenctype', 'formmethod', 'formnovalidate', 'formtarget', 'fullWidth', 'href', 'hreflang', 'loading', 'referrerpolicy', 'rel', 'size', 'target', 'tooltipPlacement', 'type', 'variant'],
  methods: ['setFocus']
})
@Component({
  selector: 'ic-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['appearance', 'disableTooltip', 'disabled', 'download', 'form', 'formaction', 'formenctype', 'formmethod', 'formnovalidate', 'formtarget', 'fullWidth', 'href', 'hreflang', 'loading', 'referrerpolicy', 'rel', 'size', 'target', 'tooltipPlacement', 'type', 'variant'],
})
export class IcButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['icBlur', 'icFocus']);
  }
}


export declare interface IcButton extends Components.IcButton {
  /**
   * Emitted when button has blur
   */
  icBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when button has focus
   */
  icFocus: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['clickable', 'disabled', 'expandable', 'fullWidth', 'heading', 'href', 'hreflang', 'message', 'referrerpolicy', 'rel', 'subheading', 'target'],
  methods: ['setFocus']
})
@Component({
  selector: 'ic-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['clickable', 'disabled', 'expandable', 'fullWidth', 'heading', 'href', 'hreflang', 'message', 'referrerpolicy', 'rel', 'subheading', 'target'],
})
export class IcCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcCard extends Components.IcCard {}


@ProxyCmp({
  inputs: ['additionalFieldDisplay', 'checked', 'disabled', 'dynamicText', 'groupLabel', 'indeterminate', 'label', 'name', 'size', 'small', 'value'],
  methods: ['setFocus']
})
@Component({
  selector: 'ic-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['additionalFieldDisplay', 'checked', 'disabled', 'dynamicText', 'groupLabel', 'indeterminate', 'label', 'name', 'size', 'small', 'value'],
})
export class IcCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['checkboxChecked', 'icCheck']);
  }
}


export declare interface IcCheckbox extends Components.IcCheckbox {
  /**
   *  @deprecated This event should not be used anymore. Use icCheck instead.
   */
  checkboxChecked: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when a checkbox has been checked.
   */
  icCheck: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['disabled', 'helperText', 'hideLabel', 'label', 'name', 'required', 'size', 'small', 'validationStatus', 'validationText']
})
@Component({
  selector: 'ic-checkbox-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'helperText', 'hideLabel', 'label', 'name', 'required', 'size', 'small', 'validationStatus', 'validationText'],
})
export class IcCheckboxGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['icChange']);
  }
}


import type { IcChangeEventDetail as IIcCheckboxGroupIcChangeEventDetail } from '@ukic/web-components';

export declare interface IcCheckboxGroup extends Components.IcCheckboxGroup {
  /**
   * Emitted when a checkbox is checked.
   */
  icChange: EventEmitter<CustomEvent<IIcCheckboxGroupIcChangeEventDetail>>;
}


@ProxyCmp({
  inputs: ['appearance', 'disabled', 'dismissible', 'label', 'size'],
  methods: ['setFocus']
})
@Component({
  selector: 'ic-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['appearance', 'disabled', 'dismissible', 'label', 'size'],
})
export class IcChip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dismiss', 'icDismiss']);
  }
}


export declare interface IcChip extends Components.IcChip {
  /**
   *  @deprecated This event should not be used anymore. Use icDismiss instead.
   */
  dismiss: EventEmitter<CustomEvent<void>>;
  /**
   * Is emitted when the user dismisses the chip.
   */
  icDismiss: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['additionalSelectors', 'classification', 'country', 'inline', 'upTo']
})
@Component({
  selector: 'ic-classification-banner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['additionalSelectors', 'classification', 'country', 'inline', 'upTo'],
})
export class IcClassificationBanner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcClassificationBanner extends Components.IcClassificationBanner {}


@ProxyCmp({
  inputs: ['heading', 'small']
})
@Component({
  selector: 'ic-data-entity',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['heading', 'small'],
})
export class IcDataEntity {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcDataEntity extends Components.IcDataEntity {}


@ProxyCmp({
  inputs: ['label', 'small', 'value']
})
@Component({
  selector: 'ic-data-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label', 'small', 'value'],
})
export class IcDataRow {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcDataRow extends Components.IcDataRow {}


@ProxyCmp({
  inputs: ['alertHeading', 'alertMessage', 'buttonProps', 'buttons', 'closeOnBackdropClick', 'destructive', 'dismissLabel', 'heading', 'label', 'size', 'status'],
  methods: ['showDialog', 'hideDialog', 'cancelDialog', 'confirmDialog']
})
@Component({
  selector: 'ic-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alertHeading', 'alertMessage', 'buttonProps', 'buttons', 'closeOnBackdropClick', 'destructive', 'dismissLabel', 'heading', 'label', 'size', 'status'],
})
export class IcDialog {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['icDialogCancelled', 'icDialogClosed', 'icDialogConfirmed', 'icDialogOpened']);
  }
}


export declare interface IcDialog extends Components.IcDialog {
  /**
   * Cancelation event emitted when default 'Cancel' button clicked or 'cancelDialog' method is called.
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
})
@Component({
  selector: 'ic-divider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class IcDivider {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcDivider extends Components.IcDivider {}


@ProxyCmp({
  inputs: ['aligned', 'body', 'bodyMaxLines', 'heading', 'imageSize', 'subheading']
})
@Component({
  selector: 'ic-empty-state',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['aligned', 'body', 'bodyMaxLines', 'heading', 'imageSize', 'subheading'],
})
export class IcEmptyState {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcEmptyState extends Components.IcEmptyState {}


@ProxyCmp({
  inputs: ['aligned', 'breakpoint', 'caption', 'copyright', 'description', 'groupLinks']
})
@Component({
  selector: 'ic-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['aligned', 'breakpoint', 'caption', 'copyright', 'description', 'groupLinks'],
})
export class IcFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcFooter extends Components.IcFooter {}


@ProxyCmp({
  inputs: ['download', 'href', 'hreflang', 'referrerpolicy', 'rel', 'target']
})
@Component({
  selector: 'ic-footer-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['download', 'href', 'hreflang', 'referrerpolicy', 'rel', 'target'],
})
export class IcFooterLink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcFooterLink extends Components.IcFooterLink {}


@ProxyCmp({
  inputs: ['groupTitle']
})
@Component({
  selector: 'ic-footer-link-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['groupTitle'],
})
export class IcFooterLinkGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcFooterLinkGroup extends Components.IcFooterLinkGroup {}


@ProxyCmp({
  inputs: ['aligned', 'backgroundImage', 'contentAligned', 'disableBackgroundParallax', 'heading', 'secondaryHeading', 'secondarySubheading', 'small', 'subheading']
})
@Component({
  selector: 'ic-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['aligned', 'backgroundImage', 'contentAligned', 'disableBackgroundParallax', 'heading', 'secondaryHeading', 'secondarySubheading', 'small', 'subheading'],
})
export class IcHero {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcHero extends Components.IcHero {}


@ProxyCmp({
  inputs: ['appearance']
})
@Component({
  selector: 'ic-horizontal-scroll',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['appearance'],
})
export class IcHorizontalScroll {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcHorizontalScroll extends Components.IcHorizontalScroll {}


@ProxyCmp({
  inputs: ['dark', 'disabled', 'fullWidth', 'multiLine', 'readonly', 'small', 'validationInline', 'validationStatus']
})
@Component({
  selector: 'ic-input-component-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['dark', 'disabled', 'fullWidth', 'multiLine', 'readonly', 'small', 'validationInline', 'validationStatus'],
})
export class IcInputComponentContainer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcInputComponentContainer extends Components.IcInputComponentContainer {}


@ProxyCmp({
  inputs: ['disabled', 'readonly']
})
@Component({
  selector: 'ic-input-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'readonly'],
})
export class IcInputContainer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcInputContainer extends Components.IcInputContainer {}


@ProxyCmp({
  inputs: ['dark', 'disabled', 'error', 'for', 'helperText', 'label', 'readonly', 'required']
})
@Component({
  selector: 'ic-input-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['dark', 'disabled', 'error', 'for', 'helperText', 'label', 'readonly', 'required'],
})
export class IcInputLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcInputLabel extends Components.IcInputLabel {}


@ProxyCmp({
  inputs: ['ariaLiveMode', 'for', 'fullWidth', 'message', 'status']
})
@Component({
  selector: 'ic-input-validation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLiveMode', 'for', 'fullWidth', 'message', 'status'],
})
export class IcInputValidation {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcInputValidation extends Components.IcInputValidation {}


@ProxyCmp({
  inputs: ['appearance', 'download', 'href', 'hreflang', 'referrerpolicy', 'rel', 'showIcon', 'target'],
  methods: ['setFocus']
})
@Component({
  selector: 'ic-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['appearance', 'download', 'href', 'hreflang', 'referrerpolicy', 'rel', 'showIcon', 'target'],
})
export class IcLink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcLink extends Components.IcLink {}


@ProxyCmp({
  inputs: ['appearance', 'description', 'fullWidth', 'label', 'labelDuration', 'max', 'min', 'progress', 'size', 'type']
})
@Component({
  selector: 'ic-loading-indicator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['appearance', 'description', 'fullWidth', 'label', 'labelDuration', 'max', 'min', 'progress', 'size', 'type'],
})
export class IcLoadingIndicator {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcLoadingIndicator extends Components.IcLoadingIndicator {}


@ProxyCmp({
  inputs: ['activationType', 'anchorEl', 'fullWidth', 'inputEl', 'inputLabel', 'labelField', 'menuId', 'open', 'options', 'searchMode', 'small', 'value', 'valueField'],
  methods: ['handleKeyboardOpen']
})
@Component({
  selector: 'ic-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activationType', 'anchorEl', 'fullWidth', 'inputEl', 'inputLabel', 'labelField', 'menuId', 'open', 'options', 'searchMode', 'small', 'value', 'valueField'],
})
export class IcMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcMenu extends Components.IcMenu {}


@ProxyCmp({
  inputs: ['label']
})
@Component({
  selector: 'ic-menu-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label'],
})
export class IcMenuGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcMenuGroup extends Components.IcMenuGroup {}


@ProxyCmp({
  inputs: ['description', 'disabled', 'href', 'hreflang', 'keyboardShortcut', 'label', 'referrerpolicy', 'rel', 'submenuTriggerFor', 'target', 'variant']
})
@Component({
  selector: 'ic-menu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['description', 'disabled', 'href', 'hreflang', 'keyboardShortcut', 'label', 'referrerpolicy', 'rel', 'submenuTriggerFor', 'target', 'variant'],
})
export class IcMenuItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcMenuItem extends Components.IcMenuItem {}


@ProxyCmp({
  inputs: ['download', 'href', 'hreflang', 'label', 'referrerpolicy', 'rel', 'target'],
  methods: ['setFocus']
})
@Component({
  selector: 'ic-navigation-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['download', 'href', 'hreflang', 'label', 'referrerpolicy', 'rel', 'target'],
})
export class IcNavigationButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcNavigationButton extends Components.IcNavigationButton {}


@ProxyCmp({
  inputs: ['expandable', 'label'],
  methods: ['setFocus']
})
@Component({
  selector: 'ic-navigation-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['expandable', 'label'],
})
export class IcNavigationGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcNavigationGroup extends Components.IcNavigationGroup {}


@ProxyCmp({
  inputs: ['download', 'href', 'hreflang', 'label', 'referrerpolicy', 'rel', 'selected', 'target'],
  methods: ['setFocus']
})
@Component({
  selector: 'ic-navigation-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['download', 'href', 'hreflang', 'label', 'referrerpolicy', 'rel', 'selected', 'target'],
})
export class IcNavigationItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcNavigationItem extends Components.IcNavigationItem {}


@ProxyCmp({
  inputs: ['status', 'version']
})
@Component({
  selector: 'ic-navigation-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['status', 'version'],
})
export class IcNavigationMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcNavigationMenu extends Components.IcNavigationMenu {}


@ProxyCmp({
  inputs: ['aligned', 'border', 'heading', 'reverseOrder', 'small', 'sticky', 'stickyDesktopOnly', 'subheading']
})
@Component({
  selector: 'ic-page-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['aligned', 'border', 'heading', 'reverseOrder', 'small', 'sticky', 'stickyDesktopOnly', 'subheading'],
})
export class IcPageHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcPageHeader extends Components.IcPageHeader {}


@ProxyCmp({
  inputs: ['adjacentCount', 'appearance', 'boundaryCount', 'currentPage', 'defaultPage', 'disabled', 'hideCurrentPage', 'hideFirstAndLastPageButton', 'label', 'pages', 'type'],
  methods: ['setCurrentPage']
})
@Component({
  selector: 'ic-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['adjacentCount', 'appearance', 'boundaryCount', 'currentPage', 'defaultPage', 'disabled', 'hideCurrentPage', 'hideFirstAndLastPageButton', 'label', 'pages', 'type'],
})
export class IcPagination {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['icPageChange']);
  }
}


import type { IcChangeEventDetail as IIcPaginationIcChangeEventDetail } from '@ukic/web-components';

export declare interface IcPagination extends Components.IcPagination {
  /**
   * Emitted when a page is selected.
   */
  icPageChange: EventEmitter<CustomEvent<IIcPaginationIcChangeEventDetail>>;
}


@ProxyCmp({
  inputs: ['appearance', 'ariaOverride', 'disabled', 'label', 'page', 'pages', 'selected', 'type']
})
@Component({
  selector: 'ic-pagination-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['appearance', 'ariaOverride', 'disabled', 'label', 'page', 'pages', 'selected', 'type'],
})
export class IcPaginationItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcPaginationItem extends Components.IcPaginationItem {}


@ProxyCmp({
  inputs: ['anchor', 'open', 'submenuId']
})
@Component({
  selector: 'ic-popover-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['anchor', 'open', 'submenuId'],
})
export class IcPopoverMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcPopoverMenu extends Components.IcPopoverMenu {}


@ProxyCmp({
  inputs: ['disabled', 'helperText', 'hideLabel', 'label', 'name', 'orientation', 'required', 'small', 'validationStatus', 'validationText']
})
@Component({
  selector: 'ic-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'helperText', 'hideLabel', 'label', 'name', 'orientation', 'required', 'small', 'validationStatus', 'validationText'],
})
export class IcRadioGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['icChange']);
  }
}


import type { IcChangeEventDetail as IIcRadioGroupIcChangeEventDetail } from '@ukic/web-components';

export declare interface IcRadioGroup extends Components.IcRadioGroup {
  /**
   * Emitted when a user selects a radio.
   */
  icChange: EventEmitter<CustomEvent<IIcRadioGroupIcChangeEventDetail>>;
}


@ProxyCmp({
  inputs: ['additionalFieldDisplay', 'disabled', 'dynamicText', 'groupLabel', 'label', 'name', 'selected', 'value'],
  methods: ['setFocus']
})
@Component({
  selector: 'ic-radio-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['additionalFieldDisplay', 'disabled', 'dynamicText', 'groupLabel', 'label', 'name', 'selected', 'value'],
})
export class IcRadioOption {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['icCheck', 'radioOptionSelect', 'icSelectedChange']);
  }
}


import type { IcValueEventDetail as IIcRadioOptionIcValueEventDetail } from '@ukic/web-components';

export declare interface IcRadioOption extends Components.IcRadioOption {
  /**
   * Emitted when the radio option is selected.
   */
  icCheck: EventEmitter<CustomEvent<IIcRadioOptionIcValueEventDetail>>;
  /**
   *  @deprecated This event should not be used anymore. Use icCheck instead.
   */
  radioOptionSelect: EventEmitter<CustomEvent<IIcRadioOptionIcValueEventDetail>>;
  /**
   * Emitted when the radio option is selected or deselected.
   */
  icSelectedChange: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'charactersUntilSuggestion', 'debounce', 'disableFilter', 'disabled', 'emptyOptionListText', 'focusOnLoad', 'fullWidth', 'helperText', 'hideLabel', 'hintText', 'label', 'labelField', 'loading', 'loadingErrorLabel', 'loadingLabel', 'name', 'options', 'placeholder', 'readonly', 'required', 'searchMode', 'small', 'spellcheck', 'timeout', 'value', 'valueField'],
  methods: ['setFocus']
})
@Component({
  selector: 'ic-search-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'charactersUntilSuggestion', 'debounce', 'disableFilter', 'disabled', 'emptyOptionListText', 'focusOnLoad', 'fullWidth', 'helperText', 'hideLabel', 'hintText', 'label', 'labelField', 'loading', 'loadingErrorLabel', 'loadingLabel', 'name', 'options', 'placeholder', 'readonly', 'required', 'searchMode', 'small', 'spellcheck', 'timeout', 'value', 'valueField'],
})
export class IcSearchBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['icChange', 'icClear', 'icInput', 'icInputBlur', 'icInputFocus', 'icOptionSelect', 'icMenuChange', 'icRetryLoad', 'icSubmitSearch', 'icSearchBarBlur', 'icSearchBarFocus']);
  }
}


import type { IcValueEventDetail as IIcSearchBarIcValueEventDetail } from '@ukic/web-components';
import type { IcSearchBarBlurEventDetail as IIcSearchBarIcSearchBarBlurEventDetail } from '@ukic/web-components';
import type { IcOptionSelectEventDetail as IIcSearchBarIcOptionSelectEventDetail } from '@ukic/web-components';
import type { IcMenuChangeEventDetail as IIcSearchBarIcMenuChangeEventDetail } from '@ukic/web-components';

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
   *  @deprecated This event should not be used anymore. Use icSearchBarBlur instead.
   */
  icInputBlur: EventEmitter<CustomEvent<IIcSearchBarIcSearchBarBlurEventDetail>>;
  /**
   *  @deprecated This event should not be used anymore. Use icSearchBarFocus instead.
   */
  icInputFocus: EventEmitter<CustomEvent<IIcSearchBarIcValueEventDetail>>;
  /**
   * Emitted when option is highlighted within the menu
   */
  icOptionSelect: EventEmitter<CustomEvent<IIcSearchBarIcOptionSelectEventDetail>>;
  /**
   * Emitted when the state of the menu changes (i.e. open or close)
   */
  icMenuChange: EventEmitter<CustomEvent<IIcSearchBarIcMenuChangeEventDetail>>;
  /**
   * Emitted when the 'retry loading' button is clicked
   */
  icRetryLoad: EventEmitter<CustomEvent<IIcSearchBarIcValueEventDetail>>;
  /**
   * Emitted when the search value has been submitted
   */
  icSubmitSearch: EventEmitter<CustomEvent<IIcSearchBarIcValueEventDetail>>;
  /**
   * Emitted when blur is invoked from ic-search-bar
   */
  icSearchBarBlur: EventEmitter<CustomEvent<IIcSearchBarIcSearchBarBlurEventDetail>>;
  /**
   * Emitted when focus is invoked from ic-search-bar
   */
  icSearchBarFocus: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['aligned', 'fullHeight']
})
@Component({
  selector: 'ic-section-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['aligned', 'fullHeight'],
})
export class IcSectionContainer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcSectionContainer extends Components.IcSectionContainer {}


@ProxyCmp({
  inputs: ['charactersUntilSuggestions', 'debounce', 'disableFilter', 'disabled', 'emptyOptionListText', 'fullWidth', 'helperText', 'hideLabel', 'includeDescriptionsInSearch', 'includeGroupTitlesInSearch', 'label', 'loading', 'loadingErrorLabel', 'loadingLabel', 'name', 'options', 'placeholder', 'readonly', 'required', 'searchMatchPosition', 'searchable', 'showClearButton', 'small', 'timeout', 'validationStatus', 'validationText', 'value'],
  methods: ['setFocus']
})
@Component({
  selector: 'ic-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['charactersUntilSuggestions', 'debounce', 'disableFilter', 'disabled', 'emptyOptionListText', 'fullWidth', 'helperText', 'hideLabel', 'includeDescriptionsInSearch', 'includeGroupTitlesInSearch', 'label', 'loading', 'loadingErrorLabel', 'loadingLabel', 'name', 'options', 'placeholder', 'readonly', 'required', 'searchMatchPosition', 'searchable', 'showClearButton', 'small', 'timeout', 'validationStatus', 'validationText', 'value'],
})
export class IcSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['icBlur', 'icChange', 'icClear', 'icFocus', 'icInput', 'icOptionSelect', 'icRetryLoad']);
  }
}


import type { IcValueEventDetail as IIcSelectIcValueEventDetail } from '@ukic/web-components';
import type { IcOptionSelectEventDetail as IIcSelectIcOptionSelectEventDetail } from '@ukic/web-components';

export declare interface IcSelect extends Components.IcSelect {
  /**
   * Emitted when the select loses focus.
   */
  icBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the value changes.
   */
  icChange: EventEmitter<CustomEvent<IIcSelectIcValueEventDetail>>;
  /**
   * Emitted when the clear button is clicked.
   */
  icClear: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the select gains focus.
   */
  icFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when a keyboard input occurred.
   */
  icInput: EventEmitter<CustomEvent<IIcSelectIcValueEventDetail>>;
  /**
   * Emitted when an option is highlighted within the menu.
Highlighting a menu item will also trigger an `icChange/onIcChange` due to the value being updated.
   */
  icOptionSelect: EventEmitter<CustomEvent<IIcSelectIcOptionSelectEventDetail>>;
  /**
   * Emitted when the 'retry loading' button is clicked for a searchable variant.
   */
  icRetryLoad: EventEmitter<CustomEvent<IIcSelectIcValueEventDetail>>;
}


@ProxyCmp({
  inputs: ['appTitle', 'collapsedIconLabels', 'disableAutoParentStyling', 'expanded', 'href', 'shortAppTitle', 'static', 'status', 'version']
})
@Component({
  selector: 'ic-side-navigation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['appTitle', 'collapsedIconLabels', 'disableAutoParentStyling', 'expanded', 'href', 'shortAppTitle', 'static', 'status', 'version'],
})
export class IcSideNavigation {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcSideNavigation extends Components.IcSideNavigation {}


@ProxyCmp({
  inputs: ['light', 'variant']
})
@Component({
  selector: 'ic-skeleton',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['light', 'variant'],
})
export class IcSkeleton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcSkeleton extends Components.IcSkeleton {}


@ProxyCmp({
  inputs: ['announced', 'appearance', 'label', 'small', 'status']
})
@Component({
  selector: 'ic-status-tag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['announced', 'appearance', 'label', 'small', 'status'],
})
export class IcStatusTag {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcStatusTag extends Components.IcStatusTag {}


@ProxyCmp({
  inputs: ['stepStatus', 'stepSubtitle', 'stepTitle', 'stepType']
})
@Component({
  selector: 'ic-step',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['stepStatus', 'stepSubtitle', 'stepTitle', 'stepType'],
})
export class IcStep {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcStep extends Components.IcStep {}


@ProxyCmp({
  inputs: ['aligned', 'connectorWidth', 'hideStepInfo', 'variant']
})
@Component({
  selector: 'ic-stepper',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['aligned', 'connectorWidth', 'hideStepInfo', 'variant'],
})
export class IcStepper {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcStepper extends Components.IcStepper {}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'helperText', 'hideLabel', 'label', 'name', 'showState', 'small', 'value'],
  methods: ['setFocus']
})
@Component({
  selector: 'ic-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'helperText', 'hideLabel', 'label', 'name', 'showState', 'small', 'value'],
})
export class IcSwitch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['icBlur', 'icChange', 'icFocus']);
  }
}


import type { IcSwitchChangeEventDetail as IIcSwitchIcSwitchChangeEventDetail } from '@ukic/web-components';

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
  inputs: ['disabled'],
  methods: ['setFocus']
})
@Component({
  selector: 'ic-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled'],
})
export class IcTab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcTab extends Components.IcTab {}


@ProxyCmp({
  inputs: ['activationType', 'appearance', 'contextId', 'selectedTabIndex']
})
@Component({
  selector: 'ic-tab-context',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activationType', 'appearance', 'contextId', 'selectedTabIndex'],
})
export class IcTabContext {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['icTabSelect', 'tabSelect']);
  }
}


import type { IcTabSelectEventDetail as IIcTabContextIcTabSelectEventDetail } from '@ukic/web-components';

export declare interface IcTabContext extends Components.IcTabContext {
  /**
   * Emitted when a user selects a tab.
   */
  icTabSelect: EventEmitter<CustomEvent<IIcTabContextIcTabSelectEventDetail>>;
  /**
   *  @deprecated This event should not be used anymore. Use icTabSelect instead.
   */
  tabSelect: EventEmitter<CustomEvent<IIcTabContextIcTabSelectEventDetail>>;
}


@ProxyCmp({
  inputs: ['contextId', 'inline', 'label']
})
@Component({
  selector: 'ic-tab-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['contextId', 'inline', 'label'],
})
export class IcTabGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcTabGroup extends Components.IcTabGroup {}


@ProxyCmp({
  inputs: ['contextId']
})
@Component({
  selector: 'ic-tab-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['contextId'],
})
export class IcTabPanel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcTabPanel extends Components.IcTabPanel {}


@ProxyCmp({
  inputs: ['autoFocus', 'autocapitalize', 'autocomplete', 'autocorrect', 'debounce', 'disabled', 'fullWidth', 'helperText', 'hideLabel', 'inputId', 'inputmode', 'label', 'max', 'maxLength', 'min', 'name', 'placeholder', 'readonly', 'required', 'resize', 'rows', 'small', 'spellcheck', 'type', 'validationInline', 'validationStatus', 'validationText', 'value'],
  methods: ['setFocus']
})
@Component({
  selector: 'ic-text-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autoFocus', 'autocapitalize', 'autocomplete', 'autocorrect', 'debounce', 'disabled', 'fullWidth', 'helperText', 'hideLabel', 'inputId', 'inputmode', 'label', 'max', 'maxLength', 'min', 'name', 'placeholder', 'readonly', 'required', 'resize', 'rows', 'small', 'spellcheck', 'type', 'validationInline', 'validationStatus', 'validationText', 'value'],
})
export class IcTextField {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['icBlur', 'icChange', 'icFocus', 'icInput', 'icKeydown']);
  }
}


import type { IcValueEventDetail as IIcTextFieldIcValueEventDetail } from '@ukic/web-components';

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
}


@ProxyCmp({
  inputs: ['color']
})
@Component({
  selector: 'ic-theme',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color'],
})
export class IcTheme {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcTheme extends Components.IcTheme {}


@ProxyCmp({
  inputs: ['autoDismissTimeout', 'dismissButtonAriaLabel', 'dismissMode', 'heading', 'message', 'neutralIconAriaLabel', 'variant'],
  methods: ['setVisible']
})
@Component({
  selector: 'ic-toast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autoDismissTimeout', 'dismissButtonAriaLabel', 'dismissMode', 'heading', 'message', 'neutralIconAriaLabel', 'variant'],
})
export class IcToast {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['icDismiss']);
  }
}


export declare interface IcToast extends Components.IcToast {
  /**
   * Is emitted when the user dismisses the toast
   */
  icDismiss: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  methods: ['setVisible']
})
@Component({
  selector: 'ic-toast-region',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class IcToastRegion {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcToastRegion extends Components.IcToastRegion {}


@ProxyCmp({
  inputs: ['disableHover', 'label', 'placement', 'target'],
  methods: ['displayTooltip']
})
@Component({
  selector: 'ic-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disableHover', 'label', 'placement', 'target'],
})
export class IcTooltip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcTooltip extends Components.IcTooltip {}


@ProxyCmp({
  inputs: ['appTitle', 'contentAligned', 'href', 'inline', 'shortAppTitle', 'status', 'version']
})
@Component({
  selector: 'ic-top-navigation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['appTitle', 'contentAligned', 'href', 'inline', 'shortAppTitle', 'status', 'version'],
})
export class IcTopNavigation {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcTopNavigation extends Components.IcTopNavigation {}


@ProxyCmp({
  inputs: ['applyVerticalMargins', 'bold', 'italic', 'maxLines', 'strikethrough', 'underline', 'variant']
})
@Component({
  selector: 'ic-typography',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['applyVerticalMargins', 'bold', 'italic', 'maxLines', 'strikethrough', 'underline', 'variant'],
})
export class IcTypography {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IcTypography extends Components.IcTypography {}


