"use strict";(self.webpackChunk_ukic_canary_web_components=self.webpackChunk_ukic_canary_web_components||[]).push([[9358],{"./dist/esm/chevron-icon-875b7af2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Chevron});const Chevron='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M9.70687 6L8.29688 7.41L12.8769 12L8.29688 16.59L9.70687 18L15.7069 12L9.70687 6Z" fill="currentColor"/>\n</svg>\n'},"./dist/esm/ic-navigation-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_navigation_group:()=>NavigationGroup});var _index_93509377_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-93509377.js"),_helpers_cd64688a_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/helpers-cd64688a.js"),_chevron_icon_875b7af2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/esm/chevron-icon-875b7af2.js");__webpack_require__("./dist/esm/types-f605c21c.js");const NavigationGroup=class{constructor(hostRef){(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.navigationGroupOpened=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"navigationGroupOpened",7),this.allGroupedNavigationItems=[],this.DYNAMIC_GROUPED_LINKS_HEIGHT_MS=100,this.IC_NAVIGATION_ITEM="ic-navigation-item",this.mouseGate=!1,this.nodeName="IC-NAVIGATION-GROUP",this.GROUPED_LINKS_WRAPPER_CLASS=".grouped-links-wrapper",this.sideNavExpandHandler=event=>{this.isSideNavExpanded=event.detail.sideNavExpanded;const linkWrapper=this.el.shadowRoot.querySelector(this.GROUPED_LINKS_WRAPPER_CLASS);linkWrapper&&(this.isSideNavExpanded?this.expanded&&this.expandedNavItemsHeight?this.setGroupedLinksElementHeight(linkWrapper,this.expandedNavItemsHeight):this.expanded&&setTimeout((()=>{this.expandedNavItemsHeight=this.getNavigationChildItemsHeight(),this.setGroupedLinksElementHeight(linkWrapper,this.expandedNavItemsHeight)}),this.DYNAMIC_GROUPED_LINKS_HEIGHT_MS):this.expanded&&this.collapsedNavItemsHeight?this.setGroupedLinksElementHeight(linkWrapper,this.collapsedNavItemsHeight):this.expanded&&setTimeout((()=>{this.collapsedNavItemsHeight=this.getNavigationChildItemsHeight(),this.setGroupedLinksElementHeight(linkWrapper,this.collapsedNavItemsHeight)}),this.DYNAMIC_GROUPED_LINKS_HEIGHT_MS))},this.topNavResizedHandler=({detail})=>{var _a;const{size}=detail;size!==this.deviceSize&&(this.deviceSize=size,this.inTopNavSideMenu=size<=((null===(_a=this.parentEl)||void 0===_a?void 0:_a.customMobileBreakpoint)||_helpers_cd64688a_js__WEBPACK_IMPORTED_MODULE_1__.D.L))},this.setGroupedNavItemTabIndex=tabIndexValue=>{this.el.querySelectorAll(this.IC_NAVIGATION_ITEM).forEach((navigationItem=>{const navItem=navigationItem.shadowRoot.querySelector("a")||navigationItem.querySelector("a");navItem&&navItem.setAttribute("tabindex",tabIndexValue)}))},this.toggleGroupedLinkWrapperHeight=(wrapper,expanded)=>{wrapper&&(expanded?(this.isSideNavExpanded?this.setGroupedLinksElementHeight(wrapper,this.expandedNavItemsHeight):this.setGroupedLinksElementHeight(wrapper,this.collapsedNavItemsHeight),this.setGroupedNavItemTabIndex("0")):(wrapper.style.setProperty("--navigation-child-items-height","0"),this.setGroupedNavItemTabIndex("-1")))},this.toggleExpanded=()=>{this.expanded=!this.expanded;const linkWrapper=this.el.shadowRoot.querySelector(this.GROUPED_LINKS_WRAPPER_CLASS);this.toggleGroupedLinkWrapperHeight(linkWrapper,this.expanded)},this.handleClick=ev=>{"top"===this.navigationType&&ev.detail?this.toggleDropdown():this.toggleExpanded()},this.handleBlur=ev=>{const target=ev.relatedTarget;this.el.contains(target)||this.hideDropdown()},this.handleTopNavKeydown=ev=>{" "===ev.key||"Enter"===ev.key?this.toggleDropdown():this.inTopNavSideMenu||"Escape"!==ev.key||this.hideDropdown()},this.handleKeydown=ev=>{if("Enter"===ev.key||" "===ev.key||"Escape"===ev.key)switch(this.navigationType){case"top":this.handleTopNavKeydown(ev);break;case"side":this.toggleExpanded(),ev.preventDefault();break;default:this.toggleExpanded()}},this.handleMouseLeave=ev=>{const relTarget=ev.relatedTarget;this.mouseGate=!1,this.el.contains(relTarget)||relTarget===this.dropdown||document.activeElement===this.el||this.el.contains(document.activeElement)||(null==relTarget?void 0:relTarget.nodeName)!==this.nodeName||!0!==this.dropdownOpen?this.el.contains(relTarget)||relTarget===this.dropdown||this.el.contains(document.activeElement)||(this.mouseGate=!1,setTimeout((()=>{this.dropdownOpen&&this.hideDropdown()}),500)):(this.mouseGate=!0,this.hideDropdown())},this.handleMouseEnter=ev=>{const relTarget=ev.relatedTarget;document.addEventListener("keydown",this.handleKeydown),(null==relTarget?void 0:relTarget.nodeName)===this.nodeName&&!0===this.mouseGate?this.showDropdown():!1===this.dropdownOpen&&null!==relTarget&&!1===this.mouseGate&&(this.mouseGate=!0,setTimeout((()=>{this.mouseGate&&this.showDropdown()}),500))},this.renderDropdownGroupedLinks=()=>(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"navigation-group-dropdown":!this.inTopNavSideMenu,"navigation-group-dropdown-side-menu":this.inTopNavSideMenu,selected:this.dropdownOpen&&!this.inTopNavSideMenu},onMouseLeave:this.inTopNavSideMenu?null:this.handleMouseLeave,ref:el=>this.dropdown=el},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav",{class:{"navigation-group-dropdown-items":!this.inTopNavSideMenu}},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul",null,(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)))),this.renderGroupedLinks=()=>(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul",{class:"grouped-links-wrapper"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)),this.getNavigationChildItemsHeight=()=>{let navigationChildItemsHeight=0;return this.allGroupedNavigationItems.forEach((navItem=>{navigationChildItemsHeight+=navItem.offsetHeight})),`${navigationChildItemsHeight}px`},this.setInitialGroupedLinksWrapperHeight=()=>{const linkWrapper=this.el.shadowRoot.querySelector(this.GROUPED_LINKS_WRAPPER_CLASS);linkWrapper&&(this.isSideNavExpanded||this.collapsedNavItemsHeight||!this.expanded||(this.collapsedNavItemsHeight=this.getNavigationChildItemsHeight(),this.setGroupedLinksElementHeight(linkWrapper,this.collapsedNavItemsHeight)),this.isSideNavExpanded&&this.expanded&&(this.expandedNavItemsHeight=this.getNavigationChildItemsHeight(),this.setGroupedLinksElementHeight(linkWrapper,this.expandedNavItemsHeight)))},this.renderNavigationItems=()=>this.dropdownOpen||this.inTopNavSideMenu&&!this.expandable?this.renderDropdownGroupedLinks():"top"!==this.navigationType?this.renderGroupedLinks():null,this.deviceSize=_helpers_cd64688a_js__WEBPACK_IMPORTED_MODULE_1__.D.XL,this.dropdownOpen=!1,this.expanded=!0,this.focusStyle=(0,_helpers_cd64688a_js__WEBPACK_IMPORTED_MODULE_1__.d)(),this.inTopNavSideMenu=!1,this.navigationType=void 0,this.parentEl=void 0,this.expandable=!1,this.label=void 0}disconnectedCallback(){var _a,_b;"side"===this.navigationType?null===(_a=this.parentEl)||void 0===_a||_a.removeEventListener("sideNavExpanded",this.sideNavExpandHandler):"top"===this.navigationType&&(null===(_b=this.parentEl)||void 0===_b||_b.removeEventListener("topNavResized",this.topNavResizedHandler))}componentWillLoad(){this.deviceSize=(0,_helpers_cd64688a_js__WEBPACK_IMPORTED_MODULE_1__.f)();const{navType,parent}=(0,_helpers_cd64688a_js__WEBPACK_IMPORTED_MODULE_1__.A)(this.el);this.navigationType=navType,this.parentEl=parent,"side"===this.navigationType?this.parentEl.addEventListener("sideNavExpanded",this.sideNavExpandHandler):"top"===this.navigationType&&(this.parentEl.addEventListener("topNavResized",this.topNavResizedHandler),this.deviceSize<=this.parentEl.customMobileBreakpoint&&(this.inTopNavSideMenu=!0))}componentDidLoad(){this.allGroupedNavigationItems=Array.from(this.el.querySelectorAll(this.IC_NAVIGATION_ITEM)),setTimeout((()=>this.setInitialGroupedLinksWrapperHeight()),this.DYNAMIC_GROUPED_LINKS_HEIGHT_MS)}childBlurHandler(){this.hideDropdown()}handleNavigationGroupOpened(event){event.detail.source!==this.el&&this.hideDropdown()}navItemClickHandler(){this.hideDropdown()}themeChangeHandler(ev){const theme=ev.detail;this.focusStyle=theme.mode}async setFocus(){this.groupEl&&this.groupEl.focus()}toggleDropdown(){this.dropdownOpen=!this.dropdownOpen}showDropdown(){this.dropdownOpen||(this.navigationGroupOpened.emit({source:this.el}),this.toggleDropdown())}hideDropdown(){document.removeEventListener("keydown",this.handleKeydown),this.dropdownOpen&&this.toggleDropdown()}setGroupedLinksElementHeight(groupedNavItemWrapper,height){groupedNavItemWrapper.style.setProperty("--navigation-child-items-height",height)}render(){const{label,dropdownOpen,inTopNavSideMenu,expandable}=this;return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{"in-side-menu":inTopNavSideMenu,expanded:this.expanded,collapsed:!this.expanded,"navigation-group-side-nav":"side"===this.navigationType},role:"listitem"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{onMouseEnter:!inTopNavSideMenu&&"top"===this.navigationType&&this.handleMouseEnter,onMouseLeave:"top"===this.navigationType&&this.handleMouseLeave,tabindex:inTopNavSideMenu&&!expandable?"-1":"0",onBlur:this.handleBlur,onClick:expandable?this.handleClick:null,onKeyDown:this.handleKeydown,class:{"navigation-group":!0,[this.focusStyle]:!inTopNavSideMenu,"navigation-group-side-menu":inTopNavSideMenu&&!expandable,"navigation-group-side-menu-collapsed":inTopNavSideMenu&&expandable&&!dropdownOpen,"navigation-group-side-menu-expanded":inTopNavSideMenu&&expandable&&dropdownOpen,selected:dropdownOpen&&!inTopNavSideMenu},ref:el=>this.groupEl=el,"aria-expanded":`${dropdownOpen||this.expanded}`,"aria-haspopup":`${!inTopNavSideMenu&&"top"===this.navigationType}`},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"side"===this.navigationType?"caption":"label"},label),"side"===this.navigationType&&expandable&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"chevron-toggle-icon-wrapper":!0,"chevron-toggle-icon-closed":this.expanded},innerHTML:_chevron_icon_875b7af2_js__WEBPACK_IMPORTED_MODULE_3__.C})),this.renderNavigationItems())}static get delegatesFocus(){return!0}get el(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};NavigationGroup.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block}:host(.in-side-menu){border-bottom:var(--ic-border-width) solid var(--ic-architectural-200);padding:var(--ic-space-md) 0}:host .navigation-group{height:100%;width:-moz-fit-content;width:fit-content;color:var(--ic-theme-text);display:flex;align-items:center;justify-content:center;padding:0 var(--ic-space-md) var(--ic-space-xxs);transition:var(--ic-easing-transition-slow);position:relative;background:none;border:none;white-space:nowrap}:host(.in-side-menu) .navigation-group{height:2.5rem;width:100%;text-align:left}:host(.in-side-menu) .navigation-group .ic-typography-label{width:11.875rem}:host(.in-side-menu) .navigation-group-side-menu{color:var(--ic-action-default);justify-content:flex-start;padding:0 var(--ic-space-md) 0 var(--ic-space-md)}:host(.in-side-menu) .navigation-group-side-menu-collapsed,:host(.in-side-menu) .navigation-group-side-menu-expanded{color:var(--ic-action-default);justify-content:flex-start;padding-left:var(--ic-space-md)}:host(.in-side-menu) .navigation-group-side-menu-expanded{margin-bottom:var(--ic-space-xs)}:host(.in-side-menu) .navigation-group-side-menu-collapsed::after,:host(.in-side-menu) .navigation-group-side-menu-expanded::after{border-style:solid;border-width:0.125em 0.125em 0 0;content:"";display:inline-block;height:0.45em;left:0.75em;position:relative;top:-0.1em;transform:rotate(135deg);vertical-align:top;width:0.45em}:host(.in-side-menu) .navigation-group-side-menu-expanded::after{top:0.15em;transform:rotate(-45deg)}:host .navigation-group:hover,:host .navigation-group:active,:host .selected{background-color:var(--ic-architectural-20);color:var(--ic-color-primary-text);outline:none;cursor:pointer}:host(:not(.in-side-menu)) .navigation-group:focus{box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius);outline:var(--ic-hc-focus-outline);z-index:var(--ic-z-index-navigation-item);transition:box-shadow var(--ic-easing-transition-fast)}:host(.in-side-menu) .navigation-group-side-menu:hover,:host(.in-side-menu) .navigation-group-side-menu:active,:host(.in-side-menu) .navigation-group-side-menu:focus{background-color:var(--ic-architectural-20);color:var(--ic-action-default);cursor:auto;box-shadow:none;outline:none}:host(.in-side-menu) .navigation-group-side-menu:focus{outline:var(--ic-hc-focus-outline)}:host(.in-side-menu) .navigation-group-side-menu-expanded:hover:not(:focus),:host(.in-side-menu) .navigation-group-side-menu-collapsed:hover:not(:focus){background-color:var(--ic-action-dark-bg-hover);color:var(--ic-action-default);cursor:pointer}:host(.in-side-menu) .navigation-group-side-menu-expanded:active:not(:focus),:host(.in-side-menu) .navigation-group-side-menu-collapsed:active:not(:focus){background-color:var(--ic-action-dark-bg-active);color:var(--ic-action-default)}:host(.in-side-menu) .navigation-group-side-menu-expanded:focus,:host(.in-side-menu) .navigation-group-side-menu-collapsed:focus{color:var(--ic-action-default);box-shadow:var(--ic-border-focus-inset);border-radius:var(--ic-border-radius-inset);outline:var(--ic-hc-focus-outline)}:host .navigation-group-dropdown{background-color:var(--ic-architectural-20);border-bottom:var(--ic-border-default);position:absolute;left:0;right:0;padding:var(--ic-space-xs) var(--ic-space-md);box-shadow:0 0.375rem 0.5rem -0.375rem rgba(0 0 0 / 20%);z-index:calc(var(--ic-z-index-navigation-item) - 1)}:host .navigation-group-dropdown-items-list{list-style:none;display:flex;flex-flow:column wrap;align-content:flex-start;padding-left:var(--ic-space-md);max-height:16.5rem}:host .chevron-toggle-icon-wrapper{display:flex;align-items:center}:host .chevron-toggle-icon-wrapper svg{transform:rotate(90deg);height:var(--ic-space-lg);width:var(--ic-space-lg)}:host .chevron-toggle-icon-closed svg{transform:rotate(-90deg)}:host(.expanded) .grouped-links-wrapper{height:var(--navigation-child-items-height, auto) !important;transition:var(--ic-easing-transition-slow);overflow:hidden}:host(.navigation-group-side-nav) .link,:host(.navigation-group-side-nav) ::slotted(a){height:var(--navigation-child-items-height, auto)}:host(.collapsed) .grouped-links-wrapper{height:0;transition:var(--ic-easing-transition-slow);overflow:hidden}:host(.navigation-group-side-nav) .navigation-group{height:var(--navigation-group-height);width:var(--navigation-group-width);justify-content:var(--navigation-group-justify-content);padding-right:var(--navigation-group-expand-toggle-padding)}:host(.navigation-group-side-nav) .navigation-group:hover,:host(.navigation-group-side-nav) .navigation-group:active,:host(.navigation-group-side-nav) .selected{background-color:var(--navigation-group-hover);color:var(--navigation-group-text-hover)}:host(.navigation-group-side-nav) .navigation-group:focus{box-shadow:var(--ic-border-focus-inset);border-radius:var(--ic-border-radius-inset);background:none}:host(.navigation-group-side-nav) .ic-typography-caption{position:var(--navigation-group-title-position);left:var(--navigation-group-title-position-left);white-space:nowrap}'}}]);