import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{F as r,d as i,h as a,kt as o,n as s,p as c,r as l,s as u,t as ee,v as te,y as ne}from"./iframe-HARvPdsv.js";import{f as re,n as d,r as ie}from"./components-OPxZkikh.js";import{a as ae,c as oe,n as se,o as ce,r as le,s as ue,t as de}from"./mdi-BdsdVr4U.js";var fe,pe=t((()=>{fe=``+new URL(`readme-D9atEPDu.md`,import.meta.url).href}));function me(e,t){if(!Te(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ye===void 0?t:ye.createHTML(t)}function he(e,t,n=e,r){if(t===Fe)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=we(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=he(e,i._$AS(e,t.values),i,r)),t}var ge,_e,ve,ye,be,f,xe,Se,p,Ce,we,Te,Ee,De,Oe,ke,Ae,m,je,Me,Ne,Pe,Fe,h,Ie,g,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe=t((()=>{ge=globalThis,_e=e=>e,ve=ge.trustedTypes,ye=ve?ve.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,be=`$lit$`,f=`lit$${Math.random().toFixed(9).slice(2)}$`,xe=`?`+f,Se=`<${xe}>`,p=document,Ce=()=>p.createComment(``),we=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Te=Array.isArray,Ee=e=>Te(e)||typeof e?.[Symbol.iterator]==`function`,De=`[ 	
\f\r]`,Oe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ke=/-->/g,Ae=/>/g,m=RegExp(`>|${De}(?:([^\\s"'>=/]+)(${De}*=${De}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),je=/'/g,Me=/"/g,Ne=/^(?:script|style|textarea|title)$/i,Pe=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),Pe(1),Pe(2),Pe(3),Fe=Symbol.for(`lit-noChange`),h=Symbol.for(`lit-nothing`),Ie=new WeakMap,g=p.createTreeWalker(p,129),Le=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Oe;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Oe?c[1]===`!--`?o=ke:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=m):(Ne.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=m):o=Ae:o===m?c[0]===`>`?(o=i??Oe,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?m:c[3]===`"`?Me:je):o===Me||o===je?o=m:o===ke||o===Ae?o=Oe:(o=m,i=void 0);let ee=o===m&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Oe?n+Se:l>=0?(r.push(s),n.slice(0,l)+be+n.slice(l)+f+ee):n+f+(l===-2?t:ee)}return[me(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},Re=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Le(t,n);if(this.el=e.createElement(l,r),g.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=g.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(be)){let t=u[o++],n=i.getAttribute(e).split(f),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?He:r[1]===`?`?Ue:r[1]===`@`?We:Ve}),i.removeAttribute(e)}else e.startsWith(f)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Ne.test(i.tagName)){let e=i.textContent.split(f),t=e.length-1;if(t>0){i.textContent=ve?ve.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],Ce()),g.nextNode(),c.push({type:2,index:++a});i.append(e[t],Ce())}}}else if(i.nodeType===8)if(i.data===xe)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(f,e+1))!==-1;)c.push({type:7,index:a}),e+=f.length-1}a++}}static createElement(e,t){let n=p.createElement(`template`);return n.innerHTML=e,n}},ze=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??p).importNode(t,!0);g.currentNode=r;let i=g.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Be(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Ge(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=g.nextNode(),a++)}return g.currentNode=p,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Be=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=he(this,e,t),we(e)?e===h||e==null||e===``?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==Fe&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Ee(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==h&&we(this._$AH)?this._$AA.nextSibling.data=e:this.T(p.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Re.createElement(me(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new ze(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Ie.get(e.strings);return t===void 0&&Ie.set(e.strings,t=new Re(e)),t}k(t){Te(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(Ce()),this.O(Ce()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=_e(e).nextSibling;_e(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ve=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=h}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=he(this,e,t,0),a=!we(e)||e!==this._$AH&&e!==Fe,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=he(this,r[n+o],t,o),s===Fe&&(s=this._$AH[o]),a||=!we(s)||s!==this._$AH[o],s===h?e=h:e!==h&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},He=class extends Ve{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}},Ue=class extends Ve{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}},We=class extends Ve{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=he(this,e,t,0)??h)===Fe)return;let n=this._$AH,r=e===h&&n!==h||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==h&&(n===h||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ge=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){he(this,e)}},Ke=ge.litHtmlPolyfillSupport,Ke?.(Re,Be),(ge.litHtmlVersions??=[]).push(`3.3.2`)})),Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,_,rt,it,at,ot,st,v,ct,lt,ut,dt,ft,pt,mt,ht,gt,y,_t,vt,yt,bt,xt,St,Ct,wt,Tt,Et=t((()=>{qe(),Je=`John Smith`,Ye=`Sally Jones`,Xe=`Luke Fisher`,Ze=`Jane Lock`,Qe=`Margaret Hale`,$e=[`Employee`,`Employee`,`Manager`,`Employee`,`Apprentice`],et=`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Z"/></svg>`,tt=`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800-292 800-254v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570-631q0-39-25.5-64.5T480-721q-39 0-64.5 25.5T390-631q0 39 25.5 64.5T480-541Zm0-90Zm0 411Z"/></svg>`,nt=`<svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 24 24" fill="#000000"><path d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z"/></svg>`,_=[{key:`firstName`,title:`First name`,dataType:`string`},{key:`lastName`,title:`Last name`,dataType:`string`},{key:`age`,title:`Age`,dataType:`number`},{key:`jobTitle`,title:`Job title`,dataType:`string`},{key:`address`,title:`Address`,dataType:`address`}],rt=[{key:`firstName`,title:`First name`,dataType:`string`,columnWidth:`15%`},{key:`lastName`,title:`Last name`,dataType:`string`,columnWidth:`300px`},{key:`age`,title:`Age`,dataType:`number`,columnWidth:{maxWidth:`100px`}},{key:`jobTitle`,title:`Job title`,dataType:`string`},{key:`address`,title:`Address`,dataType:`address`}],it=[{key:`firstName`,title:`First name`,dataType:`string`,disableAutoSort:!0},{key:`lastName`,title:`Last name`,dataType:`string`},{key:`age`,title:`Age`,dataType:`number`},{key:`jobTitle`,title:`Job title`,dataType:`string`,excludeColumnFromSort:!0},{key:`address`,title:`Address`,dataType:`address`,excludeColumnFromSort:!0}],at=[{key:`firstName`,title:`First name`,dataType:`string`,excludeColumnFromSort:!0},{key:`lastName`,title:`Last name`,dataType:`string`},{key:`age`,title:`Age`,dataType:`number`},{key:`jobTitle`,title:`Job title`,dataType:`string`,excludeColumnFromSort:!0},{key:`address`,title:`Address`,dataType:`address`,excludeColumnFromSort:!0}],ot=[{key:`firstName`,title:`First name`,dataType:`string`},{key:`lastName`,title:`Last name`,dataType:`string`},{key:`age`,title:`Age`,dataType:`number`,hidden:!0},{key:`jobTitle`,title:`Job title`,dataType:`string`},{key:`address`,title:`Address`,dataType:`address`}],st=[{key:`firstName`,title:`First name`,dataType:`string`,columnAlignment:{horizontal:`center`,vertical:`middle`}},{key:`lastName`,title:`Last name`,dataType:`string`},{key:`age`,title:`Age`,dataType:`number`},{key:`jobTitle`,title:`Job title`,dataType:`string`},{key:`address`,title:`Address`,dataType:`address`}],v=[{age:30,jobTitle:`Developer`,address:`1 Main Street, Town, County, Postcode`,firstName:`Joe`,lastName:`Bartholomew Christoper Augustine Zacchaeus Ashford`},{address:`2 Main Street, Town, Country, Postcode`,age:28,firstName:`Sarah`,lastName:`Smith`,jobTitle:`Senior Software Developer, Site Reliability Engineering`},{firstName:`Mark`,lastName:`Owens`,age:45,jobTitle:`Team Lead`,address:`12 Key Street, Town, Country, Postcode`},{firstName:`Naomi`,lastName:`Thomas`,age:32,jobTitle:`Analyst`,address:`8 Side Street, Town, Country, Postcode`},{firstName:`Luke`,lastName:`Ashford`,age:18,jobTitle:`Junior Developer`,address:`5 New Street, Town, Country, Postcode`}],ct=[{name:Je,age:36,department:`Accounts & Finance`,employeeNumber:1,jobTitle:{data:`Senior Financial Operations and Reporting Analyst`,textWrap:!0}},{name:Ye,age:32,department:`Engineering`,employeeNumber:2,jobTitle:`Senior Software Engineer, Site Reliability Engineering (Microsoft Azure)`},{name:`Tim Rayes`,age:41,department:`Sales and Marketing`,employeeNumber:3,jobTitle:`Regional Sales and Marketing Strategy Director (Europe, the Middle East, and Africa)`,rowOptions:{textWrap:!0}},{name:Xe,age:`23`,department:`Engineering (Mobile App Development)`,employeeNumber:4,jobTitle:`Junior Tester`},{name:Ze,age:34,department:`Engineering`,employeeNumber:5,jobTitle:`Junior Product Manager`},{name:Qe,age:45,department:`HR`,employeeNumber:6,jobTitle:`Junior Human Resource Information Specialist`}],lt=[{key:`name`,title:`Name`,dataType:`string`},{key:`age`,title:`Age`,dataType:`number`},{key:`department`,title:`Department`,dataType:`string`},{key:`employeeNumber`,title:`Employee Number`,dataType:`number`},{key:`jobTitle`,title:`Job Title`,dataType:`string`}],ut=[{key:`name`,title:`Name`,dataType:`string`},{key:`age`,title:`Age`,dataType:`number`},{key:`department`,title:`Department`,dataType:`string`,textWrap:!0},{key:`employeeNumber`,title:`Employee Number`,dataType:`number`},{key:`jobTitle`,title:`Job Title`,dataType:`string`}],dt=[{name:Je,age:36,department:`Accounts & Finance`,employeeNumber:1,jobTitle:`Senior Financial Operations and Reporting Analyst`},{name:Ye,age:32,department:`Engineering`,employeeNumber:2,jobTitle:`Senior Software Engineer, Site Reliability Engineering (Microsoft Azure)`},{name:`Tim Rayes`,age:41,department:`Sales and Marketing`,employeeNumber:3,jobTitle:`Regional Sales and Marketing Strategy Director (Europe, the Middle East, and Africa)`},{name:Xe,age:`23`,department:`Engineering (Mobile App Development)`,employeeNumber:4,jobTitle:`Junior Tester`},{name:Ze,age:34,department:`Engineering`,employeeNumber:5,jobTitle:`Junior Product Manager`},{name:Qe,age:45,department:`HR`,employeeNumber:6,jobTitle:`Junior Human Resource Information Specialist`}],ft=[{firstName:{data:`Joe`,cellAlignment:{horizontal:`center`,vertical:`middle`},emphasis:`high`},lastName:`Bloggs`,age:30,jobTitle:`Developer`,address:`1 Main Street, Town, County, Postcode`},{firstName:`Sarah`,lastName:`Smith`,age:28,jobTitle:`Senior Software Developer, Site Reliability Engineering`,address:`2 Main Street, Town, Country, Postcode`},{firstName:`Mark`,lastName:`Owens`,age:45,jobTitle:`Team Lead`,address:`12 Key Street, Town, Country, Postcode`},{firstName:`Naomi`,lastName:`Thomas`,age:32,jobTitle:`Analyst`,address:`8 Side Street, Town, Country, Postcode`},{firstName:`Luke`,lastName:`Ashford`,age:18,jobTitle:`Junior Developer`,address:`5 New Street, Town, Country, Postcode`}],pt=v.map((e,t)=>({...e,rowOptions:{header:$e[t],...t===0&&{rowAlignment:{vertical:`middle`},emphasis:`high`}}})),mt=[{key:`employeeNumber`,title:`Employee number`,dataType:`number`,columnAlignment:{horizontal:`left`}},{key:`name`,title:`Name`,dataType:`string`},{key:`age`,title:`Age`,dataType:`number`},{key:`jobTitle`,title:`Job title`,dataType:`string`},{key:`address`,title:`Address`,dataType:`address`}],ht=[{key:`firstName`,title:`First name`,dataType:`string`,cellAlignment:`right`,columnAlignment:{horizontal:`right`,vertical:`middle`},icon:{icon:et,onAllCells:!0,hideOnHeader:!0}},{key:`lastName`,title:`Last name`,dataType:`string`,cellAlignment:`center`,columnAlignment:{horizontal:`center`,vertical:`bottom`},icon:{icon:et,onAllCells:!0}},{key:`age`,title:`Age`,dataType:`number`},{key:`jobTitle`,title:`Job title`,dataType:`string`},{key:`address`,title:`Address`,dataType:`address`,icon:{icon:et}}],gt=[{firstName:{data:`Joe`,icon:tt},lastName:`Bloggs`,age:30,jobTitle:`Developer`,address:`1 Main Street, Town, County, Postcode`},{firstName:`Sarah`,lastName:{data:`Smith`,icon:tt},age:28,jobTitle:`Analyst`,address:`2 Main Street, Town, Country, Postcode`},{firstName:`Mark`,lastName:`Owens`,age:45,jobTitle:`Team Lead`,address:`12 Key Street, Town, Country, Postcode`},{firstName:`Naomi`,lastName:`Thomas`,age:32,jobTitle:{data:`Developer`,icon:tt},address:`8 Side Street, Town, Country, Postcode`},{firstName:`Luke`,lastName:`Ashford`,age:18,jobTitle:`Junior Developer`,address:`5 New Street, Town, Country, Postcode`}],y=[{employeeNumber:1,name:`Joe Bloggs`,age:30,jobTitle:`Developer`,address:`1 Main Street, Town, County, Postcode`},{employeeNumber:2,name:`Sarah Jones`,age:28,jobTitle:`Developer`,address:`2 Main Street, Town, Country, Postcode`},{employeeNumber:3,name:`Mark Owens`,age:45,jobTitle:`Team Lead`,address:`12 Key Street, Town, County, Postcode`},{employeeNumber:4,name:`Naomi Thomas`,age:32,jobTitle:`Developer`,address:`8 Side Street, Town, Country, Postcode`},{employeeNumber:5,name:`Bartholomew Christoper Augustine Zacchaeus Ashford`,age:18,jobTitle:`Junior Developer`,address:`5 New Street, Town, Country, Postcode`},{employeeNumber:6,name:`Dave Smith`,age:33,jobTitle:`Analyst`,address:`4 Extra Street, Town, County, Postcode`},{employeeNumber:7,name:`Amy Fox`,age:27,jobTitle:`Analyst`,address:`3 Main Street, Town, Country, Postcode`},{employeeNumber:8,name:`Mary Cooper`,age:31,jobTitle:`Developer`,address:`8 Main Street, Town, County, Postcode`},{employeeNumber:9,name:`Alice Cole`,age:38,jobTitle:`Team Lead`,address:`10 High Street, Town, Country, Postcode`},{employeeNumber:10,name:`Ben Fields`,age:40,jobTitle:`Team Lead`,address:`14 High Street, Town, Country, Postcode`},{employeeNumber:11,name:`Chrysanthemum Finnleigh Carrington Savannah Norton`,age:32,jobTitle:`Analyst`,address:`6 Key Street, Town, County, Postcode`},{employeeNumber:12,name:`Ashley Langford`,age:29,jobTitle:`Developer`,address:`7 Long Street, Town, Country, Postcode`},{employeeNumber:13,name:`Michael Hall`,age:35,jobTitle:`Team Lead`,address:`5 Long Street, Town, County, Postcode`},{employeeNumber:14,name:`David Frank`,age:28,jobTitle:`Developer`,address:`3 Side Street, Town, Country, Postcode`},{employeeNumber:15,name:`Bernadette Mariah Genevieve Maddison Lincoln`,age:23,jobTitle:`Developer`,address:`10 Main Street, Town, Country, Postcode`},{employeeNumber:16,name:`Will Barns`,age:36,jobTitle:`Analyst`,address:`1 New Street, Town, County, Postcode`},{employeeNumber:17,name:`Elizabeth Long`,age:43,jobTitle:`Analyst`,address:`9 Short Street, Town, Country, Postcode`},{employeeNumber:18,name:`Keith Jones`,age:37,jobTitle:`Developer`,address:`11 Main Street, Town, County, Postcode`},{employeeNumber:19,name:`Olivia Brown`,age:19,jobTitle:`Trainee Analyst`,address:`4 Side Street, Town, Country, Postcode`},{employeeNumber:20,name:`Tim Green`,age:50,jobTitle:`Developer`,address:`2 Long Street, Town, Country, Postcode`}],_t=[{key:`header`,title:`Job type`,dataType:`string`},{key:`firstName`,title:`First name`,dataType:`string`},{key:`lastName`,title:`Last name`,dataType:`string`},{key:`age`,title:`Age`,dataType:`number`},{key:`jobTitle`,title:`Job title`,dataType:`string`},{key:`address`,title:`Address`,dataType:`address`}],vt=v.map((e,t)=>({...e,rowOptions:{header:$e[t]}})),yt=[{key:`actions`,title:`Actions`,dataType:`element`,columnAlignment:{horizontal:`center`}},{key:`firstName`,title:`First name`,dataType:`string`},{key:`actions2`,title:`Actions2`,dataType:`element`,columnAlignment:{horizontal:`center`}},{key:`age`,title:`Age`,dataType:`number`},{key:`jobTitle`,title:`Job title`,dataType:`string`},{key:`address`,title:`Address`,dataType:`address`},{key:`date`,title:`Date`,dataType:`datetime`}],bt=[{key:`actions`,title:`Actions`,dataType:`element`,columnAlignment:{horizontal:`center`}},{key:`firstName`,title:`First name`,dataType:`string`},{key:`age`,title:`Age`,dataType:`number`},{key:`jobTitle`,title:`Job title`,dataType:`string`},{key:`address`,title:`Address`,dataType:`address`}],xt=[{firstName:{data:`Joe`,href:`https://www.example.com`,target:`_blank`,rel:`noopener noreferrer`},age:30,jobTitle:`Developer`,address:`1 Main Street, Town, County, Postcode`,date:{data:`2024-01-01`,href:`https://www.example.com`,target:`_blank`,rel:`noopener noreferrer`}},{firstName:{data:`Sarah`,href:`https://www.example.org/`},age:28,jobTitle:`Senior Software Developer, Site Reliability Engineering`,address:`2 Main Street, Town, Country, Postcode`,date:{data:`2024-02-01T10:30:30Z`,href:`https://www.example.org`,target:`_blank`,rel:`noopener noreferrer`}},{firstName:`Mark`,age:45,jobTitle:`Team Lead`,address:`12 Key Street, Town, Country, Postcode`,date:`2027-03-01T10:30:30Z`},{firstName:`Naomi`,age:32,jobTitle:`Analyst`,address:`8 Side Street, Town, Country, Postcode`,date:`2024-04-01T10:30:30Z`},{firstName:`Luke`,age:18,jobTitle:`Junior Developer`,address:`5 New Street, Town, Country, Postcode`,date:`2024-05-01`}],St=[...xt,{firstName:`Dave`,age:33,jobTitle:`Analyst`,address:`4 Extra Street, Town, County, Postcode`},{firstName:`Amy`,age:27,jobTitle:`Analyst`,address:`3 Main Street, Town, Country, Postcode`},{firstName:`Mary`,age:31,jobTitle:`Developer`,address:`8 Main Street, Town, County, Postcode`},{firstName:`Alice`,age:38,jobTitle:`Team Lead`,address:`10 High Street, Town, Country, Postcode`},{firstName:`Ben`,age:40,jobTitle:`Team Lead`,address:`14 High Street, Town, Country, Postcode`}],Ct=[{firstName:`Nigel`,lastName:null,age:62,jobTitle:`Developer`,address:`1 Main Street, Town, County, Postcode`},{firstName:`Sarah`,lastName:`Smith`,age:28,jobTitle:void 0,address:`2 Main Street, Town, Country, Postcode`},{firstName:`Mark`,lastName:`Owens`,age:45,jobTitle:`Team Lead`,address:``}],wt=[{firstName:{data:`Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe`,description:{data:`Alias: JB`,icon:et},icon:tt},lastName:`Bloggs`,age:30,jobTitle:`Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer`,address:`N/A`},{firstName:{data:`Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe`},lastName:`Bloggs`,age:30,jobTitle:`Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer`,address:`N/A`},{firstName:{data:`Joey`,description:{data:`Unverified`,icon:nt}},lastName:`Bloggy`,age:31,jobTitle:`Developer`,address:`N/A`},{firstName:{description:`Alias: The Ghost`},lastName:`Blogger`,age:32,jobTitle:`Writer`,address:`N/A`}],Tt=[{firstName:{data:`Joe`,description:{data:`The name of Joe`,icon:`<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Z"/></svg>`}},lastName:`Bloggs`,age:30,jobTitle:`Developer`,address:`1 Main Street, Town, County, Postcode`},{firstName:{data:`Sarah`,description:{data:`The name of Sarah`,icon:`<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Z"/></svg>`}},lastName:`Smith`,age:28,jobTitle:`Senior Software Developer, Site Reliability Engineering`,address:`2 Main Street, Town, Country, Postcode`},{firstName:{data:`Mark`,description:{data:`The name of Mark`,icon:`<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Z"/></svg>`}},lastName:`Owens`,age:45,jobTitle:`Team Lead`,address:`12 Key Street, Town, Country, Postcode`},{firstName:{data:`Naomi`,description:{data:`The name of Naomi`,icon:`<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Z"/></svg>`}},lastName:`Thomas`,age:32,jobTitle:`Analyst`,address:`8 Side Street, Town, Country, Postcode`},{firstName:`Luke`,lastName:`Ashford`,age:{data:18,description:{data:`The age of Luke`,icon:`<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Z"/></svg>`}},jobTitle:{data:`Junior Developer`,description:{data:`The job title of Luke`,icon:`<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Z"/></svg>`}},address:`5 New Street, Town, Country, Postcode`}]})),Dt=e({ActionElement:()=>X,Basic:()=>S,CellDescriptionsAndIcons:()=>Nt,CellDescriptionsLongText:()=>Pt,CellOverrides:()=>I,ColumnHeaderTruncation:()=>E,ColumnOverrides:()=>P,CustomIcons:()=>H,CustomRowHeights:()=>U,CustomTitleBar:()=>K,DataTruncationShowHide:()=>Mt,DataTruncationTooltip:()=>W,DefaultEmptyState:()=>L,Dense:()=>w,DisableAutoSortOnColumns:()=>A,DisableSort:()=>k,Embedded:()=>C,ExcludeColumnsFromSort:()=>j,HideColumnExample:()=>M,LinksElementsInData:()=>V,LoadingState:()=>z,MissingCellData:()=>Z,Pagination:()=>N,Playground:()=>$,RowHeaders:()=>At,RowOverrides:()=>F,SelectRowsUsingCheckboxExample:()=>Ft,SlottedElementsWithPagination:()=>jt,SlottedEmptyState:()=>R,SlottedPaginationBar:()=>J,SortOptions:()=>O,Sortable:()=>D,Spacious:()=>kt,StickyColumnHeaders:()=>T,StyledNativeTables:()=>Q,TableSizingColumnWidth:()=>Y,TextWrap:()=>G,UpdatingData:()=>q,UpdatingState:()=>B,__namedExportsOrder:()=>Rt,default:()=>Ot}),b,x,Ot,S,C,w,kt,T,E,At,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,jt,H,U,W,Mt,G,K,q,J,Y,X,Z,Nt,Pt,Ft,It,Q,Lt,$,Rt,zt=t((()=>{de(),s(),b=n(o()),pe(),Et(),re(),x=ee(),Ot={title:`React Components/Data Table`,component:d,parameters:{componentAPI:{data:fe}}},S={render:()=>(0,x.jsx)(d,{caption:`Basic`,columns:_,data:v}),name:`Basic`},C={render:()=>(0,x.jsx)(d,{caption:`Embedded`,columns:_,data:v,embedded:!0}),name:`Embedded`},w={render:()=>(0,x.jsx)(d,{caption:`Dense`,columns:_,data:v,density:`dense`}),name:`Dense`},kt={render:()=>(0,x.jsx)(d,{caption:`Spacious`,columns:_,data:v,density:`spacious`}),name:`Spacious`},T={render:()=>{let[e,t]=(0,b.useState)(!1);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(d,{caption:`Sticky Header`,columns:mt,data:y,stickyColumnHeaders:e,style:{height:`366px`}}),(0,x.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,marginTop:`8px`},children:[(0,x.jsx)(u,{onClick:()=>t(!0),children:`Stick Header`}),(0,x.jsx)(u,{onClick:()=>t(!1),children:`Unstick Header`})]})]})},name:`Sticky column headers`},E={render:()=>(0,x.jsx)(d,{style:{height:`400px`,width:`500px`},caption:`Column Header Truncation`,columns:_,data:v,columnHeaderTruncation:!0}),name:`Column header truncation`},At={render:()=>(0,x.jsx)(d,{caption:`Row Headers`,columns:_t,data:vt}),name:`Row headers`},D={render:()=>(0,x.jsx)(d,{caption:`Sort`,columns:_,data:v,sortable:!0}),name:`Sort`},O={render:()=>(0,x.jsx)(d,{caption:`Sort Options`,columns:_,data:v,sortable:!0,sortOptions:{sortOrders:[`descending`,`unsorted`],defaultColumn:`firstName`}}),name:`Sort options`},k={render:()=>{let e=[...v],t=({columnName:t,sorted:n})=>{n===`ascending`?e.sort((e,n)=>e[t]<n[t]?-1:+(e[t]>n[t])):n===`descending`&&e.sort((e,n)=>e[t]<n[t]?1:e[t]>n[t]?-1:0)};return(0,x.jsx)(d,{columns:_,data:e,caption:`Disable auto sort`,sortable:!0,disableAutoSort:!0,onIcSortChange:e=>t(e.detail),sortOptions:{sortOrders:[`ascending`,`descending`]}})},name:`Disable sort`},A={render:()=>{let e=[...v],t=({columnName:t,sorted:n})=>{if(console.log(`Sort changed`,t,n),t!==`firstName`)return;let r=n===`ascending`;e.sort((e,n)=>e[t]<n[t]?r?-1:1:e[t]>n[t]?r?1:-1:0),console.log(`Custom sort applied`)};return(0,x.jsx)(d,{columns:it,data:e,caption:`Disable auto sort on columns`,sortable:!0,onIcSortChange:e=>t(e.detail),sortOptions:{sortOrders:[`ascending`,`descending`]}})},name:`Disable sort on columns`},j={render:()=>(0,x.jsx)(d,{caption:`Sort`,columns:at,data:v,sortable:!0}),name:`Exclude columns from sort`},M={render:()=>{let[e,t]=(0,b.useState)(ot),n=n=>{t(e.map(e=>e.key===`age`?{...e,hidden:n}:e))};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(d,{caption:`Hide Column`,columns:e,data:v}),(0,x.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,marginTop:`8px`},children:[(0,x.jsx)(u,{onClick:()=>n(!1),children:`Show Age`}),(0,x.jsx)(u,{onClick:()=>n(!0),children:`Hide Age`})]})]})},name:`Column visibility`},N={render:()=>(0,x.jsx)(d,{caption:`Pagination`,columns:mt,data:y,showPagination:!0,paginationBarOptions:{itemsPerPageOptions:[{label:`5`,value:`5`},{label:`10`,value:`10`},{label:`15`,value:`15`}],showItemsPerPageControl:!0,showGoToPageControl:!0}}),name:`Pagination`},P={render:()=>(0,x.jsx)(d,{caption:`Column Overrides`,columns:st,data:v}),name:`Column overrides`},F={render:()=>(0,x.jsx)(d,{caption:`Row Overrides`,columns:_t,data:pt}),name:`Row overrides`},I={render:()=>(0,x.jsx)(d,{caption:`Cell Overrides`,columns:_,data:ft}),name:`Cell overrides`},L={render:()=>(0,x.jsx)(d,{caption:`Default Empty State`,columns:_}),name:`Default empty state`},R={render:()=>(0,x.jsx)(d,{caption:`Slotted Empty State`,columns:_,children:(0,x.jsx)(i,{slot:`empty-state`,aligned:`left`,heading:`Data source error`,body:`Error loading new data`,children:(0,x.jsx)(u,{slot:`actions`,children:`Retry`})})}),name:`Slotted empty state`},z={render:()=>(0,x.jsx)(d,{caption:`Loading state`,columns:_,data:v,loading:!0}),name:`Loading state`,height:`720px`},B={render:()=>(0,x.jsx)(d,{caption:`Updating state`,columns:_,data:v,updating:!0,updatingOptions:{progress:30}}),name:`Updating state`},V={render:()=>(0,x.jsx)(d,{caption:`Links and slotted elements in data`,columns:yt,data:xt,showPagination:!0,rowSelection:!0,onIcSelectedRowChange:e=>console.log(e.detail),onIcSelectAllRows:e=>console.log(e.detail),children:xt.map((e,t)=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(u,{variant:`destructive`,slot:`actions-${t}`,title:`Delete row (top level tooltip)`,onClick:()=>console.log(`Delete`),children:`Delete`},`actions-${t}`),(0,x.jsx)(`div`,{slot:`actions2-${t}`,children:(0,x.jsx)(u,{variant:`icon-tertiary`,"aria-label":`Delete row (nested tooltip)`,onClick:()=>console.log(`Delete`),children:(0,x.jsx)(l,{path:ce,viewBox:`0 0 24 24`})})},`actions2-${t}`)]}))}),name:`Links and elements in data`},jt={render:()=>(0,x.jsx)(d,{caption:`Slotted elements with pagination`,columns:bt,data:St,showPagination:!0,paginationBarOptions:{itemsPerPageOptions:[{label:`5`,value:`5`},{label:`10`,value:`10`}],showItemsPerPageControl:!0,selectedItemsPerPage:5},children:St.map((e,t)=>{let n=(0,b.useRef)();return(0,x.jsxs)(`div`,{slot:`actions-${t}`,children:[(0,x.jsx)(u,{id:`popover-anchor-${t}`,onClick:()=>{n.current&&(n.current.open=!n.current.open)},children:t+1}),(0,x.jsxs)(ne,{ref:n,anchor:`popover-anchor-${t}`,"aria-label":`popover`,children:[(0,x.jsx)(a,{label:`Copy code`}),(0,x.jsx)(a,{label:`Logout`,variant:`destructive`})]})]},`actions-${t}`)})}),name:`Slotted elements with pagination`},H={render:()=>(0,x.jsxs)(d,{caption:`Custom icons`,columns:ht,data:gt,children:[(0,x.jsx)(l,{slot:`age-column-icon`,path:se}),(0,x.jsx)(l,{slot:`firstName-0-icon`,path:se})]}),name:`Custom icons`},U={render:()=>(0,x.jsx)(d,{caption:`Custom Row Heights`,columns:_,data:v,globalRowHeight:80,variableRowHeight:({firstName:e,lastName:t})=>e===`Joe`||t===`Owens`?200:null}),name:`Custom row heights`},W={render:()=>{let[e,t]=(0,b.useState)(40),n=e=>{t(e)};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(d,{caption:`Truncating tooltip`,columns:lt,data:dt,truncationPattern:`tooltip`,globalRowHeight:e}),(0,x.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,paddingBlock:`8px`},children:[(0,x.jsx)(u,{onClick:()=>n(80),children:`Set globalRowHeight to 80`}),(0,x.jsx)(u,{onClick:()=>n(40),children:`Reset globalRowHeight to 40`})]})]})},name:`Data truncation tooltip`},Mt={render:()=>{let[e,t]=(0,b.useState)(40),n=e=>{t(e)};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(d,{caption:`Truncating show hide`,columns:lt,data:dt,truncationPattern:`show-hide`,globalRowHeight:e}),(0,x.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,paddingBlock:`8px`},children:[(0,x.jsx)(u,{onClick:()=>n(80),children:`Set globalRowHeight to 80`}),(0,x.jsx)(u,{onClick:()=>n(40),children:`Reset globalRowHeight to 40`})]})]})},name:`Data truncation see more / see less`},G={render:()=>(0,x.jsx)(d,{caption:`Truncating Cell Data`,columns:ut,data:ct}),name:`Text wrap`},K={render:()=>(0,x.jsx)(d,{caption:`Custom Title Bar`,columns:_,data:v,children:(0,x.jsxs)(ie,{slot:`title-bar`,description:`Data table description that describes the purpose of the table.`,metadata:`128 items | 32gb | Updated: 01/02/03`,children:[(0,x.jsx)(u,{slot:`primary-action`,children:`Primary`}),(0,x.jsx)(u,{slot:`custom-actions`,variant:`icon-tertiary`,"aria-label":`Icon 1`,children:(0,x.jsx)(l,{path:oe,viewBox:`0 0 24 24`})}),(0,x.jsx)(u,{slot:`custom-actions`,variant:`icon-tertiary`,"aria-label":`Icon 2`,children:(0,x.jsx)(l,{path:oe,viewBox:`0 0 24 24`})}),(0,x.jsx)(u,{slot:`custom-actions`,variant:`icon-tertiary`,"aria-label":`Icon 3`,children:(0,x.jsx)(l,{path:oe,viewBox:`0 0 24 24`})}),(0,x.jsx)(r,{slot:`description`,variant:`body`,children:(0,x.jsxs)(`p`,{children:[`This is some text and`,` `,(0,x.jsx)(c,{href:`/`,inline:``,children:`this is an inline link`}),` `,`within the text.`]})})]})}),name:`Custom title bar`},q={render:()=>{let[e,t]=(0,b.useState)([]),[n,r]=(0,b.useState)([{label:`5`,value:`5`}]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(d,{caption:`Updating Data`,columns:mt,data:e,showPagination:!0,paginationBarOptions:{itemsPerPageOptions:n,showItemsPerPageControl:!0,showGoToPageControl:!0,rangeLabelType:`page`}}),(0,x.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,marginTop:`8px`},children:[(0,x.jsx)(u,{onClick:()=>{t([...e,...y])},children:`Add data`}),(0,x.jsx)(u,{onClick:()=>{r([{label:`10`,value:`10`},{label:`20`,value:`20`},{label:`50`,value:`50`}])},children:`Update page lengths`}),(0,x.jsx)(u,{onClick:()=>{t([])},children:`Reset data`}),(0,x.jsx)(u,{onClick:()=>{r([{label:`5`,value:`5`}])},children:`Reset page lengths`})]})]})},name:`Updating data example`},J={render:()=>{let[e,t]=(0,b.useState)(5),[n,r]=(0,b.useState)(!1),[i,a]=(0,b.useState)(y);return(0,b.useEffect)(()=>{setTimeout(()=>{r(!0)},2e3)}),(0,x.jsx)(d,{caption:`Slotted pagination bar`,columns:mt,data:i,children:n&&(0,x.jsx)(te,{slot:`pagination-bar`,showItemsPerPageControl:!0,totalItems:y.length,itemsPerPageOptions:[{label:`5`,value:`5`},{label:`10`,value:`10`}],onIcItemsPerPageChange:n=>{t(n.detail.value),a(y.slice(0,e))},onIcPageChange:t=>{let n=(t.detail.value-1)*e;a(y.slice(n,n+e))}})})},name:`Slotted pagination bar`},Y={render:()=>(0,x.jsx)(d,{caption:`Basic Table`,columns:rt,data:v,width:`800px`,tableLayout:`auto`}),name:`Table sizing and column width`},X={render:()=>(0,x.jsx)(d,{caption:`Action Element`,columns:_,data:v,children:(0,x.jsxs)(`div`,{slot:`firstName-0-action-element`,style:{display:`flex`},children:[(0,x.jsx)(u,{variant:`icon`,size:`small`,"aria-label":`Download data`,onClick:()=>alert(`Download button clicked`),children:(0,x.jsx)(l,{path:ue,viewBox:`0 0 24 24`})}),(0,x.jsx)(u,{variant:`icon`,size:`small`,"aria-label":`Call phone`,onClick:()=>alert(`Cellphone button clicked`),children:(0,x.jsx)(l,{path:le,viewBox:`0 0 24 24`})}),(0,x.jsx)(u,{variant:`icon`,size:`small`,"aria-label":`Copy data`,onClick:()=>alert(`Copy button clicked`),children:(0,x.jsx)(l,{path:ae,viewBox:`0 0 24 24`})})]})}),name:`Action element`},Z={render:()=>(0,x.jsx)(d,{caption:`Missing cell data`,columns:_,data:Ct}),name:`Missing cell data`},Nt={render:()=>(0,x.jsx)(d,{caption:`Description and icons within cells`,columns:rt,data:Tt,tableLayout:`auto`}),name:`Description and icons within cells`},Pt={render:()=>(0,x.jsx)(d,{caption:`Basic Table`,columns:rt,data:wt,tableLayout:`auto`}),name:`Description and icons within cells with long text`},Ft={render:()=>(0,x.jsx)(d,{caption:`Select rows with checkbox`,columns:_,data:v,rowSelection:!0,onIcSelectedRowChange:e=>console.log(e.detail),onIcSelectAllRows:e=>console.log(e.detail)}),name:`Select rows with checkbox`},It=({type:e})=>(0,x.jsxs)(`table`,{class:`ic-table`+(e?` ic-table-`+e:``),children:[(0,x.jsx)(`thead`,{children:(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`th`,{children:`First name`}),(0,x.jsx)(`th`,{children:`Last name`}),(0,x.jsx)(`th`,{children:`Age`}),(0,x.jsx)(`th`,{children:`Job title`})]})}),(0,x.jsxs)(`tbody`,{children:[(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:`Joe`}),(0,x.jsx)(`td`,{children:`Ashford`}),(0,x.jsx)(`td`,{children:`30`}),(0,x.jsx)(`td`,{children:`Developer`})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:`Sarah`}),(0,x.jsx)(`td`,{children:`Smith`}),(0,x.jsx)(`td`,{children:`28`}),(0,x.jsx)(`td`,{children:`Senior Software Developer`})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:`Mark`}),(0,x.jsx)(`td`,{children:`Owens`}),(0,x.jsx)(`td`,{children:`45`}),(0,x.jsx)(`td`,{children:`Team Lead`})]})]})]}),Q={render:()=>(0,x.jsxs)(`div`,{style:{color:`var(--ic-color-text-primary)`},children:[(0,x.jsx)(`h4`,{children:`Styled native <table>`}),(0,x.jsx)(`br`,{}),(0,x.jsx)(`code`,{children:`<table class="ic-table">`}),(0,x.jsx)(`br`,{}),(0,x.jsx)(`br`,{}),(0,x.jsx)(It,{}),(0,x.jsx)(`br`,{}),(0,x.jsx)(`br`,{}),(0,x.jsx)(`h4`,{children:`Dense native <table>`}),(0,x.jsx)(`br`,{}),(0,x.jsx)(`code`,{children:`<table class="ic-table ic-table-dense">`}),(0,x.jsx)(`br`,{}),(0,x.jsx)(`br`,{}),(0,x.jsx)(It,{type:`dense`}),(0,x.jsx)(`br`,{}),(0,x.jsx)(`br`,{}),(0,x.jsx)(`h4`,{children:`Spacious native <table>`}),(0,x.jsx)(`br`,{}),(0,x.jsx)(`code`,{children:`<table class="ic-table ic-table-spacious">`}),(0,x.jsx)(`br`,{}),(0,x.jsx)(`br`,{}),(0,x.jsx)(It,{type:`spacious`}),(0,x.jsx)(`br`,{}),(0,x.jsx)(`br`,{}),(0,x.jsx)(`h4`,{children:`Embedded native <table>`}),(0,x.jsx)(`br`,{}),(0,x.jsx)(`code`,{children:`<table class="ic-table ic-table-embedded">`}),(0,x.jsx)(`br`,{}),(0,x.jsx)(`br`,{}),(0,x.jsx)(It,{type:`embedded`})]}),name:`Styled native tables`},Lt={caption:`Screen reader caption for data table`,columnHeaderTruncation:!0,columns:mt,data:y,defaultColumn:``,density:`default`,disableAutoSort:!1,embedded:!1,globalRowHeight:40,height:``,hideColumnHeaders:!1,hideDensitySelect:!1,loading:!1,loadingDesc:`loading`,loadingLabel:`Loading data...`,loadingLabelDuration:20,loadingMax:100,loadingMin:0,loadingProgress:50,loadingOverlay:!1,minimumLoadingDisplayDuration:1e3,paginationItemsPerPageOptions:[{label:`5`,value:`5`},{label:`10`,value:`10`},{label:`15`,value:`15`}],paginationRangeLabelType:`page`,paginationSelectedItemsPerPage:5,paginationSelectItemsPerPageOnEnter:!0,paginationSetToFirstPageOnPaginationChange:!1,paginationShowGoToPageControl:!0,paginationShowItemsPerPageControl:!0,paginationType:`simple`,paginationAlignment:`right`,paginationItemLabel:`Item`,paginationPageLabel:`Page`,paginationHideRangeLabel:!1,paginationHideCurrentPage:!1,paginationHideFirstAndLastPageButton:!1,rowSelection:!1,showPagination:!0,sortable:!1,sortOrders:[`unsorted`,`ascending`,`descending`],stickyColumnHeaders:!1,stickyRowHeaders:!1,tableLayout:`fixed`,theme:`inherit`,titleBarSlot:!0,titleBarDesc:`Title bar description`,titleBarHeading:`Title bar heading`,truncationPattern:`tooltip`,titleBarMetadata:`128 items | 32gb | Updated: 01/02/03`,titleBarPrimaryActionSlot:!0,titleBarCustomActionSlot:!0,updating:!1,updatingDesc:`loading`,updatingMax:100,updatingMin:0,updatingProgress:50,width:``},$={render:e=>(0,x.jsx)(d,{caption:e.caption,columnHeaderTruncation:e.columnHeaderTruncation,columns:e.columns,data:e.data,density:e.density,disableAutoSort:e.disableAutoSort,embedded:e.embedded,globalRowHeight:e.globalRowHeight,height:e.height,hideColumnHeaders:e.hideColumnHeaders,loading:e.loading,loadingOptions:{description:e.loadingDesc,label:e.loadingLabel,labelDuration:e.loadingLabelDuration,max:e.loadingMax,min:e.loadingMin,progress:e.loadingProgress,overlay:e.loadingOverlay},minimumLoadingDisplayDuration:e.minimumLoadingDisplayDuration,paginationBarOptions:{itemsPerPageOptions:e.paginationItemsPerPageOptions,rangeLabelType:e.paginationRangeLabelType,type:e.paginationType,selectedItemsPerPage:e.paginationSelectedItemsPerPage,selectItemsPerPageOnEnter:e.paginationSelectItemsPerPageOnEnter,setToFirstPageOnPaginationChange:e.paginationSetToFirstPageOnPaginationChange,showGoToPageControl:e.paginationShowGoToPageControl,showItemsPerPageControl:e.paginationShowItemsPerPageControl,alignment:e.paginationAlignment,pageLabel:e.paginationPageLabel,itemLabel:e.paginationItemLabel,hideRangeLabel:e.paginationHideRangeLabel,hideCurrentPage:e.paginationHideCurrentPage,hideFirstAndLastPageButton:e.paginationHideFirstAndLastPageButton},rowSelection:e.rowSelection,showPagination:e.showPagination,sortable:e.sortable,sortOptions:{sortOrders:e.sortOrders,defaultColumn:e.defaultColumn},stickyColumnHeaders:e.stickyColumnHeaders,stickyRowHeaders:e.stickyRowHeaders,tableLayout:e.tableLayout,theme:e.theme,truncationPattern:e.truncationPattern,updating:e.updating,updatingOptions:{description:e.updatingDesc,max:e.updatingMax,min:e.updatingMin,progress:e.updatingProgress},width:e.width,children:(0,x.jsxs)(ie,{slot:e.titleBarSlot,description:e.titleBarDesc,heading:e.titleBarHeading,hideDensitySelect:e.hideDensitySelect,metadata:e.titleBarMetadata,children:[(0,x.jsx)(u,{slot:e.titleBarPrimaryActionSlot,children:`Primary`}),(0,x.jsx)(u,{slot:e.titleBarCustomActionSlot,variant:`icon-tertiary`,"aria-label":`Icon 1`,children:(0,x.jsx)(l,{path:oe,viewBox:`0 0 24 24`})})]})}),args:Lt,argTypes:{density:{options:[`default`,`dense`,`spacious`],control:{type:`inline-radio`}},globalRowHeight:{control:{type:`text`}},paginationRangeLabelType:{options:[`page`,`data`],control:{type:`inline-radio`}},paginationType:{options:[`simple`,`complex`],control:{type:`inline-radio`}},paginationAlignment:{options:[`left`,`right`,`space-between`],control:{type:`inline-radio`}},tableLayout:{options:[`fixed`,`auto`],control:{type:`inline-radio`}},truncationPattern:{options:[`tooltip`,`show-hide`],control:{type:`inline-radio`}},titleBarSlot:{mapping:{true:`title-bar`,false:``}},titleBarPrimaryActionSlot:{mapping:{true:`primary-action`,false:``}},titleBarCustomActionSlot:{mapping:{true:`custom-actions`,false:``}},theme:{options:[`inherit`,`light`,`dark`],control:{type:`inline-radio`}}},name:`Playground`},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Basic" columns={COLS} data={DATA} />,
  name: "Basic"
}`,...S.parameters?.docs?.source},description:{story:`Use the data table component to display data in a tabular form.

There are two required props for data table:
- caption: \`string\`
- columns: \`IcDataTableColumnObject[]\`

Click the 'Component API' tab to view all the available props, events and slots for data tables.

To use the data table component, import \`@ukic/canary-react\` into your application.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Embedded" columns={COLS} data={DATA} embedded />,
  name: "Embedded"
}`,...C.parameters?.docs?.source},description:{story:"The `embedded` boolean adds a border around the table so it can be added as a standalone table and is not required to stretch the full width of its parent container.",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Dense" columns={COLS} data={DATA} density="dense" />,
  name: "Dense"
}`,...w.parameters?.docs?.source},description:{story:"The `density` variant provides three different styles for the data table:\n- `dense` reduces the padding and font size of the table cells to give the data a more dense style.\n- `default` provides a padding of `8px` which is the default spacing. This variant is seen in the first [basic](#basic) example.\n- `spacious` gives the data table a more spacious look and feel by increasing the vertical padding as well as the font size.",...w.parameters?.docs?.description}}},kt.parameters={...kt.parameters,docs:{...kt.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Spacious" columns={COLS} data={DATA} density="spacious" />,
  name: "Spacious"
}`,...kt.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [stickyHeader, setStickyHeader] = useState(false);
    return <>
        <IcDataTable caption="Sticky Header" columns={LONG_COLS} data={LONG_DATA} stickyColumnHeaders={stickyHeader} style={{
        height: "366px"
      }} />
        <div style={{
        display: "flex",
        gap: "8px",
        marginTop: "8px"
      }}>
          <IcButton onClick={() => setStickyHeader(true)}>
            Stick Header
          </IcButton>
          <IcButton onClick={() => setStickyHeader(false)}>
            Unstick Header
          </IcButton>
        </div>
      </>;
  },
  name: "Sticky column headers"
}`,...T.parameters?.docs?.source},description:{story:"When a height for the data table is set, the scroll bar will appear to the right. However, by default, the column headers will move up and out of view making it difficult to understand what the data means.\nThis can be mitigated by using the `stickyColumnHeaders` prop which takes a boolean. This can be toggled within the example below.",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcDataTable style={{
      height: "400px",
      width: "500px"
    }} caption="Column Header Truncation" columns={COLS} data={DATA} columnHeaderTruncation />;
  },
  name: "Column header truncation"
}`,...E.parameters?.docs?.source},description:{story:"By default, column header labels will wrap when they exceed the column width. To keep the column header height constant, the `columnHeaderTruncation` can be used. When set to `true`, the label will appear truncated and will display a tooltip with the full text when hovered over.",...E.parameters?.docs?.description}}},At.parameters={...At.parameters,docs:{...At.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Row Headers" columns={ROW_HEADER_COLS} data={ROW_HEADER_DATA} />,
  name: "Row headers"
}`,...At.parameters?.docs?.source},description:{story:"Row headers allow headings to be added to individual rows and styles them as column headings. The column collection includes an additional `header` key which aligns with the row headers. The structure of the `header` column is the same as the columns (i.e. key, title, dataType).\nThe data array includes an additional `header` key within the `rowOptions` which takes a string intended to be the title of the row header.",...At.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Sort" columns={COLS} data={DATA} sortable />,
  name: "Sort"
}`,...D.parameters?.docs?.source},description:{story:"Set `sortable` to `true` to set the sort functionality on all columns. Sorting can be set to `unsorted`, `ascending` and `descending` by press the sort buttons next to the column heading.",...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Sort Options" columns={COLS} data={DATA} sortable sortOptions={{
    sortOrders: ["descending", "unsorted"],
    defaultColumn: "firstName"
  }} />,
  name: "Sort options"
}`,...O.parameters?.docs?.source},description:{story:"It is possible to change the sort options for the sort buttons. The `sortOptions` prop takes an object with `sortOrders` and `defaultColumn`. `sortOrders` allows the sort order to be amended as we all as remove a sort type. Such as changing the order to `descending`, `unsorted` and remove `ascending`. `defaultColumn` sets which column is ordered by default. This is set by padding the column key as the `defaultColumn` value.",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ExternalData = [...DATA];
    const handleSort = ({
      columnName,
      sorted
    }) => {
      if (sorted === "ascending") {
        ExternalData.sort((a, b) => {
          if (a[columnName] < b[columnName]) return -1;
          if (a[columnName] > b[columnName]) return 1;
          return 0;
        });
      } else if (sorted === "descending") {
        ExternalData.sort((a, b) => {
          if (a[columnName] < b[columnName]) return 1;
          if (a[columnName] > b[columnName]) return -1;
          return 0;
        });
      }
    };
    return <IcDataTable columns={COLS} data={ExternalData} caption="Disable auto sort" sortable disableAutoSort onIcSortChange={e => handleSort(e.detail)} sortOptions={{
      sortOrders: ["ascending", "descending"]
    }} />;
  },
  name: "Disable sort"
}`,...k.parameters?.docs?.source},description:{story:"Set `sortable` to `true` and set `disable-auto-sort` to `true` to enable external sorting functionality.",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ExternalData = [...DATA];
    const handleSort = ({
      columnName,
      sorted
    }) => {
      console.log("Sort changed", columnName, sorted);
      if (columnName !== "firstName") return;
      const sortedAscending = sorted === "ascending";
      ExternalData.sort((a, b) => {
        if (a[columnName] < b[columnName]) return sortedAscending ? -1 : 1;
        if (a[columnName] > b[columnName]) return sortedAscending ? 1 : -1;
        return 0;
      });
      console.log("Custom sort applied");
    };
    return <IcDataTable columns={COLS_DISABLE_AUTO_SORT} data={ExternalData} caption="Disable auto sort on columns" sortable onIcSortChange={e => handleSort(e.detail)} sortOptions={{
      sortOrders: ["ascending", "descending"]
    }} />;
  },
  name: "Disable sort on columns"
}`,...A.parameters?.docs?.source},description:{story:"Alternatively, set `disableAutoSort` to `true` within the column object to have it apply only to certain columns that may require special custom sorting.",...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Sort" columns={COLS_EXCLUDE_SORT} data={DATA} sortable />,
  name: "Exclude columns from sort"
}`,...j.parameters?.docs?.source},description:{story:"Adding 'excludeColumnFromSort: true` to the column object excludes that column from displaying the sort button.",...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [columns, setColumns] = useState(COLS_HIDDEN);
    const setAgeHidden = hidden => {
      const updatedColumns = columns.map(col => {
        if (col.key === "age") {
          return {
            ...col,
            hidden
          };
        }
        return col;
      });
      setColumns(updatedColumns);
    };
    return <>
        <IcDataTable caption="Hide Column" columns={columns} data={DATA} />
        <div style={{
        display: "flex",
        gap: "8px",
        marginTop: "8px"
      }}>
          <IcButton onClick={() => setAgeHidden(false)}>
            Show Age
          </IcButton>
          <IcButton onClick={() => setAgeHidden(true)}>
            Hide Age
          </IcButton>
        </div>
      </>;
  },
  name: "Column visibility"
}`,...M.parameters?.docs?.source},description:{story:"Adding 'hidden: true` to the column object hides that column. In this example, the Age column is hidden.",...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Pagination" columns={LONG_COLS} data={LONG_DATA} showPagination paginationBarOptions={{
    itemsPerPageOptions: [{
      label: "5",
      value: "5"
    }, {
      label: "10",
      value: "10"
    }, {
      label: "15",
      value: "15"
    }],
    showItemsPerPageControl: true,
    showGoToPageControl: true
  }} />,
  name: "Pagination"
}`,...N.parameters?.docs?.source},description:{story:"Pagination allows large data sets to be split into pages in order to make the data easier to digest. Setting `showPagination` to `true` will add the `IcPagination` component to the bottom of the table. There a several sub components within pagination which are set via the `paginationBarOptions` prop:\n- `itemsPerPageOptions` which allows customization of how many items appear on each page. This requires a collection with `label` and `value` key pairs.\n- `showItemsPerPageControl` which show or hides the `itemsPerPage` component.\n- `showGoToPageControl` displays controls which allows jumping between pages in a non-linear approach.",...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Column Overrides" columns={COLS_ALIGNMENT} data={DATA} />,
  name: "Column overrides"
}`,...P.parameters?.docs?.source},description:{story:"There may be a requirement to style a column differently to the rest of the data to add emphasis. For example, centre align data within the 'first name' column. To do this, add `columnAlignment` to the column. `columnAlignment` takes an object which sets the `horizontal` and `vertical` property:\n- `horizontal` accepts `left`, `right` or `center`.\n- `vertical` accepts `top`, `middle`, `bottom`.\n\n`emphasis` can be added to the column by setting `high` or `low`.",...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Row Overrides" columns={ROW_HEADER_COLS} data={ROW_ALIGNMENT} />,
  name: "Row overrides"
}`,...F.parameters?.docs?.source},description:{story:"Row overrides allow styling to be applied at a row level and is set within the `rowOptions` object. The following row overrides options apply:\n- `rowAlignment` accepts `left`, `right` and `center`.\n- `emphasis` accepts `high` or `low`.\n- `textWrap` accepts `true` or `false`.",...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Cell Overrides" columns={COLS} data={DATA_CELL_ALIGNMENT} />,
  name: "Cell overrides"
}`,...I.parameters?.docs?.source},description:{story:"Cell overrides allows styling to be applied at a cell level. The cell which requires an override accepts an object which requires `data` and can contain `cellAlignment` and/or `emphasis`:\n- `data` is the cell value.\n- `cellAlignment` accepts an object with the following key pairs:\n - `horizontal` accepts `left`, `right` or `center`.\n - `vertical` accepts `top`, `middle`, `bottom`.\n- `emphasis` accepts `high` or `low`.",...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Default Empty State" columns={COLS} />,
  name: "Default empty state"
}`,...L.parameters?.docs?.source},description:{story:"When the table receives no data (either `null` or an empty array) it will automatically show an `IcEmptyState` below the headers.",...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Slotted Empty State" columns={COLS}>
      <IcEmptyState slot="empty-state" aligned="left" heading="Data source error" body="Error loading new data">
        <IcButton slot="actions">Retry</IcButton>
      </IcEmptyState>
    </IcDataTable>,
  name: "Slotted empty state"
}`,...R.parameters?.docs?.source},description:{story:"You can customise your own `IcEmptyState` component and slot it into the data table using the `empty-state` slot, to reflect different scenarios.",...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Loading state" columns={COLS} data={DATA} loading={true} />,
  name: "Loading state",
  height: "720px"
}`,...z.parameters?.docs?.source},description:{story:"When a user wants to fetch their data asynchronously, a `loading` prop can be set to `true`, which then renders a circular variant of the `IcLoadingIndicator`. The loading indicator can be customised using the `loadingOptions` prop:\n- `description` sets the aria-label of the component\n- `label` sets the visual message\n- `labelDuration` is the number of milliseconds before the label changes\n- `overlay` renders a dark overlay over the previous data set while new data is loaded\n\nIf it needs to be determinate, use `max`, `min` and `progress`.",...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Updating state" columns={COLS} data={DATA} updating={true} updatingOptions={{
    progress: 30
  }} />,
  name: "Updating state"
}`,...B.parameters?.docs?.source},description:{story:"If data in the table has changed, an `updating` prop has been supplied to show a linear `IcLoadingIndicator` just above the data rows.\n\nThis prop is also accompanied by an `updatingOptions` prop, which contains similar options to `loadingOptions`, minus `label` and `labelDuration` since the linear version is displayed.",...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Links and slotted elements in data" columns={COLS_ELEMENTS} data={DATA_REACT_ELEMENTS} showPagination rowSelection onIcSelectedRowChange={ev => console.log(ev.detail)} onIcSelectAllRows={ev => console.log(ev.detail)}>
      {DATA_REACT_ELEMENTS.map((_, index) => <>
          <IcButton key={\`actions-\${index}\`} variant="destructive" slot={\`actions-\${index}\`} title="Delete row (top level tooltip)" onClick={() => console.log("Delete")}>
            Delete
          </IcButton>
          <div key={\`actions2-\${index}\`} slot={\`actions2-\${index}\`}>
            <IcButton variant="icon-tertiary" aria-label="Delete row (nested tooltip)" onClick={() => console.log("Delete")}>
              <SlottedSVG path={mdiDelete} viewBox="0 0 24 24" />
            </IcButton>
          </div>
        </>)}
    </IcDataTable>,
  name: "Links and elements in data"
}`,...V.parameters?.docs?.source},description:{story:"Custom HTML elements can be slotted or passed via the `data` prop to display in certain cells. When using the slotted method, the slot name follows the format of `{COLUMN_TAG}-{ROW_INDEX}`.",...V.parameters?.docs?.description}}},jt.parameters={...jt.parameters,docs:{...jt.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Slotted elements with pagination" columns={COLS_ELEMENTS_SINGLE_ACTION} data={DATA_REACT_ELEMENTS_PAGINATION} showPagination paginationBarOptions={{
    itemsPerPageOptions: [{
      label: "5",
      value: "5"
    }, {
      label: "10",
      value: "10"
    }],
    showItemsPerPageControl: true,
    selectedItemsPerPage: 5
  }}>
      {DATA_REACT_ELEMENTS_PAGINATION.map((_, index) => {
      const popoverRef = useRef();
      return <div key={\`actions-\${index}\`} slot={\`actions-\${index}\`}>
            <IcButton id={\`popover-anchor-\${index}\`} onClick={() => {
          if (popoverRef.current) {
            popoverRef.current.open = !popoverRef.current.open;
          }
        }}>
              {index + 1}
            </IcButton>
            <IcPopoverMenu ref={popoverRef} anchor={\`popover-anchor-\${index}\`} aria-label="popover">
              <IcMenuItem label="Copy code"></IcMenuItem>
              <IcMenuItem label="Logout" variant="destructive"></IcMenuItem>
            </IcPopoverMenu>
          </div>;
    })}
    </IcDataTable>,
  name: "Slotted elements with pagination"
}`,...jt.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Custom icons" columns={ICON_COLS} data={ICON_DATA}>
      <SlottedSVG slot="age-column-icon" path={mdiAccountGroup} />
      <SlottedSVG slot="firstName-0-icon" path={mdiAccountGroup} />
    </IcDataTable>,
  name: "Custom icons"
}`,...H.parameters?.docs?.source},description:{story:"Custom icons can be added to cells, columns and headers in the data table. To add it to headers, set the icon via the `columns` prop:\n```\nicon: {\n icon: //ICON_STRING_GOES_HERE,\n onAllCells: //Boolean to determine whether column header icon should be replicated on all cells in the column,\n hideOnHeader: //Boolean for whether this icon should only be shown on cells and not on the header,\n}\n```\n\nTo add icons to individual cells, they can be added through the `data` prop, in a similar method to overriding the cell. Cell icons take priority over the `onAllCells` prop, meaning specific cells can be made to stand out.\n\nBoth cells and headers can also have icons slotted in. Cells use the slot format: `{COLUMN_KEY}-{ROW_INDEX}-icon`, and headers use the format: `{COLUMN_KEY}-column-icon`. Slotted icons take priority over icons inserted via the `columns` and `data` props.",...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Custom Row Heights" columns={COLS} data={DATA} globalRowHeight={80} variableRowHeight={({
    firstName,
    lastName
  }) => firstName === "Joe" || lastName === "Owens" ? 200 : null} />,
  name: "Custom row heights"
}`,...U.parameters?.docs?.source},description:{story:"A data table can have its rows use custom heights, to help display more data per row. This involves using the `globalRowHeight` prop, which applies this custom height to all rows.\n\nFor a more granular approach, `variableRowHeight` exists. This is passed through the data object for each row of data, as well as that row's `index`. Using these properties, you can write a custom function that will return a number for that row's height based on your criteria.\nReturning `null` from this function means that the row will use the `globalRowHeight` property value.\n\n**_NOTE:_** If the data table uses the `density` prop, then your custom value will be scaled depending on the density, in order to keep content readable as the text size changes:\n- `Dense` = 80% of `globalRowHeight` or `variableRowHeight`\n- `Spacious` = 120% of `globalRowHeight` or `variableRowHeight`\n\nE.G: If `globalRowHeight` = 100, a dense table will set the height to be **_80_**.\n\n**_NOTE:_** If a cell has a description (see \"Description and icons within cells\"), then the row height for that individual row will be increased by the description height in order to fully display it.\n\nE.G: If `globalRowHeight` = 100 and a cell has a description with a height of 20, then the row height for that cell's row will be set to **_120_**.\n\nTo quickly reset all row heights to the default, you can run the `resetRowHeights` method.\n\nIf you'd rather let the row calculate its own height based on its content, either set `globalRowHeight` to `auto`, or return `auto` from `variableRowHeight`.",...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [globalRowHeight, setGlobalRowHeight] = useState(40);
    const handleRowHeight = height => {
      setGlobalRowHeight(height);
    };
    return <>
        <IcDataTable caption="Truncating tooltip" columns={COLUMNS_NO_TEXT_WRAP} data={LONG_DATA_VALUES} truncationPattern="tooltip" globalRowHeight={globalRowHeight} />
        <div style={{
        display: "flex",
        gap: "8px",
        paddingBlock: "8px"
      }}>
          <IcButton onClick={() => handleRowHeight(80)}>
            Set globalRowHeight to 80
          </IcButton>
          <IcButton onClick={() => handleRowHeight(40)}>
            Reset globalRowHeight to 40
          </IcButton>
        </div>
      </>;
  },
  name: "Data truncation tooltip"
}`,...W.parameters?.docs?.source},description:{story:'When a row is given a set height, and has content that no longer fits into the cell area, the content becomes truncated. There are two types of truncation:\n- `tooltip`: Adds a line-clamp to the cell and displays the message in a tooltip.\n- `show-hide`: Adds a `See more/See less` button underneath the cell text, allowing the user to display the full content should they wish.\n\nThese values are set using the `truncationPattern` property.\n\nBy default, `globalRowHeight` is set to `auto`. If the `truncationPattern` attribute is set to `tooltip` or `show-hide` while `globalRowHeight` is `auto`, the data will not appear truncated due to the row height being set to the data which has the most height.\n\nTo see the data truncated, the `globalRowHeight` or `variableRowHeight` needs to be explicitly set to a height which is shorter than data which has the most lines.\n\n**_NOTE:_** `truncation-pattern` only applies to a cell\'s main data value. If a cell has a description (see "Description and icons within cells") then this will not be truncated and will still be visible beyond the truncation.',...W.parameters?.docs?.description}}},Mt.parameters={...Mt.parameters,docs:{...Mt.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [globalRowHeight, setGlobalRowHeight] = useState(40);
    const handleRowHeight = height => {
      setGlobalRowHeight(height);
    };
    return <>
        <IcDataTable caption="Truncating show hide" columns={COLUMNS_NO_TEXT_WRAP} data={LONG_DATA_VALUES} truncationPattern="show-hide" globalRowHeight={globalRowHeight} />
        <div style={{
        display: "flex",
        gap: "8px",
        paddingBlock: "8px"
      }}>
          <IcButton onClick={() => handleRowHeight(80)}>
            Set globalRowHeight to 80
          </IcButton>
          <IcButton onClick={() => handleRowHeight(40)}>
            Reset globalRowHeight to 40
          </IcButton>
        </div>
      </>;
  },
  name: "Data truncation see more / see less"
}`,...Mt.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Truncating Cell Data" columns={COLUMNS_TEXT_WRAP} data={TEXT_WRAP_LONG_DATA} />,
  name: "Text wrap"
}`,...G.parameters?.docs?.source},description:{story:`Text can be set to wrap in a particular column, row or cell.

Any column, row or cell that text wrap is applied to will ignore the custom height if the custom height is too small and the full content will be shown.

To set text to wrap in a column, add \`textWrap: true\` as a key value.
\`\`\`
const column = [
 { key: "name", title: "Name", dataType: "string" },
 ...
]
\`\`\`

To set text to wrap in a row, add \`rowOptions: { textWrap: true }\` to an object within the data array.
\`\`\`
const data = [
 {
   name: "Tim Rayes",
   age: 41,
   department: "Sales and Marketing",
   employeeNumber: 3,
   jobTitle:
     "Regional Sales and Marketing Strategy Director (Europe, the Middle East, and Africa)",
   rowOptions: {
     textWrap: true
   }
 },
 ...
]
\`\`\`

To set text wrap in a cell, add \`textWrap\` to a data key within an object.
\`\`\`
const data = [
 {
   name: {
     data:"Tim Rayes",
     textWrap: true
   },
   age: 41,
   department: "Sales and Marketing",
   employeeNumber: 3,
   jobTitle:
     "Regional Sales and Marketing Strategy Director (Europe, the Middle East, and Africa)",
 },
 ...
]
\`\`\``,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Custom Title Bar" columns={COLS} data={DATA}>
      <IcDataTableTitleBar slot="title-bar" description="Data table description that describes the purpose of the table." metadata="128 items | 32gb | Updated: 01/02/03">
        <IcButton slot="primary-action">Primary</IcButton>
        <IcButton slot="custom-actions" variant="icon-tertiary" aria-label="Icon 1">
          <SlottedSVG path={mdiImage} viewBox="0 0 24 24" />
        </IcButton>
        <IcButton slot="custom-actions" variant="icon-tertiary" aria-label="Icon 2">
          <SlottedSVG path={mdiImage} viewBox="0 0 24 24" />
        </IcButton>
        <IcButton slot="custom-actions" variant="icon-tertiary" aria-label="Icon 3">
          <SlottedSVG path={mdiImage} viewBox="0 0 24 24" />
        </IcButton>
        <IcTypography slot="description" variant="body">
          <p>
            This is some text and{" "}
            <IcLink href="/" inline="">
              this is an inline link
            </IcLink>{" "}
            within the text.
          </p>
        </IcTypography>
      </IcDataTableTitleBar>
    </IcDataTable>,
  name: "Custom title bar"
}`,...K.parameters?.docs?.source},description:{story:'To add additional information about the data held in your data table, you can use the `title-bar` slot to add an `IcDataTableTitleBar`, which will appear above the column headers.\n\nThe title bar can have a description and metadata added, to provide supporting information to display some context about the data to the user. Primary and custom action slots also exist to allow for actions to be performed that are related to the data, which can be prominently displayed.\n\nThe `IcDataTableTitleBar` has a built-in density selector, which allows a user to quickly change the size and padding of cells to make it more readable. This can also be hidden if preferred.\n\nMore details on `IcDataTableTitleBar` can be found in the <ic-link href="/?path=/docs/react-components-data-table-title-bar--docs" inline="">data table title bar documentation</ic-link>.',...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [data, setData] = useState([]);
    const [pageOptions, setPageOptions] = useState([{
      label: "5",
      value: "5"
    }]);
    const addData = () => {
      setData([...data, ...LONG_DATA]);
    };
    const clearData = () => {
      setData([]);
    };
    const updatePageOptions = () => {
      setPageOptions([{
        label: "10",
        value: "10"
      }, {
        label: "20",
        value: "20"
      }, {
        label: "50",
        value: "50"
      }]);
    };
    const resetPageOptions = () => {
      setPageOptions([{
        label: "5",
        value: "5"
      }]);
    };
    return <>
        <IcDataTable caption="Updating Data" columns={LONG_COLS} data={data} showPagination paginationBarOptions={{
        itemsPerPageOptions: pageOptions,
        showItemsPerPageControl: true,
        showGoToPageControl: true,
        rangeLabelType: "page"
      }} />
        <div style={{
        display: "flex",
        gap: "8px",
        marginTop: "8px"
      }}>
          <IcButton onClick={addData}>Add data</IcButton>
          <IcButton onClick={updatePageOptions}>Update page lengths</IcButton>
          <IcButton onClick={clearData}>Reset data</IcButton>
          <IcButton onClick={resetPageOptions}>Reset page lengths</IcButton>
        </div>
      </>;
  },
  name: "Updating data example"
}`,...q.parameters?.docs?.source},description:{story:`The example below demonstrates how the pagination bar responds to changes within the data.

More details on \`IcPaginationBar\` can be found in the <ic-link href="/?path=/docs/react-components-pagination-bar--docs" inline="">pagination bar documentation</ic-link>.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [render, setRender] = useState(false);
    const [data, setData] = useState(LONG_DATA);
    useEffect(() => {
      setTimeout(() => {
        setRender(true);
      }, 2000);
    });
    const icItemsPerPageChangeHandler = ev => {
      setItemsPerPage(ev.detail.value);
      setData(LONG_DATA.slice(0, itemsPerPage));
    };
    const pageChangeHandler = ev => {
      const fromRow = (ev.detail.value - 1) * itemsPerPage;
      setData(LONG_DATA.slice(fromRow, fromRow + itemsPerPage));
    };
    return <IcDataTable caption="Slotted pagination bar" columns={LONG_COLS} data={data}>
        {render && <IcPaginationBar slot="pagination-bar" showItemsPerPageControl totalItems={LONG_DATA.length} itemsPerPageOptions={[{
        label: "5",
        value: "5"
      }, {
        label: "10",
        value: "10"
      }]} onIcItemsPerPageChange={icItemsPerPageChangeHandler} onIcPageChange={pageChangeHandler} />}
      </IcDataTable>;
  },
  name: "Slotted pagination bar"
}`,...J.parameters?.docs?.source},description:{story:"There may be scenarios when using `IcDataTable` when pagination and data fetching is done using a backend API.\n\nTo enable this behaviour, the `pagination-bar` slot can be utilised to provide a custom `IcPaginationBar` component, allowing the user to have more control over how their data is displayed & interacted with.",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Basic Table" columns={COLS_WIDTH} data={DATA} width="800px" tableLayout="auto" />,
  name: "Table sizing and column width"
}`,...Y.parameters?.docs?.source},description:{story:"The dimensions of the data table can be set using the `width` and `height` prop. The prop accepts dimensions in `px`, `%`, `rem` and `auto`.\n\nBy default, the width is set to `100%` so the table spans across the viewport or parent container.\n\nTo set the column widths, the `columnWidth` property should be added to the relevant column within the column array.\n\nThe [table layout](https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout) prop is vital to how the table resizing and column widths behave. By default, the table layout is set to `fixed`. If no column width is set, the columns widths will be equally set within the viewport or parent container.\n\nA table with a `fixed` layout will force the table column widths to take precedence over the data with the table cells.\n\nFor the column widths to be dictated by the content inside, set the `tableLayout` prop to `auto` and set the table `width` to `auto`.\n\nTo set the min and max width of a table cell, set the `table-layout` attribute to `auto` and set a `minWidth` or `maxWidth` value into `columnWidth`. The min and max width accepts dimensions in `px`, `%`, `rem`.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Action Element" columns={COLS} data={DATA}>
     <div slot="firstName-0-action-element" style={{
      display: "flex"
    }}>
       <IcButton variant="icon" size="small" aria-label="Download data" onClick={() => alert("Download button clicked")}>
         <SlottedSVG path={mdiDownload} viewBox="0 0 24 24" />
       </IcButton>
       <IcButton variant="icon" size="small" aria-label="Call phone" onClick={() => alert("Cellphone button clicked")}>
         <SlottedSVG path={mdiCellphone} viewBox="0 0 24 24" />
       </IcButton>
       <IcButton variant="icon" size="small" aria-label="Copy data" onClick={() => alert("Copy button clicked")}>
         <SlottedSVG path={mdiContentCopy} viewBox="0 0 24 24" />
       </IcButton>
     </div>
   </IcDataTable>,
  name: "Action element"
}`,...X.parameters?.docs?.source},description:{story:"The cells can contain a slotted `actionElement`. The `actionElement` will be displayed to the right of the cell data.",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Missing cell data" columns={COLS} data={DATA_WITH_EMPTY_VALUES} />,
  name: "Missing cell data"
}`,...Z.parameters?.docs?.source},description:{story:`An example showing the table being able to handle empty cell values (null, undefined or empty string).`,...Z.parameters?.docs?.description}}},Nt.parameters={...Nt.parameters,docs:{...Nt.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Description and icons within cells" columns={COLS_WIDTH} data={DATA_ELEMENTS_WITH_DESCRIPTIONS} tableLayout="auto" />,
  name: "Description and icons within cells"
}`,...Nt.parameters?.docs?.source},description:{story:`Descriptions and icons can be included in the cells by proving a \`description\` field in the data. This will populate the cell with an icon (if provided) and a text string underneath the cell data. This can be applied to any cell.

You can provide a \`description\` object with or without an icon:
\`\`\`
// With an icon
firstName: {
 data: "Joe",
 description: {
   data: "The name of Joe",
   icon: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Z"/></svg>'
 }
}
\`\`\`

\`\`\`
// Without an icon
firstName: {
 data: "Joe",
 description: {
   data: "The name of Joe"
 }
}
\`\`\``,...Nt.parameters?.docs?.description}}},Pt.parameters={...Pt.parameters,docs:{...Pt.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Basic Table" columns={COLS_WIDTH} data={LONG_DATA_ELEMENTS_WITH_DESCRIPTIONS} tableLayout="auto" />,
  name: "Description and icons within cells with long text"
}`,...Pt.parameters?.docs?.source}}},Ft.parameters={...Ft.parameters,docs:{...Ft.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Select rows with checkbox" columns={COLS} data={DATA} rowSelection onIcSelectedRowChange={ev => console.log(ev.detail)} onIcSelectAllRows={ev => console.log(ev.detail)} />,
  name: "Select rows with checkbox"
}`,...Ft.parameters?.docs?.source},description:{story:"By setting `rowSelection` to `true`, `IcCheckbox` elements will appear in the leftmost column, with one in the header.\nWhen checked, the corresponding row will be selected, with the `icSelectedRowChange` containing the selected row and an array of all the currently selected rows.\n\nWhen checking the header checkbox, all rows will be selected, with the `icSelectAllRows` event being emitted with an array of all the rows. When using pagination, only the rows on the current page will be selected.",...Ft.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    color: "var(--ic-color-text-primary)"
  }}>
      <h4>Styled native &lt;table&gt;</h4>
      <br />
      <code>&lt;table class="ic-table"&gt;</code>
      <br />
      <br />
      <TableContent />
      <br />
      <br />
      <h4>Dense native &lt;table&gt;</h4>
      <br />
      <code>&lt;table class="ic-table ic-table-dense"&gt;</code>
      <br />
      <br />
      <TableContent type="dense" />
      <br />
      <br />
      <h4>Spacious native &lt;table&gt;</h4>
      <br />
      <code>&lt;table class="ic-table ic-table-spacious"&gt;</code>
      <br />
      <br />
      <TableContent type="spacious" />
      <br />
      <br />
      <h4>Embedded native &lt;table&gt;</h4>
      <br />
      <code>&lt;table class="ic-table ic-table-embedded"&gt;</code>
      <br />
      <br />
      <TableContent type="embedded" />    
    </div>,
  name: "Styled native tables"
}`,...Q.parameters?.docs?.source},description:{story:'A native HTML `<table>` element can easily be styled to look like an `ic-data-table`. Simply import `icds-table-style.css` from the `@ukic/web-components` package (`import "@ukic/web-components/dist/core/icds-table-style.css"`) and then add the `ic-table` class name to the `<table>` element.\n\nAdditional styling can be applied using other class names on the `<table>` element',...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: args => <IcDataTable caption={args.caption} columnHeaderTruncation={args.columnHeaderTruncation} columns={args.columns} data={args.data} density={args.density} disableAutoSort={args.disableAutoSort} embedded={args.embedded} globalRowHeight={args.globalRowHeight} height={args.height} hideColumnHeaders={args.hideColumnHeaders} loading={args.loading} loadingOptions={{
    description: args.loadingDesc,
    label: args.loadingLabel,
    labelDuration: args.loadingLabelDuration,
    max: args.loadingMax,
    min: args.loadingMin,
    progress: args.loadingProgress,
    overlay: args.loadingOverlay
  }} minimumLoadingDisplayDuration={args.minimumLoadingDisplayDuration} paginationBarOptions={{
    itemsPerPageOptions: args.paginationItemsPerPageOptions,
    rangeLabelType: args.paginationRangeLabelType,
    type: args.paginationType,
    selectedItemsPerPage: args.paginationSelectedItemsPerPage,
    selectItemsPerPageOnEnter: args.paginationSelectItemsPerPageOnEnter,
    setToFirstPageOnPaginationChange: args.paginationSetToFirstPageOnPaginationChange,
    showGoToPageControl: args.paginationShowGoToPageControl,
    showItemsPerPageControl: args.paginationShowItemsPerPageControl,
    alignment: args.paginationAlignment,
    pageLabel: args.paginationPageLabel,
    itemLabel: args.paginationItemLabel,
    hideRangeLabel: args.paginationHideRangeLabel,
    hideCurrentPage: args.paginationHideCurrentPage,
    hideFirstAndLastPageButton: args.paginationHideFirstAndLastPageButton
  }} rowSelection={args.rowSelection} showPagination={args.showPagination} sortable={args.sortable} sortOptions={{
    sortOrders: args.sortOrders,
    defaultColumn: args.defaultColumn
  }} stickyColumnHeaders={args.stickyColumnHeaders} stickyRowHeaders={args.stickyRowHeaders} tableLayout={args.tableLayout} theme={args.theme} truncationPattern={args.truncationPattern} updating={args.updating} updatingOptions={{
    description: args.updatingDesc,
    max: args.updatingMax,
    min: args.updatingMin,
    progress: args.updatingProgress
  }} width={args.width}>
      <IcDataTableTitleBar slot={args.titleBarSlot} description={args.titleBarDesc} heading={args.titleBarHeading} hideDensitySelect={args.hideDensitySelect} metadata={args.titleBarMetadata}>
        <IcButton slot={args.titleBarPrimaryActionSlot}>Primary</IcButton>
        <IcButton slot={args.titleBarCustomActionSlot} variant="icon-tertiary" aria-label="Icon 1">
          <SlottedSVG path={mdiImage} viewBox="0 0 24 24" />
        </IcButton>
      </IcDataTableTitleBar>
    </IcDataTable>,
  args: defaultArgs,
  argTypes: {
    density: {
      options: ["default", "dense", "spacious"],
      control: {
        type: "inline-radio"
      }
    },
    globalRowHeight: {
      control: {
        type: "text"
      }
    },
    paginationRangeLabelType: {
      options: ["page", "data"],
      control: {
        type: "inline-radio"
      }
    },
    paginationType: {
      options: ["simple", "complex"],
      control: {
        type: "inline-radio"
      }
    },
    paginationAlignment: {
      options: ["left", "right", "space-between"],
      control: {
        type: "inline-radio"
      }
    },
    tableLayout: {
      options: ["fixed", "auto"],
      control: {
        type: "inline-radio"
      }
    },
    truncationPattern: {
      options: ["tooltip", "show-hide"],
      control: {
        type: "inline-radio"
      }
    },
    titleBarSlot: {
      mapping: {
        true: "title-bar",
        false: ""
      }
    },
    titleBarPrimaryActionSlot: {
      mapping: {
        true: "primary-action",
        false: ""
      }
    },
    titleBarCustomActionSlot: {
      mapping: {
        true: "custom-actions",
        false: ""
      }
    },
    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: "inline-radio"
      }
    }
  },
  name: "Playground"
}`,...$.parameters?.docs?.source},description:{story:`Go to the <ic-link href="/?path=/story/react-components-data-table--playground">separate page for the playground example</ic-link> to view the prop controls.`,...$.parameters?.docs?.description}}},Rt=`Basic.Embedded.Dense.Spacious.StickyColumnHeaders.ColumnHeaderTruncation.RowHeaders.Sortable.SortOptions.DisableSort.DisableAutoSortOnColumns.ExcludeColumnsFromSort.HideColumnExample.Pagination.ColumnOverrides.RowOverrides.CellOverrides.DefaultEmptyState.SlottedEmptyState.LoadingState.UpdatingState.LinksElementsInData.SlottedElementsWithPagination.CustomIcons.CustomRowHeights.DataTruncationTooltip.DataTruncationShowHide.TextWrap.CustomTitleBar.UpdatingData.SlottedPaginationBar.TableSizingColumnWidth.ActionElement.MissingCellData.CellDescriptionsAndIcons.CellDescriptionsLongText.SelectRowsUsingCheckboxExample.StyledNativeTables.Playground`.split(`.`)}));zt();export{X as ActionElement,S as Basic,Nt as CellDescriptionsAndIcons,Pt as CellDescriptionsLongText,I as CellOverrides,E as ColumnHeaderTruncation,P as ColumnOverrides,H as CustomIcons,U as CustomRowHeights,K as CustomTitleBar,Mt as DataTruncationShowHide,W as DataTruncationTooltip,L as DefaultEmptyState,w as Dense,A as DisableAutoSortOnColumns,k as DisableSort,C as Embedded,j as ExcludeColumnsFromSort,M as HideColumnExample,V as LinksElementsInData,z as LoadingState,Z as MissingCellData,N as Pagination,$ as Playground,At as RowHeaders,F as RowOverrides,Ft as SelectRowsUsingCheckboxExample,jt as SlottedElementsWithPagination,R as SlottedEmptyState,J as SlottedPaginationBar,O as SortOptions,D as Sortable,kt as Spacious,T as StickyColumnHeaders,Q as StyledNativeTables,Y as TableSizingColumnWidth,G as TextWrap,q as UpdatingData,B as UpdatingState,Rt as __namedExportsOrder,Ot as default,zt as n,Dt as t};