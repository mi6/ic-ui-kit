"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[9138],{"../web-components/dist/esm/ic-navigation-menu.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_navigation_menu:()=>NavigationMenu});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-fbdb1310.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}var NavigationMenu=function(){function NavigationMenu(hostRef){var _this=this;!function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}(this,NavigationMenu),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icNavigationMenuClose=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icNavigationMenuClose",7),this.hasButtons=!1,this.hasNavigation=!1,this.lastTabStop=null,this.navGroupFirst=!1,this.navItemAboveButtons=!1,this.closeMenu=function(){_this.icNavigationMenuClose.emit()},this.focusCloseButton=function(){var _a;null===(_a=_this.closeButton)||void 0===_a||_a.focus()},this.focusLastTabStop=function(){if(null!==_this.lastTabStop)switch(_this.lastTabStop.tagName){case"IC-NAVIGATION-BUTTON":case"IC-NAVIGATION-ITEM":case"IC-NAVIGATION-GROUP":_this.lastTabStop.focus();break;case"A":_this.lastTabStop.focus()}},this.status="",this.theme="inherit",this.version=""}return function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(NavigationMenu,[{key:"componentWillLoad",value:function componentWillLoad(){this.navBarEl=document.querySelector("ic-top-navigation");var navigationEls=(0,_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.Q)(this.el,"navigation");navigationEls&&(this.hasNavigation=!0,"IC-NAVIGATION-ITEM"===navigationEls[navigationEls.length-1].tagName&&(this.navItemAboveButtons=!0),"IC-NAVIGATION-GROUP"===navigationEls[0].tagName&&(this.navGroupFirst=!0));var buttonContent=(0,_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.Q)(this.el,"buttons");if(null!==buttonContent)this.hasButtons=!0,this.lastTabStop=buttonContent[buttonContent.length-1];else if(this.hasNavigation&&navigationEls){var _lastEl=navigationEls[navigationEls.length-1],slotContent=(0,_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.O)(_lastEl,"navigation-item");this.lastTabStop=null!==slotContent?slotContent:_lastEl}}},{key:"componentDidLoad",value:function componentDidLoad(){this.focusCloseButton()}},{key:"componentWillRender",value:function componentWillRender(){this.hasNavigation=(0,_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"navigation"),this.hasButtons=(0,_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"buttons")}},{key:"navItemClickHandler",value:function navItemClickHandler(){this.closeMenu()}},{key:"handleKeyDown",value:function handleKeyDown(ev){"Tab"===ev.key?ev.shiftKey?document.activeElement===this.navBarEl&&(ev.preventDefault(),this.focusLastTabStop()):document.activeElement!==this.lastTabStop&&null!==this.lastTabStop||(ev.preventDefault(),this.focusCloseButton()):"Escape"===ev.key&&this.closeMenu()}},{key:"render",value:function render(){var _this2=this;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:_defineProperty({},"ic-theme-".concat(this.theme),"inherit"!==this.theme)},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"popout-modal",onClick:this.closeMenu}),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"popout-menu",role:"dialog","aria-modal":"true","aria-label":"".concat(this.hasNavigation?"Navigation":"App"," menu")},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{"aria-hidden":"true",id:"navigation-landmark-text",class:"navigation-landmark-text"},"Main navigation"),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav",{"aria-labelledby":"navigation-landmark-text","aria-hidden":this.hasNavigation?"false":"true"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:_defineProperty(_defineProperty({},"menu-close-button-container",!0),"nav-group-first",this.navGroupFirst)},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{ref:function ref(el){return _this2.closeButton=el},id:"menu-close-button",class:"menu-close-button",variant:"icon",size:"large","aria-label":"Close ".concat(this.hasNavigation?"navigation":"app"," menu"),onClick:this.closeMenu},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{d:"M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"})))),this.hasNavigation&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"navigation"})),this.hasButtons&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:_defineProperty(_defineProperty({},"menu-buttons-container",!0),"menu-buttons-container-nav-item-above",this.navItemAboveButtons)},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"buttons"})),(""!==this.status||""!==this.version)&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:_defineProperty(_defineProperty({},"menu-status-version-container",!0),"status-version-no-buttons",!this.hasButtons)},""!==this.status&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"menu-status"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"label-uppercase","aria-label":"app tag",class:"menu-status-text"},this.status)),""!==this.version&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"menu-version"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"label",class:"menu-version-text","aria-label":"app version"},this.version)))))}},{key:"el",get:function get(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}}]),NavigationMenu}();NavigationMenu.style=":host{display:block;position:fixed;top:0;left:0;width:100%;min-height:100% !important;background:rgb(0 0 0 / 60%);z-index:var(--ic-z-index-navigation-menu)}.popout-modal{position:absolute;inset:0}.popout-menu{position:fixed;top:0;right:0;width:16rem;bottom:0;background-color:var(--ic-top-navigation-menu-background);color:var(--ic-top-navigation-nav-item);--ic-typography-color:var(--ic-top-navigation-nav-item);box-shadow:var(--ic-elevation-overlay);overflow-y:auto;overflow-x:hidden}:host(.inline) .popout-menu{position:absolute}.menu-close-button-container{position:relative;left:11.875rem;padding:var(--ic-space-md) 0}.nav-group-first{padding-bottom:0}.menu-buttons-container{padding:var(--ic-space-sm) 0;border-bottom:var(--ic-border-width) solid var(--ic-architectural-200)}.menu-buttons-container-nav-item-above{margin-top:var(--ic-space-md);border-top:var(--ic-border-width) solid var(--ic-architectural-200)}.menu-status-version-container{display:flex;flex-wrap:wrap;gap:var(--ic-space-xs);padding:var(--ic-space-md) var(--ic-space-md) var(--ic-space-xl)}.status-version-no-buttons{border-top:var(--ic-space-1px) solid var(--ic-architectural-200)}.menu-status{background-color:var(--ic-status-tag-neutral);--ic-typography-color:var(--ic-status-tag-text);border-radius:var(--ic-space-md);width:-moz-fit-content;width:fit-content;padding:var(--ic-space-xxs) var(--ic-space-sm)}.menu-version{border-radius:var(--ic-space-md);background-color:var(--ic-status-tag-outlined-background-neutral);--ic-typography-color:var(--ic-color-text-primary-light);padding:var(--ic-space-xxs) var(--ic-space-sm)}.menu-status-text,.menu-version-text{overflow-wrap:break-word}.navigation-landmark-text{position:absolute;width:var(--ic-space-1px);height:var(--ic-space-1px);padding:0;margin:calc(-1 * var(--ic-space-1px));overflow:hidden}"}}]);