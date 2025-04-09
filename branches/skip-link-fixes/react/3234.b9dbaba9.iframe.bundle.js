/*! For license information please see 3234.b9dbaba9.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[3234],{"../web-components/dist/esm/close-icon-539ec8d1.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>closeIcon});var closeIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>\n    <title>close icon</title>\n</svg>\n'},"../web-components/dist/esm/ic-dialog.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_dialog:()=>Dialog});var _index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-a7a720e7.js"),_close_icon_539ec8d1_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../web-components/dist/esm/close-icon-539ec8d1.js"),_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-de6293bf.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==_typeof(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(_typeof(e)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)}))}}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}var Dialog=function(){function Dialog(hostRef){var _this=this;!function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}(this,Dialog),(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icDialogCancelled=(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icDialogCancelled",7),this.icDialogClosed=(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icDialogClosed",7),this.icDialogConfirmed=(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icDialogConfirmed",7),this.icDialogOpened=(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icDialogOpened",7),this.contentAreaMutationObserver=null,this.DATA_GETS_FOCUS="data-gets-focus",this.DIALOG_CONTROLS="dialog-controls",this.dialogHeight=0,this.focusedElementIndex=0,this.IC_TEXT_FIELD="IC-TEXT-FIELD",this.IC_ACCORDION="IC-ACCORDION",this.IC_ACCORDION_GROUP="IC-ACCORDION-GROUP",this.IC_CHECKBOX="IC-CHECKBOX",this.IC_SEARCH_BAR="IC-SEARCH-BAR",this.resizeObserver=null,this.dialogRendered=!1,this.fadeIn=!1,this.buttons=!0,this.closeOnBackdropClick=!0,this.destructive=!1,this.dismissLabel="Dismiss",this.disableHeightConstraint=!1,this.disableWidthConstraint=!1,this.hideCloseButton=!1,this.open=!1,this.size="small",this.theme="inherit",this.dialogOpened=function(){var _a,_b;_this.dialogRendered=!0,_this.disableHeightConstraint?null===(_a=_this.dialogEl)||void 0===_a||_a.show():null===(_b=_this.dialogEl)||void 0===_b||_b.showModal(),setTimeout((function(){_this.fadeIn=!0,_this.backdropEl&&_this.disableHeightConstraint&&0!==_this.backdropEl.scrollTop&&(_this.backdropEl.scrollTop=0)}),10),setTimeout((function(){_this.setInitialFocus(),(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.f)(_this.runResizeObserver)}),75),setTimeout((function(){_this.icDialogOpened.emit()}),80)},this.runResizeObserver=function(){_this.dialogEl&&(_this.resizeObserver=new ResizeObserver((function(){clearTimeout(_this.resizeTimeout),_this.resizeTimeout=window.setTimeout(_this.resizeObserverCallback,80)})),_this.resizeObserver.observe(_this.dialogEl))},this.resizeObserverCallback=function(){_this.dialogEl&&_this.dialogEl.clientHeight!==_this.dialogHeight&&(_this.dialogHeight=_this.dialogEl.clientHeight)},this.refreshInteractiveElementsOnSlotChange=function(){var _a,_b,_c,contentWrapper=null===(_a=_this.el.shadowRoot)||void 0===_a?void 0:_a.querySelector("#dialog-content");contentWrapper&&(_this.contentArea=contentWrapper.querySelector("slot"),null===(_b=_this.contentArea)||void 0===_b||_b.addEventListener("slotchange",_this.getInteractiveElements),_this.contentAreaMutationObserver=new MutationObserver((function(){_this.getInteractiveElements()})),null===(_c=(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.t)(contentWrapper))||void 0===_c||_c.forEach((function(el){var _a;null===(_a=_this.contentAreaMutationObserver)||void 0===_a||_a.observe(el,{childList:!0,subtree:!0})})))},this.removeSlotChangeListener=function(){var _a;_this.contentArea&&(_this.contentArea.removeEventListener("slotchange",_this.getInteractiveElements),null===(_a=_this.contentAreaMutationObserver)||void 0===_a||_a.disconnect())},this.setInitialFocus=function(){_this.sourceElement=document.activeElement,_this.focusedElementIndex=_this.interactiveElementList?_this.interactiveElementList.findIndex((function(element){return element.hasAttribute(_this.DATA_GETS_FOCUS)})):0,_this.focusElement(_this.interactiveElementList[_this.focusedElementIndex])},this.getFocusedElementIndex=function(){for(var _a,i=0;i<_this.interactiveElementList.length;i++)_this.interactiveElementList[i]===((null===(_a=_this.el.shadowRoot)||void 0===_a?void 0:_a.activeElement)||document.activeElement)&&(_this.focusedElementIndex=i)},this.closeIconClick=function(){_this.open=!1},this.getInteractiveElements=function(){var _a;_this.interactiveElementList=Array.from((null===(_a=_this.el.shadowRoot)||void 0===_a?void 0:_a.querySelectorAll("ic-button"))||[]);var slottedInteractiveElements=Array.from(_this.el.querySelectorAll('a[href], button, input:not(.ic-input), textarea, select, details, [tabindex]:not([tabindex="-1"]),\n          ic-button, ic-checkbox, ic-select, ic-search-bar, ic-tab-group, \n          ic-back-to-top, ic-breadcrumb, ic-chip[dismissible="true"], ic-footer-link, ic-link, ic-navigation-button,\n          ic-navigation-item, ic-switch, ic-text-field, ic-accordion-group, ic-accordion, ic-date-input, ic-date-picker'));slottedInteractiveElements.length>0&&(slottedInteractiveElements[0].slot!==_this.DIALOG_CONTROLS?slottedInteractiveElements[0].setAttribute(_this.DATA_GETS_FOCUS,""):_this.destructive||slottedInteractiveElements[slottedInteractiveElements.length-1].setAttribute(_this.DATA_GETS_FOCUS,""));for(var i=0;i<slottedInteractiveElements.length;i++)_this.interactiveElementList.splice(1+i,0,slottedInteractiveElements[i])},this.getNextFocusEl=function(focusedElementIndex){return _this.interactiveElementList[focusedElementIndex]},this.onTabKeyPress=function(shiftKey){return _this.getFocusedElementIndex(),_this.interactiveElementList[_this.focusedElementIndex].tagName!==_this.IC_SEARCH_BAR&&(_this.setFocusIndexBasedOnShiftKey(shiftKey),_this.loopNextFocusIndexIfLastElement(),_this.focusElement(_this.getNextFocusEl(_this.focusedElementIndex),shiftKey),!0)},this.shouldSkipElement=function(element){var shouldSkipElement=!1;if("hidden"===getComputedStyle(element).visibility||0===element.offsetHeight||element.hasAttribute("disabled")||element.tagName===_this.IC_ACCORDION_GROUP&&element.hasAttribute("single-expansion"))shouldSkipElement=!0;else if("radio"===element.getAttribute("type")){var radioEl=element.closest("ic-radio-option");radioEl&&!radioEl.hasAttribute("selected")&&(shouldSkipElement=!0)}return shouldSkipElement},this.focusElement=function(element){var shiftKey=arguments.length>1&&void 0!==arguments[1]&&arguments[1],nextFocusEl=element;if(_this.shouldSkipElement(element))_this.setFocusIndexBasedOnShiftKey(shiftKey),_this.loopNextFocusIndexIfLastElement(),nextFocusEl=_this.getNextFocusEl(_this.focusedElementIndex),_this.focusElement(nextFocusEl,shiftKey);else switch(element.tagName){case _this.IC_ACCORDION_GROUP:case _this.IC_ACCORDION:case _this.IC_SEARCH_BAR:case _this.IC_TEXT_FIELD:case _this.IC_CHECKBOX:element.setFocus();break;default:element.focus()}},this.renderDialog=function(){var buttons=_this.buttons,size=_this.size,heading=_this.heading,label=_this.label,destructive=_this.destructive,dismissLabel=_this.dismissLabel,hideCloseButton=_this.hideCloseButton;return(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("dialog",{class:_defineProperty(_defineProperty(_defineProperty(_defineProperty({},"dialog",!0),"".concat(size),!0),"disable-height-constraint",!!_this.disableHeightConstraint),"disable-width-constraint",!!_this.disableWidthConstraint),"aria-labelledby":"dialog-label dialog-heading","aria-describedby":"dialog-alert dialog-content",ref:function ref(el){return _this.dialogEl=el}},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"heading-area"},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"heading-content"},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"label"},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"label"},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"label",id:"dialog-label"},label))),(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"heading"},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"heading"},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"h4",id:"dialog-heading"},heading)))),!hideCloseButton&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{class:"close-icon",variant:"icon",innerHTML:_close_icon_539ec8d1_js__WEBPACK_IMPORTED_MODULE_2__.c,"aria-label":dismissLabel,onClick:_this.closeIconClick,"data-gets-focus":destructive||!buttons?"":null})),(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"content-area"},(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.i)(_this.el,"alert")&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"alert"}),(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{id:"dialog-content"},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))),buttons&&((0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.i)(_this.el,_this.DIALOG_CONTROLS)?(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:_defineProperty({},_this.DIALOG_CONTROLS,!0)},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:_this.DIALOG_CONTROLS})):(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:_defineProperty({},_this.DIALOG_CONTROLS,!0)},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{variant:"tertiary",onClick:function onClick(){return _this.cancelDialog()},class:"dialog-control-button","data-gets-focus":null},"Cancel"),(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{variant:_this.destructive?"destructive":"primary",onClick:function onClick(){return _this.confirmDialog()},class:"dialog-control-button","data-gets-focus":""},"Confirm"))))}}var _confirmDialog,_cancelDialog;return function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(Dialog,[{key:"watchOpenHandler",value:function watchOpenHandler(){var _this2=this;this.open?this.dialogOpened():(this.fadeIn=!1,null!==this.resizeObserver&&this.resizeObserver.disconnect(),setTimeout((function(){var _a,_b;_this2.dialogRendered=!1,null===(_a=_this2.dialogEl)||void 0===_a||_a.close(),null===(_b=_this2.sourceElement)||void 0===_b||_b.focus(),_this2.dialogHeight=0,_this2.icDialogClosed.emit()}),80))}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.removeSlotChangeListener()}},{key:"componentDidLoad",value:function componentDidLoad(){this.getInteractiveElements(),this.refreshInteractiveElementsOnSlotChange(),this.open&&this.dialogOpened(),!(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"heading")&&(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.b)([{prop:this.heading,propName:"heading"}],"Dialog")}},{key:"componentDidRender",value:function componentDidRender(){"none"!==getComputedStyle(this.el).display&&this.disableHeightConstraint?document.body.style.overflow="hidden":document.body.style.overflow="auto"}},{key:"handleKeyboard",value:function handleKeyboard(ev){if(this.dialogRendered)switch(ev.key){case"Tab":this.onTabKeyPress(ev.shiftKey)&&ev.preventDefault();break;case"Escape":ev.repeat||(this.open=!1),ev.stopImmediatePropagation()}}},{key:"handleClick",value:function handleClick(ev){if(this.dialogEl&&this.closeOnBackdropClick&&ev.composedPath().indexOf(this.dialogEl)<=0){var rect=this.dialogEl.getBoundingClientRect();rect.top<=ev.clientY&&ev.clientY<=rect.top+rect.height&&rect.left<=ev.clientX&&ev.clientX<=rect.left+rect.width||(this.open=!1)}}},{key:"cancelDialog",value:(_cancelDialog=_asyncToGenerator(_regeneratorRuntime().mark((function _callee(){return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:this.icDialogCancelled.emit(),this.open=!1;case 2:case"end":return _context.stop()}}),_callee,this)}))),function cancelDialog(){return _cancelDialog.apply(this,arguments)})},{key:"confirmDialog",value:(_confirmDialog=_asyncToGenerator(_regeneratorRuntime().mark((function _callee2(){return _regeneratorRuntime().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:this.icDialogConfirmed.emit();case 1:case"end":return _context2.stop()}}),_callee2,this)}))),function confirmDialog(){return _confirmDialog.apply(this,arguments)})},{key:"loopNextFocusIndexIfLastElement",value:function loopNextFocusIndexIfLastElement(){this.focusedElementIndex>this.interactiveElementList.length-1?this.focusedElementIndex=0:this.focusedElementIndex<0&&(this.focusedElementIndex=this.interactiveElementList.length-1)}},{key:"setFocusIndexBasedOnShiftKey",value:function setFocusIndexBasedOnShiftKey(shiftKey){shiftKey?this.focusedElementIndex-=1:this.focusedElementIndex+=1}},{key:"render",value:function render(){var _this3=this;return(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"e686f8e849f9647ee4a812e4261b7a1576d9c179",class:_defineProperty(_defineProperty(_defineProperty(_defineProperty({},"ic-dialog-hidden",!this.dialogRendered),"ic-dialog-fade-in",this.fadeIn),"disable-height-constraint",!!this.disableHeightConstraint),"ic-theme-".concat(this.theme),"inherit"!==this.theme)},this.disableHeightConstraint?(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"backdrop",ref:function ref(el){return _this3.backdropEl=el}},this.renderDialog()):this.renderDialog())}},{key:"el",get:function get(){return(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}}],[{key:"watchers",get:function get(){return{open:["watchOpenHandler"]}}}]),Dialog}();Dialog.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;min-height:100% !important;background:rgb(0 0 0 / 60%);z-index:var(--ic-z-index-dialog);opacity:0}:host(.ic-dialog-fade-in){opacity:1}:host(.disable-height-constraint){background:none;justify-content:unset;align-items:unset}.dialog.disable-height-constraint{max-height:none;position:relative}.dialog.disable-height-constraint .content-area{overflow-y:visible}@media (prefers-reduced-motion: no-preference){:host{transition:opacity var(--ic-easing-transition-slow)}.dialog{transform:translateY(-3rem);transition:transform 1000s}:host(.ic-dialog-fade-in) .dialog{transform:translateY(0);transition:transform var(--ic-easing-transition-slow)}}:host(.ic-dialog-hidden){display:none}.dialog{background-color:var(--ic-dialog-background);color:var(--ic-dialog-text-primary);--ic-typography-color:var(--ic-dialog-text-primary);border:var(--ic-space-1px) solid var(--ic-dialog-border);border-radius:var(--ic-border-radius);padding:var(--ic-space-xs) 0 var(--ic-space-md);display:flex;flex-direction:column;box-sizing:border-box;overflow-x:visible}.small{width:50%;max-width:25rem;min-height:11rem;max-height:70vh}.medium{width:70vw;max-width:44rem;min-height:12.5rem;max-height:70vh}.large{width:90vw;max-width:62.5rem;min-height:12.5rem;max-height:90vh}.heading-area{display:flex;margin-bottom:var(--ic-space-xs);padding:0 var(--ic-space-md)}.heading{overflow-wrap:break-word}.close-icon{margin-left:auto}.close-icon>svg{color:var(--ic-dialog-clear-button)}.content-area{padding:0 var(--ic-space-md);margin:0;overflow-y:auto}#dialog-content{margin-bottom:var(--ic-space-sm)}#dialog-content ::slotted(ic-typography){overflow-wrap:break-word}#dialog-content ::slotted(*){position:relative}.dialog-controls{margin-top:auto;padding:var(--ic-space-xs) var(--ic-space-md) 0;display:flex;justify-content:flex-end;gap:var(--ic-space-md)}.dialog-control-button{width:-moz-fit-content;width:fit-content}.backdrop{overflow-y:auto;position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgb(0 0 0 / 60%);z-index:var(--ic-z-index-dialog);padding-top:16px;padding-bottom:16px}.heading ic-typography{--ic-typography-color:var(--ic-dialog-text-primary)}.label ic-typography{--ic-typography-color:var(--ic-dialog-label)}@media (min-width: 800px){:host([size="large"]) .dialog:not(.disable-width-constraint)>.content-area{width:75%}}@media (max-width: 576px){.dialog{width:100vw;height:100vh;transform:translateY(-5rem);max-width:none;max-height:none;box-sizing:border-box}.backdrop{padding:0}.dialog.disable-height-constraint{height:auto;min-height:100vh}}@media (max-width: 364px){.dialog-control-button{width:unset}}'}}]);