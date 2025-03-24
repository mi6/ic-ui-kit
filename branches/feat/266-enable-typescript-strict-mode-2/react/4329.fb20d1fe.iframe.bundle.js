"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[4329],{"../web-components/dist/esm/ic-toggle-button-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_toggle_button_group:()=>ToggleButtonGroup});var _index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-a7a720e7.js"),_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-de6293bf.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}var ToggleButtonGroup=function(){function ToggleButtonGroup(hostRef){var _this=this;!function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}(this,ToggleButtonGroup),(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icChange=(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icChange",7),this.lastKeyPressed={key:null,shift:!1},this.accessibleLabel="Toggle button group",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.monochrome=!1,this.selectMethod="manual",this.selectType="single",this.size="medium",this.theme="inherit",this.tooltipPlacement="bottom",this.variant="default",this.keyListener=function(ev){_this.lastKeyPressed={key:ev.key,shift:ev.shiftKey}},this.setSlottedAria=function(el){var _a,_b,_c,btn=null===(_c=null===(_b=null===(_a=el.shadowRoot)||void 0===_a?void 0:_a.querySelector("ic-button"))||void 0===_b?void 0:_b.shadowRoot)||void 0===_c?void 0:_c.querySelector("button"),aria=btn.getAttribute("aria-label")||"";aria+=", ",aria+=_this.accessibleLabel,btn.setAttribute("aria-label",aria)},this.handleHostFocus=function(ev){if(_this.loading||_this.disabled)return null;var el=ev.target,relEl=ev.relatedTarget,toggleButtons=Array.from(el.querySelectorAll("ic-toggle-button"));if((toggleButtons.every((function(el){return!el.checked}))||"single"!==_this.selectType)&&!1===_this.lastKeyPressed.shift||toggleButtons.every((function(el){return!el.checked}))&&!0===_this.lastKeyPressed.shift&&"IC-TOGGLE-BUTTON-GROUP"==relEl.tagName)toggleButtons[0].focus();else if(!1===_this.lastKeyPressed.shift||!0===_this.lastKeyPressed.shift&&"IC-TOGGLE-BUTTON-GROUP"==relEl.tagName){var toggledButton=toggleButtons.filter((function(el){return el.checked}));toggledButton[0].focus()}},this.handleKeyDown=function(event){var toggleButtonOptions=_this.getAllToggleButtons(),focussedChild=toggleButtonOptions.indexOf(toggleButtonOptions.filter((function(el){return el===document.activeElement}))[0]);switch(event.key){case"ArrowDown":case"ArrowRight":"auto"===_this.selectMethod?_this.proxySelectHandler(toggleButtonOptions[_this.getNextItemToSelect(focussedChild,!0)]):toggleButtonOptions[_this.getNextItemToSelect(focussedChild,!0)].focus();break;case"ArrowUp":case"ArrowLeft":"auto"===_this.selectMethod?_this.proxySelectHandler(toggleButtonOptions[_this.getNextItemToSelect(focussedChild,!1)]):toggleButtonOptions[_this.getNextItemToSelect(focussedChild,!1)].focus()}},this.getNextItemToSelect=function(currentItem,movingDown){var toggleButtonOptions=_this.getAllToggleButtons(),numToggles=toggleButtonOptions.length-1;currentItem<1&&(currentItem=0);var nextItem=movingDown?currentItem+1:currentItem-1;return nextItem<0?nextItem=numToggles:nextItem>numToggles&&(nextItem=0),toggleButtonOptions[nextItem].disabled&&(nextItem=_this.getNextItemToSelect(nextItem,movingDown)),nextItem}}return function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(ToggleButtonGroup,[{key:"watchDisabledHandler",value:function watchDisabledHandler(){var _this2=this;this.getAllToggleButtons().forEach((function(el){el.disabled=_this2.disabled})),(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el)}},{key:"watchFullWidthHandler",value:function watchFullWidthHandler(){var _this3=this;this.getAllToggleButtons().forEach((function(el){el.fullWidth=_this3.fullWidth}))}},{key:"watchLoadingHandler",value:function watchLoadingHandler(){var _this4=this;this.getAllToggleButtons().forEach((function(el){el.loading=_this4.loading}))}},{key:"watchMonochromeHandler",value:function watchMonochromeHandler(){var _this5=this;this.getAllToggleButtons().forEach((function(el){el.monochrome=_this5.monochrome}))}},{key:"watchSizeHandler",value:function watchSizeHandler(){var _this6=this;this.getAllToggleButtons().forEach((function(el){el.size=_this6.size}))}},{key:"watchThemeHandler",value:function watchThemeHandler(){var _this7=this;this.getAllToggleButtons().forEach((function(el){el.theme=_this7.theme}))}},{key:"watchTooltipPlacementHandler",value:function watchTooltipPlacementHandler(){var _this8=this;this.getAllToggleButtons().forEach((function(el){el.tooltipPlacement=_this8.tooltipPlacement}))}},{key:"watchVariantHandler",value:function watchVariantHandler(){var _this9=this;this.getAllToggleButtons().forEach((function(el){el.variant=_this9.variant}))}},{key:"selectHandler",value:function selectHandler(ev,tabTarget){var allToggles=this.getAllToggleButtons(),clickedToggle=ev.target;if(tabTarget&&tabTarget.focus(),"single"===this.selectType)!clickedToggle&&tabTarget&&(clickedToggle=tabTarget),allToggles.forEach((function(el){el.id!==clickedToggle.id&&el.checked&&(el.checked=!1)})),this.icChange.emit({checked:ev.detail.checked,selectedOption:clickedToggle});else{var toggledOptions=this.getAllToggleButtons().filter((function(el){return el.checked&&!el.disabled}));this.icChange.emit({checked:toggledOptions.map((function(opt){return opt.checked})),toggledOptions:toggledOptions.map((function(opt){return{toggleButton:opt}})),selectedOption:clickedToggle})}}},{key:"componentWillLoad",value:function componentWillLoad(){"multi"===this.selectType&&(this.selectMethod="manual"),document.addEventListener("keydown",this.keyListener),(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el)}},{key:"componentDidLoad",value:function componentDidLoad(){var _this10=this;this.getAllToggleButtons().forEach((function(el,i){_this10.setSlottedAria(el),el.id=i.toString(),el.tabIndex=-1,el.addEventListener("keydown",(function(ev){_this10.handleKeyDown(ev)})),el.classList.add("expand-toggle-group-child")}))}},{key:"disconnectedCallback",value:function disconnectedCallback(){null===document||void 0===document||document.removeEventListener("keydown",this.keyListener)}},{key:"proxySelectHandler",value:function proxySelectHandler(toggle){toggle.checked=!0;var customEv=new CustomEvent("icToggleChecked",{detail:{checked:toggle.checked}});this.selectHandler(customEv,toggle)}},{key:"getAllToggleButtons",value:function getAllToggleButtons(){return Array.from(this.el.querySelectorAll("ic-toggle-button"))}},{key:"render",value:function render(){return(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"5651ab98b697d63064e16adb92c98b85e84b9565",role:"group","aria-label":this.accessibleLabel,tabindex:0,class:_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({},"ic-theme-".concat(this.theme),"inherit"!==this.theme),"ic-toggle-button-group-full-width",!!this.fullWidth),"ic-toggle-button-group-loading",!!this.loading),"ic-toggle-button-group-disabled",this.disabled),"ic-toggle-button-group-monochrome",!!this.monochrome),"ic-theme-".concat(this.theme),"inherit"!==this.theme),onFocus:this.handleHostFocus},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"7e873ee8e49dba8b00a8f3b4723178471e1f2ad4"}))}},{key:"el",get:function get(){return(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}}],[{key:"watchers",get:function get(){return{disabled:["watchDisabledHandler"],fullWidth:["watchFullWidthHandler"],loading:["watchLoadingHandler"],monochrome:["watchMonochromeHandler"],size:["watchSizeHandler"],theme:["watchThemeHandler"],tooltipPlacement:["watchTooltipPlacementHandler"],variant:["watchVariantHandler"]}}}]),ToggleButtonGroup}();ToggleButtonGroup.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:root{display:block}:host{display:flex;flex-direction:row;width:-moz-fit-content;width:fit-content;min-width:-moz-min-content;min-width:min-content;border:var(--ic-border-width) solid var(--ic-toggle-button-unselected-border);border-radius:var(--ic-border-radius)}:host(.ic-toggle-button-group-full-width){width:100%;max-width:100%}:host(.ic-toggle-button-group-loading){min-width:-moz-max-content;min-width:max-content}:host(:focus){box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius);transition:var(--ic-transition-duration-fast);outline:none}::slotted(ic-toggle-button){flex-grow:1;width:-moz-min-content;width:min-content;--toggle-button-border:none !important;--toggle-button-border-hover:none !important;--toggle-button-border-active:none !important}::slotted(ic-toggle-button:not(:last-of-type)){border-right:var(--ic-border-width) solid\n    var(--ic-toggle-button-unselected-border)}:host(.ic-toggle-button-group-disabled){border:var(--ic-space-1px) dashed\n    var(--ic-toggle-button-unselected-border-disabled);pointer-events:none}:host(.ic-toggle-button-group-disabled) ::slotted(ic-toggle-button:not(:last-of-type)){border-right:var(--ic-space-1px) dashed\n    var(--ic-toggle-button-unselected-border-disabled)}:host(.ic-toggle-button-group-monochrome){border:var(--ic-border-width) solid\n    var(--ic-toggle-button-unselected-border-monochrome)}:host(.ic-toggle-button-group-monochrome) ::slotted(ic-toggle-button:not(:last-of-type)){border-right:var(--ic-border-width) solid\n    var(--ic-toggle-button-unselected-border-monochrome)}:host(.ic-toggle-button-group-disabled.ic-toggle-button-group-monochrome){border:var(--ic-border-width) dashed\n    var(--ic-toggle-button-unselected-border-disabled-monochrome)}:host(.ic-toggle-button-group-disabled.ic-toggle-button-group-monochrome) ::slotted(ic-toggle-button:not(:last-of-type)){border-right:var(--ic-border-width) solid\n    var(--ic-toggle-button-unselected-border-disabled-monochrome)}'}}]);