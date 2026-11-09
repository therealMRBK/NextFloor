/*! NextFloor, MIT licence. Includes three.js (MIT) and Lit (BSD-3-Clause); see LICENSE and THIRD_PARTY_NOTICES.md */
var m={cs:"72e5edda4539",da:"0fe66a82bf2a",es:"b2ab2061a278",fi:"9a17bc084f56",fr:"5d9673d45bec",hu:"27ba348531dc",it:"54ca2f5a6749",nb:"c5ea24fb9ef6",nl:"289b6b9e697d",pl:"d9c98d7f96f9",pt:"59ddf9e508b8",ro:"e3cb5f449f0f",sk:"320611594db0",sl:"8071691ceda3",sv:"9eb26cae0d64",tr:"7c83ce1c3372",zh:"282953462246"};var M=globalThis,N=M.ShadowRoot&&(M.ShadyCSS===void 0||M.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,U=Symbol(),me=new WeakMap,R=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==U)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(N&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=me.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&me.set(t,e))}return e}toString(){return this.cssText}},pe=o=>new R(typeof o=="string"?o:o+"",void 0,U),V=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((n,r,i)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[i+1],o[0]);return new R(t,o,U)},fe=(o,e)=>{if(N)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),r=M.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,o.appendChild(n)}},j=N?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return pe(t)})(o):o;var{is:Ge,defineProperty:Ie,getOwnPropertyDescriptor:Ze,getOwnPropertyNames:Ue,getOwnPropertySymbols:Ve,getPrototypeOf:je}=Object,C=globalThis,ge=C.trustedTypes,qe=ge?ge.emptyScript:"",Je=C.reactiveElementPolyfillSupport,F=(o,e)=>o,q={toAttribute(o,e){switch(e){case Boolean:o=o?qe:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},we=(o,e)=>!Ge(o,e),be={attribute:!0,type:String,converter:q,reflect:!1,useDefault:!1,hasChanged:we};Symbol.metadata??=Symbol("metadata"),C.litPropertyMetadata??=new WeakMap;var b=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=be){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Ie(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=Ze(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:r,set(a){let s=r?.call(this);i?.call(this,a),this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??be}static _$Ei(){if(this.hasOwnProperty(F("elementProperties")))return;let e=je(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(F("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(F("properties"))){let t=this.properties,n=[...Ue(t),...Ve(t)];for(let r of n)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,r]of t)this.elementProperties.set(n,r)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let r=this._$Eu(t,n);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let r of n)t.unshift(j(r))}else e!==void 0&&t.push(j(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return fe(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){let i=(n.converter?.toAttribute!==void 0?n.converter:q).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let i=n.getPropertyOptions(r),a=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:q;this._$Em=r;let s=a.fromAttribute(t,i.type);this[r]=s??this._$Ej?.get(r)??s,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(r===!1&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??we)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),i!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,i]of this._$Ep)this[r]=i;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[r,i]of n){let{wrapped:a}=i,s=this[r];a!==!0||this._$AL.has(r)||s===void 0||this.C(r,void 0,i,s)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[F("elementProperties")]=new Map,b[F("finalized")]=new Map,Je?.({ReactiveElement:b}),(C.reactiveElementVersions??=[]).push("2.1.2");var ne=globalThis,ke=o=>o,K=ne.trustedTypes,ve=K?K.createPolicy("lit-html",{createHTML:o=>o}):void 0,Ee="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,Te="?"+v,Xe=`<${Te}>`,D=document,W=()=>D.createComment(""),H=o=>o===null||typeof o!="object"&&typeof o!="function",re=Array.isArray,Ye=o=>re(o)||typeof o?.[Symbol.iterator]=="function",J=`[ 	
\f\r]`,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ye=/-->/g,Se=/>/g,S=RegExp(`>|${J}(?:([^\\s"'>=/]+)(${J}*=${J}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ae=/'/g,De=/"/g,Re=/^(?:script|style|textarea|title)$/i,oe=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),l=oe(1),pt=oe(2),ft=oe(3),z=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),ze=new WeakMap,A=D.createTreeWalker(D,129);function Fe(o,e){if(!re(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return ve!==void 0?ve.createHTML(e):e}var Qe=(o,e)=>{let t=o.length-1,n=[],r,i=e===2?"<svg>":e===3?"<math>":"",a=x;for(let s=0;s<t;s++){let h=o[s],u,p,_=-1,g=0;for(;g<h.length&&(a.lastIndex=g,p=a.exec(h),p!==null);)g=a.lastIndex,a===x?p[1]==="!--"?a=ye:p[1]!==void 0?a=Se:p[2]!==void 0?(Re.test(p[2])&&(r=RegExp("</"+p[2],"g")),a=S):p[3]!==void 0&&(a=S):a===S?p[0]===">"?(a=r??x,_=-1):p[1]===void 0?_=-2:(_=a.lastIndex-p[2].length,u=p[1],a=p[3]===void 0?S:p[3]==='"'?De:Ae):a===De||a===Ae?a=S:a===ye||a===Se?a=x:(a=S,r=void 0);let k=a===S&&o[s+1].startsWith("/>")?" ":"";i+=a===x?h+Xe:_>=0?(n.push(u),h.slice(0,_)+Ee+h.slice(_)+v+k):h+v+(_===-2?s:k)}return[Fe(o,i+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},B=class o{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let i=0,a=0,s=e.length-1,h=this.parts,[u,p]=Qe(e,t);if(this.el=o.createElement(u,n),A.currentNode=this.el.content,t===2||t===3){let _=this.el.content.firstChild;_.replaceWith(..._.childNodes)}for(;(r=A.nextNode())!==null&&h.length<s;){if(r.nodeType===1){if(r.hasAttributes())for(let _ of r.getAttributeNames())if(_.endsWith(Ee)){let g=p[a++],k=r.getAttribute(_).split(v),$=/([.?@])?(.*)/.exec(g);h.push({type:1,index:i,name:$[2],strings:k,ctor:$[1]==="."?Y:$[1]==="?"?Q:$[1]==="@"?ee:T}),r.removeAttribute(_)}else _.startsWith(v)&&(h.push({type:6,index:i}),r.removeAttribute(_));if(Re.test(r.tagName)){let _=r.textContent.split(v),g=_.length-1;if(g>0){r.textContent=K?K.emptyScript:"";for(let k=0;k<g;k++)r.append(_[k],W()),A.nextNode(),h.push({type:2,index:++i});r.append(_[g],W())}}}else if(r.nodeType===8)if(r.data===Te)h.push({type:2,index:i});else{let _=-1;for(;(_=r.data.indexOf(v,_+1))!==-1;)h.push({type:7,index:i}),_+=v.length-1}i++}}static createElement(e,t){let n=D.createElement("template");return n.innerHTML=e,n}};function E(o,e,t=o,n){if(e===z)return e;let r=n!==void 0?t._$Co?.[n]:t._$Cl,i=H(e)?void 0:e._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),i===void 0?r=void 0:(r=new i(o),r._$AT(o,t,n)),n!==void 0?(t._$Co??=[])[n]=r:t._$Cl=r),r!==void 0&&(e=E(o,r._$AS(o,e.values),r,n)),e}var X=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??D).importNode(t,!0);A.currentNode=r;let i=A.nextNode(),a=0,s=0,h=n[0];for(;h!==void 0;){if(a===h.index){let u;h.type===2?u=new L(i,i.nextSibling,this,e):h.type===1?u=new h.ctor(i,h.name,h.strings,this,e):h.type===6&&(u=new te(i,this,e)),this._$AV.push(u),h=n[++s]}a!==h?.index&&(i=A.nextNode(),a++)}return A.currentNode=D,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},L=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=E(this,e,t),H(e)?e===d||e==null||e===""?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==z&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ye(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==d&&H(this._$AH)?this._$AA.nextSibling.data=e:this.T(D.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=B.createElement(Fe(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let i=new X(r,this),a=i.u(this.options);i.p(t),this.T(a),this._$AH=i}}_$AC(e){let t=ze.get(e.strings);return t===void 0&&ze.set(e.strings,t=new B(e)),t}k(e){re(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,r=0;for(let i of e)r===t.length?t.push(n=new o(this.O(W()),this.O(W()),this,this.options)):n=t[r],n._$AI(i),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=ke(e).nextSibling;ke(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},T=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=d}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=E(this,e,t,0),a=!H(e)||e!==this._$AH&&e!==z,a&&(this._$AH=e);else{let s=e,h,u;for(e=i[0],h=0;h<i.length-1;h++)u=E(this,s[n+h],t,h),u===z&&(u=this._$AH[h]),a||=!H(u)||u!==this._$AH[h],u===d?e=d:e!==d&&(e+=(u??"")+i[h+1]),this._$AH[h]=u}a&&!r&&this.j(e)}j(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Y=class extends T{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===d?void 0:e}},Q=class extends T{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}},ee=class extends T{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=E(this,e,t,0)??d)===z)return;let n=this._$AH,r=e===d&&n!==d||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==d&&(n===d||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},te=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){E(this,e)}};var et=ne.litHtmlPolyfillSupport;et?.(B,L),(ne.litHtmlVersions??=[]).push("3.3.3");var xe=(o,e,t)=>{let n=t?.renderBefore??e,r=n._$litPart$;if(r===void 0){let i=t?.renderBefore??null;n._$litPart$=r=new L(e.insertBefore(W(),i),i,void 0,t??{})}return r._$AI(o),r};var ie=globalThis,y=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=xe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return z}};y._$litElement$=!0,y.finalized=!0,ie.litElementHydrateSupport?.({LitElement:y});var tt=ie.litElementPolyfillSupport;tt?.({LitElement:y});(ie.litElementVersions??=[]).push("4.2.2");var nt=(o,e,t={})=>o.callWS({type:`nextfloor/${e}`,...t}),We=o=>nt(o,"building/get");var O=["light","cover","climate","media","switch","fan","lock","binary","sensor","tap","other"];var He=["body","wood","fabric","white","metal","dark"],Be={body:"#172238",wood:"#19233c",fabric:"#1a2644",white:"#1d2946",metal:"#2a3a60",dark:"#0b111f"};var rt=["neon","blueprint","day","own"],Le=["dark","light","lines","background"],Pe={dark:"#2a2622",light:"#8c8378",lines:"#e0a060",background:"#1c1e22"};var Nt=["auto",...rt];var P=["walls","floors","temperature","humidity","co2"];var ae={height:420,walls:"auto",solid_walls:!1,explode:!0,roof_fade:!0,quality:"auto",stats:!1,markers:"important",heatmap:"none",theme:"neon",energy:!0,room_panel:!0,room_buttons:!1,fill:!1,controls:!1,fullscreen_button:!1,room_names:!0,floor_stack:"dim",alerts:!0,alert_jump:!1,scenes:!0,announcements:!0,sensor_bar:!0,weather:!0,weather_density:1,idle_return:0,controls_hidden:!1,controls_hide_after:0,marker_names:!1,tap_in_room:!1,room_double_tap:"auto",central:!0,central_open:!1,keep_camera:!1,readable:!1,plain:!1,right_back:!1,today:!0,night:"off",idle_orbit:!1},ot=o=>o.target.value,G=o=>o.target.value,it=o=>o.target.checked;function f(o,e,t,n,r){return l`<label class="toggle">
    <input type="checkbox" .checked=${e} @change=${i=>r(it(i))} />
    <span>${o.t(t)}${n?l`<small>${o.t(n)}</small>`:d}</span>
  </label>`}var c=(o,e,t,n)=>f(o,o.value[e],t,n,r=>o.set(e,r)),se=(o,e,t,n)=>f(o,o.value[e],t,n,r=>o.set(e,r||void 0));function w(o,e,t,n,r){return l`<label class="field"
    >${o.t(t)}
    <select @change=${i=>o.set(e,G(i))}>
      ${n.map(([i,a])=>l`<option value=${i} ?selected=${i===r}>${o.t(a)}</option>`)}
    </select>
  </label>`}function le(o,e,t,n){return l`<label class="field"
    >${o.t(t)}
    <select @change=${r=>o.set(e,Number(G(r))||void 0)}>
      ${n.map(r=>l`<option value=${r.value} ?selected=${o.value[e]===r.value}>${r.text}</option>`)}
    </select>
  </label>`}function I(o,e,t,n=""){return l`<label class="field wide"
    >${o.t(t)}
    <input type="text" placeholder=${n} .value=${o.value[e]??""} @change=${r=>o.set(e,ot(r).trim()||void 0)} />
  </label>`}function he(o,e,t,n){let r=n===void 0?"switch":n?"on":"off",i=[["switch","card_flows_switch"],["on","card_flows_on"],["off","card_flows_off"]];return l`<label class="field wide"
    >${o.t(t)}
    <select @change=${a=>o.set(e,G(a)==="switch"?void 0:G(a)==="on")}>
      ${i.map(([a,s])=>l`<option value=${a} ?selected=${r===a}>${o.t(s)}</option>`)}
    </select>
  </label>`}var $e=V`
  :host {
    display: block;
    color: var(--primary-text-color);
  }
  h3 {
    margin: 18px 0 8px;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--secondary-text-color);
  }
  h3:first-child {
    margin-top: 0;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px 12px;
  }
  [hidden] {
    display: none;
  }
  .wide {
    grid-column: 1 / -1;
  }
  .field {
    display: grid;
    gap: 4px;
    font-size: 13px;
    color: var(--secondary-text-color);
  }
  select,
  input[type="number"],
  input[type="text"] {
    box-sizing: border-box;
    width: 100%;
    min-height: 40px;
    padding: 8px 10px;
    border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.4));
    border-radius: 8px;
    background: var(--card-background-color, transparent);
    color: var(--primary-text-color);
    font: inherit;
    font-size: 14px;
  }
  .toggle {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 8px 0;
    font-size: 14px;
    cursor: pointer;
  }
  .toggle input {
    flex: none;
    width: 18px;
    height: 18px;
    margin: 1px 0 0;
    accent-color: var(--primary-color);
  }
  .sub {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 14px;
    margin: -2px 0 6px 28px;
  }
  .chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    cursor: pointer;
  }
  .chip input {
    width: 16px;
    height: 16px;
    margin: 0;
    accent-color: var(--primary-color);
  }
  .toggle small,
  .hint {
    display: block;
    margin: 2px 0 0;
    font-size: 12px;
    color: var(--secondary-text-color);
  }
  @media (max-width: 450px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
`;var ce=globalThis,de=ce.__nextfloorBuiltin?.de??{},_e=ce.__nextfloorBuiltin?.en??{};ce.__nextfloorBuiltin??={de,en:_e};var Me=()=>typeof m=="object"&&m||{},at=globalThis,Z=at.__nextfloorTexts??=new Map;function Ne(o){let e=o.toLowerCase().split("-")[0];return e!=="de"&&e!=="en"&&e in Me()?e:void 0}function st(o){let e=Ne(o),t=e===void 0?void 0:Z.get(e);return t instanceof Promise?void 0:t}function Ce(o,e){let t=Ne(o?.language??navigator.language);if(t===void 0)return!1;let n=Z.get(t);return n===void 0&&(n=fetch(new URL(`./lang/${t}.json?v=${Me()[t]}`,import.meta.url)).then(r=>r.ok?r.json():{}).catch(()=>({})).then(r=>{Z.set(t,r&&typeof r=="object"?r:{})}),Z.set(t,n)),n instanceof Promise?(n.then(()=>e.requestUpdate()),!0):!1}function Ke(o,e,t={}){let n=o?.language??navigator.language,r=n.startsWith("de"),i=(r?void 0:st(n)?.[e])??(r?de:_e)[e]??_e[e]??de[e]??e;for(let[a,s]of Object.entries(t))i=i.replace(`{${a}}`,String(s));return i}var ue=class extends y{static properties={hass:{attribute:!1},_config:{state:!0},_floors:{state:!0},_rooms:{state:!0},_templates:{state:!0}};loading=!1;form;constructor(){super(),this._config={type:"custom:nextfloor-card"},this._floors=[],this._rooms=[],this._templates=[];let e=this;this.form={get value(){return{...ae,...e._config}},t:(t,n)=>Ke(e.hass,t,n),set:(t,n)=>e.write(t,n)}}setConfig(e){this._config=e}willUpdate(){this.hass&&!this.loading&&this._floors.length===0&&(this.loading=!0,We(this.hass).then(e=>{this._floors=e.building.floors.map(t=>({id:t.id,name:t.name})),this._templates=Object.keys(e.building.settings.card_templates??{}),this._rooms=e.building.floors.flatMap(t=>t.rooms.map(n=>({id:n.id,name:n.name,floor:t.name})))},()=>{}))}write(e,t){let n={...this._config};t===void 0||t===""||ae[e]===t?delete n[e]:n[e]=t,this.publish(n)}publish(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0}))}roomsChoice(){if(this._rooms.length===0)return l``;let e=new Set(this._config.rooms??[]),t=(n,r)=>{let i=this._rooms.map(a=>a.id).filter(a=>a===n?r:e.has(a));this.form.set("rooms",i.length?i:void 0)};return l`<fieldset class="rooms">
      <legend>${this.form.t("card_rooms")}</legend>
      <small>${this.form.t("card_rooms_hint")}</small>
      ${this._rooms.map(n=>l`<label class="toggle"><input type="checkbox" .checked=${e.has(n.id)} @change=${r=>t(n.id,r.target.checked)} /><span>${this._floors.length>1?`${n.floor} \xB7 `:""}${n.name}</span></label>`)}
    </fieldset>`}floorThumbsToggle(){let e=!this._config.floor,t=this._config.floor?"card_floor_thumbs_hint_start":"card_floor_thumbs_hint",n=f(this.form,this._config.floor_thumbs??e,"card_floor_thumbs",t,i=>{let a={...this._config};i===e?delete a.floor_thumbs:a.floor_thumbs=i,this.publish(a)});if(!(this._config.floor_thumbs??e))return n;let r=f(this.form,this._config.floor_thumbs_folded===!0,"card_floor_thumbs_folded","card_floor_thumbs_folded_hint",i=>{let a={...this._config};i?a.floor_thumbs_folded=!0:delete a.floor_thumbs_folded,this.publish(a)});return l`${n} ${r}`}controlsSection(){let e=this.form,t=this._config.controls,n=!!t&&(t===!0||t.length>0),r=t===!0?[...P]:Array.isArray(t)?t:[],i=s=>e.set("controls",s.length===P.length?!0:s.length>0?s:void 0),a=[0,10,30,60,120].map(s=>({value:s,text:s?e.t("card_hide_after_s",{n:s}):e.t("card_idle_off")}));return l`${f(e,n,"card_controls","card_controls_hint",s=>e.set("controls",s?!0:void 0))}
    ${f(e,e.value.central,"card_central","card_central_hint",s=>e.set("central",s?void 0:!1))}
    ${f(e,e.value.lock_button!==!1,"card_lock_button",void 0,s=>e.set("lock_button",s?void 0:!1))}
    ${f(e,e.value.walk_button!==!1,"card_walk_button",void 0,s=>e.set("walk_button",s?void 0:!1))}
    ${f(e,e.value.time_travel!==!1,"card_travel_button",void 0,s=>e.set("time_travel",s?void 0:!1))}
    ${se(e,"marker_names","card_marker_names","card_marker_names_hint")} ${se(e,"controls_hidden","card_controls_hidden","card_controls_hidden_hint")}
    ${le(e,"controls_hide_after","card_controls_hide_after",a)}
    ${n?l`<div class="sub">
          ${P.map(s=>l`<label class="chip">
              <input
                type="checkbox"
                .checked=${r.includes(s)}
                @change=${h=>i(h.target.checked?P.filter(u=>u===s||r.includes(u)):r.filter(u=>u!==s))}
              />
              ${e.t(`card_control_${s}`)}
            </label>`)}
        </div>`:d}`}kioskSection(){let e=this.form,{night:t}=e.value,n=t==="off"||t==="sun"?t:"time",r=[0,1,2,5,10].map(a=>({value:a*60,text:a?e.t("card_idle_min",{n:a}):e.t("card_idle_off")})),i=[["off","card_night_off"],["sun","card_night_sun"],["time","card_night_time"]];return l`<h3>${e.t("card_section_kiosk")}</h3>
      <div class="grid">
        ${le(e,"idle_return","card_idle_return",r)}
        <label class="field"
          >${e.t("card_night")}
          <select @change=${a=>e.set("night",{off:void 0,sun:"sun",time:"22:00-06:00"}[a.target.value])}>
            ${i.map(([a,s])=>l`<option value=${a} ?selected=${n===a}>${e.t(s)}</option>`)}
          </select>
        </label>
        ${n==="time"?l`<label class="field wide"
              >${e.t("card_night_range")}
              <input type="text" pattern="\\d{1,2}:\\d{2}-\\d{1,2}:\\d{2}" placeholder="22:00-06:00" .value=${t} @change=${a=>e.set("night",a.target.value.trim()||void 0)} />
            </label>`:d}
      </div>
      <p class="hint">${e.t("card_idle_hint")}</p>
      ${c(e,"idle_orbit","card_idle_orbit","card_idle_orbit_hint")}
      <div class="grid">${I(e,"dashboard","card_dashboard","/lovelace/home")} ${I(e,"dashboard_label","card_dashboard_label")}</div>
      <p class="hint">${e.t("card_dashboard_hint")}</p>`}featuresSection(){let e=this.form,t=Object.keys(this.hass?.states??{}).filter(n=>n.startsWith("weather.")).sort();return l`<h3>${e.t("card_section_features")}</h3>
      ${c(e,"alerts","card_alerts","card_alerts_hint")} ${c(e,"alert_jump","card_alert_jump","card_alert_jump_hint")}
      ${c(e,"scenes","card_scenes","card_scenes_hint")}
      ${c(e,"sensor_bar","card_sensor_bar","card_sensor_bar_hint")}
      ${c(e,"central_open","card_central_open","card_central_open_hint")}
      ${c(e,"keep_camera","card_keep_camera","card_keep_camera_hint")}
      ${c(e,"readable","card_readable","readable_hint")}
      ${c(e,"plain","card_plain","plain_hint")}
      ${c(e,"right_back","right_back","right_back_hint")}
      ${this.roomsChoice()}
      ${c(e,"today","card_today","card_today_hint")}
      <label class="field"
        >${e.t("view_zoom")}
        <select @change=${n=>e.set("zoom",Number(n.target.value))}>
          ${[.8,1,1.25,1.5,1.75,2,2.5].map(n=>l`<option value=${n} ?selected=${(e.value.zoom??1)===n}>${Math.round(n*100)} %</option>`)}
        </select>
      </label>
      ${c(e,"announcements","card_announcements","card_announcements_hint")}
      ${e.value.announcements!==!1?l`<div class="grid">${I(e,"screen_name","screen_name")}</div>`:d}
      ${c(e,"weather","card_weather","card_weather_hint")}
      ${e.value.weather!==!1?l`<div class="grid">
            <label class="field wide"
              >${e.t("weather_entity")}
              <select @change=${n=>e.set("weather_entity",n.target.value||void 0)}>
                <option value="" ?selected=${!e.value.weather_entity}>${e.t("card_weather_plan")}</option>
                ${t.map(n=>l`<option value=${n} ?selected=${n===e.value.weather_entity}>${String(this.hass?.states[n]?.attributes.friendly_name??n)}</option>`)}
              </select>
            </label>
            <label class="field"
              >${e.t("card_weather_density")}
              <select @change=${n=>e.set("weather_density",Number(n.target.value))}>
                ${[1,.75,.5,.3,.15].map(n=>l`<option value=${n} ?selected=${(e.value.weather_density??1)===n}>${Math.round(n*100)} %</option>`)}
              </select>
            </label>
            <p class="hint wide">${e.t("card_weather_density_hint")}</p>
          </div>`:d}
      <p class="hint">${e.t("card_pro_hint")}</p>`}furnitureColors(e){let t=this._config.furniture_colors??{},n=(r,i)=>{let a={...t,[r]:i};i||delete a[r],e.set("furniture_colors",Object.keys(a).length?a:void 0)};return l`<details class="field">
      <summary>${e.t("furn_colors_card")}${Object.keys(t).length?` (${Object.keys(t).length})`:""}</summary>
      ${He.map(r=>l`<label class="field"
          >${e.t(`furn_color_${r}`)}
          <input type="color" .value=${t[r]??Be[r]} @input=${i=>n(r,i.target.value)} />
          ${t[r]?l`<button type="button" class="link" @click=${()=>n(r,null)}>${e.t("furn_color_house")}</button>`:d}
        </label>`)}
    </details>`}ownLookColors(e){let t=this._config.own_look??{},n=(r,i)=>{let a={...t,[r]:i??void 0};i||delete a[r],e.set("own_look",Object.keys(a).length?a:void 0)};return l`<details class="field wide">
      <summary>${e.t("own_look_card")}${Object.keys(t).length?` (${Object.keys(t).length})`:""}</summary>
      ${Le.map(r=>l`<label class="field"
          >${e.t(`own_look_${r}`)}
          <input type="color" .value=${t[r]??Pe[r]} @input=${i=>n(r,i.target.value)} />
          ${t[r]?l`<button type="button" class="link" @click=${()=>n(r,null)}>${e.t("furn_color_house")}</button>`:d}
        </label>`)}
    </details>`}viewSection(){let e=this.form,t=e.value;return l`<h3>${e.t("card_section_view")}</h3>
      <div class="grid">
        ${this._templates.length?l`<label class="field wide"
              >${e.t("card_template")}
              <select @change=${n=>e.set("template",n.target.value||void 0)}>
                <option value="" ?selected=${!t.template}>${e.t("card_template_none")}</option>
                ${this._templates.map(n=>l`<option value=${n} ?selected=${n===t.template}>${n}</option>`)}
                ${t.template&&!this._templates.includes(t.template)?l`<option value=${t.template} selected>${t.template}</option>`:d}
              </select>
            </label>`:d}
        <label class="field wide"
          >${e.t("card_floor")}
          <select @change=${n=>e.set("floor",n.target.value||void 0)}>
            <option value="" ?selected=${!t.floor}>${e.t("card_floor_house")}</option>
            ${this._floors.map(n=>l`<option value=${n.id} ?selected=${n.id===t.floor}>${n.name}</option>`)}
            ${t.floor&&!this._floors.some(n=>n.id===t.floor)?l`<option value=${t.floor} selected>${t.floor}</option>`:d}
          </select>
        </label>
        <label class="field"
          >${e.t("card_size")}
          <select @change=${n=>e.set("fill",n.target.value==="fill")}>
            <option value="fixed" ?selected=${!t.fill}>${e.t("card_size_fixed")}</option>
            <option value="fill" ?selected=${t.fill}>${e.t("card_size_fill")}</option>
          </select>
        </label>
        <label class="field" ?hidden=${t.fill}
          >${e.t("card_height")}
          <input
            type="number"
            min="150"
            max="2000"
            step="10"
            .value=${String(t.height)}
            @change=${n=>{let r=Math.round(Number(n.target.value));r>100&&e.set("height",r)}}
          />
        </label>
        ${w(e,"theme","theme",[["auto","theme_auto"],["neon","theme_neon"],["blueprint","theme_blueprint"],["day","theme_day"],["own","theme_own"]],t.theme)}
        ${w(e,"clock","clock",[["none","clock_none"],["top_left","clock_top_left"],["top_right","clock_top_right"],["bottom_left","clock_bottom_left"],["bottom_right","clock_bottom_right"]],t.clock??"none")}
        <label class="field"
          >${e.t("accent")}
          <input type="color" .value=${this._config.accent??"#37e0ff"} @input=${n=>e.set("accent",n.target.value)} />
          ${this._config.accent?l`<button type="button" class="link" @click=${()=>e.set("accent",void 0)}>${e.t("accent_reset")}</button>`:d}
        </label>
        ${t.theme==="own"?this.ownLookColors(e):d}
        ${this.furnitureColors(e)}
        ${w(e,"walls","card_walls",[["auto","walls_auto"],["cut","walls_cut"],["slope","walls_slope"]],t.walls)}
        ${c(e,"solid_walls","card_solid_walls")}
        <label class="field" title=${e.t("glass_walls_hint")}
          >${e.t("glass_walls")} (${this._config.glass_walls??20} %)
          <input type="range" min="0" max="100" step="5" .value=${String(this._config.glass_walls??20)} @change=${n=>{let r=Number(n.target.value);e.set("glass_walls",r===20?void 0:r)}} />
        </label>
        ${w(e,"quality","quality",[["auto","quality_auto"],["low","quality_low"],["high","quality_high"]],t.quality)}
        ${w(e,"floor_stack","card_floor_stack",[["dim","floor_stack_dim"],["stacked","floor_stack_stacked"],["single","floor_stack_single"]],t.floor_stack)}
      </div>
      ${t.fill?l`<p class="hint">${e.t("card_fill_hint")}</p>`:d}
      <p class="hint">${e.t("card_quality_hint")}</p>`}markersOutside(){let e=this.form,t=e.value.markers_outside;return l`${f(e,!!t,"card_markers_outside","card_markers_outside_hint",n=>e.set("markers_outside",n?O.filter(r=>r!=="light"):void 0))}
    ${t?l`<div class="sub">
          ${O.map(n=>l`<label class="chip">
              <input
                type="checkbox"
                .checked=${t.includes(n)}
                @change=${r=>e.set("markers_outside",r.target.checked?O.filter(i=>i===n||t.includes(i)):t.filter(i=>i!==n))}
              />
              ${e.t(`marker_kind_${n}`)}
            </label>`)}
        </div>`:d}`}showSection(){let e=this.form,t=e.value;return l`<h3>${e.t("card_section_show")}</h3>
      <div class="grid">
        ${w(e,"markers","markers",[["none","markers_none"],["important","markers_important"],["all","markers_all"]],t.markers)}
        ${w(e,"heatmap","heatmap",[["none","heat_off"],["temperature","heat_temperature"],["humidity","heat_humidity"],["co2","heat_co2"],["mould","heat_mould"],["values","heat_values"],["wifi","heat_wifi"]],t.heatmap)}
        ${he(e,"flows","flows",t.flows)} ${he(e,"holograms","holos",t.holograms)}
      </div>
      ${c(e,"tap_in_room","card_tap_in_room","card_tap_in_room_hint")} ${w(e,"room_double_tap","room_double_tap",[["auto","card_room_double_tap_auto"],["area","room_double_tap_area"],["plan","room_double_tap_plan"],["off","room_double_tap_off"]],t.room_double_tap)} ${this.markersOutside()} ${this.controlsSection()} ${this.floorThumbsToggle()} ${c(e,"room_names","card_room_names")} ${c(e,"energy","card_energy")}
      ${c(e,"room_buttons","card_room_buttons","card_room_buttons_hint")} ${c(e,"room_panel","card_room_panel","card_room_panel_hint")} ${c(e,"fullscreen_button","card_fullscreen_button","card_fullscreen_button_hint")}
      ${c(e,"explode","card_explode")} ${c(e,"roof_fade","card_roof_fade","card_roof_fade_hint")} ${c(e,"stats","card_stats","card_stats_hint")}`}render(){return this.hass&&Ce(this.hass,this)?d:l`${this.viewSection()} ${this.showSection()} ${this.featuresSection()} ${this.kioskSection()}`}static styles=$e};customElements.get("nextfloor-card-editor")||customElements.define("nextfloor-card-editor",ue);export{ue as NextFloorCardEditor};
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
