"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[926],{"./dist/esm/ic-empty-state.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_empty_state:()=>EmptyState});__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_36ab8165_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./dist/esm/index-36ab8165.js"),_helpers_fdbfdb33_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./dist/esm/helpers-fdbfdb33.js");__webpack_require__("./dist/esm/types-dd515332.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var EmptyState=function(){function EmptyState(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,EmptyState),(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_7__.r)(this,hostRef),this.aligned="left",this.body=void 0,this.bodyMaxLines=void 0,this.heading=void 0,this.imageSize="default",this.subheading=void 0}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(EmptyState,[{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_fdbfdb33_js__WEBPACK_IMPORTED_MODULE_8__.a)([{prop:this.heading,propName:"heading"}],"Empty State")}},{key:"render",value:function render(){var _class,aligned=this.aligned,body=this.body,bodyMaxLines=this.bodyMaxLines,heading=this.heading,imageSize=this.imageSize,subheading=this.subheading;return(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_7__.h)(_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_7__.H,{class:(_class={},_class[""+aligned]=!0,_class["image-"+imageSize]=(0,_helpers_fdbfdb33_js__WEBPACK_IMPORTED_MODULE_8__.i)(this.el,"image"),_class)},(0,_helpers_fdbfdb33_js__WEBPACK_IMPORTED_MODULE_8__.i)(this.el,"image")&&(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_7__.h)("slot",{name:"image"}),(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",null,(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_7__.h)("ic-typography",{variant:"h4"},heading),subheading&&(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_7__.h)("ic-typography",{variant:"subtitle-small"},subheading),body&&(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_7__.h)("ic-typography",{maxLines:bodyMaxLines},body)),(0,_helpers_fdbfdb33_js__WEBPACK_IMPORTED_MODULE_8__.i)(this.el,"actions")&&(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",{class:"action-area"},(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_7__.h)("slot",{name:"actions"})))}},{key:"el",get:function get(){return(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_7__.g)(this)}}]),EmptyState}();EmptyState.style=":host{gap:var(--ic-space-xs);padding:var(--ic-space-xs)}:host,.action-area{display:flex;flex-direction:column}.action-area{gap:var(--ic-space-md)}:host ::slotted(svg),:host ::slotted(img){border-radius:var(--ic-space-xxs)}:host(.right),:host(.right) .action-area{align-items:flex-end;text-align:right}:host(.center),:host(.center) .action-area{align-items:center;text-align:center}:host(.image-default) ::slotted(svg),:host(.image-default) ::slotted(img){height:calc(3 * var(--ic-space-lg)) !important;width:calc(3 * var(--ic-space-lg)) !important}:host(.image-small) ::slotted(svg),:host(.image-small) ::slotted(img){height:var(--ic-space-xxl) !important;width:var(--ic-space-xxl) !important}:host(.image-large) ::slotted(svg),:host(.image-large) ::slotted(img){height:calc(4 * var(--ic-space-xl)) !important;width:calc(4 * var(--ic-space-xl)) !important}"}}]);