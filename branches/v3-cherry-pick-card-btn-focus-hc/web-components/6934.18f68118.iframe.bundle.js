"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[6934],{"./dist/esm/chevron-icon-589e3b46.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Chevron});const Chevron='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M9.70687 6L8.29688 7.41L12.8769 12L8.29688 16.59L9.70687 18L15.7069 12L9.70687 6Z" fill="currentColor"/>\n</svg>\n'},"./dist/esm/ic-accordion.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_accordion:()=>Accordion});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-d1d2c456.js"),_helpers_a72a277b_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/helpers-a72a277b.js"),_chevron_icon_589e3b46_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/esm/chevron-icon-589e3b46.js");let accordionIds=0;const Accordion=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.accordionClicked=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"accordionClicked",7),this.accordionId="ic-accordion-"+accordionIds++,this.CONTENT_VISIBILITY_PROPERTY="--ic-expanded-content-visibility",this.toggleExpanded=()=>{this.expanded=!this.expanded,this.accordionClicked.emit({id:this.accordionId})},this.setAccordionAnimation=(el,duration,property,delay)=>{el.style.transitionDuration=`${duration}ms`,el.style.transitionProperty=property,el.style.transitionDelay=delay},this.setExpandedContentStyle=(ev,expandedContent)=>{"height"===ev.propertyName&&expandedContent.clientHeight>0&&(expandedContent.classList.add("expanded-content-opened"),expandedContent.style.height="auto")},this.hideExpandedContent=(ev,expandedContent)=>{"height"===ev.propertyName&&0===expandedContent.clientHeight&&expandedContent.style.setProperty(this.CONTENT_VISIBILITY_PROPERTY,"hidden")},this.animateExpandedContent=()=>{const elementHeight=this.expandedContentEl.scrollHeight;elementHeight>0&&this.expanded?(this.expandedContentEl.style.setProperty(this.CONTENT_VISIBILITY_PROPERTY,"visible"),this.expandedContentEl.style.height=`${elementHeight}px`,this.setAccordionAnimation(this.expandedContentEl,"300","height","ease-out"),this.expandedContentEl.addEventListener("transitionend",(e=>{this.setExpandedContentStyle(e,this.expandedContentEl)}))):this.expanded||(this.expandedContentEl.style.height=`${this.expandedContentEl.scrollHeight}px`,this.expandedContentEl.scrollHeight>0&&!this.expanded&&(this.expandedContentEl.style.height="0",this.setAccordionAnimation(this.expandedContentEl,"300","height","ease-in"),this.expandedContentEl.classList.remove("expanded-content-opened")),this.expandedContentEl.addEventListener("transitionend",(e=>{this.hideExpandedContent(e,this.expandedContentEl)})))},this.disabled=!1,this.expanded=!1,this.heading="",this.message="",this.size="medium",this.theme="inherit"}watchDisabledHandler(){(0,_helpers_a72a277b_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el)}handleExpandedWatch(){this.animateExpandedContent()}async setFocus(){this.accordionBtnHeading&&this.accordionBtnHeading.focus()}componentWillLoad(){(0,_helpers_a72a277b_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el)}disconnectedCallback(){this.expandedContentEl&&(this.expandedContentEl.removeEventListener("transitionend",(e=>this.setExpandedContentStyle(e,this.expandedContentEl)),!0),this.expandedContentEl.removeEventListener("transitionend",(e=>this.hideExpandedContent(e,this.expandedContentEl)),!0))}componentDidLoad(){this.expanded&&(this.expandedContentEl.style.height="auto",this.expandedContentEl.style.setProperty(this.CONTENT_VISIBILITY_PROPERTY,"visible"))}render(){const{size,disabled,expanded,theme}=this;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{id:this.accordionId,class:{"ic-accordion-disabled":disabled,[`ic-theme-${theme}`]:"inherit"!==theme},"aria-disabled":disabled?"true":"false"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{ref:el=>this.accordionBtnHeading=el,id:`${this.accordionId}-button`,disabled,tabindex:disabled?-1:0,class:{[`${size}`]:!0,"section-button":!0,"section-button-open":expanded&&!disabled},"aria-expanded":`${expanded}`,"aria-controls":"expanded-content-area",onClick:this.toggleExpanded},(0,_helpers_a72a277b_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"icon")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"icon-container"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"icon"})),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"subtitle-large",class:"section-header"},(0,_helpers_a72a277b_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"heading")?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"heading"}):this.heading),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:{"expand-chevron":!0,"content-expanded-chevron":expanded&&!disabled},"aria-hidden":"true",innerHTML:_chevron_icon_589e3b46_js__WEBPACK_IMPORTED_MODULE_2__.C})),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"expanded-content":!0},"aria-labelledby":`${this.accordionId}-button`,role:"region","aria-hidden":`${!expanded}`,id:"expanded-content-area",ref:el=>this.expandedContentEl=el},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"expanded-content-inner"},this.message?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"body"},this.message):(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))))}get el(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{disabled:["watchDisabledHandler"],expanded:["handleExpandedWatch"]}}};Accordion.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;border-bottom:var(--ic-space-1px) solid var(--ic-accordion-divider)}:host .expand-chevron{color:var(--ic-accordion-chevron)}:host(.ic-accordion-disabled) .expand-chevron{color:var(--ic-accordion-chevron-disabled)}.section-button.small{padding:var(--ic-space-xxs) var(--ic-space-xs)}.section-button.large{padding:var(--ic-space-sm) var(--ic-space-xs)}:host(:first-of-type){border-top:var(--ic-space-1px) solid var(--ic-accordion-divider)}:focus{outline:none}.section-button{background-color:transparent;display:flex;align-items:center;width:100%;padding:var(--ic-space-xs);font-weight:var(--ic-font-weight-bold);border:none}.section-header{--ic-typography-color:var(--ic-accordion-heading-text);color:var(--ic-accordion-heading-text);text-align:left;flex:1 0}:host(.ic-accordion-disabled) .section-header{--ic-typography-color:var(--ic-accordion-heading-text-disabled);color:var(--ic-accordion-heading-text-disabled)}button:hover{background-color:var(--ic-accordion-background-hover);cursor:pointer}button:active{background-color:var(--ic-accordion-background-pressed)}button:focus{box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius);transition:var(--ic-transition-duration-fast)}button:disabled{pointer-events:none}.icon-container{margin:0 var(--ic-space-xs) 0 0;display:flex;align-items:center;width:var(--ic-space-lg);height:var(--ic-space-lg);color:var(--ic-accordion-icon)}:host(.ic-accordion-disabled) .icon-container{color:var(--ic-accordion-icon-disabled)}::slotted(svg){width:var(--ic-space-md);height:var(--ic-space-md)}.expand-chevron{width:var(--ic-space-lg);height:var(--ic-space-lg);margin-left:calc(var(--ic-space-xl) + var(--ic-space-xs));transform:rotate(90deg);justify-self:end}.content-expanded-chevron{transform:rotate(-90deg)}.expanded-content{--ic-typography-color:var(--ic-accordion-body-text);color:var(--ic-accordion-body-text);height:0;overflow:hidden;display:flex;flex-direction:column;visibility:var(--ic-expanded-content-visibility, hidden)}.expanded-content-inner{padding:var(--ic-space-xs)}.expanded-content-opened{overflow:visible}@media (forced-colors: active){button:focus{border:var(--ic-border-hc) !important}}'}}]);