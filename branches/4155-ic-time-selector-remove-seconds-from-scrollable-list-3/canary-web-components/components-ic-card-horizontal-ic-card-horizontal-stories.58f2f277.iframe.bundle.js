/*! For license information please see components-ic-card-horizontal-ic-card-horizontal-stories.58f2f277.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_canary_web_components=self.webpackChunk_ukic_canary_web_components||[]).push([[8569],{"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qy:()=>x});const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${Math.random().toFixed(9).slice(2)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),T=(y(2),y(3),Symbol.for("lit-noChange")),E=Symbol.for("lit-nothing"),A=new WeakMap,C=r.createTreeWalker(r,129);function P(t,i){if(!a(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":3===i?"<math>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[P(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),o]};class N{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=V(t,s);if(this.el=N.createElement(f,n),C.currentNode=this.el.content,2===s||3===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=C.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?H:"?"===e[1]?I:"@"===e[1]?L:k}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),C.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){if(i===T)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=S(t,h._$AS(t,i.values),h,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);C.currentNode=e;let h=C.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new R(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new z(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=C.nextNode(),o++)}return C.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),c(t)?t===E||null==t||""===t?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==E&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=N.createElement(P(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new M(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new N(t)),i}k(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new R(this.O(l()),this.O(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=E}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=S(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=S(this,e[s+n],i,n),r===T&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===E?t=E:t!==E&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.j(t)}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class H extends k{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===E?void 0:t}}class I extends k{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E)}}class L extends k{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=S(this,t,i,0)??E)===T)return;const s=this._$AH,e=t===E&&s!==E||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==E&&(s===E||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const j=t.litHtmlPolyfillSupport;j?.(N,R),(t.litHtmlVersions??=[]).push("3.2.1")},"./src/components/ic-card-horizontal/ic-card-horizontal.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Adornment:()=>Adornment,Badge:()=>Badge,Clickable:()=>Clickable,ClickableHref:()=>ClickableHref,CustomWidth:()=>CustomWidth,Default:()=>Default,Density:()=>Density,Disabled:()=>Disabled,Icon:()=>Icon,ImageLeft:()=>ImageLeft,ImageRight:()=>ImageRight,InteractionButton:()=>InteractionButton,Message:()=>Message,Sizes:()=>Sizes,SlottedContent:()=>SlottedContent,Subheading:()=>Subheading,SubheadingSlot:()=>SubheadingSlot,Truncation:()=>Truncation,WrappedByLink:()=>WrappedByLink,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ic_card_horizontal_stories});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const ic_card_horizontal_stories={title:"Web Components/Horizontal Card",component:"Horizontal Card",parameters:{componentAPI:{data:'# ic-horizontal-card\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property         | Attribute        | Description                                                                                                                                                       | Type                                                                                                                                                                                                  | Default     |\n| ---------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |\n| `clickable`      | `clickable`      | If `true`, the horizontal card will be a clickable variant, instead of static.                                                                                    | `boolean`                                                                                                                                                                                             | `false`     |\n| `density`        | `density`        | The padding of the horizontal card.                                                                                                                               | `"default" \\| "spacious"`                                                                                                                                                                             | `"default"` |\n| `disabled`       | `disabled`       | If `true`, the horizontal card will be disabled if it is clickable.                                                                                               | `boolean`                                                                                                                                                                                             | `false`     |\n| `heading`        | `heading`        | The heading for the horizontal card. This is required, unless a slotted heading is used.                                                                          | `string \\| undefined`                                                                                                                                                                                 | `undefined` |\n| `href`           | `href`           | The URL that the clickable horizontal card link points to. If set, the clickable horizontal card will render as an "a" tag, otherwise it will render as a button. | `string \\| undefined`                                                                                                                                                                                 | `undefined` |\n| `hreflang`       | `hreflang`       | The human language of the linked URL.                                                                                                                             | `string \\| undefined`                                                                                                                                                                                 | `""`        |\n| `message`        | `message`        | The main body message of the horizontal card.                                                                                                                     | `string \\| undefined`                                                                                                                                                                                 | `""`        |\n| `referrerpolicy` | `referrerpolicy` | How much of the referrer to send when following the link.                                                                                                         | `"" \\| "no-referrer" \\| "no-referrer-when-downgrade" \\| "origin" \\| "origin-when-cross-origin" \\| "same-origin" \\| "strict-origin" \\| "strict-origin-when-cross-origin" \\| "unsafe-url" \\| undefined` | `undefined` |\n| `rel`            | `rel`            | The relationship of the linked URL as space-separated link types.                                                                                                 | `string \\| undefined`                                                                                                                                                                                 | `undefined` |\n| `size`           | `size`           | The size of the horizontal card.                                                                                                                                  | `"large" \\| "medium" \\| "small"`                                                                                                                                                                      | `"medium"`  |\n| `subheading`     | `subheading`     | The subheading for the card.                                                                                                                                      | `string \\| undefined`                                                                                                                                                                                 | `undefined` |\n| `target`         | `target`         | The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).                                                               | `string \\| undefined`                                                                                                                                                                                 | `undefined` |\n| `theme`          | `theme`          | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.                           | `"dark" \\| "inherit" \\| "light" \\| undefined`                                                                                                                                                         | `"inherit"` |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on the card.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot                   | Description                                                                        |\n| ---------------------- | ---------------------------------------------------------------------------------- |\n| `"adornment"`          | Content will be placed below the card subheading. Only for `density="spacious"`.   |\n| `"badge"`              | Badge component overlaying the top right of the horizontal card.                   |\n| `"heading"`            | Content will be placed at the top of the horizontal card to the right of the icon. |\n| `"icon"`               | Content will be placed to the left of the horizontal card heading.                 |\n| `"image-left"`         | Content will be placed to the left of all other content.                           |\n| `"image-right"`        | Content will be placed to the right of all other content.                          |\n| `"interaction-button"` | Content will be placed in the top right corner of the heading section.             |\n| `"message"`            | Content will be placed in the main body of the horizontal card.                    |\n| `"subheading"`         | Content will be placed below the card heading. Only for `density="spacious"`.      |\n\n\n## CSS Custom Properties\n\n| Name                      | Description                  |\n| ------------------------- | ---------------------------- |\n| `--card-horizontal-width` | Width of the horizontal card |\n\n\n## Dependencies\n\n### Depends on\n\n- ic-typography\n\n### Graph\n```mermaid\ngraph TD;\n  ic-card-horizontal --\x3e ic-typography\n  style ic-card-horizontal fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n'}}},Default={render:()=>lit_html.qy`<ic-card-horizontal heading="Card heading"></ic-card-horizontal>`,name:"Default"},Message={render:()=>lit_html.qy`<ic-card-horizontal
      heading="Card heading"
      message="Card message"
    ></ic-card-horizontal>`,name:"Message"},Icon={render:()=>lit_html.qy`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
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
  </ic-card-horizontal>`,name:"Icon"},InteractionButton={render:()=>lit_html.qy`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
  >
    <ic-button
      variant="icon-tertiary"
      title="More information"
      slot="interaction-button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-three-dots-vertical"
        viewBox="0 0 16 16"
      >
        <path
          d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
        />
      </svg>
    </ic-button>
  </ic-card-horizontal>`,name:"Interaction button"},Subheading={render:()=>lit_html.qy`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
    subheading="Card subheading"
    density="spacious"
  ></ic-card-horizontal>`,name:"Subheading"},SubheadingSlot={render:()=>lit_html.qy`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
    density="spacious"
  >
    <ic-typography variant="subtitle-small" slot="subheading"
      >Card subheading</ic-typography
    >
  </ic-card-horizontal>`,name:"Subheading - slotted"},Adornment={render:()=>lit_html.qy`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
    density="spacious"
  >
    <ic-status-tag
      slot="adornment"
      label="Neutral"
      size="small"
    ></ic-status-tag>
  </ic-card-horizontal>`,name:"Adornment"},Badge={render:()=>lit_html.qy`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
  >
    <ic-badge label="1" slot="badge"></ic-badge>
  </ic-card-horizontal>`,name:"Badge"},Clickable={render:()=>lit_html.qy`<ic-card-horizontal
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
  </ic-card-horizontal>`,name:"Clickable"},ClickableHref={render:()=>lit_html.qy`<ic-card-horizontal
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
  </ic-card-horizontal>`,name:"Clickable - href"},WrappedByLink={render:()=>lit_html.qy`<a href="/">
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
  ></a>`,name:"Wrapped by link"},ImageLeft={render:()=>lit_html.qy`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
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
      slot="image-left"
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
  </ic-card-horizontal>`,name:"With image - left"},ImageRight={render:()=>lit_html.qy`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
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
      slot="image-right"
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
  </ic-card-horizontal>`,name:"With image - right"},Sizes={render:()=>lit_html.qy`<div>
    <ic-card-horizontal
      heading="Card heading"
      message="This card is used for small bits of text."
      size="small"
    >
      <ic-button
        variant="icon-tertiary"
        title="More information"
        slot="interaction-button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-three-dots-vertical"
          viewBox="0 0 16 16"
        >
          <path
            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
          />
        </svg>
      </ic-button>
      <ic-badge label="1" slot="badge"></ic-badge>
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
        slot="image-left"
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
      <ic-button
        variant="icon-tertiary"
        title="More information"
        slot="interaction-button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-three-dots-vertical"
          viewBox="0 0 16 16"
        >
          <path
            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
          />
        </svg>
      </ic-button>
      <ic-badge label="1" slot="badge"></ic-badge>
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
        slot="image-left"
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
      <ic-button
        variant="icon-tertiary"
        title="More information"
        slot="interaction-button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-three-dots-vertical"
          viewBox="0 0 16 16"
        >
          <path
            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
          />
        </svg>
      </ic-button>
      <ic-badge label="1" slot="badge"></ic-badge>
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
        slot="image-left"
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
  </div>`,name:"Sizes"},Density={render:()=>lit_html.qy`<div>
    <ic-card-horizontal
      heading="Card heading"
      subheading="Card subheading"
      message="This card has a spacious layout. There should be more padding around the image."
      density="spacious"
      size="small"
    >
      <ic-badge label="1" slot="badge"></ic-badge>
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
      <ic-status-tag
        slot="adornment"
        label="Neutral"
        size="small"
      ></ic-status-tag>
      <ic-button
        variant="icon-tertiary"
        title="More information"
        slot="interaction-button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-three-dots-vertical"
          viewBox="0 0 16 16"
        >
          <path
            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
          />
        </svg>
      </ic-button>
      <svg
        slot="image-left"
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
      subheading="Card subheading"
      message="This card has a spacious layout. There should be more padding around the image."
      density="spacious"
    >
      <ic-badge label="1" slot="badge"></ic-badge>
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
      <ic-status-tag
        slot="adornment"
        label="Neutral"
        size="small"
      ></ic-status-tag>
      <ic-button
        variant="icon-tertiary"
        title="More information"
        slot="interaction-button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-three-dots-vertical"
          viewBox="0 0 16 16"
        >
          <path
            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
          />
        </svg>
      </ic-button>
      <svg
        slot="image-left"
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
      subheading="Card subheading"
      message="This card has a spacious layout. There should be more padding around the image."
      density="spacious"
      size="large"
    >
      <ic-badge label="1" slot="badge"></ic-badge>
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
      <ic-status-tag
        slot="adornment"
        label="Neutral"
        size="small"
      ></ic-status-tag>
      <ic-button
        variant="icon-tertiary"
        title="More information"
        slot="interaction-button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-three-dots-vertical"
          viewBox="0 0 16 16"
        >
          <path
            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
          />
        </svg>
      </ic-button>
      <svg
        slot="image-left"
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
  </div>`,name:"Density - spacious"},Truncation={render:()=>lit_html.qy`<div>
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
        slot="image-left"
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
        slot="image-left"
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
        slot="image-left"
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
  </div>`,name:"Truncation"},Disabled={render:()=>lit_html.qy`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
    subheading="Card subheading"
    clickable="true"
    disabled="true"
    density="spacious"
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
      slot="image-left"
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
  </ic-card-horizontal>`,name:"Disabled"},SlottedContent={render:()=>lit_html.qy`<ic-card-horizontal>
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
  </ic-card-horizontal>`,name:"Slotted heading and message"},CustomWidth={render:()=>lit_html.qy`<ic-card-horizontal
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
      slot="image-left"
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
  </ic-card-horizontal>`,name:"Custom width"},__namedExportsOrder=["Default","Message","Icon","InteractionButton","Subheading","SubheadingSlot","Adornment","Badge","Clickable","ClickableHref","WrappedByLink","ImageLeft","ImageRight","Sizes","Density","Truncation","Disabled","SlottedContent","CustomWidth"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-card-horizontal heading="Card heading"></ic-card-horizontal>`,\n  name: "Default"\n}',...Default.parameters?.docs?.source},description:{story:"Use a horizontal card to display a message or content in a horizontal layout.\n\nThere is one required prop for a horizontal card:\n- heading: `string`\n\nClick the 'Component API' tab to view all the available props and events for horizontal card.\n\nTo use the horizontal card component, import `@ukic/canary-web-components` into your application.",...Default.parameters?.docs?.description}}},Message.parameters={...Message.parameters,docs:{...Message.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-card-horizontal\n      heading="Card heading"\n      message="Card message"\n    ></ic-card-horizontal>`,\n  name: "Message"\n}',...Message.parameters?.docs?.source},description:{story:"Add more information to the horizontal card by including a message.",...Message.parameters?.docs?.description}}},Icon.parameters={...Icon.parameters,docs:{...Icon.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-card-horizontal\n    heading="Card heading"\n    message="Card message"\n  >\n    <svg\n      slot="icon"\n      xmlns="http://www.w3.org/2000/svg"\n      height="24px"\n      viewBox="0 0 24 24"\n      width="24px"\n      fill="#000000"\n    >\n      <path d="M0 0h24v24H0V0z" fill="none" />\n      <path\n        d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n      />\n    </svg>\n  </ic-card-horizontal>`,\n  name: "Icon"\n}',...Icon.parameters?.docs?.source},description:{story:"Add an icon to the horizontal card.",...Icon.parameters?.docs?.description}}},InteractionButton.parameters={...InteractionButton.parameters,docs:{...InteractionButton.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-card-horizontal\n    heading="Card heading"\n    message="Card message"\n  >\n    <ic-button\n      variant="icon-tertiary"\n      title="More information"\n      slot="interaction-button"\n    >\n      <svg\n        xmlns="http://www.w3.org/2000/svg"\n        width="16"\n        height="16"\n        fill="currentColor"\n        class="bi bi-three-dots-vertical"\n        viewBox="0 0 16 16"\n      >\n        <path\n          d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"\n        />\n      </svg>\n    </ic-button>\n  </ic-card-horizontal>`,\n  name: "Interaction button"\n}',...InteractionButton.parameters?.docs?.source},description:{story:"Add an interaction button to horizontal card.",...InteractionButton.parameters?.docs?.description}}},Subheading.parameters={...Subheading.parameters,docs:{...Subheading.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-card-horizontal\n    heading="Card heading"\n    message="Card message"\n    subheading="Card subheading"\n    density="spacious"\n  ></ic-card-horizontal>`,\n  name: "Subheading"\n}',...Subheading.parameters?.docs?.source},description:{story:"Add a subheading to horizontal card either via prop or slot.",...Subheading.parameters?.docs?.description}}},SubheadingSlot.parameters={...SubheadingSlot.parameters,docs:{...SubheadingSlot.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-card-horizontal\n    heading="Card heading"\n    message="Card message"\n    density="spacious"\n  >\n    <ic-typography variant="subtitle-small" slot="subheading"\n      >Card subheading</ic-typography\n    >\n  </ic-card-horizontal>`,\n  name: "Subheading - slotted"\n}',...SubheadingSlot.parameters?.docs?.source}}},Adornment.parameters={...Adornment.parameters,docs:{...Adornment.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-card-horizontal\n    heading="Card heading"\n    message="Card message"\n    density="spacious"\n  >\n    <ic-status-tag\n      slot="adornment"\n      label="Neutral"\n      size="small"\n    ></ic-status-tag>\n  </ic-card-horizontal>`,\n  name: "Adornment"\n}',...Adornment.parameters?.docs?.source},description:{story:"Add an adornment to horizontal card.",...Adornment.parameters?.docs?.description}}},Badge.parameters={...Badge.parameters,docs:{...Badge.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-card-horizontal\n    heading="Card heading"\n    message="Card message"\n  >\n    <ic-badge label="1" slot="badge"></ic-badge>\n  </ic-card-horizontal>`,\n  name: "Badge"\n}',...Badge.parameters?.docs?.source},description:{story:"Add a badge to horizontal card.",...Badge.parameters?.docs?.description}}},Clickable.parameters={...Clickable.parameters,docs:{...Clickable.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-card-horizontal\n    heading="Card heading"\n    message="Card message"\n    clickable="true"\n  >\n    <svg\n      slot="icon"\n      xmlns="http://www.w3.org/2000/svg"\n      height="24px"\n      viewBox="0 0 24 24"\n      width="24px"\n      fill="#000000"\n    >\n      <path d="M0 0h24v24H0V0z" fill="none" />\n      <path\n        d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n      />\n    </svg>\n  </ic-card-horizontal>`,\n  name: "Clickable"\n}',...Clickable.parameters?.docs?.source},description:{story:"Enable interaction by making the horizontal card clickable.",...Clickable.parameters?.docs?.description}}},ClickableHref.parameters={...ClickableHref.parameters,docs:{...ClickableHref.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-card-horizontal\n    heading="Card heading"\n    message="Card message"\n    clickable="true"\n    href="https://www.google.com"\n  >\n    <svg\n      slot="icon"\n      xmlns="http://www.w3.org/2000/svg"\n      height="24px"\n      viewBox="0 0 24 24"\n      width="24px"\n      fill="#000000"\n    >\n      <path d="M0 0h24v24H0V0z" fill="none" />\n      <path\n        d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n      />\n    </svg>\n  </ic-card-horizontal>`,\n  name: "Clickable - href"\n}',...ClickableHref.parameters?.docs?.source},description:{story:"Direct users to another page by making the horizontal card clickable with an href.",...ClickableHref.parameters?.docs?.description}}},WrappedByLink.parameters={...WrappedByLink.parameters,docs:{...WrappedByLink.parameters?.docs,source:{originalSource:'{\n  render: () => html`<a href="/">\n    <ic-card-horizontal heading="Card heading" message="Card message">\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg> </ic-card-horizontal\n  ></a>`,\n  name: "Wrapped by link"\n}',...WrappedByLink.parameters?.docs?.source},description:{story:"Another method of making horizontal card clickable is wrapping it in a link.",...WrappedByLink.parameters?.docs?.description}}},ImageLeft.parameters={...ImageLeft.parameters,docs:{...ImageLeft.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-card-horizontal\n    heading="Card heading"\n    message="Card message"\n  >\n    <svg\n      slot="icon"\n      xmlns="http://www.w3.org/2000/svg"\n      height="24px"\n      viewBox="0 0 24 24"\n      width="24px"\n      fill="#000000"\n    >\n      <path d="M0 0h24v24H0V0z" fill="none" />\n      <path\n        d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n      />\n    </svg>\n    <svg\n      slot="image-left"\n      xmlns="http://www.w3.org/2000/svg"\n      viewBox="0 0 1600 900"\n    >\n      <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n      <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n      <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n      <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n      <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n      <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n      <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n      <polygon fill="#b80066" points="641 695 886 900 367 900" />\n      <polygon fill="#960052" points="587 900 641 695 886 900" />\n      <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n      <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n      <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n      <polygon fill="#880088" points="943 900 1210 900 971 687" />\n    </svg>\n  </ic-card-horizontal>`,\n  name: "With image - left"\n}',...ImageLeft.parameters?.docs?.source},description:{story:"Add an image to the horizontal card.",...ImageLeft.parameters?.docs?.description}}},ImageRight.parameters={...ImageRight.parameters,docs:{...ImageRight.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-card-horizontal\n    heading="Card heading"\n    message="Card message"\n  >\n    <svg\n      slot="icon"\n      xmlns="http://www.w3.org/2000/svg"\n      height="24px"\n      viewBox="0 0 24 24"\n      width="24px"\n      fill="#000000"\n    >\n      <path d="M0 0h24v24H0V0z" fill="none" />\n      <path\n        d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n      />\n    </svg>\n    <svg\n      slot="image-right"\n      xmlns="http://www.w3.org/2000/svg"\n      viewBox="0 0 1600 900"\n    >\n      <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n      <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n      <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n      <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n      <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n      <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n      <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n      <polygon fill="#b80066" points="641 695 886 900 367 900" />\n      <polygon fill="#960052" points="587 900 641 695 886 900" />\n      <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n      <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n      <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n      <polygon fill="#880088" points="943 900 1210 900 971 687" />\n    </svg>\n  </ic-card-horizontal>`,\n  name: "With image - right"\n}',...ImageRight.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div>\n    <ic-card-horizontal\n      heading="Card heading"\n      message="This card is used for small bits of text."\n      size="small"\n    >\n      <ic-button\n        variant="icon-tertiary"\n        title="More information"\n        slot="interaction-button"\n      >\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          width="16"\n          height="16"\n          fill="currentColor"\n          class="bi bi-three-dots-vertical"\n          viewBox="0 0 16 16"\n        >\n          <path\n            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"\n          />\n        </svg>\n      </ic-button>\n      <ic-badge label="1" slot="badge"></ic-badge>\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n      <svg\n        slot="image-left"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 1600 900"\n      >\n        <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n        <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n        <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n        <polygon fill="#b80066" points="641 695 886 900 367 900" />\n        <polygon fill="#960052" points="587 900 641 695 886 900" />\n        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n        <polygon fill="#880088" points="943 900 1210 900 971 687" />\n      </svg>\n    </ic-card-horizontal>\n    <br />\n    <ic-card-horizontal\n      heading="Card heading"\n      message="This card is used for small to medium bits of text. It\'s slightly bigger."\n      size="medium"\n    >\n      <ic-button\n        variant="icon-tertiary"\n        title="More information"\n        slot="interaction-button"\n      >\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          width="16"\n          height="16"\n          fill="currentColor"\n          class="bi bi-three-dots-vertical"\n          viewBox="0 0 16 16"\n        >\n          <path\n            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"\n          />\n        </svg>\n      </ic-button>\n      <ic-badge label="1" slot="badge"></ic-badge>\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n      <svg\n        slot="image-left"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 1600 900"\n      >\n        <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n        <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n        <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n        <polygon fill="#b80066" points="641 695 886 900 367 900" />\n        <polygon fill="#960052" points="587 900 641 695 886 900" />\n        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n        <polygon fill="#880088" points="943 900 1210 900 971 687" />\n      </svg>\n    </ic-card-horizontal>\n    <br />\n    <ic-card-horizontal\n      heading="Card heading"\n      message="This card is used for medium to large bits of text. This will take up more space on the page."\n      size="large"\n    >\n      <ic-button\n        variant="icon-tertiary"\n        title="More information"\n        slot="interaction-button"\n      >\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          width="16"\n          height="16"\n          fill="currentColor"\n          class="bi bi-three-dots-vertical"\n          viewBox="0 0 16 16"\n        >\n          <path\n            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"\n          />\n        </svg>\n      </ic-button>\n      <ic-badge label="1" slot="badge"></ic-badge>\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n      <svg\n        slot="image-left"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 1600 900"\n      >\n        <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n        <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n        <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n        <polygon fill="#b80066" points="641 695 886 900 367 900" />\n        <polygon fill="#960052" points="587 900 641 695 886 900" />\n        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n        <polygon fill="#880088" points="943 900 1210 900 971 687" />\n      </svg>\n    </ic-card-horizontal>\n  </div>`,\n  name: "Sizes"\n}',...Sizes.parameters?.docs?.source},description:{story:"The horizontal card can be displayed in different sizes:\n- `small`\n- `medium`\n- `large`",...Sizes.parameters?.docs?.description}}},Density.parameters={...Density.parameters,docs:{...Density.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div>\n    <ic-card-horizontal\n      heading="Card heading"\n      subheading="Card subheading"\n      message="This card has a spacious layout. There should be more padding around the image."\n      density="spacious"\n      size="small"\n    >\n      <ic-badge label="1" slot="badge"></ic-badge>\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n      <ic-status-tag\n        slot="adornment"\n        label="Neutral"\n        size="small"\n      ></ic-status-tag>\n      <ic-button\n        variant="icon-tertiary"\n        title="More information"\n        slot="interaction-button"\n      >\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          width="16"\n          height="16"\n          fill="currentColor"\n          class="bi bi-three-dots-vertical"\n          viewBox="0 0 16 16"\n        >\n          <path\n            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"\n          />\n        </svg>\n      </ic-button>\n      <svg\n        slot="image-left"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 1600 900"\n      >\n        <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n        <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n        <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n        <polygon fill="#b80066" points="641 695 886 900 367 900" />\n        <polygon fill="#960052" points="587 900 641 695 886 900" />\n        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n        <polygon fill="#880088" points="943 900 1210 900 971 687" />\n      </svg>\n    </ic-card-horizontal>\n    <br />\n    <ic-card-horizontal\n      heading="Card heading"\n      subheading="Card subheading"\n      message="This card has a spacious layout. There should be more padding around the image."\n      density="spacious"\n    >\n      <ic-badge label="1" slot="badge"></ic-badge>\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n      <ic-status-tag\n        slot="adornment"\n        label="Neutral"\n        size="small"\n      ></ic-status-tag>\n      <ic-button\n        variant="icon-tertiary"\n        title="More information"\n        slot="interaction-button"\n      >\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          width="16"\n          height="16"\n          fill="currentColor"\n          class="bi bi-three-dots-vertical"\n          viewBox="0 0 16 16"\n        >\n          <path\n            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"\n          />\n        </svg>\n      </ic-button>\n      <svg\n        slot="image-left"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 1600 900"\n      >\n        <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n        <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n        <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n        <polygon fill="#b80066" points="641 695 886 900 367 900" />\n        <polygon fill="#960052" points="587 900 641 695 886 900" />\n        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n        <polygon fill="#880088" points="943 900 1210 900 971 687" />\n      </svg>\n    </ic-card-horizontal>\n    <br />\n    <ic-card-horizontal\n      heading="Card heading"\n      subheading="Card subheading"\n      message="This card has a spacious layout. There should be more padding around the image."\n      density="spacious"\n      size="large"\n    >\n      <ic-badge label="1" slot="badge"></ic-badge>\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n      <ic-status-tag\n        slot="adornment"\n        label="Neutral"\n        size="small"\n      ></ic-status-tag>\n      <ic-button\n        variant="icon-tertiary"\n        title="More information"\n        slot="interaction-button"\n      >\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          width="16"\n          height="16"\n          fill="currentColor"\n          class="bi bi-three-dots-vertical"\n          viewBox="0 0 16 16"\n        >\n          <path\n            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"\n          />\n        </svg>\n      </ic-button>\n      <svg\n        slot="image-left"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 1600 900"\n      >\n        <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n        <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n        <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n        <polygon fill="#b80066" points="641 695 886 900 367 900" />\n        <polygon fill="#960052" points="587 900 641 695 886 900" />\n        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n        <polygon fill="#880088" points="943 900 1210 900 971 687" />\n      </svg>\n    </ic-card-horizontal>\n  </div>`,\n  name: "Density - spacious"\n}',...Density.parameters?.docs?.source},description:{story:"The horizontal card also has different density options:\n- `default`\n- `spacious`\n\nThe spacious density option allows for a subheading and an adornment to be added to the horizontal card.",...Density.parameters?.docs?.description}}},Truncation.parameters={...Truncation.parameters,docs:{...Truncation.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div>\n    <ic-card-horizontal\n      heading="Really long card heading to show truncation"\n      message="This card is used for small bits of text. More text has been added to show truncation."\n      size="small"\n    >\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n      <svg\n        slot="image-left"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 1600 900"\n      >\n        <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n        <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n        <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n        <polygon fill="#b80066" points="641 695 886 900 367 900" />\n        <polygon fill="#960052" points="587 900 641 695 886 900" />\n        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n        <polygon fill="#880088" points="943 900 1210 900 971 687" />\n      </svg>\n    </ic-card-horizontal>\n    <br />\n    <ic-card-horizontal\n      heading="Really long card heading to show truncation"\n      message="This card is used for small to medium bits of text. It\'s slightly bigger. More text has been added to show truncation."\n      size="medium"\n    >\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n      <svg\n        slot="image-left"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 1600 900"\n      >\n        <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n        <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n        <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n        <polygon fill="#b80066" points="641 695 886 900 367 900" />\n        <polygon fill="#960052" points="587 900 641 695 886 900" />\n        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n        <polygon fill="#880088" points="943 900 1210 900 971 687" />\n      </svg>\n    </ic-card-horizontal>\n    <br />\n    <ic-card-horizontal\n      heading="Really long card heading to show truncation in the large size variant"\n      message="This card is used for medium to large bits of text. This will take up more space on the page. More text has been added to show truncation. The large card can hold 3 lines of text before it gets cut off, displaying an ellipsis instead of all the text."\n      size="large"\n    >\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n      <svg\n        slot="image-left"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 1600 900"\n      >\n        <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n        <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n        <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n        <polygon fill="#b80066" points="641 695 886 900 367 900" />\n        <polygon fill="#960052" points="587 900 641 695 886 900" />\n        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n        <polygon fill="#880088" points="943 900 1210 900 971 687" />\n      </svg>\n    </ic-card-horizontal>\n  </div>`,\n  name: "Truncation"\n}',...Truncation.parameters?.docs?.source},description:{story:"When there is too much text content for the horizontal card, the heading and message with truncate.",...Truncation.parameters?.docs?.description}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-card-horizontal\n    heading="Card heading"\n    message="Card message"\n    subheading="Card subheading"\n    clickable="true"\n    disabled="true"\n    density="spacious"\n  >\n    <svg\n      slot="icon"\n      xmlns="http://www.w3.org/2000/svg"\n      height="24px"\n      viewBox="0 0 24 24"\n      width="24px"\n      fill="#000000"\n    >\n      <path d="M0 0h24v24H0V0z" fill="none" />\n      <path\n        d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n      />\n    </svg>\n    <svg\n      slot="image-left"\n      xmlns="http://www.w3.org/2000/svg"\n      viewBox="0 0 1600 900"\n    >\n      <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n      <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n      <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n      <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n      <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n      <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n      <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n      <polygon fill="#b80066" points="641 695 886 900 367 900" />\n      <polygon fill="#960052" points="587 900 641 695 886 900" />\n      <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n      <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n      <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n      <polygon fill="#880088" points="943 900 1210 900 971 687" />\n    </svg>\n  </ic-card-horizontal>`,\n  name: "Disabled"\n}',...Disabled.parameters?.docs?.source},description:{story:"Disable the horizontal card to prevent users from interacting with it.",...Disabled.parameters?.docs?.description}}},SlottedContent.parameters={...SlottedContent.parameters,docs:{...SlottedContent.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-card-horizontal>\n    <h4 slot="heading">Card heading</h4>\n    <p slot="message">Card message</p>\n    <svg\n      slot="icon"\n      xmlns="http://www.w3.org/2000/svg"\n      height="24px"\n      viewBox="0 0 24 24"\n      width="24px"\n      fill="#000000"\n    >\n      <path d="M0 0h24v24H0V0z" fill="none" />\n      <path\n        d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n      />\n    </svg>\n  </ic-card-horizontal>`,\n  name: "Slotted heading and message"\n}',...SlottedContent.parameters?.docs?.source},description:{story:"Slot custom content into a horizontal card using the `heading` and `message` slots.",...SlottedContent.parameters?.docs?.description}}},CustomWidth.parameters={...CustomWidth.parameters,docs:{...CustomWidth.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-card-horizontal\n    heading="Card heading"\n    message="Card message"\n    style="--card-horizontal-width: 400px"\n  >\n    <svg\n      slot="icon"\n      xmlns="http://www.w3.org/2000/svg"\n      height="24px"\n      viewBox="0 0 24 24"\n      width="24px"\n      fill="#000000"\n    >\n      <path d="M0 0h24v24H0V0z" fill="none" />\n      <path\n        d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n      />\n    </svg>\n    <svg\n      slot="image-left"\n      xmlns="http://www.w3.org/2000/svg"\n      viewBox="0 0 1600 900"\n    >\n      <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n      <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n      <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n      <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n      <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n      <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n      <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n      <polygon fill="#b80066" points="641 695 886 900 367 900" />\n      <polygon fill="#960052" points="587 900 641 695 886 900" />\n      <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n      <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n      <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n      <polygon fill="#880088" points="943 900 1210 900 971 687" />\n    </svg>\n  </ic-card-horizontal>`,\n  name: "Custom width"\n}',...CustomWidth.parameters?.docs?.source},description:{story:"Set the width of the horizontal card by using the `--card-horizontal-width` CSS custom property. The horizontal card will grow, but not exceed its maximum supported width.",...CustomWidth.parameters?.docs?.description}}}}}]);
//# sourceMappingURL=components-ic-card-horizontal-ic-card-horizontal-stories.58f2f277.iframe.bundle.js.map