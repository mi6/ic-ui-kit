"use strict";(self.webpackChunk_ukic_canary_web_components=self.webpackChunk_ukic_canary_web_components||[]).push([[6994],{"./dist/esm/helpers-0f42cb46.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>IcBrandForegroundEnum,a:()=>renderDynamicChildSlots,b:()=>isEmptyString,c:()=>addDataToPosition,d:()=>dynamicDebounce,e:()=>deviceSizeMatches,f:()=>getSlotElements,g:()=>getBrandFromContext,h:()=>checkResizeObserver,i:()=>isSlotUsed,j:()=>IC_DEVICE_SIZES,k:()=>IcDayNames,l:()=>IcDateInputMonths,m:()=>IcWeekDays,n:()=>IcShortDayNames,o:()=>onComponentRequiredPropUndefined,p:()=>pxToRem,q:()=>isPropDefined,r:()=>removeDisabledFalse,s:()=>stringEnumToArray,t:()=>getInputDescribedByText,u:()=>removeFormResetListener,v:()=>addFormResetListener,w:()=>isNumeric,x:()=>IcInformationStatus,y:()=>renderHiddenInput,z:()=>capitalize});var _index_93509377_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-93509377.js");const IC_DEVICE_SIZES={XS:576,S:768,M:992,L:1200,XL:99999},IC_BLOCK_COLOR_COMPONENTS=["ic-hero","ic-top-navigation","ic-footer","ic-side-navigation","ic-alert"],IC_FIXED_COLOR_COMPONENTS=["ic-alert"],IC_BLOCK_COLOR_EXCEPTIONS={"ic-alert":["ic-link"]};var IcInformationStatus,IcBrandForegroundEnum,IcDateInputMonths,IcShortDayNames,IcDayNames,IcWeekDays;!function(IcInformationStatus){IcInformationStatus.Warning="warning",IcInformationStatus.Error="error",IcInformationStatus.Success="success"}(IcInformationStatus||(IcInformationStatus={})),function(IcBrandForegroundEnum){IcBrandForegroundEnum.Default="default",IcBrandForegroundEnum.Dark="dark",IcBrandForegroundEnum.Light="light"}(IcBrandForegroundEnum||(IcBrandForegroundEnum={})),function(IcDateInputMonths){IcDateInputMonths[IcDateInputMonths.January=0]="January",IcDateInputMonths[IcDateInputMonths.February=1]="February",IcDateInputMonths[IcDateInputMonths.March=2]="March",IcDateInputMonths[IcDateInputMonths.April=3]="April",IcDateInputMonths[IcDateInputMonths.May=4]="May",IcDateInputMonths[IcDateInputMonths.June=5]="June",IcDateInputMonths[IcDateInputMonths.July=6]="July",IcDateInputMonths[IcDateInputMonths.August=7]="August",IcDateInputMonths[IcDateInputMonths.September=8]="September",IcDateInputMonths[IcDateInputMonths.October=9]="October",IcDateInputMonths[IcDateInputMonths.November=10]="November",IcDateInputMonths[IcDateInputMonths.December=11]="December"}(IcDateInputMonths||(IcDateInputMonths={})),function(IcShortDayNames){IcShortDayNames[IcShortDayNames.Sun=0]="Sun",IcShortDayNames[IcShortDayNames.Mon=1]="Mon",IcShortDayNames[IcShortDayNames.Tue=2]="Tue",IcShortDayNames[IcShortDayNames.Wed=3]="Wed",IcShortDayNames[IcShortDayNames.Thu=4]="Thu",IcShortDayNames[IcShortDayNames.Fri=5]="Fri",IcShortDayNames[IcShortDayNames.Sat=6]="Sat"}(IcShortDayNames||(IcShortDayNames={})),function(IcDayNames){IcDayNames[IcDayNames.Sunday=0]="Sunday",IcDayNames[IcDayNames.Monday=1]="Monday",IcDayNames[IcDayNames.Tuesday=2]="Tuesday",IcDayNames[IcDayNames.Wednesday=3]="Wednesday",IcDayNames[IcDayNames.Thursday=4]="Thursday",IcDayNames[IcDayNames.Friday=5]="Friday",IcDayNames[IcDayNames.Saturday=6]="Saturday"}(IcDayNames||(IcDayNames={})),function(IcWeekDays){IcWeekDays[IcWeekDays.Sunday=0]="Sunday",IcWeekDays[IcWeekDays.Monday=1]="Monday",IcWeekDays[IcWeekDays.Tuesday=2]="Tuesday",IcWeekDays[IcWeekDays.Wednesday=3]="Wednesday",IcWeekDays[IcWeekDays.Thursday=4]="Thursday",IcWeekDays[IcWeekDays.Friday=5]="Friday",IcWeekDays[IcWeekDays.Saturday=6]="Saturday"}(IcWeekDays||(IcWeekDays={}));const stringEnumToArray=theEnum=>{const arr=[];return Object.values(theEnum).forEach((val=>{if(isNaN(Number(val))){const str=val;arr.push(str)}})),arr},dynamicDebounce=(func,getDelay)=>{let timer;return(...args)=>{const delay=getDelay();clearTimeout(timer),timer=setTimeout(func,delay,...args)}},renderHiddenInput=(always,container,name,value,disabled)=>{if(void 0!==name&&(always||hasShadowDom(container))){const inputs=container.querySelectorAll("input.ic-input");let input=Array.from(inputs).filter((el=>container===el.parentElement))[0];null==input&&(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("ic-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,value instanceof Date?input.value=value?value.toISOString():null:input.value=value||""}},getBrandFromContext=(el,brandFromEvent=null)=>{var _a;const blockColorParent=(el.parentElement||el.getRootNode().host.parentElement).closest(IC_BLOCK_COLOR_COMPONENTS.join(","));if(null!==blockColorParent){const parentTag=blockColorParent.tagName.toLowerCase(),currentTag=el.tagName.toLowerCase();return(null===(_a=IC_BLOCK_COLOR_EXCEPTIONS[parentTag])||void 0===_a?void 0:_a.includes(currentTag))?IcBrandForegroundEnum.Default:null===brandFromEvent||IC_FIXED_COLOR_COMPONENTS.includes(parentTag)?blockColorParent.classList.contains(IcBrandForegroundEnum.Dark)?IcBrandForegroundEnum.Dark:IcBrandForegroundEnum.Light:brandFromEvent}return IcBrandForegroundEnum.Default},isEmptyString=value=>!value||0===value.trim().length,isPropDefined=prop=>void 0!==prop?prop:null,deviceSizeMatches=size=>window.matchMedia(`(max-width: ${size}px)`).matches,getCssProperty=cssVar=>getComputedStyle(document.documentElement).getPropertyValue(cssVar),getSlotElements=slot=>{const slotContent=slot.firstElementChild;if(null!==slotContent){const elements=slotContent.assignedElements?slotContent.assignedElements():slotContent.childNodes;return elements.length?elements:slot.tagName?[slot]:null}return null===slot?null:[slot]};Number(getCssProperty("--ic-breakpoint-xs").replace("px","")),Number(getCssProperty("--ic-breakpoint-sm").replace("px","")),Number(getCssProperty("--ic-breakpoint-md").replace("px","")),Number(getCssProperty("--ic-breakpoint-lg").replace("px","")),Number(getCssProperty("--ic-breakpoint-xl").replace("px",""));const isSlotUsed=(element,slotName)=>Array.from(element.children).some((child=>child.getAttribute("slot")===slotName)),hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,getInputDescribedByText=(inputId,helperText,validationText)=>{return`${helperText?(id=inputId,id+"-helper-text"):""} ${validationText?(id=>id+"-validation-text")(inputId):""}`.trim();var id},pxToRem=(px,base=16)=>1/base*parseInt(px)+"rem",isNumeric=value=>/^-?\d+$/.test(value),onComponentRequiredPropUndefined=(props,component)=>{for(let i=0;i<props.length;i++){const{prop,propName}=props[i];null==prop&&console.error(`No ${propName} specified for ${component} component - prop '${propName}' (web components) / '${kebabToCamelCase(propName)}' (react) required`)}},kebabToCamelCase=kebabCase=>{const individualWords=(kebabCase=kebabCase.toLowerCase()).split("-");let camelCase=individualWords[0];for(let i=1;i<individualWords.length;i++)camelCase+=individualWords[i].substring(0,1).toUpperCase()+individualWords[i].substring(1);return camelCase},checkResizeObserver=callbackFn=>{"undefined"!=typeof window&&void 0!==window.ResizeObserver&&callbackFn()},getForm=el=>el.closest("FORM"),addFormResetListener=(el,callbackFn)=>{const form=getForm(el);null!==form&&form.addEventListener("reset",callbackFn)},removeFormResetListener=(el,callbackFn)=>{const form=getForm(el);null!==form&&form.removeEventListener("reset",callbackFn)},removeDisabledFalse=(disabled,element)=>{disabled||element.removeAttribute("disabled")},capitalize=text=>text.charAt(0).toUpperCase()+text.slice(1),addDataToPosition=(dataObject,newKeys,newValue)=>{const newData={},newIndexes=newKeys.map((key=>key.index)),keys=Object.keys(dataObject),values=Object.values(dataObject),numberOfKeys=keys.length+newIndexes.length;for(let i=0,j=0;i<numberOfKeys;i++)newIndexes.includes(i)?newData[newKeys[newIndexes.indexOf(i)].key]=newValue:(newData[keys[j]]=values[j],j++);return newData},hasDynamicChildSlots=(mutationList,slotNames)=>mutationList.some((({type,addedNodes,removedNodes})=>"childList"===type&&((addedNodes,removedNodes,slotName)=>{const hasSlot=nodeList=>Array.from(nodeList).some((node=>Array.isArray(slotName)?slotName.some((name=>node.slot===name)):node.slot===slotName));return hasSlot(addedNodes)||hasSlot(removedNodes)})(addedNodes,removedNodes,slotNames))),renderDynamicChildSlots=(mutationList,slotNames,ref)=>{hasDynamicChildSlots(mutationList,slotNames)&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.f)(ref)}},"./dist/esm/ic-tree-item.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_tree_item:()=>TreeItem});var _index_93509377_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-93509377.js"),_helpers_0f42cb46_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/helpers-0f42cb46.js");let treeItemIds=0;const TreeItem=class{constructor(hostRef){(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icTreeItemSelected=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icTreeItemSelected",7),this.treeItemId="ic-tree-item-"+treeItemIds++,this.treeItemTag="IC-TREE-ITEM",this.hostMutationObserver=null,this.TOOLTIP="ic-tooltip",this.TREE_ITEM_LABEL_CLASS_SELECTOR=".tree-item-label",this.handleTreeItemClicked=()=>{this.isParent&&(this.expanded=!this.expanded,this.hasParentExpanded=!0),this.updateAriaLabel(),this.selected=!0,this.watchSelectedHandler()},this.setTreeItemPadding=()=>{let level=1,parentElement=this.el.parentElement;const treeItemContent=this.el.shadowRoot.querySelector(".tree-item-content"),isSiblingOfParent=Array.from(parentElement.children).map((sibling=>sibling!==this.el&&!sibling.querySelector('[slot="router-item"]')&&!sibling.querySelector('[slot="label"]')&&sibling.children.length>0)).includes(!0),isChild=parentElement.tagName===this.treeItemTag,isRouterItem=this.hasRouterSlot();for((isSiblingOfParent&&!this.el.isParent||isChild&&!this.el.isParent)&&(isRouterItem?this.routerSlot.classList.add("ic-tree-item-single"):treeItemContent.classList.add("ic-tree-item-single"));parentElement;)parentElement.tagName===this.treeItemTag&&(level++,!this.el.isParent&&isSiblingOfParent?treeItemContent.style.paddingLeft=`calc(var(--ic-space-xl) + ${16*level}px)`:this.el.isParent?treeItemContent.style.paddingLeft=16*level+"px":treeItemContent.style.paddingLeft=`calc(var(--ic-space-xs) + ${24*level}px`),parentElement=parentElement.parentElement},this.truncateTreeItemLabel=treeItem=>{let typographyEl=treeItem.shadowRoot.querySelector(this.TREE_ITEM_LABEL_CLASS_SELECTOR);const slottedContent=treeItem.querySelector("[slot='router-item']");let contentHeight=null==slottedContent?void 0:slottedContent.scrollHeight;if(typographyEl)contentHeight=typographyEl.scrollHeight;else{const newTypographyEl=document.createElement("ic-typography");newTypographyEl.innerHTML=slottedContent.textContent,newTypographyEl.classList.add("tree-item-label"),slottedContent.replaceChild(newTypographyEl,slottedContent.firstChild),typographyEl=newTypographyEl}const tooltipAlreadyExists=!!(null==typographyEl?void 0:typographyEl.closest(this.TOOLTIP)),treeContent=treeItem.shadowRoot.querySelector(".tree-item-content")||slottedContent;if(contentHeight>(null==treeContent?void 0:treeContent.clientHeight)&&!tooltipAlreadyExists){const tooltipEl=document.createElement("ic-tooltip");tooltipEl.setAttribute("target",this.el.id),tooltipEl.setAttribute("label",typographyEl.textContent),tooltipEl.setAttribute("placement","right"),treeContent===slottedContent?(treeContent.addEventListener("focus",(()=>this.handleDisplayTooltip(!0))),treeContent.addEventListener("blur",(()=>this.handleDisplayTooltip(!1))),tooltipEl.setAttribute("style","overflow:hidden;"),typographyEl.setAttribute("style","overflow:hidden;text-overflow:ellipsis;white-space:nowrap;")):(tooltipEl.classList.add("ic-tooltip-overflow"),typographyEl.classList.add("ic-text-overflow")),treeContent.appendChild(tooltipEl),tooltipEl.appendChild(typographyEl)}},this.handleDisplayTooltip=display=>{const typographyEl=this.el.shadowRoot.querySelector(this.TREE_ITEM_LABEL_CLASS_SELECTOR)||this.el.querySelector(this.TREE_ITEM_LABEL_CLASS_SELECTOR),tooltip=null==typographyEl?void 0:typographyEl.closest(this.TOOLTIP);null==tooltip||tooltip.displayTooltip(display)},this.childTreeItems=void 0,this.disabled=!1,this.expanded=!1,this.focusInset=!1,this.hasParentExpanded=!1,this.href=void 0,this.hreflang="",this.isParent=!1,this.label="",this.referrerpolicy=void 0,this.rel=void 0,this.selected=!1,this.size="medium",this.target=void 0,this.theme="inherit",this.truncateTreeItem=void 0}watchDisabledHandler(){(0,_helpers_0f42cb46_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el)}watchSelectedHandler(){this.selected&&this.icTreeItemSelected.emit({id:this.el.id}),this.updateAriaLabel()}disconnectedCallback(){var _a;null===(_a=this.hostMutationObserver)||void 0===_a||_a.disconnect()}componentWillLoad(){(0,_helpers_0f42cb46_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el),this.childTreeItems=Array.from(this.el.children).filter((child=>child.tagName===this.treeItemTag)),this.childTreeItems.length>0&&(this.isParent=!0)}componentDidLoad(){this.setTreeItemPadding(),this.updateAriaLabel(),!(0,_helpers_0f42cb46_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"label")&&(0,_helpers_0f42cb46_js__WEBPACK_IMPORTED_MODULE_1__.o)([{prop:this.label,propName:"label"}],"Tree item"),this.hostMutationObserver=new MutationObserver((mutationList=>(0,_helpers_0f42cb46_js__WEBPACK_IMPORTED_MODULE_1__.a)(mutationList,"icon",this))),this.hostMutationObserver.observe(this.el,{childList:!0})}componentDidRender(){this.truncateTreeItem&&this.truncateTreeItemLabel(this.el),this.expanded&&this.childTreeItems.forEach((child=>{child.truncateTreeItem&&this.truncateTreeItemLabel(child)}))}componentDidUpdate(){this.hasParentExpanded&&(this.childTreeItems.forEach((child=>{child.truncateTreeItem&&this.truncateTreeItemLabel(child)})),this.hasParentExpanded=!1)}handleKeyDown(ev){"Enter"!==ev.key&&" "!==ev.key||(ev.stopImmediatePropagation(),this.handleTreeItemClicked())}async setFocus(){var _a,_b;this.hasRouterSlot()?null===(_a=this.routerSlot)||void 0===_a||_a.focus():null===(_b=this.treeItemElement)||void 0===_b||_b.focus()}async updateAriaLabel(){let ariaLabel;if(ariaLabel=this.hasRouterSlot()?this.routerSlot.textContent:(0,_helpers_0f42cb46_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"label")?this.el.querySelector('[slot="label"]').textContent:this.label,this.isParent&&(ariaLabel=`${ariaLabel}, triggers submenu, ${this.expanded?"expanded":"collapsed"}`),this.el.parentElement){const treeItems=Array.from(this.el.parentElement.children).filter((child=>child.tagName===this.treeItemTag));ariaLabel=`${ariaLabel}, ${treeItems.indexOf(this.el)+1} of ${treeItems.length}`}this.selected&&(ariaLabel=`${ariaLabel}, active`),this.disabled&&(ariaLabel=`${ariaLabel}, dimmed`),this.hasRouterSlot()?this.routerSlot.ariaLabel=ariaLabel:this.treeItemElement.ariaLabel=ariaLabel}hasRouterSlot(){return this.routerSlot=this.el.querySelector('[slot="router-item"]'),!!this.routerSlot}render(){const{disabled,label,selected,size,expanded,focusInset,theme}=this,Component=this.href&&!this.disabled?"a":"div",attrs="a"==Component&&{href:this.href,hrefLang:this.hreflang,referrerPolicy:this.referrerpolicy,rel:this.rel,target:this.target};return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{"ic-tree-item-disabled":disabled,"ic-tree-item-selected":!disabled&&selected,[`ic-tree-item-${size}`]:"medium"!==size,"ic-tree-item-focus-inset":focusInset,[`ic-theme-${theme}`]:"inherit"!==theme,"ic-tree-item-truncate":this.truncateTreeItem},id:this.treeItemId},this.hasRouterSlot()?(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"router-item"}):(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)(Component,Object.assign({class:{"tree-item-content":!0},tabIndex:disabled?-1:0,onClick:this.handleTreeItemClicked,ref:el=>this.treeItemElement=el,"aria-disabled":disabled?"true":"false","aria-live":"polite"},attrs,{onFocus:()=>this.handleDisplayTooltip(!0),onBlur:()=>this.handleDisplayTooltip(!1)}),this.isParent&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:{"arrow-dropdown":!0,"tree-item-expanded":expanded},"aria-hidden":"true",innerHTML:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M7 9.5L12 14.5L17 9.5H7Z" fill="currentColor"/>\n</svg>'}),(0,_helpers_0f42cb46_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"icon")&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"icon-container"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"icon"})),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{class:"tree-item-label"},(0,_helpers_0f42cb46_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"label")?(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"label"}):label)),expanded&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{"aria-hidden":`${!expanded}`},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)))}get el(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{disabled:["watchDisabledHandler"],selected:["watchSelectedHandler"]}}};TreeItem.style=':host{display:block;border:none;position:relative}:host .tree-item-content{display:flex;align-items:center;min-height:calc(var(--ic-space-xl) + var(--ic-space-xs));padding:0 var(--ic-space-xs);text-decoration:none;color:var(--ic-tree-view-text);--ic-typography-color:var(--ic-tree-view-text)}::slotted([slot="router-item"]){display:flex;align-items:center;min-height:calc(var(--ic-space-xl) + var(--ic-space-xs));text-decoration:none;font-family:var(--ic-font-body-family);color:var(--ic-tree-view-text);padding:0 var(--ic-space-xs) !important}:host(.ic-tree-item-truncate) .tree-item-content,:host(.ic-tree-item-truncate) ::slotted([slot="router-item"]){height:calc(var(--ic-space-xl) + var(--ic-space-xs))}::slotted([slot="router-item"].ic-tree-item-single){padding-left:calc(var(--ic-space-xl) + var(--ic-space-xs)) !important}:host .tree-item-content:focus,::slotted([slot="router-item"]:focus){box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius);transition:var(--ic-transition-duration-fast);outline:none}:host(.ic-tree-item-focus-inset) .tree-item-content:focus,:host(.ic-tree-item-focus-inset) ::slotted([slot="router-item"]:focus){box-shadow:var(--ic-border-focus-inset);border-radius:var(--ic-border-radius-inset)}:host(.ic-tree-item-focus-inset) .tree-item-content,:host(.ic-tree-item-focus-inset) ::slotted([slot="router-item"]){padding:0 var(--ic-space-sm)}:host .tree-item-content:hover,::slotted([slot="router-item"]:hover){background-color:var(--ic-tree-view-hover) !important;cursor:pointer}:host .tree-item-content:active,::slotted([slot="router-item"]:active){background-color:var(--ic-tree-view-pressed) !important}:host(.ic-tree-item-selected) .tree-item-content,:host(.ic-tree-item-selected) ::slotted([slot="router-item"]){background-color:var(--ic-tree-view-selected) !important}:host(.ic-tree-item-small) .tree-item-content,:host(.ic-tree-item-small) ::slotted([slot="router-item"]){min-height:var(--ic-space-xl)}:host(.ic-tree-item-large) .tree-item-content,:host(.ic-tree-item-large) ::slotted([slot="router-item"]){min-height:var(--ic-space-xxl)}:host(.ic-tree-item-truncate.ic-tree-item-small) .tree-item-content,:host(.ic-tree-item-truncate.ic-tree-item-small) ::slotted([slot="router-item"]){height:var(--ic-space-xl)}:host(.ic-tree-item-truncate.ic-tree-item-large) .tree-item-content,:host(.ic-tree-item-truncate.ic-tree-item-large) ::slotted([slot="router-item"]){height:var(--ic-space-xxl)}:host(.ic-tree-item-disabled){pointer-events:none}:host(.ic-tree-item-disabled) .tree-item-content,:host(.ic-tree-item-disabled) ::slotted([slot="icon"]),:host(.ic-tree-item-disabled) ::slotted([slot="router-item"]){color:var(--ic-tree-view-text-disabled) !important;--ic-typography-color:var(--ic-tree-view-text-disabled) !important;fill:var(--ic-tree-view-icon-disabled);pointer-events:none}:host .arrow-dropdown{color:var(--ic-tree-view-dropdown-arrow);margin-right:var(--ic-space-xs)}:host(.ic-tree-item-disabled) .arrow-dropdown{color:var(--ic-tree-view-dropdown-arrow-disabled)}:host(.ic-tree-item-small) .arrow-dropdown{margin-right:var(--ic-space-xxs)}:host .tree-item-expanded{transform:rotate(180deg);margin-top:calc(-1 * var(--ic-space-xxs))}:host .ic-tree-item-single{padding-left:calc(var(--ic-space-xl) + var(--ic-space-xs))}:host(.ic-tree-item-small) .ic-tree-item-single{padding-left:calc(var(--ic-space-xl) + var(--ic-space-xxs))}.icon-container{min-width:var(--ic-space-lg);width:var(--ic-space-lg);height:var(--ic-space-lg);margin:0 var(--ic-space-xs) 0 0}:host(.ic-tree-item-small) .icon-container{margin:0 var(--ic-space-xxs) 0 0}.ic-text-overflow{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.ic-tooltip-overflow{overflow:hidden}::slotted([slot="icon"]){fill:var(--ic-tree-view-icon)}@media (forced-colors: active){::slotted([slot="icon"]){fill:currentcolor}:host .tree-item-content:hover,::slotted([slot="router-item"]:hover),:host .tree-item-content:active,::slotted([slot="router-item"]:active),:host(.ic-tree-item-selected) .tree-item-content,:host(.ic-tree-item-selected) ::slotted([slot="router-item"]){background-color:none !important}:host(.ic-tree-item-disabled) .tree-item-content,:host(.ic-tree-item-disabled) .arrow-dropdown,:host(.ic-tree-item-disabled) ::slotted([slot="icon"]),:host(.ic-tree-item-disabled) ::slotted([slot="router-item"]){color:GrayText !important;--ic-typography-color:GrayText !important;fill:GrayText !important}:host .tree-item-content:focus,::slotted([slot="router-item"]:focus){border:var(--ic-border-hc) !important}:host(.ic-tree-item-selected) .tree-item-content,:host(.ic-tree-item-selected) ::slotted([slot="router-item"]){color:Highlight !important;--ic-typography-color:Highlight !important}}'}}]);