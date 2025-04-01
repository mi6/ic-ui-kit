"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[1400],{"./dist/esm/ic-text-field.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_text_field:()=>TextField});var _index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-a7a720e7.js"),_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/helpers-de6293bf.js");let inputIds=0;const MUTABLE_ATTRIBUTES=[..._helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.x,"title"],TextField=class{constructor(hostRef){(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.getValidationText=(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"getValidationText",7),this.icBlur=(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icBlur",7),this.icChange=(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icChange",7),this.icFocus=(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icFocus",7),this.icInput=(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icInput",7),this.icKeydown=(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icKeydown",7),this.inheritedAttributes={},this.hostMutationObserver=null,this.numChars=0,this.maxCharactersReached=!1,this.maxCharactersWarning=!1,this.minCharactersUnattained=!1,this.maxValueExceeded=!1,this.minValueUnattained=!1,this.ariaAutocomplete=void 0,this.autocapitalize="off",this.autocomplete="off",this.autocorrect="off",this.autofocus=!1,this.disabled=!1,this.fullWidth=!1,this.helperText="",this.hideCharCount=!1,this.hideLabel=!1,this.hiddenInput=!0,this.inputId="ic-text-field-input-"+inputIds++,this.inputmode="text",this.maxCharacters=0,this.minCharacters=0,this.name=this.inputId,this.placeholder="",this.readonly=!1,this.required=!1,this.resize=!1,this.rows=1,this.size="medium",this.spellcheck=!1,this.theme="inherit",this.type="text",this.validationInline=!1,this.validationInlineInternal=!1,this.validationStatus="",this.validationText="",this.debounce=0,this.value="",this.initialValue=this.value,this.checkChildHydration=()=>{var _a;const el=null===(_a=this.el.shadowRoot)||void 0===_a?void 0:_a.querySelector("ic-typography");(this.hideLabel||el&&el.classList.contains("hydrated"))&&(this.setFocus(),clearInterval(this.interval))},this.getNumberOfCharacters=value=>null!=value?value.length:0,this.getMaxValueExceeded=value=>{this.numChars=this.getNumberOfCharacters(value),"number"===this.type&&(this.minValueUnattained=!!value&&Number(value)<Number(this.min),this.maxValueExceeded=Number(value)>Number(this.max))},this.getMaxCharactersReached=value=>{this.numChars=this.getNumberOfCharacters(value),this.maxCharactersReached=this.maxCharacters>0&&this.numChars>=this.maxCharacters,this.maxCharactersWarning&&!this.maxCharactersReached&&(this.maxCharactersWarning=!1)},this.onInput=ev=>{this.value=ev.target.value,this.icInput.emit({value:this.value})},this.onBlur=ev=>{ev.target.removeEventListener("wheel",this.onWheel);const value=ev.target.value;this.numChars=value.length,this.minCharactersUnattained=this.minCharacters>0&&this.numChars<this.minCharacters,this.icBlur.emit({value})},this.onFocus=ev=>{ev.target.addEventListener("wheel",this.onWheel),this.icFocus.emit({value:ev.target.value})},this.onWheel=ev=>{const target=ev.target;"number"===target.type&&(target.blur(),setTimeout((()=>{target.focus()}),0))},this.hasStatus=status=>""!==status&&!this.disabled,this.handleFormReset=()=>{this.value=this.initialValue},this.hostMutationCallback=mutationList=>{let forceComponentUpdate=!1;mutationList.forEach((({attributeName,type,addedNodes,removedNodes})=>{if(attributeName&&MUTABLE_ATTRIBUTES.includes(attributeName)){const attribute=this.el.getAttribute(attributeName);attribute&&(this.inheritedAttributes[attributeName]=attribute),forceComponentUpdate=!0}else"childList"===type&&(forceComponentUpdate=(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.F)(addedNodes,removedNodes,"icon"))})),forceComponentUpdate&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.f)(this)}}watchDisabledHandler(){(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el)}debounceChanged(){this.icChange=(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.C)(this.icChange,this.debounce)}watchValueHandler(newValue){let value;this.maxCharacters>0?(value=newValue.substring(0,this.maxCharacters),this.value=value):value=newValue,this.inputEl&&this.inputEl.value!==value&&(this.inputEl.value=value),this.getMaxValueExceeded(value),this.getMaxCharactersReached(value),this.icChange.emit({value})}connectedCallback(){this.debounceChanged()}disconnectedCallback(){var _a;(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.k)(this.el,this.handleFormReset),null===(_a=this.hostMutationObserver)||void 0===_a||_a.disconnect()}componentWillLoad(){this.value!==this.initialValue?this.watchValueHandler(this.value):this.maxCharacters>0&&(this.value=this.value.substring(0,this.maxCharacters)),this.getMaxValueExceeded(this.value),this.getMaxCharactersReached(this.value),this.inheritedAttributes=(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.w)(this.el,MUTABLE_ATTRIBUTES),this.readonly&&(this.maxValueExceeded=!1,this.minValueUnattained=!1),(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.el,this.handleFormReset),(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el)}componentDidLoad(){(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.b)([{prop:this.label,propName:"label"}],"Text Field"),this.validationInlineInternal&&this.getValidationText.emit({value:this.validationText}),this.hostMutationObserver=new MutationObserver(this.hostMutationCallback),this.hostMutationObserver.observe(this.el,{attributes:!0,childList:!0}),!this.autofocus||this.disabled||this.readonly||(this.interval=setInterval(this.checkChildHydration,50))}handleKeyDown(ev){this.icKeydown.emit({event:ev}),this.maxCharactersWarning=this.maxCharactersReached}async setFocus(){var _a;null===(_a=this.inputEl)||void 0===_a||_a.focus()}render(){const{inputId,name,label,required,size,placeholder,helperText,hideCharCount,rows,resize,disabled,value,min,max,numChars,readonly,maxCharacters,maxCharactersWarning,maxCharactersReached,minCharacters,minCharactersUnattained,minValueUnattained,maxValueExceeded,validationStatus,validationText,validationInline,validationInlineInternal,spellcheck,inputmode,fullWidth,truncateValue,hiddenInput,theme}=this,el=this.el,disabledMode=readonly||disabled,currentStatus=maxValueExceeded||minValueUnattained||minCharactersUnattained||maxCharactersWarning?maxCharactersWarning?_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.J.Warning:_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.J.Error:validationStatus,currentValidationText=maxCharactersWarning?`Maximum input is ${maxCharacters} characters`:maxValueExceeded?`Maximum value of ${max} exceeded`:minValueUnattained?`Minimum value of ${min} not met`:minCharactersUnattained?`Minimum input is ${minCharacters} characters`:validationText,maxNumChars=readonly?0:maxCharacters,messageAriaLive=maxCharactersWarning||maxValueExceeded||minValueUnattained||currentStatus===_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.J.Error?"assertive":"polite",showStatusText=this.hasStatus(currentStatus)&&!(currentStatus==_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.J.Success&&validationInline)&&!validationInlineInternal,multiline=rows>1,charsRemaining=maxNumChars-numChars,hiddenRemainingCharCountDesc=`${charsRemaining} character${1===charsRemaining?"":"s"} remaining.`,hiddenCharCountDescId=maxCharacters>0?`${inputId}-char-count-desc`:"",describedBy=`${hiddenCharCountDescId} ${(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.n)(inputId,""!==helperText,showStatusText)}`.trim(),disabledText=disabledMode&&!readonly,showLeftIcon=!!this.el.querySelector('[slot="icon"]')&&!disabledText,invalid=`${currentStatus===_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.J.Error}`;return hiddenInput?(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.l)(!0,this.el,name,value,disabledMode):(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.m)(this.el),(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"9175054afc7f5ab0f44c2c02d73a209676690f26",class:{"ic-text-field-full-width":!!fullWidth,[`ic-theme-${theme}`]:"inherit"!==theme,"ic-text-field-disabled":!!disabledMode}},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-container",{key:"2cf32636f95f8ec80f25424483fcdf2afe262534",readonly,disabled:disabledMode},!this.hideLabel&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-label",{key:"3ee4d01a7e1705d1bdd1e88dc734a16f990c35c9",for:inputId,label,helperText,required,disabled:disabledText,readonly}),(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-component-container",{key:"d6300116fc334d565681cedb6c2e4b637dd8fe5f",size,validationStatus:currentStatus,multiLine:multiline,disabled:disabledMode,readonly,validationInline,fullWidth},showLeftIcon&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"2dae55d8265539a3c1b1975ebb63015fb2b66ceb",class:{readonly:!!readonly,"has-value":this.getNumberOfCharacters(value)>0},slot:"left-icon"},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"c363bc9c876a3be7db91dd1afd8eac8013f176a2",name:"icon"})),multiline?(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("textarea",Object.assign({id:inputId,class:{"no-resize":!1===resize||!!readonly,"no-left-pad":!showLeftIcon&&!!readonly,readonly:!!readonly},name,ref:el=>this.inputEl=el,value,rows,required,disabled:disabledMode,placeholder:placeholder||"",readonly,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,"aria-label":label,"aria-describedby":describedBy,"aria-invalid":invalid,autocapitalize:this.autocapitalize,spellcheck,inputmode,maxlength:maxCharactersReached?maxCharacters:void 0,minlength:minCharactersUnattained?minCharacters:void 0},this.inheritedAttributes)):(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",Object.assign({id:inputId,name,ref:el=>this.inputEl=el,type:this.type,min,max,value,class:{"no-left-pad":!showLeftIcon&&!!readonly,readonly:!!readonly,"truncate-value":!!truncateValue},placeholder:placeholder||"",required,disabled:disabledMode,readonly,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,"aria-label":label,"aria-describedby":describedBy,"aria-invalid":invalid,"aria-activedescendant":this.ariaActiveDescendant,"aria-expanded":this.ariaExpanded,"aria-owns":this.ariaOwns,autocomplete:this.autocomplete,autocapitalize:this.autocapitalize,spellcheck,inputmode,role:this.role,maxlength:maxCharactersReached?maxCharacters:void 0,minlength:minCharactersUnattained?minCharacters:void 0},this.inheritedAttributes)),(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.i)(el,"clear-button")&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"f08406702167a6155246e26df7fe64ef06b82976",name:"clear-button"}),(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.i)(el,"search-submit-button")&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"58c8ed7ed396953f0d4dff0aba462b10e58bd78b",name:"search-submit-button"})),(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.i)(el,"menu")&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"15496f93b502c8b0d55b0a2da6622e8ab425ef49",name:"menu"}),(!(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.K)(validationStatus)||!(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.K)(validationText)||maxNumChars>0||maxValueExceeded||maxCharactersWarning||minCharactersUnattained||minValueUnattained)&&!validationInlineInternal&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-validation",{key:"675805dbde2426192861938a009728af5d0ea56f",status:!1===this.hasStatus(currentStatus)||currentStatus===_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.J.Success&&validationInline||validationInlineInternal?"":currentStatus,message:showStatusText?currentValidationText:"",ariaLiveMode:messageAriaLive,for:inputId,fullWidth},!readonly&&maxNumChars>0&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"92b805a2b9b4d87347f767c750c7d9ce8be6c909",slot:"validation-message-adornment"},!hideCharCount&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{key:"2a24743dc253ab95c360c2ae78e559c0437202dc",variant:"caption",class:"char-count-text"},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"a71f41c5313d828123d275a41ae694ec2c0b2f5e",class:"char-count"},numChars,"/",maxNumChars)),(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"9c6d7a87b3d4a0f2baf9b1f732f0940d5e0fbe7b",class:"remaining-char-count-desc","aria-live":"polite"},hiddenRemainingCharCountDesc),(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"3aba077c149ce80fa5732245829e6e02c4bf52c8",hidden:!0,id:hiddenCharCountDescId},"Field can contain a maximum of ",maxNumChars," characters.")))))}get el(){return(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{disabled:["watchDisabledHandler"],debounce:["debounceChanged"],value:["watchValueHandler"]}}};TextField.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;--ic-input-label-helpertext-padding:var(--ic-space-xxs);--border-color:var(--ic-text-field-border-neutral);--border-color-hover:var(--ic-text-field-border-neutral-hover);--border-color-pressed:var(--ic-text-field-border-neutral-pressed);--border-color-disabled:var(--ic-text-field-border-disabled);--border-color-error:var(--ic-text-field-border-error);--border-color-error-hover:var(--ic-text-field-border-error-hover);--border-color-error-pressed:var(--ic-text-field-border-error-pressed);--border-color-success:var(--ic-text-field-border-success);--border-color-success-hover:var(--ic-text-field-border-success-hover);--border-color-success-pressed:var(--ic-text-field-border-success-pressed);--border-color-warning:var(--ic-text-field-border-warning);--border-color-warning-hover:var(--ic-text-field-border-warning-hover);--border-color-warning-pressed:var(--ic-text-field-border-warning-pressed);--ic-input-label-text-color:var(--ic-text-field-label);--ic-input-label-helper-text-color:var(--ic-text-field-subtitle);--ic-input-validation-status-text-color:var(--ic-text-field-state-text);--ic-input-validation-error:var(--ic-text-field-state-icon-error);--ic-input-validation-warning-icon-color:var(\n    --ic-text-field-state-icon-warning\n  );--ic-input-validation-success-icon-color:var(\n    --ic-text-field-state-icon-success\n  );--ic-input-component-container-success-icon-inline-color:var(\n    --ic-text-field-state-icon-success\n  )}:host(.ic-text-field-disabled){--ic-input-label-text-color:var(--ic-text-field-label-disabled);--ic-input-label-helper-text-color:var(--ic-text-field-subtitle-disabled);--text-field-placeholder-color:var(\n    --ic-text-field-text-area-placeholder-text-disabled\n  )}:host(.ic-text-field-full-width){width:100%}::-moz-placeholder{color:var(\n    --text-field-placeholder-color,\n    var(--ic-text-field-placeholder-text)\n  );opacity:1}::placeholder{color:var(\n    --text-field-placeholder-color,\n    var(--ic-text-field-placeholder-text)\n  );opacity:1}input,textarea{border:0;border-radius:var(--ic-border-radius);color:var(--text-field-text-color, var(--ic-text-field-text));background-color:var(--input-bg-color, var(--ic-text-field-background));line-height:1.5rem;letter-spacing:0.005rem;width:100%;padding-right:var(--ic-space-xs);padding-left:var(--ic-space-xs);caret-color:var(\n    --text-field-typing-cursor,\n    var(--ic-text-field-typing-cursor)\n  )}textarea{min-height:var(--ic-space-lg);resize:vertical;padding-top:0.375rem}input:focus,textarea:focus{border:0;outline:0}input:disabled,textarea:disabled{color:var(\n    --text-field-disabled-text-color,\n    var(--ic-text-field-text-disabled)\n  )}input.readonly,textarea.readonly{color:var(--ic-text-field-read-only-input-text-internal)}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type="number"]{-moz-appearance:textfield}textarea.no-resize{resize:none}.char-count-text{--ic-typography-color:var(--ic-text-field-character-limit);padding-right:var(--ic-space-xxxs)}:host(.ic-text-field-disabled) .char-count-text{--ic-typography-color:var(--ic-text-field-character-limit-disabled)}.no-left-pad{padding-left:0}::slotted([slot="icon"]){fill:var(--ic-text-field-text-disabled)}.has-value ::slotted([slot="icon"]){fill:var(--ic-text-field-input-internal-icon)}.char-count{margin-right:calc(-1 * var(--ic-space-xxxs))}.remaining-char-count-desc{position:absolute;left:-9999px}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration,input[type="search"]::-webkit-search-results-button,input[type="search"]::-webkit-search-results-decoration{display:none}input[type="search"].truncate-value{width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}@media (forced-colors: active){input.readonly,textarea.readonly{color:canvastext}.has-value ::slotted([slot="icon"]){fill:currentcolor}}'}}]);