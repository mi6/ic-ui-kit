"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[2785],{"../canary-web-components/dist/esm/helpers-4e38ba2b.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>IcBrandForegroundEnum,a:()=>renderDynamicChildSlots,b:()=>isEmptyString,c:()=>addDataToPosition,d:()=>dynamicDebounce,e:()=>deviceSizeMatches,f:()=>getSlotElements,g:()=>getBrandFromContext,h:()=>checkResizeObserver,i:()=>isSlotUsed,j:()=>IC_DEVICE_SIZES,k:()=>IcDayNames,l:()=>IcDateInputMonths,m:()=>IcWeekDays,n:()=>IcShortDayNames,o:()=>onComponentRequiredPropUndefined,p:()=>pxToRem,q:()=>isPropDefined,r:()=>removeDisabledFalse,s:()=>stringEnumToArray,t:()=>getInputDescribedByText,u:()=>removeFormResetListener,v:()=>addFormResetListener,w:()=>isNumeric,x:()=>IcInformationStatus,y:()=>renderHiddenInput,z:()=>capitalize});var _index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../canary-web-components/dist/esm/index-163fe708.js");const IC_DEVICE_SIZES={XS:576,S:768,M:992,L:1200,XL:99999},IC_BLOCK_COLOR_COMPONENTS=["ic-hero","ic-top-navigation","ic-footer","ic-side-navigation","ic-alert"],IC_FIXED_COLOR_COMPONENTS=["ic-alert"],IC_BLOCK_COLOR_EXCEPTIONS={"ic-alert":["ic-link"]};var IcInformationStatus,IcBrandForegroundEnum,IcDateInputMonths,IcShortDayNames,IcDayNames,IcWeekDays;!function(IcInformationStatus){IcInformationStatus.Warning="warning",IcInformationStatus.Error="error",IcInformationStatus.Success="success"}(IcInformationStatus||(IcInformationStatus={})),function(IcBrandForegroundEnum){IcBrandForegroundEnum.Default="default",IcBrandForegroundEnum.Dark="dark",IcBrandForegroundEnum.Light="light"}(IcBrandForegroundEnum||(IcBrandForegroundEnum={})),function(IcDateInputMonths){IcDateInputMonths[IcDateInputMonths.January=0]="January",IcDateInputMonths[IcDateInputMonths.February=1]="February",IcDateInputMonths[IcDateInputMonths.March=2]="March",IcDateInputMonths[IcDateInputMonths.April=3]="April",IcDateInputMonths[IcDateInputMonths.May=4]="May",IcDateInputMonths[IcDateInputMonths.June=5]="June",IcDateInputMonths[IcDateInputMonths.July=6]="July",IcDateInputMonths[IcDateInputMonths.August=7]="August",IcDateInputMonths[IcDateInputMonths.September=8]="September",IcDateInputMonths[IcDateInputMonths.October=9]="October",IcDateInputMonths[IcDateInputMonths.November=10]="November",IcDateInputMonths[IcDateInputMonths.December=11]="December"}(IcDateInputMonths||(IcDateInputMonths={})),function(IcShortDayNames){IcShortDayNames[IcShortDayNames.Sun=0]="Sun",IcShortDayNames[IcShortDayNames.Mon=1]="Mon",IcShortDayNames[IcShortDayNames.Tue=2]="Tue",IcShortDayNames[IcShortDayNames.Wed=3]="Wed",IcShortDayNames[IcShortDayNames.Thu=4]="Thu",IcShortDayNames[IcShortDayNames.Fri=5]="Fri",IcShortDayNames[IcShortDayNames.Sat=6]="Sat"}(IcShortDayNames||(IcShortDayNames={})),function(IcDayNames){IcDayNames[IcDayNames.Sunday=0]="Sunday",IcDayNames[IcDayNames.Monday=1]="Monday",IcDayNames[IcDayNames.Tuesday=2]="Tuesday",IcDayNames[IcDayNames.Wednesday=3]="Wednesday",IcDayNames[IcDayNames.Thursday=4]="Thursday",IcDayNames[IcDayNames.Friday=5]="Friday",IcDayNames[IcDayNames.Saturday=6]="Saturday"}(IcDayNames||(IcDayNames={})),function(IcWeekDays){IcWeekDays[IcWeekDays.Sunday=0]="Sunday",IcWeekDays[IcWeekDays.Monday=1]="Monday",IcWeekDays[IcWeekDays.Tuesday=2]="Tuesday",IcWeekDays[IcWeekDays.Wednesday=3]="Wednesday",IcWeekDays[IcWeekDays.Thursday=4]="Thursday",IcWeekDays[IcWeekDays.Friday=5]="Friday",IcWeekDays[IcWeekDays.Saturday=6]="Saturday"}(IcWeekDays||(IcWeekDays={}));const stringEnumToArray=theEnum=>{const arr=[];return Object.values(theEnum).forEach((val=>{if(isNaN(Number(val))){const str=val;arr.push(str)}})),arr},dynamicDebounce=(func,getDelay)=>{let timer;return(...args)=>{const delay=getDelay();clearTimeout(timer),timer=setTimeout(func,delay,...args)}},renderHiddenInput=(always,container,name,value,disabled)=>{if(void 0!==name&&(always||hasShadowDom(container))){const inputs=container.querySelectorAll("input.ic-input");let input=Array.from(inputs).filter((el=>container===el.parentElement))[0];null==input&&(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("ic-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,value instanceof Date?input.value=value?value.toISOString():null:input.value=value||""}},getBrandFromContext=(el,brandFromEvent=null)=>{var _a;const blockColorParent=(el.parentElement||el.getRootNode().host.parentElement).closest(IC_BLOCK_COLOR_COMPONENTS.join(","));if(null!==blockColorParent){const parentTag=blockColorParent.tagName.toLowerCase(),currentTag=el.tagName.toLowerCase();return(null===(_a=IC_BLOCK_COLOR_EXCEPTIONS[parentTag])||void 0===_a?void 0:_a.includes(currentTag))?IcBrandForegroundEnum.Default:null===brandFromEvent||IC_FIXED_COLOR_COMPONENTS.includes(parentTag)?blockColorParent.classList.contains(IcBrandForegroundEnum.Dark)?IcBrandForegroundEnum.Dark:IcBrandForegroundEnum.Light:brandFromEvent}return IcBrandForegroundEnum.Default},isEmptyString=value=>!value||0===value.trim().length,isPropDefined=prop=>void 0!==prop?prop:null,deviceSizeMatches=size=>window.matchMedia(`(max-width: ${size}px)`).matches,getCssProperty=cssVar=>getComputedStyle(document.documentElement).getPropertyValue(cssVar),getSlotElements=slot=>{const slotContent=slot.firstElementChild;if(null!==slotContent){const elements=slotContent.assignedElements?slotContent.assignedElements():slotContent.childNodes;return elements.length?elements:slot.tagName?[slot]:null}return null===slot?null:[slot]};Number(getCssProperty("--ic-breakpoint-xs").replace("px","")),Number(getCssProperty("--ic-breakpoint-sm").replace("px","")),Number(getCssProperty("--ic-breakpoint-md").replace("px","")),Number(getCssProperty("--ic-breakpoint-lg").replace("px","")),Number(getCssProperty("--ic-breakpoint-xl").replace("px",""));const isSlotUsed=(element,slotName)=>Array.from(element.children).some((child=>child.getAttribute("slot")===slotName)),hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,getInputDescribedByText=(inputId,helperText,validationText)=>{return`${helperText?(id=inputId,id+"-helper-text"):""} ${validationText?(id=>id+"-validation-text")(inputId):""}`.trim();var id},pxToRem=(px,base=16)=>1/base*parseInt(px)+"rem",isNumeric=value=>/^-?\d+$/.test(value),onComponentRequiredPropUndefined=(props,component)=>{for(let i=0;i<props.length;i++){const{prop,propName}=props[i];null==prop&&console.error(`No ${propName} specified for ${component} component - prop '${propName}' (web components) / '${kebabToCamelCase(propName)}' (react) required`)}},kebabToCamelCase=kebabCase=>{const individualWords=(kebabCase=kebabCase.toLowerCase()).split("-");let camelCase=individualWords[0];for(let i=1;i<individualWords.length;i++)camelCase+=individualWords[i].substring(0,1).toUpperCase()+individualWords[i].substring(1);return camelCase},checkResizeObserver=callbackFn=>{"undefined"!=typeof window&&void 0!==window.ResizeObserver&&callbackFn()},getForm=el=>el.closest("FORM"),addFormResetListener=(el,callbackFn)=>{const form=getForm(el);null!==form&&form.addEventListener("reset",callbackFn)},removeFormResetListener=(el,callbackFn)=>{const form=getForm(el);null!==form&&form.removeEventListener("reset",callbackFn)},removeDisabledFalse=(disabled,element)=>{disabled||element.removeAttribute("disabled")},capitalize=text=>text.charAt(0).toUpperCase()+text.slice(1),addDataToPosition=(dataObject,newKeys,newValue)=>{const newData={},newIndexes=newKeys.map((key=>key.index)),keys=Object.keys(dataObject),values=Object.values(dataObject),numberOfKeys=keys.length+newIndexes.length;for(let i=0,j=0;i<numberOfKeys;i++)newIndexes.includes(i)?newData[newKeys[newIndexes.indexOf(i)].key]=newValue:(newData[keys[j]]=values[j],j++);return newData},hasDynamicChildSlots=(mutationList,slotNames)=>mutationList.some((({type,addedNodes,removedNodes})=>"childList"===type&&((addedNodes,removedNodes,slotName)=>{const hasSlot=nodeList=>Array.from(nodeList).some((node=>Array.isArray(slotName)?slotName.some((name=>node.slot===name)):node.slot===slotName));return hasSlot(addedNodes)||hasSlot(removedNodes)})(addedNodes,removedNodes,slotNames))),renderDynamicChildSlots=(mutationList,slotNames,ref)=>{hasDynamicChildSlots(mutationList,slotNames)&&(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.f)(ref)}},"../canary-web-components/dist/esm/ic-empty-state_2.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_empty_state:()=>EmptyState,ic_pagination_bar:()=>PaginationBar});var _index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../canary-web-components/dist/esm/index-163fe708.js"),_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../canary-web-components/dist/esm/helpers-bbab69a2.js"),_helpers_4e38ba2b_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../canary-web-components/dist/esm/helpers-4e38ba2b.js");const EmptyState=class{constructor(hostRef){(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.hostMutationObserver=null,this.aligned="left",this.imageSize="medium",this.theme="inherit"}disconnectedCallback(){var _a;null===(_a=this.hostMutationObserver)||void 0===_a||_a.disconnect()}componentDidLoad(){!(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"heading")&&(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.b)([{prop:this.heading,propName:"heading"}],"Empty State"),this.hostMutationObserver=new MutationObserver((mutationList=>(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.a)(mutationList,["image","actions"],this))),this.hostMutationObserver.observe(this.el,{childList:!0})}render(){const{aligned,body,maxLines,heading,imageSize,subheading,theme}=this;return(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"d8dbd02105f4b01a468436fd73ccd4ddec2a4cf1",class:{[`ic-empty-state-${aligned}`]:!0,[`image-${imageSize}`]:(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"image"),[`ic-theme-${theme}`]:"inherit"!==theme}},(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"image")&&(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"d7bed2bb22a41377f6c9032660bc62f79294510c",name:"image"}),(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"64df9d8fb5ffbb9724a2e87a67eed03526564527"},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"5fee4dfbeef7272bcd423c7fb2bfc49e5e557718",name:"heading"},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{key:"523cac0cce5c01cca9540396b95f0ab13d0ef9cd",variant:"h4",class:"empty-state-heading"},heading)),(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"904f2c3ceeeef991a099a4fc0521de002c6e8fc3",name:"subheading"},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{key:"6eb71c04bfae24d0ece644cea3730251ecd38e77",variant:"subtitle-small",class:"empty-state-subheading"},subheading)),(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"6dc1f5e4e3071b5c0277c993502f1f043b247330",name:"body"},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{key:"f60da219bd12eda8df1229eba9ae9904458e4692",maxLines,class:"empty-state-body"},body))),(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"actions")&&(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"73247068a45635e5e64d513239ada3e97a4a4302",class:"action-area"},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"19a448208f663a595f5a81a28b89834d0c62e78b",name:"actions"})))}get el(){return(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};EmptyState.style=':host{gap:var(--ic-space-xs);padding:var(--ic-space-xs)}:host,.action-area{display:flex;flex-direction:column}.action-area{gap:var(--ic-space-md)}:host ::slotted(svg),:host ::slotted(img){border-radius:var(--ic-space-xxs)}:host(.ic-empty-state-right),:host(.ic-empty-state-right) .action-area{align-items:flex-end;text-align:right}:host(.ic-empty-state-center),:host(.ic-empty-state-center) .action-area{align-items:center;text-align:center}:host(.image-medium) ::slotted(svg),:host(.image-medium) ::slotted(img){height:calc(3 * var(--ic-space-lg)) !important;width:calc(3 * var(--ic-space-lg)) !important}:host(.image-small) ::slotted(svg),:host(.image-small) ::slotted(img){height:var(--ic-space-xxl) !important;width:var(--ic-space-xxl) !important}:host(.image-large) ::slotted(svg),:host(.image-large) ::slotted(img){height:calc(4 * var(--ic-space-xl)) !important;width:calc(4 * var(--ic-space-xl)) !important}::slotted([slot="heading"]),.empty-state-heading{--ic-typography-color:var(--ic-empty-state-title)}::slotted([slot="subheading"]),.empty-state-subheading{--ic-typography-color:var(--ic-empty-state-subtitle)}::slotted([slot="body"]),.empty-state-body{--ic-typography-color:var(--ic-empty-state-body)}';const PaginationBar=class{constructor(hostRef){(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icPageChange=(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icPageChange",7),this.icItemsPerPageChange=(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icItemsPerPageChange",7),this.PAGE_INPUT_FIELD_ID="go-to-page-input",this.INVALID_PAGE_ERROR="Please enter a valid page",this.resizeObserver=null,this.activePage=1,this.inputError="Please enter a valid page",this.itemsPerPage=10,this.itemsPerPageString="10",this.lowerBound=1,this.paginationWrapped=!1,this.alignment="right",this.currentPage=1,this.hideAllFromItemsPerPage=!1,this.itemLabel="Item",this.monochrome=!1,this.theme="inherit",this.type="simple",this.rangeLabelType="page",this.pageLabel="Page",this.showGoToPageControl=!1,this.hideRangeLabel=!1,this.showItemsPerPageControl=!1,this.setToFirstPageOnPaginationChange=!1,this.changeItemsPerPage=()=>{this.setItemsPerPage(Number(this.pageDropdownEl.value)),this.userSetItemsPerPage=Number(this.pageDropdownEl.value)},this.changePage=page=>{this.activePage=page,this.lowerBound=1!==page?(page-1)*this.itemsPerPage+1:page,this.setUpperBound()},this.focusElFromLabel=el=>{var _a;null===(_a=this.paginationBarEl.querySelector(el))||void 0===_a||_a.setFocus()},this.goToPage=()=>{var _a;const input=this.pageInputEl,page=Number(input.value);page<=this.totalPages&&page>0?(this.changePage(page),null===(_a=this.paginationEl)||void 0===_a||_a.setCurrentPage(page),this.activePage=page,input.value="",this.icPageChange.emit({value:page}),this.pageInputTooltipEl.displayTooltip(!1,!1),input.validationStatus=""):this.setInputError(input,this.INVALID_PAGE_ERROR)},this.goToPageLabelClickHandler=()=>{this.focusElFromLabel("ic-text-field")},this.handleBlur=()=>{const textField=this.pageInputEl;(Number(textField.value)<=this.totalPages&&Number(textField.value)>0||""===textField.value)&&(textField.validationStatus=""),this.pageInputTooltipEl.displayTooltip(!1,!1)},this.handleFocus=()=>{"error"===this.pageInputEl.validationStatus&&this.pageInputTooltipEl.displayTooltip(!0,!0)},this.handleInputChange=()=>{const inputValue=parseInt(this.pageInputEl.value);(inputValue>this.totalPages||inputValue<=0)&&(this.setInputError(this.pageInputEl,this.INVALID_PAGE_ERROR),this.pageInputTooltipEl.displayTooltip(!0,!0))},this.handleKeydown=ev=>{"Enter"===ev.key?"error"===this.pageInputEl.validationStatus?this.pageInputTooltipEl.displayTooltip(!0,!0):this.goToPage():(this.pageInputTooltipEl.displayTooltip(!1,!1),this.pageInputEl.validationStatus="")},this.handleKeyUp=ev=>{Number.isNaN(parseInt(this.pageInputEl.value))&&"Backspace"!==ev.key&&"Enter"!==ev.key&&"Tab"!==ev.key&&"Shift"!==ev.key&&(this.setInputError(this.pageInputEl,"Please enter a number",!1),this.pageInputTooltipEl.displayTooltip(!0,!1))},this.itemsPerPageLabelClickHandler=()=>{this.focusElFromLabel("ic-select")},this.paginationShouldWrap=()=>{"simple"===this.type&&(this.paginationWrapped=this.paginationEl.clientHeight>63)},this.runResizeObserver=()=>{this.resizeObserver=new ResizeObserver((()=>{const{clientWidth}=this.paginationBarEl;(clientWidth-this.paginationWidth>50||clientWidth-this.paginationWidth<-50)&&(this.paginationWidth=clientWidth,this.paginationShouldWrap())})),this.resizeObserver.observe(this.paginationBarEl)},this.setInputError=(el,error,focus=!0)=>{this.inputError=error,el.validationStatus="error",focus&&el.setFocus()},this.setToFirstPage=()=>{var _a;this.changePage(1),null===(_a=this.paginationEl)||void 0===_a||_a.setCurrentPage(1),this.activePage=1,this.icPageChange.emit({value:1})},this.setItemsPerPage=newValue=>{var _a;this.itemsPerPage!==newValue&&(this.itemsPerPage=newValue,this.itemsPerPageString=newValue.toString(),this.icItemsPerPageChange.emit({value:this.itemsPerPage}),this.setToFirstPageOnPaginationChange&&this.setToFirstPage()),this.totalPages=this.totalItems>this.itemsPerPage?Math.ceil(this.totalItems/this.itemsPerPage):1,this.setUpperBound(),this.activePage>this.totalPages&&(null===(_a=this.paginationEl)||void 0===_a||_a.setCurrentPage(this.totalPages),this.activePage=this.totalPages),this.icPageChange.emit({value:this.activePage,fromItemsPerPage:!0})},this.setPaginationBarContent=()=>{const displayedItemsPerPageOptions=(this.itemsPerPageOptions?JSON.parse(JSON.stringify(this.itemsPerPageOptions)):null)||(this.totalItems<=100?[{label:"10",value:"10"},{label:"25",value:"25"},{label:"50",value:"50"}]:[{label:"25",value:"25"},{label:"100",value:"100"},{label:"1000",value:"1000"}]);!this.hideAllFromItemsPerPage&&displayedItemsPerPageOptions.push({label:"All",value:String(this.totalItems)}),this.displayedItemsPerPageOptions=displayedItemsPerPageOptions.filter((({value})=>this.totalItems>=Number(value)));let lastOptionValue=0;if(this.userSetItemsPerPage)this.displayedItemsPerPageOptions.some((({value})=>(lastOptionValue=Number(value),this.userSetItemsPerPage<=lastOptionValue))),this.setItemsPerPage(lastOptionValue);else{const updated=this.displayedItemsPerPageOptions.some((({value})=>(lastOptionValue=Number(value),this.itemsPerPage<=lastOptionValue)));this.setItemsPerPage(updated||!updated&&this.itemsPerPage>lastOptionValue?lastOptionValue:this.itemsPerPage)}},this.setUpperBound=()=>{this.upperBound=Math.min(this.lowerBound+this.itemsPerPage-1,this.totalItems)},this.handleButtonAppearance=()=>this.monochrome?"dark"===this.theme||"inherit"===this.theme&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"light":"dark":"default"}watchPageNumberHandler(){this.setPaginationBarContent(),"number"==typeof this.currentPage&&this.currentPage&&(this.currentPage<1||this.totalPages&&this.currentPage>this.totalPages?console.error(`The current page (${this.currentPage}) must be a number greater than zero but less than or equal to the total number of pages (${this.totalPages})`):this.activePage=this.currentPage)}watchSelectedItemsPerPageHandler(){var _a;null!==this.selectedItemsPerPage&&void 0!==this.selectedItemsPerPage&&((null===(_a=this.displayedItemsPerPageOptions)||void 0===_a?void 0:_a.filter((option=>option.value===`${this.selectedItemsPerPage}`)).length)?this.setItemsPerPage(this.selectedItemsPerPage):console.error(`The selected items per page option "${this.selectedItemsPerPage}" does not exist`))}watchItemLabelHandler(){this.capitalizedItemLabel=(0,_helpers_4e38ba2b_js__WEBPACK_IMPORTED_MODULE_2__.z)(this.itemLabel),this.lowerCaseItemLabel=this.itemLabel.toLowerCase()}watchItemsPerPageOptionsHandler(newVal,oldVal){JSON.stringify(newVal)!==JSON.stringify(oldVal)&&this.setPaginationBarContent()}watchPageLabelHandler(){this.capitalizedPageLabel=(0,_helpers_4e38ba2b_js__WEBPACK_IMPORTED_MODULE_2__.z)(this.pageLabel),this.lowerCasePageLabel=this.pageLabel.toLowerCase()}watchTotalItemsHandler(){this.setPaginationBarContent()}watchSetToFirstPageOnPaginationChange(){this.setPaginationBarContent()}disconnectedCallback(){var _a;null===(_a=this.resizeObserver)||void 0===_a||_a.disconnect()}componentWillLoad(){this.watchPageNumberHandler(),this.watchPageLabelHandler(),this.watchItemLabelHandler(),this.setPaginationBarContent(),this.watchSelectedItemsPerPageHandler()}componentDidLoad(){var _a,_b;this.paginationWidth=this.paginationBarEl.clientWidth,(0,_helpers_4e38ba2b_js__WEBPACK_IMPORTED_MODULE_2__.h)(this.runResizeObserver);const textField=null===(_a=this.el.shadowRoot)||void 0===_a?void 0:_a.querySelector(`.${this.PAGE_INPUT_FIELD_ID}`);if(textField){const input=null===(_b=null==textField?void 0:textField.shadowRoot)||void 0===_b?void 0:_b.querySelector("input");input&&(input.style.textAlign="center",input.style.padding="0")}this.paginationShouldWrap()}pageChangeHandler(ev){const page=ev.detail.value;this.changePage(page)}render(){const{alignment,displayedItemsPerPageOptions,PAGE_INPUT_FIELD_ID,type,rangeLabelType,hideRangeLabel,showItemsPerPageControl,showGoToPageControl,pageLabel,capitalizedPageLabel,lowerCasePageLabel,capitalizedItemLabel,lowerCaseItemLabel,totalPages,activePage,itemsPerPageString,theme,monochrome}=this;return(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"7ef2c2060d9ac4f6c23b188767cda59db38f2b99",class:{[`ic-theme-${theme}`]:"inherit"!==theme}},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"16a835a43dec46d877d1cedd128f2fce8f09b306",class:{"pagination-bar":!0,[`pagination-bar-${alignment}`]:!0},ref:el=>this.paginationBarEl=el},(!hideRangeLabel||showItemsPerPageControl)&&(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"766057b637859197ee116e3b18ffbe4700fb934e",class:"item-controls"},showItemsPerPageControl&&(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"9a1eccf626fbe305360bbe62e3c860878f5fd274",class:"items-per-page-holder"},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{key:"32e16c437bcf438e75cffdee1012265297a1ee96",class:{"items-per-page-control-label":!0},variant:"label",onClick:this.itemsPerPageLabelClickHandler},capitalizedItemLabel,"s per ",lowerCasePageLabel),(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-select",{key:"c7d47154fbe297282c395217c33555023050565b",theme,size:"small",label:"items-per-page-input",class:"items-per-page-input",hideLabel:!0,options:displayedItemsPerPageOptions,value:itemsPerPageString,onIcChange:this.changeItemsPerPage,ref:el=>this.pageDropdownEl=el})),!hideRangeLabel&&("data"===rangeLabelType?(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{class:{"item-pagination-label":!0},variant:"label","aria-live":"polite"},0===this.upperBound&&`0 ${lowerCaseItemLabel}s`,this.upperBound>0&&`${this.lowerBound} - ${this.upperBound} of ${this.totalItems} ${lowerCaseItemLabel}${this.totalItems>1?"s":""}`):(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{class:{"page-pagination-label":!0},variant:"label","aria-live":"polite"},capitalizedPageLabel," ",activePage," of ",totalPages))),(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"3185dc183a80d08c18ce1e60db6c296e52a22970",class:{"pagination-controls":!0,"pagination-controls-wrap":this.paginationWrapped}},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"e3899117392a622f11d0bc474de3bc13870ba8ac",class:"pagination-holder"},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-pagination",{key:"b5c8fa1ecaf911f05557ec38de8b5a46582c0113",type,pages:totalPages,label:pageLabel,ref:el=>this.paginationEl=el,currentPage:activePage,theme,monochrome})),showGoToPageControl&&(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"4ac7aa8efcccb680d6609ca59e33bd12ce73221c",class:"go-to-page-holder"},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{key:"9fd371e534f5d8a04e55bf84b5fabd0e9dc2b80e",variant:"label",onClick:this.goToPageLabelClickHandler},"Go to ",lowerCasePageLabel),(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-tooltip",{key:"953ce9b43b5f198ecc07df3818f34c119cae4309",label:this.inputError,target:`#${PAGE_INPUT_FIELD_ID}`,disableHover:!0,disableClick:!0,ref:el=>this.pageInputTooltipEl=el},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-text-field",{key:"a51a3b4441f190b3f9ad078ae274b8d1ea7a9779",theme,type:"number",size:"small",label:PAGE_INPUT_FIELD_ID,class:PAGE_INPUT_FIELD_ID,id:PAGE_INPUT_FIELD_ID,hideLabel:!0,onKeyDown:this.handleKeydown,onKeyUp:this.handleKeyUp,onInput:this.handleInputChange,max:totalPages,min:"1",validationInlineInternal:!0,onBlur:this.handleBlur,onFocus:this.handleFocus,ref:el=>this.pageInputEl=el})),(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{key:"5c07b04cda0807438eb514d07d33663af6fdf182",appearance:this.handleButtonAppearance(),variant:"secondary",onClick:this.goToPage,size:"small",class:"go-to-page-button"},"Go")))))}get el(){return(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{currentPage:["watchPageNumberHandler"],selectedItemsPerPage:["watchSelectedItemsPerPageHandler"],itemLabel:["watchItemLabelHandler"],itemsPerPageOptions:["watchItemsPerPageOptionsHandler"],pageLabel:["watchPageLabelHandler"],totalItems:["watchTotalItemsHandler"],setToFirstPageOnPaginationChange:["watchSetToFirstPageOnPaginationChange"]}}};PaginationBar.style=":host(){display:block}.pagination-bar{height:3.5rem;display:flex;align-items:center;justify-content:flex-end;gap:var(--ic-space-xl);padding:var(--ic-space-xs) var(--ic-space-md);box-sizing:border-box;--ic-typography-color:var(--ic-pagination-text)}.pagination-bar-left{justify-content:flex-start}.item-controls{display:flex;align-items:center;gap:var(--ic-space-xl)}.pagination-bar-space-between .item-controls{margin-right:auto}.items-per-page-holder{display:flex;align-items:center;gap:var(--ic-space-xs)}.items-per-page-input{--input-width:5rem;--ic-typography-color:var(--ic-pagination-select-content)}.pagination-controls{display:flex;align-items:center;gap:var(--ic-space-xl)}.pagination-controls-wrap{flex-direction:column;align-items:flex-end;gap:var(--ic-space-xs)}.pagination-bar-space-between .pagination-controls{margin-left:auto}.go-to-page-holder{display:flex;align-items:center;gap:var(--ic-space-xs)}.go-to-page-input{--input-width:var(--ic-space-xl)}.go-to-page-button{--min-width:var(--ic-space-xl)}.items-per-page-control-label{white-space:nowrap}@media screen and (max-width: 768px){.pagination-bar{flex-direction:column;align-items:flex-end;height:-moz-fit-content;height:fit-content;gap:var(--ic-space-xs)}.pagination-bar-left{align-items:flex-start}}@media screen and (max-width: 320px){.item-controls,.pagination-controls{flex-direction:column;align-items:flex-end;gap:var(--ic-space-xs)}.pagination-bar-left .item-controls,.pagination-bar-left .pagination-controls,.pagination-bar-space-between .item-controls,.pagination-bar-space-between .pagination-controls{align-items:flex-start}}"}}]);