"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[1114],{"../web-components/dist/esm/ic-badge.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_badge:()=>Badge});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_3658d7f3_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-3658d7f3.js");const Badge=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ariaLabel=null,this.setBadgeColour=()=>{const colorRGBA=(0,_helpers_3658d7f3_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.customColor);if(colorRGBA){const{r,g,b,a}=colorRGBA;this.el.style.backgroundColor=`rgba(${r}, ${g}, ${b}, ${a})`,this.foregroundColour=(0,_helpers_3658d7f3_js__WEBPACK_IMPORTED_MODULE_1__.g)((299*r+587*g+114*b)/1e3)}},this.getLabel=()=>this.maxNumber&&Number(this.label)>this.maxNumber?`${this.maxNumber}+`:this.label,this.setAccessibleLabel=()=>{const parentEl=this.el.parentElement,defaultAriaLabel=this.isAccessibleLabelDefined()?this.accessibleLabel:this.label||"with badge being displayed";if(parentEl){const{tagName}=parentEl;if("IC-CARD"!==tagName&&("IC-TAB"!==tagName||"IC-TAB"===tagName&&this.parentAriaLabel)){const ariaLabelPrefix=this.parentAriaLabel?`${this.parentAriaLabel} ,`:"";parentEl.ariaLabel=this.visible?`${ariaLabelPrefix} ${defaultAriaLabel}`:void 0}else this.ariaLabel=`, ${defaultAriaLabel}`}},this.isAccessibleLabelDefined=()=>(0,_helpers_3658d7f3_js__WEBPACK_IMPORTED_MODULE_1__.d)(this.accessibleLabel)&&null!==this.accessibleLabel,this.accessibleLabel=void 0,this.customColor=null,this.maxNumber=void 0,this.position="far",this.size="medium",this.label=void 0,this.theme="inherit",this.type="text",this.variant="neutral",this.visible=!0}accessibleLabelHandler(){this.setAccessibleLabel()}customColorHandler(){"custom"===this.variant&&this.setBadgeColour()}variantHandler(){"custom"===this.variant&&this.setBadgeColour()}visibleHandler(){this.setAccessibleLabel()}componentWillLoad(){var _a;"custom"===this.variant&&this.setBadgeColour();const ariaLabel=null===(_a=this.el.parentElement)||void 0===_a?void 0:_a.ariaLabel;ariaLabel&&(this.parentAriaLabel=ariaLabel),this.setAccessibleLabel()}componentDidLoad(){"text"===this.type&&(0,_helpers_3658d7f3_js__WEBPACK_IMPORTED_MODULE_1__.a)([{prop:this.label,propName:"label"}],"Badge")}render(){const{ariaLabel,el,foregroundColour,getLabel,position,size,label,type,variant,visible,theme}=this;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{[`ic-badge-${position}`]:!0,[`ic-badge-${size}`]:!0,[`ic-badge-${variant}`]:!0,[`ic-badge-${type}`]:!0,[`ic-badge-foreground-${foregroundColour}`]:null!==foregroundColour&&"custom"===variant,[""+(visible?"ic-badge-show":"ic-badge-hide")]:!0,[`ic-theme-${theme}`]:"inherit"!==theme},id:el.id||null,"aria-label":ariaLabel,role:"status"},"icon"===type&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"badge-icon"}),"text"===type&&label&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"small"===size?"badge-small":"badge"},getLabel()),"dot"===type&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"sr-only"},"badge"))}static get delegatesFocus(){return!0}get el(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{accessibleLabel:["accessibleLabelHandler"],customColor:["customColorHandler"],variant:["variantHandler"],visible:["visibleHandler"]}}};Badge.style="@media (prefers-reduced-motion: no-preference){:host(.ic-badge-show){animation:expand var(--ic-transition-duration-slow)}:host(.ic-badge-hide){animation:shrink var(--ic-transition-duration-slow)}}:host{display:flex;height:var(--ic-space-md);min-width:var(--ic-space-md);width:-moz-fit-content;width:fit-content;border-radius:calc(2 * var(--ic-space-xxl));position:absolute}:host ic-typography{--ic-typography-color:var(--ic-badge-text)}:host(.ic-badge-neutral){background-color:var(--ic-badge-dark) !important}:host(.ic-badge-light) ic-typography{--ic-typography-color:var(--ic-badge-text-monochrome)}:host(.ic-badge-light) ::slotted(*){fill:var(--ic-badge-icon-monochrome)}:host(.ic-badge-info){background-color:var(--ic-badge-info) !important}:host(.ic-badge-light){background-color:var(--ic-badge-light) !important}:host(.ic-badge-warning){background-color:var(--ic-badge-warning) !important}:host(.ic-badge-warning) ic-typography{--ic-typography-color:var(--ic-badge-warning-text)}:host(.ic-badge-warning) ::slotted(*){fill:var(--ic-badge-warning-icon)}:host(.ic-badge-error){background-color:var(--ic-badge-error) !important}:host(.ic-badge-success){background-color:var(--ic-badge-success) !important}:host(.ic-badge-small){height:var(--ic-space-sm);min-width:var(--ic-space-sm)}:host(.ic-badge-large){height:calc(var(--ic-space-md) + var(--ic-space-xxs));min-width:calc(var(--ic-space-md) + var(--ic-space-xxs))}:host(.ic-badge-dot.ic-badge-medium){height:var(--ic-space-xs);width:var(--ic-space-xs);min-width:var(--ic-space-xs)}:host(.ic-badge-dot.ic-badge-small){height:calc(var(--ic-space-xxs) + var(--ic-space-xxxs));width:calc(var(--ic-space-xxs) + var(--ic-space-xxxs));min-width:calc(var(--ic-space-xxs) + var(--ic-space-xxxs))}:host(.ic-badge-dot.ic-badge-large){height:var(--ic-space-sm);width:var(--ic-space-sm);min-width:var(--ic-space-sm)}:host ::slotted(*){fill:var(--ic-badge-icon)}:host(.ic-badge-foreground-dark) ::slotted(*){fill:var(--ic-color-text-primary-light)}:host(.ic-badge-foreground-light) ::slotted(*){fill:white}:host(.ic-badge-foreground-dark) ic-typography{--ic-typography-color:var(--ic-color-text-primary-light)}:host(.ic-badge-foreground-light) ic-typography{--ic-typography-color:var(--ic-color-primary-text-dark)}:host(.ic-badge-text) ic-typography{align-self:center;padding:0 calc((var(--ic-space-xs) + var(--ic-space-1px)) / 2)\n    var(--ic-space-1px)}:host(.ic-badge-text.ic-badge-small) ic-typography{padding:0 0.2132rem}:host(.ic-badge-text.ic-badge-large) ic-typography{padding:0 calc((var(--ic-space-sm) + var(--ic-space-1px)) / 2)\n    var(--ic-space-1px)}:host(.ic-badge-icon) ::slotted(svg){width:var(--ic-space-sm);height:var(--ic-space-sm);padding:var(--ic-space-xxxs)}:host(.ic-badge-icon.ic-badge-small) ::slotted(svg){width:var(--ic-space-xs);height:var(--ic-space-xs)}:host(.ic-badge-icon.ic-badge-large) ::slotted(svg){width:calc(var(--ic-space-sm) + var(--ic-space-xxxs));height:calc(var(--ic-space-sm) + var(--ic-space-xxxs));padding:calc(var(--ic-space-xxxs) + var(--ic-space-1px))}:host(.ic-badge-far){top:calc(-1 * var(--ic-space-xs));right:calc(-1 * var(--ic-space-xs))}:host(.ic-badge-far.ic-badge-small),:host(.ic-badge-dot.ic-badge-far.ic-badge-large){top:calc(-1 * var(--ic-space-xxs));right:calc(-1 * var(--ic-space-xxs))}:host(.ic-badge-dot.ic-badge-far),:host(.ic-badge-dot.ic-badge-far.ic-badge-small){top:calc(-1 * var(--ic-space-xxxs));right:calc(-1 * var(--ic-space-xxxs))}:host(.ic-badge-near){top:calc(-1 * calc(var(--ic-space-xxs) + var(--ic-space-1px)));right:calc(-1 * calc(var(--ic-space-xxs) + var(--ic-space-1px)))}:host(.ic-badge-dot.ic-badge-near){top:calc(-1 * var(--ic-space-1px));right:calc(-1 * var(--ic-space-1px))}:host(.ic-badge-inline){position:static}:host(.ic-badge-hide){visibility:hidden !important;transition:visibility var(--ic-transition-duration-slow)}.sr-only{position:absolute;left:-9999px}@keyframes expand{from{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}@keyframes shrink{from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(0)}}"}}]);