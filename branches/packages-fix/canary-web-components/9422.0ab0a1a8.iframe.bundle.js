"use strict";(self.webpackChunk_ukic_canary_web_components=self.webpackChunk_ukic_canary_web_components||[]).push([[9422],{"./dist/esm/helpers-1e2516ae.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>IcThemeForegroundEnum,a:()=>isEmptyString,b:()=>addDataToPosition,c:()=>checkSlotInChildMutations,d:()=>dynamicDebounce,e:()=>getSlotElements,f:()=>checkResizeObserver,g:()=>getThemeFromContext,h:()=>IcDayNames,i:()=>isSlotUsed,j:()=>IcDateInputMonths,k:()=>IcWeekDays,l:()=>IcShortDayNames,m:()=>isPropDefined,n:()=>getInputDescribedByText,o:()=>onComponentRequiredPropUndefined,p:()=>pxToRem,q:()=>removeFormResetListener,r:()=>removeDisabledFalse,s:()=>stringEnumToArray,t:()=>addFormResetListener,u:()=>isNumeric,v:()=>IcInformationStatus,w:()=>renderHiddenInput,x:()=>capitalize});const IC_BLOCK_COLOR_COMPONENTS=["ic-hero","ic-top-navigation","ic-footer","ic-side-navigation","ic-alert"],IC_FIXED_COLOR_COMPONENTS=["ic-alert"],IC_BLOCK_COLOR_EXCEPTIONS={"ic-alert":["ic-link"]};var IcInformationStatus,IcThemeForegroundEnum,IcDateInputMonths,IcShortDayNames,IcDayNames,IcWeekDays;!function(IcInformationStatus){IcInformationStatus.Warning="warning",IcInformationStatus.Error="error",IcInformationStatus.Success="success"}(IcInformationStatus||(IcInformationStatus={})),function(IcThemeForegroundEnum){IcThemeForegroundEnum.Default="default",IcThemeForegroundEnum.Dark="dark",IcThemeForegroundEnum.Light="light"}(IcThemeForegroundEnum||(IcThemeForegroundEnum={})),function(IcDateInputMonths){IcDateInputMonths[IcDateInputMonths.January=0]="January",IcDateInputMonths[IcDateInputMonths.February=1]="February",IcDateInputMonths[IcDateInputMonths.March=2]="March",IcDateInputMonths[IcDateInputMonths.April=3]="April",IcDateInputMonths[IcDateInputMonths.May=4]="May",IcDateInputMonths[IcDateInputMonths.June=5]="June",IcDateInputMonths[IcDateInputMonths.July=6]="July",IcDateInputMonths[IcDateInputMonths.August=7]="August",IcDateInputMonths[IcDateInputMonths.September=8]="September",IcDateInputMonths[IcDateInputMonths.October=9]="October",IcDateInputMonths[IcDateInputMonths.November=10]="November",IcDateInputMonths[IcDateInputMonths.December=11]="December"}(IcDateInputMonths||(IcDateInputMonths={})),function(IcShortDayNames){IcShortDayNames[IcShortDayNames.Sun=0]="Sun",IcShortDayNames[IcShortDayNames.Mon=1]="Mon",IcShortDayNames[IcShortDayNames.Tue=2]="Tue",IcShortDayNames[IcShortDayNames.Wed=3]="Wed",IcShortDayNames[IcShortDayNames.Thu=4]="Thu",IcShortDayNames[IcShortDayNames.Fri=5]="Fri",IcShortDayNames[IcShortDayNames.Sat=6]="Sat"}(IcShortDayNames||(IcShortDayNames={})),function(IcDayNames){IcDayNames[IcDayNames.Sunday=0]="Sunday",IcDayNames[IcDayNames.Monday=1]="Monday",IcDayNames[IcDayNames.Tuesday=2]="Tuesday",IcDayNames[IcDayNames.Wednesday=3]="Wednesday",IcDayNames[IcDayNames.Thursday=4]="Thursday",IcDayNames[IcDayNames.Friday=5]="Friday",IcDayNames[IcDayNames.Saturday=6]="Saturday"}(IcDayNames||(IcDayNames={})),function(IcWeekDays){IcWeekDays[IcWeekDays.Sunday=0]="Sunday",IcWeekDays[IcWeekDays.Monday=1]="Monday",IcWeekDays[IcWeekDays.Tuesday=2]="Tuesday",IcWeekDays[IcWeekDays.Wednesday=3]="Wednesday",IcWeekDays[IcWeekDays.Thursday=4]="Thursday",IcWeekDays[IcWeekDays.Friday=5]="Friday",IcWeekDays[IcWeekDays.Saturday=6]="Saturday"}(IcWeekDays||(IcWeekDays={}));const stringEnumToArray=theEnum=>{const arr=[];return Object.values(theEnum).forEach((val=>{if(isNaN(Number(val))){const str=val;arr.push(str)}})),arr},dynamicDebounce=(func,getDelay)=>{let timer;return(...args)=>{const delay=getDelay();clearTimeout(timer),timer=setTimeout(func,delay,...args)}},renderHiddenInput=(always,container,name,value,disabled)=>{if(void 0!==name&&(always||hasShadowDom(container))){const inputs=container.querySelectorAll("input.ic-input");let input=Array.from(inputs).filter((el=>container===el.parentElement))[0];null==input&&(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("ic-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,value instanceof Date?input.value=value?value.toISOString():null:input.value=value||""}},getThemeFromContext=(el,themeFromEvent=null)=>{var _a;const blockColorParent=(el.parentElement||el.getRootNode().host.parentElement).closest(IC_BLOCK_COLOR_COMPONENTS.join(","));if(null!==blockColorParent){const parentTag=blockColorParent.tagName.toLowerCase(),currentTag=el.tagName.toLowerCase();return(null===(_a=IC_BLOCK_COLOR_EXCEPTIONS[parentTag])||void 0===_a?void 0:_a.includes(currentTag))?IcThemeForegroundEnum.Default:null===themeFromEvent||IC_FIXED_COLOR_COMPONENTS.includes(parentTag)?blockColorParent.classList.contains(IcThemeForegroundEnum.Dark)?IcThemeForegroundEnum.Dark:IcThemeForegroundEnum.Light:themeFromEvent}return IcThemeForegroundEnum.Default},isEmptyString=value=>!value||0===value.trim().length,isPropDefined=prop=>void 0!==prop?prop:null,getCssProperty=cssVar=>getComputedStyle(document.documentElement).getPropertyValue(cssVar),getSlotElements=slot=>{const slotContent=slot.firstElementChild;if(null!==slotContent){const elements=slotContent.assignedElements?slotContent.assignedElements():slotContent.childNodes;return elements.length?elements:slot.tagName?[slot]:null}return null===slot?null:[slot]};Number(getCssProperty("--ic-breakpoint-xs").replace("px","")),Number(getCssProperty("--ic-breakpoint-sm").replace("px","")),Number(getCssProperty("--ic-breakpoint-md").replace("px","")),Number(getCssProperty("--ic-breakpoint-lg").replace("px","")),Number(getCssProperty("--ic-breakpoint-xl").replace("px",""));const isSlotUsed=(element,slotName)=>Array.from(element.children).some((child=>child.getAttribute("slot")===slotName)),hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,getInputDescribedByText=(inputId,helperText,validationText)=>{return`${helperText?(id=inputId,id+"-helper-text"):""} ${validationText?(id=>id+"-validation-text")(inputId):""}`.trim();var id},pxToRem=(px,base=16)=>1/base*parseInt(px)+"rem",isNumeric=value=>/^-?\d+$/.test(value),onComponentRequiredPropUndefined=(props,component)=>{for(let i=0;i<props.length;i++){const{prop,propName}=props[i];null==prop&&console.error(`No ${propName} specified for ${component} component - prop '${propName}' (web components) / '${kebabToCamelCase(propName)}' (react) required`)}},kebabToCamelCase=kebabCase=>{const individualWords=(kebabCase=kebabCase.toLowerCase()).split("-");let camelCase=individualWords[0];for(let i=1;i<individualWords.length;i++)camelCase+=individualWords[i].substring(0,1).toUpperCase()+individualWords[i].substring(1);return camelCase},checkResizeObserver=callbackFn=>{"undefined"!=typeof window&&void 0!==window.ResizeObserver&&callbackFn()},getForm=el=>el.closest("FORM"),addFormResetListener=(el,callbackFn)=>{const form=getForm(el);null!==form&&form.addEventListener("reset",callbackFn)},removeFormResetListener=(el,callbackFn)=>{const form=getForm(el);null!==form&&form.removeEventListener("reset",callbackFn)},removeDisabledFalse=(disabled,element)=>{disabled||element.removeAttribute("disabled")},capitalize=text=>text.charAt(0).toUpperCase()+text.slice(1),checkSlotInChildMutations=(addedNodes,removedNodes,slotName)=>{const hasSlot=nodeList=>Array.from(nodeList).some((node=>node.slot===slotName));return hasSlot(addedNodes)||hasSlot(removedNodes)},addDataToPosition=(dataObject,newKeys,newValue)=>{const newData={},newIndexes=newKeys.map((key=>key.index));let controlledIndex=0;return Object.keys(dataObject).forEach((dataKey=>{newIndexes.includes(controlledIndex)&&(newData[newKeys[newIndexes.indexOf(controlledIndex)].key]=newValue,controlledIndex++),newData[dataKey]=dataObject[dataKey],controlledIndex++})),newData}},"./dist/esm/ic-data-table-title-bar.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_data_table_title_bar:()=>DataTableTitleBar});var _index_93509377_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-93509377.js"),_helpers_1e2516ae_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/helpers-1e2516ae.js");const DataTableTitleBar=class{constructor(hostRef){(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icTableDensityUpdate=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icTableDensityUpdate",7),this.initialDensitySelectOption="default",this.isEmbedded=!1,this.changeDensity=ev=>{this.icTableDensityUpdate.emit({value:ev.detail.value})},this.description=void 0,this.heading="Title Bar",this.hideDensitySelect=!1,this.metadata=void 0}componentWillLoad(){const parentEl=this.el.parentElement;if("IC-DATA-TABLE"===parentEl.tagName){const dataTable=parentEl;this.initialDensitySelectOption=dataTable.density,this.isEmbedded=dataTable.embedded,"Title Bar"===this.heading&&(this.heading=dataTable.caption)}}render(){const{changeDensity,description,el,heading,hideDensitySelect,initialDensitySelectOption,isEmbedded,metadata}=this,showActionArea=(0,_helpers_1e2516ae_js__WEBPACK_IMPORTED_MODULE_1__.i)(el,"primary-action")||(0,_helpers_1e2516ae_js__WEBPACK_IMPORTED_MODULE_1__.i)(el,"custom-actions")||!hideDensitySelect,hasDescription=(0,_helpers_1e2516ae_js__WEBPACK_IMPORTED_MODULE_1__.i)(el,"description")||description;return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"title-bar-wrapper":!0,"full-width":isEmbedded}},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"header-container"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"heading"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"h3",className:"heading"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("h3",null,heading))),metadata&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"subtitle-small"},metadata)),(showActionArea||hasDescription)&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"description-actions"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"description"},description&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"body"},description)),showActionArea&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"action-area"},(0,_helpers_1e2516ae_js__WEBPACK_IMPORTED_MODULE_1__.i)(el,"custom-actions")&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"custom-actions-wrapper"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"custom-actions"})),!hideDensitySelect&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-select",{size:"small",label:"Change density",class:"density-input",hideLabel:!0,options:[{label:"Default",value:"default"},{label:"Dense",value:"dense"},{label:"Spacious",value:"spacious"}],value:initialDensitySelectOption,onIcChange:changeDensity}),(0,_helpers_1e2516ae_js__WEBPACK_IMPORTED_MODULE_1__.i)(el,"primary-action")&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"primary-action"}))))}get el(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};DataTableTitleBar.style='.title-bar-wrapper,.header-container,.description-actions,.action-area,.custom-actions-wrapper{display:flex}.title-bar-wrapper,.action-area,.custom-actions-wrapper{gap:var(--ic-space-xs)}.title-bar-wrapper{flex-direction:column;padding:var(--ic-space-sm) var(--ic-space-xs);border-bottom:var(--ic-space-1px) solid var(--ic-architectural-300)}.full-width{padding:var(--ic-space-sm) 0;border-bottom:none}ic-typography.heading h3{margin:0}ic-typography.ic-typography-subtitle-small{--ic-typography-color:var(--ic-color-text-tertiary)}ic-typography.ic-typography-h3,::slotted([slot="header"]){max-width:50rem}ic-typography.ic-typography-body,::slotted([slot="description"]){color:var(--ic-color-text-secondary);--ic-typography-color:var(--ic-color-text-secondary)}ic-typography.ic-typography-body,ic-typography.ic-typography-subtitle-small,::slotted([slot="description"]){max-width:40rem}.density-input{--input-width:7.625rem}@media screen and (max-width: 1200px){.header-container{flex-direction:column}}@media screen and (min-width: 1201px){.header-container{gap:var(--ic-space-xs);align-items:baseline}}@media screen and (min-width: 769px){.description-actions{justify-content:space-between}}@media screen and (max-width: 768px){.description-actions{flex-direction:column;align-items:flex-start;gap:var(--ic-space-xs)}}@media screen and (min-width: 577px){.action-area{align-items:center}}@media screen and (max-width: 576px){.action-area{flex-direction:column}}'}}]);