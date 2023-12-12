"use strict";(self.webpackChunk_ukic_canary_web_components=self.webpackChunk_ukic_canary_web_components||[]).push([[746],{"./dist/esm/ic-tab-panel.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_tab_panel:()=>TabPanel});__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_e437a4b1_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./dist/esm/index-e437a4b1.js"),_types_5fc5b9bd_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./dist/esm/types-5fc5b9bd.js"),_helpers_681d5123_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./dist/esm/helpers-681d5123.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}var TabPanel=function(){function TabPanel(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,TabPanel),(0,_index_e437a4b1_js__WEBPACK_IMPORTED_MODULE_7__.r)(this,hostRef),this.tabPanelCreated=(0,_index_e437a4b1_js__WEBPACK_IMPORTED_MODULE_7__.c)(this,"tabPanelCreated",7),this.tabPanelRemoved=(0,_index_e437a4b1_js__WEBPACK_IMPORTED_MODULE_7__.c)(this,"tabPanelRemoved",7),this.appearance="dark",this.contextId="default",this.panelId=void 0,this.selectedTab=void 0,this.tabPosition=void 0}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(TabPanel,[{key:"connectedCallback",value:function connectedCallback(){this.tabPanelCreated.emit(this.el)}},{key:"disconnectedCallback",value:function disconnectedCallback(){var tabContext=document.querySelector("ic-tab-context[context-id="+this.contextId+"]");tabContext&&tabContext.tabRemovedHandler()}},{key:"render",value:function render(){var _class,panelId=this.panelId,selectedTab=this.selectedTab,appearance=this.appearance;return(0,_index_e437a4b1_js__WEBPACK_IMPORTED_MODULE_7__.h)(_index_e437a4b1_js__WEBPACK_IMPORTED_MODULE_7__.H,{class:(_class={},_class["ic-tab-panel-light"]=appearance===_types_5fc5b9bd_js__WEBPACK_IMPORTED_MODULE_8__.I.Light,_class),role:"tabpanel",hidden:!(0,_helpers_681d5123_js__WEBPACK_IMPORTED_MODULE_9__.d)(panelId)||!(0,_helpers_681d5123_js__WEBPACK_IMPORTED_MODULE_9__.d)(selectedTab)||!(panelId===selectedTab)},(0,_index_e437a4b1_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",null,(0,_index_e437a4b1_js__WEBPACK_IMPORTED_MODULE_7__.h)("slot",null)))}},{key:"el",get:function get(){return(0,_index_e437a4b1_js__WEBPACK_IMPORTED_MODULE_7__.g)(this)}}]),TabPanel}();TabPanel.style=":host{display:block}:host(.ic-tab-panel-light){color:white}"}}]);