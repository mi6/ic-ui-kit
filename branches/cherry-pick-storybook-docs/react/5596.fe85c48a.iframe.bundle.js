/*! For license information please see 5596.fe85c48a.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[5596],{"../web-components/dist/esm/ic-chip.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_chip:()=>Chip});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_a72a277b_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-a72a277b.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==_typeof(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(_typeof(e)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}var Chip=function(){function Chip(hostRef){var _this=this;!function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}(this,Chip),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icDismiss=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icDismiss",7),this.inAGGrid=!1,this.dismissAction=function(){_this.icDismiss.emit()},this.mouseEnterHandler=function(){_this.hovered=!0},this.mouseLeaveHandler=function(){_this.hovered=!1},this.setChipColour=function(){var colorRGBA=(0,_helpers_a72a277b_js__WEBPACK_IMPORTED_MODULE_1__.c)(_this.customColor);if(colorRGBA){var r=colorRGBA.r,g=colorRGBA.g,b=colorRGBA.b,a=colorRGBA.a;_this.customColorClass=(299*r+587*g+114*b)/1e3>133.3505?"ic-chip-dark-text":"ic-chip-light-text",_this.el.setAttribute("style","--chip-custom-color: rgba(".concat(r,", ").concat(g,", ").concat(b,", ").concat(a,");"))}else _this.customColorClass=""},this.customColorClass="",this.hovered=!1,this.visible=!0,this.customColor=null,this.disabled=!1,this.dismissible=!1,this.label=void 0,this.size="medium",this.theme="inherit",this.transparentBackground=!0,this.variant="filled",this.dismissLabel="Dismiss"}var _setFocus;return function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(Chip,[{key:"customColorHandler",value:function customColorHandler(){this.setChipColour()}},{key:"watchDisabledHandler",value:function watchDisabledHandler(){(0,_helpers_a72a277b_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el)}},{key:"componentWillLoad",value:function componentWillLoad(){(0,_helpers_a72a277b_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el),this.customColorHandler()}},{key:"componentWillRender",value:function componentWillRender(){(0,_helpers_a72a277b_js__WEBPACK_IMPORTED_MODULE_1__.q)(this.el)&&(this.inAGGrid=!0)}},{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_a72a277b_js__WEBPACK_IMPORTED_MODULE_1__.b)([{prop:this.label,propName:"label"}],"Chip")}},{key:"handleClick",value:function handleClick(){this.visible=!this.visible}},{key:"setFocus",value:(_setFocus=function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(){var _a;return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:null===(_a=this.el.shadowRoot.querySelector("button"))||void 0===_a||_a.focus();case 1:case"end":return _context.stop()}}),_callee,this)}))),function setFocus(){return _setFocus.apply(this,arguments)})},{key:"render",value:function render(){var label=this.label,variant=this.variant,size=this.size,dismissible=this.dismissible,visible=this.visible,disabled=this.disabled,hovered=this.hovered,theme=this.theme,customColorClass=this.customColorClass,dismissLabel=this.dismissLabel;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:_defineProperty(_defineProperty({},"ic-theme-".concat(theme),"inherit"!==theme),"".concat(customColorClass),"filled"===variant&&""!==customColorClass)},visible&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({chip:!0},"".concat(variant),!0),"".concat(size),!0),"disabled",disabled),"dismissible",dismissible),"hovered",hovered),"non-transparent","outlined"===this.variant&&!this.transparentBackground)},(0,_helpers_a72a277b_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"icon")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"icon"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"icon"})),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"label","apply-vertical-margins":!1,class:{label:!0,"in-ag-grid":this.inAGGrid}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",null,label)),dismissible&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-tooltip",{label:dismissLabel,target:"dismiss-icon",class:{"tooltip-disabled":disabled}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{id:"dismiss-icon",class:"dismiss-icon","aria-label":"".concat(dismissLabel," ").concat(label," chip"),disabled,tabindex:disabled?-1:0,onClick:this.dismissAction,onMouseEnter:this.mouseEnterHandler,onMouseLeave:this.mouseLeaveHandler,innerHTML:'<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z" fill="currentColor"/>\n</svg>\n'})),(0,_helpers_a72a277b_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"badge")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"badge"})))}},{key:"el",get:function get(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}}],[{key:"delegatesFocus",get:function get(){return!0}},{key:"watchers",get:function get(){return{customColor:["customColorHandler"],disabled:["watchDisabledHandler"]}}}]),Chip}();Chip.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:inline-block;max-width:100%;vertical-align:middle}.chip{--chip-bg-color:transparent;--chip-hover-bg:var(--ic-chip-action-hover);--chip-pressed-bg:var(--ic-chip-action-pressed);display:flex;padding:var(--ic-space-xxs);font-size:0.875rem;border-radius:var(--ic-space-md);text-align:left;text-decoration:none;position:relative;background-color:var(--chip-bg-color);border:var(--ic-border-width) solid transparent;justify-content:space-between}@media (prefers-reduced-motion: no-preference){.chip{transition:var(--ic-easing-transition-fast)}}.chip.small{padding:var(--ic-space-xxxs);border-radius:calc(var(--ic-space-md) - var(--ic-space-xxxs))}.chip.large{padding:var(--ic-space-xs);border-radius:calc(var(--ic-space-md) + var(--ic-space-xxs))}.label{padding:0 var(--ic-space-xs)}.chip:focus-within{box-shadow:var(--ic-border-focus);outline:var(--ic-hc-focus-outline);z-index:1}ic-tooltip:focus-within{z-index:1}.filled{--chip-bg-color:var(\n    --chip-custom-color,\n    var(--ic-chip-background-filled-default)\n  );--ic-typography-color:var(\n    --chip-custom-foreground-color,\n    var(--ic-chip-label)\n  );color:var(--chip-custom-foreground-color, var(--ic-chip-label))}.filled.disabled{--chip-bg-color:var(--ic-chip-background-filled-inactive)}:host(.ic-chip-dark-text){--chip-custom-foreground-color:var(--ic-architectural-black)}:host(.ic-chip-light-text){--chip-custom-foreground-color:var(--ic-architectural-white)}:host(.ic-chip-dark-text) .chip.filled.hovered:not(:focus-within){--chip-hover-bg:var(--ic-action-dark-bg-hover)}:host(.ic-chip-dark-text) .chip.filled:focus-within{--chip-pressed-bg:var(--ic-action-dark-bg-pressed)}:host(.ic-chip-light-text) .chip.filled.hovered:not(:focus-within){--chip-hover-bg:var(--ic-action-light-bg-hover)}:host(.ic-chip-light-text) .chip.filled:focus-within{--chip-pressed-bg:var(--ic-action-light-bg-pressed)}.outlined{color:var(--ic-chip-label);border-color:var(--chip-custom-color, var(--ic-chip-outline));padding:calc(var(--ic-space-xxs));--ic-typography-color:var(--ic-chip-label)}.outlined.disabled{border:var(--ic-border-disabled);border-color:var(--ic-chip-outline-inactive)}.chip.disabled ic-typography{--ic-typography-color:var(--ic-chip-label-inactive)}.dismiss-icon{border:none;border-radius:50%;padding:0;color:currentcolor;background:none;cursor:pointer;margin:var(--ic-space-xxxs);height:calc(var(--ic-space-lg) - var(--ic-space-xxs));width:calc(var(--ic-space-lg) - var(--ic-space-xxs))}.dismiss-icon:focus{outline:var(--ic-hc-focus-outline)}.dismiss-icon[disabled]{pointer-events:none;color:var(--ic-chip-icon-inactive)}.icon{padding:var(--ic-space-xxxs);box-sizing:border-box}.icon,ic-tooltip{width:var(--ic-space-lg);height:var(--ic-space-lg)}.chip.disabled path,.chip.disabled ::slotted(svg){fill:var(--ic-chip-icon-inactive)}.outlined.non-transparent{background-color:var(--ic-chip-outline-background)}:host .chip.hovered:not(:focus-within){background-image:linear-gradient(var(--chip-hover-bg) 0 0)}:host .chip:focus-within{background-image:linear-gradient(var(--chip-pressed-bg) 0 0)}@media (forced-colors: active){.chip{border:var(--ic-border-hc)}.chip.disabled{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-color:GrayText}.chip.disabled ic-typography{--ic-typography-color:GrayText}.chip.disabled path,.chip.disabled ::slotted(svg){fill:GrayText}.chip:focus-within{outline:none;border-color:Highlight}}'}}]);