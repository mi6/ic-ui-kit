"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[4031],{"../web-components/dist/esm/ic-navigation-menu.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_navigation_menu:()=>NavigationMenu});var _index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-a7a720e7.js"),_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-de6293bf.js");const NavigationMenu=class{constructor(hostRef){(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icNavigationMenuClose=(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icNavigationMenuClose",7),this.closeButton=null,this.hasButtons=!1,this.hasNavigation=!1,this.lastTabStop=null,this.navGroupFirst=!1,this.navItemAboveButtons=!1,this.status="",this.theme="inherit",this.version="",this.closeMenu=()=>{this.icNavigationMenuClose.emit()},this.focusCloseButton=()=>{this.closeButton.focus&&this.closeButton.focus()},this.focusLastTabStop=()=>{let focusEl;if(null!==this.lastTabStop)switch(this.lastTabStop.tagName){case"IC-NAVIGATION-BUTTON":case"IC-NAVIGATION-ITEM":case"IC-NAVIGATION-GROUP":focusEl=this.lastTabStop,focusEl.focus();break;case"A":this.lastTabStop.focus()}}}componentWillLoad(){this.navBarEl=document.querySelector("ic-top-navigation");const navigationEls=(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.Q)(this.el,"navigation");if(navigationEls){this.hasNavigation=!0;"IC-NAVIGATION-ITEM"===navigationEls[navigationEls.length-1].tagName&&(this.navItemAboveButtons=!0);"IC-NAVIGATION-GROUP"===navigationEls[0].tagName&&(this.navGroupFirst=!0)}const buttonContent=(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.Q)(this.el,"buttons");if(null!==buttonContent)this.hasButtons=!0,this.lastTabStop=buttonContent[buttonContent.length-1];else if(this.hasNavigation){const lastEl=navigationEls[navigationEls.length-1],slotContent=(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.O)(lastEl,"navigation-item");this.lastTabStop=null!==slotContent?slotContent:lastEl}}componentDidLoad(){this.focusCloseButton()}componentWillRender(){this.hasNavigation=(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"navigation"),this.hasButtons=(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"buttons")}navItemClickHandler(){this.closeMenu()}handleKeyDown(ev){"Tab"===ev.key?ev.shiftKey?document.activeElement===this.navBarEl&&(ev.preventDefault(),this.focusLastTabStop()):document.activeElement!==this.lastTabStop&&null!==this.lastTabStop||(ev.preventDefault(),this.focusCloseButton()):"Escape"===ev.key&&this.closeMenu()}render(){return(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"66e393aab5031596eea60604d750297f2efc217b",class:{[`ic-theme-${this.theme}`]:"inherit"!==this.theme}},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"b86d525555a3830a592bff78e033fd502751342e",class:"popout-modal",onClick:this.closeMenu}),(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"59e7b004f29531000ffd0a6a556fa36af3b0bd14",class:"popout-menu",role:"dialog","aria-modal":"true","aria-label":(this.hasNavigation?"Navigation":"App")+" menu"},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"8ece1e8d4eef9aa2f0658b85fce3cb8e225a428a","aria-hidden":"true",id:"navigation-landmark-text",class:"navigation-landmark-text"},"Main navigation"),(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav",{key:"45c075f6514bb916f46e8f44952a6be71113125b","aria-labelledby":"navigation-landmark-text","aria-hidden":this.hasNavigation?"false":"true"},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"6119c192b45fd85f09409034fe22e2417ef08349",class:{"menu-close-button-container":!0,"nav-group-first":this.navGroupFirst}},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{key:"fb83d9923e9e18182ddc52dd9d800c14871ffe60",ref:el=>this.closeButton=el,id:"menu-close-button",class:"menu-close-button",variant:"icon",size:"large","aria-label":`Close ${this.hasNavigation?"navigation":"app"} menu`,onClick:this.closeMenu},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{key:"0b23ed50fbde65fce285f86f326759d28402f317",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{key:"2ac50e66a674a7282dbcbce0f0014c55184e8d1b",d:"M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"})))),this.hasNavigation&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"dedc3f9a0691b1fb076a40285270ed1c96ad392f",name:"navigation"})),this.hasButtons&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"ce766e95358d19dc9f9b9492cf076724a8a14509",class:{"menu-buttons-container":!0,"menu-buttons-container-nav-item-above":this.navItemAboveButtons}},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"93ae45d067f2f9e7fea0ba4c47d9960f58b5d58b",name:"buttons"})),(""!==this.status||""!==this.version)&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"b8d78a47ea08d0db58edb5827c5b2b97541174cb",class:{"menu-status-version-container":!0,"status-version-no-buttons":!this.hasButtons}},""!==this.status&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"07ad5e070135648429dcfdd78340780bb86b5793",class:"menu-status"},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{key:"fcff4600295de8b9816ff2c8611ecbbc810c897d",variant:"label-uppercase","aria-label":"app tag",class:"menu-status-text"},this.status)),""!==this.version&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"da3480f928563a74ae5f49c86180c3fdc183b291",class:"menu-version"},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{key:"a706f0955bfd0b558f167669640d7faea0ed3fdc",variant:"label",class:"menu-version-text","aria-label":"app version"},this.version)))))}get el(){return(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};NavigationMenu.style=":host{display:block;position:fixed;top:0;left:0;width:100%;min-height:100% !important;background:rgb(0 0 0 / 60%);z-index:var(--ic-z-index-navigation-menu)}.popout-modal{position:absolute;inset:0}.popout-menu{position:fixed;top:0;right:0;width:16rem;bottom:0;background-color:var(--ic-top-navigation-menu-background);color:var(--ic-top-navigation-nav-item);--ic-typography-color:var(--ic-top-navigation-nav-item);box-shadow:var(--ic-elevation-overlay);overflow-y:auto;overflow-x:hidden}:host(.inline) .popout-menu{position:absolute}.menu-close-button-container{position:relative;left:11.875rem;padding:var(--ic-space-md) 0}.nav-group-first{padding-bottom:0}.menu-buttons-container{padding:var(--ic-space-sm) 0;border-bottom:var(--ic-border-width) solid var(--ic-architectural-200)}.menu-buttons-container-nav-item-above{margin-top:var(--ic-space-md);border-top:var(--ic-border-width) solid var(--ic-architectural-200)}.menu-status-version-container{display:flex;flex-wrap:wrap;gap:var(--ic-space-xs);padding:var(--ic-space-md) var(--ic-space-md) var(--ic-space-xl)}.status-version-no-buttons{border-top:var(--ic-space-1px) solid var(--ic-architectural-200)}.menu-status{background-color:var(--ic-status-tag-neutral);--ic-typography-color:var(--ic-status-tag-text);border-radius:var(--ic-space-md);width:-moz-fit-content;width:fit-content;padding:var(--ic-space-xxs) var(--ic-space-sm)}.menu-version{border-radius:var(--ic-space-md);background-color:var(--ic-status-tag-outlined-background-neutral);--ic-typography-color:var(--ic-color-text-primary-light);padding:var(--ic-space-xxs) var(--ic-space-sm)}.menu-status-text,.menu-version-text{overflow-wrap:break-word}.navigation-landmark-text{position:absolute;width:var(--ic-space-1px);height:var(--ic-space-1px);padding:0;margin:calc(-1 * var(--ic-space-1px));overflow:hidden}"}}]);