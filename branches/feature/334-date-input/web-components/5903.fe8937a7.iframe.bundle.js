/*! For license information please see 5903.fe8937a7.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[5903],{"./dist/esm/ic-text-field.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_text_field:()=>TextField});__webpack_require__("./node_modules/core-js/modules/es.string.small.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.async-iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.math.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.json.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reverse.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");var _index_90721b3c_js__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__("./dist/esm/index-90721b3c.js"),_types_dd515332_js__WEBPACK_IMPORTED_MODULE_31__=__webpack_require__("./dist/esm/types-dd515332.js"),_helpers_9d51479a_js__WEBPACK_IMPORTED_MODULE_32__=__webpack_require__("./dist/esm/helpers-9d51479a.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return exports};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function define(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==typeof value&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(void 0===method)return context.delegate=null,"throw"===methodName&&delegate.iterator.return&&(context.method="return",context.arg=void 0,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=void 0),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=void 0,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=void 0)},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=void 0),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName,nextLoc},"next"===this.method&&(this.arg=void 0),ContinueSentinel}},exports}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var inputIds=0,TextField=function(){function TextField(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,TextField),(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_30__.r)(this,hostRef),this.icKeydown=(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_30__.c)(this,"icKeydown",7),this.icInput=(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_30__.c)(this,"icInput",7),this.icBlur=(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_30__.c)(this,"icBlur",7),this.icFocus=(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_30__.c)(this,"icFocus",7),this.icChange=(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_30__.c)(this,"icChange",7),this.inheritedAttributes={},this.showLeftIcon=this.hasLeftIconSlot(),this.onInput=function(ev){_this.value=ev.target.value,_this.icInput.emit({value:_this.value})},this.onBlur=function(ev){var value=ev.target.value;_this.icBlur.emit({value})},this.onFocus=function(ev){var value=ev.target.value;_this.icFocus.emit({value})},this.isTextArea=function(){return _this.rows>1},this.hasStatus=function(status){return""!==status&&!_this.disabled},this.showStatusText=function(status){return!(!_this.hasStatus(status)||status==_types_dd515332_js__WEBPACK_IMPORTED_MODULE_31__.a.Success&&_this.validationInline)},this.handleFormReset=function(){_this.value=_this.initialValue},this.inputId="ic-text-field-input-"+inputIds++,this.label=void 0,this.required=!1,this.disabled=!1,this.readonly=!1,this.placeholder="",this.fullWidth=!1,this.hideLabel=!1,this.helperText="",this.rows=1,this.resize=!1,this.small=!1,this.value="",this.maxLength=0,this.validationStatus="",this.validationText="",this.validationInline=!1,this.autocapitalize="off",this.autocomplete="off",this.autocorrect="off",this.autoFocus=!1,this.debounce=0,this.type="text",this.inputmode="text",this.name=this.inputId,this.spellcheck=!1,this.ariaActiveDescendant=void 0,this.truncateValue=void 0,this.ariaExpanded=void 0,this.ariaOwns=void 0,this.ariaAutocomplete=void 0,this.role=void 0,this.hiddenInput=!0,this.numChars=0,this.maxLengthExceeded=!1,this.initialValue=this.value}var _setFocus;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(TextField,[{key:"debounceChanged",value:function debounceChanged(){this.icChange=(0,_helpers_9d51479a_js__WEBPACK_IMPORTED_MODULE_32__.H)(this.icChange,this.debounce)}},{key:"watchValueHandler",value:function watchValueHandler(newValue){this.inputEl&&this.inputEl.value!==newValue&&(this.inputEl.value=newValue),this.maxLength>0&&(this.numChars=newValue.length,newValue.length>this.maxLength?this.maxLengthExceeded=!0:this.maxLengthExceeded=!1),this.icChange.emit({value:newValue})}},{key:"setFocus",value:(_setFocus=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(){return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:this.inputEl&&this.inputEl.focus();case 1:case"end":return _context.stop()}}),_callee,this)}))),function setFocus(){return _setFocus.apply(this,arguments)})},{key:"handleKeyDown",value:function handleKeyDown(ev){this.icKeydown.emit({event:ev}),ev.cancelBubble=!0}},{key:"hasLeftIconSlot",value:function hasLeftIconSlot(){return null!=this.el.querySelector('[slot="icon"]')}},{key:"connectedCallback",value:function connectedCallback(){this.debounceChanged()}},{key:"componentWillLoad",value:function componentWillLoad(){this.watchValueHandler(this.value),this.inheritedAttributes=(0,_helpers_9d51479a_js__WEBPACK_IMPORTED_MODULE_32__.n)(this.el,[].concat(_toConsumableArray(_helpers_9d51479a_js__WEBPACK_IMPORTED_MODULE_32__.p),["title","aria-autocomplete","aria-haspopup"])),this.readonly&&(this.maxLengthExceeded=!1),(0,_helpers_9d51479a_js__WEBPACK_IMPORTED_MODULE_32__.d)(this.el,this.handleFormReset)}},{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_9d51479a_js__WEBPACK_IMPORTED_MODULE_32__.a)([{prop:this.label,propName:"label"}],"Text Field")}},{key:"disconnectedCallback",value:function disconnectedCallback(){(0,_helpers_9d51479a_js__WEBPACK_IMPORTED_MODULE_32__.r)(this.el,this.handleFormReset)}},{key:"render",value:function render(){var _class,_class2,_class3,_class4,_class5,_this2=this,inputId=this.inputId,name=this.name,label=this.label,required=this.required,small=this.small,placeholder=this.placeholder,helperText=this.helperText,rows=this.rows,resize=this.resize,disabled=this.disabled,value=this.value,maxLength=this.maxLength,numChars=this.numChars,readonly=this.readonly,maxLengthExceeded=this.maxLengthExceeded,validationStatus=this.validationStatus,validationText=this.validationText,validationInline=this.validationInline,spellcheck=this.spellcheck,inputmode=this.inputmode,fullWidth=this.fullWidth,truncateValue=this.truncateValue,hiddenInput=this.hiddenInput,disabledMode=!!readonly||disabled,placeholderText=disabled?"":placeholder,currentStatus=maxLengthExceeded?_types_dd515332_js__WEBPACK_IMPORTED_MODULE_31__.a.Error:validationStatus,currentValidationText=maxLengthExceeded?"Maximum length exceeded":validationText,maxNumChars=readonly?0:maxLength,messageAriaLive=maxLengthExceeded||0===maxLength&&currentStatus===_types_dd515332_js__WEBPACK_IMPORTED_MODULE_31__.a.Error?"assertive":"polite",showStatusText=this.showStatusText(currentStatus),multiline=this.isTextArea(),hiddenCharCountDescId=maxLength>0?inputId+"-charcount-desc":"",describedBy=(hiddenCharCountDescId+" "+(0,_helpers_9d51479a_js__WEBPACK_IMPORTED_MODULE_32__.h)(inputId,""!==helperText,showStatusText)).trim();this.showLeftIcon&&!readonly&&disabledMode&&(this.showLeftIcon=!1);var invalid=currentStatus===_types_dd515332_js__WEBPACK_IMPORTED_MODULE_31__.a.Error?"true":"false",disabledText=disabledMode&&!readonly;return hiddenInput&&(0,_helpers_9d51479a_js__WEBPACK_IMPORTED_MODULE_32__.e)(!0,this.el,name,value,disabledMode),(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_30__.h)(_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_30__.H,{class:(_class={},_class.fullwidth=fullWidth,_class)},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_30__.h)("ic-input-container",{readonly,disabled:disabledMode},!this.hideLabel&&(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_30__.h)("ic-input-label",{for:inputId,label,helperText,required,disabled:disabledText,readonly}),(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_30__.h)("ic-input-component-container",{small,validationStatus:currentStatus,multiLine:multiline,disabled:disabledMode,readonly,validationInline,fullWidth},this.showLeftIcon&&(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_30__.h)("span",{class:(_class2={},_class2.readonly=readonly,_class2["has-value"]=value.length>0,_class2),slot:"left-icon"},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_30__.h)("slot",{name:"icon"})),!multiline&&(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_30__.h)("input",Object.assign({id:inputId,name,ref:function ref(el){return _this2.inputEl=el},type:this.type,value,class:(_class3={},_class3["no-left-pad"]=!this.showLeftIcon&&readonly,_class3.readonly=readonly,_class3["truncate-value"]=truncateValue,_class3),placeholder:placeholderText,required,disabled:disabledMode,readonly,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,"aria-label":label,"aria-describedby":describedBy,"aria-invalid":invalid,"aria-activedescendant":this.ariaActiveDescendant,"aria-expanded":this.ariaExpanded,"aria-owns":this.ariaOwns,autocomplete:this.autocomplete,autocapitalize:this.autocapitalize,autoFocus:this.autoFocus,spellcheck,inputmode,role:this.role},this.inheritedAttributes)),multiline&&(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_30__.h)("textarea",Object.assign({id:inputId,class:(_class4={},_class4["no-resize"]=!1===resize||readonly,_class4["no-left-pad"]=!this.showLeftIcon&&readonly,_class4.readonly=readonly,_class4),name,ref:function ref(el){return _this2.inputEl=el},value,rows,required,disabled:disabledMode,placeholder:placeholderText,readonly,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,"aria-label":label,"aria-describedby":describedBy,"aria-invalid":invalid,autocapitalize:this.autocapitalize,autoFocus:this.autoFocus,spellcheck,inputmode},this.inheritedAttributes)),(0,_helpers_9d51479a_js__WEBPACK_IMPORTED_MODULE_32__.i)(this.el,"clear-button")&&(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_30__.h)("slot",{name:"clear-button"}),(0,_helpers_9d51479a_js__WEBPACK_IMPORTED_MODULE_32__.i)(this.el,"search-submit-button")&&(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_30__.h)("slot",{name:"search-submit-button"})),(0,_helpers_9d51479a_js__WEBPACK_IMPORTED_MODULE_32__.i)(this.el,"menu")&&(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_30__.h)("slot",{name:"menu"}),(!(0,_helpers_9d51479a_js__WEBPACK_IMPORTED_MODULE_32__.k)(validationStatus)||!(0,_helpers_9d51479a_js__WEBPACK_IMPORTED_MODULE_32__.k)(validationText)||maxNumChars>0)&&(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_30__.h)("ic-input-validation",{status:!1===this.hasStatus(currentStatus)||currentStatus===_types_dd515332_js__WEBPACK_IMPORTED_MODULE_31__.a.Success&&validationInline?"":currentStatus,message:showStatusText?currentValidationText:"",ariaLiveMode:messageAriaLive,for:inputId,fullWidth},!readonly&&maxNumChars>0&&(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_30__.h)("div",{slot:"validation-message-adornment"},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_30__.h)("ic-typography",{variant:"caption",class:(_class5={},_class5.maxlengthtext=!0,_class5.exceeded=maxLengthExceeded,_class5.disabled=disabledText,_class5)},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_30__.h)("span",{"aria-live":"polite",id:inputId+"-charcount",class:"charcount"},numChars,"/",maxNumChars),(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_30__.h)("span",{hidden:!0,id:hiddenCharCountDescId},"Field can contain a maximum of ",maxNumChars," characters."))))))}},{key:"el",get:function get(){return(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_30__.g)(this)}}],[{key:"watchers",get:function get(){return{debounce:["debounceChanged"],value:["watchValueHandler"]}}}]),TextField}();TextField.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block}:host([full-width]),.fullwidth{width:100%}::-moz-placeholder{color:var(--ic-color-tertiary-text);opacity:1}::placeholder{color:var(--ic-color-tertiary-text);opacity:1}input,textarea{border:0;border-radius:var(--ic-border-radius);background-color:var(--ic-architectural-white);line-height:1.5rem;letter-spacing:0.005rem;width:100%;padding-right:var(--ic-space-xs);padding-left:var(--ic-space-xs)}textarea{min-height:var(--ic-space-lg);resize:vertical;padding-top:0.375rem}input:focus,textarea:focus{border:0;outline:0}input:disabled,textarea:disabled{color:var(--ic-architectural-200)}input.readonly,textarea.readonly{color:var(--ic-color-primary-text)}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type="number"]{-moz-appearance:textfield}textarea.no-resize{resize:none}.maxlengthtext{color:var(--ic-color-secondary-text)}.exceeded{color:var(--ic-status-error)}.disabled{color:var(--ic-architectural-200)}.no-left-pad{padding-left:0}::slotted([slot="icon"]){fill:var(--ic-color-tertiary-text)}.has-value ::slotted([slot="icon"]){fill:var(--ic-color-primary-text)}.charcount{margin-right:calc(-1 * var(--ic-space-xxxs))}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration,input[type="search"]::-webkit-search-results-button,input[type="search"]::-webkit-search-results-decoration{display:none}input[type="search"].truncate-value{width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}@media (forced-colors: active){input.readonly,textarea.readonly{color:canvastext}.has-value ::slotted([slot="icon"]){fill:currentcolor}}'}}]);