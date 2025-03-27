/*! For license information please see 1529.3ba0cb81.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[1529],{"../web-components/dist/esm/ic-radio-option.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_radio_option:()=>RadioOption});var _index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-a7a720e7.js"),_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-de6293bf.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==_typeof(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(_typeof(e)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)}))}}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}var RadioOption=function(){function RadioOption(hostRef){var _this=this;!function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}(this,RadioOption),(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icCheck=(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icCheck",7),this.icSelectedChange=(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icSelectedChange",7),this.defaultRadioValue="",this.hasAdditionalField=!1,this.skipFocus=!1,this.additionalFieldDisplay="static",this.disabled=!1,this.dynamicText="This selection requires additional answers",this.theme="inherit",this.selected=!1,this.initiallySelected=this.selected,this.handleClick=function(event){var _a,_b,clickedAdditionalField=event.target.matches(".dynamic-container:not(ic-radio-option, .checkmark), .dynamic-container *:not(ic-radio-option, .checkmark)");_this.disabled||clickedAdditionalField&&event.target!==_this.radioElement||(event.stopPropagation(),!1===_this.skipFocus&&(null===(_a=_this.radioElement)||void 0===_a||_a.focus()),_this.skipFocus=!1,_this.hasAdditionalField&&(_this.value=(null===(_b=_this.getAdditionalField())||void 0===_b?void 0:_b.value)||_this.defaultRadioValue),_this.icCheck.emit({value:_this.value}))},this.handleKeyDown=function(event){_this.getAdditionalField()==document.activeElement&&["IC-DATE-INPUT","IC-DATE-PICKER"].includes(_this.getAdditionalField().nodeName)&&event.stopPropagation()},this.handleFormReset=function(){_this.skipFocus=!0,_this.selected=_this.initiallySelected}}var _setTabIndex,_setFocus;return function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(RadioOption,[{key:"watchDisabledHandler",value:function watchDisabledHandler(){(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el)}},{key:"watchSelectedHandler",value:function watchSelectedHandler(){this.icSelectedChange.emit()}},{key:"handleCheck",value:function handleCheck(ev){"static"===this.additionalFieldDisplay&&Array.from(this.el.querySelectorAll("ic-radio-option")).includes(ev.target)&&this.icCheck.emit({value:this.value})}},{key:"disconnectedCallback",value:function disconnectedCallback(){(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.k)(this.el,this.handleFormReset)}},{key:"componentWillLoad",value:function componentWillLoad(){(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"additional-field")&&(this.hasAdditionalField=!0,this.getAdditionalField()),this.defaultRadioValue=this.value,(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.el,this.handleFormReset),(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el)}},{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.b)([{prop:this.value,propName:"value"}],"Radio Option")}},{key:"componentWillRender",value:function componentWillRender(){var hasSlot=(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.s)(this.el,"additional-field");hasSlot&&!this.hasAdditionalField?(this.hasAdditionalField=!0,this.getAdditionalField()):!hasSlot&&this.hasAdditionalField&&(this.hasAdditionalField=!1)}},{key:"componentDidRender",value:function componentDidRender(){if("static"===this.additionalFieldDisplay){var additionalField=this.getAdditionalField();!this.selected||this.disabled?null==additionalField||additionalField.setAttribute("disabled",""):null==additionalField||additionalField.removeAttribute("disabled")}}},{key:"additionalFieldValueHandler",value:function additionalFieldValueHandler(event){this.selected&&(this.value=event.detail.value||this.defaultRadioValue,this.icCheck.emit({value:this.value})),event.stopImmediatePropagation()}},{key:"setFocus",value:(_setFocus=_asyncToGenerator(_regeneratorRuntime().mark((function _callee(){var _a;return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:null===(_a=this.radioElement)||void 0===_a||_a.focus();case 1:case"end":return _context.stop()}}),_callee,this)}))),function setFocus(){return _setFocus.apply(this,arguments)})},{key:"setTabIndex",value:(_setTabIndex=_asyncToGenerator(_regeneratorRuntime().mark((function _callee2(value){var _a;return _regeneratorRuntime().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:null===(_a=this.radioElement)||void 0===_a||_a.setAttribute("tabIndex",value.toString());case 1:case"end":return _context2.stop()}}),_callee2,this)}))),function setTabIndex(_x){return _setTabIndex.apply(this,arguments)})},{key:"getAdditionalField",value:function getAdditionalField(){var additionalField=this.el.querySelector('ic-text-field[slot="additional-field"]');return additionalField&&(additionalField.hiddenInput=!1),additionalField}},{key:"render",value:function render(){var _this2=this,additionalFieldDisplay=this.additionalFieldDisplay,disabled=this.disabled,dynamicText=this.dynamicText,form=this.form,groupLabel=this.groupLabel,handleClick=this.handleClick,handleKeyDown=this.handleKeyDown,hasAdditionalField=this.hasAdditionalField,label=this.label,name=this.name,selected=this.selected,value=this.value,theme=this.theme,id="ic-radio-option-".concat((0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.d)(label)||value,"-").concat(groupLabel);return(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"68ba08d82ecf70f14a9961d2409b04638af61e6f",onClick:handleClick,onKeyDown:handleKeyDown,class:_defineProperty(_defineProperty({},"ic-radio-option-disabled",!!disabled),"ic-theme-".concat(theme),"inherit"!==theme)},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"d73d3964cf04997a74e57e172ffaeea86ada9b41",class:{container:!0,disabled:!!disabled}},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"f684e5d83728596e522db4a0cac63c54b33b5676"},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{key:"6fc02da33d6aae8f539661c4acfb1c0b2d1cf9cf",tabindex:selected?"0":"-1",type:"radio",name,id,value,disabled,checked:selected,ref:function ref(el){return _this2.radioElement=el},form}),(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"133fed8d26ed321779356aefdadaa33a7945d1f4",class:"checkmark"})),(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{key:"f9f6276e7fbaede5af8127415f4ec668280e572d",class:"radio-label",variant:"body"},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{key:"9f029fad91bd53d4fddb3077c7c2a22875fcf88c",htmlFor:id},label))),hasAdditionalField&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"af5e440f7d9a7edd8867c8909f3bf8675c3ed87d",class:{"dynamic-container":!0,hidden:"dynamic"===additionalFieldDisplay&&!selected}},"dynamic"===additionalFieldDisplay&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"cbf7d6ac3a9eb9436c3bdfec683bb0d1d76b0fb9",class:"branch-corner"}),(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"fda0a8bc3c5d04c6abfa6dd6dfde7a55c35fb696"},"dynamic"===additionalFieldDisplay&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{key:"80cf981058082df9a4cb0d74d129e22ff7e0b00b",variant:"caption"},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("p",{key:"1b4ac259cae64b14b5bc588aca6a6f898ddb7005",class:"dynamic-text"},dynamicText)),(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"268c223a73167fc954e74ac25fe18d9ecbfbf7a9",class:{"additional-field-wrapper":"static"===additionalFieldDisplay}},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"1568c567b82ea49560cee9505a3425c5884ba5bb",name:"additional-field"})))))}},{key:"el",get:function get(){return(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}}],[{key:"watchers",get:function get(){return{disabled:["watchDisabledHandler"],selected:["watchSelectedHandler"]}}}]),RadioOption}();RadioOption.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}ic-radio-option{display:flex;flex-direction:column;width:-moz-fit-content;width:fit-content}.additional-field-wrapper [slot="additional-field"]{margin-top:calc(var(--ic-space-sm) / 2);margin-left:var(--ic-space-xl)}ic-radio-option.ic-radio-option-disabled,ic-radio-option.ic-radio-option-disabled .radio-label{--ic-typography-color:var(--ic-radio-button-text-option-disabled)}.container input:focus+span.checkmark,.container:hover input:focus+span.checkmark,.container:active input:focus+span.checkmark,:host(:focus) .container input:checked+span.checkmark{box-shadow:var(--ic-border-focus)}.container{display:grid;grid-template-columns:min-content auto;position:relative;cursor:pointer;align-items:center;margin:var(--ic-space-xxs) 0 var(--ic-space-xxs) var(--ic-space-xxs)}.container.disabled,.container.disabled input:disabled{cursor:default}.container input{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:inline-block;position:absolute;cursor:pointer;height:var(--ic-space-lg);width:var(--ic-space-lg);border-radius:50%;border:none}.checkmark{display:block;position:relative;top:0;left:0;height:var(--ic-space-lg);width:var(--ic-space-lg);background-color:var(--ic-radio-button-background-default);border:var(--ic-space-1px) solid var(--ic-radio-button-border-default);border-radius:50%;transition:var(--ic-easing-transition-fast);box-sizing:border-box}.container input:checked~.checkmark::after{display:inline-block}.container:hover input~.checkmark{box-shadow:0 0 0 0.25rem var(--ic-radio-button-active-hover);border:var(--ic-border-width) solid var(--ic-radio-button-default-hover)}.container:hover input:checked~.checkmark{box-shadow:0 0 0 0.25rem var(--ic-radio-button-active-hover);border:0.125rem solid var(--ic-radio-button-default-hover)}.container:hover:not(.disabled) input:checked~.checkmark::after{background-color:var(--ic-radio-button-default-hover)}.container:active input~.checkmark{box-shadow:0 0 0 0.25rem var(--ic-radio-button-active-pressed);border:var(--ic-border-width) solid var(--ic-radio-button-default-pressed)}.container:active input:checked~.checkmark{border:0.125rem solid var(--ic-radio-button-default-pressed);box-shadow:0 0 0 0.25rem var(--ic-radio-button-active-pressed)}.container:active input:checked~.checkmark::after{background-color:var(--ic-radio-button-default-pressed)}.container input:checked~.checkmark{border:0.125rem solid var(--ic-radio-button-default-active)}.container input:checked:disabled~.checkmark{border:0.125rem solid var(--ic-radio-button-border-disabled)}.container input:disabled~.checkmark{border:var(--ic-border-width) dashed var(--ic-radio-button-border-disabled)}.container input:disabled~.checkmark::after{background:var(--ic-radio-button-disabled)}.container:hover input:disabled~.checkmark{box-shadow:none;border:0.125rem solid none}.container:active input:disabled~.checkmark::after{background-color:var(--ic-radio-button-disabled)}.container .checkmark::after{content:"";position:absolute;display:none;top:calc(50% - var(--ic-space-xs));left:calc(50% - var(--ic-space-xs));width:var(--ic-space-md);height:var(--ic-space-md);border-radius:50%;background:var(--ic-radio-button-default-active)}.radio-label{margin-left:var(--ic-space-md);--ic-typography-color:var(--ic-radio-button-text-option)}.additional-field-wrapper{margin-left:var(--ic-space-xs)}.branch-corner{color:var(--ic-radio-button-required-bar);height:var(--ic-space-md);width:var(--ic-space-xl);border-radius:0 0 0 0.188rem;border-bottom:0.125rem solid var(--ic-radio-button-required-bar);border-left:0.125rem solid var(--ic-radio-button-required-bar);margin-left:calc(-1 * var(--ic-space-1px))}.dynamic-container{display:flex;position:relative;margin:var(--ic-space-xxxs) 0 var(--ic-space-xxs) var(--ic-space-md);gap:var(--ic-space-xs)}.dynamic-container.hidden{display:none}.dynamic-text{color:var(--ic-radio-button-required-text);--ic-typography-color:var(--ic-radio-button-required-text);margin-top:calc(var(--ic-space-sm) / 2);margin-bottom:var(--ic-space-xs);border-radius:2%}@media (max-width: 576px){ic-text-field{--input-width:100%}}@media (forced-colors: active){.container input:checked~.checkmark,.container:active input:checked~.checkmark{border-color:Highlight}.container input:checked~.checkmark::after,.container:active input:checked~.checkmark::after{background-color:Highlight}.container input:disabled~.checkmark,.container input:checked:disabled~.checkmark{border-color:GrayText}.container input:disabled~.checkmark::after,.container:active input:disabled~.checkmark::after{background-color:GrayText}}input[type="radio"]:dir(rtl){right:0}.radio-label:dir(rtl){padding-right:var(--ic-space-sm);padding-left:0}.branch-corner:dir(rtl){border-radius:0 0 0.188rem 0;border-right:0.125rem solid var(--ic-action-default);border-left:none}.dynamic-container:dir(rtl){margin:var(--ic-space-xxxs) var(--ic-space-sm) var(--ic-space-xxs) 0}'}}]);