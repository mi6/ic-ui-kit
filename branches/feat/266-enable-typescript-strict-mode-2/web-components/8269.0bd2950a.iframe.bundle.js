"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[8269],{"./dist/esm/ic-popover-menu.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_popover_menu:()=>PopoverMenu});var _index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-a7a720e7.js"),_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/helpers-de6293bf.js"),_popper_0fbeff6d_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/esm/popper-0fbeff6d.js");const PopoverMenu=class{constructor(hostRef){(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icPopoverClosed=(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icPopoverClosed",7),this.ARIA_LABEL="aria-label",this.popoverMenuEls=[],this.openingFromChild=!1,this.openingFromParent=!1,this.submenuLevel=1,this.theme="inherit",this.open=void 0,this.setButtonFocus=()=>{var _a;null===(_a=this.popoverMenuEls[this.currentFocus])||void 0===_a||_a.focus()},this.findAnchorEl=anchor=>{let anchorElement=null;return anchor?(anchorElement=document.querySelector(0===anchor.indexOf("#")?anchor:"#"+anchor),null===anchorElement&&console.error(`Popover anchor element '${anchor}' not found`)):void 0===this.submenuId&&console.error("No anchor specified for popover component"),anchorElement},this.isNotPopoverMenuEl=ev=>{const{id,tagName}=ev.target;return id!==this.anchor&&"IC-MENU-ITEM"!==tagName&&"IC-MENU-GROUP"!==tagName&&"IC-POPOVER-MENU"!==tagName},this.getNextItemToSelect=(currentItem,movingDown)=>{const numButtons=this.popoverMenuEls.length-1;currentItem<1&&(currentItem=0);let nextItem=movingDown?currentItem+1:currentItem-1;return nextItem<0?nextItem=numButtons:nextItem>numButtons&&(nextItem=0),nextItem},this.addMenuItems=elements=>{var _a;for(let i=0;i<elements.length;i++){const el=elements[i];if("IC-MENU-ITEM"===el.tagName)this.popoverMenuEls.push(el);else if("IC-MENU-GROUP"===el.tagName){const groupSlotWrapper=null===(_a=el.shadowRoot)||void 0===_a?void 0:_a.querySelector(".menu-items-wrapper");if(groupSlotWrapper){const menuGroupElements=(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.t)(groupSlotWrapper);menuGroupElements&&this.addMenuItems(menuGroupElements)}}}},this.getMenuAriaLabel=()=>{const ariaLabel=this.el.getAttribute(this.ARIA_LABEL);return(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.d)(this.submenuId)?`${ariaLabel}, within nested level ${this.submenuLevel} ${this.parentLabel} submenu,`:ariaLabel},this.handleBackButtonClick=()=>{var _a;null===(_a=this.parentPopover)||void 0===_a||_a.openFromChild(),this.open=!1},this.initPopperJS=()=>{this.anchorEl&&(this.popperInstance=(0,_popper_0fbeff6d_js__WEBPACK_IMPORTED_MODULE_2__.c)(this.anchorEl,this.el,{placement:"bottom-start",modifiers:[{name:"offset",options:{offset:[0,4]}},{name:"flip",options:{fallbackPlacements:["top-start","top-end","bottom-end"],rootBoundary:"viewport"}}]}))}}watchOpenHandler(){var _a;const popoverArr=null===(_a=this.el.parentElement)||void 0===_a?void 0:_a.querySelectorAll("ic-popover-menu");this.open?(popoverArr.length>0&&popoverArr.forEach((popover=>{popover!==this.el&&(popover.open=!1)})),void 0===this.parentPopover||this.popoverMenuEls.some((menuItem=>menuItem.id))||this.backButton&&this.popoverMenuEls.unshift(this.backButton),this.currentFocus=0,setTimeout(this.setButtonFocus,50)):this.popperInstance&&(popoverArr.length>0&&popoverArr.forEach((popover=>{popover!==this.el&&(popover.open=!1)})),this.popperInstance.destroy(),this.popperInstance=null)}disconnectedCallback(){this.popperInstance&&(this.popperInstance.destroy(),this.popperInstance=null)}componentDidLoad(){var _a;const slotWrapper=null===(_a=this.el.shadowRoot)||void 0===_a?void 0:_a.querySelector("ul.button");if(slotWrapper){const popoverMenuElements=(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.t)(slotWrapper);null!==popoverMenuElements&&this.addMenuItems(popoverMenuElements)}void 0===this.submenuId&&null===this.el.getAttribute(this.ARIA_LABEL)&&console.error("No aria-label specified for popover menu component - aria-label required")}componentWillRender(){this.anchorEl=this.findAnchorEl(this.anchor)}componentDidRender(){this.open&&!this.popperInstance&&this.initPopperJS()}handleMenuItemClick(ev){ev.detail.submenuTriggerFor||"Back"===ev.detail.label||this.closeMenu(!1,ev.detail)}handleSubmenuChange(ev){const target=ev.target;this.open=!1;const childEl=document.querySelector(`ic-popover-menu[submenu-id=${target.submenuTriggerFor}]`);childEl.parentPopover=this.el,childEl.anchor=this.anchor,childEl.ariaLabel=this.el.getAttribute(this.ARIA_LABEL),childEl.openFromParent(),childEl.submenuLevel=this.submenuLevel+1,childEl.parentLabel=target.label}handleClick(ev){this.open&&this.isNotPopoverMenuEl(ev)&&this.closeMenu()}handleKeyDown(ev){switch(ev.key){case"ArrowDown":case"ArrowUp":ev.preventDefault(),this.currentFocus=this.getNextItemToSelect(this.currentFocus,"ArrowDown"===ev.key),this.setButtonFocus();break;case"Home":this.currentFocus=0,this.setButtonFocus();break;case"End":this.currentFocus=this.popoverMenuEls.length-1,this.setButtonFocus();break;case"Escape":case"Tab":ev.preventDefault(),this.open&&(this.closeMenu(!0),this.el.blur())}}async openFromChild(){this.open=!0,this.openingFromChild=!0,setTimeout((()=>this.openingFromChild=!1),1e3)}async openFromParent(){this.open=!0,this.openingFromParent=!0,setTimeout((()=>this.openingFromParent=!1),1e3)}async closeMenu(setFocusToAnchor=!1,menuElement){var _a;this.open=!1,this.parentPopover?this.parentPopover.closeMenu(setFocusToAnchor,menuElement):(setFocusToAnchor&&(null===(_a=this.anchorEl)||void 0===_a||_a.focus()),this.icPopoverClosed.emit(menuElement))}render(){return(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"8c9982204dd224442a9652e939aa520a668757d3",class:{"ic-popover-menu-open":!!this.open,[`ic-theme-${this.theme}`]:"inherit"!==this.theme}},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"bab58d96e2db5e7b2fee6dd411d149de035815af",id:void 0===this.parentPopover?`ic-popover-submenu-${this.submenuId}`:"",class:{menu:!0}},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"8258c571281c5e9be3fbe9331847bf473f3d5ba4",class:{"opening-from-parent":this.openingFromParent,"opening-from-child":this.openingFromChild}},(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.d)(this.submenuId)&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"88e871df892d26896b7fc3bcbac865b0c832ad39"},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"b680cf485796f3f73369bcfb4045e196249f2831",role:"menu"},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-menu-item",{key:"bc0d8777f89ae0230ccd25c89f4265197ce13405",class:"ic-popover-submenu-back-button",ref:el=>this.backButton=el,label:"Back",onClick:this.handleBackButtonClick,id:`ic-popover-submenu-back-button-${this.submenuLevel}`},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{key:"2df5864786781311ad8477731e064c3a9258ffce",slot:"icon",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"submenu-back-icon"},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{key:"809e6030bbe5b24db528c8f1a18457cadb154890",d:"M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z",fill:"currentColor"})))),(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{key:"37325769c4b53b5785f986875cc0cf02bde14e32",variant:"subtitle-small",class:"parent-label"},this.parentLabel)),(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul",{key:"0037bd40efd1ef031c0bd606a39233020d653dd4",class:"button","aria-label":this.getMenuAriaLabel(),role:"menu"},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"e3d4d364debc7333594d7753ad7011b49f4d5ec6"})))))}static get delegatesFocus(){return!0}get el(){return(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{open:["watchOpenHandler"]}}};PopoverMenu.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}@media (prefers-reduced-motion: no-preference){:host .opening-from-parent{animation:slide-in var(--ic-transition-duration-slow) ease-in-out}:host .opening-from-child{animation:slide-out var(--ic-transition-duration-slow) ease-in-out}}:host{border-radius:var(--ic-border-radius);color:var(--ic-popover-nav-text);--ic-typography-color:var(--ic-popover-nav-text);position:relative;z-index:var(--ic-z-index-popover);box-sizing:border-box;box-shadow:var(--ic-elevation-overlay);display:none}:host(.on-dialog){inset:auto !important}:host(.on-dialog-fix-translate){transform:translate(0, var(--ic-space-xs)) !important}:host(.on-dialog-translate-y){transform:translate(0, calc(-1 * var(--translate-y))) !important}.menu{border:var(--ic-border-default);border-color:var(--ic-popover-border);border-radius:var(--ic-border-radius);background-color:var(--ic-popover-background);visibility:hidden;height:0}.button{text-decoration:none;list-style-type:none}:host(:focus-within){box-shadow:var(--ic-border-focus)}.menu:focus-visible{outline:none}:host(.ic-popover-menu-open){display:block;min-width:calc(20rem - var(--ic-space-xl));width:var(--popover-width, 20rem);max-width:calc(100vw - var(--ic-space-xl))}:host(.ic-popover-menu-open) .menu{visibility:visible;height:-moz-fit-content;height:fit-content;max-height:var(--max-height, -moz-fit-content);max-height:var(--max-height, fit-content);overflow-y:auto;overflow-x:hidden}.parent-label{--ic-typography-color:var(--ic-popover-parent-label);margin:var(--ic-space-xs) var(--ic-space-xs) 0}@keyframes slide-in{from{opacity:0;transform:translateX(10rem)}to{opacity:1;transform:translateX(0)}}@keyframes slide-out{from{opacity:0;transform:translateX(-10rem)}to{opacity:1;transform:translateX(0)}}'}}]);