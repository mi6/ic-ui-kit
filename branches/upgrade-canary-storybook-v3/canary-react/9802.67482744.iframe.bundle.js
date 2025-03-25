"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[9802],{"../canary-web-components/dist/esm/ic-radio-option.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_radio_option:()=>RadioOption});var _index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../canary-web-components/dist/esm/index-163fe708.js"),_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../canary-web-components/dist/esm/helpers-bbab69a2.js");const RadioOption=class{constructor(hostRef){(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icCheck=(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icCheck",7),this.icSelectedChange=(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icSelectedChange",7),this.defaultRadioValue="",this.hasAdditionalField=!1,this.skipFocus=!1,this.additionalFieldDisplay="static",this.disabled=!1,this.dynamicText="This selection requires additional answers",this.theme="inherit",this.selected=!1,this.initiallySelected=this.selected,this.handleClick=event=>{var _a;const clickedAdditionalField=event.target.matches(".dynamic-container:not(ic-radio-option, .checkmark), .dynamic-container *:not(ic-radio-option, .checkmark)");this.disabled||clickedAdditionalField&&event.target!==this.radioElement||(event.stopPropagation(),!1===this.skipFocus&&this.radioElement.focus(),this.skipFocus=!1,this.hasAdditionalField&&(this.value=(null===(_a=this.getAdditionalField())||void 0===_a?void 0:_a.value)||this.defaultRadioValue),this.icCheck.emit({value:this.value}))},this.handleKeyDown=event=>{this.getAdditionalField()==document.activeElement&&["IC-DATE-INPUT","IC-DATE-PICKER"].includes(this.getAdditionalField().nodeName)&&event.stopPropagation()},this.handleFormReset=()=>{this.skipFocus=!0,this.selected=this.initiallySelected}}watchDisabledHandler(){(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el)}watchSelectedHandler(){this.icSelectedChange.emit()}handleCheck(ev){"static"===this.additionalFieldDisplay&&Array.from(this.el.querySelectorAll("ic-radio-option")).includes(ev.target)&&this.icCheck.emit({value:this.value})}disconnectedCallback(){(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.k)(this.el,this.handleFormReset)}componentWillLoad(){(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"additional-field")&&(this.hasAdditionalField=!0,this.getAdditionalField()),this.defaultRadioValue=this.value,(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.el,this.handleFormReset),(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el)}componentDidLoad(){(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.b)([{prop:this.value,propName:"value"}],"Radio Option")}componentWillRender(){const hasSlot=(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.s)(this.el,"additional-field");hasSlot&&!this.hasAdditionalField?(this.hasAdditionalField=!0,this.getAdditionalField()):!hasSlot&&this.hasAdditionalField&&(this.hasAdditionalField=!1)}componentDidRender(){if("static"===this.additionalFieldDisplay){const additionalField=this.getAdditionalField();!this.selected||this.disabled?null==additionalField||additionalField.setAttribute("disabled",""):null==additionalField||additionalField.removeAttribute("disabled")}}additionalFieldValueHandler(event){this.selected&&(this.value=event.detail.value||this.defaultRadioValue,this.icCheck.emit({value:this.value})),event.stopImmediatePropagation()}async setFocus(){var _a;null===(_a=this.radioElement)||void 0===_a||_a.focus()}async setTabIndex(value){this.radioElement.tabIndex=value}getAdditionalField(){const additionalField=this.el.querySelector('ic-text-field[slot="additional-field"]');return additionalField&&(additionalField.hiddenInput=!1),additionalField}render(){const{additionalFieldDisplay,disabled,dynamicText,form,groupLabel,handleClick,handleKeyDown,hasAdditionalField,label,name,selected,value,theme}=this,id=`ic-radio-option-${(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.d)(label)||value}-${groupLabel}`;return(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"6f0467af7978fe30cba0aa8d6930fec048d8d871",onClick:handleClick,onKeyDown:handleKeyDown,class:{"ic-radio-option-disabled":disabled,[`ic-theme-${theme}`]:"inherit"!==theme}},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"ec0fc12fb38ad3f2ec950568be665f42945b2284",class:{container:!0,disabled}},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"b0f047ffb074c8f26ee14c4174e338ddf72bf579"},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{key:"a40e4c99a711c06388c45770eea739190ab4893b",tabindex:selected?"0":"-1",type:"radio",name,id,value,disabled:!!disabled||null,checked:selected,ref:el=>this.radioElement=el,form}),(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"74ce30acfae3f0c703df0b333628ac6a754ed473",class:"checkmark"})),(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{key:"507d1e909a977e3ed77ee3a7313cbdf84da08b34",class:"radio-label",variant:"body"},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{key:"7a4a77a5ea40d469b7a4a6e9d0244e2f79e0902d",htmlFor:id},label))),hasAdditionalField&&(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"d9abf440c467246c5fab13895b4bc73665a1002b",class:{"dynamic-container":!0,hidden:"dynamic"===additionalFieldDisplay&&!selected}},"dynamic"===additionalFieldDisplay&&(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"85fba5bf21f882a184f5024afb0cf040d2f915b7",class:"branch-corner"}),(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"43e01dae223d6bae87887f55469ca45f74eddf16"},"dynamic"===additionalFieldDisplay&&(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{key:"5622a6993f9f744e81bd6f40f66e090fc64d3b43",variant:"caption"},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("p",{key:"fa0c22de4eb3bf4fa8014a1f4d107c29f5d74b18",class:"dynamic-text"},dynamicText)),(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"e1bd5abca8b028ca816140ecf12886ab9377df1e",class:{"additional-field-wrapper":"static"===additionalFieldDisplay}},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"a75dd733c10a155859b9e604c9e996bfb920d1af",name:"additional-field"})))))}get el(){return(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{disabled:["watchDisabledHandler"],selected:["watchSelectedHandler"]}}};RadioOption.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}ic-radio-option{display:flex;flex-direction:column;width:-moz-fit-content;width:fit-content}.additional-field-wrapper [slot="additional-field"]{margin-top:calc(var(--ic-space-sm) / 2);margin-left:var(--ic-space-xl)}ic-radio-option.ic-radio-option-disabled,ic-radio-option.ic-radio-option-disabled .radio-label{--ic-typography-color:var(--ic-radio-button-text-option-disabled)}.container input:focus+span.checkmark,.container:hover input:focus+span.checkmark,.container:active input:focus+span.checkmark,:host(:focus) .container input:checked+span.checkmark{box-shadow:var(--ic-border-focus)}.container{display:grid;grid-template-columns:min-content auto;position:relative;cursor:pointer;align-items:center;margin:var(--ic-space-xxs) 0 var(--ic-space-xxs) var(--ic-space-xxs)}.container.disabled,.container.disabled input:disabled{cursor:default}.container input{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:inline-block;position:absolute;cursor:pointer;height:var(--ic-space-lg);width:var(--ic-space-lg);border-radius:50%;border:none}.checkmark{display:block;position:relative;top:0;left:0;height:var(--ic-space-lg);width:var(--ic-space-lg);background-color:var(--ic-radio-button-background-default);border:var(--ic-space-1px) solid var(--ic-radio-button-border-default);border-radius:50%;transition:var(--ic-easing-transition-fast);box-sizing:border-box}.container input:checked~.checkmark::after{display:inline-block}.container:hover input~.checkmark{box-shadow:0 0 0 0.25rem var(--ic-radio-button-active-hover);border:var(--ic-border-width) solid var(--ic-radio-button-default-hover)}.container:hover input:checked~.checkmark{box-shadow:0 0 0 0.25rem var(--ic-radio-button-active-hover);border:0.125rem solid var(--ic-radio-button-default-hover)}.container:hover:not(.disabled) input:checked~.checkmark::after{background-color:var(--ic-radio-button-default-hover)}.container:active input~.checkmark{box-shadow:0 0 0 0.25rem var(--ic-radio-button-active-pressed);border:var(--ic-border-width) solid var(--ic-radio-button-default-pressed)}.container:active input:checked~.checkmark{border:0.125rem solid var(--ic-radio-button-default-pressed);box-shadow:0 0 0 0.25rem var(--ic-radio-button-active-pressed)}.container:active input:checked~.checkmark::after{background-color:var(--ic-radio-button-default-pressed)}.container input:checked~.checkmark{border:0.125rem solid var(--ic-radio-button-default-active)}.container input:checked:disabled~.checkmark{border:0.125rem solid var(--ic-radio-button-border-disabled)}.container input:disabled~.checkmark{border:var(--ic-border-width) dashed var(--ic-radio-button-border-disabled)}.container input:disabled~.checkmark::after{background:var(--ic-radio-button-disabled)}.container:hover input:disabled~.checkmark{box-shadow:none;border:0.125rem solid none}.container:active input:disabled~.checkmark::after{background-color:var(--ic-radio-button-disabled)}.container .checkmark::after{content:"";position:absolute;display:none;top:calc(50% - var(--ic-space-xs));left:calc(50% - var(--ic-space-xs));width:var(--ic-space-md);height:var(--ic-space-md);border-radius:50%;background:var(--ic-radio-button-default-active)}.radio-label{margin-left:var(--ic-space-md);--ic-typography-color:var(--ic-radio-button-text-option)}.additional-field-wrapper{margin-left:var(--ic-space-xs)}.branch-corner{color:var(--ic-radio-button-required-bar);height:var(--ic-space-md);width:var(--ic-space-xl);border-radius:0 0 0 0.188rem;border-bottom:0.125rem solid var(--ic-radio-button-required-bar);border-left:0.125rem solid var(--ic-radio-button-required-bar);margin-left:calc(-1 * var(--ic-space-1px))}.dynamic-container{display:flex;position:relative;margin:var(--ic-space-xxxs) 0 var(--ic-space-xxs) var(--ic-space-md);gap:var(--ic-space-xs)}.dynamic-container.hidden{display:none}.dynamic-text{color:var(--ic-radio-button-required-text);--ic-typography-color:var(--ic-radio-button-required-text);margin-top:calc(var(--ic-space-sm) / 2);margin-bottom:var(--ic-space-xs);border-radius:2%}@media (max-width: 576px){ic-text-field{--input-width:100%}}@media (forced-colors: active){.container input:checked~.checkmark,.container:active input:checked~.checkmark{border-color:Highlight}.container input:checked~.checkmark::after,.container:active input:checked~.checkmark::after{background-color:Highlight}.container input:disabled~.checkmark,.container input:checked:disabled~.checkmark{border-color:GrayText}.container input:disabled~.checkmark::after,.container:active input:disabled~.checkmark::after{background-color:GrayText}}input[type="radio"]:dir(rtl){right:0}.radio-label:dir(rtl){padding-right:var(--ic-space-sm);padding-left:0}.branch-corner:dir(rtl){border-radius:0 0 0.188rem 0;border-right:0.125rem solid var(--ic-action-default);border-left:none}.dynamic-container:dir(rtl){margin:var(--ic-space-xxxs) var(--ic-space-sm) var(--ic-space-xxs) 0}'}}]);