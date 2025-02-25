/*! For license information please see 6816.10b4426d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[6816],{"../web-components/dist/esm/ic-text-field.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_text_field:()=>TextField});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js"),_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../web-components/dist/esm/helpers-c7b7c2d9.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==_typeof(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(_typeof(e)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var inputIds=0,MUTABLE_ATTRIBUTES=[].concat(function _toConsumableArray(r){return function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}(r)||function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_2__.z),["title"]),TextField=function(){return function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}((function TextField(hostRef){var _this=this;!function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}(this,TextField),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.getValidationText=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"getValidationText",7),this.icBlur=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icBlur",7),this.icChange=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icChange",7),this.icFocus=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icFocus",7),this.icInput=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icInput",7),this.icKeydown=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icKeydown",7),this.inheritedAttributes={},this.hostMutationObserver=null,this.getNumberOfCharacters=function(value){return null!=value?value.length:0},this.getMaxLengthExceeded=function(value){_this.numChars=_this.getNumberOfCharacters(value),"number"===_this.type&&(_this.minValueUnattained=value&&Number(value)<Number(_this.min),_this.maxValueExceeded=Number(value)>Number(_this.max)),_this.maxLength>0&&(_this.maxLengthExceeded=_this.numChars>_this.maxLength)},this.getMaxCharactersReached=function(value){_this.numChars=_this.getNumberOfCharacters(value),_this.maxCharactersReached=_this.maxCharacters>0&&_this.numChars>=_this.maxCharacters,_this.maxCharactersError&&!_this.maxCharactersReached&&(_this.maxCharactersError=!1)},this.onInput=function(ev){_this.value=ev.target.value,_this.icInput.emit({value:_this.value})},this.onBlur=function(ev){var value=ev.target.value;_this.numChars=value.length,_this.minCharactersUnattained=_this.minCharacters>0&&_this.numChars<_this.minCharacters,_this.icBlur.emit({value})},this.onFocus=function(ev){_this.icFocus.emit({value:ev.target.value})},this.hasStatus=function(status){return""!==status&&!_this.disabled},this.handleFormReset=function(){_this.value=_this.initialValue},this.hostMutationCallback=function(mutationList){var forceComponentUpdate=!1;mutationList.forEach((function(_ref){var attributeName=_ref.attributeName,type=_ref.type,addedNodes=_ref.addedNodes,removedNodes=_ref.removedNodes;MUTABLE_ATTRIBUTES.includes(attributeName)?(_this.inheritedAttributes[attributeName]=_this.el.getAttribute(attributeName),forceComponentUpdate=!0):"childList"===type&&(forceComponentUpdate=(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_2__.F)(addedNodes,removedNodes,"icon"))})),forceComponentUpdate&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.f)(_this)},this.showValidation=function(){var maxNumChars=_this.readonly?0:_this.maxLength,emptyString=(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_2__.H)(_this.validationStatus)||(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_2__.H)(_this.validationText),valueOutsideRange=_this.minValueUnattained||_this.maxValueExceeded,charOutsideRange=maxNumChars>0||_this.maxCharactersError||_this.minCharactersUnattained;return(!emptyString||valueOutsideRange||charOutsideRange)&&!_this.validationInlineInternal},this.numChars=0,this.maxCharactersReached=!1,this.maxCharactersError=!1,this.minCharactersUnattained=!1,this.maxLengthExceeded=!1,this.maxValueExceeded=!1,this.minValueUnattained=!1,this.ariaActiveDescendant=void 0,this.ariaAutocomplete=void 0,this.ariaExpanded=void 0,this.ariaOwns=void 0,this.autocapitalize="off",this.autocomplete="off",this.autocorrect="off",this.autoFocus=!1,this.disabled=!1,this.fullWidth=!1,this.helperText="",this.hideLabel=!1,this.hiddenInput=!0,this.inputId="ic-text-field-input-".concat(inputIds++),this.inputmode="text",this.label=void 0,this.max=void 0,this.maxCharacters=0,this.maxLength=0,this.maxLengthMessage="Maximum length exceeded",this.min=void 0,this.minCharacters=0,this.name=this.inputId,this.placeholder="",this.readonly=!1,this.required=!1,this.resize=!1,this.role=void 0,this.rows=1,this.size="default",this.small=!1,this.spellcheck=!1,this.truncateValue=void 0,this.type="text",this.validationInline=!1,this.validationInlineInternal=!1,this.validationStatus="",this.validationText="",this.debounce=0,this.value="",this.initialValue=this.value}),[{key:"watchDisabledHandler",value:function watchDisabledHandler(){(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_2__.r)(this.disabled,this.el)}},{key:"debounceChanged",value:function debounceChanged(){this.icChange=(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_2__.P)(this.icChange,this.debounce)}},{key:"watchValueHandler",value:function watchValueHandler(newValue){this.inputEl&&this.inputEl.value!==newValue&&(this.inputEl.value=newValue),this.getMaxLengthExceeded(newValue),this.getMaxCharactersReached(newValue),this.icChange.emit({value:newValue})}},{key:"connectedCallback",value:function connectedCallback(){this.debounceChanged()}},{key:"disconnectedCallback",value:function disconnectedCallback(){var _a;(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_2__.n)(this.el,this.handleFormReset),null===(_a=this.hostMutationObserver)||void 0===_a||_a.disconnect()}},{key:"componentWillLoad",value:function componentWillLoad(){this.value!==this.initialValue&&this.watchValueHandler(this.value),this.getMaxLengthExceeded(this.value),this.getMaxCharactersReached(this.value),this.inheritedAttributes=(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_2__.y)(this.el,MUTABLE_ATTRIBUTES),this.readonly&&(this.maxLengthExceeded=!1,this.maxValueExceeded=!1,this.minValueUnattained=!1),(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_2__.m)(this.el,this.handleFormReset),(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_2__.r)(this.disabled,this.el)}},{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_2__.a)([{prop:this.label,propName:"label"}],"Text Field"),this.validationInlineInternal&&this.getValidationText.emit({value:this.validationText}),this.hostMutationObserver=new MutationObserver(this.hostMutationCallback),this.hostMutationObserver.observe(this.el,{attributes:!0,childList:!0})}},{key:"handleKeyDown",value:function handleKeyDown(ev){this.icKeydown.emit({event:ev}),this.maxCharactersError=this.maxCharactersReached}},{key:"setFocus",value:(_setFocus=function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(){var _a;return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:null===(_a=this.inputEl)||void 0===_a||_a.focus();case 1:case"end":return _context.stop()}}),_callee,this)}))),function setFocus(){return _setFocus.apply(this,arguments)})},{key:"render",value:function render(){var _this2=this,inputId=this.inputId,name=this.name,label=this.label,required=this.required,size=this.size,small=this.small,placeholder=this.placeholder,helperText=this.helperText,rows=this.rows,resize=this.resize,disabled=this.disabled,value=this.value,min=this.min,max=this.max,maxLength=this.maxLength,numChars=this.numChars,readonly=this.readonly,maxLengthExceeded=this.maxLengthExceeded,maxCharacters=this.maxCharacters,maxCharactersError=this.maxCharactersError,maxCharactersReached=this.maxCharactersReached,minCharacters=this.minCharacters,minCharactersUnattained=this.minCharactersUnattained,minValueUnattained=this.minValueUnattained,maxValueExceeded=this.maxValueExceeded,validationStatus=this.validationStatus,validationText=this.validationText,validationInline=this.validationInline,validationInlineInternal=this.validationInlineInternal,spellcheck=this.spellcheck,inputmode=this.inputmode,fullWidth=this.fullWidth,truncateValue=this.truncateValue,hiddenInput=this.hiddenInput,showValidation=this.showValidation,disabledMode=readonly||disabled,currentStatus=maxLengthExceeded||maxValueExceeded||minValueUnattained||minCharactersUnattained||maxCharactersError?maxCharactersError?_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_1__.a.Warning:_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_1__.a.Error:validationStatus,currentValidationText=maxLengthExceeded?this.maxLengthMessage:maxCharactersError?"Maximum input is ".concat(maxCharacters," characters"):maxValueExceeded?"Maximum value of ".concat(max," exceeded"):minValueUnattained?"Minimum value of ".concat(min," not met"):minCharactersUnattained?"Minimum input is ".concat(minCharacters," characters"):validationText,maxNumChars=readonly?0:maxLength,messageAriaLive=maxLengthExceeded||maxCharactersError||maxValueExceeded||minValueUnattained||0===maxLength&&currentStatus===_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_1__.a.Error?"assertive":"polite",showStatusText=this.hasStatus(currentStatus)&&!(currentStatus==_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_1__.a.Success&&validationInline)&&!validationInlineInternal,multiline=rows>1,hiddenCharCountDescId=maxLength>0?"".concat(inputId,"-charcount-desc"):"",describedBy="".concat(hiddenCharCountDescId," ").concat((0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_2__.s)(inputId,""!==helperText,showStatusText)).trim(),disabledText=disabledMode&&!readonly,showLeftIcon=!!this.el.querySelector('[slot="icon"]')&&!disabledText,invalid="".concat(currentStatus===_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_1__.a.Error);return hiddenInput?(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_2__.p)(!0,this.el,name,value,disabledMode):(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_2__.q)(this.el),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:_defineProperty({},"fullwidth",fullWidth)},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-container",{readonly,disabled:disabledMode},!this.hideLabel&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-label",{for:inputId,label,helperText,required,disabled:disabledText,readonly}),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-component-container",{size:small?"small":size,validationStatus:currentStatus,multiLine:multiline,disabled:disabledMode,readonly,validationInline,fullWidth},showLeftIcon&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:_defineProperty(_defineProperty({},"readonly",readonly),"has-value",this.getNumberOfCharacters(value)>0),slot:"left-icon"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"icon"})),multiline?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("textarea",Object.assign({id:inputId,class:_defineProperty(_defineProperty(_defineProperty({},"no-resize",!1===resize||readonly),"no-left-pad",!showLeftIcon&&readonly),"readonly",readonly),name,ref:function ref(el){return _this2.inputEl=el},value,rows,required,disabled:disabledMode,placeholder:placeholder||"",readonly,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,"aria-label":label,"aria-describedby":describedBy,"aria-invalid":invalid,autocapitalize:this.autocapitalize,autoFocus:this.autoFocus,spellcheck,inputmode,maxlength:maxCharactersReached?maxCharacters:null,minlength:minCharactersUnattained?minCharacters:null},this.inheritedAttributes)):(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",Object.assign({id:inputId,name,ref:function ref(el){return _this2.inputEl=el},type:this.type,min,max,value,class:_defineProperty(_defineProperty(_defineProperty({},"no-left-pad",!showLeftIcon&&readonly),"readonly",readonly),"truncate-value",truncateValue),placeholder:placeholder||"",required,disabled:disabledMode,readonly,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,"aria-label":label,"aria-describedby":describedBy,"aria-invalid":invalid,"aria-activedescendant":this.ariaActiveDescendant,"aria-expanded":this.ariaExpanded,"aria-owns":this.ariaOwns,autocomplete:this.autocomplete,autocapitalize:this.autocapitalize,autoFocus:this.autoFocus,spellcheck,inputmode,role:this.role,maxlength:maxCharactersReached?maxCharacters:null,minlength:minCharactersUnattained?minCharacters:null},this.inheritedAttributes)),(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_2__.i)(this.el,"clear-button")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"clear-button"}),(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_2__.i)(this.el,"search-submit-button")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"search-submit-button"})),(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_2__.i)(this.el,"menu")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"menu"}),showValidation()&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-validation",{status:!1===this.hasStatus(currentStatus)||currentStatus===_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_1__.a.Success&&validationInline||validationInlineInternal?"":currentStatus,message:showStatusText?currentValidationText:"",ariaLiveMode:messageAriaLive,for:inputId,fullWidth},!readonly&&maxNumChars>0&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{slot:"validation-message-adornment"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"caption",class:_defineProperty(_defineProperty(_defineProperty({},"maxlengthtext",!0),"error",maxLengthExceeded),"disabled",disabledText)},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{"aria-live":"polite",id:"".concat(inputId,"-charcount"),class:"charcount"},numChars,"/",maxNumChars),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{hidden:!0,id:hiddenCharCountDescId},"Field can contain a maximum of ",maxNumChars," characters."))))))}},{key:"el",get:function get(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}}],[{key:"watchers",get:function get(){return{disabled:["watchDisabledHandler"],debounce:["debounceChanged"],value:["watchValueHandler"]}}}]);var _setFocus}();TextField.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;--ic-input-label-helpertext-padding:var(--ic-space-xxs)}:host(.fullwidth){width:100%}::-moz-placeholder{color:var(--ic-color-tertiary-text);opacity:1}::placeholder{color:var(--ic-color-tertiary-text);opacity:1}input,textarea{border:0;border-radius:var(--ic-border-radius);background-color:var(--ic-architectural-white);line-height:1.5rem;letter-spacing:0.005rem;width:100%;padding-right:var(--ic-space-xs);padding-left:var(--ic-space-xs)}textarea{min-height:var(--ic-space-lg);resize:vertical;padding-top:0.375rem}input:focus,textarea:focus{border:0;outline:0}input:disabled,textarea:disabled{color:var(--ic-architectural-200)}input.readonly,textarea.readonly{color:var(--ic-color-primary-text)}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type="number"]{-moz-appearance:textfield}textarea.no-resize{resize:none}.maxlengthtext{color:var(--ic-color-secondary-text);padding-right:var(--ic-space-xxxs)}.no-left-pad{padding-left:0}::slotted([slot="icon"]){fill:var(--ic-color-tertiary-text)}.has-value ::slotted([slot="icon"]){fill:var(--ic-color-primary-text)}.charcount{margin-right:calc(-1 * var(--ic-space-xxxs))}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration,input[type="search"]::-webkit-search-results-button,input[type="search"]::-webkit-search-results-decoration{display:none}input[type="search"].truncate-value{width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}@media (forced-colors: active){input.readonly,textarea.readonly{color:canvastext}.has-value ::slotted([slot="icon"]){fill:currentcolor}}'}}]);