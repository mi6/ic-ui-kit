import{R as a,J as I,F as d,E as le,G as Re,H as q,c as Ga,e as Ba,a as za,o as Pa,B as Wa,r as L,f as re}from"./iframe-Sg-cp6rk.js";var Ve=e=>e.type==="checkbox",oe=e=>e instanceof Date,U=e=>e==null;const Ia=e=>typeof e=="object";var _=e=>!U(e)&&!Array.isArray(e)&&Ia(e)&&!oe(e),Ma=e=>_(e)&&e.target?Ve(e.target)?e.target.checked:e.target.value:e,Ha=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,qa=(e,n)=>e.has(Ha(n)),$a=e=>{const n=e.constructor&&e.constructor.prototype;return _(n)&&n.hasOwnProperty("isPrototypeOf")},aa=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Y(e){let n;const r=Array.isArray(e);if(e instanceof Date)n=new Date(e);else if(e instanceof Set)n=new Set(e);else if(!(aa&&(e instanceof Blob||e instanceof FileList))&&(r||_(e)))if(n=r?[]:{},!r&&!$a(e))n=e;else for(const l in e)e.hasOwnProperty(l)&&(n[l]=Y(e[l]));else return e;return n}var Ue=e=>Array.isArray(e)?e.filter(Boolean):[],T=e=>e===void 0,b=(e,n,r)=>{if(!n||!_(e))return r;const l=Ue(n.split(/[,[\].]+?/)).reduce((o,c)=>U(o)?o:o[c],e);return T(l)||l===e?T(e[n])?r:e[n]:l};const ha={BLUR:"blur",FOCUS_OUT:"focusout"},P={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},K={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};a.createContext(null);var ja=(e,n,r,l=!0)=>{const o={defaultValues:n._defaultValues};for(const c in e)Object.defineProperty(o,c,{get:()=>{const f=c;return n._proxyFormState[f]!==P.all&&(n._proxyFormState[f]=!l||P.all),e[f]}});return o},B=e=>_(e)&&!Object.keys(e).length,Ja=(e,n,r,l)=>{r(e);const{name:o,...c}=e;return B(c)||Object.keys(c).length>=Object.keys(n).length||Object.keys(c).find(f=>n[f]===P.all)},Ke=e=>Array.isArray(e)?e:[e];function Ka(e){const n=a.useRef(e);n.current=e,a.useEffect(()=>{const r=!e.disabled&&n.current.subject&&n.current.subject.subscribe({next:n.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}var $=e=>typeof e=="string",Ya=(e,n,r,l,o)=>$(e)?(l&&n.watch.add(e),b(r,e,o)):Array.isArray(e)?e.map(c=>(l&&n.watch.add(c),b(r,c))):(l&&(n.watchAll=!0),r),ta=e=>/^\w*$/.test(e),Sa=e=>Ue(e.replace(/["|']|\]/g,"").split(/\.|\[/));function S(e,n,r){let l=-1;const o=ta(n)?[n]:Sa(n),c=o.length,f=c-1;for(;++l<c;){const E=o[l];let x=r;if(l!==f){const V=e[E];x=_(V)||Array.isArray(V)?V:isNaN(+o[l+1])?{}:[]}e[E]=x,e=e[E]}return e}var Qa=(e,n,r,l,o)=>n?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[l]:o||!0}}:{};const ea=(e,n,r)=>{for(const l of r||Object.keys(e)){const o=b(e,l);if(o){const{_f:c,...f}=o;if(c&&n(c.name)){if(c.ref.focus){c.ref.focus();break}else if(c.refs&&c.refs[0].focus){c.refs[0].focus();break}}else _(f)&&ea(f,n)}}};var va=e=>({isOnSubmit:!e||e===P.onSubmit,isOnBlur:e===P.onBlur,isOnChange:e===P.onChange,isOnAll:e===P.all,isOnTouch:e===P.onTouched}),pa=(e,n,r)=>!r&&(n.watchAll||n.watch.has(e)||[...n.watch].some(l=>e.startsWith(l)&&/^\.\w+/.test(e.slice(l.length)))),Xa=(e,n,r)=>{const l=Ue(b(e,r));return S(l,"root",n[r]),S(e,r,l),e},ae=e=>typeof e=="boolean",la=e=>e.type==="file",X=e=>typeof e=="function",Ge=e=>{if(!aa)return!1;const n=e?e.ownerDocument:0;return e instanceof(n&&n.defaultView?n.defaultView.HTMLElement:HTMLElement)},Le=e=>$(e),ra=e=>e.type==="radio",Be=e=>e instanceof RegExp;const ya={value:!1,isValid:!1},ka={value:!0,isValid:!0};var Da=e=>{if(Array.isArray(e)){if(e.length>1){const n=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:n,isValid:!!n.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!T(e[0].attributes.value)?T(e[0].value)||e[0].value===""?ka:{value:e[0].value,isValid:!0}:ka:ya}return ya};const ga={isValid:!1,value:null};var Na=e=>Array.isArray(e)?e.reduce((n,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:n,ga):ga;function xa(e,n,r="validate"){if(Le(e)||Array.isArray(e)&&e.every(Le)||ae(e)&&!e)return{type:r,message:Le(e)?e:"",ref:n}}var se=e=>_(e)&&!Be(e)?e:{value:e,message:""},Ea=async(e,n,r,l,o)=>{const{ref:c,refs:f,required:E,maxLength:x,minLength:V,min:W,max:p,pattern:y,validate:Q,name:R,valueAsNumber:We,mount:Oe,disabled:Me}=e._f,k=b(n,R);if(!Oe||Me)return{};const z=f?f[0]:c,j=C=>{l&&z.reportValidity&&(z.setCustomValidity(ae(C)?"":C||""),z.reportValidity())},A={},ce=ra(c),ne=Ve(c),He=ce||ne,M=(We||la(c))&&T(c.value)&&T(k)||Ge(c)&&c.value===""||k===""||Array.isArray(k)&&!k.length,Z=Qa.bind(null,R,r,A),J=(C,g,N,O=K.maxLength,G=K.minLength)=>{const H=C?g:N;A[R]={type:C?O:G,message:H,ref:c,...Z(C?O:G,H)}};if(o?!Array.isArray(k)||!k.length:E&&(!He&&(M||U(k))||ae(k)&&!k||ne&&!Da(f).isValid||ce&&!Na(f).isValid)){const{value:C,message:g}=Le(E)?{value:!!E,message:E}:se(E);if(C&&(A[R]={type:K.required,message:g,ref:z,...Z(K.required,g)},!r))return j(g),A}if(!M&&(!U(W)||!U(p))){let C,g;const N=se(p),O=se(W);if(!U(k)&&!isNaN(k)){const G=c.valueAsNumber||k&&+k;U(N.value)||(C=G>N.value),U(O.value)||(g=G<O.value)}else{const G=c.valueAsDate||new Date(k),H=de=>new Date(new Date().toDateString()+" "+de),ee=c.type=="time",ue=c.type=="week";$(N.value)&&k&&(C=ee?H(k)>H(N.value):ue?k>N.value:G>new Date(N.value)),$(O.value)&&k&&(g=ee?H(k)<H(O.value):ue?k<O.value:G<new Date(O.value))}if((C||g)&&(J(!!C,N.message,O.message,K.max,K.min),!r))return j(A[R].message),A}if((x||V)&&!M&&($(k)||o&&Array.isArray(k))){const C=se(x),g=se(V),N=!U(C.value)&&k.length>+C.value,O=!U(g.value)&&k.length<+g.value;if((N||O)&&(J(N,C.message,g.message),!r))return j(A[R].message),A}if(y&&!M&&$(k)){const{value:C,message:g}=se(y);if(Be(C)&&!k.match(C)&&(A[R]={type:K.pattern,message:g,ref:c,...Z(K.pattern,g)},!r))return j(g),A}if(Q){if(X(Q)){const C=await Q(k,n),g=xa(C,z);if(g&&(A[R]={...g,...Z(K.validate,g.message)},!r))return j(g.message),A}else if(_(Q)){let C={};for(const g in Q){if(!B(C)&&!r)break;const N=xa(await Q[g](k,n),z,g);N&&(C={...N,...Z(g,N.message)},j(N.message),r&&(A[R]=C))}if(!B(C)&&(A[R]={ref:z,...C},!r))return A}}return j(!0),A};function Za(e,n){const r=n.slice(0,-1).length;let l=0;for(;l<r;)e=T(e)?l++:e[n[l++]];return e}function et(e){for(const n in e)if(e.hasOwnProperty(n)&&!T(e[n]))return!1;return!0}function w(e,n){const r=Array.isArray(n)?n:ta(n)?[n]:Sa(n),l=r.length===1?e:Za(e,r),o=r.length-1,c=r[o];return l&&delete l[c],o!==0&&(_(l)&&B(l)||Array.isArray(l)&&et(l))&&w(e,r.slice(0,-1)),e}function Ye(){let e=[];return{get observers(){return e},next:o=>{for(const c of e)c.next&&c.next(o)},subscribe:o=>(e.push(o),{unsubscribe:()=>{e=e.filter(c=>c!==o)}}),unsubscribe:()=>{e=[]}}}var ze=e=>U(e)||!Ia(e);function te(e,n){if(ze(e)||ze(n))return e===n;if(oe(e)&&oe(n))return e.getTime()===n.getTime();const r=Object.keys(e),l=Object.keys(n);if(r.length!==l.length)return!1;for(const o of r){const c=e[o];if(!l.includes(o))return!1;if(o!=="ref"){const f=n[o];if(oe(c)&&oe(f)||_(c)&&_(f)||Array.isArray(c)&&Array.isArray(f)?!te(c,f):c!==f)return!1}}return!0}var Fa=e=>e.type==="select-multiple",at=e=>ra(e)||Ve(e),Qe=e=>Ge(e)&&e.isConnected,Ta=e=>{for(const n in e)if(X(e[n]))return!0;return!1};function Pe(e,n={}){const r=Array.isArray(e);if(_(e)||r)for(const l in e)Array.isArray(e[l])||_(e[l])&&!Ta(e[l])?(n[l]=Array.isArray(e[l])?[]:{},Pe(e[l],n[l])):U(e[l])||(n[l]=!0);return n}function _a(e,n,r){const l=Array.isArray(e);if(_(e)||l)for(const o in e)Array.isArray(e[o])||_(e[o])&&!Ta(e[o])?T(n)||ze(r[o])?r[o]=Array.isArray(e[o])?Pe(e[o],[]):{...Pe(e[o])}:_a(e[o],U(n)?{}:n[o],r[o]):r[o]=!te(e[o],n[o]);return r}var Xe=(e,n)=>_a(e,n,Pe(n)),Aa=(e,{valueAsNumber:n,valueAsDate:r,setValueAs:l})=>T(e)?e:n?e===""?NaN:e&&+e:r&&$(e)?new Date(e):l?l(e):e;function Ze(e){const n=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):n.disabled))return la(n)?n.files:ra(n)?Na(e.refs).value:Fa(n)?[...n.selectedOptions].map(({value:r})=>r):Ve(n)?Da(e.refs).value:Aa(T(n.value)?e.ref.value:n.value,e)}var tt=(e,n,r,l)=>{const o={};for(const c of e){const f=b(n,c);f&&S(o,c,f._f)}return{criteriaMode:r,names:[...e],fields:o,shouldUseNativeValidation:l}},me=e=>T(e)?e:Be(e)?e.source:_(e)?Be(e.value)?e.value.source:e.value:e,lt=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Ca(e,n,r){const l=b(e,r);if(l||ta(r))return{error:l,name:r};const o=r.split(".");for(;o.length;){const c=o.join("."),f=b(n,c),E=b(e,c);if(f&&!Array.isArray(f)&&r!==c)return{name:r};if(E&&E.type)return{name:c,error:E};o.pop()}return{name:r}}var rt=(e,n,r,l,o)=>o.isOnAll?!1:!r&&o.isOnTouch?!(n||e):(r?l.isOnBlur:o.isOnBlur)?!e:(r?l.isOnChange:o.isOnChange)?e:!0,nt=(e,n)=>!Ue(b(e,n)).length&&w(e,n);const it={mode:P.onSubmit,reValidateMode:P.onChange,shouldFocusError:!0};function st(e={},n){let r={...it,...e},l={submitCount:0,isDirty:!1,isLoading:X(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},o={},c=_(r.defaultValues)||_(r.values)?Y(r.defaultValues||r.values)||{}:{},f=r.shouldUnregister?{}:Y(c),E={action:!1,mount:!1,watch:!1},x={mount:new Set,unMount:new Set,array:new Set,watch:new Set},V,W=0;const p={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},y={values:Ye(),array:Ye(),state:Ye()},Q=e.resetOptions&&e.resetOptions.keepDirtyValues,R=va(r.mode),We=va(r.reValidateMode),Oe=r.criteriaMode===P.all,Me=t=>i=>{clearTimeout(W),W=setTimeout(t,i)},k=async t=>{if(p.isValid||t){const i=r.resolver?B((await M()).errors):await J(o,!0);i!==l.isValid&&y.state.next({isValid:i})}},z=t=>p.isValidating&&y.state.next({isValidating:t}),j=(t,i=[],s,h,m=!0,u=!0)=>{if(h&&s){if(E.action=!0,u&&Array.isArray(b(o,t))){const v=s(b(o,t),h.argA,h.argB);m&&S(o,t,v)}if(u&&Array.isArray(b(l.errors,t))){const v=s(b(l.errors,t),h.argA,h.argB);m&&S(l.errors,t,v),nt(l.errors,t)}if(p.touchedFields&&u&&Array.isArray(b(l.touchedFields,t))){const v=s(b(l.touchedFields,t),h.argA,h.argB);m&&S(l.touchedFields,t,v)}p.dirtyFields&&(l.dirtyFields=Xe(c,f)),y.state.next({name:t,isDirty:g(t,i),dirtyFields:l.dirtyFields,errors:l.errors,isValid:l.isValid})}else S(f,t,i)},A=(t,i)=>{S(l.errors,t,i),y.state.next({errors:l.errors})},ce=(t,i,s,h)=>{const m=b(o,t);if(m){const u=b(f,t,T(s)?b(c,t):s);T(u)||h&&h.defaultChecked||i?S(f,t,i?u:Ze(m._f)):G(t,u),E.mount&&k()}},ne=(t,i,s,h,m)=>{let u=!1,v=!1;const D={name:t};if(!s||h){p.isDirty&&(v=l.isDirty,l.isDirty=D.isDirty=g(),u=v!==D.isDirty);const F=te(b(c,t),i);v=b(l.dirtyFields,t),F?w(l.dirtyFields,t):S(l.dirtyFields,t,!0),D.dirtyFields=l.dirtyFields,u=u||p.dirtyFields&&v!==!F}if(s){const F=b(l.touchedFields,t);F||(S(l.touchedFields,t,s),D.touchedFields=l.touchedFields,u=u||p.touchedFields&&F!==s)}return u&&m&&y.state.next(D),u?D:{}},He=(t,i,s,h)=>{const m=b(l.errors,t),u=p.isValid&&ae(i)&&l.isValid!==i;if(e.delayError&&s?(V=Me(()=>A(t,s)),V(e.delayError)):(clearTimeout(W),V=null,s?S(l.errors,t,s):w(l.errors,t)),(s?!te(m,s):m)||!B(h)||u){const v={...h,...u&&ae(i)?{isValid:i}:{},errors:l.errors,name:t};l={...l,...v},y.state.next(v)}z(!1)},M=async t=>r.resolver(f,r.context,tt(t||x.mount,o,r.criteriaMode,r.shouldUseNativeValidation)),Z=async t=>{const{errors:i}=await M(t);if(t)for(const s of t){const h=b(i,s);h?S(l.errors,s,h):w(l.errors,s)}else l.errors=i;return i},J=async(t,i,s={valid:!0})=>{for(const h in t){const m=t[h];if(m){const{_f:u,...v}=m;if(u){const D=x.array.has(u.name),F=await Ea(m,f,Oe,r.shouldUseNativeValidation&&!i,D);if(F[u.name]&&(s.valid=!1,i))break;!i&&(b(F,u.name)?D?Xa(l.errors,F,u.name):S(l.errors,u.name,F[u.name]):w(l.errors,u.name))}v&&await J(v,i,s)}}return s.valid},C=()=>{for(const t of x.unMount){const i=b(o,t);i&&(i._f.refs?i._f.refs.every(s=>!Qe(s)):!Qe(i._f.ref))&&qe(t)}x.unMount=new Set},g=(t,i)=>(t&&i&&S(f,t,i),!te(na(),c)),N=(t,i,s)=>Ya(t,x,{...E.mount?f:T(i)?c:$(t)?{[t]:i}:i},s,i),O=t=>Ue(b(E.mount?f:c,t,e.shouldUnregister?b(c,t,[]):[])),G=(t,i,s={})=>{const h=b(o,t);let m=i;if(h){const u=h._f;u&&(!u.disabled&&S(f,t,Aa(i,u)),m=Ge(u.ref)&&U(i)?"":i,Fa(u.ref)?[...u.ref.options].forEach(v=>v.selected=m.includes(v.value)):u.refs?Ve(u.ref)?u.refs.length>1?u.refs.forEach(v=>(!v.defaultChecked||!v.disabled)&&(v.checked=Array.isArray(m)?!!m.find(D=>D===v.value):m===v.value)):u.refs[0]&&(u.refs[0].checked=!!m):u.refs.forEach(v=>v.checked=v.value===m):la(u.ref)?u.ref.value="":(u.ref.value=m,u.ref.type||y.values.next({name:t,values:{...f}})))}(s.shouldDirty||s.shouldTouch)&&ne(t,m,s.shouldTouch,s.shouldDirty,!0),s.shouldValidate&&de(t)},H=(t,i,s)=>{for(const h in i){const m=i[h],u=`${t}.${h}`,v=b(o,u);(x.array.has(t)||!ze(m)||v&&!v._f)&&!oe(m)?H(u,m,s):G(u,m,s)}},ee=(t,i,s={})=>{const h=b(o,t),m=x.array.has(t),u=Y(i);S(f,t,u),m?(y.array.next({name:t,values:{...f}}),(p.isDirty||p.dirtyFields)&&s.shouldDirty&&y.state.next({name:t,dirtyFields:Xe(c,f),isDirty:g(t,u)})):h&&!h._f&&!U(u)?H(t,u,s):G(t,u,s),pa(t,x)&&y.state.next({...l}),y.values.next({name:t,values:{...f}}),!E.mount&&n()},ue=async t=>{const i=t.target;let s=i.name,h=!0;const m=b(o,s),u=()=>i.type?Ze(m._f):Ma(t);if(m){let v,D;const F=u(),ie=t.type===ha.BLUR||t.type===ha.FOCUS_OUT,Oa=!lt(m._f)&&!r.resolver&&!b(l.errors,s)&&!m._f.deps||rt(ie,b(l.touchedFields,s),l.isSubmitted,We,R),je=pa(s,x,ie);S(f,s,F),ie?(m._f.onBlur&&m._f.onBlur(t),V&&V(0)):m._f.onChange&&m._f.onChange(t);const Je=ne(s,F,ie,!1),La=!B(Je)||je;if(!ie&&y.values.next({name:s,type:t.type,values:{...f}}),Oa)return p.isValid&&k(),La&&y.state.next({name:s,...je?{}:Je});if(!ie&&je&&y.state.next({...l}),z(!0),r.resolver){const{errors:fa}=await M([s]),Ra=Ca(l.errors,o,s),ba=Ca(fa,o,Ra.name||s);v=ba.error,s=ba.name,D=B(fa)}else v=(await Ea(m,f,Oe,r.shouldUseNativeValidation))[s],h=isNaN(F)||F===b(f,s,F),h&&(v?D=!1:p.isValid&&(D=await J(o,!0)));h&&(m._f.deps&&de(m._f.deps),He(s,D,v,Je))}},de=async(t,i={})=>{let s,h;const m=Ke(t);if(z(!0),r.resolver){const u=await Z(T(t)?t:m);s=B(u),h=t?!m.some(v=>b(u,v)):s}else t?(h=(await Promise.all(m.map(async u=>{const v=b(o,u);return await J(v&&v._f?{[u]:v}:v)}))).every(Boolean),!(!h&&!l.isValid)&&k()):h=s=await J(o);return y.state.next({...!$(t)||p.isValid&&s!==l.isValid?{}:{name:t},...r.resolver||!t?{isValid:s}:{},errors:l.errors,isValidating:!1}),i.shouldFocus&&!h&&ea(o,u=>u&&b(l.errors,u),t?m:x.mount),h},na=t=>{const i={...c,...E.mount?f:{}};return T(t)?i:$(t)?b(i,t):t.map(s=>b(i,s))},ia=(t,i)=>({invalid:!!b((i||l).errors,t),isDirty:!!b((i||l).dirtyFields,t),isTouched:!!b((i||l).touchedFields,t),error:b((i||l).errors,t)}),wa=t=>{t&&Ke(t).forEach(i=>w(l.errors,i)),y.state.next({errors:t?l.errors:{}})},sa=(t,i,s)=>{const h=(b(o,t,{_f:{}})._f||{}).ref;S(l.errors,t,{...i,ref:h}),y.state.next({name:t,errors:l.errors,isValid:!1}),s&&s.shouldFocus&&h&&h.focus&&h.focus()},Va=(t,i)=>X(t)?y.values.subscribe({next:s=>t(N(void 0,i),s)}):N(t,i,!0),qe=(t,i={})=>{for(const s of t?Ke(t):x.mount)x.mount.delete(s),x.array.delete(s),i.keepValue||(w(o,s),w(f,s)),!i.keepError&&w(l.errors,s),!i.keepDirty&&w(l.dirtyFields,s),!i.keepTouched&&w(l.touchedFields,s),!r.shouldUnregister&&!i.keepDefaultValue&&w(c,s);y.values.next({values:{...f}}),y.state.next({...l,...i.keepDirty?{isDirty:g()}:{}}),!i.keepIsValid&&k()},oa=({disabled:t,name:i,field:s,fields:h})=>{if(ae(t)){const m=t?void 0:b(f,i,Ze(s?s._f:b(h,i)._f));S(f,i,m),ne(i,m,!1,!1,!0)}},$e=(t,i={})=>{let s=b(o,t);const h=ae(i.disabled);return S(o,t,{...s||{},_f:{...s&&s._f?s._f:{ref:{name:t}},name:t,mount:!0,...i}}),x.mount.add(t),s?oa({field:s,disabled:i.disabled,name:t}):ce(t,!0,i.value),{...h?{disabled:i.disabled}:{},...r.progressive?{required:!!i.required,min:me(i.min),max:me(i.max),minLength:me(i.minLength),maxLength:me(i.maxLength),pattern:me(i.pattern)}:{},name:t,onChange:ue,onBlur:ue,ref:m=>{if(m){$e(t,i),s=b(o,t);const u=T(m.value)&&m.querySelectorAll&&m.querySelectorAll("input,select,textarea")[0]||m,v=at(u),D=s._f.refs||[];if(v?D.find(F=>F===u):u===s._f.ref)return;S(o,t,{_f:{...s._f,...v?{refs:[...D.filter(Qe),u,...Array.isArray(b(c,t))?[{}]:[]],ref:{type:u.type,name:t}}:{ref:u}}}),ce(t,!1,void 0,u)}else s=b(o,t,{}),s._f&&(s._f.mount=!1),(r.shouldUnregister||i.shouldUnregister)&&!(qa(x.array,t)&&E.action)&&x.unMount.add(t)}}},ca=()=>r.shouldFocusError&&ea(o,t=>t&&b(l.errors,t),x.mount),ua=(t,i)=>async s=>{s&&(s.preventDefault&&s.preventDefault(),s.persist&&s.persist());let h=Y(f);if(y.state.next({isSubmitting:!0}),r.resolver){const{errors:m,values:u}=await M();l.errors=m,h=u}else await J(o);w(l.errors,"root"),B(l.errors)?(y.state.next({errors:{}}),await t(h,s)):(i&&await i({...l.errors},s),ca(),setTimeout(ca)),y.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:B(l.errors),submitCount:l.submitCount+1,errors:l.errors})},Ua=(t,i={})=>{b(o,t)&&(T(i.defaultValue)?ee(t,b(c,t)):(ee(t,i.defaultValue),S(c,t,i.defaultValue)),i.keepTouched||w(l.touchedFields,t),i.keepDirty||(w(l.dirtyFields,t),l.isDirty=i.defaultValue?g(t,b(c,t)):g()),i.keepError||(w(l.errors,t),p.isValid&&k()),y.state.next({...l}))},da=(t,i={})=>{const s=t?Y(t):c,h=Y(s),m=t&&!B(t)?h:c;if(i.keepDefaultValues||(c=s),!i.keepValues){if(i.keepDirtyValues||Q)for(const u of x.mount)b(l.dirtyFields,u)?S(m,u,b(f,u)):ee(u,b(m,u));else{if(aa&&T(t))for(const u of x.mount){const v=b(o,u);if(v&&v._f){const D=Array.isArray(v._f.refs)?v._f.refs[0]:v._f.ref;if(Ge(D)){const F=D.closest("form");if(F){F.reset();break}}}}o={}}f=e.shouldUnregister?i.keepDefaultValues?Y(c):{}:Y(m),y.array.next({values:{...m}}),y.values.next({values:{...m}})}x={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!E.mount&&n(),E.mount=!p.isValid||!!i.keepIsValid,E.watch=!!e.shouldUnregister,y.state.next({submitCount:i.keepSubmitCount?l.submitCount:0,isDirty:i.keepDirty?l.isDirty:!!(i.keepDefaultValues&&!te(t,c)),isSubmitted:i.keepIsSubmitted?l.isSubmitted:!1,dirtyFields:i.keepDirtyValues?l.dirtyFields:i.keepDefaultValues&&t?Xe(c,t):{},touchedFields:i.keepTouched?l.touchedFields:{},errors:i.keepErrors?l.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},ma=(t,i)=>da(X(t)?t(f):t,i);return{control:{register:$e,unregister:qe,getFieldState:ia,handleSubmit:ua,setError:sa,_executeSchema:M,_getWatch:N,_getDirty:g,_updateValid:k,_removeUnmounted:C,_updateFieldArray:j,_updateDisabledField:oa,_getFieldArray:O,_reset:da,_resetDefaultValues:()=>X(r.defaultValues)&&r.defaultValues().then(t=>{ma(t,r.resetOptions),y.state.next({isLoading:!1})}),_updateFormState:t=>{l={...l,...t}},_subjects:y,_proxyFormState:p,get _fields(){return o},get _formValues(){return f},get _state(){return E},set _state(t){E=t},get _defaultValues(){return c},get _names(){return x},set _names(t){x=t},get _formState(){return l},set _formState(t){l=t},get _options(){return r},set _options(t){r={...r,...t}}},trigger:de,register:$e,handleSubmit:ua,watch:Va,setValue:ee,getValues:na,reset:ma,resetField:Ua,clearErrors:wa,unregister:qe,setError:sa,setFocus:(t,i={})=>{const s=b(o,t),h=s&&s._f;if(h){const m=h.refs?h.refs[0]:h.ref;m.focus&&(m.focus(),i.shouldSelect&&m.select())}},getFieldState:ia}}function ot(e={}){const n=a.useRef(),r=a.useRef(),[l,o]=a.useState({isDirty:!1,isValidating:!1,isLoading:X(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:X(e.defaultValues)?void 0:e.defaultValues});n.current||(n.current={...st(e,()=>o(f=>({...f}))),formState:l});const c=n.current.control;return c._options=e,Ka({subject:c._subjects.state,next:f=>{Ja(f,c._proxyFormState,c._updateFormState)&&o({...c._formState})}}),a.useEffect(()=>{e.values&&!te(e.values,r.current)?(c._reset(e.values,c._options.resetOptions),r.current=e.values):c._resetDefaultValues()},[e.values,c]),a.useEffect(()=>{c._state.mount||(c._updateValid(),c._state.mount=!0),c._state.watch&&(c._state.watch=!1,c._subjects.state.next({...c._formState})),c._removeUnmounted()}),n.current.formState=ja(l,c),n.current}const{useArgs:ct}=__STORYBOOK_MODULE_PREVIEW_API__,ut=()=>{const{register:e,handleSubmit:n,unregister:r}=ot(),l=o=>{o.target.checked?e(o.target.name,{value:o.target.value}):r(o.target.name)};return a.createElement("form",{onSubmit:n(o=>console.log(o))},a.createElement(I,{label:"This is a label",name:"1"},a.createElement(d,{name:"checkbox1",value:"valueName1",label:"Unselected / Default",onIcCheck:l}),a.createElement(d,{name:"checkbox2",value:"valueName2",label:"Selected / Default",onIcCheck:l}),a.createElement(d,{name:"checkbox3",value:"valueName3",label:"Unselected / Disabled",Disabled:!0})),a.createElement("input",{type:"submit",value:"Submit"}))},dt=()=>{const[e,n]=L.useState(!0),[r,l]=L.useState(!0),[o,c]=L.useState(!0),[f,E]=L.useState(!0),x=()=>{n(!e)},V=y=>{l(y.target.checked)},W=()=>{c(!o)},p=y=>{E(y.target.checked)};return a.createElement("div",{style:{display:"flex",gap:"16px","flex-wrap":"wrap"}},a.createElement("div",{style:{border:"1px solid gray",padding:"8px"}},a.createElement(I,{label:"'native-indeterminate-behavior'=false",name:"indeterminate"},a.createElement(d,{value:"indeterminate",label:"Indeterminate checkbox",checked:r,indeterminate:e,onClick:V})),a.createElement("br",null),a.createElement(re,{onClick:x},"Toggle indeterminate"),a.createElement("br",null),a.createElement("br",null),a.createElement("span",null,`Indeterminate: ${e}`),a.createElement("br",null),a.createElement("span",null,`Checked: ${r}`)),a.createElement("div",{style:{border:"1px solid gray",padding:"8px"}},a.createElement(I,{label:"'native-indeterminate-behavior'=true",name:"native-indeterminate"},a.createElement(d,{value:"native-indeterminate",label:"Indeterminate checkbox",checked:f,indeterminate:o,onClick:p,nativeIndeterminateBehaviour:!0})),a.createElement("br",null),a.createElement(re,{onClick:W},"Toggle indeterminate"),a.createElement("br",null),a.createElement("br",null),a.createElement("span",null,`Indeterminate: ${o}`),a.createElement("br",null),a.createElement("span",null,`Checked: ${f}`)))},mt=()=>{const[e,n]=L.useState({tea:!1,coffee:!0,juice:!1}),[r,l]=L.useState(!1),[o,c]=L.useState(!0),f=p=>{p.detail.checkedOptions.length===0?(l(!1),c(!1)):p.detail.checkedOptions.length===3?(l(!0),c(!1)):c(!0)},E=p=>{p.target.id==="drinks-checkbox"&&(l(p.target.checked),c(!1),n({tea:p.target.checked,coffee:p.target.checked,juice:p.target.checked}))},x=p=>{n({...e,tea:p.target.checked})},V=p=>{n({...e,coffee:p.target.checked})},W=p=>{n({...e,juice:p.target.checked})};return a.createElement(I,{label:"Liked things",name:"1"},a.createElement(d,{id:"drinks-checkbox",value:"drinks",label:"Drinks",checked:r,indeterminate:o,nativeIndeterminateBehaviour:!0,onIcCheck:E},a.createElement(I,{name:"2",label:"Drinks",hideLabel:!0,slot:"additional-field",onIcChange:f},a.createElement(d,{value:"tea",label:"Tea",checked:e.tea,onIcCheck:x}),a.createElement(d,{value:"coffee",label:"Coffee",checked:e.coffee,onIcCheck:V}),a.createElement(d,{value:"juice",label:"Juice",checked:e.juice,onIcCheck:W}))))},ft=()=>{const[e,n]=L.useState(""),r=l=>{n(l.detail.value)};return a.createElement("div",null,a.createElement(I,{label:"This is a label",name:"1"},a.createElement(d,{additionalFieldDisplay:"static",value:"valueName1",label:"option1"},a.createElement(le,{slot:"additional-field",placeholder:"Placeholder",label:"What's your favourite type of coffee?",onIcChange:r}))),a.createElement("br",null),a.createElement("div",null,"textbox value :",e))},bt=()=>{const[e,n]=L.useState(!0),r=()=>{n(!1)},l=()=>{n(!0)};return a.createElement(a.Fragment,null,a.createElement(d,{checked:e,label:"Label",value:"valueName1"}),a.createElement(re,{variant:"primary",onClick:r},"Unchecked"),a.createElement(re,{variant:"primary",onClick:l},"Checked"))},ht=()=>{const e=L.useRef(),n=()=>{console.log(e.current.checked)};return a.createElement(a.Fragment,null,a.createElement(d,{ref:e,label:"Label",value:"valueName1",onIcCheck:n}))},vt=()=>{const[e,n]=L.useState([]),r=()=>{n([{label:"Item 1",value:"Item 1"},{label:"Item 2",value:"Item 2"},{label:"Item 3",value:"Item 3"},{label:"Item 4",value:"Item 4"}])};return a.createElement(a.Fragment,null,a.createElement(I,{label:"What is your favourite coffee?",name:"checkbox-group-1"},e.map((l,o)=>a.createElement(d,{key:o+l.value,value:l.value,label:l.label}))),a.createElement("br",null),a.createElement(re,{onClick:r},"Update"))},pt=()=>{const[e,n]=L.useState(!1),[r,l]=L.useState(!1);return a.createElement(a.Fragment,null,a.createElement(I,{id:"field-1",label:"This is a label",name:"1",helperText:"Error already set on page load and aria-live overridden as 'assertive'",validationStatus:e?"":"error",validationText:e?"":"First error message",validationAriaLive:"assertive"},a.createElement(d,{value:"valueName1",label:"Unselected / Default"}),a.createElement(d,{value:"valueName2",label:"Selected / Default",selected:!0}),a.createElement(d,{value:"valueName3",label:"Unselected / Disabled",disabled:!0})),a.createElement("br",null),a.createElement(I,{id:"field-2",label:"This is a label",name:"2",helperText:"Error set after page load and aria-live overridden as 'assertive'",validationStatus:e?"error":"",validationText:e?"Second error message":"",validationAriaLive:"assertive"},a.createElement(d,{value:"valueName1",label:"Unselected / Default"}),a.createElement(d,{value:"valueName2",label:"Selected / Default",selected:!0}),a.createElement(d,{value:"valueName3",label:"Unselected / Disabled",disabled:!0})),a.createElement("br",null),a.createElement(re,{onClick:()=>n(!e)},"Toggle errors"),a.createElement("br",null),a.createElement("br",null),a.createElement("br",null),a.createElement("br",null),a.createElement(I,{id:"field-3",label:"This is a label",name:"3",helperText:"Default aria-live behaviour (i.e. 'polite')",validationStatus:r?"error":"",validationText:r?"Third error message":""},a.createElement(d,{value:"valueName1",label:"Unselected / Default"}),a.createElement(d,{value:"valueName2",label:"Selected / Default",selected:!0}),a.createElement(d,{value:"valueName3",label:"Unselected / Disabled",disabled:!0})),a.createElement("br",null),a.createElement(I,{id:"field-4",label:"This is a label",name:"4",helperText:"Default aria-live behaviour (i.e. 'polite')",validationStatus:r?"error":"",validationText:r?"Fourth error message":""},a.createElement(d,{value:"valueName1",label:"Unselected / Default"}),a.createElement(d,{value:"valueName2",label:"Selected / Default",selected:!0}),a.createElement(d,{value:"valueName3",label:"Unselected / Disabled",disabled:!0})),a.createElement("br",null),a.createElement(re,{onClick:()=>l(!r)},"Toggle errors"),a.createElement("br",null),a.createElement("br",null),a.createElement("br",null),a.createElement("br",null),a.createElement("br",null))},yt={additionalFieldDisplay:"dynamic",additionalFieldSlot:"additional-field",checked:!1,checkboxDisabled:!1,checkboxSize:"medium",disabled:!1,dynamicText:"Dynamic text",groupLabel:"Checkbox group label",helperText:"Helper text",hideLabel:!1,hideGroupLabel:!1,indeterminate:!1,label:"Checkbox label",nativeIndeterminateBehaviour:!1,required:!1,size:"medium",validationAriaLive:"polite",validationStatus:"no status",validationText:"",value:"checkbox-value",theme:"inherit"},kt={title:"Checkbox",component:I},fe={render:()=>a.createElement(I,{label:"This is a label",name:"1"},a.createElement(d,{value:"valueName1",label:"Unselected / Default"}),a.createElement(d,{value:"valueName2",label:"Selected / Default",checked:!0}),a.createElement(d,{value:"valueName3",label:"Unselected / Disabled",disabled:!0})),name:"Default"},be={render:()=>a.createElement(I,{label:"This is a label",required:!0,name:"1"},a.createElement(d,{value:"valueName1",label:"Unselected / Default"}),a.createElement(d,{value:"valueName2",label:"Selected / Default",checked:!0}),a.createElement(d,{value:"valueName3",label:"Unselected / Disabled",disabled:!0})),name:"Required"},he={render:()=>a.createElement(I,{label:"This is a label",name:"1",disabled:!0},a.createElement(d,{value:"valueName1",label:"Unselected / Disabled 1"}),a.createElement(d,{value:"valueName2",label:"Unselected / Disabled 2"}),a.createElement(d,{value:"valueName3",label:"Unselected / Disabled 3"}),a.createElement(d,{value:"valueName4",label:"Selected / Disabled",checked:!0})),name:"Disabled"},ve={render:()=>a.createElement(a.Fragment,null,a.createElement(I,{size:"large",label:"These are checkboxes with the 'size' attribute set on them individually",name:"group1"},a.createElement(d,{size:"small",value:"valueName1",label:"Unselected / Default"}),a.createElement(d,{size:"medium",value:"valueName2",label:"Selected / Default",checked:!0}),a.createElement(d,{size:"large",value:"valueName3",label:"Unselected / Disabled",disabled:!0})),a.createElement(I,{size:"small",label:"This is a checkbox group with small checkboxes",name:"group2"},a.createElement(d,{value:"valueName1",label:"Unselected / Default"}),a.createElement(d,{value:"valueName2",label:"Selected / Default",checked:!0}),a.createElement(d,{value:"valueName3",label:"Unselected / Disabled",disabled:!0})),a.createElement(I,{size:"medium",label:"This is a checkbox group with default-sized checkboxes",name:"group3"},a.createElement(d,{value:"valueName1",label:"Unselected / Default"}),a.createElement(d,{value:"valueName2",label:"Selected / Default",checked:!0}),a.createElement(d,{value:"valueName3",label:"Unselected / Disabled",disabled:!0})),a.createElement(I,{size:"large",label:"This is a checkbox group with large checkboxes",name:"group4"},a.createElement(d,{value:"valueName1",label:"Unselected / Default"}),a.createElement(d,{value:"valueName2",label:"Selected / Default",checked:!0}),a.createElement(d,{value:"valueName3",label:"Unselected / Disabled",disabled:!0}))),name:"Sizes"},pe={render:()=>a.createElement(I,{label:"This is a label",hideLabel:!0,name:"1"},a.createElement(d,{value:"valueName1",label:"Unselected / Default"}),a.createElement(d,{value:"valueName2",label:"Selected / Default",checked:!0}),a.createElement(d,{value:"valueName3",label:"Unselected / Disabled",disabled:!0})),name:"Hidden label"},ye={render:()=>a.createElement(I,{label:"Conditional dynamic",name:"1",onIcChange:e=>console.log(e.detail.selectedOption.label,e.detail.selectedOption.checked)},a.createElement(d,{additionalFieldDisplay:"dynamic",value:"valueName1",label:"option1"},a.createElement(le,{slot:"additional-field",placeholder:"Placeholder",label:"What's your favourite type of coffee?"})),a.createElement(d,{additionalFieldDisplay:"dynamic",value:"valueName2",label:"option2 - error example"},a.createElement(le,{validationStatus:"error",validationText:"now it has really gone to (coffee) pot",slot:"additional-field",placeholder:"Placeholder",label:"What's your favourite type of coffee?"})),a.createElement(d,{additionalFieldDisplay:"dynamic",value:"valueName3",label:"option3"},a.createElement(Re,{slot:"additional-field",label:"Select an option",orientation:"horizontal"},a.createElement(q,{label:"Caffeinated"}),a.createElement(q,{label:"Decaf"}))),a.createElement(d,{additionalFieldDisplay:"dynamic",value:"valueName4",label:"option4"},a.createElement(Re,{slot:"additional-field",label:"What's your favourite milk?"},a.createElement(q,{label:"Oat"}),a.createElement(q,{label:"Almond"}),a.createElement(q,{label:"Soy"})))),name:"Conditional dynamic"},ke={render:()=>a.createElement(I,{label:" Conditional static ",name:"1"},a.createElement(d,{value:"option1",label:"Option one"},a.createElement(le,{slot:"additional-field",label:"What's your favourite type of coffee?"})),a.createElement(d,{value:"option2",label:"Option two"},a.createElement("div",{slot:"additional-field"},a.createElement(le,{label:"What's your favourite type of coffee?"}),a.createElement(le,{label:"What's your second favourite type of coffee?"}),a.createElement(Ga,{label:"Select a coffee",options:[{label:"Espresso",value:"espresso"},{label:"Flat white",value:"flat"},{label:"Filter",value:"filter"}]}),a.createElement(Ba,{label:"Search for a coffee",options:[{label:"Espresso",value:"espresso"},{label:"Flat white",value:"flat"},{label:"Filter",value:"filter"}]}))),a.createElement(d,{value:"option3",label:"Option three"},a.createElement(Re,{slot:"additional-field",label:"What's your favourite milk"},a.createElement(q,{label:"Oat"}),a.createElement(q,{label:"Almond"}),a.createElement(q,{label:"Soy"}))),a.createElement(d,{value:"option4",label:"Option four"},a.createElement(Re,{slot:"additional-field",label:"Select an option",orientation:"horizontal"},a.createElement(q,{label:"Caffeinated"}),a.createElement(q,{label:"Decaf"})))),name:"Conditional static"},ge={render:()=>a.createElement(I,{label:"Choose Your Coffee",name:"1"},a.createElement(d,{value:"valueName1",label:"Americano"}),a.createElement(d,{value:"valueName2",checked:!0},a.createElement("span",{slot:"label"},"Coffee ",a.createElement(Wa,{label:"hot",status:"warning"}))),a.createElement(d,{value:"valueName3"},a.createElement("span",{slot:"label"},a.createElement("b",null,"Slot Coffee"))),a.createElement(d,{value:"valueName4",disabled:!0},a.createElement("span",{slot:"label"},a.createElement("b",null,"Out of stock")," Coffee"))),name:"Slotted label"},xe={render:()=>a.createElement(a.Fragment,null,a.createElement(I,{label:"Coffee Extras",name:"1",helperText:"Helper text provided by prop"},a.createElement(d,{value:"valueName1",label:"Sugar"}),a.createElement(d,{value:"valueName2",label:"Milk",checked:!0}),a.createElement(d,{value:"valueName3",label:"Salt",disabled:!0})),a.createElement("br",null),a.createElement(I,{label:"More coffee extras",name:"2"},a.createElement(za,{variant:"caption",slot:"helper-text"},a.createElement("span",null,"Slotted helper text with a ",a.createElement(Pa,{href:"#"},"helpful link to guidance"))),a.createElement(d,{value:"valueName1",label:"Shortbread"}),a.createElement(d,{value:"valueName2",label:"Scone",checked:!0}),a.createElement(d,{value:"valueName3",label:"Ham sandwich",disabled:!0}))),name:"Helper text"},Ee={render:()=>a.createElement(I,{label:"This is a label",name:"1",validationStatus:"error",validationText:"Error message"},a.createElement(d,{value:"valueName1",label:"Unselected / Default"}),a.createElement(d,{value:"valueName2",label:"Selected / Default",checked:!0}),a.createElement(d,{value:"valueName3",label:"Unselected / Disabled",disabled:!0})),name:"Validation"},Ce={render:()=>a.createElement(pt,null),name:"Aria-live behaviour"},Ie={render:()=>a.createElement(ut,null),name:"Form"},Se={render:()=>a.createElement(dt,null),name:"Indeterminate"},De={render:()=>a.createElement(mt,null),name:"Indeterminate with children"},Ne={render:()=>a.createElement(ft,null),name:"TextField value change"},Fe={render:()=>a.createElement(bt,null),name:"Controlled"},Te={render:()=>a.createElement(ht,null),name:"Uncontrolled"},_e={render:()=>a.createElement(vt,null),name:"Dynamic loading"},Ae={render:()=>a.createElement(a.Fragment,null,a.createElement("p",null,"Each checkbox in this group is set to a different language by being wrapped in a ",a.createElement("code",null,'<span lang="">')),a.createElement(I,{label:"International Coffee",name:"1"},a.createElement("span",{lang:"fr"},a.createElement(d,{value:"valueName1",label:"Cafe au lait"})),a.createElement("span",{lang:"it"},a.createElement(d,{value:"valueName2",label:"Americano",checked:!0})),a.createElement(d,{value:"valueName3",label:"Flat White"})),a.createElement("span",{lang:"fr"},a.createElement(I,{label:"Boissons",name:"2"},a.createElement(d,{value:"valueName1",label:"Limonade"}),a.createElement(d,{value:"valueName2",label:"Chocolat Chaud",checked:!0}),a.createElement(d,{value:"valueName3",label:"Jus"})))),name:"Internationalisation"},we={render:e=>{const[{checked:n},r]=ct();return a.createElement(I,{disabled:e.disabled,label:e.groupLabel,size:e.size,helperText:e.helperText,hideLabel:e.hideGroupLabel,required:e.required,validationAriaLive:e.validationAriaLive,validationStatus:e.validationStatus==="no status"?"":e.validationStatus,validationText:e.validationText,theme:e.theme},a.createElement(d,{disabled:e.checkboxDisabled,label:e.label,value:e.value,size:e.checkboxSize,hideLabel:e.hideLabel,indeterminate:e.indeterminate,checked:n,additionalFieldDisplay:e.additionalFieldDisplay,dynamicText:e.dynamicText,nativeIndeterminateBehaviour:e.nativeIndeterminateBehaviour,onIcCheck:l=>r({checked:l.target.checked})},a.createElement(le,{slot:e.additionalFieldSlot,placeholder:"Placeholder",label:"What's your favourite type of coffee?"})),a.createElement(d,{value:"valueName2",label:"Checkbox 2"}),a.createElement(d,{value:"valueName3",label:"Checkbox 3"}))},args:yt,argTypes:{additionalFieldDisplay:{options:["dynamic","static"],control:{type:"inline-radio"}},additionalFieldSlot:{options:["additional-field",""],control:{type:"select"}},size:{options:["medium","large","small"],control:{type:"inline-radio"}},checkboxSize:{options:["medium","large","small"],control:{type:"inline-radio"}},validationAriaLive:{options:["polite","assertive","off"],control:{type:"inline-radio"}},validationStatus:{options:["no status","warning","error","success"],control:{type:"select"}},theme:{options:["light","dark","inherit"],control:{type:"inline-radio"}}},name:"Playground"};fe.parameters={...fe.parameters,docs:{...fe.parameters?.docs,source:{originalSource:`{
  render: () => <IcCheckboxGroup label="This is a label" name="1">
      <IcCheckbox value="valueName1" label="Unselected / Default" />
      <IcCheckbox value="valueName2" label="Selected / Default" checked />
      <IcCheckbox value="valueName3" label="Unselected / Disabled" disabled />
    </IcCheckboxGroup>,
  name: "Default"
}`,...fe.parameters?.docs?.source}}};be.parameters={...be.parameters,docs:{...be.parameters?.docs,source:{originalSource:`{
  render: () => <IcCheckboxGroup label="This is a label" required name="1">
      <IcCheckbox value="valueName1" label="Unselected / Default" />
      <IcCheckbox value="valueName2" label="Selected / Default" checked />
      <IcCheckbox value="valueName3" label="Unselected / Disabled" disabled />
    </IcCheckboxGroup>,
  name: "Required"
}`,...be.parameters?.docs?.source}}};he.parameters={...he.parameters,docs:{...he.parameters?.docs,source:{originalSource:`{
  render: () => <IcCheckboxGroup label="This is a label" name="1" disabled>
      <IcCheckbox value="valueName1" label="Unselected / Disabled 1" />
      <IcCheckbox value="valueName2" label="Unselected / Disabled 2" />
      <IcCheckbox value="valueName3" label="Unselected / Disabled 3" />
      <IcCheckbox value="valueName4" label="Selected / Disabled" checked />
    </IcCheckboxGroup>,
  name: "Disabled"
}`,...he.parameters?.docs?.source}}};ve.parameters={...ve.parameters,docs:{...ve.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcCheckboxGroup size="large" label="These are checkboxes with the 'size' attribute set on them individually" name="group1">
      <IcCheckbox size="small" value="valueName1" label="Unselected / Default" />
      <IcCheckbox size="medium" value="valueName2" label="Selected / Default" checked />
      <IcCheckbox size="large" value="valueName3" label="Unselected / Disabled" disabled />
    </IcCheckboxGroup>
    <IcCheckboxGroup size="small" label="This is a checkbox group with small checkboxes" name="group2">
      <IcCheckbox value="valueName1" label="Unselected / Default" />
      <IcCheckbox value="valueName2" label="Selected / Default" checked />
      <IcCheckbox value="valueName3" label="Unselected / Disabled" disabled />
    </IcCheckboxGroup>
    <IcCheckboxGroup size="medium" label="This is a checkbox group with default-sized checkboxes" name="group3">
      <IcCheckbox value="valueName1" label="Unselected / Default" />
      <IcCheckbox value="valueName2" label="Selected / Default" checked />
      <IcCheckbox value="valueName3" label="Unselected / Disabled" disabled />
    </IcCheckboxGroup>
    <IcCheckboxGroup size="large" label="This is a checkbox group with large checkboxes" name="group4">
      <IcCheckbox value="valueName1" label="Unselected / Default" />
      <IcCheckbox value="valueName2" label="Selected / Default" checked />
      <IcCheckbox value="valueName3" label="Unselected / Disabled" disabled />
    </IcCheckboxGroup>
    </>,
  name: "Sizes"
}`,...ve.parameters?.docs?.source}}};pe.parameters={...pe.parameters,docs:{...pe.parameters?.docs,source:{originalSource:`{
  render: () => <IcCheckboxGroup label="This is a label" hideLabel name="1">
      <IcCheckbox value="valueName1" label="Unselected / Default" />
      <IcCheckbox value="valueName2" label="Selected / Default" checked />
      <IcCheckbox value="valueName3" label="Unselected / Disabled" disabled />
    </IcCheckboxGroup>,
  name: "Hidden label"
}`,...pe.parameters?.docs?.source}}};ye.parameters={...ye.parameters,docs:{...ye.parameters?.docs,source:{originalSource:`{
  render: () => <IcCheckboxGroup label="Conditional dynamic" name="1" onIcChange={ev => console.log(ev.detail.selectedOption.label, ev.detail.selectedOption.checked)}>
      <IcCheckbox additionalFieldDisplay="dynamic" value="valueName1" label="option1">
        <IcTextField slot="additional-field" placeholder="Placeholder" label="What's your favourite type of coffee?" />
      </IcCheckbox>
      <IcCheckbox additionalFieldDisplay="dynamic" value="valueName2" label="option2 - error example">
        <IcTextField validationStatus="error" validationText="now it has really gone to (coffee) pot" slot="additional-field" placeholder="Placeholder" label="What's your favourite type of coffee?" />
      </IcCheckbox>
      <IcCheckbox additionalFieldDisplay="dynamic" value="valueName3" label="option3">
        <IcRadioGroup slot="additional-field" label="Select an option" orientation="horizontal">
          <IcRadioOption label="Caffeinated" />
          <IcRadioOption label="Decaf" />
        </IcRadioGroup>
      </IcCheckbox>
      <IcCheckbox additionalFieldDisplay="dynamic" value="valueName4" label="option4">
          <IcRadioGroup slot="additional-field" label="What's your favourite milk?">
            <IcRadioOption label="Oat" />
            <IcRadioOption label="Almond" />
            <IcRadioOption label="Soy" />
          </IcRadioGroup>
      </IcCheckbox>
    </IcCheckboxGroup>,
  name: "Conditional dynamic"
}`,...ye.parameters?.docs?.source}}};ke.parameters={...ke.parameters,docs:{...ke.parameters?.docs,source:{originalSource:`{
  render: () => <IcCheckboxGroup label=" Conditional static " name="1">
      <IcCheckbox value="option1" label="Option one">
        <IcTextField slot="additional-field" label="What's your favourite type of coffee?" />
      </IcCheckbox>
      <IcCheckbox value="option2" label="Option two">
        <div slot="additional-field">
          <IcTextField label="What's your favourite type of coffee?" />
          <IcTextField label="What's your second favourite type of coffee?" />
          <IcSelect label="Select a coffee" options={[{
          label: "Espresso",
          value: "espresso"
        }, {
          label: "Flat white",
          value: "flat"
        }, {
          label: "Filter",
          value: "filter"
        }]} />
          <IcSearchBar label="Search for a coffee" options={[{
          label: "Espresso",
          value: "espresso"
        }, {
          label: "Flat white",
          value: "flat"
        }, {
          label: "Filter",
          value: "filter"
        }]} />
        </div>
      </IcCheckbox>
      <IcCheckbox value="option3" label="Option three">
        <IcRadioGroup slot="additional-field" label="What's your favourite milk">
          <IcRadioOption label="Oat" />
          <IcRadioOption label="Almond" />
          <IcRadioOption label="Soy" />
        </IcRadioGroup>
      </IcCheckbox>
      <IcCheckbox value="option4" label="Option four">
        <IcRadioGroup slot="additional-field" label="Select an option" orientation="horizontal">
          <IcRadioOption label="Caffeinated" />
          <IcRadioOption label="Decaf" />
        </IcRadioGroup>
      </IcCheckbox>
    </IcCheckboxGroup>,
  name: "Conditional static"
}`,...ke.parameters?.docs?.source}}};ge.parameters={...ge.parameters,docs:{...ge.parameters?.docs,source:{originalSource:`{
  render: () => <IcCheckboxGroup label="Choose Your Coffee" name="1">
      <IcCheckbox value="valueName1" label="Americano">
      </IcCheckbox>
      <IcCheckbox value="valueName2" checked>
        <span slot="label">
          Coffee <IcStatusTag label="hot" status="warning" />
        </span>
      </IcCheckbox>
      <IcCheckbox value="valueName3">
        <span slot="label"><b>Slot Coffee</b></span>
      </IcCheckbox>
      <IcCheckbox value="valueName4" disabled>
        <span slot="label"><b>Out of stock</b> Coffee</span>
      </IcCheckbox>
    </IcCheckboxGroup>,
  name: "Slotted label"
}`,...ge.parameters?.docs?.source}}};xe.parameters={...xe.parameters,docs:{...xe.parameters?.docs,source:{originalSource:`{
  render: () => <>
    <IcCheckboxGroup label="Coffee Extras" name="1" helperText="Helper text provided by prop">
      <IcCheckbox value="valueName1" label="Sugar" />
      <IcCheckbox value="valueName2" label="Milk" checked />
      <IcCheckbox value="valueName3" label="Salt" disabled />
    </IcCheckboxGroup>
    <br />
    <IcCheckboxGroup label="More coffee extras" name="2">
      <IcTypography variant="caption" slot="helper-text">
        <span>
          Slotted helper text with a <IcLink href="#">helpful link to guidance</IcLink>
        </span>
      </IcTypography>
      <IcCheckbox value="valueName1" label="Shortbread" />
      <IcCheckbox value="valueName2" label="Scone" checked />
      <IcCheckbox value="valueName3" label="Ham sandwich" disabled />
    </IcCheckboxGroup>
    </>,
  name: "Helper text"
}`,...xe.parameters?.docs?.source}}};Ee.parameters={...Ee.parameters,docs:{...Ee.parameters?.docs,source:{originalSource:`{
  render: () => <IcCheckboxGroup label="This is a label" name="1" validationStatus="error" validationText="Error message">
      <IcCheckbox value="valueName1" label="Unselected / Default" />
      <IcCheckbox value="valueName2" label="Selected / Default" checked />
      <IcCheckbox value="valueName3" label="Unselected / Disabled" disabled />
    </IcCheckboxGroup>,
  name: "Validation"
}`,...Ee.parameters?.docs?.source}}};Ce.parameters={...Ce.parameters,docs:{...Ce.parameters?.docs,source:{originalSource:`{
  render: () => <AriaLiveBehaviourExample />,
  name: "Aria-live behaviour"
}`,...Ce.parameters?.docs?.source}}};Ie.parameters={...Ie.parameters,docs:{...Ie.parameters?.docs,source:{originalSource:`{
  render: () => <Form />,
  name: "Form"
}`,...Ie.parameters?.docs?.source}}};Se.parameters={...Se.parameters,docs:{...Se.parameters?.docs,source:{originalSource:`{
  render: () => <Indeterminate />,
  name: "Indeterminate"
}`,...Se.parameters?.docs?.source}}};De.parameters={...De.parameters,docs:{...De.parameters?.docs,source:{originalSource:`{
  render: () => <IndeterminateWithChildren />,
  name: "Indeterminate with children"
}`,...De.parameters?.docs?.source}}};Ne.parameters={...Ne.parameters,docs:{...Ne.parameters?.docs,source:{originalSource:`{
  render: () => <TextField />,
  name: "TextField value change"
}`,...Ne.parameters?.docs?.source}}};Fe.parameters={...Fe.parameters,docs:{...Fe.parameters?.docs,source:{originalSource:`{
  render: () => <Controlled />,
  name: "Controlled"
}`,...Fe.parameters?.docs?.source}}};Te.parameters={...Te.parameters,docs:{...Te.parameters?.docs,source:{originalSource:`{
  render: () => <Uncontrolled />,
  name: "Uncontrolled"
}`,...Te.parameters?.docs?.source}}};_e.parameters={..._e.parameters,docs:{..._e.parameters?.docs,source:{originalSource:`{
  render: () => <CheckOptionsDynamic />,
  name: "Dynamic loading"
}`,..._e.parameters?.docs?.source}}};Ae.parameters={...Ae.parameters,docs:{...Ae.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <p>Each checkbox in this group is set to a different language by being wrapped in a <code>&lt;span lang=""&gt;</code></p>
      <IcCheckboxGroup label="International Coffee" name="1">
        <span lang="fr">
          <IcCheckbox value="valueName1" label="Cafe au lait" />
        </span>
        <span lang="it">
          <IcCheckbox value="valueName2" label="Americano" checked />
        </span>
        <IcCheckbox value="valueName3" label="Flat White" />
      </IcCheckboxGroup>
      <span lang="fr">
      <IcCheckboxGroup label="Boissons" name="2">
          <IcCheckbox value="valueName1" label="Limonade" />
          <IcCheckbox value="valueName2" label="Chocolat Chaud" checked />
          <IcCheckbox value="valueName3" label="Jus" />
      </IcCheckboxGroup>
      </span>
    </>,
  name: "Internationalisation"
}`,...Ae.parameters?.docs?.source}}};we.parameters={...we.parameters,docs:{...we.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [{
      checked
    }, updateArgs] = useArgs();
    return <IcCheckboxGroup disabled={args.disabled} label={args.groupLabel} size={args.size} helperText={args.helperText} hideLabel={args.hideGroupLabel} required={args.required} validationAriaLive={args.validationAriaLive} validationStatus={args.validationStatus === "no status" ? "" : args.validationStatus} validationText={args.validationText} theme={args.theme}>
        <IcCheckbox disabled={args.checkboxDisabled} label={args.label} value={args.value} size={args.checkboxSize} hideLabel={args.hideLabel} indeterminate={args.indeterminate} checked={checked} additionalFieldDisplay={args.additionalFieldDisplay} dynamicText={args.dynamicText} nativeIndeterminateBehaviour={args.nativeIndeterminateBehaviour} onIcCheck={ev => updateArgs({
        checked: ev.target.checked
      })}>
          <IcTextField slot={args.additionalFieldSlot} placeholder="Placeholder" label="What's your favourite type of coffee?" />
        </IcCheckbox>
        <IcCheckbox value="valueName2" label="Checkbox 2" />
        <IcCheckbox value="valueName3" label="Checkbox 3" />
      </IcCheckboxGroup>;
  },
  args: defaultArgs,
  argTypes: {
    additionalFieldDisplay: {
      options: ["dynamic", "static"],
      control: {
        type: "inline-radio"
      }
    },
    additionalFieldSlot: {
      options: ["additional-field", ""],
      control: {
        type: "select"
      }
    },
    size: {
      options: ["medium", "large", "small"],
      control: {
        type: "inline-radio"
      }
    },
    checkboxSize: {
      options: ["medium", "large", "small"],
      control: {
        type: "inline-radio"
      }
    },
    validationAriaLive: {
      options: ["polite", "assertive", "off"],
      control: {
        type: "inline-radio"
      }
    },
    validationStatus: {
      options: ["no status", "warning", "error", "success"],
      control: {
        type: "select"
      }
    },
    theme: {
      options: ["light", "dark", "inherit"],
      control: {
        type: "inline-radio"
      }
    }
  },
  name: "Playground"
}`,...we.parameters?.docs?.source}}};const gt=["Default","Required","Disabled","Sizes","HiddenLabel","ConditionalDynamic","ConditionalStatic","SlottedLabel","HelperText","Validation","AriaLiveBehaviour","Form_","Indeterminate_","IndeterminateWithChildren_","TextFieldValueChange","Controlled_","Uncontrolled_","DynamicLoading","Internationalisation","Playground"],St=Object.freeze(Object.defineProperty({__proto__:null,AriaLiveBehaviour:Ce,ConditionalDynamic:ye,ConditionalStatic:ke,Controlled_:Fe,Default:fe,Disabled:he,DynamicLoading:_e,Form_:Ie,HelperText:xe,HiddenLabel:pe,IndeterminateWithChildren_:De,Indeterminate_:Se,Internationalisation:Ae,Playground:we,Required:be,Sizes:ve,SlottedLabel:ge,TextFieldValueChange:Ne,Uncontrolled_:Te,Validation:Ee,__namedExportsOrder:gt,default:kt},Symbol.toStringTag,{value:"Module"}));export{St as I};
