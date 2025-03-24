/*! For license information please see 7526.1dc61b40.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[7526],{"../web-components/dist/esm/chevron-icon-589e3b46.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Chevron});var Chevron='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M9.70687 6L8.29688 7.41L12.8769 12L8.29688 16.59L9.70687 18L15.7069 12L9.70687 6Z" fill="currentColor"/>\n</svg>\n'},"../web-components/dist/esm/ic-navigation-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_navigation_group:()=>NavigationGroup});var _index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-a7a720e7.js"),_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-de6293bf.js"),_chevron_icon_589e3b46_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../web-components/dist/esm/chevron-icon-589e3b46.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==_typeof(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(_typeof(e)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}var NavigationGroup=function(){function NavigationGroup(hostRef){var _this=this;!function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}(this,NavigationGroup),(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.allGroupedNavigationItems=[],this.DYNAMIC_GROUPED_LINKS_HEIGHT_MS=100,this.IC_NAVIGATION_ITEM="ic-navigation-item",this.mouseGate=!1,this.nodeName="IC-NAVIGATION-GROUP",this.GROUPED_LINKS_WRAPPER_CLASS=".grouped-links-wrapper",this.deviceSize=_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.D.XL,this.dropdownOpen=!1,this.expanded=!0,this.focusStyle=(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.g)(),this.inTopNavSideMenu=!1,this.expandable=!1,this.theme="inherit",this.sideNavExpandHandler=function(event){var _a;_this.isSideNavExpanded=event.detail.sideNavExpanded;var linkWrapper=null===(_a=_this.el.shadowRoot)||void 0===_a?void 0:_a.querySelector(_this.GROUPED_LINKS_WRAPPER_CLASS);linkWrapper&&(_this.isSideNavExpanded?_this.expanded&&_this.expandedNavItemsHeight?_this.setGroupedLinksElementHeight(linkWrapper,_this.expandedNavItemsHeight):_this.expanded&&setTimeout((function(){_this.expandedNavItemsHeight=_this.getNavigationChildItemsHeight(),_this.setGroupedLinksElementHeight(linkWrapper,_this.expandedNavItemsHeight)}),_this.DYNAMIC_GROUPED_LINKS_HEIGHT_MS):_this.expanded&&_this.collapsedNavItemsHeight?_this.setGroupedLinksElementHeight(linkWrapper,_this.collapsedNavItemsHeight):_this.expanded&&setTimeout((function(){_this.collapsedNavItemsHeight=_this.getNavigationChildItemsHeight(),_this.setGroupedLinksElementHeight(linkWrapper,_this.collapsedNavItemsHeight)}),_this.DYNAMIC_GROUPED_LINKS_HEIGHT_MS))},this.topNavResizedHandler=function(_ref){var _a,size=_ref.detail.size;size!==_this.deviceSize&&(_this.deviceSize=size,_this.inTopNavSideMenu=size<=((null===(_a=_this.parentEl)||void 0===_a?void 0:_a.customMobileBreakpoint)||_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.D.L))},this.setGroupedNavItemTabIndex=function(tabIndexValue){_this.el.querySelectorAll(_this.IC_NAVIGATION_ITEM).forEach((function(navigationItem){var _a,navItem=(null===(_a=navigationItem.shadowRoot)||void 0===_a?void 0:_a.querySelector("a"))||navigationItem.querySelector("a");navItem&&navItem.setAttribute("tabindex",tabIndexValue)}))},this.toggleGroupedLinkWrapperHeight=function(wrapper,expanded){wrapper&&(expanded?(_this.isSideNavExpanded?_this.setGroupedLinksElementHeight(wrapper,_this.expandedNavItemsHeight):_this.setGroupedLinksElementHeight(wrapper,_this.collapsedNavItemsHeight),_this.setGroupedNavItemTabIndex("0")):(wrapper.style.setProperty("--navigation-child-items-height","0"),_this.setGroupedNavItemTabIndex("-1")))},this.toggleExpanded=function(){var _a;_this.expanded=!_this.expanded;var linkWrapper=null===(_a=_this.el.shadowRoot)||void 0===_a?void 0:_a.querySelector(_this.GROUPED_LINKS_WRAPPER_CLASS);_this.toggleGroupedLinkWrapperHeight(linkWrapper,_this.expanded)},this.handleClick=function(ev){"top"===_this.navigationType&&ev.detail?_this.toggleDropdown():_this.toggleExpanded()},this.handleBlur=function(ev){var target=ev.relatedTarget;_this.el.contains(target)||_this.hideDropdown()},this.handleTopNavKeydown=function(ev){" "===ev.key||"Enter"===ev.key?_this.toggleDropdown():_this.inTopNavSideMenu||"Escape"!==ev.key||_this.hideDropdown()},this.handleKeydown=function(ev){if("Enter"===ev.key||" "===ev.key||"Escape"===ev.key)switch(_this.navigationType){case"top":_this.handleTopNavKeydown(ev);break;case"side":_this.toggleExpanded(),ev.preventDefault();break;default:_this.toggleExpanded()}},this.handleMouseLeave=function(ev){var relTarget=ev.relatedTarget;_this.mouseGate=!1,_this.el.contains(relTarget)||relTarget===_this.dropdown||document.activeElement===_this.el||_this.el.contains(document.activeElement)||(null==relTarget?void 0:relTarget.nodeName)!==_this.nodeName||!0!==_this.dropdownOpen?_this.el.contains(relTarget)||relTarget===_this.dropdown||_this.el.contains(document.activeElement)||(_this.mouseGate=!1,setTimeout((function(){_this.dropdownOpen&&_this.hideDropdown()}),500)):(_this.mouseGate=!0,_this.hideDropdown())},this.handleMouseEnter=function(ev){var relTarget=ev.relatedTarget;document.addEventListener("keydown",_this.handleKeydown),(null==relTarget?void 0:relTarget.nodeName)===_this.nodeName&&!0===_this.mouseGate?_this.showDropdown():!1===_this.dropdownOpen&&null!==relTarget&&!1===_this.mouseGate&&(_this.mouseGate=!0,setTimeout((function(){_this.mouseGate&&_this.showDropdown()}),500))},this.renderDropdownGroupedLinks=function(){return(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:_defineProperty(_defineProperty(_defineProperty({},"navigation-group-dropdown",!_this.inTopNavSideMenu),"navigation-group-dropdown-side-menu",_this.inTopNavSideMenu),"selected",_this.dropdownOpen&&!_this.inTopNavSideMenu),onMouseLeave:_this.inTopNavSideMenu?void 0:_this.handleMouseLeave,ref:function ref(el){return _this.dropdown=el}},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav",{class:_defineProperty({},"navigation-group-dropdown-items",!_this.inTopNavSideMenu)},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul",null,(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))))},this.renderGroupedLinks=function(){return(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul",{class:"grouped-links-wrapper"},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))},this.getNavigationChildItemsHeight=function(){var navigationChildItemsHeight=0;return _this.allGroupedNavigationItems.forEach((function(navItem){navigationChildItemsHeight+=navItem.offsetHeight})),"".concat(navigationChildItemsHeight,"px")},this.setInitialGroupedLinksWrapperHeight=function(){var _a,linkWrapper=null===(_a=_this.el.shadowRoot)||void 0===_a?void 0:_a.querySelector(_this.GROUPED_LINKS_WRAPPER_CLASS);linkWrapper&&(_this.isSideNavExpanded||_this.collapsedNavItemsHeight||!_this.expanded||(_this.collapsedNavItemsHeight=_this.getNavigationChildItemsHeight(),_this.setGroupedLinksElementHeight(linkWrapper,_this.collapsedNavItemsHeight)),_this.isSideNavExpanded&&_this.expanded&&(_this.expandedNavItemsHeight=_this.getNavigationChildItemsHeight(),_this.setGroupedLinksElementHeight(linkWrapper,_this.expandedNavItemsHeight)))},this.renderNavigationItems=function(){return _this.dropdownOpen||_this.inTopNavSideMenu&&!_this.expandable?_this.renderDropdownGroupedLinks():"top"!==_this.navigationType?_this.renderGroupedLinks():null}}var _setFocus;return function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(NavigationGroup,[{key:"disconnectedCallback",value:function disconnectedCallback(){var _a,_b;"side"===this.navigationType?null===(_a=this.parentEl)||void 0===_a||_a.removeEventListener("icSideNavExpanded",this.sideNavExpandHandler):"top"===this.navigationType&&(null===(_b=this.parentEl)||void 0===_b||_b.removeEventListener("icTopNavResized",this.topNavResizedHandler))}},{key:"componentWillLoad",value:function componentWillLoad(){var _a,_b;this.deviceSize=(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.e)();var _getNavItemParentDeta=(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.y)(this.el),navType=_getNavItemParentDeta.navType,parent=_getNavItemParentDeta.parent;this.navigationType=navType,this.parentEl=parent,"side"===this.navigationType?null===(_a=this.parentEl)||void 0===_a||_a.addEventListener("icSideNavExpanded",this.sideNavExpandHandler):"top"===this.navigationType&&(null===(_b=this.parentEl)||void 0===_b||_b.addEventListener("icTopNavResized",this.topNavResizedHandler),this.deviceSize<=this.parentEl.customMobileBreakpoint&&(this.inTopNavSideMenu=!0))}},{key:"componentDidLoad",value:function componentDidLoad(){var _this2=this;this.allGroupedNavigationItems=Array.from(this.el.querySelectorAll(this.IC_NAVIGATION_ITEM)),setTimeout((function(){return _this2.setInitialGroupedLinksWrapperHeight()}),this.DYNAMIC_GROUPED_LINKS_HEIGHT_MS)}},{key:"childBlurHandler",value:function childBlurHandler(){this.hideDropdown()}},{key:"navItemClickHandler",value:function navItemClickHandler(){this.hideDropdown()}},{key:"brandChangeHandler",value:function brandChangeHandler(ev){this.focusStyle=ev.detail.mode}},{key:"setFocus",value:(_setFocus=function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(){return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:this.groupEl&&this.groupEl.focus();case 1:case"end":return _context.stop()}}),_callee,this)}))),function setFocus(){return _setFocus.apply(this,arguments)})},{key:"toggleDropdown",value:function toggleDropdown(){this.dropdownOpen=!this.dropdownOpen}},{key:"showDropdown",value:function showDropdown(){this.dropdownOpen||this.toggleDropdown()}},{key:"hideDropdown",value:function hideDropdown(){document.removeEventListener("keydown",this.handleKeydown),this.dropdownOpen&&this.toggleDropdown()}},{key:"setGroupedLinksElementHeight",value:function setGroupedLinksElementHeight(groupedNavItemWrapper,height){groupedNavItemWrapper.style.setProperty("--navigation-child-items-height",height)}},{key:"render",value:function render(){var _this3=this,label=this.label,dropdownOpen=this.dropdownOpen,inTopNavSideMenu=this.inTopNavSideMenu,expandable=this.expandable;return(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"d1257c69992a354d662fd3c055c3e24cdcccd9c2",class:_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({},"in-side-menu",inTopNavSideMenu),"ic-navigation-group-expanded",this.expanded),"ic-navigation-group-collapsed",!this.expanded),"ic-navigation-group-side-nav","side"===this.navigationType),"ic-theme-".concat(this.theme),"inherit"!==this.theme),role:"listitem"},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{key:"3ca74d477dca0fb43cb3320b391a8e39e3d32f3f",onMouseEnter:inTopNavSideMenu||"top"!==this.navigationType?void 0:this.handleMouseEnter,onMouseLeave:"top"===this.navigationType?this.handleMouseLeave:void 0,tabindex:inTopNavSideMenu&&!expandable?"-1":"0",onBlur:this.handleBlur,onClick:expandable?this.handleClick:void 0,onKeyDown:this.handleKeydown,class:_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({},"navigation-group",!0),this.focusStyle,!inTopNavSideMenu),"navigation-group-side-menu",inTopNavSideMenu&&!expandable),"navigation-group-side-menu-collapsed",inTopNavSideMenu&&!!expandable&&!dropdownOpen),"navigation-group-side-menu-expanded",inTopNavSideMenu&&!!expandable&&dropdownOpen),"selected",dropdownOpen&&!inTopNavSideMenu),ref:function ref(el){return _this3.groupEl=el},"aria-expanded":"".concat(dropdownOpen||this.expanded),"aria-haspopup":"".concat(!inTopNavSideMenu&&"top"===this.navigationType)},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{key:"6dbe918c4051106ba9805bf21f9721da4421d2c7",variant:"side"===this.navigationType?"caption":"label"},label),"side"===this.navigationType&&expandable&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"fd9a52379a1f72bace5de6cc419149ed390c9da6",class:{"chevron-toggle-icon-wrapper":!0,"chevron-toggle-icon-closed":this.expanded},innerHTML:_chevron_icon_589e3b46_js__WEBPACK_IMPORTED_MODULE_2__.C})),this.renderNavigationItems())}},{key:"el",get:function get(){return(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}}],[{key:"delegatesFocus",get:function get(){return!0}}]),NavigationGroup}();NavigationGroup.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;--ic-typography-color:currentcolor}:host(.in-side-menu){border-bottom:var(--ic-border-width) solid\n    var(--ic-divider-background-monochrome);padding:var(--ic-space-md) 0}:host .navigation-group{height:100%;width:-moz-fit-content;width:fit-content;color:var(--ic-brand-text-color);display:flex;align-items:center;justify-content:center;padding:0 var(--ic-space-md) var(--ic-space-xxs);transition:var(--ic-easing-transition-slow);position:relative;background:none;border:none;white-space:nowrap}:host(.in-side-menu) .navigation-group{height:2.5rem;width:100%;text-align:left}:host(.in-side-menu) .navigation-group .ic-typography-label{width:11.875rem}:host(.in-side-menu) .navigation-group-side-menu{color:var(--ic-top-navigation-nav-group-link);justify-content:flex-start;padding:0 var(--ic-space-md) 0 var(--ic-space-md)}:host(.in-side-menu) .navigation-group-side-menu-collapsed,:host(.in-side-menu) .navigation-group-side-menu-expanded{color:var(--ic-top-navigation-nav-group-link);justify-content:flex-start;padding-left:var(--ic-space-md)}:host(.in-side-menu) .navigation-group-side-menu-expanded{margin-bottom:var(--ic-space-xs)}:host(.in-side-menu) .navigation-group-side-menu-collapsed::after,:host(.in-side-menu) .navigation-group-side-menu-expanded::after{border-style:solid;border-width:0.125em 0.125em 0 0;content:"";display:inline-block;height:0.45em;left:0.75em;position:relative;top:-0.1em;transform:rotate(135deg);vertical-align:top;width:0.45em}:host(.in-side-menu) .navigation-group-side-menu-expanded::after{top:0.15em;transform:rotate(-45deg)}:host .navigation-group:hover,:host .navigation-group:active,:host .selected{background-color:var(--ic-architectural-20);color:var(--ic-color-text-primary-light);outline:none;cursor:pointer}:host(:not(.in-side-menu)) .navigation-group:focus{box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius);outline:var(--ic-hc-focus-outline);z-index:var(--ic-z-index-navigation-item);transition:box-shadow var(--ic-easing-transition-fast)}:host(.in-side-menu) .navigation-group-side-menu:hover,:host(.in-side-menu) .navigation-group-side-menu:focus{background-color:var(--ic-top-navigation-nav-group-hover);color:var(--ic-top-navigation-nav-group-link);cursor:auto;box-shadow:none;outline:none}:host(.in-side-menu) .navigation-group-side-menu:active{background-color:var(--ic-top-navigation-nav-group-pressed);color:var(--ic-top-navigation-nav-group-link)}:host(.in-side-menu) .navigation-group-side-menu:focus{outline:var(--ic-hc-focus-outline)}:host(.in-side-menu) .navigation-group-side-menu-expanded:hover:not(:focus),:host(.in-side-menu) .navigation-group-side-menu-collapsed:hover:not(:focus){background-color:var(--ic-action-dark-bg-hover);color:var(--ic-action-default);cursor:pointer}:host(.in-side-menu) .navigation-group-side-menu-expanded:active:not(:focus),:host(.in-side-menu) .navigation-group-side-menu-collapsed:active:not(:focus){background-color:var(--ic-action-dark-bg-pressed);color:var(--ic-action-default)}:host(.in-side-menu) .navigation-group-side-menu-expanded:focus,:host(.in-side-menu) .navigation-group-side-menu-collapsed:focus{color:var(--ic-action-default);box-shadow:var(--ic-border-focus-inset);border-radius:var(--ic-border-radius-inset);outline:var(--ic-hc-focus-outline)}:host .navigation-group-dropdown{background-color:var(--ic-top-navigation-menu-background);border-bottom:var(--ic-space-1px) solid var(--ic-top-navigation-menu-border);position:absolute;left:0;right:0;padding:var(--ic-space-xs) var(--ic-space-md);box-shadow:0 0.375rem 0.5rem -0.375rem rgba(0 0 0 / 20%);z-index:calc(var(--ic-z-index-navigation-item) - 1)}:host .navigation-group-dropdown-items-list{list-style:none;display:flex;flex-flow:column wrap;align-content:flex-start;padding-left:var(--ic-space-md);max-height:16.5rem}:host .chevron-toggle-icon-wrapper{display:flex;align-items:center}:host .chevron-toggle-icon-wrapper svg{transform:rotate(90deg);height:var(--ic-space-lg);width:var(--ic-space-lg)}:host .chevron-toggle-icon-closed svg{transform:rotate(-90deg)}:host(.ic-navigation-group-expanded) .grouped-links-wrapper{height:var(--navigation-child-items-height, auto) !important;transition:var(--ic-easing-transition-slow);overflow:hidden}:host(.ic-navigation-group-side-nav) .link,:host(.ic-navigation-group-side-nav) ::slotted(a){height:var(--navigation-child-items-height, auto)}:host(.ic-navigation-group-collapsed) .grouped-links-wrapper{height:0;transition:var(--ic-easing-transition-slow);overflow:hidden}:host(.ic-navigation-group-side-nav) .navigation-group{height:var(--navigation-group-height);width:var(--navigation-group-width);justify-content:var(--navigation-group-justify-content);padding-right:var(--navigation-group-expand-toggle-padding)}:host(.ic-navigation-group-side-nav) .navigation-group:hover,:host(.ic-navigation-group-side-nav) .navigation-group:active,:host(.ic-navigation-group-side-nav) .selected{background-color:var(--navigation-group-hover);color:var(--navigation-group-text-hover)}:host(.ic-navigation-group-side-nav) .navigation-group:focus{box-shadow:var(--ic-border-focus-inset);border-radius:var(--ic-border-radius-inset);background:none}:host(.ic-navigation-group-side-nav) .ic-typography-caption{position:var(--navigation-group-title-position);left:var(--navigation-group-title-position-left);white-space:nowrap}'}}]);