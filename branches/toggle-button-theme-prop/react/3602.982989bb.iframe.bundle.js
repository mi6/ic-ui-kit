"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[3602],{"../web-components/dist/esm/ic-toggle-button.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_toggle_button:()=>ToggleButton});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_e8797e8d_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-e8797e8d.js");const ToggleButton=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icToggleChecked=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icToggleChecked",7),this.handleFocus=ev=>{ev.stopImmediatePropagation()},this.handleClick=()=>{!this.loading&&!this.disabled&&this.icToggleChecked.emit({checked:this.checked})},this.accessibleLabel=void 0,this.checked=!1,this.disabled=!1,this.fullWidth=!1,this.iconPlacement=void 0,this.label=void 0,this.loading=!1,this.monochrome=!1,this.size="medium",this.theme="inherit",this.variant="default"}componentWillLoad(){(0,_helpers_e8797e8d_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el);const parentIconPlacement=this.el.parentElement.iconPlacement;this.iconPosition=this.iconPlacement||parentIconPlacement||"left"}componentDidLoad(){(0,_helpers_e8797e8d_js__WEBPACK_IMPORTED_MODULE_1__.a)([{prop:"icon"===this.variant?this.accessibleLabel:this.label,propName:"icon"===this.variant?"accessible-label":"label"}],"Toggle button")}handleHostClick(e){this.disabled?e.stopImmediatePropagation():this.loading||(this.checked=!this.checked)}render(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{"ic-toggle-button-disabled":this.disabled,"ic-toggle-button-checked":this.checked,"ic-toggle-button-icon":"icon"===this.variant,[`ic-toggle-button-${this.size}`]:!0,"ic-toggle-button-loading":this.loading,"ic-toggle-button-monochrome":this.monochrome,[`ic-theme-${this.theme}`]:"inherit"!==this.theme},onFocus:this.handleFocus},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{"aria-pressed":this.checked.toString(),variant:"icon"===this.variant?"icon":"secondary",onClick:this.handleClick,title:this.accessibleLabel,"aria-label":`${this.accessibleLabel?this.accessibleLabel:this.label}, ${this.checked?"ticked":"unticked"}`,disabled:this.disabled,size:this.size,fullWidth:this.fullWidth,loading:this.loading,"aria-disabled":`${this.disabled}`},"icon"!==this.variant&&this.label,(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null),(0,_helpers_e8797e8d_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"icon")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"icon",slot:`${this.iconPosition}-icon`}),(0,_helpers_e8797e8d_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"badge")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"badge",slot:"badge"})))}static get delegatesFocus(){return!0}get el(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};ToggleButton.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{--button-border:var(--ic-toggle-button-unselected-border);--toggle-button-text-colour:var(--ic-toggle-button-unselected-text);--button-border-hover:var(--ic-toggle-button-unselected-border-hover);--toggle-button-text-colour-hover:var(\n    --ic-toggle-button-unselected-text-hover\n  );--button-border-active:var(--ic-toggle-button-unselected-border-pressed);--toggle-button-text-colour-active:var(\n    --ic-toggle-button-unselected-text-pressed\n  )}:host(.ic-toggle-button-checked){--button-border:var(--ic-toggle-button-selected-border);--toggle-button-text-colour:var(--ic-toggle-button-selected-text);--button-border-hover:var(--ic-toggle-button-selected-border-hover);--toggle-button-text-colour-hover:var(--ic-toggle-button-selected-text);--button-border-active:var(--ic-toggle-button-selected-border-pressed);--toggle-button-text-colour-active:var(--ic-toggle-button-selected-text)}:host(.ic-toggle-button-monochrome){--button-border:var(--ic-toggle-button-unselected-border-monochrome);--toggle-button-text-colour:var(\n    --ic-toggle-button-unselected-text-monochrome\n  );--button-border-hover:var(\n    --ic-toggle-button-unselected-border-hover-monochrome\n  );--toggle-button-text-colour-hover:var(\n    --ic-toggle-button-unselected-text-monochrome\n  );--button-border-active:var(\n    --ic-toggle-button-unselected-border-pressed-monochrome\n  );--toggle-button-text-colour-active:var(\n    --ic-toggle-button-unselected-text-monochrome\n  )}:host(.ic-toggle-button-monochrome.ic-toggle-button-checked){--button-border:var(--ic-toggle-button-selected-border-monochrome);--toggle-button-text-colour:var(--ic-toggle-button-selected-text-monochrome);--button-border-hover:var(\n    --ic-toggle-button-selected-border-hover-monochrome\n  );--toggle-button-text-colour-hover:var(\n    --ic-toggle-button-selected-text-monochrome\n  );--button-border-active:var(\n    --ic-toggle-button-selected-border-pressed-monochrome\n  );--toggle-button-text-colour-active:var(\n    --ic-toggle-button-selected-text-monochrome\n  )}:host(.ic-toggle-button-disabled){--button-border:var(--ic-toggle-button-unselected-border-disabled);--toggle-button-text-colour:var(--ic-toggle-button-unselected-text-disabled)}:host(.ic-toggle-button-disabled.ic-toggle-button-monochrome){--button-border:var(\n    --ic-toggle-button-unselected-border-disabled-monochrome\n  );--toggle-button-text-colour:var(\n    --ic-toggle-button-unselected-text-disabled-monochrome\n  )}:host(.ic-toggle-button-disabled.ic-toggle-button-checked){--button-border:var(--ic-toggle-button-selected-border-disabled);--toggle-button-text-colour:var(--ic-toggle-button-selected-text-disabled)}:host(.ic-toggle-button-disabled.ic-toggle-button-checked.ic-toggle-button-monochrome){--button-border:var(--ic-toggle-button-selected-border-disabled-monochrome);--toggle-button-text-colour:var(\n    --ic-toggle-button-selected-text-disabled-monochrome\n  )}:host(.expand-toggle-group-child) ::part(button){width:100%;min-height:inherit;white-space:inherit;height:inherit}:host ic-button{--icon-width:var(--ic-space-lg);--icon-height:var(--ic-space-lg)}:host(.expand-toggle-group-child) ic-button{min-width:100%;min-height:100%;white-space:normal;height:100%}:host(.expand-toggle-group-child) ::part(button):focus,:host(.expand-toggle-group-child.ic-toggle-button-checked) ::part(button):focus{box-shadow:inset 0 0 0 var(--ic-space-xxxs) var(--ic-action-default),\n    var(--ic-border-focus)}:host(.expand-toggle-group-child.ic-toggle-button-light) ::part(button):focus,:host(.expand-toggle-group-child.ic-toggle-button-dark) ::part(button):focus{box-shadow:inset 0 0 0 var(--ic-space-xxxs) var(--ic-action-dark),\n    var(--ic-border-focus)}:host(:focus){z-index:1}:host ::part(button){border:var(\n    --toggle-button-border,\n    var(--ic-border-width) solid var(--button-border)\n  );color:var(--toggle-button-text-colour)}:host ::part(button):hover{border:var(\n    --toggle-button-border,\n    var(--ic-border-width) solid var(--button-border-hover)\n  );color:var(--toggle-button-text-colour-hover)}:host ::part(button):active{border:var(\n    --toggle-button-border,\n    var(--ic-border-width) solid var(--button-border-active)\n  );color:var(--toggle-button-text-colour-active)}:host(.ic-toggle-button-disabled) ::part(button){border:var(\n    --toggle-button-border,\n    var(--ic-space-1px) dashed var(--button-border)\n  )}:host(.ic-toggle-button-checked) ::part(button){background-color:var(--ic-toggle-button-selected-background);box-shadow:inset 0 0 0 var(--ic-space-xxxs)\n    var(--ic-toggle-button-selected-text)}:host(.ic-toggle-button-checked) ::part(button):focus{box-shadow:inset 0 0 0 var(--ic-space-xxxs) var(--ic-architectural-white),\n    var(--ic-border-focus)}:host ::part(button):hover{background-color:var(--ic-toggle-button-unselected-background-hover)}:host ::part(button):active{background-color:var(--ic-toggle-button-unselected-background-pressed)}:host(.ic-toggle-button-checked) ::part(button):hover{background-color:var(--ic-toggle-button-selected-background-hover)}:host(.ic-toggle-button-checked) ::part(button):active,:host(.ic-toggle-button-icon.ic-toggle-button-checked) ::part(button):active{background-color:var(--ic-toggle-button-selected-background-pressed)}:host(.ic-toggle-button-monochrome) ::part(button):hover{background-color:var(\n    --ic-toggle-button-unselected-background-hover-monochrome\n  )}:host(.ic-toggle-button-monochrome) ::part(button):active{background-color:var(\n    --ic-toggle-button-unselected-background-pressed-monochrome\n  )}:host(.ic-toggle-button-monochrome.ic-toggle-button-checked) ::part(button){background-color:var(--ic-toggle-button-selected-background-monochrome)}:host(.ic-toggle-button-monochrome.ic-toggle-button-checked) ::part(button):hover{background-color:var(\n    --ic-toggle-button-selected-background-hover-monochrome\n  )}:host(.ic-toggle-button-monochrome.ic-toggle-button-checked) ::part(button):active,:host(.ic-toggle-button-icon.ic-toggle-button-monochrome.ic-toggle-button-checked) ::part(button):active{background-color:var(\n    --ic-toggle-button-selected-background-pressed-monochrome\n  )}:host(.ic-toggle-button-monochrome.ic-toggle-button-checked) ::part(button):focus{box-shadow:inset 0 0 0 var(--ic-space-xxxs)\n      var(--ic-toggle-button-selected-text),\n    var(--ic-border-focus)}:host(.ic-toggle-button-disabled.ic-toggle-button-checked) ::part(button),:host(.ic-toggle-button-icon.ic-toggle-button-disabled.ic-toggle-button-checked) ::part(button){background-color:transparent}:host(.ic-toggle-button-disabled.ic-toggle-button-checked) ::part(button),:host(.ic-toggle-button-icon.ic-toggle-button-disabled.ic-toggle-button-checked) ::part(button)::before{background-image:radial-gradient(\n    var(--ic-toggle-button-selected-background-disabled) 95%,\n    white 20%\n  );background-repeat:no-repeat}:host(.ic-toggle-button-disabled.ic-toggle-button-checked.ic-toggle-button-monochrome) ::part(button),:host(.ic-toggle-button-icon.ic-toggle-button-disabled.ic-toggle-button-checked.ic-toggle-button-monochrome) ::part(button)::before{background-image:radial-gradient(\n    var(--ic-toggle-button-selected-background-disabled-monochrome) 95%,\n    white 20%\n  );background-repeat:no-repeat}:host(.ic-toggle-button-icon) ::part(button){height:calc(var(--ic-space-xl) + var(--ic-space-xs));width:calc(var(--ic-space-xl) + var(--ic-space-xs))}:host(.ic-toggle-button-icon) ::part(button):active{background-color:var(--ic-action-default-bg-active)}:host(.ic-toggle-button-icon.ic-toggle-button-dark) ::part(button):active{background-color:var(--ic-action-dark-bg-pressed)}:host(.ic-toggle-button-icon.ic-toggle-button-light) ::part(button):active{background-color:var(--ic-action-light-bg-pressed)}:host(.ic-toggle-button-icon.ic-toggle-button-small) ::part(button){height:var(--ic-space-xl);width:var(--ic-space-xl)}:host(.ic-toggle-button-icon.ic-toggle-button-large) ::part(button){height:var(--ic-space-xxl);width:var(--ic-space-xxl)}:host(.ic-toggle-button-checked.ic-toggle-button-loading) ::part(button){background-color:var(--ic-toggle-button-selected-background-pressed)}:host(.ic-toggle-button-loading) ::part(button){background-color:var(--ic-toggle-button-unselected-background-pressed)}:host(.ic-toggle-button-checked.ic-toggle-button-loading) ::part(ic-loading-container){--inner-color:var(--ic-toggle-button-loading-bar)}:host(.ic-toggle-button-loading) ::part(ic-loading-container){--inner-color:var(--ic-toggle-button-selected-loading-bar)}:host(.ic-toggle-button-checked.ic-toggle-button-loading.ic-toggle-button-monochrome) ::part(button){background-color:var(\n    --ic-toggle-button-selected-background-pressed-monochrome\n  )}:host(.ic-toggle-button-loading.ic-toggle-button-monochrome) ::part(button){background-color:var(\n    --ic-toggle-button-unselected-background-pressed-monochrome\n  )}@media (forced-colors: active){:host(.ic-toggle-button-checked) ::part(button),:host(.ic-toggle-button-checked) ::part(button):hover{background-color:Highlight}:host(.ic-toggle-button-checked.ic-toggle-button-light) ::part(button),:host(.ic-toggle-button-checked.ic-toggle-button-light) ::part(button):hover{background-color:Highlight}:host(.ic-toggle-button-checked.ic-toggle-button-dark) ::part(button),:host(.ic-toggle-button-checked.ic-toggle-button-dark) ::part(button):hover{background-color:Highlight}:host(.ic-toggle-button-checked.ic-toggle-button-disabled) ::part(button){background-color:GrayText}}'}}]);