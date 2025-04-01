"use strict";(self.webpackChunk_ukic_canary_web_components=self.webpackChunk_ukic_canary_web_components||[]).push([[3898],{"./dist/esm/ic-navigation-menu.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_navigation_menu:()=>NavigationMenu});var _index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-163fe708.js"),_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/helpers-bbab69a2.js");const NavigationMenu=class{constructor(hostRef){(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icNavigationMenuClose=(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icNavigationMenuClose",7),this.hasButtons=!1,this.hasNavigation=!1,this.lastTabStop=null,this.navGroupFirst=!1,this.navItemAboveButtons=!1,this.status="",this.theme="inherit",this.version="",this.closeMenu=()=>{this.icNavigationMenuClose.emit()},this.focusCloseButton=()=>{var _a;null===(_a=this.closeButton)||void 0===_a||_a.focus()},this.focusLastTabStop=()=>{let focusEl;if(null!==this.lastTabStop)switch(this.lastTabStop.tagName){case"IC-NAVIGATION-BUTTON":case"IC-NAVIGATION-ITEM":case"IC-NAVIGATION-GROUP":focusEl=this.lastTabStop,focusEl.focus();break;case"A":this.lastTabStop.focus()}}}componentWillLoad(){this.navBarEl=document.querySelector("ic-top-navigation");const navigationEls=(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.M)(this.el,"navigation");if(navigationEls){this.hasNavigation=!0;"IC-NAVIGATION-ITEM"===navigationEls[navigationEls.length-1].tagName&&(this.navItemAboveButtons=!0);"IC-NAVIGATION-GROUP"===navigationEls[0].tagName&&(this.navGroupFirst=!0)}const buttonContent=(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.M)(this.el,"buttons");if(null!==buttonContent)this.hasButtons=!0,this.lastTabStop=buttonContent[buttonContent.length-1];else if(this.hasNavigation&&navigationEls){const lastEl=navigationEls[navigationEls.length-1],slotContent=(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.K)(lastEl,"navigation-item");this.lastTabStop=null!==slotContent?slotContent:lastEl}}componentDidLoad(){this.focusCloseButton()}componentWillRender(){this.hasNavigation=(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"navigation"),this.hasButtons=(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"buttons")}navItemClickHandler(){this.closeMenu()}handleKeyDown(ev){"Tab"===ev.key?ev.shiftKey?document.activeElement===this.navBarEl&&(ev.preventDefault(),this.focusLastTabStop()):document.activeElement!==this.lastTabStop&&null!==this.lastTabStop||(ev.preventDefault(),this.focusCloseButton()):"Escape"===ev.key&&this.closeMenu()}render(){return(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"e9ecbbb6dd588afa6020ebdc5fd4b9f3b9d6d17d",class:{[`ic-theme-${this.theme}`]:"inherit"!==this.theme}},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"a11a0b572d3134f644b81a65b2183f3831cf7eef",class:"popout-modal",onClick:this.closeMenu}),(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"ff9724d8a0b3bf3071d9cfc9b44bcbbe1a63592e",class:"popout-menu",role:"dialog","aria-modal":"true","aria-label":(this.hasNavigation?"Navigation":"App")+" menu"},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"59a95028fc7047fbc0b25a8bf1c8b702758ff0c7","aria-hidden":"true",id:"navigation-landmark-text",class:"navigation-landmark-text"},"Main navigation"),(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav",{key:"925162fcf3432baaabfac61766b0833a65ff7413","aria-labelledby":"navigation-landmark-text","aria-hidden":this.hasNavigation?"false":"true"},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"4c8aefb471b0f993ec4789662adae82798cfe364",class:{"menu-close-button-container":!0,"nav-group-first":this.navGroupFirst}},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{key:"5f51478c203469b9dd182c2b53f5f47de12d7cf3",ref:el=>this.closeButton=el,id:"menu-close-button",class:"menu-close-button",variant:"icon",size:"large","aria-label":`Close ${this.hasNavigation?"navigation":"app"} menu`,onClick:this.closeMenu},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{key:"a27d75cdc971183b31193d2e8b5476f4fc4af2fc",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{key:"9df95971b7e3d2ddc31c7e6c610a33087da046fe",d:"M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"})))),this.hasNavigation&&(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"c5ea5be8dff71b36b4933f899877370ba2c93709",name:"navigation"})),this.hasButtons&&(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"e620a0c3deb6adf1f892fda537b759757bf84d42",class:{"menu-buttons-container":!0,"menu-buttons-container-nav-item-above":this.navItemAboveButtons}},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"d5050cea88cc2a0e9ceebcf7c299d2cfba25d30b",name:"buttons"})),(""!==this.status||""!==this.version)&&(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"26bb00f5b7a9b926be7c20d6855874997595a395",class:{"menu-status-version-container":!0,"status-version-no-buttons":!this.hasButtons}},""!==this.status&&(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"44f8e916cb8cda5d2708c94f4a682f8617b09a03",class:"menu-status"},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{key:"eed2bd09e04fc12e76505b50da937bbd9eaed88d",variant:"label-uppercase","aria-label":"app tag",class:"menu-status-text"},this.status)),""!==this.version&&(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"53cd05a0b7f707e37840ffa6c5f97ede69f3a2eb",class:"menu-version"},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{key:"3821ec288d9553aa73ad8ee23fd968121eab643d",variant:"label",class:"menu-version-text","aria-label":"app version"},this.version)))))}get el(){return(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};NavigationMenu.style=":host{display:block;position:fixed;top:0;left:0;width:100%;min-height:100% !important;background:rgb(0 0 0 / 60%);z-index:var(--ic-z-index-navigation-menu)}.popout-modal{position:absolute;inset:0}.popout-menu{position:fixed;top:0;right:0;width:16rem;bottom:0;background-color:var(--ic-top-navigation-menu-background);color:var(--ic-top-navigation-nav-item);--ic-typography-color:var(--ic-top-navigation-nav-item);box-shadow:var(--ic-elevation-overlay);overflow-y:auto;overflow-x:hidden}:host(.inline) .popout-menu{position:absolute}.menu-close-button-container{position:relative;left:11.875rem;padding:var(--ic-space-md) 0}.nav-group-first{padding-bottom:0}.menu-buttons-container{padding:var(--ic-space-sm) 0;border-bottom:var(--ic-border-width) solid var(--ic-architectural-200)}.menu-buttons-container-nav-item-above{margin-top:var(--ic-space-md);border-top:var(--ic-border-width) solid var(--ic-architectural-200)}.menu-status-version-container{display:flex;flex-wrap:wrap;gap:var(--ic-space-xs);padding:var(--ic-space-md) var(--ic-space-md) var(--ic-space-xl)}.status-version-no-buttons{border-top:var(--ic-space-1px) solid var(--ic-architectural-200)}.menu-status{background-color:var(--ic-status-tag-neutral);--ic-typography-color:var(--ic-status-tag-text);border-radius:var(--ic-space-md);width:-moz-fit-content;width:fit-content;padding:var(--ic-space-xxs) var(--ic-space-sm)}.menu-version{border-radius:var(--ic-space-md);background-color:var(--ic-status-tag-outlined-background-neutral);--ic-typography-color:var(--ic-color-text-primary-light);padding:var(--ic-space-xxs) var(--ic-space-sm)}.menu-status-text,.menu-version-text{overflow-wrap:break-word}.navigation-landmark-text{position:absolute;width:var(--ic-space-1px);height:var(--ic-space-1px);padding:0;margin:calc(-1 * var(--ic-space-1px));overflow:hidden}"}}]);