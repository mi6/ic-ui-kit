"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[3602],{"../web-components/dist/esm/ic-toggle-button.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_toggle_button:()=>ToggleButton});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-c7b7c2d9.js");__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js");const ToggleButton=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icToggleChecked=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icToggleChecked",7),this.hostMutationObserver=null,this.hostMutationCallback=()=>{(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.f)(this)},this.handleFocus=ev=>{ev.stopImmediatePropagation()},this.handleClick=()=>{!this.loading&&!this.disabled&&this.icToggleChecked.emit({checked:this.toggleChecked})},this.accessibleLabel=void 0,this.appearance="default",this.disabled=!1,this.fullWidth=!1,this.iconPlacement=void 0,this.label=void 0,this.loading=!1,this.size="default",this.toggleChecked=!1,this.tooltipPlacement="bottom",this.variant="default"}watchDisabledHandler(){(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el)}componentWillLoad(){(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el);const parentIconPlacement=this.el.parentElement.iconPlacement;this.iconPosition=this.iconPlacement||parentIconPlacement}componentDidLoad(){(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_1__.a)([{prop:"icon"===this.variant?this.accessibleLabel:this.label,propName:"icon"===this.variant?"accessible-label":"label"}],"Toggle button"),"undefined"!=typeof MutationObserver&&(this.hostMutationObserver=new MutationObserver(this.hostMutationCallback),this.hostMutationObserver.observe(this.el,{childList:!0}))}disconnectedCallback(){null!==this.hostMutationObserver&&void 0!==this.hostMutationObserver&&this.hostMutationObserver.disconnect()}handleHostClick(e){this.disabled?e.stopImmediatePropagation():this.loading||(this.toggleChecked=!this.toggleChecked)}render(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{disabled:this.disabled,checked:this.toggleChecked,[`${this.appearance}`]:!0,icon:"icon"===this.variant,[`${this.size}`]:!0,loading:this.loading},onFocus:this.handleFocus},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{"aria-pressed":this.toggleChecked.toString(),variant:"icon"===this.variant?"icon":"secondary",onClick:this.handleClick,title:this.accessibleLabel,"aria-label":`${this.accessibleLabel?this.accessibleLabel:this.label}, ${this.toggleChecked?"ticked":"unticked"}`,disabled:this.disabled,appearance:this.appearance,size:this.size,fullWidth:this.fullWidth,loading:this.loading,"aria-disabled":`${this.disabled}`,tooltipPlacement:this.tooltipPlacement},"icon"!==this.variant&&this.label,(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null),(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"icon")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"icon",slot:""+(this.iconPosition?`${this.iconPosition}-icon`:"icon")}),(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"badge")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"badge",slot:"badge"})))}static get delegatesFocus(){return!0}get el(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{disabled:["watchDisabledHandler"]}}};ToggleButton.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{--button-border:var(\n    --toggle-button-border,\n    var(--ic-border-width) solid var(--ic-action-default)\n  )}:host(.dark){--button-border:var(\n    --toggle-button-border,\n    var(--ic-border-width) solid var(--ic-action-dark)\n  )}:host(.light){--button-border:var(\n    --toggle-button-border,\n    var(--ic-border-width) solid var(--ic-action-light)\n  )}:host(.disabled){--button-border:var(--toggle-button-border, var(--ic-border-disabled))}:host(.expand-toggle-group-child) ::part(button){width:100%;min-height:inherit;white-space:inherit;height:inherit}:host ic-button{--icon-width:var(--ic-space-lg);--icon-height:var(--ic-space-lg)}:host(.expand-toggle-group-child) ic-button{min-width:100%;min-height:100%;white-space:normal;height:100%}:host(.expand-toggle-group-child) ::part(button):focus,:host(.expand-toggle-group-child.checked) ::part(button):focus{box-shadow:inset 0 0 0 var(--ic-space-xxxs) var(--ic-action-default),\n    var(--ic-border-focus)}:host(.expand-toggle-group-child.light) ::part(button):focus,:host(.expand-toggle-group-child.dark) ::part(button):focus{box-shadow:inset 0 0 0 var(--ic-space-xxxs) var(--ic-action-dark),\n    var(--ic-border-focus)}:host(:focus){z-index:1}:host ::part(button){border:var(--button-border)}:host(.checked) ::part(button){background-color:var(--ic-action-default);color:var(--ic-architectural-white);box-shadow:inset 0 0 0 var(--ic-space-xxxs) var(--ic-architectural-white)}:host(.checked) ::part(button):focus{box-shadow:inset 0 0 0 var(--ic-space-xxxs) var(--ic-architectural-white),\n    var(--ic-border-focus)}:host(.checked) ::part(button):hover{background-color:var(--button-default-hover)}:host(.checked) ::part(button):active,:host(.icon.checked) ::part(button):active{background-color:var(--ic-action-default-active)}:host(.dark.checked) ::part(button){background-color:var(--ic-action-dark)}:host(.dark.checked) ::part(button):hover{background-color:var(--ic-action-dark-hover)}:host(.dark.checked) ::part(button):active,:host(.icon.dark.checked) ::part(button):active{background-color:var(--ic-action-dark-active)}:host(.light.checked) ::part(button){background-color:var(--ic-action-light);color:var(--ic-color-primary-text);box-shadow:inset 0 0 0 var(--ic-space-xxxs) var(--ic-architectural-black)}:host(.light.checked) ::part(button):hover{background-color:var(--ic-action-light-hover)}:host(.light.checked) ::part(button):active,:host(.icon.light.checked) ::part(button):active{background-color:var(--ic-action-light-active)}:host(.light.checked) ::part(button):focus{box-shadow:inset 0 0 0 var(--ic-space-xxxs) var(--ic-architectural-black),\n    var(--ic-border-focus)}:host(.disabled) ::part(button),:host(.icon.disabled) ::part(button){border:var(--button-border)}:host(.disabled.checked) ::part(button),:host(.icon.disabled.checked) ::part(button){background-color:transparent}:host(.disabled.checked) ::part(button),:host(.icon.disabled.checked) ::part(button)::before{background-image:radial-gradient(var(--ic-architectural-400) 95%, white 20%);background-repeat:no-repeat}:host(.icon) ::part(button){border:var(--button-border);height:calc(var(--ic-space-xl) + var(--ic-space-xs));width:calc(var(--ic-space-xl) + var(--ic-space-xs))}:host(.icon) ::part(button):active{background-color:var(--ic-action-default-bg-active)}:host(.icon.dark) ::part(button):active{background-color:var(--ic-action-dark-bg-active)}:host(.icon.light) ::part(button):active{background-color:var(--ic-action-light-bg-active)}:host(.icon.small) ::part(button){height:var(--ic-space-xl);width:var(--ic-space-xl)}:host(.icon.large) ::part(button){height:var(--ic-space-xxl);width:var(--ic-space-xxl)}:host(.checked.loading) ::part(button){background-color:var(--button-default-active)}:host(.loading) ::part(ic-loading-container){--inner-color:var(--ic-architectural-white)}:host(.checked.loading.light) ::part(button){background-color:var(--ic-action-light-active)}:host(.checked.loading.dark) ::part(button){background-color:var(--ic-action-dark-active)}@media (forced-colors: active){:host(.checked) ::part(button),:host(.checked) ::part(button):hover{background-color:Highlight}:host(.checked.light) ::part(button),:host(.checked.light) ::part(button):hover{background-color:Highlight}:host(.checked.dark) ::part(button),:host(.checked.dark) ::part(button):hover{background-color:Highlight}:host(.checked.disabled) ::part(button){background-color:GrayText}}'}}]);