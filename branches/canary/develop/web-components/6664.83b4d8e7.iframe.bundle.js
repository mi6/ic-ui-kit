"use strict";(self.webpackChunk_ukic_canary_web_components=self.webpackChunk_ukic_canary_web_components||[]).push([[6664],{"./dist/esm/ic-theme.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_theme:()=>Theme});__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_93509377_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./dist/esm/index-93509377.js"),_helpers_268c2b7f_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./dist/esm/helpers-268c2b7f.js");__webpack_require__("./dist/esm/types-f605c21c.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}var Theme=function(){function Theme(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Theme),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_10__.r)(this,hostRef),this.themeChange=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_10__.c)(this,"themeChange",7),this.checkThemeColorContrast=function(){(0,_helpers_268c2b7f_js__WEBPACK_IMPORTED_MODULE_11__.H)()<_helpers_268c2b7f_js__WEBPACK_IMPORTED_MODULE_11__.J&&(0,_helpers_268c2b7f_js__WEBPACK_IMPORTED_MODULE_11__.H)()>_helpers_268c2b7f_js__WEBPACK_IMPORTED_MODULE_11__.W&&console.warn("The theme colour does not provide enough contrast with either of the ICDS black or white foreground colours. Consider choosing a colour with a different brightness to achieve sufficient colour contrast for good visibility. See https://www.w3.org/TR/AERT/#color-contrast for more information about colour contrast.")},this.setThemeColor=function(){if(null!==_this.color){var colorRGBA=null,firstChar=_this.color.slice(0,1);"#"===firstChar?colorRGBA=(0,_helpers_268c2b7f_js__WEBPACK_IMPORTED_MODULE_11__.h)(_this.color):"r"===firstChar.toLowerCase()&&(colorRGBA=(0,_helpers_268c2b7f_js__WEBPACK_IMPORTED_MODULE_11__.r)(_this.color)),_this.setThemeRGBA(colorRGBA)}},this.setThemeRGBA=function(colorRGBA){if(null!==colorRGBA){var root=document.documentElement;root.style.setProperty("--ic-theme-primary-r",colorRGBA.r.toString()),root.style.setProperty("--ic-theme-primary-g",colorRGBA.g.toString()),root.style.setProperty("--ic-theme-primary-b",colorRGBA.b.toString()),root.style.setProperty("--ic-theme-primary-a",colorRGBA.a.toString()),_this.checkThemeColorContrast();var foregroundColor=(0,_helpers_268c2b7f_js__WEBPACK_IMPORTED_MODULE_11__.u)();_this.themeChange.emit({mode:foregroundColor,color:colorRGBA})}},this.color=null}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Theme,[{key:"watchColorPropHandler",value:function watchColorPropHandler(){this.setThemeColor()}},{key:"componentWillLoad",value:function componentWillLoad(){this.setThemeColor()}},{key:"render",value:function render(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_10__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_10__.H,null)}}],[{key:"watchers",get:function get(){return{color:["watchColorPropHandler"]}}}]),Theme}()}}]);