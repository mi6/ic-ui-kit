"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[6927],{"./dist/esm/ic-radio-option.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_radio_option:()=>RadioOption});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-d1d2c456.js"),_helpers_2624c32c_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/helpers-2624c32c.js");const RadioOption=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icCheck=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icCheck",7),this.icSelectedChange=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icSelectedChange",7),this.defaultRadioValue="",this.hasAdditionalField=!1,this.skipFocus=!1,this.handleClick=event=>{const clickedAdditionalField=event.target.matches(".dynamic-container, .dynamic-container *");this.disabled||clickedAdditionalField||(event.stopPropagation(),!1===this.skipFocus&&this.radioElement.focus(),this.skipFocus=!1,this.hasAdditionalField&&(this.value=this.getAdditionalField().value||this.defaultRadioValue),this.icCheck.emit({value:this.value}))},this.handleKeyDown=event=>{this.getAdditionalField()==document.activeElement&&["IC-DATE-INPUT","IC-DATE-PICKER"].includes(this.getAdditionalField().nodeName)&&event.stopPropagation()},this.handleFormReset=()=>{this.skipFocus=!0,this.selected=this.initiallySelected},this.additionalFieldDisplay="static",this.disabled=!1,this.dynamicText="This selection requires additional answers",this.form=void 0,this.groupLabel=void 0,this.label=void 0,this.name=void 0,this.theme="inherit",this.value=void 0,this.selected=!1,this.initiallySelected=this.selected}watchDisabledHandler(){(0,_helpers_2624c32c_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el)}watchSelectedHandler(){this.icSelectedChange.emit()}disconnectedCallback(){(0,_helpers_2624c32c_js__WEBPACK_IMPORTED_MODULE_1__.k)(this.el,this.handleFormReset)}componentWillLoad(){(0,_helpers_2624c32c_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"additional-field")&&(this.hasAdditionalField=!0,this.getAdditionalField()),this.defaultRadioValue=this.value,(0,_helpers_2624c32c_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.el,this.handleFormReset),(0,_helpers_2624c32c_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el)}componentDidLoad(){(0,_helpers_2624c32c_js__WEBPACK_IMPORTED_MODULE_1__.b)([{prop:this.value,propName:"value"}],"Radio Option")}componentWillRender(){const hasSlot=(0,_helpers_2624c32c_js__WEBPACK_IMPORTED_MODULE_1__.s)(this.el,"additional-field");hasSlot&&!this.hasAdditionalField?(this.hasAdditionalField=!0,this.getAdditionalField()):!hasSlot&&this.hasAdditionalField&&(this.hasAdditionalField=!1)}componentDidRender(){if("static"===this.additionalFieldDisplay){const additionalField=this.getAdditionalField();!this.selected||this.disabled?null==additionalField||additionalField.setAttribute("disabled",""):null==additionalField||additionalField.removeAttribute("disabled")}}additionalFieldValueHandler(event){this.selected&&(this.value=event.detail.value||this.defaultRadioValue,this.icCheck.emit({value:this.value})),event.stopImmediatePropagation()}async setFocus(){var _a;null===(_a=this.radioElement)||void 0===_a||_a.focus()}async setTabIndex(value){this.radioElement.tabIndex=value}getAdditionalField(){const additionalField=this.el.querySelector('[slot="additional-field"]');return additionalField&&(additionalField.hiddenInput=!1),additionalField}render(){const{additionalFieldDisplay,disabled,dynamicText,form,groupLabel,handleClick,handleKeyDown,hasAdditionalField,label,name,selected,value,theme}=this,id=`ic-radio-option-${(0,_helpers_2624c32c_js__WEBPACK_IMPORTED_MODULE_1__.d)(label)||value}-${groupLabel}`;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{onClick:handleClick,onKeyDown:handleKeyDown,class:{"ic-radio-option-disabled":disabled,[`ic-theme-${theme}`]:"inherit"!==theme}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{container:!0,disabled}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{tabindex:selected?"0":"-1",type:"radio",name,id,value,disabled:!!disabled||null,checked:selected,ref:el=>this.radioElement=el,form}),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"checkmark"})),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{class:"radio-label",variant:"body"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{htmlFor:id},label))),hasAdditionalField&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"dynamic-container":!0,hidden:"dynamic"===additionalFieldDisplay&&!selected}},"dynamic"===additionalFieldDisplay&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"branch-corner"}),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,"dynamic"===additionalFieldDisplay&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"caption"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("p",{class:"dynamic-text"},dynamicText)),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"additional-field-wrapper":"static"===additionalFieldDisplay}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"additional-field"})))))}get el(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{disabled:["watchDisabledHandler"],selected:["watchSelectedHandler"]}}};RadioOption.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}ic-radio-option{display:flex;flex-direction:column;width:-moz-fit-content;width:fit-content}.additional-field-wrapper ic-text-field{margin-top:calc(var(--ic-space-sm) / 2);margin-left:var(--ic-space-xl)}ic-radio-option.ic-radio-option-disabled,ic-radio-option.ic-radio-option-disabled .radio-label{--ic-typography-color:var(--ic-radio-button-text-option-disabled)}.container input:focus+span.checkmark,.container:hover input:focus+span.checkmark,.container:active input:focus+span.checkmark,:host(:focus) .container input:checked+span.checkmark{box-shadow:var(--ic-border-focus)}.container{display:grid;grid-template-columns:min-content auto;position:relative;cursor:pointer;align-items:center;margin:var(--ic-space-xxs) 0 var(--ic-space-xxs) var(--ic-space-xxs)}.container.disabled,.container.disabled input:disabled{cursor:default}.container input{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:inline-block;position:absolute;cursor:pointer;height:var(--ic-space-lg);width:var(--ic-space-lg);border-radius:50%;border:none}.checkmark{display:block;position:relative;top:0;left:0;height:var(--ic-space-lg);width:var(--ic-space-lg);background-color:var(--ic-radio-button-background-default);border:var(--ic-space-1px) solid var(--ic-radio-button-border-default);border-radius:50%;transition:var(--ic-easing-transition-fast);box-sizing:border-box}.container input:checked~.checkmark::after{display:inline-block}.container:hover input~.checkmark{box-shadow:0 0 0 0.25rem var(--ic-radio-button-active-hover);border:var(--ic-border-width) solid var(--ic-radio-button-default-hover)}.container:hover input:checked~.checkmark{box-shadow:0 0 0 0.25rem var(--ic-radio-button-active-hover);border:0.125rem solid var(--ic-radio-button-default-hover)}.container:hover input:checked~.checkmark::after{background-color:var(--ic-radio-button-default-hover)}.container:active input~.checkmark{box-shadow:0 0 0 0.25rem var(--ic-radio-button-active-pressed);border:var(--ic-border-width) solid var(--ic-radio-button-default-pressed)}.container:active input:checked~.checkmark{border:0.125rem solid var(--ic-radio-button-default-pressed);box-shadow:0 0 0 0.25rem var(--ic-radio-button-active-pressed)}.container:active input:checked~.checkmark::after{background-color:var(--ic-radio-button-default-pressed)}.container input:checked~.checkmark{border:0.125rem solid var(--ic-radio-button-default-active)}.container input:checked:disabled~.checkmark{background-color:var(--ic-architectural-white);border:0.125rem solid var(--ic-radio-button-border-disabled)}.container input:disabled~.checkmark{border:var(--ic-border-width) dashed var(--ic-radio-button-border-disabled)}.container input:disabled~.checkmark::after{background:var(--ic-radio-button-disabled)}.container:hover input:disabled~.checkmark{background-color:var(--ic-architectural-white);box-shadow:none;border:0.125rem solid none}.container:active input:disabled~.checkmark::after{background-color:var(--ic-radio-button-disabled)}.container .checkmark::after{content:"";position:absolute;display:none;top:calc(50% - var(--ic-space-xs));left:calc(50% - var(--ic-space-xs));width:var(--ic-space-md);height:var(--ic-space-md);border-radius:50%;background:var(--ic-radio-button-default-active)}.radio-label{margin-left:var(--ic-space-md);--ic-typography-color:var(--ic-radio-button-text-option)}.additional-field-wrapper{margin-left:var(--ic-space-xs)}.branch-corner{color:var(--ic-radio-button-required-bar);height:var(--ic-space-md);width:var(--ic-space-xl);border-radius:0 0 0 0.188rem;border-bottom:0.125rem solid var(--ic-radio-button-required-bar);border-left:0.125rem solid var(--ic-radio-button-required-bar);margin-left:calc(-1 * var(--ic-space-1px))}.dynamic-container{display:flex;position:relative;margin:var(--ic-space-xxxs) 0 var(--ic-space-xxs) var(--ic-space-md);gap:var(--ic-space-xs)}.dynamic-container.hidden{display:none}.dynamic-text{color:var(--ic-radio-button-required-text);--ic-typography-color:var(--ic-radio-button-required-text);margin-top:calc(var(--ic-space-sm) / 2);margin-bottom:var(--ic-space-xs);border-radius:2%}@media (max-width: 576px){ic-text-field{--input-width:100%}}@media (forced-colors: active){.container input:checked~.checkmark,.container:active input:checked~.checkmark{border-color:Highlight}.container input:checked~.checkmark::after,.container:active input:checked~.checkmark::after{background-color:Highlight}.container input:disabled~.checkmark,.container input:checked:disabled~.checkmark{border-color:GrayText}.container input:disabled~.checkmark::after,.container:active input:disabled~.checkmark::after{background-color:GrayText}}'}}]);