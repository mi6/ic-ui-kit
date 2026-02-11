import{a as tt,b as at,c as nt,d as Oe,m as we,e as ot}from"./mdi-RwuIehDr.js";import{R as t,I as d,a as rt,b as it,r as T,s as st,t as Le,u as lt}from"./iframe-p1ooj4se.js";import{m as l,e as je,k as ct}from"./components-6ZmllG_-.js";import{S as v}from"./slottedSVG-BZ77jiu_.js";const dt=""+new URL("readme-CjhsXH69.md",import.meta.url).href;const Ne=globalThis,Ae=Ne.trustedTypes,xe=Ae?Ae.createPolicy("lit-html",{createHTML:a=>a}):void 0,Ge="$lit$",D=`lit$${Math.random().toFixed(9).slice(2)}$`,We="?"+D,pt=`<${We}>`,E=document,fe=()=>E.createComment(""),he=a=>a===null||typeof a!="object"&&typeof a!="function",_e=Array.isArray,mt=a=>_e(a)||typeof a?.[Symbol.iterator]=="function",Ie=`[ 	
\f\r]`,ce=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,He=/-->/g,Je=/>/g,f=RegExp(`>|${Ie}(?:([^\\s"'>=/]+)(${Ie}*=${Ie}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Re=/'/g,Be=/"/g,qe=/^(?:script|style|textarea|title)$/i,ge=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),Me=new WeakMap,C=E.createTreeWalker(E,129);function Ue(a,e){if(!_e(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return xe!==void 0?xe.createHTML(e):e}const ut=(a,e)=>{const n=a.length-1,o=[];let r,i=e===2?"<svg>":e===3?"<math>":"",s=ce;for(let y=0;y<n;y++){const c=a[y];let m,b,p=-1,w=0;for(;w<c.length&&(s.lastIndex=w,b=s.exec(c),b!==null);)w=s.lastIndex,s===ce?b[1]==="!--"?s=He:b[1]!==void 0?s=Je:b[2]!==void 0?(qe.test(b[2])&&(r=RegExp("</"+b[2],"g")),s=f):b[3]!==void 0&&(s=f):s===f?b[0]===">"?(s=r??ce,p=-1):b[1]===void 0?p=-2:(p=s.lastIndex-b[2].length,m=b[1],s=b[3]===void 0?f:b[3]==='"'?Be:Re):s===Be||s===Re?s=f:s===He||s===Je?s=ce:(s=f,r=void 0);const S=s===f&&a[y+1].startsWith("/>")?" ":"";i+=s===ce?c+pt:p>=0?(o.push(m),c.slice(0,p)+Ge+c.slice(p)+D+S):c+D+(p===-2?y:S)}return[Ue(a,i+(a[n]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};class be{constructor({strings:e,_$litType$:n},o){let r;this.parts=[];let i=0,s=0;const y=e.length-1,c=this.parts,[m,b]=ut(e,n);if(this.el=be.createElement(m,o),C.currentNode=this.el.content,n===2||n===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=C.nextNode())!==null&&c.length<y;){if(r.nodeType===1){if(r.hasAttributes())for(const p of r.getAttributeNames())if(p.endsWith(Ge)){const w=b[s++],S=r.getAttribute(p).split(D),Te=/([.?@])?(.*)/.exec(w);c.push({type:1,index:i,name:Te[2],strings:S,ctor:Te[1]==="."?gt:Te[1]==="?"?bt:Te[1]==="@"?yt:Ee}),r.removeAttribute(p)}else p.startsWith(D)&&(c.push({type:6,index:i}),r.removeAttribute(p));if(qe.test(r.tagName)){const p=r.textContent.split(D),w=p.length-1;if(w>0){r.textContent=Ae?Ae.emptyScript:"";for(let S=0;S<w;S++)r.append(p[S],fe()),C.nextNode(),c.push({type:2,index:++i});r.append(p[w],fe())}}}else if(r.nodeType===8)if(r.data===We)c.push({type:2,index:i});else{let p=-1;for(;(p=r.data.indexOf(D,p+1))!==-1;)c.push({type:7,index:i}),p+=D.length-1}i++}}static createElement(e,n){const o=E.createElement("template");return o.innerHTML=e,o}}function le(a,e,n=a,o){if(e===ge)return e;let r=o!==void 0?n._$Co?.[o]:n._$Cl;const i=he(e)?void 0:e._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),i===void 0?r=void 0:(r=new i(a),r._$AT(a,n,o)),o!==void 0?(n._$Co??=[])[o]=r:n._$Cl=r),r!==void 0&&(e=le(a,r._$AS(a,e.values),r,o)),e}class ht{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:o}=this._$AD,r=(e?.creationScope??E).importNode(n,!0);C.currentNode=r;let i=C.nextNode(),s=0,y=0,c=o[0];for(;c!==void 0;){if(s===c.index){let m;c.type===2?m=new Ce(i,i.nextSibling,this,e):c.type===1?m=new c.ctor(i,c.name,c.strings,this,e):c.type===6&&(m=new Tt(i,this,e)),this._$AV.push(m),c=o[++y]}s!==c?.index&&(i=C.nextNode(),s++)}return C.currentNode=E,r}p(e){let n=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,n),n+=o.strings.length-2):o._$AI(e[n])),n++}}class Ce{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,n,o,r){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=o,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&e?.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=le(this,e,n),he(e)?e===h||e==null||e===""?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==ge&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):mt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==h&&he(this._$AH)?this._$AA.nextSibling.data=e:this.T(E.createTextNode(e)),this._$AH=e}$(e){const{values:n,_$litType$:o}=e,r=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=be.createElement(Ue(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===r)this._$AH.p(n);else{const i=new ht(r,this),s=i.u(this.options);i.p(n),this.T(s),this._$AH=i}}_$AC(e){let n=Me.get(e.strings);return n===void 0&&Me.set(e.strings,n=new be(e)),n}k(e){_e(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let o,r=0;for(const i of e)r===n.length?n.push(o=new Ce(this.O(fe()),this.O(fe()),this,this.options)):o=n[r],o._$AI(i),r++;r<n.length&&(this._$AR(o&&o._$AB.nextSibling,r),n.length=r)}_$AR(e=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class Ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,o,r,i){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=n,this._$AM=r,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=h}_$AI(e,n=this,o,r){const i=this.strings;let s=!1;if(i===void 0)e=le(this,e,n,0),s=!he(e)||e!==this._$AH&&e!==ge,s&&(this._$AH=e);else{const y=e;let c,m;for(e=i[0],c=0;c<i.length-1;c++)m=le(this,y[o+c],n,c),m===ge&&(m=this._$AH[c]),s||=!he(m)||m!==this._$AH[c],m===h?e=h:e!==h&&(e+=(m??"")+i[c+1]),this._$AH[c]=m}s&&!r&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class gt extends Ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}}class bt extends Ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}}class yt extends Ee{constructor(e,n,o,r,i){super(e,n,o,r,i),this.type=5}_$AI(e,n=this){if((e=le(this,e,n,0)??h)===ge)return;const o=this._$AH,r=e===h&&o!==h||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==h&&(o===h||r);r&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Tt{constructor(e,n,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){le(this,e)}}const vt=Ne.litHtmlPolyfillSupport;vt?.(be,Ce),(Ne.litHtmlVersions??=[]).push("3.2.1");const Fe="John Smith",Ze="Sally Jones",ze="Luke Fisher",Ve="Jane Lock",Xe="Margaret Hale",Ke=["Employee","Employee","Manager","Employee","Apprentice"],Se='<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Z"/></svg>',De='<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800-292 800-254v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570-631q0-39-25.5-64.5T480-721q-39 0-64.5 25.5T390-631q0 39 25.5 64.5T480-541Zm0-90Zm0 411Z"/></svg>',wt='<svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 24 24" fill="#000000"><path d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z"/></svg>',g=[{key:"firstName",title:"First name",dataType:"string"},{key:"lastName",title:"Last name",dataType:"string"},{key:"age",title:"Age",dataType:"number"},{key:"jobTitle",title:"Job title",dataType:"string"},{key:"address",title:"Address",dataType:"address"}],ke=[{key:"firstName",title:"First name",dataType:"string",columnWidth:"15%"},{key:"lastName",title:"Last name",dataType:"string",columnWidth:"300px"},{key:"age",title:"Age",dataType:"number",columnWidth:{maxWidth:"100px"}},{key:"jobTitle",title:"Job title",dataType:"string"},{key:"address",title:"Address",dataType:"address"}],St=[{key:"firstName",title:"First name",dataType:"string",disableAutoSort:!0},{key:"lastName",title:"Last name",dataType:"string"},{key:"age",title:"Age",dataType:"number"},{key:"jobTitle",title:"Job title",dataType:"string",excludeColumnFromSort:!0},{key:"address",title:"Address",dataType:"address",excludeColumnFromSort:!0}],Dt=[{key:"firstName",title:"First name",dataType:"string",excludeColumnFromSort:!0},{key:"lastName",title:"Last name",dataType:"string"},{key:"age",title:"Age",dataType:"number"},{key:"jobTitle",title:"Job title",dataType:"string",excludeColumnFromSort:!0},{key:"address",title:"Address",dataType:"address",excludeColumnFromSort:!0}],At=[{key:"firstName",title:"First name",dataType:"string"},{key:"lastName",title:"Last name",dataType:"string"},{key:"age",title:"Age",dataType:"number",hidden:!0},{key:"jobTitle",title:"Job title",dataType:"string"},{key:"address",title:"Address",dataType:"address"}],ft=[{key:"firstName",title:"First name",dataType:"string",columnAlignment:{horizontal:"center",vertical:"middle"}},{key:"lastName",title:"Last name",dataType:"string"},{key:"age",title:"Age",dataType:"number"},{key:"jobTitle",title:"Job title",dataType:"string"},{key:"address",title:"Address",dataType:"address"}],u=[{age:30,jobTitle:"Developer",address:"1 Main Street, Town, County, Postcode",firstName:"Joe",lastName:"Bartholomew Christoper Augustine Zacchaeus Ashford"},{address:"2 Main Street, Town, Country, Postcode",age:28,firstName:"Sarah",lastName:"Smith",jobTitle:"Senior Software Developer, Site Reliability Engineering"},{firstName:"Mark",lastName:"Owens",age:45,jobTitle:"Team Lead",address:"12 Key Street, Town, Country, Postcode"},{firstName:"Naomi",lastName:"Thomas",age:32,jobTitle:"Analyst",address:"8 Side Street, Town, Country, Postcode"},{firstName:"Luke",lastName:"Ashford",age:18,jobTitle:"Junior Developer",address:"5 New Street, Town, Country, Postcode"}],Ct=[{name:Fe,age:36,department:"Accounts & Finance",employeeNumber:1,jobTitle:{data:"Senior Financial Operations and Reporting Analyst",textWrap:!0}},{name:Ze,age:32,department:"Engineering",employeeNumber:2,jobTitle:"Senior Software Engineer, Site Reliability Engineering (Microsoft Azure)"},{name:"Tim Rayes",age:41,department:"Sales and Marketing",employeeNumber:3,jobTitle:"Regional Sales and Marketing Strategy Director (Europe, the Middle East, and Africa)",rowOptions:{textWrap:!0}},{name:ze,age:"23",department:"Engineering (Mobile App Development)",employeeNumber:4,jobTitle:"Junior Tester"},{name:Ve,age:34,department:"Engineering",employeeNumber:5,jobTitle:"Junior Product Manager"},{name:Xe,age:45,department:"HR",employeeNumber:6,jobTitle:"Junior Human Resource Information Specialist"}],Ye=[{key:"name",title:"Name",dataType:"string"},{key:"age",title:"Age",dataType:"number"},{key:"department",title:"Department",dataType:"string"},{key:"employeeNumber",title:"Employee Number",dataType:"number"},{key:"jobTitle",title:"Job Title",dataType:"string"}],Et=[{key:"name",title:"Name",dataType:"string"},{key:"age",title:"Age",dataType:"number"},{key:"department",title:"Department",dataType:"string",textWrap:!0},{key:"employeeNumber",title:"Employee Number",dataType:"number"},{key:"jobTitle",title:"Job Title",dataType:"string"}],Qe=[{name:Fe,age:36,department:"Accounts & Finance",employeeNumber:1,jobTitle:"Senior Financial Operations and Reporting Analyst"},{name:Ze,age:32,department:"Engineering",employeeNumber:2,jobTitle:"Senior Software Engineer, Site Reliability Engineering (Microsoft Azure)"},{name:"Tim Rayes",age:41,department:"Sales and Marketing",employeeNumber:3,jobTitle:"Regional Sales and Marketing Strategy Director (Europe, the Middle East, and Africa)"},{name:ze,age:"23",department:"Engineering (Mobile App Development)",employeeNumber:4,jobTitle:"Junior Tester"},{name:Ve,age:34,department:"Engineering",employeeNumber:5,jobTitle:"Junior Product Manager"},{name:Xe,age:45,department:"HR",employeeNumber:6,jobTitle:"Junior Human Resource Information Specialist"}],It=[{firstName:{data:"Joe",cellAlignment:{horizontal:"center",vertical:"middle"},emphasis:"high"},lastName:"Bloggs",age:30,jobTitle:"Developer",address:"1 Main Street, Town, County, Postcode"},{firstName:"Sarah",lastName:"Smith",age:28,jobTitle:"Senior Software Developer, Site Reliability Engineering",address:"2 Main Street, Town, Country, Postcode"},{firstName:"Mark",lastName:"Owens",age:45,jobTitle:"Team Lead",address:"12 Key Street, Town, Country, Postcode"},{firstName:"Naomi",lastName:"Thomas",age:32,jobTitle:"Analyst",address:"8 Side Street, Town, Country, Postcode"},{firstName:"Luke",lastName:"Ashford",age:18,jobTitle:"Junior Developer",address:"5 New Street, Town, Country, Postcode"}],Pt=u.map((a,e)=>({...a,rowOptions:{header:Ke[e],...e===0&&{rowAlignment:{vertical:"middle"},emphasis:"high"}}})),ye=[{key:"employeeNumber",title:"Employee number",dataType:"number",columnAlignment:{horizontal:"left"}},{key:"name",title:"Name",dataType:"string"},{key:"age",title:"Age",dataType:"number"},{key:"jobTitle",title:"Job title",dataType:"string"},{key:"address",title:"Address",dataType:"address"}],Nt=[{key:"firstName",title:"First name",dataType:"string",cellAlignment:"right",columnAlignment:{horizontal:"right",vertical:"middle"},icon:{icon:Se,onAllCells:!0,hideOnHeader:!0}},{key:"lastName",title:"Last name",dataType:"string",cellAlignment:"center",columnAlignment:{horizontal:"center",vertical:"bottom"},icon:{icon:Se,onAllCells:!0}},{key:"age",title:"Age",dataType:"number"},{key:"jobTitle",title:"Job title",dataType:"string"},{key:"address",title:"Address",dataType:"address",icon:{icon:Se}}],_t=[{firstName:{data:"Joe",icon:De},lastName:"Bloggs",age:30,jobTitle:"Developer",address:"1 Main Street, Town, County, Postcode"},{firstName:"Sarah",lastName:{data:"Smith",icon:De},age:28,jobTitle:"Analyst",address:"2 Main Street, Town, Country, Postcode"},{firstName:"Mark",lastName:"Owens",age:45,jobTitle:"Team Lead",address:"12 Key Street, Town, Country, Postcode"},{firstName:"Naomi",lastName:"Thomas",age:32,jobTitle:{data:"Developer",icon:De},address:"8 Side Street, Town, Country, Postcode"},{firstName:"Luke",lastName:"Ashford",age:18,jobTitle:"Junior Developer",address:"5 New Street, Town, Country, Postcode"}],A=[{employeeNumber:1,name:"Joe Bloggs",age:30,jobTitle:"Developer",address:"1 Main Street, Town, County, Postcode"},{employeeNumber:2,name:"Sarah Jones",age:28,jobTitle:"Developer",address:"2 Main Street, Town, Country, Postcode"},{employeeNumber:3,name:"Mark Owens",age:45,jobTitle:"Team Lead",address:"12 Key Street, Town, County, Postcode"},{employeeNumber:4,name:"Naomi Thomas",age:32,jobTitle:"Developer",address:"8 Side Street, Town, Country, Postcode"},{employeeNumber:5,name:"Bartholomew Christoper Augustine Zacchaeus Ashford",age:18,jobTitle:"Junior Developer",address:"5 New Street, Town, Country, Postcode"},{employeeNumber:6,name:"Dave Smith",age:33,jobTitle:"Analyst",address:"4 Extra Street, Town, County, Postcode"},{employeeNumber:7,name:"Amy Fox",age:27,jobTitle:"Analyst",address:"3 Main Street, Town, Country, Postcode"},{employeeNumber:8,name:"Mary Cooper",age:31,jobTitle:"Developer",address:"8 Main Street, Town, County, Postcode"},{employeeNumber:9,name:"Alice Cole",age:38,jobTitle:"Team Lead",address:"10 High Street, Town, Country, Postcode"},{employeeNumber:10,name:"Ben Fields",age:40,jobTitle:"Team Lead",address:"14 High Street, Town, Country, Postcode"},{employeeNumber:11,name:"Chrysanthemum Finnleigh Carrington Savannah Norton",age:32,jobTitle:"Analyst",address:"6 Key Street, Town, County, Postcode"},{employeeNumber:12,name:"Ashley Langford",age:29,jobTitle:"Developer",address:"7 Long Street, Town, Country, Postcode"},{employeeNumber:13,name:"Michael Hall",age:35,jobTitle:"Team Lead",address:"5 Long Street, Town, County, Postcode"},{employeeNumber:14,name:"David Frank",age:28,jobTitle:"Developer",address:"3 Side Street, Town, Country, Postcode"},{employeeNumber:15,name:"Bernadette Mariah Genevieve Maddison Lincoln",age:23,jobTitle:"Developer",address:"10 Main Street, Town, Country, Postcode"},{employeeNumber:16,name:"Will Barns",age:36,jobTitle:"Analyst",address:"1 New Street, Town, County, Postcode"},{employeeNumber:17,name:"Elizabeth Long",age:43,jobTitle:"Analyst",address:"9 Short Street, Town, Country, Postcode"},{employeeNumber:18,name:"Keith Jones",age:37,jobTitle:"Developer",address:"11 Main Street, Town, County, Postcode"},{employeeNumber:19,name:"Olivia Brown",age:19,jobTitle:"Trainee Analyst",address:"4 Side Street, Town, Country, Postcode"},{employeeNumber:20,name:"Tim Green",age:50,jobTitle:"Developer",address:"2 Long Street, Town, Country, Postcode"}],et=[{key:"header",title:"Job type",dataType:"string"},{key:"firstName",title:"First name",dataType:"string"},{key:"lastName",title:"Last name",dataType:"string"},{key:"age",title:"Age",dataType:"number"},{key:"jobTitle",title:"Job title",dataType:"string"},{key:"address",title:"Address",dataType:"address"}],kt=u.map((a,e)=>({...a,rowOptions:{header:Ke[e]}})),Ot=[{key:"actions",title:"Actions",dataType:"element",columnAlignment:{horizontal:"center"}},{key:"firstName",title:"First name",dataType:"string"},{key:"actions2",title:"Actions2",dataType:"element",columnAlignment:{horizontal:"center"}},{key:"age",title:"Age",dataType:"number"},{key:"jobTitle",title:"Job title",dataType:"string"},{key:"address",title:"Address",dataType:"address"}],Lt=[{key:"actions",title:"Actions",dataType:"element",columnAlignment:{horizontal:"center"}},{key:"firstName",title:"First name",dataType:"string"},{key:"age",title:"Age",dataType:"number"},{key:"jobTitle",title:"Job title",dataType:"string"},{key:"address",title:"Address",dataType:"address"}],Pe=[{firstName:{data:"Joe",href:"https://www.example.com",target:"_blank",rel:"noopener noreferrer"},age:30,jobTitle:"Developer",address:"1 Main Street, Town, County, Postcode"},{firstName:{data:"Sarah",href:"https://www.example.org/"},age:28,jobTitle:"Senior Software Developer, Site Reliability Engineering",address:"2 Main Street, Town, Country, Postcode"},{firstName:"Mark",age:45,jobTitle:"Team Lead",address:"12 Key Street, Town, Country, Postcode"},{firstName:"Naomi",age:32,jobTitle:"Analyst",address:"8 Side Street, Town, Country, Postcode"},{firstName:"Luke",age:18,jobTitle:"Junior Developer",address:"5 New Street, Town, Country, Postcode"}],$e=[...Pe,{firstName:"Dave",age:33,jobTitle:"Analyst",address:"4 Extra Street, Town, County, Postcode"},{firstName:"Amy",age:27,jobTitle:"Analyst",address:"3 Main Street, Town, Country, Postcode"},{firstName:"Mary",age:31,jobTitle:"Developer",address:"8 Main Street, Town, County, Postcode"},{firstName:"Alice",age:38,jobTitle:"Team Lead",address:"10 High Street, Town, Country, Postcode"},{firstName:"Ben",age:40,jobTitle:"Team Lead",address:"14 High Street, Town, Country, Postcode"}],xt=[{firstName:"Nigel",lastName:null,age:62,jobTitle:"Developer",address:"1 Main Street, Town, County, Postcode"},{firstName:"Sarah",lastName:"Smith",age:28,jobTitle:void 0,address:"2 Main Street, Town, Country, Postcode"},{firstName:"Mark",lastName:"Owens",age:45,jobTitle:"Team Lead",address:""}],Ht=[{firstName:{data:"Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe",description:{data:"Alias: JB",icon:Se},icon:De},lastName:"Bloggs",age:30,jobTitle:"Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer",address:"N/A"},{firstName:{data:"Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe"},lastName:"Bloggs",age:30,jobTitle:"Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer",address:"N/A"},{firstName:{data:"Joey",description:{data:"Unverified",icon:wt}},lastName:"Bloggy",age:31,jobTitle:"Developer",address:"N/A"},{firstName:{description:"Alias: The Ghost"},lastName:"Blogger",age:32,jobTitle:"Writer",address:"N/A"}],Jt=[{firstName:{data:"Joe",description:{data:"The name of Joe",icon:'<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Z"/></svg>'}},lastName:"Bloggs",age:30,jobTitle:"Developer",address:"1 Main Street, Town, County, Postcode"},{firstName:{data:"Sarah",description:{data:"The name of Sarah",icon:'<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Z"/></svg>'}},lastName:"Smith",age:28,jobTitle:"Senior Software Developer, Site Reliability Engineering",address:"2 Main Street, Town, Country, Postcode"},{firstName:{data:"Mark",description:{data:"The name of Mark",icon:'<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Z"/></svg>'}},lastName:"Owens",age:45,jobTitle:"Team Lead",address:"12 Key Street, Town, Country, Postcode"},{firstName:{data:"Naomi",description:{data:"The name of Naomi",icon:'<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Z"/></svg>'}},lastName:"Thomas",age:32,jobTitle:"Analyst",address:"8 Side Street, Town, Country, Postcode"},{firstName:"Luke",lastName:"Ashford",age:{data:18,description:{data:"The age of Luke",icon:'<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Z"/></svg>'}},jobTitle:{data:"Junior Developer",description:{data:"The job title of Luke",icon:'<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Z"/></svg>'}},address:"5 New Street, Town, Country, Postcode"}],Rt={title:"React Components/Data Table",component:l,parameters:{componentAPI:{data:dt}}},I={render:()=>t.createElement(l,{caption:"Basic",columns:g,data:u}),name:"Basic"},P={render:()=>t.createElement(l,{caption:"Embedded",columns:g,data:u,embedded:!0}),name:"Embedded"},N={render:()=>t.createElement(l,{caption:"Dense",columns:g,data:u,density:"dense"}),name:"Dense"},de={render:()=>t.createElement(l,{caption:"Spacious",columns:g,data:u,density:"spacious"}),name:"Spacious"},_={render:()=>{const[a,e]=T.useState(!1);return t.createElement(t.Fragment,null,t.createElement(l,{caption:"Sticky Header",columns:ye,data:A,stickyColumnHeaders:a,style:{height:"366px"}}),t.createElement("div",{style:{display:"flex",gap:"8px",marginTop:"8px"}},t.createElement(d,{onClick:()=>e(!0)},"Stick Header"),t.createElement(d,{onClick:()=>e(!1)},"Unstick Header")))},name:"Sticky column headers"},k={render:()=>t.createElement(l,{style:{height:"400px",width:"500px"},caption:"Column Header Truncation",columns:g,data:u,columnHeaderTruncation:!0}),name:"Column header truncation"},O={render:()=>t.createElement(l,{caption:"Row Headers",columns:et,data:kt}),name:"Row headers"},L={render:()=>t.createElement(l,{caption:"Sort",columns:g,data:u,sortable:!0}),name:"Sort"},x={render:()=>t.createElement(l,{caption:"Sort Options",columns:g,data:u,sortable:!0,sortOptions:{sortOrders:["descending","unsorted"],defaultColumn:"firstName"}}),name:"Sort options"},H={render:()=>{const a=[...u],e=({columnName:n,sorted:o})=>{o==="ascending"?a.sort((r,i)=>r[n]<i[n]?-1:r[n]>i[n]?1:0):o==="descending"&&a.sort((r,i)=>r[n]<i[n]?1:r[n]>i[n]?-1:0)};return t.createElement(l,{columns:g,data:a,caption:"Disable auto sort",sortable:!0,disableAutoSort:!0,onIcSortChange:n=>e(n.detail),sortOptions:{sortOrders:["ascending","descending"]}})},name:"Disable sort"},J={render:()=>{const a=[...u],e=({columnName:n,sorted:o})=>{if(console.log("Sort changed",n,o),n!=="firstName")return;const r=o==="ascending";a.sort((i,s)=>i[n]<s[n]?r?-1:1:i[n]>s[n]?r?1:-1:0),console.log("Custom sort applied")};return t.createElement(l,{columns:St,data:a,caption:"Disable auto sort on columns",sortable:!0,onIcSortChange:n=>e(n.detail),sortOptions:{sortOrders:["ascending","descending"]}})},name:"Disable sort on columns"},R={render:()=>t.createElement(l,{caption:"Sort",columns:Dt,data:u,sortable:!0}),name:"Exclude columns from sort"},B={render:()=>{const[a,e]=T.useState(At),n=o=>{const r=a.map(i=>i.key==="age"?{...i,hidden:o}:i);e(r)};return t.createElement(t.Fragment,null,t.createElement(l,{caption:"Hide Column",columns:a,data:u}),t.createElement("div",{style:{display:"flex",gap:"8px",marginTop:"8px"}},t.createElement(d,{onClick:()=>n(!1)},"Show Age"),t.createElement(d,{onClick:()=>n(!0)},"Hide Age")))},name:"Column visibility"},M={render:()=>t.createElement(l,{caption:"Pagination",columns:ye,data:A,showPagination:!0,paginationBarOptions:{itemsPerPageOptions:[{label:"5",value:"5"},{label:"10",value:"10"},{label:"15",value:"15"}],showItemsPerPageControl:!0,showGoToPageControl:!0}}),name:"Pagination"},$={render:()=>t.createElement(l,{caption:"Column Overrides",columns:ft,data:u}),name:"Column overrides"},j={render:()=>t.createElement(l,{caption:"Row Overrides",columns:et,data:Pt}),name:"Row overrides"},G={render:()=>t.createElement(l,{caption:"Cell Overrides",columns:g,data:It}),name:"Cell overrides"},W={render:()=>t.createElement(l,{caption:"Default Empty State",columns:g}),name:"Default empty state"},q={render:()=>t.createElement(l,{caption:"Slotted Empty State",columns:g},t.createElement(lt,{slot:"empty-state",aligned:"left",heading:"Data source error",body:"Error loading new data"},t.createElement(d,{slot:"actions"},"Retry"))),name:"Slotted empty state"},U={render:()=>t.createElement(l,{caption:"Loading state",columns:g,data:u,loading:!0}),name:"Loading state",height:"720px"},F={render:()=>t.createElement(l,{caption:"Updating state",columns:g,data:u,updating:!0,updatingOptions:{progress:30}}),name:"Updating state"},Z={render:()=>t.createElement(l,{caption:"Links and slotted elements in data",columns:Ot,data:Pe,showPagination:!0,rowSelection:!0,onIcSelectedRowChange:a=>console.log(a.detail),onIcSelectAllRows:a=>console.log(a.detail)},Pe.map((a,e)=>t.createElement(t.Fragment,null,t.createElement(d,{key:`actions-${e}`,variant:"destructive",slot:`actions-${e}`,title:"Delete row (top level tooltip)",onClick:()=>console.log("Delete")},"Delete"),t.createElement("div",{key:`actions2-${e}`,slot:`actions2-${e}`},t.createElement(d,{variant:"icon-tertiary","aria-label":"Delete row (nested tooltip)",onClick:()=>console.log("Delete")},t.createElement(v,{path:ot,viewBox:"0 0 24 24"})))))),name:"Links and elements in data"},pe={render:()=>t.createElement(l,{caption:"Slotted elements with pagination",columns:Lt,data:$e,showPagination:!0,paginationBarOptions:{itemsPerPageOptions:[{label:"5",value:"5"},{label:"10",value:"10"}],showItemsPerPageControl:!0,selectedItemsPerPage:5}},$e.map((a,e)=>{const n=T.useRef();return t.createElement("div",{key:`actions-${e}`,slot:`actions-${e}`},t.createElement(d,{id:`popover-anchor-${e}`,onClick:()=>{n.current&&(n.current.open=!n.current.open)}},e+1),t.createElement(st,{ref:n,anchor:`popover-anchor-${e}`,"aria-label":"popover"},t.createElement(Le,{label:"Copy code"}),t.createElement(Le,{label:"Logout",variant:"destructive"})))})),name:"Slotted elements with pagination"},z={render:()=>t.createElement(l,{caption:"Custom icons",columns:Nt,data:_t},t.createElement(v,{slot:"age-column-icon",path:Oe}),t.createElement(v,{slot:"firstName-0-icon",path:Oe})),name:"Custom icons"},V={render:()=>t.createElement(l,{caption:"Custom Row Heights",columns:g,data:u,globalRowHeight:80,variableRowHeight:({firstName:a,lastName:e})=>a==="Joe"||e==="Owens"?200:null}),name:"Custom row heights"},X={render:()=>{const[a,e]=T.useState(40),n=o=>{e(o)};return t.createElement(t.Fragment,null,t.createElement(l,{caption:"Truncating tooltip",columns:Ye,data:Qe,truncationPattern:"tooltip",globalRowHeight:a}),t.createElement("div",{style:{display:"flex",gap:"8px",paddingBlock:"8px"}},t.createElement(d,{onClick:()=>n(80)},"Set globalRowHeight to 80"),t.createElement(d,{onClick:()=>n(40)},"Reset globalRowHeight to 40")))},name:"Data truncation tooltip"},me={render:()=>{const[a,e]=T.useState(40),n=o=>{e(o)};return t.createElement(t.Fragment,null,t.createElement(l,{caption:"Truncating show hide",columns:Ye,data:Qe,truncationPattern:"show-hide",globalRowHeight:a}),t.createElement("div",{style:{display:"flex",gap:"8px",paddingBlock:"8px"}},t.createElement(d,{onClick:()=>n(80)},"Set globalRowHeight to 80"),t.createElement(d,{onClick:()=>n(40)},"Reset globalRowHeight to 40")))},name:"Data truncation see more / see less"},K={render:()=>t.createElement(l,{caption:"Truncating Cell Data",columns:Et,data:Ct}),name:"Text wrap"},Y={render:()=>t.createElement(l,{caption:"Custom Title Bar",columns:g,data:u},t.createElement(je,{slot:"title-bar",description:"Data table description that describes the purpose of the table.",metadata:"128 items | 32gb | Updated: 01/02/03"},t.createElement(d,{slot:"primary-action"},"Primary"),t.createElement(d,{slot:"custom-actions",variant:"icon-tertiary","aria-label":"Icon 1"},t.createElement(v,{path:we,viewBox:"0 0 24 24"})),t.createElement(d,{slot:"custom-actions",variant:"icon-tertiary","aria-label":"Icon 2"},t.createElement(v,{path:we,viewBox:"0 0 24 24"})),t.createElement(d,{slot:"custom-actions",variant:"icon-tertiary","aria-label":"Icon 3"},t.createElement(v,{path:we,viewBox:"0 0 24 24"})),t.createElement(rt,{slot:"description",variant:"body"},t.createElement("p",null,"This is some text and"," ",t.createElement(it,{href:"/",inline:""},"this is an inline link")," ","within the text.")))),name:"Custom title bar"},Q={render:()=>{const[a,e]=T.useState([]),[n,o]=T.useState([{label:"5",value:"5"}]),r=()=>{e([...a,...A])},i=()=>{e([])},s=()=>{o([{label:"10",value:"10"},{label:"20",value:"20"},{label:"50",value:"50"}])},y=()=>{o([{label:"5",value:"5"}])};return t.createElement(t.Fragment,null,t.createElement(l,{caption:"Updating Data",columns:ye,data:a,showPagination:!0,paginationBarOptions:{itemsPerPageOptions:n,showItemsPerPageControl:!0,showGoToPageControl:!0,rangeLabelType:"page"}}),t.createElement("div",{style:{display:"flex",gap:"8px",marginTop:"8px"}},t.createElement(d,{onClick:r},"Add data"),t.createElement(d,{onClick:s},"Update page lengths"),t.createElement(d,{onClick:i},"Reset data"),t.createElement(d,{onClick:y},"Reset page lengths")))},name:"Updating data example"},ee={render:()=>{const[a,e]=T.useState(5),[n,o]=T.useState(!1),[r,i]=T.useState(A);T.useEffect(()=>{setTimeout(()=>{o(!0)},2e3)});const s=c=>{e(c.detail.value),i(A.slice(0,a))},y=c=>{const m=(c.detail.value-1)*a;i(A.slice(m,m+a))};return t.createElement(l,{caption:"Slotted pagination bar",columns:ye,data:r},n&&t.createElement(ct,{slot:"pagination-bar",showItemsPerPageControl:!0,totalItems:A.length,itemsPerPageOptions:[{label:"5",value:"5"},{label:"10",value:"10"}],onIcItemsPerPageChange:s,onIcPageChange:y}))},name:"Slotted pagination bar"},te={render:()=>t.createElement(l,{caption:"Basic Table",columns:ke,data:u,width:"800px",tableLayout:"auto"}),name:"Table sizing and column width"},ae={render:()=>t.createElement(l,{caption:"Action Element",columns:g,data:u},t.createElement("div",{slot:"firstName-0-action-element",style:{display:"flex"}},t.createElement(d,{variant:"icon",size:"small","aria-label":"Download data",onClick:()=>alert("Download button clicked")},t.createElement(v,{path:tt,viewBox:"0 0 24 24"})),t.createElement(d,{variant:"icon",size:"small","aria-label":"Call phone",onClick:()=>alert("Cellphone button clicked")},t.createElement(v,{path:at,viewBox:"0 0 24 24"})),t.createElement(d,{variant:"icon",size:"small","aria-label":"Copy data",onClick:()=>alert("Copy button clicked")},t.createElement(v,{path:nt,viewBox:"0 0 24 24"})))),name:"Action element"},ne={render:()=>t.createElement(l,{caption:"Missing cell data",columns:g,data:xt}),name:"Missing cell data"},oe={render:()=>t.createElement(l,{caption:"Description and icons within cells",columns:ke,data:Jt,tableLayout:"auto"}),name:"Description and icons within cells"},ue={render:()=>t.createElement(l,{caption:"Basic Table",columns:ke,data:Ht,tableLayout:"auto"}),name:"Description and icons within cells with long text"},re={render:()=>t.createElement(l,{caption:"Select rows with checkbox",columns:g,data:u,rowSelection:!0,onIcSelectedRowChange:a=>console.log(a.detail),onIcSelectAllRows:a=>console.log(a.detail)}),name:"Select rows with checkbox"},ve=({type:a})=>{const e="ic-table"+(a?" ic-table-"+a:"");return t.createElement("table",{class:e},t.createElement("thead",null,t.createElement("tr",null,t.createElement("th",null,"First name"),t.createElement("th",null,"Last name"),t.createElement("th",null,"Age"),t.createElement("th",null,"Job title"))),t.createElement("tbody",null,t.createElement("tr",null,t.createElement("td",null,"Joe"),t.createElement("td",null,"Ashford"),t.createElement("td",null,"30"),t.createElement("td",null,"Developer")),t.createElement("tr",null,t.createElement("td",null,"Sarah"),t.createElement("td",null,"Smith"),t.createElement("td",null,"28"),t.createElement("td",null,"Senior Software Developer")),t.createElement("tr",null,t.createElement("td",null,"Mark"),t.createElement("td",null,"Owens"),t.createElement("td",null,"45"),t.createElement("td",null,"Team Lead"))))},ie={render:()=>t.createElement("div",{style:{color:"var(--ic-color-text-primary)"}},t.createElement("h4",null,"Styled native <table>"),t.createElement("br",null),t.createElement("code",null,'<table class="ic-table">'),t.createElement("br",null),t.createElement("br",null),t.createElement(ve,null),t.createElement("br",null),t.createElement("br",null),t.createElement("h4",null,"Dense native <table>"),t.createElement("br",null),t.createElement("code",null,'<table class="ic-table ic-table-dense">'),t.createElement("br",null),t.createElement("br",null),t.createElement(ve,{type:"dense"}),t.createElement("br",null),t.createElement("br",null),t.createElement("h4",null,"Spacious native <table>"),t.createElement("br",null),t.createElement("code",null,'<table class="ic-table ic-table-spacious">'),t.createElement("br",null),t.createElement("br",null),t.createElement(ve,{type:"spacious"}),t.createElement("br",null),t.createElement("br",null),t.createElement("h4",null,"Embedded native <table>"),t.createElement("br",null),t.createElement("code",null,'<table class="ic-table ic-table-embedded">'),t.createElement("br",null),t.createElement("br",null),t.createElement(ve,{type:"embedded"})),name:"Styled native tables"},Bt={caption:"Screen reader caption for data table",columnHeaderTruncation:!0,columns:ye,data:A,defaultColumn:"",density:"default",disableAutoSort:!1,embedded:!1,globalRowHeight:40,height:"",hideColumnHeaders:!1,hideDensitySelect:!1,loading:!1,loadingDesc:"loading",loadingLabel:"Loading data...",loadingLabelDuration:20,loadingMax:100,loadingMin:0,loadingProgress:50,loadingOverlay:!1,minimumLoadingDisplayDuration:1e3,paginationItemsPerPageOptions:[{label:"5",value:"5"},{label:"10",value:"10"},{label:"15",value:"15"}],paginationRangeLabelType:"page",paginationSelectedItemsPerPage:5,paginationSelectItemsPerPageOnEnter:!0,paginationSetToFirstPageOnPaginationChange:!1,paginationShowGoToPageControl:!0,paginationShowItemsPerPageControl:!0,paginationType:"simple",paginationAlignment:"right",paginationItemLabel:"Item",paginationPageLabel:"Page",paginationHideRangeLabel:!1,paginationHideCurrentPage:!1,paginationHideFirstAndLastPageButton:!1,rowSelection:!1,showPagination:!0,sortable:!1,sortOrders:["unsorted","ascending","descending"],stickyColumnHeaders:!1,stickyRowHeaders:!1,tableLayout:"fixed",theme:"inherit",titleBarSlot:!0,titleBarDesc:"Title bar description",titleBarHeading:"Title bar heading",truncationPattern:"tooltip",titleBarMetadata:"128 items | 32gb | Updated: 01/02/03",titleBarPrimaryActionSlot:!0,titleBarCustomActionSlot:!0,updating:!1,updatingDesc:"loading",updatingMax:100,updatingMin:0,updatingProgress:50,width:""},se={render:a=>t.createElement(l,{caption:a.caption,columnHeaderTruncation:a.columnHeaderTruncation,columns:a.columns,data:a.data,density:a.density,disableAutoSort:a.disableAutoSort,embedded:a.embedded,globalRowHeight:a.globalRowHeight,height:a.height,hideColumnHeaders:a.hideColumnHeaders,loading:a.loading,loadingOptions:{description:a.loadingDesc,label:a.loadingLabel,labelDuration:a.loadingLabelDuration,max:a.loadingMax,min:a.loadingMin,progress:a.loadingProgress,overlay:a.loadingOverlay},minimumLoadingDisplayDuration:a.minimumLoadingDisplayDuration,paginationBarOptions:{itemsPerPageOptions:a.paginationItemsPerPageOptions,rangeLabelType:a.paginationRangeLabelType,type:a.paginationType,selectedItemsPerPage:a.paginationSelectedItemsPerPage,selectItemsPerPageOnEnter:a.paginationSelectItemsPerPageOnEnter,setToFirstPageOnPaginationChange:a.paginationSetToFirstPageOnPaginationChange,showGoToPageControl:a.paginationShowGoToPageControl,showItemsPerPageControl:a.paginationShowItemsPerPageControl,alignment:a.paginationAlignment,pageLabel:a.paginationPageLabel,itemLabel:a.paginationItemLabel,hideRangeLabel:a.paginationHideRangeLabel,hideCurrentPage:a.paginationHideCurrentPage,hideFirstAndLastPageButton:a.paginationHideFirstAndLastPageButton},rowSelection:a.rowSelection,showPagination:a.showPagination,sortable:a.sortable,sortOptions:{sortOrders:a.sortOrders,defaultColumn:a.defaultColumn},stickyColumnHeaders:a.stickyColumnHeaders,stickyRowHeaders:a.stickyRowHeaders,tableLayout:a.tableLayout,theme:a.theme,truncationPattern:a.truncationPattern,updating:a.updating,updatingOptions:{description:a.updatingDesc,max:a.updatingMax,min:a.updatingMin,progress:a.updatingProgress},width:a.width},t.createElement(je,{slot:a.titleBarSlot,description:a.titleBarDesc,heading:a.titleBarHeading,hideDensitySelect:a.hideDensitySelect,metadata:a.titleBarMetadata},t.createElement(d,{slot:a.titleBarPrimaryActionSlot},"Primary"),t.createElement(d,{slot:a.titleBarCustomActionSlot,variant:"icon-tertiary","aria-label":"Icon 1"},t.createElement(v,{path:we,viewBox:"0 0 24 24"})))),args:Bt,argTypes:{density:{options:["default","dense","spacious"],control:{type:"inline-radio"}},globalRowHeight:{control:{type:"text"}},paginationRangeLabelType:{options:["page","data"],control:{type:"inline-radio"}},paginationType:{options:["simple","complex"],control:{type:"inline-radio"}},paginationAlignment:{options:["left","right","space-between"],control:{type:"inline-radio"}},tableLayout:{options:["fixed","auto"],control:{type:"inline-radio"}},truncationPattern:{options:["tooltip","show-hide"],control:{type:"inline-radio"}},titleBarSlot:{mapping:{true:"title-bar",false:""}},titleBarPrimaryActionSlot:{mapping:{true:"primary-action",false:""}},titleBarCustomActionSlot:{mapping:{true:"custom-actions",false:""}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Basic" columns={COLS} data={DATA} />,
  name: "Basic"
}`,...I.parameters?.docs?.source},description:{story:`Use the data table component to display data in a tabular form.

There are two required props for data table:
- caption: \`string\`
- columns: \`IcDataTableColumnObject[]\`

Click the 'Component API' tab to view all the available props, events and slots for data tables.

To use the data table component, import \`@ukic/canary-react\` into your application.`,...I.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Embedded" columns={COLS} data={DATA} embedded />,
  name: "Embedded"
}`,...P.parameters?.docs?.source},description:{story:"The `embedded` boolean adds a border around the table so it can be added as a standalone table and is not required to stretch the full width of its parent container.",...P.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Dense" columns={COLS} data={DATA} density="dense" />,
  name: "Dense"
}`,...N.parameters?.docs?.source},description:{story:"The `density` variant provides three different styles for the data table:\n- `dense` reduces the padding and font size of the table cells to give the data a more dense style.\n- `default` provides a padding of `8px` which is the default spacing. This variant is seen in the first [basic](#basic) example.\n- `spacious` gives the data table a more spacious look and feel by increasing the vertical padding as well as the font size.",...N.parameters?.docs?.description}}};de.parameters={...de.parameters,docs:{...de.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Spacious" columns={COLS} data={DATA} density="spacious" />,
  name: "Spacious"
}`,...de.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:"When a height for the data table is set, the scroll bar will appear to the right. However, by default, the column headers will move up and out of view making it difficult to understand what the data means.\nThis can be mitigated by using the `stickyColumnHeaders` prop which takes a boolean. This can be toggled within the example below.",..._.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IcDataTable style={{
      height: "400px",
      width: "500px"
    }} caption="Column Header Truncation" columns={COLS} data={DATA} columnHeaderTruncation />;
  },
  name: "Column header truncation"
}`,...k.parameters?.docs?.source},description:{story:"By default, column header labels will wrap when they exceed the column width. To keep the column header height constant, the `columnHeaderTruncation` can be used. When set to `true`, the label will appear truncated and will display a tooltip with the full text when hovered over.",...k.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Row Headers" columns={ROW_HEADER_COLS} data={ROW_HEADER_DATA} />,
  name: "Row headers"
}`,...O.parameters?.docs?.source},description:{story:"Row headers allow headings to be added to individual rows and styles them as column headings. The column collection includes an additional `header` key which aligns with the row headers. The structure of the `header` column is the same as the columns (i.e. key, title, dataType).\nThe data array includes an additional `header` key within the `rowOptions` which takes a string intended to be the title of the row header.",...O.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Sort" columns={COLS} data={DATA} sortable />,
  name: "Sort"
}`,...L.parameters?.docs?.source},description:{story:"Set `sortable` to `true` to set the sort functionality on all columns. Sorting can be set to `unsorted`, `ascending` and `descending` by press the sort buttons next to the column heading.",...L.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Sort Options" columns={COLS} data={DATA} sortable sortOptions={{
    sortOrders: ["descending", "unsorted"],
    defaultColumn: "firstName"
  }} />,
  name: "Sort options"
}`,...x.parameters?.docs?.source},description:{story:"It is possible to change the sort options for the sort buttons. The `sortOptions` prop takes an object with `sortOrders` and `defaultColumn`. `sortOrders` allows the sort order to be amended as we all as remove a sort type. Such as changing the order to `descending`, `unsorted` and remove `ascending`. `defaultColumn` sets which column is ordered by default. This is set by padding the column key as the `defaultColumn` value.",...x.parameters?.docs?.description}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source},description:{story:"Set `sortable` to `true` and set `disable-auto-sort` to `true` to enable external sorting functionality.",...H.parameters?.docs?.description}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:"Alternatively, set `disableAutoSort` to `true` within the column object to have it apply only to certain columns that may require special custom sorting.",...J.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Sort" columns={COLS_EXCLUDE_SORT} data={DATA} sortable />,
  name: "Exclude columns from sort"
}`,...R.parameters?.docs?.source},description:{story:"Adding 'excludeColumnFromSort: true` to the column object excludes that column from displaying the sort button.",...R.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source},description:{story:"Adding 'hidden: true` to the column object hides that column. In this example, the Age column is hidden.",...B.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:"Pagination allows large data sets to be split into pages in order to make the data easier to digest. Setting `showPagination` to `true` will add the `IcPagination` component to the bottom of the table. There a several sub components within pagination which are set via the `paginationBarOptions` prop:\n- `itemsPerPageOptions` which allows customization of how many items appear on each page. This requires a collection with `label` and `value` key pairs.\n- `showItemsPerPageControl` which show or hides the `itemsPerPage` component.\n- `showGoToPageControl` displays controls which allows jumping between pages in a non-linear approach.",...M.parameters?.docs?.description}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Column Overrides" columns={COLS_ALIGNMENT} data={DATA} />,
  name: "Column overrides"
}`,...$.parameters?.docs?.source},description:{story:"There may be a requirement to style a column differently to the rest of the data to add emphasis. For example, centre align data within the 'first name' column. To do this, add `columnAlignment` to the column. `columnAlignment` takes an object which sets the `horizontal` and `vertical` property:\n- `horizontal` accepts `left`, `right` or `center`.\n- `vertical` accepts `top`, `middle`, `bottom`.\n\n`emphasis` can be added to the column by setting `high` or `low`.",...$.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Row Overrides" columns={ROW_HEADER_COLS} data={ROW_ALIGNMENT} />,
  name: "Row overrides"
}`,...j.parameters?.docs?.source},description:{story:"Row overrides allow styling to be applied at a row level and is set within the `rowOptions` object. The following row overrides options apply:\n- `rowAlignment` accepts `left`, `right` and `center`.\n- `emphasis` accepts `high` or `low`.\n- `textWrap` accepts `true` or `false`.",...j.parameters?.docs?.description}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Cell Overrides" columns={COLS} data={DATA_CELL_ALIGNMENT} />,
  name: "Cell overrides"
}`,...G.parameters?.docs?.source},description:{story:"Cell overrides allows styling to be applied at a cell level. The cell which requires an override accepts an object which requires `data` and can contain `cellAlignment` and/or `emphasis`:\n- `data` is the cell value.\n- `cellAlignment` accepts an object with the following key pairs:\n - `horizontal` accepts `left`, `right` or `center`.\n - `vertical` accepts `top`, `middle`, `bottom`.\n- `emphasis` accepts `high` or `low`.",...G.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Default Empty State" columns={COLS} />,
  name: "Default empty state"
}`,...W.parameters?.docs?.source},description:{story:"When the table receives no data (either `null` or an empty array) it will automatically show an `IcEmptyState` below the headers.",...W.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Slotted Empty State" columns={COLS}>
      <IcEmptyState slot="empty-state" aligned="left" heading="Data source error" body="Error loading new data">
        <IcButton slot="actions">Retry</IcButton>
      </IcEmptyState>
    </IcDataTable>,
  name: "Slotted empty state"
}`,...q.parameters?.docs?.source},description:{story:"You can customise your own `IcEmptyState` component and slot it into the data table using the `empty-state` slot, to reflect different scenarios.",...q.parameters?.docs?.description}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Loading state" columns={COLS} data={DATA} loading={true} />,
  name: "Loading state",
  height: "720px"
}`,...U.parameters?.docs?.source},description:{story:"When a user wants to fetch their data asynchronously, a `loading` prop can be set to `true`, which then renders a circular variant of the `IcLoadingIndicator`. The loading indicator can be customised using the `loadingOptions` prop:\n- `description` sets the aria-label of the component\n- `label` sets the visual message\n- `labelDuration` is the number of milliseconds before the label changes\n- `overlay` renders a dark overlay over the previous data set while new data is loaded\n\nIf it needs to be determinate, use `max`, `min` and `progress`.",...U.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Updating state" columns={COLS} data={DATA} updating={true} updatingOptions={{
    progress: 30
  }} />,
  name: "Updating state"
}`,...F.parameters?.docs?.source},description:{story:"If data in the table has changed, an `updating` prop has been supplied to show a linear `IcLoadingIndicator` just above the data rows.\n\nThis prop is also accompanied by an `updatingOptions` prop, which contains similar options to `loadingOptions`, minus `label` and `labelDuration` since the linear version is displayed.",...F.parameters?.docs?.description}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:"Custom HTML elements can be slotted or passed via the `data` prop to display in certain cells. When using the slotted method, the slot name follows the format of `{COLUMN_TAG}-{ROW_INDEX}`.",...Z.parameters?.docs?.description}}};pe.parameters={...pe.parameters,docs:{...pe.parameters?.docs,source:{originalSource:`{
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
}`,...pe.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Custom icons" columns={ICON_COLS} data={ICON_DATA}>
      <SlottedSVG slot="age-column-icon" path={mdiAccountGroup} />
      <SlottedSVG slot="firstName-0-icon" path={mdiAccountGroup} />
    </IcDataTable>,
  name: "Custom icons"
}`,...z.parameters?.docs?.source},description:{story:"Custom icons can be added to cells, columns and headers in the data table. To add it to headers, set the icon via the `columns` prop:\n```\nicon: {\n icon: //ICON_STRING_GOES_HERE,\n onAllCells: //Boolean to determine whether column header icon should be replicated on all cells in the column,\n hideOnHeader: //Boolean for whether this icon should only be shown on cells and not on the header,\n}\n```\n\nTo add icons to individual cells, they can be added through the `data` prop, in a similar method to overriding the cell. Cell icons take priority over the `onAllCells` prop, meaning specific cells can be made to stand out.\n\nBoth cells and headers can also have icons slotted in. Cells use the slot format: `{COLUMN_KEY}-{ROW_INDEX}-icon`, and headers use the format: `{COLUMN_KEY}-column-icon`. Slotted icons take priority over icons inserted via the `columns` and `data` props.",...z.parameters?.docs?.description}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Custom Row Heights" columns={COLS} data={DATA} globalRowHeight={80} variableRowHeight={({
    firstName,
    lastName
  }) => firstName === "Joe" || lastName === "Owens" ? 200 : null} />,
  name: "Custom row heights"
}`,...V.parameters?.docs?.source},description:{story:"A data table can have its rows use custom heights, to help display more data per row. This involves using the `globalRowHeight` prop, which applies this custom height to all rows.\n\nFor a more granular approach, `variableRowHeight` exists. This is passed through the data object for each row of data, as well as that row's `index`. Using these properties, you can write a custom function that will return a number for that row's height based on your criteria.\nReturning `null` from this function means that the row will use the `globalRowHeight` property value.\n\n**_NOTE:_** If the data table uses the `density` prop, then your custom value will be scaled depending on the density, in order to keep content readable as the text size changes:\n- `Dense` = 80% of `globalRowHeight` or `variableRowHeight`\n- `Spacious` = 120% of `globalRowHeight` or `variableRowHeight`\n\nE.G: If `globalRowHeight` = 100, a dense table will set the height to be **_80_**.\n\n**_NOTE:_** If a cell has a description (see \"Description and icons within cells\"), then the row height for that individual row will be increased by the description height in order to fully display it.\n\nE.G: If `globalRowHeight` = 100 and a cell has a description with a height of 20, then the row height for that cell's row will be set to **_120_**.\n\nTo quickly reset all row heights to the default, you can run the `resetRowHeights` method.\n\nIf you'd rather let the row calculate its own height based on its content, either set `globalRowHeight` to `auto`, or return `auto` from `variableRowHeight`.",...V.parameters?.docs?.description}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:'When a row is given a set height, and has content that no longer fits into the cell area, the content becomes truncated. There are two types of truncation:\n- `tooltip`: Adds a line-clamp to the cell and displays the message in a tooltip.\n- `show-hide`: Adds a `See more/See less` button underneath the cell text, allowing the user to display the full content should they wish.\n\nThese values are set using the `truncationPattern` property.\n\nBy default, `globalRowHeight` is set to `auto`. If the `truncationPattern` attribute is set to `tooltip` or `show-hide` while `globalRowHeight` is `auto`, the data will not appear truncated due to the row height being set to the data which has the most height.\n\nTo see the data truncated, the `globalRowHeight` or `variableRowHeight` needs to be explicitly set to a height which is shorter than data which has the most lines.\n\n**_NOTE:_** `truncation-pattern` only applies to a cell\'s main data value. If a cell has a description (see "Description and icons within cells") then this will not be truncated and will still be visible beyond the truncation.',...X.parameters?.docs?.description}}};me.parameters={...me.parameters,docs:{...me.parameters?.docs,source:{originalSource:`{
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
}`,...me.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Truncating Cell Data" columns={COLUMNS_TEXT_WRAP} data={TEXT_WRAP_LONG_DATA} />,
  name: "Text wrap"
}`,...K.parameters?.docs?.source},description:{story:`Text can be set to wrap in a particular column, row or cell.

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
\`\`\``,...K.parameters?.docs?.description}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:'To add additional information about the data held in your data table, you can use the `title-bar` slot to add an `IcDataTableTitleBar`, which will appear above the column headers.\n\nThe title bar can have a description and metadata added, to provide supporting information to display some context about the data to the user. Primary and custom action slots also exist to allow for actions to be performed that are related to the data, which can be prominently displayed.\n\nThe `IcDataTableTitleBar` has a built-in density selector, which allows a user to quickly change the size and padding of cells to make it more readable. This can also be hidden if preferred.\n\nMore details on `IcDataTableTitleBar` can be found in the <ic-link href="/?path=/docs/react-components-data-table-title-bar--docs" inline="">data table title bar documentation</ic-link>.',...Y.parameters?.docs?.description}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:'The example below demonstrates how the pagination bar responds to changes within the data.\n\nMore details on `IcPaginationBar` can be found in the <ic-link href="/?path=/docs/react-components-pagination-bar--docs" inline="">pagination bar documentation</ic-link>.',...Q.parameters?.docs?.description}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
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
}`,...ee.parameters?.docs?.source},description:{story:"There may be scenarios when using `IcDataTable` when pagination and data fetching is done using a backend API.\n\nTo enable this behaviour, the `pagination-bar` slot can be utilised to provide a custom `IcPaginationBar` component, allowing the user to have more control over how their data is displayed & interacted with.",...ee.parameters?.docs?.description}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Basic Table" columns={COLS_WIDTH} data={DATA} width="800px" tableLayout="auto" />,
  name: "Table sizing and column width"
}`,...te.parameters?.docs?.source},description:{story:"The dimensions of the data table can be set using the `width` and `height` prop. The prop accepts dimensions in `px`, `%`, `rem` and `auto`.\n\nBy default, the width is set to `100%` so the table spans across the viewport or parent container.\n\nTo set the column widths, the `columnWidth` property should be added to the relevant column within the column array.\n\nThe [table layout](https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout) prop is vital to how the table resizing and column widths behave. By default, the table layout is set to `fixed`. If no column width is set, the columns widths will be equally set within the viewport or parent container.\n\nA table with a `fixed` layout will force the table column widths to take precedence over the data with the table cells.\n\nFor the column widths to be dictated by the content inside, set the `tableLayout` prop to `auto` and set the table `width` to `auto`.\n\nTo set the min and max width of a table cell, set the `table-layout` attribute to `auto` and set a `minWidth` or `maxWidth` value into `columnWidth`. The min and max width accepts dimensions in `px`, `%`, `rem`.",...te.parameters?.docs?.description}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
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
}`,...ae.parameters?.docs?.source},description:{story:"The cells can contain a slotted `actionElement`. The `actionElement` will be displayed to the right of the cell data.",...ae.parameters?.docs?.description}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Missing cell data" columns={COLS} data={DATA_WITH_EMPTY_VALUES} />,
  name: "Missing cell data"
}`,...ne.parameters?.docs?.source},description:{story:"An example showing the table being able to handle empty cell values (null, undefined or empty string).",...ne.parameters?.docs?.description}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Description and icons within cells" columns={COLS_WIDTH} data={DATA_ELEMENTS_WITH_DESCRIPTIONS} tableLayout="auto" />,
  name: "Description and icons within cells"
}`,...oe.parameters?.docs?.source},description:{story:`Descriptions and icons can be included in the cells by proving a \`description\` field in the data. This will populate the cell with an icon (if provided) and a text string underneath the cell data. This can be applied to any cell.

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
\`\`\``,...oe.parameters?.docs?.description}}};ue.parameters={...ue.parameters,docs:{...ue.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Basic Table" columns={COLS_WIDTH} data={LONG_DATA_ELEMENTS_WITH_DESCRIPTIONS} tableLayout="auto" />,
  name: "Description and icons within cells with long text"
}`,...ue.parameters?.docs?.source}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
  render: () => <IcDataTable caption="Select rows with checkbox" columns={COLS} data={DATA} rowSelection onIcSelectedRowChange={ev => console.log(ev.detail)} onIcSelectAllRows={ev => console.log(ev.detail)} />,
  name: "Select rows with checkbox"
}`,...re.parameters?.docs?.source},description:{story:"By setting `rowSelection` to `true`, `IcCheckbox` elements will appear in the leftmost column, with one in the header.\nWhen checked, the corresponding row will be selected, with the `icSelectedRowChange` containing the selected row and an array of all the currently selected rows.\n\nWhen checking the header checkbox, all rows will be selected, with the `icSelectAllRows` event being emitted with an array of all the rows. When using pagination, only the rows on the current page will be selected.",...re.parameters?.docs?.description}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
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
}`,...ie.parameters?.docs?.source},description:{story:'A native HTML `<table>` element can easily be styled to look like an `ic-data-table`. Simply import `icds-table-style.css` from the `@ukic/web-components` package (`import "@ukic/web-components/dist/core/icds-table-style.css"`) and then add the `ic-table` class name to the `<table>` element.\n\nAdditional styling can be applied using other class names on the `<table>` element',...ie.parameters?.docs?.description}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`{
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
}`,...se.parameters?.docs?.source},description:{story:'Go to the <ic-link href="/?path=/story/react-components-data-table--playground">separate page for the playground example</ic-link> to view the prop controls.',...se.parameters?.docs?.description}}};const Mt=["Basic","Embedded","Dense","Spacious","StickyColumnHeaders","ColumnHeaderTruncation","RowHeaders","Sortable","SortOptions","DisableSort","DisableAutoSortOnColumns","ExcludeColumnsFromSort","HideColumnExample","Pagination","ColumnOverrides","RowOverrides","CellOverrides","DefaultEmptyState","SlottedEmptyState","LoadingState","UpdatingState","LinksElementsInData","SlottedElementsWithPagination","CustomIcons","CustomRowHeights","DataTruncationTooltip","DataTruncationShowHide","TextWrap","CustomTitleBar","UpdatingData","SlottedPaginationBar","TableSizingColumnWidth","ActionElement","MissingCellData","CellDescriptionsAndIcons","CellDescriptionsLongText","SelectRowsUsingCheckboxExample","StyledNativeTables","Playground"],qt=Object.freeze(Object.defineProperty({__proto__:null,ActionElement:ae,Basic:I,CellDescriptionsAndIcons:oe,CellDescriptionsLongText:ue,CellOverrides:G,ColumnHeaderTruncation:k,ColumnOverrides:$,CustomIcons:z,CustomRowHeights:V,CustomTitleBar:Y,DataTruncationShowHide:me,DataTruncationTooltip:X,DefaultEmptyState:W,Dense:N,DisableAutoSortOnColumns:J,DisableSort:H,Embedded:P,ExcludeColumnsFromSort:R,HideColumnExample:B,LinksElementsInData:Z,LoadingState:U,MissingCellData:ne,Pagination:M,Playground:se,RowHeaders:O,RowOverrides:j,SelectRowsUsingCheckboxExample:re,SlottedElementsWithPagination:pe,SlottedEmptyState:q,SlottedPaginationBar:ee,SortOptions:x,Sortable:L,Spacious:de,StickyColumnHeaders:_,StyledNativeTables:ie,TableSizingColumnWidth:te,TextWrap:K,UpdatingData:Q,UpdatingState:F,__namedExportsOrder:Mt,default:Rt},Symbol.toStringTag,{value:"Module"}));export{qt as I};
