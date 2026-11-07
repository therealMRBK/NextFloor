/*! NextFloor, MIT licence. Includes three.js (MIT) and Lit (BSD-3-Clause); see LICENSE and THIRD_PARTY_NOTICES.md */
var S={cs:"adb05dfb06ef",es:"90b4b9a28b89",fr:"7d57772b9092",it:"ca397fb7d036",nl:"6047f29c6cfc",pl:"70830526b9f8",pt:"2a4901ef3ebd",sv:"75ae0cd94b24",zh:"4f09a2504024"};var Jr=globalThis,eo=Jr.ShadowRoot&&(Jr.ShadyCSS===void 0||Jr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,xi=Symbol(),sl=new WeakMap,Zn=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==xi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o,n=this.t;if(eo&&e===void 0){let r=n!==void 0&&n.length===1;r&&(e=sl.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&sl.set(n,e))}return e}toString(){return this.cssText}},al=t=>new Zn(typeof t=="string"?t:t+"",void 0,xi),ae=(t,...e)=>{let n=t.length===1?t[0]:e.reduce((r,o,i)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1],t[0]);return new Zn(n,t,xi)},ll=(t,e)=>{if(eo)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(let n of e){let r=document.createElement("style"),o=Jr.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,t.appendChild(r)}},$i=eo?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(let r of e.cssRules)n+=r.cssText;return al(n)})(t):t;var{is:Hm,defineProperty:Cm,getOwnPropertyDescriptor:Wm,getOwnPropertyNames:Bm,getOwnPropertySymbols:Nm,getPrototypeOf:Vm}=Object,to=globalThis,cl=to.trustedTypes,Km=cl?cl.emptyScript:"",Gm=to.reactiveElementPolyfillSupport,qn=(t,e)=>t,Si={toAttribute(t,e){switch(e){case Boolean:t=t?Km:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},dl=(t,e)=>!Hm(t,e),ul={attribute:!0,type:String,converter:Si,reflect:!1,useDefault:!1,hasChanged:dl};Symbol.metadata??=Symbol("metadata"),to.litPropertyMetadata??=new WeakMap;var lt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=ul){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(e,n),!n.noAccessor){let r=Symbol(),o=this.getPropertyDescriptor(e,r,n);o!==void 0&&Cm(this.prototype,e,o)}}static getPropertyDescriptor(e,n,r){let{get:o,set:i}=Wm(this.prototype,e)??{get(){return this[n]},set(s){this[n]=s}};return{get:o,set(s){let a=o?.call(this);i?.call(this,s),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ul}static _$Ei(){if(this.hasOwnProperty(qn("elementProperties")))return;let e=Vm(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(qn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(qn("properties"))){let n=this.properties,r=[...Bm(n),...Nm(n)];for(let o of r)this.createProperty(o,n[o])}let e=this[Symbol.metadata];if(e!==null){let n=litPropertyMetadata.get(e);if(n!==void 0)for(let[r,o]of n)this.elementProperties.set(r,o)}this._$Eh=new Map;for(let[n,r]of this.elementProperties){let o=this._$Eu(n,r);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let n=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let o of r)n.unshift($i(o))}else e!==void 0&&n.push($i(e));return n}static _$Eu(e,n){let r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,n=this.constructor.elementProperties;for(let r of n.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ll(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$ET(e,n){let r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(o!==void 0&&r.reflect===!0){let i=(r.converter?.toAttribute!==void 0?r.converter:Si).toAttribute(n,r.type);this._$Em=e,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,n){let r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let i=r.getPropertyOptions(o),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Si;this._$Em=o;let a=s.fromAttribute(n,i.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,n,r,o=!1,i){if(e!==void 0){let s=this.constructor;if(o===!1&&(i=this[e]),r??=s.getPropertyOptions(e),!((r.hasChanged??dl)(i,n)||r.useDefault&&r.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,r))))return;this.C(e,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,n,{useDefault:r,reflect:o,wrapped:i},s){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??n??this[e]),i!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(n=void 0),this._$AL.set(e,n)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[o,i]of r){let{wrapped:s}=i,a=this[o];s!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,i,a)}}let e=!1,n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(n)}willUpdate(e){}_$AE(e){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(e){}firstUpdated(e){}};lt.elementStyles=[],lt.shadowRootOptions={mode:"open"},lt[qn("elementProperties")]=new Map,lt[qn("finalized")]=new Map,Gm?.({ReactiveElement:lt}),(to.reactiveElementVersions??=[]).push("2.1.2");var Pi=globalThis,hl=t=>t,no=Pi.trustedTypes,pl=no?no.createPolicy("lit-html",{createHTML:t=>t}):void 0,yl="$lit$",wt=`lit$${Math.random().toFixed(9).slice(2)}$`,wl="?"+wt,Um=`<${wl}>`,Ht=document,Xn=()=>Ht.createComment(""),Qn=t=>t===null||typeof t!="object"&&typeof t!="function",Ti=Array.isArray,jm=t=>Ti(t)||typeof t?.[Symbol.iterator]=="function",Mi=`[ 	
\f\r]`,Yn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fl=/-->/g,ml=/>/g,Ot=RegExp(`>|${Mi}(?:([^\\s"'>=/]+)(${Mi}*=${Mi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gl=/'/g,_l=/"/g,vl=/^(?:script|style|textarea|title)$/i,Ii=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),m=Ii(1),E=Ii(2),N0=Ii(3),ct=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),bl=new WeakMap,Lt=Ht.createTreeWalker(Ht,129);function kl(t,e){if(!Ti(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return pl!==void 0?pl.createHTML(e):e}var Zm=(t,e)=>{let n=t.length-1,r=[],o,i=e===2?"<svg>":e===3?"<math>":"",s=Yn;for(let a=0;a<n;a++){let l=t[a],c,u,h=-1,p=0;for(;p<l.length&&(s.lastIndex=p,u=s.exec(l),u!==null);)p=s.lastIndex,s===Yn?u[1]==="!--"?s=fl:u[1]!==void 0?s=ml:u[2]!==void 0?(vl.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=Ot):u[3]!==void 0&&(s=Ot):s===Ot?u[0]===">"?(s=o??Yn,h=-1):u[1]===void 0?h=-2:(h=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?Ot:u[3]==='"'?_l:gl):s===_l||s===gl?s=Ot:s===fl||s===ml?s=Yn:(s=Ot,o=void 0);let d=s===Ot&&t[a+1].startsWith("/>")?" ":"";i+=s===Yn?l+Um:h>=0?(r.push(c),l.slice(0,h)+yl+l.slice(h)+wt+d):l+wt+(h===-2?a:d)}return[kl(t,i+(t[n]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},Jn=class t{constructor({strings:e,_$litType$:n},r){let o;this.parts=[];let i=0,s=0,a=e.length-1,l=this.parts,[c,u]=Zm(e,n);if(this.el=t.createElement(c,r),Lt.currentNode=this.el.content,n===2||n===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=Lt.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let h of o.getAttributeNames())if(h.endsWith(yl)){let p=u[s++],d=o.getAttribute(h).split(wt),f=/([.?@])?(.*)/.exec(p);l.push({type:1,index:i,name:f[2],strings:d,ctor:f[1]==="."?Ri:f[1]==="?"?Ai:f[1]==="@"?Fi:an}),o.removeAttribute(h)}else h.startsWith(wt)&&(l.push({type:6,index:i}),o.removeAttribute(h));if(vl.test(o.tagName)){let h=o.textContent.split(wt),p=h.length-1;if(p>0){o.textContent=no?no.emptyScript:"";for(let d=0;d<p;d++)o.append(h[d],Xn()),Lt.nextNode(),l.push({type:2,index:++i});o.append(h[p],Xn())}}}else if(o.nodeType===8)if(o.data===wl)l.push({type:2,index:i});else{let h=-1;for(;(h=o.data.indexOf(wt,h+1))!==-1;)l.push({type:7,index:i}),h+=wt.length-1}i++}}static createElement(e,n){let r=Ht.createElement("template");return r.innerHTML=e,r}};function sn(t,e,n=t,r){if(e===ct)return e;let o=r!==void 0?n._$Co?.[r]:n._$Cl,i=Qn(e)?void 0:e._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(t),o._$AT(t,n,r)),r!==void 0?(n._$Co??=[])[r]=o:n._$Cl=o),o!==void 0&&(e=sn(t,o._$AS(t,e.values),o,r)),e}var Ei=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:n},parts:r}=this._$AD,o=(e?.creationScope??Ht).importNode(n,!0);Lt.currentNode=o;let i=Lt.nextNode(),s=0,a=0,l=r[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new er(i,i.nextSibling,this,e):l.type===1?c=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(c=new zi(i,this,e)),this._$AV.push(c),l=r[++a]}s!==l?.index&&(i=Lt.nextNode(),s++)}return Lt.currentNode=Ht,o}p(e){let n=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},er=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,n,r,o){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,n=this._$AM;return n!==void 0&&e?.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=sn(this,e,n),Qn(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==ct&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):jm(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==g&&Qn(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ht.createTextNode(e)),this._$AH=e}$(e){let{values:n,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Jn.createElement(kl(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(n);else{let i=new Ei(o,this),s=i.u(this.options);i.p(n),this.T(s),this._$AH=i}}_$AC(e){let n=bl.get(e.strings);return n===void 0&&bl.set(e.strings,n=new Jn(e)),n}k(e){Ti(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,o=0;for(let i of e)o===n.length?n.push(r=new t(this.O(Xn()),this.O(Xn()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(e=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);e!==this._$AB;){let r=hl(e).nextSibling;hl(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},an=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,r,o,i){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=g}_$AI(e,n=this,r,o){let i=this.strings,s=!1;if(i===void 0)e=sn(this,e,n,0),s=!Qn(e)||e!==this._$AH&&e!==ct,s&&(this._$AH=e);else{let a=e,l,c;for(e=i[0],l=0;l<i.length-1;l++)c=sn(this,a[r+l],n,l),c===ct&&(c=this._$AH[l]),s||=!Qn(c)||c!==this._$AH[l],c===g?e=g:e!==g&&(e+=(c??"")+i[l+1]),this._$AH[l]=c}s&&!o&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ri=class extends an{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}},Ai=class extends an{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}},Fi=class extends an{constructor(e,n,r,o,i){super(e,n,r,o,i),this.type=5}_$AI(e,n=this){if((e=sn(this,e,n,0)??g)===ct)return;let r=this._$AH,o=e===g&&r!==g||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==g&&(r===g||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},zi=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){sn(this,e)}};var qm=Pi.litHtmlPolyfillSupport;qm?.(Jn,er),(Pi.litHtmlVersions??=[]).push("3.3.3");var xl=(t,e,n)=>{let r=n?.renderBefore??e,o=r._$litPart$;if(o===void 0){let i=n?.renderBefore??null;r._$litPart$=o=new er(e.insertBefore(Xn(),i),i,void 0,n??{})}return o._$AI(t),o};var Di=globalThis,ie=class extends lt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=xl(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ct}};ie._$litElement$=!0,ie.finalized=!0,Di.litElementHydrateSupport?.({LitElement:ie});var Ym=Di.litElementPolyfillSupport;Ym?.({LitElement:ie});(Di.litElementVersions??=[]).push("4.2.2");var Ue=(t,e,n={})=>t.callWS({type:`nextfloor/${e}`,...n});async function ro(t,e){return(await Ue(t,"image/get",{image_id:e})).data}async function ln(t,e,n){await Ue(t,"image/set",{image_id:e,data:n})}async function $l(t){return(await Ue(t,"history/list")).snapshots}async function Sl(t,e){return(await Ue(t,"history/snapshot",e?{name:e}:{})).id}async function Ml(t,e){return(await Ue(t,"history/get",{snapshot_id:e})).building}async function El(t,e){await Ue(t,"history/delete",{snapshot_id:e})}async function Rl(t,e){return(await Ue(t,"history/restore",{snapshot_id:e})).revision}var tr=(t,e)=>Ue(t,"packs/import",{pack:e});async function Al(t,e){await Ue(t,"packs/remove",{pack_id:e})}var Fl=t=>Ue(t,"backup/export"),zl=(t,e,n)=>Ue(t,"backup/import",{building:e,packs:n});var Oi=t=>t.slice(0,t.indexOf(".")),Xm={light:"light",switch:"switch",input_boolean:"switch",valve:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",event:"sensor",scene:"scene",script:"script"},Z=t=>Xm[Oi(t)]??null,Li=["light","cover","climate","media","switch","fan","lock","binary","sensor","scene","script"];var Pl=new Set(["light","switch","fan"]),vt=t=>t!==null&&t!=="scene"&&t!=="script",kt=t=>!t||t.state==="unavailable"||t.state==="unknown"&&!t.entity_id.startsWith("event.");function N(t,e,n){let r=String(t?.states[e]?.attributes.friendly_name??t?.entities?.[e]?.name??e);if(!n||r.length<=n.length+1||!r.toLowerCase().startsWith(`${n.toLowerCase()} `))return r;let o=r.slice(n.length+1);return o[0].toUpperCase()+o.slice(1)}var Tl=t=>!!t&&t.entity_id.startsWith("sensor.")&&t.attributes.device_class==="enum";function oo(t,e,n=null){if(t==="light"&&n==="floor")return 1.95;if(t==="light"&&n==="table")return 1.25;if(t==="light"&&n==="wall")return 1.95;switch(t){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var Ll=[],io=new Map,Qm=0,ue=(t,e)=>`pack:${t}:${e}`,ut=t=>t.startsWith("pack:");function Hi(t){Ll=t,io=new Map;for(let e of t)for(let n of e.items)io.set(ue(e.id,n.id),n);Qm+=1}var rr=()=>Ll;var Jm={};function U(t){if(!ut(t))return;let e=io.get(t);if(e)return e;let[,n,...r]=t.split(":"),o=Jm[n];return o?io.get(ue(o,r.join(":"))):void 0}var eg=.22;function Il(t,e,n,r){let o=Math.min(eg,n/3);if(r<=o*2.4||Math.abs(r-n)<1e-6)return e*(r/n)+(t-e)*(r/n);let i=e*(r/n),s=t-e;return s<=o?i+s:s>=n-o?i+r-(n-s):i+o+(s-o)*(r-2*o)/(n-2*o)}function nr(t,e,n,r,o){return[Il(t*r,n*r,r,o)/o,Il(e*r,n*r,r,o)/o]}var Dl=new WeakMap;function Hl(t,e,n,r){let[o,i,s]=t.size;if(t.vehicle||t.stretch||Math.abs(e-o)<1e-4&&Math.abs(n-i)<1e-4&&Math.abs(r-s)<1e-4)return t.parts;let a=`${e.toFixed(4)}|${n.toFixed(4)}|${r.toFixed(4)}`,l=Dl.get(t),c=l?.get(a);if(c)return c;let u=t.parts.map(h=>{if(h.shape==="sweep")return h;let[p,d]=nr(h.x-h.w/2,h.x+h.w/2,-.5,o,e),[f,_]=nr(h.z-h.d/2,h.z+h.d/2,-.5,i,n),[y,b]=nr(h.y,h.y+h.h,0,s,r);if(h.rot)return{...h,x:(p+d)/2,z:(f+_)/2,w:h.w*o/e,d:h.d*i/n,y,h:b-y};let v={...h,x:(p+d)/2,z:(f+_)/2,w:d-p,d:_-f,y,h:b-y};if(h.shape==="loft"){let[w,x,k,$]=[h.tx??h.x,h.tz??h.z,h.tw??h.w,h.td??h.d],[R,F]=nr(w-k/2,w+k/2,-.5,o,e),[z,I]=nr(x-$/2,x+$/2,-.5,i,n);Object.assign(v,{tx:(R+F)/2,tz:(z+I)/2,tw:F-R,td:I-z})}return v});return l||Dl.set(t,l=new Map),l.size>32&&l.clear(),l.set(a,u),u}var Ci=t=>!!t?.parts.some(e=>e.move);var Cl=t=>U(t)?.parts.find(e=>e.screen),Ol=.06;function Wl(t){let e=U(t);if(!e)return!1;let[n,r,o]=e.size;return e.parts.filter(i=>i.screen).some(i=>{let[s,a]=[i.w*n,i.d*r,i.h*o].sort((l,c)=>c-l);return a>=Ol&&s>=Ol})}function Je(t){return je[t]??U(t)?.size??[.6,.6,.8]}function xt(t){let e=U(t);return Zl.has(t)||!!e?.electric||!!e?.light||!!e?.climate}var Bl=t=>!!U(t)?.parts.some(e=>e.picture),cn=t=>!!U(t)?.climate;function Nl(t,e){return t.name[e.split("-")[0]]??t.name.en??Object.values(t.name)[0]??t.id}var tg={wohnen:"Living & Pets",kino:"Home Cinema & Gaming",kueche:"Kitchen Extras",bad:"Bathroom Extras",schlafen:"Bedroom & Kids",technik:"Office & Homelab",energie:"Energy & Building Services",garten:"Garden & Terrace (older)",fitness:"Fitness (older)",fahrzeuge:"Vehicles",ikea:"IKEA sizes",treppen:"Stairs & railings",ausbau:"Architecture & fit-out",werkstatt:"Garage & workshop",a_wohnzimmer:"Living room",a_schlafzimmer:"Bedroom",a_kueche:"Kitchen",a_bad:"Bathroom",a_kinderzimmer:"Kids' room",a_buero:"Office & gaming",a_fitness:"Fitness",a_haustiere:"Pets",a_garten:"Garden & patio",a_kino:"Home cinema & hi-fi",a_smart:"Smart home & tech",a_haustechnik:"Utility & building services",a_saison:"Season & decoration",a_smart2:"Smart home 2",a_haustechnik2:"Building services 2",a_wellness:"Wellness",a_garten2:"Garden 2",a_kueche2:"Kitchen 2",a_fahrzeuge2:"Vehicles 2",a_aussenkueche:"Outdoor kitchen & terrace",a_werkstatt2:"Workshop 2",a_japandi:"Japandi & Scandi",a_loft:"Loft & industrial",a_gruen:"Indoor greenery",a_musik:"Music & studio",a_bilder:"Pictures & frames"};function Vl(t,e){if(e.split("-")[0]==="de")return t.name;let n=/^nextfloor\.(.+)$/.exec(t.id)?.[1];return n&&tg[n]||t.name}function un(t,e){return e.mount_y!=null?e.mount_y:rg(t,e)+(ng(e)?0:Ul(t,e.x,e.z))}var ng=t=>t.type==="led_strip"||U(t.type)?.mount==="ceiling";function rg(t,e){if(e.type==="lamp_wall")return Kl;if(e.type==="led_strip")return Math.max(0,et(t,e.x,e.z)-.04-Math.max(.02,e.h));let n=U(e.type);if(!n)return Gl(e);switch(n.mount){case"surface":return jl(t,e.x,e.z);case"wall":return n.wall_y??1;case"ceiling":return Math.max(0,so(t,e)-e.h);default:return 0}}function Wi(t){if(t==="plant")return"plant";let e=U(t);return e?e.household?e.household:/monstera|plant|herb_garden|flower_pots|bonsai|ficus|cactus|kaktus/.test(e.id)?"plant":null:null}var ql=["turn","slide","top"],Yl=["always","active","no_power","never"],ao=(t,e=new Date().toISOString().slice(0,10))=>!!t.due&&t.due<=e,Xl=["gable","hip","halfhip","pyramid","mansard","pent","flat","parapet"],lo=["navigate","more_info","service","fire_dom_event"];function co(t,e,n){return t?e?!!n.lock_plan:!!t.locked:!1}var Ql=["rain","snow","fog","clouds","lightning","sky"],Jl=["rain","snow","clouds","lightning","sky"],ec=["lawn","terrace","path","driveway","pool","bed","wild","hedge","fence","pergola"],Bi={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2};function Ni(t){return t==="hedge"||t==="fence"||t==="pergola"}var tc=["x","-x","z","-z"];function og(t,e,n){let r=t.slope??0;if(!r||t.type==="pool")return 0;let o=t.slope_dir??"x",i=(c,u)=>o==="x"?c:o==="-x"?-c:o==="z"?u:-u,s=1/0,a=-1/0;for(let[c,u]of t.points){let h=i(c,u);s=Math.min(s,h),a=Math.max(a,h)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(i(e,n)-s)/(a-s)));return r*l}function ig(t,e,n,r){return nc(t)+(e.offset??0)+Bi[e.type]-og(e,n,r)}function nc(t){return t.elevation>.3?0:-.2}function rc(t,e,n){let r=(t.outdoor??[]).filter(i=>!Ni(i.type)&&i.type!=="pool"&&H([e,n],i.points)),o=[...r].reverse().find(i=>i.cut)??r[0];return o?ig(t,o,e,n):nc(t)}var oc=t=>t.cut??t.type==="pool",ic=30,sc={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null},ac=["wood","oak","tiles","carpet","stone","concrete"],lc={type:"none",pitch:35,overhang:.4},cc="#d6cfc2",uo="#e8e3da",uc={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...lc}};function dn(){return{version:1,floors:[],settings:{...uc},energy:{...sc},presence:[]}}function tt(t,e,n){return{id:t,name:e,elevation:n,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null,outdoor:[],walls:[],ha_floor:null}}var sg=2.75;function dc(t,e){if(e!=null&&Number.isFinite(e))return Math.round(e*sg*100)/100;let n=t.reduce((r,o)=>!r||o.elevation>r.elevation?o:r,null);return n?Math.round((n.elevation+n.height+.25)*100)/100:0}function hc(t,e,n){let r=t.rooms.flatMap(a=>a.points.map(l=>l[0])),o=t.rooms.flatMap(a=>a.points.map(l=>l[1])),i=r.length?Math.ceil(Math.max(...r))+1:0,s=o.length?Math.floor(Math.min(...o)):0;return e.map((a,l)=>{let c=i+l%3*4.5,u=s+Math.floor(l/3)*3.5;return{id:n(),name:a.name,area_id:a.area_id,points:[[c,u],[c+4,u],[c+4,u+3],[c,u+3]],floor_material:"wood"}})}function pc(t,e,n,r){let o=t.rotation*Math.PI/180,i=Math.cos(o),s=Math.sin(o),[a,l]=e,c=t.x-a*(t.w/2)*i+l*(t.d/2)*s,u=t.z-a*(t.w/2)*s-l*(t.d/2)*i,h=n[0]-c,p=n[1]-u,d=b=>Math.max(.1,Math.round(b/r)*r),f=d((h*i+p*s)*a),_=d((-h*s+p*i)*l),y=b=>Math.round(b*1e3)/1e3;return{x:y(c+a*(f/2)*i-l*(_/2)*s),z:y(u+a*(f/2)*s+l*(_/2)*i),w:y(f),d:y(_)}}var ho=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","ceiling_fan","lamp_floor","lamp_table","lamp_wall","led_strip","lamp_uplight","lamp_bollard","lamp_garden","radiator","sofa","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug","table","table_round","chair","bench","corner_bench","bar_stool","kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge","bed","bunk_bed","nightstand","wardrobe","dresser","bathtub","shower","wc","washbasin","washer","dryer","desk","office_chair","tall_cabinet","coat_rack","stairs","robot_vacuum","inverter","home_battery","wallbox","meter","grid_point","parking","fridge_smart","stairwell"],fc={lights:["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","ceiling_fan","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"],living:["sofa","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug"],dining:["table","table_round","chair","bench","corner_bench","bar_stool"],kitchen:["kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge"],sleeping:["bed","bunk_bed","nightstand","wardrobe","dresser"],bath:["bathtub","shower","wc","washbasin","washer","dryer"],work:["desk","worktop","office_chair","tall_cabinet","coat_rack","radiator","stairs","robot_vacuum"],vehicles:["parking"]},De=["meter","inverter","home_battery","wallbox","grid_point"],mc=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","ceiling_fan","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Kl=1.75;function po(t){return Vi.has(t.type)||["stairwell","parking"].includes(t.type)?!1:U(t.type)?.mount!=="ceiling"}function le(t){return mc.has(t)||!!U(t)?.light}var ag=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function gc(t,e,n,r=0){let o=ce(t.points),i=o.x1-o.x0-2*r,s=o.z1-o.z0-2*r,a=[];for(let l=0;l<e;l++)for(let c=0;c<n;c++){let u=[Math.round((o.x0+r+i/n*(c+.5))*1e3)/1e3,Math.round((o.z0+r+s/e*(l+.5))*1e3)/1e3];H(u,t.points)&&a.push(u)}return a}function hn(t,e,n){let r=s=>Math.round(s*1e3)/1e3,[o,i]={right:[1,0],down:[0,1],left:[-1,0],up:[0,-1]}[n];return[r(t[0]+o*e),r(t[1]+i*e)]}function Gl(t){switch(t.type){case"home_battery":return t.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-t.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var Vi=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","ceiling_fan"]);function _c(t,e){return t.filter(n=>n.elevation<e.elevation).flatMap(n=>n.rooms.filter(r=>r.points.length>=3&&r.ceiling!=null&&r.ceiling>n.height+.005&&n.elevation+r.ceiling>e.elevation+.05)).map(n=>n.points)}var Ki=t=>t?.floor_offset&&Number.isFinite(t.floor_offset)?t.floor_offset:0;function Ul(t,e,n){let r=t.rooms.find(o=>o.points.length>=3&&o.floor_offset&&H([e,n],o.points));return Ki(r)}function et(t,e,n){let r=t.rooms.find(o=>o.points.length>=3&&H([e,n],o.points));return r?.ceiling!=null&&r.ceiling>0?r.ceiling:t.height}var so=(t,e)=>e.ceiling_y!=null&&e.ceiling_y>0?e.ceiling_y:et(t,e.x,e.z);function jl(t,e,n){let r=0;for(let o of t.furniture)!(ag.has(o.type)||U(o.type)?.surface)||!H([e,n],Zi(o))||(r=Math.max(r,o.h));return r}var Zl=new Set([...mc,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),je={sofa:[2.2,.9,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],ceiling_fan:[1.32,1.32,.32],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var Gi=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],Ui=["standard","bars","glass_wall"],fo=new Set(["interior","front"]);function Ct(t,e){return t.type==="door"?t.style&&Gi.includes(t.style)?t.style:e?"front":"interior":t.style&&Ui.includes(t.style)?t.style:"standard"}function bc(t,e,n,r){if(e!=="sidelight"&&e!=="sidelights")return null;let o=e==="sidelights",i=t-.04,s=Math.min(1.05,Math.max(.6,i-(o?.6:.3))),a=(i-s)/(o?2:1),l=r.sidelight_width??a,c=o?r.sidelight_width2??r.sidelight_width??a:0;l=Math.max(.1,l),c=o?Math.max(.1,c):0;let u=i-.5;if(l+c>u){let p=Math.max(0,u)/(l+c);l*=p,c*=p}return o?{panels:[[.02,.02+l],[t-.02-c,t-.02]],x0:.02+l,x1:t-.02-c}:(n?!!r.sidelight_hinge:!r.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:t-.02}:{panels:[[t-.02-l,t-.02]],x0:.02,x1:t-.02-l}}function ji(t){return t==="front"||t==="front_glass"||t==="sidelight"||t==="sidelights"}var pn={door:{type:"door",leaves:1,width:.9,sill:0,height:2.05,style:"interior"},front:{type:"door",leaves:1,width:1,sill:0,height:2.1,style:"front"},door_double:{type:"door",leaves:2,width:1.6,sill:0,height:2.05},window:{type:"window",leaves:1,width:1.2,sill:.9,height:1.3},window_double:{type:"window",leaves:2,width:1.6,sill:.9,height:1.3},terrace:{type:"window",leaves:1,width:1,sill:0,height:2.1},terrace_double:{type:"window",leaves:2,width:1.8,sill:0,height:2.1},lift_slide:{type:"window",leaves:1,width:2.4,sill:0,height:2.15,opens:"slide"},garage:{type:"garage",leaves:1,width:2.5,sill:0,height:2.1},glass_wall:{type:"window",leaves:1,width:2,sill:0,height:2.4,style:"glass_wall"}};function fn(t){if(t.type==="garage")return"garage";if(t.type==="window"&&t.style==="glass_wall")return"glass_wall";if(t.type==="window"&&t.opens==="slide"&&t.sill<.1)return"lift_slide";let e=t.leaves===2;return t.type==="door"?!e&&t.style&&ji(t.style)?"front":e?"door_double":"door":t.sill<.1?e?"terrace_double":"terrace":e?"window_double":"window"}function Ze(t){t.energy={...sc,...t.energy??{}},t.presence=t.presence??[],t.version=1,t.settings={...uc,...t.settings,roof:{...lc,...t.settings?.roof??{}}},t.floors.forEach((e,n)=>{let r=tt(e.id,e.name??`Floor ${n+1}`,e.elevation??n*2.8);for(let o of Object.keys(r))e[o]===void 0&&(e[o]=r[o])});for(let e of t.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(r=>({...r,name:r.name??"",area_id:r.area_id??null,floor_material:r.floor_material??"wood",panel:r.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(r=>({...r,mount:r.mount??null,rotation:r.rotation??0})),e.furniture=e.furniture.map(r=>({...r,entity:r.entity??null,power:r.power??null}));let n=e.placements.filter(r=>r.entity_id.startsWith("light."));if(n.length){let r={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let o of n){let i=r[o.mount??"ceiling"],[s,a,l]=je[i],c=`lamp_${o.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,54),u=c,h=1;for(;e.furniture.some(p=>p.id===u);)u=`${c}_${h++}`;e.furniture.push({id:u,type:i,x:o.x,z:o.z,rotation:0,w:s,d:a,h:l,variant:null,entity:o.entity_id,power:null,animations_enabled:o.animations_enabled,effect_animations:structuredClone(o.effect_animations)})}e.placements=e.placements.filter(o=>!o.entity_id.startsWith("light."))}e.openings=e.openings.map(r=>({...r,type:["door","window","garage"].includes(r.type)?r.type:"door",edge:Number.isInteger(r.edge)?r.edge:0,offset:Number.isFinite(r.offset)?r.offset:.5,width:Number.isFinite(r.width)&&r.width>0?r.width:r.type==="garage"?2.5:r.type==="window"?1.2:.9,height:Number.isFinite(r.height)&&r.height>0?r.height:r.type==="window"?1.3:r.type==="garage"?2.1:2.05,sill:Number.isFinite(r.sill)?r.sill:r.type==="window"?.9:0,hinge:r.hinge??"left",leaves:r.leaves??1,swing:r.swing??"in",style:r.style??null,cover:r.cover??null,contact:r.contact??null,contact2:r.contact2??null,tilt:r.tilt??null}))}return lg(t),t}function lg(t){let e=(n,r)=>{let o=new Set;for(let i of n)(typeof i.id!="string"||!i.id||o.has(i.id))&&(i.id=D(r)),o.add(i.id)};e(t.floors,"floor");for(let n of t.floors){for(let r of n.rooms)(typeof r.id!="string"||!r.id)&&(r.id=D("room"));e(n.openings,"op"),e(n.furniture,"furn"),e(n.outdoor,"out")}}function D(t){return`${t}_${Math.random().toString(36).slice(2,10)}`}function ge(t){let e=0;for(let n=0;n<t.length;n++){let[r,o]=t[n],[i,s]=t[(n+1)%t.length];e+=r*s-i*o}return e/2}function we(t){return Math.abs(ge(t))}function _e(t){let e=ge(t);if(Math.abs(e)<1e-9){let o=t.length||1;return[t.reduce((i,s)=>i+s[0],0)/o,t.reduce((i,s)=>i+s[1],0)/o]}let n=0,r=0;for(let o=0;o<t.length;o++){let[i,s]=t[o],[a,l]=t[(o+1)%t.length],c=i*l-a*s;n+=(i+a)*c,r+=(s+l)*c}return[n/(6*e),r/(6*e)]}function mn(t){if(t.length!==4)return!1;for(let e=0;e<4;e++){let[n,r]=t[e],[o,i]=t[(e+1)%4];if(Math.abs(n-o)>1e-6&&Math.abs(r-i)>1e-6)return!1}return!0}function ce(t){let e=1/0,n=1/0,r=-1/0,o=-1/0;for(let[i,s]of t)e=Math.min(e,i),n=Math.min(n,s),r=Math.max(r,i),o=Math.max(o,s);return{x0:e,z0:n,x1:r,z1:o}}function Zi(t){let e=t.rotation*Math.PI/180,n=Math.cos(e),r=Math.sin(e),o=t.w/2,i=t.d/2;return[[-o,-i],[o,-i],[o,i],[-o,i]].map(([s,a])=>[t.x+s*n-a*r,t.z+s*r+a*n])}function H(t,e){let n=!1;for(let r=0,o=e.length-1;r<e.length;o=r++){let[i,s]=e[r],[a,l]=e[o];s>t[1]!=l>t[1]&&t[0]<(a-i)*(t[1]-s)/(l-s)+i&&(n=!n)}return n}var mo={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",ceiling_fan:"fan",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var qi=t=>t.trim().replace(/^\/local\/www\//i,"/local/"),Yi=t=>/^(https:\/\/|\/local\/|\/hacsfiles\/)\S+\.m?js(\?\S*)?$/i.test(t.trim());var ug=globalThis,wc=ug.__nextfloorPluginStore??={plugins:new Map,listeners:new Set},Xi=wc.plugins,yc=wc.listeners;var dg=5;function vc(t,e){t.errors.length<dg&&t.errors.push(e instanceof Error?e.message:String(e))}function go(t){return yc.add(t),()=>yc.delete(t)}var Qi=()=>[...Xi.values()].map(t=>t.status),kc=()=>[...Xi.values()].flatMap(t=>Object.keys(t.plugin.lightAnimations??{}));function*_o(t,e){for(let{plugin:n,status:r}of Xi.values())for(let o of n.devices??[]){let i=!1;try{i=o.match(t,e)}catch(s){vc(r,s)}i&&(yield{device:o,status:r})}}function bo(t,e){for(let{device:n}of _o(t,e))return n.kind??"sensor";return null}function xc(t,e){let n=t.states[e];if(!n)return null;let r=hg({hass:t,entityId:e,state:n})?.icon?.trim();return r&&/^mdi:[a-z0-9-]+$/i.test(r)?r:null}function hg(t){let e=null;for(let{device:n,status:r}of _o(t.entityId,t.state))if(n.marker)try{let o=n.marker(t);if(!o)continue;e={...e??{}},typeof o.icon=="string"&&o.icon&&(e.icon=o.icon),typeof o.text=="string"&&(e.text=o.text.slice(0,60)),typeof o.active=="boolean"&&(e.active=o.active)}catch(o){vc(r,o)}return e}function yo(t,e){return t?typeof t=="string"?t:t[e]??t[e.split("-")[0]]??t.en??Object.values(t)[0]??"":""}function $c(t,e){let n=[];for(let{device:r,status:o}of _o(t,e))r.settings?.length&&n.push({pluginId:o.id,name:o.name,settings:r.settings});return n}function Sc(t,e){let n={};for(let r of t??[]){let o=e?.[r.key],i=r.type==="number"?typeof o=="number"&&Number.isFinite(o):r.type==="boolean"?typeof o=="boolean":typeof o=="string"&&(r.options??[]).some(([s])=>s===o);n[r.key]=i?o:r.default}return n}function Mc(t,e){for(let{device:n}of _o(t,e))if(n.floorWedge)return!0;return!1}var pg=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),fg=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),mg=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),gg=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function $t(t,e){let n=t.entities?.[e];return n&&(n.area_id||(n.device_id?t.devices?.[n.device_id]?.area_id:null))||null}var Rc=(t,e)=>{let n=t.entities?.[e];return!!(n?.hidden||n?.entity_category)},Oe=(t,e)=>Z(e)??bo(e,t.states[e]);function Ec(t,e){let n=t.states[e];if(!n||Rc(t,e))return!1;if(bo(e,n)!==null)return!0;let r=Z(e);if(!r)return!1;let o=n.attributes.device_class;return e.startsWith("event.")?!o||o==="button"||o==="doorbell":r==="sensor"?o?pg.has(o):fg.has(String(n.attributes.unit_of_measurement??"")):r==="binary"?o?mg.has(o):!!t.entities?.[e]?.area_id:!0}function _g(t,e){let n=t.states[e];return Z(e)!=="sensor"||!n?.attributes.unit_of_measurement||Rc(t,e)||gg.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||kt(n)}var wo=(t,e)=>e.startsWith("sensor.")&&t.states[e]?.attributes.device_class==="power",Ji=null;go(()=>Ji=null);function es(t,e){let n=t.get(e);return n||t.set(e,n=[]),n}function bg(t){let e=new Map,n=new Map,r=new Map,o=new Map,i=[],s=u=>{(Ec(t,u)||_g(t,u))&&vt(Oe(t,u))&&i.push(u)};for(let[u,h]of Object.entries(t.entities??{})){let p=h.device_id;p&&h.area_id&&(o.get(p)??o.set(p,new Set).get(p)).add(h.area_id),p&&wo(t,u)&&es(n,p).push(u),p&&!h.hidden&&!h.entity_category&&(r.get(p)??r.set(p,new Set).get(p)).add(Oi(u));let d=$t(t,u);d===null?s(u):Ec(t,u)&&es(e,d).push(u)}if(t.entities)for(let u of Object.keys(t.states))t.entities[u]||s(u);let a=Li.indexOf("binary")-.5,l=u=>{let h=Z(u),p=h?Li.indexOf(h):a;return p>a&&bo(u,t.states[u])!==null?a:p};i.sort((u,h)=>l(u)-l(h)||N(t,u).localeCompare(N(t,h)));for(let[u,h]of e){let p=t.areas?.[u]?.name;h.sort((d,f)=>l(d)-l(f)||N(t,d,p).localeCompare(N(t,f,p)))}let c=new Set;for(let[u,h]of o)h.size>1&&c.add(u);return{entities:t.entities,devices:t.devices,states:t.states,stateCount:Object.keys(t.states).length,byArea:e,powerByDevice:n,withoutArea:i,domainsByDevice:r,hubs:c}}function gn(t){let e=Ji;return e&&e.entities===t.entities&&e.devices===t.devices&&(e.states===t.states||(e.states=t.states,Object.keys(t.states).length===e.stateCount))?e:Ji=bg(t)}function be(t,e){let n=ts(t,e.area_id);return e.sub_areas?.length?[...new Set([...n,...e.sub_areas.flatMap(r=>ts(t,r))])]:n}function ts(t,e){return!e||!t.entities?[]:gn(t).byArea.get(e)??[]}function Ac(t,e){if(!t.entities)return[];let n=[];for(let[r,o]of gn(t).byArea){let i=o.filter(s=>vt(Oe(t,s)));r!==e&&i.length>0&&n.push({areaId:r,name:t.areas?.[r]?.name??r,ids:i})}return n.sort((r,o)=>r.name.localeCompare(o.name))}var Fc=t=>t.entities?gn(t).withoutArea:[],ns=(t,e)=>!!t.entities&&gn(t).hubs.has(e),vo=(t,e)=>t.entities?gn(t).powerByDevice.get(e)??[]:[];function _n(t,e){let n=new Map;for(let o of e)es(n,t.entities?.[o]?.device_id??`entity:${o}`).push(o);let r=new Map(e.map((o,i)=>[o,i]));return[...n.values()].map(o=>{let i=o.find(s=>!t.entities?.[s]?.name)??o[0];return{primary:i,others:o.filter(s=>s!==i)}}).sort((o,i)=>r.get(o.primary)-r.get(i.primary))}var rs=(t,e)=>_n(t,e).map(n=>n.primary),os={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},yg=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),wg=["vorlauf","r(\xFC|ue)cklauf","flow","return","d(\xFC|ue)se","nozzle","hotend","extruder","druckbett","heatbed","(^|[^a-z])bed($|[^a-z])","chamber","cpu","gpu","chip","soc","akku","batter","wasser","water","kessel","boiler","au(\xDF|ss)en","outdoor","outside","abgas","exhaust","sole","brine","verdampfer","kondensat","verdichter","compressor","motor","k(\xFC|ue)hl","freezer","fridge","gefrier"],vg=new RegExp(`(${wg.join("|")})`,"i");function is(t,e){let n=t.entities?.[e]?.device_id,r=n&&!ns(t,n)?gn(t).domainsByDevice.get(n):void 0;return r&&[...r].some(o=>yg.has(o))?!1:!vg.test(`${e} ${t.states[e]?.attributes.friendly_name??""}`)}function zc(t,e,n,r){let o=n.climate?.[r];if(o==="none")return[];if(o)return[o].flat().filter(c=>t.states[c]);let i=(e?.placements??[]).filter(c=>c.entity_id.startsWith("sensor.")),s=i.filter(c=>H([c.x,c.z],n.points)).map(c=>c.entity_id),a=new Set(i.filter(c=>!H([c.x,c.z],n.points)).map(c=>c.entity_id));return[...new Set([...be(t,n).filter(c=>!a.has(c)),...s])].filter(c=>c.startsWith("sensor.")&&t.states[c]?.attributes.device_class===os[r]&&is(t,c))}var kg=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),xg=new Set(["garage","gate"]),$g=new Set(["window","opening"]);function or(t,e,n=!1){let r=new Map;return t.forEach((o,i)=>{let s=n&&e.length===1?e[0]:e[i];s&&r.set(o.id,s)}),r}var Pc=(t,e)=>t==="none"?null:t??e??null,bn=t=>t&&t!=="none"?t:null;function ir(t,e){let n=new Map;for(let r of e)for(let o of r.rooms){let i=r.openings.filter(_=>_.room_id===o.id).sort((_,y)=>_.edge-y.edge||_.offset-y.offset);if(i.length===0)continue;let s=be(t,o),a=_=>t.states[_]?.attributes.device_class,l=_=>s.filter(y=>Z(y)==="binary"&&_(a(y)??"")),c=_=>i.filter(y=>y.type===_),u=or(c("window"),s.filter(_=>Z(_)==="cover"&&kg.has(a(_))),!0),h=or(c("window"),l(_=>$g.has(_))),p=or(c("door"),l(_=>_==="door")),d=or(c("garage"),s.filter(_=>Z(_)==="cover"&&xg.has(a(_)??""))),f=or(c("garage"),l(_=>_==="garage_door"));for(let _ of i){let y=_.type==="window"?u:_.type==="garage"?d:null,b=_.type==="window"?h:_.type==="garage"?f:p,v=_.leaves===2;n.set(_.id,{cover:Pc(_.cover,y?.get(_.id)),contact:_.sensor==="handle"&&_.contact==null?null:Pc(_.contact,b.get(_.id)),tilt:_.tilt==="none"?null:_.tilt,contact2:v?bn(_.contact2):null,tilt2:v?bn(_.tilt2):null,position:bn(_.position),positionInverted:!!_.position_inverted,tiltAngle:bn(_.tilt_angle),tiltMax:_.tilt_max??null,tiltOffset:_.tilt_offset??null,tiltInvert:!!_.tilt_invert,shut:!!_.shut,angled:_.type==="door"&&!!_.open_angle,lock:_.type==="door"?bn(_.lock):null,cover2:_.type==="garage"?null:bn(_.cover2)})}}return n}var Sg=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function ss(t){if(!t||kt(t))return null;let e=t.attributes.window_state;for(let n of[typeof e=="string"?e:"",t.state]){let r=n.trim(),o=r&&Sg.find(([i])=>i.test(r));if(o)return o[1]}return null}var Tc=/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,Ic=/(kühl|fridge|gefrier|freezer)/i,Dc=/(spülmaschine|geschirrspül|dishwasher)/i,Mg=/(kochfeld|herd|induktion|cooktop)/i,Eg={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:Tc,tv_wall:Tc,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:Ic,fridge_smart:Ic,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:Dc,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:Mg,sink:Dc,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i},Oc={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,ceiling_fan:/(ventilator|fan)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i},Lc=new Set(["tv_board","tv_wall"]);var yn=t=>Lc.has(t)||!!Cl(t),sr=t=>yn(t)||t==="desk"||t==="fridge_smart",Rg=t=>!!t&&t!=="none";function Ag(t,e){if(wo(t,e))return e;let n=t.entities?.[e]?.device_id;return n?vo(t,n).find(r=>r!==e)??null:null}var Fg=(t,e,n)=>t.rooms.find(r=>r.points.length>=3&&H([e,n],r.points));function ko(t,e,n,r){return t.find(o=>e?.test(n(o)))??(r?t[0]??null:null)}function dt(t,e){let n=new Map;for(let r of e){let o=new Set([...r.furniture.flatMap(i=>[i.entity,i.power,i.fan_entity]),...r.placements.map(i=>i.entity_id)].filter(Rg));for(let i of r.furniture){let s=i.type in Oc,a=cn(i.type),l=s?Oc[i.type]:Eg[i.type];if(!l&&!a&&i.entity==null&&i.power==null)continue;let c=Fg(r,i.x,i.z),u=(c?rs(t,be(t,c)):[]).filter(y=>!o.has(y)),h=y=>`${y} ${N(t,y)}`,p=y=>u.filter(b=>Z(b)===y),d=i.entity==="none"?null:i.entity??null;if(i.entity==null){if(i.type==="ceiling_fan"){let y=(c?be(t,c):[]).filter(v=>!o.has(v)),b=new Set(y.filter(v=>Z(v)==="fan").map(v=>t.entities?.[v]?.device_id).filter(Boolean));d=y.find(v=>Z(v)==="light"&&b.has(t.entities?.[v]?.device_id))??ko(p("light"),l,h,!1)}else if(s)d=ko(p("light"),l,h,!0);else if(i.type==="robot_vacuum"){let y=c?.area_id??null;d=Object.keys(t.entities??{}).find(b=>b.startsWith("vacuum.")&&!o.has(b)&&$t(t,b)===y)??null}else if(i.type==="radiator"||a)d=ko(p("climate"),l,h,!0);else if(yn(i.type)){let y=p("media");d=y.find(b=>t.states[b]?.attributes.device_class==="tv")??ko(y,l,h,Lc.has(i.type))}else l&&(d=u.find(y=>["switch","media","fan"].includes(Z(y)??"")&&l.test(h(y)))??null);d&&o.add(d)}let f=i.power==="none"?null:i.power??null;i.power==null&&(f=d?Ag(t,d):null,!f&&l&&c&&!s&&(f=be(t,c).find(y=>wo(t,y)&&!o.has(y)&&l.test(h(y)))??null),f&&o.add(f));let _=null;if(i.type==="ceiling_fan"&&(_=i.fan_entity==="none"?null:i.fan_entity??null,i.fan_entity==null)){let y=(c?be(t,c):[]).filter(v=>Z(v)==="fan"&&!o.has(v)),b=d?t.entities?.[d]?.device_id:void 0;_=(b?y.find(v=>t.entities?.[v]?.device_id===b):void 0)??y[0]??null,_&&o.add(_)}(d||f||_)&&n.set(i.id,{entity:d,power:f,...i.type==="ceiling_fan"?{fan:_}:{}})}}return n}var Hc=t=>t==="fridge"||t==="fridge_smart"||/(fridge|freezer|kuehl|gefrier|chest_freezer)/.test(t.slice(t.lastIndexOf(":")+1));function zg(t,e){return Math.min(...e.map((n,r)=>{let o=e[(r+1)%e.length],[i,s]=[o[0]-n[0],o[1]-n[1]],a=Math.min(1,Math.max(0,((t[0]-n[0])*i+(t[1]-n[1])*s)/(i*i+s*s||1)));return Math.hypot(t[0]-n[0]-i*a,t[1]-n[1]-s*a)}))}function Wc(t,e,n=[]){let r=t.points;if(r.length<3||e.length===0)return[];let o=r.map(b=>b[0]),i=r.map(b=>b[1]),[s,a,l,c]=[Math.min(...o),Math.max(...o),Math.min(...i),Math.max(...i)],u=Math.min(a-s,c-l),h=Math.max(.1,Math.min(.25,u/8)),p=Math.min(.35,u/5),d=Math.min(.7,u/4),f=_e(r),_=[];for(let b=s+h/2;b<a;b+=h)for(let v=l+h/2;v<c;v+=h){let w=[b,v];if(!H(w,r))continue;let x=zg(w,r);x>=p&&_.push({at:w,wallDistance:x})}_.length===0&&_.push({at:f,wallDistance:0});let y=[...n];return e.map(b=>{let v=Z(b)==="light",w=_[0].at,x=-1/0;for(let{at:$,wallDistance:R}of _){let F=y.length?Math.min(...y.map(P=>Math.hypot($[0]-P[0],$[1]-P[1]))):3,z=Math.hypot($[0]-f[0],$[1]-f[1]),I=Math.min(F,3)*2;z<d&&!v&&(I-=10),I-=v?z*.35:R*1.2,I>x+1e-9&&(x=I,w=$)}let k=[Math.round(w[0]*100)/100,Math.round(w[1]*100)/100];return y.push(k),{entity_id:b,x:k[0],z:k[1],y:null,mount:null}})}var Cc=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/;function Bc(t,e,n){if(n==="none")return null;if(n)return n;let r=e?t.entities?.[e]?.device_id:null;return!r||!t.entities?null:Object.values(t.entities).find(i=>i.device_id===r&&i.entity_id.startsWith("sensor.")&&(Cc.test(i.translation_key??"")||Cc.test(i.entity_id.split(".")[1])))?.entity_id??null}var K=(t,e)=>[t[0]-e[0],t[1]-e[1]],nt=(t,e)=>[t[0]+e[0],t[1]+e[1]],qe=(t,e)=>[t[0]*e,t[1]*e],Y=(t,e)=>t[0]*e[0]+t[1]*e[1],$e=(t,e)=>t[0]*e[1]-t[1]*e[0],me=t=>Math.hypot(t[0],t[1]),Ye=t=>{let e=me(t)||1;return[t[0]/e,t[1]/e]},as=t=>[-t[1],t[0]],ls=t=>[t[1],-t[0]];var Pg=.05,Tg=.2,Ig=.12;function Dg(t){let e=[];return t.forEach((n,r)=>{let o=n.points;if(o.length<3)return;let i=ge(o)>=0;o.forEach((s,a)=>{let l=o[(a+1)%o.length],c=me(K(l,s));if(c<.05)return;let u=[(l[0]-s[0])/c,(l[1]-s[1])/c],h=i?[u[1],-u[0]]:[-u[1],u[0]];(u[1]<-1e-9||Math.abs(u[1])<=1e-9&&u[0]<0)&&(u=[-u[0],-u[1]]);let p=[-u[1],u[0]],[d,f]=[Y(s,u),Y(l,u)];e.push({room:r,index:a,dir:u,normal:p,offset:Y(s,p),outside:Y(h,p)>0?1:-1,from:Math.min(d,f),to:Math.max(d,f)})})}),e}function Og(t,e,n){if(t.room===e.room||Math.abs($e(t.dir,e.dir))>Pg||t.outside===e.outside)return null;let r=(e.offset-t.offset)*t.outside;return r>n||r<-Ig||Math.abs(r)<1e-4||Math.min(t.to,e.to)-Math.max(t.from,e.from)<Tg?null:r}var cs=t=>Math.round(t*1e3)/1e3;function Nc(t,e=.6){let n=Dg(t),r=n.map((_,y)=>y),o=_=>r[_]===_?_:r[_]=o(r[_]),i=[],s=new Set,a=[];for(let _=0;_<n.length;_++)for(let y=_+1;y<n.length;y++){let b=Og(n[_],n[y],e);b!==null&&a.push([_,y,b])}a.sort((_,y)=>Math.abs(_[2])-Math.abs(y[2]));let l=new Map(n.map((_,y)=>[y,[y]])),c=(_,y)=>_.some(b=>y.some(v=>n[b].room===n[v].room&&Math.abs(n[b].offset-n[v].offset)>=.002));for(let[_,y,b]of a){let[v,w]=[o(_),o(y)];if(v!==w){if(c(l.get(v),l.get(w)))continue;r[v]=w,l.set(w,[...l.get(w),...l.get(v)]),l.delete(v)}i.push(cs(b)),s.add(_).add(y)}let u=new Map(n.map((_,y)=>[`${_.room}:${_.index}`,y]));for(let _=s.size>0;_;)_=!1,n.forEach((y,b)=>{let v=u.get(`${y.room}:${(y.index+1)%t[y.room].points.length}`);if(v===void 0||v===b)return;let w=n[v];!(Math.abs($e(y.dir,w.dir))<1e-6&&Math.abs(y.offset-w.offset)<.002&&y.outside===w.outside)||s.has(b)===s.has(v)||(s.add(b).add(v),_=!0)});n.forEach((_,y)=>{let b=u.get(`${_.room}:${(_.index+1)%t[_.room].points.length}`);if(b===void 0||b===y||!s.has(y)||!s.has(b))return;let v=n[b];Math.abs($e(_.dir,v.dir))<1e-6&&Math.abs(_.offset-v.offset)<.002&&_.outside===v.outside&&(r[o(y)]=o(b))});let h=()=>t.map(_=>({..._,points:_.points.map(y=>[y[0],y[1]])}));if(i.length===0)return{rooms:h(),gaps:i};let p=new Map;for(let _ of s)p.set(o(_),[...p.get(o(_))??[],_]);let d=t.map(_=>_.points.map(()=>new Map));for(let[_,y]of p){let b=new Map(y.map(w=>[`${n[w].room}:${Math.round(n[w].offset*500)}`,n[w].offset])),v=[...b.values()].reduce((w,x)=>w+x,0)/b.size;for(let w of y){let x=n[w],k=[x.normal[0]*(v-x.offset),x.normal[1]*(v-x.offset)];d[x.room][x.index].set(_,k),d[x.room][(x.index+1)%t[x.room].points.length].set(_,k)}}return{rooms:t.map((_,y)=>({..._,points:_.points.map((b,v)=>{let w=[...d[y][v].values()].reduce((x,k)=>[x[0]+k[0],x[1]+k[1]],[b[0],b[1]]);return[cs(w[0]),cs(w[1])]})})),gaps:i}}function Vc(t){let e=t.filter(n=>n>.04).sort((n,r)=>n-r);return e.length===0?null:Math.min(.5,Math.max(.08,Math.round(e[Math.floor(e.length/2)]*100)/100))}var Lg=.25,Kc=t=>Math.round(t*1e3)/1e3,Gc=(t,e,n)=>t.rooms.find(r=>r.points.length>=3&&H([e,n],r.points));function ds(t,e,n,r,o){let i=Gc(t,e,n);if(!i)return[r,o];let s=(a,l)=>H([a,l],i.points);return s(r,o)?[r,o]:s(r,n)?[r,n]:s(e,o)?[e,o]:[e,n]}function Hg(t,e,n,r){return t.rooms.some(o=>o.id!==e.id&&o.points.some((i,s)=>{let a=o.points[(s+1)%o.points.length];return Math.abs(Y(K(i,n),r))<.02&&Math.abs(Y(K(a,n),r))<.02}))}var us=(t,e)=>Math.abs((t-e+540)%360-180);function ar(t,e,n,r=Lg){let o=Gc(t,e.x,e.z);if(!o)return null;let i=o.points,s=ge(i)>=0?1:-1,a=null;return i.forEach((l,c)=>{let u=i[(c+1)%i.length],h=me(K(u,l));if(h<.3)return;let p=[(u[0]-l[0])/h,(u[1]-l[1])/h],d=[-p[1]*s,p[0]*s],f=Y(K([e.x,e.z],l),p);if(f<0||f>h)return;let _=Hg(t,o,l,d)?n/2:0,y=Y(K([e.x,e.z],l),d)-_,b=Math.atan2(-d[0],d[1])*180/Math.PI,w=[{rotation:b,extent:e.d/2},{rotation:b+90,extent:e.w/2},{rotation:b-90,extent:e.w/2}].reduce((k,$)=>us(e.rotation,$.rotation)<us(e.rotation,k.rotation)?$:k);if(us(e.rotation,w.rotation)>50)return;let x=y-w.extent;Math.abs(x)>r||a&&Math.abs(x)>=Math.abs(a.gap)||(a={x:Kc(e.x-d[0]*x),z:Kc(e.z-d[1]*x),rotation:(Math.round(w.rotation)%360+360)%360,gap:x})}),a&&{x:a.x,z:a.z,rotation:a.rotation}}var wn=Math.PI/180,Xe=t=>Math.tan(Math.min(80,Math.max(0,t))*wn);function cr(t){return{x0:Math.min(t.x0,t.x1),x1:Math.max(t.x0,t.x1),z0:Math.min(t.z0,t.z1),z1:Math.max(t.z0,t.z1)}}function Uc(t){if(!t.rotation)return null;let e=t.rotation*wn;return{cx:(t.x0+t.x1)/2,cz:(t.z0+t.z1)/2,c:Math.cos(e),sn:Math.sin(e)}}function jc(t,e){let n=Uc(t);if(!n)return e;let[r,o]=[e[0]-n.cx,e[1]-n.cz];return[n.cx+r*n.c-o*n.sn,n.cz+r*n.sn+o*n.c]}function hs(t,e,n){let r=Uc(t);if(!r)return[e,n];let[o,i]=[e-r.cx,n-r.cz];return[r.cx+o*r.c+i*r.sn,r.cz-o*r.sn+i*r.c]}function ur(t,e=0){let{x0:n,x1:r,z0:o,z1:i}=cr(t);return[[n-e,o-e],[r+e,o-e],[r+e,i+e],[n-e,i+e]].map(s=>jc(t,s))}function ve(t){let{x0:e,x1:n,z0:r,z1:o}=cr(t),i=s=>jc(t,s);return t.axis==="x"?{u0:e,u1:n,w:o-r,at:(s,a)=>i([s,t.flip?o-a:r+a])}:{u0:r,u1:o,w:n-e,at:(s,a)=>i([t.flip?n-a:e+a,s])}}function dr(t,e,n){let{x0:r,x1:o,z0:i,z1:s}=cr(t),[a,l]=hs(t,e,n);return t.axis==="x"?[a,t.flip?s-l:l-i]:[l,t.flip?o-a:a-r]}var lr=Math.tan(30*wn);function hr(t,e,n,r,o){let i=Math.min(t*.3,r>1e-6?2.4/r:t*.3),s=Math.min(t*.3,o>1e-6?2.4/o:t*.3),a=e+i*r,l=n+s*o,c=Math.min(t-s,Math.max(i,(l-a+lr*(t-s+i))/(2*lr))),u=a+(c-i)*lr;return{vla:i,vlb:s,yla:a,ylb:l,vr:c,rh:u,y:p=>p<=i?e+p*r:p<=c?a+(p-i)*lr:p<=t-s?l+(t-s-p)*lr:n+(t-p)*o}}function Fe(t){let e=ve(t).w,[n,r]=[t.eave_a,t.eave_b],[o,i]=[Xe(t.pitch_a),Xe(t.pitch_b)];switch(t.shape){case"flat":case"parapet":return{vr:e/2,rh:n,y:()=>n};case"pent":return{vr:e,rh:n+e*o,y:s=>n+s*o};case"mansard":{let s=hr(e,n,r,o,i);return{vr:s.vr,rh:s.rh,y:s.y}}default:{let s=o+i>1e-6?Math.min(e,Math.max(0,(r-n+e*i)/(o+i))):e/2;return{vr:s,rh:n+s*o,y:a=>a<=s?n+a*o:r+(e-a)*i}}}}var Wt=t=>Fe(t).rh;function Zc(t){let e=t.heightEnd!==void 0;return{...t,a:t.b,b:t.a,left:t.right,right:t.left,roomLeft:t.roomRight,roomRight:t.roomLeft,height:e?t.heightEnd:t.height,heightEnd:e?t.height:void 0}}function Cg(t,e){let n=t.map(r=>({...r}));for(let r of e){let o=n.find(i=>i.room_id===r.room_id&&i.edge===r.edge&&(Math.abs(i.t1-r.t0)<1e-6||Math.abs(r.t1-i.t0)<1e-6));o?(o.t0=Math.min(o.t0,r.t0),o.t1=Math.max(o.t1,r.t1)):n.push({...r})}return n}function Wg(t,e,n){if(t.a===e.b)return!1;let r=Ye(K(n[t.b],n[t.a])),o=Ye(K(n[e.b],n[e.a]));return Math.abs($e(r,o))>1e-6||Y(r,o)<=0||t.free||e.free||t.heightEnd!==void 0||e.heightEnd!==void 0?!1:t.height===e.height&&t.exterior===e.exterior&&t.roomLeft===e.roomLeft&&t.roomRight===e.roomRight&&Math.abs(t.left-e.left)<=1e-9&&Math.abs(t.right-e.right)<=1e-9}function qc(t,e,n=new Set){let r=t.slice();for(;;){let o=new Map;r.forEach((s,a)=>{for(let l of[s.a,s.b])o.set(l,[...o.get(l)??[],a])});let i=null;for(let[s,a]of o){if(a.length!==2||n.has(s))continue;let l=r[a[0]].b===s?r[a[0]]:Zc(r[a[0]]),c=r[a[1]].a===s?r[a[1]]:Zc(r[a[1]]);if(!Wg(l,c,e))continue;let u={...l,b:c.b,sources:Cg(l.sources,c.sources)};i=[...r.filter((h,p)=>p!==a[0]&&p!==a[1]),u];break}if(!i)return r;r=i}}function Yc(t,e){let n=new Map;t.forEach((o,i)=>{let s=Ye(K(e[o.b],e[o.a])),a=[[o.a,{key:`${i}:a`,d:s,left:o.left,right:o.right,angle:Math.atan2(s[1],s[0])}],[o.b,{key:`${i}:b`,d:qe(s,-1),left:o.right,right:o.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a)n.set(l,[...n.get(l)??[],c])});let r=new Map;for(let[o,i]of n){let s=e[o];i.sort((l,c)=>l.angle-c.angle);for(let l of i)r.set(l.key,{left:nt(s,qe(as(l.d),l.left)),right:nt(s,qe(ls(l.d),l.right))});if(i.length<2)continue;let a=4*Math.max(...i.map(l=>Math.max(l.left,l.right)))+1e-9;i.forEach((l,c)=>{let u=i[(c+1)%i.length],h=nt(s,qe(as(l.d),l.left)),p=nt(s,qe(ls(u.d),u.right)),d=$e(l.d,u.d);if(Math.abs(d)<1e-4)return;let f=nt(h,qe(l.d,$e(K(p,h),u.d)/d));me(K(f,s))>a||(r.get(l.key).left=f,r.get(u.key).right=f)})}return r}function Xc(t,e){let n=t.filter((r,o)=>me(K(r,t[(o+1)%t.length]))>e);for(;;){if(n.length<=3)return n;let r=n.findIndex((o,i)=>{let s=n[(i+n.length-1)%n.length],a=n[(i+1)%n.length],[l,c]=[K(o,s),K(a,o)];return Math.abs($e(Ye(l),Ye(c)))<1e-7&&Y(l,c)>0});if(r===-1)return n;n=n.filter((o,i)=>i!==r)}}function Bg(t){let e=[];return{points:e,idOf(n){let r=e.findIndex(o=>Math.abs(o[0]-n[0])<=t&&Math.abs(o[1]-n[1])<=t);return r>=0?r:(e.push([n[0],n[1]]),e.length-1)}}}function Ng(t,e){let n=[];for(let r of t){let o=r.points;if(o.length<3||Math.abs(ge(o))<1e-6)continue;let i=ge(o)>0,s=o.map(a=>e.idOf(a));s.forEach((a,l)=>{let c=s[(l+1)%s.length];a!==c&&n.push(i?{u:a,v:c,room:r.id,edge:l,forward:!0}:{u:c,v:a,room:r.id,edge:l,forward:!1})})}return n}function Vg(t,e,n){let r=[];for(let o of t){let[i,s]=[e[o.u],e[o.v]],a=K(s,i),l=me(a),c=qe(a,1/l),u=e.map((p,d)=>({id:d,rel:K(p,i)})).filter(({id:p,rel:d})=>p!==o.u&&p!==o.v&&Y(d,c)>n&&Y(d,c)<l-n&&Math.abs($e(c,d))<=n).map(({id:p,rel:d})=>({t:Y(d,c),id:p})).sort((p,d)=>p.t-d.t),h=[{t:0,id:o.u},...u,{t:l,id:o.v}];for(let p=0;p+1<h.length;p++){let[d,f]=[h[p],h[p+1]];r.push({u:d.id,v:f.id,room:o.room,edge:o.edge,t0:o.forward?d.t:l-f.t,t1:o.forward?f.t:l-d.t,forward:o.forward})}}return r}var Qc=t=>({room_id:t.room,edge:t.edge,t0:t.t0,t1:t.t1});function Kg(t,e){let n=new Map(t.map(a=>[a.id,a])),r=new Map;for(let a of e){let l=`${a.room}:${a.edge}`;r.set(l,[...r.get(l)??[],a.t0].sort((c,u)=>c-u))}let o=a=>{let l=n.get(a.room)?.wall_heights?.[a.edge];return Array.isArray(l)?l[(r.get(`${a.room}:${a.edge}`)??[]).indexOf(a.t0)]??null:l},i=a=>{let l=n.get(a.room),[c,u]=[l?.wall_heights?.[a.edge],l?.wall_slopes?.[a.edge]];if(!l||typeof c!="number"||typeof u!="number"||c<=0||u<=0)return null;let[h,p]=[l.points[a.edge],l.points[(a.edge+1)%l.points.length]];return{from:c,to:u,length:Math.hypot(p[0]-h[0],p[1]-h[1])}},s=a=>{let l=i(a);if(!l||l.length<1e-9){let u=o(a);return typeof u=="number"&&u>0?[u,u]:[null,null]}let c=u=>l.from+(l.to-l.from)*u/l.length;return a.forward?[c(a.t0),c(a.t1)]:[c(a.t1),c(a.t0)]};return{heightsOf(a){let[l,c]=[1/0,1/0];for(let h of a){let[p,d]=s(h),[f,_]=h===a[0]?[p,d]:[d,p];f!==null&&(l=Math.min(l,f)),_!==null&&(c=Math.min(c,_))}let u=a.map(h=>n.get(h.room)?.ceiling);if(u.every(h=>typeof h=="number"&&h>0)){let h=Math.max(...u);l===1/0&&(l=h),c===1/0&&(c=h)}return{...l<1/0?{a:l}:{},...c<1/0?{b:c}:{}}},thicknessOf(a){let l=a.map(c=>{let u=n.get(c.room)?.wall_thickness?.[c.edge];return Array.isArray(u)?u[(r.get(`${c.room}:${c.edge}`)??[]).indexOf(c.t0)]:u}).filter(c=>typeof c=="number"&&c>0);return l.length?Math.max(...l):void 0},hasNoWall:a=>a.some(l=>o(l)===0)}}function Jc(t){let e=n=>Math.round(n*1e6)/1e6;return t.a===void 0||t.b===void 0?t.a!==void 0?{height:e(t.a)}:t.b!==void 0?{height:e(t.b)}:{}:Math.abs(t.a-t.b)<1e-6?{height:e(t.a)}:{height:e(t.a),heightEnd:e(t.b)}}function Gg(t,e,n,r){let o=Kg(e,t),i=new Map;for(let l of t){let c=l.u<l.v?`${l.u}-${l.v}`:`${l.v}-${l.u}`;i.set(c,[...i.get(c)??[],l])}let s=[],a=[];for(let l of i.values()){let c=l[0],u=l.find(p=>p!==c&&p.u===c.v&&p.v===c.u&&p.room!==c.room);for(let p of l)p!==c&&p!==u&&p.room!==c.room&&r.push(`overlap:${c.room}:${p.room}`);let h=u?[c,u]:[c];if(o.hasNoWall(h)){u&&a.push([c.room,u.room]);continue}if(u){let p=o.thicknessOf(h)??n.interior;s.push({a:c.u,b:c.v,left:p/2,right:p/2,exterior:!1,roomLeft:c.room,roomRight:u.room,sources:h.map(Qc),...Jc(o.heightsOf(h))})}else s.push({a:c.u,b:c.v,left:0,right:o.thicknessOf(h)??n.exterior,exterior:!0,roomLeft:c.room,roomRight:null,sources:[Qc(c)],...Jc(o.heightsOf(h))})}return{drafts:s,open:a}}function Ug(t,e){let n=i=>Ye(K(e[i.b],e[i.a])),r=t.filter(i=>!i.exterior&&!i.free),o=new Map;for(let i of r){if(o.has(i))continue;let s=[i];o.set(i,s);for(let a=0;a<s.length;a++){let l=s[a];for(let c of r){if(o.has(c))continue;(c.a===l.a||c.a===l.b||c.b===l.a||c.b===l.b)&&Math.abs($e(n(l),n(c)))<1e-6&&(s.push(c),o.set(c,s))}}}for(let i of new Set(o.values())){let s=n(i[0]),a=new Map;for(let u of i)for(let h of[u.a,u.b])a.set(h,(a.get(h)??0)+1);let l=new Set;for(let[u,h]of a)if(h===1)for(let p of t){if(!p.exterior||p.free||p.a!==u&&p.b!==u)continue;let d=n(p);Math.abs($e(s,d))>1e-6||l.add(Y(s,d)>0?"left":"right")}if(l.size!==1)continue;let c=[...l][0];for(let u of i){let h=u.left+u.right,p=Y(n(u),s)>0,d=c==="left"===p;[u.left,u.right]=d?[0,h]:[h,0]}}}var jg=(t,e)=>{let n=i=>Math.round(i*100),[r,o]=t[0]<e[0]||t[0]===e[0]&&t[1]<=e[1]?[t,e]:[e,t];return`w_${n(r[0])}_${n(r[1])}_${n(o[0])}_${n(o[1])}`};function pe(t,e,n=[]){let r=e.eps??.005,o=[],i=Bg(r),s=Ng(t,i),a=n.filter(b=>Math.hypot(b.b[0]-b.a[0],b.b[1]-b.a[1])>.05),l=a.map(b=>[i.idOf(b.a),i.idOf(b.b)]),c=new Set;for(let b of t){let v=b.points;v.length<3||(b.wall_splits??[]).forEach((w,x)=>{if(!w||x>=v.length)return;let k=v[x],$=K(v[(x+1)%v.length],k),R=me($);for(let F of w)F>r&&F<R-r&&c.add(i.idOf(nt(k,qe($,F/R))))})}let u=Vg(s,i.points,r),{drafts:h,open:p}=Gg(u,t,e,o);Ug(h,i.points);let d=h;a.forEach((b,v)=>{let[w,x]=l[v];if(w===x)return;let k=[(b.a[0]+b.b[0])/2,(b.a[1]+b.b[1])/2],$=t.find(F=>F.points.length>=3&&H(k,F.points))?.id??null,R=(b.thickness??e.interior)/2;d.push({free:b.id,a:w,b:x,left:R,right:R,exterior:!1,roomLeft:$,roomRight:$,sources:[],height:typeof b.height=="number"&&b.height>0?b.height:void 0})});let f=qc(d,i.points,c),_=Yc(f,i.points);return{walls:f.map((b,v)=>{let[w,x]=[i.points[b.a],i.points[b.b]],[k,$]=[_.get(`${v}:a`),_.get(`${v}:b`)],R=Xc([k.right,$.left,x,$.right,k.left,w],1e-6);return{id:jg(w,x),a:[w[0],w[1]],b:[x[0],x[1]],left:b.left,right:b.right,exterior:b.exterior,roomLeft:b.roomLeft,roomRight:b.roomRight,sources:b.sources,footprint:R,...b.free?{free:b.free}:{},...b.height!==void 0?{height:b.height}:{},...b.heightEnd!==void 0?{heightEnd:b.heightEnd}:{}}}),warnings:[...new Set(o)],open:p}}function vn(t,e,n){let r=t.points[e];return nt(r,qe(Ye(K(t.points[(e+1)%t.points.length],r)),n))}function ze(t,e,n){if(t.wall){let o=n.find(a=>a.id===t.wall);if(!o||Math.hypot(o.b[0]-o.a[0],o.b[1]-o.a[1])<.05)return null;let i=Ye(K(o.b,o.a));return{room:{id:t.room_id,name:"",area_id:null,points:[o.a,o.b,nt(o.a,[-i[1],i[0]])]},edge:0}}let r=e.find(o=>o.id===t.room_id);return r&&t.edge<r.points.length?{room:r,edge:t.edge}:null}var eu=(t,e)=>Y(K(e,t.a),Ye(K(t.b,t.a)));function St(t,e,n){if(!e.wall)return Zg(t,n.room,n.edge,e.offset);let r=t.find(o=>o.free===e.wall);return r?{wall:r,s:eu(r,vn(n.room,0,e.offset))}:null}function Zg(t,e,n,r){for(let o of t)if(o.sources.some(s=>s.room_id===e.id&&s.edge===n&&r>=s.t0-1e-6&&r<=s.t1+1e-6))return{wall:o,s:eu(o,vn(e,n,r))};return null}function tu(t,e){let n=t.points.map(d=>d[0]),r=t.points.map(d=>d[1]);if(t.points.length!==4||new Set(n.map(d=>d.toFixed(3))).size!==2||new Set(r.map(d=>d.toFixed(3))).size!==2)return null;let[o,i,s,a]=[Math.min(...n),Math.max(...n),Math.min(...r),Math.max(...r)],l=d=>Math.max(0,...e.filter(f=>(f.roomLeft===t.id||f.roomRight===t.id)&&d(f)).map(f=>f.roomLeft===t.id?f.left:f.right)),c=(d,f)=>Math.abs(d-f)<.001,u=(d,f,_)=>c(d.a[f],_)&&c(d.b[f],_),h=i-o-l(d=>u(d,0,o))-l(d=>u(d,0,i)),p=a-s-l(d=>u(d,1,s))-l(d=>u(d,1,a));return[Math.round(h*1e3)/1e3,Math.round(p*1e3)/1e3]}var nu=([t,e])=>{let n=Math.hypot(t,e)||1;return[t/n,e/n]};function qg(t){return t.reduce((e,n,r)=>e+(n[0]*t[(r+1)%t.length][1]-t[(r+1)%t.length][0]*n[1]),0)/2}function ru(t,e){let n=t.length;if(n<3||Math.abs(e)<1e-9)return t.map(([o,i])=>[o,i]);let r=qg(t)>=0?1:-1;return t.map((o,i)=>{let s=t[(i+n-1)%n],a=t[(i+1)%n],[l,c]=nu([o[0]-s[0],o[1]-s[1]]),[u,h]=nu([a[0]-o[0],a[1]-o[1]]),p=[c*r,-l*r],d=[h*r,-u*r],f=[p[0]+d[0],p[1]+d[1]],_=Math.hypot(f[0],f[1]);if(_<1e-6)return[o[0]+p[0]*e,o[1]+p[1]*e];let y=(f[0]*p[0]+f[1]*p[1])/_,b=Math.min(4,1/Math.max(.25,y));return[o[0]+f[0]/_*e*b,o[1]+f[1]/_*e*b]})}function Mt(t){let e=t.map(r=>r[0]),n=t.map(r=>r[1]);return{x0:Math.min(...e),z0:Math.min(...n),x1:Math.max(...e),z1:Math.max(...n)}}function Yg(t){let e=([i,s])=>`${Math.round(i*1e3)}:${Math.round(s*1e3)}`,n=new Map;for(let i of t)for(let s of[i.a,i.b])n.set(e(s),[...n.get(e(s))??[],i]);let r=new Set,o=null;for(let i of t){if(r.has(i))continue;r.add(i);let s=[i.a,i.b],a=i.b;for(;;){let c=(n.get(e(a))??[]).find(u=>!r.has(u));if(!c||(r.add(c),a=e(c.a)===e(a)?c.b:c.a,e(a)===e(s[0])))break;s.push(a)}s.length>=3&&e(a)===e(s[0])&&(!o||Math.abs(we(s))>Math.abs(we(o)))&&(o=s)}return o}function ps(t,e,n,r){let o=pe(t,{exterior:n,interior:r},e).walls.filter(a=>a.exterior&&!a.free),i=o.length?Yg(o.map(a=>({a:a.a,b:a.b}))):null;if(!i)return null;let s=i.filter((a,l)=>{let c=i[(l+i.length-1)%i.length],u=i[(l+1)%i.length];return Math.abs((a[0]-c[0])*(u[1]-a[1])-(a[1]-c[1])*(u[0]-a[0]))>1e-6});return s.length>=3?ru(s,n):null}function Bt(t,e){let n=ve(t),r=Fe(t),o=n.w,[i,s]=[Math.max(0,e.a),Math.max(0,e.b)],a=n.u0-Math.max(0,e.u0),l=n.u1+Math.max(0,e.u1),c=(b,v)=>[b,v,r.y(v)],u=c(a,-i),h=c(l,-i),p=c(l,o+s),d=c(a,o+s),[f,_]=[Xe(t.pitch_a),Xe(t.pitch_b)],y=b=>[b,r.vr,r.rh];if(t.ends&&(t.shape==="gable"||t.shape==="hip"||t.shape==="halfhip")){let b=(n.u1-n.u0)/2,v=Math.min(b,Math.min(r.vr,o-r.vr)||o/2),w=Math.min(r.y(0),r.y(o)),x=w+(r.rh-w)*Math.min(.9,Math.max(.2,t.halfhip??.55)),k=f>1e-6?Math.min(r.vr,(x-t.eave_a)/f):r.vr,$=_>1e-6?Math.max(r.vr,o-(x-t.eave_b)/_):r.vr,R=Math.min(b-.1,(r.rh-x)/Math.max(.2,f)),F=[[0,r.y(0)],[r.vr,r.rh],[o,r.y(o)]],z=[[0,r.y(0)],[k,x],[$,x],[o,r.y(o)]],I=(V,Dt,Qr)=>{if(V==="hip")return{upA:[],upB:[],ridge:y(Dt===a?n.u0+v*Qr:n.u1-v*Qr),profile:null};if(V==="halfhip"){let Om=y(Dt===a?n.u0+R:n.u1-R);return{upA:[[Dt,k,x]],upB:[[Dt,$,x]],ridge:Om,profile:z}}return{upA:[],upB:[],ridge:y(Dt),profile:F}},P=I(t.ends[0],a,1),C=I(t.ends[1],l,1),B=[[u,h,...C.upA,C.ridge,P.ridge,...[...P.upA].reverse()],[P.ridge,C.ridge,...[...C.upB].reverse(),p,d,...P.upB]],j=[[P.ridge,C.ridge]];for(let[V,Dt,Qr]of[[P,u,d],[C,h,p]])V.profile===null?(B.push(V===P?[d,u,V.ridge]:[h,p,V.ridge]),j.push([Dt,V.ridge],[Qr,V.ridge])):V.upA.length&&(B.push(V===P?[V.upB[0],V.upA[0],V.ridge]:[V.upA[0],V.upB[0],V.ridge]),j.push([V.upA[0],V.ridge],[V.upB[0],V.ridge]));let ye=V=>V.profile===null?[]:V.upA.length?[V.upA[0],V.upB[0]]:[V.ridge],yt=[u,h,...ye(C),p,d,...[...ye(P)].reverse()];return{faces:B,rim:yt,ridges:j,gable:F,endProfiles:[P.profile,C.profile]}}switch(t.shape){case"pent":return{faces:[[u,h,p,d]],rim:[u,h,p,d],ridges:[[p,d]],gable:[[0,r.y(0)],[o,r.y(o)]]};case"hip":case"pyramid":{let b=(n.u1-n.u0)/2,v=t.shape==="pyramid"?b:Math.min(b,Math.min(r.vr,o-r.vr)||o/2),w=y(n.u0+v),x=y(n.u1-v);return t.shape==="pyramid"?{faces:[[u,h,w],[h,p,w],[p,d,w],[d,u,w]],rim:[u,h,p,d],ridges:[[u,w],[d,w],[h,w],[p,w]],gable:null}:{faces:[[u,h,x,w],[w,x,p,d],[d,u,w],[h,p,x]],rim:[u,h,p,d],ridges:[[w,x],[u,w],[d,w],[h,x],[p,x]],gable:null}}case"halfhip":{let b=Math.min(r.y(0),r.y(o)),v=b+(r.rh-b)*Math.min(.9,Math.max(.2,t.halfhip??.55)),w=f>1e-6?Math.min(r.vr,(v-t.eave_a)/f):r.vr,x=_>1e-6?Math.max(r.vr,o-(v-t.eave_b)/_):r.vr,k=Math.min((n.u1-n.u0)/2-.1,(r.rh-v)/Math.max(.2,f)),$=y(n.u0+k),R=y(n.u1-k),F=[a,w,v],z=[a,x,v],I=[l,w,v],P=[l,x,v];return{faces:[[u,h,I,R,$,F],[$,R,P,p,d,z],[z,F,$],[I,P,R]],rim:[u,h,I,P,p,d,z,F],ridges:[[$,R],[F,$],[z,$],[I,R],[P,R]],gable:[[0,r.y(0)],[w,v],[x,v],[o,r.y(o)]]}}case"mansard":{let b=hr(o,t.eave_a,t.eave_b,f,_),v=[a,b.vla,b.yla],w=[l,b.vla,b.yla],x=[a,o-b.vlb,b.ylb],k=[l,o-b.vlb,b.ylb],$=[a,b.vr,b.rh],R=[l,b.vr,b.rh];return{faces:[[u,h,w,v],[v,w,R,$],[$,R,k,x],[x,k,p,d]],rim:[u,h,w,R,k,p,d,x,$,v],ridges:[[$,R],[v,w],[x,k]],gable:[[0,r.y(0)],[b.vla,b.yla],[b.vr,b.rh],[o-b.vlb,b.ylb],[o,r.y(o)]]}}default:{let b=y(a),v=y(l);return{faces:[[u,h,v,b],[b,v,p,d]],rim:[u,h,v,p,d,b],ridges:[[b,v]],gable:[[0,r.y(0)],[r.vr,r.rh],[o,r.y(o)]]}}}}function pr(t,e,n){let r=null;for(let o of t.faces){if(!H([e,n],o.map(([p,d])=>[p,d])))continue;let[i,s]=o,a=o.slice(2).find(p=>Math.abs((s[0]-i[0])*(p[1]-i[1])-(s[1]-i[1])*(p[0]-i[0]))>1e-9);if(!a)continue;let l=[s[0]-i[0],s[2]-i[2],s[1]-i[1]],c=[a[0]-i[0],a[2]-i[2],a[1]-i[1]],u=[l[1]*c[2]-l[2]*c[1],l[2]*c[0]-l[0]*c[2],l[0]*c[1]-l[1]*c[0]];if(Math.abs(u[1])<1e-9)continue;let h=i[2]-(u[0]*(e-i[0])+u[2]*(n-i[1]))/u[1];r=r===null?h:Math.min(r,h)}return r}function fs(t,e,n){let r=ve(e),o=t.floors.flatMap(u=>u.rooms.filter(h=>h.points.length>=3&&u.elevation+u.height>e.base+.05)),i=u=>u.some(h=>o.some(p=>H(h,p.points))),s=.35,a=[.15,.5,.85].map(u=>r.u0+(r.u1-r.u0)*u),l=[.15,.5,.85].map(u=>r.w*u),c=u=>u?0:n;return{a:c(i(a.map(u=>r.at(u,-s)))),b:c(i(a.map(u=>r.at(u,r.w+s)))),u0:c(i(l.map(u=>r.at(r.u0-s,u)))),u1:c(i(l.map(u=>r.at(r.u1+s,u))))}}var xo=t=>Math.abs((t.x1-t.x0)*(t.z1-t.z0)),ou=t=>t.shape==="flat"||t.shape==="parapet",Nt=t=>Math.round(t*100)/100;function $o(t,e){let[n,r]=[(e.x0+e.x1)/2,(e.z0+e.z1)/2];return t.filter(i=>{if(i===e||i.dormer||i.open||ou(i)||xo(i)<xo(e)*1.5)return!1;let s=cr(i);return n>=s.x0&&n<=s.x1&&r>=s.z0&&r<=s.z1}).reduce((i,s)=>i===null||xo(s)<xo(i)?s:i,null)}function ms(t,e,n,r){let o=ve(t),i=Fe(t),s=2,a=Math.max(o.u0+.3,Math.min(o.u1-s-.3,(r??(o.u0+o.u1)/2)-s/2)),[l,c]=e==="a"?[t.eave_a,t.pitch_a]:[t.eave_b,t.pitch_b],u=l+1.4,h=u+s/2*Math.tan(35*wn),p=Math.max(.8,Math.min(o.w/2-.2,(h-l)/Math.max(.15,Math.tan(Math.min(80,c)*wn)))),[d,f]=e==="a"?[0,p]:[o.w-p,o.w],_=o.at(a,d),y=o.at(a+s,f);return{id:n,x0:Nt(Math.min(_[0],y[0])),z0:Nt(Math.min(_[1],y[1])),x1:Nt(Math.max(_[0],y[0])),z1:Nt(Math.max(_[1],y[1])),shape:"gable",axis:t.axis==="x"?"z":"x",eave_a:Nt(u),eave_b:Nt(u),pitch_a:35,pitch_b:35,base:Nt(i.y(e==="a"?0:o.w)),overhang:.15,dormer:!0}}function Qg(t,e){let n=Bt(t,{u0:0,u1:0,a:0,b:0}),r=Fe(t);return o=>{let[i,s]=e.at(o,e.w/2),[a,l]=dr(t,i,s);return pr(n,a,l)??r.y(l)}}function gs(t,e){if(ou(e))return e;let n=ve(e),r=Fe(e).rh,o=Qg(t,n),i=o(n.u0)<=o(n.u1),[s,a]=i?[n.u0,n.u1]:[n.u1,n.u0],l=i?1:-1,c=a;for(let p=.5;p<Math.abs(a-s);p+=.05)if(o(s+l*p)>=r-.02){c=s+l*p;break}if(Math.abs(c-a)<.05)return e;let u={...e},h=a===n.u1;return e.axis==="x"?u[h?"x1":"x0"]=c:u[h?"z1":"z0"]=c,u}var _s=.14,iu=t=>t.shape==="flat"||t.shape==="parapet";function bs(t,e){return!t.open&&Math.min(t.base,t.eave_a,t.eave_b)<e-.05}function fr(t,e,n){let r=Math.max(0,t.settings.roof.overhang??0),o=1e-6,i=[];for(let s of t.settings.roof.sections??[]){if(s.open)continue;let[a,l,c,u]=[Math.min(s.x0,s.x1),Math.max(s.x0,s.x1),Math.min(s.z0,s.z1),Math.max(s.z0,s.z1)],[h,p]=hs(s,e,n);if(h<a-o||h>l+o||p<c-o||p>u+o||s.points&&s.points.length>=3&&!H([e,n],s.points))continue;let[d,f]=dr(s,e,n),_=Math.max(0,s.overhang??r),y=iu(s)?null:pr(Bt(s,{u0:_,u1:_,a:_,b:_}),d,f);i.push((y??Fe(s).y(f))-_s)}return i.length?Math.max(...i):null}function ys(t,e,n){let r=[],o=e+n+_s;for(let i of t.settings.roof.sections??[]){if(i.open||iu(i)||i.shape==="mansard")continue;let s=ve(i),a=Fe(i),[l,c]=[Xe(i.pitch_a),Xe(i.pitch_b)],u=[];l>1e-6&&u.push((o-i.eave_a)/l),i.shape==="gable"&&c>1e-6&&u.push(s.w-(o-i.eave_b)/c);for(let h of u)h<=.01||h>=s.w-.01||i.shape==="gable"&&Math.abs(a.y(h)-o)>1e-6||r.push([s.at(s.u0,h),s.at(s.u1,h)])}return r}function ws(t,e,n,r,o){let i=[];for(let a of[.2,.5,.8])for(let l of[.2,.5,.8])i.push([e+(r-e)*a,n+(o-n)*l]);let s=t.floors.filter(a=>a.rooms.some(l=>l.points.length>=3&&i.some(c=>H(c,l.points)))).map(a=>a.elevation+a.height);return s.length?Math.max(...s):null}function vs(t,e){let n=t.floors.filter(l=>l.rooms.length>0).sort((l,c)=>l.elevation-c.elevation),r=n.filter(l=>l.elevation<e.base-.05),{x0:o,z0:i,x1:s,z1:a}=e;if(o!==void 0&&i!==void 0&&s!==void 0&&a!==void 0){let l=[];for(let u of[.2,.5,.8])for(let h of[.2,.5,.8])l.push([o+(s-o)*u,i+(a-i)*h]);let c=r.findLast(u=>u.rooms.some(h=>h.points.length>=3&&l.some(p=>H(p,h.points))));if(c)return c}return r.at(-1)??n[0]}var ht=t=>Math.round(t*1e3)/1e3;function ks(t,e=n=>`roof_${n+1}`){let n=t.settings.roof?.pitch??35,r=t.settings.wall_exterior,o=t.floors.filter(l=>l.rooms.some(c=>c.points.length>=3)).sort((l,c)=>c.elevation-l.elevation),i=[],s=[],a=(l,c)=>l.some(u=>H(c,u.points));for(let l of o){let c=l.rooms.filter(y=>y.points.length>=3),u=[...new Set(c.flatMap(y=>y.points.map(b=>ht(b[0]))))].sort((y,b)=>y-b),h=[...new Set(c.flatMap(y=>y.points.map(b=>ht(b[1]))))].sort((y,b)=>y-b),p=h.slice(0,-1).map((y,b)=>u.slice(0,-1).map((v,w)=>{let x=[(u[w]+u[w+1])/2,(h[b]+h[b+1])/2];return a(c,x)&&!a(s,x)})),d=p.map(y=>y.map(()=>!1)),f=(y,b)=>p[b][y]&&!d[b][y],_=l.elevation+l.height;for(let y=0;y<p.length;y++)for(let b=0;b<(p[y]?.length??0);b++){if(!f(b,y))continue;let v=b;for(;v+1<p[y].length&&f(v+1,y);)v++;let w=y;for(;w+1<p.length&&Array.from({length:v-b+1},(F,z)=>f(b+z,w+1)).every(Boolean);)w++;for(let F=y;F<=w;F++)for(let z=b;z<=v;z++)d[F][z]=!0;let[x,k]=[u[b]-r,u[v+1]+r],[$,R]=[h[y]-r,h[w+1]+r];Math.min(k-x,R-$)<.8||i.push({id:e(i.length),x0:ht(x),z0:ht($),x1:ht(k),z1:ht(R),shape:"gable",axis:k-x>=R-$?"x":"z",eave_a:ht(_),eave_b:ht(_),pitch_a:n,pitch_b:n,base:ht(_),overhang:null})}s.push(...c)}return i}var Pe=Math.PI/180,Le=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],Vt=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],kn=t=>Math.hypot(t[0],t[1],t[2]),Kt=t=>{let e=kn(t)||1;return[t[0]/e,t[1]/e,t[2]/e]},su=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],rt=t=>Math.round(t*100)/100,mr=([t,e],n)=>(Math.atan2(t,-e)/Pe-n+720)%360;var lu=.25;function cu(t,e,n,r,o,i,s){let a=o-n>=i-r,l=a?o-n:i-r;return{key:`${t}:top`,section:e,side:"top",flat:!0,o:[n,s,r],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:a?i-r:o-n,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function uu(t,e){let n=Kt(su(t,e));return n[1]<0?[-n[0],-n[1],-n[2]]:n}var du=t=>{let e=Kt([-t[0],0,-t[2]]);return[e[0],e[2]]};function pt(t,e,n,r,o,i,s,a){let l=Kt(Le(o,r)),c=Kt(Le(i,r));return{key:t,section:e,side:n,flat:!1,o:r,eu:l,es:c,n:uu(l,c),lu:kn(Le(o,r)),ls:kn(Le(i,r)),pitch:s,span:a,facing:du(c)}}function au(t,e,n,r,o,i){let s=kn(Le(o,r));if(s<.3)return null;let a=Kt(Le(o,r)),l=Le(i,r),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],u=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],h=kn(u);if(h<.3)return null;let p=Kt(u),d=f=>{let _=Math.min(1,Math.max(0,f/h));return[c*_,s-(s-c)*_]};return{key:t,section:e,side:n,flat:!1,o:r,eu:a,es:p,n:uu(a,p),lu:s,ls:h,pitch:Math.atan2(p[1],Math.hypot(p[0],p[2]))/Pe,span:d,facing:du(p)}}function Jg(t,e){let n=ve(t),r=Fe(t),o=(v,w,x)=>{let[k,$]=n.at(v,w);return[k,x,$]},[i,s]=[Math.max(0,e.a),Math.max(0,e.b)],a=n.u0-Math.max(0,e.u0),l=n.u1+Math.max(0,e.u1),c=l-a,u=r.y(-i),h=r.y(n.w+s);if(t.shape==="flat"||t.shape==="parapet"){let[v,w]=[n.at(a,-i),n.at(l,n.w+s)];return[cu(t.id,t.id,Math.min(v[0],w[0]),Math.min(v[1],w[1]),Math.max(v[0],w[0]),Math.max(v[1],w[1]),t.eave_a+lu)]}if(t.shape==="pent")return[pt(`${t.id}:a`,t.id,"a",o(a,-i,u),o(l,-i,u),o(a,n.w+s,h),t.pitch_a,()=>[0,c])];if(t.shape==="mansard")return e_(t,n,a,l,i,s);let p=t.shape==="hip"||t.shape==="pyramid",d=(n.u1-n.u0)/2,f=t.shape==="pyramid"?d:p?Math.min(d,Math.min(r.vr,n.w-r.vr)||n.w/2):0,_=p?n.u0+f-a:0,y=p?l-(n.u1-f):0,b=[];if(r.vr>.3){let v=Math.hypot(r.vr+i,r.rh-u);b.push(pt(`${t.id}:a`,t.id,"a",o(a,-i,u),o(l,-i,u),o(a,r.vr,r.rh),t.pitch_a,w=>[_*(w/v),c-y*(w/v)]))}if(n.w-r.vr>.3){let v=Math.hypot(n.w+s-r.vr,r.rh-h);b.push(pt(`${t.id}:b`,t.id,"b",o(l,n.w+s,h),o(a,n.w+s,h),o(l,r.vr,r.rh),t.pitch_b,w=>[y*(w/v),c-_*(w/v)]))}if(p){let v=au(`${t.id}:c`,t.id,"c",o(a,n.w+s,h),o(a,-i,u),o(n.u0+f,r.vr,r.rh)),w=au(`${t.id}:d`,t.id,"d",o(l,-i,u),o(l,n.w+s,h),o(n.u1-f,r.vr,r.rh));b.push(...[v,w].filter(x=>x!==null))}return b}function e_(t,e,n,r,o,i){let s=hr(e.w,t.eave_a,t.eave_b,Xe(t.pitch_a),Xe(t.pitch_b)),a=(f,_)=>{let[y,b]=e.at(f,_);return[y,s.y(_),b]},l=r-n,c=()=>[0,l],u=(f,_)=>Math.atan2(f,_)/Pe,h=[],[p,d]=[e.w+i,e.w-s.vlb];return s.vla+o>.3&&h.push(pt(`${t.id}:a`,t.id,"a",a(n,-o),a(r,-o),a(n,s.vla),t.pitch_a,c)),s.vr-s.vla>.3&&h.push(pt(`${t.id}:au`,t.id,"a",a(n,s.vla),a(r,s.vla),a(n,s.vr),u(s.rh-s.yla,s.vr-s.vla),c)),s.vlb+i>.3&&h.push(pt(`${t.id}:b`,t.id,"b",a(r,p),a(n,p),a(r,d),t.pitch_b,c)),d-s.vr>.3&&h.push(pt(`${t.id}:bu`,t.id,"b",a(r,d),a(n,d),a(r,s.vr),u(s.rh-s.ylb,d-s.vr),c)),h}function xs(t){return t.floors.filter(n=>n.rooms.some(r=>r.points.length>=3)).sort((n,r)=>r.elevation-n.elevation)[0]??null}function te(t){let e=t.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(w=>Jg(w,fs(t,w,w.overhang??e.overhang)));let n=xs(t);if(!n)return[];let r=n.rooms.flatMap(w=>w.points.map(x=>x[0])),o=n.rooms.flatMap(w=>w.points.map(x=>x[1])),i=t.settings.wall_exterior+e.overhang,[s,a]=[Math.min(...r)-i,Math.max(...r)+i],[l,c]=[Math.min(...o)-i,Math.max(...o)+i],u=n.elevation+n.height;if(e.type==="flat")return[cu("main",null,s,l,a,c,u+lu)];let h=a-s>=c-l,p=e.ridge==="short"?!h:h,d=(p?c-l:a-s)/2,f=d*Math.tan(e.pitch*Pe),_=(w,x,k)=>p?[w,u+k,(l+c)/2+x]:[(s+a)/2+x,u+k,w],[y,b]=p?[s,a]:[l,c],v=()=>[0,b-y];return[pt("main:a",null,"a",_(y,-d,0),_(b,-d,0),_(y,0,f),e.pitch,v),pt("main:b",null,"b",_(y,d,0),_(b,d,0),_(y,0,f),e.pitch,v)]}function He(t,e){let n=[];for(let r of t.floors.filter(o=>!e||o.id===e)){let{walls:o}=pe(r.rooms,{exterior:t.settings.wall_exterior,interior:t.settings.wall_interior},r.walls??[]);for(let i of o){if(!i.exterior&&!i.free)continue;let[s,a]=[i.b[0]-i.a[0],i.b[1]-i.a[1]],l=Math.hypot(s,a);if(l<1.2)continue;let[c,u]=[a/l,-s/l],h=Math.min(r.height,i.height??r.height,i.heightEnd??1/0),p=(d,f,_,y)=>n.push({key:d,section:null,side:"top",flat:!1,o:f,eu:_,es:[0,1,0],n:y,lu:l,ls:h,pitch:90,span:()=>[0,l],facing:[y[0],y[2]],wall:{floorId:r.id}});p(`wall:${r.id}:${i.id}`,[i.a[0]+c*i.right,r.elevation,i.a[1]+u*i.right],[s/l,0,a/l],[c,0,u]),i.free&&p(`wall:${r.id}:${i.id}:back`,[i.b[0]-c*i.left,r.elevation,i.b[1]-u*i.left],[-s/l,0,-a/l],[-c,0,-u])}}return n}var Te="ground";function So(t){let e=t.floors.filter(n=>n.rooms.some(r=>r.points.length>=3)).sort((n,r)=>n.elevation-r.elevation);return e.find(n=>n.elevation>-.5)??e[0]??t.floors[0]??null}function Mo(t,e){let n=(e.rotation??0)*Pe,r=[Math.cos(n),0,Math.sin(n)],o=[-Math.sin(n),0,Math.cos(n)],i=So(t),s=r[0]*e.u+o[0]*e.v,a=r[2]*e.u+o[2]*e.v,l=i?i.elevation+(e.base!=null?e.base:rc(i,s,a)):e.base??0;return{key:Te,section:null,side:"top",flat:!0,o:[0,l,0],eu:r,es:o,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[o[0],o[2]],unbounded:!0}}function ke(t,e,n=te(t)){return e.face===Te?Mo(t,e):e.face.startsWith("wall:")?He(t,e.face.split(":")[1]).find(r=>r.key===e.face)??null:n.find(r=>r.key===e.face)??null}var Eo=1.13,gr=1.72,Ce=.025,Qe=.07;function Gt(t){let e=t.module_w||Eo,n=t.module_h||gr;return t.portrait===!1?[n,e]:[e,n]}function _r(t){return t.layout?.length?t.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,t.rows)},()=>Math.max(1,t.cols))}function $s(t,e){return t.flat?Math.min(45,Math.max(0,e.tilt??15))*Pe:t.wall?Math.min(90,Math.max(0,e.tilt??0))*Pe:Math.min(45,Math.max(0,e.tilt??0))*Pe}function br(t,e){let[,n]=Gt(e),r=$s(t,e);return t.wall?n*Math.cos(r)+Ce:!t.flat&&r<.001?n+Ce:t.flat&&e.rack==="ew"?n*Math.cos(r)+.08:n*Math.cos(r)+Math.max(.3,2*n*Math.sin(r))}function xn(t,e){let[n,r]=Gt(e),o=_r(e),i=Math.max(1,...o);return[i*n+(i-1)*Ce,(o.length-1)*br(t,e)+r*Math.cos($s(t,e))]}var t_=t=>t.flat&&!t.unbounded&&!t.wall;function hu(t,e){if(!t_(t)||!e.rotation)return null;let n=e.rotation*Pe,[r,o]=xn(t,e);return{cos:Math.cos(n),sin:Math.sin(n),u:e.u+r/2,s:e.v+o/2}}function We(t,e,n=!1){let[r,o]=Gt(e),i=$s(t,e),s=o*Math.cos(i),a=br(t,e),l=_r(e),c=Math.max(1,...l),u=new Set(e.skip??[]),h=hu(t,e),p=(y,b)=>h?[h.u+(y-h.u)*h.cos-(b-h.s)*h.sin,h.s+(y-h.u)*h.sin+(b-h.s)*h.cos]:[y,b],d=(y,b,v)=>{let[w,x]=p(y,b);return[0,1,2].map(k=>t.o[k]+t.eu[k]*w+t.es[k]*x+t.n[k]*v)},f=(y,b)=>{let[v,w]=p(y,b);if(t.unbounded)return!0;if(w<-1e-6||w>t.ls+1e-6)return!1;let[x,k]=t.span(w);return v>=x-1e-6&&v<=k+1e-6},_=[];return l.forEach((y,b)=>{let v=e.align==="right"?c-y:e.align==="center"?(c-y)/2:0;for(let w=0;w<y;w++){let x=`${b}:${w}`,k=u.has(x);if(k&&!n)continue;let $=e.u+(w+v)*(r+Ce),R=$+r,F=e.v+b*a,z=F+(t.flat||t.wall||i>.001?s:o);if([[$,F],[R,F],[R,z],[$,z]].every(([I,P])=>f(I,P)))if(t.wall&&i>.001){let I=Qe+o*Math.sin(i),[P,C]=e.flip?[I,Qe]:[Qe,I],B=[d($,F,P),d(R,F,P),d(R,z,C),d($,z,C)],j=e.flip?F:z;_.push({corners:B,posts:[$+.05,R-.05].map(ye=>[d(ye,j,0),d(ye,j,I)]),cell:x,skipped:k})}else if(!t.flat&&i>.001){let I=Qe+o*Math.sin(i),P=[d($,F,Qe),d(R,F,Qe),d(R,z,I),d($,z,I)];_.push({corners:P,posts:[$+.05,R-.05].map(C=>[d(C,z,0),d(C,z,I)]),cell:x,skipped:k})}else if(!t.flat)_.push({corners:[d($,F,Qe),d(R,F,Qe),d(R,z,Qe),d($,z,Qe)],posts:[],cell:x,skipped:k});else{let P=.15+o*Math.sin(i),C=e.rack==="ew"&&b%2===1?!e.flip:!!e.flip,[B,j]=C?[z,F]:[F,z],ye=[d($,B,.15),d(R,B,.15),d(R,j,P),d($,j,P)],yt=[$+.05,R-.05].flatMap(V=>[[d(V,B,0),d(V,B,.15)],[d(V,j,0),d(V,j,P)]]);_.push({corners:ye,posts:yt,cell:x,skipped:k})}}}),_}function ft(t,e){if(t.unbounded)return{u:e.u,v:e.v};let[n,r]=xn(t,e),o=hu(t,e);if(o){let[s,a]=[(n*Math.abs(o.cos)+r*Math.abs(o.sin))/2,(n*Math.abs(o.sin)+r*Math.abs(o.cos))/2],l=(h,p,d)=>Math.floor(Math.max(p,Math.min(h,d-p))*100+1e-6)/100,[c,u]=[e.u+n/2,e.v+r/2];return{u:Math.round((l(c,s,t.lu)-n/2)*100)/100,v:Math.round((l(u,a,t.ls)-r/2)*100)/100}}let i=s=>Math.floor(s*100+1e-6)/100;return{u:i(Math.min(Math.max(0,e.u),Math.max(0,t.lu-n))),v:i(Math.min(Math.max(0,e.v),Math.max(0,t.ls-r)))}}function yr(t,e){let[n,r]=xn(t,e),[o,i]=[e.u+n/2,e.v+r/2];return[t.o[0]+t.eu[0]*o+t.es[0]*i,t.o[2]+t.eu[2]*o+t.es[2]*i]}var Ro=.78,wr=1.18,Et=t=>({id:t.id,face:t.face,u:t.u,v:t.v,rows:1,cols:1,portrait:!0,module_w:t.w||Ro,module_h:t.h||wr});function Ss(t,e){let n=We(t,Et(e))[0];if(!n)return null;let r=o=>[o[0]-t.n[0]*.05,o[1]-t.n[1]*.05,o[2]-t.n[2]*.05];return n.corners.map(r)}function Ms(t,e){let[n]=Gt(e);return rt((t.lu-(e.cols*n+(e.cols-1)*Ce))/2)}var vr=.4;function $n(t,e){let n={id:e,face:t.key,u:0,v:0,rows:1,cols:1,portrait:!0,tilt:t.flat?15:null,flip:!1,entity:null,look:"black"},[r]=Gt(n),[o,i]=t.span(t.ls/2);for(n.cols=Math.max(1,Math.floor((i-o-2*vr+Ce)/(r+Ce))),n.rows=Math.max(1,Math.min(4,Math.floor((t.ls-2*vr)/br(t,n))));n.cols>1&&We(t,{...n,u:Ms(t,n),v:vr}).length<n.rows*n.cols;)n.cols--;return n.u=Ms(t,n),n.v=vr,n}function Ao(t,e){let n={...e,face:t.key,tilt:t.flat?e.tilt??15:null,rotation:null,flip:!1};return n.u=Ms(t,n),n.v=vr,{...n,...ft(t,n)}}function Es(t,e,n){let r=t.settings.north??0,o=a=>a.lu*(1.3+Math.cos((mr(a.facing,r)-180)*Math.PI/180)),i=He(t,n).sort((a,l)=>o(l)-o(a))[0];if(!i)return null;let s={...$n(i,e),portrait:!1,rows:1};return s.cols=Math.max(1,Math.floor((i.lu-.8+Ce)/(gr+Ce))),s.u=rt((i.lu-(s.cols*gr+(s.cols-1)*Ce))/2),s.v=rt(Math.max(0,i.ls-Eo-.3)),s}function kr(t,e){let n=t.floors.flatMap(i=>i.rooms.flatMap(s=>s.points)),r=n.length?Math.max(...n.map(i=>i[0]))+3:0,o=n.length?Math.min(...n.map(i=>i[1])):0;return{id:e,face:Te,u:rt(r),v:rt(o),rows:2,cols:4,portrait:!0,tilt:25,flip:!0,rotation:(t.settings.north??0)||0,look:"black",entity:null}}function xr(t,e,n){let r=Mo(t,e),[o,i]=xn(r,e),[s,a]=[e.u+o/2,e.v+i/2],l=[r.eu[0]*s+r.es[0]*a,r.eu[2]*s+r.es[2]*a],c=n*Pe,u=l[0]*Math.cos(c)+l[1]*Math.sin(c)-o/2,h=l[0]*-Math.sin(c)+l[1]*Math.cos(c)-i/2;return{u:rt(u),v:rt(h),rotation:(Math.round(n)%360+360)%360}}function $r(t,e){let[n,r]=t.span(t.ls/2);return{id:e,face:t.key,u:rt((n+r-Ro)/2),v:rt(Math.max(0,Math.min(t.ls-wr,t.ls*.45-wr/2))),w:null,h:null,cover:null,contact:null,tilt:null}}function Sr(t,e){let[n,r]=[e[0]-t.o[0],e[1]-t.o[2]],[o,i,s,a]=[t.eu[0],t.eu[2],t.es[0],t.es[2]],l=o*a-i*s;if(Math.abs(l)<1e-9)return null;let c=(n*a-r*s)/l,u=(o*r-i*n)/l;if(u<0||u>t.ls)return null;let[h,p]=t.span(u);return c>=h&&c<=p?{u:c,s:u}:null}function Rs(t,e){let n=null;for(let r of t){if(r.wall){let[s,a]=[e[0]-r.o[0],e[1]-r.o[2]],l=s*r.eu[0]+a*r.eu[2],c=s*r.n[0]+a*r.n[2],u=l>=0&&l<=r.lu;if(u&&c>=-.05&&c<=.35)return{face:r,u:l,s:Number.NaN};u&&c>.35&&c<=.8&&!n&&(n={face:r,u:l,s:Number.NaN,y:-1/0});continue}let o=Sr(r,e);if(!o)continue;let i=r.o[1]+r.es[1]*o.s;(!n||i>n.y)&&(n={face:r,...o,y:i})}return n&&{face:n.face,u:n.u,s:n.s}}function Fo(t,e,n){let r=Vt(n,t.n);if(Math.abs(r)<1e-6)return null;let o=Vt(Le(t.o,e),t.n)/r;if(o<=0)return null;let i=Le([e[0]+n[0]*o,e[1]+n[1]*o,e[2]+n[2]*o],t.o);return{t:o,u:Vt(i,t.eu),s:Vt(i,t.es)}}function As(t,e,n){if(t.unbounded)return!0;if(n<0||n>t.ls)return!1;let[r,o]=t.span(n);return e>=r&&e<=o}function Fs(t,e,n,r){return We(t,e).some(i=>{let s=i.corners.map(c=>{let u=Le(c,t.o);return[Vt(u,t.eu),Vt(u,t.es)]}),a=s.map(c=>c[0]),l=s.map(c=>c[1]);return n>=Math.min(...a)-.05&&n<=Math.max(...a)+.05&&r>=Math.min(...l)-.05&&r<=Math.max(...l)+.05})}var n_=["n","ne","e","se","s","sw","w","nw"],zs=(t,e)=>n_[Math.round(mr(t.facing,e)/45)%8];function Mr(t,e){let n=r=>{if(r.flat)return r.lu*r.ls*.8;let o=Math.cos((mr(r.facing,e)-180)*Math.PI/180);return r.lu*r.ls*(1.2+o)};return[...t].sort((r,o)=>n(o)-n(r))[0]??null}var gu=["kitchen_row","kitchen_l","bath","bedroom","living","dining","office","kids","hall"],pu={kitchen_row:{rows:[["back","start",["fridge","kitchen_tall",["kitchen",[.9,.62,.92]],"sink","dishwasher","stove",["kitchen",[.6,.62,.92]]]],["back","start",[["kitchen_wall",[1.2,.35,.7]]]]],spots:[[["table",[1.2,.8,.75]],.5,.72,0],["lamp_pendant",.5,.72,0],["lamp_ceiling",.5,.3,0]]},kitchen_l:{rows:[["back","start",["fridge",["kitchen",[.9,.62,.92]],"sink","dishwasher","stove"]],["right","start",[["kitchen",[.9,.62,.92]],["kitchen",[.6,.62,.92]],"kitchen_tall"]],["back","start",[["kitchen_wall",[1.2,.35,.7]]]]],spots:[["table",.4,.68,0],["bar_stool",.72,.86,180],["lamp_ceiling",.5,.35,0]]},bath:{rows:[["back","center",["washbasin"]],["back","end",["wc"]],["front","start",["bathtub"]],["left","start",["washer"]]],spots:[["lamp_downlight",.5,.5,0]]},bedroom:{rows:[["back","center",["nightstand","bed","nightstand"]],["left","center",[["wardrobe",[2,.6,2.1]]]],["front","end",["dresser"]]],spots:[["lamp_ceiling",.5,.55,0]]},living:{rows:[["back","center",["tv_board"]],["right","start",["shelf"]]],spots:[["sofa",.5,.72,180],["coffee_table",.5,.52,0],[["rug",[2.2,1.6,.01]],.5,.55,0],["armchair",.14,.5,270],["lamp_floor",.86,.8,0],["plant",.9,.12,0],["lamp_ceiling",.5,.45,0]]},dining:{rows:[["back","center",["sideboard"]]],spots:[["table",.5,.55,0],["chair",.4,.35,0],["chair",.6,.35,0],["chair",.4,.75,180],["chair",.6,.75,180],["lamp_pendant",.5,.55,0]]},office:{rows:[["back","center",["desk"]],["left","center",["shelf","shelf"]]],spots:[["office_chair",.5,.38,180],["lamp_ceiling",.5,.55,0]]},kids:{rows:[["left","start",[["bed",[.9,2,.8]]]],["back","end",[["desk",[1.2,.6,.75]]]],["right","end",["shelf"]]],spots:[[["rug",[1.6,1.2,.01]],.55,.6,0],["lamp_ceiling",.5,.5,0]]},hall:{rows:[["left","start",["coat_rack"]]],spots:[["lamp_downlight",.5,.3,0],["lamp_downlight",.5,.7,0]]}},fu=t=>typeof t=="string"?t:t[0],zo=t=>typeof t=="string"?je[t]:t[1],Sn=.05,r_=.02,mu=t=>Math.round(t*1e3)/1e3;function o_(t,e,n,r){switch(e){case"back":return{x:t.x0+n,z:t.z0+r,turn:0};case"right":return{x:t.x1-r,z:t.z0+n,turn:90};case"front":return{x:t.x1-n,z:t.z1-r,turn:180};case"left":return{x:t.x0+r,z:t.z1-n,turn:270}}}function _u(t,e,n){let r=ce(t.points),o=r.x1-r.x0,i=r.z1-r.z0,s=[],a=(l,c,u,h,[p,d,f])=>{s.push({id:n(),type:l,x:mu(c),z:mu(u),rotation:h,w:p,d,h:f,variant:null,entity:null,power:null})};for(let[l,c,u]of pu[e].rows){let h=l==="back"||l==="front"?o:i,p=0,d=[];for(let _ of u){if(p+zo(_)[0]>h-.1)break;d.push(_),p+=zo(_)[0]}let f=c==="start"?Sn:c==="end"?h-p-Sn:(h-p)/2;for(let _ of d){let y=zo(_),b=o_(r,l,f+y[0]/2,y[1]/2+r_);a(fu(_),b.x,b.z,b.turn,y),f+=y[0]}}for(let[l,c,u,h]of pu[e].spots){let p=zo(l),d=(y,b,v)=>Math.min(v,Math.max(b,y)),f=d(r.x0+o*c,r.x0+p[0]/2+Sn,r.x1-p[0]/2-Sn),_=d(r.z0+i*u,r.z0+p[1]/2+Sn,r.z1-p[1]/2-Sn);a(fu(l),f,_,h,p)}return s}var i_=30*Math.PI/180,bu=.05;function Ps(t){let e=t.points.length;return t.points.map((n,r)=>{let o=t.points[(r+1)%e];return Math.hypot(o[0]-n[0],o[1]-n[1])})}function Er(t){return Ps(t).reduce((e,n)=>e+n,0)}function s_(t,e){let n=Ps(t),r=0;for(let o=0;o<e&&o<n.length;o++)r+=n[o];return r}function a_(t,e){let n=t.points.length,[r,o,i]=[t.points[e],t.points[(e+1)%n],t.points[(e+2)%n]],s=[o[0]-r[0],o[1]-r[1]],a=[i[0]-o[0],i[1]-o[1]],[l,c]=[Math.hypot(s[0],s[1]),Math.hypot(a[0],a[1])];return l<1e-9||c<1e-9?0:Math.acos(Math.max(-1,Math.min(1,(s[0]*a[0]+s[1]*a[1])/(l*c))))}function Ts(t,e,n){let r=Ps(t),o=r.length,i=r.reduce((d,f)=>d+f,0);if(o<3||!(i>0)||!(n>0))return null;let s=Math.min(n,i),a=(e%i+i)%i,l=0,c=0;for(;l<o-1&&a>=c+r[l];)c+=r[l],l++;let u=a-c,h=s,p=[];for(let d=0;d<=o&&h>1e-9;d++){let f=r[l]-u,_=Math.min(h,f);_>1e-9&&p.push({edge:l,t0:u,t1:u+_}),h-=_,u=0;let y=(l+1)%o;if(h>1e-9&&a_(t,l)>i_)break;l=y}for(;p.length>1&&p[0].t1-p[0].t0<bu;)p.shift();for(;p.length>1&&p[p.length-1].t1-p[p.length-1].t0<bu;)p.pop();return p.length?p.map(d=>({edge:d.edge,offset:(d.t0+d.t1)/2,width:d.t1-d.t0})):null}function Mn(t,e){let n=e[0];return n?{from:s_(t,n.edge)+n.offset-n.width/2,width:e.reduce((r,o)=>r+o.width,0)}:null}function Rt(t,e){return e.front?t.filter(n=>n.front===e.front):[e]}function Is(t,e){let n=t.points.length,r=1/0,o=0,i=0;for(let s=0;s<n;s++){let a=t.points[s],l=t.points[(s+1)%n],c=l[0]-a[0],u=l[1]-a[1],h=Math.hypot(c,u);if(h<1e-6)continue;let p=Math.max(0,Math.min(h,((e[0]-a[0])*c+(e[1]-a[1])*u)/h)),d=Math.hypot(e[0]-(a[0]+c*p/h),e[1]-(a[1]+u*p/h));d<r&&(r=d,o=i+p),i+=h}return o}function Rr(t,e,n,r,o,i=()=>D("opening")){let s=Ts(e,r,o);if(!s)return null;let a=Rt(t,n),l=new Set(a.map(d=>d.id)),c=s.length>1?a[0].front??`front-${a[0].id}`:null,u=s.map((d,f)=>({...n,id:f===0?a[0].id:i(),edge:d.edge,offset:d.offset,width:d.width,front:c})),h=[],p=!1;for(let d of t){if(!l.has(d.id)){h.push(d);continue}p||(h.push(...u),p=!0)}return h}var Ls=globalThis,Ds=Ls.__nextfloorBuiltin?.de??{},Os=Ls.__nextfloorBuiltin?.en??{};Ls.__nextfloorBuiltin??={de:Ds,en:Os};var l_=()=>typeof S=="object"&&S||{},c_=globalThis,u_=c_.__nextfloorTexts??=new Map;function d_(t){let e=t.toLowerCase().split("-")[0];return e!=="de"&&e!=="en"&&e in l_()?e:void 0}function yu(t){let e=d_(t),n=e===void 0?void 0:u_.get(e);return n instanceof Promise?void 0:n}function Po(t,e){return yu(t)?.[e]}function xe(t,e,n={}){let r=t?.language??navigator.language,o=r.startsWith("de"),i=(o?void 0:yu(r)?.[e])??(o?Ds:Os)[e]??Os[e]??Ds[e]??e;for(let[s,a]of Object.entries(n))i=i.replace(`{${s}}`,String(a));return i}function G(t,e,n=2){return e.toLocaleString(t?.language??void 0,{maximumFractionDigits:n})}var Be=ae`
  :host {
    --nf-text: var(--primary-text-color, #e1e1e1);
    --nf-muted: var(--secondary-text-color, #9b9b9b);
    --nf-accent: var(--primary-color, #03a9f4);
    --nf-accent-text: var(--text-primary-color, #ffffff);
    --nf-surface: var(--ha-card-background, var(--card-background-color, #1c1c1c));
    --nf-bg: var(--primary-background-color, #111111);
    --nf-bg2: var(--secondary-background-color, #1c1c1c);
    /* floating bars and cards over the 3D view: the card colour, a little see-through */
    --nf-chrome: color-mix(in srgb, var(--nf-surface) var(--nf-chrome-mix, 84%), transparent);
    --nf-chrome-solid: var(--nf-surface);
    --nf-line: var(--divider-color, rgba(255, 255, 255, 0.12));
    /* quiet fills for buttons and fields, and the tonal accent of an active control */
    --nf-fill: color-mix(in srgb, var(--nf-text) 7%, transparent);
    --nf-fill-strong: color-mix(in srgb, var(--nf-text) 13%, transparent);
    --nf-tonal: color-mix(in srgb, var(--nf-accent) 20%, transparent);
    --nf-soft: var(--info-color, #4a90e2);
    --nf-warm: var(--state-light-active-color, #ffa726);
    --nf-danger: var(--error-color, #db4437);
    --nf-good: var(--success-color, #43a047);
    --nf-radius: var(--ha-card-border-radius, 12px);
    --nf-shadow: var(--ha-card-box-shadow, 0 1px 2px rgba(0, 0, 0, 0.18), 0 6px 20px rgba(0, 0, 0, 0.2));
    --nf-font: var(--primary-font-family, Roboto, "Noto Sans", system-ui, -apple-system, "Segoe UI", sans-serif);
    --nf-title-font: var(--nf-font);
    font-family: var(--nf-font);
    color: var(--nf-text);
  }
`,Xx=ae`
  :host([readable]) {
    --secondary-text-color: var(--primary-text-color, #e1e1e1);
    --divider-color: color-mix(in srgb, var(--primary-text-color, #e1e1e1) 40%, transparent);
    --nf-chrome-mix: 97%;
  }
  :host([readable]) nf-room-panel,
  :host([readable]) .nf-nav,
  :host([readable]) .nf-overlay {
    zoom: 1.2;
  }
`,ot=ae`
  /* a group of switches: one rounded pill, the active one tinted with the accent */
  .nf-seg {
    display: inline-flex;
    padding: 4px;
    gap: 2px;
    border-radius: 999px;
    background: var(--nf-chrome);
    box-shadow: var(--nf-shadow);
    backdrop-filter: blur(10px);
  }
  .nf-seg button,
  .nf-chip {
    font: inherit;
    font-size: 14px;
    font-weight: 500;
    border: none;
    background: none;
    color: var(--nf-muted);
    padding: 7px 14px;
    border-radius: 999px;
    cursor: pointer;
    white-space: nowrap;
    min-height: 36px;
    transition:
      background 0.15s,
      color 0.15s;
  }
  .nf-seg button:hover:not(:disabled),
  .nf-chip:hover {
    background: var(--nf-fill);
    color: var(--nf-text);
  }
  /* on a small stage (a small window, a zoomed browser, a dashboard column) the switches at the bottom take less room */
  @container nf ((max-width: 1360px) or (max-height: 640px)) {
    :is(.nf-overlay, .nf-card-controls) .nf-seg {
      padding: 3px;
    }
    :is(.nf-overlay, .nf-card-controls) :is(.nf-seg button, .nf-chip) {
      font-size: 12.5px;
      padding: 5px 10px;
    }
  }
  .nf-time-slider {
    display: inline-flex;
    align-items: center;
    padding: 4px 10px;
  }
  .nf-time-slider input {
    width: 160px;
    accent-color: var(--nf-accent);
  }
  .nf-seg button[aria-pressed="true"],
  .nf-chip[aria-pressed="true"] {
    background: color-mix(in srgb, var(--nf-accent) 24%, var(--nf-chrome-solid));
    color: var(--nf-accent);
    font-weight: 600;
  }
  .nf-seg button:disabled {
    opacity: 0.4;
    cursor: default;
  }
  /* a single pill, like the chips of the Mushroom cards */
  .nf-chip {
    background: var(--nf-chrome);
    color: var(--nf-text);
    box-shadow: var(--nf-shadow);
    backdrop-filter: blur(10px);
  }

  button:focus-visible,
  input:focus-visible,
  select:focus-visible {
    outline: 2px solid var(--nf-accent);
    outline-offset: 2px;
  }
  /* the round icon badge every row and card starts with */
  .nf-ico {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: none;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: var(--nf-tonal);
    color: var(--nf-accent);
    --mdc-icon-size: 20px;
  }
  .nf-ico.nf-warm {
    background: color-mix(in srgb, var(--nf-warm) 22%, transparent);
    color: var(--nf-warm);
  }
  .nf-ico.nf-off {
    background: var(--nf-fill);
    color: var(--nf-muted);
  }
  .nf-btn {
    font: inherit;
    font-size: 14px;
    font-weight: 500;
    border: none;
    background: var(--nf-fill);
    color: var(--nf-text);
    border-radius: var(--nf-radius);
    padding: 7px 14px;
    cursor: pointer;
    min-height: 36px;
    transition: background 0.15s;
  }
  .nf-btn:hover {
    background: var(--nf-fill-strong);
  }
  .nf-btn.nf-danger {
    color: var(--nf-danger);
  }
  .nf-btn.nf-primary {
    background: var(--nf-accent);
    color: var(--nf-accent-text);
  }
  .nf-btn.nf-primary:hover {
    background: color-mix(in srgb, var(--nf-accent) 88%, var(--nf-text));
  }
  .nf-field {
    display: grid;
    gap: 4px;
    font-size: 12px;
    color: var(--nf-muted);
  }
  .nf-field input,
  .nf-field select,
  .nf-field textarea {
    font: inherit;
    font-size: 14px;
    color: var(--nf-text);
    background: var(--nf-fill);
    border: none;
    border-bottom: 1px solid var(--nf-line);
    border-radius: 10px 10px 4px 4px;
    padding: 8px 10px;
    min-width: 0;
  }
  .nf-field input:focus,
  .nf-field select:focus,
  .nf-field textarea:focus {
    border-bottom-color: var(--nf-accent);
  }
  .nf-field input[type="range"] {
    padding: 0;
    accent-color: var(--nf-accent);
  }
  .nf-field select option {
    background: var(--nf-chrome-solid);
    color: var(--nf-text);
  }
  /* fingers need 40 px */
  @media (pointer: coarse) {
    .nf-seg button,
    .nf-chip,
    .nf-btn {
      min-height: 40px;
    }
  }
`;var de=t=>/^(sensor|input_number|number)\./.test(t),To=t=>/^(binary_sensor|input_boolean)\./.test(t);function En(t,e){if(!de(e))return!1;let n=t?.states[e]?.attributes;return n?.device_class==="power"||n?.unit_of_measurement==="W"||n?.unit_of_measurement==="kW"}function h_(t,e){let n=t?.entities?.[e],r=n?.area_id??(n?.device_id?t?.devices?.[n.device_id]?.area_id:null);return r?t?.areas?.[r]?.name:void 0}function W(t,e){return Object.keys(t?.states??{}).filter(e).map(n=>{let r=h_(t,n);return{id:n,label:r?`${N(t,n)} \xB7 ${r}`:N(t,n)}}).sort((n,r)=>n.label.localeCompare(r.label))}function Io(t,e){return t.power&&t.power!=="none"?t.power:e.get(t.id)?.power??null}var wu={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},vu=t=>(...e)=>({_$litDirective$:t,values:e}),Do=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};var Ar=class extends Do{constructor(e){if(super(e),this.it=g,e.type!==wu.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===g||e==null)return this._t=void 0,this.it=e;if(e===ct)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let n=[e];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}};Ar.directiveName="unsafeHTML",Ar.resultType=1;var ku=vu(Ar);var xu=40,Hs=class extends ie{static properties={options:{attribute:!1},fixed:{attribute:!1},value:{attribute:!1},disabled:{type:Boolean},placeholder:{attribute:!1},_query:{state:!0},_open:{state:!0},_cursor:{state:!0}};blurTimer;constructor(){super(),this.options=[],this.fixed=[],this.value=null,this.disabled=!1,this.placeholder="",this._query="",this._open=!1,this._cursor=0}get current(){return[...this.fixed,...this.options].find(e=>e.id===this.value)}get hits(){let e=this._query.trim().toLowerCase(),n=e.split(/\s+/).filter(Boolean),r=s=>{let a=`${s.label} ${s.id}`.toLowerCase();return n.every(l=>a.includes(l))},o=this.fixed.filter(s=>!e||r(s)),i=e?this.options.filter(r):this.options;return[...o,...i.slice(0,xu)]}get leftOut(){let e=this._query.trim().toLowerCase(),n=e.split(/\s+/).filter(Boolean),r=e?this.options.filter(o=>n.every(i=>`${o.label} ${o.id}`.toLowerCase().includes(i))).length:this.options.length;return Math.max(0,r-xu)}choose(e){this.value=e,this._query="",this._open=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0,composed:!0}))}onKey(e){let n=this.hits;e.key==="ArrowDown"?(this._open=!0,this._cursor=Math.min(n.length-1,this._cursor+1),e.preventDefault()):e.key==="ArrowUp"?(this._cursor=Math.max(0,this._cursor-1),e.preventDefault()):e.key==="Enter"?(this._open&&n[this._cursor]&&this.choose(n[this._cursor].id),e.preventDefault()):e.key==="Escape"&&(this._open=!1,this._query="")}render(){let e=this.current,n=this._open?this.hits:[];return m`<div class="wrap">
      <input
        type="text"
        role="combobox"
        aria-expanded=${this._open}
        ?disabled=${this.disabled}
        placeholder=${e?e.label:this.placeholder}
        .value=${this._open?this._query:e?.label??""}
        @focus=${()=>{clearTimeout(this.blurTimer),this._open=!0,this._query="",this._cursor=0}}
        @blur=${()=>{this.blurTimer=setTimeout(()=>this._open=!1,150)}}
        @input=${r=>{this._query=r.target.value,this._cursor=0,this._open=!0}}
        @keydown=${this.onKey}
      />
      ${this._open?m`<ul class="list" role="listbox">
            ${n.length?g:m`<li class="empty">–</li>`}
            ${n.map((r,o)=>m`<li
                role="option"
                aria-selected=${r.id===this.value}
                class="${o===this._cursor?"cursor":""} ${r.id===this.value?"chosen":""}"
                @mousedown=${i=>i.preventDefault()}
                @click=${()=>this.choose(r.id)}
              >
                <span>${r.label}</span>${r.id.includes(".")?m`<small>${r.id}</small>`:g}
              </li>`)}
            ${this.leftOut>0?m`<li class="empty">… +${this.leftOut} · ${this.placeholder}</li>`:g}
          </ul>`:g}
    </div>`}static styles=[Be,ae`
      :host {
        display: block;
        position: relative;
      }
      input {
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        color: var(--nf-text);
        background: var(--nf-chrome-solid);
        border: 1px solid var(--nf-line);
        border-radius: 10px;
        padding: 8px 10px;
      }
      input::placeholder {
        color: var(--nf-text);
        opacity: 0.9;
      }
      input:focus::placeholder {
        color: var(--nf-muted);
      }
      input:focus {
        outline: 2px solid var(--nf-accent);
        outline-offset: -1px;
      }
      .list {
        position: absolute;
        left: 0;
        right: 0;
        top: calc(100% + 4px);
        z-index: 20;
        margin: 0;
        padding: 4px;
        list-style: none;
        max-height: 280px;
        overflow-y: auto;
        background: var(--nf-chrome-solid);
        border: 1px solid var(--nf-line);
        border-radius: 10px;
        box-shadow: var(--nf-shadow);
      }
      li {
        display: flex;
        flex-direction: column;
        gap: 1px;
        padding: 6px 8px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 13.5px;
      }
      li small {
        color: var(--nf-muted);
        font-size: 11px;
      }
      li.cursor,
      li:hover {
        background: color-mix(in srgb, var(--nf-accent) 18%, transparent);
      }
      li.chosen {
        color: var(--nf-accent);
      }
      li.empty {
        color: var(--nf-muted);
        cursor: default;
      }
    `]};customElements.get("nf-entity-picker")||customElements.define("nf-entity-picker",Hs);var Ut=t=>t.target.value,Cs=t=>Number.parseFloat(t.replace(",",".")),fe=t=>Math.round(t*1e3)/1e3,$u=t=>t.wide?"nf-field nf-wide":"nf-field";function A(t,e,n,r,o=.01,i){return m`<label class="nf-field"
    >${e}
    <input
      type="number"
      inputmode="decimal"
      step=${o}
      min=${i??g}
      .value=${String(fe(n))}
      ?disabled=${!t.admin}
      @change=${s=>{let a=Cs(Ut(s));Number.isFinite(a)&&r(a)}}
    />
  </label>`}function q(t,e,n,r,o={}){return m`<label class=${$u(o)} title=${o.title??g}
    >${e}
    <input type="text" .value=${n} placeholder=${o.placeholder??g} maxlength=${o.maxlength??g} ?disabled=${!t.admin} @change=${i=>r(Ut(i).trim())} />
  </label>`}function O(t,e,n,r,o,i={}){return m`<label class=${$u(i)} title=${i.title??g}
    >${e}
    <select ?disabled=${!t.admin} @change=${s=>o(Ut(s))}>
      ${r.map(([s,a])=>m`<option value=${s} ?selected=${s===n}>${a}</option>`)}
    </select>
  </label>`}function L(t,e,n,r,o={}){return m`<label class="nf-check ${o.wide===!1?"":"nf-wide"}" title=${o.title??g}
    ><input type="checkbox" .checked=${n} ?disabled=${!t.admin} @change=${i=>r(i.target.checked)} />
    ${e}</label
  >`}function mt(t,e,n,r,o){return m`<label class="nf-field"
    >${e}
    <span class="nf-color-row"
      ><input type="color" .value=${n??r} ?disabled=${!t.admin} @change=${i=>o(i.target.value)} />
      ${n?m`<button type="button" class="nf-link" ?disabled=${!t.admin} @click=${()=>o(null)}>${t.t("wall_paint_default")}</button>`:g}</span
    ></label
  >`}function T(t,e,n,r,o,i){let s=r===void 0?null:r?t.t("entity_auto",{name:N(t.hass,r)}):t.t("entity_auto_none"),a=[...s!==null?[{id:"__auto",label:s}]:[],{id:"none",label:t.t("entity_none")}];return m`<label class="nf-field nf-wide"
    >${e}
    <nf-entity-picker
      .options=${o}
      .fixed=${a}
      .value=${n??(s!==null?"__auto":"none")}
      .placeholder=${t.t("entity_search")}
      ?disabled=${!t.admin}
      @change=${c=>{c.stopPropagation(),i(c.detail.value==="__auto"?null:c.detail.value)}}
    ></nf-entity-picker>
  </label>`}function Rn(t,e,n){return n?(n.startsWith("mdi:")?n:`mdi:${n}`).replace(/[^a-z0-9:-]/gi,""):t.hass?xc(t.hass,e):null}function At(t,e,n){let r=e?(e.startsWith("mdi:")?e:`mdi:${e}`).replace(/[^a-z0-9:-]/gi,""):"";return m`<label class="nf-field nf-wide" title=${t.t("marker_icon_hint")}
    >${t.t("marker_icon")}
    <span class="nf-icon-row">
      <input type="text" placeholder="mdi:thermometer" .value=${e??""} ?disabled=${!t.admin} @change=${o=>n(Ut(o).trim().replace(/^mdi:/,"")||null)} />
      ${r?ku(`<ha-icon icon="${r}"></ha-icon>`):g}
    </span>
  </label>`}function An(t,e,n){return m`<label class="nf-field nf-wide" title=${t.t("marker_show_hint")}
    >${t.t("marker_show")}
    <select ?disabled=${!t.admin} @change=${r=>n(Ut(r)||null)}>
      <option value="" ?selected=${!e}>${t.t("marker_show_auto")}</option>
      ${Yl.map(r=>m`<option value=${r} ?selected=${r===e}>${t.t(`marker_show_${r}`)}</option>`)}
    </select>
  </label>`}function Fn(t,e,n){let r=e??{},o=i=>s=>{let a={...r,[i]:Math.round(Math.max(-5,Math.min(5,s))*100)/100};n(a.x||a.z||a.y?a:null)};return m`<details class="nf-wide nf-pin-shift" ?open=${!!e}>
    <summary>${t.t("pin_shift")}</summary>
    <div class="nf-form">
      ${A(t,"\u2194 x",r.x??0,o("x"),.05)} ${A(t,"\u2195 z",r.z??0,o("z"),.05)} ${A(t,t.t("pin_shift_up"),r.y??0,o("y"),.05)}
      ${e?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>n(null)}>${t.t("height_auto")}</button>`:g}
      <p class="nf-sub nf-wide">${t.t("pin_shift_hint")}</p>
    </div>
  </details>`}var X=(...t)=>m`<div class="nf-actions">${t}</div>`,M=(t,e="")=>m`<p class="nf-sub ${e}">${t}</p>`;function jt(t,e,n,r={}){let o=r.lowest??10;return m`<label class="nf-field" title=${t.t(r.hint??"glow_scale_hint")}
    >${t.t(r.label??"glow_scale")}
    <input
      type="number"
      min=${o}
      max="150"
      step="5"
      .value=${String(Math.round((e??1)*100))}
      ?disabled=${!t.admin}
      @change=${i=>{let s=Number(Ut(i)),a=Math.min(150,Math.max(o,Ut(i).trim()===""||Number.isNaN(s)?100:s))/100;n(Math.abs(a-1)<.001?null:a)}}
    />
  </label>`}function Su(t,e,n){let r=t.filter(o=>o.person!==e);return n&&n!=="none"?[...r,{person:e,sensor:n}]:r}function Mu(t,e){let n=e.slice(e.indexOf(".")+1),r=o=>o.id.includes(n)&&/(area|room|raum|bermuda|espresense)/.test(o.id);return[...t.filter(r),...t.filter(o=>!r(o))]}function Eu(t){let e=t.target?`, target: { x: ${t.target.x}, y: ${t.target.y}, z: ${t.target.z} }`:"";return`start_view: { theta: ${t.theta}, phi: ${t.phi}, radius: ${t.radius}${e} }`}function Ru(t){let e=t.trim();if(!e)return{ok:!0,value:null};try{let n=JSON.parse(e);return n&&typeof n=="object"&&!Array.isArray(n)?{ok:!0,value:n}:{ok:!1}}catch{return{ok:!1}}}function Oo(t,e,n){let r=[...t],[o]=r.splice(e,1);return r.splice(Math.max(0,Math.min(r.length,e+n)),0,o),r}var Zt=(t,e)=>t.filter((n,r)=>r!==e),Fr=(t,e,n)=>t.map((r,o)=>o===e?{...r,...n}:r),gt=t=>t.length>0?t:void 0;var p_=["scene","script","automation","button","input_button","switch","input_boolean","light","fan","cover","lock"],f_=40,m_=20,g_=30,__=["music","url","playlist","SPOTIFY","AMAZON_MUSIC","TUNEIN","APPLE_MUSIC"],Ws={navigate:"/lovelace/rollos",more_info:"cover.wohnzimmer",service:"script.turn_on",fire_dom_event:""},Lo=(t,e,n,r=!1)=>m`<button class="nf-pin" title=${t} ?disabled=${r} @click=${n}>${e}</button>`;function b_(t){let e=t.doc.settings.favorites??[],n=a=>t.change(l=>l.settings.favorites=gt(a)),r=t.doc.floors,o=t.doc.settings.favorite_floors??{},i=W(t.hass,a=>p_.includes(a.split(".")[0])&&!e.includes(a)),s=(a,l)=>m`<div class="nf-row nf-dev-row">
    <span class="nf-dev-name"><span>${N(t.hass,a)}</span></span>
    ${r.length>1?m`<select title=${t.t("favorite_floor")} .value=${o[a]??""} @change=${c=>{let u=c.target.value,h={...o};u?h[a]=u:delete h[a],t.change(p=>p.settings.favorite_floors=Object.keys(h).length?h:void 0)}}>
          <option value="">${t.t("favorite_all_floors")}</option>
          ${r.map(c=>m`<option value=${c.id} ?selected=${o[a]===c.id}>${c.name}</option>`)}
        </select>`:g}
    ${Lo(t.t("move_up"),"\u2191",()=>n(Oo(e,l,-1)),l===0)}
    ${Lo(t.t("move_down"),"\u2193",()=>n(Oo(e,l,1)),l===e.length-1)}
    ${Lo(t.t("delete"),"\u2715",()=>n(Zt(e,l)))}
  </div>`;return m`<summary>${t.t("favorites")}${e.length>0?m` <span class="nf-lib-count">${e.length}</span>`:g}</summary>
    ${M(t.t("favorites_hint"))} ${e.map(s)}
    ${e.length<f_?m`<div class="nf-form">${T(t,t.t("favorites_add"),null,void 0,i,a=>a&&a!=="none"&&!e.includes(a)&&n([...e,a]))}</div>`:g}`}function y_(t){let e=t.doc.settings.own_alerts??[],n=s=>t.change(a=>a.settings.own_alerts=gt(s)),r=(s,a)=>n(Fr(e,s,a)),o=[["",t.t("own_alert_house")],...t.doc.floors.flatMap(s=>s.rooms.map(a=>[a.id,`${a.name} \xB7 ${s.name}`]))],i=(s,a)=>m`<div class="nf-form nf-own-button">
    ${T(t,t.t("own_alert_entity"),s.entity||null,void 0,W(t.hass,()=>!0),l=>r(a,{entity:l&&l!=="none"?l:""}))}
    ${q(t,t.t("own_alert_state"),s.state??"",l=>r(a,{state:l||null}),{placeholder:t.hass?.states[s.entity]?.state??"on \xB7 <20 \xB7 >80"})}
    ${q(t,t.t("own_alert_text"),s.text,l=>r(a,{text:l||t.t("own_alert_new")}),{wide:!0,maxlength:120})}
    ${O(t,t.t("room"),s.room_id??"",o,l=>r(a,{room_id:l||null}),{wide:!0})}
    ${mt(t,t.t("own_alert_color"),s.color??null,"#ffb547",l=>r(a,{color:l}))}
    ${O(t,t.t("own_alert_tap"),s.tap??"",[["",t.t("own_alert_tap_info")],["toggle",t.t("own_alert_tap_toggle")],["room",t.t("own_alert_tap_room")]],l=>r(a,{tap:l||null}))}
    <div class="nf-actions nf-wide"><button class="nf-btn nf-danger" @click=${()=>n(Zt(e,a))}>${t.t("delete")}</button></div>
  </div>`;return m`<h4>⚠ ${t.t("own_alerts")}</h4>
    ${M(t.t("own_alerts_hint"))} ${e.map(i)}
    ${e.length<40?X(m`<button class="nf-btn" @click=${()=>n([...e,{id:D("alert"),entity:"",state:null,text:t.t("own_alert_new")}])}>+ ${t.t("own_alert_add")}</button>`):g}`}function w_(t){let e=t.doc.settings.circuits??[],n=a=>t.change(l=>l.settings.circuits=gt(a)),r=(a,l)=>n(Fr(e,a,l)),o=t.doc.floors.flatMap(a=>a.rooms.map(l=>({id:l.id,label:t.doc.floors.length>1?`${l.name} \xB7 ${a.name}`:l.name}))),i=a=>o.find(l=>l.id===a)?.label??a,s=(a,l)=>m`<div class="nf-form nf-own-button">
    ${q(t,t.t("circuit_name"),a.name,c=>r(l,{name:c||t.t("circuit_new")}),{wide:!0,maxlength:80})}
    <div class="nf-wide">${a.rooms.map(c=>m`<span class="nf-chip">${i(c)} <button class="nf-btn nf-field-btn" title=${t.t("delete")} @click=${()=>r(l,{rooms:a.rooms.filter(u=>u!==c)})}>✕</button></span>`)}</div>
    ${O(t,t.t("circuit_add_room"),"",[["","\u2013"],...o.filter(c=>!a.rooms.includes(c.id)).map(c=>[c.id,c.label])],c=>c&&r(l,{rooms:[...a.rooms,c]}),{wide:!0})}
    <div class="nf-actions nf-wide"><button class="nf-btn nf-danger" @click=${()=>n(Zt(e,l))}>${t.t("delete")}</button></div>
  </div>`;return m`<h4>🔌 ${t.t("circuits")}</h4>
    ${M(t.t("circuits_hint"))} ${e.map(s)}
    ${e.length<120?X(m`<button class="nf-btn" @click=${()=>n([...e,{id:D("circuit"),name:t.t("circuit_new"),rooms:[]}])}>+ ${t.t("circuit_add")}</button>`):g}`}function v_(t){let e=t.doc.settings.calendars??[],n=i=>t.change(s=>s.settings.calendars=gt(i)),r=W(t.hass,i=>i.startsWith("calendar.")&&!e.includes(i)),o=(i,s)=>m`<div class="nf-row nf-dev-row">
    <span class="nf-dev-name"><span>${N(t.hass,i)}</span></span>
    ${Lo(t.t("delete"),"\u2715",()=>n(Zt(e,s)))}
  </div>`;return m`<h4>📅 ${t.t("today_calendars")}</h4>
    ${M(t.t("today_calendars_hint"))} ${e.map(o)}
    ${e.length<12?m`<div class="nf-form">${T(t,t.t("favorites_add"),null,void 0,r,i=>i&&i!=="none"&&!e.includes(i)&&n([...e,i]))}</div>`:g}`}function k_(t){let e=t.doc.settings.media_presets??[],n=s=>t.change(a=>a.settings.media_presets=gt(s)),r=(s,a)=>n(Fr(e,s,a)),o=[...new Set(t.doc.floors.flatMap(s=>[...s.placements.map(a=>a.entity_id),...s.furniture.map(a=>a.entity??"")]).filter(s=>s.startsWith("media_player.")))],i=(s,a)=>m`<div class="nf-form nf-own-button">
    ${q(t,t.t("own_button_label"),s.label,l=>r(a,{label:l||"Radio"}),{maxlength:60})}
    ${q(t,t.t("preset_type"),s.type,l=>r(a,{type:l||"music"}),{title:t.t("preset_type_hint")})}
    ${q(t,t.t("preset_content"),s.content,l=>r(a,{content:l}),{wide:!0,title:t.t("preset_content_hint"),placeholder:"https://\u2026 \xB7 spotify:playlist:\u2026 \xB7 Rock Antenne"})}
    ${o.length>1?m`<div class="nf-sub nf-wide">${t.t("preset_speakers")}</div>
          ${o.map(l=>L(t,N(t.hass,l),!!s.speakers?.includes(l),c=>r(a,{speakers:gt(c?[...s.speakers??[],l]:(s.speakers??[]).filter(u=>u!==l))}),{wide:!1}))}`:g}
    <div class="nf-actions nf-wide"><button class="nf-btn nf-danger" @click=${()=>n(Zt(e,a))}>${t.t("delete")}</button></div>
  </div>`;return m`<h4>${t.t("presets")}</h4>
    ${M(t.t("presets_hint"))}
    <datalist id="nf-preset-types">${__.map(s=>m`<option value=${s}></option>`)}</datalist>
    ${e.map(i)}
    ${e.length<g_?X(m`<button class="nf-btn" @click=${()=>n([...e,{id:D("preset"),label:"Radio",type:"music",content:""}])}>+ ${t.t("preset_add")}</button>`):g}`}function Bs(t,e,n){let r=e.action==="fire_dom_event"?'{"browser_mod": {"service": "browser_mod.popup", "data": {"title": "Rollos", "content": {"type": "custom:my-cover-card"}}}}':'{"entity_id": "script.party"}',o=i=>{let s=i.target;s.setCustomValidity("");let a=Ru(s.value);if(a.ok)return n(a.value);s.setCustomValidity(t.t("own_data_bad")),s.reportValidity()};return m`<label class="nf-field nf-wide" title=${t.t("own_data_hint")}
    >${t.t("own_data")}
    <textarea rows="4" spellcheck="false" placeholder=${r} .value=${e.data?JSON.stringify(e.data,null,1):""} @change=${o}></textarea>
  </label>`}function x_(t){let e=t.doc.settings.buttons??[],n=s=>t.change(a=>a.settings.buttons=gt(s)),r=(s,a)=>n(Fr(e,s,a)),o=lo.map(s=>[s,t.t(`own_action_${s}`)]),i=(s,a)=>m`<div class="nf-form nf-own-button">
    ${q(t,t.t("own_button_label"),s.label,l=>r(a,{label:l||t.t("own_button_new")}),{maxlength:60})}
    ${O(t,t.t("own_button_action"),s.action,o,l=>r(a,{action:l}))} ${At(t,s.icon??null,l=>r(a,{icon:l}))}
    ${s.action!=="fire_dom_event"?q(t,t.t(`own_target_${s.action}`),s.target??"",l=>r(a,{target:l||null}),{wide:!0,placeholder:Ws[s.action]}):g}
    ${s.action==="service"||s.action==="fire_dom_event"?Bs(t,s,l=>r(a,{data:l})):g}
    ${T(t,t.t("own_button_state"),s.state_entity??null,void 0,W(t.hass,l=>/^(switch|light|input_boolean|binary_sensor|fan|cover|media_player|climate|lock|person|device_tracker)\./.test(l)),l=>r(a,{state_entity:l&&l!=="none"?l:null}))}
    <div class="nf-actions nf-wide">
      <button class="nf-btn" ?disabled=${a===0} @click=${()=>n(Oo(e,a,-1))}>↑</button>
      <button class="nf-btn nf-danger" @click=${()=>n(Zt(e,a))}>${t.t("delete")}</button>
    </div>
  </div>`;return m`<h4>${t.t("own_buttons")}</h4>
    ${M(t.t("own_buttons_hint"))} ${e.map(i)}
    ${e.length<m_?X(m`<button class="nf-btn" @click=${()=>n([...e,{id:D("btn"),label:t.t("own_button_new"),action:"navigate",target:null}])}>+ ${t.t("own_button_add")}</button>`):g}`}function $_(t){let e=t.doc.settings.room_facts_off??[],n=["sun","comfort","air","circuits"].map(r=>L(t,t.t(`room_fact_${r}`),!e.includes(r),o=>t.change(i=>i.settings.room_facts_off=gt(o?e.filter(s=>s!==r):[...e,r]))));return m`<h4>${t.t("room_facts")}</h4><div class="nf-form">${n}</div>`}function Au(t){return m`<details class="nf-section">${b_(t)} ${x_(t)} ${y_(t)} ${w_(t)} ${v_(t)} ${k_(t)} ${$_(t)}</details>`}function Fu(t,e){let n=t.doc.settings.start_view??null,r=()=>{let o=e();o&&t.change(i=>i.settings.start_view=o)};return m`<details class="nf-section">
    <summary>${t.t("start_view")}</summary>
    ${M(t.t("start_view_hint"))}
    ${X(m`<button class="nf-btn nf-primary" @click=${r}>${t.t("start_view_set")}</button>`,n?m`<button class="nf-btn" @click=${()=>t.change(o=>o.settings.start_view=null)}>${t.t("start_view_reset")}</button>`:g)}
    ${n?m`${M(t.t("start_view_saved"))} ${M(t.t("start_view_card"))}<code class="nf-code">${Eu(n)}</code>`:g}
  </details>`}function zu(t){let e=Object.keys(t.hass?.states??{}).filter(o=>o.startsWith("person.")).sort(),n=W(t.hass,de),r=o=>T(t,`${N(t.hass,o)} \xB7 ${t.t("presence_sensor")}`,t.doc.presence.find(i=>i.person===o)?.sensor??null,void 0,Mu(n,o),i=>t.replace({...structuredClone(t.doc),presence:Su(t.doc.presence,o,i)}));return m`<details class="nf-section">
    <summary>${t.t("presence")}</summary>
    <div class="nf-form">${e.length>0?e.map(r):m`<p class="nf-sub nf-wide">${t.t("no_persons")}</p>`}</div>
    ${M(t.t("presence_hint"))}
  </details>`}var Ho=.05,S_=(t,e)=>t.length===e.length&&t.every((n,r)=>Math.abs(n[0]-e[r][0])<.001&&Math.abs(n[1]-e[r][1])<.001),qt=t=>new Map(t.map(e=>[e.id,e]));function M_(t,e,n,r){let o=e.name,[i,s]=[qt(t.rooms),qt(e.rooms)];for(let d of e.rooms){let f=i.get(d.id);f?(f.name!==d.name&&n.push({kind:"room_renamed",floor:o,name:d.name,detail:f.name}),S_(f.points,d.points)||n.push({kind:"room_reshaped",floor:o,name:d.name,detail:Math.round((we(d.points)-we(f.points))*10)/10})):n.push({kind:"room_added",floor:o,name:d.name})}for(let d of t.rooms)s.has(d.id)||n.push({kind:"room_removed",floor:o,name:d.name});let[a,l]=[qt(t.openings),qt(e.openings)];for(let d of e.openings)a.has(d.id)||n.push({kind:"opening_added",floor:o,name:d.type,detail:r(d.room_id)});for(let d of t.openings)l.has(d.id)||n.push({kind:"opening_removed",floor:o,name:d.type,detail:r(d.room_id)});let[c,u]=[qt(t.furniture),qt(e.furniture)];for(let d of e.furniture){let f=c.get(d.id);f?(Math.hypot(d.x-f.x,d.z-f.z)>Ho||Math.abs(d.rotation-f.rotation)>1||Math.abs(d.w-f.w)>Ho||Math.abs(d.d-f.d)>Ho)&&n.push({kind:"furniture_moved",floor:o,name:d.name||d.type}):n.push({kind:"furniture_added",floor:o,name:d.name||d.type})}for(let d of t.furniture)u.has(d.id)||n.push({kind:"furniture_removed",floor:o,name:d.name||d.type});let[h,p]=[new Map(t.placements.map(d=>[d.entity_id,d])),new Map(e.placements.map(d=>[d.entity_id,d]))];for(let d of e.placements){let f=h.get(d.entity_id);f?Math.hypot(d.x-f.x,d.z-f.z)>Ho&&n.push({kind:"device_moved",floor:o,name:d.entity_id}):n.push({kind:"device_added",floor:o,name:d.entity_id})}for(let d of t.placements)p.has(d.entity_id)||n.push({kind:"device_removed",floor:o,name:d.entity_id})}function Pu(t,e){let n=[],r=qt(t.floors),o=new Map([...t.floors,...e.floors].flatMap(a=>a.rooms.map(l=>[l.id,l.name]))),i=a=>o.get(a)??"";for(let a of e.floors){let l=r.get(a.id);l?M_(l,a,n,i):n.push({kind:"floor_added",floor:a.name,name:a.name})}let s=new Set(e.floors.map(a=>a.id));for(let a of t.floors)s.has(a.id)||n.push({kind:"floor_removed",floor:a.name,name:a.name});return n}var Yt=(t,e)=>t.getUint16(e,!0),zr=(t,e)=>t.getUint32(e,!0);function Tu(t){let e=new DataView(t.buffer,t.byteOffset,t.byteLength),n=-1;for(let a=t.length-22;a>=Math.max(0,t.length-65557);a--)if(zr(e,a)===101010256){n=a;break}if(n<0)throw new Error("not_zip");let r=Yt(e,n+10),o=zr(e,n+16),i=[],s=new TextDecoder;for(let a=0;a<r;a++){if(zr(e,o)!==33639248)throw new Error("not_zip");let l=Yt(e,o+10),c=zr(e,o+20),u=Yt(e,o+28),h=Yt(e,o+30),p=Yt(e,o+32),d=zr(e,o+42),f=s.decode(t.subarray(o+46,o+46+u)),_=d+30+Yt(e,d+26)+Yt(e,d+28);i.push({name:f,method:l,compressedSize:c,offset:_}),o+=46+u+h+p}return i}async function Iu(t,e){let n=t.subarray(e.offset,e.offset+e.compressedSize);if(e.method===0)return n;if(e.method!==8)throw new Error("zip_method");let r=new Blob([n.slice()]).stream().pipeThrough(new DecompressionStream("deflate-raw"));return new Uint8Array(await new Response(r).arrayBuffer())}var E_={amp:"&",lt:"<",gt:">",quot:'"',apos:"'"},R_=t=>t.replace(/&(#x?[0-9a-f]+|\w+);/gi,(e,n)=>n[0]==="#"?String.fromCodePoint(Number.parseInt(n.slice(n[1]==="x"?2:1),n[1]==="x"?16:10)):E_[n]??e);function A_(t){let e={};for(let n of t.matchAll(/([\w:.-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g))e[n[1]]=R_(n[2]??n[3]);return e}function F_(t){let e=[],n=null;for(let r of t.matchAll(/<(\/?)(level|room|point|wall|doorOrWindow|pieceOfFurniture)\b([^>]*?)(\/?)>/g)){let[,o,i,s,a]=r;if(o){i==="room"&&(n=null);continue}let l=A_(s);if(i==="point"){n&&n.points.push([Number(l.x)/100,Number(l.y)/100]);continue}let c={name:i,attrs:l,...i==="room"?{points:[]}:{}};e.push(c),i==="room"&&!a&&(n=c)}return e}var ne=(t,e,n)=>Number.isFinite(Number(t[e]))&&t[e]!==void 0?Number(t[e]):n,Se=t=>Math.round(t*1e3)/1e3;function Du(t,e,n){let[r,o]=[n[0]-e[0],n[1]-e[1]],i=Math.hypot(r,o)||1e-9,s=Math.max(0,Math.min(i,((t[0]-e[0])*r+(t[1]-e[1])*o)/i)),a=[e[0]+r*s/i,e[1]+o*s/i];return{dist:Math.hypot(t[0]-a[0],t[1]-a[1]),along:s,length:i}}function z_(t){let e=`${t.name??""} ${t.catalogId??""}`.toLowerCase();return/garage|sectional|rolltor/.test(e)?"garage":/door|tür|tuer|porte|puerta|deur|haustür/.test(e)&&!/window|fenster/.test(e)?"door":"window"}function P_(t,e){let n=t.length,r=t.map((o,i)=>{let s=t[(i+1)%n],[a,l]=[s[0]-o[0],s[1]-o[1]],c=Math.hypot(a,l)||1e-9,u=[a/c,l/c],h=[(o[0]+s[0])/2,(o[1]+s[1])/2],p=[0,0];for(let d of e){let[f,_]=[d.b[0]-d.a[0],d.b[1]-d.a[1]],y=Math.hypot(f,_)||1e-9;if(Math.abs((u[0]*_-u[1]*f)/y)>.05)continue;let b=(d.a[0]-h[0])*-u[1]+(d.a[1]-h[1])*u[0],v=((h[0]-d.a[0])*f+(h[1]-d.a[1])*_)/y;if(!(Math.abs(b)>d.thickness/2+.06||v<-.05||v>y+.05)){p=[-u[1]*b,u[0]*b];break}}return{p:[o[0]+p[0],o[1]+p[1]],dir:u}});return r.map((o,i)=>{let s=r[(i-1+n)%n],a=s.dir[0]*o.dir[1]-s.dir[1]*o.dir[0];if(Math.abs(a)<1e-6)return o.p;let l=((o.p[0]-s.p[0])*o.dir[1]-(o.p[1]-s.p[1])*o.dir[0])/a;return[s.p[0]+s.dir[0]*l,s.p[1]+s.dir[1]*l]})}function T_(t){let e=dn(),n={floors:0,rooms:0,openings:0,walls:0,furniture:0},r=t.filter(l=>l.name==="level"),o=r.length?r.map(l=>l.attrs.id??""):[""],i=t.filter(l=>l.name==="wall"),s=i.length?Math.max(...i.map(l=>ne(l.attrs,"height",250)))/100:2.5;return(r.length?[...r].sort((l,c)=>ne(l.attrs,"elevation",0)-ne(c.attrs,"elevation",0)||ne(l.attrs,"elevationIndex",0)-ne(c.attrs,"elevationIndex",0)):[{name:"level",attrs:{id:""}}]).forEach((l,c)=>{let u=l.attrs.id??"",h=y=>r.length?(y.attrs.level??o[0])===u:!0,p=tt(D("floor"),l.attrs.name||(c===0?"Erdgeschoss":`Etage ${c+1}`),Se(ne(l.attrs,"elevation",0)/100));p.height=Se(ne(l.attrs,"height",s*100)/100);let d=i.filter(h).map(y=>({a:[ne(y.attrs,"xStart",0)/100,ne(y.attrs,"yStart",0)/100],b:[ne(y.attrs,"xEnd",0)/100,ne(y.attrs,"yEnd",0)/100],thickness:ne(y.attrs,"thickness",10)/100})),f=t.filter(y=>y.name==="room"&&h(y)&&(y.points?.length??0)>=3).map((y,b)=>({id:D("room"),name:y.attrs.name||`Raum ${b+1}`,area_id:null,points:P_(y.points,d).map(([v,w])=>[Se(v),Se(w)]),floor_material:"wood",panel:[]}));p.rooms=f;for(let y of t.filter(b=>b.name==="doorOrWindow"&&h(b))){let b=[ne(y.attrs,"x",0)/100,ne(y.attrs,"y",0)/100],v=Math.max(.6,ne(y.attrs,"depth",30)/100+.3),w=null;for(let I of f)I.points.forEach((P,C)=>{let B=Du(b,P,I.points[(C+1)%I.points.length]);B.dist<=v&&(!w||B.dist<w.dist)&&(w={room:I,edge:C,...B})});if(!w)continue;let{room:x,edge:k,along:$,length:R}=w,F=z_(y.attrs),z=Math.min(R,Math.max(.3,ne(y.attrs,"width",90)/100));p.openings.push({id:D("op"),room_id:x.id,edge:k,offset:Se(Math.min(R-z/2,Math.max(z/2,$))),width:Se(z),type:F,sill:F==="window"?Se(ne(y.attrs,"elevation",90)/100):0,height:Se(ne(y.attrs,"height",F==="window"?130:205)/100),hinge:"left",leaves:z>1.4?2:1,swing:"in",cover:null,contact:null,contact2:null,tilt:null})}let _=[];for(let y of i.filter(h)){let b=[ne(y.attrs,"xStart",0)/100,ne(y.attrs,"yStart",0)/100],v=[ne(y.attrs,"xEnd",0)/100,ne(y.attrs,"yEnd",0)/100];if(Math.hypot(v[0]-b[0],v[1]-b[1])<.1)continue;let w=Math.max(.15,ne(y.attrs,"thickness",10)/100),x=z=>f.some(I=>I.points.some((P,C)=>Du(z,P,I.points[(C+1)%I.points.length]).dist<w)),k=Math.hypot(v[0]-b[0],v[1]-b[1]),$=Math.max(12,Math.ceil(k/.1)),R=z=>[b[0]+(v[0]-b[0])*z/$,b[1]+(v[1]-b[1])*z/$],F=Array.from({length:$+1},(z,I)=>!x(R(I)));for(let z=0;z<=$;){if(!F[z]){z++;continue}let I=z;for(;I+1<=$&&F[I+1];)I++;let[P,C]=[R(Math.max(0,z-1)),R(Math.min($,I+1))];Math.hypot(C[0]-P[0],C[1]-P[1])>=.3&&_.push({id:D("wall"),a:[Se(P[0]),Se(P[1])],b:[Se(C[0]),Se(C[1])],thickness:Se(ne(y.attrs,"thickness",10)/100),height:y.attrs.height?Se(ne(y.attrs,"height",250)/100):null}),z=I+1}}p.walls=_,n.rooms+=f.length,n.openings+=p.openings.length,n.walls+=_.length,(f.length||_.length)&&e.floors.push(p)}),n.floors=e.floors.length,n.furniture=t.filter(l=>l.name==="pieceOfFurniture").length,{building:Ze(e),report:n}}async function Ou(t){let e=Tu(t).find(o=>o.name==="Home.xml");if(!e)throw new Error("sh3d_no_xml");let n=new TextDecoder().decode(await Iu(t,e)),r=T_(F_(n));if(r.report.rooms===0&&r.report.walls===0)throw new Error("sh3d_empty");return r}function I_(t){let e=t.split(/\r?\n/),n=[];for(let r=0;r+1<e.length;r+=2){let o=Number(e[r].trim());Number.isFinite(o)&&n.push([o,e[r+1].trim()])}return n}function D_(t){let e=t.findIndex(([r,o])=>r===9&&o==="$INSUNITS"),n=e>=0?Number(t[e+1]?.[1]):NaN;return{1:.0254,2:.3048,4:.001,5:.01,6:1}[n]??null}function O_(t){let e=I_(t),n=D_(e),r=e.findIndex(([s,a],l)=>s===2&&a==="ENTITIES"&&e[l-1]?.[1]==="SECTION"),o=[];if(r<0)return{shapes:o,unit:n};let i=r+1;for(;i<e.length&&!(e[i][0]===0&&e[i][1]==="ENDSEC");){let[s,a]=e[i];if(s!==0){i++;continue}let l=i+1;for(;l<e.length&&e[l][0]!==0;)l++;let c=e.slice(i+1,l);if(a==="LINE"){let u=p=>Number(c.find(([d])=>d===p)?.[1]??NaN),h=[[u(10),u(20)],[u(11),u(21)]];h.every(([p,d])=>Number.isFinite(p)&&Number.isFinite(d))&&o.push({points:h,closed:!1})}else if(a==="LWPOLYLINE"){let u=c.filter(([f])=>f===10).map(([,f])=>Number(f)),h=c.filter(([f])=>f===20).map(([,f])=>Number(f)),p=Number(c.find(([f])=>f===70)?.[1]??0),d=u.map((f,_)=>[f,h[_]]).filter(([f,_])=>Number.isFinite(f)&&Number.isFinite(_));d.length>=2&&o.push({points:d,closed:(p&1)===1})}i=l}return{shapes:o,unit:n}}var Lu=t=>Math.round(t*1e3)/1e3;function Hu(t){let{shapes:e,unit:n}=O_(t);if(!e.length)throw new Error("dxf_empty");let r=e.flatMap(d=>d.points),o=Math.max(Math.max(...r.map(d=>d[0]))-Math.min(...r.map(d=>d[0])),Math.max(...r.map(d=>d[1]))-Math.min(...r.map(d=>d[1]))),i=n??(o>2e3?.001:o>200?.01:1),s=Math.min(...r.map(d=>d[0])),a=Math.max(...r.map(d=>d[1])),l=([d,f])=>[Lu((d-s)*i),Lu((a-f)*i)],c=tt(D("floor"),"Erdgeschoss",0),u=[],h=[];for(let d of e){let f=d.points.map(l);if(d.closed&&f.length>=3)u.push({id:D("room"),name:`Raum ${u.length+1}`,area_id:null,points:f,floor_material:"wood",panel:[]});else for(let _=0;_+1<f.length;_++)Math.hypot(f[_+1][0]-f[_][0],f[_+1][1]-f[_][1])>.05&&h.push({id:D("wall"),a:f[_],b:f[_+1]})}c.rooms=u,c.walls=h;let p=dn();return p.floors=[c],{building:Ze(p),report:{floors:1,rooms:u.length,openings:0,walls:h.length,furniture:0}}}var Pr=t=>typeof t=="object"&&t!==null&&!Array.isArray(t)&&"ref"in t;function L_(t){let e=0,n=()=>{for(;t[e]===" ";)e++;let o=t[e];if(o==="("){e++;let l=[];for(;e<t.length&&t[e]!==")";){for(l.push(n());t[e]===" ";)e++;t[e]===","&&e++}return e++,l}if(o==="'"){let l="";for(e++;e<t.length;)if(t[e]==="'"&&t[e+1]==="'")l+="'",e+=2;else if(t[e]==="'"){e++;break}else l+=t[e++];return H_(l)}if(o==="#"){let l=/^#(\d+)/.exec(t.slice(e));return e+=l[0].length,{ref:Number(l[1])}}if(o==="$"||o==="*")return e++,null;let i=/^[^,()]+/.exec(t.slice(e)),s=i?i[0].trim():"";if(e+=i?i[0].length:1,t[e]==="(")return n();let a=Number(s);return Number.isFinite(a)&&s!==""?a:s},r=[];for(;e<t.length;){for(r.push(n());t[e]===" ";)e++;if(t[e]===",")e++;else break}return r}function H_(t){return t.replace(/\\X2\\([0-9A-Fa-f]+)\\X0\\/g,(e,n)=>String.fromCharCode(...(n.match(/.{4}/g)??[]).map(r=>parseInt(r,16)))).replace(/\\S\\(.)/g,(e,n)=>String.fromCharCode(n.charCodeAt(0)+128))}function C_(t){let e=new Map,n=t.slice(Math.max(0,t.indexOf("DATA;")));for(let r of n.matchAll(/#(\d+)\s*=\s*([A-Z0-9_]+)\s*\(([\s\S]*?)\)\s*;(?=\s*(?:#|ENDSEC))/g))e.set(Number(r[1]),{type:r[2],args:L_(r[3])});return e}var Cu={x:0,y:0,z:0,c:1,s:0},Wu=(t,e)=>({x:t.x+t.c*e.x-t.s*e.y,y:t.y+t.s*e.x+t.c*e.y,z:t.z+e.z,c:t.c*e.c-t.s*e.s,s:t.s*e.c+t.c*e.s});function Bu(t){let e=C_(t);if(!e.size)throw new Error("ifc_empty");let n=k=>Pr(k)?e.get(k.ref):void 0,r=k=>typeof k=="number"?k:NaN,o=k=>(n(k)?.args[0]??[]).map($=>r($)),i=[...e.values()].find(k=>k.type==="IFCSIUNIT"&&k.args[1]===".LENGTHUNIT."),s=i?{".MILLI.":.001,".CENTI.":.01,".DECI.":.1}[String(i.args[2])]??1:1,a=k=>{let $=n(k);if(!$)return Cu;let[R=0,F=0,z=0]=o($.args[0]),I=n($.type==="IFCAXIS2PLACEMENT3D"?$.args[2]:$.args[1]),[P=1,C=0]=(I?.args[0]??[]).map(j=>r(j)),B=Math.hypot(P,C)||1;return{x:R||0,y:F||0,z:z||0,c:P/B,s:C/B}},l=(k,$=0)=>{let R=n(k);return!R||R.type!=="IFCLOCALPLACEMENT"||$>30?Cu:Wu(l(R.args[0],$+1),a(R.args[1]))},c=k=>{for(let $ of n(k)?.args[2]??[])for(let R of n($)?.args[3]??[]){let F=n(R);if(F?.type!=="IFCEXTRUDEDAREASOLID")continue;let z=n(F.args[0]),I=Wu(a(F.args[1]),a(z?.args[2])),P=[];if(z?.type==="IFCRECTANGLEPROFILEDEF"){let[C,B]=[r(z.args[3])/2,r(z.args[4])/2];P=[[-C,-B],[C,-B],[C,B],[-C,B]]}else if(z?.type==="IFCARBITRARYCLOSEDPROFILEDEF"){let C=n(z.args[2]);C?.type==="IFCPOLYLINE"&&(P=(C.args[0]??[]).map(B=>o(B)))}if(P=P.filter(C=>Number.isFinite(C[0])&&Number.isFinite(C[1])),P.length>3&&Math.hypot(P[0][0]-P[P.length-1][0],P[0][1]-P[P.length-1][1])<1e-6&&P.pop(),P.length>=3)return P.map(([C,B])=>[I.x+I.c*C-I.s*B,I.y+I.s*C+I.c*B])}return null},u=new Map;for(let[,k]of e){if(k.type==="IFCRELAGGREGATES"&&Pr(k.args[4]))for(let $ of k.args[5]??[])Pr($)&&u.set($.ref,k.args[4].ref);if(k.type==="IFCRELCONTAINEDINSPATIALSTRUCTURE"&&Pr(k.args[5]))for(let $ of k.args[4]??[])Pr($)&&u.set($.ref,k.args[5].ref)}let h=[...e].filter(([,k])=>k.type==="IFCBUILDINGSTOREY").map(([k,$])=>({id:k,name:String($.args[7]||$.args[2]||"")||null,elevation:r($.args[9])*s}));h.sort((k,$)=>(k.elevation||0)-($.elevation||0));let p=[];for(let[k,$]of e){if($.type!=="IFCSPACE")continue;let R=c($.args[6]);if(!R)continue;let F=l($.args[5]),z=R.map(([P,C])=>[(F.x+F.c*P-F.s*C)*s,(F.y+F.s*P+F.c*C)*s]),I=String($.args[7]||$.args[2]||"")||`Raum ${p.length+1}`;p.push({storey:u.get(k)??null,name:I,ring:z})}if(!p.length)throw new Error("ifc_empty");let d=p.flatMap(k=>k.ring),f=Math.min(...d.map(k=>k[0])),_=Math.max(...d.map(k=>k[1])),y=k=>Math.round(k*1e3)/1e3,b=[],v=new Map;if(h.filter(k=>p.some($=>$.storey===k.id)).forEach((k,$)=>{let R=tt(D("floor"),k.name??`Etage ${$+1}`,Number.isFinite(k.elevation)?y(k.elevation):$*2.8);b.push(R),v.set(k.id,R)}),p.some(k=>k.storey===null||!v.has(k.storey))){let k=tt(D("floor"),b.length?"Weitere R\xE4ume":"Erdgeschoss",b.length?b[b.length-1].elevation+2.8:0);b.push(k),v.set(null,k)}b.forEach((k,$)=>{let R=b[$+1];R&&R.elevation-k.elevation>1.8&&(k.height=y(R.elevation-k.elevation-.2))});for(let k of p)v.get(k.storey!==null&&v.has(k.storey)?k.storey:null).rooms.push({id:D("room"),name:k.name,area_id:null,points:k.ring.map(([R,F])=>[y(R-f),y(_-F)]),floor_material:"wood",panel:[]});let x=dn();return x.floors=b,{building:Ze(x),report:{floors:b.length,rooms:p.length,openings:0,walls:0,furniture:0}}}var Vu="nextfloor",W_="alarm_control_panel|automation|binary_sensor|button|calendar|camera|climate|conversation|cover|date|datetime|device_tracker|event|fan|group|humidifier|image|input_boolean|input_button|input_datetime|input_number|input_select|input_text|lawn_mower|light|lock|media_player|notify|number|person|remote|scene|script|select|sensor|siren|stt|sun|switch|text|time|timer|todo|tts|update|vacuum|valve|water_heater|weather|zone",Nu=new RegExp(`^(?:${W_})\\.[a-z0-9_]+$`),B_=/^[0-9a-f]{32}$/,N_=new Set(["area_id","ha_floor"]),V_=new Set(["sub_areas"]),K_=new Set(["tap","show_when","pictures","moods"]);function Ns(t){if(typeof t=="string")return Nu.test(t)||B_.test(t)?null:t;if(Array.isArray(t))return t.map(e=>Ns(e)).filter(e=>e!==null);if(t&&typeof t=="object"){let e={};for(let[n,r]of Object.entries(t))Nu.test(n)||K_.has(n)||(N_.has(n)||V_.has(n)?e[n]=null:e[n]=Ns(r));return e}return t}var G_=["wall_exterior","wall_interior","wall_paint_outside","wall_paint_inside","grid","north","roof","weather_effects","rain_warning","sun_patches","lock_plan","start_view","units","motion_markers_active","room_double_tap"];function Ku(t){let e=structuredClone(t),n={};for(let o of G_)e.settings?.[o]!==void 0&&(n[o]=e.settings[o]);let r=e.settings?.backdrop;r&&(r.color||r.dim!=null)&&(n.backdrop={color:r.color??null,dim:r.dim??null}),e.settings=n,e.energy={...e.energy,grid:null,solar:null,battery:null,battery_soc:null,tariff:null,consumption:null,gas:null,water:null},e.presence=[];for(let o of e.floors){o.background=null,o.placements=[],o.power_entity=null,o.ha_floor=null;for(let i of o.rooms)Object.assign(i,{area_id:null,sub_areas:null,panel:[],hidden:[],no_state:[]});o.furniture.forEach(i=>{Object.assign(i,{entity:null,power:null}),delete i.effect_animations,i.picture&&!(i.picture.startsWith("image:")||i.picture.startsWith("https://"))&&(i.picture=null)}),o.openings.forEach(i=>Object.assign(i,{cover:null,contact:null,tilt:null}))}return Ns(e)}function Gu(t,e){return{format:Vu,version:1,exported_at:new Date().toISOString(),building:e?Ku(t):structuredClone(t)}}var U_=t=>!!t&&(t.version===1||t.version===void 0)&&Array.isArray(t.floors)&&t.floors.every(e=>!!e&&typeof e=="object"),j_="https://therealmrbk.github.io/NextFloor/preview/?shared&noshowcase";function Uu(t,e,n,r,o=j_){let i=new Set(t.floors.flatMap(c=>c.furniture.map(u=>u.type)).filter(c=>c.startsWith("pack:")).map(c=>c.split(":")[1])),s={building:Ku(t),packs:e.filter(c=>!c.builtin&&i.has(c.id))},a=JSON.stringify(s).replace(/</g,"\\u003c"),l=c=>c.replace(/[&<>"]/g,u=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[u]);return`<!doctype html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${l(n)}</title>
<style>html,body{margin:0;height:100%;background:#111;color:#ddd;font-family:system-ui,sans-serif}iframe{border:0;width:100%;height:100%;display:block}noscript p{padding:2em}</style></head>
<body><iframe id="nf" src="${l(o)}" allow="fullscreen" title="${l(n)}"></iframe>
<noscript><p>${l(r)}</p></noscript>
<script id="nf-plan" type="application/json">${a}<\/script>
<script>
const data = JSON.parse(document.getElementById("nf-plan").textContent);
const frame = document.getElementById("nf");
addEventListener("message", (e) => {
  if (e.source === frame.contentWindow && e.data && e.data.type === "nextfloor-share-ready") frame.contentWindow.postMessage({ type: "nextfloor-share", building: data.building, packs: data.packs }, "*");
});
<\/script></body></html>
`}function ju(t){let e;try{e=JSON.parse(t)}catch{throw new Error("not_json")}let n=e,r=n?.format===Vu?n.building:e;if(!U_(r))throw new Error("not_plan");return r.floors.forEach(o=>o.background=null),Ze(r)}var Z_=t=>!/^https?:\/\//.test(t)&&!t.startsWith("camera:");function Zu(t){let e=new Set;for(let n of t.floors){n.background?.image_id&&e.add(n.background.image_id);let r=n.furniture.flatMap(o=>o.pictures??[]);for(let{image:o}of r)o&&Z_(o)&&e.add(o)}return[...e]}function qu(t,e,n="application/json"){let r=document.createElement("a"),o=URL.createObjectURL(new Blob([e],{type:n}));Object.assign(r,{href:o,download:t}),r.click(),setTimeout(()=>URL.revokeObjectURL(o),1e3)}var q_={api:{listHistory:$l,restoreSnapshot:Rl,takeSnapshot:Sl,getSnapshot:Ml,deleteSnapshot:El,fetchBackup:Fl,restoreBackup:zl,fetchImage:ro,storeImage:ln},alert:t=>alert(t),confirm:t=>confirm(t),prompt:t=>prompt(t),download:qu,today:()=>new Date().toISOString().slice(0,10)},Y_=t=>String(t?.message??t),Co=class{host;deps;history=null;busy=!1;compare=null;constructor(e,n=q_){this.host=e,this.deps=n}async loadHistory(){let{hass:e}=this.host;e&&(this.history=await this.deps.api.listHistory(e).catch(()=>[]),this.host.refresh())}timeOf(e){return new Date(e.saved_at*1e3).toLocaleString(this.host.hass?.language,{dateStyle:"short",timeStyle:"short"})}async restorePoint(e){let{hass:n,t:r}=this.host;!n||!this.deps.confirm(r("backup_restore_confirm",{time:this.timeOf(e)}))||(await this.deps.api.restoreSnapshot(n,e.id),this.host.say(r("backup_restored")),await this.loadHistory())}async saveVersion(){let{hass:e,t:n}=this.host,r=e?this.deps.prompt?.(n("version_name_prompt"))?.trim():null;!e||!r||(await this.deps.api.takeSnapshot(e,r.slice(0,60)),this.host.say(n("version_saved",{name:r})),await this.loadHistory())}async compareWith(e){let{hass:n}=this.host,r=this.deps.api.getSnapshot;if(!n||!r)return;if(this.compare?.snapshot.id===e.id)return this.compare=null,this.host.refresh();let o=Ze(await r(n,e.id));this.compare={snapshot:e,entries:Pu(o,this.host.doc)},this.host.refresh()}async deleteVersion(e){let{hass:n,t:r}=this.host,o=this.deps.api.deleteSnapshot;!n||!o||!this.deps.confirm(r("version_delete_confirm",{name:e.name??this.timeOf(e)}))||(await o(n,e.id),this.compare?.snapshot.id===e.id&&(this.compare=null),await this.loadHistory())}exportShareView(){let e=this.host.t,n=Uu(this.host.doc,rr(),e("share_view_title"),e("share_view_needs_js"));this.deps.download(`nextfloor-${e("share_view_file")}-${this.deps.today()}.html`,n,"text/html"),this.host.say(e("share_view_done"))}exportPlan(e){let n=this.host.t(e?"export_name_template":"export_name_backup");this.deps.download(`nextfloor-${n}-${this.deps.today()}.json`,JSON.stringify(Gu(this.host.doc,e),null,2))}async importPlan(e){let{hass:n,t:r}=this.host;if(!e||!n)return;let o,i=r("backup_import_confirm");try{if(/\.sh3d$/i.test(e.name)){let s=await Ou(new Uint8Array(await e.arrayBuffer()));o=s.building,i=`${r("import_sh3d_found",{...s.report})}

${i}`}else if(/\.ifc$/i.test(e.name)){let s=Bu(await e.text());o=s.building,i=`${r("import_ifc_found",{floors:s.report.floors,rooms:s.report.rooms})}

${i}`}else if(/\.dxf$/i.test(e.name)){let s=Hu(await e.text());o=s.building,i=`${r("import_dxf_found",{rooms:s.report.rooms,walls:s.report.walls})}

${i}`}else o=ju(await e.text())}catch(s){let a=s.message,l={not_json:"import_error_not_json",not_plan:"import_error_not_plan",not_zip:"import_error_sh3d",sh3d_no_xml:"import_error_sh3d",sh3d_empty:"import_error_sh3d_empty",dxf_empty:"import_error_dxf_empty",ifc_empty:"import_error_ifc_empty"};this.deps.alert(l[a]?r(l[a]):r("backup_import_error",{error:a}));return}this.deps.confirm(i)&&(await this.deps.api.takeSnapshot(n).catch(()=>{}),this.host.adopt(o),this.host.say(r("backup_imported")))}async exportFull(){let{hass:e,t:n}=this.host;if(e){this.busy=!0,this.host.refresh();try{let r=await this.deps.api.fetchBackup(e),o={};for(let i of Zu(r.building))await this.deps.api.fetchImage(e,i).then(s=>o[i]=s,()=>{});this.deps.download(`nextfloor-${n("export_name_full")}-${this.deps.today()}.json`,JSON.stringify({...r,exported_at:new Date().toISOString(),images:o}))}catch(r){this.deps.alert(n("backup_import_error",{error:Y_(r)}))}finally{this.busy=!1,this.host.refresh()}}}async importFull(e){let{hass:n,t:r}=this.host;if(!e||!n)return;let o;try{o=JSON.parse(await e.text())}catch{this.deps.alert(r("import_error_not_json"));return}if(o?.format!=="nextfloor-backup"||!o.building){this.deps.alert(r("backup_full_not_backup"));return}if(this.deps.confirm(r("backup_full_confirm"))){this.busy=!0,this.host.refresh();try{let i=await this.deps.api.restoreBackup(n,o.building,o.packs??[]),s=0;for(let[l,c]of Object.entries(o.images??{}))await this.deps.api.storeImage(n,l,c).then(()=>s++,()=>{});this.host.adopt(Ze(i.building)),this.host.packsChanged();let a=i.skipped.length>0?` ${r("backup_full_skipped",{packs:i.skipped.map(l=>l.id).join(", ")})}`:"";this.host.say(r("backup_full_restored",{packs:i.packs,pictures:s})+a)}catch(i){let{code:s,message:a}=i??{};this.deps.alert(r("backup_import_error",{error:a??s??String(i)}))}finally{this.busy=!1,this.host.refresh()}}}};function Ne(t,e){if(!ut(e))return xe(t,`furn_${e}`);let n=U(e);return n?Ve(n,e,t?.language??navigator.language):xe(t,"pack_missing_item")}function Ve(t,e,n){return t.name[n.split("-")[0]]??Po(n,e)??Nl(t,n)}function Ie(t,e){return Po(e,`packname:${t.id}`)??Vl(t,e)}function Yu(t,e){return t.name[e.split("-")[0]]??Po(e,`color:${t.id}`)??t.name.en??Object.values(t.name)[0]}var Xu=(t,e,n="application/json,.json")=>m`<label class="nf-btn nf-upload"
  >${t}<input
    type="file"
    accept=${n}
    @change=${r=>{let o=r.target,i=o.files?.[0];o.value="",e(i)}}
  />
</label>`,X_={added:"\uFF0B",removed:"\u2212",renamed:"\u270E",reshaped:"\u2922",moved:"\u2194"};function Q_(t,e){let n=t.t;if(!e.length)return m`<p class="nf-sub nf-diff">${n("version_same")}</p>`;let r=i=>i.kind.startsWith("furniture")?Ne(t.hass,i.name)||i.name:i.kind.startsWith("device")?String(t.hass?.states[i.name]?.attributes.friendly_name??i.name):i.kind.startsWith("opening")?n(i.name==="door"?"opening_door":i.name==="garage"?"opening_garage":"opening_window"):i.name,o=[...new Set(e.map(i=>i.floor))];return m`<div class="nf-diff">
    ${M(n("version_diff_n",{n:e.length}))}
    ${o.map(i=>m`<h4 class="nf-check-floor">${i}</h4>
        <ul class="nf-diff-list">
          ${e.filter(s=>s.floor===i).map(s=>{let a=s.kind.slice(s.kind.indexOf("_")+1),l=typeof s.detail=="number"?`${s.detail>0?"+":""}${G(t.hass,s.detail,1)}`:s.detail??"";return m`<li><span aria-hidden="true">${X_[a]??"\u2022"}</span> ${n(`diff_${s.kind}`,{name:r(s),detail:l})}</li>`})}
        </ul>`)}
  </div>`}function Qu(t,e){let n=t.t,r=e.history,o=r===null?M(n("loading")):r.length===0?M(n("backup_none")):m`<div class="nf-room-list">
            ${r.map(i=>m`<div class="nf-row nf-dev-row">
                  <span>${i.name?m`<b>📌 ${i.name}</b> · `:g}${e.timeOf(i)} <span class="nf-muted">· ${n("backup_summary",{rooms:i.rooms,furniture:i.furniture})}</span></span>
                  <span class="nf-version-actions">
                    <button class="nf-link" aria-pressed=${e.compare?.snapshot.id===i.id} @click=${()=>{e.compareWith(i)}}>${n("version_compare")}</button>
                    <button class="nf-link" @click=${()=>e.restorePoint(i)}>${n("backup_restore")}</button>
                    ${i.name?m`<button class="nf-link" title=${n("delete")} @click=${()=>{e.deleteVersion(i)}}>✕</button>`:g}
                  </span>
                </div>
                ${e.compare?.snapshot.id===i.id?Q_(t,e.compare.entries):g}`)}
          </div>`;return m`<details class="nf-section" @toggle=${i=>i.target.open&&void e.loadHistory()}>
    <summary>${n("backup")}</summary>
    <h4 class="nf-lib-head">${n("backup_history")}</h4>
    ${X(m`<button class="nf-btn" title=${n("version_save_hint")} @click=${()=>{e.saveVersion()}}>📌 ${n("version_save")}</button>`)}
    ${o}
    <h4 class="nf-lib-head">${n("backup_file")}</h4>
    ${X(m`<button class="nf-btn" @click=${()=>e.exportPlan(!1)}>${n("backup_export")}</button>`,m`<button class="nf-btn" title=${n("backup_export_share_hint")} @click=${()=>e.exportPlan(!0)}>${n("backup_export_share")}</button>`,m`<button class="nf-btn" title=${n("share_view_hint")} @click=${()=>e.exportShareView()}>🔗 ${n("share_view")}</button>`,Xu(n("backup_import"),i=>{e.importPlan(i)},"application/json,.json,.sh3d,.dxf,.ifc"))}
    ${M(n("backup_hint"))} ${M(n("import_other_hint"))}
    <h4 class="nf-lib-head">${n("backup_full")}</h4>
    ${X(m`<button class="nf-btn" ?disabled=${e.busy} @click=${()=>e.exportFull()}>${e.busy?"\u2026":n("backup_full_export")}</button>`,Xu(n("backup_full_import"),i=>{e.importFull(i)}))}
    ${M(n("backup_full_hint"))}
  </details>`}function Ju(t,e){return e&&t.states[e]?e:Object.keys(t.states).filter(n=>n.startsWith("weather.")).sort()[0]??null}var Xt=(t,e,n)=>Math.min(n,Math.max(e,t)),J_=t=>(Math.round(t)%360+360)%360,Vs=(t,e)=>J_(t+e);function ed(t,e,n){return n?[...new Set([...t,e])]:t.filter(r=>r!==e)}function td(t,e,n){let r=t.t,o=s=>()=>n(Vs(e,s)),i=E`<svg class="nf-compass-dial" viewBox="-50 -50 100 100" role="img" aria-label=${r("compass_title")}>
    <circle r="46" class="nf-compass-ring" />
    <path d="M0 -50l3 6h-6z" class="nf-compass-up" />
    <g transform="rotate(${e})">
      <path d="M0 -38L8 0H-8z" class="nf-compass-n" />
      <path d="M0 38L8 0H-8z" class="nf-compass-s" />
      <text y="-27" class="nf-compass-label">${r("compass_n_short")}</text>
      <text y="36" class="nf-compass-label nf-compass-label-s">${r("compass_s_short")}</text>
    </g>
  </svg>`;return m`<div class="nf-compass nf-wide">
    ${i}
    <div class="nf-compass-side">
      <b>${r("compass_title")}</b>
      ${A(t,r("north"),e,s=>n(Vs(s,0)),1)}
      <div class="nf-actions">
        <button class="nf-btn" ?disabled=${!t.admin} title=${r("compass_swap_hint")} @click=${o(180)}>⇅ ${r("compass_swap")}</button>
        <button class="nf-btn" ?disabled=${!t.admin} @click=${o(-90)}>↺ 90°</button>
        <button class="nf-btn" ?disabled=${!t.admin} @click=${o(90)}>↻ 90°</button>
      </div>
      <span class="nf-sub">${r("compass_hint")}</span>
    </div>
  </div>`}var eb="https://tile.openstreetmap.org/{z}/{x}/{y}.png";var tb=40075016686e-3,Ks=Math.PI/180,Tr=18,Ir=.5,nb=160;function rb(t,e,n){let r=2**n,o=(e+180)/360*r,i=(1-Math.log(Math.tan(t*Ks)+1/Math.cos(t*Ks))/Math.PI)/2*r;return[o,i]}var ob=(t,e)=>tb*Math.cos(t*Ks)/2**e;function nd(t,e,n,r=nb){let[o,i]=rb(t,e,n),s=ob(t,n),a=r/s,l=2**n-1,c=[];for(let u=Math.floor(i-a);u<=Math.floor(i+a);u++)for(let h=Math.floor(o-a);h<=Math.floor(o+a);h++){if(u<0||u>l)continue;let p=(h%(l+1)+l+1)%(l+1);c.push({x:p,y:u,z:n,east:(h-o)*s,north:-(u-i)*s,size:s})}return c}function rd(t,e){return t.replace("{z}",String(e.z)).replace("{x}",String(e.x)).replace("{y}",String(e.y)).replace("{s}","abc"[(e.x+e.y)%3])}var od=t=>t.url&&t.url.startsWith("https://")?t.url:eb;var Wo=t=>!!t&&t.on===!0&&Number.isFinite(t.lat)&&Number.isFinite(t.lon),id=t=>({x:t.x??0,z:t.z??0,opacity:t.opacity??Ir,zoom:t.zoom??Tr});function ib(t){let e=[],n=[];for(let o of t.floors){for(let i of o.rooms)for(let[s,a]of i.points)e.push(s),n.push(a);for(let i of o.outdoor??[])for(let[s,a]of i.points)e.push(s),n.push(a)}if(!e.length)return[0,0];let r=o=>Math.round((Math.min(...o)+Math.max(...o))/2*100)/100;return[r(e),r(n)]}function sd(t,e){let[n,r]=ib(t);return{on:!0,lat:e?.lat??0,lon:e?.lon??0,x:n,z:r,opacity:Ir,zoom:Tr,url:null}}function ad(t,e,n){let r=o=>Math.round(o*100)/100;return{...t,x:r((t.x??0)+e),z:r((t.z??0)+n)}}function ld(t){let e=t.trim();return e===""?null:/^https:\/\/\S+$/.test(e)&&["{z}","{x}","{y}"].every(n=>e.includes(n))?e:void 0}var sb=["15","16","17","18","19"],ab=["1","5","20"],Bo="5";function cd(t,e,n){let r=t.t,o=e.settings.map??null,i=t.hass?.config,s=Wo(o),a=u=>{if(!u)return n(o?{...o,on:!1}:null);n(o?{...o,on:!0}:sd(e,{lat:i?.latitude,lon:i?.longitude}))},l=u=>o&&n({...o,...u}),c=(u,h)=>()=>o&&n(ad(o,u*Number(Bo),h*Number(Bo)));return m`<div class="nf-map-settings nf-wide">
    ${L(t,r("map_on"),s,a,{title:r("map_hint")})}
    ${o&&o.on?m`<div class="nf-form">
          ${A(t,r("map_lat"),o.lat,u=>l({lat:Math.max(-85,Math.min(85,u))}),1e-4)}
          ${A(t,r("map_lon"),o.lon,u=>l({lon:Math.max(-180,Math.min(180,u))}),1e-4)}
          ${i?.latitude!==void 0&&i.longitude!==void 0?m`<button class="nf-btn nf-wide" ?disabled=${!t.admin} @click=${()=>l({lat:i.latitude,lon:i.longitude})}>${r("map_use_ha")}</button>`:g}
          ${A(t,r("map_opacity"),Math.round((o.opacity??Ir)*100),u=>l({opacity:Math.max(5,Math.min(100,u))/100}),5,5)}
          ${O(t,r("map_zoom"),String(o.zoom??Tr),sb.map(u=>[u,u==="15"?`${u} \xB7 ${r("map_zoom_coarse")}`:u==="19"?`${u} \xB7 ${r("map_zoom_fine")}`:u]),u=>l({zoom:Number(u)}))}
          <div class="nf-wide nf-map-move">
            <span class="nf-sub">${r("map_move")}</span>
            <div class="nf-map-arrows">
              <button class="nf-btn" ?disabled=${!t.admin} title=${r("map_move")} @click=${c(0,-1)}>▲</button>
              <button class="nf-btn" ?disabled=${!t.admin} title=${r("map_move")} @click=${c(-1,0)}>◀</button>
              <button class="nf-btn" ?disabled=${!t.admin} title=${r("map_move")} @click=${c(1,0)}>▶</button>
              <button class="nf-btn" ?disabled=${!t.admin} title=${r("map_move")} @click=${c(0,1)}>▼</button>
            </div>
            ${O(t,r("map_step"),Bo,ab.map(u=>[u,`${u} m`]),u=>Bo=u,{wide:!1})}
          </div>
          ${q(t,r("map_url"),o.url??"",u=>{let h=ld(u);h!==void 0&&l({url:h})},{wide:!0,placeholder:"https://\u2026/{z}/{x}/{y}.png",maxlength:300})}
          ${M(r("map_hint"),"nf-wide")}
        </div>`:g}
  </div>`}var lb=["none","flat","gable","custom"];function cb(t,e,n){let r=t.t,o=!!e,i=s=>n({color:null,image:null,dim:.35,...e??{},...s});return m`<div class="nf-sub nf-wide">${r("backdrop")}</div>
    ${L(t,r("backdrop"),o,s=>n(s?{color:"#101828",image:null,dim:.35}:null))}
    ${o?m`<label class="nf-field"
            >${r("backdrop_color")}
            <input type="color" .value=${e?.color??"#101828"} ?disabled=${!t.admin} @change=${s=>i({color:s.target.value})}
          /></label>
          ${A(t,r("backdrop_dim"),Math.round((e?.dim??.35)*100),s=>i({dim:Xt(s,0,80)/100}),5,0)}
          ${q(t,r("backdrop_image"),e?.image??"",s=>i({image:s||null}),{wide:!0,placeholder:"/local/hintergrund.jpg"})}
          ${M(r("backdrop_hint"),"nf-wide")}`:g}`}function ub(t,e,n){let r=t.t,o=W(t.hass,i=>!e.includes(i)&&/^(sensor|binary_sensor|alarm_control_panel|weather|input_|counter|lock|climate|person|sun)\b/.test(i));return m`<div class="nf-sub nf-wide">${r("status_entities")}</div>
    ${e.length?m`<div class="nf-chips nf-wide">
          ${e.map(i=>m`<span class="nf-chip">${N(t.hass,i)}
              ${t.admin?m`<button class="nf-chip-x" title=${r("delete")} aria-label=${`${r("delete")}: ${N(t.hass,i)}`} @click=${()=>n(e.filter(s=>s!==i))}>×</button>`:g}</span
            >`)}
        </div>`:g}
    ${e.length<12?T(t,r("status_add"),null,void 0,o,i=>i&&i!=="none"&&n([...e,i])):g}
    ${M(r("status_entities_hint"),"nf-wide")}`}function ud(t,e){let n=t.t,r=t.doc.settings,o=c=>t.replace({...structuredClone(t.doc),settings:{...structuredClone(t.doc.settings),...c}}),i=c=>o({roof:{...r.roof,...c}}),s=lb.map(c=>[c,n(`roof_${c}`)]),a=r.weather_effects??Jl,l=r.roof.type==="gable";return m`<details class="nf-section">
    <summary>${n("settings")}</summary>
    <div class="nf-form">
      ${A(t,n("wall_exterior"),r.wall_exterior,c=>o({wall_exterior:Xt(c,.02,1)}),.01,.02)}
      ${A(t,n("wall_interior"),r.wall_interior,c=>o({wall_interior:Xt(c,.02,1)}),.01,.02)}
      ${mt(t,n("wall_paint_outside"),r.wall_paint_outside,cc,c=>o({wall_paint_outside:c}))}
      ${mt(t,n("wall_paint_inside"),r.wall_paint_inside,uo,c=>o({wall_paint_inside:c}))}
      ${M(n("wall_paint_hint"),"nf-wide")}
      ${A(t,n("grid"),r.grid,c=>o({grid:Xt(c,.01,1)}),.01,.01)}
      ${O(t,n("units"),r.units==="imperial"?"imperial":"metric",[["metric",n("units_metric")],["imperial",n("units_imperial")]],c=>o({units:c==="imperial"?"imperial":null}),{title:n("units_hint")})}
      ${td(t,r.north,c=>o({north:c}))}
      ${cd(t,t.doc,c=>o({map:c}))}
      ${O(t,n("roof"),r.roof.type,s,c=>c==="custom"?e.useRoofSections():i({type:c}),{wide:!0})}
      ${l?O(t,n("roof_ridge"),r.roof.ridge==="short"?"short":"long",[["long",n("roof_ridge_long")],["short",n("roof_ridge_short")]],c=>i({ridge:c==="short"?"short":null}),{wide:!0}):g}
      ${l?A(t,n("roof_pitch"),r.roof.pitch,c=>i({pitch:Xt(c,5,60)}),1,5):g}
      ${r.roof.type!=="none"?A(t,n("roof_overhang"),r.roof.overhang,c=>i({overhang:Xt(c,0,2)}),.05,0):g}
      ${t.hass?T(t,n("weather_entity"),r.weather_entity??null,Ju(t.hass,null),W(t.hass,c=>c.startsWith("weather.")),c=>o({weather_entity:c})):g}
      <div class="nf-sub nf-wide">${n("weather_effects")}</div>
      ${Ql.map(c=>L(t,n(`weather_effect_${c}`),a.includes(c),u=>o({weather_effects:ed(a,c,u)}),{wide:!1}))}
      ${L(t,n("rain_warning"),r.rain_warning!==!1,c=>o({rain_warning:c}))}
      ${t.hass&&r.rain_warning!==!1?T(t,n("rain_sensor"),r.rain_sensor??null,void 0,W(t.hass,c=>/^(binary_sensor|sensor)\./.test(c)),c=>o({rain_sensor:c==="none"?null:c})):g}
      ${t.hass?T(t,n("outage_sensor"),r.outage_sensor??null,void 0,W(t.hass,c=>/^(binary_sensor|sensor)\./.test(c)),c=>o({outage_sensor:c==="none"?null:c})):g}
      ${M(n("outage_hint"),"nf-wide")}
      ${L(t,n("contact_warning"),!!r.contact_warning,c=>o({contact_warning:c||void 0}),{title:n("contact_warning_hint")})}
      ${L(t,n("night_lock_warning"),!!r.night_lock_warning,c=>o({night_lock_warning:c||void 0}),{title:n("night_lock_warning_hint")})}
      ${O(t,n("room_double_tap"),r.room_double_tap??"area",[["area",n("room_double_tap_area")],["plan",n("room_double_tap_plan")],["off",n("room_double_tap_off")]],c=>o({room_double_tap:c==="plan"||c==="off"?c:null}),{title:n("room_double_tap_hint")})}
      ${L(t,n("motion_markers_active"),!!r.motion_markers_active,c=>o({motion_markers_active:c||void 0}),{title:n("motion_markers_active_hint")})}
      ${t.hass?ub(t,r.status_entities??[],c=>o({status_entities:c.length?c:null})):g}
      ${t.hass?T(t,n("announce_tts"),r.announce_tts??null,void 0,W(t.hass,c=>c.startsWith("tts.")),c=>o({announce_tts:c==="none"?null:c})):g}
      <label class="nf-field nf-wide"
        >${n("announce_phrases")}
        <textarea
          rows="4"
          ?disabled=${!t.admin}
          .value=${(r.announce_phrases??[]).join(`
`)}
          placeholder=${[1,2,3,4,5].map(c=>n(`announce_phrase_${c}`)).join(`
`)}
          @change=${c=>{let u=c.target.value.split(`
`).map(h=>h.trim().slice(0,200)).filter(Boolean).slice(0,30);o({announce_phrases:u.length?u:null})}}
        ></textarea>
      </label>
      ${M(n("announce_phrases_hint"),"nf-wide")}
      ${L(t,n("sun_patches"),r.sun_patches!==!1,c=>o({sun_patches:c}),{title:n("sun_patches_hint")})}
      ${cb(t,r.backdrop??null,c=>o({backdrop:c}))}
    </div>
    ${M(`${n("north_hint")} ${n("weather_entity_hint")}`)}
  </details>`}var Dr=t=>t&&t!=="none"?t:null,Or=(t,e)=>{e&&!t.includes(e)&&t.push(e)},Gs=t=>new Map(t.floors.flatMap(e=>e.furniture.filter(n=>n.type==="meter").map(n=>[n.id,n])));function Qt(t,e){if(!t.energy.advanced||e.type!=="meter"||!e.parent_meter)return null;let n=Gs(t),r=new Set([e.id]);for(let o=n.get(e.parent_meter);o;o=n.get(o.parent_meter??"")){if(r.has(o.id))return null;r.add(o.id)}return n.has(e.parent_meter)?e.parent_meter:null}function zn(t){return new Set([...Gs(t).values()].filter(e=>Qt(t,e)).map(e=>e.id))}function Lr(t,e){return!t.energy.advanced||!e.parent_meter?null:zn(t).has(e.parent_meter)?e.parent_meter:null}function dd(t,e,n){if(n.type!=="meter"||n.id===e.id)return!1;let r=Gs(t),o=new Set;for(let i=n;i&&!o.has(i.id);i=r.get(i.parent_meter??"")){if(i.id===e.id)return!1;o.add(i.id)}return!0}function Vo(t,e=n=>Dr(n.power)){let n={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let r of t.floors.flatMap(o=>o.furniture)){let o=e(r),i=r.type==="meter"?Qt(t,r):null;if(i)(n.subMeters??=[]).push({id:r.id,parent:i,power:o,invert:!!r.meter_invert,floors:r.meter_floors??[],solar:[],batteries:[]});else if(r.type==="meter")n.grid??=o,n.gridExport??=Dr(r.export);else if(r.type==="inverter")Or(n.solar,o);else if(r.type==="home_battery"){let s=Dr(r.charge);Or(n.battery,o),Or(n.charge,s),Or(n.soc,Dr(r.soc)),(o||s)&&n.batteries.push({power:o,charge:s})}}for(let r of n.subMeters?t.floors.flatMap(o=>o.furniture):[]){let o=r.type==="inverter"||r.type==="home_battery"?n.subMeters?.find(a=>a.id===Lr(t,r)):void 0,i=o?e(r):null;o&&r.type==="inverter"&&Or(o.solar,i);let s=Dr(r.charge);o&&r.type==="home_battery"&&(i||s)&&o.batteries.push({power:i,charge:s})}return n}function db(t){for(let e of t.floors){let n=e.furniture.find(r=>r.type==="meter"&&!Qt(t,r));if(n)return{floor_id:e.id,x:n.x,z:n.z}}return t.energy.meter}var hb=/(phase|_l[123]\b|_[abc]$|today|daily|heute)/,pb=/_?(energy|energie|total|today|daily|kwh|import|export|consumption|production)/g;function No(t,e,n="power"){let r=e?t.entities?.[e]?.device_id:void 0;if(!e||!r)return null;let o=Object.keys(t.states).filter(a=>a.startsWith("sensor.")&&t.entities?.[a]?.device_id===r&&t.states[a]?.attributes.device_class===n);if(o.length<=1)return o[0]??null;let i=o.filter(a=>!hb.test(a)),s=e.replace(/^sensor\./,"").replace(pb,"");return i.find(a=>s&&a.includes(s))??i[0]??o[0]}function hd(t,e){let n={},r=(o,i)=>{i&&!n[o]&&(n[o]=i)};for(let o of e.energy_sources??[])if(o.type==="grid")r("grid",No(t,o.flow_from?.[0]?.stat_energy_from??o.flow_to?.[0]?.stat_energy_to));else if(o.type==="solar")r("solar",No(t,o.stat_energy_from));else if(o.type==="battery"){let i=o.stat_energy_from??o.stat_energy_to;r("battery",No(t,i)),r("battery_soc",No(t,i,"battery"))}return n}function Me(t,e=!1){let n=t?Number(t.state):NaN;if(!Number.isFinite(n))return null;let r={kW:1e3,MW:1e6}[String(t.attributes.unit_of_measurement??"W")]??1;return e?-n*r:n*r}var fb=(t,e)=>e.startsWith("sensor.")&&t.states[e]?.attributes.device_class==="power";function pd(t,e){if(fb(t,e))return e;let n=t.entities?.[e]?.device_id;if(!n)return null;let r=ns(t,n),o=r?$t(t,e):null,i=vo(t,n).filter(s=>s!==e);return(r?i.find(s=>o!==null&&$t(t,s)===o):i[0])??null}var fd=t=>{let e=t.filter(n=>n!==null);return e.length?e.reduce((n,r)=>n+r,0):null};function mb(t,e,n){let r=e.grid??n.grid,o=r?Me(t.states[r],e.grid_invert):null;if(!e.grid&&n.gridExport){let i=Math.max(0,Me(t.states[n.gridExport])??0);return Math.max(0,o??0)-i}return o}function gb(t,e,n){return e.solar?Me(t.states[e.solar]):n.solar.length?fd(n.solar.map(r=>Me(t.states[r]))):null}function Us(t,e,n){return e.charge?(e.power?Math.max(0,Me(t.states[e.power])??0):0)-Math.max(0,Me(t.states[e.charge])??0):e.power?Me(t.states[e.power],n):null}function _b(t,e,n){return e.battery?Me(t.states[e.battery],e.battery_invert):fd(n.batteries.map(r=>Us(t,r,e.battery_invert)))}function js(t,e,n,r=Vo(e)){let o=e.energy,i=mb(t,o,r),s=gb(t,o,r),a=_b(t,o,r),l=(o.battery_soc?[o.battery_soc]:r.soc).map(f=>Number(t.states[f]?.state)).filter(Number.isFinite),c=l.length?l.reduce((f,_)=>f+_,0)/l.length:null,u=o.tariff?t.states[o.tariff]:void 0,h=Number(u?.state),p=o.consumption?Me(t.states[o.consumption]):null;p===null&&(i!==null||s!==null||a!==null)&&(p=(i??0)+Math.max(0,s??0)+(a??0)),p===null&&n.length>0&&(p=n.reduce((f,_)=>f+_.power,0));let d={grid:i,solar:s===null?null:Math.max(0,s),battery:a,soc:c,tariff:u&&Number.isFinite(h)?{value:h,unit:String(u.attributes.unit_of_measurement??"")}:null,consumption:p===null?null:Math.max(0,p)};return r.subMeters?{...d,...bb(t,r,d.consumption,o.battery_invert,n)}:d}function bb(t,e,n,r,o){let i=e.subMeters??[],s=new Map;for(let p of i)for(let d of p.floors)s.has(d)||s.set(d,p.id);let a=new Set([e.grid,e.gridExport,...e.solar,...e.battery,...e.charge,...i.flatMap(p=>[p.power,...p.solar,...p.batteries.flatMap(d=>[d.power,d.charge])])]),l=p=>o.filter(d=>s.get(d.floorId)===p&&!a.has(d.powerEntity)).reduce((d,f)=>d+f.power,0),c=new Map(i.map(p=>[p.id,p.power?Me(t.states[p.power],p.invert):null])),u=i.map(p=>{let d=c.get(p.id)??null,f=p.solar.reduce((v,w)=>v+Math.max(0,Me(t.states[w])??0),0),_=p.batteries.reduce((v,w)=>v+(Us(t,w,r)??0),0),y=i.filter(v=>v.parent===p.id).reduce((v,w)=>v+(c.get(w.id)??0),0),b=d===null?null:Math.max(0,d+f+_-y);return{id:p.id,parent:p.parent,power:d,solar:f,battery:_,use:b,unmetered:b===null?null:Math.max(0,b-l(p.id))}}),h=u.reduce((p,d)=>p+(d.use??0),0);return{subMeters:u,rest:n===null?null:Math.max(0,n-h)}}function yb(t,e,n){let r=t.b[0]-t.a[0],o=t.b[1]-t.a[1],i=Math.hypot(r,o)||1,s=Math.min(1,Math.max(0,((e.x-t.a[0])*r+(e.z-t.a[1])*o)/(i*i))),a=t.a[0]+r*s,l=t.a[1]+o*s,c=o/i*(a-n.x)+-r/i*(l-n.z)<0?-1:1;return{x:a,z:l,nx:c*o/i,nz:-c*r/i,distance:Math.hypot(e.x-a,e.z-l)}}function md(t){let e=db(t),n=e?t.floors.find(c=>c.id===e.floor_id):void 0;if(!e||!n)return null;let r={exterior:t.settings.wall_exterior,interior:t.settings.wall_interior},o=pe(n.rooms,r,n.walls??[]).walls.filter(c=>c.exterior),i=n.rooms.flatMap(c=>c.points);if(o.length===0||i.length===0)return null;let s={x:i.reduce((c,u)=>c+u[0],0)/i.length,z:i.reduce((c,u)=>c+u[1],0)/i.length},a=o.map(c=>yb(c,e,s)).reduce((c,u)=>u.distance<c.distance?u:c),l=r.exterior/2+3;return{floorId:n.id,x:a.x+a.nx*l,z:a.z+a.nz*l}}function gd(t,e){let n=t.floors.flatMap(f=>f.furniture.map(_=>({floor:f,item:_}))),r=f=>n.filter(_=>_.item.type===f),o=f=>!!Io(f.item,e),i=f=>({kind:"device",...f}),[s,a,l,c,u]=[t.settings.roof.solar??[],r("meter"),r("inverter"),r("home_battery"),r("grid_point")],h=!!t.energy.grid||a.some(o),p=!!t.energy.solar||l.length>0&&l.every(o),d=!!t.energy.battery||c.every(f=>o(f)&&f.item.soc&&f.item.soc!=="none");return[s.length>0?{state:"ok",label:"chk_solar",target:{kind:"solar-field",id:s[0].id}}:{state:"todo",label:"chk_solar_add",target:{kind:"add-solar-field"}},a.length>0?{state:h?"ok":"todo",label:h?"chk_meter":"chk_meter_sensor",target:i(a[0])}:{state:"todo",label:"chk_meter_add",target:{kind:"add-device",type:"meter"}},l.length>0?{state:p?"ok":"todo",label:p?"chk_inverter":"chk_inverter_sensor",target:i(l.find(f=>!o(f))??l[0])}:{state:"todo",label:"chk_inverter_add",target:{kind:"add-device",type:"inverter"}},c.length>0?{state:d?"ok":"todo",label:d?"chk_battery":"chk_battery_sensor",target:i(c[0])}:{state:"opt",label:"chk_battery_opt",target:{kind:"add-device",type:"home_battery"}},u.length>0?{state:"ok",label:"chk_grid",target:i(u[0])}:{state:"opt",label:"chk_grid_opt",target:{kind:"add-device",type:"grid_point"}}]}function Hr(t,e){let n=[];for(let r of t.floors)for(let o of r.furniture)o.type===e&&n.push({id:o.id,floorId:r.id,x:o.x,z:o.z,y:Math.max(.4,Math.min(1.4,o.h*.8))});return n}function wb(t){if(!t?.rooms.length)return null;let e=0,n=0,r=0;for(let o of t.rooms)for(let[i,s]of o.points)e+=i,n+=s,r++;return r?{floorId:t.id,x:e/r,z:n/r,y:1}:null}function vb(t){let e=zn(t);return Hr(t,"meter").find(n=>!e.has(n.id))??Hr(t,"inverter")[0]??wb(So(t))}function kb(t,e){let n=Hr(t,"grid_point")[0];if(n)return n;let r=t.floors.find(a=>a.id===e.floorId);if(!r?.rooms.length)return null;let o=1/0,i=-1/0,s=-1/0;for(let a of r.rooms)for(let[l,c]of a.points)o=Math.min(o,l),i=Math.max(i,l),s=Math.max(s,c);return{floorId:e.floorId,x:Math.max(o,Math.min(i,e.x)),z:s+3,y:.2}}function _d(t){let e=[],n=vb(t);if(!n)return e;let r=new Set(t.floors.flatMap(i=>i.furniture).filter(i=>Lr(t,i)).map(i=>i.id)),o=Hr(t,"inverter").find(i=>!r.has(i.id));for(let i of t.settings.roof.solar??[])e.push({key:`solar:${i.id}`,kind:"solar",id:i.id});Hr(t,"home_battery").some(i=>!r.has(i.id))&&e.push({key:"battery",kind:"battery",id:null}),o&&(o.floorId!==n.floorId||o.x!==n.x||o.z!==n.z)&&e.push({key:"inverter",kind:"inverter",id:null}),kb(t,n)&&e.push({key:"grid",kind:"grid",id:null});for(let i of t.floors.flatMap(s=>s.furniture))r.has(i.id)&&(i.type==="inverter"?e.push({key:`inverter:${i.id}`,kind:"inverter",id:i.id}):i.type==="home_battery"&&e.push({key:`battery:${i.id}`,kind:"battery",id:i.id}));for(let i of zn(t))e.push({key:`meter:${i}`,kind:"meter",id:i});return e}var bd=(t,e)=>t.energy.routes?.find(n=>n.key===e&&n.points.length>0);var xb={ok:"\u2713",todo:"\u25CB",opt:"\xB7"},wd=t=>t.hass?dt(t.hass,t.doc.floors):new Map,$b=De,vd=(t,e)=>e.name||t.t(`furn_${e.type}`);function kd(t,e){let n=gd(t.doc,wd(t)),r=n.filter(o=>o.state==="ok").length;return m`<section class="nf-checklist">
    <h3>☑ ${t.t("chk_title")} <span class="nf-sub">${r}/${n.length}</span></h3>
    ${M(t.t("chk_hint"))}
    ${n.map(o=>m`<button class="nf-chk nf-chk-${o.state}" ?disabled=${!t.admin&&o.state!=="ok"} @click=${()=>e.follow(o.target)}>
        <span>${xb[o.state]}</span>${t.t(o.label)}
      </button>`)}
  </section>`}function xd(t,e){let n=t.doc.floors.flatMap(r=>r.furniture.filter(o=>$b.includes(o.type)).map(o=>({floor:r,item:o})));return m`<section>
    <h3>⚡ ${t.t("energy_devices")}</h3>
    ${M(t.t("energy_devices_hint"))}
    ${n.length>0?m`<div class="nf-room-list">
          ${n.map(({floor:r,item:o})=>m`<div class="nf-row">
              <button class="nf-dev-name" @click=${()=>e.openDevice(r,o)}><span>${vd(t,o)} · ${r.name}</span></button>
            </div>`)}
        </div>`:g}
    <div class="nf-actions">
      ${De.map(r=>m`<button class="nf-btn" ?disabled=${!t.admin||!t.floor} @click=${()=>e.addDevice(r)}>+ ${t.t(`furn_${r}`)}</button>`)}
    </div>
  </section>`}var yd=(t,e,n)=>m`<p class="nf-sub nf-pack-error">${t.t(e)} <button class="nf-btn" ?disabled=${!t.admin} @click=${n}>${t.t("energy_sign_flip")}</button></p>`;function $d(t,e){let{energy:n}=t.doc,r=(b,v)=>t.hass?.states[b]?.attributes[v],o=W(t.hass,b=>En(t.hass,b)),i=W(t.hass,b=>de(b)&&r(b,"device_class")==="battery"),s=W(t.hass,b=>de(b)&&(r(b,"device_class")==="monetary"||/\/(kWh|MWh)$/.test(r(b,"unit_of_measurement")??""))),a=wd(t),l=Vo(t.doc,b=>Io(b,a)),c=b=>t.replace({...structuredClone(t.doc),energy:{...t.doc.energy,...b}}),u=W(t.hass,b=>de(b)&&["gas","water","volume_flow_rate"].includes(r(b,"device_class")??"")),h=b=>v=>c({[b]:v==="none"?null:v}),p=t.hass?js(t.hass,t.doc,[],l):null,d=!!p&&(p.solar??0)<20,f=d&&p.grid!==null&&p.grid<-50,_=d&&p.battery!==null&&p.battery<-50&&(p.grid??0)<=0,y=(b,v)=>L(t,t.t("energy_invert"),b,w=>c(v(w)));return m`<section>
    <h3>⚖ ${t.t("energy_balance")}</h3>
    ${M(t.t("energy_balance_hint"))}
    ${f?yd(t,"energy_sign_grid",()=>c({grid_invert:!n.grid_invert})):g}
    ${_?yd(t,"energy_sign_battery",()=>c({battery_invert:!n.battery_invert})):g}
    <div class="nf-form">
      ${T(t,t.t("energy_grid"),n.grid,l.grid,o,h("grid"))}
      ${y(n.grid_invert,b=>({grid_invert:b}))}
      ${T(t,t.t("energy_solar_sensor"),n.solar,l.solar[0]??null,o,h("solar"))}
      ${T(t,t.t("energy_battery_sensor"),n.battery,l.battery[0]??null,o,h("battery"))}
      ${y(n.battery_invert,b=>({battery_invert:b}))}
      ${T(t,t.t("energy_battery_soc"),n.battery_soc,l.soc[0]??null,i,h("battery_soc"))}
      ${T(t,t.t("energy_consumption_sensor"),n.consumption,null,o,h("consumption"))}
      ${T(t,t.t("energy_tariff_sensor"),n.tariff,void 0,s,h("tariff"))}
      ${T(t,t.t("energy_gas"),n.gas??null,void 0,u,h("gas"))}
      ${T(t,t.t("energy_water"),n.water??null,void 0,u,h("water"))}
      ${M(t.t("energy_meters_hint"),"nf-wide")}
    </div>
    <div class="nf-actions"><button class="nf-btn" ?disabled=${!t.admin||!t.hass} @click=${()=>e.importPrefs()}>${t.t("energy_import_prefs")}</button></div>
    ${e.note?M(e.note):g} ${M(t.t("energy_hint"))}
  </section>
  <section>
    <h3>⚙ ${t.t("energy_advanced")}</h3>
    ${M(t.t("energy_advanced_hint"))}
    <div class="nf-form">
      ${L(t,t.t("energy_advanced_on"),!!n.advanced,b=>c({advanced:b}))}
      ${n.advanced?L(t,t.t("energy_show_unmetered"),!!n.show_unmetered,b=>c({show_unmetered:b})):g}
    </div>
    ${n.advanced?M(t.t("energy_show_unmetered_hint")):g}
  </section>`}var Sd=t=>m`<section class="nf-teaser nf-teaser-on">
  <div class="nf-teaser-head"><b>⚡ ${t.t("feature_name_energy")}</b></div>
  ${M(t.t("feature_text_energy"))}
</section>`;function Md(t){let e=(n,r,o)=>m`<a class="nf-btn" href="https://github.com/therealMRBK/NextFloor/${n}" target="_blank" rel="noopener">${r} ${t.t(o)}</a>`;return m`<section class="nf-help">
    <h3>${t.t("help_title")}</h3>
    ${M(t.t("help_hint"))}
    <div class="nf-actions">${e("issues/new/choose","\u{1F41E}","help_issue")}${e("discussions/categories/ideas","\u{1F4A1}","help_idea")}</div>
  </section>`}function Sb(t,e){let n=t.t,r=t.doc.floors.flatMap(i=>i.furniture).find(i=>i.id===e.id),o=r?vd(t,r):"";switch(e.kind){case"solar":{let i=t.doc.settings.roof.solar??[],s=i.findIndex(a=>a.id===e.id);return n("route_conn_solar",{name:i[s]?.name||`${n("solar_field")} ${s+1}`})}case"battery":return e.id?n("route_conn_device",{name:o}):n("route_conn_battery");case"inverter":return e.id?n("route_conn_device",{name:o}):n("route_conn_inverter");case"grid":return n("route_conn_grid");case"meter":return n("route_conn_meter",{name:o})}}function Ed(t,e){let n=_d(t.doc);if(!n.length)return g;let r=t.t,o=e.draft;return m`<section>
    <h3>〰 ${r("energy_routes")}</h3>
    ${M(r("energy_routes_hint"))}
    <div class="nf-room-list">
      ${n.map(i=>{let s=bd(t.doc,i.key),a=o?.key===i.key;return m`<div class="nf-row nf-route-row">
          <span class="nf-dev-name"><span>${Sb(t,i)} · ${s?r("route_points",{n:s.points.length}):r("route_none")}</span></span>
          ${a?m`<p class="nf-sub nf-wide">${r("route_drawing",{n:o.points.length})}</p>
                <div class="nf-actions nf-wide">
                  <button class="nf-btn" ?disabled=${!o.points.length} @click=${()=>e.undoPoint()}>↶ ${r("route_undo")}</button>
                  <button class="nf-btn nf-primary" @click=${()=>e.finish()}>${r("route_done")}</button>
                  <button class="nf-btn" @click=${()=>e.cancel()}>${r("cancel")}</button>
                </div>`:m`<div class="nf-actions">
                <button class="nf-btn" ?disabled=${!t.admin||!!o} @click=${()=>e.start(i.key)}>✎ ${r(s?"route_redraw":"route_draw")}</button>
                ${s?m`<button class="nf-btn" ?disabled=${!t.admin||!!o} @click=${()=>e.clear(i.key)}>⨉</button>`:g}
              </div>
              ${s?L(t,r("route_cable"),!!s.cable,l=>e.setCable(i.key,l),{title:r("route_cable_hint")}):g}`}
        </div>`})}
    </div>
  </section>`}var it=(t,e)=>e.map(n=>t.toScreen(n).join(",")).join(" ");function Ko(t,e,n,r,o,i){let[[s,a],[l,c]]=[t.toScreen(e),t.toScreen(n)];if(Math.hypot(l-s,c-a)<=36)return g;let[u,h]=[(s+l)/2,(a+c)/2];return E`<g data-plus=${`${r}:${o}:${i}`} class="nf-mid"><circle cx=${u} cy=${h} r="14" class="nf-hit" /><circle cx=${u} cy=${h} r="6" /><path d="M${u-3} ${h}h6M${u} ${h-3}v6" /></g>`}var Rd=(t,e)=>E`<circle cx=${t} cy=${e} r="16" class="nf-hit" /><circle cx=${t} cy=${e} r="6" />`,Mb=(t,e,n)=>E`<g class="nf-vertex" data-roof-vertex=${n}>${Rd(...t.toScreen(e))}</g>`,Eb=(t,e,n)=>E`<g class="nf-vertex" data-roof-corner=${n}>${Rd(...t.toScreen(e))}</g>`;function Rb(t,e,n,r){let{t:o,hass:i}=t.host,s=n.dormer?o("roof_dormer"):n.open?o("roof_open_short"):o(`roof_shape_${n.shape}`);return`${e.isFixed(n)?"\u{1F512} ":""}${r+1} \xB7 ${s} \xB7 ${G(i,Wt(n),1)} m`}function Zs(t,e){let n=t.host.doc.settings.roof,r=n.type==="custom"?n.sections??[]:[],o=t.host.admin,i=(s,a)=>{let l=s.id===e.sectionId,c=ve(s),u=(s.shape==="flat"||s.shape==="parapet")&&s.points&&s.points.length>=3?s.points:null,h=$o(r,s),p=h?ve(gs(h,s)):c,d=u??[p.at(p.u0,0),p.at(p.u1,0),p.at(p.u1,p.w),p.at(p.u0,p.w)],_=((s.shape==="flat"||s.shape==="parapet"?null:Bt(s,{u0:0,u1:0,a:0,b:0}))?.ridges??[]).map(([C,B])=>{let[j,ye]=t.toScreen(c.at(C[0],C[1])),[yt,V]=t.toScreen(c.at(B[0],B[1]));return E`<line x1=${j} y1=${ye} x2=${yt} y2=${V} />`}),[y,b]=t.toScreen(c.at((c.u0+c.u1)/2,c.w/2)),v=l&&o&&!e.isFixed(s),w=[[0,0],[1,0],[1,1],[0,1]],x=s.shape==="flat"||s.shape==="parapet",[k,$,R,F]=[Math.min(s.x0,s.x1),Math.max(s.x0,s.x1),Math.min(s.z0,s.z1),Math.max(s.z0,s.z1)],z=u??(s.rotation?ur(s):[[k,R],[$,R],[$,F],[k,F]]),I=v&&x?z.map((C,B)=>Ko(t,C,z[(B+1)%z.length],"roof",s.id,B)):g,P=v?E`${I}${u?u.map((C,B)=>Mb(t,C,`${s.id}:${B}`)):w.map(([C,B])=>Eb(t,[C?$:k,B?F:R],`${s.id}:${C}:${B}`))}`:g;return E`<g data-roof=${s.id} class=${`nf-roof-sec${l?" nf-roof-sel":""}`}>
        <polygon points=${it(t,d)} />
        <g class="nf-roof-ridge">${_}</g>
        <text x=${y} y=${b-14}>${Rb(t,e,s,a)}</text>
      </g>${P}`};return E`<g class="nf-roof-layer">${r.map(i)}</g>`}function Ab(t,e,n,r,o){let i=r*Math.PI/180,[s,a]=t.toScreen(n),[l,c]=t.toScreen([n[0]+Math.sin(i)*o,n[1]-Math.cos(i)*o]);return E`<g class="nf-rotate" data-solar-turn=${e}>
    <line x1=${s} y1=${a} x2=${l} y2=${c} />
    <circle cx=${l} cy=${c} r="16" class="nf-hit" />
    <circle cx=${l} cy=${c} r="8" />
    <path d="M${l-4} ${c-1}a4 4 0 1 1 2 3.5" />
  </g>`}function Ad(t,e){let{doc:n,admin:r}=t.host,o=n.settings.roof.solar??[];if(o.length===0)return g;let i=te(n),s=a=>{let l=ke(n,a,i);if(!l||l.wall&&l.wall.floorId!==t.floorId)return g;let c=a.id===e.solarId,u=g;if(c&&l.unbounded&&r&&!a.locked){let d=yr(l,a),f=Math.max(...We(l,a,!0).flatMap(_=>_.corners.map(y=>Math.hypot(y[0]-d[0],y[2]-d[1]))));u=Ab(t,a.id,d,a.rotation??0,.9+f*.5)}let h=d=>{let f;if(l.wall){let _=Math.max(.3,...d.corners.map(w=>(w[0]-l.o[0])*l.n[0]+(w[2]-l.o[2])*l.n[2])),[y,b]=[d.corners[0],d.corners[1]],v=w=>[w[0]+l.n[0]*_,w[2]+l.n[2]*_];f=[[y[0],y[2]],v(y),v(b),[b[0],b[2]]]}else f=d.corners.map(_=>[_[0],_[2]]);return E`<polygon data-cell=${d.cell} class=${d.skipped?"nf-solar-off":""} points=${it(t,f)} />`},p=`nf-solar${c?" nf-solar-sel":""}${c&&e.picking?" nf-solar-pick":""}`;return E`<g data-solar=${a.id} class=${p}>${We(l,a,c).map(h)}</g>${u}`};return E`<g class="nf-solar-layer">${o.map(s)}</g>`}function Fd(t,e){let n=t.host.doc.settings.roof.windows??[];if(n.length===0)return g;let r=new Map(te(t.host.doc).map(i=>[i.key,i])),o=i=>{let s=r.get(i.face),a=s?Ss(s,i):null;return a?E`<g data-roofwin=${i.id} class=${`nf-roofwin${i.id===e.windowId?" nf-roofwin-sel":""}`}><polygon points=${it(t,a.map(l=>[l[0],l[2]]))} /></g>`:g};return E`<g class="nf-roofwin-layer">${n.map(o)}</g>`}var Fb={inverter:"\u26A1",home_battery:"\u{1F50B}",wallbox:"\u{1F50C}",meter:"\u{1F4DF}",grid_point:"\u{1F3C1}"};function zd(t,e,n){if(!e)return g;let r=e.furniture.filter(i=>De.includes(i.type)),o=i=>{let[s,a]=t.toScreen([i.x,i.z]),l=i.id===n,c=t.host.t(`furn_${i.type}`);return E`<g data-energy-device=${i.id} class=${`nf-energy-marker${l?" nf-energy-marker-sel":""}`}>
      <circle cx=${s} cy=${a} r="17" />
      <text x=${s} y=${a+6} class="nf-energy-icon">${Fb[i.type]??"\u26A1"}</text>
      ${l?E`<text x=${s} y=${a+32} class="nf-energy-name">${c}</text>`:g}
      <title>${c}</title>
    </g>`};return E`<g class="nf-energy-markers">${r.map(o)}</g>`}function Pd(t,e){let{doc:n,hass:r}=t.host;if(!(n.settings.roof.sections??[]).some(s=>bs(s,e.elevation+e.height)))return g;let i=[1.5,2].flatMap(s=>ys({settings:n.settings},e.elevation,s).map(([a,l])=>{let[c,u]=t.toScreen(a),[h,p]=t.toScreen(l);return E`<line class="nf-headroom" x1=${c} y1=${u} x2=${h} y2=${p} />
        <text class="nf-headroom-label" x=${(c+h)/2} y=${(u+p)/2-4}>${G(r,s,1)} m</text>`}));return E`${i}`}function Td(t,e,n,r){if(!e)return g;let o=(i,s)=>{let a=[];return i.forEach((l,c)=>{if(l.floor_id!==e.id)return;let[u,h]=t.toScreen([l.x,l.z]),p=i[c+1];if(p?.floor_id===e.id){let[f,_]=t.toScreen([p.x,p.z]);a.push(E`<line x1=${u} y1=${h} x2=${f} y2=${_} />`)}let d=p&&p.floor_id!==e.id||c>0&&i[c-1].floor_id!==e.id;a.push(E`<circle cx=${u} cy=${h} r=${d?7:4} class=${d?"nf-route-riser":""} />`),s&&a.push(E`<text x=${u+8} y=${h-8}>${c+1}</text>`)}),E`<g class=${`nf-route${s?" nf-route-drawing":""}`}>${a}</g>`};return E`<g class="nf-routes">${n.filter(i=>i.key!==r?.key).map(i=>o(i.points,!1))}${r?o(r.points,!0):g}</g>`}function zb(t,e,n){let[r,o]=[t+n/2,e-30];return E`<g class="nf-rotate" data-bg-rotate="1">
    <line x1=${r} y1=${e} x2=${r} y2=${o} />
    <circle cx=${r} cy=${o} r="16" class="nf-hit" />
    <circle cx=${r} cy=${o} r="8" />
    <path d="M${r-4} ${o-1}a4 4 0 1 1 2 3.5" />
  </g>`}function Pb(t,e){let n=e.level?.length?e.level:e.ruler;if(!n?.length)return g;let r=n.map(o=>t.toScreen(o));return E`<g class="nf-bg-ruler">
    ${r.length===2?E`<line x1=${r[0][0]} y1=${r[0][1]} x2=${r[1][0]} y2=${r[1][1]} />`:g}
    ${r.map(([o,i])=>E`<circle cx=${o} cy=${i} r="6" />`)}
  </g>`}function Id(t,e,n){let r=n?.background,o=e.picture(r?.image_id);if(!r||!o)return g;let[i,s]=t.toScreen([r.x,r.z]),a=r.width*t.scale,l=a*o.aspect,c=e.handlesShown;return E`<g transform="rotate(${r.rotation??0} ${i+a/2} ${s+l/2})">
    <image href=${o.url} x=${i} y=${s} width=${a} height=${l} opacity=${r.opacity} preserveAspectRatio="none" pointer-events=${c?"auto":"none"} data-bg="1" style=${c?"cursor:move":""} />
    ${c?E`<rect class="nf-bg-frame" x=${i} y=${s} width=${a} height=${l} />
        <circle class="nf-bg-handle" data-bg-handle="1" cx=${i+a} cy=${s+l} r="9" />
        ${zb(i,s,a)}`:g}
  </g>${Pb(t,e)}`}var Tb="strict-origin-when-cross-origin",qs=new Map,Dd=new Map,Go=new Map;function Ib(t){let e=qs.get(t);return e||(e=fetch(t,{referrerPolicy:Tb,mode:"cors",credentials:"omit"}).then(async n=>n.ok&&(n.headers.get("content-type")??"").startsWith("image/")?await n.blob():null).catch(()=>null).then(n=>(n||setTimeout(()=>qs.delete(t),6e4),n)),qs.set(t,e)),e}function Od(t,e){let n=Dd.get(t);if(n)return n;let r=Go.get(t);return r||(r=new Set,Go.set(t,r),Ib(t).then(o=>{o&&Dd.set(t,URL.createObjectURL(o));let i=Go.get(t)??new Set;if(Go.delete(t),o)for(let s of i)s()})),r.add(e),null}function Ld(t,e){let n=e.map;if(!Wo(n))return g;let r=id(n),o=od(n),[i,s]=t.toScreen([r.x,r.z]),a=t.scale;return E`<g class="nf-map" opacity=${r.opacity} pointer-events="none" transform="translate(${i} ${s}) rotate(${e.north??0})">
    ${nd(n.lat,n.lon,r.zoom).map(l=>({tile:l,href:Od(rd(o,l),t.redraw)})).filter(l=>l.href).map(({tile:l,href:c})=>E`<image href=${c} x=${l.east*a} y=${-l.north*a} width=${l.size*a+.6} height=${l.size*a+.6} preserveAspectRatio="none" />`)}
  </g>`}var Ys=t=>Math.round(t*1e3)/1e3,Xs=(t,e)=>t.width*e,Pn=(t,e)=>[t.x+t.width/2,t.z+Xs(t,e)/2];function Hd(t,e,n){let[r,o]=[t[0]-e[0],t[1]-e[1]];return[e[0]+r*Math.cos(n)-o*Math.sin(n),e[1]+r*Math.sin(n)+o*Math.cos(n)]}var Cd=t=>((t+180)%360+360)%360-180;function Wd(t,e,n){return{x:Ys(t[0]-e/2),z:Ys(t[1]-n/2)}}function Bd(t,e,n,r){if(Math.hypot(r[0]-n[0],r[1]-n[1])<.05)return null;let o=Math.atan2(r[1]-n[1],r[0]-n[0]),i=Math.round(o/(Math.PI/2))*(Math.PI/2)-o;if(Math.abs(i)<1e-4)return null;let s=Hd(Pn(t,e),n,i),a=Math.round(Cd((t.rotation??0)+i*180/Math.PI)*100)/100;return{...t,rotation:a,...Wd(s,t.width,Xs(t,e))}}function Nd(t,e,n,r,o){let i=Math.hypot(r[0]-n[0],r[1]-n[1]);if(!(o>0)||i<1e-4)return null;let s=o/i,[a,l]=Pn(t,e),c=[n[0]+s*(a-n[0]),n[1]+s*(l-n[1])],u=t.width*s;return{...t,width:Ys(u),...Wd(c,u,Xs(t,e)*s)}}function Vd(t,e,n){let r=Hd(n,Pn(t,e),-(t.rotation??0)*Math.PI/180);return[r[0]-t.x,r[1]-t.z]}function Kd(t,e,n,r){let o=t+(n-e)*180/Math.PI;return Cd(r?Math.round(o/15)*15:Math.round(o*10)/10)}var Db=2048;async function jo(t){let e=await createImageBitmap(t),n=Math.min(1,Db/Math.max(e.width,e.height)),r=document.createElement("canvas");return r.width=Math.round(e.width*n),r.height=Math.round(e.height*n),r.getContext("2d").drawImage(e,0,0,r.width,r.height),{data:r.toDataURL("image/jpeg",.85),aspect:r.height/r.width}}var Uo=class{deps;editMode=!1;levelPoints=null;rulerPoints=null;rulerMetres=0;sectionOpen=!1;pictures={};loading=new Set;constructor(e){this.deps=e}get edit(){return this.editMode}set edit(e){this.editMode=e,this.deps.refresh()}get level(){return this.levelPoints}set level(e){this.levelPoints=e,this.deps.refresh()}get ruler(){return this.rulerPoints}set ruler(e){this.rulerPoints=e,this.deps.refresh()}get rulerLength(){return this.rulerMetres}set rulerLength(e){this.rulerMetres=e,this.deps.refresh()}get open(){return this.sectionOpen}set open(e){this.sectionOpen=e,this.deps.refresh()}get handlesShown(){let{host:e}=this.deps;return!!e.floor?.background&&e.admin&&this.deps.currentTool()==="select"&&this.editMode}picture(e){return e?this.pictures[e]:void 0}ensureLoaded(e){!this.pictures[e]&&!this.loading.has(e)&&this.load(e)}async load(e){let{host:n,api:r}=this.deps;if(n.hass){this.loading.add(e);try{let o=await r.fetchImage(n.hass,e),i=await this.aspectOf(o);this.pictures={...this.pictures,[e]:{url:o,aspect:i}},this.deps.refresh()}catch{}}}async aspectOf(e){let n=new Image;return n.src=e,await n.decode(),n.naturalHeight/n.naturalWidth}async upload(e){let{host:n,api:r}=this.deps;if(!e||!n.hass)return;let{data:o,aspect:i}=await this.deps.readPicture(e),s=D("img");await r.storeImage(n.hass,s,o),this.pictures={...this.pictures,[s]:{url:o,aspect:i}};let a=n.floor?.rooms??[],l=a.length>0?ce(a.flatMap(u=>u.points)):null,c={image_id:s,x:l?l.x0:0,z:l?l.z0:0,width:l?Math.max(4,Math.round((l.x1-l.x0)*1e3)/1e3):12,opacity:.5};this.setBackground(c)}setBackground(e){this.deps.host.change((n,r)=>Object.assign(r,{background:e}))}toggleLevel(){this.levelPoints=this.levelPoints?null:[],this.rulerPoints=null,this.editMode=!1,this.deps.refresh()}toggleRuler(){this.rulerPoints=this.rulerPoints?null:[],this.levelPoints=null,this.editMode=!1,this.deps.refresh()}toggleEdit(){this.edit=!this.editMode,this.editMode&&this.deps.useSelectTool()}tapLevel(e){let n=[...this.levelPoints??[],e];if(n.length<2){this.level=n;return}this.level=null,this.straighten(n[0],n[1])}tapRuler(e){this.rulerPoints&&this.rulerPoints.length<2&&(this.ruler=[...this.rulerPoints,e])}straighten(e,n){let r=this.deps.host.floor?.background,o=this.picture(r?.image_id),i=r&&o?Bd(r,o.aspect,e,n):null;i&&this.setBackground(i)}applyRuler(){let e=this.deps.host.floor?.background,n=this.picture(e?.image_id),r=this.rulerPoints;if(!e||!n||!r||r.length<2)return;let o=Nd(e,n.aspect,r[0],r[1],this.rulerMetres);o&&(this.setBackground(o),this.rulerPoints=null,this.rulerMetres=0,this.deps.refresh())}};var Gd=.1,Qs=(t,e,n)=>m`<button class="nf-btn nf-wide ${t?"nf-primary":""}" aria-pressed=${t} @click=${n}>${e}</button>`;function Ob(t,e){let n=e.ruler;if(!n)return g;if(n.length<2)return M(t.t(n.length>0?"bg_ruler_second":"bg_ruler_first"),"nf-wide");let r=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1]),o=()=>e.applyRuler();return m`${M(t.t("bg_ruler_length_hint",{m:G(t.hass,r,2)}),"nf-wide")}
    <label class="nf-field"
      >${t.t("bg_ruler_length")}
      <input
        type="number"
        min="0.01"
        step="0.01"
        .value=${e.rulerLength?String(e.rulerLength):""}
        @input=${i=>e.rulerLength=Cs(i.target.value)||0}
        @keydown=${i=>i.key==="Enter"&&o()}
      />
    </label>
    <button class="nf-btn nf-primary" ?disabled=${!(e.rulerLength>0)} @click=${o}>${t.t("bg_ruler_apply")}</button>`}function Lb(t,e){if(!t.admin)return g;let n=t.t,r=e.level;return m`${Qs(e.edit,n(e.edit?"background_edit_done":"background_edit"),()=>e.toggleEdit())}
    ${M(n(e.edit?"background_handles_hint":"background_fixed_hint"),"nf-wide")}
    ${Qs(!!r,`\u{1F4D0} ${n(r?"bg_level_cancel":"bg_level")}`,()=>e.toggleLevel())}
    ${r?M(n(r.length>0?"bg_level_second":"bg_level_first"),"nf-wide"):g}
    ${Qs(!!e.ruler,`\u{1F4CF} ${n(e.ruler?"bg_ruler_cancel":"bg_ruler")}`,()=>e.toggleRuler())}
    ${Ob(t,e)}`}function Ud(t,e,n){let r=n.background,o=t.t,i=s=>r&&e.setBackground({...r,...s});return m`<details class="nf-section" ?open=${e.open} @toggle=${s=>e.open=s.target.open}>
    <summary>${o("background")}</summary>
    <div class="nf-form">
      <label class="nf-btn nf-wide nf-upload"
        >${o("background_upload")}<input
          type="file"
          accept="image/png,image/jpeg,image/webp"
          @change=${s=>{let a=s.target,l=a.files?.[0];a.value="",e.upload(l)}}
        />
      </label>
      ${r?m`${A(t,o("x"),r.x,s=>i({x:s}))} ${A(t,o("z"),r.z,s=>i({z:s}))}
          ${A(t,o("background_width"),r.width,s=>i({width:Math.max(Gd,s)}),.01,Gd)}
          ${A(t,o("background_rotation"),r.rotation??0,s=>i({rotation:Math.round(s*10)/10}),.5)}
          ${Lb(t,e)}
          <label class="nf-field"
            >${o("background_opacity")}
            <input type="range" min="0.05" max="1" step="0.05" .value=${String(fe(r.opacity))} @change=${s=>i({opacity:Number.parseFloat(s.target.value)})} />
          </label>
          <button class="nf-btn nf-danger nf-wide" @click=${()=>e.setBackground(null)}>${o("background_remove")}</button>`:g}
    </div>
  </details>`}var Hb=t=>t.map((e,n)=>[e,t[(n+1)%t.length]]);function Cb(t,e,n){let r=K(n,e),o=Y(r,r),i=o?Math.max(0,Math.min(1,Y(K(t,e),r)/o)):0;return me(K(t,[e[0]+r[0]*i,e[1]+r[1]*i]))}function jd(t,e,n=.03){return t.every(r=>H(r,e)||Hb(e).some(([o,i])=>Cb(r,o,i)<=n))}var Js=["straight","quarter","l","half","u","spiral"],ea=["solid","stringer","mono","cantilever"],ta=["none","left","right","both"],na=["headroom","full","none"],st={shape:"straight",turn:"right",build:"solid",risers:!0,steps:null,run_width:null,down:!1,rail:"none",opening:"headroom",landing_after:null},ra={straight:[1,3.2],quarter:[2.2,2.6],l:[2.2,2.8],half:[2,2.6],u:[2.2,2.6],spiral:[1.6,1.6]},Qd=2,Jd=40;var Zo=(t,e)=>typeof e=="string"&&t.includes(e);function Nr(t){let e=t.stair??{},n=typeof e.steps=="number"&&Number.isFinite(e.steps)?Math.round(Math.min(Jd,Math.max(Qd,e.steps))):null,r=typeof e.run_width=="number"&&Number.isFinite(e.run_width)&&e.run_width>.2?e.run_width:null;return{shape:Zo(Js,e.shape)?e.shape:st.shape,turn:e.turn==="left"?"left":"right",build:Zo(ea,e.build)?e.build:st.build,risers:e.risers!==!1,steps:n,run_width:r,down:e.down===!0,rail:Zo(ta,e.rail)?e.rail:st.rail,opening:Zo(na,e.opening)?e.opening:st.opening,landing_after:typeof e.landing_after=="number"&&Number.isFinite(e.landing_after)?Math.max(1,Math.round(e.landing_after)):null}}var Wr=(t,e,n)=>[t[0]+(e[0]-t[0])*n,t[1]+(e[1]-t[1])*n],Zd=(t,e)=>Math.abs(t[0]-e[0])<1e-6&&Math.abs(t[1]-e[1])<1e-6;function eh(t){let e=[];for(let n of t)(!e.length||!Zd(e[e.length-1],n))&&e.push(n);for(;e.length>1&&Zd(e[0],e[e.length-1]);)e.pop();return e}function Br(t,e,n=!1){return{poly:eh([...t,...[...e].reverse()]),landing:n,left:t,right:e}}function Cr(t,e,n,r,o){let i=[];for(let s=0;s<o;s++){let[a,l]=[s/o,(s+1)/o];i.push(Br([Wr(t,n,a),Wr(t,n,l)],[Wr(e,r,a),Wr(e,r,l)]))}return i}function qd(t,e){let n=e;for(let r=0;r+1<t.length;r++){let o=Math.hypot(t[r+1][0]-t[r][0],t[r+1][1]-t[r][1]);if(n<=o||r+2===t.length)return Wr(t[r],t[r+1],o?Math.min(1,n/o):0);n-=o}return t[t.length-1]}function Wb(t,e,n){let r=[qd(t,e)],o=0;for(let i=0;i+1<t.length;i++)o+=Math.hypot(t[i+1][0]-t[i][0],t[i+1][1]-t[i][1]),o>e+1e-6&&o<n-1e-6&&r.push(t[i+1]);return r.push(qd(t,n)),r}var Bb=t=>t.reduce((e,n,r)=>r?e+Math.hypot(n[0]-t[r-1][0],n[1]-t[r-1][1]):e,0);function Yd(t,e,n,r,o){let i=Bb(t),s=[];for(let a=0;a<o;a++){let l=eh([...a===0?[e]:[],n,...a===o-1?[r]:[]]);s.push(Br(Wb(t,i*a/o,i*(a+1)/o),l.length?l:[n]))}return s}function qo(t,e,n){if(t<=0)return[0,0];if(e<=.001)return[0,t];if(n<=.001)return[t,0];let r=Math.min(t,Math.max(0,Math.round(t*e/(e+n))));return[r,t-r]}function Xd(t,e){if(t.landing_after==null)return null;let n=Math.min(e-1,Math.max(1,Math.round(t.landing_after)))-1;return[n,e-1-n]}function Nb(t,e,n,r){let[o,i,s,a]=[-e/2,e/2,-n/2,n/2];switch(t.shape){case"quarter":case"l":{let l=Math.min(t.run_width??Math.min(1,Math.min(e,n)/2),Math.min(e,n)-.05),c=[o+l,s+l],u=[[o,s+l],[o,s],[o+l,s]],h=t.shape==="l"?1:Math.min(r,r>=8?3:2),[p,d]=t.shape==="l"?Xd(t,r)??qo(r-h,n-l,e-l):qo(r-h,n-l,e-l),f=Cr([o,a],[o+l,a],[o,s+l],c,p),_=t.shape==="l"?[Br(u,[c],!0)]:Yd(u,c,c,c,h),y=Cr([o+l,s],c,[i,s],[i,s+l],d);return{treads:[...f,..._,...y],flight:l,column:0}}case"half":case"u":{let l=Math.min(t.run_width??Math.min(1.1,(e-.1)/2),(e-.02)/2),c=s+l,u=[[o,c],[o,s],[i,s],[i,c]],[h,p]=[[o+l,c],[i-l,c]],d=t.shape==="u"?1:Math.min(r,r>=12?6:r>=8?4:2),[f,_]=t.shape==="u"?Xd(t,r)??qo(r-d,n-l,n-l):qo(r-d,n-l,n-l),y=Cr([o,a],[o+l,a],[o,c],h,f),b=t.shape==="u"?[Br(u,[h,p],!0)]:Yd(u,h,[0,c],p,d),v=Cr([i,c],p,[i,a],[i-l,a],_);return{treads:[...y,...b,...v],flight:l,column:0}}case"spiral":{let l=Math.min(e,n)/2,c=Math.min(.08,l*.12),u=Math.min(.75,Math.max(.3,.22/(l*.6))),h=(d,f)=>[Math.cos(f)*d,Math.sin(f)*d],p=[];for(let d=0;d<r;d++){let[f,_]=[Math.PI+u*d,Math.PI+u*(d+1)],y=[0,.5,1].map(b=>h(l,f+(_-f)*b));p.push(Br(y,[h(c,f),h(c,_)]))}return{treads:p,flight:l-c,column:c}}default:return{treads:Cr([o,a],[i,a],[o,s],[i,s],r),flight:e,column:0}}}var Vb=(t,e)=>t.steps??Math.min(Jd,Math.max(Qd,Math.round(Math.abs(e)/.18)));function Jt(t,e,n,r){let o=Vb(t,r),i=Math.abs(r)/o,s=Nb(t,Math.max(.3,e),Math.max(.3,n),o),a=c=>[-c[0],c[1]];return{treads:s.treads.map((c,u)=>{let h=t.down?-i*(u+1):i*(u+1);return t.turn==="right"?{...c,top:h}:{poly:c.poly.map(a).reverse(),top:h,landing:c.landing,left:c.right.map(a),right:c.left.map(a)}}),rise:i,steps:o,column:s.column,flight:s.flight}}function Yo(t){let e=t.poly.reduce((n,r)=>[n[0]+r[0],n[1]+r[1]],[0,0]);return[e[0]/t.poly.length,e[1]/t.poly.length]}var Q=t=>Math.round(t*1e3)/1e3,Kb=(t,e)=>((t+e)%360+360)%360;function th(t,e){return{id:D("wall"),a:[Q(t[0]),Q(t[1])],b:[Q(e[0]),Q(e[1])],thickness:null}}function nh(t,e){let n=Math.hypot(t.b[0]-t.a[0],t.b[1]-t.a[1])||1,r=Math.max(.1,e)/n;return[Q(t.a[0]+(t.b[0]-t.a[0])*r),Q(t.a[1]+(t.b[1]-t.a[1])*r)]}var rh=(t,e)=>({height:t>=e-.005?null:Math.max(.05,t)});function oh(t,e){return{id:D("hole"),type:"stairwell",x:Q((t[0]+e[0])/2),z:Q((t[1]+e[1])/2),w:Q(e[0]-t[0]),d:Q(e[1]-t[1]),h:.02,rotation:0,variant:null}}var ih=t=>({id:D("outdoor"),type:"lawn",points:t.map(([e,n])=>[Q(e),Q(n)])});function sh(t,e,n){t.points.splice(e+1,0,[Q(n[0]),Q(n[1])])}function ah(t,e){return t.points.length<=3||e<0||e>=t.points.length?!1:(t.points.splice(e,1),!0)}var lh=t=>({...t,id:D("outdoor"),points:t.points.map(([e,n])=>[Q(e+.5),Q(n+.5)])});function oa(t,e,n,r){let[o,i,s]=Je(t),a=e.floors.filter(u=>u.elevation>n.elevation).sort((u,h)=>u.elevation-h.elevation)[0],l=t==="stairs"?Q(a?a.elevation-n.elevation:n.height+.25):s,c={id:D("furniture"),type:t,x:Q(r[0]),z:Q(r[1]),rotation:0,w:o,d:i,h:l,variant:null};return t==="stairs"&&(c.stair={...st}),c}var ch=t=>({...structuredClone(t),id:D("furniture"),x:Q(t.x+.3),z:Q(t.z+.3)}),uh=(t,e)=>Kb(t,e);function dh(t){let[e,n,r]=Je("parking");return{id:D("furniture"),type:"parking",x:t.x,z:t.z,rotation:t.rotation,w:Math.max(e,Q(t.w+.5)),d:Math.max(n,Q(t.d+.4)),h:r,variant:null,vehicle:t.type,...t.name?{name:t.name}:{}}}function hh(t,e){let[n,r,o]=Je(e);return{id:D("furniture"),type:e,x:t.x,z:t.z,rotation:t.rotation??0,w:n,d:r,h:o,variant:null,entity:t.entity_id,name:t.name??null,animations_enabled:t.animations_enabled,effect_animations:structuredClone(t.effect_animations),...t.locked?{locked:!0}:{}}}var ph=(t,e)=>({entity_id:e,x:t.x,z:t.z,y:null,rotation:t.rotation,animations_enabled:t.animations_enabled,effect_animations:structuredClone(t.effect_animations),...t.name?{name:t.name}:{}});function fh(t,e){for(let n of t.floors)n.placements=n.placements.filter(r=>r.entity_id!==e),n.furniture=n.furniture.filter(r=>!(le(r.type)&&r.entity===e))}function ia(t,e,n,r){let o=new Set(r);for(let s of t.floors)s.placements=s.placements.filter(a=>!o.has(a.entity_id)),s.furniture=s.furniture.filter(a=>!(le(a.type)&&a.entity&&o.has(a.entity)));let i=[...e.placements.map(s=>[s.x,s.z]),...e.furniture.filter(s=>le(s.type)).map(s=>[s.x,s.z])];for(let s of Wc(n,r,i)){if(!s.entity_id.startsWith("light.")){e.placements.push(s);continue}let[a,l,c]=je.lamp_ceiling;e.furniture.push({id:D("furniture"),type:"lamp_ceiling",x:s.x,z:s.z,rotation:0,w:a,d:l,h:c,variant:null,entity:s.entity_id,power:null})}}function mh(t){let[e,n]=_e(t.points);return[Q(e),Q(n)]}function gh(t,e,n,r){let o=Math.min(n,t)/2,i=r>0?Math.round(e/r)*r:e;return Q(Math.min(t-o,Math.max(o,i)))}function _h(t,e){let n=pn[e],r=fn(t)===e?{}:{width:n.width};return{type:n.type,leaves:n.leaves,sill:n.sill,height:n.height,style:n.style??null,opens:n.opens??null,...r}}function bh(t,e,n){let r=ce(t.points),{x0:o,z0:i,x1:s,z1:a}=r;return e==="x"?[o,s]=[n,n+(s-o)]:e==="z"?[i,a]=[n,n+(a-i)]:e==="w"?s=o+Math.max(.1,n):a=i+Math.max(.1,n),[[o,i],[s,i],[s,a],[o,a]].map(([l,c])=>[Q(l),Q(c)])}function Xo(t,e,n){if(!t.admin)return g;let r=n.edit?.key===e;return m`<button class="nf-btn" aria-pressed=${r} title=${t.t("arc_hint")} @click=${()=>n.setEdit(r?null:{key:e,bulge:.5,error:null})}>
    ◠ ${t.t("arc")}
  </button>`}function Qo(t,e,n){let r=n.edit;if(!t.admin||r?.key!==e)return g;let o=t.t;return m`<span class="nf-wide nf-split-row" title=${o("arc_bulge_hint")}
      >${A(t,o("arc_bulge"),r.bulge,i=>n.setEdit({...r,bulge:i,error:null}),.05)}
      <button class="nf-btn nf-primary" ?disabled=${Math.abs(r.bulge)<.01} @click=${()=>n.apply(r)}>${o("arc_apply")}</button></span
    >
    ${r.error?m`<p class="nf-sub nf-wide nf-notice">${r.error}</p>`:g}`}var Jo=(t,e,n)=>Math.min(e,Math.max(t,fe(n)));function sa(t,e,n){let r=t.t,o=l=>n.update(l),i=ce(e.points),s=ec.map(l=>[l,r(`out_${l}`)]),a=tc.map(l=>[l,r(`slope_${l.replace("-","n")}`)]);return m`<section>
    <div class="nf-h3row"><h3>${r("outdoor")}</h3>${n.lockButton}</div>
    <div class="nf-form">
      ${O(t,r("outdoor_type"),e.type,s,l=>o({type:l}),{wide:!0})}
      ${O(t,r("area"),e.area_id??"",[["",r("no_area")],...Object.values(t.hass?.areas??{}).sort((l,c)=>l.name.localeCompare(c.name)).map(l=>[l.area_id,l.name])],l=>o({area_id:l||null}),{wide:!0,title:r("outdoor_area_hint")})}
      ${e.type==="pool"||e.type==="wild"||e.type==="bed"?m`${T(t,r("pool_temp"),e.temp_entity??null,void 0,W(t.hass,l=>l.startsWith("sensor.")&&t.hass?.states[l]?.attributes.device_class==="temperature"),l=>o({temp_entity:l&&l!=="none"?l:null}))}
          ${T(t,r("pool_pump"),e.pump_entity??null,void 0,W(t.hass,l=>/^(switch|fan|valve|input_boolean|binary_sensor)\./.test(l)),l=>o({pump_entity:l&&l!=="none"?l:null}))}`:g}
      ${mn(e.points)?m`${A(t,r("x"),i.x0,l=>n.setRectangle("x",l))} ${A(t,r("z"),i.z0,l=>n.setRectangle("z",l))}
          ${A(t,r("width"),i.x1-i.x0,l=>n.setRectangle("w",l),.01,.1)} ${A(t,r("depth"),i.z1-i.z0,l=>n.setRectangle("d",l),.01,.1)}`:g}
      ${Ni(e.type)?A(t,r("outdoor_height"),e.height??Bi[e.type],l=>o({height:Jo(.1,6,l)}),.05,.1):g}
      ${A(t,r("outdoor_offset"),e.offset??0,l=>o({offset:Jo(-10,10,l)||null}),.05)}
      ${e.type!=="pool"?m`${A(t,r("outdoor_slope"),e.slope??0,l=>o({slope:Jo(0,20,l)||null}),.05,0)}
          ${O(t,r("outdoor_slope_dir"),e.slope_dir??"x",a,l=>o({slope_dir:l}))}`:g}
      ${L(t,r("outdoor_outline"),e.outline!==!1,l=>o({outline:l?void 0:!1}),{title:r("outdoor_outline_hint")})}
      ${e.type==="fence"||e.type==="pergola"?L(t,r("outdoor_open"),!!e.open,l=>o({open:l||void 0}),{title:r("outdoor_open_hint")}):g}
      ${e.type==="pergola"?L(t,r("outdoor_bracing"),!!e.bracing,l=>o({bracing:l||void 0})):g}
      ${L(t,r("outdoor_cut"),oc(e),l=>o({cut:l===(e.type==="pool")?void 0:l}),{title:r("outdoor_cut_hint")})}
    </div>
    ${t.admin?m`<div class="nf-actions">
            ${e.points.map((l,c)=>m`<button class="nf-chip" title=${r("delete_point")} ?disabled=${e.points.length<=3} @click=${()=>n.removeCorner(c)}>${c+1} ×</button>`)}
          </div>
          ${M(r("outdoor_corners_hint"))}`:g}
    ${e.slope?M(r("outdoor_slope_hint")):g} ${M(r("outdoor_hint"))}
    ${t.admin?m`<div class="nf-actions"><button class="nf-btn" @click=${()=>n.duplicate()}>${r("duplicate")}</button><button class="nf-btn nf-danger" @click=${()=>n.remove()}>${r("delete")}</button></div>`:g}
  </section>`}var Gb=[["up","\u2191"],["left","\u2190"],["right","\u2192"],["down","\u2193"]],Ub={ArrowRight:"right",ArrowLeft:"left",ArrowUp:"up",ArrowDown:"down"};function yh(t,e,n){let r=t.t,{draft:o}=e,i=h=>G(t.hass,h,2),[s,a]=[o[0],o[o.length-1]],l=s&&o.length>1?Math.hypot(a[0]-s[0],a[1]-s[1]):0,c=h=>{let p=Ub[h.key];p?(h.preventDefault(),n.step(p)):h.key==="Enter"&&n.close()},u=s?m`${M(r("measure_from",{x:i(s[0]),z:i(s[1])}))}
        <div class="nf-form">
          <label class="nf-field nf-wide"
            >${r("measure_length")}
            <input class="nf-measure-input" type="number" inputmode="decimal" step="0.01" min="0.05" .value=${String(e.length)} @input=${h=>n.setLength(Number.parseFloat(h.target.value.replace(",","."))||0)} @keydown=${c} />
          </label>
          <div class="nf-arrows nf-wide">${Gb.map(([h,p])=>m`<button class="nf-btn nf-arrow-${h}" title=${r(`dir_${h}`)} @click=${()=>n.step(h)}>${p}</button>`)}</div>
        </div>
        ${o.length>1?m`<ol class="nf-measure-list">${o.slice(1).map((h,p)=>m`<li>${i(Math.hypot(h[0]-o[p][0],h[1]-o[p][1]))} m</li>`)}</ol>`:g}
        <div class="nf-actions">
          <button class="nf-btn nf-primary" ?disabled=${o.length<3} @click=${()=>n.close()}>${r("measure_close")}</button>
          <button class="nf-btn" ?disabled=${o.length<2} @click=${()=>n.undo()}>${r("measure_undo")}</button>
        </div>
        ${o.length>=3?M(r("measure_gap",{gap:i(l)})):g}`:M(r("measure_start"));return m`<section>
    <h3>${r("measure")}</h3>
    ${u}
    <h4 class="nf-lib-head">${r("rect_by_size")}</h4>
    <div class="nf-form">
      ${A(t,r("width"),e.rectSize[0],h=>n.setRectSize([Math.max(.1,h),e.rectSize[1]]),.01,.1)}
      ${A(t,r("depth"),e.rectSize[1],h=>n.setRectSize([e.rectSize[0],Math.max(.1,h)]),.01,.1)}
      <button class="nf-btn nf-wide" @click=${()=>n.addRectangle()}>${r("rect_add")}</button>
    </div>
    ${M(r("measure_hint"))}
  </section>`}function aa(t,e,n){let r=t.t,o=t.floor?.height??2.5,i=Math.hypot(e.b[0]-e.a[0],e.b[1]-e.a[1]);return m`<section>
    <div class="nf-h3row"><h3>${r("free_wall")}</h3>${n.lockButton}</div>
    <div class="nf-form">
      ${A(t,r("wall_length"),i,s=>n.update({b:nh(e,s)}),.01,.1)}
      ${A(t,r("wall_thickness"),e.thickness??t.doc.settings.wall_interior,s=>n.update({thickness:Jo(.02,1,s)}),.01,.02)}
      ${A(t,r("wall_height"),e.height??o,s=>n.update(rh(s,o)),.05,.05)}
    </div>
    ${t.admin?m`<div class="nf-actions">${Xo(t,`wall:${e.id}`,n.arc)}<button class="nf-btn nf-danger" @click=${()=>n.remove()}>${r("delete")}</button></div>`:g}
    <div class="nf-form">${Qo(t,`wall:${e.id}`,n.arc)}</div>
    ${M(r("free_wall_hint"))}
  </section>`}var Ft=t=>Math.round(t*1e3)/1e3,jb=2.4;function wh(t,e,n){let r=ws(t,e[0],e[1],n[0],n[1]),o=r===null,i=Math.min(...t.floors.map(l=>l.elevation)),s=Ft(r??i+jb),a=o?6:t.settings.roof.pitch||35;return{id:D("roof"),x0:Ft(e[0]),z0:Ft(e[1]),x1:Ft(n[0]),z1:Ft(n[1]),shape:o?"pent":"gable",axis:n[0]-e[0]>=n[1]-e[1]?"x":"z",eave_a:s,eave_b:s,pitch_a:a,pitch_b:a,base:s,overhang:o?.15:null,...o?{open:!0}:{}}}function vh(t){let e=n=>Ft(n+1);return{...structuredClone(t),id:D("roof"),x0:e(t.x0),x1:e(t.x1),z0:e(t.z0),z1:e(t.z1)}}var kh=(t,e)=>t.findIndex(n=>n.id===e)+1;function la(t){return t.points&&t.points.length>=3?t.points.map(([e,n])=>[e,n]):t.rotation?ur(t):[[t.x0,t.z0],[t.x1,t.z0],[t.x1,t.z1],[t.x0,t.z1]]}function xh(t,e,n){let r=la(t);r.splice(e+1,0,[Ft(n[0]),Ft(n[1])]),t.points=r,Object.assign(t,Mt(r))}function $h(t,e){return!t.points||t.points.length<=3||e<0||e>=t.points.length?!1:(t.points.splice(e,1),Object.assign(t,Mt(t.points)),!0)}var Zb={light:"M8.5 17.5h7M9.5 20.5h5M12 2.5a6.5 6.5 0 0 0-3.5 12v1.5h7V14.5A6.5 6.5 0 0 0 12 2.5z",switch:"M6 5h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM12 7.5v9M9 12h6",fan:"M12 11.5c-1-3.5 0-7 2.5-7s2 4-2.5 7zm.5.5c3.5-1 7 0 7 2.5s-4 2-7-2.5zm-.5.5c1 3.5 0 7-2.5 7s-2-4 2.5-7zm-.5-.5c-3.5 1-7 0-7-2.5s4-2 7 2.5z",cover:"M3.5 3.5h17v3h-17zM6 6.5v12M18 6.5v12M8.5 9.5h7M8.5 12.5h7M8.5 15.5h7",climate:"M12 15V5.5a2.5 2.5 0 0 0-5 0V15a4.5 4.5 0 1 0 5 0zM9.5 9v7M15 5.5h5M15 9.5h4",media:"M3.5 5.5h17v11h-17zM8 20.5h8M12 16.5v4M10 8.5v5l4.5-2.5z",lock:"M5.5 10.5h13v9.5h-13zM8 10.5V7.5a4 4 0 0 1 8 0v3M12 14v3",sensor:"M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM12 7.5v4.5l3.5 2",binary:"M5.5 20.5v-17h10v17M3.5 20.5h14M9 20.5v-13h4.5v13M12.5 14h.01",scene:"M5.5 18.5l8-8M14 3.5l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1zM18.5 12l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z",script:"M8.5 3.5h8.5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H7.5a2 2 0 0 1-2-2v-2h9M8.5 3.5a2 2 0 0 0-2 2v10M9.5 8.5h6M9.5 11.5h4"},zt=t=>Zb[t];function ei(t,e){let n=new Set;for(let r of t?.placements??[])H([r.x,r.z],e.points)&&n.add(r.entity_id);for(let r of t?.furniture??[])le(r.type)&&r.entity&&H([r.x,r.z],e.points)&&n.add(r.entity);return n}function Sh(t,e){let n=new Map;for(let r of t.floors){let o=[...r.placements.map(i=>[i.entity_id,i.x,i.z]),...r.furniture.filter(i=>le(i.type)&&i.entity).map(i=>[i.entity,i.x,i.z])];for(let[i,s,a]of o){let l=r.rooms.find(c=>H([s,a],c.points));l&&l.id!==e.id&&n.set(i,l.name)}}return n}var Mh=(t,e)=>(t??[]).includes(e)?(t??[]).filter(n=>n!==e):[...t??[],e];function ti(t,...e){let n=t.trim().toLowerCase();return!n||e.some(r=>(r??"").toLowerCase().includes(n))}function Eh(t,e){return t.map(n=>({o:n,r:e(n.id)})).sort((n,r)=>n.r-r.r).map(({o:n})=>n)}function Rh(t,e){let n=e,r=0;return{taken:t.map(i=>{let s=i.ids.slice(0,Math.max(0,n));return n-=s.length,r+=i.ids.length-s.length,[...s]}),left:r}}var ca=50;function ua(t,e,n,r,o,i,s){let a=e.includes(n);return m`<button class="nf-pin ${a?"nf-pin-on":""}" aria-pressed=${a} title=${t.t(a?i[0]:i[1])} @click=${()=>s.patchRoom({[r]:Mh(e,n)})}>${a?o[0]:o[1]}</button>`}function qb(t,e,n,r,o,i){let[s,a,l]=[e.hidden??[],e.no_state??[],e.panel??[]];return(c,u=!1,h=o)=>{let p=n.has(c),d=p?void 0:r.get(c),f=s.includes(c),_=Rn(t,c);return m`<div class="nf-row nf-dev-row ${u?"nf-dev-extra":""} ${f?"nf-dev-hidden":""}">
      <button class="nf-dev-name ${p?"":"nf-muted"}" ?disabled=${!p} @click=${()=>i.select(c)}>
        ${_?m`<ha-icon class="nf-dev-icon" style="--mdc-icon-size:16px" .icon=${_}></ha-icon>`:m`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${zt((t.hass?Oe(t.hass,c):Z(c))??"sensor")} /></svg>`}
        <span>${N(t.hass,c,h)}${d?m`<small class="nf-muted"> · ${t.t("devices_placed_in",{room:d})}</small>`:g}</span>
      </button>
      ${t.admin?ua(t,s,c,"hidden",["\u{1F648}","\u{1F441}"],["panel_unhide","panel_hide"],i):g}
      ${t.admin&&!f?ua(t,a,c,"no_state",["\u2205","Aa"],["panel_state_show","panel_state_hide"],i):g}
      ${t.admin&&!p?ua(t,l,c,"panel",["\u2605","\u2606"],["panel_unpin","panel_pin"],i):g}
      ${t.admin?p?m`<button class="nf-link" @click=${()=>i.remove(c)}>${t.t("devices_remove")}</button>`:m`<button class="nf-link" @click=${()=>i.place([c])}>${t.t("devices_place")}</button>`:g}
    </div>`}}function Yb(t,e,n,r,o){let{hass:i}=t;if(!i)return m``;let s=u=>u>0?M(t.t("devices_narrow",{n:u})):g,a=M(t.t("devices_none")),l=e.deviceQuery;if(o==="other"){let u=Ac(i,n.area_id).map(f=>({...f,ids:f.ids.filter(_=>ti(l,`${N(i,_,f.name)} ${_} ${f.name}`))})),{taken:h,left:p}=Rh(u,ca),d=u.map((f,_)=>h[_].length>0?m`<div class="nf-dev-area">${f.name}</div>${h[_].map(y=>r(y,!1,f.name))}`:g);return h.some(f=>f.length>0)?m`<div class="nf-room-list">${d}</div>${s(p)}`:a}let c=Fc(i).filter(u=>ti(l,`${N(i,u)} ${u} `));return c.length>0?m`<div class="nf-room-list">${c.slice(0,ca).map(u=>r(u))}</div>${s(c.length-Math.min(c.length,ca))}`:a}function Xb(t,e,n,r,o,i,s){let{hass:a}=t,l=a?be(a,n).filter(b=>vt(Oe(a,b))):[];if(!n.area_id)return M(t.t("devices_none_area"));if(l.length===0)return M(t.t("devices_none"));let c=a?_n(a,l):[],u=c.map(b=>b.primary).filter(b=>!o.has(b)),h=e.deviceQuery,p=(t.floor?.placements??[]).filter(b=>Z(b.entity_id)==="light"&&(b.mount??"ceiling")==="ceiling"&&H([b.x,b.z],n.points)).length,d=m`<input class="nf-search" type="search" placeholder=${t.t("devices_search")} .value=${h} @input=${b=>e.deviceQuery=b.target.value} />`,f=b=>ti(h,N(a,b,i),b),_=b=>{let v=b.others.filter(f),w=e.isUnfolded(b.primary)||!!h.trim()&&v.length>0;return!f(b.primary)&&v.length===0?g:m`${r(b.primary)}
      ${b.others.length>0?m`<button class="nf-more" @click=${()=>e.toggleUnfolded(b.primary)}>${w?t.t("devices_less"):t.t("devices_more",{n:b.others.length})}</button>`:g}
      ${w?(h.trim()?v:b.others).map(x=>r(x,!0)):g}`},y=()=>s.confirm(t.t("devices_place_all_confirm",{n:u.length}))&&s.place(u);return m`${t.admin&&p>=2?m`<button class="nf-btn nf-wide-btn" @click=${()=>s.spreadLights(n)}>${t.t("lights_spread")}</button>`:g}
    ${l.length>8?d:g}
    <div class="nf-room-list">${c.map(_)}</div>
    ${t.admin&&u.length>1?m`<button class="nf-link nf-place-all" @click=${y}>${t.t("devices_place_all_n",{n:u.length})}</button>`:g}
    ${M(t.t("devices_hint"))}`}function da(t,e,n,r){let{hass:o}=t,i=n.area_id?o?.areas?.[n.area_id]?.name:void 0,s=ei(t.floor,n),a=qb(t,n,s,Sh(t.doc,n),i,r),l=t.admin?e.deviceSource:"area",c=o?_n(o,be(o,n).filter(p=>vt(Oe(o,p)))).length:0,u=[["area",`${t.t("devices_src_area")}${c>0?` (${c})`:""}`],["other",t.t("devices_src_other")],["none",t.t("devices_src_none")]],h=m`<input class="nf-search" type="search" placeholder=${t.t("devices_search")} .value=${e.deviceQuery} @input=${p=>e.deviceQuery=p.target.value} />`;return m`<section>
    <h3>${t.t("devices")}</h3>
    ${M(t.t("devices_panel_hint"))}
    ${t.admin?m`<div class="nf-seg nf-dev-source">${u.map(([p,d])=>m`<button aria-pressed=${l===p} @click=${()=>e.deviceSource=p}>${d}</button>`)}</div>`:g}
    ${l!=="area"?m`${h}${Yb(t,e,n,a,l)}`:Xb(t,e,n,a,s,i,r)}
  </section>`}function Ah(t,e,n){let{hass:r}=t;if(!r)return g;let o=!!e.climate&&Object.values(e.climate).some(a=>a!=null),i=(a,l)=>{let c={...e.climate??{},[a]:l};n({climate:Object.values(c).every(u=>u==null)?null:c})},s=(a,l)=>{let c=zc(r,t.floor??null,{...e,climate:null},a),u=W(r,y=>de(y)&&r.states[y]?.attributes.device_class===os[a]),h=Eh(u,y=>($t(r,y)===e.area_id?0:1)+(is(r,y)?0:2)),p=[e.climate?.[a]??null].flat(),d=y=>{let b=y.filter(v=>!!v&&v!=="none");i(a,y[0]==="none"?"none":b.length>1?b:b[0]??null)},_=p[0]&&p[0]!=="none"?[...p,null]:p;return _.map((y,b)=>T(t,b?t.t("climate_more"):l,y,b?void 0:c[0]??null,h,v=>d(_.map((w,x)=>x===b?v:w))))};return m`<details class="nf-points" ?open=${o}>
    <summary>${t.t("climate")}</summary>
    <div class="nf-form">${s("temperature",t.t("climate_temperature"))} ${s("humidity",t.t("climate_humidity"))} ${s("co2",t.t("climate_co2"))}</div>
    ${M(t.t("climate_hint"))}
  </details>`}var ha="metric",zh=t=>{ha=t==="imperial"?"imperial":"metric"};var Fh=.3048;function he(t,e,n=2,r=ha){if(r==="metric")return`${G(t,e,n)} m`;let o=e<0?"\u2212":"",i=Math.round(Math.abs(e)/.0254*2),s=Math.floor(i/24),a=i-s*24,l=`${Math.floor(a/2)}${a%2?"\xBD":""}`;return s?`${o}${s}\u2032 ${l}\u2033`:`${o}${l}\u2033`}function Ee(t,e,n=ha){return n==="metric"?`${G(t,e,1)} m\xB2`:`${G(t,e/(Fh*Fh),0)} ft\xB2`}var Qb=.15,Jb=(t,e)=>Math.abs((t-e+540)%360-180);function ey(t,e,n,r){return t.rooms.some(o=>o.id!==e.id&&o.points.some((i,s)=>{let a=o.points[(s+1)%o.points.length];return Math.abs(Y(K(i,n),r))<.02&&Math.abs(Y(K(a,n),r))<.02}))}function fa(t,e,n,r){let o=e.points,[i,s]=[o[n],o[(n+1)%o.length]],a=me(K(s,i)),l=ge(o)>=0?1:-1,c=[(s[0]-i[0])/a,(s[1]-i[1])/a],u=[-c[1]*l||0,c[0]*l||0],h=c[0]*u[1]-c[1]*u[0]>0,p=e.wall_heights?.[n],d=e.ceiling??t.height,f=typeof p=="number"?p:Array.isArray(p)?Math.max(...p.map(b=>b??d)):d,_=e.wall_slopes?.[n],y=typeof _=="number"&&typeof p=="number"?_:f;return{origin:h?i:s,along:h?c:[-c[0],-c[1]],normal:u,length:a,face:ey(t,e,i,u)?r/2:0,heightLeft:h?f:y,heightRight:h?y:f}}function pa(t,e){let n=K(e,t.origin);return{u:Y(n,t.along),depth:Y(n,t.normal)-t.face}}function ty(t,e){let n=t.rooms.find(s=>s.id===e.room_id);if(!n||e.wall)return null;let[r,o]=[n.points[e.edge],n.points[(e.edge+1)%n.points.length]];if(!r||!o)return null;let i=me(K(o,r))||1;return[r[0]+(o[0]-r[0])*e.offset/i,r[1]+(o[1]-r[1])*e.offset/i]}var Ph=t=>U(t.type)?.mount==="wall"||t.type==="lamp_wall"||t.mount_y!=null;function Th(t,e,n){let r=[];for(let i of t.openings){let s=ty(t,i);if(!s)continue;let{u:a,depth:l}=pa(n,s);Math.abs(l+n.face)>.3||a<-.01||a>n.length+.01||r.push({id:i.id,kind:"opening",type:i.type,x0:a-i.width/2,x1:a+i.width/2,y0:i.sill,y1:i.sill+i.height,lifts:i.type==="window"})}let o=Math.atan2(-n.normal[0],n.normal[1])*180/Math.PI;for(let i of t.furniture){if(!H([i.x,i.z],e.points)||Jb(i.rotation,o)>20)continue;let{u:s,depth:a}=pa(n,[i.x,i.z]);if(a-i.d/2>Qb||s<0||s>n.length)continue;let l=un(t,i);r.push({id:i.id,kind:"furniture",type:i.type,x0:s-i.w/2,x1:s+i.w/2,y0:l,y1:l+i.h,lifts:Ph(i)})}return r.sort((i,s)=>+(i.kind==="furniture")-+(s.kind==="furniture")||i.x0-s.x0)}var Vr=t=>Math.round(t*1e3)/1e3;function Ih(t,e,n,r){let o=pa(t,[e.x,e.z]).depth,i=Math.min(t.length-e.w/2,Math.max(e.w/2,n+e.w/2)),s=[t.origin[0]+t.along[0]*i+t.normal[0]*(o+t.face),t.origin[1]+t.along[1]*i+t.normal[1]*(o+t.face)];return{x:Vr(s[0]),z:Vr(s[1]),...r!==null&&Ph(e)?{mount_y:Vr(Math.max(0,r))}:{}}}function Dh(t,e,n,r,o){let[i]=[e.points[n.edge]],s=Math.min(t.length-n.width/2,Math.max(n.width/2,r+n.width/2)),a=me(K(i,t.origin))<1e-6?s:t.length-s;return{offset:Vr(a),...o!==null&&n.type==="window"?{sill:Vr(Math.max(0,o))}:{}}}var Oh=.01,Lh=t=>Math.round(t/Oh)*Oh,ma=class extends ie{static properties={host:{attribute:!1},doc:{attribute:!1},roomId:{},edge:{type:Number},_sel:{state:!0},_drag:{state:!0}};constructor(){super(),this._sel=null,this._drag=null}get room(){return this.host.floor?.rooms.find(e=>e.id===this.roomId)}frame(){let e=this.room;return e&&this.host.floor?fa(this.host.floor,e,this.edge,this.host.doc.settings.wall_interior):null}boxes(){let e=this.room,n=this.frame();return e&&n&&this.host.floor?Th(this.host.floor,e,n):[]}place(e,n,r){let o=this.room,i=this.frame();!o||!i||this.host.change((s,a)=>{if(e.kind==="furniture"){let l=a.furniture.find(c=>c.id===e.id);l&&Object.assign(l,Ih(i,l,n,e.lifts?r:null))}else{let l=a.openings.find(u=>u.id===e.id),c=a.rooms.find(u=>u.id===l?.room_id);l&&c&&Object.assign(l,Dh(c.id===o.id?i:fa(a,c,l.edge,this.host.doc.settings.wall_interior),c,l,n,e.lifts?r:null))}})}toWall(e){let r=this.renderRoot.querySelector("svg").getScreenCTM()?.inverse();if(!r)return[0,0];let o=new DOMPoint(e.clientX,e.clientY).matrixTransform(r);return[o.x,-o.y]}down(e,n){if(this._sel=n.id,!this.host.admin)return;e.currentTarget.setPointerCapture(e.pointerId);let[r,o]=this.toWall(e);this._drag={id:n.id,x0:n.x0,y0:n.y0,startU:r,startY:o,fromX:n.x0,fromY:n.y0}}move(e,n){let r=this._drag;if(!r||r.id!==n.id)return;let[o,i]=this.toWall(e),s=this.frame(),a=n.x1-n.x0,l=Math.min((s?.length??0)-a,Math.max(0,Lh(r.fromX+o-r.startU))),c=n.lifts?Math.max(0,Lh(r.fromY+i-r.startY)):r.fromY;this._drag={...r,x0:l,y0:c}}up(e){let n=this._drag;this._drag=null,!(!n||n.id!==e.id||Math.abs(n.x0-n.fromX)<1e-6&&Math.abs(n.y0-n.fromY)<1e-6)&&this.place(e,n.x0,n.y0)}nameOf(e){if(e.kind==="furniture")return this.host.floor?.furniture.find(o=>o.id===e.id)?.name||Ne(this.host.hass,e.type);let n=this.host.floor?.openings.find(r=>r.id===e.id);return n?this.host.t(`preset_${fn(n)}`):e.type}updated(e){(e.has("edge")||e.has("roomId"))&&(this._sel=null)}render(){let e=this.host.t,n=this.room,r=this.frame();if(!n||!r)return g;let o=n.points.length,i=d=>he(this.host.hass,d),s=this.boxes().map(d=>this._drag?.id===d.id?{...d,x1:this._drag.x0+(d.x1-d.x0),y1:this._drag.y0+(d.y1-d.y0),x0:this._drag.x0,y0:this._drag.y0}:d),a=Math.max(r.heightLeft,r.heightRight,...s.map(d=>d.y1)),l=.35,c=`${-l} ${-(a+l)} ${r.length+2*l} ${a+2*l+.25}`,u=s.find(d=>d.id===this._sel)??null,h=d=>{let f=Math.min(.14,Math.max(.07,(d.x1-d.x0)/7));return E`<text x=${(d.x0+d.x1)/2} y=${-(d.y0+d.y1)/2} font-size=${f} text-anchor="middle" dominant-baseline="middle">${this.nameOf(d)}</text>`},p=u?E`<g class="dim">
          <line x1="0" x2=${u.x0} y1=${-(u.y0+u.y1)/2} y2=${-(u.y0+u.y1)/2} />
          <text x=${u.x0/2} y=${-(u.y0+u.y1)/2-.06} text-anchor="middle" font-size="0.11">${i(u.x0)}</text>
          <line x1=${u.x1} x2=${r.length} y1=${-(u.y0+u.y1)/2} y2=${-(u.y0+u.y1)/2} />
          <text x=${(u.x1+r.length)/2} y=${-(u.y0+u.y1)/2-.06} text-anchor="middle" font-size="0.11">${i(r.length-u.x1)}</text>
          ${u.y0>.005?E`<line x1=${(u.x0+u.x1)/2} x2=${(u.x0+u.x1)/2} y1="0" y2=${-u.y0} /><text x=${(u.x0+u.x1)/2+.05} y=${-u.y0/2} font-size="0.11">${i(u.y0)}</text>`:g}
        </g>`:g;return m`<div class="backdrop" @click=${d=>d.target===d.currentTarget&&this.close()}>
      <div class="sheet" role="dialog" aria-label=${e("wall_view")}>
        <header>
          <b>${e("wall_view")} · ${n.name||e("room")} · ${e("wall_n",{a:this.edge+1,b:(this.edge+1)%o+1})}</b>
          <span class="muted">${i(r.length)}</span>
          <span class="grow"></span>
          <button aria-label=${e("wall_view_prev")} title=${e("wall_view_prev")} @click=${()=>this.edge=(this.edge-1+o)%o}>‹</button>
          <button aria-label=${e("wall_view_next")} title=${e("wall_view_next")} @click=${()=>this.edge=(this.edge+1)%o}>›</button>
          <button aria-label=${e("close")} @click=${()=>this.close()}>✕</button>
        </header>
        <svg viewBox=${c} preserveAspectRatio="xMidYMid meet" @pointerdown=${d=>d.target===d.currentTarget&&(this._sel=null)}>
          <polygon class="wall" points=${`0,0 ${r.length},0 ${r.length},${-r.heightRight} 0,${-r.heightLeft}`} />
          <line class="floor" x1=${-l} x2=${r.length+l} y1="0" y2="0" />
          ${s.map(d=>E`<g class="box ${d.kind} ${d.type} ${d.id===this._sel?"sel":""} ${this.host.admin?"movable":""}"
              @pointerdown=${f=>this.down(f,d)}
              @pointermove=${f=>this.move(f,d)}
              @pointerup=${()=>this.up(d)}
              @pointercancel=${()=>this._drag=null}>
              <rect x=${d.x0} y=${-d.y1} width=${Math.max(.01,d.x1-d.x0)} height=${Math.max(.01,d.y1-d.y0)} rx="0.02" />
              ${h(d)}
            </g>`)}
          ${p}
        </svg>
        <footer>
          ${u?m`<b>${this.nameOf(u)}</b>
                <label
                  >${e("wall_view_left")}
                  <input type="number" step="0.01" min="0" .value=${u.x0.toFixed(2)} ?disabled=${!this.host.admin} @change=${d=>this.place(u,Number(d.target.value),u.y0)}
                /></label>
                ${u.lifts?m`<label
                      >${e(u.kind==="opening"?"sill":"wall_view_height")}
                      <input type="number" step="0.01" min="0" .value=${u.y0.toFixed(2)} ?disabled=${!this.host.admin} @change=${d=>this.place(u,u.x0,Number(d.target.value))}
                    /></label>`:g}`:m`<span class="muted">${e("wall_view_hint")}</span>`}
        </footer>
      </div>
    </div>`}close(){this.dispatchEvent(new CustomEvent("close"))}static styles=ae`
    .backdrop {
      position: fixed;
      inset: 0;
      z-index: 30;
      display: grid;
      place-items: center;
      background: rgba(0, 0, 0, 0.45);
    }
    .sheet {
      width: min(1100px, calc(100vw - 32px));
      max-height: calc(100vh - 32px);
      display: flex;
      flex-direction: column;
      border-radius: 20px;
      background: var(--nf-bg2, #1b2030);
      color: var(--nf-text, #e8eeff);
      box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5);
      overflow: hidden;
    }
    header,
    footer {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 16px;
      flex-wrap: wrap;
    }
    header button {
      min-width: 36px;
      height: 36px;
      border: 0;
      border-radius: 50%;
      background: rgba(127, 127, 127, 0.16);
      color: inherit;
      font: inherit;
      font-size: 18px;
      cursor: pointer;
    }
    .grow {
      flex: 1;
    }
    .muted {
      color: var(--nf-muted, #9aa5bd);
      font-size: 13px;
    }
    svg {
      width: 100%;
      height: min(60vh, 560px);
      touch-action: none;
      user-select: none;
    }
    .wall {
      fill: rgba(127, 140, 170, 0.12);
      stroke: var(--nf-accent, #37e0ff);
      stroke-width: 0.015;
    }
    .floor {
      stroke: var(--nf-muted, #9aa5bd);
      stroke-width: 0.02;
    }
    .box rect {
      fill: rgba(91, 124, 255, 0.28);
      stroke: #8aa2ff;
      stroke-width: 0.012;
    }
    .box.opening rect {
      fill: rgba(10, 14, 24, 0.85);
      stroke: var(--nf-muted, #9aa5bd);
    }
    .box.window rect {
      fill: rgba(55, 224, 255, 0.16);
    }
    .box.sel rect {
      stroke: var(--nf-accent, #37e0ff);
      stroke-width: 0.025;
    }
    .box.movable {
      cursor: grab;
    }
    .box text {
      fill: var(--nf-text, #e8eeff);
      pointer-events: none;
    }
    .dim line {
      stroke: var(--nf-accent, #37e0ff);
      stroke-width: 0.01;
      stroke-dasharray: 0.04 0.03;
    }
    .dim text {
      fill: var(--nf-accent, #37e0ff);
    }
    footer label {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      color: var(--nf-muted, #9aa5bd);
    }
    footer input {
      width: 80px;
      padding: 6px 8px;
      border-radius: 10px;
      border: 1px solid rgba(127, 127, 127, 0.35);
      background: rgba(0, 0, 0, 0.2);
      color: inherit;
      font: inherit;
    }
  `};customElements.get("nf-wall-view")||customElements.define("nf-wall-view",ma);var ny=new URL(import.meta.url),ry=new URL("./nextfloor-3d.js?v=e2a735c062f7",ny).href,Hh;function en(){return Hh??=import(ry),Hh}var Ch=["lights","seating","tables","storage","beds","kitchen","appliances","bath","media","office","tech","climate","energy","garden","plants","kids","fitness","pets","workshop","music","season","pictures","vehicles","building","decor"],oy={sofa:"seating",armchair:"seating",stool:"seating",chair:"seating",bench:"seating",corner_bench:"seating",bar_stool:"seating",office_chair:"office",coffee_table:"tables",table:"tables",table_round:"tables",desk:"office",worktop:"kitchen",tv_board:"media",tv_wall:"media",sideboard:"storage",shelf:"storage",tall_cabinet:"storage",wardrobe:"storage",dresser:"storage",nightstand:"beds",coat_rack:"storage",plant:"plants",rug:"decor",kitchen:"kitchen",kitchen_wall:"kitchen",kitchen_tall:"kitchen",island:"kitchen",sink:"kitchen",stove:"kitchen",dishwasher:"appliances",fridge:"appliances",washer:"appliances",dryer:"appliances",robot_vacuum:"appliances",bed:"beds",bunk_bed:"beds",bathtub:"bath",shower:"bath",wc:"bath",washbasin:"bath",radiator:"climate",stairs:"building",parking:"vehicles",ceiling_fan:"lights"},iy=[[/xmas|advent|window_star|candle_arch|reindeer|pumpkin|easter|snowman|gift_pile|lights_outdoor/,"season"],[/^frame_|^canvas$|^poster$|picture_ledge/,"pictures"],[/piano|drum_kit|guitar|synth|mic_stand|vinyl|easel|studio_monitor|mixing_desk/,"music"],[/lamp|pendant|light_pillar|light_bars|mood_spot|ceiling_panel|garden_spots|wall_light|light_cove|niche_led|shelf_led|monitor_light|workshop_light|painting_light|cabinet_light|moon_light|torch|lantern|ceiling_fan_light/,"lights"],[/cat_|dog_|pet_|litter|scratch|hamster|rabbit|bird_cage|small_animal|aquarium|terrarium/,"pets"],[/stairs|steps|landing|rail_|column|pilaster|beam|chimney|glass_wall|sliding_wall|half_wall|platform|niche_shelf|window_seat|divider_slats|gallery/,"building"],[/tree|shrub|conifer|hedge|brush|monstera|plant|herb_garden|herb_planter|flower|raised_bed|greenhouse|ficus|cactus|bonsai|living_wall|vertical_garden/,"plants"],[/kids|toy|teepee|(^|_)play_|rocking_horse|ball_pit|house_bed|cot\b|^cot|crib|changing_table|baby|loft_bed|star_projector|moon_light/,"kids"],[/treadmill|fitness|power_rack|rowing|rower|spin_bike|dumbbell|punching|yoga|elliptical|gym|exercise|wall_bars|bike_trainer|kettlebell|weight_bench|massage_chair/,"fitness"],[/heat_pump|boiler|buffer_tank|manifold|ventilation|radiator|towel_heater|thermostat|air_purifier|humidifier|dehumidifier|tower_fan|ceiling_fan|hot_water|water_softener|water_pump|fireplace|wood_stove|patio_heater|sauna|oil_|expansion_vessel|water_tank|infrared|cold_bath/,"climate"],[/wallbox|inverter|battery|solar|meter|fuse_box|grid/,"energy"],[/workbench|tool_|compressor|drill|tyre|paint_cabinet|heavy_shelf|shelf_rack|garage_opener|workshop|bike_stand|bike_holder|bike_rack|lawn_mower|mower|welder|ev_bike_charger|tool_chest|parts_cabinet/,"workshop"],[/speaker|subwoofer|soundbar|receiver|turntable|record|game_console|multiroom|hifi|cinema|acoustic|bass_trap|popcorn|projector|projection|screen|display_|smart_display|media|tv|arcade|star_ceiling|av_/,"media"],[/desk|office|filing|whiteboard|monitor|bookcase|phone_booth|sim_cockpit|chair_gaming|gaming/,"office"],[/server|nas|router|wifi|access_point|network|printer|filament|tower_pc|smoke_detector|siren|baby_monitor|sunrise_clock|light_switch|socket|co_detector|presence_|water_leak|air_quality|doorbell/,"tech"],[/grill|lounge|lounger|parasol|pergola|hot_tub|fire_bowl|torch|lantern|play_tower|garden|trampoline|sprinkler|valve|rain_barrel|outdoor|hammock|(^|_)pool|swing|bin_box|^bin_|mailbox|rotary_line|kamado|pizza_oven|fire_pit|sandbox|wood_pile|bird_house|cistern|pond|water_feature|beach_chair/,"garden"],[/vanity_\d|vanity_double|double_vanity|basin|bath|shower|toilet|bidet|towel|mirror_cabinet|mirror_round|mirror_80|mirror_led|whirlpool|washer_under|laundry|urinal|wt_\d|handtuch|seife|wc/,"bath"],[/fridge|freezer|dishwasher|washer|dryer|microwave|coffee_machine|kettle|toaster|mixer|oven|steam|vacuum|ironing|drying_rack|trash|water_cooler|drip_tray|espresso|air_fryer|water_bar|thermo_cooker/,"appliances"],[/base_|drawer_|sink|hob|cooker|hood|pantry|kitchen|island|breakfast_bar|wall_\d|wall_glass|wall_corner|row_|spice|cabinet_light|trolley|bar_cart|utility_sink/,"kitchen"],[/bed|boxspring|futon|nightstand|canopy|mattress/,"beds"],[/sofa|chair|armchair|stool|bench|pouf|bean_bag|recliner|wingback|chaise|seat|ektorp|poang|cosy_corner|swing_bench|hanging_chair|nook|floor_cushion|tatami/,"seating"],[/table|dining|coffee_|side_round|lack_|^console$|bekant|alex/,"tables"],[/wardrobe|closet|clothes_rail|chest|dresser|shelf|cabinet|sideboard|lowboard|highboard|kallax|billy|ivar|pax|besta|cube_|coat_stand|shoe_bench|divider|display_cabinet|wall_unit|malm_chest|locker/,"storage"]];function sy(t){if(t.vehicle)return"vehicles";if(t.climate)return"climate";if(!t.type.startsWith("pack:"))return t.lamp?"lights":oy[t.type]??"decor";let e=iy.find(([n])=>n.test(t.id));return e?e[1]:t.lamp?"lights":"decor"}var Wh=[[/k(u|ü)che|kitchen|kochen/,["kitchen","appliances","tables","seating","storage","plants","decor"]],[/wohn|living|lounge|salon/,["seating","tables","storage","media","plants","decor","climate","tech"]],[/\bess|dining/,["tables","seating","storage","plants","decor","media"]],[/schlaf|bed|gast|guest/,["beds","storage","seating","tables","decor","plants","climate","media"]],[/kind|kids|child|baby|spiel|play|nursery/,["kids","beds","storage","seating","tables","decor"]],[/bad|bath|wc|toilet|dusch|shower|sauna/,["bath","appliances","storage","climate","plants"]],[/b(u|ü)ro|office|arbeit|study|work/,["office","tech","storage","seating","tables","plants"]],[/kino|cinema|media|game|gaming|hifi/,["media","seating","tables","storage","office"]],[/fitness|gym|sport|training/,["fitness","media","storage","climate"]],[/garage|carport|stellplatz|parking/,["vehicles","workshop","energy","storage","garden"]],[/werkstatt|workshop|hobby|keller|cellar|basement|lager|storage/,["workshop","storage","appliances","energy","climate","fitness","tech"]],[/hauswirtschaft|hwr|utility|laundry|wasch|technik|heiz|boiler/,["appliances","climate","energy","storage","tech","bath"]],[/flur|diele|hall|entr|eingang|corridor|treppe|stair/,["storage","seating","decor","plants","building"]],[/garten|garden|terrass|terrace|balkon|balcony|patio|hof|yard|pool/,["garden","plants","seating","tables","pets","kids"]]];function ga(t){let e=(t??"").toLowerCase(),n=Wh.find(([r])=>r.test(e));return n?new Set(["lights",...n[1]]):null}function _a(t){let e=(t??"").toLowerCase();return Wh.find(([n])=>n.test(e))?.[1][0]??null}var Bh=t=>t==="garden"||t==="plants"||t==="vehicles",Nh=/_(\d+(?:x\d+)?)$/;function Vh(t){let e=new Map;for(let n of t){let r=sy(n),o=n.type.startsWith("pack:")&&!n.vehicle?n.id.replace(Nh,""):n.id,i=`${n.source}:${o}`,s=e.get(i);s&&s.category===r?s.entries.push(n):e.set(s?`${i}:${n.id}`:i,{key:s?`${i}:${n.id}`:i,category:r,entries:[n]})}for(let n of e.values())n.entries.sort((r,o)=>r.size[0]-o.size[0]||r.size[1]-o.size[1]);return[...e.values()]}function Kh(t,e){let n=o=>Math.round(o*100);return e.some(o=>o!==t&&n(o.size[0])===n(t.size[0]))?Nh.exec(t.id)?.[1]??`${n(t.size[0])}\xD7${n(t.size[2])}`:`${n(t.size[0])}`}function Gh(t,e,n=12){return[e,...t.filter(r=>r!==e)].slice(0,n)}var Uh=t=>t.toLowerCase().normalize("NFD").replace(new RegExp("\\p{M}","gu"),""),jh=t=>Uh(t).split(/\s+/).filter(Boolean),Zh=(t,e)=>{let n=Uh(e);return t.every(r=>n.includes(r))};function qh(){let e=navigator.deviceMemory??8,n=navigator.hardwareConcurrency||8;return e<=3||n<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var Yh=112,ay="nextfloor-thumbs";function ly(t){let e=2166136261;for(let n=0;n<t.length;n++)e=Math.imul(e^t.charCodeAt(n),16777619);return(e>>>0).toString(36)}function ba(t){let e=U(t);return`${t}|${e?ly(JSON.stringify(e)):"b"}|${Yh}`}function cy(){return new Promise(t=>{try{let e=indexedDB.open(ay,1);e.onupgradeneeded=()=>e.result.createObjectStore("thumbs"),e.onsuccess=()=>t(e.result),e.onerror=()=>t(null)}catch{t(null)}})}var ya=class{enabled=!qh();memory=new Map;waiting=new Map;queue=[];db=null;running=!1;packs=[];cached(e){return this.memory.get(ba(e))}get(e){let n=ba(e),r=this.memory.get(n);return r?Promise.resolve(r):new Promise(o=>{let i=this.waiting.get(n);if(i)return void i.push(o);this.waiting.set(n,[o]),this.lookUp(e,n)})}settle(e,n){n&&this.memory.set(e,n);for(let r of this.waiting.get(e)??[])r(n);this.waiting.delete(e)}async lookUp(e,n){this.db??=cy();let r=await this.db,o=r?await new Promise(i=>{try{let s=r.transaction("thumbs").objectStore("thumbs").get(n);s.onsuccess=()=>i(typeof s.result=="string"?s.result:null),s.onerror=()=>i(null)}catch{i(null)}}):null;if(o)return this.settle(n,o);this.queue.push(e),this.pump()}pump(){if(this.running)return;let e=this.queue.shift();if(!e)return;this.running=!0;let n=window.requestIdleCallback;(o=>n?n(o,{timeout:300}):setTimeout(o,16))(async()=>{let o=ba(e),i=null;try{let[s,a,l]=Je(e);i=(await en()).furniturePreview({type:e,w:s,d:a,h:l,variant:null,lamp:mo[e]??null},Yh,[...this.packs]),this.keep(o,i)}catch{i=null}this.settle(o,i),this.running=!1,this.pump()})}async keep(e,n){let r=await this.db;try{r?.transaction("thumbs","readwrite").objectStore("thumbs").put(n,e)}catch{}}},Pt=new ya,Kr=null,uy=t=>{for(let e of t)e.isIntersecting&&e.target.visible()},wa=class extends ie{static properties={type:{},_url:{state:!0}};static styles=ae`
    :host {
      display: block;
      aspect-ratio: 4 / 3;
      border-radius: 10px;
      background: rgba(127, 127, 127, 0.08);
      overflow: hidden;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  `;constructor(){super(),this.type="",this._url=null}connectedCallback(){super.connectedCallback(),Pt.enabled&&(this._url=Pt.cached(this.type)??null,!this._url&&(Kr??=new IntersectionObserver(uy,{rootMargin:"120px"}),Kr.observe(this)))}disconnectedCallback(){super.disconnectedCallback(),Kr?.unobserve(this)}updated(e){e.has("type")&&e.get("type")!==void 0&&(this._url=Pt.cached(this.type)??null,!this._url&&Pt.enabled&&Kr?.observe(this))}visible(){Kr?.unobserve(this);let e=this.type;Pt.get(e).then(n=>{this.type===e&&(this._url=n)})}render(){return this._url?m`<img src=${this._url} alt="" />`:g}};customElements.get("nf-thumb")||customElements.define("nf-thumb",wa);var Xh="nextfloor.library2",dy={language:"en"},ni=class{onChange;text="";saved;shown=null;picked=new Map;constructor(e){this.onChange=e,this.saved={folded:{},favourites:[],recent:[],flags:["room"]};try{let n=localStorage.getItem(Xh);n&&(this.saved={...this.saved,...JSON.parse(n)})}catch{}}store(e){this.saved={...this.saved,...e},this.onChange();try{localStorage.setItem(Xh,JSON.stringify(this.saved))}catch{}}get query(){return this.text}set query(e){this.text=e,this.onChange()}isOpen(e,n){return this.saved.folded[e]??n}toggle(e,n){this.store({folded:{...this.saved.folded,[e]:!this.isOpen(e,n)}})}has(e){return this.saved.flags.includes(e)}flip(e){this.store({flags:this.has(e)?this.saved.flags.filter(n=>n!==e):[...this.saved.flags,e]})}get favourites(){return this.saved.favourites}isFavourite(e){return this.saved.favourites.includes(e)}toggleFavourite(e){this.store({favourites:this.isFavourite(e)?this.saved.favourites.filter(n=>n!==e):[e,...this.saved.favourites]})}get recent(){return this.saved.recent}used(e){this.store({recent:Gh(this.saved.recent,e)})}pickedOf(e){let n=this.picked.get(e.key);return e.entries.find(r=>r.type===n)??e.entries[0]}pick(e,n){this.picked.set(e.key,n),this.onChange()}get preview(){return this.shown}hidePreview(){this.shown=null,this.onChange()}async showPreview(e,n,r){let o=n.getBoundingClientRect(),i={left:Math.max(8,o.left-196),top:Math.max(8,Math.min(window.innerHeight-200,o.top+o.height/2-95))};this.shown={type:e,url:null,...i},this.onChange();try{let[s,a,l]=Je(e),c=(await en()).furniturePreview({type:e,w:s,d:a,h:l,variant:null,lamp:mo[e]??null},180,[...r]);this.shown?.type===e&&(this.shown={type:e,url:c,...i})}catch{this.shown=null}this.onChange()}};function hy(t,e){let n=t.hass?.language??"en",o=[...[...new Set(Object.values(fc).flat())].map(a=>({type:a,source:"builtin",id:a,size:je[a],lamp:le(a),electric:xt(a)})),...e.flatMap(a=>a.items.map(l=>({type:ue(a.id,l.id),source:a.id,id:l.id,size:l.size,lamp:!!l.light,electric:!!l.electric,vehicle:!!l.vehicle,climate:!!l.climate})))],i=new Map(e.map(a=>[a.id,Ie(a,n)])),s=new Map(e.flatMap(a=>a.items.map(l=>[ue(a.id,l.id),l])));return Vh(o).map(a=>{let l=a.entries[0],c=s.get(l.type),u=c?Ve(c,l.type,n):t.t(`furn_${l.type}`),h=a.entries.length>1&&u.replace(/\s*\(?\d+([.,]\d+)?\s*(cm|x\s*\d+|×\s*\d+)?\)?\s*$/i,"").trim()||u,p=a.entries.map(d=>{let f=s.get(d.type);return f?[...Object.values(f.name),Ve(f,d.type,n)].join(" "):xe(dy,`furn_${d.type}`)}).join(" ");return{card:a,label:h,search:`${p} ${t.t(`lib_cat_${a.category}`)}`,from:i.get(l.source)??"NextFloor"}})}var py=(t,e)=>Zh(e,`${t.label} ${t.search} ${t.from} ${t.card.entries.map(n=>n.id.replace(/_/g," ")).join(" ")}`),fy=t=>t.lamp?"light":t.electric?"switch":null;function my(t,e,n,r){let o=t.t,i=e.pickedOf(n.card),[s,a]=i.size,l=fy(i),c=p=>{e.showPreview(i.type,p.currentTarget,r.packs)},u=()=>{e.used(i.type),r.add(i.type)},h=e.isFavourite(i.type);return m`<div class="nf-card">
    <button
      class="nf-card-main"
      title=${l?o(l==="light"?"lib_badge_light":"lib_badge_electric"):n.label}
      @click=${u}
      @mouseenter=${c}
      @focus=${c}
      @mouseleave=${()=>e.hidePreview()}
      @blur=${()=>e.hidePreview()}
    >
      ${Pt.enabled?m`<nf-thumb .type=${i.type}></nf-thumb>`:g}
      <span class="nf-card-name"
        >${n.label}${l?m`<svg class="nf-lib-badge" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${zt(l)} /></svg>`:g}</span
      >
      <span class="nf-card-meta">${Math.round(s*100)} × ${Math.round(a*100)} cm · ${n.from}</span>
    </button>
    <button class="nf-card-star" aria-pressed=${h} title=${o(h?"lib_fav_remove":"lib_fav_add")} @click=${()=>e.toggleFavourite(i.type)}>${h?"\u2605":"\u2606"}</button>
    ${n.card.entries.length>1?m`<div class="nf-card-sizes" role="group" aria-label=${o("lib_sizes")}>
          ${n.card.entries.map(p=>m`<button class="nf-size" aria-pressed=${p===i} @click=${()=>e.pick(n.card,p.type)}>${Kh(p,n.card.entries)}</button>`)}
        </div>`:g}
  </div>`}function Jh(t,e,n,r){return m`<div class="nf-cards">${n.map(o=>my(t,e,o,r))}</div>`}function va(t,e,n,r,o,i,s){if(o.length===0)return g;let a=e.isOpen(n,s);return m`<button class="nf-lib-head nf-lib-toggle" aria-expanded=${a} @click=${()=>e.toggle(n,s)}>
      <span class="nf-lib-caret">${a?"\u25BE":"\u25B8"}</span>${r} <span class="nf-lib-count">${o.length}</span>
    </button>
    ${a?Jh(t,e,o,i):g}`}function Qh(t,e){return t.flatMap(n=>{let r=e.find(o=>o.card.entries.some(i=>i.type===n));return r?[{...r,card:{...r.card,key:`one:${n}`,entries:r.card.entries.filter(o=>o.type===n)}}]:[]})}function gy(t){let e=_a(t),n=ga(t),r=o=>o===e?0:n?.has(o)?1:2;return[...Ch].sort((o,i)=>r(o)-r(i))}function ep(t,e,n,r){let o=t.t;Pt.packs=r.packs;let i=hy(t,r.packs),s=jh(e.query),a=ga(n),l=!!a&&e.has("room")&&s.length===0,c=i.filter(p=>{let d=p.card.entries[0];return l&&!a.has(p.card.category)||e.has("linkable")&&!d.lamp&&!d.electric||e.has("lit")&&!d.lamp||e.has("outdoor")&&!Bh(p.card.category)?!1:s.length===0||py(p,s)}),u=(p,d)=>m`<button class="nf-chip nf-lib-chip" aria-pressed=${e.has(p)} @click=${()=>e.flip(p)}>${d}</button>`,h=s.length>0;return m`<section>
      <h3>${o("furniture_add")}</h3>
      <p class="nf-sub">${n?o("furniture_into",{room:n}):o("furniture_pick_room")}</p>
      <button class="nf-btn nf-lib-studio" title=${o("studio_hint")} @click=${()=>r.studio()}>🛠️ ${o("studio_new")}</button>
      <input
        class="nf-search"
        type="search"
        placeholder=${o("furniture_search")}
        .value=${e.query}
        @input=${p=>e.query=p.target.value}
        @keydown=${p=>p.key==="Escape"&&(e.query="")}
      />
      <div class="nf-lib-chips">
        ${a?u("room",o("lib_for_room",{room:n??""})):g} ${u("linkable",`\u26A1 ${o("lib_linkable")}`)} ${u("lit",`\u{1F4A1} ${o("lib_lit")}`)}
        ${u("outdoor",`\u{1F333} ${o("lib_outdoor")}`)}
      </div>
      ${h&&c.length===0?m`<p class="nf-sub">${o("furniture_search_none")}</p>`:g}
      ${h?Jh(t,e,c,r):m`${va(t,e,"favourites",`\u2605 ${o("lib_favourites")}`,Qh(e.favourites,i),r,!0)}
          ${va(t,e,"recent",`\u{1F558} ${o("lib_recent")}`,Qh(e.recent.slice(0,6),i),r,!1)}
          ${gy(n).map(p=>va(t,e,p,o(`lib_cat_${p}`),c.filter(d=>d.card.category===p),r,p===(_a(n)??"lights")))}
          ${l?m`<button class="nf-btn nf-lib-all" @click=${()=>e.flip("room")}>${o("lib_all_rooms")}</button>`:g}`}
    </section>`}function tp(t,e){return e?m`<div class="nf-preview" style="left:${e.left}px;top:${e.top}px" aria-hidden="true">
    ${e.url?m`<img src=${e.url} alt="" />`:m`<span class="nf-preview-wait"></span>`}
    <b>${Ne(t.hass,e.type)}</b>
  </div>`:g}function ka(t,e,n,r=24){let o=Math.hypot(e[0]-t[0],e[1]-t[1]);if(o<1e-6||Math.abs(n)<1e-4)return[];let i=Math.max(-o*2,Math.min(o*2,n)),s=[(e[0]-t[0])/o,(e[1]-t[1])/o],a=[s[1],-s[0]],l=o*o/4/(2*Math.abs(i))+Math.abs(i)/2,c=2*Math.atan(2*Math.abs(i)/o),u=Math.max(2,Math.min(r,Math.ceil(2*c/Math.PI*180/11.25))),h=[a[0]*Math.sign(i),a[1]*Math.sign(i)],p=[(t[0]+e[0])/2,(t[1]+e[1])/2],d=[p[0]-h[0]*(l-Math.abs(i)),p[1]-h[1]*(l-Math.abs(i))],f=[];for(let _=1;_<u;_++){let y=-c+2*c*_/u;f.push([d[0]+l*(h[0]*Math.cos(y)+s[0]*Math.sin(y)),d[1]+l*(h[1]*Math.cos(y)+s[1]*Math.sin(y))])}return f}var xa=t=>t.reduce((e,n,r)=>r?e+Math.hypot(n[0]-t[r-1][0],n[1]-t[r-1][1]):e,0);function $a(t,e){let n=Math.max(0,e);for(let r=0;r+1<t.length;r++){let o=Math.hypot(t[r+1][0]-t[r][0],t[r+1][1]-t[r][1]);if(n<=o||r+2===t.length)return{piece:r,offset:Math.min(n,o)};n-=o}return{piece:0,offset:0}}var Re=t=>Math.round(t*1e3)/1e3,Sa=t=>t.map(([e,n])=>[Re(e),Re(n)]);function np(t,e){return{id:D("room"),name:e,area_id:null,points:Sa(t),floor_material:"wood"}}function rp(t){return{...structuredClone(t),id:D("room"),points:Sa(t.points.map(([e,n])=>[e+.5,n+.5]))}}function op(t,e){let n=t.rooms.find(r=>r.id===e);t.rooms=t.rooms.filter(r=>r.id!==e),t.openings=t.openings.filter(r=>r.room_id!==e||r.wall),n&&(t.placements=t.placements.filter(r=>!H([r.x,r.z],n.points)))}function ip(t,e,n){let r=t.rooms.find(s=>s.id===e);if(!r||r.points.length<=3)return!1;let o=(n-1+r.points.length)%r.points.length;r.points.splice(n,1),r.wall_heights?.splice(n,1),r.wall_slopes?.splice(n,1),r.wall_thickness?.splice(n,1);let i=s=>s.room_id===e&&!s.wall;return t.openings=t.openings.filter(s=>!(i(s)&&(s.edge===n||s.edge===o))).map(s=>i(s)&&s.edge>n?{...s,edge:s.edge-1}:s),!0}function sp(t,e,n){if(!Number.isFinite(n))return null;let r=ce(t.points),{x0:o,z0:i,x1:s,z1:a}=r;return e==="x"?[o,s]=[n,n+(s-o)]:e==="z"?[i,a]=[n,n+(a-i)]:n>.05&&(e==="w"?s=o+n:a=i+n),Sa([[o,i],[s,i],[s,a],[o,a]])}function ap(t,e,n,r){return!Number.isFinite(r)||e<0||e>=t.points.length?null:t.points.map((o,i)=>i===e?n===0?[Re(r),o[1]]:[o[0],Re(r)]:[o[0],o[1]])}var _y=/^(Raum|Room) \d+$/;function Ma(t,e,n){let r=e?n[e]:void 0,o=!t.name||_y.test(t.name)||Object.values(n).some(i=>i.name===t.name);return{area_id:e||null,...r&&o?{name:r.name}:{}}}function lp(t,e){let n=e.filter(l=>Z(l.entity_id)==="light"&&(l.mount??"ceiling")==="ceiling"&&H([l.x,l.z],t.points));if(n.length<2)return[];let r=ce(t.points),[o,i]=[r.x1-r.x0,r.z1-r.z0],s=Math.max(1,Math.round(Math.sqrt(n.length*o/Math.max(.1,i)))),a=Math.ceil(n.length/s);return n.map((l,c)=>{let u=Math.floor(c/s),h=u===a-1?n.length-s*(a-1):s,p=c-u*s;return{entityId:l.entity_id,x:Re(r.x0+o/h*(p+.5)),z:Re(r.z0+i/a*(u+.5))}})}function Ea(t,e,n,r){let o=t.rooms.find(u=>u.id===e);if(!o)return;let i=o.points[n],s=o.points[(n+1)%o.points.length];o.points.splice(n+1,0,r);let[a,l]=[o.wall_heights?.[n],o.wall_slopes?.[n]];if(typeof a=="number"&&typeof l=="number"&&o.wall_slopes){let u=Math.hypot(s[0]-i[0],s[1]-i[1]),h=Re(a+(l-a)*Math.min(1,Math.hypot(r[0]-i[0],r[1]-i[1])/(u||1)));o.wall_slopes.splice(n,1,h,l),o.wall_heights.splice(n+1,0,h)}else o.wall_heights?.splice(n+1,0,o.wall_heights[n]??null),o.wall_slopes?.splice(n+1,0,null);o.wall_thickness?.splice(n+1,0,o.wall_thickness[n]??null);let c=Math.hypot(r[0]-i[0],r[1]-i[1]);for(let u of t.openings)u.room_id!==e||u.wall||(u.edge>n?u.edge+=1:u.edge===n&&u.offset>c&&(u.edge=n+1,u.offset=Re(u.offset-c)))}var by=22.5;function cp(t,e,n){let r=Math.min(Math.abs(e),t*2),o=t*(1+8/3*(r/Math.max(1e-6,t))**2),i=4*Math.atan(2*r/Math.max(1e-6,t))*180/Math.PI,s=Math.max(2,Math.ceil(i/by));if(n<=0)return 24;let a=Math.floor(o/(n+.1));return a>=s?a:0}function yy(t,e,n,r){let o=xa(n);t.forEach((i,s)=>{let{piece:a,offset:l}=$a(n,e[s]*o),c=Math.hypot(n[a+1][0]-n[a][0],n[a+1][1]-n[a][1]);i.edge=r+a,i.offset=Re(c>i.width?Math.min(c-i.width/2,Math.max(i.width/2,l)):c/2)})}function up(t,e,n,r){let o=t.rooms.find(v=>v.id===e);if(!o||n<0||n>=o.points.length||Math.abs(r)<.01)return!1;let i=o.points[n],s=o.points[(n+1)%o.points.length],a=Math.hypot(s[0]-i[0],s[1]-i[1]);if(a<.2)return!1;let[l,c]=[(s[0]-i[0])/a,(s[1]-i[1])/a],u=[(i[0]+s[0])/2+c*.02,(i[1]+s[1])/2-l*.02],p=H(u,o.points)?-r:r,d=(v,w)=>t.openings.filter(x=>x.room_id===v.id&&!x.wall&&x.edge===w),f=t.rooms.flatMap(v=>v.points.map((w,x)=>{let k=v.points[(x+1)%v.points.length],$=(R,F)=>Math.abs(R[0]-F[0])<.001&&Math.abs(R[1]-F[1])<.001;return $(w,i)&&$(k,s)?[v,x,!1]:$(w,s)&&$(k,i)?[v,x,!0]:null}).filter(w=>!!w)),_=Math.max(0,...f.flatMap(([v,w])=>d(v,w).map(x=>x.width))),y=cp(a,r,_);if(!y)return!1;let b=ka(i,s,p,y).map(([v,w])=>[Re(v),Re(w)]);if(!b.length)return!1;for(let[v,w,x]of f){let k=x?[...b].reverse():b,$=d(v,w),R=v.points[w],F=$.map(z=>Math.min(1,Math.max(0,z.offset/a)));for(let z of $)z.edge=-1;k.forEach((z,I)=>Ea(t,v.id,w+I,z)),v.wall_splits?.splice(w+1,0,...k.map(()=>null)),v.wall_splits?.[w]&&(v.wall_splits[w]=null),yy($,F,[R,...k,v.points[(w+k.length+1)%v.points.length]],w)}return!0}function dp(t,e,n){let r=t.walls??[],o=r.findIndex(f=>f.id===e);if(o<0||Math.abs(n)<.01)return[];let i=r[o],s=Math.hypot(i.b[0]-i.a[0],i.b[1]-i.a[1]),a=t.openings.filter(f=>f.wall===e),l=Math.max(0,...a.map(f=>f.width)),c=cp(s,n,l);if(!c)return[];let u=ka(i.a,i.b,n,c).map(([f,_])=>[Re(f),Re(_)]);if(!u.length)return[];let h=[i.a,...u,i.b],p=h.slice(1).map((f,_)=>({...i,id:_===0?i.id:D("wall"),a:h[_],b:f}));r.splice(o,1,...p),t.walls=r;let d=xa(h);for(let f of a){let{piece:_,offset:y}=$a(h,f.offset/s*d),b=Math.hypot(h[_+1][0]-h[_][0],h[_+1][1]-h[_][1]);f.wall=p[_].id,f.offset=Re(b>f.width?Math.min(b-f.width/2,Math.max(f.width/2,y)):b/2)}return p.map(f=>f.id)}var Tn=t=>Math.round(t*1e3)/1e3;function ri(t,e,n){return[Math.round((e[0]-t[0])/n)*n,Math.round((e[1]-t[1])/n)*n]}var tn=(t,e)=>e?.01:t,In=(t,e,n=5)=>Math.hypot(t[0]-e[0],t[1]-e[1])>=n;function hp(t,e,n){return n?Math.abs(e[0]-t[0])>Math.abs(e[1]-t[1])?[e[0],t[1]]:[t[0],e[1]]:e}var Ke=(t,e)=>[Tn(t[0]+e[0]),Tn(t[1]+e[1])];function Ra(t,e,n,r){return[Tn(Math.round((t[0]+n[0]-e[0])/r)*r),Tn(Math.round((t[1]+n[1]-e[1])/r)*r)]}function Aa(t,e,n){let r=Math.atan2(-(e[0]-t[0]),e[1]-t[1])*180/Math.PI;return(Math.round(r/n)*n%360+360)%360}function pp(t,e,n){let r=Math.atan2(e[0]-t[0],-(e[1]-t[1]))*180/Math.PI;return Math.round(r/n)*n}function fp(t,e,n){let r=mn([...t]),o=t[e],i=[Tn(n[0]),Tn(n[1])];return t.map((s,a)=>a===e?i:r?[Math.abs(s[0]-o[0])<1e-6?i[0]:s[0],Math.abs(s[1]-o[1])<1e-6?i[1]:s[1]]:[s[0],s[1]])}var oi=t=>Math.round(t*1e3)/1e3,mp=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1]);function wy(t,e,n){let r=null,o=n;for(let i of t){let s=mp(i,e);s<o&&([r,o]=[i,s])}return r}function vy(t,e,n){let r=null,o=n.reach;for(let i of t)n.skip&&i.id===n.skip.roomId||i.points.forEach((s,a)=>{let l=i.points[(a+1)%i.points.length],[c,u]=[l[0]-s[0],l[1]-s[1]],h=c*c+u*u;if(h<1e-9)return;let p=((e[0]-s[0])*c+(e[1]-s[1])*u)/h;if(p<=0||p>=1)return;let d=[s[0]+p*c,s[1]+p*u],f=mp(d,e),_=(y,b,v)=>Math.min(Math.max(y,Math.min(b,v)),Math.max(b,v));Math.abs(u)<1e-9&&(d[0]=_(Math.round(d[0]/n.grid)*n.grid,s[0],l[0])),Math.abs(c)<1e-9&&(d[1]=_(Math.round(d[1]/n.grid)*n.grid,s[1],l[1])),f<o&&([r,o]=[d,f])});return r}function ky(t,e,n){let r=[oi(Math.round(e[0]/n.grid)*n.grid),oi(Math.round(e[1]/n.grid)*n.grid)],o={},[i,s]=[n.reach,n.reach];for(let a of t)Math.abs(a[0]-e[0])<i&&(i=Math.abs(a[0]-e[0]),r[0]=a[0],o.x=a[0]),Math.abs(a[1]-e[1])<s&&(s=Math.abs(a[1]-e[1]),r[1]=a[1],o.z=a[1]);return{point:r,guides:o}}function gp(t,e){let n=e.rooms.flatMap(i=>i.points.filter((s,a)=>!(e.skip&&i.id===e.skip.roomId&&(e.skip.index===void 0||e.skip.index===a)))),r=wy(n,t,e.reach);if(r)return{point:[r[0],r[1]],guides:{point:r}};let o=vy(e.rooms,t,e);return o?{point:[oi(o[0]),oi(o[1])],guides:{point:o}}:ky(n,t,e)}var ii=(t,e)=>he(t.host.hass,e);function xy(t,e){let[n,r]=[t.toScreen(e.start),t.toScreen(e.end)];if(e.kind==="freewall"){let s=Math.hypot(e.end[0]-e.start[0],e.end[1]-e.start[1]);return E`<g pointer-events="none">
      <line class="nf-draft nf-draft-wall" x1=${n[0]} y1=${n[1]} x2=${r[0]} y2=${r[1]} />
      <text class="nf-dim" x=${(n[0]+r[0])/2} y=${(n[1]+r[1])/2-10}>${ii(t,s)}</text>
    </g>`}let[o,i]=[Math.abs(e.end[0]-e.start[0]),Math.abs(e.end[1]-e.start[1])];return E`<g pointer-events="none">
    <rect class="nf-draft" x=${Math.min(n[0],r[0])} y=${Math.min(n[1],r[1])} width=${Math.abs(r[0]-n[0])} height=${Math.abs(r[1]-n[1])} />
    <text class="nf-dim" x=${(n[0]+r[0])/2} y=${Math.min(n[1],r[1])-8}>${ii(t,o)} × ${ii(t,i)}</text>
  </g>`}function $y(t,e,n,r){let o=[...e,...n?[n]:[]].map(u=>t.toScreen(u)),i=e.length>=3,s=r?e.slice(1).map((u,h)=>{let[p,d]=[t.toScreen(e[h]),t.toScreen(u)];return E`<text class="nf-dim" x=${(p[0]+d[0])/2} y=${(p[1]+d[1])/2-6}>${ii(t,Math.hypot(u[0]-e[h][0],u[1]-e[h][1]))}</text>`}):g,a=e.map((u,h)=>{let[p,d]=t.toScreen(u),f=h===0&&i;return E`<circle class=${f?"nf-draft-pt nf-draft-first":"nf-draft-pt"} cx=${p} cy=${d} r=${f?9:5} />`}),[l,c]=n?t.toScreen(n):[0,0];return E`<g pointer-events="none">
    ${o.length>1?E`<polyline class="nf-draft" points=${o.map(u=>u.join(",")).join(" ")} />`:g}
    ${s}${a}
    ${n?E`<circle class="nf-cursor" cx=${l} cy=${c} r="4" />`:g}
  </g>`}function _p(t,e,n){let r=e.x!==void 0?t.toScreen([e.x,0])[0]:null,o=e.z!==void 0?t.toScreen([0,e.z])[1]:null,[i,s]=e.point?t.toScreen(e.point):[0,0];return E`<g pointer-events="none">
    ${r!==null?E`<line class="nf-guide" x1=${r} y1="0" x2=${r} y2=${n.h} />`:g}
    ${o!==null?E`<line class="nf-guide" x1="0" y1=${o} x2=${n.w} y2=${o} />`:g}
    ${e.point?E`<circle class="nf-snap" cx=${i} cy=${s} r="9" />`:g}
  </g>`}function bp(t,e,n,r,o){return e?xy(t,e):n!=="polygon"&&n!=="measure"?g:$y(t,r,o,n==="measure")}var oe=(t,e,n,r,o="")=>E`<rect class=${o} x=${Math.min(t,n)} y=${Math.min(e,r)} width=${Math.abs(n-t)} height=${Math.abs(r-e)} />`,ee=(t,e,n,r,o="")=>E`<line class=${o} x1=${t} y1=${e} x2=${n} y2=${r} />`,wp=(t,e="")=>E`<polygon class=${e} points=${t.map(n=>n.join(",")).join(" ")} />`,re=(t,e,n,r="")=>E`<circle class=${r} cx=${t} cy=${e} r=${n} />`,Fa=(t,e,n,r,o="")=>E`<ellipse class=${o} cx=${t} cy=${e} rx=${n} ry=${r} />`;function za(t,e,n){let r=[];for(let o=1;o<n;o++){let i=-t/2+t/n*o;r.push(ee(i,e/2,i,e/2-Math.min(.12,e*.3)))}return r}function yp(t,e,n,r){let o=Math.min(.24,e*.28),i=r?Math.min(.2,t*.12):0,s=[oe(-t/2,-e/2,t/2,-e/2+o,"nf-sym-fill")];r&&s.push(oe(-t/2,-e/2,-t/2+i,e/2,"nf-sym-fill"),oe(t/2-i,-e/2,t/2,e/2,"nf-sym-fill"));let a=t-2*i;for(let l=1;l<n;l++){let c=-t/2+i+a/n*l;s.push(ee(c,-e/2+o,c,e/2-.02))}return s}function vp(t,e,n,r){if(t==="stairs"&&r?.stair)return Sy(r,e,n);switch(t){case"sofa":return yp(e,n,Math.max(1,Math.round((e-.4)/.62)),!0);case"armchair":return yp(e,n,1,!0);case"bench":return[oe(-e/2,-n/2,e/2,-n/2+.08,"nf-sym-fill")];case"corner_bench":{let o=Math.min(.5,n*.4);return[oe(-e/2,-n/2,e/2,-n/2+.08,"nf-sym-fill"),oe(-e/2,-n/2,-e/2+.08,n/2,"nf-sym-fill"),ee(-e/2+o,-n/2+o,e/2,-n/2+o),ee(-e/2+o,-n/2+o,-e/2+o,n/2)]}case"chair":return[oe(-e/2,-n/2,e/2,-n/2+.06,"nf-sym-fill")];case"office_chair":return[re(0,.03,Math.min(e,n)*.36),oe(-e*.35,-n/2+.02,e*.35,-n/2+.1,"nf-sym-fill")];case"bar_stool":case"table_round":return[re(0,0,Math.min(e,n)*.42)];case"stool":return[oe(-e/2+.04,-n/2+.04,e/2-.04,n/2-.04)];case"table":case"coffee_table":case"desk":{let o=[oe(-e/2+.05,-n/2+.05,e/2-.05,n/2-.05)];return t==="desk"&&o.push(ee(-.3,-n/2+.1,.3,-n/2+.1,"nf-sym-strong")),o}case"bed":case"bunk_bed":{let o=e>1.2?2:1,i=(e-.2)/o,s=[oe(-e/2,-n/2,e/2,-n/2+.07,"nf-sym-fill"),ee(-e/2,-n/2+(n-.1)*.36,e/2,-n/2+(n-.1)*.36)];for(let a=0;a<o;a++)s.push(oe(-e/2+.13+i*a,-n/2+.12,-e/2+.07+i*(a+1),-n/2+.12+Math.min(.4,n*.18)));return s}case"nightstand":case"wardrobe":case"dresser":case"sideboard":case"tall_cabinet":case"kitchen":case"kitchen_wall":case"kitchen_tall":case"shelf":return za(e,n,t==="nightstand"||t==="tall_cabinet"||t==="kitchen_tall"?1:Math.max(2,Math.round(e/.5)));case"coat_rack":return[oe(-e/2,-n/2,e/2,-n/2+.03,"nf-sym-fill"),...za(e,n,Math.max(2,Math.round(e/.5)))];case"island":return[ee(-e/2,n/2-.3,e/2,n/2-.3)];case"fridge":return[ee(-e/2+.06,n/2-.04,e/2-.06,n/2-.04,"nf-sym-strong")];case"stove":{let o=Math.min(e,n)*.14;return[re(-e*.22,-n*.2,o),re(e*.22,-n*.2,o*.8),re(-e*.22,n*.2,o*.8),re(e*.22,n*.2,o)]}case"sink":{let o=Math.min(.5,e-.2);return[oe(-o/2,-n/2+.1,o/2,n/2-.08),re(0,-n/2+.06,.025,"nf-sym-fill")]}case"dishwasher":return[ee(-e/2+.08,n/2-.05,e/2-.08,n/2-.05,"nf-sym-strong")];case"washer":case"dryer":return[re(0,.05,Math.min(e,n)*.3),ee(-e/2,-n/2+.1,e/2,-n/2+.1)];case"bathtub":return[oe(-e/2+.07,-n/2+.07,e/2-.07,n/2-.07),re(-e/2+.14,0,.03,"nf-sym-fill")];case"shower":return[ee(-e/2,-n/2,e/2,n/2),ee(e/2,-n/2,-e/2,n/2),re(0,0,.04)];case"wc":return[oe(-e/2,-n/2,e/2,-n/2+Math.min(.18,n*.3),"nf-sym-fill"),Fa(0,n*.1,e*.36,n*.3)];case"washbasin":return[Fa(0,.03,e*.34,n*.3)];case"tv_board":return[ee(-Math.min(e*.4,.72),-n/2+.14,Math.min(e*.4,.72),-n/2+.14,"nf-sym-strong"),...za(e,n,Math.max(2,Math.round(e/.6)))];case"tv_wall":return[ee(-e/2,0,e/2,0,"nf-sym-strong")];case"lamp_downlight":case"lamp_spot":return[re(0,0,Math.min(e,n)*.45,"nf-sym-fill"),re(0,0,Math.min(e,n)*1.4)];case"lamp_bollard":case"lamp_garden":return[re(0,0,Math.min(e,n)*.5,"nf-sym-fill"),re(0,0,Math.min(e,n)*1.6)];case"parking":return[oe(-e/2+.08,-n/2+.08,e/2-.08,n/2-.08),ee(-e*.15,n/2-.5,0,n/2-.22,"nf-sym-strong"),ee(0,n/2-.22,e*.15,n/2-.5,"nf-sym-strong")];case"robot_vacuum":return[oe(-e*.45,-n/2,e*.45,-n/2+n*.3,"nf-sym-fill"),re(0,n*.14,Math.min(e,n)*.47)];case"radiator":{let o=[],i=Math.max(3,Math.round(e/.1));for(let s=1;s<i;s++)o.push(ee(-e/2+e/i*s,-n/2,-e/2+e/i*s,n/2));return o}case"lamp_panel":return[oe(-e/2+.03,-n/2+.03,e/2-.03,n/2-.03,"nf-sym-fill")];case"lamp_uplight":case"lamp_ceiling":case"lamp_pendant":case"lamp_floor":case"lamp_table":{let o=Math.min(e,n)/2,i=[re(0,0,o*.9,"nf-sym-fill"),re(0,0,o*.3)];if(t==="lamp_ceiling"||t==="lamp_pendant")for(let s=0;s<8;s++){let a=s/8*Math.PI*2;i.push(ee(Math.cos(a)*o*1.05,Math.sin(a)*o*1.05,Math.cos(a)*o*1.35,Math.sin(a)*o*1.35))}return i}case"ceiling_fan":{let o=Math.min(e,n)/2,i=[re(0,0,.11,"nf-sym-fill")];for(let s=0;s<5;s++){let a=s/5*Math.PI*2;i.push(ee(Math.cos(a)*.12,Math.sin(a)*.12,Math.cos(a)*o*.97,Math.sin(a)*o*.97,"nf-sym-strong"))}return[...i,re(0,0,o)]}case"lamp_wall":return[oe(-e/2,-n/2,e/2,-n/2+.03,"nf-sym-fill"),Fa(0,.01,e*.4,n*.4)];case"led_strip":return[ee(-e/2,0,e/2,0,"nf-sym-strong")];case"plant":return[re(0,0,Math.min(e,n)*.46),re(0,0,Math.min(e,n)*.25)];case"rug":return[oe(-e/2+.1,-n/2+.1,e/2-.1,n/2-.1)];case"stairs":{let o=Math.max(3,Math.round(n/.26)),i=[];for(let s=1;s<o;s++)i.push(ee(-e/2,n/2-n/o*s,e/2,n/2-n/o*s));return i.push(ee(0,n/2-.1,0,-n/2+.25,"nf-sym-strong"),ee(-.15,-n/2+.45,0,-n/2+.25,"nf-sym-strong"),ee(.15,-n/2+.45,0,-n/2+.25,"nf-sym-strong")),i}default:{let o=U(t);return o?My(o,e,n):g}}}function Sy(t,e,n){let r=Nr(t),o=Jt(r,e,n,t.h),i=r.down?"nf-sym-dash":"",s=o.treads.map(l=>wp(l.poly,l.landing?`nf-sym-fill ${i}`:i));o.column>0&&s.push(re(0,0,o.column,"nf-sym-fill"));let a=o.treads.map(Yo);for(let l=1;l<a.length;l++)s.push(ee(a[l-1][0],a[l-1][1],a[l][0],a[l][1],"nf-sym-strong"));if(a.length&&s.unshift(re(a[0][0],a[0][1],.05,"nf-sym-fill")),a.length>=2){let[l,c]=[a[a.length-2],a[a.length-1]],u=Math.hypot(c[0]-l[0],c[1]-l[1])||1,[h,p]=[(c[0]-l[0])/u,(c[1]-l[1])/u],d=Math.min(.2,o.flight*.3);for(let f of[-1,1])s.push(ee(c[0],c[1],c[0]-h*d+p*d*.6*f,c[1]-p*d-h*d*.6*f,"nf-sym-strong"))}return s}function My(t,e,n){return t.symbol?.length?t.symbol.map(r=>r.shape==="rect"?oe((r.x-r.w/2)*e,(r.z-r.d/2)*n,(r.x+r.w/2)*e,(r.z+r.d/2)*n,r.fill?"nf-sym-fill":""):r.shape==="circle"?re(r.x*e,r.z*n,r.r*Math.min(e,n)):ee(r.x1*e,r.z1*n,r.x2*e,r.z2*n)):Hl(t,e,n,t.size[2]).filter(r=>r.shape==="sweep"||r.w<.98||r.d<.98).map(r=>r.shape==="sweep"&&r.stations?.length?wp([...r.stations.map(o=>[(r.x+o[3]/2)*e,o[0]*n]),...[...r.stations].reverse().map(o=>[(r.x-o[3]/2)*e,o[0]*n])]):r.shape==="cyl"&&(r.axis??"y")==="y"?re(r.x*e,r.z*n,Math.min(r.w*e,r.d*n)/2):oe((r.x-r.w/2)*e,(r.z-r.d/2)*n,(r.x+r.w/2)*e,(r.z+r.d/2)*n))}var Pa=Math.PI/180,kp=(t,e,n,r)=>{let[o,i]=r,s=E`<path d="M${o-4} ${i-1}a4 4 0 1 1 2 3.5" />`,a=E`<line x1=${n[0]} y1=${n[1]} x2=${o} y2=${i} /><circle cx=${o} cy=${i} r="16" class="nf-hit" /><circle cx=${o} cy=${i} r="8" />${s}`;return t==="data-rotate"?E`<g class="nf-rotate" data-rotate=${e}>${a}</g>`:E`<g class="nf-rotate" data-aim=${e}>${a}</g>`};function Ey(t,e){let n=e.rotation*Pa;return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([r,o])=>{let[i,s]=t.toScreen([e.x+r*e.w*Math.cos(n)/2-o*e.d*Math.sin(n)/2,e.z+r*e.w*Math.sin(n)/2+o*e.d*Math.cos(n)/2]);return E`<g class="nf-resize" data-resize=${`${e.id}:${r}:${o}`}><circle cx=${i} cy=${s} r="14" class="nf-hit" /><rect x=${i-5} y=${s-5} width="10" height="10" rx="2" /></g>`})}function xp(t,e,n){let{host:r,scale:o}=t,i=s=>{let a=s.id===n,l=a&&r.admin&&!s.locked,[c,u]=t.toScreen([s.x,s.z]),h=s.rotation*Pa,p=Math.min(s.w,s.d)*o>44,d=le(s.type)&&!!s.entity&&s.entity!=="none"&&r.hass?.states[s.entity]?.state==="on",f=De.includes(s.type),_=`nf-furn${a?" nf-furn-sel":""}${d?" nf-furn-lit":""}${f?" nf-energy-item":""}`,y=s.d/2+Math.max(.3,26/o),b=t.toScreen([s.x-Math.sin(h)*y,s.z+Math.cos(h)*y]),v=t.toScreen([s.x-Math.sin(h)*(s.d/2),s.z+Math.cos(h)*(s.d/2)]),[w,x]=t.toScreen([s.x+Math.sin(h)*(s.d/2+18/o),s.z-Math.cos(h)*(s.d/2+18/o)]);return E`<g data-furniture=${s.id} class=${_}>
        <g transform="translate(${c} ${u}) rotate(${s.rotation}) scale(${s.mirror?-o:o} ${o})">
          <rect class="nf-furn-body" x=${-s.w/2} y=${-s.d/2} width=${s.w} height=${s.d} />
          <g class="nf-furn-sym">${vp(s.type,s.w,s.d,s)}</g>
          <line class="nf-furn-front" x1=${-s.w/2} y1=${s.d/2} x2=${s.w/2} y2=${s.d/2} />
        </g>
        ${p?E`<text x=${c} y=${u+4}>${Ne(r.hass,s.type)}</text>`:g}
      </g>
      ${l?Ey(t,s):g}
      ${a?E`<text class="nf-dim" x=${w} y=${x+4}>${he(r.hass,s.w)} × ${he(r.hass,s.d)}</text>`:g}
      ${a&&s.locked?E`<text class="nf-lock" x=${b[0]} y=${b[1]+5}>🔒</text>`:g}
      ${l?kp("data-rotate",s.id,v,b):g}`};return E`<g>${e.furniture.map(i)}</g>`}function $p(t,e,n){let{host:r}=t,o=i=>{let s=Z(i.entity_id)??(r.hass?Oe(r.hass,i.entity_id):null);if(!s)return g;let[a,l]=t.toScreen([i.x,i.z]),c=r.hass?.states[i.entity_id]?.state==="on",u=i.entity_id===n,h=(i.rotation??0)*Pa,p=u&&r.admin&&!i.locked&&Mc(i.entity_id,r.hass?.states[i.entity_id]),d=[a-Math.sin(h)*46,l+Math.cos(h)*46],f=Rn(r,i.entity_id,i.icon);return E`${p?kp("data-aim",i.entity_id,[a,l],d):g}<g data-device=${i.entity_id} class=${`nf-device${c?" nf-device-on":""}${u?" nf-device-sel":""}`} transform="translate(${a} ${l})">
        <title>${N(r.hass,i.entity_id)}</title>
        <circle r="18" class="nf-hit" /><circle r="12" />
        ${f?E`<foreignObject class="nf-device-icon" x="-8" y="-8" width="16" height="16"><ha-icon icon=${f}></ha-icon></foreignObject>`:E`<path d=${zt(s)} transform="translate(-7.2 -7.2) scale(0.6)" />`}
      </g>
      ${u&&i.locked?E`<text class="nf-lock" x=${a+16} y=${l-12}>🔒</text>`:g}`};return E`<g>${e.placements.map(o)}</g>`}function Sp(t,e,n){return E`${(e.notes??[]).map(r=>{let[o,i]=t.toScreen([r.x,r.z]);return E`<g data-note=${r.id} class=${`nf-note${ao(r)?" nf-note-due":""}${r.id===n?" nf-note-sel":""}`} transform="translate(${o} ${i})">
      <title>${r.text}</title>
      <rect x="-11" y="-11" width="22" height="22" rx="4" /><text y="5" text-anchor="middle">✎</text>
    </g>`})}`}var si=(t,e,n=6)=>E`<circle cx=${t} cy=${e} r="16" class="nf-hit" /><circle cx=${t} cy=${e} r=${n} />`;function Mp(t,e){let{scale:n}=t,r=n>=90?.1:n>=30?.5:1,o=n>=20?1:5,i=t.toWorld(0,0),s=t.toWorld(e.w,e.h),a=[],l=(h,p)=>{for(let d=Math.ceil(i[0]/h)*h;d<=s[0];d+=h){let f=t.toScreen([d,0])[0];a.push(E`<line class=${p} x1=${f} y1="0" x2=${f} y2=${e.h} />`)}for(let d=Math.ceil(i[1]/h)*h;d<=s[1];d+=h){let f=t.toScreen([0,d])[1];a.push(E`<line class=${p} x1="0" y1=${f} x2=${e.w} y2=${f} />`)}};r<o&&l(r,"nf-grid-minor"),l(o,"nf-grid-major");let[c,u]=t.toScreen([0,0]);return a.push(E`<circle class="nf-origin" cx=${c} cy=${u} r="3" />`),E`<g pointer-events="none">${a}</g>`}function Ep(t){let e=t.host.doc.floors,n=e.findIndex(i=>i.id===t.floorId),r=n>0?e[n-1]:void 0;if(!r)return g;let o=_c(e,e[n]);return E`<g pointer-events="none">${r.rooms.map(i=>E`<polygon class="nf-ghost" points=${it(t,i.points)} />`)}${o.map(i=>E`<polygon class="nf-void" points=${it(t,i)} />`)}</g>`}function Rp(t,e){let n=t.host.floor?.height??2.5;return E`<g pointer-events="none">${e.map(r=>{let o=r.height!==void 0&&r.height<n-.01;return E`<polygon class=${`nf-wall${r.exterior?" nf-wall-ext":""}${o?" nf-wall-low":""}`} points=${it(t,r.footprint)} />`})}</g>`}function Ap(t,e,n){let r=o=>{let[i,s]=t.toScreen(_e(o.points)),a=ce(o.points),l=Math.min(a.x1-a.x0,a.z1-a.z0)*t.scale>40;return E`<g data-outdoor=${o.id} class=${`nf-out nf-out-${o.type}${o.id===n?" nf-out-sel":""}`}>
      <polygon points=${it(t,o.points)} />
      ${l?E`<text x=${i} y=${s+4}>${t.host.t(`out_${o.type}`)}</text>`:g}
    </g>`};return E`<g>${e.outdoor.map(r)}</g>`}function Fp(t,e,n){let{host:r}=t;if(!e||!r.admin||n!=="select"||r.doc.settings.lock_plan)return g;let o=e.points;return E`${o.map((i,s)=>Ko(t,i,o[(s+1)%o.length],"out",e.id,s))}${o.map((i,s)=>E`<g class="nf-vertex" data-out-vertex=${`${e.id}:${s}`}>${si(...t.toScreen(i))}</g>`)}`}function zp(t,e,n,r){let o=e.rooms.find(s=>s.id===n),i=o&&r!==null&&r<o.points.length?[t.toScreen(o.points[r]),t.toScreen(o.points[(r+1)%o.points.length])]:null;return E`<g>${e.rooms.map(s=>E`<polygon data-room=${s.id} class=${s.id===n?"nf-room nf-room-sel":"nf-room"} points=${it(t,s.points)} />`)}</g>
    ${i?E`<line class="nf-edge-hi" pointer-events="none" x1=${i[0][0]} y1=${i[0][1]} x2=${i[1][0]} y2=${i[1][1]} />`:g}
    <g pointer-events="none">${e.rooms.map(s=>{let[a,l]=t.toScreen(_e(s.points));return E`<text class="nf-room-name" x=${a} y=${l-2}>${s.name}</text>
        <text class="nf-room-area" x=${a} y=${l+14}>${Ee(t.host.hass,we(s.points))}</text>`})}</g>`}function Pp(t,e){let n=t.host.doc.energy?.meter;if(!n||n.floor_id!==e.id)return g;let[r,o]=t.toScreen([n.x,n.z]);return E`<g class="nf-meter" transform="translate(${r} ${o})" pointer-events="none">
    <rect x="-11" y="-11" width="22" height="22" rx="5" />
    <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
  </g>`}function Tp(t,e,n){let{host:r}=t,o=i=>{let[s,a]=[t.toScreen(i.a),t.toScreen(i.b)],l=i.id===n,c=l&&r.admin&&!co(i,!0,r.doc.settings);return E`<g data-free-wall=${i.id} class=${`nf-free-wall${l?" nf-free-wall-sel":""}`}>
        <line class="nf-hit" x1=${s[0]} y1=${s[1]} x2=${a[0]} y2=${a[1]} />
        <line class="nf-free-wall-line" x1=${s[0]} y1=${s[1]} x2=${a[0]} y2=${a[1]} />
      </g>
      ${c?E`<g class="nf-vertex" data-wall-end=${`${i.id}:a`}>${si(s[0],s[1])}</g><g class="nf-vertex" data-wall-end=${`${i.id}:b`}>${si(a[0],a[1])}</g>`:g}`};return E`<g>${(e.walls??[]).map(o)}</g>`}function Ip(t,e){let n=e.points,r=(e.wall_splits??[]).flatMap((o,i)=>{if(!o||i>=n.length)return[];let[s,a]=[n[i],n[(i+1)%n.length]],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,[c,u]=[(a[0]-s[0])/l,(a[1]-s[1])/l];return o.map(h=>{let[p,d]=t.toScreen([s[0]+c*h,s[1]+u*h]);return E`<line class="nf-split-mark" x1=${p-u*7} y1=${d+c*7} x2=${p+u*7} y2=${d-c*7} />`})});return E`${r}`}function Dp(t,e,n){let r=e.points,[o,i]=t.toScreen(_e(r)),s=(l,c,u)=>{let[[h,p],[d,f]]=[t.toScreen(l),t.toScreen(c)],[_,y]=[(h+d)/2,(p+f)/2],b=Math.hypot(d-h,f-p),[v,w]=[-(f-p),d-h],x=Math.hypot(v,w)||1;return[v,w]=[v/x,w/x],v*(_-o)+w*(y-i)<0&&([v,w]=[-v,-w]),E`${b>50?E`<text class="nf-dim" x=${_+v*16} y=${y+w*16+4}>${he(t.host.hass,Math.hypot(c[0]-l[0],c[1]-l[1]))}</text>`:g}
      ${b>36?E`<g data-mid=${u} class="nf-mid"><circle cx=${_} cy=${y} r="14" class="nf-hit" /><circle cx=${_} cy=${y} r="6" /><path d="M${_-3} ${y}h6M${_} ${y-3}v6" /></g>`:g}`},a=(l,c)=>{let[u,h]=t.toScreen(l);return E`<g data-vertex=${c} class=${c===n?"nf-vertex nf-vertex-sel":"nf-vertex"}>${si(u,h)}</g><text class="nf-vertex-no" x=${u+9} y=${h-9}>${c+1}</text>`};return E`<g>${r.map((l,c)=>s(l,r[(c+1)%r.length],c))}${r.map(a)}</g>`}function Op(t,e){let n=e.rooms.flatMap(r=>{if(r.points.length<3)return[];let[o,i]=_e(r.points);return r.points.map((s,a)=>{let l=r.points[(a+1)%r.points.length],c=Math.hypot(l[0]-s[0],l[1]-s[1]);if(c<.4)return g;let u=[(s[0]+l[0])/2,(s[1]+l[1])/2],h=Math.hypot(o-u[0],i-u[1])||1,p=Math.min(.35,h/2),d=[u[0]+(o-u[0])/h*p,u[1]+(i-u[1])/h*p],[f,_]=t.toScreen(d),y=Math.atan2(l[1]-s[1],l[0]-s[0])*180/Math.PI;return y>90&&(y-=180),y<-90&&(y+=180),E`<text class="nf-dim" x=${f} y=${_} transform=${`rotate(${y.toFixed(1)} ${f} ${_})`} text-anchor="middle" dominant-baseline="middle">${he(t.host.hass,c)}</text>`})});return E`<g pointer-events="none">${n}</g>`}function Lp(t,e,n){let r=t.t;return m`<section>
    <h3>✎ ${r("note")}</h3>
    <div class="nf-form">
      <label class="nf-field nf-wide"
        >${r("note_text")}
        <textarea rows="4" maxlength="500" .value=${e.text} ?disabled=${!t.admin} placeholder=${r("note_placeholder")} @change=${o=>n.patch({text:o.target.value.trim()})}></textarea>
      </label>
      <label class="nf-field"
        >${r("note_due")}
        <input type="date" .value=${e.due??""} ?disabled=${!t.admin} @change=${o=>n.patch({due:o.target.value||null})} />
      </label>
      ${ao(e)?m`<p class="nf-sub nf-warn nf-wide">${r("note_is_due")}</p>`:M(r("note_due_hint"),"nf-wide")}
      ${A(t,r("x"),e.x,o=>n.patch({x:o}))} ${A(t,r("z"),e.z,o=>n.patch({z:o}))}
    </div>
    ${X(m`<button class="nf-btn nf-danger" ?disabled=${!t.admin} @click=${()=>n.remove()}>${r("delete")}</button>`)}
  </section>`}function Ry(t,e,n,r){let o=ze(e,n.rooms,n.walls??[]);if(!o)return null;let{room:i,edge:s}=o,a=St(r,e,o),l=vn(i,s,e.offset-e.width/2),c=vn(i,s,e.offset+e.width/2),u=[(c[0]-l[0])/(e.width||1),(c[1]-l[1])/(e.width||1)],h=ge(i.points)>=0?1:-1,p=[-u[1]*h,u[0]*h],d=[.06,.06];return a&&(d=a.wall.free||a.wall.roomLeft===i.id?[a.wall.left,a.wall.right]:[a.wall.right,a.wall.left]),{room:i,edge:s,p0:l,p1:c,inward:p,direction:h,across:d,exterior:a?.wall.exterior??!1,at:(f,_)=>t.toScreen([f[0]+p[0]*_,f[1]+p[1]*_])}}var _t=(t,e,n="")=>E`<line class=${n} x1=${t[0]} y1=${t[1]} x2=${e[0]} y2=${e[1]} />`;function Ay(t,e){let n=t.across[0]-.04,r=t.across[0]+Math.min(2,e.height),[o,i,s,a]=[t.at(t.p0,n),t.at(t.p1,n),t.at(t.p0,r),t.at(t.p1,r)];return E`${_t(o,i)}<path class="nf-open-track" d="M${o[0]} ${o[1]}L${s[0]} ${s[1]}M${i[0]} ${i[1]}L${a[0]} ${a[1]}" />`}function Fy(t,e,n){let r=n.swing==="out",o=r?-e.across[1]:e.across[0],i=(e.across[0]-e.across[1])/2,s=n.hinge==="left"==e.direction>0,a=Ct(n,e.exterior),l=n.leaves===2,[c,u]=[e.p0,e.p1],h=[],p=bc(n.width,a,s,n);if(p){let v=w=>w<=.02?e.p0:w>=n.width-.02?e.p1:vn(e.room,e.edge,n.offset-n.width/2+w);[c,u]=[v(p.x0),v(p.x1)],h=p.panels.map(([w,x])=>[v(w),v(x)])}let d=[(c[0]+u[0])/2,(c[1]+u[1])/2],f=(l?.5:1)*Math.hypot(u[0]-c[0],u[1]-c[1]),_=h.map(([v,w])=>E`${_t(e.at(v,i+.035),e.at(w,i+.035),"nf-open-pane")}${_t(e.at(v,i-.035),e.at(w,i-.035),"nf-open-pane")}`),y=(v,w)=>{let[x,k]=e.at(v,o),[$,R]=e.at(w,o),F=e.at(v,o+(r?-f:f)),z=f*t.scale,I=(F[0]-x)*(R-k)-(F[1]-k)*($-x)>0?1:0;return E`<path d="M${x} ${k}L${F[0]} ${F[1]}A${z} ${z} 0 0 ${I} ${$} ${R}" />`},b;return a==="passage"?b=_t(e.at(e.p0,i),e.at(e.p1,i),"nf-open-passage"):a==="sliding"?b=_t(e.at(c,o),e.at(u,o)):l?b=E`${y(c,d)}${y(u,d)}`:b=s?y(c,u):y(u,c),E`${_}${b}`}function zy(t,e){let n=(t.across[0]-t.across[1])/2;if(e.opens==="slide"){let o=e.leaves===2?4:2,i=a=>[t.p0[0]+(t.p1[0]-t.p0[0])*a,t.p0[1]+(t.p1[1]-t.p0[1])*a],s=Array.from({length:o},(a,l)=>{let c=e.leaves===2?l===1||l===2?.035:-.035:l===0?.035:-.035;return _t(t.at(i(Math.max(0,l/o-.03)),n+c),t.at(i(Math.min(1,(l+1)/o+.03)),n+c))});return E`${s}`}let r=e.leaves===2?_t(t.at([(t.p0[0]+t.p1[0])/2,(t.p0[1]+t.p1[1])/2],t.across[0]),t.at([(t.p0[0]+t.p1[0])/2,(t.p0[1]+t.p1[1])/2],-t.across[1])):g;return E`${_t(t.at(t.p0,n+.035),t.at(t.p1,n+.035))}${_t(t.at(t.p0,n-.035),t.at(t.p1,n-.035))}${r}`}function Hp(t,e,n,r){let o=e.openings.find(s=>s.id===r)?.front??null,i=s=>{let a=Ry(t,s,e,n);if(!a)return g;let l=[a.at(a.p0,a.across[0]+.01),a.at(a.p1,a.across[0]+.01),a.at(a.p1,-a.across[1]-.01),a.at(a.p0,-a.across[1]-.01)],c=s.type==="door"&&ji(Ct(s,a.exterior)),u=s.id===r||!!s.front&&s.front===o,h=`nf-open nf-open-${s.type}${c?" nf-open-front":""}${u?" nf-open-sel":""}`,p=s.type==="garage"?Ay(a,s):s.type==="door"?Fy(t,a,s):zy(a,s);return E`<g data-opening=${s.id} class=${h}><polygon class="nf-open-gap" points=${l.map(d=>d.join(",")).join(" ")} />${p}</g>`};return E`<g>${e.openings.map(i)}</g>`}var Cp=t=>Math.round(t*1e3)/1e3,Wp=t=>Math.round(t*100)/100;function Dn(t,e){let n=[...t??[]].slice(0,e);for(;n.length<e;)n.push(null);return n}var ai=t=>t.every(e=>e===null);function Gr(t,e){let[n,r]=[t.points[e],t.points[(e+1)%t.points.length]];return Math.hypot(r[0]-n[0],r[1]-n[1])}function Ta(t,e,n){let r=Dn(t.wall_heights,t.points.length);r[e]=n,t.wall_heights=ai(r)?void 0:r,li(t,e,null)}function li(t,e,n){if(n===null&&!t.wall_slopes)return;let r=Dn(t.wall_slopes,t.points.length);r[e]=n,t.wall_slopes=ai(r)?void 0:r}function Bp(t,e,n,r){let[o,i]=[n,r].map(a=>Math.min(30,Math.max(.05,Cp(a)))),s=Dn(t.wall_heights,t.points.length);s[e]=o,t.wall_heights=s,li(t,e,i)}function Np(t,e,n){let r=t.wall_heights?.[e];li(t,e,null),typeof r=="number"&&r>=n-.005&&Ta(t,e,null)}function Vp(t,e,n,r,o){let i=Dn(t.wall_heights,t.points.length),s=i[e],a=Array.isArray(s)?[...s]:new Array(o).fill(typeof s=="number"?s:null);for(;a.length<o;)a.push(null);a[n]=r,i[e]=a.every(l=>l===a[0])?a[0]:a,t.wall_heights=ai(i)?void 0:i,li(t,e,null)}function Kp(t,e,n,r){let o=Gr(t,e),i=n===void 0?0:r[n],s=n===void 0?o:r[n+1]??o;if(s-i<.4)return!1;let a=Wp((i+s)/2),l=Dn(t.wall_splits,t.points.length);l[e]=[...l[e]??[],a].sort((u,h)=>u-h),t.wall_splits=l;let c=t.wall_heights?.[e];return Array.isArray(c)&&c.splice((n??0)+1,0,c[n??0]??null),!0}function Gp(t,e,n,r,o){let i=Gr(t,e),s=o.filter(u=>Math.abs(u-n)>.001&&u>0),a=Math.max(.1,Math.min(i-.1,Wp(r)));s.some(u=>Math.abs(u-a)<.1)&&(a=n);let l=t.wall_splits?.[e];if(!l)return;let c=l.findIndex(u=>Math.abs(u-n)<.001);c>=0&&(l[c]=a),l.sort((u,h)=>u-h)}function Up(t,e,n,r){let o=t.wall_splits;if(!o?.[e])return;let i=o[e].filter(a=>Math.abs(a-n)>.001);o[e]=i.length>0?i:null,o.every(a=>!a)&&(t.wall_splits=void 0);let s=t.wall_heights?.[e];Array.isArray(s)&&(s.splice(r,1),s.every(a=>a===s[0])&&(t.wall_heights[e]=s[0]??null))}function jp(t,e,n,r,o=1){let i=Dn(t.wall_thickness,t.points.length);if(r===void 0||o<2)i[e]=n;else{let s=i[e],a=Array.isArray(s)?[...s]:new Array(o).fill(typeof s=="number"?s:null);for(;a.length<o;)a.push(null);a[r]=n,i[e]=a.every(l=>l===a[0])?a[0]:a}t.wall_thickness=ai(i)?void 0:i}function Zp(t,e){let n=Math.min(1.5,Math.max(.02,Cp(t)));return Math.abs(n-e)<5e-4?null:n}var qp=.005,Yp=(t,e)=>`room:${t.id}:${e}`;function Xp(t,e,n){let r=t.t,o=e.ceiling??t.floor.height,i=e.points.length,{wall_exterior:s,wall_interior:a}=t.doc.settings,l=c=>{let u=e.wall_heights?.[c]??null,h=n.partsOf(e,c);return(h.length>1?h.map((d,f)=>f):[void 0]).map(d=>{let f=Array.isArray(u)?u[d??0]??null:u,_=e.wall_thickness?.[c]??null,y=Array.isArray(_)?_[d??0]??null:_,b=d===void 0?Gr(e,c):(h[d+1]??Gr(e,c))-h[d],v=P=>n.setHeight(e,c,d,P),w=n.isOuter(e,c)?s:a,x=`${r("wall_n",{a:c+1,b:(c+1)%i+1})}${d===void 0?"":` \xB7 ${r("wall_part",{n:d+1})}`}`,k=d!==void 0&&d>0&&(e.wall_splits?.[c]??[]).some(P=>Math.abs(P-h[d])<.001),$=e.wall_slopes?.[c],R=d===void 0&&typeof $=="number"&&typeof u=="number",F=f??o,z=()=>n.light(c),I=()=>n.light(null);return m`<div class="nf-edge-height${c===n.lit?" nf-edge-on":""}${f!==null?" nf-edge-low":""}" @mouseenter=${z} @mouseleave=${I} @focusin=${z} @focusout=${I}>
        <span><b>${x}</b><br /><span class="nf-muted">${he(t.hass,b)}</span></span>
        ${f===0?m`<span class="nf-muted">${r("wall_none")}</span>`:R?m`<span class="nf-wide nf-split-row" title=${r("wall_slope_hint")}
                >${A(t,r("wall_slope_start"),u,P=>n.setSlope(e,c,P,$),.05,.05)}
                ${A(t,r("wall_slope_end"),$,P=>n.setSlope(e,c,u,P),.05,.05)}</span
              >`:A(t,r("wall_height"),F,P=>v(P>=o-qp?null:Math.max(.05,P)),.05,.05)}
        ${t.admin&&R?m`<button class="nf-btn" title=${r("wall_slope_off")} @click=${()=>n.clearSlope(e,c)}>▭</button>`:g}
        ${t.admin&&f!==null&&!R?m`<button class="nf-btn" title=${r("wall_height_full")} @click=${()=>v(null)}>↥</button>`:g}
        ${t.admin&&d===void 0&&f!==0&&!R?m`<button class="nf-btn" title=${r("wall_slope_hint")} @click=${()=>n.setSlope(e,c,F,F>=o-qp?F+1:o)}>∠ ${r("wall_slope")}</button>`:g}
        ${t.admin&&f!==0?m`<button class="nf-btn" title=${r("wall_none_hint")} @click=${()=>v(0)}>${r("wall_none")}</button>`:g}
        ${t.admin&&b>=.4?m`<button class="nf-btn" title=${r("wall_split_hint")} @click=${()=>n.cut(e,c,d)}>✂</button>`:g}
        ${d===void 0&&b>=.4?Xo(t,Yp(e,c),n.arc):g}
        ${(d===void 0||d===0)&&f!==0?m`<button class="nf-btn" title=${r("wall_view_hint")} @click=${()=>n.openWall(e,c)}>▣ ${r("wall_view")}</button>`:g}
        ${f!==0?m`<span class="nf-wide nf-split-row" title=${r("wall_thickness_hint")}
              >${A(t,r("edge_thickness"),y??w,P=>n.setThickness(e,c,Zp(P,w),d,h.length),.01,.02)}
              ${t.admin&&y!=null?m`<button class="nf-btn" title=${r("wall_thickness_reset")} @click=${()=>n.setThickness(e,c,null,d,h.length)}>↺</button>`:g}</span
            >`:g}
        ${d===void 0?Qo(t,Yp(e,c),n.arc):g}
        ${k?m`<span class="nf-wide nf-split-row"
              >${A(t,r("wall_split_at"),h[d],P=>n.moveCut(e,c,h[d],P),.05,.1)}
              ${t.admin?m`<button class="nf-btn" title=${r("wall_join_hint")} @click=${()=>n.join(e,c,h[d],d)}>⨉</button>`:g}</span
            >`:g}
      </div>`})};return m`<div class="nf-edge-box">
    <h4>${r("wall_heights")}</h4>
    ${e.points.flatMap((c,u)=>l(u))} ${M(r("room_wall_hint"))}
  </div>`}function Qp(t,e,n){let r=e.color_entity&&e.color_entity!=="none"?e.color_entity:n;return r?t.states[r]:void 0}var Ia=["none","rainbow","pulse","flicker"];function ci(t,e,n,r){let o=e.effect_animations??{},i=kc(),s=c=>Ia.includes(c)||i.includes(c),a=[...new Set([...Object.keys(o),...Array.isArray(n)?n.filter(c=>typeof c=="string"):[]])],l=(c,u,h,p=!1)=>{let d=Object.prototype.hasOwnProperty.call(o,c),f=Array.from(c).length,_=p&&d?"light_effect_exists":u!==""&&(f<1||f>255)?"light_effect_name_limit":u!==""&&!d&&Object.keys(o).length>=100?"light_effect_count_limit":void 0;if(h.setCustomValidity?.(_?t.t(_):""),_){let b=h.closest?.("details")?.querySelector("[data-effect-feedback]");return b&&(b.textContent=t.t(_)),h.reportValidity?.(),p||(h.value=d?o[c]:""),!1}let y={...o};return u===""?delete y[c]:Object.defineProperty(y,c,{value:u,enumerable:!0,configurable:!0,writable:!0}),r({effect_animations:y}),!0};return m`<details class="nf-wide">
    <summary>${t.t("light_effects")}</summary>
    <p class="nf-sub">${t.t("light_effects_hint")}</p>
    <label class="nf-check"><input type="checkbox" .checked=${e.animations_enabled!==!1} ?disabled=${!t.admin}
      @change=${c=>r({animations_enabled:c.target.checked})} />${t.t("light_effects_enabled")}</label>
    ${a.map(c=>m`<label class="nf-field nf-wide">${c}
      <select ?disabled=${!t.admin} @change=${u=>{let h=u.target;l(c,h.value,h)}}>
        <option value="" ?selected=${!Object.prototype.hasOwnProperty.call(o,c)}>${t.t("light_effect_unmapped")}</option>
        ${Object.prototype.hasOwnProperty.call(o,c)&&!s(o[c])?m`<option selected value=${o[c]}>${o[c]} (${t.t("light_effect_unmapped")})</option>`:g}
        ${Ia.map(u=>m`<option value=${u} ?selected=${Object.prototype.hasOwnProperty.call(o,c)&&o[c]===u}>${t.t(`light_animation_${u}`)}</option>`)}
        ${i.map(u=>m`<option value=${u} ?selected=${Object.prototype.hasOwnProperty.call(o,c)&&o[c]===u}>${u} (${t.t("plugin")})</option>`)}
      </select></label>`)}
    <label class="nf-field nf-wide">${t.t("light_effect_add")}<input type="text" ?disabled=${!t.admin} placeholder="Regenbogen"
      @input=${c=>c.target.setCustomValidity("")}
      @change=${c=>{let u=c.target;l(u.value,"none",u,!0)&&(u.value="")}} /></label>
    <p class="nf-sub" data-effect-feedback role="status" aria-live="polite">${t.t("light_effect_name_limit")} ${t.t("light_effect_count_limit")}</p>
  </details>`}var Py=/speaker|sound|subwoofer|receiver|smart_|display|tv|media|turntable|projector|console/;function Ty(t,e,n){let r=Z(e),o=t.hass?.language??"en",i=[...ho.map(a=>({type:a,label:t.t(`furn_${a}`)})),...n.flatMap(a=>a.items.map(l=>({type:ue(a.id,l.id),label:`${Ve(l,ue(a.id,l.id),o)} \xB7 ${Ie(a,o)}`})))],s=a=>r==="light"?le(a):r==="climate"?a==="radiator"||cn(a):e.startsWith("vacuum.")?a==="robot_vacuum"||ut(a)&&a.endsWith(":robot_vacuum"):r==="media"?sr(a)||xt(a)&&Py.test(a):xt(a)&&!le(a);return i.filter(a=>s(a.type)).sort((a,l)=>a.label.localeCompare(l.label))}function Iy(t,e,n){if(!t.admin)return g;let r=Ty(t,e.entity_id,n.packs);return r.length===0?g:m`<label class="nf-field nf-wide" title=${t.t("as_furniture_hint")}
    >${t.t("as_furniture")}
    <select @change=${o=>o.target.value&&n.asFurniture(e,o.target.value)}>
      <option value="" selected>${t.t("as_furniture_pick")}</option>
      ${r.map(o=>m`<option value=${o.type}>${o.label}</option>`)}
    </select>
  </label>`}function Dy(t,e,n){let r=t.hass?.language??"en";return $c(e.entity_id,t.hass?.states[e.entity_id]).map(({pluginId:o,name:i,settings:s})=>{let a=Sc(s,e.plugin?.[o]),l=(u,h)=>n({plugin:{...e.plugin??{},[o]:{...e.plugin?.[o]??{},[u]:h}}}),c=s.map(u=>{let h=yo(u.label,r),p=u.hint?yo(u.hint,r):void 0;if(u.type==="boolean")return L(t,h,a[u.key]===!0,f=>l(u.key,f),{title:p});if(u.type==="select"){let f=(u.options??[]).map(([_,y])=>[_,yo(y,r)]);return O(t,h,String(a[u.key]),f,_=>l(u.key,_),{wide:!0,title:p})}let d=f=>Math.min(u.max??1/0,Math.max(u.min??-1/0,f));return A(t,h,Number(a[u.key]),f=>l(u.key,d(f)),u.step??1,u.min)});return m`<h4 class="nf-lib-head nf-wide">🔌 ${i}</h4>${c}`})}function Da(t,e,n){let r=t.t,o=Z(e.entity_id)??(t.hass?Oe(t.hass,e.entity_id):null),i=o==="light",s=e.mount??"ceiling",a=o?oo(o,t.floor?et(t.floor,e.x,e.z):2.5,i?s:null):1,l=p=>n.update(p),c=Rn(t,e.entity_id,e.icon),u=p=>l({mount:p,y:null}),h=["ceiling","floor","table","wall"].map(p=>[p,r(`lamp_${p}`)]);return m`<section>
    <div class="nf-h3row"><h3>${r("device")}</h3>${n.lockButton}</div>
    <p class="nf-dev-title">
      ${c?m`<ha-icon class="nf-dev-icon" .icon=${c}></ha-icon>`:m`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${o?zt(o):""} /></svg>`}
      ${N(t.hass,e.entity_id)}
    </p>
    <div class="nf-form">
      ${i?m`${O(t,r("lamp_mount"),s,h,u,{wide:!0})}${jt(t,e.glow_scale,p=>l({glow_scale:p}))}`:g}
      ${i?ci(t,e,t.hass?.states[e.entity_id]?.attributes.effect_list,l):g}
      ${e.entity_id.startsWith("media_player.")?jt(t,e.sound_rings,p=>l({sound_rings:p}),{label:"sound_rings",hint:"sound_rings_hint",lowest:0}):g}
      ${A(t,r("x"),e.x,p=>l({x:p}))} ${A(t,r("z"),e.z,p=>l({z:p}))}
      ${A(t,r("marker_height"),e.y??a,p=>l({y:Math.max(0,p)}),.05,0)}
      ${A(t,r("rotation"),e.rotation??0,p=>l({rotation:(p%360+360)%360}),1)}
      ${i?L(t,r("device_simple"),!!e.simple,p=>l({simple:p||void 0}),{title:r("device_simple_hint")}):g}
      ${o&&Pl.has(o)?L(t,r("device_confirm"),!!e.confirm,p=>l({confirm:p}),{title:r("device_confirm_hint")}):g}
      ${L(t,r("device_outside"),!!e.outside,p=>l({outside:p||void 0}),{title:r("device_outside_hint")})}
      ${An(t,e.marker??null,p=>l({marker:p}))}
      ${Fn(t,e.pin_offset,p=>l({pin_offset:p}))}
      ${q(t,r("device_name"),e.name??"",p=>l({name:p||null}),{wide:!0,maxlength:60,title:r("device_name_hint"),placeholder:N(t.hass,e.entity_id)})}
      ${e.name?L(t,r("show_name"),!!e.show_name,p=>l({show_name:p||void 0})):g}
      ${At(t,e.icon,p=>l({icon:p}))}
      ${Dy(t,e,l)}
    </div>
    ${t.admin?m`<div class="nf-actions">
          <button class="nf-btn" @click=${()=>n.centre()}>${r("device_centre")}</button>
          ${e.y!==null?m`<button class="nf-btn" @click=${()=>l({y:null})}>${r("height_auto")}</button>`:g}
          ${Iy(t,e,n)}
          <button class="nf-btn nf-danger" @click=${()=>n.remove()}>${r("devices_remove")}</button>
        </div>`:g}
  </section>`}var ui=t=>Number(t);function di(t){if(Array.isArray(t)){let[i,s]=[ui(t[0]),ui(t[1])];return Number.isFinite(i)&&Number.isFinite(s)?[i,s]:null}if(!t||typeof t!="object")return null;let{x:e,y:n}=t,[r,o]=[ui(e),ui(n)];return Number.isFinite(r)&&Number.isFinite(o)?[r,o]:null}function Oa(t){for(let[e,n]of Object.entries(t.states))if(e.startsWith("camera.")&&(di(n.attributes?.vacuum_position)??di(n.attributes?.charger)))return e;return null}var Oy=5e-4,Ly=2,Hy=1.5;function La(t,e){let n=e?t.states[e]?.attributes:void 0;return{at:n?di(n.vacuum_position):null,dock:n?di(n.charger):null}}function Jp(t,e,n=!1){let r=Math.hypot(e.plan[0]-t.plan[0],e.plan[1]-t.plan[1]),o=Math.hypot(e.grid[0]-t.grid[0],e.grid[1]-t.grid[1]);if(!(o>1e-6)||!(r>=Hy))return{cal:null,reason:"close"};let i=r/o;return i>=Oy&&i<=Ly?{cal:{a:t.plan,ga:t.grid,b:e.plan,gb:e.grid,mirror:n}}:{cal:null,reason:"scale"}}var Cy=/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./,Tt=t=>t==="none"?null:t;function Ha(t,e,n){let r=t.t,o=W(t.hass,l=>Cy.test(l)),i=!!e.state_entity&&e.state_entity!=="none",s=i&&!!e.state_entity2&&e.state_entity2!=="none",a=[["left_right",r("furn_state_left_right")],["top_bottom",r("furn_state_top_bottom")]];return m`${T(t,r("furn_state_entity"),e.state_entity??null,void 0,o,l=>n.update({state_entity:Tt(l)}))}
    ${i?T(t,r("furn_state_entity2"),e.state_entity2??null,void 0,o,l=>n.update({state_entity2:Tt(l)})):g}
    ${s?O(t,r("furn_state_split"),e.state_split==="top_bottom"?"top_bottom":"left_right",a,l=>n.update({state_split:l})):g}
    ${M(r("furn_state_hint"),"nf-wide")}`}function Wy(t,e){let r=yn(t.type)&&(!ut(t.type)||Wl(t.type));return le(t.type)?{accept:o=>/^(light|switch|input_boolean)\./.test(o),label:"furn_entity_light"}:t.type==="radiator"||cn(t.type)?{accept:o=>o.startsWith("climate."),label:"furn_entity_climate"}:r?{accept:o=>/^(media_player|switch|input_boolean|light)\./.test(o),label:"furn_entity_tv"}:t.type==="robot_vacuum"?{accept:o=>o.startsWith("vacuum."),label:"furn_entity_vacuum"}:/:(robot_mower|mower_dock)$/.test(t.type)?{accept:o=>o.startsWith("lawn_mower."),label:"furn_entity_mower"}:/:(sprinkler|valve_box)$/.test(t.type)?{accept:o=>/^(valve|switch|input_boolean)\./.test(o),label:"furn_entity_water"}:{accept:o=>/^(switch|media_player|fan|input_boolean|climate|vacuum|cover|valve)\./.test(o)||Tl(e?.states[o]),label:"furn_entity"}}function hi(t,e,n){if(!t.hass)return null;let r=structuredClone(t.doc.floors);for(let o of r)for(let i of o.furniture)i.id===e.id&&(i[n==="fan"?"fan_entity":n]=null);return dt(t.hass,r).get(e.id)?.[n]??null}var By=t=>t==="meter"?"energy_grid":t==="inverter"?"energy_solar_sensor":t==="home_battery"?"energy_battery_sensor":"furn_power",at=(...t)=>m`<div class="nf-form nf-links">${t}</div>`;async function Ny(t){let e=t.hass?Oa(t.hass):null;if(!t.hass||!e)return{at:null,dock:null};let n=()=>{let o=t.hass?.states[e]?.attributes??{};return`${String(o.render_count??"")}|${JSON.stringify(o.vacuum_position??null)}`},r=n();try{await t.hass.fetchWithAuth?.(`/api/camera_proxy/${e}`)}catch{}for(let o=0;o<8&&n()===r;o++)await new Promise(i=>setTimeout(i,100));return La(t.hass,e)}function Vy(t,e){let n=t.t,r=t.doc.settings.vacuum_map??null,o=t.hass?La(t.hass,Oa(t.hass)):{at:null,dock:null},i=r?Math.hypot(r.gb[0]-r.ga[0],r.gb[1]-r.ga[1]):0,s=r&&i>0?Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])/i:0,a=()=>{t.pickPoint(l=>{l&&Ny(t).then(c=>{if(!c.at||!c.dock)return;let u={plan:[e.x,e.z],grid:c.dock},h=Jp(u,{plan:l,grid:c.at},r?.mirror??!1);h.cal&&t.change(p=>{p.settings.vacuum_map=h.cal})})})};return at(M(o.at&&o.dock?r?n("robot_cal_done",{m:s.toFixed(2)}):n("robot_cal_none"):n("robot_cal_need"),"nf-wide"),m`<button class="nf-btn nf-wide" ?disabled=${!t.admin||!o.at||!o.dock} @click=${a}>${n("robot_cal_do")}</button>`,r?L(t,n("robot_cal_mirror"),!!r.mirror,l=>t.change(c=>{c.settings.vacuum_map={...r,mirror:l}})):g,r?m`<button class="nf-btn nf-wide" ?disabled=${!t.admin} @click=${()=>t.change(l=>{l.settings.vacuum_map=null})}>${n("robot_cal_forget")}</button>`:g,M(n("robot_cal_hint"),"nf-wide"))}function Ky(t,e,n){let r=t.t,o=t.doc;if(!o.energy.advanced)return g;let i=zn(o),s=o.floors.flatMap(a=>a.furniture.filter(l=>i.has(l.id)).map(l=>[l.id,`${l.name||r("furn_meter")} \xB7 ${a.name}`]));return at(O(t,r("meter_parent"),Lr(o,e)??"",[["",r("meter_main")],...s],a=>n.update({parent_meter:a||null}),{wide:!0}),M(r("meter_device_hint"),"nf-wide"))}function Gy(t,e,n){let r=t.t,o=t.doc;if(!o.energy.advanced)return g;let i=o.floors.flatMap(c=>c.furniture.filter(u=>dd(o,e,u)).map(u=>[u.id,`${u.name||r("furn_meter")} \xB7 ${c.name}`])),s=!!Qt(o,e),a=e.meter_floors??[],l=(c,u)=>n.update({meter_floors:u?[...a.filter(h=>h!==c),c]:a.filter(h=>h!==c)});return at(O(t,r("meter_parent"),s?e.parent_meter:"",[["",r("meter_parent_none")],...i],c=>n.update({parent_meter:c||null}),{wide:!0}),s?L(t,r("energy_invert"),!!e.meter_invert,c=>n.update({meter_invert:c})):g,s?m`<div class="nf-sub nf-wide">${r("meter_floors")}</div>${o.floors.map(c=>L(t,c.name,a.includes(c.id),u=>l(c.id,u)))}`:g,M(r("meter_sub_hint"),"nf-wide"))}function ef(t,e,n,r){let o=t.t,i=n==="mail"?s=>/^(binary_sensor|sensor|input_boolean)\./.test(s):s=>/^(sensor|binary_sensor|calendar)\./.test(s);return m`<div class="nf-form nf-links">
    ${T(t,o(`care_entity_${n}`),e.care_entity??null,void 0,W(t.hass,i),s=>r.update({care_entity:Tt(s)}))}
    ${n==="plant"?A(t,o("care_thirsty_below"),e.thirsty_below??20,s=>r.update({thirsty_below:Math.min(90,Math.max(1,Math.round(s)))}),1,1):g}
    ${M(o(`care_hint_${n}`),"nf-wide")}
  </div>`}function tf(t,e,n){let r=t.t;return m`<div class="nf-form nf-links">
    ${T(t,r("furn_cover_entity"),e.cover_entity??null,void 0,W(t.hass,o=>o.startsWith("cover.")),o=>n.update({cover_entity:Tt(o)}))}
    ${M(r("furn_cover_hint"),"nf-wide")}
  </div>`}function nf(t,e,n,r){let o=t.t,i=/socket/.test(e.type),s=W(t.hass,c=>/^(light|switch|input_boolean|fan)\./.test(c)),a=e.gang_entities??[],l=c=>u=>{let h=Array.from({length:n},(p,d)=>a[d]??null);h[c]=Tt(u),r.update({gang_entities:h})};return m`<div class="nf-form nf-links">
    ${Array.from({length:n},(c,u)=>T(t,n===1?o(i?"gang_socket_one":"gang_switch_one"):o(i?"gang_socket":"gang_switch",{n:u+1}),a[u]??null,void 0,s,l(u)))}
    ${M(o(i?"gang_socket_hint":"gang_switch_hint"),"nf-wide")}
  </div>`}function Uy(t,e,n){let r=t.t,o=W(t.hass,i=>{let s=t.hass?.states[i]?.attributes;return i.startsWith("sensor.")&&(s?.device_class==="temperature"||s?.unit_of_measurement==="\xB0C"||s?.unit_of_measurement==="\xB0F")});return at(T(t,r("fridge_temp"),e.temp_entity??null,void 0,o,i=>n.update({temp_entity:Tt(i)})),T(t,r("freezer_temp"),e.temp_entity2??null,void 0,o,i=>n.update({temp_entity2:Tt(i)})),M(r("fridge_temp_hint"),"nf-wide"))}function jy(t,e,n){let r=t.t,o=e.extra_lights??[],i=W(t.hass,l=>l.startsWith("light.")&&l!==e.entity&&l!==e.color_entity),s=l=>c=>{let u=[...o];c&&c!=="none"?u[l]=c:u.splice(l,1),n.update({extra_lights:u.filter(Boolean).length?u.filter(Boolean):void 0})},a=Math.min(4,o.length+1);return m`${Array.from({length:a},(l,c)=>T(t,r("lamp_extra_light",{n:c+2}),o[c]??null,void 0,i,s(c)))}${M(r("lamp_extra_hint"),"nf-wide")}`}function rf(t,e,n){let{hass:r}=t;if(!r)return g;let o=t.t,i=le(e.type),s=Wy(e,r),a=W(r,f=>En(r,f)),l=f=>_=>n.update({[f]:Tt(_)}),c=f=>W(r,f),u=(t.doc.settings.roof.strings??[]).filter(f=>f.inverter===e.id).map(f=>f.name),h=!!e.entity&&e.entity!=="none",p=e.type==="fridge_smart"?c(f=>f.startsWith("binary_sensor.")):[],d=e.type==="ceiling_fan"?"fan_hint":i?e.type==="lamp_pendant"?"lamp_hint_pendant":"lamp_hint":yn(e.type)?"furn_links_hint_tv":e.type==="robot_vacuum"?"robot_hint":"furn_links_hint";return m`${at(e.type==="grid_point"?M(o("grid_point_hint"),"nf-wide"):T(t,o(s.label),e.entity??null,hi(t,e,"entity"),c(s.accept),f=>n.update({entity:f})),e.type==="ceiling_fan"?T(t,o("furn_fan_entity"),e.fan_entity??null,hi(t,e,"fan"),c(f=>f.startsWith("fan.")),f=>n.update({fan_entity:f})):g,!i&&!De.includes(e.type)&&!sr(e.type)?Ha(t,e,n):g,i&&h?m`${T(t,o("furn_color_entity"),e.color_entity??null,void 0,c(f=>f.startsWith("light.")&&f!==e.entity),l("color_entity"))}${M(o("furn_color_entity_hint"),"nf-wide")}`:g,i&&h?jy(t,e,n):g,i?jt(t,e.glow_scale,f=>n.update({glow_scale:f})):g,i?ci(t,e,Qp(r,e,e.entity&&e.entity!=="none"?e.entity:hi(t,e,"entity"))?.attributes.effect_list,n.update):g,sr(e.type)?jt(t,e.ambilight,f=>n.update({ambilight:f}),{label:"ambilight",hint:"ambilight_hint",lowest:0}):g,yn(e.type)?jt(t,e.sound_rings,f=>n.update({sound_rings:f}),{label:"sound_rings",hint:"sound_rings_hint",lowest:0}):g,e.type==="grid_point"?g:T(t,o(Qt(t.doc,e)?"meter_sub_power":By(e.type)),e.power??null,hi(t,e,"power"),a,f=>n.update({power:f})))}
    ${Hc(e.type)?Uy(t,e,n):g}
    ${e.type==="meter"?Gy(t,e,n):g}
    ${e.type==="inverter"||e.type==="home_battery"?Ky(t,e,n):g}
    ${e.type==="meter"&&!Qt(t.doc,e)?at(T(t,o("furn_export"),e.export??null,void 0,a,l("export")),M(o("furn_export_hint"),"nf-wide")):g}
    ${e.type==="inverter"&&(t.doc.settings.roof.solar??[]).length>0?M(u.length>0?o("inverter_strings",{names:u.join(", ")}):o("inverter_strings_none"),"nf-wide"):g}
    ${e.type==="home_battery"?at(T(t,o("furn_soc"),e.soc??null,void 0,c(f=>de(f)&&(r.states[f]?.attributes.device_class==="battery"||r.states[f]?.attributes.unit_of_measurement==="%")),l("soc")),T(t,o("furn_charge"),e.charge??null,void 0,a,l("charge")),M(o("furn_charge_hint"),"nf-wide")):g}
    ${e.type==="wallbox"?at(T(t,o("furn_wallbox_status"),e.status??null,void 0,c(f=>To(f)||de(f)),l("status"))):g}
    ${!i||e.entity?m`${L(t,o("device_confirm"),!!e.confirm,f=>n.update({confirm:f}),{title:o("device_confirm_hint")})}
        <div class="nf-form">${An(t,e.marker??null,f=>n.update({marker:f}))}${At(t,e.icon,f=>n.update({icon:f}))}${i?g:Fn(t,e.pin_offset,f=>n.update({pin_offset:f}))}</div>`:g}
    ${e.type==="robot_vacuum"?at(T(t,o("furn_robot_room"),e.room_sensor??null,Bc(r,dt(r,t.doc.floors).get(e.id)?.entity??null,null),c(de),f=>n.update({room_sensor:f}))):g}
    ${e.type==="robot_vacuum"&&h?Vy(t,e):g}
    ${e.type==="fridge_smart"?m`${at(T(t,o("furn_door_left"),e.door_left??null,void 0,p,f=>n.update({door_left:f})),T(t,o("furn_door_right"),e.door_right??null,void 0,p,f=>n.update({door_right:f})))}
        ${M(o("fridge_hint"))}`:g}
    ${M(o(d))}`}var Zy=/^(binary_sensor|device_tracker|input_boolean|switch|sensor)\./,qy=/^(sensor|input_select|select|input_text)\./,Yy=/^(device_tracker|sensor|binary_sensor|lock|climate)\./,Xy=(t,e)=>t.flatMap(n=>n.items.filter(r=>r.vehicle).map(r=>({id:ue(n.id,r.id),label:`${Ve(r,ue(n.id,r.id),e)} \xB7 ${Ie(n,e)}`})));function of(t,e){return e.startsWith("device_tracker.")?t.hass?.states[e]?.attributes.source_type==="router"?2:0:1}function sf(t,e,n,r){return m`<select ?disabled=${!t.admin} @change=${o=>r(o.target.value||null)}>
    <option value="" ?selected=${!n}>${t.t("parking_vehicle_none")}</option>
    ${e.map(o=>m`<option value=${o.id} ?selected=${o.id===n}>${o.label}</option>`)}
  </select>`}function Qy(t,e,n,r){let o=t.t,i=e.type_entity?t.hass?.states[e.type_entity]:void 0,s=Array.isArray(i?.attributes.options)?i.attributes.options:[],a=e.types??[],l=u=>r.update({types:u}),c=(u,h)=>l(a.map((p,d)=>d===u?{...p,...h}:p));return m`<div class="nf-wide">
    <div class="nf-sub">${o("parking_types")}</div>
    ${a.map((u,h)=>m`<div class="nf-parking-row">
        <input type="text" list="nf-parking-states" placeholder=${o("parking_type_state")} .value=${u.state} ?disabled=${!t.admin} @change=${p=>c(h,{state:p.target.value})} />
        ${sf(t,n,u.vehicle,p=>c(h,{vehicle:p??""}))}
        <button class="nf-btn" ?disabled=${!t.admin} title=${o("delete")} @click=${()=>l(a.filter((p,d)=>d!==h))}>✕</button>
      </div>`)}
    <datalist id="nf-parking-states">${s.map(u=>m`<option value=${u}></option>`)}</datalist>
    ${t.admin?m`<button class="nf-btn" @click=${()=>l([...a,{state:s[a.length]??"",vehicle:n[0]?.id??""}])}>${o("parking_add_type")}</button>`:g}
  </div>`}function af(t,e,n,r){let o=t.t,i=Xy(n,t.hass?.language??"en"),s=W(t.hass,f=>Zy.test(f)).sort((f,_)=>of(t,f.id)-of(t,_.id)),a=W(t.hass,f=>qy.test(f)),l=e.car??{},c=t.floor,u=c?.rooms.find(f=>f.points.length>=3&&H([e.x,e.z],f.points)),h=e.vehicle?U(e.vehicle):void 0,p=h?h.size[2]*(e.scale??1):0,d=!!u&&!!c&&p>c.height+1e-6;return m`<div class="nf-form nf-links">
      ${T(t,o("parking_entity"),e.entity??null,void 0,s,f=>r.update({entity:f==="none"?null:f}))}
      <label class="nf-field nf-wide">${o("parking_vehicle")} ${sf(t,i,e.vehicle??null,f=>r.update({vehicle:f}))}</label>
      ${i.length>0?g:M(o("parking_no_pack"),"nf-wide")}
      ${A(t,o("parking_scale"),Math.round((e.scale??1)*100),f=>r.update({scale:Math.min(150,Math.max(30,f))/100}),5,30)}
      ${T(t,o("parking_type_entity"),e.type_entity??null,void 0,a,f=>r.update({type_entity:f==="none"?null:f}))}
      ${e.type_entity?Qy(t,e,i,r):g}
    </div>
    ${d?m`<p class="nf-sub nf-warn">${o("parking_too_tall",{car:G(t.hass,p,2),room:G(t.hass,c.height,2)})}</p>`:g}
    ${M(o("parking_hint"))}
    ${t.hass?m`${T(t,o("live_car_device"),l.device??null,null,W(t.hass,f=>Yy.test(f)),f=>r.update({car:{...l,device:f}}))}
        ${M(o("live_car_device_hint"),"nf-wide")}
        ${T(t,o("live_car_departure_entity"),l.departure??null,void 0,W(t.hass,f=>/^(sensor|input_datetime|time|datetime)\./.test(f)),f=>r.update({car:{...l,departure:f==="none"?null:f}}))}`:g}`}function lf(t,e){let r=Jt(t,e.w,e.d,e.h).treads.findIndex(o=>o.landing);return r>=0?r+1:1}function Jy(t){let e=Jt(Nr(t),t.w,t.d,t.h),n=e.treads.map(Yo),r=0;for(let i=1;i<n.length;i++)r+=Math.hypot(n[i][0]-n[i-1][0],n[i][1]-n[i-1][1]);let o=n.length>1?r/(n.length-1):0;return{rise:e.rise,going:o,measure:2*e.rise+o,steps:e.steps}}function ew(t){let[e,n]=ra[t],r=Jt({...st,shape:t},e,n,2.8),o=26/Math.max(e,n);return m`<svg viewBox="-14 -14 28 28" width="28" height="28" aria-hidden="true">
    ${r.treads.map(i=>E`<polygon points=${i.poly.map(([s,a])=>`${s*o},${a*o}`).join(" ")} fill=${i.landing?"currentColor":"none"} fill-opacity="0.25" stroke="currentColor" stroke-width="0.8" />`)}
  </svg>`}function cf(t,e,n){let r=t.t,o=Nr(e),i=f=>n.update({stair:{...o,...f}}),s=o.shape!=="straight",a=f=>{let[_,y]=ra[f];n.update({stair:{...o,shape:f,run_width:null},w:_,d:y})},l=t.floor?t.doc.floors.filter(f=>f.elevation<t.floor.elevation).sort((f,_)=>_.elevation-f.elevation)[0]:void 0,c=t.floor?t.doc.floors.filter(f=>f.elevation>t.floor.elevation).sort((f,_)=>f.elevation-_.elevation)[0]:void 0,u=f=>{let _=f?l&&t.floor?t.floor.elevation-l.elevation:null:c&&t.floor?c.elevation-t.floor.elevation:null;n.update({stair:{...o,down:f},..._?{h:Math.round(_*1e3)/1e3}:{}})},h=Jy(e),p=f=>G(t.hass,f*100,1),d=h.measure>=.59&&h.measure<=.65&&h.rise<=.21;return m`<div class="nf-form">
    <div class="nf-field nf-wide">
      <span>${r("stair_shape")}</span>
      <div class="nf-swatches nf-stair-shapes" role="radiogroup" aria-label=${r("stair_shape")}>
        ${Js.map(f=>m`<button type="button" class="nf-btn nf-stair-shape" role="radio" aria-checked=${f===o.shape} title=${r(`stair_shape_${f}`)} ?disabled=${!t.admin} @click=${()=>a(f)}>
            ${ew(f)}<span>${r(`stair_shape_${f}`)}</span>
          </button>`)}
      </div>
    </div>
    ${s?O(t,r("stair_turn"),o.turn,[["left",r("stair_turn_left")],["right",r("stair_turn_right")]],f=>i({turn:f})):""}
    ${O(t,r("stair_build"),o.build,ea.map(f=>[f,r(`stair_build_${f}`)]),f=>i({build:f}))}
    ${o.build!=="solid"?L(t,r("stair_risers"),o.risers,f=>i({risers:f}),{wide:!1}):""}
    ${A(t,r("stair_steps"),o.steps??h.steps,f=>i({steps:Math.round(Math.min(40,Math.max(2,f)))}),1,2)}
    ${o.steps!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>i({steps:null})}>${r("height_auto")}</button>`:""}
    ${s&&o.shape!=="spiral"?m`${A(t,r("stair_run_width"),o.run_width??Jt(o,e.w,e.d,e.h).flight,f=>i({run_width:Math.max(.4,f)}),.01,.4)}
        ${o.run_width!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>i({run_width:null})}>${r("height_auto")}</button>`:""}`:""}
    ${o.shape==="l"||o.shape==="u"?m`${A(t,r("stair_landing_after"),o.landing_after??lf(o,e),f=>i({landing_after:Math.round(Math.min(h.steps-1,Math.max(1,f)))}),1,1)}
        ${o.landing_after!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>i({landing_after:null})}>${r("height_auto")}</button>`:""}
        ${M(r("stair_landing_hint",{h:p((o.landing_after??lf(o,e))*Math.abs(e.h)/h.steps)}),"nf-wide")}`:""}
    ${O(t,r("stair_rail"),o.rail,ta.map(f=>[f,r(`stair_rail_${f}`)]),f=>i({rail:f}))}
    ${L(t,r("stair_down"),o.down,u,{title:r("stair_down_hint")})}
    ${O(t,r("stair_opening"),o.opening,na.map(f=>[f,r(`stair_opening_${f}`)]),f=>i({opening:f}),{wide:!0,title:r("stair_opening_hint")})}
    <p class="nf-sub nf-wide ${d?"":"nf-pack-error"}">
      ${r("stair_measures",{steps:h.steps,rise:p(h.rise),going:p(h.going),measure:p(h.measure)})} ${d?"\u2713":`\u2013 ${r("stair_uncomfortable")}`}
    </p>
    ${M(r(o.down?"stair_down_note":o.opening==="headroom"?"stair_up_note":"stair_up_note_plain"),"nf-wide")}
  </div>`}var tw=new Set(["parking","stairwell","rug","grid_point"]),nw={inverter:{label:"furn_model",values:["","slim","hybrid"],text:t=>`inverter_${t||"std"}`},home_battery:{label:"furn_model",values:["","wall","cube"],text:t=>`battery_${t||"std"}`},lamp_pendant:{label:"pendant_shape",values:["","globe","cone","drum"],text:t=>`pendant_${t||"shade"}`},sofa:{label:"sofa_shape",values:["","l","u"],text:t=>`sofa_${t||"straight"}`}};function rw(t,e,n,r){let o=t.hass?.language??"en",i=n.some(s=>e.type.startsWith(`pack:${s.id}:`));return m`<label class="nf-field nf-wide"
    >${t.t("furniture_type")}
    <select ?disabled=${!t.admin} @change=${s=>r.update({type:s.target.value})}>
      ${ho.map(s=>m`<option value=${s} ?selected=${s===e.type}>${t.t(`furn_${s}`)}</option>`)}
      ${n.map(s=>m`<optgroup label=${Ie(s,t.hass?.language??"de")}>
          ${s.items.map(a=>m`<option value=${ue(s.id,a.id)} ?selected=${ue(s.id,a.id)===e.type}>${Ve(a,ue(s.id,a.id),o)}</option>`)}
        </optgroup>`)}
      ${e.type.startsWith("pack:")&&!i?m`<option value=${e.type} selected>${Ne(t.hass,e.type)}</option>`:g}
    </select>
  </label>`}function ow(t,e,n){let r=U(e.type==="parking"?e.vehicle??"":e.type)?.colors;if(!r?.length)return g;let o=t.hass?.language??"en",i=r.find(a=>a.id===e.variant)??r[0],s=a=>Yu(a,o);return m`<div class="nf-form">
    <div class="nf-field nf-wide">
      <span>${t.t("paint_colour")}: ${s(i)}</span>
      <div class="nf-swatches" role="radiogroup" aria-label=${t.t("paint_colour")}>
        ${r.map((a,l)=>m`<button type="button" class="nf-swatch" role="radio" aria-checked=${a.id===i.id} title=${s(a)} style=${`--sw:${a.hex}`} ?disabled=${!t.admin} @click=${()=>n.update({variant:l===0?null:a.id})}></button>`)}
      </div>
    </div>
  </div>`}function iw(t,e,n){let r=nw[e.type];if(!r)return g;let o=r.values.map(i=>[i,t.t(r.text(i))]);return m`<div class="nf-form">${O(t,t.t(r.label),e.variant??"",o,i=>n.update({variant:i||null,...e.type==="sofa"&&i&&e.d<1.4?{d:1.7,w:Math.max(e.w,i==="u"?3:2.4)}:{}}),{wide:!0})}</div>`}function sw(t,e,n){let r=t.t(`furn_${e.type}`),o=r===`furn_${e.type}`?"":r;return m`<label class="nf-field nf-wide"
      >${t.t("furn_name")}
      <input type="text" maxlength="60" .value=${e.name??""} ?disabled=${!t.admin} placeholder=${o} @change=${i=>n.update({name:i.target.value.trim()||null})} />
    </label>
    ${e.name?L(t,t.t("show_name"),!!e.show_name,i=>n.update({show_name:i||void 0})):g}`}function aw(t,e,n){let r=t.t,o=s=>n.update(s),i=t.floor;return m`${A(t,r("x"),e.x,s=>o({x:s}))} ${A(t,r("z"),e.z,s=>o({z:s}))}
    ${A(t,r("width"),e.w,s=>o({w:Math.max(.05,s)}),.01,.05)} ${A(t,r("depth"),e.d,s=>o({d:Math.max(.05,s)}),.01,.05)}
    ${A(t,r("height_m"),e.h,s=>o({h:Math.max(.005,s)}),.01,0)}
    ${A(t,r("rotation"),e.rotation,s=>o({rotation:(s%360+360)%360}),1)}
    ${le(e.type)?g:L(t,r("furn_mirror"),!!e.mirror,s=>o({mirror:s}),{wide:!1,title:r("furn_mirror_hint")})}
    ${e.type==="led_strip"?m`${A(t,r("strip_tilt"),e.tilt??0,s=>o({tilt:Math.max(-90,Math.min(90,Math.round(s)))}),5)}
        ${e.upright?g:A(t,r("strip_rise"),e.rise??0,s=>o({rise:Math.max(-80,Math.min(80,Math.round(s)))}),5)}
        ${L(t,r("strip_upright"),!!e.upright,s=>o({upright:s}),{wide:!1,title:r("strip_upright_hint")})}`:g}
    ${po(e)&&i?m`${A(t,r("mount_height"),e.mount_y??un(i,e),s=>o({mount_y:Math.max(0,s)}),.01,0)}
        ${e.mount_y!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>o({mount_y:null})}>${r("height_auto")}</button>`:g}`:g}
    ${lw(e)&&i?m`${A(t,r("ceiling_here"),so(i,e),s=>o({ceiling_y:Math.abs(s-et(i,e.x,e.z))<.005?null:Math.max(.5,s)}),.01,.5)}
        ${e.ceiling_y!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>o({ceiling_y:null})}>${r("height_auto")}</button>`:g}
        ${uf(t,e)!==null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} title=${r("ceiling_slope_hint")} @click=${()=>o({ceiling_y:uf(t,e)})}>📐 ${r("ceiling_slope")}</button>`:g}
        ${M(r("ceiling_here_hint"),"nf-wide")}`:g}`}function uf(t,e){let n=t.floor;if(!n)return null;let r=fr(t.doc,e.x,e.z);if(r===null)return null;let o=Math.round((r-n.elevation)*1e3)/1e3;return o>.5&&o<et(n,e.x,e.z)-.02?o:null}var lw=t=>Vi.has(t.type)||U(t.type)?.mount==="ceiling";function cw(t,e,n){if(e.type==="stairs"&&e.stair)return g;if(e.type==="stairs")return m`${M(t.t("stairs_hint"))}${t.admin?m`<div class="nf-actions"><button class="nf-btn nf-primary" title=${t.t("stair_upgrade_hint")} @click=${()=>n.update({stair:{...st}})}>${t.t("stair_upgrade")}</button></div>`:g}`;if(e.type!=="stairwell")return g;let r=t.floor&&!t.floor.rooms.some(o=>o.points.length>=3&&jd(Zi(e),o.points));return m`${M(t.t("stairwell_hint"))}${r?m`<p class="nf-sub nf-pack-error">${t.t("stairwell_outside")}</p>`:g}`}function uw(t,e,n){if(!t.admin)return g;let r=t.t,o=!!e.entity&&e.entity!=="none"&&e.type!=="parking",i=t.doc.floors.filter(s=>s.id!==t.floor?.id);return m`<div class="nf-actions">
    <button class="nf-btn" @click=${()=>n.rotate(-90)}>${r("rotate_left")}</button>
    <button class="nf-btn" @click=${()=>n.rotate(90)}>${r("rotate_right")}</button>
    ${o?m`<button class="nf-btn" title=${r("as_device_hint")} @click=${()=>n.toDevice(e)}>${r("as_device")}</button>`:g}
    <button class="nf-btn" @click=${()=>n.duplicate()}>${r("duplicate")}</button>
    <button class="nf-btn nf-danger" @click=${()=>n.remove()}>${r("delete")}</button>
  </div>
  ${i.length?m`<div class="nf-form">${O(t,r("furn_to_floor"),"",[["","\u2013"],...i.map(s=>[s.id,s.name])],s=>s&&n.toFloor(s),{wide:!0,title:r("furn_to_floor_hint")})}</div>`:g}`}function dw(t,e,n){let r=e.tap??null,o=[["",t.t("furn_tap_default")],...lo.map(s=>[s,t.t(`own_action_${s}`)])],i=s=>n.update({tap:{action:r?.action??"navigate",target:r?.target??null,data:r?.data??null,...s}});return m`<div class="nf-form">
    ${O(t,t.t("furn_tap"),r?.action??"",o,s=>s?i({action:s}):n.update({tap:null}),{wide:!0,title:t.t("furn_tap_hint")})}
    ${r&&r.action!=="fire_dom_event"?q(t,t.t(`own_target_${r.action}`),r.target??"",s=>i({target:s||null}),{wide:!0,placeholder:Ws[r.action]}):g}
    ${r&&(r.action==="service"||r.action==="fire_dom_event")?Bs(t,r,s=>i({data:s})):g}
    ${r&&!xt(e.type)&&!U(e.type)?.gangs?m`${An(t,e.marker??null,s=>n.update({marker:s}))}${At(t,e.icon,s=>n.update({icon:s}))}${Fn(t,e.pin_offset,s=>n.update({pin_offset:s}))}`:g}
  </div>`}function hw(t,e,n){let r=t.t,o=e.picture??"",i=o.startsWith("image:"),s=async l=>{let c=l.target,u=c.files?.[0];if(c.value="",!u||!t.hass)return;let{data:h}=await jo(u),p=D("img");await ln(t.hass,p,h),n.update({picture:`image:${p}`})},a=W(t.hass,l=>/^(image|camera|media_player)\./.test(l));return m`<div class="nf-form nf-links">
    ${t.admin?m`<label class="nf-btn nf-wide nf-upload">📷 ${r(i?"picture_replace":"picture_upload")}<input type="file" accept="image/*" hidden @change=${s} /></label>`:g}
    ${i?m`<p class="nf-sub nf-wide">${r("picture_stored")} <button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>n.update({picture:null})}>${r("delete")}</button></p>`:m`${q(t,r("picture_url"),/^[a-z_]+\.[a-z0-9_]+$/.test(o)?"":o,l=>n.update({picture:l||null}),{wide:!0,placeholder:"/local/holiday.jpg"})}
        ${T(t,r("picture_entity"),/^[a-z_]+\.[a-z0-9_]+$/.test(o)?o:null,void 0,a,l=>n.update({picture:l&&l!=="none"?l:null}))}`}
    ${A(t,r("picture_border"),e.picture_border??0,l=>n.update({picture_border:Math.max(0,Math.min(40,Math.round(l)))||null}),1,0)}
    ${O(t,r("picture_fit"),e.picture_fit??"cover",[["cover",r("picture_fit_cover")],["contain",r("picture_fit_contain")]],l=>n.update({picture_fit:l==="contain"?"contain":null}))}
    ${M(r("picture_hint"),"nf-wide")}
  </div>`}var pw=/^(input_boolean|input_select|switch|binary_sensor|sensor|calendar|schedule|sun|person|device_tracker|input_text|select)\./;function fw(t,e,n){let r=t.t,o=e.show_when??null,i=s=>n.update({show_when:{entity:o?.entity??"",state:o?.state??null,invert:o?.invert||void 0,...s}});return m`<div class="nf-form">
    ${T(t,r("furn_show_when"),o?.entity||null,void 0,W(t.hass,s=>pw.test(s)),s=>s&&s!=="none"?i({entity:s}):n.update({show_when:null}))}
    ${o?.entity?m`${q(t,r("furn_show_when_state"),o.state??"",s=>i({state:s||null}),{wide:!0,placeholder:t.hass?.states[o.entity]?.state??"on"})}
        ${L(t,r("furn_show_when_invert"),!!o.invert,s=>i({invert:s||void 0}))}`:g}
    ${M(r("furn_show_when_hint"),"nf-wide")}
  </div>`}function Ur(t,e,n){let r=U(e.type)?.gangs??0,o=r?nf(t,e,r,n):xt(e.type)?rf(t,e,n):tw.has(e.type)?g:m`<div class="nf-form nf-links">${Ha(t,e,n)}</div>`;return m`<section>
    <div class="nf-h3row"><h3>${e.name||t.t("furniture")}</h3>${n.lockButton}</div>
    <div class="nf-form">${sw(t,e,n)} ${rw(t,e,n.packs,n)} ${aw(t,e,n)}</div>
    ${cw(t,e,n)} ${e.type==="stairs"&&e.stair?cf(t,e,n):g} ${iw(t,e,n)} ${ow(t,e,n)}
    ${o} ${e.type.endsWith(":sprinkler")?m`<div class="nf-form">${A(t,t.t("spray_reach"),e.spray??3,i=>n.update({spray:Math.min(15,Math.max(.5,i))}),.5,.5)}${M(t.t("spray_hint"),"nf-wide")}</div>`:g}
    ${Bl(e.type)?hw(t,e,n):g}
    ${U(e.type)?.pet?m`<div class="nf-form nf-links">${T(t,t.t("pet_room_sensor"),e.room_sensor??null,void 0,W(t.hass,i=>/^(sensor|device_tracker|input_select|select)\./.test(i)),i=>n.update({room_sensor:i&&i!=="none"?i:null}))}${M(t.t("pet_room_hint"),"nf-wide")}</div>`:g}
    ${Wi(e.type)?ef(t,e,Wi(e.type),n):g} ${Ci(U(e.type))?tf(t,e,n):g} ${e.type==="parking"?af(t,e,n.packs,n):g}
    ${e.type.startsWith("pack:nextfloor.fahrzeuge:")&&t.admin?m`<section>${M(t.t("vehicle_to_spot_hint"))}<div class="nf-actions"><button class="nf-btn nf-primary" @click=${()=>n.toSpot(e)}>🅿 ${t.t("vehicle_to_spot")}</button></div></section>`:g}
    ${t.admin?dw(t,e,n):g} ${fw(t,e,n)} ${uw(t,e,n)}
  </section>`}var mw=["door","window","opening","garage_door"],gw=/griff|handle|fenster|window|drehgriff/i;function _w(t){let e=[null,15,30,45,60,90,120,180];return t&&!e.includes(t)&&e.push(t),e.sort((n,r)=>(n??0)-(r??0))}function bw(t){let{hass:e}=t,n=i=>e?.states[i],r=i=>n(i)?.attributes.device_class,o=i=>i.startsWith("binary_sensor.")&&mw.includes(r(i)??"");return{covers:W(e,i=>i.startsWith("cover.")),positions:W(e,i=>/^(sensor|number|input_number)\./.test(i)&&Number.isFinite(Number(n(i)?.state))),contacts:W(e,i=>o(i)||de(i)&&ss(n(i))!==null),plainContacts:W(e,o),handles:W(e,i=>i.startsWith("binary_sensor.")?typeof n(i)?.attributes.window_state=="string":de(i)&&(ss(n(i))!==null||gw.test(`${i} ${N(e,i)}`))),numbers:W(e,de),locks:W(e,i=>i.startsWith("lock."))}}function Wa(t,e,n){if(!t.hass)return null;let r=structuredClone(t.doc.floors);for(let o of r)for(let i of o.openings)i.id===e.id&&(i[n]=null);return ir(t.hass,r).get(e.id)?.[n]??null}var bt=t=>t==="none"?null:t;function yw(t,e,n){let r=e.type==="door"?Gi:Ui,o=Ct({type:e.type,style:null},n.isExterior(e)),i=e.style&&r.includes(e.style)?e.style:"",s=[["",t.t("style_auto",{style:t.t(`style_${o}`)})],...r.map(a=>[a,t.t(`style_${a}`)])];return O(t,t.t("opening_style"),i,s,a=>n.update({style:a||null}),{wide:!0})}function Ca(t,e,n,r,o){return m`<label class="nf-field"
    >${t.t(r)}
    <input
      type="number"
      step="0.05"
      min="0.1"
      max="3"
      placeholder=${t.t("sidelight_auto")}
      .value=${e[n]==null?"":String(e[n])}
      ?disabled=${!t.admin}
      @change=${i=>{let s=Number(i.target.value);o.update({[n]:Number.isFinite(s)&&s>0?Math.min(3,Math.max(.1,Math.round(s*100)/100)):null})}}
    />
  </label>`}function ww(t,e,n){if(e.type!=="door")return g;let r=Ct(e,n.isExterior(e));return r==="sidelight"?m`${L(t,t.t("sidelight_hinge"),!!e.sidelight_hinge,o=>n.update({sidelight_hinge:o}),{wide:!1,title:t.t("sidelight_hinge_hint")})}
      ${Ca(t,e,"sidelight_width","sidelight_width",n)}`:r==="sidelights"?m`${Ca(t,e,"sidelight_width","sidelight_width_left",n)} ${Ca(t,e,"sidelight_width2","sidelight_width_right",n)}`:g}function vw(t,e,n){return e.type!=="window"||Ct(e,n.isExterior(e))!=="glass_wall"?g:m`<label class="nf-field"
      >${t.t("glass_panes")}
      <input
        type="number"
        step="1"
        min="0"
        max="40"
        placeholder=${t.t("glass_panes_auto")}
        .value=${e.panes==null?"":String(e.panes)}
        ?disabled=${!t.admin}
        @change=${r=>{let o=r.target.value.trim(),i=Number(o);n.update({panes:o===""||!Number.isFinite(i)?null:Math.min(40,Math.max(0,Math.round(i)))})}}
      />
    </label>
    ${M(t.t("glass_panes_hint"),"nf-wide")}`}function df(t,e,n,r,o){let i=n===1,s=t.t,a=i?e.tilt:e.tilt2??null,l=i?e.contact:e.contact2,c=(i?e.sensor:e.sensor2)??(a&&a!=="none"?"contact_tilt":"contact"),u=["contact","handle","contact_tilt"].map(f=>[f,s(`sensor_kind_${f}`)]),h=f=>{let _=f==="contact_tilt"?{}:i?{tilt:null}:{tilt2:null};r.update({...i?{sensor:f}:{sensor2:f},..._})},p=f=>r.update(i?{contact:f}:{contact2:bt(f)}),d=e.tilt_angle&&e.tilt_angle!=="none";return m`${O(t,s("sensor_kind"),c,u,h,{wide:!0})}
    ${c==="handle"?T(t,s("handle_entity"),l,void 0,o.handles,f=>p(f==="none"?i?"none":null:f)):T(t,s("contact_entity"),l,i?Wa(t,e,"contact"):void 0,o.plainContacts,p)}
    ${c==="contact_tilt"?T(t,s("tilt_entity"),a,void 0,o.contacts,f=>r.update(i?{tilt:bt(f)}:{tilt2:bt(f)})):g}
    ${i?m`${T(t,s("tilt_angle_entity"),e.tilt_angle??null,void 0,o.numbers,f=>r.update({tilt_angle:bt(f)}))}
        ${d?m`${A(t,s("tilt_angle_max"),e.tilt_max??15,f=>r.update({tilt_max:Math.min(90,Math.max(1,f))}),1,1)}
            ${A(t,s("tilt_angle_offset"),e.tilt_offset??0,f=>r.update({tilt_offset:f}),.5)}
            ${L(t,s("tilt_angle_invert"),!!e.tilt_invert,f=>r.update({tilt_invert:f}))}`:g}`:g}`}function kw(t,e,n,r){let o=t.t,i=e.type==="window",s=Wa(t,e,"cover"),a=e.cover!=="none"&&(e.cover||s);return m`${T(t,o(i?"cover_entity":"door_cover"),e.cover,s,r.covers,l=>n.update({cover:l}))}
    ${a?m`${T(t,o("cover_position_entity"),e.position??null,void 0,r.positions,l=>n.update({position:bt(l)}))}
        ${e.position?L(t,o("cover_position_invert"),!!e.position_inverted,l=>n.update({position_inverted:l})):g}
        ${L(t,o("device_confirm"),!!e.confirm,l=>n.update({confirm:l}),{title:o("cover_confirm_hint")})}
        ${i?m`${O(t,o("blind_kind"),e.blind??"roller",[["roller",o("blind_roller")],["venetian",o("blind_venetian")],["inside",o("blind_inside")]],l=>n.update({blind:l==="roller"?null:l}))}
            ${T(t,o("cover2_entity"),e.cover2??null,void 0,r.covers,l=>n.update({cover2:bt(l)}))}`:g}
        ${!i&&e.type!=="garage"?T(t,o("cover2_entity"),e.cover2??null,void 0,r.covers,l=>n.update({cover2:bt(l)})):g}
        ${A(t,o("cover_my"),e.my_position??0,l=>n.update({my_position:l>0?Math.min(100,Math.round(l)):null}),5,0)}
        ${M(o("blind_hint"),"nf-wide")}`:g}`}function xw(t,e,n,r){let o=t.t,i=e.leaves===2;return m`${T(t,o(i?"contact_main":"contact_entity"),e.contact,Wa(t,e,"contact"),r.contacts,s=>n.update({contact:s}))}
    ${i&&e.type!=="garage"?T(t,o("contact_second"),e.contact2,void 0,r.contacts,s=>n.update({contact2:bt(s)})):g}
    ${e.type==="door"?L(t,o("door_shut"),!!e.shut,s=>n.update({shut:s}),{title:o("door_shut_hint")}):g}
    ${e.type==="door"&&e.style!=="sliding"&&e.style!=="passage"?O(t,o("door_angle"),String(e.open_angle??""),_w(e.open_angle).map(s=>[String(s??""),s?`${s}\xB0`:o("door_angle_default")]),s=>n.update({open_angle:s?Number(s):null}),{title:o("door_angle_hint")}):g}
    ${e.type==="door"?m`${T(t,o("opening_lock"),e.lock??null,void 0,r.locks,s=>n.update({lock:bt(s)}))}${M(o("opening_lock_hint"),"nf-wide")}`:g}`}function Ba(t,e,n){let r=t.t,o=bw(t),i=fn(e),[s,a,l]=[e.type==="window",e.type==="garage",e.type==="door"],c=d=>n.update(d),u=Object.keys(pn).map(d=>m`<button class="nf-chip" aria-pressed=${d===i} @click=${()=>n.setPreset(e,d)}>${r(`preset_${d}`)}</button>`),h=[["left",r("hinge_left")],["right",r("hinge_right")]],p=[["",r("opening_mark_open")],["closed",r("opening_mark_closed")]];return m`<section>
    <div class="nf-h3row"><h3>${r(`preset_${i}`)}</h3>${n.lockButton}</div>
    ${t.admin?m`<div class="nf-presets" role="group" aria-label=${r("opening_type")}>${u}</div>`:g}
    ${t.admin&&!a?m`<div class="nf-actions">
          <button class="nf-btn" title=${r("flip_hinge_hint")} @click=${()=>c({hinge:e.hinge==="left"?"right":"left"})}>⇆ ${r(e.leaves===2?"flip_main_leaf":"flip_hinge")}</button>
          ${l?m`<button class="nf-btn" title=${r("flip_swing_hint")} @click=${()=>c({swing:e.swing==="out"?"in":"out"})}>⇅ ${r("flip_swing")}</button>`:g}
        </div>`:g}
    <div class="nf-form">
      ${A(t,r("width"),e.width,d=>c({width:Math.max(.3,d)}),.01,.3)}
      ${A(t,r("opening_position"),e.offset,d=>c({offset:Math.max(0,d)}),.01,0)}
      ${s?A(t,r("sill"),e.sill,d=>c({sill:Math.max(0,d)}),.01,0):g}
      ${A(t,r("opening_height"),e.height,d=>c({height:Math.max(.3,d)}),.01,.3)}
      ${a?g:yw(t,e,n)} ${ww(t,e,n)} ${vw(t,e,n)}
      ${s&&e.style!=="glass_wall"?O(t,r("window_opens"),e.opens??"turn",ql.map(d=>[d,r(`window_opens_${d}`)]),d=>c({opens:d==="turn"?null:d}),{wide:!0,title:r("window_opens_hint")}):g}
      ${O(t,r("opening_mark"),e.mark==="closed"?"closed":"",p,d=>c({mark:d==="closed"?"closed":null}),{wide:!0,title:r("opening_mark_hint")})}
      ${a?g:O(t,r(e.leaves===2?"main_leaf":"hinge"),e.hinge,h,d=>c({hinge:d}),{wide:!0})}
      ${s?O(t,r("sill_boards"),e.sill_boards??"auto",[["auto",r("sill_boards_auto")],["none",r("sill_boards_none")],["inside",r("sill_boards_inside")],["outside",r("sill_boards_outside")]],d=>c({sill_boards:d==="auto"?null:d}),{wide:!0}):g}
      ${s?L(t,r("opening_rain_warning"),e.rain_warning!==!1,d=>c({rain_warning:d?void 0:!1}),{wide:!0}):g}
      ${s&&n.isBelowGround?.(e)?L(t,r("opening_light_well"),e.light_well!==!1,d=>c({light_well:d?null:!1}),{wide:!0}):g}
      ${kw(t,e,n,o)}
      ${s?m`${e.leaves===2?m`<h4 class="nf-lib-head nf-wide">${r("leaf_main")}</h4>`:g}${df(t,e,1,n,o)}
          ${e.leaves===2?m`<h4 class="nf-lib-head nf-wide">${r("leaf_second")}</h4>${df(t,e,2,n,o)}`:g}`:xw(t,e,n,o)}
    </div>
    ${M(r(s?"opening_hint":a?"garage_hint":"door_hint"))}
    ${t.admin?m`<div class="nf-actions"><button class="nf-btn nf-danger" @click=${()=>n.remove()}>${r("delete")}</button></div>`:g}
  </section>`}function On(t){let e=t.roof.floorsTopDown();return e.length<2?g:m`<div class="nf-seg nf-dev-source">${e.map(n=>m`<button aria-pressed=${n.id===t.floorId} @click=${()=>t.setFloorId(n.id)}>${n.name}</button>`)}</div>`}function jr(t,e,n){return t.admin?m`<button class="nf-btn nf-fix" aria-pressed=${e} title=${t.t("fix_hint")} @click=${n}>${e?`\u{1F512} ${t.t("unfix")}`:`\u{1F513} ${t.t("fix")}`}</button>`:g}function Ln(t,e,n,r){return m`<div class="nf-seg nf-dev-source">${e.map(([o,i])=>m`<button aria-pressed=${o===n} ?disabled=${!t.admin} @click=${()=>r(o)}>${i}</button>`)}</div>`}function nn(t,e){let{t:n,doc:r,hass:o}=t,i=n(`compass_${zs(e,r.settings.north??0)}`);if(e.key===Te)return n("solar_ground");if(e.wall){let l=r.floors.find(c=>c.id===e.wall.floorId);return`${n("solar_wall")} ${l?.name??""} \xB7 ${i} \xB7 ${G(o,e.lu,1)} m`}let s=r.settings.roof.sections??[],a=e.section?n("solar_section",{n:s.findIndex(l=>l.id===e.section)+1}):n("solar_main");return e.flat?`${a} \xB7 ${n("solar_flat")}`:`${a} \xB7 ${i} \xB7 ${Math.round(e.pitch)}\xB0`}var pf=(t,e)=>m`<div class="nf-h3row"><h3>${t}</h3>${e}</div>`,ff=(t,e)=>m`<button class="nf-btn nf-back" @click=${e}>‹ ${t}</button>`,hf=(t,e)=>n=>Math.max(t,Math.min(e,fe(n)));function $w(t,e){let{host:n,roof:r}=t,o=n.t,i=w=>r.patchSection(w),s=e.shape==="flat"||e.shape==="parapet",a=e.shape==="pent",l=e.axis==="x"?[o("roof_side_top"),o("roof_side_bottom")]:[o("roof_side_left"),o("roof_side_right")],[c,u]=e.flip?[l[1],l[0]]:l,h=!!n.doc.settings.lock_plan,p=(w,x,k,$=.05,R=0)=>A(n,w,x,F=>k(Math.max(R,fe(F))),$,R),d=[...n.doc.floors].filter(w=>w.rooms.length>0).sort((w,x)=>x.elevation-w.elevation),f=vs(n.doc,e)?.id,_=w=>{let x=n.doc.floors.find(R=>R.id===w);if(!x)return;let k=fe(x.elevation+x.height),$=k-e.base;i({base:k,eave_a:fe(e.eave_a+$),eave_b:fe(e.eave_b+$)})},y=h?m`<button class="nf-btn nf-fix" aria-pressed="true" title=${o("lock_plan_hint")} @click=${()=>t.toggleLockPlan()}>🔒 ${o("plan_locked")}</button>`:jr(n,!!e.locked,()=>i({locked:!e.locked})),b=Xl.map(w=>[w,o(`roof_shape_${w}`)]),v=(w,x)=>m`<button class="nf-btn" title=${o("roof_dormer_hint")} @click=${()=>r.addDormer(w)}>+ ${o("roof_dormer")} ${x}</button>`;return m`${ff(o("roof_sections"),()=>r.sectionId=null)}
    <section>
      ${On(t)}
      ${pf(`${e.dormer?o("roof_dormer"):o("roof_section")} ${kh(n.doc.settings.roof.sections??[],e.id)}`,n.admin?y:g)}
      ${O(n,o("roof_shape"),e.shape,b,w=>i({shape:w,...w==="gable"||w==="hip"||w==="halfhip"?{}:{ends:null}}),{wide:!0})}
      ${e.shape==="gable"||e.shape==="hip"||e.shape==="halfhip"?Ew(n,e,i):g}
      ${s?g:Ln(n,[["x",o("roof_axis_x")],["z",o("roof_axis_z")]],e.axis,w=>i({axis:w}))}
      ${L(n,o("roof_open"),!!e.open,w=>i({open:w}),{title:o("roof_open_hint")})}
      <div class="nf-form">
        ${s?p(o("roof_height"),e.eave_a,w=>i({eave_a:w,eave_b:w})):m`${p(`${o("roof_eave")} ${a?"":c}`,e.eave_a,w=>i({eave_a:w}))}
            ${a?g:p(`${o("roof_eave")} ${u}`,e.eave_b,w=>i({eave_b:w}))}
            ${p(`${o("roof_pitch_short")} ${a?"":c}`,e.pitch_a,w=>i({pitch_a:Math.min(75,w)}),1)}
            ${a?g:p(`${o("roof_pitch_short")} ${u}`,e.pitch_b,w=>i({pitch_b:Math.min(75,w)}),1)}`}
        ${p(o("roof_base"),e.base,w=>i({base:w}))}
        ${e.points?.length?g:A(n,o("roof_rotation"),e.rotation??0,w=>i({rotation:(Math.round(w)%360+540)%360-180||null}),1)}
        ${O(n,o("roof_on_floor"),f??"",d.map(w=>[w.id,w.name]),_,{title:o("roof_on_floor_hint")})}
        ${M(o("roof_base_hint"),"nf-wide")}
        ${p(o("roof_overhang"),e.overhang??n.doc.settings.roof.overhang,w=>i({overhang:Math.min(2,w)}))}
      </div>
      ${s&&n.admin?m`${X(m`<button class="nf-btn" title=${o("roof_outline_hint")} @click=${()=>r.takeOutline()}>${o("roof_outline")}</button>`,e.points?m`<button class="nf-btn" @click=${()=>i({points:null})}>${o("roof_rect")}</button>`:g)}
          ${e.points?X(...e.points.map((w,x)=>m`<button class="nf-chip" title=${o("delete_point")} ?disabled=${(e.points?.length??0)<=3} @click=${()=>r.removeCorner(x)}>${x+1} ×</button>`)):g}
          ${M(o(e.points?"roof_points_hint":"roof_outline_hint"))}`:g}
      ${M(`${o("roof_ridge_height")}: ${he(n.hass,Wt(e))} \xB7 ${o("roof_section_hint")}`)}
      ${n.admin?X(s?g:m`<button class="nf-btn" title=${o("roof_swap_hint")} @click=${()=>i({flip:!e.flip})}>⇅ ${o("roof_swap")}</button>`,!s&&!e.dormer&&!e.open?m`${v("a",c)}${a?g:v("b",u)}`:g,m`<button class="nf-btn" @click=${()=>r.duplicateSection()}>${o("duplicate")}</button>`,m`<button class="nf-btn nf-danger" @click=${()=>r.removeSection()}>${o("delete")}</button>`):g}
    </section>`}function Sw(t,e){let{host:n,roof:r}=t,o=n.t,i=te(n.doc),s=p=>r.patchWindow(p),a=W(n.hass,p=>p.startsWith("cover.")),l=W(n.hass,p=>To(p)||de(p)),c=(p,d,f,_)=>T(n,o(p),d??null,void 0,f,y=>s({[_]:y==="none"?null:y})),u=p=>{let d=i.find(f=>f.key===p);d&&s({...$r(d,e.id),w:e.w,h:e.h,cover:e.cover,contact:e.contact,tilt:e.tilt,window:e.window,name:e.name})},h=(n.doc.settings.roof.windows??[]).findIndex(p=>p.id===e.id)+1;return m`${ff(o("roof_sections"),()=>r.windowId=null)}
    <section>
      ${pf(`\u{1FA9F} ${o("roof_window")} ${h}`,jr(n,!!e.locked,()=>s({locked:!e.locked})))}
      <div class="nf-form">
        ${O(n,o("solar_face"),e.face,i.map(p=>[p.key,nn(n,p)]),u,{wide:!0})}
        ${A(n,o("width"),e.w??.78,p=>s({w:hf(.3,4)(p)}),.01,.3)}
        ${A(n,o("height_m"),e.h??1.18,p=>s({h:hf(.3,4)(p)}),.01,.3)}
        ${A(n,o("solar_u"),e.u,p=>s({u:fe(p)}),.05)} ${A(n,o("solar_v"),e.v,p=>s({v:fe(p)}),.05)}
        ${c("cover_entity",e.cover,a,"cover")} ${c("contact_entity",e.contact,l,"contact")}
        ${c("roof_window_tilt",e.tilt,l,"tilt")} ${c("roof_window_motor",e.window,a,"window")}
        ${q(n,o("roof_window_name"),e.name??"",p=>s({name:p||null}),{wide:!0,maxlength:64})}
      </div>
      ${M(o("roof_window_motor_hint"))} ${M(o("roof_window_hint"))}
      ${n.admin?X(m`<button class="nf-btn nf-danger" @click=${()=>r.removeWindow()}>${o("delete")}</button>`):g}
    </section>`}function Mw(t){let{host:e,roof:n}=t,r=e.doc.settings.roof.windows??[],o=new Map(te(e.doc).map(s=>[s.key,s])),i=s=>{n.windowId=s,n.sectionId=null};return m`<section>
    <h3>🪟 ${e.t("roof_windows")}</h3>
    ${M(e.t(o.size>0?"roof_windows_hint":"solar_no_roof"))}
    ${r.length>0?m`<div class="nf-room-list">
          ${r.map((s,a)=>{let l=o.get(s.face);return m`<div class="nf-row"><button class="nf-dev-name" @click=${()=>i(s.id)}><span>${e.t("roof_window")} ${a+1} · ${l?nn(e,l):e.t("solar_face_gone")}</span></button></div>`})}
        </div>`:g}
    ${X(m`<button class="nf-btn" ?disabled=${!e.admin||o.size===0} @click=${()=>n.addWindow()}>+ ${e.t("roof_window")}</button>`)}
  </section>`}function Ew(t,e,n){let r=t.t,o=e.shape,[i,s]=e.ends??[o,o],a=["gable","hip","halfhip"].map(u=>[u,r(`roof_shape_${u}`)]),l=u=>n({ends:u[0]===o&&u[1]===o?null:u}),c=i==="halfhip"||s==="halfhip";return m`<div class="nf-form">
    ${O(t,r("roof_end_start"),i,a,u=>l([u,s]))}
    ${O(t,r("roof_end_end"),s,a,u=>l([i,u]))}
    ${c?m`<label class="nf-field nf-wide" title=${r("roof_halfhip_hint")}
          >${r("roof_halfhip")} · ${Math.round((e.halfhip??.55)*100)} %
          <input type="range" min="20" max="90" step="5" .value=${String(Math.round((e.halfhip??.55)*100))} ?disabled=${!t.admin} @change=${u=>n({halfhip:Number(u.target.value)/100})} />
        </label>`:g}
  </div>`}function mf(t){let{host:e,roof:n}=t,r=e.doc.settings.roof,o=r.type==="custom";if(n.window)return Sw(t,n.window);if(o&&n.section)return $w(t,n.section);let i=o?r.sections??[]:[],s=e.t,a=(l,c)=>`${c+1} \xB7 ${l.dormer?s("roof_dormer"):s(`roof_shape_${l.shape}`)} \xB7 ${G(e.hass,Math.abs(l.x1-l.x0),1)} \xD7 ${G(e.hass,Math.abs(l.z1-l.z0),1)} m \xB7 ${s("roof_ridge_height")} ${G(e.hass,Wt(l),1)} m`;return m`<section>
      ${On(t)}
      <h3>${s("roof_sections")}</h3>
      ${M(s("roof_sections_hint"))}
      ${o?m`<div class="nf-room-list">${i.map((l,c)=>m`<div class="nf-row"><button class="nf-dev-name" @click=${()=>n.sectionId=l.id}><span>${a(l,c)}</span></button></div>`)}</div>
          ${X(m`<button class="nf-btn" ?disabled=${!e.admin} @click=${()=>n.useSections(!0)}>${s("roof_sections_regen")}</button>`,m`<button class="nf-btn" ?disabled=${!e.admin} @click=${()=>e.change(l=>l.settings.roof.type="gable")}>${s("roof_sections_off")}</button>`)}`:X(m`<button class="nf-btn nf-primary" ?disabled=${!e.admin} @click=${()=>n.useSections()}>${s("roof_sections_start")}</button>`)}
    </section>
    ${Mw(t)}`}var Na=40,gf=60;function Va(t){let e=new Set((t.solar??[]).map(n=>n.string).filter(Boolean));t.strings=(t.strings??[]).filter(n=>e.has(n.id))}function _f(t,e,n,r){let o=t.solar?.find(i=>i.id===e);if(o){if(n==="new"){let i=t.strings??[],s={id:r.id,name:r.name(i.length+1),entity:o.entity??null,inverter:null};t.strings=[...i,s],o.string=s.id}else o.string=n;Va(t)}}function bf(t,e){let n=new Set(t??[]);return n.delete(e)||n.add(e),n.size>0?[...n].sort():null}function yf(t){let e=t.split(/[,;\s]+/).map(r=>Number.parseInt(r,10)).filter(r=>Number.isFinite(r)&&r>=0);return e.length===0?null:e.length===1?{cols:Math.max(1,Math.min(gf,e[0])),layout:null,skip:null}:{layout:e.slice(0,Na).map(r=>Math.min(gf,r)),rows:Math.min(Na,e.length),cols:Math.max(1,...e),skip:null}}function wf(t,e){let n=Math.max(1,Math.min(Na,Math.round(e))),r=t.layout;return r?.length?{rows:n,layout:Array.from({length:n},(o,i)=>r[i]??r[r.length-1])}:{rows:n}}var vf=t=>t.layout?.length?t.layout.join(", "):String(t.cols),Rw=["portrait","look","name","string","entity","module_w","module_h","wp"];function Aw(t){let e={};for(let n of Rw)e[n]=t[n];return e}function kf(t,e,n){let r=Aw(e);if(n===Te)return{...kr(t,e.id),...r,rows:e.rows,cols:e.cols};let o=te(t).find(s=>s.key===n);if(o)return Ao(o,{...e,...r});let i=He(t).find(s=>s.key===n);return i?Ao(i,{...e,...r,rows:1}):null}var xf=400;function Ka(t,e){let n=t?We(t,e).length:0;return{modules:n,kwp:n*(e.wp??xf)/1e3}}function $f(t){let{host:e,roof:n}=t,r=e.t,o=e.doc.settings.roof.solar??[],i=e.doc.settings.roof.strings??[],s=te(e.doc),a=new Map(o.map(u=>[u.id,ke(e.doc,u,s)])),l=(u,h)=>{let p=a.get(u.id),d=Ka(p,u),f=r("solar_summary",{n:d.modules,kwp:G(e.hass,d.kwp,1)});return m`<div class="nf-row">
      <button class="nf-dev-name" @click=${()=>n.selectField(u.id)}>
        <span>${u.name||`${r("solar_field")} ${h+1}`} · ${p?nn(e,p):r("solar_face_gone")} · ${f}</span>
      </button>
    </div>`},c=u=>{let h=o.filter(_=>_.string===u.id),p=h.map(_=>Ka(a.get(_.id),_)),d=p.reduce((_,y)=>_+y.modules,0),f=p.reduce((_,y)=>_+y.kwp,0);return m`<p class="nf-sub">🔗 <b>${u.name}</b> · ${r("solar_string_sum",{fields:h.length,n:d,kwp:G(e.hass,f,1)})}</p>`};return m`<section>
    ${On(t)}
    <h3>☀ ${r("solar_fields")}</h3>
    ${M(r(s.length>0?"solar_hint":"solar_no_roof"))}
    ${o.length>0?m`<div class="nf-room-list">${o.map(l)}</div>`:g}
    ${X(m`<button class="nf-btn nf-primary" ?disabled=${!e.admin||s.length===0} @click=${()=>n.addField()}>+ ${r("solar_add")}</button>`,m`<button class="nf-btn" ?disabled=${!e.admin} @click=${()=>n.addGroundField()}>+ ${r("solar_add_ground")}</button>`,m`<button class="nf-btn" ?disabled=${!e.admin||!t.floorId} @click=${()=>n.addWallField()}>+ ${r("solar_add_wall")}</button>`)}
    ${i.length>0?m`<h4 class="nf-lib-head">${r("solar_strings")}</h4>${i.map(c)}`:g}
  </section>`}function Fw(t,e){let{host:n,roof:r}=t,o=n.t,i=W(n.hass,p=>En(n.hass,p)),s=n.doc.settings.roof.strings??[],a=s.find(p=>p.id===e.string),l=[["",o("solar_string_none")],...s.map(p=>[p.id,p.name]),["new",`+ ${o("solar_string_new")}`]],c=O(n,o("solar_string"),e.string??"",l,p=>r.setString(p===""?null:p),{wide:!0});if(!a)return m`${c}${T(n,o("solar_entity"),e.entity??null,void 0,i,p=>r.patchField({entity:p==="none"?null:p}))}`;let u=n.hass?dt(n.hass,n.doc.floors):null,h=n.doc.floors.flatMap(p=>p.furniture.filter(d=>d.type==="inverter").map(d=>({item:d,floor:p}))).map(({item:p,floor:d},f)=>{let _=u?.get(p.id)?.entity,y=p.name?.trim()||(_?N(n.hass,_):"");return[p.id,`${y||`${o("furn_inverter")} ${f+1}`} \xB7 ${d.name}`]});return m`${c}
    ${q(n,o("solar_string_name"),a.name,p=>r.patchString({name:p||a.name}),{wide:!0})}
    ${T(n,o("solar_string_entity"),a.entity??null,void 0,i,p=>r.patchString({entity:p==="none"?null:p}))}
    ${O(n,o("solar_string_inverter"),a.inverter??"",[["",o(h.length>0?"solar_string_inverter_none":"solar_string_inverter_missing")],...h],p=>r.patchString({inverter:p||null}),{wide:!0})}`}function Sf(t,e){let{host:n,roof:r}=t,o=n.t,i=k=>r.patchField(k),s=te(n.doc),a=ke(n.doc,e,s),l=e.face===Te,c=_r(e),u=Ka(a,e),h=c.reduce((k,$)=>k+$,0)-(e.skip?.length??0),p=(n.doc.settings.roof.solar??[]).findIndex(k=>k.id===e.id)+1,d=[...a?[]:[["",o("solar_face_gone")]],...s.map(k=>[k.key,nn(n,k)]),[Te,o("solar_ground")],...He(n.doc).map(k=>[k.key,nn(n,k)])],f=k=>{let $=kf(n.doc,e,k);$&&i($)},_=(k,$,R=fe)=>F=>Math.max(k,Math.min($,R(F))),y=k=>i(xr(n.doc,e,k)),b=k=>i({rotation:(Math.round(k)%360+360)%360||null}),v=a?.wall?"solar_flip_wall":"solar_flip",w=(k,$,R)=>A(n,o($),e[k]??R,F=>i({[k]:_(.3,3)(F)}),.01,.3),x=!!e.layout?.length&&new Set(e.layout).size>1;return m`<button class="nf-btn nf-back" @click=${()=>r.solarId=null}>‹ ${o("solar_fields")}</button>
    <section>
      ${On(t)}
      <div class="nf-h3row">
        <h3>☀ ${e.name||`${o("solar_field")} ${p}`}</h3>
        ${jr(n,!!e.locked,()=>i({locked:!e.locked}))}
      </div>
      <div class="nf-form">
        ${q(n,o("solar_name"),e.name??"",k=>i({name:k||null}),{wide:!0,placeholder:o("solar_name_hint")})}
        ${O(n,o("solar_face"),a?e.face:"",d,f,{wide:!0})}
        ${A(n,o("solar_rows"),c.length,k=>i(wf(e,k)),1,1)}
        <label class="nf-field" title=${o("solar_cols_hint")}
          >${o("solar_cols")}
          <input
            type="text"
            inputmode="numeric"
            ?disabled=${!n.admin}
            .value=${vf(e)}
            @change=${k=>{let $=yf(k.target.value);$&&i($)}}
          />
        </label>
      </div>
      ${M(`${a&&!a.unbounded?`${o("solar_face_size",{w:G(n.hass,a.lu,1),h:G(n.hass,a.ls,1)})} \xB7 `:""}${o("solar_cols_hint")}`)}
      ${x?Ln(n,["left","center","right"].map(k=>[k,o(`solar_align_${k}`)]),e.align??"left",k=>i({align:k})):g}
      ${Ln(n,[[!0,o("solar_portrait")],[!1,o("solar_landscape")]],e.portrait!==!1,k=>i({portrait:k}))}
      ${Ln(n,[["black",o("solar_look_black")],["blue",o("solar_look_blue")]],e.look==="blue"?"blue":"black",k=>i({look:k}))}
      <div class="nf-form">
        ${w("module_w","solar_module_w",1.13)} ${w("module_h","solar_module_h",1.72)}
        ${A(n,o("solar_wp"),e.wp??xf,k=>i({wp:_(50,1500,Math.round)(k)}),5,50)}
      </div>
      ${X(m`<button class="nf-btn" aria-pressed=${r.picking} ?disabled=${!n.admin} @click=${()=>r.picking=!r.picking}>${r.picking?"\u2713 ":""}${o("solar_pick")}</button>`,e.skip?.length?m`<button class="nf-btn" ?disabled=${!n.admin} @click=${()=>i({skip:null})}>${o("solar_pick_all")}</button>`:g)}
      ${r.picking?M(o("solar_pick_hint")):g}
      <div class="nf-form">
        ${l?m`${A(n,o("solar_base"),e.base??0,k=>i({base:k>.001?Math.min(60,fe(k)):null}),.05,0)}
            ${A(n,o("solar_rotation"),e.rotation??0,y,5)}
            ${X(m`<button class="nf-chip" ?disabled=${!n.admin} @click=${()=>y((e.rotation??0)-15)}>↺ 15°</button>`,m`<button class="nf-chip" ?disabled=${!n.admin} @click=${()=>y((e.rotation??0)+15)}>↻ 15°</button>`)}`:m`${A(n,o("solar_u"),e.u,k=>i({u:fe(k)}),.05)} ${A(n,o(a?.wall?"solar_v_wall":"solar_v"),e.v,k=>i({v:fe(k)}),.05)}`}
        ${a?.flat&&!l?A(n,o("solar_rotation"),e.rotation??0,b,5):g}
        ${a?.wall?A(n,o("solar_tilt_wall"),e.tilt??0,k=>i({tilt:_(0,90,Math.round)(k)}),5,0):g}
        ${a?.flat?A(n,o("solar_tilt"),e.tilt??15,k=>i({tilt:_(0,45,Math.round)(k)}),1,0):g}
        ${a?.flat&&!a.unbounded?L(n,o("solar_rack_ew"),e.rack==="ew",k=>i({rack:k?"ew":null}),{title:o("solar_rack_ew_hint")}):g}
        ${a&&!a.flat&&!a.wall?A(n,o("solar_rack_tilt"),e.tilt??0,k=>i({tilt:_(0,45,Math.round)(k)||null}),1,0):g}
        ${a?.wall||a?.flat?L(n,o(v),!!e.flip,k=>i({flip:k})):g}
      </div>
      ${a?.flat&&!l?X(m`<button class="nf-chip" ?disabled=${!n.admin} @click=${()=>b((e.rotation??0)-90)}>↺ 90°</button>`,m`<button class="nf-chip" ?disabled=${!n.admin} @click=${()=>b((e.rotation??0)+90)}>↻ 90°</button>`):g}
      <p class="nf-sub">
        ${o("solar_summary",{n:u.modules,kwp:G(n.hass,u.kwp,1)})}${u.modules<h?m` · <b>${o("solar_partial",{n:u.modules,total:h})}</b>`:g}
      </p>
      <h4 class="nf-lib-head">🔗 ${o("solar_string")}</h4>
      <div class="nf-form">${Fw(t,e)}</div>
      ${M(o("solar_string_hint"))} ${M(o("solar_form_hint"))}
      ${n.admin?X(m`<button class="nf-btn" ?disabled=${!a} @click=${()=>a&&i({...$n(a,e.id),portrait:e.portrait})}>${o("solar_fit")}</button>`,m`<button class="nf-btn nf-danger" @click=${()=>r.removeField()}>${o("delete")}</button>`):g}
    </section>`}var Mf=t=>Math.round(t*1e3)/1e3,pi=class{ctx;sectionSel=null;windowSel=null;fieldSel=null;pickMode=!1;constructor(e){this.ctx=e}get sectionId(){return this.sectionSel}set sectionId(e){this.sectionSel=e,this.ctx.refresh()}get windowId(){return this.windowSel}set windowId(e){this.windowSel=e,this.ctx.refresh()}get solarId(){return this.fieldSel}set solarId(e){this.fieldSel=e,this.ctx.refresh()}get picking(){return this.pickMode}set picking(e){this.pickMode=e,this.ctx.refresh()}get doc(){return this.ctx.host.doc}get settings(){return this.doc.settings.roof}get admin(){return this.ctx.host.admin}get section(){return this.sectionSel?this.settings.sections?.find(e=>e.id===this.sectionSel):void 0}get window(){return this.windowSel?this.settings.windows?.find(e=>e.id===this.windowSel):void 0}get field(){return this.fieldSel?this.settings.solar?.find(e=>e.id===this.fieldSel):void 0}isFixed(e){return!!e&&(!!e.locked||!!this.doc.settings.lock_plan)}useSections(e=!1){if(!this.admin)return;let n=(this.settings.sections??[]).length>0;e&&n&&!this.ctx.confirm(this.ctx.host.t("roof_regen_confirm"))||(this.ctx.host.change(r=>{r.settings.roof.type="custom",(e||!n)&&(r.settings.roof.sections=ks(r,()=>D("roof")))}),this.sectionId=null)}addSection(e,n){if(!this.admin)return;let r=wh(this.doc,e,n);this.ctx.host.change(o=>{o.settings.roof.type="custom",o.settings.roof.sections=[...o.settings.roof.sections??[],r]}),this.sectionId=r.id}takeOutline(){let e=this.ctx.host.floor;if(!e||!this.sectionSel||!this.admin)return;let{wall_exterior:n,wall_interior:r}=this.doc.settings,o=ps(e.rooms,e.walls??[],n,r);if(!o)return;let i=o.map(([s,a])=>[Mf(s),Mf(a)]);this.patchSection({shape:"flat",points:i,...Mt(i)})}addDormer(e){let n=this.section;if(!n||!this.admin)return;let r=ms(n,e,D("roof"));this.ctx.host.change(o=>{o.settings.roof.sections=[...o.settings.roof.sections??[],r]}),this.sectionId=r.id}patchSection(e){let n=this.sectionSel;!n||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.sections?.find(i=>i.id===n);o&&Object.assign(o,e)})}removeCorner(e){let n=this.sectionSel;!n||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.sections?.find(i=>i.id===n);o&&$h(o,e)})}removeSection(){let e=this.sectionSel;!e||!this.admin||(this.ctx.host.change(n=>n.settings.roof.sections=(n.settings.roof.sections??[]).filter(r=>r.id!==e)),this.sectionId=null)}duplicateSection(){let e=this.section;if(!e||!this.admin)return;let n=vh(e);this.ctx.host.change(r=>r.settings.roof.sections=[...r.settings.roof.sections??[],n]),this.sectionId=n.id}addWindow(){if(!this.admin)return;let e=this.doc.settings.north??0,n=Mr(te(this.doc).filter(o=>!o.flat),e)??te(this.doc)[0];if(!n)return;let r=$r(n,D("rwin"));this.ctx.host.change(o=>o.settings.roof.windows=[...o.settings.roof.windows??[],r]),this.windowSel=r.id,this.sectionId=null}patchWindow(e){let n=this.windowSel;!n||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.windows?.find(s=>s.id===n);if(!o)return;Object.assign(o,e);let i=te(r).find(s=>s.key===o.face);i&&Object.assign(o,ft(i,Et(o)))})}removeWindow(){let e=this.windowSel;!e||!this.admin||(this.ctx.host.change(n=>n.settings.roof.windows=(n.settings.roof.windows??[]).filter(r=>r.id!==e)),this.windowId=null)}addField(){if(!this.admin)return;let e=te(this.doc),n=new Set((this.settings.solar??[]).map(i=>i.face)),r=this.doc.settings.north??0,o=Mr(e.filter(i=>!n.has(i.key)),r)??Mr(e,r);o&&(this.appendField($n(o,D("pv"))),this.sectionSel=null)}addWallField(){let e=this.ctx.floorId()??this.doc.floors[0]?.id,n=this.admin&&e?Es(this.doc,D("pv"),e):null;n&&this.appendField(n)}addGroundField(){this.admin&&this.appendField(kr(this.doc,D("pv")))}appendField(e){this.ctx.host.change(n=>n.settings.roof.solar=[...n.settings.roof.solar??[],e]),this.solarId=e.id}selectField(e){this.fieldSel=e,this.sectionSel=null;let n=this.settings.solar?.find(r=>r.id===e);n?.face.startsWith("wall:")&&this.ctx.setFloorId(n.face.split(":")[1]),this.ctx.refresh()}patchField(e){this.editField((n,r)=>{Object.assign(n,e);let o=ke(r,n);o&&Object.assign(n,ft(o,n))})}toggleCell(e){this.editField(n=>n.skip=bf(n.skip,e))}editField(e){let n=this.fieldSel;!n||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.solar?.find(i=>i.id===n);o&&e(o,r)})}setString(e){let n=this.fieldSel;!n||!this.admin||this.ctx.host.change(r=>_f(r.settings.roof,n,e,{id:D("str"),name:o=>this.ctx.host.t("solar_string_n",{n:o})}))}patchString(e){let n=this.field?.string;!n||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.strings?.find(i=>i.id===n);o&&Object.assign(o,e)})}removeField(){let e=this.fieldSel;!e||!this.admin||(this.ctx.host.change(n=>{n.settings.roof.solar=(n.settings.roof.solar??[]).filter(r=>r.id!==e),Va(n.settings.roof)}),this.solarId=null)}floorsTopDown(){return[...this.doc.floors].sort((e,n)=>n.elevation-e.elevation)}};var Ef=(t,e)=>t.floors.flatMap(n=>n.furniture).find(n=>n.type===e),zw=t=>!t||t==="none";async function Rf(t){let e;try{e=await t.hass.callWS({type:"energy/get_prefs"})}catch{return{kind:"failed"}}let n=hd(t.hass,e),r=0,o=(i,s,a)=>{if(!a)return;let l=Ef(t.doc(),i);!l&&t.canAdd()&&(t.addDevice(i),l=Ef(t.doc(),i)),!(!l||!zw(l[s]))&&(t.setField(l.id,s,a),r++)};return o("meter","power",n.grid),o("inverter","power",n.solar),o("home_battery","power",n.battery),o("home_battery","soc",n.battery_soc),{kind:"done",filled:r}}var Pw=/garage|carport/,Tw=/hwr|hauswirt|technik|keller|abstell|utility|basement|boiler|heiz/,Iw=/flur|diele|eingang|hall|entr|lobby/,Af=.25,Hn=t=>Math.round(t*1e3)/1e3;function Dw(t,e,n){let r=e.rooms.filter(u=>u.points.length>=3),o=u=>r.find(h=>u.test(n.roomLabel(h).toLowerCase())),i=r.find(u=>e.furniture.some(h=>h.type==="parking"&&H([h.x,h.z],u.points))),s=o(Pw)??i,a=o(Tw),l=t==="wallbox"?s:t==="meter"?a??o(Iw)??s:a??s,c=[...r].sort((u,h)=>Math.abs(ge(h.points))-Math.abs(ge(u.points)))[0];return l??n.selected??c}function Ow(t,e){let[n,r]=_e(t.points),o=t.points.some((s,a)=>!e.has(a)),i=null;return t.points.forEach((s,a)=>{if(o&&e.has(a))return;let l=t.points[(a+1)%t.points.length],c=Math.hypot(l[0]-s[0],l[1]-s[1]);if(i&&c<=i.length)return;let u=[(s[0]+l[0])/2,(s[1]+l[1])/2],h=[-(l[1]-s[1])/c+0,(l[0]-s[0])/c+0];(n-u[0])*h[0]+(r-u[1])*h[1]<0&&(h=[0-h[0],0-h[1]]),i={mid:u,inward:h,length:c}}),i}function Ff(t,e,n,r){let[o,i,s]=Je(t),a={id:D("furniture"),type:t,rotation:0,w:o,d:i,h:s,variant:null};if(t==="grid_point"){let d=md(e),[f,_]=d?[d.x,d.z]:r.fallback;return{...a,x:Hn(f),z:Hn(_)}}let l=Dw(t,n,r),[c,u]=l?_e(l.points):r.fallback;if(l){let d=new Set(n.openings.filter(_=>_.room_id===l.id).map(_=>_.edge)),f=Ow(l,d);f&&([c,u]=[f.mid[0]+f.inward[0]*(i/2+Af),f.mid[1]+f.inward[1]*(i/2+Af)])}let h={...a,x:Hn(c),z:Hn(u)},p=l?ar({...n,furniture:[...n.furniture,h]},h,e.settings.wall_interior):null;return p?{...h,x:Hn(p.x),z:Hn(p.z),rotation:p.rotation}:h}var fi=class{limit;undoStack=[];redoStack=[];constructor(e=100){this.limit=e}get canUndo(){return this.undoStack.length>0}get canRedo(){return this.redoStack.length>0}record(e){this.undoStack.push(JSON.stringify(e)),this.undoStack.length>this.limit&&this.undoStack.shift(),this.redoStack=[]}undo(e){let n=this.undoStack.pop();return n===void 0?null:(this.redoStack.push(JSON.stringify(e)),JSON.parse(n))}redo(e){let n=this.redoStack.pop();return n===void 0?null:(this.undoStack.push(JSON.stringify(e)),JSON.parse(n))}};var Ga=t=>Math.round(t*1e3)/1e3,Cn="unmovable",mi="no change";function zf(t,e,n,r){let o=i=>[Ga(i[0]+n),Ga(i[1]+r)];switch(e.kind){case"device":return t.placements.some(i=>i.entity_id===e.id)?{apply(i){let s=i.placements.find(a=>a.entity_id===e.id);s&&([s.x,s.z]=o([s.x,s.z]))}}:Cn;case"furniture":return{apply(i){let s=i.furniture.find(a=>a.id===e.id);s&&([s.x,s.z]=o([s.x,s.z]))}};case"wall":return{apply(i){let s=(i.walls??[]).find(a=>a.id===e.id);s&&([s.a,s.b]=[o(s.a),o(s.b)])}};case"outdoor":return{apply(i){let s=i.outdoor.find(a=>a.id===e.id);s&&(s.points=s.points.map(o))}};case"opening":{let i=t.openings.find(_=>_.id===e.id),s=i?ze(i,t.rooms,t.walls??[]):null;if(!i||!s)return Cn;let a=s.room.points[s.edge],l=s.room.points[(s.edge+1)%s.room.points.length],c=Math.hypot(l[0]-a[0],l[1]-a[1])||1,u=(n*(l[0]-a[0])+r*(l[1]-a[1]))/c;if(Math.abs(u)<1e-9)return mi;let h=Rt(t.openings,i),p=!i.wall&&h.length>1?Mn(s.room,h):null;if(p){let _=Math.max(0,Math.min(Er(s.room)-p.width,p.from+u));return Math.abs(_-p.from)<1e-9?mi:{apply(y){let b=y.openings.find(w=>w.id===e.id),v=b?Rr(y.openings,s.room,b,_,p.width):null;v&&(y.openings=v)}}}let d=Math.min(i.width,c)/2,f=Ga(Math.min(c-d,Math.max(d,i.offset+u)));return{apply(_){let y=_.openings.find(b=>b.id===e.id);y&&(y.offset=f)}}}case"room":{let i=t.rooms.find(a=>a.id===e.id);if(!i)return Cn;let s=new Set(t.placements.filter(a=>H([a.x,a.z],i.points)).map(a=>a.entity_id));return{apply(a){let l=a.rooms.find(c=>c.id===e.id);if(l){if(e.corner!==null&&e.corner<l.points.length){l.points[e.corner]=o(l.points[e.corner]);return}l.points=l.points.map(o);for(let c of a.placements)s.has(c.entity_id)&&([c.x,c.z]=o([c.x,c.z]))}}}}}}var gi=t=>Math.round(t*1e3)/1e3,Ua=t=>(t+90)%360;function Pf(t,e,n){let r=o=>[o.x,o.z]=e([o.x,o.z]);for(let o of t.rooms)o.points=o.points.map(e);for(let o of t.furniture)r(o),n&&(o.rotation=Ua(o.rotation));for(let o of t.placements)r(o),n&&(o.rotation=Ua(o.rotation??0));for(let o of t.outdoor)o.points=o.points.map(e);for(let o of t.walls??[])[o.a,o.b]=[e(o.a),e(o.b)];t.background&&(r(t.background),n&&(t.background.rotation=Ua(t.background.rotation??0)))}function Lw(t,e){for(let r of t.settings.roof.sections??[]){let o=[e([r.x0,r.z0]),e([r.x1,r.z0]),e([r.x1,r.z1]),e([r.x0,r.z1])],[i,s]=[o.map(a=>a[0]),o.map(a=>a[1])];[r.x0,r.x1,r.z0,r.z1]=[Math.min(...i),Math.max(...i),Math.min(...s),Math.max(...s)],r.points&&(r.points=r.points.map(e))}let n=t.energy.meter;n&&([n.x,n.z]=e([n.x,n.z]))}function Tf(t,e,n,r){if(e.allFloors){for(let o of t.floors)Pf(o,n,r);Lw(t,n)}else{let o=t.floors.find(i=>i.id===e.floorId);o&&Pf(o,n,r)}}function If(t,e,n,r){Tf(t,e,([o,i])=>[gi(o+n),gi(i+r)],!1)}function Hw(t,e){let r=(e.allFloors?t.floors:t.floors.filter(s=>s.id===e.floorId)).flatMap(s=>s.rooms.flatMap(a=>a.points));if(r.length===0)return null;let[o,i]=[r.map(s=>s[0]),r.map(s=>s[1])];return[(Math.min(...o)+Math.max(...o))/2,(Math.min(...i)+Math.max(...i))/2]}function Df(t,e){let n=Hw(t,e);if(!n)return!1;let[r,o]=n;return Tf(t,e,([i,s])=>[gi(r-(s-o)),gi(o+(i-r))],!0),!0}var _i=class{onChange;ids={room:null,opening:null,furniture:null,device:null,outdoor:null,wall:null};cornerSel=null;edgeSel=null;constructor(e){this.onChange=e}set(e,n){this.ids[e]=n,this.onChange()}get room(){return this.ids.room}set room(e){this.set("room",e)}get opening(){return this.ids.opening}set opening(e){this.set("opening",e)}get furniture(){return this.ids.furniture}set furniture(e){this.set("furniture",e)}get device(){return this.ids.device}set device(e){this.set("device",e)}get outdoor(){return this.ids.outdoor}set outdoor(e){this.set("outdoor",e)}get wall(){return this.ids.wall}set wall(e){this.set("wall",e)}get corner(){return this.cornerSel}set corner(e){this.cornerSel=e,this.onChange()}get edge(){return this.edgeSel}set edge(e){this.edgeSel=e,this.onChange()}select(e,n,r){let o=this.ids.room,i={room:null,opening:null,furniture:null,device:null,outdoor:null,wall:null};i[e]=n,e==="room"?i.room=n:e!=="outdoor"&&e!=="wall"&&(i.room=o),e==="device"&&n&&(i.room=r.roomOfDevice(n)??i.room),e==="opening"&&n&&(i.room=r.roomOfOpening(n)??i.room),(e!=="room"||n!==o)&&(this.cornerSel=null),this.edgeSel=null,this.ids=i,this.onChange()}get target(){for(let e of["device","opening","furniture","wall","outdoor","room"]){let n=this.ids[e];if(n)return{kind:e,id:n}}return null}};var bi=class{onChange;menuOpen=!1;packagesOpen=!1;draft=null;shiftXMetres=0;shiftZMetres=0;wholeHouse=!1;line=null;query="";source="area";unfolded=new Set;copyChoice=null;constructor(e){this.onChange=e}get floorMenu(){return this.menuOpen}set floorMenu(e){this.menuOpen=e,this.onChange()}get floorCopy(){return this.copyChoice}set floorCopy(e){this.copyChoice=e,this.onChange()}get packages(){return this.packagesOpen}set packages(e){this.packagesOpen=e,this.onChange()}get spots(){return this.draft}set spots(e){this.draft=e,this.onChange()}get shiftX(){return this.shiftXMetres}set shiftX(e){this.shiftXMetres=e,this.onChange()}get shiftZ(){return this.shiftZMetres}set shiftZ(e){this.shiftZMetres=e,this.onChange()}get shiftAll(){return this.wholeHouse}set shiftAll(e){this.wholeHouse=e,this.onChange()}get notice(){return this.line}set notice(e){this.line=e,this.onChange()}get deviceQuery(){return this.query}set deviceQuery(e){this.query=e,this.onChange()}get deviceSource(){return this.source}set deviceSource(e){this.source=e,this.query="",this.onChange()}isUnfolded(e){return this.unfolded.has(e)}toggleUnfolded(e){let n=new Set(this.unfolded);n.delete(e)||n.add(e),this.unfolded=n,this.onChange()}};var Cw=/garage|carport|keller|cellar|basement|technik|heizung|heizraum|boiler|utility|werkstatt|schuppen|shed|dachboden|attic/i,Zr=t=>t.living??!Cw.test(t.name),Ww=.1,Of=t=>({x0:Math.min(...t.map(e=>e[0])),x1:Math.max(...t.map(e=>e[0])),z0:Math.min(...t.map(e=>e[1])),z1:Math.max(...t.map(e=>e[1]))});function ja(t,e,n,r,o=Ww){if(n.points.length<3)return{roomId:n.id,floor:0,living:0,low:0};let i=Of(n.points),s=r.filter(f=>{let _=Of(f.footprint);return _.x1>=i.x0&&_.x0<=i.x1&&_.z1>=i.z0&&_.z0<=i.z1}),a=e.elevation+(n.ceiling!=null&&n.ceiling>0?n.ceiling:e.height),l=(t.settings.roof?.sections??[]).some(f=>!f.open),c=Ki(n),u=0,h=0,p=0;for(let f=i.x0+o/2;f<i.x1;f+=o)for(let _=i.z0+o/2;_<i.z1;_+=o){if(!H([f,_],n.points)||s.some(v=>H([f,_],v.footprint)))continue;let y=l?fr(t,f,_):null,b=Math.min(a,y??1/0)-e.elevation-c;b>=2?u++:b>=1?h++:p++}let d=o*o;return{roomId:n.id,floor:(u+h+p)*d,living:Zr(n)?(u+h/2)*d:0,low:(h+p)*d}}var Lf=new WeakMap;function qr(t,e){if(e.layer)return[];let n=Lf.get(e);if(n&&n.roof===t.settings.roof)return n.areas;let r=Bw(t,e);return Lf.set(e,{roof:t.settings.roof,areas:r}),r}function Bw(t,e){let n=pe(e.rooms,{exterior:t.settings.wall_exterior,interior:t.settings.wall_interior},e.walls??[]).walls;return e.rooms.map(r=>ja(t,e,r,n))}var Wn=t=>t.reduce((e,n)=>({floor:e.floor+n.floor,living:e.living+n.living,low:e.low+n.low}),{floor:0,living:0,low:0});function Hf(t,e,n){let r=t.floors.length,o=e?.name??(r===0?n.first:n.next(r));return{...tt(D("floor"),o,dc(t.floors,e?.level)),ha_floor:e?.floor_id??null}}function Za(t,e){let n=t.findIndex(o=>o.elevation>e.elevation),r=n<0?t.length:n;return[...t.slice(0,r),e,...t.slice(r)]}function Cf(t,e,n){let r=t.findIndex(s=>s.id===e),o=r+n;if(r<0||o<0||o>=t.length)return[...t];let i=[...t];return[i[r],i[o]]=[i[o],i[r]],i}function Wf(t,e){let n=new Set(t.floors.map(r=>r.ha_floor));return Object.values(e??{}).filter(r=>!n.has(r.floor_id)).sort((r,o)=>(r.level??99)-(o.level??99)||r.name.localeCompare(o.name))}function Bn(t,e,n){if(!e.ha_floor)return[];let r=new Set(t.floors.flatMap(o=>o.rooms.map(i=>i.area_id)));return Object.values(n??{}).filter(o=>o.floor_id===e.ha_floor&&!r.has(o.area_id)).sort((o,i)=>o.name.localeCompare(i.name))}function Bf(t,e,n){return Object.values(n??{}).filter(r=>r.floor_id===e.ha_floor||!t.floors.some(o=>o.ha_floor===r.floor_id))}function Nf(t,e,n,r,o=D){let i=structuredClone(e),s=t.floors.reduce((u,h)=>Math.max(u,h.elevation+h.height),e.elevation+e.height),a=new Map,l=new Map;i.id=o("floor"),i.name=n,i.elevation=Math.round(s*1e3)/1e3,i.ha_floor=null,i.start_view=null,i.rooms=i.rooms.map(u=>{let h=o("room");return a.set(u.id,h),{...u,id:h,area_id:null}}),i.walls=(i.walls??[]).map(u=>{let h=o("wall");return l.set(u.id,h),{...u,id:h}}),i.openings=i.openings.filter(u=>a.has(u.room_id)).map(u=>({...u,id:o("opening"),room_id:a.get(u.room_id),wall:u.wall?l.get(u.wall)??null:u.wall}));let c=new Set(["meter","inverter","home_battery","wallbox","grid_point"]);return i.furniture=r.furniture?i.furniture.filter(u=>!c.has(u.type)).map(u=>Gw({...u,id:o("furniture")})):[],i.placements=r.devices?i.placements:[],i.outdoor=r.outdoor?i.outdoor.map(u=>({...u,id:o("outdoor")})):[],i}var Nw=["entity","power","fan_entity","room_sensor"],Vw=["door_left","door_right","soc","charge","export","status","temp_entity","temp_entity2","state_entity","state_entity2","color_entity","care_entity","cover_entity","type_entity","parent_meter","car","tap"],Kw=["gang_entities","pictures","types","meter_floors","show_when","extra_lights"];function Gw(t){let e={...t};for(let n of Nw)(n==="entity"||n==="power"||e[n]!=null)&&(e[n]="none");for(let n of Vw)e[n]!=null&&(e[n]=null);for(let n of Kw)delete e[n];return e}function Vf(t,e,n,r){let o=t.floors.find(l=>l.id===e),i=t.floors.find(l=>l.id===r);if(!o||!i||o===i)return!1;let s=o.furniture.findIndex(l=>l.id===n);if(s<0)return!1;let[a]=o.furniture.splice(s,1);return i.furniture.push(a),!0}function Uw(t,e,n){if(e.layer||!e.rooms.length)return g;let r=t.t,o=Wn(qr(t.doc,e)).living,i=Wn(t.doc.floors.flatMap(s=>qr(t.doc,s))).living;return m`<p class="nf-sub nf-wide" title=${r("living_area_hint")}>
      ${r(t.doc.floors.length>1?"living_area_floor_house":"living_area_floor",{floor:Ee(t.hass,o),house:Ee(t.hass,i)})}
    </p>
    <div class="nf-actions nf-wide"><button class="nf-btn" title=${r("print_plan_hint")} @click=${()=>n.print()}>🖨️ ${r("print_plan")}</button></div>`}function jw(t,e,n,r){let o=Wf(t.doc,t.hass?.floors),i=()=>o.length>0?e.floorMenu=!e.floorMenu:n.addFloor(null);return m`<div class="nf-floor-list">
      ${[...t.doc.floors].reverse().map(s=>m`<button class="nf-chip" aria-pressed=${s.id===r} @click=${()=>n.openFloor(s.id)}>${s.name}</button>`)}
      ${t.admin?m`<button class="nf-btn" aria-expanded=${e.floorMenu} @click=${i}>+ ${t.t("add_floor")}</button>`:g}
    </div>
    ${t.admin&&e.floorMenu?m`<div class="nf-floor-menu">
          ${M(t.t("floor_from_ha"))}
          ${o.map(s=>m`<button class="nf-btn" @click=${()=>n.addFloor(s)}>${s.name}${s.level!=null?m` <span class="nf-sub">· ${t.t("level",{n:s.level})}</span>`:g}</button>`)}
          <button class="nf-btn" @click=${()=>n.addFloor(null)}>${t.t("floor_empty")}</button>
        </div>`:g}`}function Zw(t,e,n,r){let o=(i,s,a)=>m`<input type="number" step="0.05" .value=${String(s)} aria-label=${i} @change=${l=>a(Number(l.target.value)||0)} />`;return m`<div class="nf-field nf-wide nf-shift" title=${t.t("floor_shift_hint")}>
    <span>${t.t("floor_shift")}</span>
    ${o("X",e.shiftX,i=>e.shiftX=i)} ${o("Z",e.shiftZ,i=>e.shiftZ=i)}
    <button class="nf-btn" ?disabled=${!e.shiftX&&!e.shiftZ} @click=${()=>n.shift()}>${t.t("floor_shift_apply")}</button>
    <button class="nf-btn" title=${t.t("floor_turn_hint")} @click=${()=>n.turn()}>${t.t("floor_turn")}</button>
    <button class="nf-btn" title=${t.t("floor_start_view_hint")} @click=${()=>n.rememberView()}>${t.t("floor_start_view")}</button>
    ${r.start_view?m`<button class="nf-btn" title=${t.t("floor_start_view_reset")} @click=${()=>t.change((i,s)=>s.start_view=null)}>↺</button>`:g}
    <label class="nf-check nf-wide" title=${t.t("floor_shift_all_hint")}
      ><input type="checkbox" .checked=${e.shiftAll} @change=${i=>e.shiftAll=i.target.checked} />
      ${t.t("floor_shift_all")}</label
    >
  </div>`}function qw(t,e,n,r){let o=t.t,i=s=>e.floorCopy={...r,...s};return m`<div class="nf-form nf-wide nf-copy-floor">
    ${M(o("floor_copy_hint"),"nf-wide")}
    ${L(t,o("floor_copy_furniture"),r.furniture,s=>i({furniture:s}))}
    ${L(t,o("floor_copy_devices"),r.devices,s=>i({devices:s}),{title:o("floor_copy_devices_hint")})}
    ${L(t,o("floor_copy_outdoor"),r.outdoor,s=>i({outdoor:s}))}
    <div class="nf-actions nf-wide">
      <button class="nf-btn nf-primary" @click=${()=>n.duplicateFloor(r)}>${o("floor_copy_make")}</button>
      <button class="nf-btn" @click=${()=>e.floorCopy=null}>${o("cancel")}</button>
    </div>
  </div>`}function Yw(t,e,n,r){let o=t.t,i=c=>t.change((u,h)=>Object.assign(h,c)),s=Bf(t.doc,r,t.hass?.floors),a=Bn(t.doc,r,t.hass?.areas),l=[["",o("no_ha_floor")],...s.map(c=>[c.floor_id,c.name])];return m`<div class="nf-form">
    ${q(t,o("floor_name"),r.name,c=>i({name:c}),{wide:!0})}
    ${A(t,o("elevation"),r.elevation,c=>i({elevation:c}))}
    ${t.admin?Zw(t,e,n,r):g}
    ${A(t,o("height"),r.height,c=>i({height:Math.max(1,c)}),.05,1)}
    ${Object.keys(t.hass?.floors??{}).length>0?O(t,o("ha_floor"),r.ha_floor??"",l,c=>i({ha_floor:c||null}),{wide:!0}):g}
    ${L(t,o("floor_layer"),!!r.layer,c=>i({layer:c||void 0}),{title:o("floor_layer_hint")})}
    ${T(t,o("floor_power"),r.power_entity??null,void 0,W(t.hass,c=>c.startsWith("sensor.")&&t.hass?.states[c]?.attributes.device_class==="power"),c=>i({power_entity:c&&c!=="none"?c:null}))}
    ${r.power_entity?M(o("floor_power_hint"),"nf-wide"):g}
    ${Uw(t,r,n)}
    ${t.admin&&a.length>0?m`<div class="nf-actions nf-wide"><button class="nf-btn nf-primary" title=${o("area_rooms_hint")} @click=${()=>n.addAreaRooms(r)}>${o("area_rooms",{n:a.length})}</button></div>`:g}
    ${t.admin?m`<div class="nf-actions nf-wide">
            <button class="nf-btn" @click=${()=>n.moveFloor(1)}>${o("move_up")}</button>
            <button class="nf-btn" @click=${()=>n.moveFloor(-1)}>${o("move_down")}</button>
            <button class="nf-btn" @click=${()=>e.floorCopy=e.floorCopy?null:{furniture:!0,devices:!1,outdoor:!1}}>${o("floor_copy")}</button>
            <button class="nf-btn nf-danger" @click=${()=>n.deleteFloor()}>${o("delete_floor")}</button>
          </div>
          ${e.floorCopy?qw(t,e,n,e.floorCopy):g}
          <div class="nf-actions nf-wide"><button class="nf-btn" title=${o("gaps_hint")} ?disabled=${r.rooms.length<2} @click=${()=>n.closeGaps()}>${o("gaps_close")}</button></div>
          ${e.notice?m`<p class="nf-sub nf-wide nf-notice">${e.notice}</p>`:g}`:g}
  </div>`}function Kf(t,e,n,r,o){return m`<section>
    <h3>${t.t("floors")}</h3>
    ${jw(t,e,n,o)} ${r?Yw(t,e,n,r):g}
  </section>`}var Gf=["lamp_downlight","lamp_spot","lamp_panel","lamp_ceiling"];function Uf(t,e){let n=ce(t.points);return{type:"lamp_downlight",rows:Math.max(1,Math.round((n.z1-n.z0)/1.2)),cols:Math.max(1,Math.round((n.x1-n.x0)/1.2)),entity:e[0]??null}}function yi(t,e){let[n,r,o]=je[e.type];return gc(t,e.rows,e.cols).map(([i,s])=>({id:D("furniture"),type:e.type,x:i,z:s,rotation:0,w:n,d:r,h:o,variant:null,entity:e.entity??"none",power:null}))}var qa=t=>Math.max(1,Math.min(12,Math.round(t)));var Xw=globalThis.__nfAnnounced??new Set;globalThis.__nfAnnounced=Xw;var jf=/^(media_player|assist_satellite)\./;function Qw(t,e){return e?Object.values(t.entities??{}).filter(n=>!n.hidden&&(n.area_id??(n.device_id?t.devices?.[n.device_id]?.area_id:null))===e).map(n=>n.entity_id):[]}function Zf(t,e){let n=t.states[e];return!n||n.state==="unavailable"?!1:e.startsWith("notify.")?t.entities?.[e]?.platform==="alexa_devices"&&e.endsWith("_announce"):n.state==="off"||n.state==="unknown"?!1:n.attributes.device_class!=="tv"}function qf(t,e,n){if(n.announce_speaker==="none")return null;if(n.announce_speaker)return n.announce_speaker;if(e&&n.points.length>=3){let i=[...e.placements.filter(s=>jf.test(s.entity_id)).map(s=>({id:s.entity_id,x:s.x,z:s.z})),...e.furniture.filter(s=>s.entity&&jf.test(s.entity)).map(s=>({id:s.entity,x:s.x,z:s.z}))].find(s=>H([s.x,s.z],n.points)&&Zf(t,s.id));if(i)return i.id}let r=Qw(t,n.area_id);for(let o of["assist_satellite.","notify.","media_player."]){let i=r.filter(s=>s.startsWith(o)&&Zf(t,s)).sort()[0];if(i)return i}return null}function Yf(t,e,n){return e.rooms.length===0?g:m`<section>
    <h3>${t.t("rooms")}</h3>
    <div class="nf-room-list">
      ${e.rooms.map(r=>m`<button class="nf-row" @click=${()=>n.select(r.id)}>
          <span>${r.name}</span><span class="nf-muted">${Ee(t.hass,we(r.points))}</span>
        </button>`)}
    </div>
  </section>`}function Jw(t,e,n,r){let o=e.spots,i=c=>e.spots={...o,...c},s=yi(n,o).length,a=W(t.hass,c=>/^(light|switch|input_boolean)\./.test(c)),l=Gf.map(c=>[c,t.t(`furn_${c}`)]);return m`<div class="nf-form nf-spot-form">
    ${O(t,t.t("spots_type"),o.type,l,c=>i({type:c}),{wide:!0})}
    ${A(t,t.t("spots_cols"),o.cols,c=>i({cols:qa(c)}),1,1)}
    ${A(t,t.t("spots_rows"),o.rows,c=>i({rows:qa(c)}),1,1)}
    ${T(t,t.t("furn_entity_light"),o.entity,void 0,a,c=>i({entity:c==="none"?null:c}))}
    <div class="nf-actions nf-wide">
      <button class="nf-btn nf-primary" ?disabled=${s===0} @click=${()=>r.placeSpots()}>${t.t("spots_add",{n:s})}</button>
      <button class="nf-btn" @click=${()=>e.spots=null}>${t.t("cancel")}</button>
    </div>
    ${M(t.t("spots_hint"),"nf-wide")}
  </div>`}function e0(t,e,n,r){return m`<details class="nf-points" ?open=${!n}>
    <summary>${t.t("points")} (${e.points.length})</summary>
    ${e.points.map((o,i)=>m`<div class="nf-point ${i===r.corner?"nf-point-sel":""}">
        <span class="nf-muted">${i+1}</span>
        ${A(t,t.t("x"),o[0],s=>r.setCorner(i,0,s))} ${A(t,t.t("z"),o[1],s=>r.setCorner(i,1,s))}
        ${t.admin?m`<button class="nf-btn" title=${t.t("delete_point")} ?disabled=${e.points.length<=3} @click=${()=>r.removeCorner(i)}>×</button>`:g}
      </div>`)}
  </details>`}function t0(t,e,n){let r=t.floor,o=r?ja(t.doc,r,e,n):void 0;if(!o||o.floor<=0)return g;let i=t.t;return Zr(e)?m`<p class="nf-sub nf-wide" title=${i("living_area_hint")}>
    ${o.low>.05?i("living_area_low",{living:Ee(t.hass,o.living),floor:Ee(t.hass,o.floor),low:Ee(t.hass,o.low)}):i("living_area",{living:Ee(t.hass,o.living)})}
  </p>`:m`<p class="nf-sub nf-wide">${i("living_area_none",{floor:Ee(t.hass,o.floor)})}</p>`}function n0(t,e,n,r){let o=t.t,i=s=>r.patch({ceiling:Math.abs(s-n.height)<.005?null:Math.min(20,Math.max(1,Math.round(s*1e3)/1e3))});return m`${A(t,o("room_ceiling"),e.ceiling??n.height,i,.01,1)}
    ${e.ceiling!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>r.patch({ceiling:null})}>${o("height_auto")}</button>`:g}
    ${M(o("room_ceiling_tip"),"nf-wide")}
    ${e.ceiling!=null&&e.ceiling>n.height+.005?m`<p class="nf-sub nf-wide">${o("room_ceiling_through",{ceiling:G(t.hass,e.ceiling,2),floor:G(t.hass,n.height,2)})}</p>`:g}`}function r0(t,e,n,r){let o=t.t;if(!t.hass)return m``;let i=qf(t.hass,n,{...e,announce_speaker:null}),s=W(t.hass,c=>/^(media_player|assist_satellite)\./.test(c)||c.startsWith("notify.")&&c.endsWith("_announce")),a=e.announce_quiet??null,l=(c,u)=>{if(!u)return r.patch({announce_quiet:null});r.patch({announce_quiet:{from:a?.from??"20:00",to:a?.to??"07:00",[c]:u}})};return m`${T(t,o("room_announce_speaker"),e.announce_speaker??null,i,s,c=>r.patch({announce_speaker:c}))}
    <div class="nf-field nf-wide nf-quiet-time">
      ${o("room_announce_quiet")}
      <span>
        <input type="time" .value=${a?.from??""} ?disabled=${!t.admin} aria-label=${`${o("room_announce_quiet")} 1`} @change=${c=>l("from",c.target.value)} />
        –
        <input type="time" .value=${a?.to??""} ?disabled=${!t.admin} aria-label=${`${o("room_announce_quiet")} 2`} @change=${c=>l("to",c.target.value)} />
        ${a?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>r.patch({announce_quiet:null})}>×</button>`:g}
      </span>
    </div>
    ${M(o("room_announce_hint"),"nf-wide")}`}function Ya(t,e,n,r){let o=t.t,i=mn(n.points),s=ce(n.points),a=Object.values(t.hass?.areas??{}).sort((d,f)=>d.name.localeCompare(f.name)),l=[["",o("no_area")],...a.map(d=>[d.area_id,d.name])],c=t.floor?pe(t.floor.rooms,{exterior:t.doc.settings.wall_exterior,interior:t.doc.settings.wall_interior},t.floor.walls??[]).walls:[],u=t.floor?tu(n,c):null,h=ac.map(d=>[d,o(`mat_${d}`)]),p=d=>m`<button class="nf-btn" @click=${()=>r.applyPackage(d)}><b>${o(`pkg_${d}`)}</b><span>${o(`pkg_${d}_desc`)}</span></button>`;return m`<section>
    <div class="nf-h3row"><h3>${o("room")}</h3>${r.lockButton}</div>
    <div class="nf-form">
      ${q(t,o("room_name"),n.name,d=>r.patch({name:d}),{wide:!0})}
      ${O(t,o("area"),n.area_id??"",l,d=>r.setArea(d),{wide:!0})}
      ${(n.sub_areas??[]).map(d=>m`<span class="nf-chip nf-wide">${t.hass?.areas?.[d]?.name??d} <button class="nf-btn nf-field-btn" ?disabled=${!t.admin} title=${o("delete")} @click=${()=>r.patch({sub_areas:(n.sub_areas??[]).filter(f=>f!==d).length?(n.sub_areas??[]).filter(f=>f!==d):null})}>✕</button></span>`)}
      ${n.area_id?O(t,o("sub_area_add"),"",l.filter(([d])=>d!==n.area_id&&!(n.sub_areas??[]).includes(d)),d=>d&&r.patch({sub_areas:[...n.sub_areas??[],d]}),{wide:!0,title:o("sub_area_hint")}):g}
      ${O(t,o("material"),n.floor_material,h,d=>r.patch({floor_material:d}),{wide:!0})}
      ${mt(t,o("wall_paint_room"),n.wall_paint,t.doc.settings.wall_paint_inside??uo,d=>r.patch({wall_paint:d}))}
      ${t.floor?n0(t,n,t.floor,r):g}
      ${A(t,o("room_floor_offset"),n.floor_offset??0,d=>r.patch({floor_offset:Math.abs(d)<.005?null:Math.max(-2,Math.min(2,Math.round(d*1e3)/1e3))}),.01)}
      ${M(o("room_floor_offset_hint"),"nf-wide")}
      ${T(t,o("room_clean"),n.clean_entity??null,void 0,W(t.hass,d=>/^(script|button|input_button)\./.test(d)),d=>r.patch({clean_entity:d&&d!=="none"?d:null}))}
      ${n.clean_entity?g:M(o("room_clean_hint"),"nf-wide")}
      ${T(t,o("floor_heating"),n.floor_heating??null,void 0,W(t.hass,d=>/^(climate|switch|valve|binary_sensor|input_boolean)\./.test(d)),d=>r.patch({floor_heating:d&&d!=="none"?d:null}))}
      ${n.floor_heating?M(o("floor_heating_hint"),"nf-wide"):g}
      ${r0(t,n,t.floor??null,r)}
      ${u?m`<p class="nf-sub nf-wide" title=${o("room_inner_hint")}>${o("room_inner",{w:he(t.hass,u[0]),d:he(t.hass,u[1])})}</p>`:g}
      ${t0(t,n,c)}
      ${L(t,o("room_living"),Zr(n),d=>r.patch({living:d===Zr({name:n.name,living:null})?null:d}),{title:o("living_area_hint")})}
      ${i?m`${A(t,o("x"),s.x0,d=>r.setRect("x",d))} ${A(t,o("z"),s.z0,d=>r.setRect("z",d))}
          ${A(t,o("width"),s.x1-s.x0,d=>r.setRect("w",d),.01,.05)}
          ${A(t,o("depth"),s.z1-s.z0,d=>r.setRect("d",d),.01,.05)}`:g}
    </div>
    <div class="nf-actions">
      <button class="nf-btn" title=${o("room_start_view_hint")} ?disabled=${!t.admin} @click=${()=>r.rememberView()}>${o("room_start_view")}</button>
      ${n.start_view?m`<button class="nf-btn" title=${o("room_start_view_reset")} ?disabled=${!t.admin} @click=${()=>r.patch({start_view:null})}>↺</button>`:g}
    </div>
    ${r.wallHeights} ${r.climate} ${e0(t,n,i,r)}
    ${t.admin?m`<div class="nf-actions">
          <button class="nf-btn nf-primary" @click=${()=>e.packages=!e.packages}>${o("pkg_open")}</button>
          <button class="nf-btn" @click=${()=>r.openSpots()}>${o("spots_place")}</button>
          <button class="nf-btn" @click=${()=>r.duplicate()}>${o("duplicate")}</button>
          <button class="nf-btn nf-danger" @click=${()=>r.remove()}>${o("delete")}</button>
        </div>`:g}
    ${e.spots?Jw(t,e,n,r):g}
    ${e.packages?m`<div class="nf-packages">${gu.map(p)}${M(o("pkg_hint"))}</div>`:g}
  </section>`}var Xf=ae`
  :host {
    display: block;
    height: 100%;
  }
  .nf-editor {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1fr) 320px;
    height: 100%;
    min-height: 0;
  }
  .nf-editor:has(> .nf-side-strip) {
    grid-template-columns: minmax(0, 1fr) 52px;
  }
  .nf-side-strip {
    padding: 10px 6px;
    gap: 8px;
    align-items: center;
  }
  .nf-strip-btn {
    width: 40px;
    height: 40px;
    border: 1px solid var(--nf-line);
    border-radius: 12px;
    background: var(--nf-chrome);
    color: var(--nf-text);
    font-size: 18px;
    cursor: pointer;
  }
  .nf-strip-hot {
    border-color: var(--nf-accent);
    color: var(--nf-accent);
  }
  .nf-side-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: min(340px, 60%);
    z-index: 6;
    box-shadow: -12px 0 32px rgba(0, 0, 0, 0.45);
  }
  .nf-pin-row {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
  }
  .nf-3d-size {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: var(--nf-muted);
    font-size: 12px;
  }
  .nf-3d-size input {
    width: 58px;
    padding: 4px 6px;
    font: inherit;
    color: var(--nf-text);
    background: var(--nf-chrome-solid);
    border: 1px solid var(--nf-line);
    border-radius: 8px;
  }
  .nf-3d-select {
    font: inherit;
    color: var(--nf-text);
    background: var(--nf-chrome-solid);
    border: 1px solid var(--nf-line);
    border-radius: 999px;
    padding: 4px 10px;
  }
  .nf-editor.nf-narrow {
    grid-template-columns: 1fr;
    grid-template-rows: minmax(360px, 62vh) auto;
    height: auto;
  }
  .nf-main {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto 1fr;
    min-height: 0;
    min-width: 0;
  }
  /* a row of tools wider than the plan scrolls inside its pill instead of pushing the plan over the side bar (#67) */
  .nf-toolbar .nf-seg {
    max-width: 100%;
    overflow-x: auto;
    scrollbar-width: none;
  }
  .nf-toolbar .nf-seg > button {
    flex: none;
  }
  .nf-toolbar {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    padding: 10px 12px;
  }
  /* phones: the tools as one dropdown instead of a row of eleven buttons */
  .nf-tool-select {
    font: inherit;
    padding: 8px 10px;
    border-radius: 10px;
    border: 1px solid var(--nf-line);
    background: var(--nf-bg2);
    color: var(--nf-text);
  }
  .nf-warn {
    color: var(--nf-warm);
    font-size: 12.5px;
  }
  .nf-picture-group {
    display: grid;
    gap: 6px;
    margin: 6px 0 10px;
    padding: 8px;
    border: 1px solid var(--nf-line);
    border-radius: 10px;
  }
  .nf-picture-group > select {
    min-width: 0;
  }
  .nf-picture-row {
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 6px;
    align-items: center;
    padding: 6px;
    border-radius: 8px;
    background: color-mix(in srgb, var(--nf-line) 40%, transparent);
  }
  .nf-picture-row input[type="url"] {
    grid-column: 1 / -1;
    min-width: 0;
  }
  .nf-picture-row > .nf-sub,
  .nf-picture-row > .nf-picture-camera {
    grid-column: 1 / -1;
  }
  .nf-picture-row.nf-rule-hit {
    outline: 1px solid var(--nf-accent);
  }
  .nf-rule-now {
    grid-column: 1 / -1;
  }
  .nf-rule-hit {
    color: var(--nf-accent);
  }
  .nf-picture-reuse {
    grid-column: 1 / -1;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }
  .nf-picture-reuse-btn {
    padding: 2px;
    border: 1px solid var(--nf-line);
    border-radius: 6px;
    background: var(--nf-chrome-solid);
    cursor: pointer;
  }
  .nf-picture-reuse-btn img {
    display: block;
    height: 28px;
    max-width: 60px;
    object-fit: contain;
  }
  .nf-picture-reuse-btn:hover {
    border-color: var(--nf-accent);
  }
  .nf-picture-thumb {
    max-height: 60px;
    max-width: 100%;
    border-radius: 6px;
    justify-self: start;
  }
  .nf-picture-pick {
    justify-self: start;
  }
  .nf-parking-row {
    display: flex;
    gap: 6px;
    align-items: center;
    margin: 4px 0;
  }
  .nf-parking-row input,
  .nf-parking-row select {
    flex: 1;
    min-width: 0;
  }
  .nf-stage-pair {
    display: flex;
    min-height: 0;
    min-width: 0;
  }
  .nf-stage-pair > .nf-canvas-wrap {
    flex: 1 1 var(--nf-split, 55%);
    min-width: 0;
  }
  .nf-split > .nf-canvas-wrap {
    flex: 0 0 var(--nf-split, 55%);
  }
  .nf-split-handle {
    flex: 0 0 8px;
    cursor: col-resize;
    background: var(--nf-line);
    touch-action: none;
  }
  .nf-split-handle:hover {
    background: var(--nf-accent);
  }
  .nf-editor-3d {
    position: relative;
    flex: 1 1 0;
    min-width: 240px;
    min-height: 0;
    border-left: 1px solid var(--nf-line);
    container-type: size;
    container-name: nf;
  }
  .nf-editor-3d nf-view3d {
    display: block;
    height: 100%;
  }
  .nf-3d-walls {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 3;
  }
  .nf-3d-bar {
    position: absolute;
    left: 50%;
    bottom: 12px;
    transform: translateX(-50%);
    z-index: 3;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 8px;
    max-width: calc(100% - 24px);
    padding: 6px 8px 6px 14px;
    border-radius: 999px;
    background: var(--nf-chrome);
    box-shadow: var(--nf-shadow);
    font-size: 13px;
  }
  .nf-danger-chip {
    color: var(--nf-danger, #ff6b7a);
  }
  .nf-narrow .nf-stage-pair.nf-split {
    flex-direction: column;
  }
  .nf-narrow .nf-split > .nf-canvas-wrap {
    flex: 1 1 auto;
  }
  .nf-narrow .nf-editor-3d {
    flex: 0 0 42%;
    min-width: 0;
    border-left: none;
    border-top: 1px solid var(--nf-line);
  }
  .nf-canvas-wrap {
    position: relative;
    min-height: 0;
    overflow: hidden;
    background: radial-gradient(ellipse at 50% 35%, var(--nf-bg2), var(--nf-bg) 75%);
  }
  svg.nf-plan {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    touch-action: none;
    user-select: none;
    -webkit-user-select: none;
    cursor: default;
  }
  svg.nf-tool-rect,
  svg.nf-tool-polygon {
    cursor: crosshair;
  }
  .nf-grid-minor {
    stroke: color-mix(in srgb, var(--nf-accent) 5%, transparent);
    stroke-width: 1;
  }
  .nf-grid-major {
    stroke: color-mix(in srgb, var(--nf-soft) 16%, transparent);
    stroke-width: 1;
  }
  .nf-origin {
    fill: color-mix(in srgb, var(--nf-soft) 50%, transparent);
  }
  .nf-ghost {
    fill: none;
    stroke: rgba(138, 155, 184, 0.35);
    stroke-dasharray: 4 4;
  }
  .nf-void {
    fill: rgba(138, 155, 184, 0.12);
    stroke: rgba(138, 155, 184, 0.55);
    stroke-dasharray: 2 3;
  }
  .nf-wall {
    fill: #1b2a47;
  }
  .nf-wall-ext {
    fill: #22345a;
  }
  .nf-room {
    fill: color-mix(in srgb, var(--nf-accent) 5%, transparent);
    stroke: color-mix(in srgb, var(--nf-accent) 75%, transparent);
    stroke-width: 1.5;
    stroke-linejoin: round;
    cursor: pointer;
  }
  .nf-room:hover {
    fill: color-mix(in srgb, var(--nf-accent) 9%, transparent);
  }
  .nf-room-sel {
    fill: color-mix(in srgb, var(--nf-accent) 14%, transparent);
    stroke: var(--nf-accent);
    stroke-width: 2.5;
  }
  .nf-room-name {
    fill: var(--nf-text);
    font: 600 13px var(--nf-title-font);
    text-anchor: middle;
  }
  .nf-room-area {
    fill: var(--nf-muted);
    font: 500 11.5px var(--nf-font);
    text-anchor: middle;
    font-variant-numeric: tabular-nums;
  }
  .nf-dim {
    fill: var(--nf-accent);
    font: 600 11.5px var(--nf-font);
    text-anchor: middle;
    font-variant-numeric: tabular-nums;
    paint-order: stroke;
    stroke: var(--nf-bg);
    stroke-width: 3px;
  }
  .nf-vertex circle:not(.nf-hit) {
    fill: var(--nf-bg);
    stroke: var(--nf-accent);
    stroke-width: 2;
  }
  .nf-vertex-sel circle:not(.nf-hit) {
    fill: var(--nf-accent);
  }
  .nf-vertex,
  .nf-mid {
    cursor: grab;
  }
  .nf-hit {
    fill: transparent;
  }
  .nf-mid circle:not(.nf-hit) {
    fill: color-mix(in srgb, var(--nf-soft) 35%, transparent);
    stroke: var(--nf-soft);
  }
  .nf-mid path {
    stroke: var(--nf-text);
    stroke-width: 1.5;
  }
  .nf-draft {
    fill: rgba(255, 181, 71, 0.08);
    stroke: var(--nf-warm);
    stroke-width: 2;
    stroke-dasharray: 6 4;
  }
  polyline.nf-draft {
    fill: none;
  }
  .nf-draft-pt {
    fill: var(--nf-warm);
  }
  .nf-draft-first {
    fill: transparent;
    stroke: var(--nf-warm);
    stroke-width: 2;
  }
  .nf-cursor {
    fill: var(--nf-warm);
  }
  .nf-guide {
    stroke: rgba(255, 95, 210, 0.55);
    stroke-dasharray: 3 5;
  }
  .nf-snap {
    fill: none;
    stroke: #ff5fd2;
    stroke-width: 2;
  }
  .nf-dim {
    font: 600 10px var(--nf-font);
    fill: var(--nf-text);
    paint-order: stroke;
    stroke: rgba(10, 16, 32, 0.85);
    stroke-width: 3px;
  }
  .nf-note rect {
    fill: #ffe58a;
    stroke: #8a6d00;
    stroke-width: 1;
  }
  .nf-note text {
    fill: #3a2e00;
    font: 700 13px var(--nf-font);
    pointer-events: none;
  }
  .nf-note-due rect {
    fill: #ffa726;
  }
  .nf-note-sel rect {
    stroke: var(--nf-accent, #03a9f4);
    stroke-width: 3;
  }
  .nf-note {
    cursor: pointer;
  }
  .nf-keys-open {
    position: absolute;
    right: 12px;
    bottom: 30px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid var(--nf-line);
    background: var(--nf-chrome, rgba(20, 28, 48, 0.8));
    color: var(--nf-text);
    font: 700 15px var(--nf-font);
    cursor: pointer;
  }
  .nf-keys {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    background: rgba(0, 0, 0, 0.35);
    z-index: 20;
  }
  .nf-keys-card {
    max-width: min(520px, 92%);
    max-height: 85%;
    overflow: auto;
    padding: 14px 18px;
    border-radius: 14px;
    background: var(--nf-surface, #1c1c1c);
    box-shadow: var(--nf-shadow);
  }
  .nf-keys dl {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 6px 14px;
    margin: 8px 0 0;
    font-size: 13px;
  }
  .nf-keys dt {
    white-space: nowrap;
  }
  .nf-keys dd {
    margin: 0;
    color: var(--nf-muted);
  }
  .nf-keys kbd {
    display: inline-block;
    padding: 1px 6px;
    border-radius: 5px;
    border: 1px solid var(--nf-line);
    font: 600 12px var(--nf-font);
  }
  .nf-tour {
    position: absolute;
    left: 16px;
    bottom: 36px;
    max-width: 340px;
    padding: 12px 16px;
    border-radius: 14px;
    background: var(--nf-surface, #1c1c1c);
    border: 1px solid var(--nf-accent, #03a9f4);
    box-shadow: var(--nf-shadow);
    z-index: 15;
  }
  .nf-tour h3 {
    margin: 2px 0 6px;
  }
  .nf-tour p {
    margin: 0 0 10px;
    font-size: 13px;
    line-height: 1.45;
  }
  .nf-tour-step {
    font-size: 11px;
    color: var(--nf-muted);
  }
  .nf-hint {
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 8px;
    margin: 0;
    font-size: 12px;
    color: var(--nf-muted);
    pointer-events: none;
  }
  .nf-side {
    border-left: 1px solid var(--nf-line);
    background: var(--nf-chrome-solid);
    overflow-y: auto;
    padding: 12px 14px 24px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    min-height: 0;
  }
  .nf-narrow .nf-side {
    border-left: none;
    border-top: 1px solid var(--nf-line);
  }
  h3,
  summary {
    margin: 0 0 8px;
    font-size: 11.5px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--nf-muted);
    font-weight: 600;
  }
  summary {
    cursor: pointer;
    margin: 0;
  }
  details[open] > summary {
    margin-bottom: 8px;
  }
  .nf-floor-list,
  .nf-compass {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 14px;
    padding: 10px 12px;
    border: 1px solid var(--nf-line);
    border-radius: 12px;
  }
  .nf-compass-dial {
    width: 96px;
    height: 96px;
    flex: none;
  }
  .nf-compass-ring {
    fill: none;
    stroke: var(--nf-line);
    stroke-width: 1.5;
  }
  .nf-compass-up {
    fill: var(--nf-soft);
  }
  .nf-compass-n {
    fill: var(--nf-accent);
  }
  .nf-compass-s {
    fill: color-mix(in srgb, var(--nf-soft) 55%, transparent);
  }
  .nf-compass-label {
    fill: var(--nf-text);
    font-size: 12px;
    font-weight: 700;
    text-anchor: middle;
  }
  .nf-compass-label-s {
    fill: var(--nf-soft);
  }
  .nf-map-settings {
    display: grid;
    gap: 8px;
  }
  .nf-map-move {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
  }
  .nf-map-arrows {
    display: flex;
    gap: 6px;
  }
  .nf-compass-side {
    display: grid;
    gap: 6px;
    flex: 1 1 200px;
  }
  .nf-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .nf-floor-list .nf-chip {
    box-shadow: none;
    border: 1px solid var(--nf-line);
  }
  .nf-version-actions {
    display: inline-flex;
    gap: 8px;
    white-space: nowrap;
  }
  .nf-diff {
    margin: 2px 0 10px 8px;
    padding-left: 8px;
    border-left: 2px solid color-mix(in srgb, var(--nf-soft, #8a9bb8) 35%, transparent);
  }
  .nf-diff-list {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 0.9em;
    line-height: 1.5;
  }
  .nf-check-open {
    width: 100%;
    margin: 0 0 8px;
  }
  .nf-check-floor {
    margin: 10px 0 4px;
    font-size: 0.85em;
    color: var(--nf-muted, #8d9bbd);
  }
  .nf-check-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 6px;
  }
  .nf-check-list li {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 8px;
    align-items: center;
    padding: 6px 8px;
    border-radius: 8px;
    background: color-mix(in srgb, var(--nf-soft, #8a9bb8) 10%, transparent);
  }
  .nf-check-text {
    font-size: 0.9em;
    line-height: 1.3;
  }
  .nf-check-ok {
    font-size: 1em;
  }
  .nf-studio-view {
    display: block;
    width: 100%;
    max-height: 200px;
    margin: 6px 0 10px;
    background: color-mix(in srgb, var(--nf-soft, #8a9bb8) 10%, transparent);
    border-radius: 8px;
  }
  .nf-studio-glow {
    filter: drop-shadow(0 0 4px rgba(255, 214, 120, 0.8));
  }
  .nf-lib-studio {
    width: 100%;
    margin: 4px 0 8px;
  }
  .nf-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 10px;
  }
  .nf-wide {
    grid-column: 1 / -1;
  }
  .nf-room-list {
    display: grid;
    gap: 2px;
  }
  .nf-row {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    font: inherit;
    color: var(--nf-text);
    background: none;
    border: none;
    border-bottom: 1px solid var(--nf-line);
    padding: 9px 2px;
    cursor: pointer;
    text-align: left;
  }
  .nf-row:hover {
    color: var(--nf-accent);
  }
  .nf-check {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: var(--nf-muted);
  }
  .nf-check input {
    accent-color: var(--nf-accent);
  }
  .nf-meter rect {
    fill: #2a2a10;
    stroke: #ffc633;
    stroke-width: 1.5;
  }
  .nf-meter path {
    fill: #ffc633;
  }
  .nf-packages {
    display: grid;
    gap: 6px;
    margin-top: 10px;
  }
  .nf-packages .nf-btn {
    display: grid;
    text-align: left;
    gap: 2px;
  }
  .nf-packages .nf-btn span {
    font-weight: 400;
    font-size: 12px;
    color: var(--nf-muted);
  }
  .nf-arrows {
    display: grid;
    grid-template-columns: repeat(3, 52px);
    grid-template-areas: ". up ." "left . right" ". down .";
    gap: 6px;
    justify-content: center;
  }
  .nf-arrows .nf-btn {
    font-size: 20px;
    padding: 6px 0;
  }
  .nf-arrow-up {
    grid-area: up;
  }
  .nf-arrow-left {
    grid-area: left;
  }
  .nf-arrow-right {
    grid-area: right;
  }
  .nf-arrow-down {
    grid-area: down;
  }
  .nf-measure-list {
    margin: 8px 0;
    padding-left: 22px;
    color: var(--nf-muted);
    font-size: 13px;
    font-variant-numeric: tabular-nums;
  }
  .nf-library {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(118px, 1fr));
    gap: 6px;
    margin-top: 8px;
  }
  .nf-library .nf-btn {
    font-weight: 500;
    font-size: 13px;
  }
  /* the library cards: a picture, the name, size and source, a star, and size chips for a model in several sizes */
  .nf-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(86px, 1fr));
    gap: 8px;
    margin-top: 8px;
  }
  .nf-card {
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 14px;
    background: var(--nf-chrome);
    box-shadow: 0 0 0 1px var(--nf-line);
  }
  .nf-card-main {
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 6px 6px 8px;
    border: 0;
    border-radius: 14px;
    background: none;
    color: var(--nf-text);
    font: inherit;
    text-align: left;
    cursor: pointer;
  }
  .nf-card-main:hover,
  .nf-card-main:focus-visible {
    background: rgba(127, 127, 127, 0.1);
    outline: none;
  }
  .nf-card-name {
    font-size: 12px;
    font-weight: 500;
    line-height: 1.25;
    overflow-wrap: anywhere;
    hyphens: auto;
  }
  .nf-card-meta {
    font-size: 11px;
    color: var(--nf-muted);
    line-height: 1.25;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .nf-card-star {
    position: absolute;
    top: 3px;
    right: 3px;
    width: 24px;
    height: 24px;
    border: 0;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.25);
    color: var(--nf-muted);
    font-size: 15px;
    line-height: 1;
    cursor: pointer;
  }
  .nf-card-star[aria-pressed="true"] {
    color: var(--nf-warm, #ffb547);
  }
  .nf-card-sizes {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 0 6px 8px;
  }
  .nf-size {
    min-width: 34px;
    padding: 3px 6px;
    border: 1px solid var(--nf-line);
    border-radius: 999px;
    background: none;
    color: var(--nf-muted);
    font: inherit;
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
  }
  .nf-size[aria-pressed="true"] {
    border-color: var(--nf-accent);
    color: var(--nf-accent);
  }
  .nf-lib-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 8px;
  }
  .nf-lib-chip {
    min-height: 30px;
    padding: 4px 10px;
    font-size: 12px;
    box-shadow: 0 0 0 1px var(--nf-line);
  }
  .nf-lib-chip[aria-pressed="true"] {
    color: var(--nf-accent);
    box-shadow: 0 0 0 1px var(--nf-accent);
  }
  .nf-lib-all {
    width: 100%;
    margin-top: 12px;
  }
  /* the background picture while it is edited: a dashed frame and a corner handle */
  .nf-bg-frame {
    fill: none;
    stroke: var(--nf-accent);
    stroke-width: 1.5;
    stroke-dasharray: 6 4;
    pointer-events: none;
  }
  .nf-bg-handle {
    fill: var(--nf-accent);
    stroke: #041018;
    stroke-width: 2;
    cursor: nwse-resize;
  }
  .nf-furn-body {
    fill: color-mix(in srgb, var(--nf-soft) 10%, transparent);
    stroke: color-mix(in srgb, var(--nf-soft) 55%, transparent);
    stroke-width: 1.2;
    vector-effect: non-scaling-stroke;
    cursor: grab;
  }
  .nf-furn-sym * {
    fill: none;
    stroke: rgba(150, 175, 255, 0.55);
    stroke-width: 1;
    vector-effect: non-scaling-stroke;
    pointer-events: none;
  }
  .nf-furn-sym .nf-sym-fill {
    fill: color-mix(in srgb, var(--nf-soft) 28%, transparent);
  }
  .nf-furn-sym .nf-sym-dash {
    stroke-dasharray: 6 4;
  }
  .nf-furn-sym .nf-sym-strong {
    stroke: var(--nf-accent);
    stroke-width: 2;
  }
  .nf-out polygon {
    fill: color-mix(in srgb, var(--nf-soft) 6%, transparent);
    stroke: color-mix(in srgb, var(--nf-soft) 40%, transparent);
    stroke-width: 1;
    stroke-dasharray: 4 3;
    cursor: grab;
  }
  .nf-out-lawn polygon,
  .nf-out-bed polygon,
  .nf-out-wild polygon,
  .nf-out-hedge polygon {
    fill: rgba(61, 224, 160, 0.1);
    stroke: rgba(61, 224, 160, 0.5);
  }
  .nf-out-pool polygon {
    fill: color-mix(in srgb, var(--nf-accent) 18%, transparent);
    stroke: var(--nf-accent);
  }
  .nf-out-terrace polygon {
    fill: rgba(150, 130, 255, 0.12);
  }
  .nf-free-wall {
    cursor: grab;
  }
  .nf-vertex-no {
    fill: var(--nf-accent);
    font-size: 11px;
    font-weight: 700;
    pointer-events: none;
  }
  .nf-edge-box {
    margin: 12px 0;
    padding: 10px 12px;
    border: 1px solid color-mix(in srgb, var(--nf-accent) 45%, transparent);
    border-radius: 12px;
    background: color-mix(in srgb, var(--nf-accent) 6%, transparent);
  }
  .nf-edge-box h4 {
    margin: 0 0 4px;
    color: var(--nf-accent);
    font-size: 13px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  /* a wall row: name and length, the height, then the buttons (full height, no wall, cut) in one line;
     a split point gets a line of its own below */
  .nf-edge-height {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    align-items: end;
    padding: 4px 6px;
    margin: 0 -6px;
    border-radius: 8px;
  }
  .nf-edge-height > span:first-child {
    flex: 1 1 84px;
    min-width: 84px;
  }
  .nf-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .nf-chips .nf-chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    cursor: default;
    color: var(--nf-text);
  }
  .nf-chip-x {
    border: 0;
    background: none;
    color: var(--nf-muted);
    font: inherit;
    font-size: 16px;
    line-height: 1;
    padding: 0 2px;
    cursor: pointer;
  }
  .nf-quiet-time > span {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .nf-quiet-time input {
    flex: 1 1 0;
  }
  .nf-edge-height > .nf-field {
    flex: 1 1 90px;
    min-width: 0;
  }
  .nf-edge-height > .nf-muted {
    flex: 1 1 90px;
    align-self: center;
  }
  .nf-edge-height > .nf-btn {
    flex: 0 0 auto;
    white-space: nowrap;
    padding-left: 10px;
    padding-right: 10px;
  }
  .nf-edge-height > .nf-split-row {
    flex: 1 1 100%;
    display: flex;
    gap: 6px;
    align-items: end;
  }
  .nf-edge-height > .nf-split-row > .nf-field {
    flex: 1;
  }
  .nf-edge-on {
    background: color-mix(in srgb, var(--nf-accent) 14%, transparent);
  }
  .nf-edge-low b {
    color: var(--nf-accent);
  }
  .nf-wall-low {
    opacity: 0.55;
  }
  .nf-dev-source {
    display: flex;
    margin: 8px 0;
  }
  .nf-dev-source button {
    flex: 1 1 0;
    min-width: 0;
    padding: 6px 4px;
    font-size: 12px;
    line-height: 1.2;
    white-space: normal;
    text-align: center;
    border-radius: 10px;
  }
  .nf-place-all {
    margin: 10px 0 0;
  }
  .nf-roof-sec polygon {
    fill: color-mix(in srgb, #ffb547 10%, transparent);
    stroke: #ffb547;
    stroke-width: 2;
    stroke-dasharray: 8 6;
    cursor: move;
  }
  .nf-roof-sel polygon {
    fill: color-mix(in srgb, var(--nf-accent) 14%, transparent);
    stroke: var(--nf-accent);
    stroke-dasharray: none;
  }
  /* solar modules: dark blue panes with a light frame, so they do not look like a selected room */
  .nf-roofwin polygon {
    fill: color-mix(in srgb, #2b6b8f 70%, transparent);
    stroke: #e3e9f5;
    stroke-width: 2;
    cursor: move;
  }
  .nf-roofwin-sel polygon {
    stroke: #ffd75a;
  }
  .nf-tool-energy .nf-roof-layer {
    opacity: 0.45;
  }
  .nf-tool-energy .nf-energy-item {
    pointer-events: auto;
  }
  .nf-swatches {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding-top: 4px;
  }
  .nf-stair-shapes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
  }
  .nf-stair-shape {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    padding: 6px 4px;
    font-size: 11px;
    line-height: 1.2;
    text-align: center;
  }
  .nf-stair-shape[aria-checked="true"] {
    border-color: var(--nf-accent);
    color: var(--nf-accent);
    box-shadow: 0 0 0 1px var(--nf-accent) inset;
  }
  .nf-swatch {
    width: 30px;
    height: 30px;
    padding: 0;
    border-radius: 50%;
    border: 2px solid var(--nf-line);
    background: var(--sw);
    cursor: pointer;
  }
  .nf-swatch[aria-checked="true"] {
    border-color: var(--nf-text);
    outline: 2px solid var(--nf-accent);
    outline-offset: 2px;
  }
  .nf-energy-marker {
    cursor: move;
  }
  .nf-checklist .nf-chk {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    margin: 2px 0;
    padding: 6px 8px;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: inherit;
    font: inherit;
    text-align: left;
    text-decoration: none;
    cursor: pointer;
  }
  .nf-checklist .nf-chk:hover {
    background: rgba(127, 127, 127, 0.12);
  }
  .nf-checklist .nf-chk span {
    width: 18px;
    text-align: center;
    font-weight: 700;
  }
  .nf-chk-ok span {
    color: #59ff8c;
  }
  .nf-chk-todo span {
    color: #ffc633;
  }
  .nf-chk-opt {
    opacity: 0.75;
  }
  .nf-teaser-on {
    border-color: rgba(89, 255, 140, 0.5);
  }
  .nf-teaser {
    margin-top: 12px;
    padding: 12px;
    border-radius: 14px;
    border: 1px solid color-mix(in srgb, #ffd75a 45%, transparent);
    background: linear-gradient(160deg, color-mix(in srgb, #ffd75a 10%, transparent), transparent 60%);
  }
  .nf-teaser-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }
  .nf-teaser-soon {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--nf-chrome-solid);
    background: #ffd75a;
    border-radius: 999px;
    padding: 2px 8px;
    white-space: nowrap;
  }
  .nf-teaser img {
    display: block;
    width: 100%;
    border-radius: 10px;
    border: 1px solid color-mix(in srgb, var(--nf-accent) 40%, transparent);
  }
  .nf-teaser ul {
    margin: 8px 0 4px;
    padding-left: 18px;
    font-size: 13px;
  }
  /* the roof and energy tools say what can be moved there (everything else is locked) */
  .nf-tool-note {
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    max-width: calc(100% - 24px);
    padding: 5px 12px;
    border-radius: 999px;
    background: color-mix(in srgb, var(--nf-chrome-solid) 85%, transparent);
    border: 1px solid color-mix(in srgb, #ffd75a 60%, transparent);
    color: #ffe7a3;
    font-size: 12px;
    text-align: center;
    pointer-events: none;
  }
  .nf-route line {
    stroke: var(--nf-warm);
    stroke-width: 2;
    stroke-dasharray: 6 4;
    opacity: 0.7;
  }
  .nf-route circle {
    fill: var(--nf-warm);
    opacity: 0.8;
  }
  .nf-route circle.nf-route-riser {
    fill: none;
    stroke: var(--nf-warm);
    stroke-width: 2;
  }
  .nf-route-drawing line {
    stroke: var(--nf-accent);
    stroke-dasharray: none;
    opacity: 1;
  }
  .nf-route-drawing circle {
    fill: var(--nf-accent);
    opacity: 1;
  }
  .nf-route-drawing circle.nf-route-riser {
    fill: none;
    stroke: var(--nf-accent);
  }
  .nf-route text {
    fill: var(--nf-text);
    font-size: 11px;
    pointer-events: none;
  }
  .nf-routes {
    pointer-events: none;
  }
  .nf-energy-marker circle {
    fill: color-mix(in srgb, var(--nf-chrome-solid) 80%, transparent);
    stroke: #ffd75a;
    stroke-width: 2;
  }
  .nf-energy-marker-sel circle {
    stroke: var(--nf-accent);
    stroke-width: 3;
    fill: color-mix(in srgb, var(--nf-accent) 25%, var(--nf-chrome-solid));
  }
  .nf-energy-marker text {
    text-anchor: middle;
    pointer-events: none;
  }
  .nf-energy-icon {
    font-size: 17px;
  }
  .nf-energy-name {
    font-size: 11px;
    font-weight: 700;
    fill: #ffd75a;
    paint-order: stroke;
    stroke: rgba(0, 0, 0, 0.65);
    stroke-width: 3px;
  }
  .nf-solar polygon {
    fill: color-mix(in srgb, #1b3a8f 75%, transparent);
    stroke: #9fb8ff;
    stroke-width: 1.5;
    cursor: move;
  }
  .nf-solar-sel polygon {
    fill: color-mix(in srgb, #1b3a8f 80%, transparent);
    stroke: #ffd75a;
    stroke-width: 2;
  }
  .nf-solar polygon.nf-solar-off {
    fill: transparent;
    stroke-dasharray: 4 4;
    stroke-width: 1.5;
  }
  .nf-solar-pick polygon {
    cursor: pointer;
  }
  .nf-roof-ridge line {
    stroke: #ffb547;
    stroke-width: 2.5;
    pointer-events: none;
  }
  .nf-roof-sel .nf-roof-ridge line {
    stroke: var(--nf-accent);
  }
  .nf-roof-sec text {
    fill: #ffd28a;
    font-size: 12px;
    font-weight: 700;
    text-anchor: middle;
    paint-order: stroke;
    stroke: rgba(0, 0, 0, 0.6);
    stroke-width: 3px;
    pointer-events: none;
  }
  .nf-tool-energy .nf-room,
  .nf-tool-energy [data-furniture],
  .nf-tool-energy [data-device],
  .nf-tool-energy [data-opening],
  .nf-tool-energy [data-free-wall],
  .nf-tool-energy [data-outdoor],
  .nf-tool-energy .nf-roof-layer,
  .nf-tool-roof .nf-room,
  .nf-tool-roof [data-furniture],
  .nf-tool-roof [data-device],
  .nf-tool-roof [data-opening],
  .nf-tool-roof [data-free-wall],
  .nf-tool-roof [data-outdoor] {
    pointer-events: none;
  }
  .nf-dev-area {
    margin: 10px 0 2px;
    color: var(--nf-muted);
    font-size: 12px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  .nf-h3row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }
  .nf-h3row h3 {
    margin-bottom: 0;
  }
  .nf-fix {
    min-height: 30px;
    padding: 4px 10px;
    font-size: 13px;
  }
  .nf-fix[aria-pressed="true"] {
    border-color: var(--nf-accent);
    color: var(--nf-accent);
  }
  .nf-lock {
    font-size: 13px;
    text-anchor: middle;
    pointer-events: none;
  }
  .nf-hint-fixed {
    color: var(--nf-accent);
  }
  .nf-ctx {
    position: absolute;
    z-index: 5;
    display: flex;
    flex-direction: column;
    min-width: 170px;
    padding: 4px;
    border: 1px solid var(--nf-line);
    border-radius: 10px;
    background: var(--nf-panel, #111a2e);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
  }
  .nf-ctx button {
    padding: 8px 12px;
    border: none;
    border-radius: 7px;
    background: none;
    color: inherit;
    font: inherit;
    text-align: left;
    cursor: pointer;
  }
  .nf-ctx button:hover:not(:disabled) {
    background: color-mix(in srgb, var(--nf-accent) 16%, transparent);
  }
  .nf-ctx button:disabled {
    opacity: 0.45;
    cursor: default;
  }
  .nf-ctx-danger {
    color: var(--nf-danger, #ff6b7a) !important;
  }
  .nf-edge-hi {
    stroke: var(--nf-accent);
    stroke-width: 6;
    stroke-linecap: round;
    filter: drop-shadow(0 0 6px var(--nf-accent));
  }
  .nf-free-wall .nf-hit {
    stroke: transparent;
    stroke-width: 18;
  }
  .nf-free-wall-line {
    stroke: transparent;
    stroke-width: 1;
  }
  .nf-free-wall-sel .nf-free-wall-line {
    stroke: var(--nf-accent);
    stroke-width: 2;
    stroke-dasharray: 6 4;
  }
  .nf-draft-wall {
    stroke-width: 4;
  }
  .nf-open-passage {
    stroke-dasharray: 4 4;
  }
  .nf-out-sel polygon {
    stroke: var(--nf-accent);
    stroke-width: 2;
    stroke-dasharray: none;
  }
  .nf-out text {
    fill: var(--nf-muted);
    font-size: 11px;
    text-anchor: middle;
    pointer-events: none;
  }
  .nf-furn-lit .nf-furn-body {
    fill: rgba(255, 181, 71, 0.35);
    stroke: var(--nf-warm);
  }
  .nf-rotate {
    cursor: grab;
  }
  .nf-preview {
    position: fixed;
    z-index: 20;
    width: 180px;
    padding: 8px 8px 10px;
    border-radius: 16px;
    background: var(--nf-bg2);
    box-shadow: var(--nf-shadow), 0 0 0 1px var(--nf-line);
    text-align: center;
    pointer-events: none;
    animation: nf-pop 120ms ease-out;
  }
  @keyframes nf-pop {
    from {
      opacity: 0;
      transform: translateX(8px);
    }
  }
  .nf-preview img,
  .nf-preview-wait {
    display: block;
    width: 164px;
    height: 164px;
  }
  .nf-preview-wait {
    margin: 0 auto;
    border-radius: 12px;
    background: rgba(127, 127, 127, 0.1);
  }
  .nf-preview b {
    display: block;
    margin-top: 2px;
    font-size: 13px;
    color: #e8eeff;
  }
  .nf-lib-badge {
    margin-left: 4px;
    color: var(--nf-accent);
    vertical-align: -2px;
  }
  .nf-pin {
    border: 0;
    background: none;
    padding: 2px 6px;
    font-size: 17px;
    line-height: 1;
    color: var(--nf-muted);
    cursor: pointer;
  }
  .nf-pin-on {
    color: var(--nf-warm);
  }
  .nf-back {
    margin-bottom: 12px;
  }
  .nf-presets {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 10px;
  }
  .nf-resize {
    cursor: nwse-resize;
  }
  .nf-resize rect {
    fill: var(--nf-accent);
    stroke: var(--nf-chrome-solid);
    stroke-width: 1.5;
  }
  .nf-code {
    display: block;
    font: 12px/1.4 ui-monospace, Menlo, Consolas, monospace;
    padding: 6px 8px;
    border-radius: 8px;
    background: rgba(127, 127, 127, 0.12);
    user-select: all;
    word-break: break-all;
  }
  .nf-shift {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: wrap;
  }
  .nf-shift input {
    width: 5.5em;
  }
  .nf-headroom {
    stroke: rgba(255, 214, 90, 0.55);
    stroke-width: 1;
    stroke-dasharray: 6 4;
    pointer-events: none;
  }
  .nf-headroom-label {
    font-size: 10px;
    fill: rgba(255, 214, 90, 0.75);
    text-anchor: middle;
    pointer-events: none;
  }
  .nf-split-mark {
    stroke: color-mix(in srgb, var(--nf-accent) 90%, transparent);
    stroke-width: 2;
    pointer-events: none;
  }
  .nf-floor-menu {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin: 8px 0;
    padding: 10px;
    border-radius: 12px;
    background: rgba(127, 127, 127, 0.1);
    max-width: 100%;
    box-sizing: border-box;
  }
  .nf-icon-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .nf-icon-row input {
    flex: 1;
    min-width: 0;
  }
  .nf-icon-row ha-icon {
    --mdc-icon-size: 22px;
    color: var(--nf-accent);
  }
  .nf-floor-menu .nf-btn {
    text-align: left;
    width: 100%;
    min-width: 0;
    white-space: normal;
    overflow-wrap: anywhere;
  }
  .nf-rotate line {
    stroke: var(--nf-accent);
    stroke-dasharray: 3 3;
  }
  .nf-rotate circle:not(.nf-hit) {
    fill: var(--nf-chrome-solid);
    stroke: var(--nf-accent);
    stroke-width: 2;
  }
  .nf-rotate path {
    fill: none;
    stroke: var(--nf-accent);
    stroke-width: 1.5;
    stroke-linecap: round;
  }
  .nf-lib-toggle {
    display: flex;
    align-items: center;
    gap: 6px;
    width: 100%;
    padding: 6px 0;
    border: 0;
    background: none;
    font: inherit;
    cursor: pointer;
    text-align: left;
  }
  .nf-lib-toggle:hover {
    color: var(--nf-text);
  }
  .nf-lib-caret {
    width: 12px;
    color: var(--nf-accent);
  }
  .nf-lib-count {
    margin-left: auto;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
    opacity: 0.7;
  }
  .nf-lib-head {
    margin: 10px 0 0;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--nf-muted);
  }
  .nf-furn-front {
    stroke: var(--nf-accent);
    stroke-width: 2.5;
    vector-effect: non-scaling-stroke;
    opacity: 0.8;
    pointer-events: none;
  }
  .nf-furn text {
    fill: var(--nf-muted);
    font-size: 11px;
    text-anchor: middle;
    pointer-events: none;
  }
  .nf-furn-sel .nf-furn-body {
    fill: color-mix(in srgb, var(--nf-accent) 16%, transparent);
    stroke: var(--nf-accent);
    stroke-width: 2;
  }
  .nf-open {
    cursor: grab;
  }
  .nf-open-gap {
    fill: var(--nf-chrome-solid);
    stroke: none;
  }
  .nf-open path,
  .nf-open line {
    fill: none;
    stroke-width: 1.6;
    stroke-linecap: round;
  }
  .nf-open-door path {
    stroke: var(--nf-warm);
    stroke-dasharray: 3 3;
  }
  .nf-open-front path,
  .nf-open-door line {
    stroke: var(--nf-warm);
    stroke-width: 3;
    stroke-dasharray: none;
  }
  .nf-open-door line.nf-open-pane {
    stroke: var(--nf-accent);
    stroke-width: 2;
  }
  .nf-open-garage line {
    stroke: var(--nf-warm);
    stroke-width: 3;
  }
  .nf-open-track {
    stroke: var(--nf-warm);
    stroke-dasharray: 4 4;
    opacity: 0.6;
  }
  .nf-open-window line {
    stroke: var(--nf-accent);
    stroke-width: 2;
  }
  .nf-open-sel .nf-open-gap {
    fill: color-mix(in srgb, var(--nf-accent) 25%, transparent);
  }
  .nf-open-sel path,
  .nf-open-sel line {
    stroke-width: 2.4;
  }
  .nf-bg-rotate {
    cursor: grab;
  }
  .nf-bg-ruler line {
    stroke: #ffb020;
    stroke-width: 2.5;
    stroke-dasharray: 6 4;
  }
  .nf-bg-ruler circle {
    fill: #ffb020;
    stroke: #1a1000;
    stroke-width: 1.5;
  }
  .nf-own-button {
    padding: 10px 0;
    border-top: 1px solid var(--nf-line);
  }
  .nf-own-button textarea {
    font: 12px/1.4 ui-monospace, monospace;
    width: 100%;
    box-sizing: border-box;
    padding: 6px 8px;
    color: var(--nf-text);
    background: color-mix(in srgb, var(--nf-text) 4%, transparent);
    border: 1px solid var(--nf-line);
    border-radius: 8px;
  }
  .nf-search {
    position: sticky;
    top: 0;
    z-index: 2;
    background-color: var(--nf-panel, #0d1424);
    width: 100%;
    box-sizing: border-box;
    font: inherit;
    font-size: 14px;
    color: var(--nf-text);
    background: color-mix(in srgb, var(--nf-text) 4%, transparent);
    border: 1px solid var(--nf-line);
    border-radius: 8px;
    padding: 7px 9px;
    margin: 2px 0 6px;
  }
  .nf-more {
    font: inherit;
    font-size: 12px;
    color: var(--nf-muted);
    background: none;
    border: none;
    text-align: left;
    padding: 2px 26px 8px;
    cursor: pointer;
  }
  .nf-more:hover {
    color: var(--nf-accent);
  }
  .nf-dev-hidden .nf-dev-name {
    opacity: 0.45;
    text-decoration: line-through;
  }
  .nf-dev-extra {
    padding-left: 18px;
    font-size: 13px;
  }
  .nf-dev-title {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0 0 8px;
    font-weight: 600;
  }
  .nf-notice {
    color: var(--nf-accent);
  }
  .nf-device-sel circle:not(.nf-hit) {
    stroke: var(--nf-accent);
    stroke-width: 3;
  }
  .nf-dev-row {
    align-items: center;
    cursor: default;
  }
  .nf-dev-row:hover {
    color: var(--nf-text);
  }
  .nf-dev-name {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    font: inherit;
    color: inherit;
    background: none;
    border: none;
    padding: 0;
    text-align: left;
    cursor: pointer;
  }
  .nf-dev-name:disabled {
    cursor: default;
  }
  .nf-dev-name span {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .nf-dev-name svg {
    flex: none;
  }
  .nf-color-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .nf-color-row input[type="color"] {
    width: 48px;
    height: 32px;
    padding: 0;
    border: none;
    background: none;
  }
  .nf-link {
    font: inherit;
    font-size: 13px;
    font-weight: 600;
    color: var(--nf-accent);
    background: none;
    border: none;
    padding: 4px 2px;
    cursor: pointer;
    white-space: nowrap;
  }
  .nf-wide-btn {
    width: 100%;
    margin-bottom: 6px;
  }
  .nf-device {
    cursor: grab;
  }
  .nf-wedge path,
  .nf-wedge circle:not(.nf-hit) {
    fill: color-mix(in srgb, var(--nf-accent) 12%, transparent);
    stroke: color-mix(in srgb, var(--nf-accent) 45%, transparent);
    stroke-width: 1;
    pointer-events: none;
  }
  .nf-wedge-sel path,
  .nf-wedge-sel > circle {
    fill: color-mix(in srgb, var(--nf-accent) 20%, transparent);
    stroke: var(--nf-accent);
  }
  .nf-wedge .nf-rotate circle {
    pointer-events: auto;
  }
  .nf-device circle:not(.nf-hit) {
    fill: #111a2e;
    stroke: var(--nf-soft);
    stroke-width: 1.5;
    vector-effect: non-scaling-stroke;
  }
  .nf-device path {
    fill: none;
    stroke: var(--nf-text);
    stroke-width: 2.6;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  .nf-device-on circle:not(.nf-hit) {
    fill: var(--nf-warm);
    stroke: var(--nf-warm);
  }
  .nf-device-on path {
    stroke: #2a1a00;
  }
  .nf-device-icon {
    pointer-events: none;
    overflow: visible;
  }
  .nf-device-icon ha-icon {
    display: block;
    --mdc-icon-size: 16px;
    color: var(--nf-text);
  }
  .nf-device-on .nf-device-icon ha-icon {
    color: #2a1a00;
  }
  .nf-dev-icon {
    --mdc-icon-size: 18px;
    flex: none;
  }
  .nf-muted {
    color: var(--nf-muted);
    font-variant-numeric: tabular-nums;
  }
  .nf-points {
    margin: 12px 0;
  }
  .nf-point {
    display: grid;
    grid-template-columns: 18px 1fr 1fr auto;
    gap: 6px;
    align-items: end;
    padding: 4px 0;
  }
  .nf-point-sel .nf-muted {
    color: var(--nf-accent);
  }
  .nf-point .nf-btn {
    min-height: 34px;
    padding: 4px 10px;
  }
  .nf-upload {
    position: relative;
    text-align: center;
    overflow: hidden;
  }
  .nf-upload input {
    position: absolute;
    inset: 0;
    opacity: 0;
    cursor: pointer;
  }
  .nf-sub {
    margin: 8px 0 0;
    font-size: 12.5px;
    color: var(--nf-muted);
  }
  .nf-note {
    margin: 0;
    font-size: 12.5px;
    color: var(--nf-warm);
  }
`;var Qf=["cabinet","shelf","lamp","device"],rn="own_studio";var o0={cabinet:{w:120,d:45,h:80,doors:2,drawers:1,shelves:2,base:"plinth",handle:"bar",back:!0,lamp:"floor",display:!1,mount:"floor",body:"white",front:"wood"},shelf:{w:80,d:35,h:180,doors:0,drawers:0,shelves:4,base:"none",handle:"none",back:!0,lamp:"floor",display:!1,mount:"floor",body:"wood",front:"wood"},lamp:{w:40,d:40,h:160,doors:0,drawers:0,shelves:0,base:"none",handle:"none",back:!1,lamp:"floor",display:!1,mount:"floor",body:"metal",front:"white"},device:{w:60,d:60,h:85,doors:0,drawers:0,shelves:0,base:"none",handle:"none",back:!1,lamp:"floor",display:!0,mount:"floor",body:"white",front:"dark"}},Xa=(t,e)=>({kind:t,name:e,...o0[t]}),Jf=(t,e)=>({...Xa(e,t.name),body:t.body,front:t.front}),Nn=(t,e,n)=>Math.min(n,Math.max(e,Number.isFinite(t)?t:e)),Vn=t=>Math.round(t*1e4)/1e4;function Qa(t){return{...t,name:t.name.trim().slice(0,60),w:Nn(Math.round(t.w),5,400),d:Nn(Math.round(t.d),2,200),h:Nn(Math.round(t.h),2,300),doors:Nn(Math.round(t.doors),0,6),drawers:Nn(Math.round(t.drawers),0,6),shelves:Nn(Math.round(t.shelves),0,12)}}function se(t,e,n,r,o,i,s,a,l={}){let[c,u,h]=t,p=(x,k,$)=>{let R=Math.max(-$,x-k/2),F=Math.min($,x+k/2);return F-R<1e-4?[Math.max(-$,Math.min($,x)),.001*$*2]:[(R+F)/2,F-R]},[d,f]=p(e,r,c/2),[_,y]=p(n,o,u/2),b=Math.max(0,Math.min(h*.999,i)),v=Math.max(h*.001,Math.min(h-b,s)),w=x=>Vn(Math.max(.001,Math.min(1,x)));return{shape:"box",x:Vn(d/c),z:Vn(_/u),w:w(f/c),d:w(y/u),y:Vn(b/h),h:w(v/h),color:a,...l}}function em(t,e,n){let[r,o,i]=t;if(e==="legs"){let s=Math.min(.1,i*.25),a=Math.min(.04,r/6,o/6);for(let[l,c]of[[-1,-1],[1,-1],[-1,1],[1,1]])n.push(se(t,l*(r/2-a),c*(o/2-a),a,a,0,s,"metal"));return s}if(e==="plinth"){let s=Math.min(.08,i*.2);return n.push(se(t,0,-.02,r-.02,o-.04,0,s,"dark")),s}return 0}function i0(t,e){let[n,r,o]=e,i=[],s=em(e,t.base,i),a=t.doors+t.drawers>0,l=t.handle==="none"||!a?0:Math.min(.025,r*.08),c=a?Math.min(.02,r*.1):0,u=r-c-l,h=-r/2+u/2,p=o-s;if(!a){let v=Math.min(.018,n/10,p/10);i.push(se(e,-n/2+v/2,0,v,r,s,p,t.body,{edges:!0})),i.push(se(e,n/2-v/2,0,v,r,s,p,t.body,{edges:!0})),i.push(se(e,0,-r/2+.005,n-2*v,.01,s,p,t.body));for(let w=0;w<=t.shelves+1;w++)i.push(se(e,0,.005,n-2*v,r-.01,s+(p-v)*w/(t.shelves+1),v,t.front,{edges:"faint"}));return i}i.push(se(e,0,h,n,u,s,p,t.body,{edges:!0}));let d=.004,f=-r/2+u+c/2,_=t.doors>0?Math.min(.18,Math.max(.08,(p-.3)/Math.max(1,t.drawers))):p/t.drawers,y=s+(t.drawers>0?_*t.drawers:0),b=(v,w,x)=>{if(t.handle==="none")return;let k=r/2-l/2;t.handle==="knob"?i.push(se(e,v,k,.025,l,w-.0125,.025,"metal")):x?i.push(se(e,v,k,.015,l,w-.08,.16,"metal")):i.push(se(e,v,k,Math.min(.16,n*.4),l,w-.0075,.015,"metal"))};for(let v=0;v<t.drawers;v++){let w=s+_*v;i.push(se(e,0,f,n-2*d,c,w+d,_-2*d,t.front,{edges:"faint"})),b(0,w+_*(t.drawers===1&&t.doors===0?.5:.7),!1)}if(t.doors>0){let v=n/t.doors,w=o-y;for(let x=0;x<t.doors;x++){let k=-n/2+v*(x+.5);i.push(se(e,k,f,v-2*d,c,y+d,w-2*d,t.front,{edges:"faint"}));let $=t.doors===1||x%2===0?1:-1,R=y+w*(o>1.2?.45:.8);b(k+$*(v/2-.04),Math.min(R,o-.1),!0)}}return i}function s0(t,e){let[n,r,o]=e,i=Math.min(.02,n/10,o/10),s=[se(e,-n/2+i/2,0,i,r,0,o,t.body,{edges:!0}),se(e,n/2-i/2,0,i,r,0,o,t.body,{edges:!0})];t.back&&s.push(se(e,0,-r/2+.005,n-2*i,.01,0,o,t.body));let a=t.shelves+2;for(let l=0;l<a;l++)s.push(se(e,0,t.back?.005:0,n-2*i,t.back?r-.01:r,(o-i)*l/(a-1),i,t.front,{edges:!0}));return s}function a0(t,e){let[n,r,o]=e,i=Math.min(n,r),s=(l,c,u,h,p,d,f={})=>({...se(e,l,c,u,u,h,p,d,f),shape:"cyl"}),a=(l,c,u)=>({...se(e,0,0,i,i,l,c,t.front,{glow:!0,edges:"faint"}),shape:"loft",tw:Vn(Math.min(1,i*u/n)),td:Vn(Math.min(1,i*u/r))});switch(t.lamp){case"pendant":{let l=Math.min(.3,o*.4);return[s(0,0,Math.min(.12,i),o-.03,.03,t.body),s(0,0,Math.min(.01,i/4),l,o-l-.03,"dark"),a(0,l,.35)]}case"wall":{let l=Math.min(.02,r*.2);return[se(e,0,-r/2+l/2,Math.min(.1,n),l,o*.3,o*.4,t.body),se(e,0,0,Math.min(.02,n),r-l,o*.45,Math.min(.02,o*.1),t.body),a(o*.15,o*.7,.7)]}default:{let l=Math.min(t.lamp==="table"?.25:.35,o*.4);return[s(0,0,i*.6,0,Math.min(.03,o*.05),t.body,{edges:!0}),s(0,0,Math.min(.03,i/6),.02,o-l-.02,t.body),a(o-l,l,.7)]}}}function l0(t,e){let[n,r,o]=e,i=[],s=t.mount==="floor"?em(e,t.base,i):0,a=t.display?Math.min(.01,r*.1):0;if(i.push(se(e,0,-a/2,n,r-a,s,o-s,t.body,{edges:!0})),t.display){let l=Math.min(.02,n*.08,(o-s)*.08);i.push(se(e,0,r/2-a/2,n-2*l,a,s+l,o-s-2*l,t.front,{screen:!0}))}return i}function wi(t,e,n){let r=Qa(t),o=[r.w/100,r.d/100,r.h/100],i=r.name||e,s=n==="en"?{en:i}:{[n.slice(0,5)]:i,en:i},a={id:e,name:s,size:o,parts:[],recipe:r};switch(r.kind){case"cabinet":a.parts=i0(r,o),a.surface=!0;break;case"shelf":a.parts=s0(r,o);break;case"lamp":a.parts=a0(r,o),a.light=r.lamp,a.mount=r.lamp==="pendant"?"ceiling":r.lamp==="wall"?"wall":r.lamp==="table"?"surface":"floor",r.lamp==="wall"&&(a.wall_y=1.6);break;case"device":a.parts=l0(r,o),a.electric=!0,a.mount=r.mount,r.mount==="wall"&&(a.wall_y=1.2);break}return a}function tm(t,e){let n=t.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/ß/g,"ss").replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"").slice(0,32)||"piece",r=/^[a-z0-9]/.test(n)?n:`p${n}`;if(!e.includes(r))return r;for(let o=2;;o++)if(!e.includes(`${r}_${o}`))return`${r}_${o}`}var nm=["white","wood","body","metal","dark","glass","accent"],c0={white:"#dfe6f2",wood:"#8a6a4a",body:"#3a4a6a",metal:"#9aa7bf",dark:"#1e2638",glass:"#7fd0e8",accent:"#37e0ff",fabric:"#4b5d8c",cushion:"#6a7fb3"},om=t=>c0[t]??t;function u0(t){let e=wi(t,"preview","en"),[n,,r]=e.size,o=180/Math.max(n,r),[i,s]=[n*o,r*o],a=[...e.parts].sort((l,c)=>l.z+l.d/2-(c.z+c.d/2));return m`<svg class="nf-studio-view" viewBox="-4 -4 ${i+8} ${s+8}" role="img" aria-hidden="true">
    ${a.map(l=>{let c=l.w*i,u=l.h*s,h=(l.x+.5)*i-c/2,p=s-(l.y+l.h)*s,d=l.shape==="cyl"?Math.min(c,u)/2:l.shape==="loft"?3:1;return E`<rect x=${h} y=${p} width=${Math.max(.6,c)} height=${Math.max(.6,u)} rx=${d} fill=${l.screen?"#0b1020":om(l.color)} stroke="rgba(10,16,32,0.55)" stroke-width="0.8" class=${l.glow?"nf-studio-glow":""} />`})}
  </svg>`}function rm(t,e,n,r){let o=t.t,i=!nm.includes(n),s=[...nm.map(a=>[a,o(a==="body"?"studio_color_plan":`studio_color_${a}`)]),["own",o("studio_color_own")]];return m`${O(t,e,i?"own":n,s,a=>r(a==="own"?om(n):a))}
  ${i?mt(t,o("studio_color_own"),n,"#8a6a4a",a=>r(a??"wood")):g}`}function im(t,e,n){let r=t.t,o=e.recipe,i=c=>n.change(Qa({...o,...c})),s=(c,u,h)=>A(t,r(c),u,p=>i({[h]:p}),1,1),a=(c,u,h)=>A(t,r(c),u,p=>i({[h]:p}),1,0),l=()=>{switch(o.kind){case"cabinet":return m`${a("studio_doors",o.doors,"doors")} ${a("studio_drawers",o.drawers,"drawers")}
          ${o.doors+o.drawers===0?a("studio_shelves",o.shelves,"shelves"):g}
          ${O(t,r("studio_handle"),o.handle,[["bar",r("studio_handle_bar")],["knob",r("studio_handle_knob")],["none",r("studio_handle_none")]],c=>i({handle:c}))}
          ${O(t,r("studio_base"),o.base,[["plinth",r("studio_base_plinth")],["legs",r("studio_base_legs")],["none",r("studio_base_none")]],c=>i({base:c}))}`;case"shelf":return m`${a("studio_shelves",o.shelves,"shelves")} ${L(t,r("studio_back"),o.back,c=>i({back:c}))}`;case"lamp":return O(t,r("studio_lamp"),o.lamp,[["floor",r("studio_lamp_floor")],["table",r("studio_lamp_table")],["pendant",r("studio_lamp_pendant")],["wall",r("studio_lamp_wall")]],c=>i({lamp:c}));case"device":return m`${L(t,r("studio_display"),o.display,c=>i({display:c}))}
          ${O(t,r("studio_mount"),o.mount,[["floor",r("studio_mount_floor")],["surface",r("studio_mount_surface")],["wall",r("studio_mount_wall")]],c=>i({mount:c}))}
          ${o.mount==="floor"?O(t,r("studio_base"),o.base,[["none",r("studio_base_none")],["legs",r("studio_base_legs")],["plinth",r("studio_base_plinth")]],c=>i({base:c})):g}`}};return m`<section class="nf-studio">
    <h3>🛠️ ${r(e.itemId?"studio_title_edit":"studio_title")}</h3>
    ${M(r("studio_hint"))}
    <div class="nf-lib-chips" role="group" aria-label=${r("studio_kind")}>
      ${Qf.map(c=>m`<button class="nf-chip" aria-pressed=${o.kind===c} ?disabled=${!!e.itemId&&o.kind!==c} @click=${()=>o.kind!==c&&n.change(Jf(o,c))}>${r(`studio_kind_${c}`)}</button>`)}
    </div>
    ${u0(o)}
    <div class="nf-form">
      ${q(t,r("studio_name"),o.name,c=>i({name:c}),{wide:!0,maxlength:60,placeholder:r(`studio_kind_${o.kind}`)})}
      ${s("studio_width",o.w,"w")} ${s("studio_depth",o.d,"d")} ${s("studio_height",o.h,"h")} ${l()}
      ${rm(t,r(o.kind==="lamp"?"studio_color_lamp_body":"studio_color_body"),o.body,c=>i({body:c}))}
      ${o.kind==="cabinet"||o.kind==="shelf"||o.kind==="lamp"||o.display?rm(t,r(o.kind==="lamp"?"studio_color_shade":o.kind==="device"?"studio_color_display":o.kind==="shelf"?"studio_color_boards":"studio_color_front"),o.front,c=>i({front:c})):g}
    </div>
    ${e.error?m`<p class="nf-sub nf-warn">${e.error}</p>`:g}
    ${X(m`<button class="nf-btn nf-primary" ?disabled=${e.busy||!t.admin} @click=${()=>n.save()}>${r(e.itemId?"studio_save":"studio_place")}</button>`,m`<button class="nf-btn" ?disabled=${e.busy} @click=${()=>n.close()}>${r("cancel")}</button>`)}
  </section>`}var d0={room_no_area:"\u{1F3F7}\uFE0F",areas_unplaced:"\u2795",devices_unplaced:"\u{1F4CD}",rooms_overlap:"\u29C9",opening_off_wall:"\u{1F6AA}",entity_missing:"\u2753",furniture_entity_missing:"\u2753",standby:"\u{1F50C}",battery_low:"\u{1FAAB}"};function h0(t,e){let n=e.kind==="room_no_area"&&e.vars.area?"check_room_no_area_named":`check_${e.kind}`;return t.t(n,e.vars)}function p0(t,e){let n=t.t;switch(e.fix.do){case"set_area":return n("check_fix_set_area",{area:String(e.vars.area)});case"add_area_rooms":return n("check_fix_add_rooms");case"place_devices":return n("check_fix_place",{n:e.fix.entityIds.length});case"remove_placements":return n("check_fix_remove",{n:e.fix.entityIds.length});default:return n("check_fix_show")}}function sm(t,e,n){let r=t.t,o=t.doc.floors.filter(i=>e.some(s=>s.floorId===i.id));return m`<section class="nf-check-panel">
    <div class="nf-h3row"><h3>✓ ${r("check_title")}</h3><button class="nf-btn nf-field-btn" title=${r("close")} @click=${()=>n.close()}>✕</button></div>
    ${e.length===0?m`<p class="nf-sub nf-check-ok">✅ ${r("check_all_good")}</p>`:m`${M(r("check_hint",{n:e.length}))}
        ${o.map(i=>m`<h4 class="nf-check-floor">${i.name}</h4>
            <ul class="nf-check-list">
              ${e.filter(s=>s.floorId===i.id).map(s=>m`<li>
                    <span class="nf-check-icon" aria-hidden="true">${d0[s.kind]}</span><span class="nf-check-text">${h0(t,s)}</span>
                    <button class="nf-btn ${s.changes?"nf-primary":""}" ?disabled=${s.changes&&!t.admin} @click=${()=>n.fix(s)}>${p0(t,s)}</button>
                  </li>`)}
            </ul>`)}`}
  </section>`}var am=(t,e)=>m`<button class="nf-btn nf-check-open" title=${t.t("check_open_hint")} @click=${e}>✓ ${t.t("check_open")}</button>`;function lm(t,e){if(!e||!Number.isFinite(e.value))return null;let n=/^\s*([^/\s]+)\s*\/\s*kWh\s*$/i.exec(e.unit);if(!n)return null;let r=/^(ct|cent|cents|c)$/i.test(n[1]),o=r||/^eur$/i.test(n[1])?"\u20AC":n[1];return{value:Math.round(t*e.value*(r?1:100))/100,currency:o}}var um=20,cm=new WeakMap;function f0(t){let e=t.entities??{},n=cm.get(e);if(!n){n=new Map;for(let[r,o]of Object.entries(e))o.device_id&&r.startsWith("sensor.")&&t.states[r]?.attributes.device_class==="battery"&&!n.has(o.device_id)&&n.set(o.device_id,r);cm.set(e,n)}return n}function m0(t,e){let n=t.entities?.[e]?.device_id,r=n?f0(t).get(n):void 0;if(r){let s=Number(t.states[r]?.state);if(Number.isFinite(s))return s}let o=t.states[e]?.attributes;if(!o||o.battery_level===void 0&&o.battery===void 0)return null;let i=Number(o.battery_level??o.battery);return Number.isFinite(i)?i:null}function g0(t){let e=[],n=r=>typeof r=="string"&&/^[a-z_]+\.[a-z0-9_]+$/.test(r);for(let r of t.placements)e.push({entity:r.entity_id,x:r.x,z:r.z,room:null});for(let r of t.furniture)for(let o of[r.entity,r.power])n(o)&&e.push({entity:o,x:r.x,z:r.z,room:null});for(let r of t.openings)for(let o of[r.contact,r.contact2,r.tilt,r.tilt2,r.cover,r.cover2,r.lock])n(o)&&e.push({entity:o,x:NaN,z:NaN,room:r.room_id});return e}var _0=(t,e,n)=>t.rooms.find(r=>r.points.length>=3&&H([e,n],r.points));function dm(t,e){let n=new Set,r=[];for(let o of e.floors)for(let i of g0(o)){let s=t.entities?.[i.entity]?.device_id??i.entity;if(n.has(s))continue;let a=m0(t,i.entity);a!==null&&(n.add(s),r.push({entity:i.entity,level:a,floorId:o.id,roomId:i.room??_0(o,i.x,i.z)?.id??null}))}return r.sort((o,i)=>o.level-i.level)}var Kn=.08;function hm(t,e){let n=1/0;for(let r=0;r<e.length;r++){let o=e[r],i=e[(r+1)%e.length],[s,a]=[i[0]-o[0],i[1]-o[1]],l=s*s+a*a,c=l>0?Math.max(0,Math.min(1,((t[0]-o[0])*s+(t[1]-o[1])*a)/l)):0;n=Math.min(n,Math.hypot(t[0]-(o[0]+s*c),t[1]-(o[1]+a*c)))}return n}var pm=t=>({x0:Math.min(...t.map(e=>e[0])),x1:Math.max(...t.map(e=>e[0])),z0:Math.min(...t.map(e=>e[1])),z1:Math.max(...t.map(e=>e[1]))});function b0(t,e,n=.2){if(t.points.length<3||e.points.length<3)return!1;let[r,o]=[pm(t.points),pm(e.points)],i=Math.max(r.x0,o.x0)+Kn,s=Math.min(r.x1,o.x1)-Kn,a=Math.max(r.z0,o.z0)+Kn,l=Math.min(r.z1,o.z1)-Kn;if(s<=i||l<=a)return!1;for(let c=i;c<=s+1e-9;c+=Math.min(n,s-i||n))for(let u=a;u<=l+1e-9;u+=Math.min(n,l-a||n)){let h=[c,u];if(H(h,t.points)&&H(h,e.points)&&hm(h,t.points)>Kn&&hm(h,e.points)>Kn)return!0}return!1}function mm(t){let e=new Set(["id","type","variant","name","icon","picture","vehicle","room_id","wall"]),n=r=>typeof r=="string"&&/^[a-z_]+\.[a-z0-9_]+$/.test(r);return Object.entries(t).flatMap(([r,o])=>e.has(r)?[]:Array.isArray(o)?o.filter(n):n(o)?[o]:[])}var fm=t=>mm(t),y0=3,w0=new Set(["off","standby","idle"]);function v0(t,e,n,r){let o=e.energy.tariff,i=o?t.states[o]:void 0,s=i?{value:Number(i.state),unit:String(i.attributes.unit_of_measurement??"")}:null,a=new Set,l=(c,u)=>{if(!c||c==="none"||a.has(c))return;a.add(c);let h=t.states[c]?.state;if(!h||!w0.has(h)||c.startsWith("light."))return;let p=pd(t,c),d=p?Me(t.states[p]):null;if(d===null||d<=y0)return;let f=lm(d*24*365/1e3,s);r.push({kind:"standby",floorId:n.id,vars:{name:N(t,c),w:Math.round(d),cost:f?`${f.value.toFixed(0)} ${f.currency}`:`${Math.round(d*24*365/1e3)} kWh`},fix:u,changes:!1})};for(let c of n.furniture)l(c.entity,{do:"show_furniture",furnitureId:c.id});for(let c of n.placements){let u=n.rooms.find(h=>h.points.length>=3&&H([c.x,c.z],h.points));u&&l(c.entity_id,{do:"show_room",roomId:u.id})}}function gm(t,e){let n=[],r=e?.areas,o=new Set(t.floors.flatMap(i=>i.rooms.map(s=>s.area_id)).filter(i=>!!i));for(let i of t.floors){if(i.layer)continue;for(let a of i.rooms){if(a.area_id)continue;let l=Object.values(r??{}).find(c=>c.name.trim().toLowerCase()===a.name.trim().toLowerCase()&&!o.has(c.area_id));n.push(l?{kind:"room_no_area",floorId:i.id,vars:{room:a.name,area:l.name},fix:{do:"set_area",roomId:a.id,areaId:l.area_id},changes:!0}:{kind:"room_no_area",floorId:i.id,vars:{room:a.name,area:""},fix:{do:"show_room",roomId:a.id},changes:!1})}let s=Bn(t,i,r);if(s.length&&n.push({kind:"areas_unplaced",floorId:i.id,vars:{n:s.length,names:s.map(a=>a.name).join(", ")},fix:{do:"add_area_rooms"},changes:!0}),e){let a=dt(e,[i]),l=ir(e,[i]);for(let c of i.rooms){if(!c.area_id)continue;let u=ei(i,c);for(let d of i.furniture)if(H([d.x,d.z],c.points))for(let f of fm(d))u.add(f);for(let d of i.openings)if(d.room_id===c.id){for(let f of mm(d))u.add(f);for(let f of Object.values(l.get(d.id)??{}))typeof f=="string"&&u.add(f)}for(let d of i.furniture){let f=a.get(d.id);if(f&&H([d.x,d.z],c.points))for(let _ of[f.entity,f.power])typeof _=="string"&&u.add(_)}let h=be(e,c).filter(d=>vt(Oe(e,d))),p=_n(e,h).map(d=>d.primary).filter(d=>!u.has(d));p.length&&n.push({kind:"devices_unplaced",floorId:i.id,vars:{room:c.name,n:p.length},fix:{do:"place_devices",roomId:c.id,entityIds:p},changes:!0})}}for(let a=0;a<i.rooms.length;a++)for(let l=a+1;l<i.rooms.length;l++){let[c,u]=[i.rooms[a],i.rooms[l]];b0(c,u)&&n.push({kind:"rooms_overlap",floorId:i.id,vars:{a:c.name,b:u.name},fix:{do:"show_room",roomId:u.id},changes:!1})}if(i.openings.length){let a=pe(i.rooms,{exterior:t.settings.wall_exterior,interior:t.settings.wall_interior},i.walls??[]).walls;for(let l of i.openings){let c=ze(l,i.rooms,i.walls??[]);(!c||!St(a,l,c))&&n.push({kind:"opening_off_wall",floorId:i.id,vars:{room:i.rooms.find(u=>u.id===l.room_id)?.name??""},fix:{do:"show_opening",openingId:l.id},changes:!1})}}if(e&&v0(e,t,i,n),e&&Object.keys(e.states).length){let a=i.placements.map(l=>l.entity_id).filter(l=>!e.states[l]);a.length&&n.push({kind:"entity_missing",floorId:i.id,vars:{n:a.length,ids:a.slice(0,3).join(", ")},fix:{do:"remove_placements",entityIds:a},changes:!0});for(let l of i.furniture){let c=fm(l).filter(u=>u!=="none"&&!e.states[u]);c.length&&!(le(l.type)&&!l.entity)&&n.push({kind:"furniture_entity_missing",floorId:i.id,vars:{id:c[0]},fix:{do:"show_furniture",furnitureId:l.id},changes:!1})}}}if(e)for(let i of dm(e,t)){if(i.level>=um)break;n.push({kind:"battery_low",floorId:i.floorId,vars:{name:N(e,i.entity),level:Math.round(i.level)},fix:i.roomId?{do:"show_room",roomId:i.roomId}:{do:"show_floor"},changes:!1})}return n}var J=t=>t.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),on=t=>t.map(([e,n])=>`${e.toFixed(3)},${n.toFixed(3)}`).join(" ");function k0(t,e,n,r){let o=pe(e.rooms,{exterior:t.settings.wall_exterior,interior:t.settings.wall_interior},e.walls??[]).walls,i=[...e.rooms.flatMap(b=>b.points),...o.flatMap(b=>b.footprint)];if(!i.length)return"";let[s,a]=[Math.min(...i.map(b=>b[0])),Math.max(...i.map(b=>b[0]))],[l,c]=[Math.min(...i.map(b=>b[1])),Math.max(...i.map(b=>b[1]))],u=1.2,h=[];for(let b of e.rooms)h.push(`<polygon points="${on(b.points)}" fill="#f4f4f4" stroke="none"/>`);for(let b of o)h.push(`<polygon points="${on(b.footprint)}" fill="#222" stroke="#222" stroke-width="0.01"/>`);for(let b of e.openings){let v=ze(b,e.rooms,e.walls??[]),w=v?St(o,b,v):null;if(!w)continue;let{wall:x,s:k}=w,$=Math.hypot(x.b[0]-x.a[0],x.b[1]-x.a[1]);if($<1e-6)continue;let R=[(x.b[0]-x.a[0])/$,(x.b[1]-x.a[1])/$],F=[-R[1],R[0]],z=(j,ye)=>[x.a[0]+R[0]*j+F[0]*ye,x.a[1]+R[1]*j+F[1]*ye],[I,P]=[k-b.width/2,k+b.width/2],[C,B]=[x.left+.01,-(x.right+.01)];if(h.push(`<polygon points="${on([z(I,C),z(P,C),z(P,B),z(I,B)])}" fill="#fff"/>`),b.type==="garage"){let j=(x.left-x.right)/2;h.push(`<polyline points="${on([z(I,j),z(P,j)])}" fill="none" stroke="#555" stroke-width="0.02" stroke-dasharray="0.12 0.08"/>`)}else if(b.type==="window"){let j=(x.left-x.right)/2;h.push(`<polyline points="${on([z(I,j),z(P,j)])}" fill="none" stroke="#222" stroke-width="0.03"/>`),h.push(`<polyline points="${on([z(I,C-.01),z(P,C-.01)])}" fill="none" stroke="#222" stroke-width="0.015"/><polyline points="${on([z(I,B+.01),z(P,B+.01)])}" fill="none" stroke="#222" stroke-width="0.015"/>`)}else{let j=b.room_id===x.roomRight?-1:1,ye=z(I,j*(j>0?x.left:x.right)),yt=z(I,j*((j>0?x.left:x.right)+b.width)),V=z(P,j*(j>0?x.left:x.right));h.push(`<path d="M ${ye[0]} ${ye[1]} L ${yt[0]} ${yt[1]} A ${b.width} ${b.width} 0 0 ${j>0?1:0} ${V[0]} ${V[1]}" fill="none" stroke="#555" stroke-width="0.015"/>`)}}let p=new Map(n.map(b=>[b.roomId,b]));for(let b of e.rooms){if(b.points.length<3)continue;let[v,w]=_e(b.points),x=p.get(b.id);h.push(`<text x="${v}" y="${w-.08}" font-size="0.32" text-anchor="middle" font-weight="600">${J(b.name)}</text>`),x&&h.push(`<text x="${v}" y="${w+.32}" font-size="0.24" text-anchor="middle" fill="#444">${J(r.area(x.living>0?x.living:x.floor))}</text>`)}let d=(b,v,w,x,k,$)=>{let F=(b+w)/2,z=(v+x)/2,I=$?`M ${b-.15} ${v} L ${b+.15} ${v} M ${w-.15} ${x} L ${w+.15} ${x}`:`M ${b} ${v-.15} L ${b} ${v+.15} M ${w} ${x-.15} L ${w} ${x+.15}`,P=$?`<text x="${F-.25}" y="${z}" font-size="0.26" text-anchor="middle" transform="rotate(-90 ${F-.25} ${z})">${J(k)}</text>`:`<text x="${F}" y="${z+.4}" font-size="0.26" text-anchor="middle">${J(k)}</text>`;return`<path d="M ${b} ${v} L ${w} ${x} ${I}" stroke="#222" stroke-width="0.015" fill="none"/>${P}`};h.push(d(s,c+.5,a,c+.5,r.length(a-s),!1)),h.push(d(s-.5,l,s-.5,c,r.length(c-l),!0)),h.push(`<path d="M ${a-1} ${l-.7} L ${a} ${l-.7}" stroke="#222" stroke-width="0.06"/><text x="${a-.5}" y="${l-.85}" font-size="0.22" text-anchor="middle">${J(r.length(1))}</text>`);let[f,_]=[a-s+2*u,c-l+2*u];return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${`${s-u} ${l-u} ${f} ${_}`}" style="width:${(f*10).toFixed(1)}mm" font-family="system-ui, sans-serif">${h.join("")}</svg>`}function _m(t,e){let n=t.floors.filter(l=>!l.layer&&l.rooms.length),r=[],o=[],i=[];for(let l of[...n].sort((c,u)=>c.elevation-u.elevation)){let c=qr(t,l);i.push(...c);let u=Wn(c);r.push(`<section class="page"><h1>${J(l.name)}</h1><div class="sub">${J(e.living)}: ${J(e.area(u.living))}</div>${k0(t,l,c,e)}</section>`),o.push(`<tr class="floor"><th colspan="4">${J(l.name)}</th></tr>`);for(let h of c){let p=l.rooms.find(d=>d.id===h.roomId);o.push(`<tr><td>${J(p.name)}</td><td>${J(e.area(h.floor))}</td><td>${h.low>.05?J(e.area(h.low)):""}</td><td><b>${J(e.area(h.living))}</b></td></tr>`)}o.push(`<tr class="sum"><td>${J(e.total)}</td><td>${J(e.area(u.floor))}</td><td>${u.low>.05?J(e.area(u.low)):""}</td><td><b>${J(e.area(u.living))}</b></td></tr>`)}let s=Wn(i),a=`<section class="page"><h1>${J(e.living)}</h1><table><thead><tr><th>${J(e.room)}</th><th>${J(e.floorArea)}</th><th>${J(e.low)}</th><th>${J(e.living)}</th></tr></thead><tbody>${o.join("")}<tr class="grand"><td>${J(e.total)}</td><td>${J(e.area(s.floor))}</td><td>${s.low>.05?J(e.area(s.low)):""}</td><td><b>${J(e.area(s.living))}</b></td></tr></tbody></table><p class="note">${J(e.note)}</p></section>`;return`<!doctype html><html><head><meta charset="utf-8"><title>${J(e.title)}</title><style>
    body { font-family: system-ui, sans-serif; color: #111; margin: 0; background: #fff; }
    .page { page-break-after: always; padding: 12mm; }
    .page:last-child { page-break-after: auto; }
    h1 { font-size: 18pt; margin: 0 0 2mm; }
    .sub { color: #555; margin-bottom: 4mm; }
    svg { display: block; max-width: 100%; max-height: 240mm; height: auto; }
    table { border-collapse: collapse; width: 100%; font-size: 11pt; }
    th, td { text-align: left; padding: 1.5mm 2mm; border-bottom: 0.2mm solid #ccc; }
    td:not(:first-child), th:not(:first-child) { text-align: right; }
    tr.floor th { background: #eee; }
    tr.sum td { border-bottom: 0.4mm solid #888; }
    tr.grand td { font-size: 12pt; border-top: 0.6mm solid #222; }
    .note { color: #666; font-size: 9pt; margin-top: 4mm; }
    @media print { .page { padding: 0; } }
  </style></head><body>${r.join("")}${a}<script>window.addEventListener("load", () => setTimeout(() => window.print(), 300));<\/script></body></html>`}var bm="nextfloor.tour_done",x0=[["Ctrl Z","keys_undo"],["Ctrl Shift Z \xB7 Ctrl Y","keys_redo"],["Ctrl D","keys_duplicate"],["Entf / Delete","keys_delete"],["\u2190 \u2191 \u2192 \u2193","keys_nudge"],["Shift + \u2190\u2191\u2192\u2193","keys_nudge_10"],["Alt + \u2190\u2191\u2192\u2193","keys_nudge_1"],["R \xB7 Shift R","keys_rotate"],["L","keys_lock"],["Enter","keys_close_shape"],["Esc","keys_escape"],["Shift","keys_straight"],["?","keys_sheet"]],vi=[["tour_1_title","tour_1"],["tour_2_title","tour_2"],["tour_3_title","tour_3"],["tour_4_title","tour_4"]];function ym(){try{return localStorage.getItem(bm)!=="1"}catch{return!1}}function wm(){try{localStorage.setItem(bm,"1")}catch{}}function vm(t,e){return m`<div class="nf-keys" role="dialog" aria-label=${t("keys_title")} @click=${n=>n.target===n.currentTarget&&e()}>
    <div class="nf-keys-card">
      <div class="nf-h3row"><h3>⌨ ${t("keys_title")}</h3><button class="nf-btn nf-field-btn" aria-label=${t("close")} @click=${e}>✕</button></div>
      <dl>
        ${x0.map(([n,r])=>m`<dt>${n.split(" \xB7 ").map((o,i)=>m`${i?" \xB7 ":""}<kbd>${o}</kbd>`)}</dt><dd>${t(r)}</dd>`)}
      </dl>
    </div>
  </div>`}function $0(t){return{rect:t("tool_rect"),free:t("tool_polygon"),rooms:t("area_rooms",{n:"\u2026"}).replace(/\s*\(…\)\s*$/,""),opening:t("tool_opening"),furniture:t("tool_furniture"),split:t("split_3d"),check:t("check_open")}}function km(t,e,n){if(e===null||e>=vi.length)return g;let[r,o]=vi[e],i=e===vi.length-1;return m`<div class="nf-tour" role="dialog" aria-label=${t("tour_title")}>
    <div class="nf-tour-step">${e+1} / ${vi.length}</div>
    <h3>${t(r)}</h3>
    <p>${t(o,$0(t))}</p>
    <div class="nf-actions">
      ${e>0?m`<button class="nf-btn" @click=${()=>n(e-1)}>‹ ${t("tour_back")}</button>`:g}
      <button class="nf-btn nf-primary" @click=${()=>n(i?null:e+1)}>${t(i?"tour_done":"tour_next")}</button>
      ${i?g:m`<button class="nf-link" @click=${()=>n(null)}>${t("tour_skip")}</button>`}
    </div>
  </div>`}var It="https://github.com/therealMRBK/NextFloor";var Yr=t=>`/api/nextfloor/mesh/${encodeURIComponent(t)}`,Gn=12*1024*1024;function xm(t,e){let n=new Map;for(let r of t)for(let o of r.items){if(!o.mesh)continue;let i=n.get(o.mesh)??[];n.set(o.mesh,[...i,`${Ve(o,ue(r.id,o.id),e)} \xB7 ${Ie(r,e)}`])}return[...n].map(([r,o])=>({id:r,items:o})).sort((r,o)=>r.items[0].localeCompare(o.items[0]))}function Un(t){return t<1024*1024?`${Math.max(1,Math.round(t/1024))} KB`:`${(t/(1024*1024)).toFixed(1)} MB`}function Ja(t){return t===201||t===200||t===204?null:t===401||t===403?"forbidden":t===413?"too_large":t===400?"not_glb":t===404?"bad_id":"other"}var S0=40,M0=(t=Gn)=>Math.floor(t*.8/S0),el=[{key:"light",triangles:3e4},{key:"normal",triangles:8e4},{key:"fine",triangles:15e4}];function $m(t){return Math.min(el.find(e=>e.key===t).triangles,M0())}var tl=class extends ie{static properties={hass:{attribute:!1},packs:{attribute:!1},_present:{state:!0},_draft:{state:!0},_busy:{state:!0},_message:{state:!0}};checked=new Set;run=0;constructor(){super(),this._present={},this._draft=null,this._busy=!1,this._message=null}t(e,n){return xe(this.hass,e,n)}get slots(){return xm(this.packs??[],this.hass?.language??"en")}willUpdate(){for(let e of this.slots)this.checked.has(e.id)||!this.hass?.fetchWithAuth||(this.checked.add(e.id),this.askPresence(e.id))}async askPresence(e){let n=await this.hass.fetchWithAuth(Yr(e),{method:"HEAD"}).catch(()=>null),r=n&&n.status!==405?n.ok:await this.hass.fetchWithAuth(Yr(e)).then(o=>o.ok,()=>!1);this._present={...this._present,[e]:r?"yes":"no"}}async choose(e,n){if(n){this._message=null,this._busy=!0;try{let r=await n.arrayBuffer(),i=await(await en()).inspectModel(r);this._draft={slot:e,fileName:n.name,data:r,info:i,turns:0,paint:i.paint,detail:"normal",colour:"#1d5bd6",result:null},await this.refresh()}catch(r){this._draft=null,this._message={ok:!1,text:this.readError(r)}}finally{this._busy=!1}}}readError(e){let r=`model_error_${e?.reason}`,o=this.t(r);return o===r?this.t("model_error_unreadable",{detail:String(e?.message??e)}):o}async refresh(){let e=this._draft;if(!e)return;let n=++this.run;this._busy=!0;try{let r=await en(),{glb:o,triangles:i}=await r.prepareModel(e.data,{turns:e.turns,paint:e.paint,maxTriangles:$m(e.detail)}),s=await r.previewModel(o,e.colour);n===this.run&&this._draft===e&&(this._draft={...e,result:{glb:o,triangles:i,picture:s}})}catch(r){n===this.run&&(this._message={ok:!1,text:this.readError(r)})}finally{n===this.run&&(this._busy=!1)}}change(e){this._draft&&(this._draft={...this._draft,...e},this.refresh())}turn(e){this._draft&&this.change({turns:(this._draft.turns+e+4)%4})}togglePaint(e,n){if(!this._draft)return;let r=this._draft.paint.filter(o=>o!==e);this.change({paint:n?[...r,e]:r})}async upload(){let e=this._draft;if(!(!e?.result||!this.hass?.fetchWithAuth)){if(e.result.glb.byteLength>Gn){this._message={ok:!1,text:this.t("model_error_too_large",{max:Un(Gn)})};return}this._busy=!0;try{let n=await this.hass.fetchWithAuth(Yr(e.slot.id),{method:"POST",body:e.result.glb}),r=Ja(n.status);if(r){this._message={ok:!1,text:this.t(`model_upload_${r}`,{max:Un(Gn)})};return}this._present={...this._present,[e.slot.id]:"yes"},this._message={ok:!0,text:this.t("model_uploaded",{id:e.slot.id,size:Un(e.result.glb.byteLength)})},this._draft=null}catch(n){this._message={ok:!1,text:this.t("model_upload_other",{detail:String(n?.message??n)})}}finally{this._busy=!1}}}async removeModel(e){if(!this.hass?.fetchWithAuth||!confirm(this.t("model_remove_confirm",{id:e.id})))return;let n=await this.hass.fetchWithAuth(Yr(e.id),{method:"DELETE"}),r=Ja(n.status);this._present={...this._present,[e.id]:r?this._present[e.id]:"no"},this._message=r?{ok:!1,text:this.t(`model_upload_${r}`,{max:Un(Gn)})}:{ok:!0,text:this.t("model_removed",{id:e.id})}}row(e){let n=this._present[e.id]??"unknown",r=n==="yes"?this.t("model_present"):n==="no"?this.t("model_missing"):"\u2026";return m`<div class="nf-model">
      <div>
        <b>${e.items[0]}</b>${e.items.length>1?m` <span class="nf-sub">+${e.items.length-1}</span>`:g}
        <span class="nf-sub">${e.id}.glb · <span class="nf-model-${n}">${r}</span></span>
      </div>
      <div class="nf-model-actions">
        <label class="nf-btn nf-primary">
          ${this.t(n==="yes"?"model_replace":"model_add")}
          <input type="file" accept=".glb,model/gltf-binary" hidden @change=${o=>this.picked(e,o)} />
        </label>
        ${n==="yes"?m`<button class="nf-btn nf-danger" @click=${()=>this.removeModel(e)}>${this.t("model_remove")}</button>`:g}
      </div>
    </div>`}picked(e,n){let r=n.target,o=r.files?.[0];r.value="",this.choose(e,o)}editor(e){let{info:n,result:r}=e,o=n.size.map(i=>i.toFixed(2)).join(" \xD7 ");return m`<section class="nf-model-edit">
      <h4>${e.slot.items[0]}</h4>
      <p class="nf-sub">${e.fileName} · ${this.t("model_info",{triangles:n.triangles.toLocaleString(this.hass?.language),size:o})}</p>
      <div class="nf-model-body">
        <div class="nf-model-picture">${r?m`<img src=${r.picture} alt="" />`:m`<span class="nf-sub">${this.t("loading")}</span>`}</div>
        <div class="nf-model-options">
          <div class="nf-field">
            <span>${this.t("model_front")}</span>
            <div class="nf-actions">
              <button class="nf-btn" @click=${()=>this.turn(-1)}>↺ 90°</button>
              <button class="nf-btn" @click=${()=>this.turn(1)}>↻ 90°</button>
            </div>
            <small class="nf-sub">${this.t("model_front_hint")}</small>
          </div>
          <div class="nf-field">
            <span>${this.t("model_paint")}</span>
            ${n.materials.map(i=>m`<label class="nf-check"><input type="checkbox" .checked=${e.paint.includes(i.name)} @change=${s=>this.togglePaint(i.name,s.target.checked)} /> ${i.name}</label>`)}
            <label class="nf-check"><input type="color" .value=${e.colour} @change=${i=>this.change({colour:i.target.value})} /> ${this.t("model_paint_preview")}</label>
          </div>
          <div class="nf-field">
            <span>${this.t("model_detail")}</span>
            <div class="nf-seg">${el.map(i=>m`<button aria-pressed=${e.detail===i.key} @click=${()=>this.change({detail:i.key})}>${this.t(`model_detail_${i.key}`)}</button>`)}</div>
            ${r?m`<small class="nf-sub">${this.t("model_result",{triangles:r.triangles.toLocaleString(this.hass?.language),size:Un(r.glb.byteLength)})}</small>`:g}
          </div>
        </div>
      </div>
      <div class="nf-actions">
        <button class="nf-btn nf-primary" ?disabled=${!r||this._busy} @click=${()=>this.upload()}>${this.t("model_upload")}</button>
        <button class="nf-btn" @click=${()=>this._draft=null}>${this.t("cancel")}</button>
      </div>
    </section>`}render(){let e=this.slots;return e.length===0||!(this.hass?.user?.is_admin??!1)?g:m`<section class="nf-ext-card">
      <h3>${this.t("models")}</h3>
      <p class="nf-sub">${this.t("models_hint")}</p>
      ${e.map(n=>this.row(n))}
      ${this._draft?this.editor(this._draft):g}
      ${this._busy&&!this._draft?m`<p class="nf-sub">${this.t("loading")}</p>`:g}
      ${this._message?m`<p class="nf-sub ${this._message.ok?"nf-notice":"nf-pack-error"}">${this._message.text}</p>`:g}
      <p class="nf-sub">${this.t("models_licence")}</p>
    </section>`}static styles=[Be,ot,ae`
      :host {
        display: block;
      }
      .nf-model {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 8px 12px;
        padding: 8px 0;
        border-top: 1px solid var(--nf-line);
      }
      .nf-model > div:first-child {
        display: grid;
        gap: 2px;
      }
      .nf-model-actions {
        display: flex;
        gap: 8px;
      }
      .nf-model-yes {
        color: #41c46b;
      }
      .nf-model-no {
        color: var(--nf-muted);
      }
      .nf-model-edit {
        margin-top: 10px;
        padding: 12px;
        border: 1px solid var(--nf-line);
        border-radius: 12px;
      }
      .nf-model-body {
        display: flex;
        flex-wrap: wrap;
        gap: 14px;
      }
      .nf-model-picture {
        display: grid;
        place-items: center;
        width: 220px;
        height: 220px;
        border-radius: 12px;
        background: var(--nf-chrome-solid);
      }
      .nf-model-picture img {
        width: 220px;
        height: 220px;
      }
      .nf-model-options {
        display: grid;
        flex: 1;
        min-width: 220px;
        gap: 10px;
        align-content: start;
      }
      .nf-field {
        display: grid;
        gap: 4px;
      }
    `]};customElements.get("nf-model-upload")||customElements.define("nf-model-upload",tl);var jn="therealMRBK/NextFloor-Plugins",Sm=`https://raw.githubusercontent.com/${jn}/main/index.json`,E0=t=>/^https:\/\/raw\.githubusercontent\.com\/[\w.-]+\/[\w.-]+\/[0-9a-f]{40}\/[\w./-]+\.m?js$/.test(t),Ae=(t,e)=>typeof t=="string"?t.trim().slice(0,e):"";function R0(t){let e=t?.plugins;if(!Array.isArray(e))return[];let n=new Set,r=[];for(let o of e){if(!o||typeof o!="object")continue;let i=Ae(o.id,64),s=Ae(o.url,300),a=Ae(o.sha256,64).toLowerCase(),l=Ae(o.name,60),c=Ae(o.version,40),u=Ae(o.homepage,200);!/^[\w.-]+$/.test(i)||n.has(i)||!l||!c||!E0(s)||!/^[0-9a-f]{64}$/.test(a)||(n.add(i),r.push({id:i,name:l,description:Ae(o.description,300),author:Ae(o.author,60),version:c,homepage:/^https:\/\//.test(u)?u:"",url:s,sha256:a}))}return r}async function Mm(t=(...e)=>fetch(...e)){let e=await t(Sm,{cache:"no-store"});if(!e.ok)throw new Error(`HTTP ${e.status}`);return R0(await e.json())}function Em(t,e){let n=(e??[]).find(r=>r.id===t.id);return n?n.sha256===t.sha256&&n.url===t.url?"installed":"update":"available"}function Rm(t,e){let n=t??[],r={url:e.url,enabled:!0,id:e.id,version:e.version,sha256:e.sha256},o=n.findIndex(i=>i.id===e.id);return o<0?[...n,r]:n.map((i,s)=>s===o?{...r,enabled:i.enabled}:i)}var A0=(t,e)=>t===`https://raw.githubusercontent.com/${jn}/main/packs/${e}.json`;function F0(t){let e=t?.packs;if(!Array.isArray(e))return[];let n=new Set,r=[];for(let o of e){if(!o||typeof o!="object")continue;let i=Ae(o.id,40),s=Ae(o.url,300),a=Ae(o.sha256,64).toLowerCase(),l=Ae(o.name,80);if(!/^[a-z0-9][a-z0-9_.-]{0,39}$/.test(i)||i.startsWith("nextfloor.")||n.has(i)||!l||!A0(s,i)||!/^[0-9a-f]{64}$/.test(a))continue;n.add(i);let c=(u,h)=>typeof u=="number"&&Number.isInteger(u)&&u>0?u:h;r.push({id:i,name:l,description:Ae(o.description,400),author:Ae(o.author,80),release:c(o.release,1),items:c(o.items,0),url:s,sha256:a})}return r.sort((o,i)=>o.name.localeCompare(i.name))}async function Am(t=(...e)=>fetch(...e)){let e=await t(Sm,{cache:"no-store"});if(!e.ok)throw new Error(`HTTP ${e.status}`);return F0(await e.json())}function Fm(t,e){let n=e.find(r=>r.id===t.id);return n?(n.release??1)>=t.release?"installed":"update":"available"}var z0=t=>[...new Uint8Array(t)].map(e=>e.toString(16).padStart(2,"0")).join("");async function zm(t,e=(...n)=>fetch(...n)){let n=await e(t.url,{cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status}`);let r=await n.arrayBuffer(),o=globalThis.crypto?.subtle;if(o&&z0(await o.digest("SHA-256",r))!==t.sha256)throw new Error("checksum mismatch: the file is not the one that was reviewed");return new TextDecoder().decode(r)}var P0="https://therealmrbk.github.io/NextFloor/builder/",nl=class extends ie{static properties={hass:{attribute:!1},packs:{attribute:!1},_msg:{state:!0},_busy:{state:!0},_store:{state:!0},_storeError:{state:!0}};constructor(){super(),this._msg=null,this._busy=!1,this._store=null,this._storeError=null}async loadStore(){this._store="loading",this._storeError=null;try{this._store=await Am()}catch(e){this._store=null,this._storeError=this.t("community_failed",{detail:e?.message??String(e)})}}async installStore(e){this._busy=!0,this._msg=null;try{let n=await tr(this.hass,await zm(e));this._msg={ok:!0,text:this.t("pack_imported",{name:n.name,publisher:n.publisher,n:n.items})},this.changed()}catch(n){this._msg={ok:!1,text:this.errorText(n)}}finally{this._busy=!1}}renderStore(){let e=this.packs??[],n=this._store;return m`<h4>${this.t("community_title")}</h4>
      <p class="nf-sub">
        ${this.t("community_intro")} <a href=${P0} target="_blank" rel="noopener">${this.t("community_builder")}</a> ·
        <a href=${`https://github.com/${jn}#community-furniture`} target="_blank" rel="noopener">${this.t("community_how")}</a>
      </p>
      ${n===null?m`<div><button class="nf-btn" @click=${()=>{this.loadStore()}}>${this.t("community_load")}</button></div>`:n==="loading"?m`<p class="nf-sub">${this.t("loading")}</p>`:n.length?m`<ul>
                ${n.map(r=>{let o=Fm(r,e);return m`<li>
                    <div class="nf-pack-main">
                      <strong>${r.name}</strong>
                      <span class="nf-detail">${r.id} · ${this.t("pack_by",{publisher:r.author,n:r.items})}</span>
                      ${r.description?m`<span class="nf-detail">${r.description}</span>`:g}
                    </div>
                    <button class="nf-btn ${o==="installed"?"":"nf-primary"}" ?disabled=${this._busy||o==="installed"} @click=${()=>{this.installStore(r)}}>
                      ${this.t(o==="installed"?"community_installed":o==="update"?"community_update":"community_install")}
                    </button>
                  </li>`})}
              </ul>`:m`<p class="nf-sub">${this.t("community_none")}</p>`}
      ${this._storeError?m`<p class="nf-error" role="alert">${this._storeError}</p>`:g}`}t(e,n){return xe(this.hass,e,n)}changed(){this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}))}errorText(e){let{code:n,message:r}=e??{},o=r??String(e),i=`pack_error_${n}`,s=this.t(i,{detail:o});return s===i?this.t("pack_error_other",{detail:o}):s}async importTexts(e){if(!this.hass||!e.length)return 0;this._busy=!0;let n=[],r=[];for(let{label:i,text:s}of e)try{let a=await tr(this.hass,s);n.push(this.t("pack_imported",{name:a.name,publisher:a.publisher,n:a.items}))}catch(a){r.push(i?`${i}: ${this.errorText(a)}`:this.errorText(a))}this._busy=!1,n.length&&this.changed();let o=e.length>1?[this.t("packs_imported_n",{n:n.length,total:e.length})]:[];return this._msg={ok:r.length===0,text:[...o,...n,...r].join(" \xB7 ")},n.length}async importFiles(e){let n=e.target,r=[...n.files??[]];n.value="",await this.importTexts(await Promise.all(r.map(async o=>({label:o.name,text:await o.text()}))))}async importPasted(){let e=this.renderRoot.querySelector("textarea"),n=e?.value.trim()??"";if(!e||!n)return void(this._msg={ok:!1,text:this.t("pack_paste_empty")});try{JSON.parse(n)}catch(r){return void(this._msg={ok:!1,text:this.t("pack_paste_not_json",{detail:r instanceof Error?r.message:String(r)})})}await this.importTexts([{label:"",text:n}])>0&&(e.value="")}async deletePack(e){if(!(!this.hass||!confirm(this.t("pack_remove_confirm",{name:Ie(e,this.hass.language??"de")}))))try{await Al(this.hass,e.id),this._msg=null,this.changed()}catch(n){this._msg={ok:!1,text:this.errorText(n)}}}render(){let e=(this.packs??[]).filter(o=>!o.builtin),n=(this.packs??[]).length-e.length,r=this.hass?.language??"de";return m`<section class="nf-packs">
      <h3>${this.t("packs_title")}</h3>
      <p class="nf-sub">${this.t("packs_intro",{n})} <a href="${It}/blob/main/docs/packs.md" target="_blank" rel="noopener">${this.t("packs_docs")}</a></p>
      ${e.length?m`<ul>
            ${e.map(o=>m`<li>
                <div class="nf-pack-main">
                  <strong>${Ie(o,r)}</strong>
                  <span class="nf-detail">${o.id} · ${this.t("pack_by",{publisher:o.publisher,n:o.items.length})}</span>
                  ${o.description?m`<span class="nf-detail">${o.description}</span>`:g}
                </div>
                <button class="nf-btn" ?disabled=${this._busy} @click=${()=>this.deletePack(o)}>${this.t("pack_remove")}</button>
              </li>`)}
          </ul>`:m`<p class="nf-sub">${this.t("packs_none")}</p>`}
      <label class="nf-btn nf-file">
        ${this.t("pack_import")}
        <input type="file" accept=".nfpack,.json,application/json" multiple hidden ?disabled=${this._busy} @change=${o=>this.importFiles(o)} />
      </label>
      <textarea rows="6" spellcheck="false" aria-label=${this.t("pack_paste")} placeholder=${'{ "format": "nfpack", "version": 1, "id": "myname.kitchen", \u2026 }'}></textarea>
      <div>
        <button class="nf-btn nf-primary" ?disabled=${this._busy} @click=${()=>this.importPasted()}>${this.t("pack_paste")}</button>
      </div>
      ${this._msg?m`<p class=${this._msg.ok?"nf-ok":"nf-error"} role=${this._msg.ok?"status":"alert"}>${this._msg.text}</p>`:g}
      ${this.hass?this.renderStore():g}
    </section>`}static styles=[Be,ot,ae`
      .nf-packs {
        display: grid;
        gap: 10px;
        padding: 16px;
        border: 1px solid var(--nf-line);
        border-radius: 12px;
      }
      h3 {
        margin: 0;
        font-size: 17px;
      }
      .nf-sub,
      .nf-ok,
      .nf-error {
        margin: 0;
        font-size: 13px;
      }
      .nf-sub {
        color: var(--nf-soft);
      }
      .nf-ok {
        color: var(--success-color, #2e7d32);
      }
      .nf-error {
        color: var(--error-color, #c62828);
        overflow-wrap: anywhere;
      }
      h4 {
        margin: 14px 0 0;
        font-size: 15px;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 8px;
      }
      li {
        display: flex;
        gap: 10px;
        align-items: center;
      }
      .nf-pack-main {
        flex: 1;
        min-width: 0;
        display: grid;
        gap: 2px;
      }
      .nf-detail {
        font-size: 12px;
        color: var(--nf-soft);
        overflow-wrap: anywhere;
      }
      .nf-file {
        justify-self: start;
        cursor: pointer;
      }
      textarea {
        box-sizing: border-box;
        width: 100%;
        min-height: 110px;
        resize: vertical;
        padding: 8px 10px;
        border: 1px solid var(--nf-line);
        border-radius: 8px;
        background: transparent;
        color: inherit;
        font: 12px/1.4 ui-monospace, SFMono-Regular, Menlo, monospace;
      }
    `]};customElements.get("nf-pack-manager")||customElements.define("nf-pack-manager",nl);var T0=new Map;var Pm=()=>[...T0.values()];var rl=class extends ie{static properties={hass:{attribute:!1},plugins:{attribute:!1},_error:{state:!0},_store:{state:!0},_storeError:{state:!0},_storeOpen:{state:!0}};stop=null;constructor(){super(),this._error="",this._storeError="",this._storeOpen=!1}connectedCallback(){super.connectedCallback(),this.stop=go(()=>this.requestUpdate())}disconnectedCallback(){super.disconnectedCallback(),this.stop?.()}t(e,n){return xe(this.hass,e,n)}emit(e){this.dispatchEvent(new CustomEvent("plugins-changed",{detail:e,bubbles:!0,composed:!0}))}add(e){let n=qi(e.value),r=this.plugins??[];if(!Yi(n))return void(this._error=this.t("plugins_url_invalid"));if(r.some(o=>o.url===n))return void(this._error=this.t("plugins_exists"));if(r.length>=20)return void(this._error=this.t("plugins_limit"));this._error="",e.value="",this.emit([...r,{url:n,enabled:!0}])}async toggleStore(){if(this._storeOpen=!this._storeOpen,!(!this._storeOpen||this._store)){this._storeError="";try{this._store=await Mm()}catch(e){this._storeError=this.t("store_failed",{error:e instanceof Error?e.message:String(e)})}}}install(e){let n=this.plugins??[],r=n.some(o=>o.id===e.id);if(!r&&n.length>=20)return void(this._error=this.t("plugins_limit"));if(!r&&n.some(o=>o.url===e.url))return void(this._error=this.t("plugins_exists"));window.confirm(this.t("store_confirm",{name:e.name,author:e.author||"?",url:e.url}))&&(this._error="",this.emit(Rm(n,e)))}renderStore(){return m`<div class="nf-store">
      <button class="nf-btn" @click=${()=>this.toggleStore()}>${this._storeOpen?this.t("store_close"):this.t("store_open")}</button>
      ${this._storeOpen?m`<p class="nf-sub">${this.t("store_intro")} <a href="https://github.com/${jn}" target="_blank" rel="noopener">${this.t("store_submit")}</a></p>
            ${this._storeError?m`<p class="nf-error" role="alert">${this._storeError}</p>`:g}
            ${!this._store&&!this._storeError?m`<p class="nf-sub">${this.t("plugins_loading")}</p>`:g}
            ${this._store&&!this._store.length?m`<p class="nf-sub">${this.t("store_empty")}</p>`:g}
            <ul>
              ${(this._store??[]).map(e=>{let n=Em(e,this.plugins);return m`<li>
                  <div class="nf-plugin-main">
                    <span><strong>${e.name}</strong> <span class="nf-detail">${e.version}${e.author?` \xB7 ${e.author}`:""}</span></span>
                    ${e.description?m`<span class="nf-detail">${e.description}</span>`:g}
                    ${e.homepage?m`<a class="nf-detail" href=${e.homepage} target="_blank" rel="noopener">${e.homepage}</a>`:g}
                  </div>
                  ${n==="installed"?m`<span class="nf-state ok">${this.t("store_installed")}</span>`:m`<button class="nf-btn" @click=${()=>this.install(e)}>${n==="update"?this.t("store_update"):this.t("store_install")}</button>`}
                </li>`})}
            </ul>`:g}
    </div>`}stateOf(e){let n=Pm().find(i=>i.url===e),r=Qi().filter(i=>i.source===e),o=[...n?.error?[n.error]:[],...r.flatMap(i=>i.errors)];if(n?.state==="error")return{label:this.t("plugins_error"),tone:"err",detail:o.join(" \xB7 ")};if(n?.state==="loading")return{label:this.t("plugins_loading"),tone:"warn",detail:""};if(n?.state==="loaded"&&!r.length)return{label:this.t("plugins_nothing_registered"),tone:"warn",detail:""};if(r.length){let i=r.map(s=>`${s.name}${s.version?` ${s.version}`:""}`).join(", ");return{label:this.t("plugins_loaded"),tone:o.length?"warn":"ok",detail:o.length?`${i} \xB7 ${o.join(" \xB7 ")}`:i}}return{label:this.t("plugins_reload_hint"),tone:"warn",detail:""}}render(){let e=this.plugins??[],n=Qi().filter(r=>!r.source);return m`<section class="nf-plugins">
      <h3>${this.t("plugins_title")}</h3>
      <p class="nf-sub">${this.t("plugins_intro")} <a href="${It}/blob/main/docs/plugins.md" target="_blank" rel="noopener">${this.t("plugins_docs")}</a></p>
      <p class="nf-warn">⚠️ ${this.t("plugins_warning")}</p>
      ${e.length?m`<ul>
            ${e.map((r,o)=>{let i=r.enabled?this.stateOf(r.url):{label:this.t("plugins_off"),tone:"warn",detail:""};return m`<li>
                <label class="nf-check" title=${this.t("plugins_reload_hint")}>
                  <input type="checkbox" .checked=${r.enabled}
                    @change=${s=>this.emit(e.map((a,l)=>l===o?{...a,enabled:s.target.checked}:a))} />
                </label>
                <div class="nf-plugin-main">
                  <code>${r.id?`${r.id}${r.version?` ${r.version}`:""}`:r.url}</code>
                  <span class="nf-state ${i.tone}">${i.label}</span>
                  ${i.detail?m`<span class="nf-detail">${i.detail}</span>`:g}
                </div>
                <button class="nf-btn" @click=${()=>this.emit(e.filter((s,a)=>a!==o))}>${this.t("plugins_remove")}</button>
              </li>`})}
          </ul>`:m`<p class="nf-sub">${this.t("plugins_none")}</p>`}
      ${n.length?m`<p class="nf-sub">${this.t("plugins_from_dashboard")}: ${n.map(r=>`${r.name}${r.version?` ${r.version}`:""}`).join(", ")}</p>`:g}
      ${this.renderStore()}
      <div class="nf-add">
        <input type="text" placeholder="/local/nextfloor/my-plugin.js" aria-label=${this.t("plugins_add")}
          @keydown=${r=>r.key==="Enter"&&this.add(r.target)} />
        <button class="nf-btn" @click=${r=>this.add(r.target.previousElementSibling)}>${this.t("plugins_add")}</button>
      </div>
      ${this._error?m`<p class="nf-error" role="alert">${this._error}</p>`:g}
    </section>`}static styles=[Be,ot,ae`
      .nf-plugins {
        display: grid;
        gap: 10px;
        padding: 16px;
        border: 1px solid var(--nf-line);
        border-radius: 12px;
      }
      h3 {
        margin: 0;
        font-size: 17px;
      }
      .nf-sub,
      .nf-warn,
      .nf-error {
        margin: 0;
        font-size: 13px;
      }
      .nf-sub {
        color: var(--nf-soft);
      }
      .nf-warn {
        color: var(--warning-color, #b26b00);
      }
      .nf-error {
        color: var(--error-color, #c62828);
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 8px;
      }
      li {
        display: flex;
        gap: 10px;
        align-items: center;
      }
      .nf-plugin-main {
        flex: 1;
        min-width: 0;
        display: grid;
        gap: 2px;
      }
      code {
        overflow-wrap: anywhere;
        font-size: 13px;
      }
      .nf-state {
        font-size: 12px;
      }
      .nf-state.ok {
        color: var(--success-color, #2e7d32);
      }
      .nf-state.warn {
        color: var(--nf-soft);
      }
      .nf-state.err {
        color: var(--error-color, #c62828);
      }
      .nf-detail {
        font-size: 12px;
        color: var(--nf-soft);
        overflow-wrap: anywhere;
      }
      .nf-store {
        display: grid;
        gap: 8px;
      }
      .nf-add {
        display: flex;
        gap: 8px;
      }
      .nf-add input {
        flex: 1;
        min-width: 0;
      }
    `]};customElements.get("nf-plugin-manager")||customElements.define("nf-plugin-manager",rl);var ol=class extends ie{static properties={hass:{attribute:!1},packs:{attribute:!1},plugins:{attribute:!1}};t(e,n){return xe(this.hass,e,n)}render(){return m`<div class="nf-ext">
      <header class="nf-ext-head">
        <h2>${this.t("ext_title")}</h2>
        <p class="nf-sub">${this.t("ext_intro")}</p>
        <div class="nf-ext-actions">
          <a class="nf-btn" href="${It}/issues/new/choose" target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
          <a class="nf-btn" href="${It}/discussions" target="_blank" rel="noopener">💡 ${this.t("help_idea")}</a>
          <a class="nf-btn" href="${It}#readme" target="_blank" rel="noopener">📖 ${this.t("manual")}</a>
        </div>
      </header>
      <nf-pack-manager .hass=${this.hass} .packs=${this.packs}></nf-pack-manager>
      <nf-model-upload .hass=${this.hass} .packs=${this.packs}></nf-model-upload>
      <nf-plugin-manager .hass=${this.hass} .plugins=${this.plugins}></nf-plugin-manager>
    </div>`}static styles=[Be,ot,ae`
      :host {
        display: block;
        overflow: auto;
      }
      .nf-ext {
        max-width: 920px;
        margin: 0 auto;
        padding: 20px 16px 40px;
        display: grid;
        gap: 16px;
      }
      .nf-ext-head {
        display: grid;
        gap: 8px;
        justify-items: start;
      }
      .nf-ext-head a {
        text-decoration: none;
      }
      .nf-ext-actions,
      .nf-ext-links {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        align-items: center;
      }
      .nf-ext-head h2 {
        margin: 0;
        font-size: 22px;
      }
      .nf-sub {
        color: var(--nf-soft);
        font-size: 13px;
      }
    `]};customElements.get("nf-extensions")||customElements.define("nf-extensions",ol);var Xr="handled",Tm=["select","rect","polygon","wall","opening","furniture","stairs","outdoor","hole","roof","energy"],Im=new Set(["vertex","room","device","opening","furniture","rotate","resize","outdoor","roofmove","roofcorner","roofvertex","outvertex","solarmove","solarturn","bgmove","bgscale","bgrotate"]),ki=10,Ge=t=>Math.round(t*1e3)/1e3,Dm={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]},il=class extends ie{static properties={hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},packs:{attribute:!1},_doc:{state:!0},_doc3d:{state:!0},_split:{state:!0},_splitRatio:{state:!0},_wall3d:{state:!0},_solid3d:{state:!0},_sidePinned:{state:!0},_studio:{state:!0},_check:{state:!0},_keys:{state:!0},_note:{state:!0},_dims:{state:!0},_tour:{state:!0},_sideOpen:{state:!0},_floorId:{state:!0},_energyNote:{state:!0},_ctx:{state:!0},_fixedHint:{state:!0},_openingPreset:{state:!0},_measureLen:{state:!0},_rectSize:{state:!0},_tool:{state:!0},_wallView:{state:!0},_draft:{state:!0},_cursor:{state:!0},_guides:{state:!0},_view:{state:!0},_size:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0},_arcEdit:{state:!0},_routeDraft:{state:!0}};doc3dTimer;tourChecked=!1;_pick=null;_pickTimer;fixedPan=!1;reframe3d=!1;pressTimer=0;pressStart=null;history=new fi(100);lib=new ni(()=>this.requestUpdate());side=new bi(()=>this.requestUpdate());sel=new _i(()=>this.requestUpdate());host=this.makeHost();backup=this.makeBackup();roof=this.makeRoof();bg=this.makeBackground();settingsActions={useRoofSections:()=>{this.roof.useSections(),this._tool="roof"}};drag=null;pointers=new Map;pinch=null;fitted=!1;resizeObserver;constructor(){super(),this.narrow=!1,this._floorId=null,this._arcEdit=null,this._routeDraft=null,this.roof.sectionId=null,this.roof.solarId=null,this.roof.picking=!1,this.roof.windowId=null,this._energyNote=null,this._openingPreset="door";let e=!1;try{e=localStorage.getItem("nextfloor.editor3d")==="1"}catch{}this._split=e,this._splitRatio=.55;try{let r=Number(localStorage.getItem("nextfloor.editorSplit"));r>=20&&r<=80&&(this._splitRatio=r/100)}catch{}this._wall3d="cut",this._solid3d=!1,this._doc3d=this._doc,this._sideOpen=!1;let n=!0;try{n=localStorage.getItem("nextfloor.sidePinned")!=="0"}catch{}this._sidePinned=n,this._studio=null,this._check=!1,this._keys=!1,this._note=null,this._dims=(()=>{try{return localStorage.getItem("nextfloor.plan_dims")==="1"}catch{return!1}})(),this._tour=null,this._measureLen=3,this._rectSize=[4,3],this._tool="select",this._wallView=null,this._draft=[],this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._size={w:800,h:600},this._canUndo=!1,this._canRedo=!1}t(e,n){return xe(this.hass,e,n)}measureState(){return{draft:this._draft,length:this._measureLen,rectSize:this._rectSize}}measureActions(){return{setLength:e=>this._measureLen=e,step:e=>this.measureStep(e),close:()=>this.closeDraft(),undo:()=>this._draft=this._draft.slice(0,-1),setRectSize:e=>this._rectSize=e,addRectangle:()=>this.rectBySize()}}arcActions(){return{edit:this._arcEdit,setEdit:e=>this._arcEdit=e,apply:e=>{if(!this.isAdmin||Math.abs(e.bulge)<.01)return;let n=this._doc,r=structuredClone(n),o=r.floors.find(c=>c.id===this._floorId);if(!o)return;let[i,s,a]=e.key.split(":");if(!(i==="wall"?dp(o,s,e.bulge).length>0:up(o,s,Number(a),e.bulge))){this._arcEdit={...e,error:this.t("arc_too_wide")};return}this._arcEdit=null,this.setDoc(r,n)}}}freeWallActions(){return{update:e=>this.updateFreeWall(e),remove:()=>this.deleteFreeWall(),arc:this.arcActions(),lockButton:this.fixButton("wall",this.sel.wall??"")}}outdoorActions(){return{update:e=>this.updateOutdoor(e),setRectangle:(e,n)=>{let r=this.outdoorArea;r&&this.updateOutdoor({points:bh(r,e,n)})},duplicate:()=>this.duplicateOutdoor(),remove:()=>this.deleteOutdoor(),removeCorner:e=>{let n=this.sel.outdoor;n&&this.change((r,o)=>{ah(o.outdoor.find(i=>i.id===n),e)})},lockButton:this.fixButton("outdoor",this.sel.outdoor??"")}}libraryActions(){return{add:e=>this.addFurniture(e),studio:()=>this.openStudio(null),packs:this.packs??[]}}openStudio(e){let n=e?U(e):void 0,r=n?.recipe&&e?.startsWith(`pack:${rn}:`)?n.id:null;this._studio={recipe:r&&n?.recipe?{...n.recipe}:Xa("cabinet",""),itemId:r,busy:!1,error:null},this._tool="furniture"}async saveStudio(){let e=this._studio;if(!e||!this.hass||!this.isAdmin)return;let n=this.hass.language??"en",r=rr().find(u=>u.id===rn),o=r?.items??[],i={...e.recipe,name:e.recipe.name||this.t(`studio_kind_${e.recipe.kind}`)},s=e.itemId??tm(i.name,o.map(u=>u.id)),a=wi(i,s,n),l={id:rn,name:r?.name??this.t("studio_pack_name"),publisher:r?.publisher??this.t("studio_pack_publisher"),release:(r?.release??0)+1,items:e.itemId?o.map(u=>u.id===s?a:u):[...o,a]};this._studio={...e,busy:!0,error:null};try{let{builtin:u,imported_at:h,...p}=l;await tr(this.hass,JSON.stringify({format:"nfpack",version:1,...p}))}catch(u){this._studio={...e,busy:!1,error:this.t("studio_error",{detail:u.message??String(u)})};return}Hi([...rr().filter(u=>u.id!==rn),l]),this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})),this._studio=null;let c=ue(rn,s);if(e.itemId){let[u,h,p]=a.size;this.change(d=>d.floors.forEach(f=>f.furniture.forEach(_=>_.type===c&&Object.assign(_,{w:u,d:h,h:p}))))}else this.addFurniture(c)}printPlan(){let e=o=>this.t(o),n=_m(this._doc,{title:this.t("print_title"),room:e("print_room"),floorArea:e("print_floor_area"),living:e("print_living"),low:e("print_low"),total:e("print_total"),note:e("living_area_hint"),area:o=>Ee(this.hass,o),length:o=>he(this.hass,o)}),r=window.open("","_blank");if(!r)return void alert(this.t("print_blocked"));r.document.open(),r.document.write(n),r.document.close()}fixFinding(e){e.floorId!==this._floorId&&this.floorActions().openFloor(e.floorId);let n=o=>o.floors.find(i=>i.id===e.floorId),r=e.fix;switch(r.do){case"show_floor":return;case"show_room":return this.selectItem("room",r.roomId);case"show_opening":return this.selectItem("opening",r.openingId);case"show_furniture":return this.selectItem("furniture",r.furnitureId);case"set_area":return this.change(o=>{let i=n(o)?.rooms.find(s=>s.id===r.roomId);i&&Object.assign(i,Ma(i,r.areaId,this.hass?.areas??{}))});case"add_area_rooms":{let o=n(this._doc);o&&this.addAreaRooms(o);return}case"place_devices":return this.change(o=>{let i=n(o),s=i?.rooms.find(a=>a.id===r.roomId);i&&s&&ia(o,i,s,r.entityIds)});case"remove_placements":return this.change(o=>{let i=n(o);i&&(i.placements=i.placements.filter(s=>!r.entityIds.includes(s.entity_id)))})}}setDims(e){this._dims=e;try{localStorage.setItem("nextfloor.plan_dims",e?"1":"0")}catch{}}addNote(e){if(!this.isAdmin||!this.floor)return;let n=D("note");this.change((r,o)=>o.notes=[...o.notes??[],{id:n,x:Math.round(e[0]*100)/100,z:Math.round(e[1]*100)/100,text:""}]),this._note=n,this._sideOpen=!0}studioButton(){let e=this.furnitureItem?.type;return!e||!ut(e)||!U(e)?.recipe||!e.startsWith(`pack:${rn}:`)||!this.isAdmin?g:m`<button class="nf-btn nf-lib-studio" @click=${()=>this.openStudio(e)}>🛠️ ${this.t("studio_open")}</button>`}deviceActions(){return{update:e=>this.updateDevice(e),centre:()=>this.centreDevice(),remove:()=>{this.removeDevice(this.sel.device??""),this.sel.device=null},asFurniture:(e,n)=>this.deviceToFurniture(e,n),packs:this.packs??[],lockButton:this.fixButton("device",this.sel.device??"")}}deviceListActions(){return{select:e=>this.selectItem("device",e),place:e=>this.placeDevices(e),remove:e=>this.removeDevice(e),patchRoom:e=>this.updateRoom(e),spreadLights:e=>this.spreadCeilingLights(e),confirm:e=>confirm(e)}}furnitureToFloor(e){let[n,r]=[this._floorId,this.sel.furniture];if(!n||!r||!this.isAdmin)return;let o=structuredClone(this._doc);Vf(o,n,r,e)&&(this.setDoc(o),this._floorId=e,this.selectItem("furniture",r))}furnitureActions(){return{update:e=>this.updateFurniture(e),rotate:e=>this.rotateFurniture(e),duplicate:()=>this.duplicateFurniture(),remove:()=>this.deleteFurniture(),toDevice:e=>this.furnitureToDevice(e),toSpot:e=>this.vehicleToSpot(e),toFloor:e=>this.furnitureToFloor(e),packs:this.packs??[],lockButton:this.fixButton("furniture",this.sel.furniture??"")}}openingActions(){return{update:e=>this.updateOpening(e),setPreset:(e,n)=>this.setOpeningPreset(e,n),remove:()=>this.deleteOpening(),isExterior:e=>this.openingIsExterior(e),isBelowGround:e=>e.type==="window"&&this.openingIsExterior(e)&&(this.floor?.elevation??0)+e.sill<-.22,lockButton:this.fixButton("opening",this.sel.opening??"")}}makeBackground(){let e=this;return new Uo({host:this.host,refresh:()=>e.requestUpdate(),api:{fetchImage:ro,storeImage:ln},readPicture:jo,useSelectTool:()=>e._tool="select",currentTool:()=>e._tool})}makeRoof(){let e=this;return new pi({host:this.host,floorId:()=>e._floorId,setFloorId:n=>e._floorId=n,confirm:n=>confirm(n),refresh:()=>e.requestUpdate()})}redrawQueued=!1;redrawSoon=()=>{this.redrawQueued||(this.redrawQueued=!0,setTimeout(()=>{this.redrawQueued=!1,this.requestUpdate()},30))};canvasContext(){return{host:this.host,toScreen:e=>this.toScreen(e),toWorld:(e,n)=>this.toWorld(e,n),scale:this._view.scale,floorId:this._floorId,redraw:this.redrawSoon}}roofDeps(){return{host:this.host,roof:this.roof,floorId:this._floorId,setFloorId:e=>this._floorId=e,toggleLockPlan:()=>this.toggleLockPlan()}}makeBackup(){let e=this;return new Co({get hass(){return e.hass},get doc(){return e._doc},t:(n,r)=>e.t(n,r),adopt:n=>{e.setDoc(n),e._floorId=n.floors[0]?.id??null,e.selectItem("room",null),e.fit()},say:n=>e.side.notice=n,refresh:()=>e.requestUpdate(),packsChanged:()=>e.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}))})}makeHost(){let e=this;return{get hass(){return e.hass},get doc(){return e._doc},get floor(){return e.floor},get admin(){return e.isAdmin},t:(n,r)=>e.t(n,r),change:n=>e.change(n),replace:n=>e.setDoc(n),pickPoint:n=>e.pickPoint(n)}}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.resizeObserver?.disconnect()}willUpdate(e){e.has("packs")&&Hi(this.packs??[]),e.has("_doc")&&this._split&&this.queue3d(),e.has("_split")&&this._split&&(this._doc3d=this._doc),e.has("_tool")&&this.houseTool&&!this._split&&!this.narrow&&(this._split=!0),e.has("_tool")&&(this.houseTool||e.get("_tool")==="roof"||e.get("_tool")==="energy")&&(this.reframe3d=!0),e.has("building")&&this.building!==this._doc&&(!this.tourChecked&&this.building&&(this.tourChecked=!0,!this.building.floors.some(n=>n.rooms.length)&&ym()&&(this._tour=0)),this._doc=this.building,this._doc3d=this.building,this._doc.floors.some(n=>n.id===this._floorId)||(this._floorId=this._doc.floors[0]?.id??null),this.floor?.rooms.some(n=>n.id===this.sel.room)||(this.sel.room=null))}firstUpdated(){let e=this.renderRoot.querySelector(".nf-canvas-wrap");this.resizeObserver=new ResizeObserver(()=>{this._size={w:e.clientWidth,h:e.clientHeight},!this.fitted&&this._size.w>0&&(this.fitted=!0,this.fit())}),this.resizeObserver.observe(e)}queue3d(){clearTimeout(this.doc3dTimer),this.doc3dTimer=setTimeout(()=>this._doc3d=this._doc,150)}onSplitDown(e){let n=e.currentTarget.parentElement,r=e.currentTarget;r.setPointerCapture(e.pointerId);let o=n.getBoundingClientRect(),i=a=>{this._splitRatio=Math.min(.8,Math.max(.2,(a.clientX-o.left)/o.width))},s=()=>{r.removeEventListener("pointermove",i),r.removeEventListener("pointerup",s),r.removeEventListener("pointercancel",s);try{localStorage.setItem("nextfloor.editorSplit",String(Math.round(this._splitRatio*100)))}catch{}};r.addEventListener("pointermove",i),r.addEventListener("pointerup",s),r.addEventListener("pointercancel",s),e.preventDefault()}toggleSplit(){this._split=!this._split;try{localStorage.setItem("nextfloor.editor3d",this._split?"1":"0")}catch{}}onFurnitureMoved3d(e){let{id:n,x:r,z:o}=e.detail,i=this._doc.settings.wall_interior;this.change(s=>{for(let a of s.floors){let l=a.furniture.find(p=>p.id===n);if(!l)continue;let[c,u]=ds(a,l.x,l.z,r,o);Object.assign(l,{x:c,z:u});let h=ar(a,l,i);h&&Object.assign(l,h)}})}onDeviceMoved3d(e){let{id:n,x:r,z:o}=e.detail;this.change(i=>{for(let s of i.floors){let a=s.placements.find(u=>u.entity_id===n);if(!a)continue;let[l,c]=ds(s,a.x,a.z,r,o);Object.assign(a,{x:l,z:c})}})}render3dBar(){if(!this.isAdmin)return g;let e=this.furnitureItem,n=this.device;if(e){let r=po(e),o=(i,s,a=.05)=>m`<label class="nf-3d-size" title=${this.t(`size_${i}`)}
        >${s}
        <input
          type="number"
          inputmode="decimal"
          step="0.05"
          min=${a}
          .value=${String(Math.round(e[i]*100)/100)}
          @change=${l=>{let c=parseFloat(l.target.value.replace(",","."));Number.isFinite(c)&&c>=a&&this.updateFurniture({[i]:Math.round(c*1e3)/1e3})}}
        />
      </label>`;return m`<div class="nf-3d-bar">
        <span>${Ne(this.hass,e.type)}</span>
        ${o("w",this.t("size_short_w"))} ${o("d",this.t("size_short_d"))} ${o("h",this.t("size_short_h"))}
        ${r?m`<label class="nf-3d-size" title=${this.t("mount_height")}
              >↕
              <input
                type="number"
                inputmode="decimal"
                step="0.05"
                min="0"
                .value=${String(Math.round((e.mount_y??un(this.floor,e))*100)/100)}
                @change=${i=>{let s=parseFloat(i.target.value.replace(",","."));Number.isFinite(s)&&s>=0&&this.updateFurniture({mount_y:Math.round(s*1e3)/1e3})}}
              />
            </label>`:g}
        <button class="nf-chip" @click=${()=>this.rotateFurniture(-45)}>↺ 45°</button>
        <button class="nf-chip" @click=${()=>this.rotateFurniture(45)}>↻ 45°</button>
        ${this.fixButton("furniture",e.id)}
        <button class="nf-chip nf-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>`}if(n){let r=Z(n.entity_id),o=r==="light",i=r?oo(r,this.floor?et(this.floor,n.x,n.z):2.5,o?n.mount??"ceiling":null):1;return m`<div class="nf-3d-bar">
        <span>${N(this.hass,n.entity_id)}</span>
        ${o?m`<select class="nf-3d-select" title=${this.t("lamp_mount")} @change=${s=>this.updateDevice({mount:s.target.value,y:null})}>
              ${["ceiling","floor","table","wall"].map(s=>m`<option value=${s} ?selected=${s===(n.mount??"ceiling")}>${this.t(`lamp_${s}`)}</option>`)}
            </select>`:g}
        <label class="nf-3d-size" title=${this.t("marker_height")}
          >${this.t("size_short_h")}
          <input
            type="number"
            inputmode="decimal"
            step="0.05"
            min="0"
            .value=${String(Math.round((n.y??i)*100)/100)}
            @change=${s=>{let a=parseFloat(s.target.value.replace(",","."));Number.isFinite(a)&&a>=0&&this.updateDevice({y:Math.round(a*1e3)/1e3})}}
          />
        </label>
        <button class="nf-chip" @click=${()=>this.updateDevice({rotation:(((n.rotation??0)-45)%360+360)%360})}>↺ 45°</button>
        <button class="nf-chip" @click=${()=>this.updateDevice({rotation:((n.rotation??0)+45)%360%360})}>↻ 45°</button>
        ${this.fixButton("device",n.entity_id)}
        <button class="nf-chip nf-danger-chip" @click=${()=>this.deleteItem("device",n.entity_id)}>${this.t("delete")}</button>
      </div>`}return g}grab3d=null;surfaceGrabber={start:e=>this.grab3dStart(e),move:e=>this.grab3dMove(e),end:()=>{let e=this.grab3d;this.grab3d=null,e?.moved&&this.pushHistory(e.base)}};grab3dStart(e){let n=this._doc,r=te(n),o=null,i=(a,l,c,u,h=!1)=>{if(!c||h)return;let p=Fo(c,e.o,e.d);!p||!Fs(c,u,p.u,p.s)||o&&o.t<=p.t||(o={id:a,win:l,t:p.t,du:p.u-u.u,ds:p.s-u.v})};if(this._tool==="energy")for(let a of n.settings.roof.solar??[])i(a.id,!1,ke(n,a,r),a,!!a.locked);if(this._tool==="roof")for(let a of n.settings.roof.windows??[])i(a.id,!0,r.find(l=>l.key===a.face)??null,Et(a),!!a.locked);if(!o)return!1;let s=o;return this.grab3d={id:s.id,win:s.win,du:s.du,ds:s.ds,base:n,moved:!1},s.win?this.roof.windowId=s.id:this.roof.selectField(s.id),!0}grab3dMove(e){let n=this.grab3d;if(!n)return;let r=n.base,o=n.win?r.settings.roof.windows?.find(d=>d.id===n.id):void 0,i=n.win?o?Et(o):void 0:r.settings.roof.solar?.find(d=>d.id===n.id);if(!i)return;let s=ke(r,i),a=s?.unbounded?[s]:n.win?te(r):[...te(r),...He(r)],l=null;for(let d of a){let f=Fo(d,e.o,e.d);f&&As(d,f.u,f.s)&&(!l||f.t<l.t)&&(l={face:d,...f})}if(!l)return;let c=l.face,u=.05,h=d=>Ge(Math.round(d/u)*u),p=ft(c,{...i,face:c.key,u:h(l.u-n.du),v:h(l.s-n.ds),tilt:c.flat?i.tilt??15:i.tilt});n.moved=!0,this.change(d=>{if(n.win){let _=d.settings.roof.windows?.find(y=>y.id===n.id);_&&Object.assign(_,{face:c.key,...p});return}let f=d.settings.roof.solar?.find(_=>_.id===n.id);f&&Object.assign(f,{face:c.key,...p},c.flat&&f.tilt==null?{tilt:15}:{})},n.base,!1)}get houseTool(){return this._tool==="roof"||this._tool==="energy"}render3d(){return m`<div class="nf-editor-3d">
      ${this.houseTool?g:m`<div class="nf-seg nf-3d-walls">
            <button aria-pressed=${this._wall3d==="auto"} @click=${()=>this._wall3d="auto"}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wall3d==="cut"} @click=${()=>this._wall3d="cut"}>${this.t("walls_cut")}</button>
            <button aria-pressed=${this._wall3d==="slope"} title=${this.t("walls_slope_hint")} @click=${()=>this._wall3d="slope"}>${this.t("walls_slope")}</button>
            <button aria-pressed=${this._solid3d} title=${this.t("walls_solid_hint")} @click=${()=>this._solid3d=!this._solid3d}>${this.t("walls_solid")}</button>
          </div>`}
      ${this.render3dBar()}
      <nf-view3d
        .hass=${this.hass}
        .building=${this._doc3d}
        .floorId=${this.houseTool?null:this._floorId}
        .roomId=${null}
        .wallMode=${this.houseTool?"auto":this._wall3d}
        .solidWalls=${!this.houseTool&&this._solid3d}
        .explode=${!1}
        .keepRoof=${this._tool==="roof"||this._tool==="energy"}
        .markerMode=${"important"}
        .heatMode=${"none"}
        .theme=${"neon"}
        .packs=${this.packs}
        .showEnergy=${!1}
        .holograms=${this._tool==="energy"?!0:null}
        .flows=${!1}
        ?furnish=${this.isAdmin}
        .surfaceGrab=${this.isAdmin&&this.houseTool?this.surfaceGrabber:null}
        .furnishTypes=${this._tool==="energy"?De:this._tool==="roof"?[]:null}
        .selectedFurniture=${this.sel.furniture}
        .selectedDevice=${this.sel.device}
        .quality=${"auto"}
        .floorThumbs=${!1}
        .roomLabels=${!0}
        .floorStack=${this.houseTool?"stacked":"single"}
        .panelOpen=${!1}
        .alerts=${!1}
        .scenes=${!1}
        @furniture-select=${e=>{e.detail.id?this.selectFrom3d("furniture",e.detail.id):this.sel.furniture&&this.selectFrom3d("furniture",null)}}
        @furniture-move=${this.onFurnitureMoved3d}
        @device-select=${e=>{e.detail.id?this.selectFrom3d("device",e.detail.id):this.sel.device&&this.selectFrom3d("device",null)}}
        @device-move=${this.onDeviceMoved3d}
        @floor-tap=${e=>{e.detail.floorId&&(this._floorId=e.detail.floorId),this._sideOpen=!1}}
        @room-tap=${e=>{e.detail.floorId&&(this._floorId=e.detail.floorId),e.detail.roomId?this.selectFrom3d("room",e.detail.roomId):this._sideOpen=!1}}
      ></nf-view3d>
    </div>`}updated(){for(let n of this.renderRoot.querySelectorAll("select option[selected]"))n.selected||(n.selected=!0);this.reframe3d&&(this.reframe3d=!1,setTimeout(()=>this.renderRoot.querySelector("nf-view3d")?.resetView(),250));let e=this.floor?.background;if(e&&this.bg.ensureLoaded(e.image_id),this.furnitureItem?.pictures)for(let n of this.storedPictures())this.bg.ensureLoaded(n)}get floor(){return this._doc?.floors.find(e=>e.id===this._floorId)}get room(){return this.floor?.rooms.find(e=>e.id===this.sel.room)}get isAdmin(){return this.hass?.user?.is_admin??!0}setDoc(e,n=this._doc){n&&this.history.record(n),this._doc=e,this.syncHistoryButtons(),this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}change(e,n=this._doc,r=!0){let o=structuredClone(n),i=o.floors.find(s=>s.id===this._floorId);!i&&this._floorId||(e(o,i),this.setDoc(o,r?n:null))}syncHistoryButtons(){this._canUndo=this.history.canUndo,this._canRedo=this.history.canRedo}undo(){let e=this.history.undo(this._doc);e&&this.restore(e)}redo(){let e=this.history.redo(this._doc);e&&this.restore(e)}restore(e){this._doc=e,e.floors.some(n=>n.id===this._floorId)||(this._floorId=e.floors[0]?.id??null),this.floor?.rooms.some(n=>n.id===this.sel.room)||(this.sel.room=null),this.sel.corner=null,this.syncHistoryButtons(),this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}toScreen(e){let{scale:n,ox:r,oy:o}=this._view;return[e[0]*n+r,e[1]*n+o]}pickPoint(e){this._pick?.(null),this._pick=e,clearTimeout(this._pickTimer),this._pickTimer=window.setTimeout(()=>this.cancelPick(),6e4),this.requestUpdate()}cancelPick(){clearTimeout(this._pickTimer),this._pick&&(this._pick=null,this.requestUpdate())}toWorld(e,n){let{scale:r,ox:o,oy:i}=this._view;return[(e-o)/r,(n-i)/r]}localPoint(e){let n=this.renderRoot.querySelector("svg").getBoundingClientRect();return[e.clientX-n.left,e.clientY-n.top]}fit(){let e=this.floor?.rooms.flatMap(a=>a.points)??[],n=e.length?ce(e):{x0:0,z0:0,x1:10,z1:8},r=1.5,o=n.x1-n.x0+2*r,i=n.z1-n.z0+2*r,s=Math.max(8,Math.min(400,Math.min(this._size.w/o,this._size.h/i)));this._view={scale:s,ox:this._size.w/2-(n.x0+n.x1)/2*s,oy:this._size.h/2-(n.z0+n.z1)/2*s}}showPoint(e,n){let r=Math.max(this._view.scale,70);this._view={scale:r,ox:this._size.w/2-e*r,oy:this._size.h/2-n*r}}zoomAt(e,n,r){let{scale:o,ox:i,oy:s}=this._view,a=Math.max(8,Math.min(600,o*e)),l=a/o;this._view={scale:a,ox:n-(n-i)*l,oy:r-(r-s)*l}}snap(e,n,r=!1){if(this._guides={},r)return e;let o=gp(e,{rooms:this.floor?.rooms??[],grid:this._doc.settings.grid,reach:ki/this._view.scale,skip:n});return this._guides=o.guides,o.point}onPointerDown(e){if(this._pick){let[r,o]=this.localPoint(e),i=this._pick;this.cancelPick(),i(this.toWorld(r,o));return}this._ctx=null;let n=e.target?.closest?.("[data-note]")?.getAttribute("data-note");if(n&&this._tool==="select"){this._note=n,this._sideOpen=!0;return}if(this._note&&(this._note=null),this._fixedHint=!1,this.fixedPan=!1,this.pointerDown(e),this.pointers.size!==1){clearTimeout(this.pressTimer);return}if(this.guardFixed(this.localPoint(e)),clearTimeout(this.pressTimer),this.pressStart=null,e.pointerType==="touch"&&(this._tool==="select"||this._tool==="furniture")){let r=this.localPoint(e),o=e.target;this.pressStart=r,this.pressTimer=window.setTimeout(()=>{let i=this.drag;i&&"moved"in i&&i.moved||(this.drag=null,this.openContext(o,r))},550)}}guardFixed(e){let n=this.drag;if(!n)return;let r=null;n.kind==="vertex"||n.kind==="room"?r=["room",n.roomId]:n.kind==="device"||n.kind==="aim"?r=["device",n.entityId]:n.kind==="opening"?r=["opening",n.id]:n.kind==="furniture"||n.kind==="rotate"||n.kind==="resize"?r=["furniture",n.id]:n.kind==="wallmove"?r=["wall",n.id]:n.kind==="outdoor"&&(r=["outdoor",n.id]),!(!r||!this.isFixedItem(...r))&&("moved"in n&&n.moved&&"base"in n&&this.restoreLive(n.base),this.drag={kind:"pan",last:e},this.fixedPan=!0)}pointerDown(e){e.currentTarget.setPointerCapture(e.pointerId);let n=this.localPoint(e);if(this.pointers.set(e.pointerId,n),this.pointers.size===2){let i=this.drag;i&&Im.has(i.kind)&&"moved"in i&&i.moved&&"base"in i&&this.restoreLive(i.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(e.button===1||e.button===2||!this.floor){this.drag={kind:"pan",last:n};return}let r={local:n,world:this.toWorld(...n),target:e.target,fine:e.altKey},o=this.pressRoute(r)??this.pressBackground(r)??this.pressWallTool(r)??this.pressRoofTools(r)??this.pressDrawingTool(r)??this.pressItem(r)??this.pressRoom(r);o!==Xr&&(this.drag=o)}pan(e){return{kind:"pan",last:e.local}}moves(e,n){return this.isAdmin?n:this.pan(e)}pressBackground(e){let{world:n,target:r}=e,o=this.floor?.background;if(this.bg.level&&this.isAdmin&&o)return this.bg.tapLevel(n),Xr;if(this.bg.handlesShown&&o&&r.closest("[data-bg-rotate]")){let s=Pn(o,this.bg.picture(o.image_id)?.aspect??1);return{kind:"bgrotate",base:this._doc,moved:!1,start:Math.atan2(n[1]-s[1],n[0]-s[0]),rot:o.rotation??0}}if(this.bg.ruler&&this.bg.ruler.length<2&&this.isAdmin&&o)return this.bg.tapRuler(n),Xr;let i=!!r.closest("[data-bg-handle]")||!!r.closest("[data-bg]");if(o&&this.bg.handlesShown&&!this.bg.edit&&i)return this.pictureGesture(e,o);if(this.bg.edit&&this.isAdmin&&o){if(i)return this.pictureGesture(e,o);this.bg.edit=!1}}pictureGesture(e,n){return e.target.closest("[data-bg-handle]")?{kind:"bgscale",base:this._doc,moved:!1}:{kind:"bgmove",start:e.world,bx:n.x,bz:n.z,base:this._doc,moved:!1}}pressWallTool(e){if(this._tool!=="wall")return;let n=this.snap(e.world,void 0,e.fine);return{kind:"freewall",start:n,end:n}}pressRoofTools(e){if(this._tool!=="roof"&&this._tool!=="energy")return;let{local:n,world:r,target:o}=e,i=(b,v)=>o.closest(b)?.getAttribute(v)??null,s=this._tool==="energy",a=s?i("[data-energy-device]","data-energy-device"):null;if(a)return this.pressEnergyDevice(e,a);let l=s?i("[data-solar-turn]","data-solar-turn"):null;if(l&&this.isAdmin)return{kind:"solarturn",id:l,base:this._doc,moved:!1};let c=s?i("[data-solar]","data-solar"):null;if(c)return this.pressSolarField(e,c);let u=this._tool==="roof"?i("[data-roofwin]","data-roofwin"):null;if(u)return this.pressRoofWindow(e,u);this._tool==="roof"&&(this.roof.windowId=null);let h=s?i(".nf-energy-item","data-furniture"):null;if(h)return this.pressEnergyDevice(e,h);if(s)return this.selectItem("furniture",null),this.roof.solarId=null,this.pan(e);let p=i("[data-plus]","data-plus");if(p?.startsWith("roof:")&&this.isAdmin)return this.splitRoofEdgeGesture(...p.split(":").slice(1));let d=i("[data-roof-vertex]","data-roof-vertex"),f=i("[data-roof-corner]","data-roof-corner"),_=i("[data-roof]","data-roof");if(d&&this.isAdmin){let[b,v]=d.split(":");return{kind:"roofvertex",id:b,index:Number(v),base:this._doc,moved:!1}}if(f&&this.isAdmin){let[b,v,w]=f.split(":");return{kind:"roofcorner",id:b,corner:[v==="1"?1:0,w==="1"?1:0],base:this._doc,moved:!1}}if(_){let b=this.roof.isFixed(this._doc.settings.roof.sections?.find(v=>v.id===_));return b&&this.roof.sectionId===_&&(this._fixedHint=!0),this.roof.sectionId=_,this.isAdmin&&!b?{kind:"roofmove",id:_,start:r,startScreen:n,base:this._doc,moved:!1}:this.pan(e)}if(!this.isAdmin)return this.pan(e);this.roof.sectionId=null;let y=this.snap(r,void 0,e.fine);return{kind:"rect",start:y,end:y,roof:!0}}pressEnergyDevice(e,n){return this.roof.solarId=null,this.selectItem("furniture",n),this.moves(e,{kind:"furniture",id:n,start:e.world,startScreen:e.local,base:this._doc,moved:!1})}pressSolarField(e,n){let{local:r,world:o,target:i}=e,s=i.closest("[data-cell]")?.getAttribute("data-cell");if(this.roof.picking&&n===this.roof.solarId&&s&&this.isAdmin)return this.roof.toggleCell(s),this.pan(e);n!==this.roof.solarId&&(this.roof.picking=!1),this.roof.solarId=n,this.roof.sectionId=null;let a=this._doc.settings.roof.solar?.find(h=>h.id===n),l=a?ke(this._doc,a)??void 0:void 0,c=l?this.faceHit(l,o):null,u=a&&c?{du:c.u-a.u,ds:Number.isNaN(c.s)?0:c.s-a.v}:null;return this.isAdmin&&!a?.locked?{kind:"solarmove",id:n,start:o,startScreen:r,base:this._doc,moved:!1,grab:u}:this.pan(e)}pressRoofWindow(e,n){this.roof.windowId=n,this.roof.sectionId=null;let r=this._doc.settings.roof.windows?.find(a=>a.id===n),o=r?te(this._doc).find(a=>a.key===r.face):void 0,i=o?Sr(o,e.world):null,s=r&&i?{du:i.u-r.u,ds:i.s-r.v}:null;return this.isAdmin&&!r?.locked?{kind:"solarmove",id:n,start:e.world,startScreen:e.local,base:this._doc,moved:!1,grab:s,win:!0}:this.pan(e)}pressDrawingTool(e){let n=this._tool;if(n==="rect"||n==="outdoor"||n==="hole"||n==="stairs"){let r=this.snap(e.world,void 0,e.fine);return{kind:"rect",start:r,end:r,outdoor:n==="outdoor",hole:n==="hole",stairs:n==="stairs"}}if(n==="polygon"||n==="measure")return{kind:"tap",startScreen:e.local,last:e.local,panning:!1};if(n==="opening")return this.placeOpening(this._openingPreset,e.local)?Xr:this.pan(e)}pressItem(e){let{local:n,world:r,target:o}=e,i=(x,k)=>o.closest(x)?.getAttribute(k)??null,s=this._doc,a=i("[data-device]","data-device");if(a&&this.isAdmin)return{kind:"device",entityId:a,start:r,startScreen:n,base:s,moved:!1};let l=i("[data-opening]","data-opening");if(l)return this.selectItem("opening",l),this.moves(e,{kind:"opening",id:l,startScreen:n,base:s,moved:!1});let c=i("[data-resize]","data-resize");if(c&&this.isAdmin){let[x,k,$]=c.split(":");return{kind:"resize",id:x,corner:[k==="1"?1:-1,$==="1"?1:-1],base:s,moved:!1}}let u=i("[data-rotate]","data-rotate");if(u&&this.isAdmin)return{kind:"rotate",id:u,base:s,moved:!1};let h=i("[data-aim]","data-aim");if(h&&this.isAdmin)return{kind:"aim",entityId:h,base:s,moved:!1};let p=o.closest("[data-vertex], [data-mid]")?null:i("[data-furniture]","data-furniture");if(p)return this.selectItem("furniture",p),this.moves(e,{kind:"furniture",id:p,start:r,startScreen:n,base:s,moved:!1});let d=i("[data-vertex]","data-vertex"),f=i("[data-mid]","data-mid");if(d!==null&&this.room&&this.isAdmin)return this.sel.corner=Number(d),{kind:"vertex",roomId:this.room.id,index:this.sel.corner,base:s,moved:!1};if(f!==null&&this.room&&this.isAdmin)return this.splitEdgeGesture(this.room,Number(f));let _=i("[data-wall-end]","data-wall-end");if(_&&this.isAdmin){let[x,k]=_.split(":");return{kind:"wallmove",id:x,end:k,start:r,startScreen:n,base:s,moved:!1}}let y=i("[data-free-wall]","data-free-wall");if(y)return this.selectItem("wall",y),this.moves(e,{kind:"wallmove",id:y,end:null,start:r,startScreen:n,base:s,moved:!1});let b=i("[data-plus]","data-plus");if(b?.startsWith("out:")&&this.isAdmin)return this.splitOutdoorEdgeGesture(...b.split(":").slice(1));let v=i("[data-out-vertex]","data-out-vertex");if(v&&this.isAdmin){let[x,k]=v.split(":");return{kind:"outvertex",id:x,index:Number(k),base:s,moved:!1}}let w=i("[data-outdoor]","data-outdoor");if(w&&!o.closest("[data-room]")&&!this.roomAt(r))return this.selectItem("outdoor",w),this.moves(e,{kind:"outdoor",id:w,start:r,startScreen:n,base:s,moved:!1})}splitEdgeGesture(e,n){let[r,o]=[e.points[n],e.points[(n+1)%e.points.length]],i=Ke([(r[0]+o[0])/2,(r[1]+o[1])/2],[0,0]),s=this._doc;return this.change((a,l)=>Ea(l,e.id,n,i),s,!1),this.sel.corner=n+1,{kind:"vertex",roomId:e.id,index:n+1,base:s,moved:!0}}splitOutdoorEdgeGesture(e,n){let r=Number(n),o=this._doc,i=this.floorOf({base:o})?.outdoor.find(l=>l.id===e);if(!i)return;let[s,a]=[i.points[r],i.points[(r+1)%i.points.length]];return this.change((l,c)=>sh(c.outdoor.find(u=>u.id===e),r,[(s[0]+a[0])/2,(s[1]+a[1])/2]),o,!1),{kind:"outvertex",id:e,index:r+1,base:o,moved:!0}}splitRoofEdgeGesture(e,n){let r=Number(n),o=this._doc;return this.change(i=>{let s=i.settings.roof.sections?.find(u=>u.id===e);if(!s)return;let a=la(s),[l,c]=[a[r],a[(r+1)%a.length]];xh(s,r,[(l[0]+c[0])/2,(l[1]+c[1])/2])},o,!1),{kind:"roofvertex",id:e,index:r+1,base:o,moved:!0}}pressRoom(e){let n=e.target.closest("[data-room]")?.getAttribute("data-room")??this.roomAt(e.world);return n?(n!==this.sel.room&&(this.sel.corner=null),this.selectItem("room",n),!this.isAdmin||this._tool==="furniture"?this.pan(e):{kind:"room",roomId:n,start:e.world,startScreen:e.local,base:this._doc,moved:!1}):(this.selectItem("room",null),this.pan(e))}onPointerMove(e){let n=this.localPoint(e);if(this.pressStart?In(n,this.pressStart,8)&&(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan&&(this._fixedHint=!0)):this.fixedPan&&!this._fixedHint&&this.drag?.kind==="pan"&&(this._fixedHint=!0),this.pointers.has(e.pointerId)&&this.pointers.set(e.pointerId,n),this.pinch){this.pinchMove();return}let r=this.toWorld(...n),o=this.drag;if(!o){this._tool!=="select"&&this._tool!=="furniture"&&this.floor&&(this._cursor=this.snap(r,void 0,e.altKey));return}this.moveDrag(o,{local:n,world:r,fine:e.altKey,straight:e.shiftKey})}pinchMove(){let e=this.pinchState();!e||!this.pinch||(this.zoomAt(e.dist/Math.max(1,this.pinch.dist),...e.mid),this._view={...this._view,ox:this._view.ox+e.mid[0]-this.pinch.mid[0],oy:this._view.oy+e.mid[1]-this.pinch.mid[1]},this.pinch=e)}panBy(e,n){this._view={...this._view,ox:this._view.ox+n[0]-e[0],oy:this._view.oy+n[1]-e[1]}}live(e,n){this.change(n,e.base,!1)}floorOf(e){return e.base.floors.find(n=>n.id===this._floorId)}moveDrag(e,n){let{local:r,world:o,fine:i}=n,s=this._doc.settings.grid,a=l=>l.moved||In(r,l.startScreen);switch(e.kind){case"pan":this.panBy(e.last,r),e.last=r;return;case"tap":(e.panning||In(r,e.startScreen,6))&&(e.panning=!0,this.panBy(e.last,r)),e.last=r;return;case"rect":e.end=this.snap(o,void 0,i),this.requestUpdate();return;case"freewall":e.end=hp(e.start,this.snap(o,void 0,i),n.straight),this.requestUpdate();return;case"wallmove":{if(!a(e))return;e.moved=!0;let l=(this.floorOf(e)?.walls??[]).find(u=>u.id===e.id);if(!l)return;let c;if(e.end){let u=this.snap(o,void 0,i);c=e.end==="a"?{a:u,b:l.b}:{a:l.a,b:u}}else{let u=ri(e.start,o,tn(s,i));c={a:Ke(l.a,u),b:Ke(l.b,u)}}this.live(e,(u,h)=>Object.assign((h.walls??[]).find(p=>p.id===e.id),c));return}case"vertex":{let l=this.snap(o,{roomId:e.roomId,index:e.index},i);e.moved=!0,this.live(e,(c,u)=>{u.rooms.find(h=>h.id===e.roomId).points[e.index]=l});return}case"room":{if(!a(e))return;e.moved=!0;let l=this.floorOf(e),c=l?.rooms.find(p=>p.id===e.roomId);if(!l||!c)return;let u=this.roomDelta(c,[o[0]-e.start[0],o[1]-e.start[1]],i),h=new Set(l.placements.filter(p=>H([p.x,p.z],c.points)).map(p=>p.entity_id));this.live(e,(p,d)=>{d.rooms.find(f=>f.id===e.roomId).points=c.points.map(f=>Ke(f,u)),d.placements=l.placements.map(f=>{if(!h.has(f.entity_id))return f;let[_,y]=Ke([f.x,f.z],u);return{...f,x:_,z:y}})});return}case"opening":{if(!a(e))return;e.moved=!0;let l=this.floorOf(e),c=l?.openings.find(f=>f.id===e.id),u=c&&l?ze(c,l.rooms,l.walls??[]):null;if(!c||!u)return;let h=l?Rt(l.openings,c):[c],p=!c.wall&&h.length>1&&l?Mn(u.room,h):null;if(p){let f=i?.01:this._doc.settings.grid,_=Is(u.room,o)-p.width/2,y=f>0?Math.round(_/f)*f:_,b=Math.max(0,Math.min(Er(u.room)-p.width,y));this.live(e,(v,w)=>{let x=w.openings.find($=>$.id===e.id),k=x?Rr(w.openings,u.room,x,b,p.width,()=>D("opening")):null;k&&(w.openings=k)});return}let d=this.dropOffset(u.room,u.edge,o,c.width,i);this.live(e,(f,_)=>{_.openings.find(y=>y.id===e.id).offset=d});return}case"furniture":{if(!a(e))return;e.moved=!0;let l=this.floorOf(e)?.furniture.find(d=>d.id===e.id);if(!l)return;let[c,u]=Ra([l.x,l.z],e.start,o,tn(s,i)),p=(i?null:this.snapToWall({...l,x:c,z:u}))??{x:c,z:u,rotation:l.rotation};this.live(e,(d,f)=>{Object.assign(f.furniture.find(_=>_.id===e.id),p)});return}case"resize":{e.moved=!0;let l=this.floorOf(e)?.furniture.find(u=>u.id===e.id);if(!l)return;let c=pc(l,e.corner,o,tn(s,i));this.live(e,(u,h)=>{Object.assign(h.furniture.find(p=>p.id===e.id),c)});return}case"rotate":{e.moved=!0;let l=this.floorOf(e)?.furniture.find(u=>u.id===e.id);if(!l)return;let c=Aa([l.x,l.z],o,i?1:15);this.live(e,(u,h)=>{h.furniture.find(p=>p.id===e.id).rotation=c});return}case"aim":{e.moved=!0;let l=this.floorOf(e)?.placements.find(u=>u.entity_id===e.entityId);if(!l)return;let c={rotation:Aa([l.x,l.z],o,i?1:5)};this.live(e,(u,h)=>{Object.assign(h.placements.find(p=>p.entity_id===e.entityId),c)});return}case"device":{if(!a(e))return;e.moved=!0;let l=this.floorOf(e)?.placements.find(h=>h.entity_id===e.entityId);if(!l)return;let[c,u]=Ra([l.x,l.z],e.start,o,tn(s,i));this.live(e,(h,p)=>{Object.assign(p.placements.find(d=>d.entity_id===e.entityId),{x:c,z:u})});return}case"outdoor":{if(!a(e))return;e.moved=!0;let l=this.floorOf(e)?.outdoor.find(u=>u.id===e.id);if(!l)return;let c=ri(e.start,o,tn(s,i));this.live(e,(u,h)=>{h.outdoor.find(p=>p.id===e.id).points=l.points.map(p=>Ke(p,c))});return}case"outvertex":{e.moved=!0;let l=this.snap(o,void 0,i),c=this.floorOf(e)?.outdoor.find(u=>u.id===e.id);if(!c)return;this.live(e,(u,h)=>{let p=h.outdoor.find(d=>d.id===e.id);p&&(p.points=fp(c.points,e.index,l))});return}case"bgmove":e.moved=!0,this.live(e,(l,c)=>{c.background&&([c.background.x,c.background.z]=Ke([e.bx,e.bz],[o[0]-e.start[0],o[1]-e.start[1]]))});return;case"bgrotate":{e.moved=!0;let l=this.floor?.background,c=l?this.bg.picture(l.image_id):void 0;if(!l||!c)return;let u=Pn(l,c.aspect),h=Kd(e.rot,e.start,Math.atan2(o[1]-u[1],o[0]-u[0]),n.straight);this.live(e,(p,d)=>{d.background&&(d.background.rotation=h)});return}case"bgscale":{e.moved=!0;let l=this.floor?.background,c=l?this.bg.picture(l.image_id):void 0;if(!l||!c)return;let u=Math.max(.5,Ge(Vd(l,c.aspect,o)[0]));this.live(e,(h,p)=>{p.background&&(p.background.width=u)});return}default:this.moveRoofDrag(e,n)}}moveRoofDrag(e,n){let{local:r,world:o,fine:i}=n,s=this._doc.settings.grid;switch(e.kind){case"roofmove":{if(!e.moved&&!In(r,e.startScreen))return;e.moved=!0;let a=ri(e.start,o,tn(s,i)),l=e.base.settings.roof.sections?.find(c=>c.id===e.id);if(!l)return;this.live(e,c=>{let u=c.settings.roof.sections?.find(_=>_.id===e.id);if(!u)return;let[h,p]=Ke([l.x0,l.z0],a),[d,f]=Ke([l.x1,l.z1],a);Object.assign(u,{x0:h,x1:d,z0:p,z1:f}),l.points&&(u.points=l.points.map(_=>Ke(_,a)))});return}case"roofvertex":{e.moved=!0;let a=this.snap(o,void 0,i);this.live(e,l=>{let c=l.settings.roof.sections?.find(u=>u.id===e.id);!c?.points||e.index>=c.points.length||(c.points[e.index]=Ke(a,[0,0]),Object.assign(c,Mt(c.points)))});return}case"roofcorner":{e.moved=!0;let a=this.snap(o,void 0,i);this.live(e,l=>{let c=l.settings.roof.sections?.find(u=>u.id===e.id);c&&(c[e.corner[0]?"x1":"x0"]=Ge(a[0]),c[e.corner[1]?"z1":"z0"]=Ge(a[1]))});return}case"solarturn":{e.moved=!0;let a=e.base.settings.roof.solar?.find(u=>u.id===e.id),l=a?ke(e.base,a):null;if(!a||!l)return;let c=xr(e.base,a,pp(yr(l,a),o,i?1:15));this.live(e,u=>{let h=u.settings.roof.solar?.find(p=>p.id===e.id);h&&Object.assign(h,c)});return}case"solarmove":this.moveSolar(e,n);return;default:return}}moveSolar(e,n){let{local:r,world:o,fine:i}=n;if(!e.moved&&!In(r,e.startScreen))return;e.moved=!0;let s=e.win?e.base.settings.roof.windows?.find(b=>b.id===e.id):void 0,a=e.win?s?Et(s):void 0:e.base.settings.roof.solar?.find(b=>b.id===e.id),l=e.win?te(e.base):[...te(e.base),...this._floorId?He(e.base,this._floorId):[]],c=a?ke(e.base,a,l):null;if(!a||!c)return;let u=i?.01:.05,h=b=>Ge(Math.round(b/u)*u),p=c.unbounded?null:Rs(l,o),d=c,f,_;if(p&&e.grab)d=p.face,f=h(p.u-e.grab.du),_=Number.isNaN(p.s)?p.face.key===a.face?a.v:Math.max(0,p.face.ls-1.5):h(p.s-e.grab.ds);else{let[b,v]=[o[0]-e.start[0],o[1]-e.start[1]],w=[c.es[0],c.es[2]];f=h(a.u+b*c.eu[0]+v*c.eu[2]),_=h(a.v+(b*w[0]+v*w[1])/(w[0]*w[0]+w[1]*w[1]||1))}let y=ft(d,{...a,face:d.key,u:f,v:_,tilt:d.flat?a.tilt??15:a.tilt});this.live(e,b=>{if(e.win){let w=b.settings.roof.windows?.find(x=>x.id===e.id);w&&Object.assign(w,{face:d.key,...y});return}let v=b.settings.roof.solar?.find(w=>w.id===e.id);v&&Object.assign(v,{face:d.key,...y},d.flat&&v.tilt==null?{tilt:15}:{})})}onPointerUp(e){if(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan=!1,this.pointers.delete(e.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let n=this.drag;if(this.drag=null,!n||e.type==="pointercancel"){n&&Im.has(n.kind)&&"moved"in n&&n.moved&&"base"in n&&this.restoreLive(n.base);return}let r=this.localPoint(e);switch(n.kind){case"freewall":{Math.hypot(n.end[0]-n.start[0],n.end[1]-n.start[1])>=.2&&this.addFreeWall(n.start,n.end),this._guides={};break}case"wallmove":n.moved&&this.pushHistory(n.base),this._guides={};break;case"rect":{let[o,i]=n.start,[s,a]=n.end;if(Math.abs(s-o)>=.2&&Math.abs(a-i)>=.2){let l=[Math.min(o,s),Math.min(i,a)],c=[Math.max(o,s),Math.max(i,a)],u=[l,[c[0],l[1]],c,[l[0],c[1]]];n.outdoor?this.addOutdoor(u):n.hole?this.addHole(l,c):n.stairs?this.addStairs(l,c):n.roof?this.roof.addSection(l,c):this.addRoom(u)}this._guides={};break}case"tap":if(n.panning)break;this._tool==="measure"?this._draft=[this.snap(this.toWorld(...r),void 0,e.altKey)]:this.addDraftPoint(this.snap(this.toWorld(...r),void 0,e.altKey),r);break;case"opening":case"furniture":case"rotate":case"aim":case"resize":case"outdoor":case"solarmove":case"solarturn":case"roofmove":case"roofcorner":case"roofvertex":case"bgmove":case"bgscale":case"bgrotate":n.moved&&this.pushHistory(n.base);break;case"device":n.moved?this.pushHistory(n.base):this.selectItem("device",n.entityId);break;case"vertex":case"room":n.moved&&this.pushHistory(n.base),this._guides={};break;default:break}}onWheel(e){e.preventDefault();let[n,r]=this.localPoint(e);this.zoomAt(Math.exp(-e.deltaY*(e.deltaMode===1?.05:.0015)),n,r)}pinchState(){let e=[...this.pointers.values()];if(e.length<2)return null;let[n,r]=e;return{dist:Math.hypot(n[0]-r[0],n[1]-r[1]),mid:[(n[0]+r[0])/2,(n[1]+r[1])/2]}}pushHistory(e){this.history.record(e),this.syncHistoryButtons()}restoreLive(e){this._doc=e,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}roomDelta(e,n,r){if(r)return n;let o=this._doc.settings.grid,i=[Math.round(n[0]/o)*o,Math.round(n[1]/o)*o],a=ki/this._view.scale;this._guides={};for(let l of this.floor?.rooms??[])if(l.id!==e.id)for(let c of l.points)for(let u of e.points){let h=Math.hypot(u[0]+n[0]-c[0],u[1]+n[1]-c[1]);h<a&&(a=h,i=[c[0]-u[0],c[1]-u[1]],this._guides={point:c})}return i}roomAt(e){return(this.floor?.rooms??[]).filter(o=>H(e,o.points)).sort((o,i)=>we(o.points)-we(i.points))[0]?.id??null}addDraftPoint(e,n){let r=this._draft;if(r.length>=3){let[i,s]=this.toScreen(r[0]);if(Math.hypot(i-n[0],s-n[1])<14){this.closeDraft();return}}let o=r[r.length-1];o&&Math.hypot(o[0]-e[0],o[1]-e[1])<1e-6||(this._draft=[...r,e])}closeDraft(){this._draft.length>=3&&we(this._draft)>.05&&this.addRoom(this._draft),this._draft=[],this._cursor=null,this._guides={}}measureStep(e){let n=this._draft[this._draft.length-1];if(!n||!(this._measureLen>0))return;let r=hn(n,this._measureLen,e),o=this._draft[0];if(this._draft.length>=3&&Math.hypot(r[0]-o[0],r[1]-o[1])<.01){this.closeDraft();return}this._draft=[...this._draft,r]}rectBySize(){let e=this._draft[0]??[0,0],[n,r]=this._rectSize;n>.1&&r>.1&&(this.addRoom([e,hn(e,n,"right"),hn(hn(e,n,"right"),r,"down"),hn(e,r,"down")]),this._draft=[])}get freeWall(){return this.sel.wall?(this.floor?.walls??[]).find(e=>e.id===this.sel.wall):void 0}updateFreeWall(e){let n=this.sel.wall;n&&this.change((r,o)=>Object.assign((o.walls??[]).find(i=>i.id===n),e))}deleteFreeWall(){let e=this.sel.wall;!e||!this.isAdmin||!this.confirmFixedDelete("wall",e)||(this.change((n,r)=>{r.walls=(r.walls??[]).filter(o=>o.id!==e),r.openings=r.openings.filter(o=>o.wall!==e)}),this.sel.wall=null)}get outdoorArea(){return this.sel.outdoor?this.floor?.outdoor.find(e=>e.id===this.sel.outdoor):void 0}updateOutdoor(e){let n=this.sel.outdoor;this.change((r,o)=>Object.assign(o.outdoor.find(i=>i.id===n),e))}deleteOutdoor(){let e=this.sel.outdoor;!e||!this.isAdmin||!this.confirmFixedDelete("outdoor",e)||(this.change((n,r)=>r.outdoor=r.outdoor.filter(o=>o.id!==e)),this.sel.outdoor=null)}onKey=e=>{if(e.composedPath().some(o=>o instanceof HTMLInputElement||o instanceof HTMLSelectElement||o instanceof HTMLTextAreaElement)||!this.isConnected||!this.offsetParent)return;if(e.key==="Escape"&&this._pick){e.preventDefault(),this.cancelPick();return}let r=e.ctrlKey||e.metaKey;if(r&&e.key.toLowerCase()==="z")e.preventDefault(),e.shiftKey?this.redo():this.undo();else if(r&&e.key.toLowerCase()==="y")e.preventDefault(),this.redo();else if(r&&e.key.toLowerCase()==="d")e.preventDefault(),this.duplicateRoom();else if(e.key==="Delete"||e.key==="Backspace"&&(this._tool==="select"||this._tool==="furniture"))this.sel.device?this.deleteItem("device",this.sel.device):this.sel.outdoor?this.deleteOutdoor():this.sel.wall?this.deleteFreeWall():this.sel.opening?this.deleteOpening():this.sel.furniture?this.deleteFurniture():this.sel.corner!==null?this.deleteVertex(this.sel.corner):this.deleteRoom();else if(e.key.toLowerCase()==="l"&&!r&&this._tool==="roof"&&this.roof.section&&!this._doc.settings.lock_plan)this.roof.patchSection({locked:!this.roof.section.locked});else if(e.key.toLowerCase()==="l"&&!r&&(this.sel.furniture||this.sel.device)){let o=this.sel.target;this.toggleFixed(o.kind,o.id)}else if(Object.hasOwn(Dm,e.key)&&!r&&(this._tool==="select"||this._tool==="furniture")){let o=e.altKey?.01:e.shiftKey?.1:this._doc.settings.grid,[i,s]=Dm[e.key];this.nudgeSelection(i*o,s*o)&&e.preventDefault()}else if(e.key.toLowerCase()==="r"&&!r&&this.sel.furniture)this.rotateFurniture(e.shiftKey?-90:90);else if(e.key==="Backspace"&&this._tool==="polygon")this._draft=this._draft.slice(0,-1);else if(e.key==="Enter"&&this._tool==="polygon")this.closeDraft();else if(e.key==="?"&&!r)this._keys=!this._keys;else if(e.key==="Escape"){if(this._keys){this._keys=!1;return}if(this._ctx){this._ctx=null;return}this._draft.length?this._draft=[]:this._tool!=="select"?this._tool="select":this.selectItem("room",null),this._cursor=null}};deleteFloor(){let e=this.floor;if(!e||!confirm(this.t("delete_floor_confirm",{name:e.name})))return;let n=structuredClone(this._doc);n.floors=n.floors.filter(r=>r.id!==e.id),this.setDoc(n),this._floorId=n.floors[0]?.id??null,this.sel.room=null}faceHit(e,n){return e.wall?{u:(n[0]-e.o[0])*e.eu[0]+(n[1]-e.o[2])*e.eu[2],s:Number.NaN}:Sr(e,n)}planLayers(e,n){let r=this.canvasContext(),o=this.room,i=!!o&&this.isAdmin&&this._tool==="select"&&!this.sel.opening&&!this.sel.furniture&&!this.isFixedItem("room",o.id),s=this.drag?.kind==="freewall"||this.drag?.kind==="rect"?this.drag:null;return E`${Ld(r,this._doc.settings)} ${Id(r,this.bg,e)} ${Mp(r,this._size)} ${Ep(r)} ${n?Rp(r,n):g}
      ${e?E`${Ap(r,e,this.sel.outdoor)} ${zp(r,e,this.sel.room,this.sel.edge)} ${xp(r,e,this.sel.furniture)}
        ${Tp(r,e,this.sel.wall)} ${n?Hp(r,e,n,this.sel.opening):g} ${Pp(r,e)}
        ${this._tool==="select"?$p(r,e,this.sel.device):g}
        ${this._tool==="select"?Sp(r,e,this._note):g}
        ${this._dims?Op(r,e):g}
        ${i?Dp(r,o,this.sel.corner):g}
        ${Fp(r,this.outdoorArea,this._tool)}
        ${o&&this._tool==="select"?Ip(r,o):g}
        ${Pd(r,e)}`:g}
      ${this._tool==="roof"?E`${Zs(r,this.roof)}${Fd(r,this.roof)}`:this._tool==="energy"?E`${Zs(r,this.roof)}${Ad(r,this.roof)}${Td(r,this.floor,this._doc.energy.routes??[],this._routeDraft)}${zd(r,this.floor,this.sel.furniture)}`:g}
      ${bp(r,s,this._tool,this._draft,this._cursor)} ${_p(r,this._guides,this._size)}`}wallsOfFloor(){let e=this.floor,{wall_exterior:n,wall_interior:r}=this._doc.settings;return e?pe(e.rooms,{exterior:n,interior:r},e.walls??[]).walls:[]}edgeParts(e,n){let r=this.wallsOfFloor().flatMap(o=>o.sources.filter(i=>i.room_id===e.id&&i.edge===n).map(i=>i.t0));return r.length>0?[...new Set(r)].sort((o,i)=>o-i):[0]}changeRoom(e,n){this.isAdmin&&this.change((r,o)=>{let i=o.rooms.find(s=>s.id===e.id);i&&n(i)})}edgeActions(){return{openWall:(e,n)=>this._wallView={roomId:e.id,edge:n},partsOf:(e,n)=>this.edgeParts(e,n),isOuter:(e,n)=>this.wallsOfFloor().some(r=>r.exterior&&r.sources.some(o=>o.room_id===e.id&&o.edge===n)),setHeight:(e,n,r,o)=>{if(r!==void 0){let s=this.edgeParts(e,n).length;this.changeRoom(e,a=>Vp(a,n,r,o,s));return}let i=this.wallsOfFloor().filter(s=>s.sources.some(a=>a.room_id===e.id&&a.edge===n)).flatMap(s=>s.sources);i.some(s=>s.room_id===e.id&&s.edge===n)||i.push({room_id:e.id,edge:n,t0:0,t1:0}),this.isAdmin&&this.change((s,a)=>{for(let l of i){let c=a.rooms.find(u=>u.id===l.room_id);c&&Ta(c,l.edge,o)}})},setSlope:(e,n,r,o)=>this.changeRoom(e,i=>Bp(i,n,r,o)),clearSlope:(e,n)=>this.changeRoom(e,r=>Np(r,n,this.floor?.height??2.5)),setThickness:(e,n,r,o,i)=>this.changeRoom(e,s=>jp(s,n,r,o,i)),arc:this.arcActions(),cut:(e,n,r)=>{let o=this.edgeParts(e,n);this.changeRoom(e,i=>Kp(i,n,r,o))},moveCut:(e,n,r,o)=>{let i=this.edgeParts(e,n);this.changeRoom(e,s=>Gp(s,n,r,o,i))},join:(e,n,r,o)=>this.changeRoom(e,i=>Up(i,n,r,o)),lit:this.sel.edge,light:e=>this.sel.edge=e}}addFloor(e=null){let n=Hf(this._doc,e,{first:this.t("default_floor"),next:o=>this.t("new_floor",{n:o})}),r=structuredClone(this._doc);r.floors=Za(r.floors,n),this.setDoc(r),this._floorId=n.id,this.sel.room=null,this.side.floorMenu=!1,this.fit()}addAreaRooms(e){let n=Bn(this._doc,e,this.hass?.areas);if(n.length===0)return;let r=hc(e,n,()=>D("room"));this.change((o,i)=>i.rooms.push(...r)),this.fit()}duplicateFloor(e){let n=this.floor;if(!n||!this.isAdmin)return;let r=Nf(this._doc,n,this.t("floor_copy_name",{name:n.name}),e),o=structuredClone(this._doc);o.floors=Za(o.floors,r),this.setDoc(o),this._floorId=r.id,this.sel.room=null,this.side.floorCopy=null,this.fit()}moveFloor(e){let n=this._floorId;if(!n)return;let r=Cf(this._doc.floors,n,e);if(r.every((i,s)=>i.id===this._doc.floors[s].id))return;let o=structuredClone(this._doc);o.floors=r.map(i=>o.floors.find(s=>s.id===i.id)),this.setDoc(o)}floorActions(){return{openFloor:e=>{this._floorId=e,this.sel.room=null,this.sel.corner=null,this._draft=[],this.fit()},print:()=>this.printPlan(),addFloor:e=>this.addFloor(e),moveFloor:e=>this.moveFloor(e),deleteFloor:()=>this.deleteFloor(),duplicateFloor:e=>this.duplicateFloor(e),addAreaRooms:e=>this.addAreaRooms(e),closeGaps:()=>this.closeFloorGaps(),shift:()=>this.shiftFloor(this.side.shiftX,this.side.shiftZ),turn:()=>this.turnFloor(),rememberView:()=>this.rememberFloorView()}}roomActions(e){return{select:n=>this.selectItem("room",n),patch:n=>this.updateRoom(n),setArea:n=>this.setArea(n),setRect:(n,r)=>this.setRect(n,r),setCorner:(n,r,o)=>this.setPoint(n,r,o),removeCorner:n=>this.deleteVertex(n),duplicate:()=>this.duplicateRoom(),remove:()=>this.deleteRoom(),rememberView:()=>this.rememberRoomView(),applyPackage:n=>this.applyPackage(e,n),openSpots:()=>{let n=this.hass?be(this.hass,e).filter(r=>r.startsWith("light.")):[];this.side.spots=Uf(e,n)},placeSpots:()=>this.placeSpots(e),lockButton:this.fixButton("room",e.id),wallHeights:Xp(this.host,e,this.edgeActions()),climate:Ah(this.host,e,n=>this.updateRoom(n)),corner:this.sel.corner}}applyPackage(e,n){if(!this.isAdmin)return;let r=_u(e,n,()=>D("furniture"));this.change((o,i)=>i.furniture.push(...r)),this.side.packages=!1,this.side.notice=this.t("pkg_done",{n:r.length})}placeSpots(e){let n=this.side.spots;if(!n||!this.isAdmin)return;let r=yi(e,n);this.change((o,i)=>i.furniture.push(...r)),this.side.spots=null,this.side.notice=this.t("spots_placed",{n:r.length})}viewCentre(){return this.toWorld(this._size.w/2,this._size.h/2)}addFreeWall(e,n){if(!this.floor)return;let r=th(e,n);this.change((o,i)=>i.walls=[...i.walls??[],r]),this.selectItem("wall",r.id)}addHole(e,n){if(!this.floor)return;let r=oh(e,n);this.change((o,i)=>i.furniture.push(r)),this.selectItem("furniture",r.id),this._tool="select"}addStairs(e,n){let r=this.floor;if(!r)return;let[o,i]=[n[0]-e[0],n[1]-e[1]],s=oa("stairs",this._doc,r,[(e[0]+n[0])/2,(e[1]+n[1])/2]),a=o>i*1.2;Object.assign(s,{w:Math.round((a?i:o)*1e3)/1e3,d:Math.round((a?o:i)*1e3)/1e3,rotation:a?90:0}),this.change((l,c)=>c.furniture.push(s)),this.selectItem("furniture",s.id),this._tool="select"}addOutdoor(e){if(!this.floor)return;let n=ih(e);this.change((r,o)=>o.outdoor.push(n)),this.selectItem("outdoor",n.id),this._tool="select"}duplicateOutdoor(){let e=this.outdoorArea;if(!e||!this.isAdmin)return;let n=lh(e);this.change((r,o)=>o.outdoor.push(n)),this.selectItem("outdoor",n.id)}addRoom(e){if(!this.floor)return;let n=np(e,this.t("new_room",{n:this.floor.rooms.length+1}));this.change((r,o)=>o.rooms.push(n)),this.sel.room=n.id,this.sel.corner=null,this._tool="select"}deleteRoom(){let e=this.sel.room;!e||!this.isAdmin||!this.confirmFixedDelete("room",e)||(this.change((n,r)=>op(r,e)),this.sel.room=null,this.sel.corner=null)}duplicateRoom(){let e=this.room;if(!e||!this.isAdmin)return;let n=rp(e);this.change((r,o)=>o.rooms.push(n)),this.sel.room=n.id}deleteVertex(e){let n=this.room;n&&(this.change((r,o)=>ip(o,n.id,e)),this.sel.corner=null)}nudgeSelection(e,n){let r=this.floor;if(!r||!this.isAdmin)return!1;let o=this.sel.target;if(o&&this.isFixedItem(o.kind,o.id))return this._fixedHint=!0,!0;let i=o?o.kind==="room"?{kind:"room",id:o.id,corner:this.sel.corner}:{kind:o.kind,id:o.id}:null,s=i?zf(r,i,e,n):Cn;return s===Cn?!1:(s!==mi&&this.change((a,l)=>s.apply(l)),!0)}addFurniture(e){let n=this.floor;if(!n||!this.isAdmin)return;let r=this.room,o=oa(e,this._doc,n,r?_e(r.points):this.viewCentre());this.change((i,s)=>s.furniture.push(o)),this.selectItem("furniture",o.id),this.showPoint(o.x,o.z)}rotateFurniture(e){let n=this.furnitureItem;n&&this.isAdmin&&this.updateFurniture({rotation:uh(n.rotation,e)})}duplicateFurniture(){let e=this.furnitureItem;if(!e||!this.isAdmin)return;let n=ch(e);this.change((r,o)=>o.furniture.push(n)),this.selectItem("furniture",n.id)}vehicleToSpot(e){if(!this.isAdmin)return;let n=dh(e);this.change((r,o)=>{o.furniture=o.furniture.filter(i=>i.id!==e.id),o.furniture.push(n)}),this.selectItem("furniture",n.id)}deviceToFurniture(e,n){if(!this.isAdmin)return;let r=hh(e,n);this.change((o,i)=>{i.placements=i.placements.filter(s=>s.entity_id!==e.entity_id),i.furniture.push(r)}),this.sel.device=null,this.selectItem("furniture",r.id)}furnitureToDevice(e){let n=e.entity;if(!this.isAdmin||!n||n==="none")return;let r=ph(e,n);this.change((o,i)=>{i.furniture=i.furniture.filter(s=>s.id!==e.id),i.placements.some(s=>s.entity_id===n)||i.placements.push(r)}),this.sel.furniture=null,this.selectItem("device",n)}placeDevices(e){let n=this.room;!n||e.length===0||!this.isAdmin||this.change((r,o)=>ia(r,o,n,e))}removeDevice(e){this.change(n=>fh(n,e))}centreDevice(){let e=this.device,n=e?this.floor?.rooms.find(i=>i.id===this.roomAt([e.x,e.z])):void 0;if(!e||!n)return;let[r,o]=mh(n);this.updateDevice({x:r,z:o})}spreadCeilingLights(e){let n=this.floor;if(!n)return;let r=lp(e,n.placements);r.length!==0&&this.change((o,i)=>{for(let s of r)Object.assign(i.placements.find(a=>a.entity_id===s.entityId),{x:s.x,z:s.z})})}shiftScope(){return{floorId:this._floorId,allFloors:this.side.shiftAll}}shiftFloor(e,n){!this.isAdmin||!e&&!n||(this.change(r=>If(r,this.shiftScope(),e,n)),this.side.shiftX=0,this.side.shiftZ=0)}turnFloor(){!this.floor||!this.isAdmin||this.change(e=>Df(e,this.shiftScope()))}setArea(e){let n=this.room;n&&this.updateRoom(Ma(n,e,this.hass?.areas??{}))}setRect(e,n){let r=this.room,o=r?sp(r,e,n):null;o&&this.updateRoom({points:o})}setPoint(e,n,r){let o=this.room,i=o?ap(o,e,n,r):null;i&&this.updateRoom({points:i})}setOpeningPreset(e,n){this._openingPreset=n,this.updateOpening(_h(e,n))}pressRoute(e){let n=this._routeDraft;if(!n||this._tool!=="energy"||!this._floorId||n.points.length>=ic)return;let[r,o]=this.snap(e.world,void 0,e.fine).map(i=>Math.round(i*1e3)/1e3);return this._routeDraft={...n,points:[...n.points,{floor_id:this._floorId,x:r,z:o}]},Xr}routeActions(){let e=n=>this.change(r=>{r.energy.routes=n(r.energy.routes??[]),r.energy.routes.length||delete r.energy.routes});return{draft:this._routeDraft,start:n=>this._routeDraft={key:n,points:[...this._doc.energy.routes?.find(r=>r.key===n)?.points??[]]},undoPoint:()=>this._routeDraft&&(this._routeDraft={...this._routeDraft,points:this._routeDraft.points.slice(0,-1)}),cancel:()=>this._routeDraft=null,finish:()=>{let n=this._routeDraft;this._routeDraft=null,!(!n||!this.isAdmin)&&e(r=>{let o=r.find(s=>s.key===n.key),i=r.filter(s=>s.key!==n.key);return n.points.length?[...i,{key:n.key,points:n.points,...o?.cable?{cable:!0}:{}}]:i})},clear:n=>this.isAdmin&&e(r=>r.filter(o=>o.key!==n)),setCable:(n,r)=>this.isAdmin&&e(o=>o.map(i=>i.key===n?{...i,cable:r}:i))}}energyActions(){return{follow:e=>{e.kind==="solar-field"?this.roof.solarId=e.id:e.kind==="add-solar-field"?this.roof.addField():e.kind==="add-device"?this.addEnergyDevice(e.type):this.openEnergyDevice(e.floor,e.item)},addDevice:e=>{this.roof.solarId=null,this.addEnergyDevice(e)},openDevice:(e,n)=>this.openEnergyDevice(e,n),importPrefs:()=>{this.importEnergy()},note:this._energyNote}}openEnergyDevice(e,n){this._floorId=e.id,this.roof.solarId=null,this.selectItem("furniture",n.id),this.showPoint(n.x,n.z)}addEnergyDevice(e){let n=this.floor;if(!n||!this.isAdmin)return;let r=i=>i.area_id&&this.hass?.areas?.[i.area_id]?.name||"",o=Ff(e,this._doc,n,{roomLabel:i=>`${i.name} ${r(i)} ${i.area_id??""}`,selected:this.room,fallback:this.toWorld(this._size.w/2,this._size.h/2)});this.change((i,s)=>s.furniture.push(o)),this.selectItem("furniture",o.id),this.showPoint(o.x,o.z)}async importEnergy(){if(!this.hass)return;let e=await Rf({hass:this.hass,doc:()=>this._doc,canAdd:()=>!!this.floor,addDevice:n=>this.addEnergyDevice(n),setField:(n,r,o)=>this.change(i=>{let s=i.floors.flatMap(a=>a.furniture).find(a=>a.id===n);s&&(s[r]=o)})});if(e.kind==="failed"){this._energyNote=this.t("energy_import_failed");return}this.selectItem("furniture",null),this._energyNote=e.filled>0?this.t("energy_import_done",{n:e.filled}):this.t("energy_import_none")}renderEnergyPanel(){let e=this.roof.solarId?this._doc.settings.roof.solar?.find(o=>o.id===this.roof.solarId):void 0;if(e)return Sf(this.roofDeps(),e);let n=this.sel.furniture?this.floor?.furniture.find(o=>o.id===this.sel.furniture&&De.includes(o.type)):void 0;if(n)return m`<button class="nf-btn nf-back" @click=${()=>this.selectItem("furniture",null)}>‹ ${this.t("tool_energy")}</button>
        ${Ur(this.host,n,this.furnitureActions())}`;let r=this.energyActions();return m`${kd(this.host,r)}${$f(this.roofDeps())}${xd(this.host,r)}${Ed(this.host,this.routeActions())}${$d(this.host,r)}${Sd(this.host)}`}fixItem(e,n,r){if(e)switch(n){case"room":return e.rooms.find(o=>o.id===r);case"opening":return e.openings.find(o=>o.id===r);case"furniture":return e.furniture.find(o=>o.id===r);case"device":return e.placements.find(o=>o.entity_id===r);case"wall":return(e.walls??[]).find(o=>o.id===r);case"outdoor":return e.outdoor.find(o=>o.id===r)}}isFixedItem(e,n){return co(this.fixItem(this.floor,e,n),e!=="furniture"&&e!=="device",this._doc.settings)}toggleFixed(e,n){if(!this.isAdmin||e!=="furniture"&&e!=="device")return;let r=!this.isFixedItem(e,n);this.change((o,i)=>{let s=this.fixItem(i,e,n);s&&(s.locked=r)})}toggleLockPlan(){this.isAdmin&&this.change(e=>e.settings.lock_plan=!e.settings.lock_plan)}confirmFixedDelete(e,n){return!this.isFixedItem(e,n)||confirm(this.t("fixed_delete_confirm"))}onContextMenu(e){e.preventDefault(),!(this._tool!=="select"&&this._tool!=="furniture")&&(this.drag=null,this.openContext(e.target,this.localPoint(e)))}openContext(e,n){if(!this.isAdmin||!this.floor)return;let r=this.toWorld(...n),o=f=>e.closest(`[${f}]`)?.getAttribute(f)??null,i=null,s=o("data-device"),a=o("data-opening"),l=e.closest("[data-vertex], [data-mid]")?null:o("data-furniture"),c=o("data-free-wall"),u=o("data-outdoor"),h=o("data-room")??this.roomAt(r);if(s?i=["device",s]:a?i=["opening",a]:l?i=["furniture",l]:c?i=["wall",c]:u&&!h?i=["outdoor",u]:h&&(i=["room",h]),!i){this._ctx=null;return}let[p,d]=i;this.selectItem(p,d),(p==="opening"||p==="furniture")&&(this.sel.room=this.sel.room??h),this._ctx={x:n[0],y:n[1],kind:p,id:d,at:r}}deleteItem(e,n){if(e==="device"){if(!this.confirmFixedDelete(e,n))return;this.removeDevice(n),this.sel.device=null;return}e==="room"?this.deleteRoom():e==="opening"?this.deleteOpening():e==="furniture"?this.deleteFurniture():e==="wall"?this.deleteFreeWall():this.deleteOutdoor()}renderContext(){let e=this._ctx;if(!e)return g;let n=this.isFixedItem(e.kind,e.id),r=this.renderRoot.querySelector(".nf-canvas-wrap"),o=Math.max(4,Math.min(e.x,(r?.clientWidth??800)-190)),i=Math.max(4,Math.min(e.y,(r?.clientHeight??600)-190)),s=a=>()=>{this._ctx=null,a()};return m`<div class="nf-ctx" style=${`left:${o}px;top:${i}px`} @pointerdown=${a=>a.stopPropagation()} @contextmenu=${a=>a.preventDefault()}>
      ${e.kind==="furniture"||e.kind==="device"?m`<button title=${this.t("fix_hint")} @click=${s(()=>this.toggleFixed(e.kind,e.id))}>${n?`\u{1F513} ${this.t("unfix")}`:`\u{1F512} ${this.t("fix")}`}</button>`:m`<button title=${this.t("lock_plan_hint")} @click=${s(()=>this.toggleLockPlan())}>${this._doc.settings.lock_plan?`\u{1F513} ${this.t("plan_unlock")}`:`\u{1F512} ${this.t("plan_lock")}`}</button>`}
      ${e.kind==="room"?m`<button @click=${s(()=>this.duplicateRoom())}>⧉ ${this.t("duplicate")}</button>`:g}
      ${e.kind==="furniture"?m`<button @click=${s(()=>this.duplicateFurniture())}>⧉ ${this.t("duplicate")}</button>
            <button ?disabled=${n} @click=${s(()=>this.rotateFurniture(90))}>↻ ${this.t("ctx_rotate")}</button>
            <button ?disabled=${n} @click=${s(()=>this.mirrorFurniture())}>⇋ ${this.t("furn_mirror")}</button>`:g}
      ${e.at?m`<button @click=${s(()=>this.addNote(e.at))}>✎ ${this.t("note_add")}</button>`:g}
      <button class="nf-ctx-danger" @click=${s(()=>this.deleteItem(e.kind,e.id))}>✕ ${this.t("delete")}</button>
    </div>`}fixButton(e,n){if(!this.isAdmin)return g;if(e!=="furniture"&&e!=="device")return this._doc.settings.lock_plan?m`<button class="nf-btn nf-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>
            🔒 ${this.t("plan_locked")}
          </button>`:g;let r=this.isFixedItem(e,n);return m`<button class="nf-btn nf-fix" aria-pressed=${r} title=${this.t("fix_hint")} @click=${()=>this.toggleFixed(e,n)}>
      ${r?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
    </button>`}dropOffset(e,n,r,o,i){let s=e.points[n],a=e.points[(n+1)%e.points.length],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,c=((r[0]-s[0])*(a[0]-s[0])+(r[1]-s[1])*(a[1]-s[1]))/l;return gh(l,c,o,i?.01:this._doc.settings.grid)}selectItem(e,n){this.side.notice=null,n&&(this._sideOpen=!0),this.sel.select(e,n,{roomOfDevice:r=>{let o=this.floor?.placements.find(i=>i.entity_id===r);return(o&&this.roomAt([o.x,o.z]))??null},roomOfOpening:r=>this.floor?.openings.find(o=>o.id===r)?.room_id??null})}get opening(){let e=this.sel.opening?this.floor?.openings.find(o=>o.id===this.sel.opening):void 0;if(!e?.front||!this.floor)return e;let n=this.floor.rooms.find(o=>o.id===e.room_id),r=n?Mn(n,Rt(this.floor.openings,e)):null;return r?{...e,width:r.width}:e}get furnitureItem(){return this.sel.furniture?this.floor?.furniture.find(e=>e.id===this.sel.furniture):void 0}placeOpening(e,n){let r=this.floor;if(!r||!this.isAdmin)return!1;let o=null;for(let _ of r.walls??[]){let y=ze({room_id:"",edge:0,wall:_.id},r.rooms,r.walls??[]);if(!y)continue;let[b,v]=this.toScreen(_.a),[w,x]=this.toScreen(_.b),k=(w-b)**2+(x-v)**2||1,$=Math.min(1,Math.max(0,((n[0]-b)*(w-b)+(n[1]-v)*(x-v))/k)),R=Math.hypot(n[0]-b-(w-b)*$,n[1]-v-(x-v)*$),F=[(_.a[0]+_.b[0])/2,(_.a[1]+_.b[1])/2],z=r.rooms.find(I=>I.points.length>=3&&H(F,I.points));R<ki*2.2&&(!o||R-1<o.d)&&(o={room:y.room,edge:0,d:R-1,wall:_.id,roomId:z?.id??_.id})}for(let _ of r.rooms)for(let y=0;y<_.points.length;y++){let[b,v]=this.toScreen(_.points[y]),[w,x]=this.toScreen(_.points[(y+1)%_.points.length]),k=(w-b)**2+(x-v)**2||1,$=Math.min(1,Math.max(0,((n[0]-b)*(w-b)+(n[1]-v)*(x-v))/k)),R=Math.hypot(n[0]-b-(w-b)*$,n[1]-v-(x-v)*$),F=R-(_.id===this.sel.room?.5:0);R<ki*2.2&&(!o||F<o.d)&&(o={room:_,edge:y,d:F})}if(!o)return!1;let{room:i,edge:s,wall:a}=o,l=i.points[s],c=i.points[(s+1)%i.points.length],u=Math.hypot(c[0]-l[0],c[1]-l[1]),h=pn[e],p=h.type;if(h.style==="glass_wall"&&!a){let _=Is(i,this.toWorld(...n)),y=Ts(i,_-h.width/2,h.width);if(y&&y.length>1){let b=D("front"),v=y.map(w=>({id:D("opening"),room_id:o.roomId??i.id,edge:w.edge,offset:w.offset,width:w.width,front:b,type:p,sill:h.sill,height:h.height,hinge:"left",leaves:h.leaves,swing:"in",...fo.has(h.style)?{}:{style:h.style},...h.opens?{opens:h.opens}:{},cover:null,contact:null,contact2:null,tilt:null}));return this.change((w,x)=>x.openings.push(...v)),this._tool="select",this.selectItem("opening",v[0].id),!0}}let d=Ge(Math.min(h.width,Math.max(.3,u-.1))),f={id:D("opening"),room_id:o.roomId??i.id,edge:s,...a?{wall:a}:{},offset:this.dropOffset(i,s,this.toWorld(...n),d,!1),width:d,type:p,sill:h.sill,height:h.height,hinge:"left",leaves:h.leaves,swing:"in",...h.style&&!fo.has(h.style)?{style:h.style}:{},...h.opens?{opens:h.opens}:{},cover:null,contact:null,contact2:null,tilt:null};return this.change((_,y)=>y.openings.push(f)),this._tool="select",this.selectItem("opening",f.id),!0}updateOpening(e){let n=this.sel.opening;this.change((r,o)=>{let i=o.openings.find(u=>u.id===n);if(!i)return;let s=Rt(o.openings,i),a=i.wall?null:o.rooms.find(u=>u.id===i.room_id),l=a&&i.type==="window"&&i.style==="glass_wall"&&(e.width!=null||e.offset!=null),c=l&&a?Mn(a,s):null;if(l&&a&&c){let u=Math.max(.3,e.width??c.width),h=c.from;e.width!=null&&(h+=(c.width-u)/2),e.offset!=null&&(h+=e.offset-i.offset),h=Math.max(0,Math.min(Er(a)-u,h));let p=Rr(o.openings,a,{...i,...e},h,u,()=>D("opening"));p&&(o.openings=p);return}for(let u of s)Object.assign(u,e)})}deleteOpening(){let e=this.sel.opening;!e||!this.isAdmin||!this.confirmFixedDelete("opening",e)||(this.change((n,r)=>{let o=r.openings.find(s=>s.id===e),i=new Set((o?Rt(r.openings,o):[o]).map(s=>s?.id));r.openings=r.openings.filter(s=>!i.has(s.id))}),this.sel.opening=null)}snapToWall(e){return this.floor?ar(this.floor,e,this._doc.settings.wall_interior):null}updateFurniture(e){let n=this.sel.furniture;this.change((r,o)=>Object.assign(o.furniture.find(i=>i.id===n),e))}mirrorFurniture(){let e=this.furnitureItem;!e||!this.isAdmin||this.updateFurniture({mirror:!e.mirror})}deleteFurniture(){let e=this.sel.furniture;!e||!this.isAdmin||!this.confirmFixedDelete("furniture",e)||(this.change((n,r)=>r.furniture=r.furniture.filter(o=>o.id!==e)),this.sel.furniture=null)}get device(){return this.sel.device?this.floor?.placements.find(e=>e.entity_id===this.sel.device):void 0}updateDevice(e){let n=this.sel.device;this.change((r,o)=>Object.assign(o.placements.find(i=>i.entity_id===n),e))}closeFloorGaps(){let e=this.floor;if(!e||!this.isAdmin)return;let{rooms:n,gaps:r}=Nc(e.rooms);if(!r.length){this.side.notice=this.t("gaps_none");return}let o=Vc(r);this.change((i,s)=>{s.rooms=n,o&&(i.settings.wall_interior=o)}),this.side.notice=o?this.t("gaps_closed_wall",{n:r.length,t:G(this.hass,o,2)}):this.t("gaps_closed",{n:r.length})}updateFloor(e){this.change((n,r)=>Object.assign(r,e))}updateRoom(e){let n=this.sel.room;this.change((r,o)=>Object.assign(o.rooms.find(i=>i.id===n),e))}render(){zh(this._doc.settings.units);let e=this.floor,n=e?pe(e.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},e.walls??[]):null;return m`
      ${tp(this.host,this.lib.preview)}
      ${this._wallView?m`<nf-wall-view .host=${this.host} .doc=${this._doc} .roomId=${this._wallView.roomId} .edge=${this._wallView.edge} @close=${()=>this._wallView=null}></nf-wall-view>`:g}
      <div class="nf-editor ${this.narrow?"nf-narrow":""}">
        <div class="nf-main">
          <div class="nf-toolbar">
            ${this.narrow?m`<select class="nf-tool-select" aria-label=${this.t("tool_select")} ?disabled=${!e} @change=${r=>{this._tool=r.target.value,this._draft=[],this._cursor=null,this._sideOpen=this._tool!=="select"}}>
                  ${Tm.filter(r=>this.isAdmin||r==="select").map(r=>m`<option value=${r} ?selected=${this._tool===r}>${this.t(`tool_${r}`)}</option>`)}
                </select>`:g}
            <div class="nf-seg" role="group" aria-label=${this.t("tool_select")} ?hidden=${this.narrow}>
              ${Tm.map(r=>m`<button
                  aria-pressed=${this._tool===r}
                  ?disabled=${!e||!this.isAdmin&&r!=="select"}
                  @click=${()=>{this._tool=r,this._draft=[],this._cursor=null,this._sideOpen=r!=="select"}}
                >
                  ${this.t(`tool_${r}`)}
                </button>`)}
            </div>
            <div class="nf-seg">
              <button ?disabled=${!this._canUndo} @click=${()=>this.undo()} title="Ctrl+Z">${this.t("undo")}</button>
              <button ?disabled=${!this._canRedo} @click=${()=>this.redo()} title="Ctrl+Y">${this.t("redo")}</button>
              <button @click=${()=>this.fit()}>${this.t("fit")}</button>
              <button aria-pressed=${this._split} title=${this.t("split_3d_hint")} @click=${()=>this.toggleSplit()}>${this.t("split_3d")}</button>
              ${this.isAdmin?m`<button aria-pressed=${!!this._doc.settings.lock_plan} title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>${this.t("lock_plan")}</button>`:g}
              <button aria-pressed=${this._dims} title=${this.t("plan_dims_hint")} @click=${()=>this.setDims(!this._dims)}>📏 ${this.t("plan_dims")}</button>
            </div>
            ${n?.warnings.length?m`<span class="nf-warn">${this.t("overlap_warning")}</span>`:g}
          </div>
          <div class="nf-stage-pair ${this._split?"nf-split":""}" style=${this._split&&!this.narrow?`--nf-split:${Math.round(this._splitRatio*100)}%`:""}>
          <div class="nf-canvas-wrap">
            ${this.houseTool?m`<div class="nf-tool-note">${this.t(this._tool==="energy"?"energy_only_note":"roof_only_note")}</div>`:g}
            <svg
              class="nf-plan nf-tool-${this._tool}"
              @pointerdown=${this.onPointerDown}
              @pointermove=${this.onPointerMove}
              @pointerup=${this.onPointerUp}
              @pointercancel=${this.onPointerUp}
              @pointerleave=${()=>{this.drag||(this._cursor=null)}}
              @wheel=${this.onWheel}
              @contextmenu=${this.onContextMenu}
            >
              ${this.planLayers(e,n?.walls??null)}
            </svg>
            ${this.renderContext()}
            <p class="nf-hint ${this._fixedHint?"nf-hint-fixed":""}">${this._pick?this.t("robot_cal_doing"):e?this._fixedHint?this.t("fixed_drag_hint"):this.t(`hint_${this._tool}`):this.t("hint_empty")}</p>
            <button class="nf-keys-open" title=${this.t("keys_title")} aria-label=${this.t("keys_title")} @click=${()=>this._keys=!0}>?</button>
            ${this.isAdmin?km((r,o)=>this.t(r,o),this._tour,r=>{this._tour=r,r===null&&wm()}):g}
            ${this._keys?vm(r=>this.t(r),()=>this._keys=!1):g}
          </div>
          ${this._split&&!this.narrow?m`<div class="nf-split-handle" title=${this.t("split_handle_hint")} @pointerdown=${this.onSplitDown}></div>`:g}
          ${this._split?this.render3d():g}
          </div>
        </div>
        ${this.renderAside(e)}
      </div>
    `}selectFrom3d(e,n){this.selectItem(e,n),this._sideOpen=!1}setSidePinned(e){this._sidePinned=e,this._sideOpen=!1;try{localStorage.setItem("nextfloor.sidePinned",e?"1":"0")}catch{}}renderAside(e){return this._split&&!this._sidePinned&&!this.narrow?this._sideOpen?m`<aside class="nf-side nf-side-strip"></aside>
      <aside class="nf-side nf-side-overlay">
        ${this.renderPinRow(!0)}
        ${this.safeSide(e)}
      </aside>`:m`<aside class="nf-side nf-side-strip">
        <button class="nf-strip-btn" title=${this.t("side_open")} @click=${()=>this._sideOpen=!0}>☰</button>
        ${this.sel.furniture||this.sel.device||this.sel.opening?m`<button class="nf-strip-btn nf-strip-hot" title=${this.t("side_details")} @click=${()=>this._sideOpen=!0}>⚙</button>`:g}
        <button class="nf-strip-btn" title=${this.t("tool_furniture")} @click=${()=>(this._tool="furniture",this._draft=[],this._sideOpen=!0)}>🛋</button>
        <button class="nf-strip-btn" title=${this.t("tool_opening")} @click=${()=>(this._tool="opening",this._draft=[],this._sideOpen=!0)}>🚪</button>
      </aside>`:m`<aside class="nf-side">${this.renderPinRow()}${this.safeSide(e)}</aside>`}safeSide(e){try{return this.renderSide(e)}catch(n){return console.error("NextFloor: the side bar could not be drawn",n),m`<button class="nf-btn nf-back" @click=${()=>this.selectItem("room",null)}>‹ ${this.t("back_to_floor")}</button>
        <p class="nf-note">${this.t("side_failed",{error:n instanceof Error?n.message:String(n)})}</p>`}}renderPinRow(e=!1){return!this._split||this.narrow?g:m`<div class="nf-pin-row">
      ${e?m`<button class="nf-btn" @click=${()=>this._sideOpen=!1}>${this.t("side_close")}</button>`:g}
      <button class="nf-btn" aria-pressed=${this._sidePinned} title=${this.t("side_pin_hint")} @click=${()=>this.setSidePinned(!this._sidePinned)}>
        📌 ${this.t(this._sidePinned?"side_pinned":"side_pin")}
      </button>
    </div>`}renderSide(e){let n=this.room,r=this.isAdmin;if(this._tool==="roof")return mf(this.roofDeps());if(this._tool==="energy")return this.renderEnergyPanel();if(this._tool==="furniture"&&e&&r)return this._studio?im(this.host,this._studio,{change:s=>this._studio&&(this._studio={...this._studio,recipe:s,error:null}),save:()=>{this.saveStudio()},close:()=>this._studio=null}):m`${this.furnitureItem?m`${Ur(this.host,this.furnitureItem,this.furnitureActions())}${this.studioButton()}`:g} ${ep(this.host,this.lib,this.room?.name,this.libraryActions())}`;let o=this._tool==="measure"?null:this.furnitureItem?Ur(this.host,this.furnitureItem,this.furnitureActions()):this.opening?Ba(this.host,this.opening,this.openingActions()):this.device?Da(this.host,this.device,this.deviceActions()):this.outdoorArea?sa(this.host,this.outdoorArea,this.outdoorActions()):this.freeWall?aa(this.host,this.freeWall,this.freeWallActions()):null,i=this._note?e?.notes?.find(s=>s.id===this._note):void 0;return i?m`<button class="nf-btn nf-back" @click=${()=>this._note=null}>‹ ${this.t("back_to_floor")}</button>
        ${Lp(this.host,i,{patch:s=>this.change((a,l)=>Object.assign(l.notes.find(c=>c.id===i.id),s)),remove:()=>{this.change((s,a)=>a.notes=(a.notes??[]).filter(l=>l.id!==i.id)),this._note=null}})}`:o?m`<button class="nf-btn nf-back" @click=${()=>this.selectItem("room",this.sel.room)}>‹ ${this.t(n?"back_to_room":"back_to_floor",{room:n?.name??""})}</button>
        ${o}`:n&&this._tool!=="measure"?m`<button class="nf-btn nf-back" @click=${()=>this.selectItem("room",null)}>‹ ${this.t("back_to_floor")}</button>
        ${Ya(this.host,this.side,n,this.roomActions(n))} ${da(this.host,this.side,n,this.deviceListActions())}`:m`
      ${r?g:m`<p class="nf-note">${this.t("read_only")}</p>`}
      ${this._check?sm(this.host,gm(this._doc,this.hass),{fix:s=>this.fixFinding(s),close:()=>this._check=!1}):r?am(this.host,()=>this._check=!0):g}
      ${Kf(this.host,this.side,this.floorActions(),e,this._floorId)}
      ${this._tool==="measure"&&e?yh(this.host,this.measureState(),this.measureActions()):this.freeWall?aa(this.host,this.freeWall,this.freeWallActions()):this.outdoorArea?sa(this.host,this.outdoorArea,this.outdoorActions()):this.opening?Ba(this.host,this.opening,this.openingActions()):this.furnitureItem?Ur(this.host,this.furnitureItem,this.furnitureActions()):this.device?Da(this.host,this.device,this.deviceActions()):n?m`${Ya(this.host,this.side,n,this.roomActions(n))} ${da(this.host,this.side,n,this.deviceListActions())}`:e?Yf(this.host,e,{select:s=>this.selectItem("room",s)}):g}
      ${r?Fu(this.host,()=>this.paneView()):g} ${r?Au(this.host):g}
      ${Md(this.host)}
      ${r&&!1?zu(this.host):g}
      ${e&&r?Ud(this.host,this.bg,e):g} ${r?ud(this.host,this.settingsActions):g}
      ${r?Qu(this.host,this.backup):g}
    `}openingIsExterior(e){let n=this.floor,r=n?ze(e,n.rooms,n.walls??[]):null;if(!n||!r)return!1;let o=pe(n.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},n.walls??[]);return St(o.walls,e,r)?.wall.exterior??!1}paneView(){let n=this.renderRoot.querySelector("nf-view3d")?.currentView();if(!n)return null;let r=n.target;return{theta:Ge(n.theta),phi:Ge(n.phi),radius:Ge(n.radius),...r?{target:{x:Ge(r.x),y:Ge(r.y),z:Ge(r.z)}}:{}}}rememberFloorView(){let e=this.paneView();if(!e){alert(this.t("floor_start_view_need_pane"));return}this.updateFloor({start_view:e})}rememberRoomView(){let e=this.paneView();if(!e){alert(this.t("room_start_view_need_pane"));return}this.updateRoom({start_view:e})}storedPictures(){let e=[];for(let n of this._doc.floors)for(let r of n.furniture)for(let o of r.pictures??[])o.image&&!/^https?:\/\//.test(o.image)&&!o.image.startsWith("camera:")&&!e.includes(o.image)&&e.push(o.image);return e}static styles=[Be,ot,Xf]};customElements.get("nf-editor")||customElements.define("nf-editor",il);export{il as NfEditor};
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
lit-html/directive.js:
lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
