"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[3246],{"../web-components/dist/esm/ic-checkbox-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_checkbox_group:()=>CheckboxGroup});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_78f627e1_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-78f627e1.js");const CheckboxGroup=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icChange=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icChange",7),this.checkboxSelector="ic-checkbox",this.disabled=!1,this.helperText="",this.hideLabel=!1,this.label=void 0,this.name=void 0,this.required=!1,this.size="medium",this.theme="inherit",this.validationStatus="",this.validationText=""}watchDisabledHandler(){(0,_helpers_78f627e1_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el)}labelNameHandler(newValue,oldValue,propName){Array.from(this.el.querySelectorAll(this.checkboxSelector)).forEach((checkbox=>{"label"===propName?checkbox.groupLabel=newValue:checkbox.name===oldValue&&(checkbox.name=newValue)}))}watchThemeHandler(newValue){Array.from(this.el.querySelectorAll(this.checkboxSelector)).forEach((checkbox=>{checkbox.theme=newValue}))}handleChange(ev){"IC-TEXT-FIELD"===ev.target.tagName&&ev.stopImmediatePropagation()}componentWillLoad(){(0,_helpers_78f627e1_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el),this.watchThemeHandler(this.theme)}componentDidLoad(){(0,_helpers_78f627e1_js__WEBPACK_IMPORTED_MODULE_1__.b)([{prop:this.label,propName:"label"},{prop:this.name,propName:"name"}],"Checkbox Group")}selectHandler({target}){const checkedOptions=Array.from(this.el.querySelectorAll("ic-checkbox")).filter((({checked,disabled})=>checked&&!disabled));this.icChange.emit({value:checkedOptions.map((({value})=>value)),checkedOptions:checkedOptions.map((opt=>{var _a;return{checkbox:opt,textFieldValue:null===(_a=opt.querySelector("ic-text-field"))||void 0===_a?void 0:_a.value}})),selectedOption:target})}render(){const{disabled,helperText,hideLabel,label,name,required,size,theme,validationStatus,validationText}=this,describedBy=(0,_helpers_78f627e1_js__WEBPACK_IMPORTED_MODULE_1__.n)(name,""!==helperText,""!==validationStatus);return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{[`ic-checkbox-group-${size}`]:!0,"ic-checkbox-group-disabled":disabled,[`ic-theme-${theme}`]:"inherit"!==theme}},("error"===validationStatus||required||hideLabel)&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{id:"screenReaderOnlyText",class:"screen-reader-only-text","aria-hidden":"true"},label," ","error"===validationStatus?"invalid data ":null," ",required?"required":null),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("fieldset",{id:name,"aria-labelledby":`${"error"===validationStatus||required||hideLabel?"screenReaderOnlyText":""} ${describedBy}`.trim(),disabled},!hideLabel&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("legend",null,(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-label",{class:{[`${validationStatus}`]:!0},label,helperText,required,disabled,useLabelTag:!1})),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"checkboxes-container"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))),(0,_helpers_78f627e1_js__WEBPACK_IMPORTED_MODULE_1__.p)(validationStatus,disabled)&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-validation",{for:name,ariaLiveMode:"polite",status:validationStatus,message:validationText}))}get el(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{disabled:["watchDisabledHandler"],label:["labelNameHandler"],name:["labelNameHandler"],theme:["watchThemeHandler"]}}};CheckboxGroup.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;--ic-input-label-text-color:var(--ic-checkbox-group-label);--ic-input-label-helper-text-color:var(--ic-checkbox-group-subtitle);--ic-input-validation-error:var(--ic-checkbox-state-icon-error);--ic-input-validation-status-text-color:var(--ic-checkbox-state-text)}:host(.ic-checkbox-group-disabled){--ic-input-label-text-color:var(--ic-checkbox-group-label-disabled);--ic-input-label-helper-text-color:var(\n    --ic-checkbox-group-subtitle-disabled\n  )}ic-input-label.error{color:var(--ic-checkbox-group-label-error);--ic-typography-color:var(--ic-checkbox-group-label-error);--ic-input-label-helper-text-color:var(--ic-checkbox-group-subtitle-error)}ic-input-label ic-typography{margin-bottom:var(--ic-space-sm)}:host(.ic-checkbox-group-small) ic-input-label ic-typography{margin-bottom:calc(var(--ic-space-sm) / 2)}ic-input-validation{margin-top:var(--ic-space-sm)}:host(.ic-checkbox-group-small) ic-input-validation{margin-top:calc(var(--ic-space-sm) / 2)}.checkboxes-container{margin-bottom:calc(-1 * var(--ic-space-xxs))}:host(.ic-checkbox-group-small) .checkboxes-container{margin-bottom:calc(-1 * var(--ic-space-xxxs))}.screen-reader-only-text{position:absolute;left:-9999px;background-color:#fff;color:#000;text-transform:none}'}}]);