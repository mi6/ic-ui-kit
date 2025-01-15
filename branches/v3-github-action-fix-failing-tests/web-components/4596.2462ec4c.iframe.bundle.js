"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[4596],{"./dist/esm/close-icon-539ec8d1.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>closeIcon});const closeIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>\n    <title>close icon</title>\n</svg>\n'},"./dist/esm/ic-alert.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_alert:()=>Alert});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-d1d2c456.js"),_close_icon_539ec8d1_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/esm/close-icon-539ec8d1.js"),_helpers_e594bfc6_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/helpers-e594bfc6.js");const Alert=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icDismiss=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icDismiss",7),this.hostMutationObserver=null,this.dismissAction=()=>{this.icDismiss.emit()},this.hostMutationCallback=mutationList=>{mutationList.some((({type,addedNodes,removedNodes})=>"childList"===type&&(0,_helpers_e594bfc6_js__WEBPACK_IMPORTED_MODULE_1__.c)(addedNodes,removedNodes,"action")))&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.f)(this)},this.alertTitleWrap=!1,this.visible=!0,this.announced=!0,this.dismissible=!1,this.heading="",this.message=void 0,this.showDefaultIcon=!0,this.theme="inherit",this.titleAbove=!1,this.variant="neutral"}disconnectedCallback(){var _a;null===(_a=this.hostMutationObserver)||void 0===_a||_a.disconnect()}componentDidLoad(){this.alertTitleShouldWrap(),this.hostMutationObserver=new MutationObserver(this.hostMutationCallback),this.hostMutationObserver.observe(this.el,{childList:!0})}handleClick(){this.visible=!this.visible}alertTitleShouldWrap(){var _a;(null===(_a=this.el.shadowRoot.querySelector(".alert-title"))||void 0===_a?void 0:_a.clientHeight)>24&&(this.alertTitleWrap=!0)}render(){const{variant,heading,message,titleAbove,dismissible,announced,visible,showDefaultIcon,theme}=this;return visible&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{role:announced?"alert":null,class:{[_helpers_e594bfc6_js__WEBPACK_IMPORTED_MODULE_1__.I.Dark]:!0,[`ic-theme-${theme}`]:"inherit"!==theme}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{container:!0,[`container-${variant}`]:!0}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"alert-icon-container"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{divider:!0,[`divider-${variant}`]:!0}}),"neutral"===variant?(0,_helpers_e594bfc6_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"neutral-icon")?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"alert-icon svg-container icon-neutral"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"neutral-icon"})):showDefaultIcon?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:{"alert-icon":!0,"svg-container":!0,[`icon-${variant}`]:!0},innerHTML:_helpers_e594bfc6_js__WEBPACK_IMPORTED_MODULE_1__.V[variant].icon}):(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"icon-placeholder"}):(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:{"alert-icon":!0,"svg-container":!0,[`icon-${variant}`]:!0},innerHTML:_helpers_e594bfc6_js__WEBPACK_IMPORTED_MODULE_1__.V[variant].icon})),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"alert-content"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"alert-message":!0,"alert-message-title-above":titleAbove||this.alertTitleWrap}},heading&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{class:{"alert-title":!0,"alert-title-above":titleAbove||this.alertTitleWrap},variant:"subtitle-large"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("p",null,heading)),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"message"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"body"},message))),(0,_helpers_e594bfc6_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"action")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"alert-action-container"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"action"}))),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"dismiss-icon-container"},dismissible&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{class:{"svg-container":!0,"dismiss-icon":!0},innerHTML:_close_icon_539ec8d1_js__WEBPACK_IMPORTED_MODULE_2__.c,onClick:this.dismissAction,variant:"icon",theme:"dark",title:"Dismiss"}))))}get el(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};Alert.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block}:host ::slotted(ic-typography){--ic-typography-color:var(--ic-alert-description)}.container{min-height:3.5rem;border-radius:var(--ic-space-xxs) var(--ic-space-xxxs) var(--ic-space-xxxs)\n    var(--ic-space-xxs);position:relative;display:flex;align-items:center}.container-neutral{background-color:var(--ic-alert-background-neutral);border:var(--ic-space-xxxs) solid var(--ic-alert-border-neutral)}.container-info{background-color:var(--ic-alert-background-info);border:var(--ic-space-xxxs) solid var(--ic-alert-border-info)}.container-warning{background-color:var(--ic-alert-background-warning);border:var(--ic-space-xxxs) solid var(--ic-alert-border-warning)}.container-error{background-color:var(--ic-alert-background-error);border:var(--ic-space-xxxs) solid var(--ic-alert-border-error)}.container-success{background-color:var(--ic-alert-background-success);border:var(--ic-space-xxxs) solid var(--ic-alert-border-success)}.alert-icon-container{height:100%;display:flex;align-items:center}.divider{height:100%;width:var(--ic-space-xs);border-radius:var(--ic-space-xxxs) 0 0 var(--ic-space-xxxs);position:absolute}.divider-neutral{background-color:var(--ic-alert-status-type-neutral)}.divider-info{background-color:var(--ic-alert-status-type-info)}.divider-warning{background-color:var(--ic-alert-status-type-warning)}.divider-error{background-color:var(--ic-alert-status-type-error)}.divider-success{background-color:var(--ic-alert-status-type-success)}.alert-icon{height:var(--ic-space-lg);width:1.375rem;margin-left:1.125rem}.icon-placeholder{margin-left:var(--ic-space-xs)}.alert-icon>svg{height:var(--ic-space-lg);width:var(--ic-space-lg);display:inline-block}:host([showdefaulticon="false"]) .icon-neutral{visibility:hidden;width:0;margin-left:0.625rem}.icon-neutral>svg,::slotted(svg){height:var(--ic-space-lg);width:var(--ic-space-lg);display:inline-block;fill:var(--ic-alert-icon-neutral)}:host([variant="info"]) .alert-icon svg{fill:var(--ic-alert-icon-info)}:host([variant="warning"]) .alert-icon svg{fill:var(--ic-alert-icon-warning)}:host([variant="error"]) .alert-icon svg{fill:var(--ic-alert-icon-error)}:host([variant="success"]) .alert-icon svg{fill:var(--ic-alert-icon-success)}.alert-content{display:flex;align-items:center;margin-left:0.625rem;width:100%}.alert-message{display:flex;align-items:center;padding:var(--ic-space-xs) var(--ic-space-xs) var(--ic-space-xs) 0;flex:1;--ic-typography-color:var(--ic-alert-description)}.alert-message-title-above{display:inline}.alert-title{margin-right:var(--ic-space-xs);--ic-typography-color:var(--ic-alert-title)}.alert-title-above{white-space:normal}.alert-action-container{margin-right:var(--ic-space-xs);display:flex;align-items:center}.dismiss-icon{margin-right:var(--ic-space-xxxs);margin-left:-0.375rem;padding:0.375rem;border:none;border-radius:50%;background-color:inherit;display:flex;align-items:center;justify-content:center}.dismiss-icon>svg{color:var(--ic-alert-icon-dismissible)}.dismiss-icon:hover{cursor:pointer}@media (max-width: 628px){.alert-content{display:flex;flex-direction:column;align-items:flex-start}.alert-message{display:flex;flex-direction:column;align-items:flex-start}.alert-title{white-space:normal}.alert-action-container{margin-bottom:var(--ic-space-xs)}}@media (forced-colors: active){.container{border:var(--ic-border-hc)}}'}}]);