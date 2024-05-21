"use strict";(self.webpackChunk_ukic_nextjs=self.webpackChunk_ukic_nextjs||[]).push([[5598],{"../web-components/dist/esm/ic-breadcrumb-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_breadcrumb_group:()=>BreadcrumbGroup});var _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_3f9bbeca_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-3f9bbeca.js"),BreadcrumbGroup=(__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js"),function(){function BreadcrumbGroup(hostRef){var _this=this;(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__.A)(this,BreadcrumbGroup),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ADD_CLASS_DELAY=50,this.IC_BREADCRUMB="ic-breadcrumb",this.resizeObserver=null,this.SHOW_BACK_ICON="show-back-icon",this.setBackBreadcrumb=function(){_this.backBreadcrumbOnly&&_this.setBackBreadcrumbAttr()},this.setBackBreadcrumbAttr=function(){_this.lastParentBreadcrumb&&(_this.lastParentBreadcrumb.classList.add("show"),_this.lastParentBreadcrumb.setAttribute(_this.SHOW_BACK_ICON,"true"))},this.getLastParentBreadcrumb=function(){var allBreadcrumbs=Array.from(_this.el.querySelectorAll(_this.IC_BREADCRUMB));return 1===allBreadcrumbs.length?null:(_this.breadcrumbs=allBreadcrumbs.filter((function(breadcrumb){return!breadcrumb.getAttribute("current")})),_this.breadcrumb=_this.breadcrumbs[_this.breadcrumbs.length-1],_this.breadcrumb)},this.lastParentBreadcrumb=this.getLastParentBreadcrumb(),this.setDefaultBreadcrumbs=function(){Array.from(_this.el.querySelectorAll(_this.IC_BREADCRUMB)).forEach((function(breadcrumb){breadcrumb.setAttribute(_this.SHOW_BACK_ICON,"false")}))},this.setCollapsed=function(){if(_this.collapsed){var allBreadcrumbs=Array.from(_this.el.querySelectorAll(_this.IC_BREADCRUMB));_this.collapsedBreadcrumbs=allBreadcrumbs.splice(1,allBreadcrumbs.length-2).filter((function(breadcrumb){return!breadcrumb.classList.contains("collapsed-breadcrumb-wrapper")})),_this.collapsedBreadcrumbs.forEach((function(breadcrumb){return breadcrumb.classList.add("hide")}));var firstBreadcrumb=allBreadcrumbs[0];firstBreadcrumb&&firstBreadcrumb.insertAdjacentElement("afterend",_this.collapsedBreadcrumbWrapper)}},this.clickHandler=function(){_this.handleHiddenCollapsedBreadcrumbs(_this.collapsedBreadcrumbWrapper)},this.renderCollapsedBreadcrumb=function(){_this.collapsedBreadcrumbWrapper=document.createElement("ic-breadcrumb"),_this.collapsedBreadcrumbWrapper.classList.add("collapsed-breadcrumb-wrapper"),_this.collapsedBreadcrumbEl=document.createElement("button");var ariaLabel=document.createElement("span");ariaLabel.id="collapsed-button-label",ariaLabel.innerText="Collapsed breadcrumbs",ariaLabel.className="hide",_this.collapsedBreadcrumbEl.setAttribute("aria-labelledby","collapsed-button-label");var ariaDescribed=document.createElement("span");return ariaDescribed.id="collapsed-button-described",ariaDescribed.innerText="Select to view collapsed breadcrumbs",ariaDescribed.className="hide",_this.collapsedBreadcrumbEl.setAttribute("aria-describedby","collapsed-button-described"),_this.collapsedBreadcrumbEl.id="collapsed-ellipsis",_this.collapsedBreadcrumbEl.innerText="...",_this.collapsedBreadcrumbEl.classList.add("collapsed-breadcrumb"),_this.collapsedBreadcrumbEl.addEventListener("click",_this.clickHandler),_this.collapsedBreadcrumbWrapper.append(ariaDescribed),_this.collapsedBreadcrumbWrapper.append(ariaLabel),_this.collapsedBreadcrumbWrapper.append(_this.collapsedBreadcrumbEl),_this.collapsedBreadcrumbWrapper},this.handleHiddenCollapsedBreadcrumbs=function(collapsedBreadcrumbWrapper){collapsedBreadcrumbWrapper.remove(),_this.collapsedBreadcrumbs.forEach((function(breadcrumb){breadcrumb.classList.add("visuallyhidden"),breadcrumb.classList.remove("hide"),setTimeout((function(){breadcrumb.classList.add("fade")}),_this.ADD_CLASS_DELAY),_this.removeVisuallyHiddenClass(breadcrumb)})),_this.expandedBreadcrumbs=!0,_this.collapsedBreadcrumbs[0].setFocus()},this.transitionendHandler=function(event){"opacity"===event.propertyName&&event.target.classList.remove("visuallyhidden")},this.removeVisuallyHiddenClass=function(breadcrumb){breadcrumb.addEventListener("transitionend",_this.transitionendHandler)},this.setLastParentCollapsedBackBreadcrumb=function(){_this.setBackBreadcrumbAttr(),_this.lastParentBreadcrumb.classList.remove("hide")},this.revertLastParentCollapsedBreadcrumb=function(){_this.lastParentBreadcrumb.setAttribute(_this.SHOW_BACK_ICON,"false")},this.resizeObserverCallback=function(currSize){currSize!==_this.deviceSize&&(_this.deviceSize=currSize,_this.deviceSize<=_helpers_3f9bbeca_js__WEBPACK_IMPORTED_MODULE_1__.D.S?(_this.el.setAttribute("back-breadcrumb-only","true"),_this.collapsed?_this.setLastParentCollapsedBackBreadcrumb():_this.setBackBreadcrumb()):(_this.el.setAttribute("back-breadcrumb-only","false"),_this.collapsed&&_this.breadcrumbs&&_this.breadcrumbs.length>2?(_this.revertLastParentCollapsedBreadcrumb(),_this.expandedBreadcrumbs?_this.setDefaultBreadcrumbs():_this.setCollapsed()):_this.setDefaultBreadcrumbs()))},this.runResizeObserver=function(){_this.resizeObserver=new ResizeObserver((function(){var currSize=(0,_helpers_3f9bbeca_js__WEBPACK_IMPORTED_MODULE_1__.e)();_this.resizeObserverCallback(currSize)})),_this.resizeObserver.observe(_this.el)},this.deviceSize=_helpers_3f9bbeca_js__WEBPACK_IMPORTED_MODULE_1__.D.XL,this.expandedBreadcrumbs=!1,this.appearance="default",this.backBreadcrumbOnly=!1,this.collapsed=!1}return(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__.A)(BreadcrumbGroup,[{key:"componentWillLoad",value:function componentWillLoad(){var _this2=this,allBreadcrumbs=Array.from(this.el.querySelectorAll(this.IC_BREADCRUMB));"default"!==this.appearance&&allBreadcrumbs.forEach((function(breadcrumb){breadcrumb.setAttribute("appearance",_this2.appearance)})),this.backBreadcrumbOnly?this.setBackBreadcrumb():(0,_helpers_3f9bbeca_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.runResizeObserver),this.collapsed&&(this.collapsedBreadcrumbWrapper=this.renderCollapsedBreadcrumb(),allBreadcrumbs.length>2&&((0,_helpers_3f9bbeca_js__WEBPACK_IMPORTED_MODULE_1__.e)()===_helpers_3f9bbeca_js__WEBPACK_IMPORTED_MODULE_1__.D.S?this.setLastParentCollapsedBackBreadcrumb():this.setCollapsed()))}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.breadcrumb&&this.breadcrumb.removeEventListener("transitionend",this.transitionendHandler),this.collapsedBreadcrumbEl&&this.collapsedBreadcrumbEl.removeEventListener("click",this.clickHandler)}},{key:"render",value:function render(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{back:this.backBreadcrumbOnly,collapsed:this.collapsed}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav",{"aria-label":"breadcrumbs"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ol",null,(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))))}},{key:"el",get:function get(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}}]),BreadcrumbGroup}());BreadcrumbGroup.style=":host{display:block}:host ol{display:flex;list-style-type:none;align-items:center;flex-wrap:wrap;padding:0;margin:0}:host(.back) ol ::slotted(ic-breadcrumb){display:none}:host(.back) ol ::slotted(ic-breadcrumb.show){display:flex}:host(.collapsed) ol ::slotted(ic-breadcrumb.hide){display:none;opacity:0;visibility:hidden}:host(.collapsed) ol ::slotted(ic-breadcrumb.visuallyhidden){display:block;opacity:0;transition:all var(--ic-easing-transition-slow)}:host(.collapsed) ol ::slotted(ic-breadcrumb.fade){opacity:1}"}}]);