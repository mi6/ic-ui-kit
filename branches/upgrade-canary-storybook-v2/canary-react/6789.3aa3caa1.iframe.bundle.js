"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[6789],{"../web-components/dist/esm/ic-navigation-button.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_navigation_button:()=>NavigationButton});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_003f27c9_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-003f27c9.js"),_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js");const MUTABLE_ATTRIBUTES=[..._helpers_003f27c9_js__WEBPACK_IMPORTED_MODULE_1__.y,"title"],NavigationButton=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.inheritedAttributes={},this.hostMutationObserver=null,this.hostMutationCallback=mutationList=>{let forceComponentUpdate=!1;mutationList.forEach((({attributeName})=>{MUTABLE_ATTRIBUTES.includes(attributeName)&&(this.inheritedAttributes[attributeName]=this.el.getAttribute(attributeName),forceComponentUpdate=!0)})),forceComponentUpdate&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.f)(this)},this.initialAppearance=(0,_helpers_003f27c9_js__WEBPACK_IMPORTED_MODULE_1__.d)(),this.mode="navbar",this.download=!1,this.href=void 0,this.hreflang=void 0,this.label=void 0,this.referrerpolicy=void 0,this.rel=void 0,this.target=void 0}componentWillLoad(){this.inheritedAttributes=(0,_helpers_003f27c9_js__WEBPACK_IMPORTED_MODULE_1__.x)(this.el,MUTABLE_ATTRIBUTES)}componentDidLoad(){(0,_helpers_003f27c9_js__WEBPACK_IMPORTED_MODULE_1__.a)([{prop:this.label,propName:"label"}],"Navigation Button"),this.hostMutationObserver=new MutationObserver(this.hostMutationCallback),this.hostMutationObserver.observe(this.el,{attributes:!0})}componentWillRender(){const iconEl=this.el.querySelector('[slot="icon"]');null!==iconEl&&iconEl.setAttribute("viewBox","0 0 24 24")}disconnectedCallback(){var _a;null===(_a=this.hostMutationObserver)||void 0===_a||_a.disconnect()}navBarMenuOpenHandler(){this.mode="menu"}navBarMenuCloseHandler(){this.mode="navbar"}themeChangeHandler(ev){const theme=ev.detail;this.initialAppearance=theme.mode}async setFocus(){this.buttonEl&&this.buttonEl.focus()}render(){const{href,target,rel,download,referrerpolicy}=this;let label="",className="",variant="icon",appearance=this.initialAppearance,size="large",fullWidth=!1,disableTooltip=!1;"menu"===this.mode&&(label=this.label,variant="tertiary",appearance=_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__.I.Default,size="default",fullWidth=!0,className="popout-menu-button",disableTooltip=!0);const buttonProps={variant,appearance,size,href,target,rel,download,referrerpolicy,fullWidth,disableTooltip};return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{"in-side-menu":"menu"===this.mode}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",Object.assign({class:className,"aria-label":"icon"==variant?this.label:null,ref:el=>this.buttonEl=el},buttonProps,this.inheritedAttributes),label,(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{slot:"left-icon",name:"icon"}),(0,_helpers_003f27c9_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"badge")&&"icon"===variant&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"badge"})))}static get delegatesFocus(){return!0}get el(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};NavigationButton.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;margin-right:var(--ic-space-xs);list-style:none}:host(.in-side-menu){margin-right:0}:host::part(button){height:100%;min-height:2.5rem}'}}]);