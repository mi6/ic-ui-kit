"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[7545],{"./dist/esm/ic-breadcrumb-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_breadcrumb_group:()=>BreadcrumbGroup});var _index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-a7a720e7.js"),_helpers_da501ec4_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/helpers-da501ec4.js");const BreadcrumbGroup=class{constructor(hostRef){(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ADD_CLASS_DELAY=50,this.IC_BREADCRUMB="ic-breadcrumb",this.resizeObserver=null,this.SHOW_BACK_ICON="show-back-icon",this.deviceSize=_helpers_da501ec4_js__WEBPACK_IMPORTED_MODULE_1__.D.XL,this.expandedBreadcrumbs=!1,this.backBreadcrumbOnly=!1,this.collapsed=!1,this.monochrome=!1,this.theme="inherit",this.setBreadcrumbTheme=()=>{Array.from(this.el.querySelectorAll(this.IC_BREADCRUMB)).forEach((breadcrumb=>{breadcrumb.theme=this.theme}))},this.setBreadcrumbMonochrome=()=>{Array.from(this.el.querySelectorAll(this.IC_BREADCRUMB)).forEach((breadcrumb=>{breadcrumb.monochrome=this.monochrome}))},this.setBackBreadcrumb=()=>{this.backBreadcrumbOnly?this.setLastParentCollapsedBackBreadcrumb():this.revertLastParentCollapsedBreadcrumb()},this.setBackBreadcrumbAttr=()=>{this.lastParentBreadcrumb&&(this.lastParentBreadcrumb.classList.add("show"),this.lastParentBreadcrumb.setAttribute(this.SHOW_BACK_ICON,"true"))},this.getLastParentBreadcrumb=()=>{const allBreadcrumbs=Array.from(this.el.querySelectorAll(this.IC_BREADCRUMB));return 1===allBreadcrumbs.length?null:(this.breadcrumbs=allBreadcrumbs,this.breadcrumb=this.breadcrumbs[this.breadcrumbs.length-2],this.breadcrumb)},this.lastParentBreadcrumb=this.getLastParentBreadcrumb(),this.setDefaultBreadcrumbs=()=>{Array.from(this.el.querySelectorAll(this.IC_BREADCRUMB)).forEach((breadcrumb=>{breadcrumb.setAttribute(this.SHOW_BACK_ICON,"false")}))},this.setCollapsed=()=>{const allBreadcrumbs=Array.from(this.el.querySelectorAll(this.IC_BREADCRUMB)),firstBreadcrumb=allBreadcrumbs[0];this.collapsedBreadcrumbs&&this.collapsedBreadcrumbs.forEach((breadcrumb=>{breadcrumb.classList.remove("visuallyhidden"),breadcrumb.classList.remove("fade")})),this.collapsed?(this.renderCollapsedBreadcrumb(),this.collapsedBreadcrumbs=allBreadcrumbs.splice(1,allBreadcrumbs.length-2).filter((breadcrumb=>!breadcrumb.classList.contains("collapsed-breadcrumb-wrapper"))),this.backBreadcrumbOnly||this.collapsedBreadcrumbs.forEach((breadcrumb=>breadcrumb.classList.add("hide"))),firstBreadcrumb&&firstBreadcrumb.insertAdjacentElement("afterend",this.collapsedBreadcrumbWrapper)):this.collapsedBreadcrumbWrapper.remove()},this.clickHandler=()=>{this.handleHiddenCollapsedBreadcrumbs()},this.renderCollapsedBreadcrumb=()=>{if(void 0===this.collapsedBreadcrumbEl){this.collapsedBreadcrumbWrapper=document.createElement("ic-breadcrumb"),this.collapsedBreadcrumbWrapper.classList.add("collapsed-breadcrumb-wrapper"),this.collapsedBreadcrumbEl=document.createElement("button");const ariaLabel=document.createElement("span");ariaLabel.id="collapsed-button-label",ariaLabel.innerText="Collapsed breadcrumbs",ariaLabel.className="hide",this.collapsedBreadcrumbEl.setAttribute("aria-labelledby","collapsed-button-label");const ariaDescribed=document.createElement("span");ariaDescribed.id="collapsed-button-described",ariaDescribed.innerText="Select to view collapsed breadcrumbs",ariaDescribed.className="hide",this.collapsedBreadcrumbEl.setAttribute("aria-describedby","collapsed-button-described"),this.collapsedBreadcrumbEl.id="collapsed-ellipsis",this.collapsedBreadcrumbEl.innerText="...",this.collapsedBreadcrumbEl.classList.add("collapsed-breadcrumb"),this.collapsedBreadcrumbEl.addEventListener("click",this.clickHandler),this.collapsedBreadcrumbWrapper.append(ariaDescribed),this.collapsedBreadcrumbWrapper.append(ariaLabel),this.collapsedBreadcrumbWrapper.append(this.collapsedBreadcrumbEl)}},this.handleHiddenCollapsedBreadcrumbs=()=>{this.collapsedBreadcrumbWrapper.remove(),this.collapsedBreadcrumbs.forEach((breadcrumb=>{breadcrumb.classList.add("visuallyhidden"),breadcrumb.classList.remove("hide"),setTimeout((()=>{breadcrumb.classList.add("fade")}),this.ADD_CLASS_DELAY),this.removeVisuallyHiddenClass(breadcrumb)})),this.expandedBreadcrumbs=!0,this.collapsedBreadcrumbs[0].setFocus()},this.transitionendHandler=event=>{"opacity"===event.propertyName&&event.target.classList.remove("visuallyhidden")},this.removeVisuallyHiddenClass=breadcrumb=>{breadcrumb.addEventListener("transitionend",this.transitionendHandler)},this.setLastParentCollapsedBackBreadcrumb=()=>{this.lastParentBreadcrumb=this.getLastParentBreadcrumb(),this.setBackBreadcrumbAttr(),this.lastParentBreadcrumb&&(this.lastParentBreadcrumb.classList.remove("hide"),this.lastParentBreadcrumb.classList.add("show"))},this.revertLastParentCollapsedBreadcrumb=()=>{this.lastParentBreadcrumb.setAttribute(this.SHOW_BACK_ICON,"false"),this.collapsed&&this.lastParentBreadcrumb.classList.add("hide")},this.resizeObserverCallback=currSize=>{currSize!==this.deviceSize&&(this.deviceSize=currSize,this.deviceSize<=_helpers_da501ec4_js__WEBPACK_IMPORTED_MODULE_1__.D.S?(this.el.setAttribute("back-breadcrumb-only","true"),this.collapsed?this.setLastParentCollapsedBackBreadcrumb():this.setBackBreadcrumb()):(this.el.setAttribute("back-breadcrumb-only","false"),this.collapsed&&this.breadcrumbs&&this.breadcrumbs.length>2?(this.revertLastParentCollapsedBreadcrumb(),this.expandedBreadcrumbs?this.setDefaultBreadcrumbs():this.setCollapsed()):this.setDefaultBreadcrumbs()))},this.runResizeObserver=()=>{this.resizeObserver=new ResizeObserver((()=>{const currSize=(0,_helpers_da501ec4_js__WEBPACK_IMPORTED_MODULE_1__.e)();this.resizeObserverCallback(currSize)})),this.resizeObserver.observe(this.el)}}watchBackBreadcrumbHandler(){this.setBackBreadcrumb()}watchCollapsedHandler(){this.setCollapsed()}watchMonochromeHandler(){this.setBreadcrumbMonochrome()}watchThemeHandler(){this.setBreadcrumbTheme()}componentWillLoad(){const allBreadcrumbs=Array.from(this.el.querySelectorAll(this.IC_BREADCRUMB));this.setBreadcrumbTheme(),this.setBreadcrumbMonochrome(),this.backBreadcrumbOnly?this.setBackBreadcrumb():(0,_helpers_da501ec4_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.runResizeObserver),this.collapsed&&allBreadcrumbs.length>2&&((0,_helpers_da501ec4_js__WEBPACK_IMPORTED_MODULE_1__.e)()===_helpers_da501ec4_js__WEBPACK_IMPORTED_MODULE_1__.D.S?this.setLastParentCollapsedBackBreadcrumb():this.setCollapsed())}disconnectedCallback(){this.breadcrumb&&this.breadcrumb.removeEventListener("transitionend",this.transitionendHandler),this.collapsedBreadcrumbEl&&this.collapsedBreadcrumbEl.removeEventListener("click",this.clickHandler)}render(){return(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"ad7047667e17e65a533fc45aa54aadfbee46b965",class:{"ic-breadcrumb-group-back":this.backBreadcrumbOnly,"ic-breadcrumb-group-collapsed":this.collapsed,[`ic-theme-${this.theme}`]:"inherit"!==this.theme}},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav",{key:"6989788c6ab474817e3d89e320d238928fe9fe98","aria-label":"breadcrumbs"},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ol",{key:"3be77de48c0a458976232306ca13491ef5a8da29"},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"34d4879f8ee304884309e8b69fa06809f67a39f7"}))))}get el(){return(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{backBreadcrumbOnly:["watchBackBreadcrumbHandler"],collapsed:["watchCollapsedHandler"],monochrome:["watchMonochromeHandler"],theme:["watchThemeHandler"]}}};BreadcrumbGroup.style=":host{display:block}:host ol{display:flex;list-style-type:none;align-items:center;flex-wrap:wrap;padding:0;margin:0}:host(.ic-breadcrumb-group-back) ol ::slotted(ic-breadcrumb){display:none}:host(.ic-breadcrumb-group-back) ol ::slotted(ic-breadcrumb.show){display:flex}:host(.ic-breadcrumb-group-collapsed) ol ::slotted(ic-breadcrumb.hide){display:none;opacity:0;visibility:hidden}:host(.ic-breadcrumb-group-collapsed) ol ::slotted(ic-breadcrumb.visuallyhidden){display:block;opacity:0;transition:all var(--ic-easing-transition-slow)}:host(.ic-breadcrumb-group-collapsed) ol ::slotted(ic-breadcrumb.fade){opacity:1}"}}]);