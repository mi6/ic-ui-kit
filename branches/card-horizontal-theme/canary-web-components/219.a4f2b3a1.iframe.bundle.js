"use strict";(self.webpackChunk_ukic_canary_web_components=self.webpackChunk_ukic_canary_web_components||[]).push([[219],{"./dist/esm/helpers-1e2516ae.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>IcThemeForegroundEnum,a:()=>isEmptyString,b:()=>addDataToPosition,c:()=>checkSlotInChildMutations,d:()=>dynamicDebounce,e:()=>getSlotElements,f:()=>checkResizeObserver,g:()=>getThemeFromContext,h:()=>IcDayNames,i:()=>isSlotUsed,j:()=>IcDateInputMonths,k:()=>IcWeekDays,l:()=>IcShortDayNames,m:()=>isPropDefined,n:()=>getInputDescribedByText,o:()=>onComponentRequiredPropUndefined,p:()=>pxToRem,q:()=>removeFormResetListener,r:()=>removeDisabledFalse,s:()=>stringEnumToArray,t:()=>addFormResetListener,u:()=>isNumeric,v:()=>IcInformationStatus,w:()=>renderHiddenInput,x:()=>capitalize});const IC_BLOCK_COLOR_COMPONENTS=["ic-hero","ic-top-navigation","ic-footer","ic-side-navigation","ic-alert"],IC_FIXED_COLOR_COMPONENTS=["ic-alert"],IC_BLOCK_COLOR_EXCEPTIONS={"ic-alert":["ic-link"]};var IcInformationStatus,IcThemeForegroundEnum,IcDateInputMonths,IcShortDayNames,IcDayNames,IcWeekDays;!function(IcInformationStatus){IcInformationStatus.Warning="warning",IcInformationStatus.Error="error",IcInformationStatus.Success="success"}(IcInformationStatus||(IcInformationStatus={})),function(IcThemeForegroundEnum){IcThemeForegroundEnum.Default="default",IcThemeForegroundEnum.Dark="dark",IcThemeForegroundEnum.Light="light"}(IcThemeForegroundEnum||(IcThemeForegroundEnum={})),function(IcDateInputMonths){IcDateInputMonths[IcDateInputMonths.January=0]="January",IcDateInputMonths[IcDateInputMonths.February=1]="February",IcDateInputMonths[IcDateInputMonths.March=2]="March",IcDateInputMonths[IcDateInputMonths.April=3]="April",IcDateInputMonths[IcDateInputMonths.May=4]="May",IcDateInputMonths[IcDateInputMonths.June=5]="June",IcDateInputMonths[IcDateInputMonths.July=6]="July",IcDateInputMonths[IcDateInputMonths.August=7]="August",IcDateInputMonths[IcDateInputMonths.September=8]="September",IcDateInputMonths[IcDateInputMonths.October=9]="October",IcDateInputMonths[IcDateInputMonths.November=10]="November",IcDateInputMonths[IcDateInputMonths.December=11]="December"}(IcDateInputMonths||(IcDateInputMonths={})),function(IcShortDayNames){IcShortDayNames[IcShortDayNames.Sun=0]="Sun",IcShortDayNames[IcShortDayNames.Mon=1]="Mon",IcShortDayNames[IcShortDayNames.Tue=2]="Tue",IcShortDayNames[IcShortDayNames.Wed=3]="Wed",IcShortDayNames[IcShortDayNames.Thu=4]="Thu",IcShortDayNames[IcShortDayNames.Fri=5]="Fri",IcShortDayNames[IcShortDayNames.Sat=6]="Sat"}(IcShortDayNames||(IcShortDayNames={})),function(IcDayNames){IcDayNames[IcDayNames.Sunday=0]="Sunday",IcDayNames[IcDayNames.Monday=1]="Monday",IcDayNames[IcDayNames.Tuesday=2]="Tuesday",IcDayNames[IcDayNames.Wednesday=3]="Wednesday",IcDayNames[IcDayNames.Thursday=4]="Thursday",IcDayNames[IcDayNames.Friday=5]="Friday",IcDayNames[IcDayNames.Saturday=6]="Saturday"}(IcDayNames||(IcDayNames={})),function(IcWeekDays){IcWeekDays[IcWeekDays.Sunday=0]="Sunday",IcWeekDays[IcWeekDays.Monday=1]="Monday",IcWeekDays[IcWeekDays.Tuesday=2]="Tuesday",IcWeekDays[IcWeekDays.Wednesday=3]="Wednesday",IcWeekDays[IcWeekDays.Thursday=4]="Thursday",IcWeekDays[IcWeekDays.Friday=5]="Friday",IcWeekDays[IcWeekDays.Saturday=6]="Saturday"}(IcWeekDays||(IcWeekDays={}));const stringEnumToArray=theEnum=>{const arr=[];return Object.values(theEnum).forEach((val=>{if(isNaN(Number(val))){const str=val;arr.push(str)}})),arr},dynamicDebounce=(func,getDelay)=>{let timer;return(...args)=>{const delay=getDelay();clearTimeout(timer),timer=setTimeout(func,delay,...args)}},renderHiddenInput=(always,container,name,value,disabled)=>{if(void 0!==name&&(always||hasShadowDom(container))){const inputs=container.querySelectorAll("input.ic-input");let input=Array.from(inputs).filter((el=>container===el.parentElement))[0];null==input&&(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("ic-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,value instanceof Date?input.value=value?value.toISOString():null:input.value=value||""}},getThemeFromContext=(el,themeFromEvent=null)=>{var _a;const blockColorParent=(el.parentElement||el.getRootNode().host.parentElement).closest(IC_BLOCK_COLOR_COMPONENTS.join(","));if(null!==blockColorParent){const parentTag=blockColorParent.tagName.toLowerCase(),currentTag=el.tagName.toLowerCase();return(null===(_a=IC_BLOCK_COLOR_EXCEPTIONS[parentTag])||void 0===_a?void 0:_a.includes(currentTag))?IcThemeForegroundEnum.Default:null===themeFromEvent||IC_FIXED_COLOR_COMPONENTS.includes(parentTag)?blockColorParent.classList.contains(IcThemeForegroundEnum.Dark)?IcThemeForegroundEnum.Dark:IcThemeForegroundEnum.Light:themeFromEvent}return IcThemeForegroundEnum.Default},isEmptyString=value=>!value||0===value.trim().length,isPropDefined=prop=>void 0!==prop?prop:null,getCssProperty=cssVar=>getComputedStyle(document.documentElement).getPropertyValue(cssVar),getSlotElements=slot=>{const slotContent=slot.firstElementChild;if(null!==slotContent){const elements=slotContent.assignedElements?slotContent.assignedElements():slotContent.childNodes;return elements.length?elements:slot.tagName?[slot]:null}return null===slot?null:[slot]};Number(getCssProperty("--ic-breakpoint-xs").replace("px","")),Number(getCssProperty("--ic-breakpoint-sm").replace("px","")),Number(getCssProperty("--ic-breakpoint-md").replace("px","")),Number(getCssProperty("--ic-breakpoint-lg").replace("px","")),Number(getCssProperty("--ic-breakpoint-xl").replace("px",""));const isSlotUsed=(element,slotName)=>Array.from(element.children).some((child=>child.getAttribute("slot")===slotName)),hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,getInputDescribedByText=(inputId,helperText,validationText)=>{return`${helperText?(id=inputId,id+"-helper-text"):""} ${validationText?(id=>id+"-validation-text")(inputId):""}`.trim();var id},pxToRem=(px,base=16)=>1/base*parseInt(px)+"rem",isNumeric=value=>/^-?\d+$/.test(value),onComponentRequiredPropUndefined=(props,component)=>{for(let i=0;i<props.length;i++){const{prop,propName}=props[i];null==prop&&console.error(`No ${propName} specified for ${component} component - prop '${propName}' (web components) / '${kebabToCamelCase(propName)}' (react) required`)}},kebabToCamelCase=kebabCase=>{const individualWords=(kebabCase=kebabCase.toLowerCase()).split("-");let camelCase=individualWords[0];for(let i=1;i<individualWords.length;i++)camelCase+=individualWords[i].substring(0,1).toUpperCase()+individualWords[i].substring(1);return camelCase},checkResizeObserver=callbackFn=>{"undefined"!=typeof window&&void 0!==window.ResizeObserver&&callbackFn()},getForm=el=>el.closest("FORM"),addFormResetListener=(el,callbackFn)=>{const form=getForm(el);null!==form&&form.addEventListener("reset",callbackFn)},removeFormResetListener=(el,callbackFn)=>{const form=getForm(el);null!==form&&form.removeEventListener("reset",callbackFn)},removeDisabledFalse=(disabled,element)=>{disabled||element.removeAttribute("disabled")},capitalize=text=>text.charAt(0).toUpperCase()+text.slice(1),checkSlotInChildMutations=(addedNodes,removedNodes,slotName)=>{const hasSlot=nodeList=>Array.from(nodeList).some((node=>node.slot===slotName));return hasSlot(addedNodes)||hasSlot(removedNodes)},addDataToPosition=(dataObject,newKeys,newValue)=>{const newData={},newIndexes=newKeys.map((key=>key.index));let controlledIndex=0;return Object.keys(dataObject).forEach((dataKey=>{newIndexes.includes(controlledIndex)&&(newData[newKeys[newIndexes.indexOf(controlledIndex)].key]=newValue,controlledIndex++),newData[dataKey]=dataObject[dataKey],controlledIndex++})),newData}},"./dist/esm/ic-card-horizontal.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_card_horizontal:()=>Card});var _index_93509377_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-93509377.js"),_helpers_1e2516ae_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/helpers-1e2516ae.js");const Card=class{constructor(hostRef){(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.hostMutationObserver=null,this.hostMutationCallback=mutationList=>{mutationList.some((({type,addedNodes,removedNodes})=>"childList"===type&&(0,_helpers_1e2516ae_js__WEBPACK_IMPORTED_MODULE_1__.c)(addedNodes,removedNodes,"image")))&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.f)(this)},this.parentFocussed=()=>{this.isFocussed=!0},this.parentBlurred=()=>{this.isFocussed=!1},this.appearance="default",this.isFocussed=!1,this.parentEl=null,this.parentIsAnchorTag=!1,this.clickable=!1,this.disabled=!1,this.heading=void 0,this.href=void 0,this.hreflang="",this.message="",this.referrerpolicy=void 0,this.rel=void 0,this.size="medium",this.target=void 0,this.theme="inherit"}disconnectedCallback(){var _a;this.parentIsAnchorTag&&(this.parentEl.removeEventListener("focus",this.parentFocussed),this.parentEl.removeEventListener("blur",this.parentBlurred)),null===(_a=this.hostMutationObserver)||void 0===_a||_a.disconnect()}componentWillLoad(){this.parentEl=this.el.parentElement,"A"===this.parentEl.tagName&&(this.clickable=!0,this.parentIsAnchorTag=!0,this.parentEl.classList.add("ic-card-wrapper-link"),this.parentEl.addEventListener("focus",this.parentFocussed),this.parentEl.addEventListener("blur",this.parentBlurred)),(0,_helpers_1e2516ae_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el)}componentDidLoad(){!(0,_helpers_1e2516ae_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"heading")&&(0,_helpers_1e2516ae_js__WEBPACK_IMPORTED_MODULE_1__.o)([{prop:this.heading,propName:"heading"}],"Card"),this.updateTheme(),this.hostMutationObserver=new MutationObserver(this.hostMutationCallback),this.hostMutationObserver.observe(this.el,{childList:!0})}handleHostClick(event){this.disabled&&event.stopImmediatePropagation()}themeChangeHandler(ev){this.updateTheme(ev.detail.mode)}async setFocus(){this.el.shadowRoot.querySelector("a")?this.el.shadowRoot.querySelector("a").focus():this.el.shadowRoot.querySelector("button")&&this.el.shadowRoot.querySelector("button").focus()}updateTheme(newTheme=null){const foregroundColor=(0,_helpers_1e2516ae_js__WEBPACK_IMPORTED_MODULE_1__.g)(this.el,newTheme);foregroundColor!==_helpers_1e2516ae_js__WEBPACK_IMPORTED_MODULE_1__.I.Default&&(this.appearance=foregroundColor)}render(){const{appearance,clickable,disabled,heading,message,href,hreflang,referrerpolicy,rel,target,parentIsAnchorTag,isFocussed,size,theme}=this,Component=parentIsAnchorTag||!clickable?"div":void 0===href?"button":"a",attrs="a"==Component&&{href,hrefLang:hreflang,referrerPolicy:referrerpolicy,rel,target};return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{[`ic-theme-${theme}`]:"inherit"!==theme}},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)(Component,Object.assign({class:{card:!0,clickable:clickable&&!disabled,disabled,focussed:isFocussed,dark:appearance===_helpers_1e2516ae_js__WEBPACK_IMPORTED_MODULE_1__.I.Dark,[`${size}`]:!0,"with-icon":(0,_helpers_1e2516ae_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"icon"),"with-image":(0,_helpers_1e2516ae_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"image")},tabindex:clickable&&!parentIsAnchorTag?0:null,"aria-disabled":disabled?"true":null,disabled:!!disabled||null},attrs),(0,_helpers_1e2516ae_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"image")&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"image"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"image"})),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"card-content"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"card-header"},(0,_helpers_1e2516ae_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"icon")&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"icon"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"icon"})),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"card-title"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"heading"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"h4"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("p",null,heading))))),(message||(0,_helpers_1e2516ae_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"message"))&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"card-message"},message&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"body"},message),(0,_helpers_1e2516ae_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"message")&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"message"}))),(0,_helpers_1e2516ae_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"badge")&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"badge"})))}get el(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};Card.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:flex;--card-max-width:548px;--image-size:114px;--message-max-lines:2}.card.small{--card-max-width:360px}.card.large{--card-max-width:720px;--image-size:142px;--message-max-lines:3}.card.extra-large{--card-max-width:1130px;--image-size:186px;--message-max-lines:5}a{text-decoration:none !important;color:var(--ic-card-text) !important}button{border:none;background-color:transparent;outline:var(--ic-hc-focus-outline);padding:0}.card,.card.clickable{display:flex;flex-direction:row;border:var(--ic-border-default);border-radius:var(--ic-border-radius);box-sizing:border-box;text-align:left;color:var(--ic-card-text);transition:var(--ic-easing-transition-fast);position:relative;max-width:var(--card-max-width);height:-moz-fit-content;height:fit-content;width:var(--card-horizontal-width, -moz-fit-content);width:var(--card-horizontal-width, fit-content)}.dark.card,.dark.card.clickable{border:var(--ic-border-width) solid\n    var(--ic-color-border-neutral-pressed-dark)}.card.clickable:hover{background-color:var(--ic-card-clickable-focus-hover-bg);border:var(--ic-border-hover);cursor:pointer}.card.clickable:focus,.card.clickable.focussed{background-color:var(--ic-card-clickable-focus-hover-bg);box-shadow:var(--ic-border-focus);outline:var(--ic-hc-focus-outline);border:var(--ic-border-pressed-default)}.card.clickable:active{background-color:var(--ic-card-clickable-active-bg);box-shadow:var(--ic-border-focus)}.card.disabled{border:var(--ic-border-disabled)}.card-header{display:flex;align-items:center}.icon{display:flex;align-items:center;padding-right:var(--ic-space-xs)}.card ::slotted(svg){fill:var(--ic-card-text)}.card.disabled ::slotted(svg){fill:var(--ic-card-disabled-text)}.card.clickable .card-title{--ic-typography-color:var(--ic-card-clickable-text);color:var(--ic-card-clickable-text);text-decoration:underline;text-decoration-thickness:var(--ic-space-1px)}.card.clickable:hover .card-title,.card.clickable:focus .card-title,.card.clickable.focussed .card-title{display:inline-block;border-bottom:0.25rem solid !important;margin-bottom:-0.25rem !important;text-decoration:none}.card.clickable:active .card-title{text-decoration:none}.card.disabled .card-title{text-decoration:underline;text-decoration-thickness:var(--ic-space-1px);text-decoration-color:var(--ic-card-disabled-text);color:var(--ic-card-disabled-text);--ic-typography-color:var(--ic-card-disabled-text)}.card-message{margin-top:var(--ic-space-xxxs);align-items:left}.card.disabled .card-message{--ic-typography-color:var(--ic-card-disabled-text)}.image{display:flex;height:var(--image-size);width:var(--image-size);border-radius:var(--ic-border-radius)}.card-content{display:flex;flex-direction:column;padding:var(--ic-space-md)}.card .card-title ::slotted([slot="heading"]),.card .card-title ic-typography p{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:calc(var(--card-max-width) - var(--ic-space-xl))}.card.with-icon .card-title ::slotted([slot="heading"]),.card.with-icon .card-title ic-typography p{max-width:calc(var(--card-max-width) - (2 * var(--ic-space-xl)))}.card.with-image .card-title ::slotted([slot="heading"]),.card.with-image .card-title ic-typography p{max-width:calc(\n    var(--card-max-width) - var(--image-size) - var(--ic-space-xl)\n  )}.card.with-image.with-icon .card-title ::slotted([slot="heading"]),.card.with-image.with-icon .card-title ic-typography p{max-width:calc(\n    var(--card-max-width) - var(--image-size) - (2 * var(--ic-space-xl))\n  )}.card .card-message ::slotted([slot="message"]),.card .card-message ic-typography{display:-webkit-box;-webkit-box-orient:vertical;line-clamp:var(--message-max-lines, initial);-webkit-line-clamp:var(--message-max-lines, initial);overflow:hidden}@media (forced-colors: active){.card ::slotted(svg){fill:currentcolor}.card.disabled ::slotted(svg){fill:GrayText !important}.card.disabled{border-color:GrayText !important}.card.disabled .card-message,.card.disabled .card-title{color:GrayText;--ic-typography-color:GrayText}}'}}]);