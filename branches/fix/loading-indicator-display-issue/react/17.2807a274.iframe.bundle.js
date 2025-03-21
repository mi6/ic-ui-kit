"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[17],{"../web-components/dist/esm/ic-breadcrumb-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_breadcrumb_group:()=>BreadcrumbGroup});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-fbdb1310.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}var BreadcrumbGroup=function(){function BreadcrumbGroup(hostRef){var _this=this;!function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}(this,BreadcrumbGroup),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ADD_CLASS_DELAY=50,this.IC_BREADCRUMB="ic-breadcrumb",this.resizeObserver=null,this.SHOW_BACK_ICON="show-back-icon",this.setBreadcrumbTheme=function(){Array.from(_this.el.querySelectorAll(_this.IC_BREADCRUMB)).forEach((function(breadcrumb){breadcrumb.theme=_this.theme}))},this.setBreadcrumbMonochrome=function(){Array.from(_this.el.querySelectorAll(_this.IC_BREADCRUMB)).forEach((function(breadcrumb){breadcrumb.monochrome=_this.monochrome}))},this.setBackBreadcrumb=function(){_this.backBreadcrumbOnly?_this.setLastParentCollapsedBackBreadcrumb():_this.revertLastParentCollapsedBreadcrumb()},this.setBackBreadcrumbAttr=function(){_this.lastParentBreadcrumb&&(_this.lastParentBreadcrumb.classList.add("show"),_this.lastParentBreadcrumb.setAttribute(_this.SHOW_BACK_ICON,"true"))},this.getLastParentBreadcrumb=function(){var allBreadcrumbs=Array.from(_this.el.querySelectorAll(_this.IC_BREADCRUMB));return 1===allBreadcrumbs.length?null:(_this.breadcrumbs=allBreadcrumbs,_this.breadcrumb=_this.breadcrumbs[_this.breadcrumbs.length-2],_this.breadcrumb)},this.lastParentBreadcrumb=this.getLastParentBreadcrumb(),this.setDefaultBreadcrumbs=function(){Array.from(_this.el.querySelectorAll(_this.IC_BREADCRUMB)).forEach((function(breadcrumb){breadcrumb.setAttribute(_this.SHOW_BACK_ICON,"false")}))},this.setCollapsed=function(){var allBreadcrumbs=Array.from(_this.el.querySelectorAll(_this.IC_BREADCRUMB)),firstBreadcrumb=allBreadcrumbs[0];_this.collapsedBreadcrumbs&&_this.collapsedBreadcrumbs.forEach((function(breadcrumb){breadcrumb.classList.remove("visuallyhidden"),breadcrumb.classList.remove("fade")})),_this.collapsed?(_this.renderCollapsedBreadcrumb(),_this.collapsedBreadcrumbs=allBreadcrumbs.splice(1,allBreadcrumbs.length-2).filter((function(breadcrumb){return!breadcrumb.classList.contains("collapsed-breadcrumb-wrapper")})),_this.backBreadcrumbOnly||_this.collapsedBreadcrumbs.forEach((function(breadcrumb){return breadcrumb.classList.add("hide")})),firstBreadcrumb&&firstBreadcrumb.insertAdjacentElement("afterend",_this.collapsedBreadcrumbWrapper)):_this.collapsedBreadcrumbWrapper.remove()},this.clickHandler=function(){_this.handleHiddenCollapsedBreadcrumbs()},this.renderCollapsedBreadcrumb=function(){if(void 0===_this.collapsedBreadcrumbEl){_this.collapsedBreadcrumbWrapper=document.createElement("ic-breadcrumb"),_this.collapsedBreadcrumbWrapper.classList.add("collapsed-breadcrumb-wrapper"),_this.collapsedBreadcrumbEl=document.createElement("button");var ariaLabel=document.createElement("span");ariaLabel.id="collapsed-button-label",ariaLabel.innerText="Collapsed breadcrumbs",ariaLabel.className="hide",_this.collapsedBreadcrumbEl.setAttribute("aria-labelledby","collapsed-button-label");var ariaDescribed=document.createElement("span");ariaDescribed.id="collapsed-button-described",ariaDescribed.innerText="Select to view collapsed breadcrumbs",ariaDescribed.className="hide",_this.collapsedBreadcrumbEl.setAttribute("aria-describedby","collapsed-button-described"),_this.collapsedBreadcrumbEl.id="collapsed-ellipsis",_this.collapsedBreadcrumbEl.innerText="...",_this.collapsedBreadcrumbEl.classList.add("collapsed-breadcrumb"),_this.collapsedBreadcrumbEl.addEventListener("click",_this.clickHandler),_this.collapsedBreadcrumbWrapper.append(ariaDescribed),_this.collapsedBreadcrumbWrapper.append(ariaLabel),_this.collapsedBreadcrumbWrapper.append(_this.collapsedBreadcrumbEl)}},this.handleHiddenCollapsedBreadcrumbs=function(){_this.collapsedBreadcrumbWrapper.remove(),_this.collapsedBreadcrumbs.forEach((function(breadcrumb){breadcrumb.classList.add("visuallyhidden"),breadcrumb.classList.remove("hide"),setTimeout((function(){breadcrumb.classList.add("fade")}),_this.ADD_CLASS_DELAY),_this.removeVisuallyHiddenClass(breadcrumb)})),_this.expandedBreadcrumbs=!0,_this.collapsedBreadcrumbs[0].setFocus()},this.transitionendHandler=function(event){"opacity"===event.propertyName&&event.target.classList.remove("visuallyhidden")},this.removeVisuallyHiddenClass=function(breadcrumb){breadcrumb.addEventListener("transitionend",_this.transitionendHandler)},this.setLastParentCollapsedBackBreadcrumb=function(){_this.lastParentBreadcrumb=_this.getLastParentBreadcrumb(),_this.setBackBreadcrumbAttr(),_this.lastParentBreadcrumb&&(_this.lastParentBreadcrumb.classList.remove("hide"),_this.lastParentBreadcrumb.classList.add("show"))},this.revertLastParentCollapsedBreadcrumb=function(){_this.lastParentBreadcrumb&&(_this.lastParentBreadcrumb.setAttribute(_this.SHOW_BACK_ICON,"false"),_this.collapsed&&_this.lastParentBreadcrumb.classList.add("hide"))},this.resizeObserverCallback=function(currSize){currSize!==_this.deviceSize&&(_this.deviceSize=currSize,_this.deviceSize<=_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.D.S?(_this.el.setAttribute("back-breadcrumb-only","true"),_this.collapsed?_this.setLastParentCollapsedBackBreadcrumb():_this.setBackBreadcrumb()):(_this.el.setAttribute("back-breadcrumb-only","false"),_this.collapsed&&_this.breadcrumbs&&_this.breadcrumbs.length>2?(_this.revertLastParentCollapsedBreadcrumb(),_this.expandedBreadcrumbs?_this.setDefaultBreadcrumbs():_this.setCollapsed()):_this.setDefaultBreadcrumbs()))},this.runResizeObserver=function(){_this.resizeObserver=new ResizeObserver((function(){var currSize=(0,_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.e)();_this.resizeObserverCallback(currSize)})),_this.resizeObserver.observe(_this.el)},this.deviceSize=_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.D.XL,this.expandedBreadcrumbs=!1,this.backBreadcrumbOnly=!1,this.collapsed=!1,this.monochrome=!1,this.theme="inherit"}return function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(BreadcrumbGroup,[{key:"watchBackBreadcrumbHandler",value:function watchBackBreadcrumbHandler(){this.setBackBreadcrumb()}},{key:"watchCollapsedHandler",value:function watchCollapsedHandler(){this.setCollapsed()}},{key:"watchMonochromeHandler",value:function watchMonochromeHandler(){this.setBreadcrumbMonochrome()}},{key:"watchThemeHandler",value:function watchThemeHandler(){this.setBreadcrumbTheme()}},{key:"componentWillLoad",value:function componentWillLoad(){var allBreadcrumbs=Array.from(this.el.querySelectorAll(this.IC_BREADCRUMB));this.setBreadcrumbTheme(),this.setBreadcrumbMonochrome(),this.backBreadcrumbOnly?this.setBackBreadcrumb():(0,_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.runResizeObserver),this.collapsed&&allBreadcrumbs.length>2&&((0,_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.e)()===_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.D.S?this.setLastParentCollapsedBackBreadcrumb():this.setCollapsed())}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.breadcrumb&&this.breadcrumb.removeEventListener("transitionend",this.transitionendHandler),this.collapsedBreadcrumbEl&&this.collapsedBreadcrumbEl.removeEventListener("click",this.clickHandler)}},{key:"render",value:function render(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:(e={"ic-breadcrumb-group-back":!!this.backBreadcrumbOnly,"ic-breadcrumb-group-collapsed":!!this.collapsed},r="ic-theme-".concat(this.theme),t="inherit"!==this.theme,(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e)},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav",{"aria-label":"breadcrumbs"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ol",null,(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))));var e,r,t}},{key:"el",get:function get(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}}],[{key:"watchers",get:function get(){return{backBreadcrumbOnly:["watchBackBreadcrumbHandler"],collapsed:["watchCollapsedHandler"],monochrome:["watchMonochromeHandler"],theme:["watchThemeHandler"]}}}]),BreadcrumbGroup}();BreadcrumbGroup.style=":host{display:block}:host ol{display:flex;list-style-type:none;align-items:center;flex-wrap:wrap;padding:0;margin:0}:host(.ic-breadcrumb-group-back) ol ::slotted(ic-breadcrumb){display:none}:host(.ic-breadcrumb-group-back) ol ::slotted(ic-breadcrumb.show){display:flex}:host(.ic-breadcrumb-group-collapsed) ol ::slotted(ic-breadcrumb.hide){display:none;opacity:0;visibility:hidden}:host(.ic-breadcrumb-group-collapsed) ol ::slotted(ic-breadcrumb.visuallyhidden){display:block;opacity:0;transition:all var(--ic-easing-transition-slow)}:host(.ic-breadcrumb-group-collapsed) ol ::slotted(ic-breadcrumb.fade){opacity:1}"}}]);