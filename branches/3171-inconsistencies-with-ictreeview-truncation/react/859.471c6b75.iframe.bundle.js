/*! For license information please see 859.471c6b75.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[859],{"../web-components/dist/esm/ic-checkbox.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_checkbox:()=>Checkbox});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_a72a277b_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-a72a277b.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==_typeof(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(_typeof(e)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}var Checkbox=function(){function Checkbox(hostRef){var _this=this;!function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}(this,Checkbox),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icCheck=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icCheck",7),this.handleClick=function(){_this.checked=!_this.checked,_this.displayIndeterminate=!_this.nativeIndeterminateBehaviour&&(_this.indeterminate&&_this.checked),_this.icCheck.emit()},this.handleFormReset=function(){_this.checked=_this.initiallyChecked},this.additionalFieldDisplay="static",this.checked=!1,this.initiallyChecked=this.checked,this.disabled=!1,this.dynamicText="This selection requires additional answers",this.form=void 0,this.groupLabel=void 0,this.indeterminate=!1,this.displayIndeterminate=this.indeterminate,this.label=void 0,this.name=void 0,this.nativeIndeterminateBehaviour=!1,this.size=void 0,this.theme="inherit",this.value=void 0,this.hideLabel=!1}var _setFocus;return function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(Checkbox,[{key:"watchDisabledHandler",value:function watchDisabledHandler(){(0,_helpers_a72a277b_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el)}},{key:"watchIndeterminateHandler",value:function watchIndeterminateHandler(){this.displayIndeterminate=this.nativeIndeterminateBehaviour?this.indeterminate:this.indeterminate&&this.checked}},{key:"componentWillLoad",value:function componentWillLoad(){(0,_helpers_a72a277b_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el),(0,_helpers_a72a277b_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.el,this.handleFormReset);var checkboxGroup=this.el.parentElement;checkboxGroup&&(this.name||(this.name=checkboxGroup.name),this.groupLabel=checkboxGroup.label)}},{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_a72a277b_js__WEBPACK_IMPORTED_MODULE_1__.b)([{prop:this.label,propName:"label"},{prop:this.value,propName:"value"}],"Checkbox")}},{key:"componentDidRender",value:function componentDidRender(){if("static"===this.additionalFieldDisplay){var textfield=this.el.querySelector("ic-text-field");this.checked?null==textfield||textfield.removeAttribute("disabled"):null==textfield||textfield.setAttribute("disabled","")}else this.additionalFieldContainer&&(this.additionalFieldContainer.style.display=this.checked?"flex":"none")}},{key:"disconnectedCallback",value:function disconnectedCallback(){(0,_helpers_a72a277b_js__WEBPACK_IMPORTED_MODULE_1__.k)(this.el,this.handleFormReset)}},{key:"setFocus",value:(_setFocus=function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(){var _a;return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:null===(_a=this.el.shadowRoot.querySelector(".checkbox"))||void 0===_a||_a.focus();case 1:case"end":return _context.stop()}}),_callee,this)}))),function setFocus(){return _setFocus.apply(this,arguments)})},{key:"render",value:function render(){var _this2=this,additionalFieldDisplay=this.additionalFieldDisplay,checked=this.checked,disabled=this.disabled,dynamicText=this.dynamicText,el=this.el,form=this.form,displayIndeterminate=this.displayIndeterminate,groupLabel=this.groupLabel,label=this.label,name=this.name,size=this.size,value=this.value,theme=this.theme,id="ic-checkbox-".concat((0,_helpers_a72a277b_js__WEBPACK_IMPORTED_MODULE_1__.d)(label)||value,"-").concat(groupLabel).replace(/ /g,"-"),parentElementSize=el.parentElement.size;return checked?(0,_helpers_a72a277b_js__WEBPACK_IMPORTED_MODULE_1__.l)(!0,el,name,checked&&value,disabled):(0,_helpers_a72a277b_js__WEBPACK_IMPORTED_MODULE_1__.m)(el),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:_defineProperty(_defineProperty({"ic-checkbox-disabled":disabled},"ic-checkbox-".concat(size||parentElementSize),!0),"ic-theme-".concat(theme),"inherit"!==theme)},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"container"},displayIndeterminate&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"indeterminate-symbol"}),!displayIndeterminate&&checked&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{class:"checkmark",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("title",null,"checkmark icon"),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{d:"M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"})),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{role:"checkbox",class:{checkbox:!0,checked,indeterminate:displayIndeterminate},type:"checkbox",name,id,value,disabled:!!disabled||null,checked,indeterminate:displayIndeterminate,onClick:this.handleClick,form,"aria-label":this.hideLabel?this.label:void 0}),!this.hideLabel&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{class:"checkbox-label",variant:"body"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{htmlFor:id},label))),(0,_helpers_a72a277b_js__WEBPACK_IMPORTED_MODULE_1__.i)(el,"additional-field")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"dynamic-container",ref:function ref(el){return _this2.additionalFieldContainer=el}},"dynamic"===additionalFieldDisplay&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"branch-corner"}),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,"dynamic"===additionalFieldDisplay&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"caption"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("p",{class:"dynamic-text","aria-live":"polite"},dynamicText)),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"additional-field-wrapper":"static"===additionalFieldDisplay}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"additional-field"})))))}},{key:"el",get:function get(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}}],[{key:"delegatesFocus",get:function get(){return!0}},{key:"watchers",get:function get(){return{disabled:["watchDisabledHandler"],indeterminate:["watchIndeterminateHandler"]}}}]),Checkbox}();Checkbox.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host(.ic-checkbox-disabled){pointer-events:none}.container{display:flex;width:-moz-fit-content;width:fit-content;padding:var(--ic-space-xxs) 0 var(--ic-space-xxs) var(--ic-space-xxs);margin-bottom:var(--ic-space-xxs);align-items:center}:host(.ic-checkbox-small) .container{margin-bottom:var(--ic-space-xxxs)}.checkbox{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:block;position:relative;top:0;left:0;height:var(--ic-space-lg);width:var(--ic-space-lg);background-color:var(--ic-checkbox-background-unselected);border:var(--ic-border-width) solid var(--ic-checkbox-border-unselected);border-radius:var(--ic-border-radius);outline:none;cursor:pointer;transition:var(--ic-easing-transition-fast);flex-shrink:0}:host .container svg{width:var(--ic-space-lg);height:var(--ic-space-lg)}:host(.ic-checkbox-small) .checkbox,:host(.ic-checkbox-small) .container svg{width:var(--ic-space-md);height:var(--ic-space-md)}:host(.ic-checkbox-large) .checkbox,:host(.ic-checkbox-large) .container svg{width:var(--ic-space-xl);height:var(--ic-space-xl)}.checkbox:checked{background-color:var(--ic-checkbox-background-selected);border:var(--ic-border-width) solid var(--ic-checkbox-background-selected);transition:var(--ic-easing-transition-slow)}.checkbox:checked:disabled{background-color:var(--ic-checkbox-background-selected-disabled);border:var(--ic-border-width) solid\n    var(--ic-checkbox-background-selected-disabled)}.checkbox:indeterminate,.checkbox.indeterminate:checked{background-color:var(--ic-checkbox-background-indeterminate);border:0.125rem solid var(--ic-checkbox-background-indeterminate)}.checkbox:indeterminate:disabled,.checkbox.indeterminate:checked:disabled{background-color:var(--ic-checkbox-background-indeterminate-disabled);border:0.125rem solid var(--ic-checkbox-background-indeterminate-disabled)}.checkbox:checked:hover{background-color:var(--ic-checkbox-background-selected-hover)}.checkbox:indeterminate:hover,.checkbox.indeterminate:checked:hover{background-color:var(--ic-checkbox-background-indeterminate-hover);border:0.125rem solid var(--ic-checkbox-background-indeterminate-hover)}.checkbox:checked:active{background-color:var(--ic-checkbox-background-selected-pressed)}.checkbox:indeterminate:active,.checkbox.indeterminate:checked:active{background-color:var(--ic-checkbox-background-indeterminate-pressed);border:0.125rem solid var(--ic-checkbox-background-indeterminate-pressed)}.checkbox:hover{box-shadow:0 0 0 0.25rem var(--ic-checkbox-action-background-hover);border:var(--ic-border-width) solid\n    var(--ic-checkbox-border-unselected-hover)}.checkbox:active{box-shadow:0 0 0 0.25rem var(--ic-checkbox-action-background-pressed);border:var(--ic-border-width) solid\n    var(--ic-checkbox-border-unselected-pressed)}.checkbox:focus{box-shadow:var(--ic-border-focus)}.checkbox:disabled{border:var(--ic-border-width) dashed\n    var(--ic-checkbox-border-unselected-disabled)}.checkbox-label{padding-left:var(--ic-space-sm);color:var(--ic-checkbox-text);--ic-typography-color:var(--ic-checkbox-text)}:host(.ic-checkbox-disabled) .checkbox-label{color:var(--ic-checkbox-text-disabled);--ic-typography-color:var(--ic-checkbox-text-disabled)}.checkbox-label:hover{cursor:pointer}.checkmark{position:relative;right:calc(-1 * var(--ic-space-lg));margin-left:calc(-1 * var(--ic-space-lg));fill:var(--ic-checkbox-icon-pressed);z-index:1;background-color:transparent;pointer-events:none;flex-shrink:0}:host(.ic-checkbox-small) .checkmark{margin-left:calc(-1 * var(--ic-space-md));right:calc(-1 * var(--ic-space-md))}:host(.ic-checkbox-large) .checkmark{margin-left:calc(-1 * var(--ic-space-xl));right:calc(-1 * var(--ic-space-xl))}.indeterminate-symbol{position:relative;width:0.875rem;height:var(--ic-space-xxxs);right:-1.188rem;margin-left:-0.875rem;z-index:1;background-color:var(--ic-checkbox-icon-indeterminate);pointer-events:none;flex-shrink:0}:host(.ic-checkbox-small) .indeterminate-symbol{width:0.6rem;right:-0.8rem;margin-left:-0.6rem}:host(.ic-checkbox-large) .indeterminate-symbol{width:1.25rem;right:-1.625rem;margin-left:-1.25rem}.additional-field-wrapper{margin-left:calc(var(--ic-space-md) + var(--ic-space-lg));margin-top:calc(var(--ic-space-sm) / 2)}.branch-corner{height:var(--ic-space-md);width:var(--ic-space-xl);border-radius:0 0 0 0.188rem;border-bottom:0.125rem solid var(--ic-checkbox-required-bar);border-left:0.125rem solid var(--ic-checkbox-required-bar)}.dynamic-container{display:flex;position:relative;margin:var(--ic-space-xxxs) 0 var(--ic-space-xxs) var(--ic-space-md);gap:var(--ic-space-xs)}.dynamic-text{color:var(--ic-checkbox-required-text);--ic-typography-color:var(--ic-checkbox-required-text);margin-top:calc(var(--ic-space-sm) / 2);margin-bottom:var(--ic-space-xs);border-radius:2%}@media (max-width: 576px){::slotted(ic-text-field){--input-width:100%}}@media (forced-colors: active){.checkbox{-webkit-appearance:revert;-moz-appearance:revert;appearance:revert;transition:none}.checkbox:checked{transition:none}.checkbox:focus-visible{outline:0.125rem solid highlight}.checkbox:disabled:not(:checked){-webkit-appearance:none;-moz-appearance:none;appearance:none;border-color:GrayText}.checkmark{fill:none}.indeterminate-symbol{display:none}}'}}]);