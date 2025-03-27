/*! For license information please see 6816.df7bd0e2.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[6816],{"../web-components/dist/esm/ic-text-field.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_text_field:()=>TextField});var _index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-a7a720e7.js"),_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-de6293bf.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==_typeof(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(_typeof(e)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var inputIds=0,MUTABLE_ATTRIBUTES=[].concat(function _toConsumableArray(r){return function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}(r)||function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.x),["title"]),TextField=function(){function TextField(hostRef){var _this=this;!function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}(this,TextField),(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.getValidationText=(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"getValidationText",7),this.icBlur=(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icBlur",7),this.icChange=(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icChange",7),this.icFocus=(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icFocus",7),this.icInput=(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icInput",7),this.icKeydown=(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icKeydown",7),this.inheritedAttributes={},this.hostMutationObserver=null,this.numChars=0,this.maxCharactersReached=!1,this.maxCharactersWarning=!1,this.minCharactersUnattained=!1,this.maxValueExceeded=!1,this.minValueUnattained=!1,this.ariaAutocomplete=void 0,this.autocapitalize="off",this.autocomplete="off",this.autocorrect="off",this.autofocus=!1,this.disabled=!1,this.fullWidth=!1,this.helperText="",this.hideCharCount=!1,this.hideLabel=!1,this.hiddenInput=!0,this.inputId="ic-text-field-input-".concat(inputIds++),this.inputmode="text",this.max=void 0,this.maxCharacters=0,this.min=void 0,this.minCharacters=0,this.name=this.inputId,this.placeholder="",this.readonly=!1,this.required=!1,this.resize=!1,this.rows=1,this.size="medium",this.spellcheck=!1,this.theme="inherit",this.type="text",this.validationInline=!1,this.validationInlineInternal=!1,this.validationStatus="",this.validationText="",this.debounce=0,this.value="",this.initialValue=this.value,this.checkChildHydration=function(){var _a,el=null===(_a=_this.el.shadowRoot)||void 0===_a?void 0:_a.querySelector("ic-typography");(_this.hideLabel||el&&el.classList.contains("hydrated"))&&(_this.setFocus(),clearInterval(_this.interval))},this.getNumberOfCharacters=function(value){return null!=value?value.length:0},this.getMaxValueExceeded=function(value){_this.numChars=_this.getNumberOfCharacters(value),"number"===_this.type&&(_this.minValueUnattained=value&&Number(value)<Number(_this.min),_this.maxValueExceeded=Number(value)>Number(_this.max))},this.getMaxCharactersReached=function(value){_this.numChars=_this.getNumberOfCharacters(value),_this.maxCharactersReached=_this.maxCharacters>0&&_this.numChars>=_this.maxCharacters,_this.maxCharactersWarning&&!_this.maxCharactersReached&&(_this.maxCharactersWarning=!1)},this.onInput=function(ev){_this.value=ev.target.value,_this.icInput.emit({value:_this.value})},this.onBlur=function(ev){var value=ev.target.value;_this.numChars=value.length,_this.minCharactersUnattained=_this.minCharacters>0&&_this.numChars<_this.minCharacters,_this.icBlur.emit({value})},this.onFocus=function(ev){_this.icFocus.emit({value:ev.target.value})},this.hasStatus=function(status){return""!==status&&!_this.disabled},this.handleFormReset=function(){_this.value=_this.initialValue},this.hostMutationCallback=function(mutationList){var forceComponentUpdate=!1;mutationList.forEach((function(_ref){var attributeName=_ref.attributeName,type=_ref.type,addedNodes=_ref.addedNodes,removedNodes=_ref.removedNodes;MUTABLE_ATTRIBUTES.includes(attributeName)?(_this.inheritedAttributes[attributeName]=_this.el.getAttribute(attributeName),forceComponentUpdate=!0):"childList"===type&&(forceComponentUpdate=(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.F)(addedNodes,removedNodes,"icon"))})),forceComponentUpdate&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.f)(_this)}}var _setFocus;return function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(TextField,[{key:"watchDisabledHandler",value:function watchDisabledHandler(){(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el)}},{key:"debounceChanged",value:function debounceChanged(){this.icChange=(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.C)(this.icChange,this.debounce)}},{key:"watchValueHandler",value:function watchValueHandler(newValue){var value;this.maxCharacters>0?(value=newValue.substring(0,this.maxCharacters),this.value=value):value=newValue,this.inputEl&&this.inputEl.value!==value&&(this.inputEl.value=value),this.getMaxValueExceeded(value),this.getMaxCharactersReached(value),this.icChange.emit({value})}},{key:"connectedCallback",value:function connectedCallback(){this.debounceChanged()}},{key:"disconnectedCallback",value:function disconnectedCallback(){var _a;(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.k)(this.el,this.handleFormReset),null===(_a=this.hostMutationObserver)||void 0===_a||_a.disconnect()}},{key:"componentWillLoad",value:function componentWillLoad(){this.value!==this.initialValue?this.watchValueHandler(this.value):this.maxCharacters>0&&(this.value=this.value.substring(0,this.maxCharacters)),this.getMaxValueExceeded(this.value),this.getMaxCharactersReached(this.value),this.inheritedAttributes=(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.w)(this.el,MUTABLE_ATTRIBUTES),this.readonly&&(this.maxValueExceeded=!1,this.minValueUnattained=!1),(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.el,this.handleFormReset),(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el)}},{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.b)([{prop:this.label,propName:"label"}],"Text Field"),this.validationInlineInternal&&this.getValidationText.emit({value:this.validationText}),this.hostMutationObserver=new MutationObserver(this.hostMutationCallback),this.hostMutationObserver.observe(this.el,{attributes:!0,childList:!0}),!this.autofocus||this.disabled||this.readonly||(this.interval=setInterval(this.checkChildHydration,50))}},{key:"handleKeyDown",value:function handleKeyDown(ev){this.icKeydown.emit({event:ev}),this.maxCharactersWarning=this.maxCharactersReached}},{key:"setFocus",value:(_setFocus=function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(){var _a;return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:null===(_a=this.inputEl)||void 0===_a||_a.focus();case 1:case"end":return _context.stop()}}),_callee,this)}))),function setFocus(){return _setFocus.apply(this,arguments)})},{key:"render",value:function render(){var _this2=this,inputId=this.inputId,name=this.name,label=this.label,required=this.required,size=this.size,placeholder=this.placeholder,helperText=this.helperText,hideCharCount=this.hideCharCount,rows=this.rows,resize=this.resize,disabled=this.disabled,value=this.value,min=this.min,max=this.max,numChars=this.numChars,readonly=this.readonly,maxCharacters=this.maxCharacters,maxCharactersWarning=this.maxCharactersWarning,maxCharactersReached=this.maxCharactersReached,minCharacters=this.minCharacters,minCharactersUnattained=this.minCharactersUnattained,minValueUnattained=this.minValueUnattained,maxValueExceeded=this.maxValueExceeded,validationStatus=this.validationStatus,validationText=this.validationText,validationInline=this.validationInline,validationInlineInternal=this.validationInlineInternal,spellcheck=this.spellcheck,inputmode=this.inputmode,fullWidth=this.fullWidth,truncateValue=this.truncateValue,hiddenInput=this.hiddenInput,theme=this.theme,disabledMode=readonly||disabled,currentStatus=maxValueExceeded||minValueUnattained||minCharactersUnattained||maxCharactersWarning?maxCharactersWarning?_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.J.Warning:_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.J.Error:validationStatus,currentValidationText=maxCharactersWarning?"Maximum input is ".concat(maxCharacters," characters"):maxValueExceeded?"Maximum value of ".concat(max," exceeded"):minValueUnattained?"Minimum value of ".concat(min," not met"):minCharactersUnattained?"Minimum input is ".concat(minCharacters," characters"):validationText,maxNumChars=readonly?0:maxCharacters,messageAriaLive=maxCharactersWarning||maxValueExceeded||minValueUnattained||currentStatus===_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.J.Error?"assertive":"polite",showStatusText=this.hasStatus(currentStatus)&&!(currentStatus==_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.J.Success&&validationInline)&&!validationInlineInternal,multiline=rows>1,charsRemaining=maxNumChars-numChars,hiddenRemainingCharCountDesc="".concat(charsRemaining," character").concat(1===charsRemaining?"":"s"," remaining."),hiddenCharCountDescId=maxCharacters>0?"".concat(inputId,"-char-count-desc"):"",describedBy="".concat(hiddenCharCountDescId," ").concat((0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.n)(inputId,""!==helperText,showStatusText)).trim(),disabledText=disabledMode&&!readonly,showLeftIcon=!!this.el.querySelector('[slot="icon"]')&&!disabledText,invalid="".concat(currentStatus===_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.J.Error);return hiddenInput?(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.l)(!0,this.el,name,value,disabledMode):(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.m)(this.el),(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"6a8c8b4dda01fb87effbc36b0fe130a91151a2cc",class:_defineProperty(_defineProperty({"ic-text-field-full-width":fullWidth},"ic-theme-".concat(theme),"inherit"!==theme),"ic-text-field-disabled",disabledMode)},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-container",{key:"d51ab1b3c05d422c65cc86bfbdbf4b0e519a744c",readonly,disabled:disabledMode},!this.hideLabel&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-label",{key:"3f068dcbbf84b425830fc81453521ee6124c4f89",for:inputId,label,helperText,required,disabled:disabledText,readonly}),(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-component-container",{key:"d32a0a9d85c12cdef6e0c6b5a32ea8adb8aa38fe",size,validationStatus:currentStatus,multiLine:multiline,disabled:disabledMode,readonly,validationInline,fullWidth},showLeftIcon&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"c388f63beed9d165f72ac0a4b7b397cf103e1f78",class:{readonly,"has-value":this.getNumberOfCharacters(value)>0},slot:"left-icon"},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"a05c6039f117294e86fca9ab37b44649a66d3990",name:"icon"})),multiline?(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("textarea",Object.assign({id:inputId,class:{"no-resize":!1===resize||readonly,"no-left-pad":!showLeftIcon&&readonly,readonly},name,ref:function ref(el){return _this2.inputEl=el},value,rows,required,disabled:disabledMode,placeholder:placeholder||"",readonly,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,"aria-label":label,"aria-describedby":describedBy,"aria-invalid":invalid,autocapitalize:this.autocapitalize,spellcheck,inputmode,maxlength:maxCharactersReached?maxCharacters:null,minlength:minCharactersUnattained?minCharacters:null},this.inheritedAttributes)):(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",Object.assign({id:inputId,name,ref:function ref(el){return _this2.inputEl=el},type:this.type,min,max,value,class:{"no-left-pad":!showLeftIcon&&readonly,readonly,"truncate-value":truncateValue},placeholder:placeholder||"",required,disabled:disabledMode,readonly,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,"aria-label":label,"aria-describedby":describedBy,"aria-invalid":invalid,"aria-activedescendant":this.ariaActiveDescendant,"aria-expanded":this.ariaExpanded,"aria-owns":this.ariaOwns,autocomplete:this.autocomplete,autocapitalize:this.autocapitalize,spellcheck,inputmode,role:this.role,maxlength:maxCharactersReached?maxCharacters:null,minlength:minCharactersUnattained?minCharacters:null},this.inheritedAttributes)),(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"clear-button")&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"3318c2a8ac475fa24ff3455e7f76f7a4790a8f30",name:"clear-button"}),(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"search-submit-button")&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"449419c96d2e1e35445e71cb29646bb8d0f46e94",name:"search-submit-button"})),(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"menu")&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"2ee534dcc2e2719354ba186ac4334b2351c5f4e7",name:"menu"}),(!(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.K)(validationStatus)||!(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.K)(validationText)||maxNumChars>0||maxValueExceeded||maxCharactersWarning||minCharactersUnattained||minValueUnattained)&&!validationInlineInternal&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-validation",{key:"71264430971d993b4d42f817d8a758a2f08b3828",status:!1===this.hasStatus(currentStatus)||currentStatus===_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.J.Success&&validationInline||validationInlineInternal?"":currentStatus,message:showStatusText?currentValidationText:"",ariaLiveMode:messageAriaLive,for:inputId,fullWidth},!readonly&&maxNumChars>0&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"ee7614fb013cf7bcae8eb0e9272cf0de8ec7a663",slot:"validation-message-adornment"},!hideCharCount&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{key:"c99dd4748c8e472cfd18342d3873f1b64966f775",variant:"caption",class:"char-count-text"},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"ab65b6c274ce02a79051fa8ed8a1cdaf189f326b",class:"char-count"},numChars,"/",maxNumChars)),(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"660d20f52ed2759ebbb27b13142a3f25bf26b629",class:"remaining-char-count-desc","aria-live":"polite"},hiddenRemainingCharCountDesc),(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"1b1bb3f7ff5136fbb7137d84a3525ce6bc360980",hidden:!0,id:hiddenCharCountDescId},"Field can contain a maximum of ",maxNumChars," characters.")))))}},{key:"el",get:function get(){return(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}}],[{key:"watchers",get:function get(){return{disabled:["watchDisabledHandler"],debounce:["debounceChanged"],value:["watchValueHandler"]}}}]),TextField}();TextField.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;--ic-input-label-helpertext-padding:var(--ic-space-xxs);--border-color:var(--ic-text-field-border-neutral);--border-color-hover:var(--ic-text-field-border-neutral-hover);--border-color-pressed:var(--ic-text-field-border-neutral-pressed);--border-color-disabled:var(--ic-text-field-border-disabled);--border-color-error:var(--ic-text-field-border-error);--border-color-error-hover:var(--ic-text-field-border-error-hover);--border-color-error-pressed:var(--ic-text-field-border-error-pressed);--border-color-success:var(--ic-text-field-border-success);--border-color-success-hover:var(--ic-text-field-border-success-hover);--border-color-success-pressed:var(--ic-text-field-border-success-pressed);--border-color-warning:var(--ic-text-field-border-warning);--border-color-warning-hover:var(--ic-text-field-border-warning-hover);--border-color-warning-pressed:var(--ic-text-field-border-warning-pressed);--ic-input-label-text-color:var(--ic-text-field-label);--ic-input-label-helper-text-color:var(--ic-text-field-subtitle);--ic-input-validation-status-text-color:var(--ic-text-field-state-text);--ic-input-validation-error:var(--ic-text-field-state-icon-error);--ic-input-validation-warning-icon-color:var(\n    --ic-text-field-state-icon-warning\n  );--ic-input-validation-success-icon-color:var(\n    --ic-text-field-state-icon-success\n  );--ic-input-component-container-success-icon-inline-color:var(\n    --ic-text-field-state-icon-success\n  )}:host(.ic-text-field-disabled){--ic-input-label-text-color:var(--ic-text-field-label-disabled);--ic-input-label-helper-text-color:var(--ic-text-field-subtitle-disabled);--text-field-placeholder-color:var(\n    --ic-text-field-text-area-placeholder-text-disabled\n  )}:host(.ic-text-field-full-width){width:100%}::-moz-placeholder{color:var(\n    --text-field-placeholder-color,\n    var(--ic-text-field-placeholder-text)\n  );opacity:1}::placeholder{color:var(\n    --text-field-placeholder-color,\n    var(--ic-text-field-placeholder-text)\n  );opacity:1}input,textarea{border:0;border-radius:var(--ic-border-radius);color:var(--text-field-text-color, var(--ic-text-field-text));background-color:var(--input-bg-color, var(--ic-text-field-background));line-height:1.5rem;letter-spacing:0.005rem;width:100%;padding-right:var(--ic-space-xs);padding-left:var(--ic-space-xs);caret-color:var(\n    --text-field-typing-cursor,\n    var(--ic-text-field-typing-cursor)\n  )}textarea{min-height:var(--ic-space-lg);resize:vertical;padding-top:0.375rem}input:focus,textarea:focus{border:0;outline:0}input:disabled,textarea:disabled{color:var(\n    --text-field-disabled-text-color,\n    var(--ic-text-field-text-disabled)\n  )}input.readonly,textarea.readonly{color:var(--ic-text-field-read-only-input-text-internal)}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type="number"]{-moz-appearance:textfield}textarea.no-resize{resize:none}.char-count-text{--ic-typography-color:var(--ic-text-field-character-limit);padding-right:var(--ic-space-xxxs)}:host(.ic-text-field-disabled) .char-count-text{--ic-typography-color:var(--ic-text-field-character-limit-disabled)}.no-left-pad{padding-left:0}::slotted([slot="icon"]){fill:var(--ic-text-field-text-disabled)}.has-value ::slotted([slot="icon"]){fill:var(--ic-text-field-input-internal-icon)}.char-count{margin-right:calc(-1 * var(--ic-space-xxxs))}.remaining-char-count-desc{position:absolute;left:-9999px}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration,input[type="search"]::-webkit-search-results-button,input[type="search"]::-webkit-search-results-decoration{display:none}input[type="search"].truncate-value{width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}@media (forced-colors: active){input.readonly,textarea.readonly{color:canvastext}.has-value ::slotted([slot="icon"]){fill:currentcolor}}'}}]);