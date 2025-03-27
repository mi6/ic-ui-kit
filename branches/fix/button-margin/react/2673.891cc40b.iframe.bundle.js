"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[2673],{"../web-components/dist/esm/ic-radio-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_radio_group:()=>RadioGroup});var _index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-a7a720e7.js"),_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-de6293bf.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}var RadioGroup=function(){function RadioGroup(hostRef){var _this=this;!function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}(this,RadioGroup),(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icChange=(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icChange",7),this.resizeObserver=null,this.ADDITIONAL_FIELD="additional-field",this.RADIO_HORIZONTAL="horizontal",this.RADIO_VERTICAL="vertical",this.checkedValue="",this.selectedChild=-1,this.disabled=!1,this.hideLabel=!1,this.orientation="vertical",this.required=!1,this.size="medium",this.validationStatus="",this.validationText="",this.theme="inherit",this.runResizeObserver=function(){_this.resizeObserver=new ResizeObserver((function(){_this.checkOrientation()})),_this.resizeObserver.observe(_this.el)},this.handleKeyDown=function(event){var additionalFields=Array.from(_this.el.querySelectorAll('ic-text-field[slot="additional-field"]')),activeEl=document.activeElement;if(!(additionalFields.length>0&&_this.radioOptions.map((function(el){return(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.s)(el,_this.ADDITIONAL_FIELD)}))&&additionalFields.map((function(el){return el==activeEl}))))switch(event.stopPropagation(),event.key){case"ArrowDown":case"ArrowRight":_this.radioOptions[_this.getNextItemToSelect(_this.selectedChild,!0)].click(),event.preventDefault();break;case"ArrowUp":case"ArrowLeft":_this.radioOptions[_this.getNextItemToSelect(_this.selectedChild,!1)].click(),event.preventDefault()}},this.getNextItemToSelect=function(currentItem,movingDown){var numRadios=_this.radioOptions.length-1;currentItem<1&&(currentItem=0);var nextItem=movingDown?currentItem+1:currentItem-1;return nextItem<0?nextItem=numRadios:nextItem>numRadios&&(nextItem=0),_this.radioOptions[nextItem].disabled&&(nextItem=_this.getNextItemToSelect(nextItem,movingDown)),nextItem},this.addSlotChangeListener=function(){_this.radioContainer.addEventListener("slotchange",_this.setRadioOptions)},this.setFirstRadioOptionTabIndex=function(value){_this.radioOptions[0].setTabIndex(value)},this.setRadioOptions=function(){_this.selectedChild=-1,_this.checkedValue="",_this.radioOptions=Array.from(_this.el.children).filter((function(el){return"IC-RADIO-OPTION"===el.tagName})),_this.radioOptions.length>0&&(_this.radioOptions.forEach((function(radioOption,index){radioOption.selected||(radioOption.selected=_this.checkedValue===radioOption.value),radioOption.name=_this.name,radioOption.groupLabel=_this.label,radioOption.selected&&(_this.selectedChild=index,_this.checkedValue=radioOption.value),_this.disabled&&(radioOption.disabled=!0)})),_this.setFirstRadioOptionTabIndex(_this.selectedChild>0?-1:0),_this.initialOrientation===_this.RADIO_HORIZONTAL&&void 0!==_this.radioOptions&&(_this.radioOptions.length>2||2===_this.radioOptions.length&&((0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.s)(_this.radioOptions[0],_this.ADDITIONAL_FIELD)||(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.s)(_this.radioOptions[1],_this.ADDITIONAL_FIELD)))&&(_this.currentOrientation=_this.RADIO_VERTICAL))}}return function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(RadioGroup,[{key:"watchDisabledHandler",value:function watchDisabledHandler(newValue){this.radioOptions.forEach((function(radioOption){return radioOption.disabled=newValue})),(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el)}},{key:"orientationChangeHandler",value:function orientationChangeHandler(){this.initialOrientation=this.orientation,this.checkOrientation()}},{key:"watchThemeHandler",value:function watchThemeHandler(newValue){this.radioOptions.forEach((function(radioOption){return radioOption.theme=newValue}))}},{key:"disconnectedCallback",value:function disconnectedCallback(){var _a,_b;null===(_a=this.resizeObserver)||void 0===_a||_a.disconnect(),null===(_b=this.radioContainer)||void 0===_b||_b.removeEventListener("slotchange",this.setRadioOptions)}},{key:"componentWillLoad",value:function componentWillLoad(){(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el),this.orientationChangeHandler(),this.currentOrientation=this.initialOrientation}},{key:"componentDidLoad",value:function componentDidLoad(){this.setRadioOptions(),(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.runResizeObserver),this.addSlotChangeListener(),(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.b)([{prop:this.label,propName:"label"},{prop:this.name,propName:"name"}],"Radio Group"),this.watchThemeHandler(this.theme)}},{key:"selectHandler",value:function selectHandler(_ref){var _a,_this2=this,detail=_ref.detail,selectedOption=_ref.target;selectedOption.parentElement===this.el&&(this.checkedValue=detail.value,this.icChange.emit({value:this.checkedValue,selectedOption:{radio:selectedOption,textFieldValue:null===(_a=null==selectedOption?void 0:selectedOption.querySelector("ic-text-field"))||void 0===_a?void 0:_a.value}}),void 0!==this.radioOptions&&(this.radioOptions.forEach((function(radioOption,index){radioOption.selected=selectedOption===radioOption,radioOption.selected&&(_this2.selectedChild=index)})),this.setFirstRadioOptionTabIndex(this.selectedChild>0?-1:0)))}},{key:"changeHandler",value:function changeHandler(){var _a,selectedOption=null===(_a=this.radioOptions)||void 0===_a?void 0:_a.findIndex((function(radioOption){return radioOption.selected}));selectedOption<0&&(this.setFirstRadioOptionTabIndex(0),this.selectedChild=selectedOption)}},{key:"checkOrientation",value:function checkOrientation(){var _a,_b;if(this.initialOrientation===this.RADIO_HORIZONTAL){var totalWidth=0;Array.isArray(this.radioOptions)&&this.radioOptions.length>0?this.radioOptions.forEach((function(_ref2,i,arr){var clientWidth=_ref2.clientWidth;totalWidth+=clientWidth,i<arr.length-1&&(totalWidth+=40)})):totalWidth=0,this.initialOrientation==this.RADIO_HORIZONTAL&&(void 0!==this.radioOptions&&(this.radioOptions.length>2||2===this.radioOptions.length&&((0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.s)(this.radioOptions[0],this.ADDITIONAL_FIELD)||(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.s)(this.radioOptions[1],this.ADDITIONAL_FIELD)))||totalWidth>=(null===(_a=this.radioContainer)||void 0===_a?void 0:_a.clientWidth)?this.currentOrientation=this.RADIO_VERTICAL:totalWidth<(null===(_b=this.radioContainer)||void 0===_b?void 0:_b.clientWidth)&&(this.currentOrientation=this.RADIO_HORIZONTAL))}}},{key:"render",value:function render(){var _this3=this,currentOrientation=this.currentOrientation,disabled=this.disabled,handleKeyDown=this.handleKeyDown,helperText=this.helperText,hideLabel=this.hideLabel,label=this.label,required=this.required,size=this.size,validationStatus=this.validationStatus,validationText=this.validationText,theme=this.theme;return(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"62ca52ff9ddf05c389bc2f711c1e16673e8674e1",onKeyDown:handleKeyDown,class:_defineProperty({"ic-radio-group-small":"small"===size},"ic-theme-".concat(theme),"inherit"!==theme)},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"8e5b03321c3fc4d1af3ee86ff8200fa1076bd528",role:"radiogroup","aria-label":"".concat(label).concat(required?", required":"")},!hideLabel&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-label",{key:"c2597e6e54455332b99130c4b7e85c14c8151e4a",class:_defineProperty(_defineProperty({},"".concat(validationStatus),!0),"disabled",disabled),label,helperText,required,disabled}),(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"39680e06a0a08303b285537099721b75e33b2e6b",class:{"radio-buttons-container":!0,horizontal:currentOrientation===this.RADIO_HORIZONTAL},ref:function ref(el){return _this3.radioContainer=el}},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"b375d3325060219905c6d6f0aab0d5f25d64b2bc"}))),(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.p)(validationStatus,disabled)&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-validation",{key:"0b19d72fbeed17e02bbd9d0b9336fe59740dce41",ariaLiveMode:"polite",status:validationStatus,message:validationText}))}},{key:"el",get:function get(){return(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}}],[{key:"watchers",get:function get(){return{disabled:["watchDisabledHandler"],orientation:["orientationChangeHandler"],theme:["watchThemeHandler"]}}}]),RadioGroup}();RadioGroup.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;--ic-input-label-text-color:var(--ic-radio-button-input-field-label);--ic-input-label-helper-text-color:var(\n    --ic-radio-button-input-field-subtitle\n  );--ic-input-validation-status-text-color:var(--ic-radio-button-state-text);--ic-input-validation-error:var(--ic-radio-button-state-icon-error)}ic-input-label.error{--ic-input-label-text-color:var(--ic-radio-button-input-field-label-error)}ic-input-label.disabled{--ic-input-label-text-color:var(\n    --ic-radio-button-input-field-label-disabled\n  );--ic-input-label-helper-text-color:var(\n    --ic-radio-button-input-field-subtitle-disabled\n  )}ic-input-validation{margin-top:var(--ic-space-sm)}:host(.ic-radio-group-small) ic-input-validation{margin-top:calc(var(--ic-space-sm) / 2)}ic-input-label ic-typography{margin-bottom:var(--ic-space-sm)}:host(.ic-radio-group-small) ic-input-label ic-typography{margin-bottom:calc(var(--ic-space-sm) / 2)}:host .radio-buttons-container{display:flex;flex-direction:column;gap:var(--ic-space-xxs)}:host(.ic-radio-group-small) .radio-buttons-container{gap:var(--ic-space-xxxs)}:host .radio-buttons-container.horizontal{display:flex;flex-direction:row;gap:calc(var(--ic-space-xl) + var(--ic-space-xs))}:host(.ic-radio-group-small) .radio-buttons-container.horizontal{gap:var(--ic-space-xl)}'}}]);