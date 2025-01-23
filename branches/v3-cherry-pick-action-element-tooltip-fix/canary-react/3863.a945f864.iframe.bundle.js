"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[3863],{"../canary-web-components/dist/esm/ic-toggle-button-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_toggle_button_group:()=>ToggleButtonGroup});var _index_93509377_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../canary-web-components/dist/esm/index-93509377.js"),_helpers_790a3b54_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../canary-web-components/dist/esm/helpers-790a3b54.js");const ToggleButtonGroup=class{constructor(hostRef){(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icChange=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icChange",7),this.keyListener=ev=>{this.lastKeyPressed={key:ev.key,shift:ev.shiftKey}},this.setSlottedAria=el=>{const btn=el.shadowRoot.querySelector("ic-button").shadowRoot.querySelector("button");let aria=btn.getAttribute("aria-label");aria+=", ",aria+=this.accessibleLabel,btn.setAttribute("aria-label",aria)},this.handleHostFocus=ev=>{if(this.loading||this.disabled)return null;const el=ev.target,relEl=ev.relatedTarget,toggleButtons=Array.from(el.querySelectorAll("ic-toggle-button"));if((toggleButtons.every((el=>!el.checked))||"single"!==this.selectType)&&!1===this.lastKeyPressed.shift||toggleButtons.every((el=>!el.checked))&&!0===this.lastKeyPressed.shift&&"IC-TOGGLE-BUTTON-GROUP"==relEl.tagName)toggleButtons[0].focus();else if(!1===this.lastKeyPressed.shift||!0===this.lastKeyPressed.shift&&"IC-TOGGLE-BUTTON-GROUP"==relEl.tagName){const toggledButton=toggleButtons.filter((el=>el.checked));toggledButton[0].focus()}},this.handleKeyDown=event=>{const toggleButtonOptions=this.getAllToggleButtons(),focussedChild=toggleButtonOptions.indexOf(toggleButtonOptions.filter((el=>el===document.activeElement))[0]);switch(event.key){case"ArrowDown":case"ArrowRight":"auto"===this.selectMethod?this.proxySelectHandler(toggleButtonOptions[this.getNextItemToSelect(focussedChild,!0)]):toggleButtonOptions[this.getNextItemToSelect(focussedChild,!0)].focus();break;case"ArrowUp":case"ArrowLeft":"auto"===this.selectMethod?this.proxySelectHandler(toggleButtonOptions[this.getNextItemToSelect(focussedChild,!1)]):toggleButtonOptions[this.getNextItemToSelect(focussedChild,!1)].focus()}},this.getNextItemToSelect=(currentItem,movingDown)=>{const toggleButtonOptions=this.getAllToggleButtons(),numToggles=toggleButtonOptions.length-1;currentItem<1&&(currentItem=0);let nextItem=movingDown?currentItem+1:currentItem-1;return nextItem<0?nextItem=numToggles:nextItem>numToggles&&(nextItem=0),toggleButtonOptions[nextItem].disabled&&(nextItem=this.getNextItemToSelect(nextItem,movingDown)),nextItem},this.lastKeyPressed={key:null,shift:!1},this.accessibleLabel="Toggle button group",this.disabled=!1,this.fullWidth=!1,this.iconPlacement=void 0,this.loading=!1,this.monochrome=!1,this.selectMethod="manual",this.selectType="single",this.size="medium",this.theme="inherit",this.variant="default"}watchDisabledHandler(){this.getAllToggleButtons().forEach((el=>{el.disabled=this.disabled})),(0,_helpers_790a3b54_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el)}watchMonochromeHandler(){this.getAllToggleButtons().forEach((el=>{el.monochrome=this.monochrome}))}watchThemeHandler(){this.getAllToggleButtons().forEach((el=>{el.theme=this.theme}))}selectHandler(ev,tabTarget){const allToggles=this.getAllToggleButtons();let clickedToggle=ev.target;if(tabTarget&&tabTarget.focus(),"single"===this.selectType)clickedToggle||(clickedToggle=tabTarget),allToggles.forEach((el=>{el.id!==clickedToggle.id&&el.checked&&(el.checked=!1)})),this.icChange.emit({checked:ev.detail.checked,selectedOption:clickedToggle});else{const toggledOptions=this.getAllToggleButtons().filter((el=>el.checked&&!el.disabled));this.icChange.emit({checked:toggledOptions.map((opt=>opt.checked)),toggledOptions:toggledOptions.map((opt=>({toggleButton:opt}))),selectedOption:clickedToggle})}}componentWillLoad(){"multi"===this.selectType&&(this.selectMethod="manual"),document.addEventListener("keydown",this.keyListener),(0,_helpers_790a3b54_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el)}componentDidLoad(){this.getAllToggleButtons().forEach(((el,i)=>{this.setSlottedAria(el),el.size=this.size,el.loading=this.loading,el.iconPlacement=this.iconPlacement,!el.disabled&&(el.disabled=this.disabled),el.theme=this.theme,el.monochrome=this.monochrome,el.variant=this.variant,el.fullWidth=this.fullWidth,el.id=i.toString(),el.tabIndex=-1,el.addEventListener("keydown",(ev=>{this.handleKeyDown(ev)})),el.classList.add("expand-toggle-group-child")}))}disconnectedCallback(){null===document||void 0===document||document.removeEventListener("keydown",this.keyListener)}proxySelectHandler(toggle){toggle.checked=!0;const customEv=new CustomEvent("icToggleChecked",{detail:{checked:toggle.checked}});this.selectHandler(customEv,toggle)}getAllToggleButtons(){return Array.from(this.el.querySelectorAll("ic-toggle-button"))}render(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.H,{role:"group","aria-label":this.accessibleLabel,"aria-disabled":this.disabled?"true":"false",tabindex:0,class:{[`ic-theme-${this.theme}`]:"inherit"!==this.theme,"ic-toggle-button-group-full-width":this.fullWidth,"ic-toggle-button-group-loading":this.loading,"ic-toggle-button-group-disabled":this.disabled,"ic-toggle-button-group-monochrome":this.monochrome,[`ic-theme-${this.theme}`]:"inherit"!==this.theme},onFocus:this.handleHostFocus},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))}get el(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{disabled:["watchDisabledHandler"],monochrome:["watchMonochromeHandler"],theme:["watchThemeHandler"]}}};ToggleButtonGroup.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:root{display:block}:host{display:flex;flex-direction:row;width:-moz-fit-content;width:fit-content;min-width:-moz-min-content;min-width:min-content;border:var(--ic-border-width) solid var(--ic-toggle-button-unselected-border);border-radius:var(--ic-border-radius)}:host(.ic-toggle-button-group-full-width){width:100%;max-width:100%}:host(.ic-toggle-button-group-loading){min-width:-moz-max-content;min-width:max-content}:host(:focus){box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius);transition:var(--ic-transition-duration-fast);outline:none}::slotted(ic-toggle-button){flex-grow:1;width:-moz-min-content;width:min-content;--toggle-button-border:none !important;--toggle-button-border-hover:none !important;--toggle-button-border-active:none !important}::slotted(ic-toggle-button:not(:last-of-type)){border-right:var(--ic-border-width) solid\n    var(--ic-toggle-button-unselected-border)}:host(.ic-toggle-button-group-disabled){border:var(--ic-space-1px) dashed\n    var(--ic-toggle-button-unselected-border-disabled);pointer-events:none}:host(.ic-toggle-button-group-disabled) ::slotted(ic-toggle-button:not(:last-of-type)){border-right:var(--ic-space-1px) dashed\n    var(--ic-toggle-button-unselected-border-disabled)}:host(.ic-toggle-button-group-monochrome){border:var(--ic-border-width) solid\n    var(--ic-toggle-button-unselected-border-monochrome)}:host(.ic-toggle-button-group-monochrome) ::slotted(ic-toggle-button:not(:last-of-type)){border-right:var(--ic-border-width) solid\n    var(--ic-toggle-button-unselected-border-monochrome)}:host(.ic-toggle-button-group-disabled.ic-toggle-button-group-monochrome){border:var(--ic-border-width) dashed\n    var(--ic-toggle-button-unselected-border-disabled-monochrome)}:host(.ic-toggle-button-group-disabled.ic-toggle-button-group-monochrome) ::slotted(ic-toggle-button:not(:last-of-type)){border-right:var(--ic-border-width) solid\n    var(--ic-toggle-button-unselected-border-disabled-monochrome)}'}}]);