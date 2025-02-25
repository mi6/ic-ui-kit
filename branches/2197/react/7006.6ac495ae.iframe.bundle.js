/*! For license information please see 7006.6ac495ae.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[7006],{"../web-components/dist/esm/ic-search-bar.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_search_bar:()=>SearchBar});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js"),_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../web-components/dist/esm/helpers-c7b7c2d9.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==_typeof(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(_typeof(e)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}var inputIds=0,SearchBar=function(){return function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}((function SearchBar(hostRef){var _this=this;!function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}(this,SearchBar),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icChange=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icChange",7),this.icClear=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icClear",7),this.icInput=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icInput",7),this.icInputBlur=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icInputBlur",7),this.icInputFocus=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icInputFocus",7),this.icOptionSelect=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icOptionSelect",7),this.icMenuChange=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icMenuChange",7),this.icClearBlur=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icClearBlur",7),this.icRetryLoad=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icRetryLoad",7),this.icSubmitSearch=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icSubmitSearch",7),this.icSubmitSearchBlur=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icSubmitSearchBlur",7),this.icSearchBarBlur=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icSearchBarBlur",7),this.icSearchBarFocus=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icSearchBarFocus",7),this.assistiveHintEl=null,this.hasTimedOut=!1,this.inputId="ic-search-bar-input-".concat(inputIds++),this.menuCloseFromMenuChangeEvent=!1,this.menuId="".concat(this.inputId,"-menu"),this.preLoad=!0,this.preventSubmit=!1,this.prevNoOption=!1,this.retryButtonClick=!1,this.truncateValue=!1,this.handleClear=function(ev){var keyboardEvent=ev;"click"!==ev.type&&"Enter"!==keyboardEvent.code&&"Space"!==keyboardEvent.code||(_this.value="",_this.inputEl.value="",_this.loading=!1,clearTimeout(_this.timeoutTimer),_this.filteredOptions=_this.options,_this.el.setFocus(),_this.icClear.emit(),ev.preventDefault(),_this.preventSubmit=!0)},this.onInput=function(ev){_this.value=ev.target.value;var noOptions=[_defineProperty(_defineProperty({},_this.labelField,_this.emptyOptionListText),_this.valueField,"")];if(_this.options.length>0&&(_this.setMenuChange(!0),_this.preLoad=!1,!1===_this.disableFilter)){var rawFilteredOptions=(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_2__.B)(_this.options,!1,_this.value,"anywhere",_this.labelField);_this.filteredOptions=rawFilteredOptions.length>0?rawFilteredOptions:noOptions}_this.showClearButton||_this.handleShowClearButton(!0),_this.debounceAriaLiveUpdate()},this.onInputBlur=function(ev){var value=ev.target.value,nextFocus=ev.relatedTarget;_this.icInputBlur.emit({value,relatedTarget:nextFocus})},this.onInputFocus=function(ev){var value=ev.target.value;_this.icInputFocus.emit({value}),_this.handleShowClearButton(!0)},this.handleClearBlur=function(ev){var nextFocus=ev.relatedTarget;_this.icClearBlur.emit({relatedTarget:nextFocus}),_this.clearButtonFocused=!1},this.handleSubmitSearchBlur=function(ev){var nextFocus=ev.relatedTarget;_this.icSubmitSearchBlur.emit({relatedTarget:nextFocus}),_this.searchSubmitFocused=!1},this.handleMouseDown=function(ev){ev.preventDefault()},this.handleSubmitSearchFocus=function(){_this.searchSubmitFocused=!0},this.handleSubmitSearch=function(){_this.highlightedValue&&(_this.value=_this.highlightedValue),_this.highlightedValue=void 0,_this.icSubmitSearch.emit({value:_this.value});var form=_this.el.closest("FORM");_this.searchSubmitButton&&form&&!_this.preventSubmit&&(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_2__.C)(form,_this.searchSubmitButton)},this.handleSubmitSearchKeyDown=function(ev){" "===ev.key&&(ev.preventDefault(),_this.handleSubmitSearch())},this.handleRetry=function(ev){_this.retryViaKeyPress="Enter"===ev.detail.keyPressed,_this.icRetryLoad.emit({value:ev.detail.value}),_this.triggerLoading(),_this.retryButtonClick=!0},this.triggerLoading=function(){var loadingOption=[_defineProperty(_defineProperty(_defineProperty({},_this.labelField,_this.loadingLabel),_this.valueField,""),"loading",!0)];_this.filteredOptions!==loadingOption&&(_this.filteredOptions=loadingOption),_this.timeout&&(_this.timeoutTimer=window.setTimeout((function(){_this.filteredOptions=[_defineProperty(_defineProperty(_defineProperty({},_this.labelField,_this.loadingErrorLabel),_this.valueField,""),"timedOut",!0)]}),_this.timeout))},this.handleOptionSelect=function(ev){ev.detail.label!==_this.emptyOptionListText?(_this.value=ev.detail.value,_this.icOptionSelect.emit({value:_this.value})):_this.el.setFocus()},this.handleMenuOptionHighlight=function(ev){var _a,optionValue=null===(_a=ev.detail.optionId)||void 0===_a?void 0:_a.replace("".concat(_this.menuId,"-"),"");optionValue&&(_this.highlightedValue=optionValue),ev.detail.optionId?_this.ariaActiveDescendant=ev.detail.optionId:_this.ariaActiveDescendant=void 0},this.handleMenuChange=function(ev){_this.setMenuChange(ev.detail.open),ev.detail.open||(_this.handleMenuCloseFromMenuChange(!0),(void 0===ev.detail.focusInput||ev.detail.focusInput)&&_this.el.setFocus())},this.setMenuChange=function(open){_this.open!==open&&(_this.open=open,_this.icMenuChange.emit({open}))},this.handleHostFocus=function(){_this.options&&_this.value&&!_this.menuCloseFromMenuChangeEvent&&_this.setMenuChange(!0),_this.handleTruncateValue(!1),_this.icSearchBarFocus.emit()},this.handleHostBlur=function(ev){var nextFocus=ev.relatedTarget;_this.open&&_this.options&&nextFocus!==_this.menu&&!_this.retryViaKeyPress&&!_this.retryButtonClick&&_this.setMenuChange(!1),(_this.retryButtonClick||_this.retryViaKeyPress)&&_this.inputEl.setFocus(),_this.handleShowClearButton(!1),_this.handleMenuCloseFromMenuChange(!1),_this.handleTruncateValue(!0),_this.icSearchBarBlur.emit({relatedTarget:nextFocus,value:_this.value}),_this.retryViaKeyPress=!1,_this.retryButtonClick=!1},this.handleShowClearButton=function(visible){_this.showClearButton=visible},this.handleFocusClearButton=function(){_this.clearButtonFocused=!0},this.handleMenuCloseFromMenuChange=function(fromEvent){_this.menuCloseFromMenuChangeEvent=fromEvent},this.handleTruncateValue=function(truncate){_this.truncateValue=truncate},this.renderAssistiveHintEl=function(){var _a,_b,input=null===(_b=null===(_a=_this.el.shadowRoot.querySelector("ic-text-field"))||void 0===_a?void 0:_a.shadowRoot)||void 0===_b?void 0:_b.querySelector("#".concat(_this.inputId));input&&Object.keys(input).length>0&&_this.hasOptionsOrFilterDisabled()&&(_this.assistiveHintEl=document.createElement("span"),_this.assistiveHintEl.innerText=_this.hintText,_this.assistiveHintEl.id="".concat(_this.inputId,"-assistive-hint"),_this.assistiveHintEl.style.display="none",void 0!==input.after&&input.after(_this.assistiveHintEl))},this.updateSearchResultAriaLive=function(){var searchResultsStatusEl=_this.el.shadowRoot.querySelector(".search-results-status");searchResultsStatusEl&&(!_this.open||""===_this.value||_this.value.length<_this.charactersUntilSuggestion?searchResultsStatusEl.innerText="":_this.hasOptionsOrFilterDisabled()&&_this.filteredOptions.length>0&&_this.open&&!_this.filteredOptions[0].loading&&(_this.hadNoOptions()?searchResultsStatusEl.innerText=_this.emptyOptionListText:searchResultsStatusEl.innerText="".concat(_this.filteredOptions.length," result").concat(_this.filteredOptions.length>1?"s":""," available")))},this.hasOptionsOrFilterDisabled=function(){return _this.options.length>0||_this.disableFilter},this.hadNoOptions=function(){return 1===_this.filteredOptions.length&&_this.filteredOptions[0][_this.labelField]===_this.emptyOptionListText&&"navigation"===_this.searchMode},this.isSubmitDisabled=function(){var valueNotSet=void 0===_this.value||null===_this.value||""===_this.value,valueLengthLess=_this.value.length<_this.charactersUntilSuggestion;return valueNotSet||valueLengthLess||_this.disabled||_this.hadNoOptions()||_this.hasTimedOut||_this.loading},this.highlightFirstOptionAfterNoResults=function(){_this.prevNoOption&&_this.menu&&!_this.hasTimedOut&&(_this.menu.handleSetFirstOption(),_this.prevNoOption=!1),_this.filteredOptions.find((function(filteredOption){return filteredOption[_this.labelField]===_this.emptyOptionListText||filteredOption[_this.labelField]===_this.loadingErrorLabel||filteredOption[_this.labelField]===_this.loadingLabel}))&&(_this.prevNoOption=!0)},this.ariaActiveDescendant=void 0,this.clearButtonFocused=!1,this.highlightedValue=void 0,this.open=!1,this.searchSubmitFocused=!1,this.showClearButton=!1,this.autocapitalize="off",this.autocomplete="off",this.autocorrect="off",this.autofocus=!1,this.charactersUntilSuggestion=2,this.disabled=!1,this.disableFilter=!1,this.debounce=0,this.emptyOptionListText="No results found",this.focusOnLoad=!1,this.fullWidth=!1,this.helperText="",this.hideLabel=!1,this.hintText="When autocomplete results are available use the up and down arrows to choose and press enter to select",this.label=void 0,this.labelField="label",this.loading=!1,this.loadingErrorLabel="Loading Error",this.loadingLabel="Loading...",this.name=this.inputId,this.placeholder="Search",this.readonly=!1,this.required=!1,this.searchMode="navigation",this.size="default",this.small=!1,this.spellcheck=!1,this.timeout=void 0,this.valueField="value",this.filteredOptions=[],this.options=[],this.value=""}),[{key:"watchDisabledHandler",value:function watchDisabledHandler(){(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_2__.r)(this.disabled,this.el)}},{key:"loadingHandler",value:function loadingHandler(newValue){newValue&&!this.hasTimedOut&&(this.preLoad=!1,this.triggerLoading())}},{key:"filteredOptionsHandler",value:function filteredOptionsHandler(newOptions){this.hasTimedOut=newOptions.some((function(opt){return opt.timedOut}))}},{key:"watchOptionsHandler",value:function watchOptionsHandler(newOptions){if(this.disableFilter&&!this.hasTimedOut)if(this.loading=!1,clearTimeout(this.timeoutTimer),newOptions.length>0)this.filteredOptions=newOptions;else{if(this.hadNoOptions())return;this.setMenuChange(!0),!this.preLoad&&(this.filteredOptions=[_defineProperty(_defineProperty({},this.labelField,this.emptyOptionListText),this.valueField,"")]),this.preLoad=!0}this.debounceAriaLiveUpdate()}},{key:"watchValueHandler",value:function watchValueHandler(newValue){this.inputEl&&this.options&&(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_2__.E)(newValue,this.options,this.valueField,this.labelField)?this.inputEl.value=(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_2__.E)(newValue,this.options,this.valueField,this.labelField):this.inputEl&&this.inputEl.value!==newValue&&(this.inputEl.value=newValue)}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.assistiveHintEl&&this.assistiveHintEl.remove()}},{key:"componentWillLoad",value:function componentWillLoad(){this.watchValueHandler(this.value),(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_2__.r)(this.disabled,this.el),this.small&&(this.size="small")}},{key:"componentDidLoad",value:function componentDidLoad(){var _a;this.focusOnLoad&&this.el.setFocus(),this.hasOptionsOrFilterDisabled()&&(this.renderAssistiveHintEl(),this.disableFilter&&(this.filteredOptions=this.options)),(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_2__.a)([{prop:this.label,propName:"label"}],"Search Bar"),void 0!==this.inputEl&&(this.anchorEl=null===(_a=this.inputEl.shadowRoot)||void 0===_a?void 0:_a.querySelector("ic-input-component-container"))}},{key:"componentWillRender",value:function componentWillRender(){this.highlightFirstOptionAfterNoResults()}},{key:"handleKeyDown",value:function handleKeyDown(ev){var keyEv=ev.detail.event;this.menu&&this.open&&this.menu.handleKeyboardOpen(keyEv)}},{key:"handleKeyUp",value:function handleKeyUp(ev){if("Enter"===ev.key){if(this.preventSubmit||this.isSubmitDisabled())return;this.handleSubmitSearch(),this.setMenuChange(!1)}"Escape"===ev.key&&this.setMenuChange(!1),this.preventSubmit&&(this.preventSubmit=!1)}},{key:"setFocus",value:(_setFocus=function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(){return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:this.retryViaKeyPress=!1,this.retryButtonClick=!1,this.inputEl&&this.inputEl.setFocus();case 3:case"end":return _context.stop()}}),_callee,this)}))),function setFocus(){return _setFocus.apply(this,arguments)})},{key:"debounceAriaLiveUpdate",value:function debounceAriaLiveUpdate(){var _this2=this;clearTimeout(this.debounceAriaLive),this.debounceAriaLive=window.setTimeout((function(){_this2.updateSearchResultAriaLive()}),500)}},{key:"render",value:function render(){var describedById,_this3=this,inputId=this.inputId,name=this.name,label=this.label,required=this.required,small=this.small,size=this.size,placeholder=this.placeholder,helperText=this.helperText,disabled=this.disabled,value=this.value,readonly=this.readonly,spellcheck=this.spellcheck,fullWidth=this.fullWidth,options=this.options,open=this.open,hideLabel=this.hideLabel,menuId=this.menuId,ariaActiveDescendant=this.ariaActiveDescendant,truncateValue=this.truncateValue,autofocus=this.autofocus,autocapitalize=this.autocapitalize,autocomplete=this.autocomplete,filteredOptions=this.filteredOptions,disabledMode=readonly||disabled,describedBy=(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_2__.s)(inputId,""!==helperText,!1).trim();describedById=""!==describedBy&&this.hasOptionsOrFilterDisabled()?"".concat(describedBy," ").concat(this.inputId,"-assistive-hint"):this.hasOptionsOrFilterDisabled()?"".concat(this.inputId,"-assistive-hint"):""!==describedBy?describedBy:void 0;var hasSuggestedSearch=!!value&&this.hasOptionsOrFilterDisabled(),menuOpen=hasSuggestedSearch&&open&&filteredOptions.length>0,menuRendered=menuOpen&&value.length>=this.charactersUntilSuggestion,labelValue=(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_2__.E)(value,options,this.valueField,this.labelField);return(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_2__.p)(!0,this.el,name,value,disabledMode),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{search:!0,fullwidth:fullWidth,disabled,small:"small"===size},onFocus:this.handleHostFocus,onBlur:this.handleHostBlur},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-text-field",{ref:function ref(el){return _this3.inputEl=el},inputId,label,helperText,required,disabled:disabledMode&&!readonly,readonly,size,hideLabel,fullWidth,name,truncateValue,value:options&&labelValue?labelValue:value,placeholder,onInput:this.onInput,onBlur:this.onInputBlur,onFocus:this.onInputFocus,"aria-label":hideLabel?label:"","aria-describedby":describedById,"aria-owns":menuRendered?menuId:void 0,"aria-controls":menuRendered?menuId:void 0,"aria-haspopup":options.length>0?"listbox":void 0,ariaExpanded:options.length>0?"".concat(menuOpen):void 0,ariaActiveDescendant,"aria-autocomplete":hasSuggestedSearch?"list":void 0,role:options.length>0?"combobox":void 0,autocomplete,autocapitalize,autoFocus:autofocus,spellcheck,inputmode:"search",debounce:this.debounce},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"clear-button-container":!0,"clear-button-visible":value&&!disabledMode&&this.showClearButton},slot:"clear-button"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{id:"clear-button",class:"clear-button","aria-label":"Clear",innerHTML:'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M15.8327 5.34199L14.6577 4.16699L9.99935 8.82533L5.34102 4.16699L4.16602 5.34199L8.82435 10.0003L4.16602 14.6587L5.34102 15.8337L9.99935 11.1753L14.6577 15.8337L15.8327 14.6587L11.1743 10.0003L15.8327 5.34199Z" fill="currentColor"/>\n</svg>\n',onClick:this.handleClear,onMouseDown:this.handleMouseDown,size,onFocus:this.handleFocusClearButton,onBlur:this.handleClearBlur,onKeyDown:this.handleClear,type:"submit",variant:"icon",appearance:this.clearButtonFocused?_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_1__.I.Light:_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_1__.I.Dark}),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"divider"})),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"search-submit-button-container":!0,"search-submit-button-disabled":this.isSubmitDisabled()},slot:"search-submit-button"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{id:"search-submit-button","aria-label":"Search",ref:function ref(el){return _this3.searchSubmitButton=el},class:_defineProperty(_defineProperty({},"search-submit-button",!0),"search-submit-button-small",!!small),disabled:this.isSubmitDisabled(),innerHTML:'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">\n    <path d="M13.1292 11.8792H12.4708L12.2375 11.6542C13.0542 10.7042 13.5458 9.47083 13.5458 8.12916C13.5458 5.13749 11.1208 2.71249 8.12916 2.71249C5.13749 2.71249 2.71249 5.13749 2.71249 8.12916C2.71249 11.1208 5.13749 13.5458 8.12916 13.5458C9.47083 13.5458 10.7042 13.0542 11.6542 12.2375L11.8792 12.4708V13.1292L16.0458 17.2875L17.2875 16.0458L13.1292 11.8792ZM8.12916 11.8792C6.05416 11.8792 4.37916 10.2042 4.37916 8.12916C4.37916 6.05416 6.05416 4.37916 8.12916 4.37916C10.2042 4.37916 11.8792 6.05416 11.8792 8.12916C11.8792 10.2042 10.2042 11.8792 8.12916 11.8792Z" fill="currentColor"/>\n</svg>',size,onClick:this.handleSubmitSearch,onMouseDown:this.handleMouseDown,onBlur:this.handleSubmitSearchBlur,onFocus:this.handleSubmitSearchFocus,onKeyDown:this.handleSubmitSearchKeyDown,type:"submit",variant:"icon",appearance:this.searchSubmitFocused?_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_1__.I.Light:_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_1__.I.Default})),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"menu-container":!0,fullwidth:fullWidth},slot:"menu"},menuRendered&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-menu",{class:{"no-results":this.hadNoOptions()||1===filteredOptions.length&&(filteredOptions[0][this.labelField]===this.loadingLabel||filteredOptions[0][this.labelField]===this.loadingErrorLabel)},activationType:"manual",anchorEl:this.anchorEl,autoFocusOnSelected:!1,searchMode:this.searchMode,inputEl:this.inputEl,inputLabel:label,ref:function ref(el){return _this3.menu=el},small:"small"===size,fullWidth,menuId,open:!!menuRendered,options:filteredOptions,onMenuOptionSelect:this.handleOptionSelect,onMenuStateChange:this.handleMenuChange,onMenuOptionId:this.handleMenuOptionHighlight,onRetryButtonClicked:this.handleRetry,parentEl:this.el,value,labelField:this.labelField,valueField:this.valueField}))),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{"aria-live":"polite",role:"status",class:"search-results-status"}))}},{key:"el",get:function get(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}}],[{key:"delegatesFocus",get:function get(){return!0}},{key:"watchers",get:function get(){return{disabled:["watchDisabledHandler"],loading:["loadingHandler"],filteredOptions:["filteredOptionsHandler"],options:["watchOptionsHandler"],value:["watchValueHandler"]}}}]);var _setFocus}();SearchBar.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host(.search){--divider-height:1.5rem;--ic-input-label-helpertext-padding:var(--ic-space-xxs)}:host(.search.small){--divider-height:1rem}:host(.fullwidth){width:100%}:host(.search) .disabled:hover{border-color:var(--ic-architectural-200)}:host(.search.disabled) .disabled svg{color:var(--ic-architectural-200)}:host(.search) .disabled svg{color:var(--ic-architectural-400)}.clear-button-container{align-items:center;margin-right:var(--ic-space-1px);display:none;visibility:hidden}.clear-button{border-radius:var(--ic-border-radius);transition:box-shadow var(--ic-easing-transition),\n    border-radius var(--ic-easing-transition)}.clear-button:focus,.clear-button:active{background-color:var(--ic-focus-blue);box-shadow:inset 0 0 0 0.125rem var(--ic-focus-glow);border-radius:0.25rem}.clear-button:focus,.clear-button:active *{fill:white}.clear-button-visible{visibility:visible;display:flex}.search-submit-button-container{display:flex;align-items:center}.search-submit-button-disabled .ic-tooltip-container{display:none !important}.search-submit-button:focus,.search-submit-button:active{background-color:var(--ic-focus-blue) !important;box-shadow:inset 0 0 0 0.125rem var(--ic-focus-glow) !important;border-radius:var(--ic-space-xxs)}.search-submit-button:focus,.search-submit-button:active *{fill:white}.divider{width:var(--ic-border-width);background-color:var(--ic-action-dark-active);height:var(--divider-height)}:host(.dark) .divider{background-color:var(--ic-architectural-200)}.menu-container{width:var(--input-width, 20rem);position:relative;top:var(--ic-space-xxxs)}.menu-container.fullwidth{width:100%}.no-results{cursor:not-allowed}.search-results-status{border:0;clip:rect(0, 0, 0, 0, 0);height:var(--ic-space-1px);margin-bottom:calc(-1 * var(--ic-space-1px));margin-right:calc(-1 * var(--ic-space-1px));overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:var(--ic-space-1px)}'}}]);