"use strict";(self.webpackChunk_ukic_nextjs=self.webpackChunk_ukic_nextjs||[]).push([[3929],{"../web-components/dist/esm/chevron-icon-589e3b46.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Chevron});var Chevron='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M9.70687 6L8.29688 7.41L12.8769 12L8.29688 16.59L9.70687 18L15.7069 12L9.70687 6Z" fill="currentColor"/>\n</svg>\n'},"../web-components/dist/esm/ic-navigation-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_navigation_group:()=>NavigationGroup});var _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__),_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_4dcf8c16_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../web-components/dist/esm/helpers-4dcf8c16.js"),_chevron_icon_589e3b46_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../web-components/dist/esm/chevron-icon-589e3b46.js"),NavigationGroup=(__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js"),function(){function NavigationGroup(hostRef){var _this=this;(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__.A)(this,NavigationGroup),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.r)(this,hostRef),this.allGroupedNavigationItems=[],this.DYNAMIC_GROUPED_LINKS_HEIGHT_MS=100,this.IC_NAVIGATION_ITEM="ic-navigation-item",this.mouseGate=!1,this.nodeName="IC-NAVIGATION-GROUP",this.GROUPED_LINKS_WRAPPER_CLASS=".grouped-links-wrapper",this.sideNavExpandHandler=function(event){_this.isSideNavExpanded=event.detail.sideNavExpanded;var linkWrapper=_this.el.shadowRoot.querySelector(_this.GROUPED_LINKS_WRAPPER_CLASS);linkWrapper&&(_this.isSideNavExpanded?_this.expanded&&_this.expandedNavItemsHeight?_this.setGroupedLinksElementHeight(linkWrapper,_this.expandedNavItemsHeight):_this.expanded&&setTimeout((function(){_this.expandedNavItemsHeight=_this.getNavigationChildItemsHeight(),_this.setGroupedLinksElementHeight(linkWrapper,_this.expandedNavItemsHeight)}),_this.DYNAMIC_GROUPED_LINKS_HEIGHT_MS):_this.expanded&&_this.collapsedNavItemsHeight?_this.setGroupedLinksElementHeight(linkWrapper,_this.collapsedNavItemsHeight):_this.expanded&&setTimeout((function(){_this.collapsedNavItemsHeight=_this.getNavigationChildItemsHeight(),_this.setGroupedLinksElementHeight(linkWrapper,_this.collapsedNavItemsHeight)}),_this.DYNAMIC_GROUPED_LINKS_HEIGHT_MS))},this.topNavResizedHandler=function(_ref){var _a,size=_ref.detail.size;size!==_this.deviceSize&&(_this.deviceSize=size,_this.inTopNavSideMenu=size<=((null===(_a=_this.parentEl)||void 0===_a?void 0:_a.customMobileBreakpoint)||_helpers_4dcf8c16_js__WEBPACK_IMPORTED_MODULE_2__.D.L))},this.setGroupedNavItemTabIndex=function(tabIndexValue){_this.el.querySelectorAll(_this.IC_NAVIGATION_ITEM).forEach((function(navigationItem){var navItem=navigationItem.shadowRoot.querySelector("a")||navigationItem.querySelector("a");navItem&&navItem.setAttribute("tabindex",tabIndexValue)}))},this.toggleGroupedLinkWrapperHeight=function(wrapper,expanded){wrapper&&(expanded?(_this.isSideNavExpanded?_this.setGroupedLinksElementHeight(wrapper,_this.expandedNavItemsHeight):_this.setGroupedLinksElementHeight(wrapper,_this.collapsedNavItemsHeight),_this.setGroupedNavItemTabIndex("0")):(wrapper.style.setProperty("--navigation-child-items-height","0"),_this.setGroupedNavItemTabIndex("-1")))},this.toggleExpanded=function(){_this.expanded=!_this.expanded;var linkWrapper=_this.el.shadowRoot.querySelector(_this.GROUPED_LINKS_WRAPPER_CLASS);_this.toggleGroupedLinkWrapperHeight(linkWrapper,_this.expanded)},this.handleClick=function(ev){"top"===_this.navigationType&&ev.detail?_this.toggleDropdown():_this.toggleExpanded()},this.handleBlur=function(ev){var target=ev.relatedTarget;_this.el.contains(target)||_this.hideDropdown()},this.handleTopNavKeydown=function(ev){" "===ev.key||"Enter"===ev.key?_this.toggleDropdown():_this.inTopNavSideMenu||"Escape"!==ev.key||_this.hideDropdown()},this.handleKeydown=function(ev){if("Enter"===ev.key||" "===ev.key||"Escape"===ev.key)switch(_this.navigationType){case"top":_this.handleTopNavKeydown(ev);break;case"side":_this.toggleExpanded(),ev.preventDefault();break;default:_this.toggleExpanded()}},this.handleMouseLeave=function(ev){var relTarget=ev.relatedTarget;_this.mouseGate=!1,_this.el.contains(relTarget)||relTarget===_this.dropdown||document.activeElement===_this.el||_this.el.contains(document.activeElement)||(null==relTarget?void 0:relTarget.nodeName)!==_this.nodeName||!0!==_this.dropdownOpen?_this.el.contains(relTarget)||relTarget===_this.dropdown||_this.el.contains(document.activeElement)||(_this.mouseGate=!1,setTimeout((function(){_this.dropdownOpen&&_this.hideDropdown()}),500)):(_this.mouseGate=!0,_this.hideDropdown())},this.handleMouseEnter=function(ev){var relTarget=ev.relatedTarget;document.addEventListener("keydown",_this.handleKeydown),(null==relTarget?void 0:relTarget.nodeName)===_this.nodeName&&!0===_this.mouseGate?_this.showDropdown():!1===_this.dropdownOpen&&null!==relTarget&&!1===_this.mouseGate&&(_this.mouseGate=!0,setTimeout((function(){_this.mouseGate&&_this.showDropdown()}),500))},this.renderDropdownGroupedLinks=function(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)({},"navigation-group-dropdown",!_this.inTopNavSideMenu),"navigation-group-dropdown-side-menu",_this.inTopNavSideMenu),"selected",_this.dropdownOpen&&!_this.inTopNavSideMenu),onMouseLeave:_this.inTopNavSideMenu?null:_this.handleMouseLeave,ref:function ref(el){return _this.dropdown=el}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("nav",{class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)({},"navigation-group-dropdown-items",!_this.inTopNavSideMenu)},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ul",null,(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",null))))},this.renderGroupedLinks=function(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ul",{class:"grouped-links-wrapper"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",null))},this.getNavigationChildItemsHeight=function(){var navigationChildItemsHeight=0;return _this.allGroupedNavigationItems.forEach((function(navItem){navigationChildItemsHeight+=navItem.offsetHeight})),"".concat(navigationChildItemsHeight,"px")},this.setInitialGroupedLinksWrapperHeight=function(){var linkWrapper=_this.el.shadowRoot.querySelector(_this.GROUPED_LINKS_WRAPPER_CLASS);linkWrapper&&(_this.isSideNavExpanded||_this.collapsedNavItemsHeight||!_this.expanded||(_this.collapsedNavItemsHeight=_this.getNavigationChildItemsHeight(),_this.setGroupedLinksElementHeight(linkWrapper,_this.collapsedNavItemsHeight)),_this.isSideNavExpanded&&_this.expanded&&(_this.expandedNavItemsHeight=_this.getNavigationChildItemsHeight(),_this.setGroupedLinksElementHeight(linkWrapper,_this.expandedNavItemsHeight)))},this.renderNavigationItems=function(){return _this.dropdownOpen||_this.inTopNavSideMenu&&!_this.expandable?_this.renderDropdownGroupedLinks():"top"!==_this.navigationType?_this.renderGroupedLinks():null},this.deviceSize=_helpers_4dcf8c16_js__WEBPACK_IMPORTED_MODULE_2__.D.XL,this.dropdownOpen=!1,this.expanded=!0,this.focusStyle=(0,_helpers_4dcf8c16_js__WEBPACK_IMPORTED_MODULE_2__.b)(),this.inTopNavSideMenu=!1,this.navigationType=void 0,this.parentEl=void 0,this.expandable=!1,this.label=void 0}var _setFocus;return(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__.A)(NavigationGroup,[{key:"disconnectedCallback",value:function disconnectedCallback(){"side"===this.navigationType?this.parentEl.removeEventListener("sideNavExpanded",this.sideNavExpandHandler):"top"===this.navigationType&&this.parentEl.removeEventListener("topNavResized",this.topNavResizedHandler)}},{key:"componentWillLoad",value:function componentWillLoad(){this.deviceSize=(0,_helpers_4dcf8c16_js__WEBPACK_IMPORTED_MODULE_2__.e)();var _getNavItemParentDeta=(0,_helpers_4dcf8c16_js__WEBPACK_IMPORTED_MODULE_2__.x)(this.el),navType=_getNavItemParentDeta.navType,parent=_getNavItemParentDeta.parent;this.navigationType=navType,this.parentEl=parent,"side"===this.navigationType?this.parentEl.addEventListener("sideNavExpanded",this.sideNavExpandHandler):"top"===this.navigationType&&(this.parentEl.addEventListener("topNavResized",this.topNavResizedHandler),this.deviceSize<=this.parentEl.customMobileBreakpoint&&(this.inTopNavSideMenu=!0))}},{key:"componentDidLoad",value:function componentDidLoad(){var _this2=this;this.allGroupedNavigationItems=Array.from(this.el.querySelectorAll(this.IC_NAVIGATION_ITEM)),setTimeout((function(){return _this2.setInitialGroupedLinksWrapperHeight()}),this.DYNAMIC_GROUPED_LINKS_HEIGHT_MS)}},{key:"childBlurHandler",value:function childBlurHandler(){this.hideDropdown()}},{key:"navItemClickHandler",value:function navItemClickHandler(){this.hideDropdown()}},{key:"themeChangeHandler",value:function themeChangeHandler(ev){var theme=ev.detail;this.focusStyle=theme.mode}},{key:"setFocus",value:(_setFocus=(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__.A)(_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().mark((function _callee(){return _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:this.groupEl&&this.groupEl.focus();case 1:case"end":return _context.stop()}}),_callee,this)}))),function setFocus(){return _setFocus.apply(this,arguments)})},{key:"toggleDropdown",value:function toggleDropdown(){this.dropdownOpen=!this.dropdownOpen}},{key:"showDropdown",value:function showDropdown(){this.dropdownOpen||this.toggleDropdown()}},{key:"hideDropdown",value:function hideDropdown(){document.removeEventListener("keydown",this.handleKeydown),this.dropdownOpen&&this.toggleDropdown()}},{key:"setGroupedLinksElementHeight",value:function setGroupedLinksElementHeight(groupedNavItemWrapper,height){groupedNavItemWrapper.style.setProperty("--navigation-child-items-height",height)}},{key:"render",value:function render(){var _this3=this,label=this.label,dropdownOpen=this.dropdownOpen,inTopNavSideMenu=this.inTopNavSideMenu,expandable=this.expandable;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.H,{class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)({},"in-side-menu",inTopNavSideMenu),"expanded",this.expanded),"collapsed",!this.expanded),"navigation-group-side-nav","side"===this.navigationType),role:"listitem"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("button",{onMouseEnter:!inTopNavSideMenu&&"top"===this.navigationType&&this.handleMouseEnter,onMouseLeave:"top"===this.navigationType&&this.handleMouseLeave,tabindex:inTopNavSideMenu&&!expandable?"-1":"0",onBlur:this.handleBlur,onClick:expandable?this.handleClick:null,onKeyDown:this.handleKeydown,class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)({},"navigation-group",!0),this.focusStyle,!inTopNavSideMenu),"navigation-group-side-menu",inTopNavSideMenu&&!expandable),"navigation-group-side-menu-collapsed",inTopNavSideMenu&&expandable&&!dropdownOpen),"navigation-group-side-menu-expanded",inTopNavSideMenu&&expandable&&dropdownOpen),"selected",dropdownOpen&&!inTopNavSideMenu),ref:function ref(el){return _this3.groupEl=el},"aria-expanded":"".concat(dropdownOpen||this.expanded),"aria-haspopup":"".concat(!inTopNavSideMenu&&"top"===this.navigationType)},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-typography",{variant:"side"===this.navigationType?"caption":"label"},label),"side"===this.navigationType&&expandable&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:{"chevron-toggle-icon-wrapper":!0,"chevron-toggle-icon-closed":this.expanded},innerHTML:_chevron_icon_589e3b46_js__WEBPACK_IMPORTED_MODULE_8__.C})),this.renderNavigationItems())}},{key:"el",get:function get(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.g)(this)}}],[{key:"delegatesFocus",get:function get(){return!0}}]),NavigationGroup}());NavigationGroup.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block}:host(.in-side-menu){border-bottom:var(--ic-border-width) solid var(--ic-architectural-200);padding:var(--ic-space-md) 0}:host .navigation-group{height:100%;width:-moz-fit-content;width:fit-content;color:var(--ic-theme-text);display:flex;align-items:center;justify-content:center;padding:0 var(--ic-space-md);transition:var(--ic-easing-transition-slow);position:relative;background:none;border:none;white-space:nowrap}:host(.in-side-menu) .navigation-group{height:2.5rem;width:100%;text-align:left}:host(.in-side-menu) .navigation-group .ic-typography-label{width:11.875rem}:host(.in-side-menu) .navigation-group-side-menu{color:var(--ic-action-default);justify-content:flex-start;padding:0 var(--ic-space-md) 0 var(--ic-space-md)}:host(.in-side-menu) .navigation-group-side-menu-collapsed,:host(.in-side-menu) .navigation-group-side-menu-expanded{color:var(--ic-action-default);justify-content:flex-start;padding-left:var(--ic-space-md)}:host(.in-side-menu) .navigation-group-side-menu-expanded{margin-bottom:var(--ic-space-xs)}:host(.in-side-menu) .navigation-group-side-menu-collapsed::after,:host(.in-side-menu) .navigation-group-side-menu-expanded::after{border-style:solid;border-width:0.125em 0.125em 0 0;content:"";display:inline-block;height:0.45em;left:0.75em;position:relative;top:-0.1em;transform:rotate(135deg);vertical-align:top;width:0.45em}:host(.in-side-menu) .navigation-group-side-menu-expanded::after{top:0.15em;transform:rotate(-45deg)}:host .navigation-group:hover,:host .navigation-group:active,:host .selected{background-color:var(--ic-architectural-20);color:var(--ic-color-primary-text);outline:none;cursor:pointer}:host(:not(.in-side-menu)) .navigation-group:focus{box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius);outline:var(--ic-hc-focus-outline);z-index:var(--ic-z-index-navigation-item);transition:box-shadow var(--ic-easing-transition-fast)}:host(.in-side-menu) .navigation-group-side-menu:hover,:host(.in-side-menu) .navigation-group-side-menu:active,:host(.in-side-menu) .navigation-group-side-menu:focus{background-color:var(--ic-architectural-20);color:var(--ic-action-default);cursor:auto;box-shadow:none;outline:none}:host(.in-side-menu) .navigation-group-side-menu:focus{outline:var(--ic-hc-focus-outline)}:host(.in-side-menu) .navigation-group-side-menu-expanded:hover:not(:focus),:host(.in-side-menu) .navigation-group-side-menu-collapsed:hover:not(:focus){background-color:var(--ic-action-dark-bg-hover);color:var(--ic-action-default);cursor:pointer}:host(.in-side-menu) .navigation-group-side-menu-expanded:active:not(:focus),:host(.in-side-menu) .navigation-group-side-menu-collapsed:active:not(:focus){background-color:var(--ic-action-dark-bg-active);color:var(--ic-action-default)}:host(.in-side-menu) .navigation-group-side-menu-expanded:focus,:host(.in-side-menu) .navigation-group-side-menu-collapsed:focus{color:var(--ic-action-default);box-shadow:var(--ic-border-focus-inset);border-radius:var(--ic-border-radius-inset);outline:var(--ic-hc-focus-outline)}:host .navigation-group-dropdown{background-color:var(--ic-architectural-20);border-bottom:var(--ic-border-default);position:absolute;left:0;right:0;padding:var(--ic-space-xs) var(--ic-space-md);box-shadow:0 0.375rem 0.5rem -0.375rem rgba(0 0 0 / 20%);z-index:calc(var(--ic-z-index-navigation-item) - 1)}:host .navigation-group-dropdown-items-list{list-style:none;display:flex;flex-flow:column wrap;align-content:flex-start;padding-left:var(--ic-space-md);max-height:16.5rem}:host .chevron-toggle-icon-wrapper{display:flex;align-items:center}:host .chevron-toggle-icon-wrapper svg{transform:rotate(90deg);height:var(--ic-space-lg);width:var(--ic-space-lg)}:host .chevron-toggle-icon-closed svg{transform:rotate(-90deg)}:host(.expanded) .grouped-links-wrapper{height:var(--navigation-child-items-height, auto) !important;transition:var(--ic-easing-transition-slow);overflow:hidden}:host(.navigation-group-side-nav) .link,:host(.navigation-group-side-nav) ::slotted(a){height:var(--navigation-child-items-height, auto)}:host(.collapsed) .grouped-links-wrapper{height:0;transition:var(--ic-easing-transition-slow);overflow:hidden}:host(.navigation-group-side-nav) .navigation-group{height:var(--navigation-group-height);width:var(--navigation-group-width);justify-content:var(--navigation-group-justify-content);padding-right:var(--navigation-group-expand-toggle-padding)}:host(.navigation-group-side-nav) .navigation-group:hover,:host(.navigation-group-side-nav) .navigation-group:active,:host(.navigation-group-side-nav) .selected{background-color:var(--navigation-group-hover);color:var(--navigation-group-text-hover)}:host(.navigation-group-side-nav) .navigation-group:focus{box-shadow:var(--ic-border-focus-inset);border-radius:var(--ic-border-radius-inset);background:none}:host(.navigation-group-side-nav) .ic-typography-caption{position:var(--navigation-group-title-position);left:var(--navigation-group-title-position-left);white-space:nowrap}'}}]);