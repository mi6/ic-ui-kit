/*! For license information please see 605.153226e7.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[605],{"./dist/esm/ic-popover-menu.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_popover_menu:()=>PopoverMenu});__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.string.anchor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.some.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.async-iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.math.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.json.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reverse.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js");var _index_36ab8165_js__WEBPACK_IMPORTED_MODULE_28__=__webpack_require__("./dist/esm/index-36ab8165.js"),_helpers_fdbfdb33_js__WEBPACK_IMPORTED_MODULE_29__=__webpack_require__("./dist/esm/helpers-fdbfdb33.js"),_popper_15e448b4_js__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__("./dist/esm/popper-15e448b4.js");__webpack_require__("./dist/esm/types-dd515332.js");function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return exports};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function define(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==typeof value&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return{value:void 0,done:!0}}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(void 0===method)return context.delegate=null,"throw"===methodName&&delegate.iterator.return&&(context.method="return",context.arg=void 0,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=void 0),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable||""===iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=void 0,next.done=!0,next};return next.next=next}}throw new TypeError(typeof iterable+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=void 0)},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=void 0),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName,nextLoc},"next"===this.method&&(this.arg=void 0),ContinueSentinel}},exports}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var PopoverMenu=function(){function PopoverMenu(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,PopoverMenu),(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_28__.r)(this,hostRef),this.ARIA_LABEL="aria-label",this.firstRender=!0,this.popoverMenuEls=[],this.setButtonFocus=function(){var _a;null===(_a=_this.popoverMenuEls[_this.currentFocus])||void 0===_a||_a.focus()},this.findAnchorEl=function(anchor){var anchorElement=null;return null==anchor?void 0===_this.submenuId&&console.error("No anchor specified for popover component"):null===(anchorElement=document.querySelector(0===anchor.indexOf("#")?anchor:"#"+anchor))&&console.error("Popover anchor element '"+anchor+"' not found"),anchorElement},this.isNotPopoverMenuEl=function(ev){var target=ev.target;return target.id!==_this.anchor&&"IC-MENU-ITEM"!==target.tagName&&"IC-MENU-GROUP"!==target.tagName&&"IC-POPOVER-MENU"!==target.tagName},this.closeMenu=function(){var _a;_this.open=!1,null===(_a=_this.anchorEl)||void 0===_a||_a.focus()},this.getNextItemToSelect=function(currentItem,movingDown){var numButtons=_this.popoverMenuEls.length-1;currentItem<1&&(currentItem=0);var nextItem=movingDown?currentItem+1:currentItem-1;return nextItem<0?nextItem=numButtons:nextItem>numButtons&&(nextItem=0),nextItem},this.addMenuItems=function(elements){for(var i=0;i<elements.length;i++){var el=elements[i];if("IC-MENU-ITEM"===el.tagName)_this.popoverMenuEls.push(el);else if("IC-MENU-GROUP"===el.tagName){var groupSlotWrapper=el.shadowRoot.querySelector("ul"),menuGroupElements=(0,_helpers_fdbfdb33_js__WEBPACK_IMPORTED_MODULE_29__.u)(groupSlotWrapper);_this.addMenuItems(menuGroupElements)}}},this.getMenuAriaLabel=function(){var ariaLabel=_this.host.getAttribute(_this.ARIA_LABEL);return void 0!==_this.submenuId?ariaLabel+", within nested level "+_this.submenuLevel+" "+_this.parentLabel+" submenu,":ariaLabel},this.handleBackButtonClick=function(){_this.parentPopover.openFromChild(),_this.open=!1},this.openingFromChild=!1,this.openingFromParent=!1,this.anchor=void 0,this.parentLabel=void 0,this.parentPopover=void 0,this.submenuId=void 0,this.submenuLevel=1,this.open=void 0}var _openFromParent,_openFromChild;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(PopoverMenu,[{key:"watchOpenHandler",value:function watchOpenHandler(){this.open&&(void 0===this.parentPopover||this.popoverMenuEls.some((function(menuItem){return menuItem.id}))||this.popoverMenuEls.unshift(this.backButton),this.currentFocus=void 0!==this.submenuId?1:0,setTimeout(this.setButtonFocus,50))}},{key:"disconnectedCallback",value:function disconnectedCallback(){void 0!==this.popperInstance&&this.popperInstance.destroy()}},{key:"componentDidLoad",value:function componentDidLoad(){var slotWrapper=this.host.shadowRoot.querySelector("ul.button"),popoverMenuElements=(0,_helpers_fdbfdb33_js__WEBPACK_IMPORTED_MODULE_29__.u)(slotWrapper);null!==popoverMenuElements&&this.addMenuItems(popoverMenuElements),void 0===this.submenuId&&null===this.host.getAttribute(this.ARIA_LABEL)&&console.error("No aria-label specified for popover menu component - aria-label required")}},{key:"componentWillRender",value:function componentWillRender(){this.anchorEl=this.findAnchorEl(this.anchor)}},{key:"componentDidRender",value:function componentDidRender(){if(this.firstRender&&this.open){this.firstRender=!1;var adjust=!1,dialogEl=this.host.closest("ic-dialog");if(null!==dialogEl){this.host.classList.add("on-dialog");var offset,menu=this.host.getBoundingClientRect(),dialogBottom=dialogEl.getBoundingClientRect().bottom,anchorHeight=this.anchorEl.getBoundingClientRect().height;"false"===dialogEl.getAttribute("data-overflow")?dialogBottom-menu.top<menu.height&&(adjust=!0,offset=menu.height+anchorHeight+8):(adjust=!0,offset=menu.height+anchorHeight+8+100),!1===adjust?this.host.classList.add("on-dialog-fix-translate"):(this.host.style.setProperty("--translate-y",offset+"px","important"),this.host.classList.add("on-dialog-translate-y"))}this.popperInstance=adjust?(0,_popper_15e448b4_js__WEBPACK_IMPORTED_MODULE_30__.c)(this.anchorEl,this.host,{placement:"top"}):(0,_popper_15e448b4_js__WEBPACK_IMPORTED_MODULE_30__.c)(this.anchorEl,this.host,{placement:"bottom-start",modifiers:[{name:"offset",options:{offset:[0,4]}},{name:"flip",options:{fallbackPlacements:["top-start","top-end","bottom-end"],rootBoundary:"viewport"}}]})}else this.open&&this.popperInstance.update()}},{key:"handleMenuItemClick",value:function handleMenuItemClick(ev){ev.detail.hasSubMenu||"Back"===ev.detail.label||this.closeMenu()}},{key:"handleSubmenuChange",value:function handleSubmenuChange(ev){var target=ev.target;this.open=!1;var childEl=document.querySelector("ic-popover-menu[submenu-id="+target.submenuTriggerFor+"]");childEl.parentPopover=this.host,childEl.anchor=this.anchor,childEl.ariaLabel=this.host.getAttribute(this.ARIA_LABEL),childEl.openFromParent(),childEl.submenuLevel=this.submenuLevel+1,childEl.parentLabel=target.label}},{key:"handleClick",value:function handleClick(ev){this.open&&this.isNotPopoverMenuEl(ev)&&this.closeMenu()}},{key:"handleKeyDown",value:function handleKeyDown(ev){switch(ev.key){case"ArrowDown":ev.preventDefault(),this.currentFocus=this.getNextItemToSelect(this.currentFocus,!0),this.setButtonFocus();break;case"ArrowUp":ev.preventDefault(),this.currentFocus=this.getNextItemToSelect(this.currentFocus,!1),this.setButtonFocus();break;case"Home":this.currentFocus=0,this.setButtonFocus();break;case"End":this.currentFocus=this.popoverMenuEls.length-1,this.setButtonFocus();break;case"Escape":case"Tab":this.open&&(this.closeMenu(),this.host.blur())}}},{key:"openFromChild",value:(_openFromChild=_asyncToGenerator(_regeneratorRuntime().mark((function _callee(){var _this2=this;return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:this.open=!0,this.openingFromChild=!0,setTimeout((function(){return _this2.openingFromChild=!1}),1e3);case 3:case"end":return _context.stop()}}),_callee,this)}))),function openFromChild(){return _openFromChild.apply(this,arguments)})},{key:"openFromParent",value:(_openFromParent=_asyncToGenerator(_regeneratorRuntime().mark((function _callee2(){var _this3=this;return _regeneratorRuntime().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:this.open=!0,this.openingFromParent=!0,setTimeout((function(){return _this3.openingFromParent=!1}),1e3);case 3:case"end":return _context2.stop()}}),_callee2,this)}))),function openFromParent(){return _openFromParent.apply(this,arguments)})},{key:"render",value:function render(){var _this4=this;return(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_28__.h)(_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_28__.H,{class:{open:this.open}},(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_28__.h)("div",{id:void 0===this.parentPopover?"ic-popover-submenu-"+this.submenuId:"",class:{menu:!0},tabindex:open?"0":"-1"},(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_28__.h)("div",{class:{"opening-from-parent":this.openingFromParent,"opening-from-child":this.openingFromChild}},void 0!==this.submenuId&&(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_28__.h)("div",null,(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_28__.h)("ic-menu-item",{class:"ic-popover-submenu-back-button",ref:function ref(el){return _this4.backButton=el},label:"Back",onClick:this.handleBackButtonClick,id:"ic-popover-submenu-back-button-"+this.submenuLevel},(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_28__.h)("svg",{slot:"icon",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"submenu-back-icon"},(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_28__.h)("path",{d:"M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z",fill:"currentColor"}))),(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_28__.h)("ic-typography",{variant:"subtitle-small",class:"parent-label"},this.parentLabel)),(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_28__.h)("ul",{class:"button","aria-label":this.getMenuAriaLabel(),role:"menu","aria-owns":void 0!==this.submenuId&&"ic-popover-submenu-back-button-"+this.submenuLevel,"aria-controls":void 0!==this.submenuId&&"ic-popover-submenu-back-button-"+this.submenuLevel},(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_28__.h)("slot",null)))))}},{key:"host",get:function get(){return(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_28__.g)(this)}}],[{key:"delegatesFocus",get:function get(){return!0}},{key:"watchers",get:function get(){return{open:["watchOpenHandler"]}}}]),PopoverMenu}();PopoverMenu.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}@media (prefers-reduced-motion: no-preference){:host .opening-from-parent{animation:slide-in var(--ic-transition-duration-slow) ease-in-out}:host .opening-from-child{animation:slide-out var(--ic-transition-duration-slow) ease-in-out}}:host{border-radius:var(--ic-border-radius);color:var(--ic-color-primary-text);background-color:var(--ic-architectural-white);position:relative;z-index:var(--ic-z-index-popover);box-sizing:border-box;box-shadow:var(--ic-elevation-overlay);display:none}:host(.on-dialog){inset:auto !important}:host(.on-dialog-fix-translate){transform:translate(0, var(--ic-space-xs)) !important}:host(.on-dialog-translate-y){transform:translate(0, calc(-1 * var(--translate-y))) !important}.menu{border:var(--ic-border-default);border-radius:var(--ic-border-radius);background-color:var(--ic-architectural-white);visibility:hidden;height:0}.button{text-decoration:none;list-style-type:none}:host(:focus-within){box-shadow:var(--ic-border-focus)}.menu:focus-visible{outline:none}:host(.open){display:block;min-width:calc(20rem - var(--ic-space-xl));width:var(--popover-width, 20rem);max-width:calc(100vw - var(--ic-space-xl))}:host(.open) .menu{visibility:visible;height:-moz-fit-content;height:fit-content;max-height:var(--max-height, -moz-fit-content);max-height:var(--max-height, fit-content);overflow-y:auto;overflow-x:hidden}.parent-label{color:var(--ic-color-tertiary-text);margin:var(--ic-space-xs) var(--ic-space-xs) 0}@keyframes slide-in{from{opacity:0;transform:translateX(10rem)}to{opacity:1;transform:translateX(0)}}@keyframes slide-out{from{opacity:0;transform:translateX(-10rem)}to{opacity:1;transform:translateX(0)}}'},"./node_modules/core-js/modules/es.string.anchor.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),createHTML=__webpack_require__("./node_modules/core-js/internals/create-html.js");$({target:"String",proto:!0,forced:__webpack_require__("./node_modules/core-js/internals/string-html-forced.js")("anchor")},{anchor:function anchor(name){return createHTML(this,"a","name",name)}})}}]);