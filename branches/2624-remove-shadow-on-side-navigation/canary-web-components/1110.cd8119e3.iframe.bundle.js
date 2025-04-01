"use strict";(self.webpackChunk_ukic_canary_web_components=self.webpackChunk_ukic_canary_web_components||[]).push([[1110],{"./dist/esm/ic-search-bar.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_search_bar:()=>SearchBar});var _index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-163fe708.js"),_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/helpers-bbab69a2.js");let inputIds=0;const SearchBar=class{constructor(hostRef){(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icChange=(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icChange",7),this.icClear=(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icClear",7),this.icInput=(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icInput",7),this.icOptionSelect=(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icOptionSelect",7),this.icMenuChange=(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icMenuChange",7),this.icClearBlur=(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icClearBlur",7),this.icRetryLoad=(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icRetryLoad",7),this.icSubmitSearch=(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icSubmitSearch",7),this.icSubmitSearchBlur=(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icSubmitSearchBlur",7),this.icSearchBarBlur=(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icSearchBarBlur",7),this.icSearchBarFocus=(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icSearchBarFocus",7),this.icKeydown=(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icKeydown",7),this.assistiveHintEl=null,this.hasTimedOut=!1,this.inputId="ic-search-bar-input-"+inputIds++,this.menuCloseFromMenuChangeEvent=!1,this.menuId=`${this.inputId}-menu`,this.preLoad=!0,this.preventSubmit=!1,this.prevNoOption=!1,this.retryButtonClick=!1,this.truncateValue=!1,this.clearButtonFocused=!1,this.open=!1,this.searchSubmitFocused=!1,this.showClearButton=!1,this.autocapitalize="off",this.autocomplete="off",this.autocorrect="off",this.autofocus=!1,this.charactersUntilSuggestion=2,this.disabled=!1,this.disableAutoFiltering=!1,this.debounce=0,this.emptyOptionListText="No results found",this.focusOnLoad=!1,this.fullWidth=!1,this.helperText="",this.hideLabel=!1,this.assistiveHintText="When autocomplete results are available use the up and down arrows to choose and press enter to select",this.labelField="label",this.loading=!1,this.loadingErrorLabel="Loading Error",this.loadingLabel="Loading...",this.name=this.inputId,this.placeholder="Search",this.readonly=!1,this.required=!1,this.searchMode="navigation",this.size="medium",this.spellcheck=!1,this.theme="inherit",this.valueField="value",this.filteredOptions=[],this.options=[],this.value="",this.handleClear=ev=>{var _a;const keyboardEvent=ev;"click"!==ev.type&&"Enter"!==keyboardEvent.code&&"Space"!==keyboardEvent.code||(this.value="",null===(_a=this.inputEl)||void 0===_a||_a.setAttribute("value",""),this.loading=!1,clearTimeout(this.timeoutTimer),this.filteredOptions=this.options,this.el.setFocus(),this.icClear.emit(),ev.preventDefault(),this.preventSubmit=!0)},this.onInput=ev=>{this.value=ev.target.value,this.icInput.emit({value:this.value});const noOptions=[{[this.labelField]:this.emptyOptionListText,[this.valueField]:""}];if(this.options.length>0&&(this.setMenuChange(!0),this.preLoad=!1,!1===this.disableAutoFiltering)){const rawFilteredOptions=(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.A)(this.options,!1,this.value,"anywhere",this.labelField);this.filteredOptions=rawFilteredOptions.length>0?rawFilteredOptions:noOptions}this.showClearButton||this.handleShowClearButton(!0),this.debounceAriaLiveUpdate()},this.onInputBlur=ev=>{const value=ev.target.value,nextFocus=ev.relatedTarget;this.icSearchBarBlur.emit({value,relatedTarget:nextFocus})},this.onInputFocus=ev=>{const value=ev.target.value;this.icSearchBarFocus.emit({value}),this.handleShowClearButton(!0)},this.handleClearBlur=ev=>{const nextFocus=ev.relatedTarget;this.icClearBlur.emit({relatedTarget:nextFocus}),this.clearButtonFocused=!1},this.handleSubmitSearchBlur=ev=>{const nextFocus=ev.relatedTarget;this.icSubmitSearchBlur.emit({relatedTarget:nextFocus}),this.searchSubmitFocused=!1},this.handleMouseDown=ev=>{ev.preventDefault()},this.handleSubmitSearchFocus=()=>{this.searchSubmitFocused=!0},this.handleSubmitSearch=()=>{this.highlightedValue&&(this.value=this.highlightedValue),this.highlightedValue=void 0,this.icSubmitSearch.emit({value:this.value});const form=this.el.closest("FORM");this.searchSubmitButton&&form&&!this.preventSubmit&&(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.B)(form,this.searchSubmitButton)},this.handleSubmitSearchKeyDown=ev=>{" "===ev.key&&(ev.preventDefault(),this.handleSubmitSearch())},this.handleRetry=ev=>{this.retryViaKeyPress="Enter"===ev.detail.keyPressed,this.icRetryLoad.emit({value:ev.detail.value}),this.triggerLoading(),this.retryButtonClick=!0},this.triggerLoading=()=>{const loadingOption=[{[this.labelField]:this.loadingLabel,[this.valueField]:"",loading:!0}];this.filteredOptions!==loadingOption&&(this.filteredOptions=loadingOption),this.timeout&&(this.timeoutTimer=window.setTimeout((()=>{this.filteredOptions=[{[this.labelField]:this.loadingErrorLabel,[this.valueField]:"",timedOut:!0}]}),this.timeout))},this.handleOptionSelect=ev=>{ev.detail.label!==this.emptyOptionListText?(this.value=ev.detail.value,this.icOptionSelect.emit({value:this.value})):this.el.setFocus()},this.handleMenuOptionHighlight=ev=>{var _a;const optionValue=null===(_a=ev.detail.optionId)||void 0===_a?void 0:_a.replace(`${this.menuId}-`,"");optionValue&&(this.highlightedValue=optionValue),ev.detail.optionId?this.ariaActiveDescendant=ev.detail.optionId:this.ariaActiveDescendant=""},this.handleMenuChange=ev=>{this.setMenuChange(ev.detail.open),ev.detail.open||(this.menuCloseFromMenuChangeEvent=!0)},this.setMenuChange=open=>{this.open!==open&&(this.open=open,this.icMenuChange.emit({open}))},this.handleHostFocus=()=>{this.options&&this.value&&!this.menuCloseFromMenuChangeEvent&&this.setMenuChange(!0),this.handleTruncateValue(!1),this.icSearchBarFocus.emit()},this.handleHostBlur=ev=>{var _a;const nextFocus=ev.relatedTarget;this.open&&this.options&&nextFocus!==this.menu&&!this.retryViaKeyPress&&!this.retryButtonClick&&this.setMenuChange(!1),(this.retryButtonClick||this.retryViaKeyPress)&&(null===(_a=this.inputEl)||void 0===_a||_a.focus()),this.handleShowClearButton(!1),this.menuCloseFromMenuChangeEvent=!1,this.handleTruncateValue(!0),this.icSearchBarBlur.emit({relatedTarget:nextFocus,value:this.value}),this.retryViaKeyPress=!1,this.retryButtonClick=!1},this.handleShowClearButton=visible=>{this.showClearButton=visible},this.handleFocusClearButton=()=>{this.clearButtonFocused=!0},this.handleTruncateValue=truncate=>{this.truncateValue=truncate},this.renderAssistiveHintEl=()=>{var _a;const input=null===(_a=this.el.shadowRoot)||void 0===_a?void 0:_a.querySelector(`#${this.inputId}`);input&&Object.keys(input).length>0&&this.hasOptionsOrFilterDisabled()&&(this.assistiveHintEl=document.createElement("span"),this.assistiveHintEl.innerText=this.assistiveHintText||"",this.assistiveHintEl.id=`${this.inputId}-assistive-hint`,this.assistiveHintEl.style.display="none",void 0!==input.after&&input.after(this.assistiveHintEl))},this.updateSearchResultAriaLive=()=>{var _a;const searchResultsStatusEl=null===(_a=this.el.shadowRoot)||void 0===_a?void 0:_a.querySelector(".search-results-status");searchResultsStatusEl&&(!this.open||""===this.value||this.value.length<this.charactersUntilSuggestion?searchResultsStatusEl.innerText="":this.hasOptionsOrFilterDisabled()&&this.filteredOptions.length>0&&this.open&&!this.filteredOptions[0].loading&&(this.hadNoOptions()?searchResultsStatusEl.innerText=this.emptyOptionListText:searchResultsStatusEl.innerText=`${this.filteredOptions.length} result${this.filteredOptions.length>1?"s":""} available`))},this.hasOptionsOrFilterDisabled=()=>this.options.length>0||!!this.disableAutoFiltering,this.hadNoOptions=()=>1===this.filteredOptions.length&&this.filteredOptions[0][this.labelField]===this.emptyOptionListText&&"navigation"===this.searchMode,this.isSubmitDisabled=()=>{const valueNotSet=void 0===this.value||null===this.value||""===this.value,valueLengthLess=this.value.length<this.charactersUntilSuggestion;return valueNotSet||valueLengthLess||this.disabled||this.hadNoOptions()||this.hasTimedOut||!!this.loading},this.highlightFirstOptionAfterNoResults=()=>{this.prevNoOption&&this.menu&&!this.hasTimedOut&&(this.menu.handleSetFirstOption(),this.prevNoOption=!1);this.filteredOptions.find((filteredOption=>filteredOption[this.labelField]===this.emptyOptionListText||filteredOption[this.labelField]===this.loadingErrorLabel||filteredOption[this.labelField]===this.loadingLabel))&&(this.prevNoOption=!0)}}watchDisabledHandler(){(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el)}debounceChanged(){this.icChange=(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.C)(this.icChange,this.debounce)}loadingHandler(newValue){newValue&&!this.hasTimedOut&&(this.preLoad=!1,this.triggerLoading())}filteredOptionsHandler(newOptions){this.hasTimedOut=newOptions.some((opt=>opt.timedOut))}watchOptionsHandler(newOptions){if(this.disableAutoFiltering&&!this.hasTimedOut)if(this.loading=!1,clearTimeout(this.timeoutTimer),newOptions.length>0)this.filteredOptions=newOptions;else{if(this.hadNoOptions())return;this.setMenuChange(!0),!this.preLoad&&(this.filteredOptions=[{[this.labelField]:this.emptyOptionListText,[this.valueField]:""}]),this.preLoad=!0}this.debounceAriaLiveUpdate()}watchValueHandler(newValue){this.inputEl&&this.options&&(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.E)(newValue,this.options,this.valueField,this.labelField)?this.inputEl.value=(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.E)(newValue,this.options,this.valueField,this.labelField)||"":this.inputEl&&this.inputEl.value!==newValue&&(this.inputEl.value=newValue),this.icChange.emit({value:newValue})}connectedCallback(){this.debounceChanged()}disconnectedCallback(){this.assistiveHintEl&&this.assistiveHintEl.remove()}componentWillLoad(){this.watchValueHandler(this.value),(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el)}componentDidLoad(){this.focusOnLoad&&this.el.setFocus(),this.hasOptionsOrFilterDisabled()&&(this.renderAssistiveHintEl(),this.disableAutoFiltering&&(this.filteredOptions=this.options)),(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.b)([{prop:this.label,propName:"label"}],"Search Bar")}componentWillRender(){this.highlightFirstOptionAfterNoResults()}handleKeyDown(event){this.icKeydown.emit({event}),this.menu&&this.open&&this.menu.handleKeyboardOpen(event)}handleKeyUp(ev){if("Enter"===ev.key){if(this.preventSubmit||this.isSubmitDisabled())return;this.handleSubmitSearch(),this.setMenuChange(!1)}"Escape"===ev.key&&this.setMenuChange(!1),this.preventSubmit&&(this.preventSubmit=!1)}async setFocus(){var _a;this.retryViaKeyPress=!1,this.retryButtonClick=!1,null===(_a=this.inputEl)||void 0===_a||_a.focus()}debounceAriaLiveUpdate(){clearTimeout(this.debounceAriaLive),this.debounceAriaLive=window.setTimeout((()=>{this.updateSearchResultAriaLive()}),500)}render(){const{inputId,name,label,required,size,placeholder,helperText,disabled,value,readonly,spellcheck,fullWidth,options,open,hideLabel,menuId,ariaActiveDescendant,truncateValue,autofocus,autocapitalize,autocomplete,filteredOptions,theme}=this,disabledMode=readonly||disabled,describedBy=(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.n)(inputId,""!==helperText,!1).trim();let describedById;describedById=""!==describedBy&&this.hasOptionsOrFilterDisabled()?`${describedBy} ${this.inputId}-assistive-hint`:this.hasOptionsOrFilterDisabled()?`${this.inputId}-assistive-hint`:""!==describedBy?describedBy:void 0;const hasSuggestedSearch=!!value&&this.hasOptionsOrFilterDisabled(),menuOpen=hasSuggestedSearch&&open&&filteredOptions.length>0,menuRendered=menuOpen&&value.length>=this.charactersUntilSuggestion,labelValue=(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.E)(value,options,this.valueField,this.labelField);return(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.l)(!0,this.el,name,value,disabledMode),(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"a1e560e97f324268abb887ac3b8188acc1c6d42f",class:{"ic-search-bar-search":!0,"ic-search-bar-full-width":!!fullWidth,"ic-search-bar-disabled":!!disabled,"ic-search-bar-small":"small"===size,[`ic-theme-${theme}`]:"inherit"!==theme},onFocus:this.handleHostFocus,onBlur:this.handleHostBlur},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-container",{key:"327a761189705de2cd7b4f4163f494701a34276c",readonly,disabled:disabledMode},!hideLabel&&(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-label",{key:"80f4bb67acb9232b36014d34f320471bedcc1ad3",for:inputId,label,helperText,required,disabled:disabledMode&&!readonly,readonly}),(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-component-container",{key:"0fb2a97aad0bd1f185ed3fc456c589dbcb7ce99d",ref:el=>this.anchorEl=el,size,disabled:disabledMode,readonly,fullWidth},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{key:"3af78e40aa89ce0bad6693f6371015486c1cd103",id:inputId,name,ref:el=>this.inputEl=el,value:options&&labelValue?labelValue:value,class:{"no-left-pad":!!readonly,readonly:!!readonly,"truncate-value":truncateValue},placeholder,required,disabled:disabledMode,readonly,onInput:this.onInput,onBlur:this.onInputBlur,onFocus:this.onInputFocus,"aria-label":label,"aria-activedescendant":ariaActiveDescendant,"aria-expanded":options.length>0&&menuRendered?`${menuOpen}`:void 0,"aria-owns":menuRendered?menuId:void 0,"aria-describedby":describedById,"aria-controls":menuRendered?menuId:void 0,"aria-haspopup":options.length>0?"listbox":void 0,"aria-autocomplete":hasSuggestedSearch?"list":void 0,role:options.length>0&&menuRendered?"combobox":void 0,autocomplete,autocapitalize,autoFocus:autofocus,spellcheck,inputmode:"search"}),(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"23d4349d4b0f905bbf90bf1826a3a90559c62b9d",class:{"clear-button-container":!0,"clear-button-visible":!!value&&!disabledMode&&this.showClearButton}},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{key:"90cd4ab4601fabfca86d92d9c6cb7d5751d43758",id:"clear-button",class:{"clear-button":!0,"clear-button-unfocused":!this.clearButtonFocused},"aria-label":"Clear",innerHTML:'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M15.8327 5.34199L14.6577 4.16699L9.99935 8.82533L5.34102 4.16699L4.16602 5.34199L8.82435 10.0003L4.16602 14.6587L5.34102 15.8337L9.99935 11.1753L14.6577 15.8337L15.8327 14.6587L11.1743 10.0003L15.8327 5.34199Z" fill="currentColor"/>\n</svg>\n',onClick:this.handleClear,onMouseDown:this.handleMouseDown,size,onFocus:this.handleFocusClearButton,onBlur:this.handleClearBlur,onKeyDown:this.handleClear,type:"submit",variant:"icon",theme:this.clearButtonFocused?"light":"dark"}),(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"79c1bb38267e6ebef413f7f9a6ba0ac8a28b5f12",class:"divider"})),(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"91b16ca2d959cf2d36cbbe75eb210fd254cff723",class:{"search-submit-button-container":!0,"search-submit-button-disabled":this.isSubmitDisabled()}},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{key:"3b2aac9b7ae9ba4e78979d5ecc64a8aa2035e23a",id:"search-submit-button","aria-label":"Search",ref:el=>this.searchSubmitButton=el,class:{"search-submit-button":!0,"search-submit-button-small":"small"===size,"search-submit-button-unfocused":!this.searchSubmitFocused,"search-submit-button-disabled":this.isSubmitDisabled()},disabled:this.isSubmitDisabled(),innerHTML:'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">\n    <path d="M13.1292 11.8792H12.4708L12.2375 11.6542C13.0542 10.7042 13.5458 9.47083 13.5458 8.12916C13.5458 5.13749 11.1208 2.71249 8.12916 2.71249C5.13749 2.71249 2.71249 5.13749 2.71249 8.12916C2.71249 11.1208 5.13749 13.5458 8.12916 13.5458C9.47083 13.5458 10.7042 13.0542 11.6542 12.2375L11.8792 12.4708V13.1292L16.0458 17.2875L17.2875 16.0458L13.1292 11.8792ZM8.12916 11.8792C6.05416 11.8792 4.37916 10.2042 4.37916 8.12916C4.37916 6.05416 6.05416 4.37916 8.12916 4.37916C10.2042 4.37916 11.8792 6.05416 11.8792 8.12916C11.8792 10.2042 10.2042 11.8792 8.12916 11.8792Z" fill="currentColor"/>\n</svg>',size,onClick:this.handleSubmitSearch,onMouseDown:this.handleMouseDown,onBlur:this.handleSubmitSearchBlur,onFocus:this.handleSubmitSearchFocus,onKeyDown:this.handleSubmitSearchKeyDown,type:"submit",variant:"icon",theme:this.searchSubmitFocused?"light":"dark"}))),(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"548b4ee1e050efd6a8d50d7640e3cad32ac3002c",class:{"menu-container":!0,fullwidth:!!fullWidth}},menuRendered&&(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-menu",{key:"3d495b2ee381d30984316f0143c148731b179304",class:{"no-results":this.hadNoOptions()||1===filteredOptions.length&&(filteredOptions[0][this.labelField]===this.loadingLabel||filteredOptions[0][this.labelField]===this.loadingErrorLabel)},activationType:"manual",anchorEl:this.anchorEl,autofocusOnSelected:!1,searchMode:this.searchMode,inputEl:this.inputEl,inputLabel:label,ref:el=>this.menu=el,fullWidth,menuId,open:!!menuRendered,options:filteredOptions,onMenuOptionSelect:this.handleOptionSelect,onMenuStateChange:this.handleMenuChange,onMenuOptionId:this.handleMenuOptionHighlight,onRetryButtonClicked:this.handleRetry,parentEl:this.el,value,labelField:this.labelField,valueField:this.valueField}))),(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"d3a4abf5d1d7ca686b696c283e86a6c84ff39f92","aria-live":"polite",role:"status",class:"search-results-status"}))}static get delegatesFocus(){return!0}get el(){return(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{disabled:["watchDisabledHandler"],debounce:["debounceChanged"],loading:["loadingHandler"],filteredOptions:["filteredOptionsHandler"],options:["watchOptionsHandler"],value:["watchValueHandler"]}}};SearchBar.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host(.ic-search-bar-search){display:block;--divider-height:1.5rem;--ic-input-label-helpertext-padding:var(--ic-space-xxs);--border-color:var(--ic-search-bar-outline);--input-bg-color:var(--ic-search-bar-background);--border-color-disabled:var(--ic-search-bar-outline-disabled);--menu-item-text-color:var(--ic-search-bar-dropdown-option-text);--menu-item-desc-text-color:var(--ic-search-bar-dropdown-option-description);--menu-bg-color:var(--ic-search-bar-dropdown-background);--menu-border-color:var(--ic-search-bar-dropdown-outline)}:host(.ic-search-bar-disabled){--ic-input-label-text-color:var(--ic-search-bar-label-disabled);--ic-input-label-helper-text-color:var(--ic-search-bar-subtitle-disabled)}:host(.ic-search-bar-search:hover){--border-color:var(--ic-search-bar-outline-hover)}:host(.ic-search-bar-search:active){--border-color:var(--ic-search-bar-outline-pressed)}:host(.ic-search-bar-search.ic-search-bar-small){--divider-height:1rem}:host(.ic-search-bar-full-width){width:100%}:host(.ic-search-bar-search) .ic-button-disabled:hover{border-color:var(--ic-architectural-200)}:host(.ic-search-bar-search.ic-search-bar-disabled) .ic-button-disabled svg{color:var(--ic-architectural-200)}:host(.ic-search-bar-search) .ic-button-disabled svg{color:var(--ic-architectural-400)}::-moz-placeholder{color:var(--ic-search-bar-placeholder-text);opacity:1}::placeholder{color:var(--ic-search-bar-placeholder-text);opacity:1}input{border:0;border-radius:var(--ic-border-radius);color:var(--ic-search-bar-filled-text);background-color:var(--input-bg-color);line-height:1.5rem;letter-spacing:0.005rem;width:100%;padding-right:var(--ic-space-xs);padding-left:var(--ic-space-xs);caret-color:var(--ic-search-bar-filled-text-cursor)}input:focus{border:0;outline:0}input:disabled{color:var(--ic-search-bar-disabled-text)}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.no-left-pad{padding-left:0}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration,input[type="search"]::-webkit-search-results-button,input[type="search"]::-webkit-search-results-decoration{display:none}input[type="search"].truncate-value{width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.clear-button-container{align-items:center;margin-right:var(--ic-space-1px);display:none;visibility:hidden}.clear-button{border-radius:var(--ic-border-radius);transition:box-shadow var(--ic-easing-transition),\n    border-radius var(--ic-easing-transition)}.clear-button:focus,.clear-button:active{background-color:var(--ic-color-focus-inner);box-shadow:inset 0 0 0 0.125rem var(--ic-color-focus-outer);border-radius:0.25rem}.clear-button-unfocused *{fill:var(--ic-search-bar-clear-button)}.clear-button:focus,.clear-button:active *{fill:var(--ic-atoms-input-clear-button-focus)}.clear-button-visible{visibility:visible;display:flex}.search-submit-button-container{display:flex;align-items:center}.search-submit-button-unfocused *{fill:var(--ic-search-bar-filled-icon)}.search-submit-button-disabled *{fill:var(--ic-search-bar-icon-disabled)}.search-submit-button-disabled .ic-tooltip-container{display:none !important}.search-submit-button:focus,.search-submit-button:active{background-color:var(--ic-color-focus-inner) !important;box-shadow:inset 0 0 0 0.125rem var(--ic-color-focus-outer) !important;border-radius:var(--ic-space-xxs)}.search-submit-button:focus,.search-submit-button:active *{fill:white}.divider{width:var(--ic-border-width);background-color:var(--ic-search-bar-dropdown-divider);height:var(--divider-height)}.menu-container{width:var(--input-width, 20rem);position:relative;top:var(--ic-space-xxxs)}.menu-container.fullwidth{width:100%}.no-results{cursor:not-allowed}.search-results-status{border:0;clip:rect(0, 0, 0, 0, 0);height:var(--ic-space-1px);margin-bottom:calc(-1 * var(--ic-space-1px));margin-right:calc(-1 * var(--ic-space-1px));overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:var(--ic-space-1px)}@media (forced-colors: active){.search-submit-button-unfocused *{fill:canvastext}.search-submit-button-disabled *{fill:GrayText}}'}}]);