/*! For license information please see components-ic-tree-view-ic-tree-view-stories-mdx.9170fa48.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_canary_web_components=self.webpackChunk_ukic_canary_web_components||[]).push([[6721],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _t$litHtmlVersions;__webpack_require__.d(__webpack_exports__,{qy:()=>x});var t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h="lit$".concat(Math.random().toFixed(9).slice(2),"$"),o="?"+h,n="<".concat(o,">"),r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(">|".concat(d,"(?:([^\\s\"'>=/]+)(").concat(d,"*=").concat(d,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>function(i){for(var _len=arguments.length,s=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)s[_key-1]=arguments[_key];return{_$litType$:t,strings:i,values:s}},x=y(1),T=(y(2),y(3),Symbol.for("lit-noChange")),E=Symbol.for("lit-nothing"),A=new WeakMap,C=r.createTreeWalker(r,129);function P(t,i){if(!a(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}var V=(t,i)=>{for(var r,s=t.length-1,o=[],l=2===i?"<svg>":3===i?"<math>":"",c=f,_i=0;_i<s;_i++){for(var _s=t[_i],_a=void 0,_u=void 0,_d=-1,_y=0;_y<_s.length&&(c.lastIndex=_y,null!==(_u=c.exec(_s)));)_y=c.lastIndex,c===f?"!--"===_u[1]?c=v:void 0!==_u[1]?c=_:void 0!==_u[2]?($.test(_u[2])&&(r=RegExp("</"+_u[2],"g")),c=m):void 0!==_u[3]&&(c=m):c===m?">"===_u[0]?(c=null!=r?r:f,_d=-1):void 0===_u[1]?_d=-2:(_d=c.lastIndex-_u[2].length,_a=_u[1],c=void 0===_u[3]?m:'"'===_u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);var _x=c===m&&t[_i+1].startsWith("/>")?" ":"";l+=c===f?_s+n:_d>=0?(o.push(_a),_s.slice(0,_d)+e+_s.slice(_d)+h+_x):_s+h+(-2===_d?_i:_x)}return[P(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),o]};class N{constructor(_ref,n){var r,{strings:t,_$litType$:s}=_ref;this.parts=[];var c=0,a=0,u=t.length-1,d=this.parts,[f,v]=V(t,s);if(this.el=N.createElement(f,n),C.currentNode=this.el.content,2===s||3===s){var _t=this.el.content.firstChild;_t.replaceWith(..._t.childNodes)}for(;null!==(r=C.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(var _t2 of r.getAttributeNames())if(_t2.endsWith(e)){var _i2=v[a++],_s2=r.getAttribute(_t2).split(h),_e=/([.?@])?(.*)/.exec(_i2);d.push({type:1,index:c,name:_e[2],strings:_s2,ctor:"."===_e[1]?H:"?"===_e[1]?I:"@"===_e[1]?L:k}),r.removeAttribute(_t2)}else _t2.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(_t2));if($.test(r.tagName)){var _t3=r.textContent.split(h),_s3=_t3.length-1;if(_s3>0){r.textContent=i?i.emptyScript:"";for(var _i3=0;_i3<_s3;_i3++)r.append(_t3[_i3],l()),C.nextNode(),d.push({type:2,index:++c});r.append(_t3[_s3],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else for(var _t4=-1;-1!==(_t4=r.data.indexOf(h,_t4+1));)d.push({type:7,index:c}),_t4+=h.length-1;c++}}static createElement(t,i){var s=r.createElement("template");return s.innerHTML=t,s}}function S(t,i){var _s$_$Co,_h,_h2,_h2$_$AO,_s$_$Co2,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,e=arguments.length>3?arguments[3]:void 0;if(i===T)return i;var h=void 0!==e?null===(_s$_$Co=s._$Co)||void 0===_s$_$Co?void 0:_s$_$Co[e]:s._$Cl,o=c(i)?void 0:i._$litDirective$;return(null===(_h=h)||void 0===_h?void 0:_h.constructor)!==o&&(null!==(_h2=h)&&void 0!==_h2&&null!==(_h2$_$AO=_h2._$AO)&&void 0!==_h2$_$AO&&_h2$_$AO.call(_h2,!1),void 0===o?h=void 0:(h=new o(t))._$AT(t,s,e),void 0!==e?(null!==(_s$_$Co2=s._$Co)&&void 0!==_s$_$Co2?_s$_$Co2:s._$Co=[])[e]=h:s._$Cl=h),void 0!==h&&(i=S(t,h._$AS(t,i.values),h,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var _t$creationScope,{el:{content:i},parts:s}=this._$AD,e=(null!==(_t$creationScope=null==t?void 0:t.creationScope)&&void 0!==_t$creationScope?_t$creationScope:r).importNode(i,!0);C.currentNode=e;for(var h=C.nextNode(),o=0,n=0,l=s[0];void 0!==l;){var _l;if(o===l.index){var _i4=void 0;2===l.type?_i4=new R(h,h.nextSibling,this,t):1===l.type?_i4=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(_i4=new z(h,this,t)),this._$AV.push(_i4),l=s[++n]}o!==(null===(_l=l)||void 0===_l?void 0:_l.index)&&(h=C.nextNode(),o++)}return C.currentNode=r,e}p(t){var i=0;for(var _s4 of this._$AV)void 0!==_s4&&(void 0!==_s4.strings?(_s4._$AI(t,_s4,i),i+=_s4.strings.length-2):_s4._$AI(t[i])),i++}}class R{get _$AU(){var _this$_$AM$_$AU,_this$_$AM;return null!==(_this$_$AM$_$AU=null===(_this$_$AM=this._$AM)||void 0===_this$_$AM?void 0:_this$_$AM._$AU)&&void 0!==_this$_$AM$_$AU?_this$_$AM$_$AU:this._$Cv}constructor(t,i,s,e){var _e$isConnected;this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=null===(_e$isConnected=null==e?void 0:e.isConnected)||void 0===_e$isConnected||_e$isConnected}get parentNode(){var _t5,t=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===(null===(_t5=t)||void 0===_t5?void 0:_t5.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t){t=S(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),c(t)?t===E||null==t||""===t?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==E&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r.createTextNode(t)),this._$AH=t}$(t){var _this$_$AH,{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=N.createElement(P(s.h,s.h[0]),this.options)),s);if((null===(_this$_$AH=this._$AH)||void 0===_this$_$AH?void 0:_this$_$AH._$AD)===e)this._$AH.p(i);else{var _t6=new M(e,this),_s5=_t6.u(this.options);_t6.p(i),this.T(_s5),this._$AH=_t6}}_$AC(t){var i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new N(t)),i}k(t){a(this._$AH)||(this._$AH=[],this._$AR());var s,i=this._$AH,e=0;for(var _h3 of t)e===i.length?i.push(s=new R(this.O(l()),this.O(l()),this,this.options)):s=i[e],s._$AI(_h3),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,i=arguments.length>1?arguments[1]:void 0;for(null===(_this$_$AP=this._$AP)||void 0===_this$_$AP||_this$_$AP.call(this,!1,!0,i);t&&t!==this._$AB;){var _this$_$AP,_i5=t.nextSibling;t.remove(),t=_i5}}setConnected(t){var _this$_$AP2;void 0===this._$AM&&(this._$Cv=t,null===(_this$_$AP2=this._$AP)||void 0===_this$_$AP2||_this$_$AP2.call(this,t))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=E}_$AI(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,s=arguments.length>2?arguments[2]:void 0,e=arguments.length>3?arguments[3]:void 0,h=this.strings,o=!1;if(void 0===h)t=S(this,t,i,0),(o=!c(t)||t!==this._$AH&&t!==T)&&(this._$AH=t);else{var _n,_r,_e2=t;for(t=h[0],_n=0;_n<h.length-1;_n++)(_r=S(this,_e2[s+_n],i,_n))===T&&(_r=this._$AH[_n]),o||(o=!c(_r)||_r!==this._$AH[_n]),_r===E?t=E:t!==E&&(t+=(null!=_r?_r:"")+h[_n+1]),this._$AH[_n]=_r}o&&!e&&this.j(t)}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class H extends k{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===E?void 0:t}}class I extends k{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E)}}class L extends k{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t){var _S;if((t=null!==(_S=S(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==_S?_S:E)!==T){var s=this._$AH,e=t===E&&s!==E||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==E&&(s===E||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}}handleEvent(t){var _this$options$host,_this$options;"function"==typeof this._$AH?this._$AH.call(null!==(_this$options$host=null===(_this$options=this.options)||void 0===_this$options?void 0:_this$options.host)&&void 0!==_this$options$host?_this$options$host:this.element,t):this._$AH.handleEvent(t)}}class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}var j=t.litHtmlPolyfillSupport;null!=j&&j(N,R),(null!==(_t$litHtmlVersions=t.litHtmlVersions)&&void 0!==_t$litHtmlVersions?_t$litHtmlVersions:t.litHtmlVersions=[]).push("3.2.1")},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/ic-tree-view/ic-tree-view.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,basic:()=>basic,default:()=>ic_tree_view_stories,disabledTreeItems:()=>disabledTreeItems,expanded:()=>expanded,focusInset:()=>focusInset,large:()=>large,link:()=>ic_tree_view_stories_link,maxContent:()=>maxContent,nested:()=>nested,routerItem:()=>routerItem,selectedTreeItem:()=>selectedTreeItem,slottedContent:()=>slottedContent,small:()=>small,truncationBehaviour:()=>truncationBehaviour,withIcons:()=>withIcons});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");const readme_namespaceObject='# ic-tree-view\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property            | Attribute             | Description                                                                                                                                                                         | Type                             | Default     |\n| ------------------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |\n| `focusInset`        | `focus-inset`         | If `true`, tree items will have inset focus.                                                                                                                                        | `boolean`                        | `false`     |\n| `heading`           | `heading`             | The heading of the tree view.                                                                                                                                                       | `string`                         | `""`        |\n| `size`              | `size`                | The size of the tree view.                                                                                                                                                          | `"large" \\| "medium" \\| "small"` | `"medium"`  |\n| `theme`             | `theme`               | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.                                             | `"dark" \\| "inherit" \\| "light"` | `"inherit"` |\n| `truncateHeading`   | `truncate-heading`    | If `true`, the tree view heading will be truncated instead of text wrapping. When used on small devices, this prop will be overridden and headings will be set to text-wrap.        | `boolean`                        | `false`     |\n| `truncateTreeItems` | `truncate-tree-items` | If `true`, tree items will be truncated, unless they are individually overridden. When used on small devices, this prop will be overridden and tree-items will be set to text-wrap. | `boolean`                        | `false`     |\n\n\n## Slots\n\n| Slot        | Description                                   |\n| ----------- | --------------------------------------------- |\n| `"heading"` | Content is set as the tree view heading.      |\n| `"icon"`    | Content is placed to the left of the heading. |\n\n\n## CSS Custom Properties\n\n| Name                | Description            |\n| ------------------- | ---------------------- |\n| `--tree-view-width` | Width of the tree view |\n\n\n## Dependencies\n\n### Depends on\n\n- ic-tooltip\n- ic-typography\n\n### Graph\n```mermaid\ngraph TD;\n  ic-tree-view --\x3e ic-tooltip\n  ic-tree-view --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  style ic-tree-view fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n',ic_tree_item_readme_namespaceObject='# ic-tree-item\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property           | Attribute            | Description                                                                                                                             | Type                                                                                                                                                                                     | Default     |\n| ------------------ | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |\n| `disabled`         | `disabled`           | If `true`, the tree item appears in the disabled state.                                                                                 | `boolean`                                                                                                                                                                                | `false`     |\n| `expanded`         | `expanded`           | If `true`, the tree item appears in the expanded state.                                                                                 | `boolean`                                                                                                                                                                                | `false`     |\n| `href`             | `href`               | The URL that the tree item link points to. If set, the tree item will render as an "a" tag, otherwise it will render as a div.          | `string`                                                                                                                                                                                 | `undefined` |\n| `hreflang`         | `hreflang`           | The human language of the linked URL.                                                                                                   | `string`                                                                                                                                                                                 | `""`        |\n| `label`            | `label`              | The label of the tree item.                                                                                                             | `string`                                                                                                                                                                                 | `""`        |\n| `referrerpolicy`   | `referrerpolicy`     | How much of the referrer to send when following the link.                                                                               | `"" \\| "no-referrer" \\| "no-referrer-when-downgrade" \\| "origin" \\| "origin-when-cross-origin" \\| "same-origin" \\| "strict-origin" \\| "strict-origin-when-cross-origin" \\| "unsafe-url"` | `undefined` |\n| `rel`              | `rel`                | The relationship of the linked URL as space-separated link types.                                                                       | `string`                                                                                                                                                                                 | `undefined` |\n| `selected`         | `selected`           | If `true`, the tree item appears in the selected state.                                                                                 | `boolean`                                                                                                                                                                                | `false`     |\n| `target`           | `target`             | The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).                                     | `string`                                                                                                                                                                                 | `undefined` |\n| `theme`            | `theme`              | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component. | `"dark" \\| "inherit" \\| "light"`                                                                                                                                                         | `"inherit"` |\n| `truncateTreeItem` | `truncate-tree-item` | If `true`, the tree item label will be truncated instead of text wrapping.                                                              | `boolean`                                                                                                                                                                                | `undefined` |\n\n\n## Events\n\n| Event                | Description                         | Type                           |\n| -------------------- | ----------------------------------- | ------------------------------ |\n| `icTreeItemSelected` | Emitted when tree item is selected. | `CustomEvent<{ id: string; }>` |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on the native `input`.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot            | Description                                         |\n| --------------- | --------------------------------------------------- |\n| `"icon"`        | Content is placed to the left of the label.         |\n| `"label"`       | Content is set as the tree item label.              |\n| `"router-item"` | Handle routing by nesting your routes in this slot. |\n\n\n## Dependencies\n\n### Depends on\n\n- ic-typography\n- ic-tooltip\n\n### Graph\n```mermaid\ngraph TD;\n  ic-tree-item --\x3e ic-typography\n  ic-tree-item --\x3e ic-tooltip\n  ic-tooltip --\x3e ic-typography\n  style ic-tree-item fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h3:"h3",h4:"h4",pre:"pre"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Web Components/Tree view",component:"ic-tree-view",parameters:{componentAPI:{data:readme_namespaceObject+ic_tree_item_readme_namespaceObject}}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"canary-tree-view",children:"[Canary]: Tree view"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Use the tree view component to display hierarchical data in a tree structure. The tree view component is useful for displaying nested data, such as a file system or a category hierarchy."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Click the 'Component API' tab to view all the available attributes, events and slots for tree view."}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["To use the tree view component, import ",(0,jsx_runtime.jsx)(_components.code,{children:"@ukic/canary-web-components"})," into your application."]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"basic",children:"Basic"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A basic example with one level of tree items."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Basic",children:lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu">
          <ic-tree-item label="Coffee"></ic-tree-item>
          <ic-tree-item label="Tea"></ic-tree-item>
          <ic-tree-item label="Hot chocolate"></ic-tree-item>
        </ic-tree-view>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"basic-code-example",children:"Basic code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-tree-view heading="Menu">\n  <ic-tree-item label="Coffee"></ic-tree-item>\n  <ic-tree-item label="Tea"></ic-tree-item>\n  <ic-tree-item label="Hot chocolate"></ic-tree-item>\n</ic-tree-view>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"nested",children:"Nested"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"An example with nested tree items."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Nested",children:lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu">
          <ic-tree-item label="Coffee">
            <ic-tree-item label="Americano">
              <ic-tree-item label="With milk"></ic-tree-item>
            </ic-tree-item>
            <ic-tree-item label="Latte"></ic-tree-item>
            <ic-tree-item label="Espresso"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Tea">
            <ic-tree-item label="Earl Grey"></ic-tree-item>
            <ic-tree-item label="Chai"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Hot chocolate"></ic-tree-item>
        </ic-tree-view>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"nested-code-example",children:"Nested code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-tree-view heading="Menu">\n  <ic-tree-item label="Coffee">\n    <ic-tree-item label="Americano"></ic-tree-item>\n    <ic-tree-item label="Latte"></ic-tree-item>\n    <ic-tree-item label="Espresso"></ic-tree-item>\n  </ic-tree-item>\n  <ic-tree-item label="Tea">\n    <ic-tree-item label="Earl Grey"></ic-tree-item>\n    <ic-tree-item label="Chai"></ic-tree-item>\n  </ic-tree-item>\n  <ic-tree-item label="Hot chocolate"></ic-tree-item>\n</ic-tree-view>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-icons",children:"With icons"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"An example with icons."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"With icons",children:lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
            />
          </svg>
          <ic-tree-item label="Coffee">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
              />
            </svg>
            <ic-tree-item label="Americano"></ic-tree-item>
            <ic-tree-item label="Latte">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
                />
              </svg>
            </ic-tree-item>
            <ic-tree-item label="Espresso"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Tea">
            <ic-tree-item label="Earl Grey"></ic-tree-item>
            <ic-tree-item label="Chai"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Hot chocolate"></ic-tree-item>
        </ic-tree-view>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"icon-code-example",children:"Icon code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-tree-view heading="Menu">\n  <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n    <path\n      d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n    />\n  </svg>\n  <ic-tree-item label="Coffee">\n    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n      <path\n        d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n      />\n    </svg>\n    <ic-tree-item label="Americano"></ic-tree-item>\n    <ic-tree-item label="Latte">\n      <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n        <path\n          d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n        />\n      </svg>\n    </ic-tree-item>\n    <ic-tree-item label="Espresso"></ic-tree-item>\n  </ic-tree-item>\n  <ic-tree-item label="Tea">\n    <ic-tree-item label="Earl Grey"></ic-tree-item>\n    <ic-tree-item label="Chai"></ic-tree-item>\n  </ic-tree-item>\n  <ic-tree-item label="Hot chocolate"></ic-tree-item>\n</ic-tree-view>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"small",children:"Small"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"An example with small styling passed down from tree view to tree items and nested tree items."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Small",children:lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu" size="small">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
            />
          </svg>
          <ic-tree-item label="Coffee">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
              />
            </svg>
            <ic-tree-item label="Americano"></ic-tree-item>
            <ic-tree-item label="Latte">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
                />
              </svg>
            </ic-tree-item>
            <ic-tree-item label="Espresso"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Tea">
            <ic-tree-item label="Earl Grey"></ic-tree-item>
            <ic-tree-item label="Chai"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Hot chocolate"></ic-tree-item>
        </ic-tree-view>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"small-code-example",children:"Small code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-tree-view heading="Menu" size="small">\n  <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n    <path\n      d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n    />\n  </svg>\n  <ic-tree-item label="Coffee">\n    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n      <path\n        d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n      />\n    </svg>\n    <ic-tree-item label="Americano"></ic-tree-item>\n    <ic-tree-item label="Latte">\n      <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n        <path\n          d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n        />\n      </svg>\n    </ic-tree-item>\n    <ic-tree-item label="Espresso"></ic-tree-item>\n  </ic-tree-item>\n  <ic-tree-item label="Tea">\n    <ic-tree-item label="Earl Grey"></ic-tree-item>\n    <ic-tree-item label="Chai"></ic-tree-item>\n  </ic-tree-item>\n  <ic-tree-item label="Hot chocolate"></ic-tree-item>\n</ic-tree-view>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"large",children:"Large"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"An example with large styling passed down from tree view to tree items and nested tree items."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Large",children:lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu" size="large">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
            />
          </svg>
          <ic-tree-item label="Coffee">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
              />
            </svg>
            <ic-tree-item label="Americano"></ic-tree-item>
            <ic-tree-item label="Latte">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
                />
              </svg>
            </ic-tree-item>
            <ic-tree-item label="Espresso"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Tea">
            <ic-tree-item label="Earl Grey"></ic-tree-item>
            <ic-tree-item label="Chai"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Hot chocolate"></ic-tree-item>
        </ic-tree-view>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"large-code-example",children:"Large code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-tree-view heading="Menu" size="large">\n  <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n    <path\n      d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n    />\n  </svg>\n  <ic-tree-item label="Coffee">\n    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n      <path\n        d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n      />\n    </svg>\n    <ic-tree-item label="Americano"></ic-tree-item>\n    <ic-tree-item label="Latte">\n      <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n        <path\n          d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n        />\n      </svg>\n    </ic-tree-item>\n    <ic-tree-item label="Espresso"></ic-tree-item>\n  </ic-tree-item>\n  <ic-tree-item label="Tea">\n    <ic-tree-item label="Earl Grey"></ic-tree-item>\n    <ic-tree-item label="Chai"></ic-tree-item>\n  </ic-tree-item>\n  <ic-tree-item label="Hot chocolate"></ic-tree-item>\n</ic-tree-view>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled-tree-items",children:"Disabled tree items"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"An example with disabled tree items."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Disabled tree items",children:lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
            />
          </svg>
          <ic-tree-item label="Coffee">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
              />
            </svg>
            <ic-tree-item label="Americano"></ic-tree-item>
            <ic-tree-item label="Latte" disabled="true">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
                />
              </svg>
            </ic-tree-item>
            <ic-tree-item label="Espresso"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Tea">
            <ic-tree-item label="Earl Grey"></ic-tree-item>
            <ic-tree-item label="Chai" disabled="true"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Hot chocolate" disabled="true"></ic-tree-item>
        </ic-tree-view>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"disabled-tree-items-code-example",children:"Disabled tree items code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-tree-view heading="Menu">\n  <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n    <path\n      d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n    />\n  </svg>\n  <ic-tree-item label="Coffee">\n    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n      <path\n        d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n      />\n    </svg>\n    <ic-tree-item label="Americano"></ic-tree-item>\n    <ic-tree-item label="Latte" disabled="true">\n      <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n        <path\n          d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n        />\n      </svg>\n    </ic-tree-item>\n    <ic-tree-item label="Espresso"></ic-tree-item>\n  </ic-tree-item>\n  <ic-tree-item label="Tea">\n    <ic-tree-item label="Earl Grey"></ic-tree-item>\n    <ic-tree-item label="Chai" disabled="true"></ic-tree-item>\n  </ic-tree-item>\n  <ic-tree-item label="Hot chocolate" disabled="true"></ic-tree-item>\n</ic-tree-view>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"router-item",children:"Router item"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"An example with a tree item that is replaced by a router item."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Router item",children:lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu" truncate-tree-items="true">
          <ic-tree-item>
            <a slot="router-item" href="/"
              >Hot chocolate with marshmallows and whipped cream</a
            >
          </ic-tree-item>
          <ic-tree-item>
            <a slot="router-item" href="/tea">Tea</a>
          </ic-tree-item>
          <ic-tree-item label="Coffee"></ic-tree-item>
        </ic-tree-view>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"router-item-code-example",children:"Router item code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-tree-view heading="Menu" truncate-tree-items="true">\n  <ic-tree-item>\n    <a slot="router-item" href="/"\n      >Hot chocolate with marshmallows and whipped cream</a\n    >\n  </ic-tree-item>\n  <ic-tree-item>\n    <a slot="router-item" href="/tea">Tea</a>\n  </ic-tree-item>\n  <ic-tree-item label="Coffee"></ic-tree-item>\n</ic-tree-view>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"slotted-content",children:"Slotted content"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"An example with slotted content for tree view heading and slotted content for tree item label."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Slotted content",children:lit_html.qy`
      <div style="width:250px">
        <ic-tree-view>
          <ic-typography variant="subtitle-large" slot="heading">Menu</ic-typography>
          <ic-tree-item>
            <ic-typography slot="label">Coffee<ic-typography>
          </ic-tree-item>
          <ic-tree-item label="Tea"></ic-tree-item>
          <ic-tree-item label="Hot chocolate"></ic-tree-item>
        </ic-tree-view>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"slotted-content-code-example",children:"Slotted content code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-tree-view>\n  <ic-typography variant="subtitle-large" slot="heading">Menu</ic-typography>\n  <ic-tree-item>\n    <ic-typography slot="label">Coffee</ic-typography>\n  </ic-tree-item>\n  <ic-tree-item label="Tea"></ic-tree-item>\n  <ic-tree-item label="Hot chocolate"></ic-tree-item>\n</ic-tree-view>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"max-content",children:"Max content"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"An example with max content. When the heading/label exceeds the width of the container, it will text wrap unless truncate-tree-item is set."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Max content",children:lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu with nested options">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
            />
          </svg>
          <ic-tree-item label="Coffee">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
              />
            </svg>
            <ic-tree-item label="Americano"></ic-tree-item>
            <ic-tree-item
              label="Latte with extra milk and sugar"
            ></ic-tree-item>
            <ic-tree-item label="Espresso"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Tea">
            <ic-tree-item label="Earl Grey"></ic-tree-item>
            <ic-tree-item label="Chai"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Hot chocolate with marshmallows"></ic-tree-item>
        </ic-tree-view>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"max-content-code-example",children:"Max content code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-tree-view heading="Menu with nested options">\n  <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n    <path\n      d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n    />\n  </svg>\n  <ic-tree-item label="Coffee">\n    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n      <path\n        d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n      />\n    </svg>\n    <ic-tree-item label="Americano"></ic-tree-item>\n    <ic-tree-item label="Latte with extra milk and sugar"></ic-tree-item>\n    <ic-tree-item label="Espresso"></ic-tree-item>\n  </ic-tree-item>\n  <ic-tree-item label="Tea">\n    <ic-tree-item label="Earl Grey"></ic-tree-item>\n    <ic-tree-item label="Chai"></ic-tree-item>\n  </ic-tree-item>\n  <ic-tree-item label="Hot chocolate with marshmallows"></ic-tree-item>\n</ic-tree-view>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"truncation-behaviour",children:"Truncation behaviour"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"An example with truncated tree items. When the heading/label exceeds the width of the container, it will be truncated with an ellipsis."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Truncation behaviour",children:lit_html.qy`
      <div style="width:250px">
        <ic-tree-view
          heading="Menu with nested options"
          truncate-tree-items="true"
          truncate-heading="true"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
            />
          </svg>
          <ic-tree-item label="Coffee" expanded="true">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
              />
            </svg>
            <ic-tree-item label="Americano"></ic-tree-item>
            <ic-tree-item
              label="Latte with extra milk and sugar"
            ></ic-tree-item>
            <ic-tree-item label="Espresso"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Tea" expanded="true">
            <ic-tree-item label="Earl Grey"></ic-tree-item>
            <ic-tree-item
              label="Earl Grey with truncation false"
              truncate-tree-item="false"
            ></ic-tree-item>
            <ic-tree-item label="Chai"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Hot chocolate with marshmallows"></ic-tree-item>
        </ic-tree-view>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"truncation-behaviour-code-example",children:"Truncation behaviour code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-tree-view\n  heading="Menu with nested options"\n  truncate-tree-items="true"\n  truncate-heading="true"\n  >>\n  <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n    <path\n      d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n    />\n  </svg>\n  <ic-tree-item label="Coffee" expanded="true">\n    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n      <path\n        d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n      />\n    </svg>\n    <ic-tree-item label="Americano"></ic-tree-item>\n    <ic-tree-item label="Latte with extra milk and sugar"></ic-tree-item>\n    <ic-tree-item label="Espresso"></ic-tree-item>\n  </ic-tree-item>\n  <ic-tree-item label="Tea" expanded="true">\n    <ic-tree-item label="Earl Grey"></ic-tree-item>\n    <ic-tree-item\n      label="Earl Grey with truncation false"\n      truncate-tree-item="false"\n    ></ic-tree-item>\n    <ic-tree-item label="Chai"></ic-tree-item>\n  </ic-tree-item>\n  <ic-tree-item label="Hot chocolate with marshmallows"></ic-tree-item>\n</ic-tree-view>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"selected-tree-item",children:"Selected tree item"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["An example where the tree item with ",(0,jsx_runtime.jsx)(_components.code,{children:'selected="true"'})," is selected on initial render."]}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Selected tree item",children:lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu">
          <ic-tree-item label="Coffee"></ic-tree-item>
          <ic-tree-item label="Tea"></ic-tree-item>
          <ic-tree-item label="Hot chocolate" selected="true"></ic-tree-item>
        </ic-tree-view>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"selected-tree-item-code-example",children:"Selected tree item code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-tree-view heading="Menu">\n  <ic-tree-item label="Coffee"></ic-tree-item>\n  <ic-tree-item label="Tea"></ic-tree-item>\n  <ic-tree-item label="Hot chocolate" selected="true"></ic-tree-item>\n</ic-tree-view>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"link",children:"Link"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"An example where the tree item is rendered as a link."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Link",children:lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu">
          <ic-tree-item label="Coffee" href="#"></ic-tree-item>
          <ic-tree-item label="Tea" selected="true" href="#"></ic-tree-item>
          <ic-tree-item
            label="Hot chocolate"
            disabled="true"
            href="#"
          ></ic-tree-item>
        </ic-tree-view>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"link-code-example",children:"Link code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-tree-view heading="Menu">\n  <ic-tree-item label="Coffee" href="#"></ic-tree-item>\n  <ic-tree-item label="Tea" selected="true" href="#"></ic-tree-item>\n  <ic-tree-item label="Hot chocolate" disabled="true" href="#"></ic-tree-item>\n</ic-tree-view>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"expanded",children:"Expanded"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["An example with the ",(0,jsx_runtime.jsx)(_components.code,{children:"expanded"})," prop set to ",(0,jsx_runtime.jsx)(_components.code,{children:"true"})," on a parent tree item."]}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Expanded",children:lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu">
          <ic-tree-item label="Coffee" expanded="true">
            <ic-tree-item label="Americano" expanded="true">
              <ic-tree-item label="With milk"></ic-tree-item>
            </ic-tree-item>
            <ic-tree-item label="Latte"></ic-tree-item>
            <ic-tree-item label="Espresso"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Tea">
            <ic-tree-item label="Earl Grey"></ic-tree-item>
            <ic-tree-item label="Chai"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Hot chocolate"></ic-tree-item>
        </ic-tree-view>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"expanded-code-example",children:"Expanded code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-tree-view heading="Menu">\n  <ic-tree-item label="Coffee" expanded="true">\n    <ic-tree-item label="Americano" expanded="true">\n      <ic-tree-item label="With milk"></ic-tree-item>\n    </ic-tree-item>\n    <ic-tree-item label="Latte"></ic-tree-item>\n    <ic-tree-item label="Espresso"></ic-tree-item>\n  </ic-tree-item>\n  <ic-tree-item label="Tea">\n    <ic-tree-item label="Earl Grey"></ic-tree-item>\n    <ic-tree-item label="Chai"></ic-tree-item>\n  </ic-tree-item>\n  <ic-tree-item label="Hot chocolate"></ic-tree-item>\n</ic-tree-view>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"focus-inset",children:"Focus inset"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["An example with the tree item ",(0,jsx_runtime.jsx)(_components.code,{children:"focus-inset"})," prop set to ",(0,jsx_runtime.jsx)(_components.code,{children:"true"}),"."]}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Focus inset",children:lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu" focus-inset="true">
          <ic-tree-item label="Coffee">
            <ic-tree-item label="Americano">
              <ic-tree-item label="With milk"></ic-tree-item>
            </ic-tree-item>
            <ic-tree-item label="Latte"></ic-tree-item>
            <ic-tree-item label="Espresso"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Tea">
            <ic-tree-item label="Earl Grey"></ic-tree-item>
            <ic-tree-item label="Chai"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Hot chocolate"></ic-tree-item>
        </ic-tree-view>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"focus-inset-code-example",children:"Focus inset code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-tree-view heading="Menu">\n  <ic-tree-item label="Coffee">\n    <ic-tree-item label="Americano">\n      <ic-tree-item label="With milk"></ic-tree-item>\n    </ic-tree-item>\n    <ic-tree-item label="Latte"></ic-tree-item>\n    <ic-tree-item label="Espresso"></ic-tree-item>\n  </ic-tree-item>\n  <ic-tree-item label="Tea">\n    <ic-tree-item label="Earl Grey"></ic-tree-item>\n    <ic-tree-item label="Chai"></ic-tree-item>\n  </ic-tree-item>\n  <ic-tree-item label="Hot chocolate"></ic-tree-item>\n</ic-tree-view>\n'})})]})}const basic=()=>lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu">
          <ic-tree-item label="Coffee"></ic-tree-item>
          <ic-tree-item label="Tea"></ic-tree-item>
          <ic-tree-item label="Hot chocolate"></ic-tree-item>
        </ic-tree-view>
      </div>
    `;basic.storyName="Basic",basic.parameters={storySource:{source:'html`\n      <div style="width:250px">\n        <ic-tree-view heading="Menu">\n          <ic-tree-item label="Coffee"></ic-tree-item>\n          <ic-tree-item label="Tea"></ic-tree-item>\n          <ic-tree-item label="Hot chocolate"></ic-tree-item>\n        </ic-tree-view>\n      </div>\n    `'}};const nested=()=>lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu">
          <ic-tree-item label="Coffee">
            <ic-tree-item label="Americano">
              <ic-tree-item label="With milk"></ic-tree-item>
            </ic-tree-item>
            <ic-tree-item label="Latte"></ic-tree-item>
            <ic-tree-item label="Espresso"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Tea">
            <ic-tree-item label="Earl Grey"></ic-tree-item>
            <ic-tree-item label="Chai"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Hot chocolate"></ic-tree-item>
        </ic-tree-view>
      </div>
    `;nested.storyName="Nested",nested.parameters={storySource:{source:'html`\n      <div style="width:250px">\n        <ic-tree-view heading="Menu">\n          <ic-tree-item label="Coffee">\n            <ic-tree-item label="Americano">\n              <ic-tree-item label="With milk"></ic-tree-item>\n            </ic-tree-item>\n            <ic-tree-item label="Latte"></ic-tree-item>\n            <ic-tree-item label="Espresso"></ic-tree-item>\n          </ic-tree-item>\n          <ic-tree-item label="Tea">\n            <ic-tree-item label="Earl Grey"></ic-tree-item>\n            <ic-tree-item label="Chai"></ic-tree-item>\n          </ic-tree-item>\n          <ic-tree-item label="Hot chocolate"></ic-tree-item>\n        </ic-tree-view>\n      </div>\n    `'}};const withIcons=()=>lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
            />
          </svg>
          <ic-tree-item label="Coffee">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
              />
            </svg>
            <ic-tree-item label="Americano"></ic-tree-item>
            <ic-tree-item label="Latte">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
                />
              </svg>
            </ic-tree-item>
            <ic-tree-item label="Espresso"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Tea">
            <ic-tree-item label="Earl Grey"></ic-tree-item>
            <ic-tree-item label="Chai"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Hot chocolate"></ic-tree-item>
        </ic-tree-view>
      </div>
    `;withIcons.storyName="With icons",withIcons.parameters={storySource:{source:'html`\n      <div style="width:250px">\n        <ic-tree-view heading="Menu">\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n            />\n          </svg>\n          <ic-tree-item label="Coffee">\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              viewBox="0 0 24 24"\n            >\n              <path\n                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n              />\n            </svg>\n            <ic-tree-item label="Americano"></ic-tree-item>\n            <ic-tree-item label="Latte">\n              <svg\n                slot="icon"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 24 24"\n              >\n                <path\n                  d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n                />\n              </svg>\n            </ic-tree-item>\n            <ic-tree-item label="Espresso"></ic-tree-item>\n          </ic-tree-item>\n          <ic-tree-item label="Tea">\n            <ic-tree-item label="Earl Grey"></ic-tree-item>\n            <ic-tree-item label="Chai"></ic-tree-item>\n          </ic-tree-item>\n          <ic-tree-item label="Hot chocolate"></ic-tree-item>\n        </ic-tree-view>\n      </div>\n    `'}};const small=()=>lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu" size="small">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
            />
          </svg>
          <ic-tree-item label="Coffee">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
              />
            </svg>
            <ic-tree-item label="Americano"></ic-tree-item>
            <ic-tree-item label="Latte">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
                />
              </svg>
            </ic-tree-item>
            <ic-tree-item label="Espresso"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Tea">
            <ic-tree-item label="Earl Grey"></ic-tree-item>
            <ic-tree-item label="Chai"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Hot chocolate"></ic-tree-item>
        </ic-tree-view>
      </div>
    `;small.storyName="Small",small.parameters={storySource:{source:'html`\n      <div style="width:250px">\n        <ic-tree-view heading="Menu" size="small">\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n            />\n          </svg>\n          <ic-tree-item label="Coffee">\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              viewBox="0 0 24 24"\n            >\n              <path\n                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n              />\n            </svg>\n            <ic-tree-item label="Americano"></ic-tree-item>\n            <ic-tree-item label="Latte">\n              <svg\n                slot="icon"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 24 24"\n              >\n                <path\n                  d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n                />\n              </svg>\n            </ic-tree-item>\n            <ic-tree-item label="Espresso"></ic-tree-item>\n          </ic-tree-item>\n          <ic-tree-item label="Tea">\n            <ic-tree-item label="Earl Grey"></ic-tree-item>\n            <ic-tree-item label="Chai"></ic-tree-item>\n          </ic-tree-item>\n          <ic-tree-item label="Hot chocolate"></ic-tree-item>\n        </ic-tree-view>\n      </div>\n    `'}};const large=()=>lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu" size="large">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
            />
          </svg>
          <ic-tree-item label="Coffee">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
              />
            </svg>
            <ic-tree-item label="Americano"></ic-tree-item>
            <ic-tree-item label="Latte">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
                />
              </svg>
            </ic-tree-item>
            <ic-tree-item label="Espresso"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Tea">
            <ic-tree-item label="Earl Grey"></ic-tree-item>
            <ic-tree-item label="Chai"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Hot chocolate"></ic-tree-item>
        </ic-tree-view>
      </div>
    `;large.storyName="Large",large.parameters={storySource:{source:'html`\n      <div style="width:250px">\n        <ic-tree-view heading="Menu" size="large">\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n            />\n          </svg>\n          <ic-tree-item label="Coffee">\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              viewBox="0 0 24 24"\n            >\n              <path\n                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n              />\n            </svg>\n            <ic-tree-item label="Americano"></ic-tree-item>\n            <ic-tree-item label="Latte">\n              <svg\n                slot="icon"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 24 24"\n              >\n                <path\n                  d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n                />\n              </svg>\n            </ic-tree-item>\n            <ic-tree-item label="Espresso"></ic-tree-item>\n          </ic-tree-item>\n          <ic-tree-item label="Tea">\n            <ic-tree-item label="Earl Grey"></ic-tree-item>\n            <ic-tree-item label="Chai"></ic-tree-item>\n          </ic-tree-item>\n          <ic-tree-item label="Hot chocolate"></ic-tree-item>\n        </ic-tree-view>\n      </div>\n    `'}};const disabledTreeItems=()=>lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
            />
          </svg>
          <ic-tree-item label="Coffee">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
              />
            </svg>
            <ic-tree-item label="Americano"></ic-tree-item>
            <ic-tree-item label="Latte" disabled="true">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
                />
              </svg>
            </ic-tree-item>
            <ic-tree-item label="Espresso"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Tea">
            <ic-tree-item label="Earl Grey"></ic-tree-item>
            <ic-tree-item label="Chai" disabled="true"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Hot chocolate" disabled="true"></ic-tree-item>
        </ic-tree-view>
      </div>
    `;disabledTreeItems.storyName="Disabled tree items",disabledTreeItems.parameters={storySource:{source:'html`\n      <div style="width:250px">\n        <ic-tree-view heading="Menu">\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n            />\n          </svg>\n          <ic-tree-item label="Coffee">\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              viewBox="0 0 24 24"\n            >\n              <path\n                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n              />\n            </svg>\n            <ic-tree-item label="Americano"></ic-tree-item>\n            <ic-tree-item label="Latte" disabled="true">\n              <svg\n                slot="icon"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 24 24"\n              >\n                <path\n                  d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n                />\n              </svg>\n            </ic-tree-item>\n            <ic-tree-item label="Espresso"></ic-tree-item>\n          </ic-tree-item>\n          <ic-tree-item label="Tea">\n            <ic-tree-item label="Earl Grey"></ic-tree-item>\n            <ic-tree-item label="Chai" disabled="true"></ic-tree-item>\n          </ic-tree-item>\n          <ic-tree-item label="Hot chocolate" disabled="true"></ic-tree-item>\n        </ic-tree-view>\n      </div>\n    `'}};const routerItem=()=>lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu" truncate-tree-items="true">
          <ic-tree-item>
            <a slot="router-item" href="/"
              >Hot chocolate with marshmallows and whipped cream</a
            >
          </ic-tree-item>
          <ic-tree-item>
            <a slot="router-item" href="/tea">Tea</a>
          </ic-tree-item>
          <ic-tree-item label="Coffee"></ic-tree-item>
        </ic-tree-view>
      </div>
    `;routerItem.storyName="Router item",routerItem.parameters={storySource:{source:'html`\n      <div style="width:250px">\n        <ic-tree-view heading="Menu" truncate-tree-items="true">\n          <ic-tree-item>\n            <a slot="router-item" href="/"\n              >Hot chocolate with marshmallows and whipped cream</a\n            >\n          </ic-tree-item>\n          <ic-tree-item>\n            <a slot="router-item" href="/tea">Tea</a>\n          </ic-tree-item>\n          <ic-tree-item label="Coffee"></ic-tree-item>\n        </ic-tree-view>\n      </div>\n    `'}};const slottedContent=()=>lit_html.qy`
      <div style="width:250px">
        <ic-tree-view>
          <ic-typography variant="subtitle-large" slot="heading">Menu</ic-typography>
          <ic-tree-item>
            <ic-typography slot="label">Coffee<ic-typography>
          </ic-tree-item>
          <ic-tree-item label="Tea"></ic-tree-item>
          <ic-tree-item label="Hot chocolate"></ic-tree-item>
        </ic-tree-view>
      </div>
    `;slottedContent.storyName="Slotted content",slottedContent.parameters={storySource:{source:'html`\n      <div style="width:250px">\n        <ic-tree-view>\n          <ic-typography variant="subtitle-large" slot="heading">Menu</ic-typography>\n          <ic-tree-item>\n            <ic-typography slot="label">Coffee<ic-typography>\n          </ic-tree-item>\n          <ic-tree-item label="Tea"></ic-tree-item>\n          <ic-tree-item label="Hot chocolate"></ic-tree-item>\n        </ic-tree-view>\n      </div>\n    `'}};const maxContent=()=>lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu with nested options">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
            />
          </svg>
          <ic-tree-item label="Coffee">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
              />
            </svg>
            <ic-tree-item label="Americano"></ic-tree-item>
            <ic-tree-item
              label="Latte with extra milk and sugar"
            ></ic-tree-item>
            <ic-tree-item label="Espresso"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Tea">
            <ic-tree-item label="Earl Grey"></ic-tree-item>
            <ic-tree-item label="Chai"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Hot chocolate with marshmallows"></ic-tree-item>
        </ic-tree-view>
      </div>
    `;maxContent.storyName="Max content",maxContent.parameters={storySource:{source:'html`\n      <div style="width:250px">\n        <ic-tree-view heading="Menu with nested options">\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n            />\n          </svg>\n          <ic-tree-item label="Coffee">\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              viewBox="0 0 24 24"\n            >\n              <path\n                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n              />\n            </svg>\n            <ic-tree-item label="Americano"></ic-tree-item>\n            <ic-tree-item\n              label="Latte with extra milk and sugar"\n            ></ic-tree-item>\n            <ic-tree-item label="Espresso"></ic-tree-item>\n          </ic-tree-item>\n          <ic-tree-item label="Tea">\n            <ic-tree-item label="Earl Grey"></ic-tree-item>\n            <ic-tree-item label="Chai"></ic-tree-item>\n          </ic-tree-item>\n          <ic-tree-item label="Hot chocolate with marshmallows"></ic-tree-item>\n        </ic-tree-view>\n      </div>\n    `'}};const truncationBehaviour=()=>lit_html.qy`
      <div style="width:250px">
        <ic-tree-view
          heading="Menu with nested options"
          truncate-tree-items="true"
          truncate-heading="true"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
            />
          </svg>
          <ic-tree-item label="Coffee" expanded="true">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
              />
            </svg>
            <ic-tree-item label="Americano"></ic-tree-item>
            <ic-tree-item
              label="Latte with extra milk and sugar"
            ></ic-tree-item>
            <ic-tree-item label="Espresso"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Tea" expanded="true">
            <ic-tree-item label="Earl Grey"></ic-tree-item>
            <ic-tree-item
              label="Earl Grey with truncation false"
              truncate-tree-item="false"
            ></ic-tree-item>
            <ic-tree-item label="Chai"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Hot chocolate with marshmallows"></ic-tree-item>
        </ic-tree-view>
      </div>
    `;truncationBehaviour.storyName="Truncation behaviour",truncationBehaviour.parameters={storySource:{source:'html`\n      <div style="width:250px">\n        <ic-tree-view\n          heading="Menu with nested options"\n          truncate-tree-items="true"\n          truncate-heading="true"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n            />\n          </svg>\n          <ic-tree-item label="Coffee" expanded="true">\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              viewBox="0 0 24 24"\n            >\n              <path\n                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n              />\n            </svg>\n            <ic-tree-item label="Americano"></ic-tree-item>\n            <ic-tree-item\n              label="Latte with extra milk and sugar"\n            ></ic-tree-item>\n            <ic-tree-item label="Espresso"></ic-tree-item>\n          </ic-tree-item>\n          <ic-tree-item label="Tea" expanded="true">\n            <ic-tree-item label="Earl Grey"></ic-tree-item>\n            <ic-tree-item\n              label="Earl Grey with truncation false"\n              truncate-tree-item="false"\n            ></ic-tree-item>\n            <ic-tree-item label="Chai"></ic-tree-item>\n          </ic-tree-item>\n          <ic-tree-item label="Hot chocolate with marshmallows"></ic-tree-item>\n        </ic-tree-view>\n      </div>\n    `'}};const selectedTreeItem=()=>lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu">
          <ic-tree-item label="Coffee"></ic-tree-item>
          <ic-tree-item label="Tea"></ic-tree-item>
          <ic-tree-item label="Hot chocolate" selected="true"></ic-tree-item>
        </ic-tree-view>
      </div>
    `;selectedTreeItem.storyName="Selected tree item",selectedTreeItem.parameters={storySource:{source:'html`\n      <div style="width:250px">\n        <ic-tree-view heading="Menu">\n          <ic-tree-item label="Coffee"></ic-tree-item>\n          <ic-tree-item label="Tea"></ic-tree-item>\n          <ic-tree-item label="Hot chocolate" selected="true"></ic-tree-item>\n        </ic-tree-view>\n      </div>\n    `'}};const ic_tree_view_stories_link=()=>lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu">
          <ic-tree-item label="Coffee" href="#"></ic-tree-item>
          <ic-tree-item label="Tea" selected="true" href="#"></ic-tree-item>
          <ic-tree-item
            label="Hot chocolate"
            disabled="true"
            href="#"
          ></ic-tree-item>
        </ic-tree-view>
      </div>
    `;ic_tree_view_stories_link.storyName="Link",ic_tree_view_stories_link.parameters={storySource:{source:'html`\n      <div style="width:250px">\n        <ic-tree-view heading="Menu">\n          <ic-tree-item label="Coffee" href="#"></ic-tree-item>\n          <ic-tree-item label="Tea" selected="true" href="#"></ic-tree-item>\n          <ic-tree-item\n            label="Hot chocolate"\n            disabled="true"\n            href="#"\n          ></ic-tree-item>\n        </ic-tree-view>\n      </div>\n    `'}};const expanded=()=>lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu">
          <ic-tree-item label="Coffee" expanded="true">
            <ic-tree-item label="Americano" expanded="true">
              <ic-tree-item label="With milk"></ic-tree-item>
            </ic-tree-item>
            <ic-tree-item label="Latte"></ic-tree-item>
            <ic-tree-item label="Espresso"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Tea">
            <ic-tree-item label="Earl Grey"></ic-tree-item>
            <ic-tree-item label="Chai"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Hot chocolate"></ic-tree-item>
        </ic-tree-view>
      </div>
    `;expanded.storyName="Expanded",expanded.parameters={storySource:{source:'html`\n      <div style="width:250px">\n        <ic-tree-view heading="Menu">\n          <ic-tree-item label="Coffee" expanded="true">\n            <ic-tree-item label="Americano" expanded="true">\n              <ic-tree-item label="With milk"></ic-tree-item>\n            </ic-tree-item>\n            <ic-tree-item label="Latte"></ic-tree-item>\n            <ic-tree-item label="Espresso"></ic-tree-item>\n          </ic-tree-item>\n          <ic-tree-item label="Tea">\n            <ic-tree-item label="Earl Grey"></ic-tree-item>\n            <ic-tree-item label="Chai"></ic-tree-item>\n          </ic-tree-item>\n          <ic-tree-item label="Hot chocolate"></ic-tree-item>\n        </ic-tree-view>\n      </div>\n    `'}};const focusInset=()=>lit_html.qy`
      <div style="width:250px">
        <ic-tree-view heading="Menu" focus-inset="true">
          <ic-tree-item label="Coffee">
            <ic-tree-item label="Americano">
              <ic-tree-item label="With milk"></ic-tree-item>
            </ic-tree-item>
            <ic-tree-item label="Latte"></ic-tree-item>
            <ic-tree-item label="Espresso"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Tea">
            <ic-tree-item label="Earl Grey"></ic-tree-item>
            <ic-tree-item label="Chai"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Hot chocolate"></ic-tree-item>
        </ic-tree-view>
      </div>
    `;focusInset.storyName="Focus inset",focusInset.parameters={storySource:{source:'html`\n      <div style="width:250px">\n        <ic-tree-view heading="Menu" focus-inset="true">\n          <ic-tree-item label="Coffee">\n            <ic-tree-item label="Americano">\n              <ic-tree-item label="With milk"></ic-tree-item>\n            </ic-tree-item>\n            <ic-tree-item label="Latte"></ic-tree-item>\n            <ic-tree-item label="Espresso"></ic-tree-item>\n          </ic-tree-item>\n          <ic-tree-item label="Tea">\n            <ic-tree-item label="Earl Grey"></ic-tree-item>\n            <ic-tree-item label="Chai"></ic-tree-item>\n          </ic-tree-item>\n          <ic-tree-item label="Hot chocolate"></ic-tree-item>\n        </ic-tree-view>\n      </div>\n    `'}};const componentMeta={title:"Web Components/Tree view",parameters:{componentAPI:{data:readme_namespaceObject+ic_tree_item_readme_namespaceObject}},tags:["stories-mdx"],includeStories:["basic","nested","withIcons","small","large","disabledTreeItems","routerItem","slottedContent","maxContent","truncationBehaviour","selectedTreeItem","link","expanded","focusInset"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_tree_view_stories=componentMeta,__namedExportsOrder=["basic","nested","withIcons","small","large","disabledTreeItems","routerItem","slottedContent","maxContent","truncationBehaviour","selectedTreeItem","link","expanded","focusInset"]}}]);
//# sourceMappingURL=components-ic-tree-view-ic-tree-view-stories-mdx.9170fa48.iframe.bundle.js.map