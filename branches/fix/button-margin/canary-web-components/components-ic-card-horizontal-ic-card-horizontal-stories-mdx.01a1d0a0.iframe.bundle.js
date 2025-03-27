/*! For license information please see components-ic-card-horizontal-ic-card-horizontal-stories-mdx.01a1d0a0.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_canary_web_components=self.webpackChunk_ukic_canary_web_components||[]).push([[2211],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _t$litHtmlVersions;__webpack_require__.d(__webpack_exports__,{qy:()=>x});var t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h="lit$".concat(Math.random().toFixed(9).slice(2),"$"),o="?"+h,n="<".concat(o,">"),r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(">|".concat(d,"(?:([^\\s\"'>=/]+)(").concat(d,"*=").concat(d,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>function(i){for(var _len=arguments.length,s=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)s[_key-1]=arguments[_key];return{_$litType$:t,strings:i,values:s}},x=y(1),T=(y(2),y(3),Symbol.for("lit-noChange")),E=Symbol.for("lit-nothing"),A=new WeakMap,C=r.createTreeWalker(r,129);function P(t,i){if(!a(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}var V=(t,i)=>{for(var r,s=t.length-1,o=[],l=2===i?"<svg>":3===i?"<math>":"",c=f,_i=0;_i<s;_i++){for(var _s=t[_i],_a=void 0,_u=void 0,_d=-1,_y=0;_y<_s.length&&(c.lastIndex=_y,null!==(_u=c.exec(_s)));)_y=c.lastIndex,c===f?"!--"===_u[1]?c=v:void 0!==_u[1]?c=_:void 0!==_u[2]?($.test(_u[2])&&(r=RegExp("</"+_u[2],"g")),c=m):void 0!==_u[3]&&(c=m):c===m?">"===_u[0]?(c=null!=r?r:f,_d=-1):void 0===_u[1]?_d=-2:(_d=c.lastIndex-_u[2].length,_a=_u[1],c=void 0===_u[3]?m:'"'===_u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);var _x=c===m&&t[_i+1].startsWith("/>")?" ":"";l+=c===f?_s+n:_d>=0?(o.push(_a),_s.slice(0,_d)+e+_s.slice(_d)+h+_x):_s+h+(-2===_d?_i:_x)}return[P(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),o]};class N{constructor(_ref,n){var r,{strings:t,_$litType$:s}=_ref;this.parts=[];var c=0,a=0,u=t.length-1,d=this.parts,[f,v]=V(t,s);if(this.el=N.createElement(f,n),C.currentNode=this.el.content,2===s||3===s){var _t=this.el.content.firstChild;_t.replaceWith(..._t.childNodes)}for(;null!==(r=C.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(var _t2 of r.getAttributeNames())if(_t2.endsWith(e)){var _i2=v[a++],_s2=r.getAttribute(_t2).split(h),_e=/([.?@])?(.*)/.exec(_i2);d.push({type:1,index:c,name:_e[2],strings:_s2,ctor:"."===_e[1]?H:"?"===_e[1]?I:"@"===_e[1]?L:k}),r.removeAttribute(_t2)}else _t2.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(_t2));if($.test(r.tagName)){var _t3=r.textContent.split(h),_s3=_t3.length-1;if(_s3>0){r.textContent=i?i.emptyScript:"";for(var _i3=0;_i3<_s3;_i3++)r.append(_t3[_i3],l()),C.nextNode(),d.push({type:2,index:++c});r.append(_t3[_s3],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else for(var _t4=-1;-1!==(_t4=r.data.indexOf(h,_t4+1));)d.push({type:7,index:c}),_t4+=h.length-1;c++}}static createElement(t,i){var s=r.createElement("template");return s.innerHTML=t,s}}function S(t,i){var _s$_$Co,_h,_h2,_h2$_$AO,_s$_$Co2,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,e=arguments.length>3?arguments[3]:void 0;if(i===T)return i;var h=void 0!==e?null===(_s$_$Co=s._$Co)||void 0===_s$_$Co?void 0:_s$_$Co[e]:s._$Cl,o=c(i)?void 0:i._$litDirective$;return(null===(_h=h)||void 0===_h?void 0:_h.constructor)!==o&&(null!==(_h2=h)&&void 0!==_h2&&null!==(_h2$_$AO=_h2._$AO)&&void 0!==_h2$_$AO&&_h2$_$AO.call(_h2,!1),void 0===o?h=void 0:(h=new o(t))._$AT(t,s,e),void 0!==e?(null!==(_s$_$Co2=s._$Co)&&void 0!==_s$_$Co2?_s$_$Co2:s._$Co=[])[e]=h:s._$Cl=h),void 0!==h&&(i=S(t,h._$AS(t,i.values),h,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var _t$creationScope,{el:{content:i},parts:s}=this._$AD,e=(null!==(_t$creationScope=null==t?void 0:t.creationScope)&&void 0!==_t$creationScope?_t$creationScope:r).importNode(i,!0);C.currentNode=e;for(var h=C.nextNode(),o=0,n=0,l=s[0];void 0!==l;){var _l;if(o===l.index){var _i4=void 0;2===l.type?_i4=new R(h,h.nextSibling,this,t):1===l.type?_i4=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(_i4=new z(h,this,t)),this._$AV.push(_i4),l=s[++n]}o!==(null===(_l=l)||void 0===_l?void 0:_l.index)&&(h=C.nextNode(),o++)}return C.currentNode=r,e}p(t){var i=0;for(var _s4 of this._$AV)void 0!==_s4&&(void 0!==_s4.strings?(_s4._$AI(t,_s4,i),i+=_s4.strings.length-2):_s4._$AI(t[i])),i++}}class R{get _$AU(){var _this$_$AM$_$AU,_this$_$AM;return null!==(_this$_$AM$_$AU=null===(_this$_$AM=this._$AM)||void 0===_this$_$AM?void 0:_this$_$AM._$AU)&&void 0!==_this$_$AM$_$AU?_this$_$AM$_$AU:this._$Cv}constructor(t,i,s,e){var _e$isConnected;this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=null===(_e$isConnected=null==e?void 0:e.isConnected)||void 0===_e$isConnected||_e$isConnected}get parentNode(){var _t5,t=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===(null===(_t5=t)||void 0===_t5?void 0:_t5.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t){t=S(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),c(t)?t===E||null==t||""===t?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==E&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r.createTextNode(t)),this._$AH=t}$(t){var _this$_$AH,{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=N.createElement(P(s.h,s.h[0]),this.options)),s);if((null===(_this$_$AH=this._$AH)||void 0===_this$_$AH?void 0:_this$_$AH._$AD)===e)this._$AH.p(i);else{var _t6=new M(e,this),_s5=_t6.u(this.options);_t6.p(i),this.T(_s5),this._$AH=_t6}}_$AC(t){var i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new N(t)),i}k(t){a(this._$AH)||(this._$AH=[],this._$AR());var s,i=this._$AH,e=0;for(var _h3 of t)e===i.length?i.push(s=new R(this.O(l()),this.O(l()),this,this.options)):s=i[e],s._$AI(_h3),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,i=arguments.length>1?arguments[1]:void 0;for(null===(_this$_$AP=this._$AP)||void 0===_this$_$AP||_this$_$AP.call(this,!1,!0,i);t&&t!==this._$AB;){var _this$_$AP,_i5=t.nextSibling;t.remove(),t=_i5}}setConnected(t){var _this$_$AP2;void 0===this._$AM&&(this._$Cv=t,null===(_this$_$AP2=this._$AP)||void 0===_this$_$AP2||_this$_$AP2.call(this,t))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=E}_$AI(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,s=arguments.length>2?arguments[2]:void 0,e=arguments.length>3?arguments[3]:void 0,h=this.strings,o=!1;if(void 0===h)t=S(this,t,i,0),(o=!c(t)||t!==this._$AH&&t!==T)&&(this._$AH=t);else{var _n,_r,_e2=t;for(t=h[0],_n=0;_n<h.length-1;_n++)(_r=S(this,_e2[s+_n],i,_n))===T&&(_r=this._$AH[_n]),o||(o=!c(_r)||_r!==this._$AH[_n]),_r===E?t=E:t!==E&&(t+=(null!=_r?_r:"")+h[_n+1]),this._$AH[_n]=_r}o&&!e&&this.j(t)}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class H extends k{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===E?void 0:t}}class I extends k{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E)}}class L extends k{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t){var _S;if((t=null!==(_S=S(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==_S?_S:E)!==T){var s=this._$AH,e=t===E&&s!==E||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==E&&(s===E||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}}handleEvent(t){var _this$options$host,_this$options;"function"==typeof this._$AH?this._$AH.call(null!==(_this$options$host=null===(_this$options=this.options)||void 0===_this$options?void 0:_this$options.host)&&void 0!==_this$options$host?_this$options$host:this.element,t):this._$AH.handleEvent(t)}}class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}var j=t.litHtmlPolyfillSupport;null!=j&&j(N,R),(null!==(_t$litHtmlVersions=t.litHtmlVersions)&&void 0!==_t$litHtmlVersions?_t$litHtmlVersions:t.litHtmlVersions=[]).push("3.2.1")},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/ic-card-horizontal/ic-card-horizontal.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,clickable:()=>clickable,clickableHref:()=>clickableHref,customWidth:()=>customWidth,default:()=>ic_card_horizontal_stories,defaultStory:()=>defaultStory,disabled:()=>disabled,icon:()=>icon,image:()=>ic_card_horizontal_stories_image,message:()=>message,sizes:()=>sizes,slottedHeadingAndMessage:()=>slottedHeadingAndMessage,truncation:()=>truncation,wrappedByLink:()=>wrappedByLink});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-horizontal-card\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property         | Attribute        | Description                                                                                                                                                       | Type                                                                                                                                                                                     | Default     |\n| ---------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |\n| `clickable`      | `clickable`      | If `true`, the horizontal card will be a clickable variant, instead of static.                                                                                    | `boolean`                                                                                                                                                                                | `false`     |\n| `disabled`       | `disabled`       | If `true`, the horizontal card will be disabled if it is clickable.                                                                                               | `boolean`                                                                                                                                                                                | `false`     |\n| `heading`        | `heading`        | The heading for the horizontal card. This is required, unless a slotted heading is used.                                                                          | `string`                                                                                                                                                                                 | `undefined` |\n| `href`           | `href`           | The URL that the clickable horizontal card link points to. If set, the clickable horizontal card will render as an "a" tag, otherwise it will render as a button. | `string`                                                                                                                                                                                 | `undefined` |\n| `hreflang`       | `hreflang`       | The human language of the linked URL.                                                                                                                             | `string`                                                                                                                                                                                 | `""`        |\n| `message`        | `message`        | The main body message of the horizontal card.                                                                                                                     | `string`                                                                                                                                                                                 | `""`        |\n| `referrerpolicy` | `referrerpolicy` | How much of the referrer to send when following the link.                                                                                                         | `"" \\| "no-referrer" \\| "no-referrer-when-downgrade" \\| "origin" \\| "origin-when-cross-origin" \\| "same-origin" \\| "strict-origin" \\| "strict-origin-when-cross-origin" \\| "unsafe-url"` | `undefined` |\n| `rel`            | `rel`            | The relationship of the linked URL as space-separated link types.                                                                                                 | `string`                                                                                                                                                                                 | `undefined` |\n| `size`           | `size`           | The size of the horizontal card.                                                                                                                                  | `"extra-large" \\| "large" \\| "medium" \\| "small"`                                                                                                                                        | `"medium"`  |\n| `target`         | `target`         | The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).                                                               | `string`                                                                                                                                                                                 | `undefined` |\n| `theme`          | `theme`          | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.                           | `"dark" \\| "inherit" \\| "light"`                                                                                                                                                         | `"inherit"` |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on the card.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot        | Description                                                                        |\n| ----------- | ---------------------------------------------------------------------------------- |\n| `"badge"`   | Badge component overlaying the top right of the horizontal card.                   |\n| `"heading"` | Content will be placed at the top of the horizontal card to the right of the icon. |\n| `"icon"`    | Content will be placed to the left of the horizontal card heading.                 |\n| `"image"`   | Content will be placed to the left of all other content.                           |\n| `"message"` | Content will be placed in the main body of the horizontal card.                    |\n\n\n## CSS Custom Properties\n\n| Name                      | Description                  |\n| ------------------------- | ---------------------------- |\n| `--card-horizontal-width` | Width of the horizontal card |\n\n\n## Dependencies\n\n### Depends on\n\n- ic-typography\n\n### Graph\n```mermaid\ngraph TD;\n  ic-card-horizontal --\x3e ic-typography\n  style ic-card-horizontal fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",code:"code",h3:"h3",h4:"h4",pre:"pre"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Web Components/Horizontal Card",component:"Horizontal Card",parameters:{componentAPI:{data:readme_namespaceObject}}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"canary-horizontal-card",children:"[Canary]: Horizontal Card"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Use a horizontal card to display a message or content in a horizontal layout."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"There is one required prop for a horizontal card:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:["heading: ",(0,jsx_runtime.jsx)(_components.code,{children:"string"})]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Click the 'Component API' tab to view all the available props and events for horizontal card."}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["To use the horizontal card component, import ",(0,jsx_runtime.jsx)(_components.code,{children:"@ukic/canary-web-components"})," into your application."]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The default horizontal card, which only has a heading."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Default",children:lit_html.qy`<ic-card-horizontal heading="Card heading"></ic-card-horizontal>`})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"default-code-example",children:"Default code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-card-horizontal heading="Card heading"></ic-card-horizontal>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-message",children:"With message"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Add more information to the horizontal card by including a message."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Message",children:lit_html.qy`<ic-card-horizontal
      heading="Card heading"
      message="Card message"
    ></ic-card-horizontal>`})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"message-code-example",children:"Message code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-card-horizontal\n  heading="Card heading"\n  message="Card message"\n></ic-card-horizontal>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-icon",children:"With icon"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Add an icon to the horizontal card."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Icon",children:lit_html.qy`<ic-card-horizontal heading="Card heading" message="Card message">
      <svg
        slot="icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
        />
      </svg>
    </ic-card-horizontal>`})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"icon-code-example",children:"Icon code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-card-horizontal heading="Card heading" message="Card message">\n  <svg\n    slot="icon"\n    xmlns="http://www.w3.org/2000/svg"\n    height="24px"\n    viewBox="0 0 24 24"\n    width="24px"\n    fill="#000000"\n  >\n    <path d="M0 0h24v24H0V0z" fill="none" />\n    <path\n      d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n    />\n  </svg>\n</ic-card-horizontal>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"clickable",children:"Clickable"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Direct users to another page by making the horizontal card clickable."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Clickable",children:lit_html.qy`<ic-card-horizontal
      heading="Card heading"
      message="Card message"
      clickable="true"
    >
      <svg
        slot="icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
        />
      </svg>
    </ic-card-horizontal>`})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"clickable-code-example",children:"Clickable code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-card-horizontal\n  heading="Card heading"\n  message="Card message"\n  clickable="true"\n>\n  <svg\n    slot="icon"\n    xmlns="http://www.w3.org/2000/svg"\n    height="24px"\n    viewBox="0 0 24 24"\n    width="24px"\n    fill="#000000"\n  >\n    <path d="M0 0h24v24H0V0z" fill="none" />\n    <path\n      d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n    />\n  </svg>\n</ic-card-horizontal>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"clickable---href",children:"Clickable - href"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Direct users to another page by making the horizontal card clickable with an href."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Clickable - href",children:lit_html.qy`<ic-card-horizontal
      heading="Card heading"
      message="Card message"
      clickable="true"
      href="https://www.google.com"
    >
      <svg
        slot="icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
        />
      </svg>
    </ic-card-horizontal>`})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"clickable-href-code-example",children:"Clickable href code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-card-horizontal\n  heading="Card heading"\n  message="Card message"\n  clickable="true"\n  href="https://www.google.com"\n>\n  <svg\n    slot="icon"\n    xmlns="http://www.w3.org/2000/svg"\n    height="24px"\n    viewBox="0 0 24 24"\n    width="24px"\n    fill="#000000"\n  >\n    <path d="M0 0h24v24H0V0z" fill="none" />\n    <path\n      d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n    />\n  </svg>\n</ic-card-horizontal>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"wrapped-by-link",children:"Wrapped by link"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Another method of making horizontal card clickable is wrapping it in a link."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Wrapped by link",children:lit_html.qy`<a href="/">
      <ic-card-horizontal heading="Card heading" message="Card message">
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg> </ic-card-horizontal
    ></a>`})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"wrapped-by-link-code-example",children:"Wrapped by link code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<a href="/">\n  <ic-card-horizontal heading="Card heading" message="Card message">\n    <svg\n      slot="icon"\n      xmlns="http://www.w3.org/2000/svg"\n      height="24px"\n      viewBox="0 0 24 24"\n      width="24px"\n      fill="#000000"\n    >\n      <path d="M0 0h24v24H0V0z" fill="none" />\n      <path\n        d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n      />\n    </svg>\n  </ic-card-horizontal>\n</a>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-image",children:"With image"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Add an image to the horizontal card."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Image",children:lit_html.qy`<ic-card-horizontal heading="Card heading" message="Card message">
      <svg
        slot="icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
        />
      </svg>
      <svg
        slot="image"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
        <polygon fill="#c50022" points="-60 900 398 662 816 900" />
        <polygon fill="#a3001b" points="337 900 398 662 816 900" />
        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
        <polygon fill="#b80066" points="641 695 886 900 367 900" />
        <polygon fill="#960052" points="587 900 641 695 886 900" />
        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
        <polygon fill="#880088" points="943 900 1210 900 971 687" />
      </svg>
    </ic-card-horizontal>`})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"image-code-example",children:"Image code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-card-horizontal heading="Card heading" message="Card message">\n  <svg\n    slot="icon"\n    xmlns="http://www.w3.org/2000/svg"\n    height="24px"\n    viewBox="0 0 24 24"\n    width="24px"\n    fill="#000000"\n  >\n    <path d="M0 0h24v24H0V0z" fill="none" />\n    <path\n      d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n    />\n  </svg>\n  <svg\n    slot="image"\n    style="height:326px;width:326px;"\n    xmlns="http://www.w3.org/2000/svg"\n    viewBox="0 0 1600 900"\n  >\n    <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n    <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n    <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n    <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n    <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n    <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n    <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n    <polygon fill="#b80066" points="641 695 886 900 367 900" />\n    <polygon fill="#960052" points="587 900 641 695 886 900" />\n    <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n    <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n    <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n    <polygon fill="#880088" points="943 900 1210 900 971 687" />\n  </svg>\n</ic-card-horizontal>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"sizes",children:"Sizes"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The horizontal card can be displayed in different sizes."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Sizes",children:lit_html.qy`<div>
      <ic-card-horizontal
        heading="Card heading"
        message="This card is used for small bits of text."
        size="small"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
        <svg
          slot="image"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 900"
        >
          <rect fill="#ff7700" width="1600" height="1600" y="-350" />
          <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
          <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
          <polygon fill="#c50022" points="-60 900 398 662 816 900" />
          <polygon fill="#a3001b" points="337 900 398 662 816 900" />
          <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
          <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
          <polygon fill="#b80066" points="641 695 886 900 367 900" />
          <polygon fill="#960052" points="587 900 641 695 886 900" />
          <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
          <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
          <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
          <polygon fill="#880088" points="943 900 1210 900 971 687" />
        </svg>
      </ic-card-horizontal>
      <br />
      <ic-card-horizontal
        heading="Card heading"
        message="This card is used for small to medium bits of text. It's slightly bigger."
        size="medium"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
        <svg
          slot="image"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 900"
        >
          <rect fill="#ff7700" width="1600" height="1600" y="-350" />
          <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
          <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
          <polygon fill="#c50022" points="-60 900 398 662 816 900" />
          <polygon fill="#a3001b" points="337 900 398 662 816 900" />
          <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
          <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
          <polygon fill="#b80066" points="641 695 886 900 367 900" />
          <polygon fill="#960052" points="587 900 641 695 886 900" />
          <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
          <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
          <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
          <polygon fill="#880088" points="943 900 1210 900 971 687" />
        </svg>
      </ic-card-horizontal>
      <br />
      <ic-card-horizontal
        heading="Card heading"
        message="This card is used for medium to large bits of text. This will take up more space on the page."
        size="large"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
        <svg
          slot="image"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 900"
        >
          <rect fill="#ff7700" width="1600" height="1600" y="-350" />
          <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
          <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
          <polygon fill="#c50022" points="-60 900 398 662 816 900" />
          <polygon fill="#a3001b" points="337 900 398 662 816 900" />
          <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
          <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
          <polygon fill="#b80066" points="641 695 886 900 367 900" />
          <polygon fill="#960052" points="587 900 641 695 886 900" />
          <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
          <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
          <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
          <polygon fill="#880088" points="943 900 1210 900 971 687" />
        </svg>
      </ic-card-horizontal>
      <br />
      <ic-card-horizontal
        heading="Card heading"
        message="This card is used for large bits of text. It's the biggest card size option so will take up the most space on the application's page."
        size="extra-large"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
        <svg
          slot="image"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 900"
        >
          <rect fill="#ff7700" width="1600" height="1600" y="-350" />
          <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
          <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
          <polygon fill="#c50022" points="-60 900 398 662 816 900" />
          <polygon fill="#a3001b" points="337 900 398 662 816 900" />
          <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
          <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
          <polygon fill="#b80066" points="641 695 886 900 367 900" />
          <polygon fill="#960052" points="587 900 641 695 886 900" />
          <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
          <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
          <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
          <polygon fill="#880088" points="943 900 1210 900 971 687" />
        </svg>
      </ic-card-horizontal>
    </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"sizes-code-example",children:"Sizes code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<div>\n  <ic-card-horizontal\n    heading="Card heading"\n    message="This card is used for small bits of text."\n    size="small"\n  >\n    <svg\n      slot="icon"\n      xmlns="http://www.w3.org/2000/svg"\n      height="24px"\n      viewBox="0 0 24 24"\n      width="24px"\n      fill="#000000"\n    >\n      <path d="M0 0h24v24H0V0z" fill="none" />\n      <path\n        d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n      />\n    </svg>\n    <svg slot="image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900">\n      <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n      <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n      <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n      <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n      <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n      <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n      <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n      <polygon fill="#b80066" points="641 695 886 900 367 900" />\n      <polygon fill="#960052" points="587 900 641 695 886 900" />\n      <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n      <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n      <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n      <polygon fill="#880088" points="943 900 1210 900 971 687" />\n    </svg>\n  </ic-card-horizontal>\n  <br />\n  <ic-card-horizontal\n    heading="Card heading"\n    message="This card is used for small to medium bits of text. It\'s slightly bigger."\n    size="medium"\n  >\n    <svg\n      slot="icon"\n      xmlns="http://www.w3.org/2000/svg"\n      height="24px"\n      viewBox="0 0 24 24"\n      width="24px"\n      fill="#000000"\n    >\n      <path d="M0 0h24v24H0V0z" fill="none" />\n      <path\n        d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n      />\n    </svg>\n    <svg slot="image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900">\n      <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n      <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n      <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n      <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n      <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n      <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n      <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n      <polygon fill="#b80066" points="641 695 886 900 367 900" />\n      <polygon fill="#960052" points="587 900 641 695 886 900" />\n      <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n      <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n      <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n      <polygon fill="#880088" points="943 900 1210 900 971 687" />\n    </svg>\n  </ic-card-horizontal>\n  <br />\n  <ic-card-horizontal\n    heading="Card heading"\n    message="This card is used for medium to large bits of text. This will take up more space on the page."\n    size="large"\n  >\n    <svg\n      slot="icon"\n      xmlns="http://www.w3.org/2000/svg"\n      height="24px"\n      viewBox="0 0 24 24"\n      width="24px"\n      fill="#000000"\n    >\n      <path d="M0 0h24v24H0V0z" fill="none" />\n      <path\n        d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n      />\n    </svg>\n    <svg slot="image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900">\n      <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n      <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n      <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n      <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n      <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n      <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n      <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n      <polygon fill="#b80066" points="641 695 886 900 367 900" />\n      <polygon fill="#960052" points="587 900 641 695 886 900" />\n      <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n      <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n      <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n      <polygon fill="#880088" points="943 900 1210 900 971 687" />\n    </svg>\n  </ic-card-horizontal>\n  <br />\n  <ic-card-horizontal\n    heading="Card heading"\n    message="This card is used for large bits of text. It\'s the biggest card size option so will take up the most space on the application\'s page."\n    size="extra-large"\n  >\n    <svg\n      slot="icon"\n      xmlns="http://www.w3.org/2000/svg"\n      height="24px"\n      viewBox="0 0 24 24"\n      width="24px"\n      fill="#000000"\n    >\n      <path d="M0 0h24v24H0V0z" fill="none" />\n      <path\n        d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n      />\n    </svg>\n    <svg slot="image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900">\n      <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n      <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n      <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n      <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n      <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n      <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n      <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n      <polygon fill="#b80066" points="641 695 886 900 367 900" />\n      <polygon fill="#960052" points="587 900 641 695 886 900" />\n      <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n      <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n      <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n      <polygon fill="#880088" points="943 900 1210 900 971 687" />\n    </svg>\n  </ic-card-horizontal>\n</div>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"truncation",children:"Truncation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"When there is too much text content for the horizontal card, the heading and message with truncate."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Truncation",children:lit_html.qy`<div>
      <ic-card-horizontal
        heading="Really long card heading to show truncation"
        message="This card is used for small bits of text. More text has been added to show truncation."
        size="small"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
        <svg
          slot="image"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 900"
        >
          <rect fill="#ff7700" width="1600" height="1600" y="-350" />
          <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
          <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
          <polygon fill="#c50022" points="-60 900 398 662 816 900" />
          <polygon fill="#a3001b" points="337 900 398 662 816 900" />
          <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
          <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
          <polygon fill="#b80066" points="641 695 886 900 367 900" />
          <polygon fill="#960052" points="587 900 641 695 886 900" />
          <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
          <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
          <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
          <polygon fill="#880088" points="943 900 1210 900 971 687" />
        </svg>
      </ic-card-horizontal>
      <br />
      <ic-card-horizontal
        heading="Really long card heading to show truncation"
        message="This card is used for small to medium bits of text. It's slightly bigger. More text has been added to show truncation."
        size="medium"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
        <svg
          slot="image"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 900"
        >
          <rect fill="#ff7700" width="1600" height="1600" y="-350" />
          <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
          <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
          <polygon fill="#c50022" points="-60 900 398 662 816 900" />
          <polygon fill="#a3001b" points="337 900 398 662 816 900" />
          <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
          <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
          <polygon fill="#b80066" points="641 695 886 900 367 900" />
          <polygon fill="#960052" points="587 900 641 695 886 900" />
          <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
          <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
          <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
          <polygon fill="#880088" points="943 900 1210 900 971 687" />
        </svg>
      </ic-card-horizontal>
      <br />
      <ic-card-horizontal
        heading="Really long card heading to show truncation in the large size variant"
        message="This card is used for medium to large bits of text. This will take up more space on the page. More text has been added to show truncation. The large card can hold 3 lines of text before it gets cut off, displaying an ellipsis instead of all the text."
        size="large"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
        <svg
          slot="image"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 900"
        >
          <rect fill="#ff7700" width="1600" height="1600" y="-350" />
          <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
          <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
          <polygon fill="#c50022" points="-60 900 398 662 816 900" />
          <polygon fill="#a3001b" points="337 900 398 662 816 900" />
          <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
          <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
          <polygon fill="#b80066" points="641 695 886 900 367 900" />
          <polygon fill="#960052" points="587 900 641 695 886 900" />
          <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
          <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
          <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
          <polygon fill="#880088" points="943 900 1210 900 971 687" />
        </svg>
      </ic-card-horizontal>
      <br />
      <ic-card-horizontal
        heading="Really long card heading to show truncation in the extra large size variant of horizontal cards"
        message="This card is used for large bits of text. It's the biggest card size option so will take up the most space on the application's page. More text has been added to show truncation. The extra large card can hold 5 lines of text before it gets cut off, displaying an ellipsis instead of all the text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra scelerisque arcu, vitae semper nisl rhoncusut. Vestibulum molestie enim at sollicitudin pellentesque. Proin sit amet augue sit amet dui suscipit lobortis. Nullam at consectetur ante. Suspendisse mollis ultricies porttitor. Nunc laoreet leo tortor, ut tristique odio finibus a."
        size="extra-large"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
        <svg
          slot="image"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 900"
        >
          <rect fill="#ff7700" width="1600" height="1600" y="-350" />
          <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
          <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
          <polygon fill="#c50022" points="-60 900 398 662 816 900" />
          <polygon fill="#a3001b" points="337 900 398 662 816 900" />
          <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
          <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
          <polygon fill="#b80066" points="641 695 886 900 367 900" />
          <polygon fill="#960052" points="587 900 641 695 886 900" />
          <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
          <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
          <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
          <polygon fill="#880088" points="943 900 1210 900 971 687" />
        </svg>
      </ic-card-horizontal>
    </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"truncation-code-example",children:"Truncation code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<div>\n  <ic-card-horizontal\n    heading="Really long card heading to show truncation"\n    message="This card is used for small bits of text. More text has been added to show truncation."\n    size="small"\n  >\n    <svg\n      slot="icon"\n      xmlns="http://www.w3.org/2000/svg"\n      height="24px"\n      viewBox="0 0 24 24"\n      width="24px"\n      fill="#000000"\n    >\n      <path d="M0 0h24v24H0V0z" fill="none" />\n      <path\n        d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n      />\n    </svg>\n    <svg slot="image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900">\n      <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n      <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n      <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n      <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n      <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n      <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n      <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n      <polygon fill="#b80066" points="641 695 886 900 367 900" />\n      <polygon fill="#960052" points="587 900 641 695 886 900" />\n      <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n      <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n      <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n      <polygon fill="#880088" points="943 900 1210 900 971 687" />\n    </svg>\n  </ic-card-horizontal>\n  <br />\n  <ic-card-horizontal\n    heading="Really long card heading to show truncation"\n    message="This card is used for small to medium bits of text. It\'s slightly bigger. More text has been added to show truncation."\n    size="medium"\n  >\n    <svg\n      slot="icon"\n      xmlns="http://www.w3.org/2000/svg"\n      height="24px"\n      viewBox="0 0 24 24"\n      width="24px"\n      fill="#000000"\n    >\n      <path d="M0 0h24v24H0V0z" fill="none" />\n      <path\n        d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n      />\n    </svg>\n    <svg slot="image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900">\n      <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n      <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n      <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n      <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n      <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n      <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n      <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n      <polygon fill="#b80066" points="641 695 886 900 367 900" />\n      <polygon fill="#960052" points="587 900 641 695 886 900" />\n      <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n      <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n      <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n      <polygon fill="#880088" points="943 900 1210 900 971 687" />\n    </svg>\n  </ic-card-horizontal>\n  <br />\n  <ic-card-horizontal\n    heading="Really long card heading to show truncation in the large size variant"\n    message="This card is used for medium to large bits of text. This will take up more space on the page. More text has been added to show truncation. The large card can hold 3 lines of text before it gets cut off, displaying an ellipsis instead of all the text."\n    size="large"\n  >\n    <svg\n      slot="icon"\n      xmlns="http://www.w3.org/2000/svg"\n      height="24px"\n      viewBox="0 0 24 24"\n      width="24px"\n      fill="#000000"\n    >\n      <path d="M0 0h24v24H0V0z" fill="none" />\n      <path\n        d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n      />\n    </svg>\n    <svg slot="image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900">\n      <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n      <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n      <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n      <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n      <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n      <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n      <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n      <polygon fill="#b80066" points="641 695 886 900 367 900" />\n      <polygon fill="#960052" points="587 900 641 695 886 900" />\n      <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n      <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n      <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n      <polygon fill="#880088" points="943 900 1210 900 971 687" />\n    </svg>\n  </ic-card-horizontal>\n  <br />\n  <ic-card-horizontal\n    heading="Really long card heading to show truncation in the extra large size variant of horizontal cards"\n    message="This card is used for large bits of text. It\'s the biggest card size option so will take up the most space on the application\'s page. More text has been added to show truncation. The extra large card can hold 5 lines of text before it gets cut off, displaying an ellipsis instead of all the text."\n    size="extra-large"\n  >\n    <svg\n      slot="icon"\n      xmlns="http://www.w3.org/2000/svg"\n      height="24px"\n      viewBox="0 0 24 24"\n      width="24px"\n      fill="#000000"\n    >\n      <path d="M0 0h24v24H0V0z" fill="none" />\n      <path\n        d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n      />\n    </svg>\n    <svg slot="image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900">\n      <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n      <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n      <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n      <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n      <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n      <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n      <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n      <polygon fill="#b80066" points="641 695 886 900 367 900" />\n      <polygon fill="#960052" points="587 900 641 695 886 900" />\n      <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n      <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n      <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n      <polygon fill="#880088" points="943 900 1210 900 971 687" />\n    </svg>\n  </ic-card-horizontal>\n</div>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Disable the horizontal card to prevent users from interacting with it."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Disabled",children:lit_html.qy`<ic-card-horizontal
      heading="Card heading"
      message="Card message"
      clickable="true"
      disabled="true"
    >
      <svg
        slot="icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
        />
      </svg>
      <svg
        slot="image"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
        <polygon fill="#c50022" points="-60 900 398 662 816 900" />
        <polygon fill="#a3001b" points="337 900 398 662 816 900" />
        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
        <polygon fill="#b80066" points="641 695 886 900 367 900" />
        <polygon fill="#960052" points="587 900 641 695 886 900" />
        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
        <polygon fill="#880088" points="943 900 1210 900 971 687" />
      </svg>
    </ic-card-horizontal>`})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"disabled-code-example",children:"Disabled code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-card-horizontal\n  heading="Card heading"\n  message="Card message"\n  clickable="true"\n  disabled="true"\n>\n  <svg\n    slot="icon"\n    xmlns="http://www.w3.org/2000/svg"\n    height="24px"\n    viewBox="0 0 24 24"\n    width="24px"\n    fill="#000000"\n  >\n    <path d="M0 0h24v24H0V0z" fill="none" />\n    <path\n      d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n    />\n  </svg>\n  <svg slot="image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900">\n    <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n    <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n    <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n    <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n    <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n    <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n    <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n    <polygon fill="#b80066" points="641 695 886 900 367 900" />\n    <polygon fill="#960052" points="587 900 641 695 886 900" />\n    <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n    <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n    <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n    <polygon fill="#880088" points="943 900 1210 900 971 687" />\n  </svg>\n</ic-card-horizontal>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"slotted-heading-and-message",children:"Slotted heading and message"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Add an icon to the horizontal card."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Slotted heading and message",children:lit_html.qy`<ic-card-horizontal>
      <h4 slot="heading">Card heading</h4>
      <p slot="message">Card message</p>
      <svg
        slot="icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
        />
      </svg>
    </ic-card-horizontal>`})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"slotted-heading-and-message-code-example",children:"Slotted heading and message code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-card-horizontal>\n  <h4 slot="heading">Card heading</h4>\n  <p slot="message">Card message</p>\n  <svg\n    slot="icon"\n    xmlns="http://www.w3.org/2000/svg"\n    height="24px"\n    viewBox="0 0 24 24"\n    width="24px"\n    fill="#000000"\n  >\n    <path d="M0 0h24v24H0V0z" fill="none" />\n    <path\n      d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n    />\n  </svg>\n</ic-card-horizontal>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"custom-width",children:"Custom width"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Set the width of the horizontal card by using the ",(0,jsx_runtime.jsx)(_components.code,{children:"--card-horizontal-width"})," CSS custom property. The horizontal card will grow, but not exceed its maximum supported width."]}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Custom width",children:lit_html.qy`<ic-card-horizontal
      heading="Card heading"
      message="Card message"
      style="--card-horizontal-width: 400px"
    >
      <svg
        slot="icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
        />
      </svg>
      <svg
        slot="image"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
        <polygon fill="#c50022" points="-60 900 398 662 816 900" />
        <polygon fill="#a3001b" points="337 900 398 662 816 900" />
        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
        <polygon fill="#b80066" points="641 695 886 900 367 900" />
        <polygon fill="#960052" points="587 900 641 695 886 900" />
        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
        <polygon fill="#880088" points="943 900 1210 900 971 687" />
      </svg>
    </ic-card-horizontal>`})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"custom-width-code-example",children:"Custom width code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-card-horizontal\n  heading="Card heading"\n  message="Card message"\n  style="--card-horizontal-width: 400px"\n>\n  <svg\n    slot="icon"\n    xmlns="http://www.w3.org/2000/svg"\n    height="24px"\n    viewBox="0 0 24 24"\n    width="24px"\n    fill="#000000"\n  >\n    <path d="M0 0h24v24H0V0z" fill="none" />\n    <path\n      d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n    />\n  </svg>\n  <svg slot="image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900">\n    <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n    <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n    <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n    <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n    <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n    <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n    <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n    <polygon fill="#b80066" points="641 695 886 900 367 900" />\n    <polygon fill="#960052" points="587 900 641 695 886 900" />\n    <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n    <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n    <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n    <polygon fill="#880088" points="943 900 1210 900 971 687" />\n  </svg>\n</ic-card-horizontal>\n'})})]})}const defaultStory=()=>lit_html.qy`<ic-card-horizontal heading="Card heading"></ic-card-horizontal>`;defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'html`<ic-card-horizontal heading="Card heading"></ic-card-horizontal>`'}};const message=()=>lit_html.qy`<ic-card-horizontal
      heading="Card heading"
      message="Card message"
    ></ic-card-horizontal>`;message.storyName="Message",message.parameters={storySource:{source:'html`<ic-card-horizontal\n      heading="Card heading"\n      message="Card message"\n    ></ic-card-horizontal>`'}};const icon=()=>lit_html.qy`<ic-card-horizontal heading="Card heading" message="Card message">
      <svg
        slot="icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
        />
      </svg>
    </ic-card-horizontal>`;icon.storyName="Icon",icon.parameters={storySource:{source:'html`<ic-card-horizontal heading="Card heading" message="Card message">\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n    </ic-card-horizontal>`'}};const clickable=()=>lit_html.qy`<ic-card-horizontal
      heading="Card heading"
      message="Card message"
      clickable="true"
    >
      <svg
        slot="icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
        />
      </svg>
    </ic-card-horizontal>`;clickable.storyName="Clickable",clickable.parameters={storySource:{source:'html`<ic-card-horizontal\n      heading="Card heading"\n      message="Card message"\n      clickable="true"\n    >\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n    </ic-card-horizontal>`'}};const clickableHref=()=>lit_html.qy`<ic-card-horizontal
      heading="Card heading"
      message="Card message"
      clickable="true"
      href="https://www.google.com"
    >
      <svg
        slot="icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
        />
      </svg>
    </ic-card-horizontal>`;clickableHref.storyName="Clickable - href",clickableHref.parameters={storySource:{source:'html`<ic-card-horizontal\n      heading="Card heading"\n      message="Card message"\n      clickable="true"\n      href="https://www.google.com"\n    >\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n    </ic-card-horizontal>`'}};const wrappedByLink=()=>lit_html.qy`<a href="/">
      <ic-card-horizontal heading="Card heading" message="Card message">
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg> </ic-card-horizontal
    ></a>`;wrappedByLink.storyName="Wrapped by link",wrappedByLink.parameters={storySource:{source:'html`<a href="/">\n      <ic-card-horizontal heading="Card heading" message="Card message">\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg> </ic-card-horizontal\n    ></a>`'}};const ic_card_horizontal_stories_image=()=>lit_html.qy`<ic-card-horizontal heading="Card heading" message="Card message">
      <svg
        slot="icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
        />
      </svg>
      <svg
        slot="image"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
        <polygon fill="#c50022" points="-60 900 398 662 816 900" />
        <polygon fill="#a3001b" points="337 900 398 662 816 900" />
        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
        <polygon fill="#b80066" points="641 695 886 900 367 900" />
        <polygon fill="#960052" points="587 900 641 695 886 900" />
        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
        <polygon fill="#880088" points="943 900 1210 900 971 687" />
      </svg>
    </ic-card-horizontal>`;ic_card_horizontal_stories_image.storyName="Image",ic_card_horizontal_stories_image.parameters={storySource:{source:'html`<ic-card-horizontal heading="Card heading" message="Card message">\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n      <svg\n        slot="image"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 1600 900"\n      >\n        <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n        <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n        <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n        <polygon fill="#b80066" points="641 695 886 900 367 900" />\n        <polygon fill="#960052" points="587 900 641 695 886 900" />\n        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n        <polygon fill="#880088" points="943 900 1210 900 971 687" />\n      </svg>\n    </ic-card-horizontal>`'}};const sizes=()=>lit_html.qy`<div>
      <ic-card-horizontal
        heading="Card heading"
        message="This card is used for small bits of text."
        size="small"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
        <svg
          slot="image"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 900"
        >
          <rect fill="#ff7700" width="1600" height="1600" y="-350" />
          <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
          <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
          <polygon fill="#c50022" points="-60 900 398 662 816 900" />
          <polygon fill="#a3001b" points="337 900 398 662 816 900" />
          <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
          <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
          <polygon fill="#b80066" points="641 695 886 900 367 900" />
          <polygon fill="#960052" points="587 900 641 695 886 900" />
          <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
          <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
          <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
          <polygon fill="#880088" points="943 900 1210 900 971 687" />
        </svg>
      </ic-card-horizontal>
      <br />
      <ic-card-horizontal
        heading="Card heading"
        message="This card is used for small to medium bits of text. It's slightly bigger."
        size="medium"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
        <svg
          slot="image"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 900"
        >
          <rect fill="#ff7700" width="1600" height="1600" y="-350" />
          <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
          <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
          <polygon fill="#c50022" points="-60 900 398 662 816 900" />
          <polygon fill="#a3001b" points="337 900 398 662 816 900" />
          <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
          <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
          <polygon fill="#b80066" points="641 695 886 900 367 900" />
          <polygon fill="#960052" points="587 900 641 695 886 900" />
          <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
          <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
          <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
          <polygon fill="#880088" points="943 900 1210 900 971 687" />
        </svg>
      </ic-card-horizontal>
      <br />
      <ic-card-horizontal
        heading="Card heading"
        message="This card is used for medium to large bits of text. This will take up more space on the page."
        size="large"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
        <svg
          slot="image"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 900"
        >
          <rect fill="#ff7700" width="1600" height="1600" y="-350" />
          <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
          <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
          <polygon fill="#c50022" points="-60 900 398 662 816 900" />
          <polygon fill="#a3001b" points="337 900 398 662 816 900" />
          <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
          <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
          <polygon fill="#b80066" points="641 695 886 900 367 900" />
          <polygon fill="#960052" points="587 900 641 695 886 900" />
          <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
          <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
          <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
          <polygon fill="#880088" points="943 900 1210 900 971 687" />
        </svg>
      </ic-card-horizontal>
      <br />
      <ic-card-horizontal
        heading="Card heading"
        message="This card is used for large bits of text. It's the biggest card size option so will take up the most space on the application's page."
        size="extra-large"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
        <svg
          slot="image"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 900"
        >
          <rect fill="#ff7700" width="1600" height="1600" y="-350" />
          <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
          <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
          <polygon fill="#c50022" points="-60 900 398 662 816 900" />
          <polygon fill="#a3001b" points="337 900 398 662 816 900" />
          <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
          <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
          <polygon fill="#b80066" points="641 695 886 900 367 900" />
          <polygon fill="#960052" points="587 900 641 695 886 900" />
          <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
          <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
          <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
          <polygon fill="#880088" points="943 900 1210 900 971 687" />
        </svg>
      </ic-card-horizontal>
    </div>`;sizes.storyName="Sizes",sizes.parameters={storySource:{source:'html`<div>\n      <ic-card-horizontal\n        heading="Card heading"\n        message="This card is used for small bits of text."\n        size="small"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n        <svg\n          slot="image"\n          xmlns="http://www.w3.org/2000/svg"\n          viewBox="0 0 1600 900"\n        >\n          <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n          <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n          <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n          <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n          <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n          <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n          <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n          <polygon fill="#b80066" points="641 695 886 900 367 900" />\n          <polygon fill="#960052" points="587 900 641 695 886 900" />\n          <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n          <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n          <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n          <polygon fill="#880088" points="943 900 1210 900 971 687" />\n        </svg>\n      </ic-card-horizontal>\n      <br />\n      <ic-card-horizontal\n        heading="Card heading"\n        message="This card is used for small to medium bits of text. It\'s slightly bigger."\n        size="medium"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n        <svg\n          slot="image"\n          xmlns="http://www.w3.org/2000/svg"\n          viewBox="0 0 1600 900"\n        >\n          <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n          <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n          <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n          <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n          <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n          <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n          <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n          <polygon fill="#b80066" points="641 695 886 900 367 900" />\n          <polygon fill="#960052" points="587 900 641 695 886 900" />\n          <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n          <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n          <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n          <polygon fill="#880088" points="943 900 1210 900 971 687" />\n        </svg>\n      </ic-card-horizontal>\n      <br />\n      <ic-card-horizontal\n        heading="Card heading"\n        message="This card is used for medium to large bits of text. This will take up more space on the page."\n        size="large"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n        <svg\n          slot="image"\n          xmlns="http://www.w3.org/2000/svg"\n          viewBox="0 0 1600 900"\n        >\n          <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n          <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n          <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n          <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n          <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n          <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n          <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n          <polygon fill="#b80066" points="641 695 886 900 367 900" />\n          <polygon fill="#960052" points="587 900 641 695 886 900" />\n          <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n          <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n          <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n          <polygon fill="#880088" points="943 900 1210 900 971 687" />\n        </svg>\n      </ic-card-horizontal>\n      <br />\n      <ic-card-horizontal\n        heading="Card heading"\n        message="This card is used for large bits of text. It\'s the biggest card size option so will take up the most space on the application\'s page."\n        size="extra-large"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n        <svg\n          slot="image"\n          xmlns="http://www.w3.org/2000/svg"\n          viewBox="0 0 1600 900"\n        >\n          <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n          <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n          <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n          <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n          <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n          <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n          <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n          <polygon fill="#b80066" points="641 695 886 900 367 900" />\n          <polygon fill="#960052" points="587 900 641 695 886 900" />\n          <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n          <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n          <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n          <polygon fill="#880088" points="943 900 1210 900 971 687" />\n        </svg>\n      </ic-card-horizontal>\n    </div>`'}};const truncation=()=>lit_html.qy`<div>
      <ic-card-horizontal
        heading="Really long card heading to show truncation"
        message="This card is used for small bits of text. More text has been added to show truncation."
        size="small"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
        <svg
          slot="image"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 900"
        >
          <rect fill="#ff7700" width="1600" height="1600" y="-350" />
          <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
          <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
          <polygon fill="#c50022" points="-60 900 398 662 816 900" />
          <polygon fill="#a3001b" points="337 900 398 662 816 900" />
          <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
          <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
          <polygon fill="#b80066" points="641 695 886 900 367 900" />
          <polygon fill="#960052" points="587 900 641 695 886 900" />
          <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
          <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
          <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
          <polygon fill="#880088" points="943 900 1210 900 971 687" />
        </svg>
      </ic-card-horizontal>
      <br />
      <ic-card-horizontal
        heading="Really long card heading to show truncation"
        message="This card is used for small to medium bits of text. It's slightly bigger. More text has been added to show truncation."
        size="medium"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
        <svg
          slot="image"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 900"
        >
          <rect fill="#ff7700" width="1600" height="1600" y="-350" />
          <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
          <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
          <polygon fill="#c50022" points="-60 900 398 662 816 900" />
          <polygon fill="#a3001b" points="337 900 398 662 816 900" />
          <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
          <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
          <polygon fill="#b80066" points="641 695 886 900 367 900" />
          <polygon fill="#960052" points="587 900 641 695 886 900" />
          <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
          <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
          <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
          <polygon fill="#880088" points="943 900 1210 900 971 687" />
        </svg>
      </ic-card-horizontal>
      <br />
      <ic-card-horizontal
        heading="Really long card heading to show truncation in the large size variant"
        message="This card is used for medium to large bits of text. This will take up more space on the page. More text has been added to show truncation. The large card can hold 3 lines of text before it gets cut off, displaying an ellipsis instead of all the text."
        size="large"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
        <svg
          slot="image"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 900"
        >
          <rect fill="#ff7700" width="1600" height="1600" y="-350" />
          <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
          <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
          <polygon fill="#c50022" points="-60 900 398 662 816 900" />
          <polygon fill="#a3001b" points="337 900 398 662 816 900" />
          <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
          <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
          <polygon fill="#b80066" points="641 695 886 900 367 900" />
          <polygon fill="#960052" points="587 900 641 695 886 900" />
          <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
          <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
          <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
          <polygon fill="#880088" points="943 900 1210 900 971 687" />
        </svg>
      </ic-card-horizontal>
      <br />
      <ic-card-horizontal
        heading="Really long card heading to show truncation in the extra large size variant of horizontal cards"
        message="This card is used for large bits of text. It's the biggest card size option so will take up the most space on the application's page. More text has been added to show truncation. The extra large card can hold 5 lines of text before it gets cut off, displaying an ellipsis instead of all the text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra scelerisque arcu, vitae semper nisl rhoncusut. Vestibulum molestie enim at sollicitudin pellentesque. Proin sit amet augue sit amet dui suscipit lobortis. Nullam at consectetur ante. Suspendisse mollis ultricies porttitor. Nunc laoreet leo tortor, ut tristique odio finibus a."
        size="extra-large"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
        <svg
          slot="image"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 900"
        >
          <rect fill="#ff7700" width="1600" height="1600" y="-350" />
          <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
          <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
          <polygon fill="#c50022" points="-60 900 398 662 816 900" />
          <polygon fill="#a3001b" points="337 900 398 662 816 900" />
          <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
          <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
          <polygon fill="#b80066" points="641 695 886 900 367 900" />
          <polygon fill="#960052" points="587 900 641 695 886 900" />
          <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
          <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
          <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
          <polygon fill="#880088" points="943 900 1210 900 971 687" />
        </svg>
      </ic-card-horizontal>
    </div>`;truncation.storyName="Truncation",truncation.parameters={storySource:{source:'html`<div>\n      <ic-card-horizontal\n        heading="Really long card heading to show truncation"\n        message="This card is used for small bits of text. More text has been added to show truncation."\n        size="small"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n        <svg\n          slot="image"\n          xmlns="http://www.w3.org/2000/svg"\n          viewBox="0 0 1600 900"\n        >\n          <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n          <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n          <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n          <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n          <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n          <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n          <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n          <polygon fill="#b80066" points="641 695 886 900 367 900" />\n          <polygon fill="#960052" points="587 900 641 695 886 900" />\n          <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n          <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n          <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n          <polygon fill="#880088" points="943 900 1210 900 971 687" />\n        </svg>\n      </ic-card-horizontal>\n      <br />\n      <ic-card-horizontal\n        heading="Really long card heading to show truncation"\n        message="This card is used for small to medium bits of text. It\'s slightly bigger. More text has been added to show truncation."\n        size="medium"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n        <svg\n          slot="image"\n          xmlns="http://www.w3.org/2000/svg"\n          viewBox="0 0 1600 900"\n        >\n          <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n          <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n          <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n          <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n          <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n          <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n          <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n          <polygon fill="#b80066" points="641 695 886 900 367 900" />\n          <polygon fill="#960052" points="587 900 641 695 886 900" />\n          <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n          <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n          <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n          <polygon fill="#880088" points="943 900 1210 900 971 687" />\n        </svg>\n      </ic-card-horizontal>\n      <br />\n      <ic-card-horizontal\n        heading="Really long card heading to show truncation in the large size variant"\n        message="This card is used for medium to large bits of text. This will take up more space on the page. More text has been added to show truncation. The large card can hold 3 lines of text before it gets cut off, displaying an ellipsis instead of all the text."\n        size="large"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n        <svg\n          slot="image"\n          xmlns="http://www.w3.org/2000/svg"\n          viewBox="0 0 1600 900"\n        >\n          <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n          <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n          <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n          <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n          <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n          <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n          <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n          <polygon fill="#b80066" points="641 695 886 900 367 900" />\n          <polygon fill="#960052" points="587 900 641 695 886 900" />\n          <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n          <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n          <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n          <polygon fill="#880088" points="943 900 1210 900 971 687" />\n        </svg>\n      </ic-card-horizontal>\n      <br />\n      <ic-card-horizontal\n        heading="Really long card heading to show truncation in the extra large size variant of horizontal cards"\n        message="This card is used for large bits of text. It\'s the biggest card size option so will take up the most space on the application\'s page. More text has been added to show truncation. The extra large card can hold 5 lines of text before it gets cut off, displaying an ellipsis instead of all the text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra scelerisque arcu, vitae semper nisl rhoncusut. Vestibulum molestie enim at sollicitudin pellentesque. Proin sit amet augue sit amet dui suscipit lobortis. Nullam at consectetur ante. Suspendisse mollis ultricies porttitor. Nunc laoreet leo tortor, ut tristique odio finibus a."\n        size="extra-large"\n      >\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n        <svg\n          slot="image"\n          xmlns="http://www.w3.org/2000/svg"\n          viewBox="0 0 1600 900"\n        >\n          <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n          <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n          <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n          <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n          <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n          <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n          <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n          <polygon fill="#b80066" points="641 695 886 900 367 900" />\n          <polygon fill="#960052" points="587 900 641 695 886 900" />\n          <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n          <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n          <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n          <polygon fill="#880088" points="943 900 1210 900 971 687" />\n        </svg>\n      </ic-card-horizontal>\n    </div>`'}};const disabled=()=>lit_html.qy`<ic-card-horizontal
      heading="Card heading"
      message="Card message"
      clickable="true"
      disabled="true"
    >
      <svg
        slot="icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
        />
      </svg>
      <svg
        slot="image"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
        <polygon fill="#c50022" points="-60 900 398 662 816 900" />
        <polygon fill="#a3001b" points="337 900 398 662 816 900" />
        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
        <polygon fill="#b80066" points="641 695 886 900 367 900" />
        <polygon fill="#960052" points="587 900 641 695 886 900" />
        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
        <polygon fill="#880088" points="943 900 1210 900 971 687" />
      </svg>
    </ic-card-horizontal>`;disabled.storyName="Disabled",disabled.parameters={storySource:{source:'html`<ic-card-horizontal\n      heading="Card heading"\n      message="Card message"\n      clickable="true"\n      disabled="true"\n    >\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n      <svg\n        slot="image"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 1600 900"\n      >\n        <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n        <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n        <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n        <polygon fill="#b80066" points="641 695 886 900 367 900" />\n        <polygon fill="#960052" points="587 900 641 695 886 900" />\n        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n        <polygon fill="#880088" points="943 900 1210 900 971 687" />\n      </svg>\n    </ic-card-horizontal>`'}};const slottedHeadingAndMessage=()=>lit_html.qy`<ic-card-horizontal>
      <h4 slot="heading">Card heading</h4>
      <p slot="message">Card message</p>
      <svg
        slot="icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
        />
      </svg>
    </ic-card-horizontal>`;slottedHeadingAndMessage.storyName="Slotted heading and message",slottedHeadingAndMessage.parameters={storySource:{source:'html`<ic-card-horizontal>\n      <h4 slot="heading">Card heading</h4>\n      <p slot="message">Card message</p>\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n    </ic-card-horizontal>`'}};const customWidth=()=>lit_html.qy`<ic-card-horizontal
      heading="Card heading"
      message="Card message"
      style="--card-horizontal-width: 400px"
    >
      <svg
        slot="icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
        />
      </svg>
      <svg
        slot="image"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
        <polygon fill="#c50022" points="-60 900 398 662 816 900" />
        <polygon fill="#a3001b" points="337 900 398 662 816 900" />
        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
        <polygon fill="#b80066" points="641 695 886 900 367 900" />
        <polygon fill="#960052" points="587 900 641 695 886 900" />
        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
        <polygon fill="#880088" points="943 900 1210 900 971 687" />
      </svg>
    </ic-card-horizontal>`;customWidth.storyName="Custom width",customWidth.parameters={storySource:{source:'html`<ic-card-horizontal\n      heading="Card heading"\n      message="Card message"\n      style="--card-horizontal-width: 400px"\n    >\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n      <svg\n        slot="image"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 1600 900"\n      >\n        <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n        <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n        <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n        <polygon fill="#b80066" points="641 695 886 900 367 900" />\n        <polygon fill="#960052" points="587 900 641 695 886 900" />\n        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n        <polygon fill="#880088" points="943 900 1210 900 971 687" />\n      </svg>\n    </ic-card-horizontal>`'}};const componentMeta={title:"Web Components/Horizontal Card",parameters:{componentAPI:{data:readme_namespaceObject}},tags:["stories-mdx"],includeStories:["defaultStory","message","icon","clickable","clickableHref","wrappedByLink","image","sizes","truncation","disabled","slottedHeadingAndMessage","customWidth"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_card_horizontal_stories=componentMeta,__namedExportsOrder=["defaultStory","message","icon","clickable","clickableHref","wrappedByLink","image","sizes","truncation","disabled","slottedHeadingAndMessage","customWidth"]}}]);
//# sourceMappingURL=components-ic-card-horizontal-ic-card-horizontal-stories-mdx.01a1d0a0.iframe.bundle.js.map