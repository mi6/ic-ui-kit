"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[8027],{"../web-components/dist/esm/ic-badge.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_badge:()=>Badge});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_a72a277b_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-a72a277b.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}var Badge=function(){function Badge(hostRef){var _this=this;!function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}(this,Badge),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ariaLabel=null,this.setBadgeColour=function(){var colorRGBA=(0,_helpers_a72a277b_js__WEBPACK_IMPORTED_MODULE_1__.c)(_this.customColor);if(colorRGBA){var r=colorRGBA.r,g=colorRGBA.g,b=colorRGBA.b,a=colorRGBA.a;_this.el.style.backgroundColor="rgba(".concat(r,", ").concat(g,", ").concat(b,", ").concat(a,")"),_this.foregroundColour=(0,_helpers_a72a277b_js__WEBPACK_IMPORTED_MODULE_1__.g)((299*r+587*g+114*b)/1e3)}},this.getLabel=function(){return _this.maxNumber&&Number(_this.label)>_this.maxNumber?"".concat(_this.maxNumber,"+"):_this.label},this.setAccessibleLabel=function(){var parentEl=_this.el.parentElement,defaultAriaLabel=_this.isAccessibleLabelDefined()?_this.accessibleLabel:_this.label||"with badge being displayed";if(parentEl){var tagName=parentEl.tagName;if("IC-CARD"!==tagName&&("IC-TAB"!==tagName||"IC-TAB"===tagName&&_this.parentAriaLabel)){var ariaLabelPrefix=_this.parentAriaLabel?"".concat(_this.parentAriaLabel," ,"):"";parentEl.ariaLabel=_this.visible?"".concat(ariaLabelPrefix," ").concat(defaultAriaLabel):void 0}else _this.ariaLabel=", ".concat(defaultAriaLabel)}},this.setPositionInTopNavigation=function(){_this.el.parentElement.parentElement.classList.contains("mobile-mode")?_this.position="inline":_this.position="near"},this.isInTopNav=function(){var parentEl=_this.el.parentElement,grandparentEl=parentEl.parentElement;return"IC-NAVIGATION-BUTTON"===parentEl.tagName&&"IC-TOP-NAVIGATION"===grandparentEl.tagName},this.isAccessibleLabelDefined=function(){return(0,_helpers_a72a277b_js__WEBPACK_IMPORTED_MODULE_1__.d)(_this.accessibleLabel)&&null!==_this.accessibleLabel},this.accessibleLabel=void 0,this.customColor=null,this.maxNumber=void 0,this.position="far",this.size="medium",this.label=void 0,this.theme="inherit",this.type="text",this.variant="neutral",this.visible=!0}return function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(Badge,[{key:"accessibleLabelHandler",value:function accessibleLabelHandler(){this.setAccessibleLabel()}},{key:"customColorHandler",value:function customColorHandler(){"custom"===this.variant&&this.setBadgeColour()}},{key:"variantHandler",value:function variantHandler(){"custom"===this.variant&&this.setBadgeColour()}},{key:"visibleHandler",value:function visibleHandler(){this.setAccessibleLabel()}},{key:"componentWillLoad",value:function componentWillLoad(){var _a;"custom"===this.variant&&this.setBadgeColour();var ariaLabel=null===(_a=this.el.parentElement)||void 0===_a?void 0:_a.ariaLabel;ariaLabel&&(this.parentAriaLabel=ariaLabel),this.setAccessibleLabel()}},{key:"componentDidLoad",value:function componentDidLoad(){"text"===this.type&&(0,_helpers_a72a277b_js__WEBPACK_IMPORTED_MODULE_1__.b)([{prop:this.label,propName:"label"}],"Badge")}},{key:"componentWillRender",value:function componentWillRender(){this.isInTopNav()&&this.setPositionInTopNavigation()}},{key:"navBarMenuOpenHandler",value:function navBarMenuOpenHandler(){this.isInTopNav()&&(this.position="inline")}},{key:"navBarMenuCloseHandler",value:function navBarMenuCloseHandler(){this.isInTopNav()&&(this.position="near")}},{key:"render",value:function render(){var ariaLabel=this.ariaLabel,el=this.el,foregroundColour=this.foregroundColour,getLabel=this.getLabel,position=this.position,size=this.size,label=this.label,type=this.type,variant=this.variant,visible=this.visible,theme=this.theme;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({},"ic-badge-".concat(position),!0),"ic-badge-".concat(size),!0),"ic-badge-".concat(variant),!0),"ic-badge-".concat(type),!0),"ic-badge-foreground-".concat(foregroundColour),null!==foregroundColour&&"custom"===variant),"".concat(visible?"ic-badge-show":"ic-badge-hide"),!0),"ic-theme-".concat(theme),"inherit"!==theme),id:el.id||null,"aria-label":ariaLabel,role:"status"},"icon"===type&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"badge-icon"}),"text"===type&&label&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"small"===size?"badge-small":"badge"},getLabel()),"dot"===type&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"sr-only"},"badge"))}},{key:"el",get:function get(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}}],[{key:"delegatesFocus",get:function get(){return!0}},{key:"watchers",get:function get(){return{accessibleLabel:["accessibleLabelHandler"],customColor:["customColorHandler"],variant:["variantHandler"],visible:["visibleHandler"]}}}]),Badge}();Badge.style="@media (prefers-reduced-motion: no-preference){:host(.ic-badge-show){animation:expand var(--ic-transition-duration-slow)}:host(.ic-badge-hide){animation:shrink var(--ic-transition-duration-slow)}}:host{display:flex;height:var(--ic-space-md);min-width:var(--ic-space-md);width:-moz-fit-content;width:fit-content;border-radius:calc(2 * var(--ic-space-xxl));position:absolute}:host ic-typography{--ic-typography-color:var(--ic-badge-text)}:host(.ic-badge-neutral){background-color:var(--ic-badge-dark) !important}:host(.ic-badge-light) ic-typography{--ic-typography-color:var(--ic-badge-text-monochrome)}:host(.ic-badge-light) ::slotted(*){fill:var(--ic-badge-icon-monochrome)}:host(.ic-badge-info){background-color:var(--ic-badge-info) !important}:host(.ic-badge-light){background-color:var(--ic-badge-light) !important}:host(.ic-badge-warning){background-color:var(--ic-badge-warning) !important}:host(.ic-badge-warning) ic-typography{--ic-typography-color:var(--ic-badge-warning-text)}:host(.ic-badge-warning) ::slotted(*){fill:var(--ic-badge-warning-icon)}:host(.ic-badge-error){background-color:var(--ic-badge-error) !important}:host(.ic-badge-success){background-color:var(--ic-badge-success) !important}:host(.ic-badge-small){height:var(--ic-space-sm);min-width:var(--ic-space-sm)}:host(.ic-badge-large){height:calc(var(--ic-space-md) + var(--ic-space-xxs));min-width:calc(var(--ic-space-md) + var(--ic-space-xxs))}:host(.ic-badge-dot.ic-badge-medium){height:var(--ic-space-xs);width:var(--ic-space-xs);min-width:var(--ic-space-xs)}:host(.ic-badge-dot.ic-badge-small){height:calc(var(--ic-space-xxs) + var(--ic-space-xxxs));width:calc(var(--ic-space-xxs) + var(--ic-space-xxxs));min-width:calc(var(--ic-space-xxs) + var(--ic-space-xxxs))}:host(.ic-badge-dot.ic-badge-large){height:var(--ic-space-sm);width:var(--ic-space-sm);min-width:var(--ic-space-sm)}:host ::slotted(*){fill:var(--ic-badge-icon)}:host(.ic-badge-foreground-dark) ::slotted(*){fill:var(--ic-color-text-primary-light)}:host(.ic-badge-foreground-light) ::slotted(*){fill:white}:host(.ic-badge-foreground-dark) ic-typography{--ic-typography-color:var(--ic-color-text-primary-light)}:host(.ic-badge-foreground-light) ic-typography{--ic-typography-color:var(--ic-color-primary-text-dark)}:host(.ic-badge-text) ic-typography{align-self:center;padding:0 calc((var(--ic-space-xs) + var(--ic-space-1px)) / 2)\n    var(--ic-space-1px)}:host(.ic-badge-text.ic-badge-small) ic-typography{padding:0 0.2132rem}:host(.ic-badge-text.ic-badge-large) ic-typography{padding:0 calc((var(--ic-space-sm) + var(--ic-space-1px)) / 2)\n    var(--ic-space-1px)}:host(.ic-badge-icon) ::slotted(svg){width:var(--ic-space-sm);height:var(--ic-space-sm);padding:var(--ic-space-xxxs)}:host(.ic-badge-icon.ic-badge-small) ::slotted(svg){width:var(--ic-space-xs);height:var(--ic-space-xs)}:host(.ic-badge-icon.ic-badge-large) ::slotted(svg){width:calc(var(--ic-space-sm) + var(--ic-space-xxxs));height:calc(var(--ic-space-sm) + var(--ic-space-xxxs));padding:calc(var(--ic-space-xxxs) + var(--ic-space-1px))}:host(.ic-badge-far){top:calc(-1 * var(--ic-space-xs));right:calc(-1 * var(--ic-space-xs))}:host(.ic-badge-far.ic-badge-small),:host(.ic-badge-dot.ic-badge-far.ic-badge-large){top:calc(-1 * var(--ic-space-xxs));right:calc(-1 * var(--ic-space-xxs))}:host(.ic-badge-dot.ic-badge-far),:host(.ic-badge-dot.ic-badge-far.ic-badge-small){top:calc(-1 * var(--ic-space-xxxs));right:calc(-1 * var(--ic-space-xxxs))}:host(.ic-badge-near){top:calc(-1 * calc(var(--ic-space-xxs) + var(--ic-space-1px)));right:calc(-1 * calc(var(--ic-space-xxs) + var(--ic-space-1px)))}:host(.ic-badge-dot.ic-badge-near){top:calc(-1 * var(--ic-space-1px));right:calc(-1 * var(--ic-space-1px))}:host(.ic-badge-inline){position:static}:host(.ic-badge-hide){visibility:hidden !important;transition:visibility var(--ic-transition-duration-slow)}.sr-only{position:absolute;left:-9999px}@keyframes expand{from{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}@keyframes shrink{from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(0)}}"}}]);