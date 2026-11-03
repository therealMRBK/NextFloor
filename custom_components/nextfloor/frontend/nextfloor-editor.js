/*! NextFloor, MIT licence. Includes three.js (MIT) and Lit (BSD-3-Clause); see LICENSE and THIRD_PARTY_NOTICES.md */
var $={es:"df01f4e1a825",fr:"5af4459b7325",it:"92fabfac344f",nl:"ade596436d60",pl:"279282c9f652",pt:"118d89b0325c",sv:"2ea6a5b1cdc0"};var Pr=globalThis,Tr=Pr.ShadowRoot&&(Pr.ShadyCSS===void 0||Pr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qo=Symbol(),Ma=new WeakMap,On=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==Qo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o,n=this.t;if(Tr&&e===void 0){let r=n!==void 0&&n.length===1;r&&(e=Ma.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Ma.set(n,e))}return e}toString(){return this.cssText}},Ea=t=>new On(typeof t=="string"?t:t+"",void 0,Qo),ie=(t,...e)=>{let n=t.length===1?t[0]:e.reduce((r,o,i)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1],t[0]);return new On(n,t,Qo)},Ra=(t,e)=>{if(Tr)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(let n of e){let r=document.createElement("style"),o=Pr.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,t.appendChild(r)}},Jo=Tr?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(let r of e.cssRules)n+=r.cssText;return Ea(n)})(t):t;var{is:Rf,defineProperty:Af,getOwnPropertyDescriptor:Ff,getOwnPropertyNames:zf,getOwnPropertySymbols:Pf,getPrototypeOf:Tf}=Object,Or=globalThis,Aa=Or.trustedTypes,Of=Aa?Aa.emptyScript:"",Df=Or.reactiveElementPolyfillSupport,Dn=(t,e)=>t,ei={toAttribute(t,e){switch(e){case Boolean:t=t?Of:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},za=(t,e)=>!Rf(t,e),Fa={attribute:!0,type:String,converter:ei,reflect:!1,useDefault:!1,hasChanged:za};Symbol.metadata??=Symbol("metadata"),Or.litPropertyMetadata??=new WeakMap;var tt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=Fa){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(e,n),!n.noAccessor){let r=Symbol(),o=this.getPropertyDescriptor(e,r,n);o!==void 0&&Af(this.prototype,e,o)}}static getPropertyDescriptor(e,n,r){let{get:o,set:i}=Ff(this.prototype,e)??{get(){return this[n]},set(s){this[n]=s}};return{get:o,set(s){let a=o?.call(this);i?.call(this,s),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Fa}static _$Ei(){if(this.hasOwnProperty(Dn("elementProperties")))return;let e=Tf(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Dn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Dn("properties"))){let n=this.properties,r=[...zf(n),...Pf(n)];for(let o of r)this.createProperty(o,n[o])}let e=this[Symbol.metadata];if(e!==null){let n=litPropertyMetadata.get(e);if(n!==void 0)for(let[r,o]of n)this.elementProperties.set(r,o)}this._$Eh=new Map;for(let[n,r]of this.elementProperties){let o=this._$Eu(n,r);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let n=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let o of r)n.unshift(Jo(o))}else e!==void 0&&n.push(Jo(e));return n}static _$Eu(e,n){let r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,n=this.constructor.elementProperties;for(let r of n.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ra(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$ET(e,n){let r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(o!==void 0&&r.reflect===!0){let i=(r.converter?.toAttribute!==void 0?r.converter:ei).toAttribute(n,r.type);this._$Em=e,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,n){let r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let i=r.getPropertyOptions(o),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:ei;this._$Em=o;let a=s.fromAttribute(n,i.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,n,r,o=!1,i){if(e!==void 0){let s=this.constructor;if(o===!1&&(i=this[e]),r??=s.getPropertyOptions(e),!((r.hasChanged??za)(i,n)||r.useDefault&&r.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,r))))return;this.C(e,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,n,{useDefault:r,reflect:o,wrapped:i},s){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??n??this[e]),i!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(n=void 0),this._$AL.set(e,n)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[o,i]of r){let{wrapped:s}=i,a=this[o];s!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,i,a)}}let e=!1,n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(n)}willUpdate(e){}_$AE(e){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(e){}firstUpdated(e){}};tt.elementStyles=[],tt.shadowRootOptions={mode:"open"},tt[Dn("elementProperties")]=new Map,tt[Dn("finalized")]=new Map,Df?.({ReactiveElement:tt}),(Or.reactiveElementVersions??=[]).push("2.1.2");var ai=globalThis,Pa=t=>t,Dr=ai.trustedTypes,Ta=Dr?Dr.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ca="$lit$",ht=`lit$${Math.random().toFixed(9).slice(2)}$`,Wa="?"+ht,If=`<${Wa}>`,Rt=document,Hn=()=>Rt.createComment(""),Ln=t=>t===null||typeof t!="object"&&typeof t!="function",li=Array.isArray,Hf=t=>li(t)||typeof t?.[Symbol.iterator]=="function",ti=`[ 	
\f\r]`,In=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Oa=/-->/g,Da=/>/g,Mt=RegExp(`>|${ti}(?:([^\\s"'>=/]+)(${ti}*=${ti}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ia=/'/g,Ha=/"/g,Ba=/^(?:script|style|textarea|title)$/i,ci=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),m=ci(1),S=ci(2),Wy=ci(3),nt=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),La=new WeakMap,Et=Rt.createTreeWalker(Rt,129);function Va(t,e){if(!li(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ta!==void 0?Ta.createHTML(e):e}var Lf=(t,e)=>{let n=t.length-1,r=[],o,i=e===2?"<svg>":e===3?"<math>":"",s=In;for(let a=0;a<n;a++){let l=t[a],c,u,h=-1,d=0;for(;d<l.length&&(s.lastIndex=d,u=s.exec(l),u!==null);)d=s.lastIndex,s===In?u[1]==="!--"?s=Oa:u[1]!==void 0?s=Da:u[2]!==void 0?(Ba.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=Mt):u[3]!==void 0&&(s=Mt):s===Mt?u[0]===">"?(s=o??In,h=-1):u[1]===void 0?h=-2:(h=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?Mt:u[3]==='"'?Ha:Ia):s===Ha||s===Ia?s=Mt:s===Oa||s===Da?s=In:(s=Mt,o=void 0);let p=s===Mt&&t[a+1].startsWith("/>")?" ":"";i+=s===In?l+If:h>=0?(r.push(c),l.slice(0,h)+Ca+l.slice(h)+ht+p):l+ht+(h===-2?a:p)}return[Va(t,i+(t[n]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},Cn=class t{constructor({strings:e,_$litType$:n},r){let o;this.parts=[];let i=0,s=0,a=e.length-1,l=this.parts,[c,u]=Lf(e,n);if(this.el=t.createElement(c,r),Et.currentNode=this.el.content,n===2||n===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=Et.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let h of o.getAttributeNames())if(h.endsWith(Ca)){let d=u[s++],p=o.getAttribute(h).split(ht),f=/([.?@])?(.*)/.exec(d);l.push({type:1,index:i,name:f[2],strings:p,ctor:f[1]==="."?ri:f[1]==="?"?oi:f[1]==="@"?ii:jt}),o.removeAttribute(h)}else h.startsWith(ht)&&(l.push({type:6,index:i}),o.removeAttribute(h));if(Ba.test(o.tagName)){let h=o.textContent.split(ht),d=h.length-1;if(d>0){o.textContent=Dr?Dr.emptyScript:"";for(let p=0;p<d;p++)o.append(h[p],Hn()),Et.nextNode(),l.push({type:2,index:++i});o.append(h[d],Hn())}}}else if(o.nodeType===8)if(o.data===Wa)l.push({type:2,index:i});else{let h=-1;for(;(h=o.data.indexOf(ht,h+1))!==-1;)l.push({type:7,index:i}),h+=ht.length-1}i++}}static createElement(e,n){let r=Rt.createElement("template");return r.innerHTML=e,r}};function Ut(t,e,n=t,r){if(e===nt)return e;let o=r!==void 0?n._$Co?.[r]:n._$Cl,i=Ln(e)?void 0:e._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(t),o._$AT(t,n,r)),r!==void 0?(n._$Co??=[])[r]=o:n._$Cl=o),o!==void 0&&(e=Ut(t,o._$AS(t,e.values),o,r)),e}var ni=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:n},parts:r}=this._$AD,o=(e?.creationScope??Rt).importNode(n,!0);Et.currentNode=o;let i=Et.nextNode(),s=0,a=0,l=r[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new Wn(i,i.nextSibling,this,e):l.type===1?c=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(c=new si(i,this,e)),this._$AV.push(c),l=r[++a]}s!==l?.index&&(i=Et.nextNode(),s++)}return Et.currentNode=Rt,o}p(e){let n=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},Wn=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,n,r,o){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,n=this._$AM;return n!==void 0&&e?.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Ut(this,e,n),Ln(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==nt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Hf(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==g&&Ln(this._$AH)?this._$AA.nextSibling.data=e:this.T(Rt.createTextNode(e)),this._$AH=e}$(e){let{values:n,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Cn.createElement(Va(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(n);else{let i=new ni(o,this),s=i.u(this.options);i.p(n),this.T(s),this._$AH=i}}_$AC(e){let n=La.get(e.strings);return n===void 0&&La.set(e.strings,n=new Cn(e)),n}k(e){li(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,o=0;for(let i of e)o===n.length?n.push(r=new t(this.O(Hn()),this.O(Hn()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(e=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);e!==this._$AB;){let r=Pa(e).nextSibling;Pa(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},jt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,r,o,i){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=g}_$AI(e,n=this,r,o){let i=this.strings,s=!1;if(i===void 0)e=Ut(this,e,n,0),s=!Ln(e)||e!==this._$AH&&e!==nt,s&&(this._$AH=e);else{let a=e,l,c;for(e=i[0],l=0;l<i.length-1;l++)c=Ut(this,a[r+l],n,l),c===nt&&(c=this._$AH[l]),s||=!Ln(c)||c!==this._$AH[l],c===g?e=g:e!==g&&(e+=(c??"")+i[l+1]),this._$AH[l]=c}s&&!o&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ri=class extends jt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}},oi=class extends jt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}},ii=class extends jt{constructor(e,n,r,o,i){super(e,n,r,o,i),this.type=5}_$AI(e,n=this){if((e=Ut(this,e,n,0)??g)===nt)return;let r=this._$AH,o=e===g&&r!==g||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==g&&(r===g||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},si=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Ut(this,e)}};var Cf=ai.litHtmlPolyfillSupport;Cf?.(Cn,Wn),(ai.litHtmlVersions??=[]).push("3.3.3");var Na=(t,e,n)=>{let r=n?.renderBefore??e,o=r._$litPart$;if(o===void 0){let i=n?.renderBefore??null;r._$litPart$=o=new Wn(e.insertBefore(Hn(),i),i,void 0,n??{})}return o._$AI(t),o};var ui=globalThis,re=class extends tt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Na(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return nt}};re._$litElement$=!0,re.finalized=!0,ui.litElementHydrateSupport?.({LitElement:re});var Wf=ui.litElementPolyfillSupport;Wf?.({LitElement:re});(ui.litElementVersions??=[]).push("4.2.2");var rt=(t,e,n={})=>t.callWS({type:`nextfloor/${e}`,...n});async function Ir(t,e){return(await rt(t,"image/get",{image_id:e})).data}async function Zt(t,e,n){await rt(t,"image/set",{image_id:e,data:n})}async function Ka(t){return(await rt(t,"history/list")).snapshots}async function Ga(t){await rt(t,"history/snapshot")}async function Ua(t,e){return(await rt(t,"history/restore",{snapshot_id:e})).revision}var Bn=(t,e)=>rt(t,"packs/import",{pack:e});async function ja(t,e){await rt(t,"packs/remove",{pack_id:e})}var Za=t=>rt(t,"backup/export"),qa=(t,e,n)=>rt(t,"backup/import",{building:e,packs:n});var di=t=>t.slice(0,t.indexOf(".")),Bf={light:"light",switch:"switch",input_boolean:"switch",valve:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",event:"sensor",scene:"scene",script:"script"},U=t=>Bf[di(t)]??null,hi=["light","cover","climate","media","switch","fan","lock","binary","sensor","scene","script"];var Ya=new Set(["light","switch","fan"]),qt=t=>t!==null&&t!=="scene"&&t!=="script",pt=t=>!t||t.state==="unavailable"||t.state==="unknown"&&!t.entity_id.startsWith("event.");function V(t,e,n){let r=String(t?.states[e]?.attributes.friendly_name??t?.entities?.[e]?.name??e);if(!n||r.length<=n.length+1||!r.toLowerCase().startsWith(`${n.toLowerCase()} `))return r;let o=r.slice(n.length+1);return o[0].toUpperCase()+o.slice(1)}var Xa=t=>!!t&&t.entity_id.startsWith("sensor.")&&t.attributes.device_class==="enum";function Hr(t,e,n=null){if(t==="light"&&n==="floor")return 1.95;if(t==="light"&&n==="table")return 1.25;if(t==="light"&&n==="wall")return 1.95;switch(t){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var tl=[],Lr=new Map,Vf=0,ae=(t,e)=>`pack:${t}:${e}`,ot=t=>t.startsWith("pack:");function pi(t){tl=t,Lr=new Map;for(let e of t)for(let n of e.items)Lr.set(ae(e.id,n.id),n);Vf+=1}var fi=()=>tl;var Nf={};function K(t){if(!ot(t))return;let e=Lr.get(t);if(e)return e;let[,n,...r]=t.split(":"),o=Nf[n];return o?Lr.get(ae(o,r.join(":"))):void 0}var Kf=.22;function Qa(t,e,n,r){let o=Math.min(Kf,n/3);if(r<=o*2.4||Math.abs(r-n)<1e-6)return e*(r/n)+(t-e)*(r/n);let i=e*(r/n),s=t-e;return s<=o?i+s:s>=n-o?i+r-(n-s):i+o+(s-o)*(r-2*o)/(n-2*o)}function Vn(t,e,n,r,o){return[Qa(t*r,n*r,r,o)/o,Qa(e*r,n*r,r,o)/o]}var Ja=new WeakMap;function nl(t,e,n,r){let[o,i,s]=t.size;if(t.vehicle||t.stretch||Math.abs(e-o)<1e-4&&Math.abs(n-i)<1e-4&&Math.abs(r-s)<1e-4)return t.parts;let a=`${e.toFixed(4)}|${n.toFixed(4)}|${r.toFixed(4)}`,l=Ja.get(t),c=l?.get(a);if(c)return c;let u=t.parts.map(h=>{if(h.shape==="sweep")return h;let[d,p]=Vn(h.x-h.w/2,h.x+h.w/2,-.5,o,e),[f,_]=Vn(h.z-h.d/2,h.z+h.d/2,-.5,i,n),[y,b]=Vn(h.y,h.y+h.h,0,s,r);if(h.rot)return{...h,x:(d+p)/2,z:(f+_)/2,w:h.w*o/e,d:h.d*i/n,y,h:b-y};let v={...h,x:(d+p)/2,z:(f+_)/2,w:p-d,d:_-f,y,h:b-y};if(h.shape==="loft"){let[w,k,x,E]=[h.tx??h.x,h.tz??h.z,h.tw??h.w,h.td??h.d],[A,F]=Vn(w-x/2,w+x/2,-.5,o,e),[P,I]=Vn(k-E/2,k+E/2,-.5,i,n);Object.assign(v,{tx:(A+F)/2,tz:(P+I)/2,tw:F-A,td:I-P})}return v});return l||Ja.set(t,l=new Map),l.size>32&&l.clear(),l.set(a,u),u}var mi=t=>!!t?.parts.some(e=>e.move);var rl=t=>K(t)?.parts.find(e=>e.screen),el=.06;function ol(t){let e=K(t);if(!e)return!1;let[n,r,o]=e.size;return e.parts.filter(i=>i.screen).some(i=>{let[s,a]=[i.w*n,i.d*r,i.h*o].sort((l,c)=>c-l);return a>=el&&s>=el})}function Ge(t){return Ce[t]??K(t)?.size??[.6,.6,.8]}function ft(t){let e=K(t);return dl.has(t)||!!e?.electric||!!e?.light||!!e?.climate}var il=t=>!!K(t)?.parts.some(e=>e.picture),Yt=t=>!!K(t)?.climate;function sl(t,e){return t.name[e.split("-")[0]]??t.name.en??Object.values(t.name)[0]??t.id}var Gf={wohnen:"Living & Pets",kino:"Home Cinema & Gaming",kueche:"Kitchen Extras",bad:"Bathroom Extras",schlafen:"Bedroom & Kids",technik:"Office & Homelab",energie:"Energy & Building Services",garten:"Garden & Terrace (older)",fitness:"Fitness (older)",fahrzeuge:"Vehicles",ikea:"IKEA sizes",treppen:"Stairs & railings",ausbau:"Architecture & fit-out",werkstatt:"Garage & workshop",a_wohnzimmer:"Living room",a_schlafzimmer:"Bedroom",a_kueche:"Kitchen",a_bad:"Bathroom",a_kinderzimmer:"Kids' room",a_buero:"Office & gaming",a_fitness:"Fitness",a_haustiere:"Pets",a_garten:"Garden & patio",a_kino:"Home cinema & hi-fi",a_smart:"Smart home & tech",a_haustechnik:"Utility & building services",a_saison:"Season & decoration",a_smart2:"Smart home 2",a_haustechnik2:"Building services 2",a_wellness:"Wellness",a_garten2:"Garden 2",a_kueche2:"Kitchen 2",a_fahrzeuge2:"Vehicles 2",a_aussenkueche:"Outdoor kitchen & terrace",a_werkstatt2:"Workshop 2",a_japandi:"Japandi & Scandi",a_loft:"Loft & industrial",a_gruen:"Indoor greenery",a_musik:"Music & studio",a_bilder:"Pictures & frames"};function al(t,e){if(e.split("-")[0]==="de")return t.name;let n=/^nextfloor\.(.+)$/.exec(t.id)?.[1];return n&&Gf[n]||t.name}function Xt(t,e){if(e.mount_y!=null)return e.mount_y;if(e.type==="lamp_wall")return ll;if(e.type==="led_strip")return Math.max(0,Ue(t,e.x,e.z)-.04-Math.max(.02,e.h));let n=K(e.type);if(!n)return cl(e);switch(n.mount){case"surface":return ul(t,e.x,e.z);case"wall":return n.wall_y??1;case"ceiling":return Math.max(0,Cr(t,e)-e.h);default:return 0}}function gi(t){if(t==="plant")return"plant";let e=K(t);return e?e.household?e.household:/monstera|plant|herb_garden|flower_pots|bonsai|ficus|cactus|kaktus/.test(e.id)?"plant":null:null}var hl=["turn","slide","top"],pl=["always","active","no_power","never"],fl=["gable","hip","halfhip","pyramid","mansard","pent","flat","parapet"],Wr=["navigate","more_info","service","fire_dom_event"];function Br(t,e,n){return t?e?!!n.lock_plan:!!t.locked:!1}var ml=["rain","snow","fog","clouds","lightning","sky"],gl=["rain","snow","clouds","lightning","sky"],_l=["lawn","terrace","path","driveway","pool","bed","wild","hedge","fence","pergola"],_i={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2};function bi(t){return t==="hedge"||t==="fence"||t==="pergola"}var bl=["x","-x","z","-z"];function Uf(t,e,n){let r=t.slope??0;if(!r||t.type==="pool")return 0;let o=t.slope_dir??"x",i=(c,u)=>o==="x"?c:o==="-x"?-c:o==="z"?u:-u,s=1/0,a=-1/0;for(let[c,u]of t.points){let h=i(c,u);s=Math.min(s,h),a=Math.max(a,h)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(i(e,n)-s)/(a-s)));return r*l}function jf(t,e,n,r){return yl(t)+(e.offset??0)+_i[e.type]-Uf(e,n,r)}function yl(t){return t.elevation>.3?0:-.2}function wl(t,e,n){let r=(t.outdoor??[]).filter(i=>!bi(i.type)&&i.type!=="pool"&&C([e,n],i.points)),o=[...r].reverse().find(i=>i.cut)??r[0];return o?jf(t,o,e,n):yl(t)}var vl=t=>t.cut??t.type==="pool",kl=30,xl={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null},$l=["wood","oak","tiles","carpet","stone","concrete"],Sl={type:"none",pitch:35,overhang:.4},Ml="#d6cfc2",Vr="#e8e3da",El={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Sl}};function Nr(){return{version:1,floors:[],settings:{...El},energy:{...xl},presence:[]}}function At(t,e,n){return{id:t,name:e,elevation:n,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null,outdoor:[],walls:[],ha_floor:null}}var Zf=2.75;function Rl(t,e){if(e!=null&&Number.isFinite(e))return Math.round(e*Zf*100)/100;let n=t.reduce((r,o)=>!r||o.elevation>r.elevation?o:r,null);return n?Math.round((n.elevation+n.height+.25)*100)/100:0}function Al(t,e,n){let r=t.rooms.flatMap(a=>a.points.map(l=>l[0])),o=t.rooms.flatMap(a=>a.points.map(l=>l[1])),i=r.length?Math.ceil(Math.max(...r))+1:0,s=o.length?Math.floor(Math.min(...o)):0;return e.map((a,l)=>{let c=i+l%3*4.5,u=s+Math.floor(l/3)*3.5;return{id:n(),name:a.name,area_id:a.area_id,points:[[c,u],[c+4,u],[c+4,u+3],[c,u+3]],floor_material:"wood"}})}function Fl(t,e,n,r){let o=t.rotation*Math.PI/180,i=Math.cos(o),s=Math.sin(o),[a,l]=e,c=t.x-a*(t.w/2)*i+l*(t.d/2)*s,u=t.z-a*(t.w/2)*s-l*(t.d/2)*i,h=n[0]-c,d=n[1]-u,p=b=>Math.max(.1,Math.round(b/r)*r),f=p((h*i+d*s)*a),_=p((-h*s+d*i)*l),y=b=>Math.round(b*1e3)/1e3;return{x:y(c+a*(f/2)*i-l*(_/2)*s),z:y(u+a*(f/2)*s+l*(_/2)*i),w:y(f),d:y(_)}}var Kr=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","ceiling_fan","lamp_floor","lamp_table","lamp_wall","led_strip","lamp_uplight","lamp_bollard","lamp_garden","radiator","sofa","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug","table","table_round","chair","bench","corner_bench","bar_stool","kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge","bed","bunk_bed","nightstand","wardrobe","dresser","bathtub","shower","wc","washbasin","washer","dryer","desk","office_chair","tall_cabinet","coat_rack","stairs","robot_vacuum","inverter","home_battery","wallbox","meter","grid_point","parking","fridge_smart","stairwell"],zl={lights:["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","ceiling_fan","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"],living:["sofa","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug"],dining:["table","table_round","chair","bench","corner_bench","bar_stool"],kitchen:["kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge"],sleeping:["bed","bunk_bed","nightstand","wardrobe","dresser"],bath:["bathtub","shower","wc","washbasin","washer","dryer"],work:["desk","worktop","office_chair","tall_cabinet","coat_rack","radiator","stairs","robot_vacuum"],vehicles:["parking"]},Ee=["meter","inverter","home_battery","wallbox","grid_point"],Pl=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","ceiling_fan","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),ll=1.75;function Gr(t){return yi.has(t.type)||["stairs","stairwell","parking"].includes(t.type)?!1:K(t.type)?.mount!=="ceiling"}function le(t){return Pl.has(t)||!!K(t)?.light}var qf=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Tl(t,e,n,r=0){let o=se(t.points),i=o.x1-o.x0-2*r,s=o.z1-o.z0-2*r,a=[];for(let l=0;l<e;l++)for(let c=0;c<n;c++){let u=[Math.round((o.x0+r+i/n*(c+.5))*1e3)/1e3,Math.round((o.z0+r+s/e*(l+.5))*1e3)/1e3];C(u,t.points)&&a.push(u)}return a}function Qt(t,e,n){let r=s=>Math.round(s*1e3)/1e3,[o,i]={right:[1,0],down:[0,1],left:[-1,0],up:[0,-1]}[n];return[r(t[0]+o*e),r(t[1]+i*e)]}function cl(t){switch(t.type){case"home_battery":return t.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-t.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var yi=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","ceiling_fan"]);function Ol(t,e){return t.filter(n=>n.elevation<e.elevation).flatMap(n=>n.rooms.filter(r=>r.points.length>=3&&r.ceiling!=null&&r.ceiling>n.height+.005&&n.elevation+r.ceiling>e.elevation+.05)).map(n=>n.points)}function Ue(t,e,n){let r=t.rooms.find(o=>o.points.length>=3&&C([e,n],o.points));return r?.ceiling!=null&&r.ceiling>0?r.ceiling:t.height}var Cr=(t,e)=>e.ceiling_y!=null&&e.ceiling_y>0?e.ceiling_y:Ue(t,e.x,e.z);function ul(t,e,n){let r=0;for(let o of t.furniture)!(qf.has(o.type)||K(o.type)?.surface)||!C([e,n],$i(o))||(r=Math.max(r,o.h));return r}var dl=new Set([...Pl,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),Ce={sofa:[2.2,.9,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],ceiling_fan:[1.32,1.32,.32],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var wi=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],vi=["standard","bars","glass_wall"],ki=new Set(["interior","front"]);function Jt(t,e){return t.type==="door"?t.style&&wi.includes(t.style)?t.style:e?"front":"interior":t.style&&vi.includes(t.style)?t.style:"standard"}function Dl(t,e,n,r){if(e!=="sidelight"&&e!=="sidelights")return null;let o=e==="sidelights",i=t-.04,s=Math.min(1.05,Math.max(.6,i-(o?.6:.3))),a=(i-s)/(o?2:1),l=r.sidelight_width??a,c=o?r.sidelight_width2??r.sidelight_width??a:0;l=Math.max(.1,l),c=o?Math.max(.1,c):0;let u=i-.5;if(l+c>u){let d=Math.max(0,u)/(l+c);l*=d,c*=d}return o?{panels:[[.02,.02+l],[t-.02-c,t-.02]],x0:.02+l,x1:t-.02-c}:(n?!!r.sidelight_hinge:!r.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:t-.02}:{panels:[[t-.02-l,t-.02]],x0:.02,x1:t-.02-l}}function xi(t){return t==="front"||t==="front_glass"||t==="sidelight"||t==="sidelights"}var en={door:{type:"door",leaves:1,width:.9,sill:0,height:2.05,style:"interior"},front:{type:"door",leaves:1,width:1,sill:0,height:2.1,style:"front"},door_double:{type:"door",leaves:2,width:1.6,sill:0,height:2.05},window:{type:"window",leaves:1,width:1.2,sill:.9,height:1.3},window_double:{type:"window",leaves:2,width:1.6,sill:.9,height:1.3},terrace:{type:"window",leaves:1,width:1,sill:0,height:2.1},terrace_double:{type:"window",leaves:2,width:1.8,sill:0,height:2.1},lift_slide:{type:"window",leaves:1,width:2.4,sill:0,height:2.15,opens:"slide"},garage:{type:"garage",leaves:1,width:2.5,sill:0,height:2.1},glass_wall:{type:"window",leaves:1,width:2,sill:0,height:2.4,style:"glass_wall"}};function tn(t){if(t.type==="garage")return"garage";if(t.type==="window"&&t.style==="glass_wall")return"glass_wall";if(t.type==="window"&&t.opens==="slide"&&t.sill<.1)return"lift_slide";let e=t.leaves===2;return t.type==="door"?!e&&t.style&&xi(t.style)?"front":e?"door_double":"door":t.sill<.1?e?"terrace_double":"terrace":e?"window_double":"window"}function mt(t){t.energy={...xl,...t.energy??{}},t.presence=t.presence??[],t.version=1,t.settings={...El,...t.settings,roof:{...Sl,...t.settings?.roof??{}}},t.floors.forEach((e,n)=>{let r=At(e.id,e.name??`Floor ${n+1}`,e.elevation??n*2.8);for(let o of Object.keys(r))e[o]===void 0&&(e[o]=r[o])});for(let e of t.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(r=>({...r,name:r.name??"",area_id:r.area_id??null,floor_material:r.floor_material??"wood",panel:r.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(r=>({...r,mount:r.mount??null,rotation:r.rotation??0})),e.furniture=e.furniture.map(r=>({...r,entity:r.entity??null,power:r.power??null}));let n=e.placements.filter(r=>r.entity_id.startsWith("light."));if(n.length){let r={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let o of n){let i=r[o.mount??"ceiling"],[s,a,l]=Ce[i],c=`lamp_${o.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,54),u=c,h=1;for(;e.furniture.some(d=>d.id===u);)u=`${c}_${h++}`;e.furniture.push({id:u,type:i,x:o.x,z:o.z,rotation:0,w:s,d:a,h:l,variant:null,entity:o.entity_id,power:null,animations_enabled:o.animations_enabled,effect_animations:structuredClone(o.effect_animations)})}e.placements=e.placements.filter(o=>!o.entity_id.startsWith("light."))}e.openings=e.openings.map(r=>({...r,type:["door","window","garage"].includes(r.type)?r.type:"door",edge:Number.isInteger(r.edge)?r.edge:0,offset:Number.isFinite(r.offset)?r.offset:.5,width:Number.isFinite(r.width)&&r.width>0?r.width:r.type==="garage"?2.5:r.type==="window"?1.2:.9,height:Number.isFinite(r.height)&&r.height>0?r.height:r.type==="window"?1.3:r.type==="garage"?2.1:2.05,sill:Number.isFinite(r.sill)?r.sill:r.type==="window"?.9:0,hinge:r.hinge??"left",leaves:r.leaves??1,swing:r.swing??"in",style:r.style??null,cover:r.cover??null,contact:r.contact??null,contact2:r.contact2??null,tilt:r.tilt??null}))}return Yf(t),t}function Yf(t){let e=(n,r)=>{let o=new Set;for(let i of n)(typeof i.id!="string"||!i.id||o.has(i.id))&&(i.id=L(r)),o.add(i.id)};e(t.floors,"floor");for(let n of t.floors){for(let r of n.rooms)(typeof r.id!="string"||!r.id)&&(r.id=L("room"));e(n.openings,"op"),e(n.furniture,"furn"),e(n.outdoor,"out")}}function L(t){return`${t}_${Math.random().toString(36).slice(2,10)}`}function he(t){let e=0;for(let n=0;n<t.length;n++){let[r,o]=t[n],[i,s]=t[(n+1)%t.length];e+=r*s-i*o}return e/2}function Re(t){return Math.abs(he(t))}function ke(t){let e=he(t);if(Math.abs(e)<1e-9){let o=t.length||1;return[t.reduce((i,s)=>i+s[0],0)/o,t.reduce((i,s)=>i+s[1],0)/o]}let n=0,r=0;for(let o=0;o<t.length;o++){let[i,s]=t[o],[a,l]=t[(o+1)%t.length],c=i*l-a*s;n+=(i+a)*c,r+=(s+l)*c}return[n/(6*e),r/(6*e)]}function nn(t){if(t.length!==4)return!1;for(let e=0;e<4;e++){let[n,r]=t[e],[o,i]=t[(e+1)%4];if(Math.abs(n-o)>1e-6&&Math.abs(r-i)>1e-6)return!1}return!0}function se(t){let e=1/0,n=1/0,r=-1/0,o=-1/0;for(let[i,s]of t)e=Math.min(e,i),n=Math.min(n,s),r=Math.max(r,i),o=Math.max(o,s);return{x0:e,z0:n,x1:r,z1:o}}function $i(t){let e=t.rotation*Math.PI/180,n=Math.cos(e),r=Math.sin(e),o=t.w/2,i=t.d/2;return[[-o,-i],[o,-i],[o,i],[-o,i]].map(([s,a])=>[t.x+s*n-a*r,t.z+s*r+a*n])}function C(t,e){let n=!1;for(let r=0,o=e.length-1;r<e.length;o=r++){let[i,s]=e[r],[a,l]=e[o];s>t[1]!=l>t[1]&&t[0]<(a-i)*(t[1]-s)/(l-s)+i&&(n=!n)}return n}var Ur={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",ceiling_fan:"fan",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var Si=t=>/^(https:\/\/|\/local\/|\/hacsfiles\/)\S+\.m?js(\?\S*)?$/i.test(t.trim());var Qf=globalThis,Hl=Qf.__nextfloorPluginStore??={plugins:new Map,listeners:new Set},Mi=Hl.plugins,Il=Hl.listeners;var Jf=5;function Ll(t,e){t.errors.length<Jf&&t.errors.push(e instanceof Error?e.message:String(e))}function jr(t){return Il.add(t),()=>Il.delete(t)}var Ei=()=>[...Mi.values()].map(t=>t.status),Cl=()=>[...Mi.values()].flatMap(t=>Object.keys(t.plugin.lightAnimations??{}));function*Zr(t,e){for(let{plugin:n,status:r}of Mi.values())for(let o of n.devices??[]){let i=!1;try{i=o.match(t,e)}catch(s){Ll(r,s)}i&&(yield{device:o,status:r})}}function qr(t,e){for(let{device:n}of Zr(t,e))return n.kind??"sensor";return null}function Wl(t,e){let n=t.states[e];if(!n)return null;let r=em({hass:t,entityId:e,state:n})?.icon?.trim();return r&&/^mdi:[a-z0-9-]+$/i.test(r)?r:null}function em(t){let e=null;for(let{device:n,status:r}of Zr(t.entityId,t.state))if(n.marker)try{let o=n.marker(t);if(!o)continue;e={...e??{}},typeof o.icon=="string"&&o.icon&&(e.icon=o.icon),typeof o.text=="string"&&(e.text=o.text.slice(0,60)),typeof o.active=="boolean"&&(e.active=o.active)}catch(o){Ll(r,o)}return e}function Yr(t,e){return t?typeof t=="string"?t:t[e]??t[e.split("-")[0]]??t.en??Object.values(t)[0]??"":""}function Bl(t,e){let n=[];for(let{device:r,status:o}of Zr(t,e))r.settings?.length&&n.push({pluginId:o.id,name:o.name,settings:r.settings});return n}function Vl(t,e){let n={};for(let r of t??[]){let o=e?.[r.key],i=r.type==="number"?typeof o=="number"&&Number.isFinite(o):r.type==="boolean"?typeof o=="boolean":typeof o=="string"&&(r.options??[]).some(([s])=>s===o);n[r.key]=i?o:r.default}return n}function Nl(t,e){for(let{device:n}of Zr(t,e))if(n.floorWedge)return!0;return!1}var tm=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),nm=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),rm=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),om=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function rn(t,e){let n=t.entities?.[e];return n&&(n.area_id||(n.device_id?t.devices?.[n.device_id]?.area_id:null))||null}var Gl=(t,e)=>{let n=t.entities?.[e];return!!(n?.hidden||n?.entity_category)},je=(t,e)=>U(e)??qr(e,t.states[e]);function Kl(t,e){let n=t.states[e];if(!n||Gl(t,e))return!1;if(qr(e,n)!==null)return!0;let r=U(e);if(!r)return!1;let o=n.attributes.device_class;return e.startsWith("event.")?!o||o==="button"||o==="doorbell":r==="sensor"?o?tm.has(o):nm.has(String(n.attributes.unit_of_measurement??"")):r==="binary"?o?rm.has(o):!!t.entities?.[e]?.area_id:!0}function im(t,e){let n=t.states[e];return U(e)!=="sensor"||!n?.attributes.unit_of_measurement||Gl(t,e)||om.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||pt(n)}var Xr=(t,e)=>e.startsWith("sensor.")&&t.states[e]?.attributes.device_class==="power",Ri=null;jr(()=>Ri=null);function Ai(t,e){let n=t.get(e);return n||t.set(e,n=[]),n}function sm(t){let e=new Map,n=new Map,r=new Map,o=new Map,i=[],s=u=>{(Kl(t,u)||im(t,u))&&qt(je(t,u))&&i.push(u)};for(let[u,h]of Object.entries(t.entities??{})){let d=h.device_id;d&&h.area_id&&(o.get(d)??o.set(d,new Set).get(d)).add(h.area_id),d&&Xr(t,u)&&Ai(n,d).push(u),d&&!h.hidden&&!h.entity_category&&(r.get(d)??r.set(d,new Set).get(d)).add(di(u));let p=rn(t,u);p===null?s(u):Kl(t,u)&&Ai(e,p).push(u)}if(t.entities)for(let u of Object.keys(t.states))t.entities[u]||s(u);let a=hi.indexOf("binary")-.5,l=u=>{let h=U(u),d=h?hi.indexOf(h):a;return d>a&&qr(u,t.states[u])!==null?a:d};i.sort((u,h)=>l(u)-l(h)||V(t,u).localeCompare(V(t,h)));for(let[u,h]of e){let d=t.areas?.[u]?.name;h.sort((p,f)=>l(p)-l(f)||V(t,p,d).localeCompare(V(t,f,d)))}let c=new Set;for(let[u,h]of o)h.size>1&&c.add(u);return{entities:t.entities,devices:t.devices,states:t.states,stateCount:Object.keys(t.states).length,byArea:e,powerByDevice:n,withoutArea:i,domainsByDevice:r,hubs:c}}function on(t){let e=Ri;return e&&e.entities===t.entities&&e.devices===t.devices&&(e.states===t.states||(e.states=t.states,Object.keys(t.states).length===e.stateCount))?e:Ri=sm(t)}function _e(t,e){let n=Fi(t,e.area_id);return e.sub_areas?.length?[...new Set([...n,...e.sub_areas.flatMap(r=>Fi(t,r))])]:n}function Fi(t,e){return!e||!t.entities?[]:on(t).byArea.get(e)??[]}function Ul(t,e){if(!t.entities)return[];let n=[];for(let[r,o]of on(t).byArea){let i=o.filter(s=>qt(je(t,s)));r!==e&&i.length>0&&n.push({areaId:r,name:t.areas?.[r]?.name??r,ids:i})}return n.sort((r,o)=>r.name.localeCompare(o.name))}var jl=t=>t.entities?on(t).withoutArea:[],Zl=(t,e)=>!!t.entities&&on(t).hubs.has(e),zi=(t,e)=>t.entities?on(t).powerByDevice.get(e)??[]:[];function Qr(t,e){let n=new Map;for(let o of e)Ai(n,t.entities?.[o]?.device_id??`entity:${o}`).push(o);let r=new Map(e.map((o,i)=>[o,i]));return[...n.values()].map(o=>{let i=o.find(s=>!t.entities?.[s]?.name)??o[0];return{primary:i,others:o.filter(s=>s!==i)}}).sort((o,i)=>r.get(o.primary)-r.get(i.primary))}var Pi=(t,e)=>Qr(t,e).map(n=>n.primary),Ti={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},am=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),lm=["vorlauf","r(\xFC|ue)cklauf","flow","return","d(\xFC|ue)se","nozzle","hotend","extruder","druckbett","heatbed","(^|[^a-z])bed($|[^a-z])","chamber","cpu","gpu","chip","soc","akku","batter","wasser","water","kessel","boiler","au(\xDF|ss)en","outdoor","outside","abgas","exhaust","sole","brine","verdampfer","kondensat","verdichter","compressor","motor","k(\xFC|ue)hl","freezer","fridge","gefrier"],cm=new RegExp(`(${lm.join("|")})`,"i");function Oi(t,e){let n=t.entities?.[e]?.device_id,r=n&&!Zl(t,n)?on(t).domainsByDevice.get(n):void 0;return r&&[...r].some(o=>am.has(o))?!1:!cm.test(`${e} ${t.states[e]?.attributes.friendly_name??""}`)}function ql(t,e,n,r){let o=n.climate?.[r];if(o==="none")return[];if(o)return t.states[o]?[o]:[];let i=(e?.placements??[]).filter(c=>c.entity_id.startsWith("sensor.")),s=i.filter(c=>C([c.x,c.z],n.points)).map(c=>c.entity_id),a=new Set(i.filter(c=>!C([c.x,c.z],n.points)).map(c=>c.entity_id));return[...new Set([..._e(t,n).filter(c=>!a.has(c)),...s])].filter(c=>c.startsWith("sensor.")&&t.states[c]?.attributes.device_class===Ti[r]&&Oi(t,c))}var um=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),dm=new Set(["garage","gate"]),hm=new Set(["window","opening"]);function Nn(t,e,n=!1){let r=new Map;return t.forEach((o,i)=>{let s=n&&e.length===1?e[0]:e[i];s&&r.set(o.id,s)}),r}var Yl=(t,e)=>t==="none"?null:t??e??null,sn=t=>t&&t!=="none"?t:null;function Di(t,e){let n=new Map;for(let r of e)for(let o of r.rooms){let i=r.openings.filter(_=>_.room_id===o.id).sort((_,y)=>_.edge-y.edge||_.offset-y.offset);if(i.length===0)continue;let s=_e(t,o),a=_=>t.states[_]?.attributes.device_class,l=_=>s.filter(y=>U(y)==="binary"&&_(a(y)??"")),c=_=>i.filter(y=>y.type===_),u=Nn(c("window"),s.filter(_=>U(_)==="cover"&&um.has(a(_))),!0),h=Nn(c("window"),l(_=>hm.has(_))),d=Nn(c("door"),l(_=>_==="door")),p=Nn(c("garage"),s.filter(_=>U(_)==="cover"&&dm.has(a(_)??""))),f=Nn(c("garage"),l(_=>_==="garage_door"));for(let _ of i){let y=_.type==="window"?u:_.type==="garage"?p:null,b=_.type==="window"?h:_.type==="garage"?f:d,v=_.leaves===2;n.set(_.id,{cover:Yl(_.cover,y?.get(_.id)),contact:_.sensor==="handle"&&_.contact==null?null:Yl(_.contact,b.get(_.id)),tilt:_.tilt==="none"?null:_.tilt,contact2:v?sn(_.contact2):null,tilt2:v?sn(_.tilt2):null,position:sn(_.position),positionInverted:!!_.position_inverted,tiltAngle:sn(_.tilt_angle),tiltMax:_.tilt_max??null,tiltOffset:_.tilt_offset??null,tiltInvert:!!_.tilt_invert,shut:!!_.shut,angled:_.type==="door"&&!!_.open_angle,lock:_.type==="door"?sn(_.lock):null,cover2:_.type==="garage"?null:sn(_.cover2)})}}return n}var pm=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function Ii(t){if(!t||pt(t))return null;let e=t.attributes.window_state;for(let n of[typeof e=="string"?e:"",t.state]){let r=n.trim(),o=r&&pm.find(([i])=>i.test(r));if(o)return o[1]}return null}var Xl=/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,Ql=/(kühl|fridge|gefrier|freezer)/i,Jl=/(spülmaschine|geschirrspül|dishwasher)/i,fm=/(kochfeld|herd|induktion|cooktop)/i,mm={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:Xl,tv_wall:Xl,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:Ql,fridge_smart:Ql,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:Jl,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:fm,sink:Jl,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i},ec={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,ceiling_fan:/(ventilator|fan)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i},tc=new Set(["tv_board","tv_wall"]);var Kn=t=>tc.has(t)||!!rl(t),Gn=t=>Kn(t)||t==="desk"||t==="fridge_smart",gm=t=>!!t&&t!=="none";function _m(t,e){if(Xr(t,e))return e;let n=t.entities?.[e]?.device_id;return n?zi(t,n).find(r=>r!==e)??null:null}var bm=(t,e,n)=>t.rooms.find(r=>r.points.length>=3&&C([e,n],r.points));function Jr(t,e,n,r){return t.find(o=>e?.test(n(o)))??(r?t[0]??null:null)}function Ft(t,e){let n=new Map;for(let r of e){let o=new Set([...r.furniture.flatMap(i=>[i.entity,i.power,i.fan_entity]),...r.placements.map(i=>i.entity_id)].filter(gm));for(let i of r.furniture){let s=i.type in ec,a=Yt(i.type),l=s?ec[i.type]:mm[i.type];if(!l&&!a&&i.entity==null&&i.power==null)continue;let c=bm(r,i.x,i.z),u=(c?Pi(t,_e(t,c)):[]).filter(y=>!o.has(y)),h=y=>`${y} ${V(t,y)}`,d=y=>u.filter(b=>U(b)===y),p=i.entity==="none"?null:i.entity??null;if(i.entity==null){if(i.type==="ceiling_fan"){let y=(c?_e(t,c):[]).filter(v=>!o.has(v)),b=new Set(y.filter(v=>U(v)==="fan").map(v=>t.entities?.[v]?.device_id).filter(Boolean));p=y.find(v=>U(v)==="light"&&b.has(t.entities?.[v]?.device_id))??Jr(d("light"),l,h,!1)}else if(s)p=Jr(d("light"),l,h,!0);else if(i.type==="robot_vacuum"){let y=c?.area_id??null;p=Object.keys(t.entities??{}).find(b=>b.startsWith("vacuum.")&&!o.has(b)&&rn(t,b)===y)??null}else if(i.type==="radiator"||a)p=Jr(d("climate"),l,h,!0);else if(Kn(i.type)){let y=d("media");p=y.find(b=>t.states[b]?.attributes.device_class==="tv")??Jr(y,l,h,tc.has(i.type))}else l&&(p=u.find(y=>["switch","media","fan"].includes(U(y)??"")&&l.test(h(y)))??null);p&&o.add(p)}let f=i.power==="none"?null:i.power??null;i.power==null&&(f=p?_m(t,p):null,!f&&l&&c&&!s&&(f=_e(t,c).find(y=>Xr(t,y)&&!o.has(y)&&l.test(h(y)))??null),f&&o.add(f));let _=null;if(i.type==="ceiling_fan"&&(_=i.fan_entity==="none"?null:i.fan_entity??null,i.fan_entity==null)){let y=(c?_e(t,c):[]).filter(v=>U(v)==="fan"&&!o.has(v)),b=p?t.entities?.[p]?.device_id:void 0;_=(b?y.find(v=>t.entities?.[v]?.device_id===b):void 0)??y[0]??null,_&&o.add(_)}(p||f||_)&&n.set(i.id,{entity:p,power:f,...i.type==="ceiling_fan"?{fan:_}:{}})}}return n}var nc=t=>t==="fridge"||t==="fridge_smart"||/(fridge|freezer|kuehl|gefrier|chest_freezer)/.test(t.slice(t.lastIndexOf(":")+1));function ym(t,e){return Math.min(...e.map((n,r)=>{let o=e[(r+1)%e.length],[i,s]=[o[0]-n[0],o[1]-n[1]],a=Math.min(1,Math.max(0,((t[0]-n[0])*i+(t[1]-n[1])*s)/(i*i+s*s||1)));return Math.hypot(t[0]-n[0]-i*a,t[1]-n[1]-s*a)}))}function oc(t,e,n=[]){let r=t.points;if(r.length<3||e.length===0)return[];let o=r.map(b=>b[0]),i=r.map(b=>b[1]),[s,a,l,c]=[Math.min(...o),Math.max(...o),Math.min(...i),Math.max(...i)],u=Math.min(a-s,c-l),h=Math.max(.1,Math.min(.25,u/8)),d=Math.min(.35,u/5),p=Math.min(.7,u/4),f=ke(r),_=[];for(let b=s+h/2;b<a;b+=h)for(let v=l+h/2;v<c;v+=h){let w=[b,v];if(!C(w,r))continue;let k=ym(w,r);k>=d&&_.push({at:w,wallDistance:k})}_.length===0&&_.push({at:f,wallDistance:0});let y=[...n];return e.map(b=>{let v=U(b)==="light",w=_[0].at,k=-1/0;for(let{at:E,wallDistance:A}of _){let F=y.length?Math.min(...y.map(H=>Math.hypot(E[0]-H[0],E[1]-H[1]))):3,P=Math.hypot(E[0]-f[0],E[1]-f[1]),I=Math.min(F,3)*2;P<p&&!v&&(I-=10),I-=v?P*.35:A*1.2,I>k+1e-9&&(k=I,w=E)}let x=[Math.round(w[0]*100)/100,Math.round(w[1]*100)/100];return y.push(x),{entity_id:b,x:x[0],z:x[1],y:null,mount:null}})}var rc=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/;function ic(t,e,n){if(n==="none")return null;if(n)return n;let r=e?t.entities?.[e]?.device_id:null;return!r||!t.entities?null:Object.values(t.entities).find(i=>i.device_id===r&&i.entity_id.startsWith("sensor.")&&(rc.test(i.translation_key??"")||rc.test(i.entity_id.split(".")[1])))?.entity_id??null}var W=(t,e)=>[t[0]-e[0],t[1]-e[1]],Ze=(t,e)=>[t[0]+e[0],t[1]+e[1]],We=(t,e)=>[t[0]*e,t[1]*e],Y=(t,e)=>t[0]*e[0]+t[1]*e[1],Be=(t,e)=>t[0]*e[1]-t[1]*e[0],de=t=>Math.hypot(t[0],t[1]),Ve=t=>{let e=de(t)||1;return[t[0]/e,t[1]/e]},Hi=t=>[-t[1],t[0]],Li=t=>[t[1],-t[0]];var wm=.05,vm=.2,km=.12;function xm(t){let e=[];return t.forEach((n,r)=>{let o=n.points;if(o.length<3)return;let i=he(o)>=0;o.forEach((s,a)=>{let l=o[(a+1)%o.length],c=de(W(l,s));if(c<.05)return;let u=[(l[0]-s[0])/c,(l[1]-s[1])/c],h=i?[u[1],-u[0]]:[-u[1],u[0]];(u[1]<-1e-9||Math.abs(u[1])<=1e-9&&u[0]<0)&&(u=[-u[0],-u[1]]);let d=[-u[1],u[0]],[p,f]=[Y(s,u),Y(l,u)];e.push({room:r,index:a,dir:u,normal:d,offset:Y(s,d),outside:Y(h,d)>0?1:-1,from:Math.min(p,f),to:Math.max(p,f)})})}),e}function $m(t,e,n){if(t.room===e.room||Math.abs(Be(t.dir,e.dir))>wm||t.outside===e.outside)return null;let r=(e.offset-t.offset)*t.outside;return r>n||r<-km||Math.abs(r)<1e-4||Math.min(t.to,e.to)-Math.max(t.from,e.from)<vm?null:r}var Ci=t=>Math.round(t*1e3)/1e3;function sc(t,e=.6){let n=xm(t),r=n.map((h,d)=>d),o=h=>r[h]===h?h:r[h]=o(r[h]),i=[],s=new Set;for(let h=0;h<n.length;h++)for(let d=h+1;d<n.length;d++){let p=$m(n[h],n[d],e);p!==null&&(i.push(Ci(p)),r[o(h)]=o(d),s.add(h).add(d))}let a=()=>t.map(h=>({...h,points:h.points.map(d=>[d[0],d[1]])}));if(i.length===0)return{rooms:a(),gaps:i};let l=new Map;for(let h of s)l.set(o(h),[...l.get(o(h))??[],h]);let c=t.map(h=>h.points.map(()=>new Map));for(let[h,d]of l){let p=d.reduce((f,_)=>f+n[_].offset,0)/d.length;for(let f of d){let _=n[f],y=[_.normal[0]*(p-_.offset),_.normal[1]*(p-_.offset)];c[_.room][_.index].set(h,y),c[_.room][(_.index+1)%t[_.room].points.length].set(h,y)}}return{rooms:t.map((h,d)=>({...h,points:h.points.map((p,f)=>{let _=[...c[d][f].values()].reduce((y,b)=>[y[0]+b[0],y[1]+b[1]],[p[0],p[1]]);return[Ci(_[0]),Ci(_[1])]})})),gaps:i}}function ac(t){let e=t.filter(n=>n>.04).sort((n,r)=>n-r);return e.length===0?null:Math.min(.5,Math.max(.08,Math.round(e[Math.floor(e.length/2)]*100)/100))}var Sm=.25,lc=t=>Math.round(t*1e3)/1e3,cc=(t,e,n)=>t.rooms.find(r=>r.points.length>=3&&C([e,n],r.points));function Bi(t,e,n,r,o){let i=cc(t,e,n);if(!i)return[r,o];let s=(a,l)=>C([a,l],i.points);return s(r,o)?[r,o]:s(r,n)?[r,n]:s(e,o)?[e,o]:[e,n]}function Mm(t,e,n,r){return t.rooms.some(o=>o.id!==e.id&&o.points.some((i,s)=>{let a=o.points[(s+1)%o.points.length];return Math.abs(Y(W(i,n),r))<.02&&Math.abs(Y(W(a,n),r))<.02}))}var Wi=(t,e)=>Math.abs((t-e+540)%360-180);function Un(t,e,n,r=Sm){let o=cc(t,e.x,e.z);if(!o)return null;let i=o.points,s=he(i)>=0?1:-1,a=null;return i.forEach((l,c)=>{let u=i[(c+1)%i.length],h=de(W(u,l));if(h<.3)return;let d=[(u[0]-l[0])/h,(u[1]-l[1])/h],p=[-d[1]*s,d[0]*s],f=Y(W([e.x,e.z],l),d);if(f<0||f>h)return;let _=Mm(t,o,l,p)?n/2:0,y=Y(W([e.x,e.z],l),p)-_,b=Math.atan2(-p[0],p[1])*180/Math.PI,w=[{rotation:b,extent:e.d/2},{rotation:b+90,extent:e.w/2},{rotation:b-90,extent:e.w/2}].reduce((x,E)=>Wi(e.rotation,E.rotation)<Wi(e.rotation,x.rotation)?E:x);if(Wi(e.rotation,w.rotation)>50)return;let k=y-w.extent;Math.abs(k)>r||a&&Math.abs(k)>=Math.abs(a.gap)||(a={x:lc(e.x-p[0]*k),z:lc(e.z-p[1]*k),rotation:(Math.round(w.rotation)%360+360)%360,gap:k})}),a&&{x:a.x,z:a.z,rotation:a.rotation}}var an=Math.PI/180,Ne=t=>Math.tan(Math.min(80,Math.max(0,t))*an);function Zn(t){return{x0:Math.min(t.x0,t.x1),x1:Math.max(t.x0,t.x1),z0:Math.min(t.z0,t.z1),z1:Math.max(t.z0,t.z1)}}function uc(t){if(!t.rotation)return null;let e=t.rotation*an;return{cx:(t.x0+t.x1)/2,cz:(t.z0+t.z1)/2,c:Math.cos(e),sn:Math.sin(e)}}function dc(t,e){let n=uc(t);if(!n)return e;let[r,o]=[e[0]-n.cx,e[1]-n.cz];return[n.cx+r*n.c-o*n.sn,n.cz+r*n.sn+o*n.c]}function Vi(t,e,n){let r=uc(t);if(!r)return[e,n];let[o,i]=[e-r.cx,n-r.cz];return[r.cx+o*r.c+i*r.sn,r.cz-o*r.sn+i*r.c]}function qn(t,e=0){let{x0:n,x1:r,z0:o,z1:i}=Zn(t);return[[n-e,o-e],[r+e,o-e],[r+e,i+e],[n-e,i+e]].map(s=>dc(t,s))}function fe(t){let{x0:e,x1:n,z0:r,z1:o}=Zn(t),i=s=>dc(t,s);return t.axis==="x"?{u0:e,u1:n,w:o-r,at:(s,a)=>i([s,t.flip?o-a:r+a])}:{u0:r,u1:o,w:n-e,at:(s,a)=>i([t.flip?n-a:e+a,s])}}function Yn(t,e,n){let{x0:r,x1:o,z0:i,z1:s}=Zn(t),[a,l]=Vi(t,e,n);return t.axis==="x"?[a,t.flip?s-l:l-i]:[l,t.flip?o-a:a-r]}var jn=Math.tan(30*an);function Xn(t,e,n,r,o){let i=Math.min(t*.3,r>1e-6?2.4/r:t*.3),s=Math.min(t*.3,o>1e-6?2.4/o:t*.3),a=e+i*r,l=n+s*o,c=Math.min(t-s,Math.max(i,(l-a+jn*(t-s+i))/(2*jn))),u=a+(c-i)*jn;return{vla:i,vlb:s,yla:a,ylb:l,vr:c,rh:u,y:d=>d<=i?e+d*r:d<=c?a+(d-i)*jn:d<=t-s?l+(t-s-d)*jn:n+(t-d)*o}}function xe(t){let e=fe(t).w,[n,r]=[t.eave_a,t.eave_b],[o,i]=[Ne(t.pitch_a),Ne(t.pitch_b)];switch(t.shape){case"flat":case"parapet":return{vr:e/2,rh:n,y:()=>n};case"pent":return{vr:e,rh:n+e*o,y:s=>n+s*o};case"mansard":{let s=Xn(e,n,r,o,i);return{vr:s.vr,rh:s.rh,y:s.y}}default:{let s=o+i>1e-6?Math.min(e,Math.max(0,(r-n+e*i)/(o+i))):e/2;return{vr:s,rh:n+s*o,y:a=>a<=s?n+a*o:r+(e-a)*i}}}}var zt=t=>xe(t).rh;function hc(t){let e=t.heightEnd!==void 0;return{...t,a:t.b,b:t.a,left:t.right,right:t.left,roomLeft:t.roomRight,roomRight:t.roomLeft,height:e?t.heightEnd:t.height,heightEnd:e?t.height:void 0}}function Em(t,e){let n=t.map(r=>({...r}));for(let r of e){let o=n.find(i=>i.room_id===r.room_id&&i.edge===r.edge&&(Math.abs(i.t1-r.t0)<1e-6||Math.abs(r.t1-i.t0)<1e-6));o?(o.t0=Math.min(o.t0,r.t0),o.t1=Math.max(o.t1,r.t1)):n.push({...r})}return n}function Rm(t,e,n){if(t.a===e.b)return!1;let r=Ve(W(n[t.b],n[t.a])),o=Ve(W(n[e.b],n[e.a]));return Math.abs(Be(r,o))>1e-6||Y(r,o)<=0||t.free||e.free||t.heightEnd!==void 0||e.heightEnd!==void 0?!1:t.height===e.height&&t.exterior===e.exterior&&t.roomLeft===e.roomLeft&&t.roomRight===e.roomRight&&Math.abs(t.left-e.left)<=1e-9&&Math.abs(t.right-e.right)<=1e-9}function pc(t,e,n=new Set){let r=t.slice();for(;;){let o=new Map;r.forEach((s,a)=>{for(let l of[s.a,s.b])o.set(l,[...o.get(l)??[],a])});let i=null;for(let[s,a]of o){if(a.length!==2||n.has(s))continue;let l=r[a[0]].b===s?r[a[0]]:hc(r[a[0]]),c=r[a[1]].a===s?r[a[1]]:hc(r[a[1]]);if(!Rm(l,c,e))continue;let u={...l,b:c.b,sources:Em(l.sources,c.sources)};i=[...r.filter((h,d)=>d!==a[0]&&d!==a[1]),u];break}if(!i)return r;r=i}}function fc(t,e){let n=new Map;t.forEach((o,i)=>{let s=Ve(W(e[o.b],e[o.a])),a=[[o.a,{key:`${i}:a`,d:s,left:o.left,right:o.right,angle:Math.atan2(s[1],s[0])}],[o.b,{key:`${i}:b`,d:We(s,-1),left:o.right,right:o.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a)n.set(l,[...n.get(l)??[],c])});let r=new Map;for(let[o,i]of n){let s=e[o];i.sort((l,c)=>l.angle-c.angle);for(let l of i)r.set(l.key,{left:Ze(s,We(Hi(l.d),l.left)),right:Ze(s,We(Li(l.d),l.right))});if(i.length<2)continue;let a=4*Math.max(...i.map(l=>Math.max(l.left,l.right)))+1e-9;i.forEach((l,c)=>{let u=i[(c+1)%i.length],h=Ze(s,We(Hi(l.d),l.left)),d=Ze(s,We(Li(u.d),u.right)),p=Be(l.d,u.d);if(Math.abs(p)<1e-4)return;let f=Ze(h,We(l.d,Be(W(d,h),u.d)/p));de(W(f,s))>a||(r.get(l.key).left=f,r.get(u.key).right=f)})}return r}function mc(t,e){let n=t.filter((r,o)=>de(W(r,t[(o+1)%t.length]))>e);for(;;){if(n.length<=3)return n;let r=n.findIndex((o,i)=>{let s=n[(i+n.length-1)%n.length],a=n[(i+1)%n.length],[l,c]=[W(o,s),W(a,o)];return Math.abs(Be(Ve(l),Ve(c)))<1e-7&&Y(l,c)>0});if(r===-1)return n;n=n.filter((o,i)=>i!==r)}}function Am(t){let e=[];return{points:e,idOf(n){let r=e.findIndex(o=>Math.abs(o[0]-n[0])<=t&&Math.abs(o[1]-n[1])<=t);return r>=0?r:(e.push([n[0],n[1]]),e.length-1)}}}function Fm(t,e){let n=[];for(let r of t){let o=r.points;if(o.length<3||Math.abs(he(o))<1e-6)continue;let i=he(o)>0,s=o.map(a=>e.idOf(a));s.forEach((a,l)=>{let c=s[(l+1)%s.length];a!==c&&n.push(i?{u:a,v:c,room:r.id,edge:l,forward:!0}:{u:c,v:a,room:r.id,edge:l,forward:!1})})}return n}function zm(t,e,n){let r=[];for(let o of t){let[i,s]=[e[o.u],e[o.v]],a=W(s,i),l=de(a),c=We(a,1/l),u=e.map((d,p)=>({id:p,rel:W(d,i)})).filter(({id:d,rel:p})=>d!==o.u&&d!==o.v&&Y(p,c)>n&&Y(p,c)<l-n&&Math.abs(Be(c,p))<=n).map(({id:d,rel:p})=>({t:Y(p,c),id:d})).sort((d,p)=>d.t-p.t),h=[{t:0,id:o.u},...u,{t:l,id:o.v}];for(let d=0;d+1<h.length;d++){let[p,f]=[h[d],h[d+1]];r.push({u:p.id,v:f.id,room:o.room,edge:o.edge,t0:o.forward?p.t:l-f.t,t1:o.forward?f.t:l-p.t,forward:o.forward})}}return r}var gc=t=>({room_id:t.room,edge:t.edge,t0:t.t0,t1:t.t1});function Pm(t,e){let n=new Map(t.map(a=>[a.id,a])),r=new Map;for(let a of e){let l=`${a.room}:${a.edge}`;r.set(l,[...r.get(l)??[],a.t0].sort((c,u)=>c-u))}let o=a=>{let l=n.get(a.room)?.wall_heights?.[a.edge];return Array.isArray(l)?l[(r.get(`${a.room}:${a.edge}`)??[]).indexOf(a.t0)]??null:l},i=a=>{let l=n.get(a.room),[c,u]=[l?.wall_heights?.[a.edge],l?.wall_slopes?.[a.edge]];if(!l||typeof c!="number"||typeof u!="number"||c<=0||u<=0)return null;let[h,d]=[l.points[a.edge],l.points[(a.edge+1)%l.points.length]];return{from:c,to:u,length:Math.hypot(d[0]-h[0],d[1]-h[1])}},s=a=>{let l=i(a);if(!l||l.length<1e-9){let u=o(a);return typeof u=="number"&&u>0?[u,u]:[null,null]}let c=u=>l.from+(l.to-l.from)*u/l.length;return a.forward?[c(a.t0),c(a.t1)]:[c(a.t1),c(a.t0)]};return{heightsOf(a){let[l,c]=[1/0,1/0];for(let h of a){let[d,p]=s(h),[f,_]=h===a[0]?[d,p]:[p,d];f!==null&&(l=Math.min(l,f)),_!==null&&(c=Math.min(c,_))}let u=a.map(h=>n.get(h.room)?.ceiling);if(u.every(h=>typeof h=="number"&&h>0)){let h=Math.max(...u);l===1/0&&(l=h),c===1/0&&(c=h)}return{...l<1/0?{a:l}:{},...c<1/0?{b:c}:{}}},thicknessOf(a){let l=a.map(c=>{let u=n.get(c.room)?.wall_thickness?.[c.edge];return Array.isArray(u)?u[(r.get(`${c.room}:${c.edge}`)??[]).indexOf(c.t0)]:u}).filter(c=>typeof c=="number"&&c>0);return l.length?Math.max(...l):void 0},hasNoWall:a=>a.some(l=>o(l)===0)}}function _c(t){let e=n=>Math.round(n*1e6)/1e6;return t.a===void 0||t.b===void 0?t.a!==void 0?{height:e(t.a)}:t.b!==void 0?{height:e(t.b)}:{}:Math.abs(t.a-t.b)<1e-6?{height:e(t.a)}:{height:e(t.a),heightEnd:e(t.b)}}function Tm(t,e,n,r){let o=Pm(e,t),i=new Map;for(let l of t){let c=l.u<l.v?`${l.u}-${l.v}`:`${l.v}-${l.u}`;i.set(c,[...i.get(c)??[],l])}let s=[],a=[];for(let l of i.values()){let c=l[0],u=l.find(d=>d!==c&&d.u===c.v&&d.v===c.u&&d.room!==c.room);for(let d of l)d!==c&&d!==u&&d.room!==c.room&&r.push(`overlap:${c.room}:${d.room}`);let h=u?[c,u]:[c];if(o.hasNoWall(h)){u&&a.push([c.room,u.room]);continue}if(u){let d=o.thicknessOf(h)??n.interior;s.push({a:c.u,b:c.v,left:d/2,right:d/2,exterior:!1,roomLeft:c.room,roomRight:u.room,sources:h.map(gc),..._c(o.heightsOf(h))})}else s.push({a:c.u,b:c.v,left:0,right:o.thicknessOf(h)??n.exterior,exterior:!0,roomLeft:c.room,roomRight:null,sources:[gc(c)],..._c(o.heightsOf(h))})}return{drafts:s,open:a}}function Om(t,e){let n=r=>Ve(W(e[r.b],e[r.a]));for(let r of t){if(r.exterior||r.free)continue;let o=new Set;for(let s of[r.a,r.b])for(let a of t)!a.exterior||a.free||a.a!==s&&a.b!==s||Math.abs(Be(n(r),n(a)))>1e-6||(a.roomLeft===r.roomLeft?o.add("left"):a.roomLeft===r.roomRight&&o.add("right"));if(o.size!==1)continue;let i=r.left+r.right;[r.left,r.right]=o.has("left")?[0,i]:[i,0]}}var Dm=(t,e)=>{let n=i=>Math.round(i*100),[r,o]=t[0]<e[0]||t[0]===e[0]&&t[1]<=e[1]?[t,e]:[e,t];return`w_${n(r[0])}_${n(r[1])}_${n(o[0])}_${n(o[1])}`};function Ae(t,e,n=[]){let r=e.eps??.005,o=[],i=Am(r),s=Fm(t,i),a=n.filter(b=>Math.hypot(b.b[0]-b.a[0],b.b[1]-b.a[1])>.05),l=a.map(b=>[i.idOf(b.a),i.idOf(b.b)]),c=new Set;for(let b of t){let v=b.points;v.length<3||(b.wall_splits??[]).forEach((w,k)=>{if(!w||k>=v.length)return;let x=v[k],E=W(v[(k+1)%v.length],x),A=de(E);for(let F of w)F>r&&F<A-r&&c.add(i.idOf(Ze(x,We(E,F/A))))})}let u=zm(s,i.points,r),{drafts:h,open:d}=Tm(u,t,e,o);Om(h,i.points);let p=h;a.forEach((b,v)=>{let[w,k]=l[v];if(w===k)return;let x=[(b.a[0]+b.b[0])/2,(b.a[1]+b.b[1])/2],E=t.find(F=>F.points.length>=3&&C(x,F.points))?.id??null,A=(b.thickness??e.interior)/2;p.push({free:b.id,a:w,b:k,left:A,right:A,exterior:!1,roomLeft:E,roomRight:E,sources:[],height:typeof b.height=="number"&&b.height>0?b.height:void 0})});let f=pc(p,i.points,c),_=fc(f,i.points);return{walls:f.map((b,v)=>{let[w,k]=[i.points[b.a],i.points[b.b]],[x,E]=[_.get(`${v}:a`),_.get(`${v}:b`)],A=mc([x.right,E.left,k,E.right,x.left,w],1e-6);return{id:Dm(w,k),a:[w[0],w[1]],b:[k[0],k[1]],left:b.left,right:b.right,exterior:b.exterior,roomLeft:b.roomLeft,roomRight:b.roomRight,sources:b.sources,footprint:A,...b.free?{free:b.free}:{},...b.height!==void 0?{height:b.height}:{},...b.heightEnd!==void 0?{heightEnd:b.heightEnd}:{}}}),warnings:[...new Set(o)],open:d}}function ln(t,e,n){let r=t.points[e];return Ze(r,We(Ve(W(t.points[(e+1)%t.points.length],r)),n))}function it(t,e,n){if(t.wall){let o=n.find(a=>a.id===t.wall);if(!o||Math.hypot(o.b[0]-o.a[0],o.b[1]-o.a[1])<.05)return null;let i=Ve(W(o.b,o.a));return{room:{id:t.room_id,name:"",area_id:null,points:[o.a,o.b,Ze(o.a,[-i[1],i[0]])]},edge:0}}let r=e.find(o=>o.id===t.room_id);return r&&t.edge<r.points.length?{room:r,edge:t.edge}:null}var bc=(t,e)=>Y(W(e,t.a),Ve(W(t.b,t.a)));function eo(t,e,n){if(!e.wall)return Im(t,n.room,n.edge,e.offset);let r=t.find(o=>o.free===e.wall);return r?{wall:r,s:bc(r,ln(n.room,0,e.offset))}:null}function Im(t,e,n,r){for(let o of t)if(o.sources.some(s=>s.room_id===e.id&&s.edge===n&&r>=s.t0-1e-6&&r<=s.t1+1e-6))return{wall:o,s:bc(o,ln(e,n,r))};return null}function yc(t,e){let n=t.points.map(p=>p[0]),r=t.points.map(p=>p[1]);if(t.points.length!==4||new Set(n.map(p=>p.toFixed(3))).size!==2||new Set(r.map(p=>p.toFixed(3))).size!==2)return null;let[o,i,s,a]=[Math.min(...n),Math.max(...n),Math.min(...r),Math.max(...r)],l=p=>Math.max(0,...e.filter(f=>(f.roomLeft===t.id||f.roomRight===t.id)&&p(f)).map(f=>f.roomLeft===t.id?f.left:f.right)),c=(p,f)=>Math.abs(p-f)<.001,u=(p,f,_)=>c(p.a[f],_)&&c(p.b[f],_),h=i-o-l(p=>u(p,0,o))-l(p=>u(p,0,i)),d=a-s-l(p=>u(p,1,s))-l(p=>u(p,1,a));return[Math.round(h*1e3)/1e3,Math.round(d*1e3)/1e3]}var wc=([t,e])=>{let n=Math.hypot(t,e)||1;return[t/n,e/n]};function Hm(t){return t.reduce((e,n,r)=>e+(n[0]*t[(r+1)%t.length][1]-t[(r+1)%t.length][0]*n[1]),0)/2}function vc(t,e){let n=t.length;if(n<3||Math.abs(e)<1e-9)return t.map(([o,i])=>[o,i]);let r=Hm(t)>=0?1:-1;return t.map((o,i)=>{let s=t[(i+n-1)%n],a=t[(i+1)%n],[l,c]=wc([o[0]-s[0],o[1]-s[1]]),[u,h]=wc([a[0]-o[0],a[1]-o[1]]),d=[c*r,-l*r],p=[h*r,-u*r],f=[d[0]+p[0],d[1]+p[1]],_=Math.hypot(f[0],f[1]);if(_<1e-6)return[o[0]+d[0]*e,o[1]+d[1]*e];let y=(f[0]*d[0]+f[1]*d[1])/_,b=Math.min(4,1/Math.max(.25,y));return[o[0]+f[0]/_*e*b,o[1]+f[1]/_*e*b]})}function gt(t){let e=t.map(r=>r[0]),n=t.map(r=>r[1]);return{x0:Math.min(...e),z0:Math.min(...n),x1:Math.max(...e),z1:Math.max(...n)}}function Lm(t){let e=([i,s])=>`${Math.round(i*1e3)}:${Math.round(s*1e3)}`,n=new Map;for(let i of t)for(let s of[i.a,i.b])n.set(e(s),[...n.get(e(s))??[],i]);let r=new Set,o=null;for(let i of t){if(r.has(i))continue;r.add(i);let s=[i.a,i.b],a=i.b;for(;;){let c=(n.get(e(a))??[]).find(u=>!r.has(u));if(!c||(r.add(c),a=e(c.a)===e(a)?c.b:c.a,e(a)===e(s[0])))break;s.push(a)}s.length>=3&&e(a)===e(s[0])&&(!o||Math.abs(Re(s))>Math.abs(Re(o)))&&(o=s)}return o}function Ni(t,e,n,r){let o=Ae(t,{exterior:n,interior:r},e).walls.filter(a=>a.exterior&&!a.free),i=o.length?Lm(o.map(a=>({a:a.a,b:a.b}))):null;if(!i)return null;let s=i.filter((a,l)=>{let c=i[(l+i.length-1)%i.length],u=i[(l+1)%i.length];return Math.abs((a[0]-c[0])*(u[1]-a[1])-(a[1]-c[1])*(u[0]-a[0]))>1e-6});return s.length>=3?vc(s,n):null}function Pt(t,e){let n=fe(t),r=xe(t),o=n.w,[i,s]=[Math.max(0,e.a),Math.max(0,e.b)],a=n.u0-Math.max(0,e.u0),l=n.u1+Math.max(0,e.u1),c=(b,v)=>[b,v,r.y(v)],u=c(a,-i),h=c(l,-i),d=c(l,o+s),p=c(a,o+s),[f,_]=[Ne(t.pitch_a),Ne(t.pitch_b)],y=b=>[b,r.vr,r.rh];if(t.ends&&(t.shape==="gable"||t.shape==="hip"||t.shape==="halfhip")){let b=(n.u1-n.u0)/2,v=Math.min(b,Math.min(r.vr,o-r.vr)||o/2),w=Math.min(r.y(0),r.y(o)),k=w+(r.rh-w)*Math.min(.9,Math.max(.2,t.halfhip??.55)),x=f>1e-6?Math.min(r.vr,(k-t.eave_a)/f):r.vr,E=_>1e-6?Math.max(r.vr,o-(k-t.eave_b)/_):r.vr,A=Math.min(b-.1,(r.rh-k)/Math.max(.2,f)),F=[[0,r.y(0)],[r.vr,r.rh],[o,r.y(o)]],P=[[0,r.y(0)],[x,k],[E,k],[o,r.y(o)]],I=(N,St,zr)=>{if(N==="hip")return{upA:[],upB:[],ridge:y(St===a?n.u0+v*zr:n.u1-v*zr),profile:null};if(N==="halfhip"){let Mf=y(St===a?n.u0+A:n.u1-A);return{upA:[[St,x,k]],upB:[[St,E,k]],ridge:Mf,profile:P}}return{upA:[],upB:[],ridge:y(St),profile:F}},H=I(t.ends[0],a,1),B=I(t.ends[1],l,1),Q=[[u,h,...B.upA,B.ridge,H.ridge,...[...H.upA].reverse()],[H.ridge,B.ridge,...[...B.upB].reverse(),d,p,...H.upB]],ve=[[H.ridge,B.ridge]];for(let[N,St,zr]of[[H,u,p],[B,h,d]])N.profile===null?(Q.push(N===H?[p,u,N.ridge]:[h,d,N.ridge]),ve.push([St,N.ridge],[zr,N.ridge])):N.upA.length&&(Q.push(N===H?[N.upB[0],N.upA[0],N.ridge]:[N.upA[0],N.upB[0],N.ridge]),ve.push([N.upA[0],N.ridge],[N.upB[0],N.ridge]));let et=N=>N.profile===null?[]:N.upA.length?[N.upA[0],N.upB[0]]:[N.ridge],Tn=[u,h,...et(B),d,p,...[...et(H)].reverse()];return{faces:Q,rim:Tn,ridges:ve,gable:F,endProfiles:[H.profile,B.profile]}}switch(t.shape){case"pent":return{faces:[[u,h,d,p]],rim:[u,h,d,p],ridges:[[d,p]],gable:[[0,r.y(0)],[o,r.y(o)]]};case"hip":case"pyramid":{let b=(n.u1-n.u0)/2,v=t.shape==="pyramid"?b:Math.min(b,Math.min(r.vr,o-r.vr)||o/2),w=y(n.u0+v),k=y(n.u1-v);return t.shape==="pyramid"?{faces:[[u,h,w],[h,d,w],[d,p,w],[p,u,w]],rim:[u,h,d,p],ridges:[[u,w],[p,w],[h,w],[d,w]],gable:null}:{faces:[[u,h,k,w],[w,k,d,p],[p,u,w],[h,d,k]],rim:[u,h,d,p],ridges:[[w,k],[u,w],[p,w],[h,k],[d,k]],gable:null}}case"halfhip":{let b=Math.min(r.y(0),r.y(o)),v=b+(r.rh-b)*Math.min(.9,Math.max(.2,t.halfhip??.55)),w=f>1e-6?Math.min(r.vr,(v-t.eave_a)/f):r.vr,k=_>1e-6?Math.max(r.vr,o-(v-t.eave_b)/_):r.vr,x=Math.min((n.u1-n.u0)/2-.1,(r.rh-v)/Math.max(.2,f)),E=y(n.u0+x),A=y(n.u1-x),F=[a,w,v],P=[a,k,v],I=[l,w,v],H=[l,k,v];return{faces:[[u,h,I,A,E,F],[E,A,H,d,p,P],[P,F,E],[I,H,A]],rim:[u,h,I,H,d,p,P,F],ridges:[[E,A],[F,E],[P,E],[I,A],[H,A]],gable:[[0,r.y(0)],[w,v],[k,v],[o,r.y(o)]]}}case"mansard":{let b=Xn(o,t.eave_a,t.eave_b,f,_),v=[a,b.vla,b.yla],w=[l,b.vla,b.yla],k=[a,o-b.vlb,b.ylb],x=[l,o-b.vlb,b.ylb],E=[a,b.vr,b.rh],A=[l,b.vr,b.rh];return{faces:[[u,h,w,v],[v,w,A,E],[E,A,x,k],[k,x,d,p]],rim:[u,h,w,A,x,d,p,k,E,v],ridges:[[E,A],[v,w],[k,x]],gable:[[0,r.y(0)],[b.vla,b.yla],[b.vr,b.rh],[o-b.vlb,b.ylb],[o,r.y(o)]]}}default:{let b=y(a),v=y(l);return{faces:[[u,h,v,b],[b,v,d,p]],rim:[u,h,v,d,p,b],ridges:[[b,v]],gable:[[0,r.y(0)],[r.vr,r.rh],[o,r.y(o)]]}}}}function Qn(t,e,n){let r=null;for(let o of t.faces){if(!C([e,n],o.map(([d,p])=>[d,p])))continue;let[i,s]=o,a=o.slice(2).find(d=>Math.abs((s[0]-i[0])*(d[1]-i[1])-(s[1]-i[1])*(d[0]-i[0]))>1e-9);if(!a)continue;let l=[s[0]-i[0],s[2]-i[2],s[1]-i[1]],c=[a[0]-i[0],a[2]-i[2],a[1]-i[1]],u=[l[1]*c[2]-l[2]*c[1],l[2]*c[0]-l[0]*c[2],l[0]*c[1]-l[1]*c[0]];if(Math.abs(u[1])<1e-9)continue;let h=i[2]-(u[0]*(e-i[0])+u[2]*(n-i[1]))/u[1];r=r===null?h:Math.min(r,h)}return r}function Ki(t,e,n){let r=fe(e),o=t.floors.flatMap(u=>u.rooms.filter(h=>h.points.length>=3&&u.elevation+u.height>e.base+.05)),i=u=>u.some(h=>o.some(d=>C(h,d.points))),s=.35,a=[.15,.5,.85].map(u=>r.u0+(r.u1-r.u0)*u),l=[.15,.5,.85].map(u=>r.w*u),c=u=>u?0:n;return{a:c(i(a.map(u=>r.at(u,-s)))),b:c(i(a.map(u=>r.at(u,r.w+s)))),u0:c(i(l.map(u=>r.at(r.u0-s,u)))),u1:c(i(l.map(u=>r.at(r.u1+s,u))))}}var to=t=>Math.abs((t.x1-t.x0)*(t.z1-t.z0)),kc=t=>t.shape==="flat"||t.shape==="parapet",Tt=t=>Math.round(t*100)/100;function no(t,e){let[n,r]=[(e.x0+e.x1)/2,(e.z0+e.z1)/2];return t.filter(i=>{if(i===e||i.dormer||i.open||kc(i)||to(i)<to(e)*1.5)return!1;let s=Zn(i);return n>=s.x0&&n<=s.x1&&r>=s.z0&&r<=s.z1}).reduce((i,s)=>i===null||to(s)<to(i)?s:i,null)}function Gi(t,e,n,r){let o=fe(t),i=xe(t),s=2,a=Math.max(o.u0+.3,Math.min(o.u1-s-.3,(r??(o.u0+o.u1)/2)-s/2)),[l,c]=e==="a"?[t.eave_a,t.pitch_a]:[t.eave_b,t.pitch_b],u=l+1.4,h=u+s/2*Math.tan(35*an),d=Math.max(.8,Math.min(o.w/2-.2,(h-l)/Math.max(.15,Math.tan(Math.min(80,c)*an)))),[p,f]=e==="a"?[0,d]:[o.w-d,o.w],_=o.at(a,p),y=o.at(a+s,f);return{id:n,x0:Tt(Math.min(_[0],y[0])),z0:Tt(Math.min(_[1],y[1])),x1:Tt(Math.max(_[0],y[0])),z1:Tt(Math.max(_[1],y[1])),shape:"gable",axis:t.axis==="x"?"z":"x",eave_a:Tt(u),eave_b:Tt(u),pitch_a:35,pitch_b:35,base:Tt(i.y(e==="a"?0:o.w)),overhang:.15,dormer:!0}}function Wm(t,e){let n=Pt(t,{u0:0,u1:0,a:0,b:0}),r=xe(t);return o=>{let[i,s]=e.at(o,e.w/2),[a,l]=Yn(t,i,s);return Qn(n,a,l)??r.y(l)}}function Ui(t,e){if(kc(e))return e;let n=fe(e),r=xe(e).rh,o=Wm(t,n),i=o(n.u0)<=o(n.u1),[s,a]=i?[n.u0,n.u1]:[n.u1,n.u0],l=i?1:-1,c=a;for(let d=.5;d<Math.abs(a-s);d+=.05)if(o(s+l*d)>=r-.02){c=s+l*d;break}if(Math.abs(c-a)<.05)return e;let u={...e},h=a===n.u1;return e.axis==="x"?u[h?"x1":"x0"]=c:u[h?"z1":"z0"]=c,u}var ji=.14,xc=t=>t.shape==="flat"||t.shape==="parapet";function Zi(t,e){return!t.open&&Math.min(t.base,t.eave_a,t.eave_b)<e-.05}function qi(t,e,n){let r=Math.max(0,t.settings.roof.overhang??0),o=1e-6,i=[];for(let s of t.settings.roof.sections??[]){if(s.open)continue;let[a,l,c,u]=[Math.min(s.x0,s.x1),Math.max(s.x0,s.x1),Math.min(s.z0,s.z1),Math.max(s.z0,s.z1)],[h,d]=Vi(s,e,n);if(h<a-o||h>l+o||d<c-o||d>u+o||s.points&&s.points.length>=3&&!C([e,n],s.points))continue;let[p,f]=Yn(s,e,n),_=Math.max(0,s.overhang??r),y=xc(s)?null:Qn(Pt(s,{u0:_,u1:_,a:_,b:_}),p,f);i.push((y??xe(s).y(f))-ji)}return i.length?Math.max(...i):null}function Yi(t,e,n){let r=[],o=e+n+ji;for(let i of t.settings.roof.sections??[]){if(i.open||xc(i)||i.shape==="mansard")continue;let s=fe(i),a=xe(i),[l,c]=[Ne(i.pitch_a),Ne(i.pitch_b)],u=[];l>1e-6&&u.push((o-i.eave_a)/l),i.shape==="gable"&&c>1e-6&&u.push(s.w-(o-i.eave_b)/c);for(let h of u)h<=.01||h>=s.w-.01||i.shape==="gable"&&Math.abs(a.y(h)-o)>1e-6||r.push([s.at(s.u0,h),s.at(s.u1,h)])}return r}function Xi(t,e,n,r,o){let i=[];for(let a of[.2,.5,.8])for(let l of[.2,.5,.8])i.push([e+(r-e)*a,n+(o-n)*l]);let s=t.floors.filter(a=>a.rooms.some(l=>l.points.length>=3&&i.some(c=>C(c,l.points)))).map(a=>a.elevation+a.height);return s.length?Math.max(...s):null}function Qi(t,e){let n=t.floors.filter(l=>l.rooms.length>0).sort((l,c)=>l.elevation-c.elevation),r=n.filter(l=>l.elevation<e.base-.05),{x0:o,z0:i,x1:s,z1:a}=e;if(o!==void 0&&i!==void 0&&s!==void 0&&a!==void 0){let l=[];for(let u of[.2,.5,.8])for(let h of[.2,.5,.8])l.push([o+(s-o)*u,i+(a-i)*h]);let c=r.findLast(u=>u.rooms.some(h=>h.points.length>=3&&l.some(d=>C(d,h.points))));if(c)return c}return r.at(-1)??n[0]}var st=t=>Math.round(t*1e3)/1e3;function Ji(t,e=n=>`roof_${n+1}`){let n=t.settings.roof?.pitch??35,r=t.settings.wall_exterior,o=t.floors.filter(l=>l.rooms.some(c=>c.points.length>=3)).sort((l,c)=>c.elevation-l.elevation),i=[],s=[],a=(l,c)=>l.some(u=>C(c,u.points));for(let l of o){let c=l.rooms.filter(y=>y.points.length>=3),u=[...new Set(c.flatMap(y=>y.points.map(b=>st(b[0]))))].sort((y,b)=>y-b),h=[...new Set(c.flatMap(y=>y.points.map(b=>st(b[1]))))].sort((y,b)=>y-b),d=h.slice(0,-1).map((y,b)=>u.slice(0,-1).map((v,w)=>{let k=[(u[w]+u[w+1])/2,(h[b]+h[b+1])/2];return a(c,k)&&!a(s,k)})),p=d.map(y=>y.map(()=>!1)),f=(y,b)=>d[b][y]&&!p[b][y],_=l.elevation+l.height;for(let y=0;y<d.length;y++)for(let b=0;b<(d[y]?.length??0);b++){if(!f(b,y))continue;let v=b;for(;v+1<d[y].length&&f(v+1,y);)v++;let w=y;for(;w+1<d.length&&Array.from({length:v-b+1},(F,P)=>f(b+P,w+1)).every(Boolean);)w++;for(let F=y;F<=w;F++)for(let P=b;P<=v;P++)p[F][P]=!0;let[k,x]=[u[b]-r,u[v+1]+r],[E,A]=[h[y]-r,h[w+1]+r];Math.min(x-k,A-E)<.8||i.push({id:e(i.length),x0:st(k),z0:st(E),x1:st(x),z1:st(A),shape:"gable",axis:x-k>=A-E?"x":"z",eave_a:st(_),eave_b:st(_),pitch_a:n,pitch_b:n,base:st(_),overhang:null})}s.push(...c)}return i}var $e=Math.PI/180,Fe=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],Ot=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],cn=t=>Math.hypot(t[0],t[1],t[2]),Dt=t=>{let e=cn(t)||1;return[t[0]/e,t[1]/e,t[2]/e]},$c=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],qe=t=>Math.round(t*100)/100,Jn=([t,e],n)=>(Math.atan2(t,-e)/$e-n+720)%360;var Mc=.25;function Ec(t,e,n,r,o,i,s){let a=o-n>=i-r,l=a?o-n:i-r;return{key:`${t}:top`,section:e,side:"top",flat:!0,o:[n,s,r],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:a?i-r:o-n,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function Rc(t,e){let n=Dt($c(t,e));return n[1]<0?[-n[0],-n[1],-n[2]]:n}var Ac=t=>{let e=Dt([-t[0],0,-t[2]]);return[e[0],e[2]]};function at(t,e,n,r,o,i,s,a){let l=Dt(Fe(o,r)),c=Dt(Fe(i,r));return{key:t,section:e,side:n,flat:!1,o:r,eu:l,es:c,n:Rc(l,c),lu:cn(Fe(o,r)),ls:cn(Fe(i,r)),pitch:s,span:a,facing:Ac(c)}}function Sc(t,e,n,r,o,i){let s=cn(Fe(o,r));if(s<.3)return null;let a=Dt(Fe(o,r)),l=Fe(i,r),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],u=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],h=cn(u);if(h<.3)return null;let d=Dt(u),p=f=>{let _=Math.min(1,Math.max(0,f/h));return[c*_,s-(s-c)*_]};return{key:t,section:e,side:n,flat:!1,o:r,eu:a,es:d,n:Rc(a,d),lu:s,ls:h,pitch:Math.atan2(d[1],Math.hypot(d[0],d[2]))/$e,span:p,facing:Ac(d)}}function Bm(t,e){let n=fe(t),r=xe(t),o=(v,w,k)=>{let[x,E]=n.at(v,w);return[x,k,E]},[i,s]=[Math.max(0,e.a),Math.max(0,e.b)],a=n.u0-Math.max(0,e.u0),l=n.u1+Math.max(0,e.u1),c=l-a,u=r.y(-i),h=r.y(n.w+s);if(t.shape==="flat"||t.shape==="parapet"){let[v,w]=[n.at(a,-i),n.at(l,n.w+s)];return[Ec(t.id,t.id,Math.min(v[0],w[0]),Math.min(v[1],w[1]),Math.max(v[0],w[0]),Math.max(v[1],w[1]),t.eave_a+Mc)]}if(t.shape==="pent")return[at(`${t.id}:a`,t.id,"a",o(a,-i,u),o(l,-i,u),o(a,n.w+s,h),t.pitch_a,()=>[0,c])];if(t.shape==="mansard")return Vm(t,n,a,l,i,s);let d=t.shape==="hip"||t.shape==="pyramid",p=(n.u1-n.u0)/2,f=t.shape==="pyramid"?p:d?Math.min(p,Math.min(r.vr,n.w-r.vr)||n.w/2):0,_=d?n.u0+f-a:0,y=d?l-(n.u1-f):0,b=[];if(r.vr>.3){let v=Math.hypot(r.vr+i,r.rh-u);b.push(at(`${t.id}:a`,t.id,"a",o(a,-i,u),o(l,-i,u),o(a,r.vr,r.rh),t.pitch_a,w=>[_*(w/v),c-y*(w/v)]))}if(n.w-r.vr>.3){let v=Math.hypot(n.w+s-r.vr,r.rh-h);b.push(at(`${t.id}:b`,t.id,"b",o(l,n.w+s,h),o(a,n.w+s,h),o(l,r.vr,r.rh),t.pitch_b,w=>[y*(w/v),c-_*(w/v)]))}if(d){let v=Sc(`${t.id}:c`,t.id,"c",o(a,n.w+s,h),o(a,-i,u),o(n.u0+f,r.vr,r.rh)),w=Sc(`${t.id}:d`,t.id,"d",o(l,-i,u),o(l,n.w+s,h),o(n.u1-f,r.vr,r.rh));b.push(...[v,w].filter(k=>k!==null))}return b}function Vm(t,e,n,r,o,i){let s=Xn(e.w,t.eave_a,t.eave_b,Ne(t.pitch_a),Ne(t.pitch_b)),a=(f,_)=>{let[y,b]=e.at(f,_);return[y,s.y(_),b]},l=r-n,c=()=>[0,l],u=(f,_)=>Math.atan2(f,_)/$e,h=[],[d,p]=[e.w+i,e.w-s.vlb];return s.vla+o>.3&&h.push(at(`${t.id}:a`,t.id,"a",a(n,-o),a(r,-o),a(n,s.vla),t.pitch_a,c)),s.vr-s.vla>.3&&h.push(at(`${t.id}:au`,t.id,"a",a(n,s.vla),a(r,s.vla),a(n,s.vr),u(s.rh-s.yla,s.vr-s.vla),c)),s.vlb+i>.3&&h.push(at(`${t.id}:b`,t.id,"b",a(r,d),a(n,d),a(r,p),t.pitch_b,c)),p-s.vr>.3&&h.push(at(`${t.id}:bu`,t.id,"b",a(r,p),a(n,p),a(r,s.vr),u(s.rh-s.ylb,p-s.vr),c)),h}function es(t){return t.floors.filter(n=>n.rooms.some(r=>r.points.length>=3)).sort((n,r)=>r.elevation-n.elevation)[0]??null}function X(t){let e=t.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(w=>Bm(w,Ki(t,w,w.overhang??e.overhang)));let n=es(t);if(!n)return[];let r=n.rooms.flatMap(w=>w.points.map(k=>k[0])),o=n.rooms.flatMap(w=>w.points.map(k=>k[1])),i=t.settings.wall_exterior+e.overhang,[s,a]=[Math.min(...r)-i,Math.max(...r)+i],[l,c]=[Math.min(...o)-i,Math.max(...o)+i],u=n.elevation+n.height;if(e.type==="flat")return[Ec("main",null,s,l,a,c,u+Mc)];let h=a-s>=c-l,d=e.ridge==="short"?!h:h,p=(d?c-l:a-s)/2,f=p*Math.tan(e.pitch*$e),_=(w,k,x)=>d?[w,u+x,(l+c)/2+k]:[(s+a)/2+k,u+x,w],[y,b]=d?[s,a]:[l,c],v=()=>[0,b-y];return[at("main:a",null,"a",_(y,-p,0),_(b,-p,0),_(y,0,f),e.pitch,v),at("main:b",null,"b",_(y,p,0),_(b,p,0),_(y,0,f),e.pitch,v)]}function ze(t,e){let n=[];for(let r of t.floors.filter(o=>!e||o.id===e)){let{walls:o}=Ae(r.rooms,{exterior:t.settings.wall_exterior,interior:t.settings.wall_interior},r.walls??[]);for(let i of o){if(!i.exterior&&!i.free)continue;let[s,a]=[i.b[0]-i.a[0],i.b[1]-i.a[1]],l=Math.hypot(s,a);if(l<1.2)continue;let[c,u]=[a/l,-s/l],h=Math.min(r.height,i.height??r.height,i.heightEnd??1/0),d=(p,f,_,y)=>n.push({key:p,section:null,side:"top",flat:!1,o:f,eu:_,es:[0,1,0],n:y,lu:l,ls:h,pitch:90,span:()=>[0,l],facing:[y[0],y[2]],wall:{floorId:r.id}});d(`wall:${r.id}:${i.id}`,[i.a[0]+c*i.right,r.elevation,i.a[1]+u*i.right],[s/l,0,a/l],[c,0,u]),i.free&&d(`wall:${r.id}:${i.id}:back`,[i.b[0]-c*i.left,r.elevation,i.b[1]-u*i.left],[-s/l,0,-a/l],[-c,0,-u])}}return n}var Se="ground";function ro(t){let e=t.floors.filter(n=>n.rooms.some(r=>r.points.length>=3)).sort((n,r)=>n.elevation-r.elevation);return e.find(n=>n.elevation>-.5)??e[0]??t.floors[0]??null}function oo(t,e){let n=(e.rotation??0)*$e,r=[Math.cos(n),0,Math.sin(n)],o=[-Math.sin(n),0,Math.cos(n)],i=ro(t),s=r[0]*e.u+o[0]*e.v,a=r[2]*e.u+o[2]*e.v,l=i?i.elevation+(e.base!=null?e.base:wl(i,s,a)):e.base??0;return{key:Se,section:null,side:"top",flat:!0,o:[0,l,0],eu:r,es:o,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[o[0],o[2]],unbounded:!0}}function me(t,e,n=X(t)){return e.face===Se?oo(t,e):e.face.startsWith("wall:")?ze(t,e.face.split(":")[1]).find(r=>r.key===e.face)??null:n.find(r=>r.key===e.face)??null}var io=1.13,er=1.72,Pe=.025,Ke=.07;function It(t){let e=t.module_w||io,n=t.module_h||er;return t.portrait===!1?[n,e]:[e,n]}function tr(t){return t.layout?.length?t.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,t.rows)},()=>Math.max(1,t.cols))}function ts(t,e){return t.flat?Math.min(45,Math.max(0,e.tilt??15))*$e:t.wall?Math.min(90,Math.max(0,e.tilt??0))*$e:Math.min(45,Math.max(0,e.tilt??0))*$e}function nr(t,e){let[,n]=It(e),r=ts(t,e);return t.wall?n*Math.cos(r)+Pe:!t.flat&&r<.001?n+Pe:t.flat&&e.rack==="ew"?n*Math.cos(r)+.08:n*Math.cos(r)+Math.max(.3,2*n*Math.sin(r))}function un(t,e){let[n,r]=It(e),o=tr(e),i=Math.max(1,...o);return[i*n+(i-1)*Pe,(o.length-1)*nr(t,e)+r*Math.cos(ts(t,e))]}var Nm=t=>t.flat&&!t.unbounded&&!t.wall;function Fc(t,e){if(!Nm(t)||!e.rotation)return null;let n=e.rotation*$e,[r,o]=un(t,e);return{cos:Math.cos(n),sin:Math.sin(n),u:e.u+r/2,s:e.v+o/2}}function Te(t,e,n=!1){let[r,o]=It(e),i=ts(t,e),s=o*Math.cos(i),a=nr(t,e),l=tr(e),c=Math.max(1,...l),u=new Set(e.skip??[]),h=Fc(t,e),d=(y,b)=>h?[h.u+(y-h.u)*h.cos-(b-h.s)*h.sin,h.s+(y-h.u)*h.sin+(b-h.s)*h.cos]:[y,b],p=(y,b,v)=>{let[w,k]=d(y,b);return[0,1,2].map(x=>t.o[x]+t.eu[x]*w+t.es[x]*k+t.n[x]*v)},f=(y,b)=>{let[v,w]=d(y,b);if(t.unbounded)return!0;if(w<-1e-6||w>t.ls+1e-6)return!1;let[k,x]=t.span(w);return v>=k-1e-6&&v<=x+1e-6},_=[];return l.forEach((y,b)=>{let v=e.align==="right"?c-y:e.align==="center"?(c-y)/2:0;for(let w=0;w<y;w++){let k=`${b}:${w}`,x=u.has(k);if(x&&!n)continue;let E=e.u+(w+v)*(r+Pe),A=E+r,F=e.v+b*a,P=F+(t.flat||t.wall||i>.001?s:o);if([[E,F],[A,F],[A,P],[E,P]].every(([I,H])=>f(I,H)))if(t.wall&&i>.001){let I=Ke+o*Math.sin(i),[H,B]=e.flip?[I,Ke]:[Ke,I],Q=[p(E,F,H),p(A,F,H),p(A,P,B),p(E,P,B)],ve=e.flip?F:P;_.push({corners:Q,posts:[E+.05,A-.05].map(et=>[p(et,ve,0),p(et,ve,I)]),cell:k,skipped:x})}else if(!t.flat&&i>.001){let I=Ke+o*Math.sin(i),H=[p(E,F,Ke),p(A,F,Ke),p(A,P,I),p(E,P,I)];_.push({corners:H,posts:[E+.05,A-.05].map(B=>[p(B,P,0),p(B,P,I)]),cell:k,skipped:x})}else if(!t.flat)_.push({corners:[p(E,F,Ke),p(A,F,Ke),p(A,P,Ke),p(E,P,Ke)],posts:[],cell:k,skipped:x});else{let H=.15+o*Math.sin(i),B=e.rack==="ew"&&b%2===1?!e.flip:!!e.flip,[Q,ve]=B?[P,F]:[F,P],et=[p(E,Q,.15),p(A,Q,.15),p(A,ve,H),p(E,ve,H)],Tn=[E+.05,A-.05].flatMap(N=>[[p(N,Q,0),p(N,Q,.15)],[p(N,ve,0),p(N,ve,H)]]);_.push({corners:et,posts:Tn,cell:k,skipped:x})}}}),_}function lt(t,e){if(t.unbounded)return{u:e.u,v:e.v};let[n,r]=un(t,e),o=Fc(t,e);if(o){let[s,a]=[(n*Math.abs(o.cos)+r*Math.abs(o.sin))/2,(n*Math.abs(o.sin)+r*Math.abs(o.cos))/2],l=(h,d,p)=>Math.floor(Math.max(d,Math.min(h,p-d))*100+1e-6)/100,[c,u]=[e.u+n/2,e.v+r/2];return{u:Math.round((l(c,s,t.lu)-n/2)*100)/100,v:Math.round((l(u,a,t.ls)-r/2)*100)/100}}let i=s=>Math.floor(s*100+1e-6)/100;return{u:i(Math.min(Math.max(0,e.u),Math.max(0,t.lu-n))),v:i(Math.min(Math.max(0,e.v),Math.max(0,t.ls-r)))}}function rr(t,e){let[n,r]=un(t,e),[o,i]=[e.u+n/2,e.v+r/2];return[t.o[0]+t.eu[0]*o+t.es[0]*i,t.o[2]+t.eu[2]*o+t.es[2]*i]}var so=.78,or=1.18,_t=t=>({id:t.id,face:t.face,u:t.u,v:t.v,rows:1,cols:1,portrait:!0,module_w:t.w||so,module_h:t.h||or});function ns(t,e){let n=Te(t,_t(e))[0];if(!n)return null;let r=o=>[o[0]-t.n[0]*.05,o[1]-t.n[1]*.05,o[2]-t.n[2]*.05];return n.corners.map(r)}function rs(t,e){let[n]=It(e);return qe((t.lu-(e.cols*n+(e.cols-1)*Pe))/2)}var ir=.4;function dn(t,e){let n={id:e,face:t.key,u:0,v:0,rows:1,cols:1,portrait:!0,tilt:t.flat?15:null,flip:!1,entity:null,look:"black"},[r]=It(n),[o,i]=t.span(t.ls/2);for(n.cols=Math.max(1,Math.floor((i-o-2*ir+Pe)/(r+Pe))),n.rows=Math.max(1,Math.min(4,Math.floor((t.ls-2*ir)/nr(t,n))));n.cols>1&&Te(t,{...n,u:rs(t,n),v:ir}).length<n.rows*n.cols;)n.cols--;return n.u=rs(t,n),n.v=ir,n}function ao(t,e){let n={...e,face:t.key,tilt:t.flat?e.tilt??15:null,rotation:null,flip:!1};return n.u=rs(t,n),n.v=ir,{...n,...lt(t,n)}}function os(t,e,n){let r=t.settings.north??0,o=a=>a.lu*(1.3+Math.cos((Jn(a.facing,r)-180)*Math.PI/180)),i=ze(t,n).sort((a,l)=>o(l)-o(a))[0];if(!i)return null;let s={...dn(i,e),portrait:!1,rows:1};return s.cols=Math.max(1,Math.floor((i.lu-.8+Pe)/(er+Pe))),s.u=qe((i.lu-(s.cols*er+(s.cols-1)*Pe))/2),s.v=qe(Math.max(0,i.ls-io-.3)),s}function sr(t,e){let n=t.floors.flatMap(i=>i.rooms.flatMap(s=>s.points)),r=n.length?Math.max(...n.map(i=>i[0]))+3:0,o=n.length?Math.min(...n.map(i=>i[1])):0;return{id:e,face:Se,u:qe(r),v:qe(o),rows:2,cols:4,portrait:!0,tilt:25,flip:!0,rotation:(t.settings.north??0)||0,look:"black",entity:null}}function ar(t,e,n){let r=oo(t,e),[o,i]=un(r,e),[s,a]=[e.u+o/2,e.v+i/2],l=[r.eu[0]*s+r.es[0]*a,r.eu[2]*s+r.es[2]*a],c=n*$e,u=l[0]*Math.cos(c)+l[1]*Math.sin(c)-o/2,h=l[0]*-Math.sin(c)+l[1]*Math.cos(c)-i/2;return{u:qe(u),v:qe(h),rotation:(Math.round(n)%360+360)%360}}function lr(t,e){let[n,r]=t.span(t.ls/2);return{id:e,face:t.key,u:qe((n+r-so)/2),v:qe(Math.max(0,Math.min(t.ls-or,t.ls*.45-or/2))),w:null,h:null,cover:null,contact:null,tilt:null}}function cr(t,e){let[n,r]=[e[0]-t.o[0],e[1]-t.o[2]],[o,i,s,a]=[t.eu[0],t.eu[2],t.es[0],t.es[2]],l=o*a-i*s;if(Math.abs(l)<1e-9)return null;let c=(n*a-r*s)/l,u=(o*r-i*n)/l;if(u<0||u>t.ls)return null;let[h,d]=t.span(u);return c>=h&&c<=d?{u:c,s:u}:null}function is(t,e){let n=null;for(let r of t){if(r.wall){let[s,a]=[e[0]-r.o[0],e[1]-r.o[2]],l=s*r.eu[0]+a*r.eu[2],c=s*r.n[0]+a*r.n[2],u=l>=0&&l<=r.lu;if(u&&c>=-.05&&c<=.35)return{face:r,u:l,s:Number.NaN};u&&c>.35&&c<=.8&&!n&&(n={face:r,u:l,s:Number.NaN,y:-1/0});continue}let o=cr(r,e);if(!o)continue;let i=r.o[1]+r.es[1]*o.s;(!n||i>n.y)&&(n={face:r,...o,y:i})}return n&&{face:n.face,u:n.u,s:n.s}}function lo(t,e,n){let r=Ot(n,t.n);if(Math.abs(r)<1e-6)return null;let o=Ot(Fe(t.o,e),t.n)/r;if(o<=0)return null;let i=Fe([e[0]+n[0]*o,e[1]+n[1]*o,e[2]+n[2]*o],t.o);return{t:o,u:Ot(i,t.eu),s:Ot(i,t.es)}}function ss(t,e,n){if(t.unbounded)return!0;if(n<0||n>t.ls)return!1;let[r,o]=t.span(n);return e>=r&&e<=o}function as(t,e,n,r){return Te(t,e).some(i=>{let s=i.corners.map(c=>{let u=Fe(c,t.o);return[Ot(u,t.eu),Ot(u,t.es)]}),a=s.map(c=>c[0]),l=s.map(c=>c[1]);return n>=Math.min(...a)-.05&&n<=Math.max(...a)+.05&&r>=Math.min(...l)-.05&&r<=Math.max(...l)+.05})}var Km=["n","ne","e","se","s","sw","w","nw"],ls=(t,e)=>Km[Math.round(Jn(t.facing,e)/45)%8];function ur(t,e){let n=r=>{if(r.flat)return r.lu*r.ls*.8;let o=Math.cos((Jn(r.facing,e)-180)*Math.PI/180);return r.lu*r.ls*(1.2+o)};return[...t].sort((r,o)=>n(o)-n(r))[0]??null}var Oc=["kitchen_row","kitchen_l","bath","bedroom","living","dining","office","kids","hall"],zc={kitchen_row:{rows:[["back","start",["fridge","kitchen_tall",["kitchen",[.9,.62,.92]],"sink","dishwasher","stove",["kitchen",[.6,.62,.92]]]],["back","start",[["kitchen_wall",[1.2,.35,.7]]]]],spots:[[["table",[1.2,.8,.75]],.5,.72,0],["lamp_pendant",.5,.72,0],["lamp_ceiling",.5,.3,0]]},kitchen_l:{rows:[["back","start",["fridge",["kitchen",[.9,.62,.92]],"sink","dishwasher","stove"]],["right","start",[["kitchen",[.9,.62,.92]],["kitchen",[.6,.62,.92]],"kitchen_tall"]],["back","start",[["kitchen_wall",[1.2,.35,.7]]]]],spots:[["table",.4,.68,0],["bar_stool",.72,.86,180],["lamp_ceiling",.5,.35,0]]},bath:{rows:[["back","center",["washbasin"]],["back","end",["wc"]],["front","start",["bathtub"]],["left","start",["washer"]]],spots:[["lamp_downlight",.5,.5,0]]},bedroom:{rows:[["back","center",["nightstand","bed","nightstand"]],["left","center",[["wardrobe",[2,.6,2.1]]]],["front","end",["dresser"]]],spots:[["lamp_ceiling",.5,.55,0]]},living:{rows:[["back","center",["tv_board"]],["right","start",["shelf"]]],spots:[["sofa",.5,.72,180],["coffee_table",.5,.52,0],[["rug",[2.2,1.6,.01]],.5,.55,0],["armchair",.14,.5,270],["lamp_floor",.86,.8,0],["plant",.9,.12,0],["lamp_ceiling",.5,.45,0]]},dining:{rows:[["back","center",["sideboard"]]],spots:[["table",.5,.55,0],["chair",.4,.35,0],["chair",.6,.35,0],["chair",.4,.75,180],["chair",.6,.75,180],["lamp_pendant",.5,.55,0]]},office:{rows:[["back","center",["desk"]],["left","center",["shelf","shelf"]]],spots:[["office_chair",.5,.38,180],["lamp_ceiling",.5,.55,0]]},kids:{rows:[["left","start",[["bed",[.9,2,.8]]]],["back","end",[["desk",[1.2,.6,.75]]]],["right","end",["shelf"]]],spots:[[["rug",[1.6,1.2,.01]],.55,.6,0],["lamp_ceiling",.5,.5,0]]},hall:{rows:[["left","start",["coat_rack"]]],spots:[["lamp_downlight",.5,.3,0],["lamp_downlight",.5,.7,0]]}},Pc=t=>typeof t=="string"?t:t[0],co=t=>typeof t=="string"?Ce[t]:t[1],hn=.05,Gm=.02,Tc=t=>Math.round(t*1e3)/1e3;function Um(t,e,n,r){switch(e){case"back":return{x:t.x0+n,z:t.z0+r,turn:0};case"right":return{x:t.x1-r,z:t.z0+n,turn:90};case"front":return{x:t.x1-n,z:t.z1-r,turn:180};case"left":return{x:t.x0+r,z:t.z1-n,turn:270}}}function Dc(t,e,n){let r=se(t.points),o=r.x1-r.x0,i=r.z1-r.z0,s=[],a=(l,c,u,h,[d,p,f])=>{s.push({id:n(),type:l,x:Tc(c),z:Tc(u),rotation:h,w:d,d:p,h:f,variant:null,entity:null,power:null})};for(let[l,c,u]of zc[e].rows){let h=l==="back"||l==="front"?o:i,d=0,p=[];for(let _ of u){if(d+co(_)[0]>h-.1)break;p.push(_),d+=co(_)[0]}let f=c==="start"?hn:c==="end"?h-d-hn:(h-d)/2;for(let _ of p){let y=co(_),b=Um(r,l,f+y[0]/2,y[1]/2+Gm);a(Pc(_),b.x,b.z,b.turn,y),f+=y[0]}}for(let[l,c,u,h]of zc[e].spots){let d=co(l),p=(y,b,v)=>Math.min(v,Math.max(b,y)),f=p(r.x0+o*c,r.x0+d[0]/2+hn,r.x1-d[0]/2-hn),_=p(r.z0+i*u,r.z0+d[1]/2+hn,r.z1-d[1]/2-hn);a(Pc(l),f,_,h,d)}return s}var Ic={view:"3D",editor:"Editor",all_floors:"Alle Etagen",outside_area:"Au\xDFen",outside_area_hint:"Alle Ger\xE4te drau\xDFen auf einen Blick: im Garten, au\xDFerhalb der R\xE4ume, und was zu Au\xDFen geh\xF6rt (etwa die Wetterstation auf dem Dach).",device_outside:"Geh\xF6rt zu Au\xDFen",device_outside_hint:"Das Ger\xE4t z\xE4hlt nicht zum Raum darunter (eine Wetterstation auf dem Dach) und steht im Au\xDFen-Panel.",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",save_failed_detail:"Speichern fehlgeschlagen: {error}. Deine \xC4nderungen bleiben in diesem Browser erhalten.",needs_restart:"Eine neue Version von NextFloor ({frontend}) ist installiert, aber Home Assistant l\xE4uft noch mit {version}. Bitte Home Assistant neu starten \u2013 bis dahin kann das Speichern fehlschlagen.",needs_reload:"Diese Seite zeigt noch NextFloor {frontend}, Home Assistant hat schon {backend}. Bitte die Seite neu laden; in der Companion-App: Einstellungen \u2192 Companion-App \u2192 Frontend-Cache zur\xFCcksetzen.",reload_page:"Neu laden",needs_restart_old:"Eine neue Version von NextFloor ist installiert, aber Home Assistant l\xE4uft noch mit einer \xE4lteren. Bitte Home Assistant neu starten \u2013 bis dahin schl\xE4gt das Speichern fehl.",draft_found:"Nicht gespeicherte \xC4nderungen vom {time} gefunden.",draft_restore:"\xDCbernehmen und speichern",draft_discard:"Verwerfen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",walls_slope:"Schr\xE4g",walls_slope_hint:"W\xE4nde schr\xE4g abgeschnitten: vorne halbhoch, hinten voll \u2013 wie ein Puppenhaus, dreht mit der Kamera",walls_solid:"Massiv",walls_solid_hint:"Massive W\xE4nde in ihren Farben statt Glas (Farben: Editor \u2192 Einstellungen, pro Raum im Raum)",wall_paint_outside:"Wandfarbe au\xDFen",wall_paint_inside:"Wandfarbe innen",wall_paint_room:"Wandfarbe innen (dieser Raum)",wall_paint_hint:"Gilt in der 3D-Ansicht \u201EMassiv\u201C.",wall_paint_default:"Standard",card_solid_walls:"Massive W\xE4nde (in ihren Farben)",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_from_ha:"Etagen aus Home Assistant:",floor_empty:"Leere Etage",level:"Ebene {n}",ha_floor:"Etage in Home Assistant",floor_layer:"Ebene (ein- und ausblendbar)",floor_layer_hint:"Diese Etage ist kein Geschoss, sondern eine Ebene \u2013 z. B. alle B\xE4ume oder die Deko. Die 3D-Ansicht zeigt oben ein Auge, mit dem du sie auf jedem Ger\xE4t ein- und ausblendest.",no_ha_floor:"\u2013 keine \u2013",area_rooms:"R\xE4ume aus HA-Bereichen anlegen ({n})",area_rooms_hint:"Legt f\xFCr jeden Bereich dieser Etage einen Raum an (4 \xD7 3 m) \u2013 danach an die richtige Stelle ziehen und die Ecken anpassen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",floor_shift:"Etage verschieben (m)",floor_shift_apply:"Verschieben",floor_shift_hint:"Verschiebt alle R\xE4ume, M\xF6bel, Ger\xE4te, Au\xDFenfl\xE4chen, freien W\xE4nde und das Hintergrundbild dieser Etage um X und Z. Dachfl\xE4chen bleiben liegen.",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",floor_copy:"Etage duplizieren",floor_copy_hint:"Die Kopie kommt oben aufs Haus, mit allen R\xE4umen, W\xE4nden, T\xFCren und Fenstern. R\xE4ume und Etage verlieren ihre Verkn\xFCpfung mit Home Assistant, M\xF6bel ihre Entit\xE4ten; Energieger\xE4te bleiben auf der alten Etage.",floor_copy_furniture:"M\xF6bel mitnehmen",floor_copy_devices:"Ger\xE4te-Pins mitnehmen",floor_copy_devices_hint:"Dieselbe Entit\xE4t steht dann auf beiden Etagen.",floor_copy_outdoor:"Au\xDFenfl\xE4chen mitnehmen",floor_copy_make:"Kopie anlegen",floor_copy_name:"{name} (Kopie)",furn_to_floor:"Auf Etage verschieben",furn_to_floor_hint:"Das M\xF6bel wandert an dieselbe Stelle auf der gew\xE4hlten Etage.",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_select:"Ausw\xE4hlen",tool_rect:"Rechteck",tool_polygon:"Freie Form",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Alles zeigen",room:"Raum",rooms:"R\xE4ume",room_name:"Name",area:"Bereich",no_area:"Kein Bereich",sub_area_add:"+ Bereich im Raum",sub_area_hint:"Ein Teil des Raums mit eigenem Home-Assistant-Bereich, aber ohne eigene W\xE4nde \u2013 eine Leseecke, ein Regal, eine K\xFCchenzeile im Wohnraum. Seine Ger\xE4te und Sensoren geh\xF6ren zu diesem Raum.",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",pendant_shape:"Form",pendant_shade:"Schirm",paint_colour:"Lackfarbe",pendant_globe:"Kugel",pendant_cone:"Kegel",pendant_drum:"Trommel",sofa_shape:"Form",sofa_straight:"Gerade",sofa_l:"L-Form (Spiegeln: andere Seite)",sofa_u:"U-Form",pkg_open:"Einrichten \u2026",pkg_hint:"Die M\xF6bel kommen an die W\xE4nde des Raums; Leuchten verbinden sich mit den Lichtern des Bereichs. Danach einzeln anpassen \u2013 Strg+Z nimmt alles zur\xFCck.",pkg_done:"{n} M\xF6bel gesetzt \u2013 Strg+Z nimmt es zur\xFCck.",pkg_kitchen_row:"K\xFCchenzeile",pkg_kitchen_row_desc:"Zeile an der R\xFCckwand mit K\xFChlschrank, Backofen, Sp\xFCle, Sp\xFClmaschine und Herd, Oberschrank, Esstisch mit Pendelleuchte",pkg_kitchen_l:"K\xFCche in L-Form",pkg_kitchen_l_desc:"Zeile hinten und links, Kochinsel mit Barhockern",pkg_bath:"Bad",pkg_bath_desc:"Waschtisch, WC, Badewanne, Waschmaschine, Einbauspot",pkg_bedroom:"Schlafzimmer",pkg_bedroom_desc:"Doppelbett mit zwei Nachttischen, Schrank, Kommode, Deckenleuchte",pkg_living:"Wohnzimmer",pkg_living_desc:"TV-Board, Sofa, Couchtisch, Teppich, Sessel, Regal, Stehlampe, Pflanze",pkg_dining:"Esszimmer",pkg_dining_desc:"Esstisch mit vier St\xFChlen, Sideboard, Pendelleuchte",pkg_office:"B\xFCro",pkg_office_desc:"Schreibtisch mit B\xFCrostuhl, zwei Regale, Deckenleuchte",pkg_kids:"Kinderzimmer",pkg_kids_desc:"Einzelbett, Schreibtisch, Regal, Teppich",pkg_hall:"Flur",pkg_hall_desc:"Garderobe, zwei Einbauspots",spots_place:"Spots setzen",spots_type:"Leuchte",spots_cols:"Spalten (links\u2013rechts)",spots_rows:"Reihen (vorne\u2013hinten)",spots_add:"{n} Leuchten setzen",spots_placed:"{n} Leuchten gesetzt.",spots_hint:"Alle Leuchten folgen dem gew\xE4hlten Licht (z. B. Spots an einem Dimmer). Einzeln verschieben und ein anderes Licht w\xE4hlen geht danach wie bei jedem M\xF6bel.",cancel:"Abbrechen",backup:"Sicherung",backup_history:"Wiederherstellungspunkte",backup_none:"Noch keine. Beim Bearbeiten entsteht h\xF6chstens alle 10 Minuten ein Punkt.",backup_summary:"{rooms} R\xE4ume, {furniture} M\xF6bel",backup_restore:"Wiederherstellen",backup_restore_confirm:"Den Stand vom {time} wiederherstellen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_restored:"Wiederhergestellt.",backup_file:"Datei",backup_export:"Exportieren",backup_export_share:"Als Vorlage teilen",backup_export_share_hint:"Ohne Bereiche, Ger\xE4te, Sensoren und Bilder \u2013 zum Weitergeben an andere.",backup_import:"Importieren \u2026",backup_import_confirm:"Den ganzen Grundriss durch die Datei ersetzen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_import_error:"Die Datei ist kein NextFloor-Plan ({error}).",backup_imported:"Importiert.",backup_hint:"Hintergrundbilder sind nicht in der Datei enthalten.",backup_full:"Komplett-Backup",backup_full_export:"Alles sichern (Plan, Bilder, Packs)",backup_full_import:"Komplett-Backup wiederherstellen \u2026",backup_full_hint:"Eine Datei mit dem Plan, allen Hintergrund- und Bildschirmbildern und den installierten Packs. Beim Wiederherstellen wird jedes Pack erneut gepr\xFCft; der Lizenzschl\xFCssel ist nicht enthalten.",backup_full_confirm:"Plan, Bilder und Packs durch das Backup ersetzen? Der aktuelle Stand bleibt als Wiederherstellungspunkt erhalten.",backup_full_not_backup:"Das ist kein Komplett-Backup von NextFloor.",backup_full_restored:"Backup wiederhergestellt: {packs} Packs, {pictures} Bilder.",backup_full_skipped:"\xDCbersprungen (nicht lesbar): {packs}.",export_name_full:"komplett",device_confirm:"Vor dem Schalten nachfragen",device_confirm_hint:"Beim Antippen in 3D, im Schnellmen\xFC und im Raumfenster erscheint erst eine R\xFCckfrage. Doppeltipp auf den Raum l\xE4sst dieses Ger\xE4t aus.",cover_confirm_hint:"Auf, Zu und Positionen fragen im Schnellmen\xFC und im Raumfenster erst nach, und Wischen \xFCber das Symbol bewegt den Rollladen nicht mehr (es dreht dann die Ansicht). Stopp fragt nie.",blind_kind:"Art des Behangs",blind_roller:"Rollladen au\xDFen",blind_venetian:"Raffstore mit Lamellen",blind_inside:"Rollo innen",cover2_entity:"Zweiter Rollladen (rechte H\xE4lfte)",cover_my:"Lieblingsposition \u201EMy\u201C (%, 0 = keine)",cover_my_go:"Zur Lieblingsposition ({p} %)",blind_hint:"Ein Raffstore dreht seine Lamellen in 3D mit der Lamellenstellung des Rollladens; ein Rollo innen h\xE4ngt hinter dem Glas. Ein breites Fenster kann f\xFCr seine rechte H\xE4lfte einen zweiten Rollladen haben. Die Lieblingsposition erscheint als \u201EMy\u201C im Schnellmen\xFC: ein Rollladen mit Positionen f\xE4hrt dorthin, ein Somfy-RTS-Motor ohne R\xFCckmeldung f\xE4hrt mit Stopp in seine eigene My-Stellung.",confirm_switch:"{name} wirklich schalten?",lock_confirm_unlock:"{name} wirklich aufschlie\xDFen?",gang_switch_one:"Schaltet",furn_cover_entity:"Bewegt sich mit",furn_cover_hint:"Vorhang, Leinwand, Markise oder Tor folgen dieser Cover-Entit\xE4t (Rollladen, Vorhang, Markise, Tor) und fahren mit ihr. Ein Tipp \xF6ffnet ihr Men\xFC (auf, Stopp, zu).",gang_switch:"Taste {n} schaltet",gang_socket_one:"Steckdose an",gang_socket:"Steckdose {n} an",gang_switch_hint:"Eine Taste leuchtet, solange ihr Licht an ist (in seiner Farbe). Ein Tipp schaltet; bei mehreren Tasten fragt ein kleines Men\xFC, welche. Dieselbe Entit\xE4t darf an mehreren Schaltern sitzen.",gang_socket_hint:"Eine Steckdose leuchtet gr\xFCn, solange ihr Schalter an ist \u2013 heller, je mehr sie zieht. Ein Tipp schaltet; bei mehreren fragt ein kleines Men\xFC, welche.",lock_confirm_lock:"{name} abschlie\xDFen?",opening_lock:"Smart Lock",opening_lock_hint:"Ein Tipp auf die T\xFCr schlie\xDFt ab oder auf (immer mit R\xFCckfrage). Solange sie aufgeschlossen ist, leuchtet ihre Kante.",split_handle_hint:"Ziehen: Breite von Plan und 3D-Ansicht",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",units:"Ma\xDFe anzeigen in",units_metric:"Meter",units_imperial:"Fu\xDF und Zoll",units_hint:"Wie L\xE4ngen und Fl\xE4chen im Plan, in den Formularen und in der Wandansicht stehen. Eingaben bleiben in Metern.",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_rotation:"Drehung (\xB0)",background_edit:"Verschieben, skalieren und drehen",background_edit_done:"Fertig",background_edit_hint:"Solange der Modus an ist: Bild ziehen verschiebt es, der Griff unten rechts zieht es gr\xF6\xDFer oder kleiner. Erst das Bild an den Ma\xDFstab anpassen, dann drehen.",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Pfeiltasten verschieben \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",side_failed:"Dieses Formular lie\xDF sich nicht anzeigen ({error}). Der Grundriss bleibt bedienbar. Bitte melde den Text in einem GitHub-Issue.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"NextFloor",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_busy_floors:"Etagen",stats_busy_openings:"T\xFCren/Fenster",stats_busy_flash:"Blitz",stats_busy_roof:"Dach",stats_busy_flow:"Stromfluss",stats_busy_effect:"Farbeffekt",stats_busy_robot:"Roboter",stats_busy_orbit:"Kamerafahrt",stats_busy_tint:"Raumfarbe",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",roof_keep:"Dach bleibt",roof_keep_hint:"Das Dach bleibt beim Heranzoomen auf dem Haus, statt sich zu heben und auszublenden",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all_n:"Alle {n} platzieren \u2026",devices_place_all_confirm:"{n} Ger\xE4te auf einmal in den Raum setzen? (Strg+Z bzw. \u201ER\xFCckg\xE4ngig\u201C nimmt alle in einem Schritt zur\xFCck.)",devices_src_area:"Dieser Bereich",devices_src_other:"Andere Bereiche",devices_src_none:"Ohne Bereich",panel_hide:"Im Raumfenster ausblenden",panel_unhide:"Im Raumfenster wieder zeigen",panel_state_hide:"Zustand im Raumfenster ausblenden (z. B. ein Rollladen, der nur \u201Eunbekannt\u201C meldet)",panel_state_show:"Zustand im Raumfenster wieder zeigen",devices_place:"Platzieren",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_announce:"\u{1F4E2} Durchsage",announce_placeholder:"Eigene Nachricht \u2026",announce_send:"Sagen",announce_sent:"Gesagt: \u201E{message}\u201C",announce_failed:"Durchsage fehlgeschlagen: {error}",announce_phrase_1:"Essen ist fertig!",announce_phrase_2:"Zeit f\xFCrs Bett!",announce_phrase_3:"Bitte runterkommen!",announce_phrase_4:"Wir fahren gleich los!",announce_phrase_5:"Der Hund muss raus!",state_recording:"Nimmt auf",state_streaming:"Streamt",panel_all_off:"Alle aus",mood_save:"Stimmung speichern",mood_save_hint:"Speichert, wie die Lampen des Raums gerade leuchten, als Stimmung \u2013 ein Tipp darauf stellt sie sp\xE4ter wieder her, \u201E\u2192\u201C \xFCbertr\xE4gt sie auf einen anderen Raum.",mood_new:"Stimmung",mood_set:"Stimmung einstellen",mood_carry:"Auf einen anderen Raum \xFCbertragen",panel_all_on:"Alle an",view_options:"Ansicht: Qualit\xE4t, Look, Symbole, FPS",panel_all_open:"Alle auf",panel_all_close:"Alle zu",central:"Zentral: alle Lichter, Rolll\xE4den und Favoriten",central_house:"Ganzes Haus",central_lights:"Lichter",central_covers:"Rolll\xE4den",central_on:"An",central_off:"Aus",central_open:"Auf",central_close:"Zu",central_sure:"Sicher?",central_favorites:"Favoriten",central_no_favorites:"Noch keine Favoriten. Im Editor unter \u201EFavoriten\u201C legst du Szenen, Skripte und Schalter fest.",card_central:"Stern mit Zentral-Men\xFC",card_central_hint:"Alle Lichter und Rolll\xE4den der Etage oder des Hauses und die Favoriten aus dem Editor.",favorites:"Favoriten",favorites_hint:"Szenen, Skripte, Automationen, Tasten und Schalter f\xFCr das Zentral-Men\xFC (Stern) der 3D-Ansicht \u2013 Party, Anwesenheitssimulation, Verschattung, Bew\xE4sserung.",favorites_add:"Favorit hinzuf\xFCgen",background_handles_hint:"Das Bild hat jetzt Griffe wie ein M\xF6bel: ziehen verschiebt es, die Ecke unten rechts skaliert, der runde Griff oben dreht (mit Umschalt in 15\xB0-Schritten). Passt es, \u201EFertig\u201C tippen \u2013 dann liegt es fest.",background_fixed_hint:"Das Bild liegt fest, du kannst dar\xFCber zeichnen. Zum Anpassen \u201EVerschieben, skalieren und drehen\u201C tippen.",bg_level:"Gerade ausrichten",bg_level_cancel:"Ausrichten abbrechen",bg_level_first:"Tippe auf den Anfang einer Wand im Bild, die gerade (waagerecht oder senkrecht) sein soll.",bg_level_second:"Jetzt auf das Ende dieser Wand tippen \u2013 das Bild dreht sich passend.",bg_ruler:"Ma\xDFstab mit Lineal",bg_ruler_cancel:"Lineal abbrechen",bg_ruler_first:"Tippe im Bild auf den Anfang einer Strecke, deren L\xE4nge du kennst \u2013 etwa eine bema\xDFte Wand.",bg_ruler_second:"Jetzt auf das Ende der Strecke tippen.",bg_ruler_length_hint:"Im Plan gemessen: {m} m. Gib die echte L\xE4nge ein, das Bild wird passend skaliert.",bg_ruler_length:"Echte L\xE4nge (m)",bg_ruler_apply:"Ma\xDFstab \xFCbernehmen",thumbs_fold:"Etagenbilder zu Kn\xF6pfen einklappen",thumbs_show:"Etagenbilder wieder zeigen",room_start_view:"Ansicht als Start des Raums",room_start_view_hint:"Tippst du den Raum in 3D an, fliegt die Kamera genau so hin, wie die 3D-Ansicht rechts gerade steht \u2013 Blickwinkel, Zoom und Bildausschnitt. Erst 3D daneben einschalten, den Raum drehen und heranzoomen, dann tippen.",room_start_view_reset:"Startansicht des Raums entfernen (wieder von oben)",room_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh und zoom den Raum so, wie er sich \xF6ffnen soll.",floor_start_view:"Ansicht als Start der Etage",floor_start_view_hint:"Diese Etage \xF6ffnet sich in 3D so, wie die 3D-Ansicht rechts gerade steht \u2013 etwa das Erdgeschoss von vorn und das Obergeschoss von hinten. Erst 3D daneben einschalten, drehen, dann tippen.",floor_start_view_reset:"Startansicht der Etage entfernen (wieder wie das Haus)",floor_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh die Etage so, wie sie sich \xF6ffnen soll.",ambilight:"Leuchten hinter dem Fernseher (%)",ambilight_hint:"Wie kr\xE4ftig es hinter dem Fernseher leuchtet, solange er l\xE4uft. 0 schaltet es aus (zum Beispiel wenn du LED-Streifen am Fernseher hast), 100 ist die Standardst\xE4rke.",glow_scale:"Leuchtst\xE4rke in 3D (%)",light_effects:"Effektanimationen in 3D",light_effects_hint:"Nur exakte HA-Effektnamen zuordnen. Ohne Zuordnung bleibt die HA-Farbe statisch. \xC4ndert nichts in Home Assistant.",light_effects_enabled:"Animationen f\xFCr diese Leuchte erlauben",light_effect_unmapped:"Nicht zugeordnet (statisch)",light_effect_add:"Exakten Effektnamen hinzuf\xFCgen",light_effect_name_limit:"Der exakte Effektname muss 1 bis 255 Zeichen lang sein. Er wird nicht gek\xFCrzt.",light_effect_count_limit:"Maximal 100 Zuordnungen. Entferne zuerst einen vorhandenen Eintrag.",light_effect_exists:"Dieser Effektname ist bereits zugeordnet. Die vorhandene Zuordnung bleibt erhalten.",light_animation_none:"Statisch",light_animation_rainbow:"Regenbogen (ersetzt Farbe)",light_animation_pulse:"Pulsieren (Intensit\xE4t)",light_animation_flicker:"Flackern (Intensit\xE4t)",glow_scale_hint:"Wie kr\xE4ftig die Leuchte in 3D leuchtet: unter 100 % d\xE4mpft helle LED-Streifen, damit der Raum nicht \xFCberstrahlt; \xFCber 100 % l\xE4sst eine schwache Lampe st\xE4rker leuchten. Schaltet nichts in Home Assistant.",vehicle_to_spot:"In Stellplatz umwandeln",vehicle_to_spot_hint:"Ein Fahrzeug als einfaches M\xF6bel steht immer da. Als Stellplatz erscheint es nur, wenn ein Sensor das Auto meldet, und dort verkn\xFCpfst du auch das Auto-Ger\xE4t (Ladestand, Reichweite, Schloss, Klima).",as_furniture:"Als M\xF6bel darstellen",as_furniture_hint:"Ersetzt den Pin durch ein M\xF6bel an derselben Stelle, das mit diesem Ger\xE4t verkn\xFCpft ist \u2013 etwa ein Lautsprecher f\xFCr einen Media Player oder eine Leuchte f\xFCr ein Licht. Strg+Z nimmt es zur\xFCck.",as_furniture_pick:"M\xF6bel w\xE4hlen \u2026",as_device:"Wieder als Ger\xE4te-Pin",as_device_hint:"Ersetzt das M\xF6bel durch den einfachen Pin seines Ger\xE4ts an derselben Stelle.",presets:"Sender und Playlists (Klang)",presets_hint:"Erscheinen im Schnellmen\xFC jedes Lautsprechers unter \u201EAbspielen\u201C, neben den Quellen des Players. F\xFCr einen Echo (Alexa Media Player): Art SPOTIFY, AMAZON_MUSIC oder TUNEIN und als Inhalt, was du sagen w\xFCrdest (\u201ERock Antenne\u201C). F\xFCr Sonos, Music Assistant und andere: Art music oder url mit einer Stream-Adresse oder einer URI.",preset_type:"Art",preset_type_hint:"media_content_type von play_media, z. B. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Inhalt",preset_content_hint:"media_content_id: Stream-URL, URI (spotify:playlist:\u2026) oder bei Alexa ein Suchbegriff",preset_speakers:"Nur auf diesen Lautsprechern (keiner = auf allen)",media_play:"Abspielen",media_pause:"Pause",media_previous:"Zur\xFCck",media_next:"Weiter",media_volume:"Lautst\xE4rke",media_sources:"Quellen",preset_add:"Sender oder Playlist",own_buttons:"Eigene Kn\xF6pfe",own_buttons_hint:"Erscheinen im Zentral-Men\xFC (Stern) unter den Favoriten: eine Dashboard-Seite \xF6ffnen, die Details einer Entit\xE4t zeigen, einen Dienst aufrufen oder ein browser_mod-Popup mit deiner eigenen Karte \xF6ffnen.",own_alerts:"Eigene Warnungen",own_alerts_hint:"Eine Zeile in der Warnleiste der 3D-Ansicht, solange eine Entit\xE4t in einem Zustand ist \u2013 \u201EWassertank leer\u201C vom Saugroboter, \u201ESp\xFClmaschine fertig\u201C. Mehrere Zust\xE4nde mit Komma; bei Zahlen <20 oder >80.",own_alert_entity:"Wenn \u2026",own_alert_state:"\u2026 im Zustand ist (leer = an)",own_alert_text:"\u2026 dann diese Warnung",own_alert_color:"Farbe",own_alert_tap:"Antippen",own_alert_tap_info:"\xF6ffnet die Details",own_alert_tap_toggle:"schaltet die Entit\xE4t",own_alert_tap_room:"springt in den Raum",own_alert_house:"Ganzes Haus",own_alert_new:"Neue Warnung",own_alert_add:"Warnung hinzuf\xFCgen",today:"Heute",today_none:"Heute steht nichts an.",today_calendars:"Kalender f\xFCr \u201EHeute\u201C",today_calendars_hint:"Die Termine dieser Kalender stehen oben rechts in der 3D-Ansicht auf der Karte \u201EHeute\u201C, zusammen mit den M\xFClltonnen, die heute oder morgen abgeholt werden. Ein Tipp auf den Titel klappt die Karte ein.",own_button_state:"Leuchtet, solange \u2026 an ist (optional)",own_button_label:"Beschriftung",own_button_action:"Aktion",own_button_new:"Neuer Knopf",own_button_add:"Eigener Knopf",own_action_navigate:"Seite \xF6ffnen",own_action_more_info:"Details einer Entit\xE4t",own_action_service:"Dienst aufrufen",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Pfad",own_target_more_info:"Entit\xE4t",own_target_service:"Dienst (domain.service)",own_data:"Daten (JSON)",own_data_hint:'F\xFCr einen Dienst seine Daten, f\xFCr fire-dom-event der Inhalt des Ereignisses, z. B. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.',own_data_bad:"Kein g\xFCltiges JSON-Objekt.",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"F\xFCr diesen Raum sind keine Ger\xE4te im Grundriss. Im Editor lassen sich Ger\xE4te platzieren oder mit \u2606 f\xFCrs Raumfenster ausw\xE4hlen.",close:"Schlie\xDFen",panel_fold:"Einklappen (Raum bleibt sichtbar)",panel_unfold:"Wieder aufklappen",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_tilt:"Lamellen",cover_tilt_open:"Lamellen auf",cover_tilt_close:"Lamellen zu",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",tool_opening:"T\xFCr & Fenster",tool_furniture:"M\xF6bel",qm_off:"Aus",find:"Suchen",find_placeholder:"Wo ist \u2026? Ger\xE4t oder Raum",find_none:"Nichts gefunden",swipe_off:"Aus",panel_pin:"Im Raumfenster zeigen",panel_unpin:"Nicht im Raumfenster zeigen",devices_panel_hint:"Das Raumfenster zeigt die Ger\xE4te im Grundriss. \u2606 nimmt ein Ger\xE4t zus\xE4tzlich ins Raumfenster auf, ohne es zu platzieren.",card_section_view:"Ansicht",card_size:"Gr\xF6\xDFe",card_size_fixed:"Feste H\xF6he",card_size_fill:"Bildschirm f\xFCllen",card_fill_hint:"Am besten in einer Dashboard-Ansicht vom Typ \u201EPanel (1 Karte)\u201C \u2013 dann nimmt die Karte den ganzen Platz ein.",card_controls:"Schalter in der Karte",card_floor_thumbs:"Etagen als Mini-Ansichten",card_floor_thumbs_hint:"Kleine Bilder der Etagen am Rand \u2013 antippen wechselt die Etage",card_floor_thumbs_hint_start:"Die gew\xE4hlte Etage ist dann die Start-Etage \u2013 mit den Bildern am Rand wechselt man zu den anderen",card_room_names:"Raumnamen anzeigen",card_section_kiosk:"Wandtablet (Kiosk)",card_section_features:"Funktionen",card_weather_plan:"wie im Plan eingestellt",card_pro_hint:"Bewegungsspur und Kamerawand geh\xF6ren zum Kameras: Die Spur zeigt die letzte halbe Stunde, die Wand alle Kameras des Plans.",card_idle_return:"Zur\xFCck zur Startansicht nach",card_idle_off:"Nie",card_idle_min:"{n} min ohne Bedienung",card_idle_hint:"Nach der Wartezeit schlie\xDFt die Karte den Raum und zeigt wieder die Startansicht.",card_night:"Nachtdimmung",card_night_off:"Aus",card_night_sun:"Nach Sonnenstand",card_night_time:"Zeitraum",card_night_range:"Zeitraum (z. B. 22:00-06:00)",card_idle_orbit:"Kamerafahrt als Bildschirmschoner",card_idle_orbit_hint:"Nach der R\xFCckkehr dreht sich die Ansicht langsam, bis jemand das Tablet ber\xFChrt",card_dashboard:"Knopf zu einem Dashboard (Pfad)",card_dashboard_label:"Beschriftung des Knopfs",card_dashboard_hint:"Ein Knopf oben rechts in der Karte \xF6ffnet das Dashboard oder die Ansicht mit diesem Pfad, z. B. /lovelace/home oder /dashboard-haus/0. Ohne Beschriftung zeigt er \u2302.",card_alerts:"Warnungen anzeigen",card_alerts_hint:"Rauch, Gas, CO, Wasser, Alarmanlage und offene Fenster bei Regen: der Raum pulsiert, oben erscheint ein Hinweis",card_alert_jump:"Bei neuer Warnung zum Raum springen",card_alert_jump_hint:"Die Ansicht wechselt selbst zur Etage und zum Raum der Warnung",card_scenes:"Szenen-Kn\xF6pfe im Raum",card_scenes_hint:"Szenen und Skripte des Bereichs als Kn\xF6pfe unter der 3D-Ansicht, wenn ein Raum gew\xE4hlt ist",card_sensor_bar:"Eigene Sensoren oben",card_sensor_bar_hint:"Die im Editor gew\xE4hlten Sensoren (Einstellungen) oben links auf der Karte",card_central_open:"Sternmen\xFC offen und gro\xDF",card_central_open_hint:"Favoriten und eigene Kn\xF6pfe stehen von Anfang an offen, eine Nummer gr\xF6\xDFer",card_keep_camera:"Kamera beim Etagenwechsel behalten",card_keep_camera_hint:"Gleiche Seite, H\xF6he und Entfernung auf jeder Etage",card_today:"Karte \u201EHeute\u201C",card_today_hint:"Termine von heute und f\xE4llige M\xFClltonnen oben rechts",card_announcements:"Durchsagen",card_announcements_hint:"Durchsagen (Aktion \u201ENextFloor: Durchsage\u201C) erscheinen gro\xDF auf der Karte, mit Gong und gesprochen",weather_short:"Wetter",time_of_day:"Tageszeit",time_of_day_hint:"Zeigt Sonne, Licht, Schatten und Look zu einer anderen Uhrzeit von heute. Noch einmal tippen zeigt wieder das Jetzt.",menu_open:"Men\xFC offen",menu_open_hint:"Das Sternmen\xFC mit Favoriten und eigenen Kn\xF6pfen steht auf diesem Ger\xE4t von Anfang an offen, eine Nummer gr\xF6\xDFer \u2013 f\xFCr ein Wandtablet, das vor allem Szenen schaltet.",keep_camera:"Kamera behalten",keep_camera_hint:"Beim Wechsel der Etage bleibt die Kamera auf derselben Seite, H\xF6he und Entfernung, statt die neue Etage von der Startseite aus einzupassen.",view_zoom:"Zoom",view_zoom_hint:"Wie nah die eingepassten Ansichten kommen \u2013 auf kleinen Tablets wirkt das Haus gr\xF6\xDFer.",weather_entity:"Wetter-Entit\xE4t",weather_effects:"Wetter-Effekte in 3D",card_weather_density:"Regen- und Schneemenge",card_weather_density_hint:"Weniger Tropfen und Flocken als das Wetter meldet; Wolken, Nebel und Blitze bleiben",weather_effect_rain:"Regen",weather_effect_snow:"Schnee",weather_effect_fog:"Nebel (graut die Szene ein)",weather_effect_clouds:"Wolken dunkeln Himmel und Sonne ab",weather_effect_lightning:"Blitze bei Gewitter",weather_effect_sky:"Sonne und Mond am Himmel",rain_warning:"Warnung: Fenster offen bei Regen",sun_patches:"Sonnenlicht und Schatten",sun_patches_hint:"Mit eingestellter Nordrichtung f\xE4llt das Sonnenlicht aus sun.sun als helle Flecken durch die Fenster auf den Boden, und das Haus wirft seinen Schatten auf das Grundst\xFCck. Ohne Haken bleiben Boden und Grundst\xFCck ohne Sonnenflecken und Schatten.",weather_entity_hint:"Welche Wetter-Entit\xE4t den Himmel ums Haus steuert. \u201EAutomatisch\u201C nimmt die erste gefundene.",weather_hint:"Wetter am Haus: Regen und Schnee fallen mit dem echten Wind, Wolken ziehen mit Schatten \xFCbers Grundst\xFCck, Blitze, Nebel, Sonne und Mond",card_weather:"Wetter drau\xDFen",card_weather_hint:"Regen, Schnee, Hagel, Wolken mit Schatten, Blitze und Nebel aus der ersten Wetter-Entit\xE4t (weather_entity w\xE4hlt eine andere); auf Stufe Tablet weniger Teilchen",alerts:"Warnungen",alert_smoke:"Rauch: {name}",alert_gas:"Gas: {name}",alert_co:"Kohlenmonoxid: {name}",alert_water:"Wasser: {name}",alert_alarm:"Alarm ausgel\xF6st",alert_alarm_by:"Alarm ausgel\xF6st durch {cause}",alert_alarm_pending:"Alarm wird ausgel\xF6st",alert_window_rain:"Fenster offen bei Regen: {name}",alert_power_outage:"Stromausfall: {name}",alert_contact_lost:"Kontakt antwortet nicht: {name}",rain_sensor:"Regensensor (eigene Wetterstation)",outage_sensor:"Sensor f\xFCr Stromausfall",outage_hint:"Ein Bin\xE4rsensor der Klasse Strom, der aus ist, ein anderer Bin\xE4rsensor, der an ist, ein Status wie \u201Eoff_grid\u201C oder \u201Ebackup\u201C oder eine Spannung unter 50 V l\xF6sen eine Warnung f\xFCrs ganze Haus aus.",contact_warning:"Warnen, wenn ein T\xFCr- oder Fensterkontakt nicht erreichbar ist",contact_warning_hint:"Ist ein Kontakt 10 Minuten lang \u201Enicht verf\xFCgbar\u201C (leere Batterie, au\xDFer Funkreichweite), sieht das Fenster in 3D geschlossen aus, obwohl es keiner wei\xDF. Dann nennt ein Hinweis den Kontakt. Ein Neustart von Home Assistant warnt nicht.",motion_markers_active:"Bewegungsmelder nur zeigen, wenn sie etwas erkennen",motion_markers_active_hint:"Gilt f\xFCr Bewegungs-, Anwesenheits- und Pr\xE4senzmelder. Ein Melder, dessen Symbol auf immer zeigen steht, bleibt sichtbar.",status_entities:"Eigene Sensoren oben in der 3D-Ansicht",status_add:"Sensor hinzuf\xFCgen",status_entities_hint:"Zum Beispiel Au\xDFentemperatur, Alarmanlage oder Luftqualit\xE4t: Sie stehen oben links mit Name und Wert, auch in einem ge\xF6ffneten Raum. Antippen \xF6ffnet die Details. Bis zu 12.",announce_tts:"Text-zu-Sprache f\xFCr Durchsagen",announce_phrases:"S\xE4tze f\xFCr Durchsagen (einer pro Zeile)",announce_phrases_hint:"Leer: die mitgelieferten S\xE4tze. Durchsagen gibt es auch als Aktion \u201ENextFloor: Durchsage\u201C f\xFCr Automationen \u2013 auf den Lautsprechern der R\xE4ume und auf jedem offenen NextFloor-Bildschirm.",opening_rain_warning:"Bei Regen warnen",opening_light_well:"Lichtschacht davor",sill_boards:"Fensterbank",sill_boards_auto:"Automatisch",sill_boards_none:"Keine",sill_boards_inside:"Nur innen",sill_boards_outside:"Nur au\xDFen",room_names_short:"Raumnamen",floor_stack_short_dim:"Abgedunkelt",floor_stack_short_stacked:"Gestapelt",floor_stack_short_single:"Einzeln",size_short_w:"B",size_short_d:"T",size_short_h:"H",import_error_not_json:"Die Datei ist kein JSON.",import_error_not_plan:"Die Datei ist kein NextFloor-Plan.",import_other_hint:"Aus Sweet Home 3D: die .sh3d-Datei hier importieren. Etagen, R\xE4ume, T\xFCren, Fenster und freie W\xE4nde werden \xFCbernommen, M\xF6bel nicht.",import_sh3d_found:"Sweet Home 3D: {floors} Etagen, {rooms} R\xE4ume, {openings} T\xFCren und Fenster, {walls} freie W\xE4nde ({furniture} M\xF6bel werden nicht \xFCbernommen).",import_dxf_found:"DXF: {rooms} R\xE4ume (geschlossene Polylinien) und {walls} freie W\xE4nde (Linien) auf einer Etage.",import_error_dxf_empty:"In der DXF-Datei sind keine Linien oder Polylinien.",import_error_sh3d:"Das ist keine Sweet-Home-3D-Datei, die sich lesen l\xE4sst (es braucht Sweet Home 3D 5.3 oder neuer).",import_error_sh3d_empty:"In der Sweet-Home-3D-Datei sind keine R\xE4ume oder W\xE4nde.",export_name_template:"vorlage",export_name_backup:"sicherung",card_floor_stack:"Etagen darunter",floor_stack_dim:"Abgedunkelt",floor_stack_stacked:"Gestapelt (ganzes Haus bis hier)",floor_stack_single:"Ausgeblendet (nur diese Etage)",card_control_walls:"W\xE4nde hoch/Schnitt",card_control_floors:"Etagen auseinander",card_control_temperature:"Temperatur",card_control_humidity:"Feuchte",card_control_co2:"CO\u2082",card_controls_hint:"W\xE4nde hoch/Schnitt, Etagen auseinander und Temperatur, Feuchte, CO\u2082 zum Umschalten",controls_hide:"Bedienelemente ausblenden \u2013 nur die 3D-Ansicht bleibt",nav_wrap:"Leiste umbrechen: alle Etagen und R\xE4ume auf mehreren Zeilen",bars_fold:"Schalter einklappen",bars_unfold:"Schalter",nav_row:"Leiste in einer Zeile (seitlich scrollen)",controls_show:"Bedienelemente wieder einblenden",card_controls_hidden:"Mit ausgeblendeten Bedienelementen starten",card_controls_hidden_hint:"Nur die 3D-Ansicht; ein Auge unten links holt Leisten, Werte und Schalter zur\xFCck",card_controls_hide_after:"Bedienelemente ausblenden nach",card_hide_after_s:"{n} s ohne Ber\xFChrung",card_fullscreen_button:"Vollbild-Taste",card_fullscreen_button_hint:"Blendet das Dashboard drumherum aus (z. B. am Wandtablet)",fullscreen:"Vollbild",fullscreen_exit:"Vollbild beenden",card_section_show:"Anzeigen",card_floor:"Etage",card_floor_house:"Ganzes Haus (Etage antippen zum \xD6ffnen)",card_height:"H\xF6he (Pixel)",card_walls:"W\xE4nde",card_quality_hint:"\u201ETablet\u201C ist die sparsamste Stufe \u2013 ideal f\xFCr Fire-Tablets und andere Wandtablets.",card_flows_switch:"Schalter in der Karte",card_flows_on:"Immer an",card_flows_off:"Immer aus",holos:"Karten",holos_hint:"Die Live-Karten \xFCber dem Haus (Energiebilanz, Auto, Medien) ein- oder ausblenden",card_energy:"Energiewerte oben anzeigen",card_room_panel:"Raum-Details beim Antippen",card_room_buttons:"Raum-Kn\xF6pfe",card_room_buttons_hint:"Eine Reihe mit einem Knopf je Raum oben in der Karte \u2013 antippen \xF6ffnet den Raum, wie das Antippen im Modell",card_room_panel_hint:"Lichter und Rolll\xE4den des Raums in einem Seitenfenster",card_explode:"Etagen in der Hausansicht auseinanderziehen",card_roof_fade:"Dach beim Heranzoomen ausblenden",card_roof_fade_hint:"Aus: Das Dach bleibt auf dem Haus, auch wenn die Kamera nah herankommt.",card_stats:"Leistungsanzeige (Bilder pro Sekunde)",card_stats_hint:"Zum Pr\xFCfen, wie fl\xFCssig die Karte auf dem Ger\xE4t l\xE4uft",packs:"M\xF6bel-Packs",lib_badge_light:"Leuchte: l\xE4sst sich mit einem Licht verkn\xFCpfen und in 3D schalten",lib_badge_electric:"Elektrisch: l\xE4sst sich mit Entit\xE4t und Leistungssensor verkn\xFCpfen (schalten, Bild, Verbrauch)",lib_badge_hint:"M\xF6bel mit Symbol lassen sich mit Entit\xE4ten verkn\xFCpfen: Leuchten schalten, Bildschirme zeigen Bilder, Ger\xE4te ihren Verbrauch.",care_bin_today:"Heute Abholung",care_bin_tomorrow:"Morgen Abholung",care_bin_days:"In {n} Tagen",care_mail_yes:"Post ist da",care_mail_no:"Leer",care_plant_thirsty:"Durst",care_plant_ok:"Gut versorgt",care_time_left:"Noch {time}",care_entity_bin:"Abholtermin (Sensor)",care_entity_mail:"Post-Sensor",care_entity_plant:"Bodenfeuchte (Sensor)",care_thirsty_below:"Durst unter (%)",care_hint_bin:"Ein Sensor mit dem n\xE4chsten Abholtermin: Tage, ein Datum, \u201Eheute\u201C/\u201Emorgen\u201C oder die Integration Waste Collection Schedule. Am Tag davor und am Abholtag leuchtet die Tonne.",care_hint_mail:"Ein Sensor, der meldet, dass Post im Kasten ist (z. B. ein Kontakt an der Klappe). Dann leuchtet der Briefkasten.",care_hint_plant:"Ein Feuchtesensor in der Erde. Darunter leuchtet die Pflanze und meldet Durst.",lib_cat_lights:"Leuchten",lib_cat_seating:"Sitzen",lib_cat_tables:"Tische",lib_cat_storage:"Schr\xE4nke & Regale",lib_cat_beds:"Betten",lib_cat_kitchen:"K\xFCche",lib_cat_appliances:"Haushaltsger\xE4te",lib_cat_bath:"Bad",lib_cat_media:"TV & Audio",lib_cat_office:"B\xFCro",lib_cat_tech:"Technik",lib_cat_climate:"Heizung & Klima",lib_cat_energy:"Energie",lib_cat_garden:"Garten & Terrasse",lib_cat_plants:"Pflanzen",lib_cat_kids:"Kinder",lib_cat_fitness:"Fitness",lib_cat_pets:"Haustiere",lib_cat_workshop:"Werkstatt & Garage",lib_cat_music:"Musik & Atelier",lib_cat_season:"Saison & Deko",lib_cat_pictures:"Bilder & Rahmen",lib_cat_vehicles:"Fahrzeuge",lib_cat_building:"Treppen & Bauteile",lib_cat_decor:"Deko & Sonstiges",lib_favourites:"Favoriten",lib_recent:"Zuletzt benutzt",lib_for_room:"Passend zu {room}",lib_all_rooms:"Alle R\xE4ume zeigen",lib_linkable:"verkn\xFCpfbar",lib_lit:"leuchtet",lib_outdoor:"drau\xDFen",lib_fav_add:"Zu den Favoriten",lib_fav_remove:"Aus den Favoriten nehmen",lib_sizes:"Gr\xF6\xDFen",feature_name_energy:"Energiefluss",ext_tab:"Erweiterungen",ext_title:"Erweiterungen",models:"Eigene 3D-Modelle",models_hint:"F\xFCr manche Fahrzeuge kann NextFloor ein echtes 3D-Modell zeigen, wenn du eins besitzt. W\xE4hle die Datei (.glb) hier aus: NextFloor dreht sie richtig herum, macht sie leichter, markiert den Lack und legt sie auf deinem Home Assistant ab. Ohne Modell sieht das Fahrzeug aus wie bisher.",models_licence:"Die Dateien geh\xF6ren dir und bleiben auf deinem Home Assistant. NextFloor liefert keine Modelle mit; bitte pr\xFCfe, dass die Lizenz deines Modells die Nutzung in deiner Installation erlaubt.",model_add:"Modell hochladen \u2026",model_replace:"Modell ersetzen \u2026",model_remove:"Entfernen",model_present:"vorhanden",model_missing:"noch keins",model_remove_confirm:"Das Modell \u201E{id}\u201C von Home Assistant l\xF6schen?",model_removed:"Modell \u201E{id}\u201C gel\xF6scht.",model_uploaded:"Modell \u201E{id}\u201C hochgeladen ({size}). Lade das Panel neu, damit es erscheint.",model_upload:"Auf Home Assistant ablegen",model_info:"{triangles} Dreiecke, {size} m",model_front:"Vorderseite",model_front_hint:"Drehe das Modell, bis die Front zum Betrachter zeigt (schr\xE4g nach unten links in der Vorschau).",model_paint:"Lack (die Farbe, die du im Editor w\xE4hlst)",model_paint_preview:"Farbe in der Vorschau",model_detail:"Detailgrad",model_detail_light:"Leicht (Tablet)",model_detail_normal:"Normal",model_detail_fine:"Fein",model_result:"Ergebnis: {triangles} Dreiecke, {size}",model_error_not_glb:"Das ist keine .glb-Datei (bin\xE4res glTF). Exportiere das Modell als \u201EglTF binary\u201C.",model_error_compressed:"Die Datei ist komprimiert (Draco, Meshopt oder KTX). Exportiere sie ohne Kompression.",model_error_empty:"In der Datei ist nichts Dreidimensionales zu finden.",model_error_unreadable:"Die Datei l\xE4sst sich nicht lesen: {detail}",model_error_too_large:"Die Datei ist gr\xF6\xDFer als {max}. W\xE4hle einen geringeren Detailgrad.",model_upload_forbidden:"Nur Administratoren d\xFCrfen Modelle hochladen.",model_upload_too_large:"Home Assistant nimmt keine Dateien \xFCber {max} an. W\xE4hle einen geringeren Detailgrad.",model_upload_not_glb:"Home Assistant hat die Datei abgelehnt (kein bin\xE4res glTF).",model_upload_bad_id:"Die Modell-Kennung ist ung\xFCltig.",model_upload_other:"Das Hochladen hat nicht geklappt: {detail}",ext_intro:"Hier importierst du eigene M\xF6bel-Packs, l\xE4dst eigene 3D-Modelle hoch und bindest Plugins ein.",plugin:"Plugin",plugins_title:"Plugins",plugins_intro:"Plugins erweitern NextFloor um eigene Licht-Animationen, Ger\xE4te und Karten im Raum-Panel. Trag die Adresse eines Plugins ein (eine .js-Datei in /config/www, also /local/\u2026, aus HACS /hacsfiles/\u2026 oder https://\u2026).",plugins_docs:"Wie man ein Plugin schreibt",plugins_warning:"Plugins laufen mit denselben Rechten wie NextFloor in deinem Browser. Nimm nur Plugins, deren Quelle du vertraust.",plugins_off:"ausgeschaltet",plugins_error:"Fehler",plugins_loading:"wird geladen \u2026",plugins_nothing_registered:"geladen, hat aber nichts angemeldet",plugins_loaded:"aktiv",plugins_reload_hint:"Wirkt nach dem Neuladen der Seite",plugins_remove:"Entfernen",plugins_none:"Noch keine Plugins eingetragen.",plugins_from_dashboard:"\xDCber eine Dashboard-Ressource angemeldet",plugins_add:"Hinzuf\xFCgen",plugins_url_invalid:"Bitte eine .js-Adresse unter /local/\u2026, /hacsfiles/\u2026 oder https://\u2026 angeben.",plugins_exists:"Dieses Plugin ist schon eingetragen.",plugins_limit:"H\xF6chstens 20 Plugins.",packs_title:"M\xF6bel-Packs",packs_intro:"Eigene M\xF6bel als Pack (JSON) importieren: als Datei oder unten einf\xFCgen. {n} Packs sind mitgeliefert und immer da.",packs_docs:"Pack-Format",packs_none:"Noch keine eigenen Packs importiert.",community_title:"Community-M\xF6bel",community_intro:"M\xF6bel, die andere mit dem M\xF6bel-Baukasten gebaut und geteilt haben \u2013 gepr\xFCft und kostenlos. Bau deine eigenen:",community_builder:"M\xF6bel-Baukasten \xF6ffnen",community_how:"So teilst du deine",community_load:"Community-M\xF6bel laden",community_none:"Noch keine Community-M\xF6bel \u2013 sei die oder der Erste!",community_install:"Installieren",community_update:"Aktualisieren",community_installed:"Installiert",community_failed:"Die Community-M\xF6bel lie\xDFen sich nicht laden: {detail}",pack_import:"Pack-Dateien importieren \u2026",pack_paste:"JSON importieren",pack_paste_empty:"F\xFCge zuerst das JSON eines Packs ein.",pack_paste_not_json:"Das ist kein g\xFCltiges JSON: {detail}",pack_imported:"\u201E{name}\u201C von {publisher} importiert \u2013 {n} M\xF6bel",packs_imported_n:"{n} von {total} Packs importiert",pack_by:"von {publisher} \xB7 {n} M\xF6bel",pack_remove:"Entfernen",pack_remove_confirm:"Pack \u201E{name}\u201C entfernen? M\xF6bel daraus bleiben als einfache K\xE4sten im Plan.",pack_error_not_a_pack:'Das ist kein M\xF6bel-Pack (es fehlt "format": "nfpack").',pack_error_builtin:"Ein mitgeliefertes Pack hat schon diese ID.",pack_error_invalid_content:"Das Pack enth\xE4lt ung\xFCltige M\xF6bel: {detail}",pack_error_too_large:"Das Pack ist zu gro\xDF (h\xF6chstens 1 MB).",pack_error_needs_update:"Dieses Pack braucht eine neuere Version von NextFloor. Bitte zuerst aktualisieren (HACS \u203A NextFloor \u203A \u22EE \u203A \u201EInformationen aktualisieren\u201C \u203A \u201EHerunterladen\u201C), Home Assistant neu starten und dann noch einmal importieren.",pack_error_other:"Import fehlgeschlagen: {detail}",store_open:"Plugin-Store \xF6ffnen",store_close:"Plugin-Store schlie\xDFen",store_intro:"Gepr\xFCfte Plugins aus der Community. Jedes wird vor der Aufnahme angesehen und danach nicht mehr ver\xE4ndert.",store_submit:"Eigenes Plugin einreichen",store_empty:"Noch keine Plugins im Store.",store_failed:"Der Store lie\xDF sich nicht laden ({error}).",store_install:"Installieren",store_installed:"installiert",store_update:"Aktualisieren",store_confirm:`\u201E{name}\u201C von {author} installieren?

Ein Plugin l\xE4uft mit denselben Rechten wie NextFloor in deinem Browser. Die Datei wurde gepr\xFCft, ihr Inhalt ist festgelegt:
{url}`,manual:"Anleitung",manual_more:"Mehr erfahren",feature_text_energy:"Energieteilchen fliegen in B\xF6gen von den Solarfeldern zum Wechselrichter, zwischen Haus, Akku, Netz und Verbrauchern \u2013 schneller und dichter, je mehr Strom flie\xDFt. Die Module funkeln mit ihrer Produktion, eine Glaskarte \xFCber dem Dach zeigt die Bilanz und wie autark das Haus gerade ist.",live_autarky:"autark",live_day_hint:"Die letzten 24 Stunden: Solar (Fl\xE4che) und Verbrauch (Linie)",live_week_hint:"Die letzten 7 Tage: Sonne {solar} kWh, Verbrauch {use} kWh (gelb: Sonne, hell: Verbrauch)",live_days:"Tage",live_car_away:"Unterwegs",live_car_charging:"L\xE4dt",live_car_plugged:"Eingesteckt",live_car_lock:"Verriegeln",live_car_unlock:"Entriegeln",live_car_unlock_confirm:"{name} wirklich entriegeln?",live_car_climate:"Klimatisierung",live_car_charge:"Laden starten/stoppen",live_media_prev:"Zur\xFCck",live_media_playpause:"Abspielen/Pause",live_media_next:"Weiter",live_media_volume:"Lautst\xE4rke",live_car_device:"Auto (eine Entit\xE4t des Autos)",live_car_device_hint:"Ladestand, Reichweite, Laden, Stecker, Schloss und Klima findet NextFloor selbst am Ger\xE4t des Autos. Ohne Angabe nimmt es den Anwesenheitssensor des Stellplatzes.",live_car_departure_entity:"Abfahrtszeit (optional)",live_car_departure:"Abfahrt {time}",live_car_open:"Offen: {parts}",printer_printing:"druckt",printer_done:"fertig",printer_paused:"pausiert",printer_error:"Fehler",printer_idle:"bereit",printer_done_at:"fertig um {time}",printer_layer:"Schicht",printer_nozzle:"D\xFCse",printer_bed:"Bett",heatpump_heating:"heizt",heatpump_water:"macht Warmwasser",heatpump_cooling:"k\xFChlt",heatpump_defrost:"taut ab",heatpump_idle:"in Ruhe",heatpump_flow_return:"Vor- \u2192 R\xFCcklauf",heatpump_heat:"W\xE4rme",heatpump_power:"Strom",heatpump_outside:"au\xDFen",pack_missing_item:"M\xF6bel aus entferntem Pack",back_to_room:"Zur\xFCck zu {room}",back_to_floor:"Zur\xFCck zur Etage",hint_furniture:"Raum antippen, dann rechts ein M\xF6belst\xFCck w\xE4hlen \xB7 M\xF6bel ziehen, an den Ecken die Gr\xF6\xDFe \xE4ndern",furniture_into:"Neue M\xF6bel kommen in die Mitte von \u201E{room}\u201C.",furniture_pick_room:"Tipp: Erst einen Raum antippen \u2013 dann landen neue M\xF6bel in seiner Mitte.",flows:"Stromfluss",flows_hint:"Energieb\xF6gen zwischen Solarfeldern, Wechselrichter, Akku, Netz und Verbrauchern ein- oder ausblenden",chk_title:"Einrichtung",chk_hint:"Was der Energiefluss braucht. Antippen springt an die Stelle.",chk_solar:"Solarfeld angelegt",chk_solar_add:"Ein Solarfeld aufs Dach legen",chk_meter:"Stromz\xE4hler mit Netzsensor",chk_meter_sensor:"Stromz\xE4hler: Netzsensor (W) fehlt",chk_meter_add:"Stromz\xE4hler anlegen",chk_inverter:"Wechselrichter mit Leistungssensor",chk_inverter_sensor:"Wechselrichter: Leistungssensor fehlt",chk_inverter_add:"Wechselrichter anlegen",chk_battery:"Stromspeicher mit Leistung und Ladestand",chk_battery_sensor:"Stromspeicher: Leistung oder Ladestand fehlt",chk_battery_opt:"Stromspeicher (optional)",chk_grid:"Netzanschluss gesetzt",chk_grid_opt:"Netzanschluss (optional, sonst automatisch)",energy_sign_grid:"Das Haus zeigt Einspeisung, obwohl die Sonne nichts liefert. Der Netzsensor hat wahrscheinlich das umgekehrte Vorzeichen.",energy_sign_battery:"Der Speicher l\xE4dt ohne Sonne und ohne Netzbezug. Sein Sensor hat wahrscheinlich das umgekehrte Vorzeichen.",energy_sign_flip:"Vorzeichen umkehren",help_title:"Hilfe und R\xFCckmeldung",help_hint:"Fehler bitte als Issue auf GitHub, W\xFCnsche als Diskussion \u2013 so geht nichts verloren, und alle sehen den Stand.",help_issue:"Problem melden",help_idea:"Idee vorschlagen",furn_name:"Name (optional)",furn_mirror:"Spiegeln",furn_mirror_hint:"Links und rechts vertauschen \u2013 das L-Sofa andersherum, der Schrank mit der T\xFCr auf der anderen Seite, die K\xFCchenzeile gespiegelt.",hint_opening:"Auf eine Wand tippen, um eine T\xFCr oder ein Fenster einzusetzen \u2013 die Art w\xE4hlst du danach rechts",preset_door:"T\xFCr",preset_door_double:"Doppelt\xFCr",preset_window:"Fenster",preset_window_double:"Fenster 2-fl\xFCgelig",preset_terrace:"Terrassent\xFCr",preset_terrace_double:"Terrassent\xFCr 2-fl\xFCgelig",preset_lift_slide:"Hebe-Schiebet\xFCr",preset_garage:"Garagentor",preset_front:"Haust\xFCr",opening_style:"Stil",sidelight_auto:"automatisch",sidelight_hinge:"Seitenteil an der Anschlagseite",sidelight_hinge_hint:"Das Seitenteil sitzt sonst gegen\xFCber dem Anschlag; mit Haken neben den B\xE4ndern.",sidelight_width:"Breite Seitenteil (m)",sidelight_width_left:"Seitenteil links (m)",sidelight_width_right:"Seitenteil rechts (m)",style_auto:"Automatisch ({style})",style_interior:"Zimmert\xFCr",style_front:"Haust\xFCr",style_front_glass:"Haust\xFCr mit Glasausschnitt",style_sidelight:"Haust\xFCr mit Seitenteil",style_sidelights:"Haust\xFCr mit 2 Seitenteilen",style_glass:"Glast\xFCr",style_sliding:"Schiebet\xFCr",style_passage:"Durchbruch (ohne T\xFCr)",style_standard:"Standard",style_bars:"Mit Sprossen",style_glass_wall:"Glaswand (feststehend)",preset_glass_wall:"Glaswand",flip_hinge:"Anschlag wechseln",flip_main_leaf:"Hauptfl\xFCgel wechseln",flip_hinge_hint:"Scharniere auf die andere Seite",flip_swing:"\xD6ffnungsrichtung umdrehen",flip_swing_hint:"Die T\xFCr schwenkt in den Raum oder zur anderen Seite",main_leaf:"Hauptfl\xFCgel (vom Raum aus)",contact_main:"Kontakt Hauptfl\xFCgel",contact_second:"Kontakt zweiter Fl\xFCgel",tool_outdoor:"Au\xDFen",tool_measure:"Nach Ma\xDF",hint_measure:"Startpunkt antippen, dann rechts die Wandl\xE4ngen mit Richtung eingeben",measure:"Raum nach Ma\xDF",measure_start:"Tippe im Plan auf den Startpunkt, z. B. eine Raumecke.",measure_from:"Start bei {x} / {z} m \u2013 antippen verschiebt den Start.",measure_length:"L\xE4nge der n\xE4chsten Wand (m)",measure_close:"Raum schlie\xDFen",measure_undo:"Letzte Wand weg",measure_gap:"L\xFCcke zum Start: {gap} m (wird beim Schlie\xDFen verbunden)",measure_hint:"Tipp: L\xE4nge eintippen und Pfeiltaste dr\xFCcken. Mit gemessenen Innenma\xDFen danach \u201EL\xFCcken schlie\xDFen\u201C.",rect_by_size:"Rechteck nach Ma\xDF",rect_add:"Rechteck anlegen",dir_up:"Nach oben",dir_down:"Nach unten",dir_left:"Nach links",dir_right:"Nach rechts",hint_outdoor:"Ziehen, um eine Au\xDFenfl\xE4che (Rasen, Terrasse, Pool \u2026) aufzuziehen",outdoor:"Au\xDFenfl\xE4che",outdoor_type:"Art",outdoor_height:"H\xF6he (m)",outdoor_offset:"H\xF6henversatz (m, \u2212 = tiefer)",outdoor_outline:"Umrisslinie zeigen",outdoor_outline_hint:"Ohne Haken zeichnet die Fl\xE4che keine Leuchtlinie an ihrem Rand \u2013 f\xFCr gro\xDFe Grundst\xFCcke aus mehreren Rasenfl\xE4chen.",outdoor_corners_hint:"Ecken: ein + auf einer Kante f\xFCgt eine Ecke hinzu, Ziehen formt die Fl\xE4che, \xD7 entfernt eine Ecke.",outdoor_hint:"Au\xDFenleuchten (Wegleuchte, Garten-Spot, Wandleuchte au\xDFen) beleuchten alle Au\xDFenfl\xE4chen und die Fassade.",out_lawn:"Rasen",out_terrace:"Terrasse",out_path:"Weg",out_driveway:"Einfahrt",out_pool:"Pool",out_bed:"Beet",out_hedge:"Hecke",out_fence:"Zaun",out_wild:"Wildfl\xE4che",out_pergola:"Pergola / Rahmen",outdoor_open:"Offen (letzte Kante weglassen)",outdoor_open_hint:"Die Kante vom letzten zum ersten Punkt wird nicht gezeichnet \u2013 ein Zaun oder eine Pergola, die ans Haus lehnt.",outdoor_bracing:"X-Verstrebung",outdoor_cut:"Aus Fl\xE4chen ausschneiden",outdoor_cut_hint:"Jede Fl\xE4che, in der diese ganz liegt, bekommt hier ein Loch \u2013 ein Pool in der Terrasse, ein Teich oder eine Wildfl\xE4che im Rasen. Die Reihenfolge beim Zeichnen spielt keine Rolle. Ein Pool schneidet sich von selbst aus.",outdoor_area_hint:"Der Home-Assistant-Bereich dieser Fl\xE4che (Garten, Terrasse, Pool): seine Ger\xE4te und Sensoren stehen unter Drau\xDFen, und ein Pin auf der Fl\xE4che \xF6ffnet es.",pool_temp:"Wassertemperatur (optional)",pool_pump:"Pumpe / Filter (optional)",pool_pump_on:"Pumpe l\xE4uft",outdoor_slope:"Gef\xE4lle (m)",outdoor_slope_hint:"H\xF6henunterschied von der hohen zur tiefen Kante; die hohe Kante liegt auf dem H\xF6henversatz. Leuchten auf der Fl\xE4che folgen.",outdoor_slope_dir:"F\xE4llt nach",slope_x:"rechts (+X)",slope_nx:"links (\u2212X)",slope_z:"unten (+Z)",slope_nz:"oben (\u2212Z)",north:"Nordrichtung (\xB0 im Uhrzeigersinn von oben)",north_hint:"Die Nordrichtung braucht der Sonnenstand (Licht durch die Fenster).",map_on:"Echte Karte unter dem Plan anzeigen",map_lat:"Breitengrad",map_lon:"L\xE4ngengrad",map_use_ha:"Standort von Home Assistant \xFCbernehmen",map_opacity:"Sichtbarkeit (%)",map_zoom:"Detailstufe",map_zoom_coarse:"grob",map_zoom_fine:"fein",map_move:"Karte unter dem Plan verschieben",map_step:"Schritt",map_url:"Eigene Kachel-Adresse (leer = OpenStreetMap)",map_hint:"Dein Browser l\xE4dt die Kartenkacheln direkt vom Kartenserver (standardm\xE4\xDFig OpenStreetMap, bitte deren Nutzungsbedingungen beachten); solange die Karte aus ist, wird nichts geladen. Der Plan liegt auf der Karte, wie der Kompass es sagt \u2013 drehe den Kompass oder verschiebe die Karte, bis das Haus passt.",compass_title:"Kompass",compass_n_short:"N",compass_s_short:"S",compass_swap:"Nord \u2194 S\xFCd tauschen",compass_swap_hint:"Dreht den Kompass um 180\xB0. Zeichnung, Dachfl\xE4chen und Solarfelder bleiben, wie sie sind.",compass_hint:"Stimmt der Kompass nicht mit der Wirklichkeit \xFCberein, drehst du ihn hier \u2013 nichts muss neu gezeichnet werden. Sonnenlicht, Wind und die Himmelsrichtungen der Dachfl\xE4chen richten sich danach.",roof:"Dach",roof_none:"Kein Dach",roof_flat:"Flachdach",roof_gable:"Satteldach",roof_custom:"Dachfl\xE4chen (frei)",roof_sections:"Dachfl\xE4chen",roof_sections_hint:"Jede Dachfl\xE4che deckt ein Rechteck des Hauses ab, etwa das Wohnhaus, die Scheune oder einen Anbau \u2013 jede mit eigener Form, Firstrichtung, Traufh\xF6he und Neigung. Eine neue Fl\xE4che ziehst du im Plan auf; antippen w\xE4hlt sie aus, ziehen verschiebt sie, die Ecken \xE4ndern die Gr\xF6\xDFe.",roof_sections_start:"Dachfl\xE4chen aus den R\xE4umen erzeugen",roof_sections_regen:"Neu aus den R\xE4umen erzeugen",roof_sections_off:"Zur\xFCck zu einem Dach",roof_regen_confirm:"Alle Dachfl\xE4chen durch einen neuen Vorschlag aus den R\xE4umen ersetzen?",roof_section:"Dachfl\xE4che",roof_section_hint:"H\xF6hen z\xE4hlen vom Boden. Eine Seite mit tieferer Traufe zieht weiter herunter (Abschleppdach); Pultd\xE4cher steigen von der ersten Seite an.",roof_shape_gable:"Sattel",roof_shape_hip:"Walm",roof_shape_pent:"Pult",roof_shape_flat:"Flach",roof_shape_halfhip:"Kr\xFCppelwalm",roof_shape_pyramid:"Zelt",roof_shape_mansard:"Mansard",roof_shape_parapet:"Attika",roof_shape:"Form",roof_end_start:"Ende am Firstanfang",roof_end_end:"Ende am Firstende",roof_halfhip:"Kr\xFCppelwalm beginnt bei",roof_halfhip_hint:"Wie weit oben am Giebel die Walmfl\xE4che beginnt, als Anteil der Giebelh\xF6he: niedrig = ein gro\xDFer Walm, hoch = nur die Spitze ist abgewalmt.",roof_axis_x:"First \u2194",roof_axis_z:"First \u2195",roof_eave:"Traufe (m)",roof_pitch_short:"Neigung (\xB0)",roof_height:"H\xF6he (m)",roof_base:"Wandoberkante (m)",roof_rotation:"Drehung (\xB0)",roof_on_floor:"Sitzt auf Etage",roof_on_floor_hint:"Setzt den Abschnitt auf die Wandoberkante dieser Etage; Grundh\xF6he und Traufen wandern mit. In der 3D-Ansicht geh\xF6rt das Dach zu dieser Etage.",roof_base_hint:"Liegt sie unter der Deckenh\xF6he des Geschosses darunter, enden dessen W\xE4nde an der Dachunterseite: Kniestock an der Traufe, Giebel bis zum First, Innenw\xE4nde an der Schr\xE4ge. Im Grundriss zeigen gestrichelte Linien, wo 1,5 m und 2 m Kopfh\xF6he bleiben.",roof_ridge_height:"Firsth\xF6he",roof_side_top:"oben",roof_side_bottom:"unten",roof_side_left:"links",roof_side_right:"rechts",roof_swap:"Seiten tauschen",roof_open:"\xDCberdachung (Pfosten statt W\xE4nde, durchsichtig)",roof_open_short:"\xDCberdachung",roof_dormer:"Gaube",roof_dormer_hint:"Eine Gaube auf dieser Dachseite: 2 m breit, Front an der Traufwand, Traufe 1,4 m \xFCber der Dachtraufe, Satteldach. Danach verschieben, Breite und H\xF6hen \xE4ndern wie bei jeder Dachfl\xE4che; die Hauptfl\xE4che \xF6ffnet sich darunter, die Wand des Dachgeschosses steigt bis zur Gaube \u2013 dort passt ein Fenster.",roof_outline:"Umriss des Geschosses \xFCbernehmen",roof_outline_hint:"Ein Flachdach als freie Form: \xFCbernimmt den Umriss der R\xE4ume des angezeigten Geschosses (auch L- oder Z-f\xF6rmig) als eine Fl\xE4che ohne Kanten. Die Ecken lassen sich danach ziehen.",roof_points_hint:"Freie Form: Ziehe die Ecken im Plan, ein + auf einer Kante f\xFCgt eine Ecke hinzu, \xD7 entfernt eine. Zur\xFCck zum Rechteck l\xF6scht die Form.",roof_rect:"Zur\xFCck zum Rechteck",roof_open_hint:"F\xFCr Terrassendach oder Carport: Statt W\xE4nden tragen Pfosten und Balken das Dach, die Fl\xE4che ist durchsichtig. Wo die \xDCberdachung an die Hauswand st\xF6\xDFt, liegt sie auf der Wand auf.",roof_swap_hint:"Dreht das Dach um: Die beiden Seiten tauschen Traufe und Neigung, ein Pultdach steigt in die andere Richtung.",roof_pitch:"Dachneigung (\xB0)",roof_overhang:"Dach\xFCberstand (m)",roof_ridge:"First",roof_ridge_long:"Entlang der langen Seite",roof_ridge_short:"Entlang der kurzen Seite (z. B. Reihenhaus)",device:"Ger\xE4t",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",device_centre:"In Raummitte",lights_spread:"Deckenlampen gleichm\xE4\xDFig verteilen",devices_search:"Ger\xE4te suchen \u2026",devices_more:"+{n} weitere",devices_less:"weniger",panel_more:"Weitere Ger\xE4te des Bereichs ({n})",panel_less:"Weniger anzeigen",gaps_close:"L\xFCcken schlie\xDFen",gaps_hint:"R\xE4ume mit bis zu 60 cm Abstand an einer gemeinsamen Wand zusammenf\xFChren; der Abstand wird die Innenwandst\xE4rke.",gaps_none:"Keine L\xFCcken zwischen R\xE4umen gefunden.",gaps_closed:"{n} Stellen geschlossen.",gaps_closed_wall:"{n} Stellen geschlossen, Innenwand jetzt {t} m.",fps:"FPS",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",garage_hint:"Das Tor folgt einem Garagen-Cover (Position oder offen/zu) oder einem Garagentor-Kontakt aus dem Bereich des Raums.",door_hint:"Mit T\xFCrkontakt schwenkt das T\xFCrblatt auf, ohne Sensor steht es halb offen.",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",opening_height:"H\xF6he (m)",hinge:"Anschlag (vom Raum aus)",hinge_left:"Links",hinge_right:"Rechts",cover_entity:"Rollladen",door_cover:"Antrieb (T\xFCr oder Tor mit Motor)",cover_position_entity:"Positions-Sensor (live)",cover_position_invert:"Sensor z\xE4hlt umgekehrt (0 = offen)",contact_entity:"Kontakt",sensor_kind:"Sensor-Art",sensor_kind_contact:"Fensterkontakt (offen/zu)",sensor_kind_handle:"Griff-Sensor (offen/gekippt/zu)",sensor_kind_contact_tilt:"Kontakt + Kipp-Sensor",handle_entity:"Griff-Sensor",handle_main:"Griff-Sensor Hauptfl\xFCgel",leaf_main:"Hauptfl\xFCgel",leaf_second:"Zweiter Fl\xFCgel",tilt_entity:"Kipp-Sensor",tilt_angle_entity:"Kippwinkel-Sensor (\xB0, optional)",tilt_angle_max:"Winkel f\xFCr \u201Eganz gekippt\u201C (\xB0)",tilt_angle_offset:"Offset: Winkel bei geschlossenem Fenster (\xB0)",tilt_angle_invert:"Winkel z\xE4hlt andersherum",door_shut:"Ohne Sensor geschlossen zeigen",door_shut_hint:"Eine T\xFCr ohne Kontakt steht in 3D halb offen, damit man sie als T\xFCr erkennt. Mit Haken wird sie geschlossen gezeichnet \u2013 Haust\xFCr, Carport, Nebent\xFCr.",door_angle:"\xD6ffnungswinkel",door_angle_default:"Standard",door_angle_hint:"Wie weit das T\xFCrblatt aufgeht. Mit Sensor \xF6ffnet es so weit, sobald er \u201Eoffen\u201C meldet; ohne Sensor steht es so weit offen (statt halb). Standard bleibt wie bisher.",entity_auto:"Automatisch ({name})",entity_auto_none:"Automatisch (keiner gefunden)",entity_none:"Keiner",entity_search:"Tippen zum Suchen \u2026",opening_hint:"Sensor-Art: Fensterkontakt (meldet offen/zu), Griff-Sensor (meldet offen, gekippt und zu \u2013 z. B. Homematic-Fenstergriff) oder Kontakt + Kipp-Sensor (ein zweiter Sensor, der nur \u201Egekippt\u201C meldet). Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums. Positions-Sensor: eine Entit\xE4t, die die Rollladen-Position auch w\xE4hrend der Fahrt meldet (z. B. Homematic \u201ELevel\u201C, 0\u2013100 % oder 0\u20131, offen = hoch) \u2013 dann f\xE4hrt der Rollladen in 3D live.",furniture:"M\xF6bel",furniture_add:"M\xF6bel hinzuf\xFCgen",studio_new:"Eigenes M\xF6bel bauen",studio_title:"M\xF6bel-Werkstatt",studio_title_edit:"M\xF6bel-Werkstatt: \xE4ndern",studio_hint:"W\xE4hle eine Vorlage, stell Ma\xDFe und Fronten ein und setz das M\xF6bel in den Plan. Es landet im Pack \u201EEigene M\xF6bel\u201C und l\xE4sst sich sp\xE4ter hier wieder \xE4ndern.",studio_kind:"Vorlage",studio_kind_cabinet:"Schrank",studio_kind_shelf:"Regal",studio_kind_lamp:"Lampe",studio_kind_device:"Ger\xE4t",studio_name:"Name",studio_width:"Breite (cm)",studio_depth:"Tiefe (cm)",studio_height:"H\xF6he (cm)",studio_doors:"T\xFCren",studio_drawers:"Schubladen",studio_shelves:"B\xF6den",studio_handle:"Griffe",studio_handle_bar:"Stangengriff",studio_handle_knob:"Knopf",studio_handle_none:"Grifflos",studio_base:"Unterbau",studio_base_plinth:"Sockel",studio_base_legs:"F\xFC\xDFe",studio_base_none:"Ohne",studio_back:"R\xFCckwand",studio_lamp:"Art",studio_lamp_floor:"Stehlampe",studio_lamp_table:"Tischlampe",studio_lamp_pendant:"Pendelleuchte",studio_lamp_wall:"Wandleuchte",studio_display:"Display vorne (zeigt den Mediaplayer)",studio_mount:"Steht",studio_mount_floor:"Auf dem Boden",studio_mount_surface:"Auf einem M\xF6bel",studio_mount_wall:"An der Wand",studio_color_body:"Korpus",studio_color_lamp_body:"Fu\xDF und Gestell",studio_color_front:"Fronten",studio_color_boards:"B\xF6den",studio_color_shade:"Schirm",studio_color_display:"Rahmen des Displays",studio_color_white:"Wei\xDF",studio_color_wood:"Holz",studio_color_metal:"Metall",studio_color_dark:"Dunkel",studio_color_glass:"Glas",studio_color_accent:"Akzent",studio_color_own:"Eigene Farbe",studio_color_plan:"Farbe des Plans",studio_place:"In den Plan setzen",studio_save:"\xC4nderung speichern",studio_open:"In der Werkstatt \xE4ndern",studio_error:"Speichern ging nicht: {detail}",studio_pack_name:"Eigene M\xF6bel",studio_pack_publisher:"M\xF6bel-Werkstatt",furniture_search:"M\xF6bel suchen \u2026",furniture_search_none:"Nichts gefunden. Versuch ein anderes Wort \u2013 deutsch oder englisch.",furniture_type:"M\xF6belst\xFCck",rotation:"Drehung (\xB0)",strip_tilt:"Neigung um die L\xE4nge (\xB0)",strip_upright:"Senkrecht",strip_rise:"Steigung entlang der L\xE4nge (\xB0)",strip_upright_hint:"Der Streifen steht hochkant: Seine L\xE4nge l\xE4uft von der H\xF6he \xFCber Boden nach oben \u2013 am T\xFCrrahmen, als Lichts\xE4ule. Die Neigung legt einen liegenden Streifen an die Schr\xE4ge (90\xB0 = Fl\xE4che zeigt zur Seite).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"H\xF6he (m)",furn_sofa:"Sofa",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_worktop:"Arbeitsplatte",furn_fridge:"K\xFChlschrank",furn_fridge_smart:"Smart-K\xFChlschrank (Side-by-Side)",furn_door_left:"T\xFCrsensor links (Gefrierseite)",furn_door_right:"T\xFCrsensor rechts (K\xFChlseite)",fridge_hint:"Meldet ein T\xFCrsensor \u201Eoffen\u201C, schwingt die T\xFCr in 3D auf.",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",furn_stairwell:"Boden\xF6ffnung",stairwell_hint:"Ein Loch im Boden dieser Etage, zum Beispiel \xFCber dem Treppenaufgang oder f\xFCr eine Galerie; von oben sieht man hindurch. Die \xD6ffnung muss ganz in einem Raum liegen; mehrere \xD6ffnungen d\xFCrfen sich \xFCberlappen (zum Beispiel f\xFCr eine L-Form). Eine Treppe auf der Etage darunter, die bis hier hinauf reicht, \xF6ffnet den Boden auch von selbst.",tool_hole:"Boden\xF6ffnung",tool_stairs:"Treppe",hint_stairs:"Ziehen, wo die Treppe stehen soll \u2013 sie l\xE4uft entlang der langen Seite; Form, Drehrichtung und Bauart stellst du danach rechts ein",tool_roof:"Dach",tool_energy:"Energie",tool_wall:"Wand",hint_wall:"Ziehen, um eine einzelne Wand zu zeichnen (Raumteiler, halbe Wand) \xB7 Umschalt h\xE4lt sie gerade \xB7 Alt ohne Fangen",free_wall:"Wand",wall_length:"L\xE4nge (m)",wall_thickness:"Wandst\xE4rke (m)",wall_height:"H\xF6he (m)",wall_height_full:"Volle Raumh\xF6he",wall_slope:"Schr\xE4g",wall_slope_start:"H\xF6he am Anfang (m)",wall_slope_end:"H\xF6he am Ende (m)",wall_slope_hint:"Schr\xE4ge Wand: die Oberkante l\xE4uft gerade von der H\xF6he am Anfang der Wand (Ecke mit der kleineren Nummer) zur H\xF6he am Ende. Beide H\xF6hen d\xFCrfen \xFCber der Geschossh\xF6he liegen, zum Beispiel f\xFCr ein Pultdach-Zimmer mit hohen Oberlichtern.",wall_slope_off:"Wieder eine ebene Wand",wall_none:"Keine Wand",wall_none_hint:"Diese Wand ganz weglassen: f\xFCr offene Grundrisse, bei denen R\xE4ume baulich ein Raum sind, in Home Assistant aber getrennt.",edge_thickness:"Dicke (m)",wall_thickness_hint:"Dicke dieser Wand, z. B. 0,365 an einer dicken Au\xDFenwand oder 0,115 an einer leichten Trennwand. Eine Wand zwischen zwei R\xE4umen nimmt die dickere Angabe.",wall_thickness_reset:"Dicke wie im Haus eingestellt",wall_heights:"Wandh\xF6hen",wall_n:"Wand {a}\u2013{b}",wall_view:"Wandansicht",wall_view_hint:"Die Wand von vorne: T\xFCren, Fenster und M\xF6bel an ihr ziehen oder ihren Abstand eintippen.",wall_view_prev:"Vorige Wand",wall_view_next:"N\xE4chste Wand",wall_view_left:"Abstand links (m)",wall_view_height:"H\xF6he \xFCber Boden (m)",wall_part:"Teil {n}",wall_split_hint:"Wand hier teilen: Das Teilst\xFCck bekommt eine eigene H\xF6he, z. B. 2,5 m neben 1,7 m in einer Flucht",wall_split_at:"Teilpunkt ab Ecke (m)",wall_join_hint:"Teilpunkt entfernen: Das Teilst\xFCck w\xE4chst wieder mit dem davor zusammen",wall_exterior_short:"Au\xDFenwand",room_wall_hint:"Eine niedrigere H\xF6he macht aus der Wand eine Br\xFCstung oder Theke. Teilen sich zwei R\xE4ume die Wand, gilt die niedrigere Einstellung. Fenster und T\xFCren darin enden an der Wandh\xF6he.",free_wall_hint:"Eine frei stehende Wand, zum Beispiel ein Raumteiler. Trifft sie auf eine Raumwand, wird die Ecke verschnitten. Die Endpunkte ziehst du an den Griffen, die ganze Wand verschiebst du an der Linie.",arc:"Bogen",arc_hint:"Biegt die Wand zu einem Bogen. Ein Nachbarraum an dieser Wand biegt sich mit, T\xFCren und Fenster wandern mit; R\xFCckg\xE4ngig nimmt den Bogen zur\xFCck.",arc_bulge:"W\xF6lbung (m)",arc_bulge_hint:"Wie weit sich die Wand in der Mitte w\xF6lbt: positiv nach au\xDFen, negativ in den Raum.",arc_apply:"Biegen",arc_too_wide:"Eine T\xFCr oder ein Fenster in dieser Wand ist f\xFCr diesen Bogen zu breit. Mach den Bogen flacher oder die \xD6ffnung schmaler.",stairwell_outside:"Diese \xD6ffnung ragt \xFCber eine Raumgrenze und wird deshalb nicht ausgeschnitten. Ziehe sie ganz in einen Raum oder verkleinere sie.",hint_hole:"Ziehen, um eine Boden\xF6ffnung aufzuziehen (Treppenaufgang, Galerie)",hint_roof:"Dachfl\xE4che aufziehen \xB7 antippen w\xE4hlt aus \xB7 ziehen verschiebt \xB7 Ecken \xE4ndern die Gr\xF6\xDFe",hint_energy:"Solarfeld antippen w\xE4hlt aus \xB7 ziehen verschiebt, auch auf eine andere Dachfl\xE4che \xB7 neue Felder rechts mit + Solarfeld",furn_parking:"Stellplatz",furn_group_vehicles:"Stellpl\xE4tze",parking_entity:"Sensor \u201EAuto anwesend\u201C",parking_vehicle:"Fahrzeug",parking_vehicle_none:"Keins",parking_no_pack:"Kein Fahrzeug-Pack importiert \u2013 Fahrzeuge kommen aus dem Pack \u201EFahrzeuge\u201C (Erweiterungen \u2192 M\xF6bel-Packs).",parking_scale:"Gr\xF6\xDFe (%)",parking_type_entity:"Fahrzeugtyp-Sensor (optional)",parking_types:"Zustand \u2192 Fahrzeug",parking_type_state:"Zustand (z. B. van)",parking_add_type:"+ Zuordnung",parking_hint:"Ohne Sensor steht das Fahrzeug immer da. Mit Sensor erscheint es, sobald der Sensor \u201Ean\u201C, \u201Ehome\u201C oder \u201Eanwesend\u201C meldet. Ein Fahrzeugtyp-Sensor (z. B. aus einer KI-Kameraauswertung) w\xE4hlt das Modell: Passt sein Zustand zu einer Zuordnung \u2013 auch als Wort im Text \u2013, wird dieses Fahrzeug gezeigt, sonst das Standard-Fahrzeug.",parking_too_tall:"Das Fahrzeug ({car} m) ist h\xF6her als der Raum ({room} m).",furn_lamp_ceiling:"Deckenleuchte",furn_lamp_downlight:"Einbauspot",furn_lamp_spot:"Aufbau-Spot",furn_lamp_panel:"LED-Panel",furn_lamp_uplight:"Deckenfluter",furn_lamp_bollard:"Wegleuchte",furn_lamp_garden:"Garten-Spot",furn_radiator:"Heizk\xF6rper",furn_robot_vacuum:"Saugroboter",furn_entity_vacuum:"Saugroboter",furn_entity_mower:"M\xE4hroboter",pet_room_sensor:"Raum-Sensor des Tiers (optional)",pet_room_hint:"Ein Sensor, der den Raum nennt, in dem das Tier gerade ist \u2013 Bermuda oder ESPresense mit einem Anh\xE4nger am Halsband: in 3D l\xE4uft es dann in diesem Raum herum.",furn_entity_water:"Ventil oder Schalter",fridge_temp:"Temperatur K\xFChlteil",freezer_temp:"Temperatur Gefrierteil",fridge_temp_hint:"Der Pin zeigt die Temperaturen. \xDCber 8 \xB0C im K\xFChlteil oder \u221212 \xB0C im Gefrierteil leuchtet er als Warnung.",spray_reach:"Reichweite des Wassers (m)",spray_hint:"Solange das Ventil offen oder der Schalter an ist, spritzt der Sprenger Wasser in B\xF6gen um sich herum.",furn_robot_room:"Aktueller Raum (Sensor)",robot_hint:"Saugt der Roboter in Home Assistant, f\xE4hrt er in 3D in Bahnen durch den Raum, den er meldet (Sensor \u201EAktueller Raum\u201C, zugeordnet \xFCber den Raum- oder Bereichsnamen), sonst durch den Raum seiner Station. Die Fahrspur ist simuliert \u2013 Home Assistant kennt meist nicht die genaue Position. Zur\xFCck f\xE4hrt er zur Station.",furn_lamp_pendant:"Pendelleuchte",furn_ceiling_fan:"Deckenventilator",furn_fan_entity:"Ventilator",fan_hint:"Die Leuchte ist das Licht des Ventilators (leer lassen, wenn er keins hat). Der Ventilator wird im Raum gefunden oder hier gew\xE4hlt: In 3D drehen sich die Fl\xFCgel so schnell wie er l\xE4uft, sein Symbol schaltet ihn, Wischen hoch/runter \xE4ndert die Stufe, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Die H\xF6he ist, wie weit er von der Decke h\xE4ngt (mehr = l\xE4ngere Stange).",room_ceiling:"Deckenh\xF6he",room_ceiling_tip:"Niedriger als das Stockwerk (ein Bad unter der Treppe) oder h\xF6her (ein Wohnzimmer offen bis unters Dach): Deckenleuchten, Ventilatoren, LED-Streifen und Ger\xE4te an der Decke h\xE4ngen dann hier, und die W\xE4nde des Raums sind so hoch.",room_ceiling_through:"Die Decke ({ceiling} m) liegt \xFCber der Etagenh\xF6he ({floor} m): Der Raum reicht in die Etage dar\xFCber, seine W\xE4nde wachsen mit, und die Etage dar\xFCber bleibt \xFCber ihm offen (Luftraum). Im Editor der oberen Etage ist die Fl\xE4che schraffiert.",room_inner:"Innenma\xDF {w} \xD7 {d}",room_inner_hint:"Von Wand zu Wand gemessen: Innenw\xE4nde nehmen die H\xE4lfte ihrer Dicke, Au\xDFenw\xE4nde stehen au\xDFerhalb des Umrisses.",floor_heating:"Fu\xDFbodenheizung (optional)",floor_heating_hint:"Solange der Thermostat heizt (oder das Ventil offen, der Schalter an ist), gl\xFCht der Boden des Raums in 3D warm.",room_announce_speaker:"Lautsprecher f\xFCr Durchsagen",room_announce_quiet:"Ruhezeit f\xFCr Durchsagen",room_announce_hint:"Ohne Wahl spricht der Lautsprecher, der im Raum steht, sonst ein Sprachassistent, ein Echo oder ein Lautsprecher des Bereichs (nie ein Fernseher). In der Ruhezeit lassen Durchsagen an mehrere R\xE4ume diesen Raum aus; eine Durchsage nur f\xFCr ihn kommt trotzdem an.",ceiling_here:"Decke hier",ceiling_here_hint:"H\xF6he der Decke genau an dieser Stelle, z. B. bei einer Dachschr\xE4ge. Leer = Decke des Raums.",ceiling_slope:"An die Dachschr\xE4ge",ceiling_slope_hint:"Die Decke liegt hier unter der Dachschr\xE4ge: die Leuchte h\xE4ngt an deren Unterseite, genau \xFCber ihrem Platz.",furn_lamp_floor:"Stehlampe",furn_lamp_table:"Tischlampe",furn_lamp_wall:"Wandleuchte",furn_led_strip:"LED-Streifen",furn_group_lights:"Leuchten",furn_entity_light:"Licht oder Schalter",furn_color_entity:"Farbe und Helligkeit von (optional)",furn_color_entity_hint:"F\xFCr Lampen, die ein Relais (Shelly, Schaltaktor) ein- und ausschaltet, w\xE4hrend die Leuchte selbst Farbe und Helligkeit kennt: An/Aus kommt vom Schalter oben, Farbe und Helligkeit von dieser Entit\xE4t.",lamp_extra_light:"Leuchtmittel {n} (optional)",lamp_extra_hint:"Eine Leuchte mit mehreren Lichtern \u2013 Hauptlicht, Nachtlicht, Lichtring: Ist das Hauptlicht aus, leuchtet sie in 3D mit dem n\xE4chsten Licht, das an ist, etwas schw\xE4cher. Die Lichter schaltest du im Raumfenster einzeln.",furn_entity_climate:"Heizung (Thermostat)",lamp_hint:"Antippen in 3D schaltet die Leuchte, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Auch Schalter (z. B. ein Relais f\xFCrs Deckenlicht) sind m\xF6glich \u2013 die Leuchte strahlt dann, solange er an ist. Tischlampen stehen automatisch auf dem M\xF6bel darunter.",lamp_hint_pendant:"H\xF6he = Abh\xE4ngung unter der Decke. Antippen in 3D schaltet, lange dr\xFCcken \xF6ffnet die Details.",theme:"Look",version_hint:"Installierte Version von NextFloor \u2013 Oberfl\xE4che; die Integration in Home Assistant meldet {backend}",accent:"Akzentfarbe",accent_hint:"Eigene Akzentfarbe: Linien und Leuchtkanten im Neon-Look, Kn\xF6pfe und Pins \u2013 \u21BA setzt das Neon-Cyan zur\xFCck",accent_reset:"Zur\xFCck zu Cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Tag",theme_auto:"Auto",clock:"Uhr",clock_none:"Keine",clock_top_left:"Oben links",clock_top_right:"Oben rechts",clock_bottom_left:"Unten links",clock_bottom_right:"Unten rechts",glass_walls:"Glasw\xE4nde",glass_walls_hint:"Wie deckend die W\xE4nde sind, durch die man in die R\xE4ume schaut: links fast unsichtbar, rechts undurchsichtig. Gilt f\xFCr diesen Bildschirm.",screen_name:"Name dieses Bildschirms",screen_name_hint:"Durchsagen erscheinen auf jedem offenen NextFloor-Bildschirm. Mit einem Namen (z. B. \u201EFlur\u201C) kann eine Durchsage auch nur an diesen Bildschirm gehen. Ohne Haken bleibt dieser Bildschirm still.",announce_on:"Durchsagen auf diesem Bildschirm an",announce_muted:"Durchsagen auf diesem Bildschirm stumm",lock3d_on:"3D sperren (Drehen, Zoomen und Verschieben aus, Tippen geht weiter)",lock3d_off:"3D entsperren",walk:"Durchs Haus gehen",travel:"Zeitreise: die letzten 24 Stunden oder 7 Tage abspielen",travel_play:"Abspielen",travel_pause:"Anhalten",travel_loading:"Lade Verlauf \u2026",travel_failed:"Der Verlauf lie\xDF sich nicht laden.",travel_speed:"Tempo",travel_speed_min:"1 Min./s",travel_speed_10min:"10 Min./s",travel_speed_hour:"1 Std./s",travel_days:"Tage",travel_live:"Live",card_travel_button:"Taste f\xFCr die Zeitreise",walk_stop:"Gehen beenden",walk_hint:"Ziehen: umsehen \xB7 W A S D / Pfeile oder Stick: gehen \xB7 Mausrad: Schritt",card_walk_button:"Taste zum Durchgehen",card_lock_button:"Taste f\xFCr die 3D-Sperre",backdrop:"Eigener Hintergrund",backdrop_color:"Farbe",backdrop_image:"Bild (/local/\u2026 oder https://\u2026)",backdrop_dim:"Abdunkeln",backdrop_hint:"Statt des Himmels des Looks steht das Haus vor einer eigenen Farbe oder einem Bild. Ein Bild in /config/www ist unter /local/\u2026 erreichbar.",furnish:"Einrichten",split_3d:"3D daneben",mount_height:"H\xF6he \xFCber Boden (m)",side_open:"Seitenleiste \xF6ffnen",side_close:"Schlie\xDFen",side_details:"Details zur Auswahl",side_pin:"Anheften",side_pinned:"Angeheftet",side_pin_hint:"Angeheftet bleibt die Seitenleiste immer offen; sonst klappt sie neben der 3D-Ansicht zu, solange nichts ausgew\xE4hlt ist",split_3d_hint:"Live-3D neben dem Plan: M\xF6bel und Ger\xE4te dort ziehen und drehen \u2013 mit R\xFCckg\xE4ngig, gespeichert wird mit dem Plan",size_w:"Breite (m)",size_d:"Tiefe (m)",size_h:"H\xF6he (m)",furnish_hint:"M\xF6bel, Leuchten und Ger\xE4te mit dem Finger ziehen \xB7 M\xF6bel rasten an W\xE4nden ein \xB7 antippen zum Drehen, f\xFCr H\xF6he und Montage",done:"Fertig",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Feuchte",heat_short_co2:"CO\u2082",heat_short_mould:"Schimmel",heat_short_wifi:"WLAN",heat_short_values:"Werte",heat_temperature:"Temperatur",heat_humidity:"Luftfeuchtigkeit",heat_co2:"CO\u2082",heat_mould:"Schimmel",heat_summer:"Sommer",heat_winter:"Winter",air_co2:"l\xFCften (CO\u2082)",air_humidity:"l\xFCften (feucht)",air_mould:"Schimmelgefahr \u2013 l\xFCften",room_curve_hint:"Die Temperatur des Raums in den letzten 24 Stunden",heat_values:"Werte am Raumnamen",heat_wifi:"WLAN",wifi_aps:"{n} Access Points \xB7 {clients} Ger\xE4te",wifi_network:"Netzwerk: {online} online \xB7 {offline} offline",wifi_none:"Stelle Access Points oder Router aus den Packs (Smart Home 2) auf und verkn\xFCpfe sie mit einer Entit\xE4t ihres Ger\xE4ts.",wifi_clients:"{n} Ger\xE4te",heat_none_found:"Keine passenden Sensoren in den Bereichen der R\xE4ume.",markers:"Symbole",markers_none:"Keine",markers_important:"Wichtige",markers_all:"Alle",furn_stool:"Hocker",furn_coffee_table:"Couchtisch",furn_tv_wall:"Fernseher (Wand)",furn_sideboard:"Sideboard",furn_table_round:"Runder Tisch",furn_bench:"Sitzbank",furn_corner_bench:"Eckbank",furn_bar_stool:"Barhocker",furn_kitchen_wall:"Oberschrank",furn_kitchen_tall:"Hochschrank mit Backofen",furn_island:"Kochinsel",furn_dishwasher:"Sp\xFClmaschine",furn_bunk_bed:"Etagenbett",furn_dresser:"Kommode",furn_washer:"Waschmaschine",furn_dryer:"Trockner",furn_office_chair:"B\xFCrostuhl",furn_tall_cabinet:"Hochschrank",furn_coat_rack:"Garderobe",furn_group_living:"Wohnen",furn_group_dining:"Essen",furn_group_kitchen:"K\xFCche",furn_group_sleeping:"Schlafen",furn_group_bath:"Bad & Hauswirtschaft",furn_group_work:"Arbeiten & Sonstiges",furn_group_energy:"Energie & Solar",energy_devices:"Ger\xE4te",wallbox_charging:"l\xE4dt",wallbox_plugged:"angesteckt",furn_soc:"Ladestand (%)",furn_export:"Einspeiseleistung (W, separater Sensor, optional)",furn_export_hint:"Meldet dein Z\xE4hler Bezug und Einspeisung in zwei Sensoren (z. B. Growatt, Tibber Pulse), nimm oben den Bezugs-Sensor als Leistung und hier den Einspeise-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",meter_parent:"H\xE4ngt an Z\xE4hler",meter_parent_none:"keinem (Hauptz\xE4hler)",meter_main:"Hauptz\xE4hler",meter_unmetered:"{w} ungemessen",meter_device_hint:"Steht das Ger\xE4t hinter einem Zwischenz\xE4hler (z. B. Balkonkraftwerk in einer Wohnung), z\xE4hlt seine Leistung zu dieser Wohnung. Der Zwischenz\xE4hler muss daf\xFCr in beide Richtungen messen (\u2212 = R\xFCckspeisung); z\xE4hlt er nur Bezug, f\xE4llt der Verbrauch der Wohnung bei \xDCberschuss zu hoch aus.",meter_sub_power:"Leistung des Zweigs (W, + = Bezug, \u2212 = R\xFCckspeisung)",meter_floors:"Versorgt die Etagen",meter_sub_hint:"Ein Zwischenz\xE4hler misst seinen Zweig, z. B. eine Wohnung. Ger\xE4te auf den angehakten Etagen h\xE4ngen in 3D an ihm statt am Hauptz\xE4hler; was der Hauptz\xE4hler dar\xFCber hinaus z\xE4hlt, steht als \u201EAllgemein (Rest)\u201C in der Bilanz.",furn_charge:"Ladeleistung (W, separater Sensor, optional)",furn_charge_hint:"Meldet dein Speicher Laden und Entladen in zwei Sensoren (z. B. Anker Solix), nimm oben den Entlade-Sensor als Leistung und hier den Lade-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_wallbox_status:"Status (l\xE4dt, angesteckt)",energy_only_note:"\u26A1 Energie: Hier lassen sich nur Solarfelder und Energieger\xE4te verschieben, R\xE4ume und M\xF6bel sind gesperrt.",roof_only_note:"\u{1F3E0} Dach: Hier lassen sich nur Dachfl\xE4chen und Dachfenster verschieben, R\xE4ume und M\xF6bel sind gesperrt.",energy_devices_hint:"Stromz\xE4hler, Wechselrichter, Stromspeicher, Wallbox und Netzanschluss werden hier angelegt: auf der oben gew\xE4hlten Etage, im Grundriss verschiebbar. Mit Leistungssensor zeigen sie ihre Watt; der Z\xE4hler bekommt den Netzsensor, beim Strang w\xE4hlst du den Wechselrichter. Mehrere Wechselrichter und Speicher (etwa eine Balkonanlage dazu) gehen auch: Jeder bekommt seinen eigenen Sensor.",energy_routes:"Kabelwege",energy_routes_hint:"Wo ein Kabel wirklich l\xE4uft: Der Fluss folgt dann deinen Punkten statt eines Bogens quer durchs Haus. Ohne Weg bleibt es beim Bogen. Verbraucher behalten ihren Bogen.",route_conn_solar:"{name} \u2192 Wechselrichter",route_conn_battery:"Batterie \u2194 Haus",route_conn_inverter:"Wechselrichter \u2192 Haus",route_conn_grid:"Netz \u2194 Haus",route_conn_meter:"{name} \u2194 \xFCbergeordneter Z\xE4hler",route_conn_device:"{name} \u2194 Unterz\xE4hler",route_points:"{n} Punkte",route_none:"direkter Bogen",route_draw:"Weg zeichnen",route_redraw:"Neu zeichnen",route_drawing:"Tippe im Plan die Punkte an, durch die das Kabel l\xE4uft, vom einen Ende zum anderen; wechsle dazwischen das Geschoss, wo es durch die Decke geht. {n} Punkte.",route_undo:"Letzter Punkt",route_done:"Fertig",route_cable:"Als Kabel zeigen",route_cable_hint:"Zeichnet den Weg als sichtbares Kabel, nicht nur als feine Linie unter den Teilchen.",solar_fields:"Solarfelder",solar_hint:"Module aufs Dach legen: Sie liegen in der Neigung der Dachfl\xE4che, auf einem Flachdach stehen sie aufgest\xE4ndert. Im Grundriss l\xE4sst sich ein Feld mit der Maus verschieben.",solar_no_roof:"F\xFCr Solarfelder braucht das Haus ein Dach: unter Einstellungen ein Sattel- oder Flachdach, oder Dachabschnitte hier im Dach-Werkzeug.",solar_face_gone:"Dachfl\xE4che fehlt",solar_summary:"{n} Module \xB7 {kwp} kWp",solar_add:"Solarfeld",solar_field:"Solarfeld",solar_face:"Dachfl\xE4che",solar_rows:"Reihen",solar_cols:"Module pro Reihe",solar_portrait:"Hochformat",solar_landscape:"Querformat",solar_u:"Abstand vom Rand (m)",solar_v:"Abstand von der Traufe (m)",solar_tilt:"Neigung der Aufst\xE4nderung (\xB0)",solar_rack_ew:"Ost-West-Aufst\xE4nderung",solar_rack_ew_hint:"Jede zweite Reihe zeigt in die andere Richtung, die Paare stehen R\xFCcken an R\xFCcken \u2013 flach und dicht wie auf vielen Flachd\xE4chern.",solar_rack_tilt:"Aufst\xE4nderung (\xB0 zus\xE4tzlich)",solar_flip:"In die andere Richtung neigen",solar_partial:"nur {n} von {total} passen auf die Fl\xE4che",solar_form_hint:"Module, die \xFCber die Dachfl\xE4che hinausragen w\xFCrden, fallen weg. \u201EFl\xE4che f\xFCllen\u201C legt so viele Module aufs Dach, wie passen. kWp gerechnet mit 400 W je Modul.",solar_fit:"Fl\xE4che f\xFCllen",roof_windows:"Dachfenster",roof_window:"Dachfenster",roof_windows_hint:"Dachfenster liegen in der Dachfl\xE4che, mit Rollladen und Kontakt wie normale Fenster. Im Grundriss lassen sie sich verschieben, auch auf eine andere Dachfl\xE4che.",roof_window_tilt:"Kippkontakt",roof_window_name:"Name (optional)",roof_window_motor:"Fenstermotor (Cover, optional)",roof_window_motor_hint:"Ein Fenstermotor (Velux, Roto, Fakro) meldet seine Position als Cover: Der Fl\xFCgel \xF6ffnet in 3D so weit, wie der Motor steht. Ein Kontakt oder Kippkontakt geht weiterhin ohne Motor.",roof_window_hint:"Offen klappt der Fl\xFCgel oben angeschlagen nach au\xDFen, gekippt ein St\xFCck, und der Rahmen leuchtet warm; der Rollladen f\xE4hrt von oben \xFCber die Scheibe. In einer Dachfl\xE4che schneidet das Fenster ein Loch in die Schr\xE4ge, so sieht das Dachgeschoss hinaus.",solar_ground:"Frei aufgest\xE4ndert (Garten, Garagendach \u2026)",solar_add_ground:"Frei aufgest\xE4ndert",solar_base:"H\xF6he der Aufstellfl\xE4che (m, 0 = Boden)",solar_add_wall:"An der Wand",solar_wall:"Wand",solar_v_wall:"H\xF6he \xFCber dem Boden (m)",solar_tilt_wall:"Neigung von der Wand (\xB0, 90 = Vordach)",solar_flip_wall:"Unten abstehend statt oben",solar_rotation:"Drehung (\xB0)",solar_name:"Name",solar_name_hint:"z. B. Strang 1 S\xFCd",solar_module_w:"Modulbreite (m)",solar_module_h:"Modulh\xF6he (m)",solar_wp:"Modulleistung (Wp)",solar_string:"Strang",solar_strings:"Str\xE4nge",solar_string_none:"Kein Strang",solar_string_new:"Neuer Strang",solar_string_n:"Strang {n}",solar_string_name:"Name des Strangs",solar_string_entity:"PV-Leistung des Strangs",solar_string_inverter:"Wechselrichter",solar_string_inverter_none:"Kein Wechselrichter gew\xE4hlt",inverter_strings:"Str\xE4nge an diesem Wechselrichter: {names}",inverter_strings_none:"Noch kein Strang an diesem Wechselrichter \u2013 zuordnen beim Solarfeld unter Strang \u203A Wechselrichter.",solar_string_inverter_missing:"Noch kein Wechselrichter im Plan (unten bei Ger\xE4te anlegen)",solar_string_hint:"Felder im selben Strang geh\xF6ren zusammen, auch auf verschiedenen D\xE4chern (z. B. 5 Module auf dem Haus und 5 auf der Garage). Sensor und Wechselrichter gelten f\xFCr den ganzen Strang.",solar_string_sum:"{fields} Felder \xB7 {n} Module \xB7 {kwp} kWp",solar_face_size:"Dachfl\xE4che {w} \xD7 {h} m (entlang der Traufe \xD7 die Schr\xE4ge hoch)",solar_cols_hint:"Eine Zahl f\xFCr gleich lange Reihen, oder eine Liste f\xFCr Reihen eigener L\xE4nge: \u201E4, 4, 3\u201C (von der Traufe aus).",solar_align_left:"Links",solar_align_center:"Mitte",solar_align_right:"Rechts",solar_look_black:"Full Black",solar_look_blue:"Blau",solar_pick:"Module einzeln an/aus",solar_pick_all:"Alle wieder an",solar_pick_hint:"Tippe im Grundriss auf ein Modul, um es wegzunehmen oder wieder dazuzunehmen. Weggenommene sind gestrichelt.",solar_entity:"PV-Leistung dieses Feldes (z. B. sein Strang)",solar_main:"Hauptdach",solar_section:"Abschnitt {n}",solar_flat:"Flachdach",compass_n:"Nord",compass_ne:"Nordost",compass_e:"Ost",compass_se:"S\xFCdost",compass_s:"S\xFCd",compass_sw:"S\xFCdwest",compass_w:"West",compass_nw:"Nordwest",furn_meter:"Stromz\xE4hler",furn_grid_point:"Netzanschluss",grid_point_hint:"Hier steht der Netzanschluss: der \xDCbergabepunkt zum Stromanbieter, zum Beispiel am Ende der Einfahrt. Im Grundriss verschiebbar.",furn_model:"Modell",inverter_std:"Standard (Wandger\xE4t mit Display)",inverter_slim:"Schmal und hoch (Lichtleiste)",inverter_hybrid:"Hybrid (Rund-Display, L\xFCfter)",battery_std:"Turm (gestapelte Module)",battery_wall:"Wandspeicher (flach, h\xE4ngend)",battery_cube:"Kompakt (Balkonspeicher)",furn_inverter:"Wechselrichter",furn_home_battery:"Stromspeicher",furn_wallbox:"Wallbox",furn_entity:"Ger\xE4t (Schalter, Steckdose \u2026)",furn_state_entity:"Zustand von (optional)",furn_state_entity2:"Zweiter Zustand (andere H\xE4lfte)",furn_tap:"Antippen des M\xF6bels",furn_tap_default:"Wie \xFCblich",furn_tap_hint:"Eine eigene Aktion wie bei den eigenen Kn\xF6pfen des Sternmen\xFCs, z. B. ein browser_mod-Popup mit deiner Karte.",furn_show_when:"Nur zeigen, solange \u2026",furn_show_when_state:"\u2026 im Zustand (leer = an)",furn_show_when_invert:"Umgekehrt: zeigen, solange es nicht so ist",furn_show_when_hint:"Saison-Deko, die nur im Dezember steht: ein Helfer (input_boolean), ein Kalender oder ein Sensor entscheidet, ob das M\xF6bel in 3D erscheint. Mehrere Zust\xE4nde mit Komma trennen. Im Editor bleibt es immer sichtbar.",picture_upload:"Foto hochladen",picture_replace:"Anderes Foto hochladen",picture_stored:"Ein eigenes Foto ist gespeichert.",picture_url:"\u2026 oder Bild-Adresse",picture_entity:"\u2026 oder Bild einer Entit\xE4t",picture_border:"Passepartout (%)",picture_fit:"Foto",picture_fit_cover:"f\xFCllt den Rahmen",picture_fit_contain:"ganz zu sehen",picture_hint:"Dein Foto im Rahmen, in 3D und auf dem Wandtablet. Hochgeladene Fotos werden verkleinert mit dem Plan gespeichert; eine Bild-Entit\xE4t (z. B. Foto des Tages) oder eine Kamera zeigt ihr aktuelles Bild.",furn_state_split:"H\xE4lften",furn_state_left_right:"Links / rechts",furn_state_top_bottom:"Unten / oben (Hochbett)",furn_state_hint:"Das M\xF6bel leuchtet, solange die Entit\xE4t an, belegt oder zu Hause meldet \u2013 ein Bett mit Belegungsmatte, ein Sessel, die Sauna. Zwei Entit\xE4ten beleuchten die H\xE4lften: links und rechts, beim Hochbett unten und oben.",furn_entity_tv:"Fernseher (Media-Player oder Steckdose)",fix:"Fixieren",unfix:"L\xF6sen",fix_hint:"Fixiert: l\xE4sst sich nicht mehr versehentlich verschieben (Taste L, Rechtsklick oder langes Dr\xFCcken)",fixed_drag_hint:"\u{1F512} Fixiert \u2013 zum Verschieben erst l\xF6sen (Schloss im Formular, Rechtsklick oder Taste L)",fixed_delete_confirm:"Dieses Element ist fixiert. Trotzdem l\xF6schen?",lock_plan:"\u{1F512} Grundriss",lock_plan_hint:"Grundriss sperren: R\xE4ume, W\xE4nde, T\xFCren, Fenster und Au\xDFenfl\xE4chen lassen sich nicht mehr versehentlich verschieben. M\xF6bel und Ger\xE4te bleiben frei.",start_view:"Startansicht",start_view_hint:"Mit dieser Ansicht \xF6ffnen 3D-Ansicht, Karte und Kiosk das Haus, zum Beispiel von der Gartenseite. Drehe, zoome und verschiebe das Haus in der 3D-Ansicht rechts, bis es passt, und merke sie dir dann.",start_view_card:"Soll eine Karte eine andere Ansicht haben: diese Zeile in ihre YAML-Konfiguration \xFCbernehmen.",start_view_set:"Aktuelle 3D-Ansicht als Start merken",start_view_reset:"Standard",start_view_saved:"Eine eigene Startansicht ist gespeichert.",ctx_rotate:"Drehen 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} weitere \u2013 Suche eingrenzen",climate:"Raumklima",climate_temperature:"Temperatur",climate_humidity:"Luftfeuchte",climate_co2:"CO\u2082",climate_hint:"Diese Sensoren gelten f\xFCr die Heatmap und das Raumfenster. \u201EAutomatisch\u201C nimmt die Sensoren des Bereichs und die im Raum platzierten, aber keine Ger\xE4tetemperaturen (3D-Drucker, W\xE4rmepumpe, Vorlauf \u2026).",plan_locked:"Grundriss gesperrt",plan_lock:"Grundriss sperren",plan_unlock:"Grundriss entsperren",opening_mark:"Markieren in 3D",opening_mark_open:"Wenn offen",opening_mark_closed:"Wenn geschlossen (z. B. WC)",opening_mark_hint:"Ein markiertes Fenster oder eine markierte T\xFCr leuchtet warm. \u201EWenn geschlossen\u201C braucht einen Kontakt; ohne Sensor wird nichts markiert.",window_opens:"\xD6ffnet",window_opens_turn:"Dreh-Kipp (nach innen)",window_opens_slide:"Schiebend (Schiebefenster, Hebe-Schiebet\xFCr)",window_opens_top:"Klappfenster (unten nach au\xDFen)",window_opens_hint:"Schiebend: Der Fl\xFCgel auf der Seite des Scharniers gleitet vor den festen; zweifl\xFCgelig gleiten die beiden mittleren nach au\xDFen. Klappfenster \xF6ffnen mit dem Kontakt oder einem Kippsensor.",marker_show:"Symbol in 3D",marker_show_hint:"Automatisch folgt dem Schalter Keine / Wichtige / Alle in der 3D-Ansicht. Immer zeigen und Ausblenden gelten unabh\xE4ngig davon (au\xDFer bei Keine).",pin_shift:"Pin verschieben",pin_shift_up:"\u2191 H\xF6he",pin_shift_hint:"Stehen Ger\xE4te dicht beieinander, schiebst du den Pin hier ein St\xFCck zur Seite oder nach oben (in Metern); das Ger\xE4t selbst bleibt, wo es ist.",marker_show_auto:"Automatisch",marker_show_always:"Immer zeigen",marker_show_no_power:"Ohne Watt",marker_show_active:"Nur wenn aktiv",marker_show_never:"Ausblenden",marker_icon:"Eigenes Symbol (Material-Design-Icon)",device_name:"Eigener Name (optional)",show_name:"Name unter dem Symbol in 3D zeigen",card_marker_names:"Eigene Namen an den Symbolen",card_marker_names_hint:"Jedes Ger\xE4t mit eigenem Namen zeigt ihn klein unter seinem Symbol \u2013 drei Thermometer im Garten bleiben unterscheidbar.",card_tap_in_room:"Ger\xE4te nur im ge\xF6ffneten Raum schalten",card_tap_in_room_hint:"In der Haus- und Stockwerksansicht \xF6ffnet ein Antippen das Stockwerk oder den Raum, auch auf einem Ger\xE4t oder seinem Symbol. Im ge\xF6ffneten Raum schaltet es das Ger\xE4t. Langes Dr\xFCcken \xF6ffnet immer sein Men\xFC oder seine Details.",card_markers_outside:"Symbole au\xDFerhalb des ge\xF6ffneten Raums w\xE4hlen",card_markers_outside_hint:"Im Haus, auf dem Stockwerk und in den anderen R\xE4umen nur die angehakten Arten; im ge\xF6ffneten Raum alle wie oben eingestellt. \u201EImmer\u201C und \u201ENie\u201C am Ger\xE4t gehen vor.",marker_kind_light:"Lichter",marker_kind_cover:"Rolll\xE4den",marker_kind_climate:"Heizung",marker_kind_media:"Medien",marker_kind_switch:"Schalter",marker_kind_fan:"Ventilatoren",marker_kind_lock:"Schl\xF6sser",marker_kind_binary:"Kontakte und Melder",marker_kind_sensor:"Sensoren",marker_kind_tap:"M\xF6bel mit Aktion",marker_kind_other:"Sonstige",device_name_hint:"Ein Name nur f\xFCr den Plan, z. B. \u201EDekolicht Kochinsel\u201C \u2013 die Entit\xE4t in Home Assistant bleibt, wie sie ist.",floor_turn:"90\xB0 drehen",floor_shift_all:"Alle Etagen mitnehmen (ganzes Haus)",floor_shift_all_hint:"Verschieben und Drehen wirken auf alle Etagen samt Dachfl\xE4chen, Au\xDFenfl\xE4chen, Energieger\xE4ten und Z\xE4hler \u2013 das ganze Haus wandert als Ganzes.",floor_turn_hint:"Dreht alles auf der Etage um 90\xB0 im Uhrzeigersinn um die Mitte der R\xE4ume \u2013 wenn eine Etage verdreht gezeichnet wurde. Dreimal = 270\xB0.",marker_icon_hint:"Name eines Material-Design-Icons wie bei Home Assistant, z. B. mdi:thermometer oder mdi:water-alert. Leer = Symbol nach Ger\xE4teart.",furn_power:"Leistungssensor (W)",furn_links_hint:"Mit Leistungssensor zeigt das M\xF6bel seine Watt und nimmt am Energiefluss teil.",furn_links_hint_tv:"Der Bildschirm leuchtet, solange der Fernseher an ist, in der Farbe der App (Netflix, YouTube \u2026); das Schild zeigt App oder Titel.",stairs_hint:"Die Treppe steigt nach hinten an (weg von der markierten Vorderkante) und \xF6ffnet die Decke der Etage dar\xFCber.",stair_shape:"Form",stair_shape_straight:"Gerade",stair_shape_quarter:"Viertelgewendelt",stair_shape_l:"L mit Podest",stair_shape_half:"Halbgewendelt",stair_shape_u:"U mit Podest",stair_shape_spiral:"Wendeltreppe",stair_turn:"Laufrichtung (beim Hinaufgehen)",stair_turn_left:"Links herum",stair_turn_right:"Rechts herum",stair_build:"Bauart",stair_build_solid:"Massiv (Beton)",stair_build_stringer:"Wangentreppe",stair_build_mono:"Holmtreppe (Mittelholm)",stair_build_cantilever:"Kragarm (schwebend)",stair_risers:"Setzstufen",stair_steps:"Steigungen",stair_run_width:"Laufbreite (m)",stair_rail:"Gel\xE4nder",stair_rail_none:"Keins",stair_rail_left:"Links",stair_rail_right:"Rechts",stair_rail_both:"Beidseitig",stair_down:"F\xFChrt nach unten",stair_down_hint:"Die Treppe beginnt auf dieser Etage und f\xFChrt hinunter, zum Beispiel in einen Keller, der nicht gezeichnet sein muss. Sie \xF6ffnet den Boden dieser Etage.",stair_measures:"{steps} Steigungen \xE0 {rise} cm \xB7 Auftritt {going} cm \xB7 Schrittma\xDF {measure} cm",stair_uncomfortable:"unbequem (Schrittma\xDF 59\u201365 cm, Steigung h\xF6chstens 21 cm)",stair_up_note:"Die Treppe beginnt an der markierten Vorderkante. Die Decke der Etage dar\xFCber \xF6ffnet sich nur dort, wo \xFCber den Stufen keine 2,2 m Kopfh\xF6he bleiben.",stair_down_note:"Man betritt die Treppe an der markierten Vorderkante und geht hinunter. Im Plan ist sie gestrichelt; der Boden dieser Etage \xF6ffnet sich \xFCber den Stufen.",stair_opening:"Decken\xF6ffnung",stair_opening_headroom:"Nach Kopfh\xF6he (nur wo n\xF6tig)",stair_opening_full:"\xDCber der ganzen Treppe",stair_opening_none:"Keine (Luke, geschlossener Schacht)",stair_opening_hint:"Wie weit die Treppe den Boden \xF6ffnet, den sie erreicht: die Etage dar\xFCber, oder bei einer Treppe nach unten die eigene. Nach Kopfh\xF6he \xF6ffnet nur \xFCber den Stufen, \xFCber denen keine 2,2 m bleiben.",stair_up_note_plain:"Die Treppe beginnt an der markierten Vorderkante und steigt nach hinten an.",stair_upgrade:"Form einstellen",stair_upgrade_hint:"Macht daraus eine Treppe mit Form (gewendelt, L, U, Wendel), Bauart, Gel\xE4nder und Stufenzahl.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",energy_meter:"Z\xE4hlerplatz",energy_grid:"Netz (W, + = Bezug)",energy_solar_sensor:"Solar-Erzeugung (W)",energy_battery_sensor:"Akku-Leistung (W, + = Entladen)",energy_battery_soc:"Akku-Ladestand (%)",energy_tariff_sensor:"Tarif (z. B. \u20AC/kWh)",energy_gas:"Gasz\xE4hler (optional)",energy_water:"Wasserz\xE4hler (optional)",energy_meters_hint:"Gas und Wasser stehen bei der Hausbilanz \u2013 in der Energieleiste und auf der Hauskarte: ein Sensor mit dem Durchfluss jetzt (m\xB3/h, l/min) oder dem Z\xE4hlerstand von heute.",energy_gas_short:"Gas",energy_water_short:"Wasser",energy_invert:"Vorzeichen umkehren",energy_hint:"Verbraucher sind platzierte Ger\xE4te mit Leistungssensor (W) \u2013 der Sensor selbst oder einer vom selben Ger\xE4t.",energy_balance:"Energiebilanz",energy_balance_hint:"Netz, Solar und Akku kommen von den Ger\xE4ten im Plan: Stromz\xE4hler, Wechselrichter und Stromspeicher. Hier kannst du andere Sensoren w\xE4hlen, Vorzeichen umkehren und den Hausverbrauch angeben.",energy_rest:"Allgemein (Rest)",energy_advanced:"Erweiterter Energiemodus",energy_advanced_on:"Zwischenz\xE4hler nutzen",energy_show_unmetered:"Ungemessenen Verbrauch am Zwischenz\xE4hler zeigen",energy_show_unmetered_hint:"Das Schild eines Zwischenz\xE4hlers zeigt dann den Verbrauch seiner Etagen und wie viel davon kein platziertes Ger\xE4t misst, z. B. \u201E500 W \xB7 450 W ungemessen\u201C. Sonst zeigt es den Z\xE4hlerwert.",energy_advanced_hint:"F\xFCr Zwischenz\xE4hler, z. B. je Wohnung hinter einem Hauptz\xE4hler: Ein Stromz\xE4hler kann dann an einem anderen h\xE4ngen und eigene Etagen versorgen. Aus = der erste Z\xE4hler ist der Netzanschluss, weitere sind Verbraucher.",energy_consumption_sensor:"Hausverbrauch (W, sonst aus der Bilanz)",energy_import_prefs:"Aus dem Energie-Dashboard \xFCbernehmen",energy_import_done:"{n} Sensoren \xFCbernommen \u2013 bitte die Vorzeichen pr\xFCfen.",energy_import_none:"Im Energie-Dashboard sind keine passenden Leistungssensoren (W) zu finden \u2013 bitte von Hand w\xE4hlen.",energy_import_failed:"Das Energie-Dashboard von Home Assistant ist nicht eingerichtet.",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit",presence_hint:"Raumsensor je Person (z. B. ESPresense, Bermuda): sein Zustand nennt den Raum oder Bereich.",presence_sensor:"Raumsensor",no_persons:"In Home Assistant gibt es keine Personen."},Hc={view:"3D",editor:"Editor",all_floors:"All floors",outside_area:"Outside",outside_area_hint:"All devices outside at a glance: in the garden, outside the rooms, and what belongs to Outside (a weather station on the roof, say).",device_outside:"Belongs to Outside",device_outside_hint:"The device does not count for the room under it (a weather station on the roof) and is listed in the Outside panel.",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of NextFloor ({frontend}) is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_reload:"This page still shows NextFloor {frontend}, Home Assistant already has {backend}. Please reload the page; in the companion app: Settings \u2192 Companion app \u2192 Reset frontend cache.",reload_page:"Reload",needs_restart_old:"A new version of NextFloor is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",walls_slope:"Sloped",walls_slope_hint:"Walls cut on a slope: half height in front, full height at the back \u2013 like a doll's house, turns with the camera",walls_solid:"Solid",walls_solid_hint:"Solid walls in their colours instead of glass (colours: editor \u2192 settings, per room in the room)",wall_paint_outside:"Wall colour outside",wall_paint_inside:"Wall colour inside",wall_paint_room:"Wall colour inside (this room)",wall_paint_hint:"Used in the 3D view \u201CSolid\u201D.",wall_paint_default:"Default",card_solid_walls:"Solid walls (in their colours)",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_from_ha:"Floors from Home Assistant:",floor_empty:"Empty floor",level:"Level {n}",ha_floor:"Floor in Home Assistant",floor_layer:"Layer (can be shown and hidden)",floor_layer_hint:"This floor is no storey but a layer \u2013 all the trees or the decoration, say. The 3D view shows an eye at the top that shows or hides it on each device.",no_ha_floor:"\u2013 none \u2013",area_rooms:"Add rooms from HA areas ({n})",area_rooms_hint:"Adds a room (4 \xD7 3 m) for each area of this floor \u2013 then drag it into place and adjust the corners",floor_name:"Name",elevation:"Elevation (m)",floor_shift:"Shift the floor (m)",floor_shift_apply:"Shift",floor_shift_hint:"Moves every room, furniture item, device, outdoor area, free wall and the background image of this floor by X and Z. Roof sections stay.",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",floor_copy:"Duplicate floor",floor_copy_hint:"The copy goes on top of the house with all rooms, walls, doors and windows. Rooms and the floor lose their link to Home Assistant, furniture its entities; energy devices stay on the old floor.",floor_copy_furniture:"Take the furniture along",floor_copy_devices:"Take the device pins along",floor_copy_devices_hint:"The same entity then shows on both floors.",floor_copy_outdoor:"Take the outdoor areas along",floor_copy_make:"Make the copy",floor_copy_name:"{name} (copy)",furn_to_floor:"Move to floor",furn_to_floor_hint:"The item moves to the same spot on the chosen floor.",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",redo:"Redo",fit:"Show all",room:"Room",rooms:"Rooms",room_name:"Name",area:"Area",no_area:"No area",sub_area_add:"+ Area within the room",sub_area_hint:"A part of the room with a Home Assistant area of its own but no walls \u2013 a reading corner, a shelf, a kitchenette in the living room. Its devices and sensors belong to this room.",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",delete:"Delete",new_room:"Room {n}",settings:"Settings",pendant_shape:"Shape",pendant_shade:"Shade",paint_colour:"Paint colour",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",sofa_shape:"Shape",sofa_straight:"Straight",sofa_l:"L-shaped (mirror: other side)",sofa_u:"U-shaped",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",cancel:"Cancel",backup:"Backup",backup_history:"Restore points",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_file:"File",backup_export:"Export",backup_export_share:"Share as template",backup_export_share_hint:"Without areas, devices, sensors and images \u2013 for passing on to others.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no NextFloor plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",backup_full:"Full backup",backup_full_export:"Back up everything (plan, pictures, packs)",backup_full_import:"Restore a full backup \u2026",backup_full_hint:"One file with the plan, every background and screen picture and the installed packs. On restore every pack is checked again; the licence key is not included.",backup_full_confirm:"Replace the plan, the pictures and the packs with the backup? The current state stays as a restore point.",backup_full_not_backup:"This is not a full NextFloor backup.",backup_full_restored:"Backup restored: {packs} packs, {pictures} pictures.",backup_full_skipped:"Skipped (could not be read): {packs}.",export_name_full:"full",device_confirm:"Ask before switching",device_confirm_hint:"A tap in 3D, the quick menu and the room panel ask first. A double tap on the room leaves this device out.",cover_confirm_hint:"Open, close and positions ask first in the quick menu and the room panel, and a swipe on the marker no longer moves the blind (it turns the view instead). Stop never asks.",blind_kind:"Kind of blind",blind_roller:"Roller shutter outside",blind_venetian:"Venetian blind with slats",blind_inside:"Roller blind inside",cover2_entity:"Second blind (right half)",cover_my:'Favourite position "My" (%, 0 = none)',cover_my_go:"To the favourite position ({p} %)",blind_hint:`A venetian blind turns its slats in 3D with the cover's tilt; a roller blind inside hangs behind the glass. A wide window can have a second blind for its right half. The favourite position shows as "My" in the quick menu: a blind with positions moves there, a Somfy RTS motor without feedback goes to its own My on stop.`,confirm_switch:"Really switch {name}?",lock_confirm_unlock:"Really unlock {name}?",gang_switch_one:"Switches",furn_cover_entity:"Moves with",furn_cover_hint:"The curtain, screen, awning or gate follows this cover entity (blind, curtain, awning, gate) and travels with it. A tap opens its menu (up, stop, down).",gang_switch:"Button {n} switches",gang_socket_one:"Socket powered by",gang_socket:"Socket {n} powered by",gang_switch_hint:"A button glows while its light is on (in its colour). A tap switches it; with several buttons a small menu asks which. The same entity may sit on several switches.",gang_socket_hint:"A socket glows green while its switch is on \u2013 brighter the more it draws. A tap switches it; with several, a small menu asks which.",lock_confirm_lock:"Lock {name}?",opening_lock:"Smart lock",opening_lock_hint:"A tap on the door locks or unlocks it (always asking first). While it is unlocked, its edge glows.",split_handle_hint:"Drag: width of the plan and the 3D view",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",units:"Show lengths in",units_metric:"Metres",units_imperial:"Feet and inches",units_hint:"How lengths and areas appear in the plan, the forms and the wall view. Inputs stay in metres.",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_rotation:"Rotation (\xB0)",background_edit:"Move, scale and turn",background_edit_done:"Done",background_edit_hint:"While the mode is on: dragging the picture moves it, the handle at the bottom right scales it. Fit the picture to the scale first, then turn it.",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 arrow keys nudge \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",side_failed:"This form could not be shown ({error}). The plan stays usable. Please report the text in a GitHub issue.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"NextFloor",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_busy_floors:"floors",stats_busy_openings:"doors/windows",stats_busy_flash:"flash",stats_busy_roof:"roof",stats_busy_flow:"power flow",stats_busy_effect:"colour effect",stats_busy_robot:"robot",stats_busy_orbit:"camera turn",stats_busy_tint:"room tint",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",roof_keep:"Roof stays",roof_keep_hint:"The roof stays on the house while zooming in instead of lifting and fading out",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all_n:"Place all {n} \u2026",devices_place_all_confirm:"Put {n} devices into the room at once? (Ctrl+Z or \u201CUndo\u201D takes them all back in one step.)",devices_src_area:"This area",devices_src_other:"Other areas",devices_src_none:"No area",panel_hide:"Hide from the room panel",panel_unhide:"Show in the room panel again",panel_state_hide:'Hide the state in the room panel (e.g. a cover that only reports "unknown")',panel_state_show:"Show the state in the room panel again",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_announce:"\u{1F4E2} Announcement",announce_placeholder:"Your own message \u2026",announce_send:"Say it",announce_sent:'Said: "{message}"',announce_failed:"Announcement failed: {error}",announce_phrase_1:"Dinner is ready!",announce_phrase_2:"Time for bed!",announce_phrase_3:"Please come down!",announce_phrase_4:"We are leaving soon!",announce_phrase_5:"The dog needs to go out!",state_recording:"Recording",state_streaming:"Streaming",panel_all_off:"All off",mood_save:"Save mood",mood_save_hint:`Keeps how the room's lamps shine right now as a mood \u2013 a tap on it sets them again later, "\u2192" carries it to another room.`,mood_new:"Mood",mood_set:"Set this mood",mood_carry:"Carry over to another room",panel_all_on:"All on",view_options:"View: quality, look, markers, FPS",panel_all_open:"All up",panel_all_close:"All down",central:"Central: all lights, blinds and favourites",central_house:"Whole house",central_lights:"Lights",central_covers:"Blinds",central_on:"On",central_off:"Off",central_open:"Up",central_close:"Down",central_sure:"Sure?",central_favorites:"Favourites",central_no_favorites:'No favourites yet. Set scenes, scripts and switches in the editor under "Favourites".',card_central:"Star with the central menu",card_central_hint:"All lights and blinds of the floor or the house and the favourites from the editor.",favorites:"Favourites",favorites_hint:"Scenes, scripts, automations, buttons and switches for the central menu (star) of the 3D view \u2013 party, presence simulation, shading, watering.",favorites_add:"Add a favourite",background_handles_hint:'The picture now has handles like a piece of furniture: drag moves it, the lower right corner scales it, the round handle on top turns it (Shift for 15\xB0 steps). When it fits, tap "Done" \u2013 then it stays put.',background_fixed_hint:'The picture stays put, you can draw over it. To adjust it, tap "Move, scale and turn".',bg_level:"Straighten",bg_level_cancel:"Cancel straightening",bg_level_first:"Tap the start of a wall in the picture that should run straight (horizontal or vertical).",bg_level_second:"Now tap the end of that wall \u2013 the picture turns to fit.",bg_ruler:"Scale with a ruler",bg_ruler_cancel:"Cancel the ruler",bg_ruler_first:"Tap the start of a stretch of known length in the picture \u2013 e.g. a dimensioned wall.",bg_ruler_second:"Now tap the end of the stretch.",bg_ruler_length_hint:"Measured in the plan: {m} m. Enter the real length and the picture is scaled to fit.",bg_ruler_length:"Real length (m)",bg_ruler_apply:"Apply the scale",thumbs_fold:"Fold the floor pictures into buttons",thumbs_show:"Show the floor pictures again",room_start_view:"View as this room's start",room_start_view_hint:"When you tap the room in 3D, the camera flies to exactly the view the 3D pane on the right shows now \u2013 angle, zoom and framing. Turn on 3D beside first, turn and zoom in on the room, then tap.",room_start_view_reset:"Remove the room's start view (from above again)",room_start_view_need_pane:'Turn on "3D beside" first, then turn and zoom the room the way it should open.',floor_start_view:"View as this floor's start",floor_start_view_hint:"This floor opens in 3D the way the 3D pane on the right stands right now \u2013 e.g. the ground floor from the front and the upper floor from the back. Turn on 3D beside first, turn it, then tap.",floor_start_view_reset:"Remove the floor's start view (like the house again)",floor_start_view_need_pane:'Turn on "3D beside" first and turn the floor the way it should open.',ambilight:"Glow behind the TV (%)",ambilight_hint:"How strongly it glows behind the TV while it plays. 0 switches it off (for example if you have LED strips on the TV), 100 is the usual strength.",glow_scale:"Glow in 3D (%)",light_effects:"Effect animations in 3D",light_effects_hint:"Map exact HA effect names only. Unmapped effects keep the static HA colour. Changes nothing in Home Assistant.",light_effects_enabled:"Allow animations for this lamp",light_effect_unmapped:"Unmapped (static)",light_effect_add:"Add exact effect name",light_effect_name_limit:"The exact effect name must contain 1 to 255 characters. It will not be shortened.",light_effect_count_limit:"At most 100 mappings. Remove an existing entry first.",light_effect_exists:"This effect name is already mapped. Its existing mapping is preserved.",light_animation_none:"Static",light_animation_rainbow:"Rainbow (replaces colour)",light_animation_pulse:"Pulse (intensity)",light_animation_flicker:"Flicker (intensity)",glow_scale_hint:"How strongly the lamp glows in 3D: below 100 % tones down bright LED strips so the room does not burn out; above 100 % makes a weak lamp glow more. Switches nothing in Home Assistant.",vehicle_to_spot:"Turn into a parking spot",vehicle_to_spot_hint:"A vehicle as plain furniture always stands there. As a parking spot it appears only while a sensor reports the car, and that is where the car device is linked (charge, range, lock, climate).",as_furniture:"Show as furniture",as_furniture_hint:"Replaces the pin by a furniture item in the same place, linked to this device \u2013 a speaker for a media player, a lamp for a light. Ctrl+Z takes it back.",as_furniture_pick:"Pick furniture \u2026",as_device:"Back to a device pin",as_device_hint:"Replaces the furniture by the plain pin of its device in the same place.",presets:"Stations and playlists (Sound)",presets_hint:`Shown in every speaker's quick menu under "Play", next to the player's sources. For an Echo (Alexa Media Player): type SPOTIFY, AMAZON_MUSIC or TUNEIN and as content what you would say ("Rock Antenne"). For Sonos, Music Assistant and others: type music or url with a stream address or a URI.`,preset_type:"Type",preset_type_hint:"media_content_type of play_media, e.g. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Content",preset_content_hint:"media_content_id: stream URL, URI (spotify:playlist:\u2026) or, for Alexa, a search phrase",preset_speakers:"Only on these speakers (none = on all)",media_play:"Play",media_pause:"Pause",media_previous:"Previous",media_next:"Next",media_volume:"Volume",media_sources:"Sources",preset_add:"Station or playlist",own_buttons:"Own buttons",own_buttons_hint:"Shown in the central menu (star) below the favourites: open a dashboard path, show an entity's details, call a service, or open a browser_mod popup with your own card.",own_alerts:"Own warnings",own_alerts_hint:'A line in the warning bar of the 3D view while an entity is in a state \u2013 "Water tank empty" from the robot vacuum, "Dishwasher done". Several states with commas; for numbers <20 or >80.',own_alert_entity:"When \u2026",own_alert_state:"\u2026 is in state (empty = on)",own_alert_text:"\u2026 then this warning",own_alert_color:"Colour",own_alert_tap:"A tap",own_alert_tap_info:"opens the details",own_alert_tap_toggle:"switches the entity",own_alert_tap_room:"jumps to the room",own_alert_house:"Whole house",own_alert_new:"New warning",own_alert_add:"Add a warning",today:"Today",today_none:"Nothing on today.",today_calendars:'Calendars for "Today"',today_calendars_hint:'The appointments of these calendars show top right in the 3D view on the "Today" card, with the bins collected today or tomorrow. A tap on its title folds the card.',own_button_state:"Lights up while \u2026 is on (optional)",own_button_label:"Label",own_button_action:"Action",own_button_new:"New button",own_button_add:"Own button",own_action_navigate:"Open a path",own_action_more_info:"Entity details",own_action_service:"Call a service",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Path",own_target_more_info:"Entity",own_target_service:"Service (domain.service)",own_data:"Data (JSON)",own_data_hint:`For a service its data, for fire-dom-event the event's content, e.g. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.`,own_data_bad:"Not a valid JSON object.",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",close:"Close",panel_fold:"Fold away (the room stays in view)",panel_unfold:"Open again",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_tilt:"Slats",cover_tilt_open:"Slats open",cover_tilt_close:"Slats closed",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_opening:"Doors & windows",tool_furniture:"Furniture",qm_off:"Off",find:"Search",find_placeholder:"Where is \u2026? Device or room",find_none:"Nothing found",swipe_off:"Off",panel_pin:"Show in the room panel",panel_unpin:"Don't show in the room panel",devices_panel_hint:"The room panel shows the devices in the plan. \u2606 adds a device to the room panel without placing it.",card_section_view:"View",card_size:"Size",card_size_fixed:"Fixed height",card_size_fill:"Fill the screen",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_controls:"Switches in the card",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_floor_thumbs_hint_start:"The chosen floor is then where the card starts \u2013 the pictures at the side switch to the others",card_room_names:"Show room names",card_section_kiosk:"Wall tablet (kiosk)",card_section_features:"Features",card_weather_plan:"as set in the plan",card_pro_hint:"Motion trail and camera wall belong to the cameras: the trail shows the last half hour, the wall every camera of the plan.",card_idle_return:"Back to the start view after",card_idle_off:"Never",card_idle_min:"{n} min without a touch",card_idle_hint:"After the wait the card closes the room and shows the start view again.",card_night:"Night dimming",card_night_off:"Off",card_night_sun:"By the sun",card_night_time:"Time range",card_night_range:"Time range (e.g. 22:00-06:00)",card_idle_orbit:"Camera turn as screensaver",card_idle_orbit_hint:"After the return the view turns slowly until someone touches the tablet",card_dashboard:"Button to a dashboard (path)",card_dashboard_label:"Label of the button",card_dashboard_hint:"A button at the top right of the card opens the dashboard or view with this path, e.g. /lovelace/home or /dashboard-house/0. Without a label it shows \u2302.",card_alerts:"Show warnings",card_alerts_hint:"Smoke, gas, CO, water, alarm panel and windows open in the rain: the room pulses, a note appears at the top",card_alert_jump:"Jump to the room of a new warning",card_alert_jump_hint:"The view switches to the floor and room of the warning by itself",card_scenes:"Scene buttons in the room",card_scenes_hint:"Scenes and scripts of the area as buttons under the 3D view while a room is selected",card_sensor_bar:"Own sensors at the top",card_sensor_bar_hint:"The sensors chosen in the editor (Settings) at the top left of the card",card_central_open:"Star menu open and large",card_central_open_hint:"Favourites and own buttons stand open from the start, a size larger",card_keep_camera:"Keep the camera when switching floors",card_keep_camera_hint:"The same side, height and distance on every floor",card_today:'"Today" card',card_today_hint:"Today's appointments and the bins due, top right",card_announcements:"Announcements",card_announcements_hint:'Announcements (action "NextFloor: Announcement") show big on the card, with a chime, and are spoken',weather_short:"Weather",time_of_day:"Time of day",time_of_day_hint:"Shows sun, light, shadows and look at another time of today. Tap again to go back to now.",menu_open:"Menu open",menu_open_hint:"The star menu with favourites and own buttons stands open from the start on this device, a size larger \u2013 for a wall tablet that mostly runs scenes.",keep_camera:"Keep camera",keep_camera_hint:"Switching floors keeps the camera on the same side, height and distance instead of fitting the new floor from the start side.",view_zoom:"Zoom",view_zoom_hint:"How close the fitted views come \u2013 on small tablets the house looks larger.",weather_entity:"Weather entity",weather_effects:"Weather effects in 3D",card_weather_density:"Amount of rain and snow",card_weather_density_hint:"Fewer drops and flakes than the weather reports; clouds, fog and lightning stay",rain_warning:"Warning: window open while it rains",sun_patches:"Sunlight and shadows",sun_patches_hint:"With north set, the sunlight from sun.sun falls through the windows as bright patches on the floor, and the house throws its shadow on the plot. Untick it to keep floor and plot free of sun patches and shadows.",weather_effect_rain:"Rain",weather_effect_snow:"Snow",weather_effect_fog:"Fog (greys the scene)",weather_effect_clouds:"Clouds dim the sky and the sun",weather_effect_lightning:"Lightning in storms",weather_effect_sky:"Sun and moon in the sky",weather_entity_hint:"Which weather entity drives the sky around the house. Automatic uses the first one found.",weather_hint:"Weather at the house: rain and snow fall with the real wind, clouds drift over the plot with their shadows, lightning, fog, sun and moon",card_weather:"Weather outside",card_weather_hint:"Rain, snow, hail, clouds with shadows, lightning and fog from the first weather entity (weather_entity picks another); fewer particles on the tablet level",alerts:"Warnings",alert_smoke:"Smoke: {name}",alert_gas:"Gas: {name}",alert_co:"Carbon monoxide: {name}",alert_water:"Water: {name}",alert_alarm:"Alarm triggered",alert_alarm_by:"Alarm set off by {cause}",alert_alarm_pending:"Alarm pending",alert_window_rain:"Window open in the rain: {name}",alert_power_outage:"Power outage: {name}",alert_contact_lost:"Contact not answering: {name}",rain_sensor:"Rain sensor (own weather station)",outage_sensor:"Power outage sensor",outage_hint:'A binary sensor of class power that is off, another binary sensor that is on, a state like "off_grid" or "backup", or a voltage below 50 V raise a warning for the whole house.',contact_warning:"Warn when a door or window contact is unavailable",contact_warning_hint:"When a contact has been unavailable for 10 minutes (empty battery, out of radio reach), the window looks shut in 3D although nobody knows. A note then names the contact. A restart of Home Assistant does not warn.",motion_markers_active:"Show motion sensors only while they detect something",motion_markers_active_hint:"Applies to motion, occupancy and presence sensors. A sensor whose marker is set to always show stays visible.",status_entities:"Own sensors at the top of the 3D view",status_add:"Add a sensor",status_entities_hint:"For example the outside temperature, the alarm or the air quality: they show at the top left with name and value, in an opened room too. A tap opens their details. Up to 12.",announce_tts:"Text-to-speech for announcements",announce_phrases:"Sentences for announcements (one per line)",announce_phrases_hint:`Empty: the sentences that come with NextFloor. Announcements also exist as the action "NextFloor: Announcement" for automations \u2013 on the rooms' speakers and on every open NextFloor screen.`,opening_rain_warning:"Warn when it rains",opening_light_well:"Light well in front",sill_boards:"Sill and board",sill_boards_auto:"Automatic",sill_boards_none:"None",sill_boards_inside:"Inside only",sill_boards_outside:"Outside only",room_names_short:"Room names",floor_stack_short_dim:"Dimmed",floor_stack_short_stacked:"Stacked",floor_stack_short_single:"Alone",size_short_w:"W",size_short_d:"D",size_short_h:"H",import_error_not_json:"The file is no JSON.",import_error_not_plan:"The file is no NextFloor plan.",import_other_hint:"From Sweet Home 3D: import the .sh3d file here. Floors, rooms, doors, windows and free walls come over, furniture does not.",import_sh3d_found:"Sweet Home 3D: {floors} floors, {rooms} rooms, {openings} doors and windows, {walls} free walls ({furniture} pieces of furniture are not taken over).",import_dxf_found:"DXF: {rooms} rooms (closed polylines) and {walls} free walls (lines) on one floor.",import_error_dxf_empty:"The DXF file has no lines or polylines.",import_error_sh3d:"This is not a Sweet Home 3D file that can be read (it needs Sweet Home 3D 5.3 or newer).",import_error_sh3d_empty:"The Sweet Home 3D file has no rooms or walls.",export_name_template:"template",export_name_backup:"backup",card_floor_stack:"Floors below",floor_stack_dim:"Dimmed",floor_stack_stacked:"Stacked (the house up to here)",floor_stack_single:"Hidden (only this floor)",card_control_walls:"Tall walls/cut",card_control_floors:"Floors apart",card_control_temperature:"Temperature",card_control_humidity:"Humidity",card_control_co2:"CO\u2082",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",controls_hide:"Hide the controls \u2013 only the 3D view remains",nav_wrap:"Wrap the bar: every floor and room on several lines",bars_fold:"Fold the switches away",bars_unfold:"Switches",nav_row:"Bar in one line (scrolls sideways)",controls_show:"Show the controls again",card_controls_hidden:"Start with the controls hidden",card_controls_hidden_hint:"Only the 3D view; an eye at the bottom left brings bars, values and switches back",card_controls_hide_after:"Hide the controls after",card_hide_after_s:"{n} s without a touch",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",holos:"Cards",holos_hint:"Show or hide the live cards over the house (energy balance, car, media)",card_energy:"Show energy values at the top",card_room_panel:"Room details on tap",card_room_buttons:"Room buttons",card_room_buttons_hint:"A row with one button per room at the top of the card \u2013 tap one to open the room, like tapping it in the model",card_room_panel_hint:"The room's lights and blinds in a side panel",card_explode:"Pull floors apart in the house view",card_roof_fade:"Fade the roof out while zooming in",card_roof_fade_hint:"Off: the roof stays on the house even when the camera comes close.",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",lib_badge_light:"Lamp: links to a light and switches in 3D",lib_badge_electric:"Electric: links to an entity and a power sensor (switching, pictures, consumption)",lib_badge_hint:"Items with a symbol link to entities: lamps switch, screens show pictures, appliances show their consumption.",care_bin_today:"Collected today",care_bin_tomorrow:"Collected tomorrow",care_bin_days:"In {n} days",care_mail_yes:"Post is in",care_mail_no:"Empty",care_plant_thirsty:"Thirsty",care_plant_ok:"Well watered",care_time_left:"{time} left",care_entity_bin:"Pickup date (sensor)",care_entity_mail:"Post sensor",care_entity_plant:"Soil moisture (sensor)",care_thirsty_below:"Thirsty below (%)",care_hint_bin:'A sensor with the next pickup: days, a date, "today"/"tomorrow" or the Waste Collection Schedule integration. The bin glows the day before and on the day.',care_hint_mail:"A sensor that reports post in the box (a contact on the flap, say). The mailbox glows then.",care_hint_plant:"A moisture sensor in the soil. Below the threshold the plant glows and says it is thirsty.",lib_cat_lights:"Lights",lib_cat_seating:"Seating",lib_cat_tables:"Tables",lib_cat_storage:"Cabinets & shelves",lib_cat_beds:"Beds",lib_cat_kitchen:"Kitchen",lib_cat_appliances:"Appliances",lib_cat_bath:"Bathroom",lib_cat_media:"TV & audio",lib_cat_office:"Office",lib_cat_tech:"Tech",lib_cat_climate:"Heating & climate",lib_cat_energy:"Energy",lib_cat_garden:"Garden & terrace",lib_cat_plants:"Plants",lib_cat_kids:"Kids",lib_cat_fitness:"Fitness",lib_cat_pets:"Pets",lib_cat_workshop:"Workshop & garage",lib_cat_music:"Music & studio",lib_cat_season:"Season & decoration",lib_cat_pictures:"Pictures & frames",lib_cat_vehicles:"Vehicles",lib_cat_building:"Stairs & building parts",lib_cat_decor:"Decoration & more",lib_favourites:"Favourites",lib_recent:"Recently used",lib_for_room:"Fits {room}",lib_all_rooms:"Show all rooms",lib_linkable:"linkable",lib_lit:"lit",lib_outdoor:"outdoor",lib_fav_add:"Add to favourites",lib_fav_remove:"Remove from favourites",lib_sizes:"Sizes",feature_name_energy:"Energy flow",ext_tab:"Extensions",ext_title:"Extensions",models:"Your own 3D models",models_hint:"For some vehicles NextFloor can show a real 3D model if you own one. Choose the file (.glb) here: NextFloor turns it the right way round, makes it lighter, marks the paint and stores it on your Home Assistant. Without a model the vehicle looks as it did before.",models_licence:"The files are yours and stay on your Home Assistant. NextFloor ships no models; please make sure your model's licence lets you use it in your own installation.",model_add:"Add a model \u2026",model_replace:"Replace the model \u2026",model_remove:"Remove",model_present:"in place",model_missing:"none yet",model_remove_confirm:"Delete the model \u201C{id}\u201D from Home Assistant?",model_removed:"Model \u201C{id}\u201D deleted.",model_uploaded:"Model \u201C{id}\u201D stored ({size}). Reload the panel to see it.",model_upload:"Store on Home Assistant",model_info:"{triangles} triangles, {size} m",model_front:"Front",model_front_hint:"Turn the model until its front faces the viewer (towards the lower left in the picture).",model_paint:"Paint (the colour you pick in the editor)",model_paint_preview:"Colour in the preview",model_detail:"Level of detail",model_detail_light:"Light (tablet)",model_detail_normal:"Normal",model_detail_fine:"Fine",model_result:"Result: {triangles} triangles, {size}",model_error_not_glb:"This is not a .glb file (binary glTF). Export the model as \u201CglTF binary\u201D.",model_error_compressed:"The file is compressed (Draco, Meshopt or KTX). Export it without compression.",model_error_empty:"The file contains nothing three-dimensional.",model_error_unreadable:"The file cannot be read: {detail}",model_error_too_large:"The file is larger than {max}. Choose a lower level of detail.",model_upload_forbidden:"Only administrators may upload models.",model_upload_too_large:"Home Assistant accepts no files over {max}. Choose a lower level of detail.",model_upload_not_glb:"Home Assistant refused the file (not a binary glTF).",model_upload_bad_id:"The model id is not valid.",model_upload_other:"Uploading did not work: {detail}",ext_intro:"Import your own furniture packs, upload your own 3D models and add plugins here.",plugin:"plugin",plugins_title:"Plugins",plugins_intro:"Plugins add your own light animations, devices and cards in the room panel. Enter a plugin's address (a .js file in /config/www, i.e. /local/\u2026, from HACS /hacsfiles/\u2026, or https://\u2026).",plugins_docs:"How to write a plugin",plugins_warning:"Plugins run with the same rights as NextFloor in your browser. Only use plugins from sources you trust.",plugins_off:"off",plugins_error:"error",plugins_loading:"loading \u2026",plugins_nothing_registered:"loaded, but registered nothing",plugins_loaded:"active",plugins_reload_hint:"Takes effect after reloading the page",plugins_remove:"Remove",plugins_none:"No plugins yet.",plugins_from_dashboard:"Registered by a dashboard resource",plugins_add:"Add",plugins_url_invalid:"Enter a .js address under /local/\u2026, /hacsfiles/\u2026 or https://\u2026.",plugins_exists:"This plugin is already in the list.",plugins_limit:"At most 20 plugins.",packs_title:"Furniture packs",packs_intro:"Import your own furniture as a pack (JSON): as a file or pasted below. {n} packs come with NextFloor and are always there.",packs_docs:"Pack format",packs_none:"No packs of your own yet.",community_title:"Community furniture",community_intro:"Furniture others built with the furniture builder and shared \u2013 checked and free. Build your own:",community_builder:"Open the furniture builder",community_how:"How to share yours",community_load:"Load community furniture",community_none:"No community furniture yet \u2013 be the first!",community_install:"Install",community_update:"Update",community_installed:"Installed",community_failed:"The community furniture could not be loaded: {detail}",pack_import:"Import pack files \u2026",pack_paste:"Import JSON",pack_paste_empty:"Paste a pack's JSON first.",pack_paste_not_json:"This is not valid JSON: {detail}",pack_imported:"Imported \u201C{name}\u201D by {publisher} \u2013 {n} items",packs_imported_n:"{n} of {total} packs imported",pack_by:"by {publisher} \xB7 {n} items",pack_remove:"Remove",pack_remove_confirm:"Remove the pack \u201C{name}\u201D? Its furniture stays in the plan as plain boxes.",pack_error_not_a_pack:'This is not a furniture pack ("format": "nfpack" is missing).',pack_error_builtin:"A pack that comes with NextFloor already has this id.",pack_error_invalid_content:"The pack contains invalid furniture: {detail}",pack_error_too_large:"The pack is too large (1 MB at most).",pack_error_needs_update:'This pack needs a newer version of NextFloor. Please update first (HACS \u203A NextFloor \u203A \u22EE \u203A "Update information" \u203A "Download"), restart Home Assistant, then import again.',pack_error_other:"Import failed: {detail}",store_open:"Open plugin store",store_close:"Close plugin store",store_intro:"Reviewed plugins from the community. Each one is looked at before it is added and does not change afterwards.",store_submit:"Submit your own plugin",store_empty:"No plugins in the store yet.",store_failed:"The store could not be loaded ({error}).",store_install:"Install",store_installed:"installed",store_update:"Update",store_confirm:`Install \u201C{name}\u201D by {author}?

A plugin runs with the same rights as NextFloor in your browser. The file has been reviewed and its content is fixed:
{url}`,manual:"Manual",manual_more:"Learn more",feature_text_energy:"Energy particles fly in arcs from the solar fields to the inverter, between house, battery, grid and consumers \u2013 faster and denser the more power flows. The modules sparkle with their production, a glass card over the roof shows the balance and how self-sufficient the house is right now.",live_autarky:"self-sufficient",live_day_hint:"The last 24 hours: solar (area) and consumption (line)",live_week_hint:"The last 7 days: sun {solar} kWh, use {use} kWh (yellow: sun, light: use)",live_days:"days",live_car_away:"On the road",live_car_charging:"Charging",live_car_plugged:"Plugged in",live_car_lock:"Lock",live_car_unlock:"Unlock",live_car_unlock_confirm:"Really unlock {name}?",live_car_climate:"Climate",live_car_charge:"Start/stop charging",live_media_prev:"Previous",live_media_playpause:"Play/pause",live_media_next:"Next",live_media_volume:"Volume",live_car_device:"Car (any entity of the car)",live_car_device_hint:"Charge, range, charging, plug, lock and climate are found by NextFloor on the car's device. Without one it takes the spot's presence sensor.",live_car_departure_entity:"Departure time (optional)",live_car_departure:"Departs {time}",live_car_open:"Open: {parts}",printer_printing:"printing",printer_done:"done",printer_paused:"paused",printer_error:"error",printer_idle:"idle",printer_done_at:"done at {time}",printer_layer:"Layer",printer_nozzle:"Nozzle",printer_bed:"Bed",heatpump_heating:"heating",heatpump_water:"making hot water",heatpump_cooling:"cooling",heatpump_defrost:"defrosting",heatpump_idle:"resting",heatpump_flow_return:"Flow \u2192 return",heatpump_heat:"Heat",heatpump_power:"Power",heatpump_outside:"outside",pack_missing_item:"Furniture of a removed pack",back_to_room:"Back to {room}",back_to_floor:"Back to the floor",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",furniture_into:"New items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",flows:"Power flow",flows_hint:"Show or hide the energy arcs between solar fields, inverter, battery, grid and consumers",chk_title:"Setup",chk_hint:"What the energy flow needs. Tap a row to jump there.",chk_solar:"Solar field in place",chk_solar_add:"Put a solar field on the roof",chk_meter:"Meter with grid sensor",chk_meter_sensor:"Meter: grid sensor (W) missing",chk_meter_add:"Add the meter",chk_inverter:"Inverter with power sensor",chk_inverter_sensor:"Inverter: power sensor missing",chk_inverter_add:"Add an inverter",chk_battery:"Home battery with power and charge",chk_battery_sensor:"Home battery: power or charge missing",chk_battery_opt:"Home battery (optional)",chk_grid:"Grid connection set",chk_grid_opt:"Grid connection (optional, else automatic)",energy_sign_grid:"The house shows export while the sun produces nothing. The grid sensor probably has its sign reversed.",energy_sign_battery:"The battery charges with no sun and no grid draw. Its sensor probably has its sign reversed.",energy_sign_flip:"Flip the sign",help_title:"Help and feedback",help_hint:"Please report problems as a GitHub issue and wishes as a discussion \u2013 nothing gets lost, and everyone sees the state.",help_issue:"Report a problem",help_idea:"Propose an idea",furn_name:"Name (optional)",furn_mirror:"Mirror",furn_mirror_hint:"Swap left and right \u2013 the L-sofa the other way round, the cabinet with its door on the other side, the kitchen run mirrored.",hint_opening:"Tap a wall to add a door or window \u2013 choose its kind on the right afterwards",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_lift_slide:"Lift-and-slide door",preset_garage:"Garage door",preset_front:"Front door",opening_style:"Style",sidelight_auto:"automatic",sidelight_hinge:"Sidelight on the hinge side",sidelight_hinge_hint:"The sidelight sits opposite the hinge otherwise; ticked, it sits next to the hinges.",sidelight_width:"Sidelight width (m)",sidelight_width_left:"Left sidelight (m)",sidelight_width_right:"Right sidelight (m)",style_auto:"Automatic ({style})",style_interior:"Room door",style_front:"Front door",style_front_glass:"Front door with glass",style_sidelight:"Front door with sidelight",style_sidelights:"Front door with two sidelights",style_glass:"Glass door",style_sliding:"Sliding door",style_passage:"Opening (no door)",style_standard:"Standard",style_bars:"With glazing bars",style_glass_wall:"Glass wall (fixed)",preset_glass_wall:"Glass wall",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",tool_measure:"By measure",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",measure:"Room by measure",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_from:"Start at {x} / {z} m \u2013 tapping moves the start.",measure_length:"Length of the next wall (m)",measure_close:"Close room",measure_undo:"Remove last wall",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",rect_by_size:"Rectangle by size",rect_add:"Add rectangle",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",outdoor:"Outdoor area",outdoor_type:"Type",outdoor_height:"Height (m)",outdoor_offset:"Height offset (m, \u2212 = lower)",outdoor_outline:"Show the outline",outdoor_outline_hint:"Unticked, the area draws no glowing line along its edge \u2013 for large plots made of several lawns.",outdoor_corners_hint:"Corners: a + on an edge adds a corner, dragging shapes the area, \xD7 removes a corner.",outdoor_hint:"Outdoor lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_pool:"Pool",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",out_wild:"Wild patch",out_pergola:"Pergola / frame",outdoor_open:"Open (leave out the last edge)",outdoor_open_hint:"The edge from the last point back to the first is not drawn \u2013 a fence or pergola leaning against the house.",outdoor_bracing:"X-bracing",outdoor_cut:"Cut out of surrounding areas",outdoor_cut_hint:"Every area that contains this one whole gets a hole here \u2013 a pool in the terrace, a pond or a wild patch in the lawn. The drawing order does not matter. A pool cuts itself out on its own.",outdoor_area_hint:"The Home Assistant area of this surface (garden, terrace, pool): its devices and sensors are listed under Outside, and a pin on the surface opens it.",pool_temp:"Water temperature (optional)",pool_pump:"Pump / filter (optional)",pool_pump_on:"pump on",outdoor_slope:"Slope (m)",outdoor_slope_hint:"Height difference from the high edge to the low edge; the high edge sits at the height offset. Lamps on the area follow.",outdoor_slope_dir:"Falls towards",slope_x:"right (+X)",slope_nx:"left (\u2212X)",slope_z:"down (+Z)",slope_nz:"up (\u2212Z)",north:"North (\xB0 clockwise from up)",north_hint:"North is needed for the sun (light through the windows).",map_on:"Show a real map under the plan",map_lat:"Latitude",map_lon:"Longitude",map_use_ha:"Use Home Assistant's location",map_opacity:"Visibility (%)",map_zoom:"Detail level",map_zoom_coarse:"coarse",map_zoom_fine:"fine",map_move:"Move the map under the plan",map_step:"Step",map_url:"Own tile address (empty = OpenStreetMap)",map_hint:"Your browser loads the map tiles straight from the map server (OpenStreetMap by default, please mind their usage policy); nothing is loaded while the map is off. The plan lies on the map as the compass says \u2013 turn the compass or move the map until the house fits.",compass_title:"Compass",compass_n_short:"N",compass_s_short:"S",compass_swap:"Swap north \u2194 south",compass_swap_hint:"Turns the compass by 180\xB0. The drawing, roof faces and solar fields stay as they are.",compass_hint:"If the compass does not match reality, turn it here \u2013 nothing has to be redrawn. Sunlight, wind and the compass directions of roof faces follow it.",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_custom:"Roof sections (custom)",roof_sections:"Roof sections",roof_sections_hint:"Each roof section covers a rectangle of the house, e.g. the house, the barn or an extension \u2013 each with its own shape, ridge direction, eave height and pitch. Drag in the plan to draw a new one; tap selects it, dragging moves it, the corners resize it.",roof_sections_start:"Create roof sections from the rooms",roof_sections_regen:"Create again from the rooms",roof_sections_off:"Back to one roof",roof_regen_confirm:"Replace all roof sections with a new proposal from the rooms?",roof_section:"Roof section",roof_section_hint:"Heights count from the ground. A side with a lower eave reaches further down (catslide); pent roofs rise from the first side.",roof_shape_gable:"Gable",roof_shape_hip:"Hip",roof_shape_pent:"Pent",roof_shape_flat:"Flat",roof_shape_halfhip:"Half-hip",roof_shape_pyramid:"Pyramid",roof_shape_mansard:"Mansard",roof_shape_parapet:"Parapet",roof_shape:"Shape",roof_end_start:"End at the ridge start",roof_end_end:"End at the ridge end",roof_halfhip:"Half-hip starts at",roof_halfhip_hint:"How high up the gable the hipped part starts, as a share of the gable's height: low = a large hip, high = only the tip is hipped.",roof_axis_x:"Ridge \u2194",roof_axis_z:"Ridge \u2195",roof_eave:"Eave (m)",roof_pitch_short:"Pitch (\xB0)",roof_height:"Height (m)",roof_base:"Top of walls (m)",roof_rotation:"Turn (\xB0)",roof_on_floor:"Sits on floor",roof_on_floor_hint:"Puts the section on this floor's wall tops; base and eaves move along. In the 3D view the roof belongs to this floor.",roof_base_hint:"Below the ceiling height of the floor underneath, that floor's walls end under the roof: knee walls at the eaves, gables up to the ridge, inner walls cut by the slope. Dashed lines in the plan show where 1.5 m and 2 m of headroom remain.",roof_ridge_height:"Ridge height",roof_side_top:"top",roof_side_bottom:"bottom",roof_side_left:"left",roof_side_right:"right",roof_swap:"Swap sides",roof_open:"Canopy (posts instead of walls, see-through)",roof_open_short:"Canopy",roof_dormer:"Dormer",roof_dormer_hint:"A dormer on this side of the roof: 2 m wide, its front at the eave wall, eaves 1.4 m above the roof's eave, gable roof. Then move it and change its width and heights like any section; the main slope opens under it and the attic wall rises up to the dormer \u2013 a window fits there.",roof_outline:"Take the floor's outline",roof_outline_hint:"A flat roof as a free shape: takes the outline of the shown floor's rooms (L- or Z-shaped too) as one surface without seams. The corners can be dragged afterwards.",roof_points_hint:"Free shape: drag the corners in the plan, a + on an edge adds a corner, \xD7 removes one. Back to the rectangle drops the shape.",roof_rect:"Back to the rectangle",roof_open_hint:"For a terrace roof or a carport: posts and beams carry the roof instead of walls, and it is see-through. Where the canopy meets the house wall, it rests on the wall.",roof_swap_hint:"Turns the roof round: the two sides swap eave and pitch, a pent roof rises the other way.",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",roof_ridge:"Ridge",roof_ridge_long:"Along the long side",roof_ridge_short:"Along the short side (e.g. terraced house)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",panel_more:"More devices of the area ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",door_cover:"Drive (motorised door or gate)",cover_position_entity:"Position sensor (live)",cover_position_invert:"Sensor counts the other way round (0 = open)",contact_entity:"Contact",sensor_kind:"Sensor type",sensor_kind_contact:"Window contact (open/closed)",sensor_kind_handle:"Handle sensor (open/tilted/closed)",sensor_kind_contact_tilt:"Contact + tilt sensor",handle_entity:"Handle sensor",handle_main:"Handle sensor main leaf",leaf_main:"Main leaf",leaf_second:"Second leaf",tilt_entity:"Tilt sensor",tilt_angle_entity:"Tilt angle sensor (\xB0, optional)",tilt_angle_max:"Angle that counts as fully tilted (\xB0)",tilt_angle_offset:"Offset: angle reported while closed (\xB0)",tilt_angle_invert:"The angle counts the other way round",door_shut:"Show closed without a sensor",door_shut_hint:"A door without a contact stands half open in 3D so it reads as a door. Ticked, it is drawn closed \u2013 front door, carport, side door.",door_angle:"Opening angle",door_angle_default:"Default",door_angle_hint:"How far the leaf opens. With a sensor it opens that far once it reports open; without one it stands that far open (instead of half). Default stays as before.",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",entity_search:"Type to search \u2026",opening_hint:`Sensor type: window contact (reports open/closed), handle sensor (reports open, tilted and closed \u2013 e.g. a Homematic window handle) or contact + tilt sensor (a second sensor that only reports tilted). Automatic uses the blinds and contacts of the room's area. Position sensor: an entity reporting the blind's position while it moves (e.g. a Homematic "level", 0\u2013100 % or 0\u20131, open = high) \u2013 the blind then moves live in 3D.`,furniture:"Furniture",furniture_add:"Add furniture",studio_new:"Build your own piece",studio_title:"Furniture studio",studio_title_edit:"Furniture studio: change",studio_hint:'Pick a template, set its measurements and fronts and put the piece into the plan. It goes into the "Own furniture" pack and can be changed here again later.',studio_kind:"Template",studio_kind_cabinet:"Cabinet",studio_kind_shelf:"Shelf",studio_kind_lamp:"Lamp",studio_kind_device:"Device",studio_name:"Name",studio_width:"Width (cm)",studio_depth:"Depth (cm)",studio_height:"Height (cm)",studio_doors:"Doors",studio_drawers:"Drawers",studio_shelves:"Shelves",studio_handle:"Handles",studio_handle_bar:"Bar",studio_handle_knob:"Knob",studio_handle_none:"None",studio_base:"Base",studio_base_plinth:"Plinth",studio_base_legs:"Legs",studio_base_none:"None",studio_back:"Back panel",studio_lamp:"Kind",studio_lamp_floor:"Floor lamp",studio_lamp_table:"Table lamp",studio_lamp_pendant:"Pendant",studio_lamp_wall:"Wall light",studio_display:"Display on the front (shows the media player)",studio_mount:"Stands",studio_mount_floor:"On the floor",studio_mount_surface:"On furniture",studio_mount_wall:"On the wall",studio_color_body:"Body",studio_color_lamp_body:"Base and frame",studio_color_front:"Fronts",studio_color_boards:"Boards",studio_color_shade:"Shade",studio_color_display:"Display frame",studio_color_white:"White",studio_color_wood:"Wood",studio_color_metal:"Metal",studio_color_dark:"Dark",studio_color_glass:"Glass",studio_color_accent:"Accent",studio_color_own:"Own colour",studio_color_plan:"Colour of the plan",studio_place:"Put into the plan",studio_save:"Save the change",studio_open:"Change in the studio",studio_error:"Could not save: {detail}",studio_pack_name:"Own furniture",studio_pack_publisher:"Furniture studio",furniture_search:"Search furniture \u2026",furniture_search_none:"Nothing found. Try another word \u2013 English or German.",furniture_type:"Item",rotation:"Rotation (\xB0)",strip_tilt:"Tilt about its length (\xB0)",strip_upright:"Upright",strip_rise:"Rise along its length (\xB0)",strip_upright_hint:"The strip stands on end: its length runs up from the height above the floor \u2013 along a door frame, as a light column. The tilt lays a lying strip against a slope (90\xB0 = its face points sideways).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_sofa:"Sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_worktop:"Worktop",furn_fridge:"Fridge",furn_fridge_smart:"Smart fridge (side by side)",furn_door_left:"Door sensor left (freezer side)",furn_door_right:"Door sensor right (fridge side)",fridge_hint:"While a door sensor reports open, the door swings open in 3D.",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_stairwell:"Floor opening",stairwell_hint:"A hole in this floor, for example above the staircase or for a gallery; from above you look through it. The opening must lie within one room; several openings may overlap (for an L shape, for example). Stairs on the floor below that reach up here open the floor by themselves as well.",tool_hole:"Floor opening",tool_stairs:"Stairs",hint_stairs:"Drag where the stair should stand \u2013 it runs along the long side; set shape, turn and build on the right afterwards",tool_roof:"Roof",tool_energy:"Energy",tool_wall:"Wall",hint_wall:"Drag to draw a single wall (partition, half wall) \xB7 Shift keeps it straight \xB7 Alt without snapping",free_wall:"Wall",wall_length:"Length (m)",wall_thickness:"Wall thickness (m)",wall_height:"Height (m)",wall_height_full:"Full room height",wall_slope:"Sloping",wall_slope_start:"Height at the start (m)",wall_slope_end:"Height at the end (m)",wall_slope_hint:"Sloping wall: the top runs straight from the height at the start of the wall (the corner with the lower number) to the height at its end. Both may be above the floor height, for example for a lean-to room with high clerestory windows.",wall_slope_off:"Back to a level wall",wall_none:"No wall",wall_none_hint:"Leave this wall out altogether: for open floor plans whose rooms are one space but separate in Home Assistant.",edge_thickness:"Thickness (m)",wall_thickness_hint:"Thickness of this wall, e.g. 0.365 on a thick outer wall or 0.115 on a light partition. A wall between two rooms takes the thicker setting.",wall_thickness_reset:"Thickness as set for the house",wall_heights:"Wall heights",wall_n:"Wall {a}\u2013{b}",wall_view:"Wall view",wall_view_hint:"The wall from the front: drag its doors, windows and furniture or type their distance.",wall_view_prev:"Previous wall",wall_view_next:"Next wall",wall_view_left:"From the left (m)",wall_view_height:"Above the floor (m)",wall_part:"part {n}",wall_split_hint:"Split the wall here: the part gets a height of its own, e.g. 2.5 m next to 1.7 m in line",wall_split_at:"Split point from corner (m)",wall_join_hint:"Remove the split point: the part joins the one before it again",wall_exterior_short:"exterior wall",room_wall_hint:"A lower height turns the wall into a parapet or a counter. If two rooms share the wall, the lower setting applies. Windows and doors in it end at the wall height.",free_wall_hint:"A free-standing wall, e.g. a partition. Where it meets a room wall, the corner is mitred. Drag the handles to move its ends, drag the line to move the whole wall.",arc:"Arc",arc_hint:"Bends the wall into an arc. A room sharing the wall bends along, doors and windows move with it; Undo takes the arc back.",arc_bulge:"Bulge (m)",arc_bulge_hint:"How far the middle of the wall bulges: positive outwards, negative into the room.",arc_apply:"Bend",arc_too_wide:"A door or window in this wall is too wide for this curve. Make the curve flatter or the opening narrower.",stairwell_outside:"This opening reaches across a room boundary and is therefore not cut. Move it fully into one room or make it smaller.",hint_hole:"Drag to draw a floor opening (stairwell, gallery)",hint_roof:"Drag to draw a roof section \xB7 tap selects \xB7 drag moves \xB7 corners resize",hint_energy:"Tap a solar field to select it \xB7 drag to move it, also onto another roof face \xB7 new fields with + Solar field on the right",furn_parking:"Parking spot",furn_group_vehicles:"Parking",parking_entity:'Sensor "car present"',parking_vehicle:"Vehicle",parking_vehicle_none:"None",parking_no_pack:'No vehicle pack imported \u2013 vehicles come from the "Vehicles" pack (Extensions \u2192 Furniture packs).',parking_scale:"Size (%)",parking_type_entity:"Vehicle type sensor (optional)",parking_types:"State \u2192 vehicle",parking_type_state:"State (e.g. van)",parking_add_type:"+ Mapping",parking_hint:'Without a sensor the vehicle always stands there. With one it appears as soon as the sensor reports "on", "home" or "present". A vehicle type sensor (e.g. from an AI camera analysis) picks the model: when its state matches a mapping \u2013 also as a word in the text \u2013 that vehicle is shown, otherwise the default one.',parking_too_tall:"The vehicle ({car} m) is taller than the room ({room} m).",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_robot_vacuum:"Robot vacuum",furn_entity_vacuum:"Robot vacuum",furn_entity_mower:"Robot mower",pet_room_sensor:"The pet's room sensor (optional)",pet_room_hint:"A sensor naming the room the pet is in \u2013 Bermuda or ESPresense with a tag on its collar: in 3D it then roams that room.",furn_entity_water:"Valve or switch",fridge_temp:"Fridge temperature",freezer_temp:"Freezer temperature",fridge_temp_hint:"The pin shows the temperatures. Above 8 \xB0C in the fridge or \u221212 \xB0C in the freezer it lights up as a warning.",spray_reach:"Reach of the water (m)",spray_hint:"While the valve is open or the switch is on, the sprinkler throws water in arcs around it.",furn_robot_room:"Current room (sensor)",robot_hint:"While the robot cleans in Home Assistant it drives lanes in 3D through the room it reports (a \u201Ccurrent room\u201D sensor, matched by room or area name), else through the room of its dock. The track is simulated \u2013 Home Assistant usually does not know the exact position. It drives back to the dock when it returns.",furn_lamp_pendant:"Pendant light",furn_ceiling_fan:"Ceiling fan",furn_fan_entity:"Fan",fan_hint:"The light is the fan's light kit (leave it empty if it has none). The fan is found in the room or chosen here: in 3D the blades turn as fast as it runs, its icon switches it, swiping up/down changes the speed, a long press opens the quick menu. The height is how far it hangs from the ceiling (more = a longer downrod).",room_ceiling:"Ceiling height",room_ceiling_tip:"Lower than the floor (a bathroom under the stairs) or higher (a living room open up to the roof): ceiling lights, fans, LED strips and ceiling devices hang from here, and the room's walls are this high.",room_ceiling_through:"The ceiling ({ceiling} m) is above the floor height ({floor} m): the room reaches into the floor above, its walls rise with it, and the floor above stays open over it. The editor of the upper floor shows the area hatched.",room_inner:"Inside {w} \xD7 {d}",room_inner_hint:"Measured from wall to wall: inner walls take half their thickness, outer walls stand outside the outline.",floor_heating:"Underfloor heating (optional)",floor_heating_hint:"While the thermostat heats (or the valve is open, the switch on), the room's floor glows warm in 3D.",room_announce_speaker:"Speaker for announcements",room_announce_quiet:"Quiet time for announcements",room_announce_hint:"Without a choice, the speaker placed in the room talks, else a voice assistant, an Echo or a speaker of its area (never a TV). During the quiet time, announcements to several rooms leave this room out; one meant only for it still gets through.",ceiling_here:"Ceiling here",ceiling_here_hint:"Height of the ceiling right at this spot, e.g. in a sloping ceiling. Empty = the room's ceiling.",ceiling_slope:"Up to the roof slope",ceiling_slope_hint:"The ceiling here lies under the roof slope: the lamp hangs from its underside, right above where it stands.",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light or switch",furn_color_entity:"Colour and brightness from (optional)",furn_color_entity_hint:"For lights that a relay (Shelly, switch actuator) turns on and off while the bulb itself knows its colour and brightness: on/off comes from the switch above, colour and brightness from this entity.",lamp_extra_light:"Bulb {n} (optional)",lamp_extra_hint:"A fixture with several lights \u2013 main light, night light, ambient ring: while the main light is off it glows in 3D with the next light that is on, a little dimmer. Switch the lights one by one in the room panel.",furn_entity_climate:"Heating (thermostat)",lamp_hint:"Tap the lamp in 3D to switch it, long press for the quick menu. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",version_hint:"Installed version of NextFloor \u2013 the frontend; the integration in Home Assistant reports {backend}",accent:"Accent colour",accent_hint:"An accent colour of your own: lines and glowing edges in the neon look, buttons and pins \u2013 \u21BA brings the neon cyan back",accent_reset:"Back to cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Day",theme_auto:"Auto",clock:"Clock",clock_none:"None",clock_top_left:"Top left",clock_top_right:"Top right",clock_bottom_left:"Bottom left",clock_bottom_right:"Bottom right",glass_walls:"Glass walls",glass_walls_hint:"How opaque the walls you look through into the rooms are: left almost invisible, right opaque. For this screen.",screen_name:"Name of this screen",screen_name_hint:'Announcements show on every open NextFloor screen. With a name (e.g. "Hallway"), an announcement can go to this screen only. Unticked, this screen stays silent.',announce_on:"Announcements on this screen are on",announce_muted:"Announcements on this screen are muted",lock3d_on:"Lock 3D (no turning, zooming or panning; taps still work)",lock3d_off:"Unlock 3D",walk:"Walk through the house",travel:"Time travel: replay the last 24 hours or 7 days",travel_play:"Play",travel_pause:"Pause",travel_loading:"Loading history \u2026",travel_failed:"The history could not be loaded.",travel_speed:"Speed",travel_speed_min:"1 min/s",travel_speed_10min:"10 min/s",travel_speed_hour:"1 h/s",travel_days:"days",travel_live:"Live",card_travel_button:"Button for time travel",walk_stop:"Stop walking",walk_hint:"Drag: look around \xB7 W A S D / arrows or stick: walk \xB7 wheel: step",card_walk_button:"Button to walk through",card_lock_button:"Button for the 3D lock",backdrop:"Own background",backdrop_color:"Colour",backdrop_image:"Picture (/local/\u2026 or https://\u2026)",backdrop_dim:"Dim",backdrop_hint:"Instead of the look's sky the house stands in front of a colour or a picture of your own. A picture in /config/www is reachable at /local/\u2026.",furnish:"Furnish",split_3d:"3D beside",mount_height:"Height above the floor (m)",side_open:"Open the sidebar",side_close:"Close",side_details:"Details of the selection",side_pin:"Pin",side_pinned:"Pinned",side_pin_hint:"Pinned, the sidebar stays open; otherwise it folds away beside the 3D view while nothing is selected",split_3d_hint:"Live 3D next to the plan: drag and turn furniture and devices there \u2013 with undo, saved with the plan",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture, lamps and devices \xB7 furniture snaps to walls \xB7 tap one to turn it, set its height and mount",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_short_mould:"Mould",heat_short_wifi:"Wi-Fi",heat_short_values:"Values",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_mould:"Mould",heat_summer:"summer",heat_winter:"winter",air_co2:"air it (CO\u2082)",air_humidity:"air it (damp)",air_mould:"risk of mould \u2013 air it",room_curve_hint:"The room's temperature over the last 24 hours",heat_values:"Values at the room names",heat_wifi:"Wi-Fi",wifi_aps:"{n} access points \xB7 {clients} devices",wifi_network:"Network: {online} online \xB7 {offline} offline",wifi_none:"Place access points or routers from the packs (Smart home 2) and link them to an entity of their device.",wifi_clients:"{n} devices",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall cabinet",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_energy:"Energy & solar",energy_devices:"Devices",wallbox_charging:"charging",wallbox_plugged:"plugged in",furn_soc:"State of charge (%)",furn_export:"Export power (W, separate sensor, optional)",furn_export_hint:"If your meter reports import and export in two sensors (e.g. Growatt, Tibber Pulse), take the import sensor as power above and the export sensor here. A signed sensor does not need this.",meter_parent:"Hangs off meter",meter_parent_none:"none (main meter)",meter_main:"Main meter",meter_unmetered:"{w} unmetered",meter_device_hint:"If the device sits behind a sub-meter (e.g. a balcony plant in a flat), its power counts towards that flat. The sub-meter has to measure both ways for this (\u2212 = feeding back); if it only counts import, the flat's consumption comes out too high while there is a surplus.",meter_sub_power:"Power of the branch (W, + = drawn, \u2212 = fed back)",meter_floors:"Feeds the floors",meter_sub_hint:"A sub-meter measures its branch, e.g. a flat. Devices on the ticked floors hang off it in 3D instead of the main meter; what the main meter counts beyond that shows as \u201CCommon (rest)\u201D in the balance.",furn_charge:"Charging power (W, separate sensor, optional)",furn_charge_hint:"If your battery reports charging and discharging in two sensors (e.g. Anker Solix), take the discharging sensor as power above and the charging sensor here. A signed sensor does not need this.",furn_wallbox_status:"Status (charging, plugged in)",energy_only_note:"\u26A1 Energy: only solar fields and energy devices can be moved here; rooms and furniture are locked.",roof_only_note:"\u{1F3E0} Roof: only roof sections and roof windows can be moved here; rooms and furniture are locked.",energy_devices_hint:"Meter, inverters, home batteries, wallboxes and the grid connection are added here: on the floor chosen above, movable in the plan. With a power sensor they show their watts; the meter takes the grid sensor, a string picks its inverter. Several inverters and batteries (say a balcony plant on top) work too: each gets its own sensor.",energy_routes:"Cable routes",energy_routes_hint:"Where a cable really runs: the flow then follows your points instead of an arc through the house. Without a route it keeps the arc. Consumers keep their arc.",route_conn_solar:"{name} \u2192 inverter",route_conn_battery:"Battery \u2194 house",route_conn_inverter:"Inverter \u2192 house",route_conn_grid:"Grid \u2194 house",route_conn_meter:"{name} \u2194 parent meter",route_conn_device:"{name} \u2194 sub-meter",route_points:"{n} points",route_none:"direct arc",route_draw:"Draw route",route_redraw:"Redraw",route_drawing:"Tap the points the cable runs through on the plan, from one end to the other; switch floors in between where it goes through a ceiling. {n} points.",route_undo:"Last point",route_done:"Done",route_cable:"Show as cable",route_cable_hint:"Draws the route as a visible cable, not just as the faint line under the particles.",solar_fields:"Solar fields",solar_hint:"Put modules on the roof: they lie in the slope of the roof face; on a flat roof they stand on frames. Drag a field in the plan to move it.",solar_no_roof:"Solar fields need a roof: a gable or flat roof under Settings, or roof sections here in the Roof tool.",solar_face_gone:"roof face missing",solar_summary:"{n} modules \xB7 {kwp} kWp",solar_add:"Solar field",solar_field:"Solar field",solar_face:"Roof face",solar_rows:"Rows",solar_cols:"Modules per row",solar_portrait:"Portrait",solar_landscape:"Landscape",solar_u:"Distance from the edge (m)",solar_v:"Distance from the eave (m)",solar_tilt:"Tilt of the frames (\xB0)",solar_rack_ew:"East-west racks",solar_rack_ew_hint:"Every second row faces the other way, the pairs stand back to back \u2013 low and close, as on many flat roofs.",solar_rack_tilt:"Rack (\xB0 more tilt)",solar_flip:"Lean the other way",solar_partial:"only {n} of {total} fit on the face",solar_form_hint:"Modules that would reach beyond the roof face are left out. \u201CFill face\u201D puts as many modules on the roof as fit. kWp counted with 400 W per module.",solar_fit:"Fill face",roof_windows:"Roof windows",roof_window:"Roof window",roof_windows_hint:"Roof windows lie in the roof face, with a blind and contacts like windows. Drag them in the plan, also onto another roof face.",roof_window_tilt:"Tilt contact",roof_window_name:"Name (optional)",roof_window_motor:"Window motor (cover, optional)",roof_window_motor_hint:"A window motor (Velux, Roto, Fakro) reports its position as a cover: the sash opens in 3D as far as the motor stands. A contact or tilt contact still works without a motor.",roof_window_hint:"Open, the sash swings out, hinged at the top; tilted, a little; and the frame glows warm; the blind comes down over the glass from the top. In a roof section the window cuts a hole into the slope, so the attic looks out through it.",solar_ground:"Free-standing (garden, garage roof \u2026)",solar_add_ground:"Free-standing",solar_base:"Height of the surface (m, 0 = ground)",solar_add_wall:"On a wall",solar_wall:"Wall",solar_v_wall:"Height above the floor (m)",solar_tilt_wall:"Tilt away from the wall (\xB0, 90 = canopy)",solar_flip_wall:"Standing off at the bottom instead of the top",solar_rotation:"Rotation (\xB0)",solar_name:"Name",solar_name_hint:"e.g. string 1 south",solar_module_w:"Module width (m)",solar_module_h:"Module height (m)",solar_wp:"Module power (Wp)",solar_string:"String",solar_strings:"Strings",solar_string_none:"No string",solar_string_new:"New string",solar_string_n:"String {n}",solar_string_name:"Name of the string",solar_string_entity:"PV power of the string",solar_string_inverter:"Inverter",solar_string_inverter_none:"No inverter chosen",inverter_strings:"Strings on this inverter: {names}",inverter_strings_none:"No string on this inverter yet \u2013 assign it at a solar field under String \u203A Inverter.",solar_string_inverter_missing:"No inverter in the plan yet (add one below under Devices)",solar_string_hint:"Fields in the same string belong together, also on different roofs (e.g. 5 modules on the house and 5 on the garage). Sensor and inverter count for the whole string.",solar_string_sum:"{fields} fields \xB7 {n} modules \xB7 {kwp} kWp",solar_face_size:"Roof face {w} \xD7 {h} m (along the eave \xD7 up the slope)",solar_cols_hint:"One number for rows of equal length, or a list for rows of their own: \u201C4, 4, 3\u201D (from the eave).",solar_align_left:"Left",solar_align_center:"Centre",solar_align_right:"Right",solar_look_black:"Full black",solar_look_blue:"Blue",solar_pick:"Modules on/off one by one",solar_pick_all:"All on again",solar_pick_hint:"Tap a module in the plan to take it away or put it back. Removed ones are dashed.",solar_entity:"PV power of this field (e.g. its string)",solar_main:"Main roof",solar_section:"Section {n}",solar_flat:"flat roof",compass_n:"north",compass_ne:"north-east",compass_e:"east",compass_se:"south-east",compass_s:"south",compass_sw:"south-west",compass_w:"west",compass_nw:"north-west",furn_meter:"Electricity meter",furn_grid_point:"Grid connection",grid_point_hint:"The grid connection stands here: the handover point to the utility, e.g. at the end of the driveway. Movable in the plan.",furn_model:"Model",inverter_std:"Standard (wall unit with display)",inverter_slim:"Slim and tall (light strip)",inverter_hybrid:"Hybrid (round dial, fans)",battery_std:"Tower (stacked modules)",battery_wall:"Wall battery (flat, hanging)",battery_cube:"Compact (balcony battery)",furn_inverter:"Solar inverter",furn_home_battery:"Home battery",furn_wallbox:"Wallbox",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_state_entity:"State from (optional)",furn_state_entity2:"Second state (the other half)",furn_tap:"Tapping the item",furn_tap_default:"As usual",furn_tap_hint:"An own action like the star menu's own buttons, e.g. a browser_mod popup with your card.",furn_show_when:"Only show while \u2026",furn_show_when_state:"\u2026 is in state (empty = on)",furn_show_when_invert:"The other way round: show while it is not",furn_show_when_hint:"Seasonal decoration that only stands in December: a helper (input_boolean), a calendar or a sensor decides whether the piece shows in 3D. Separate several states with commas. The editor always shows it.",picture_upload:"Upload a photo",picture_replace:"Upload another photo",picture_stored:"An own photo is stored.",picture_url:"\u2026 or picture address",picture_entity:"\u2026 or an entity's picture",picture_border:"Mat (%)",picture_fit:"Photo",picture_fit_cover:"fills the frame",picture_fit_contain:"shown whole",picture_hint:"Your photo in the frame, in 3D and on the wall tablet. Uploaded photos are stored with the plan in a smaller size; an image entity (a photo of the day) or a camera shows its current picture.",furn_state_split:"Halves",furn_state_left_right:"Left / right",furn_state_top_bottom:"Bottom / top (bunk bed)",furn_state_hint:"The item glows while the entity reports on, occupied or home \u2013 a bed with an occupancy mat, an armchair, the sauna. Two entities light the halves: left and right, bottom and top for a bunk bed.",furn_entity_tv:"TV (media player or smart plug)",fix:"Fix",unfix:"Release",fix_hint:"Fixed: cannot be moved by accident any more (key L, right-click or long press)",fixed_drag_hint:"\u{1F512} Fixed \u2013 release it first to move it (lock in the form, right-click or key L)",fixed_delete_confirm:"This item is fixed. Delete it anyway?",lock_plan:"\u{1F512} Floor plan",lock_plan_hint:"Lock the floor plan: rooms, walls, doors, windows and outdoor areas cannot be moved by accident. Furniture and devices stay free.",start_view:"Start view",start_view_hint:"The 3D view, the card and the kiosk open the house with this view, e.g. from the garden side. Turn, zoom and move the house in the 3D pane on the right until it fits, then remember it.",start_view_card:"If a card should open with a different view, put this line into its YAML configuration.",start_view_set:"Remember the current 3D view as the start",start_view_reset:"Default",start_view_saved:"An own start view is saved.",ctx_rotate:"Turn 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} more \u2013 narrow the search",climate:"Room climate",climate_temperature:"Temperature",climate_humidity:"Humidity",climate_co2:"CO\u2082",climate_hint:"These sensors count for the heatmap and the room panel. \u201CAutomatic\u201D takes the sensors of the area and the ones placed in the room, but no device temperatures (3D printer, heat pump, flow \u2026).",plan_locked:"Floor plan locked",plan_lock:"Lock floor plan",plan_unlock:"Unlock floor plan",opening_mark:"Highlight in 3D",opening_mark_open:"When open",opening_mark_closed:"When closed (e.g. WC)",opening_mark_hint:"A highlighted window or door glows warm. \u201CWhen closed\u201D needs a contact; without a sensor nothing is highlighted.",window_opens:"Opens",window_opens_turn:"Turn and tilt (inwards)",window_opens_slide:"Sliding (sliding window, lift-and-slide door)",window_opens_top:"Top-hung (bottom swings out)",window_opens_hint:"Sliding: the pane on the hinge side slides in front of the fixed one; with two leaves the middle two slide outwards. Top-hung windows open with their contact or a tilt sensor.",marker_show:"Marker in 3D",marker_show_hint:"Automatic follows the None / Important / All switch of the 3D view. Always show and Hide apply regardless (except with None).",pin_shift:"Move the pin",pin_shift_up:"\u2191 up",pin_shift_hint:"When devices stand close together, push the pin a little aside or up here (in metres); the device itself stays where it is.",marker_show_auto:"Automatic",marker_show_always:"Always show",marker_show_no_power:"Without watts",marker_show_active:"Only while active",marker_show_never:"Hide",marker_icon:"Own symbol (Material Design icon)",device_name:"Own name (optional)",show_name:"Show the name under the marker in 3D",card_marker_names:"Own names at the markers",card_marker_names_hint:"Every device with an own name shows it small under its marker \u2013 three thermometers in the garden stay apart.",card_tap_in_room:"Switch devices only in the opened room",card_tap_in_room_hint:"In the house and floor views a tap opens the floor or room, even on a device or its marker. In the opened room it switches the device. A long press always opens its menu or details.",card_markers_outside:"Choose the markers outside the opened room",card_markers_outside_hint:`In the house, on the floor and in the other rooms only the ticked kinds; in the opened room all, as set above. A device's own "always" and "never" come first.`,marker_kind_light:"Lights",marker_kind_cover:"Blinds",marker_kind_climate:"Heating",marker_kind_media:"Media",marker_kind_switch:"Switches",marker_kind_fan:"Fans",marker_kind_lock:"Locks",marker_kind_binary:"Contacts and detectors",marker_kind_sensor:"Sensors",marker_kind_tap:"Furniture with an action",marker_kind_other:"Other",device_name_hint:'A name for the plan only, e.g. "Island accent light" \u2013 the entity in Home Assistant stays as it is.',floor_turn:"Turn 90\xB0",floor_shift_all:"Take every floor along (whole house)",floor_shift_all_hint:"Shift and turn act on every floor with the roof sections, outdoor areas, energy devices and meter \u2013 the whole house moves as one.",floor_turn_hint:"Turns everything on the floor by 90\xB0 clockwise about the middle of its rooms \u2013 when a floor was drawn the wrong way round. Three times = 270\xB0.",marker_icon_hint:"The name of a Material Design icon as in Home Assistant, e.g. mdi:thermometer or mdi:water-alert. Empty = the symbol of the device kind.",furn_power:"Power sensor (W)",furn_links_hint:"With a power sensor the item shows its watts and takes part in the energy flow.",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",stair_shape:"Shape",stair_shape_straight:"Straight",stair_shape_quarter:"Quarter turn (winders)",stair_shape_l:"L with landing",stair_shape_half:"Half turn (winders)",stair_shape_u:"U with landing",stair_shape_spiral:"Spiral",stair_turn:"Turns (walking up)",stair_turn_left:"To the left",stair_turn_right:"To the right",stair_build:"Build",stair_build_solid:"Solid (concrete)",stair_build_stringer:"On stringers",stair_build_mono:"Mono stringer (spine)",stair_build_cantilever:"Cantilevered (floating)",stair_risers:"Closed risers",stair_steps:"Risers",stair_run_width:"Flight width (m)",stair_rail:"Railing",stair_rail_none:"None",stair_rail_left:"Left",stair_rail_right:"Right",stair_rail_both:"Both sides",stair_down:"Leads down",stair_down_hint:"The stair starts on this floor and leads down, for example into a cellar that need not be drawn. It opens the floor of this level.",stair_measures:"{steps} risers of {rise} cm \xB7 going {going} cm \xB7 step measure {measure} cm",stair_uncomfortable:"uncomfortable (step measure 59\u201365 cm, rise at most 21 cm)",stair_up_note:"The stair starts at the marked front edge. The floor above opens only where less than 2.2 m of headroom is left above the steps.",stair_down_note:"You step onto the stair at the marked front edge and walk down. The plan draws it dashed; this floor opens above the steps.",stair_opening:"Floor opening",stair_opening_headroom:"By headroom (only where needed)",stair_opening_full:"Over the whole stair",stair_opening_none:"None (hatch, closed stairwell)",stair_opening_hint:"How much of the floor the stair reaches it opens: the floor above, or its own floor for a stair going down. By headroom opens only above the steps that lack 2.2 m.",stair_up_note_plain:"The stair starts at the marked front edge and rises towards the back.",stair_upgrade:"Set the shape",stair_upgrade_hint:"Turns this into a stair with a shape (winding, L, U, spiral), build, railing and number of steps.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_gas:"Gas meter (optional)",energy_water:"Water meter (optional)",energy_meters_hint:"Gas and water show with the house's balance \u2013 in the energy bar and on the house card: a sensor with the flow now (m\xB3/h, l/min) or today's reading.",energy_gas_short:"Gas",energy_water_short:"Water",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",energy_balance:"Energy balance",energy_balance_hint:"Grid, solar and battery come from the devices in the plan: meter, inverter and home battery. Here you can choose other sensors, flip signs and set the house consumption.",energy_rest:"Common (rest)",energy_advanced:"Advanced energy mode",energy_advanced_on:"Use sub-meters",energy_show_unmetered:"Show unmetered use at sub-meters",energy_show_unmetered_hint:"A sub-meter's label then shows what its floors use and how much of it no placed device measures, e.g. \u201C500 W \xB7 450 W unmetered\u201D. Otherwise it shows the meter's reading.",energy_advanced_hint:"For sub-meters, e.g. one per flat behind a main meter: a meter can then hang off another one and feed its own floors. Off = the first meter is the grid connection, further ones are consumers.",energy_consumption_sensor:"House consumption (W, else from the balance)",energy_import_prefs:"Take over from the energy dashboard",energy_import_done:"{n} sensors taken over \u2013 please check the signs.",energy_import_none:"No matching power sensors (W) were found in the energy dashboard \u2013 please choose them by hand.",energy_import_failed:"Home Assistant's energy dashboard is not set up.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant."},jm=()=>typeof $=="object"&&$||{},Zm=globalThis,qm=Zm.__nextfloorTexts??=new Map;function Ym(t){let e=t.toLowerCase().split("-")[0];return e!=="de"&&e!=="en"&&e in jm()?e:void 0}function Lc(t){let e=Ym(t),n=e===void 0?void 0:qm.get(e);return n instanceof Promise?void 0:n}function uo(t,e){return Lc(t)?.[e]}function ge(t,e,n={}){let r=t?.language??navigator.language,o=r.startsWith("de"),i=(o?void 0:Lc(r)?.[e])??(o?Ic:Hc)[e]??Hc[e]??Ic[e]??e;for(let[s,a]of Object.entries(n))i=i.replace(`{${s}}`,String(a));return i}function G(t,e,n=2){return e.toLocaleString(t?.language??void 0,{maximumFractionDigits:n})}var Oe=ie`
  :host {
    --nf-text: var(--primary-text-color, #e1e1e1);
    --nf-muted: var(--secondary-text-color, #9b9b9b);
    --nf-accent: var(--primary-color, #03a9f4);
    --nf-accent-text: var(--text-primary-color, #ffffff);
    --nf-surface: var(--ha-card-background, var(--card-background-color, #1c1c1c));
    --nf-bg: var(--primary-background-color, #111111);
    --nf-bg2: var(--secondary-background-color, #1c1c1c);
    /* floating bars and cards over the 3D view: the card colour, a little see-through */
    --nf-chrome: color-mix(in srgb, var(--nf-surface) 84%, transparent);
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
`,Ye=ie`
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
`;var ce=t=>/^(sensor|input_number|number)\./.test(t),ho=t=>/^(binary_sensor|input_boolean)\./.test(t);function pn(t,e){if(!ce(e))return!1;let n=t?.states[e]?.attributes;return n?.device_class==="power"||n?.unit_of_measurement==="W"||n?.unit_of_measurement==="kW"}function Xm(t,e){let n=t?.entities?.[e],r=n?.area_id??(n?.device_id?t?.devices?.[n.device_id]?.area_id:null);return r?t?.areas?.[r]?.name:void 0}function D(t,e){return Object.keys(t?.states??{}).filter(e).map(n=>{let r=Xm(t,n);return{id:n,label:r?`${V(t,n)} \xB7 ${r}`:V(t,n)}}).sort((n,r)=>n.label.localeCompare(r.label))}function po(t,e){return t.power&&t.power!=="none"?t.power:e.get(t.id)?.power??null}var Cc={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Wc=t=>(...e)=>({_$litDirective$:t,values:e}),fo=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};var dr=class extends fo{constructor(e){if(super(e),this.it=g,e.type!==Cc.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===g||e==null)return this._t=void 0,this.it=e;if(e===nt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let n=[e];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}};dr.directiveName="unsafeHTML",dr.resultType=1;var Bc=Wc(dr);var Vc=40,cs=class extends re{static properties={options:{attribute:!1},fixed:{attribute:!1},value:{attribute:!1},disabled:{type:Boolean},placeholder:{attribute:!1},_query:{state:!0},_open:{state:!0},_cursor:{state:!0}};blurTimer;constructor(){super(),this.options=[],this.fixed=[],this.value=null,this.disabled=!1,this.placeholder="",this._query="",this._open=!1,this._cursor=0}get current(){return[...this.fixed,...this.options].find(e=>e.id===this.value)}get hits(){let e=this._query.trim().toLowerCase(),n=e.split(/\s+/).filter(Boolean),r=s=>{let a=`${s.label} ${s.id}`.toLowerCase();return n.every(l=>a.includes(l))},o=this.fixed.filter(s=>!e||r(s)),i=e?this.options.filter(r):this.options;return[...o,...i.slice(0,Vc)]}get leftOut(){let e=this._query.trim().toLowerCase(),n=e.split(/\s+/).filter(Boolean),r=e?this.options.filter(o=>n.every(i=>`${o.label} ${o.id}`.toLowerCase().includes(i))).length:this.options.length;return Math.max(0,r-Vc)}choose(e){this.value=e,this._query="",this._open=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0,composed:!0}))}onKey(e){let n=this.hits;e.key==="ArrowDown"?(this._open=!0,this._cursor=Math.min(n.length-1,this._cursor+1),e.preventDefault()):e.key==="ArrowUp"?(this._cursor=Math.max(0,this._cursor-1),e.preventDefault()):e.key==="Enter"?(this._open&&n[this._cursor]&&this.choose(n[this._cursor].id),e.preventDefault()):e.key==="Escape"&&(this._open=!1,this._query="")}render(){let e=this.current,n=this._open?this.hits:[];return m`<div class="wrap">
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
    </div>`}static styles=[Oe,ie`
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
    `]};customElements.get("nf-entity-picker")||customElements.define("nf-entity-picker",cs);var Ht=t=>t.target.value,us=t=>Number.parseFloat(t.replace(",",".")),ue=t=>Math.round(t*1e3)/1e3,Nc=t=>t.wide?"nf-field nf-wide":"nf-field";function R(t,e,n,r,o=.01,i){return m`<label class="nf-field"
    >${e}
    <input
      type="number"
      inputmode="decimal"
      step=${o}
      min=${i??g}
      .value=${String(ue(n))}
      ?disabled=${!t.admin}
      @change=${s=>{let a=us(Ht(s));Number.isFinite(a)&&r(a)}}
    />
  </label>`}function j(t,e,n,r,o={}){return m`<label class=${Nc(o)} title=${o.title??g}
    >${e}
    <input type="text" .value=${n} placeholder=${o.placeholder??g} maxlength=${o.maxlength??g} ?disabled=${!t.admin} @change=${i=>r(Ht(i).trim())} />
  </label>`}function T(t,e,n,r,o,i={}){return m`<label class=${Nc(i)} title=${i.title??g}
    >${e}
    <select ?disabled=${!t.admin} @change=${s=>o(Ht(s))}>
      ${r.map(([s,a])=>m`<option value=${s} ?selected=${s===n}>${a}</option>`)}
    </select>
  </label>`}function O(t,e,n,r,o={}){return m`<label class="nf-check ${o.wide===!1?"":"nf-wide"}" title=${o.title??g}
    ><input type="checkbox" .checked=${n} ?disabled=${!t.admin} @change=${i=>r(i.target.checked)} />
    ${e}</label
  >`}function ct(t,e,n,r,o){return m`<label class="nf-field"
    >${e}
    <span class="nf-color-row"
      ><input type="color" .value=${n??r} ?disabled=${!t.admin} @change=${i=>o(i.target.value)} />
      ${n?m`<button type="button" class="nf-link" ?disabled=${!t.admin} @click=${()=>o(null)}>${t.t("wall_paint_default")}</button>`:g}</span
    ></label
  >`}function z(t,e,n,r,o,i){let s=r===void 0?null:r?t.t("entity_auto",{name:V(t.hass,r)}):t.t("entity_auto_none"),a=[...s!==null?[{id:"__auto",label:s}]:[],{id:"none",label:t.t("entity_none")}];return m`<label class="nf-field nf-wide"
    >${e}
    <nf-entity-picker
      .options=${o}
      .fixed=${a}
      .value=${n??(s!==null?"__auto":"none")}
      .placeholder=${t.t("entity_search")}
      ?disabled=${!t.admin}
      @change=${c=>{c.stopPropagation(),i(c.detail.value==="__auto"?null:c.detail.value)}}
    ></nf-entity-picker>
  </label>`}function fn(t,e,n){return n?(n.startsWith("mdi:")?n:`mdi:${n}`).replace(/[^a-z0-9:-]/gi,""):t.hass?Wl(t.hass,e):null}function bt(t,e,n){let r=e?(e.startsWith("mdi:")?e:`mdi:${e}`).replace(/[^a-z0-9:-]/gi,""):"";return m`<label class="nf-field nf-wide" title=${t.t("marker_icon_hint")}
    >${t.t("marker_icon")}
    <span class="nf-icon-row">
      <input type="text" placeholder="mdi:thermometer" .value=${e??""} ?disabled=${!t.admin} @change=${o=>n(Ht(o).trim().replace(/^mdi:/,"")||null)} />
      ${r?Bc(`<ha-icon icon="${r}"></ha-icon>`):g}
    </span>
  </label>`}function mn(t,e,n){return m`<label class="nf-field nf-wide" title=${t.t("marker_show_hint")}
    >${t.t("marker_show")}
    <select ?disabled=${!t.admin} @change=${r=>n(Ht(r)||null)}>
      <option value="" ?selected=${!e}>${t.t("marker_show_auto")}</option>
      ${pl.map(r=>m`<option value=${r} ?selected=${r===e}>${t.t(`marker_show_${r}`)}</option>`)}
    </select>
  </label>`}function gn(t,e,n){let r=e??{},o=i=>s=>{let a={...r,[i]:Math.round(Math.max(-5,Math.min(5,s))*100)/100};n(a.x||a.z||a.y?a:null)};return m`<details class="nf-wide nf-pin-shift" ?open=${!!e}>
    <summary>${t.t("pin_shift")}</summary>
    <div class="nf-form">
      ${R(t,"\u2194 x",r.x??0,o("x"),.05)} ${R(t,"\u2195 z",r.z??0,o("z"),.05)} ${R(t,t.t("pin_shift_up"),r.y??0,o("y"),.05)}
      ${e?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>n(null)}>${t.t("height_auto")}</button>`:g}
      <p class="nf-sub nf-wide">${t.t("pin_shift_hint")}</p>
    </div>
  </details>`}var te=(...t)=>m`<div class="nf-actions">${t}</div>`,M=(t,e="")=>m`<p class="nf-sub ${e}">${t}</p>`;function hr(t,e,n,r={}){let o=r.lowest??10;return m`<label class="nf-field" title=${t.t(r.hint??"glow_scale_hint")}
    >${t.t(r.label??"glow_scale")}
    <input
      type="number"
      min=${o}
      max="150"
      step="5"
      .value=${String(Math.round((e??1)*100))}
      ?disabled=${!t.admin}
      @change=${i=>{let s=Number(Ht(i)),a=Math.min(150,Math.max(o,Ht(i).trim()===""||Number.isNaN(s)?100:s))/100;n(Math.abs(a-1)<.001?null:a)}}
    />
  </label>`}function Kc(t,e,n){let r=t.filter(o=>o.person!==e);return n&&n!=="none"?[...r,{person:e,sensor:n}]:r}function Gc(t,e){let n=e.slice(e.indexOf(".")+1),r=o=>o.id.includes(n)&&/(area|room|raum|bermuda|espresense)/.test(o.id);return[...t.filter(r),...t.filter(o=>!r(o))]}function Uc(t){let e=t.target?`, target: { x: ${t.target.x}, y: ${t.target.y}, z: ${t.target.z} }`:"";return`start_view: { theta: ${t.theta}, phi: ${t.phi}, radius: ${t.radius}${e} }`}function jc(t){let e=t.trim();if(!e)return{ok:!0,value:null};try{let n=JSON.parse(e);return n&&typeof n=="object"&&!Array.isArray(n)?{ok:!0,value:n}:{ok:!1}}catch{return{ok:!1}}}function mo(t,e,n){let r=[...t],[o]=r.splice(e,1);return r.splice(Math.max(0,Math.min(r.length,e+n)),0,o),r}var _n=(t,e)=>t.filter((n,r)=>r!==e),go=(t,e,n)=>t.map((r,o)=>o===e?{...r,...n}:r),Lt=t=>t.length>0?t:void 0;var Qm=["scene","script","automation","button","input_button","switch","input_boolean","light","fan","cover","lock"],Jm=40,eg=20,tg=30,ng=["music","url","playlist","SPOTIFY","AMAZON_MUSIC","TUNEIN","APPLE_MUSIC"],ds={navigate:"/lovelace/rollos",more_info:"cover.wohnzimmer",service:"script.turn_on",fire_dom_event:""},_o=(t,e,n,r=!1)=>m`<button class="nf-pin" title=${t} ?disabled=${r} @click=${n}>${e}</button>`;function rg(t){let e=t.doc.settings.favorites??[],n=i=>t.change(s=>s.settings.favorites=Lt(i)),r=D(t.hass,i=>Qm.includes(i.split(".")[0])&&!e.includes(i)),o=(i,s)=>m`<div class="nf-row nf-dev-row">
    <span class="nf-dev-name"><span>${V(t.hass,i)}</span></span>
    ${_o(t.t("move_up"),"\u2191",()=>n(mo(e,s,-1)),s===0)}
    ${_o(t.t("move_down"),"\u2193",()=>n(mo(e,s,1)),s===e.length-1)}
    ${_o(t.t("delete"),"\u2715",()=>n(_n(e,s)))}
  </div>`;return m`<summary>${t.t("favorites")}${e.length>0?m` <span class="nf-lib-count">${e.length}</span>`:g}</summary>
    ${M(t.t("favorites_hint"))} ${e.map(o)}
    ${e.length<Jm?m`<div class="nf-form">${z(t,t.t("favorites_add"),null,void 0,r,i=>i&&i!=="none"&&!e.includes(i)&&n([...e,i]))}</div>`:g}`}function og(t){let e=t.doc.settings.own_alerts??[],n=s=>t.change(a=>a.settings.own_alerts=Lt(s)),r=(s,a)=>n(go(e,s,a)),o=[["",t.t("own_alert_house")],...t.doc.floors.flatMap(s=>s.rooms.map(a=>[a.id,`${a.name} \xB7 ${s.name}`]))],i=(s,a)=>m`<div class="nf-form nf-own-button">
    ${z(t,t.t("own_alert_entity"),s.entity||null,void 0,D(t.hass,()=>!0),l=>r(a,{entity:l&&l!=="none"?l:""}))}
    ${j(t,t.t("own_alert_state"),s.state??"",l=>r(a,{state:l||null}),{placeholder:t.hass?.states[s.entity]?.state??"on \xB7 <20 \xB7 >80"})}
    ${j(t,t.t("own_alert_text"),s.text,l=>r(a,{text:l||t.t("own_alert_new")}),{wide:!0,maxlength:120})}
    ${T(t,t.t("room"),s.room_id??"",o,l=>r(a,{room_id:l||null}),{wide:!0})}
    ${ct(t,t.t("own_alert_color"),s.color??null,"#ffb547",l=>r(a,{color:l}))}
    ${T(t,t.t("own_alert_tap"),s.tap??"",[["",t.t("own_alert_tap_info")],["toggle",t.t("own_alert_tap_toggle")],["room",t.t("own_alert_tap_room")]],l=>r(a,{tap:l||null}))}
    <div class="nf-actions nf-wide"><button class="nf-btn nf-danger" @click=${()=>n(_n(e,a))}>${t.t("delete")}</button></div>
  </div>`;return m`<h4>⚠ ${t.t("own_alerts")}</h4>
    ${M(t.t("own_alerts_hint"))} ${e.map(i)}
    ${e.length<40?te(m`<button class="nf-btn" @click=${()=>n([...e,{id:L("alert"),entity:"",state:null,text:t.t("own_alert_new")}])}>+ ${t.t("own_alert_add")}</button>`):g}`}function ig(t){let e=t.doc.settings.calendars??[],n=i=>t.change(s=>s.settings.calendars=Lt(i)),r=D(t.hass,i=>i.startsWith("calendar.")&&!e.includes(i)),o=(i,s)=>m`<div class="nf-row nf-dev-row">
    <span class="nf-dev-name"><span>${V(t.hass,i)}</span></span>
    ${_o(t.t("delete"),"\u2715",()=>n(_n(e,s)))}
  </div>`;return m`<h4>📅 ${t.t("today_calendars")}</h4>
    ${M(t.t("today_calendars_hint"))} ${e.map(o)}
    ${e.length<12?m`<div class="nf-form">${z(t,t.t("favorites_add"),null,void 0,r,i=>i&&i!=="none"&&!e.includes(i)&&n([...e,i]))}</div>`:g}`}function sg(t){let e=t.doc.settings.media_presets??[],n=s=>t.change(a=>a.settings.media_presets=Lt(s)),r=(s,a)=>n(go(e,s,a)),o=[...new Set(t.doc.floors.flatMap(s=>[...s.placements.map(a=>a.entity_id),...s.furniture.map(a=>a.entity??"")]).filter(s=>s.startsWith("media_player.")))],i=(s,a)=>m`<div class="nf-form nf-own-button">
    ${j(t,t.t("own_button_label"),s.label,l=>r(a,{label:l||"Radio"}),{maxlength:60})}
    ${j(t,t.t("preset_type"),s.type,l=>r(a,{type:l||"music"}),{title:t.t("preset_type_hint")})}
    ${j(t,t.t("preset_content"),s.content,l=>r(a,{content:l}),{wide:!0,title:t.t("preset_content_hint"),placeholder:"https://\u2026 \xB7 spotify:playlist:\u2026 \xB7 Rock Antenne"})}
    ${o.length>1?m`<div class="nf-sub nf-wide">${t.t("preset_speakers")}</div>
          ${o.map(l=>O(t,V(t.hass,l),!!s.speakers?.includes(l),c=>r(a,{speakers:Lt(c?[...s.speakers??[],l]:(s.speakers??[]).filter(u=>u!==l))}),{wide:!1}))}`:g}
    <div class="nf-actions nf-wide"><button class="nf-btn nf-danger" @click=${()=>n(_n(e,a))}>${t.t("delete")}</button></div>
  </div>`;return m`<h4>${t.t("presets")}</h4>
    ${M(t.t("presets_hint"))}
    <datalist id="nf-preset-types">${ng.map(s=>m`<option value=${s}></option>`)}</datalist>
    ${e.map(i)}
    ${e.length<tg?te(m`<button class="nf-btn" @click=${()=>n([...e,{id:L("preset"),label:"Radio",type:"music",content:""}])}>+ ${t.t("preset_add")}</button>`):g}`}function hs(t,e,n){let r=e.action==="fire_dom_event"?'{"browser_mod": {"service": "browser_mod.popup", "data": {"title": "Rollos", "content": {"type": "custom:my-cover-card"}}}}':'{"entity_id": "script.party"}',o=i=>{let s=i.target;s.setCustomValidity("");let a=jc(s.value);if(a.ok)return n(a.value);s.setCustomValidity(t.t("own_data_bad")),s.reportValidity()};return m`<label class="nf-field nf-wide" title=${t.t("own_data_hint")}
    >${t.t("own_data")}
    <textarea rows="4" spellcheck="false" placeholder=${r} .value=${e.data?JSON.stringify(e.data,null,1):""} @change=${o}></textarea>
  </label>`}function ag(t){let e=t.doc.settings.buttons??[],n=s=>t.change(a=>a.settings.buttons=Lt(s)),r=(s,a)=>n(go(e,s,a)),o=Wr.map(s=>[s,t.t(`own_action_${s}`)]),i=(s,a)=>m`<div class="nf-form nf-own-button">
    ${j(t,t.t("own_button_label"),s.label,l=>r(a,{label:l||t.t("own_button_new")}),{maxlength:60})}
    ${T(t,t.t("own_button_action"),s.action,o,l=>r(a,{action:l}))} ${bt(t,s.icon??null,l=>r(a,{icon:l}))}
    ${s.action!=="fire_dom_event"?j(t,t.t(`own_target_${s.action}`),s.target??"",l=>r(a,{target:l||null}),{wide:!0,placeholder:ds[s.action]}):g}
    ${s.action==="service"||s.action==="fire_dom_event"?hs(t,s,l=>r(a,{data:l})):g}
    ${z(t,t.t("own_button_state"),s.state_entity??null,void 0,D(t.hass,l=>/^(switch|light|input_boolean|binary_sensor|fan|cover|media_player|climate|lock|person|device_tracker)\./.test(l)),l=>r(a,{state_entity:l&&l!=="none"?l:null}))}
    <div class="nf-actions nf-wide">
      <button class="nf-btn" ?disabled=${a===0} @click=${()=>n(mo(e,a,-1))}>↑</button>
      <button class="nf-btn nf-danger" @click=${()=>n(_n(e,a))}>${t.t("delete")}</button>
    </div>
  </div>`;return m`<h4>${t.t("own_buttons")}</h4>
    ${M(t.t("own_buttons_hint"))} ${e.map(i)}
    ${e.length<eg?te(m`<button class="nf-btn" @click=${()=>n([...e,{id:L("btn"),label:t.t("own_button_new"),action:"navigate",target:null}])}>+ ${t.t("own_button_add")}</button>`):g}`}function Zc(t){return m`<details class="nf-section">${rg(t)} ${ag(t)} ${og(t)} ${ig(t)} ${sg(t)}</details>`}function qc(t,e){let n=t.doc.settings.start_view??null,r=()=>{let o=e();o&&t.change(i=>i.settings.start_view=o)};return m`<details class="nf-section">
    <summary>${t.t("start_view")}</summary>
    ${M(t.t("start_view_hint"))}
    ${te(m`<button class="nf-btn nf-primary" @click=${r}>${t.t("start_view_set")}</button>`,n?m`<button class="nf-btn" @click=${()=>t.change(o=>o.settings.start_view=null)}>${t.t("start_view_reset")}</button>`:g)}
    ${n?m`${M(t.t("start_view_saved"))} ${M(t.t("start_view_card"))}<code class="nf-code">${Uc(n)}</code>`:g}
  </details>`}function Yc(t){let e=Object.keys(t.hass?.states??{}).filter(o=>o.startsWith("person.")).sort(),n=D(t.hass,ce),r=o=>z(t,`${V(t.hass,o)} \xB7 ${t.t("presence_sensor")}`,t.doc.presence.find(i=>i.person===o)?.sensor??null,void 0,Gc(n,o),i=>t.replace({...structuredClone(t.doc),presence:Kc(t.doc.presence,o,i)}));return m`<details class="nf-section">
    <summary>${t.t("presence")}</summary>
    <div class="nf-form">${e.length>0?e.map(r):m`<p class="nf-sub nf-wide">${t.t("no_persons")}</p>`}</div>
    ${M(t.t("presence_hint"))}
  </details>`}var Ct=(t,e)=>t.getUint16(e,!0),pr=(t,e)=>t.getUint32(e,!0);function Xc(t){let e=new DataView(t.buffer,t.byteOffset,t.byteLength),n=-1;for(let a=t.length-22;a>=Math.max(0,t.length-65557);a--)if(pr(e,a)===101010256){n=a;break}if(n<0)throw new Error("not_zip");let r=Ct(e,n+10),o=pr(e,n+16),i=[],s=new TextDecoder;for(let a=0;a<r;a++){if(pr(e,o)!==33639248)throw new Error("not_zip");let l=Ct(e,o+10),c=pr(e,o+20),u=Ct(e,o+28),h=Ct(e,o+30),d=Ct(e,o+32),p=pr(e,o+42),f=s.decode(t.subarray(o+46,o+46+u)),_=p+30+Ct(e,p+26)+Ct(e,p+28);i.push({name:f,method:l,compressedSize:c,offset:_}),o+=46+u+h+d}return i}async function Qc(t,e){let n=t.subarray(e.offset,e.offset+e.compressedSize);if(e.method===0)return n;if(e.method!==8)throw new Error("zip_method");let r=new Blob([n.slice()]).stream().pipeThrough(new DecompressionStream("deflate-raw"));return new Uint8Array(await new Response(r).arrayBuffer())}var lg={amp:"&",lt:"<",gt:">",quot:'"',apos:"'"},cg=t=>t.replace(/&(#x?[0-9a-f]+|\w+);/gi,(e,n)=>n[0]==="#"?String.fromCodePoint(Number.parseInt(n.slice(n[1]==="x"?2:1),n[1]==="x"?16:10)):lg[n]??e);function ug(t){let e={};for(let n of t.matchAll(/([\w:.-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g))e[n[1]]=cg(n[2]??n[3]);return e}function dg(t){let e=[],n=null;for(let r of t.matchAll(/<(\/?)(level|room|point|wall|doorOrWindow|pieceOfFurniture)\b([^>]*?)(\/?)>/g)){let[,o,i,s,a]=r;if(o){i==="room"&&(n=null);continue}let l=ug(s);if(i==="point"){n&&n.points.push([Number(l.x)/100,Number(l.y)/100]);continue}let c={name:i,attrs:l,...i==="room"?{points:[]}:{}};e.push(c),i==="room"&&!a&&(n=c)}return e}var J=(t,e,n)=>Number.isFinite(Number(t[e]))&&t[e]!==void 0?Number(t[e]):n,be=t=>Math.round(t*1e3)/1e3;function Jc(t,e,n){let[r,o]=[n[0]-e[0],n[1]-e[1]],i=Math.hypot(r,o)||1e-9,s=Math.max(0,Math.min(i,((t[0]-e[0])*r+(t[1]-e[1])*o)/i)),a=[e[0]+r*s/i,e[1]+o*s/i];return{dist:Math.hypot(t[0]-a[0],t[1]-a[1]),along:s,length:i}}function hg(t){let e=`${t.name??""} ${t.catalogId??""}`.toLowerCase();return/garage|sectional|rolltor/.test(e)?"garage":/door|tür|tuer|porte|puerta|deur|haustür/.test(e)&&!/window|fenster/.test(e)?"door":"window"}function pg(t,e){let n=t.length,r=t.map((o,i)=>{let s=t[(i+1)%n],[a,l]=[s[0]-o[0],s[1]-o[1]],c=Math.hypot(a,l)||1e-9,u=[a/c,l/c],h=[(o[0]+s[0])/2,(o[1]+s[1])/2],d=[0,0];for(let p of e){let[f,_]=[p.b[0]-p.a[0],p.b[1]-p.a[1]],y=Math.hypot(f,_)||1e-9;if(Math.abs((u[0]*_-u[1]*f)/y)>.05)continue;let b=(p.a[0]-h[0])*-u[1]+(p.a[1]-h[1])*u[0],v=((h[0]-p.a[0])*f+(h[1]-p.a[1])*_)/y;if(!(Math.abs(b)>p.thickness/2+.06||v<-.05||v>y+.05)){d=[-u[1]*b,u[0]*b];break}}return{p:[o[0]+d[0],o[1]+d[1]],dir:u}});return r.map((o,i)=>{let s=r[(i-1+n)%n],a=s.dir[0]*o.dir[1]-s.dir[1]*o.dir[0];if(Math.abs(a)<1e-6)return o.p;let l=((o.p[0]-s.p[0])*o.dir[1]-(o.p[1]-s.p[1])*o.dir[0])/a;return[s.p[0]+s.dir[0]*l,s.p[1]+s.dir[1]*l]})}function fg(t){let e=Nr(),n={floors:0,rooms:0,openings:0,walls:0,furniture:0},r=t.filter(l=>l.name==="level"),o=r.length?r.map(l=>l.attrs.id??""):[""],i=t.filter(l=>l.name==="wall"),s=i.length?Math.max(...i.map(l=>J(l.attrs,"height",250)))/100:2.5;return(r.length?[...r].sort((l,c)=>J(l.attrs,"elevation",0)-J(c.attrs,"elevation",0)||J(l.attrs,"elevationIndex",0)-J(c.attrs,"elevationIndex",0)):[{name:"level",attrs:{id:""}}]).forEach((l,c)=>{let u=l.attrs.id??"",h=y=>r.length?(y.attrs.level??o[0])===u:!0,d=At(L("floor"),l.attrs.name||(c===0?"Erdgeschoss":`Etage ${c+1}`),be(J(l.attrs,"elevation",0)/100));d.height=be(J(l.attrs,"height",s*100)/100);let p=i.filter(h).map(y=>({a:[J(y.attrs,"xStart",0)/100,J(y.attrs,"yStart",0)/100],b:[J(y.attrs,"xEnd",0)/100,J(y.attrs,"yEnd",0)/100],thickness:J(y.attrs,"thickness",10)/100})),f=t.filter(y=>y.name==="room"&&h(y)&&(y.points?.length??0)>=3).map((y,b)=>({id:L("room"),name:y.attrs.name||`Raum ${b+1}`,area_id:null,points:pg(y.points,p).map(([v,w])=>[be(v),be(w)]),floor_material:"wood",panel:[]}));d.rooms=f;for(let y of t.filter(b=>b.name==="doorOrWindow"&&h(b))){let b=[J(y.attrs,"x",0)/100,J(y.attrs,"y",0)/100],v=Math.max(.6,J(y.attrs,"depth",30)/100+.3),w=null;for(let I of f)I.points.forEach((H,B)=>{let Q=Jc(b,H,I.points[(B+1)%I.points.length]);Q.dist<=v&&(!w||Q.dist<w.dist)&&(w={room:I,edge:B,...Q})});if(!w)continue;let{room:k,edge:x,along:E,length:A}=w,F=hg(y.attrs),P=Math.min(A,Math.max(.3,J(y.attrs,"width",90)/100));d.openings.push({id:L("op"),room_id:k.id,edge:x,offset:be(Math.min(A-P/2,Math.max(P/2,E))),width:be(P),type:F,sill:F==="window"?be(J(y.attrs,"elevation",90)/100):0,height:be(J(y.attrs,"height",F==="window"?130:205)/100),hinge:"left",leaves:P>1.4?2:1,swing:"in",cover:null,contact:null,contact2:null,tilt:null})}let _=[];for(let y of i.filter(h)){let b=[J(y.attrs,"xStart",0)/100,J(y.attrs,"yStart",0)/100],v=[J(y.attrs,"xEnd",0)/100,J(y.attrs,"yEnd",0)/100];if(Math.hypot(v[0]-b[0],v[1]-b[1])<.1)continue;let w=Math.max(.15,J(y.attrs,"thickness",10)/100),k=P=>f.some(I=>I.points.some((H,B)=>Jc(P,H,I.points[(B+1)%I.points.length]).dist<w)),x=Math.hypot(v[0]-b[0],v[1]-b[1]),E=Math.max(12,Math.ceil(x/.1)),A=P=>[b[0]+(v[0]-b[0])*P/E,b[1]+(v[1]-b[1])*P/E],F=Array.from({length:E+1},(P,I)=>!k(A(I)));for(let P=0;P<=E;){if(!F[P]){P++;continue}let I=P;for(;I+1<=E&&F[I+1];)I++;let[H,B]=[A(Math.max(0,P-1)),A(Math.min(E,I+1))];Math.hypot(B[0]-H[0],B[1]-H[1])>=.3&&_.push({id:L("wall"),a:[be(H[0]),be(H[1])],b:[be(B[0]),be(B[1])],thickness:be(J(y.attrs,"thickness",10)/100),height:y.attrs.height?be(J(y.attrs,"height",250)/100):null}),P=I+1}}d.walls=_,n.rooms+=f.length,n.openings+=d.openings.length,n.walls+=_.length,(f.length||_.length)&&e.floors.push(d)}),n.floors=e.floors.length,n.furniture=t.filter(l=>l.name==="pieceOfFurniture").length,{building:mt(e),report:n}}async function eu(t){let e=Xc(t).find(o=>o.name==="Home.xml");if(!e)throw new Error("sh3d_no_xml");let n=new TextDecoder().decode(await Qc(t,e)),r=fg(dg(n));if(r.report.rooms===0&&r.report.walls===0)throw new Error("sh3d_empty");return r}function mg(t){let e=t.split(/\r?\n/),n=[];for(let r=0;r+1<e.length;r+=2){let o=Number(e[r].trim());Number.isFinite(o)&&n.push([o,e[r+1].trim()])}return n}function gg(t){let e=t.findIndex(([r,o])=>r===9&&o==="$INSUNITS"),n=e>=0?Number(t[e+1]?.[1]):NaN;return{1:.0254,2:.3048,4:.001,5:.01,6:1}[n]??null}function _g(t){let e=mg(t),n=gg(e),r=e.findIndex(([s,a],l)=>s===2&&a==="ENTITIES"&&e[l-1]?.[1]==="SECTION"),o=[];if(r<0)return{shapes:o,unit:n};let i=r+1;for(;i<e.length&&!(e[i][0]===0&&e[i][1]==="ENDSEC");){let[s,a]=e[i];if(s!==0){i++;continue}let l=i+1;for(;l<e.length&&e[l][0]!==0;)l++;let c=e.slice(i+1,l);if(a==="LINE"){let u=d=>Number(c.find(([p])=>p===d)?.[1]??NaN),h=[[u(10),u(20)],[u(11),u(21)]];h.every(([d,p])=>Number.isFinite(d)&&Number.isFinite(p))&&o.push({points:h,closed:!1})}else if(a==="LWPOLYLINE"){let u=c.filter(([f])=>f===10).map(([,f])=>Number(f)),h=c.filter(([f])=>f===20).map(([,f])=>Number(f)),d=Number(c.find(([f])=>f===70)?.[1]??0),p=u.map((f,_)=>[f,h[_]]).filter(([f,_])=>Number.isFinite(f)&&Number.isFinite(_));p.length>=2&&o.push({points:p,closed:(d&1)===1})}i=l}return{shapes:o,unit:n}}var tu=t=>Math.round(t*1e3)/1e3;function nu(t){let{shapes:e,unit:n}=_g(t);if(!e.length)throw new Error("dxf_empty");let r=e.flatMap(p=>p.points),o=Math.max(Math.max(...r.map(p=>p[0]))-Math.min(...r.map(p=>p[0])),Math.max(...r.map(p=>p[1]))-Math.min(...r.map(p=>p[1]))),i=n??(o>2e3?.001:o>200?.01:1),s=Math.min(...r.map(p=>p[0])),a=Math.max(...r.map(p=>p[1])),l=([p,f])=>[tu((p-s)*i),tu((a-f)*i)],c=At(L("floor"),"Erdgeschoss",0),u=[],h=[];for(let p of e){let f=p.points.map(l);if(p.closed&&f.length>=3)u.push({id:L("room"),name:`Raum ${u.length+1}`,area_id:null,points:f,floor_material:"wood",panel:[]});else for(let _=0;_+1<f.length;_++)Math.hypot(f[_+1][0]-f[_][0],f[_+1][1]-f[_][1])>.05&&h.push({id:L("wall"),a:f[_],b:f[_+1]})}c.rooms=u,c.walls=h;let d=Nr();return d.floors=[c],{building:mt(d),report:{floors:1,rooms:u.length,openings:0,walls:h.length,furniture:0}}}var ru="nextfloor";function bg(t){let e=structuredClone(t);e.energy={...e.energy,grid:null,solar:null,battery:null,battery_soc:null,tariff:null},e.presence=[];for(let n of e.floors)n.background=null,n.placements=[],n.rooms.forEach(r=>r.area_id=null),n.furniture.forEach(r=>{Object.assign(r,{entity:null,power:null}),delete r.effect_animations}),n.openings.forEach(r=>Object.assign(r,{cover:null,contact:null,tilt:null}));return e}function ou(t,e){return{format:ru,version:1,exported_at:new Date().toISOString(),building:e?bg(t):structuredClone(t)}}var yg=t=>!!t&&(t.version===1||t.version===void 0)&&Array.isArray(t.floors)&&t.floors.every(e=>!!e&&typeof e=="object");function iu(t){let e;try{e=JSON.parse(t)}catch{throw new Error("not_json")}let n=e,r=n?.format===ru?n.building:e;if(!yg(r))throw new Error("not_plan");return r.floors.forEach(o=>o.background=null),mt(r)}var wg=t=>!/^https?:\/\//.test(t)&&!t.startsWith("camera:");function su(t){let e=new Set;for(let n of t.floors){n.background?.image_id&&e.add(n.background.image_id);let r=n.furniture.flatMap(o=>o.pictures??[]);for(let{image:o}of r)o&&wg(o)&&e.add(o)}return[...e]}function au(t,e){let n=document.createElement("a"),r=URL.createObjectURL(new Blob([e],{type:"application/json"}));Object.assign(n,{href:r,download:t}),n.click(),setTimeout(()=>URL.revokeObjectURL(r),1e3)}var vg={api:{listHistory:Ka,restoreSnapshot:Ua,takeSnapshot:Ga,fetchBackup:Za,restoreBackup:qa,fetchImage:Ir,storeImage:Zt},alert:t=>alert(t),confirm:t=>confirm(t),download:au,today:()=>new Date().toISOString().slice(0,10)},kg=t=>String(t?.message??t),bo=class{host;deps;history=null;busy=!1;constructor(e,n=vg){this.host=e,this.deps=n}async loadHistory(){let{hass:e}=this.host;e&&(this.history=await this.deps.api.listHistory(e).catch(()=>[]),this.host.refresh())}timeOf(e){return new Date(e.saved_at*1e3).toLocaleString(this.host.hass?.language,{dateStyle:"short",timeStyle:"short"})}async restorePoint(e){let{hass:n,t:r}=this.host;!n||!this.deps.confirm(r("backup_restore_confirm",{time:this.timeOf(e)}))||(await this.deps.api.restoreSnapshot(n,e.id),this.host.say(r("backup_restored")),await this.loadHistory())}exportPlan(e){let n=this.host.t(e?"export_name_template":"export_name_backup");this.deps.download(`nextfloor-${n}-${this.deps.today()}.json`,JSON.stringify(ou(this.host.doc,e),null,2))}async importPlan(e){let{hass:n,t:r}=this.host;if(!e||!n)return;let o,i=r("backup_import_confirm");try{if(/\.sh3d$/i.test(e.name)){let s=await eu(new Uint8Array(await e.arrayBuffer()));o=s.building,i=`${r("import_sh3d_found",{...s.report})}

${i}`}else if(/\.dxf$/i.test(e.name)){let s=nu(await e.text());o=s.building,i=`${r("import_dxf_found",{rooms:s.report.rooms,walls:s.report.walls})}

${i}`}else o=iu(await e.text())}catch(s){let a=s.message,l={not_json:"import_error_not_json",not_plan:"import_error_not_plan",not_zip:"import_error_sh3d",sh3d_no_xml:"import_error_sh3d",sh3d_empty:"import_error_sh3d_empty",dxf_empty:"import_error_dxf_empty"};this.deps.alert(l[a]?r(l[a]):r("backup_import_error",{error:a}));return}this.deps.confirm(i)&&(await this.deps.api.takeSnapshot(n).catch(()=>{}),this.host.adopt(o),this.host.say(r("backup_imported")))}async exportFull(){let{hass:e,t:n}=this.host;if(e){this.busy=!0,this.host.refresh();try{let r=await this.deps.api.fetchBackup(e),o={};for(let i of su(r.building))await this.deps.api.fetchImage(e,i).then(s=>o[i]=s,()=>{});this.deps.download(`nextfloor-${n("export_name_full")}-${this.deps.today()}.json`,JSON.stringify({...r,exported_at:new Date().toISOString(),images:o}))}catch(r){this.deps.alert(n("backup_import_error",{error:kg(r)}))}finally{this.busy=!1,this.host.refresh()}}}async importFull(e){let{hass:n,t:r}=this.host;if(!e||!n)return;let o;try{o=JSON.parse(await e.text())}catch{this.deps.alert(r("import_error_not_json"));return}if(o?.format!=="nextfloor-backup"||!o.building){this.deps.alert(r("backup_full_not_backup"));return}if(this.deps.confirm(r("backup_full_confirm"))){this.busy=!0,this.host.refresh();try{let i=await this.deps.api.restoreBackup(n,o.building,o.packs??[]),s=0;for(let[l,c]of Object.entries(o.images??{}))await this.deps.api.storeImage(n,l,c).then(()=>s++,()=>{});this.host.adopt(mt(i.building)),this.host.packsChanged();let a=i.skipped.length>0?` ${r("backup_full_skipped",{packs:i.skipped.map(l=>l.id).join(", ")})}`:"";this.host.say(r("backup_full_restored",{packs:i.packs,pictures:s})+a)}catch(i){let{code:s,message:a}=i??{};this.deps.alert(r("backup_import_error",{error:a??s??String(i)}))}finally{this.busy=!1,this.host.refresh()}}}};var lu=(t,e,n="application/json,.json")=>m`<label class="nf-btn nf-upload"
  >${t}<input
    type="file"
    accept=${n}
    @change=${r=>{let o=r.target,i=o.files?.[0];o.value="",e(i)}}
  />
</label>`;function cu(t,e){let n=t.t,r=e.history,o=r===null?M(n("loading")):r.length===0?M(n("backup_none")):m`<div class="nf-room-list">
            ${r.map(i=>m`<div class="nf-row nf-dev-row">
                <span>${e.timeOf(i)} <span class="nf-muted">· ${n("backup_summary",{rooms:i.rooms,furniture:i.furniture})}</span></span>
                <button class="nf-link" @click=${()=>e.restorePoint(i)}>${n("backup_restore")}</button>
              </div>`)}
          </div>`;return m`<details class="nf-section" @toggle=${i=>i.target.open&&void e.loadHistory()}>
    <summary>${n("backup")}</summary>
    <h4 class="nf-lib-head">${n("backup_history")}</h4>
    ${o}
    <h4 class="nf-lib-head">${n("backup_file")}</h4>
    ${te(m`<button class="nf-btn" @click=${()=>e.exportPlan(!1)}>${n("backup_export")}</button>`,m`<button class="nf-btn" title=${n("backup_export_share_hint")} @click=${()=>e.exportPlan(!0)}>${n("backup_export_share")}</button>`,lu(n("backup_import"),i=>{e.importPlan(i)},"application/json,.json,.sh3d,.dxf"))}
    ${M(n("backup_hint"))} ${M(n("import_other_hint"))}
    <h4 class="nf-lib-head">${n("backup_full")}</h4>
    ${te(m`<button class="nf-btn" ?disabled=${e.busy} @click=${()=>e.exportFull()}>${e.busy?"\u2026":n("backup_full_export")}</button>`,lu(n("backup_full_import"),i=>{e.importFull(i)}))}
    ${M(n("backup_full_hint"))}
  </details>`}function uu(t,e){return e&&t.states[e]?e:Object.keys(t.states).filter(n=>n.startsWith("weather.")).sort()[0]??null}var Wt=(t,e,n)=>Math.min(n,Math.max(e,t)),xg=t=>(Math.round(t)%360+360)%360,ps=(t,e)=>xg(t+e);function du(t,e,n){return n?[...new Set([...t,e])]:t.filter(r=>r!==e)}function hu(t,e,n){let r=t.t,o=s=>()=>n(ps(e,s)),i=S`<svg class="nf-compass-dial" viewBox="-50 -50 100 100" role="img" aria-label=${r("compass_title")}>
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
      ${R(t,r("north"),e,s=>n(ps(s,0)),1)}
      <div class="nf-actions">
        <button class="nf-btn" ?disabled=${!t.admin} title=${r("compass_swap_hint")} @click=${o(180)}>⇅ ${r("compass_swap")}</button>
        <button class="nf-btn" ?disabled=${!t.admin} @click=${o(-90)}>↺ 90°</button>
        <button class="nf-btn" ?disabled=${!t.admin} @click=${o(90)}>↻ 90°</button>
      </div>
      <span class="nf-sub">${r("compass_hint")}</span>
    </div>
  </div>`}var $g="https://tile.openstreetmap.org/{z}/{x}/{y}.png";var Sg=40075016686e-3,fs=Math.PI/180,fr=18,mr=.5,Mg=160;function Eg(t,e,n){let r=2**n,o=(e+180)/360*r,i=(1-Math.log(Math.tan(t*fs)+1/Math.cos(t*fs))/Math.PI)/2*r;return[o,i]}var Rg=(t,e)=>Sg*Math.cos(t*fs)/2**e;function pu(t,e,n,r=Mg){let[o,i]=Eg(t,e,n),s=Rg(t,n),a=r/s,l=2**n-1,c=[];for(let u=Math.floor(i-a);u<=Math.floor(i+a);u++)for(let h=Math.floor(o-a);h<=Math.floor(o+a);h++){if(u<0||u>l)continue;let d=(h%(l+1)+l+1)%(l+1);c.push({x:d,y:u,z:n,east:(h-o)*s,north:-(u-i)*s,size:s})}return c}function fu(t,e){return t.replace("{z}",String(e.z)).replace("{x}",String(e.x)).replace("{y}",String(e.y)).replace("{s}","abc"[(e.x+e.y)%3])}var mu=t=>t.url&&t.url.startsWith("https://")?t.url:$g;var yo=t=>!!t&&t.on===!0&&Number.isFinite(t.lat)&&Number.isFinite(t.lon),gu=t=>({x:t.x??0,z:t.z??0,opacity:t.opacity??mr,zoom:t.zoom??fr});function Ag(t){let e=[],n=[];for(let o of t.floors){for(let i of o.rooms)for(let[s,a]of i.points)e.push(s),n.push(a);for(let i of o.outdoor??[])for(let[s,a]of i.points)e.push(s),n.push(a)}if(!e.length)return[0,0];let r=o=>Math.round((Math.min(...o)+Math.max(...o))/2*100)/100;return[r(e),r(n)]}function _u(t,e){let[n,r]=Ag(t);return{on:!0,lat:e?.lat??0,lon:e?.lon??0,x:n,z:r,opacity:mr,zoom:fr,url:null}}function bu(t,e,n){let r=o=>Math.round(o*100)/100;return{...t,x:r((t.x??0)+e),z:r((t.z??0)+n)}}function yu(t){let e=t.trim();return e===""?null:/^https:\/\/\S+$/.test(e)&&["{z}","{x}","{y}"].every(n=>e.includes(n))?e:void 0}var Fg=["15","16","17","18","19"],zg=["1","5","20"],wo="5";function wu(t,e,n){let r=t.t,o=e.settings.map??null,i=t.hass?.config,s=yo(o),a=u=>{if(!u)return n(o?{...o,on:!1}:null);n(o?{...o,on:!0}:_u(e,{lat:i?.latitude,lon:i?.longitude}))},l=u=>o&&n({...o,...u}),c=(u,h)=>()=>o&&n(bu(o,u*Number(wo),h*Number(wo)));return m`<div class="nf-map-settings nf-wide">
    ${O(t,r("map_on"),s,a,{title:r("map_hint")})}
    ${o&&o.on?m`<div class="nf-form">
          ${R(t,r("map_lat"),o.lat,u=>l({lat:Math.max(-85,Math.min(85,u))}),1e-4)}
          ${R(t,r("map_lon"),o.lon,u=>l({lon:Math.max(-180,Math.min(180,u))}),1e-4)}
          ${i?.latitude!==void 0&&i.longitude!==void 0?m`<button class="nf-btn nf-wide" ?disabled=${!t.admin} @click=${()=>l({lat:i.latitude,lon:i.longitude})}>${r("map_use_ha")}</button>`:g}
          ${R(t,r("map_opacity"),Math.round((o.opacity??mr)*100),u=>l({opacity:Math.max(5,Math.min(100,u))/100}),5,5)}
          ${T(t,r("map_zoom"),String(o.zoom??fr),Fg.map(u=>[u,u==="15"?`${u} \xB7 ${r("map_zoom_coarse")}`:u==="19"?`${u} \xB7 ${r("map_zoom_fine")}`:u]),u=>l({zoom:Number(u)}))}
          <div class="nf-wide nf-map-move">
            <span class="nf-sub">${r("map_move")}</span>
            <div class="nf-map-arrows">
              <button class="nf-btn" ?disabled=${!t.admin} title=${r("map_move")} @click=${c(0,-1)}>▲</button>
              <button class="nf-btn" ?disabled=${!t.admin} title=${r("map_move")} @click=${c(-1,0)}>◀</button>
              <button class="nf-btn" ?disabled=${!t.admin} title=${r("map_move")} @click=${c(1,0)}>▶</button>
              <button class="nf-btn" ?disabled=${!t.admin} title=${r("map_move")} @click=${c(0,1)}>▼</button>
            </div>
            ${T(t,r("map_step"),wo,zg.map(u=>[u,`${u} m`]),u=>wo=u,{wide:!1})}
          </div>
          ${j(t,r("map_url"),o.url??"",u=>{let h=yu(u);h!==void 0&&l({url:h})},{wide:!0,placeholder:"https://\u2026/{z}/{x}/{y}.png",maxlength:300})}
          ${M(r("map_hint"),"nf-wide")}
        </div>`:g}
  </div>`}var Pg=["none","flat","gable","custom"];function Tg(t,e,n){let r=t.t,o=!!e,i=s=>n({color:null,image:null,dim:.35,...e??{},...s});return m`<div class="nf-sub nf-wide">${r("backdrop")}</div>
    ${O(t,r("backdrop"),o,s=>n(s?{color:"#101828",image:null,dim:.35}:null))}
    ${o?m`<label class="nf-field"
            >${r("backdrop_color")}
            <input type="color" .value=${e?.color??"#101828"} ?disabled=${!t.admin} @change=${s=>i({color:s.target.value})}
          /></label>
          ${R(t,r("backdrop_dim"),Math.round((e?.dim??.35)*100),s=>i({dim:Wt(s,0,80)/100}),5,0)}
          ${j(t,r("backdrop_image"),e?.image??"",s=>i({image:s||null}),{wide:!0,placeholder:"/local/hintergrund.jpg"})}
          ${M(r("backdrop_hint"),"nf-wide")}`:g}`}function Og(t,e,n){let r=t.t,o=D(t.hass,i=>!e.includes(i)&&/^(sensor|binary_sensor|alarm_control_panel|weather|input_|counter|lock|climate|person|sun)\b/.test(i));return m`<div class="nf-sub nf-wide">${r("status_entities")}</div>
    ${e.length?m`<div class="nf-chips nf-wide">
          ${e.map(i=>m`<span class="nf-chip">${V(t.hass,i)}
              ${t.admin?m`<button class="nf-chip-x" title=${r("delete")} aria-label=${`${r("delete")}: ${V(t.hass,i)}`} @click=${()=>n(e.filter(s=>s!==i))}>×</button>`:g}</span
            >`)}
        </div>`:g}
    ${e.length<12?z(t,r("status_add"),null,void 0,o,i=>i&&i!=="none"&&n([...e,i])):g}
    ${M(r("status_entities_hint"),"nf-wide")}`}function vu(t,e){let n=t.t,r=t.doc.settings,o=c=>t.replace({...structuredClone(t.doc),settings:{...structuredClone(t.doc.settings),...c}}),i=c=>o({roof:{...r.roof,...c}}),s=Pg.map(c=>[c,n(`roof_${c}`)]),a=r.weather_effects??gl,l=r.roof.type==="gable";return m`<details class="nf-section">
    <summary>${n("settings")}</summary>
    <div class="nf-form">
      ${R(t,n("wall_exterior"),r.wall_exterior,c=>o({wall_exterior:Wt(c,.02,1)}),.01,.02)}
      ${R(t,n("wall_interior"),r.wall_interior,c=>o({wall_interior:Wt(c,.02,1)}),.01,.02)}
      ${ct(t,n("wall_paint_outside"),r.wall_paint_outside,Ml,c=>o({wall_paint_outside:c}))}
      ${ct(t,n("wall_paint_inside"),r.wall_paint_inside,Vr,c=>o({wall_paint_inside:c}))}
      ${M(n("wall_paint_hint"),"nf-wide")}
      ${R(t,n("grid"),r.grid,c=>o({grid:Wt(c,.01,1)}),.01,.01)}
      ${T(t,n("units"),r.units==="imperial"?"imperial":"metric",[["metric",n("units_metric")],["imperial",n("units_imperial")]],c=>o({units:c==="imperial"?"imperial":null}),{title:n("units_hint")})}
      ${hu(t,r.north,c=>o({north:c}))}
      ${wu(t,t.doc,c=>o({map:c}))}
      ${T(t,n("roof"),r.roof.type,s,c=>c==="custom"?e.useRoofSections():i({type:c}),{wide:!0})}
      ${l?T(t,n("roof_ridge"),r.roof.ridge==="short"?"short":"long",[["long",n("roof_ridge_long")],["short",n("roof_ridge_short")]],c=>i({ridge:c==="short"?"short":null}),{wide:!0}):g}
      ${l?R(t,n("roof_pitch"),r.roof.pitch,c=>i({pitch:Wt(c,5,60)}),1,5):g}
      ${r.roof.type!=="none"?R(t,n("roof_overhang"),r.roof.overhang,c=>i({overhang:Wt(c,0,2)}),.05,0):g}
      ${t.hass?z(t,n("weather_entity"),r.weather_entity??null,uu(t.hass,null),D(t.hass,c=>c.startsWith("weather.")),c=>o({weather_entity:c})):g}
      <div class="nf-sub nf-wide">${n("weather_effects")}</div>
      ${ml.map(c=>O(t,n(`weather_effect_${c}`),a.includes(c),u=>o({weather_effects:du(a,c,u)}),{wide:!1}))}
      ${O(t,n("rain_warning"),r.rain_warning!==!1,c=>o({rain_warning:c}))}
      ${t.hass&&r.rain_warning!==!1?z(t,n("rain_sensor"),r.rain_sensor??null,void 0,D(t.hass,c=>/^(binary_sensor|sensor)\./.test(c)),c=>o({rain_sensor:c==="none"?null:c})):g}
      ${t.hass?z(t,n("outage_sensor"),r.outage_sensor??null,void 0,D(t.hass,c=>/^(binary_sensor|sensor)\./.test(c)),c=>o({outage_sensor:c==="none"?null:c})):g}
      ${M(n("outage_hint"),"nf-wide")}
      ${O(t,n("contact_warning"),!!r.contact_warning,c=>o({contact_warning:c||void 0}),{title:n("contact_warning_hint")})}
      ${O(t,n("motion_markers_active"),!!r.motion_markers_active,c=>o({motion_markers_active:c||void 0}),{title:n("motion_markers_active_hint")})}
      ${t.hass?Og(t,r.status_entities??[],c=>o({status_entities:c.length?c:null})):g}
      ${t.hass?z(t,n("announce_tts"),r.announce_tts??null,void 0,D(t.hass,c=>c.startsWith("tts.")),c=>o({announce_tts:c==="none"?null:c})):g}
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
      ${O(t,n("sun_patches"),r.sun_patches!==!1,c=>o({sun_patches:c}),{title:n("sun_patches_hint")})}
      ${Tg(t,r.backdrop??null,c=>o({backdrop:c}))}
    </div>
    ${M(`${n("north_hint")} ${n("weather_entity_hint")}`)}
  </details>`}var gr=t=>t&&t!=="none"?t:null,_r=(t,e)=>{e&&!t.includes(e)&&t.push(e)},ms=t=>new Map(t.floors.flatMap(e=>e.furniture.filter(n=>n.type==="meter").map(n=>[n.id,n])));function Bt(t,e){if(!t.energy.advanced||e.type!=="meter"||!e.parent_meter)return null;let n=ms(t),r=new Set([e.id]);for(let o=n.get(e.parent_meter);o;o=n.get(o.parent_meter??"")){if(r.has(o.id))return null;r.add(o.id)}return n.has(e.parent_meter)?e.parent_meter:null}function bn(t){return new Set([...ms(t).values()].filter(e=>Bt(t,e)).map(e=>e.id))}function br(t,e){return!t.energy.advanced||!e.parent_meter?null:bn(t).has(e.parent_meter)?e.parent_meter:null}function ku(t,e,n){if(n.type!=="meter"||n.id===e.id)return!1;let r=ms(t),o=new Set;for(let i=n;i&&!o.has(i.id);i=r.get(i.parent_meter??"")){if(i.id===e.id)return!1;o.add(i.id)}return!0}function ko(t,e=n=>gr(n.power)){let n={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let r of t.floors.flatMap(o=>o.furniture)){let o=e(r),i=r.type==="meter"?Bt(t,r):null;if(i)(n.subMeters??=[]).push({id:r.id,parent:i,power:o,invert:!!r.meter_invert,floors:r.meter_floors??[],solar:[],batteries:[]});else if(r.type==="meter")n.grid??=o,n.gridExport??=gr(r.export);else if(r.type==="inverter")_r(n.solar,o);else if(r.type==="home_battery"){let s=gr(r.charge);_r(n.battery,o),_r(n.charge,s),_r(n.soc,gr(r.soc)),(o||s)&&n.batteries.push({power:o,charge:s})}}for(let r of n.subMeters?t.floors.flatMap(o=>o.furniture):[]){let o=r.type==="inverter"||r.type==="home_battery"?n.subMeters?.find(a=>a.id===br(t,r)):void 0,i=o?e(r):null;o&&r.type==="inverter"&&_r(o.solar,i);let s=gr(r.charge);o&&r.type==="home_battery"&&(i||s)&&o.batteries.push({power:i,charge:s})}return n}function Dg(t){for(let e of t.floors){let n=e.furniture.find(r=>r.type==="meter"&&!Bt(t,r));if(n)return{floor_id:e.id,x:n.x,z:n.z}}return t.energy.meter}var Ig=/(phase|_l[123]\b|_[abc]$|today|daily|heute)/,Hg=/_?(energy|energie|total|today|daily|kwh|import|export|consumption|production)/g;function vo(t,e,n="power"){let r=e?t.entities?.[e]?.device_id:void 0;if(!e||!r)return null;let o=Object.keys(t.states).filter(a=>a.startsWith("sensor.")&&t.entities?.[a]?.device_id===r&&t.states[a]?.attributes.device_class===n);if(o.length<=1)return o[0]??null;let i=o.filter(a=>!Ig.test(a)),s=e.replace(/^sensor\./,"").replace(Hg,"");return i.find(a=>s&&a.includes(s))??i[0]??o[0]}function xu(t,e){let n={},r=(o,i)=>{i&&!n[o]&&(n[o]=i)};for(let o of e.energy_sources??[])if(o.type==="grid")r("grid",vo(t,o.flow_from?.[0]?.stat_energy_from??o.flow_to?.[0]?.stat_energy_to));else if(o.type==="solar")r("solar",vo(t,o.stat_energy_from));else if(o.type==="battery"){let i=o.stat_energy_from??o.stat_energy_to;r("battery",vo(t,i)),r("battery_soc",vo(t,i,"battery"))}return n}function De(t,e=!1){let n=t?Number(t.state):NaN;if(!Number.isFinite(n))return null;let r={kW:1e3,MW:1e6}[String(t.attributes.unit_of_measurement??"W")]??1;return e?-n*r:n*r}var $u=t=>{let e=t.filter(n=>n!==null);return e.length?e.reduce((n,r)=>n+r,0):null};function Lg(t,e,n){let r=e.grid??n.grid,o=r?De(t.states[r],e.grid_invert):null;if(!e.grid&&n.gridExport){let i=Math.max(0,De(t.states[n.gridExport])??0);return Math.max(0,o??0)-i}return o}function Cg(t,e,n){return e.solar?De(t.states[e.solar]):n.solar.length?$u(n.solar.map(r=>De(t.states[r]))):null}function gs(t,e,n){return e.charge?(e.power?Math.max(0,De(t.states[e.power])??0):0)-Math.max(0,De(t.states[e.charge])??0):e.power?De(t.states[e.power],n):null}function Wg(t,e,n){return e.battery?De(t.states[e.battery],e.battery_invert):$u(n.batteries.map(r=>gs(t,r,e.battery_invert)))}function _s(t,e,n,r=ko(e)){let o=e.energy,i=Lg(t,o,r),s=Cg(t,o,r),a=Wg(t,o,r),l=(o.battery_soc?[o.battery_soc]:r.soc).map(f=>Number(t.states[f]?.state)).filter(Number.isFinite),c=l.length?l.reduce((f,_)=>f+_,0)/l.length:null,u=o.tariff?t.states[o.tariff]:void 0,h=Number(u?.state),d=o.consumption?De(t.states[o.consumption]):null;d===null&&(i!==null||s!==null||a!==null)&&(d=(i??0)+Math.max(0,s??0)+(a??0)),d===null&&n.length>0&&(d=n.reduce((f,_)=>f+_.power,0));let p={grid:i,solar:s===null?null:Math.max(0,s),battery:a,soc:c,tariff:u&&Number.isFinite(h)?{value:h,unit:String(u.attributes.unit_of_measurement??"")}:null,consumption:d===null?null:Math.max(0,d)};return r.subMeters?{...p,...Bg(t,r,p.consumption,o.battery_invert,n)}:p}function Bg(t,e,n,r,o){let i=e.subMeters??[],s=new Map;for(let d of i)for(let p of d.floors)s.has(p)||s.set(p,d.id);let a=new Set([e.grid,e.gridExport,...e.solar,...e.battery,...e.charge,...i.flatMap(d=>[d.power,...d.solar,...d.batteries.flatMap(p=>[p.power,p.charge])])]),l=d=>o.filter(p=>s.get(p.floorId)===d&&!a.has(p.powerEntity)).reduce((p,f)=>p+f.power,0),c=new Map(i.map(d=>[d.id,d.power?De(t.states[d.power],d.invert):null])),u=i.map(d=>{let p=c.get(d.id)??null,f=d.solar.reduce((v,w)=>v+Math.max(0,De(t.states[w])??0),0),_=d.batteries.reduce((v,w)=>v+(gs(t,w,r)??0),0),y=i.filter(v=>v.parent===d.id).reduce((v,w)=>v+(c.get(w.id)??0),0),b=p===null?null:Math.max(0,p+f+_-y);return{id:d.id,parent:d.parent,power:p,solar:f,battery:_,use:b,unmetered:b===null?null:Math.max(0,b-l(d.id))}}),h=u.reduce((d,p)=>d+(p.use??0),0);return{subMeters:u,rest:n===null?null:Math.max(0,n-h)}}function Vg(t,e,n){let r=t.b[0]-t.a[0],o=t.b[1]-t.a[1],i=Math.hypot(r,o)||1,s=Math.min(1,Math.max(0,((e.x-t.a[0])*r+(e.z-t.a[1])*o)/(i*i))),a=t.a[0]+r*s,l=t.a[1]+o*s,c=o/i*(a-n.x)+-r/i*(l-n.z)<0?-1:1;return{x:a,z:l,nx:c*o/i,nz:-c*r/i,distance:Math.hypot(e.x-a,e.z-l)}}function Su(t){let e=Dg(t),n=e?t.floors.find(c=>c.id===e.floor_id):void 0;if(!e||!n)return null;let r={exterior:t.settings.wall_exterior,interior:t.settings.wall_interior},o=Ae(n.rooms,r,n.walls??[]).walls.filter(c=>c.exterior),i=n.rooms.flatMap(c=>c.points);if(o.length===0||i.length===0)return null;let s={x:i.reduce((c,u)=>c+u[0],0)/i.length,z:i.reduce((c,u)=>c+u[1],0)/i.length},a=o.map(c=>Vg(c,e,s)).reduce((c,u)=>u.distance<c.distance?u:c),l=r.exterior/2+3;return{floorId:n.id,x:a.x+a.nx*l,z:a.z+a.nz*l}}function Mu(t,e){let n=t.floors.flatMap(f=>f.furniture.map(_=>({floor:f,item:_}))),r=f=>n.filter(_=>_.item.type===f),o=f=>!!po(f.item,e),i=f=>({kind:"device",...f}),[s,a,l,c,u]=[t.settings.roof.solar??[],r("meter"),r("inverter"),r("home_battery"),r("grid_point")],h=!!t.energy.grid||a.some(o),d=!!t.energy.solar||l.length>0&&l.every(o),p=!!t.energy.battery||c.every(f=>o(f)&&f.item.soc&&f.item.soc!=="none");return[s.length>0?{state:"ok",label:"chk_solar",target:{kind:"solar-field",id:s[0].id}}:{state:"todo",label:"chk_solar_add",target:{kind:"add-solar-field"}},a.length>0?{state:h?"ok":"todo",label:h?"chk_meter":"chk_meter_sensor",target:i(a[0])}:{state:"todo",label:"chk_meter_add",target:{kind:"add-device",type:"meter"}},l.length>0?{state:d?"ok":"todo",label:d?"chk_inverter":"chk_inverter_sensor",target:i(l.find(f=>!o(f))??l[0])}:{state:"todo",label:"chk_inverter_add",target:{kind:"add-device",type:"inverter"}},c.length>0?{state:p?"ok":"todo",label:p?"chk_battery":"chk_battery_sensor",target:i(c[0])}:{state:"opt",label:"chk_battery_opt",target:{kind:"add-device",type:"home_battery"}},u.length>0?{state:"ok",label:"chk_grid",target:i(u[0])}:{state:"opt",label:"chk_grid_opt",target:{kind:"add-device",type:"grid_point"}}]}function yr(t,e){let n=[];for(let r of t.floors)for(let o of r.furniture)o.type===e&&n.push({id:o.id,floorId:r.id,x:o.x,z:o.z,y:Math.max(.4,Math.min(1.4,o.h*.8))});return n}function Ng(t){if(!t?.rooms.length)return null;let e=0,n=0,r=0;for(let o of t.rooms)for(let[i,s]of o.points)e+=i,n+=s,r++;return r?{floorId:t.id,x:e/r,z:n/r,y:1}:null}function Kg(t){let e=bn(t);return yr(t,"meter").find(n=>!e.has(n.id))??yr(t,"inverter")[0]??Ng(ro(t))}function Gg(t,e){let n=yr(t,"grid_point")[0];if(n)return n;let r=t.floors.find(a=>a.id===e.floorId);if(!r?.rooms.length)return null;let o=1/0,i=-1/0,s=-1/0;for(let a of r.rooms)for(let[l,c]of a.points)o=Math.min(o,l),i=Math.max(i,l),s=Math.max(s,c);return{floorId:e.floorId,x:Math.max(o,Math.min(i,e.x)),z:s+3,y:.2}}function Eu(t){let e=[],n=Kg(t);if(!n)return e;let r=new Set(t.floors.flatMap(i=>i.furniture).filter(i=>br(t,i)).map(i=>i.id)),o=yr(t,"inverter").find(i=>!r.has(i.id));for(let i of t.settings.roof.solar??[])e.push({key:`solar:${i.id}`,kind:"solar",id:i.id});yr(t,"home_battery").some(i=>!r.has(i.id))&&e.push({key:"battery",kind:"battery",id:null}),o&&(o.floorId!==n.floorId||o.x!==n.x||o.z!==n.z)&&e.push({key:"inverter",kind:"inverter",id:null}),Gg(t,n)&&e.push({key:"grid",kind:"grid",id:null});for(let i of t.floors.flatMap(s=>s.furniture))r.has(i.id)&&(i.type==="inverter"?e.push({key:`inverter:${i.id}`,kind:"inverter",id:i.id}):i.type==="home_battery"&&e.push({key:`battery:${i.id}`,kind:"battery",id:i.id}));for(let i of bn(t))e.push({key:`meter:${i}`,kind:"meter",id:i});return e}var Ru=(t,e)=>t.energy.routes?.find(n=>n.key===e&&n.points.length>0);var Ug={ok:"\u2713",todo:"\u25CB",opt:"\xB7"},Fu=t=>t.hass?Ft(t.hass,t.doc.floors):new Map,jg=Ee,zu=(t,e)=>e.name||t.t(`furn_${e.type}`);function Pu(t,e){let n=Mu(t.doc,Fu(t)),r=n.filter(o=>o.state==="ok").length;return m`<section class="nf-checklist">
    <h3>☑ ${t.t("chk_title")} <span class="nf-sub">${r}/${n.length}</span></h3>
    ${M(t.t("chk_hint"))}
    ${n.map(o=>m`<button class="nf-chk nf-chk-${o.state}" ?disabled=${!t.admin&&o.state!=="ok"} @click=${()=>e.follow(o.target)}>
        <span>${Ug[o.state]}</span>${t.t(o.label)}
      </button>`)}
  </section>`}function Tu(t,e){let n=t.doc.floors.flatMap(r=>r.furniture.filter(o=>jg.includes(o.type)).map(o=>({floor:r,item:o})));return m`<section>
    <h3>⚡ ${t.t("energy_devices")}</h3>
    ${M(t.t("energy_devices_hint"))}
    ${n.length>0?m`<div class="nf-room-list">
          ${n.map(({floor:r,item:o})=>m`<div class="nf-row">
              <button class="nf-dev-name" @click=${()=>e.openDevice(r,o)}><span>${zu(t,o)} · ${r.name}</span></button>
            </div>`)}
        </div>`:g}
    <div class="nf-actions">
      ${Ee.map(r=>m`<button class="nf-btn" ?disabled=${!t.admin||!t.floor} @click=${()=>e.addDevice(r)}>+ ${t.t(`furn_${r}`)}</button>`)}
    </div>
  </section>`}var Au=(t,e,n)=>m`<p class="nf-sub nf-pack-error">${t.t(e)} <button class="nf-btn" ?disabled=${!t.admin} @click=${n}>${t.t("energy_sign_flip")}</button></p>`;function Ou(t,e){let{energy:n}=t.doc,r=(b,v)=>t.hass?.states[b]?.attributes[v],o=D(t.hass,b=>pn(t.hass,b)),i=D(t.hass,b=>ce(b)&&r(b,"device_class")==="battery"),s=D(t.hass,b=>ce(b)&&(r(b,"device_class")==="monetary"||/\/(kWh|MWh)$/.test(r(b,"unit_of_measurement")??""))),a=Fu(t),l=ko(t.doc,b=>po(b,a)),c=b=>t.replace({...structuredClone(t.doc),energy:{...t.doc.energy,...b}}),u=D(t.hass,b=>ce(b)&&["gas","water","volume_flow_rate"].includes(r(b,"device_class")??"")),h=b=>v=>c({[b]:v==="none"?null:v}),d=t.hass?_s(t.hass,t.doc,[],l):null,p=!!d&&(d.solar??0)<20,f=p&&d.grid!==null&&d.grid<-50,_=p&&d.battery!==null&&d.battery<-50&&(d.grid??0)<=0,y=(b,v)=>O(t,t.t("energy_invert"),b,w=>c(v(w)));return m`<section>
    <h3>⚖ ${t.t("energy_balance")}</h3>
    ${M(t.t("energy_balance_hint"))}
    ${f?Au(t,"energy_sign_grid",()=>c({grid_invert:!n.grid_invert})):g}
    ${_?Au(t,"energy_sign_battery",()=>c({battery_invert:!n.battery_invert})):g}
    <div class="nf-form">
      ${z(t,t.t("energy_grid"),n.grid,l.grid,o,h("grid"))}
      ${y(n.grid_invert,b=>({grid_invert:b}))}
      ${z(t,t.t("energy_solar_sensor"),n.solar,l.solar[0]??null,o,h("solar"))}
      ${z(t,t.t("energy_battery_sensor"),n.battery,l.battery[0]??null,o,h("battery"))}
      ${y(n.battery_invert,b=>({battery_invert:b}))}
      ${z(t,t.t("energy_battery_soc"),n.battery_soc,l.soc[0]??null,i,h("battery_soc"))}
      ${z(t,t.t("energy_consumption_sensor"),n.consumption,null,o,h("consumption"))}
      ${z(t,t.t("energy_tariff_sensor"),n.tariff,void 0,s,h("tariff"))}
      ${z(t,t.t("energy_gas"),n.gas??null,void 0,u,h("gas"))}
      ${z(t,t.t("energy_water"),n.water??null,void 0,u,h("water"))}
      ${M(t.t("energy_meters_hint"),"nf-wide")}
    </div>
    <div class="nf-actions"><button class="nf-btn" ?disabled=${!t.admin||!t.hass} @click=${()=>e.importPrefs()}>${t.t("energy_import_prefs")}</button></div>
    ${e.note?M(e.note):g} ${M(t.t("energy_hint"))}
  </section>
  <section>
    <h3>⚙ ${t.t("energy_advanced")}</h3>
    ${M(t.t("energy_advanced_hint"))}
    <div class="nf-form">
      ${O(t,t.t("energy_advanced_on"),!!n.advanced,b=>c({advanced:b}))}
      ${n.advanced?O(t,t.t("energy_show_unmetered"),!!n.show_unmetered,b=>c({show_unmetered:b})):g}
    </div>
    ${n.advanced?M(t.t("energy_show_unmetered_hint")):g}
  </section>`}var Du=t=>m`<section class="nf-teaser nf-teaser-on">
  <div class="nf-teaser-head"><b>⚡ ${t.t("feature_name_energy")}</b></div>
  ${M(t.t("feature_text_energy"))}
</section>`;function Iu(t){let e=(n,r,o)=>m`<a class="nf-btn" href="https://github.com/therealMRBK/NextFloor/${n}" target="_blank" rel="noopener">${r} ${t.t(o)}</a>`;return m`<section class="nf-help">
    <h3>${t.t("help_title")}</h3>
    ${M(t.t("help_hint"))}
    <div class="nf-actions">${e("issues/new/choose","\u{1F41E}","help_issue")}${e("discussions/categories/ideas","\u{1F4A1}","help_idea")}</div>
  </section>`}function Zg(t,e){let n=t.t,r=t.doc.floors.flatMap(i=>i.furniture).find(i=>i.id===e.id),o=r?zu(t,r):"";switch(e.kind){case"solar":{let i=t.doc.settings.roof.solar??[],s=i.findIndex(a=>a.id===e.id);return n("route_conn_solar",{name:i[s]?.name||`${n("solar_field")} ${s+1}`})}case"battery":return e.id?n("route_conn_device",{name:o}):n("route_conn_battery");case"inverter":return e.id?n("route_conn_device",{name:o}):n("route_conn_inverter");case"grid":return n("route_conn_grid");case"meter":return n("route_conn_meter",{name:o})}}function Hu(t,e){let n=Eu(t.doc);if(!n.length)return g;let r=t.t,o=e.draft;return m`<section>
    <h3>〰 ${r("energy_routes")}</h3>
    ${M(r("energy_routes_hint"))}
    <div class="nf-room-list">
      ${n.map(i=>{let s=Ru(t.doc,i.key),a=o?.key===i.key;return m`<div class="nf-row nf-route-row">
          <span class="nf-dev-name"><span>${Zg(t,i)} · ${s?r("route_points",{n:s.points.length}):r("route_none")}</span></span>
          ${a?m`<p class="nf-sub nf-wide">${r("route_drawing",{n:o.points.length})}</p>
                <div class="nf-actions nf-wide">
                  <button class="nf-btn" ?disabled=${!o.points.length} @click=${()=>e.undoPoint()}>↶ ${r("route_undo")}</button>
                  <button class="nf-btn nf-primary" @click=${()=>e.finish()}>${r("route_done")}</button>
                  <button class="nf-btn" @click=${()=>e.cancel()}>${r("cancel")}</button>
                </div>`:m`<div class="nf-actions">
                <button class="nf-btn" ?disabled=${!t.admin||!!o} @click=${()=>e.start(i.key)}>✎ ${r(s?"route_redraw":"route_draw")}</button>
                ${s?m`<button class="nf-btn" ?disabled=${!t.admin||!!o} @click=${()=>e.clear(i.key)}>⨉</button>`:g}
              </div>
              ${s?O(t,r("route_cable"),!!s.cable,l=>e.setCable(i.key,l),{title:r("route_cable_hint")}):g}`}
        </div>`})}
    </div>
  </section>`}var Xe=(t,e)=>e.map(n=>t.toScreen(n).join(",")).join(" ");function xo(t,e,n,r,o,i){let[[s,a],[l,c]]=[t.toScreen(e),t.toScreen(n)];if(Math.hypot(l-s,c-a)<=36)return g;let[u,h]=[(s+l)/2,(a+c)/2];return S`<g data-plus=${`${r}:${o}:${i}`} class="nf-mid"><circle cx=${u} cy=${h} r="14" class="nf-hit" /><circle cx=${u} cy=${h} r="6" /><path d="M${u-3} ${h}h6M${u} ${h-3}v6" /></g>`}var Lu=(t,e)=>S`<circle cx=${t} cy=${e} r="16" class="nf-hit" /><circle cx=${t} cy=${e} r="6" />`,qg=(t,e,n)=>S`<g class="nf-vertex" data-roof-vertex=${n}>${Lu(...t.toScreen(e))}</g>`,Yg=(t,e,n)=>S`<g class="nf-vertex" data-roof-corner=${n}>${Lu(...t.toScreen(e))}</g>`;function Xg(t,e,n,r){let{t:o,hass:i}=t.host,s=n.dormer?o("roof_dormer"):n.open?o("roof_open_short"):o(`roof_shape_${n.shape}`);return`${e.isFixed(n)?"\u{1F512} ":""}${r+1} \xB7 ${s} \xB7 ${G(i,zt(n),1)} m`}function bs(t,e){let n=t.host.doc.settings.roof,r=n.type==="custom"?n.sections??[]:[],o=t.host.admin,i=(s,a)=>{let l=s.id===e.sectionId,c=fe(s),u=(s.shape==="flat"||s.shape==="parapet")&&s.points&&s.points.length>=3?s.points:null,h=no(r,s),d=h?fe(Ui(h,s)):c,p=u??[d.at(d.u0,0),d.at(d.u1,0),d.at(d.u1,d.w),d.at(d.u0,d.w)],_=((s.shape==="flat"||s.shape==="parapet"?null:Pt(s,{u0:0,u1:0,a:0,b:0}))?.ridges??[]).map(([B,Q])=>{let[ve,et]=t.toScreen(c.at(B[0],B[1])),[Tn,N]=t.toScreen(c.at(Q[0],Q[1]));return S`<line x1=${ve} y1=${et} x2=${Tn} y2=${N} />`}),[y,b]=t.toScreen(c.at((c.u0+c.u1)/2,c.w/2)),v=l&&o&&!e.isFixed(s),w=[[0,0],[1,0],[1,1],[0,1]],k=s.shape==="flat"||s.shape==="parapet",[x,E,A,F]=[Math.min(s.x0,s.x1),Math.max(s.x0,s.x1),Math.min(s.z0,s.z1),Math.max(s.z0,s.z1)],P=u??(s.rotation?qn(s):[[x,A],[E,A],[E,F],[x,F]]),I=v&&k?P.map((B,Q)=>xo(t,B,P[(Q+1)%P.length],"roof",s.id,Q)):g,H=v?S`${I}${u?u.map((B,Q)=>qg(t,B,`${s.id}:${Q}`)):w.map(([B,Q])=>Yg(t,[B?E:x,Q?F:A],`${s.id}:${B}:${Q}`))}`:g;return S`<g data-roof=${s.id} class=${`nf-roof-sec${l?" nf-roof-sel":""}`}>
        <polygon points=${Xe(t,p)} />
        <g class="nf-roof-ridge">${_}</g>
        <text x=${y} y=${b-14}>${Xg(t,e,s,a)}</text>
      </g>${H}`};return S`<g class="nf-roof-layer">${r.map(i)}</g>`}function Qg(t,e,n,r,o){let i=r*Math.PI/180,[s,a]=t.toScreen(n),[l,c]=t.toScreen([n[0]+Math.sin(i)*o,n[1]-Math.cos(i)*o]);return S`<g class="nf-rotate" data-solar-turn=${e}>
    <line x1=${s} y1=${a} x2=${l} y2=${c} />
    <circle cx=${l} cy=${c} r="16" class="nf-hit" />
    <circle cx=${l} cy=${c} r="8" />
    <path d="M${l-4} ${c-1}a4 4 0 1 1 2 3.5" />
  </g>`}function Cu(t,e){let{doc:n,admin:r}=t.host,o=n.settings.roof.solar??[];if(o.length===0)return g;let i=X(n),s=a=>{let l=me(n,a,i);if(!l||l.wall&&l.wall.floorId!==t.floorId)return g;let c=a.id===e.solarId,u=g;if(c&&l.unbounded&&r&&!a.locked){let p=rr(l,a),f=Math.max(...Te(l,a,!0).flatMap(_=>_.corners.map(y=>Math.hypot(y[0]-p[0],y[2]-p[1]))));u=Qg(t,a.id,p,a.rotation??0,.9+f*.5)}let h=p=>{let f;if(l.wall){let _=Math.max(.3,...p.corners.map(w=>(w[0]-l.o[0])*l.n[0]+(w[2]-l.o[2])*l.n[2])),[y,b]=[p.corners[0],p.corners[1]],v=w=>[w[0]+l.n[0]*_,w[2]+l.n[2]*_];f=[[y[0],y[2]],v(y),v(b),[b[0],b[2]]]}else f=p.corners.map(_=>[_[0],_[2]]);return S`<polygon data-cell=${p.cell} class=${p.skipped?"nf-solar-off":""} points=${Xe(t,f)} />`},d=`nf-solar${c?" nf-solar-sel":""}${c&&e.picking?" nf-solar-pick":""}`;return S`<g data-solar=${a.id} class=${d}>${Te(l,a,c).map(h)}</g>${u}`};return S`<g class="nf-solar-layer">${o.map(s)}</g>`}function Wu(t,e){let n=t.host.doc.settings.roof.windows??[];if(n.length===0)return g;let r=new Map(X(t.host.doc).map(i=>[i.key,i])),o=i=>{let s=r.get(i.face),a=s?ns(s,i):null;return a?S`<g data-roofwin=${i.id} class=${`nf-roofwin${i.id===e.windowId?" nf-roofwin-sel":""}`}><polygon points=${Xe(t,a.map(l=>[l[0],l[2]]))} /></g>`:g};return S`<g class="nf-roofwin-layer">${n.map(o)}</g>`}var Jg={inverter:"\u26A1",home_battery:"\u{1F50B}",wallbox:"\u{1F50C}",meter:"\u{1F4DF}",grid_point:"\u{1F3C1}"};function Bu(t,e,n){if(!e)return g;let r=e.furniture.filter(i=>Ee.includes(i.type)),o=i=>{let[s,a]=t.toScreen([i.x,i.z]),l=i.id===n,c=t.host.t(`furn_${i.type}`);return S`<g data-energy-device=${i.id} class=${`nf-energy-marker${l?" nf-energy-marker-sel":""}`}>
      <circle cx=${s} cy=${a} r="17" />
      <text x=${s} y=${a+6} class="nf-energy-icon">${Jg[i.type]??"\u26A1"}</text>
      ${l?S`<text x=${s} y=${a+32} class="nf-energy-name">${c}</text>`:g}
      <title>${c}</title>
    </g>`};return S`<g class="nf-energy-markers">${r.map(o)}</g>`}function Vu(t,e){let{doc:n,hass:r}=t.host;if(!(n.settings.roof.sections??[]).some(s=>Zi(s,e.elevation+e.height)))return g;let i=[1.5,2].flatMap(s=>Yi({settings:n.settings},e.elevation,s).map(([a,l])=>{let[c,u]=t.toScreen(a),[h,d]=t.toScreen(l);return S`<line class="nf-headroom" x1=${c} y1=${u} x2=${h} y2=${d} />
        <text class="nf-headroom-label" x=${(c+h)/2} y=${(u+d)/2-4}>${G(r,s,1)} m</text>`}));return S`${i}`}function Nu(t,e,n,r){if(!e)return g;let o=(i,s)=>{let a=[];return i.forEach((l,c)=>{if(l.floor_id!==e.id)return;let[u,h]=t.toScreen([l.x,l.z]),d=i[c+1];if(d?.floor_id===e.id){let[f,_]=t.toScreen([d.x,d.z]);a.push(S`<line x1=${u} y1=${h} x2=${f} y2=${_} />`)}let p=d&&d.floor_id!==e.id||c>0&&i[c-1].floor_id!==e.id;a.push(S`<circle cx=${u} cy=${h} r=${p?7:4} class=${p?"nf-route-riser":""} />`),s&&a.push(S`<text x=${u+8} y=${h-8}>${c+1}</text>`)}),S`<g class=${`nf-route${s?" nf-route-drawing":""}`}>${a}</g>`};return S`<g class="nf-routes">${n.filter(i=>i.key!==r?.key).map(i=>o(i.points,!1))}${r?o(r.points,!0):g}</g>`}function e_(t,e,n){let[r,o]=[t+n/2,e-30];return S`<g class="nf-rotate" data-bg-rotate="1">
    <line x1=${r} y1=${e} x2=${r} y2=${o} />
    <circle cx=${r} cy=${o} r="16" class="nf-hit" />
    <circle cx=${r} cy=${o} r="8" />
    <path d="M${r-4} ${o-1}a4 4 0 1 1 2 3.5" />
  </g>`}function t_(t,e){let n=e.level?.length?e.level:e.ruler;if(!n?.length)return g;let r=n.map(o=>t.toScreen(o));return S`<g class="nf-bg-ruler">
    ${r.length===2?S`<line x1=${r[0][0]} y1=${r[0][1]} x2=${r[1][0]} y2=${r[1][1]} />`:g}
    ${r.map(([o,i])=>S`<circle cx=${o} cy=${i} r="6" />`)}
  </g>`}function Ku(t,e,n){let r=n?.background,o=e.picture(r?.image_id);if(!r||!o)return g;let[i,s]=t.toScreen([r.x,r.z]),a=r.width*t.scale,l=a*o.aspect,c=e.handlesShown;return S`<g transform="rotate(${r.rotation??0} ${i+a/2} ${s+l/2})">
    <image href=${o.url} x=${i} y=${s} width=${a} height=${l} opacity=${r.opacity} preserveAspectRatio="none" pointer-events=${c?"auto":"none"} data-bg="1" style=${c?"cursor:move":""} />
    ${c?S`<rect class="nf-bg-frame" x=${i} y=${s} width=${a} height=${l} />
        <circle class="nf-bg-handle" data-bg-handle="1" cx=${i+a} cy=${s+l} r="9" />
        ${e_(i,s,a)}`:g}
  </g>${t_(t,e)}`}var n_="strict-origin-when-cross-origin",ys=new Map,Gu=new Map,$o=new Map;function r_(t){let e=ys.get(t);return e||(e=fetch(t,{referrerPolicy:n_,mode:"cors",credentials:"omit"}).then(async n=>n.ok&&(n.headers.get("content-type")??"").startsWith("image/")?await n.blob():null).catch(()=>null).then(n=>(n||setTimeout(()=>ys.delete(t),6e4),n)),ys.set(t,e)),e}function Uu(t,e){let n=Gu.get(t);if(n)return n;let r=$o.get(t);return r||(r=new Set,$o.set(t,r),r_(t).then(o=>{o&&Gu.set(t,URL.createObjectURL(o));let i=$o.get(t)??new Set;if($o.delete(t),o)for(let s of i)s()})),r.add(e),null}function ju(t,e){let n=e.map;if(!yo(n))return g;let r=gu(n),o=mu(n),[i,s]=t.toScreen([r.x,r.z]),a=t.scale;return S`<g class="nf-map" opacity=${r.opacity} pointer-events="none" transform="translate(${i} ${s}) rotate(${e.north??0})">
    ${pu(n.lat,n.lon,r.zoom).map(l=>({tile:l,href:Uu(fu(o,l),t.redraw)})).filter(l=>l.href).map(({tile:l,href:c})=>S`<image href=${c} x=${l.east*a} y=${-l.north*a} width=${l.size*a+.6} height=${l.size*a+.6} preserveAspectRatio="none" />`)}
  </g>`}var ws=t=>Math.round(t*1e3)/1e3,vs=(t,e)=>t.width*e,yn=(t,e)=>[t.x+t.width/2,t.z+vs(t,e)/2];function Zu(t,e,n){let[r,o]=[t[0]-e[0],t[1]-e[1]];return[e[0]+r*Math.cos(n)-o*Math.sin(n),e[1]+r*Math.sin(n)+o*Math.cos(n)]}var qu=t=>((t+180)%360+360)%360-180;function Yu(t,e,n){return{x:ws(t[0]-e/2),z:ws(t[1]-n/2)}}function Xu(t,e,n,r){if(Math.hypot(r[0]-n[0],r[1]-n[1])<.05)return null;let o=Math.atan2(r[1]-n[1],r[0]-n[0]),i=Math.round(o/(Math.PI/2))*(Math.PI/2)-o;if(Math.abs(i)<1e-4)return null;let s=Zu(yn(t,e),n,i),a=Math.round(qu((t.rotation??0)+i*180/Math.PI)*100)/100;return{...t,rotation:a,...Yu(s,t.width,vs(t,e))}}function Qu(t,e,n,r,o){let i=Math.hypot(r[0]-n[0],r[1]-n[1]);if(!(o>0)||i<1e-4)return null;let s=o/i,[a,l]=yn(t,e),c=[n[0]+s*(a-n[0]),n[1]+s*(l-n[1])],u=t.width*s;return{...t,width:ws(u),...Yu(c,u,vs(t,e)*s)}}function Ju(t,e,n){let r=Zu(n,yn(t,e),-(t.rotation??0)*Math.PI/180);return[r[0]-t.x,r[1]-t.z]}function ed(t,e,n,r){let o=t+(n-e)*180/Math.PI;return qu(r?Math.round(o/15)*15:Math.round(o*10)/10)}var o_=2048;async function Mo(t){let e=await createImageBitmap(t),n=Math.min(1,o_/Math.max(e.width,e.height)),r=document.createElement("canvas");return r.width=Math.round(e.width*n),r.height=Math.round(e.height*n),r.getContext("2d").drawImage(e,0,0,r.width,r.height),{data:r.toDataURL("image/jpeg",.85),aspect:r.height/r.width}}var So=class{deps;editMode=!1;levelPoints=null;rulerPoints=null;rulerMetres=0;sectionOpen=!1;pictures={};loading=new Set;constructor(e){this.deps=e}get edit(){return this.editMode}set edit(e){this.editMode=e,this.deps.refresh()}get level(){return this.levelPoints}set level(e){this.levelPoints=e,this.deps.refresh()}get ruler(){return this.rulerPoints}set ruler(e){this.rulerPoints=e,this.deps.refresh()}get rulerLength(){return this.rulerMetres}set rulerLength(e){this.rulerMetres=e,this.deps.refresh()}get open(){return this.sectionOpen}set open(e){this.sectionOpen=e,this.deps.refresh()}get handlesShown(){let{host:e}=this.deps;return!!e.floor?.background&&e.admin&&this.deps.currentTool()==="select"&&this.editMode}picture(e){return e?this.pictures[e]:void 0}ensureLoaded(e){!this.pictures[e]&&!this.loading.has(e)&&this.load(e)}async load(e){let{host:n,api:r}=this.deps;if(n.hass){this.loading.add(e);try{let o=await r.fetchImage(n.hass,e),i=await this.aspectOf(o);this.pictures={...this.pictures,[e]:{url:o,aspect:i}},this.deps.refresh()}catch{}}}async aspectOf(e){let n=new Image;return n.src=e,await n.decode(),n.naturalHeight/n.naturalWidth}async upload(e){let{host:n,api:r}=this.deps;if(!e||!n.hass)return;let{data:o,aspect:i}=await this.deps.readPicture(e),s=L("img");await r.storeImage(n.hass,s,o),this.pictures={...this.pictures,[s]:{url:o,aspect:i}};let a=n.floor?.rooms??[],l=a.length>0?se(a.flatMap(u=>u.points)):null,c={image_id:s,x:l?l.x0:0,z:l?l.z0:0,width:l?Math.max(4,Math.round((l.x1-l.x0)*1e3)/1e3):12,opacity:.5};this.setBackground(c)}setBackground(e){this.deps.host.change((n,r)=>Object.assign(r,{background:e}))}toggleLevel(){this.levelPoints=this.levelPoints?null:[],this.rulerPoints=null,this.editMode=!1,this.deps.refresh()}toggleRuler(){this.rulerPoints=this.rulerPoints?null:[],this.levelPoints=null,this.editMode=!1,this.deps.refresh()}toggleEdit(){this.edit=!this.editMode,this.editMode&&this.deps.useSelectTool()}tapLevel(e){let n=[...this.levelPoints??[],e];if(n.length<2){this.level=n;return}this.level=null,this.straighten(n[0],n[1])}tapRuler(e){this.rulerPoints&&this.rulerPoints.length<2&&(this.ruler=[...this.rulerPoints,e])}straighten(e,n){let r=this.deps.host.floor?.background,o=this.picture(r?.image_id),i=r&&o?Xu(r,o.aspect,e,n):null;i&&this.setBackground(i)}applyRuler(){let e=this.deps.host.floor?.background,n=this.picture(e?.image_id),r=this.rulerPoints;if(!e||!n||!r||r.length<2)return;let o=Qu(e,n.aspect,r[0],r[1],this.rulerMetres);o&&(this.setBackground(o),this.rulerPoints=null,this.rulerMetres=0,this.deps.refresh())}};var td=.1,ks=(t,e,n)=>m`<button class="nf-btn nf-wide ${t?"nf-primary":""}" aria-pressed=${t} @click=${n}>${e}</button>`;function i_(t,e){let n=e.ruler;if(!n)return g;if(n.length<2)return M(t.t(n.length>0?"bg_ruler_second":"bg_ruler_first"),"nf-wide");let r=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1]),o=()=>e.applyRuler();return m`${M(t.t("bg_ruler_length_hint",{m:G(t.hass,r,2)}),"nf-wide")}
    <label class="nf-field"
      >${t.t("bg_ruler_length")}
      <input
        type="number"
        min="0.01"
        step="0.01"
        .value=${e.rulerLength?String(e.rulerLength):""}
        @input=${i=>e.rulerLength=us(i.target.value)||0}
        @keydown=${i=>i.key==="Enter"&&o()}
      />
    </label>
    <button class="nf-btn nf-primary" ?disabled=${!(e.rulerLength>0)} @click=${o}>${t.t("bg_ruler_apply")}</button>`}function s_(t,e){if(!t.admin)return g;let n=t.t,r=e.level;return m`${ks(e.edit,n(e.edit?"background_edit_done":"background_edit"),()=>e.toggleEdit())}
    ${M(n(e.edit?"background_handles_hint":"background_fixed_hint"),"nf-wide")}
    ${ks(!!r,`\u{1F4D0} ${n(r?"bg_level_cancel":"bg_level")}`,()=>e.toggleLevel())}
    ${r?M(n(r.length>0?"bg_level_second":"bg_level_first"),"nf-wide"):g}
    ${ks(!!e.ruler,`\u{1F4CF} ${n(e.ruler?"bg_ruler_cancel":"bg_ruler")}`,()=>e.toggleRuler())}
    ${i_(t,e)}`}function nd(t,e,n){let r=n.background,o=t.t,i=s=>r&&e.setBackground({...r,...s});return m`<details class="nf-section" ?open=${e.open} @toggle=${s=>e.open=s.target.open}>
    <summary>${o("background")}</summary>
    <div class="nf-form">
      <label class="nf-btn nf-wide nf-upload"
        >${o("background_upload")}<input
          type="file"
          accept="image/png,image/jpeg,image/webp"
          @change=${s=>{let a=s.target,l=a.files?.[0];a.value="",e.upload(l)}}
        />
      </label>
      ${r?m`${R(t,o("x"),r.x,s=>i({x:s}))} ${R(t,o("z"),r.z,s=>i({z:s}))}
          ${R(t,o("background_width"),r.width,s=>i({width:Math.max(td,s)}),.01,td)}
          ${R(t,o("background_rotation"),r.rotation??0,s=>i({rotation:Math.round(s*10)/10}),.5)}
          ${s_(t,e)}
          <label class="nf-field"
            >${o("background_opacity")}
            <input type="range" min="0.05" max="1" step="0.05" .value=${String(ue(r.opacity))} @change=${s=>i({opacity:Number.parseFloat(s.target.value)})} />
          </label>
          <button class="nf-btn nf-danger nf-wide" @click=${()=>e.setBackground(null)}>${o("background_remove")}</button>`:g}
    </div>
  </details>`}var a_=t=>t.map((e,n)=>[e,t[(n+1)%t.length]]);function l_(t,e,n){let r=W(n,e),o=Y(r,r),i=o?Math.max(0,Math.min(1,Y(W(t,e),r)/o)):0;return de(W(t,[e[0]+r[0]*i,e[1]+r[1]*i]))}function rd(t,e,n=.03){return t.every(r=>C(r,e)||a_(e).some(([o,i])=>l_(r,o,i)<=n))}var xs=["straight","quarter","l","half","u","spiral"],$s=["solid","stringer","mono","cantilever"],Ss=["none","left","right","both"],Ms=["headroom","full","none"],Qe={shape:"straight",turn:"right",build:"solid",risers:!0,steps:null,run_width:null,down:!1,rail:"none",opening:"headroom"},Es={straight:[1,3.2],quarter:[2.2,2.6],l:[2.2,2.8],half:[2,2.6],u:[2.2,2.6],spiral:[1.6,1.6]},ld=2,cd=40;var Eo=(t,e)=>typeof e=="string"&&t.includes(e);function xr(t){let e=t.stair??{},n=typeof e.steps=="number"&&Number.isFinite(e.steps)?Math.round(Math.min(cd,Math.max(ld,e.steps))):null,r=typeof e.run_width=="number"&&Number.isFinite(e.run_width)&&e.run_width>.2?e.run_width:null;return{shape:Eo(xs,e.shape)?e.shape:Qe.shape,turn:e.turn==="left"?"left":"right",build:Eo($s,e.build)?e.build:Qe.build,risers:e.risers!==!1,steps:n,run_width:r,down:e.down===!0,rail:Eo(Ss,e.rail)?e.rail:Qe.rail,opening:Eo(Ms,e.opening)?e.opening:Qe.opening}}var vr=(t,e,n)=>[t[0]+(e[0]-t[0])*n,t[1]+(e[1]-t[1])*n],od=(t,e)=>Math.abs(t[0]-e[0])<1e-6&&Math.abs(t[1]-e[1])<1e-6;function ud(t){let e=[];for(let n of t)(!e.length||!od(e[e.length-1],n))&&e.push(n);for(;e.length>1&&od(e[0],e[e.length-1]);)e.pop();return e}function kr(t,e,n=!1){return{poly:ud([...t,...[...e].reverse()]),landing:n,left:t,right:e}}function wr(t,e,n,r,o){let i=[];for(let s=0;s<o;s++){let[a,l]=[s/o,(s+1)/o];i.push(kr([vr(t,n,a),vr(t,n,l)],[vr(e,r,a),vr(e,r,l)]))}return i}function id(t,e){let n=e;for(let r=0;r+1<t.length;r++){let o=Math.hypot(t[r+1][0]-t[r][0],t[r+1][1]-t[r][1]);if(n<=o||r+2===t.length)return vr(t[r],t[r+1],o?Math.min(1,n/o):0);n-=o}return t[t.length-1]}function c_(t,e,n){let r=[id(t,e)],o=0;for(let i=0;i+1<t.length;i++)o+=Math.hypot(t[i+1][0]-t[i][0],t[i+1][1]-t[i][1]),o>e+1e-6&&o<n-1e-6&&r.push(t[i+1]);return r.push(id(t,n)),r}var u_=t=>t.reduce((e,n,r)=>r?e+Math.hypot(n[0]-t[r-1][0],n[1]-t[r-1][1]):e,0);function sd(t,e,n,r,o){let i=u_(t),s=[];for(let a=0;a<o;a++){let l=ud([...a===0?[e]:[],n,...a===o-1?[r]:[]]);s.push(kr(c_(t,i*a/o,i*(a+1)/o),l.length?l:[n]))}return s}function ad(t,e,n){if(t<=0)return[0,0];if(e<=.001)return[0,t];if(n<=.001)return[t,0];let r=Math.min(t,Math.max(0,Math.round(t*e/(e+n))));return[r,t-r]}function d_(t,e,n,r){let[o,i,s,a]=[-e/2,e/2,-n/2,n/2];switch(t.shape){case"quarter":case"l":{let l=Math.min(t.run_width??Math.min(1,Math.min(e,n)/2),Math.min(e,n)-.05),c=[o+l,s+l],u=[[o,s+l],[o,s],[o+l,s]],h=t.shape==="l"?1:Math.min(r,r>=8?3:2),[d,p]=ad(r-h,n-l,e-l),f=wr([o,a],[o+l,a],[o,s+l],c,d),_=t.shape==="l"?[kr(u,[c],!0)]:sd(u,c,c,c,h),y=wr([o+l,s],c,[i,s],[i,s+l],p);return{treads:[...f,..._,...y],flight:l,column:0}}case"half":case"u":{let l=Math.min(t.run_width??Math.min(1.1,(e-.1)/2),(e-.02)/2),c=s+l,u=[[o,c],[o,s],[i,s],[i,c]],[h,d]=[[o+l,c],[i-l,c]],p=t.shape==="u"?1:Math.min(r,r>=12?6:r>=8?4:2),[f,_]=ad(r-p,n-l,n-l),y=wr([o,a],[o+l,a],[o,c],h,f),b=t.shape==="u"?[kr(u,[h,d],!0)]:sd(u,h,[0,c],d,p),v=wr([i,c],d,[i,a],[i-l,a],_);return{treads:[...y,...b,...v],flight:l,column:0}}case"spiral":{let l=Math.min(e,n)/2,c=Math.min(.08,l*.12),u=Math.min(.75,Math.max(.3,.22/(l*.6))),h=(p,f)=>[Math.cos(f)*p,Math.sin(f)*p],d=[];for(let p=0;p<r;p++){let[f,_]=[Math.PI+u*p,Math.PI+u*(p+1)],y=[0,.5,1].map(b=>h(l,f+(_-f)*b));d.push(kr(y,[h(c,f),h(c,_)]))}return{treads:d,flight:l-c,column:c}}default:return{treads:wr([o,a],[i,a],[o,s],[i,s],r),flight:e,column:0}}}var h_=(t,e)=>t.steps??Math.min(cd,Math.max(ld,Math.round(Math.abs(e)/.18)));function wn(t,e,n,r){let o=h_(t,r),i=Math.abs(r)/o,s=d_(t,Math.max(.3,e),Math.max(.3,n),o),a=c=>[-c[0],c[1]];return{treads:s.treads.map((c,u)=>{let h=t.down?-i*(u+1):i*(u+1);return t.turn==="right"?{...c,top:h}:{poly:c.poly.map(a).reverse(),top:h,landing:c.landing,left:c.right.map(a),right:c.left.map(a)}}),rise:i,steps:o,column:s.column,flight:s.flight}}function Ro(t){let e=t.poly.reduce((n,r)=>[n[0]+r[0],n[1]+r[1]],[0,0]);return[e[0]/t.poly.length,e[1]/t.poly.length]}var Z=t=>Math.round(t*1e3)/1e3,p_=(t,e)=>((t+e)%360+360)%360;function dd(t,e){return{id:L("wall"),a:[Z(t[0]),Z(t[1])],b:[Z(e[0]),Z(e[1])],thickness:null}}function hd(t,e){let n=Math.hypot(t.b[0]-t.a[0],t.b[1]-t.a[1])||1,r=Math.max(.1,e)/n;return[Z(t.a[0]+(t.b[0]-t.a[0])*r),Z(t.a[1]+(t.b[1]-t.a[1])*r)]}var pd=(t,e)=>({height:t>=e-.005?null:Math.max(.05,t)});function fd(t,e){return{id:L("hole"),type:"stairwell",x:Z((t[0]+e[0])/2),z:Z((t[1]+e[1])/2),w:Z(e[0]-t[0]),d:Z(e[1]-t[1]),h:.02,rotation:0,variant:null}}var md=t=>({id:L("outdoor"),type:"lawn",points:t.map(([e,n])=>[Z(e),Z(n)])});function gd(t,e,n){t.points.splice(e+1,0,[Z(n[0]),Z(n[1])])}function _d(t,e){return t.points.length<=3||e<0||e>=t.points.length?!1:(t.points.splice(e,1),!0)}var bd=t=>({...t,id:L("outdoor"),points:t.points.map(([e,n])=>[Z(e+.5),Z(n+.5)])});function Rs(t,e,n,r){let[o,i,s]=Ge(t),a=e.floors.filter(u=>u.elevation>n.elevation).sort((u,h)=>u.elevation-h.elevation)[0],l=t==="stairs"?Z(a?a.elevation-n.elevation:n.height+.25):s,c={id:L("furniture"),type:t,x:Z(r[0]),z:Z(r[1]),rotation:0,w:o,d:i,h:l,variant:null};return t==="stairs"&&(c.stair={...Qe}),c}var yd=t=>({...structuredClone(t),id:L("furniture"),x:Z(t.x+.3),z:Z(t.z+.3)}),wd=(t,e)=>p_(t,e);function vd(t){let[e,n,r]=Ge("parking");return{id:L("furniture"),type:"parking",x:t.x,z:t.z,rotation:t.rotation,w:Math.max(e,Z(t.w+.5)),d:Math.max(n,Z(t.d+.4)),h:r,variant:null,vehicle:t.type,...t.name?{name:t.name}:{}}}function kd(t,e){let[n,r,o]=Ge(e);return{id:L("furniture"),type:e,x:t.x,z:t.z,rotation:t.rotation??0,w:n,d:r,h:o,variant:null,entity:t.entity_id,name:t.name??null,animations_enabled:t.animations_enabled,effect_animations:structuredClone(t.effect_animations),...t.locked?{locked:!0}:{}}}var xd=(t,e)=>({entity_id:e,x:t.x,z:t.z,y:null,rotation:t.rotation,animations_enabled:t.animations_enabled,effect_animations:structuredClone(t.effect_animations),...t.name?{name:t.name}:{}});function $d(t,e){for(let n of t.floors)n.placements=n.placements.filter(r=>r.entity_id!==e),n.furniture=n.furniture.filter(r=>!(le(r.type)&&r.entity===e))}function Sd(t,e,n,r){let o=new Set(r);for(let s of t.floors)s.placements=s.placements.filter(a=>!o.has(a.entity_id)),s.furniture=s.furniture.filter(a=>!(le(a.type)&&a.entity&&o.has(a.entity)));let i=[...e.placements.map(s=>[s.x,s.z]),...e.furniture.filter(s=>le(s.type)).map(s=>[s.x,s.z])];for(let s of oc(n,r,i)){if(!s.entity_id.startsWith("light.")){e.placements.push(s);continue}let[a,l,c]=Ce.lamp_ceiling;e.furniture.push({id:L("furniture"),type:"lamp_ceiling",x:s.x,z:s.z,rotation:0,w:a,d:l,h:c,variant:null,entity:s.entity_id,power:null})}}function Md(t){let[e,n]=ke(t.points);return[Z(e),Z(n)]}function Ed(t,e,n,r){let o=Math.min(n,t)/2,i=r>0?Math.round(e/r)*r:e;return Z(Math.min(t-o,Math.max(o,i)))}function Rd(t,e){let n=en[e],r=tn(t)===e?{}:{width:n.width};return{type:n.type,leaves:n.leaves,sill:n.sill,height:n.height,style:n.style??null,opens:n.opens??null,...r}}function Ad(t,e,n){let r=se(t.points),{x0:o,z0:i,x1:s,z1:a}=r;return e==="x"?[o,s]=[n,n+(s-o)]:e==="z"?[i,a]=[n,n+(a-i)]:e==="w"?s=o+Math.max(.1,n):a=i+Math.max(.1,n),[[o,i],[s,i],[s,a],[o,a]].map(([l,c])=>[Z(l),Z(c)])}function Ao(t,e,n){if(!t.admin)return g;let r=n.edit?.key===e;return m`<button class="nf-btn" aria-pressed=${r} title=${t.t("arc_hint")} @click=${()=>n.setEdit(r?null:{key:e,bulge:.5,error:null})}>
    ◠ ${t.t("arc")}
  </button>`}function Fo(t,e,n){let r=n.edit;if(!t.admin||r?.key!==e)return g;let o=t.t;return m`<span class="nf-wide nf-split-row" title=${o("arc_bulge_hint")}
      >${R(t,o("arc_bulge"),r.bulge,i=>n.setEdit({...r,bulge:i,error:null}),.05)}
      <button class="nf-btn nf-primary" ?disabled=${Math.abs(r.bulge)<.01} @click=${()=>n.apply(r)}>${o("arc_apply")}</button></span
    >
    ${r.error?m`<p class="nf-sub nf-wide nf-notice">${r.error}</p>`:g}`}var zo=(t,e,n)=>Math.min(e,Math.max(t,ue(n)));function As(t,e,n){let r=t.t,o=l=>n.update(l),i=se(e.points),s=_l.map(l=>[l,r(`out_${l}`)]),a=bl.map(l=>[l,r(`slope_${l.replace("-","n")}`)]);return m`<section>
    <div class="nf-h3row"><h3>${r("outdoor")}</h3>${n.lockButton}</div>
    <div class="nf-form">
      ${T(t,r("outdoor_type"),e.type,s,l=>o({type:l}),{wide:!0})}
      ${T(t,r("area"),e.area_id??"",[["",r("no_area")],...Object.values(t.hass?.areas??{}).sort((l,c)=>l.name.localeCompare(c.name)).map(l=>[l.area_id,l.name])],l=>o({area_id:l||null}),{wide:!0,title:r("outdoor_area_hint")})}
      ${e.type==="pool"||e.type==="wild"||e.type==="bed"?m`${z(t,r("pool_temp"),e.temp_entity??null,void 0,D(t.hass,l=>l.startsWith("sensor.")&&t.hass?.states[l]?.attributes.device_class==="temperature"),l=>o({temp_entity:l&&l!=="none"?l:null}))}
          ${z(t,r("pool_pump"),e.pump_entity??null,void 0,D(t.hass,l=>/^(switch|fan|valve|input_boolean|binary_sensor)\./.test(l)),l=>o({pump_entity:l&&l!=="none"?l:null}))}`:g}
      ${nn(e.points)?m`${R(t,r("x"),i.x0,l=>n.setRectangle("x",l))} ${R(t,r("z"),i.z0,l=>n.setRectangle("z",l))}
          ${R(t,r("width"),i.x1-i.x0,l=>n.setRectangle("w",l),.01,.1)} ${R(t,r("depth"),i.z1-i.z0,l=>n.setRectangle("d",l),.01,.1)}`:g}
      ${bi(e.type)?R(t,r("outdoor_height"),e.height??_i[e.type],l=>o({height:zo(.1,6,l)}),.05,.1):g}
      ${R(t,r("outdoor_offset"),e.offset??0,l=>o({offset:zo(-10,10,l)||null}),.05)}
      ${e.type!=="pool"?m`${R(t,r("outdoor_slope"),e.slope??0,l=>o({slope:zo(0,20,l)||null}),.05,0)}
          ${T(t,r("outdoor_slope_dir"),e.slope_dir??"x",a,l=>o({slope_dir:l}))}`:g}
      ${O(t,r("outdoor_outline"),e.outline!==!1,l=>o({outline:l?void 0:!1}),{title:r("outdoor_outline_hint")})}
      ${e.type==="fence"||e.type==="pergola"?O(t,r("outdoor_open"),!!e.open,l=>o({open:l||void 0}),{title:r("outdoor_open_hint")}):g}
      ${e.type==="pergola"?O(t,r("outdoor_bracing"),!!e.bracing,l=>o({bracing:l||void 0})):g}
      ${O(t,r("outdoor_cut"),vl(e),l=>o({cut:l===(e.type==="pool")?void 0:l}),{title:r("outdoor_cut_hint")})}
    </div>
    ${t.admin?m`<div class="nf-actions">
            ${e.points.map((l,c)=>m`<button class="nf-chip" title=${r("delete_point")} ?disabled=${e.points.length<=3} @click=${()=>n.removeCorner(c)}>${c+1} ×</button>`)}
          </div>
          ${M(r("outdoor_corners_hint"))}`:g}
    ${e.slope?M(r("outdoor_slope_hint")):g} ${M(r("outdoor_hint"))}
    ${t.admin?m`<div class="nf-actions"><button class="nf-btn" @click=${()=>n.duplicate()}>${r("duplicate")}</button><button class="nf-btn nf-danger" @click=${()=>n.remove()}>${r("delete")}</button></div>`:g}
  </section>`}var f_=[["up","\u2191"],["left","\u2190"],["right","\u2192"],["down","\u2193"]],m_={ArrowRight:"right",ArrowLeft:"left",ArrowUp:"up",ArrowDown:"down"};function Fd(t,e,n){let r=t.t,{draft:o}=e,i=h=>G(t.hass,h,2),[s,a]=[o[0],o[o.length-1]],l=s&&o.length>1?Math.hypot(a[0]-s[0],a[1]-s[1]):0,c=h=>{let d=m_[h.key];d?(h.preventDefault(),n.step(d)):h.key==="Enter"&&n.close()},u=s?m`${M(r("measure_from",{x:i(s[0]),z:i(s[1])}))}
        <div class="nf-form">
          <label class="nf-field nf-wide"
            >${r("measure_length")}
            <input class="nf-measure-input" type="number" inputmode="decimal" step="0.01" min="0.05" .value=${String(e.length)} @input=${h=>n.setLength(Number.parseFloat(h.target.value.replace(",","."))||0)} @keydown=${c} />
          </label>
          <div class="nf-arrows nf-wide">${f_.map(([h,d])=>m`<button class="nf-btn nf-arrow-${h}" title=${r(`dir_${h}`)} @click=${()=>n.step(h)}>${d}</button>`)}</div>
        </div>
        ${o.length>1?m`<ol class="nf-measure-list">${o.slice(1).map((h,d)=>m`<li>${i(Math.hypot(h[0]-o[d][0],h[1]-o[d][1]))} m</li>`)}</ol>`:g}
        <div class="nf-actions">
          <button class="nf-btn nf-primary" ?disabled=${o.length<3} @click=${()=>n.close()}>${r("measure_close")}</button>
          <button class="nf-btn" ?disabled=${o.length<2} @click=${()=>n.undo()}>${r("measure_undo")}</button>
        </div>
        ${o.length>=3?M(r("measure_gap",{gap:i(l)})):g}`:M(r("measure_start"));return m`<section>
    <h3>${r("measure")}</h3>
    ${u}
    <h4 class="nf-lib-head">${r("rect_by_size")}</h4>
    <div class="nf-form">
      ${R(t,r("width"),e.rectSize[0],h=>n.setRectSize([Math.max(.1,h),e.rectSize[1]]),.01,.1)}
      ${R(t,r("depth"),e.rectSize[1],h=>n.setRectSize([e.rectSize[0],Math.max(.1,h)]),.01,.1)}
      <button class="nf-btn nf-wide" @click=${()=>n.addRectangle()}>${r("rect_add")}</button>
    </div>
    ${M(r("measure_hint"))}
  </section>`}function Fs(t,e,n){let r=t.t,o=t.floor?.height??2.5,i=Math.hypot(e.b[0]-e.a[0],e.b[1]-e.a[1]);return m`<section>
    <div class="nf-h3row"><h3>${r("free_wall")}</h3>${n.lockButton}</div>
    <div class="nf-form">
      ${R(t,r("wall_length"),i,s=>n.update({b:hd(e,s)}),.01,.1)}
      ${R(t,r("wall_thickness"),e.thickness??t.doc.settings.wall_interior,s=>n.update({thickness:zo(.02,1,s)}),.01,.02)}
      ${R(t,r("wall_height"),e.height??o,s=>n.update(pd(s,o)),.05,.05)}
    </div>
    ${t.admin?m`<div class="nf-actions">${Ao(t,`wall:${e.id}`,n.arc)}<button class="nf-btn nf-danger" @click=${()=>n.remove()}>${r("delete")}</button></div>`:g}
    <div class="nf-form">${Fo(t,`wall:${e.id}`,n.arc)}</div>
    ${M(r("free_wall_hint"))}
  </section>`}var yt=t=>Math.round(t*1e3)/1e3,g_=2.4;function zd(t,e,n){let r=Xi(t,e[0],e[1],n[0],n[1]),o=r===null,i=Math.min(...t.floors.map(l=>l.elevation)),s=yt(r??i+g_),a=o?6:t.settings.roof.pitch||35;return{id:L("roof"),x0:yt(e[0]),z0:yt(e[1]),x1:yt(n[0]),z1:yt(n[1]),shape:o?"pent":"gable",axis:n[0]-e[0]>=n[1]-e[1]?"x":"z",eave_a:s,eave_b:s,pitch_a:a,pitch_b:a,base:s,overhang:o?.15:null,...o?{open:!0}:{}}}function Pd(t){let e=n=>yt(n+1);return{...structuredClone(t),id:L("roof"),x0:e(t.x0),x1:e(t.x1),z0:e(t.z0),z1:e(t.z1)}}var Td=(t,e)=>t.findIndex(n=>n.id===e)+1;function zs(t){return t.points&&t.points.length>=3?t.points.map(([e,n])=>[e,n]):t.rotation?qn(t):[[t.x0,t.z0],[t.x1,t.z0],[t.x1,t.z1],[t.x0,t.z1]]}function Od(t,e,n){let r=zs(t);r.splice(e+1,0,[yt(n[0]),yt(n[1])]),t.points=r,Object.assign(t,gt(r))}function Dd(t,e){return!t.points||t.points.length<=3||e<0||e>=t.points.length?!1:(t.points.splice(e,1),Object.assign(t,gt(t.points)),!0)}var __={light:"M8.5 17.5h7M9.5 20.5h5M12 2.5a6.5 6.5 0 0 0-3.5 12v1.5h7V14.5A6.5 6.5 0 0 0 12 2.5z",switch:"M6 5h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM12 7.5v9M9 12h6",fan:"M12 11.5c-1-3.5 0-7 2.5-7s2 4-2.5 7zm.5.5c3.5-1 7 0 7 2.5s-4 2-7-2.5zm-.5.5c1 3.5 0 7-2.5 7s-2-4 2.5-7zm-.5-.5c-3.5 1-7 0-7-2.5s4-2 7 2.5z",cover:"M3.5 3.5h17v3h-17zM6 6.5v12M18 6.5v12M8.5 9.5h7M8.5 12.5h7M8.5 15.5h7",climate:"M12 15V5.5a2.5 2.5 0 0 0-5 0V15a4.5 4.5 0 1 0 5 0zM9.5 9v7M15 5.5h5M15 9.5h4",media:"M3.5 5.5h17v11h-17zM8 20.5h8M12 16.5v4M10 8.5v5l4.5-2.5z",lock:"M5.5 10.5h13v9.5h-13zM8 10.5V7.5a4 4 0 0 1 8 0v3M12 14v3",sensor:"M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM12 7.5v4.5l3.5 2",binary:"M5.5 20.5v-17h10v17M3.5 20.5h14M9 20.5v-13h4.5v13M12.5 14h.01",scene:"M5.5 18.5l8-8M14 3.5l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1zM18.5 12l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z",script:"M8.5 3.5h8.5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H7.5a2 2 0 0 1-2-2v-2h9M8.5 3.5a2 2 0 0 0-2 2v10M9.5 8.5h6M9.5 11.5h4"},wt=t=>__[t];function Id(t,e){let n=new Set;for(let r of t?.placements??[])C([r.x,r.z],e.points)&&n.add(r.entity_id);for(let r of t?.furniture??[])le(r.type)&&r.entity&&C([r.x,r.z],e.points)&&n.add(r.entity);return n}function Hd(t,e){let n=new Map;for(let r of t.floors){let o=[...r.placements.map(i=>[i.entity_id,i.x,i.z]),...r.furniture.filter(i=>le(i.type)&&i.entity).map(i=>[i.entity,i.x,i.z])];for(let[i,s,a]of o){let l=r.rooms.find(c=>C([s,a],c.points));l&&l.id!==e.id&&n.set(i,l.name)}}return n}var Ld=(t,e)=>(t??[]).includes(e)?(t??[]).filter(n=>n!==e):[...t??[],e];function Po(t,...e){let n=t.trim().toLowerCase();return!n||e.some(r=>(r??"").toLowerCase().includes(n))}function Cd(t,e){return t.map(n=>({o:n,r:e(n.id)})).sort((n,r)=>n.r-r.r).map(({o:n})=>n)}function Wd(t,e){let n=e,r=0;return{taken:t.map(i=>{let s=i.ids.slice(0,Math.max(0,n));return n-=s.length,r+=i.ids.length-s.length,[...s]}),left:r}}var Ps=50;function Ts(t,e,n,r,o,i,s){let a=e.includes(n);return m`<button class="nf-pin ${a?"nf-pin-on":""}" aria-pressed=${a} title=${t.t(a?i[0]:i[1])} @click=${()=>s.patchRoom({[r]:Ld(e,n)})}>${a?o[0]:o[1]}</button>`}function b_(t,e,n,r,o,i){let[s,a,l]=[e.hidden??[],e.no_state??[],e.panel??[]];return(c,u=!1,h=o)=>{let d=n.has(c),p=d?void 0:r.get(c),f=s.includes(c),_=fn(t,c);return m`<div class="nf-row nf-dev-row ${u?"nf-dev-extra":""} ${f?"nf-dev-hidden":""}">
      <button class="nf-dev-name ${d?"":"nf-muted"}" ?disabled=${!d} @click=${()=>i.select(c)}>
        ${_?m`<ha-icon class="nf-dev-icon" style="--mdc-icon-size:16px" .icon=${_}></ha-icon>`:m`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${wt((t.hass?je(t.hass,c):U(c))??"sensor")} /></svg>`}
        <span>${V(t.hass,c,h)}${p?m`<small class="nf-muted"> · ${t.t("devices_placed_in",{room:p})}</small>`:g}</span>
      </button>
      ${t.admin?Ts(t,s,c,"hidden",["\u{1F648}","\u{1F441}"],["panel_unhide","panel_hide"],i):g}
      ${t.admin&&!f?Ts(t,a,c,"no_state",["\u2205","Aa"],["panel_state_show","panel_state_hide"],i):g}
      ${t.admin&&!d?Ts(t,l,c,"panel",["\u2605","\u2606"],["panel_unpin","panel_pin"],i):g}
      ${t.admin?d?m`<button class="nf-link" @click=${()=>i.remove(c)}>${t.t("devices_remove")}</button>`:m`<button class="nf-link" @click=${()=>i.place([c])}>${t.t("devices_place")}</button>`:g}
    </div>`}}function y_(t,e,n,r,o){let{hass:i}=t;if(!i)return m``;let s=u=>u>0?M(t.t("devices_narrow",{n:u})):g,a=M(t.t("devices_none")),l=e.deviceQuery;if(o==="other"){let u=Ul(i,n.area_id).map(f=>({...f,ids:f.ids.filter(_=>Po(l,`${V(i,_,f.name)} ${_} ${f.name}`))})),{taken:h,left:d}=Wd(u,Ps),p=u.map((f,_)=>h[_].length>0?m`<div class="nf-dev-area">${f.name}</div>${h[_].map(y=>r(y,!1,f.name))}`:g);return h.some(f=>f.length>0)?m`<div class="nf-room-list">${p}</div>${s(d)}`:a}let c=jl(i).filter(u=>Po(l,`${V(i,u)} ${u} `));return c.length>0?m`<div class="nf-room-list">${c.slice(0,Ps).map(u=>r(u))}</div>${s(c.length-Math.min(c.length,Ps))}`:a}function w_(t,e,n,r,o,i,s){let{hass:a}=t,l=a?_e(a,n).filter(b=>qt(je(a,b))):[];if(!n.area_id)return M(t.t("devices_none_area"));if(l.length===0)return M(t.t("devices_none"));let c=a?Qr(a,l):[],u=c.map(b=>b.primary).filter(b=>!o.has(b)),h=e.deviceQuery,d=(t.floor?.placements??[]).filter(b=>U(b.entity_id)==="light"&&(b.mount??"ceiling")==="ceiling"&&C([b.x,b.z],n.points)).length,p=m`<input class="nf-search" type="search" placeholder=${t.t("devices_search")} .value=${h} @input=${b=>e.deviceQuery=b.target.value} />`,f=b=>Po(h,V(a,b,i),b),_=b=>{let v=b.others.filter(f),w=e.isUnfolded(b.primary)||!!h.trim()&&v.length>0;return!f(b.primary)&&v.length===0?g:m`${r(b.primary)}
      ${b.others.length>0?m`<button class="nf-more" @click=${()=>e.toggleUnfolded(b.primary)}>${w?t.t("devices_less"):t.t("devices_more",{n:b.others.length})}</button>`:g}
      ${w?(h.trim()?v:b.others).map(k=>r(k,!0)):g}`},y=()=>s.confirm(t.t("devices_place_all_confirm",{n:u.length}))&&s.place(u);return m`${t.admin&&d>=2?m`<button class="nf-btn nf-wide-btn" @click=${()=>s.spreadLights(n)}>${t.t("lights_spread")}</button>`:g}
    ${l.length>8?p:g}
    <div class="nf-room-list">${c.map(_)}</div>
    ${t.admin&&u.length>1?m`<button class="nf-link nf-place-all" @click=${y}>${t.t("devices_place_all_n",{n:u.length})}</button>`:g}
    ${M(t.t("devices_hint"))}`}function Os(t,e,n,r){let{hass:o}=t,i=n.area_id?o?.areas?.[n.area_id]?.name:void 0,s=Id(t.floor,n),a=b_(t,n,s,Hd(t.doc,n),i,r),l=t.admin?e.deviceSource:"area",c=o?Qr(o,_e(o,n).filter(d=>qt(je(o,d)))).length:0,u=[["area",`${t.t("devices_src_area")}${c>0?` (${c})`:""}`],["other",t.t("devices_src_other")],["none",t.t("devices_src_none")]],h=m`<input class="nf-search" type="search" placeholder=${t.t("devices_search")} .value=${e.deviceQuery} @input=${d=>e.deviceQuery=d.target.value} />`;return m`<section>
    <h3>${t.t("devices")}</h3>
    ${M(t.t("devices_panel_hint"))}
    ${t.admin?m`<div class="nf-seg nf-dev-source">${u.map(([d,p])=>m`<button aria-pressed=${l===d} @click=${()=>e.deviceSource=d}>${p}</button>`)}</div>`:g}
    ${l!=="area"?m`${h}${y_(t,e,n,a,l)}`:w_(t,e,n,a,s,i,r)}
  </section>`}function Bd(t,e,n){let{hass:r}=t;if(!r)return g;let o=!!e.climate&&Object.values(e.climate).some(a=>a!=null),i=(a,l)=>{let c={...e.climate??{},[a]:l};n({climate:Object.values(c).every(u=>u==null)?null:c})},s=(a,l)=>{let c=ql(r,t.floor??null,{...e,climate:null},a),u=D(r,d=>ce(d)&&r.states[d]?.attributes.device_class===Ti[a]),h=Cd(u,d=>(rn(r,d)===e.area_id?0:1)+(Oi(r,d)?0:2));return z(t,l,e.climate?.[a]??null,c[0]??null,h,d=>i(a,d))};return m`<details class="nf-points" ?open=${o}>
    <summary>${t.t("climate")}</summary>
    <div class="nf-form">${s("temperature",t.t("climate_temperature"))} ${s("humidity",t.t("climate_humidity"))} ${s("co2",t.t("climate_co2"))}</div>
    ${M(t.t("climate_hint"))}
  </details>`}var Ds="metric",Nd=t=>{Ds=t==="imperial"?"imperial":"metric"};var Vd=.3048;function pe(t,e,n=2,r=Ds){if(r==="metric")return`${G(t,e,n)} m`;let o=e<0?"\u2212":"",i=Math.round(Math.abs(e)/.0254*2),s=Math.floor(i/24),a=i-s*24,l=`${Math.floor(a/2)}${a%2?"\xBD":""}`;return s?`${o}${s}\u2032 ${l}\u2033`:`${o}${l}\u2033`}function To(t,e,n=Ds){return n==="metric"?`${G(t,e,1)} m\xB2`:`${G(t,e/(Vd*Vd),0)} ft\xB2`}function Je(t,e){if(!ot(e))return ge(t,`furn_${e}`);let n=K(e);return n?Ie(n,e,t?.language??navigator.language):ge(t,"pack_missing_item")}function Ie(t,e,n){return t.name[n.split("-")[0]]??uo(n,e)??sl(t,n)}function Me(t,e){return uo(e,`packname:${t.id}`)??al(t,e)}function Kd(t,e){return t.name[e.split("-")[0]]??uo(e,`color:${t.id}`)??t.name.en??Object.values(t.name)[0]}var v_=.15,k_=(t,e)=>Math.abs((t-e+540)%360-180);function x_(t,e,n,r){return t.rooms.some(o=>o.id!==e.id&&o.points.some((i,s)=>{let a=o.points[(s+1)%o.points.length];return Math.abs(Y(W(i,n),r))<.02&&Math.abs(Y(W(a,n),r))<.02}))}function Hs(t,e,n,r){let o=e.points,[i,s]=[o[n],o[(n+1)%o.length]],a=de(W(s,i)),l=he(o)>=0?1:-1,c=[(s[0]-i[0])/a,(s[1]-i[1])/a],u=[-c[1]*l||0,c[0]*l||0],h=c[0]*u[1]-c[1]*u[0]>0,d=e.wall_heights?.[n],p=e.ceiling??t.height,f=typeof d=="number"?d:Array.isArray(d)?Math.max(...d.map(b=>b??p)):p,_=e.wall_slopes?.[n],y=typeof _=="number"&&typeof d=="number"?_:f;return{origin:h?i:s,along:h?c:[-c[0],-c[1]],normal:u,length:a,face:x_(t,e,i,u)?r/2:0,heightLeft:h?f:y,heightRight:h?y:f}}function Is(t,e){let n=W(e,t.origin);return{u:Y(n,t.along),depth:Y(n,t.normal)-t.face}}function $_(t,e){let n=t.rooms.find(s=>s.id===e.room_id);if(!n||e.wall)return null;let[r,o]=[n.points[e.edge],n.points[(e.edge+1)%n.points.length]];if(!r||!o)return null;let i=de(W(o,r))||1;return[r[0]+(o[0]-r[0])*e.offset/i,r[1]+(o[1]-r[1])*e.offset/i]}var Gd=t=>K(t.type)?.mount==="wall"||t.type==="lamp_wall"||t.mount_y!=null;function Ud(t,e,n){let r=[];for(let i of t.openings){let s=$_(t,i);if(!s)continue;let{u:a,depth:l}=Is(n,s);Math.abs(l+n.face)>.3||a<-.01||a>n.length+.01||r.push({id:i.id,kind:"opening",type:i.type,x0:a-i.width/2,x1:a+i.width/2,y0:i.sill,y1:i.sill+i.height,lifts:i.type==="window"})}let o=Math.atan2(-n.normal[0],n.normal[1])*180/Math.PI;for(let i of t.furniture){if(!C([i.x,i.z],e.points)||k_(i.rotation,o)>20)continue;let{u:s,depth:a}=Is(n,[i.x,i.z]);if(a-i.d/2>v_||s<0||s>n.length)continue;let l=Xt(t,i);r.push({id:i.id,kind:"furniture",type:i.type,x0:s-i.w/2,x1:s+i.w/2,y0:l,y1:l+i.h,lifts:Gd(i)})}return r.sort((i,s)=>+(i.kind==="furniture")-+(s.kind==="furniture")||i.x0-s.x0)}var $r=t=>Math.round(t*1e3)/1e3;function jd(t,e,n,r){let o=Is(t,[e.x,e.z]).depth,i=Math.min(t.length-e.w/2,Math.max(e.w/2,n+e.w/2)),s=[t.origin[0]+t.along[0]*i+t.normal[0]*(o+t.face),t.origin[1]+t.along[1]*i+t.normal[1]*(o+t.face)];return{x:$r(s[0]),z:$r(s[1]),...r!==null&&Gd(e)?{mount_y:$r(Math.max(0,r))}:{}}}function Zd(t,e,n,r,o){let[i]=[e.points[n.edge]],s=Math.min(t.length-n.width/2,Math.max(n.width/2,r+n.width/2)),a=de(W(i,t.origin))<1e-6?s:t.length-s;return{offset:$r(a),...o!==null&&n.type==="window"?{sill:$r(Math.max(0,o))}:{}}}var qd=.01,Yd=t=>Math.round(t/qd)*qd,Ls=class extends re{static properties={host:{attribute:!1},doc:{attribute:!1},roomId:{},edge:{type:Number},_sel:{state:!0},_drag:{state:!0}};constructor(){super(),this._sel=null,this._drag=null}get room(){return this.host.floor?.rooms.find(e=>e.id===this.roomId)}frame(){let e=this.room;return e&&this.host.floor?Hs(this.host.floor,e,this.edge,this.host.doc.settings.wall_interior):null}boxes(){let e=this.room,n=this.frame();return e&&n&&this.host.floor?Ud(this.host.floor,e,n):[]}place(e,n,r){let o=this.room,i=this.frame();!o||!i||this.host.change((s,a)=>{if(e.kind==="furniture"){let l=a.furniture.find(c=>c.id===e.id);l&&Object.assign(l,jd(i,l,n,e.lifts?r:null))}else{let l=a.openings.find(u=>u.id===e.id),c=a.rooms.find(u=>u.id===l?.room_id);l&&c&&Object.assign(l,Zd(c.id===o.id?i:Hs(a,c,l.edge,this.host.doc.settings.wall_interior),c,l,n,e.lifts?r:null))}})}toWall(e){let r=this.renderRoot.querySelector("svg").getScreenCTM()?.inverse();if(!r)return[0,0];let o=new DOMPoint(e.clientX,e.clientY).matrixTransform(r);return[o.x,-o.y]}down(e,n){if(this._sel=n.id,!this.host.admin)return;e.currentTarget.setPointerCapture(e.pointerId);let[r,o]=this.toWall(e);this._drag={id:n.id,x0:n.x0,y0:n.y0,startU:r,startY:o,fromX:n.x0,fromY:n.y0}}move(e,n){let r=this._drag;if(!r||r.id!==n.id)return;let[o,i]=this.toWall(e),s=this.frame(),a=n.x1-n.x0,l=Math.min((s?.length??0)-a,Math.max(0,Yd(r.fromX+o-r.startU))),c=n.lifts?Math.max(0,Yd(r.fromY+i-r.startY)):r.fromY;this._drag={...r,x0:l,y0:c}}up(e){let n=this._drag;this._drag=null,!(!n||n.id!==e.id||Math.abs(n.x0-n.fromX)<1e-6&&Math.abs(n.y0-n.fromY)<1e-6)&&this.place(e,n.x0,n.y0)}nameOf(e){if(e.kind==="furniture")return this.host.floor?.furniture.find(o=>o.id===e.id)?.name||Je(this.host.hass,e.type);let n=this.host.floor?.openings.find(r=>r.id===e.id);return n?this.host.t(`preset_${tn(n)}`):e.type}updated(e){(e.has("edge")||e.has("roomId"))&&(this._sel=null)}render(){let e=this.host.t,n=this.room,r=this.frame();if(!n||!r)return g;let o=n.points.length,i=p=>pe(this.host.hass,p),s=this.boxes().map(p=>this._drag?.id===p.id?{...p,x1:this._drag.x0+(p.x1-p.x0),y1:this._drag.y0+(p.y1-p.y0),x0:this._drag.x0,y0:this._drag.y0}:p),a=Math.max(r.heightLeft,r.heightRight,...s.map(p=>p.y1)),l=.35,c=`${-l} ${-(a+l)} ${r.length+2*l} ${a+2*l+.25}`,u=s.find(p=>p.id===this._sel)??null,h=p=>{let f=Math.min(.14,Math.max(.07,(p.x1-p.x0)/7));return S`<text x=${(p.x0+p.x1)/2} y=${-(p.y0+p.y1)/2} font-size=${f} text-anchor="middle" dominant-baseline="middle">${this.nameOf(p)}</text>`},d=u?S`<g class="dim">
          <line x1="0" x2=${u.x0} y1=${-(u.y0+u.y1)/2} y2=${-(u.y0+u.y1)/2} />
          <text x=${u.x0/2} y=${-(u.y0+u.y1)/2-.06} text-anchor="middle" font-size="0.11">${i(u.x0)}</text>
          <line x1=${u.x1} x2=${r.length} y1=${-(u.y0+u.y1)/2} y2=${-(u.y0+u.y1)/2} />
          <text x=${(u.x1+r.length)/2} y=${-(u.y0+u.y1)/2-.06} text-anchor="middle" font-size="0.11">${i(r.length-u.x1)}</text>
          ${u.y0>.005?S`<line x1=${(u.x0+u.x1)/2} x2=${(u.x0+u.x1)/2} y1="0" y2=${-u.y0} /><text x=${(u.x0+u.x1)/2+.05} y=${-u.y0/2} font-size="0.11">${i(u.y0)}</text>`:g}
        </g>`:g;return m`<div class="backdrop" @click=${p=>p.target===p.currentTarget&&this.close()}>
      <div class="sheet" role="dialog" aria-label=${e("wall_view")}>
        <header>
          <b>${e("wall_view")} · ${n.name||e("room")} · ${e("wall_n",{a:this.edge+1,b:(this.edge+1)%o+1})}</b>
          <span class="muted">${i(r.length)}</span>
          <span class="grow"></span>
          <button aria-label=${e("wall_view_prev")} title=${e("wall_view_prev")} @click=${()=>this.edge=(this.edge-1+o)%o}>‹</button>
          <button aria-label=${e("wall_view_next")} title=${e("wall_view_next")} @click=${()=>this.edge=(this.edge+1)%o}>›</button>
          <button aria-label=${e("close")} @click=${()=>this.close()}>✕</button>
        </header>
        <svg viewBox=${c} preserveAspectRatio="xMidYMid meet" @pointerdown=${p=>p.target===p.currentTarget&&(this._sel=null)}>
          <polygon class="wall" points=${`0,0 ${r.length},0 ${r.length},${-r.heightRight} 0,${-r.heightLeft}`} />
          <line class="floor" x1=${-l} x2=${r.length+l} y1="0" y2="0" />
          ${s.map(p=>S`<g class="box ${p.kind} ${p.type} ${p.id===this._sel?"sel":""} ${this.host.admin?"movable":""}"
              @pointerdown=${f=>this.down(f,p)}
              @pointermove=${f=>this.move(f,p)}
              @pointerup=${()=>this.up(p)}
              @pointercancel=${()=>this._drag=null}>
              <rect x=${p.x0} y=${-p.y1} width=${Math.max(.01,p.x1-p.x0)} height=${Math.max(.01,p.y1-p.y0)} rx="0.02" />
              ${h(p)}
            </g>`)}
          ${d}
        </svg>
        <footer>
          ${u?m`<b>${this.nameOf(u)}</b>
                <label
                  >${e("wall_view_left")}
                  <input type="number" step="0.01" min="0" .value=${u.x0.toFixed(2)} ?disabled=${!this.host.admin} @change=${p=>this.place(u,Number(p.target.value),u.y0)}
                /></label>
                ${u.lifts?m`<label
                      >${e(u.kind==="opening"?"sill":"wall_view_height")}
                      <input type="number" step="0.01" min="0" .value=${u.y0.toFixed(2)} ?disabled=${!this.host.admin} @change=${p=>this.place(u,u.x0,Number(p.target.value))}
                    /></label>`:g}`:m`<span class="muted">${e("wall_view_hint")}</span>`}
        </footer>
      </div>
    </div>`}close(){this.dispatchEvent(new CustomEvent("close"))}static styles=ie`
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
  `};customElements.get("nf-wall-view")||customElements.define("nf-wall-view",Ls);var S_=new URL(import.meta.url),M_=new URL("./nextfloor-3d.js?v=1cb945412c3f",S_).href,Xd;function Vt(){return Xd??=import(M_),Xd}var Qd=["lights","seating","tables","storage","beds","kitchen","appliances","bath","media","office","tech","climate","energy","garden","plants","kids","fitness","pets","workshop","music","season","pictures","vehicles","building","decor"],E_={sofa:"seating",armchair:"seating",stool:"seating",chair:"seating",bench:"seating",corner_bench:"seating",bar_stool:"seating",office_chair:"office",coffee_table:"tables",table:"tables",table_round:"tables",desk:"office",worktop:"kitchen",tv_board:"media",tv_wall:"media",sideboard:"storage",shelf:"storage",tall_cabinet:"storage",wardrobe:"storage",dresser:"storage",nightstand:"beds",coat_rack:"storage",plant:"plants",rug:"decor",kitchen:"kitchen",kitchen_wall:"kitchen",kitchen_tall:"kitchen",island:"kitchen",sink:"kitchen",stove:"kitchen",dishwasher:"appliances",fridge:"appliances",washer:"appliances",dryer:"appliances",robot_vacuum:"appliances",bed:"beds",bunk_bed:"beds",bathtub:"bath",shower:"bath",wc:"bath",washbasin:"bath",radiator:"climate",stairs:"building",parking:"vehicles",ceiling_fan:"lights"},R_=[[/xmas|advent|window_star|candle_arch|reindeer|pumpkin|easter|snowman|gift_pile|lights_outdoor/,"season"],[/^frame_|^canvas$|^poster$|picture_ledge/,"pictures"],[/piano|drum_kit|guitar|synth|mic_stand|vinyl|easel|studio_monitor|mixing_desk/,"music"],[/lamp|pendant|light_pillar|light_bars|mood_spot|ceiling_panel|garden_spots|wall_light|light_cove|niche_led|shelf_led|monitor_light|workshop_light|painting_light|cabinet_light|moon_light|torch|lantern|ceiling_fan_light/,"lights"],[/cat_|dog_|pet_|litter|scratch|hamster|rabbit|bird_cage|small_animal|aquarium|terrarium/,"pets"],[/stairs|steps|landing|rail_|column|pilaster|beam|chimney|glass_wall|sliding_wall|half_wall|platform|niche_shelf|window_seat|divider_slats|gallery/,"building"],[/tree|shrub|conifer|hedge|brush|monstera|plant|herb_garden|herb_planter|flower|raised_bed|greenhouse|ficus|cactus|bonsai|living_wall|vertical_garden/,"plants"],[/kids|toy|teepee|(^|_)play_|rocking_horse|ball_pit|house_bed|cot\b|^cot|crib|changing_table|baby|loft_bed|star_projector|moon_light/,"kids"],[/treadmill|fitness|power_rack|rowing|rower|spin_bike|dumbbell|punching|yoga|elliptical|gym|exercise|wall_bars|bike_trainer|kettlebell|weight_bench|massage_chair/,"fitness"],[/heat_pump|boiler|buffer_tank|manifold|ventilation|radiator|towel_heater|thermostat|air_purifier|humidifier|dehumidifier|tower_fan|ceiling_fan|hot_water|water_softener|water_pump|fireplace|wood_stove|patio_heater|sauna|oil_|expansion_vessel|water_tank|infrared|cold_bath/,"climate"],[/wallbox|inverter|battery|solar|meter|fuse_box|grid/,"energy"],[/workbench|tool_|compressor|drill|tyre|paint_cabinet|heavy_shelf|shelf_rack|garage_opener|workshop|bike_stand|bike_holder|bike_rack|lawn_mower|mower|welder|ev_bike_charger|tool_chest|parts_cabinet/,"workshop"],[/speaker|subwoofer|soundbar|receiver|turntable|record|game_console|multiroom|hifi|cinema|acoustic|bass_trap|popcorn|projector|projection|screen|display_|smart_display|media|tv|arcade|star_ceiling|av_/,"media"],[/desk|office|filing|whiteboard|monitor|bookcase|phone_booth|sim_cockpit|chair_gaming|gaming/,"office"],[/server|nas|router|wifi|access_point|network|printer|filament|tower_pc|smoke_detector|siren|baby_monitor|sunrise_clock|light_switch|socket|co_detector|presence_|water_leak|air_quality|doorbell/,"tech"],[/grill|lounge|lounger|parasol|pergola|hot_tub|fire_bowl|torch|lantern|play_tower|garden|trampoline|sprinkler|valve|rain_barrel|outdoor|hammock|(^|_)pool|swing|bin_box|^bin_|mailbox|rotary_line|kamado|pizza_oven|fire_pit|sandbox|wood_pile|bird_house|cistern|pond|water_feature|beach_chair/,"garden"],[/vanity_\d|vanity_double|double_vanity|basin|bath|shower|toilet|bidet|towel|mirror_cabinet|mirror_round|mirror_80|mirror_led|whirlpool|washer_under|laundry|wc/,"bath"],[/fridge|freezer|dishwasher|washer|dryer|microwave|coffee_machine|kettle|toaster|mixer|oven|steam|vacuum|ironing|drying_rack|trash|water_cooler|drip_tray|espresso|air_fryer|water_bar|thermo_cooker/,"appliances"],[/base_|drawer_|sink|hob|cooker|hood|pantry|kitchen|island|breakfast_bar|wall_\d|wall_glass|wall_corner|row_|spice|cabinet_light|trolley|bar_cart|utility_sink/,"kitchen"],[/bed|boxspring|futon|nightstand|canopy|mattress/,"beds"],[/sofa|chair|armchair|stool|bench|pouf|bean_bag|recliner|wingback|chaise|seat|ektorp|poang|cosy_corner|swing_bench|hanging_chair|nook|floor_cushion|tatami/,"seating"],[/table|dining|coffee_|side_round|lack_|^console$|bekant|alex/,"tables"],[/wardrobe|closet|clothes_rail|chest|dresser|shelf|cabinet|sideboard|lowboard|highboard|kallax|billy|ivar|pax|besta|cube_|coat_stand|shoe_bench|divider|display_cabinet|wall_unit|malm_chest|locker/,"storage"]];function A_(t){if(t.vehicle)return"vehicles";if(t.climate)return"climate";if(!t.type.startsWith("pack:"))return t.lamp?"lights":E_[t.type]??"decor";let e=R_.find(([n])=>n.test(t.id));return e?e[1]:t.lamp?"lights":"decor"}var Jd=[[/k(u|ü)che|kitchen|kochen/,["kitchen","appliances","tables","seating","storage","plants","decor"]],[/wohn|living|lounge|salon/,["seating","tables","storage","media","plants","decor","climate","tech"]],[/\bess|dining/,["tables","seating","storage","plants","decor","media"]],[/schlaf|bed|gast|guest/,["beds","storage","seating","tables","decor","plants","climate","media"]],[/kind|kids|child|baby|spiel|play|nursery/,["kids","beds","storage","seating","tables","decor"]],[/bad|bath|wc|toilet|dusch|shower|sauna/,["bath","appliances","storage","climate","plants"]],[/b(u|ü)ro|office|arbeit|study|work/,["office","tech","storage","seating","tables","plants"]],[/kino|cinema|media|game|gaming|hifi/,["media","seating","tables","storage","office"]],[/fitness|gym|sport|training/,["fitness","media","storage","climate"]],[/garage|carport|stellplatz|parking/,["vehicles","workshop","energy","storage","garden"]],[/werkstatt|workshop|hobby|keller|cellar|basement|lager|storage/,["workshop","storage","appliances","energy","climate","fitness","tech"]],[/hauswirtschaft|hwr|utility|laundry|wasch|technik|heiz|boiler/,["appliances","climate","energy","storage","tech","bath"]],[/flur|diele|hall|entr|eingang|corridor|treppe|stair/,["storage","seating","decor","plants","building"]],[/garten|garden|terrass|terrace|balkon|balcony|patio|hof|yard|pool/,["garden","plants","seating","tables","pets","kids"]]];function Cs(t){let e=(t??"").toLowerCase(),n=Jd.find(([r])=>r.test(e));return n?new Set(["lights",...n[1]]):null}function Ws(t){let e=(t??"").toLowerCase();return Jd.find(([n])=>n.test(e))?.[1][0]??null}var eh=t=>t==="garden"||t==="plants"||t==="vehicles",th=/_(\d+(?:x\d+)?)$/;function nh(t){let e=new Map;for(let n of t){let r=A_(n),o=n.type.startsWith("pack:")&&!n.vehicle?n.id.replace(th,""):n.id,i=`${n.source}:${o}`,s=e.get(i);s&&s.category===r?s.entries.push(n):e.set(s?`${i}:${n.id}`:i,{key:s?`${i}:${n.id}`:i,category:r,entries:[n]})}for(let n of e.values())n.entries.sort((r,o)=>r.size[0]-o.size[0]||r.size[1]-o.size[1]);return[...e.values()]}function rh(t,e){let n=o=>Math.round(o*100);return e.some(o=>o!==t&&n(o.size[0])===n(t.size[0]))?th.exec(t.id)?.[1]??`${n(t.size[0])}\xD7${n(t.size[2])}`:`${n(t.size[0])}`}function oh(t,e,n=12){return[e,...t.filter(r=>r!==e)].slice(0,n)}var ih=t=>t.toLowerCase().normalize("NFD").replace(new RegExp("\\p{M}","gu"),""),sh=t=>ih(t).split(/\s+/).filter(Boolean),ah=(t,e)=>{let n=ih(e);return t.every(r=>n.includes(r))};function lh(){let e=navigator.deviceMemory??8,n=navigator.hardwareConcurrency||8;return e<=3||n<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var ch=112,F_="nextfloor-thumbs";function z_(t){let e=2166136261;for(let n=0;n<t.length;n++)e=Math.imul(e^t.charCodeAt(n),16777619);return(e>>>0).toString(36)}function Bs(t){let e=K(t);return`${t}|${e?z_(JSON.stringify(e)):"b"}|${ch}`}function P_(){return new Promise(t=>{try{let e=indexedDB.open(F_,1);e.onupgradeneeded=()=>e.result.createObjectStore("thumbs"),e.onsuccess=()=>t(e.result),e.onerror=()=>t(null)}catch{t(null)}})}var Vs=class{enabled=!lh();memory=new Map;waiting=new Map;queue=[];db=null;running=!1;packs=[];cached(e){return this.memory.get(Bs(e))}get(e){let n=Bs(e),r=this.memory.get(n);return r?Promise.resolve(r):new Promise(o=>{let i=this.waiting.get(n);if(i)return void i.push(o);this.waiting.set(n,[o]),this.lookUp(e,n)})}settle(e,n){n&&this.memory.set(e,n);for(let r of this.waiting.get(e)??[])r(n);this.waiting.delete(e)}async lookUp(e,n){this.db??=P_();let r=await this.db,o=r?await new Promise(i=>{try{let s=r.transaction("thumbs").objectStore("thumbs").get(n);s.onsuccess=()=>i(typeof s.result=="string"?s.result:null),s.onerror=()=>i(null)}catch{i(null)}}):null;if(o)return this.settle(n,o);this.queue.push(e),this.pump()}pump(){if(this.running)return;let e=this.queue.shift();if(!e)return;this.running=!0;let n=window.requestIdleCallback;(o=>n?n(o,{timeout:300}):setTimeout(o,16))(async()=>{let o=Bs(e),i=null;try{let[s,a,l]=Ge(e);i=(await Vt()).furniturePreview({type:e,w:s,d:a,h:l,variant:null,lamp:Ur[e]??null},ch,[...this.packs]),this.keep(o,i)}catch{i=null}this.settle(o,i),this.running=!1,this.pump()})}async keep(e,n){let r=await this.db;try{r?.transaction("thumbs","readwrite").objectStore("thumbs").put(n,e)}catch{}}},vt=new Vs,Sr=null,T_=t=>{for(let e of t)e.isIntersecting&&e.target.visible()},Ns=class extends re{static properties={type:{},_url:{state:!0}};static styles=ie`
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
  `;constructor(){super(),this.type="",this._url=null}connectedCallback(){super.connectedCallback(),vt.enabled&&(this._url=vt.cached(this.type)??null,!this._url&&(Sr??=new IntersectionObserver(T_,{rootMargin:"120px"}),Sr.observe(this)))}disconnectedCallback(){super.disconnectedCallback(),Sr?.unobserve(this)}updated(e){e.has("type")&&e.get("type")!==void 0&&(this._url=vt.cached(this.type)??null,!this._url&&vt.enabled&&Sr?.observe(this))}visible(){Sr?.unobserve(this);let e=this.type;vt.get(e).then(n=>{this.type===e&&(this._url=n)})}render(){return this._url?m`<img src=${this._url} alt="" />`:g}};customElements.get("nf-thumb")||customElements.define("nf-thumb",Ns);var uh="nextfloor.library2",O_={language:"en"},Oo=class{onChange;text="";saved;shown=null;picked=new Map;constructor(e){this.onChange=e,this.saved={folded:{},favourites:[],recent:[],flags:["room"]};try{let n=localStorage.getItem(uh);n&&(this.saved={...this.saved,...JSON.parse(n)})}catch{}}store(e){this.saved={...this.saved,...e},this.onChange();try{localStorage.setItem(uh,JSON.stringify(this.saved))}catch{}}get query(){return this.text}set query(e){this.text=e,this.onChange()}isOpen(e,n){return this.saved.folded[e]??n}toggle(e,n){this.store({folded:{...this.saved.folded,[e]:!this.isOpen(e,n)}})}has(e){return this.saved.flags.includes(e)}flip(e){this.store({flags:this.has(e)?this.saved.flags.filter(n=>n!==e):[...this.saved.flags,e]})}get favourites(){return this.saved.favourites}isFavourite(e){return this.saved.favourites.includes(e)}toggleFavourite(e){this.store({favourites:this.isFavourite(e)?this.saved.favourites.filter(n=>n!==e):[e,...this.saved.favourites]})}get recent(){return this.saved.recent}used(e){this.store({recent:oh(this.saved.recent,e)})}pickedOf(e){let n=this.picked.get(e.key);return e.entries.find(r=>r.type===n)??e.entries[0]}pick(e,n){this.picked.set(e.key,n),this.onChange()}get preview(){return this.shown}hidePreview(){this.shown=null,this.onChange()}async showPreview(e,n,r){let o=n.getBoundingClientRect(),i={left:Math.max(8,o.left-196),top:Math.max(8,Math.min(window.innerHeight-200,o.top+o.height/2-95))};this.shown={type:e,url:null,...i},this.onChange();try{let[s,a,l]=Ge(e),c=(await Vt()).furniturePreview({type:e,w:s,d:a,h:l,variant:null,lamp:Ur[e]??null},180,[...r]);this.shown?.type===e&&(this.shown={type:e,url:c,...i})}catch{this.shown=null}this.onChange()}};function D_(t,e){let n=t.hass?.language??"en",o=[...[...new Set(Object.values(zl).flat())].map(a=>({type:a,source:"builtin",id:a,size:Ce[a],lamp:le(a),electric:ft(a)})),...e.flatMap(a=>a.items.map(l=>({type:ae(a.id,l.id),source:a.id,id:l.id,size:l.size,lamp:!!l.light,electric:!!l.electric,vehicle:!!l.vehicle,climate:!!l.climate})))],i=new Map(e.map(a=>[a.id,Me(a,n)])),s=new Map(e.flatMap(a=>a.items.map(l=>[ae(a.id,l.id),l])));return nh(o).map(a=>{let l=a.entries[0],c=s.get(l.type),u=c?Ie(c,l.type,n):t.t(`furn_${l.type}`),h=a.entries.length>1&&u.replace(/\s*\(?\d+([.,]\d+)?\s*(cm|x\s*\d+|×\s*\d+)?\)?\s*$/i,"").trim()||u,d=a.entries.map(p=>{let f=s.get(p.type);return f?[...Object.values(f.name),Ie(f,p.type,n)].join(" "):ge(O_,`furn_${p.type}`)}).join(" ");return{card:a,label:h,search:`${d} ${t.t(`lib_cat_${a.category}`)}`,from:i.get(l.source)??"NextFloor"}})}var I_=(t,e)=>ah(e,`${t.label} ${t.search} ${t.from} ${t.card.entries.map(n=>n.id.replace(/_/g," ")).join(" ")}`),H_=t=>t.lamp?"light":t.electric?"switch":null;function L_(t,e,n,r){let o=t.t,i=e.pickedOf(n.card),[s,a]=i.size,l=H_(i),c=d=>{e.showPreview(i.type,d.currentTarget,r.packs)},u=()=>{e.used(i.type),r.add(i.type)},h=e.isFavourite(i.type);return m`<div class="nf-card">
    <button
      class="nf-card-main"
      title=${l?o(l==="light"?"lib_badge_light":"lib_badge_electric"):n.label}
      @click=${u}
      @mouseenter=${c}
      @focus=${c}
      @mouseleave=${()=>e.hidePreview()}
      @blur=${()=>e.hidePreview()}
    >
      ${vt.enabled?m`<nf-thumb .type=${i.type}></nf-thumb>`:g}
      <span class="nf-card-name"
        >${n.label}${l?m`<svg class="nf-lib-badge" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${wt(l)} /></svg>`:g}</span
      >
      <span class="nf-card-meta">${Math.round(s*100)} × ${Math.round(a*100)} cm · ${n.from}</span>
    </button>
    <button class="nf-card-star" aria-pressed=${h} title=${o(h?"lib_fav_remove":"lib_fav_add")} @click=${()=>e.toggleFavourite(i.type)}>${h?"\u2605":"\u2606"}</button>
    ${n.card.entries.length>1?m`<div class="nf-card-sizes" role="group" aria-label=${o("lib_sizes")}>
          ${n.card.entries.map(d=>m`<button class="nf-size" aria-pressed=${d===i} @click=${()=>e.pick(n.card,d.type)}>${rh(d,n.card.entries)}</button>`)}
        </div>`:g}
  </div>`}function hh(t,e,n,r){return m`<div class="nf-cards">${n.map(o=>L_(t,e,o,r))}</div>`}function Ks(t,e,n,r,o,i,s){if(o.length===0)return g;let a=e.isOpen(n,s);return m`<button class="nf-lib-head nf-lib-toggle" aria-expanded=${a} @click=${()=>e.toggle(n,s)}>
      <span class="nf-lib-caret">${a?"\u25BE":"\u25B8"}</span>${r} <span class="nf-lib-count">${o.length}</span>
    </button>
    ${a?hh(t,e,o,i):g}`}function dh(t,e){return t.flatMap(n=>{let r=e.find(o=>o.card.entries.some(i=>i.type===n));return r?[{...r,card:{...r.card,key:`one:${n}`,entries:r.card.entries.filter(o=>o.type===n)}}]:[]})}function C_(t){let e=Ws(t),n=Cs(t),r=o=>o===e?0:n?.has(o)?1:2;return[...Qd].sort((o,i)=>r(o)-r(i))}function ph(t,e,n,r){let o=t.t;vt.packs=r.packs;let i=D_(t,r.packs),s=sh(e.query),a=Cs(n),l=!!a&&e.has("room")&&s.length===0,c=i.filter(d=>{let p=d.card.entries[0];return l&&!a.has(d.card.category)||e.has("linkable")&&!p.lamp&&!p.electric||e.has("lit")&&!p.lamp||e.has("outdoor")&&!eh(d.card.category)?!1:s.length===0||I_(d,s)}),u=(d,p)=>m`<button class="nf-chip nf-lib-chip" aria-pressed=${e.has(d)} @click=${()=>e.flip(d)}>${p}</button>`,h=s.length>0;return m`<section>
      <h3>${o("furniture_add")}</h3>
      <p class="nf-sub">${n?o("furniture_into",{room:n}):o("furniture_pick_room")}</p>
      <button class="nf-btn nf-lib-studio" title=${o("studio_hint")} @click=${()=>r.studio()}>🛠️ ${o("studio_new")}</button>
      <input
        class="nf-search"
        type="search"
        placeholder=${o("furniture_search")}
        .value=${e.query}
        @input=${d=>e.query=d.target.value}
        @keydown=${d=>d.key==="Escape"&&(e.query="")}
      />
      <div class="nf-lib-chips">
        ${a?u("room",o("lib_for_room",{room:n??""})):g} ${u("linkable",`\u26A1 ${o("lib_linkable")}`)} ${u("lit",`\u{1F4A1} ${o("lib_lit")}`)}
        ${u("outdoor",`\u{1F333} ${o("lib_outdoor")}`)}
      </div>
      ${h&&c.length===0?m`<p class="nf-sub">${o("furniture_search_none")}</p>`:g}
      ${h?hh(t,e,c,r):m`${Ks(t,e,"favourites",`\u2605 ${o("lib_favourites")}`,dh(e.favourites,i),r,!0)}
          ${Ks(t,e,"recent",`\u{1F558} ${o("lib_recent")}`,dh(e.recent.slice(0,6),i),r,!1)}
          ${C_(n).map(d=>Ks(t,e,d,o(`lib_cat_${d}`),c.filter(p=>p.card.category===d),r,d===(Ws(n)??"lights")))}
          ${l?m`<button class="nf-btn nf-lib-all" @click=${()=>e.flip("room")}>${o("lib_all_rooms")}</button>`:g}`}
    </section>`}function fh(t,e){return e?m`<div class="nf-preview" style="left:${e.left}px;top:${e.top}px" aria-hidden="true">
    ${e.url?m`<img src=${e.url} alt="" />`:m`<span class="nf-preview-wait"></span>`}
    <b>${Je(t.hass,e.type)}</b>
  </div>`:g}function Gs(t,e,n,r=24){let o=Math.hypot(e[0]-t[0],e[1]-t[1]);if(o<1e-6||Math.abs(n)<1e-4)return[];let i=Math.max(-o*2,Math.min(o*2,n)),s=[(e[0]-t[0])/o,(e[1]-t[1])/o],a=[s[1],-s[0]],l=o*o/4/(2*Math.abs(i))+Math.abs(i)/2,c=2*Math.atan(2*Math.abs(i)/o),u=Math.max(2,Math.min(r,Math.ceil(2*c/Math.PI*180/11.25))),h=[a[0]*Math.sign(i),a[1]*Math.sign(i)],d=[(t[0]+e[0])/2,(t[1]+e[1])/2],p=[d[0]-h[0]*(l-Math.abs(i)),d[1]-h[1]*(l-Math.abs(i))],f=[];for(let _=1;_<u;_++){let y=-c+2*c*_/u;f.push([p[0]+l*(h[0]*Math.cos(y)+s[0]*Math.sin(y)),p[1]+l*(h[1]*Math.cos(y)+s[1]*Math.sin(y))])}return f}var Us=t=>t.reduce((e,n,r)=>r?e+Math.hypot(n[0]-t[r-1][0],n[1]-t[r-1][1]):e,0);function js(t,e){let n=Math.max(0,e);for(let r=0;r+1<t.length;r++){let o=Math.hypot(t[r+1][0]-t[r][0],t[r+1][1]-t[r][1]);if(n<=o||r+2===t.length)return{piece:r,offset:Math.min(n,o)};n-=o}return{piece:0,offset:0}}var ye=t=>Math.round(t*1e3)/1e3,Zs=t=>t.map(([e,n])=>[ye(e),ye(n)]);function mh(t,e){return{id:L("room"),name:e,area_id:null,points:Zs(t),floor_material:"wood"}}function gh(t){return{...structuredClone(t),id:L("room"),points:Zs(t.points.map(([e,n])=>[e+.5,n+.5]))}}function _h(t,e){let n=t.rooms.find(r=>r.id===e);t.rooms=t.rooms.filter(r=>r.id!==e),t.openings=t.openings.filter(r=>r.room_id!==e||r.wall),n&&(t.placements=t.placements.filter(r=>!C([r.x,r.z],n.points)))}function bh(t,e,n){let r=t.rooms.find(s=>s.id===e);if(!r||r.points.length<=3)return!1;let o=(n-1+r.points.length)%r.points.length;r.points.splice(n,1),r.wall_heights?.splice(n,1),r.wall_slopes?.splice(n,1),r.wall_thickness?.splice(n,1);let i=s=>s.room_id===e&&!s.wall;return t.openings=t.openings.filter(s=>!(i(s)&&(s.edge===n||s.edge===o))).map(s=>i(s)&&s.edge>n?{...s,edge:s.edge-1}:s),!0}function yh(t,e,n){if(!Number.isFinite(n))return null;let r=se(t.points),{x0:o,z0:i,x1:s,z1:a}=r;return e==="x"?[o,s]=[n,n+(s-o)]:e==="z"?[i,a]=[n,n+(a-i)]:n>.05&&(e==="w"?s=o+n:a=i+n),Zs([[o,i],[s,i],[s,a],[o,a]])}function wh(t,e,n,r){return!Number.isFinite(r)||e<0||e>=t.points.length?null:t.points.map((o,i)=>i===e?n===0?[ye(r),o[1]]:[o[0],ye(r)]:[o[0],o[1]])}var W_=/^(Raum|Room) \d+$/;function vh(t,e,n){let r=e?n[e]:void 0,o=!t.name||W_.test(t.name)||Object.values(n).some(i=>i.name===t.name);return{area_id:e||null,...r&&o?{name:r.name}:{}}}function kh(t,e){let n=e.filter(l=>U(l.entity_id)==="light"&&(l.mount??"ceiling")==="ceiling"&&C([l.x,l.z],t.points));if(n.length<2)return[];let r=se(t.points),[o,i]=[r.x1-r.x0,r.z1-r.z0],s=Math.max(1,Math.round(Math.sqrt(n.length*o/Math.max(.1,i)))),a=Math.ceil(n.length/s);return n.map((l,c)=>{let u=Math.floor(c/s),h=u===a-1?n.length-s*(a-1):s,d=c-u*s;return{entityId:l.entity_id,x:ye(r.x0+o/h*(d+.5)),z:ye(r.z0+i/a*(u+.5))}})}function qs(t,e,n,r){let o=t.rooms.find(u=>u.id===e);if(!o)return;let i=o.points[n],s=o.points[(n+1)%o.points.length];o.points.splice(n+1,0,r);let[a,l]=[o.wall_heights?.[n],o.wall_slopes?.[n]];if(typeof a=="number"&&typeof l=="number"&&o.wall_slopes){let u=Math.hypot(s[0]-i[0],s[1]-i[1]),h=ye(a+(l-a)*Math.min(1,Math.hypot(r[0]-i[0],r[1]-i[1])/(u||1)));o.wall_slopes.splice(n,1,h,l),o.wall_heights.splice(n+1,0,h)}else o.wall_heights?.splice(n+1,0,o.wall_heights[n]??null),o.wall_slopes?.splice(n+1,0,null);o.wall_thickness?.splice(n+1,0,o.wall_thickness[n]??null);let c=Math.hypot(r[0]-i[0],r[1]-i[1]);for(let u of t.openings)u.room_id!==e||u.wall||(u.edge>n?u.edge+=1:u.edge===n&&u.offset>c&&(u.edge=n+1,u.offset=ye(u.offset-c)))}var B_=22.5;function xh(t,e,n){let r=Math.min(Math.abs(e),t*2),o=t*(1+8/3*(r/Math.max(1e-6,t))**2),i=4*Math.atan(2*r/Math.max(1e-6,t))*180/Math.PI,s=Math.max(2,Math.ceil(i/B_));if(n<=0)return 24;let a=Math.floor(o/(n+.1));return a>=s?a:0}function V_(t,e,n,r){let o=Us(n);t.forEach((i,s)=>{let{piece:a,offset:l}=js(n,e[s]*o),c=Math.hypot(n[a+1][0]-n[a][0],n[a+1][1]-n[a][1]);i.edge=r+a,i.offset=ye(c>i.width?Math.min(c-i.width/2,Math.max(i.width/2,l)):c/2)})}function $h(t,e,n,r){let o=t.rooms.find(v=>v.id===e);if(!o||n<0||n>=o.points.length||Math.abs(r)<.01)return!1;let i=o.points[n],s=o.points[(n+1)%o.points.length],a=Math.hypot(s[0]-i[0],s[1]-i[1]);if(a<.2)return!1;let[l,c]=[(s[0]-i[0])/a,(s[1]-i[1])/a],u=[(i[0]+s[0])/2+c*.02,(i[1]+s[1])/2-l*.02],d=C(u,o.points)?-r:r,p=(v,w)=>t.openings.filter(k=>k.room_id===v.id&&!k.wall&&k.edge===w),f=t.rooms.flatMap(v=>v.points.map((w,k)=>{let x=v.points[(k+1)%v.points.length],E=(A,F)=>Math.abs(A[0]-F[0])<.001&&Math.abs(A[1]-F[1])<.001;return E(w,i)&&E(x,s)?[v,k,!1]:E(w,s)&&E(x,i)?[v,k,!0]:null}).filter(w=>!!w)),_=Math.max(0,...f.flatMap(([v,w])=>p(v,w).map(k=>k.width))),y=xh(a,r,_);if(!y)return!1;let b=Gs(i,s,d,y).map(([v,w])=>[ye(v),ye(w)]);if(!b.length)return!1;for(let[v,w,k]of f){let x=k?[...b].reverse():b,E=p(v,w),A=v.points[w],F=E.map(P=>Math.min(1,Math.max(0,P.offset/a)));for(let P of E)P.edge=-1;x.forEach((P,I)=>qs(t,v.id,w+I,P)),v.wall_splits?.splice(w+1,0,...x.map(()=>null)),v.wall_splits?.[w]&&(v.wall_splits[w]=null),V_(E,F,[A,...x,v.points[(w+x.length+1)%v.points.length]],w)}return!0}function Sh(t,e,n){let r=t.walls??[],o=r.findIndex(f=>f.id===e);if(o<0||Math.abs(n)<.01)return[];let i=r[o],s=Math.hypot(i.b[0]-i.a[0],i.b[1]-i.a[1]),a=t.openings.filter(f=>f.wall===e),l=Math.max(0,...a.map(f=>f.width)),c=xh(s,n,l);if(!c)return[];let u=Gs(i.a,i.b,n,c).map(([f,_])=>[ye(f),ye(_)]);if(!u.length)return[];let h=[i.a,...u,i.b],d=h.slice(1).map((f,_)=>({...i,id:_===0?i.id:L("wall"),a:h[_],b:f}));r.splice(o,1,...d),t.walls=r;let p=Us(h);for(let f of a){let{piece:_,offset:y}=js(h,f.offset/s*p),b=Math.hypot(h[_+1][0]-h[_][0],h[_+1][1]-h[_][1]);f.wall=d[_].id,f.offset=ye(b>f.width?Math.min(b-f.width/2,Math.max(f.width/2,y)):b/2)}return d.map(f=>f.id)}var vn=t=>Math.round(t*1e3)/1e3;function Do(t,e,n){return[Math.round((e[0]-t[0])/n)*n,Math.round((e[1]-t[1])/n)*n]}var Nt=(t,e)=>e?.01:t,kn=(t,e,n=5)=>Math.hypot(t[0]-e[0],t[1]-e[1])>=n;function Mh(t,e,n){return n?Math.abs(e[0]-t[0])>Math.abs(e[1]-t[1])?[e[0],t[1]]:[t[0],e[1]]:e}var He=(t,e)=>[vn(t[0]+e[0]),vn(t[1]+e[1])];function Ys(t,e,n,r){return[vn(Math.round((t[0]+n[0]-e[0])/r)*r),vn(Math.round((t[1]+n[1]-e[1])/r)*r)]}function Xs(t,e,n){let r=Math.atan2(-(e[0]-t[0]),e[1]-t[1])*180/Math.PI;return(Math.round(r/n)*n%360+360)%360}function Eh(t,e,n){let r=Math.atan2(e[0]-t[0],-(e[1]-t[1]))*180/Math.PI;return Math.round(r/n)*n}function Rh(t,e,n){let r=nn([...t]),o=t[e],i=[vn(n[0]),vn(n[1])];return t.map((s,a)=>a===e?i:r?[Math.abs(s[0]-o[0])<1e-6?i[0]:s[0],Math.abs(s[1]-o[1])<1e-6?i[1]:s[1]]:[s[0],s[1]])}var Io=t=>Math.round(t*1e3)/1e3,Ah=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1]);function N_(t,e,n){let r=null,o=n;for(let i of t){let s=Ah(i,e);s<o&&([r,o]=[i,s])}return r}function K_(t,e,n){let r=null,o=n.reach;for(let i of t)n.skip&&i.id===n.skip.roomId||i.points.forEach((s,a)=>{let l=i.points[(a+1)%i.points.length],[c,u]=[l[0]-s[0],l[1]-s[1]],h=c*c+u*u;if(h<1e-9)return;let d=((e[0]-s[0])*c+(e[1]-s[1])*u)/h;if(d<=0||d>=1)return;let p=[s[0]+d*c,s[1]+d*u],f=Ah(p,e),_=(y,b,v)=>Math.min(Math.max(y,Math.min(b,v)),Math.max(b,v));Math.abs(u)<1e-9&&(p[0]=_(Math.round(p[0]/n.grid)*n.grid,s[0],l[0])),Math.abs(c)<1e-9&&(p[1]=_(Math.round(p[1]/n.grid)*n.grid,s[1],l[1])),f<o&&([r,o]=[p,f])});return r}function G_(t,e,n){let r=[Io(Math.round(e[0]/n.grid)*n.grid),Io(Math.round(e[1]/n.grid)*n.grid)],o={},[i,s]=[n.reach,n.reach];for(let a of t)Math.abs(a[0]-e[0])<i&&(i=Math.abs(a[0]-e[0]),r[0]=a[0],o.x=a[0]),Math.abs(a[1]-e[1])<s&&(s=Math.abs(a[1]-e[1]),r[1]=a[1],o.z=a[1]);return{point:r,guides:o}}function Fh(t,e){let n=e.rooms.flatMap(i=>i.points.filter((s,a)=>!(e.skip&&i.id===e.skip.roomId&&(e.skip.index===void 0||e.skip.index===a)))),r=N_(n,t,e.reach);if(r)return{point:[r[0],r[1]],guides:{point:r}};let o=K_(e.rooms,t,e);return o?{point:[Io(o[0]),Io(o[1])],guides:{point:o}}:G_(n,t,e)}var Ho=(t,e)=>pe(t.host.hass,e);function U_(t,e){let[n,r]=[t.toScreen(e.start),t.toScreen(e.end)];if(e.kind==="freewall"){let s=Math.hypot(e.end[0]-e.start[0],e.end[1]-e.start[1]);return S`<g pointer-events="none">
      <line class="nf-draft nf-draft-wall" x1=${n[0]} y1=${n[1]} x2=${r[0]} y2=${r[1]} />
      <text class="nf-dim" x=${(n[0]+r[0])/2} y=${(n[1]+r[1])/2-10}>${Ho(t,s)}</text>
    </g>`}let[o,i]=[Math.abs(e.end[0]-e.start[0]),Math.abs(e.end[1]-e.start[1])];return S`<g pointer-events="none">
    <rect class="nf-draft" x=${Math.min(n[0],r[0])} y=${Math.min(n[1],r[1])} width=${Math.abs(r[0]-n[0])} height=${Math.abs(r[1]-n[1])} />
    <text class="nf-dim" x=${(n[0]+r[0])/2} y=${Math.min(n[1],r[1])-8}>${Ho(t,o)} × ${Ho(t,i)}</text>
  </g>`}function j_(t,e,n,r){let o=[...e,...n?[n]:[]].map(u=>t.toScreen(u)),i=e.length>=3,s=r?e.slice(1).map((u,h)=>{let[d,p]=[t.toScreen(e[h]),t.toScreen(u)];return S`<text class="nf-dim" x=${(d[0]+p[0])/2} y=${(d[1]+p[1])/2-6}>${Ho(t,Math.hypot(u[0]-e[h][0],u[1]-e[h][1]))}</text>`}):g,a=e.map((u,h)=>{let[d,p]=t.toScreen(u),f=h===0&&i;return S`<circle class=${f?"nf-draft-pt nf-draft-first":"nf-draft-pt"} cx=${d} cy=${p} r=${f?9:5} />`}),[l,c]=n?t.toScreen(n):[0,0];return S`<g pointer-events="none">
    ${o.length>1?S`<polyline class="nf-draft" points=${o.map(u=>u.join(",")).join(" ")} />`:g}
    ${s}${a}
    ${n?S`<circle class="nf-cursor" cx=${l} cy=${c} r="4" />`:g}
  </g>`}function zh(t,e,n){let r=e.x!==void 0?t.toScreen([e.x,0])[0]:null,o=e.z!==void 0?t.toScreen([0,e.z])[1]:null,[i,s]=e.point?t.toScreen(e.point):[0,0];return S`<g pointer-events="none">
    ${r!==null?S`<line class="nf-guide" x1=${r} y1="0" x2=${r} y2=${n.h} />`:g}
    ${o!==null?S`<line class="nf-guide" x1="0" y1=${o} x2=${n.w} y2=${o} />`:g}
    ${e.point?S`<circle class="nf-snap" cx=${i} cy=${s} r="9" />`:g}
  </g>`}function Ph(t,e,n,r,o){return e?U_(t,e):n!=="polygon"&&n!=="measure"?g:j_(t,r,o,n==="measure")}var ne=(t,e,n,r,o="")=>S`<rect class=${o} x=${Math.min(t,n)} y=${Math.min(e,r)} width=${Math.abs(n-t)} height=${Math.abs(r-e)} />`,q=(t,e,n,r,o="")=>S`<line class=${o} x1=${t} y1=${e} x2=${n} y2=${r} />`,Oh=(t,e="")=>S`<polygon class=${e} points=${t.map(n=>n.join(",")).join(" ")} />`,ee=(t,e,n,r="")=>S`<circle class=${r} cx=${t} cy=${e} r=${n} />`,Qs=(t,e,n,r,o="")=>S`<ellipse class=${o} cx=${t} cy=${e} rx=${n} ry=${r} />`;function Js(t,e,n){let r=[];for(let o=1;o<n;o++){let i=-t/2+t/n*o;r.push(q(i,e/2,i,e/2-Math.min(.12,e*.3)))}return r}function Th(t,e,n,r){let o=Math.min(.24,e*.28),i=r?Math.min(.2,t*.12):0,s=[ne(-t/2,-e/2,t/2,-e/2+o,"nf-sym-fill")];r&&s.push(ne(-t/2,-e/2,-t/2+i,e/2,"nf-sym-fill"),ne(t/2-i,-e/2,t/2,e/2,"nf-sym-fill"));let a=t-2*i;for(let l=1;l<n;l++){let c=-t/2+i+a/n*l;s.push(q(c,-e/2+o,c,e/2-.02))}return s}function Dh(t,e,n,r){if(t==="stairs"&&r?.stair)return Z_(r,e,n);switch(t){case"sofa":return Th(e,n,Math.max(1,Math.round((e-.4)/.62)),!0);case"armchair":return Th(e,n,1,!0);case"bench":return[ne(-e/2,-n/2,e/2,-n/2+.08,"nf-sym-fill")];case"corner_bench":{let o=Math.min(.5,n*.4);return[ne(-e/2,-n/2,e/2,-n/2+.08,"nf-sym-fill"),ne(-e/2,-n/2,-e/2+.08,n/2,"nf-sym-fill"),q(-e/2+o,-n/2+o,e/2,-n/2+o),q(-e/2+o,-n/2+o,-e/2+o,n/2)]}case"chair":return[ne(-e/2,-n/2,e/2,-n/2+.06,"nf-sym-fill")];case"office_chair":return[ee(0,.03,Math.min(e,n)*.36),ne(-e*.35,-n/2+.02,e*.35,-n/2+.1,"nf-sym-fill")];case"bar_stool":case"table_round":return[ee(0,0,Math.min(e,n)*.42)];case"stool":return[ne(-e/2+.04,-n/2+.04,e/2-.04,n/2-.04)];case"table":case"coffee_table":case"desk":{let o=[ne(-e/2+.05,-n/2+.05,e/2-.05,n/2-.05)];return t==="desk"&&o.push(q(-.3,-n/2+.1,.3,-n/2+.1,"nf-sym-strong")),o}case"bed":case"bunk_bed":{let o=e>1.2?2:1,i=(e-.2)/o,s=[ne(-e/2,-n/2,e/2,-n/2+.07,"nf-sym-fill"),q(-e/2,-n/2+(n-.1)*.36,e/2,-n/2+(n-.1)*.36)];for(let a=0;a<o;a++)s.push(ne(-e/2+.13+i*a,-n/2+.12,-e/2+.07+i*(a+1),-n/2+.12+Math.min(.4,n*.18)));return s}case"nightstand":case"wardrobe":case"dresser":case"sideboard":case"tall_cabinet":case"kitchen":case"kitchen_wall":case"kitchen_tall":case"shelf":return Js(e,n,t==="nightstand"||t==="tall_cabinet"||t==="kitchen_tall"?1:Math.max(2,Math.round(e/.5)));case"coat_rack":return[ne(-e/2,-n/2,e/2,-n/2+.03,"nf-sym-fill"),...Js(e,n,Math.max(2,Math.round(e/.5)))];case"island":return[q(-e/2,n/2-.3,e/2,n/2-.3)];case"fridge":return[q(-e/2+.06,n/2-.04,e/2-.06,n/2-.04,"nf-sym-strong")];case"stove":{let o=Math.min(e,n)*.14;return[ee(-e*.22,-n*.2,o),ee(e*.22,-n*.2,o*.8),ee(-e*.22,n*.2,o*.8),ee(e*.22,n*.2,o)]}case"sink":{let o=Math.min(.5,e-.2);return[ne(-o/2,-n/2+.1,o/2,n/2-.08),ee(0,-n/2+.06,.025,"nf-sym-fill")]}case"dishwasher":return[q(-e/2+.08,n/2-.05,e/2-.08,n/2-.05,"nf-sym-strong")];case"washer":case"dryer":return[ee(0,.05,Math.min(e,n)*.3),q(-e/2,-n/2+.1,e/2,-n/2+.1)];case"bathtub":return[ne(-e/2+.07,-n/2+.07,e/2-.07,n/2-.07),ee(-e/2+.14,0,.03,"nf-sym-fill")];case"shower":return[q(-e/2,-n/2,e/2,n/2),q(e/2,-n/2,-e/2,n/2),ee(0,0,.04)];case"wc":return[ne(-e/2,-n/2,e/2,-n/2+Math.min(.18,n*.3),"nf-sym-fill"),Qs(0,n*.1,e*.36,n*.3)];case"washbasin":return[Qs(0,.03,e*.34,n*.3)];case"tv_board":return[q(-Math.min(e*.4,.72),-n/2+.14,Math.min(e*.4,.72),-n/2+.14,"nf-sym-strong"),...Js(e,n,Math.max(2,Math.round(e/.6)))];case"tv_wall":return[q(-e/2,0,e/2,0,"nf-sym-strong")];case"lamp_downlight":case"lamp_spot":return[ee(0,0,Math.min(e,n)*.45,"nf-sym-fill"),ee(0,0,Math.min(e,n)*1.4)];case"lamp_bollard":case"lamp_garden":return[ee(0,0,Math.min(e,n)*.5,"nf-sym-fill"),ee(0,0,Math.min(e,n)*1.6)];case"parking":return[ne(-e/2+.08,-n/2+.08,e/2-.08,n/2-.08),q(-e*.15,n/2-.5,0,n/2-.22,"nf-sym-strong"),q(0,n/2-.22,e*.15,n/2-.5,"nf-sym-strong")];case"robot_vacuum":return[ne(-e*.45,-n/2,e*.45,-n/2+n*.3,"nf-sym-fill"),ee(0,n*.14,Math.min(e,n)*.47)];case"radiator":{let o=[],i=Math.max(3,Math.round(e/.1));for(let s=1;s<i;s++)o.push(q(-e/2+e/i*s,-n/2,-e/2+e/i*s,n/2));return o}case"lamp_panel":return[ne(-e/2+.03,-n/2+.03,e/2-.03,n/2-.03,"nf-sym-fill")];case"lamp_uplight":case"lamp_ceiling":case"lamp_pendant":case"lamp_floor":case"lamp_table":{let o=Math.min(e,n)/2,i=[ee(0,0,o*.9,"nf-sym-fill"),ee(0,0,o*.3)];if(t==="lamp_ceiling"||t==="lamp_pendant")for(let s=0;s<8;s++){let a=s/8*Math.PI*2;i.push(q(Math.cos(a)*o*1.05,Math.sin(a)*o*1.05,Math.cos(a)*o*1.35,Math.sin(a)*o*1.35))}return i}case"ceiling_fan":{let o=Math.min(e,n)/2,i=[ee(0,0,.11,"nf-sym-fill")];for(let s=0;s<5;s++){let a=s/5*Math.PI*2;i.push(q(Math.cos(a)*.12,Math.sin(a)*.12,Math.cos(a)*o*.97,Math.sin(a)*o*.97,"nf-sym-strong"))}return[...i,ee(0,0,o)]}case"lamp_wall":return[ne(-e/2,-n/2,e/2,-n/2+.03,"nf-sym-fill"),Qs(0,.01,e*.4,n*.4)];case"led_strip":return[q(-e/2,0,e/2,0,"nf-sym-strong")];case"plant":return[ee(0,0,Math.min(e,n)*.46),ee(0,0,Math.min(e,n)*.25)];case"rug":return[ne(-e/2+.1,-n/2+.1,e/2-.1,n/2-.1)];case"stairs":{let o=Math.max(3,Math.round(n/.26)),i=[];for(let s=1;s<o;s++)i.push(q(-e/2,n/2-n/o*s,e/2,n/2-n/o*s));return i.push(q(0,n/2-.1,0,-n/2+.25,"nf-sym-strong"),q(-.15,-n/2+.45,0,-n/2+.25,"nf-sym-strong"),q(.15,-n/2+.45,0,-n/2+.25,"nf-sym-strong")),i}default:{let o=K(t);return o?q_(o,e,n):g}}}function Z_(t,e,n){let r=xr(t),o=wn(r,e,n,t.h),i=r.down?"nf-sym-dash":"",s=o.treads.map(l=>Oh(l.poly,l.landing?`nf-sym-fill ${i}`:i));o.column>0&&s.push(ee(0,0,o.column,"nf-sym-fill"));let a=o.treads.map(Ro);for(let l=1;l<a.length;l++)s.push(q(a[l-1][0],a[l-1][1],a[l][0],a[l][1],"nf-sym-strong"));if(a.length&&s.unshift(ee(a[0][0],a[0][1],.05,"nf-sym-fill")),a.length>=2){let[l,c]=[a[a.length-2],a[a.length-1]],u=Math.hypot(c[0]-l[0],c[1]-l[1])||1,[h,d]=[(c[0]-l[0])/u,(c[1]-l[1])/u],p=Math.min(.2,o.flight*.3);for(let f of[-1,1])s.push(q(c[0],c[1],c[0]-h*p+d*p*.6*f,c[1]-d*p-h*p*.6*f,"nf-sym-strong"))}return s}function q_(t,e,n){return t.symbol?.length?t.symbol.map(r=>r.shape==="rect"?ne((r.x-r.w/2)*e,(r.z-r.d/2)*n,(r.x+r.w/2)*e,(r.z+r.d/2)*n,r.fill?"nf-sym-fill":""):r.shape==="circle"?ee(r.x*e,r.z*n,r.r*Math.min(e,n)):q(r.x1*e,r.z1*n,r.x2*e,r.z2*n)):nl(t,e,n,t.size[2]).filter(r=>r.shape==="sweep"||r.w<.98||r.d<.98).map(r=>r.shape==="sweep"&&r.stations?.length?Oh([...r.stations.map(o=>[(r.x+o[3]/2)*e,o[0]*n]),...[...r.stations].reverse().map(o=>[(r.x-o[3]/2)*e,o[0]*n])]):r.shape==="cyl"&&(r.axis??"y")==="y"?ee(r.x*e,r.z*n,Math.min(r.w*e,r.d*n)/2):ne((r.x-r.w/2)*e,(r.z-r.d/2)*n,(r.x+r.w/2)*e,(r.z+r.d/2)*n))}var ea=Math.PI/180,Ih=(t,e,n,r)=>{let[o,i]=r,s=S`<path d="M${o-4} ${i-1}a4 4 0 1 1 2 3.5" />`,a=S`<line x1=${n[0]} y1=${n[1]} x2=${o} y2=${i} /><circle cx=${o} cy=${i} r="16" class="nf-hit" /><circle cx=${o} cy=${i} r="8" />${s}`;return t==="data-rotate"?S`<g class="nf-rotate" data-rotate=${e}>${a}</g>`:S`<g class="nf-rotate" data-aim=${e}>${a}</g>`};function Y_(t,e){let n=e.rotation*ea;return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([r,o])=>{let[i,s]=t.toScreen([e.x+r*e.w*Math.cos(n)/2-o*e.d*Math.sin(n)/2,e.z+r*e.w*Math.sin(n)/2+o*e.d*Math.cos(n)/2]);return S`<g class="nf-resize" data-resize=${`${e.id}:${r}:${o}`}><circle cx=${i} cy=${s} r="14" class="nf-hit" /><rect x=${i-5} y=${s-5} width="10" height="10" rx="2" /></g>`})}function Hh(t,e,n){let{host:r,scale:o}=t,i=s=>{let a=s.id===n,l=a&&r.admin&&!s.locked,[c,u]=t.toScreen([s.x,s.z]),h=s.rotation*ea,d=Math.min(s.w,s.d)*o>44,p=le(s.type)&&!!s.entity&&s.entity!=="none"&&r.hass?.states[s.entity]?.state==="on",f=Ee.includes(s.type),_=`nf-furn${a?" nf-furn-sel":""}${p?" nf-furn-lit":""}${f?" nf-energy-item":""}`,y=s.d/2+Math.max(.3,26/o),b=t.toScreen([s.x-Math.sin(h)*y,s.z+Math.cos(h)*y]),v=t.toScreen([s.x-Math.sin(h)*(s.d/2),s.z+Math.cos(h)*(s.d/2)]),[w,k]=t.toScreen([s.x+Math.sin(h)*(s.d/2+18/o),s.z-Math.cos(h)*(s.d/2+18/o)]);return S`<g data-furniture=${s.id} class=${_}>
        <g transform="translate(${c} ${u}) rotate(${s.rotation}) scale(${s.mirror?-o:o} ${o})">
          <rect class="nf-furn-body" x=${-s.w/2} y=${-s.d/2} width=${s.w} height=${s.d} />
          <g class="nf-furn-sym">${Dh(s.type,s.w,s.d,s)}</g>
          <line class="nf-furn-front" x1=${-s.w/2} y1=${s.d/2} x2=${s.w/2} y2=${s.d/2} />
        </g>
        ${d?S`<text x=${c} y=${u+4}>${Je(r.hass,s.type)}</text>`:g}
      </g>
      ${l?Y_(t,s):g}
      ${a?S`<text class="nf-dim" x=${w} y=${k+4}>${pe(r.hass,s.w)} × ${pe(r.hass,s.d)}</text>`:g}
      ${a&&s.locked?S`<text class="nf-lock" x=${b[0]} y=${b[1]+5}>🔒</text>`:g}
      ${l?Ih("data-rotate",s.id,v,b):g}`};return S`<g>${e.furniture.map(i)}</g>`}function Lh(t,e,n){let{host:r}=t,o=i=>{let s=U(i.entity_id)??(r.hass?je(r.hass,i.entity_id):null);if(!s)return g;let[a,l]=t.toScreen([i.x,i.z]),c=r.hass?.states[i.entity_id]?.state==="on",u=i.entity_id===n,h=(i.rotation??0)*ea,d=u&&r.admin&&!i.locked&&Nl(i.entity_id,r.hass?.states[i.entity_id]),p=[a-Math.sin(h)*46,l+Math.cos(h)*46],f=fn(r,i.entity_id,i.icon);return S`${d?Ih("data-aim",i.entity_id,[a,l],p):g}<g data-device=${i.entity_id} class=${`nf-device${c?" nf-device-on":""}${u?" nf-device-sel":""}`} transform="translate(${a} ${l})">
        <title>${V(r.hass,i.entity_id)}</title>
        <circle r="18" class="nf-hit" /><circle r="12" />
        ${f?S`<foreignObject class="nf-device-icon" x="-8" y="-8" width="16" height="16"><ha-icon icon=${f}></ha-icon></foreignObject>`:S`<path d=${wt(s)} transform="translate(-7.2 -7.2) scale(0.6)" />`}
      </g>
      ${u&&i.locked?S`<text class="nf-lock" x=${a+16} y=${l-12}>🔒</text>`:g}`};return S`<g>${e.placements.map(o)}</g>`}function X_(t,e,n,r){let o=it(e,n.rooms,n.walls??[]);if(!o)return null;let{room:i,edge:s}=o,a=eo(r,e,o),l=ln(i,s,e.offset-e.width/2),c=ln(i,s,e.offset+e.width/2),u=[(c[0]-l[0])/(e.width||1),(c[1]-l[1])/(e.width||1)],h=he(i.points)>=0?1:-1,d=[-u[1]*h,u[0]*h],p=[.06,.06];return a&&(p=a.wall.free||a.wall.roomLeft===i.id?[a.wall.left,a.wall.right]:[a.wall.right,a.wall.left]),{room:i,edge:s,p0:l,p1:c,inward:d,direction:h,across:p,exterior:a?.wall.exterior??!1,at:(f,_)=>t.toScreen([f[0]+d[0]*_,f[1]+d[1]*_])}}var ut=(t,e,n="")=>S`<line class=${n} x1=${t[0]} y1=${t[1]} x2=${e[0]} y2=${e[1]} />`;function Q_(t,e){let n=t.across[0]-.04,r=t.across[0]+Math.min(2,e.height),[o,i,s,a]=[t.at(t.p0,n),t.at(t.p1,n),t.at(t.p0,r),t.at(t.p1,r)];return S`${ut(o,i)}<path class="nf-open-track" d="M${o[0]} ${o[1]}L${s[0]} ${s[1]}M${i[0]} ${i[1]}L${a[0]} ${a[1]}" />`}function J_(t,e,n){let r=n.swing==="out",o=r?-e.across[1]:e.across[0],i=(e.across[0]-e.across[1])/2,s=n.hinge==="left"==e.direction>0,a=Jt(n,e.exterior),l=n.leaves===2,[c,u]=[e.p0,e.p1],h=[],d=Dl(n.width,a,s,n);if(d){let v=w=>w<=.02?e.p0:w>=n.width-.02?e.p1:ln(e.room,e.edge,n.offset-n.width/2+w);[c,u]=[v(d.x0),v(d.x1)],h=d.panels.map(([w,k])=>[v(w),v(k)])}let p=[(c[0]+u[0])/2,(c[1]+u[1])/2],f=(l?.5:1)*Math.hypot(u[0]-c[0],u[1]-c[1]),_=h.map(([v,w])=>S`${ut(e.at(v,i+.035),e.at(w,i+.035),"nf-open-pane")}${ut(e.at(v,i-.035),e.at(w,i-.035),"nf-open-pane")}`),y=(v,w)=>{let[k,x]=e.at(v,o),[E,A]=e.at(w,o),F=e.at(v,o+(r?-f:f)),P=f*t.scale,I=(F[0]-k)*(A-x)-(F[1]-x)*(E-k)>0?1:0;return S`<path d="M${k} ${x}L${F[0]} ${F[1]}A${P} ${P} 0 0 ${I} ${E} ${A}" />`},b;return a==="passage"?b=ut(e.at(e.p0,i),e.at(e.p1,i),"nf-open-passage"):a==="sliding"?b=ut(e.at(c,o),e.at(u,o)):l?b=S`${y(c,p)}${y(u,p)}`:b=s?y(c,u):y(u,c),S`${_}${b}`}function eb(t,e){let n=(t.across[0]-t.across[1])/2;if(e.opens==="slide"){let o=e.leaves===2?4:2,i=a=>[t.p0[0]+(t.p1[0]-t.p0[0])*a,t.p0[1]+(t.p1[1]-t.p0[1])*a],s=Array.from({length:o},(a,l)=>{let c=e.leaves===2?l===1||l===2?.035:-.035:l===0?.035:-.035;return ut(t.at(i(Math.max(0,l/o-.03)),n+c),t.at(i(Math.min(1,(l+1)/o+.03)),n+c))});return S`${s}`}let r=e.leaves===2?ut(t.at([(t.p0[0]+t.p1[0])/2,(t.p0[1]+t.p1[1])/2],t.across[0]),t.at([(t.p0[0]+t.p1[0])/2,(t.p0[1]+t.p1[1])/2],-t.across[1])):g;return S`${ut(t.at(t.p0,n+.035),t.at(t.p1,n+.035))}${ut(t.at(t.p0,n-.035),t.at(t.p1,n-.035))}${r}`}function Ch(t,e,n,r){let o=i=>{let s=X_(t,i,e,n);if(!s)return g;let a=[s.at(s.p0,s.across[0]+.01),s.at(s.p1,s.across[0]+.01),s.at(s.p1,-s.across[1]-.01),s.at(s.p0,-s.across[1]-.01)],l=i.type==="door"&&xi(Jt(i,s.exterior)),c=`nf-open nf-open-${i.type}${l?" nf-open-front":""}${i.id===r?" nf-open-sel":""}`,u=i.type==="garage"?Q_(s,i):i.type==="door"?J_(t,s,i):eb(s,i);return S`<g data-opening=${i.id} class=${c}><polygon class="nf-open-gap" points=${a.map(h=>h.join(",")).join(" ")} />${u}</g>`};return S`<g>${e.openings.map(o)}</g>`}var Lo=(t,e,n=6)=>S`<circle cx=${t} cy=${e} r="16" class="nf-hit" /><circle cx=${t} cy=${e} r=${n} />`;function Wh(t,e){let{scale:n}=t,r=n>=90?.1:n>=30?.5:1,o=n>=20?1:5,i=t.toWorld(0,0),s=t.toWorld(e.w,e.h),a=[],l=(h,d)=>{for(let p=Math.ceil(i[0]/h)*h;p<=s[0];p+=h){let f=t.toScreen([p,0])[0];a.push(S`<line class=${d} x1=${f} y1="0" x2=${f} y2=${e.h} />`)}for(let p=Math.ceil(i[1]/h)*h;p<=s[1];p+=h){let f=t.toScreen([0,p])[1];a.push(S`<line class=${d} x1="0" y1=${f} x2=${e.w} y2=${f} />`)}};r<o&&l(r,"nf-grid-minor"),l(o,"nf-grid-major");let[c,u]=t.toScreen([0,0]);return a.push(S`<circle class="nf-origin" cx=${c} cy=${u} r="3" />`),S`<g pointer-events="none">${a}</g>`}function Bh(t){let e=t.host.doc.floors,n=e.findIndex(i=>i.id===t.floorId),r=n>0?e[n-1]:void 0;if(!r)return g;let o=Ol(e,e[n]);return S`<g pointer-events="none">${r.rooms.map(i=>S`<polygon class="nf-ghost" points=${Xe(t,i.points)} />`)}${o.map(i=>S`<polygon class="nf-void" points=${Xe(t,i)} />`)}</g>`}function Vh(t,e){let n=t.host.floor?.height??2.5;return S`<g pointer-events="none">${e.map(r=>{let o=r.height!==void 0&&r.height<n-.01;return S`<polygon class=${`nf-wall${r.exterior?" nf-wall-ext":""}${o?" nf-wall-low":""}`} points=${Xe(t,r.footprint)} />`})}</g>`}function Nh(t,e,n){let r=o=>{let[i,s]=t.toScreen(ke(o.points)),a=se(o.points),l=Math.min(a.x1-a.x0,a.z1-a.z0)*t.scale>40;return S`<g data-outdoor=${o.id} class=${`nf-out nf-out-${o.type}${o.id===n?" nf-out-sel":""}`}>
      <polygon points=${Xe(t,o.points)} />
      ${l?S`<text x=${i} y=${s+4}>${t.host.t(`out_${o.type}`)}</text>`:g}
    </g>`};return S`<g>${e.outdoor.map(r)}</g>`}function Kh(t,e,n){let{host:r}=t;if(!e||!r.admin||n!=="select"||r.doc.settings.lock_plan)return g;let o=e.points;return S`${o.map((i,s)=>xo(t,i,o[(s+1)%o.length],"out",e.id,s))}${o.map((i,s)=>S`<g class="nf-vertex" data-out-vertex=${`${e.id}:${s}`}>${Lo(...t.toScreen(i))}</g>`)}`}function Gh(t,e,n,r){let o=e.rooms.find(s=>s.id===n),i=o&&r!==null&&r<o.points.length?[t.toScreen(o.points[r]),t.toScreen(o.points[(r+1)%o.points.length])]:null;return S`<g>${e.rooms.map(s=>S`<polygon data-room=${s.id} class=${s.id===n?"nf-room nf-room-sel":"nf-room"} points=${Xe(t,s.points)} />`)}</g>
    ${i?S`<line class="nf-edge-hi" pointer-events="none" x1=${i[0][0]} y1=${i[0][1]} x2=${i[1][0]} y2=${i[1][1]} />`:g}
    <g pointer-events="none">${e.rooms.map(s=>{let[a,l]=t.toScreen(ke(s.points));return S`<text class="nf-room-name" x=${a} y=${l-2}>${s.name}</text>
        <text class="nf-room-area" x=${a} y=${l+14}>${To(t.host.hass,Re(s.points))}</text>`})}</g>`}function Uh(t,e){let n=t.host.doc.energy?.meter;if(!n||n.floor_id!==e.id)return g;let[r,o]=t.toScreen([n.x,n.z]);return S`<g class="nf-meter" transform="translate(${r} ${o})" pointer-events="none">
    <rect x="-11" y="-11" width="22" height="22" rx="5" />
    <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
  </g>`}function jh(t,e,n){let{host:r}=t,o=i=>{let[s,a]=[t.toScreen(i.a),t.toScreen(i.b)],l=i.id===n,c=l&&r.admin&&!Br(i,!0,r.doc.settings);return S`<g data-free-wall=${i.id} class=${`nf-free-wall${l?" nf-free-wall-sel":""}`}>
        <line class="nf-hit" x1=${s[0]} y1=${s[1]} x2=${a[0]} y2=${a[1]} />
        <line class="nf-free-wall-line" x1=${s[0]} y1=${s[1]} x2=${a[0]} y2=${a[1]} />
      </g>
      ${c?S`<g class="nf-vertex" data-wall-end=${`${i.id}:a`}>${Lo(s[0],s[1])}</g><g class="nf-vertex" data-wall-end=${`${i.id}:b`}>${Lo(a[0],a[1])}</g>`:g}`};return S`<g>${(e.walls??[]).map(o)}</g>`}function Zh(t,e){let n=e.points,r=(e.wall_splits??[]).flatMap((o,i)=>{if(!o||i>=n.length)return[];let[s,a]=[n[i],n[(i+1)%n.length]],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,[c,u]=[(a[0]-s[0])/l,(a[1]-s[1])/l];return o.map(h=>{let[d,p]=t.toScreen([s[0]+c*h,s[1]+u*h]);return S`<line class="nf-split-mark" x1=${d-u*7} y1=${p+c*7} x2=${d+u*7} y2=${p-c*7} />`})});return S`${r}`}function qh(t,e,n){let r=e.points,[o,i]=t.toScreen(ke(r)),s=(l,c,u)=>{let[[h,d],[p,f]]=[t.toScreen(l),t.toScreen(c)],[_,y]=[(h+p)/2,(d+f)/2],b=Math.hypot(p-h,f-d),[v,w]=[-(f-d),p-h],k=Math.hypot(v,w)||1;return[v,w]=[v/k,w/k],v*(_-o)+w*(y-i)<0&&([v,w]=[-v,-w]),S`${b>50?S`<text class="nf-dim" x=${_+v*16} y=${y+w*16+4}>${pe(t.host.hass,Math.hypot(c[0]-l[0],c[1]-l[1]))}</text>`:g}
      ${b>36?S`<g data-mid=${u} class="nf-mid"><circle cx=${_} cy=${y} r="14" class="nf-hit" /><circle cx=${_} cy=${y} r="6" /><path d="M${_-3} ${y}h6M${_} ${y-3}v6" /></g>`:g}`},a=(l,c)=>{let[u,h]=t.toScreen(l);return S`<g data-vertex=${c} class=${c===n?"nf-vertex nf-vertex-sel":"nf-vertex"}>${Lo(u,h)}</g><text class="nf-vertex-no" x=${u+9} y=${h-9}>${c+1}</text>`};return S`<g>${r.map((l,c)=>s(l,r[(c+1)%r.length],c))}${r.map(a)}</g>`}var Yh=t=>Math.round(t*1e3)/1e3,Xh=t=>Math.round(t*100)/100;function xn(t,e){let n=[...t??[]].slice(0,e);for(;n.length<e;)n.push(null);return n}var Co=t=>t.every(e=>e===null);function Mr(t,e){let[n,r]=[t.points[e],t.points[(e+1)%t.points.length]];return Math.hypot(r[0]-n[0],r[1]-n[1])}function ta(t,e,n){let r=xn(t.wall_heights,t.points.length);r[e]=n,t.wall_heights=Co(r)?void 0:r,Wo(t,e,null)}function Wo(t,e,n){if(n===null&&!t.wall_slopes)return;let r=xn(t.wall_slopes,t.points.length);r[e]=n,t.wall_slopes=Co(r)?void 0:r}function Qh(t,e,n,r){let[o,i]=[n,r].map(a=>Math.min(30,Math.max(.05,Yh(a)))),s=xn(t.wall_heights,t.points.length);s[e]=o,t.wall_heights=s,Wo(t,e,i)}function Jh(t,e,n){let r=t.wall_heights?.[e];Wo(t,e,null),typeof r=="number"&&r>=n-.005&&ta(t,e,null)}function ep(t,e,n,r,o){let i=xn(t.wall_heights,t.points.length),s=i[e],a=Array.isArray(s)?[...s]:new Array(o).fill(typeof s=="number"?s:null);for(;a.length<o;)a.push(null);a[n]=r,i[e]=a.every(l=>l===a[0])?a[0]:a,t.wall_heights=Co(i)?void 0:i,Wo(t,e,null)}function tp(t,e,n,r){let o=Mr(t,e),i=n===void 0?0:r[n],s=n===void 0?o:r[n+1]??o;if(s-i<.4)return!1;let a=Xh((i+s)/2),l=xn(t.wall_splits,t.points.length);l[e]=[...l[e]??[],a].sort((u,h)=>u-h),t.wall_splits=l;let c=t.wall_heights?.[e];return Array.isArray(c)&&c.splice((n??0)+1,0,c[n??0]??null),!0}function np(t,e,n,r,o){let i=Mr(t,e),s=o.filter(u=>Math.abs(u-n)>.001&&u>0),a=Math.max(.1,Math.min(i-.1,Xh(r)));s.some(u=>Math.abs(u-a)<.1)&&(a=n);let l=t.wall_splits?.[e];if(!l)return;let c=l.findIndex(u=>Math.abs(u-n)<.001);c>=0&&(l[c]=a),l.sort((u,h)=>u-h)}function rp(t,e,n,r){let o=t.wall_splits;if(!o?.[e])return;let i=o[e].filter(a=>Math.abs(a-n)>.001);o[e]=i.length>0?i:null,o.every(a=>!a)&&(t.wall_splits=void 0);let s=t.wall_heights?.[e];Array.isArray(s)&&(s.splice(r,1),s.every(a=>a===s[0])&&(t.wall_heights[e]=s[0]??null))}function op(t,e,n,r,o=1){let i=xn(t.wall_thickness,t.points.length);if(r===void 0||o<2)i[e]=n;else{let s=i[e],a=Array.isArray(s)?[...s]:new Array(o).fill(typeof s=="number"?s:null);for(;a.length<o;)a.push(null);a[r]=n,i[e]=a.every(l=>l===a[0])?a[0]:a}t.wall_thickness=Co(i)?void 0:i}function ip(t,e){let n=Math.min(1.5,Math.max(.02,Yh(t)));return Math.abs(n-e)<5e-4?null:n}var sp=.005,ap=(t,e)=>`room:${t.id}:${e}`;function lp(t,e,n){let r=t.t,o=e.ceiling??t.floor.height,i=e.points.length,{wall_exterior:s,wall_interior:a}=t.doc.settings,l=c=>{let u=e.wall_heights?.[c]??null,h=n.partsOf(e,c);return(h.length>1?h.map((p,f)=>f):[void 0]).map(p=>{let f=Array.isArray(u)?u[p??0]??null:u,_=e.wall_thickness?.[c]??null,y=Array.isArray(_)?_[p??0]??null:_,b=p===void 0?Mr(e,c):(h[p+1]??Mr(e,c))-h[p],v=H=>n.setHeight(e,c,p,H),w=n.isOuter(e,c)?s:a,k=`${r("wall_n",{a:c+1,b:(c+1)%i+1})}${p===void 0?"":` \xB7 ${r("wall_part",{n:p+1})}`}`,x=p!==void 0&&p>0&&(e.wall_splits?.[c]??[]).some(H=>Math.abs(H-h[p])<.001),E=e.wall_slopes?.[c],A=p===void 0&&typeof E=="number"&&typeof u=="number",F=f??o,P=()=>n.light(c),I=()=>n.light(null);return m`<div class="nf-edge-height${c===n.lit?" nf-edge-on":""}${f!==null?" nf-edge-low":""}" @mouseenter=${P} @mouseleave=${I} @focusin=${P} @focusout=${I}>
        <span><b>${k}</b><br /><span class="nf-muted">${pe(t.hass,b)}</span></span>
        ${f===0?m`<span class="nf-muted">${r("wall_none")}</span>`:A?m`<span class="nf-wide nf-split-row" title=${r("wall_slope_hint")}
                >${R(t,r("wall_slope_start"),u,H=>n.setSlope(e,c,H,E),.05,.05)}
                ${R(t,r("wall_slope_end"),E,H=>n.setSlope(e,c,u,H),.05,.05)}</span
              >`:R(t,r("wall_height"),F,H=>v(H>=o-sp?null:Math.max(.05,H)),.05,.05)}
        ${t.admin&&A?m`<button class="nf-btn" title=${r("wall_slope_off")} @click=${()=>n.clearSlope(e,c)}>▭</button>`:g}
        ${t.admin&&f!==null&&!A?m`<button class="nf-btn" title=${r("wall_height_full")} @click=${()=>v(null)}>↥</button>`:g}
        ${t.admin&&p===void 0&&f!==0&&!A?m`<button class="nf-btn" title=${r("wall_slope_hint")} @click=${()=>n.setSlope(e,c,F,F>=o-sp?F+1:o)}>∠ ${r("wall_slope")}</button>`:g}
        ${t.admin&&f!==0?m`<button class="nf-btn" title=${r("wall_none_hint")} @click=${()=>v(0)}>${r("wall_none")}</button>`:g}
        ${t.admin&&b>=.4?m`<button class="nf-btn" title=${r("wall_split_hint")} @click=${()=>n.cut(e,c,p)}>✂</button>`:g}
        ${p===void 0&&b>=.4?Ao(t,ap(e,c),n.arc):g}
        ${(p===void 0||p===0)&&f!==0?m`<button class="nf-btn" title=${r("wall_view_hint")} @click=${()=>n.openWall(e,c)}>▣ ${r("wall_view")}</button>`:g}
        ${f!==0?m`<span class="nf-wide nf-split-row" title=${r("wall_thickness_hint")}
              >${R(t,r("edge_thickness"),y??w,H=>n.setThickness(e,c,ip(H,w),p,h.length),.01,.02)}
              ${t.admin&&y!=null?m`<button class="nf-btn" title=${r("wall_thickness_reset")} @click=${()=>n.setThickness(e,c,null,p,h.length)}>↺</button>`:g}</span
            >`:g}
        ${p===void 0?Fo(t,ap(e,c),n.arc):g}
        ${x?m`<span class="nf-wide nf-split-row"
              >${R(t,r("wall_split_at"),h[p],H=>n.moveCut(e,c,h[p],H),.05,.1)}
              ${t.admin?m`<button class="nf-btn" title=${r("wall_join_hint")} @click=${()=>n.join(e,c,h[p],p)}>⨉</button>`:g}</span
            >`:g}
      </div>`})};return m`<div class="nf-edge-box">
    <h4>${r("wall_heights")}</h4>
    ${e.points.flatMap((c,u)=>l(u))} ${M(r("room_wall_hint"))}
  </div>`}function cp(t,e,n){let r=e.color_entity&&e.color_entity!=="none"?e.color_entity:n;return r?t.states[r]:void 0}var na=["none","rainbow","pulse","flicker"];function Bo(t,e,n,r){let o=e.effect_animations??{},i=Cl(),s=c=>na.includes(c)||i.includes(c),a=[...new Set([...Object.keys(o),...Array.isArray(n)?n.filter(c=>typeof c=="string"):[]])],l=(c,u,h,d=!1)=>{let p=Object.prototype.hasOwnProperty.call(o,c),f=Array.from(c).length,_=d&&p?"light_effect_exists":u!==""&&(f<1||f>255)?"light_effect_name_limit":u!==""&&!p&&Object.keys(o).length>=100?"light_effect_count_limit":void 0;if(h.setCustomValidity?.(_?t.t(_):""),_){let b=h.closest?.("details")?.querySelector("[data-effect-feedback]");return b&&(b.textContent=t.t(_)),h.reportValidity?.(),d||(h.value=p?o[c]:""),!1}let y={...o};return u===""?delete y[c]:Object.defineProperty(y,c,{value:u,enumerable:!0,configurable:!0,writable:!0}),r({effect_animations:y}),!0};return m`<details class="nf-wide">
    <summary>${t.t("light_effects")}</summary>
    <p class="nf-sub">${t.t("light_effects_hint")}</p>
    <label class="nf-check"><input type="checkbox" .checked=${e.animations_enabled!==!1} ?disabled=${!t.admin}
      @change=${c=>r({animations_enabled:c.target.checked})} />${t.t("light_effects_enabled")}</label>
    ${a.map(c=>m`<label class="nf-field nf-wide">${c}
      <select ?disabled=${!t.admin} @change=${u=>{let h=u.target;l(c,h.value,h)}}>
        <option value="" ?selected=${!Object.prototype.hasOwnProperty.call(o,c)}>${t.t("light_effect_unmapped")}</option>
        ${Object.prototype.hasOwnProperty.call(o,c)&&!s(o[c])?m`<option selected value=${o[c]}>${o[c]} (${t.t("light_effect_unmapped")})</option>`:g}
        ${na.map(u=>m`<option value=${u} ?selected=${Object.prototype.hasOwnProperty.call(o,c)&&o[c]===u}>${t.t(`light_animation_${u}`)}</option>`)}
        ${i.map(u=>m`<option value=${u} ?selected=${Object.prototype.hasOwnProperty.call(o,c)&&o[c]===u}>${u} (${t.t("plugin")})</option>`)}
      </select></label>`)}
    <label class="nf-field nf-wide">${t.t("light_effect_add")}<input type="text" ?disabled=${!t.admin} placeholder="Regenbogen"
      @input=${c=>c.target.setCustomValidity("")}
      @change=${c=>{let u=c.target;l(u.value,"none",u,!0)&&(u.value="")}} /></label>
    <p class="nf-sub" data-effect-feedback role="status" aria-live="polite">${t.t("light_effect_name_limit")} ${t.t("light_effect_count_limit")}</p>
  </details>`}var tb=/speaker|sound|subwoofer|receiver|smart_|display|tv|media|turntable|projector|console/;function nb(t,e,n){let r=U(e),o=t.hass?.language??"en",i=[...Kr.map(a=>({type:a,label:t.t(`furn_${a}`)})),...n.flatMap(a=>a.items.map(l=>({type:ae(a.id,l.id),label:`${Ie(l,ae(a.id,l.id),o)} \xB7 ${Me(a,o)}`})))],s=a=>r==="light"?le(a):r==="climate"?a==="radiator"||Yt(a):e.startsWith("vacuum.")?a==="robot_vacuum"||ot(a)&&a.endsWith(":robot_vacuum"):r==="media"?Gn(a)||ft(a)&&tb.test(a):ft(a)&&!le(a);return i.filter(a=>s(a.type)).sort((a,l)=>a.label.localeCompare(l.label))}function rb(t,e,n){if(!t.admin)return g;let r=nb(t,e.entity_id,n.packs);return r.length===0?g:m`<label class="nf-field nf-wide" title=${t.t("as_furniture_hint")}
    >${t.t("as_furniture")}
    <select @change=${o=>o.target.value&&n.asFurniture(e,o.target.value)}>
      <option value="" selected>${t.t("as_furniture_pick")}</option>
      ${r.map(o=>m`<option value=${o.type}>${o.label}</option>`)}
    </select>
  </label>`}function ob(t,e,n){let r=t.hass?.language??"en";return Bl(e.entity_id,t.hass?.states[e.entity_id]).map(({pluginId:o,name:i,settings:s})=>{let a=Vl(s,e.plugin?.[o]),l=(u,h)=>n({plugin:{...e.plugin??{},[o]:{...e.plugin?.[o]??{},[u]:h}}}),c=s.map(u=>{let h=Yr(u.label,r),d=u.hint?Yr(u.hint,r):void 0;if(u.type==="boolean")return O(t,h,a[u.key]===!0,f=>l(u.key,f),{title:d});if(u.type==="select"){let f=(u.options??[]).map(([_,y])=>[_,Yr(y,r)]);return T(t,h,String(a[u.key]),f,_=>l(u.key,_),{wide:!0,title:d})}let p=f=>Math.min(u.max??1/0,Math.max(u.min??-1/0,f));return R(t,h,Number(a[u.key]),f=>l(u.key,p(f)),u.step??1,u.min)});return m`<h4 class="nf-lib-head nf-wide">🔌 ${i}</h4>${c}`})}function ra(t,e,n){let r=t.t,o=U(e.entity_id)??(t.hass?je(t.hass,e.entity_id):null),i=o==="light",s=e.mount??"ceiling",a=o?Hr(o,t.floor?Ue(t.floor,e.x,e.z):2.5,i?s:null):1,l=d=>n.update(d),c=fn(t,e.entity_id,e.icon),u=d=>l({mount:d,y:null}),h=["ceiling","floor","table","wall"].map(d=>[d,r(`lamp_${d}`)]);return m`<section>
    <div class="nf-h3row"><h3>${r("device")}</h3>${n.lockButton}</div>
    <p class="nf-dev-title">
      ${c?m`<ha-icon class="nf-dev-icon" .icon=${c}></ha-icon>`:m`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${o?wt(o):""} /></svg>`}
      ${V(t.hass,e.entity_id)}
    </p>
    <div class="nf-form">
      ${i?m`${T(t,r("lamp_mount"),s,h,u,{wide:!0})}${hr(t,e.glow_scale,d=>l({glow_scale:d}))}`:g}
      ${i?Bo(t,e,t.hass?.states[e.entity_id]?.attributes.effect_list,l):g}
      ${R(t,r("x"),e.x,d=>l({x:d}))} ${R(t,r("z"),e.z,d=>l({z:d}))}
      ${R(t,r("marker_height"),e.y??a,d=>l({y:Math.max(0,d)}),.05,0)}
      ${R(t,r("rotation"),e.rotation??0,d=>l({rotation:(d%360+360)%360}),1)}
      ${o&&Ya.has(o)?O(t,r("device_confirm"),!!e.confirm,d=>l({confirm:d}),{title:r("device_confirm_hint")}):g}
      ${O(t,r("device_outside"),!!e.outside,d=>l({outside:d||void 0}),{title:r("device_outside_hint")})}
      ${mn(t,e.marker??null,d=>l({marker:d}))}
      ${gn(t,e.pin_offset,d=>l({pin_offset:d}))}
      ${j(t,r("device_name"),e.name??"",d=>l({name:d||null}),{wide:!0,maxlength:60,title:r("device_name_hint"),placeholder:V(t.hass,e.entity_id)})}
      ${e.name?O(t,r("show_name"),!!e.show_name,d=>l({show_name:d||void 0})):g}
      ${bt(t,e.icon,d=>l({icon:d}))}
      ${ob(t,e,l)}
    </div>
    ${t.admin?m`<div class="nf-actions">
          <button class="nf-btn" @click=${()=>n.centre()}>${r("device_centre")}</button>
          ${e.y!==null?m`<button class="nf-btn" @click=${()=>l({y:null})}>${r("height_auto")}</button>`:g}
          ${rb(t,e,n)}
          <button class="nf-btn nf-danger" @click=${()=>n.remove()}>${r("devices_remove")}</button>
        </div>`:g}
  </section>`}var ib=/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./,kt=t=>t==="none"?null:t;function oa(t,e,n){let r=t.t,o=D(t.hass,l=>ib.test(l)),i=!!e.state_entity&&e.state_entity!=="none",s=i&&!!e.state_entity2&&e.state_entity2!=="none",a=[["left_right",r("furn_state_left_right")],["top_bottom",r("furn_state_top_bottom")]];return m`${z(t,r("furn_state_entity"),e.state_entity??null,void 0,o,l=>n.update({state_entity:kt(l)}))}
    ${i?z(t,r("furn_state_entity2"),e.state_entity2??null,void 0,o,l=>n.update({state_entity2:kt(l)})):g}
    ${s?T(t,r("furn_state_split"),e.state_split==="top_bottom"?"top_bottom":"left_right",a,l=>n.update({state_split:l})):g}
    ${M(r("furn_state_hint"),"nf-wide")}`}function sb(t,e){let r=Kn(t.type)&&(!ot(t.type)||ol(t.type));return le(t.type)?{accept:o=>/^(light|switch|input_boolean)\./.test(o),label:"furn_entity_light"}:t.type==="radiator"||Yt(t.type)?{accept:o=>o.startsWith("climate."),label:"furn_entity_climate"}:r?{accept:o=>/^(media_player|switch|input_boolean|light)\./.test(o),label:"furn_entity_tv"}:t.type==="robot_vacuum"?{accept:o=>o.startsWith("vacuum."),label:"furn_entity_vacuum"}:/:(robot_mower|mower_dock)$/.test(t.type)?{accept:o=>o.startsWith("lawn_mower."),label:"furn_entity_mower"}:/:(sprinkler|valve_box)$/.test(t.type)?{accept:o=>/^(valve|switch|input_boolean)\./.test(o),label:"furn_entity_water"}:{accept:o=>/^(switch|media_player|fan|input_boolean|climate|vacuum|cover|valve)\./.test(o)||Xa(e?.states[o]),label:"furn_entity"}}function Vo(t,e,n){if(!t.hass)return null;let r=structuredClone(t.doc.floors);for(let o of r)for(let i of o.furniture)i.id===e.id&&(i[n==="fan"?"fan_entity":n]=null);return Ft(t.hass,r).get(e.id)?.[n]??null}var ab=t=>t==="meter"?"energy_grid":t==="inverter"?"energy_solar_sensor":t==="home_battery"?"energy_battery_sensor":"furn_power",dt=(...t)=>m`<div class="nf-form nf-links">${t}</div>`;function lb(t,e,n){let r=t.t,o=t.doc;if(!o.energy.advanced)return g;let i=bn(o),s=o.floors.flatMap(a=>a.furniture.filter(l=>i.has(l.id)).map(l=>[l.id,`${l.name||r("furn_meter")} \xB7 ${a.name}`]));return dt(T(t,r("meter_parent"),br(o,e)??"",[["",r("meter_main")],...s],a=>n.update({parent_meter:a||null}),{wide:!0}),M(r("meter_device_hint"),"nf-wide"))}function cb(t,e,n){let r=t.t,o=t.doc;if(!o.energy.advanced)return g;let i=o.floors.flatMap(c=>c.furniture.filter(u=>ku(o,e,u)).map(u=>[u.id,`${u.name||r("furn_meter")} \xB7 ${c.name}`])),s=!!Bt(o,e),a=e.meter_floors??[],l=(c,u)=>n.update({meter_floors:u?[...a.filter(h=>h!==c),c]:a.filter(h=>h!==c)});return dt(T(t,r("meter_parent"),s?e.parent_meter:"",[["",r("meter_parent_none")],...i],c=>n.update({parent_meter:c||null}),{wide:!0}),s?O(t,r("energy_invert"),!!e.meter_invert,c=>n.update({meter_invert:c})):g,s?m`<div class="nf-sub nf-wide">${r("meter_floors")}</div>${o.floors.map(c=>O(t,c.name,a.includes(c.id),u=>l(c.id,u)))}`:g,M(r("meter_sub_hint"),"nf-wide"))}function up(t,e,n,r){let o=t.t,i=n==="mail"?s=>/^(binary_sensor|sensor|input_boolean)\./.test(s):s=>/^(sensor|binary_sensor|calendar)\./.test(s);return m`<div class="nf-form nf-links">
    ${z(t,o(`care_entity_${n}`),e.care_entity??null,void 0,D(t.hass,i),s=>r.update({care_entity:kt(s)}))}
    ${n==="plant"?R(t,o("care_thirsty_below"),e.thirsty_below??20,s=>r.update({thirsty_below:Math.min(90,Math.max(1,Math.round(s)))}),1,1):g}
    ${M(o(`care_hint_${n}`),"nf-wide")}
  </div>`}function dp(t,e,n){let r=t.t;return m`<div class="nf-form nf-links">
    ${z(t,r("furn_cover_entity"),e.cover_entity??null,void 0,D(t.hass,o=>o.startsWith("cover.")),o=>n.update({cover_entity:kt(o)}))}
    ${M(r("furn_cover_hint"),"nf-wide")}
  </div>`}function hp(t,e,n,r){let o=t.t,i=/socket/.test(e.type),s=D(t.hass,c=>/^(light|switch|input_boolean|fan)\./.test(c)),a=e.gang_entities??[],l=c=>u=>{let h=Array.from({length:n},(d,p)=>a[p]??null);h[c]=kt(u),r.update({gang_entities:h})};return m`<div class="nf-form nf-links">
    ${Array.from({length:n},(c,u)=>z(t,n===1?o(i?"gang_socket_one":"gang_switch_one"):o(i?"gang_socket":"gang_switch",{n:u+1}),a[u]??null,void 0,s,l(u)))}
    ${M(o(i?"gang_socket_hint":"gang_switch_hint"),"nf-wide")}
  </div>`}function ub(t,e,n){let r=t.t,o=D(t.hass,i=>{let s=t.hass?.states[i]?.attributes;return i.startsWith("sensor.")&&(s?.device_class==="temperature"||s?.unit_of_measurement==="\xB0C"||s?.unit_of_measurement==="\xB0F")});return dt(z(t,r("fridge_temp"),e.temp_entity??null,void 0,o,i=>n.update({temp_entity:kt(i)})),z(t,r("freezer_temp"),e.temp_entity2??null,void 0,o,i=>n.update({temp_entity2:kt(i)})),M(r("fridge_temp_hint"),"nf-wide"))}function db(t,e,n){let r=t.t,o=e.extra_lights??[],i=D(t.hass,l=>l.startsWith("light.")&&l!==e.entity&&l!==e.color_entity),s=l=>c=>{let u=[...o];c&&c!=="none"?u[l]=c:u.splice(l,1),n.update({extra_lights:u.filter(Boolean).length?u.filter(Boolean):void 0})},a=Math.min(4,o.length+1);return m`${Array.from({length:a},(l,c)=>z(t,r("lamp_extra_light",{n:c+2}),o[c]??null,void 0,i,s(c)))}${M(r("lamp_extra_hint"),"nf-wide")}`}function pp(t,e,n){let{hass:r}=t;if(!r)return g;let o=t.t,i=le(e.type),s=sb(e,r),a=D(r,f=>pn(r,f)),l=f=>_=>n.update({[f]:kt(_)}),c=f=>D(r,f),u=(t.doc.settings.roof.strings??[]).filter(f=>f.inverter===e.id).map(f=>f.name),h=!!e.entity&&e.entity!=="none",d=e.type==="fridge_smart"?c(f=>f.startsWith("binary_sensor.")):[],p=e.type==="ceiling_fan"?"fan_hint":i?e.type==="lamp_pendant"?"lamp_hint_pendant":"lamp_hint":Kn(e.type)?"furn_links_hint_tv":e.type==="robot_vacuum"?"robot_hint":"furn_links_hint";return m`${dt(e.type==="grid_point"?M(o("grid_point_hint"),"nf-wide"):z(t,o(s.label),e.entity??null,Vo(t,e,"entity"),c(s.accept),f=>n.update({entity:f})),e.type==="ceiling_fan"?z(t,o("furn_fan_entity"),e.fan_entity??null,Vo(t,e,"fan"),c(f=>f.startsWith("fan.")),f=>n.update({fan_entity:f})):g,!i&&!Ee.includes(e.type)&&!Gn(e.type)?oa(t,e,n):g,i&&h?m`${z(t,o("furn_color_entity"),e.color_entity??null,void 0,c(f=>f.startsWith("light.")&&f!==e.entity),l("color_entity"))}${M(o("furn_color_entity_hint"),"nf-wide")}`:g,i&&h?db(t,e,n):g,i?hr(t,e.glow_scale,f=>n.update({glow_scale:f})):g,i?Bo(t,e,cp(r,e,e.entity&&e.entity!=="none"?e.entity:Vo(t,e,"entity"))?.attributes.effect_list,n.update):g,Gn(e.type)?hr(t,e.ambilight,f=>n.update({ambilight:f}),{label:"ambilight",hint:"ambilight_hint",lowest:0}):g,i||e.type==="grid_point"?g:z(t,o(Bt(t.doc,e)?"meter_sub_power":ab(e.type)),e.power??null,Vo(t,e,"power"),a,f=>n.update({power:f})))}
    ${nc(e.type)?ub(t,e,n):g}
    ${e.type==="meter"?cb(t,e,n):g}
    ${e.type==="inverter"||e.type==="home_battery"?lb(t,e,n):g}
    ${e.type==="meter"&&!Bt(t.doc,e)?dt(z(t,o("furn_export"),e.export??null,void 0,a,l("export")),M(o("furn_export_hint"),"nf-wide")):g}
    ${e.type==="inverter"&&(t.doc.settings.roof.solar??[]).length>0?M(u.length>0?o("inverter_strings",{names:u.join(", ")}):o("inverter_strings_none"),"nf-wide"):g}
    ${e.type==="home_battery"?dt(z(t,o("furn_soc"),e.soc??null,void 0,c(f=>ce(f)&&(r.states[f]?.attributes.device_class==="battery"||r.states[f]?.attributes.unit_of_measurement==="%")),l("soc")),z(t,o("furn_charge"),e.charge??null,void 0,a,l("charge")),M(o("furn_charge_hint"),"nf-wide")):g}
    ${e.type==="wallbox"?dt(z(t,o("furn_wallbox_status"),e.status??null,void 0,c(f=>ho(f)||ce(f)),l("status"))):g}
    ${!i||e.entity?m`${O(t,o("device_confirm"),!!e.confirm,f=>n.update({confirm:f}),{title:o("device_confirm_hint")})}
        <div class="nf-form">${mn(t,e.marker??null,f=>n.update({marker:f}))}${bt(t,e.icon,f=>n.update({icon:f}))}${i?g:gn(t,e.pin_offset,f=>n.update({pin_offset:f}))}</div>`:g}
    ${e.type==="robot_vacuum"?dt(z(t,o("furn_robot_room"),e.room_sensor??null,ic(r,Ft(r,t.doc.floors).get(e.id)?.entity??null,null),c(ce),f=>n.update({room_sensor:f}))):g}
    ${e.type==="fridge_smart"?m`${dt(z(t,o("furn_door_left"),e.door_left??null,void 0,d,f=>n.update({door_left:f})),z(t,o("furn_door_right"),e.door_right??null,void 0,d,f=>n.update({door_right:f})))}
        ${M(o("fridge_hint"))}`:g}
    ${M(o(p))}`}var hb=/^(binary_sensor|device_tracker|input_boolean|switch|sensor)\./,pb=/^(sensor|input_select|select|input_text)\./,fb=/^(device_tracker|sensor|binary_sensor|lock|climate)\./,mb=(t,e)=>t.flatMap(n=>n.items.filter(r=>r.vehicle).map(r=>({id:ae(n.id,r.id),label:`${Ie(r,ae(n.id,r.id),e)} \xB7 ${Me(n,e)}`})));function fp(t,e){return e.startsWith("device_tracker.")?t.hass?.states[e]?.attributes.source_type==="router"?2:0:1}function mp(t,e,n,r){return m`<select ?disabled=${!t.admin} @change=${o=>r(o.target.value||null)}>
    <option value="" ?selected=${!n}>${t.t("parking_vehicle_none")}</option>
    ${e.map(o=>m`<option value=${o.id} ?selected=${o.id===n}>${o.label}</option>`)}
  </select>`}function gb(t,e,n,r){let o=t.t,i=e.type_entity?t.hass?.states[e.type_entity]:void 0,s=Array.isArray(i?.attributes.options)?i.attributes.options:[],a=e.types??[],l=u=>r.update({types:u}),c=(u,h)=>l(a.map((d,p)=>p===u?{...d,...h}:d));return m`<div class="nf-wide">
    <div class="nf-sub">${o("parking_types")}</div>
    ${a.map((u,h)=>m`<div class="nf-parking-row">
        <input type="text" list="nf-parking-states" placeholder=${o("parking_type_state")} .value=${u.state} ?disabled=${!t.admin} @change=${d=>c(h,{state:d.target.value})} />
        ${mp(t,n,u.vehicle,d=>c(h,{vehicle:d??""}))}
        <button class="nf-btn" ?disabled=${!t.admin} title=${o("delete")} @click=${()=>l(a.filter((d,p)=>p!==h))}>✕</button>
      </div>`)}
    <datalist id="nf-parking-states">${s.map(u=>m`<option value=${u}></option>`)}</datalist>
    ${t.admin?m`<button class="nf-btn" @click=${()=>l([...a,{state:s[a.length]??"",vehicle:n[0]?.id??""}])}>${o("parking_add_type")}</button>`:g}
  </div>`}function gp(t,e,n,r){let o=t.t,i=mb(n,t.hass?.language??"en"),s=D(t.hass,f=>hb.test(f)).sort((f,_)=>fp(t,f.id)-fp(t,_.id)),a=D(t.hass,f=>pb.test(f)),l=e.car??{},c=t.floor,u=c?.rooms.find(f=>f.points.length>=3&&C([e.x,e.z],f.points)),h=e.vehicle?K(e.vehicle):void 0,d=h?h.size[2]*(e.scale??1):0,p=!!u&&!!c&&d>c.height+1e-6;return m`<div class="nf-form nf-links">
      ${z(t,o("parking_entity"),e.entity??null,void 0,s,f=>r.update({entity:f==="none"?null:f}))}
      <label class="nf-field nf-wide">${o("parking_vehicle")} ${mp(t,i,e.vehicle??null,f=>r.update({vehicle:f}))}</label>
      ${i.length>0?g:M(o("parking_no_pack"),"nf-wide")}
      ${R(t,o("parking_scale"),Math.round((e.scale??1)*100),f=>r.update({scale:Math.min(150,Math.max(30,f))/100}),5,30)}
      ${z(t,o("parking_type_entity"),e.type_entity??null,void 0,a,f=>r.update({type_entity:f==="none"?null:f}))}
      ${e.type_entity?gb(t,e,i,r):g}
    </div>
    ${p?m`<p class="nf-sub nf-warn">${o("parking_too_tall",{car:G(t.hass,d,2),room:G(t.hass,c.height,2)})}</p>`:g}
    ${M(o("parking_hint"))}
    ${t.hass?m`${z(t,o("live_car_device"),l.device??null,null,D(t.hass,f=>fb.test(f)),f=>r.update({car:{...l,device:f}}))}
        ${M(o("live_car_device_hint"),"nf-wide")}
        ${z(t,o("live_car_departure_entity"),l.departure??null,void 0,D(t.hass,f=>/^(sensor|input_datetime|time|datetime)\./.test(f)),f=>r.update({car:{...l,departure:f==="none"?null:f}}))}`:g}`}function _b(t){let e=wn(xr(t),t.w,t.d,t.h),n=e.treads.map(Ro),r=0;for(let i=1;i<n.length;i++)r+=Math.hypot(n[i][0]-n[i-1][0],n[i][1]-n[i-1][1]);let o=n.length>1?r/(n.length-1):0;return{rise:e.rise,going:o,measure:2*e.rise+o,steps:e.steps}}function bb(t){let[e,n]=Es[t],r=wn({...Qe,shape:t},e,n,2.8),o=26/Math.max(e,n);return m`<svg viewBox="-14 -14 28 28" width="28" height="28" aria-hidden="true">
    ${r.treads.map(i=>S`<polygon points=${i.poly.map(([s,a])=>`${s*o},${a*o}`).join(" ")} fill=${i.landing?"currentColor":"none"} fill-opacity="0.25" stroke="currentColor" stroke-width="0.8" />`)}
  </svg>`}function _p(t,e,n){let r=t.t,o=xr(e),i=f=>n.update({stair:{...o,...f}}),s=o.shape!=="straight",a=f=>{let[_,y]=Es[f];n.update({stair:{...o,shape:f,run_width:null},w:_,d:y})},l=t.floor?t.doc.floors.filter(f=>f.elevation<t.floor.elevation).sort((f,_)=>_.elevation-f.elevation)[0]:void 0,c=t.floor?t.doc.floors.filter(f=>f.elevation>t.floor.elevation).sort((f,_)=>f.elevation-_.elevation)[0]:void 0,u=f=>{let _=f?l&&t.floor?t.floor.elevation-l.elevation:null:c&&t.floor?c.elevation-t.floor.elevation:null;n.update({stair:{...o,down:f},..._?{h:Math.round(_*1e3)/1e3}:{}})},h=_b(e),d=f=>G(t.hass,f*100,1),p=h.measure>=.59&&h.measure<=.65&&h.rise<=.21;return m`<div class="nf-form">
    <div class="nf-field nf-wide">
      <span>${r("stair_shape")}</span>
      <div class="nf-swatches nf-stair-shapes" role="radiogroup" aria-label=${r("stair_shape")}>
        ${xs.map(f=>m`<button type="button" class="nf-btn nf-stair-shape" role="radio" aria-checked=${f===o.shape} title=${r(`stair_shape_${f}`)} ?disabled=${!t.admin} @click=${()=>a(f)}>
            ${bb(f)}<span>${r(`stair_shape_${f}`)}</span>
          </button>`)}
      </div>
    </div>
    ${s?T(t,r("stair_turn"),o.turn,[["left",r("stair_turn_left")],["right",r("stair_turn_right")]],f=>i({turn:f})):""}
    ${T(t,r("stair_build"),o.build,$s.map(f=>[f,r(`stair_build_${f}`)]),f=>i({build:f}))}
    ${o.build!=="solid"?O(t,r("stair_risers"),o.risers,f=>i({risers:f}),{wide:!1}):""}
    ${R(t,r("stair_steps"),o.steps??h.steps,f=>i({steps:Math.round(Math.min(40,Math.max(2,f)))}),1,2)}
    ${o.steps!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>i({steps:null})}>${r("height_auto")}</button>`:""}
    ${s&&o.shape!=="spiral"?m`${R(t,r("stair_run_width"),o.run_width??wn(o,e.w,e.d,e.h).flight,f=>i({run_width:Math.max(.4,f)}),.01,.4)}
        ${o.run_width!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>i({run_width:null})}>${r("height_auto")}</button>`:""}`:""}
    ${T(t,r("stair_rail"),o.rail,Ss.map(f=>[f,r(`stair_rail_${f}`)]),f=>i({rail:f}))}
    ${O(t,r("stair_down"),o.down,u,{title:r("stair_down_hint")})}
    ${T(t,r("stair_opening"),o.opening,Ms.map(f=>[f,r(`stair_opening_${f}`)]),f=>i({opening:f}),{wide:!0,title:r("stair_opening_hint")})}
    <p class="nf-sub nf-wide ${p?"":"nf-pack-error"}">
      ${r("stair_measures",{steps:h.steps,rise:d(h.rise),going:d(h.going),measure:d(h.measure)})} ${p?"\u2713":`\u2013 ${r("stair_uncomfortable")}`}
    </p>
    ${M(r(o.down?"stair_down_note":o.opening==="headroom"?"stair_up_note":"stair_up_note_plain"),"nf-wide")}
  </div>`}var yb=new Set(["parking","stairwell","rug","grid_point"]),wb={inverter:{label:"furn_model",values:["","slim","hybrid"],text:t=>`inverter_${t||"std"}`},home_battery:{label:"furn_model",values:["","wall","cube"],text:t=>`battery_${t||"std"}`},lamp_pendant:{label:"pendant_shape",values:["","globe","cone","drum"],text:t=>`pendant_${t||"shade"}`},sofa:{label:"sofa_shape",values:["","l","u"],text:t=>`sofa_${t||"straight"}`}};function vb(t,e,n,r){let o=t.hass?.language??"en",i=n.some(s=>e.type.startsWith(`pack:${s.id}:`));return m`<label class="nf-field nf-wide"
    >${t.t("furniture_type")}
    <select ?disabled=${!t.admin} @change=${s=>r.update({type:s.target.value})}>
      ${Kr.map(s=>m`<option value=${s} ?selected=${s===e.type}>${t.t(`furn_${s}`)}</option>`)}
      ${n.map(s=>m`<optgroup label=${Me(s,t.hass?.language??"de")}>
          ${s.items.map(a=>m`<option value=${ae(s.id,a.id)} ?selected=${ae(s.id,a.id)===e.type}>${Ie(a,ae(s.id,a.id),o)}</option>`)}
        </optgroup>`)}
      ${e.type.startsWith("pack:")&&!i?m`<option value=${e.type} selected>${Je(t.hass,e.type)}</option>`:g}
    </select>
  </label>`}function kb(t,e,n){let r=K(e.type==="parking"?e.vehicle??"":e.type)?.colors;if(!r?.length)return g;let o=t.hass?.language??"en",i=r.find(a=>a.id===e.variant)??r[0],s=a=>Kd(a,o);return m`<div class="nf-form">
    <div class="nf-field nf-wide">
      <span>${t.t("paint_colour")}: ${s(i)}</span>
      <div class="nf-swatches" role="radiogroup" aria-label=${t.t("paint_colour")}>
        ${r.map((a,l)=>m`<button type="button" class="nf-swatch" role="radio" aria-checked=${a.id===i.id} title=${s(a)} style=${`--sw:${a.hex}`} ?disabled=${!t.admin} @click=${()=>n.update({variant:l===0?null:a.id})}></button>`)}
      </div>
    </div>
  </div>`}function xb(t,e,n){let r=wb[e.type];if(!r)return g;let o=r.values.map(i=>[i,t.t(r.text(i))]);return m`<div class="nf-form">${T(t,t.t(r.label),e.variant??"",o,i=>n.update({variant:i||null,...e.type==="sofa"&&i&&e.d<1.4?{d:1.7,w:Math.max(e.w,i==="u"?3:2.4)}:{}}),{wide:!0})}</div>`}function $b(t,e,n){let r=t.t(`furn_${e.type}`),o=r===`furn_${e.type}`?"":r;return m`<label class="nf-field nf-wide"
      >${t.t("furn_name")}
      <input type="text" maxlength="60" .value=${e.name??""} ?disabled=${!t.admin} placeholder=${o} @change=${i=>n.update({name:i.target.value.trim()||null})} />
    </label>
    ${e.name?O(t,t.t("show_name"),!!e.show_name,i=>n.update({show_name:i||void 0})):g}`}function Sb(t,e,n){let r=t.t,o=s=>n.update(s),i=t.floor;return m`${R(t,r("x"),e.x,s=>o({x:s}))} ${R(t,r("z"),e.z,s=>o({z:s}))}
    ${R(t,r("width"),e.w,s=>o({w:Math.max(.05,s)}),.01,.05)} ${R(t,r("depth"),e.d,s=>o({d:Math.max(.05,s)}),.01,.05)}
    ${R(t,r("height_m"),e.h,s=>o({h:Math.max(.005,s)}),.01,0)}
    ${R(t,r("rotation"),e.rotation,s=>o({rotation:(s%360+360)%360}),1)}
    ${le(e.type)?g:O(t,r("furn_mirror"),!!e.mirror,s=>o({mirror:s}),{wide:!1,title:r("furn_mirror_hint")})}
    ${e.type==="led_strip"?m`${R(t,r("strip_tilt"),e.tilt??0,s=>o({tilt:Math.max(-90,Math.min(90,Math.round(s)))}),5)}
        ${e.upright?g:R(t,r("strip_rise"),e.rise??0,s=>o({rise:Math.max(-80,Math.min(80,Math.round(s)))}),5)}
        ${O(t,r("strip_upright"),!!e.upright,s=>o({upright:s}),{wide:!1,title:r("strip_upright_hint")})}`:g}
    ${Gr(e)&&i?m`${R(t,r("mount_height"),e.mount_y??Xt(i,e),s=>o({mount_y:Math.max(0,s)}),.01,0)}
        ${e.mount_y!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>o({mount_y:null})}>${r("height_auto")}</button>`:g}`:g}
    ${Mb(e)&&i?m`${R(t,r("ceiling_here"),Cr(i,e),s=>o({ceiling_y:Math.abs(s-Ue(i,e.x,e.z))<.005?null:Math.max(.5,s)}),.01,.5)}
        ${e.ceiling_y!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>o({ceiling_y:null})}>${r("height_auto")}</button>`:g}
        ${bp(t,e)!==null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} title=${r("ceiling_slope_hint")} @click=${()=>o({ceiling_y:bp(t,e)})}>📐 ${r("ceiling_slope")}</button>`:g}
        ${M(r("ceiling_here_hint"),"nf-wide")}`:g}`}function bp(t,e){let n=t.floor;if(!n)return null;let r=qi(t.doc,e.x,e.z);if(r===null)return null;let o=Math.round((r-n.elevation)*1e3)/1e3;return o>.5&&o<Ue(n,e.x,e.z)-.02?o:null}var Mb=t=>yi.has(t.type)||K(t.type)?.mount==="ceiling";function Eb(t,e,n){if(e.type==="stairs"&&e.stair)return g;if(e.type==="stairs")return m`${M(t.t("stairs_hint"))}${t.admin?m`<div class="nf-actions"><button class="nf-btn nf-primary" title=${t.t("stair_upgrade_hint")} @click=${()=>n.update({stair:{...Qe}})}>${t.t("stair_upgrade")}</button></div>`:g}`;if(e.type!=="stairwell")return g;let r=t.floor&&!t.floor.rooms.some(o=>o.points.length>=3&&rd($i(e),o.points));return m`${M(t.t("stairwell_hint"))}${r?m`<p class="nf-sub nf-pack-error">${t.t("stairwell_outside")}</p>`:g}`}function Rb(t,e,n){if(!t.admin)return g;let r=t.t,o=!!e.entity&&e.entity!=="none"&&e.type!=="parking",i=t.doc.floors.filter(s=>s.id!==t.floor?.id);return m`<div class="nf-actions">
    <button class="nf-btn" @click=${()=>n.rotate(-90)}>${r("rotate_left")}</button>
    <button class="nf-btn" @click=${()=>n.rotate(90)}>${r("rotate_right")}</button>
    ${o?m`<button class="nf-btn" title=${r("as_device_hint")} @click=${()=>n.toDevice(e)}>${r("as_device")}</button>`:g}
    <button class="nf-btn" @click=${()=>n.duplicate()}>${r("duplicate")}</button>
    <button class="nf-btn nf-danger" @click=${()=>n.remove()}>${r("delete")}</button>
  </div>
  ${i.length?m`<div class="nf-form">${T(t,r("furn_to_floor"),"",[["","\u2013"],...i.map(s=>[s.id,s.name])],s=>s&&n.toFloor(s),{wide:!0,title:r("furn_to_floor_hint")})}</div>`:g}`}function Ab(t,e,n){let r=e.tap??null,o=[["",t.t("furn_tap_default")],...Wr.map(s=>[s,t.t(`own_action_${s}`)])],i=s=>n.update({tap:{action:r?.action??"navigate",target:r?.target??null,data:r?.data??null,...s}});return m`<div class="nf-form">
    ${T(t,t.t("furn_tap"),r?.action??"",o,s=>s?i({action:s}):n.update({tap:null}),{wide:!0,title:t.t("furn_tap_hint")})}
    ${r&&r.action!=="fire_dom_event"?j(t,t.t(`own_target_${r.action}`),r.target??"",s=>i({target:s||null}),{wide:!0,placeholder:ds[r.action]}):g}
    ${r&&(r.action==="service"||r.action==="fire_dom_event")?hs(t,r,s=>i({data:s})):g}
    ${r&&!ft(e.type)&&!K(e.type)?.gangs?m`${mn(t,e.marker??null,s=>n.update({marker:s}))}${bt(t,e.icon,s=>n.update({icon:s}))}${gn(t,e.pin_offset,s=>n.update({pin_offset:s}))}`:g}
  </div>`}function Fb(t,e,n){let r=t.t,o=e.picture??"",i=o.startsWith("image:"),s=async l=>{let c=l.target,u=c.files?.[0];if(c.value="",!u||!t.hass)return;let{data:h}=await Mo(u),d=L("img");await Zt(t.hass,d,h),n.update({picture:`image:${d}`})},a=D(t.hass,l=>/^(image|camera|media_player)\./.test(l));return m`<div class="nf-form nf-links">
    ${t.admin?m`<label class="nf-btn nf-wide nf-upload">📷 ${r(i?"picture_replace":"picture_upload")}<input type="file" accept="image/*" hidden @change=${s} /></label>`:g}
    ${i?m`<p class="nf-sub nf-wide">${r("picture_stored")} <button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>n.update({picture:null})}>${r("delete")}</button></p>`:m`${j(t,r("picture_url"),/^[a-z_]+\.[a-z0-9_]+$/.test(o)?"":o,l=>n.update({picture:l||null}),{wide:!0,placeholder:"/local/holiday.jpg"})}
        ${z(t,r("picture_entity"),/^[a-z_]+\.[a-z0-9_]+$/.test(o)?o:null,void 0,a,l=>n.update({picture:l&&l!=="none"?l:null}))}`}
    ${R(t,r("picture_border"),e.picture_border??0,l=>n.update({picture_border:Math.max(0,Math.min(40,Math.round(l)))||null}),1,0)}
    ${T(t,r("picture_fit"),e.picture_fit??"cover",[["cover",r("picture_fit_cover")],["contain",r("picture_fit_contain")]],l=>n.update({picture_fit:l==="contain"?"contain":null}))}
    ${M(r("picture_hint"),"nf-wide")}
  </div>`}var zb=/^(input_boolean|input_select|switch|binary_sensor|sensor|calendar|schedule|sun|person|device_tracker|input_text|select)\./;function Pb(t,e,n){let r=t.t,o=e.show_when??null,i=s=>n.update({show_when:{entity:o?.entity??"",state:o?.state??null,invert:o?.invert||void 0,...s}});return m`<div class="nf-form">
    ${z(t,r("furn_show_when"),o?.entity||null,void 0,D(t.hass,s=>zb.test(s)),s=>s&&s!=="none"?i({entity:s}):n.update({show_when:null}))}
    ${o?.entity?m`${j(t,r("furn_show_when_state"),o.state??"",s=>i({state:s||null}),{wide:!0,placeholder:t.hass?.states[o.entity]?.state??"on"})}
        ${O(t,r("furn_show_when_invert"),!!o.invert,s=>i({invert:s||void 0}))}`:g}
    ${M(r("furn_show_when_hint"),"nf-wide")}
  </div>`}function Er(t,e,n){let r=K(e.type)?.gangs??0,o=r?hp(t,e,r,n):ft(e.type)?pp(t,e,n):yb.has(e.type)?g:m`<div class="nf-form nf-links">${oa(t,e,n)}</div>`;return m`<section>
    <div class="nf-h3row"><h3>${e.name||t.t("furniture")}</h3>${n.lockButton}</div>
    <div class="nf-form">${$b(t,e,n)} ${vb(t,e,n.packs,n)} ${Sb(t,e,n)}</div>
    ${Eb(t,e,n)} ${e.type==="stairs"&&e.stair?_p(t,e,n):g} ${xb(t,e,n)} ${kb(t,e,n)}
    ${o} ${e.type.endsWith(":sprinkler")?m`<div class="nf-form">${R(t,t.t("spray_reach"),e.spray??3,i=>n.update({spray:Math.min(15,Math.max(.5,i))}),.5,.5)}${M(t.t("spray_hint"),"nf-wide")}</div>`:g}
    ${il(e.type)?Fb(t,e,n):g}
    ${K(e.type)?.pet?m`<div class="nf-form nf-links">${z(t,t.t("pet_room_sensor"),e.room_sensor??null,void 0,D(t.hass,i=>/^(sensor|device_tracker|input_select|select)\./.test(i)),i=>n.update({room_sensor:i&&i!=="none"?i:null}))}${M(t.t("pet_room_hint"),"nf-wide")}</div>`:g}
    ${gi(e.type)?up(t,e,gi(e.type),n):g} ${mi(K(e.type))?dp(t,e,n):g} ${e.type==="parking"?gp(t,e,n.packs,n):g}
    ${e.type.startsWith("pack:nextfloor.fahrzeuge:")&&t.admin?m`<section>${M(t.t("vehicle_to_spot_hint"))}<div class="nf-actions"><button class="nf-btn nf-primary" @click=${()=>n.toSpot(e)}>🅿 ${t.t("vehicle_to_spot")}</button></div></section>`:g}
    ${t.admin?Ab(t,e,n):g} ${Pb(t,e,n)} ${Rb(t,e,n)}
  </section>`}var Tb=["door","window","opening","garage_door"],Ob=/griff|handle|fenster|window|drehgriff/i;function Db(t){let e=[null,15,30,45,60,90,120,180];return t&&!e.includes(t)&&e.push(t),e.sort((n,r)=>(n??0)-(r??0))}function Ib(t){let{hass:e}=t,n=i=>e?.states[i],r=i=>n(i)?.attributes.device_class,o=i=>i.startsWith("binary_sensor.")&&Tb.includes(r(i)??"");return{covers:D(e,i=>i.startsWith("cover.")),positions:D(e,i=>/^(sensor|number|input_number)\./.test(i)&&Number.isFinite(Number(n(i)?.state))),contacts:D(e,i=>o(i)||ce(i)&&Ii(n(i))!==null),plainContacts:D(e,o),handles:D(e,i=>i.startsWith("binary_sensor.")?typeof n(i)?.attributes.window_state=="string":ce(i)&&(Ii(n(i))!==null||Ob.test(`${i} ${V(e,i)}`))),numbers:D(e,ce),locks:D(e,i=>i.startsWith("lock."))}}function sa(t,e,n){if(!t.hass)return null;let r=structuredClone(t.doc.floors);for(let o of r)for(let i of o.openings)i.id===e.id&&(i[n]=null);return Di(t.hass,r).get(e.id)?.[n]??null}var xt=t=>t==="none"?null:t;function Hb(t,e,n){let r=e.type==="door"?wi:vi,o=Jt({type:e.type,style:null},n.isExterior(e)),i=e.style&&r.includes(e.style)?e.style:"",s=[["",t.t("style_auto",{style:t.t(`style_${o}`)})],...r.map(a=>[a,t.t(`style_${a}`)])];return T(t,t.t("opening_style"),i,s,a=>n.update({style:a||null}),{wide:!0})}function ia(t,e,n,r,o){return m`<label class="nf-field"
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
  </label>`}function Lb(t,e,n){if(e.type!=="door")return g;let r=Jt(e,n.isExterior(e));return r==="sidelight"?m`${O(t,t.t("sidelight_hinge"),!!e.sidelight_hinge,o=>n.update({sidelight_hinge:o}),{wide:!1,title:t.t("sidelight_hinge_hint")})}
      ${ia(t,e,"sidelight_width","sidelight_width",n)}`:r==="sidelights"?m`${ia(t,e,"sidelight_width","sidelight_width_left",n)} ${ia(t,e,"sidelight_width2","sidelight_width_right",n)}`:g}function yp(t,e,n,r,o){let i=n===1,s=t.t,a=i?e.tilt:e.tilt2??null,l=i?e.contact:e.contact2,c=(i?e.sensor:e.sensor2)??(a&&a!=="none"?"contact_tilt":"contact"),u=["contact","handle","contact_tilt"].map(f=>[f,s(`sensor_kind_${f}`)]),h=f=>{let _=f==="contact_tilt"?{}:i?{tilt:null}:{tilt2:null};r.update({...i?{sensor:f}:{sensor2:f},..._})},d=f=>r.update(i?{contact:f}:{contact2:xt(f)}),p=e.tilt_angle&&e.tilt_angle!=="none";return m`${T(t,s("sensor_kind"),c,u,h,{wide:!0})}
    ${c==="handle"?z(t,s("handle_entity"),l,void 0,o.handles,f=>d(f==="none"?i?"none":null:f)):z(t,s("contact_entity"),l,i?sa(t,e,"contact"):void 0,o.plainContacts,d)}
    ${c==="contact_tilt"?z(t,s("tilt_entity"),a,void 0,o.contacts,f=>r.update(i?{tilt:xt(f)}:{tilt2:xt(f)})):g}
    ${i?m`${z(t,s("tilt_angle_entity"),e.tilt_angle??null,void 0,o.numbers,f=>r.update({tilt_angle:xt(f)}))}
        ${p?m`${R(t,s("tilt_angle_max"),e.tilt_max??15,f=>r.update({tilt_max:Math.min(90,Math.max(1,f))}),1,1)}
            ${R(t,s("tilt_angle_offset"),e.tilt_offset??0,f=>r.update({tilt_offset:f}),.5)}
            ${O(t,s("tilt_angle_invert"),!!e.tilt_invert,f=>r.update({tilt_invert:f}))}`:g}`:g}`}function Cb(t,e,n,r){let o=t.t,i=e.type==="window",s=sa(t,e,"cover"),a=e.cover!=="none"&&(e.cover||s);return m`${z(t,o(i?"cover_entity":"door_cover"),e.cover,s,r.covers,l=>n.update({cover:l}))}
    ${a?m`${z(t,o("cover_position_entity"),e.position??null,void 0,r.positions,l=>n.update({position:xt(l)}))}
        ${e.position?O(t,o("cover_position_invert"),!!e.position_inverted,l=>n.update({position_inverted:l})):g}
        ${O(t,o("device_confirm"),!!e.confirm,l=>n.update({confirm:l}),{title:o("cover_confirm_hint")})}
        ${i?m`${T(t,o("blind_kind"),e.blind??"roller",[["roller",o("blind_roller")],["venetian",o("blind_venetian")],["inside",o("blind_inside")]],l=>n.update({blind:l==="roller"?null:l}))}
            ${z(t,o("cover2_entity"),e.cover2??null,void 0,r.covers,l=>n.update({cover2:xt(l)}))}`:g}
        ${R(t,o("cover_my"),e.my_position??0,l=>n.update({my_position:l>0?Math.min(100,Math.round(l)):null}),5,0)}
        ${M(o("blind_hint"),"nf-wide")}`:g}`}function Wb(t,e,n,r){let o=t.t,i=e.leaves===2;return m`${z(t,o(i?"contact_main":"contact_entity"),e.contact,sa(t,e,"contact"),r.contacts,s=>n.update({contact:s}))}
    ${i&&e.type!=="garage"?z(t,o("contact_second"),e.contact2,void 0,r.contacts,s=>n.update({contact2:xt(s)})):g}
    ${e.type==="door"?O(t,o("door_shut"),!!e.shut,s=>n.update({shut:s}),{title:o("door_shut_hint")}):g}
    ${e.type==="door"&&e.style!=="sliding"&&e.style!=="passage"?T(t,o("door_angle"),String(e.open_angle??""),Db(e.open_angle).map(s=>[String(s??""),s?`${s}\xB0`:o("door_angle_default")]),s=>n.update({open_angle:s?Number(s):null}),{title:o("door_angle_hint")}):g}
    ${e.type==="door"?m`${z(t,o("opening_lock"),e.lock??null,void 0,r.locks,s=>n.update({lock:xt(s)}))}${M(o("opening_lock_hint"),"nf-wide")}`:g}`}function aa(t,e,n){let r=t.t,o=Ib(t),i=tn(e),[s,a,l]=[e.type==="window",e.type==="garage",e.type==="door"],c=p=>n.update(p),u=Object.keys(en).map(p=>m`<button class="nf-chip" aria-pressed=${p===i} @click=${()=>n.setPreset(e,p)}>${r(`preset_${p}`)}</button>`),h=[["left",r("hinge_left")],["right",r("hinge_right")]],d=[["",r("opening_mark_open")],["closed",r("opening_mark_closed")]];return m`<section>
    <div class="nf-h3row"><h3>${r(`preset_${i}`)}</h3>${n.lockButton}</div>
    ${t.admin?m`<div class="nf-presets" role="group" aria-label=${r("opening_type")}>${u}</div>`:g}
    ${t.admin&&!a?m`<div class="nf-actions">
          <button class="nf-btn" title=${r("flip_hinge_hint")} @click=${()=>c({hinge:e.hinge==="left"?"right":"left"})}>⇆ ${r(e.leaves===2?"flip_main_leaf":"flip_hinge")}</button>
          ${l?m`<button class="nf-btn" title=${r("flip_swing_hint")} @click=${()=>c({swing:e.swing==="out"?"in":"out"})}>⇅ ${r("flip_swing")}</button>`:g}
        </div>`:g}
    <div class="nf-form">
      ${R(t,r("width"),e.width,p=>c({width:Math.max(.3,p)}),.01,.3)}
      ${R(t,r("opening_position"),e.offset,p=>c({offset:Math.max(0,p)}),.01,0)}
      ${s?R(t,r("sill"),e.sill,p=>c({sill:Math.max(0,p)}),.01,0):g}
      ${R(t,r("opening_height"),e.height,p=>c({height:Math.max(.3,p)}),.01,.3)}
      ${a?g:Hb(t,e,n)} ${Lb(t,e,n)}
      ${s&&e.style!=="glass_wall"?T(t,r("window_opens"),e.opens??"turn",hl.map(p=>[p,r(`window_opens_${p}`)]),p=>c({opens:p==="turn"?null:p}),{wide:!0,title:r("window_opens_hint")}):g}
      ${T(t,r("opening_mark"),e.mark==="closed"?"closed":"",d,p=>c({mark:p==="closed"?"closed":null}),{wide:!0,title:r("opening_mark_hint")})}
      ${a?g:T(t,r(e.leaves===2?"main_leaf":"hinge"),e.hinge,h,p=>c({hinge:p}),{wide:!0})}
      ${s?T(t,r("sill_boards"),e.sill_boards??"auto",[["auto",r("sill_boards_auto")],["none",r("sill_boards_none")],["inside",r("sill_boards_inside")],["outside",r("sill_boards_outside")]],p=>c({sill_boards:p==="auto"?null:p}),{wide:!0}):g}
      ${s?O(t,r("opening_rain_warning"),e.rain_warning!==!1,p=>c({rain_warning:p?void 0:!1}),{wide:!0}):g}
      ${s&&n.isBelowGround?.(e)?O(t,r("opening_light_well"),e.light_well!==!1,p=>c({light_well:p?null:!1}),{wide:!0}):g}
      ${Cb(t,e,n,o)}
      ${s?m`${e.leaves===2?m`<h4 class="nf-lib-head nf-wide">${r("leaf_main")}</h4>`:g}${yp(t,e,1,n,o)}
          ${e.leaves===2?m`<h4 class="nf-lib-head nf-wide">${r("leaf_second")}</h4>${yp(t,e,2,n,o)}`:g}`:Wb(t,e,n,o)}
    </div>
    ${M(r(s?"opening_hint":a?"garage_hint":"door_hint"))}
    ${t.admin?m`<div class="nf-actions"><button class="nf-btn nf-danger" @click=${()=>n.remove()}>${r("delete")}</button></div>`:g}
  </section>`}function $n(t){let e=t.roof.floorsTopDown();return e.length<2?g:m`<div class="nf-seg nf-dev-source">${e.map(n=>m`<button aria-pressed=${n.id===t.floorId} @click=${()=>t.setFloorId(n.id)}>${n.name}</button>`)}</div>`}function Rr(t,e,n){return t.admin?m`<button class="nf-btn nf-fix" aria-pressed=${e} title=${t.t("fix_hint")} @click=${n}>${e?`\u{1F512} ${t.t("unfix")}`:`\u{1F513} ${t.t("fix")}`}</button>`:g}function Sn(t,e,n,r){return m`<div class="nf-seg nf-dev-source">${e.map(([o,i])=>m`<button aria-pressed=${o===n} ?disabled=${!t.admin} @click=${()=>r(o)}>${i}</button>`)}</div>`}function Kt(t,e){let{t:n,doc:r,hass:o}=t,i=n(`compass_${ls(e,r.settings.north??0)}`);if(e.key===Se)return n("solar_ground");if(e.wall){let l=r.floors.find(c=>c.id===e.wall.floorId);return`${n("solar_wall")} ${l?.name??""} \xB7 ${i} \xB7 ${G(o,e.lu,1)} m`}let s=r.settings.roof.sections??[],a=e.section?n("solar_section",{n:s.findIndex(l=>l.id===e.section)+1}):n("solar_main");return e.flat?`${a} \xB7 ${n("solar_flat")}`:`${a} \xB7 ${i} \xB7 ${Math.round(e.pitch)}\xB0`}var vp=(t,e)=>m`<div class="nf-h3row"><h3>${t}</h3>${e}</div>`,kp=(t,e)=>m`<button class="nf-btn nf-back" @click=${e}>‹ ${t}</button>`,wp=(t,e)=>n=>Math.max(t,Math.min(e,ue(n)));function Bb(t,e){let{host:n,roof:r}=t,o=n.t,i=w=>r.patchSection(w),s=e.shape==="flat"||e.shape==="parapet",a=e.shape==="pent",l=e.axis==="x"?[o("roof_side_top"),o("roof_side_bottom")]:[o("roof_side_left"),o("roof_side_right")],[c,u]=e.flip?[l[1],l[0]]:l,h=!!n.doc.settings.lock_plan,d=(w,k,x,E=.05,A=0)=>R(n,w,k,F=>x(Math.max(A,ue(F))),E,A),p=[...n.doc.floors].filter(w=>w.rooms.length>0).sort((w,k)=>k.elevation-w.elevation),f=Qi(n.doc,e)?.id,_=w=>{let k=n.doc.floors.find(A=>A.id===w);if(!k)return;let x=ue(k.elevation+k.height),E=x-e.base;i({base:x,eave_a:ue(e.eave_a+E),eave_b:ue(e.eave_b+E)})},y=h?m`<button class="nf-btn nf-fix" aria-pressed="true" title=${o("lock_plan_hint")} @click=${()=>t.toggleLockPlan()}>🔒 ${o("plan_locked")}</button>`:Rr(n,!!e.locked,()=>i({locked:!e.locked})),b=fl.map(w=>[w,o(`roof_shape_${w}`)]),v=(w,k)=>m`<button class="nf-btn" title=${o("roof_dormer_hint")} @click=${()=>r.addDormer(w)}>+ ${o("roof_dormer")} ${k}</button>`;return m`${kp(o("roof_sections"),()=>r.sectionId=null)}
    <section>
      ${$n(t)}
      ${vp(`${e.dormer?o("roof_dormer"):o("roof_section")} ${Td(n.doc.settings.roof.sections??[],e.id)}`,n.admin?y:g)}
      ${T(n,o("roof_shape"),e.shape,b,w=>i({shape:w,...w==="gable"||w==="hip"||w==="halfhip"?{}:{ends:null}}),{wide:!0})}
      ${e.shape==="gable"||e.shape==="hip"||e.shape==="halfhip"?Kb(n,e,i):g}
      ${s?g:Sn(n,[["x",o("roof_axis_x")],["z",o("roof_axis_z")]],e.axis,w=>i({axis:w}))}
      ${O(n,o("roof_open"),!!e.open,w=>i({open:w}),{title:o("roof_open_hint")})}
      <div class="nf-form">
        ${s?d(o("roof_height"),e.eave_a,w=>i({eave_a:w,eave_b:w})):m`${d(`${o("roof_eave")} ${a?"":c}`,e.eave_a,w=>i({eave_a:w}))}
            ${a?g:d(`${o("roof_eave")} ${u}`,e.eave_b,w=>i({eave_b:w}))}
            ${d(`${o("roof_pitch_short")} ${a?"":c}`,e.pitch_a,w=>i({pitch_a:Math.min(75,w)}),1)}
            ${a?g:d(`${o("roof_pitch_short")} ${u}`,e.pitch_b,w=>i({pitch_b:Math.min(75,w)}),1)}`}
        ${d(o("roof_base"),e.base,w=>i({base:w}))}
        ${e.points?.length?g:R(n,o("roof_rotation"),e.rotation??0,w=>i({rotation:(Math.round(w)%360+540)%360-180||null}),1)}
        ${T(n,o("roof_on_floor"),f??"",p.map(w=>[w.id,w.name]),_,{title:o("roof_on_floor_hint")})}
        ${M(o("roof_base_hint"),"nf-wide")}
        ${d(o("roof_overhang"),e.overhang??n.doc.settings.roof.overhang,w=>i({overhang:Math.min(2,w)}))}
      </div>
      ${s&&n.admin?m`${te(m`<button class="nf-btn" title=${o("roof_outline_hint")} @click=${()=>r.takeOutline()}>${o("roof_outline")}</button>`,e.points?m`<button class="nf-btn" @click=${()=>i({points:null})}>${o("roof_rect")}</button>`:g)}
          ${e.points?te(...e.points.map((w,k)=>m`<button class="nf-chip" title=${o("delete_point")} ?disabled=${(e.points?.length??0)<=3} @click=${()=>r.removeCorner(k)}>${k+1} ×</button>`)):g}
          ${M(o(e.points?"roof_points_hint":"roof_outline_hint"))}`:g}
      ${M(`${o("roof_ridge_height")}: ${pe(n.hass,zt(e))} \xB7 ${o("roof_section_hint")}`)}
      ${n.admin?te(s?g:m`<button class="nf-btn" title=${o("roof_swap_hint")} @click=${()=>i({flip:!e.flip})}>⇅ ${o("roof_swap")}</button>`,!s&&!e.dormer&&!e.open?m`${v("a",c)}${a?g:v("b",u)}`:g,m`<button class="nf-btn" @click=${()=>r.duplicateSection()}>${o("duplicate")}</button>`,m`<button class="nf-btn nf-danger" @click=${()=>r.removeSection()}>${o("delete")}</button>`):g}
    </section>`}function Vb(t,e){let{host:n,roof:r}=t,o=n.t,i=X(n.doc),s=d=>r.patchWindow(d),a=D(n.hass,d=>d.startsWith("cover.")),l=D(n.hass,d=>ho(d)||ce(d)),c=(d,p,f,_)=>z(n,o(d),p??null,void 0,f,y=>s({[_]:y==="none"?null:y})),u=d=>{let p=i.find(f=>f.key===d);p&&s({...lr(p,e.id),w:e.w,h:e.h,cover:e.cover,contact:e.contact,tilt:e.tilt,window:e.window,name:e.name})},h=(n.doc.settings.roof.windows??[]).findIndex(d=>d.id===e.id)+1;return m`${kp(o("roof_sections"),()=>r.windowId=null)}
    <section>
      ${vp(`\u{1FA9F} ${o("roof_window")} ${h}`,Rr(n,!!e.locked,()=>s({locked:!e.locked})))}
      <div class="nf-form">
        ${T(n,o("solar_face"),e.face,i.map(d=>[d.key,Kt(n,d)]),u,{wide:!0})}
        ${R(n,o("width"),e.w??.78,d=>s({w:wp(.3,4)(d)}),.01,.3)}
        ${R(n,o("height_m"),e.h??1.18,d=>s({h:wp(.3,4)(d)}),.01,.3)}
        ${R(n,o("solar_u"),e.u,d=>s({u:ue(d)}),.05)} ${R(n,o("solar_v"),e.v,d=>s({v:ue(d)}),.05)}
        ${c("cover_entity",e.cover,a,"cover")} ${c("contact_entity",e.contact,l,"contact")}
        ${c("roof_window_tilt",e.tilt,l,"tilt")} ${c("roof_window_motor",e.window,a,"window")}
        ${j(n,o("roof_window_name"),e.name??"",d=>s({name:d||null}),{wide:!0,maxlength:64})}
      </div>
      ${M(o("roof_window_motor_hint"))} ${M(o("roof_window_hint"))}
      ${n.admin?te(m`<button class="nf-btn nf-danger" @click=${()=>r.removeWindow()}>${o("delete")}</button>`):g}
    </section>`}function Nb(t){let{host:e,roof:n}=t,r=e.doc.settings.roof.windows??[],o=new Map(X(e.doc).map(s=>[s.key,s])),i=s=>{n.windowId=s,n.sectionId=null};return m`<section>
    <h3>🪟 ${e.t("roof_windows")}</h3>
    ${M(e.t(o.size>0?"roof_windows_hint":"solar_no_roof"))}
    ${r.length>0?m`<div class="nf-room-list">
          ${r.map((s,a)=>{let l=o.get(s.face);return m`<div class="nf-row"><button class="nf-dev-name" @click=${()=>i(s.id)}><span>${e.t("roof_window")} ${a+1} · ${l?Kt(e,l):e.t("solar_face_gone")}</span></button></div>`})}
        </div>`:g}
    ${te(m`<button class="nf-btn" ?disabled=${!e.admin||o.size===0} @click=${()=>n.addWindow()}>+ ${e.t("roof_window")}</button>`)}
  </section>`}function Kb(t,e,n){let r=t.t,o=e.shape,[i,s]=e.ends??[o,o],a=["gable","hip","halfhip"].map(u=>[u,r(`roof_shape_${u}`)]),l=u=>n({ends:u[0]===o&&u[1]===o?null:u}),c=i==="halfhip"||s==="halfhip";return m`<div class="nf-form">
    ${T(t,r("roof_end_start"),i,a,u=>l([u,s]))}
    ${T(t,r("roof_end_end"),s,a,u=>l([i,u]))}
    ${c?m`<label class="nf-field nf-wide" title=${r("roof_halfhip_hint")}
          >${r("roof_halfhip")} · ${Math.round((e.halfhip??.55)*100)} %
          <input type="range" min="20" max="90" step="5" .value=${String(Math.round((e.halfhip??.55)*100))} ?disabled=${!t.admin} @change=${u=>n({halfhip:Number(u.target.value)/100})} />
        </label>`:g}
  </div>`}function xp(t){let{host:e,roof:n}=t,r=e.doc.settings.roof,o=r.type==="custom";if(n.window)return Vb(t,n.window);if(o&&n.section)return Bb(t,n.section);let i=o?r.sections??[]:[],s=e.t,a=(l,c)=>`${c+1} \xB7 ${l.dormer?s("roof_dormer"):s(`roof_shape_${l.shape}`)} \xB7 ${G(e.hass,Math.abs(l.x1-l.x0),1)} \xD7 ${G(e.hass,Math.abs(l.z1-l.z0),1)} m \xB7 ${s("roof_ridge_height")} ${G(e.hass,zt(l),1)} m`;return m`<section>
      ${$n(t)}
      <h3>${s("roof_sections")}</h3>
      ${M(s("roof_sections_hint"))}
      ${o?m`<div class="nf-room-list">${i.map((l,c)=>m`<div class="nf-row"><button class="nf-dev-name" @click=${()=>n.sectionId=l.id}><span>${a(l,c)}</span></button></div>`)}</div>
          ${te(m`<button class="nf-btn" ?disabled=${!e.admin} @click=${()=>n.useSections(!0)}>${s("roof_sections_regen")}</button>`,m`<button class="nf-btn" ?disabled=${!e.admin} @click=${()=>e.change(l=>l.settings.roof.type="gable")}>${s("roof_sections_off")}</button>`)}`:te(m`<button class="nf-btn nf-primary" ?disabled=${!e.admin} @click=${()=>n.useSections()}>${s("roof_sections_start")}</button>`)}
    </section>
    ${Nb(t)}`}var la=40,$p=60;function ca(t){let e=new Set((t.solar??[]).map(n=>n.string).filter(Boolean));t.strings=(t.strings??[]).filter(n=>e.has(n.id))}function Sp(t,e,n,r){let o=t.solar?.find(i=>i.id===e);if(o){if(n==="new"){let i=t.strings??[],s={id:r.id,name:r.name(i.length+1),entity:o.entity??null,inverter:null};t.strings=[...i,s],o.string=s.id}else o.string=n;ca(t)}}function Mp(t,e){let n=new Set(t??[]);return n.delete(e)||n.add(e),n.size>0?[...n].sort():null}function Ep(t){let e=t.split(/[,;\s]+/).map(r=>Number.parseInt(r,10)).filter(r=>Number.isFinite(r)&&r>=0);return e.length===0?null:e.length===1?{cols:Math.max(1,Math.min($p,e[0])),layout:null,skip:null}:{layout:e.slice(0,la).map(r=>Math.min($p,r)),rows:Math.min(la,e.length),cols:Math.max(1,...e),skip:null}}function Rp(t,e){let n=Math.max(1,Math.min(la,Math.round(e))),r=t.layout;return r?.length?{rows:n,layout:Array.from({length:n},(o,i)=>r[i]??r[r.length-1])}:{rows:n}}var Ap=t=>t.layout?.length?t.layout.join(", "):String(t.cols),Gb=["portrait","look","name","string","entity","module_w","module_h","wp"];function Ub(t){let e={};for(let n of Gb)e[n]=t[n];return e}function Fp(t,e,n){let r=Ub(e);if(n===Se)return{...sr(t,e.id),...r,rows:e.rows,cols:e.cols};let o=X(t).find(s=>s.key===n);if(o)return ao(o,{...e,...r});let i=ze(t).find(s=>s.key===n);return i?ao(i,{...e,...r,rows:1}):null}var zp=400;function ua(t,e){let n=t?Te(t,e).length:0;return{modules:n,kwp:n*(e.wp??zp)/1e3}}function Pp(t){let{host:e,roof:n}=t,r=e.t,o=e.doc.settings.roof.solar??[],i=e.doc.settings.roof.strings??[],s=X(e.doc),a=new Map(o.map(u=>[u.id,me(e.doc,u,s)])),l=(u,h)=>{let d=a.get(u.id),p=ua(d,u),f=r("solar_summary",{n:p.modules,kwp:G(e.hass,p.kwp,1)});return m`<div class="nf-row">
      <button class="nf-dev-name" @click=${()=>n.selectField(u.id)}>
        <span>${u.name||`${r("solar_field")} ${h+1}`} · ${d?Kt(e,d):r("solar_face_gone")} · ${f}</span>
      </button>
    </div>`},c=u=>{let h=o.filter(_=>_.string===u.id),d=h.map(_=>ua(a.get(_.id),_)),p=d.reduce((_,y)=>_+y.modules,0),f=d.reduce((_,y)=>_+y.kwp,0);return m`<p class="nf-sub">🔗 <b>${u.name}</b> · ${r("solar_string_sum",{fields:h.length,n:p,kwp:G(e.hass,f,1)})}</p>`};return m`<section>
    ${$n(t)}
    <h3>☀ ${r("solar_fields")}</h3>
    ${M(r(s.length>0?"solar_hint":"solar_no_roof"))}
    ${o.length>0?m`<div class="nf-room-list">${o.map(l)}</div>`:g}
    ${te(m`<button class="nf-btn nf-primary" ?disabled=${!e.admin||s.length===0} @click=${()=>n.addField()}>+ ${r("solar_add")}</button>`,m`<button class="nf-btn" ?disabled=${!e.admin} @click=${()=>n.addGroundField()}>+ ${r("solar_add_ground")}</button>`,m`<button class="nf-btn" ?disabled=${!e.admin||!t.floorId} @click=${()=>n.addWallField()}>+ ${r("solar_add_wall")}</button>`)}
    ${i.length>0?m`<h4 class="nf-lib-head">${r("solar_strings")}</h4>${i.map(c)}`:g}
  </section>`}function jb(t,e){let{host:n,roof:r}=t,o=n.t,i=D(n.hass,d=>pn(n.hass,d)),s=n.doc.settings.roof.strings??[],a=s.find(d=>d.id===e.string),l=[["",o("solar_string_none")],...s.map(d=>[d.id,d.name]),["new",`+ ${o("solar_string_new")}`]],c=T(n,o("solar_string"),e.string??"",l,d=>r.setString(d===""?null:d),{wide:!0});if(!a)return m`${c}${z(n,o("solar_entity"),e.entity??null,void 0,i,d=>r.patchField({entity:d==="none"?null:d}))}`;let u=n.hass?Ft(n.hass,n.doc.floors):null,h=n.doc.floors.flatMap(d=>d.furniture.filter(p=>p.type==="inverter").map(p=>({item:p,floor:d}))).map(({item:d,floor:p},f)=>{let _=u?.get(d.id)?.entity,y=d.name?.trim()||(_?V(n.hass,_):"");return[d.id,`${y||`${o("furn_inverter")} ${f+1}`} \xB7 ${p.name}`]});return m`${c}
    ${j(n,o("solar_string_name"),a.name,d=>r.patchString({name:d||a.name}),{wide:!0})}
    ${z(n,o("solar_string_entity"),a.entity??null,void 0,i,d=>r.patchString({entity:d==="none"?null:d}))}
    ${T(n,o("solar_string_inverter"),a.inverter??"",[["",o(h.length>0?"solar_string_inverter_none":"solar_string_inverter_missing")],...h],d=>r.patchString({inverter:d||null}),{wide:!0})}`}function Tp(t,e){let{host:n,roof:r}=t,o=n.t,i=x=>r.patchField(x),s=X(n.doc),a=me(n.doc,e,s),l=e.face===Se,c=tr(e),u=ua(a,e),h=c.reduce((x,E)=>x+E,0)-(e.skip?.length??0),d=(n.doc.settings.roof.solar??[]).findIndex(x=>x.id===e.id)+1,p=[...a?[]:[["",o("solar_face_gone")]],...s.map(x=>[x.key,Kt(n,x)]),[Se,o("solar_ground")],...ze(n.doc).map(x=>[x.key,Kt(n,x)])],f=x=>{let E=Fp(n.doc,e,x);E&&i(E)},_=(x,E,A=ue)=>F=>Math.max(x,Math.min(E,A(F))),y=x=>i(ar(n.doc,e,x)),b=x=>i({rotation:(Math.round(x)%360+360)%360||null}),v=a?.wall?"solar_flip_wall":"solar_flip",w=(x,E,A)=>R(n,o(E),e[x]??A,F=>i({[x]:_(.3,3)(F)}),.01,.3),k=!!e.layout?.length&&new Set(e.layout).size>1;return m`<button class="nf-btn nf-back" @click=${()=>r.solarId=null}>‹ ${o("solar_fields")}</button>
    <section>
      ${$n(t)}
      <div class="nf-h3row">
        <h3>☀ ${e.name||`${o("solar_field")} ${d}`}</h3>
        ${Rr(n,!!e.locked,()=>i({locked:!e.locked}))}
      </div>
      <div class="nf-form">
        ${j(n,o("solar_name"),e.name??"",x=>i({name:x||null}),{wide:!0,placeholder:o("solar_name_hint")})}
        ${T(n,o("solar_face"),a?e.face:"",p,f,{wide:!0})}
        ${R(n,o("solar_rows"),c.length,x=>i(Rp(e,x)),1,1)}
        <label class="nf-field" title=${o("solar_cols_hint")}
          >${o("solar_cols")}
          <input
            type="text"
            inputmode="numeric"
            ?disabled=${!n.admin}
            .value=${Ap(e)}
            @change=${x=>{let E=Ep(x.target.value);E&&i(E)}}
          />
        </label>
      </div>
      ${M(`${a&&!a.unbounded?`${o("solar_face_size",{w:G(n.hass,a.lu,1),h:G(n.hass,a.ls,1)})} \xB7 `:""}${o("solar_cols_hint")}`)}
      ${k?Sn(n,["left","center","right"].map(x=>[x,o(`solar_align_${x}`)]),e.align??"left",x=>i({align:x})):g}
      ${Sn(n,[[!0,o("solar_portrait")],[!1,o("solar_landscape")]],e.portrait!==!1,x=>i({portrait:x}))}
      ${Sn(n,[["black",o("solar_look_black")],["blue",o("solar_look_blue")]],e.look==="blue"?"blue":"black",x=>i({look:x}))}
      <div class="nf-form">
        ${w("module_w","solar_module_w",1.13)} ${w("module_h","solar_module_h",1.72)}
        ${R(n,o("solar_wp"),e.wp??zp,x=>i({wp:_(50,1500,Math.round)(x)}),5,50)}
      </div>
      ${te(m`<button class="nf-btn" aria-pressed=${r.picking} ?disabled=${!n.admin} @click=${()=>r.picking=!r.picking}>${r.picking?"\u2713 ":""}${o("solar_pick")}</button>`,e.skip?.length?m`<button class="nf-btn" ?disabled=${!n.admin} @click=${()=>i({skip:null})}>${o("solar_pick_all")}</button>`:g)}
      ${r.picking?M(o("solar_pick_hint")):g}
      <div class="nf-form">
        ${l?m`${R(n,o("solar_base"),e.base??0,x=>i({base:x>.001?Math.min(60,ue(x)):null}),.05,0)}
            ${R(n,o("solar_rotation"),e.rotation??0,y,5)}
            ${te(m`<button class="nf-chip" ?disabled=${!n.admin} @click=${()=>y((e.rotation??0)-15)}>↺ 15°</button>`,m`<button class="nf-chip" ?disabled=${!n.admin} @click=${()=>y((e.rotation??0)+15)}>↻ 15°</button>`)}`:m`${R(n,o("solar_u"),e.u,x=>i({u:ue(x)}),.05)} ${R(n,o(a?.wall?"solar_v_wall":"solar_v"),e.v,x=>i({v:ue(x)}),.05)}`}
        ${a?.flat&&!l?R(n,o("solar_rotation"),e.rotation??0,b,5):g}
        ${a?.wall?R(n,o("solar_tilt_wall"),e.tilt??0,x=>i({tilt:_(0,90,Math.round)(x)}),5,0):g}
        ${a?.flat?R(n,o("solar_tilt"),e.tilt??15,x=>i({tilt:_(0,45,Math.round)(x)}),1,0):g}
        ${a?.flat&&!a.unbounded?O(n,o("solar_rack_ew"),e.rack==="ew",x=>i({rack:x?"ew":null}),{title:o("solar_rack_ew_hint")}):g}
        ${a&&!a.flat&&!a.wall?R(n,o("solar_rack_tilt"),e.tilt??0,x=>i({tilt:_(0,45,Math.round)(x)||null}),1,0):g}
        ${a?.wall||a?.flat?O(n,o(v),!!e.flip,x=>i({flip:x})):g}
      </div>
      ${a?.flat&&!l?te(m`<button class="nf-chip" ?disabled=${!n.admin} @click=${()=>b((e.rotation??0)-90)}>↺ 90°</button>`,m`<button class="nf-chip" ?disabled=${!n.admin} @click=${()=>b((e.rotation??0)+90)}>↻ 90°</button>`):g}
      <p class="nf-sub">
        ${o("solar_summary",{n:u.modules,kwp:G(n.hass,u.kwp,1)})}${u.modules<h?m` · <b>${o("solar_partial",{n:u.modules,total:h})}</b>`:g}
      </p>
      <h4 class="nf-lib-head">🔗 ${o("solar_string")}</h4>
      <div class="nf-form">${jb(t,e)}</div>
      ${M(o("solar_string_hint"))} ${M(o("solar_form_hint"))}
      ${n.admin?te(m`<button class="nf-btn" ?disabled=${!a} @click=${()=>a&&i({...dn(a,e.id),portrait:e.portrait})}>${o("solar_fit")}</button>`,m`<button class="nf-btn nf-danger" @click=${()=>r.removeField()}>${o("delete")}</button>`):g}
    </section>`}var Op=t=>Math.round(t*1e3)/1e3,No=class{ctx;sectionSel=null;windowSel=null;fieldSel=null;pickMode=!1;constructor(e){this.ctx=e}get sectionId(){return this.sectionSel}set sectionId(e){this.sectionSel=e,this.ctx.refresh()}get windowId(){return this.windowSel}set windowId(e){this.windowSel=e,this.ctx.refresh()}get solarId(){return this.fieldSel}set solarId(e){this.fieldSel=e,this.ctx.refresh()}get picking(){return this.pickMode}set picking(e){this.pickMode=e,this.ctx.refresh()}get doc(){return this.ctx.host.doc}get settings(){return this.doc.settings.roof}get admin(){return this.ctx.host.admin}get section(){return this.sectionSel?this.settings.sections?.find(e=>e.id===this.sectionSel):void 0}get window(){return this.windowSel?this.settings.windows?.find(e=>e.id===this.windowSel):void 0}get field(){return this.fieldSel?this.settings.solar?.find(e=>e.id===this.fieldSel):void 0}isFixed(e){return!!e&&(!!e.locked||!!this.doc.settings.lock_plan)}useSections(e=!1){if(!this.admin)return;let n=(this.settings.sections??[]).length>0;e&&n&&!this.ctx.confirm(this.ctx.host.t("roof_regen_confirm"))||(this.ctx.host.change(r=>{r.settings.roof.type="custom",(e||!n)&&(r.settings.roof.sections=Ji(r,()=>L("roof")))}),this.sectionId=null)}addSection(e,n){if(!this.admin)return;let r=zd(this.doc,e,n);this.ctx.host.change(o=>{o.settings.roof.type="custom",o.settings.roof.sections=[...o.settings.roof.sections??[],r]}),this.sectionId=r.id}takeOutline(){let e=this.ctx.host.floor;if(!e||!this.sectionSel||!this.admin)return;let{wall_exterior:n,wall_interior:r}=this.doc.settings,o=Ni(e.rooms,e.walls??[],n,r);if(!o)return;let i=o.map(([s,a])=>[Op(s),Op(a)]);this.patchSection({shape:"flat",points:i,...gt(i)})}addDormer(e){let n=this.section;if(!n||!this.admin)return;let r=Gi(n,e,L("roof"));this.ctx.host.change(o=>{o.settings.roof.sections=[...o.settings.roof.sections??[],r]}),this.sectionId=r.id}patchSection(e){let n=this.sectionSel;!n||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.sections?.find(i=>i.id===n);o&&Object.assign(o,e)})}removeCorner(e){let n=this.sectionSel;!n||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.sections?.find(i=>i.id===n);o&&Dd(o,e)})}removeSection(){let e=this.sectionSel;!e||!this.admin||(this.ctx.host.change(n=>n.settings.roof.sections=(n.settings.roof.sections??[]).filter(r=>r.id!==e)),this.sectionId=null)}duplicateSection(){let e=this.section;if(!e||!this.admin)return;let n=Pd(e);this.ctx.host.change(r=>r.settings.roof.sections=[...r.settings.roof.sections??[],n]),this.sectionId=n.id}addWindow(){if(!this.admin)return;let e=this.doc.settings.north??0,n=ur(X(this.doc).filter(o=>!o.flat),e)??X(this.doc)[0];if(!n)return;let r=lr(n,L("rwin"));this.ctx.host.change(o=>o.settings.roof.windows=[...o.settings.roof.windows??[],r]),this.windowSel=r.id,this.sectionId=null}patchWindow(e){let n=this.windowSel;!n||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.windows?.find(s=>s.id===n);if(!o)return;Object.assign(o,e);let i=X(r).find(s=>s.key===o.face);i&&Object.assign(o,lt(i,_t(o)))})}removeWindow(){let e=this.windowSel;!e||!this.admin||(this.ctx.host.change(n=>n.settings.roof.windows=(n.settings.roof.windows??[]).filter(r=>r.id!==e)),this.windowId=null)}addField(){if(!this.admin)return;let e=X(this.doc),n=new Set((this.settings.solar??[]).map(i=>i.face)),r=this.doc.settings.north??0,o=ur(e.filter(i=>!n.has(i.key)),r)??ur(e,r);o&&(this.appendField(dn(o,L("pv"))),this.sectionSel=null)}addWallField(){let e=this.ctx.floorId()??this.doc.floors[0]?.id,n=this.admin&&e?os(this.doc,L("pv"),e):null;n&&this.appendField(n)}addGroundField(){this.admin&&this.appendField(sr(this.doc,L("pv")))}appendField(e){this.ctx.host.change(n=>n.settings.roof.solar=[...n.settings.roof.solar??[],e]),this.solarId=e.id}selectField(e){this.fieldSel=e,this.sectionSel=null;let n=this.settings.solar?.find(r=>r.id===e);n?.face.startsWith("wall:")&&this.ctx.setFloorId(n.face.split(":")[1]),this.ctx.refresh()}patchField(e){this.editField((n,r)=>{Object.assign(n,e);let o=me(r,n);o&&Object.assign(n,lt(o,n))})}toggleCell(e){this.editField(n=>n.skip=Mp(n.skip,e))}editField(e){let n=this.fieldSel;!n||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.solar?.find(i=>i.id===n);o&&e(o,r)})}setString(e){let n=this.fieldSel;!n||!this.admin||this.ctx.host.change(r=>Sp(r.settings.roof,n,e,{id:L("str"),name:o=>this.ctx.host.t("solar_string_n",{n:o})}))}patchString(e){let n=this.field?.string;!n||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.strings?.find(i=>i.id===n);o&&Object.assign(o,e)})}removeField(){let e=this.fieldSel;!e||!this.admin||(this.ctx.host.change(n=>{n.settings.roof.solar=(n.settings.roof.solar??[]).filter(r=>r.id!==e),ca(n.settings.roof)}),this.solarId=null)}floorsTopDown(){return[...this.doc.floors].sort((e,n)=>n.elevation-e.elevation)}};var Dp=(t,e)=>t.floors.flatMap(n=>n.furniture).find(n=>n.type===e),Zb=t=>!t||t==="none";async function Ip(t){let e;try{e=await t.hass.callWS({type:"energy/get_prefs"})}catch{return{kind:"failed"}}let n=xu(t.hass,e),r=0,o=(i,s,a)=>{if(!a)return;let l=Dp(t.doc(),i);!l&&t.canAdd()&&(t.addDevice(i),l=Dp(t.doc(),i)),!(!l||!Zb(l[s]))&&(t.setField(l.id,s,a),r++)};return o("meter","power",n.grid),o("inverter","power",n.solar),o("home_battery","power",n.battery),o("home_battery","soc",n.battery_soc),{kind:"done",filled:r}}var qb=/garage|carport/,Yb=/hwr|hauswirt|technik|keller|abstell|utility|basement|boiler|heiz/,Xb=/flur|diele|eingang|hall|entr|lobby/,Hp=.25,Mn=t=>Math.round(t*1e3)/1e3;function Qb(t,e,n){let r=e.rooms.filter(u=>u.points.length>=3),o=u=>r.find(h=>u.test(n.roomLabel(h).toLowerCase())),i=r.find(u=>e.furniture.some(h=>h.type==="parking"&&C([h.x,h.z],u.points))),s=o(qb)??i,a=o(Yb),l=t==="wallbox"?s:t==="meter"?a??o(Xb)??s:a??s,c=[...r].sort((u,h)=>Math.abs(he(h.points))-Math.abs(he(u.points)))[0];return l??n.selected??c}function Jb(t,e){let[n,r]=ke(t.points),o=t.points.some((s,a)=>!e.has(a)),i=null;return t.points.forEach((s,a)=>{if(o&&e.has(a))return;let l=t.points[(a+1)%t.points.length],c=Math.hypot(l[0]-s[0],l[1]-s[1]);if(i&&c<=i.length)return;let u=[(s[0]+l[0])/2,(s[1]+l[1])/2],h=[-(l[1]-s[1])/c+0,(l[0]-s[0])/c+0];(n-u[0])*h[0]+(r-u[1])*h[1]<0&&(h=[0-h[0],0-h[1]]),i={mid:u,inward:h,length:c}}),i}function Lp(t,e,n,r){let[o,i,s]=Ge(t),a={id:L("furniture"),type:t,rotation:0,w:o,d:i,h:s,variant:null};if(t==="grid_point"){let p=Su(e),[f,_]=p?[p.x,p.z]:r.fallback;return{...a,x:Mn(f),z:Mn(_)}}let l=Qb(t,n,r),[c,u]=l?ke(l.points):r.fallback;if(l){let p=new Set(n.openings.filter(_=>_.room_id===l.id).map(_=>_.edge)),f=Jb(l,p);f&&([c,u]=[f.mid[0]+f.inward[0]*(i/2+Hp),f.mid[1]+f.inward[1]*(i/2+Hp)])}let h={...a,x:Mn(c),z:Mn(u)},d=l?Un({...n,furniture:[...n.furniture,h]},h,e.settings.wall_interior):null;return d?{...h,x:Mn(d.x),z:Mn(d.z),rotation:d.rotation}:h}var Ko=class{limit;undoStack=[];redoStack=[];constructor(e=100){this.limit=e}get canUndo(){return this.undoStack.length>0}get canRedo(){return this.redoStack.length>0}record(e){this.undoStack.push(JSON.stringify(e)),this.undoStack.length>this.limit&&this.undoStack.shift(),this.redoStack=[]}undo(e){let n=this.undoStack.pop();return n===void 0?null:(this.redoStack.push(JSON.stringify(e)),JSON.parse(n))}redo(e){let n=this.redoStack.pop();return n===void 0?null:(this.undoStack.push(JSON.stringify(e)),JSON.parse(n))}};var da=t=>Math.round(t*1e3)/1e3,En="unmovable",ha="no change";function Cp(t,e,n,r){let o=i=>[da(i[0]+n),da(i[1]+r)];switch(e.kind){case"device":return t.placements.some(i=>i.entity_id===e.id)?{apply(i){let s=i.placements.find(a=>a.entity_id===e.id);s&&([s.x,s.z]=o([s.x,s.z]))}}:En;case"furniture":return{apply(i){let s=i.furniture.find(a=>a.id===e.id);s&&([s.x,s.z]=o([s.x,s.z]))}};case"wall":return{apply(i){let s=(i.walls??[]).find(a=>a.id===e.id);s&&([s.a,s.b]=[o(s.a),o(s.b)])}};case"outdoor":return{apply(i){let s=i.outdoor.find(a=>a.id===e.id);s&&(s.points=s.points.map(o))}};case"opening":{let i=t.openings.find(p=>p.id===e.id),s=i?it(i,t.rooms,t.walls??[]):null;if(!i||!s)return En;let a=s.room.points[s.edge],l=s.room.points[(s.edge+1)%s.room.points.length],c=Math.hypot(l[0]-a[0],l[1]-a[1])||1,u=(n*(l[0]-a[0])+r*(l[1]-a[1]))/c;if(Math.abs(u)<1e-9)return ha;let h=Math.min(i.width,c)/2,d=da(Math.min(c-h,Math.max(h,i.offset+u)));return{apply(p){let f=p.openings.find(_=>_.id===e.id);f&&(f.offset=d)}}}case"room":{let i=t.rooms.find(a=>a.id===e.id);if(!i)return En;let s=new Set(t.placements.filter(a=>C([a.x,a.z],i.points)).map(a=>a.entity_id));return{apply(a){let l=a.rooms.find(c=>c.id===e.id);if(l){if(e.corner!==null&&e.corner<l.points.length){l.points[e.corner]=o(l.points[e.corner]);return}l.points=l.points.map(o);for(let c of a.placements)s.has(c.entity_id)&&([c.x,c.z]=o([c.x,c.z]))}}}}}}var Go=t=>Math.round(t*1e3)/1e3,pa=t=>(t+90)%360;function Wp(t,e,n){let r=o=>[o.x,o.z]=e([o.x,o.z]);for(let o of t.rooms)o.points=o.points.map(e);for(let o of t.furniture)r(o),n&&(o.rotation=pa(o.rotation));for(let o of t.placements)r(o),n&&(o.rotation=pa(o.rotation??0));for(let o of t.outdoor)o.points=o.points.map(e);for(let o of t.walls??[])[o.a,o.b]=[e(o.a),e(o.b)];t.background&&(r(t.background),n&&(t.background.rotation=pa(t.background.rotation??0)))}function ey(t,e){for(let r of t.settings.roof.sections??[]){let o=[e([r.x0,r.z0]),e([r.x1,r.z0]),e([r.x1,r.z1]),e([r.x0,r.z1])],[i,s]=[o.map(a=>a[0]),o.map(a=>a[1])];[r.x0,r.x1,r.z0,r.z1]=[Math.min(...i),Math.max(...i),Math.min(...s),Math.max(...s)],r.points&&(r.points=r.points.map(e))}let n=t.energy.meter;n&&([n.x,n.z]=e([n.x,n.z]))}function Bp(t,e,n,r){if(e.allFloors){for(let o of t.floors)Wp(o,n,r);ey(t,n)}else{let o=t.floors.find(i=>i.id===e.floorId);o&&Wp(o,n,r)}}function Vp(t,e,n,r){Bp(t,e,([o,i])=>[Go(o+n),Go(i+r)],!1)}function ty(t,e){let r=(e.allFloors?t.floors:t.floors.filter(s=>s.id===e.floorId)).flatMap(s=>s.rooms.flatMap(a=>a.points));if(r.length===0)return null;let[o,i]=[r.map(s=>s[0]),r.map(s=>s[1])];return[(Math.min(...o)+Math.max(...o))/2,(Math.min(...i)+Math.max(...i))/2]}function Np(t,e){let n=ty(t,e);if(!n)return!1;let[r,o]=n;return Bp(t,e,([i,s])=>[Go(r-(s-o)),Go(o+(i-r))],!0),!0}var Uo=class{onChange;ids={room:null,opening:null,furniture:null,device:null,outdoor:null,wall:null};cornerSel=null;edgeSel=null;constructor(e){this.onChange=e}set(e,n){this.ids[e]=n,this.onChange()}get room(){return this.ids.room}set room(e){this.set("room",e)}get opening(){return this.ids.opening}set opening(e){this.set("opening",e)}get furniture(){return this.ids.furniture}set furniture(e){this.set("furniture",e)}get device(){return this.ids.device}set device(e){this.set("device",e)}get outdoor(){return this.ids.outdoor}set outdoor(e){this.set("outdoor",e)}get wall(){return this.ids.wall}set wall(e){this.set("wall",e)}get corner(){return this.cornerSel}set corner(e){this.cornerSel=e,this.onChange()}get edge(){return this.edgeSel}set edge(e){this.edgeSel=e,this.onChange()}select(e,n,r){let o=this.ids.room,i={room:null,opening:null,furniture:null,device:null,outdoor:null,wall:null};i[e]=n,e==="room"?i.room=n:e!=="outdoor"&&e!=="wall"&&(i.room=o),e==="device"&&n&&(i.room=r.roomOfDevice(n)??i.room),e==="opening"&&n&&(i.room=r.roomOfOpening(n)??i.room),(e!=="room"||n!==o)&&(this.cornerSel=null),this.edgeSel=null,this.ids=i,this.onChange()}get target(){for(let e of["device","opening","furniture","wall","outdoor","room"]){let n=this.ids[e];if(n)return{kind:e,id:n}}return null}};var jo=class{onChange;menuOpen=!1;packagesOpen=!1;draft=null;shiftXMetres=0;shiftZMetres=0;wholeHouse=!1;line=null;query="";source="area";unfolded=new Set;copyChoice=null;constructor(e){this.onChange=e}get floorMenu(){return this.menuOpen}set floorMenu(e){this.menuOpen=e,this.onChange()}get floorCopy(){return this.copyChoice}set floorCopy(e){this.copyChoice=e,this.onChange()}get packages(){return this.packagesOpen}set packages(e){this.packagesOpen=e,this.onChange()}get spots(){return this.draft}set spots(e){this.draft=e,this.onChange()}get shiftX(){return this.shiftXMetres}set shiftX(e){this.shiftXMetres=e,this.onChange()}get shiftZ(){return this.shiftZMetres}set shiftZ(e){this.shiftZMetres=e,this.onChange()}get shiftAll(){return this.wholeHouse}set shiftAll(e){this.wholeHouse=e,this.onChange()}get notice(){return this.line}set notice(e){this.line=e,this.onChange()}get deviceQuery(){return this.query}set deviceQuery(e){this.query=e,this.onChange()}get deviceSource(){return this.source}set deviceSource(e){this.source=e,this.query="",this.onChange()}isUnfolded(e){return this.unfolded.has(e)}toggleUnfolded(e){let n=new Set(this.unfolded);n.delete(e)||n.add(e),this.unfolded=n,this.onChange()}};function Kp(t,e,n){let r=t.floors.length,o=e?.name??(r===0?n.first:n.next(r));return{...At(L("floor"),o,Rl(t.floors,e?.level)),ha_floor:e?.floor_id??null}}function fa(t,e){let n=t.findIndex(o=>o.elevation>e.elevation),r=n<0?t.length:n;return[...t.slice(0,r),e,...t.slice(r)]}function Gp(t,e,n){let r=t.findIndex(s=>s.id===e),o=r+n;if(r<0||o<0||o>=t.length)return[...t];let i=[...t];return[i[r],i[o]]=[i[o],i[r]],i}function Up(t,e){let n=new Set(t.floors.map(r=>r.ha_floor));return Object.values(e??{}).filter(r=>!n.has(r.floor_id)).sort((r,o)=>(r.level??99)-(o.level??99)||r.name.localeCompare(o.name))}function Zo(t,e,n){if(!e.ha_floor)return[];let r=new Set(t.floors.flatMap(o=>o.rooms.map(i=>i.area_id)));return Object.values(n??{}).filter(o=>o.floor_id===e.ha_floor&&!r.has(o.area_id)).sort((o,i)=>o.name.localeCompare(i.name))}function jp(t,e,n){return Object.values(n??{}).filter(r=>r.floor_id===e.ha_floor||!t.floors.some(o=>o.ha_floor===r.floor_id))}function Zp(t,e,n,r,o=L){let i=structuredClone(e),s=t.floors.reduce((u,h)=>Math.max(u,h.elevation+h.height),e.elevation+e.height),a=new Map,l=new Map;i.id=o("floor"),i.name=n,i.elevation=Math.round(s*1e3)/1e3,i.ha_floor=null,i.start_view=null,i.rooms=i.rooms.map(u=>{let h=o("room");return a.set(u.id,h),{...u,id:h,area_id:null}}),i.walls=(i.walls??[]).map(u=>{let h=o("wall");return l.set(u.id,h),{...u,id:h}}),i.openings=i.openings.filter(u=>a.has(u.room_id)).map(u=>({...u,id:o("opening"),room_id:a.get(u.room_id),wall:u.wall?l.get(u.wall)??null:u.wall}));let c=new Set(["meter","inverter","home_battery","wallbox","grid_point"]);return i.furniture=r.furniture?i.furniture.filter(u=>!c.has(u.type)).map(u=>iy({...u,id:o("furniture")})):[],i.placements=r.devices?i.placements:[],i.outdoor=r.outdoor?i.outdoor.map(u=>({...u,id:o("outdoor")})):[],i}var ny=["entity","power","fan_entity","room_sensor"],ry=["door_left","door_right","soc","charge","export","status","temp_entity","temp_entity2","state_entity","state_entity2","color_entity","care_entity","cover_entity","type_entity","parent_meter","car","tap"],oy=["gang_entities","pictures","types","meter_floors","show_when","extra_lights"];function iy(t){let e={...t};for(let n of ny)(n==="entity"||n==="power"||e[n]!=null)&&(e[n]="none");for(let n of ry)e[n]!=null&&(e[n]=null);for(let n of oy)delete e[n];return e}function qp(t,e,n,r){let o=t.floors.find(l=>l.id===e),i=t.floors.find(l=>l.id===r);if(!o||!i||o===i)return!1;let s=o.furniture.findIndex(l=>l.id===n);if(s<0)return!1;let[a]=o.furniture.splice(s,1);return i.furniture.push(a),!0}function sy(t,e,n,r){let o=Up(t.doc,t.hass?.floors),i=()=>o.length>0?e.floorMenu=!e.floorMenu:n.addFloor(null);return m`<div class="nf-floor-list">
      ${[...t.doc.floors].reverse().map(s=>m`<button class="nf-chip" aria-pressed=${s.id===r} @click=${()=>n.openFloor(s.id)}>${s.name}</button>`)}
      ${t.admin?m`<button class="nf-btn" aria-expanded=${e.floorMenu} @click=${i}>+ ${t.t("add_floor")}</button>`:g}
    </div>
    ${t.admin&&e.floorMenu?m`<div class="nf-floor-menu">
          ${M(t.t("floor_from_ha"))}
          ${o.map(s=>m`<button class="nf-btn" @click=${()=>n.addFloor(s)}>${s.name}${s.level!=null?m` <span class="nf-sub">· ${t.t("level",{n:s.level})}</span>`:g}</button>`)}
          <button class="nf-btn" @click=${()=>n.addFloor(null)}>${t.t("floor_empty")}</button>
        </div>`:g}`}function ay(t,e,n,r){let o=(i,s,a)=>m`<input type="number" step="0.05" .value=${String(s)} aria-label=${i} @change=${l=>a(Number(l.target.value)||0)} />`;return m`<div class="nf-field nf-wide nf-shift" title=${t.t("floor_shift_hint")}>
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
  </div>`}function ly(t,e,n,r){let o=t.t,i=s=>e.floorCopy={...r,...s};return m`<div class="nf-form nf-wide nf-copy-floor">
    ${M(o("floor_copy_hint"),"nf-wide")}
    ${O(t,o("floor_copy_furniture"),r.furniture,s=>i({furniture:s}))}
    ${O(t,o("floor_copy_devices"),r.devices,s=>i({devices:s}),{title:o("floor_copy_devices_hint")})}
    ${O(t,o("floor_copy_outdoor"),r.outdoor,s=>i({outdoor:s}))}
    <div class="nf-actions nf-wide">
      <button class="nf-btn nf-primary" @click=${()=>n.duplicateFloor(r)}>${o("floor_copy_make")}</button>
      <button class="nf-btn" @click=${()=>e.floorCopy=null}>${o("cancel")}</button>
    </div>
  </div>`}function cy(t,e,n,r){let o=t.t,i=c=>t.change((u,h)=>Object.assign(h,c)),s=jp(t.doc,r,t.hass?.floors),a=Zo(t.doc,r,t.hass?.areas),l=[["",o("no_ha_floor")],...s.map(c=>[c.floor_id,c.name])];return m`<div class="nf-form">
    ${j(t,o("floor_name"),r.name,c=>i({name:c}),{wide:!0})}
    ${R(t,o("elevation"),r.elevation,c=>i({elevation:c}))}
    ${t.admin?ay(t,e,n,r):g}
    ${R(t,o("height"),r.height,c=>i({height:Math.max(1,c)}),.05,1)}
    ${Object.keys(t.hass?.floors??{}).length>0?T(t,o("ha_floor"),r.ha_floor??"",l,c=>i({ha_floor:c||null}),{wide:!0}):g}
    ${O(t,o("floor_layer"),!!r.layer,c=>i({layer:c||void 0}),{title:o("floor_layer_hint")})}
    ${t.admin&&a.length>0?m`<div class="nf-actions nf-wide"><button class="nf-btn nf-primary" title=${o("area_rooms_hint")} @click=${()=>n.addAreaRooms(r)}>${o("area_rooms",{n:a.length})}</button></div>`:g}
    ${t.admin?m`<div class="nf-actions nf-wide">
            <button class="nf-btn" @click=${()=>n.moveFloor(1)}>${o("move_up")}</button>
            <button class="nf-btn" @click=${()=>n.moveFloor(-1)}>${o("move_down")}</button>
            <button class="nf-btn" @click=${()=>e.floorCopy=e.floorCopy?null:{furniture:!0,devices:!1,outdoor:!1}}>${o("floor_copy")}</button>
            <button class="nf-btn nf-danger" @click=${()=>n.deleteFloor()}>${o("delete_floor")}</button>
          </div>
          ${e.floorCopy?ly(t,e,n,e.floorCopy):g}
          <div class="nf-actions nf-wide"><button class="nf-btn" title=${o("gaps_hint")} ?disabled=${r.rooms.length<2} @click=${()=>n.closeGaps()}>${o("gaps_close")}</button></div>
          ${e.notice?m`<p class="nf-sub nf-wide nf-notice">${e.notice}</p>`:g}`:g}
  </div>`}function Yp(t,e,n,r,o){return m`<section>
    <h3>${t.t("floors")}</h3>
    ${sy(t,e,n,o)} ${r?cy(t,e,n,r):g}
  </section>`}var Xp=["lamp_downlight","lamp_spot","lamp_panel","lamp_ceiling"];function Qp(t,e){let n=se(t.points);return{type:"lamp_downlight",rows:Math.max(1,Math.round((n.z1-n.z0)/1.2)),cols:Math.max(1,Math.round((n.x1-n.x0)/1.2)),entity:e[0]??null}}function qo(t,e){let[n,r,o]=Ce[e.type];return Tl(t,e.rows,e.cols).map(([i,s])=>({id:L("furniture"),type:e.type,x:i,z:s,rotation:0,w:n,d:r,h:o,variant:null,entity:e.entity??"none",power:null}))}var ma=t=>Math.max(1,Math.min(12,Math.round(t)));var uy=globalThis.__nfAnnounced??new Set;globalThis.__nfAnnounced=uy;var Jp=/^(media_player|assist_satellite)\./;function dy(t,e){return e?Object.values(t.entities??{}).filter(n=>!n.hidden&&(n.area_id??(n.device_id?t.devices?.[n.device_id]?.area_id:null))===e).map(n=>n.entity_id):[]}function ef(t,e){let n=t.states[e];return!n||n.state==="unavailable"?!1:e.startsWith("notify.")?t.entities?.[e]?.platform==="alexa_devices"&&e.endsWith("_announce"):n.state==="off"||n.state==="unknown"?!1:n.attributes.device_class!=="tv"}function tf(t,e,n){if(n.announce_speaker==="none")return null;if(n.announce_speaker)return n.announce_speaker;if(e&&n.points.length>=3){let i=[...e.placements.filter(s=>Jp.test(s.entity_id)).map(s=>({id:s.entity_id,x:s.x,z:s.z})),...e.furniture.filter(s=>s.entity&&Jp.test(s.entity)).map(s=>({id:s.entity,x:s.x,z:s.z}))].find(s=>C([s.x,s.z],n.points)&&ef(t,s.id));if(i)return i.id}let r=dy(t,n.area_id);for(let o of["assist_satellite.","notify.","media_player."]){let i=r.filter(s=>s.startsWith(o)&&ef(t,s)).sort()[0];if(i)return i}return null}function nf(t,e,n){return e.rooms.length===0?g:m`<section>
    <h3>${t.t("rooms")}</h3>
    <div class="nf-room-list">
      ${e.rooms.map(r=>m`<button class="nf-row" @click=${()=>n.select(r.id)}>
          <span>${r.name}</span><span class="nf-muted">${To(t.hass,Re(r.points))}</span>
        </button>`)}
    </div>
  </section>`}function hy(t,e,n,r){let o=e.spots,i=c=>e.spots={...o,...c},s=qo(n,o).length,a=D(t.hass,c=>/^(light|switch|input_boolean)\./.test(c)),l=Xp.map(c=>[c,t.t(`furn_${c}`)]);return m`<div class="nf-form nf-spot-form">
    ${T(t,t.t("spots_type"),o.type,l,c=>i({type:c}),{wide:!0})}
    ${R(t,t.t("spots_cols"),o.cols,c=>i({cols:ma(c)}),1,1)}
    ${R(t,t.t("spots_rows"),o.rows,c=>i({rows:ma(c)}),1,1)}
    ${z(t,t.t("furn_entity_light"),o.entity,void 0,a,c=>i({entity:c==="none"?null:c}))}
    <div class="nf-actions nf-wide">
      <button class="nf-btn nf-primary" ?disabled=${s===0} @click=${()=>r.placeSpots()}>${t.t("spots_add",{n:s})}</button>
      <button class="nf-btn" @click=${()=>e.spots=null}>${t.t("cancel")}</button>
    </div>
    ${M(t.t("spots_hint"),"nf-wide")}
  </div>`}function py(t,e,n,r){return m`<details class="nf-points" ?open=${!n}>
    <summary>${t.t("points")} (${e.points.length})</summary>
    ${e.points.map((o,i)=>m`<div class="nf-point ${i===r.corner?"nf-point-sel":""}">
        <span class="nf-muted">${i+1}</span>
        ${R(t,t.t("x"),o[0],s=>r.setCorner(i,0,s))} ${R(t,t.t("z"),o[1],s=>r.setCorner(i,1,s))}
        ${t.admin?m`<button class="nf-btn" title=${t.t("delete_point")} ?disabled=${e.points.length<=3} @click=${()=>r.removeCorner(i)}>×</button>`:g}
      </div>`)}
  </details>`}function fy(t,e,n,r){let o=t.t,i=s=>r.patch({ceiling:Math.abs(s-n.height)<.005?null:Math.min(20,Math.max(1,Math.round(s*1e3)/1e3))});return m`${R(t,o("room_ceiling"),e.ceiling??n.height,i,.01,1)}
    ${e.ceiling!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>r.patch({ceiling:null})}>${o("height_auto")}</button>`:g}
    ${M(o("room_ceiling_tip"),"nf-wide")}
    ${e.ceiling!=null&&e.ceiling>n.height+.005?m`<p class="nf-sub nf-wide">${o("room_ceiling_through",{ceiling:G(t.hass,e.ceiling,2),floor:G(t.hass,n.height,2)})}</p>`:g}`}function my(t,e,n,r){let o=t.t;if(!t.hass)return m``;let i=tf(t.hass,n,{...e,announce_speaker:null}),s=D(t.hass,c=>/^(media_player|assist_satellite)\./.test(c)||c.startsWith("notify.")&&c.endsWith("_announce")),a=e.announce_quiet??null,l=(c,u)=>{if(!u)return r.patch({announce_quiet:null});r.patch({announce_quiet:{from:a?.from??"20:00",to:a?.to??"07:00",[c]:u}})};return m`${z(t,o("room_announce_speaker"),e.announce_speaker??null,i,s,c=>r.patch({announce_speaker:c}))}
    <div class="nf-field nf-wide nf-quiet-time">
      ${o("room_announce_quiet")}
      <span>
        <input type="time" .value=${a?.from??""} ?disabled=${!t.admin} aria-label=${`${o("room_announce_quiet")} 1`} @change=${c=>l("from",c.target.value)} />
        –
        <input type="time" .value=${a?.to??""} ?disabled=${!t.admin} aria-label=${`${o("room_announce_quiet")} 2`} @change=${c=>l("to",c.target.value)} />
        ${a?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>r.patch({announce_quiet:null})}>×</button>`:g}
      </span>
    </div>
    ${M(o("room_announce_hint"),"nf-wide")}`}function ga(t,e,n,r){let o=t.t,i=nn(n.points),s=se(n.points),a=Object.values(t.hass?.areas??{}).sort((d,p)=>d.name.localeCompare(p.name)),l=[["",o("no_area")],...a.map(d=>[d.area_id,d.name])],c=t.floor?yc(n,Ae(t.floor.rooms,{exterior:t.doc.settings.wall_exterior,interior:t.doc.settings.wall_interior},t.floor.walls??[]).walls):null,u=$l.map(d=>[d,o(`mat_${d}`)]),h=d=>m`<button class="nf-btn" @click=${()=>r.applyPackage(d)}><b>${o(`pkg_${d}`)}</b><span>${o(`pkg_${d}_desc`)}</span></button>`;return m`<section>
    <div class="nf-h3row"><h3>${o("room")}</h3>${r.lockButton}</div>
    <div class="nf-form">
      ${j(t,o("room_name"),n.name,d=>r.patch({name:d}),{wide:!0})}
      ${T(t,o("area"),n.area_id??"",l,d=>r.setArea(d),{wide:!0})}
      ${(n.sub_areas??[]).map(d=>m`<span class="nf-chip nf-wide">${t.hass?.areas?.[d]?.name??d} <button class="nf-btn nf-field-btn" ?disabled=${!t.admin} title=${o("delete")} @click=${()=>r.patch({sub_areas:(n.sub_areas??[]).filter(p=>p!==d).length?(n.sub_areas??[]).filter(p=>p!==d):null})}>✕</button></span>`)}
      ${n.area_id?T(t,o("sub_area_add"),"",l.filter(([d])=>d!==n.area_id&&!(n.sub_areas??[]).includes(d)),d=>d&&r.patch({sub_areas:[...n.sub_areas??[],d]}),{wide:!0,title:o("sub_area_hint")}):g}
      ${T(t,o("material"),n.floor_material,u,d=>r.patch({floor_material:d}),{wide:!0})}
      ${ct(t,o("wall_paint_room"),n.wall_paint,t.doc.settings.wall_paint_inside??Vr,d=>r.patch({wall_paint:d}))}
      ${t.floor?fy(t,n,t.floor,r):g}
      ${z(t,o("floor_heating"),n.floor_heating??null,void 0,D(t.hass,d=>/^(climate|switch|valve|binary_sensor|input_boolean)\./.test(d)),d=>r.patch({floor_heating:d&&d!=="none"?d:null}))}
      ${n.floor_heating?M(o("floor_heating_hint"),"nf-wide"):g}
      ${my(t,n,t.floor??null,r)}
      ${c?m`<p class="nf-sub nf-wide" title=${o("room_inner_hint")}>${o("room_inner",{w:pe(t.hass,c[0]),d:pe(t.hass,c[1])})}</p>`:g}
      ${i?m`${R(t,o("x"),s.x0,d=>r.setRect("x",d))} ${R(t,o("z"),s.z0,d=>r.setRect("z",d))}
          ${R(t,o("width"),s.x1-s.x0,d=>r.setRect("w",d),.01,.05)}
          ${R(t,o("depth"),s.z1-s.z0,d=>r.setRect("d",d),.01,.05)}`:g}
    </div>
    <div class="nf-actions">
      <button class="nf-btn" title=${o("room_start_view_hint")} ?disabled=${!t.admin} @click=${()=>r.rememberView()}>${o("room_start_view")}</button>
      ${n.start_view?m`<button class="nf-btn" title=${o("room_start_view_reset")} ?disabled=${!t.admin} @click=${()=>r.patch({start_view:null})}>↺</button>`:g}
    </div>
    ${r.wallHeights} ${r.climate} ${py(t,n,i,r)}
    ${t.admin?m`<div class="nf-actions">
          <button class="nf-btn nf-primary" @click=${()=>e.packages=!e.packages}>${o("pkg_open")}</button>
          <button class="nf-btn" @click=${()=>r.openSpots()}>${o("spots_place")}</button>
          <button class="nf-btn" @click=${()=>r.duplicate()}>${o("duplicate")}</button>
          <button class="nf-btn nf-danger" @click=${()=>r.remove()}>${o("delete")}</button>
        </div>`:g}
    ${e.spots?hy(t,e,n,r):g}
    ${e.packages?m`<div class="nf-packages">${Oc.map(h)}${M(o("pkg_hint"))}</div>`:g}
  </section>`}var rf=ie`
  :host {
    display: block;
    height: 100%;
  }
  .nf-editor {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 320px;
    height: 100%;
    min-height: 0;
  }
  .nf-editor:has(> .nf-side-strip) {
    grid-template-columns: 1fr 52px;
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
    grid-template-rows: auto 1fr;
    min-height: 0;
    min-width: 0;
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
`;var of=["cabinet","shelf","lamp","device"],Gt="own_studio";var gy={cabinet:{w:120,d:45,h:80,doors:2,drawers:1,shelves:2,base:"plinth",handle:"bar",back:!0,lamp:"floor",display:!1,mount:"floor",body:"white",front:"wood"},shelf:{w:80,d:35,h:180,doors:0,drawers:0,shelves:4,base:"none",handle:"none",back:!0,lamp:"floor",display:!1,mount:"floor",body:"wood",front:"wood"},lamp:{w:40,d:40,h:160,doors:0,drawers:0,shelves:0,base:"none",handle:"none",back:!1,lamp:"floor",display:!1,mount:"floor",body:"metal",front:"white"},device:{w:60,d:60,h:85,doors:0,drawers:0,shelves:0,base:"none",handle:"none",back:!1,lamp:"floor",display:!0,mount:"floor",body:"white",front:"dark"}},_a=(t,e)=>({kind:t,name:e,...gy[t]}),sf=(t,e)=>({..._a(e,t.name),body:t.body,front:t.front}),Rn=(t,e,n)=>Math.min(n,Math.max(e,Number.isFinite(t)?t:e)),An=t=>Math.round(t*1e4)/1e4;function ba(t){return{...t,name:t.name.trim().slice(0,60),w:Rn(Math.round(t.w),5,400),d:Rn(Math.round(t.d),2,200),h:Rn(Math.round(t.h),2,300),doors:Rn(Math.round(t.doors),0,6),drawers:Rn(Math.round(t.drawers),0,6),shelves:Rn(Math.round(t.shelves),0,12)}}function oe(t,e,n,r,o,i,s,a,l={}){let[c,u,h]=t,d=(k,x,E)=>{let A=Math.max(-E,k-x/2),F=Math.min(E,k+x/2);return F-A<1e-4?[Math.max(-E,Math.min(E,k)),.001*E*2]:[(A+F)/2,F-A]},[p,f]=d(e,r,c/2),[_,y]=d(n,o,u/2),b=Math.max(0,Math.min(h*.999,i)),v=Math.max(h*.001,Math.min(h-b,s)),w=k=>An(Math.max(.001,Math.min(1,k)));return{shape:"box",x:An(p/c),z:An(_/u),w:w(f/c),d:w(y/u),y:An(b/h),h:w(v/h),color:a,...l}}function af(t,e,n){let[r,o,i]=t;if(e==="legs"){let s=Math.min(.1,i*.25),a=Math.min(.04,r/6,o/6);for(let[l,c]of[[-1,-1],[1,-1],[-1,1],[1,1]])n.push(oe(t,l*(r/2-a),c*(o/2-a),a,a,0,s,"metal"));return s}if(e==="plinth"){let s=Math.min(.08,i*.2);return n.push(oe(t,0,-.02,r-.02,o-.04,0,s,"dark")),s}return 0}function _y(t,e){let[n,r,o]=e,i=[],s=af(e,t.base,i),a=t.doors+t.drawers>0,l=t.handle==="none"||!a?0:Math.min(.025,r*.08),c=a?Math.min(.02,r*.1):0,u=r-c-l,h=-r/2+u/2,d=o-s;if(!a){let v=Math.min(.018,n/10,d/10);i.push(oe(e,-n/2+v/2,0,v,r,s,d,t.body,{edges:!0})),i.push(oe(e,n/2-v/2,0,v,r,s,d,t.body,{edges:!0})),i.push(oe(e,0,-r/2+.005,n-2*v,.01,s,d,t.body));for(let w=0;w<=t.shelves+1;w++)i.push(oe(e,0,.005,n-2*v,r-.01,s+(d-v)*w/(t.shelves+1),v,t.front,{edges:"faint"}));return i}i.push(oe(e,0,h,n,u,s,d,t.body,{edges:!0}));let p=.004,f=-r/2+u+c/2,_=t.doors>0?Math.min(.18,Math.max(.08,(d-.3)/Math.max(1,t.drawers))):d/t.drawers,y=s+(t.drawers>0?_*t.drawers:0),b=(v,w,k)=>{if(t.handle==="none")return;let x=r/2-l/2;t.handle==="knob"?i.push(oe(e,v,x,.025,l,w-.0125,.025,"metal")):k?i.push(oe(e,v,x,.015,l,w-.08,.16,"metal")):i.push(oe(e,v,x,Math.min(.16,n*.4),l,w-.0075,.015,"metal"))};for(let v=0;v<t.drawers;v++){let w=s+_*v;i.push(oe(e,0,f,n-2*p,c,w+p,_-2*p,t.front,{edges:"faint"})),b(0,w+_*(t.drawers===1&&t.doors===0?.5:.7),!1)}if(t.doors>0){let v=n/t.doors,w=o-y;for(let k=0;k<t.doors;k++){let x=-n/2+v*(k+.5);i.push(oe(e,x,f,v-2*p,c,y+p,w-2*p,t.front,{edges:"faint"}));let E=t.doors===1||k%2===0?1:-1,A=y+w*(o>1.2?.45:.8);b(x+E*(v/2-.04),Math.min(A,o-.1),!0)}}return i}function by(t,e){let[n,r,o]=e,i=Math.min(.02,n/10,o/10),s=[oe(e,-n/2+i/2,0,i,r,0,o,t.body,{edges:!0}),oe(e,n/2-i/2,0,i,r,0,o,t.body,{edges:!0})];t.back&&s.push(oe(e,0,-r/2+.005,n-2*i,.01,0,o,t.body));let a=t.shelves+2;for(let l=0;l<a;l++)s.push(oe(e,0,t.back?.005:0,n-2*i,t.back?r-.01:r,(o-i)*l/(a-1),i,t.front,{edges:!0}));return s}function yy(t,e){let[n,r,o]=e,i=Math.min(n,r),s=(l,c,u,h,d,p,f={})=>({...oe(e,l,c,u,u,h,d,p,f),shape:"cyl"}),a=(l,c,u)=>({...oe(e,0,0,i,i,l,c,t.front,{glow:!0,edges:"faint"}),shape:"loft",tw:An(Math.min(1,i*u/n)),td:An(Math.min(1,i*u/r))});switch(t.lamp){case"pendant":{let l=Math.min(.3,o*.4);return[s(0,0,Math.min(.12,i),o-.03,.03,t.body),s(0,0,Math.min(.01,i/4),l,o-l-.03,"dark"),a(0,l,.35)]}case"wall":{let l=Math.min(.02,r*.2);return[oe(e,0,-r/2+l/2,Math.min(.1,n),l,o*.3,o*.4,t.body),oe(e,0,0,Math.min(.02,n),r-l,o*.45,Math.min(.02,o*.1),t.body),a(o*.15,o*.7,.7)]}default:{let l=Math.min(t.lamp==="table"?.25:.35,o*.4);return[s(0,0,i*.6,0,Math.min(.03,o*.05),t.body,{edges:!0}),s(0,0,Math.min(.03,i/6),.02,o-l-.02,t.body),a(o-l,l,.7)]}}}function wy(t,e){let[n,r,o]=e,i=[],s=t.mount==="floor"?af(e,t.base,i):0,a=t.display?Math.min(.01,r*.1):0;if(i.push(oe(e,0,-a/2,n,r-a,s,o-s,t.body,{edges:!0})),t.display){let l=Math.min(.02,n*.08,(o-s)*.08);i.push(oe(e,0,r/2-a/2,n-2*l,a,s+l,o-s-2*l,t.front,{screen:!0}))}return i}function Yo(t,e,n){let r=ba(t),o=[r.w/100,r.d/100,r.h/100],i=r.name||e,s=n==="en"?{en:i}:{[n.slice(0,5)]:i,en:i},a={id:e,name:s,size:o,parts:[],recipe:r};switch(r.kind){case"cabinet":a.parts=_y(r,o),a.surface=!0;break;case"shelf":a.parts=by(r,o);break;case"lamp":a.parts=yy(r,o),a.light=r.lamp,a.mount=r.lamp==="pendant"?"ceiling":r.lamp==="wall"?"wall":r.lamp==="table"?"surface":"floor",r.lamp==="wall"&&(a.wall_y=1.6);break;case"device":a.parts=wy(r,o),a.electric=!0,a.mount=r.mount,r.mount==="wall"&&(a.wall_y=1.2);break}return a}function lf(t,e){let n=t.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/ß/g,"ss").replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"").slice(0,32)||"piece",r=/^[a-z0-9]/.test(n)?n:`p${n}`;if(!e.includes(r))return r;for(let o=2;;o++)if(!e.includes(`${r}_${o}`))return`${r}_${o}`}var cf=["white","wood","body","metal","dark","glass","accent"],vy={white:"#dfe6f2",wood:"#8a6a4a",body:"#3a4a6a",metal:"#9aa7bf",dark:"#1e2638",glass:"#7fd0e8",accent:"#37e0ff",fabric:"#4b5d8c",cushion:"#6a7fb3"},df=t=>vy[t]??t;function ky(t){let e=Yo(t,"preview","en"),[n,,r]=e.size,o=180/Math.max(n,r),[i,s]=[n*o,r*o],a=[...e.parts].sort((l,c)=>l.z+l.d/2-(c.z+c.d/2));return m`<svg class="nf-studio-view" viewBox="-4 -4 ${i+8} ${s+8}" role="img" aria-hidden="true">
    ${a.map(l=>{let c=l.w*i,u=l.h*s,h=(l.x+.5)*i-c/2,d=s-(l.y+l.h)*s,p=l.shape==="cyl"?Math.min(c,u)/2:l.shape==="loft"?3:1;return S`<rect x=${h} y=${d} width=${Math.max(.6,c)} height=${Math.max(.6,u)} rx=${p} fill=${l.screen?"#0b1020":df(l.color)} stroke="rgba(10,16,32,0.55)" stroke-width="0.8" class=${l.glow?"nf-studio-glow":""} />`})}
  </svg>`}function uf(t,e,n,r){let o=t.t,i=!cf.includes(n),s=[...cf.map(a=>[a,o(a==="body"?"studio_color_plan":`studio_color_${a}`)]),["own",o("studio_color_own")]];return m`${T(t,e,i?"own":n,s,a=>r(a==="own"?df(n):a))}
  ${i?ct(t,o("studio_color_own"),n,"#8a6a4a",a=>r(a??"wood")):g}`}function hf(t,e,n){let r=t.t,o=e.recipe,i=c=>n.change(ba({...o,...c})),s=(c,u,h)=>R(t,r(c),u,d=>i({[h]:d}),1,1),a=(c,u,h)=>R(t,r(c),u,d=>i({[h]:d}),1,0),l=()=>{switch(o.kind){case"cabinet":return m`${a("studio_doors",o.doors,"doors")} ${a("studio_drawers",o.drawers,"drawers")}
          ${o.doors+o.drawers===0?a("studio_shelves",o.shelves,"shelves"):g}
          ${T(t,r("studio_handle"),o.handle,[["bar",r("studio_handle_bar")],["knob",r("studio_handle_knob")],["none",r("studio_handle_none")]],c=>i({handle:c}))}
          ${T(t,r("studio_base"),o.base,[["plinth",r("studio_base_plinth")],["legs",r("studio_base_legs")],["none",r("studio_base_none")]],c=>i({base:c}))}`;case"shelf":return m`${a("studio_shelves",o.shelves,"shelves")} ${O(t,r("studio_back"),o.back,c=>i({back:c}))}`;case"lamp":return T(t,r("studio_lamp"),o.lamp,[["floor",r("studio_lamp_floor")],["table",r("studio_lamp_table")],["pendant",r("studio_lamp_pendant")],["wall",r("studio_lamp_wall")]],c=>i({lamp:c}));case"device":return m`${O(t,r("studio_display"),o.display,c=>i({display:c}))}
          ${T(t,r("studio_mount"),o.mount,[["floor",r("studio_mount_floor")],["surface",r("studio_mount_surface")],["wall",r("studio_mount_wall")]],c=>i({mount:c}))}
          ${o.mount==="floor"?T(t,r("studio_base"),o.base,[["none",r("studio_base_none")],["legs",r("studio_base_legs")],["plinth",r("studio_base_plinth")]],c=>i({base:c})):g}`}};return m`<section class="nf-studio">
    <h3>🛠️ ${r(e.itemId?"studio_title_edit":"studio_title")}</h3>
    ${M(r("studio_hint"))}
    <div class="nf-lib-chips" role="group" aria-label=${r("studio_kind")}>
      ${of.map(c=>m`<button class="nf-chip" aria-pressed=${o.kind===c} ?disabled=${!!e.itemId&&o.kind!==c} @click=${()=>o.kind!==c&&n.change(sf(o,c))}>${r(`studio_kind_${c}`)}</button>`)}
    </div>
    ${ky(o)}
    <div class="nf-form">
      ${j(t,r("studio_name"),o.name,c=>i({name:c}),{wide:!0,maxlength:60,placeholder:r(`studio_kind_${o.kind}`)})}
      ${s("studio_width",o.w,"w")} ${s("studio_depth",o.d,"d")} ${s("studio_height",o.h,"h")} ${l()}
      ${uf(t,r(o.kind==="lamp"?"studio_color_lamp_body":"studio_color_body"),o.body,c=>i({body:c}))}
      ${o.kind==="cabinet"||o.kind==="shelf"||o.kind==="lamp"||o.display?uf(t,r(o.kind==="lamp"?"studio_color_shade":o.kind==="device"?"studio_color_display":o.kind==="shelf"?"studio_color_boards":"studio_color_front"),o.front,c=>i({front:c})):g}
    </div>
    ${e.error?m`<p class="nf-sub nf-warn">${e.error}</p>`:g}
    ${te(m`<button class="nf-btn nf-primary" ?disabled=${e.busy||!t.admin} @click=${()=>n.save()}>${r(e.itemId?"studio_save":"studio_place")}</button>`,m`<button class="nf-btn" ?disabled=${e.busy} @click=${()=>n.close()}>${r("cancel")}</button>`)}
  </section>`}var $t="https://github.com/therealMRBK/NextFloor";var Ar=t=>`/api/nextfloor/mesh/${encodeURIComponent(t)}`,Fn=12*1024*1024;function pf(t,e){let n=new Map;for(let r of t)for(let o of r.items){if(!o.mesh)continue;let i=n.get(o.mesh)??[];n.set(o.mesh,[...i,`${Ie(o,ae(r.id,o.id),e)} \xB7 ${Me(r,e)}`])}return[...n].map(([r,o])=>({id:r,items:o})).sort((r,o)=>r.items[0].localeCompare(o.items[0]))}function zn(t){return t<1024*1024?`${Math.max(1,Math.round(t/1024))} KB`:`${(t/(1024*1024)).toFixed(1)} MB`}function ya(t){return t===201||t===200||t===204?null:t===401||t===403?"forbidden":t===413?"too_large":t===400?"not_glb":t===404?"bad_id":"other"}var xy=40,$y=(t=Fn)=>Math.floor(t*.8/xy),wa=[{key:"light",triangles:3e4},{key:"normal",triangles:8e4},{key:"fine",triangles:15e4}];function ff(t){return Math.min(wa.find(e=>e.key===t).triangles,$y())}var va=class extends re{static properties={hass:{attribute:!1},packs:{attribute:!1},_present:{state:!0},_draft:{state:!0},_busy:{state:!0},_message:{state:!0}};checked=new Set;run=0;constructor(){super(),this._present={},this._draft=null,this._busy=!1,this._message=null}t(e,n){return ge(this.hass,e,n)}get slots(){return pf(this.packs??[],this.hass?.language??"en")}willUpdate(){for(let e of this.slots)this.checked.has(e.id)||!this.hass?.fetchWithAuth||(this.checked.add(e.id),this.askPresence(e.id))}async askPresence(e){let n=await this.hass.fetchWithAuth(Ar(e),{method:"HEAD"}).catch(()=>null),r=n&&n.status!==405?n.ok:await this.hass.fetchWithAuth(Ar(e)).then(o=>o.ok,()=>!1);this._present={...this._present,[e]:r?"yes":"no"}}async choose(e,n){if(n){this._message=null,this._busy=!0;try{let r=await n.arrayBuffer(),i=await(await Vt()).inspectModel(r);this._draft={slot:e,fileName:n.name,data:r,info:i,turns:0,paint:i.paint,detail:"normal",colour:"#1d5bd6",result:null},await this.refresh()}catch(r){this._draft=null,this._message={ok:!1,text:this.readError(r)}}finally{this._busy=!1}}}readError(e){let r=`model_error_${e?.reason}`,o=this.t(r);return o===r?this.t("model_error_unreadable",{detail:String(e?.message??e)}):o}async refresh(){let e=this._draft;if(!e)return;let n=++this.run;this._busy=!0;try{let r=await Vt(),{glb:o,triangles:i}=await r.prepareModel(e.data,{turns:e.turns,paint:e.paint,maxTriangles:ff(e.detail)}),s=await r.previewModel(o,e.colour);n===this.run&&this._draft===e&&(this._draft={...e,result:{glb:o,triangles:i,picture:s}})}catch(r){n===this.run&&(this._message={ok:!1,text:this.readError(r)})}finally{n===this.run&&(this._busy=!1)}}change(e){this._draft&&(this._draft={...this._draft,...e},this.refresh())}turn(e){this._draft&&this.change({turns:(this._draft.turns+e+4)%4})}togglePaint(e,n){if(!this._draft)return;let r=this._draft.paint.filter(o=>o!==e);this.change({paint:n?[...r,e]:r})}async upload(){let e=this._draft;if(!(!e?.result||!this.hass?.fetchWithAuth)){if(e.result.glb.byteLength>Fn){this._message={ok:!1,text:this.t("model_error_too_large",{max:zn(Fn)})};return}this._busy=!0;try{let n=await this.hass.fetchWithAuth(Ar(e.slot.id),{method:"POST",body:e.result.glb}),r=ya(n.status);if(r){this._message={ok:!1,text:this.t(`model_upload_${r}`,{max:zn(Fn)})};return}this._present={...this._present,[e.slot.id]:"yes"},this._message={ok:!0,text:this.t("model_uploaded",{id:e.slot.id,size:zn(e.result.glb.byteLength)})},this._draft=null}catch(n){this._message={ok:!1,text:this.t("model_upload_other",{detail:String(n?.message??n)})}}finally{this._busy=!1}}}async removeModel(e){if(!this.hass?.fetchWithAuth||!confirm(this.t("model_remove_confirm",{id:e.id})))return;let n=await this.hass.fetchWithAuth(Ar(e.id),{method:"DELETE"}),r=ya(n.status);this._present={...this._present,[e.id]:r?this._present[e.id]:"no"},this._message=r?{ok:!1,text:this.t(`model_upload_${r}`,{max:zn(Fn)})}:{ok:!0,text:this.t("model_removed",{id:e.id})}}row(e){let n=this._present[e.id]??"unknown",r=n==="yes"?this.t("model_present"):n==="no"?this.t("model_missing"):"\u2026";return m`<div class="nf-model">
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
            <div class="nf-seg">${wa.map(i=>m`<button aria-pressed=${e.detail===i.key} @click=${()=>this.change({detail:i.key})}>${this.t(`model_detail_${i.key}`)}</button>`)}</div>
            ${r?m`<small class="nf-sub">${this.t("model_result",{triangles:r.triangles.toLocaleString(this.hass?.language),size:zn(r.glb.byteLength)})}</small>`:g}
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
    </section>`}static styles=[Oe,Ye,ie`
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
    `]};customElements.get("nf-model-upload")||customElements.define("nf-model-upload",va);var Pn="therealMRBK/NextFloor-Plugins",mf=`https://raw.githubusercontent.com/${Pn}/main/index.json`,Sy=t=>/^https:\/\/raw\.githubusercontent\.com\/[\w.-]+\/[\w.-]+\/[0-9a-f]{40}\/[\w./-]+\.m?js$/.test(t),we=(t,e)=>typeof t=="string"?t.trim().slice(0,e):"";function My(t){let e=t?.plugins;if(!Array.isArray(e))return[];let n=new Set,r=[];for(let o of e){if(!o||typeof o!="object")continue;let i=we(o.id,64),s=we(o.url,300),a=we(o.sha256,64).toLowerCase(),l=we(o.name,60),c=we(o.version,40),u=we(o.homepage,200);!/^[\w.-]+$/.test(i)||n.has(i)||!l||!c||!Sy(s)||!/^[0-9a-f]{64}$/.test(a)||(n.add(i),r.push({id:i,name:l,description:we(o.description,300),author:we(o.author,60),version:c,homepage:/^https:\/\//.test(u)?u:"",url:s,sha256:a}))}return r}async function gf(t=(...e)=>fetch(...e)){let e=await t(mf,{cache:"no-store"});if(!e.ok)throw new Error(`HTTP ${e.status}`);return My(await e.json())}function _f(t,e){let n=(e??[]).find(r=>r.id===t.id);return n?n.sha256===t.sha256&&n.url===t.url?"installed":"update":"available"}function bf(t,e){let n=t??[],r={url:e.url,enabled:!0,id:e.id,version:e.version,sha256:e.sha256},o=n.findIndex(i=>i.id===e.id);return o<0?[...n,r]:n.map((i,s)=>s===o?{...r,enabled:i.enabled}:i)}var Ey=(t,e)=>t===`https://raw.githubusercontent.com/${Pn}/main/packs/${e}.json`;function Ry(t){let e=t?.packs;if(!Array.isArray(e))return[];let n=new Set,r=[];for(let o of e){if(!o||typeof o!="object")continue;let i=we(o.id,40),s=we(o.url,300),a=we(o.sha256,64).toLowerCase(),l=we(o.name,80);if(!/^[a-z0-9][a-z0-9_.-]{0,39}$/.test(i)||i.startsWith("nextfloor.")||n.has(i)||!l||!Ey(s,i)||!/^[0-9a-f]{64}$/.test(a))continue;n.add(i);let c=(u,h)=>typeof u=="number"&&Number.isInteger(u)&&u>0?u:h;r.push({id:i,name:l,description:we(o.description,400),author:we(o.author,80),release:c(o.release,1),items:c(o.items,0),url:s,sha256:a})}return r.sort((o,i)=>o.name.localeCompare(i.name))}async function yf(t=(...e)=>fetch(...e)){let e=await t(mf,{cache:"no-store"});if(!e.ok)throw new Error(`HTTP ${e.status}`);return Ry(await e.json())}function wf(t,e){let n=e.find(r=>r.id===t.id);return n?(n.release??1)>=t.release?"installed":"update":"available"}var Ay=t=>[...new Uint8Array(t)].map(e=>e.toString(16).padStart(2,"0")).join("");async function vf(t,e=(...n)=>fetch(...n)){let n=await e(t.url,{cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status}`);let r=await n.arrayBuffer(),o=globalThis.crypto?.subtle;if(o&&Ay(await o.digest("SHA-256",r))!==t.sha256)throw new Error("checksum mismatch: the file is not the one that was reviewed");return new TextDecoder().decode(r)}var Fy="https://therealmrbk.github.io/NextFloor/builder/",ka=class extends re{static properties={hass:{attribute:!1},packs:{attribute:!1},_msg:{state:!0},_busy:{state:!0},_store:{state:!0},_storeError:{state:!0}};constructor(){super(),this._msg=null,this._busy=!1,this._store=null,this._storeError=null}async loadStore(){this._store="loading",this._storeError=null;try{this._store=await yf()}catch(e){this._store=null,this._storeError=this.t("community_failed",{detail:e?.message??String(e)})}}async installStore(e){this._busy=!0,this._msg=null;try{let n=await Bn(this.hass,await vf(e));this._msg={ok:!0,text:this.t("pack_imported",{name:n.name,publisher:n.publisher,n:n.items})},this.changed()}catch(n){this._msg={ok:!1,text:this.errorText(n)}}finally{this._busy=!1}}renderStore(){let e=this.packs??[],n=this._store;return m`<h4>${this.t("community_title")}</h4>
      <p class="nf-sub">
        ${this.t("community_intro")} <a href=${Fy} target="_blank" rel="noopener">${this.t("community_builder")}</a> ·
        <a href=${`https://github.com/${Pn}#community-furniture`} target="_blank" rel="noopener">${this.t("community_how")}</a>
      </p>
      ${n===null?m`<div><button class="nf-btn" @click=${()=>{this.loadStore()}}>${this.t("community_load")}</button></div>`:n==="loading"?m`<p class="nf-sub">${this.t("loading")}</p>`:n.length?m`<ul>
                ${n.map(r=>{let o=wf(r,e);return m`<li>
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
      ${this._storeError?m`<p class="nf-error" role="alert">${this._storeError}</p>`:g}`}t(e,n){return ge(this.hass,e,n)}changed(){this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}))}errorText(e){let{code:n,message:r}=e??{},o=r??String(e),i=`pack_error_${n}`,s=this.t(i,{detail:o});return s===i?this.t("pack_error_other",{detail:o}):s}async importTexts(e){if(!this.hass||!e.length)return 0;this._busy=!0;let n=[],r=[];for(let{label:i,text:s}of e)try{let a=await Bn(this.hass,s);n.push(this.t("pack_imported",{name:a.name,publisher:a.publisher,n:a.items}))}catch(a){r.push(i?`${i}: ${this.errorText(a)}`:this.errorText(a))}this._busy=!1,n.length&&this.changed();let o=e.length>1?[this.t("packs_imported_n",{n:n.length,total:e.length})]:[];return this._msg={ok:r.length===0,text:[...o,...n,...r].join(" \xB7 ")},n.length}async importFiles(e){let n=e.target,r=[...n.files??[]];n.value="",await this.importTexts(await Promise.all(r.map(async o=>({label:o.name,text:await o.text()}))))}async importPasted(){let e=this.renderRoot.querySelector("textarea"),n=e?.value.trim()??"";if(!e||!n)return void(this._msg={ok:!1,text:this.t("pack_paste_empty")});try{JSON.parse(n)}catch(r){return void(this._msg={ok:!1,text:this.t("pack_paste_not_json",{detail:r instanceof Error?r.message:String(r)})})}await this.importTexts([{label:"",text:n}])>0&&(e.value="")}async deletePack(e){if(!(!this.hass||!confirm(this.t("pack_remove_confirm",{name:Me(e,this.hass.language??"de")}))))try{await ja(this.hass,e.id),this._msg=null,this.changed()}catch(n){this._msg={ok:!1,text:this.errorText(n)}}}render(){let e=(this.packs??[]).filter(o=>!o.builtin),n=(this.packs??[]).length-e.length,r=this.hass?.language??"de";return m`<section class="nf-packs">
      <h3>${this.t("packs_title")}</h3>
      <p class="nf-sub">${this.t("packs_intro",{n})} <a href="${$t}/blob/main/docs/packs.md" target="_blank" rel="noopener">${this.t("packs_docs")}</a></p>
      ${e.length?m`<ul>
            ${e.map(o=>m`<li>
                <div class="nf-pack-main">
                  <strong>${Me(o,r)}</strong>
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
    </section>`}static styles=[Oe,Ye,ie`
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
    `]};customElements.get("nf-pack-manager")||customElements.define("nf-pack-manager",ka);var zy=new Map;var kf=()=>[...zy.values()];var xa=class extends re{static properties={hass:{attribute:!1},plugins:{attribute:!1},_error:{state:!0},_store:{state:!0},_storeError:{state:!0},_storeOpen:{state:!0}};stop=null;constructor(){super(),this._error="",this._storeError="",this._storeOpen=!1}connectedCallback(){super.connectedCallback(),this.stop=jr(()=>this.requestUpdate())}disconnectedCallback(){super.disconnectedCallback(),this.stop?.()}t(e,n){return ge(this.hass,e,n)}emit(e){this.dispatchEvent(new CustomEvent("plugins-changed",{detail:e,bubbles:!0,composed:!0}))}add(e){let n=e.value.trim(),r=this.plugins??[];if(!Si(n))return void(this._error=this.t("plugins_url_invalid"));if(r.some(o=>o.url===n))return void(this._error=this.t("plugins_exists"));if(r.length>=20)return void(this._error=this.t("plugins_limit"));this._error="",e.value="",this.emit([...r,{url:n,enabled:!0}])}async toggleStore(){if(this._storeOpen=!this._storeOpen,!(!this._storeOpen||this._store)){this._storeError="";try{this._store=await gf()}catch(e){this._storeError=this.t("store_failed",{error:e instanceof Error?e.message:String(e)})}}}install(e){let n=this.plugins??[],r=n.some(o=>o.id===e.id);if(!r&&n.length>=20)return void(this._error=this.t("plugins_limit"));if(!r&&n.some(o=>o.url===e.url))return void(this._error=this.t("plugins_exists"));window.confirm(this.t("store_confirm",{name:e.name,author:e.author||"?",url:e.url}))&&(this._error="",this.emit(bf(n,e)))}renderStore(){return m`<div class="nf-store">
      <button class="nf-btn" @click=${()=>this.toggleStore()}>${this._storeOpen?this.t("store_close"):this.t("store_open")}</button>
      ${this._storeOpen?m`<p class="nf-sub">${this.t("store_intro")} <a href="https://github.com/${Pn}" target="_blank" rel="noopener">${this.t("store_submit")}</a></p>
            ${this._storeError?m`<p class="nf-error" role="alert">${this._storeError}</p>`:g}
            ${!this._store&&!this._storeError?m`<p class="nf-sub">${this.t("plugins_loading")}</p>`:g}
            ${this._store&&!this._store.length?m`<p class="nf-sub">${this.t("store_empty")}</p>`:g}
            <ul>
              ${(this._store??[]).map(e=>{let n=_f(e,this.plugins);return m`<li>
                  <div class="nf-plugin-main">
                    <span><strong>${e.name}</strong> <span class="nf-detail">${e.version}${e.author?` \xB7 ${e.author}`:""}</span></span>
                    ${e.description?m`<span class="nf-detail">${e.description}</span>`:g}
                    ${e.homepage?m`<a class="nf-detail" href=${e.homepage} target="_blank" rel="noopener">${e.homepage}</a>`:g}
                  </div>
                  ${n==="installed"?m`<span class="nf-state ok">${this.t("store_installed")}</span>`:m`<button class="nf-btn" @click=${()=>this.install(e)}>${n==="update"?this.t("store_update"):this.t("store_install")}</button>`}
                </li>`})}
            </ul>`:g}
    </div>`}stateOf(e){let n=kf().find(i=>i.url===e),r=Ei().filter(i=>i.source===e),o=[...n?.error?[n.error]:[],...r.flatMap(i=>i.errors)];if(n?.state==="error")return{label:this.t("plugins_error"),tone:"err",detail:o.join(" \xB7 ")};if(n?.state==="loading")return{label:this.t("plugins_loading"),tone:"warn",detail:""};if(n?.state==="loaded"&&!r.length)return{label:this.t("plugins_nothing_registered"),tone:"warn",detail:""};if(r.length){let i=r.map(s=>`${s.name}${s.version?` ${s.version}`:""}`).join(", ");return{label:this.t("plugins_loaded"),tone:o.length?"warn":"ok",detail:o.length?`${i} \xB7 ${o.join(" \xB7 ")}`:i}}return{label:this.t("plugins_reload_hint"),tone:"warn",detail:""}}render(){let e=this.plugins??[],n=Ei().filter(r=>!r.source);return m`<section class="nf-plugins">
      <h3>${this.t("plugins_title")}</h3>
      <p class="nf-sub">${this.t("plugins_intro")} <a href="${$t}/blob/main/docs/plugins.md" target="_blank" rel="noopener">${this.t("plugins_docs")}</a></p>
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
    </section>`}static styles=[Oe,Ye,ie`
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
    `]};customElements.get("nf-plugin-manager")||customElements.define("nf-plugin-manager",xa);var $a=class extends re{static properties={hass:{attribute:!1},packs:{attribute:!1},plugins:{attribute:!1}};t(e,n){return ge(this.hass,e,n)}render(){return m`<div class="nf-ext">
      <header class="nf-ext-head">
        <h2>${this.t("ext_title")}</h2>
        <p class="nf-sub">${this.t("ext_intro")}</p>
        <div class="nf-ext-actions">
          <a class="nf-btn" href="${$t}/issues/new/choose" target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
          <a class="nf-btn" href="${$t}/discussions" target="_blank" rel="noopener">💡 ${this.t("help_idea")}</a>
          <a class="nf-btn" href="${$t}#readme" target="_blank" rel="noopener">📖 ${this.t("manual")}</a>
        </div>
      </header>
      <nf-pack-manager .hass=${this.hass} .packs=${this.packs}></nf-pack-manager>
      <nf-model-upload .hass=${this.hass} .packs=${this.packs}></nf-model-upload>
      <nf-plugin-manager .hass=${this.hass} .plugins=${this.plugins}></nf-plugin-manager>
    </div>`}static styles=[Oe,Ye,ie`
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
    `]};customElements.get("nf-extensions")||customElements.define("nf-extensions",$a);var Fr="handled",xf=["select","rect","polygon","wall","opening","furniture","stairs","outdoor","hole","roof","energy"],$f=new Set(["vertex","room","device","opening","furniture","rotate","resize","outdoor","roofmove","roofcorner","roofvertex","outvertex","solarmove","solarturn","bgmove","bgscale","bgrotate"]),Xo=10,Le=t=>Math.round(t*1e3)/1e3,Sf={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]},Sa=class extends re{static properties={hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},packs:{attribute:!1},_doc:{state:!0},_doc3d:{state:!0},_split:{state:!0},_splitRatio:{state:!0},_wall3d:{state:!0},_solid3d:{state:!0},_sidePinned:{state:!0},_studio:{state:!0},_sideOpen:{state:!0},_floorId:{state:!0},_energyNote:{state:!0},_ctx:{state:!0},_fixedHint:{state:!0},_openingPreset:{state:!0},_measureLen:{state:!0},_rectSize:{state:!0},_tool:{state:!0},_wallView:{state:!0},_draft:{state:!0},_cursor:{state:!0},_guides:{state:!0},_view:{state:!0},_size:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0},_arcEdit:{state:!0},_routeDraft:{state:!0}};doc3dTimer;fixedPan=!1;reframe3d=!1;pressTimer=0;pressStart=null;history=new Ko(100);lib=new Oo(()=>this.requestUpdate());side=new jo(()=>this.requestUpdate());sel=new Uo(()=>this.requestUpdate());host=this.makeHost();backup=this.makeBackup();roof=this.makeRoof();bg=this.makeBackground();settingsActions={useRoofSections:()=>{this.roof.useSections(),this._tool="roof"}};drag=null;pointers=new Map;pinch=null;fitted=!1;resizeObserver;constructor(){super(),this.narrow=!1,this._floorId=null,this._arcEdit=null,this._routeDraft=null,this.roof.sectionId=null,this.roof.solarId=null,this.roof.picking=!1,this.roof.windowId=null,this._energyNote=null,this._openingPreset="door";let e=!1;try{e=localStorage.getItem("nextfloor.editor3d")==="1"}catch{}this._split=e,this._splitRatio=.55;try{let r=Number(localStorage.getItem("nextfloor.editorSplit"));r>=20&&r<=80&&(this._splitRatio=r/100)}catch{}this._wall3d="cut",this._solid3d=!1,this._doc3d=this._doc,this._sideOpen=!1;let n=!0;try{n=localStorage.getItem("nextfloor.sidePinned")!=="0"}catch{}this._sidePinned=n,this._studio=null,this._measureLen=3,this._rectSize=[4,3],this._tool="select",this._wallView=null,this._draft=[],this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._size={w:800,h:600},this._canUndo=!1,this._canRedo=!1}t(e,n){return ge(this.hass,e,n)}measureState(){return{draft:this._draft,length:this._measureLen,rectSize:this._rectSize}}measureActions(){return{setLength:e=>this._measureLen=e,step:e=>this.measureStep(e),close:()=>this.closeDraft(),undo:()=>this._draft=this._draft.slice(0,-1),setRectSize:e=>this._rectSize=e,addRectangle:()=>this.rectBySize()}}arcActions(){return{edit:this._arcEdit,setEdit:e=>this._arcEdit=e,apply:e=>{if(!this.isAdmin||Math.abs(e.bulge)<.01)return;let n=this._doc,r=structuredClone(n),o=r.floors.find(c=>c.id===this._floorId);if(!o)return;let[i,s,a]=e.key.split(":");if(!(i==="wall"?Sh(o,s,e.bulge).length>0:$h(o,s,Number(a),e.bulge))){this._arcEdit={...e,error:this.t("arc_too_wide")};return}this._arcEdit=null,this.setDoc(r,n)}}}freeWallActions(){return{update:e=>this.updateFreeWall(e),remove:()=>this.deleteFreeWall(),arc:this.arcActions(),lockButton:this.fixButton("wall",this.sel.wall??"")}}outdoorActions(){return{update:e=>this.updateOutdoor(e),setRectangle:(e,n)=>{let r=this.outdoorArea;r&&this.updateOutdoor({points:Ad(r,e,n)})},duplicate:()=>this.duplicateOutdoor(),remove:()=>this.deleteOutdoor(),removeCorner:e=>{let n=this.sel.outdoor;n&&this.change((r,o)=>{_d(o.outdoor.find(i=>i.id===n),e)})},lockButton:this.fixButton("outdoor",this.sel.outdoor??"")}}libraryActions(){return{add:e=>this.addFurniture(e),studio:()=>this.openStudio(null),packs:this.packs??[]}}openStudio(e){let n=e?K(e):void 0,r=n?.recipe&&e?.startsWith(`pack:${Gt}:`)?n.id:null;this._studio={recipe:r&&n?.recipe?{...n.recipe}:_a("cabinet",""),itemId:r,busy:!1,error:null},this._tool="furniture"}async saveStudio(){let e=this._studio;if(!e||!this.hass||!this.isAdmin)return;let n=this.hass.language??"en",r=fi().find(u=>u.id===Gt),o=r?.items??[],i={...e.recipe,name:e.recipe.name||this.t(`studio_kind_${e.recipe.kind}`)},s=e.itemId??lf(i.name,o.map(u=>u.id)),a=Yo(i,s,n),l={id:Gt,name:r?.name??this.t("studio_pack_name"),publisher:r?.publisher??this.t("studio_pack_publisher"),release:(r?.release??0)+1,items:e.itemId?o.map(u=>u.id===s?a:u):[...o,a]};this._studio={...e,busy:!0,error:null};try{let{builtin:u,imported_at:h,...d}=l;await Bn(this.hass,JSON.stringify({format:"nfpack",version:1,...d}))}catch(u){this._studio={...e,busy:!1,error:this.t("studio_error",{detail:u.message??String(u)})};return}pi([...fi().filter(u=>u.id!==Gt),l]),this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})),this._studio=null;let c=ae(Gt,s);if(e.itemId){let[u,h,d]=a.size;this.change(p=>p.floors.forEach(f=>f.furniture.forEach(_=>_.type===c&&Object.assign(_,{w:u,d:h,h:d}))))}else this.addFurniture(c)}studioButton(){let e=this.furnitureItem?.type;return!e||!ot(e)||!K(e)?.recipe||!e.startsWith(`pack:${Gt}:`)||!this.isAdmin?g:m`<button class="nf-btn nf-lib-studio" @click=${()=>this.openStudio(e)}>🛠️ ${this.t("studio_open")}</button>`}deviceActions(){return{update:e=>this.updateDevice(e),centre:()=>this.centreDevice(),remove:()=>{this.removeDevice(this.sel.device??""),this.sel.device=null},asFurniture:(e,n)=>this.deviceToFurniture(e,n),packs:this.packs??[],lockButton:this.fixButton("device",this.sel.device??"")}}deviceListActions(){return{select:e=>this.selectItem("device",e),place:e=>this.placeDevices(e),remove:e=>this.removeDevice(e),patchRoom:e=>this.updateRoom(e),spreadLights:e=>this.spreadCeilingLights(e),confirm:e=>confirm(e)}}furnitureToFloor(e){let[n,r]=[this._floorId,this.sel.furniture];if(!n||!r||!this.isAdmin)return;let o=structuredClone(this._doc);qp(o,n,r,e)&&(this.setDoc(o),this._floorId=e,this.selectItem("furniture",r))}furnitureActions(){return{update:e=>this.updateFurniture(e),rotate:e=>this.rotateFurniture(e),duplicate:()=>this.duplicateFurniture(),remove:()=>this.deleteFurniture(),toDevice:e=>this.furnitureToDevice(e),toSpot:e=>this.vehicleToSpot(e),toFloor:e=>this.furnitureToFloor(e),packs:this.packs??[],lockButton:this.fixButton("furniture",this.sel.furniture??"")}}openingActions(){return{update:e=>this.updateOpening(e),setPreset:(e,n)=>this.setOpeningPreset(e,n),remove:()=>this.deleteOpening(),isExterior:e=>this.openingIsExterior(e),isBelowGround:e=>e.type==="window"&&this.openingIsExterior(e)&&(this.floor?.elevation??0)+e.sill<-.22,lockButton:this.fixButton("opening",this.sel.opening??"")}}makeBackground(){let e=this;return new So({host:this.host,refresh:()=>e.requestUpdate(),api:{fetchImage:Ir,storeImage:Zt},readPicture:Mo,useSelectTool:()=>e._tool="select",currentTool:()=>e._tool})}makeRoof(){let e=this;return new No({host:this.host,floorId:()=>e._floorId,setFloorId:n=>e._floorId=n,confirm:n=>confirm(n),refresh:()=>e.requestUpdate()})}redrawQueued=!1;redrawSoon=()=>{this.redrawQueued||(this.redrawQueued=!0,setTimeout(()=>{this.redrawQueued=!1,this.requestUpdate()},30))};canvasContext(){return{host:this.host,toScreen:e=>this.toScreen(e),toWorld:(e,n)=>this.toWorld(e,n),scale:this._view.scale,floorId:this._floorId,redraw:this.redrawSoon}}roofDeps(){return{host:this.host,roof:this.roof,floorId:this._floorId,setFloorId:e=>this._floorId=e,toggleLockPlan:()=>this.toggleLockPlan()}}makeBackup(){let e=this;return new bo({get hass(){return e.hass},get doc(){return e._doc},t:(n,r)=>e.t(n,r),adopt:n=>{e.setDoc(n),e._floorId=n.floors[0]?.id??null,e.selectItem("room",null),e.fit()},say:n=>e.side.notice=n,refresh:()=>e.requestUpdate(),packsChanged:()=>e.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}))})}makeHost(){let e=this;return{get hass(){return e.hass},get doc(){return e._doc},get floor(){return e.floor},get admin(){return e.isAdmin},t:(n,r)=>e.t(n,r),change:n=>e.change(n),replace:n=>e.setDoc(n)}}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.resizeObserver?.disconnect()}willUpdate(e){e.has("packs")&&pi(this.packs??[]),e.has("_doc")&&this._split&&this.queue3d(),e.has("_split")&&this._split&&(this._doc3d=this._doc),e.has("_tool")&&this.houseTool&&!this._split&&!this.narrow&&(this._split=!0),e.has("_tool")&&(this.houseTool||e.get("_tool")==="roof"||e.get("_tool")==="energy")&&(this.reframe3d=!0),e.has("building")&&this.building!==this._doc&&(this._doc=this.building,this._doc3d=this.building,this._doc.floors.some(n=>n.id===this._floorId)||(this._floorId=this._doc.floors[0]?.id??null),this.floor?.rooms.some(n=>n.id===this.sel.room)||(this.sel.room=null))}firstUpdated(){let e=this.renderRoot.querySelector(".nf-canvas-wrap");this.resizeObserver=new ResizeObserver(()=>{this._size={w:e.clientWidth,h:e.clientHeight},!this.fitted&&this._size.w>0&&(this.fitted=!0,this.fit())}),this.resizeObserver.observe(e)}queue3d(){clearTimeout(this.doc3dTimer),this.doc3dTimer=setTimeout(()=>this._doc3d=this._doc,150)}onSplitDown(e){let n=e.currentTarget.parentElement,r=e.currentTarget;r.setPointerCapture(e.pointerId);let o=n.getBoundingClientRect(),i=a=>{this._splitRatio=Math.min(.8,Math.max(.2,(a.clientX-o.left)/o.width))},s=()=>{r.removeEventListener("pointermove",i),r.removeEventListener("pointerup",s),r.removeEventListener("pointercancel",s);try{localStorage.setItem("nextfloor.editorSplit",String(Math.round(this._splitRatio*100)))}catch{}};r.addEventListener("pointermove",i),r.addEventListener("pointerup",s),r.addEventListener("pointercancel",s),e.preventDefault()}toggleSplit(){this._split=!this._split;try{localStorage.setItem("nextfloor.editor3d",this._split?"1":"0")}catch{}}onFurnitureMoved3d(e){let{id:n,x:r,z:o}=e.detail,i=this._doc.settings.wall_interior;this.change(s=>{for(let a of s.floors){let l=a.furniture.find(d=>d.id===n);if(!l)continue;let[c,u]=Bi(a,l.x,l.z,r,o);Object.assign(l,{x:c,z:u});let h=Un(a,l,i);h&&Object.assign(l,h)}})}onDeviceMoved3d(e){let{id:n,x:r,z:o}=e.detail;this.change(i=>{for(let s of i.floors){let a=s.placements.find(u=>u.entity_id===n);if(!a)continue;let[l,c]=Bi(s,a.x,a.z,r,o);Object.assign(a,{x:l,z:c})}})}render3dBar(){if(!this.isAdmin)return g;let e=this.furnitureItem,n=this.device;if(e){let r=Gr(e),o=(i,s,a=.05)=>m`<label class="nf-3d-size" title=${this.t(`size_${i}`)}
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
        <span>${Je(this.hass,e.type)}</span>
        ${o("w",this.t("size_short_w"))} ${o("d",this.t("size_short_d"))} ${o("h",this.t("size_short_h"))}
        ${r?m`<label class="nf-3d-size" title=${this.t("mount_height")}
              >↕
              <input
                type="number"
                inputmode="decimal"
                step="0.05"
                min="0"
                .value=${String(Math.round((e.mount_y??Xt(this.floor,e))*100)/100)}
                @change=${i=>{let s=parseFloat(i.target.value.replace(",","."));Number.isFinite(s)&&s>=0&&this.updateFurniture({mount_y:Math.round(s*1e3)/1e3})}}
              />
            </label>`:g}
        <button class="nf-chip" @click=${()=>this.rotateFurniture(-45)}>↺ 45°</button>
        <button class="nf-chip" @click=${()=>this.rotateFurniture(45)}>↻ 45°</button>
        ${this.fixButton("furniture",e.id)}
        <button class="nf-chip nf-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>`}if(n){let r=U(n.entity_id),o=r==="light",i=r?Hr(r,this.floor?Ue(this.floor,n.x,n.z):2.5,o?n.mount??"ceiling":null):1;return m`<div class="nf-3d-bar">
        <span>${V(this.hass,n.entity_id)}</span>
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
      </div>`}return g}grab3d=null;surfaceGrabber={start:e=>this.grab3dStart(e),move:e=>this.grab3dMove(e),end:()=>{let e=this.grab3d;this.grab3d=null,e?.moved&&this.pushHistory(e.base)}};grab3dStart(e){let n=this._doc,r=X(n),o=null,i=(a,l,c,u,h=!1)=>{if(!c||h)return;let d=lo(c,e.o,e.d);!d||!as(c,u,d.u,d.s)||o&&o.t<=d.t||(o={id:a,win:l,t:d.t,du:d.u-u.u,ds:d.s-u.v})};if(this._tool==="energy")for(let a of n.settings.roof.solar??[])i(a.id,!1,me(n,a,r),a,!!a.locked);if(this._tool==="roof")for(let a of n.settings.roof.windows??[])i(a.id,!0,r.find(l=>l.key===a.face)??null,_t(a),!!a.locked);if(!o)return!1;let s=o;return this.grab3d={id:s.id,win:s.win,du:s.du,ds:s.ds,base:n,moved:!1},s.win?this.roof.windowId=s.id:this.roof.selectField(s.id),!0}grab3dMove(e){let n=this.grab3d;if(!n)return;let r=n.base,o=n.win?r.settings.roof.windows?.find(p=>p.id===n.id):void 0,i=n.win?o?_t(o):void 0:r.settings.roof.solar?.find(p=>p.id===n.id);if(!i)return;let s=me(r,i),a=s?.unbounded?[s]:n.win?X(r):[...X(r),...ze(r)],l=null;for(let p of a){let f=lo(p,e.o,e.d);f&&ss(p,f.u,f.s)&&(!l||f.t<l.t)&&(l={face:p,...f})}if(!l)return;let c=l.face,u=.05,h=p=>Le(Math.round(p/u)*u),d=lt(c,{...i,face:c.key,u:h(l.u-n.du),v:h(l.s-n.ds),tilt:c.flat?i.tilt??15:i.tilt});n.moved=!0,this.change(p=>{if(n.win){let _=p.settings.roof.windows?.find(y=>y.id===n.id);_&&Object.assign(_,{face:c.key,...d});return}let f=p.settings.roof.solar?.find(_=>_.id===n.id);f&&Object.assign(f,{face:c.key,...d},c.flat&&f.tilt==null?{tilt:15}:{})},n.base,!1)}get houseTool(){return this._tool==="roof"||this._tool==="energy"}render3d(){return m`<div class="nf-editor-3d">
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
        .furnishTypes=${this._tool==="energy"?Ee:this._tool==="roof"?[]:null}
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
    </div>`}updated(){for(let n of this.renderRoot.querySelectorAll("select option[selected]"))n.selected||(n.selected=!0);this.reframe3d&&(this.reframe3d=!1,setTimeout(()=>this.renderRoot.querySelector("nf-view3d")?.resetView(),250));let e=this.floor?.background;if(e&&this.bg.ensureLoaded(e.image_id),this.furnitureItem?.pictures)for(let n of this.storedPictures())this.bg.ensureLoaded(n)}get floor(){return this._doc?.floors.find(e=>e.id===this._floorId)}get room(){return this.floor?.rooms.find(e=>e.id===this.sel.room)}get isAdmin(){return this.hass?.user?.is_admin??!0}setDoc(e,n=this._doc){n&&this.history.record(n),this._doc=e,this.syncHistoryButtons(),this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}change(e,n=this._doc,r=!0){let o=structuredClone(n),i=o.floors.find(s=>s.id===this._floorId);!i&&this._floorId||(e(o,i),this.setDoc(o,r?n:null))}syncHistoryButtons(){this._canUndo=this.history.canUndo,this._canRedo=this.history.canRedo}undo(){let e=this.history.undo(this._doc);e&&this.restore(e)}redo(){let e=this.history.redo(this._doc);e&&this.restore(e)}restore(e){this._doc=e,e.floors.some(n=>n.id===this._floorId)||(this._floorId=e.floors[0]?.id??null),this.floor?.rooms.some(n=>n.id===this.sel.room)||(this.sel.room=null),this.sel.corner=null,this.syncHistoryButtons(),this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}toScreen(e){let{scale:n,ox:r,oy:o}=this._view;return[e[0]*n+r,e[1]*n+o]}toWorld(e,n){let{scale:r,ox:o,oy:i}=this._view;return[(e-o)/r,(n-i)/r]}localPoint(e){let n=this.renderRoot.querySelector("svg").getBoundingClientRect();return[e.clientX-n.left,e.clientY-n.top]}fit(){let e=this.floor?.rooms.flatMap(a=>a.points)??[],n=e.length?se(e):{x0:0,z0:0,x1:10,z1:8},r=1.5,o=n.x1-n.x0+2*r,i=n.z1-n.z0+2*r,s=Math.max(8,Math.min(400,Math.min(this._size.w/o,this._size.h/i)));this._view={scale:s,ox:this._size.w/2-(n.x0+n.x1)/2*s,oy:this._size.h/2-(n.z0+n.z1)/2*s}}showPoint(e,n){let r=Math.max(this._view.scale,70);this._view={scale:r,ox:this._size.w/2-e*r,oy:this._size.h/2-n*r}}zoomAt(e,n,r){let{scale:o,ox:i,oy:s}=this._view,a=Math.max(8,Math.min(600,o*e)),l=a/o;this._view={scale:a,ox:n-(n-i)*l,oy:r-(r-s)*l}}snap(e,n,r=!1){if(this._guides={},r)return e;let o=Fh(e,{rooms:this.floor?.rooms??[],grid:this._doc.settings.grid,reach:Xo/this._view.scale,skip:n});return this._guides=o.guides,o.point}onPointerDown(e){if(this._ctx=null,this._fixedHint=!1,this.fixedPan=!1,this.pointerDown(e),this.pointers.size!==1){clearTimeout(this.pressTimer);return}if(this.guardFixed(this.localPoint(e)),clearTimeout(this.pressTimer),this.pressStart=null,e.pointerType==="touch"&&(this._tool==="select"||this._tool==="furniture")){let n=this.localPoint(e),r=e.target;this.pressStart=n,this.pressTimer=window.setTimeout(()=>{let o=this.drag;o&&"moved"in o&&o.moved||(this.drag=null,this.openContext(r,n))},550)}}guardFixed(e){let n=this.drag;if(!n)return;let r=null;n.kind==="vertex"||n.kind==="room"?r=["room",n.roomId]:n.kind==="device"||n.kind==="aim"?r=["device",n.entityId]:n.kind==="opening"?r=["opening",n.id]:n.kind==="furniture"||n.kind==="rotate"||n.kind==="resize"?r=["furniture",n.id]:n.kind==="wallmove"?r=["wall",n.id]:n.kind==="outdoor"&&(r=["outdoor",n.id]),!(!r||!this.isFixedItem(...r))&&("moved"in n&&n.moved&&"base"in n&&this.restoreLive(n.base),this.drag={kind:"pan",last:e},this.fixedPan=!0)}pointerDown(e){e.currentTarget.setPointerCapture(e.pointerId);let n=this.localPoint(e);if(this.pointers.set(e.pointerId,n),this.pointers.size===2){let i=this.drag;i&&$f.has(i.kind)&&"moved"in i&&i.moved&&"base"in i&&this.restoreLive(i.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(e.button===1||e.button===2||!this.floor){this.drag={kind:"pan",last:n};return}let r={local:n,world:this.toWorld(...n),target:e.target,fine:e.altKey},o=this.pressRoute(r)??this.pressBackground(r)??this.pressWallTool(r)??this.pressRoofTools(r)??this.pressDrawingTool(r)??this.pressItem(r)??this.pressRoom(r);o!==Fr&&(this.drag=o)}pan(e){return{kind:"pan",last:e.local}}moves(e,n){return this.isAdmin?n:this.pan(e)}pressBackground(e){let{world:n,target:r}=e,o=this.floor?.background;if(this.bg.level&&this.isAdmin&&o)return this.bg.tapLevel(n),Fr;if(this.bg.handlesShown&&o&&r.closest("[data-bg-rotate]")){let s=yn(o,this.bg.picture(o.image_id)?.aspect??1);return{kind:"bgrotate",base:this._doc,moved:!1,start:Math.atan2(n[1]-s[1],n[0]-s[0]),rot:o.rotation??0}}if(this.bg.ruler&&this.bg.ruler.length<2&&this.isAdmin&&o)return this.bg.tapRuler(n),Fr;let i=!!r.closest("[data-bg-handle]")||!!r.closest("[data-bg]");if(o&&this.bg.handlesShown&&!this.bg.edit&&i)return this.pictureGesture(e,o);if(this.bg.edit&&this.isAdmin&&o){if(i)return this.pictureGesture(e,o);this.bg.edit=!1}}pictureGesture(e,n){return e.target.closest("[data-bg-handle]")?{kind:"bgscale",base:this._doc,moved:!1}:{kind:"bgmove",start:e.world,bx:n.x,bz:n.z,base:this._doc,moved:!1}}pressWallTool(e){if(this._tool!=="wall")return;let n=this.snap(e.world,void 0,e.fine);return{kind:"freewall",start:n,end:n}}pressRoofTools(e){if(this._tool!=="roof"&&this._tool!=="energy")return;let{local:n,world:r,target:o}=e,i=(b,v)=>o.closest(b)?.getAttribute(v)??null,s=this._tool==="energy",a=s?i("[data-energy-device]","data-energy-device"):null;if(a)return this.pressEnergyDevice(e,a);let l=s?i("[data-solar-turn]","data-solar-turn"):null;if(l&&this.isAdmin)return{kind:"solarturn",id:l,base:this._doc,moved:!1};let c=s?i("[data-solar]","data-solar"):null;if(c)return this.pressSolarField(e,c);let u=this._tool==="roof"?i("[data-roofwin]","data-roofwin"):null;if(u)return this.pressRoofWindow(e,u);this._tool==="roof"&&(this.roof.windowId=null);let h=s?i(".nf-energy-item","data-furniture"):null;if(h)return this.pressEnergyDevice(e,h);if(s)return this.selectItem("furniture",null),this.roof.solarId=null,this.pan(e);let d=i("[data-plus]","data-plus");if(d?.startsWith("roof:")&&this.isAdmin)return this.splitRoofEdgeGesture(...d.split(":").slice(1));let p=i("[data-roof-vertex]","data-roof-vertex"),f=i("[data-roof-corner]","data-roof-corner"),_=i("[data-roof]","data-roof");if(p&&this.isAdmin){let[b,v]=p.split(":");return{kind:"roofvertex",id:b,index:Number(v),base:this._doc,moved:!1}}if(f&&this.isAdmin){let[b,v,w]=f.split(":");return{kind:"roofcorner",id:b,corner:[v==="1"?1:0,w==="1"?1:0],base:this._doc,moved:!1}}if(_){let b=this.roof.isFixed(this._doc.settings.roof.sections?.find(v=>v.id===_));return b&&this.roof.sectionId===_&&(this._fixedHint=!0),this.roof.sectionId=_,this.isAdmin&&!b?{kind:"roofmove",id:_,start:r,startScreen:n,base:this._doc,moved:!1}:this.pan(e)}if(!this.isAdmin)return this.pan(e);this.roof.sectionId=null;let y=this.snap(r,void 0,e.fine);return{kind:"rect",start:y,end:y,roof:!0}}pressEnergyDevice(e,n){return this.roof.solarId=null,this.selectItem("furniture",n),this.moves(e,{kind:"furniture",id:n,start:e.world,startScreen:e.local,base:this._doc,moved:!1})}pressSolarField(e,n){let{local:r,world:o,target:i}=e,s=i.closest("[data-cell]")?.getAttribute("data-cell");if(this.roof.picking&&n===this.roof.solarId&&s&&this.isAdmin)return this.roof.toggleCell(s),this.pan(e);n!==this.roof.solarId&&(this.roof.picking=!1),this.roof.solarId=n,this.roof.sectionId=null;let a=this._doc.settings.roof.solar?.find(h=>h.id===n),l=a?me(this._doc,a)??void 0:void 0,c=l?this.faceHit(l,o):null,u=a&&c?{du:c.u-a.u,ds:Number.isNaN(c.s)?0:c.s-a.v}:null;return this.isAdmin&&!a?.locked?{kind:"solarmove",id:n,start:o,startScreen:r,base:this._doc,moved:!1,grab:u}:this.pan(e)}pressRoofWindow(e,n){this.roof.windowId=n,this.roof.sectionId=null;let r=this._doc.settings.roof.windows?.find(a=>a.id===n),o=r?X(this._doc).find(a=>a.key===r.face):void 0,i=o?cr(o,e.world):null,s=r&&i?{du:i.u-r.u,ds:i.s-r.v}:null;return this.isAdmin&&!r?.locked?{kind:"solarmove",id:n,start:e.world,startScreen:e.local,base:this._doc,moved:!1,grab:s,win:!0}:this.pan(e)}pressDrawingTool(e){let n=this._tool;if(n==="rect"||n==="outdoor"||n==="hole"||n==="stairs"){let r=this.snap(e.world,void 0,e.fine);return{kind:"rect",start:r,end:r,outdoor:n==="outdoor",hole:n==="hole",stairs:n==="stairs"}}if(n==="polygon"||n==="measure")return{kind:"tap",startScreen:e.local,last:e.local,panning:!1};if(n==="opening")return this.placeOpening(this._openingPreset,e.local)?Fr:this.pan(e)}pressItem(e){let{local:n,world:r,target:o}=e,i=(k,x)=>o.closest(k)?.getAttribute(x)??null,s=this._doc,a=i("[data-device]","data-device");if(a&&this.isAdmin)return{kind:"device",entityId:a,start:r,startScreen:n,base:s,moved:!1};let l=i("[data-opening]","data-opening");if(l)return this.selectItem("opening",l),this.moves(e,{kind:"opening",id:l,startScreen:n,base:s,moved:!1});let c=i("[data-resize]","data-resize");if(c&&this.isAdmin){let[k,x,E]=c.split(":");return{kind:"resize",id:k,corner:[x==="1"?1:-1,E==="1"?1:-1],base:s,moved:!1}}let u=i("[data-rotate]","data-rotate");if(u&&this.isAdmin)return{kind:"rotate",id:u,base:s,moved:!1};let h=i("[data-aim]","data-aim");if(h&&this.isAdmin)return{kind:"aim",entityId:h,base:s,moved:!1};let d=o.closest("[data-vertex], [data-mid]")?null:i("[data-furniture]","data-furniture");if(d)return this.selectItem("furniture",d),this.moves(e,{kind:"furniture",id:d,start:r,startScreen:n,base:s,moved:!1});let p=i("[data-vertex]","data-vertex"),f=i("[data-mid]","data-mid");if(p!==null&&this.room&&this.isAdmin)return this.sel.corner=Number(p),{kind:"vertex",roomId:this.room.id,index:this.sel.corner,base:s,moved:!1};if(f!==null&&this.room&&this.isAdmin)return this.splitEdgeGesture(this.room,Number(f));let _=i("[data-wall-end]","data-wall-end");if(_&&this.isAdmin){let[k,x]=_.split(":");return{kind:"wallmove",id:k,end:x,start:r,startScreen:n,base:s,moved:!1}}let y=i("[data-free-wall]","data-free-wall");if(y)return this.selectItem("wall",y),this.moves(e,{kind:"wallmove",id:y,end:null,start:r,startScreen:n,base:s,moved:!1});let b=i("[data-plus]","data-plus");if(b?.startsWith("out:")&&this.isAdmin)return this.splitOutdoorEdgeGesture(...b.split(":").slice(1));let v=i("[data-out-vertex]","data-out-vertex");if(v&&this.isAdmin){let[k,x]=v.split(":");return{kind:"outvertex",id:k,index:Number(x),base:s,moved:!1}}let w=i("[data-outdoor]","data-outdoor");if(w&&!o.closest("[data-room]")&&!this.roomAt(r))return this.selectItem("outdoor",w),this.moves(e,{kind:"outdoor",id:w,start:r,startScreen:n,base:s,moved:!1})}splitEdgeGesture(e,n){let[r,o]=[e.points[n],e.points[(n+1)%e.points.length]],i=He([(r[0]+o[0])/2,(r[1]+o[1])/2],[0,0]),s=this._doc;return this.change((a,l)=>qs(l,e.id,n,i),s,!1),this.sel.corner=n+1,{kind:"vertex",roomId:e.id,index:n+1,base:s,moved:!0}}splitOutdoorEdgeGesture(e,n){let r=Number(n),o=this._doc,i=this.floorOf({base:o})?.outdoor.find(l=>l.id===e);if(!i)return;let[s,a]=[i.points[r],i.points[(r+1)%i.points.length]];return this.change((l,c)=>gd(c.outdoor.find(u=>u.id===e),r,[(s[0]+a[0])/2,(s[1]+a[1])/2]),o,!1),{kind:"outvertex",id:e,index:r+1,base:o,moved:!0}}splitRoofEdgeGesture(e,n){let r=Number(n),o=this._doc;return this.change(i=>{let s=i.settings.roof.sections?.find(u=>u.id===e);if(!s)return;let a=zs(s),[l,c]=[a[r],a[(r+1)%a.length]];Od(s,r,[(l[0]+c[0])/2,(l[1]+c[1])/2])},o,!1),{kind:"roofvertex",id:e,index:r+1,base:o,moved:!0}}pressRoom(e){let n=e.target.closest("[data-room]")?.getAttribute("data-room")??this.roomAt(e.world);return n?(n!==this.sel.room&&(this.sel.corner=null),this.selectItem("room",n),!this.isAdmin||this._tool==="furniture"?this.pan(e):{kind:"room",roomId:n,start:e.world,startScreen:e.local,base:this._doc,moved:!1}):(this.selectItem("room",null),this.pan(e))}onPointerMove(e){let n=this.localPoint(e);if(this.pressStart?kn(n,this.pressStart,8)&&(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan&&(this._fixedHint=!0)):this.fixedPan&&!this._fixedHint&&this.drag?.kind==="pan"&&(this._fixedHint=!0),this.pointers.has(e.pointerId)&&this.pointers.set(e.pointerId,n),this.pinch){this.pinchMove();return}let r=this.toWorld(...n),o=this.drag;if(!o){this._tool!=="select"&&this._tool!=="furniture"&&this.floor&&(this._cursor=this.snap(r,void 0,e.altKey));return}this.moveDrag(o,{local:n,world:r,fine:e.altKey,straight:e.shiftKey})}pinchMove(){let e=this.pinchState();!e||!this.pinch||(this.zoomAt(e.dist/Math.max(1,this.pinch.dist),...e.mid),this._view={...this._view,ox:this._view.ox+e.mid[0]-this.pinch.mid[0],oy:this._view.oy+e.mid[1]-this.pinch.mid[1]},this.pinch=e)}panBy(e,n){this._view={...this._view,ox:this._view.ox+n[0]-e[0],oy:this._view.oy+n[1]-e[1]}}live(e,n){this.change(n,e.base,!1)}floorOf(e){return e.base.floors.find(n=>n.id===this._floorId)}moveDrag(e,n){let{local:r,world:o,fine:i}=n,s=this._doc.settings.grid,a=l=>l.moved||kn(r,l.startScreen);switch(e.kind){case"pan":this.panBy(e.last,r),e.last=r;return;case"tap":(e.panning||kn(r,e.startScreen,6))&&(e.panning=!0,this.panBy(e.last,r)),e.last=r;return;case"rect":e.end=this.snap(o,void 0,i),this.requestUpdate();return;case"freewall":e.end=Mh(e.start,this.snap(o,void 0,i),n.straight),this.requestUpdate();return;case"wallmove":{if(!a(e))return;e.moved=!0;let l=(this.floorOf(e)?.walls??[]).find(u=>u.id===e.id);if(!l)return;let c;if(e.end){let u=this.snap(o,void 0,i);c=e.end==="a"?{a:u,b:l.b}:{a:l.a,b:u}}else{let u=Do(e.start,o,Nt(s,i));c={a:He(l.a,u),b:He(l.b,u)}}this.live(e,(u,h)=>Object.assign((h.walls??[]).find(d=>d.id===e.id),c));return}case"vertex":{let l=this.snap(o,{roomId:e.roomId,index:e.index},i);e.moved=!0,this.live(e,(c,u)=>{u.rooms.find(h=>h.id===e.roomId).points[e.index]=l});return}case"room":{if(!a(e))return;e.moved=!0;let l=this.floorOf(e),c=l?.rooms.find(d=>d.id===e.roomId);if(!l||!c)return;let u=this.roomDelta(c,[o[0]-e.start[0],o[1]-e.start[1]],i),h=new Set(l.placements.filter(d=>C([d.x,d.z],c.points)).map(d=>d.entity_id));this.live(e,(d,p)=>{p.rooms.find(f=>f.id===e.roomId).points=c.points.map(f=>He(f,u)),p.placements=l.placements.map(f=>{if(!h.has(f.entity_id))return f;let[_,y]=He([f.x,f.z],u);return{...f,x:_,z:y}})});return}case"opening":{if(!a(e))return;e.moved=!0;let l=this.floorOf(e),c=l?.openings.find(d=>d.id===e.id),u=c&&l?it(c,l.rooms,l.walls??[]):null;if(!c||!u)return;let h=this.dropOffset(u.room,u.edge,o,c.width,i);this.live(e,(d,p)=>{p.openings.find(f=>f.id===e.id).offset=h});return}case"furniture":{if(!a(e))return;e.moved=!0;let l=this.floorOf(e)?.furniture.find(p=>p.id===e.id);if(!l)return;let[c,u]=Ys([l.x,l.z],e.start,o,Nt(s,i)),d=(i?null:this.snapToWall({...l,x:c,z:u}))??{x:c,z:u,rotation:l.rotation};this.live(e,(p,f)=>{Object.assign(f.furniture.find(_=>_.id===e.id),d)});return}case"resize":{e.moved=!0;let l=this.floorOf(e)?.furniture.find(u=>u.id===e.id);if(!l)return;let c=Fl(l,e.corner,o,Nt(s,i));this.live(e,(u,h)=>{Object.assign(h.furniture.find(d=>d.id===e.id),c)});return}case"rotate":{e.moved=!0;let l=this.floorOf(e)?.furniture.find(u=>u.id===e.id);if(!l)return;let c=Xs([l.x,l.z],o,i?1:15);this.live(e,(u,h)=>{h.furniture.find(d=>d.id===e.id).rotation=c});return}case"aim":{e.moved=!0;let l=this.floorOf(e)?.placements.find(u=>u.entity_id===e.entityId);if(!l)return;let c={rotation:Xs([l.x,l.z],o,i?1:5)};this.live(e,(u,h)=>{Object.assign(h.placements.find(d=>d.entity_id===e.entityId),c)});return}case"device":{if(!a(e))return;e.moved=!0;let l=this.floorOf(e)?.placements.find(h=>h.entity_id===e.entityId);if(!l)return;let[c,u]=Ys([l.x,l.z],e.start,o,Nt(s,i));this.live(e,(h,d)=>{Object.assign(d.placements.find(p=>p.entity_id===e.entityId),{x:c,z:u})});return}case"outdoor":{if(!a(e))return;e.moved=!0;let l=this.floorOf(e)?.outdoor.find(u=>u.id===e.id);if(!l)return;let c=Do(e.start,o,Nt(s,i));this.live(e,(u,h)=>{h.outdoor.find(d=>d.id===e.id).points=l.points.map(d=>He(d,c))});return}case"outvertex":{e.moved=!0;let l=this.snap(o,void 0,i),c=this.floorOf(e)?.outdoor.find(u=>u.id===e.id);if(!c)return;this.live(e,(u,h)=>{let d=h.outdoor.find(p=>p.id===e.id);d&&(d.points=Rh(c.points,e.index,l))});return}case"bgmove":e.moved=!0,this.live(e,(l,c)=>{c.background&&([c.background.x,c.background.z]=He([e.bx,e.bz],[o[0]-e.start[0],o[1]-e.start[1]]))});return;case"bgrotate":{e.moved=!0;let l=this.floor?.background,c=l?this.bg.picture(l.image_id):void 0;if(!l||!c)return;let u=yn(l,c.aspect),h=ed(e.rot,e.start,Math.atan2(o[1]-u[1],o[0]-u[0]),n.straight);this.live(e,(d,p)=>{p.background&&(p.background.rotation=h)});return}case"bgscale":{e.moved=!0;let l=this.floor?.background,c=l?this.bg.picture(l.image_id):void 0;if(!l||!c)return;let u=Math.max(.5,Le(Ju(l,c.aspect,o)[0]));this.live(e,(h,d)=>{d.background&&(d.background.width=u)});return}default:this.moveRoofDrag(e,n)}}moveRoofDrag(e,n){let{local:r,world:o,fine:i}=n,s=this._doc.settings.grid;switch(e.kind){case"roofmove":{if(!e.moved&&!kn(r,e.startScreen))return;e.moved=!0;let a=Do(e.start,o,Nt(s,i)),l=e.base.settings.roof.sections?.find(c=>c.id===e.id);if(!l)return;this.live(e,c=>{let u=c.settings.roof.sections?.find(_=>_.id===e.id);if(!u)return;let[h,d]=He([l.x0,l.z0],a),[p,f]=He([l.x1,l.z1],a);Object.assign(u,{x0:h,x1:p,z0:d,z1:f}),l.points&&(u.points=l.points.map(_=>He(_,a)))});return}case"roofvertex":{e.moved=!0;let a=this.snap(o,void 0,i);this.live(e,l=>{let c=l.settings.roof.sections?.find(u=>u.id===e.id);!c?.points||e.index>=c.points.length||(c.points[e.index]=He(a,[0,0]),Object.assign(c,gt(c.points)))});return}case"roofcorner":{e.moved=!0;let a=this.snap(o,void 0,i);this.live(e,l=>{let c=l.settings.roof.sections?.find(u=>u.id===e.id);c&&(c[e.corner[0]?"x1":"x0"]=Le(a[0]),c[e.corner[1]?"z1":"z0"]=Le(a[1]))});return}case"solarturn":{e.moved=!0;let a=e.base.settings.roof.solar?.find(u=>u.id===e.id),l=a?me(e.base,a):null;if(!a||!l)return;let c=ar(e.base,a,Eh(rr(l,a),o,i?1:15));this.live(e,u=>{let h=u.settings.roof.solar?.find(d=>d.id===e.id);h&&Object.assign(h,c)});return}case"solarmove":this.moveSolar(e,n);return;default:return}}moveSolar(e,n){let{local:r,world:o,fine:i}=n;if(!e.moved&&!kn(r,e.startScreen))return;e.moved=!0;let s=e.win?e.base.settings.roof.windows?.find(b=>b.id===e.id):void 0,a=e.win?s?_t(s):void 0:e.base.settings.roof.solar?.find(b=>b.id===e.id),l=e.win?X(e.base):[...X(e.base),...this._floorId?ze(e.base,this._floorId):[]],c=a?me(e.base,a,l):null;if(!a||!c)return;let u=i?.01:.05,h=b=>Le(Math.round(b/u)*u),d=c.unbounded?null:is(l,o),p=c,f,_;if(d&&e.grab)p=d.face,f=h(d.u-e.grab.du),_=Number.isNaN(d.s)?d.face.key===a.face?a.v:Math.max(0,d.face.ls-1.5):h(d.s-e.grab.ds);else{let[b,v]=[o[0]-e.start[0],o[1]-e.start[1]],w=[c.es[0],c.es[2]];f=h(a.u+b*c.eu[0]+v*c.eu[2]),_=h(a.v+(b*w[0]+v*w[1])/(w[0]*w[0]+w[1]*w[1]||1))}let y=lt(p,{...a,face:p.key,u:f,v:_,tilt:p.flat?a.tilt??15:a.tilt});this.live(e,b=>{if(e.win){let w=b.settings.roof.windows?.find(k=>k.id===e.id);w&&Object.assign(w,{face:p.key,...y});return}let v=b.settings.roof.solar?.find(w=>w.id===e.id);v&&Object.assign(v,{face:p.key,...y},p.flat&&v.tilt==null?{tilt:15}:{})})}onPointerUp(e){if(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan=!1,this.pointers.delete(e.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let n=this.drag;if(this.drag=null,!n||e.type==="pointercancel"){n&&$f.has(n.kind)&&"moved"in n&&n.moved&&"base"in n&&this.restoreLive(n.base);return}let r=this.localPoint(e);switch(n.kind){case"freewall":{Math.hypot(n.end[0]-n.start[0],n.end[1]-n.start[1])>=.2&&this.addFreeWall(n.start,n.end),this._guides={};break}case"wallmove":n.moved&&this.pushHistory(n.base),this._guides={};break;case"rect":{let[o,i]=n.start,[s,a]=n.end;if(Math.abs(s-o)>=.2&&Math.abs(a-i)>=.2){let l=[Math.min(o,s),Math.min(i,a)],c=[Math.max(o,s),Math.max(i,a)],u=[l,[c[0],l[1]],c,[l[0],c[1]]];n.outdoor?this.addOutdoor(u):n.hole?this.addHole(l,c):n.stairs?this.addStairs(l,c):n.roof?this.roof.addSection(l,c):this.addRoom(u)}this._guides={};break}case"tap":if(n.panning)break;this._tool==="measure"?this._draft=[this.snap(this.toWorld(...r),void 0,e.altKey)]:this.addDraftPoint(this.snap(this.toWorld(...r),void 0,e.altKey),r);break;case"opening":case"furniture":case"rotate":case"aim":case"resize":case"outdoor":case"solarmove":case"solarturn":case"roofmove":case"roofcorner":case"roofvertex":case"bgmove":case"bgscale":case"bgrotate":n.moved&&this.pushHistory(n.base);break;case"device":n.moved?this.pushHistory(n.base):this.selectItem("device",n.entityId);break;case"vertex":case"room":n.moved&&this.pushHistory(n.base),this._guides={};break;default:break}}onWheel(e){e.preventDefault();let[n,r]=this.localPoint(e);this.zoomAt(Math.exp(-e.deltaY*(e.deltaMode===1?.05:.0015)),n,r)}pinchState(){let e=[...this.pointers.values()];if(e.length<2)return null;let[n,r]=e;return{dist:Math.hypot(n[0]-r[0],n[1]-r[1]),mid:[(n[0]+r[0])/2,(n[1]+r[1])/2]}}pushHistory(e){this.history.record(e),this.syncHistoryButtons()}restoreLive(e){this._doc=e,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}roomDelta(e,n,r){if(r)return n;let o=this._doc.settings.grid,i=[Math.round(n[0]/o)*o,Math.round(n[1]/o)*o],a=Xo/this._view.scale;this._guides={};for(let l of this.floor?.rooms??[])if(l.id!==e.id)for(let c of l.points)for(let u of e.points){let h=Math.hypot(u[0]+n[0]-c[0],u[1]+n[1]-c[1]);h<a&&(a=h,i=[c[0]-u[0],c[1]-u[1]],this._guides={point:c})}return i}roomAt(e){return(this.floor?.rooms??[]).filter(o=>C(e,o.points)).sort((o,i)=>Re(o.points)-Re(i.points))[0]?.id??null}addDraftPoint(e,n){let r=this._draft;if(r.length>=3){let[i,s]=this.toScreen(r[0]);if(Math.hypot(i-n[0],s-n[1])<14){this.closeDraft();return}}let o=r[r.length-1];o&&Math.hypot(o[0]-e[0],o[1]-e[1])<1e-6||(this._draft=[...r,e])}closeDraft(){this._draft.length>=3&&Re(this._draft)>.05&&this.addRoom(this._draft),this._draft=[],this._cursor=null,this._guides={}}measureStep(e){let n=this._draft[this._draft.length-1];if(!n||!(this._measureLen>0))return;let r=Qt(n,this._measureLen,e),o=this._draft[0];if(this._draft.length>=3&&Math.hypot(r[0]-o[0],r[1]-o[1])<.01){this.closeDraft();return}this._draft=[...this._draft,r]}rectBySize(){let e=this._draft[0]??[0,0],[n,r]=this._rectSize;n>.1&&r>.1&&(this.addRoom([e,Qt(e,n,"right"),Qt(Qt(e,n,"right"),r,"down"),Qt(e,r,"down")]),this._draft=[])}get freeWall(){return this.sel.wall?(this.floor?.walls??[]).find(e=>e.id===this.sel.wall):void 0}updateFreeWall(e){let n=this.sel.wall;n&&this.change((r,o)=>Object.assign((o.walls??[]).find(i=>i.id===n),e))}deleteFreeWall(){let e=this.sel.wall;!e||!this.isAdmin||!this.confirmFixedDelete("wall",e)||(this.change((n,r)=>{r.walls=(r.walls??[]).filter(o=>o.id!==e),r.openings=r.openings.filter(o=>o.wall!==e)}),this.sel.wall=null)}get outdoorArea(){return this.sel.outdoor?this.floor?.outdoor.find(e=>e.id===this.sel.outdoor):void 0}updateOutdoor(e){let n=this.sel.outdoor;this.change((r,o)=>Object.assign(o.outdoor.find(i=>i.id===n),e))}deleteOutdoor(){let e=this.sel.outdoor;!e||!this.isAdmin||!this.confirmFixedDelete("outdoor",e)||(this.change((n,r)=>r.outdoor=r.outdoor.filter(o=>o.id!==e)),this.sel.outdoor=null)}onKey=e=>{if(e.composedPath().some(o=>o instanceof HTMLInputElement||o instanceof HTMLSelectElement||o instanceof HTMLTextAreaElement)||!this.isConnected||!this.offsetParent)return;let r=e.ctrlKey||e.metaKey;if(r&&e.key.toLowerCase()==="z")e.preventDefault(),e.shiftKey?this.redo():this.undo();else if(r&&e.key.toLowerCase()==="y")e.preventDefault(),this.redo();else if(r&&e.key.toLowerCase()==="d")e.preventDefault(),this.duplicateRoom();else if(e.key==="Delete"||e.key==="Backspace"&&(this._tool==="select"||this._tool==="furniture"))this.sel.device?this.deleteItem("device",this.sel.device):this.sel.outdoor?this.deleteOutdoor():this.sel.wall?this.deleteFreeWall():this.sel.opening?this.deleteOpening():this.sel.furniture?this.deleteFurniture():this.sel.corner!==null?this.deleteVertex(this.sel.corner):this.deleteRoom();else if(e.key.toLowerCase()==="l"&&!r&&this._tool==="roof"&&this.roof.section&&!this._doc.settings.lock_plan)this.roof.patchSection({locked:!this.roof.section.locked});else if(e.key.toLowerCase()==="l"&&!r&&(this.sel.furniture||this.sel.device)){let o=this.sel.target;this.toggleFixed(o.kind,o.id)}else if(Object.hasOwn(Sf,e.key)&&!r&&(this._tool==="select"||this._tool==="furniture")){let o=e.altKey?.01:e.shiftKey?.1:this._doc.settings.grid,[i,s]=Sf[e.key];this.nudgeSelection(i*o,s*o)&&e.preventDefault()}else if(e.key.toLowerCase()==="r"&&!r&&this.sel.furniture)this.rotateFurniture(e.shiftKey?-90:90);else if(e.key==="Backspace"&&this._tool==="polygon")this._draft=this._draft.slice(0,-1);else if(e.key==="Enter"&&this._tool==="polygon")this.closeDraft();else if(e.key==="Escape"){if(this._ctx){this._ctx=null;return}this._draft.length?this._draft=[]:this._tool!=="select"?this._tool="select":this.selectItem("room",null),this._cursor=null}};deleteFloor(){let e=this.floor;if(!e||!confirm(this.t("delete_floor_confirm",{name:e.name})))return;let n=structuredClone(this._doc);n.floors=n.floors.filter(r=>r.id!==e.id),this.setDoc(n),this._floorId=n.floors[0]?.id??null,this.sel.room=null}faceHit(e,n){return e.wall?{u:(n[0]-e.o[0])*e.eu[0]+(n[1]-e.o[2])*e.eu[2],s:Number.NaN}:cr(e,n)}planLayers(e,n){let r=this.canvasContext(),o=this.room,i=!!o&&this.isAdmin&&this._tool==="select"&&!this.sel.opening&&!this.sel.furniture&&!this.isFixedItem("room",o.id),s=this.drag?.kind==="freewall"||this.drag?.kind==="rect"?this.drag:null;return S`${ju(r,this._doc.settings)} ${Ku(r,this.bg,e)} ${Wh(r,this._size)} ${Bh(r)} ${n?Vh(r,n):g}
      ${e?S`${Nh(r,e,this.sel.outdoor)} ${Gh(r,e,this.sel.room,this.sel.edge)} ${Hh(r,e,this.sel.furniture)}
        ${jh(r,e,this.sel.wall)} ${n?Ch(r,e,n,this.sel.opening):g} ${Uh(r,e)}
        ${this._tool==="select"?Lh(r,e,this.sel.device):g}
        ${i?qh(r,o,this.sel.corner):g}
        ${Kh(r,this.outdoorArea,this._tool)}
        ${o&&this._tool==="select"?Zh(r,o):g}
        ${Vu(r,e)}`:g}
      ${this._tool==="roof"?S`${bs(r,this.roof)}${Wu(r,this.roof)}`:this._tool==="energy"?S`${bs(r,this.roof)}${Cu(r,this.roof)}${Nu(r,this.floor,this._doc.energy.routes??[],this._routeDraft)}${Bu(r,this.floor,this.sel.furniture)}`:g}
      ${Ph(r,s,this._tool,this._draft,this._cursor)} ${zh(r,this._guides,this._size)}`}wallsOfFloor(){let e=this.floor,{wall_exterior:n,wall_interior:r}=this._doc.settings;return e?Ae(e.rooms,{exterior:n,interior:r},e.walls??[]).walls:[]}edgeParts(e,n){let r=this.wallsOfFloor().flatMap(o=>o.sources.filter(i=>i.room_id===e.id&&i.edge===n).map(i=>i.t0));return r.length>0?[...new Set(r)].sort((o,i)=>o-i):[0]}changeRoom(e,n){this.isAdmin&&this.change((r,o)=>{let i=o.rooms.find(s=>s.id===e.id);i&&n(i)})}edgeActions(){return{openWall:(e,n)=>this._wallView={roomId:e.id,edge:n},partsOf:(e,n)=>this.edgeParts(e,n),isOuter:(e,n)=>this.wallsOfFloor().some(r=>r.exterior&&r.sources.some(o=>o.room_id===e.id&&o.edge===n)),setHeight:(e,n,r,o)=>{if(r!==void 0){let s=this.edgeParts(e,n).length;this.changeRoom(e,a=>ep(a,n,r,o,s));return}let i=this.wallsOfFloor().filter(s=>s.sources.some(a=>a.room_id===e.id&&a.edge===n)).flatMap(s=>s.sources);i.some(s=>s.room_id===e.id&&s.edge===n)||i.push({room_id:e.id,edge:n,t0:0,t1:0}),this.isAdmin&&this.change((s,a)=>{for(let l of i){let c=a.rooms.find(u=>u.id===l.room_id);c&&ta(c,l.edge,o)}})},setSlope:(e,n,r,o)=>this.changeRoom(e,i=>Qh(i,n,r,o)),clearSlope:(e,n)=>this.changeRoom(e,r=>Jh(r,n,this.floor?.height??2.5)),setThickness:(e,n,r,o,i)=>this.changeRoom(e,s=>op(s,n,r,o,i)),arc:this.arcActions(),cut:(e,n,r)=>{let o=this.edgeParts(e,n);this.changeRoom(e,i=>tp(i,n,r,o))},moveCut:(e,n,r,o)=>{let i=this.edgeParts(e,n);this.changeRoom(e,s=>np(s,n,r,o,i))},join:(e,n,r,o)=>this.changeRoom(e,i=>rp(i,n,r,o)),lit:this.sel.edge,light:e=>this.sel.edge=e}}addFloor(e=null){let n=Kp(this._doc,e,{first:this.t("default_floor"),next:o=>this.t("new_floor",{n:o})}),r=structuredClone(this._doc);r.floors=fa(r.floors,n),this.setDoc(r),this._floorId=n.id,this.sel.room=null,this.side.floorMenu=!1,this.fit()}addAreaRooms(e){let n=Zo(this._doc,e,this.hass?.areas);if(n.length===0)return;let r=Al(e,n,()=>L("room"));this.change((o,i)=>i.rooms.push(...r)),this.fit()}duplicateFloor(e){let n=this.floor;if(!n||!this.isAdmin)return;let r=Zp(this._doc,n,this.t("floor_copy_name",{name:n.name}),e),o=structuredClone(this._doc);o.floors=fa(o.floors,r),this.setDoc(o),this._floorId=r.id,this.sel.room=null,this.side.floorCopy=null,this.fit()}moveFloor(e){let n=this._floorId;if(!n)return;let r=Gp(this._doc.floors,n,e);if(r.every((i,s)=>i.id===this._doc.floors[s].id))return;let o=structuredClone(this._doc);o.floors=r.map(i=>o.floors.find(s=>s.id===i.id)),this.setDoc(o)}floorActions(){return{openFloor:e=>{this._floorId=e,this.sel.room=null,this.sel.corner=null,this._draft=[],this.fit()},addFloor:e=>this.addFloor(e),moveFloor:e=>this.moveFloor(e),deleteFloor:()=>this.deleteFloor(),duplicateFloor:e=>this.duplicateFloor(e),addAreaRooms:e=>this.addAreaRooms(e),closeGaps:()=>this.closeFloorGaps(),shift:()=>this.shiftFloor(this.side.shiftX,this.side.shiftZ),turn:()=>this.turnFloor(),rememberView:()=>this.rememberFloorView()}}roomActions(e){return{select:n=>this.selectItem("room",n),patch:n=>this.updateRoom(n),setArea:n=>this.setArea(n),setRect:(n,r)=>this.setRect(n,r),setCorner:(n,r,o)=>this.setPoint(n,r,o),removeCorner:n=>this.deleteVertex(n),duplicate:()=>this.duplicateRoom(),remove:()=>this.deleteRoom(),rememberView:()=>this.rememberRoomView(),applyPackage:n=>this.applyPackage(e,n),openSpots:()=>{let n=this.hass?_e(this.hass,e).filter(r=>r.startsWith("light.")):[];this.side.spots=Qp(e,n)},placeSpots:()=>this.placeSpots(e),lockButton:this.fixButton("room",e.id),wallHeights:lp(this.host,e,this.edgeActions()),climate:Bd(this.host,e,n=>this.updateRoom(n)),corner:this.sel.corner}}applyPackage(e,n){if(!this.isAdmin)return;let r=Dc(e,n,()=>L("furniture"));this.change((o,i)=>i.furniture.push(...r)),this.side.packages=!1,this.side.notice=this.t("pkg_done",{n:r.length})}placeSpots(e){let n=this.side.spots;if(!n||!this.isAdmin)return;let r=qo(e,n);this.change((o,i)=>i.furniture.push(...r)),this.side.spots=null,this.side.notice=this.t("spots_placed",{n:r.length})}viewCentre(){return this.toWorld(this._size.w/2,this._size.h/2)}addFreeWall(e,n){if(!this.floor)return;let r=dd(e,n);this.change((o,i)=>i.walls=[...i.walls??[],r]),this.selectItem("wall",r.id)}addHole(e,n){if(!this.floor)return;let r=fd(e,n);this.change((o,i)=>i.furniture.push(r)),this.selectItem("furniture",r.id),this._tool="select"}addStairs(e,n){let r=this.floor;if(!r)return;let[o,i]=[n[0]-e[0],n[1]-e[1]],s=Rs("stairs",this._doc,r,[(e[0]+n[0])/2,(e[1]+n[1])/2]),a=o>i*1.2;Object.assign(s,{w:Math.round((a?i:o)*1e3)/1e3,d:Math.round((a?o:i)*1e3)/1e3,rotation:a?90:0}),this.change((l,c)=>c.furniture.push(s)),this.selectItem("furniture",s.id),this._tool="select"}addOutdoor(e){if(!this.floor)return;let n=md(e);this.change((r,o)=>o.outdoor.push(n)),this.selectItem("outdoor",n.id),this._tool="select"}duplicateOutdoor(){let e=this.outdoorArea;if(!e||!this.isAdmin)return;let n=bd(e);this.change((r,o)=>o.outdoor.push(n)),this.selectItem("outdoor",n.id)}addRoom(e){if(!this.floor)return;let n=mh(e,this.t("new_room",{n:this.floor.rooms.length+1}));this.change((r,o)=>o.rooms.push(n)),this.sel.room=n.id,this.sel.corner=null,this._tool="select"}deleteRoom(){let e=this.sel.room;!e||!this.isAdmin||!this.confirmFixedDelete("room",e)||(this.change((n,r)=>_h(r,e)),this.sel.room=null,this.sel.corner=null)}duplicateRoom(){let e=this.room;if(!e||!this.isAdmin)return;let n=gh(e);this.change((r,o)=>o.rooms.push(n)),this.sel.room=n.id}deleteVertex(e){let n=this.room;n&&(this.change((r,o)=>bh(o,n.id,e)),this.sel.corner=null)}nudgeSelection(e,n){let r=this.floor;if(!r||!this.isAdmin)return!1;let o=this.sel.target;if(o&&this.isFixedItem(o.kind,o.id))return this._fixedHint=!0,!0;let i=o?o.kind==="room"?{kind:"room",id:o.id,corner:this.sel.corner}:{kind:o.kind,id:o.id}:null,s=i?Cp(r,i,e,n):En;return s===En?!1:(s!==ha&&this.change((a,l)=>s.apply(l)),!0)}addFurniture(e){let n=this.floor;if(!n||!this.isAdmin)return;let r=this.room,o=Rs(e,this._doc,n,r?ke(r.points):this.viewCentre());this.change((i,s)=>s.furniture.push(o)),this.selectItem("furniture",o.id),this.showPoint(o.x,o.z)}rotateFurniture(e){let n=this.furnitureItem;n&&this.isAdmin&&this.updateFurniture({rotation:wd(n.rotation,e)})}duplicateFurniture(){let e=this.furnitureItem;if(!e||!this.isAdmin)return;let n=yd(e);this.change((r,o)=>o.furniture.push(n)),this.selectItem("furniture",n.id)}vehicleToSpot(e){if(!this.isAdmin)return;let n=vd(e);this.change((r,o)=>{o.furniture=o.furniture.filter(i=>i.id!==e.id),o.furniture.push(n)}),this.selectItem("furniture",n.id)}deviceToFurniture(e,n){if(!this.isAdmin)return;let r=kd(e,n);this.change((o,i)=>{i.placements=i.placements.filter(s=>s.entity_id!==e.entity_id),i.furniture.push(r)}),this.sel.device=null,this.selectItem("furniture",r.id)}furnitureToDevice(e){let n=e.entity;if(!this.isAdmin||!n||n==="none")return;let r=xd(e,n);this.change((o,i)=>{i.furniture=i.furniture.filter(s=>s.id!==e.id),i.placements.some(s=>s.entity_id===n)||i.placements.push(r)}),this.sel.furniture=null,this.selectItem("device",n)}placeDevices(e){let n=this.room;!n||e.length===0||!this.isAdmin||this.change((r,o)=>Sd(r,o,n,e))}removeDevice(e){this.change(n=>$d(n,e))}centreDevice(){let e=this.device,n=e?this.floor?.rooms.find(i=>i.id===this.roomAt([e.x,e.z])):void 0;if(!e||!n)return;let[r,o]=Md(n);this.updateDevice({x:r,z:o})}spreadCeilingLights(e){let n=this.floor;if(!n)return;let r=kh(e,n.placements);r.length!==0&&this.change((o,i)=>{for(let s of r)Object.assign(i.placements.find(a=>a.entity_id===s.entityId),{x:s.x,z:s.z})})}shiftScope(){return{floorId:this._floorId,allFloors:this.side.shiftAll}}shiftFloor(e,n){!this.isAdmin||!e&&!n||(this.change(r=>Vp(r,this.shiftScope(),e,n)),this.side.shiftX=0,this.side.shiftZ=0)}turnFloor(){!this.floor||!this.isAdmin||this.change(e=>Np(e,this.shiftScope()))}setArea(e){let n=this.room;n&&this.updateRoom(vh(n,e,this.hass?.areas??{}))}setRect(e,n){let r=this.room,o=r?yh(r,e,n):null;o&&this.updateRoom({points:o})}setPoint(e,n,r){let o=this.room,i=o?wh(o,e,n,r):null;i&&this.updateRoom({points:i})}setOpeningPreset(e,n){this._openingPreset=n,this.updateOpening(Rd(e,n))}pressRoute(e){let n=this._routeDraft;if(!n||this._tool!=="energy"||!this._floorId||n.points.length>=kl)return;let[r,o]=this.snap(e.world,void 0,e.fine).map(i=>Math.round(i*1e3)/1e3);return this._routeDraft={...n,points:[...n.points,{floor_id:this._floorId,x:r,z:o}]},Fr}routeActions(){let e=n=>this.change(r=>{r.energy.routes=n(r.energy.routes??[]),r.energy.routes.length||delete r.energy.routes});return{draft:this._routeDraft,start:n=>this._routeDraft={key:n,points:[...this._doc.energy.routes?.find(r=>r.key===n)?.points??[]]},undoPoint:()=>this._routeDraft&&(this._routeDraft={...this._routeDraft,points:this._routeDraft.points.slice(0,-1)}),cancel:()=>this._routeDraft=null,finish:()=>{let n=this._routeDraft;this._routeDraft=null,!(!n||!this.isAdmin)&&e(r=>{let o=r.find(s=>s.key===n.key),i=r.filter(s=>s.key!==n.key);return n.points.length?[...i,{key:n.key,points:n.points,...o?.cable?{cable:!0}:{}}]:i})},clear:n=>this.isAdmin&&e(r=>r.filter(o=>o.key!==n)),setCable:(n,r)=>this.isAdmin&&e(o=>o.map(i=>i.key===n?{...i,cable:r}:i))}}energyActions(){return{follow:e=>{e.kind==="solar-field"?this.roof.solarId=e.id:e.kind==="add-solar-field"?this.roof.addField():e.kind==="add-device"?this.addEnergyDevice(e.type):this.openEnergyDevice(e.floor,e.item)},addDevice:e=>{this.roof.solarId=null,this.addEnergyDevice(e)},openDevice:(e,n)=>this.openEnergyDevice(e,n),importPrefs:()=>{this.importEnergy()},note:this._energyNote}}openEnergyDevice(e,n){this._floorId=e.id,this.roof.solarId=null,this.selectItem("furniture",n.id),this.showPoint(n.x,n.z)}addEnergyDevice(e){let n=this.floor;if(!n||!this.isAdmin)return;let r=i=>i.area_id&&this.hass?.areas?.[i.area_id]?.name||"",o=Lp(e,this._doc,n,{roomLabel:i=>`${i.name} ${r(i)} ${i.area_id??""}`,selected:this.room,fallback:this.toWorld(this._size.w/2,this._size.h/2)});this.change((i,s)=>s.furniture.push(o)),this.selectItem("furniture",o.id),this.showPoint(o.x,o.z)}async importEnergy(){if(!this.hass)return;let e=await Ip({hass:this.hass,doc:()=>this._doc,canAdd:()=>!!this.floor,addDevice:n=>this.addEnergyDevice(n),setField:(n,r,o)=>this.change(i=>{let s=i.floors.flatMap(a=>a.furniture).find(a=>a.id===n);s&&(s[r]=o)})});if(e.kind==="failed"){this._energyNote=this.t("energy_import_failed");return}this.selectItem("furniture",null),this._energyNote=e.filled>0?this.t("energy_import_done",{n:e.filled}):this.t("energy_import_none")}renderEnergyPanel(){let e=this.roof.solarId?this._doc.settings.roof.solar?.find(o=>o.id===this.roof.solarId):void 0;if(e)return Tp(this.roofDeps(),e);let n=this.sel.furniture?this.floor?.furniture.find(o=>o.id===this.sel.furniture&&Ee.includes(o.type)):void 0;if(n)return m`<button class="nf-btn nf-back" @click=${()=>this.selectItem("furniture",null)}>‹ ${this.t("tool_energy")}</button>
        ${Er(this.host,n,this.furnitureActions())}`;let r=this.energyActions();return m`${Pu(this.host,r)}${Pp(this.roofDeps())}${Tu(this.host,r)}${Hu(this.host,this.routeActions())}${Ou(this.host,r)}${Du(this.host)}`}fixItem(e,n,r){if(e)switch(n){case"room":return e.rooms.find(o=>o.id===r);case"opening":return e.openings.find(o=>o.id===r);case"furniture":return e.furniture.find(o=>o.id===r);case"device":return e.placements.find(o=>o.entity_id===r);case"wall":return(e.walls??[]).find(o=>o.id===r);case"outdoor":return e.outdoor.find(o=>o.id===r)}}isFixedItem(e,n){return Br(this.fixItem(this.floor,e,n),e!=="furniture"&&e!=="device",this._doc.settings)}toggleFixed(e,n){if(!this.isAdmin||e!=="furniture"&&e!=="device")return;let r=!this.isFixedItem(e,n);this.change((o,i)=>{let s=this.fixItem(i,e,n);s&&(s.locked=r)})}toggleLockPlan(){this.isAdmin&&this.change(e=>e.settings.lock_plan=!e.settings.lock_plan)}confirmFixedDelete(e,n){return!this.isFixedItem(e,n)||confirm(this.t("fixed_delete_confirm"))}onContextMenu(e){e.preventDefault(),!(this._tool!=="select"&&this._tool!=="furniture")&&(this.drag=null,this.openContext(e.target,this.localPoint(e)))}openContext(e,n){if(!this.isAdmin||!this.floor)return;let r=this.toWorld(...n),o=f=>e.closest(`[${f}]`)?.getAttribute(f)??null,i=null,s=o("data-device"),a=o("data-opening"),l=e.closest("[data-vertex], [data-mid]")?null:o("data-furniture"),c=o("data-free-wall"),u=o("data-outdoor"),h=o("data-room")??this.roomAt(r);if(s?i=["device",s]:a?i=["opening",a]:l?i=["furniture",l]:c?i=["wall",c]:u&&!h?i=["outdoor",u]:h&&(i=["room",h]),!i){this._ctx=null;return}let[d,p]=i;this.selectItem(d,p),(d==="opening"||d==="furniture")&&(this.sel.room=this.sel.room??h),this._ctx={x:n[0],y:n[1],kind:d,id:p}}deleteItem(e,n){if(e==="device"){if(!this.confirmFixedDelete(e,n))return;this.removeDevice(n),this.sel.device=null;return}e==="room"?this.deleteRoom():e==="opening"?this.deleteOpening():e==="furniture"?this.deleteFurniture():e==="wall"?this.deleteFreeWall():this.deleteOutdoor()}renderContext(){let e=this._ctx;if(!e)return g;let n=this.isFixedItem(e.kind,e.id),r=this.renderRoot.querySelector(".nf-canvas-wrap"),o=Math.max(4,Math.min(e.x,(r?.clientWidth??800)-190)),i=Math.max(4,Math.min(e.y,(r?.clientHeight??600)-190)),s=a=>()=>{this._ctx=null,a()};return m`<div class="nf-ctx" style=${`left:${o}px;top:${i}px`} @pointerdown=${a=>a.stopPropagation()} @contextmenu=${a=>a.preventDefault()}>
      ${e.kind==="furniture"||e.kind==="device"?m`<button title=${this.t("fix_hint")} @click=${s(()=>this.toggleFixed(e.kind,e.id))}>${n?`\u{1F513} ${this.t("unfix")}`:`\u{1F512} ${this.t("fix")}`}</button>`:m`<button title=${this.t("lock_plan_hint")} @click=${s(()=>this.toggleLockPlan())}>${this._doc.settings.lock_plan?`\u{1F513} ${this.t("plan_unlock")}`:`\u{1F512} ${this.t("plan_lock")}`}</button>`}
      ${e.kind==="room"?m`<button @click=${s(()=>this.duplicateRoom())}>⧉ ${this.t("duplicate")}</button>`:g}
      ${e.kind==="furniture"?m`<button @click=${s(()=>this.duplicateFurniture())}>⧉ ${this.t("duplicate")}</button>
            <button ?disabled=${n} @click=${s(()=>this.rotateFurniture(90))}>↻ ${this.t("ctx_rotate")}</button>
            <button ?disabled=${n} @click=${s(()=>this.mirrorFurniture())}>⇋ ${this.t("furn_mirror")}</button>`:g}
      <button class="nf-ctx-danger" @click=${s(()=>this.deleteItem(e.kind,e.id))}>✕ ${this.t("delete")}</button>
    </div>`}fixButton(e,n){if(!this.isAdmin)return g;if(e!=="furniture"&&e!=="device")return this._doc.settings.lock_plan?m`<button class="nf-btn nf-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>
            🔒 ${this.t("plan_locked")}
          </button>`:g;let r=this.isFixedItem(e,n);return m`<button class="nf-btn nf-fix" aria-pressed=${r} title=${this.t("fix_hint")} @click=${()=>this.toggleFixed(e,n)}>
      ${r?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
    </button>`}dropOffset(e,n,r,o,i){let s=e.points[n],a=e.points[(n+1)%e.points.length],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,c=((r[0]-s[0])*(a[0]-s[0])+(r[1]-s[1])*(a[1]-s[1]))/l;return Ed(l,c,o,i?.01:this._doc.settings.grid)}selectItem(e,n){this.side.notice=null,n&&(this._sideOpen=!0),this.sel.select(e,n,{roomOfDevice:r=>{let o=this.floor?.placements.find(i=>i.entity_id===r);return(o&&this.roomAt([o.x,o.z]))??null},roomOfOpening:r=>this.floor?.openings.find(o=>o.id===r)?.room_id??null})}get opening(){return this.sel.opening?this.floor?.openings.find(e=>e.id===this.sel.opening):void 0}get furnitureItem(){return this.sel.furniture?this.floor?.furniture.find(e=>e.id===this.sel.furniture):void 0}placeOpening(e,n){let r=this.floor;if(!r||!this.isAdmin)return!1;let o=null;for(let _ of r.walls??[]){let y=it({room_id:"",edge:0,wall:_.id},r.rooms,r.walls??[]);if(!y)continue;let[b,v]=this.toScreen(_.a),[w,k]=this.toScreen(_.b),x=(w-b)**2+(k-v)**2||1,E=Math.min(1,Math.max(0,((n[0]-b)*(w-b)+(n[1]-v)*(k-v))/x)),A=Math.hypot(n[0]-b-(w-b)*E,n[1]-v-(k-v)*E),F=[(_.a[0]+_.b[0])/2,(_.a[1]+_.b[1])/2],P=r.rooms.find(I=>I.points.length>=3&&C(F,I.points));A<Xo*2.2&&(!o||A-1<o.d)&&(o={room:y.room,edge:0,d:A-1,wall:_.id,roomId:P?.id??_.id})}for(let _ of r.rooms)for(let y=0;y<_.points.length;y++){let[b,v]=this.toScreen(_.points[y]),[w,k]=this.toScreen(_.points[(y+1)%_.points.length]),x=(w-b)**2+(k-v)**2||1,E=Math.min(1,Math.max(0,((n[0]-b)*(w-b)+(n[1]-v)*(k-v))/x)),A=Math.hypot(n[0]-b-(w-b)*E,n[1]-v-(k-v)*E),F=A-(_.id===this.sel.room?.5:0);A<Xo*2.2&&(!o||F<o.d)&&(o={room:_,edge:y,d:F})}if(!o)return!1;let{room:i,edge:s,wall:a}=o,l=i.points[s],c=i.points[(s+1)%i.points.length],u=Math.hypot(c[0]-l[0],c[1]-l[1]),h=en[e],d=h.type,p=Le(Math.min(h.width,Math.max(.3,u-.1))),f={id:L("opening"),room_id:o.roomId??i.id,edge:s,...a?{wall:a}:{},offset:this.dropOffset(i,s,this.toWorld(...n),p,!1),width:p,type:d,sill:h.sill,height:h.height,hinge:"left",leaves:h.leaves,swing:"in",...h.style&&!ki.has(h.style)?{style:h.style}:{},...h.opens?{opens:h.opens}:{},cover:null,contact:null,contact2:null,tilt:null};return this.change((_,y)=>y.openings.push(f)),this._tool="select",this.selectItem("opening",f.id),!0}updateOpening(e){let n=this.sel.opening;this.change((r,o)=>Object.assign(o.openings.find(i=>i.id===n),e))}deleteOpening(){let e=this.sel.opening;!e||!this.isAdmin||!this.confirmFixedDelete("opening",e)||(this.change((n,r)=>r.openings=r.openings.filter(o=>o.id!==e)),this.sel.opening=null)}snapToWall(e){return this.floor?Un(this.floor,e,this._doc.settings.wall_interior):null}updateFurniture(e){let n=this.sel.furniture;this.change((r,o)=>Object.assign(o.furniture.find(i=>i.id===n),e))}mirrorFurniture(){let e=this.furnitureItem;!e||!this.isAdmin||this.updateFurniture({mirror:!e.mirror})}deleteFurniture(){let e=this.sel.furniture;!e||!this.isAdmin||!this.confirmFixedDelete("furniture",e)||(this.change((n,r)=>r.furniture=r.furniture.filter(o=>o.id!==e)),this.sel.furniture=null)}get device(){return this.sel.device?this.floor?.placements.find(e=>e.entity_id===this.sel.device):void 0}updateDevice(e){let n=this.sel.device;this.change((r,o)=>Object.assign(o.placements.find(i=>i.entity_id===n),e))}closeFloorGaps(){let e=this.floor;if(!e||!this.isAdmin)return;let{rooms:n,gaps:r}=sc(e.rooms);if(!r.length){this.side.notice=this.t("gaps_none");return}let o=ac(r);this.change((i,s)=>{s.rooms=n,o&&(i.settings.wall_interior=o)}),this.side.notice=o?this.t("gaps_closed_wall",{n:r.length,t:G(this.hass,o,2)}):this.t("gaps_closed",{n:r.length})}updateFloor(e){this.change((n,r)=>Object.assign(r,e))}updateRoom(e){let n=this.sel.room;this.change((r,o)=>Object.assign(o.rooms.find(i=>i.id===n),e))}render(){Nd(this._doc.settings.units);let e=this.floor,n=e?Ae(e.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},e.walls??[]):null;return m`
      ${fh(this.host,this.lib.preview)}
      ${this._wallView?m`<nf-wall-view .host=${this.host} .doc=${this._doc} .roomId=${this._wallView.roomId} .edge=${this._wallView.edge} @close=${()=>this._wallView=null}></nf-wall-view>`:g}
      <div class="nf-editor ${this.narrow?"nf-narrow":""}">
        <div class="nf-main">
          <div class="nf-toolbar">
            ${this.narrow?m`<select class="nf-tool-select" aria-label=${this.t("tool_select")} ?disabled=${!e} @change=${r=>{this._tool=r.target.value,this._draft=[],this._cursor=null,this._sideOpen=this._tool!=="select"}}>
                  ${xf.filter(r=>this.isAdmin||r==="select").map(r=>m`<option value=${r} ?selected=${this._tool===r}>${this.t(`tool_${r}`)}</option>`)}
                </select>`:g}
            <div class="nf-seg" role="group" aria-label=${this.t("tool_select")} ?hidden=${this.narrow}>
              ${xf.map(r=>m`<button
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
            <p class="nf-hint ${this._fixedHint?"nf-hint-fixed":""}">${e?this._fixedHint?this.t("fixed_drag_hint"):this.t(`hint_${this._tool}`):this.t("hint_empty")}</p>
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
    </div>`}renderSide(e){let n=this.room,r=this.isAdmin;if(this._tool==="roof")return xp(this.roofDeps());if(this._tool==="energy")return this.renderEnergyPanel();if(this._tool==="furniture"&&e&&r)return this._studio?hf(this.host,this._studio,{change:i=>this._studio&&(this._studio={...this._studio,recipe:i,error:null}),save:()=>{this.saveStudio()},close:()=>this._studio=null}):m`${this.furnitureItem?m`${Er(this.host,this.furnitureItem,this.furnitureActions())}${this.studioButton()}`:g} ${ph(this.host,this.lib,this.room?.name,this.libraryActions())}`;let o=this._tool==="measure"?null:this.furnitureItem?Er(this.host,this.furnitureItem,this.furnitureActions()):this.opening?aa(this.host,this.opening,this.openingActions()):this.device?ra(this.host,this.device,this.deviceActions()):this.outdoorArea?As(this.host,this.outdoorArea,this.outdoorActions()):this.freeWall?Fs(this.host,this.freeWall,this.freeWallActions()):null;return o?m`<button class="nf-btn nf-back" @click=${()=>this.selectItem("room",this.sel.room)}>‹ ${this.t(n?"back_to_room":"back_to_floor",{room:n?.name??""})}</button>
        ${o}`:n&&this._tool!=="measure"?m`<button class="nf-btn nf-back" @click=${()=>this.selectItem("room",null)}>‹ ${this.t("back_to_floor")}</button>
        ${ga(this.host,this.side,n,this.roomActions(n))} ${Os(this.host,this.side,n,this.deviceListActions())}`:m`
      ${r?g:m`<p class="nf-note">${this.t("read_only")}</p>`}
      ${Yp(this.host,this.side,this.floorActions(),e,this._floorId)}
      ${this._tool==="measure"&&e?Fd(this.host,this.measureState(),this.measureActions()):this.freeWall?Fs(this.host,this.freeWall,this.freeWallActions()):this.outdoorArea?As(this.host,this.outdoorArea,this.outdoorActions()):this.opening?aa(this.host,this.opening,this.openingActions()):this.furnitureItem?Er(this.host,this.furnitureItem,this.furnitureActions()):this.device?ra(this.host,this.device,this.deviceActions()):n?m`${ga(this.host,this.side,n,this.roomActions(n))} ${Os(this.host,this.side,n,this.deviceListActions())}`:e?nf(this.host,e,{select:i=>this.selectItem("room",i)}):g}
      ${r?qc(this.host,()=>this.paneView()):g} ${r?Zc(this.host):g}
      ${Iu(this.host)}
      ${r&&!1?Yc(this.host):g}
      ${e&&r?nd(this.host,this.bg,e):g} ${r?vu(this.host,this.settingsActions):g}
      ${r?cu(this.host,this.backup):g}
    `}openingIsExterior(e){let n=this.floor,r=n?it(e,n.rooms,n.walls??[]):null;if(!n||!r)return!1;let o=Ae(n.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},n.walls??[]);return eo(o.walls,e,r)?.wall.exterior??!1}paneView(){let n=this.renderRoot.querySelector("nf-view3d")?.currentView();if(!n)return null;let r=n.target;return{theta:Le(n.theta),phi:Le(n.phi),radius:Le(n.radius),...r?{target:{x:Le(r.x),y:Le(r.y),z:Le(r.z)}}:{}}}rememberFloorView(){let e=this.paneView();if(!e){alert(this.t("floor_start_view_need_pane"));return}this.updateFloor({start_view:e})}rememberRoomView(){let e=this.paneView();if(!e){alert(this.t("room_start_view_need_pane"));return}this.updateRoom({start_view:e})}storedPictures(){let e=[];for(let n of this._doc.floors)for(let r of n.furniture)for(let o of r.pictures??[])o.image&&!/^https?:\/\//.test(o.image)&&!o.image.startsWith("camera:")&&!e.includes(o.image)&&e.push(o.image);return e}static styles=[Oe,Ye,rf]};customElements.get("nf-editor")||customElements.define("nf-editor",Sa);export{Sa as NfEditor};
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
