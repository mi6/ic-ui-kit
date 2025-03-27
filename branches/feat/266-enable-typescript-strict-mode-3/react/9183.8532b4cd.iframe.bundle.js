"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[9183],{"../web-components/dist/esm/ic-toggle-button.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_toggle_button:()=>ToggleButton});var _index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-a7a720e7.js"),_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-de6293bf.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}var ToggleButton=function(){function ToggleButton(hostRef){var _this=this;!function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}(this,ToggleButton),(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icToggleChecked=(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icToggleChecked",7),this.checked=!1,this.disabled=!1,this.fullWidth=!1,this.iconPlacement="left",this.loading=!1,this.monochrome=!1,this.size="medium",this.theme="inherit",this.tooltipPlacement="bottom",this.variant="default",this.loopAttributes=function(){for(var _a,trackedAttributes=["loading","disabled","full-width","icon-placement","variant","size","theme","monochrome"],parentAttributes=null===(_a=_this.el.parentElement)||void 0===_a?void 0:_a.attributes,i=0;i<trackedAttributes.length;i++)if(parentAttributes&&null!==parentAttributes.getNamedItem(trackedAttributes[i])){var attribute=parentAttributes.getNamedItem(trackedAttributes[i]);if(attribute)switch(attribute.name){case trackedAttributes[0]:_this.loading="false"!==attribute.value;break;case trackedAttributes[1]:_this.disabled="false"!==attribute.value;break;case trackedAttributes[2]:_this.fullWidth="false"!==attribute.value;break;case trackedAttributes[3]:_this.iconPlacement=attribute.value;break;case trackedAttributes[4]:_this.variant=attribute.value;break;case trackedAttributes[5]:_this.size=attribute.value;break;case trackedAttributes[6]:_this.theme=attribute.value;break;case trackedAttributes[7]:_this.monochrome="false"!==attribute.value}}},this.handleFocus=function(ev){ev.stopImmediatePropagation()},this.handleClick=function(){!_this.loading&&!_this.disabled&&_this.icToggleChecked.emit({checked:_this.checked})}}return function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(ToggleButton,[{key:"watchDisabledHandler",value:function watchDisabledHandler(){(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el)}},{key:"componentWillLoad",value:function componentWillLoad(){(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el),(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.P)(this.el)&&this.loopAttributes()}},{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.b)([{prop:"icon"===this.variant?this.accessibleLabel:this.label,propName:"icon"===this.variant?"accessible-label":"label"}],"Toggle button")}},{key:"handleHostClick",value:function handleHostClick(e){this.disabled?e.stopImmediatePropagation():this.loading||(this.checked=!this.checked)}},{key:"render",value:function render(){return(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"c78713dd36d802105c7a3ed6ebfa544cecc5dd29",class:_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({},"ic-theme-".concat(this.theme),"inherit"!==this.theme),"ic-toggle-button-disabled",!!this.disabled),"ic-toggle-button-checked",!!this.checked),"ic-toggle-button-icon","icon"===this.variant),"ic-toggle-button-".concat(this.size),!0),"ic-toggle-button-loading",!!this.loading),"ic-toggle-button-monochrome",!!this.monochrome),"ic-theme-".concat(this.theme),"inherit"!==this.theme),onFocus:this.handleFocus},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{key:"cc47670cd6c3943dacbb6df162dd8cb4c5d44822","aria-pressed":this.checked.toString(),variant:"icon"===this.variant?"icon":"secondary",onClick:this.handleClick,title:this.accessibleLabel,"aria-label":"".concat(this.accessibleLabel?this.accessibleLabel:this.label,", ").concat(this.checked?"ticked":"unticked"),disabled:this.disabled,size:this.size,fullWidth:this.fullWidth,loading:this.loading,tooltipPlacement:this.tooltipPlacement},"icon"!==this.variant&&this.label,(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"8fe9637604ed05bf2e1515391b58c8bb7fece5c8"}),(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"icon")&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"935dbc29cb5f0433685f37cb9ed8233bdca72660",name:"icon",slot:"".concat(this.iconPlacement,"-icon")}),(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"badge")&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"56423a0b4de8dee8e329427189355ccc90884951",name:"badge",slot:"badge"})))}},{key:"el",get:function get(){return(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}}],[{key:"delegatesFocus",get:function get(){return!0}},{key:"watchers",get:function get(){return{disabled:["watchDisabledHandler"]}}}]),ToggleButton}();ToggleButton.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{--toggle-button-border:var(--ic-toggle-button-unselected-border);--toggle-button-text-colour:var(--ic-toggle-button-unselected-text);--toggle-button-border-hover:var(--ic-toggle-button-unselected-border-hover);--toggle-button-text-colour-hover:var(\n    --ic-toggle-button-unselected-text-hover\n  );--toggle-button-border-active:var(\n    --ic-toggle-button-unselected-border-pressed\n  );--toggle-button-text-colour-active:var(\n    --ic-toggle-button-unselected-text-pressed\n  )}:host(.ic-toggle-button-checked){--toggle-button-border:var(--ic-toggle-button-selected-border);--toggle-button-text-colour:var(--ic-toggle-button-selected-text);--toggle-button-border-hover:var(--ic-toggle-button-selected-border-hover);--toggle-button-text-colour-hover:var(--ic-toggle-button-selected-text);--toggle-button-border-active:var(\n    --ic-toggle-button-selected-border-pressed\n  );--toggle-button-text-colour-active:var(--ic-toggle-button-selected-text)}:host(.ic-toggle-button-monochrome){--toggle-button-border:var(--ic-toggle-button-unselected-border-monochrome);--toggle-button-text-colour:var(\n    --ic-toggle-button-unselected-text-monochrome\n  );--toggle-button-border-hover:var(\n    --ic-toggle-button-unselected-border-hover-monochrome\n  );--toggle-button-text-colour-hover:var(\n    --ic-toggle-button-unselected-text-monochrome\n  );--toggle-button-border-active:var(\n    --ic-toggle-button-unselected-border-pressed-monochrome\n  );--toggle-button-text-colour-active:var(\n    --ic-toggle-button-unselected-text-monochrome\n  )}:host(.ic-toggle-button-monochrome.ic-toggle-button-checked){--toggle-button-border:var(--ic-toggle-button-selected-border-monochrome);--toggle-button-text-colour:var(--ic-toggle-button-selected-text-monochrome);--toggle-button-border-hover:var(\n    --ic-toggle-button-selected-border-hover-monochrome\n  );--toggle-button-text-colour-hover:var(\n    --ic-toggle-button-selected-text-monochrome\n  );--toggle-button-border-active:var(\n    --ic-toggle-button-selected-border-pressed-monochrome\n  );--toggle-button-text-colour-active:var(\n    --ic-toggle-button-selected-text-monochrome\n  )}:host(.ic-toggle-button-disabled){--toggle-button-border:var(--ic-toggle-button-unselected-border-disabled);--toggle-button-text-colour:var(--ic-toggle-button-unselected-text-disabled)}:host(.ic-toggle-button-disabled.ic-toggle-button-monochrome){--toggle-button-border:var(\n    --ic-toggle-button-unselected-border-disabled-monochrome\n  );--toggle-button-text-colour:var(\n    --ic-toggle-button-unselected-text-disabled-monochrome\n  )}:host(.ic-toggle-button-disabled.ic-toggle-button-checked){--toggle-button-border:var(--ic-toggle-button-selected-border-disabled);--toggle-button-text-colour:var(--ic-toggle-button-selected-text-disabled)}:host(.ic-toggle-button-disabled.ic-toggle-button-checked.ic-toggle-button-monochrome){--toggle-button-border:var(\n    --ic-toggle-button-selected-border-disabled-monochrome\n  );--toggle-button-text-colour:var(\n    --ic-toggle-button-selected-text-disabled-monochrome\n  )}:host(.expand-toggle-group-child) ::part(button){width:100%;min-height:inherit;white-space:inherit;height:inherit}:host ic-button{--icon-width:var(--ic-space-lg);--icon-height:var(--ic-space-lg)}:host(.expand-toggle-group-child) ic-button{min-width:100%;min-height:100%;white-space:normal;height:100%}:host(.expand-toggle-group-child) ::part(button):focus,:host(.expand-toggle-group-child.ic-toggle-button-checked) ::part(button):focus{box-shadow:inset 0 0 0 var(--ic-space-xxxs) var(--ic-action-default),\n    var(--ic-border-focus)}:host(.expand-toggle-group-child.ic-toggle-button-light) ::part(button):focus,:host(.expand-toggle-group-child.ic-toggle-button-dark) ::part(button):focus{box-shadow:inset 0 0 0 var(--ic-space-xxxs) var(--ic-action-dark),\n    var(--ic-border-focus)}:host(:focus){z-index:1}:host ::part(button){border:var(--ic-border-width) solid var(--toggle-button-border);color:var(--toggle-button-text-colour)}:host ::part(button):hover{border:var(--ic-border-width) solid var(--toggle-button-border-hover);color:var(--toggle-button-text-colour-hover)}:host ::part(button):active{border:var(--ic-border-width) solid var(--toggle-button-border-active);color:var(--toggle-button-text-colour-active)}:host(.ic-toggle-button-disabled) ::part(button){border:var(--ic-space-1px) dashed var(--toggle-button-border);color:var(--toggle-button-text-colour)}:host(.ic-toggle-button-checked) ::part(button){background-color:var(--ic-toggle-button-selected-background);box-shadow:inset 0 0 0 var(--ic-space-xxxs)\n    var(--ic-toggle-button-selected-text)}:host(.ic-toggle-button-checked) ::part(button):focus{box-shadow:inset 0 0 0 var(--ic-space-xxxs)\n      var(--ic-toggle-button-selected-border-focus),\n    var(--ic-border-focus)}:host ::part(button):hover{background-color:var(--ic-toggle-button-unselected-background-hover)}:host ::part(button):active{background-color:var(--ic-toggle-button-unselected-background-pressed)}:host(.ic-toggle-button-checked) ::part(button):hover{background-color:var(--ic-toggle-button-selected-background-hover)}:host(.ic-toggle-button-checked) ::part(button):active,:host(.ic-toggle-button-icon.ic-toggle-button-checked) ::part(button):active{background-color:var(--ic-toggle-button-selected-background-pressed)}:host(.ic-toggle-button-monochrome) ::part(button):hover{background-color:var(\n    --ic-toggle-button-unselected-background-hover-monochrome\n  )}:host(.ic-toggle-button-monochrome) ::part(button):active{background-color:var(\n    --ic-toggle-button-unselected-background-pressed-monochrome\n  )}:host(.ic-toggle-button-monochrome.ic-toggle-button-checked) ::part(button){background-color:var(--ic-toggle-button-selected-background-monochrome)}:host(.ic-toggle-button-monochrome.ic-toggle-button-checked) ::part(button):hover{background-color:var(\n    --ic-toggle-button-selected-background-hover-monochrome\n  )}:host(.ic-toggle-button-monochrome.ic-toggle-button-checked) ::part(button):active,:host(.ic-toggle-button-icon.ic-toggle-button-monochrome.ic-toggle-button-checked) ::part(button):active{background-color:var(\n    --ic-toggle-button-selected-background-pressed-monochrome\n  )}:host(.ic-toggle-button-monochrome.ic-toggle-button-checked) ::part(button):focus{box-shadow:inset 0 0 0 var(--ic-space-xxxs)\n      var(--ic-toggle-button-selected-text),\n    var(--ic-border-focus)}:host(.ic-toggle-button-disabled.ic-toggle-button-checked) ::part(button),:host(.ic-toggle-button-icon.ic-toggle-button-disabled.ic-toggle-button-checked) ::part(button){background-color:transparent}:host(.ic-toggle-button-disabled.ic-toggle-button-checked) ::part(button),:host(.ic-toggle-button-icon.ic-toggle-button-disabled.ic-toggle-button-checked) ::part(button)::before{background-image:radial-gradient(\n    var(--ic-toggle-button-selected-background-disabled) 95%,\n    white 20%\n  );background-repeat:no-repeat}:host(.ic-toggle-button-disabled.ic-toggle-button-checked.ic-toggle-button-monochrome) ::part(button),:host(.ic-toggle-button-icon.ic-toggle-button-disabled.ic-toggle-button-checked.ic-toggle-button-monochrome) ::part(button)::before{background-image:radial-gradient(\n    var(--ic-toggle-button-selected-background-disabled-monochrome) 95%,\n    white 20%\n  );background-repeat:no-repeat}:host(.ic-toggle-button-icon) ::part(button){height:calc(var(--ic-space-xl) + var(--ic-space-xs));width:calc(var(--ic-space-xl) + var(--ic-space-xs))}:host(.ic-toggle-button-icon) ::part(button):active{background-color:var(--ic-action-default-bg-pressed)}:host(.ic-toggle-button-icon.ic-toggle-button-dark) ::part(button):active{background-color:var(--ic-action-dark-bg-pressed)}:host(.ic-toggle-button-icon.ic-toggle-button-light) ::part(button):active{background-color:var(--ic-action-light-bg-pressed)}:host(.ic-toggle-button-icon.ic-toggle-button-small) ::part(button){height:var(--ic-space-xl);width:var(--ic-space-xl)}:host(.ic-toggle-button-icon.ic-toggle-button-large) ::part(button){height:var(--ic-space-xxl);width:var(--ic-space-xxl)}:host(.ic-toggle-button-checked.ic-toggle-button-loading) ::part(button){--loading-button-background:var(\n    --ic-toggle-button-selected-background-pressed\n  );background-color:var(--ic-toggle-button-selected-background-pressed)}:host(.ic-toggle-button-loading) ::part(button){--loading-button-background:var(\n    --ic-toggle-button-unselected-background-pressed\n  );background-color:var(--ic-toggle-button-unselected-background-pressed)}:host(.ic-toggle-button-checked.ic-toggle-button-loading) ::part(ic-loading-container){--inner-color:var(--ic-toggle-button-loading-bar)}:host(.ic-toggle-button-loading) ::part(ic-loading-container){--inner-color:var(--ic-toggle-button-selected-loading-bar)}:host(.ic-toggle-button-checked.ic-toggle-button-loading.ic-toggle-button-monochrome) ::part(button){--loading-button-background:var(\n    --ic-toggle-button-selected-background-pressed-monochrome\n  );background-color:var(\n    --ic-toggle-button-selected-background-pressed-monochrome\n  )}:host(.ic-toggle-button-loading.ic-toggle-button-monochrome) ::part(button){--loading-button-background:var(\n    --ic-toggle-button-unselected-background-pressed-monochrome\n  );background-color:var(\n    --ic-toggle-button-unselected-background-pressed-monochrome\n  )}@media (forced-colors: active){:host(.ic-toggle-button-checked) ::part(button),:host(.ic-toggle-button-checked) ::part(button):hover{background-color:Highlight}:host(.ic-toggle-button-checked.ic-toggle-button-light) ::part(button),:host(.ic-toggle-button-checked.ic-toggle-button-light) ::part(button):hover{background-color:Highlight}:host(.ic-toggle-button-checked.ic-toggle-button-dark) ::part(button),:host(.ic-toggle-button-checked.ic-toggle-button-dark) ::part(button):hover{background-color:Highlight}:host(.ic-toggle-button-checked.ic-toggle-button-disabled) ::part(button){background-color:GrayText}:host(.ic-toggle-button-checked.ic-toggle-button-loading) ::part(button),:host(.ic-toggle-button-checked.ic-toggle-button-loading) ::part(button):hover{--loading-button-background:Highlight}}'}}]);