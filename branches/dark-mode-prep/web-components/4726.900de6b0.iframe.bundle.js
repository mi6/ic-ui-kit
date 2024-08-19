"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[4726],{"./dist/esm/ic-select.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_select:()=>Select});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-d1d2c456.js"),_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/helpers-35ac5e03.js"),_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/esm/types-6f6b41a5.js");const Expand='<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path d="M7 9.5L12 14.5L17 9.5H7Z" fill="currentColor" />\n</svg>\n',Clear='<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">\n<path d="M12.6666 4.27334L11.7266 3.33334L7.99998 7.06001L4.27331 3.33334L3.33331 4.27334L7.05998 8.00001L3.33331 11.7267L4.27331 12.6667L7.99998 8.94001L11.7266 12.6667L12.6666 11.7267L8.93998 8.00001L12.6666 4.27334Z" fill="currentColor" />\n</svg>\n';let inputIds=0;const MUTABLE_ATTRIBUTES=[..._helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.y,"tabindex","title"],Select=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icBlur=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icBlur",7),this.icChange=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icChange",7),this.icClear=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icClear",7),this.icClose=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icClose",7),this.icFocus=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icFocus",7),this.icInput=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icInput",7),this.icOpen=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icOpen",7),this.icOptionSelect=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icOptionSelect",7),this.icRetryLoad=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icRetryLoad",7),this.hasSetDefaultValue=!1,this.inheritedAttributes={},this.initialOptionsEmpty=!1,this.inputId="ic-select-input-"+inputIds++,this.menuId=`${this.inputId}-menu`,this.searchableMenuItemSelected=!1,this.ungroupedOptions=[],this.hostMutationObserver=null,this.hostMutationCallback=mutationList=>{let forceComponentUpdate=!1;mutationList.forEach((({attributeName,type,addedNodes,removedNodes})=>{MUTABLE_ATTRIBUTES.includes(attributeName)?(this.inheritedAttributes[attributeName]=this.el.getAttribute(attributeName),forceComponentUpdate=!0):"childList"===type&&(forceComponentUpdate=(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.c)(addedNodes,removedNodes,"icon"))})),forceComponentUpdate&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.f)(this)},this.handleRetry=ev=>{var _a;ev.detail.keyPressed&&(null===(_a=this.searchableSelectElement)||void 0===_a||_a.focus()),this.blurredBecauseButtonPressed=!0,this.retryButtonClick=!0,this.hasSetDefaultValue=!0,this.icRetryLoad.emit({value:this.hiddenInputValue})},this.emitIcChange=value=>{this.searchable||(this.value=value),clearTimeout(this.debounceIcChange),this.debounceIcChange=window.setTimeout((()=>{this.icChange.emit({value})}),this.currDebounce)},this.emitImmediateIcChange=value=>{this.value=value,clearTimeout(this.debounceIcChange),this.icChange.emit({value})},this.deduplicateOptions=options=>{const uniqueValues=[],dedupedOptions=[];let dedupedChildren;return options.forEach((option=>{if(option.children){dedupedChildren=[],option.children.forEach((child=>{uniqueValues.includes(child.value)?console.warn(`ic-select with label ${this.label} was populated with duplicate option (value: ${child.value}) which has been removed.`):(uniqueValues.push(child.value),dedupedChildren.push(child))}));const modifiedParent=Object.assign(Object.assign({},option),{children:dedupedChildren});dedupedOptions.push(modifiedParent)}else uniqueValues.includes(option.value)?console.warn(`ic-select with label ${this.label} was populated with duplicate option (value: ${option.value}) which has been removed.`):(uniqueValues.push(option.value),dedupedOptions.push(option))})),dedupedOptions},this.setOptionsValuesFromLabels=()=>{var _a;(null===(_a=this.options)||void 0===_a?void 0:_a.length)>0&&this.options.map&&this.options.map((option=>{option.value||(option.value=option.label)}))},this.setUngroupedOptions=event=>{this.ungroupedOptions=event.detail.options},this.setTextColor=()=>{0===this.nativeSelectElement.selectedIndex?this.nativeSelectElement.className="placeholder":this.nativeSelectElement.className="select-option-selected"},this.setMenuChange=open=>{this.open!==open&&(this.open=open)},this.getLabelFromValue=value=>(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.E)(value,this.uniqueOptions),this.getFilteredChildMenuOptions=option=>{let children=option.children;children=this.searchable?(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.B)(option.children,this.includeDescriptionsInSearch,this.searchableSelectInputValue,this.searchMatchPosition):(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.B)(option.children,!1,this.pressedCharacters,"start");const newOption=Object.assign({},option);return newOption.children=children,newOption},this.handleNativeSelectChange=()=>{this.icOptionSelect.emit({value:this.nativeSelectElement.value}),this.emitImmediateIcChange(this.nativeSelectElement.value),this.setTextColor()},this.handleCustomSelectChange=event=>{this.searchable&&event.detail.label===this.emptyOptionListText?this.searchableSelectElement.focus():(this.searchable&&(this.value=event.detail.value,this.searchableMenuItemSelected=!0,this.value===this.currValue&&(this.searchableSelectInputValue=this.getLabelFromValue(this.value)),this.inputValueToFilter=null,this.hiddenInputValue=this.getValueFromLabel(this.searchableSelectInputValue)),this.ariaActiveDescendant=event.detail.optionId,this.icOptionSelect.emit({value:event.detail.value}),this.emitIcChange(event.detail.value))},this.handleMenuChange=event=>{this.open=event.detail.open,this.pressedCharacters="",this.searchable&&this.handleFocusIndicatorDisplay()},this.handleMenuKeyPress=ev=>{ev.cancelBubble=!0,this.handleCharacterKeyDown(ev.detail.key)},this.handleMenuValueChange=ev=>{this.value=ev.detail.value},this.handleFocusIndicatorDisplay=()=>{const focusIndicator=this.el.shadowRoot.querySelector(".focus-indicator");this.open?focusIndicator.classList.add("focus-indicator-enabled"):focusIndicator.classList.remove("focus-indicator-enabled")},this.handleMouseDown=event=>{this.open||event.preventDefault()},this.isExternalFiltering=()=>this.searchable&&this.disableAutoFiltering,this.handleClick=event=>{var _a;this.open||(this.isExternalFiltering()?this.menu.options=this.filteredOptions:this.hasTimedOut||this.loading||(null===(_a=this.noOptions)||void 0===_a?void 0:_a.length)||this.searchable&&!this.searchableMenuItemSelected||(this.noOptions=null,this.menu.options=this.uniqueOptions)),0!==event.detail&&this.menu.handleClickOpen()},this.handleExpandIconMouseDown=event=>{this.disabled||(event.preventDefault(),this.searchableSelectElement.focus(),this.handleClick(event))},this.handleClear=event=>{event.stopPropagation(),this.hasTimedOut=!1,clearTimeout(this.timeoutTimer),this.noOptions=null,this.emitImmediateIcChange(null),this.icClear.emit(),this.searchable?(this.searchableSelectElement.value=null,this.searchableSelectInputValue=null,this.filteredOptions=this.uniqueOptions,this.hiddenInputValue=null,this.searchableSelectElement.focus()):this.customSelectElement.focus()},this.handleCharacterKeyDown=key=>{!this.open||" "!==key||0!==this.pressedCharacters.length||this.hasTimedOut||this.loading||this.setMenuChange(!1),1!==key.length||this.searchable?this.pressedCharacters="":(window.clearTimeout(this.characterKeyPressTimer),this.characterKeyPressTimer=window.setTimeout((()=>this.pressedCharacters=""),1e3),this.pressedCharacters+=key,this.handleFilter(),this.noOptions||this.emitImmediateIcChange(this.filteredOptions[0].value))},this.handleNativeSelectKeyDown=event=>{("Escape"!==event.key&&"Tab"!==event.key||this.open)&&(event.cancelBubble=!0),this.handleCharacterKeyDown(event.key)},this.handleKeyDown=event=>{("Escape"!==event.key&&"Tab"!==event.key||this.open)&&(event.cancelBubble=!0);const isArrowKey="ArrowDown"===event.key||"ArrowUp"===event.key;this.open||(this.isExternalFiltering()&&("Enter"===event.key||isArrowKey)?this.menu.options=this.filteredOptions:this.hasTimedOut||(this.noOptions=null,this.menu.options=this.uniqueOptions)),this.open&&"Enter"===event.key?this.setMenuChange(!1):isArrowKey&&null!==this.noOptions||(" "===event.key&&this.pressedCharacters.length>0||this.menu.handleKeyboardOpen(event),this.handleCharacterKeyDown(event.key))},this.handleClearButtonFocus=()=>{this.clearButtonFocused=!0},this.handleClearButtonBlur=ev=>{var _a;const retryButton=null===(_a=this.menu)||void 0===_a?void 0:_a.querySelector("#retry-button");this.searchableSelectElement&&ev.relatedTarget===this.searchableSelectElement||retryButton&&ev.relatedTarget===retryButton||(this.setMenuChange(!1),this.handleFocusIndicatorDisplay()),this.clearButtonFocused=!1},this.handleFilter=()=>{var _a;const options=this.deduplicateOptions(this.searchable?[...this.uniqueOptions]:this.ungroupedOptions);let menuOptionsFiltered,isGrouped=!1,newFilteredOptions=[];options.map((option=>{option.children&&(isGrouped=!0)})),this.searchable?(menuOptionsFiltered=(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.B)(options,this.includeDescriptionsInSearch,this.inputValueToFilter,this.searchMatchPosition),this.searchableMenuItemSelected=!1):menuOptionsFiltered=(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.B)(options,!1,this.pressedCharacters,"start"),isGrouped||(null===(_a=menuOptionsFiltered[0])||void 0===_a?void 0:_a.label)===this.emptyOptionListText?isGrouped&&options.map((option=>{this.includeGroupTitlesInSearch&&-1!==menuOptionsFiltered.indexOf(option)?newFilteredOptions.push(option):newFilteredOptions.push(this.getFilteredChildMenuOptions(option))})):newFilteredOptions=menuOptionsFiltered;let noChildOptionsWhenFiltered=!1;isGrouped&&(noChildOptionsWhenFiltered=!0,newFilteredOptions.map((option=>{option.children.length>0&&(noChildOptionsWhenFiltered=!1)}))),newFilteredOptions.length>0&&!noChildOptionsWhenFiltered?(this.noOptions=null,this.filteredOptions=newFilteredOptions):(this.noOptions=[{label:this.emptyOptionListText,value:""}],this.filteredOptions=this.noOptions)},this.triggerLoading=()=>{this.hasTimedOut=!1,this.noOptions=[{label:this.loadingLabel,value:"",loading:!0}],this.filteredOptions!==this.noOptions&&this.searchable?this.filteredOptions=this.noOptions:this.uniqueOptions===this.noOptions||this.searchable||(this.uniqueOptions=this.noOptions),this.timeout&&(this.timeoutTimer=window.setTimeout((()=>{this.loading=!1,this.hasTimedOut=!0,this.noOptions=[{label:this.loadingErrorLabel,value:"",timedOut:!0}],this.filteredOptions=this.noOptions,this.searchable||(this.uniqueOptions=this.noOptions)}),this.timeout))},this.getValueFromLabel=label=>{var _a;return null===(_a=this.uniqueOptions.find((option=>option.label===label)))||void 0===_a?void 0:_a.value},this.handleSearchableSelectInput=event=>{this.searchableSelectInputValue=event.target.value,this.icInput.emit({value:this.searchableSelectInputValue}),this.emitIcChange(this.searchableSelectInputValue),this.hiddenInputValue=this.searchableSelectInputValue,this.inputValueToFilter=this.searchableSelectInputValue,this.setMenuChange(!0),this.disableAutoFiltering||(this.handleFilter(),this.debounceAriaLiveUpdate())},this.updateSearchableSelectResultAriaLive=()=>{const searchableSelectResultsStatusEl=this.el.shadowRoot.querySelector(".searchable-select-results-status");searchableSelectResultsStatusEl&&(null!==this.noOptions?searchableSelectResultsStatusEl.innerText=this.emptyOptionListText:searchableSelectResultsStatusEl.innerText="")},this.getDefaultValue=value=>this.getLabelFromValue(value)||value||null,this.onFocus=()=>{this.icFocus.emit()},this.onBlur=({relatedTarget})=>{var _a;const target=relatedTarget;if(null!==target&&("UL"===target.tagName&&target.className.includes("menu")||"LI"===target.tagName&&target.className.includes("option")))return;const retryButton=null===(_a=this.menu)||void 0===_a?void 0:_a.querySelector("#retry-button");this.searchable&&!!this.menu&&target!==this.menu&&!Array.from(this.menu.querySelectorAll("[role='option']")).includes(target)&&!(this.clearButton&&target===this.clearButton)&&!(retryButton&&target===retryButton)&&(this.retryButtonClick||this.setMenuChange(!1),this.handleFocusIndicatorDisplay()),this.retryButtonClick=!1,this.icBlur.emit()},this.onTimeoutBlur=ev=>{ev.detail.ev.relatedTarget===this.searchableSelectElement||this.blurredBecauseButtonPressed||(this.setMenuChange(!1),this.handleFocusIndicatorDisplay(),this.icBlur.emit()),this.blurredBecauseButtonPressed=!1},this.handleFormReset=()=>{this.value=this.initialValue,this.searchable&&(this.searchableSelectInputValue=this.getDefaultValue(this.value),this.hiddenInputValue=this.value)},this.ariaActiveDescendant=void 0,this.clearButtonFocused=!1,this.debounceIcChange=void 0,this.hiddenInputValue=void 0,this.noOptions=null,this.open=!1,this.pressedCharacters="",this.searchableSelectInputValue=null,this.disabled=!1,this.disableAutoFiltering=!1,this.emptyOptionListText="No results found",this.form=void 0,this.fullWidth=!1,this.helperText="",this.hideLabel=!1,this.includeDescriptionsInSearch=!1,this.includeGroupTitlesInSearch=!1,this.label=void 0,this.loadingErrorLabel="Loading Error",this.loadingLabel="Loading...",this.name=this.inputId,this.placeholder="Select an option",this.readonly=!1,this.required=!1,this.searchable=!1,this.searchMatchPosition="anywhere",this.selectOnEnter=!1,this.showClearButton=!1,this.size="default",this.timeout=void 0,this.validationStatus="",this.validationText="",this.loading=!1,this.options=[],this.filteredOptions=this.options,this.uniqueOptions=this.options,this.debounce=0,this.currDebounce=this.debounce,this.value=void 0,this.initialValue=this.value,this.inputValueToFilter=this.value,this.currValue=this.value}loadingHandler(newValue){newValue&&this.triggerLoading()}watchOptionsHandler(){var _a;this.hasTimedOut?this.searchable||(this.options=this.noOptions):(this.loading=!1,clearTimeout(this.timeoutTimer),this.isExternalFiltering()?((null===(_a=this.options)||void 0===_a?void 0:_a.length)>0?(this.setOptionsValuesFromLabels(),this.noOptions=null,this.uniqueOptions=this.deduplicateOptions(this.options),this.filteredOptions=this.uniqueOptions):(this.noOptions=[{label:this.emptyOptionListText,value:""}],this.uniqueOptions=this.noOptions,this.filteredOptions=this.noOptions),this.updateSearchableSelectResultAriaLive(),this.setDefaultValue()):(this.setOptionsValuesFromLabels(),this.uniqueOptions=this.deduplicateOptions(this.options),this.filteredOptions=this.uniqueOptions,this.initialOptionsEmpty&&(this.setDefaultValue(),this.initialOptionsEmpty=!1)))}debounceChangedHandler(newValue){this.updateOnChangeDebounce(newValue)}valueChangedHandler(){this.value!==this.currValue&&(this.currValue=this.value),this.searchable&&(this.searchableSelectInputValue=this.getLabelFromValue(this.currValue)||this.currValue)}openChangedHandler(){this.open?this.icOpen.emit():this.icClose.emit()}disconnectedCallback(){var _a;(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.n)(this.el,this.handleFormReset),null===(_a=this.hostMutationObserver)||void 0===_a||_a.disconnect()}componentWillLoad(){var _a;this.inheritedAttributes=(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.x)(this.el,MUTABLE_ATTRIBUTES),(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.k)(this.disabled,this.el),this.setOptionsValuesFromLabels(),(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.m)(this.el,this.handleFormReset),(null===(_a=this.options)||void 0===_a?void 0:_a.length)?(this.setDefaultValue(),this.uniqueOptions=this.deduplicateOptions(this.options)):(this.initialOptionsEmpty=!0,this.noOptions=[{label:this.emptyOptionListText,value:""}],this.uniqueOptions=this.noOptions,this.filteredOptions=this.noOptions)}componentDidLoad(){(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.a)([{prop:this.label,propName:"label"}],"Select"),this.loading&&this.triggerLoading(),this.hiddenInputValue=this.searchable&&this.currValue,this.hostMutationObserver=new MutationObserver(this.hostMutationCallback),this.hostMutationObserver.observe(this.el,{attributes:!0,childList:!0})}componentDidRender(){this.nativeSelectElement&&!this.disabled&&this.setTextColor()}async setFocus(){this.nativeSelectElement?this.nativeSelectElement.focus():this.customSelectElement?this.customSelectElement.focus():this.searchableSelectElement&&this.searchableSelectElement.focus()}updateOnChangeDebounce(newValue){this.currDebounce!==newValue&&(this.currDebounce=newValue)}debounceAriaLiveUpdate(){clearTimeout(this.debounceAria),window.setTimeout((()=>{this.updateSearchableSelectResultAriaLive()}),800)}setDefaultValue(){!this.hasSetDefaultValue&&this.currValue&&(this.searchableSelectInputValue=this.getDefaultValue(this.currValue),this.initialValue=this.currValue,this.hasSetDefaultValue=!0)}render(){const{size,disabled,fullWidth,helperText,hideLabel,label,menuId,name,options,placeholder,readonly,required,searchable,showClearButton,validationStatus,validationText,currValue}=this;(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.p)(!0,this.el,name,this.searchable?this.hiddenInputValue:currValue,disabled);const invalid=validationStatus===_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__.a.Error?"true":"false",describedBy=(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.s)(this.inputId,""!==helperText,(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.t)(this.validationStatus,this.disabled)).trim();let showLeftIcon=!!this.el.querySelector('[slot="icon"]');return showLeftIcon&&(disabled||readonly&&!this.value)&&(showLeftIcon=!1),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{"ic-select-disabled":disabled,"ic-select-searchable":searchable,[`ic-select-${size}`]:"default"!==size,"ic-select-full-width":fullWidth},onBlur:this.onBlur},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-container",{readonly},!hideLabel&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-label",{for:this.inputId,label,helperText,required,disabled,readonly}),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-component-container",{ref:el=>this.anchorEl=el,class:{"menu-open":this.open},size,fullWidth,disabled,readonly,validationStatus},showLeftIcon&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{slot:"left-icon",class:{readonly,"has-value":!!this.value}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"icon"})),readonly?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",null,(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("p",null,this.getLabelFromValue(currValue))):(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.F)()?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("select",Object.assign({ref:el=>this.nativeSelectElement=el,disabled,onChange:this.handleNativeSelectChange,required,id:this.inputId,"aria-label":label,"aria-describedby":describedBy,"aria-invalid":invalid,onBlur:this.onBlur,onFocus:this.onFocus,onKeyDown:this.handleNativeSelectKeyDown,form:this.form},this.inheritedAttributes),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("option",{value:"",selected:!0,disabled:!showClearButton},placeholder),options.map((option=>option.children?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("optgroup",{label:option.label},option.children.map((option=>(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("option",{value:option.value,disabled:option.disabled,selected:option.value===currValue},option.label)))):(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("option",{value:option.value,disabled:option.disabled,selected:option.value===currValue},option.label)))):searchable?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"searchable-select-container"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{class:"select-input",role:"combobox",autocomplete:"off","aria-label":label,"aria-describedby":describedBy,"aria-activedescendant":this.ariaActiveDescendant,"aria-autocomplete":"list","aria-expanded":this.open?"true":"false","aria-invalid":invalid,"aria-required":required?"true":"false","aria-controls":menuId,ref:el=>this.searchableSelectElement=el,id:this.inputId,value:this.searchableSelectInputValue,placeholder,disabled,onInput:this.handleSearchableSelectInput,onClick:this.handleClick,onKeyDown:this.handleKeyDown,onFocus:this.onFocus,onBlur:this.onBlur,form:this.form}),this.searchableSelectInputValue&&(showClearButton||searchable)&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"clear-button-container"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{id:"clear-button",ref:el=>this.clearButton=el,"aria-label":this.searchableSelectInputValue&&null===currValue?"Clear input":"Clear selection",class:"clear-button",innerHTML:Clear,onClick:this.handleClear,onFocus:this.handleClearButtonFocus,onBlur:this.handleClearButtonBlur,size,variant:"icon",appearance:this.clearButtonFocused?_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__.I.Light:_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__.I.Dark}),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"divider"})),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{onMouseDown:this.handleExpandIconMouseDown,class:{"expand-icon":!0,"expand-icon-open":this.open,"expand-icon-filled":!(null==currValue||""===currValue)},innerHTML:Expand,"aria-hidden":"true"}),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{"aria-live":"polite",role:"status",class:"searchable-select-results-status"})):(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"select-container"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{class:"select-input",ref:el=>this.customSelectElement=el,id:this.inputId,"aria-label":`${label}, ${this.getLabelFromValue(currValue)||placeholder}${required?", required":""}`,"aria-describedby":describedBy,"aria-invalid":invalid,"aria-haspopup":"listbox","aria-expanded":this.open?"true":"false","aria-owns":menuId,"aria-controls":menuId,disabled,onBlur:this.onBlur,onFocus:this.onFocus,onClick:this.handleClick,onMouseDown:this.handleMouseDown,onKeyDown:this.handleKeyDown},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"body",class:{"value-text":!0,placeholder:void 0===this.getLabelFromValue(currValue)}},this.getLabelFromValue(currValue)||placeholder),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"select-input-end"},currValue&&showClearButton&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"divider"}),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:{"expand-icon":!0,"expand-icon-open":this.open,"expand-icon-filled":!(null==currValue||""===currValue)},innerHTML:Expand,"aria-hidden":"true"}))),currValue&&showClearButton&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{id:"clear-button","aria-label":"Clear selection",class:"clear-button",innerHTML:Clear,onClick:this.handleClear,onFocus:this.handleClearButtonFocus,onBlur:this.handleClearButtonBlur,size,variant:"icon",appearance:this.clearButtonFocused?_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__.I.Light:_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__.I.Dark}))),!(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.F)()&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-menu",{class:{"no-results":this.loading||this.hasTimedOut||null!==this.noOptions&&this.noOptions[0]&&this.noOptions[0].label===this.emptyOptionListText},ref:el=>this.menu=el,inputEl:searchable?this.searchableSelectElement:this.customSelectElement,inputLabel:label,anchorEl:this.anchorEl,size,menuId,open:this.open,options:searchable?this.filteredOptions:this.uniqueOptions,value:currValue,fullWidth,selectOnEnter:this.selectOnEnter,onMenuStateChange:this.handleMenuChange,onMenuOptionSelect:this.handleCustomSelectChange,onMenuKeyPress:this.handleMenuKeyPress,onMenuValueChange:this.handleMenuValueChange,onUngroupedOptionsSet:this.setUngroupedOptions,onRetryButtonClicked:this.handleRetry,parentEl:this.el,onTimeoutBlur:this.onTimeoutBlur,activationType:this.searchable||this.selectOnEnter?"manual":"automatic"}),(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.t)(this.validationStatus,this.disabled)&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-validation",{class:{"menu-open":this.open},ariaLiveMode:"polite",status:validationStatus,message:validationText,for:this.inputId})))}static get delegatesFocus(){return!0}get el(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{loading:["loadingHandler"],options:["watchOptionsHandler"],debounce:["debounceChangedHandler"],value:["valueChangedHandler"],open:["openChangedHandler"]}}};Select.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;position:relative}:host(.ic-select-full-width){width:100%}ic-input-component-container:hover{--border-color:var(--ic-action-dark-hover)}ic-input-component-container:active{--border-color:var(--ic-action-dark-active);color:var(--ic-action-dark-active)}ic-input-component-container.menu-open{--border-color:var(--ic-architectural-400);color:var(--ic-action-dark)}ic-input-validation .status-icon,ic-input-validation .statustext{visibility:visible}ic-input-validation.menu-open .status-icon,ic-input-validation.menu-open .statustext{visibility:hidden;transition:visibility 0s}ic-input-label{margin-bottom:var(--ic-space-xs) !important}select{border:0;border-radius:var(--ic-border-radius);background-color:var(--ic-architectural-white);color:var(--ic-color-primary-text);line-height:1.5rem;letter-spacing:0.005rem;width:100%;height:100%;padding-left:0.375rem;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-repeat:no-repeat;background-position:right 0.375rem center;background-image:url("data:image/svg+xml;utf8,<svg fill=\'black\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/><path d=\'M0 0h24v24H0z\' fill=\'none\'/></svg>")}select option,.select-option-selected{color:var(--ic-color-primary-text)}select:disabled{color:var(--ic-architectural-200);background-image:url("data:image/svg+xml;utf8,<svg fill=\'grey\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/><path d=\'M0 0h24v24H0z\' fill=\'none\'/></svg>")}select:focus{border:0;outline:0}select:not([disabled]){cursor:pointer}.select-container{width:100%;display:flex;align-items:center;position:relative}.select-input{width:100%;height:100%;padding:0 0.375rem;display:flex;cursor:pointer;align-items:center;justify-content:space-between;background:none;border:none}.select-input:focus{outline:var(--ic-hc-focus-outline)}:host(:not(.ic-select-disabled)) ic-input-component-container:hover .select-input{background-color:var(--ic-architectural-white)}.select-input[disabled]{pointer-events:none}:host(.ic-select-searchable) .select-input{cursor:auto}.searchable-select-container{align-items:center;display:flex;width:100%;position:relative}.expand-icon{height:var(--ic-space-lg);padding-left:var(--ic-space-xs);color:var(--ic-action-dark)}.expand-icon>svg{display:inline-block;width:var(--ic-space-lg);height:var(--ic-space-lg)}:host(.ic-select-disabled) .expand-icon,:host(.ic-select-disabled) .expand-icon>svg>path{color:var(--ic-architectural-200)}:host(.ic-select-searchable) .expand-icon{padding-left:var(--ic-space-xxs);height:2.25rem}:host(.ic-select-searchable) .expand-icon>svg{height:2.25rem;padding:0 0.375rem}:host(.ic-select-searchable:not(.ic-select-disabled)) .expand-icon>svg{cursor:pointer}.expand-icon-open{color:var(--ic-action-dark)}.expand-icon-filled{color:var(--ic-action-dark)}.expand-icon-open,:host(.ic-select-searchable) .expand-icon-open{transform:rotateX(180deg)}:host(.ic-select-disabled) .value-text,.placeholder{color:var(--ic-color-tertiary-text)}.select-input-end{display:flex;align-items:center}.clear-button-container{display:flex;gap:var(--ic-space-xxs);padding-left:2.375rem;align-items:center}:host(.ic-select-small) .clear-button-container{padding-left:1.875rem}.divider{width:var(--ic-border-width);background-color:var(--ic-architectural-400);margin:var(--ic-space-xxs) 0;border-radius:var(--ic-space-1px);height:var(--ic-space-lg)}:host(.ic-select-small) .divider{height:var(--ic-space-md)}.clear-button{position:absolute;right:2.75rem;border-radius:var(--ic-border-radius);transition:box-shadow var(--ic-easing-transition),\n    border-radius var(--ic-easing-transition)}.clear-button:focus{background-color:var(--ic-focus-blue);box-shadow:inset 0 0 0 0.125rem var(--ic-focus-glow);border-radius:0.25rem}.clear-button:focus *{fill:white}.searchable-select-results-status{border:0;clip:rect(0, 0, 0, 0, 0);height:var(--ic-space-1px);overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:var(--ic-space-1px)}::slotted([slot="icon"]){fill:var(--ic-color-tertiary-text)}.has-value ::slotted([slot="icon"]){fill:var(--ic-color-primary-text)}.readonly ::slotted([slot="icon"]){padding:0.375rem;margin-bottom:0.75rem}@media (forced-colors: active){.has-value ::slotted([slot="icon"]){fill:currentcolor}}'}}]);