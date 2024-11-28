"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[9849],{"./dist/esm/ic-checkbox.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_checkbox:()=>Checkbox});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-d1d2c456.js"),_helpers_b448e545_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/helpers-b448e545.js");const Checkbox=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icCheck=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icCheck",7),this.handleClick=()=>{this.checked=!this.checked,this.displayIndeterminate=!this.nativeIndeterminateBehaviour&&(this.indeterminate&&this.checked),this.icCheck.emit()},this.handleFormReset=()=>{this.checked=this.initiallyChecked},this.additionalFieldDisplay="static",this.checked=!1,this.initiallyChecked=this.checked,this.disabled=!1,this.dynamicText="This selection requires additional answers",this.form=void 0,this.groupLabel=void 0,this.indeterminate=!1,this.displayIndeterminate=this.indeterminate,this.label=void 0,this.name=void 0,this.nativeIndeterminateBehaviour=!1,this.size=void 0,this.theme="inherit",this.value=void 0,this.hideLabel=!1}watchIndeterminateHandler(){this.displayIndeterminate=this.nativeIndeterminateBehaviour?this.indeterminate:this.indeterminate&&this.checked}componentWillLoad(){(0,_helpers_b448e545_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el),(0,_helpers_b448e545_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.el,this.handleFormReset);const checkboxGroup=this.el.parentElement;checkboxGroup&&(this.name||(this.name=checkboxGroup.name),this.groupLabel=checkboxGroup.label)}componentDidLoad(){(0,_helpers_b448e545_js__WEBPACK_IMPORTED_MODULE_1__.a)([{prop:this.label,propName:"label"},{prop:this.value,propName:"value"}],"Checkbox")}componentDidRender(){if("static"===this.additionalFieldDisplay){const textfield=this.el.querySelector("ic-text-field");this.checked?null==textfield||textfield.removeAttribute("disabled"):null==textfield||textfield.setAttribute("disabled","")}else this.additionalFieldContainer&&(this.additionalFieldContainer.style.display=this.checked?"flex":"none")}disconnectedCallback(){(0,_helpers_b448e545_js__WEBPACK_IMPORTED_MODULE_1__.k)(this.el,this.handleFormReset)}async setFocus(){var _a;null===(_a=this.el.shadowRoot.querySelector(".checkbox"))||void 0===_a||_a.focus()}render(){const{additionalFieldDisplay,checked,disabled,dynamicText,el,form,displayIndeterminate,groupLabel,label,name,size,value,theme}=this,id=`ic-checkbox-${(0,_helpers_b448e545_js__WEBPACK_IMPORTED_MODULE_1__.d)(label)||value}-${groupLabel}`.replace(/ /g,"-"),parentElementSize=el.parentElement.size;return checked?(0,_helpers_b448e545_js__WEBPACK_IMPORTED_MODULE_1__.l)(!0,el,name,checked&&value,disabled):(0,_helpers_b448e545_js__WEBPACK_IMPORTED_MODULE_1__.m)(el),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{"ic-checkbox-disabled":disabled,[`ic-checkbox-${size||parentElementSize}`]:!0,[`ic-theme-${theme}`]:"inherit"!==theme}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"container"},displayIndeterminate&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"indeterminate-symbol"}),!displayIndeterminate&&checked&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{class:"checkmark",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("title",null,"checkmark icon"),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{d:"M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"})),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{role:"checkbox",class:{checkbox:!0,checked,indeterminate:displayIndeterminate},type:"checkbox",name,id,value,disabled:!!disabled||null,checked,indeterminate:displayIndeterminate,onClick:this.handleClick,form,"aria-label":this.hideLabel?this.label:void 0}),!this.hideLabel&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{class:"checkbox-label",variant:"body"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{htmlFor:id},label))),(0,_helpers_b448e545_js__WEBPACK_IMPORTED_MODULE_1__.i)(el,"additional-field")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"dynamic-container",ref:el=>this.additionalFieldContainer=el},"dynamic"===additionalFieldDisplay&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"branch-corner"}),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,"dynamic"===additionalFieldDisplay&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"caption"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("p",{class:"dynamic-text","aria-live":"polite"},dynamicText)),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"additional-field-wrapper":"static"===additionalFieldDisplay}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"additional-field"})))))}static get delegatesFocus(){return!0}get el(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{indeterminate:["watchIndeterminateHandler"]}}};Checkbox.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host(.ic-checkbox-disabled){pointer-events:none}.container{display:flex;width:-moz-fit-content;width:fit-content;padding:var(--ic-space-xxs) 0 var(--ic-space-xxs) var(--ic-space-xxs);margin-bottom:var(--ic-space-xxs);align-items:center}:host(.ic-checkbox-small) .container{margin-bottom:var(--ic-space-xxxs)}.checkbox{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:block;position:relative;top:0;left:0;height:var(--ic-space-lg);width:var(--ic-space-lg);background-color:var(--ic-checkbox-background-unselected);border:var(--ic-border-width) solid var(--ic-checkbox-border-unselected);border-radius:var(--ic-border-radius);outline:none;cursor:pointer;transition:var(--ic-easing-transition-fast);flex-shrink:0}:host .container svg{width:var(--ic-space-lg);height:var(--ic-space-lg)}:host(.ic-checkbox-small) .checkbox,:host(.ic-checkbox-small) .container svg{width:var(--ic-space-md);height:var(--ic-space-md)}:host(.ic-checkbox-large) .checkbox,:host(.ic-checkbox-large) .container svg{width:var(--ic-space-xl);height:var(--ic-space-xl)}.checkbox:checked{background-color:var(--ic-checkbox-background-selected);border:var(--ic-border-width) solid var(--ic-checkbox-background-selected);transition:var(--ic-easing-transition-slow)}.checkbox:checked:disabled{background-color:var(--ic-checkbox-background-selected-disabled);border:var(--ic-border-width) solid\n    var(--ic-checkbox-background-selected-disabled)}.checkbox:indeterminate,.checkbox.indeterminate:checked{background-color:var(--ic-checkbox-background-indeterminate);border:0.125rem solid var(--ic-checkbox-background-indeterminate)}.checkbox:indeterminate:disabled,.checkbox.indeterminate:checked:disabled{background-color:var(--ic-checkbox-background-indeterminate-disabled);border:0.125rem solid var(--ic-checkbox-background-indeterminate-disabled)}.checkbox:checked:hover{background-color:var(--ic-checkbox-background-selected-hover)}.checkbox:indeterminate:hover,.checkbox.indeterminate:checked:hover{background-color:var(--ic-checkbox-background-indeterminate-hover);border:0.125rem solid var(--ic-checkbox-background-indeterminate-hover)}.checkbox:checked:active{background-color:var(--ic-checkbox-background-selected-pressed)}.checkbox:indeterminate:active,.checkbox.indeterminate:checked:active{background-color:var(--ic-checkbox-background-indeterminate-pressed);border:0.125rem solid var(--ic-checkbox-background-indeterminate-pressed)}.checkbox:hover{box-shadow:0 0 0 0.25rem var(--ic-checkbox-action-background-hover);border:var(--ic-border-width) solid\n    var(--ic-checkbox-border-unselected-hover)}.checkbox:active{box-shadow:0 0 0 0.25rem var(--ic-checkbox-action-background-pressed);border:var(--ic-border-width) solid\n    var(--ic-checkbox-border-unselected-pressed)}.checkbox:focus{box-shadow:var(--ic-border-focus)}.checkbox:disabled{border:var(--ic-border-width) dashed\n    var(--ic-checkbox-border-unselected-disabled)}.checkbox-label{padding-left:var(--ic-space-sm);color:var(--ic-checkbox-text);--ic-typography-color:var(--ic-checkbox-text)}:host(.ic-checkbox-disabled) .checkbox-label{color:var(--ic-checkbox-text-disabled);--ic-typography-color:var(--ic-checkbox-text-disabled)}.checkbox-label:hover{cursor:pointer}.checkmark{position:relative;right:calc(-1 * var(--ic-space-lg));margin-left:calc(-1 * var(--ic-space-lg));fill:var(--ic-checkbox-icon-pressed);z-index:1;background-color:transparent;pointer-events:none;flex-shrink:0}:host(.ic-checkbox-small) .checkmark{margin-left:calc(-1 * var(--ic-space-md));right:calc(-1 * var(--ic-space-md))}:host(.ic-checkbox-large) .checkmark{margin-left:calc(-1 * var(--ic-space-xl));right:calc(-1 * var(--ic-space-xl))}.indeterminate-symbol{position:relative;width:0.875rem;height:var(--ic-space-xxxs);right:-1.188rem;margin-left:-0.875rem;z-index:1;background-color:var(--ic-checkbox-icon-indeterminate);pointer-events:none;flex-shrink:0}:host(.ic-checkbox-small) .indeterminate-symbol{width:0.6rem;right:-0.8rem;margin-left:-0.6rem}:host(.ic-checkbox-large) .indeterminate-symbol{width:1.25rem;right:-1.625rem;margin-left:-1.25rem}.additional-field-wrapper{margin-left:calc(var(--ic-space-md) + var(--ic-space-lg));margin-top:calc(var(--ic-space-sm) / 2)}.branch-corner{height:var(--ic-space-md);width:var(--ic-space-xl);border-radius:0 0 0 0.188rem;border-bottom:0.125rem solid var(--ic-checkbox-required-bar);border-left:0.125rem solid var(--ic-checkbox-required-bar)}.dynamic-container{display:flex;position:relative;margin:var(--ic-space-xxxs) 0 var(--ic-space-xxs) var(--ic-space-md);gap:var(--ic-space-xs)}.dynamic-text{color:var(--ic-checkbox-required-text);--ic-typography-color:var(--ic-checkbox-required-text);margin-top:calc(var(--ic-space-sm) / 2);margin-bottom:var(--ic-space-xs);border-radius:2%}@media (max-width: 576px){::slotted(ic-text-field){--input-width:100%}}@media (forced-colors: active){.checkbox{-webkit-appearance:revert;-moz-appearance:revert;appearance:revert;transition:none}.checkbox:checked{transition:none}.checkbox:focus-visible{outline:0.125rem solid highlight}.checkbox:disabled:not(:checked){-webkit-appearance:none;-moz-appearance:none;appearance:none;border-color:GrayText}.checkmark{fill:none}.indeterminate-symbol{display:none}}'}}]);