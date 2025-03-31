"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[7061],{"../web-components/dist/esm/check-icon-4a9f8371.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Check});const Check='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M8.79502 15.875L4.62502 11.705L3.20502 13.115L8.79502 18.705L20.795 6.70501L19.385 5.29501L8.79502 15.875Z" fill="currentColor"/>\n</svg>\n'},"../web-components/dist/esm/chevron-icon-589e3b46.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Chevron});const Chevron='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M9.70687 6L8.29688 7.41L12.8769 12L8.29688 16.59L9.70687 18L15.7069 12L9.70687 6Z" fill="currentColor"/>\n</svg>\n'},"../web-components/dist/esm/ic-menu-item.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_menu_item:()=>MenuItem});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-c7b7c2d9.js"),_check_icon_4a9f8371_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../web-components/dist/esm/check-icon-4a9f8371.js"),_chevron_icon_589e3b46_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../web-components/dist/esm/chevron-icon-589e3b46.js");__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js");const MenuItem=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.childBlur=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"childBlur",7),this.handleMenuItemClick=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"handleMenuItemClick",7),this.icToggleChecked=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icToggleChecked",7),this.triggerPopoverMenuInstance=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"triggerPopoverMenuInstance",7),this.handleClick=e=>{(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_1__.e)(this.submenuTriggerFor)?this.triggerPopoverMenuInstance.emit():"toggle"===this.variant&&(e.preventDefault(),this.toggleChecked=!this.toggleChecked,this.icToggleChecked.emit({checked:this.toggleChecked})),this.handleMenuItemClick.emit(this.el)},this.getMenuItemAriaLabel=()=>{let ariaLabel=this.label;(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_1__.e)(this.description)&&(ariaLabel=`${ariaLabel}, ${this.description}`),(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_1__.e)(this.keyboardShortcut)&&(ariaLabel=`${ariaLabel}, ${this.keyboardShortcut}`),"destructive"===this.variant&&(ariaLabel=`${ariaLabel}, destructive`),(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_1__.e)(this.submenuTriggerFor)&&(ariaLabel=`${ariaLabel}, triggers submenu`),this.el.classList.contains("ic-popover-submenu-back-button")&&(ariaLabel="Go back to parent menu");const parentEl=this.el.parentElement;return"IC-MENU-GROUP"===parentEl.tagName&&parentEl.label?`${ariaLabel}, ${parentEl.label} menu group`:ariaLabel},this.description=void 0,this.disabled=!1,this.href=void 0,this.hreflang=void 0,this.keyboardShortcut=void 0,this.label=void 0,this.referrerpolicy=void 0,this.rel=void 0,this.submenuTriggerFor=void 0,this.target=void 0,this.toggleChecked=!1,this.variant="default"}watchDisabledHandler(){(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el)}componentWillLoad(){(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_1__.e)(this.submenuTriggerFor)&&"default"!==this.variant&&(this.variant="default"),(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el)}componentDidLoad(){(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_1__.a)([{prop:this.label,propName:"label"}],"Menu Item")}handleHostClick(e){this.disabled&&e.stopImmediatePropagation()}render(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{disabled:this.disabled}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("li",{role:"toggle"===this.variant?"menuitemcheckbox":"menuitem","aria-disabled":`${this.disabled}`,"aria-checked":"toggle"===this.variant?this.toggleChecked?"true":"false":void 0},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{fullWidth:!0,variant:"tertiary",onClick:this.handleClick,href:(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_1__.e)(this.href),hreflang:(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_1__.e)(this.hreflang),target:(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_1__.e)(this.target),rel:(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_1__.e)(this.rel),referrerpolicy:void 0!==this.referrerpolicy?this.referrerpolicy:null,"aria-disabled":`${this.disabled}`,"aria-label":this.getMenuItemAriaLabel(),"aria-haspopup":!(!(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_1__.e)(this.submenuTriggerFor)&&!this.el.classList.contains("ic-popover-submenu-back-button"))&&"menu"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"focus-border"},(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"icon")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"icon"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"icon"})),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)((()=>(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"menu-item-info"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"menu-labels"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{class:"menu-item-label"},this.label),this.keyboardShortcut&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"caption",class:"shortcut"},this.keyboardShortcut)),this.description&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{class:"menu-item-description",variant:"caption"},this.description))),null),"toggle"===this.variant&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:{"check-icon":!0,hide:!this.toggleChecked},"aria-hidden":"true",innerHTML:_check_icon_4a9f8371_js__WEBPACK_IMPORTED_MODULE_3__.C}),(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_1__.e)(this.submenuTriggerFor)&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:{"submenu-icon":!0},"aria-hidden":"true",innerHTML:_chevron_icon_589e3b46_js__WEBPACK_IMPORTED_MODULE_4__.C})))))}static get delegatesFocus(){return!0}get el(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{disabled:["watchDisabledHandler"]}}};MenuItem.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}li{list-style:none;padding:0}:host ::part(button){color:var(--ic-color-primary-text);padding:calc(var(--ic-space-xxxs) / 2);display:flex;align-items:flex-start;gap:var(--ic-space-xs);border-radius:0;min-height:2.5rem;height:auto}.focus-border{display:flex;align-items:flex-start;gap:var(--ic-space-xs);border-radius:var(--ic-border-radius);margin:calc(var(--ic-space-xxxs) / 2);padding:var(--ic-space-xxs);border:var(--ic-space-xxxs) dashed transparent;--icon-height:auto}:host(.disabled) ::part(button){color:var(--ic-architectural-200) !important;pointer-events:none}:host(.disabled) .menu-item-label,:host(.disabled) .shortcut,:host(.disabled) .menu-item-description{color:var(--ic-architectural-200) !important}:host([variant="destructive"]) ::part(button){color:var(--ic-action-destructive)}:host ::part(button):hover{background-color:var(--ic-action-dark-bg-hover)}:host ::part(button):focus-visible,:host ::part(button):focus{color:var(--ic-color-white-text);background-color:var(--ic-focus-blue);box-shadow:none}:host(.disabled) ::part(button):focus-visible,:host(.disabled) ::part(button):focus{color:var(--ic-theme-lighten-40) !important}:host([variant="destructive"]) ::part(button):focus-visible,:host([variant="destructive"]) ::part(button):focus{background-color:var(--ic-action-destructive)}ic-button:focus-within .menu-item-label,ic-button:focus-within .shortcut,ic-button:focus-within .menu-item-description{color:var(--ic-color-white-text)}:host(.disabled) ic-button:focus-within .focus-border{border-color:var(--ic-architectural-white)}:host(.disabled) ic-button:focus-within .menu-item-label,:host(.disabled) ic-button:focus-within .shortcut,:host(.disabled) ic-button:focus-within .menu-item-description{color:var(--ic-theme-lighten-40) !important}:host ::part(button):active{background-color:var(--ic-action-dark-bg-active);color:var(--ic-color-primary-text) !important}:host([variant="destructive"]) ::part(button):active{background-color:var(--ic-action-dark-bg-active);color:var(--ic-action-destructive) !important}.menu-item-info{display:flex;flex-direction:column;flex:1;align-items:baseline;white-space:pre-line;text-align:left}.menu-labels{display:flex;align-items:baseline;gap:var(--ic-space-xs)}.menu-item-description{color:var(--ic-color-secondary-text)}.shortcut{color:var(--ic-color-tertiary-text);display:flex;flex:min-content}:host([variant="destructive"]) .menu-item-label{text-transform:uppercase;font-weight:600;letter-spacing:0.025em}ic-button:active .menu-item-label{color:var(--ic-color-primary-text)}ic-button:active .menu-item-description{color:var(--ic-color-secondary-text)}ic-button:active .shortcut{color:var(--ic-color-tertiary-text)}:host([variant="destructive"]) ic-button:active .menu-item-label{color:var(--ic-action-destructive) !important}.icon,.check-icon,.submenu-icon,.icon ::slotted(svg),.check-icon svg,.submenu-icon svg{width:var(--ic-space-lg);height:var(--ic-space-lg)}.check-icon.hide{visibility:hidden}@media (forced-colors: active){:host ::part(button){border:canvas}:host ::part(button):focus-visible{outline:var(--ic-space-xxxs) solid transparent}.focus-border{border-color:canvas}:host(.disabled) ic-button:focus-within .focus-border{border-color:GrayText}:host(.disabled) .menu-item-info,:host(.disabled) .menu-item-label,:host(.disabled) .shortcut,:host(.disabled) .menu-item-description,:host(.disabled) ic-button:focus-within .menu-item-info,:host(.disabled) ic-button:focus-within .menu-item-label,:host(.disabled) ic-button:focus-within .shortcut,:host(.disabled) ic-button:focus-within .menu-item-description{color:GrayText !important}:host(.disabled) ::part(button):focus-visible,:host(.disabled) ::part(button):focus{outline-color:GrayText !important}}'}}]);