"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[9992],{"../web-components/dist/esm/ic-back-to-top.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_back_to_top:()=>BackToTop});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_2624c32c_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-2624c32c.js");const BackToTop=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.topObserver=null,this.getObservedEl=()=>document.querySelector("#ic-back-to-top-target"),this.setTargetElVisible=visible=>{this.targetElVisible=visible},this.setFooterVisible=visible=>{this.checkForClassificationBanner(),this.footerVisible=("undefined"==typeof window||0!==window.scrollY)&&visible},this.targetElObserverCallback=entries=>{this.setTargetElVisible(entries[0].isIntersecting)},this.footerObserverCallback=entries=>{this.setFooterVisible(entries[0].isIntersecting)},this.findTargetEl=target=>{let targetElement=null;return null==target?console.log("Error: No target ID specified for back to top component - defaulting to top of page"):(targetElement=document.querySelector(`${target.startsWith("#")?"":"#"}${target}`),null===targetElement&&console.log(`Error: Back to top target element '${target}' not found - defaulting to top of page`)),targetElement},this.createTopObserver=target=>{let objParent;if(this.targetEl=this.findTargetEl(target),null!==this.topObserver){const observedEl=this.getObservedEl();null!==observedEl&&(this.topObserver.unobserve(observedEl),observedEl.remove())}null===this.targetEl?(objParent=document.body,this.targetEl=objParent.firstElementChild,this.isTargetElNull=!0):(objParent=this.targetEl.parentNode,this.isTargetElNull=!1);const objBackToTopTargetEl=document.createElement("div");objBackToTopTargetEl.setAttribute("id","ic-back-to-top-target"),objBackToTopTargetEl.setAttribute("tabindex","-1"),objParent.insertBefore(objBackToTopTargetEl,this.targetEl);const marginTop=getComputedStyle(this.targetEl).marginTop;this.topObserver=new IntersectionObserver(this.targetElObserverCallback,{threshold:[0],rootMargin:`${marginTop} 0px 0px 0px`}),this.topObserver.observe(objBackToTopTargetEl)},this.handleClick=()=>{this.isTargetElNull?window.scrollTo(0,0):this.targetEl.scrollIntoView(),this.getObservedEl().focus()},this.checkForClassificationBanner=()=>{const banners=document.querySelectorAll("ic-classification-banner:not([inline='true'])");this.bannerOffset=banners.length>0},this.bannerOffset=!1,this.footerVisible=!1,this.targetElVisible=!0,this.target=void 0,this.theme="inherit",this.variant="default"}watchPropHandler(newValue,oldValue){(0,_helpers_2624c32c_js__WEBPACK_IMPORTED_MODULE_1__.o)(oldValue,newValue,(()=>{this.createTopObserver(newValue)}))}componentWillLoad(){this.createTopObserver(this.target),this.checkForClassificationBanner();let footers=document.querySelectorAll("ic-footer");if(0===footers.length&&(footers=document.querySelectorAll("footer")),footers.length){const footerEl=footers[footers.length-1],threshold=this.bannerOffset?.15:0;new IntersectionObserver(this.footerObserverCallback,{threshold:[threshold]}).observe(footerEl)}}componentDidLoad(){(0,_helpers_2624c32c_js__WEBPACK_IMPORTED_MODULE_1__.b)([{prop:this.target,propName:"target"}],"Back to Top")}render(){const{variant,bannerOffset,targetElVisible,footerVisible}=this,btnVariant="icon"===variant?"icon-secondary":"secondary",size="icon"===variant?"large":"medium",label="icon"===variant?"":"Back to top";return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{[`ic-theme-${this.theme}`]:"inherit"!==this.theme}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{"aria-label":"Back to top",variant:btnVariant,size,onClick:this.handleClick,class:{"offset-banner":bannerOffset,show:!targetElVisible,"by-footer":footerVisible,"icon-only":"icon"===variant},theme:this.theme},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"ic-back-to-top-icon",innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true">\n    <path d="M0 8L1.41 9.41L7 3.83V16H9V3.83L14.58 9.42L16 8L8 0L0 8Z"/>\n</svg>\n'}),label))}static get delegatesFocus(){return!0}get el(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{target:["watchPropHandler"]}}};BackToTop.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;position:absolute;right:0}ic-button{height:2.5rem;align-items:center;background-color:var(--ic-color-background-primary);border-radius:5rem;box-shadow:var(--ic-elevation-overlay);visibility:hidden;opacity:0;position:fixed;right:var(--ic-space-md);bottom:var(--ic-space-md);transition:visibility 0s linear var(--ic-transition-duration-slow),\n    opacity var(--ic-transition-duration-slow);z-index:var(--ic-z-index-back-to-top)}:host([variant="icon"]) ic-button::part(button){margin:0}ic-button::part(button){border-radius:5rem}ic-button.show{visibility:visible;opacity:1;transition:visibility 0s linear 0s,\n    opacity var(--ic-transition-duration-slow),\n    box-shadow var(--ic-easing-transition-fast)}ic-button.by-footer{position:relative;right:var(--ic-space-md);bottom:3.5rem}ic-button.offset-banner{margin-bottom:var(--ic-space-lg)}.ic-back-to-top-icon{padding-top:var(--ic-space-xxs);padding-right:var(--ic-space-xs)}.ic-back-to-top-icon>svg{height:var(--ic-space-md);width:var(--ic-space-md)}.icon-only{width:2.5rem}.icon-only .ic-back-to-top-icon>svg{padding-left:calc(var(--ic-space-xs) - var(--ic-space-1px))}@media (forced-colors: active){.icon-only .ic-back-to-top-icon>svg{padding-left:calc(var(--ic-space-xs) - var(--ic-space-xxxs))}}'}}]);